/* Genereert oefen-items en stelt sessies samen (stappen, herhaling, toetsen, training). */
(function (S) {
  'use strict';
  const { U, C } = S;

  /* ---------- woorden ---------- */
  // lidwoorden van de doeltaal (Spaans: el/la…, Engels: the/a/an, Nederlands: de/het/een)
  const TGT = (S.course && S.course.target) || 'es';
  const ART = TGT === 'en' ? /^(the|a|an)\s+/i : TGT === 'nl' ? /^(de|het|een)\s+/i : /^(el|la|los|las|un|una)\s+/i;
  function parts(es) {
    return String(es).split(/\s*\/\s*/).map(x => x.replace(/…/g, '').replace(/\s*\.\.\.$/, '').trim()).filter(Boolean);
  }
  /* Mannelijke / vrouwelijke vorm van "amigo/a", "jefe/a", "anfitrión/ona". */
  const SLASH = /(\S+?)\/(a|ona)\b/g;
  const masc = s => s.replace(SLASH, '$1');
  function femWord(x, suf) {
    if (suf === 'ona') return x.replace(/ón$/, 'ona');
    if (/[oe]$/.test(x)) return x.slice(0, -1) + 'a';
    return x.normalize('NFD').replace(/([aeiou])́(?=[^aeiou]*$)/, '$1').normalize('NFC') + 'a';
  }
  const fem = s => s.replace(SLASH, (_, x, suf) => femWord(x, suf));
  /** Alle schrijfwijzen van een woord uit de woordenlijst: "el / la maestro/a" → el maestro, la maestra. */
  function forms(es) {
    const s = String(es).replace(/…/g, '').replace(/\s*\.\.\.$/, '').trim();
    const out = new Set([s]);
    const add = x => { x = x.trim(); if (!x) return; out.add(x); if (/\S\/(a|ona)\b/.test(x)) { out.add(masc(x)); out.add(fem(x)); } };
    const m = s.match(/^(el|un|los)\s*\/\s*(la|una|las)\s+(.+)$/i);
    if (m) { out.add(m[1] + ' ' + masc(m[3])); out.add(m[2] + ' ' + fem(m[3])); return [...out]; }
    const segs = s.split(/\s*\/\s+|\s+\/\s*/);
    segs.forEach(add);
    // "sacar / tomar fotos", "seguro / segura de sí mismo/a": eerste woord + de rest van het tweede deel
    if (segs.length === 2 && !/\s/.test(segs[0]) && /\s/.test(segs[1])) add(segs[0] + segs[1].replace(/^\S+/, ''));
    if (segs.length === 1) add(s);
    return [...out].filter(x => x && !/^(el|la|los|las|un|una)$/i.test(x));
  }
  /* Woorden met precies dezelfde Nederlandse vertaling rekenen elkaar goed (bijv. «het werk»: el trabajo, la chamba…). */
  let SAME_NL = null;
  const nlKey = nl => String(nl || '').toLowerCase().replace(/\s+/g, ' ').trim();
  function sameNl(w) {
    if (!SAME_NL) {
      SAME_NL = new Map();
      C.all().forEach(u => u.vocab.forEach(v => { const k = nlKey(v[1]); if (!SAME_NL.has(k)) SAME_NL.set(k, new Set()); SAME_NL.get(k).add(v[0]); }));
    }
    return [...(SAME_NL.get(nlKey(w.nl)) || [])].filter(es => es !== w.es);
  }
  function wordAnswers(w) { return forms(w.es); }
  /** Andere correcte antwoorden: synoniemen uit content/synoniemen.js en woorden met dezelfde vertaling. */
  function wordSynonyms(w) {
    const main = new Set(forms(w.es).map(x => S.check.norm(x)));
    const out = new Set();
    [...((S.synonyms || {})[w.es] || []), ...sameNl(w)].forEach(es => forms(es).forEach(x => { if (!main.has(S.check.norm(x))) out.add(x); }));
    return [...out];
  }
  /** Controle van een typvraag over een woord (of zin): synoniemen, lidwoord optioneel/fout. */
  function checkType(user, it) {
    const all = it.answers.concat(it.syn || []);
    let r = S.check.check(user, all, { noTypo: it.noTypo });
    if (!r.ok && it.articleOptional) {
      const strip = a => a.replace(ART, '');
      const r2 = S.check.check(strip(user), all.map(strip), { noTypo: it.noTypo });
      if (r2.ok) {
        const full = all.find(a => strip(a) === r2.best) || it.answers[0];
        if (!ART.test(user) && ART.test(full)) r = { ok: true, warn: 'article', best: full };
        else if (ART.test(user) && ART.test(full)) r = { ok: false, warn: 'article-wrong', best: full, gender: genderOf(full) };
      }
    }
    if (it.syn && it.syn.includes(r.best)) { r.synonym = true; if (r.ok && !r.warn) r.warn = 'synonym'; }
    if (!r.ok && !r.warn) r.best = it.answers[0];
    // een stukje van een vaste uitdrukking vergeten («derecha» bij «a la derecha»): fout, maar met een gerichte hint
    if (!r.ok && !r.warn && it.word) { const m = missingPart(user, it.answers); if (m) { r.warn = 'incomplete'; r.best = m.full; r.hint = m.hint; } }
    return r;
  }
  /** Staan alle getypte woorden aaneen in een antwoord, maar ontbreken er woorden? → { full, hint: 'a la …' } */
  function missingPart(user, answers) {
    const W = s => S.check.bare(S.check.norm(s)).split(' ').filter(Boolean);
    const uw = W(user); if (!uw.length) return null;
    for (const a of answers) {
      const aw = W(a), raw = String(a).replace(/[¿?¡!.,]/g, '').trim().split(/\s+/);
      if (aw.length <= uw.length || raw.length !== aw.length) continue;
      for (let i = 0; i + uw.length <= aw.length; i++) {
        if (uw.every((w, j) => w === aw[i + j])) {
          const hint = raw.map((w, j) => j >= i && j < i + uw.length ? null : w)
            .reduce((o, w) => (w === null ? (o[o.length - 1] === '…' ? o : o.concat('…')) : o.concat(w)), []).join(' ');
          return { full: a, hint };
        }
      }
    }
    return null;
  }
  function genderOf(full) {
    if (TGT === 'nl') { const a = (String(full).match(ART) || [])[1]; return a && a.toLowerCase() === 'het' ? 'een het-woord' : a && a.toLowerCase() === 'de' ? 'een de-woord' : ''; }
    if (TGT !== 'es') return '';
    const m = String(full).match(ART); if (!m) return '';
    const a = m[1].toLowerCase(), noun = full.replace(ART, '');
    if (/^(la|una|las)$/.test(a)) return 'vrouwelijk';
    if (/^(el|un)$/.test(a) && /^h?[aá]/i.test(noun)) return ''; // el agua, el hambre: vrouwelijk, maar met el
    return 'mannelijk';
  }
  function wordItem(w, kind, unit) {
    const base = { srsId: w.id, tag: 'vocab', skill: 'vocab', word: w };
    const seenNl = new Set([w.nl]), seenEs = new Set([w.es]);
    // 🗺️ regiowoord (js/regio.js): het standaardwoord mag geen «foute» keuze zijn, en bij typen is het ook goed
    const std = S.Regio ? S.Regio.accept(w) : '';
    if (std) forms(std).forEach(x => seenEs.add(x));
    const distract = U.shuffle(C.words(unit)).filter(x => {
      if (x.id === w.id || seenNl.has(x.nl) || seenEs.has(x.es) || (std && forms(x.es).some(f => seenEs.has(f)))) return false;
      seenNl.add(x.nl); seenEs.add(x.es); return true;
    }).slice(0, 3);
    if (kind === 'card') return { kind: 'card', word: w };
    if (kind === 'mc-es') return { ...base, kind: 'mc', prompt: w.es, speakPrompt: w.es, q: 'Wat betekent dit?', options: U.shuffle([w.nl, ...distract.map(d => d.nl)]), answer: w.nl };
    if (kind === 'mc-nl') return { ...base, kind: 'mc', prompt: w.nl, q: 'Hoe zeg je dit in het Spaans?', options: U.shuffle([w.es, ...distract.map(d => d.es)]), answer: w.es, speakAnswer: true };
    if (kind === 'listen-mc') return { ...base, kind: 'mc', audio: w.es, q: 'Wat hoor je?', options: U.shuffle([w.es, ...distract.map(d => d.es)]), answer: w.es, skill: 'listen' };
    if (kind === 'type') return { ...base, kind: 'type', prompt: w.nl, q: 'Typ in het Spaans', answers: wordAnswers(w), syn: std ? [...new Set(wordSynonyms(w).concat(forms(std)))] : wordSynonyms(w), articleOptional: true, note: w.note, speakAnswer: true };
    return null;
  }
  function matchItem(words) {
    const seen = new Set(); const uniq = words.filter(w => !seen.has(w.nl) && seen.add(w.nl));
    return { kind: 'match', pairs: uniq.slice(0, 5).map(w => [w.es, w.nl]), tag: 'vocab', skill: 'vocab' };
  }

  /* ---------- content-oefeningen normaliseren ---------- */
  function normEx(e, unit, idx, opts = {}) {
    const id = unit && idx != null ? 'x|' + unit.id + '|' + idx : null;
    const base = { srsId: opts.noSrs ? null : id, tag: e.tag || 'vocab', x: e.x, i: e.i, uitz: e.uitz, skill: 'grammar' };
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
  function listenItem(text, nl, i) { return { kind: 'listen', text, nl, i, tag: 'vocab', skill: 'listen' }; }
  function speakItem(text, nl, i) { return { kind: 'speak', text, nl, i, tag: 'vocab', skill: 'speak' }; }

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
    const ord = [];
    ex.forEach((e, i) => { ord.push(e); if (i % 3 === 2 && conj.length) ord.push(conj.shift()); });
    return info.concat(mix(ord.concat(conj), { keepOrder: true }));
  }
  function dialogueSession(u) {
    const d = u.dialogue;
    const items = [{ kind: 'dialogue', dialogue: d }];
    d.q.forEach(q => items.push({ ...normEx(q, null, null, { noSrs: true, skill: 'read' }), skill: 'read', tag: 'vocab' }));
    const sl = U.shuffle(shortLines(u));
    sl.slice(0, 2).forEach(({ l }) => items.push(listenItem(l[1], l[2], l[3])));
    if (sl[2]) items.push({ kind: 'order', target: sl[2].l[1], nl: sl[2].l[2], i: sl[2].l[3], tag: 'vocab', skill: 'read' });
    sl.slice(3, 5).forEach(({ l }) => items.push(speakItem(l[1], l[2], l[3])));
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
    if (sl[0]) items.push({ ...listenItem(sl[0].l[1], sl[0].l[2]), u: u.id });
    // leesvraag: de tekst gaat mee (src), zodat je hem tijdens de toets kunt openen met 📖 Tekst
    if (u.reading) { const q = U.pick(u.reading.q); items.push({ ...normEx(q, null, null, { noSrs: true, skill: 'read' }), q: '«' + u.reading.t + '» — ' + q.q, skill: 'read', tag: 'vocab', src: { kind: 'reading', reading: u.reading } }); }
    return { title: u.title + ' · Unittoets', items: mix(U.shuffle(items.filter(Boolean))), mode: 'test', pass: 0.8 };
  }
  /* Oudere (hervatte) toetsen bewaarden de leesvraag zonder tekst: zoek de tekst er weer bij via «titel». */
  function attachSrc(items) {
    items.forEach(it => {
      if (!it || it.src || it.skill !== 'read' || typeof it.q !== 'string') return;
      const m = it.q.match(/^«(.+?)» — /); if (!m) return;
      const u = C.all().find(u => u.reading && u.reading.t === m[1]);
      if (u) it.src = { kind: 'reading', reading: u.reading };
    });
    return items;
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

  /* ---------- na een toets: gericht oefenen wat fout ging ----------
     f: { words: [woord], tags: [onderwerp], conj: [[werkwoord, tijd]], listen, read, redo: [fout beantwoorde vragen] }
     De fout beantwoorde vragen komen opnieuw (vers gemaakt), plus extra oefening van hetzelfde soort uit deze unit. */
  function fresh(it) {
    const c = Object.assign({}, it); delete c.retry; delete c.orig; delete c.support;
    if (c.options) c.options = U.shuffle(c.options.slice());
    return c;
  }
  function focusSession(u, f = {}) {
    const first = [], rest = [], seen = new Set();
    const push = it => { if (!it) return; const k = it.conj ? 'c|' + it.conj.verb + '|' + it.conj.tense + '|' + it.conj.person : it.srsId || (it.kind + '|' + (it.text || it.q || it.prompt || it.sentence || it.target || '')); if (seen.has(k)) return; seen.add(k); rest.push(it); };
    const words = (f.words || []).slice(0, 8);
    words.forEach(w => first.push(wordItem(w, 'card', u)));
    words.forEach((w, j) => push({ ...wordItem(w, j % 2 ? 'mc-es' : 'mc-nl', u), srsId: null }));
    words.forEach(w => push(wordItem(w, 'type', u)));
    (f.redo || []).forEach(it => push(fresh(it)));
    (f.tags || []).forEach(tag => {
      let ex = u.ex.map((e, i) => (e.tag || 'vocab') === tag && e.t !== 'match' ? normEx(e, u, i) : null).filter(Boolean);
      if (ex.length < 4) learnedUnits().filter(x => x !== u).forEach(x => x.ex.forEach((e, i) => { if (e.tag === tag && e.t !== 'match') ex.push(normEx(e, x, i)); }));
      U.sample(ex.filter(Boolean), Math.max(3, Math.ceil(8 / (f.tags.length || 1)))).forEach(push);
    });
    (f.conj || []).forEach(([v, t]) => U.sample(S.conj.personsFor(t), 3).forEach(p => push(conjItem(v, t, p))));
    if (f.listen) U.sample(shortLines(u), 3).forEach(({ l }) => push(listenItem(l[1], l[2], l[3])));
    if (f.read && u.reading) u.reading.q.forEach(q => push({ ...normEx(q, null, null, { noSrs: true, skill: 'read' }), q: '«' + u.reading.t + '» — ' + q.q, skill: 'read', tag: 'vocab', src: { kind: 'reading', reading: u.reading } }));
    const cards = first.filter(Boolean);
    return { title: u.title + ' · Gericht oefenen', items: cards.concat(mix(U.shuffle(rest).slice(0, Math.max(6, 22 - cards.length)))), mode: 'learn' };
  }

  /* ---------- niveau-examen ---------- */
  function levelExam(lvl) {
    const us = C.unitsOf(lvl); const items = [];
    us.forEach(u => {
      const exIdx = U.shuffle(u.ex.map((e, i) => i).filter(i => u.ex[i].t !== 'match')).slice(0, Math.max(2, Math.ceil(20 / us.length))); // minder units (B2 in opbouw): meer oefeningen per unit
      exIdx.forEach(i => items.push(normEx(u.ex[i], u, i)));
      const w = U.pick(C.words(u)); items.push(wordItem(w, 'type', u));
    });
    const conj = []; us.forEach(u => (u.verbs || []).forEach(v => (u.tenses || []).forEach(t => conj.push([v, t]))));
    U.sample(conj, 5).forEach(([v, t]) => { const it = conjItem(v, t); if (it) items.push(it); });
    const u2 = U.sample(us, 2);
    u2.forEach(u => { const sl = shortLines(u); if (sl.length) { const l = U.pick(sl).l; items.push({ ...listenItem(l[1], l[2]), u: u.id }); } });
    return { title: 'Niveau-examen ' + lvl, items: mix(U.shuffle(items).slice(0, 36)), mode: 'test', pass: 0.8 };
  }


  /* ---------- moeilijk en makkelijk afwisselen ----------
     Elke vraag krijgt een inschatting: de soort vraag (meerkeuze < luisteren/zin bouwen < typen/vertalen)
     plus hoe het met dat item gaat in de herhaling (vaak fout = zwaarder, al lang bekend = lichter).
     mix() zet de vragen zo dat je begint en eindigt met iets haalbaars en dat de pittige vragen
     gelijkmatig tussen de makkelijkere vallen (meestal hooguit 1 of 2 op rij). Welke items erin zitten verandert
     niet, alleen de volgorde, dus de herhaling (SRS) werkt precies hetzelfde. */
  const HARD = 2.5;
  const BASE = { mc: 1, match: 1.5, order: 2, speak: 2, listen: 2.5, type: 2.5 };
  function difficulty(it) {
    if (!it || BASE[it.kind] == null) return 0; // uitleg, kaart, dialoog: geen vraag
    let d = BASE[it.kind];
    if (it.kind === 'mc' && (it.audio || it.fill)) d += 0.5;
    if (it.translate) d += 0.5;
    if (it.retry) d += 0.5;
    const c = it.srsId && S.Store.state.srs && S.Store.state.srs[it.srsId];
    if (c) {
      if ((c.l || 0) >= 2 || (c.f || 0) > (c.g || 0) + 1) d += 1; // gaat vaak fout
      else if (c.r === 0 && c.l) d += 0.5; // net weer fout gegaan
      if (c.i >= 7) d -= 0.5; // ken je al goed
      if (c.i >= 21) d -= 0.5;
    }
    return d;
  }
  function isHard(it) { return difficulty(it) >= HARD; }
  // keepOrder: de volgorde binnen makkelijk en moeilijk blijft (voor lesstof die van makkelijk naar moeilijk opbouwt)
  function mix(items, opts = {}) {
    const q = items.filter(Boolean);
    const easy = [], hard = [];
    q.forEach(it => (isHard(it) ? hard : easy).push(it));
    if (!hard.length || !easy.length) return q;
    let first, last;
    if (opts.keepOrder) { first = easy.shift(); last = easy.length ? easy.pop() : null; }
    else {
      const takeEasiest = () => { let b = 0; easy.forEach((it, i) => { if (difficulty(it) < difficulty(easy[b])) b = i; }); return easy.splice(b, 1)[0]; };
      first = takeEasiest(); last = easy.length ? takeEasiest() : null;
    }
    // moeilijke vragen gelijkmatig over de gaten tussen de makkelijke verdelen: zo min mogelijk op rij
    const out = [first], nH = hard.length, slots = easy.length + 1;
    for (let k = 0; k < slots; k++) {
      const n = Math.floor((k + 1) * nH / slots) - Math.floor(k * nH / slots);
      out.push(...hard.splice(0, n));
      if (k < easy.length) out.push(easy[k]);
    }
    if (last) out.push(last);
    return out;
  }
  // na een paar fouten op rij: de eerstvolgende makkelijkere vraag naar voren halen (binnen hetzelfde blok
  // vragen, nooit voor een uitleg of woordkaart langs). Geeft true als er iets is verschoven.
  function easeNext(queue, at) {
    const next = queue[at];
    if (!next || !isHard(next)) return false;
    for (let j = at + 1; j < queue.length; j++) {
      const it = queue[j];
      if (BASE[it.kind] == null) return false; // uitleg/kaart/dialoog: blok houdt op
      if (!isHard(it)) { queue.splice(j, 1); queue.splice(at, 0, it); return true; }
    }
    return false;
  }

  /* ---------- herhaling (SRS) ---------- */
  function resolve(id) {
    const [type, a, b] = id.split('|');
    const card = S.Store.state.srs[id];
    if (type === 'w' && a === 'my') {
      const w = S.Words && S.Words.mineWord(b); if (!w) return null;
      const r = card ? card.r : 1;
      return wordItem(w, r <= 1 ? U.pick(['mc-es', 'mc-nl']) : r === 2 ? U.pick(['mc-nl', 'type']) : 'type', S.Words.distractorUnit());
    }
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
    // zinnen die de vorige keer half goed waren: de goede woorden alvast invullen
    const P = S.Store.state.partial || {};
    items.forEach(it => { const p = it.translate && P[it.srsId]; if (p && p.a && S.check.check(p.a, it.answers, { strict: true }).exact) it.keep = { a: p.a, k: p.k }; });
    // bijna alles pittig? Dan een paar woorden die je al goed kent als opsteker ertussen (meerkeuze).
    // Die zijn niet verlopen: goed doet niets met hun schema, fout zet ze gewoon terug in de herhaling.
    if (!ids) items.push(...breathers(items));
    // afwisselen: geen twee vervoegingen achter elkaar als het kan, en moeilijk en makkelijk door elkaar
    return { title: 'Herhaling', items: mix(spread(items)), mode: 'review' };
  }
  function breathers(items, max = 5) {
    const nH = items.filter(isHard).length, nE = items.length - nH;
    const need = Math.min(max, Math.ceil(nH / 2) + 1 - nE); // genoeg makkelijke voor hooguit 2 moeilijke op rij
    if (need <= 0) return [];
    const t = U.dayIndex(), have = new Set(items.map(i => i.srsId));
    const strong = Object.entries(S.Store.state.srs).filter(([id, c]) => id.startsWith('w|') && !id.startsWith('w|my|') && c.i >= 7 && c.d > t && !have.has(id)).map(([id]) => id);
    return U.sample(strong, need).map(id => {
      const [, a, b] = id.split('|'); const u = C.get(a); const w = u && C.word(u, +b);
      return w ? { ...wordItem(w, U.pick(['mc-es', 'mc-nl']), u), bonus: true } : null;
    }).filter(Boolean);
  }
  // hoeveel verlopen items echt te oefenen zijn (items van verwijderde lesstof tellen niet mee)
  function reviewCount() { return S.SRS.due().filter(id => resolve(id)).length; }
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
    return { title: 'Zwakke punten', items: mix(picked), mode: 'learn' };
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
  /** Snelle sprint: eerst woorden die aan de beurt zijn, dan woorden die je vaak fout hebt, dan aanvullen met de rest.
      Ook woorden uit units waar je nog niet aan begon, als ze al in je herhaling staan (bijv. via de sprint met nieuwe woorden). */
  function sprintPick(n = 20) {
    const db = S.Store.state.srs, today = U.dayIndex();
    const learned = new Set((learnedUnits().length ? learnedUnits() : C.all().slice(0, 1)).map(u => u.id));
    const seen = new Set(), due = [], weak = [], rest = [];
    C.all().forEach(u => C.words(u).forEach(w => {
      const c = db[w.id];
      if (!w || seen.has(w.es) || (!c && !learned.has(u.id))) return;
      seen.add(w.es);
      if (c && c.d <= today) due.push([w, u, c]);
      else if (c && c.l > 0 && c.i < 7) weak.push([w, u, c]);
      else rest.push([w, u, c]);
    }));
    due.sort((a, b) => a[2].d - b[2].d || a[2].i - b[2].i);
    weak.sort((a, b) => b[2].l - a[2].l || a[2].i - b[2].i);
    const pick = due.slice(0, n);
    pick.push(...weak.slice(0, n - pick.length));
    pick.push(...U.sample(rest, n - pick.length));
    return pick;
  }
  function sprint(n = 20) {
    // volgorde binnen de sprint door elkaar; wat aan de beurt is staat wel vooraan in de selectie
    const items = U.shuffle(sprintPick(n)).map(([w, u]) => wordItem(w, U.pick(['mc-es', 'mc-nl', 'listen-mc', 'type']), u));
    return { title: 'Woordensprint', items: mix(items), mode: 'learn', timer: 120 };
  }
  function placementBand(lvl) {
    const qs = S.placement.filter(q => q.lv === lvl);
    return { title: 'Plaatsingstoets · ' + lvl, items: qs.map(q => ({ kind: 'mc', q: q.q.includes('___') ? null : q.q, sentence: q.q.includes('___') ? q.q : null, nl: q.nl, options: U.shuffle(q.o), answer: q.o[0], tag: null, fill: q.q.includes('___') })), mode: 'exam' };
  }

  /* Herhaalbare niveautest: per niveau een blok met grammatica uit de vragenbank, woordbetekenis en een luistervraag.
     Elke keer andere vragen; de antwoorden tellen niet mee voor je herhaling of statistieken. */
  const TEST_PASS = 0.7;
  function placementQ(q) {
    const fill = q.q.includes('___');
    return { kind: 'mc', q: fill ? null : q.q, sentence: fill ? q.q : null, nl: fill ? q.nl : undefined, options: U.shuffle(q.o), answer: q.o[0], fill, part: 'grammar' };
  }
  function levelTestBand(lvl) {
    const bank = S.placement.filter(q => q.lv === lvl);
    const words = C.unitsOf(lvl).flatMap(u => C.words(u).map(w => ({ w, u })))
      .filter(({ w }) => w.es.length <= 28 && !/[/(]/.test(w.es));
    const items = [];
    if (!words.length) {
      U.sample(bank, 8).forEach(q => items.push(placementQ(q)));
    } else {
      U.sample(bank, 6).forEach(q => items.push(placementQ(q)));
      const picked = U.sample(words, 4);
      picked.forEach(({ w, u }, i) => {
        const it = wordItem(w, i < 3 ? 'mc-es' : 'listen-mc', u);
        if (!it || it.options.length < 3) return;
        delete it.srsId; delete it.tag; delete it.skill;
        it.part = i < 3 ? 'vocab' : 'listen';
        items.push(it);
      });
    }
    return { title: 'Niveautest · ' + lvl, items: U.shuffle(items), mode: 'exam', level: lvl };
  }
  /* Uitslag van de blokken → niveau. bands: { A1: { ok, n }, ... } in volgorde gemaakt. */
  function levelTestResult(bands, order = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
    let level = null, next = null;
    for (const l of order) {
      const b = bands[l]; if (!b) break;
      if (b.n && b.ok / b.n >= TEST_PASS) level = l; else { next = l; break; }
    }
    const nb = next && bands[next];
    return { level, next, nextFrac: nb && nb.n ? nb.ok / nb.n : 0 };
  }

  S.Gen = { focusSession, half, attachSrc, difficulty, isHard, mix, easeNext, STEPS, stepSession, reviewSession, reviewCount, levelExam, conjTraining, weakTraining, listenTraining, speakTraining, sprint, sprintPick, placementBand, levelTestBand, levelTestResult, TEST_PASS, resolve, learnedUnits, wordItem, normEx, conjItem, parts, ART, forms, wordSynonyms, checkType };
})(window.SPT);
