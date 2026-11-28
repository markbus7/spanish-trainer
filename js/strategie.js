/* 🧪 Andere aanpak bij hardnekkige fouten (S.Strat).
   Blijft een onderwerp fout gaan terwijl je het al vaak geoefend hebt, dan heeft «nog meer van hetzelfde» geen zin.
   Dan kiest de app een ándere leerstrategie (beslisregel, contrastparen, je eigen fouten, zelf zinnen maken, dictee,
   elke dag een beetje, of de docent legt het anders uit) en houdt per onderwerp bij:
     - welke strategie is ingezet (state.strat[onderwerp].tries),
     - hoe het vóór die poging ging (b), tijdens (in), en in de antwoorden daarna (af), ook op een latere dag (ld = blijft het hangen?).
   Strategieën die bij jou werken krijgen voorrang, strategieën die niets deden komen minder vaak terug (pick()).
   Onderwerp = een grammatica-tag ('contractions') of één werkwoordstijd ('c|estar|pres').
   Taalonafhankelijk: alles wordt uit de bestaande oefeningen van de cursus gemaakt. Alleen de beslisregels
   (content/beslisregels.js, S.beslis) zijn per cursus geschreven; zonder regel valt «Beslisregel» terug op de uitleg uit de les.
   Rekenwerk zonder DOM bovenaan (getest in tests/run.js), het tekenen onderaan. */
