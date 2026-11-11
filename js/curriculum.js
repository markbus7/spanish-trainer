/* Curriculumregister: niveaus, units en labels. Lesstof staat in /content. */
(function (S) {
  'use strict';

  const LEVELS = [
    { id: 'A1', name: 'Beginner', es: 'Principiante', color: '#1b998b',
      can: ['Jezelf voorstellen en eenvoudige vragen stellen', 'Over familie, eten, je dag en je stad praten', 'Bestellen, kopen en de weg vragen'] },
    { id: 'A2', name: 'Basisgebruiker', es: 'Elemental', color: '#2f80ed',
      can: ['Vertellen wat je gisteren en vroeger deed', 'Ervaringen, plannen en voorspellingen delen', 'Bij de dokter, op reis en in winkels je redden'] },
    { id: 'B1', name: 'Gevorderd', es: 'Intermedio', color: '#9b51e0',
      can: ['Meningen, wensen en twijfels uitdrukken (subjuntivo)', 'Een gesprek gaande houden over bekende onderwerpen', 'Nieuws en series in grote lijnen volgen'] },
    { id: 'B2', name: 'Hoger gevorderd', es: 'Intermedio alto', color: '#e2603a',
      can: ['Vlot en spontaan praten met moedertaalsprekers', 'Regionale varianten (voseo, Caribisch) verstaan', 'Argumenteren en debatteren'] },
    { id: 'C1', name: 'Vaardig', es: 'Avanzado', color: '#d4a017',
      can: ['Lange, complexe teksten begrijpen', 'Register bewust kiezen (formeel/informeel)', 'Presenteren en essays schrijven'] },
    { id: 'C2', name: 'Meesterschap', es: 'Maestría', color: '#c2185b',
      can: ['Nuance, ironie en humor begrijpen', 'Idiomen per land herkennen en gebruiken', 'Vrijwel alles moeiteloos begrijpen'] }
  ];

  const TAGS = {
    'ser': 'ser vervoegen', 'ser-estar': 'ser vs. estar', 'tu-usted': 'tú vs. usted', 'pronouns': 'persoonlijke voornaamwoorden',
    'gender': 'mannelijk/vrouwelijk', 'articles': 'lidwoorden', 'plural': 'meervoud', 'adj-agree': 'overeenkomst bijv. naamwoord',
    'possessive': 'bezittelijke voornaamwoorden', 'tener': 'tener', 'numbers': 'getallen', 'hay-estar': 'hay vs. estar',
    'prepositions': 'voorzetsels', 'contractions': 'al / del', 'pres-regular': 'presente regelmatig', 'time': 'klokkijken',
    'gustar': 'gustar e.d.', 'stem-change': 'stamwisselaars', 'reflexive': 'wederkerende werkwoorden', 'demonstratives': 'este/ese/aquel',
    'ir-a': 'ir a + infinitief', 'progressive': 'estar + gerundio', 'weather': 'het weer', 'questions': 'vraagwoorden',
    'pret-regular': 'indefinido regelmatig', 'pret-irregular': 'indefinido onregelmatig', 'imperfect': 'imperfecto',
    'pret-imp': 'indefinido vs. imperfecto', 'perfect': 'pretérito perfecto', 'doler': 'doler / gezondheid',
    'obligation': 'tener que / hay que / deber', 'object-pron': 'lijdend/meewerkend vnw.', 'comparatives': 'vergelijkingen',
    'future': 'futuro simple', 'por-para': 'por vs. para', 'imperative': 'imperativo', 'vocab': 'woordenschat', 'yo-irregular': 'onregelmatige yo-vorm',
    'frequency': 'frequentie', 'muy-mucho': 'muy vs. mucho', 'conj': 'vervoegen',
    'negation': 'ontkenning (nada, nadie, nunca)', 'prep-pron': 'para mí, conmigo', 'connectors': 'verbindingswoorden', 'relative': 'que / lo que / donde',
    'se-impersonal': 'se impersonal', 'periphrasis': 'acabar de, volver a, dejar de',
    'subj-wish': 'subjuntivo: wensen en verzoeken', 'subj-opinion': 'subjuntivo: mening en twijfel', 'subj-emotion': 'subjuntivo: gevoelens',
    'subj-time': 'cuando + subjuntivo', 'subj-purpose': 'para que / antes de que', 'conditional': 'condicional', 'pluperfect': 'pluscuamperfecto',
    'neg-imperative': 'ontkennende imperativo', 'reported': 'indirecte rede', 'si-clause': 'si-zinnen', 'become': 'worden (ponerse, volverse…)', 'argument': 'argumenteren',
    'impsubj': 'imperfecto de subjuntivo', 'si-irreal': 'si tuviera…, haría', 'subj-past': 'subjuntivo in het verleden', 'voseo': 'voseo (vos sos, vos tenés)', 'si-past': 'si hubiera…, habría'
  };

  const units = [];
  const byId = {};
  S.addUnit = function (u) {
    u.ex = u.ex || []; u.vocab = u.vocab || []; u.grammar = u.grammar || []; u.say = u.say || [];
    units.push(u); byId[u.id] = u;
  };
  /* Aanvulling op een bestaande unit. Woorden en oefeningen worden ALTIJD achteraan toegevoegd:
     de herhaling onthoudt ze op volgnummer (w|unit|i, x|unit|i), dus invoegen in het midden zou voortgang verschuiven. */
  S.extendUnit = function (id, add) {
    const u = byId[id]; if (!u) throw new Error('extendUnit: onbekende unit ' + id);
    ['vocab', 'ex', 'say', 'goals'].forEach(k => { if (add[k]) u[k] = (u[k] || []).concat(add[k]); });
    if (add.grammar) u.grammar = u.grammar.concat(add.grammar);
    if (add.verbs) u.verbs = [...new Set((u.verbs || []).concat(add.verbs))];
    if (add.reading) u.reading = add.reading;
  };
  S.placement = [];
  S.scenarios = [];
  S.regions = [];

  const C = {
    LEVELS, TAGS,
    all: () => units,
    get: id => byId[id],
    level: id => LEVELS.find(l => l.id === id),
    unitsOf: lvl => units.filter(u => u.level === lvl),
    available: lvl => units.some(u => u.level === lvl),
    index: id => units.findIndex(u => u.id === id),
    next(id) { const i = C.index(id); return i >= 0 ? units[i + 1] || null : null; },
    prev(id) { const i = C.index(id); return i > 0 ? units[i - 1] : null; },
    tag: t => TAGS[t] || t,
    /** Woord-object uit vocab-array: [es, nl, noot?] */
    word(u, i) { const w = u.vocab[i]; return w ? { es: w[0], nl: w[1], note: w[2] || '', id: 'w|' + u.id + '|' + i, unit: u.id } : null; },
    words(u) { return u.vocab.map((_, i) => C.word(u, i)); }
  };
  S.C = C;
})(window.SPT = window.SPT || {});
