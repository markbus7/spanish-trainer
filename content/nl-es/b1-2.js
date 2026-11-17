/* Neerlandés B1, unidades 6–10 (neerlandés de los Países Bajos, explicaciones en español latinoamericano). Mismo formato que a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('nl-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'nl-indirect': 'estilo indirecto (hij zei dat…)', 'nl-erprep': 'er + preposición (erover, ermee…)', 'nl-vzw': 'verbos con preposición (wachten op…)',
    'nl-te': 'te + infinitivo (proberen te, beginnen te…)', 'nl-modperf': 'modales en perfectum (heb moeten werken)', 'nl-formeel': 'carta formal y quejas'
  });

  /* ───────────────────────── B1 · 6 ───────────────────────── */
  U({
    id: 'nl-b1-06', level: 'B1', icon: '💬', title: 'Hij zei dat…', nl: 'Contar lo que dijo otra persona',
    goals: ['Usar el estilo indirecto con zeggen dat / vragen of', 'Cambiar pronombres y tiempos al contar', 'Contar pedidos (hij vroeg me om … te …)'],
    vocab: [
      ['zeggen → zei → gezegd', 'decir'], ['vertellen → vertelde', 'contar'], ['vragen → vroeg', 'preguntar / pedir'], ['antwoorden', 'responder'], ['uitleggen', 'explicar'],
      ['beloven → beloofde', 'prometer'], ['klagen', 'quejarse'], ['toegeven', 'admitir'], ['fluisteren', 'susurrar'], ['roddelen', 'chismear'], ['de roddel', 'el chisme'],
      ['het gerucht', 'el rumor'], ['het bericht', 'el mensaje'], ['de voicemail', 'el mensaje de voz'], ['blijkbaar', 'al parecer'], ['volgens', 'según'], ['het geheim', 'el secreto'],
      ['de promotie', 'el ascenso'], ['verloofd', 'comprometido (para casarse)'], ['zwanger', 'embarazada'], ['ontslag nemen', 'renunciar'], ['de dag ervoor', 'el día anterior'],
      ['de volgende dag', 'al día siguiente'], ['die dag', 'ese día']
    ],
    grammar: [
      { t: 'Zeggen dat / vertellen dat', es: 'Indirecte rede',
        html: `<p>Para contar lo que alguien dijo: <b>zeggen dat</b> / <b>vertellen dat</b> + bijzin (¡verbo al final!).</p>
<p><i>«Ik ben moe.»</i> → <i>Ze zegt <b>dat ze</b> moe <b>is</b>.</i> · <i>«Ik kom morgen.»</i> → <i>Hij zei <b>dat hij</b> de volgende dag <b>kwam</b>.</i></p>
<p>Cambian los pronombres (<i>ik → hij/zij</i>, <i>mijn → zijn/haar</i>) y, si el verbo principal está en pasado, normalmente también el tiempo (<i>is → was</i>).</p>`,
        table: [['palabras exactas', 'estilo indirecto'], ['«Ik woon in Delft.»', 'Ze zei dat ze in Delft woonde.'], ['«Ik heb het gezien.»', 'Hij zei dat hij het had gezien.'], ['«Ik zal bellen.»', 'Ze zei dat ze zou bellen.']],
        sum: 'Ze zegt dat ze moe is. Hij zei dat hij zou bellen.',
        ex: [['Mijn baas zei dat ik eerder naar huis mocht.', 'Mi jefe me dijo que me podía ir antes a casa.'], ['Ze vertelde dat ze nog nooit in Spanje was geweest.', 'Me contó que nunca había estado en España.']] },
      { t: 'Vragen of / vragen wat', es: 'Indirecte vragen',
        html: `<p>Preguntas de sí/no: <b>vragen of</b> + bijzin: <i>«Ben je ziek?» → Hij vroeg <b>of</b> ik ziek <b>was</b>.</i></p>
<p>Con palabra de pregunta: <i>«Waar woon je?» → Ze vroeg <b>waar</b> ik <b>woonde</b>.</i></p>`,
        table: [['directo', 'indirecto'], ['«Spreek je Engels?»', 'Ze vroeg of ik Engels sprak.'], ['«Hoe laat is het?»', 'Hij vroeg hoe laat het was.'], ['«Wanneer kom je?»', 'Ze vroeg wanneer ik kwam.']],
        ex: [['De agent vroeg of ik iets had gezien.', 'El policía preguntó si yo había visto algo.'], ['Ze vroegen me waar ik vandaan kwam.', 'Me preguntaron de dónde era.']] },
      { t: 'Pedidos: vragen om … te', es: 'Verzoeken doorgeven',
        html: `<p>Para contar un pedido o una orden: <b>vragen / zeggen</b> + persona + <b>om … te</b> + infinitivo, o con <b>dat … moet</b>:</p>
<p><i>«Bel me terug.»</i> → <i>Ze vroeg me <b>om</b> haar terug <b>te bellen</b>.</i> · <i>«Kom niet te laat.»</i> → <i>Hij zei <b>dat</b> ik niet te laat <b>moest komen</b>.</i></p>`,
        table: [['directo', 'indirecto'], ['«Doe de deur dicht.»', 'Ze vroeg me om de deur dicht te doen.'], ['«Rust een week.»', 'De dokter zei dat ik een week moest rusten.']],
        ex: [['De dokter zei dat ik een week moest rusten.', 'El médico me dijo que descansara una semana.'], ['Mijn moeder vroeg me om brood te kopen.', 'Mi mamá me pidió que comprara pan.']] }
    ],
    dialogue: {
      t: 'Roddels op kantoor', place: 'Ámsterdam 🇳🇱',
      lines: [
        ['Lisa', 'Je raadt nooit wat Kevin me vanochtend vertelde!', '¡Nunca vas a adivinar lo que me contó Kevin esta mañana!'],
        ['Andrea', 'Wat dan? Vertel!', '¿Qué? ¡Cuéntame!'],
        ['Lisa', 'Hij zei dat Linda ontslag ging nemen. Blijkbaar had ze een baan in Berlijn gevonden.', 'Dijo que Linda iba a renunciar. Al parecer había encontrado un trabajo en Berlín.'],
        ['Andrea', 'Echt? Maar gisteren zei ze nog dat ze het hier heel leuk vond!', '¿En serio? ¡Pero ayer mismo me dijo que le gustaba mucho estar aquí!'],
        ['Lisa', 'Ik weet het. En hij zei dat de baas hem had gevraagd om het geheim te houden.', 'Ya sé. Y dijo que el jefe le había pedido que lo mantuviera en secreto.'],
        ['Andrea', 'Waarom vertelde hij het jou dan?', '¿Y entonces por qué te lo contó?'],
        ['Lisa', 'Goeie vraag. O wacht… Linda appt me net. Ze vraagt of we samen willen lunchen.', 'Buena pregunta. Ay, espera… Linda me acaba de escribir. Pregunta si queremos almorzar juntas.'],
        ['Andrea', 'Perfect. Dan vragen we het haar zelf. En we zeggen niets tegen Kevin!', 'Perfecto. Entonces le preguntamos nosotras mismas. ¡Y no le decimos nada a Kevin!']
      ],
      q: [
        { t: 'mc', q: 'Wat zei Kevin over Linda?', o: ['Dat ze ontslag ging nemen', 'Dat ze ging trouwen', 'Dat ze ziek was'] },
        { t: 'mc', q: 'Wat had Linda gisteren tegen Andrea gezegd?', o: ['Dat ze het er heel leuk vond', 'Dat ze naar Berlijn ging', 'Niets'] },
        { t: 'mc', q: 'Wat vraagt Linda in haar bericht?', o: ['Of ze samen willen lunchen', 'Waar Kevin is', 'Of ze het nieuws al weten'] }
      ]
    },
    culture: { t: 'La «koffieautomaat»', html: `<p>En las oficinas neerlandesas los chismes se cuentan junto a la máquina de café: se le dice <b>koffieautomaatgesprek</b>. Pero ojo: los neerlandeses valoran la honestidad, así que es mejor preguntar directamente a la persona.</p>
<p>🗨️ Para contar algo que oíste: <i>Ik heb gehoord dat…</i>, <i>Blijkbaar…</i>, <i>Volgens Kevin…</i></p>` },
    ex: [
      { t: 'cloze', s: '«Ik ben moe.» → Ze zegt dat ze moe ___.', a: ['is'], o: ['is', 'ben', 'zijn'], nl: 'Dice que está cansada.', tag: 'nl-indirect' },
      { t: 'cloze', s: 'Hij zei ___ hij zou bellen.', a: ['dat'], o: ['dat', 'of', 'om'], nl: 'Dijo que llamaría.', tag: 'nl-indirect' },
      { t: 'cloze', s: 'Ze vroeg ___ ik Engels sprak.', a: ['of'], o: ['of', 'dat', 'als'], nl: 'Preguntó si yo hablaba inglés.', tag: 'nl-indirect' },
      { t: 'cloze', s: 'Ze vroegen waar ik vandaan ___.', a: ['kwam'], o: ['kwam', 'kom', 'komen'], nl: 'Me preguntaron de dónde era.', tag: 'nl-indirect' },
      { t: 'cloze', s: 'Ze vroeg me ___ haar terug te bellen.', a: ['om'], o: ['om', 'dat', 'voor'], nl: 'Me pidió que le devolviera la llamada.', tag: 'nl-indirect' },
      { t: 'cloze', s: 'De dokter zei dat ik een week ___ rusten.', a: ['moest'], o: ['moest', 'moet te', 'moesten'], nl: 'El médico me dijo que descansara una semana.', tag: 'nl-indirect' },
      { t: 'cloze', s: 'Hij zei dat hij het al ___ gezien.', a: ['had'], o: ['had', 'was', 'heeft'], nl: 'Dijo que ya lo había visto.', tag: 'nl-indirect' },
      { t: 'mc', q: '«Waar woon je?» → Ze vroeg…', o: ['waar ik woonde.', 'waar woonde ik.', 'waar woon je.'], tag: 'nl-indirect' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Hij vertelde dat hij verloofd was.', 'Hij vertelde dat hij was verloofd is.', 'Hij vertelde dat was hij verloofd.'], tag: 'nl-indirect' },
      { t: 'mc', q: '«al parecer» es…', o: ['blijkbaar', 'volgens', 'eigenlijk'], tag: 'nl-indirect' },
      { t: 'tr', nl: 'Me dijo que estaba cansada.', a: ['Ze zei dat ze moe was.', 'Zij zei dat ze moe was.', 'Ze vertelde dat ze moe was.'], tag: 'nl-indirect' },
      { t: 'tr', nl: 'Me preguntó si estaba bien.', a: ['Hij vroeg of ik in orde was.', 'Ze vroeg of ik in orde was.', 'Hij vroeg of het goed ging.', 'Ze vroeg of het goed ging.', 'Hij vroeg of alles goed was.', 'Ze vroeg of alles goed was.'], tag: 'nl-indirect' },
      { t: 'tr', nl: 'Mi mamá me pidió que comprara pan.', a: ['Mijn moeder vroeg me om brood te kopen.', 'Mijn moeder vroeg of ik brood wilde kopen.'], tag: 'nl-indirect' },
      { t: 'order', s: 'Mijn baas zei dat ik eerder naar huis mocht.', nl: 'Mi jefe me dijo que me podía ir antes a casa.', tag: 'nl-indirect' },
      { t: 'match', p: [['beloven', 'prometer'], ['klagen', 'quejarse'], ['het gerucht', 'el rumor'], ['zwanger', 'embarazada'], ['ontslag nemen', 'renunciar']], tag: 'nl-indirect' }
    ],
    reading: {
      t: 'De voicemail', type: 'Una historia corta',
      p: [
        ['Toen Marcos thuiskwam, had hij een voicemail van zijn verhuurder. Ze zei dat ze hem al drie keer had gebeld.', 'Cuando Marcos llegó a casa, tenía un mensaje de voz de su casera. Decía que ya lo había llamado tres veces.'],
        ['Ze legde uit dat er een leiding in het appartement boven was gesprongen en dat er water in zijn keuken liep. Ze vroeg hem om zo snel mogelijk terug te bellen.', 'Explicaba que se había roto una tubería en el apartamento de arriba y que estaba entrando agua a su cocina. Le pidió que la llamara lo antes posible.'],
        ['Marcos rende naar de keuken. Alles was droog. Toen luisterde hij nog een keer: het bericht was voor de man die er vóór hem had gewoond! Hij belde haar en zei dat ze het verkeerde nummer had.', 'Marcos corrió a la cocina. Todo estaba seco. Entonces volvió a escuchar: ¡el mensaje era para el hombre que había vivido allí antes que él! La llamó y le dijo que tenía el número equivocado.']
      ],
      gl: [['de leiding', 'la tubería'], ['gesprongen', 'reventado / roto'], ['droog', 'seco'], ['het verkeerde nummer', 'el número equivocado']],
      q: [
        { t: 'mc', q: 'Hoe vaak had de verhuurder gebeld?', o: ['Drie keer', 'Eén keer', 'Tien keer'] },
        { t: 'mc', q: 'Wat vroeg ze aan Marcos?', o: ['Om terug te bellen', 'Om de leiding te repareren', 'Om te verhuizen'] },
        { t: 'mc', q: 'Voor wie was het bericht eigenlijk?', o: ['Voor de vorige bewoner', 'Voor de buurman', 'Voor de loodgieter'] }
      ]
    },
    say: [['Ze zei dat ze moe was.', 'Dijo que estaba cansada.'], ['Hij vroeg of ik tijd had.', 'Me preguntó si tenía tiempo.'], ['De dokter zei dat ik moest rusten.', 'El médico me dijo que descansara.']],
    task: { nl: 'Piensa en una conversación de esta semana. Cuenta en 5 frases qué te dijeron, qué te preguntaron y qué te pidieron. Usa zei dat, vroeg of y vroeg me om … te.', model: 'Gisteren belde mijn zus. Ze zei dat ze volgende maand op bezoek kwam. Ze vroeg of ze bij mij kon logeren. Ze vertelde dat ze goedkope tickets had gevonden. Ze vroeg me om het niet aan mama te vertellen, want het is een verrassing.' },
    scenario: { nl: 'Una compañera de trabajo te cuenta un chisme y te pregunta qué te dijeron a ti.', role: 'Je bent Lisa, een kletsgrage collega in Amsterdam. Vertel de leerling kantoornieuws in de indirecte rede (Hij zei dat…, Ze vroeg of…). Vraag daarna wat anderen deze week tegen de leerling hebben gezegd. Spreek Nederlands op B1-niveau.', goal: 'Cuéntale lo que te dijeron otras personas usando el estilo indirecto.' }
  });

  /* ───────────────────────── B1 · 7 ───────────────────────── */
  U({
    id: 'nl-b1-07', level: 'B1', icon: '🧩', title: 'Waar denk je aan?', nl: 'Verbos con preposición y er',
    goals: ['Aprender verbos con preposición fija (wachten op, denken aan…)', 'Usar er + preposición (erop, eraan, ermee…)', 'Preguntar con waar + preposición (waarop, waaraan…)'],
    vocab: [
      ['wachten op', 'esperar a'], ['denken aan', 'pensar en'], ['praten over', 'hablar de'], ['zorgen voor', 'cuidar de'], ['luisteren naar', 'escuchar'], ['kijken naar', 'mirar'],
      ['houden van', 'amar / gustar mucho'], ['geloven in', 'creer en'], ['beginnen met', 'empezar con'], ['stoppen met', 'dejar de'], ['helpen met', 'ayudar con'], ['zoeken naar', 'buscar'],
      ['dromen van', 'soñar con'], ['bang zijn voor', 'tener miedo de'], ['trots zijn op', 'estar orgulloso de'], ['boos zijn op', 'estar enojado con'], ['tevreden zijn met', 'estar satisfecho con'],
      ['zich ergeren aan', 'irritarse por'], ['zin hebben in', 'tener ganas de'], ['het gesprek', 'la conversación'], ['de toekomst', 'el futuro'], ['het verleden', 'el pasado'],
      ['de gewoonte', 'la costumbre'], ['eraan', 'en eso']
    ],
    grammar: [
      { t: 'Verbos con preposición fija', es: 'Werkwoorden met een vast voorzetsel',
        html: `<p>Muchos verbos van con una <b>preposición fija</b>, que a veces no es la misma que en español. ¡Apréndelos juntos!</p>
<p><i>Ik wacht <b>op</b> de bus.</i> (espero el bus) · <i>Ik denk <b>aan</b> jou.</i> (pienso en ti) · <i>Ik hou <b>van</b> salsa.</i> · <i>Ik kijk <b>naar</b> de film.</i></p>`,
        table: [['neerlandés', 'español'], ['wachten op', 'esperar a/por'], ['denken aan', 'pensar en'], ['praten over', 'hablar de'], ['zorgen voor', 'cuidar a'], ['houden van', 'amar']],
        sum: 'Ik wacht op de bus. Ik denk aan jou.',
        ex: [['We praten vaak over het verleden.', 'Hablamos a menudo del pasado.'], ['Zij zorgt voor haar oma.', 'Ella cuida a su abuela.']] },
      { t: 'Er + preposición', es: 'Er + voorzetsel',
        html: `<p>Cuando la preposición se refiere a una <b>cosa</b> (no a una persona), en lugar de <s>op het</s> o <s>aan dat</s> se dice <b>er + preposición</b>: <b>erop, eraan, erover, ermee, ervan, ernaar</b>.</p>
<p><i>Wacht je op de bus? — Ja, ik wacht <b>erop</b>.</i> · <i>Denk je aan je afspraak? — Ja, ik denk <b>eraan</b>.</i> Ojo: <i>met → ermee</i>, <i>naar → ernaar</i>, <i>tot → ertoe</i>.</p>
<p>A menudo <b>er</b> y la preposición se separan: <i>Ik heb <b>er</b> geen zin <b>in</b>.</i> (No tengo ganas de eso.)</p>`,
        table: [['con cosa', 'con persona'], ['Ik wacht erop.', 'Ik wacht op hem.'], ['Ik denk eraan.', 'Ik denk aan haar.'], ['Ik ben er blij mee.', 'Ik ben blij met hen.']],
        ex: [['Ik ben er heel trots op.', 'Estoy muy orgullosa de eso.'], ['Daar heb ik geen zin in.', 'No tengo ganas de eso.']] },
      { t: 'Waar + preposición: preguntas', es: 'Waar + voorzetsel',
        html: `<p>Para preguntar sobre una cosa: <b>waar + preposición</b>: <i><b>Waarop</b> wacht je?</i> (¿Qué esperas?) · <i><b>Waar</b> denk je <b>aan</b>?</i> (¿En qué piensas?) · <i><b>Waarover</b> praten jullie?</i></p>
<p>Para personas: <b>preposición + wie</b>: <i><b>Op wie</b> wacht je?</i> (¿A quién esperas?)</p>`,
        table: [['cosa', 'persona'], ['Waar wacht je op?', 'Op wie wacht je?'], ['Waarover praten jullie?', 'Over wie praten jullie?'], ['Waarmee help je hem?', 'Met wie ga je?']],
        ex: [['Waar ben je bang voor?', '¿De qué tienes miedo?'], ['Met wie ga je naar het feest?', '¿Con quién vas a la fiesta?']] }
    ],
    dialogue: {
      t: 'Op het terras', place: 'Leiden 🇳🇱',
      lines: [
        ['Merel', 'Je kijkt zo serieus. Waar denk je aan?', 'Te ves tan seria. ¿En qué piensas?'],
        ['Paula', 'Aan mijn examen Nederlands volgende week. Ik ben er een beetje bang voor.', 'En mi examen de neerlandés de la próxima semana. Le tengo un poco de miedo.'],
        ['Merel', 'Waarom? Je spreekt het toch al heel goed!', '¿Por qué? ¡Si ya lo hablas muy bien!'],
        ['Paula', 'Dank je. Maar ik erger me aan mijn fouten met de en het. Ik denk er steeds aan.', 'Gracias. Pero me molestan mis errores con de y het. Pienso en eso todo el tiempo.'],
        ['Merel', 'Ach, daar maakt iedereen fouten mee. Zelfs Nederlanders!', '¡Bah! Todo el mundo se equivoca con eso. ¡Hasta los neerlandeses!'],
        ['Paula', 'Echt? Dat wist ik niet. Daar ben ik blij om.', '¿En serio? No lo sabía. Me alegra saberlo.'],
        ['Merel', 'Zullen we na je examen iets leuks doen? Waar heb je zin in?', '¿Hacemos algo divertido después de tu examen? ¿De qué tienes ganas?'],
        ['Paula', 'Ik droom al weken van pannenkoeken. Daar heb ik echt zin in!', 'Llevo semanas soñando con panqueques. ¡De eso sí que tengo ganas!']
      ],
      q: [
        { t: 'mc', q: 'Waar denkt Paula aan?', o: ['Aan haar examen Nederlands', 'Aan haar familie', 'Aan haar werk'] },
        { t: 'mc', q: 'Waar ergert Paula zich aan?', o: ['Aan haar fouten met de en het', 'Aan het weer', 'Aan haar docent'] },
        { t: 'mc', q: 'Waar heeft Paula zin in?', o: ['In pannenkoeken', 'In een feest', 'In slapen'] }
      ]
    },
    culture: { t: 'El examen de integración', html: `<p>Quien quiere vivir de forma permanente en los Países Bajos normalmente tiene que hacer el <b>inburgeringsexamen</b> (examen de integración): leer, escuchar, escribir, hablar y conocimiento de la sociedad neerlandesa. Hoy se pide nivel <b>B1</b>.</p>
<p>📚 ¡Con este curso vas por buen camino!</p>` },
    ex: [
      { t: 'cloze', s: 'Ik wacht ___ de bus.', a: ['op'], o: ['op', 'naar', 'voor'], nl: 'Espero el bus.', tag: 'nl-vzw' },
      { t: 'cloze', s: 'Ik denk vaak ___ mijn familie.', a: ['aan'], o: ['aan', 'over', 'in'], nl: 'Pienso a menudo en mi familia.', tag: 'nl-vzw' },
      { t: 'cloze', s: 'Zij zorgt ___ haar oma.', a: ['voor'], o: ['voor', 'om', 'met'], nl: 'Ella cuida a su abuela.', tag: 'nl-vzw' },
      { t: 'cloze', s: 'Wacht je op de trein? Ja, ik wacht ___.', a: ['erop'], o: ['erop', 'op het', 'op hem'], nl: '¿Esperas el tren? Sí, lo espero.', tag: 'nl-erprep' },
      { t: 'cloze', s: 'Ik ben ___ heel trots op.', a: ['er'], o: ['er', 'het', 'dat het'], nl: 'Estoy muy orgulloso de eso.', tag: 'nl-erprep' },
      { t: 'cloze', s: 'Ben je blij met je nieuwe fiets? Ja, ik ben er blij ___.', a: ['mee'], o: ['mee', 'met', 'mede'], nl: '¿Estás contento con tu bici nueva? Sí, estoy contento con ella.', x: 'met → ermee.', tag: 'nl-erprep' },
      { t: 'cloze', s: '___ denk je aan?', a: ['Waar'], o: ['Waar', 'Wat', 'Wie'], nl: '¿En qué piensas?', tag: 'nl-erprep' },
      { t: 'mc', q: '«¿A quién esperas?» es…', o: ['Op wie wacht je?', 'Waarop wacht je?', 'Wie wacht je op?'], tag: 'nl-erprep' },
      { t: 'mc', q: '«No tengo ganas de eso» es…', o: ['Ik heb er geen zin in.', 'Ik heb geen zin in het.', 'Ik heb het geen zin.'], tag: 'nl-erprep' },
      { t: 'mc', q: '«estar orgulloso de» es…', o: ['trots zijn op', 'trots zijn van', 'trots zijn aan'], tag: 'nl-vzw' },
      { t: 'tr', nl: 'Pienso en ti.', a: ['Ik denk aan jou.', 'Ik denk aan je.'], tag: 'nl-vzw' },
      { t: 'tr', nl: '¿De qué tienes miedo?', a: ['Waar ben je bang voor?', 'Waarvoor ben je bang?'], tag: 'nl-erprep' },
      { t: 'tr', nl: 'Hablamos del futuro.', a: ['We praten over de toekomst.', 'Wij praten over de toekomst.'], tag: 'nl-vzw' },
      { t: 'tr', nl: 'Estoy muy orgullosa de eso.', a: ['Ik ben er heel trots op.', 'Ik ben er erg trots op.', 'Daar ben ik heel trots op.'], tag: 'nl-erprep' },
      { t: 'order', s: 'Ik droom al weken van pannenkoeken.', nl: 'Llevo semanas soñando con panqueques.', tag: 'nl-vzw' },
      { t: 'match', p: [['wachten op', 'esperar a'], ['denken aan', 'pensar en'], ['houden van', 'amar'], ['luisteren naar', 'escuchar'], ['zin hebben in', 'tener ganas de']], tag: 'nl-vzw' }
    ],
    reading: {
      t: 'Waar ergeren Nederlanders zich aan?', type: 'Una encuesta',
      p: [
        ['Uit een onderzoek blijkt dat Nederlanders zich het meest ergeren aan mensen die in de trein hard telefoneren. Bijna zeventig procent ergert zich eraan.', 'Según un estudio, lo que más irrita a los neerlandeses es la gente que habla fuerte por teléfono en el tren. Casi el setenta por ciento se irrita por eso.'],
        ['Op de tweede plaats staan fietsers die niet op het rode licht letten. "Ik word er gek van," zegt een automobilist uit Utrecht. Fietsers zelf denken daar natuurlijk anders over.', 'En segundo lugar están los ciclistas que no respetan el semáforo en rojo. «Me vuelven loco», dice un conductor de Utrecht. Los ciclistas, claro, piensan distinto.'],
        ['En waar zijn Nederlanders het meest tevreden mee? Met hun vrije tijd en hun huis. Over het weer klagen ze wel, maar daar kun je niets aan doen!', '¿Y con qué están más satisfechos los neerlandeses? Con su tiempo libre y su casa. Del clima sí se quejan, ¡pero eso no tiene remedio!']
      ],
      gl: [['het onderzoek', 'el estudio'], ['letten op', 'fijarse en / respetar'], ['gek worden van', 'volverse loco por'], ['er niets aan kunnen doen', 'no poder hacer nada']],
      q: [
        { t: 'mc', q: 'Waar ergeren de meeste Nederlanders zich aan?', o: ['Aan mensen die hard telefoneren in de trein', 'Aan het weer', 'Aan toeristen'] },
        { t: 'mc', q: 'Wat staat op de tweede plaats?', o: ['Fietsers die niet op het rode licht letten', 'Honden', 'Lawaai van buren'] },
        { t: 'mc', q: 'Waar zijn Nederlanders tevreden mee?', o: ['Met hun vrije tijd en hun huis', 'Met het weer', 'Met de trein'] }
      ]
    },
    say: [['Waar denk je aan?', '¿En qué piensas?'], ['Ik wacht erop.', 'Lo estoy esperando.'], ['Daar heb ik zin in!', '¡De eso tengo ganas!']],
    task: { nl: 'Escribe 6 frases sobre ti con verbos con preposición: en qué piensas mucho, de qué tienes miedo, de qué estás orgulloso, qué te irrita, de qué tienes ganas y con qué sueñas. Usa er + preposición al menos dos veces.', model: 'Ik denk vaak aan mijn familie in Panama. Ik ben bang voor spinnen. Ik ben trots op mijn Nederlands: ik leer het nu een jaar en ik ben er blij mee. Ik erger me aan de regen. Ik heb zin in de zomer en ik droom van een reis naar Japan.' },
    scenario: { nl: 'Una amiga neerlandesa te pregunta en qué piensas, qué te preocupa y qué te ilusiona.', role: 'Je bent Merel, een vriendin uit Leiden. Jullie zitten op een terras. Stel vragen met werkwoorden met een vast voorzetsel (Waar denk je aan? Waar ben je bang voor? Waar heb je zin in?) en reageer met er + voorzetsel. Spreek Nederlands op B1-niveau.', goal: 'Contesta sus preguntas usando verbos con preposición y er.' }
  });

  /* ───────────────────────── B1 · 8 ───────────────────────── */
  U({
    id: 'nl-b1-08', level: 'B1', icon: '🎯', title: 'Ik probeer te…', nl: 'Metas y hábitos: te + infinitivo',
    goals: ['Usar te + infinitivo después de proberen, beginnen, vergeten…', 'Usar zitten / staan / liggen te para acciones en progreso', 'Hablar de metas, propósitos y hábitos'],
    vocab: [
      ['proberen te', 'intentar'], ['beginnen te', 'empezar a'], ['vergeten te', 'olvidar'], ['besluiten te', 'decidir'], ['durven te', 'atreverse a'], ['weigeren te', 'negarse a'],
      ['beloven te', 'prometer'], ['hopen te', 'esperar (desear)'], ['van plan zijn te', 'tener planeado'], ['het voornemen', 'el propósito'], ['het doel', 'la meta'],
      ['de gewoonte', 'el hábito'], ['volhouden', 'aguantar / perseverar'], ['opgeven', 'rendirse / dejar'], ['uitstellen', 'postergar'], ['sporten', 'hacer deporte'], ['gezond', 'sano'],
      ['de sportschool', 'el gimnasio'], ['afvallen', 'bajar de peso'], ['stoppen met roken', 'dejar de fumar'], ['zitten te', 'estar (sentado) haciendo'], ['staan te', 'estar (de pie) haciendo'],
      ['liggen te', 'estar (acostado) haciendo'], ['Het lukt me.', 'Lo logro.']
    ],
    grammar: [
      { t: 'Te + infinitivo', es: 'Te + infinitief',
        html: `<p>Después de algunos verbos, el segundo verbo va con <b>te</b> + infinitivo al final: <b>proberen, beginnen, vergeten, besluiten, durven, weigeren, beloven, hopen, van plan zijn</b>.</p>
<p><i>Ik <b>probeer</b> elke dag Nederlands <b>te spreken</b>.</i> · <i>Het <b>begint te regenen</b>.</i> · <i>Ik ben <b>vergeten</b> brood <b>te kopen</b>.</i></p>
<p>Con los modales (kunnen, willen, moeten, mogen) <b>no</b> va te: <i>Ik wil Nederlands <b>spreken</b>.</i></p>`,
        table: [['verbo', 'ejemplo'], ['proberen', 'Ik probeer gezond te eten.'], ['beginnen', 'Hij begint te lachen.'], ['vergeten', 'Ze vergat te bellen.'], ['besluiten', 'We hebben besloten te verhuizen.']],
        sum: 'Ik probeer gezond te eten. Ik wil gezond eten.',
        ex: [['Ik durf niet in het Nederlands te bellen.', 'No me atrevo a llamar en neerlandés.'], ['Ik ben van plan om volgend jaar te verhuizen.', 'Tengo planeado mudarme el próximo año.']] },
      { t: 'Zitten, staan, liggen te', es: 'Zitten / staan / liggen te',
        html: `<p>Para decir lo que alguien <b>está haciendo</b> ahora, los neerlandeses usan mucho la posición del cuerpo + <b>te</b> + infinitivo:</p>
<p><i>Ik <b>zit te</b> werken.</i> (estoy trabajando, sentado) · <i>Hij <b>staat te</b> koken.</i> (está cocinando, de pie) · <i>De kat <b>ligt te</b> slapen.</i> (está durmiendo, acostado)</p>
<p>También: <b>aan het</b> + infinitivo: <i>Ik ben <b>aan het</b> werken.</i></p>`,
        table: [['posición', 'ejemplo', 'español'], ['zitten', 'Ze zit te lezen.', 'Está leyendo.'], ['staan', 'Hij staat te wachten.', 'Está esperando.'], ['liggen', 'De baby ligt te slapen.', 'El bebé está durmiendo.'], ['zijn aan het', 'We zijn aan het eten.', 'Estamos comiendo.']],
        ex: [['Ik zat net te eten toen je belde.', 'Justo estaba comiendo cuando llamaste.'], ['Hij staat al een uur op de bus te wachten.', 'Lleva una hora esperando el bus.']] },
      { t: 'Om … te y het lukt me', es: 'Om ... te / het lukt',
        html: `<p>Recuerda <b>om … te</b> para dar el objetivo: <i>Ik sport <b>om</b> fit <b>te blijven</b>.</i> Muchos verbos con te también aceptan om: <i>Ik heb besloten <b>om</b> te stoppen.</i></p>
<p><b>Het lukt me (niet)</b> = lo logro / no lo logro: <i>Het lukt me niet om vroeg op te staan.</i></p>`,
        table: [['neerlandés', 'español'], ['Het lukt me.', 'Lo logro.'], ['Het is me gelukt!', '¡Lo logré!'], ['Het lukt me niet om te stoppen.', 'No logro dejarlo.']],
        ex: [['Het is me gelukt om drie maanden niet te roken!', '¡Logré pasar tres meses sin fumar!'], ['Ik ga naar de sportschool om af te vallen.', 'Voy al gimnasio para bajar de peso.']] }
    ],
    dialogue: {
      t: 'Goede voornemens', place: 'Zwolle 🇳🇱',
      lines: [
        ['Sanne', 'En, heb je goede voornemens voor dit jaar?', 'Y bueno, ¿tienes buenos propósitos para este año?'],
        ['Felipe', 'Ja! Ik heb besloten om te leren schaatsen. Ik heb het nog nooit geprobeerd.', '¡Sí! He decidido aprender a patinar. Nunca lo he intentado.'],
        ['Sanne', 'Leuk! Ben je niet bang om te vallen?', '¡Qué bien! ¿No te da miedo caerte?'],
        ['Felipe', 'Een beetje. Maar ik heb geen zin meer om alleen te zitten kijken!', 'Un poco. ¡Pero ya no tengo ganas de quedarme solo mirando!'],
        ['Sanne', 'Haha. Mijn voornemen is om te stoppen met scrollen in bed. Ik lig elke avond tot één uur op mijn telefoon te kijken.', 'Jaja. Mi propósito es dejar de ver el celular en la cama. Cada noche me quedo hasta la una mirando el teléfono.'],
        ['Felipe', 'Dat is moeilijk. Heb je geprobeerd hem in de keuken te laten liggen?', 'Eso es difícil. ¿Has intentado dejarlo en la cocina?'],
        ['Sanne', 'Goed idee. En ik hoop weer te gaan hardlopen. Zullen we op zaterdag samen gaan?', 'Buena idea. Y espero volver a correr. ¿Vamos juntos los sábados?'],
        ['Felipe', 'Prima! Maar pas nadat ik heb leren schaatsen, hè?', '¡Perfecto! Pero después de que aprenda a patinar, ¿eh?']
      ],
      q: [
        { t: 'mc', q: 'Wat wil Felipe leren?', o: ['Schaatsen', 'Hardlopen', 'Koken'] },
        { t: 'mc', q: 'Wat doet Sanne elke avond?', o: ['Ze ligt tot één uur op haar telefoon te kijken', 'Ze gaat hardlopen', 'Ze leest een boek'] },
        { t: 'mc', q: 'Wat stelt Felipe voor?', o: ['De telefoon in de keuken laten liggen', 'Een nieuwe telefoon kopen', 'Eerder slapen'] }
      ]
    },
    culture: { t: 'La Elfstedentocht', html: `<p>Cuando el invierno es muy frío, los neerlandeses sueñan con la <b>Elfstedentocht</b>: una carrera de patinaje de 200 km sobre canales congelados que pasa por once ciudades de Frisia. La última fue en 1997, porque los inviernos ya casi nunca son tan fríos.</p>
<p>⛸️ Aun así, muchos neerlandeses aprenden a patinar de niños en pistas de hielo.</p>` },
    ex: [
      { t: 'cloze', s: 'Ik probeer gezond ___ eten.', a: ['te'], o: ['te', 'om', 'zu'], nl: 'Intento comer sano.', tag: 'nl-te' },
      { t: 'cloze', s: 'Ik wil gezond ___.', a: ['eten'], o: ['eten', 'te eten', 'om eten'], nl: 'Quiero comer sano.', x: 'Con modales (willen) no va te.', tag: 'nl-te' },
      { t: 'cloze', s: 'Het begint te ___.', a: ['regenen'], o: ['regenen', 'regent', 'geregend'], nl: 'Empieza a llover.', tag: 'nl-te' },
      { t: 'cloze', s: 'Ik ___ te werken. (sentada)', a: ['zit'], o: ['zit', 'sta', 'lig'], nl: 'Estoy trabajando.', tag: 'nl-te' },
      { t: 'cloze', s: 'De kat ligt te ___.', a: ['slapen'], o: ['slapen', 'slaapt', 'geslapen'], nl: 'El gato está durmiendo.', tag: 'nl-te' },
      { t: 'cloze', s: 'Ik sport ___ fit te blijven.', a: ['om'], o: ['om', 'voor', 'te'], nl: 'Hago deporte para mantenerme en forma.', tag: 'nl-te' },
      { t: 'cloze', s: 'Het is me ___! (lograr)', a: ['gelukt'], o: ['gelukt', 'gelukken', 'lukte'], nl: '¡Lo logré!', tag: 'nl-te' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ik ben vergeten brood te kopen.', 'Ik ben vergeten te brood kopen.', 'Ik ben vergeten brood kopen.'], tag: 'nl-te' },
      { t: 'mc', q: '«No me atrevo a llamar» es…', o: ['Ik durf niet te bellen.', 'Ik durf niet bellen te.', 'Ik niet durf te bellen.'], tag: 'nl-te' },
      { t: 'mc', q: '«el propósito» (de Año Nuevo) es…', o: ['het voornemen', 'het doel van jaar', 'de gewoonte'], tag: 'nl-te' },
      { t: 'tr', nl: 'Intento hablar neerlandés todos los días.', a: ['Ik probeer elke dag Nederlands te spreken.', 'Ik probeer iedere dag Nederlands te spreken.'], tag: 'nl-te' },
      { t: 'tr', nl: 'Está esperando el bus (de pie).', a: ['Hij staat op de bus te wachten.', 'Ze staat op de bus te wachten.', 'Zij staat op de bus te wachten.'], tag: 'nl-te' },
      { t: 'tr', nl: 'He decidido dejar de fumar.', a: ['Ik heb besloten om te stoppen met roken.', 'Ik heb besloten te stoppen met roken.'], tag: 'nl-te' },
      { t: 'tr', nl: 'No logro levantarme temprano.', a: ['Het lukt me niet om vroeg op te staan.', 'Het lukt me niet vroeg op te staan.'], tag: 'nl-te' },
      { t: 'order', s: 'Ik heb besloten om te leren schaatsen.', nl: 'He decidido aprender a patinar.', tag: 'nl-te' },
      { t: 'match', p: [['proberen', 'intentar'], ['durven', 'atreverse'], ['weigeren', 'negarse'], ['uitstellen', 'postergar'], ['volhouden', 'perseverar']], tag: 'nl-te' }
    ],
    reading: {
      t: 'Stoppen met uitstellen', type: 'Un artículo de consejos',
      p: [
        ['Stel je ook alles uit tot morgen? Je bent niet de enige. De meeste mensen proberen saaie taken te vermijden, ook als ze weten dat ze ze moeten doen.', '¿Tú también lo dejas todo para mañana? No eres el único. La mayoría de la gente intenta evitar las tareas aburridas, aunque sepa que tiene que hacerlas.'],
        ['Experts raden aan om met vijf minuten te beginnen. "Als je eenmaal zit te werken, lukt het meestal om door te gaan," zegt een psycholoog. Probeer ook je telefoon niet steeds te checken.', 'Los expertos recomiendan empezar con cinco minutos. «Una vez que estás sentado trabajando, normalmente logras seguir», dice un psicólogo. Intenta también no revisar el celular todo el tiempo.'],
        ['En vergeet niet om jezelf te belonen. Heb je een moeilijke taak afgemaakt? Doe dan iets leuks. Dat heb je verdiend!', 'Y no olvides darte un premio. ¿Terminaste una tarea difícil? Entonces haz algo divertido. ¡Te lo has ganado!']
      ],
      gl: [['saai', 'aburrido'], ['vermijden', 'evitar'], ['aanraden', 'recomendar'], ['belonen', 'premiar']],
      q: [
        { t: 'mc', q: 'Wat raden experts aan?', o: ['Met vijf minuten beginnen', 'De hele nacht doorwerken', 'Nooit een telefoon gebruiken'] },
        { t: 'mc', q: 'Wat moet je proberen niet te doen?', o: ['Steeds je telefoon checken', 'Water drinken', 'Pauze nemen'] },
        { t: 'mc', q: 'Wat doe je na een moeilijke taak?', o: ['Jezelf belonen', 'Meteen een nieuwe taak beginnen', 'Gaan slapen'] }
      ]
    },
    say: [['Ik probeer elke dag te sporten.', 'Intento hacer deporte todos los días.'], ['Ik zit te werken.', 'Estoy trabajando.'], ['Het is me gelukt!', '¡Lo logré!']],
    task: { nl: 'Escribe tus propósitos para el próximo año: 3 cosas que quieres empezar o intentar (proberen te, besluiten te, van plan zijn om te) y 2 cosas que quieres dejar. Termina con algo que ya lograste (Het is me gelukt om…).', model: 'Volgend jaar probeer ik elke week te zwemmen. Ik heb besloten om meer Nederlandse boeken te lezen. Ik ben van plan om geld te sparen voor een reis. Ik wil stoppen met frisdrank drinken en ik probeer minder op mijn telefoon te kijken. Dit jaar is het me gelukt om een baan te vinden!' },
    scenario: { nl: 'Una amiga de Zwolle te pregunta por tus propósitos de Año Nuevo.', role: 'Je bent Sanne, een vriendin uit Zwolle. Praat over goede voornemens: vraag wat de leerling wil proberen, waarmee hij of zij wil stoppen en wat al gelukt is. Vertel ook over jezelf (je ligt elke avond op je telefoon te kijken). Spreek Nederlands op B1-niveau.', goal: 'Cuéntale tus propósitos con te + infinitivo y dale un consejo a ella.' }
  });

  /* ───────────────────────── B1 · 9 ───────────────────────── */
  U({
    id: 'nl-b1-09', level: 'B1', icon: '🏛️', title: 'Ik heb moeten werken', nl: 'Trámites: modales en el pasado',
    goals: ['Usar modales en el perfectum (heb moeten werken)', 'Hacer trámites: gemeente, DigiD, seguro', 'Explicar lo que tuviste que hacer, pudiste o quisiste hacer'],
    vocab: [
      ['de gemeente', 'la municipalidad'], ['het gemeentehuis', 'el ayuntamiento'], ['het loket', 'la ventanilla'], ['de afspraak', 'la cita'], ['het formulier', 'el formulario'],
      ['invullen', 'llenar (un formulario)'], ['ondertekenen', 'firmar'], ['de handtekening', 'la firma'], ['het identiteitsbewijs', 'el documento de identidad'], ['de verblijfsvergunning', 'el permiso de residencia'],
      ['het BSN', 'el número de seguridad social'], ['de DigiD', 'la identificación digital'], ['de zorgverzekering', 'el seguro médico'], ['de belasting', 'los impuestos'],
      ['de toeslag', 'el subsidio'], ['aanvragen', 'solicitar'], ['inschrijven', 'empadronarse'], ['opsturen', 'enviar por correo'], ['de brief', 'la carta'], ['de termijn', 'el plazo'],
      ['verplicht', 'obligatorio'], ['geldig', 'válido'], ['verlopen', 'vencido'], ['het wachtnummer', 'el número de turno']
    ],
    grammar: [
      { t: 'Modales en perfectum: doble infinitivo', es: 'Modale werkwoorden in het perfectum',
        html: `<p>En el perfectum, los modales (<b>moeten, kunnen, willen, mogen</b>) no usan participio: van en <b>infinitivo</b> junto al otro verbo, al final. Siempre con <b>hebben</b>.</p>
<p><i>Ik <b>heb</b> lang <b>moeten wachten</b>.</i> (Tuve que esperar mucho.) · <i>Ze <b>heeft</b> niet <b>kunnen komen</b>.</i> (No pudo venir.) · <i>We <b>hebben</b> het <b>willen proberen</b>.</i></p>`,
        table: [['presente', 'perfectum'], ['Ik moet wachten.', 'Ik heb moeten wachten.'], ['Hij kan niet komen.', 'Hij heeft niet kunnen komen.'], ['We willen bellen.', 'We hebben willen bellen.'], ['Je mag niet roken.', 'Je hebt niet mogen roken.']],
        sum: 'Ik heb moeten wachten. Ze heeft niet kunnen komen.',
        ex: [['Ik heb twee uur bij de gemeente moeten wachten.', 'Tuve que esperar dos horas en la municipalidad.'], ['Waarom heb je niet kunnen bellen?', '¿Por qué no pudiste llamar?']] },
      { t: 'Imperfectum de los modales', es: 'Moest, kon, wilde, mocht',
        html: `<p>Al contar una historia también se usa el imperfectum: <b>moest / moesten</b>, <b>kon / konden</b>, <b>wilde / wilden</b>, <b>mocht / mochten</b>.</p>
<p><i>Ik <b>moest</b> een formulier invullen.</i> · <i>We <b>konden</b> geen afspraak maken.</i> · <i>Ze <b>mocht</b> niet binnenkomen zonder paspoort.</i></p>`,
        table: [['infinitivo', 'imperfectum', 'perfectum'], ['moeten', 'moest', 'heb … moeten'], ['kunnen', 'kon', 'heb … kunnen'], ['willen', 'wilde', 'heb … willen'], ['mogen', 'mocht', 'heb … mogen']],
        ex: [['Ik kon mijn DigiD niet vinden.', 'No encontraba mi DigiD.'], ['We moesten ons binnen vijf dagen inschrijven.', 'Teníamos que empadronarnos en cinco días.']] },
      { t: 'Frases útiles para trámites', es: 'Bij de gemeente',
        html: `<p><i>Ik wil graag een afspraak maken om <b>me in te schrijven</b>.</i> · <i>Welke documenten moet ik <b>meenemen</b>?</i> · <i>Kunt u dat nog een keer <b>langzaam</b> zeggen?</i> · <i>Waar moet ik <b>tekenen</b>?</i></p>
<p>Ojo con los verbos separables con te: <i>Vergeet niet het formulier <b>in te vullen</b>.</i></p>`,
        table: [['neerlandés', 'español'], ['Is dit formulier verplicht?', '¿Este formulario es obligatorio?'], ['Mijn paspoort is verlopen.', 'Mi pasaporte está vencido.'], ['Binnen welke termijn?', '¿En qué plazo?']],
        ex: [['Welke documenten moet ik meenemen?', '¿Qué documentos tengo que llevar?'], ['U moet dit formulier invullen en ondertekenen.', 'Tiene que llenar y firmar este formulario.']] }
    ],
    dialogue: {
      t: 'Bij de gemeente', place: 'Haarlem 🇳🇱',
      lines: [
        ['Medewerker', 'Goedemorgen. Waarmee kan ik u helpen?', 'Buenos días. ¿En qué le puedo ayudar?'],
        ['Andrés', 'Goedemorgen. Ik wil me inschrijven. Ik heb vorige week al willen komen, maar ik kon geen afspraak maken.', 'Buenos días. Quiero empadronarme. Ya quise venir la semana pasada, pero no pude conseguir cita.'],
        ['Medewerker', 'Geen probleem. Heeft u uw paspoort en huurcontract bij u?', 'No hay problema. ¿Trae su pasaporte y su contrato de alquiler?'],
        ['Andrés', 'Ja, hier. Mijn verhuurder heeft het contract gisteren pas kunnen sturen.', 'Sí, aquí están. Mi arrendador apenas pudo mandar el contrato ayer.'],
        ['Medewerker', 'Prima. Wilt u dit formulier invullen en hier ondertekenen?', 'Perfecto. ¿Puede llenar este formulario y firmar aquí?'],
        ['Andrés', 'Natuurlijk. Krijg ik dan ook een BSN?', 'Claro. ¿Y entonces también recibo un BSN?'],
        ['Medewerker', 'Ja, dat krijgt u binnen een week per post. Daarmee kunt u ook een DigiD aanvragen.', 'Sí, lo recibe en una semana por correo. Con eso también puede solicitar un DigiD.'],
        ['Andrés', 'Fijn. Mijn vriend heeft er drie weken op moeten wachten!', '¡Qué bien! ¡Mi amigo tuvo que esperarlo tres semanas!']
      ],
      q: [
        { t: 'mc', q: 'Waarom is Andrés niet vorige week gekomen?', o: ['Hij kon geen afspraak maken', 'Hij was ziek', 'Hij had geen paspoort'] },
        { t: 'mc', q: 'Wat moet Andrés doen?', o: ['Een formulier invullen en ondertekenen', 'Een foto maken', 'Belasting betalen'] },
        { t: 'mc', q: 'Hoe krijgt hij zijn BSN?', o: ['Per post, binnen een week', 'Meteen aan het loket', 'Per e-mail'] }
      ]
    },
    culture: { t: 'BSN, DigiD y seguro médico', html: `<p>Al llegar a vivir a los Países Bajos tienes que <b>inschrijven</b> en la municipalidad. Así recibes tu <b>BSN</b>, el número que necesitas para trabajar, ir al médico o abrir una cuenta bancaria.</p>
<p>🏥 El seguro médico (<b>zorgverzekering</b>) es <b>obligatorio</b> para todos los que viven y trabajan en el país. Con el <b>DigiD</b> haces casi todos los trámites por internet.</p>` },
    ex: [
      { t: 'cloze', s: 'Ik heb lang moeten ___.', a: ['wachten'], o: ['wachten', 'gewacht', 'te wachten'], nl: 'Tuve que esperar mucho.', tag: 'nl-modperf' },
      { t: 'cloze', s: 'Ze ___ niet kunnen komen.', a: ['heeft'], o: ['heeft', 'is', 'had kunnen'], nl: 'No pudo venir.', tag: 'nl-modperf' },
      { t: 'cloze', s: 'Ik heb het niet ___ geloven. (kunnen)', a: ['kunnen'], o: ['kunnen', 'gekund', 'kon'], nl: 'No lo pude creer.', tag: 'nl-modperf' },
      { t: 'cloze', s: 'Ik ___ een formulier invullen. (imperfectum)', a: ['moest'], o: ['moest', 'moet', 'moesten'], nl: 'Tuve que llenar un formulario.', tag: 'nl-modperf' },
      { t: 'cloze', s: 'We ___ geen afspraak maken. (kunnen, imperfectum)', a: ['konden'], o: ['konden', 'kon', 'kunden'], nl: 'No pudimos conseguir cita.', tag: 'nl-modperf' },
      { t: 'cloze', s: 'Vergeet niet het formulier in ___ vullen.', a: ['te'], o: ['te', 'om', 'het'], nl: 'No olvides llenar el formulario.', tag: 'nl-modperf' },
      { t: 'cloze', s: 'Mijn paspoort is ___. (vencido)', a: ['verlopen'], o: ['verlopen', 'verplicht', 'geldig'], nl: 'Mi pasaporte está vencido.', tag: 'nl-formeel' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ik heb niet kunnen slapen.', 'Ik heb niet gekund slapen.', 'Ik ben niet kunnen slapen.'], tag: 'nl-modperf' },
      { t: 'mc', q: '«el seguro médico» es…', o: ['de zorgverzekering', 'de toeslag', 'de belasting'], tag: 'nl-formeel' },
      { t: 'mc', q: '«firmar» es…', o: ['ondertekenen', 'invullen', 'opsturen'], tag: 'nl-formeel' },
      { t: 'tr', nl: 'Tuve que esperar dos horas.', a: ['Ik heb twee uur moeten wachten.', 'Ik moest twee uur wachten.'], tag: 'nl-modperf' },
      { t: 'tr', nl: 'No pude venir.', a: ['Ik heb niet kunnen komen.', 'Ik kon niet komen.'], tag: 'nl-modperf' },
      { t: 'tr', nl: '¿Qué documentos tengo que llevar?', a: ['Welke documenten moet ik meenemen?'], tag: 'nl-formeel' },
      { t: 'tr', nl: 'Quiero empadronarme.', a: ['Ik wil me inschrijven.', 'Ik wil mij inschrijven.', 'Ik wil me graag inschrijven.'], tag: 'nl-formeel' },
      { t: 'order', s: 'Ik heb twee uur bij de gemeente moeten wachten.', nl: 'Tuve que esperar dos horas en la municipalidad.', tag: 'nl-modperf' },
      { t: 'match', p: [['het formulier', 'el formulario'], ['de handtekening', 'la firma'], ['aanvragen', 'solicitar'], ['de termijn', 'el plazo'], ['verplicht', 'obligatorio']], tag: 'nl-formeel' }
    ],
    reading: {
      t: 'Mijn eerste maand in Nederland', type: 'Un blog',
      p: [
        ['Toen ik in Nederland aankwam, dacht ik dat alles snel zou gaan. Maar ik heb eerst drie weken op een afspraak bij de gemeente moeten wachten.', 'Cuando llegué a los Países Bajos, pensé que todo sería rápido. Pero primero tuve que esperar tres semanas una cita en la municipalidad.'],
        ['Zonder BSN kon ik geen bankrekening openen, en zonder bankrekening kon ik mijn huur niet betalen. Mijn verhuurder heeft gelukkig een maand willen wachten.', 'Sin BSN no podía abrir una cuenta bancaria, y sin cuenta bancaria no podía pagar el alquiler. Por suerte, mi arrendador quiso esperar un mes.'],
        ['Daarna moest ik nog een zorgverzekering afsluiten en een DigiD aanvragen. Nu, na een maand, is alles geregeld. Mijn tip: maak meteen een afspraak, nog voordat je verhuist!', 'Después todavía tuve que contratar un seguro médico y solicitar un DigiD. Ahora, después de un mes, todo está resuelto. Mi consejo: haz la cita de inmediato, ¡incluso antes de mudarte!']
      ],
      gl: [['de bankrekening', 'la cuenta bancaria'], ['afsluiten', 'contratar (un seguro)'], ['geregeld', 'arreglado / resuelto'], ['de tip', 'el consejo']],
      q: [
        { t: 'mc', q: 'Hoe lang heeft de schrijver op een afspraak moeten wachten?', o: ['Drie weken', 'Eén dag', 'Een maand'] },
        { t: 'mc', q: 'Waarom kon de schrijver de huur niet betalen?', o: ['Zonder BSN kon hij geen bankrekening openen', 'Hij had geen geld', 'De verhuurder was weg'] },
        { t: 'mc', q: 'Wat is zijn tip?', o: ['Meteen een afspraak maken, nog voor je verhuist', 'Geen zorgverzekering nemen', 'Pas na een maand verhuizen'] }
      ]
    },
    say: [['Ik heb lang moeten wachten.', 'Tuve que esperar mucho.'], ['Welke documenten moet ik meenemen?', '¿Qué documentos tengo que llevar?'], ['Ik heb niet kunnen komen.', 'No pude venir.']],
    task: { nl: 'Cuenta un trámite complicado que hayas hecho (en tu país o en otro): qué tuviste que hacer, qué no pudiste hacer y qué querías hacer. Usa los modales en perfectum.', model: 'Vorig jaar heb ik een nieuw paspoort moeten aanvragen. Ik heb eerst online een afspraak moeten maken. Ik wilde snel gaan, maar ik heb pas na twee weken kunnen komen. Ik heb een formulier moeten invullen en een foto moeten meenemen. Na een maand kon ik mijn paspoort ophalen.' },
    scenario: { nl: 'Vas a la municipalidad de Haarlem para empadronarte.', role: 'Je bent een medewerker van de gemeente Haarlem aan het loket. De leerling wil zich inschrijven. Vraag naar documenten, laat een formulier invullen en ondertekenen, en leg uit wat er daarna gebeurt (BSN, DigiD). Vraag ook waarom de leerling niet eerder is gekomen. Spreek Nederlands op B1-niveau en gebruik "u".', goal: 'Haz el trámite y explica qué tuviste que hacer y qué no pudiste hacer antes.' }
  });

  /* ───────────────────────── B1 · 10 ───────────────────────── */
  U({
    id: 'nl-b1-10', level: 'B1', icon: '✉️', title: 'Een klacht indienen', nl: 'Quejas y cartas formales',
    goals: ['Escribir un correo formal con una queja', 'Ser cortés y firme a la vez (zou u… kunnen)', 'Usar las fórmulas de una carta formal neerlandesa'],
    vocab: [
      ['de klacht', 'la queja'], ['een klacht indienen', 'presentar una queja'], ['het geld terug', 'la devolución del dinero'], ['de bon', 'el recibo'], ['de bestelling', 'el pedido'],
      ['beschadigd', 'dañado'], ['kapot', 'roto / descompuesto'], ['de klantenservice', 'el servicio al cliente'], ['de manager', 'el gerente'], ['ruilen', 'cambiar (un producto)'],
      ['de garantie', 'la garantía'], ['terugsturen', 'devolver por correo'], ['vergoeden', 'compensar / reembolsar'], ['de vergoeding', 'la compensación'], ['oplossen', 'resolver'],
      ['ontevreden', 'insatisfecho'], ['onacceptabel', 'inaceptable'], ['zo snel mogelijk', 'lo antes posible'], ['Geachte heer/mevrouw', 'Estimado señor/señora'], ['Met vriendelijke groet', 'Atentamente'],
      ['Hierbij', 'Por medio de la presente'], ['In de bijlage', 'Adjunto'], ['Ik zie uw reactie graag tegemoet.', 'Quedo atento a su respuesta.'], ['het ordernummer', 'el número de pedido']
    ],
    grammar: [
      { t: 'Cortesía con zou … kunnen / willen', es: 'Beleefd vragen',
        html: `<p>Para pedir algo con cortesía: <b>Zou u … kunnen / willen</b> + infinitivo. Para quejarte sin sonar grosero: <i>Helaas…</i> (lamentablemente), <i>Ik wil graag…</i></p>
<p><i><b>Zou u</b> mijn geld terug <b>kunnen</b> storten?</i> · <i><b>Helaas</b> is de wasmachine na twee weken kapotgegaan.</i> · <i>Ik <b>zou het op prijs stellen</b> als u mij terugbelt.</i> (Le agradecería que…)</p>`,
        table: [['directo (poco cortés)', 'cortés'], ['Dit is kapot.', 'Helaas is dit kapot.'], ['Geef mijn geld terug.', 'Ik wil graag mijn geld terug.'], ['Los het nu op.', 'Zou u dit zo snel mogelijk kunnen oplossen?']],
        sum: 'Zou u mij kunnen helpen? Helaas is het kapot.',
        ex: [['Zou u een nieuwe kunnen sturen?', '¿Podría enviar uno nuevo?'], ['Ik zou het op prijs stellen als u mij vandaag terugbelt.', 'Le agradecería que me devolviera la llamada hoy.']] },
      { t: 'La carta formal', es: 'De formele brief',
        html: `<p>Estructura de un correo formal en neerlandés:</p>
<p><b>Geachte heer/mevrouw</b> (o <b>Geachte heer De Vries</b>), · <b>Hierbij</b> wil ik een klacht indienen over… · explica el problema con datos (fecha, ordernummer) · di qué quieres: <i>Ik wil graag mijn geld terug / het product ruilen.</i> · <b>Ik zie uw reactie graag tegemoet.</b> · <b>Met vriendelijke groet</b>, + nombre.</p>
<p>En una carta formal usa siempre <b>u</b> y <b>uw</b>.</p>`,
        table: [['parte', 'frase'], ['saludo', 'Geachte heer/mevrouw,'], ['motivo', 'Hierbij wil ik een klacht indienen over mijn bestelling 4521.'], ['pedido', 'Ik wil graag mijn geld terug.'], ['cierre', 'Ik zie uw reactie graag tegemoet. Met vriendelijke groet, Ana Ríos']],
        ex: [['Hierbij wil ik een klacht indienen over de service in uw winkel.', 'Por medio de la presente quiero presentar una queja sobre el servicio en su tienda.'], ['In de bijlage vindt u een kopie van de bon.', 'Adjunto encontrará una copia del recibo.']] },
      { t: 'Repaso B1: bijzinnen en la queja', es: 'Herhaling: bijzinnen',
        html: `<p>En una queja usarás muchas bijzinnen: <b>omdat</b>, <b>dat</b>, <b>toen</b>, <b>nadat</b>, <b>als</b>. ¡Verbo al final!</p>
<p><i>Ik ben ontevreden, <b>omdat</b> het product na een week kapot <b>was</b>.</i> · <i><b>Toen</b> ik de doos <b>opende</b>, <b>zag</b> ik dat het beschadigd <b>was</b>.</i> · <i><b>Als</b> u het niet <b>oplost</b>, <b>dien</b> ik een klacht in bij de consumentenorganisatie.</i></p>`,
        table: [['conector', 'ejemplo'], ['omdat', '…omdat de bestelling te laat was.'], ['toen', 'Toen ik belde, nam niemand op.'], ['nadat', 'Nadat ik had betaald, kreeg ik niets.']],
        ex: [['Toen ik de doos opende, zag ik dat het scherm kapot was.', 'Cuando abrí la caja, vi que la pantalla estaba rota.'], ['Ik heb drie keer gebeld, maar niemand heeft me teruggebeld.', 'Llamé tres veces, pero nadie me devolvió la llamada.']] }
    ],
    dialogue: {
      t: 'Bij de klantenservice', place: 'Róterdam 🇳🇱',
      lines: [
        ['Medewerker', 'Goedemiddag, waarmee kan ik u helpen?', 'Buenas tardes, ¿en qué le puedo ayudar?'],
        ['Carolina', 'Goedemiddag. Helaas is dit koffiezetapparaat na drie dagen kapotgegaan.', 'Buenas tardes. Lamentablemente esta cafetera se dañó a los tres días.'],
        ['Medewerker', 'Wat vervelend. Heeft u de bon nog?', 'Qué fastidio. ¿Todavía tiene el recibo?'],
        ['Carolina', 'Ja, hier is hij. Toen ik hem vanochtend aanzette, gebeurde er niets.', 'Sí, aquí está. Cuando la encendí esta mañana, no pasó nada.'],
        ['Medewerker', 'Ik kijk even of we er nog een hebben… Helaas, ze zijn uitverkocht.', 'Déjeme ver si nos queda otra… Lamentablemente están agotadas.'],
        ['Carolina', 'Zou ik dan mijn geld terug kunnen krijgen?', '¿Entonces podría recibir la devolución del dinero?'],
        ['Medewerker', 'Natuurlijk. Zou u dit formulier willen invullen? Het geld staat binnen vijf werkdagen op uw rekening.', 'Claro. ¿Podría llenar este formulario? El dinero estará en su cuenta en cinco días hábiles.'],
        ['Carolina', 'Prima, dank u wel dat u het zo snel heeft opgelost.', 'Perfecto, muchas gracias por resolverlo tan rápido.']
      ],
      q: [
        { t: 'mc', q: 'Wat is het probleem?', o: ['Het koffiezetapparaat is kapot', 'Ze heeft de bon niet', 'Het apparaat heeft de verkeerde kleur'] },
        { t: 'mc', q: 'Waarom kan ze het niet ruilen?', o: ['Ze zijn uitverkocht', 'De garantie is verlopen', 'Ze heeft geen bon'] },
        { t: 'mc', q: 'Wanneer krijgt ze haar geld terug?', o: ['Binnen vijf werkdagen', 'Meteen', 'Volgende maand'] }
      ]
    },
    culture: { t: 'Derechos del consumidor', html: `<p>En la Unión Europea, si compras algo por internet, tienes <b>14 días</b> para devolverlo sin dar explicaciones (<i>bedenktijd</i>). Y los productos tienen al menos <b>dos años</b> de garantía.</p>
<p>📝 Si una empresa no resuelve tu queja, puedes acudir a una <b>geschillencommissie</b> (comisión de conflictos) o a la organización de consumidores, la <b>Consumentenbond</b>.</p>` },
    ex: [
      { t: 'cloze', s: '___ u mij kunnen helpen?', a: ['Zou'], o: ['Zou', 'Zal', 'Kan het'], nl: '¿Me podría ayudar?', tag: 'nl-formeel' },
      { t: 'cloze', s: '___ is de wasmachine kapot. (lamentablemente)', a: ['Helaas'], o: ['Helaas', 'Gelukkig', 'Hierbij'], nl: 'Lamentablemente la lavadora está descompuesta.', tag: 'nl-formeel' },
      { t: 'cloze', s: '___ wil ik een klacht indienen.', a: ['Hierbij'], o: ['Hierbij', 'Hiermee dat', 'Daarom'], nl: 'Por medio de la presente quiero presentar una queja.', tag: 'nl-formeel' },
      { t: 'cloze', s: 'Geachte heer/___,', a: ['mevrouw'], o: ['mevrouw', 'vrouw', 'madam'], nl: 'Estimado señor/señora:', tag: 'nl-formeel' },
      { t: 'cloze', s: 'Met vriendelijke ___,', a: ['groet'], o: ['groet', 'groeten van', 'dank'], nl: 'Atentamente,', tag: 'nl-formeel' },
      { t: 'cloze', s: 'Ik ben ontevreden, omdat het product kapot ___.', a: ['was'], o: ['was', 'is geweest is', 'waren'], nl: 'Estoy insatisfecho porque el producto estaba roto.', tag: 'nl-formeel' },
      { t: 'cloze', s: 'In de ___ vindt u een kopie van de bon.', a: ['bijlage'], o: ['bijlage', 'brief', 'bestelling'], nl: 'Adjunto encontrará una copia del recibo.', tag: 'nl-formeel' },
      { t: 'mc', q: 'La forma más cortés es…', o: ['Zou u dit zo snel mogelijk kunnen oplossen?', 'Los dit nu op.', 'Dit moet u oplossen!'], tag: 'nl-formeel' },
      { t: 'mc', q: 'En una carta formal usas…', o: ['u en uw', 'jij en jouw', 'jullie'], tag: 'nl-formeel' },
      { t: 'mc', q: '«cambiar un producto» es…', o: ['ruilen', 'vergoeden', 'terugsturen'], tag: 'nl-formeel' },
      { t: 'tr', nl: 'Quisiera la devolución de mi dinero.', a: ['Ik wil graag mijn geld terug.', 'Ik zou graag mijn geld terug willen.', 'Ik wil mijn geld graag terug.'], tag: 'nl-formeel' },
      { t: 'tr', nl: '¿Podría enviar uno nuevo?', a: ['Zou u een nieuwe kunnen sturen?', 'Kunt u een nieuwe sturen?', 'Zou u een nieuw exemplaar kunnen sturen?'], tag: 'nl-formeel' },
      { t: 'tr', nl: 'Cuando abrí la caja, vi que estaba dañado.', a: ['Toen ik de doos opende, zag ik dat het beschadigd was.', 'Toen ik de doos openmaakte, zag ik dat het beschadigd was.'], tag: 'nl-formeel' },
      { t: 'tr', nl: 'Quedo atento a su respuesta.', a: ['Ik zie uw reactie graag tegemoet.'], tag: 'nl-formeel' },
      { t: 'order', s: 'Zou u dit zo snel mogelijk kunnen oplossen?', nl: '¿Podría resolver esto lo antes posible?', tag: 'nl-formeel' },
      { t: 'match', p: [['de klacht', 'la queja'], ['de bon', 'el recibo'], ['beschadigd', 'dañado'], ['de garantie', 'la garantía'], ['ontevreden', 'insatisfecho']], tag: 'nl-formeel' }
    ],
    reading: {
      t: 'Een klachtenmail', type: 'Un correo formal',
      p: [
        ['Geachte heer/mevrouw, hierbij wil ik een klacht indienen over de hotelkamer waarin ik van 3 tot 6 maart heb verbleven (reserveringsnummer 88214).', 'Estimados señores: por medio de la presente quiero presentar una queja sobre la habitación de hotel en la que me hospedé del 3 al 6 de marzo (número de reserva 88214).'],
        ['Toen ik aankwam, was de kamer niet schoongemaakt. De eerste nacht ging de verwarming kapot. Hoewel ik drie keer naar de receptie heb gebeld, is er niemand gekomen.', 'Cuando llegué, la habitación no estaba limpia. La primera noche se dañó la calefacción. Aunque llamé tres veces a la recepción, no vino nadie.'],
        ['Ik vind dit onacceptabel voor een viersterrenhotel. Ik zou het op prijs stellen als u de kosten van één nacht vergoedt. Ik zie uw reactie graag tegemoet. Met vriendelijke groet, Ana Ríos', 'Me parece inaceptable para un hotel de cuatro estrellas. Les agradecería que me reembolsaran el costo de una noche. Quedo atenta a su respuesta. Atentamente, Ana Ríos']
      ],
      gl: [['verblijven → verbleven', 'hospedarse'], ['de verwarming', 'la calefacción'], ['hoewel', 'aunque'], ['op prijs stellen', 'agradecer / valorar']],
      q: [
        { t: 'mc', q: 'Hoeveel nachten heeft Ana in het hotel geslapen?', o: ['Drie', 'Eén', 'Zeven'] },
        { t: 'mc', q: 'Wat ging er kapot?', o: ['De verwarming', 'De tv', 'De lift'] },
        { t: 'mc', q: 'Wat wil Ana?', o: ['Dat het hotel de kosten van één nacht vergoedt', 'Een gratis week', 'Een andere kamer'] }
      ]
    },
    say: [['Zou u mij kunnen helpen?', '¿Me podría ayudar?'], ['Helaas is het kapot.', 'Lamentablemente está roto.'], ['Ik wil graag mijn geld terug.', 'Quisiera la devolución de mi dinero.']],
    task: { nl: 'Escribe un correo formal de queja (unas 80 palabras) sobre un producto o servicio. Incluye saludo, el problema con datos, lo que quieres y el cierre. Usa al menos dos bijzinnen.', model: 'Geachte heer/mevrouw, hierbij wil ik een klacht indienen over de koptelefoon die ik op 2 mei via uw website heb besteld (ordernummer 5532). Toen ik het pakket opende, zag ik dat de doos beschadigd was. Bovendien werkt de linkerkant niet. Ik wil graag mijn geld terug of een nieuwe koptelefoon. Ik zie uw reactie graag tegemoet. Met vriendelijke groet, Carlos Pérez' },
    scenario: { nl: 'Vas al servicio al cliente de una tienda en Róterdam porque un producto se dañó.', role: 'Je bent een medewerker van de klantenservice van een winkel in Rotterdam. De leerling heeft een klacht over een product. Wees beleefd, vraag naar details en de bon, bied ruilen of geld terug aan en laat een formulier invullen. Spreek Nederlands op B1-niveau en gebruik "u".', goal: 'Explica el problema con cortesía y consigue la devolución del dinero o un cambio.' }
  });
})(window.SPT);
