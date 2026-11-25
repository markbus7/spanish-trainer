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
  const hrs = m => { if (m < 60) return 'nog ' + Math.ceil(m) + ' min'; const u = Math.ceil(m / 60); return 'nog ' + u + ' uur'; };
  const SKILLS = { vocab: 'woordenschat', grammar: 'grammatica', listen: 'luisteren', speak: 'spreken', read: 'lezen', write: 'schrijven' };
  const SKILL_GOAL = 25;
  const TIER = ['brons', 'zilver', 'goud', 'platina', 'diamant', 'diamant'];

  /* Eén reeks: tiers = [id, doel]. tname(doel) = korte naam van een trap, how(doel, m) = precies wat je moet doen.
     metric(m) = hoeveel je nu hebt. Mark wil bij elke badge concreet zien wat hij moet doen, niets vaags. */
  const one = (g, a, b) => g === 1 ? a : b;
  const hrsTxt = g => g < 60 ? g + ' minuten' : g / 60 + ' uur';
  const SERIES = [
    { id: 'lessons', group: 'leren', icon: '📘', name: 'Lessen', metric: m => m.steps, left: left('les', 'lessen'),
      tip: 'Een les is één stap van een unit in Ruta. Elke unit heeft 7 stappen: Woorden 1, Woorden 2, Grammatica, Dialoog, Lezen, Toepassen en de unittoets.',
      tiers: [['first', 1], ['les10', 10], ['les50', 50], ['les100', 100], ['les250', 250]],
      tname: g => one(g, 'Eerste les', g + ' lessen'),
      how: g => one(g, 'Rond één les af: één stap van een unit in Ruta (bijvoorbeeld Woorden 1).', 'Rond in totaal ' + g + ' lessen af in Ruta. Elke afgeronde stap van een unit telt als één les.') },
    { id: 'units', group: 'leren', icon: '🏅', name: 'Units', metric: m => m.units, left: left('unit', 'units'), cap: 'units',
      tip: 'Een unit is klaar als je de unittoets (de laatste stap) haalt met 80% of meer.',
      tiers: [['unit1', 1], ['unit5', 5], ['unit10', 10], ['unit25', 25], ['unit50', 50]],
      tname: g => one(g, 'Eerste unit', g + ' units'),
      how: g => one(g, 'Haal de unittoets van één unit met 80% of meer.', 'Haal de unittoets van ' + g + ' verschillende units met 80% of meer.') },
    { id: 'levels', group: 'leren', icon: '🎓', name: 'Niveaus', levels: true,
      tip: 'Per niveau (A1, A2 …): rond alle units af en haal daarna het niveau-examen met 80% of meer. Het examen staat onderaan het niveau in Ruta.' },
    { id: 'perfect', group: 'leren', icon: '💯', name: 'Foutloos', metric: m => m.perfect, left: left('foutloze unittoets', 'foutloze unittoetsen'), cap: 'units',
      tip: 'Telt per unit: haal je de toets van dezelfde unit twee keer 100%, dan telt dat één keer. Een oude unittoets overdoen mag.',
      tiers: [['perfect', 1], ['perfect5', 5], ['perfect10', 10]],
      tname: g => one(g, 'Eerste foutloze toets', g + ' foutloze toetsen'),
      how: g => one(g, 'Haal een unittoets met 100%: geen enkele fout.', 'Haal de unittoets van ' + g + ' verschillende units met 100%: geen enkele fout.') },
    { id: 'tests', group: 'leren', icon: '🧭', name: 'Niveautests', metric: m => m.tests, left: left('niveautest', 'niveautests'),
      tip: 'De niveautest staat in Perfil › Mijn niveau. Elke test telt, ook op dezelfde dag; om je groei te zien is één keer per maand handig.',
      tiers: [['placement', 1], ['tests5', 5], ['tests10', 10]],
      tname: g => one(g, 'Eerste niveautest', g + ' niveautests'),
      how: g => one(g, 'Doe één keer de niveautest (Perfil › Mijn niveau).', 'Doe in totaal ' + g + ' keer de niveautest (Perfil › Mijn niveau).') },

    { id: 'words', group: 'woorden', icon: '📚', name: 'Woordenschat', metric: m => m.words, left: left('woord', 'woorden'),
      tip: 'Een woord telt zodra het in je herhaling staat. Dat gebeurt als je het leert in de woordstappen van een les of in de woordensprint.',
      tiers: [['words50', 50], ['words100', 100], ['words250', 250], ['words500', 500], ['words1000', 1000], ['words2000', 2000]],
      tname: g => g + ' woorden',
      how: g => 'Leer ' + g + ' verschillende woorden, zodat ze in je herhaling staan.' },
    { id: 'mastered', group: 'woorden', icon: '⭐', name: 'Beheerst', metric: m => m.mastered, left: left('woord', 'woorden', ' tot ⭐'),
      tip: 'Een woord wordt ⭐ beheerst als je het in de herhaling steeds goed hebt, tot er 3 weken tussen twee herhalingen zit. Dat kost dus minstens een paar weken.',
      tiers: [['master25', 25], ['master100', 100], ['master250', 250], ['master500', 500]],
      tname: g => g + ' woorden ⭐',
      how: g => 'Krijg ' + g + ' woorden op ⭐ beheerst door ze in de herhaling steeds goed te hebben.' },

    { id: 'streak', group: 'volhouden', icon: '🔥', name: 'Reeks', metric: m => m.streak, have: m => m.bestStreak, left: left('dag', 'dagen', ' op rij'), now: n => 'nu ' + pl(n, 'dag', 'dagen') + ' op rij',
      tip: 'Je reeks telt de dagen achter elkaar waarop je iets hebt geoefend (een les, herhaling, spel of gesprek). Sla je een dag over, dan begint hij opnieuw bij 0. Je record telt ook: heb je ooit 7 dagen gehaald, dan houd je die badge.',
      tiers: [['streak3', 3], ['streak7', 7], ['streak14', 14], ['streak30', 30], ['streak100', 100], ['streak365', 365]],
      tname: g => g + ' dagen op rij',
      how: g => 'Oefen ' + g + ' dagen achter elkaar, zonder een dag over te slaan. Eén oefening per dag is genoeg.' },
    { id: 'goal', group: 'volhouden', icon: '🎯', name: 'Dagdoel', metric: m => m.goalDays, left: n => 'nog ' + pl(n, 'dag', 'dagen') + ' je dagdoel halen',
      tip: 'Je dagdoel is een aantal minuten oefenen per dag (aan te passen in Instellingen). De ring rechtsboven op Hoy laat zien hoever je vandaag bent.',
      tiers: [['goal', 1], ['goal10', 10], ['goal50', 50], ['goal100', 100]],
      tname: g => one(g, 'Eerste dagdoel', g + '× dagdoel'),
      how: (g, m) => one(g, 'Oefen op één dag minstens ' + m.goal + ' minuten (je dagdoel).', 'Oefen op ' + g + ' verschillende dagen minstens ' + m.goal + ' minuten (je dagdoel). De dagen hoeven niet achter elkaar.') },
    { id: 'plans', group: 'volhouden', icon: '🎁', name: 'Dagplannen', metric: m => m.plans, left: left('dagplan', 'dagplannen'),
      tip: 'Het dagplan staat op Hoy: een paar taken voor vandaag (herhaling, een les, spreken). Heb je alles afgevinkt, dan open je de kist. Dat is één afgerond dagplan.',
      tiers: [['plan', 1], ['plan7', 7], ['plan30', 30], ['plan100', 100]],
      tname: g => one(g, 'Eerste dagplan', g + ' dagplannen'),
      how: g => one(g, 'Rond één keer je hele dagplan op Hoy af: alle taken afvinken en de kist openen.', 'Rond ' + g + ' keer je hele dagplan op Hoy af: alle taken afvinken en de kist openen. De dagen hoeven niet achter elkaar.') },
    { id: 'time', group: 'volhouden', icon: '⏱️', name: 'Oefentijd', metric: m => m.minutes, left: hrs,
      tip: 'Alle minuten tellen bij elkaar op: lessen, herhaling, spellen en gesprekken met Lupe, verspreid over zoveel dagen als je wilt.',
      tiers: [['time60', 60], ['time300', 300], ['time600', 600], ['time1500', 1500], ['time3000', 3000], ['time6000', 6000]],
      tname: g => hrsTxt(g) + ' geoefend',
      how: g => 'Oefen in totaal ' + hrsTxt(g) + '. Alle oefentijd telt, ook verspreid over veel dagen.' },
    { id: 'xp', group: 'volhouden', icon: '✨', name: 'XP', metric: m => m.xp, left: n => 'nog ' + n + ' XP',
      tip: 'XP zijn punten. Je krijgt ze voor elk goed antwoord, en extra voor een gehaalde unittoets of niveau-examen, woordspellen en de kist van je dagplan. Je totaal staat rechtsboven bij de ⭐.',
      tiers: [['xp1000', 1000], ['xp5000', 5000], ['xp10000', 10000], ['xp25000', 25000], ['xp50000', 50000]],
      tname: g => g + ' XP',
      how: g => 'Verdien in totaal ' + g + ' XP (de ⭐-teller rechtsboven).' },

    { id: 'games', group: 'spelen', icon: '🎲', name: 'Woordspellen', metric: m => m.games, left: left('spel', 'spellen'),
      tip: 'De woordspellen staan in Práctica › Woordspellen (woordzoeker, kruiswoord, memory …). Een spel telt als je het tot het eind speelt.',
      tiers: [['game', 1], ['games10', 10], ['games50', 50], ['games100', 100]],
      tname: g => one(g, 'Eerste woordspel', g + ' woordspellen'),
      how: g => one(g, 'Speel één woordspel helemaal uit.', 'Speel ' + g + ' woordspellen helemaal uit (welk spel maakt niet uit).') },
    { id: 'ai', group: 'spelen', icon: '🤖', name: 'Praten met Lupe', metric: m => m.ai, left: left('bericht', 'berichten', ' aan Lupe'),
      tip: 'Elk bericht dat je in Docente aan Lupe stuurt telt: in een rollenspel, bij schrijven of als je haar iets vraagt. Hiervoor heb je een AI-sleutel nodig (Instellingen).',
      tiers: [['ai', 1], ['ai25', 25], ['ai100', 100], ['ai500', 500]],
      tname: g => one(g, 'Eerste bericht aan Lupe', g + ' berichten aan Lupe'),
      how: g => one(g, 'Stuur Lupe één bericht in Docente.', 'Stuur Lupe in totaal ' + g + ' berichten in Docente.') },
    { id: 'travel', group: 'spelen', icon: '🛂', name: 'Op reis', metric: m => m.stamps, left: left('stempel', 'stempels'), cap: 'places',
      tip: 'In Op reis (Práctica) heeft elk land een korte toets. Haal je die met 80% of meer, dan krijg je een stempel in je paspoort.',
      tiers: [['stamp1', 1], ['stamp3', 3], ['stamp5', 5], ['stamp10', 10], ['stampAll', Infinity]],
      tname: (g, all) => all ? 'Alle ' + g + ' landen' : one(g, 'Eerste stempel', g + ' stempels'),
      how: (g, m, all) => all ? 'Haal in Op reis de toets van alle ' + g + ' landen met 80% of meer.' : one(g, 'Haal in Op reis de toets van één land met 80% of meer.', 'Haal in Op reis de toets van ' + g + ' verschillende landen met 80% of meer.') },
    { id: 'skills', group: 'spelen', icon: '🧩', name: 'Allrounder', metric: m => m.skillsOk, cap: 'skills',
      left: (n, m) => 'nog ' + m.skillsTodo.join(', '),
      tip: 'Elke oefenvraag hoort bij een vaardigheid. Je stand per vaardigheid staat in Perfil › Vaardigheden.',
      tiers: [['allround', 6]],
      tname: () => 'Allrounder',
      how: () => 'Geef in elk van de 6 vaardigheden ' + SKILL_GOAL + ' goede antwoorden: woordenschat, grammatica, luisteren, spreken, lezen en schrijven.' }
  ];
  /* Losse badges zonder teller: je haalt ze door iets een keer te doen. [id, icoon, naam, wat je moet doen] */
  const SPECIAL = [
    ['early', '🌅', 'Vroege vogel', 'Rond een oefening af tussen 4:00 en 8:00 \'s ochtends.'],
    ['night', '🦉', 'Nachtuil', 'Rond een oefening af tussen 23:00 en 3:00 \'s nachts.'],
    ['weekend', '🏖️', 'Weekendkrijger', 'Oefen in hetzelfde weekend op zaterdag én op zondag.']
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
    m.goal = goal;
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
    if (se.levels) return (env.levels || []).map(L => [L.id, L.total, L.id + ' gehaald', 'Rond alle ' + L.total + ' units van ' + L.id + ' af en haal daarna het niveau-examen ' + L.id + ' met 80% of meer.', L]);
    let t = se.tiers.map(([id, g]) => [id, g]);
    if (se.cap === 'units' && env.units) t = t.filter(x => x[1] <= env.units);
    if (se.cap === 'places') {
      const n = (env.places && env.places.total) || 0;
      t = n ? t.filter(x => x[1] < n).concat([['stampAll', n, true]]) : [];
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
      const tiers = list.map(([id, goal, a, b, L], i) => {
        const name = se.levels ? a : se.tname(goal, a === true), desc = se.levels ? b : se.how(goal, m, a === true);
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
    const special = SPECIAL.map(([id, icon, name, desc]) => ({ id, icon, name, desc, tip: desc, earned: owned.has(id) || (id === 'weekend' && m.weekend), at: at[id] || null }));
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
    for (const se of SERIES) for (const t of se.tiers || []) if (t[0] === id) return { icon: se.icon, name: id === 'stampAll' ? 'Alle landen' : se.tname(t[1]), desc: '' };
    if (LV_ICON[id]) return { icon: LV_ICON[id], name: id + ' gehaald', desc: '' };
    const x = SPECIAL.find(z => z[0] === id); return x ? { icon: x[1], name: x[2], desc: x[3] } : null;
  }
  const TIER_NAME = i => TIER[Math.min(i, TIER.length - 1)];

  S.Badges = { SERIES, SPECIAL, GROUPS, SKILL_GOAL, metrics, view, earnable, info, tierName: TIER_NAME };
})(window.SPT);
