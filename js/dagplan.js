/* Dagplan op Hoy: welke taken vandaag af zijn, de weekstrook en de dagbeloning.
   Alleen rekenwerk (getest in tests/run.js); het tekenen gebeurt in app.js.
   Alles staat in de dag zelf (state.days[k].done), dus het synchroniseert mee:
     review  herhaling gedaan            review0  vandaag niets te herhalen (telt als klaar)
     learn   aantal lesstappen vandaag   learnLast wat je het laatst deed
     speak   spreken / gesprek gedaan    chest    dagbeloning geopend
     seen    taken waarvan het afvinken op Hoy al getoond is */
(function (S) {
  'use strict';
  const TASKS = ['review', 'learn', 'speak'];
  const NAMES = { review: 'Herhaling', learn: 'Nieuwe stof', speak: 'Spreken' };
  const CHEST_XP = 50;

  function status(day, opt = {}) {
    const d = (day && day.done) || {};
    const free = !d.review && (!!d.review0 || opt.due === 0);
    const tasks = {
      review: { done: !!d.review || free, free },
      learn: { done: (d.learn || 0) > 0, count: d.learn || 0 },
      speak: { done: !!d.speak }
    };
    const n = TASKS.filter(id => tasks[id].done).length;
    return { tasks, n, total: TASKS.length, all: n === TASKS.length, chest: !!d.chest, next: TASKS.find(id => !tasks[id].done) || null };
  }

  /* Taken die af zijn maar nog niet op Hoy zijn afgevinkt; die worden nu als gezien bewaard. */
  function fresh(day, st) {
    const d = day.done || (day.done = {});
    const seen = Object.assign({}, d.seen || {});
    const out = TASKS.filter(id => st.tasks[id].done && !seen[id] && !st.tasks[id].free);
    TASKS.forEach(id => { if (st.tasks[id].done) seen[id] = 1; });
    d.seen = seen;
    return out;
  }

  const practiced = x => !!x && (x.min > 0 || x.items > 0 || x.xp > 0);
  /* De week van maandag t/m zondag rond 'nu'. state: star (dagplan af), fire (geoefend), miss, future. */
  function week(days, now = new Date()) {
    const key = S.U.todayKey(now);
    const [y, m, dd] = key.split('-').map(Number);
    const base = new Date(y, m - 1, dd, 12);
    const mon = new Date(base); mon.setDate(base.getDate() - ((base.getDay() + 6) % 7));
    const labels = ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'];
    return labels.map((label, i) => {
      const dt = new Date(mon); dt.setDate(mon.getDate() + i);
      const k = S.U.todayKey(new Date(dt.getTime() + 4 * 3600e3));
      const x = days[k];
      const state = k > key ? 'future' : x && x.done && x.done.chest ? 'star' : practiced(x) ? 'fire' : 'miss';
      return { key: k, label, state, today: k === key };
    });
  }
  const plansDone = days => Object.values(days || {}).filter(x => x && x.done && x.done.chest).length;

  S.Dagplan = { TASKS, NAMES, CHEST_XP, status, fresh, week, plansDone, practiced };
})(window.SPT);
