/* Uitbreiding «Op reis» (#/mundo, #/pais/<id>): een kaart met de landen van de doeltaal; per land klank, woorden en slang,
   oefenen en een paspoortstempel. Los van de basiscursus: geen SRS, geen dagplan, geen route.
   Lesstof: S.places + S.placeGroups (content/landen.js), kaart: S.MAPS[doeltaal] (content/kaarten/*.js).
   Voortgang: Store.state.places[id] = { v: eerste bezoek, n: keer geoefend, best: beste toetsscore 0–1, stamp: datum stempel }.
   Opnames per land in naamruimte 'pl-<id>' (tools/tts-texts.js); Speech.placeNs zet die tijdens een oefening. */
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
  const ns = p => 'pl-' + p.id;
  const prog = id => (st().places || {})[id] || null;
  function progOf(id) { const s = st(); s.places = s.places || {}; return s.places[id] || (s.places[id] = {}); }
  function status(id) { const p = prog(id); return !p ? 'new' : p.stamp ? 'stamp' : p.v ? 'seen' : 'new'; }
  function stamps() { return list().filter(p => status(p.id) === 'stamp').length; }
  function words(p) { return p.words.map(([es, nl, lab], i) => ({ id: 'pl|' + p.id + '|' + i, es, nl, note: lab && LABEL[lab] ? LABEL[lab][0] : '' })); }
  /* Woorden voor de oefeningen: de grove alleen als je ze herkent (Spaans → Nederlands), niet om zelf te kiezen. */
  function mcItem(w, all, dir) {
    const others = U.shuffle(all.filter(x => x.id !== w.id && x.nl !== w.nl && x.es !== w.es)).slice(0, 3);
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
      if (chunk.length >= 3) items.push({ kind: 'match', pairs: chunk.map(w => [w.es, w.nl]), tag: null, skill: 'vocab' });
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
    const M = S.MAPS && S.MAPS[S.course.target]; if (!M) return null;
    const NS = 'http://www.w3.org/2000/svg';
    const el = (tag, attrs, kids) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); (kids || []).forEach(c => c && e.append(c)); return e; };
    const go = id => { location.hash = '#/pais/' + id; };
    const svg = el('svg', { viewBox: `0 0 ${M.w} ${M.h}`, class: 'mundo-map', role: 'img', 'aria-label': 'Kaart van de Spaanstalige landen' });
    svg.append(el('rect', { x: 0, y: 0, width: M.w, height: M.h, class: 'sea', rx: 18 }));
    svg.append(el('path', { d: M.bg, class: 'land' }));
    const shapes = el('g'), lines = el('g'), pins = el('g');
    list().forEach(p => {
      const c = M.c[p.id], s = status(p.id);
      if (c && c.box) shapes.append(el('rect', { x: c.box[0], y: c.box[1], width: c.box[2], height: c.box[3], rx: 10, class: 'inset' }));
      if (c) { const sh = el('path', { d: c.d, class: 'cty ' + s }); sh.addEventListener('click', () => go(p.id)); shapes.append(sh); }
      const [x, y] = p.pin || (c ? c.p : [0, 0]);
      if (p.line && c) lines.append(el('line', { x1: x, y1: y, x2: c.p[0], y2: c.p[1], class: 'lead' }));
      const im = el('image', { x: x - 10, y: y - 7.5, width: 20, height: 15, href: flagSrc(p), preserveAspectRatio: 'xMidYMid slice', class: 'pin-flag' });
      im.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', flagSrc(p));
      const g = el('g', { class: 'pin ' + s, tabindex: 0, role: 'link', 'aria-label': p.name }, [el('circle', { cx: x, cy: y, r: 15 }), im, el('rect', { x: x - 10, y: y - 7.5, width: 20, height: 15, rx: 2, class: 'pin-edge' })]);
      if (s === 'stamp') { const ok = el('text', { x: x + 11, y: y - 10, 'text-anchor': 'middle', 'dominant-baseline': 'central', class: 'pin-ok' }); ok.textContent = '✓'; g.append(el('circle', { cx: x + 11, cy: y - 10, r: 7, class: 'pin-okbg' }), ok); }
      g.addEventListener('click', () => go(p.id));
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(p.id); } });
      pins.append(g);
    });
    svg.append(shapes, lines, pins);
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
      h('p', { class: 'muted' }, 'Je basiscursus blijft neutraal Latijns-Amerikaans Spaans. Hier ga je zelf op bezoek: tik op een land en hoor hoe het Spaans daar klinkt, met de typische woorden en slang. Wat je hier oefent, komt niet in je gewone herhaling.'));
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
    const neutral = p.voice !== 'MX';
    wrap.append(h('a', { class: 'back', href: '#/mundo' }, '← Kaart'),
      h('div', { class: 'pl-hero card' },
        h('div', { class: 'pl-flag' }, flagImg(p)),
        h('div', { class: 'grow' },
          h('div', { class: 'eyebrow' }, 'Op reis · ' + p.city),
          h('h1', null, p.name),
          h('p', { class: 'muted small' }, p.speakers + ' Spaanssprekers'),
          h('p', null, p.intro),
          h('div', { class: 'pl-hello' }, hereBtn(p, p.hello[0], 'Luister'), h('span', null, h('b', { lang: 'es' }, p.hello[0]), h('small', { class: 'muted' }, p.hello[1]))))));
    wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, '👂 Hoe klinkt het?'),
      neutral ? h('p', { class: 'small muted' }, 'Vergelijk: ', h('b', null, '🔊 ' + p.name), ' is een stem van hier, ', h('b', null, '🔊 Neutraal'), ' is de stem van je basiscursus.') : null,
      (p.sounds || []).map(([t, x, es, nl]) => h('div', { class: 'card pl-sound' },
        h('b', null, t), h('p', { class: 'small' }, x),
        h('div', { class: 'pl-ex' }, h('div', { class: 'grow' }, h('div', { class: 'es', lang: 'es' }, es), h('div', { class: 'small muted' }, nl))),
        h('div', { class: 'row gap wrap' }, hereBtn(p, es), neutral ? h('button', { class: 'btn small ghost', type: 'button', onclick: () => S.Speech.say(es, { clipNs: null }) }, '🔊 Neutraal') : null)))));
    const ws = words(p);
    wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, '💬 Woorden en slang'),
      h('p', { class: 'small muted' }, h('span', { class: 'lab inf' }, 'inf'), ' = informeel, onder vrienden. ', h('span', { class: 'lab grof' }, 'grof'), ' = alleen om te herkennen, niet zelf zeggen.'),
      h('div', { class: 'card word-list' }, p.words.map(([es, nl, lab], i) => h('div', { class: 'word-row' },
        h('button', { class: 'icon-btn speak', type: 'button', 'aria-label': 'Beluister', onclick: e => { e.stopPropagation(); say(p, ws[i].es); } }, '🔊'),
        h('div', { class: 'grow' }, h('b', { lang: 'es' }, es), h('span', null, nl)),
        lab && LABEL[lab] ? h('span', { class: 'lab ' + LABEL[lab][1] }, LABEL[lab][1]) : null)))));
    if (p.fact) wrap.append(h('div', { class: 'card pl-fact' }, h('b', null, '💡 Wist je dat?'), h('p', null, p.fact)));
    const unit = p.unit && S.C.get(p.unit);
    wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, '🎯 Oefenen'),
      h('div', { class: 'card pl-act' },
        h('button', { class: 'btn primary wide', type: 'button', onclick: () => run(p, 'practice') }, '🃏 Woorden en slang oefenen'),
        h('button', { class: 'btn wide', type: 'button', onclick: () => run(p, 'quiz') }, g.stamp ? '🛂 Toets opnieuw doen' : '🛂 Haal je stempel (' + QUIZ_N + ' vragen)'),
        h('p', { class: 'small muted' }, g.stamp ? 'Stempel gehaald op ' + new Date(g.stamp).toLocaleDateString(S.LOC, { day: 'numeric', month: 'long' }) + '. Beste score: ' + Math.round((g.best || 0) * 100) + '%.'
          : 'Haal ' + Math.round(PASS * 100) + '% of meer voor een stempel in je paspoort.' + (g.best ? ' Je beste score tot nu toe: ' + Math.round(g.best * 100) + '%.' : '')),
        unit ? h('a', { class: 'btn ghost wide', href: '#/unit/' + unit.id }, unit.icon + ' Meer in de route: B2 · ' + unit.title) : null)));
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

  S.Mundo = { flagImg, list, get, status, stamps, words, practice, quiz, finish, page, placePage, resume, PASS };
})(window.SPT);
