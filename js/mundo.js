/* Uitbreiding «Op reis» (#/mundo, #/pais/<id>): een kaart met de landen van de doeltaal; per land klank, woorden en slang,
   oefenen en een paspoortstempel. Los van de basiscursus: geen SRS, geen dagplan, geen route.
   Werkt voor elke doeltaal: elke cursus heeft een eigen landenlijst (S.places + S.placeGroups + S.placeMeta, bijv.
   content/landen.js voor Spaans, content/en-nl/landen.js voor Engels) en een kaart S.MAPS[doeltaal] (content/kaarten/<taal>.js,
   gemaakt met tools/kaart-maken.mjs). Nieuwe taal = die twee bestanden plus stemmen per land in tools/tts-texts.js (PLACE_VOICES).
   Voortgang: Store.state.places[id] = { v: eerste bezoek, n: keer geoefend, best: beste toetsscore 0–1, stamp: datum stempel }.
   Opnames per land in naamruimte 'pl-<id>' (Spaans) of 'pl-<taal>-<id>' (andere talen), zie tools/tts-texts.js;
   Speech.placeNs zet die tijdens een oefening. */
(function (S) {
  'use strict';
  const { U } = S;
  const h = U.h;
  const st = () => S.Store.state;
  const PASS = 0.8, QUIZ_N = 10;
  const LABEL = { i: ['informeel', 'inf'], g: ['grof · alleen herkennen', 'grof'] };

  /* ---------- gegevens (zonder DOM, getest in tests/run.js) ---------- */
  const list = () => S.places || [];
  const get = id => list().find(p => p.id === id) || null;
  /* Gegevens van de landenset van deze cursus: doeltaal, basisstem (de stem van de basiscursus) en de inleiding. */
  const meta = () => Object.assign({ target: 'es', base: 'MX', suffix: ' Spaanssprekers',
    intro: 'Je basiscursus blijft neutraal Latijns-Amerikaans Spaans. Hier ga je zelf op bezoek: tik op een land en hoor hoe het Spaans daar klinkt, met de typische woorden en slang. Wat je hier oefent, komt niet in je gewone herhaling.' }, S.placeMeta || {});
  const nsFor = (target, id) => target === 'es' ? 'pl-' + id : 'pl-' + target + '-' + id;
  const ns = p => nsFor(meta().target, p.id);
  const prog = id => (st().places || {})[id] || null;
  function progOf(id) { const s = st(); s.places = s.places || {}; return s.places[id] || (s.places[id] = {}); }
  function status(id) { const p = prog(id); return !p ? 'new' : p.stamp ? 'stamp' : p.v ? 'seen' : 'new'; }
  function stamps() { return list().filter(p => status(p.id) === 'stamp').length; }
  function words(p) { return p.words.map(([es, nl, lab], i) => ({ id: 'pl|' + p.id + '|' + i, es, nl, note: lab && LABEL[lab] ? LABEL[lab][0] : '' })); }
  /* Woorden voor de oefeningen: de grove alleen als je ze herkent (Spaans → Nederlands), niet om zelf te kiezen. */
  function mcItem(w, all, dir) {
    const seenNl = new Set([w.nl]), seenEs = new Set([w.es]);
    const others = U.shuffle(all).filter(x => { if (x.id === w.id || seenNl.has(x.nl) || seenEs.has(x.es)) return false; seenNl.add(x.nl); seenEs.add(x.es); return true; }).slice(0, 3);
    const base = { tag: null, skill: 'vocab', word: w };
    if (dir === 'listen') return { ...base, kind: 'mc', audio: w.es, q: 'Wat hoor je?', options: U.shuffle([w.es, ...others.map(o => o.es)]), answer: w.es, skill: 'listen' };
    if (dir === 'nl') return { ...base, kind: 'mc', prompt: w.nl, q: 'Hoe zeg je dit in het Spaans?', options: U.shuffle([w.es, ...others.map(o => o.es)]), answer: w.es, speakAnswer: true };
    return { ...base, kind: 'mc', prompt: w.es, speakPrompt: w.es, q: 'Wat betekent dit?', options: U.shuffle([w.nl, ...others.map(o => o.nl)]), answer: w.nl };
  }
  function practice(p) {
    const ws = words(p), items = [];
    for (let i = 0; i < ws.length; i += 5) {
      const chunk = ws.slice(i, i + 5);
      chunk.forEach(w => items.push({ kind: 'card', word: w }));
      U.shuffle(chunk).forEach((w, j) => items.push(mcItem(w, ws, w.note.startsWith('grof') ? 'es' : ['es', 'nl', 'listen'][j % 3])));
      if (chunk.length >= 3) { const nl = new Set(); items.push({ kind: 'match', pairs: chunk.filter(w => !nl.has(w.nl) && nl.add(w.nl)).map(w => [w.es, w.nl]), tag: null, skill: 'vocab' }); }
    }
    return { title: p.name + ' · Woorden en slang', items, mode: 'learn' };
  }
  function quiz(p) {
    const ws = words(p);
    const pick = U.shuffle(ws).slice(0, QUIZ_N);
    const items = pick.map((w, i) => mcItem(w, ws, w.note.startsWith('grof') ? 'es' : ['es', 'listen', 'nl'][i % 3]));
    // één klankvraag: welke zin hoor je?
    const s = U.pick(p.sounds || []);
    if (s && items.length >= QUIZ_N) {
      const zinnen = U.shuffle(list().flatMap(x => (x.sounds || []).map(y => y[2])).filter(z => z !== s[2])).slice(0, 3);
      items[items.length - 1] = { kind: 'mc', audio: s[2], q: 'Welke zin hoor je?', options: U.shuffle([s[2], ...zinnen]), answer: s[2], skill: 'listen', tag: null };
    }
    return { title: p.name + ' · Paspoortstempel', items: U.shuffle(items), mode: 'test', pass: PASS };
  }
  /* Zoeken in de woorden van een land: zonder accenten en hoofdletters, in het Spaans én het Nederlands.
     f = 'all' | 'ok' (netjes, zonder label) | 'i' (informeel) | 'g' (grof). Geeft de indexen in p.words. */
  const fold = t => String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[¡!¿?«»'’.,]/g, ' ').replace(/\s+/g, ' ').trim();
  function search(p, q, f = 'all') {
    const k = fold(q);
    return p.words.map((w, i) => i).filter(i => {
      const [es, nl, lab] = p.words[i];
      if (f === 'ok' ? lab : f !== 'all' && lab !== f) return false;
      return !k || fold(es).includes(k) || fold(nl).includes(k);
    });
  }
  function finish(p, kind, sum) {
    const g = progOf(p.id); g.v = g.v || Date.now(); g.n = (g.n || 0) + 1;
    const score = sum.total ? sum.ok / sum.total : 0;
    if (kind === 'quiz') {
      g.best = Math.max(g.best || 0, score);
      if (score >= PASS && !g.stamp) { g.stamp = Date.now(); return { first: true, score }; }
    }
    return { first: false, score };
  }

  /* ---------- weergave ---------- */
  /* Vlaggen als afbeelding (icons/vlaggen, uit flag-icons, MIT): vlag-emoji's ziet niet elk apparaat (bijv. Windows). */
  const flagSrc = p => 'icons/vlaggen/' + (p.flagImg || p.id) + '.png';
  const flagImg = (p, cls) => h('img', { class: 'flag-img' + (cls ? ' ' + cls : ''), src: flagSrc(p), alt: '', width: 40, height: 30, loading: 'lazy', decoding: 'async' });
  const say = (p, text) => S.Speech.say(text, { clipNs: ns(p) });
  function hereBtn(p, text, label) {
    return h('button', { class: 'btn small pl-say', type: 'button', onclick: e => { e.stopPropagation(); say(p, text); } }, '🔊 ' + (label || p.name));
  }
  function svgMap() {
    const M = S.MAPS && S.MAPS[meta().target]; if (!M) return null;
    const k = M.k || 1, fw = 20 * k, fh = 15 * k; // grotere vlagknoppen op een brede (wereld)kaart
    const NS = 'http://www.w3.org/2000/svg';
    const el = (tag, attrs, kids) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); (kids || []).forEach(c => c && e.append(c)); return e; };
    const go = id => { location.hash = '#/pais/' + id; };
    const svg = el('svg', { viewBox: `0 0 ${M.w} ${M.h}`, class: 'mundo-map' + (M.w > M.h ? ' wide' : ''), role: 'img', 'aria-label': 'Kaart van de landen waar je deze taal spreekt' });
    svg.append(el('rect', { x: 0, y: 0, width: M.w, height: M.h, class: 'sea', rx: 18 }));
    svg.append(el('path', { d: M.bg, class: 'land' }));
    const boxes = el('g'), shapes = el('g'), lines = el('g'), pins = el('g'), boxSeen = new Set();
    list().forEach(p => {
      const c = M.c[p.id], s = status(p.id);
      // kaders eerst (en elk kader één keer): landen kunnen een kader delen, zoals Frankrijk, België en Zwitserland
      if (c && c.box && !boxSeen.has(c.box.join())) { boxSeen.add(c.box.join()); boxes.append(el('rect', { x: c.box[0], y: c.box[1], width: c.box[2], height: c.box[3], rx: 10, class: 'inset' })); }
      if (c) { const sh = el('path', { d: c.d, class: 'cty ' + s }); sh.addEventListener('click', () => go(p.id)); shapes.append(sh); }
      const [x, y] = p.pin || (c ? c.p : [0, 0]);
      if (p.line && c) lines.append(el('line', { x1: x, y1: y, x2: c.p[0], y2: c.p[1], class: 'lead' }));
      const im = el('image', { x: x - fw / 2, y: y - fh / 2, width: fw, height: fh, href: flagSrc(p), preserveAspectRatio: 'xMidYMid slice', class: 'pin-flag' });
      im.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', flagSrc(p));
      const g = el('g', { class: 'pin ' + s, tabindex: 0, role: 'link', 'aria-label': p.name }, [el('circle', { cx: x, cy: y, r: 15 * k }), im, el('rect', { x: x - fw / 2, y: y - fh / 2, width: fw, height: fh, rx: 2, class: 'pin-edge' })]);
      if (s === 'stamp') { const ok = el('text', { x: x + 11 * k, y: y - 10 * k, 'text-anchor': 'middle', 'dominant-baseline': 'central', class: 'pin-ok', style: 'font-size:' + 9 * k + 'px' }); ok.textContent = '✓'; g.append(el('circle', { cx: x + 11 * k, cy: y - 10 * k, r: 7 * k, class: 'pin-okbg' }), ok); }
      g.addEventListener('click', () => go(p.id));
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(p.id); } });
      pins.append(g);
    });
    svg.append(boxes, shapes, lines, pins);
    return svg;
  }
  function stampChip(id) {
    const s = status(id);
    return s === 'stamp' ? h('span', { class: 'chip ok' }, '🛂 stempel') : s === 'seen' ? h('span', { class: 'chip' }, 'bezocht') : null;
  }
  function page() {
    const wrap = h('div', { class: 'page mundo' });
    const n = list().length, got = stamps();
    wrap.append(h('a', { class: 'back', href: '#/ruta' }, '← Ruta'),
      h('div', { class: 'eyebrow' }, 'Uitbreiding · los van je cursus'),
      h('h1', null, '🗺️ Op reis'),
      h('p', { class: 'muted' }, meta().intro));
    wrap.append(h('div', { class: 'card passport' },
      h('div', { class: 'pp-head' }, h('b', null, '🛂 Mijn paspoort'), h('span', { class: 'muted small' }, got + ' van ' + n + ' stempels')),
      h('div', { class: 'pbar' }, h('i', { style: { width: Math.round(got / Math.max(1, n) * 100) + '%' } })),
      h('div', { class: 'pp-flags' }, list().map(p => h('a', { class: 'pp-flag ' + status(p.id), href: '#/pais/' + p.id, title: p.name, 'aria-label': p.name }, flagImg(p))))));
    const map = svgMap();
    if (map) wrap.append(h('div', { class: 'card mundo-card' }, map, h('p', { class: 'small muted center' }, 'Tik op een vlag of een land.')));
    (S.placeGroups || [{ id: null, name: 'Landen' }]).forEach(g => {
      const ps = list().filter(p => !g.id || p.group === g.id); if (!ps.length) return;
      wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, g.name),
        h('div', { class: 'unit-list pl-list' }, ps.map(p => h('a', { class: 'unit-row', href: '#/pais/' + p.id },
          h('span', { class: 'u-icon pl-icon' }, flagImg(p)),
          h('div', { class: 'grow' }, h('b', null, p.name), h('small', null, p.city + ' · ' + p.speakers)),
          stampChip(p.id))))));
    });
    return wrap;
  }
  function placePage(id) {
    const p = get(id); if (!p) { location.hash = '#/mundo'; return h('div'); }
    const g = progOf(p.id); if (!g.v) { g.v = Date.now(); S.Store.save({ quiet: true }); }
    const wrap = h('div', { class: 'page mundo-pais' });
    const neutral = p.voice !== meta().base;
    wrap.append(h('a', { class: 'back', href: '#/mundo' }, '← Kaart'),
      h('div', { class: 'pl-hero card' },
        h('div', { class: 'pl-flag' }, flagImg(p)),
        h('div', { class: 'grow' },
          h('div', { class: 'eyebrow' }, 'Op reis · ' + p.city),
          h('h1', null, p.name),
          h('p', { class: 'muted small' }, p.speakers + meta().suffix),
          h('p', null, p.intro),
          h('div', { class: 'pl-hello' }, hereBtn(p, p.hello[0], 'Luister'), h('span', null, h('b', { lang: 'es' }, p.hello[0]), h('small', { class: 'muted' }, p.hello[1]))))));
    wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, '👂 Hoe klinkt het?'),
      p.voiceNote ? h('p', { class: 'small muted pl-note' }, 'ℹ️ ' + p.voiceNote) : null,
      neutral ? h('p', { class: 'small muted' }, 'Vergelijk: ', h('b', null, '🔊 ' + p.name), ' is een stem van hier, ', h('b', null, '🔊 Neutraal'), ' is de stem van je basiscursus.') : null,
      (p.sounds || []).map(([t, x, es, nl, neu]) => h('div', { class: 'card pl-sound' },
        h('b', null, t), h('p', { class: 'small' }, x),
        h('div', { class: 'pl-ex' }, h('div', { class: 'grow' }, h('div', { class: 'es', lang: 'es' }, es), h('div', { class: 'small muted' }, nl))),
        neutral && neu && neu !== es ? h('div', { class: 'pl-ex neutral' }, h('div', { class: 'grow' }, h('div', { class: 'small muted' }, 'Neutraal, zoals in je basiscursus:'), h('div', { class: 'es', lang: 'es' }, neu))) : null,
        h('div', { class: 'row gap wrap' }, hereBtn(p, es), neutral ? h('button', { class: 'btn small ghost', type: 'button', onclick: () => S.Speech.say(neu || es, { clipNs: S.course.ns }) }, '🔊 Neutraal') : null)))));
    const ws = words(p);
    const row = (pl, i) => { const [es, nl, lab] = pl.words[i]; return h('div', { class: 'word-row' },
      h('button', { class: 'icon-btn speak', type: 'button', 'aria-label': 'Beluister', onclick: e => { e.stopPropagation(); say(pl, pl.words[i][0]); } }, '🔊'),
      h('div', { class: 'grow' }, h('b', { lang: 'es' }, es), h('span', null, nl)),
      lab && LABEL[lab] ? h('span', { class: 'lab ' + LABEL[lab][1] }, LABEL[lab][1]) : null); };
    const box = h('div', { class: 'card word-list' }), info = h('p', { class: 'small muted pl-count' });
    let q = '', f = 'all';
    const input = h('input', { class: 'pl-search', type: 'search', placeholder: '🔎 Zoek in het Spaans of Nederlands…', autocomplete: 'off', autocorrect: 'off', autocapitalize: 'off', spellcheck: 'false', enterkeyhint: 'search', 'aria-label': 'Zoek woorden van ' + p.name });
    const FILTERS = [['all', 'Alles'], ['ok', 'Netjes'], ['i', 'Informeel'], ['g', 'Grof']];
    const chips = FILTERS.map(([k, t]) => h('button', { class: 'chip toggle' + (k === f ? ' on' : ''), type: 'button', 'aria-pressed': String(k === f), onclick: () => { f = k; chips.forEach((c, j) => { const on = FILTERS[j][0] === k; c.classList.toggle('on', on); c.setAttribute('aria-pressed', String(on)); }); draw(); } }, t));
    function draw() {
      const hits = search(p, q, f);
      box.innerHTML = ''; hits.forEach(i => box.append(row(p, i)));
      box.hidden = !hits.length;
      const all = !q && f === 'all';
      info.textContent = all ? p.words.length + ' woorden en uitdrukkingen' : hits.length ? hits.length + ' van ' + p.words.length + ' woorden' : 'Niets gevonden in ' + p.name + '.';
      other.innerHTML = '';
      if (q.trim().length >= 2) {
        const elsewhere = list().filter(x => x.id !== p.id).map(x => [x, search(x, q, f)]).filter(([, r]) => r.length).slice(0, 6);
        if (elsewhere.length) other.append(h('p', { class: 'small muted' }, 'Ook in andere landen:'),
          h('div', { class: 'card word-list' }, elsewhere.flatMap(([x, r]) => r.slice(0, 3).map(i => { const el = row(x, i); el.prepend(h('a', { class: 'pl-other', href: '#/pais/' + x.id, title: x.name, 'aria-label': x.name }, flagImg(x))); return el; }))));
      }
    }
    const other = h('div', { class: 'pl-elsewhere' });
    input.addEventListener('input', () => { q = input.value; draw(); });
    wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, '💬 Woorden en slang'),
      h('p', { class: 'small muted' }, h('span', { class: 'lab inf' }, 'inf'), ' = informeel, onder vrienden. ', h('span', { class: 'lab grof' }, 'grof'), ' = alleen om te herkennen, niet zelf zeggen.'),
      h('div', { class: 'pl-tools' }, input, h('div', { class: 'row gap wrap' }, chips)), info, box, other));
    draw();
    if (p.fact) wrap.append(h('div', { class: 'card pl-fact' }, h('b', null, '💡 Wist je dat?'), h('p', null, p.fact)));
    const unit = p.unit && S.C.get(p.unit);
    wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, '🎯 Oefenen'),
      h('div', { class: 'card pl-act' },
        h('button', { class: 'btn primary wide', type: 'button', onclick: () => run(p, 'practice') }, '🃏 Woorden en slang oefenen'),
        h('button', { class: 'btn wide', type: 'button', onclick: () => run(p, 'quiz') }, g.stamp ? '🛂 Toets opnieuw doen' : '🛂 Haal je stempel (' + QUIZ_N + ' vragen)'),
        h('p', { class: 'small muted' }, g.stamp ? 'Stempel gehaald op ' + new Date(g.stamp).toLocaleDateString(S.LOC, { day: 'numeric', month: 'long' }) + '. Beste score: ' + Math.round((g.best || 0) * 100) + '%.'
          : 'Haal ' + Math.round(PASS * 100) + '% of meer voor een stempel in je paspoort.' + (g.best ? ' Je beste score tot nu toe: ' + Math.round(g.best * 100) + '%.' : '')),
        unit ? h('a', { class: 'btn ghost wide', href: '#/unit/' + unit.id }, unit.icon + ' Meer in de route: ' + unit.level + ' · ' + unit.title) : null)));
    return wrap;
  }
  function run(p, kind, resumed) {
    const ses = resumed || (kind === 'quiz' ? quiz(p) : practice(p));
    S.Speech.placeNs = ns(p);
    const off = () => { S.Speech.placeNs = null; };
    S.runSession(ses, {
      desc: { kind: 'place', id: p.id, what: kind },
      onClose: off,
      onFinish: sum => {
        const r = finish(p, kind, sum); off();
        S.Store.save();
        if (kind !== 'quiz') return { emoji: '🎉', title: '¡Bien hecho!', text: 'Je hebt de woorden van ' + p.name + ' geoefend. Klaar voor je stempel?', nextLabel: '🛂 Naar de stempeltoets', next: () => run(p, 'quiz'), alt: { label: 'Terug naar ' + p.name, fn: () => { location.hash = '#/pais/' + p.id; } } };
        if (r.score >= PASS) return { passed: true, emoji: '🛂', title: r.first ? '¡Sello! Stempel gehaald' : '¡Muy bien!', text: (r.first ? 'Je paspoort heeft een nieuwe stempel: ' + p.name + '. ' : '') + 'Score: ' + Math.round(r.score * 100) + '%.', nextLabel: '🗺️ Naar de kaart', next: () => { location.hash = '#/mundo'; } };
        return { passed: false, emoji: '💪', title: 'Bijna!', text: 'Je had ' + Math.round(r.score * 100) + '%. Voor een stempel heb je ' + Math.round(PASS * 100) + '% nodig. Oefen de woorden nog eens en probeer het opnieuw.', nextLabel: 'Woorden oefenen', next: () => run(p, 'practice'), alt: { label: 'Terug naar ' + p.name, fn: () => { location.hash = '#/pais/' + p.id; } } };
      }
    });
  }
  /* Onderbroken oefening van een land hervatten (vanuit «Verder waar je was»). */
  function resume(session, d) { const p = get(d.id); if (p) run(p, d.what, session); else S.runSession(session, { desc: d }); }

  S.Mundo = { flagImg, search, list, get, meta, ns, nsFor, status, stamps, words, practice, quiz, finish, page, placePage, resume, PASS };
})(window.SPT);
