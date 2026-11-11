/* Genereert oefen-items en stelt sessies samen (stappen, herhaling, toetsen, training). */
(function (S) {
  'use strict';
  const { U, C } = S;

  /* ---------- woorden ---------- */
  const ART = /^(el|la|los|las|un|una)\s+/i;
  function parts(es) {
    return String(es).split(/\s*\/\s*/).map(x => x.replace(/…/g, '').replace(/\s*\.\.\.$/, '').trim()).filter(Boolean);
  }
  function wordAnswers(w) {
    const p = parts(w.es);
    const out = new Set([w.es.replace(/…/g, '').trim(), ...p]);
    return [...out];
  }
  function wordItem(w, kind, unit) {
    const base = { srsId: w.id, tag: 'vocab', skill: 'vocab', word: w };
    const seenNl = new Set([w.nl]), seenEs = new Set([w.es]);
    const distract = U.shuffle(C.words(unit)).filter(x => {
      if (x.id === w.id || seenNl.has(x.nl) || seenEs.has(x.es)) return false;
      seenNl.add(x.nl); seenEs.add(x.es); return true;
    }).slice(0, 3);
    if (kind === 'card') return { kind: 'card', word: w };
    if (kind === 'mc-es') return { ...base, kind: 'mc', prompt: w.es, speakPrompt: w.es, q: 'Wat betekent dit?', options: U.shuffle([w.nl, ...distract.map(d => d.nl)]), answer: w.nl };
    if (kind === 'mc-nl') return { ...base, kind: 'mc', prompt: w.nl, q: 'Hoe zeg je dit in het Spaans?', options: U.shuffle([w.es, ...distract.map(d => d.es)]), answer: w.es, speakAnswer: true };
    if (kind === 'listen-mc') return { ...base, kind: 'mc', audio: w.es, q: 'Wat hoor je?', options: U.shuffle([w.es, ...distract.map(d => d.es)]), answer: w.es, skill: 'listen' };
    if (kind === 'type') return { ...base, kind: 'type', prompt: w.nl, q: 'Typ in het Spaans', answers: wordAnswers(w), articleOptional: true, note: w.note, speakAnswer: true };
    return null;
  }
  function matchItem(words) {
    const seen = new Set(); const uniq = words.filter(w => !seen.has(w.nl) && seen.add(w.nl));
    return { kind: 'match', pairs: uniq.slice(0, 5).map(w => [w.es, w.nl]), tag: 'vocab', skill: 'vocab' };
  }

  /* ---------- content-oefeningen normaliseren ---------- */
  function normEx(e, unit, idx, opts = {}) {
    const id = unit && idx != null ? 'x|' + unit.id + '|' + idx : null;
    const base = { srsId: opts.noSrs ? null : id, tag: e.tag || 'vocab', x: e.x, skill: 'grammar' };
    switch (e.t) {
      case 'mc': return { ...base, kind: 'mc', q: e.q, options: U.shuffle(e.o), answer: e.o[0], skill: opts.skill || base.skill };
      case 'cloze':
        if (e.o) return { ...base, kind: 'mc', sentence: e.s, nl: e.nl, h: e.h, options: U.shuffle(e.o), answer: e.o[0], fill: true };
        return { ...base, kind: 'type', sentence: e.s, nl: e.nl, h: e.h, answers: e.a };
      case 'tr': return { ...base, kind: 'type', prompt: e.nl, q: 'Vertaal naar het Spaans', answers: e.a, translate: true, skill: 'write', speakAnswer: true };
      case 'order': return { ...base, kind: 'order', target: e.s, nl: e.nl, tag: e.tag || 'vocab' };
      case 'match': return { ...base, kind: 'match', pairs: e.p, skill: 'vocab' };
    }
    return null;
  }

  /* ---------- vervoegen ---------- */
  function conjItem(verb, tense, person) {
    const persons = S.conj.personsFor(tense);
    const p = person != null ? person : U.pick(persons);
    const answers = S.conj.alternatives(verb, tense, p);
    if (!answers.length) return null;
    const info = S.conj.info(verb) || {};
    const T = S.conj.TENSES[tense];
    return { kind: 'type', srsId: 'c|' + verb + '|' + tense, tag: 'conj', skill: 'grammar', conj: { verb, tense, person: p },
      prompt: verb, sub: (info.nl ? info.nl + ' · ' : '') + T.es, person: S.conj.personLabel(tense, p), q: 'Vervoeg', answers, noTypo: true, speakAnswer: true };
  }

  /* ---------- dialoog ---------- */
  function shortLines(u, maxWords = 9) {
    return u.dialogue.lines.map((l, i) => ({ l, i })).filter(({ l }) => l[1].split(' ').length <= maxWords && l[1].split(' ').length >= 3);
  }
  function listenItem(text, nl) { return { kind: 'listen', text, nl, tag: 'vocab', skill: 'listen' }; }
  function speakItem(text, nl) { return { kind: 'speak', text, nl, tag: 'vocab', skill: 'speak' }; }

  /* ---------- stappen van een unit ---------- */
  const STEPS = [
    { id: 'vocab1', icon: '🃏', nl: 'Woorden 1', es: 'Vocabulario 1', min: 7 },
    { id: 'vocab2', icon: '🃏', nl: 'Woorden 2', es: 'Vocabulario 2', min: 7 },
    { id: 'grammar', icon: '🧩', nl: 'Grammatica', es: 'Gramática', min: 10 },
    { id: 'dialogue', icon: '💬', nl: 'Dialoog', es: 'Diálogo', min: 7 },
    { id: 'read', icon: '📖', nl: 'Lezen', es: 'Lectura', min: 6 },
    { id: 'apply', icon: '🎙️', nl: 'Toepassen', es: 'Práctica libre', min: 8 },
    { id: 'test', icon: '🏁', nl: 'Unittoets', es: 'Examen', min: 6 }
  ];
  function half(u, n) { const ws = C.words(u); const m = Math.ceil(ws.length / 2); return n === 1 ? ws.slice(0, m) : ws.slice(m); }

  function vocabSession(u, n) {
    const ws = half(u, n);
    const items = [];
    for (let i = 0; i < ws.length; i += 5) {
      const chunk = ws.slice(i, i + 5);
      chunk.forEach(w => items.push(wordItem(w, 'card', u)));
      U.shuffle(chunk).forEach((w, j) => items.push(wordItem(w, j % 2 ? 'mc-nl' : 'mc-es', u)));
      if (chunk.length >= 3) items.push(matchItem(U.shuffle(chunk)));
    }
    U.sample(ws, Math.min(5, ws.length)).forEach(w => items.push(wordItem(w, 'type', u)));
    return { title: u.title + ' · ' + STEPS[n - 1].nl, items, mode: 'learn', srsAdd: ws.map(w => w.id) };
  }
  function grammarSession(u) {
    const items = u.grammar.map(g => ({ kind: 'info', grammar: g }));
    u.ex.forEach((e, i) => { const it = normEx(e, u, i); if (it) items.push(it); });
    const conj = [];
    (u.verbs || []).forEach(v => (u.tenses || []).forEach(t => { if (S.conj.table(v, t)) conj.push([v, t]); }));
    U.sample(conj, 5).forEach(([v, t]) => { const it = conjItem(v, t); if (it) items.push(it); });
    const srsAdd = u.ex.map((_, i) => 'x|' + u.id + '|' + i).concat(conj.map(([v, t]) => 'c|' + v + '|' + t));
    return { title: u.title + ' · Grammatica', items: interleaveInfoFirst(items), mode: 'learn', srsAdd };
  }
  function interleaveInfoFirst(items) {
    const info = items.filter(i => i.kind === 'info'); const rest = items.filter(i => i.kind !== 'info');
    // uitleg eerst, oefeningen in de content-volgorde (van makkelijk naar moeilijk), vervoegingen erdoor
    const conj = rest.filter(i => i.conj); const ex = rest.filter(i => !i.conj);
    const out = [...info];
    ex.forEach((e, i) => { out.push(e); if (i % 3 === 2 && conj.length) out.push(conj.shift()); });
    return out.concat(conj);
  }
  function dialogueSession(u) {
    const d = u.dialogue;
    const items = [{ kind: 'dialogue', dialogue: d }];
    d.q.forEach(q => items.push({ ...normEx(q, null, null, { noSrs: true, skill: 'read' }), skill: 'read', tag: 'vocab' }));
    const sl = U.shuffle(shortLines(u));
    sl.slice(0, 2).forEach(({ l }) => items.push(listenItem(l[1], l[2])));
    if (sl[2]) items.push({ kind: 'order', target: sl[2].l[1], nl: sl[2].l[2], tag: 'vocab', skill: 'read' });
    sl.slice(3, 5).forEach(({ l }) => items.push(speakItem(l[1], l[2])));
    return { title: u.title + ' · Dialoog', items, mode: 'learn' };
  }
  function readingSession(u) {
    const r = u.reading;
    const items = [{ kind: 'reading', reading: r }];
    r.q.forEach(q => items.push({ ...normEx(q, null, null, { noSrs: true, skill: 'read' }), skill: 'read', tag: 'vocab' }));
    const sents = r.p.flatMap(([es, nl]) => { const e = es.split(/(?<=[.!?»])\s+/), n = nl.split(/(?<=[.!?»])\s+/); return e.length === n.length ? e.map((x, i) => [x.replace(/[«»]/g, "").trim(), n[i].replace(/[«»]/g, "").trim()]) : []; })
      .filter(([es]) => { const n = es.split(' ').length; return n >= 4 && n <= 10; });
    U.sample(sents, 2).forEach(([es, nl]) => items.push(listenItem(es, nl)));
    return { title: u.title + ' · Lezen', items, mode: 'learn' };
  }
  function applySession(u) {
    const items = [];
    if (u.culture) items.push({ kind: 'info', culture: u.culture });
    u.say.forEach(([es, nl]) => items.push(speakItem(es, nl)));
    if (u.task) items.push({ kind: 'write', task: u.task, unit: u.id });
    return { title: u.title + ' · Toepassen', items, mode: 'learn', offerRoleplay: !!u.scenario };
  }
  function unitTest(u) {
    const items = [];
    const ws = U.shuffle(C.words(u));
    ws.slice(0, 3).forEach(w => items.push(wordItem(w, 'type', u)));
    ws.slice(3, 5).forEach(w => items.push(wordItem(w, U.pick(['mc-nl', 'listen-mc']), u)));
    const exIdx = U.shuffle(u.ex.map((e, i) => i).filter(i => u.ex[i].t !== 'match'));
    exIdx.slice(0, 7).forEach(i => items.push(normEx(u.ex[i], u, i)));
    const conj = [];
    (u.verbs || []).forEach(v => (u.tenses || []).forEach(t => { if (S.conj.table(v, t)) conj.push([v, t]); }));
    U.sample(conj, 3).forEach(([v, t]) => { const it = conjItem(v, t); if (it) items.push(it); });
    const sl = U.shuffle(shortLines(u));
    if (sl[0]) items.push(listenItem(sl[0].l[1], sl[0].l[2]));
    if (u.reading) { const q = U.pick(u.reading.q); items.push({ ...normEx(q, null, null, { noSrs: true }), q: '«' + u.reading.t + '» — ' + q.q, skill: 'read', tag: 'vocab' }); }
    return { title: u.title + ' · Unittoets', items: U.shuffle(items.filter(Boolean)), mode: 'test', pass: 0.8 };
  }
  function stepSession(u, step) {
    switch (step) {
      case 'vocab1': return vocabSession(u, 1);
      case 'vocab2': return vocabSession(u, 2);
      case 'grammar': return grammarSession(u);
      case 'dialogue': return dialogueSession(u);
      case 'read': return readingSession(u);
      case 'apply': return applySession(u);
      case 'test': return unitTest(u);
    }
  }

  /* ---------- niveau-examen ---------- */
  function levelExam(lvl) {
    const us = C.unitsOf(lvl); const items = [];
    us.forEach(u => {
      const exIdx = U.shuffle(u.ex.map((e, i) => i).filter(i => u.ex[i].t !== 'match')).slice(0, 2);
      exIdx.forEach(i => items.push(normEx(u.ex[i], u, i)));
      const w = U.pick(C.words(u)); items.push(wordItem(w, 'type', u));
    });
    const conj = []; us.forEach(u => (u.verbs || []).forEach(v => (u.tenses || []).forEach(t => conj.push([v, t]))));
    U.sample(conj, 5).forEach(([v, t]) => { const it = conjItem(v, t); if (it) items.push(it); });
    const u2 = U.sample(us, 2);
    u2.forEach(u => { const sl = shortLines(u); if (sl.length) { const l = U.pick(sl).l; items.push(listenItem(l[1], l[2])); } });
    return { title: 'Niveau-examen ' + lvl, items: U.shuffle(items).slice(0, 36), mode: 'test', pass: 0.8 };
  }

  /* ---------- herhaling (SRS) ---------- */
  function resolve(id) {
    const [type, a, b] = id.split('|');
    const card = S.Store.state.srs[id];
    if (type === 'w') {
      const u = C.get(a); if (!u) return null; const w = C.word(u, +b); if (!w) return null;
      const r = card ? card.r : 1;
      const kind = r <= 1 ? U.pick(['mc-es', 'mc-nl']) : r === 2 ? U.pick(['listen-mc', 'mc-nl', 'type']) : 'type';
      return wordItem(w, kind, u);
    }
    if (type === 'x') { const u = C.get(a); if (!u || !u.ex[+b]) return null; return normEx(u.ex[+b], u, +b); }
    if (type === 'c') return conjItem(a, b);
    return null;
  }
  function reviewSession(limit = 20, ids) {
    const due = ids || S.SRS.due(limit);
    const items = due.map(resolve).filter(Boolean);
    // afwisselen: geen twee vervoegingen achter elkaar als het kan
    return { title: 'Herhaling', items: spread(items), mode: 'review' };
  }
  function spread(items) {
    const byKind = {}; items.forEach(i => { const k = i.conj ? 'c' : i.word ? 'w' : 'x'; (byKind[k] = byKind[k] || []).push(i); });
    const keys = Object.keys(byKind).map(k => U.shuffle(byKind[k])); const out = [];
    while (keys.some(a => a.length)) keys.forEach(a => { if (a.length) out.push(a.shift()); });
    return out;
  }

  /* ---------- training ---------- */
  function learnedUnits() {
    const st = S.Store.state;
    return C.all().filter(u => { const s = st.units[u.id]; return s && (s.done || s.tested || Object.keys(s.steps || {}).length); });
  }
  function conjTraining(tenses, verbs, n = 20) {
    const pairs = [];
    verbs.forEach(v => tenses.forEach(t => { if (S.conj.table(v, t)) pairs.push([v, t]); }));
    if (!pairs.length) return null;
    const items = [];
    for (let i = 0; i < n; i++) { const [v, t] = U.pick(pairs); const it = conjItem(v, t); if (it) items.push(it); }
    return { title: 'Werkwoordtrainer', items, mode: 'learn' };
  }
  function weakTraining(tags) {
    const items = [];
    const us = learnedUnits().length ? learnedUnits() : C.all().slice(0, 1);
    us.forEach(u => u.ex.forEach((e, i) => { if (tags.includes(e.tag)) items.push(normEx(e, u, i)); }));
    let picked = U.sample(items, 15);
    if (tags.includes('conj')) {
      const pairs = []; us.forEach(u => (u.verbs || []).forEach(v => (u.tenses || []).forEach(t => { if (S.conj.table(v, t)) pairs.push([v, t]); })));
      const conj = U.sample(pairs, 8).map(([v, t]) => conjItem(v, t)).filter(Boolean);
      picked = U.shuffle(picked.slice(0, 15 - conj.length).concat(conj));
    }
    return { title: 'Zwakke punten', items: picked, mode: 'learn' };
  }
  function listenTraining(n = 10) {
    const us = learnedUnits().length ? learnedUnits() : C.all().slice(0, 2);
    const lines = us.flatMap(u => shortLines(u, 10).map(x => x.l)).concat(us.flatMap(u => u.say));
    return { title: 'Luisteren (dictee)', items: U.sample(lines, n).map(l => l.length === 3 ? listenItem(l[1], l[2]) : listenItem(l[0], l[1])), mode: 'learn' };
  }
  function speakTraining(n = 8) {
    const us = learnedUnits().length ? learnedUnits() : C.all().slice(0, 2);
    const lines = us.flatMap(u => u.say).concat(us.flatMap(u => shortLines(u, 9).map(x => [x.l[1], x.l[2]])));
    return { title: 'Uitspraak & spreken', items: U.sample(lines, n).map(([es, nl]) => speakItem(es, nl)), mode: 'learn' };
  }
  function sprint(n = 20) {
    const us = learnedUnits().length ? learnedUnits() : C.all().slice(0, 1);
    const ws = us.flatMap(u => C.words(u).map(w => [w, u]));
    return { title: 'Woordensprint', items: U.sample(ws, n).map(([w, u]) => wordItem(w, U.pick(['mc-es', 'mc-nl', 'listen-mc', 'type']), u)), mode: 'learn', timer: 120 };
  }
  function placementBand(lvl) {
    const qs = S.placement.filter(q => q.lv === lvl);
    return { title: 'Plaatsingstoets · ' + lvl, items: qs.map(q => ({ kind: 'mc', q: q.q.includes('___') ? null : q.q, sentence: q.q.includes('___') ? q.q : null, options: U.shuffle(q.o), answer: q.o[0], tag: null, fill: q.q.includes('___') })), mode: 'exam' };
  }

  S.Gen = { STEPS, stepSession, reviewSession, levelExam, conjTraining, weakTraining, listenTraining, speakTraining, sprint, placementBand, resolve, learnedUnits, wordItem, normEx, conjItem, parts, ART };
})(window.SPT);
