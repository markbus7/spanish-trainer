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

  /* ================= Cursussen =================
     Een cursus is een taalpaar: target = wat je leert, ui = taal van menu's en uitleg.
     In de lesstof heten de velden historisch 'es' (doeltaal) en 'nl' (uitlegtaal); dat blijft zo voor elke cursus. */
  const COURSES = {
    'es-nl': { id: 'es-nl', target: 'es', ui: 'nl', speak: 'es-MX', listen: 'es-MX', flag: '🌎', ns: null, hello: '¡Hola! ¿Cómo estás? Bienvenido a tu clase de español.', device: 'Y esto es la voz de tu dispositivo.',
      brand: 'Español <em>latino</em>', title: 'Español Latino', name: { nl: 'Spaans', es: 'español' }, ai: { target: 'Latin American Spanish', native: 'Dutch' } },
    'en-es': { id: 'en-es', target: 'en', ui: 'es', speak: 'en-US', listen: 'en-US', flag: '🇺🇸', ns: 'en-es', hello: 'Hello! How are you? Welcome to your English class.', device: 'And this is the voice of your device.',
      brand: 'English <em>fácil</em>', title: 'English Fácil', name: { nl: 'Engels', es: 'inglés' }, ai: { target: 'American English', native: 'Latin American Spanish' } },
    'nl-es': { id: 'nl-es', target: 'nl', ui: 'es', speak: 'nl-NL', listen: 'nl-NL', flag: '🇳🇱', ns: 'nl-es', hello: 'Hallo! Hoe gaat het? Welkom bij je les Nederlands.', device: 'En dit is de stem van je apparaat.',
      brand: 'Neerlandés <em>fácil</em>', title: 'Neerlandés Fácil', name: { nl: 'Nederlands', es: 'neerlandés' }, ai: { target: 'Dutch (as spoken in the Netherlands)', native: 'Latin American Spanish' } },
    // Engels voor Nederlandstaligen, A1 t/m C2 (Amerikaans Engels; Britse verschillen worden uitgelegd).
    'en-nl': { id: 'en-nl', target: 'en', ui: 'nl', speak: 'en-US', listen: 'en-US', flag: '🇺🇸', ns: 'en-nl', hello: 'Hello! How are you? Welcome to your English class.', device: 'And this is the voice of your device.',
      brand: 'English <em>pro</em>', title: 'English Pro', name: { nl: 'Engels', es: 'inglés' }, ai: { target: 'American English', native: 'Dutch' }, allLevels: true }
  };
  S.COURSES = COURSES;

  /* ================= Profielen =================
     Meerdere mensen op één apparaat, elk met een eigen voortgang en eigen synchronisatie.
     Het eerste profiel ("main") gebruikt de oude opslagsleutels (spt.v1, spt.sync), zodat bestaande voortgang
     nooit verplaatst wordt. Het register (spt.profiles) wordt pas geschreven als er iets aan profielen verandert. */
  const PKEY = 'spt.profiles', MAIN = 'main';
  const AVATARS = ['🙂', '😎', '🦊', '🐢', '🦜', '🌺', '🌵', '⚽', '🎸', '☕', '🌊', '🦥'];
  const Profiles = {
    MAIN, AVATARS,
    reg: null,
    unlocked: false, // beheerderspincode ingevuld in deze sessie
    init() {
      let r = null;
      try { r = JSON.parse(localStorage.getItem(PKEY) || 'null'); } catch (e) { r = null; }
      if (!r || !Array.isArray(r.list) || !r.list.length) r = { active: MAIN, list: [], pin: '' };
      if (!r.list.some(p => p.id === MAIN)) r.list.unshift({ id: MAIN, name: '', avatar: '🙂', created: 0 });
      if (!r.list.some(p => p.id === r.active)) r.active = MAIN;
      r.list.forEach(p => { if (!Array.isArray(p.courses) || !p.courses.length) p.courses = ['es-nl']; p.courses = p.courses.filter(c => COURSES[c]); if (!p.courses.length) p.courses = ['es-nl']; if (!p.courses.includes(p.course)) p.course = p.courses[0]; });
      this.reg = r; return r;
    },
    /* Actieve cursus van een profiel. */
    courseOf(id) { const p = this.get(id); return (p && p.course) || 'es-nl'; },
    write() { try { localStorage.setItem(PKEY, JSON.stringify(this.reg)); } catch (e) { /* opslag vol of geblokkeerd */ } },
    list() { return this.reg.list.slice(); },
    get(id) { return this.reg.list.find(p => p.id === id) || null; },
    activeId() { return this.reg.active; },
    active() { return this.get(this.reg.active); },
    many() { return this.reg.list.length > 1; },
    /* Opslag per profiel en cursus. Main + Spaans = de oude sleutel; de eerste (Spaanse) cursus van andere profielen houdt spt.p.<id>. */
    storeKey(id, course) {
      course = course || this.courseOf(id);
      if (course === 'es-nl') return id === MAIN ? 'spt.v1' : 'spt.p.' + id;
      return 'spt.p.' + id + '.' + course;
    },
    syncKey: id => id === MAIN ? 'spt.sync' : 'spt.p.' + id + '.sync',
    /* De AI-sleutel (Lupe) hoort bij het profiel, niet bij een cursus: wie van taal wisselt, houdt hem.
       Hij blijft op dit apparaat (de sync stuurt hem nooit mee). */
    aiKeyKey: id => id === MAIN ? 'spt.aikey' : 'spt.p.' + id + '.aikey',
    aiKey(id) {
      id = id || this.activeId();
      try {
        const k = localStorage.getItem(this.aiKeyKey(id));
        if (k != null) return k;
        // Eerste keer na de update: de sleutel staat nog in één (of meer) cursussen. Neem de nieuwste en zet hem bij het profiel.
        const p = this.get(id); let best = '', when = -1;
        ((p && p.courses) || ['es-nl']).forEach(c => {
          try { const d = JSON.parse(localStorage.getItem(this.storeKey(id, c)) || 'null'); const v = d && d.settings && String(d.settings.aiKey || '').trim(); if (v && (d.updated || 0) > when) { best = v; when = d.updated || 0; } } catch (e) { /* negeer */ }
        });
        if (best) this.setAiKey(id, best);
        return best;
      } catch (e) { return ''; }
    },
    setAiKey(id, key, clean) {
      key = String(key || '').trim();
      try {
        localStorage.setItem(this.aiKeyKey(id), key);
        if (!clean) return; // bij het overzetten blijft de bestaande voortgang onaangeroerd
        // Sleutel gewijzigd of verwijderd: geen oude kopieën in de cursussen laten staan.
        const p = this.get(id);
        ((p && p.courses) || ['es-nl']).forEach(c => {
          const sk = this.storeKey(id, c);
          try { const d = JSON.parse(localStorage.getItem(sk) || 'null'); if (d && d.settings && d.settings.aiKey) { d.settings.aiKey = ''; localStorage.setItem(sk, JSON.stringify(d)); } } catch (e) { /* negeer */ }
        });
      } catch (e) { /* opslag vol of geblokkeerd */ }
    },
    /* Korte blik in de voortgang van een profiel, zonder het te laden (voor de profielkiezer). */
    peek(id, course) {
      try {
        const d = JSON.parse(localStorage.getItem(this.storeKey(id, course)) || 'null') || {};
        return { name: d.name || '', xp: d.xp || 0, level: d.placement && d.placement.level || null, updated: d.updated || 0 };
      } catch (e) { return { name: '', xp: 0, level: null, updated: 0 }; }
    },
    label(id) { const p = this.get(id); if (!p) return ''; return p.name || this.peek(id).name || (id === MAIN ? 'Profiel 1' : 'Profiel'); },
    add(name, avatar, course) {
      name = String(name || '').trim().slice(0, 30);
      if (!name) throw new Error('Vul een naam in');
      course = COURSES[course] ? course : 'es-nl';
      let id; do { id = Math.random().toString(36).slice(2, 8); } while (this.get(id) || id === MAIN);
      this.reg.list.push({ id, name, avatar: avatar || AVATARS[0], created: Date.now(), courses: [course], course });
      const fresh = defaults(); fresh.name = name;
      try { localStorage.setItem(this.storeKey(id, course), JSON.stringify(fresh)); } catch (e) { /* negeer */ }
      this.write(); return id;
    },
    /* Een cursus toevoegen aan een profiel (eigen voortgang) en/of ernaar overschakelen. */
    addCourse(id, course) {
      const p = this.get(id); if (!p || !COURSES[course]) return;
      if (!p.courses.includes(course)) {
        p.courses.push(course);
        const k = this.storeKey(id, course);
        try { if (!localStorage.getItem(k)) { const fresh = defaults(); fresh.name = this.label(id); localStorage.setItem(k, JSON.stringify(fresh)); } } catch (e) { /* negeer */ }
      }
      this.write();
    },
    switchCourse(id, course) {
      const p = this.get(id); if (!p || !COURSES[course]) return;
      this.addCourse(id, course); p.course = course; this.switchTo(id);
    },
    update(id, patch) { const p = this.get(id); if (!p) return; Object.assign(p, patch); this.write(); },
    /* Profiel en zijn gegevens van dit apparaat halen. Het eerste profiel kan niet weg. */
    remove(id) {
      if (id === MAIN || !this.get(id)) return false;
      try { this.get(id).courses.forEach(c => localStorage.removeItem(this.storeKey(id, c))); localStorage.removeItem(this.syncKey(id)); localStorage.removeItem(this.aiKeyKey(id)); } catch (e) { /* negeer */ }
      this.reg.list = this.reg.list.filter(p => p.id !== id);
      if (this.reg.active === id) this.reg.active = MAIN;
      this.write(); return true;
    },
    /* Eén cursus van een profiel weghalen (alleen op dit apparaat). De eerste cursus van een profiel is zijn hoofdcursus:
       die staat in het hoofdbestand van de sync en kan niet los weg, dus een profiel houdt altijd minstens één cursus. */
    canRemoveCourse(id, course) { const p = this.get(id); return !!(p && p.courses.length > 1 && p.courses.indexOf(course) > 0); },
    removeCourse(id, course) {
      if (!this.canRemoveCourse(id, course)) return false;
      const p = this.get(id);
      try { localStorage.removeItem(this.storeKey(id, course)); } catch (e) { /* negeer */ }
      p.courses = p.courses.filter(c => c !== course);
      if (p.course === course) p.course = p.courses[0];
      this.write(); return true;
    },
    /* Wisselen = actief profiel opslaan en de app opnieuw laden, zodat alles schoon met de nieuwe voortgang begint. */
    switchTo(id) {
      if (!this.get(id)) return;
      this.reg.active = id; this.write();
      try { sessionStorage.setItem('spt.picked', '1'); } catch (e) { /* negeer */ }
      if (typeof location !== 'undefined' && location.reload) location.reload();
    },
    /* Beheerderspincode: beschermt het synchroniseren (token) en het profielbeheer.
       Een slot op de deur, geen kluis: wie de browseropslag kan uitlezen, kan er omheen. */
    async hash(pin) {
      const data = new TextEncoder().encode('spt-pin|' + String(pin).trim());
      const buf = await crypto.subtle.digest('SHA-256', data);
      return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    },
    hasPin() { return !!this.reg.pin; },
    locked() { return this.hasPin() && !this.unlocked; },
    async setPin(pin) {
      pin = String(pin || '').trim();
      if (!/^\d{4,8}$/.test(pin)) throw new Error('Kies 4 tot 8 cijfers');
      this.reg.pin = await this.hash(pin); this.unlocked = true; this.write();
    },
    clearPin() { this.reg.pin = ''; this.unlocked = false; this.write(); },
    async unlock(pin) { if (!this.hasPin()) return true; const ok = (await this.hash(pin)) === this.reg.pin; if (ok) this.unlocked = true; return ok; }
  };
  try { Profiles.init(); } catch (e) { Profiles.reg = { active: MAIN, list: [{ id: MAIN, name: '', avatar: '🙂', created: 0, courses: ['es-nl'], course: 'es-nl' }], pin: '' }; }
  S.Profiles = Profiles;
  // De actieve cursus. Tests en hulpscripts kunnen SPT_COURSE zetten om een andere cursus te laden.
  S.course = COURSES[(typeof self !== 'undefined' && self.SPT_COURSE) || Profiles.courseOf(Profiles.activeId())] || COURSES['es-nl'];
  /* Lesstof hoort bij één cursus: contentbestanden beginnen met if (!S.isCourse('en-es')) return; */
  S.isCourse = id => S.course.id === id;
  S.LOC = S.course.ui === 'es' ? 'es-PA' : 'nl-NL'; // datums en getallen

  /* ================= Opslag ================= */
  const KEY = Profiles.storeKey(Profiles.activeId(), S.course.id);
  function defaults() {
    return {
      v: 1, created: Date.now(), updated: 0, epoch: 0, name: '',
      settings: {
        goal: 20, explain: 'auto', strictAccents: false, voice: '', rate: 0.9, sound: true, theme: 'auto',
        aiKey: '', aiModel: 'claude-sonnet-5-5', aiModelV: 2, autoSpeak: true, tutorVoice: true, tutorVoiceV: 2, unlockAll: false, region: 'latam'
      },
      placement: { done: false, level: null, start: null, date: null },
      units: {}, levels: {}, srs: {}, tags: {},
      skills: { vocab: { ok: 0, no: 0 }, grammar: { ok: 0, no: 0 }, listen: { ok: 0, no: 0 }, speak: { ok: 0, no: 0 }, read: { ok: 0, no: 0 }, write: { ok: 0, no: 0 } },
      days: {}, xp: 0, streak: { cur: 0, best: 0, last: null }, current: null, badges: [], done: {},
      tests: [], games: {}, fast: 0, myWords: {},
      lupe: { log: [], n: 0 }, // fouten uit gesprekken met Lupe (js/mistakes.js)
      places: {}, // uitbreiding «Op reis»: voortgang per land (js/mundo.js)
      partial: {}, // zinnen met fouten: welke woorden al goed waren (sleutel = srsId)
      paused: { t: 0, data: null } // onderbroken oefening, om later verder te gaan
    };
  }
  function merge(base, extra) {
    for (const k in extra) {
      if (extra[k] && typeof extra[k] === 'object' && !Array.isArray(extra[k]) && base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) merge(base[k], extra[k]);
      else base[k] = extra[k];
    }
    return base;
  }
  function migrateSettings(ss) {
    if (!ss) return;
    // v1.5: Sonnet is de nieuwe standaard. Wie nog op de oude standaard (Opus) stond, gaat één keer mee over.
    if (!(ss.aiModelV >= 2) && ss.aiModel === 'claude-opus-5-5') ss.aiModel = 'claude-sonnet-5-5';
    // v1.8: de docente (Lupe) praat standaard hardop. Eén keer voor iedereen aanzetten; daarna telt je eigen keuze.
    if (!(ss.tutorVoiceV >= 2)) { ss.tutorVoice = true; ss.tutorVoiceV = 2; }
  }
  const Store = {
    state: defaults(),
    ok: true,
    load() {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) {
          const saved = JSON.parse(raw), ss = saved.settings || {};
          migrateSettings(ss);
          this.state = merge(defaults(), saved);
          if (S.Mistakes && this.state.lupe) S.Mistakes.scrubAll(this.state.lupe); // privacy: oude berichten weg
        }
      } catch (e) { this.ok = false; }
      // AI-sleutel van het profiel (geldt voor alle cursussen); oude sleutels in de cursus gaan hier één keer mee over
      { const k = Profiles.aiKey(Profiles.activeId()); this.state.settings.aiKey = k; this._aiKey = k; }
      return this.state;
    },
    save(opts) {
      if (this.frozen) return; // gegevens van deze cursus worden net verwijderd: niets meer terugschrijven
      if (!(opts && opts.quiet)) this.state.updated = Date.now();
      const ak = String(this.state.settings.aiKey || '').trim();
      if (ak !== this._aiKey) { Profiles.setAiKey(Profiles.activeId(), ak, true); this._aiKey = ak; }
      try { localStorage.setItem(KEY, JSON.stringify(this.state, (k, v) => k === 'aiKey' ? '' : v)); this.ok = true; } catch (e) { this.ok = false; }
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
    const a0 = clone(local || {}), b0 = clone(remote || {});
    migrateSettings(a0.settings); migrateSettings(b0.settings);
    const A = merge(defaults(), a0), B = merge(defaults(), b0);
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
    if (out.me === undefined && O.me) out.me = O.me; // eigen personage (js/cast.js); '' = bewust geen
    if (!out.meLook && O.meLook) out.meLook = O.meLook; // hoedje, bril enz. van je personage
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
    // Op reis: per land het eerste bezoek, het meeste oefenen, de beste score en de eerste stempel
    out.places = out.places || {};
    for (const id in O.places || {}) {
      const o = O.places[id], n = out.places[id];
      if (!n) { out.places[id] = clone(o); continue; }
      const first = (x, y) => x && y ? Math.min(x, y) : x || y || undefined;
      n.v = first(n.v, o.v); n.stamp = first(n.stamp, o.stamp); n.n = max(n.n, o.n); n.best = max(n.best, o.best);
      if (!n.stamp) delete n.stamp;
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
    // half goede zinnen: per zin de nieuwste stand (ook 'weer helemaal goed')
    out.partial = Object.assign({}, N.partial || {});
    for (const k in O.partial || {}) { const o = O.partial[k], n = out.partial[k]; if (!n || (o.t || 0) > (n.t || 0)) out.partial[k] = clone(o); }
    // fouten uit gesprekken met Lupe: alles van beide apparaten
    if (S.Mistakes) out.lupe = S.Mistakes.merge(N.lupe, O.lupe);
    // onderbroken oefening: de laatst bewaarde (of laatst afgeronde/weggegooide) wint
    const pa = A.paused || {}, pb = B.paused || {};
    out.paused = clone((pa.t || 0) >= (pb.t || 0) ? pa : pb);
    if (!out.current) out.current = O.current;
    return out;
  }

  /* ================= Onderbroken oefening =================
     Een lopende les wordt na elke vraag bewaard, zodat je na verversen (of op een ander apparaat) verder kunt.
     Oefeningen zijn gewone gegevens; een herhaalkopie verwijst naar zijn origineel via de plek in de rij. */
  const Paused = {
    MAX_AGE: 30 * 864e5,
    get() {
      const p = Store.state.paused;
      if (!p || !p.data || !p.data.snap) return null;
      if (Date.now() - (p.t || 0) > this.MAX_AGE) return null;
      return p.data;
    },
    set(data) { Store.state.paused = { t: Date.now(), data }; Store.save(); },
    clear() { if (Store.state.paused && Store.state.paused.data) { Store.state.paused = { t: Date.now(), data: null }; Store.save(); } },
    pack(r) {
      const q = r.queue, pos = new Map(q.map((it, i) => [it, i]));
      return JSON.parse(JSON.stringify({
        idx: r.idx, xp: r.xp, streak: r.streak, bestStreak: r.bestStreak, activeMs: Math.round(r.activeMs), paidXp: r.paidXp || 0, paidMs: Math.round(r.paidMs || 0),
        queue: q.map(it => { if (!it.orig) return it; const c = Object.assign({}, it, { _o: pos.get(it.orig) }); delete c.orig; return c; }),
        graded: [...r.graded].map(([it, ok]) => [pos.get(it), ok]).filter(g => g[0] != null),
        mistakes: r.mistakes.map(m => ({ i: pos.get(m.it), r: m.r })).filter(m => m.i != null)
      }));
    },
    unpack(snap) {
      const s = JSON.parse(JSON.stringify(snap));
      const queue = s.queue;
      queue.forEach(it => { if (it._o != null) { it.orig = queue[it._o]; delete it._o; } });
      return {
        queue, idx: Math.min(s.idx || 0, queue.length), xp: s.xp || 0, streak: s.streak || 0, bestStreak: s.bestStreak || 0,
        activeMs: s.activeMs || 0, paidXp: s.paidXp || 0, paidMs: s.paidMs || 0,
        graded: new Map(s.graded.filter(g => queue[g[0]]).map(([i, ok]) => [queue[i], ok])),
        mistakes: s.mistakes.filter(m => queue[m.i]).map(m => ({ it: queue[m.i], r: m.r }))
      };
    }
  };
  S.Paused = Paused;

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
      if (ok) c.g = (c.g || 0) + 1; else c.f = (c.f || 0) + 1; // totaal goed/fout, voor Mijn woordenschat
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
  // statusiconen, overal dezelfde: kiempje → boompje → ster
  SRS.ICON = { learning: '🌱', known: '🌳', mastered: '⭐' };
  S.SRS = SRS;

  /* ================= Antwoordcontrole ================= */
  const PRON = /^(yo|tú|tu|él|el|ella|usted|nosotros|nosotras|ellos|ellas|ustedes)\s+/;
  const ARTS = S.course && S.course.target === 'nl' ? /^(de|het|een)\s+/ : S.course && S.course.target === 'en' ? /^(the|a|an)\s+/ : /^(el|la|los|las|un|una)\s+/;
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFC')
      .replace(/[“”«»"]/g, '').replace(/[‘’`´]/g, "'")
      .replace(/[.,!?¡¿;:…()\-–—]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function bare(s) { return norm(s).normalize('NFD').replace(/[́̈̃]/g, '').normalize('NFC'); }
  /* Britse spelling (colour, realise, travelled …) goedrekenen in de Engelse cursus.
     Een Brits woord telt alleen als de Amerikaanse vorm ook echt in het goede antwoord staat. */
  const EN_GB = { grey: 'gray', greys: 'grays', programme: 'program', programmes: 'programs', tyre: 'tire', tyres: 'tires', cheque: 'check', cheques: 'checks', kerb: 'curb',
    mum: 'mom', mummy: 'mommy', aluminium: 'aluminum', jewellery: 'jewelry', plough: 'plow', pyjamas: 'pajamas', manoeuvre: 'maneuver', enrol: 'enroll', enrolment: 'enrollment',
    fulfil: 'fulfill', fulfilment: 'fulfillment', skilful: 'skillful', practise: 'practice', practised: 'practiced', practising: 'practicing', storey: 'story', storeys: 'stories',
    sceptical: 'skeptical', ageing: 'aging', judgement: 'judgment', aeroplane: 'airplane', aeroplanes: 'airplanes', mould: 'mold', moustache: 'mustache', cosy: 'cozy',
    draught: 'draft', doughnut: 'donut', doughnuts: 'donuts', learnt: 'learned', spelt: 'spelled', dreamt: 'dreamed', burnt: 'burned', spoilt: 'spoiled', smelt: 'smelled',
    leant: 'leaned', leapt: 'leaped', licence: 'license', defence: 'defense', offence: 'offense', pretence: 'pretense', analyse: 'analyze', paralyse: 'paralyze',
    catalogue: 'catalog', dialogue: 'dialog', analogue: 'analog', towards: 'toward', whilst: 'while', amongst: 'among', got: 'gotten', maths: 'math' };
  function americanize(w) {
    const out = new Set();
    if (EN_GB[w]) out.add(EN_GB[w]);
    let v = (/^(flour|detour|contour|devour)/.test(w) ? w : w.replace(/^(\w{3,})our(s|ed|ing|ite|ites|ful|less|able|er|ers|hood)?$/, '$1or$2'))
      .replace(/is(e|es|ed|ing|ation|ations|er|ers)$/, 'iz$1')
      .replace(/ys(e|es|ed|ing)$/, 'yz$1')
      .replace(/([^aeiou])tre(s)?$/, '$1ter$2')
      .replace(/ogue(s)?$/, 'og$1')
      .replace(/^(\w{4,}[aeiou])ll(ed|ing|er|ers)$/, '$1l$2');
    if (v !== w) out.add(v);
    return [...out];
  }
  /** Vervangt Britse woorden in het antwoord door de Amerikaanse vorm die in het goede antwoord staat. */
  function british(u, c) {
    if (!(S.course && S.course.target === 'en')) return u;
    const want = new Set(c.split(' '));
    return u.split(' ').map(w => want.has(w) ? w : (americanize(w).find(x => want.has(x)) || w)).join(' ');
  }
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
      const b = british(u, c);
      if (b !== u && (b === c || b.replace(PRON, '') === c)) return { ok: true, exact: false, warn: 'british', best: orig };
    }
    for (const [c, orig] of cands) {
      if (bare(c) === bare(u) || bare(c) === bare(uNoPron)) {
        const missN = /ñ/.test(c) && !/ñ/.test(u);
        return strict ? { ok: false, warn: 'accent', best: orig } : { ok: true, exact: false, warn: missN ? 'enye' : 'accent', best: orig };
      }
    }
    // kleine typfout bij langere antwoorden
    let best = null, bestD = 99;
    // een ander lidwoord (el idioma ↔ la idioma) is geen typfout
    const art = s => (s.match(ARTS) || [''])[0].trim();
    for (const [c, orig] of cands) {
      if (art(c) && art(u) && art(c) !== art(u)) continue;
      const d = lev(bare(c), bare(uNoPron)); if (d < bestD) { bestD = d; best = orig; }
    }
    const len = bare(best || '').length;
    if (best && len >= 7 && bestD === 1 && !opts.noTypo) return { ok: true, exact: false, warn: 'typo', best };
    return { ok: false, best: list[0], dist: bestD };
  }
  function similarity(a, b) { a = bare(a); b = bare(b); const L = Math.max(a.length, b.length) || 1; return 1 - lev(a, b) / L; }

  /* ---------- Per woord vergelijken (zinsvertaling) ----------
     words("¿Cómo está usted?") → ['¿', 'Cómo', ' ', 'está', ' ', 'usted', '?']: woorden en wat ertussen staat.
     De woorden staan op de oneven plaatsen. */
  const WORD_RE = /[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu;
  function words(a) {
    const out = []; let last = 0; a = String(a || '');
    for (const m of a.matchAll(WORD_RE)) { out.push(a.slice(last, m.index), m[0]); last = m.index + m[0].length; }
    out.push(a.slice(last));
    return out;
  }
  function rawVariants(ans) {
    const out = new Set();
    const rec = s => { const m = s.match(/\(([^)]*)\)/); if (!m) { out.add(s.replace(/\s+/g, ' ').replace(/\s+([,.?!;:])/g, '$1').replace(/([¿¡])\s+/g, '$1').trim()); return; } rec(s.replace(m[0], m[1])); rec(s.replace(m[0], '')); };
    rec(String(ans || ''));
    return [...out];
  }
  /** Welke woorden van het goede antwoord had de gebruiker al goed?
      Geeft { a: het antwoord (zoals het in de les staat), st: per woord 'ok' | 'accent' | 'bad', k: nummers van de goede woorden }. */
  function parts(user, answers) {
    const uw = (String(user || '').match(WORD_RE) || []).map(w => norm(w));
    if (!uw.length) return null;
    const ub = uw.map(w => bare(w));
    let best = null;
    (Array.isArray(answers) ? answers : [answers]).filter(Boolean).forEach(ans => rawVariants(ans).forEach(a => {
      const ew = words(a).filter((_, i) => i % 2), eb = ew.map(w => bare(w));
      const ubA = ub.map(w => { const x = british(w, eb.join(' ')); return x; });
      // langste gemeenschappelijke rij woorden (zonder accenten), zodat de volgorde telt
      const n = eb.length, m = ub.length, L = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
      for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = eb[i] === ubA[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
      const st = new Array(n).fill('bad');
      for (let i = 0, j = 0; i < n && j < m;) {
        if (eb[i] === ubA[j]) { st[i] = norm(ew[i]) === uw[j] || ub[j] !== ubA[j] ? 'ok' : 'accent'; i++; j++; }
        else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++;
      }
      const good = L[0][0], score = good * 100 - (n - good) * 10 - Math.abs(n - m);
      if (!best || score > best.score) best = { a, st, score };
    }));
    if (!best) return null;
    return { a: best.a, st: best.st, k: best.st.map((s, i) => s === 'bad' ? -1 : i).filter(i => i >= 0) };
  }
  /** Bruikbaar om bij de herhaling de goede woorden al in te vullen: minstens één goed en één fout woord. */
  function partsUsable(p) { return !!(p && p.a && p.k && p.k.length && p.k.length < (words(p.a).length - 1) / 2); }
  S.check = { check, norm, bare, similarity, lev, words, parts, partsUsable, british };

  /* ================= Spraak ================= */
  const Speech = {
    voices: [], all: [], ready: false,
    /* Stemmen voor een taal ('es', 'en', 'nl'). this.voices = die van de doeltaal van de cursus. */
    forLang(lang) { const re = new RegExp('^' + lang, 'i'); return (this.all || []).filter(v => re.test(v.lang)); },
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
    /* Lupe heeft eigen opnames van dezelfde zinnen (andere stem): sleutel met naamruimte, bijv. 'lupe-girl'. */
    /* Niveaus om offline te downloaden: Spaans 'A1', andere cursussen 'en-es:A1'. Alleen die van de eigen cursus. */
    courseLevels(all) {
      if (!all) return null;
      const pre = S.course.ns ? S.course.ns + ':' : null, out = {};
      for (const k in all) { if (pre ? k.startsWith(pre) : !k.includes(':')) out[pre ? k.slice(pre.length) : k] = all[k]; }
      return Object.keys(out).length ? out : null;
    },
    clipKey(t, ns) { return this.key(ns ? ns + '|' + this.clean(t) : t); },
    loadClips() {
      if (typeof fetch !== 'function' || typeof Audio !== 'function') return;
      this.clipsLoaded = fetch('audio/index.json').then(r => r.ok ? r.json() : null).then(j => { if (j && j.clips) { this.clips = new Set(j.clips); this.levels = Speech.courseLevels(j.levels); } }).catch(() => { /* geen opnames */ });
    },
    /* Opnames van een andere cursus staan in een eigen naamruimte (bijv. 'en-es|hello'). undefined = die van de cursus. */
    nsOf(ns) { return ns === undefined ? S.course.ns : ns; },
    hasClip(text, ns) { ns = this.nsOf(ns); return !!(this.clips && Store.state.settings.clips !== false && text && this.clips.has(this.clipKey(text, ns))); },
    playClip(text, opt, direct) {
      return new Promise((res, rej) => {
        const a = this.el || (this.el = new Audio());
        let done = false, err = null;
        const end = ok => {
          if (done) return; done = true; a.onended = a.onerror = null; if (this._end === end) this._end = null;
          if (ok) return res();
          // Lukt het niet via de offline-opslag (service worker), probeer het bestand dan nog één keer rechtstreeks.
          // Niet bij NotAllowedError: dan weigert de browser afspelen zonder tik en helpt opnieuw proberen niet.
          if (!direct && !(err && err.name === 'NotAllowedError')) return this.playClip(text, opt, true).then(res, rej);
          rej();
        };
        this._end = end; // stop() rondt het lopende fragment af
        this.mlog('♪ opname'); this.session('playback');
        a.src = 'audio/' + this.clipKey(text, this.nsOf(opt.clipNs)) + '.mp3' + (direct ? '?direct=1' : '');
        a.preservesPitch = true; a.webkitPreservesPitch = true;
        // Op normale snelheid speelt de opname onbewerkt af: versnellen of vertragen met behoud van toonhoogte
        // klinkt in Safari/WebKit metalig en robotachtig. Alleen de 🐢-knop vertraagt (dat is dan de bedoeling).
        a.defaultPlaybackRate = a.playbackRate = this.slowFactor(opt.slow, true);
        a.onended = () => end(true);
        a.onerror = () => { this.clipError = 'laden mislukt (code ' + (a.error ? a.error.code : '?') + (direct ? ', ook rechtstreeks' : '') + ')'; end(false); };
        const p = a.play(); if (p && p.catch) p.catch(e => { if (e && e.name !== 'AbortError') { err = e; this.clipError = e.name + ': ' + e.message; } end(e && e.name === 'AbortError'); });
        setTimeout(() => end(true), 60000);
      });
    },
    /* Hoe langzaam de 🐢-knop afspeelt. slow: 1 = langzaam (eerste tik), 2 = heel langzaam 🐌 (nog eens tikken).
       Opnames gaan via playbackRate met behoud van toonhoogte; onder 0,5 vervormt WebKit het geluid te veel.
       De apparaatstem kan verder omlaag (u.rate wordt nog met de spreeksnelheid uit Instellingen vermenigvuldigd). */
    SLOW: { clip: [1, 0.62, 0.5], device: [1, 0.55, 0.4] },
    slowFactor(slow, clip) {
      const t = this.SLOW[clip ? 'clip' : 'device'];
      return t[Math.max(0, Math.min(t.length - 1, slow === true ? 1 : (+slow || 0)))];
    },
    /* Valt de lesstof terug op de apparaatstem, zeg dan één keer waarom: dan klinkt het niet ineens 'robotachtig' zonder uitleg. */
    clipFailed() {
      this.last = { src: 'clip-failed', err: this.clipError || 'onbekend' };
      if (this._warned) return; this._warned = true;
      try { S.toast && S.toast('⚠️ De opname speelde niet af (' + this.last.err + '), daarom hoor je nu de apparaatstem. Herlaad de app als dit blijft gebeuren.', 6000); } catch (e) { /* */ }
    },
    init() {
      this.loadClips();
      if (!('speechSynthesis' in window)) return;
      const load = () => { this.all = speechSynthesis.getVoices(); this.voices = this.forLang(S.course.target); this.ready = true; };
      load();
      speechSynthesis.addEventListener ? speechSynthesis.addEventListener('voiceschanged', load) : (speechSynthesis.onvoiceschanged = load);
    },
    canSpeak() { return 'speechSynthesis' in window || !!this.clips; },
    canListen() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); },
    /* Kwaliteit van een apparaatstem: iOS/macOS hebben 'compact' (robotachtig), 'verbeterd' (enhanced) en 'premium';
       Edge heeft 'Online (Natural)'-stemmen. Hoe beter, hoe natuurlijker. */
    quality(v) {
      const s = (v.name + ' ' + v.voiceURI).toLowerCase();
      if (/premium|natural|neural/.test(s)) return 3;
      if (/enhanced|verbeterd|mejorad|améliorée|erweitert/.test(s)) return 2;
      if (/google|online/.test(s)) return 1;
      return 0;
    },
    qualityLabel(v) { return ['', 'goed', 'verbeterd', 'natuurlijk'][this.quality(v)]; },
    isEffect(v) { return /\b(eddy|flo|grandma|grandpa|abuel[ao]|reed|rocko|sandy|shelley|bad news|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|albert|fred|junior|kathy|ralph)\b/i.test(v.name); },
    rank(v) {
      const l = v.lang.replace('_', '-').toLowerCase();
      let s = 0;
      if (!/^es/.test(l)) { // Engels, Nederlands: de taalvariant van de cursus eerst (en-US, nl-NL)
        const want = (S.course.target === l.slice(0, 2) ? S.course.speak : l).toLowerCase();
        s = l === want ? 100 : 75;
        s += [0, 8, 20, 30][this.quality(v)];
        if (/compact/i.test(v.voiceURI)) s -= 3;
        if (this.isEffect(v)) s -= 70;
        return s;
      }
      if (l === 'es-mx') s = 100; else if (l === 'es-us') s = 95; else if (l === 'es-419') s = 92;
      else if (/es-(co|ar|cl|pe|ve|uy|cr|ec|gt|pa|pr|do|bo|py|sv|hn|ni|cu)/.test(l)) s = 85; else if (l === 'es-es') s = 30; else s = 50;
      // Een verbeterde of premium-stem klinkt veel natuurlijker: die wint van een compacte stem uit een ander Latijns-Amerikaans land.
      s += [0, 8, 20, 30][this.quality(v)];
      if (/compact/i.test(v.voiceURI)) s -= 3;
      // Apple-effectstemmen (iOS/macOS) klinken robotachtig of grappig: alleen als niets anders er is
      if (this.isEffect(v)) s -= 70;
      if (/paulina|juan|sabina|monica|mónica|dalia|jorge/i.test(v.name) && l !== 'es-es') s += 3;
      return s;
    },
    /* Is er alleen een robotachtige stem? Dan tonen we uitleg om een betere te downloaden. */
    hasGoodVoice() { return this.voices.some(v => this.rank(v) >= 85 && this.quality(v) >= 2); },
    /* Bekende vrouwenstemmen (iOS/macOS, Edge, Chrome). Voor Lupe. */
    isFemale(v) { return /paulina|m[oó]nica|marisol|ang[eé]lica|soledad|isabela|francisca|dalia|elvira|paloma|salome|elena|catalina|camila|helena|laura|sabina|google español/i.test(v.name); },
    voice(opt = {}) {
      if (!this.voices.length && 'speechSynthesis' in window) { this.all = speechSynthesis.getVoices(); this.voices = this.forLang(S.course.target); }
      const lang = opt.lang || S.course.target, list = lang === S.course.target ? this.voices : this.forLang(lang);
      const want = Store.state.settings.voice;
      if (want && lang === S.course.target) { const v = list.find(x => x.voiceURI === want || x.name === want); if (v) return v; }
      const score = v => this.rank(v) + (opt.female && this.isFemale(v) ? 6 : 0);
      return list.slice().sort((a, b) => score(b) - score(a))[0] || null;
    },
    /* Wie wil weten of er gesproken wordt (bijv. de docente die haar mond beweegt): Speech.onTalk = (aan, tekst) => … */
    onTalk: null, _talkId: 0,
    _talk(on, text) { try { this.onTalk && this.onTalk(on, text); } catch (e) { /* */ } },
    say(text, opt = {}) {
      if (!text) return Promise.resolve();
      if (!opt.inGap) this._gapId = (this._gapId || 0) + 1; // iets anders voorlezen breekt een invulzin af
      const id = ++this._talkId;
      this._talk(true, text);
      // Is de lijst met opnames nog niet binnen (traag netwerk, net opgestart)? Probeer de opname dan toch:
      // de bestandsnaam volgt uit de tekst. Bestaat hij niet, dan valt het vanzelf terug op de apparaatstem.
      const pending = !this.clips && this.clipsLoaded && Store.state.settings.clips !== false && !opt.noClip;
      // Lupe: eerst haar eigen opname; is die er niet, dan de gewone opname van de lesstof (zonder naamruimte).
      // tijdens een oefening van «Op reis» klinkt alles met de stem van dat land (als die opname er is)
      if (opt.clipNs === undefined && this.placeNs) opt = Object.assign({}, opt, { clipNs: this.placeNs });
      if (opt.clipNs && !pending && !this.hasClip(text, opt.clipNs)) opt = Object.assign({}, opt, { clipNs: undefined });
      const p = this.hasClip(text, opt.clipNs) || pending
        ? (this._halt(), this.playClip(text, opt).then(() => { this.last = { src: 'clip' }; }, () => { if (!pending) this.clipFailed(); else this.last = { src: 'device' }; return this.speak(text, opt, true); }))
        : this.speak(text, opt);
      return p.then(() => { if (this._talkId === id) this._talk(false); });
    },
    /* Invulzin («Did you ___ the email?») voorlezen met een stilte op de plek van het gat.
       Losse stukken met '…' (zwevende intonatie), elk met een eigen opname (tools/tts-texts.js); tussen de stukken een pauze.
       Hints tussen haakjes («(decir, tú)») worden niet voorgelezen. */
    GAP_PAUSE: 900,
    gapParts(s) {
      const t = String(s || '').replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
      if (!t.includes('___')) return null;
      const bits = t.split('___'), out = [];
      bits.forEach((b, i) => {
        b = b.trim();
        if (/\p{L}/u.test(b)) out.push((i > 0 ? '… ' : '') + b.replace(/[\s,;:—–-]+$/, '') + (i < bits.length - 1 ? ' …' : ''));
        if (i < bits.length - 1) out.push(null); // null = stilte op de plek van het gat
      });
      return out;
    },
    sayGap(s, opt = {}) {
      const parts = this.gapParts(s);
      if (!parts) return this.say(s, opt);
      this.stop(); // breekt ook een vorige invulzin af
      const id = this._gapId;
      const pause = this.GAP_PAUSE * (opt.slow ? 1.5 : 1), o = Object.assign({}, opt, { inGap: true });
      return parts.reduce((p, part) => p.then(() => {
        if (this._gapId !== id) return;
        return part === null ? new Promise(r => setTimeout(r, pause)) : this.say(part, o);
      }), Promise.resolve());
    },
    /* Lange teksten in zinnen opdelen: sommige browsers stoppen anders na ±15 seconden. */
    chunks(text) {
      const t = String(text).replace(/\s*\/\s*/g, ', ').replace(/\s+/g, ' ').trim();
      if (t.length <= 180) return t ? [t] : [];
      const out = []; let cur = '';
      (t.match(/[^.!?…]+[.!?…]+[»"”)]*\s*|[^.!?…]+$/g) || [t]).forEach(s => {
        if (cur && (cur + s).length > 180) { out.push(cur.trim()); cur = ''; }
        cur += s;
      });
      if (cur.trim()) out.push(cur.trim());
      return out;
    },
    /* iOS spreekt alleen als de eerste uitspraak uit een tik komt. Roep dit aan in een klik-handler. */
    unlock() {
      if (this._unlocked || !('speechSynthesis' in window)) return;
      try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); this._unlocked = true; } catch (e) { /* */ }
    },
    speak(text, opt = {}, afterClip) {
      if (!('speechSynthesis' in window)) return Promise.resolve();
      if (!afterClip) this.last = { src: 'device' };
      return new Promise(res => {
        try {
          speechSynthesis.cancel();
          // geen emoji's, opmaak of pijltjes voorlezen (de stem zegt anders 'zwaaiende hand')
          const parts = this.chunks(String(text).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '').replace(/[*_#`>→]+/g, ' '));
          if (!parts.length) return res();
          const v = this.voice(opt);
          this.mlog('♪ apparaatstem'); this.session('playback');
          if (this.last) this.last.voice = v ? v.name : null;
          parts.forEach((p, i) => {
            const u = new SpeechSynthesisUtterance(p);
            if (v) { u.voice = v; u.lang = v.lang; } else u.lang = opt.lang === 'es' ? 'es-MX' : S.course.speak;
            u.rate = this.slowFactor(opt.slow) * (opt.rate || 1) * (Store.state.settings.rate || 0.9);
            if (opt.pitch) u.pitch = opt.pitch;
            if (i === parts.length - 1) u.onend = () => res();
            u.onerror = () => res();
            speechSynthesis.speak(u);
          });
          setTimeout(res, Math.max(15000, String(text).length * 110));
        } catch (e) { res(); }
      });
    },
    /* stop(): alles stil, ook een invulzin die nog bezig is. _halt(): alleen het lopende geluid (intern, tussen stukken). */
    stop() { this._gapId = (this._gapId || 0) + 1; this._halt(); },
    _halt() { try { speechSynthesis.cancel(); } catch (e) { /* */ } try { this.el && this.el.pause(); } catch (e) { /* */ } if (this._end) this._end(true); },
    /* Spraakherkenning met terugkoppeling.
       opt.onInterim(tekst): wat er tot nu toe herkend is (live).
       opt.onState(s): 'starting' | 'listening' | 'sound' | 'speech' | 'stopping'.
       Tik nog eens (stopListening) = klaar: wat al herkend is telt dan als antwoord.
       Fouten hebben .code en .help (uitleg hoe je het oplost, zie micHelp). */
    /* Eén keer stil opnieuw proberen: op iPad startte de tweede herkenning soms 'doof' (hij luisterde, maar hoorde
       niets en stopte meteen), omdat het geluidskanaal nog op afspelen stond na het tikgeluidje of een opname. */
    listen(opt = {}) {
      return this._listen(opt).catch(err => {
        if (!err || !err.quiet || opt._retried) throw err;
        this.retries = (this.retries || 0) + 1; this.mlog('dove start → nog een keer');
        return new Promise(r => setTimeout(r, 350)).then(() => this._listen(Object.assign({}, opt, { _retried: true, _fresh: true })));
      });
    },
    /* Geluidskanaal van iPhone/iPad (navigator.audioSession, iOS 16.4+, ook in Edge). Na de microfoon (spraakherkenning)
       blijft iOS op «opnemen en afspelen» staan: dan klinkt alles via de luidspreker veel zachter (stemverwerking,
       echo-onderdrukking). Daarom zetten we het bij afspelen ná een microfoonbeurt op 'playback' (vol volume), en vlak
       voor het luisteren weer op 'auto'. Geeft true terug als het echt veranderd is. */
    session(type) {
      try {
        const as = navigator.audioSession;
        if (!as || !this.isIOS()) return false;
        if (type === 'playback' && (!this._lastEnd || this.isListening())) return false; // nog nooit geluisterd: niets aan de hand
        if (type === 'auto' && !this._sessionSet) return false;
        if (as.type === type) return false;
        as.type = type; this._sessionSet = type === 'playback';
        this.mlog('♪ geluidskanaal → ' + type);
        return true;
      } catch (e) { return false; }
    },
    /* Laat al het afspelen echt los, zodat de microfoon het geluidskanaal krijgt. Pauzeren alleen is op iPad niet genoeg:
       een gepauzeerde <audio> en een AudioContext (ook 'suspended') houden het kanaal op afspelen, en dan hoort de
       spraakherkenning stilte. */
    releaseAudio() {
      this.stop(); this._talk(false);
      try { if (this.el) { this.el.pause(); this.el.removeAttribute('src'); this.el.load(); } } catch (e) { /* */ }
      try { S.Sound && S.Sound.release && S.Sound.release(); } catch (e) { /* */ }
    },
    /* Logboek van de laatste microfoonbeurten (voor «Wat gebeurde er?» bij een fout en in de microfoontest). */
    micLog: [],
    mlog(ev) {
      const L = this.micLog, now = Date.now();
      if (!L.length || now - L[L.length - 1].t > 60000) L.length = 0;
      L.push({ t: now, ev });
      if (L.length > 60) L.splice(0, L.length - 60);
    },
    micLogText() {
      const L = this.micLog; if (!L.length) return '(nog niets)';
      const t0 = L[0].t;
      return L.map(x => '+' + ((x.t - t0) / 1000).toFixed(1) + 's ' + x.ev).join('\n');
    },
    _listen(opt = {}) {
      const R = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!R) return Promise.reject(this.micError('unsupported'));
      // Hangt er nog een oude herkenning (op iPad komt 'klaar' soms nooit)? Rond die nu echt af en ruim hem op.
      if (this._kill) this._kill();
      if (this._rec) { try { this._rec.abort(); } catch (e) { /* */ } this._rec = null; }
      /* Is de vorige herkenning voor Safari nog niet echt klaar (geen 'end' gekregen)? Dan kan er geen nieuwe starten:
         Safari luistert maar naar één tegelijk, en de nieuwe hoort dan niets. Eerst afbreken en op 'end' wachten. */
      const prev = this._prev, gentle = this.gentle();
      if (prev && !prev.ended && Date.now() - prev.t < 30000) {
        // iPhone/iPad: nooit afbreken (dat maakt elke volgende beurt doof), maar wachten tot hij vanzelf klaar is.
        this.mlog(gentle ? 'vorige nog bezig → wachten tot hij vanzelf stopt' : 'vorige nog niet klaar → afbreken en wachten');
        if (!gentle) { try { prev.r.abort(); } catch (e) { /* */ } }
        try { opt.onState && opt.onState('starting'); } catch (e) { /* */ }
        return new Promise(res => {
          const t = Date.now(), wait = () => (prev.ended || Date.now() - t > (gentle ? 8000 : 1500)) ? res() : setTimeout(wait, 50);
          wait();
        }).then(() => { this.mlog(prev.ended ? 'vorige klaar na ' + (Date.now() - prev.t) + 'ms' : 'vorige reageert niet, toch starten'); prev.ended = true; return this._listen(opt); });
      }
      // Stond het geluidskanaal op «alleen afspelen» (na een vorige microfoonbeurt, zie session())? Eerst terug naar
      // automatisch, en iOS even de tijd geven om om te schakelen, anders hoort de microfoon niets.
      if (this.session('auto')) return new Promise(r => setTimeout(r, 250)).then(() => this._listen(opt));
      // Lupe, een opname of een tikgeluidje mag niet meer klinken: op iPad deelt de microfoon het geluidskanaal met het afspelen.
      this.releaseAudio();
      const t0 = Date.now(); let heardAny = false;
      const state = s => { try { opt.onState && opt.onState(s); } catch (e) { /* */ } };
      return new Promise((resolve, reject) => {
        const r = new R();
        const v = this.voice();
        r.lang = S.course.target !== 'es' ? S.course.listen
          : v && /^es-(mx|us|419|co|ar|cl|pe|ve|uy|cr|ec|gt|pa|pr|do|bo|py|sv|hn|ni|cu)$/i.test(v.lang.replace('_', '-')) ? v.lang.replace('_', '-') : 'es-MX';
        r.interimResults = true; r.maxAlternatives = 3; r.continuous = false;
        let done = false, started = false, stopping = false, finalAlts = null, interim = '', silenceT = null;
        const timers = [];
        const me = { r, t: Date.now(), ended: false }; this._prev = me;
        const finish = (ok, val) => {
          if (done) return; done = true;
          timers.forEach(clearTimeout); clearTimeout(silenceT);
          this.mlog(ok ? 'klaar: «' + (val && val[0]) + '»' : 'fout: ' + (val && val.code));
          const noop = () => {}; r.onstart = r.onaudiostart = r.onaudioend = r.onsoundend = r.onsoundstart = r.onspeechstart = r.onresult = r.onerror = noop;
          // blijf luisteren naar Safari's echte 'end': pas dan is de microfoon vrij voor de volgende keer
          r.onend = () => { me.ended = true; this.mlog('(Safari: echt klaar)'); };
          if (this._rec === r) this._rec = null;
          if (this._kill === kill) this._kill = null;
          if (this._soft === softStop) this._soft = null;
          this._lastEnd = Date.now();
          // Niets gehoord, niet zelf gestopt en meteen weer klaar: dat is de 'dove' start van iPad, niet de gebruiker.
          if (!ok && val && !val.quiet && !heardAny && !stopping && !opt._retried && ['no-speech', 'audio-capture', 'aborted'].includes(val.code) && Date.now() - t0 < 4000) val.quiet = true;
          ok ? resolve(val) : reject(val);
        };
        const heardSoFar = () => finalAlts || (interim ? [interim] : null);
        // Afronden met wat er al gehoord is (of 'niets gehoord').
        const settle = () => { const got = heardSoFar(); got && got.length ? finish(true, got) : finish(false, this.micError('no-speech')); };
        // Hard opruimen: abort() laat de microfoon op iPad meteen los; daarna de belofte zelf afronden.
        const kill = () => { if (done) return; stopping = true; if (!gentle) { try { r.abort(); } catch (e) { /* */ } } settle(); };
        /* Netjes stoppen. Safari op iPad stuurt na stop() soms nooit 'onend': dan bleef de knop op opnemen staan,
           hield Safari de microfoon vast en deed een tweede keer niets meer (tot je naar een andere app ging).
           Daarom: na stop() even wachten, dan abort(), en daarna zelf afronden. */
        const softStop = () => {
          if (done || stopping) return; stopping = true;
          /* iPhone/iPad (WebKit-fout 321436): wie een beurt met stop() of abort() afkapt, krijgt daarna alleen nog dove
             beurten, tot je de browser helemaal afsluit. Daarom daar niet stoppen: we nemen wat er gehoord is en laten
             de herkenning vanzelf uitlopen (continuous = false stopt na een korte stilte). */
          if (gentle) { this.mlog('klaar (iOS: laat hem vanzelf uitlopen)'); return settle(); }
          this.mlog('stop()');
          try { r.stop(); } catch (e) { /* */ }
          timers.push(setTimeout(() => { if (!done) { try { r.abort(); } catch (e) { /* */ } } }, 1200));
          timers.push(setTimeout(() => { if (!done) settle(); }, 2000));
        };
        /* Doof? Microfoon open, maar een tijd lang geen enkel geluid: elders stil opnieuw met een verse herkenning.
           Op iPhone/iPad helpt opnieuw starten niet (en afbreken maakt het erger): dan een duidelijke uitleg. */
        const deafCheck = () => { if (opt._retried) return; timers.push(setTimeout(() => {
          if (done || heardAny || stopping) return;
          if (gentle) { this.mlog('6s geen geluid → iOS-doof'); stopping = true; return finish(false, this.micError('ios-deaf')); }
          this.mlog('4s geen geluid → doof?');
          stopping = true; try { r.abort(); } catch (e) { /* */ }
          const err = this.micError('no-speech'); err.quiet = true; finish(false, err);
        }, gentle ? 6000 : 4000)); };
        r.onstart = () => { started = true; this.mlog('start'); state('listening'); deafCheck(); };
        r.onaudiostart = () => { this.mlog('microfoon open'); };
        r.onsoundend = () => this.mlog('geluid weg');
        r.onaudioend = () => this.mlog('microfoon dicht');
        r.onsoundstart = () => { heardAny = true; this.mlog('geluid'); state('sound'); };
        r.onspeechstart = () => { heardAny = true; this.mlog('spraak'); state('speech'); };
        r.onresult = e => {
          heardAny = true; if (!interim) this.mlog('eerste tekst');
          let txt = '';
          for (let i = 0; i < e.results.length; i++) txt += e.results[i][0].transcript;
          interim = txt.replace(/\s+/g, ' ').trim();
          const last = e.results[e.results.length - 1];
          if (last && last.isFinal) {
            const alts = [];
            for (let i = 0; i < last.length; i++) alts.push((e.results.length > 1 ? txt.slice(0, txt.length - last[0].transcript.length) : '') + last[i].transcript);
            finalAlts = alts.map(a => a.replace(/\s+/g, ' ').trim()).filter(Boolean);
          }
          state('speech');
          try { opt.onInterim && opt.onInterim(interim); } catch (err) { /* */ }
          // Safari op iPad stopt soms niet vanzelf: na een korte stilte ronden we zelf af.
          clearTimeout(silenceT);
          silenceT = setTimeout(softStop, finalAlts ? 300 : 1600);
        };
        r.onerror = e => {
          this.mlog('error: ' + e.error);
          const got = heardSoFar();
          if (got && got.length && (e.error === 'no-speech' || e.error === 'aborted')) return finish(true, got);
          finish(false, this.micError(e.error));
        };
        r.onend = () => { me.ended = true; this.mlog('end'); settle(); };
        // Start de microfoon niet binnen een paar seconden, dan blijft hij anders stil 'hangen' (zo leek het alsof er niets gebeurde).
        timers.push(setTimeout(() => { if (!started && !done) { if (!gentle) { try { r.abort(); } catch (e) { /* */ } } finish(false, this.micError('start-timeout')); } }, gentle ? 9000 : 6000));
        timers.push(setTimeout(softStop, opt.max || 20000));
        this._rec = r; this._kill = kill; this._soft = softStop;
        this.mlog('nieuwe herkenning (' + r.lang + (opt._retried ? ', 2e poging' : '') + ')');
        state('starting');
        const go = () => { if (done) return; try { r.start(); } catch (e) { finish(false, this.micError(e && e.name === 'NotAllowedError' ? 'not-allowed' : 'start-failed', e && e.message)); } };
        // iPhone/iPad: eerst een kort zinnetje uitspreken en vlak daarna starten (de werkende omweg uit WebKit-fout 321436).
        if (gentle) this.primer().then(() => setTimeout(go, 300)); else go();
      });
    },
    /* iPhone/iPad: voorzichtige microfoon (nooit stop()/abort()). Te forceren via Speech.gentleMode = true/false (tests). */
    gentle() { return this.gentleMode != null ? !!this.gentleMode : this.isIOS(); },
    PRIMER: { es: 'Te escucho.', en: "I'm listening.", nl: 'Ik luister.' },
    primer() {
      if (!('speechSynthesis' in window)) return Promise.resolve();
      return new Promise(res => {
        let ok = false; const end = why => { if (ok) return; ok = true; this.mlog('♪ «' + txt + '» ' + why); res(); };
        const txt = this.PRIMER[S.course.target] || this.PRIMER.es;
        try {
          const u = new SpeechSynthesisUtterance(txt), v = this.voice({ female: true });
          if (v) { u.voice = v; u.lang = v.lang; } else u.lang = S.course.speak || 'es-MX';
          u.onend = () => end('klaar'); u.onerror = () => end('fout');
          speechSynthesis.speak(u);
        } catch (e) { end('kon niet'); }
        setTimeout(() => end('(tijd om)'), 3000);
      });
    },
    stopListening() { if (this._soft) this._soft(); else { try { if (this._rec) this._rec.stop(); } catch (e) { /* */ } } },
    /* Meteen loslaten (bijv. als de app naar de achtergrond gaat of je de les verlaat). */
    abortListening() { if (this._kill) this._kill(); },
    isListening() { return !!this._rec; },
    /* iPad/iPhone (iPadOS doet zich voor als Mac, maar heeft een touchscreen) en 'op beginscherm gezet' */
    isIOS() { const n = window.navigator || {}, ua = n.userAgent || ''; return /iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && n.maxTouchPoints > 1); },
    isStandalone() { try { return !!((window.navigator && window.navigator.standalone) || (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)); } catch (e) { return false; } },
    /* Een duidelijke foutmelding plus wat je eraan kunt doen. */
    micError(code, detail) {
      const ios = this.isIOS(), home = this.isStandalone();
      const M = {
        'unsupported': ['Deze browser kan geen spraak herkennen.', ios ? 'Gebruik Safari (iPadOS 14.5 of nieuwer). In Chrome of Firefox op de iPad werkt spraakherkenning niet.' : 'Gebruik Chrome, Edge of Safari. In Firefox werkt spraakherkenning niet.'],
        'not-allowed': ['De app mag je microfoon niet gebruiken.', ios
          ? 'Geef toestemming: Instellingen › Apps › Safari › Microfoon › Vraag of Sta toe. Controleer ook Instellingen › Privacy en beveiliging › Spraakherkenning › Safari aan. Kreeg je net een vraag om toestemming en tikte je "Sta niet toe"? Laad de pagina opnieuw en tik dan op "Sta toe".'
          : 'Klik op het slotje of het microfoonicoon in de adresbalk en sta de microfoon toe. Laad de pagina daarna opnieuw.'],
        'service-not-allowed': ['Spraakherkenning staat uit op dit apparaat.', ios
          ? 'Zet Dicteren aan: Instellingen › Algemeen › Toetsenbord › Dicteer (aan). ' + (home ? 'Je gebruikt de app vanaf het beginscherm; daar staat iOS spraakherkenning soms niet toe. Werkt het na Dicteren aanzetten nog niet, open de app dan in Safari.' : 'Herlaad daarna de pagina.')
          : 'Je browser of systeem staat spraakherkenning niet toe. Probeer Chrome of Edge.'],
        'no-speech': ['Ik hoorde niets.', 'Tik op de microfoon, wacht tot er "Ik luister" staat en spreek dan duidelijk, niet te ver van het apparaat. Is er een andere app die de microfoon gebruikt (FaceTime, een opname, een koptelefoon die net is losgekoppeld)? Sluit die eerst.'],
        'audio-capture': ['Er is geen microfoon gevonden.', 'Een andere app gebruikt misschien de microfoon, of je koptelefoon of hoes zit ervoor. Sluit andere apps en probeer opnieuw.'],
        'network': ['Geen verbinding met de spraakdienst.', 'Spraakherkenning werkt via internet. Controleer je wifi en probeer opnieuw.'],
        'language-not-supported': ['Spaans wordt op dit apparaat niet herkend.', ios ? 'Voeg Spaans (Mexico) toe als toetsenbord: Instellingen › Algemeen › Toetsenbord › Toetsenborden › Nieuw toetsenbord › Spaans (Mexico). Dan kan ook het dicteren in het Spaans.' : 'Probeer een andere browser (Chrome of Edge).'],
        'ios-deaf': ['De microfoon hoort niets (fout in iOS).', 'Dit is een bekende fout van iPhone/iPad: na een afgebroken spraakbeurt blijft de microfoon soms doof, in elke browser. Wacht een minuutje en probeer opnieuw, of sluit de browser helemaal af (veeg hem omhoog in de appkiezer) en open hem opnieuw. Je kunt deze oefening ook overslaan met «Kan nu niet praten».'],
        'start-timeout': ['De microfoon start niet.', ios ? 'Sluit de app helemaal af (veeg hem omhoog in de appkiezer) en open hem opnieuw. Controleer ook of Dicteren aan staat: Instellingen › Algemeen › Toetsenbord › Dicteer.' : 'Laad de pagina opnieuw en probeer het nog eens.'],
        'aborted': ['Het luisteren is afgebroken.', 'Tik opnieuw op de microfoon.'],
        'bad-grammar': ['Spraakherkenning gaf een fout.', 'Probeer het opnieuw.'],
        'start-failed': ['De microfoon kon niet starten.', 'Probeer het opnieuw. ' + (detail || '')]
      };
      const [msg, help] = M[code] || ['Spraakherkenning: ' + code, 'Probeer het opnieuw, of doe de microfoontest in Instellingen.'];
      const err = new Error(msg); err.code = code; err.help = help;
      return err;
    }
  };
  S.Speech = Speech;

  /* ================= Geluid ================= */
  let actx = null;
  function tone(freqs, dur = 0.09, type = 'sine', vol = 0.15) {
    if (!Store.state.settings.sound) return;
    // Niet tijdens het luisteren, en vlak erna even wachten tot iPad de microfoon heeft losgelaten.
    if (Speech.isListening()) return;
    const since = Date.now() - (Speech._lastEnd || 0);
    if (since < 600) { setTimeout(() => tone(freqs, dur, type, vol), 600 - since); return; }
    try {
      // iPhone/iPad: na de microfoon geen tikgeluidjes meer via Web Audio; die zetten het geluidskanaal op afspelen
      // en dan hoort de volgende spraakherkenning niets meer (Marks logboek, v1.60.2).
      if (Speech._lastEnd && Speech.isIOS()) { Speech.mlog('♪ tikgeluid overgeslagen'); return; }
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      Speech.mlog('♪ tikgeluid');
      if (actx.state === 'suspended' && actx.resume) actx.resume();
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
    bad: () => tone([220, 180], 0.11, 'triangle', 0.13),
    win: () => tone([523, 659, 784, 1047], 0.1, 'sine', 0.15),
    tap: () => tone([440], 0.03, 'sine', 0.06),
    pause: () => { try { if (actx && actx.state === 'running' && actx.suspend) actx.suspend(); } catch (e) { /* */ } },
    /* Helemaal sluiten (vóór de microfoon): het volgende tikgeluidje maakt vanzelf een nieuwe. */
    release: () => { const c = actx; actx = null; try { c && c.close && c.close(); } catch (e) { /* */ } }
  };
  // Gaat de app naar de achtergrond, laat de microfoon dan echt los (anders hangt hij als je terugkomt).
  try {
    document.addEventListener('visibilitychange', () => { if (document.hidden) Speech.abortListening(); });
    window.addEventListener('pagehide', () => Speech.abortListening());
  } catch (e) { /* */ }
})(window.SPT = window.SPT || {});
