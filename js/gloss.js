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
    return { TL: (S.LANGS[t] || S.LANGS.es).en, NL: ui === 'es' ? 'Latin American Spanish' : 'Dutch' };
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
      for (let j = 0; j < ek.length; j++) out[i + j] = { t: e.t, m: e.m, g: gi, les: e.les };
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
    const textBefore = sp => { let n = sp.previousSibling, t = ''; while (n && !(n.classList && n.classList.contains('tw')) && t.length < 6) { t = n.textContent + t; n = n.previousSibling; } return n ? t : '.'; };
    const sentence = el.textContent.replace(/\s+/g, ' ').trim();
    const map = align(all.map(s => s.textContent), gloss);
    all.forEach((sp, i) => {
      sp.tabIndex = 0; sp.setAttribute('role', 'button');
      const e = map[i];
      if (e) sp.dataset.g = e.g;
      // hoofdletter midden in een zin = waarschijnlijk een naam (Mark, Bogotá)
      if (/^\p{Lu}/u.test(sp.textContent) && i && !/[.?!¿¡:—–-]\s*$/.test(textBefore(sp))) sp.dataset.name = '1';
      const open = ev => { if (ctx.skip && ctx.skip()) return; ev.stopPropagation(); ev.preventDefault(); show(sp, e, all.filter((x, j) => e && map[j] && map[j].g === e.g), sentence, ctx); };
      sp.addEventListener('click', open);
      sp.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') open(ev); });
    });
    el.classList.add('tw-on');
    return all.length;
  }

  /* ---------- losse woorden opzoeken (lesstof, vervoegingen, kleine woordjes) ---------- */
  const cache = new Map();
  const ART = /^(el|la|los|las|un|una|the|a|an|de|het|een)\s+/i;
  let IDX = null; // { one: Map(kaal woord → {t,m}), multi: [{k:[kale woorden], t, m}], verb: Map(vorm → {inf, tense, p}) }
  /** Varianten van een woordenlijst-item: «el chico / la chica» → chico, chica; «bueno/a» → bueno, buena. */
  function variants(es) {
    const out = [];
    String(es).replace(/\([^)]*\)/g, ' ').split(/\s+\/\s+|\s*;\s*|,\s+/).forEach(part => {
      part = part.replace(/[¿?¡!.…]/g, '').trim().replace(ART, '').trim();
      if (!part) return;
      const m = part.match(/^(\S+?)(o|e|)\/(a|as|os)$/); // bueno/a, profesor/a
      if (m) { out.push(m[1] + m[2]); out.push(m[1] + m[3]); return; }
      out.push(part.replace(/\/\S*$/, ''));
    });
    return out.filter(Boolean);
  }
  function index() {
    if (IDX && IDX.n === C.all().length) return IDX;
    // twee sleutels per woord: precies (kleine letters, mét accenten: está ≠ esta) en kaal (zonder accenten, als vangnet)
    const one = new Map(), exact = new Map(), multi = [], verb = new Map(), verbX = new Map();
    const low = w => S.lower(w);
    const put1 = (w, x) => { if (!exact.has(low(w))) exact.set(low(w), x); if (!one.has(bare(w))) one.set(bare(w), x); };
    const put = (es, nl) => variants(es).forEach(v => {
      const ws = words(v); if (!ws.length) return;
      if (ws.length === 1) put1(ws[0], { t: v, m: nl });
      else multi.push({ k: ws.map(bare), t: v, m: nl });
    });
    C.all().forEach(u => (u.vocab || []).forEach(v => put(v[0], String(v[1]))));
    // daarna de woordjes bij leesteksten en de koppelparen uit de oefeningen
    C.all().forEach(u => {
      (u.reading && u.reading.gl || []).forEach(v => put(v[0], String(v[1])));
      (u.ex || []).forEach(x => { if (x && x.t === 'match' && !x.nog && Array.isArray(x.p)) x.p.forEach(v => Array.isArray(v) && put(v[0], String(v[1]))); });
    });
    if (S.Words && S.Store && S.Store.state) try { S.Words.mine().forEach(w => put(w.es, w.nl)); } catch (e) { /* geen eigen woorden */ }
    if (S.course.target === 'es' && S.course.ui === 'nl') {
      Object.keys(SMALL).forEach(k => put1(k, { t: k, m: SMALL[k] }));
      if (S.conj) Object.keys(S.conj.VERBS).forEach(k => { const nl = S.conj.VERBS[k].nl; if (nl) put1(k, { t: k, m: nl.replace(/,\s*/g, ' / ') }); });
    }
    // vervoegde vormen van alle werkwoorden uit de lessen (alleen Spaans): «está» → estar
    if (S.course.target === 'es' && S.conj) {
      const infs = new Set(Object.keys(S.conj.VERBS));
      exact.forEach((v, k) => { if (/^[a-zñ]+(ar|er|ir|ír)(se)?$/.test(k)) infs.add(k); });
      // volgorde = voorkeur bij gelijke vormen: «habla» = hij praat (niet: praat! tegen jou), «siga» = gaat u door (bevel aan usted)
      const TENSES = ['pres', 'imper', 'pret', 'imp', 'fut', 'cond', 'subj', 'impsubj'];
      infs.forEach(inf => {
        if (!/^[a-zñáéíóú]*(ar|er|ir|ír)(se)?$/i.test(inf)) return;
        const add = (f, tense, p) => {
          const w = low(String(f || '').split(' ').pop()); if (!w || w === inf) return;
          if (!verbX.has(w)) verbX.set(w, { inf, tense, p });
          if (!verb.has(bare(w))) verb.set(bare(w), { inf, tense, p });
        };
        TENSES.forEach(tn => { let t; try { t = S.conj.table(inf, tn); } catch (e) { t = null; } (t || []).forEach((f, p) => f && add(f, tn, p)); });
        try { add(S.conj.gerundio(inf), 'ger', -1); add(S.conj.participio(inf), 'part', -1); } catch (e) { /* onregelmatig zonder tabel */ }
      });
    }
    multi.sort((a, b) => b.k.length - a.k.length);
    return (IDX = { one, exact, multi, verb, verbX, n: C.all().length });
  }
  const meanOf = inf => {
    const ix = index(), x = ix.exact.get(inf) || ix.exact.get(inf.replace(/se$/, ''));
    const v = S.conj && S.conj.info(inf);
    return x ? x.m : v && v.nl ? v.nl.replace(/,\s*/g, ' / ') : '';
  };
  const VNL = { ger: 'bezig met (-ndo)', part: 'voltooid deelwoord' };
  /** Wat betekent dit woord? Eerst de lesstof, dan een vervoegde vorm, dan meervoud/vrouwelijk terug naar de basis. Zonder DOM. */
  function lookup(word) {
    const b = bare(word); if (!b) return null;
    const ix = index(), lw = S.lower(word);
    const hit = ix.exact.get(lw);
    if (hit) return { t: hit.t, m: hit.m, src: 'les' };
    // meervoud eerst (casas = huizen, niet: je trouwt), dan vervoegde vormen, dan de rest
    const pl = [lw.replace(/es$/, ''), lw.replace(/s$/, ''), lw.replace(/ces$/, 'z')].find(k => k !== lw && k.length > 1 && ix.exact.get(k));
    if (pl) { const x = ix.exact.get(pl); return { t: x.t, m: x.m, w: 'meervoud van ' + x.t, src: 'les' }; }
    const v = ix.verbX.get(lw) || (!ix.one.get(b) && ix.verb.get(b));
    if (!v && ix.one.get(b)) { const x = ix.one.get(b); return { t: x.t, m: x.m, src: 'les' }; }
    if (v) {
      const m = meanOf(v.inf);
      const ten = S.conj.TENSES[v.tense], who = v.p >= 0 ? S.conj.personNl(v.tense, v.p) : '';
      const how = (who ? who + ', ' : '') + (ten ? ten.nl : VNL[v.tense] || '');
      return { t: v.inf, m: m || v.inf, w: 'vorm van ' + v.inf + (how ? ' (' + how + ')' : ''), src: 'vorm' };
    }
    // meervoud en vrouwelijk: casas → casa, amables → amable, cerrada → cerrado
    const tries = [b.replace(/es$/, ''), b.replace(/s$/, ''), b.replace(/as?$/, 'o'), b.replace(/os$/, 'o'), b.replace(/ces$/, 'z')];
    for (const k of tries) if (k !== b && k.length > 1 && ix.one.get(k)) { const x = ix.one.get(k); return { t: x.t, m: x.m, w: 'van ' + x.t, src: 'les' }; }
    return null;
  }
  /** Vaste uitdrukkingen uit de lessen die in deze zin staan, als gloss-lijst (in volgorde): «mucho gusto» licht samen op. */
  function phrases(sentence) {
    const ws = words(sentence).map(bare), used = new Array(ws.length).fill(false), found = [];
    index().multi.forEach(p => {
      for (let i = 0; i + p.k.length <= ws.length; i++) {
        if (p.k.every((k, j) => ws[i + j] === k && !used[i + j])) { p.k.forEach((_, j) => { used[i + j] = true; }); found.push({ i, t: words(sentence).slice(i, i + p.k.length).join(' '), m: p.m }); }
      }
    });
    return found.sort((a, b) => a.i - b.i).map(({ t, m }) => ({ t, m, les: true }));
  }
  /* Kleine woordjes die als los woord niet in de woordenlijsten staan (alleen Spaans → Nederlands). */
  const SMALL = {
    a: 'naar / aan / om', al: 'naar de / aan de', de: 'van / uit', del: 'van de', en: 'in / op', con: 'met', sin: 'zonder', por: 'door / via / voor', para: 'voor / om te',
    y: 'en', e: 'en', o: 'of', u: 'of', pero: 'maar', que: 'dat / die / wat', si: 'als / of', 'sí': 'ja', no: 'nee / niet', ni: 'noch / zelfs niet',
    el: 'de / het', la: 'de / het', los: 'de', las: 'de', lo: 'het / hem', un: 'een', una: 'een', unos: 'een paar', unas: 'een paar', le: 'hem / haar / u (aan)', les: 'hun / jullie (aan)',
    me: 'mij / me', te: 'jou / je', se: 'zich / zichzelf', nos: 'ons', mi: 'mijn', mis: 'mijn', tu: 'jouw', tus: 'jouw', su: 'zijn / haar / uw / hun', sus: 'zijn / haar / uw / hun', nuestro: 'ons', nuestra: 'onze',
    yo: 'ik', 'tú': 'jij', 'él': 'hij', ella: 'zij', usted: 'u', nosotros: 'wij', ellos: 'zij', ellas: 'zij', ustedes: 'jullie / u',
    muy: 'heel / erg', 'más': 'meer', menos: 'minder', 'también': 'ook', tampoco: 'ook niet', ya: 'al / nu', todavía: 'nog', 'aquí': 'hier', 'allí': 'daar', 'allá': 'daar', 'ahí': 'daar',
    'qué': 'wat / welk', 'cómo': 'hoe', 'dónde': 'waar', 'cuándo': 'wanneer', 'cuánto': 'hoeveel', 'quién': 'wie', 'cuál': 'welke', porque: 'omdat',
    este: 'deze / dit', esta: 'deze / dit', esto: 'dit', ese: 'die / dat', esa: 'die / dat', eso: 'dat', estos: 'deze', estas: 'deze', esos: 'die', esas: 'die',
    casa: 'huis', gusto: 'smaak / plezier', 'año': 'jaar', 'día': 'dag', vez: 'keer', veces: 'keer / keren', hora: 'uur / tijd', tiempo: 'tijd / weer', mundo: 'wereld', lugar: 'plek', vida: 'leven', cosa: 'ding', gente: 'mensen', persona: 'persoon',
    'país': 'land', ciudad: 'stad', agua: 'water', mar: 'zee', trabajo: 'werk', clase: 'les / klas', animal: 'dier', idea: 'idee', problema: 'probleem', fin: 'einde', lado: 'kant', 'razón': 'reden / gelijk', calor: 'warmte / hitte',
    'teléfono': 'telefoon', turista: 'toerist', 'señor': 'meneer', 'señora': 'mevrouw', 'señorita': 'juffrouw',
    todo: 'alles / helemaal', toda: 'heel', todos: 'iedereen / alle', todas: 'alle', solo: 'alleen / maar', 'así': 'zo', tan: 'zo', tanto: 'zoveel', cada: 'elk(e)', casi: 'bijna', mismo: 'zelf / dezelfde', misma: 'zelf / dezelfde',
    otro: 'ander(e)', otra: 'ander(e) / nog een', otros: 'andere', otras: 'andere', algo: 'iets', nada: 'niets', alguien: 'iemand', nadie: 'niemand', siempre: 'altijd', nunca: 'nooit', ahora: 'nu', hoy: 'vandaag',
    bien: 'goed', mal: 'slecht', buen: 'goed(e)', mejor: 'beter / best', peor: 'slechter', mucho: 'veel', mucha: 'veel', muchos: 'veel', muchas: 'veel', poco: 'weinig / een beetje', perfecto: 'perfect', exacto: 'precies', normal: 'normaal', terrible: 'verschrikkelijk', nacional: 'nationaal',
    desde: 'sinds / vanaf', hasta: 'tot', sobre: 'over / op', entre: 'tussen', hacia: 'naar', 'según': 'volgens', durante: 'tijdens', mientras: 'terwijl', cuando: 'wanneer / als', donde: 'waar', como: 'zoals / als / hoe', quien: 'die / wie', aunque: 'hoewel / ook al', sino: 'maar (wel)',
    cerca: 'dichtbij', lejos: 'ver weg', media: 'half', medio: 'half', primero: 'eerst', 'último': 'laatste', pues: 'nou / dus', ti: 'jou', aquel: 'die (daar)', aquella: 'die (daar)',
    ja: 'ha', jaja: 'haha', ay: 'ach / au', uy: 'oei', mmm: 'hmm', oye: 'hé / zeg', mira: 'kijk', dale: 'oké / doe maar', ok: 'oké',
    uno: 'één', dos: 'twee', tres: 'drie', cuatro: 'vier', cinco: 'vijf', seis: 'zes', siete: 'zeven', ocho: 'acht', nueve: 'negen', diez: 'tien', veinte: 'twintig', cien: 'honderd', ciento: 'honderd', mil: 'duizend',
    'acá': 'hier', tal: 'zo’n / zulk', primer: 'eerste', malo: 'slecht', dentro: 'binnen', importante: 'belangrijk', bastante: 'behoorlijk / genoeg', arriba: 'boven', abajo: 'beneden', miedo: 'angst', pena: 'jammer / schaamte',
    foto: 'foto', 'número': 'nummer', minuto: 'minuut', algunos: 'sommige', algunas: 'sommige', apartamento: 'appartement', 'región': 'regio',
    hay: 'er is / er zijn', luego: 'daarna / dan', entonces: 'dan / dus', bueno: 'goed / nou', claro: 'natuurlijk', 'después': 'daarna / na', antes: 'eerder / voor'
  };
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
    if (scroller) { scroller.removeEventListener('scroll', close, { capture: true }); scroller = null; }
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
      // 🗺️ regiowoord: vlaggetjes + waar ze het zo zeggen
      const rw = S.Regio && (S.Regio.lookup(r.t || '') || S.Regio.lookup(word));
      if (rw) body.append(h('div', { class: 'gp-rg small' }, S.Regio.chip(rw), S.Regio.info(rw).std ? h('span', { class: 'muted' }, (S.course.ui === 'es' ? ' · estándar: ' : ' · standaard: '), h('b', { lang: S.course.target }, S.Regio.info(rw).std)) : null));
      if (r.w && bare(r.t) !== bare(word)) body.append(h('div', { class: 'gp-w small muted' }, h('span', { lang: S.course.target }, word), ' = ' + r.w));
      const add = S.Words && r.m ? h('button', { class: 'btn link small gp-add', type: 'button', onclick: ev => {
        ev.stopPropagation(); const res = S.Words.addMine(r.t, r.m.replace(/\s*\([^)]*\)\s*$/, ''));
        if (res) { S.Store.save(); add.textContent = res.dup ? '✓ Staat al in Mijn woorden' : '✓ In Mijn woorden en je herhaling'; add.disabled = true; }
      } }, '＋ Mijn woorden') : null;
      body.append(h('div', { class: 'gp-foot' }, h('small', { class: 'muted' }, note), add));
      if (ctx.sentence) body.append(sentenceRow());
      if (r.t !== phrase) pop.querySelector('.gp-top b').textContent = r.t;
      place(sp);
    };
    // de hele zin vertaald: onderaan het kaartje (ctx.sentence = vertaling), tik = ook in de ballon open
    const sentenceRow = () => h('button', { class: 'gp-sent', type: 'button', onclick: ev => { ev.stopPropagation(); close(); if (ctx.onSentence) ctx.onSentence(); } },
      h('span', { class: 'gp-sent-l small muted' }, 'Hele zin'), h('span', { class: 'gp-sent-t' }, ctx.sentence));
    const NOTE = { les: 'uit je lessen', vorm: 'vervoeging' };
    if (e && e.les) { const l = lookup(word); fill(Object.assign({}, e, { w: l && l.src === 'les' && !l.w && bare(l.t) !== bare(e.t) ? l.m : '' }), NOTE.les); }
    else if (e) fill(e, 'in deze zin');
    else {
      const l = lookup(word);
      if (l) fill(l, NOTE[l.src] || NOTE.les);
      if (S.AI.enabled() && !(l && ctx.lessonFirst)) {
        if (!l) { body.append(h('div', { class: 'gp-m muted' }, h('span', { class: 'typing' }, '…'), ' Lupe zoekt het op')); if (ctx.sentence) body.append(sentenceRow()); }
        const me = pop;
        ai(word, sentence).then(r => { if (pop === me) fill(r, 'in deze zin'); }).catch(err => { if (pop === me && !l) { body.innerHTML = ''; body.append(h('div', { class: 'gp-m warn small' }, '⚠️ ' + err.message)); if (ctx.sentence) body.append(sentenceRow()); place(sp); } });
      } else if (!l) { body.append(h('div', { class: 'gp-m muted small' }, sp.dataset.name ? 'Een naam (van een persoon of plaats).' : 'Dit woord staat niet in je lessen.')); if (ctx.sentence) body.append(sentenceRow()); }
    }
    document.body.append(pop); place(sp);
    setTimeout(() => document.addEventListener('pointerdown', outside, true), 0);
    window.addEventListener('resize', close);
    // bij scrollen (ook in de les) gaat het kaartje dicht, anders zweeft het los van het woord
    scroller = ctx.scroller || document; scroller.addEventListener('scroll', close, { passive: true, capture: true });
  }

  const local = lookup;
  S.Gloss = { promptRule, strip, parseGloss, parseFix, words, align, tokens, diff, summary, diffView, decorate, close, local, lookup, phrases };
})(window.SPT);
