/* App: navigatie, schermen, voortgang en instellingen. */
(function (S) {
  'use strict';
  const { U, C, Store, SRS, Speech, Gen } = S;
  const h = U.h;
  const st = () => Store.state;
  const save = U.debounce(() => Store.save(), 300);

  /* ================= kleine UI-helpers ================= */
  S.toast = function (msg, ms = 2600) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), ms);
  };
  S.confirm = function (title, text, okLabel, onOk, cancelLabel = 'Annuleren') {
    const root = document.getElementById('modal-root');
    const close = () => { root.innerHTML = ''; };
    root.append(h('div', { class: 'modal-bg', onclick: e => { if (e.target.classList.contains('modal-bg')) close(); } },
      h('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true' }, h('h3', null, title), h('p', null, text),
        h('div', { class: 'row gap end' }, h('button', { class: 'btn ghost', type: 'button', onclick: close }, cancelLabel),
          h('button', { class: 'btn primary', type: 'button', onclick: () => { close(); onOk(); } }, okLabel)))));
  };
  S.confetti = function () {
    const box = h('div', { class: 'confetti', 'aria-hidden': 'true' });
    const colors = ['#e2603a', '#1b998b', '#f2b134', '#2f80ed', '#c2185b', '#9b51e0'];
    for (let i = 0; i < 70; i++) box.append(h('i', { style: { left: Math.random() * 100 + '%', background: U.pick(colors), animationDelay: Math.random() * 0.6 + 's', animationDuration: 1.6 + Math.random() * 1.4 + 's', transform: 'rotate(' + Math.random() * 360 + 'deg)' } }));
    document.body.append(box); setTimeout(() => box.remove(), 3500);
  };
  S.md = function (t) {
    let s = U.esc(t);
    s = s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1<i>$2</i>');
    s = s.replace(/^\s*---\s*$/gm, '<hr>');
    s = s.replace(/^[-•]\s+(.*)$/gm, '<li>$1</li>').replace(/(<li>.*<\/li>\n?)+/g, m => '<ul>' + m + '</ul>');
    return s.replace(/\n/g, '<br>').replace(/<\/li><br>/g, '</li>').replace(/<ul><br>/g, '<ul>');
  };

  /* ================= badges ================= */
  const BADGES = {
    'first': ['🌱', 'Eerste les', 'Je eerste les afgerond'], 'placement': ['🧭', 'Plaatsbepaling', 'Plaatsingstoets gedaan'],
    'streak3': ['🔥', '3 dagen', '3 dagen op rij geoefend'], 'streak7': ['🔥', 'Een week', '7 dagen op rij'], 'streak30': ['🌋', 'Een maand', '30 dagen op rij'],
    'words50': ['📚', '50 woorden', '50 woorden in je herhaling'], 'words250': ['📚', '250 woorden', '250 woorden in je herhaling'], 'words500': ['🏛️', '500 woorden', '500 woorden in je herhaling'],
    'unit1': ['🏅', 'Eerste unit', 'Je eerste unit gehaald'], 'perfect': ['💯', 'Foutloos', 'Een unittoets 100% gehaald'],
    'A1': ['🥉', 'A1 behaald', 'Niveau-examen A1 gehaald'], 'A2': ['🥈', 'A2 behaald', 'Niveau-examen A2 gehaald'],
    'ai': ['🤖', 'Eerste gesprek', 'Een gesprek met de AI-docent gevoerd'], 'goal': ['🎯', 'Dagdoel', 'Je dagdoel gehaald'],
    'early': ['🌅', 'Vroege vogel', 'Geoefend vóór 8:00'], 'night': ['🦉', 'Nachtuil', 'Geoefend na 23:00']
  };
  function award(id) {
    if (st().badges.includes(id)) return;
    st().badges.push(id); const b = BADGES[id]; if (b) setTimeout(() => S.toast(b[0] + ' Badge: ' + b[1] + '!'), 600);
  }
  function checkBadges() {
    const s = st();
    const streak = Store.liveStreak();
    if (streak >= 3) award('streak3'); if (streak >= 7) award('streak7'); if (streak >= 30) award('streak30');
    const words = Object.keys(s.srs).filter(k => k.startsWith('w|')).length;
    if (words >= 50) award('words50'); if (words >= 250) award('words250'); if (words >= 500) award('words500');
    const hr = new Date().getHours(); if (hr < 8 && hr >= 4) award('early'); if (hr >= 23 || hr < 3) award('night');
  }

  /* ================= voortgangslogica ================= */
  const P = {};
  P.unitState = id => st().units[id] || { steps: {}, done: false };
  P.isUnlocked = function (u) {
    if (st().settings.unlockAll) return true;
    const i = C.index(u.id); if (i <= 0) return true;
    const s = P.unitState(u.id); if (s.tested || s.done || Object.keys(s.steps || {}).length) return true;
    const prev = C.all()[i - 1]; const ps = P.unitState(prev.id);
    return !!(ps.done || ps.tested);
  };
  P.current = function () {
    const s = st();
    let u = C.get(s.current);
    if (u && !P.unitState(u.id).done) return u;
    u = C.all().find(x => !P.unitState(x.id).done && !P.unitState(x.id).tested && P.isUnlocked(x)) || C.all().find(x => !P.unitState(x.id).done) || C.all()[C.all().length - 1];
    s.current = u.id; return u;
  };
  P.nextStep = function (u) {
    const s = P.unitState(u.id);
    return Gen.STEPS.find(x => !(s.steps || {})[x.id]) || null;
  };
  P.unitProgress = u => { const s = P.unitState(u.id); return s.done ? 1 : Gen.STEPS.filter(x => (s.steps || {})[x.id]).length / Gen.STEPS.length; };
  P.levelProgress = lvl => { const us = C.unitsOf(lvl); if (!us.length) return 0; return us.reduce((a, u) => a + (P.unitState(u.id).done || P.unitState(u.id).tested ? 1 : P.unitProgress(u) * 0.9), 0) / us.length; };
  P.estimate = function () {
    const s = st();
    let lvl = 'A1', frac = 0;
    for (const L of C.LEVELS) {
      if (!C.available(L.id)) break;
      const p = P.levelProgress(L.id);
      if ((s.levels[L.id] && s.levels[L.id].passed) || p >= 0.999) { lvl = L.id; frac = 1; continue; }
      lvl = L.id; frac = p; break;
    }
    if (frac >= 1) { const i = C.LEVELS.findIndex(l => l.id === lvl); const nxt = C.LEVELS[i + 1]; return { label: lvl + ' ✓' + (nxt ? ' → ' + nxt.id : ''), lvl, frac }; }
    const pl = s.placement.level;
    return { label: (frac < 0.15 && pl && pl > lvl ? pl : lvl) + (frac > 0 ? ' · ' + Math.round(frac * 100) + '%' : ''), lvl, frac };
  };

  /* Wordt per beantwoord item aangeroepen (eerste poging). */
  const stepWrong = new Set();
  function recordItem(it, ok, r) {
    const d = Store.today(); d.items++; if (ok) d.ok++;
    if (it.skill) Store.skill(it.skill, ok);
    if (it.tag) Store.mark(it.tag, ok);
    if (it.srsId) {
      if (SRS.has(it.srsId)) { if (!r || !r.override) SRS.grade(it.srsId, ok); else { const c = st().srs[it.srsId]; if (c) { c.l = Math.max(0, c.l - 1); } } }
      else if (!ok) stepWrong.add(it.srsId); else if (r && r.override) stepWrong.delete(it.srsId);
    }
    save();
  }
  function addTime(min) {
    const before = Store.today().min;
    Store.addTime(min);
    const goal = st().settings.goal;
    if (before < goal && Store.today().min >= goal) { award('goal'); setTimeout(() => { S.toast('🎯 Dagdoel gehaald! ¡Felicidades!', 3500); S.confetti(); }, 900); }
  }
  function afterSession(sum, extraXP = 0) {
    Store.addXP(sum.xp + extraXP); addTime(sum.minutes);
    Store.touchStreak(); award('first'); checkBadges(); Store.save();
  }
  function runSession(session, opts = {}) {
    stepWrong.clear();
    S.Lesson.run(session, {
      onItem: recordItem,
      onFinish: sum => {
        if (session.srsAdd) session.srsAdd.forEach(id => SRS.add(id, stepWrong.has(id) ? 0 : 1));
        const extra = opts.onFinish ? opts.onFinish(sum) || {} : {};
        afterSession(sum, extra.bonusXP || 0);
        return extra;
      },
      onAbort: sum => { Store.addXP(sum.xp); addTime(sum.minutes); if (sum.total) Store.touchStreak(); Store.save(); render(); },
      onClose: () => render()
    });
  }
  S.runSession = runSession;

  function startStep(u, stepId) {
    const session = Gen.stepSession(u, stepId);
    if (!session || !session.items.length) { S.toast('Deze stap heeft geen oefeningen.'); return; }
    runSession(session, {
      onFinish: sum => {
        const us = Store.unit(u.id);
        const step = Gen.STEPS.find(s => s.id === stepId);
        if (stepId === 'test') {
          const passed = sum.score >= (session.pass || 0.8);
          us.best = Math.max(us.best || 0, sum.score);
          if (passed) {
            us.steps.test = true; us.done = true;
            award('unit1'); if (sum.score === 1) award('perfect');
            const nxt = C.next(u.id);
            if (st().current === u.id && nxt) st().current = nxt.id;
            const lvlDone = C.unitsOf(u.level).every(x => P.unitState(x.id).done || P.unitState(x.id).tested);
            return { passed: true, bonusXP: 100 + (sum.score === 1 ? 50 : 0), emoji: '🏅', title: '¡Unidad completada!',
              text: lvlDone ? `Alle units van ${u.level} zijn klaar. Tijd voor het niveau-examen! 🎓` : (nxt ? 'Volgende unit ontgrendeld: ' + nxt.icon + ' ' + nxt.title : ''),
              nextLabel: nxt && !lvlDone ? 'Naar de volgende unit' : 'Klaar', next: () => { location.hash = nxt && !lvlDone ? '#/unit/' + nxt.id : '#/ruta'; } };
          }
          return { passed: false, emoji: '💪', title: 'Bijna!', text: `Je had ${Math.round(sum.score * 100)}%. Je hebt 80% nodig. Bekijk je fouten, herhaal de lastige stappen en probeer het opnieuw.`, nextLabel: 'Terug naar de unit', next: () => { location.hash = '#/unit/' + u.id; }, alt: { label: '🔁 Opnieuw', fn: () => startStep(u, 'test') } };
        }
        us.steps[stepId] = true;
        if (!st().current || P.unitState(st().current).done) st().current = u.id;
        const nxtStep = P.nextStep(u);
        const extra = { bonusXP: 20, title: step.nl + ' ✓', text: nxtStep ? 'Volgende: ' + nxtStep.icon + ' ' + nxtStep.nl : '', nextLabel: nxtStep ? 'Volgende stap' : 'Klaar', next: () => { if (nxtStep) startStep(u, nxtStep.id); } };
        extra.alt = { label: 'Terug', fn: () => { location.hash = '#/unit/' + u.id; } };
        if (stepId === 'apply' && u.scenario) extra.alt = { label: S.AI.enabled() ? '🤖 Rollenspel met AI' : 'Terug', fn: () => { if (S.AI.enabled()) { startRoleplay(unitScenario(u)); location.hash = '#/docente'; } else location.hash = '#/unit/' + u.id; } };
        return extra;
      }
    });
  }
  S.startStep = startStep;

  function startReview(limit = 25) {
    const s = Gen.reviewSession(limit);
    if (!s.items.length) { S.toast('Niets te herhalen. ¡Bien hecho!'); return; }
    runSession(s, { onFinish: sum => { Store.today().done.review = true; const left = SRS.dueCount(); return { title: 'Herhaling klaar', text: left ? `Er staan nog ${left} items klaar. Ga door of kom later terug.` : 'Alles herhaald voor vandaag! 🎉', nextLabel: left ? 'Nog een ronde' : 'Klaar', next: () => { if (left) startReview(limit); } }; } });
  }

  /* ================= Router ================= */
  const view = () => document.getElementById('view');
  const routes = {};
  function render() {
    const hash = location.hash.replace(/^#\/?/, '') || 'hoy';
    const [name, arg] = hash.split('/');
    const fn = routes[name] || routes.hoy;
    document.querySelectorAll('.tabbar a').forEach(a => a.classList.toggle('active', a.dataset.tab === (fn.tab || name)));
    updateTopbar();
    const v = view(); v.innerHTML = '';
    const showOnboarding = !st().placement.done && !Object.keys(st().units).length && name !== 'toets' && name !== 'ajustes';
    v.append(showOnboarding ? routes.welkom() : fn(arg));
    v.scrollTop = 0; window.scrollTo(0, 0);
  }
  function updateTopbar() {
    const sEl = document.getElementById('tb-streak'), xEl = document.getElementById('tb-xp'), dEl = document.getElementById('tb-due');
    if (sEl) sEl.textContent = '🔥 ' + Store.liveStreak();
    if (xEl) xEl.textContent = '⭐ ' + st().xp;
    if (dEl) { const n = SRS.dueCount(); dEl.textContent = '🔁 ' + n; dEl.hidden = !n; }
  }
  S.render = render;

  function section(title, ...kids) { return h('section', { class: 'sec' }, title ? h('h2', { class: 'sec-title' }, title) : null, kids); }
  function ring(frac, label, sub) {
    const r = 44, c = 2 * Math.PI * r, f = U.clamp(frac, 0, 1);
    const svg = `<svg viewBox="0 0 100 100" class="ring" aria-hidden="true"><circle cx="50" cy="50" r="${r}" class="ring-bg"/><circle cx="50" cy="50" r="${r}" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - f)}"/></svg>`;
    return h('div', { class: 'ring-wrap' }, h('div', { html: svg }), h('div', { class: 'ring-label' }, h('b', null, label), h('span', null, sub)));
  }
  function bar(frac, color) { return h('div', { class: 'pbar' }, h('i', { style: { width: Math.round(U.clamp(frac, 0, 1) * 100) + '%', background: color || '' } })); }
  function greeting() {
    const hr = new Date().getHours();
    const g = hr < 12 ? '¡Buenos días' : hr < 19 ? '¡Buenas tardes' : '¡Buenas noches';
    return g + (st().name ? ', ' + st().name : '') + '!';
  }

  /* ================= Welkom / onboarding ================= */
  routes.welkom = function () {
    const name = h('input', { class: 'input', type: 'text', placeholder: 'Je voornaam', value: st().name || '', maxlength: 30 });
    const go = (fn) => { st().name = name.value.trim(); Store.save(); fn(); };
    const startAt = (id) => go(() => {
      st().placement.done = true; st().placement.start = id; st().current = id;
      const idx = C.index(id); C.all().slice(0, idx).forEach(u => { Store.unit(u.id).tested = true; });
      Store.save(); location.hash = '#/hoy'; render();
    });
    return h('div', { class: 'welcome' },
      h('div', { class: 'hero' }, h('div', { class: 'hero-emoji' }, '🌎'), h('h1', null, '¡Bienvenido!'), h('p', null, 'Leer Latijns-Amerikaans Spaans stap voor stap: van A1 naar B1 en verder, tot C2.')),
      section('Hoe heet je?', name),
      section('Waar begin je?',
        h('button', { class: 'choice primary', type: 'button', onclick: () => go(() => { location.hash = '#/toets'; }) }, h('b', null, '🧭 Plaatsingstoets (aanbevolen)'), h('span', null, '±8 minuten. Ik bepaal je niveau en zet je op de juiste plek. Ideaal als je denkt dat je A1 of A2 bent.')),
        h('button', { class: 'choice', type: 'button', onclick: () => startAt(C.all()[0].id) }, h('b', null, '🌱 Vanaf het begin (A1)'), h('span', null, 'Je begint bij unit 1. Units die je al kent, kun je snel afronden met «Ik ken dit al».')),
        C.unitsOf('A2').length ? h('button', { class: 'choice', type: 'button', onclick: () => startAt(C.unitsOf('A2')[0].id) }, h('b', null, '🚀 Begin bij A2'), h('span', null, 'Je kunt je al redden in de presente en wilt de verleden tijden leren.')) : null,
        C.unitsOf('B1').length ? h('button', { class: 'choice', type: 'button', onclick: () => startAt(C.unitsOf('B1')[0].id) }, h('b', null, '🌠 Begin bij B1'), h('span', null, 'Je kent de verleden tijden en wilt de subjuntivo, de condicional en argumenteren leren.')) : null),
      h('p', { class: 'muted small center' }, '🔒 Je voortgang wordt alleen op dit apparaat bewaard. Via Voortgang kun je een back-up maken.'));
  };

  /* ================= HOY ================= */
  routes.hoy = function () {
    const s = st(); const d = Store.today(); const u = P.current(); const step = P.nextStep(u);
    const due = SRS.dueCount(); const goal = s.settings.goal;
    const min = Math.round(d.min);
    const wrap = h('div', { class: 'page' });
    wrap.append(h('div', { class: 'today-head' },
      h('div', null, h('h1', null, greeting()), h('p', { class: 'muted' }, min >= goal ? '🎯 Dagdoel gehaald! Alles wat je nu nog doet, is extra.' : `Vandaag: ${min} van ${goal} minuten.`),
        h('div', { class: 'chips' }, h('span', { class: 'chip' }, '🔥 ' + U.plural(Store.liveStreak(), 'dag', 'dagen')), h('span', { class: 'chip' }, '📈 ' + P.estimate().label))),
      ring(min / goal, min + "'", 'van ' + goal + "'")));

    const plan = h('div', { class: 'plan' });
    // 1. herhaling
    const revMin = Math.max(2, Math.round(Math.min(due, 25) * 0.3));
    plan.append(planCard('🔁', 'Herhaling', due ? `${Math.min(due, 25)} items · ±${revMin} min` : (d.done.review ? 'Klaar voor vandaag ✓' : 'Niets te herhalen — top!'),
      due ? 'Start' : null, () => startReview(25), due ? 'hot' : 'done', 'Spaced repetition: woorden, grammatica en werkwoorden precies op het juiste moment.'));
    // 2. nieuwe stof
    if (step) {
      plan.append(planCard(step.icon, `${u.icon} ${u.title}`, `${step.nl} · ±${step.min} min`, step.id === 'test' ? 'Start toets' : 'Start', () => startStep(u, step.id), 'new', `${u.level} · unit ${C.unitsOf(u.level).indexOf(u) + 1} — ${u.nl}`));
    } else {
      plan.append(planCard('🎓', 'Niveau-examen ' + u.level, 'Alle units zijn klaar', 'Naar de route', () => { location.hash = '#/ruta'; }, 'new'));
    }
    // 3. spreken / gesprek
    if (S.AI.enabled()) {
      const sc = unitScenario(u);
      plan.append(planCard('🗣️', 'Gesprek met de AI-docent', sc.title + ' · ±5 min', 'Praten', () => { startRoleplay(sc); location.hash = '#/docente'; }, 'talk', sc.goal));
    } else {
      plan.append(planCard('🎙️', 'Spreken', '8 zinnen hardop · ±3 min', 'Start', () => runSession(Gen.speakTraining(8)), 'talk', 'Tip: met een AI-sleutel krijg je hier echte gesprekken met correcties.'));
    }
    wrap.append(section('Je plan voor vandaag', plan));

    // frase del día
    const ph = S.phrases[U.dayIndex() % S.phrases.length];
    wrap.append(section('La frase del día', h('div', { class: 'phrase' }, h('div', { class: 'es', lang: 'es' }, ph[2] + ' ' + ph[0], S.Lesson.speakBtn(ph[0])), h('div', { class: 'muted' }, ph[1]))));

    // snelle training
    wrap.append(section('Extra oefenen', h('div', { class: 'quick' },
      quick('⚡', 'Woordensprint', '2 min', () => runSession(Gen.sprint(30))),
      quick('🧩', 'Werkwoorden', '20 vragen', () => { location.hash = '#/practica'; }),
      quick('🎧', 'Dictee', '10 zinnen', () => runSession(Gen.listenTraining(10))))));
    if (!Store.ok) wrap.append(h('p', { class: 'warn' }, '⚠️ Je browser staat opslaan niet toe (privévenster?). Je voortgang wordt niet bewaard.'));
    return wrap;
  };
  function planCard(icon, title, sub, btn, fn, cls, desc) {
    return h('div', { class: 'plan-card ' + (cls || '') },
      h('div', { class: 'pc-icon' }, icon),
      h('div', { class: 'pc-body' }, h('b', null, title), h('span', null, sub), desc ? h('small', null, desc) : null),
      btn ? h('button', { class: 'btn primary', type: 'button', onclick: fn }, btn) : h('span', { class: 'pc-done' }, '✓'));
  }
  function quick(icon, t, s, fn) { return h('button', { class: 'quick-btn', type: 'button', onclick: fn }, h('span', { class: 'qi' }, icon), h('b', null, t), h('small', null, s)); }

  /* ================= RUTA ================= */
  routes.ruta = function () {
    const wrap = h('div', { class: 'page' });
    wrap.append(h('h1', null, 'Tu ruta'), h('p', { class: 'muted' }, 'Van beginner tot meesterschap. Elke unit: woorden → grammatica → dialoog → lezen → toepassen → toets.'));
    const cur = P.current();
    C.LEVELS.forEach(L => {
      const us = C.unitsOf(L.id); const avail = us.length > 0;
      const prog = P.levelProgress(L.id); const lv = st().levels[L.id];
      const card = h('div', { class: 'level' + (avail ? '' : ' soon'), style: { '--lc': L.color } });
      card.append(h('div', { class: 'level-head' },
        h('div', { class: 'lv-badge' }, L.id),
        h('div', { class: 'grow' }, h('b', null, L.name + ' · ' + L.es), avail ? bar(prog, L.color) : h('span', { class: 'muted small' }, 'Komt in een volgende fase — de app groeit met je mee')),
        lv && lv.passed ? h('span', { class: 'chip ok' }, '🎓 behaald') : avail ? h('span', { class: 'muted small' }, Math.round(prog * 100) + '%') : h('span', { class: 'chip' }, '🔒')));
      card.append(h('ul', { class: 'can-do' }, L.can.map(c => h('li', null, c))));
      if (avail) {
        const list = h('div', { class: 'unit-list' });
        us.forEach((u, i) => {
          const s = P.unitState(u.id); const unlocked = P.isUnlocked(u);
          const status = s.done ? '✅' : s.tested ? '⏭️' : !unlocked ? '🔒' : u.id === cur.id ? '▶️' : '';
          list.append(h('a', { class: 'unit-row' + (unlocked ? '' : ' locked') + (u.id === cur.id ? ' current' : ''), href: unlocked ? '#/unit/' + u.id : null, onclick: unlocked ? null : (e) => { e.preventDefault(); S.toast('Rond eerst de vorige unit af (of gebruik «Ik ken dit al»).'); } },
            h('span', { class: 'u-icon' }, u.icon),
            h('div', { class: 'grow' }, h('b', null, (i + 1) + '. ' + u.title), h('small', null, u.nl), stepDots(u)),
            h('span', { class: 'u-status' }, status)));
        });
        card.append(list);
        const allDone = us.every(u => P.unitState(u.id).done || P.unitState(u.id).tested);
        card.append(h('div', { class: 'row gap wrap' },
          h('button', { class: 'btn ' + (allDone ? 'primary' : 'ghost'), type: 'button', onclick: () => startLevelExam(L.id) }, '🎓 Niveau-examen ' + L.id + (lv && lv.best ? ' (beste: ' + Math.round(lv.best * 100) + '%)' : '')),
          !allDone ? h('span', { class: 'muted small' }, 'Aanbevolen als alle units klaar zijn') : null));
      }
      wrap.append(card);
    });
    wrap.append(section('Extra', h('div', { class: 'quick' },
      quick('🌎', 'Regio’s', 'Mexico tot Argentinië', () => { location.hash = '#/regios'; }),
      quick('🧭', 'Plaatsingstoets', 'opnieuw doen', () => { location.hash = '#/toets'; }))));
    return wrap;
  };
  routes.ruta.tab = 'ruta';
  function stepDots(u) {
    const s = P.unitState(u.id);
    return h('div', { class: 'dots' }, Gen.STEPS.map(x => h('i', { class: (s.steps || {})[x.id] || s.done ? 'on' : '', title: x.nl })));
  }
  function startLevelExam(lvl) {
    const ses = Gen.levelExam(lvl);
    runSession(ses, { onFinish: sum => {
      const L = st().levels[lvl] || (st().levels[lvl] = { passed: false, best: 0 });
      L.best = Math.max(L.best || 0, sum.score);
      if (sum.score >= 0.8) { L.passed = true; award(lvl); return { passed: true, bonusXP: 300, emoji: '🎓', title: '¡Nivel ' + lvl + ' aprobado!', text: 'Gefeliciteerd! Je hebt het niveau-examen ' + lvl + ' gehaald met ' + Math.round(sum.score * 100) + '%.', next: () => { location.hash = '#/ruta'; } }; }
      return { passed: false, title: 'Nog niet…', text: `Je had ${Math.round(sum.score * 100)}%. Je hebt 80% nodig. Oefen je zwakke punten (Voortgang) en probeer het opnieuw.`, next: () => { location.hash = '#/progreso'; } };
    } });
  }

  /* ================= UNIT ================= */
  routes.unit = function (id) {
    const u = C.get(id); if (!u) return routes.ruta();
    const s = P.unitState(u.id); const L = C.level(u.level);
    const wrap = h('div', { class: 'page unit-page', style: { '--lc': L.color } });
    wrap.append(h('a', { class: 'back', href: '#/ruta' }, '← Ruta'),
      h('div', { class: 'unit-hero' }, h('div', { class: 'u-big' }, u.icon), h('div', null, h('div', { class: 'eyebrow' }, u.level + ' · unit ' + (C.unitsOf(u.level).indexOf(u) + 1)), h('h1', null, u.title), h('p', { class: 'muted' }, u.nl))),
      h('ul', { class: 'goals' }, u.goals.map(g => h('li', null, '🎯 ' + g))));
    const steps = h('div', { class: 'steps' });
    const nxt = P.nextStep(u);
    Gen.STEPS.forEach(x => {
      const done = (s.steps || {})[x.id] || (x.id === 'test' && s.done);
      steps.append(h('button', { class: 'step' + (done ? ' done' : '') + (nxt && nxt.id === x.id ? ' next' : ''), type: 'button', onclick: () => startStep(u, x.id) },
        h('span', { class: 'st-icon' }, done ? '✓' : x.icon), h('b', null, x.nl), h('small', null, '±' + x.min + ' min')));
    });
    wrap.append(section('Stappen', steps));
    if (!s.done) wrap.append(h('div', { class: 'row gap wrap' }, h('button', { class: 'btn ghost', type: 'button', onclick: () => S.confirm('Ik ken dit al', 'Je doet meteen de unittoets. Haal je 80% of meer, dan is de unit afgerond en gaan de woorden en oefeningen in je herhaling.', 'Start toets', () => {
      startStep(u, 'test');
    }) }, '⏭️ Ik ken dit al → direct de toets'), s.best ? h('span', { class: 'muted small' }, 'Beste toets: ' + Math.round(s.best * 100) + '%') : null));

    // naslag
    const tabs = [['📖 Grammatica', () => h('div', null, u.grammar.map(g => S.Lesson.grammarBlock(g)))],
      ['🃏 Woorden', () => wordList(u)],
      ['💬 Dialoog', () => dialogueRead(u)],
      ['📰 Lezen', () => u.reading ? readingRead(u) : h('p', null, '—')],
      ['🌎 Cultuur', () => u.culture ? h('div', { class: 'info' }, h('h2', null, u.culture.t), h('div', { class: 'prose', html: u.culture.html })) : h('p', null, '—')]];
    const tabBar = h('div', { class: 'tabs', role: 'tablist' }); const pane = h('div', { class: 'tab-pane' });
    let curTab = 0; try { curTab = +(sessionStorage.getItem('spt.utab') || 0); } catch (e) { /* */ }
    tabs.forEach(([t, fn], i) => tabBar.append(h('button', { class: 'tab' + (i === curTab ? ' active' : ''), type: 'button', role: 'tab', onclick: () => {
      tabBar.querySelectorAll('.tab').forEach((b, j) => b.classList.toggle('active', i === j)); pane.innerHTML = ''; pane.append(fn());
      try { sessionStorage.setItem('spt.utab', i); } catch (e) { /* */ }
    } }, t)));
    pane.append(tabs[curTab] ? tabs[curTab][1]() : tabs[0][1]());
    wrap.append(section('Naslag', tabBar, pane));
    if (u.scenario) wrap.append(section('Rollenspel', h('div', { class: 'scenario-card' }, h('b', null, '🎭 ' + u.scenario.nl), h('small', null, '🎯 ' + u.scenario.goal),
      h('button', { class: 'btn primary', type: 'button', onclick: () => { if (!S.AI.enabled()) { location.hash = '#/docente'; return; } startRoleplay(unitScenario(u)); location.hash = '#/docente'; } }, S.AI.enabled() ? 'Start gesprek' : 'Stel de AI-docent in'))));
    return wrap;
  };
  routes.unit.tab = 'ruta';
  function wordList(u) {
    const list = h('div', { class: 'word-list' });
    C.words(u).forEach(w => {
      const stt = SRS.status(w.id);
      list.append(h('div', { class: 'word-row' }, S.Lesson.speakBtn(w.es), h('div', { class: 'grow' }, h('b', { lang: 'es' }, w.es), h('span', null, w.nl), w.note ? h('small', null, '🌎 ' + w.note) : null), h('span', { class: 'wstat ' + stt, title: statusLabel(stt) }, statusIcon(stt))));
    });
    return list;
  }
  function statusIcon(s) { return { new: '○', learning: '◔', known: '◑', mastered: '●' }[s]; }
  function statusLabel(s) { return { new: 'nieuw', learning: 'aan het leren', known: 'bekend', mastered: 'beheerst' }[s]; }
  function dialogueRead(u) {
    const d = u.dialogue;
    return h('div', { class: 'dl-list read' }, h('p', { class: 'muted small' }, d.place + ' — ' + d.t),
      d.lines.map(([who, es, nl]) => h('div', { class: 'dl-read' }, S.Lesson.speakBtn(es), h('div', null, h('b', null, who + ': '), h('span', { lang: 'es' }, es), h('div', { class: 'small muted' }, nl)))));
  }

  function readingRead(u) {
    const r = u.reading;
    return h('div', { class: 'dl-list read' }, h('p', { class: 'muted small' }, (r.type || 'Lectura') + ' — ' + r.t),
      r.p.map(([es, nl]) => h('div', { class: 'dl-read' }, S.Lesson.speakBtn(es), h('div', null, h('span', { lang: 'es' }, es), h('div', { class: 'small muted' }, nl)))));
  }

  /* ================= PRÁCTICA ================= */
  routes.practica = function () {
    const wrap = h('div', { class: 'page' });
    wrap.append(h('h1', null, 'Práctica'), h('p', { class: 'muted' }, 'Gericht oefenen naast je dagelijkse les.'));
    // werkwoordtrainer
    const learned = Gen.learnedUnits();
    const unlockedTenses = new Set(['pres']);
    learned.forEach(u => (u.tenses || []).forEach(t => unlockedTenses.add(t)));
    const allTenses = Object.keys(S.conj.TENSES);
    const chosen = new Set([...unlockedTenses].slice(-3));
    const tenseBox = h('div', { class: 'chips wrap' });
    allTenses.forEach(t => {
      const T = S.conj.TENSES[t]; const open = unlockedTenses.has(t) || st().settings.unlockAll;
      const c = h('button', { class: 'chip toggle' + (chosen.has(t) ? ' on' : '') + (open ? '' : ' dim'), type: 'button', title: T.nl, onclick: () => {
        if (chosen.has(t)) chosen.delete(t); else chosen.add(t); c.classList.toggle('on');
      } }, T.es + (open ? '' : ' (' + T.level + ')'));
      tenseBox.append(c);
    });
    const verbSel = h('select', { class: 'input' },
      h('option', { value: 'mine' }, 'Werkwoorden uit mijn units'), h('option', { value: 'irr' }, 'Onregelmatige toppers'), h('option', { value: 'all' }, 'Alle werkwoorden (' + Object.keys(S.conj.VERBS).length + ')'));
    const irr = ['ser', 'estar', 'ir', 'tener', 'hacer', 'poder', 'querer', 'decir', 'venir', 'poner', 'salir', 'saber', 'dar', 'ver', 'traer', 'pedir', 'dormir', 'jugar', 'conocer', 'oír'];
    wrap.append(section('🧩 Werkwoordtrainer', h('div', { class: 'card' }, h('p', { class: 'small muted' }, 'Kies tijden:'), tenseBox, verbSel,
      h('button', { class: 'btn primary wide', type: 'button', onclick: () => {
        const tenses = [...chosen]; if (!tenses.length) { S.toast('Kies minstens één tijd'); return; }
        let verbs = verbSel.value === 'irr' ? irr : verbSel.value === 'all' ? Object.keys(S.conj.VERBS) : [...new Set(learned.flatMap(u => u.verbs || []))];
        if (!verbs.length) verbs = irr.slice(0, 8);
        const ses = Gen.conjTraining(tenses, verbs, 20); if (!ses) { S.toast('Geen combinaties gevonden'); return; }
        runSession(ses);
      } }, 'Start (20 vragen)'), h('button', { class: 'btn ghost wide', type: 'button', onclick: () => { location.hash = '#/tablas'; } }, '📋 Vervoegingstabellen bekijken'))));
    // zwakke punten
    const weak = weakTags();
    wrap.append(section('🎯 Zwakke punten', weak.length ? h('div', { class: 'card' },
      weak.map(([t, v]) => h('div', { class: 'weak-row' }, h('span', { class: 'grow' }, C.tag(t)), h('span', { class: 'muted small' }, Math.round(v.ok / (v.ok + v.no) * 100) + '% goed'))),
      h('button', { class: 'btn primary wide', type: 'button', onclick: () => { const ses = Gen.weakTraining(weak.map(w => w[0])); if (!ses.items.length) { S.toast('Nog geen oefeningen voor deze onderwerpen'); return; } runSession(ses); } }, 'Oefen deze onderwerpen'))
      : h('p', { class: 'muted' }, 'Nog geen zwakke punten gevonden. Blijf oefenen, dan zie je hier waar je extra aandacht aan kunt geven.')));
    wrap.append(section('Meer', h('div', { class: 'quick' },
      quick('⚡', 'Woordensprint', '2 minuten', () => runSession(Gen.sprint(30))),
      quick('🎧', 'Dictee', '10 zinnen', () => runSession(Gen.listenTraining(10))),
      quick('🎙️', 'Uitspraak', '8 zinnen', () => runSession(Gen.speakTraining(8))),
      quick('🔀', 'Extra herhaling', 'ook niet-verlopen', () => { const ids = U.sample(Object.keys(st().srs), 20); if (!ids.length) { S.toast('Nog niets geleerd'); return; } runSession(Gen.reviewSession(20, ids)); }))));
    return wrap;
  };
  function weakTags() {
    return Object.entries(st().tags).filter(([t, v]) => t !== 'vocab' && v.ok + v.no >= 3 && v.ok / (v.ok + v.no) < 0.8)
      .sort((a, b) => a[1].ok / (a[1].ok + a[1].no) - b[1].ok / (b[1].ok + b[1].no)).slice(0, 6);
  }

  routes.tablas = function () {
    const wrap = h('div', { class: 'page' });
    wrap.append(h('a', { class: 'back', href: '#/practica' }, '← Práctica'), h('h1', null, 'Vervoegingstabellen'));
    const verbs = Object.keys(S.conj.VERBS).sort((a, b) => a.localeCompare(b, 'es'));
    const sel = h('select', { class: 'input' }, verbs.map(v => h('option', { value: v }, v + ' — ' + S.conj.VERBS[v].nl)));
    const out = h('div');
    const draw = () => {
      out.innerHTML = ''; const v = sel.value;
      Object.keys(S.conj.TENSES).forEach(t => {
        const tb = S.conj.table(v, t); if (!tb) return;
        const T = S.conj.TENSES[t];
        out.append(h('div', { class: 'card conj-table' }, h('b', null, T.es), h('small', { class: 'muted' }, ' ' + T.nl + ' · ' + T.level),
          h('table', { class: 'gtable' }, S.conj.personsFor(t).map(p => h('tr', null, h('td', { class: 'muted' }, S.conj.personLabel(t, p)), h('td', { lang: 'es' }, tb[p], S.Lesson.speakBtn(tb[p])))))));
      });
    };
    sel.onchange = draw; sel.value = 'tener'; draw();
    wrap.append(sel, out);
    return wrap;
  };
  routes.tablas.tab = 'practica';

  /* ================= DOCENTE (AI) ================= */
  const chat = { mode: 'roleplay', scenario: null, messages: [], busy: false, ctrl: null };
  function unitScenario(u) { return { id: 'unit-' + u.id, icon: u.icon, title: u.title, place: u.dialogue && u.dialogue.place, role: u.scenario.role, goal: u.scenario.goal, nl: u.scenario.nl }; }
  function startRoleplay(sc) { chat.mode = 'roleplay'; chat.scenario = sc; chat.messages = []; chat.autostart = true; }
  S.startRoleplay = startRoleplay;

  routes.docente = function () {
    const wrap = h('div', { class: 'page chat-page' });
    wrap.append(h('h1', null, 'Docente'));
    if (!S.AI.enabled()) {
      wrap.append(h('div', { class: 'card' },
        h('h3', null, '🤖 Je persoonlijke AI-docent'),
        h('p', null, 'Voer echte gesprekken (rollenspellen in Mexico, Colombia, Argentinië…). Je krijgt direct correcties in het Nederlands, kunt alles over grammatica vragen en krijgt feedback op je teksten.'),
        h('p', { class: 'small muted' }, 'Hiervoor heb je een eigen API-sleutel van Anthropic (Claude) nodig. Die maak je aan op console.anthropic.com. Je betaalt per gebruik, meestal een paar cent per gesprek. De sleutel wordt alleen op dit apparaat bewaard.'),
        h('a', { class: 'btn primary', href: '#/ajustes' }, 'Sleutel instellen'),
        h('p', { class: 'small muted' }, 'Zonder AI werkt de rest van de app gewoon: lessen, herhaling, luisteren en spreken.')));
      return wrap;
    }
    const modes = h('div', { class: 'seg' },
      [['roleplay', '🎭 Rollenspel'], ['ask', '❓ Vraag het'], ['write', '✍️ Correctie']].map(([m, l]) => h('button', { class: chat.mode === m ? 'on' : '', type: 'button', onclick: () => { if (chat.mode !== m) { chat.mode = m; chat.messages = []; render(); } } }, l)));
    wrap.append(modes);

    if (chat.mode === 'roleplay' && !chat.scenario) {
      const cur = P.current();
      const list = h('div', { class: 'scen-list' });
      const scs = (cur.scenario ? [unitScenario(cur)] : []).concat(S.scenarios);
      scs.forEach(sc => list.append(h('button', { class: 'scen', type: 'button', onclick: () => { startRoleplay(sc); render(); } },
        h('span', { class: 'qi' }, sc.icon), h('div', { class: 'grow' }, h('b', null, sc.title || sc.nl), h('small', null, (sc.place || '') + (sc.lv ? ' · ' + sc.lv : ' · huidige unit')), h('small', { class: 'muted' }, '🎯 ' + sc.goal)))));
      wrap.append(section('Kies een situatie', list));
      return wrap;
    }
    if (chat.mode === 'roleplay') wrap.append(h('div', { class: 'scen-head' }, h('span', null, (chat.scenario.icon || '🎭') + ' ' + (chat.scenario.title || chat.scenario.nl) + (chat.scenario.place ? ' · ' + chat.scenario.place : '')), h('small', null, '🎯 ' + chat.scenario.goal),
      h('button', { class: 'btn link small', type: 'button', onclick: () => { chat.scenario = null; chat.messages = []; render(); } }, 'Andere situatie')));
    if (chat.mode === 'ask') wrap.append(h('p', { class: 'muted small' }, 'Stel elke vraag over Spaans, bijvoorbeeld: «Wanneer gebruik ik por en wanneer para?» of «Wat betekent “¿qué onda?”»'));
    if (chat.mode === 'write') wrap.append(h('p', { class: 'muted small' }, 'Plak of schrijf een Spaanse tekst (e-mail, appje, dagboek). Je krijgt een verbeterde versie met uitleg.'));

    const log = h('div', { class: 'chat-log', 'aria-live': 'polite' });
    chat.messages.forEach((m, i) => { if (!(i === 0 && m.hidden)) log.append(bubble(m)); });
    const inp = h('textarea', { class: 'chat-input', rows: chat.mode === 'write' ? 5 : 2, lang: 'es', placeholder: chat.mode === 'write' ? 'Escribe tu texto aquí…' : 'Escribe en español… (Nederlands mag ook)' });
    const send = h('button', { class: 'btn primary', type: 'button' }, 'Enviar');
    const micBtn = Speech.canListen() ? h('button', { class: 'icon-btn mic-sm', type: 'button', title: 'Inspreken' }, '🎙️') : null;
    const voiceOn = h('label', { class: 'small row gap' }, h('input', { type: 'checkbox', checked: st().settings.tutorVoice ? true : null, onchange: e => { st().settings.tutorVoice = e.target.checked; save(); } }), 'Antwoorden voorlezen');
    const doSend = async (text, hidden) => {
      text = (text || '').trim(); if (!text || chat.busy) return;
      const um = { role: 'user', content: text, hidden };
      chat.messages.push(um); if (!hidden) log.append(bubble(um));
      inp.value = '';
      const am = { role: 'assistant', content: '' }; chat.messages.push(am);
      const b = bubble(am, true); log.append(b); scrollLog();
      chat.busy = true; send.disabled = true;
      const sys = chat.mode === 'roleplay' ? S.AI.roleplaySystem(chat.scenario) : chat.mode === 'ask' ? S.AI.askSystem() : S.AI.writingSystem();
      const msgs = chat.messages.filter(m => m !== am).map(m => ({ role: m.role, content: m.content }));
      try {
        const full = await S.AI.stream({ system: sys, messages: msgs, maxTokens: chat.mode === 'roleplay' ? 1500 : 3000, effort: chat.mode === 'write' ? 'medium' : 'low', onText: t => { am.content = t; fillBubble(b, am); scrollLog(); } });
        am.content = full; fillBubble(b, am);
        award('ai'); Store.skill(chat.mode === 'write' ? 'write' : 'speak', true); Store.today().min += 0.5; Store.touchStreak(); save();
        if (st().settings.tutorVoice) Speech.say(replyPart(full));
      } catch (e) {
        chat.messages.pop(); if (!hidden) { /* laat de vraag staan */ }
        b.querySelector('.bubble-body').innerHTML = '<span class="warn">⚠️ ' + U.esc(e.message) + '</span>';
      }
      chat.busy = false; send.disabled = false; scrollLog();
    };
    function scrollLog() { log.scrollTop = log.scrollHeight; }
    send.onclick = () => doSend(inp.value);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey && chat.mode !== 'write') { e.preventDefault(); doSend(inp.value); } });
    if (micBtn) micBtn.onclick = async () => {
      micBtn.classList.add('rec');
      try { const alts = await Speech.listen(); inp.value = (inp.value ? inp.value + ' ' : '') + alts[0]; inp.focus(); } catch (e) { S.toast(e.message); }
      micBtn.classList.remove('rec');
    };
    wrap.append(log, h('div', { class: 'chat-bar' }, inp, h('div', { class: 'chat-actions' }, micBtn, send)), S.Lesson.accentBar(inp),
      h('div', { class: 'row gap between' }, voiceOn, h('button', { class: 'btn link small', type: 'button', onclick: () => { chat.messages = []; if (chat.mode === 'roleplay') chat.autostart = true; render(); } }, '🗑 Nieuw gesprek')));
    if (chat.mode === 'roleplay' && chat.autostart && !chat.messages.length) { chat.autostart = false; setTimeout(() => doSend('(Empecemos el juego de rol. / Laten we beginnen.)', true), 50); }
    setTimeout(scrollLog, 30);
    return wrap;
  };
  function replyPart(t) { return String(t).split(/\n\s*---\s*\n/)[0]; }
  function bubble(m, pending) {
    const b = h('div', { class: 'msg ' + m.role }, h('div', { class: 'bubble-body' }, pending ? h('span', { class: 'typing' }, '…') : null));
    if (!pending) fillBubble(b, m);
    return b;
  }
  function fillBubble(b, m) {
    const body = b.querySelector('.bubble-body'); body.innerHTML = '';
    if (m.role === 'user') { body.textContent = m.content; return; }
    const [reply, ...rest] = String(m.content).split(/\n\s*---\s*\n/);
    body.append(h('div', { class: 'reply', lang: 'es', html: S.md(reply) }));
    if (reply.trim()) body.append(S.Lesson.speakBtn(reply.replace(/\*\*/g, '')));
    if (rest.length) body.append(h('div', { class: 'correction', html: S.md(rest.join('\n')) }));
  }

  /* ================= PROGRESO ================= */
  routes.progreso = function () {
    const s = st(); const wrap = h('div', { class: 'page' });
    const est = P.estimate();
    wrap.append(h('h1', null, 'Progreso'));
    wrap.append(h('div', { class: 'card level-est' }, h('div', { class: 'big' }, est.label), h('div', { class: 'muted small' }, 'Geschat niveau op basis van je units en examens'),
      h('div', { class: 'lv-bars' }, C.LEVELS.map(L => h('div', { class: 'lv-bar' }, h('b', null, L.id), bar(P.levelProgress(L.id), L.color), h('small', null, C.available(L.id) ? Math.round(P.levelProgress(L.id) * 100) + '%' : 'binnenkort'))))));
    const words = Object.keys(s.srs).filter(k => k.startsWith('w|'));
    const cnt = { learning: 0, known: 0, mastered: 0 }; words.forEach(k => { cnt[SRS.status(k)]++; });
    const totalMin = Object.values(s.days).reduce((a, d) => a + d.min, 0);
    const totItems = Object.values(s.days).reduce((a, d) => a + d.items, 0), totOk = Object.values(s.days).reduce((a, d) => a + d.ok, 0);
    wrap.append(h('div', { class: 'stat-grid' },
      statCard('🔥', Store.liveStreak(), 'dagen op rij', 'record: ' + s.streak.best),
      statCard('⭐', s.xp, 'XP totaal'),
      statCard('⏱️', Math.round(totalMin), 'minuten geoefend'),
      statCard('📚', words.length, 'woorden geleerd', cnt.mastered + ' beheerst · ' + cnt.known + ' bekend'),
      statCard('🎯', totItems ? Math.round(totOk / totItems * 100) + '%' : '—', 'nauwkeurigheid', totItems + ' antwoorden'),
      statCard('🏅', C.all().filter(u => P.unitState(u.id).done).length + '/' + C.all().length, 'units afgerond')));
    // vaardigheden
    const sk = [['vocab', '📚 Woordenschat'], ['grammar', '🧩 Grammatica'], ['listen', '🎧 Luisteren'], ['read', '📖 Lezen'], ['speak', '🎙️ Spreken'], ['write', '✍️ Schrijven']];
    wrap.append(section('Vaardigheden', h('div', { class: 'card' }, sk.map(([k, l]) => {
      const v = s.skills[k]; const n = v.ok + v.no;
      return h('div', { class: 'skill-row' }, h('span', null, l), bar(n ? v.ok / n : 0), h('small', { class: 'muted' }, n ? Math.round(v.ok / n * 100) + '% · ' + n : '—'));
    }))));
    // activiteit
    wrap.append(section('Activiteit (12 weken)', heatmap()));
    // forecast
    const fc = SRS.forecast(7); const mx = Math.max(1, ...fc);
    wrap.append(section('Herhaling komende 7 dagen', h('div', { class: 'card forecast' }, fc.map((n, i) => h('div', { class: 'fc' }, h('i', { style: { height: Math.max(3, n / mx * 70) + 'px' } }), h('b', null, n), h('small', null, i === 0 ? 'vandaag' : ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'][new Date(Date.now() + i * 864e5).getDay()]))))));
    // zwakke punten
    const weak = weakTags();
    if (weak.length) wrap.append(section('Aandachtspunten', h('div', { class: 'card' }, weak.map(([t, v]) => h('div', { class: 'weak-row' }, h('span', { class: 'grow' }, C.tag(t)), bar(v.ok / (v.ok + v.no), '#e2603a'), h('small', { class: 'muted' }, Math.round(v.ok / (v.ok + v.no) * 100) + '%'))),
      h('button', { class: 'btn primary wide', type: 'button', onclick: () => runSession(Gen.weakTraining(weak.map(w => w[0]))) }, 'Oefen deze punten'))));
    // badges
    wrap.append(section('Badges', h('div', { class: 'badges' }, Object.entries(BADGES).map(([id, b]) => h('div', { class: 'badge' + (s.badges.includes(id) ? ' on' : ''), title: b[2] }, h('span', null, b[0]), h('small', null, b[1]))))));
    // data
    wrap.append(section('Je gegevens', dataTools()));
    return wrap;
  };
  function statCard(icon, v, l, sub) { return h('div', { class: 'stat-card' }, h('span', { class: 'si' }, icon), h('b', null, String(v)), h('span', null, l), sub ? h('small', { class: 'muted' }, sub) : null); }
  function heatmap() {
    const days = st().days; const grid = h('div', { class: 'heat' });
    const today = new Date(); const start = new Date(today.getTime() - 83 * 864e5);
    const pad = (start.getDay() + 6) % 7; for (let i = 0; i < pad; i++) grid.append(h('i', { class: 'pad' }));
    for (let i = 0; i < 84; i++) {
      const d = new Date(start.getTime() + i * 864e5); const k = U.todayKey(new Date(d.getTime() + 4 * 3600e3)); const m = days[k] ? days[k].min : 0;
      const lv = m <= 0 ? 0 : m < 5 ? 1 : m < 15 ? 2 : m < 25 ? 3 : 4;
      grid.append(h('i', { class: 'l' + lv, title: k + ': ' + Math.round(m) + ' min' }));
    }
    return h('div', { class: 'card' }, grid, h('div', { class: 'row gap small muted' }, 'minder', [0, 1, 2, 3, 4].map(l => h('i', { class: 'heat-key l' + l })), 'meer'));
  }
  function dataTools() {
    const file = h('input', { type: 'file', accept: '.json,application/json', hidden: true, onchange: async e => {
      const f = e.target.files[0]; if (!f) return;
      try { Store.import(await f.text()); S.toast('✅ Back-up teruggezet'); applyTheme(); render(); } catch (err) { S.toast('⚠️ ' + err.message); }
    } });
    const where = S.Sync && S.Sync.enabled() ? 'Je voortgang wordt via GitHub gesynchroniseerd tussen je apparaten (zie Instellingen). Een back-up maken kan altijd nog.' : 'Je voortgang staat alleen op dit apparaat. Maak af en toe een back-up, of zet synchroniseren via GitHub aan bij Instellingen.';
    return h('div', { class: 'card' }, h('p', { class: 'small muted' }, where),
      h('div', { class: 'row gap wrap' },
        h('button', { class: 'btn ghost', type: 'button', onclick: () => {
          const data = JSON.parse(Store.export()); data.settings.aiKey = '';
          const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
          const a = h('a', { href: URL.createObjectURL(blob), download: 'espanol-latino-backup-' + U.todayKey() + '.json' }); document.body.append(a); a.click(); a.remove();
        } }, '⬇️ Back-up downloaden'),
        h('button', { class: 'btn ghost', type: 'button', onclick: () => file.click() }, '⬆️ Back-up terugzetten'), file));
  }

  /* ================= REGIO’S ================= */
  routes.regios = function () {
    const wrap = h('div', { class: 'page' });
    wrap.append(h('a', { class: 'back', href: '#/ruta' }, '← Ruta'), h('h1', null, '🌎 Regio’s'),
      h('p', { class: 'muted' }, 'Je praat met mensen uit verschillende landen, dus het helpt om de grootste verschillen te herkennen. In de lessen leer je een neutraal Latijns-Amerikaans Spaans dat overal wordt begrepen. Hier vind je per regio de typische kenmerken.'));
    S.regions.forEach(r => wrap.append(h('details', { class: 'card region' },
      h('summary', null, h('span', { class: 'flag' }, r.flag), h('b', null, r.name), h('small', { class: 'muted' }, r.speakers)),
      h('ul', null, r.traits.map(t => h('li', null, t))),
      h('div', { class: 'word-list' }, r.words.map(([es, nl]) => h('div', { class: 'word-row' }, S.Lesson.speakBtn(es), h('div', { class: 'grow' }, h('b', { lang: 'es' }, es), h('span', null, nl))))))));
    return wrap;
  };
  routes.regios.tab = 'ruta';

  /* ================= PLAATSINGSTOETS ================= */
  routes.toets = function () {
    const wrap = h('div', { class: 'page' });
    wrap.append(h('h1', null, '🧭 Plaatsingstoets'),
      h('div', { class: 'card' }, h('p', null, 'Je krijgt tot 4 korte blokken van 8 vragen: A1, A2, B1 en B2. Haal je minstens 6 van de 8 goed, dan ga je door naar het volgende blok. Je ziet pas aan het eind hoe je het gedaan hebt.'),
        h('p', { class: 'small muted' }, 'Tip: weet je het niet? Gok dan niet, maar kies wat je het meest logisch vindt. Zo krijg je het eerlijkste resultaat.'),
        h('button', { class: 'btn primary wide', type: 'button', onclick: () => runPlacement() }, 'Start')));
    return wrap;
  };
  function runPlacement() {
    const order = ['A1', 'A2', 'B1', 'B2']; const scores = {};
    const step = (i) => {
      const lvl = order[i];
      S.Lesson.run(Gen.placementBand(lvl), {
        onItem: () => {},
        onFinish: sum => {
          scores[lvl] = sum.ok;
          const pass = sum.ok >= 6;
          if (pass && i < order.length - 1) return { silent: true, next: () => step(i + 1) };
          return { silent: true, next: () => placementResult(scores) };
        },
        onClose: () => {}
      });
    };
    step(0);
  }
  function placementResult(scores) {
    const s = st();
    const order = ['A1', 'A2', 'B1', 'B2']; let level = null;
    for (const l of order) { if (scores[l] >= 6) level = l; else break; }
    let start, text;
    if (!scores.A2 && (scores.A1 || 0) < 6) { start = C.all()[0].id; text = (scores.A1 || 0) >= 4 ? 'Je kent al een flink deel van A1. Begin bij unit 1; units die je al beheerst, rond je snel af met «Ik ken dit al».' : 'Je begint bij A1, unit 1. ¡Vamos!'; }
    else if ((scores.A2 || 0) < 6) { start = C.unitsOf('A2')[0].id; text = 'Je beheerst A1. Je begint bij A2, unit 1: de verleden tijden. A1 blijft beschikbaar om te herhalen.'; }
    else if (C.unitsOf('B1').length) {
      start = C.unitsOf('B1')[0].id;
      text = (scores.B1 || 0) >= 6
        ? 'Sterk! Je zit op B1-niveau of hoger. Je begint bij B1, unit 1. Ken je een unit al, doe dan meteen de toets («Ik ken dit al»). Zo vind je snel je gaten.'
        : 'Je beheerst A2. Je begint bij B1, unit 1: de subjuntivo. A1 en A2 blijven beschikbaar om te herhalen.';
    }
    else {
      start = C.unitsOf('A2')[C.unitsOf('A2').length - 1].id;
      text = (scores.B1 || 0) >= 6
        ? 'Sterk! Je zit op B1-niveau of hoger. B1-lessen komen in de volgende fase. Doe tot die tijd per A2-unit de toets («Ik ken dit al»). Zo vind je je gaten en vult je herhaling zich met woorden en grammatica.'
        : 'Je hebt een goede A2-basis en zit op weg naar B1. B1-lessen komen in de volgende fase. Doe tot die tijd per A2-unit de toets («Ik ken dit al»). Waar je onder de 80% blijft, volg je de unit gewoon helemaal.';
    }
    const idx = C.index(start);
    C.all().slice(0, idx).forEach(u => { const us = Store.unit(u.id); if (!us.done) us.tested = true; });
    s.placement = { done: true, level: level || 'A1', start, date: Date.now(), scores };
    s.current = start; award('placement'); Store.touchStreak(); Store.save();
    lastPlacement = { scores, level, text };
    if (level) S.confetti();
    if (location.hash === '#/resultado') render(); else location.hash = '#/resultado';
  }
  let lastPlacement = null;
  routes.resultado = function () {
    const r = lastPlacement || (st().placement.scores ? { scores: st().placement.scores, level: st().placement.level, text: '' } : null);
    if (!r) return routes.hoy();
    const rows = ['A1', 'A2', 'B1', 'B2'].map(l => h('div', { class: 'lv-bar' }, h('b', null, l), bar(r.scores[l] != null ? r.scores[l] / 8 : 0, C.level(l).color), h('small', null, r.scores[l] != null ? r.scores[l] + '/8' : '—')));
    return h('div', { class: 'page' }, h('h1', null, 'Resultaat'),
      h('div', { class: 'card level-est' }, h('div', { class: 'big' }, r.level ? 'Niveau ' + r.level : 'Beginner'), h('div', { class: 'lv-bars' }, rows)),
      r.text ? h('p', null, r.text) : null,
      h('a', { class: 'btn primary wide', href: '#/hoy' }, 'Naar mijn plan voor vandaag'));
  };

  /* ================= AJUSTES ================= */
  routes.ajustes = function () {
    const s = st().settings; const wrap = h('div', { class: 'page' });
    const set = (k, v) => { s[k] = v; Store.save(); };
    wrap.append(h('h1', null, '⚙️ Instellingen'));
    const name = h('input', { class: 'input', value: st().name || '', placeholder: 'Je naam', onchange: e => { st().name = e.target.value.trim(); Store.save(); } });
    const goal = h('select', { class: 'input', onchange: e => set('goal', +e.target.value) }, [10, 15, 20, 30, 45].map(n => h('option', { value: n, selected: s.goal === n ? true : null }, n + ' minuten per dag')));
    const expl = h('select', { class: 'input', onchange: e => set('explain', e.target.value) },
      [['auto', 'Automatisch (NL tot A2, daarna steeds meer Spaans)'], ['nl', 'Altijd Nederlands'], ['mix', 'Nederlands met Spaanse samenvattingen'], ['es', 'Zoveel mogelijk Spaans']].map(([v, l]) => h('option', { value: v, selected: s.explain === v ? true : null }, l)));
    wrap.append(section('Algemeen', h('div', { class: 'card form' }, label('Naam', name), label('Dagdoel', goal), label('Taal van uitleg en instructies', expl),
      toggle('Accenten streng beoordelen', 'Een ontbrekend accent telt dan als fout (aanrader vanaf B1).', s.strictAccents, v => set('strictAccents', v)),
      toggle('Geluidseffecten', null, s.sound, v => set('sound', v)),
      toggle('Antwoorden automatisch voorlezen', 'Na elke vraag hoor je het juiste Spaanse antwoord.', s.autoSpeak, v => set('autoSpeak', v)),
      label('Thema', h('select', { class: 'input', onchange: e => { set('theme', e.target.value); applyTheme(); } }, [['auto', 'Automatisch'], ['light', 'Licht'], ['dark', 'Donker']].map(([v, l]) => h('option', { value: v, selected: s.theme === v ? true : null }, l)))))));
    // stem
    const voiceSel = h('select', { class: 'input', onchange: e => set('voice', e.target.value) });
    const fillVoices = () => {
      voiceSel.innerHTML = ''; voiceSel.append(h('option', { value: '' }, 'Automatisch (beste Latijns-Amerikaanse stem)'));
      Speech.voices.slice().sort((a, b) => Speech.rank(b) - Speech.rank(a)).forEach(v => voiceSel.append(h('option', { value: v.voiceURI, selected: s.voice === v.voiceURI ? true : null }, v.name + ' (' + v.lang + ')' + (/es-es/i.test(v.lang) ? ' — Spanje' : ''))));
    };
    fillVoices(); setTimeout(fillVoices, 700);
    const rate = h('input', { type: 'range', min: 0.6, max: 1.2, step: 0.05, value: s.rate, oninput: e => set('rate', +e.target.value) });
    wrap.append(section('Stem & uitspraak', h('div', { class: 'card form' },
      Speech.clips ? toggle('Ingesproken opnames gebruiken', '🎧 ' + Speech.clips.size.toLocaleString('nl-NL') + ' woorden en zinnen zijn ingesproken met natuurlijke Latijns-Amerikaanse stemmen. Wat niet is ingesproken, leest je apparaat zelf voor.', s.clips !== false, v => set('clips', v)) : null,
      Speech.canSpeak() ? label(Speech.clips ? 'Stem van het apparaat (voor de rest)' : 'Voorleesstem', voiceSel) : h('p', { class: 'warn' }, 'Je browser ondersteunt geen voorlezen.'),
      label('Spreeksnelheid', rate),
      h('button', { class: 'btn ghost', type: 'button', onclick: () => Speech.say('¡Hola! ¿Cómo estás? Bienvenido a tu clase de español.') }, '🔊 Test de stem'),
      h('p', { class: 'small muted' }, Speech.voices.some(v => Speech.rank(v) >= 85) ? '✅ Er is een Latijns-Amerikaanse stem gevonden.' : 'Tip: installeer in de instellingen van je apparaat een Spaanse stem (Mexico of VS). Op een iPhone: Instellingen › Toegankelijkheid › Gesproken materiaal › Stemmen › Spaans (Mexico).'),
      h('p', { class: 'small muted' }, Speech.canListen() ? '🎙️ Spraakherkenning is beschikbaar.' : '🎙️ Spraakherkenning werkt niet in deze browser. Gebruik Chrome of Safari voor spreekoefeningen.'))));
    // AI
    const keyIn = h('input', { class: 'input', type: 'password', placeholder: 'sk-ant-…', value: s.aiKey || '', autocomplete: 'off', onchange: e => { set('aiKey', e.target.value.trim()); } });
    const modelSel = h('select', { class: 'input', onchange: e => set('aiModel', e.target.value) }, S.AI.MODELS.map(m => h('option', { value: m.id, selected: s.aiModel === m.id ? true : null }, m.label)));
    const testOut = h('span', { class: 'small' });
    wrap.append(section('🤖 AI-docent (optioneel)', h('div', { class: 'card form' },
      h('p', { class: 'small muted' }, 'Maak een API-sleutel aan op console.anthropic.com (je betaalt per gebruik). De sleutel wordt alleen in deze browser bewaard en rechtstreeks naar Anthropic gestuurd. Hij komt nooit in back-ups terecht. Gebruik dit alleen op je eigen apparaat.'),
      label('API-sleutel', keyIn), label('Model', modelSel),
      h('div', { class: 'row gap' }, h('button', { class: 'btn ghost', type: 'button', onclick: async () => { set('aiKey', keyIn.value.trim()); testOut.textContent = 'Testen…'; try { const t = await S.AI.test(); testOut.textContent = '✅ Werkt: ' + t; } catch (e) { testOut.textContent = '⚠️ ' + e.message; } } }, 'Test verbinding'), testOut),
      s.aiKey ? h('button', { class: 'btn link', type: 'button', onclick: () => { set('aiKey', ''); render(); } }, 'Sleutel verwijderen') : null)));
    wrap.append(section('☁️ Synchroniseren (optioneel)', syncCard()));
    wrap.append(section('Lessen', h('div', { class: 'card form' },
      toggle('Alle units ontgrendelen', 'Vrij door de stof bladeren, zonder volgorde.', s.unlockAll, v => set('unlockAll', v)),
      h('a', { class: 'btn ghost', href: '#/toets' }, '🧭 Plaatsingstoets opnieuw doen'))));
    wrap.append(section('Gegevens', dataTools(), h('div', { class: 'card' }, h('button', { class: 'btn danger', type: 'button', onclick: () => S.confirm('Alles wissen?', 'Al je voortgang, woorden en statistieken worden verwijderd' + (S.Sync && S.Sync.enabled() ? ', ook op je andere gekoppelde apparaten' : '') + '. Dit kan niet ongedaan worden gemaakt. Maak eerst een back-up!', 'Alles wissen', () => { Store.reset(); location.hash = '#/hoy'; render(); }) }, '🗑 Voortgang wissen'))));
    wrap.append(section('ℹ️ Over de app', versionCard()));
    wrap.append(h('p', { class: 'muted small center' }, 'Español Latino ' + appVersion() + ' · lesstof A1–A2 · ' + C.all().length + ' units · ' + C.all().reduce((a, u) => a + u.vocab.length, 0) + ' woorden · ' + Object.keys(S.conj.VERBS).length + ' werkwoorden'));
    return wrap;
  };
  routes.ajustes.tab = 'progreso';
  function ago(t) {
    if (!t) return 'nog nooit';
    const m = Math.round((Date.now() - t) / 60000);
    return m < 1 ? 'zojuist' : m < 60 ? m + ' min geleden' : m < 1440 ? Math.round(m / 60) + ' uur geleden' : new Date(t).toLocaleDateString('nl-NL');
  }
  function syncCard() {
    const Sync = S.Sync; const card = h('div', { class: 'card form sync-card' }); let msg = '';
    const draw = () => {
      const s = Sync.status(); card.innerHTML = '';
      if (!s.enabled) {
        const tokIn = h('input', { class: 'input', type: 'password', placeholder: 'github_pat_… of ghp_…', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' });
        const out = h('p', { class: 'small' + (msg ? ' warn' : ''), role: 'status' }, msg);
        const btn = h('button', { class: 'btn primary', type: 'button', onclick: async () => {
          btn.disabled = true; out.textContent = 'Verbinden…'; msg = '';
          try { const r = await Sync.connect(tokIn.value); S.toast('☁️ Verbonden als @' + r.login); render(); }
          catch (e) { msg = '⚠️ ' + e.message; draw(); }
        } }, 'Verbinden');
        card.append(
          h('p', { class: 'small muted' }, 'Wil je op je iPad, telefoon en computer met dezelfde voortgang verder? Koppel dan een GitHub-token. Je voortgang wordt dan in een geheime gist op je eigen GitHub-account bewaard en op elk apparaat automatisch bijgewerkt.'),
          h('ol', { class: 'small steps-list' },
            h('li', null, 'Open ', h('a', { href: 'https://github.com/settings/personal-access-tokens/new?name=Espa%C3%B1ol%20Latino%20sync&description=Voortgang%20synchroniseren%20(alleen%20gists)&expires_in=366&gists=write', target: '_blank', rel: 'noopener' }, 'deze link naar GitHub'), '. Naam, vervaldatum (1 jaar) en het juiste recht staan al ingevuld.'),
            h('li', null, 'Controleer dat bij ', h('b', null, 'Account permissions'), ' alleen ', h('b', null, 'Gists'), ' op ', h('b', null, 'Read and write'), ' staat. Meer is niet nodig.'),
            h('li', null, 'Maak het token aan, kopieer het en plak het hieronder. Doe dit op elk apparaat.')),
          label('GitHub-token', tokIn), h('div', { class: 'row gap wrap' }, btn), out,
          h('p', { class: 'small muted' }, 'Het token blijft alleen in deze browser en gaat rechtstreeks naar GitHub. Het komt nooit in je voortgang, back-ups of de gist. Je AI-sleutel wordt niet gesynchroniseerd.'));
        return;
      }
      const state = s.busy ? '🔄 Bezig met synchroniseren…' : s.error ? '⚠️ ' + s.error : s.pending ? '⏳ Wijzigingen worden zo geüpload' : '✅ Bijgewerkt ' + ago(s.last);
      card.append(
        h('div', { class: 'row gap between wrap' }, h('div', null, h('b', null, 'Verbonden met GitHub'), h('small', { class: 'muted', style: { display: 'block' } }, s.login ? '@' + s.login : '')), h('span', { class: 'small' + (s.error ? ' warn' : '') }, state)),
        h('p', { class: 'small muted' }, 'Je voortgang wordt automatisch opgehaald als je de app opent en geüpload na het oefenen. Oefen je op twee apparaten tegelijk? Dan worden woorden, units en statistieken samengevoegd.'),
        h('div', { class: 'row gap wrap' },
          h('button', { class: 'btn ghost', type: 'button', disabled: s.busy ? true : null, onclick: () => Sync.syncNow().then(() => S.toast('☁️ Gesynchroniseerd')).catch(e => S.toast('⚠️ ' + e.message)) }, '🔄 Nu synchroniseren'),
          s.gistId && s.login ? h('a', { class: 'btn link', href: 'https://gist.github.com/' + s.login + '/' + s.gistId, target: '_blank', rel: 'noopener' }, 'Bekijk gist') : null,
          h('button', { class: 'btn link', type: 'button', onclick: () => S.confirm('Ontkoppelen?', 'Dit apparaat stopt met synchroniseren en vergeet het token. Je voortgang blijft op dit apparaat én in de gist staan.', 'Ontkoppelen', () => { Sync.disconnect(); render(); }) }, 'Ontkoppelen')));
    };
    draw();
    const off = Sync.onChange(() => { if (!card.isConnected) { off(); return; } if (!card.contains(document.activeElement)) draw(); });
    return card;
  }
  /* ---------- versie en updates ---------- */
  const V = self.SPT_VERSION || { number: '?', date: '' };
  function appVersion() { return 'v' + V.number; }
  function versionDate(d) { return d ? new Date(d + 'T12:00:00').toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }) : ''; }
  async function latestVersion() {
    const r = await fetch('js/version.js?t=' + Date.now(), { cache: 'no-store' });
    if (!r.ok) throw new Error('Kon de nieuwste versie niet ophalen (' + r.status + ').');
    const t = await r.text(); const n = /number:\s*'([^']+)'/.exec(t), d = /date:\s*'([^']+)'/.exec(t);
    if (!n) throw new Error('Onbekend versiebestand.');
    return { number: n[1], date: d ? d[1] : '' };
  }
  async function updateNow() {
    try { const reg = navigator.serviceWorker && await navigator.serviceWorker.getRegistration(); if (reg) await reg.update(); } catch (e) { /* geen service worker: gewoon herladen */ }
    location.reload();
  }
  function versionCard() {
    const out = h('p', { class: 'small', role: 'status' });
    const btn = h('button', { class: 'btn ghost', type: 'button', onclick: async () => {
      btn.disabled = true; out.className = 'small'; out.textContent = 'Controleren…';
      try {
        const L = await latestVersion();
        if (L.number === V.number) out.textContent = '✅ Je hebt de nieuwste versie.';
        else {
          out.textContent = '';
          out.append('🆕 Versie ' + L.number + (L.date ? ' (' + versionDate(L.date) + ')' : '') + ' staat klaar. ',
            h('button', { class: 'btn primary', type: 'button', onclick: updateNow }, 'Nu bijwerken'));
        }
      } catch (e) { out.className = 'small warn'; out.textContent = '⚠️ ' + (navigator.onLine === false ? 'Je bent offline. Probeer het later opnieuw.' : e.message); }
      btn.disabled = false;
    } }, '🔄 Controleren op updates');
    return h('div', { class: 'card form' },
      h('div', { class: 'row gap between wrap' },
        h('div', null, h('b', null, 'Versie ' + V.number), h('small', { class: 'muted', style: { display: 'block' } }, versionDate(V.date))),
        btn),
      out,
      h('p', { class: 'small muted' }, 'Na een update zie je hier een hoger versienummer. Staat er nog het oude nummer? Tik dan op «Controleren op updates».'));
  }
  function label(t, el) { return h('label', { class: 'field' }, h('span', null, t), el); }
  function toggle(t, sub, val, fn) {
    return h('label', { class: 'switch-row' }, h('div', { class: 'grow' }, h('b', null, t), sub ? h('small', { class: 'muted' }, sub) : null),
      h('input', { type: 'checkbox', class: 'switch', checked: val ? true : null, onchange: e => fn(e.target.checked) }));
  }

  /* ================= opstarten ================= */
  function applyTheme() {
    const t = st().settings.theme;
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme');
  }
  function boot() {
    Store.load();
    applyTheme(); Speech.init();
    const ver = document.getElementById('tb-ver'); if (ver) ver.textContent = appVersion();
    window.addEventListener('hashchange', render);
    render();
    if (S.Sync) S.Sync.init();
    if ('serviceWorker' in navigator && /^https:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js?v=' + encodeURIComponent(V.number)).catch(() => {});
  }
  S.P = P;
  document.addEventListener('DOMContentLoaded', boot);
})(window.SPT);
