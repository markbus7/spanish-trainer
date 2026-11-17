/* Fouten uit gesprekken met Profe Lupe (rollenspel en ✍️ Correctie).
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
- Never mention this log in your visible text.`;
  }

  /* ---------- blok uit de tekst halen ---------- */
  // ook een half binnengekomen blok (tijdens het streamen) verbergen
  function strip(text) {
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
  function db() { const s = st(); if (!s.lupe || typeof s.lupe !== 'object') s.lupe = { log: [], n: 0 }; if (!Array.isArray(s.lupe.log)) s.lupe.log = []; return s.lupe; }

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
      const e = Object.assign({ t: t0 + i, m: mode, u: String(userText || '').slice(0, 240) }, x);
      if (extra.sc) e.sc = String(extra.sc).slice(0, 60);
      if (x.tag !== 'other') S.Store.mark(x.tag, false);
      if (x.tag === 'vocab') { const id = toReview(x.es, x.nl); if (id) e.srs = id; }
      return e;
    });
    L.log = L.log.concat(out).slice(-MAX);
    return out;
  }

  /* ---------- samenvoegen bij synchroniseren (idempotent) ---------- */
  function merge(a, b) {
    const A = (a && a.log) || [], B = (b && b.log) || [];
    const seen = new Set(), log = [];
    A.concat(B).filter(e => e && e.t).sort((x, y) => x.t - y.t).forEach(e => { const k = e.t + '|' + e.w; if (!seen.has(k)) { seen.add(k); log.push(JSON.parse(JSON.stringify(e))); } });
    const adv = [a && a.advice, b && b.advice].filter(Boolean).sort((x, y) => (y.t || 0) - (x.t || 0))[0];
    const out = { log: log.slice(-MAX), n: Math.max((a && a.n) || 0, (b && b.n) || 0) };
    if (adv) out.advice = JSON.parse(JSON.stringify(adv));
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
    return { days, total: log.length, msgs: L.n || 0, topics, words, recent: log.slice(-12).reverse(), prev, advice: L.advice || null };
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
    lines.push(`Lesniveau: ${p.level || '?'}${p.cur ? ' (' + p.cur.title + ')' : ''} · laatste ${r.days} dagen · ${r.total} fouten in gesprekken${r.prev ? ' (periode ervoor: ' + r.prev + ')' : ''}`);
    if (!r.total) lines.push('', 'Nog geen fouten uit gesprekken genoteerd.');
    if (r.topics.length) {
      lines.push('', 'Waar ik de mist in ga (grammatica):');
      r.topics.forEach(t => {
        lines.push(`- ${t.label}: ${t.n}×${t.units.length ? ' — les: ' + t.units[0].level + ' ' + t.units[0].title : ''}`);
        t.ex.forEach(e => lines.push(`    «${e.w}» → «${e.c}»${e.why ? ' (' + e.why + ')' : ''}`));
      });
    }
    if (r.words.length) {
      lines.push('', 'Woorden die misgingen (staan in mijn herhaling):');
      r.words.slice(0, 15).forEach(e => lines.push(`- ${e.es || e.c}${e.nl ? ' = ' + e.nl : ''}${e.w ? ' (ik schreef «' + e.w + '»)' : ''}`));
    }
    const weak = Object.entries(s.tags).filter(([k, v]) => k !== 'vocab' && v.ok + v.no >= 3 && v.ok / (v.ok + v.no) < 0.8)
      .sort((a, b) => a[1].ok / (a[1].ok + a[1].no) - b[1].ok / (b[1].ok + b[1].no)).slice(0, 6);
    if (weak.length) {
      lines.push('', 'Zwakke punten uit oefeningen en gesprekken samen:');
      weak.forEach(([k, v]) => lines.push(`- ${C.tag(k)}: ${Math.round(v.ok / (v.ok + v.no) * 100)}% goed (${v.ok + v.no} antwoorden)`));
    }
    if (r.advice && r.advice.text && opt.advice !== false) lines.push('', 'Advies van Lupe (' + fmtD(r.advice.t) + '):', r.advice.text.replace(/\*\*/g, ''));
    return lines.join('\n');
  }

  /* ---------- advies van Lupe (met AI-sleutel) ---------- */
  async function advise() {
    const r = report(30);
    const other = S.course.target !== 'es', T = S.course.ai.target;
    const sys = other
      ? `You are Profe Lupe, a warm ${T} teacher in a learning app for a native speaker of Latin American Spanish. When you write Spanish, use Latin American norms (ustedes, never vosotros; celular, carro, computadora).
Write in Latin American Spanish, max ~120 words, no headings, no tables. Based on the learner's mistake report: name the 2–3 most important things to improve, explain each in one short sentence with one ${T} example in **bold**, and end with one concrete suggestion of what to practise this week (refer to the lessons named in the report when given).`
      : `You are Profe Lupe, a warm Latin American Spanish teacher in a learning app for a Dutch speaker. Always Latin American norms (ustedes, never vosotros).
Write in Dutch, max ~120 words, no headings, no tables. Based on the learner's mistake report: name the 2–3 most important things to improve, explain each in one short sentence with one Latin American Spanish example in **bold**, and end with one concrete suggestion of what to practise this week (refer to the lessons named in the report when given).`;
    const text = await S.AI.ask({ system: sys, prompt: asText(r, { advice: false }), maxTokens: 700 });
    db().advice = { t: Date.now(), text: text.trim() };
    return db().advice;
  }

  S.Mistakes = { promptRule, strip, parse, record, merge, report, focus, practice, asText, advise, findWord, unitsFor, MAX };
})(window.SPT);
