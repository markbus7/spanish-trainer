/* Fouten uit gesprekken met Profe Lupe (rollenspel en ✍️ Correctie) en uit gewone oefeningen (exercise()).
   Lupe zet onder elk antwoord een onzichtbaar blok <log>[…]</log> met de fouten uit je laatste bericht,
   elk met een onderwerp uit C.TAGS. De app:
     - bewaart ze in state.lupe.log (synchroniseert mee),
     - telt ze mee in je zwakke punten (Store.mark → state.tags),
     - zet fout gebruikte woorden in je herhaling,
     - maakt er een rapport van (Perfil, Hoy) dat je kunt kopiëren of delen.
   Alleen rekenwerk en tekst; het tekenen gebeurt in app.js. Getest in tests/run.js. */
(function (S) {
  'use strict';
  const { U, C } = S;
  const st = () => S.Store.state;
  const MAX = 300;          // zoveel fouten bewaren we
  const DAY = 864e5;

  /* ---------- prompt: wat Lupe onder elk antwoord zet ---------- */
  function promptRule() {
    const tags = Object.entries(C.TAGS).filter(([k]) => k !== 'conj').map(([k, v]) => k + ' (' + v + ')').join(', ');
    const es = S.course.target !== 'es', TLn = es ? (S.course.target === 'en' ? 'English' : 'Dutch') : 'Spanish', NLn = S.course.ui === 'es' ? 'Latin American Spanish' : 'Dutch';
    return `LOGGING (required, invisible to the learner): at the very end of EVERY reply, after everything else, add one line with the learner's mistakes from their LAST message, in this exact format:
<log>[{"w":"wrong fragment","c":"corrected fragment","why":"very short explanation in ${NLn}","tag":"topic key","es":"","nl":""}]</log>
- One object per real mistake (max 5), the same mistakes you corrected above. Ignore missing accents, capitals and punctuation.
- "tag" is ONE key from this list: ${tags}, or "vocab" for a wrong, invented or misspelled word, or "other".
- For "vocab" mistakes, also fill "es" with the correct ${TLn} word in its dictionary form (${es ? 'base form' : 'infinitive / singular, with article for nouns, e.g. "el carro"'}) and "nl" with its ${NLn} meaning. Leave them empty otherwise.
- If the learner wrote ${NLn}, asked a question, or made no mistakes: <log>[]</log>
- Never put real personal names or private details in "w" or "c": replace a person's name with "X".
- Never mention this log in your visible text.`;
  }

  /* ---------- blok uit de tekst halen ---------- */
  // ook een half binnengekomen blok (tijdens het streamen) verbergen
  // (ook de blokken <gloss> en <fix> uit js/gloss.js)
  function strip(text) {
    if (S.Gloss) return S.Gloss.strip(text);
    return String(text || '').replace(/\s*<log>[\s\S]*?(<\/log>|$)/g, '').replace(/\s*<(l(o(g>?)?)?)?$/, '').trimEnd();
  }
  function parse(text) {
    const m = String(text || '').match(/<log>([\s\S]*?)<\/log>/);
    if (!m) return null;
    let a; try { a = JSON.parse(m[1].trim() || '[]'); } catch (e) { return null; }
    if (!Array.isArray(a)) return null;
    const s = (x, n) => String(x == null ? '' : x).trim().slice(0, n);
    return a.filter(x => x && typeof x === 'object' && (x.w || x.c)).slice(0, 5).map(x => {
      let tag = s(x.tag, 30);
      if (!C.TAGS[tag] || tag === 'conj') tag = tag === 'vocab' ? 'vocab' : 'other';
      return { w: s(x.w, 120), c: s(x.c, 120), why: s(x.why, 200), tag, es: tag === 'vocab' ? s(x.es, 60) : '', nl: tag === 'vocab' ? s(x.nl, 60) : '' };
    });
  }

  /* ---------- opslaan ---------- */
  function db() { const s = st(); if (!s.lupe || typeof s.lupe !== 'object') s.lupe = { log: [], n: 0 }; if (!Array.isArray(s.lupe.log)) s.lupe.log = []; scrubAll(s.lupe); return s.lupe; }

  /** Een woord uit de lessen zoeken (zonder lidwoord, zonder accenten). */
  function findWord(es) {
    const b = S.check.bare(String(es).replace(/^(el|la|los|las|un|una)\s+/i, ''));
    if (!b) return null;
    for (const u of C.all()) for (let i = 0; i < u.vocab.length; i++) {
      if (S.check.bare(u.vocab[i][0].replace(/^(el|la|los|las|un|una)\s+/i, '')) === b) return C.word(u, i);
    }
    return null;
  }
  /** Fout gebruikt woord: in de herhaling zetten (of terughalen als het er al in zat). */
  function toReview(es, nl) {
    if (!es) return null;
    const w = findWord(es);
    if (w) { if (S.SRS.has(w.id)) S.SRS.grade(w.id, false); else S.SRS.add(w.id, 0); return w.id; }
    if (nl && S.Words) { const r = S.Words.addMine(es, nl); if (r) { if (r.dup) S.SRS.grade(r.id, false); return r.id; } }
    return null;
  }

  /** Antwoord van Lupe verwerken. mode: 'roleplay' | 'write'. Geeft de nieuwe fouten terug (of null als er geen blok was). */
  function record(text, mode, userText, extra = {}) {
    const list = parse(text);
    if (!list) return null;
    const L = db(), t0 = Date.now();
    L.n = (L.n || 0) + 1;
    const out = list.map((x, i) => {
      // je eigen bericht zelf bewaren we niet (privacy): alleen het foute stukje, de verbetering en de uitleg
      const e = Object.assign({ t: t0 + i, m: mode }, x);
      if (extra.sc) e.sc = String(extra.sc).slice(0, 60);
      if (x.tag !== 'other') S.Store.mark(x.tag, false);
      if (x.tag === 'vocab') { const id = toReview(x.es, x.nl); if (id) e.srs = id; }
      return e;
    });
    L.log = L.log.concat(out).slice(-MAX);
    return out;
  }

  /* ---------- fouten in gewone oefeningen (typen, meerkeuze, dictee, woordtegels …) ---------- */
  // Bewaard in state.lupe.ex (synchroniseert mee, per profiel), zodat het rapport en Lupe's advies ook
  // kijken naar wat je in de lessen fout doet, niet alleen in gesprekken. Alleen lesstof en je antwoord daarop.
  const MAXEX = 250;
  const KIND = { mc: 'meerkeuze', type: 'typen', listen: 'dictee', order: 'woordtegels', speak: 'spreken', match: 'paren' };
  function exlog() { const L = db(); if (!Array.isArray(L.ex)) L.ex = []; return L.ex; }
  function exKind(it) { return it.translate ? 'vertalen' : it.fill ? 'invullen' : it.sentence && it.kind === 'type' ? 'invullen' : KIND[it.kind] || it.kind || ''; }
  function exQ(it) {
    if (it.kind === 'listen') return it.nl ? '🎧 ' + it.nl : '🎧 dictee';
    if (it.kind === 'order') return it.nl || '';
    return it.sentence || it.prompt || it.q || it.nl || '';
  }
  function exercise(it, r) {
    if (!it || !r || r.ok || r.self || r.silent || it.support || it.kind === 'match') return null;
    const s = (x, n) => String(x == null ? '' : x).trim().slice(0, n);
    const id = it.srsId || (it.orig && it.orig.srsId) || '';
    const e = { t: Date.now(), id: s(id, 80), tag: it.tag || 'vocab', k: exKind(it), q: s(exQ(it), 160), u: s(r.dontKnow ? '' : r.user, 120), a: s(r.expected, 160) };
    if (r.dontKnow) e.dk = 1;
    const list = exlog();
    if (list.length && list[list.length - 1].t >= e.t) e.t = list[list.length - 1].t + 1;
    list.push(e);
    db().ex = list.slice(-MAXEX);
    return e;
  }
  /** Unit-id uit een oefening- of woord-id (x|a1-04|5, w|a1-01|17). */
  function unitOf(id) { const m = /^[xw]\|([^|]+)\|/.exec(id || ''); return m && C.get(m[1]) ? m[1] : ''; }
  /** Oefeningen en woorden die vaak fout gaan (uit de herhaling: totaal goed g / fout f per kaart). */
  function hardItems(n = 12) {
    const srs = st().srs || {};
    return Object.entries(srs).filter(([id, c]) => /^[xw]\|/.test(id) && (c.f || 0) >= 2 && (c.f || 0) >= (c.g || 0) * 0.5)
      .sort((a, b) => (b[1].f || 0) - (a[1].f || 0) || ((a[1].g || 0) - (b[1].g || 0)))
      .slice(0, n).map(([id, c]) => {
        const unit = unitOf(id), u = unit ? C.get(unit) : null, i = +id.split('|')[2];
        let q = '', a = '', tag = 'vocab';
        if (u && id[0] === 'w' && u.vocab[i]) { q = u.vocab[i][1]; a = u.vocab[i][0]; }
        else if (u && u.ex[i]) { const e = u.ex[i]; tag = e.tag || 'vocab'; q = e.s || e.q || e.nl || ''; a = e.t === 'tr' ? e.a[0] : e.t === 'order' ? e.s : e.o ? e.o[0] : (e.a || [])[0] || ''; if (e.t === 'tr') q = e.nl; }
        return { id, unit, q, a, tag, f: c.f || 0, g: c.g || 0 };
      });
  }

  /* ---------- herbeoordeling: Lupe keurde een fout gerekend antwoord toch goed ---------- */
  // Bewaard in state.lupe.fix, zodat het in het rapport staat en in de volgende update van de app kan
  // (ontbrekend goed antwoord, of een modelantwoord dat niet klopt). Daarna rekent de app dit antwoord ook goed.
  const MAXFIX = 100;
  function fixes() { const L = db(); if (!Array.isArray(L.fix)) L.fix = []; return L.fix; }
  function regrade(it, user, j) {
    if (!it || !j || !j.correct || !user) return null;
    const s = (x, n) => String(x == null ? '' : x).trim().slice(0, n);
    const id = it.srsId || (it.orig && it.orig.srsId) || '';
    const unit = /^x\|/.test(id) ? id.split('|')[1] : '';
    const list = fixes(), k = S.check.bare(user);
    const e = { t: Date.now(), q: s(it.prompt, 200), u: s(user, 200), a: (it.answers || []).slice(0, 4).map(x => s(x, 200)),
      fb: s(j.feedback, 300), b: s(j.better, 200), why: s(j.app, 300), id: s(id, 80), unit };
    const old = list.findIndex(x => x.q === e.q && S.check.bare(x.u) === k);
    if (old >= 0) list.splice(old, 1);
    list.push(e);
    db().fix = list.slice(-MAXFIX);
    return e;
  }
  /** Keurde Lupe dit antwoord op deze vraag eerder goed? */
  function accepted(q, user) {
    const L = st().lupe; if (!L || !Array.isArray(L.fix) || !q || !user) return null;
    const k = S.check.bare(user);
    return L.fix.find(x => x.q === q && S.check.bare(x.u) === k) || null;
  }

  /* Oude fouten (vóór v1.51.1) hadden ook je hele bericht (u). Dat halen we weg, lokaal en in de sync. */
  function scrub(e) { if (e && typeof e === 'object') delete e.u; return e; }
  function scrubAll(L) { (L && Array.isArray(L.log) ? L.log : []).forEach(scrub); return L; }

  /* ---------- samenvoegen bij synchroniseren (idempotent) ---------- */
  function merge(a, b) {
    const A = (a && a.log) || [], B = (b && b.log) || [];
    const seen = new Set(), log = [];
    A.concat(B).filter(e => e && e.t).sort((x, y) => x.t - y.t).forEach(e => { const k = e.t + '|' + e.w; if (!seen.has(k)) { seen.add(k); log.push(scrub(JSON.parse(JSON.stringify(e)))); } });
    const adv = [a && a.advice, b && b.advice].filter(Boolean).sort((x, y) => (y.t || 0) - (x.t || 0))[0];
    const out = { log: log.slice(-MAX), n: Math.max((a && a.n) || 0, (b && b.n) || 0) };
    if (adv) out.advice = JSON.parse(JSON.stringify(adv));
    const upd = [a && a.update, b && b.update].filter(Boolean).sort((x, y) => (y.t || 0) - (x.t || 0))[0];
    if (upd) out.update = JSON.parse(JSON.stringify(upd));
    const X = ((a && a.ex) || []).concat((b && b.ex) || []);
    if (X.length) {
      const seenX = new Set(), ex = [];
      X.filter(e => e && e.t).sort((x, y) => x.t - y.t).forEach(e => { const k = e.t + '|' + e.id; if (!seenX.has(k)) { seenX.add(k); ex.push(JSON.parse(JSON.stringify(e))); } });
      out.ex = ex.slice(-MAXEX);
    }
    const F = ((a && a.fix) || []).concat((b && b.fix) || []);
    if (F.length) {
      const byK = new Map();
      F.filter(e => e && e.t && e.q).sort((x, y) => x.t - y.t).forEach(e => { const k = e.q + '|' + S.check.bare(e.u); byK.delete(k); byK.set(k, JSON.parse(JSON.stringify(e))); });
      out.fix = [...byK.values()].slice(-MAXFIX);
    }
    return out;
  }

  /* ---------- rapport ---------- */
  /** De unit waar een onderwerp uitgelegd wordt (eerste unit met oefeningen erover). */
  function unitsFor(tag) {
    if (!tag || tag === 'vocab' || tag === 'other') return [];
    // de unit met de meeste oefeningen over dit onderwerp (daar wordt het uitgelegd); bij gelijkspel het laagste niveau
    const order = C.LEVELS.map(l => l.id);
    const us = C.all().map((u, i) => ({ u, i, n: u.ex.filter(e => e.tag === tag).length })).filter(x => x.n)
      .sort((a, b) => b.n - a.n || order.indexOf(a.u.level) - order.indexOf(b.u.level) || a.i - b.i);
    return us.slice(0, 1).map(x => x.u);
  }
  function report(days = 30, now = Date.now()) {
    const L = db(), from = now - days * DAY;
    const log = L.log.filter(e => e.t >= from);
    const by = {};
    log.forEach(e => { const g = by[e.tag] || (by[e.tag] = { tag: e.tag, label: label(e.tag), n: 0, ex: [], last: 0 }); g.n++; g.ex.push(e); g.last = Math.max(g.last, e.t); });
    const topics = Object.values(by).filter(g => g.tag !== 'vocab').sort((a, b) => b.n - a.n || b.last - a.last)
      .map(g => Object.assign(g, { ex: g.ex.slice(-3).reverse(), units: unitsFor(g.tag) }));
    const words = [], seenW = new Set();
    log.filter(e => e.tag === 'vocab').reverse().forEach(e => { const k = S.check.bare(e.es || e.c); if (!seenW.has(k)) { seenW.add(k); words.push(e); } });
    // vergelijken met de periode ervoor: gaat het beter?
    const prev = L.log.filter(e => e.t >= from - days * DAY && e.t < from).length;
    const fix = (L.fix || []).filter(e => e.t >= from).slice().reverse();
    // fouten in gewone oefeningen, per onderwerp
    const exl = (L.ex || []).filter(e => e.t >= from);
    const byX = {};
    exl.forEach(e => { const g = byX[e.tag] || (byX[e.tag] = { tag: e.tag, label: e.tag === 'vocab' ? 'woordenschat' : label(e.tag), n: 0, ex: [], last: 0, ids: {} }); g.n++; g.ex.push(e); g.last = Math.max(g.last, e.t); if (e.id) g.ids[e.id] = (g.ids[e.id] || 0) + 1; });
    const exTopics = Object.values(byX).sort((a, b) => b.n - a.n || b.last - a.last)
      .map(g => Object.assign(g, { ex: g.ex.slice(-3).reverse(), units: g.tag === 'vocab' ? [] : unitsFor(g.tag) }));
    return { days, total: log.length, msgs: L.n || 0, topics, words, recent: log.slice(-12).reverse(), prev, advice: L.advice || null, fix, update: L.update || null,
      exTotal: exl.length, exTopics, hard: hardItems() };
  }
  function label(tag) { return tag === 'other' ? 'overig' : C.tag(tag); }

  /** Onderwerpen om nu te oefenen: vaak fout in gesprekken van de laatste dagen. */
  function focus(days = 7, min = 2) {
    return report(days).topics.filter(t => t.tag !== 'other' && t.n >= min).slice(0, 3);
  }

  /** Oefensessie voor de onderwerpen uit je gesprekken, plus de woorden die misgingen. */
  function practice(tags, wordIds = []) {
    const G = S.Gen, learned = new Set(G.learnedUnits().map(u => u.id));
    const items = [];
    C.all().forEach(u => {
      if (!learned.has(u.id) && !tags.some(t => unitsFor(t).some(x => x.id === u.id))) return;
      u.ex.forEach((e, i) => { if (tags.includes(e.tag)) items.push(G.normEx(e, u, i)); });
    });
    let picked = U.sample(items, 12);
    const ids = wordIds.filter(id => st().srs[id]);
    if (ids.length) { try { picked = picked.concat(G.reviewSession(Math.min(8, ids.length), ids).items); } catch (e) { /* */ } }
    return { title: 'Fouten uit je gesprekken', items: G.mix(U.shuffle(picked)), mode: 'learn' };
  }

  /* ---------- als tekst, om te kopiëren of te delen ---------- */
  function fmtD(t) { return new Date(t).toLocaleDateString(S.LOC, { day: 'numeric', month: 'short' }); }
  function asText(r = report(30), opt = {}) {
    const s = st(), p = S.AI ? S.AI.learnerProfile() : { level: '' };
    const lines = [];
    lines.push(`Rapport van Profe Lupe — ${new Date().toLocaleDateString(S.LOC, { day: 'numeric', month: 'long', year: 'numeric' })}`);
    lines.push(`Lesniveau: ${p.level || '?'}${p.cur ? ' (' + p.cur.title + ')' : ''} · laatste ${r.days} dagen · ${r.total} fouten in gesprekken${r.prev ? ' (periode ervoor: ' + r.prev + ')' : ''} · ${r.exTotal || 0} fouten in oefeningen`);
    lines.push(`App ${((typeof self !== 'undefined' && self.SPT_VERSION) || {}).number || '?'} · cursus ${S.course.id || '?'}`);
    const les = u => u ? ' — les: ' + u.level + ' ' + u.title + ' (' + u.id + ')' : '';
    if (!r.total) lines.push('', 'Nog geen fouten uit gesprekken genoteerd.');
    if (r.topics.length) {
      lines.push('', 'Waar ik de mist in ga in gesprekken (grammatica):');
      r.topics.forEach(t => {
        lines.push(`- ${t.label} [${t.tag}]: ${t.n}×${les(t.units[0])}`);
        t.ex.forEach(e => lines.push(`    «${e.w}» → «${e.c}»${e.why ? ' (' + e.why + ')' : ''}`));
      });
    }
    if (r.words.length) {
      lines.push('', 'Woorden die misgingen (staan in mijn herhaling):');
      r.words.slice(0, 15).forEach(e => lines.push(`- ${e.es || e.c}${e.nl ? ' = ' + e.nl : ''}${e.w ? ' (ik schreef «' + e.w + '»)' : ''}`));
    }
    if (r.exTopics && r.exTopics.length) {
      lines.push('', 'Fouten in gewone oefeningen (typen, meerkeuze, dictee, woordtegels):');
      r.exTopics.slice(0, 8).forEach(t => {
        lines.push(`- ${t.label} [${t.tag}]: ${t.n}×${les(t.units[0])}`);
        t.ex.forEach(e => lines.push(`    ${e.k ? '(' + e.k + ') ' : ''}${e.q ? '«' + e.q + '» ' : ''}ik: ${e.dk ? 'weet het niet' : '«' + e.u + '»'} → goed: «${e.a}»${e.id ? ' [' + e.id + ']' : ''}`));
      });
    }
    if (r.hard && r.hard.length) {
      lines.push('', 'Oefeningen en woorden die vaak fout gaan (alle tijd, uit de herhaling):');
      r.hard.forEach(x => lines.push(`- [${x.id}] «${x.q}» → «${x.a}»: ${x.f}× fout, ${x.g}× goed${x.tag !== 'vocab' ? ' · ' + C.tag(x.tag) + ' [' + x.tag + ']' : ''}`));
    }
    const weak = Object.entries(s.tags).filter(([k, v]) => k !== 'vocab' && v.ok + v.no >= 3 && v.ok / (v.ok + v.no) < 0.8)
      .sort((a, b) => a[1].ok / (a[1].ok + a[1].no) - b[1].ok / (b[1].ok + b[1].no)).slice(0, 6);
    if (weak.length) {
      lines.push('', 'Zwakke punten uit oefeningen en gesprekken samen:');
      weak.forEach(([k, v]) => lines.push(`- ${C.tag(k)} [${k}]: ${Math.round(v.ok / (v.ok + v.no) * 100)}% goed (${v.ok + v.no} antwoorden)${les(unitsFor(k)[0])}`));
    }
    if (r.advice && r.advice.text && opt.advice !== false) lines.push('', 'Advies van Lupe (' + fmtD(r.advice.t) + '):', r.advice.text.replace(/\*\*/g, ''));
    if (opt.update !== false) { const u = updateText(r, opt); if (u) lines.push('', u); }
    return lines.join('\n');
  }
  /** Het deel voor de volgende update van de app: herbeoordelingen + voorstellen van Lupe. */
  function updateText(r = report(30), opt = {}) {
    const lines = [];
    if (r.fix && r.fix.length) {
      lines.push('Voor de volgende update — antwoorden die fout gerekend werden maar volgens Lupe goed zijn:');
      r.fix.slice(0, 30).forEach(e => {
        const u = e.unit ? C.get(e.unit) : null;
        lines.push(`- ${e.q ? '«' + e.q + '»' : '(vraag)'}${u ? ' [' + u.level + ' ' + u.title + (e.id ? ', ' + e.id : '') + ']' : e.id ? ' [' + e.id + ']' : ''}`);
        lines.push(`    mijn antwoord: «${e.u}»${e.a && e.a.length ? ' · in de app: «' + e.a.join('» / «') + '»' : ''}`);
        if (e.why) lines.push(`    Lupe: ${e.why}`);
        else if (e.fb) lines.push(`    Lupe: ${e.fb}`);
      });
    }
    if (r.update && r.update.text && opt.proposal !== false) {
      if (lines.length) lines.push('');
      lines.push('Voorstellen van Lupe voor de volgende update (' + fmtD(r.update.t) + '):', r.update.text.replace(/\*\*/g, ''));
    }
    return lines.join('\n');
  }

  /* ---------- Lupe stelt voor wat er in de volgende update moet komen (met AI-sleutel) ---------- */
  async function proposeUpdate() {
    const r = report(90);
    const ES = S.course.target === 'es';
    const sys = `You are Profe Lupe, the ${ES ? 'Latin American Spanish' : S.course.ai.target} teacher inside a language-learning web app${S.course.ui === 'nl' ? ' for a Dutch speaker' : ''}. The app's developer asks you what should go into the NEXT UPDATE, so the course fits this learner (and every learner like them) better. The developer edits the lesson files directly, so every proposal must point to the exact place and contain ready-to-use content.
The report below contains: mistakes from conversations with you, mistakes from regular exercises (typing, multiple choice, dictation, word tiles), exercises that often go wrong (with ids), weak topics with % correct, and answers that were marked wrong but that you approved. Ids: "x|<unit>|<n>" = exercise n of a unit, "w|<unit>|<n>" = word n of a unit's word list; [tag] = grammar topic key; (a1-04) = unit id.

Write in Dutch. Give 3–7 proposals, most important first. No intro, no outro, no headings. Use EXACTLY this format for each proposal (a line starting with "- ", then indented lines starting with two spaces):
- **<short title>** (<one of: antwoord toevoegen · modelantwoord fout · oefeningen erbij · uitleg erbij · woorden erbij · functie>)
  Waar: <unit id + title, exercise or word id, tag key — exactly as in the report; "nieuw" if it does not exist yet>
  Waarom: <the evidence from the report: numbers (x× fout, % goed bij n antwoorden) and 1–2 literal wrong answers «…» → «…»>
  Wat: <exactly what to change or build, in one or two sentences>
  Voorbeelden: <for answers: the exact extra accepted answer(s); for exercises: 3–5 ready-to-use items as «${ES ? 'Spanish' : S.course.ai.target} sentence» = «Dutch translation», with ___ for a gap if it is a fill-in item; otherwise leave this line out>

Rules: only propose what the report supports, and say so in "Waarom"; if the report is thin, give fewer proposals. Prefer fixing the learner's most frequent mistakes. Don't repeat something that already exists in the course unless it should be explained or practised differently. ${ES ? 'Always Latin American Spanish norms (ustedes, never vosotros; regional vocabulary like carro, celular, computadora).' : 'Teach ' + S.course.ai.target + '.'}`;
    const text = await S.AI.ask({ system: sys, prompt: asText(r, { advice: true, proposal: false }), maxTokens: 1800 });
    db().update = { t: Date.now(), text: text.trim() };
    return db().update;
  }

  /* ---------- advies van Lupe (met AI-sleutel) ---------- */
  async function advise() {
    const r = report(30);
    const other = S.course.target !== 'es', T = S.course.ai.target;
    const sys = other && S.course.ui === 'nl'
      ? `You are Profe Lupe, a warm ${T} teacher in a learning app for a native Dutch speaker.
Write in Dutch, max ~120 words, no headings, no tables. Based on the learner's mistake report (mistakes in conversations AND in regular exercises): name the 2–3 most important things to improve (watch for typical Dutch-speaker mistakes, false friends and unnatural collocations), explain each in one short sentence with one ${T} example in **bold**, and end with one concrete suggestion of what to practise this week (refer to the lessons named in the report when given).`
      : other
      ? `You are Profe Lupe, a warm ${T} teacher in a learning app for a native speaker of Latin American Spanish. When you write Spanish, use Latin American norms (ustedes, never vosotros; celular, carro, computadora).
Write in Latin American Spanish, max ~120 words, no headings, no tables. Based on the learner's mistake report (mistakes in conversations AND in regular exercises): name the 2–3 most important things to improve, explain each in one short sentence with one ${T} example in **bold**, and end with one concrete suggestion of what to practise this week (refer to the lessons named in the report when given).`
      : `You are Profe Lupe, a warm Latin American Spanish teacher in a learning app for a Dutch speaker. Always Latin American norms (ustedes, never vosotros).
Write in Dutch, max ~120 words, no headings, no tables. Based on the learner's mistake report (mistakes in conversations AND in regular exercises): name the 2–3 most important things to improve, explain each in one short sentence with one Latin American Spanish example in **bold**, and end with one concrete suggestion of what to practise this week (refer to the lessons named in the report when given).`;
    const text = await S.AI.ask({ system: sys, prompt: asText(r, { advice: false }), maxTokens: 700 });
    db().advice = { t: Date.now(), text: text.trim() };
    return db().advice;
  }

  S.Mistakes = { exercise, hardItems, scrubAll, promptRule, strip, parse, record, merge, report, focus, practice, asText, updateText, advise, proposeUpdate, regrade, accepted, findWord, unitsFor, MAX };
})(window.SPT);
