/* Kern: hulpfuncties, opslag, herhaalsysteem (SRS), antwoordcontrole, spraak en geluid. */
(function (S) {
  'use strict';

  /* ================= Hulpfuncties ================= */
  const U = {};
  U.h = function (tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      el.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
    }
    return el;
  };
  U.esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  U.shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  U.pick = a => a[Math.floor(Math.random() * a.length)];
  U.sample = (a, n) => U.shuffle(a).slice(0, n);
  U.clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  U.todayKey = (d = new Date()) => { const x = new Date(d.getTime() - 4 * 3600e3); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); };
  U.dayIndex = (d = new Date()) => { const x = new Date(d.getTime() - 4 * 3600e3); return Math.floor((Date.UTC(x.getFullYear(), x.getMonth(), x.getDate())) / 864e5); };
  U.pct = x => Math.round((x || 0) * 100) + '%';
  U.plural = (n, one, many) => n + ' ' + (n === 1 ? one : many);
  U.debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
  S.U = U;

  /* ================= Opslag ================= */
  const KEY = 'spt.v1';
  function defaults() {
    return {
      v: 1, created: Date.now(), name: '',
      settings: {
        goal: 20, explain: 'auto', strictAccents: false, voice: '', rate: 0.9, sound: true, theme: 'auto',
        aiKey: '', aiModel: 'claude-opus-5-5', autoSpeak: true, tutorVoice: false, unlockAll: false, region: 'latam'
      },
      placement: { done: false, level: null, start: null, date: null },
      units: {}, levels: {}, srs: {}, tags: {},
      skills: { vocab: { ok: 0, no: 0 }, grammar: { ok: 0, no: 0 }, listen: { ok: 0, no: 0 }, speak: { ok: 0, no: 0 }, read: { ok: 0, no: 0 }, write: { ok: 0, no: 0 } },
      days: {}, xp: 0, streak: { cur: 0, best: 0, last: null }, current: null, badges: [], done: {}
    };
  }
  function merge(base, extra) {
    for (const k in extra) {
      if (extra[k] && typeof extra[k] === 'object' && !Array.isArray(extra[k]) && base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) merge(base[k], extra[k]);
      else base[k] = extra[k];
    }
    return base;
  }
  const Store = {
    state: defaults(),
    ok: true,
    load() {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) this.state = merge(defaults(), JSON.parse(raw));
      } catch (e) { this.ok = false; }
      return this.state;
    },
    save() {
      try { localStorage.setItem(KEY, JSON.stringify(this.state)); this.ok = true; } catch (e) { this.ok = false; }
    },
    export() { return JSON.stringify(this.state, null, 1); },
    import(text) {
      const data = JSON.parse(text);
      if (!data || typeof data !== 'object' || !data.settings) throw new Error('Geen geldig back-upbestand');
      this.state = merge(defaults(), data); this.save();
    },
    reset() { const key = this.state.settings.aiKey; this.state = defaults(); this.state.settings.aiKey = key; this.save(); },
    today() {
      const k = U.todayKey();
      if (!this.state.days[k]) this.state.days[k] = { min: 0, xp: 0, items: 0, ok: 0, done: {} };
      return this.state.days[k];
    },
    addTime(min) { this.today().min += min; },
    addXP(n) { this.state.xp += n; this.today().xp += n; },
    touchStreak() {
      const st = this.state.streak, k = U.todayKey();
      if (st.last === k) return;
      const y = U.todayKey(new Date(Date.now() - 864e5));
      st.cur = st.last === y ? st.cur + 1 : 1;
      st.best = Math.max(st.best, st.cur);
      st.last = k;
    },
    liveStreak() {
      const st = this.state.streak; const k = U.todayKey(); const y = U.todayKey(new Date(Date.now() - 864e5));
      return (st.last === k || st.last === y) ? st.cur : 0;
    },
    unit(id) { if (!this.state.units[id]) this.state.units[id] = { steps: {}, best: 0, done: false }; return this.state.units[id]; },
    mark(tag, ok) {
      if (!tag) return;
      const t = this.state.tags[tag] || (this.state.tags[tag] = { ok: 0, no: 0, last: 0 });
      ok ? t.ok++ : t.no++; t.last = Date.now();
    },
    skill(name, ok) { const s = this.state.skills[name]; if (s) ok ? s.ok++ : s.no++; }
  };
  S.Store = Store;

  /* ================= Herhaalsysteem (vereenvoudigd SM-2, per dag) ================= */
  const SRS = {
    add(id, firstInterval = 1) {
      const db = Store.state.srs;
      if (db[id]) return false;
      db[id] = { d: U.dayIndex() + firstInterval, i: firstInterval, e: 2.4, r: 1, l: 0, s: Date.now() };
      return true;
    },
    has(id) { return !!Store.state.srs[id]; },
    grade(id, ok) {
      const db = Store.state.srs; const c = db[id];
      if (!c) return;
      const today = U.dayIndex();
      if (ok) {
        if (c.d > today) return; // vroeg geoefend: geen sprong
        c.r++;
        c.i = c.i < 1 ? 1 : c.i < 2 ? 3 : Math.round(c.i * c.e * (0.95 + Math.random() * 0.1));
        c.i = Math.min(c.i, 365);
        c.e = Math.min(3.0, c.e + 0.05);
        c.d = today + c.i;
      } else {
        c.l++; c.r = 0; c.i = 0; c.e = Math.max(1.3, c.e - 0.2); c.d = today;
      }
    },
    due(limit = 999) {
      const t = U.dayIndex();
      return Object.entries(Store.state.srs).filter(([, c]) => c.d <= t)
        .sort((a, b) => a[1].d - b[1].d || a[1].i - b[1].i).slice(0, limit).map(([id]) => id);
    },
    dueCount() { const t = U.dayIndex(); let n = 0; for (const k in Store.state.srs) if (Store.state.srs[k].d <= t) n++; return n; },
    status(id) {
      const c = Store.state.srs[id];
      if (!c) return 'new';
      if (c.i >= 21) return 'mastered';
      if (c.i >= 7) return 'known';
      return 'learning';
    },
    forecast(days = 7) {
      const t = U.dayIndex(); const out = new Array(days).fill(0);
      for (const k in Store.state.srs) { const d = Store.state.srs[k].d - t; if (d < days) out[Math.max(0, d)]++; }
      return out;
    }
  };
  S.SRS = SRS;

  /* ================= Antwoordcontrole ================= */
  const PRON = /^(yo|tú|tu|él|el|ella|usted|nosotros|nosotras|ellos|ellas|ustedes)\s+/;
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFC')
      .replace(/[“”«»"]/g, '').replace(/[‘’`´]/g, "'")
      .replace(/[.,!?¡¿;:…()\-–—]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function bare(s) { return norm(s).normalize('NFD').replace(/[́̈̃]/g, '').normalize('NFC'); }
  function expand(ans) {
    // "(yo) me llamo" → met en zonder; "a/b" niet ondersteund bewust (gebruik array)
    const out = new Set();
    const rec = (s) => {
      const m = s.match(/\(([^)]*)\)/);
      if (!m) { out.add(norm(s)); return; }
      rec(s.replace(m[0], m[1])); rec(s.replace(m[0], ''));
    };
    rec(ans);
    for (const x of [...out]) { const y = x.replace(PRON, ''); if (y !== x) out.add(y); }
    return [...out];
  }
  function lev(a, b) {
    if (a === b) return 0;
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  function check(user, answers, opts = {}) {
    const strict = opts.strict ?? Store.state.settings.strictAccents;
    const list = (Array.isArray(answers) ? answers : [answers]).filter(Boolean);
    const u = norm(user), uNoPron = u.replace(PRON, '');
    const cands = []; list.forEach(a => expand(a).forEach(x => cands.push([x, a])));
    for (const [c, orig] of cands) if (c === u || c === uNoPron) return { ok: true, exact: true, best: orig };
    for (const [c, orig] of cands) {
      if (bare(c) === bare(u) || bare(c) === bare(uNoPron)) {
        const missN = /ñ/.test(c) && !/ñ/.test(u);
        return strict ? { ok: false, warn: 'accent', best: orig } : { ok: true, exact: false, warn: missN ? 'enye' : 'accent', best: orig };
      }
    }
    // kleine typfout bij langere antwoorden
    let best = null, bestD = 99;
    for (const [c, orig] of cands) { const d = lev(bare(c), bare(uNoPron)); if (d < bestD) { bestD = d; best = orig; } }
    const len = bare(best || '').length;
    if (best && len >= 7 && bestD === 1 && !opts.noTypo) return { ok: true, exact: false, warn: 'typo', best };
    return { ok: false, best: list[0], dist: bestD };
  }
  function similarity(a, b) { a = bare(a); b = bare(b); const L = Math.max(a.length, b.length) || 1; return 1 - lev(a, b) / L; }
  S.check = { check, norm, bare, similarity, lev };

  /* ================= Spraak ================= */
  const Speech = {
    voices: [], ready: false,
    init() {
      if (!('speechSynthesis' in window)) return;
      const load = () => { this.voices = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang)); this.ready = true; };
      load();
      speechSynthesis.addEventListener ? speechSynthesis.addEventListener('voiceschanged', load) : (speechSynthesis.onvoiceschanged = load);
    },
    canSpeak() { return 'speechSynthesis' in window; },
    canListen() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); },
    rank(v) {
      const l = v.lang.replace('_', '-').toLowerCase();
      let s = 0;
      if (l === 'es-mx') s = 100; else if (l === 'es-us') s = 95; else if (l === 'es-419') s = 92;
      else if (/es-(co|ar|cl|pe|ve|uy|cr|ec|gt|pa|pr|do|bo|py|sv|hn|ni|cu)/.test(l)) s = 85; else if (l === 'es-es') s = 30; else s = 50;
      if (/google|natural|premium|enhanced|neural/i.test(v.name)) s += 8;
      if (/paulina|juan|sabina|monica|mónica/i.test(v.name) && l !== 'es-es') s += 3;
      return s;
    },
    voice() {
      const want = Store.state.settings.voice;
      if (want) { const v = this.voices.find(x => x.voiceURI === want || x.name === want); if (v) return v; }
      return this.voices.slice().sort((a, b) => this.rank(b) - this.rank(a))[0] || null;
    },
    say(text, opt = {}) {
      if (!this.canSpeak() || !text) return Promise.resolve();
      return new Promise(res => {
        try {
          speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(String(text).replace(/\s*\/\s*/g, ', '));
          const v = this.voice();
          if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'es-MX';
          u.rate = (opt.slow ? 0.65 : 1) * (Store.state.settings.rate || 0.9);
          u.onend = u.onerror = () => res();
          speechSynthesis.speak(u);
          setTimeout(res, 15000);
        } catch (e) { res(); }
      });
    },
    stop() { try { speechSynthesis.cancel(); } catch (e) { /* */ } },
    listen() {
      const R = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!R) return Promise.reject(new Error('Spraakherkenning wordt niet ondersteund in deze browser'));
      return new Promise((resolve, reject) => {
        const r = new R();
        const v = this.voice();
        r.lang = v && !/es-es/i.test(v.lang) ? v.lang : 'es-MX';
        r.interimResults = false; r.maxAlternatives = 3; r.continuous = false;
        let done = false;
        r.onresult = e => { done = true; const alts = []; for (let i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript); resolve(alts); };
        r.onerror = e => { if (!done) { done = true; reject(new Error(e.error === 'not-allowed' ? 'Microfoon geen toestemming' : e.error === 'no-speech' ? 'Niets gehoord — probeer opnieuw' : 'Spraakherkenning: ' + e.error)); } };
        r.onend = () => { if (!done) { done = true; reject(new Error('Niets gehoord — probeer opnieuw')); } };
        try { r.start(); } catch (e) { reject(e); }
        Speech._rec = r;
      });
    },
    stopListening() { try { Speech._rec && Speech._rec.stop(); } catch (e) { /* */ } }
  };
  S.Speech = Speech;

  /* ================= Geluid ================= */
  let actx = null;
  function tone(freqs, dur = 0.09, type = 'sine', vol = 0.06) {
    if (!Store.state.settings.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      let t = actx.currentTime;
      freqs.forEach(f => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = type; o.frequency.value = f; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur * 1.8);
        o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + dur * 2); t += dur;
      });
    } catch (e) { /* */ }
  }
  S.Sound = {
    good: () => tone([660, 880], 0.08, 'sine'),
    bad: () => tone([220, 180], 0.11, 'triangle', 0.05),
    win: () => tone([523, 659, 784, 1047], 0.1, 'sine', 0.06),
    tap: () => tone([440], 0.03, 'sine', 0.025)
  };
})(window.SPT = window.SPT || {});
