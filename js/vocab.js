/* Mijn woordenschat (#/woordenschat): alles wat in je herhaling staat (woorden, zinnen/oefeningen, werkwoorden),
   met sterk en zwak, filteren, zoeken, sorteren en details per item. Gebruikt alleen bestaande SRS-gegevens:
   d = volgende herhaling (dagnummer), i = interval (dagen), r = keer goed op rij, l = keer fout, s = toegevoegd, t = laatst geoefend,
   g/f = totaal goed/fout (pas geteld vanaf v1.12.0). */
(function (S) {
  'use strict';
  const { U, C } = S;
  const h = U.h;
  const st = () => S.Store.state;

  /* ---------- gegevens (zonder DOM, getest in tests/run.js) ---------- */
  const TYPES = { w: 'woord', x: 'zin / oefening', c: 'werkwoord' };
  const STATUS = { weak: ['🎯', 'zwak'], learning: [S.SRS.ICON.learning, 'aan het leren'], known: [S.SRS.ICON.known, 'bekend'], mastered: [S.SRS.ICON.mastered, 'beheerst'] };

  /** Sterkte 0–1: hoe lang je het al onthoudt (interval), min een straf voor fouten en voor lang niet herhaald. */
  function strength(c) {
    const today = U.dayIndex();
    const base = Math.min(1, Math.log(1 + Math.max(0, c.i || 0)) / Math.log(1 + 60));
    const late = Math.max(0, today - c.d); // dagen over tijd
    const latePen = late > 0 ? Math.min(0.3, late / Math.max(7, (c.i || 1) * 2) * 0.3) : 0;
    return U.clamp(base / (1 + 0.25 * (c.l || 0)) - latePen, 0, 1);
  }
  /** Zwak = je hebt het fout gehad en het zit nog niet vast (korter dan een week onthouden), of vaak fout. */
  function isWeak(c) { return ((c.l || 0) >= 1 && (c.i || 0) < 7) || ((c.l || 0) >= 4 && (c.i || 0) < 21); }
  function group(c) { return isWeak(c) ? 'weak' : c.i >= 21 ? 'mastered' : c.i >= 7 ? 'known' : 'learning'; }

  function unitInfo(u) { return { level: u.level, unitId: u.id, unitNo: C.unitsOf(u.level).indexOf(u) + 1, unitTitle: u.title, icon: u.icon }; }
  function fillBlank(s, a) { return String(s).replace(/_{2,}/, a || '…'); }
  /** Eén herhaalkaart als leesbaar item, of null als de lesstof niet (meer) bestaat. */
  function describe(id) {
    const card = st().srs[id]; if (!card) return null;
    const [type, a, b] = id.split('|');
    let it = null;
    if (type === 'w' && a === 'my') {
      const m = (st().myWords || {})[b]; if (!m || m.del) return null;
      it = { es: m.es, nl: m.nl, note: '', level: '', unitTitle: 'eigen woord', mine: true };
    } else if (type === 'w') {
      const u = C.get(a); const w = u && C.word(u, +b); if (!w) return null;
      it = { es: w.es, nl: w.nl, note: w.note, ...unitInfo(u) };
    } else if (type === 'x') {
      const u = C.get(a); const e = u && u.ex[+b]; if (!e) return null;
      const ans = e.o ? e.o[0] : e.a ? e.a[0] : '';
      if (e.t === 'cloze') it = { es: fillBlank(e.s, ans), nl: e.nl || '', q: e.s, answer: ans };
      else if (e.t === 'tr') it = { es: ans, nl: e.nl, alts: e.a.slice(1) };
      else if (e.t === 'order') it = { es: e.s, nl: e.nl || '' };
      else if (e.t === 'mc') it = { es: ans, nl: e.q, q: e.q, answer: ans };
      else if (e.t === 'match') it = { es: e.p.map(p => p[0]).join(' · '), nl: e.p.map(p => p[1]).join(' · ') };
      else return null;
      Object.assign(it, unitInfo(u), { kind: e.t, tag: e.tag || 'vocab', expl: e.x || '' });
    } else if (type === 'c') {
      const T = S.conj.TENSES[b]; if (!T || !S.conj.table(a, b)) return null;
      const info = S.conj.info(a) || {};
      it = { es: a, nl: (info.nl ? info.nl + ' · ' : '') + T.es, verb: a, tense: b, level: T.level || '' };
    } else return null;
    const grp = group(card);
    return { id, type, card, group: grp, strength: strength(card), ...it };
  }
  function all() { return Object.keys(st().srs).map(describe).filter(Boolean); }
  function counts(list) {
    const out = { total: list.length, weak: 0, learning: 0, known: 0, mastered: 0, w: 0, x: 0, c: 0 };
    list.forEach(x => { out[x.group]++; out[x.type]++; });
    return out;
  }
  const SORTS = {
    weak: ['Zwakste eerst', (a, b) => a.strength - b.strength || (b.card.l || 0) - (a.card.l || 0)],
    strong: ['Sterkste eerst', (a, b) => b.strength - a.strength || (a.card.l || 0) - (b.card.l || 0)],
    errors: ['Meeste fouten', (a, b) => (b.card.l || 0) - (a.card.l || 0) || a.strength - b.strength],
    recent: ['Laatst geoefend', (a, b) => (b.card.t || b.card.s || 0) - (a.card.t || a.card.s || 0)],
    next: ['Eerstvolgende herhaling', (a, b) => a.card.d - b.card.d || a.strength - b.strength],
    az: ['A–Z', (a, b) => S.check.bare(a.es).localeCompare(S.check.bare(b.es))]
  };
  /** f = { type: 'all'|'w'|'x'|'c', group: 'all'|'weak'|…, level: 'all'|'A1'|…, q, sort } */
  function filter(list, f) {
    const b = S.check.bare(f.q || '');
    let out = list.filter(x => (f.type === 'all' || !f.type || x.type === f.type) && (f.group === 'all' || !f.group || x.group === f.group) && (f.level === 'all' || !f.level || x.level === f.level));
    if (b) out = out.filter(x => S.check.bare(x.es + ' ' + x.nl).includes(b));
    return out.sort((SORTS[f.sort] || SORTS.weak)[1]);
  }

  /** Een voorbeeldzin met het woord: eerst uit de dialoog, oefeningen en leestekst van de eigen unit, dan uit de rest. */
  function example(item) {
    if (item.type !== 'w') return null;
    const keys = String(item.es).split('/').map(s => S.check.bare(s.replace(/…|\.\.\.|[¿?¡!]/g, '').replace(/^(el|la|los|las|un|una)\s+/i, '')).trim()).filter(k => k.length >= 2);
    if (!keys.length) return null;
    const has = s => { const t = ' ' + S.check.bare(s).replace(/[^\p{L}\s]/gu, ' ') + ' '; return keys.some(k => t.includes(' ' + k + ' ')); };
    const from = u => {
      const out = [];
      ((u.dialogue && u.dialogue.lines) || []).forEach(l => out.push([l[1], l[2] || '']));
      u.ex.forEach(e => { if (e.t === 'cloze' && e.nl) out.push([fillBlank(e.s, e.o ? e.o[0] : e.a && e.a[0]), e.nl]); else if (e.t === 'order') out.push([e.s, e.nl || '']); else if (e.t === 'tr') out.push([e.a[0], e.nl]); });
      return out;
    };
    const own = item.unitId ? C.get(item.unitId) : null;
    const pools = own ? [own].concat(C.all().filter(u => u !== own)) : C.all();
    for (const u of pools) {
      const hit = from(u).filter(([es]) => es && has(es) && S.check.bare(es) !== S.check.bare(item.es)).sort((x, y) => x[0].length - y[0].length)[0];
      if (hit) return { es: hit[0], nl: hit[1] };
    }
    return null;
  }

  /* ---------- scherm ---------- */
  const F = { type: 'all', group: 'all', level: 'all', q: '', sort: 'weak' }; // blijft bewaard zolang de app open is
  const PAGE = 60;

  function fmtDay(day) {
    const t = U.dayIndex(); const n = day - t;
    if (n <= 0) return n < 0 ? 'vandaag (' + U.plural(-n, 'dag', 'dagen') + ' over tijd)' : 'vandaag';
    if (n === 1) return 'morgen';
    const d = new Date((day + 0.5) * 864e5);
    return 'over ' + n + ' dagen · ' + d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' });
  }
  function fmtAgo(ms) {
    if (!ms) return '—';
    const n = U.dayIndex() - U.dayIndex(new Date(ms));
    const d = new Date(ms).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: new Date(ms).getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined });
    return (n <= 0 ? 'vandaag' : n === 1 ? 'gisteren' : n + ' dagen geleden') + ' · ' + d;
  }
  function sbar(fr) {
    const col = fr < 0.25 ? 'var(--bad)' : fr < 0.5 ? 'var(--gold)' : fr < 0.75 ? 'var(--blue)' : 'var(--teal)';
    return h('div', { class: 'voc-sbar', title: 'Sterkte ' + Math.round(fr * 100) + '%' }, h('i', { style: { width: Math.max(4, Math.round(fr * 100)) + '%', background: col } }));
  }
  function practice(ids, title) {
    const ses = S.Gen.reviewSession(ids.length, ids);
    if (!ses.items.length) { S.toast('Niets om te oefenen'); return; }
    ses.title = title || 'Gericht oefenen';
    S.runSession(ses);
  }

  function details(x) {
    const c = x.card;
    const fact = (k, v) => h('div', { class: 'voc-fact' }, h('span', { class: 'muted small' }, k), h('b', null, v));
    const facts = h('div', { class: 'voc-facts' },
      fact('Status', STATUS[x.group][0] + ' ' + STATUS[x.group][1]),
      fact('Sterkte', Math.round(x.strength * 100) + '%'),
      fact('Goed op rij', String(c.r || 0)),
      fact('Keer fout', String(c.l || 0)),
      c.g != null || c.f != null ? fact('Totaal goed / fout', (c.g || 0) + ' / ' + (c.f || 0) + ' (' + Math.round((c.g || 0) / Math.max(1, (c.g || 0) + (c.f || 0)) * 100) + '%)') : null,
      fact('Onthoud je nu', U.plural(c.i || 0, 'dag', 'dagen')),
      fact('Laatst geoefend', c.t ? fmtAgo(c.t) : 'nog niet herhaald'),
      fact('Volgende herhaling', fmtDay(c.d)),
      fact('In je herhaling sinds', fmtAgo(c.s)));
    const box = h('div', { class: 'voc-detail' });
    // uitspraak
    const say = x.type === 'x' && x.kind === 'match' ? null : x.es;
    if (say && S.Speech.canSpeak()) box.append(h('div', { class: 'row gap wrap voc-say' }, S.Lesson.speakBtn(say), S.Lesson.speakBtn(say, { slow: true }), h('span', { class: 'small muted' }, 'Uitspraak: normaal en langzaam')));
    if (x.note) box.append(h('p', { class: 'small' }, '💡 ' + x.note));
    if (x.type === 'x') {
      if (x.kind === 'mc' || x.kind === 'cloze') box.append(h('p', { class: 'small' }, h('span', { class: 'muted' }, x.kind === 'mc' ? 'Vraag: ' : 'Opgave: '), h('span', { lang: x.kind === 'cloze' ? 'es' : null }, x.q), h('br'), h('span', { class: 'muted' }, 'Antwoord: '), h('b', { lang: 'es' }, x.answer)));
      if (x.alts && x.alts.length) box.append(h('p', { class: 'small' }, h('span', { class: 'muted' }, 'Ook goed: '), h('span', { lang: 'es' }, x.alts.join(' · '))));
      if (x.expl) box.append(h('p', { class: 'small' }, '💡 ' + x.expl));
      if (x.tag && x.tag !== 'vocab') box.append(h('p', { class: 'small muted' }, 'Onderwerp: ' + C.tag(x.tag)));
    }
    if (x.type === 'c' && S.Lesson.conjTable) box.append(S.Lesson.conjTable({ conj: { verb: x.verb, tense: x.tense, person: -1 } }));
    const ex = example(x);
    if (ex) box.append(h('div', { class: 'voc-example' }, h('span', { class: 'muted small' }, 'Voorbeeldzin'), h('div', { class: 'row gap' }, S.Lesson.speakBtn(ex.es), h('div', { class: 'grow' }, h('div', { lang: 'es' }, h('i', null, ex.es)), ex.nl ? h('small', { class: 'muted' }, ex.nl) : null))));
    box.append(facts);
    box.append(h('div', { class: 'row gap wrap voc-actions' },
      h('button', { class: 'btn primary small', type: 'button', onclick: () => practice([x.id], 'Oefen: ' + x.es.slice(0, 30)) }, '🔁 Nu oefenen'),
      x.unitId ? h('a', { class: 'btn ghost small', href: '#/unit/' + x.unitId }, x.icon + ' Naar de unit') : null));
    return box;
  }
  function row(x) {
    const sub = x.mine ? 'eigen woord' : x.type === 'c' ? 'werkwoord' + (x.level ? ' · ' + x.level : '') : (x.level + '.' + x.unitNo + ' ' + x.icon + ' ' + x.unitTitle) + (x.type === 'x' ? ' · zin' : '');
    const det = h('details', { class: 'voc-row g-' + x.group },
      h('summary', null,
        h('span', { class: 'voc-st', title: STATUS[x.group][1] }, STATUS[x.group][0]),
        h('div', { class: 'grow' },
          h('div', { class: 'voc-es', lang: 'es' }, x.es),
          h('div', { class: 'small voc-nl' }, x.nl),
          h('small', { class: 'muted' }, sub + (x.card.l ? ' · ' + U.plural(x.card.l, 'keer', 'keer') + ' fout' : ''))),
        sbar(x.strength)));
    let filled = false;
    det.addEventListener('toggle', () => { if (det.open && !filled) { filled = true; det.append(details(x)); } });
    return det;
  }

  function page() {
    const wrap = h('div', { class: 'page voc-page' });
    const list = all(); const n = counts(list);
    wrap.append(h('a', { class: 'back', href: '#/perfil' }, '← Perfil'), h('h1', null, '📋 Mijn woordenschat'),
      h('p', { class: 'muted' }, 'Alles wat in je herhaling staat: ' + U.plural(n.w, 'woord', 'woorden') + ', ' + U.plural(n.x, 'zin of oefening', 'zinnen en oefeningen') + ' en ' + U.plural(n.c, 'werkwoordstijd', 'werkwoordstijden') + '. Tik op een regel voor details.'));
    if (!list.length) {
      wrap.append(h('div', { class: 'card' }, h('p', null, 'Nog niets geleerd. Na je eerste les staan je woorden en zinnen hier.'), h('a', { class: 'btn primary', href: '#/hoy' }, 'Naar Hoy')));
      return wrap;
    }
    // overzicht: tegels die ook als filter werken
    const tiles = h('div', { class: 'voc-tiles' });
    const weakIds = filter(list, { group: 'weak', sort: 'weak' }).map(x => x.id);
    const head = h('div', { class: 'card voc-sum' }, tiles,
      h('p', { class: 'small muted' }, 'Zwak = je had het fout en het zit nog niet vast. Sterkte hangt af van hoe lang je het al onthoudt en hoe vaak het fout ging.'),
      weakIds.length ? h('button', { class: 'btn primary wide', type: 'button', onclick: () => practice(weakIds.slice(0, 20), 'Zwakke woorden') }, '🎯 Oefen je zwakste ' + Math.min(20, weakIds.length)) : h('p', { class: 'small' }, '💪 Je hebt op dit moment geen zwakke woorden. ¡Muy bien!'));
    function drawTiles() {
      tiles.innerHTML = '';
      ['weak', 'learning', 'known', 'mastered'].forEach(g => tiles.append(h('button', { class: 'voc-tile g-' + g + (F.group === g ? ' on' : ''), type: 'button', onclick: () => { F.group = F.group === g ? 'all' : g; redraw(); } },
        h('b', null, n[g]), h('small', null, STATUS[g][0] + ' ' + STATUS[g][1]))));
    }
    // filters
    const q = h('input', { class: 'input', type: 'search', placeholder: '🔎 Zoek in je woorden en zinnen…', value: F.q, autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'es', oninput: () => { F.q = q.value; shown = PAGE; draw(); } });
    const sort = h('select', { class: 'input voc-sort', 'aria-label': 'Sorteren', onchange: () => { F.sort = sort.value; shown = PAGE; draw(); } }, Object.entries(SORTS).map(([k, v]) => h('option', { value: k, selected: F.sort === k ? true : null }, v[0])));
    const chips = h('div', { class: 'voc-chips' });
    function chipRow(key, opts) {
      return h('div', { class: 'row gap wrap' }, opts.map(([id, label]) => h('button', { class: 'chip toggle' + (F[key] === id ? ' on' : ''), type: 'button', onclick: () => { F[key] = id; redraw(); } }, label)));
    }
    const levels = [...new Set(list.map(x => x.level).filter(Boolean))].sort();
    function drawChips() {
      chips.innerHTML = '';
      chips.append(...[
        chipRow('type', [['all', 'Alles'], ['w', '📚 Woorden (' + n.w + ')'], ['x', '💬 Zinnen (' + n.x + ')'], ['c', '🔤 Werkwoorden (' + n.c + ')']]),
        chipRow('group', [['all', 'Alle'], ['weak', '🎯 Zwak'], ['learning', STATUS.learning[0] + ' Aan het leren'], ['known', STATUS.known[0] + ' Bekend'], ['mastered', STATUS.mastered[0] + ' Beheerst']]),
        levels.length > 1 ? chipRow('level', [['all', 'Alle niveaus']].concat(levels.map(L => [L, L]))) : null].filter(Boolean));
    }
    const out = h('div', { class: 'voc-list' });
    const foot = h('div', { class: 'voc-foot' });
    let shown = PAGE;
    function draw() {
      const res = filter(list, F);
      out.innerHTML = ''; foot.innerHTML = '';
      if (!res.length) out.append(h('p', { class: 'muted center' }, 'Niets gevonden met deze filters.'));
      res.slice(0, shown).forEach(x => out.append(row(x)));
      foot.append(h('p', { class: 'small muted center' }, res.length > shown ? `${shown} van ${res.length.toLocaleString('nl-NL')} getoond` : U.plural(res.length, 'item', 'items')));
      if (res.length > shown) foot.append(h('button', { class: 'btn ghost wide', type: 'button', onclick: () => { shown += PAGE * 2; draw(); } }, 'Toon meer'));
      if (res.length) foot.append(h('button', { class: 'btn ghost wide', type: 'button', onclick: () => practice(res.slice(0, 20).map(x => x.id), 'Gericht oefenen') }, '🔁 Oefen de eerste ' + Math.min(20, res.length) + ' uit deze lijst'));
    }
    function redraw() { shown = PAGE; drawTiles(); drawChips(); draw(); }
    wrap.append(head, h('div', { class: 'card voc-filters' }, h('div', { class: 'voc-qrow' }, q, sort), chips), out, foot);
    redraw();
    return wrap;
  }

  S.Vocab = { page, all, describe, filter, counts, strength, isWeak, example, SORTS };
})(window.SPT);
