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
  S.confirm = function (title, text, okLabel, onOk, cancelLabel = 'Annuleren', onCancel) {
    const root = document.getElementById('modal-root');
    const close = () => { root.innerHTML = ''; };
    root.append(h('div', { class: 'modal-bg', onclick: e => { if (e.target.classList.contains('modal-bg')) close(); } },
      h('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true' }, h('h3', null, title), h('p', null, text),
        h('div', { class: 'row gap end' }, h('button', { class: 'btn ghost', type: 'button', onclick: () => { close(); if (onCancel) onCancel(); } }, cancelLabel),
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
    'first': ['🌱', 'Eerste les', 'Je eerste les afgerond'], 'placement': ['🧭', 'Niveautest', 'Niveautest gedaan'],
    'streak3': ['🔥', '3 dagen', '3 dagen op rij geoefend'], 'streak7': ['🔥', 'Een week', '7 dagen op rij'], 'streak30': ['🌋', 'Een maand', '30 dagen op rij'],
    'words50': ['📚', '50 woorden', '50 woorden in je herhaling'], 'words250': ['📚', '250 woorden', '250 woorden in je herhaling'], 'words500': ['🏛️', '500 woorden', '500 woorden in je herhaling'],
    'unit1': ['🏅', 'Eerste unit', 'Je eerste unit gehaald'], 'perfect': ['💯', 'Foutloos', 'Een unittoets 100% gehaald'],
    'A1': ['🥉', 'A1 behaald', 'Niveau-examen A1 gehaald'], 'A2': ['🥈', 'A2 behaald', 'Niveau-examen A2 gehaald'],
    'ai': ['🤖', 'Eerste gesprek', 'Een gesprek met de AI-docent gevoerd'], 'goal': ['🎯', 'Dagdoel', 'Je dagdoel gehaald'],
    'game': ['🎲', 'Speler', 'Je eerste woordspel uitgespeeld'], 'games10': ['🧩', 'Puzzelaar', '10 woordspellen uitgespeeld'],
    'plan': ['🎁', 'Dagplan', 'Je eerste dagplan helemaal afgerond'], 'plan7': ['🗓️', 'Zeven plannen', '7 dagplannen afgerond'], 'plan30': ['🏆', 'Dertig plannen', '30 dagplannen afgerond'],
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
    const lt = (s.tests || [])[(s.tests || []).length - 1]; const pl = (lt && lt.level) || s.placement.level;
    return { label: (frac < 0.15 && pl && pl > lvl ? pl : lvl) + (frac > 0 ? ' · ' + Math.round(frac * 100) + '%' : ''), lvl, frac };
  };

  /* Wordt per beantwoord item aangeroepen (eerste poging). */
  const stepWrong = new Set();
  function recordItem(it, ok, r) {
    const d = Store.today(); d.items++; if (ok) d.ok++;
    if (it.skill) Store.skill(it.skill, ok);
    if (it.tag) Store.mark(it.tag, ok);
    if (it.srsId && it.wt && (!SRS.has(it.srsId) || (r && r.override && (st().srs[it.srsId].s || 0) >= Date.now() - 864e5 && st().srs[it.srsId].i === 0))) {
      // woordtoets: nieuw woord goed = meteen bekend (interval it.wt), fout of met hint = vandaag in de herhaling
      const known = ok && !(r && (r.hinted || r.alt));
      if (!SRS.has(it.srsId)) SRS.add(it.srsId, known ? it.wt : 0);
      else if (known) { const c = st().srs[it.srsId]; c.i = it.wt; c.d = U.dayIndex() + it.wt; c.l = Math.max(0, c.l - 1); }
      const c = st().srs[it.srsId]; c.t = Date.now(); if (known) c.g = (c.g || 0) + 1; else c.f = (c.f || 0) + 1;
      if (r && r.override && c.f) { c.f--; }
      // zin half goed: bij de herhaling staan de goede woorden er al (zoals bij gewone lessen)
      if (it.translate && !ok && r && S.check.partsUsable(r.parts)) (st().partial || (st().partial = {}))[it.srsId] = { a: r.parts.a, k: r.parts.k, t: Date.now() };
    } else if (it.srsId) {
      if (SRS.has(it.srsId) && ok && r && (r.hinted || r.alt) && !r.override) { const c = st().srs[it.srsId]; c.t = Date.now(); c.r = 0; c.i = 1; c.d = Math.min(c.d, U.dayIndex() + 1); }
      else if (SRS.has(it.srsId)) { if (!r || !r.override) SRS.grade(it.srsId, ok); else { const c = st().srs[it.srsId]; if (c) { c.l = Math.max(0, c.l - 1); if (c.f) { c.f--; c.g = (c.g || 0) + 1; } } } }
      else if (!ok) stepWrong.add(it.srsId); else if (r && r.override && !r.alt) stepWrong.delete(it.srsId);
      // zin half goed: bij de volgende herhaling staan de goede woorden er al
      if (it.translate) {
        const P = st().partial || (st().partial = {});
        if (!ok && r && S.check.partsUsable(r.parts)) P[it.srsId] = { a: r.parts.a, k: r.parts.k, t: Date.now() };
        else if (P[it.srsId] && P[it.srsId].a && ok) P[it.srsId] = { t: Date.now() };
      }
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
    Store.addXP((sum.newXp ?? sum.xp) + extraXP); addTime(sum.newMinutes ?? sum.minutes);
    Store.touchStreak(); award('first'); checkBadges(); Store.save();
  }
  /* Onderbroken oefeningen. opts.desc zegt hoe we de les later weer opbouwen (welke unit/stap, herhaling …). */
  const Paused = S.Paused;
  const pauseKey = d => JSON.stringify(d || { kind: 'plain' });
  function runSession(session, opts = {}) {
    const desc = opts.desc || { kind: 'plain' };
    const resumable = !session.timer && session.mode !== 'exam';
    const p = Paused.get();
    if (resumable && !session.resume && p && !opts.fresh) {
      const go = () => runSession(session, Object.assign({}, opts, { fresh: true }));
      const where = `${p.title} (vraag ${Math.min(p.idx + 1, p.n)} van ${p.n})`;
      if (pauseKey(p.desc) === pauseKey(desc)) S.confirm('Verder waar je was?', `Je was hier gebleven: ${where}. Je antwoorden en score staan nog klaar.`, '▶ Verder gaan', resumePaused, 'Opnieuw beginnen', go);
      else S.confirm('Onderbroken oefening', `Je hebt nog een onderbroken oefening: ${where}. Begin je nu iets nieuws, dan vervalt die.`, '▶ Eerst die afmaken', resumePaused, 'Nieuw beginnen', go);
      return;
    }
    stepWrong.clear();
    if (session.resume) {
      // fout gemaakte nieuwe kaarten van vóór de pauze komen straks met interval 0 in de herhaling
      Paused.unpack(session.resume).graded.forEach((ok, it) => { if (!ok && it.srsId && !SRS.has(it.srsId)) stepWrong.add(it.srsId); });
    }
    const meta = { title: session.title, mode: session.mode, pass: session.pass, srsAdd: session.srsAdd, offerRoleplay: session.offerRoleplay };
    S.Lesson.run(session, {
      persist: resumable ? snap => {
        if (!snap) Paused.clear();
        else Paused.set({ desc, meta, title: session.title || 'Oefening', idx: snap.idx, n: snap.queue.length, snap });
      } : null,
      onItem: recordItem,
      onFinish: sum => {
        if (session.srsAdd) session.srsAdd.forEach(id => SRS.add(id, stepWrong.has(id) ? 0 : 1));
        if (desc.mark) Store.today().done[desc.mark] = true;
        const extra = opts.onFinish ? opts.onFinish(sum) || {} : {};
        afterSession(sum, extra.bonusXP || 0);
        if (session.mode !== 'exam' || !extra.silent) extra.plan = close => planStrip(close);
        return extra;
      },
      onAbort: sum => { Store.addXP(sum.newXp); addTime(sum.newMinutes); if (sum.total) Store.touchStreak(); Store.save(); render(); },
      onClose: () => { if (opts.onClose) opts.onClose(); render(); }
    });
  }
  S.runSession = runSession;
  function resumePaused() {
    const p = Paused.get(); if (!p) { render(); return; }
    const session = Object.assign({}, p.meta, { items: [], resume: p.snap });
    const d = p.desc || {};
    if (d.kind === 'step') { const u = C.get(d.unit); if (!u) { Paused.clear(); render(); return; } startStep(u, d.step, session); }
    else if (d.kind === 'review') startReview(d.limit, session);
    else if (d.kind === 'exam') startLevelExam(d.lvl, session);
    else if (d.kind === 'woordtoets') S.WordTest.resume(session, d);
    else if (d.kind === 'place' && S.Mundo) S.Mundo.resume(session, d);
    else runSession(session, { desc: d });
  }
  function pausedCard() {
    const p = Paused.get(); if (!p) return null;
    const at = Math.min(p.idx + 1, p.n), ago = Date.now() - (st().paused.t || 0);
    const when = ago < 36e5 ? 'zojuist' : ago < 864e5 ? 'vandaag' : 'op ' + new Date(st().paused.t).toLocaleDateString(S.LOC, { day: 'numeric', month: 'long' });
    return h('div', { class: 'plan-card paused' },
      h('div', { class: 'pc-icon' }, S.Icons.el('pause')),
      h('div', { class: 'pc-body' }, h('b', null, 'Verder waar je was'), h('span', null, `${p.title} · vraag ${at} van ${p.n}`),
        h('div', { class: 'pbar' }, h('i', { style: { width: Math.round(p.idx / Math.max(1, p.n) * 100) + '%' } })),
        h('small', null, 'Onderbroken ' + when + '. Je antwoorden en score zijn bewaard.')),
      h('div', { class: 'pc-acts' },
        h('button', { class: 'btn primary', type: 'button', onclick: resumePaused }, '▶ Verder'),
        h('button', { class: 'btn link small', type: 'button', onclick: () => S.confirm('Opnieuw beginnen?', `Je begint ${p.title} weer bij vraag 1. De score van deze poging vervalt; wat je al beantwoord hebt, telt wel mee voor je herhaling.`, '↺ Opnieuw beginnen', restartPaused) }, '↺ Opnieuw beginnen')));
  }
  /* Dezelfde oefening vanaf vraag 1, in plaats van de onderbroken poging te hervatten. */
  function restartPaused() {
    const p = Paused.get(); if (!p) { render(); return; }
    const d = p.desc || {};
    Paused.clear();
    if (d.kind === 'step') { const u = C.get(d.unit); if (u) startStep(u, d.step); }
    else if (d.kind === 'review') startReview(d.limit);
    else if (d.kind === 'exam') startLevelExam(d.lvl);
    else {
      // losse oefening (spreken, dictee …): dezelfde vragen opnieuw, zonder de herhaalkopieën
      const items = Paused.unpack(p.snap).queue.filter(it => !it.orig);
      runSession(Object.assign({}, p.meta, { items }), { desc: d });
    }
    if (!document.body.classList.contains('in-lesson')) render(); // niets te starten: kaart weg
  }
  /* Voor activiteiten buiten de lessen om (woordspellen): XP, tijd, streak en badges. */
  S.App = {
    finishActivity({ xp = 0, minutes = 0, game = null, stats = null } = {}) {
      Store.addXP(xp); addTime(minutes);
      if (stats && stats.id && stats.words) {
        const gs = st().games[stats.id] || (st().games[stats.id] = { n: 0, words: 0, good: 0 });
        if (game) gs.n++; gs.words += stats.words; gs.good += stats.good || 0;
      }
      if (xp || game) Store.touchStreak();
      if (game) {
        const d = Store.today(); d.done.games = true;
        const n = st().done.games = (st().done.games || 0) + 1;
        award('game'); if (n >= 10) award('games10');
      }
      checkBadges(); Store.save();
    }
  };

  function startStep(u, stepId, resumed) {
    const session = resumed || Gen.stepSession(u, stepId);
    if (!session || (!session.items.length && !session.resume)) { S.toast('Deze stap heeft geen oefeningen.'); return; }
    runSession(session, {
      desc: { kind: 'step', unit: u.id, step: stepId },
      onFinish: sum => {
        const us = Store.unit(u.id);
        const step = Gen.STEPS.find(s => s.id === stepId);
        const today = Store.today().done; today.learn = (today.learn || 0) + 1; today.learnLast = step.nl + ' · ' + u.title;
        if (stepId === 'test') {
          const passed = sum.score >= (session.pass || 0.8);
          us.best = Math.max(us.best || 0, sum.score);
          st().fast = sum.score >= 0.9 ? (st().fast || 0) + 1 : 0;
          if (passed) {
            us.steps.test = true; us.done = true;
            award('unit1'); if (sum.score === 1) award('perfect');
            const nxt = C.next(u.id);
            if (st().current === u.id && nxt) st().current = nxt.id;
            const lvlDone = C.unitsOf(u.level).every(x => P.unitState(x.id).done || P.unitState(x.id).tested);
            const res = { passed: true, unitDone: true, bonusXP: 100 + (sum.score === 1 ? 50 : 0), emoji: '🏅', title: '¡Unidad completada!',
              text: lvlDone ? `Alle units van ${u.level} zijn klaar. Tijd voor het niveau-examen! 🎓` : (nxt ? 'Volgende unit ontgrendeld: ' + nxt.icon + ' ' + nxt.title : ''),
              nextLabel: nxt && !lvlDone ? 'Naar de volgende unit' : 'Klaar', next: () => { location.hash = nxt && !lvlDone ? '#/unit/' + nxt.id : '#/ruta'; } };
            // gaat het heel goed? stel voor om sneller door de stof te gaan
            const lv = st().levels[u.level];
            if (!lvlDone && st().fast >= 3 && !(lv && lv.passed)) {
              res.text = `⚡ ${st().fast} unittoetsen op rij met 90% of meer! Misschien beheers je ${u.level} al. Met het niveau-examen ${u.level} weet je het zeker. Haal je het, dan kun je meteen door naar het volgende niveau.`;
              res.alt = { label: '🎓 Niveau-examen ' + u.level, fn: () => startLevelExam(u.level) };
            } else if (!lvlDone && nxt && nxt.level === u.level && sum.score >= 0.95 && !P.unitState(nxt.id).done) {
              res.text = `⚡ ${Math.round(sum.score * 100)}%, sterk! Ken je ${nxt.icon} ${nxt.title} misschien ook al? Doe dan meteen die toets. Haal je 80%, dan is ook die unit klaar.`;
              res.alt = { label: '⚡ Volgende unit direct toetsen', fn: () => startStep(nxt, 'test') };
            }
            return res;
          }
          return { passed: false, emoji: '💪', title: 'Bijna!', text: `Je had ${Math.round(sum.score * 100)}%. Je hebt 80% nodig. Bekijk je fouten, herhaal de lastige stappen en probeer het opnieuw.`, nextLabel: 'Terug naar de unit', next: () => { location.hash = '#/unit/' + u.id; }, alt: { label: '🔁 Opnieuw', fn: () => startStep(u, 'test') } };
        }
        us.steps[stepId] = true;
        if (!st().current || P.unitState(st().current).done) st().current = u.id;
        const nxtStep = P.nextStep(u);
        const extra = { bonusXP: 20, title: step.nl + ' ✓', text: nxtStep ? 'Volgende: ' + nxtStep.icon + ' ' + nxtStep.nl : '', nextLabel: nxtStep ? 'Volgende stap' : 'Klaar', next: () => { if (nxtStep) startStep(u, nxtStep.id); } };
        extra.alt = { label: 'Terug', fn: () => { location.hash = '#/unit/' + u.id; } };
        // snel en (bijna) foutloos? vraag of je de unit al beheerst
        const secs = sum.total ? sum.minutes * 60 / sum.total : 99;
        if (nxtStep && nxtStep.id !== 'test' && !us.offered && sum.total >= 8 && sum.score >= 0.9 && secs <= 12) {
          us.offered = true;
          return Object.assign(extra, { emoji: '⚡', title: 'Dit gaat je makkelijk af!',
            text: `${Math.round(sum.score * 100)}% goed, gemiddeld ${U.plural(Math.max(1, Math.round(secs)), 'seconde', 'seconden')} per vraag. Ken je de rest van ${u.icon} ${u.title} misschien al? Doe dan meteen de unittoets. Haal je 80%, dan is de unit klaar. Zo niet, dan ga je gewoon verder met ${nxtStep.nl}.`,
            nextLabel: '⚡ Direct naar de unittoets', next: () => startStep(u, 'test'),
            alt: { label: 'Gewoon verder: ' + nxtStep.nl, fn: () => startStep(u, nxtStep.id) } });
        }
        if (stepId === 'apply' && u.scenario) extra.alt = { label: S.AI.enabled() ? '🤖 Rollenspel met AI' : 'Terug', fn: () => { if (S.AI.enabled()) { startRoleplay(unitScenario(u)); location.hash = '#/docente'; } else location.hash = '#/unit/' + u.id; } };
        return extra;
      }
    });
  }
  S.startStep = startStep;

  function startReview(limit = 25, resumed) {
    const s = resumed || Gen.reviewSession(limit);
    if (!s.items.length && !s.resume) { S.toast('Niets te herhalen. ¡Bien hecho!'); return; }
    runSession(s, { desc: { kind: 'review', limit }, onFinish: sum => {
      Store.today().done.review = true;
      const left = Gen.reviewCount(), round = Math.min(left, limit), rest = left - round;
      return { lupe: left ? null : S.Tutor.lines.review, title: 'Herhaling klaar',
        text: left ? `Er ${left === 1 ? 'staat' : 'staan'} nog ${U.plural(left, 'herhaling', 'herhalingen')} klaar. Ga door of kom later terug.` : 'Alles herhaald voor vandaag! 🎉',
        nextLabel: left ? 'Nog een ronde' : 'Klaar',
        note: left ? (rest ? `Nog ${U.plural(left, 'herhaling', 'herhalingen')} · deze ronde doet er ${round}, daarna nog ${rest}` : `Nog ${U.plural(left, 'herhaling', 'herhalingen')} · deze ronde doet ze allemaal`) : '',
        next: () => { if (left) startReview(limit); } };
    } });
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
    const showOnboarding = !st().placement.done && !Object.keys(st().units).length && name !== 'toets' && name !== 'ajustes' && name !== 'beheer';
    v.append(showOnboarding ? routes.welkom() : fn(arg));
    v.scrollTop = 0; window.scrollTo(0, 0);
  }
  function updateTopbar() {
    const sEl = document.getElementById('tb-streak'), xEl = document.getElementById('tb-xp'), dEl = document.getElementById('tb-due');
    const streak = Store.liveStreak(), xp = st().xp;
    if (sEl) { sEl.textContent = '🔥 ' + streak; if (shown.streak !== null && streak > shown.streak) bump(sEl); }
    if (xEl) {
      if (shown.xp !== null && xp > shown.xp) { countUp(xEl, shown.xp, xp, '⭐ '); floatUp(xEl, '+' + (xp - shown.xp)); bump(xEl); }
      else xEl.textContent = '⭐ ' + xp;
    }
    shown.xp = xp; shown.streak = streak;
    updateProfileChip();
    if (dEl) { const n = SRS.dueCount(); dEl.textContent = '🔁 ' + n; dEl.hidden = !n; }
  }
  S.render = render;
  /* XP en streak lopen zichtbaar op als ze na een oefening hoger zijn dan wat je net zag. */
  const shown = { xp: null, streak: null };
  const calm = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el, from, to, pre = '', ms = 900) {
    if (calm()) { el.textContent = pre + to; return; }
    const t0 = performance.now();
    const step = t => { const f = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - f, 3); el.textContent = pre + Math.round(from + (to - from) * e); if (f < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  function bump(el) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
  function floatUp(el, text) {
    const r = el.getBoundingClientRect(); if (!r.width) return;
    const f = h('span', { class: 'xp-float', 'aria-hidden': 'true', style: { left: (r.left + r.width / 2) + 'px', top: (r.bottom + 2) + 'px' } }, text);
    document.body.append(f); setTimeout(() => f.remove(), 1600);
  }

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
      h('div', { class: 'hero' }, S.Tutor.coachOn() ? null : h('div', { class: 'hero-emoji' }, '🌎'), h('h1', null, '¡Bienvenido!'), h('p', null, 'Leer Latijns-Amerikaans Spaans stap voor stap: van A1 naar B1 en verder, tot C2.')),
      S.Tutor.hero(S.Tutor.lines.welcome, '🌎'),
      section('Hoe heet je?', name),
      section('Waar begin je?',
        h('button', { class: 'choice primary', type: 'button', onclick: () => go(() => { location.hash = '#/toets'; }) }, h('b', null, '🧭 Niveautest (aanbevolen)'), h('span', null, '±8 minuten. Ik bepaal je niveau en zet je op de juiste plek. Je kunt de test later altijd opnieuw doen via je profiel.')),
        h('button', { class: 'choice', type: 'button', onclick: () => startAt(C.all()[0].id) }, h('b', null, '🌱 Vanaf het begin (A1)'), h('span', null, 'Je begint bij unit 1. Units die je al kent, kun je snel afronden met «Ik ken dit al».')),
        C.unitsOf('A2').length ? h('button', { class: 'choice', type: 'button', onclick: () => startAt(C.unitsOf('A2')[0].id) }, h('b', null, '🚀 Begin bij A2'), h('span', null, 'Je kunt je al redden in de presente en wilt de verleden tijden leren.')) : null,
        C.unitsOf('B1').length ? h('button', { class: 'choice', type: 'button', onclick: () => startAt(C.unitsOf('B1')[0].id) }, h('b', null, '🌠 Begin bij B1'), h('span', null, 'Je kent de verleden tijden en wilt de subjuntivo, de condicional en argumenteren leren.')) : null),
      h('p', { class: 'muted small center' }, '🔒 Je voortgang wordt alleen op dit apparaat bewaard. Via Perfil kun je een back-up maken.'));
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
    // het dagplan: drie taken, elk met een duidelijke 'klaar'-staat, en een beloning als alles af is
    const ds = S.Dagplan.status(d, { due });
    if (ds.tasks.review.free && !d.done.review0) d.done.review0 = true;
    const just = S.Dagplan.fresh(d, ds); save();
    // Profe Lupe begroet je en zegt waar je vandaag het best mee begint
    const anyDays = Object.values(s.days).some(x => x.min > 0 || x.items > 0);
    wrap.append(S.Tutor.coach(S.Tutor.lines.hello({ paused: !!Paused.get(), goalDone: min >= goal, streak: Store.liveStreak(), lapsed: anyDays && !Store.liveStreak() && !d.items,
      due, step: step && step.id, unit: u.title, unitNl: u.nl, min,
      chestReady: ds.all && !ds.chest, planDone: ds.chest, planLeft: ds.total - ds.n, planN: ds.n }), { cls: 'hoy-lupe' }));

    const plan = h('div', { class: 'plan' });
    // 0. onderbroken oefening
    const pc = pausedCard(); if (pc) plan.append(pc);
    // dagplan af en beloning binnen: één duidelijke volgende stap bovenaan
    if (ds.chest && !pc) wrap.append(section('Ga verder', goOn({ due, u, step })));
    plan.append(dayPlan(ds, just, { d, due, u, step }));
    wrap.append(section(null, h('div', { class: 'dp-title' }, h('h2', { class: 'sec-title' }, 'Je plan voor vandaag'),
      h('span', { class: 'dp-count' + (ds.all ? ' all' : '') }, ds.chest ? '⭐ Voltooid' : `${ds.n} van ${ds.total}`)), plan));
    if (just.length) setTimeout(() => S.Sound.good(), 350);
    if (ds.all && !ds.chest && (just.length || wantChest)) {
      setTimeout(() => { const c = document.querySelector('.dp-chest'); if (c) c.scrollIntoView({ block: 'center', behavior: calm() ? 'auto' : 'smooth' }); }, 500);
      if (wantChest) setTimeout(openChest, 900);
    }
    wantChest = false;

    // Lupe zag in je gesprekken steeds dezelfde fout: kort oefenen
    const fc = lupeFocusCard(); if (fc) wrap.append(section('Uit je gesprekken met Lupe', fc));

    // frase del día
    const ph = S.phrases && S.phrases.length ? S.phrases[U.dayIndex() % S.phrases.length] : null;
    if (ph) wrap.append(section(S.course.target === 'es' ? 'La frase del día' : 'Frase del día', h('div', { class: 'phrase' }, h('div', { class: 'es', lang: 'es' }, ph[2] + ' ' + ph[0], S.Lesson.speakBtn(ph[0])), h('div', { class: 'muted' }, ph[1]))));

    // snelle training
    wrap.append(section('Extra oefenen', h('div', { class: 'quick' },
      quick('⚡', 'Woordensprint', '2 min of zelf kiezen', () => { location.hash = '#/woordtoets'; }, d.done.sprint, 'Zoveel mogelijk woorden op tijd, of test nieuwe woorden'),
      S.course.target !== 'es' ? null : quick('🧩', 'Werkwoorden', '20 vragen', () => { location.hash = '#/practica'; }, null, 'Vervoeg werkwoorden in de tijden die je kiest'),
      quick('🎧', 'Dictee', '10 zinnen', () => runSession(Gen.listenTraining(10), { desc: { kind: 'plain', mark: 'listen' } }), d.done.listen, 'Luister naar een zin en typ wat je hoort'),
      quick('🎲', 'Woordspellen', '5 spellen', () => { location.hash = '#/juegos'; }, d.done.games, 'Woordzoeker, kruiswoord, memory en meer'))));
    if (!Store.ok) wrap.append(h('p', { class: 'warn' }, '⚠️ Je browser staat opslaan niet toe (privévenster?). Je voortgang wordt niet bewaard.'));
    return wrap;
  };
  /* Oefentegel: titel, één zin wat je er doet (x) en daaronder kort hoe lang/hoeveel (s). */
  function quick(icon, t, s, fn, done, x) { return h('button', { class: 'quick-btn' + (done ? ' did' : ''), type: 'button', onclick: fn }, h('span', { class: 'qi' }, S.Icons && S.Icons.has(icon) ? S.Icons.el(icon) : icon), done ? h('span', { class: 'qd', title: 'Vandaag gedaan' }, '✓') : null, h('b', null, t), x ? h('span', { class: 'qx' }, x) : null, h('small', null, s)); }

  /* ================= Dagplan (Hoy) ================= */
  let wantChest = false; // na 'Naar mijn beloning' op het eindscherm: Hoy opent de beloning meteen
  function startSpeak() { runSession(Gen.speakTraining(8), { desc: { kind: 'plain', mark: 'speak' } }); }
  function dayPlan(ds, just, { d, due, u, step }) {
    const T = ds.tasks, isJust = id => just.includes(id);
    const items = [];
    // 1. herhaling
    const revN = Math.min(due, 25), revMin = Math.max(2, Math.round(revN * 0.3));
    items.push(T.review.done
      ? task('review', '🔁', 'Herhaling', T.review.free ? 'Vandaag niets te herhalen' : 'Klaar voor vandaag', due ? { label: `Nog ${revN}`, fn: () => startReview(25) } : null,
        T.review.free ? 'Je woorden zitten goed. Morgen staan er weer nieuwe klaar.' : due ? `Er ${due === 1 ? 'is' : 'zijn'} intussen ${U.plural(due, 'nieuwe herhaling', 'nieuwe herhalingen')} bij gekomen. Mag, hoeft niet.` : 'Alles herhaald. ¡Bien hecho!')
      : task('review', '🔁', 'Herhaling', `${U.plural(revN, 'item', 'items')} · ±${revMin} min`, { label: 'Start', fn: () => startReview(25) }, 'Spaced repetition: woorden, grammatica en werkwoorden precies op het juiste moment.'));
    // 2. nieuwe stof
    const learnDesc = `${u.level} · unit ${C.unitsOf(u.level).indexOf(u) + 1} — ${u.nl}`;
    if (T.learn.done) {
      items.push(task('learn', '📘', d.done.learnLast || 'Nieuwe stof', T.learn.count > 1 ? `${T.learn.count} stappen gedaan vandaag` : 'Stap afgerond',
        step ? { label: 'Nog een stap', fn: () => startStep(u, step.id) } : { label: 'Naar de route', fn: () => { location.hash = '#/ruta'; } },
        step ? `Volgende: ${step.icon} ${step.nl} van ${u.icon} ${u.title}` : 'Alle units van dit niveau zijn klaar.'));
    } else if (step) {
      items.push(task('learn', step.icon, `${u.icon} ${u.title}`, `${step.nl} · ±${step.min} min`, { label: step.id === 'test' ? 'Start toets' : 'Start', fn: () => startStep(u, step.id) }, learnDesc));
    } else {
      items.push(task('learn', '🎓', 'Niveau-examen ' + u.level, 'Alle units zijn klaar', { label: 'Naar de route', fn: () => { location.hash = '#/ruta'; } }, 'Een geslaagde stap of het examen vinkt deze taak af.'));
    }
    // 3. spreken / gesprek
    if (S.AI.enabled()) {
      const sc = unitScenario(u), go = () => { startRoleplay(sc); location.hash = '#/docente'; };
      items.push(T.speak.done ? task('speak', '🗣️', 'Spreken', 'Gesprek gevoerd', { label: 'Nog een keer', fn: go }, 'Lekker gepraat! Elk gesprek maakt je vlotter.')
        : task('speak', '🗣️', 'Gesprek met Lupe', sc.title + ' · ±5 min', { label: 'Praten', fn: go }, sc.goal + ' Na drie beurten is deze taak klaar.'));
    } else {
      items.push(T.speak.done ? task('speak', '🎙️', 'Spreken', '8 zinnen hardop gezegd', { label: 'Nog een keer', fn: () => startSpeak() }, 'Hardop oefenen maakt je uitspraak beter.')
        : task('speak', '🎙️', 'Spreken', '8 zinnen hardop · ±3 min', { label: 'Start', fn: () => startSpeak() }, 'Tip: met een AI-sleutel krijg je hier echte gesprekken met correcties.'));
    }
    function task(id, icon, title, sub, act, desc) {
      const done = T[id].done, next = ds.next === id;
      const card = h('div', { class: 'plan-card dp-card' + (done ? ' is-done' : next ? ' is-next' : '') },
        h('div', { class: 'pc-icon' }, S.Icons.el(icon)),
        h('div', { class: 'pc-body' },
          next ? h('em', { class: 'dp-tag' }, 'Volgende') : done ? h('em', { class: 'dp-tag ok' }, '✓ Klaar') : null,
          h('b', null, title), h('span', null, sub), desc ? h('small', null, desc) : null),
        act ? h('button', { class: 'btn ' + (done ? 'ghost' : 'primary'), type: 'button', onclick: act.fn }, act.label) : null);
      return h('div', { class: 'dp-item' + (done ? ' done' : '') + (next ? ' next' : '') + (isJust(id) ? ' just' : '') },
        h('div', { class: 'dp-node', 'aria-label': done ? 'klaar' : 'nog te doen' }, done ? h('span', { class: 'dp-check' }, '✓') : h('span', null, S.Dagplan.TASKS.indexOf(id) + 1)), card);
    }
    // 4. de dagbeloning
    const left = ds.total - ds.n;
    const chest = h('div', { class: 'dp-item dp-chest' + (ds.chest ? ' done opened' : ds.all ? ' ready' : ' locked') },
      h('div', { class: 'dp-node' }, ds.chest ? '⭐' : '🎁'),
      h('div', { class: 'plan-card dp-card' },
        h('div', { class: 'pc-icon chest-ic' }, S.Icons.el(ds.chest ? 'trophy' : 'gift')),
        h('div', { class: 'pc-body' },
          h('b', null, ds.chest ? 'Dagbeloning ontvangen' : 'Dagbeloning'),
          h('span', null, ds.chest ? `+${S.Dagplan.CHEST_XP} XP · tot morgen!` : ds.all ? 'Alles af! Open je beloning.' : `Nog ${left} ${left === 1 ? 'taak' : 'taken'} · +${S.Dagplan.CHEST_XP} XP`),
          h('div', { class: 'dp-segs', 'aria-hidden': 'true' }, S.Dagplan.TASKS.map(id => h('i', { class: (T[id].done ? 'on' : '') + (isJust(id) ? ' late' : '') })))),
        ds.all && !ds.chest ? h('button', { class: 'btn primary chest-btn', type: 'button', onclick: openChest }, '🎁 Openen') : null));
    const path = h('div', { class: 'dp-path' }, items, chest);
    // de segmenten van zojuist afgevinkte taken vullen zich zichtbaar
    if (just.length) setTimeout(() => path.querySelectorAll('.dp-segs i.late').forEach(i => i.classList.remove('late')), 450);
    return h('div', { class: 'dp' + (ds.chest && !just.length ? ' compact' : '') }, path, weekStrip());
  }
  /* Na een voltooid dagplan: één aanbevolen vervolg, met een paar kleine alternatieven eronder. */
  function goOn({ due, u, step }) {
    const main = step
      ? { icon: step.icon, kicker: step.id === 'test' ? 'Volgende: de unittoets' : 'Volgende les', title: `${step.nl} · ${u.icon} ${u.title}`,
        sub: `${u.level} · unit ${C.unitsOf(u.level).indexOf(u) + 1} — ${u.nl} · ±${step.min} min`, label: step.id === 'test' ? '▶ Start toets' : '▶ Ga verder', fn: () => startStep(u, step.id) }
      : { icon: '🎓', kicker: 'Volgende stap', title: 'Niveau-examen ' + u.level, sub: 'Alle units van ' + u.level + ' zijn klaar. Haal het examen en ga door naar het volgende niveau.', label: '▶ Naar het examen', fn: () => { location.hash = '#/ruta'; } };
    const prog = P.unitProgress(u);
    const alts = [
      due ? h('button', { class: 'chip toggle', type: 'button', onclick: () => startReview(25) }, `🔁 ${U.plural(due, 'herhaling', 'herhalingen')}`) : null,
      h('button', { class: 'chip toggle', type: 'button', onclick: () => { location.hash = '#/woordtoets'; } }, '⚡ Woordensprint'),
      h('button', { class: 'chip toggle', type: 'button', onclick: () => { location.hash = '#/juegos'; } }, '🎲 Woordspel'),
      S.AI.enabled() ? h('button', { class: 'chip toggle', type: 'button', onclick: () => { startRoleplay(unitScenario(u)); location.hash = '#/docente'; } }, '🗣️ Praten met Lupe') : null];
    return h('div', { class: 'go-on' },
      h('div', { class: 'go-main' },
        h('div', { class: 'go-icon' }, main.icon),
        h('div', { class: 'go-body' }, h('em', { class: 'dp-tag' }, main.kicker), h('b', null, main.title), h('span', null, main.sub),
          step ? h('div', { class: 'go-prog' }, bar(prog), h('small', null, `Unit ${Math.round(prog * 100)}% klaar`)) : null),
        h('button', { class: 'btn primary go-btn', type: 'button', onclick: main.fn }, main.label)),
      h('div', { class: 'go-alts' }, h('small', null, 'Of liever iets anders:'), alts));
  }
  function weekStrip(big) {
    const wk = S.Dagplan.week(st().days), streak = Store.liveStreak();
    const today = wk.find(x => x.today);
    const note = today && today.state === 'miss' && streak ? `Oefen vandaag om je reeks van ${U.plural(streak, 'dag', 'dagen')} vast te houden.`
      : streak ? `🔥 ${U.plural(streak, 'dag', 'dagen')} op rij · ⭐ = dagplan af` : '⭐ = dagplan af · 🔥 = geoefend';
    return h('div', { class: 'week' + (big ? ' big' : '') },
      h('div', { class: 'week-days' }, wk.map(x => h('div', { class: 'wk-day ' + x.state + (x.today ? ' today' : ''), title: x.key },
        h('span', { class: 'wk-dot' }, x.state === 'star' ? '⭐' : x.state === 'fire' ? '🔥' : ''), h('small', null, x.label)))),
      h('small', { class: 'week-note' }, note));
  }
  /* De dagbeloning openen: kist schudt, springt open, XP, Lupe feliciteert. */
  function openChest() {
    const d = Store.today(); if (d.done.chest) return;
    const ds = S.Dagplan.status(d, { due: SRS.dueCount() }); if (!ds.all) return;
    d.done.chest = true; Store.addXP(S.Dagplan.CHEST_XP); Store.touchStreak();
    const plans = S.Dagplan.plansDone(st().days);
    award('plan'); if (plans >= 7) award('plan7'); if (plans >= 30) award('plan30');
    checkBadges(); Store.save();
    const streak = Store.liveStreak();
    const root = document.getElementById('modal-root');
    const close = () => { root.innerHTML = ''; render(); };
    const xpEl = h('b', null, '+0');
    const stage = h('div', { class: 'chest-stage' }, h('div', { class: 'chest-rays' }), h('div', { class: 'chest-box' }, '🎁'),
      h('div', { class: 'chest-prize' }, xpEl, h('span', null, 'XP')));
    root.append(h('div', { class: 'modal-bg', onclick: e => { if (e.target.classList.contains('modal-bg')) close(); } },
      h('div', { class: 'modal reward', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Dagbeloning' },
        stage,
        h('h3', null, '¡Plan del día completado!'),
        h('p', { class: 'center muted' }, 'Herhaling, nieuwe stof en spreken: alles af voor vandaag.'),
        S.Tutor.coach(S.Tutor.lines.planDone({ streak }), { speak: true, delay: 1300, size: 46 }),
        h('div', { class: 'stats-row' },
          h('div', { class: 'stat' }, h('b', null, '+' + S.Dagplan.CHEST_XP), h('span', null, 'XP')),
          h('div', { class: 'stat' }, h('b', null, '🔥 ' + streak), h('span', null, streak === 1 ? 'dag op rij' : 'dagen op rij')),
          h('div', { class: 'stat' }, h('b', null, '⭐ ' + plans), h('span', null, plans === 1 ? 'dagplan' : 'dagplannen'))),
        weekStrip(true),
        h('div', { class: 'row gap end' }, h('button', { class: 'btn primary', type: 'button', onclick: close }, '¡Genial!')))));
    S.Sound.tap();
    setTimeout(() => { stage.classList.add('open'); S.Sound.win(); S.confetti(); countUp(xpEl, 0, S.Dagplan.CHEST_XP, '+', 700); }, calm() ? 0 : 900);
  }
  /* Op het eindscherm van een oefening: hoe ver je dagplan is. */
  function planStrip(closeLesson) {
    const d = Store.today(), ds = S.Dagplan.status(d, { due: SRS.dueCount() }), seen = d.done.seen || {};
    const left = S.Dagplan.TASKS.filter(id => !ds.tasks[id].done).map(id => S.Dagplan.NAMES[id].toLowerCase());
    return h('div', { class: 'dp-strip' + (ds.all ? ' all' : '') },
      h('div', { class: 'dp-strip-head' }, h('b', null, '📋 Je dagplan'), h('span', null, ds.chest ? '⭐ voltooid' : `${ds.n} van ${ds.total}`)),
      h('div', { class: 'dp-pills' }, S.Dagplan.TASKS.map(id => {
        const t = ds.tasks[id];
        return h('span', { class: 'dp-pill' + (t.done ? ' on' : '') + (t.done && !seen[id] && !t.free ? ' pop' : '') }, h('i', null, t.done ? '✓' : ''), S.Dagplan.NAMES[id]);
      })),
      ds.chest ? h('small', null, 'Je dagbeloning heb je al. Alles wat je nu doet, is extra.')
        : ds.all ? h('button', { class: 'btn primary chest-btn', type: 'button', onclick: () => { wantChest = true; closeLesson(); location.hash = '#/hoy'; } }, '🎁 Naar mijn dagbeloning')
          : h('small', null, 'Nog te doen: ' + left.join(' en ') + '. Dan wacht er een beloning.'));
  }

  /* ================= RUTA ================= */
  routes.ruta = function () {
    const wrap = h('div', { class: 'page' });
    wrap.append(h('h1', null, 'Tu ruta'), h('p', { class: 'muted' }, 'Van beginner tot meesterschap. Elke unit: woorden → grammatica → dialoog → lezen → toepassen → toets.'));
    if (S.Mundo && S.Mundo.list().length) {
      const n = S.Mundo.list().length, got = S.Mundo.stamps();
      wrap.append(section('Uitbreiding (los van je cursus)', h('a', { class: 'card mundo-entry', href: '#/mundo' },
        h('span', { class: 'me-icon' }, '🗺️'),
        h('div', { class: 'grow' }, h('b', null, 'Op reis: Spaans per land'), h('small', null, 'Los van je cursus. Kies zelf een land en leer het accent, de woorden en de slang van daar.'),
          h('span', { class: 'me-flags' }, S.Mundo.list().map(p => S.Mundo.flagImg(p)))),
        h('span', { class: 'chip' }, '🛂 ' + got + '/' + n))));
    }
    const cur = P.current();
    // andere cursussen: alleen de niveaus met lesstof, plus het eerstvolgende als 'komt later'
    const lvls = S.course.target === 'es' ? C.LEVELS : C.LEVELS.filter((L, i) => C.available(L.id) || (i > 0 && C.available(C.LEVELS[i - 1].id)));
    lvls.forEach(L => {
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
      quick('🧭', 'Niveautest', '±8 min', () => { location.hash = '#/toets'; }, null, 'Korte toets die laat zien op welk niveau je zit'))));
    return wrap;
  };
  routes.ruta.tab = 'ruta';
  function stepDots(u) {
    const s = P.unitState(u.id);
    return h('div', { class: 'dots' }, Gen.STEPS.map(x => h('i', { class: (s.steps || {})[x.id] || s.done ? 'on' : '', title: x.nl })));
  }
  function startLevelExam(lvl, resumed) {
    const ses = resumed || Gen.levelExam(lvl);
    runSession(ses, { desc: { kind: 'exam', lvl }, onFinish: sum => {
      const L = st().levels[lvl] || (st().levels[lvl] = { passed: false, best: 0 });
      const today = Store.today().done; today.learn = (today.learn || 0) + 1; today.learnLast = 'Niveau-examen ' + lvl;
      L.best = Math.max(L.best || 0, sum.score);
      if (sum.score >= 0.8) {
        L.passed = true; award(lvl); st().fast = 0;
        const res = { passed: true, unitDone: true, bonusXP: 300, emoji: '🎓', title: '¡Nivel ' + lvl + ' aprobado!', text: 'Gefeliciteerd! Je hebt het niveau-examen ' + lvl + ' gehaald met ' + Math.round(sum.score * 100) + '%.', next: () => { location.hash = '#/ruta'; } };
        const nx = C.LEVELS[lvIdx(lvl) + 1];
        if (nx && C.available(nx.id) && lvIdx(lessonLevel()) <= lvIdx(lvl)) {
          res.text += ` Je lessen staan nog op ${lessonLevel()}. Wil je verder met ${nx.id}? De units die je nog niet had afgerond, blijven open om te herhalen.`;
          res.nextLabel = '🚀 Lessen naar ' + nx.id; res.next = () => { moveLessonsTo(nx.id); location.hash = '#/ruta'; };
          res.alt = { label: 'Nog niet', fn: () => { location.hash = '#/ruta'; } };
        }
        return res;
      }
      return { passed: false, title: 'Nog niet…', text: `Je had ${Math.round(sum.score * 100)}%. Je hebt 80% nodig. Oefen je zwakke punten (Perfil) en probeer het opnieuw.`, next: () => { location.hash = '#/perfil'; } };
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
        h('span', { class: 'st-icon' }, done ? '✓' : S.Icons.el(x.id === 'vocab1' || x.id === 'vocab2' ? 'vocab' : x.id === 'apply' ? 'speak' : x.id)), h('b', null, x.nl), h('small', null, '±' + x.min + ' min')));
    });
    const pd = Paused.get();
    if (pd && pd.desc && pd.desc.unit === u.id) wrap.append(h('div', { class: 'plan' }, pausedCard()));
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
  function statusIcon(s) { return s === 'new' ? '○' : SRS.ICON[s]; }
  function statusLabel(s) { return { new: 'nieuw', learning: 'aan het leren', known: 'bekend', mastered: 'beheerst' }[s]; }
  function dialogueRead(u) {
    const d = u.dialogue, seen = new Set();
    return h('div', { class: 'dl-list read' }, h('p', { class: 'muted small' }, d.place + ' — ' + d.t),
      d.lines.map(([who, es, nl, x]) => { const nt = S.Lesson.noteToggle(S.Lesson.findNotes(es, { extra: x, seen })); return h('div', { class: 'dl-read' }, S.Lesson.speakBtn(es), h('div', { class: 'grow' }, h('b', null, who + ': '), h('span', { lang: 'es' }, es), h('div', { class: 'small muted' }, nl), nt && nt.box), nt && nt.btn); }));
  }

  function readingRead(u) {
    const r = u.reading, seen = new Set();
    return h('div', { class: 'dl-list read' }, h('p', { class: 'muted small' }, (r.type || 'Lectura') + ' — ' + r.t),
      r.p.map(([es, nl, x]) => { const nt = S.Lesson.noteToggle(S.Lesson.findNotes(es, { extra: x, seen })); return h('div', { class: 'dl-read' }, S.Lesson.speakBtn(es), h('div', { class: 'grow' }, h('span', { lang: 'es' }, es), h('div', { class: 'small muted' }, nl), nt && nt.box), nt && nt.btn); }));
  }

  /* ================= PRÁCTICA ================= */
  routes.practica = function () {
    const wrap = h('div', { class: 'page' });
    wrap.append(h('h1', null, 'Práctica'), h('p', { class: 'muted' }, 'Gericht oefenen naast je dagelijkse les.'));
    // werkwoordtrainer (alleen Spaans)
    const learned = Gen.learnedUnits();
    if (S.course.target === 'es') {
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
    }
    // zwakke punten
    const weak = weakTags();
    wrap.append(section('🎯 Zwakke punten', weak.length ? h('div', { class: 'card' },
      weak.map(([t, v]) => h('div', { class: 'weak-row' }, h('span', { class: 'grow' }, C.tag(t)), h('span', { class: 'muted small' }, Math.round(v.ok / (v.ok + v.no) * 100) + '% goed'))),
      h('button', { class: 'btn primary wide', type: 'button', onclick: () => { const ses = Gen.weakTraining(weak.map(w => w[0])); if (!ses.items.length) { S.toast('Nog geen oefeningen voor deze onderwerpen'); return; } runSession(ses); } }, 'Oefen deze onderwerpen'))
      : h('p', { class: 'muted' }, 'Nog geen zwakke punten gevonden. Blijf oefenen, dan zie je hier waar je extra aandacht aan kunt geven.')));
    wrap.append(section('🎲 Woordspellen', h('div', { class: 'quick' },
      S.Games.GAMES.map(g => quick(g.id, g.es, g.nl + ' · ±' + g.min + ' min', () => S.Games.start(g.id), null, g.tip)),
      quick('🗂️', 'Alle spellen', 'kies je woorden', () => { location.hash = '#/juegos'; }, null, 'Kies eerst uit welke unit de woorden komen'))));
    wrap.append(section('Meer', h('div', { class: 'quick' },
      quick('📚', 'Woordenboek', 'zoeken + eigen woorden', () => { location.hash = '#/woorden'; }, null, 'Zoek een woord op of voeg je eigen woorden toe'),
      quick('⚡', 'Woordensprint', '2 min of zelf kiezen', () => { location.hash = '#/woordtoets'; }, null, 'Zoveel mogelijk woorden op tijd, of test nieuwe woorden'),
      quick('🎧', 'Dictee', '10 zinnen', () => runSession(Gen.listenTraining(10)), null, 'Luister naar een zin en typ wat je hoort'),
      quick('🎙️', 'Uitspraak', '8 zinnen', () => startSpeak(), null, 'Zeg zinnen hardop, de app luistert mee'),
      quick('review', 'Extra herhaling', '20 items', () => { const ids = U.sample(Object.keys(st().srs), 20); if (!ids.length) { S.toast('Nog niets geleerd'); return; } runSession(Gen.reviewSession(20, ids)); }, null, 'Herhaal geleerde woorden, ook als ze nog niet aan de beurt zijn'))));
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
  routes.woorden = () => S.Words.page();
  routes.woorden.tab = 'practica';
  routes.woordenschat = () => S.Vocab.page();
  routes.woordenschat.tab = 'perfil';
  routes.woordtoets = () => S.WordTest.page();
  routes.woordtoets.tab = 'practica';
  routes.juegos = () => S.Games.page();
  routes.juegos.tab = 'practica';

  /* ================= DOCENTE (AI) ================= */
  const chat = { mode: 'roleplay', scenario: null, messages: [], busy: false, ctrl: null };
  function unitScenario(u) { return { id: 'unit-' + u.id, icon: u.icon, title: u.title, place: u.dialogue && u.dialogue.place, role: u.scenario.role, goal: u.scenario.goal, nl: u.scenario.nl }; }
  function startRoleplay(sc) { chat.mode = 'roleplay'; chat.scenario = sc; chat.messages = []; chat.autostart = true; chat.turns = 0; }
  S.startRoleplay = startRoleplay;

  routes.docente = function () {
    const wrap = h('div', { class: 'page chat-page' });
    if (!S.AI.enabled()) {
      wrap.append(h('h1', null, 'Docente'));
      wrap.append(h('div', { class: 'card tutor-intro' },
        h('div', { class: 'row gap' }, lupeAv(84), h('div', null, h('h3', null, '¡Hola! Soy Lupe 👋'), h('p', { class: 'small muted' }, S.Tutor.tagline))),
        h('p', null, 'Ik ben een ajolote uit de kanalen van Xochimilco (Mexico-Stad) en ik wil graag je persoonlijke docente zijn. Met mij kun je echt praten, en ik zeg mijn Spaanse antwoorden ook hardop.'),
        h('p', null, 'Voer echte gesprekken (rollenspellen in Mexico, Colombia, Argentinië…). Je krijgt direct correcties in het Nederlands, kunt alles over grammatica vragen en krijgt feedback op je teksten.'),
        h('p', { class: 'small muted' }, 'Hiervoor heb je een eigen API-sleutel van Anthropic (Claude) nodig. Die maak je aan op platform.claude.com (uitleg in Instellingen). Je betaalt per gebruik, meestal een paar cent per gesprek. De sleutel wordt alleen op dit apparaat bewaard.'),
        h('a', { class: 'btn primary', href: '#/ajustes' }, 'Sleutel instellen'),
        h('p', { class: 'small muted' }, 'Zonder AI werkt de rest van de app gewoon: lessen, herhaling, luisteren en spreken.')));
      return wrap;
    }
    wrap.append(tutorHead());
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
    if (!chat.messages.length && LUPE_HELLO[chat.mode]) log.append(bubble({ role: 'assistant', content: LUPE_HELLO[chat.mode], mode: chat.mode, local: true }));
    const inp = h('textarea', { class: 'chat-input', rows: chat.mode === 'write' ? 5 : 2, lang: 'es', placeholder: chat.mode === 'write' ? 'Escribe tu texto aquí…' : 'Escribe en español… (Nederlands mag ook)' });
    const send = h('button', { class: 'btn primary', type: 'button' }, 'Enviar');
    const micBtn = Speech.canListen() ? h('button', { class: 'icon-btn mic-sm', type: 'button', title: 'Inspreken' }, '🎙️') : null;
    const doSend = async (text, hidden) => {
      text = (text || '').trim(); if (!text || chat.busy) return;
      if (st().settings.tutorVoice && !hidden) Speech.unlock();
      const um = { role: 'user', content: text, hidden };
      chat.messages.push(um); if (!hidden) log.append(bubble(um));
      inp.value = '';
      const am = { role: 'assistant', content: '', mode: chat.mode }; chat.messages.push(am);
      const b = bubble(am, true); log.append(b); scrollLog();
      chat.busy = true; send.disabled = true;
      const sys = chat.mode === 'roleplay' ? S.AI.roleplaySystem(chat.scenario) : chat.mode === 'ask' ? S.AI.askSystem() : S.AI.writingSystem();
      const msgs = chat.messages.filter(m => m !== am).map(m => ({ role: m.role, content: m.content }));
      try {
        const full = await S.AI.stream({ system: sys, messages: msgs, maxTokens: chat.mode === 'roleplay' ? 1500 : 3000, effort: chat.mode === 'write' ? 'medium' : 'low', onText: t => { am.content = t; fillBubble(b, am); scrollLog(); } });
        am.content = full;
        // fouten uit je bericht noteren voor je rapport (rollenspel en correctie)
        let found = null;
        if (!hidden && chat.mode !== 'ask') found = S.Mistakes.record(full, chat.mode, text, { sc: chat.mode === 'roleplay' && chat.scenario ? (chat.scenario.title || chat.scenario.nl) : '' });
        if (found) am.logged = found.length;
        fillBubble(b, am);
        award('ai'); if (!hidden) Store.skill(chat.mode === 'write' ? 'write' : 'speak', !found || !found.length); Store.today().min += 0.5; Store.touchStreak();
        // drie beurten in een rollenspel = de spreektaak van je dagplan
        if (chat.mode === 'roleplay' && !hidden && (chat.turns = (chat.turns || 0) + 1) >= 3 && !Store.today().done.speak) {
          Store.today().done.speak = true; S.Sound.good(); S.toast('🗣️ Gesprek gevoerd: spreken is afgevinkt in je dagplan ✓', 3200);
        }
        save();
        if (st().settings.tutorVoice) S.Tutor.say(S.Tutor.spoken(full, am.mode));
      } catch (e) {
        chat.messages.pop(); if (!hidden) { /* laat de vraag staan */ }
        b.querySelector('.bubble-body').innerHTML = '<span class="warn">⚠️ ' + U.esc(e.message) + '</span>';
      }
      chat.busy = false; send.disabled = false; scrollLog();
    };
    function scrollLog() { log.scrollTop = log.scrollHeight; }
    send.onclick = () => doSend(inp.value);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey && chat.mode !== 'write') { e.preventDefault(); doSend(inp.value); } });
    // Inspreken: je ziet dat ze luistert, wat ze verstaat, en bij een fout wat je kunt doen. Bij een gesprek gaat het daarna vanzelf naar Lupe.
    const micLive = S.Mic.live();
    if (micBtn) micBtn.onclick = async () => {
      if (micBtn.classList.contains('rec')) { micLive.state('stopping'); Speech.stopListening(); return; }
      S.Tutor.setTalking && S.Tutor.setTalking(false);
      const before = inp.value;
      micBtn.classList.add('rec'); micBtn.title = 'Klaar met praten'; micLive.start();
      setTimeout(() => { try { micBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { /* */ } }, 50);
      try {
        const alts = await Speech.listen(micLive.hooks({ onInterim: t => { micLive.interim(t); inp.value = (before ? before + ' ' : '') + t; } }));
        const said = alts[0];
        inp.value = (before ? before + ' ' : '') + said;
        const auto = chat.mode !== 'write' && st().settings.micAutoSend !== false && !chat.busy;
        micLive.done(said, auto ? '✅ Verstaan, ik stuur het naar Lupe' : '✅ Verstaan. Pas het aan als het nodig is en tik op Enviar');
        if (auto) { doSend(inp.value); setTimeout(() => micLive.hide(), 2500); } else inp.focus();
      } catch (e) { inp.value = before; micLive.fail(e); }
      micBtn.classList.remove('rec'); micBtn.title = 'Inspreken';
    };
    wrap.append(log, micLive.el, h('div', { class: 'chat-bar' }, inp, h('div', { class: 'chat-actions' }, micBtn, send)), S.Lesson.accentBar(inp),
      h('div', { class: 'row gap between' }, h('span'), h('button', { class: 'btn link small', type: 'button', onclick: () => { chat.messages = []; if (chat.mode === 'roleplay') chat.autostart = true; render(); } }, '🗑 Nieuw gesprek')));
    if (chat.mode === 'roleplay' && chat.autostart && !chat.messages.length) { chat.autostart = false; setTimeout(() => doSend('(Empecemos el juego de rol. / Laten we beginnen.)', true), 50); }
    setTimeout(scrollLog, 30);
    return wrap;
  };
  /* ---- Lupe, de docente ---- */
  const LUPE_HELLO = {
    ask: '**¡Hola! Soy Lupe, tu profe de español. ¿Qué quieres saber hoy?**\n\n*Vraag me alles over grammatica, woorden, uitspraak of cultuur. Nederlands mag ook.*',
    write: '**¡Órale, a escribir! Escribe tu texto y yo te ayudo a corregirlo.**\n\n*Schrijf een e-mail, appje of dagboekstukje. Ik verbeter het en leg uit waarom.*'
  };
  function lupeAv(size, cls) { return S.Tutor.avatar(size, cls); }
  function tutorHead() {
    const on = () => !!st().settings.tutorVoice;
    const tg = h('button', { class: 'chip toggle voice-tg' + (on() ? ' on' : ''), type: 'button', 'aria-pressed': on() ? 'true' : 'false' });
    const paint = () => { tg.textContent = on() ? '🔊 Ze praat hardop' : '🔇 Alleen tekst'; tg.classList.toggle('on', on()); tg.setAttribute('aria-pressed', on() ? 'true' : 'false'); };
    tg.onclick = () => { st().settings.tutorVoice = !on(); save(); paint(); if (on()) { Speech.unlock(); S.Tutor.say(S.Tutor.lines.voiceOn, 'es'); } else Speech.stop(); };
    paint();
    // Lupe praat met de stem van het apparaat. Is dat een eenvoudige (robotachtige) stem, wijs dan de weg naar een betere.
    const voiceHint = h('a', { class: 'small voice-hint', href: '#/ajustes' }, '🎙️ Klinkt Lupe robotachtig? Zo krijgt ze een natuurlijke stem ›');
    const checkVoice = () => { voiceHint.hidden = !Speech.voices.length || Speech.hasGoodVoice(); };
    checkVoice(); setTimeout(checkVoice, 800);
    const av = lupeAv(72, 'big');
    av.title = 'Tik om haar te laten stoppen met praten';
    av.onclick = () => { Speech.stop(); S.Tutor.setTalking(false); };
    return h('div', { class: 'tutor-head' }, av,
      h('div', { class: 'grow' }, h('h1', null, S.Tutor.title), h('p', { class: 'small muted' }, S.Tutor.tagline), tg, voiceHint),
      h('button', { class: 'btn ghost small t-stop', type: 'button', onclick: () => { Speech.stop(); S.Tutor.setTalking(false); } }, '■ Stop'));
  }
  function bubble(m, pending) {
    const b = h('div', { class: 'msg ' + m.role }, m.role === 'assistant' ? lupeAv(34, 'mini') : null, h('div', { class: 'bubble-body' }, pending ? h('span', { class: 'typing' }, '…') : null));
    if (!pending) fillBubble(b, m);
    return b;
  }
  function fillBubble(b, m) {
    const body = b.querySelector('.bubble-body'); body.innerHTML = '';
    if (m.role === 'user') { body.textContent = m.content; return; }
    const [reply, ...rest] = S.Mistakes.strip(m.content).split(/\n\s*---\s*\n/);
    const r = h('div', { class: 'reply', lang: m.mode === 'roleplay' ? 'es' : null, html: S.md(reply) });
    body.append(r);
    if (rest.length) body.append(h('div', { class: 'correction', html: S.md(rest.join('\n')) }));
    // Spaanse (vetgedrukte) stukken: tik om ze te horen
    body.querySelectorAll('b').forEach(x => { if (/[a-záéíóúñ]/i.test(x.textContent) && !/:\s*$/.test(x.textContent)) { x.classList.add('say-es'); x.lang = 'es'; x.title = 'Tik om te horen'; x.onclick = () => S.Tutor.say(S.Tutor.spoken('**' + x.textContent + '**', 'ask')); } });
    const sp = S.Tutor.spoken(m.content, m.mode);
    if (m.logged) body.append(h('a', { class: 'logged small', href: '#/rapport', title: 'Bekijk je rapport' }, '📋 ' + U.plural(m.logged, 'fout', 'fouten') + ' genoteerd in je rapport'));
    if (sp && Speech.canSpeak()) body.append(h('button', { class: 'btn link small replay', type: 'button', title: 'Laat Lupe het nog eens zeggen' , onclick: e => { e.stopPropagation(); S.Tutor.say(sp); } }, '🔊 Nog eens'));
  }

  S.ChatUI = { bubble, fillBubble }; // ook voor «Vraag het Lupe» (js/ask.js)

  /* ================= PERFIL (alles over je voortgang) ================= */
  function fmtDate(t, opt) { return new Date(t).toLocaleDateString(S.LOC, opt || { day: 'numeric', month: 'long', year: 'numeric' }); }
  function wordStats(units) {
    const out = { total: 0, learning: 0, known: 0, mastered: 0 };
    units.forEach(u => C.words(u).forEach(w => { out.total++; const sx = SRS.status(w.id); if (sx !== 'new') out[sx]++; }));
    out.seen = out.learning + out.known + out.mastered;
    return out;
  }
  function stackBar(ws) {
    const t = Math.max(1, ws.total); const seg = (n, cls) => n ? h('i', { class: cls, style: { width: (n / t * 100) + '%' } }) : null;
    return h('div', { class: 'wstack' }, seg(ws.learning, 'l'), seg(ws.known, 'k'), seg(ws.mastered, 'm'));
  }
  /* ================= Rapport van Lupe: fouten uit gesprekken (js/mistakes.js) ================= */
  const M = () => S.Mistakes;
  function lupeFocusCard() {
    const f = M().focus(7, 2); if (!f.length) return null;
    const top = f[0], ex = top.ex[0];
    return h('div', { class: 'card lupe-focus' },
      h('div', { class: 'row gap' }, S.Tutor.avatar(44, 'coach-av'),
        h('div', { class: 'grow' }, h('b', null, '🎯 ' + top.label + ' ging deze week ' + top.n + '× mis'),
          ex ? h('div', { class: 'small lf-ex' }, h('s', { lang: 'es' }, ex.w), ' → ', h('b', { lang: 'es' }, ex.c)) : null,
          f.length > 1 ? h('small', { class: 'muted' }, 'Ook: ' + f.slice(1).map(t => t.label + ' (' + t.n + '×)').join(', ')) : null)),
      h('div', { class: 'row gap wrap' },
        h('button', { class: 'btn primary', type: 'button', onclick: () => practiceMistakes(f.map(t => t.tag), []) }, 'Oefen 5 minuten'),
        h('a', { class: 'btn ghost', href: '#/rapport' }, '📋 Rapport')));
  }
  function practiceMistakes(tags, wordIds) {
    const ses = M().practice(tags, wordIds);
    if (!ses.items.length) { S.toast('Nog geen oefeningen voor deze onderwerpen. Kijk bij de les die erbij staat.'); return; }
    runSession(ses);
  }
  function reportSummary() {
    const r = M().report(30);
    const card = h('div', { class: 'card rep-sum' });
    const fixLine = r.fix.length ? h('div', { class: 'weak-row' }, h('span', { class: 'grow' }, '✅ toch goed volgens Lupe'), h('small', { class: 'muted' }, U.plural(r.fix.length, 'antwoord', 'antwoorden'))) : null;
    if (!r.total) {
      if (fixLine) card.append(fixLine);
      card.append(h('p', { class: 'small' }, '📋 Lupe houdt hier bij waar je de mist in gaat in je gesprekken (🎭 rollenspel en ✍️ correctie). Nog niets genoteerd in de laatste 30 dagen.'));
      card.append(h('a', { class: 'btn ghost wide', href: '#/rapport' }, '📋 Naar het rapport'));
      return card;
    }
    card.append(h('p', { class: 'small' }, h('b', null, U.plural(r.total, 'fout', 'fouten')), ' in je gesprekken met Lupe (laatste 30 dagen).'));
    r.topics.slice(0, 3).forEach(t => card.append(h('div', { class: 'weak-row' }, h('span', { class: 'grow' }, t.label), h('small', { class: 'muted' }, t.n + '×'))));
    if (r.words.length) card.append(h('div', { class: 'weak-row' }, h('span', { class: 'grow' }, 'woordenschat'), h('small', { class: 'muted' }, r.words.length + ' woorden')));
    if (fixLine) card.append(fixLine);
    card.append(h('a', { class: 'btn primary wide', href: '#/rapport' }, '📋 Bekijk het hele rapport'));
    return card;
  }
  async function shareReport(text, how) {
    if (how === 'share' && navigator.share) { try { await navigator.share({ title: 'Rapport van Profe Lupe', text }); return; } catch (e) { if (e && e.name === 'AbortError') return; } }
    let done = false;
    try { if (navigator.clipboard && navigator.clipboard.writeText) { await navigator.clipboard.writeText(text); done = true; } } catch (e) { /* hieronder */ }
    if (!done) { const ta = h('textarea', { style: { position: 'fixed', top: '-1000px' } }); ta.value = text; document.body.append(ta); ta.select(); try { done = document.execCommand('copy'); } catch (e) { /* */ } ta.remove(); }
    S.toast(done ? '📋 Rapport gekopieerd. Plak het in je chat met je coach.' : 'Kopiëren lukte niet. Selecteer de tekst hieronder en kopieer hem zelf.', 3600);
  }
  let repDays = 30;
  routes.rapport = function () {
    const wrap = h('div', { class: 'page rapport' });
    const r = M().report(repDays);
    wrap.append(h('a', { class: 'back', href: '#/perfil' }, '← Perfil'), h('h1', null, 'Rapport van Lupe'),
      h('p', { class: 'muted small' }, 'Wat er misging in je gesprekken met Lupe (🎭 rollenspel en ✍️ correctie), zodat je weet waar je op moet letten. Fouten tellen ook mee in je zwakke punten, en woorden die misgingen staan in je herhaling.'));
    wrap.append(h('div', { class: 'chips rep-period' }, [[7, '7 dagen'], [30, '30 dagen'], [90, '90 dagen']].map(([d, l]) =>
      h('button', { class: 'chip toggle' + (repDays === d ? ' on' : ''), type: 'button', onclick: () => { repDays = d; render(); } }, l))));
    const trend = r.prev ? (r.total < r.prev ? '📉 minder dan de ' + r.days + ' dagen ervoor (' + r.prev + ')' : r.total > r.prev ? 'meer dan de ' + r.days + ' dagen ervoor (' + r.prev + ')' : 'evenveel als ervoor') : null;
    wrap.append(S.Tutor.coach(!r.total ? { es: '¡Platiquemos! Así veo en qué te puedo ayudar.', nl: 'Laten we kletsen! Dan zie ik waarmee ik je kan helpen.' }
      : r.prev && r.total < r.prev ? { es: '¡Vas mejorando! Cometes menos errores que antes.', nl: 'Je wordt beter! Je maakt minder fouten dan eerst.' }
        : { es: 'Mira, esto es lo que más practicaría yo.', nl: 'Kijk, dit zou ik het meest oefenen.' }));
    wrap.append(h('div', { class: 'stat-grid' },
      statCard('📝', r.total, 'fouten genoteerd', trend || 'laatste ' + r.days + ' dagen'),
      statCard('🧩', r.topics.length, 'onderwerpen'),
      statCard('📚', r.words.length, 'woorden', 'in je herhaling')));
    if (!r.total) {
      wrap.append(h('div', { class: 'card' }, h('p', null, 'Nog geen fouten genoteerd in deze periode.'),
        h('p', { class: 'small muted' }, S.AI.enabled() ? 'Voer een 🎭 rollenspel of laat een tekst verbeteren bij ✍️ Correctie. Lupe noteert dan wat er misgaat.' : 'Hiervoor heb je een AI-sleutel nodig (Instellingen). Dan kun je met Lupe praten en noteert ze wat er misgaat.'),
        h('a', { class: 'btn primary wide', href: '#/docente' }, '🗣️ Praat met Lupe')));
    }
    if (r.topics.length) {
      const tags = r.topics.filter(t => t.tag !== 'other').map(t => t.tag);
      const mx = Math.max(...r.topics.map(t => t.n));
      wrap.append(section('Waar je de mist in gaat', h('div', { class: 'card' },
        r.topics.map(t => h('details', { class: 'rep-topic' },
          h('summary', null, h('span', { class: 'grow' }, h('b', null, t.label)), bar(t.n / mx, '#e2603a'), h('small', { class: 'muted' }, t.n + '×')),
          t.ex.map(e => h('div', { class: 'rep-ex' }, h('div', null, '❌ ', h('s', { lang: 'es' }, e.w), ' → ✅ ', h('b', { lang: 'es' }, e.c)), e.why ? h('small', { class: 'muted' }, e.why) : null)),
          t.units.length ? h('a', { class: 'btn link small', href: '#/unit/' + t.units[0].id }, '📘 Uitleg in de les: ' + t.units[0].level + ' · ' + t.units[0].icon + ' ' + t.units[0].title) : null)),
        tags.length ? h('button', { class: 'btn primary wide', type: 'button', onclick: () => practiceMistakes(tags.slice(0, 6), r.words.map(e => e.srs).filter(Boolean)) }, '🎯 Oefen deze fouten') : null)));
    }
    if (r.words.length) {
      wrap.append(section('Woorden die misgingen', h('div', { class: 'card' }, h('div', { class: 'word-list' },
        r.words.slice(0, 20).map(e => h('div', { class: 'word-row' }, S.Lesson.speakBtn(e.es || e.c), h('div', { class: 'grow' }, h('b', { lang: 'es' }, e.es || e.c), h('span', null, (e.nl || '') + (e.w ? ' · jij: «' + e.w + '»' : ''))),
          e.srs ? h('small', { class: 'muted', title: 'Staat in je herhaling' }, '🔁') : null))),
        h('small', { class: 'muted' }, '🔁 = staat in je herhaling en komt vandaag terug.'))));
    }
    // advies van Lupe
    const adv = h('div', { class: 'card rep-advice' });
    const drawAdv = a => {
      adv.innerHTML = '';
      if (a && a.text) adv.append(h('div', { class: 'small', html: S.md(a.text) }), h('small', { class: 'muted' }, 'Advies van ' + fmtDate(a.t, { day: 'numeric', month: 'long' })));
      else adv.append(h('p', { class: 'small muted' }, r.total ? 'Laat Lupe je fouten bekijken en vertellen waar je deze week op moet letten.' : 'Na een paar gesprekken kan Lupe je hier persoonlijk advies geven.'));
      if (S.AI.enabled() && r.total) {
        const btn = h('button', { class: 'btn ghost wide', type: 'button' }, a && a.text ? '✨ Nieuw advies' : '✨ Vraag Lupe om advies');
        btn.onclick = async () => {
          btn.disabled = true; btn.textContent = 'Lupe denkt na…';
          try { const x = await M().advise(); save(); drawAdv(x); if (st().settings.tutorVoice) S.Tutor.say(S.Tutor.spoken(x.text, 'ask')); }
          catch (e) { btn.disabled = false; btn.textContent = '✨ Probeer opnieuw'; S.toast('⚠️ ' + e.message, 4000); }
        };
        adv.append(btn);
      }
      adv.querySelectorAll('b').forEach(x => { if (/[a-záéíóúñ]/i.test(x.textContent)) { x.classList.add('say-es'); x.lang = 'es'; x.onclick = () => S.Tutor.say(x.textContent); } });
    };
    drawAdv(r.advice);
    wrap.append(section('Advies van Lupe', adv));
    // voor de volgende update: herbeoordelingen + voorstellen van Lupe
    wrap.append(section('Voor de volgende update', updateCard(r)));
    // terugkoppelen aan je coach
    const text = M().asText(r);
    wrap.append(section('Delen met je coach', h('div', { class: 'card' },
      h('p', { class: 'small muted' }, 'Kopieer het rapport als tekst en plak het in je chat met je coach. Dan kunnen de lessen daarop worden aangepast.'),
      h('div', { class: 'row gap wrap' },
        h('button', { class: 'btn primary grow', type: 'button', onclick: () => shareReport(M().asText(M().report(repDays)), 'copy') }, '📋 Kopieer rapport'),
        navigator.share ? h('button', { class: 'btn ghost grow', type: 'button', onclick: () => shareReport(M().asText(M().report(repDays)), 'share') }, '📤 Delen') : null),
      h('details', { class: 'rep-text' }, h('summary', { class: 'small' }, 'Tekst bekijken'), h('pre', { class: 'small' }, text)))));
    // laatste fouten
    if (r.recent.length) {
      wrap.append(section('Laatste fouten', h('div', { class: 'card' }, r.recent.map(e => h('details', { class: 'rep-recent' },
        h('summary', null, h('span', { class: 'grow' }, '❌ ', h('s', { lang: 'es' }, e.w), ' → ', h('b', { lang: 'es' }, e.c)), h('small', { class: 'muted' }, fmtDate(e.t, { day: 'numeric', month: 'short' }))),
        h('small', { class: 'muted' }, (e.m === 'write' ? '✍️ Correctie' : '🎭 ' + (e.sc || 'Rollenspel')) + ' · ' + (e.tag === 'vocab' ? 'woordenschat' : e.tag === 'other' ? 'overig' : C.tag(e.tag))),
        e.why ? h('p', { class: 'small' }, e.why) : null,
        e.u ? h('p', { class: 'small muted', lang: 'es' }, 'Jij schreef: «' + e.u + '»') : null)))));
    }
    return wrap;
  };
  routes.rapport.tab = 'perfil';

  /* Antwoorden die Lupe toch goed keurde (🤖 Toch goed?) en haar eigen voorstellen voor de volgende update. */
  function updateCard(r) {
    const card = h('div', { class: 'card rep-update' });
    card.append(h('p', { class: 'small muted' }, 'Werd een vertaling fout gerekend en keurde Lupe hem toch goed (🤖 Toch goed?), dan staat hij hier. Ook Lupe zelf kan voorstellen wat er in de volgende update moet komen. Deel dit met je coach, dan kan de app verbeterd worden.'));
    if (r.fix.length) {
      card.append(h('h3', { class: 'rep-h' }, '✅ Toch goed volgens Lupe (' + r.fix.length + ')'));
      r.fix.slice(0, 12).forEach(e => {
        const u = e.unit ? C.get(e.unit) : null;
        card.append(h('details', { class: 'rep-fix' },
          h('summary', null, h('span', { class: 'grow' }, h('b', { lang: 'es' }, e.u), h('small', { class: 'muted' }, ' · ' + e.q)), h('small', { class: 'muted' }, fmtDate(e.t, { day: 'numeric', month: 'short' }))),
          e.a && e.a.length ? h('div', { class: 'small' }, 'In de app: ', h('span', { lang: 'es' }, e.a.join(' / '))) : null,
          e.why ? h('div', { class: 'small' }, '🔧 ', e.why) : null,
          e.fb ? h('div', { class: 'small muted' }, '🤖 ', e.fb) : null,
          u ? h('a', { class: 'btn link small', href: '#/unit/' + u.id }, '📘 ' + u.level + ' · ' + u.icon + ' ' + u.title) : null));
      });
      if (r.fix.length > 12) card.append(h('small', { class: 'muted' }, '… en nog ' + (r.fix.length - 12) + ' (staan allemaal in de tekst om te delen).'));
    } else card.append(h('p', { class: 'small' }, 'Nog geen antwoorden die Lupe toch goed keurde in deze periode.'));
    const box = h('div', { class: 'rep-proposal' });
    const draw = u => {
      box.innerHTML = '';
      box.append(h('h3', { class: 'rep-h' }, '💡 Voorstellen van Lupe'));
      if (u && u.text) box.append(h('div', { class: 'small', html: S.md(u.text) }), h('small', { class: 'muted' }, 'Voorgesteld op ' + fmtDate(u.t, { day: 'numeric', month: 'long' })));
      else box.append(h('p', { class: 'small muted' }, S.AI.enabled() ? 'Laat Lupe je fouten, zwakke punten en goedgekeurde antwoorden bekijken en voorstellen wat er in de volgende update moet komen.' : 'Met een AI-sleutel (Instellingen) kan Lupe hier voorstellen wat er in de volgende update moet komen.'));
      if (S.AI.enabled()) {
        const btn = h('button', { class: 'btn ghost wide', type: 'button' }, u && u.text ? '✨ Nieuwe voorstellen' : '✨ Wat moet er in de volgende update?');
        btn.onclick = async () => {
          btn.disabled = true; btn.textContent = 'Lupe denkt na…';
          try { const x = await M().proposeUpdate(); save(); draw(x); refreshTxt(); }
          catch (e) { btn.disabled = false; btn.textContent = '✨ Probeer opnieuw'; S.toast('⚠️ ' + e.message, 4000); }
        };
        box.append(btn);
      }
    };
    const pre = h('pre', { class: 'small' });
    const refreshTxt = () => { pre.textContent = M().updateText(M().report(repDays)) || 'Nog niets om te delen.'; };
    draw(r.update); refreshTxt();
    const share = how => { const t = M().updateText(M().report(repDays)); if (!t) { S.toast('Nog niets om te delen.'); return; } shareReport(t, how); };
    card.append(box,
      h('div', { class: 'row gap wrap' },
        h('button', { class: 'btn primary grow', type: 'button', onclick: () => share('copy') }, '📋 Kopieer voor de update'),
        navigator.share ? h('button', { class: 'btn ghost grow', type: 'button', onclick: () => share('share') }, '📤 Delen') : null),
      h('details', { class: 'rep-text' }, h('summary', { class: 'small' }, 'Tekst bekijken'), pre));
    return card;
  }

  routes.perfil = function () {
    const s = st(); const wrap = h('div', { class: 'page profile' });
    const est = P.estimate(); const t = lastTest();
    // ---- kop ----
    const initial = (s.name || '?').trim().charAt(0).toUpperCase() || '?';
    const activeDays = Object.values(s.days).filter(d => d.min > 0 || d.items > 0).length;
    wrap.append(h('div', { class: 'prof-head' },
      h('div', { class: 'avatar' }, initial),
      h('div', { class: 'grow' },
        h('h1', null, s.name || 'Mijn profiel'),
        h('p', { class: 'muted small' }, 'Leert Spaans sinds ' + fmtDate(s.created) + ' · ' + U.plural(activeDays, 'dag', 'dagen') + ' geoefend'),
        h('div', { class: 'chips' }, h('span', { class: 'chip' }, '📈 ' + est.label), h('span', { class: 'chip' }, '🔥 ' + U.plural(Store.liveStreak(), 'dag', 'dagen')), h('span', { class: 'chip' }, '⭐ ' + s.xp + ' XP')))));
    wrap.append(S.Tutor.coach(S.Tutor.lines.profile({ words: wordStats(C.all()).seen, days: activeDays, streak: Store.liveStreak() })));

    // ---- niveau ----
    const les = lessonLevel(); const cur = P.current();
    const passed = C.LEVELS.filter(L => s.levels[L.id] && s.levels[L.id].passed).map(L => L.id);
    const lvCard = h('div', { class: 'card lv-overview' },
      h('div', { class: 'lv-three' },
        lvTile('🧭', 'Niveautest', t ? (t.level || 'A1−') : '—', t ? 'beheerst · ' + fmtDate(t.d, { day: 'numeric', month: 'short' }) : 'nog niet gedaan'),
        lvTile('📚', 'Je lessen', les, cur.icon + ' ' + cur.title),
        lvTile('🎓', 'Examens', passed.length ? passed[passed.length - 1] : '—', passed.length ? 'behaald: ' + passed.join(', ') : 'nog geen')),
      h('div', { class: 'lv-bars' }, C.LEVELS.filter(L => C.available(L.id)).map(L => h('div', { class: 'lv-bar' }, h('b', null, L.id), bar(P.levelProgress(L.id), L.color), h('small', null, Math.round(P.levelProgress(L.id) * 100) + '% lessen')))));
    wrap.append(section('Mijn niveau', lvCard));
    const adv = levelAdvice();
    if (adv) wrap.append(adviceCard(adv));
    else wrap.append(h('div', { class: 'card advice' }, h('b', null, '🧭 Weet je hoe goed je echt bent?'), h('p', { class: 'small' }, 'Doe de niveautest (±8 min). Dan zie je of je hoger zit dan de lessen die je nu krijgt, en kun je meteen hoger instappen.')));

    wrap.append(section('Rapport van Lupe', reportSummary()));

    // ---- niveautests: historie ----
    const tests = testsOf().slice().reverse();
    const due = !t || Date.now() >= nextTestDate(t);
    const hist = h('div', { class: 'card' },
      h('div', { class: 'row gap between wrap' },
        h('p', { class: 'small muted grow' }, t ? (due ? '⏰ Tijd voor een nieuwe test: je laatste is van ' + fmtDate(t.d) + '.' : 'Tip: doe de test elke 4 weken. Volgende keer vanaf ' + fmtDate(nextTestDate(t), { day: 'numeric', month: 'long' }) + '.') : 'Nog geen test gedaan.'),
        h('a', { class: 'btn ' + (due ? 'primary' : 'ghost'), href: '#/toets' }, t ? '🧭 Test opnieuw' : '🧭 Doe de niveautest')));
    if (tests.length >= 2) hist.append(testChart(testsOf()));
    tests.slice(0, 8).forEach((x, i) => {
      hist.append(h('details', { class: 'test-row' + (i === 0 ? ' latest' : '') },
        h('summary', null, h('span', { class: 'lv-badge sm', style: { background: x.level ? C.level(x.level).color : 'var(--muted)' } }, x.level || 'A1−'),
          h('div', { class: 'grow' }, h('b', null, fmtDate(x.d)), h('small', { class: 'muted' }, TEST_ORDER.filter(l => x.bands[l]).map(l => l + ' ' + Math.round(x.bands[l].ok / Math.max(1, x.bands[l].n) * 100) + '%').join(' · '))),
          x.lesson ? h('small', { class: 'muted' }, 'lessen: ' + x.lesson) : null),
        bandBars(x), partRows(x.parts)));
    });
    wrap.append(section('Mijn niveautests', hist));

    // ---- woordenschat ----
    const lvls = C.LEVELS.filter(L => C.available(L.id));
    const allW = wordStats(C.all());
    // lastig = woorden die je het vaakst fout had (c.l = keer fout), ongeacht hoe ver ze nu zijn
    const hard = Object.entries(s.srs).filter(([k, c]) => k.startsWith('w|') && c.l > 0).sort((a, b) => b[1].l - a[1].l || a[1].i - b[1].i).slice(0, 8)
      .map(([k, c]) => { const [, uid, i] = k.split('|'); const u = C.get(uid); const w = u ? C.word(u, +i) : null; return w ? { w, st: SRS.status(k), fout: c.l } : null; }).filter(Boolean);
    wrap.append(section('Woordenschat', h('div', { class: 'card' },
      h('div', { class: 'vocab-big' }, h('b', null, allW.seen), h('span', null, ' van ' + allW.total + ' woorden geleerd')),
      stackBar(allW),
      h('div', { class: 'legend small' }, h('span', null, SRS.ICON.learning + ' ' + allW.learning + ' aan het leren'), h('span', null, SRS.ICON.known + ' ' + allW.known + ' bekend'), h('span', null, SRS.ICON.mastered + ' ' + allW.mastered + ' beheerst')),
      h('div', { class: 'small muted vocab-uitleg' },
        h('p', null, h('b', null, SRS.ICON.learning + ' Aan het leren'), ': al gehad in een les, komt binnen een week terug.'),
        h('p', null, h('b', null, SRS.ICON.known + ' Bekend'), ': zo vaak goed dat het pas over een week of later terugkomt.'),
        h('p', null, h('b', null, SRS.ICON.mastered + ' Beheerst'), ': je weet het na 3 weken of langer nog.'),
        h('p', null, h('b', null, 'Leeg deel van de balk'), ': woorden die je nog niet gezien hebt.')),
      h('div', { class: 'vocab-levels' }, lvls.map(L => { const ws = wordStats(C.unitsOf(L.id)); return h('div', { class: 'lv-bar' }, h('b', null, L.id), stackBar(ws), h('small', null, ws.seen + '/' + ws.total)); })),
      hard.length ? h('div', null, h('h3', { class: 'sub' }, 'Lastige woorden'),
        h('p', { class: 'small muted hard-uitleg' }, 'De woorden die je het vaakst fout had. Het symbool erachter laat zien hoe ver je er nu mee bent: een lastig woord kan inmiddels ook al ' + SRS.ICON.known + ' bekend zijn.'),
        h('div', { class: 'word-list' }, hard.map(({ w, st, fout }) => h('div', { class: 'word-row' }, S.Lesson.speakBtn(w.es), h('div', { class: 'grow' }, h('b', { lang: 'es' }, w.es), h('span', null, w.nl)),
          h('span', { class: 'hard-st', title: statusLabel(st) }, h('span', { class: 'ico' }, SRS.ICON[st] || SRS.ICON.learning), h('small', null, fout + '× fout')))))) : null,
      SRS.dueCount() ? h('button', { class: 'btn primary wide', type: 'button', onclick: () => startReview(25) }, '🔁 Herhaal nu (' + SRS.dueCount() + ' klaar)') : null,
      h('a', { class: 'btn ghost wide voc-open', href: '#/woordenschat' }, '📋 Al je woorden en zinnen bekijken'))));

    // ---- grammatica ----
    const tagRows = Object.entries(s.tags).filter(([k, v]) => k !== 'vocab' && v.ok + v.no >= 3).map(([k, v]) => [k, v.ok / (v.ok + v.no), v.ok + v.no]).sort((a, b) => b[1] - a[1]);
    const strong = tagRows.filter(r => r[1] >= 0.8), weak = tagRows.filter(r => r[1] < 0.8).reverse();
    wrap.append(section('Grammatica', h('div', { class: 'card' },
      tagRows.length ? null : h('p', { class: 'muted small' }, 'Nog te weinig antwoorden. Na een paar lessen zie je hier welke onderwerpen goed gaan en welke nog niet.'),
      strong.length ? h('div', null, h('h3', { class: 'sub' }, '💪 Gaat goed (' + strong.length + ')'), h('div', { class: 'chips' }, strong.map(([k, f]) => h('span', { class: 'chip ok' }, C.tag(k) + ' · ' + Math.round(f * 100) + '%')))) : null,
      weak.length ? h('div', null, h('h3', { class: 'sub' }, '🎯 Nog oefenen (' + weak.length + ')'), weak.slice(0, 8).map(([k, f, n]) => h('div', { class: 'weak-row' }, h('span', { class: 'grow' }, C.tag(k)), bar(f, '#e2603a'), h('small', { class: 'muted' }, Math.round(f * 100) + '%'))),
        h('button', { class: 'btn primary wide', type: 'button', onclick: () => { const ses = Gen.weakTraining(weak.slice(0, 6).map(w => w[0])); if (!ses.items.length) { S.toast('Nog geen oefeningen voor deze onderwerpen'); return; } runSession(ses); } }, 'Oefen deze onderwerpen')) : null)));

    // ---- units ----
    const unitsCard = h('div', { class: 'card units-card' });
    lvls.forEach(L => {
      const us = C.unitsOf(L.id);
      const done = us.filter(u => P.unitState(u.id).done).length, skipped = us.filter(u => !P.unitState(u.id).done && P.unitState(u.id).tested).length;
      const lv = s.levels[L.id];
      const det = h('details', { class: 'unit-lv', open: L.id === cur.level ? true : null },
        h('summary', null, h('span', { class: 'lv-badge sm' }, L.id), h('div', { class: 'grow' }, h('b', null, L.name), bar(P.levelProgress(L.id), L.color)),
          h('small', { class: 'muted' }, done + '/' + us.length + ' klaar' + (skipped ? ' · ' + skipped + ' ⏭️' : '') + (lv && lv.passed ? ' · 🎓' : ''))),
        us.map((u, i) => {
          const us2 = P.unitState(u.id); const ws = wordStats([u]);
          const stt = us2.done ? '✅' : us2.tested ? '⏭️' : u.id === cur.id ? '▶️' : Object.keys(us2.steps || {}).length ? '◔' : '';
          return h('a', { class: 'unit-mini', href: '#/unit/' + u.id },
            h('span', { class: 'u-icon' }, u.icon), h('div', { class: 'grow' }, h('b', null, (i + 1) + '. ' + u.title), h('small', { class: 'muted' }, Gen.STEPS.filter(x => (us2.steps || {})[x.id] || us2.done).length + '/' + Gen.STEPS.length + ' stappen · ' + ws.seen + '/' + ws.total + ' woorden' + (us2.best ? ' · toets ' + Math.round(us2.best * 100) + '%' : ''))),
            h('span', { class: 'u-status' }, stt));
        }),
        h('button', { class: 'btn ghost small-btn', type: 'button', onclick: () => startLevelExam(L.id) }, '🎓 Niveau-examen ' + L.id + (lv && lv.best ? ' (beste: ' + Math.round(lv.best * 100) + '%)' : '')));
      det.style.setProperty('--lc', L.color); unitsCard.append(det);
    });
    wrap.append(section('Units', unitsCard));

    // ---- vaardigheden ----
    const sk = [['vocab', '📚 Woordenschat'], ['grammar', '🧩 Grammatica'], ['listen', '🎧 Luisteren'], ['read', '📖 Lezen'], ['speak', '🎙️ Spreken'], ['write', '✍️ Schrijven']];
    wrap.append(section('Vaardigheden', h('div', { class: 'card' }, sk.map(([k, l]) => {
      const v = s.skills[k]; const n = v.ok + v.no;
      return h('div', { class: 'skill-row' }, h('span', null, l), bar(n ? v.ok / n : 0), h('small', { class: 'muted' }, n ? Math.round(v.ok / n * 100) + '% · ' + n : '—'));
    }))));

    // ---- woordspellen ----
    const gs = s.games || {};
    const played = s.done.games || 0;
    wrap.append(section('Woordspellen', h('div', { class: 'card' },
      h('p', { class: 'small muted' }, played ? U.plural(played, 'spel', 'spellen') + ' uitgespeeld.' : 'Nog geen spel uitgespeeld.'),
      S.Games.GAMES.map(g => { const x = gs[g.id]; return h('div', { class: 'skill-row' }, h('span', null, g.icon + ' ' + g.es), bar(x && x.words ? x.good / x.words : 0, '#1b998b'), h('small', { class: 'muted' }, x && x.words ? U.plural(x.n || 0, 'keer', 'keer') + ' · ' + Math.round(x.good / x.words * 100) + '%' : '—')); }),
      h('a', { class: 'btn ghost wide', href: '#/juegos' }, '🎲 Naar de spellen'))));

    // ---- activiteit ----
    const totalMin = Object.values(s.days).reduce((a, d) => a + d.min, 0);
    const totItems = Object.values(s.days).reduce((a, d) => a + d.items, 0), totOk = Object.values(s.days).reduce((a, d) => a + d.ok, 0);
    wrap.append(section('Activiteit', h('div', { class: 'stat-grid' },
      statCard('🔥', Store.liveStreak(), 'dagen op rij', 'record: ' + s.streak.best),
      statCard('⏱️', Math.round(totalMin), 'minuten geoefend', Math.round(totalMin / 60 * 10) / 10 + ' uur'),
      statCard('🎯', totItems ? Math.round(totOk / totItems * 100) + '%' : '—', 'goed beantwoord', totItems + ' antwoorden'),
      statCard('📅', activeDays, 'dagen geoefend'))));
    wrap.append(section('📅 Je oefenkalender', heatmap()));
    const fc = SRS.forecast(7); const mx = Math.max(1, ...fc);
    wrap.append(section('Herhaling komende 7 dagen', h('div', { class: 'card forecast' }, fc.map((n, i) => h('div', { class: 'fc' }, h('i', { style: { height: Math.max(3, n / mx * 70) + 'px' } }), h('b', null, n), h('small', null, i === 0 ? 'vandaag' : ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'][new Date(Date.now() + i * 864e5).getDay()]))))));
    // ---- badges en gegevens ----
    wrap.append(section('Badges (' + s.badges.filter(b => BADGES[b]).length + '/' + Object.keys(BADGES).length + ')', h('div', { class: 'badges' }, Object.entries(BADGES).map(([id, b]) => h('div', { class: 'badge' + (s.badges.includes(id) ? ' on' : ''), title: b[2] }, h('span', null, b[0]), h('small', null, b[1]))))));
    wrap.append(section('Je gegevens', dataTools()));
    return wrap;
  };
  routes.perfil.tab = 'perfil';
  routes.progreso = routes.perfil;
  function lvTile(icon, label, big, sub) { return h('div', { class: 'lv-tile' }, h('span', { class: 'muted small' }, icon + ' ' + label), h('b', null, big), h('small', { class: 'muted' }, sub)); }
  /* Kleine grafiek: niveau per test door de tijd. */
  function testChart(list) {
    const pts = list.slice(-12); const W = 320, H = 110, padL = 30, padR = 10, padT = 10, padB = 22;
    const lv = TEST_ORDER; const y = x => { const i = x.level ? lv.indexOf(x.level) + 1 : 0; const nb = Gen.levelTestResult(x.bands, TEST_ORDER).nextFrac || 0; return Math.min(lv.length, i + nb * 0.9); };
    const X = i => padL + (pts.length === 1 ? 0 : i * (W - padL - padR) / (pts.length - 1)), Y = v => padT + (H - padT - padB) * (1 - v / lv.length);
    let g = '';
    for (let i = 0; i <= lv.length; i++) g += `<line x1="${padL}" x2="${W - padR}" y1="${Y(i)}" y2="${Y(i)}" class="gl"/><text x="${padL - 6}" y="${Y(i) + 4}" text-anchor="end">${i ? lv[i - 1] : '·'}</text>`;
    const path = pts.map((p, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(y(p)).toFixed(1)).join(' ');
    const dots = pts.map((p, i) => `<circle cx="${X(i).toFixed(1)}" cy="${Y(y(p)).toFixed(1)}" r="4"/>`).join('');
    const labels = [0, pts.length - 1].filter((v, i, a) => a.indexOf(v) === i).map(i => `<text x="${X(i)}" y="${H - 6}" text-anchor="${i ? 'end' : 'start'}">${U.esc(fmtDate(pts[i].d, { day: 'numeric', month: 'short' }))}</text>`).join('');
    return h('div', { class: 'test-chart', html: `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Niveau per test">${g}<path d="${path}"/>${dots}${labels}</svg>` });
  }
  function statCard(icon, v, l, sub) { return h('div', { class: 'stat-card' }, h('span', { class: 'si' }, icon), h('b', null, String(v)), h('span', null, l), sub ? h('small', { class: 'muted' }, sub) : null); }
  /* Oefenkalender: elk vakje een dag, elke kolom een week; tik voor wat je die dag deed. */
  function heatmap() {
    const cal = S.Dagplan.calendar(st().days, new Date(), 12);
    const DAYS = ['ma', '', 'wo', '', 'vr', '', 'zo'];
    const detail = h('p', { class: 'heat-detail', 'aria-live': 'polite' });
    let sel = null;
    const show = (c, el) => {
      if (sel) sel.classList.remove('sel'); sel = el; if (el) el.classList.add('sel');
      const x = c.day; const when = (c.today ? 'Vandaag, ' : '') + fmtDate(c.date, { weekday: 'long', day: 'numeric', month: 'long' });
      let what;
      if (!c.level) what = c.today ? 'nog niet geoefend' : 'niet geoefend';
      else {
        const parts = [Math.max(1, Math.round(x.min || 0)) + ' min'];
        if (x.xp) parts.push(x.xp + ' XP');
        if (x.items) parts.push(U.plural(x.items, 'antwoord', 'antwoorden') + ' (' + Math.round((x.ok || 0) / x.items * 100) + '% goed)');
        what = parts.join(' · ') + (c.plan ? ' · ⭐ dagplan af' : '');
      }
      detail.replaceChildren(h('b', null, when[0].toUpperCase() + when.slice(1)), h('br'), h('span', { class: 'muted' }, what));
    };
    const grid = h('div', { class: 'heat', role: 'grid', 'aria-label': 'Oefenkalender van de laatste 12 weken' },
      h('div', { class: 'heat-col heat-days' }, h('span', { class: 'heat-m' }), DAYS.map(d => h('span', { class: 'heat-d' }, d))));
    let todayEl = null, todayCell = null;
    cal.weeks.forEach(w => grid.append(h('div', { class: 'heat-col' }, h('span', { class: 'heat-m' }, w.month), w.cells.map(c => {
      if (c.future) return h('i', { class: 'heat-cell future', 'aria-hidden': 'true' });
      const el = h('button', { type: 'button', class: 'heat-cell l' + c.level + (c.today ? ' today' : ''), 'aria-label': c.key + (c.level ? ': geoefend' : ': niet geoefend') });
      el.addEventListener('click', () => show(c, el));
      if (c.today) { todayEl = el; todayCell = c; }
      return el;
    }))));
    if (todayCell) show(todayCell, todayEl);
    const summary = cal.active
      ? 'In de laatste 12 weken heb je op ' + U.plural(cal.active, 'dag', 'dagen') + ' geoefend, samen ' + Math.round(cal.min) + ' minuten. Deze week: ' + cal.weekActive + ' van de ' + cal.weekPast + ' dagen.'
      : 'Nog geen oefendagen. Zodra je oefent, kleurt het vakje van die dag groen.';
    const LEG = [[0, 'niet geoefend'], [1, '< 5 min'], [2, '5–15'], [3, '15–25'], [4, '25+ min']];
    return h('div', { class: 'card heat-card' },
      h('p', { class: 'heat-sum' }, summary),
      h('p', { class: 'small muted' }, 'Elk vakje is één dag, elke kolom één week, met de nieuwste week rechts. Hoe sterker de kleur, hoe langer je die dag oefende. Het omrande vakje is vandaag. Tik op een vakje om te zien wat je die dag deed.'),
      grid, detail,
      h('div', { class: 'heat-legend small muted' }, LEG.map(([l, t]) => h('span', null, h('i', { class: 'heat-key l' + l }), t))));
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
  /* Uitbreiding «Op reis» (js/mundo.js). De oude pagina Regio’s is opgegaan in de kaart. */
  routes.mundo = () => S.Mundo.page();
  routes.mundo.tab = 'ruta';
  routes.pais = id => S.Mundo.placePage(id);
  routes.pais.tab = 'ruta';
  routes.regios = () => S.Mundo.page();
  routes.regios.tab = 'ruta';

  /* ================= NIVEAUTEST (herhaalbaar) ================= */
  const TEST_ORDER = ['A1', 'A2', 'B1', 'B2'];
  const PART_NL = { grammar: 'grammatica', vocab: 'woordenschat', listen: 'luisteren' };
  const lvIdx = id => C.LEVELS.findIndex(l => l.id === id);
  const availLevels = () => C.LEVELS.filter(l => C.available(l.id)).map(l => l.id);
  function testsOf() { return (st().tests || []).slice().sort((a, b) => a.d - b.d); }
  function lastTest() { const t = testsOf(); return t[t.length - 1] || null; }
  /* Oude plaatsingstoets (8 vragen per blok) overnemen in de testhistorie. */
  function migrateTests() {
    const s = st(); s.tests = s.tests || [];
    const p = s.placement;
    if (p && p.done && p.scores && p.date && !s.tests.some(t => t.d === p.date)) {
      const bands = {}; TEST_ORDER.forEach(l => { if (p.scores[l] != null) bands[l] = { ok: p.scores[l], n: 8 }; });
      s.tests.push({ d: p.date, level: p.level === 'A1' && (p.scores.A1 || 0) < 6 ? null : p.level, bands, parts: {}, old: true });
      s.tests.sort((a, b) => a.d - b.d);
      Store.save({ quiet: true });
    }
  }
  /* Op welk niveau staan je lessen nu? */
  function lessonLevel() {
    const all = C.all(); const open = all.find(u => !P.unitState(u.id).done && !P.unitState(u.id).tested);
    return (open || P.current()).level;
  }
  /* Welk lesniveau past bij een testuitslag: het niveau na wat je beheerst (zo hoog als de lesstof gaat). */
  function fitLevel(level) {
    const av = availLevels(); if (!level) return av[0];
    const want = C.LEVELS[lvIdx(level) + 1];
    return want && C.available(want.id) ? want.id : av[av.length - 1];
  }
  /* Advies: passen je lessen bij je testuitslag? */
  function levelAdvice(t) {
    t = t || lastTest(); if (!t) return null;
    const les = lessonLevel(); const fit = fitLevel(t.level);
    const li = lvIdx(les), fi = lvIdx(fit);
    const maxed = t.level && lvIdx(t.level) >= lvIdx(fit);
    if (li < fi) return { kind: 'higher', les, fit, text: `Je beheerst ${t.level} volgens de test, maar je lessen staan nog op ${les}. Je kunt je lessen verplaatsen naar ${fit}. De units ervoor blijven open om te herhalen.` };
    if (li > fi) return { kind: 'lower', les, fit, text: `Je lessen (${les}) lopen voor op je testuitslag. Geen probleem: herhaal je zwakke punten en doe de test over een paar weken opnieuw.` };
    if (maxed) return { kind: 'top', les, fit, text: `Je beheerst ook ${t.level}. Hogere lessen komen later. Rond de ${fit}-units tot die tijd snel af met «Ik ken dit al», dan vind je je laatste gaten.` };
    return { kind: 'fit', les, fit, text: `Je lessen (${les}) passen bij je niveau. Ga zo door!` };
  }
  function moveLessonsTo(lvl) {
    const first = C.unitsOf(lvl)[0]; if (!first) return;
    const idx = C.index(first.id);
    C.all().slice(0, idx).forEach(u => { const us = Store.unit(u.id); if (!us.done) us.tested = true; });
    st().current = first.id; Store.save();
    S.toast('🚀 Je lessen staan nu op ' + lvl + ': ' + first.icon + ' ' + first.title);
  }
  function confirmMove(lvl) {
    S.confirm('Lessen naar ' + lvl + '?', 'Je gaat verder bij ' + lvl + ', unit 1. Units die je nog niet had afgerond, krijgen ⏭️ (overgeslagen). Je kunt ze altijd nog openen, en met «Ik ken dit al» doe je meteen de toets.', 'Verplaatsen', () => { moveLessonsTo(lvl); location.hash = '#/ruta'; });
  }
  function nextTestDate(t) { return t ? t.d + 28 * 864e5 : 0; }

  routes.toets = function () {
    const t = lastTest();
    const wrap = h('div', { class: 'page' });
    wrap.append(h('a', { class: 'back', href: '#/perfil' }, '← Perfil'), h('h1', null, '🧭 Niveautest'),
      h('div', { class: 'card' },
        h('p', null, 'Je krijgt tot 4 blokken van ±10 vragen: A1, A2, B1 en B2. Per blok: grammatica, woordbetekenis en een luistervraag. Heb je 70% of meer goed, dan ga je door naar het volgende blok. Je ziet pas aan het eind hoe je het gedaan hebt.'),
        h('p', { class: 'small muted' }, 'Elke keer krijg je andere vragen, dus je kunt de test herhalen om te zien hoe je groeit. Je antwoorden tellen niet mee voor je herhaling. Weet je het niet? Kies wat je het meest logisch vindt.'),
        t ? h('p', { class: 'small' }, 'Vorige test: ', h('b', null, t.level ? 'niveau ' + t.level : 'beginner'), ' op ' + fmtDate(t.d) + '.') : null,
        h('button', { class: 'btn primary wide', type: 'button', onclick: () => runPlacement() }, t ? 'Start de test opnieuw' : 'Start')));
    return wrap;
  };
  routes.toets.tab = 'perfil';
  function runPlacement() {
    const bands = {}, parts = {};
    const step = (i) => {
      const lvl = TEST_ORDER[i];
      const ses = Gen.levelTestBand(lvl);
      if (!ses.items.length) return placementResult(bands, parts);
      S.Lesson.run(ses, {
        onItem: (it, ok) => { const p = parts[it.part || 'grammar'] || (parts[it.part || 'grammar'] = { ok: 0, n: 0 }); p.n++; if (ok) p.ok++; },
        onFinish: sum => {
          bands[lvl] = { ok: sum.ok, n: sum.total };
          const pass = sum.total && sum.ok / sum.total >= Gen.TEST_PASS;
          if (pass && i < TEST_ORDER.length - 1) return { silent: true, next: () => step(i + 1) };
          return { silent: true, next: () => placementResult(bands, parts) };
        },
        onClose: () => {}
      });
    };
    step(0);
  }
  function placementResult(bands, parts) {
    const s = st(); const first = !s.placement.done;
    const res = Gen.levelTestResult(bands, TEST_ORDER);
    const before = lessonLevel();
    const rec = { d: Date.now(), level: res.level, bands, parts, lesson: first ? null : before };
    s.tests = (s.tests || []).concat([rec]).slice(-60);
    let text = '';
    if (first) {
      const fit = fitLevel(res.level); const start = C.unitsOf(fit)[0].id;
      const idx = C.index(start);
      C.all().slice(0, idx).forEach(u => { const us = Store.unit(u.id); if (!us.done) us.tested = true; });
      s.placement = { done: true, level: res.level || 'A1', start, date: rec.d, scores: Object.fromEntries(Object.entries(bands).map(([k, v]) => [k, v.ok])) };
      s.current = start;
      text = !res.level ? 'Je begint bij A1, unit 1. Units die je al beheerst, rond je snel af met «Ik ken dit al». ¡Vamos!'
        : lvIdx(res.level) >= lvIdx(fit) ? `Sterk! Je beheerst ${res.level}. Je begint bij ${fit}, unit 1. Ken je een unit al, doe dan meteen de toets («Ik ken dit al»). Zo vind je snel je gaten.`
          : `Je beheerst ${res.level}. Je begint bij ${fit}, unit 1. Eerdere units blijven beschikbaar om te herhalen.`;
    }
    award('placement'); Store.touchStreak(); Store.save();
    lastPlacement = { rec, text, first };
    if (res.level) S.confetti();
    if (location.hash === '#/resultado') render(); else location.hash = '#/resultado';
  }
  let lastPlacement = null;
  function bandBars(t) {
    return h('div', { class: 'lv-bars' }, TEST_ORDER.map(l => {
      const b = t.bands[l]; const L = C.level(l);
      return h('div', { class: 'lv-bar' }, h('b', null, l), bar(b && b.n ? b.ok / b.n : 0, L.color), h('small', null, b ? b.ok + '/' + b.n + (b.n && b.ok / b.n >= Gen.TEST_PASS ? ' ✓' : '') : '—'));
    }));
  }
  routes.resultado = function () {
    const r = lastPlacement || (lastTest() ? { rec: lastTest(), text: '', first: false } : null);
    if (!r) return routes.perfil();
    const t = r.rec; const res = Gen.levelTestResult(t.bands, TEST_ORDER);
    const prev = testsOf().filter(x => x.d < t.d).pop();
    const wrap = h('div', { class: 'page' }, h('h1', null, 'Uitslag niveautest'));
    wrap.append(S.Tutor.coach(S.Tutor.lines.result({ level: t.level, first: !prev, up: prev && lvIdx(t.level) > lvIdx(prev.level), down: prev && lvIdx(t.level) < lvIdx(prev.level) }), { speak: true }));
    const trend = prev ? (lvIdx(t.level) > lvIdx(prev.level) ? '📈 Hoger dan je vorige test (' + (prev.level || 'beginner') + ')' : lvIdx(t.level) < lvIdx(prev.level) ? '📉 Lager dan je vorige test (' + (prev.level || 'beginner') + '). Dat kan gebeuren: doe hem later nog eens.' : '➡️ Gelijk aan je vorige test') : null;
    wrap.append(h('div', { class: 'card level-est' },
      h('div', { class: 'muted small' }, 'Je beheerst'),
      h('div', { class: 'big' }, t.level ? 'Niveau ' + t.level : 'Beginner (A1)'),
      res.next && res.nextFrac >= 0.4 ? h('div', { class: 'small' }, `en je bent goed op weg naar ${res.next} (${Math.round(res.nextFrac * 100)}%)`) : null,
      trend ? h('div', { class: 'small muted' }, trend) : null,
      bandBars(t), partRows(t.parts)));
    if (r.text) wrap.append(h('p', null, r.text));
    if (!r.first) {
      const adv = levelAdvice(t);
      if (adv) wrap.append(adviceCard(adv));
    }
    wrap.append(h('div', { class: 'row gap wrap' }, h('a', { class: 'btn primary', href: '#/perfil' }, '👤 Naar mijn profiel'), h('a', { class: 'btn ghost', href: '#/hoy' }, 'Naar Hoy')));
    return wrap;
  };
  routes.resultado.tab = 'perfil';
  function partRows(parts) {
    const ks = Object.keys(PART_NL).filter(k => parts && parts[k] && parts[k].n);
    if (!ks.length) return null;
    return h('div', { class: 'part-chips' }, ks.map(k => h('span', { class: 'chip' }, PART_NL[k] + ' ' + Math.round(parts[k].ok / parts[k].n * 100) + '%')));
  }
  function adviceCard(adv) {
    return h('div', { class: 'card advice ' + adv.kind },
      h('b', null, { higher: '🚀 Je kunt hoger instappen', lower: '🔁 Eerst je basis versterken', top: '🏔️ Je zit aan de top van de lesstof', fit: '✅ Je lessen passen bij je niveau' }[adv.kind]),
      h('p', { class: 'small' }, adv.text),
      adv.kind === 'higher' ? h('div', { class: 'row gap wrap' },
        h('button', { class: 'btn primary', type: 'button', onclick: () => confirmMove(adv.fit) }, 'Lessen naar ' + adv.fit + ' verplaatsen'),
        h('button', { class: 'btn ghost', type: 'button', onclick: () => startLevelExam(adv.les) }, '🎓 Eerst examen ' + adv.les)) : null,
      adv.kind === 'higher' ? h('p', { class: 'small muted' }, 'Twijfel je? Met het niveau-examen ' + adv.les + ' zie je of je de stof echt beheerst (80% nodig).') : null);
  }

  /* ================= AJUSTES ================= */
  routes.ajustes = function () {
    const s = st().settings; const wrap = h('div', { class: 'page' });
    const set = (k, v) => { s[k] = v; Store.save(); };
    wrap.append(h('h1', null, '⚙️ Instellingen'));
    if (S.Profiles) wrap.append(section('👥 Profielen', profilesCard()));
    const name = h('input', { class: 'input', value: st().name || '', placeholder: 'Je naam', onchange: e => {
      st().name = e.target.value.trim(); Store.save();
      if (S.Profiles && S.Profiles.active().name) { S.Profiles.update(S.Profiles.activeId(), { name: st().name || S.Profiles.active().name }); updateProfileChip(); }
    } });
    const goal = h('select', { class: 'input', onchange: e => set('goal', +e.target.value) }, [10, 15, 20, 30, 45].map(n => h('option', { value: n, selected: s.goal === n ? true : null }, n + ' minuten per dag')));
    const expl = h('select', { class: 'input', onchange: e => set('explain', e.target.value) },
      [['auto', 'Automatisch (NL tot A2, daarna steeds meer Spaans)'], ['nl', 'Altijd Nederlands'], ['mix', 'Nederlands met Spaanse samenvattingen'], ['es', 'Zoveel mogelijk Spaans']].map(([v, l]) => h('option', { value: v, selected: s.explain === v ? true : null }, l)));
    wrap.append(section('Algemeen', h('div', { class: 'card form' }, label('Naam', name), label('Dagdoel', goal), S.course.ui === 'nl' ? label('Taal van uitleg en instructies', expl) : null,
      toggle('Accenten streng beoordelen', 'Een ontbrekend accent telt dan als fout (aanrader vanaf B1).', s.strictAccents, v => set('strictAccents', v)),
      toggle('Geluidseffecten', null, s.sound, v => set('sound', v)),
      toggle('Antwoorden automatisch voorlezen', 'Na elke vraag hoor je het juiste Spaanse antwoord.', s.autoSpeak, v => set('autoSpeak', v)),
      label('Thema', h('select', { class: 'input', onchange: e => { set('theme', e.target.value); applyTheme(); } }, [['auto', 'Automatisch'], ['light', 'Licht'], ['dark', 'Donker']].map(([v, l]) => h('option', { value: v, selected: s.theme === v ? true : null }, l)))))));
    // stem
    const voiceSel = h('select', { class: 'input', onchange: e => set('voice', e.target.value) });
    const fillVoices = () => {
      voiceSel.innerHTML = ''; voiceSel.append(h('option', { value: '' }, 'Automatisch (beste Latijns-Amerikaanse stem)'));
      Speech.voices.slice().sort((a, b) => Speech.rank(b) - Speech.rank(a)).forEach(v => voiceSel.append(h('option', { value: v.voiceURI, selected: s.voice === v.voiceURI ? true : null }, v.name + ' (' + v.lang + ')' + (/es-es/i.test(v.lang) ? ' — Spanje' : '') + (Speech.qualityLabel(v) ? ' · ' + Speech.qualityLabel(v) : ''))));
    };
    fillVoices(); setTimeout(fillVoices, 700);
    const rate = h('input', { type: 'range', min: 0.6, max: 1.2, step: 0.05, value: s.rate, oninput: e => set('rate', +e.target.value) });
    // Test: speelt een opname én de apparaatstem, en zegt wat er klonk. Zo zie je meteen of je iPad de natuurlijke stem gebruikt.
    const voiceOut = h('p', { class: 'small' });
    const voiceTip = h('div', { class: 'small muted voice-tip' });
    const drawTip = () => {
      const v = Speech.voice(), q = v ? Speech.quality(v) : -1;
      voiceTip.innerHTML = '';
      voiceTip.append(h('p', null, v ? 'Apparaatstem nu: ' + v.name + ' (' + v.lang + ')' + (q >= 2 ? ' ✅ ' + Speech.qualityLabel(v) : ' — eenvoudige stem, klinkt wat robotachtig') : 'Geen Spaanse apparaatstem gevonden.'));
      if (q < 2) voiceTip.append(h('p', null, h('b', null, 'Natuurlijker voorlezen op iPad of iPhone: '),
        'open Instellingen › Toegankelijkheid › Gesproken materiaal › Stemmen › Spaans. Kies Paulina of Juan (Mexico) en download de versie ',
        h('b', null, 'Verbeterd'), ' of ', h('b', null, 'Premium'), ' (±100–400 MB, via wifi). Sluit daarna de app helemaal af en open hem opnieuw; de nieuwe stem wordt dan vanzelf gekozen. Op een Mac: Systeeminstellingen › Toegankelijkheid › Gesproken materiaal › Systeemstem › Beheer stemmen.'));
    };
    drawTip(); setTimeout(drawTip, 700);
    const runTest = async () => {
      voiceOut.textContent = '…';
      const clipText = S.course.hello;
      let msg = [];
      if (Speech.hasClip(clipText)) {
        await Speech.say(clipText);
        msg.push(Speech.last && Speech.last.src === 'clip' ? '✅ Lesstof: natuurlijke opname speelt goed af.' : '⚠️ De opname speelde niet af (' + ((Speech.last && Speech.last.err) || 'onbekend') + '). Je hoorde de apparaatstem.');
      } else if (s.clips === false) msg.push('ℹ️ Opnames staan uit.');
      const v = Speech.voice();
      await Speech.speak(S.course.device);
      msg.push(v ? 'Apparaatstem (voor de AI-docent en eigen woorden): ' + v.name + (Speech.quality(v) >= 2 ? ' ✅ ' + Speech.qualityLabel(v) : ' — eenvoudig; zie de tip hieronder voor een natuurlijkere stem.') : 'Geen apparaatstem.');
      voiceOut.textContent = msg.join(' ');
    };
    wrap.append(section('Stem & uitspraak', h('div', { class: 'card form' },
      Speech.clips ? toggle('Ingesproken opnames gebruiken', '🎧 ' + Speech.clips.size.toLocaleString(S.LOC) + ' woorden en zinnen zijn ingesproken met natuurlijke Latijns-Amerikaanse stemmen. Wat niet is ingesproken, leest je apparaat zelf voor.', s.clips !== false, v => set('clips', v)) : null,
      Speech.canSpeak() ? label(Speech.clips ? 'Stem van het apparaat (voor de rest)' : 'Voorleesstem', voiceSel) : h('p', { class: 'warn' }, 'Je browser ondersteunt geen voorlezen.'),
      label('Spreeksnelheid apparaatstem', rate),
      toggle('Dialogen eerst alleen beluisteren', 'De tekst is wazig tot je hem zelf zichtbaar maakt. Goed voor je luistervaardigheid.', s.listenFirst !== false, v => set('listenFirst', v)),
      toggle('Vraag-het-Lupe-knop rechts', 'Een knopje met Lupe aan de rechterkant. Tik erop om haar iets te vragen over wat je op dat moment ziet (dialoog, vraag, je antwoord). Werkt met je API-sleutel van de AI-docent. Je kunt het knopje omhoog of omlaag schuiven.', st().settings.lupeAsk !== false, v => { set('lupeAsk', v); S.Ask && S.Ask.sync(); }),
      toggle('Profe Lupe als begeleider', 'Lupe begroet je op Hoy, reageert op je antwoorden, vat de grammatica samen en feliciteert je na een les. Tik op haar om haar te horen.', S.Tutor.coachOn(), v => set('lupeCoach', v)),
      label('Stem van Lupe (docente)', h('select', { class: 'input', onchange: e => { set('lupeVoice', e.target.value); S.Tutor.say(S.Tutor.lines.voiceTest, 'es'); } },
        [['girl', 'Meisje (hoge stem)'], ['woman', 'Vrouw']].map(([v, l]) => h('option', { value: v, selected: (s.lupeVoice || 'girl') === v ? true : null }, l)))),
      h('button', { class: 'btn ghost', type: 'button', onclick: runTest }, '🔊 Test de stemmen'), voiceOut,
      voiceTip,
      h('p', { class: 'small muted' }, Speech.canListen() ? '🎙️ Spraakherkenning is beschikbaar.' : '🎙️ Spraakherkenning werkt niet in deze browser. Gebruik Chrome of Safari voor spreekoefeningen.'))));
    const micCard = S.Mic.testCard();
    if (Speech.canListen()) micCard.append(toggle('Ingesproken tekst meteen naar Lupe sturen', 'Uit: de tekst komt eerst in het invoerveld, zodat je hem kunt aanpassen.', s.micAutoSend !== false, v => set('micAutoSend', v)));
    wrap.append(section('🎙️ Microfoontest', micCard));
    if (S.micTestFocus) { S.micTestFocus = false; setTimeout(() => { try { micCard.scrollIntoView({ block: 'start', behavior: 'smooth' }); } catch (e) { /* */ } }, 80); }
    if ('caches' in window && 'serviceWorker' in navigator) wrap.append(section('📥 Offline luisteren', offlineCard()));
    // AI
    const keyIn = h('input', { class: 'input', type: 'password', placeholder: 'sk-ant-…', value: s.aiKey || '', autocomplete: 'off', onchange: e => { set('aiKey', e.target.value.trim()); } });
    const modelSel = h('select', { class: 'input', onchange: e => set('aiModel', e.target.value) }, S.AI.MODELS.map(m => h('option', { value: m.id, selected: s.aiModel === m.id ? true : null }, m.label)));
    const testOut = h('span', { class: 'small' });
    wrap.append(section('🤖 AI-docent (optioneel)', h('div', { class: 'card form' },
      h('p', { class: 'small muted' }, 'Met een eigen API-sleutel van Anthropic kun je oefengesprekken voeren en krijg je feedback op je schrijfopdrachten. Je betaalt per gebruik.'),
      h('ol', { class: 'small steps-list' },
        h('li', null, 'Open ', h('a', { href: 'https://platform.claude.com/settings/keys', target: '_blank', rel: 'noopener' }, 'deze link naar Anthropic'), ' en log in (of maak een account aan).'),
        h('li', null, 'Tik op "Create Key". Vraagt de site "Where does your code run?", kies dan ', h('b', null, 'Somewhere else'), ' (API-sleutel).'),
        h('li', null, 'Geef de sleutel een naam (bijv. Español Latino) en ', h('b', null, 'kopieer hem meteen'), ': hij wordt maar één keer getoond.'),
        h('li', null, 'Plak de sleutel hieronder en tik op "Test verbinding". Tegoed zet je op dezelfde site onder Billing.')),
      h('p', { class: 'small' }, '🔒 Deel je sleutel met niemand: wie hem heeft, gebruikt jouw tegoed. Kwijt of gelekt? Verwijder hem op de site en maak een nieuwe.'),
      h('p', { class: 'small muted' }, 'De sleutel wordt alleen in deze browser bewaard en rechtstreeks naar Anthropic gestuurd. Hij komt nooit in back-ups of de gist terecht. Gebruik dit alleen op je eigen apparaat.'),
      label('API-sleutel', keyIn), label('Model', modelSel),
      h('div', { class: 'row gap' }, h('button', { class: 'btn ghost', type: 'button', onclick: async () => { set('aiKey', keyIn.value.trim()); testOut.textContent = 'Testen…'; try { const t = await S.AI.test(); testOut.textContent = '✅ Werkt: ' + t; } catch (e) { testOut.textContent = '⚠️ ' + e.message; } } }, 'Test verbinding'), testOut),
      s.aiKey ? h('button', { class: 'btn link', type: 'button', onclick: () => { set('aiKey', ''); render(); } }, 'Sleutel verwijderen') : null)));
    wrap.append(section('☁️ Synchroniseren (optioneel)', syncCard()));
    wrap.append(section('Lessen', h('div', { class: 'card form' },
      toggle('Alle units ontgrendelen', 'Vrij door de stof bladeren, zonder volgorde.', s.unlockAll, v => set('unlockAll', v)),
      h('a', { class: 'btn ghost', href: '#/toets' }, '🧭 Niveautest opnieuw doen'))));
    wrap.append(section('Gegevens', dataTools(), h('div', { class: 'card' }, h('button', { class: 'btn danger', type: 'button', onclick: () => guard(() => S.confirm('Alles wissen?', 'Al je voortgang, woorden en statistieken worden verwijderd' + (S.Sync && S.Sync.enabled() ? ', ook op je andere gekoppelde apparaten' : '') + '. Dit kan niet ongedaan worden gemaakt. Maak eerst een back-up!', 'Alles wissen', () => { Store.reset(); location.hash = '#/hoy'; render(); })) }, '🗑 Voortgang wissen'))));
    wrap.append(section('ℹ️ Over de app', versionCard()));
    wrap.append(h('p', { class: 'muted small center' }, S.course.title + ' ' + appVersion() + ' · lesstof ' + availLevels().join('–').replace(/–.*–/, '–') + ' · ' + C.all().length + ' units · ' + C.all().reduce((a, u) => a + u.vocab.length, 0) + ' woorden' + (S.course.target === 'es' ? ' · ' + Object.keys(S.conj.VERBS).length + ' werkwoorden' : '')));
    return wrap;
  };
  routes.ajustes.tab = 'perfil';
  function ago(t) {
    if (!t) return 'nog nooit';
    const m = Math.round((Date.now() - t) / 60000);
    return m < 1 ? 'zojuist' : m < 60 ? m + ' min geleden' : m < 1440 ? Math.round(m / 60) + ' uur geleden' : new Date(t).toLocaleDateString(S.LOC);
  }
  /* ================= profielen ================= */
  const P_ = () => S.Profiles;
  /* Vraag de beheerderspincode (als die er is) en voer daarna fn uit. */
  function guard(fn) {
    const Pr = P_();
    if (!Pr || !Pr.locked()) { fn(); return; }
    const root = document.getElementById('modal-root');
    const close = () => { root.innerHTML = ''; };
    const inp = h('input', { class: 'input pin-input', type: 'password', inputmode: 'numeric', autocomplete: 'off', placeholder: '••••', 'aria-label': 'Pincode' });
    const out = h('p', { class: 'small warn', role: 'status' });
    const go = async () => { if (await Pr.unlock(inp.value)) { close(); fn(); } else { out.textContent = '⚠️ Verkeerde pincode'; inp.value = ''; inp.focus(); } };
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    root.append(h('div', { class: 'modal-bg', onclick: e => { if (e.target.classList.contains('modal-bg')) close(); } },
      h('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true' }, h('h3', null, '🔒 Pincode van de beheerder'),
        h('p', null, 'Dit deel van de instellingen is afgeschermd.'), inp, out,
        h('div', { class: 'row gap end' }, h('button', { class: 'btn ghost', type: 'button', onclick: close }, 'Annuleren'), h('button', { class: 'btn primary', type: 'button', onclick: go }, 'Ontgrendelen')))));
    setTimeout(() => inp.focus(), 50);
  }
  S.guard = guard;
  /* Kiezer: wie oefent er? Op de topbalk en bij het opstarten als er meer profielen zijn. */
  function profilePicker(opts = {}) {
    const Pr = P_(); const root = document.getElementById('modal-root');
    const close = () => { root.innerHTML = ''; };
    const rows = Pr.list().map(p => {
      const pk = Pr.peek(p.id), me = p.id === Pr.activeId();
      return h('button', { class: 'prof-pick' + (me ? ' on' : ''), type: 'button', onclick: () => { if (me) { close(); try { sessionStorage.setItem('spt.picked', '1'); } catch (e) { /* negeer */ } } else Pr.switchTo(p.id); } },
        h('span', { class: 'prof-av', 'aria-hidden': 'true' }, p.avatar || '🙂'),
        h('span', { class: 'grow' }, h('b', null, Pr.label(p.id)), h('small', { class: 'muted' }, CNAME(p.course) + ' · ' + (pk.level ? pk.level + ' · ' : '') + pk.xp + ' XP')),
        me ? h('span', { class: 'small muted' }, 'nu actief') : null);
    });
    root.append(h('div', { class: 'modal-bg', onclick: e => { if (!opts.start && e.target.classList.contains('modal-bg')) close(); } },
      h('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true' }, h('h3', null, opts.start ? '👋 Wie oefent er?' : '👥 Profiel kiezen'),
        h('div', { class: 'prof-picks' }, rows),
        h('div', { class: 'row gap end' }, h('a', { class: 'btn link', href: '#/ajustes', onclick: close }, 'Profielen beheren')))));
  }
  S.profilePicker = profilePicker;
  function updateProfileChip() {
    const el = document.getElementById('tb-prof'), Pr = P_(); if (!el || !Pr) return;
    const p = Pr.active(), show = Pr.many() || p.courses.length > 1;
    el.hidden = !show;
    if (show) { el.innerHTML = ''; el.append(p.avatar || '🙂', h('span', { class: 'tb-prof-name' }, ' ' + Pr.label(p.id)), p.courses.length > 1 ? ' ' + S.course.flag : ''); el.title = 'Profiel: ' + Pr.label(p.id) + ' (tik om te wisselen)'; }
  }
  const CNAME = c => { const x = S.COURSES[c]; return x ? x.flag + ' ' + (S.course.ui === 'es' ? x.name.es.replace(/^./, m => m.toUpperCase()) : x.name.nl) : c; };
  const CLONG = { 'es-nl': 'Spaans leren · uitleg in het Nederlands', 'en-es': 'Inglés · explicaciones en español', 'nl-es': 'Neerlandés · explicaciones en español' };
  function profilesCard() {
    const Pr = P_(); const card = h('div', { class: 'card form prof-card' });
    const draw = () => {
      card.innerHTML = '';
      card.append(h('p', { class: 'small muted' }, 'Iedereen op dit apparaat kan een eigen profiel hebben, met een eigen voortgang en een eigen synchronisatie. Wissel van profiel via de knop bovenin.'));
      const list = h('div', { class: 'prof-list' });
      Pr.list().forEach(p => {
        const pk = Pr.peek(p.id), me = p.id === Pr.activeId();
        list.append(h('div', { class: 'prof-row' + (me ? ' on' : '') },
          h('span', { class: 'prof-av', 'aria-hidden': 'true' }, p.avatar || '🙂'),
          h('div', { class: 'grow' }, h('b', null, Pr.label(p.id)), h('small', { class: 'muted', style: { display: 'block' } }, (me ? 'Actief · ' : '') + p.courses.map(CNAME).join(' · ')), h('small', { class: 'muted', style: { display: 'block' } }, (pk.level ? pk.level + ' · ' : '') + pk.xp + ' XP')),
          me ? null : h('button', { class: 'btn ghost small', type: 'button', onclick: () => Pr.switchTo(p.id) }, 'Wissel'),
          p.id === Pr.MAIN || me ? null : h('button', { class: 'btn link small', type: 'button', 'aria-label': 'Verwijder ' + Pr.label(p.id), onclick: () => guard(() => S.confirm('Profiel verwijderen?', 'De voortgang van ' + Pr.label(p.id) + ' wordt van dit apparaat gewist. Staat die voortgang ook in een gist, dan blijft hij daar bewaard.', 'Verwijderen', () => { Pr.remove(p.id); draw(); updateProfileChip(); })) }, '🗑')));
      });
      card.append(list);
      // cursus van dit profiel: wisselen of er een bij nemen
      const me = Pr.active();
      const csel = h('select', { class: 'input', 'aria-label': 'Cursus' }, Object.keys(S.COURSES).map(c => h('option', { value: c, selected: c === me.course ? true : null }, CLONG[c] + (me.courses.includes(c) ? '' : ' (nieuw)'))));
      csel.onchange = () => {
        const c = csel.value; if (c === me.course) return;
        if (me.courses.includes(c)) { Pr.switchCourse(me.id, c); return; }
        S.confirm('Nieuwe cursus?', Pr.label(me.id) + ' begint met ' + CLONG[c] + ', met een eigen, lege voortgang. De voortgang van de andere cursus blijft bewaard; je kunt altijd terugwisselen.', 'Begin', () => Pr.switchCourse(me.id, c), 'Annuleren', () => { csel.value = me.course; });
      };
      card.append(label('Cursus van ' + Pr.label(me.id), csel));
      // nieuw profiel
      let av = Pr.AVATARS[1];
      const nameIn = h('input', { class: 'input', placeholder: 'Naam', maxlength: '30' });
      const avs = h('div', { class: 'chips prof-avs' }, Pr.AVATARS.map(a => h('button', { class: 'chip toggle' + (a === av ? ' on' : ''), type: 'button', 'aria-label': 'Kies ' + a, onclick: e => { av = a; avs.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === e.currentTarget)); } }, a)));
      const out = h('p', { class: 'small warn', role: 'status' });
      const ncs = h('select', { class: 'input' }, Object.keys(S.COURSES).map(c => h('option', { value: c }, CLONG[c])));
      const form = h('div', { class: 'prof-new', hidden: true }, label('Naam van het nieuwe profiel', nameIn), avs, label('Wat wil deze persoon leren?', ncs), out,
        h('div', { class: 'row gap wrap' },
          h('button', { class: 'btn primary', type: 'button', onclick: () => { try { const id = Pr.add(nameIn.value, av, ncs.value); S.confirm('Profiel gemaakt', 'Wil je nu naar het profiel van ' + Pr.label(id) + ' gaan? Daar begin je met een lege voortgang en de niveautest.', 'Ga naar ' + Pr.label(id), () => Pr.switchTo(id), 'Later', () => { draw(); updateProfileChip(); }); } catch (e) { out.textContent = '⚠️ ' + e.message; } } }, 'Profiel maken'),
          h('button', { class: 'btn link', type: 'button', onclick: () => { form.hidden = true; addBtn.hidden = false; } }, 'Annuleren')));
      const addBtn = h('button', { class: 'btn ghost', type: 'button', onclick: () => guard(() => { form.hidden = false; addBtn.hidden = true; nameIn.focus(); }) }, '＋ Nieuw profiel');
      card.append(h('div', { class: 'row gap wrap' }, addBtn), form);
      // pincode
      const pinIn = h('input', { class: 'input pin-input', type: 'password', inputmode: 'numeric', autocomplete: 'new-password', placeholder: '4 tot 8 cijfers' });
      const pinOut = h('p', { class: 'small', role: 'status' });
      const pinBox = h('div', { class: 'prof-pin', hidden: true }, label(Pr.hasPin() ? 'Nieuwe pincode' : 'Pincode', pinIn), pinOut,
        h('div', { class: 'row gap wrap' }, h('button', { class: 'btn primary', type: 'button', onclick: async () => { try { await Pr.setPin(pinIn.value); S.toast('🔒 Pincode ingesteld'); draw(); render(); } catch (e) { pinOut.textContent = '⚠️ ' + e.message; } } }, 'Opslaan')));
      card.append(h('div', { class: 'prof-lock' },
        h('div', null, h('b', null, '🔒 Pincode van de beheerder'), h('small', { class: 'muted', style: { display: 'block' } }, Pr.hasPin()
          ? 'Aan. Nodig voor synchroniseren, profielen toevoegen of verwijderen en alles wissen. Zo kan iemand anders je token niet zien of veranderen.'
          : 'Uit. Zet een pincode als je dit apparaat voor iemand anders instelt: dan kan die het token voor synchroniseren niet zien of veranderen.')),
        h('div', { class: 'row gap wrap' },
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => guard(() => { pinBox.hidden = false; pinIn.focus(); }) }, Pr.hasPin() ? 'Wijzigen' : 'Pincode instellen'),
          Pr.hasPin() ? h('button', { class: 'btn link small', type: 'button', onclick: () => guard(() => { Pr.clearPin(); S.toast('🔓 Pincode uit'); draw(); render(); }) }, 'Uitzetten') : null),
        pinBox),
        h('div', { class: 'prof-lock' }, h('div', null, h('b', null, '📊 Overzicht van iedereen'), h('small', { class: 'muted', style: { display: 'block' } }, 'Zie per profiel het niveau, de reeks, de laatste oefendag en de zwakke punten. Ook van vrienden op hun eigen telefoon, zolang hun voortgang via jouw GitHub-token synchroniseert.')),
          h('div', { class: 'row gap wrap' }, h('button', { class: 'btn ghost small', type: 'button', onclick: () => guard(() => { location.hash = '#/beheer'; }) }, 'Overzicht openen'))));
    };
    draw();
    return card;
  }
  /* Beheerdersoverzicht (#/beheer): alle voortgangen uit de gists van het gekoppelde GitHub-account. */
  routes.beheer = function () {
    const wrap = h('div', { class: 'page' });
    wrap.append(h('a', { class: 'btn link', href: '#/ajustes' }, '← Instellingen'), h('h1', null, '📊 Overzicht van iedereen'));
    if (S.Profiles && S.Profiles.locked()) { wrap.append(h('div', { class: 'card' }, h('p', null, 'Dit overzicht zit achter de pincode van de beheerder.'), h('button', { class: 'btn primary', type: 'button', onclick: () => guard(render) }, '🔒 Ontgrendelen'))); return wrap; }
    if (!S.Sync || !S.Sync.enabled()) { wrap.append(h('div', { class: 'card' }, h('p', null, 'Zet eerst synchroniseren aan in dit profiel (Instellingen › Synchroniseren). Het overzicht leest alle voortgangen op dat GitHub-account.'))); return wrap; }
    const box = h('div', { class: 'admin-list' }, h('p', { class: 'muted' }, '🔄 Voortgangen ophalen…'));
    wrap.append(h('p', { class: 'small muted' }, 'Alle voortgangen op @' + S.Sync.status().login + ', de nieuwste bovenaan. Dit leest alleen; er verandert niets.'), box);
    const fmtDay = k => { if (!k) return 'nog nooit'; const t = U.todayKey(), y = U.todayKey(new Date(Date.now() - 864e5)); if (k === t) return 'vandaag'; if (k === y) return 'gisteren'; const d = new Date(k + 'T12:00:00'); return d.toLocaleDateString(S.LOC, { weekday: 'short', day: 'numeric', month: 'short' }); };
    const courseOf = f => { const m = /--([a-z]{2}-[a-z]{2})\.json$/.exec(f); const c = S.COURSES && S.COURSES[m ? m[1] : 'es-nl']; return c ? c.flag + ' ' + c.name.nl : '🌎 Spaans'; };
    S.Sync.overview().then(list => {
      box.innerHTML = '';
      if (!list.length) { box.append(h('p', { class: 'muted' }, 'Nog geen voortgangen gevonden.')); return; }
      list.forEach(r => {
        if (r.error) { box.append(h('div', { class: 'card admin-card' }, h('b', null, r.file), h('p', { class: 'small warn' }, '⚠️ ' + r.error))); return; }
        const stat = (v, l) => h('div', { class: 'admin-stat' }, h('b', null, v), h('small', { class: 'muted' }, l));
        box.append(h('div', { class: 'card admin-card' },
          h('div', { class: 'row gap between wrap' }, h('div', null, h('b', { class: 'admin-name' }, r.name || 'Zonder naam'), r.mine ? h('span', { class: 'chip ok' }, 'dit profiel') : null, h('small', { class: 'muted', style: { display: 'block' } }, courseOf(r.file) + (r.unit ? ' · nu bij ' + r.unit : ''))),
            h('span', { class: 'chip' }, r.level || '–')),
          h('div', { class: 'admin-stats' }, stat('🔥 ' + r.streak, 'dagen op rij (record ' + r.best + ')'), stat(fmtDay(r.lastDay), 'laatst geoefend'), stat(r.weekMin + ' min', 'deze week'), stat('⭐ ' + r.xp, U.plural(r.words, 'woord', 'woorden') + ' · ' + U.plural(r.unitsDone, 'unit', 'units'))),
          r.weak.length ? h('div', { class: 'small' }, h('b', null, '🎯 Zwakke punten: '), r.weak.map(w => w.label + ' (' + w.pct + '%)').join(', ')) : h('div', { class: 'small muted' }, 'Nog geen zwakke punten.'),
          h('small', { class: 'muted' }, 'Gesynchroniseerd ' + ago(r.updated))));
      });
    }).catch(e => { box.innerHTML = ''; box.append(h('p', { class: 'warn' }, '⚠️ ' + e.message)); });
    return wrap;
  };
  routes.beheer.tab = 'perfil';
  /* Na het token: kies welke voortgang bij dit profiel hoort, of begin een nieuwe. */
  function chooseRemote(r, myName, finish, cancel) {
    const root = document.getElementById('modal-root');
    const close = () => { root.innerHTML = ''; };
    const legacy = f => f.file === S.Sync.FILE;
    const rows = r.found.map(f => h('button', { class: 'prof-pick', type: 'button', onclick: () => {
      const who = f.name || 'zonder naam';
      if (f.name && myName && f.name.toLowerCase() !== myName.toLowerCase()) S.confirm('Voortgang van ' + who + '?', 'Dit profiel heet ' + myName + '. Als je deze voortgang kiest, wordt hij samengevoegd met de voortgang van dit profiel. Weet je het zeker?', 'Ja, samenvoegen', () => finish({ gistId: f.gistId, file: f.file }), 'Terug', () => chooseRemote(r, myName, finish, cancel));
      else { close(); finish({ gistId: f.gistId, file: f.file }); }
    } },
      h('span', { class: 'prof-av', 'aria-hidden': 'true' }, '☁️'),
      h('span', { class: 'grow' }, h('b', null, f.name || (legacy(f) ? 'Eerste voortgang' : f.file)), h('small', { class: 'muted' }, (f.xp != null ? f.xp + ' XP · ' : '') + 'bijgewerkt ' + ago(f.updated)))));
    root.append(h('div', { class: 'modal-bg' },
      h('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true' }, h('h3', null, 'Welke voortgang hoort bij ' + (myName || 'dit profiel') + '?'),
        h('p', { class: 'small muted' }, 'Op @' + r.login + ' staan al ' + U.plural(r.found.length, 'voortgang', 'voortgangen') + '. Kies die van ' + (myName || 'dit profiel') + ', of begin een nieuwe als het om iemand anders gaat.'),
        h('div', { class: 'prof-picks' }, rows,
          h('button', { class: 'prof-pick', type: 'button', onclick: () => { close(); finish({ fresh: true, name: myName }); } },
            h('span', { class: 'prof-av', 'aria-hidden': 'true' }, '✨'), h('span', { class: 'grow' }, h('b', null, 'Nieuwe voortgang'), h('small', { class: 'muted' }, 'Een eigen bestand voor ' + (myName || 'dit profiel') + ', los van de andere')))),
        h('div', { class: 'row gap end' }, h('button', { class: 'btn ghost', type: 'button', onclick: () => { close(); cancel(); } }, 'Annuleren')))));
  }
  function syncCard() {
    const Sync = S.Sync; const card = h('div', { class: 'card form sync-card' }); let msg = '';
    const draw = () => {
      const s = Sync.status(); card.innerHTML = '';
      if (S.Profiles && S.Profiles.locked()) {
        card.append(h('div', { class: 'row gap between wrap' },
          h('div', null, h('b', null, s.enabled ? '✅ Synchroniseren staat aan' : 'Synchroniseren staat uit'), h('small', { class: 'muted', style: { display: 'block' } }, s.enabled ? (s.error ? '⚠️ ' + s.error : 'Bijgewerkt ' + ago(s.last)) : 'De beheerder kan dit aanzetten.')),
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => guard(draw) }, '🔒 Beheer')));
        return;
      }
      if (!s.enabled) {
        const tokIn = h('input', { class: 'input', type: 'password', placeholder: 'github_pat_… of ghp_…', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' });
        const out = h('p', { class: 'small' + (msg ? ' warn' : ''), role: 'status' }, msg);
        const btn = h('button', { class: 'btn primary', type: 'button', onclick: async () => {
          btn.disabled = true; out.textContent = 'Verbinden…'; msg = '';
          try {
            const token = tokIn.value, r = await Sync.scan(token);
            const finish = async pick => { try { const s2 = await Sync.connect(token, pick); S.toast('☁️ Verbonden als @' + s2.login); render(); } catch (e) { msg = '⚠️ ' + e.message; draw(); } };
            const myName = S.Profiles ? S.Profiles.label(S.Profiles.activeId()) : (st().name || '');
            if (!r.found.length) { await finish(S.Profiles && S.Profiles.activeId() !== S.Profiles.MAIN ? { fresh: true, name: myName } : null); return; }
            chooseRemote(r, myName, finish, () => { btn.disabled = false; out.textContent = ''; });
          } catch (e) { msg = '⚠️ ' + e.message; draw(); }
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
  function versionDate(d) { return d ? new Date(d + 'T12:00:00').toLocaleDateString(S.LOC, { day: 'numeric', month: 'long', year: 'numeric' }) : ''; }
  async function latestVersion() {
    const r = await fetch('js/version.js?t=' + Date.now(), { cache: 'no-store' });
    if (!r.ok) throw new Error('Kon de nieuwste versie niet ophalen (' + r.status + ').');
    const t = await r.text(); const n = /number:\s*'([^']+)'/.exec(t), d = /date:\s*'([^']+)'/.exec(t);
    if (!n) throw new Error('Onbekend versiebestand.');
    return { number: n[1], date: d ? d[1] : '' };
  }
  // 1.10.0 > 1.9.2: per onderdeel als getal vergelijken
  function newer(a, b) {
    const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number);
    for (let i = 0; i < 3; i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) > (y[i] || 0); }
    return false;
  }
  /* Bijwerken: nieuwe service worker ophalen en laten overnemen (die ruimt de oude cache op) en herladen met een nieuw adres, zodat Safari/Edge op de iPad niets ouds uit het geheugen haalt. */
  async function updateNow() {
    try {
      const reg = navigator.serviceWorker && await navigator.serviceWorker.getRegistration();
      if (reg) {
        await reg.update();
        const sw = reg.installing || reg.waiting;
        if (sw) await new Promise(res => { const t = setTimeout(res, 4000); navigator.serviceWorker.addEventListener('controllerchange', () => { clearTimeout(t); res(); }, { once: true }); });
      }
    } catch (e) { /* geen service worker of cache: gewoon herladen */ }
    location.replace(location.pathname + '?u=' + Date.now() + location.hash);
  }
  /* Automatisch kijken of er een nieuwe versie is: bij het openen, als je terugkomt in de app en elk half uur. */
  let lastCheck = 0, shownFor = '';
  async function autoCheck() {
    if (Date.now() - lastCheck < 60000 || navigator.onLine === false) return;
    lastCheck = Date.now();
    try { const L = await latestVersion(); if (newer(L.number, V.number) && shownFor !== L.number) { shownFor = L.number; showUpdateBar(L); } } catch (e) { /* offline of geen verbinding: later opnieuw */ }
  }
  function showUpdateBar(L) {
    const old = document.getElementById('update-bar'); if (old) old.remove();
    const btn = h('button', { class: 'btn primary', type: 'button', onclick: () => { btn.disabled = true; btn.textContent = 'Bijwerken…'; updateNow(); } }, 'Nu bijwerken');
    document.body.append(h('div', { id: 'update-bar', class: 'update-bar', role: 'status' },
      h('span', null, '🆕 Versie ' + L.number + ' staat klaar'), btn,
      h('button', { class: 'update-x', type: 'button', 'aria-label': 'Later', onclick: () => document.getElementById('update-bar').remove() }, '✕')));
  }
  /* Wat is er nieuw (js/changelog.js). Bij een Spaanstalige cursus de Spaanse tekst, anders de Nederlandse. */
  const LOG = self.SPT_CHANGELOG || [];
  const logText = e => (S.i18n && S.i18n.on && e.es && e.es.length ? e.es : e.nl) || [];
  function logList(entries, cur) {
    return h('div', { class: 'wn-list', 'data-notr': S.i18n && S.i18n.on ? '' : null },
      entries.map(e => h('section', { class: 'wn-item' + (e.v === cur ? ' current' : '') },
        h('div', { class: 'wn-head' }, h('b', null, 'v' + e.v), h('small', { class: 'muted' }, versionDate(e.date)),
          e.v === cur ? h('span', { class: 'wn-tag' }, S.t('jouw versie')) : null),
        h('ul', null, logText(e).map(x => h('li', null, x))))));
  }
  // de changelog van de live-versie ophalen, om te laten zien wat een update brengt
  async function latestLog() {
    try {
      const r = await fetch('js/changelog.js?t=' + Date.now(), { cache: 'no-store' }); if (!r.ok) return [];
      const box = {}; new Function('self', await r.text())(box); return Array.isArray(box.SPT_CHANGELOG) ? box.SPT_CHANGELOG : [];
    } catch (e) { return []; }
  }
  /* Knop «Controleren op updates» met de uitkomst eronder; gebruikt in Instellingen en in «Wat is er nieuw». */
  function updateCheck(opts = {}) {
    const out = h('div', { class: 'small wn-out', role: 'status' });
    const btn = h('button', { class: 'btn ' + (opts.primary ? 'primary' : 'ghost'), type: 'button', onclick: async () => {
      btn.disabled = true; out.className = 'small wn-out'; out.textContent = 'Controleren…';
      try {
        const L = await latestVersion();
        if (!newer(L.number, V.number)) out.textContent = '✅ Je hebt de nieuwste versie.';
        else {
          const coming = opts.log ? (await latestLog()).filter(e => newer(e.v, V.number)) : [];
          out.textContent = '';
          out.append(h('p', null, '🆕 Versie ' + L.number + (L.date ? ' (' + versionDate(L.date) + ')' : '') + ' staat klaar. '),
            coming.length ? logList(coming) : null,
            h('button', { class: 'btn primary', type: 'button', onclick: e => { e.target.disabled = true; e.target.textContent = 'Bijwerken…'; updateNow(); } }, 'Nu bijwerken'));
        }
      } catch (e) { out.className = 'small wn-out warn'; out.textContent = '⚠️ ' + (navigator.onLine === false ? 'Je bent offline. Probeer het later opnieuw.' : e.message); }
      btn.disabled = false;
    } }, '🔄 Controleren op updates');
    return { btn, out };
  }
  const SEEN_KEY = 'spt.seenVersion';
  function markSeen() { try { localStorage.setItem(SEEN_KEY, V.number); } catch (e) { /* negeer */ } const b = document.getElementById('tb-ver'); if (b) b.classList.remove('has-new'); }
  /* Na een update: een stipje bij het versienummer tot je «Wat is er nieuw» hebt geopend. De allereerste keer niet. */
  function flagNew() {
    let seen = null; try { seen = localStorage.getItem(SEEN_KEY); } catch (e) { return; }
    if (!seen) { markSeen(); return; }
    if (newer(V.number, seen)) { const b = document.getElementById('tb-ver'); if (b) { b.classList.add('has-new'); b.title = 'Nieuwe versie: tik om te zien wat er nieuw is'; } }
  }
  function whatsNew() {
    markSeen();
    const root = document.getElementById('modal-root'); root.innerHTML = '';
    const close = () => { root.innerHTML = ''; document.removeEventListener('keydown', esc); };
    const esc = e => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', esc);
    const u = updateCheck({ primary: true, log: true });
    const list = LOG.length ? logList(LOG, V.number) : h('p', { class: 'muted' }, 'Nog geen overzicht van updates.');
    root.append(h('div', { class: 'modal-bg', onclick: e => { if (e.target.classList.contains('modal-bg')) close(); } },
      h('div', { class: 'modal whatsnew', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'wn-title' },
        h('div', { class: 'row between wn-top' }, h('h3', { id: 'wn-title' }, '🆕 Wat is er nieuw'),
          h('button', { class: 'update-x', type: 'button', 'aria-label': 'Sluiten', onclick: close }, '✕')),
        h('p', { class: 'small muted' }, 'Je gebruikt versie ' + V.number + (V.date ? ' van ' + versionDate(V.date) : '') + '.'),
        h('div', { class: 'wn-check' }, u.btn, u.out),
        h('h4', { class: 'wn-sub' }, 'Recente updates'),
        list,
        h('div', { class: 'row end' }, h('button', { class: 'btn ghost', type: 'button', onclick: close }, 'Sluiten')))));
    u.btn.focus();
  }
  S.whatsNew = whatsNew;
  function versionCard() {
    const u = updateCheck();
    return h('div', { class: 'card form' },
      h('div', { class: 'row gap between wrap' },
        h('div', null, h('b', null, 'Versie ' + V.number), h('small', { class: 'muted', style: { display: 'block' } }, versionDate(V.date))),
        u.btn),
      u.out,
      h('button', { class: 'btn link', type: 'button', onclick: whatsNew }, '📋 Wat is er nieuw in de laatste updates'),
      h('p', { class: 'small muted' }, 'Na een update zie je hier een hoger versienummer. Staat er nog het oude nummer? Tik dan op «Controleren op updates».'));
  }
  /* Opnames per niveau downloaden, zodat ze ook zonder internet werken (sw.js bewaart ze in een vaste cache). */
  const AUDIO_CACHE = 'espanol-latino-audio';
  const LV_NAMES = { A1: 'A1', A2: 'A2', B1: 'B1', B2: 'B2', C1: 'C1', C2: 'C2', X: 'Overig (zinnen, regio’s)' };
  function offlineCard() {
    const url = k => new URL('audio/' + k + '.mp3', location.href).href;
    const rows = h('div', { class: 'offline-rows' });
    const note = h('p', { class: 'small muted' }, 'Opnames die je al eens gehoord hebt, blijven bewaard. Download een heel niveau als je onderweg zonder internet wilt oefenen. Gemiddeld ±17 kB per opname.');
    let busy = false;
    async function have(keys) {
      const c = await caches.open(AUDIO_CACHE), got = new Set((await c.keys()).map(r => r.url));
      return keys.filter(k => got.has(url(k))).length;
    }
    async function draw() {
      if (Speech.clipsLoaded) await Speech.clipsLoaded;
      if (!Speech.levels) { note.textContent = 'Er zijn (nog) geen opnames om te downloaden.'; return; }
      rows.innerHTML = '';
      for (const lv of Object.keys(Speech.levels)) {
        const keys = Speech.levels[lv], n = await have(keys).catch(() => 0), all = keys.length;
        const mb = Math.round(all * 17 / 1024);
        const out = h('small', { class: 'muted' }, n >= all ? '✅ Alles offline beschikbaar' : `${n.toLocaleString(S.LOC)} van ${all.toLocaleString(S.LOC)} opnames offline · ±${mb} MB`);
        const dl = h('button', { class: 'btn ' + (n >= all ? 'ghost' : 'primary'), type: 'button', disabled: n >= all ? true : null, onclick: () => get(lv, keys, out, dl) }, n >= all ? 'Klaar' : '📥 Download');
        const rm = n ? h('button', { class: 'btn ghost', type: 'button', title: 'Verwijderen', onclick: () => drop(keys) }, '🗑') : null;
        rows.append(h('div', { class: 'row gap between wrap offline-row' }, h('div', null, h('b', null, LV_NAMES[lv] || lv), h('div', null, out)), h('div', { class: 'row gap' }, dl, rm)));
      }
    }
    async function get(lv, keys, out, btn) {
      if (busy) return; busy = true; btn.disabled = true;
      const c = await caches.open(AUDIO_CACHE), got = new Set((await c.keys()).map(r => r.url));
      const todo = keys.filter(k => !got.has(url(k)));
      let done = keys.length - todo.length, fail = 0;
      const step = async () => {
        while (todo.length) {
          const k = todo.shift();
          try { const r = await fetch(url(k), { cache: 'no-store' }); if (r.ok && r.status === 200) await c.put(url(k), r); else fail++; } catch (e) { fail++; }
          done++; if (done % 20 === 0 || !todo.length) out.textContent = `⏳ ${done.toLocaleString(S.LOC)} van ${keys.length.toLocaleString(S.LOC)}…`;
        }
      };
      await Promise.all([step(), step(), step(), step(), step(), step()]);
      busy = false;
      if (fail) S.toast('⚠️ ' + fail + ' opnames lukten niet' + (navigator.onLine === false ? ' (je bent offline)' : '') + '. Probeer het later opnieuw.');
      else S.toast('📥 ' + (LV_NAMES[lv] || lv) + ' staat offline');
      if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => { /* */ });
      draw();
    }
    async function drop(keys) {
      if (busy) return;
      const c = await caches.open(AUDIO_CACHE);
      await Promise.all(keys.map(k => c.delete(url(k))));
      draw();
    }
    draw();
    return h('div', { class: 'card form' }, note, rows);
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
    if (S.i18n) S.i18n.start();
    if (S.course.id !== 'es-nl') {
      const logo = document.querySelector('.logo'); if (logo) logo.innerHTML = S.course.flag + ' ' + S.course.brand;
      document.title = S.course.title;
    } else {
      const logo = document.querySelector('.logo'); if (logo) logo.innerHTML = S.Icons.logo() + ' Español <em>latino</em>';
    }
    S.Icons.decorate();
    Store.load(); migrateTests();
    applyTheme(); Speech.init(); S.Tutor.hookSpeech();
    const ver = document.getElementById('tb-ver');
    if (ver) { ver.textContent = appVersion(); ver.addEventListener('click', e => { e.preventDefault(); whatsNew(); }); flagNew(); }
    window.addEventListener('hashchange', render);
    render();
    if (S.Ask) S.Ask.init();
    if (S.Sync) S.Sync.init();
    const pb = document.getElementById('tb-prof'); if (pb) pb.addEventListener('click', () => profilePicker());
    let picked = false; try { picked = sessionStorage.getItem('spt.picked') === '1'; } catch (e) { /* negeer */ }
    if (S.Profiles && S.Profiles.many() && !picked) profilePicker({ start: true });
    if ('serviceWorker' in navigator && /^https:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js?v=' + encodeURIComponent(V.number), { updateViaCache: 'none' }).catch(() => {});
    if (location.search.includes('u=')) history.replaceState(null, '', location.pathname + location.hash); // adres na bijwerken weer netjes
    setTimeout(autoCheck, 2500);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') autoCheck(); });
    window.addEventListener('pageshow', e => { if (e.persisted) autoCheck(); });
    setInterval(autoCheck, 30 * 60000);
  }
  S.P = P;
  document.addEventListener('DOMContentLoaded', boot);
})(window.SPT);
