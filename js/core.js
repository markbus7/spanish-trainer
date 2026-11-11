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
      else if (k === 'style' && typeof v === 'object') { for (const p in v) { if (p.startsWith('--')) el.style.setProperty(p, v[p]); else el.style[p] = v[p]; } }
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
      v: 1, created: Date.now(), updated: 0, epoch: 0, name: '',
      settings: {
        goal: 20, explain: 'auto', strictAccents: false, voice: '', rate: 0.9, sound: true, theme: 'auto',
        aiKey: '', aiModel: 'claude-sonnet-5-5', aiModelV: 2, autoSpeak: true, tutorVoice: false, unlockAll: false, region: 'latam'
      },
      placement: { done: false, level: null, start: null, date: null },
      units: {}, levels: {}, srs: {}, tags: {},
      skills: { vocab: { ok: 0, no: 0 }, grammar: { ok: 0, no: 0 }, listen: { ok: 0, no: 0 }, speak: { ok: 0, no: 0 }, read: { ok: 0, no: 0 }, write: { ok: 0, no: 0 } },
      days: {}, xp: 0, streak: { cur: 0, best: 0, last: null }, current: null, badges: [], done: {},
      tests: [], games: {}, fast: 0, myWords: {}
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
        if (raw) {
          const saved = JSON.parse(raw), ss = saved.settings || {};
          // v1.5: Sonnet is de nieuwe standaard. Wie nog op de oude standaard (Opus) stond, gaat één keer mee over.
          if (!(ss.aiModelV >= 2) && ss.aiModel === 'claude-opus-5-5') ss.aiModel = 'claude-sonnet-5-5';
          this.state = merge(defaults(), saved);
        }
      } catch (e) { this.ok = false; }
      return this.state;
    },
    save(opts) {
      if (!(opts && opts.quiet)) this.state.updated = Date.now();
      try { localStorage.setItem(KEY, JSON.stringify(this.state)); this.ok = true; } catch (e) { this.ok = false; }
      if (!(opts && opts.quiet) && S.Sync) S.Sync.changed();
    },
    export() { return JSON.stringify(this.state, null, 1); },
    import(text) {
      const data = JSON.parse(text);
      if (!data || typeof data !== 'object' || !data.settings) throw new Error('Geen geldig back-upbestand');
      const key = this.state.settings.aiKey;
      this.state = merge(defaults(), data); this.state.settings.aiKey = key;
      this.state.epoch = Date.now(); // bewuste vervanging: wint bij synchroniseren
      this.save();
    },
    reset() { const key = this.state.settings.aiKey; this.state = defaults(); this.state.settings.aiKey = key; this.state.epoch = Date.now(); this.save(); },
    /* Twee versies van de voortgang samenvoegen (voor synchronisatie tussen apparaten).
       Idempotent: twee keer samenvoegen geeft hetzelfde resultaat, dus niets wordt dubbel geteld. */
    mergeStates(local, remote) { return mergeStates(local, remote); },
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

  function mergeStates(local, remote) {
    const clone = x => JSON.parse(JSON.stringify(x));
    const A = merge(defaults(), clone(local || {})), B = merge(defaults(), clone(remote || {}));
    const aiKey = A.settings.aiKey;
    // na wissen of back-up terugzetten wint de nieuwste "epoch" in zijn geheel
    if ((A.epoch || 0) !== (B.epoch || 0)) {
      const w = (A.epoch || 0) > (B.epoch || 0) ? A : B;
      w.settings.aiKey = aiKey; return w;
    }
    const aNewer = (A.updated || 0) >= (B.updated || 0);
    const N = aNewer ? A : B, O = aNewer ? B : A;
    const out = clone(N);
    const max = (x, y) => Math.max(x || 0, y || 0);
    out.created = Math.min(A.created || Date.now(), B.created || Date.now());
    out.updated = max(A.updated, B.updated);
    out.settings.aiKey = aiKey;
    if (!N.placement.done && O.placement.done) out.placement = clone(O.placement);
    if (!out.name && O.name) out.name = O.name;
    // units: stappen en status samenvoegen
    for (const id in O.units) {
      const o = O.units[id], n = out.units[id];
      if (!n) { out.units[id] = clone(o); continue; }
      n.steps = n.steps || {};
      for (const k in o.steps || {}) if (o.steps[k] && !n.steps[k]) n.steps[k] = o.steps[k];
      n.best = max(n.best, o.best); n.done = !!(n.done || o.done);
      if (o.tested || n.tested) n.tested = true;
    }
    for (const id in O.levels) {
      const o = O.levels[id], n = out.levels[id];
      if (!n) { out.levels[id] = clone(o); continue; }
      n.passed = !!(n.passed || o.passed); n.best = max(n.best, o.best);
    }
    // herhaalsysteem: per kaart de meest recent geoefende versie
    const stamp = c => c.t || c.s || 0;
    for (const id in O.srs) {
      const o = O.srs[id], n = out.srs[id];
      if (!n || stamp(o) > stamp(n) || (stamp(o) === stamp(n) && (o.r || 0) + (o.l || 0) > (n.r || 0) + (n.l || 0))) out.srs[id] = clone(o);
    }
    for (const id in O.tags) {
      const o = O.tags[id], n = out.tags[id];
      if (!n) { out.tags[id] = clone(o); continue; }
      n.ok = max(n.ok, o.ok); n.no = max(n.no, o.no); n.last = max(n.last, o.last);
    }
    for (const k in O.skills) {
      const o = O.skills[k], n = out.skills[k] || (out.skills[k] = { ok: 0, no: 0 });
      n.ok = max(n.ok, o.ok); n.no = max(n.no, o.no);
    }
    for (const k in O.days) {
      const o = O.days[k], n = out.days[k];
      if (!n) { out.days[k] = clone(o); continue; }
      for (const f of ['min', 'xp', 'items', 'ok']) n[f] = max(n[f], o[f]);
      n.done = Object.assign({}, o.done || {}, n.done || {});
    }
    out.xp = max(A.xp, B.xp);
    const sa = A.streak, sb = B.streak;
    const later = (sa.last || '') > (sb.last || '') ? sa : (sb.last || '') > (sa.last || '') ? sb : (sa.cur >= sb.cur ? sa : sb);
    out.streak = { cur: later.cur, last: later.last, best: Math.max(sa.best || 0, sb.best || 0, later.cur || 0) };
    out.badges = [...new Set([...(N.badges || []), ...(O.badges || [])])];
    out.done = Object.assign({}, O.done || {}, N.done || {});
    // niveautests: alle uitslagen van beide apparaten (op tijdstip), oudste eerst
    const seenT = new Set(); out.tests = [];
    [...(N.tests || []), ...(O.tests || [])].sort((a, b) => a.d - b.d).forEach(t => { if (t && !seenT.has(t.d)) { seenT.add(t.d); out.tests.push(clone(t)); } });
    out.tests = out.tests.slice(-60);
    for (const id in O.games || {}) {
      const o = O.games[id], n = out.games[id] || (out.games[id] = {});
      for (const f of ['n', 'words', 'good']) n[f] = max(n[f], o[f]);
    }
    // eigen woorden: per sleutel de nieuwste versie (ook verwijderingen)
    out.myWords = Object.assign({}, N.myWords || {});
    for (const k in O.myWords || {}) { const o = O.myWords[k], n = out.myWords[k]; if (!n || (o.t || 0) > (n.t || 0)) out.myWords[k] = clone(o); }
    for (const k in out.myWords) if (out.myWords[k].del) delete out.srs['w|my|' + k];
    if (!out.current) out.current = O.current;
    return out;
  }

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
      c.t = Date.now();
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
    /* Opnames: vaste lesstof is vooraf ingesproken (audio/<sleutel>.mp3, zie tools/). Anders de stem van het apparaat. */
    clips: null, levels: null, el: null,
    clean(t) { return String(t).normalize('NFC').replace(/\s*\/\s*/g, ', ').replace(/\s+/g, ' ').trim(); },
    key(t) {
      const s = this.clean(t).toLowerCase();
      let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
      for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677); }
      h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
      h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
      return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
    },
    loadClips() {
      if (typeof fetch !== 'function' || typeof Audio !== 'function') return;
      this.clipsLoaded = fetch('audio/index.json').then(r => r.ok ? r.json() : null).then(j => { if (j && j.clips) { this.clips = new Set(j.clips); this.levels = j.levels || null; } }).catch(() => { /* geen opnames */ });
    },
    hasClip(text) { return !!(this.clips && Store.state.settings.clips !== false && text && this.clips.has(this.key(text))); },
    playClip(text, opt) {
      return new Promise((res, rej) => {
        const a = this.el || (this.el = new Audio());
        let done = false;
        const end = ok => { if (done) return; done = true; a.onended = a.onerror = null; if (this._end === end) this._end = null; ok ? res() : rej(); };
        this._end = end; // stop() rondt het lopende fragment af
        a.src = 'audio/' + this.key(text) + '.mp3';
        a.preservesPitch = true; a.webkitPreservesPitch = true;
        a.defaultPlaybackRate = a.playbackRate = Math.max(0.5, Math.min(1.5, (opt.slow ? 0.7 : 1) * (Store.state.settings.rate || 0.9) / 0.9));
        a.onended = () => end(true); a.onerror = () => end(false);
        const p = a.play(); if (p && p.catch) p.catch(err => end(err && err.name === 'AbortError'));
        setTimeout(() => end(true), 60000);
      });
    },
    init() {
      this.loadClips();
      if (!('speechSynthesis' in window)) return;
      const load = () => { this.voices = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang)); this.ready = true; };
      load();
      speechSynthesis.addEventListener ? speechSynthesis.addEventListener('voiceschanged', load) : (speechSynthesis.onvoiceschanged = load);
    },
    canSpeak() { return 'speechSynthesis' in window || !!this.clips; },
    canListen() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); },
    rank(v) {
      const l = v.lang.replace('_', '-').toLowerCase();
      let s = 0;
      if (l === 'es-mx') s = 100; else if (l === 'es-us') s = 95; else if (l === 'es-419') s = 92;
      else if (/es-(co|ar|cl|pe|ve|uy|cr|ec|gt|pa|pr|do|bo|py|sv|hn|ni|cu)/.test(l)) s = 85; else if (l === 'es-es') s = 30; else s = 50;
      if (/google|natural|premium|enhanced|neural|siri|mejorad/i.test(v.name)) s += 8;
      // Apple-effectstemmen (iOS/macOS) klinken robotachtig of grappig: alleen als niets anders er is
      if (/\b(eddy|flo|grandma|grandpa|abuel[ao]|reed|rocko|sandy|shelley|bad news|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|albert|fred|junior|kathy|ralph)\b/i.test(v.name)) s -= 70;
      if (/paulina|juan|sabina|monica|mónica/i.test(v.name) && l !== 'es-es') s += 3;
      return s;
    },
    voice() {
      if (!this.voices.length && 'speechSynthesis' in window) this.voices = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang));
      const want = Store.state.settings.voice;
      if (want) { const v = this.voices.find(x => x.voiceURI === want || x.name === want); if (v) return v; }
      return this.voices.slice().sort((a, b) => this.rank(b) - this.rank(a))[0] || null;
    },
    say(text, opt = {}) {
      if (!text) return Promise.resolve();
      if (this.hasClip(text)) { this.stop(); return this.playClip(text, opt).catch(() => this.speak(text, opt)); }
      return this.speak(text, opt);
    },
    speak(text, opt = {}) {
      if (!('speechSynthesis' in window)) return Promise.resolve();
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
    stop() { try { speechSynthesis.cancel(); } catch (e) { /* */ } try { this.el && this.el.pause(); } catch (e) { /* */ } if (this._end) this._end(true); },
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
