/* Woordenboek: zoeken in alle woorden van de lessen en eigen woorden toevoegen aan de herhaling.
   Eigen woorden staan in state.myWords ({ sleutel: { es, nl, t, del } }); in de herhaling heten ze 'w|my|<sleutel>'.
   Verwijderde eigen woorden blijven als { del: true } staan, zodat synchroniseren ze niet terugbrengt. */
(function (S) {
  'use strict';
  const { U, C } = S;
  const h = U.h;
  const st = () => S.Store.state;

  /* ---------- eigen woorden (zonder DOM, getest in tests/run.js) ---------- */
  function mine() {
    const db = st().myWords || {};
    return Object.keys(db).filter(k => !db[k].del).map(k => ({ es: db[k].es, nl: db[k].nl, note: '', id: 'w|my|' + k, unit: 'my', key: k, t: db[k].t }))
      .sort((a, b) => (b.t || 0) - (a.t || 0));
  }
  function addMine(es, nl) {
    es = String(es || '').trim(); nl = String(nl || '').trim();
    if (!es || !nl) return null;
    const db = st().myWords || (st().myWords = {});
    const dup = Object.keys(db).find(k => !db[k].del && S.check.bare(db[k].es) === S.check.bare(es));
    if (dup) return { dup: true, id: 'w|my|' + dup };
    const key = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    db[key] = { es, nl, t: Date.now() };
    S.SRS.add('w|my|' + key, 0); // meteen vandaag in de herhaling
    return { id: 'w|my|' + key };
  }
  function removeMine(key) {
    const db = st().myWords || {};
    if (!db[key]) return;
    db[key] = { del: true, t: Date.now() };
    delete st().srs['w|my|' + key];
  }
  /** Een eigen woord als herhaalkaart; afleiders komen uit je andere eigen woorden en de lessen. */
  function mineWord(key) {
    const m = (st().myWords || {})[key];
    return m && !m.del ? { es: m.es, nl: m.nl, note: '', id: 'w|my|' + key, unit: 'my' } : null;
  }
  function distractorUnit() {
    const pool = mine().map(w => [w.es, w.nl]);
    const all = C.all().flatMap(u => u.vocab);
    return { id: 'my', vocab: pool.concat(U.sample(all, 30)) };
  }

  /* ---------- zoeken ---------- */
  let INDEX = null;
  function index() {
    if (INDEX) return INDEX;
    INDEX = [];
    C.all().forEach((u, ui) => C.words(u).forEach(w => INDEX.push({ ...w, level: u.level, unitNo: C.unitsOf(u.level).indexOf(u) + 1, unitTitle: u.title, icon: u.icon, order: ui })));
    return INDEX;
  }
  function search(q, filter) {
    const b = S.check.bare(q || '');
    let list = filter === 'my' ? mine() : index();
    if (filter && filter !== 'my' && filter !== 'all') list = list.filter(w => w.level === filter);
    if (!b) return list;
    const scored = [];
    list.forEach(w => {
      const es = S.check.bare(w.es), nl = S.check.bare(w.nl);
      const sc = es === b || nl === b ? 0 : es.startsWith(b) || nl.startsWith(b) ? 1 : (' ' + es).includes(' ' + b) || (' ' + nl).includes(' ' + b) ? 2 : es.includes(b) || nl.includes(b) ? 3 : -1;
      if (sc >= 0) scored.push([sc, w]);
    });
    return scored.sort((x, y) => x[0] - y[0]).map(x => x[1]);
  }

  /* ---------- scherm ---------- */
  const STATUS = { new: ['', 'nog niet geleerd'], learning: ['🌱', 'aan het leren'], known: ['✓', 'bekend'], mastered: ['⭐', 'beheerst'] };
  function page() {
    const wrap = h('div', { class: 'page words-page' });
    wrap.append(h('a', { class: 'back', href: '#/practica' }, '← Práctica'), h('h1', null, '📚 Woordenboek'),
      h('p', { class: 'muted' }, 'Zoek in alle ' + index().length.toLocaleString('nl-NL') + ' woorden uit de lessen, in het Spaans of het Nederlands. Eigen woorden komen in je herhaling.'));

    // eigen woord toevoegen
    const esIn = h('input', { class: 'input', lang: 'es', placeholder: 'Spaans, bijv. la chamba', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' });
    const nlIn = h('input', { class: 'input', placeholder: 'Nederlands, bijv. het werk (Mexico)', autocomplete: 'off' });
    const addBtn = h('button', { class: 'btn primary', type: 'submit' }, '➕ Toevoegen');
    const form = h('form', { class: 'form words-add', onsubmit: e => {
      e.preventDefault();
      const r = addMine(esIn.value, nlIn.value);
      if (!r) { S.toast('Vul het Spaanse woord én de vertaling in'); return; }
      if (r.dup) { S.toast('Dit woord staat al in je eigen woorden'); return; }
      S.Store.save(); S.toast('➕ «' + esIn.value.trim() + '» staat in je herhaling');
      esIn.value = nlIn.value = ''; esIn.focus();
      filter = 'my'; drawChips(); draw();
    } },
      h('p', { class: 'small muted' }, 'Hoorde of las je een woord dat je wilt onthouden? Zet het erin, dan komt het terug in je herhaling.'),
      h('div', { class: 'words-add-row' }, esIn, nlIn, addBtn), S.Lesson.accentBar(esIn));

    // zoeken
    const q = h('input', { class: 'input words-q', type: 'search', placeholder: '🔎 Zoek een woord…', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'es', oninput: () => draw() });
    let filter = 'all';
    const chips = h('div', { class: 'row gap wrap' });
    function drawChips() {
      chips.innerHTML = '';
      const opts = [['all', 'Alles']].concat(C.LEVELS.filter(L => C.available(L.id)).map(L => [L.id, L.id]), [['my', 'Mijn woorden (' + mine().length + ')']]);
      opts.forEach(([id, label]) => chips.append(h('button', { class: 'chip toggle' + (filter === id ? ' on' : ''), type: 'button', onclick: () => { filter = id; drawChips(); draw(); } }, label)));
    }
    const out = h('div', { class: 'words-list' });
    const more = h('p', { class: 'small muted center' });
    const MAX = 80;
    function row(w) {
      const s = S.SRS.status(w.id), inSrs = S.SRS.has(w.id);
      const tail = w.unit === 'my'
        ? h('button', { class: 'icon-btn', type: 'button', title: 'Verwijderen', 'aria-label': 'Verwijderen', onclick: () => S.confirm('Woord verwijderen?', '«' + w.es + '» verdwijnt uit je eigen woorden en je herhaling.', 'Verwijderen', () => { removeMine(w.key); S.Store.save(); drawChips(); draw(); }) }, '🗑')
        : inSrs ? h('span', { class: 'words-st', title: STATUS[s][1] }, STATUS[s][0] || '🌱')
          : h('button', { class: 'btn ghost small', type: 'button', title: 'Zet in je herhaling', onclick: e => { S.SRS.add(w.id, 0); S.Store.save(); e.target.replaceWith(h('span', { class: 'words-st' }, '🌱')); S.toast('🔁 In je herhaling'); } }, '+ Leren');
      return h('div', { class: 'words-row' },
        S.Lesson.speakBtn(w.es),
        h('div', { class: 'grow' },
          h('div', null, h('b', { lang: 'es' }, w.es), w.note ? h('small', { class: 'muted' }, ' · ' + w.note) : null),
          h('div', { class: 'small' }, w.nl),
          h('small', { class: 'muted' }, w.unit === 'my' ? 'eigen woord' + (inSrs ? ' · ' + STATUS[s][1] : '') : w.level + '.' + w.unitNo + ' ' + w.icon + ' ' + w.unitTitle)),
        tail);
    }
    function draw() {
      const res = search(q.value, filter);
      out.innerHTML = '';
      if (!res.length) out.append(h('p', { class: 'muted center' }, filter === 'my' && !q.value ? 'Nog geen eigen woorden. Voeg er hierboven een toe.' : 'Niets gevonden.'));
      res.slice(0, MAX).forEach(w => out.append(row(w)));
      more.textContent = res.length > MAX ? `Eerste ${MAX} van ${res.length.toLocaleString('nl-NL')}. Typ meer letters om te zoeken.` : res.length === 1 ? '1 woord' : res.length ? res.length.toLocaleString('nl-NL') + ' woorden' : '';
    }
    drawChips(); draw();
    const addBox = h('details', { class: 'card words-add-box' }, h('summary', null, h('b', null, '➕ Eigen woord toevoegen')), form);
    wrap.append(h('div', { class: 'card words-search' }, q, chips), addBox, out, more);
    return wrap;
  }

  S.Words = { page, mine, addMine, removeMine, mineWord, distractorUnit, search };
})(window.SPT);