(function (S) {
  'use strict';
  const { U, C } = S;
  const h = U.h;
  const st = () => S.Store.state;
  const MIN_DONE = 3; // zoveel afgeronde metingen voordat een strategie uitgezet of afgeremd wordt
  const WIN = 40, AFTER = 12, MAXTRY = 12, DRIP_DAYS = 5;
  const docent = () => (S.Tutor && S.Tutor.name) || 'Lupe';

  const LIST = [
    { id: 'regel', icon: '📐', name: 'Beslisregel', what: 'Eerst één korte regel of een ezelsbruggetje, daarna stap voor stap toepassen.' },
    { id: 'contrast', icon: '⚖️', name: 'Contrastparen', what: 'Bijna dezelfde zinnen naast elkaar: welke klopt? Zo zie je precies waar het verschil zit.' },
    { id: 'fouten', icon: '🔍', name: 'Je eigen fouten', what: 'Precies de vragen die jij fout had, met jouw antwoord en het goede antwoord ernaast.' },
    { id: 'bouw', icon: '🧱', name: 'Zelf zinnen maken', what: 'Zonder keuzes: zinnen bouwen en zelf typen. Wat je zelf maakt, onthoud je beter.' },
    { id: 'dictee', icon: '🎧', name: 'Dictee', what: 'Luisteren en opschrijven. Je hoort het patroon in hele zinnen in plaats van het in te vullen.' },
    { id: 'spreid', icon: '🗓️', name: 'Elke dag een beetje', what: 'Vijf dagen 3 vragen per dag, in plaats van één lange ronde. Kort en vaak blijft beter hangen.' },
    { id: 'lupe', icon: '💬', name: 'Lupe legt het anders uit', what: 'Je docent legt het op een andere manier uit dan in de les en stelt je een paar vragen.' }
  ];
  const byId = id => LIST.find(x => x.id === id);
  const nameOf = s => (S.docentNaam ? S.docentNaam(s.name) : s.name);

  /* ---------- opslag ---------- */
  function db() { const s = st(); if (!s.strat || typeof s.strat !== 'object') s.strat = {}; return s.strat; }
  function ent(key) { const d = db(); const e = d[key] || (d[key] = { r: '', u: 0, tries: [] }); if (!Array.isArray(e.tries)) e.tries = []; if (typeof e.r !== 'string') e.r = ''; return e; }
  const isConj = key => /^c\|/.test(key);
  function keyOf(it) {
    if (!it) return '';
    if (it.sk) return it.sk;
    if (it.conj) return 'c|' + it.conj.verb + '|' + it.conj.tense;
    const t = it.tag;
    return !t || t === 'vocab' || t === 'other' || t === 'conj' ? '' : t;
  }
  function label(key) {
    if (!isConj(key)) return C.tag(key);
    const [, v, t] = key.split('|'); const T = S.conj && S.conj.TENSES[t];
    return v + ' vervoegen' + (T ? ' (' + T.es + ')' : '');
  }
  const frac = a => (a && a[1] ? a[0] / a[1] : null);
  const day = t => U.dayIndex(new Date(t));

  /** Elk beantwoord item (eerste poging) komt hier langs, vanuit recordItem in js/app.js. */
  function answer(it, ok, now = Date.now()) {
    const key = keyOf(it); if (!key) return;
    const e = ent(key);
    e.r = (e.r + (ok ? '1' : '0')).slice(-WIN); e.u = now;
    if (it.st) { // vraag uit een strategie-ronde zelf
      const t = e.tries.find(x => x.t === it.st);
      if (t) { t.in[1]++; if (ok) t.in[0]++; }
      const d = e.drip; // «elke dag een beetje»: de eerste vraag van vandaag telt de dag
      if (d && d.t === it.st && d.d !== day(now)) { d.d = day(now); d.n = (d.n || 0) + 1; }
      return;
    }
    const t = e.tries[e.tries.length - 1];
    if (t && t.af[1] < AFTER) { // antwoorden ná de poging: het effect
      t.af[1]++; if (ok) t.af[0]++;
      if (day(now) > day(t.t)) { t.ld[1]++; if (ok) t.ld[0]++; }
    }
  }
  /** Alle antwoorden tot nu toe (totaal): tags voor grammatica, de herhaalkaart voor een werkwoordstijd. */
  function cum(key) {
    if (isConj(key)) { const c = (st().srs || {})[key] || {}; return [c.g || 0, (c.g || 0) + (c.f || 0)]; }
    const v = (st().tags || {})[key] || { ok: 0, no: 0 }; return [v.ok, v.ok + v.no];
  }
  /** Hoe het de laatste tijd gaat: de laatste 10 antwoorden, of (als we die nog niet hebben) het totaal. */
  function recent(key) {
    const r = ((db()[key] || {}).r || '').slice(-10);
    if (r.length >= 6) return [r.split('1').length - 1, r.length];
    return cum(key);
  }
  /** Hardnekkig = al vaak geoefend en nog steeds minder dan 70% goed. */
  function isStubborn(key) {
    const c = cum(key), r = recent(key), min = isConj(key) ? 6 : 8;
    return c[1] >= min && r[1] >= 6 && r[0] / r[1] < 0.7;
  }
  function begin(key, sid, now = Date.now()) {
    const e = ent(key);
    if (e.tries.length && e.tries[e.tries.length - 1].t >= now) now = e.tries[e.tries.length - 1].t + 1;
    const t = { s: sid, t: now, v: ((typeof self !== 'undefined' && self.SPT_VERSION) || {}).number || '', b: recent(key).slice(), in: [0, 0], af: [0, 0], ld: [0, 0] };
    e.tries.push(t); e.tries = e.tries.slice(-MAXTRY); e.u = now;
    return t;
  }

  /* ---------- wat werkt? ---------- */
  /** Oordeel over één poging: 'open' (nog te weinig antwoorden erna), 'werkt', 'beetje' of 'niet'; sticks = bleef het een dag later hangen? */
  function verdict(t) {
    const before = frac(t.b), after = frac(t.af), n = t.af[1];
    const sticks = t.ld[1] >= 3 ? t.ld[0] / t.ld[1] >= 0.75 : null;
    if (n < 4) return { state: 'open', before, after, n, sticks };
    const d = after - (before == null ? 0.5 : before);
    const state = after >= 0.8 || d >= 0.15 ? 'werkt' : d < 0.05 ? 'niet' : 'beetje';
    return { state, before, after, n, sticks };
  }
  const VTXT = { open: '⏳ nog te vroeg om te zeggen', werkt: '✅ werkt', beetje: '↗️ helpt een beetje', niet: '✖️ hielp niet' };
  const pc = x => (x == null ? '?' : Math.round(x * 100) + '%');
  function tryText(t) {
    const v = verdict(t), s = byId(t.s) || { icon: '🧪', name: t.s };
    return s.icon + ' ' + nameOf(s) + ': ' + pc(v.before) + ' → ' + (v.n ? pc(v.after) + ' (' + v.n + ' antw.)' : '…') + ' · ' + VTXT[v.state] + (v.sticks === true ? ' · 📌 blijft hangen' : v.sticks === false ? ' · 💨 zakt weer weg' : '');
  }
  /** Per strategie, over alle onderwerpen: hoe vaak ingezet en met welk resultaat. score = kans dat het bij jou werkt (0–1). */
  function stats() {
    const out = {};
    LIST.forEach(s => { out[s.id] = { id: s.id, n: 0, done: 0, werkt: 0, beetje: 0, niet: 0, sticks: 0, sum: 0, score: 0.5, status: '' }; });
    Object.values(db()).forEach(e => (e.tries || []).forEach(t => {
      const o = out[t.s]; if (!o) return;
      const v = verdict(t); o.n++;
      if (v.state !== 'open') { o.done++; o[v.state]++; o.sum += v.state === 'werkt' ? (v.sticks === false ? 0.6 : 1) : v.state === 'beetje' ? 0.35 : 0; }
      if (v.sticks) o.sticks++;
    }));
    // Na genoeg metingen: 'uit' = werkt bij jou (bijna) nooit → niet meer voorstellen; 'weinig' = helpt maar weinig → komt minder vaak terug.
    // Telling per poging: werkt = 1 (0,6 als het een dag later weer wegzakte), een beetje = 0,35, niet = 0.
    Object.values(out).forEach(o => {
      o.score = (o.sum + 1) / (o.done + 2);
      o.rate = o.done ? o.sum / o.done : null;
      o.status = o.done >= MIN_DONE ? (o.rate < 0.25 ? 'uit' : o.rate < 0.5 ? 'weinig' : '') : '';
    });
    return out;
  }
  /** Welke strategie nu? Wat bij jou (bij andere onderwerpen) werkt krijgt voorrang; wat bij dít onderwerp niets deed zakt weg;
      iets nieuws gaat voor op een herhaling, zodat het nooit «meer van hetzelfde» wordt. */
  function rank(key) {
    const G = stats(), tries = (db()[key] || {}).tries || [];
    return LIST.filter(s => available(key, s.id)).map((s, i) => {
      let sc = G[s.id].score - i * 0.01; // bij gelijke stand: de volgorde van LIST
      const mine = tries.filter(t => t.s === s.id);
      if (!mine.length) sc += 0.3;
      mine.forEach(t => { const v = verdict(t).state; sc += v === 'niet' ? -1 : v === 'open' ? -0.6 : v === 'werkt' ? 0.15 : -0.2; });
      if (tries.length && tries[tries.length - 1].s === s.id) sc -= 0.3; // niet twee keer achter elkaar hetzelfde
      const status = G[s.id].status;
      if (status === 'weinig') sc -= 0.4;
      return { s, sc, tried: mine.length, status };
    }).sort((a, b) => (a.status === 'uit') - (b.status === 'uit') || b.sc - a.sc); // uitgezette strategieën altijd onderaan
  }
  /** De strategie die de app voorstelt; een uitgezette strategie wordt nooit vanzelf voorgesteld. */
  function pick(key) { const r = rank(key).filter(x => x.status !== 'uit')[0]; return r ? r.s : null; }
  /** Strategieën die bij deze leerling na genoeg metingen niet of weinig werken: kandidaten om te schrappen of te vervangen. */
  function retired() { return Object.values(stats()).filter(o => o.status); }

  /** Alle hardnekkige onderwerpen, zwakste eerst. */
  function topics() {
    const keys = new Set(Object.keys(st().tags || {}).concat(Object.keys(st().srs || {}).filter(isConj), Object.keys(db())));
    const out = [];
    keys.forEach(key => {
      if (!key || key === 'vocab' || key === 'other' || key === 'conj' || !isStubborn(key)) return;
      if (!isConj(key) && !C.TAGS[key]) return;
      const r = recent(key), c = cum(key);
      out.push({ key, label: label(key), pct: r[0] / r[1], n: c[1], tries: ((db()[key] || {}).tries || []).slice(), next: pick(key) });
    });
    return out.sort((a, b) => a.pct - b.pct || b.n - a.n);
  }
  /** Onderwerpen waar al iets geprobeerd is (ook als het inmiddels goed gaat): voor het rapport. */
  function history() {
    return Object.entries(db()).filter(([, e]) => (e.tries || []).length).map(([key, e]) => {
      const r = recent(key);
      return { key, label: label(key), pct: r[1] ? r[0] / r[1] : null, stubborn: isStubborn(key), tries: e.tries.slice(), next: isStubborn(key) ? pick(key) : null };
    }).sort((a, b) => (b.stubborn - a.stubborn) || (a.pct == null ? 1 : a.pct) - (b.pct == null ? 1 : b.pct));
  }

  /* ---------- eerdere rondes (vóór de strategieën bestonden) ----------
     Updates van de lesstof waarin dit onderwerp al extra oefeningen of uitleg kreeg (S.reworked), met het aantal
     fouten dat daarna nog gemaakt is. Goede antwoorden per dag zijn van toen niet bewaard, dus een percentage kan niet. */
  const cmpV = (a, b) => { const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number); for (let i = 0; i < 3; i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d; } return 0; };
  function earlier(key) {
    const tag = isConj(key) ? 'conj' : key, L = st().lupe || {};
    const R = (S.reworked || []).filter(x => x.tag === tag).map(x => ({ v: x.v, t: new Date(/T/.test(x.date) ? x.date : x.date + 'T00:00:00').getTime(), what: x.what })).sort((a, b) => a.t - b.t);
    const all = (L.ex || []).filter(e => (isConj(key) ? e.id === key : e.tag === key)).concat(isConj(key) ? [] : (L.log || []).filter(e => e.tag === key));
    const after = (e, r) => (e.v ? cmpV(e.v, r.v) >= 0 : e.t >= r.t);
    // fouten tussen deze update en de volgende over hetzelfde onderwerp
    return R.map((r, i) => Object.assign(r, { n: all.filter(e => after(e, r) && !(R[i + 1] && after(e, R[i + 1]))).length, last: i === R.length - 1 }));
  }
  const dShort = t => new Date(t).toLocaleDateString(S.LOC, { day: 'numeric', month: 'short' });
  const earlierText = r => '📚 Extra oefeningen en uitleg (' + dShort(r.t) + ', v' + r.v + '): ' + (r.n ? 'daarna nog ' + r.n + '× fout' + (r.last ? '' : ' tot de volgende update') : 'daarna geen fouten genoteerd');

  /* ---------- oefenstof per onderwerp ---------- */
  /** Alle oefeningen over dit onderwerp uit units die je gehad hebt (en de unit waar het wordt uitgelegd). */
  function pool(key) {
    if (isConj(key)) return [];
    const G = S.Gen, learned = new Set(G.learnedUnits().map(u => u.id));
    const home = S.Mistakes ? S.Mistakes.unitsFor(key).map(u => u.id) : [];
    const out = [];
    C.all().forEach(u => { if (learned.has(u.id) || home.includes(u.id)) u.ex.forEach((e, i) => { if (e.tag === key && e.t !== 'match') out.push({ e, u, i }); }); });
    return out;
  }
  const fill = (s, a) => String(s).replace('___', a);
  /** De hele goede zin van een oefening (of null bij een losse meerkeuzevraag). */
  function full(e) {
    if (e.t === 'cloze') return /___/.test(e.s) && !/___.*___/.test(e.s) ? fill(e.s, e.o ? e.o[0] : (e.a || [])[0]) : null;
    if (e.t === 'tr') return (e.a || [])[0] || null;
    if (e.t === 'order') return e.s;
    return null;
  }
  const words = s => String(s).trim().split(/\s+/).length;
  const norm = x => S.Gen.normEx(x.e, x.u, x.i);
  function uitlegUnit(key) {
    const done = st().units || {};
    return C.all().find(u => done[u.id] && u.ex.filter(e => e.tag === key).length >= 2) || (S.Mistakes ? S.Mistakes.unitsFor(key)[0] : null) || null;
  }
  /** Het stuk grammatica-uitleg uit de les dat het best bij dit onderwerp past (de antwoorden van de oefeningen komen erin voor). */
  function grammarFor(key) {
    const u = uitlegUnit(key); if (!u || !(u.grammar || []).length) return [];
    const ans = [...new Set(u.ex.filter(e => e.tag === key).flatMap(e => (e.o ? [e.o[0]] : e.a || []).slice(0, 1)).map(a => String(a).toLowerCase()).filter(a => a.length > 1 && a.length < 25))];
    const txt = g => (g.t + ' ' + g.html + ' ' + JSON.stringify(g.table || '') + JSON.stringify(g.ex || '')).toLowerCase();
    const sc = u.grammar.map(g => { const t = txt(g); return { g, n: ans.filter(a => t.includes(a)).length }; }).sort((a, b) => b.n - a.n);
    return sc[0].n ? [sc[0].g] : u.grammar.slice(0, 2);
  }
  function rule(key) { return (S.beslis || {})[key] || null; }
  /** Jouw laatste fouten bij dit onderwerp (oefeningen + gesprekken), nieuwste eerst. */
  function myMistakes(key) {
    const L = st().lupe || {};
    const ex = (L.ex || []).filter(e => (isConj(key) ? e.id === key : e.tag === key)).slice().reverse();
    const seen = new Set(), uniq = [];
    ex.forEach(e => { const k = e.id || e.q; if (!seen.has(k)) { seen.add(k); uniq.push(e); } });
    const log = isConj(key) ? [] : (L.log || []).filter(e => e.tag === key).slice().reverse();
    return { ex: uniq, log };
  }
  const conjParts = key => { const [, v, t] = key.split('|'); return { v, t, ps: S.conj && S.conj.table(v, t) ? S.conj.personsFor(t) : [] }; };

  const card = (icon, title, html) => ({ kind: 'info', strat: { icon, title, html } });
  const esc = U.esc || (x => String(x).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])));

  /* Elke bouwer geeft { cards: [uitlegkaarten], items: [vragen] } of null als deze strategie hier niet kan. */
  const BUILD = {
    regel(key) {
      const cards = [], r = rule(key);
      if (isConj(key)) {
        const { v, t, ps } = conjParts(key); if (!ps.length) return null;
        const rows = ps.map(p => '<tr><td>' + esc(S.conj.personLabel(t, p)) + '</td><td><b>' + esc(S.conj.conj(v, t, p)) + '</b></td></tr>').join('');
        cards.push(card('📐', label(key), (r ? r.html : '<p>Lees de rij hardop, van boven naar beneden, en let op wat er per persoon verandert. Daarna vul je de vormen zelf in.</p>') + '<div class="table-wrap"><table class="gtable">' + rows + '</table></div>'));
        return { cards, items: U.shuffle(ps).concat(U.sample(ps, 2)).map(p => S.Gen.conjItem(v, t, p)).filter(Boolean) };
      }
      const P = pool(key); if (P.length < 3) return null;
      if (r) cards.push(card('📐', r.t || 'Beslisregel: ' + label(key), r.html));
      const gr = grammarFor(key);
      if (!r && !gr.length) return null;
      gr.forEach(g => cards.push({ kind: 'info', grammar: g }));
      // eerst kiezen (regel toepassen), dan zelf typen
      const items = U.sample(P, 8).map(norm).filter(Boolean).sort((a, b) => S.Gen.difficulty(a) - S.Gen.difficulty(b));
      return { cards, items };
    },
    contrast(key) {
      if (isConj(key)) {
        const { v, t, ps } = conjParts(key); if (ps.length < 3) return null;
        const forms = [...new Set(ps.map(p => S.conj.conj(v, t, p)))]; if (forms.length < 3) return null;
        const items = U.shuffle(ps).map(p => {
          const a = S.conj.conj(v, t, p);
          return { kind: 'mc', q: 'Welke vorm hoort hierbij?', prompt: S.conj.personLabel(t, p) + ' · ' + v, options: U.shuffle([a].concat(U.sample(forms.filter(f => f !== a), 3))), answer: a, tag: 'conj', skill: 'grammar', speakAnswer: true };
        });
        return { cards: [], items: items.concat(U.sample(ps, 3).map(p => S.Gen.conjItem(v, t, p)).filter(Boolean)) };
      }
      const P = pool(key).filter(x => x.e.t === 'cloze' && x.e.o && x.e.o.length >= 2 && full(x.e));
      if (P.length < 3) return null;
      // om en om een ander goed antwoord, zodat je steeds moet kiezen (al · del · al …)
      const by = {}; U.shuffle(P).forEach(x => (by[x.e.o[0]] = by[x.e.o[0]] || []).push(x));
      const groups = Object.values(by), seq = [];
      while (groups.some(g => g.length) && seq.length < 8) groups.forEach(g => { if (g.length && seq.length < 8) seq.push(g.shift()); });
      const items = seq.map(x => {
        const opts = x.e.o.slice(0, 3).map(o => fill(x.e.s, o));
        return { kind: 'mc', q: 'Welke zin is goed?', prompt: x.e.nl || '', options: U.shuffle(opts), answer: opts[0], tag: key, x: x.e.x, i: x.e.i, uitz: x.e.uitz, skill: 'grammar', speakAnswer: true };
      });
      // overzicht: per goed antwoord één voorbeeld, naast elkaar
      const ex = Object.keys(by).length > 1 ? Object.entries(P.reduce((o, x) => { if (!o[x.e.o[0]]) o[x.e.o[0]] = x.e; return o; }, {})).slice(0, 4) : [];
      const cards = ex.length ? [card('⚖️', 'Leg ze naast elkaar', '<p>Kijk eerst naar het verschil. Daarna krijg je steeds twee of drie bijna dezelfde zinnen: kies de goede.</p><div class="table-wrap"><table class="gtable">' +
        ex.map(([a, e]) => '<tr><td><b>' + esc(a) + '</b></td><td lang="' + S.course.target + '">' + esc(e.s).replace('___', '<b>' + esc(a) + '</b>') + (e.nl ? '<br><small class="muted" lang="nl">' + esc(e.nl) + '</small>' : '') + '</td></tr>').join('') + '</table></div>')] : [];
      const rest = pool(key).filter(x => !seq.includes(x));
      return { cards, items: items.concat(U.sample(rest, 3).map(norm).filter(Boolean)) };
    },
    fouten(key) {
      const m = myMistakes(key), items = [], seen = new Set();
      m.ex.slice(0, 8).forEach(e => { if (!e.id || seen.has(e.id)) return; const it = S.Gen.resolve(e.id); if (it) { seen.add(e.id); items.push(it); } });
      if (items.length + m.log.length < 2) return null;
      if (isConj(key)) { const { v, t, ps } = conjParts(key); U.shuffle(ps).forEach(p => { if (items.length < 6) { const it = S.Gen.conjItem(v, t, p); if (it) items.push(it); } }); }
      else U.shuffle(pool(key)).forEach(x => { const id = 'x|' + x.u.id + '|' + x.i; if (items.length < 8 && !seen.has(id)) { seen.add(id); const it = norm(x); if (it) items.push(it); } });
      const T = S.course.target;
      const rows = m.ex.slice(0, 6).map(e => '<li>' + (e.q ? '<small class="muted">' + esc(e.q) + '</small><br>' : '') + '❌ ' + (e.dk || !e.u ? '<i>niet geweten</i>' : '<s lang="' + T + '">' + esc(e.u) + '</s>') + ' → ✅ <b lang="' + T + '">' + esc(e.a) + '</b></li>')
        .concat(m.log.slice(0, 4).map(e => '<li>🎭 ❌ <s lang="' + T + '">' + esc(e.w) + '</s> → ✅ <b lang="' + T + '">' + esc(e.c) + '</b>' + (e.why ? '<br><small class="muted">' + esc(e.why) + '</small>' : '') + '</li>'));
      return { cards: [card('🔍', 'Dit ging bij jou mis', '<p>Kijk eerst rustig naar je eigen fouten. Zie je een patroon: gaat steeds hetzelfde mis? Daarna krijg je precies deze vragen opnieuw.</p><ul class="strat-mis">' + rows.join('') + '</ul>')], items };
    },
    bouw(key) {
      if (isConj(key)) {
        const { v, t, ps } = conjParts(key); if (ps.length < 3) return null;
        return { cards: [card('🧱', 'Vul de hele rij in', '<p>Geen keuzes en geen losse vormen door elkaar: je typt de hele rij van <b lang="' + S.course.target + '">' + esc(v) + '</b> in vaste volgorde, twee keer achter elkaar. De tweede keer gaat het al sneller.</p>')],
          items: ps.concat(ps).map(p => S.Gen.conjItem(v, t, p)).filter(Boolean) };
      }
      const P = U.shuffle(pool(key)), items = [];
      P.filter(x => full(x.e) && x.e.nl && words(full(x.e)) >= 3 && words(full(x.e)) <= 10).slice(0, 4)
        .forEach(x => items.push({ kind: 'order', target: full(x.e), nl: x.e.nl, tag: key, x: x.e.x, i: x.e.i, skill: 'grammar' }));
      // invulzinnen zonder de keuzes: zelf typen
      P.filter(x => x.e.t === 'cloze' && full(x.e)).slice(0, 4)
        .forEach(x => items.push({ kind: 'type', sentence: x.e.s, nl: x.e.nl, h: x.e.h, answers: x.e.o ? [x.e.o[0]] : x.e.a, tag: key, x: x.e.x, i: x.e.i, uitz: x.e.uitz, skill: 'grammar' }));
      P.filter(x => x.e.t === 'tr').slice(0, 3).forEach(x => { const it = norm(x); if (it) items.push(it); });
      return items.length >= 3 ? { cards: [], items } : null;
    },
    dictee(key) {
      let lines;
      if (isConj(key)) {
        const { v, t, ps } = conjParts(key); if (ps.length < 3) return null;
        lines = ps.map(p => ({ text: (S.conj.personLabel(t, p).split(' / ')[0] + ' ' + S.conj.conj(v, t, p)).trim(), nl: S.conj.personNl ? S.conj.personNl(t, p) : '' }));
        return { cards: [], items: U.shuffle(lines).map(l => ({ kind: 'listen', text: l.text, nl: l.nl, tag: 'conj', skill: 'listen' })).concat(U.sample(ps, 3).map(p => S.Gen.conjItem(v, t, p)).filter(Boolean)) };
      }
      const P = U.shuffle(pool(key)).filter(x => full(x.e) && words(full(x.e)) >= 3 && words(full(x.e)) <= 10);
      if (P.length < 3) return null;
      const seen = new Set(), items = [];
      P.forEach(x => { const s = full(x.e); if (items.length < 6 && !seen.has(s)) { seen.add(s); items.push({ kind: 'listen', text: s, nl: x.e.nl || '', tag: key, skill: 'listen' }); } });
      const rest = pool(key).filter(x => !seen.has(full(x.e)));
      return { cards: [], items: items.concat(U.sample(rest, 2).map(norm).filter(Boolean)) };
    },
    spreid(key) {
      if (isConj(key)) { const { v, t, ps } = conjParts(key); if (ps.length < 3) return null; return { cards: [], items: U.sample(ps, 3).map(p => S.Gen.conjItem(v, t, p)).filter(Boolean) }; }
      const P = pool(key); if (P.length < 3) return null;
      // eerst wat je fout had, aangevuld met andere vragen
      const bad = new Set(myMistakes(key).ex.map(e => e.id));
      const first = U.shuffle(P.filter(x => bad.has('x|' + x.u.id + '|' + x.i))), other = U.shuffle(P.filter(x => !first.includes(x)));
      return { cards: [], items: first.concat(other).slice(0, 3).map(norm).filter(Boolean) };
    },
    lupe() { return S.AI && S.AI.enabled && S.AI.enabled() ? { cards: [], items: [], chat: true } : null; }
  };
  function available(key, sid) { try { return !!(BUILD[sid] && BUILD[sid](key)); } catch (e) { return false; } }

  /** De oefenronde voor een strategie. Start nog niets: begin() noteert de poging pas als de ronde echt begint. */
  function session(key, sid, t0) {
    const b = BUILD[sid] && BUILD[sid](key); if (!b || b.chat) return null;
    const s = byId(sid), r = recent(key), dr = (db()[key] || {}).drip;
    const dayN = sid === 'spreid' && dr && dr.t === t0 ? (dr.n || 0) + 1 : 1;
    const intro = card('🧪', 'Andere aanpak: ' + s.icon + ' ' + nameOf(s),
      '<p><b>' + esc(label(key)) + '</b> blijft lastig' + (r[1] ? ': de laatste tijd ' + pc(r[0] / r[1]) + ' goed' : '') + '. Nog meer van hetzelfde helpt dan niet, dus we pakken het anders aan.</p>' +
      '<p>' + esc(s.what) + '</p>' +
      (sid === 'spreid' ? '<p>📅 Dag ' + dayN + ' van ' + DRIP_DAYS + '. Morgen staan er weer 3 klaar bij je zwakke punten.</p>' : '') +
      '<p class="small muted">Ik houd bij of het hierna beter gaat en of het een dag later nog steeds lukt. Werkt deze aanpak, dan gebruik ik hem vaker; werkt hij niet, dan proberen we iets anders.</p>');
    const items = b.items.map(it => Object.assign({}, it, { sk: key, st: t0, srsId: it.srsId || null }));
    return { title: s.icon + ' ' + nameOf(s) + ' · ' + label(key), items: [intro].concat(b.cards, items), mode: 'learn', strat: { key, sid } };
  }
  function lupePrompt(key) {
    const m = myMistakes(key), r = recent(key);
    const mis = m.ex.slice(0, 4).map(e => '«' + (e.q || '') + '» ik: ' + (e.dk || !e.u ? 'wist het niet' : '«' + e.u + '»') + ', goed: «' + e.a + '»').concat(m.log.slice(0, 3).map(e => '«' + e.w + '» moest «' + e.c + '» zijn'));
    const tried = ((db()[key] || {}).tries || []).filter(t => t.s !== 'lupe').map(t => nameOf(byId(t.s) || { name: t.s }));
    return 'Ik blijf «' + label(key) + '» fout doen' + (r[1] ? ' (de laatste tijd ' + pc(r[0] / r[1]) + ' goed)' : '') + ', ook na veel oefenen.' +
      (mis.length ? ' Mijn laatste fouten: ' + mis.join('; ') + '.' : '') +
      (tried.length ? ' Al geprobeerd: ' + [...new Set(tried)].join(', ') + '.' : '') +
      ' Leg het op een andere manier uit dan in de les: geef één korte beslisregel of ezelsbruggetje, twee contrastvoorbeelden, en noem uitzonderingen duidelijk als uitzondering met de reden. Stel me daarna drie korte oefenvragen, één voor één, en wacht steeds op mijn antwoord.';
  }

  /* ---------- starten ---------- */
  function start(key, sid) {
    const s = byId(sid); if (!s || !available(key, sid)) { S.toast('Deze aanpak kan nog niet bij dit onderwerp.'); return; }
    if (sid === 'lupe') {
      begin(key, sid); S.Store.save();
      if (S.Ask && S.Ask.ask) S.Ask.ask(lupePrompt(key));
      return;
    }
    const e = ent(key);
    let t0;
    if (sid === 'spreid' && e.drip && dripActive(key)) t0 = e.drip.t; // vervolgdag van dezelfde poging
    else { t0 = begin(key, sid).t; if (sid === 'spreid') e.drip = { t: t0, s: U.dayIndex(), n: 0, d: 0 }; }
    const ses = session(key, sid, t0); if (!ses) return;
    S.Store.save();
    S.runSession(ses, { desc: { kind: 'plain' }, onFinish: () => {
      const left = sid === 'spreid' && e.drip ? DRIP_DAYS - (e.drip.n || 0) : 0;
      return { text: sid === 'spreid' ? (left > 0 ? 'Dag ' + e.drip.n + ' van ' + DRIP_DAYS + ' gedaan. Morgen weer 3 vragen over ' + label(key) + '.' : 'Alle ' + DRIP_DAYS + ' dagen gedaan. Ik kijk nu of het blijft hangen.')
        : 'Nieuwe aanpak geprobeerd: ' + nameOf(s) + '. Ik houd bij of ' + label(key) + ' hierna beter gaat.' };
    } });
  }
  /** Loopt «elke dag een beetje» nog voor dit onderwerp? (5 oefendagen binnen 10 dagen) */
  function dripActive(key) { const d = (db()[key] || {}).drip; return !!d && (d.n || 0) < DRIP_DAYS && U.dayIndex() - d.s < 10; }
  /** Mini-rondes die vandaag nog klaarstaan. */
  function dripToday() {
    const t = U.dayIndex();
    return Object.keys(db()).filter(key => dripActive(key) && db()[key].drip.d !== t).map(key => ({ key, label: label(key), n: (db()[key].drip.n || 0) + 1 }));
  }

  /* ---------- synchroniseren ---------- */
  function merge(a, b) {
    const out = {}, A = a || {}, B = b || {};
    new Set(Object.keys(A).concat(Object.keys(B))).forEach(key => {
      const x = A[key], y = B[key];
      if (!x || !y) { out[key] = JSON.parse(JSON.stringify(x || y)); return; }
      const nw = (x.u || 0) >= (y.u || 0) ? x : y;
      const o = JSON.parse(JSON.stringify(nw));
      const byT = new Map(), size = t => t.in[1] + t.af[1];
      (x.tries || []).concat(y.tries || []).forEach(t => { if (!t || !t.t) return; const old = byT.get(t.t); if (!old || size(t) > size(old)) byT.set(t.t, JSON.parse(JSON.stringify(t))); });
      o.tries = [...byT.values()].sort((p, q) => p.t - q.t).slice(-MAXTRY);
      const dx = x.drip, dy = y.drip;
      if (dx || dy) o.drip = JSON.parse(JSON.stringify(!dy || (dx && (dx.t > dy.t || (dx.t === dy.t && (dx.n || 0) >= (dy.n || 0)))) ? dx : dy));
      out[key] = o;
    });
    return out;
  }

  /* ---------- als tekst, voor het rapport ---------- */
  function asText() {
    const H = history(), T = topics(), lines = [];
    const fresh = T.filter(t => !t.tries.length);
    if (!H.length && !fresh.length) return '';
    lines.push('Hardnekkige onderwerpen en geprobeerde leerstrategieën (de app wisselt zelf van aanpak en meet het effect: % goed vóór → % goed in de antwoorden erna):');
    H.forEach(x => {
      lines.push(`- ${x.label} [${x.key}] · nu ${pc(x.pct)} goed (laatste antwoorden)${x.stubborn ? ' · nog hardnekkig' : ' · gaat nu goed'}`);
      earlier(x.key).forEach(r => lines.push('    ' + earlierText(r) + ' — ' + r.what));
      x.tries.forEach(t => lines.push('    ' + new Date(t.t).toLocaleDateString(S.LOC, { day: 'numeric', month: 'short' }) + ' ' + tryText(t)));
      if (x.next) lines.push('    volgende aanpak die de app kiest: ' + x.next.icon + ' ' + nameOf(x.next));
    });
    fresh.forEach(x => { lines.push(`- ${x.label} [${x.key}] · ${pc(x.pct)} goed bij ${x.n} antwoorden · nog geen andere aanpak geprobeerd${x.next ? ' · de app stelt voor: ' + x.next.icon + ' ' + nameOf(x.next) : ''}`); earlier(x.key).forEach(r => lines.push('    ' + earlierText(r) + ' — ' + r.what)); });
    const G = Object.values(stats()).filter(o => o.n);
    const off = retired();
    if (off.length) lines.push('Kandidaten om te schrappen of te vervangen (na ≥' + MIN_DONE + ' metingen): ' + off.map(o => { const x = byId(o.id); return `${x.icon} ${nameOf(x)} — ${o.status === 'uit' ? 'UITGEZET, de app stelt hem niet meer voor' : 'helpt weinig, komt minder vaak terug'} (${o.werkt}× werkt, ${o.beetje}× beetje, ${o.niet}× niet van ${o.done})`; }).join(' · '));
    if (G.length) lines.push('Wat bij deze leerling werkt: ' + G.sort((a, b) => b.score - a.score).map(o => { const s = byId(o.id); return `${s.icon} ${nameOf(s)} ${o.n}× ingezet (${o.werkt}× werkt, ${o.beetje}× beetje, ${o.niet}× niet${o.sticks ? ', ' + o.sticks + '× blijft hangen' : ''}${o.n - o.done ? ', ' + (o.n - o.done) + '× nog open' : ''})`; }).join(' · '));
    return lines.join('\n');
  }

  /* ---------- scherm ---------- */
  function triesEl(tries, key) {
    const E = key ? earlier(key) : [];
    if (!tries.length && !E.length) return null;
    return h('div', { class: 'st-tries small' }, h('span', { class: 'muted' }, 'Al geprobeerd:'),
      E.slice(-3).map(r => h('div', { class: 'st-try st-old', title: r.what }, earlierText(r))),
      tries.slice(-4).map(t => { const v = verdict(t); return h('div', { class: 'st-try st-' + v.state }, tryText(t)); }));
  }
  /** Blok onder een zwak onderwerp: de voorgestelde andere aanpak, wat al geprobeerd is, en zelf kiezen. */
  function block(key, opts = {}) {
    const stub = isStubborn(key), tries = ((db()[key] || {}).tries || []);
    if (!stub && !tries.length) return null;
    const wrap = h('div', { class: 'st-block' });
    if (stub) {
      const R0 = rank(key), nx = pick(key), R = nx ? [R0.find(x => x.s === nx)].concat(R0.filter(x => x.s !== nx)) : R0;
      wrap.append(h('div', { class: 'st-head' }, h('span', { class: 'st-chip' }, '🔁 Hardnekkig'), h('small', { class: 'muted' }, tries.length ? 'Nog niet opgelost. Tijd voor weer iets anders.' : 'Gewoon oefenen hielp nog niet genoeg. Probeer het eens anders.')));
      if (nx) {
        const G = stats()[nx.id];
        wrap.append(h('button', { class: 'btn primary st-go', type: 'button', onclick: () => start(key, nx.id) }, h('b', null, nx.icon + ' Probeer: ' + nameOf(nx)), h('small', null, S.docentNaam ? S.docentNaam(nx.what) : nx.what),
          G.werkt ? h('small', { class: 'st-why' }, '✅ Werkte bij jou al ' + G.werkt + '× bij een ander onderwerp') : null));
        if (R.length > 1) { // zelf kiezen kan altijd, ook een uitgezette aanpak
          const more = h('details', { class: 'st-more' }, h('summary', { class: 'small' }, 'Andere aanpak kiezen'),
            R.slice(1).map(x => h('button', { class: 'btn ghost small st-alt', type: 'button', onclick: () => start(key, x.s.id) }, x.s.icon + ' ' + nameOf(x.s) + (x.tried ? ' · ' + x.tried + '× geprobeerd' : '') + (x.status === 'uit' ? ' · 🚫 werkt bij jou niet' : x.status === 'weinig' ? ' · 🔻 helpt bij jou weinig' : ''))));
          wrap.append(more);
        }
      }
    } else if (!opts.quiet) wrap.append(h('div', { class: 'st-head' }, h('span', { class: 'st-chip ok' }, '📈 Gaat beter')));
    const te = triesEl(tries, key); if (te) wrap.append(te);
    return wrap;
  }
  /** Werkwoordstijden die hardnekkig fout gaan (grammatica-tags staan al in de lijst van «Mijn zwakke punten»). */
  function conjRows() {
    return topics().filter(t => isConj(t.key)).map(t => h('div', { class: 'zw-topic' },
      h('div', { class: 'zw-top' }, h('div', { class: 'grow' }, h('b', { lang: S.course.target }, t.label), h('small', { class: 'muted' }, 'de laatste tijd ' + pc(t.pct) + ' goed · ' + t.n + ' antwoorden'))),
      block(t.key)));
  }
  /** «Wat werkt voor jou»: per strategie hoe vaak ingezet en met welk resultaat. Null als er nog niets geprobeerd is. */
  function overview() {
    const G = Object.values(stats()).filter(o => o.n); if (!G.length) return null;
    return h('div', { class: 'card st-over' },
      h('p', { class: 'small muted' }, 'Bij hardnekkige fouten wissel ik van aanpak en meet ik of het daarna beter gaat. Wat bij jou werkt, zet ik vaker in.'),
      h('details', { class: 'st-info small' }, h('summary', null, 'ⓘ Hoe bepaal ik dat?'),
        h('p', null, 'Per poging vergelijk ik je laatste 10 antwoorden vóór de aanpak met je volgende antwoorden erna (minstens 4, hooguit 12; de vragen uit de ronde zelf tellen niet mee).'),
        h('ul', null,
          h('li', null, '✅ werkt: daarna 80% of meer goed, of minstens 15 procentpunt beter dan ervoor'),
          h('li', null, '↗️ helpt een beetje: 5 tot 15 procentpunt beter'),
          h('li', null, '✖️ hielp niet: minder dan 5 procentpunt beter'),
          h('li', null, '📌 blijft hangen: op een latere dag nog minstens 75% goed (bij 3 of meer antwoorden). Zakt het weer weg, dan telt «werkt» maar voor 0,6')),
        h('p', null, 'Een aanpak krijgt per poging punten: werkt = 1, een beetje = 0,35, niet = 0. Pas na ' + MIN_DONE + ' afgeronde metingen oordeel ik over de aanpak zelf: gemiddeld onder 0,5 = 🔻 helpt weinig en komt minder vaak terug; onder 0,25 = 🚫 uitgezet, die stel ik niet meer voor. Zelf kiezen kan altijd nog, en werkt hij later toch, dan komt hij vanzelf terug.')),
      G.sort((a, b) => b.score - a.score).map(o => {
        const s = byId(o.id), open = o.n - o.done;
        const res = [o.werkt ? '✅ ' + o.werkt + '× werkt' : '', o.beetje ? '↗️ ' + o.beetje + '× een beetje' : '', o.niet ? '✖️ ' + o.niet + '× niet' : '', open ? '⏳ ' + open + '× nog bezig' : '', o.sticks ? '📌 ' + o.sticks + '× blijft hangen' : ''].filter(Boolean).join(' · ');
        return h('div', { class: 'st-row' }, h('span', { class: 'st-ic', 'aria-hidden': 'true' }, s.icon), h('div', { class: 'grow' }, h('b', null, nameOf(s)), h('small', { class: 'muted' }, o.n + '× ingezet · ' + res),
          o.status === 'uit' ? h('small', { class: 'st-off' }, '🚫 Uitgezet: werkt bij jou niet, ik stel hem niet meer voor') : o.status === 'weinig' ? h('small', { class: 'st-off' }, '🔻 Helpt weinig: komt minder vaak terug') : null));
      }));
  }
  /** Kaartje voor Hoy / zwakke punten: mini-rondes van «elke dag een beetje» die vandaag klaarstaan. */
  function dripCard() {
    const D = dripToday(); if (!D.length) return null;
    return h('div', { class: 'card st-drip' }, h('b', null, '🗓️ Elke dag een beetje'),
      D.map(d => h('button', { class: 'btn primary wide', type: 'button', onclick: () => start(d.key, 'spreid') }, '3 vragen: ' + d.label + ' · dag ' + d.n + ' van ' + DRIP_DAYS)));
  }
  /** Sectie voor het rapport: per onderwerp wat geprobeerd is en met welk effect. */
  function reportCard() {
    const H = history(), fresh = topics().filter(t => !t.tries.length);
    if (!H.length && !fresh.length) return null;
    const card = h('div', { class: 'card' }, h('p', { class: 'small muted' }, 'Onderwerpen die fout bleven gaan, welke andere aanpak al geprobeerd is en wat het deed. Dit gaat mee in het rapport, zodat nieuwe voorstellen niet «meer van hetzelfde» zijn.'));
    H.forEach(x => card.append(h('div', { class: 'st-rep' }, h('b', null, x.label), h('small', { class: 'muted' }, ' · nu ' + pc(x.pct) + ' goed' + (x.stubborn ? ' · 🔁 nog hardnekkig' : ' · 📈 gaat beter')), triesEl(x.tries, x.key),
      x.next ? h('div', { class: 'small' }, 'Volgende aanpak: ', h('b', null, x.next.icon + ' ' + nameOf(x.next))) : null)));
    fresh.forEach(x => card.append(h('div', { class: 'st-rep' }, h('b', null, x.label), h('small', { class: 'muted' }, ' · ' + pc(x.pct) + ' goed · nog geen andere aanpak geprobeerd'), triesEl([], x.key), x.next ? h('div', { class: 'small' }, 'Voorstel: ', h('b', null, x.next.icon + ' ' + nameOf(x.next))) : null)));
    card.append(h('a', { class: 'btn ghost wide', href: '#/zwak' }, '🎯 Naar mijn zwakke punten'));
    return card;
  }

  S.Strat = { LIST, keyOf, label, answer, begin, verdict, stats, rank, pick, retired, MIN_DONE, isStubborn, recent, topics, history, earlier, available, session, start, merge, asText, tryText, lupePrompt, dripActive, dripToday,
    block, conjRows, overview, dripCard, reportCard, BUILD };
})(window.SPT);
