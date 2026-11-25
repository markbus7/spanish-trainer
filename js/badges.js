/* Badges: reeksen met trappen (brons → zilver → goud → platina → diamant) en per badge de voortgang.
   Alles wordt uit de opgeslagen voortgang berekend (Store.state), dus ook badges die er later bij kwamen
   tellen je eerdere werk mee. Taalonafhankelijk: niveaus en landen komen uit de actieve cursus (env).
   Gebruik: S.Badges.view(state, env) → reeksen met per trap { id, goal, name, desc, earned, frac, left }.
   env = { streak: huidige reeks, levels: [{ id, total, done, passed }], places: { total, stamps }, units: aantal units }. */
(function (S) {
  'use strict';
  const U = S.U;
  const pl = (n, one, many) => U.plural(n, one, many);
  const left = (one, many, suf) => n => 'nog ' + pl(n, one, many) + (suf || '');
  const hrs = m => { if (m < 60) return 'nog ' + Math.ceil(m) + ' min'; const u = Math.ceil(m / 60); return 'nog ' + pl(u, 'uur', 'uur'); };
  const SKILLS = { vocab: 'woordenschat', grammar: 'grammatica', listen: 'luisteren', speak: 'spreken', read: 'lezen', write: 'schrijven' };
  const SKILL_GOAL = 25;
  const TIER = ['brons', 'zilver', 'goud', 'platina', 'diamant', 'diamant'];

  /* Eén reeks: tiers = [id, doel, naam, uitleg]. metric(m) = hoeveel je nu hebt. */
  const SERIES = [
    { id: 'lessons', group: 'leren', icon: '📘', name: 'Lessen', metric: m => m.steps, left: left('les', 'lessen'),
      tip: 'Elke lesstap in een unit telt: woorden, grammatica, dialoog, lezen, toepassen en de unittoets.',
      tiers: [['first', 1, 'Eerste les', 'Je eerste les afgerond'], ['les10', 10, 'Tien lessen', '10 lessen afgerond'], ['les50', 50, 'Vijftig lessen', '50 lessen afgerond'],
        ['les100', 100, 'Honderd lessen', '100 lessen afgerond'], ['les250', 250, 'Lesmachine', '250 lessen afgerond']] },
    { id: 'units', group: 'leren', icon: '🏅', name: 'Units', metric: m => m.units, left: left('unit', 'units'), cap: 'units',
      tip: 'Een unit is klaar als je de unittoets haalt (80% of meer).',
      tiers: [['unit1', 1, 'Eerste unit', 'Je eerste unit gehaald'], ['unit5', 5, 'Vijf units', '5 units gehaald'], ['unit10', 10, 'Tien units', '10 units gehaald'],
        ['unit25', 25, 'Doorzetter', '25 units gehaald'], ['unit50', 50, 'Wereldreiziger', '50 units gehaald']] },
    { id: 'levels', group: 'leren', icon: '🎓', name: 'Niveaus', levels: true,
      tip: 'Haal alle units van een niveau en doe dan het niveau-examen (80% of meer).' },
    { id: 'perfect', group: 'leren', icon: '💯', name: 'Foutloos', metric: m => m.perfect, left: left('foutloze unittoets', 'foutloze unittoetsen'), cap: 'units',
      tip: 'Haal een unittoets zonder één fout. Een oude unittoets overdoen mag ook.',
      tiers: [['perfect', 1, 'Foutloos', 'Een unittoets 100% gehaald'], ['perfect5', 5, 'Scherpschutter', '5 unittoetsen 100% gehaald'], ['perfect10', 10, 'Perfectionist', '10 unittoetsen 100% gehaald']] },
    { id: 'tests', group: 'leren', icon: '🧭', name: 'Niveautests', metric: m => m.tests, left: left('niveautest', 'niveautests'),
      tip: 'Doe de niveautest in Perfil › Mijn niveau. Elke maand een keer laat zien hoe je groeit.',
      tiers: [['placement', 1, 'Niveautest', 'Niveautest gedaan'], ['tests5', 5, 'Meetlat', '5 niveautests gedaan'], ['tests10', 10, 'Groeicurve', '10 niveautests gedaan']] },

    { id: 'words', group: 'woorden', icon: '📚', name: 'Woordenschat', metric: m => m.words, left: left('woord', 'woorden'),
      tip: 'Woorden komen in je herhaling zodra je ze in een les of woordensprint leert.',
      tiers: [['words50', 50, '50 woorden', '50 woorden in je herhaling'], ['words100', 100, '100 woorden', '100 woorden in je herhaling'],
        ['words250', 250, '250 woorden', '250 woorden in je herhaling'], ['words500', 500, '500 woorden', '500 woorden in je herhaling'],
        ['words1000', 1000, '1000 woorden', '1000 woorden in je herhaling'], ['words2000', 2000, '2000 woorden', '2000 woorden in je herhaling']] },
    { id: 'mastered', group: 'woorden', icon: '⭐', name: 'Beheerst', metric: m => m.mastered, left: left('woord', 'woorden', ' tot ⭐'),
      tip: 'Een woord is ⭐ beheerst als je het in de herhaling steeds goed hebt (3 weken tussen herhalingen).',
      tiers: [['master25', 25, '25 beheerst', '25 woorden ⭐ beheerst'], ['master100', 100, '100 beheerst', '100 woorden ⭐ beheerst'],
        ['master250', 250, '250 beheerst', '250 woorden ⭐ beheerst'], ['master500', 500, '500 beheerst', '500 woorden ⭐ beheerst']] },

    { id: 'streak', group: 'volhouden', icon: '🔥', name: 'Reeks', metric: m => m.streak, have: m => m.bestStreak, left: left('dag', 'dagen', ' op rij'), now: n => 'nu ' + pl(n, 'dag', 'dagen') + ' op rij',
      tip: 'Oefen elke dag een beetje; je reeks breekt als je een dag overslaat.',
      tiers: [['streak3', 3, '3 dagen', '3 dagen op rij geoefend'], ['streak7', 7, 'Een week', '7 dagen op rij'], ['streak14', 14, 'Twee weken', '14 dagen op rij'],
        ['streak30', 30, 'Een maand', '30 dagen op rij'], ['streak100', 100, 'Honderd dagen', '100 dagen op rij'], ['streak365', 365, 'Een jaar', '365 dagen op rij']] },
    { id: 'goal', group: 'volhouden', icon: '🎯', name: 'Dagdoel', metric: m => m.goalDays, left: n => 'nog ' + pl(n, 'keer', 'keer') + ' je dagdoel',
      tip: 'Haal op een dag je dagdoel (minuten oefenen, in te stellen in Instellingen).',
      tiers: [['goal', 1, 'Dagdoel', 'Je dagdoel gehaald'], ['goal10', 10, 'Tien doelen', '10 dagen je dagdoel gehaald'], ['goal50', 50, 'Vijftig doelen', '50 dagen je dagdoel gehaald'],
        ['goal100', 100, 'Honderd doelen', '100 dagen je dagdoel gehaald']] },
    { id: 'plans', group: 'volhouden', icon: '🎁', name: 'Dagplannen', metric: m => m.plans, left: left('dagplan', 'dagplannen'),
      tip: 'Vink alle taken van het dagplan op Hoy af en open de kist.',
      tiers: [['plan', 1, 'Dagplan', 'Je eerste dagplan helemaal afgerond'], ['plan7', 7, 'Zeven plannen', '7 dagplannen afgerond'], ['plan30', 30, 'Dertig plannen', '30 dagplannen afgerond'],
        ['plan100', 100, 'Honderd plannen', '100 dagplannen afgerond']] },
    { id: 'time', group: 'volhouden', icon: '⏱️', name: 'Oefentijd', metric: m => m.minutes, left: hrs,
      tip: 'Alle minuten tellen: lessen, herhaling, spellen en gesprekken met Lupe.',
      tiers: [['time60', 60, 'Eerste uur', '1 uur geoefend'], ['time300', 300, 'Vijf uur', '5 uur geoefend'], ['time600', 600, 'Tien uur', '10 uur geoefend'],
        ['time1500', 1500, '25 uur', '25 uur geoefend'], ['time3000', 3000, '50 uur', '50 uur geoefend'], ['time6000', 6000, '100 uur', '100 uur geoefend']] },
    { id: 'xp', group: 'volhouden', icon: '✨', name: 'XP', metric: m => m.xp, left: n => 'nog ' + n + ' XP',
      tip: 'XP krijg je voor elk goed antwoord, lessen, toetsen, spellen en je dagkist.',
      tiers: [['xp1000', 1000, '1000 XP', '1000 XP verdiend'], ['xp5000', 5000, '5000 XP', '5000 XP verdiend'], ['xp10000', 10000, '10.000 XP', '10.000 XP verdiend'],
        ['xp25000', 25000, '25.000 XP', '25.000 XP verdiend'], ['xp50000', 50000, '50.000 XP', '50.000 XP verdiend']] },

    { id: 'games', group: 'spelen', icon: '🎲', name: 'Woordspellen', metric: m => m.games, left: left('spel', 'spellen'),
      tip: 'Speel een woordspel uit in Práctica › Woordspellen.',
      tiers: [['game', 1, 'Speler', 'Je eerste woordspel uitgespeeld'], ['games10', 10, 'Puzzelaar', '10 woordspellen uitgespeeld'], ['games50', 50, 'Spelmeester', '50 woordspellen uitgespeeld'],
        ['games100', 100, 'Kampioen', '100 woordspellen uitgespeeld']] },
    { id: 'ai', group: 'spelen', icon: '🤖', name: 'Praten met Lupe', metric: m => m.ai, left: left('bericht', 'berichten', ' aan Lupe'),
      tip: 'Elk bericht aan Lupe telt: rollenspel, schrijven en vragen stellen (in Docente).',
      tiers: [['ai', 1, 'Eerste gesprek', 'Een gesprek met de AI-docent gevoerd'], ['ai25', 25, 'Kletskous', '25 berichten aan Lupe'], ['ai100', 100, 'Prater', '100 berichten aan Lupe'],
        ['ai500', 500, 'Vloeiend', '500 berichten aan Lupe']] },
    { id: 'travel', group: 'spelen', icon: '🛂', name: 'Op reis', metric: m => m.stamps, left: left('stempel', 'stempels'), cap: 'places',
      tip: 'Haal een stempel in je paspoort met de toets van een land in Op reis.',
      tiers: [['stamp1', 1, 'Eerste stempel', 'Je eerste stempel in je paspoort'], ['stamp3', 3, 'Drie landen', '3 landen gestempeld'], ['stamp5', 5, 'Vijf landen', '5 landen gestempeld'],
        ['stamp10', 10, 'Tien landen', '10 landen gestempeld'], ['stampAll', Infinity, 'Alle landen', 'Elk land gestempeld']] },
    { id: 'skills', group: 'spelen', icon: '🧩', name: 'Allrounder', metric: m => m.skillsOk, cap: 'skills',
      left: (n, m) => 'nog ' + m.skillsTodo.join(', '),
      tip: 'Geef in elke vaardigheid ' + SKILL_GOAL + ' goede antwoorden: woordenschat, grammatica, luisteren, spreken, lezen en schrijven.',
      tiers: [['allround', 6, 'Allrounder', 'In alle 6 vaardigheden ' + SKILL_GOAL + ' goede antwoorden']] }
  ];
  /* Losse badges zonder teller: je haalt ze door iets een keer te doen. */
  const SPECIAL = [
    ['early', '🌅', 'Vroege vogel', 'Geoefend vóór 8:00', 'Oefen een keer \'s ochtends vóór 8 uur.'],
    ['night', '🦉', 'Nachtuil', 'Geoefend na 23:00', 'Oefen een keer \'s avonds na 23 uur.'],
    ['weekend', '🏖️', 'Weekendkrijger', 'Zaterdag én zondag geoefend', 'Oefen in één weekend op zaterdag en op zondag.']
  ];
  const GROUPS = [['leren', '📘', 'Leren'], ['woorden', '📚', 'Woorden'], ['volhouden', '🔥', 'Volhouden'], ['spelen', '🎲', 'Spelen en praten'], ['speciaal', '🌟', 'Speciaal']];
  const LV_ICON = { A1: '🥉', A2: '🥈', B1: '🥇', B2: '🏆', C1: '👑', C2: '💎' };

  /* Alle tellers uit de opgeslagen voortgang. */
  function metrics(s, env) {
    env = env || {};
    const m = { steps: 0, units: 0, perfect: 0 };
    for (const id in s.units || {}) {
      const u = s.units[id] || {};
      m.steps += Object.values(u.steps || {}).filter(Boolean).length;
      if (u.done || u.tested) m.units++;
      if (u.best === 1) m.perfect++;
    }
    m.words = 0; m.mastered = 0;
    for (const k in s.srs || {}) if (k.startsWith('w|')) { m.words++; if ((s.srs[k].i || 0) >= 21) m.mastered++; }
    m.streak = env.streak || 0;
    m.bestStreak = Math.max(m.streak, (s.streak && s.streak.best) || 0);
    const days = s.days || {}, goal = (s.settings && s.settings.goal) || 20;
    m.minutes = 0; m.goalDays = 0; m.plans = 0; m.weekend = false;
    for (const k in days) {
      const d = days[k] || {};
      m.minutes += d.min || 0;
      if ((d.min || 0) >= goal) m.goalDays++;
      if (d.done && d.done.chest) m.plans++;
      // zaterdag geoefend en de zondag erna ook
      if ((d.min || 0) > 0 || (d.items || 0) > 0) {
        const dt = new Date(k + 'T12:00:00');
        if (dt.getDay() === 6) {
          const n = new Date(dt.getTime() + 864e5), nk = n.getFullYear() + '-' + String(n.getMonth() + 1).padStart(2, '0') + '-' + String(n.getDate()).padStart(2, '0');
          const z = days[nk]; if (z && ((z.min || 0) > 0 || (z.items || 0) > 0)) m.weekend = true;
        }
      }
    }
    m.xp = s.xp || 0;
    const done = s.done || {}, has = id => (s.badges || []).includes(id);
    m.games = done.games || 0;
    m.ai = Math.max(done.ai || 0, has('ai') ? 1 : 0);
    m.tests = Math.max((s.tests || []).length, s.placement && s.placement.done ? 1 : 0);
    m.stamps = (env.places && env.places.stamps) || 0;
    const sk = s.skills || {};
    m.skillsTodo = Object.keys(SKILLS).filter(k => !sk[k] || (sk[k].ok || 0) < SKILL_GOAL).map(k => SKILLS[k]);
    m.skillsOk = 6 - m.skillsTodo.length;
    return m;
  }

  /* Welke trappen bestaan in deze cursus (geen «50 units» als de cursus er 40 heeft). */
  function tiersOf(se, env) {
    if (se.levels) return (env.levels || []).map(L => [L.id, L.total, L.id + ' behaald', 'Niveau-examen ' + L.id + ' gehaald', L]);
    let t = se.tiers;
    if (se.cap === 'units' && env.units) t = t.filter(x => x[1] <= env.units);
    if (se.cap === 'places') {
      const n = (env.places && env.places.total) || 0;
      t = n ? t.filter(x => x[1] < n).concat([t[t.length - 1].slice(0, 1).concat([n], t[t.length - 1].slice(2))]) : [];
    }
    return t;
  }

  function view(s, env) {
    env = env || {};
    const m = metrics(s, env), owned = new Set(s.badges || []), at = s.badgeAt || {};
    const series = [];
    for (const se of SERIES) {
      const list = tiersOf(se, env); if (!list.length) continue;
      const cur = se.levels ? 0 : se.metric(m), have = se.have ? se.have(m) : cur;
      const tiers = list.map(([id, goal, name, desc, L], i) => {
        const t = { id, goal, name, desc, tier: i, icon: se.levels ? LV_ICON[id] || '🎓' : se.icon };
        if (se.levels) {
          t.earned = owned.has(id) || !!L.passed;
          t.cur = L.done; t.frac = L.total ? L.done / L.total : 0;
          t.left = t.earned ? '' : L.done >= L.total ? 'doe het niveau-examen ' + id : 'nog ' + pl(L.total - L.done, 'unit', 'units') + ' in ' + id + ', dan het examen';
          if (!t.earned && L.done >= L.total) t.frac = 0.95;
        } else {
          t.earned = owned.has(id) || have >= goal;
          t.cur = Math.min(cur, goal); t.frac = Math.min(1, cur / goal);
          t.left = t.earned ? '' : se.left ? se.left(Math.max(1, Math.ceil(goal - cur)), m) : '';
        }
        if (t.earned) t.frac = 1;
        t.at = at[id] || null;
        return t;
      });
      const next = tiers.find(t => !t.earned) || null;
      const got = tiers.filter(t => t.earned).length;
      series.push({ id: se.id, group: se.group, icon: se.icon, name: se.name, tip: se.tip, tiers, next, got,
        cur, now: se.now && cur ? se.now(cur) : null, top: got ? tiers[got - 1] : null });
    }
    const special = SPECIAL.map(([id, icon, name, desc, tip]) => ({ id, icon, name, desc, tip, earned: owned.has(id) || (id === 'weekend' && m.weekend), at: at[id] || null }));
    const all = series.flatMap(x => x.tiers).concat(special);
    const earned = all.filter(t => t.earned).length;
    // bijna binnen: de volgende trap van elke reeks, dichtstbij eerst (lege tellers achteraan)
    const near = series.filter(x => x.next).map(x => Object.assign({ series: x }, x.next))
      .sort((a, b) => b.frac - a.frac || a.goal - b.goal);
    return { series, special, groups: GROUPS, total: all.length, earned, near, metrics: m };
  }

  /* Ids die je nu verdient maar nog niet hebt. */
  function earnable(s, env) {
    const v = view(s, env), own = new Set(s.badges || []);
    return v.series.flatMap(x => x.tiers).concat(v.special).filter(t => t.earned && !own.has(t.id)).map(t => t.id);
  }
  /* Naam en icoon van een id (voor meldingen). */
  function info(id) {
    for (const se of SERIES) for (const t of se.tiers || []) if (t[0] === id) return { icon: se.icon, name: t[2], desc: t[3] };
    if (LV_ICON[id]) return { icon: LV_ICON[id], name: id + ' behaald', desc: 'Niveau-examen ' + id + ' gehaald' };
    const x = SPECIAL.find(z => z[0] === id); return x ? { icon: x[1], name: x[2], desc: x[3] } : null;
  }
  const TIER_NAME = i => TIER[Math.min(i, TIER.length - 1)];

  S.Badges = { SERIES, SPECIAL, GROUPS, SKILL_GOAL, metrics, view, earnable, info, tierName: TIER_NAME };
})(window.SPT);
