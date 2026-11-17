/* Woordensprint met nieuwe woorden (#/woordtoets): snel veel woorden (en zinnen) van een heel niveau of een unit,
   ook van units die je nog niet gedaan hebt. Op tijd (2/5/10 min) of op aantal.
   Goed = meteen 🌳 bekend in je woordenschat (je ziet het pas over een week of twee terug),
   fout = vanaf vandaag 🌱 in je herhaling. Zo komt wat je al kent snel in de roulatie. */
(function (S) {
  'use strict';
  const { U, C } = S; const h = U.h;
  // interval (dagen) voor een goed antwoord op iets dat nog niet in je herhaling stond.
  // Alleen goed getypt (zonder hint) telt als bekend (>= 7 dagen); goed bij meerkeuze = aan het leren, over 3 dagen terug.
  const KNOWN = { type: 14, mc: 3 };
  const KEY = 'spt-woordtoets';
  const DEF = { mode: 'new', src: '', which: 'new', len: 'n50', form: 'type', what: 'w' };
  function prefs() { try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return Object.assign({}, DEF); } }
  function savePrefs(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* privévenster */ } }

  /** Het niveau waar je nu zit: van de eerste unit die nog niet af is. */
  function curLevel() {
    const st = S.Store.state.units || {};
    const u = C.all().find(x => !(st[x.id] && st[x.id].done));
    return (u || C.all()[C.all().length - 1]).level;
  }
  function units(src) { return C.get(src) ? [C.get(src)] : C.unitsOf(src); }
  /** Alle woorden uit de bron, elk Spaans woord één keer, met de unit erbij. */
  function pool(src, which) {
    const seen = new Set(), db = S.Store.state.srs;
    return units(src).flatMap(u => C.words(u).map(w => [w, u]))
      .filter(([w]) => w && w.es && !seen.has(w.es) && seen.add(w.es))
      .filter(([w]) => which !== 'new' || !db[w.id]);
  }
  /** Zinnen: de oefeningen van de units (meerkeuze, invullen, vertalen, volgorde). */
  const SENT = ['mc', 'cloze', 'tr', 'order'];
  function sentPool(src, which) {
    const db = S.Store.state.srs;
    return units(src).flatMap(u => u.ex.map((e, i) => [e, u, i])).filter(([e, u, i]) => SENT.includes(e.t) && (which !== 'new' || !db['x|' + u.id + '|' + i]));
  }
  const typed = e => e.t === 'tr' || (e.t === 'cloze' && !e.o);
  const sents = p => p.what === 'ws' ? sentPool(p.src, p.which).filter(([e]) => p.form !== 'type' || typed(e)) : [];
  const count = p => pool(p.src, p.which).length + sents(p).length;
  const FORMS = { fast: ['mc-es', 'mc-nl'], type: ['type'] };

  function session(p) {
    const max = p.len === 'all' ? 9999 : +p.len.slice(1) || 50;
    const ws = pool(p.src, p.which).map(([w, u]) => () => {
      const it = S.Gen.wordItem(w, U.pick(FORMS[p.form] || FORMS.type), u);
      it.wt = it.kind === 'type' ? KNOWN.type : KNOWN.mc; // zie recordItem in app.js
      return it;
    });
    const xs = sents(p).map(([e, u, i]) => () => {
      const it = S.Gen.normEx(e, u, i); if (!it) return null;
      it.wt = it.kind === 'type' ? KNOWN.type : KNOWN.mc;
      return it;
    });
    // ongeveer 1 zin op 3 woorden, zolang er zinnen zijn
    const nx = Math.min(xs.length, Math.round(Math.min(max, ws.length + xs.length) / 3)), nw = Math.min(ws.length, max - nx);
    const pick = U.sample(ws, nw).concat(U.sample(xs, Math.min(xs.length, max - nw)));
    const items = U.shuffle(pick).map(f => f()).filter(Boolean);
    const name = C.get(p.src) ? C.get(p.src).title : p.src;
    return { title: 'Woordensprint · ' + name, items: S.Gen.mix(items), mode: 'test' };
  }

  /** Samenvatting na afloop. t0 = begintijd, zodat we zien welke kaarten deze toets heeft toegevoegd. */
  function summary(sum, t0) {
    const db = S.Store.state.srs;
    let known = 0, learning = 0, wrongNew = 0; const wrong = [];
    (sum.items || []).forEach(it => {
      const c = it.srsId && db[it.srsId]; if (!c) return;
      if ((c.s || 0) >= t0) { if (c.i >= 7) known++; else if (c.i > 0) learning++; else { wrongNew++; wrong.push(it.srsId); } }
      else if ((c.t || 0) >= t0 && c.i === 0) wrong.push(it.srsId);
    });
    const pct = Math.round(sum.score * 100);
    const parts = ['Je had ' + sum.ok + ' van de ' + U.plural(sum.total, 'vraag', 'vragen') + ' goed (' + pct + '%).'];
    if (known) parts.push(U.plural(known, 'woord of zin staat', 'woorden en zinnen staan') + ' nu als ' + S.SRS.ICON.known + ' bekend in je woordenschat. Die zie je pas over twee weken terug.');
    if (learning) parts.push(U.plural(learning, 'ding herkende je', 'dingen herkende je') + ' bij meerkeuze: die staan als ' + S.SRS.ICON.learning + ' aan het leren en komen over 3 dagen terug om te typen.');
    if (wrongNew) parts.push(U.plural(wrongNew, 'nieuw woord of nieuwe zin gaat', 'nieuwe woorden en zinnen gaan') + ' vanaf vandaag ' + S.SRS.ICON.learning + ' in je herhaling.');
    const extra = { title: pct >= 90 ? '¡Excelente!' : pct >= 70 ? '¡Muy bien!' : '¡Buen trabajo!', emoji: '⚡', text: parts.join(' '),
      nextLabel: 'Klaar', next: () => { location.hash = '#/woordtoets'; } };
    if (wrong.length) extra.alt = { label: '🔁 Oefen de ' + Math.min(20, wrong.length) + ' foute nu', fn: () => {
      const ses = S.Gen.reviewSession(20, wrong.slice(0, 20)); ses.title = 'Foute woorden uit de sprint'; S.runSession(ses);
    } };
    return extra;
  }
  function start(p) {
    const ses = session(p);
    if (!ses.items.length) { S.toast(p.which === 'new' ? 'Alles hiervan staat al in je herhaling. Kies «Alles».' : 'Geen woorden gevonden'); return; }
    const t0 = Date.now();
    S.runSession(ses, { desc: { kind: 'woordtoets', t0, mark: 'sprint' }, onFinish: sum => summary(Object.assign({ items: ses.items }, sum), t0) });
  }
  /** Hervatten na verversen: de rij komt uit de pauze, de samenvatting kan nog steeds via t0. */
  function resume(session, d) {
    S.runSession(session, { desc: d, onFinish: sum => summary(Object.assign({ items: S.Paused.unpack(session.resume).queue.filter(it => !it.orig) }, sum), d.t0) });
  }

  function chipRow(opts, get, set) {
    const row = h('div', { class: 'chips wrap' });
    const draw = () => { row.innerHTML = ''; opts.forEach(([v, t]) => row.append(h('button', { class: 'chip toggle' + (get() === v ? ' on' : ''), type: 'button', 'aria-pressed': String(get() === v), onclick: () => { set(v); } }, t))); };
    draw(); row.redraw = draw; return row;
  }

  function page() {
    const p = prefs();
    if (!p.src || !(C.get(p.src) || C.available(p.src))) p.src = curLevel();
    if (!/^(n\d+|all)$/.test(p.len)) p.len = DEF.len;
    if (!FORMS[p.form]) p.form = DEF.form;
    const wrap = h('div', { class: 'page wt-page' });
    if (p.mode !== 'quick') p.mode = 'new';
    wrap.append(h('a', { class: 'back', href: '#/practica' }, '← Práctica'), h('h1', null, '⚡ Woordensprint'),
      h('p', { class: 'muted' }, 'Kies eerst wat voor sprint je wilt doen.'));

    const all = [];
    const redraw = () => { savePrefs(p); all.forEach(f => f()); };
    const set = k => v => { p[k] = v; redraw(); };
    const lbl = t => h('div', { class: 'wt-lbl' }, t);

    // bron
    const lvls = C.LEVELS.filter(L => C.available(L.id));
    const srcChips = chipRow(lvls.map(L => [L.id, 'Heel ' + L.id]), () => p.src, set('src'));
    const unitSel = h('select', { class: 'input wt-unit', 'aria-label': 'Kies een unit', onchange: () => { if (unitSel.value) { p.src = unitSel.value; redraw(); } } },
      h('option', { value: '' }, 'Of kies één unit…'),
      lvls.map(L => h('optgroup', { label: L.id }, C.unitsOf(L.id).map((u, i) => h('option', { value: u.id }, L.id + '.' + (i + 1) + ' ' + u.icon + ' ' + u.title)))));
    const srcInfo = h('p', { class: 'small muted' });
    all.push(() => {
      srcChips.redraw(); unitSel.value = C.get(p.src) ? p.src : '';
      const tot = pool(p.src, 'all').length, nw = pool(p.src, 'new').length, st = sentPool(p.src, 'all').length, sn = sentPool(p.src, 'new').length;
      srcInfo.textContent = (C.get(p.src) ? C.get(p.src).icon + ' ' + C.get(p.src).title : U.plural(units(p.src).length, 'unit', 'units') + ' van ' + p.src) +
        ' · ' + U.plural(tot, 'woord', 'woorden') + ' (' + nw + ' nieuw) · ' + U.plural(st, 'zin', 'zinnen') + ' (' + sn + ' nieuw)';
    });

    const whatChips = chipRow([['w', 'Woorden'], ['ws', 'Woorden + zinnen']], () => p.what, set('what'));
    const whichChips = chipRow([['new', 'Alleen nieuw'], ['all', 'Alles']], () => p.which, set('which'));
    const lenChips = chipRow([['n25', '25'], ['n50', '50'], ['n100', '100'], ['all', 'Alles']], () => p.len, set('len'));
    const formChips = chipRow([['type', '✍️ Typen'], ['fast', '⚡ Meerkeuze']], () => p.form, set('form'));
    const formInfo = h('p', { class: 'small muted wt-forminfo' });
    const go = h('button', { class: 'btn primary wide wt-go', type: 'button', onclick: () => start(p) });
    all.push(() => {
      whatChips.redraw(); whichChips.redraw(); lenChips.redraw(); formChips.redraw();
      formInfo.textContent = p.form === 'type' ? 'Je typt het Spaans bij de Nederlandse betekenis. Goed getypt telt als bekend.' : 'Sneller, maar herkennen is nog geen kennen: goed = aan het leren, en het komt over 3 dagen terug om te typen.';
      const avail = count(p), n = p.len === 'all' ? avail : Math.min(+p.len.slice(1), avail);
      go.disabled = !n;
      go.textContent = !n ? 'Hier is niets nieuws meer' : '▶ Start · ' + U.plural(n, 'vraag', 'vragen') + ' · ±' + Math.max(1, Math.round(n * (p.form === 'fast' ? 5 : 10) / 60)) + ' min';
    });
    // eerst kiezen: snel met wat je al hebt, of nieuwe woorden
    const modes = h('div', { class: 'wt-modes' });
    const quickBox = h('div', { class: 'card wt-card' },
      h('p', null, '30 woorden uit de units waar je al mee bezig bent, tegen de klok: 2 minuten. Goed of fout telt mee in je herhaling.'),
      h('button', { class: 'btn primary wide', type: 'button', onclick: () => S.runSession(S.Gen.sprint(30), { desc: { kind: 'plain', mark: 'sprint' } }) }, '▶ Start · 2 minuten'));
    const quickSec = h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, 'Snelle sprint'), quickBox);
    const newSecs = h('div');
    all.push(() => {
      modes.innerHTML = '';
      [['quick', '⏱️', 'Snelle sprint', 'Woorden die je al hebt · 2 minuten'], ['new', '🆕', 'Nieuwe woorden', 'Kies niveau of unit en hoeveel · ook wat je nog niet deed']].forEach(([v, ic, t, sub]) =>
        modes.append(h('button', { class: 'wt-mode' + (p.mode === v ? ' on' : ''), type: 'button', 'aria-pressed': String(p.mode === v), onclick: () => { p.mode = v; redraw(); } },
          h('span', { class: 'wt-mi' }, ic), h('b', null, t), h('small', null, sub))));
      quickSec.hidden = p.mode !== 'quick'; newSecs.hidden = p.mode !== 'new';
    });
    wrap.append(modes, quickSec, newSecs);
    newSecs.append(h('p', { class: 'muted wt-intro' }, 'Ga door veel woorden en zinnen, ook van units die je nog niet gedaan hebt. Wat je al kent, zet je zo meteen in je woordenschat, en wat nieuw is komt in je herhaling.'));
    newSecs.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, 'Uit'), h('div', { class: 'card' }, srcChips, unitSel, srcInfo)));
    newSecs.append(h('section', { class: 'sec' }, h('h2', { class: 'sec-title' }, 'Jouw sprint'), h('div', { class: 'card wt-card' },
      lbl('Wat'), whatChips, lbl('Welke'), whichChips, lbl('Hoeveel'), lenChips, lbl('Vraagvorm'), formChips, formInfo,
      h('ul', { class: 'wt-how small' },
        h('li', null, h('b', null, 'Goed getypt'), ' (zonder hint): staat meteen als ' + S.SRS.ICON.known + ' bekend in je woordenschat. Je ziet het pas over twee weken terug.'),
        h('li', null, h('b', null, 'Goed bij meerkeuze'), ': ' + S.SRS.ICON.learning + ' aan het leren, over 3 dagen terug.'),
        h('li', null, h('b', null, 'Fout'), ', een hint of «Ik weet het niet»: komt vandaag ' + S.SRS.ICON.learning + ' in je herhaling.'),
        h('li', null, 'Woorden die al in je herhaling staan, tellen gewoon mee zoals altijd.')),
      go)));
    redraw();
    return wrap;
  }
  page.tab = 'practica';

  S.WordTest = { page, start, resume, pool, sentPool, session, KNOWN };
})(window.SPT);
