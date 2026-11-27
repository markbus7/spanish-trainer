/* Zwakke punten (#/zwak): alles wat nog niet goed gaat op één plek, met per onderdeel een knop om het meteen te oefenen.
   - Grammatica: onderwerpen (tags) met minder dan 80% goed, of die in de laatste 30 dagen ≥2× misgingen bij Lupe of in oefeningen.
   - Woorden, zinnen en werkwoorden: de 🎯 zwakke kaarten uit de herhaling (S.Vocab.isWeak).
   Gebruikt alleen bestaande gegevens (state.tags, state.srs, state.lupe); niets nieuws om te bewaren. */
(function (S) {
  'use strict';
  const { U, C } = S;
  const h = U.h;
  const st = () => S.Store.state;
  const PCT = 0.8, MIN = 3;

  /* ---------- gegevens (zonder DOM, getest in tests/run.js) ---------- */
  /** Zwakke grammatica-onderwerpen, zwakste eerst. */
  function topics(now = Date.now()) {
    const tags = st().tags || {};
    const rep = S.Mistakes ? S.Mistakes.report(30, now) : { topics: [], exTopics: [] };
    const lupe = {}, exN = {}, last = {};
    rep.topics.forEach(t => { lupe[t.tag] = t.n; const e = t.ex[0]; if (e) last[t.tag] = { wrong: e.w, right: e.c, t: e.t, src: 'lupe' }; });
    rep.exTopics.forEach(t => { exN[t.tag] = t.n; const e = t.ex[0]; if (e && (!last[t.tag] || e.t > last[t.tag].t)) last[t.tag] = { wrong: e.dk ? '' : e.u, right: e.a, q: e.q, t: e.t, src: 'ex' }; });
    const keys = new Set(Object.keys(tags).concat(Object.keys(lupe), Object.keys(exN)));
    const out = [];
    keys.forEach(tag => {
      if (!tag || tag === 'vocab' || tag === 'other') return;
      const v = tags[tag] || { ok: 0, no: 0 }, n = v.ok + v.no, pct = n ? v.ok / n : 0;
      const lowPct = n >= MIN && pct < PCT, recent = (lupe[tag] || 0) >= 2 || (exN[tag] || 0) >= 2;
      if (!lowPct && !recent) return;
      const unit = uitlegUnit(tag);
      out.push({ tag, label: C.tag(tag), ok: v.ok, n, pct: n ? pct : null, lupe: lupe[tag] || 0, ex: exN[tag] || 0, unit, last: last[tag] || null,
        // hoe erg: weinig goed weegt het zwaarst, recente fouten tellen mee
        score: (n ? 1 - pct : 0.5) + Math.min(0.5, ((lupe[tag] || 0) + (exN[tag] || 0)) * 0.05) });
    });
    return out.sort((a, b) => b.score - a.score || (a.pct == null ? 1 : a.pct) - (b.pct == null ? 1 : b.pct));
  }
  /** Waar het onderwerp wordt uitgelegd: de eerste unit die je al gehad hebt met ≥2 oefeningen erover (dus niet een B1-unit
      als je het in A1 leerde); anders de unit met de meeste oefeningen erover. */
  function uitlegUnit(tag) {
    const done = st().units || {};
    const first = C.all().find(u => done[u.id] && u.ex.filter(e => e.tag === tag).length >= 2);
    return first || (S.Mistakes ? S.Mistakes.unitsFor(tag)[0] || null : null);
  }
  /** Zwakke woorden, zinnen en werkwoorden uit de herhaling (zwakste eerst). */
  function words() {
    if (!S.Vocab) return [];
    return S.Vocab.filter(S.Vocab.all(), { group: 'weak', sort: 'weak' });
  }
  function summary(now) {
    const t = topics(now), w = words();
    return { topics: t, words: w, total: t.length + w.length, nw: w.filter(x => x.type === 'w').length, nx: w.filter(x => x.type === 'x').length, nc: w.filter(x => x.type === 'c').length };
  }

  /* ---------- oefensessies ---------- */
  /** Oefeningen voor deze onderwerpen (ook uit de unit waar het wordt uitgelegd), plus zwakke kaarten. */
  function session(tags, wordIds = [], title = 'Zwakke punten') {
    const G = S.Gen;
    let items = tags.length ? S.Mistakes.practice(tags.filter(t => t !== 'conj'), []).items : [];
    if (tags.includes('conj')) items = items.concat(G.weakTraining(['conj']).items.filter(i => i.conj).slice(0, 8));
    if (items.length > 15) items = U.sample(items, 15);
    const ids = wordIds.filter(id => st().srs[id]);
    if (ids.length) items = items.concat(G.reviewSession(ids.length, ids).items);
    return { title, items: G.mix(U.shuffle(items)), mode: 'learn' };
  }
  function run(ses) {
    if (!ses.items.length) { S.toast('Nog geen oefeningen hiervoor. Kijk bij de uitleg in de les.'); return; }
    S.runSession(ses);
  }
  const practiceAll = sm => run(session(sm.topics.slice(0, 4).map(t => t.tag), sm.words.slice(0, 10).map(x => x.id), 'Al je zwakke punten'));
  const practiceTopic = t => run(session([t.tag], [], 'Oefen: ' + t.label));
  const practiceWords = (list, title) => { const ids = list.slice(0, 20).map(x => x.id); const ses = S.Gen.reviewSession(ids.length, ids); ses.title = title; ses.mode = 'review'; run(ses); };
  function openUitleg(u) {
    try { sessionStorage.setItem('spt.utab', 0); } catch (e) { /* */ }
    location.hash = '#/unit/' + u.id;
    setTimeout(() => { const p = document.querySelector('.tab-pane'), el = p && (p.closest('section') || p); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 300);
  }

  /* ---------- scherm ---------- */
  const pctTxt = p => Math.round(p * 100) + '%';
  function pbar(p) {
    const col = p < 0.5 ? 'var(--bad)' : p < 0.7 ? 'var(--gold)' : 'var(--blue)';
    return h('div', { class: 'zw-bar', title: pctTxt(p) + ' goed' }, h('i', { style: { width: Math.max(4, Math.round(p * 100)) + '%', background: col } }));
  }
  function topicRow(t) {
    const why = [];
    if (t.pct != null) why.push(t.ok + ' van ' + t.n + ' goed');
    if (t.lupe) why.push('🎭 ' + t.lupe + '× fout bij Lupe deze maand');
    if (t.ex) why.push('✏️ ' + t.ex + '× fout in oefeningen deze maand');
    const l = t.last;
    return h('div', { class: 'zw-topic' },
      h('div', { class: 'zw-top' },
        h('div', { class: 'grow' }, h('b', null, t.label), h('small', { class: 'muted' }, why.join(' · '))),
        t.pct != null ? h('div', { class: 'zw-pct' }, pbar(t.pct), h('b', null, pctTxt(t.pct))) : null),
      l && l.right ? h('div', { class: 'small zw-ex' }, h('span', { class: 'muted' }, 'Laatste fout: '),
        l.wrong ? [h('s', { lang: 'es' }, l.wrong), ' → '] : h('span', { class: 'muted' }, '(niet geweten) '), h('b', { lang: 'es' }, l.right)) : null,
      h('div', { class: 'row gap wrap zw-acts' },
        h('button', { class: 'btn primary small', type: 'button', onclick: () => practiceTopic(t) }, '🎯 Oefen dit'),
        t.unit ? h('button', { class: 'btn ghost small', type: 'button', onclick: () => openUitleg(t.unit) }, '📘 Uitleg · ' + t.unit.level + ' ' + t.unit.title) : null));
  }
  function page() {
    const wrap = h('div', { class: 'page zwak-page' });
    const sm = summary();
    wrap.append(h('a', { class: 'back', href: '#/hoy' }, '← Hoy'), h('h1', null, '🎯 Mijn zwakke punten'),
      h('p', { class: 'muted' }, 'Alles wat nog niet goed gaat, op één plek: grammatica-onderwerpen en woorden. Tik op 🎯 Oefen dit om meteen gericht te oefenen.'));
    if (!sm.total) {
      wrap.append(S.Tutor.coach({ es: '¡Muy bien! Por ahora no veo puntos débiles.', nl: 'Heel goed! Ik zie op dit moment geen zwakke punten.' }, { full: true }) || '',
        h('div', { class: 'card' }, h('p', null, '💪 Je hebt op dit moment geen zwakke punten.'),
          h('p', { class: 'small muted' }, 'Zodra iets een paar keer misgaat in een les, herhaling of gesprek met Lupe, zie je het hier, met een knop om het te oefenen.'),
          h('a', { class: 'btn primary wide', href: '#/hoy' }, 'Verder met je les')));
      return wrap;
    }
    const top = sm.topics[0];
    wrap.append(S.Tutor.coach(top ? { es: 'Practiquemos ' + (top.label.length < 40 ? '«' + top.label + '»' : 'esto') + ' un poco más.', nl: 'Laten we «' + top.label + '» nog wat oefenen.' }
      : { es: 'Repasemos estas palabras juntos.', nl: 'Laten we deze woorden samen herhalen.' }, { full: true }) || '');
    // één grote knop voor alles samen
    wrap.append(h('div', { class: 'card zw-all' },
      h('div', { class: 'zw-counts' },
        h('a', { class: 'zw-count', href: '#zw-gram', onclick: e => { e.preventDefault(); const el = wrap.querySelector('#zw-gram'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }, h('b', null, sm.topics.length), h('small', null, '🧩 grammatica')),
        h('a', { class: 'zw-count', href: '#zw-woord', onclick: e => { e.preventDefault(); const el = wrap.querySelector('#zw-woord'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } }, h('b', null, sm.words.length), h('small', null, '📚 woorden en zinnen'))),
      h('button', { class: 'btn primary wide', type: 'button', onclick: () => practiceAll(sm) }, '🎯 Oefen alles door elkaar'),
      h('p', { class: 'small muted' }, 'Een korte ronde met je ' + (sm.topics.length ? 'zwakste onderwerpen' : '') + (sm.topics.length && sm.words.length ? ' en ' : '') + (sm.words.length ? 'zwakste woorden' : '') + '. Of kies hieronder één onderdeel.')));
    // grammatica
    const gram = h('section', { class: 'sec', id: 'zw-gram' }, h('h2', { class: 'sec-title' }, '🧩 Grammatica'));
    if (sm.topics.length) gram.append(h('p', { class: 'small muted' }, 'Onderwerpen met minder dan 80% goed, of die de laatste tijd vaak misgingen. Zwakste bovenaan.'), h('div', { class: 'zw-topics' }, sm.topics.map(topicRow)));
    else gram.append(h('div', { class: 'card' }, h('p', { class: 'small' }, '💪 Geen zwakke grammatica-onderwerpen. ¡Muy bien!')));
    wrap.append(gram);
    // woorden
    const wsec = h('section', { class: 'sec', id: 'zw-woord' }, h('h2', { class: 'sec-title' }, '📚 Woorden, zinnen en werkwoorden'));
    if (sm.words.length) {
      const lines = [];
      if (sm.nw) lines.push(U.plural(sm.nw, 'woord', 'woorden'));
      if (sm.nx) lines.push(U.plural(sm.nx, 'zin', 'zinnen'));
      if (sm.nc) lines.push(U.plural(sm.nc, 'werkwoordstijd', 'werkwoordstijden'));
      const SHOW = 8;
      wsec.append(h('p', { class: 'small muted' }, lines.join(', ') + ' die je fout had en die nog niet vastzitten. Tik op een regel voor uitleg en een voorbeeldzin.'),
        h('div', { class: 'voc-list' }, sm.words.slice(0, SHOW).map(S.Vocab.row)),
        h('div', { class: 'row gap wrap zw-acts' },
          h('button', { class: 'btn primary', type: 'button', onclick: () => practiceWords(sm.words, 'Zwakke woorden') }, '🎯 Oefen ' + (sm.words.length > 20 ? 'de zwakste 20' : sm.words.length === 1 ? 'dit woord' : 'deze ' + sm.words.length)),
          sm.words.length > SHOW ? h('button', { class: 'btn ghost', type: 'button', onclick: () => S.Vocab.show('weak') }, 'Alle ' + sm.words.length + ' bekijken') : null));
    } else wsec.append(h('div', { class: 'card' }, h('p', { class: 'small' }, '💪 Geen zwakke woorden. ¡Muy bien!')));
    wrap.append(wsec);
    // meer
    wrap.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, 'Meer'),
      h('div', { class: 'row gap wrap' },
        h('a', { class: 'btn ghost', href: '#/rapport' }, '📋 Rapport van Lupe'),
        h('a', { class: 'btn ghost', href: '#/woordenschat' }, '📋 Al mijn woorden'),
        h('a', { class: 'btn ghost', href: '#/perfil' }, '📊 Mijn voortgang'))));
    return wrap;
  }

  /** Kaart voor Hoy: hoeveel zwakke punten, de zwakste genoemd, met Oefen nu + Bekijk. Null als er niets is. */
  function hoyCard() {
    const sm = summary(); if (!sm.total) return null;
    const names = sm.topics.slice(0, 2).map(t => t.label);
    const parts = [];
    if (sm.topics.length) parts.push(U.plural(sm.topics.length, 'onderwerp', 'onderwerpen'));
    if (sm.words.length) parts.push(U.plural(sm.words.length, 'woord', 'woorden'));
    return h('div', { class: 'card zw-hoy' },
      h('a', { class: 'zw-hoy-head', href: '#/zwak' },
        h('span', { class: 'zw-hoy-ic', 'aria-hidden': 'true' }, '🎯'),
        h('div', { class: 'grow' }, h('b', null, 'Je zwakke punten'), h('small', { class: 'muted' }, parts.join(' · ') + (names.length ? ' · vooral ' + names.join(', ') : ''))),
        h('span', { class: 'fold-chev', 'aria-hidden': 'true' }, '›')),
      h('div', { class: 'row gap wrap' },
        h('button', { class: 'btn primary', type: 'button', onclick: () => practiceAll(sm) }, '🎯 Oefen nu'),
        h('a', { class: 'btn ghost', href: '#/zwak' }, 'Bekijk wat en waarom')));
  }

  S.Weak = { topics, words, summary, session, page, hoyCard };
})(window.SPT);
