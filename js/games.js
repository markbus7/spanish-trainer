/* Woordspellen: woordzoeker, kruiswoord, letterhusselaar, vulkaan (raad het woord) en memory.
   De woorden komen uit de units; elk geraden of gemist woord telt mee in de herhaling (SRS) en de statistieken.
   Bovenaan staan pure functies (zonder DOM), zodat tests/run.js de puzzelmakers kan controleren. */
(function (S) {
  'use strict';
  const { U, C } = S;

  /* ================= woorden geschikt maken voor spellen ================= */
  const ART = /^(el|la|los|las|un|una|unos|unas)\s+/i;
  const ACC = { 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Ü': 'U' };
  /** Hoofdletters zonder accenten, maar Ñ blijft Ñ (zoals in Spaanse puzzels). */
  const plain = s => String(s).normalize('NFC').toUpperCase().replace(/[ÁÉÍÓÚÜ]/g, c => ACC[c]);
  /** [es, nl] → spelwoord. `key` is het kale woord (zonder lidwoord), `es` de volledige vorm om voor te lezen. */
  function gameWord(w) {
    const first = String(w.es).split(/\s*\/\s*/)[0].replace(/…|\.\.\./g, '').trim();
    const key = first.replace(/^[¿¡]+|[?!.,]+$/g, '').replace(ART, '').trim().toLowerCase();
    if (!key) return null;
    // "el hermano / la hermana" = "de broer / de zus": dan alleen de eerste betekenis tonen
    const esN = String(w.es).split('/').length, nlP = String(w.nl).split(/\s*\/\s*/);
    const nl = esN > 1 && nlP.length === esN ? nlP[0] : w.nl;
    return { id: w.id, unit: w.unit, es: w.es, say: first, nl, key, plain: plain(key).replace(/\s+/g, ' '), letters: plain(key).replace(/\s+/g, '') };
  }
  const ONE = /^[a-záéíóúüñ]+$/i, PHRASE = /^[a-záéíóúüñ]+( [a-záéíóúüñ]+)?$/i;
  const FIT = {
    grid: (g, max = 10) => ONE.test(g.key) && g.key.length >= 3 && g.key.length <= max,
    phrase: g => PHRASE.test(g.key) && g.letters.length >= 3 && g.letters.length <= 13,
    pair: g => g.nl.length <= 34 && g.es.length <= 30
  };

  /* ================= puzzelmakers ================= */
  const FILL = 'AAAAAAEEEEEEOOOOOIIIIUUSSSSRRRRNNNNLLLLDDDTTTCCCMMPPBGVHFQYJZÑ';
  /** Woordzoeker: woorden horizontaal, verticaal of schuin (ook achterstevoren vanaf B1). */
  function wordSearch(words, size, opts = {}) {
    const rnd = opts.rnd || Math.random;
    const dirs = [[0, 1], [1, 0], [1, 1], [-1, 1]].concat(opts.reverse ? [[0, -1], [-1, 0], [-1, -1], [1, -1]] : []);
    const grid = Array.from({ length: size }, () => new Array(size).fill(''));
    const placed = [];
    const sorted = words.slice().sort((a, b) => b.letters.length - a.letters.length);
    for (const w of sorted) {
      const L = w.letters; if (L.length > size) continue;
      let ok = false;
      for (let t = 0; t < 300 && !ok; t++) {
        const [dr, dc] = dirs[Math.floor(rnd() * dirs.length)];
        const r = Math.floor(rnd() * size), c = Math.floor(rnd() * size);
        const er = r + dr * (L.length - 1), ec = c + dc * (L.length - 1);
        if (er < 0 || er >= size || ec < 0 || ec >= size) continue;
        let fits = true;
        for (let i = 0; i < L.length; i++) { const x = grid[r + dr * i][c + dc * i]; if (x && x !== L[i]) { fits = false; break; } }
        if (!fits) continue;
        const cells = [];
        for (let i = 0; i < L.length; i++) { grid[r + dr * i][c + dc * i] = L[i]; cells.push([r + dr * i, c + dc * i]); }
        placed.push({ w, cells }); ok = true;
      }
    }
    for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) if (!grid[r][c]) grid[r][c] = FILL[Math.floor(rnd() * FILL.length)];
    return { grid, placed, size };
  }

  /** Kruiswoord: woorden kruisen elkaar; geen losse lettercombinaties die geen woord zijn. */
  function crossword(words, opts = {}) {
    const rnd = opts.rnd || Math.random, maxW = opts.maxW || 12, maxH = opts.maxH || 12, want = opts.want || 8;
    let best = null;
    for (let attempt = 0; attempt < 24; attempt++) {
      const pool = U.shuffle(words).sort((a, b) => b.letters.length - a.letters.length + (rnd() - 0.5) * 3);
      const cells = new Map(); // "r,c" → { ch, h, v }
      const placed = [];
      let box = null;
      const at = (r, c) => cells.get(r + ',' + c);
      const fits = (L, r, c, d) => {
        const dr = d === 'v' ? 1 : 0, dc = d === 'h' ? 1 : 0;
        if (at(r - dr, c - dc) || at(r + dr * L.length, c + dc * L.length)) return -1;
        let cross = 0;
        for (let i = 0; i < L.length; i++) {
          const rr = r + dr * i, cc = c + dc * i, x = at(rr, cc);
          if (x) { if (x.ch !== L[i] || x[d]) return -1; cross++; continue; }
          if (at(rr + dc, cc + dr) || at(rr - dc, cc - dr)) return -1; // geen buren naast een nieuwe letter
        }
        if (box) {
          const r1 = Math.min(box[0], r), c1 = Math.min(box[1], c), r2 = Math.max(box[2], r + dr * (L.length - 1)), c2 = Math.max(box[3], c + dc * (L.length - 1));
          if (r2 - r1 + 1 > maxH || c2 - c1 + 1 > maxW) return -1;
        }
        return cross;
      };
      const put = (w, r, c, d) => {
        const L = w.letters, dr = d === 'v' ? 1 : 0, dc = d === 'h' ? 1 : 0;
        for (let i = 0; i < L.length; i++) {
          const k = (r + dr * i) + ',' + (c + dc * i);
          const x = cells.get(k) || { ch: L[i] }; x[d] = true; cells.set(k, x);
        }
        const end = [r + dr * (L.length - 1), c + dc * (L.length - 1)];
        box = box ? [Math.min(box[0], r), Math.min(box[1], c), Math.max(box[2], end[0]), Math.max(box[3], end[1])] : [r, c, end[0], end[1]];
        placed.push({ w, r, c, d });
      };
      for (const w of pool) {
        if (placed.length >= want) break;
        const L = w.letters;
        if (L.length > Math.max(maxW, maxH)) continue;
        if (!placed.length) { if (L.length <= maxW) put(w, 0, 0, 'h'); continue; }
        const opts2 = [];
        for (const [k, x] of cells) {
          const [r0, c0] = k.split(',').map(Number);
          for (let i = 0; i < L.length; i++) {
            if (L[i] !== x.ch) continue;
            for (const d of ['h', 'v']) {
              if (x[d]) continue;
              const r = d === 'v' ? r0 - i : r0, c = d === 'h' ? c0 - i : c0;
              const cr = fits(L, r, c, d); if (cr > 0) opts2.push([cr + rnd(), r, c, d]);
            }
          }
        }
        if (opts2.length) { opts2.sort((a, b) => b[0] - a[0]); const o = opts2[0]; put(w, o[1], o[2], o[3]); }
      }
      if (!best || placed.length > best.placed.length) best = { placed, box };
      if (placed.length >= want) break;
    }
    const [r1, c1, r2, c2] = best.box;
    const list = best.placed.map(p => ({ w: p.w, r: p.r - r1, c: p.c - c1, d: p.d }));
    // nummeren in leesvolgorde
    const starts = [...new Set(list.map(p => p.r * 100 + p.c))].sort((a, b) => a - b);
    list.forEach(p => { p.n = starts.indexOf(p.r * 100 + p.c) + 1; p.cells = [...p.w.letters].map((_, i) => [p.r + (p.d === 'v' ? i : 0), p.c + (p.d === 'h' ? i : 0)]); });
    list.sort((a, b) => a.n - b.n);
    return { rows: r2 - r1 + 1, cols: c2 - c1 + 1, words: list };
  }

  /** Letters van een woord husselen (nooit in de goede volgorde). */
  function scramble(letters, rnd = Math.random) {
    const a = [...letters];
    if (new Set(a).size < 2) return a;
    for (let t = 0; t < 20; t++) {
      for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
      if (a.join('') !== letters) return a;
    }
    return a.reverse();
  }

  /* ================= woordkeuze: eerst wat in de herhaling klaarstaat of lastig is ================= */
  function sourceUnits(src) {
    if (C.get(src)) return [C.get(src)];
    if (C.LEVELS.some(l => l.id === src)) return C.unitsOf(src);
    const mine = S.Gen.learnedUnits();
    return mine.length ? mine : C.all().slice(0, 2);
  }
  function poolFor(src, fit) {
    const seen = new Set();
    return sourceUnits(src).flatMap(u => C.words(u)).map(gameWord).filter(g => g && fit(g) && !seen.has(g.plain) && seen.add(g.plain));
  }
  function pickWords(src, n, fit) {
    const pool = poolFor(src, fit), db = S.Store.state.srs, today = U.dayIndex();
    const prio = g => { const c = db[g.id]; if (!c) return 3; if (c.d <= today) return 0; if (c.l > 0 || c.i < 3) return 1; return 2; };
    return U.shuffle(pool.map(g => [prio(g) + Math.random() * 2.2, g]).sort((a, b) => a[0] - b[0]).slice(0, n).map(x => x[1]));
  }

  const GAMES = [
    { id: 'sopa', icon: '🔎', es: 'Sopa de letras', nl: 'Woordzoeker', desc: 'Zoek de Spaanse woorden in het letterveld. Je ziet de Nederlandse betekenis.', min: 4 },
    { id: 'cruci', icon: '✏️', es: 'Crucigrama', nl: 'Kruiswoord', desc: 'Vul het kruiswoord in met Spaanse woorden. Accenten hoef je niet te typen.', min: 6 },
    { id: 'revoltijo', icon: '🔀', es: 'Revoltijo', nl: 'Letterhusselaar', desc: 'Zet de door elkaar gehusselde letters in de goede volgorde.', min: 3 },
    { id: 'volcan', icon: '🌋', es: 'El volcán', nl: 'Raad het woord', desc: 'Raad het woord letter voor letter, voordat de vulkaan uitbarst.', min: 4 },
    { id: 'parejas', icon: '🃏', es: 'Parejas', nl: 'Memory', desc: 'Draai kaartjes om en vind steeds het Spaanse woord met de Nederlandse betekenis.', min: 3 }
  ];

  S.Games = { GAMES, gen: { gameWord, plain, FIT, wordSearch, crossword, scramble, poolFor, pickWords, sourceUnits } };

  if (typeof document === 'undefined' || !U.h) return;

  /* ================================================================
     Alles hieronder is interface.
     ================================================================ */
  const h = U.h;
  const wide = () => window.innerWidth >= 700;
  const SRC_KEY = 'spt.games.src';
  function getSrc() { try { return localStorage.getItem(SRC_KEY) || 'mine'; } catch (e) { return 'mine'; } }
  function setSrc(v) { try { localStorage.setItem(SRC_KEY, v); } catch (e) { /* privévenster */ } }
  const say = t => S.Speech.say(t).catch(() => {});
  /* U.h zet style via Object.assign; CSS-variabelen moeten met setProperty. */
  const vars = (el, o) => { for (const k in o) el.style.setProperty(k, o[k]); return el; };

  /* ---------- het spelvenster (zelfde overlay als de lessen) ---------- */
  let cur = null;
  function shell(game, src) {
    if (cur) cur.close(true);
    const root = document.getElementById('lesson');
    root.innerHTML = ''; root.hidden = false; document.body.classList.add('in-lesson');
    const status = h('span', { class: 'gm-status' });
    const body = h('div', { class: 'gm-body' });
    const foot = h('div', { class: 'gm-foot' });
    const g = {
      game, src, body, foot, status, results: new Map(), start: Date.now(), last: Date.now(), active: 0, ended: false, keys: null, cleanup: [],
      /** Eerste uitkomst per woord telt. */
      mark(w, ok) { if (!g.results.has(w.id)) g.results.set(w.id, { w, ok }); },
      touch() { const n = Date.now(); g.active += Math.min(n - g.last, 45000); g.last = n; },
      close(silent) {
        document.removeEventListener('keydown', onKey); g.cleanup.forEach(f => f());
        if (!g.ended) record(g, false);
        root.hidden = true; root.innerHTML = ''; document.body.classList.remove('in-lesson'); cur = null;
        if (!silent) S.render();
      },
      finish(title, text) { g.touch(); record(g, true); showResults(g, title, text); }
    };
    const onKey = e => {
      if (e.key === 'Escape') { tryClose(); return; }
      if (g.keys && !(e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) && !e.metaKey && !e.ctrlKey) { if (g.keys(e) !== false) { /* afgehandeld */ } }
    };
    document.addEventListener('keydown', onKey);
    // app sluiten of herladen midden in een spel: wat al gespeeld is, telt toch mee
    const onHide = () => { if (!g.ended && g.results.size) { g.touch(); record(g, false); } };
    window.addEventListener('pagehide', onHide); g.cleanup.push(() => window.removeEventListener('pagehide', onHide));
    const tryClose = () => {
      if (g.ended || !g.results.size) { g.close(); return; }
      S.confirm('Spel stoppen?', 'De woorden die je al gevonden of gemist hebt, tellen mee voor je herhaling.', 'Stoppen', () => g.close());
    };
    root.append(h('div', { class: 'ls gm gm-' + game.id },
      h('div', { class: 'ls-top' }, h('button', { class: 'icon-btn', type: 'button', 'aria-label': 'Stoppen', onclick: tryClose }, '✕'),
        h('div', { class: 'gm-title' }, h('b', null, game.icon + ' ' + game.es), h('small', null, game.nl)), status),
      body, foot));
    root.addEventListener('pointerdown', g.touch, { passive: true });
    cur = g;
    return g;
  }

  /* ---------- uitslag naar herhaling, statistieken en XP ---------- */
  function record(g, complete) {
    g.ended = true;
    const learned = new Set(S.Gen.learnedUnits().map(u => u.id));
    let good = 0;
    const d = S.Store.today();
    for (const { w, ok } of g.results.values()) {
      d.items++; if (ok) { d.ok++; good++; }
      S.Store.skill('vocab', ok); S.Store.mark('vocab', ok);
      if (S.SRS.has(w.id)) S.SRS.grade(w.id, ok);
      else if (learned.has(w.unit)) S.SRS.add(w.id, ok ? 1 : 0);
    }
    g.good = good;
    g.xp = good * 4 + (complete && g.results.size ? 15 : 0);
    const minutes = Math.min(20, (g.active + Math.min(Date.now() - g.last, 45000)) / 60000);
    if (S.App) S.App.finishActivity({ xp: g.xp, minutes, game: complete ? g.game.id : null });
  }
  function showResults(g, title, text) {
    const list = [...g.results.values()];
    const n = list.length, good = g.good || 0;
    const score = n ? good / n : 0;
    g.keys = null; g.status.textContent = '';
    g.body.innerHTML = ''; g.foot.innerHTML = '';
    if (score >= 0.8 && n) { S.Sound.win(); S.confetti(); }
    g.body.append(h('div', { class: 'gm-result' },
      h('div', { class: 'gm-result-emoji' }, score >= 0.95 ? '🏆' : score >= 0.7 ? '🎉' : '💪'),
      h('h2', null, title || (score >= 0.95 ? '¡Perfecto!' : score >= 0.7 ? '¡Muy bien!' : '¡Sigue así!')),
      h('p', { class: 'muted' }, (typeof text === 'function' ? text() : text) || (good + ' van ' + n + ' woorden in één keer goed · +' + g.xp + ' XP')),
      h('div', { class: 'gm-words' }, list.map(({ w, ok }) => h('div', { class: 'gm-wrow ' + (ok ? 'ok' : 'no') },
        h('span', { class: 'gm-wmark' }, ok ? '✓' : '✗'),
        h('div', { class: 'grow' }, h('div', { class: 'es', lang: 'es' }, w.es), h('div', { class: 'nl' }, w.nl)),
        S.Lesson.speakBtn(w.say)))),
      n ? h('p', { class: 'small muted center' }, 'Gemiste woorden komen vaker terug in je herhaling.') : null));
    g.foot.append(h('div', { class: 'ls-actions' },
      h('button', { class: 'btn ghost', type: 'button', onclick: () => { g.close(true); location.hash = '#/juegos'; S.render(); } }, 'Andere spellen'),
      h('button', { class: 'btn primary', type: 'button', onclick: () => start(g.game.id, g.src) }, '🔁 Nog een keer')));
  }
  function notEnough(g, need) {
    g.ended = true;
    g.body.append(h('div', { class: 'gm-result' }, h('div', { class: 'gm-result-emoji' }, '🤔'), h('h2', null, 'Te weinig woorden'),
      h('p', { class: 'muted' }, 'Voor dit spel zijn minstens ' + need + ' geschikte woorden nodig. Kies bij «Woorden uit» een niveau of meer units.')));
    g.foot.append(h('div', { class: 'ls-actions' }, h('button', { class: 'btn primary', type: 'button', onclick: () => g.close() }, 'Terug')));
  }

  /* ---------- schermtoetsenbord (groot genoeg voor vingers op de iPad) ---------- */
  const ROWS = ['QWERTYUIOP', 'ASDFGHJKLÑ', 'ZXCVBNM⌫'];
  function keyboard(onKey, opts = {}) {
    const keys = {};
    const el = h('div', { class: 'kb', role: 'group', 'aria-label': 'Toetsenbord' },
      ROWS.map(row => h('div', { class: 'kb-row' }, [...row].map(ch => {
        if (ch === '⌫' && opts.noBack) return null;
        const b = h('button', { class: 'kb-key' + (ch === '⌫' ? ' kb-back' : ''), type: 'button', 'aria-label': ch === '⌫' ? 'Wissen' : ch,
          onpointerdown: e => e.preventDefault(), onclick: () => onKey(ch === '⌫' ? 'BACK' : ch) }, ch);
        keys[ch] = b; return b;
      }))));
    el.set = (ch, cls) => { const b = keys[ch]; if (b) { b.classList.remove('hit', 'miss'); if (cls) b.classList.add(cls); b.disabled = !!cls; } };
    return el;
  }
  const keyOf = e => { if (e.key === 'Backspace') return 'BACK'; const k = plain(e.key || ''); return /^[A-ZÑ]$/.test(k) ? k : null; };

  /* =================== 1. Sopa de letras =================== */
  function sopa(g) {
    const n = wide() ? 9 : 7;
    const lvl = sourceUnits(g.src)[0] ? sourceUnits(g.src)[0].level : 'A1';
    const words = pickWords(g.src, n, w => FIT.grid(w, wide() ? 11 : 10));
    if (words.length < 4) return notEnough(g, 4);
    const size = Math.max(wide() ? 12 : 10, Math.max(...words.map(w => w.letters.length)));
    const P = wordSearch(words, size, { reverse: lvl !== 'A1' });
    const found = new Set(), hinted = new Set();
    const cellEls = [];
    const grid = vars(h('div', { class: 'ws-grid' }), { '--n': size });
    for (let r = 0; r < size; r++) { cellEls[r] = []; for (let c = 0; c < size; c++) { const el = h('div', { class: 'ws-cell', 'data-r': r, 'data-c': c }, P.grid[r][c]); cellEls[r][c] = el; grid.append(el); } }
    const clues = h('div', { class: 'ws-clues' });
    const clueEls = new Map();
    P.placed.slice().sort((a, b) => a.w.nl.localeCompare(b.w.nl, 'nl')).forEach(p => {
      const el = h('div', { class: 'ws-clue' }, h('span', { class: 'ws-nl' }, p.w.nl), h('span', { class: 'ws-len muted' }, ' (' + p.w.letters.length + ')'));
      clueEls.set(p, el); clues.append(el);
    });
    const upd = () => { g.status.textContent = found.size + '/' + P.placed.length; };
    upd();
    g.body.append(h('p', { class: 'gm-help muted small' }, 'Sleep over de letters, of tik de eerste en de laatste letter aan.'), h('div', { class: 'ws-wrap' }, grid, clues));

    let startCell = null, sel = [], anchor = null, moved = false;
    const cellAt = (x, y) => { const el = document.elementFromPoint(x, y); return el && el.classList && el.classList.contains('ws-cell') ? [+el.dataset.r, +el.dataset.c] : null; };
    const line = (a, b) => {
      let dr = b[0] - a[0], dc = b[1] - a[1];
      const ar = Math.abs(dr), ac = Math.abs(dc);
      if (ar && ac && ar !== ac) { if (ar > 2 * ac) dc = 0; else if (ac > 2 * ar) dr = 0; else { const m = Math.max(ar, ac); dr = Math.sign(dr) * m; dc = Math.sign(dc) * m; } }
      const len = Math.max(Math.abs(dr), Math.abs(dc)), sr = Math.sign(dr), sc = Math.sign(dc), out = [];
      for (let i = 0; i <= len; i++) { const r = a[0] + sr * i, c = a[1] + sc * i; if (r < 0 || c < 0 || r >= size || c >= size) break; out.push([r, c]); }
      return out;
    };
    const paint = cells => { grid.querySelectorAll('.ws-cell.sel').forEach(x => x.classList.remove('sel')); cells.forEach(([r, c]) => cellEls[r][c].classList.add('sel')); };
    const tryWord = cells => {
      paint([]);
      if (cells.length < 2) return false;
      const s = cells.map(([r, c]) => P.grid[r][c]).join(''), rev = [...s].reverse().join('');
      const p = P.placed.find(p => !found.has(p) && (p.w.letters === s || p.w.letters === rev));
      if (!p) { if (cells.length >= 3) { grid.classList.remove('shake'); void grid.offsetWidth; grid.classList.add('shake'); S.Sound.bad(); } return false; }
      found.add(p); g.mark(p.w, !hinted.has(p));
      const hue = (found.size * 47) % 360;
      p.cells.forEach(([r, c]) => { cellEls[r][c].classList.add('found'); cellEls[r][c].style.setProperty('--fh', hue); });
      const ce = clueEls.get(p); ce.classList.add('done'); ce.prepend(h('b', { lang: 'es' }, p.w.key + ' '));
      S.Sound.good(); say(p.w.say); upd();
      if (found.size === P.placed.length) setTimeout(() => g.finish(), 900);
      return true;
    };
    grid.addEventListener('pointerdown', e => {
      const c = cellAt(e.clientX, e.clientY); if (!c) return;
      e.preventDefault(); startCell = c; moved = false; sel = [c];
      try { grid.setPointerCapture(e.pointerId); } catch (err) { /* */ }
      paint(anchor ? line(anchor, c) : sel);
    });
    grid.addEventListener('pointermove', e => {
      if (!startCell) return;
      const c = cellAt(e.clientX, e.clientY); if (!c) return;
      if (c[0] !== startCell[0] || c[1] !== startCell[1]) moved = true;
      if (moved) { anchor = null; sel = line(startCell, c); paint(sel); }
    });
    const up = () => {
      if (!startCell) return;
      const c = startCell; startCell = null;
      if (moved) { tryWord(sel); return; }
      if (anchor && (anchor[0] !== c[0] || anchor[1] !== c[1])) { const cells = line(anchor, c); anchor = null; tryWord(cells); return; }
      if (anchor) { anchor = null; paint([]); return; }
      anchor = c; paint([c]); cellEls[c[0]][c[1]].classList.add('sel');
    };
    grid.addEventListener('pointerup', up); grid.addEventListener('pointercancel', () => { startCell = null; paint([]); });

    const hintBtn = h('button', { class: 'btn ghost', type: 'button', onclick: () => {
      const left = P.placed.filter(p => !found.has(p)); if (!left.length) return;
      const p = left.find(x => !hinted.has(x)) || left[0]; hinted.add(p);
      const [r, c] = p.cells[0]; cellEls[r][c].classList.add('hint'); setTimeout(() => cellEls[r][c].classList.remove('hint'), 2400);
      clueEls.get(p).classList.add('hinted');
    } }, '💡 Hint');
    const giveUp = h('button', { class: 'btn link', type: 'button', onclick: () => S.confirm('Oplossing tonen?', 'De woorden die je nog niet gevonden hebt, tellen als fout.', 'Toon', () => {
      P.placed.filter(p => !found.has(p)).forEach(p => { g.mark(p.w, false); p.cells.forEach(([r, c]) => cellEls[r][c].classList.add('shown')); });
      setTimeout(() => g.finish('Opgelost'), 1400);
    }, 'Verder zoeken') }, 'Oplossing');
    g.foot.append(h('div', { class: 'ls-actions' }, giveUp, h('span', { class: 'grow' }), hintBtn));
  }

  /* =================== 2. Crucigrama =================== */
  function cruci(g) {
    const pool = pickWords(g.src, 30, w => FIT.grid(w, 9));
    if (pool.length < 4) return notEnough(g, 4);
    const P = crossword(pool, { want: wide() ? 9 : 7, maxW: wide() ? 13 : 10, maxH: wide() ? 11 : 11 });
    if (P.words.length < 3) return notEnough(g, 4);
    const val = {}, cellEl = {}, solved = new Set(), wrongOnce = new Set(), hinted = new Set();
    const K = (r, c) => r + ',' + c;
    const sol = {};
    P.words.forEach(p => p.cells.forEach(([r, c], i) => { sol[K(r, c)] = p.w.letters[i]; }));
    const grid = vars(h('div', { class: 'cw-grid' }), { '--cols': P.cols, '--rows': P.rows });
    const nums = {}; P.words.forEach(p => { nums[K(p.r, p.c)] = p.n; });
    for (let r = 0; r < P.rows; r++) for (let c = 0; c < P.cols; c++) {
      const k = K(r, c);
      if (!sol[k]) { grid.append(h('div', { class: 'cw-cell empty' })); continue; }
      const letter = h('span', { class: 'cw-l' });
      const el = h('div', { class: 'cw-cell', 'data-k': k, onclick: () => select(r, c) }, nums[k] ? h('small', null, nums[k]) : null, letter);
      el._l = letter; cellEl[k] = el; grid.append(el);
    }
    let act = null, pos = 0; // actief woord en positie
    const clueEl = new Map();
    const clueList = d => h('div', { class: 'cw-list' }, h('b', { class: 'cw-head' }, d === 'h' ? '→ Horizontaal' : '↓ Verticaal'),
      P.words.filter(p => p.d === d).map(p => { const el = h('button', { class: 'cw-clue', type: 'button', onclick: () => { act = p; pos = firstOpen(p); draw(); } }, h('b', null, p.n + ' '), p.w.nl, h('span', { class: 'muted' }, ' (' + p.w.letters.length + ')')); clueEl.set(p, el); return el; }));
    const bar = h('div', { class: 'cw-bar' });
    const upd = () => { g.status.textContent = solved.size + '/' + P.words.length; };
    g.body.append(h('div', { class: 'cw-wrap' }, grid, h('div', { class: 'cw-clues' }, clueList('h'), clueList('v'))));
    const firstOpen = p => { const i = p.cells.findIndex(([r, c]) => !val[K(r, c)]); return i < 0 ? 0 : i; };
    function select(r, c) {
      const k = K(r, c);
      const here = P.words.filter(p => p.cells.some(([a, b]) => a === r && b === c));
      if (act && here.includes(act) && act.cells[pos] && K(...act.cells[pos]) === k && here.length > 1) act = here.find(p => p !== act);
      else if (!act || !here.includes(act)) act = here.find(p => !solved.has(p)) || here[0];
      pos = act.cells.findIndex(([a, b]) => a === r && b === c);
      draw();
    }
    function draw() {
      for (const k in cellEl) { const el = cellEl[k]; el._l.textContent = val[k] || ''; el.classList.remove('in', 'at'); }
      if (act) { act.cells.forEach(([r, c], i) => cellEl[K(r, c)].classList.add(i === pos ? 'at' : 'in')); }
      clueEl.forEach((el, p) => { el.classList.toggle('on', p === act); el.classList.toggle('done', solved.has(p)); });
      bar.innerHTML = '';
      if (act) bar.append(h('b', null, act.n + (act.d === 'h' ? ' → ' : ' ↓ ')), h('span', null, act.w.nl), h('span', { class: 'muted' }, ' · ' + act.w.letters.length + ' letters'));
      else bar.append(h('span', { class: 'muted' }, 'Tik een vakje of een omschrijving aan.'));
      upd();
    }
    const locked = k => P.words.some(p => solved.has(p) && p.cells.some(([r, c]) => K(r, c) === k));
    function checkWords(k) {
      P.words.filter(p => !solved.has(p) && p.cells.some(([r, c]) => K(r, c) === k)).forEach(p => {
        const ks = p.cells.map(([r, c]) => K(r, c));
        if (!ks.every(x => val[x])) return;
        if (ks.every(x => val[x] === sol[x])) {
          solved.add(p); g.mark(p.w, !wrongOnce.has(p) && !hinted.has(p));
          ks.forEach(x => cellEl[x].classList.add('ok'));
          S.Sound.good(); say(p.w.say);
          if (p === act) { const nxt = P.words.find(q => !solved.has(q)); if (nxt) { act = nxt; pos = firstOpen(nxt); } }
          if (solved.size === P.words.length) setTimeout(() => g.finish(), 900);
        } else if (!wrongOnce.has(p)) {
          wrongOnce.add(p); S.Sound.bad();
          ks.forEach(x => { cellEl[x].classList.remove('bad'); void cellEl[x].offsetWidth; cellEl[x].classList.add('bad'); });
        }
      });
    }
    function type(ch) {
      if (!act) { act = P.words.find(p => !solved.has(p)); if (!act) return; pos = firstOpen(act); }
      const cells = act.cells;
      if (ch === 'BACK') {
        let k = K(...cells[pos]);
        if ((!val[k] || locked(k)) && pos > 0) { pos--; k = K(...cells[pos]); }
        if (!locked(k)) delete val[k];
        draw(); return;
      }
      const k = K(...cells[pos]);
      if (!locked(k)) { val[k] = ch; checkWords(k); }
      for (let i = pos + 1; i < cells.length; i++) { if (!locked(K(...cells[i]))) { pos = i; break; } }
      draw();
    }
    const kb = keyboard(type);
    g.keys = e => { if (/^Arrow/.test(e.key) && act) { pos = U.clamp(pos + (/Right|Down/.test(e.key) ? 1 : -1), 0, act.cells.length - 1); draw(); e.preventDefault(); return; } const k = keyOf(e); if (k) { e.preventDefault(); type(k); } };
    const hintBtn = h('button', { class: 'btn ghost small', type: 'button', onclick: () => {
      if (!act || solved.has(act)) return;
      const i = act.cells.findIndex(([r, c]) => val[K(r, c)] !== sol[K(r, c)]); if (i < 0) return;
      hinted.add(act); const k = K(...act.cells[i]); val[k] = sol[k]; pos = i; checkWords(k);
      if (!solved.has(act)) for (let j = i + 1; j < act.cells.length; j++) if (!locked(K(...act.cells[j]))) { pos = j; break; }
      draw();
    } }, '💡 Letter');
    const giveUp = h('button', { class: 'btn link small', type: 'button', onclick: () => S.confirm('Oplossing tonen?', 'De woorden die nog niet goed staan, tellen als fout.', 'Toon', () => {
      P.words.filter(p => !solved.has(p)).forEach(p => { g.mark(p.w, false); p.cells.forEach(([r, c]) => { const k = K(r, c); if (val[k] !== sol[k]) cellEl[k].classList.add('shown'); val[k] = sol[k]; }); });
      act = null; draw(); setTimeout(() => g.finish('Opgelost'), 1600);
    }, 'Verder puzzelen') }, 'Oplossing');
    g.foot.append(h('div', { class: 'cw-foot' }, bar, h('div', { class: 'row gap' }, giveUp, hintBtn)), kb);
    act = P.words[0]; pos = 0; draw();
  }

  /* =================== 3. Revoltijo =================== */
  function revoltijo(g) {
    const words = pickWords(g.src, 8, FIT.phrase);
    if (words.length < 3) return notEnough(g, 3);
    let i = 0;
    const next = () => { if (i >= words.length) { g.finish(); return; } round(words[i++]); };
    function round(w) {
      g.body.innerHTML = ''; g.foot.innerHTML = '';
      g.status.textContent = i + '/' + words.length;
      const target = [...w.key.replace(/ /g, '')];
      const tiles = scramble(w.key.replace(/ /g, '')).map((ch, n) => ({ ch, n, used: false }));
      const slots = new Array(target.length).fill(null);
      let tries = 0, hint = false, done = false;
      const slotBox = h('div', { class: 'rv-slots', lang: 'es' }), tileBox = h('div', { class: 'rv-tiles', lang: 'es' });
      const gaps = []; { let c = 0; w.key.split(' ').forEach((part, j) => { c += part.length; if (j < w.key.split(' ').length - 1) gaps.push(c); }); }
      function drawR() {
        slotBox.innerHTML = ''; tileBox.innerHTML = '';
        slots.forEach((t, n) => {
          if (gaps.includes(n)) slotBox.append(h('span', { class: 'rv-gap' }));
          slotBox.append(h('button', { class: 'rv-slot' + (t ? ' full' : '') + (t && t.fixed ? ' fixed' : ''), type: 'button', disabled: done || !t || t.fixed ? true : null,
            onclick: () => { if (!t || t.fixed) return; t.used = false; slots[n] = null; S.Sound.tap(); drawR(); } }, t ? t.ch : ''));
        });
        tiles.forEach(t => tileBox.append(h('button', { class: 'rv-tile' + (t.used ? ' used' : ''), type: 'button', disabled: t.used || done ? true : null, onclick: () => place(t) }, t.ch)));
      }
      function place(t) {
        const n = slots.indexOf(null); if (n < 0) return;
        t.used = true; slots[n] = t; S.Sound.tap(); drawR();
        if (!slots.includes(null)) check();
      }
      function check() {
        if (slots.map(t => t.ch).join('') === target.join('')) {
          done = true; g.mark(w, !hint && tries === 0); S.Sound.good(); say(w.say);
          slotBox.classList.add('ok'); drawR();
          msg.innerHTML = ''; msg.append(h('b', { lang: 'es' }, w.es));
          setTimeout(next, 1300);
        } else {
          tries++; if (tries === 1) S.Sound.bad();
          slotBox.classList.remove('shake'); void slotBox.offsetWidth; slotBox.classList.add('shake');
          msg.textContent = 'Nog niet goed. Tik op een letter om hem terug te zetten.';
        }
      }
      function giveHint() {
        hint = true;
        // eerste fout of lege plek krijgt de juiste letter
        const n = slots.findIndex((t, k) => !t || t.ch !== target[k]); if (n < 0) return;
        slots.forEach((t, k) => { if (t && !t.fixed && k >= n) { t.used = false; slots[k] = null; } });
        const t = tiles.find(x => !x.used && x.ch === target[n]); if (!t) return;
        t.used = true; t.fixed = true; slots[n] = t; drawR();
        if (!slots.includes(null)) check();
      }
      const msg = h('p', { class: 'muted small center rv-msg' });
      g.body.append(h('div', { class: 'rv' },
        h('p', { class: 'muted center small' }, 'Welk Spaans woord is dit?'),
        h('div', { class: 'prompt center' }, w.nl),
        h('p', { class: 'center muted small' }, target.length + ' letters' + (gaps.length ? ' · ' + (gaps.length + 1) + ' woorden' : '')),
        slotBox, tileBox, msg));
      g.foot.append(h('div', { class: 'ls-actions' },
        h('button', { class: 'btn link', type: 'button', onclick: () => { if (done) return; done = true; g.mark(w, false); slots.forEach((t, k) => { slots[k] = { ch: target[k], fixed: true }; }); drawR(); say(w.say); msg.innerHTML = ''; msg.append(h('b', { lang: 'es' }, w.es)); setTimeout(next, 1800); } }, 'Overslaan'),
        h('span', { class: 'grow' }),
        h('button', { class: 'btn ghost', type: 'button', onclick: () => { hint = true; say(w.say); } }, '🔊'),
        h('button', { class: 'btn ghost', type: 'button', onclick: giveHint }, '💡 Letter')));
      g.keys = e => {
        if (done) return;
        if (e.key === 'Backspace') { const n = slots.map((t, k) => t && !t.fixed ? k : -1).filter(k => k >= 0).pop(); if (n != null && n >= 0) { slots[n].used = false; slots[n] = null; drawR(); } e.preventDefault(); return; }
        const k = (e.key || '').toLowerCase(); if (k.length !== 1) return;
        const t = tiles.find(x => !x.used && x.ch === k) || tiles.find(x => !x.used && plain(x.ch) === plain(k));
        if (t) { e.preventDefault(); place(t); }
      };
      drawR();
    }
    next();
  }

  /* =================== 4. El volcán =================== */
  const LIVES = 7;
  function volcanSvg() {
    return '<svg viewBox="0 0 200 150" class="vc-svg" aria-hidden="true">' +
      '<defs><clipPath id="vc-clip"><path d="M10 145 L78 40 Q100 30 122 40 L190 145 Z"/></clipPath>' +
      '<linearGradient id="vc-lava" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd23f"/><stop offset=".4" stop-color="#f26b21"/><stop offset="1" stop-color="#c0261b"/></linearGradient></defs>' +
      '<g class="vc-smoke"><circle cx="100" cy="24" r="9"/><circle cx="112" cy="14" r="7"/><circle cx="92" cy="8" r="6"/></g>' +
      '<path d="M10 145 L78 40 Q100 30 122 40 L190 145 Z" class="vc-mount"/>' +
      '<rect class="vc-lava" x="0" width="200" y="145" height="0" fill="url(#vc-lava)" clip-path="url(#vc-clip)"/>' +
      '<path d="M78 40 Q100 30 122 40" class="vc-rim"/>' +
      '<g class="vc-boom"><path d="M100 36 L84 4 M100 36 L100 0 M100 36 L118 4 M100 36 L70 16 M100 36 L132 16"/></g>' +
      '<path d="M40 120 q10 -6 20 0 M140 112 q8 -5 16 0" class="vc-detail"/></svg>';
  }
  function volcan(g) {
    const words = pickWords(g.src, 6, w => FIT.phrase(w) && w.letters.length >= 4);
    if (words.length < 3) return notEnough(g, 3);
    let i = 0;
    const next = () => { if (i >= words.length) { g.finish(); return; } round(words[i++]); };
    function round(w) {
      g.body.innerHTML = ''; g.foot.innerHTML = '';
      g.status.textContent = i + '/' + words.length;
      const chars = [...w.key];
      const tried = new Set();
      let miss = 0, over = false;
      const art = h('div', { class: 'vc-art', html: volcanSvg() });
      const lava = art.querySelector('.vc-lava');
      const word = h('div', { class: 'vc-word', lang: 'es' });
      const lives = h('div', { class: 'vc-lives' });
      const msg = h('p', { class: 'center small muted' }, 'Kies letters. Een klinker telt ook met accent: A geeft ook Á.');
      const drawW = () => {
        word.innerHTML = '';
        chars.forEach(ch => word.append(ch === ' ' ? h('span', { class: 'vc-gap' }) : h('span', { class: 'vc-ch' + (tried.has(plain(ch)) || over ? ' open' : '') + (over && !tried.has(plain(ch)) ? ' lost' : '') }, tried.has(plain(ch)) || over ? ch : '')));
        lives.textContent = '🌋 ' + (LIVES - miss) + ' over';
        const f = miss / LIVES; lava.setAttribute('y', 145 - 110 * f); lava.setAttribute('height', 110 * f);
        art.classList.toggle('warn', miss >= LIVES - 2);
      };
      const solvedNow = () => chars.every(ch => ch === ' ' || tried.has(plain(ch)));
      function guess(k) {
        if (over || k === 'BACK' || tried.has(k)) return;
        tried.add(k);
        const hit = chars.some(ch => plain(ch) === k);
        kb.set(k, hit ? 'hit' : 'miss');
        if (hit) S.Sound.tap(); else { miss++; S.Sound.bad(); art.classList.remove('rumble'); void art.offsetWidth; art.classList.add('rumble'); }
        drawW();
        if (solvedNow()) {
          over = true; g.mark(w, true); S.Sound.good(); say(w.say);
          msg.innerHTML = ''; msg.append('¡Bien! ', h('b', { lang: 'es' }, w.es)); art.classList.add('calm');
          setTimeout(next, 1500);
        } else if (miss >= LIVES) {
          over = true; g.mark(w, false); art.classList.add('erupt'); drawW(); say(w.say);
          msg.innerHTML = ''; msg.append('¡Erupción! Het woord was ', h('b', { lang: 'es' }, w.es));
          g.foot.querySelector('.vc-next').hidden = false;
        }
      }
      const kb = keyboard(guess, { noBack: true });
      g.keys = e => { const k = keyOf(e); if (k && k !== 'BACK') { e.preventDefault(); guess(k); } else if (e.key === 'Enter' && over && miss >= LIVES) next(); };
      g.body.append(h('div', { class: 'vc' }, art,
        h('p', { class: 'muted center small' }, 'Het Spaanse woord voor'), h('div', { class: 'prompt center' }, w.nl),
        word, lives, msg));
      g.foot.append(h('div', { class: 'ls-actions vc-actions' }, h('button', { class: 'btn primary vc-next', type: 'button', hidden: true, onclick: next }, 'Volgende woord')), kb);
      drawW();
    }
    next();
  }

  /* =================== 5. Parejas =================== */
  function parejas(g) {
    const n = wide() ? 8 : 6;
    const words = pickWords(g.src, n, FIT.pair);
    if (words.length < 4) return notEnough(g, 4);
    const cards = U.shuffle(words.flatMap(w => [{ w, side: 'es', text: w.es }, { w, side: 'nl', text: w.nl }]));
    const seen = new Set(), misses = new Map(), matched = new Set();
    let open = [], busy = false, moves = 0;
    const board = vars(h('div', { class: 'mm-grid' }), { '--cols': wide() ? 4 : 3 });
    const upd = () => { g.status.textContent = matched.size + '/' + words.length + ' · ' + moves + ' beurten'; };
    cards.forEach(cd => {
      cd.el = h('button', { class: 'mm-card ' + cd.side, type: 'button', 'aria-label': 'Kaartje', onclick: () => flip(cd) },
        h('span', { class: 'mm-back' }, cd.side === 'es' ? '🇪🇸' : '🇳🇱'), h('span', { class: 'mm-front', lang: cd.side === 'es' ? 'es' : 'nl' }, cd.text));
      board.append(cd.el);
    });
    function flip(cd) {
      if (busy || cd.open || matched.has(cd.w)) return;
      cd.open = true; cd.el.classList.add('open'); open.push(cd);
      if (cd.side === 'es') say(cd.w.say); else S.Sound.tap();
      if (open.length < 2) return;
      moves++; const [a, b] = open; open = [];
      if (a.w === b.w) {
        matched.add(a.w); g.mark(a.w, !(misses.get(a.w) > 0));
        setTimeout(() => { a.el.classList.add('done'); b.el.classList.add('done'); S.Sound.good(); }, 250);
        if (matched.size === words.length) setTimeout(() => g.finish(null, () => words.length + ' paren in ' + moves + ' beurten · +' + g.xp + ' XP'), 1100);
      } else {
        // een fout telt pas als je het andere kaartje van dat paar al eens gezien had
        [a, b].forEach(x => { const partner = x.w.id + (x.side === 'es' ? 'nl' : 'es'); if (seen.has(partner)) misses.set(x.w, (misses.get(x.w) || 0) + 1); });
        busy = true;
        setTimeout(() => { a.open = b.open = false; a.el.classList.remove('open'); b.el.classList.remove('open'); busy = false; }, 1100);
      }
      seen.add(a.w.id + a.side); seen.add(b.w.id + b.side);
      upd();
    }
    upd();
    g.body.append(h('p', { class: 'gm-help muted small' }, 'Zoek steeds het Spaanse woord 🇪🇸 bij de Nederlandse betekenis 🇳🇱.'), board);
  }

  const RUN = { sopa, cruci, revoltijo, volcan, parejas };
  function start(id, src) {
    const game = GAMES.find(x => x.id === id); if (!game) return;
    const g = shell(game, src || getSrc());
    RUN[id](g);
  }

  /* ---------- overzichtspagina ---------- */
  function page() {
    const wrap = h('div', { class: 'page' });
    wrap.append(h('a', { class: 'back', href: '#/practica' }, '← Práctica'), h('h1', null, 'Juegos de palabras'),
      h('p', { class: 'muted' }, 'Oefen je woordenschat met spelletjes. Wat je goed of fout doet, telt mee in je herhaling.'));
    let src = getSrc();
    if (src !== 'mine' && !C.get(src) && !C.available(src)) src = 'mine';
    const chips = h('div', { class: 'chips wrap' });
    const unitSel = h('select', { class: 'input gm-unit', 'aria-label': 'Kies een unit' },
      h('option', { value: '' }, 'Of kies één unit…'),
      C.LEVELS.filter(L => C.available(L.id)).map(L => h('optgroup', { label: L.id }, C.unitsOf(L.id).map((u, i) => h('option', { value: u.id }, L.id + '.' + (i + 1) + ' ' + u.icon + ' ' + u.title)))));
    const info = h('p', { class: 'small muted' });
    const opts = [['mine', 'Mijn units'], ...C.LEVELS.filter(L => C.available(L.id)).map(L => [L.id, 'Heel ' + L.id])];
    const draw = () => {
      chips.innerHTML = '';
      opts.forEach(([v, t]) => chips.append(h('button', { class: 'chip toggle' + (src === v ? ' on' : ''), type: 'button', onclick: () => { src = v; setSrc(v); unitSel.value = ''; draw(); } }, t)));
      unitSel.value = C.get(src) ? src : '';
      const us = sourceUnits(src), n = poolFor(src, () => true).length;
      const due = poolFor(src, () => true).filter(w => { const c = S.Store.state.srs[w.id]; return c && c.d <= U.dayIndex(); }).length;
      info.textContent = (C.get(src) ? us[0].icon + ' ' + us[0].title : src === 'mine' ? (S.Gen.learnedUnits().length ? U.plural(us.length, 'unit', 'units') + ' waar je al aan begonnen bent' : 'Je bent nog nergens begonnen, dus de eerste units') : U.plural(us.length, 'unit', 'units') + ' van ' + src) +
        ' · ' + n + ' woorden' + (due ? ' · ' + due + ' klaar voor herhaling (die komen eerst)' : '');
    };
    unitSel.onchange = () => { if (unitSel.value) { src = unitSel.value; setSrc(src); draw(); } };
    draw();
    wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, 'Woorden uit'), h('div', { class: 'card' }, chips, unitSel, info)));
    wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, 'Kies een spel'), h('div', { class: 'gm-cards' },
      GAMES.map(gm => h('button', { class: 'gm-card', type: 'button', onclick: () => start(gm.id, src) },
        h('span', { class: 'gm-icon' }, gm.icon),
        h('div', { class: 'grow' }, h('b', null, gm.es), h('small', { class: 'gm-nl' }, gm.nl + ' · ±' + gm.min + ' min'), h('span', { class: 'gm-desc' }, gm.desc)),
        h('span', { class: 'gm-go', 'aria-hidden': 'true' }, '›'))))));
    return wrap;
  }
  page.tab = 'practica';

  Object.assign(S.Games, { start, page });
})(window.SPT);
