/* Tikvertaling en zichtbare correcties in gesprekken met Profe Lupe.
   1. Tik op een woord in Lupe's antwoord (🎭 rollenspel) → de betekenis IN DEZE ZIN, in je eigen taal.
      Lupe zet onder elk antwoord een onzichtbaar blok <gloss>[["woord of vaste uitdrukking","betekenis"],…]</gloss>.
      Ontbreekt een woord, dan zoeken we het in de lesstof, en anders vragen we het los aan de AI (met cache).
   2. Je eigen zin met de verbeteringen erin: goed = groen, fout = rood doorgestreept, met de verbetering ernaast.
      Lupe zet de verbeterde versie van je laatste bericht in <fix>…</fix>; de app maakt er zelf een woordvergelijking van.
   Rekenwerk (parse, align, diff) werkt zonder DOM en is getest in tests/run.js. Taalonafhankelijk: S.course bepaalt de talen. */
(function (S) {
  'use strict';
  const { U, C } = S;
  const bare = s => S.check.bare(String(s || ''));
  const lang = () => {
    const t = S.course.target, ui = S.course.ui;
    return { TL: t === 'en' ? 'English' : t === 'nl' ? 'Dutch' : 'Spanish', NL: ui === 'es' ? 'Latin American Spanish' : 'Dutch' };
  };

  /* ---------- prompt ---------- */
  function promptRule(mode) {
    const { TL, NL } = lang();
    const fix = `CORRECTED VERSION (required, invisible): after your visible text (before the <log> line), add one line <fix>…</fix> with the learner's LAST message fully corrected in ${TL} (keep their words and word order wherever they were correct; only change what is wrong or clearly unnatural; add accents and punctuation). If the learner wrote ${NL}, only asked a question, or it was the start instruction: <fix></fix>.`;
    if (mode !== 'roleplay') return fix;
    return fix + `
WORD GLOSS (required, invisible): right after the <fix> line, add one line <gloss>[["…","…"],…]</gloss> covering EVERY word of your in-character reply (the part before "---"), in order. Each item is [exact words as they appear in your reply, meaning in ${NL}].
- Give the meaning in THIS sentence and context, in natural ${NL} (not a literal dictionary translation): e.g. "¿Qué onda?" → "Hoe is het?", "te queda" in "te queda bien" → "staat je".
- Keep fixed expressions, idioms and multi-word verb forms together as one item (e.g. "por favor", "me gustaría", "hay que", "se me olvidó", "está bien"); otherwise one word per item.
- Keep meanings short (max ~6 words). For a verb form you may add the infinitive in brackets, e.g. "quieres" → "wil je (querer)".
- Valid JSON, no comments. Never mention this list in your visible text.`;
  }

  /* ---------- blokken uit de tekst halen ---------- */
  const TAGS = ['log', 'gloss', 'fix'];
  // ook half binnengekomen blokken (tijdens het streamen) verbergen
  function strip(text) {
    let t = String(text || '');
    TAGS.forEach(g => { t = t.replace(new RegExp('\\s*<' + g + '>[\\s\\S]*?(</' + g + '>|$)', 'g'), ''); });
    const tail = t.match(/\s*<([a-z]*)>?$/);
    if (tail && TAGS.some(g => g.startsWith(tail[1]))) t = t.slice(0, tail.index);
    return t.trimEnd();
  }
  function block(text, tag) {
    const m = String(text || '').match(new RegExp('<' + tag + '>([\\s\\S]*?)</' + tag + '>'));
    return m ? m[1].trim() : null;
  }
  function parseGloss(text) {
    const b = block(text, 'gloss'); if (!b) return null;
    let a; try { a = JSON.parse(b); } catch (e) { return null; }
    if (!Array.isArray(a)) return null;
    return a.map(x => Array.isArray(x) ? { t: String(x[0] || '').trim(), m: String(x[1] || '').trim() } : (x && typeof x === 'object' ? { t: String(x.t || x.w || '').trim(), m: String(x.m || x.nl || '').trim() } : null))
      .filter(x => x && x.t && x.m).slice(0, 120);
  }
  function parseFix(text) { const b = block(text, 'fix'); return b ? b.replace(/^["«]|["»]$/g, '').trim() : ''; }

  /* ---------- woorden ---------- */
  const WORD = /[\p{L}\p{M}\p{N}]+(?:['’\-][\p{L}\p{M}\p{N}]+)*/gu;
  const words = s => [...String(s || '').matchAll(WORD)].map(m => m[0]);

  /** Gloss-items koppelen aan de woorden van het antwoord (in volgorde, met wat speling).
      Geeft per woordpositie het item terug: { t, m, g } (g = groepnummer, zodat een uitdrukking samen oplicht). */
  function align(replyWords, gloss) {
    const keys = replyWords.map(bare), out = new Array(keys.length).fill(null);
    let pos = 0;
    (gloss || []).forEach((e, gi) => {
      const ek = words(e.t).map(bare); if (!ek.length) return;
      const at = from => ek.every((k, j) => keys[from + j] === k && !out[from + j]);
      let i = -1;
      for (let s = pos; s <= keys.length - ek.length; s++) if (at(s)) { i = s; break; }
      if (i < 0) for (let s = 0; s < pos && s <= keys.length - ek.length; s++) if (at(s)) { i = s; break; }
      if (i < 0) return;
      for (let j = 0; j < ek.length; j++) out[i + j] = { t: e.t, m: e.m, g: gi };
      if (i >= pos) pos = i + ek.length;
    });
    return out;
  }

  /* ---------- je eigen zin vergelijken met de verbeterde versie ---------- */
  // stukje tekst = woord met leestekens ervoor/erna; vergelijken op het woord zonder hoofdletters en accenten
  function tokens(s) {
    return String(s || '').split(/\s+/).filter(Boolean).map(ch => {
      const m = ch.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u);
      const core = m[2] || ch;
      return { s: ch, pre: m[2] ? m[1] : '', core, post: m[2] ? m[3] : '', k: bare(core) };
    });
  }
  /** Woordvergelijking (LCS). ops: {t:'eq', u, f, acc} | {t:'del', u} | {t:'ins', f}. acc = alleen accent anders. */
  function diff(user, fixed) {
    const a = tokens(user), b = tokens(fixed);
    if (!a.length || !b.length || a.length * b.length > 250000) return null;
    const n = a.length, m = b.length, L = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = a[i].k === b[j].k ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const ops = []; let i = 0, j = 0;
    while (i < n && j < m) {
      if (a[i].k === b[j].k) { ops.push({ t: 'eq', u: a[i], f: b[j], acc: a[i].core.toLowerCase() !== b[j].core.toLowerCase() }); i++; j++; }
      else if (L[i + 1][j] >= L[i][j + 1]) ops.push({ t: 'del', u: a[i++] });
      else ops.push({ t: 'ins', f: b[j++] });
    }
    while (i < n) ops.push({ t: 'del', u: a[i++] });
    while (j < m) ops.push({ t: 'ins', f: b[j++] });
    // binnen een blok wijzigingen eerst alles wat weg moet, dan wat ervoor in de plaats komt
    const out = []; let dels = [], ins = [];
    const flush = () => { out.push(...dels, ...ins); dels = []; ins = []; };
    ops.forEach(o => { if (o.t === 'eq') { flush(); out.push(o); } else (o.t === 'del' ? dels : ins).push(o); });
    flush();
    return out;
  }
  const summary = ops => ops ? { ok: ops.filter(o => o.t === 'eq').length, bad: ops.filter(o => o.t !== 'eq').length, acc: ops.filter(o => o.acc).length } : null;

  /* ---------- tekenen ---------- */
  function diffView(user, fixed, opt = {}) {
    const ops = diff(user, fixed); if (!ops) return null;
    const h = U.h, sm = summary(ops);
    const line = h('div', { class: 'df-line', lang: S.course.target });
    ops.forEach((o, i) => {
      const prev = ops[i - 1];
      if (i) line.append(' ');
      if (o.t === 'eq') line.append(h('span', { class: 'df-ok' + (o.acc ? ' df-acc' : ''), title: o.acc ? 'Bijna: let op het accent' : 'Goed' }, o.f.pre, o.f.core, o.f.post));
      else if (o.t === 'del') line.append(h('del', { class: 'df-bad', title: 'Fout' }, o.u.s));
      else line.append(h('ins', { class: 'df-new' + (prev && prev.t === 'del' ? ' repl' : ''), title: prev && prev.t === 'del' ? 'Zo moet het' : 'Dit ontbrak' }, o.f.s));
    });
    const legend = h('div', { class: 'df-legend small muted' },
      h('span', { class: 'df-ok' }, 'goed'), ' · ', h('del', { class: 'df-bad' }, 'fout'), ' ', h('ins', { class: 'df-new' }, 'zo moet het'),
      sm.acc ? [' · ', h('span', { class: 'df-ok df-acc' }, 'accent')] : null);
    const head = sm.bad ? (opt.title || 'Jouw zin, verbeterd') : (sm.acc ? '✅ Goed! Alleen een accent' : '✅ Helemaal goed!');
    return h('div', { class: 'df-box' }, h('div', { class: 'df-head small' }, h('b', null, head), sm.bad ? h('span', { class: 'muted' }, ' · ' + U.plural(sm.ok, 'woord', 'woorden') + ' goed') : null), line, sm.bad || sm.acc ? legend : null);
  }

  /** Lupe's antwoord aantikbaar maken: elk woord wordt een knopje met de betekenis in deze zin. */
  function decorate(el, gloss, ctx = {}) {
    const all = [];
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const t = n.nodeValue; if (!/[\p{L}\p{N}]/u.test(t)) return;
          const frag = document.createDocumentFragment(); let last = 0;
          for (const m of t.matchAll(WORD)) {
            if (m.index > last) frag.append(t.slice(last, m.index));
            const sp = document.createElement('span'); sp.className = 'tw'; sp.textContent = m[0];
            frag.append(sp); all.push(sp); last = m.index + m[0].length;
          }
          if (last < t.length) frag.append(t.slice(last));
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !/^(BUTTON|CODE)$/.test(n.tagName)) walk(n);
      });
    };
    walk(el);
    const sentence = el.textContent.replace(/\s+/g, ' ').trim();
    const map = align(all.map(s => s.textContent), gloss);
    all.forEach((sp, i) => {
      sp.tabIndex = 0; sp.setAttribute('role', 'button');
      const e = map[i];
      if (e) sp.dataset.g = e.g;
      const open = ev => { ev.stopPropagation(); ev.preventDefault(); show(sp, e, all.filter((x, j) => e && map[j] && map[j].g === e.g), sentence, ctx); };
      sp.addEventListener('click', open);
      sp.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') open(ev); });
    });
    el.classList.add('tw-on');
    return all.length;
  }

  /* ---------- losse woorden opzoeken als Lupe ze niet gaf ---------- */
  const cache = new Map();
  function local(word) {
    const b = bare(word); if (!b) return null;
    const art = /^(el|la|los|las|un|una|the|a|an|de|het|een)\s+/i;
    for (const u of C.all()) for (const v of u.vocab || []) {
      if (bare(String(v[0]).replace(art, '')) === b) return { t: word, m: String(v[1]), src: 'les' };
    }
    return null;
  }
  async function ai(word, sentence) {
    const k = bare(word) + '|' + sentence;
    if (cache.has(k)) return cache.get(k);
    const { TL, NL } = lang();
    const p = (async () => {
      const txt = await S.AI.ask({ system: `You are a concise ${TL}–${NL} dictionary inside a learning app. Reply ONLY with JSON.`,
        prompt: `Sentence: "${sentence}"\nWord: "${word}"\nWhat does this word mean in THIS sentence? Reply {"m":"short meaning in natural ${NL} for this context (max 6 words)","p":"the fixed expression it belongs to in this sentence, or empty","pm":"meaning of that expression in ${NL}, or empty"}`, maxTokens: 200 });
      const a = txt.indexOf('{'), z = txt.lastIndexOf('}');
      const j = a >= 0 ? JSON.parse(txt.slice(a, z + 1)) : null;
      if (!j || !j.m) throw new Error('Geen vertaling gevonden.');
      return { t: j.p || word, m: j.p && j.pm ? j.pm : j.m, w: j.p ? j.m : '', src: 'ai' };
    })();
    cache.set(k, p);
    p.catch(() => cache.delete(k));
    return p;
  }

  /* ---------- het kaartje ---------- */
  let pop = null, lit = [], scroller = null;
  function close() {
    if (pop) { pop.remove(); pop = null; }
    if (scroller) { scroller.removeEventListener('scroll', close); scroller = null; }
    lit.forEach(x => x.classList.remove('lit')); lit = [];
    document.removeEventListener('pointerdown', outside, true);
    window.removeEventListener('resize', close);
  }
  function outside(e) { if (pop && !pop.contains(e.target) && !(e.target.classList && e.target.classList.contains('tw'))) close(); }
  function place(anchor) {
    if (!pop) return;
    const r = anchor.getBoundingClientRect(), vw = document.documentElement.clientWidth, w = pop.offsetWidth, ph = pop.offsetHeight;
    let left = Math.max(10, Math.min(vw - w - 10, r.left + r.width / 2 - w / 2));
    let top = r.bottom + 8;
    pop.classList.toggle('up', top + ph > window.innerHeight - 10 && r.top - ph - 8 > 10);
    if (pop.classList.contains('up')) top = r.top - ph - 8;
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
    pop.style.setProperty('--ax', Math.max(14, Math.min(w - 14, r.left + r.width / 2 - left)) + 'px');
  }
  function show(sp, e, group, sentence, ctx) {
    const again = pop && sp.classList.contains('lit');
    close(); if (again) return;
    const h = U.h, word = sp.textContent;
    lit = group.length ? group : [sp]; lit.forEach(x => x.classList.add('lit'));
    const body = h('div', { class: 'gp-body' });
    const phrase = e ? e.t : word;
    const say = S.Speech.canSpeak() ? h('button', { class: 'icon-btn gp-say', type: 'button', title: 'Uitspraak', 'aria-label': 'Uitspraak', onclick: ev => { ev.stopPropagation(); S.Tutor.say(phrase); } }, '🔊') : null;
    pop = h('div', { class: 'gloss-pop', role: 'dialog', 'aria-label': 'Vertaling van ' + word },
      h('div', { class: 'gp-top' }, h('b', { lang: S.course.target }, phrase), say), body);
    const fill = (r, note) => {
      body.innerHTML = '';
      body.append(h('div', { class: 'gp-m' }, r.m));
      if (r.w && bare(r.t) !== bare(word)) body.append(h('div', { class: 'gp-w small muted' }, h('span', { lang: S.course.target }, word), ' = ' + r.w));
      const add = S.Words && r.m ? h('button', { class: 'btn link small gp-add', type: 'button', onclick: ev => {
        ev.stopPropagation(); const res = S.Words.addMine(r.t, r.m.replace(/\s*\([^)]*\)\s*$/, ''));
        if (res) { S.Store.save(); add.textContent = res.dup ? '✓ Staat al in Mijn woorden' : '✓ In Mijn woorden en je herhaling'; add.disabled = true; }
      } }, '＋ Mijn woorden') : null;
      body.append(h('div', { class: 'gp-foot' }, h('small', { class: 'muted' }, note), add));
      if (r.t !== phrase) pop.querySelector('.gp-top b').textContent = r.t;
      place(sp);
    };
    if (e) fill(e, 'in deze zin');
    else {
      const l = local(word);
      if (l) fill(l, 'uit je lessen');
      if (S.AI.enabled()) {
        if (!l) { body.append(h('div', { class: 'gp-m muted' }, h('span', { class: 'typing' }, '…'), ' Lupe zoekt het op')); }
        const me = pop;
        ai(word, sentence).then(r => { if (pop === me) fill(r, 'in deze zin'); }).catch(err => { if (pop === me && !l) { body.innerHTML = ''; body.append(h('div', { class: 'gp-m warn small' }, '⚠️ ' + err.message)); place(sp); } });
      } else if (!l) body.append(h('div', { class: 'gp-m muted small' }, 'Geen vertaling gevonden.'));
    }
    document.body.append(pop); place(sp);
    setTimeout(() => document.addEventListener('pointerdown', outside, true), 0);
    window.addEventListener('resize', close);
    if (ctx.scroller) { scroller = ctx.scroller; scroller.addEventListener('scroll', close, { passive: true }); }
  }

  S.Gloss = { promptRule, strip, parseGloss, parseFix, words, align, tokens, diff, summary, diffView, decorate, close, local };
})(window.SPT);
