/* Niveau B1 — Latijns-Amerikaans Spaans.
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzeknoppen, eerste = juist), tr (vertalen NL→ES), order, match.
   Vanaf B1 toont de app (instelling «Automatisch») de Spaanse samenvatting (sum) en zit de Nederlandse uitleg achter een klapmenu. */
(function (S) {
  'use strict';
  const U = S.addUnit;

  /* ───────────────────────── B1 · 1 ───────────────────────── */
  U({
    id: 'b1-01', level: 'B1', icon: '🌠', title: 'Ojalá que…', nl: 'Wensen en verzoeken: de presente de subjuntivo',
    goals: ['De presente de subjuntivo vormen, ook van onregelmatige werkwoorden', 'Wensen uitdrukken met ojalá, espero que en quiero que', 'Iemand iets vragen of aanraden met pedir que en recomendar que'],
    vocab: [
      ['ojalá (que)', 'hopelijk, was het maar zo dat'], ['esperar que', 'hopen dat'], ['desear', 'wensen'], ['el deseo', 'de wens'], ['pedir (i) que', 'vragen dat (verzoek)'],
      ['recomendar (ie) que', 'aanraden dat'], ['sugerir (ie) que', 'voorstellen dat'], ['aconsejar', 'adviseren'], ['permitir', 'toestaan'], ['prohibir', 'verbieden'],
      ['necesitar que', 'nodig hebben dat'], ['el brindis', 'de toost'], ['brindar por…', 'proosten op…'], ['¡salud!', 'proost!'], ['el Año Nuevo', 'Nieuwjaar'],
      ['las uvas', 'de druiven', '12 druiven om middernacht met Oud en Nieuw'], ['la suerte', 'het geluk (toeval)'], ['¡que te vaya bien!', 'het ga je goed!'],
      ['¡que te diviertas!', 'veel plezier!'], ['¡que descanses!', 'slaap lekker / rust goed uit!'], ['¡que cumplas muchos más!', 'nog vele jaren! (verjaardag)'],
      ['¡que lo pases bien!', 'maak er wat moois van!'], ['la salud', 'de gezondheid'], ['el amor', 'de liefde'], ['la paz', 'de vrede'], ['el propósito', 'het (goede) voornemen'],
      ['cumplir (un propósito)', '(een voornemen) waarmaken'], ['lograr', 'bereiken, voor elkaar krijgen'], ['conseguir (i)', 'krijgen, bereiken'], ['el éxito', 'het succes'],
      ['ponerse en forma', 'in vorm komen'], ['dejar de fumar', 'stoppen met roken'], ['soplar las velas', 'de kaarsjes uitblazen'], ['la quinceañera', 'het feest voor de 15e verjaardag van een meisje', 'MX · Midden-Amerika · CO'],
      ['¡aguas!', 'pas op!', 'MX (informeel)'], ['ándale', 'kom op, toe maar; oké', 'MX']
    ],
    grammar: [
      { t: 'De presente de subjuntivo: vorming', es: 'El presente de subjuntivo',
        html: `<p>De <b>subjuntivo</b> (aanvoegende wijs) gebruik je als iets <b>niet als feit</b> wordt gepresenteerd: een wens, een verzoek, een gevoel of een twijfel.</p>
<p><b>Vorming:</b> neem de <b>yo-vorm</b> van de presente, haal de <i>-o</i> weg en zet er de <b>"omgekeerde" uitgang</b> achter: <i>-ar</i> krijgt <b>-e</b>, <i>-er/-ir</i> krijgen <b>-a</b>.</p>
<p>Daardoor gaan onregelmatige yo-vormen vanzelf mee: <i>tengo → tenga, hago → haga, digo → diga, salgo → salga, conozco → conozca</i>.</p>
<p>Zes werkwoorden zijn helemaal onregelmatig: <b>ser</b> (sea), <b>ir</b> (vaya), <b>estar</b> (esté), <b>dar</b> (dé), <b>saber</b> (sepa) en <b>haber</b> (haya).</p>`,
        table: [['', 'hablar', 'comer', 'vivir', 'tener'], ['yo', 'hable', 'coma', 'viva', 'tenga'], ['tú', 'hables', 'comas', 'vivas', 'tengas'], ['él / ella / usted', 'hable', 'coma', 'viva', 'tenga'], ['nosotros', 'hablemos', 'comamos', 'vivamos', 'tengamos'], ['ellos / ustedes', 'hablen', 'coman', 'vivan', 'tengan']],
        sum: 'Subjuntivo: forma «yo» del presente sin -o + -e (verbos -ar) o -a (verbos -er/-ir).' },
      { t: 'Wensen: ojalá, espero que, quiero que', es: 'Expresar deseos',
        html: `<p>Na <b>ojalá (que)</b> volgt altijd de subjuntivo: <i>¡Ojalá que no llueva mañana!</i> Het woord komt uit het Arabisch en betekent oorspronkelijk «God geve».</p>
<p>Bij <b>querer, esperar, desear</b> + <b>que</b> + <b>een ander onderwerp</b> gebruik je de subjuntivo: <i>Quiero que vengas.</i> (Ik wil dat jij komt.)</p>
<p>Is het onderwerp <b>hetzelfde</b>, dan gebruik je gewoon de infinitief: <i>Quiero venir.</i> (Ik wil komen.) · <i>Espero aprobar.</i> (Ik hoop te slagen.)</p>
<p>💛 Veel vaste wensen beginnen met <b>que</b> + subjuntivo: <i>¡Que te vaya bien! ¡Que te mejores! ¡Que descanses! ¡Que cumplas muchos más!</i></p>`,
        ex: [['Ojalá que tengas un año lleno de salud.', 'Ik hoop dat je een jaar vol gezondheid krijgt.'], ['Espero que mis papás puedan venir.', 'Ik hoop dat mijn ouders kunnen komen.'], ['Quiero aprender a bailar.', 'Ik wil leren dansen.']],
        sum: 'Ojalá + subjuntivo. Quiero que + otra persona + subjuntivo; misma persona: infinitivo.' },
      { t: 'Verzoeken en advies', es: 'Pedir, recomendar, sugerir',
        html: `<p>Ook na werkwoorden waarmee je iemand iets laat doen, volgt de subjuntivo: <b>pedir que, recomendar que, sugerir que, aconsejar que, necesitar que, permitir que, prohibir que</b>.</p>
<p><i>El médico me recomienda que duerma más.</i> · <i>Te pido que llegues a tiempo.</i> · <i>Mis papás no permiten que salga tarde.</i></p>
<p>📌 <b>Stamwisselaars</b> houden in de subjuntivo hun stamwisseling: <i>pensar → piense</i>, <i>volver → vuelva</i>, <i>pedir → pida</i>. Bij <i>-ir</i>-werkwoorden verandert in de nosotros-vorm ook de stam: <i>durmamos, pidamos, sintamos</i>.</p>
<p>📌 Spelling: <i>buscar → busque, llegar → llegue, empezar → empiece</i>.</p>`,
        sum: 'Pedir / recomendar / sugerir / necesitar que + subjuntivo.' }
    ],
    verbs: ['hablar', 'comer', 'vivir', 'tener', 'hacer', 'ir', 'ser', 'estar', 'poder', 'venir', 'decir', 'salir', 'dar', 'saber', 'pedir', 'dormir', 'llegar', 'buscar'], tenses: ['subj'],
    dialogue: {
      t: 'Las doce uvas', place: 'Ciudad de México 🇲🇽',
      lines: [
        ['Paola', '¡Ya casi son las doce! ¿Tienes tus uvas, Mark?', 'Het is bijna twaalf uur! Heb je je druiven, Mark?'],
        ['Mark', 'Sí, aquí están. ¿Qué tengo que hacer exactamente?', 'Ja, hier zijn ze. Wat moet ik precies doen?'],
        ['Paola', 'Con cada campanada te comes una uva y pides un deseo. Son doce deseos, uno para cada mes.', 'Bij elke klokslag eet je een druif en doe je een wens. Twaalf wensen, één voor elke maand.'],
        ['Mark', '¡Doce deseos en un minuto! Ojalá que no me ahogue.', 'Twaalf wensen in één minuut! Ik hoop maar dat ik me niet verslik.'],
        ['Tío Beto', '¡Aguas, que ya empieza! Diez, nueve, ocho…', 'Opgelet, het begint! Tien, negen, acht…'],
        ['Paola', '¡Feliz Año Nuevo! A ver, ¿qué deseaste?', 'Gelukkig Nieuwjaar! Zeg eens, wat heb je gewenst?'],
        ['Mark', 'Que mi familia esté bien, que tenga un buen trabajo… y que por fin hable español con fluidez.', 'Dat het goed gaat met mijn familie, dat ik een goede baan krijg… en dat ik eindelijk vloeiend Spaans spreek.'],
        ['Tío Beto', 'Para eso te recomiendo que vengas a México más seguido, mijo.', 'Daarvoor raad ik je aan om vaker naar Mexico te komen, jongen.'],
        ['Paola', 'Y yo quiero que este año dejemos de trabajar tanto y que viajemos más.', 'En ik wil dat we dit jaar minder hard werken en meer reizen.'],
        ['Tío Beto', 'Bueno, ¡salud! Que este año sea el mejor de todos.', 'Nou, proost! Dat dit jaar het beste van allemaal mag worden.'],
        ['Mark', '¡Salud! Y que se cumplan todos nuestros deseos.', 'Proost! En dat al onze wensen uitkomen.']
      ],
      q: [
        { t: 'mc', q: '¿Cuántos deseos se piden con las uvas?', o: ['Doce, uno para cada mes', 'Uno solo', 'Diez'] },
        { t: 'mc', q: '¿Qué le recomienda el tío Beto a Mark?', o: ['Que venga a México más seguido', 'Que deje de trabajar', 'Que coma más uvas'] },
        { t: 'mc', q: '¿Qué quiere Paola para este año?', o: ['Trabajar menos y viajar más', 'Tener un buen trabajo', 'Hablar inglés'] }
      ]
    },
    culture: { t: 'Oud en Nieuw en de quinceañera', html: `<p>🍇 In bijna heel Latijns-Amerika eet je om middernacht <b>doce uvas</b>: één druif per klokslag, met bij elke druif een wens. In Ecuador, Colombia en Peru verbranden mensen een <b>año viejo</b>: een pop die het oude jaar voorstelt. Wie veel wil reizen, rent met een <b>lege koffer</b> een rondje om het huizenblok. En wie op liefde hoopt, draagt <b>gele onderkleding</b>.</p>
<p>👗 De <b>quinceañera</b> (of <i>los quince</i>) is het grote feest voor de vijftiende verjaardag van een meisje. Er is een mis, een speciale jurk, een wals met de vader en vaak honderden gasten.</p>
<p>🙏 <b>Ojalá</b> hoor je de hele dag: <i>¿Vienes mañana? — ¡Ojalá!</i> Het is een warm, hoopvol «hopelijk».</p>` },
    ex: [
      { t: 'cloze', s: 'Ojalá que mañana no ___.', h: 'llover', a: ['llueva'], nl: 'Hopelijk regent het morgen niet.', tag: 'subj-wish' },
      { t: 'cloze', s: 'Espero que tú ___ un buen viaje.', h: 'tener', a: ['tengas'], nl: 'Ik hoop dat je een goede reis hebt.', tag: 'subj-wish' },
      { t: 'cloze', s: 'Quiero que ustedes ___ a mi fiesta.', h: 'venir', a: ['vengan'], nl: 'Ik wil dat jullie naar mijn feest komen.', tag: 'subj-wish' },
      { t: 'cloze', s: 'Mis papás quieren que yo ___ medicina.', a: ['estudie'], o: ['estudie', 'estudio', 'estudiar'], nl: 'Mijn ouders willen dat ik geneeskunde studeer.', tag: 'subj-wish' },
      { t: 'cloze', s: 'Quiero ___ medicina.', a: ['estudiar'], o: ['estudiar', 'estudie', 'que estudie'], nl: 'Ik wil geneeskunde studeren.', x: 'Hetzelfde onderwerp (yo… yo): infinitief.', tag: 'subj-wish' },
      { t: 'cloze', s: 'El médico me recomienda que ___ más.', h: 'dormir', a: ['duerma'], nl: 'De dokter raadt me aan meer te slapen.', tag: 'subj-wish' },
      { t: 'cloze', s: 'Te pido que ___ a tiempo.', h: 'llegar', a: ['llegues'], nl: 'Ik vraag je om op tijd te komen.', x: 'Llegar → llegue: de u houdt de g hard.', tag: 'subj-wish' },
      { t: 'cloze', s: 'Ojalá que mi hermana ___ feliz en Canadá.', h: 'ser', a: ['sea'], nl: 'Ik hoop dat mijn zus gelukkig wordt in Canada.', tag: 'subj-wish' },
      { t: 'cloze', s: 'Necesito que me ___ la verdad.', h: 'decir, tú', a: ['digas'], nl: 'Ik moet de waarheid van je horen.', tag: 'subj-wish' },
      { t: 'mc', q: 'Subjuntivo van «ir» (yo):', o: ['vaya', 'iga', 'voya'], tag: 'subj-wish' },
      { t: 'mc', q: 'Subjuntivo van «saber» (ellos):', o: ['sepan', 'saben', 'sapan'], tag: 'subj-wish' },
      { t: 'mc', q: 'Iemand is ziek. Wat zeg je?', o: ['¡Que te mejores!', '¡Que te vaya bien!', '¡Que te diviertas!'], tag: 'subj-wish' },
      { t: 'tr', nl: 'Ik hoop dat je het leuk hebt op het feest.', a: ['Espero que te diviertas en la fiesta.', 'Ojalá que te diviertas en la fiesta.', 'Espero que la pases bien en la fiesta.', 'Ojalá te diviertas en la fiesta.'], tag: 'subj-wish' },
      { t: 'tr', nl: 'Hopelijk krijg ik de baan.', a: ['Ojalá consiga el trabajo.', 'Ojalá que consiga el trabajo.', 'Ojalá me den el trabajo.', 'Ojalá que me den el trabajo.', 'Ojalá consiga el puesto.'], tag: 'subj-wish' },
      { t: 'tr', nl: 'Mijn baas wil dat we morgen vroeg komen.', a: ['Mi jefe quiere que vengamos temprano mañana.', 'Mi jefe quiere que lleguemos temprano mañana.', 'Mi jefa quiere que vengamos temprano mañana.', 'Mi jefe quiere que mañana vengamos temprano.'], tag: 'subj-wish' },
      { t: 'order', s: 'Ojalá que este año sea el mejor.', nl: 'Hopelijk wordt dit jaar het beste.', tag: 'subj-wish' },
      { t: 'match', p: [['¡Que descanses!', 'Slaap lekker!'], ['¡Que te mejores!', 'Beterschap!'], ['¡Que te vaya bien!', 'Het ga je goed!'], ['¡Que te diviertas!', 'Veel plezier!'], ['¡Salud!', 'Proost!']], tag: 'vocab' }
    ],
    say: [['Ojalá que tengas un año lleno de salud.', 'Ik hoop dat je een jaar vol gezondheid krijgt.'], ['Te recomiendo que vengas más seguido.', 'Ik raad je aan vaker te komen.'], ['¡Que te vaya muy bien!', 'Het ga je heel goed!'], ['Quiero que este año viajemos más.', 'Ik wil dat we dit jaar meer reizen.']],
    task: { nl: 'Schrijf je goede voornemens en je wensen voor het nieuwe jaar: drie wensen voor jezelf (Espero…, Quiero…) en drie voor anderen (Ojalá que…, Quiero que…).', model: 'Este año quiero ponerme en forma y ahorrar más. Espero aprobar el examen de español. Ojalá que mis papás tengan mucha salud. Quiero que mi hermana venga a visitarme y espero que mis amigos consigan el trabajo que buscan.' },
    scenario: { nl: 'Je viert Oud en Nieuw bij een Mexicaanse familie en ze vragen naar je wensen.', role: 'Eres Paola, una mexicana de 30 años de la Ciudad de México, alegre y cariñosa. Es la noche de Año Nuevo con tu familia. Explicas la tradición de las uvas, preguntas al estudiante qué desea para el año nuevo y qué quiere que pase en su vida. Usas mucho «ojalá que» y «espero que».', goal: 'Druk wensen uit met ojalá que, espero que en quiero que + subjuntivo.' },
    reading: {
      t: 'Cartas al nuevo año', type: 'Rubriek in een tijdschrift',
      p: [
        ['Le pedimos a nuestros lectores que nos escribieran sus deseos para el próximo año. Aquí están algunos de los mensajes más bonitos.',
          'We vroegen onze lezers ons hun wensen voor het komende jaar te sturen. Hier zijn enkele van de mooiste berichten.'],
        ['«Tengo setenta años y vivo en Guadalajara. Lo único que quiero es que mis nietos me visiten más. Ojalá que vengan en vacaciones y que aprendan a cocinar el pozole de la abuela.» — Doña Carmen',
          '«Ik ben zeventig en woon in Guadalajara. Het enige wat ik wil, is dat mijn kleinkinderen vaker langskomen. Hopelijk komen ze in de vakantie en leren ze de pozole van oma koken.» — Doña Carmen'],
        ['«Este año termino la universidad. Espero conseguir un trabajo en mi área, aunque sé que no es fácil. Mis papás quieren que me quede en Monterrey, pero yo quiero conocer otros países.» — Diego, 23 años',
          '«Dit jaar studeer ik af. Ik hoop een baan in mijn vakgebied te vinden, al weet ik dat het niet makkelijk is. Mijn ouders willen dat ik in Monterrey blijf, maar ik wil andere landen leren kennen.» — Diego, 23 jaar'],
        ['«Soy enfermera y trabajo muchas horas. Le pido al nuevo año que haya más paz en el mundo y que la gente sea más amable. Y para mí, solo deseo que mi jefa me dé unas vacaciones.» — Andrea',
          '«Ik ben verpleegkundige en werk veel uren. Ik vraag het nieuwe jaar om meer vrede in de wereld en dat mensen vriendelijker zijn. En voor mezelf wens ik alleen dat mijn bazin me wat vakantie geeft.» — Andrea']
      ],
      gl: [['el lector / la lectora', 'de lezer'], ['lo único', 'het enige'], ['el pozole', 'Mexicaanse maïssoep'], ['en mi área', 'in mijn vakgebied']],
      q: [
        { t: 'mc', q: '¿Qué quiere doña Carmen?', o: ['Que sus nietos la visiten más', 'Viajar a otros países', 'Aprender a cocinar'] },
        { t: 'mc', q: '¿Qué quieren los papás de Diego?', o: ['Que se quede en Monterrey', 'Que viaje mucho', 'Que estudie medicina'] },
        { t: 'mc', q: '¿Qué espera Diego?', o: ['Conseguir un trabajo en su área', 'Que sus papás lo visiten', 'Tener vacaciones'] },
        { t: 'mc', q: '¿Qué desea Andrea para ella misma?', o: ['Que su jefa le dé vacaciones', 'Trabajar más horas', 'Terminar la universidad'] }
      ]
    }
  });

  /* ───────────────────────── B1 · 2 ───────────────────────── */
  U({
    id: 'b1-02', level: 'B1', icon: '💭', title: 'No creo que sea así', nl: 'Mening, twijfel en gevoel: indicativo of subjuntivo?',
    goals: ['Je mening geven met creo que en pienso que', 'Twijfel en ontkenning uitdrukken met no creo que, dudo que + subjuntivo', 'Gevoelens en oordelen geven: me alegra que, es importante que'],
    vocab: [
      ['creer que', 'geloven, denken dat'], ['pensar (ie) que', 'denken dat'], ['opinar', 'vinden, een mening hebben'], ['la opinión', 'de mening'], ['en mi opinión', 'naar mijn mening'],
      ['a mi parecer', 'naar mijn idee'], ['me parece que', 'het lijkt me dat'], ['dudar', 'twijfelen'], ['la duda', 'de twijfel'], ['estar seguro/a de que', 'zeker zijn dat'],
      ['es posible que', 'het is mogelijk dat'], ['es probable que', 'het is waarschijnlijk dat'], ['es importante que', 'het is belangrijk dat'], ['es necesario que', 'het is nodig dat'],
      ['es una lástima que', 'het is jammer dat'], ['es verdad que', 'het is waar dat'], ['es evidente que', 'het is duidelijk dat'], ['me alegra que', 'het maakt me blij dat'],
      ['me molesta que', 'het stoort me dat'], ['me preocupa que', 'het baart me zorgen dat'], ['me sorprende que', 'het verbaast me dat'], ['me da miedo que', 'ik ben bang dat'],
      ['me da pena que', 'ik vind het jammer / sneu dat'], ['tener razón', 'gelijk hebben'], ['estar de acuerdo (con)', 'het eens zijn (met)'], ['¡para nada!', 'helemaal niet!'],
      ['depende', 'het hangt ervan af'], ['la temporada', 'het seizoen'], ['el capítulo', 'de aflevering', 'ook: el episodio'], ['el final', 'het einde'], ['el personaje', 'het personage'],
      ['la telenovela', 'de soapserie'], ['exagerado / exagerada', 'overdreven'], ['¡qué oso!', 'wat gênant!', 'MX · CO (informeel)'], ['¡qué boleta!', 'wat gênant / ordinair!', 'CO (informeel)'],
      ['parcero / parcera', 'maat, vriend(in)', 'CO (Medellín)']
    ],
    grammar: [
      { t: 'Mening: indicativo of subjuntivo?', es: 'Creo que / No creo que',
        html: `<p>Geef je een <b>bevestigende mening</b>, dan volgt de gewone indicativo: <i>Creo que <b>tienes</b> razón.</i> · <i>Pienso que <b>es</b> una buena idea.</i> · <i>Me parece que <b>va</b> a llover.</i></p>
<p>Zet je er een <b>ontkenning</b> voor, dan wordt het een twijfel en volgt de <b>subjuntivo</b>: <i>No creo que <b>tengas</b> razón.</i> · <i>No pienso que <b>sea</b> una buena idea.</i></p>
<p>Ook na <b>dudar que</b> volgt de subjuntivo: <i>Dudo que <b>venga</b>.</i> Maar na <b>estar seguro de que</b> en <b>no dudar que</b> komt de indicativo: <i>Estoy seguro de que <b>viene</b>.</i></p>`,
        table: [['indicativo (zekerheid)', 'subjuntivo (twijfel)'], ['Creo que es verdad.', 'No creo que sea verdad.'], ['Pienso que viene.', 'No pienso que venga.'], ['Estoy seguro de que lo sabe.', 'Dudo que lo sepa.'], ['Es verdad que es caro.', 'No es verdad que sea caro.']],
        sum: 'Creo que + indicativo. No creo que / dudo que + subjuntivo.' },
      { t: 'Onpersoonlijke oordelen: es importante que', es: 'Es + adjetivo + que',
        html: `<p>Na <b>es + bijvoeglijk naamwoord + que</b> volgt de <b>subjuntivo</b>, omdat je een oordeel geeft en geen feit meldt: <i>Es importante que <b>duermas</b> bien.</i> · <i>Es posible que <b>llegue</b> tarde.</i> · <i>Es una lástima que no <b>puedas</b> venir.</i></p>
<p><b>Uitzondering:</b> uitdrukkingen die <b>zekerheid</b> geven, krijgen de indicativo: <i>es verdad que, es cierto que, es evidente que, es obvio que, está claro que</i>.</p>
<p>Zonder ander onderwerp gebruik je de infinitief: <i>Es importante dormir bien.</i></p>`,
        sum: 'Es importante / posible / necesario que + subjuntivo. Es verdad / obvio que + indicativo.' },
      { t: 'Gevoelens: me alegra que', es: 'Verbos de sentimiento',
        html: `<p>Werkwoorden die een <b>gevoel</b> uitdrukken, werken net als <i>gustar</i>, en krijgen daarna <b>que + subjuntivo</b> als het over iemand anders gaat:</p>
<p><i>Me alegra que <b>estés</b> aquí.</i> · <i>Me molesta que la gente <b>hable</b> en el cine.</i> · <i>Nos preocupa que <b>haya</b> tanto tráfico.</i> · <i>Me sorprende que no lo <b>sepas</b>.</i></p>
<p>Gaat het over jezelf, dan volgt de infinitief: <i>Me alegra estar aquí.</i></p>`,
        ex: [['Me da pena que te vayas tan pronto.', 'Ik vind het jammer dat je zo snel weggaat.'], ['Nos sorprende que el final sea tan triste.', 'Het verbaast ons dat het einde zo verdrietig is.']],
        sum: 'Me alegra / molesta / preocupa que + subjuntivo.' }
    ],
    verbs: ['ser', 'tener', 'haber', 'saber', 'poder', 'venir', 'estar', 'llegar', 'creer', 'pensar', 'dudar', 'molestar'], tenses: ['subj', 'pres'],
    dialogue: {
      t: '¿Viste el final?', place: 'Medellín 🇨🇴',
      lines: [
        ['Juliana', 'Parcero, ¿ya viste el último capítulo de la serie?', 'Hé maat, heb je de laatste aflevering van de serie al gezien?'],
        ['Mark', 'Sí, anoche. ¡Qué final tan raro! No creo que sea el final de verdad.', 'Ja, gisteravond. Wat een raar einde! Ik denk niet dat het echt het einde is.'],
        ['Juliana', 'Yo creo que sí. Los actores dijeron que no hay segunda temporada.', 'Ik denk van wel. De acteurs zeiden dat er geen tweede seizoen komt.'],
        ['Mark', 'Pues me sorprende que terminen así. Es una lástima que el protagonista muera.', 'Nou, het verbaast me dat ze het zo laten eindigen. Het is jammer dat de hoofdpersoon doodgaat.'],
        ['Juliana', '¿Muere? Yo no estoy segura de que muera. Es posible que esté vivo.', 'Gaat hij dood? Ik weet niet zeker of hij doodgaat. Het kan zijn dat hij nog leeft.'],
        ['Mark', 'Dudo que esté vivo después de esa explosión, Juli.', 'Ik betwijfel of hij nog leeft na die explosie, Juli.'],
        ['Juliana', 'Bueno… Lo que me molesta es que la serie muestre a Medellín solo con violencia.', 'Nou ja… Wat me stoort, is dat de serie Medellín alleen met geweld laat zien.'],
        ['Mark', 'Tienes razón. Es importante que la gente conozca la otra Medellín.', 'Je hebt gelijk. Het is belangrijk dat mensen het andere Medellín leren kennen.'],
        ['Juliana', 'Exacto. Me alegra que tú lo veas así. Muchos extranjeros solo vienen por esas series.', 'Precies. Ik ben blij dat jij het zo ziet. Veel buitenlanders komen alleen vanwege die series.'],
        ['Mark', 'Pues yo vine por el clima, la gente… ¡y las arepas!', 'Nou, ik kwam voor het klimaat, de mensen… en de arepa’s!']
      ],
      q: [
        { t: 'mc', q: '¿Qué piensa Mark del final de la serie?', o: ['No cree que sea el final de verdad', 'Cree que es perfecto', 'No lo vio'] },
        { t: 'mc', q: '¿Qué piensa Juliana del protagonista?', o: ['Es posible que esté vivo', 'Está segura de que murió', 'No le importa'] },
        { t: 'mc', q: '¿Qué le molesta a Juliana?', o: ['Que la serie muestre a Medellín solo con violencia', 'Que no haya segunda temporada', 'Que Mark no vea series'] }
      ]
    },
    culture: { t: 'Telenovelas en beleefd je mening geven', html: `<p>📺 Latijns-Amerika is de wereldkampioen van de <b>telenovela</b>. <i>Yo soy Betty, la fea</i> (Colombia) werd in meer dan twintig landen opnieuw gemaakt. Tegenwoordig zijn Mexicaanse, Colombiaanse en Argentijnse <b>series</b> op streamingdiensten wereldwijd populair.</p>
<p>🤝 Mensen geven hun mening vaak <b>indirect en vriendelijk</b>. In plaats van een harde «nee» hoor je: <i>Puede ser, pero…</i>, <i>No sé, me parece que…</i>, <i>Sí, claro, aunque…</i> Een direct «¡No tienes razón!» kan als onbeleefd overkomen.</p>
<p>🇨🇴 In Medellín zeggen vrienden <b>parce</b> of <b>parcero</b> tegen elkaar. In Mexico is dat <i>güey</i>, in Chili <i>weón</i> en in Argentinië <i>che</i> of <i>boludo</i> (alleen onder vrienden!).</p>` },
    ex: [
      { t: 'cloze', s: 'Creo que ___ razón.', h: 'tener, tú', a: ['tienes'], nl: 'Ik denk dat je gelijk hebt.', tag: 'subj-opinion' },
      { t: 'cloze', s: 'No creo que ___ razón.', h: 'tener, tú', a: ['tengas'], nl: 'Ik denk niet dat je gelijk hebt.', tag: 'subj-opinion' },
      { t: 'cloze', s: 'Dudo que mi jefe ___ mañana.', h: 'venir', a: ['venga'], nl: 'Ik betwijfel of mijn baas morgen komt.', tag: 'subj-opinion' },
      { t: 'cloze', s: 'Estoy segura de que ella ___ la respuesta.', h: 'saber', a: ['sabe'], nl: 'Ik weet zeker dat zij het antwoord weet.', x: 'Zekerheid → indicativo.', tag: 'subj-opinion' },
      { t: 'cloze', s: 'Es importante que ustedes ___ bien antes del examen.', h: 'dormir', a: ['duerman'], nl: 'Het is belangrijk dat jullie goed slapen vóór het examen.', tag: 'subj-opinion' },
      { t: 'cloze', s: 'Es posible que ___ tráfico.', a: ['haya'], o: ['haya', 'hay', 'hayga'], nl: 'Het kan zijn dat er file is.', tag: 'subj-opinion' },
      { t: 'cloze', s: 'Es verdad que Bogotá ___ muy fría.', a: ['es'], o: ['es', 'sea', 'está'], nl: 'Het is waar dat Bogota heel koud is.', x: 'Es verdad que = zekerheid → indicativo.', tag: 'subj-opinion' },
      { t: 'cloze', s: 'Me alegra que ___ aquí.', h: 'estar, tú', a: ['estés'], nl: 'Ik ben blij dat je hier bent.', tag: 'subj-emotion' },
      { t: 'cloze', s: 'Me molesta que la gente ___ en el cine.', h: 'hablar', a: ['hable'], nl: 'Het stoort me dat mensen in de bioscoop praten.', tag: 'subj-emotion' },
      { t: 'cloze', s: 'Nos preocupa que el niño no ___.', h: 'comer', a: ['coma'], nl: 'We maken ons zorgen dat het kind niet eet.', tag: 'subj-emotion' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Pienso que es una buena idea.', 'Pienso que sea una buena idea.', 'No pienso que es una buena idea.'], tag: 'subj-opinion' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Me alegra verte.', 'Me alegra que te veo.', 'Me alegro que verte.'], x: 'Zelfde persoon → infinitief.', tag: 'subj-emotion' },
      { t: 'tr', nl: 'Ik denk niet dat het zo is.', a: ['No creo que sea así.', 'No pienso que sea así.', 'No creo que así sea.'], tag: 'subj-opinion' },
      { t: 'tr', nl: 'Het is jammer dat je niet kunt komen.', a: ['Es una lástima que no puedas venir.', 'Qué lástima que no puedas venir.', 'Es una pena que no puedas venir.'], tag: 'subj-opinion' },
      { t: 'tr', nl: 'Ik ben het met je eens.', a: ['Estoy de acuerdo contigo.', 'Estoy de acuerdo.'], tag: 'vocab' },
      { t: 'order', s: 'No creo que la serie tenga otra temporada.', nl: 'Ik denk niet dat de serie nog een seizoen krijgt.', tag: 'subj-opinion' },
      { t: 'match', p: [['dudar', 'twijfelen'], ['tener razón', 'gelijk hebben'], ['estar de acuerdo', 'het eens zijn'], ['me molesta', 'het stoort me'], ['depende', 'het hangt ervan af']], tag: 'vocab' }
    ],
    say: [['No creo que sea así.', 'Ik denk niet dat het zo is.'], ['Es importante que la gente conozca la ciudad.', 'Het is belangrijk dat mensen de stad leren kennen.'], ['Me alegra que estés aquí.', 'Ik ben blij dat je er bent.'], ['Puede ser, pero me parece que…', 'Kan zijn, maar het lijkt me dat…']],
    task: { nl: 'Geef je mening over een serie, film of boek dat je kent. Gebruik creo que, no creo que, es importante que en me molesta / me alegra que.', model: 'Acabo de ver «Narcos». Creo que es una serie muy buena y que los actores son excelentes. Sin embargo, no creo que muestre la Colombia de hoy. Me molesta que mucha gente solo conozca el país por esas historias. Es importante que también vean otras series colombianas.' },
    scenario: { nl: 'Je bespreekt met een Colombiaanse vriendin een serie die jullie allebei hebben gezien.', role: 'Eres Juliana, una paisa de Medellín de 27 años, muy expresiva. Dices «parce» y «¡qué boleta!». Discutes una serie o película con el estudiante; das tu opinión con «creo que», «no creo que», y reaccionas con «me alegra que», «me molesta que». No estás de acuerdo con todo lo que dice el estudiante.', goal: 'Geef je mening en reageer op de hare met (no) creo que, dudo que en me molesta que.' },
    reading: {
      t: '¿Las telenovelas son malas para el cerebro?', type: 'Opiniestuk',
      p: [
        ['Muchos dicen que las telenovelas son tontas y exageradas. Yo no creo que sean malas. Al contrario: pienso que nos enseñan mucho sobre nuestra cultura.',
          'Veel mensen zeggen dat telenovela’s dom en overdreven zijn. Ik denk niet dat ze slecht zijn. Integendeel: ik denk dat ze ons veel leren over onze cultuur.'],
        ['Es verdad que las historias se repiten: la chica pobre se enamora del hombre rico, la familia no lo acepta y, al final, todo se arregla. Pero es normal que el público quiera finales felices.',
          'Het is waar dat de verhalen zich herhalen: het arme meisje wordt verliefd op de rijke man, de familie accepteert het niet en uiteindelijk komt alles goed. Maar het is normaal dat het publiek een gelukkig einde wil.'],
        ['Además, es importante que recordemos algo: para millones de personas que aprenden español, las telenovelas son una forma divertida de practicar. Dudo que haya un método más entretenido.',
          'Bovendien is het belangrijk dat we iets niet vergeten: voor miljoenen mensen die Spaans leren, zijn telenovela’s een leuke manier om te oefenen. Ik betwijfel of er een leukere methode bestaat.'],
        ['Lo que sí me preocupa es que muchas series muestren solo estereotipos. Ojalá que los productores cuenten historias más reales. Me alegra que algunas series nuevas ya lo estén haciendo.',
          'Wat me wel zorgen baart, is dat veel series alleen stereotypen laten zien. Hopelijk vertellen de makers realistischere verhalen. Ik ben blij dat sommige nieuwe series dat al doen.']
      ],
      gl: [['al contrario', 'integendeel'], ['arreglarse', 'goedkomen'], ['entretenido / entretenida', 'vermakelijk'], ['el estereotipo', 'het stereotype']],
      q: [
        { t: 'mc', q: '¿Qué piensa el autor de las telenovelas?', o: ['No cree que sean malas', 'Cree que son tontas', 'No las ve nunca'] },
        { t: 'mc', q: 'Según el texto, ¿qué quiere el público?', o: ['Finales felices', 'Historias tristes', 'Más violencia'] },
        { t: 'mc', q: '¿Por qué son útiles para quienes aprenden español?', o: ['Son una forma divertida de practicar', 'Tienen subtítulos en inglés', 'Son muy cortas'] },
        { t: 'mc', q: '¿Qué le preocupa al autor?', o: ['Que muchas series muestren solo estereotipos', 'Que las series sean caras', 'Que no haya telenovelas nuevas'] }
      ]
    }
  });

  /* ───────────────────────── B1 · 3 ───────────────────────── */
  U({
    id: 'b1-03', level: 'B1', icon: '🧳', title: 'Cuando llegues, avísame', nl: 'Tijd en doel: cuando, para que, antes de que + subjuntivo',
    goals: ['Over de toekomst praten met cuando, en cuanto, hasta que + subjuntivo', 'Een doel aangeven met para que + subjuntivo', 'Antes de que en después de que gebruiken'],
    vocab: [
      ['cuando', 'wanneer, als (tijd)'], ['en cuanto', 'zodra'], ['tan pronto como', 'zodra'], ['hasta que', 'totdat'], ['antes de que', 'voordat'], ['después de que', 'nadat'],
      ['una vez que', 'zodra, als eenmaal'], ['para que', 'zodat, opdat'], ['sin que', 'zonder dat'], ['avisar', 'laten weten, waarschuwen'], ['el aviso', 'de melding, waarschuwing'],
      ['el itinerario', 'de reisplanning'], ['la escala', 'de tussenstop'], ['hacer escala', 'een tussenstop maken'], ['la conexión', 'de aansluiting'], ['el embarque', 'het instappen (vliegtuig)'],
      ['la puerta de embarque', 'de gate'], ['el control de seguridad', 'de beveiliging (vliegveld)'], ['la aduana', 'de douane'], ['la migración', 'de paspoortcontrole', 'LatAm'],
      ['la maleta de mano', 'de handbagage'], ['facturar / documentar la maleta', 'de koffer inchecken', 'documentar: MX'], ['el seguro de viaje', 'de reisverzekering'],
      ['el cambio (de moneda)', 'het wisselkantoor; wisselgeld'], ['el / la anfitrión/ona', 'de gastheer / gastvrouw'], ['recoger a alguien', 'iemand ophalen'],
      ['quedarse en casa de…', 'logeren bij…'], ['tener ganas de…', 'zin hebben om…'], ['estar pendiente de…', 'letten op, bezig zijn met…'], ['¡buen viaje!', 'goede reis!'],
      ['el / la colectivero/a', 'de buschauffeur', 'AR'], ['la combi', 'het minibusje', 'PE · MX'], ['jalar', 'trekken; een lift geven', 'PE · MX: ¿Te jalo? = Zal ik je meenemen?'],
      ['al toque', 'meteen', 'PE · AR · UY (informeel)'], ['el pasaje', 'het (vlieg)ticket', 'LatAm; ES: el billete']
    ],
    grammar: [
      { t: 'Cuando + subjuntivo (toekomst)', es: 'Cuando + subjuntivo',
        html: `<p>Na <b>cuando</b> gebruik je de <b>subjuntivo</b> als het over de <b>toekomst</b> gaat (iets wat nog niet gebeurd is): <i>Cuando <b>llegues</b> a Lima, avísame.</i> (Als je in Lima aankomt, laat het me weten.)</p>
<p>Gaat het om een <b>gewoonte</b> of om het <b>verleden</b>, dan gebruik je de indicativo: <i>Cuando <b>llego</b> a casa, me ducho.</i> · <i>Cuando <b>llegué</b>, estaba lloviendo.</i></p>
<p>Hetzelfde geldt voor <b>en cuanto, tan pronto como, hasta que, después de que</b> en <b>mientras</b>.</p>
<p>⚠️ In de hoofdzin staat nooit de subjuntivo na cuando: <i>Cuando tenga dinero, <b>viajaré</b> / <b>voy a viajar</b>.</i> En nooit futuro ná cuando: <s>cuando tendré</s>.</p>`,
        table: [['situatie', 'voorbeeld'], ['toekomst → subjuntivo', 'Cuando sea grande, seré piloto.'], ['gewoonte → presente', 'Cuando hace calor, voy a la playa.'], ['verleden → indefinido / imperfecto', 'Cuando era niño, vivía en Lima.']],
        sum: 'Cuando + subjuntivo para el futuro; cuando + indicativo para hábitos y el pasado.' },
      { t: 'Para que, sin que, antes de que', es: 'Conjunciones con subjuntivo',
        html: `<p>Na <b>para que</b> (zodat), <b>sin que</b> (zonder dat) en <b>antes de que</b> (voordat) volgt <b>altijd</b> de subjuntivo, ook in het verleden (dan met een andere vorm die je in B2 leert).</p>
<p><i>Te mando la dirección para que no te pierdas.</i> · <i>Salgamos antes de que empiece a llover.</i> · <i>Me fui sin que nadie me viera.</i></p>
<p>Is het onderwerp in beide delen <b>hetzelfde</b>, dan gebruik je <b>para / sin / antes de + infinitief</b>: <i>Ahorro para viajar.</i> · <i>Desayuno antes de salir.</i></p>`,
        ex: [['Te llamo para que me cuentes todo.', 'Ik bel je zodat je me alles kunt vertellen.'], ['Ahorro para viajar a Perú.', 'Ik spaar om naar Peru te reizen.']],
        sum: 'Para que / sin que / antes de que + subjuntivo. Mismo sujeto: para / sin / antes de + infinitivo.' },
      { t: 'Plannen maken: de tijden combineren', es: 'Hablar de planes',
        html: `<p>In een toekomstplan combineer je vaak een <b>subjuntivo</b> in de bijzin met een <b>futuro</b>, <b>ir a</b> of <b>imperativo</b> in de hoofdzin:</p>
<p><i>En cuanto <b>aterrice</b>, te <b>escribo</b>.</i> (presente met toekomstbetekenis) · <i>Cuando <b>termine</b> la universidad, <b>voy a viajar</b>.</i> · <i>Cuando <b>puedas</b>, <b>llámame</b>.</i></p>
<p>🌎 In Latijns-Amerika zeggen mensen in gesprekken vaker <b>ir a + infinitief</b> dan de futuro simple.</p>`,
        sum: 'Cuando + subjuntivo, + futuro / ir a / imperativo.' }
    ],
    verbs: ['llegar', 'salir', 'terminar', 'poder', 'tener', 'ser', 'empezar', 'avisar', 'llamar', 'volver', 'ver'], tenses: ['subj', 'fut'],
    dialogue: {
      t: 'Antes del vuelo', place: 'Lima 🇵🇪',
      lines: [
        ['Rosa', 'Mark, ¿ya tienes todo para el viaje a Arequipa?', 'Mark, heb je alles al voor de reis naar Arequipa?'],
        ['Mark', 'Casi. Salgo mañana a las seis, así que tengo que estar en el aeropuerto a las cuatro.', 'Bijna. Ik vertrek morgen om zes uur, dus ik moet om vier uur op het vliegveld zijn.'],
        ['Rosa', '¡Uy, temprano! Mi primo te puede jalar al aeropuerto para que no gastes en taxi.', 'Oei, vroeg! Mijn neef kan je naar het vliegveld brengen, dan hoef je geen taxi te betalen.'],
        ['Mark', '¡Chévere! Gracias. ¿Y cuando llegue a Arequipa, quién me recoge?', 'Top! Bedankt. En als ik in Arequipa aankom, wie haalt me dan op?'],
        ['Rosa', 'Mi tía Nelly. En cuanto salgas de la aduana… bueno, no hay aduana, es un vuelo nacional. Cuando salgas, la vas a ver con un cartel.', 'Mijn tante Nelly. Zodra je door de douane bent… nou ja, er is geen douane, het is een binnenlandse vlucht. Als je naar buiten komt, zie je haar met een bordje.'],
        ['Mark', 'Perfecto. ¿Le aviso cuando aterrice?', 'Perfect. Laat ik het haar weten als ik geland ben?'],
        ['Rosa', 'Sí, escríbele al toque. Y no salgas sin que ella te encuentre, que el aeropuerto es pequeño pero hay mucha gente.', 'Ja, stuur haar meteen een bericht. En ga niet weg voordat ze je gevonden heeft, het vliegveld is klein maar er zijn veel mensen.'],
        ['Mark', 'Tranquila. Me quedo esperando hasta que llegue.', 'Rustig maar. Ik blijf wachten tot ze er is.'],
        ['Rosa', 'Y antes de que te vayas a Colca, prueba el rocoto relleno de mi tía. ¡Es el mejor de Arequipa!', 'En voordat je naar Colca gaat, moet je de gevulde rocoto van mijn tante proeven. Die is de beste van Arequipa!'],
        ['Mark', 'Cuando vuelva, te cuento todo. ¡Gracias por todo, Rosa!', 'Als ik terug ben, vertel ik je alles. Bedankt voor alles, Rosa!']
      ],
      q: [
        { t: 'mc', q: '¿Por qué el primo de Rosa lleva a Mark al aeropuerto?', o: ['Para que no gaste en taxi', 'Para que no llegue tarde', 'Porque va a Arequipa también'] },
        { t: 'mc', q: '¿Quién recoge a Mark en Arequipa?', o: ['La tía Nelly', 'El primo de Rosa', 'Rosa'] },
        { t: 'mc', q: '¿Qué tiene que hacer Mark cuando aterrice?', o: ['Escribirle a la tía', 'Ir a la aduana', 'Tomar un taxi'] }
      ]
    },
    culture: { t: 'Reizen door Latijns-Amerika', html: `<p>🚌 Binnen een land reizen veel mensen met de <b>bus</b>: in Peru, Chili en Argentinië zijn er comfortabele nachtbussen met ligstoelen (<i>bus cama</i>). In de stad rijden <b>combis</b> (🇵🇪 🇲🇽), <b>colectivos</b> (🇦🇷) of <b>busetas</b> (🇨🇴). Die stoppen vaak waar je maar wilt: zeg gewoon <i>¡Bajo en la esquina!</i> of <i>¡En la esquina, por favor!</i></p>
<p>🛂 Bij aankomst ga je door <b>migración</b> (paspoortcontrole) en <b>aduana</b> (douane). In Mexico «documenteer» je je koffer (<i>documentar</i>), in de meeste andere landen «factureer» je hem (<i>facturar</i>) of check je in (<i>chequear</i>).</p>
<p>🙋 Familie en vrienden halen je bijna altijd op van het vliegveld, vaak met een groep. En je laat het altijd even weten als je bent aangekomen: <i>¡Avísame cuando llegues!</i></p>` },
    ex: [
      { t: 'cloze', s: 'Cuando ___ a Lima, avísame.', h: 'llegar, tú', a: ['llegues'], nl: 'Als je in Lima aankomt, laat het me weten.', tag: 'subj-time' },
      { t: 'cloze', s: 'Cuando ___ a casa, siempre me ducho.', a: ['llego'], o: ['llego', 'llegue', 'llegaré'], nl: 'Als ik thuiskom, douche ik altijd.', x: 'Gewoonte → indicativo.', tag: 'subj-time' },
      { t: 'cloze', s: 'Cuando ___ grande, quiero ser piloto.', h: 'ser, yo', a: ['sea'], nl: 'Als ik groot ben, wil ik piloot worden.', tag: 'subj-time' },
      { t: 'cloze', s: 'En cuanto ___ el trabajo, te llamo.', h: 'terminar, yo', a: ['termine'], nl: 'Zodra ik klaar ben met werken, bel ik je.', tag: 'subj-time' },
      { t: 'cloze', s: 'Espera aquí hasta que yo ___.', h: 'volver', a: ['vuelva'], nl: 'Wacht hier tot ik terugkom.', tag: 'subj-time' },
      { t: 'cloze', s: 'Te mando el mapa para que no te ___.', h: 'perder', a: ['pierdas'], nl: 'Ik stuur je de kaart zodat je niet verdwaalt.', tag: 'subj-purpose' },
      { t: 'cloze', s: 'Salgamos antes de que ___ a llover.', h: 'empezar', a: ['empiece'], nl: 'Laten we gaan voordat het begint te regenen.', tag: 'subj-purpose' },
      { t: 'cloze', s: 'Ahorro ___ viajar a Perú.', a: ['para'], o: ['para', 'para que', 'por'], nl: 'Ik spaar om naar Peru te reizen.', x: 'Zelfde onderwerp → para + infinitief.', tag: 'subj-purpose' },
      { t: 'cloze', s: 'Mis papás trabajan mucho para que yo ___ estudiar.', h: 'poder', a: ['pueda'], nl: 'Mijn ouders werken hard zodat ik kan studeren.', tag: 'subj-purpose' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Cuando tenga tiempo, voy a leer ese libro.', 'Cuando tendré tiempo, voy a leer ese libro.', 'Cuando tengo tiempo, leeré ese libro mañana.'], x: 'Na cuando nooit futuro; voor de toekomst gebruik je de subjuntivo.', tag: 'subj-time' },
      { t: 'mc', q: 'Welke zin gaat over het verleden?', o: ['Cuando llegué, todos dormían.', 'Cuando llegue, todos van a dormir.', 'Cuando llegues, todos dormirán.'], tag: 'subj-time' },
      { t: 'tr', nl: 'Bel me als je kunt.', a: ['Llámame cuando puedas.', 'Cuando puedas, llámame.', 'Llámame cuando puedas, por favor.'], tag: 'subj-time' },
      { t: 'tr', nl: 'Zodra ik geland ben, stuur ik je een bericht.', a: ['En cuanto aterrice, te escribo.', 'En cuanto aterrice, te mando un mensaje.', 'Tan pronto como aterrice, te escribo.', 'En cuanto aterrice, te voy a escribir.', 'En cuanto aterrice te escribo.'], tag: 'subj-time' },
      { t: 'tr', nl: 'Ik leg het je uit zodat je het begrijpt.', a: ['Te lo explico para que lo entiendas.', 'Te lo explico para que entiendas.', 'Te lo explico para que lo comprendas.'], tag: 'subj-purpose' },
      { t: 'order', s: 'Cuando vuelva de Arequipa te cuento todo.', nl: 'Als ik terug ben uit Arequipa, vertel ik je alles.', tag: 'subj-time' },
      { t: 'match', p: [['en cuanto', 'zodra'], ['hasta que', 'totdat'], ['antes de que', 'voordat'], ['para que', 'zodat'], ['sin que', 'zonder dat']], tag: 'subj-purpose' }
    ],
    say: [['Avísame cuando llegues.', 'Laat het me weten als je er bent.'], ['En cuanto aterrice, te escribo.', 'Zodra ik geland ben, stuur ik je een bericht.'], ['Te lo mando para que no te pierdas.', 'Ik stuur het je zodat je niet verdwaalt.'], ['Cuando termine la universidad, voy a viajar.', 'Als ik klaar ben met studeren, ga ik reizen.']],
    task: { nl: 'Schrijf een bericht aan een vriend(in) die bij jou komt logeren. Leg uit wat hij of zij moet doen als hij aankomt, en wat jullie gaan doen. Gebruik cuando, en cuanto, hasta que en para que.', model: '¡Hola, Rosa! Cuando llegues al aeropuerto de Schiphol, toma el tren a Utrecht. En cuanto salgas de la estación, llámame y te recojo en bici. Te dejo una llave con mi vecina para que puedas entrar si no estoy. Cuando estés aquí, vamos a pasear por los canales. ¡Avísame cuando aterrices!' },
    scenario: { nl: 'Je Peruaanse vriendin helpt je je reis plannen en geeft je allerlei instructies.', role: 'Eres Rosa, una limeña de 35 años, muy organizada y cariñosa. Ayudas al estudiante a planear un viaje por Perú (Arequipa, Cusco, el norte). Le das instrucciones con «cuando llegues», «en cuanto», «para que» y le preguntas qué va a hacer cuando esté allá. Usas «al toque», «chévere» y «jalar».', goal: 'Bespreek een reisplan met cuando, en cuanto, hasta que en para que + subjuntivo.' },
    reading: {
      t: 'Antes de viajar a Sudamérica', type: 'Checklist op een reisblog',
      p: [
        ['¿Vas a viajar a Sudamérica por primera vez? Aquí tienes nuestros consejos para que todo salga bien. Léelos antes de que hagas la maleta.',
          'Ga je voor het eerst naar Zuid-Amerika? Hier zijn onze tips zodat alles goed gaat. Lees ze voordat je je koffer inpakt.'],
        ['Antes de salir: compra un seguro de viaje y saca copias de tu pasaporte. Manda una copia a tu correo para que la tengas siempre, aunque pierdas el celular.',
          'Voor vertrek: sluit een reisverzekering af en maak kopieën van je paspoort. Stuur een kopie naar je e-mail zodat je hem altijd hebt, ook als je je mobiel kwijtraakt.'],
        ['Cuando llegues: cambia solo un poco de dinero en el aeropuerto, porque el cambio es malo. Es mejor que saques plata de un cajero en la ciudad. Y cuando tomes un taxi, pide que usen el taxímetro o acuerda el precio antes de subir.',
          'Als je aankomt: wissel maar een klein beetje geld op het vliegveld, want de koers is slecht. Je kunt beter geld pinnen in de stad. En als je een taxi neemt, vraag dan of ze de meter gebruiken of spreek de prijs af voordat je instapt.'],
        ['Durante el viaje: no le muestres a nadie dónde guardas el dinero. Y en cuanto tengas wifi, avísale a tu familia que estás bien. ¡Ellos se van a preocupar hasta que les escribas!',
          'Tijdens de reis: laat niemand zien waar je je geld bewaart. En zodra je wifi hebt, laat je familie weten dat het goed met je gaat. Ze maken zich zorgen tot je ze schrijft!']
      ],
      gl: [['salir bien', 'goed aflopen'], ['sacar copias', 'kopieën maken'], ['el taxímetro', 'de taximeter'], ['acordar (ue) el precio', 'de prijs afspreken']],
      q: [
        { t: 'mc', q: '¿Por qué hay que mandar una copia del pasaporte al correo?', o: ['Para tenerla aunque pierdas el celular', 'Para que la policía la vea', 'Porque lo pide la aduana'] },
        { t: 'mc', q: '¿Por qué no es bueno cambiar mucho dinero en el aeropuerto?', o: ['Porque el cambio es malo', 'Porque está prohibido', 'Porque no hay cajeros'] },
        { t: 'mc', q: '¿Qué debes hacer cuando tomes un taxi?', o: ['Pedir el taxímetro o acordar el precio', 'Pagar con tarjeta', 'Sentarte adelante'] },
        { t: 'mc', q: '¿Qué hay que hacer en cuanto tengas wifi?', o: ['Avisar a tu familia que estás bien', 'Buscar un hotel', 'Cambiar dinero'] }
      ]
    }
  });

  /* ───────────────────────── B1 · 4 ───────────────────────── */
  U({
    id: 'b1-04', level: 'B1', icon: '🤔', title: 'Yo que tú…', nl: 'De condicional: beleefd vragen, advies en hypotheses',
    goals: ['De condicional vormen, ook van onregelmatige werkwoorden', 'Beleefd iets vragen en advies geven (¿podrías…?, yo que tú…, deberías…)', 'Over denkbeeldige situaties en vermoedens praten'],
    vocab: [
      ['me gustaría', 'ik zou graag willen'], ['¿podría…?', 'zou u kunnen…?'], ['¿te importaría…?', 'zou je het erg vinden om…?'], ['yo que tú…', 'als ik jou was…'],
      ['yo en tu lugar…', 'als ik in jouw plaats was…'], ['deberías…', 'je zou moeten…'], ['tendrías que…', 'je zou moeten…'], ['valdría la pena', 'het zou de moeite waard zijn'],
      ['el consejo', 'het advies'], ['recomendable', 'aan te raden'], ['el dilema', 'het dilemma'], ['la decisión', 'de beslissing'], ['tomar una decisión', 'een beslissing nemen'],
      ['arriesgarse', 'een risico nemen'], ['el riesgo', 'het risico'], ['la ventaja', 'het voordeel'], ['la desventaja', 'het nadeel'], ['mudarse al extranjero', 'naar het buitenland verhuizen'],
      ['echar raíces', 'wortel schieten'], ['la nostalgia', 'het heimwee'], ['la oportunidad', 'de kans'], ['aprovechar', 'benutten, profiteren van'], ['el sueño (de mi vida)', 'de droom (van mijn leven)'],
      ['ganarse la lotería', 'de loterij winnen', 'LatAm: ganarse; ES: ganar'], ['dar la vuelta al mundo', 'een wereldreis maken'], ['renunciar al trabajo', 'je baan opzeggen'],
      ['por supuesto', 'natuurlijk'], ['quizás', 'misschien'], ['¡ni loco / ni loca!', 'echt niet!, voor geen goud!'], ['el depa', 'het appartement', 'CL · MX (informeel)'],
      ['bacán', 'gaaf, tof', 'CL · PE'], ['¿cachai?', 'snap je?', 'CL (informeel)'], ['al tiro', 'meteen', 'CL'], ['fome', 'saai', 'CL']
    ],
    grammar: [
      { t: 'De condicional: vorming', es: 'El condicional',
        html: `<p>De <b>condicional</b> (zou + werkwoord) maak je net als de futuro: je zet de uitgang achter de <b>hele infinitief</b>. De uitgangen zijn dezelfde als die van de imperfecto van <i>-er/-ir</i>: <b>-ía, -ías, -ía, -íamos, -ían</b>.</p>
<p><i>hablar → hablaría</i> · <i>comer → comería</i> · <i>vivir → viviría</i></p>
<p>De onregelmatige stammen zijn <b>dezelfde als bij de futuro</b>: <i>tener → tendría, poder → podría, hacer → haría, decir → diría, salir → saldría, venir → vendría, poner → pondría, saber → sabría, querer → querría, haber → habría</i>.</p>`,
        table: [['', 'hablar', 'poder', 'hacer'], ['yo', 'hablaría', 'podría', 'haría'], ['tú', 'hablarías', 'podrías', 'harías'], ['él / ella / usted', 'hablaría', 'podría', 'haría'], ['nosotros', 'hablaríamos', 'podríamos', 'haríamos'], ['ellos / ustedes', 'hablarían', 'podrían', 'harían']],
        sum: 'Condicional: infinitivo + -ía, -ías, -ía, -íamos, -ían. Raíces irregulares como el futuro.' },
      { t: 'Beleefd vragen en advies geven', es: 'Cortesía y consejos',
        html: `<p>Met de condicional klinkt een vraag <b>beleefder</b>: <i>¿Podría ayudarme?</i> (Zou u me kunnen helpen?) · <i>¿Te importaría cerrar la ventana?</i> · <i>Me gustaría reservar una mesa.</i></p>
<p>Voor <b>advies</b> gebruik je: <b>yo que tú</b> / <b>yo en tu lugar</b> + condicional, of <b>deberías / tendrías que</b> + infinitief: <i>Yo que tú, aceptaría el trabajo.</i> · <i>Deberías descansar más.</i></p>
<p>💡 <i>Deberías</i> is zachter dan <i>debes</i>, en <i>debes</i> is zachter dan <i>tienes que</i>.</p>`,
        ex: [['¿Podrías hablar más despacio?', 'Zou je langzamer kunnen praten?'], ['Yo en tu lugar, no le diría nada.', 'Als ik jou was, zou ik niets tegen haar zeggen.']],
        sum: '¿Podría…? / Me gustaría… / Yo que tú + condicional / Deberías + infinitivo.' },
      { t: 'Denkbeeldige situaties en vermoedens', es: 'Hipótesis y probabilidad',
        html: `<p>Je gebruikt de condicional voor wat je <b>zou doen</b> in een denkbeeldige situatie: <i>Con un millón de dólares, daría la vuelta al mundo.</i> · <i>¿Qué harías tú?</i></p>
<p>Met de condicional kun je ook een <b>vermoeden over het verleden</b> uitspreken: <i>¿Qué hora era? — Serían las diez.</i> (Het zal ongeveer tien uur geweest zijn.) · <i>No vino a la fiesta. Estaría cansado.</i></p>
<p>📌 Voor een zin met <i>si</i> (als ik rijk wás…) heb je de <b>imperfecto de subjuntivo</b> nodig (<i>si tuviera</i>). Die leer je in B2. Herken hem alvast: <i>Si tuviera dinero, viajaría.</i></p>`,
        sum: 'Condicional para situaciones imaginarias (yo viajaría…) y para suponer en el pasado (serían las diez).' }
    ],
    verbs: ['hablar', 'poder', 'hacer', 'tener', 'decir', 'salir', 'venir', 'poner', 'saber', 'querer', 'ser', 'deber', 'vivir', 'ir'], tenses: ['cond'],
    dialogue: {
      t: '¿Me voy o me quedo?', place: 'Santiago de Chile 🇨🇱',
      lines: [
        ['Catalina', 'Oye, Mark, necesito un consejo. Me ofrecieron una pega en Ámsterdam.', 'Hé Mark, ik heb advies nodig. Ik heb een baan aangeboden gekregen in Amsterdam.'],
        ['Mark', '¡Qué bacán! ¿Y cuál es el problema?', 'Wat gaaf! En wat is het probleem?'],
        ['Catalina', 'Que no sé si me atrevo. Tendría que dejar a mi familia, mi depa, todo… ¿Tú qué harías?', 'Dat ik niet weet of ik het durf. Ik zou mijn familie, mijn appartement, alles moeten achterlaten… Wat zou jij doen?'],
        ['Mark', 'Yo que tú, aceptaría al tiro. Es una oportunidad increíble.', 'Als ik jou was, zou ik het meteen aannemen. Het is een ongelooflijke kans.'],
        ['Catalina', 'Pero extrañaría mucho a mi mamá. Y en Holanda hace un frío terrible, ¿cachai?', 'Maar ik zou mijn moeder heel erg missen. En in Nederland is het vreselijk koud, snap je?'],
        ['Mark', 'Bueno, frío hace, eso es verdad. Pero podrías volver a Chile en vacaciones.', 'Nou, koud is het, dat is waar. Maar je zou in de vakantie terug naar Chili kunnen.'],
        ['Catalina', 'Sí… ¿Y crees que me costaría mucho aprender holandés?', 'Ja… En denk je dat het me veel moeite zou kosten om Nederlands te leren?'],
        ['Mark', 'Al principio, sí. Yo en tu lugar tomaría clases antes de irme. Te ayudaría bastante.', 'In het begin wel. Als ik jou was, zou ik lessen nemen voordat ik ging. Dat zou je flink helpen.'],
        ['Catalina', '¿Y me ayudarías a buscar depa allá?', 'En zou jij me helpen een appartement te zoeken daar?'],
        ['Mark', '¡Por supuesto! Y te presentaría a mis amigos. No estarías sola.', 'Natuurlijk! En ik zou je aan mijn vrienden voorstellen. Je zou niet alleen zijn.'],
        ['Catalina', 'Ya, me convenciste. Mañana le escribo a la empresa.', 'Oké, je hebt me overtuigd. Morgen schrijf ik het bedrijf.']
      ],
      q: [
        { t: 'mc', q: '¿Qué le ofrecieron a Catalina?', o: ['Un trabajo en Ámsterdam', 'Un depa en Santiago', 'Clases de holandés'] },
        { t: 'mc', q: '¿Qué haría Mark en su lugar?', o: ['Aceptaría al tiro', 'Se quedaría en Chile', 'Lo pensaría un año'] },
        { t: 'mc', q: '¿Qué extrañaría Catalina?', o: ['A su mamá', 'Su trabajo', 'El frío'] }
      ]
    },
    culture: { t: 'Chileens Spaans', html: `<p>🇨🇱 Chilenen praten snel, slikken letters in en hebben veel eigen woorden. Een paar die je meteen hoort:</p>
<p><b>la pega</b> (het werk) · <b>bacán</b> (gaaf) · <b>fome</b> (saai) · <b>al tiro</b> (meteen) · <b>el depa</b> (het appartement) · <b>la once</b> (de lichte avondmaaltijd met thee en brood, rond 6 uur) · <b>¿cachai?</b> (snap je?) · <b>¡ya!</b> (oké).</p>
<p>In informele gesprekken gebruiken Chilenen een eigen vorm van de tú-vervoeging: <i>¿Cómo estái?</i> (= ¿cómo estás?), <i>¿Querís?</i> (= ¿quieres?). Je hoeft dit niet zelf te gebruiken, maar herkennen is handig.</p>
<p>💬 Advies vragen aan vrienden en familie is heel normaal. Een grote beslissing neem je zelden alleen: <i>¿Tú qué harías?</i></p>` },
    ex: [
      { t: 'cloze', s: 'Me ___ viajar a Chile.', h: 'gustar', a: ['gustaría'], nl: 'Ik zou graag naar Chili reizen.', tag: 'conditional' },
      { t: 'cloze', s: '¿___ ayudarme con la maleta?', h: 'poder, usted', a: ['Podría'], nl: 'Zou u me kunnen helpen met de koffer?', tag: 'conditional' },
      { t: 'cloze', s: 'Yo que tú, no lo ___.', h: 'hacer', a: ['haría'], nl: 'Als ik jou was, zou ik het niet doen.', tag: 'conditional' },
      { t: 'cloze', s: 'Con más tiempo, nosotros ___ más.', h: 'salir', a: ['saldríamos'], nl: 'Met meer tijd zouden we vaker uitgaan.', tag: 'conditional' },
      { t: 'cloze', s: 'Tú ___ descansar más.', h: 'deber', a: ['deberías'], nl: 'Je zou meer moeten rusten.', tag: 'conditional' },
      { t: 'cloze', s: '¿Qué ___ ustedes con un millón de dólares?', h: 'hacer', a: ['harían'], nl: 'Wat zouden jullie doen met een miljoen dollar?', tag: 'conditional' },
      { t: 'cloze', s: 'Yo en tu lugar, no le ___ nada.', h: 'decir', a: ['diría'], nl: 'Als ik jou was, zou ik niets tegen hem zeggen.', tag: 'conditional' },
      { t: 'cloze', s: 'No vino a clase. ___ enfermo.', h: 'estar', a: ['Estaría'], nl: 'Hij kwam niet naar de les. Hij zal wel ziek geweest zijn.', tag: 'conditional' },
      { t: 'mc', q: 'Condicional van «tener» (yo):', o: ['tendría', 'tenería', 'tenría'], tag: 'conditional' },
      { t: 'mc', q: 'Condicional van «querer» (tú):', o: ['querrías', 'quererías', 'quierías'], tag: 'conditional' },
      { t: 'mc', q: 'Wat is het beleefdst?', o: ['¿Podría traerme la cuenta, por favor?', '¡Tráigame la cuenta!', 'Quiero la cuenta.'], tag: 'conditional' },
      { t: 'tr', nl: 'Wat zou jij doen?', a: ['¿Qué harías tú?', '¿Tú qué harías?', '¿Qué harías?'], tag: 'conditional' },
      { t: 'tr', nl: 'Ik zou graag een tafel willen reserveren.', a: ['Me gustaría reservar una mesa.', 'Quisiera reservar una mesa.'], tag: 'conditional' },
      { t: 'tr', nl: 'Als ik jou was, zou ik de baan aannemen.', a: ['Yo que tú, aceptaría el trabajo.', 'Yo en tu lugar, aceptaría el trabajo.', 'Yo que tú aceptaría el trabajo.', 'Yo en tu lugar aceptaría el trabajo.', 'Yo que tú, aceptaría la pega.'], tag: 'conditional' },
      { t: 'order', s: 'Yo en tu lugar tomaría clases antes de irme.', nl: 'Als ik jou was, zou ik lessen nemen voordat ik ging.', tag: 'conditional' },
      { t: 'match', p: [['la pega', 'het werk (CL)'], ['bacán', 'gaaf (CL)'], ['fome', 'saai (CL)'], ['al tiro', 'meteen (CL)'], ['¿cachai?', 'snap je? (CL)']], tag: 'vocab' }
    ],
    say: [['¿Tú qué harías en mi lugar?', 'Wat zou jij doen in mijn plaats?'], ['Yo que tú, aceptaría al tiro.', 'Als ik jou was, zou ik het meteen aannemen.'], ['¿Podría ayudarme, por favor?', 'Zou u me kunnen helpen, alstublieft?'], ['Me gustaría vivir un año en Chile.', 'Ik zou graag een jaar in Chili wonen.']],
    task: { nl: 'Een vriend twijfelt of hij een jaar in Latijns-Amerika gaat werken. Schrijf hem een bericht met advies: wat zou jij doen, wat zijn de voor- en nadelen? Gebruik minstens zes vormen van de condicional.', model: '¡Hola, Tim! Yo que tú, me iría sin dudarlo. Sería una experiencia increíble y aprenderías español muy rápido. Claro, extrañarías a tu familia, pero podrías llamarlos todos los días. Yo en tu lugar, buscaría un trabajo en Santiago o en Medellín. Te gustarían mucho. ¿Qué te parecería si te visito allá?' },
    scenario: { nl: 'Een Chileense vriendin twijfelt over een grote beslissing en vraagt jouw advies.', role: 'Eres Catalina, una santiaguina de 29 años. Tienes un dilema: te ofrecieron un trabajo en el extranjero, pero tienes miedo de dejar a tu familia. Pides consejo al estudiante («¿tú qué harías?») y das razones a favor y en contra. Usas palabras chilenas: «pega», «bacán», «al tiro», «¿cachai?», «fome».', goal: 'Geef advies met yo que tú, deberías en de condicional.' },
    reading: {
      t: '¿Qué harías con un año libre?', type: 'Enquête',
      p: [
        ['Le preguntamos a cuatro personas de diferentes países qué harían si tuvieran un año entero sin trabajar y con dinero suficiente. Estas fueron sus respuestas.',
          'We vroegen vier mensen uit verschillende landen wat ze zouden doen als ze een heel jaar niet hoefden te werken en genoeg geld hadden. Dit waren hun antwoorden.'],
        ['Valentina, 34, Buenos Aires: «Yo daría la vuelta al mundo. Empezaría por Asia, porque nunca he estado allí. Después iría a África. ¡Volvería a casa con mil historias!»',
          'Valentina, 34, Buenos Aires: «Ik zou een wereldreis maken. Ik zou beginnen in Azië, want daar ben ik nog nooit geweest. Daarna zou ik naar Afrika gaan. Ik zou thuiskomen met duizend verhalen!»'],
        ['Hernán, 52, Quito: «Yo no viajaría. Me quedaría en mi finca, cultivaría café y pasaría más tiempo con mis nietos. La felicidad está en las cosas simples.»',
          'Hernán, 52, Quito: «Ik zou niet reizen. Ik zou op mijn boerderij blijven, koffie verbouwen en meer tijd met mijn kleinkinderen doorbrengen. Het geluk zit in de simpele dingen.»'],
        ['Itzel, 25, Oaxaca: «Estudiaría. Me gustaría aprender cocina francesa y abrir un restaurante que mezcle Francia y México.» Y Tomás, 40, Valparaíso: «Dormiría. Durante un mes completo. Después, ya vería.»',
          'Itzel, 25, Oaxaca: «Ik zou studeren. Ik zou graag de Franse keuken leren en een restaurant openen dat Frankrijk en Mexico combineert.» En Tomás, 40, Valparaíso: «Ik zou slapen. Een hele maand lang. Daarna zou ik wel zien.»']
      ],
      gl: [['entero / entera', 'heel, volledig'], ['la finca', 'de boerderij, het landgoed'], ['cultivar', 'verbouwen'], ['ya vería', 'dan zou ik wel zien']],
      q: [
        { t: 'mc', q: '¿Por dónde empezaría Valentina su viaje?', o: ['Por Asia', 'Por África', 'Por Europa'] },
        { t: 'mc', q: '¿Qué haría Hernán?', o: ['Se quedaría en su finca con sus nietos', 'Viajaría por el mundo', 'Abriría un restaurante'] },
        { t: 'mc', q: '¿Qué le gustaría aprender a Itzel?', o: ['Cocina francesa', 'Francés', 'A cultivar café'] },
        { t: 'mc', q: '¿Qué haría Tomás primero?', o: ['Dormiría un mes', 'Iría a Valparaíso', 'Trabajaría más'] }
      ]
    }
  });

  /* ───────────────────────── B1 · 5 ───────────────────────── */
  U({
    id: 'b1-05', level: 'B1', icon: '📜', title: 'Cuando llegué, ya se había ido', nl: 'Vertellen over het verleden: de pluscuamperfecto',
    goals: ['De pluscuamperfecto vormen en gebruiken (había + participio)', 'Een verhaal vertellen met indefinido, imperfecto en pluscuamperfecto', 'Ya, todavía no, nunca antes en de volgorde in een verhaal'],
    vocab: [
      ['para entonces', 'tegen die tijd'], ['aún no', 'nog niet'], ['nunca antes', 'nooit eerder'], ['hasta entonces', 'tot dan toe'], ['la anécdota', 'de anekdote'], ['el recuerdo', 'de herinnering'],
      ['recordar (ue)', 'zich herinneren'], ['la memoria', 'het geheugen'], ['olvidarse de', 'vergeten'], ['darse cuenta de', 'beseffen, doorhebben'], ['resulta que…', 'het blijkt dat…; nou, het zit zo…'],
      ['al día siguiente', 'de volgende dag'], ['la noche anterior', 'de avond ervoor'], ['unos días antes', 'een paar dagen eerder'], ['de golpe', 'ineens'], ['por casualidad', 'toevallig'],
      ['la casualidad', 'het toeval'], ['¡qué casualidad!', 'wat toevallig!'], ['el malentendido', 'het misverstand'], ['equivocarse', 'zich vergissen'], ['la equivocación', 'de vergissing'],
      ['avergonzado / avergonzada', 'beschaamd'], ['aliviado / aliviada', 'opgelucht'], ['la reunión familiar', 'de familiebijeenkomst'], ['el / la novio/a (de boda)', 'de bruidegom / bruid'],
      ['la ceremonia', 'de ceremonie'], ['el / la invitado/a', 'de gast'], ['la invitación', 'de uitnodiging'], ['confundir', 'verwarren'], ['la fecha', 'de datum'],
      ['el pastel', 'de taart', 'MX; CO/VE: la torta · AR: la torta'], ['¡no manches!', 'dat meen je niet!', 'MX (informeel)'], ['¡qué vergüenza!', 'wat gênant!'],
      ['el chisme', 'de roddel'], ['echar a perder', 'verpesten']
    ],
    grammar: [
      { t: 'De pluscuamperfecto', es: 'El pretérito pluscuamperfecto',
        html: `<p>De <b>pluscuamperfecto</b> (voltooid verleden tijd: <i>ik was gegaan, ik had gegeten</i>) maak je met de <b>imperfecto van haber</b> + <b>participio</b>.</p>
<p>Je gebruikt hem voor iets wat <b>vóór</b> een ander moment in het verleden al gebeurd was: <i>Cuando llegué a la estación, el tren <b>ya había salido</b>.</i> (Toen ik op het station aankwam, was de trein al vertrokken.)</p>
<p>De participios zijn dezelfde als bij de perfecto: <i>hablado, comido, vivido</i> en onregelmatig <i>hecho, dicho, visto, puesto, vuelto, escrito, abierto, roto, muerto</i>.</p>`,
        table: [['', 'haber (imperfecto)', '+ participio'], ['yo', 'había', 'salido'], ['tú', 'habías', 'comido'], ['él / ella / usted', 'había', 'visto'], ['nosotros', 'habíamos', 'hecho'], ['ellos / ustedes', 'habían', 'dicho']],
        sum: 'Pluscuamperfecto: había + participio. Una acción anterior a otra acción pasada.' },
      { t: 'Een verhaal vertellen: drie verleden tijden', es: 'Narrar en pasado',
        html: `<p>In een verhaal heeft elke tijd een eigen taak:</p>
<p><b>Indefinido</b> = de gebeurtenissen die het verhaal vooruit duwen: <i>llegué, vi, me fui</i>.<br><b>Imperfecto</b> = het decor en de achtergrond: <i>hacía frío, había mucha gente, estaba nervioso</i>.<br><b>Pluscuamperfecto</b> = wat er al eerder gebeurd was: <i>no había dormido, se habían olvidado</i>.</p>
<p><i>Era sábado y hacía calor. Llegué a la boda a las seis, pero la ceremonia ya había terminado. ¡Me había equivocado de hora!</i></p>`,
        sum: 'Indefinido: acciones. Imperfecto: descripción. Pluscuamperfecto: lo que pasó antes.' },
      { t: 'Ya, todavía no, nunca antes', es: 'Ya / todavía no / nunca antes',
        html: `<p>Met de pluscuamperfecto komen vaak <b>ya</b> (al), <b>todavía no</b> (nog niet) en <b>nunca antes</b> / <b>nunca</b> (nooit eerder) voor:</p>
<p><i>A los veinte años ya había vivido en tres países.</i> · <i>Cuando me llamaste, todavía no me había levantado.</i> · <i>Nunca antes había visto el mar.</i></p>
<p>📌 Alle delen blijven bij elkaar: je zet niets tussen <i>había</i> en het participio. Voornaamwoorden komen ervoor: <i>Ya <b>lo</b> había hecho.</i> · <i>Todavía no <b>se</b> había despertado.</i></p>`,
        sum: 'Ya / todavía no / nunca antes + pluscuamperfecto. Los pronombres van delante de «había».' }
    ],
    verbs: ['salir', 'hacer', 'decir', 'ver', 'poner', 'volver', 'escribir', 'comer', 'terminar', 'olvidar', 'llegar', 'ir', 'levantarse'], tenses: ['plus', 'pret', 'imp'],
    dialogue: {
      t: 'La boda equivocada', place: 'Oaxaca 🇲🇽',
      lines: [
        ['Lupita', '¿Cómo te fue en la boda de mi prima el sábado?', 'Hoe was de bruiloft van mijn nicht zaterdag?'],
        ['Mark', 'Uf… Resulta que llegué a la iglesia a las cinco y la ceremonia ya había empezado.', 'Pff… Nou, het zit zo: ik kwam om vijf uur bij de kerk aan en de ceremonie was al begonnen.'],
        ['Lupita', '¿Cómo? Pero la invitación decía a las cinco y media.', 'Wat? Maar op de uitnodiging stond half zes.'],
        ['Mark', 'Eso pensé yo. Me senté atrás y no conocía a nadie. Nunca antes había visto a esa familia.', 'Dat dacht ik ook. Ik ging achterin zitten en ik kende niemand. Ik had die familie nog nooit eerder gezien.'],
        ['Lupita', '¡No manches! ¿Te habías equivocado de iglesia?', 'Dat meen je niet! Was je in de verkeerde kerk?'],
        ['Mark', 'Sí. Cuando la novia entró, me di cuenta de que no era tu prima.', 'Ja. Toen de bruid binnenkwam, had ik door dat het jouw nicht niet was.'],
        ['Lupita', '¡Qué oso! ¿Y qué hiciste?', 'Wat gênant! En wat heb je gedaan?'],
        ['Mark', 'Salí despacito, pero una señora ya me había visto. Me preguntó si era amigo del novio.', 'Ik ging heel zachtjes naar buiten, maar een mevrouw had me al gezien. Ze vroeg of ik een vriend van de bruidegom was.'],
        ['Lupita', 'Y cuando por fin llegaste a la boda correcta…', 'En toen je eindelijk bij de juiste bruiloft aankwam…'],
        ['Mark', 'Ya se habían casado y todos estaban comiendo pastel. ¡Me lo había perdido todo!', 'Waren ze al getrouwd en zat iedereen taart te eten. Ik had alles gemist!'],
        ['Lupita', 'Bueno, por lo menos llegaste al baile. Y ahora tienes una anécdota buenísima.', 'Nou ja, je was er in elk geval op tijd voor het dansen. En nu heb je een geweldige anekdote.']
      ],
      q: [
        { t: 'mc', q: '¿Qué había pasado cuando Mark llegó a la primera iglesia?', o: ['La ceremonia ya había empezado', 'La ceremonia había terminado', 'Todavía no había nadie'] },
        { t: 'mc', q: '¿Cuándo se dio cuenta de que estaba en la boda equivocada?', o: ['Cuando entró la novia', 'Cuando habló con la señora', 'Cuando comió pastel'] },
        { t: 'mc', q: '¿Qué estaban haciendo en la boda correcta cuando llegó?', o: ['Comiendo pastel', 'Celebrando la ceremonia', 'Bailando el vals'] }
      ]
    },
    culture: { t: 'Bruiloften en Mexicaanse uitdrukkingen', html: `<p>💒 Een Latijns-Amerikaanse <b>boda</b> is groot: honderden gasten, een ceremonie in de kerk en een feest tot diep in de nacht. In Mexico zijn er <b>padrinos</b> (peetouders) die een deel betalen: de <i>padrinos de pastel, de anillos, de lazo…</i> Om middernacht krijg je vaak nog <b>tornafiesta</b>: eten om weer energie te krijgen.</p>
<p>🎉 In Oaxaca begint een bruiloft soms met een <b>calenda</b>: een optocht door de straten met muziek, reuzenpoppen en <i>mezcal</i>.</p>
<p>😅 Mexicaanse reacties: <b>¡No manches!</b> (dat meen je niet!), <b>¡Qué oso!</b> (wat gênant!), <b>¡Qué padre!</b> (wat gaaf!). In Colombia betekent <b>¡Qué pena!</b> vooral «sorry» of «wat gênant», en niet alleen «wat jammer».</p>` },
    ex: [
      { t: 'cloze', s: 'Cuando llegué, el tren ya ___.', h: 'salir', a: ['había salido'], nl: 'Toen ik aankwam, was de trein al vertrokken.', tag: 'pluperfect' },
      { t: 'cloze', s: 'Nunca antes ___ el mar.', h: 'ver, yo', a: ['había visto'], nl: 'Ik had nog nooit eerder de zee gezien.', tag: 'pluperfect' },
      { t: 'cloze', s: 'Mis amigos ya ___ cuando yo llegué.', h: 'comer', a: ['habían comido'], nl: 'Mijn vrienden hadden al gegeten toen ik aankwam.', tag: 'pluperfect' },
      { t: 'cloze', s: 'Me dijo que todavía no ___ la tarea.', h: 'hacer, él', a: ['había hecho'], nl: 'Hij zei dat hij zijn huiswerk nog niet had gemaakt.', tag: 'pluperfect' },
      { t: 'cloze', s: '¿Ya ___ a Colombia antes de este viaje?', h: 'ir, tú', a: ['habías ido'], nl: 'Was je al eens in Colombia geweest vóór deze reis?', tag: 'pluperfect' },
      { t: 'cloze', s: 'Cuando me llamaste, todavía no ___.', h: 'levantarse, yo', a: ['me había levantado'], nl: 'Toen je me belde, was ik nog niet opgestaan.', tag: 'pluperfect' },
      { t: 'cloze', s: '___ las ocho cuando empezó la fiesta.', a: ['Eran'], o: ['Eran', 'Fueron', 'Habían sido'], nl: 'Het was acht uur toen het feest begon.', x: 'Tijd en decor → imperfecto.', tag: 'pret-imp' },
      { t: 'cloze', s: 'Estaba cansado porque no ___ en toda la noche.', h: 'dormir', a: ['había dormido'], nl: 'Hij was moe omdat hij de hele nacht niet had geslapen.', tag: 'pluperfect' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Ya lo había hecho.', 'Había ya lo hecho.', 'Lo había ya hecho lo.'], x: 'Voornaamwoord vóór había; niets tussen había en het participio.', tag: 'pluperfect' },
      { t: 'mc', q: 'Wat gebeurde er EERST? «Cuando llegué, Ana ya se había ido.»', o: ['Ana ging weg.', 'Ik kwam aan.', 'Allebei tegelijk.'], tag: 'pluperfect' },
      { t: 'mc', q: '«¡Me había equivocado de fecha!» betekent…', o: ['Ik had me in de datum vergist!', 'Ik vergis me in de datum!', 'Ik zou me in de datum vergissen!'], tag: 'pluperfect' },
      { t: 'tr', nl: 'Ik had hem nog nooit eerder gezien.', a: ['Nunca antes lo había visto.', 'Nunca lo había visto antes.', 'Nunca lo había visto.', 'No lo había visto nunca.'], tag: 'pluperfect' },
      { t: 'tr', nl: 'Toen we aankwamen, was het feest al afgelopen.', a: ['Cuando llegamos, la fiesta ya había terminado.', 'Cuando llegamos, la fiesta ya se había acabado.', 'Cuando llegamos la fiesta ya había terminado.'], tag: 'pluperfect' },
      { t: 'tr', nl: 'Ze vergiste zich in de kerk.', a: ['Se equivocó de iglesia.', 'Ella se equivocó de iglesia.'], tag: 'vocab' },
      { t: 'order', s: 'Cuando llegué a la boda ya se habían casado.', nl: 'Toen ik op de bruiloft aankwam, waren ze al getrouwd.', tag: 'pluperfect' },
      { t: 'match', p: [['ya', 'al'], ['todavía no', 'nog niet'], ['nunca antes', 'nooit eerder'], ['al día siguiente', 'de volgende dag'], ['por casualidad', 'toevallig']], tag: 'vocab' }
    ],
    say: [['Cuando llegué, la ceremonia ya había empezado.', 'Toen ik aankwam, was de ceremonie al begonnen.'], ['Nunca antes había visto algo así.', 'Ik had nog nooit eerder zoiets gezien.'], ['Resulta que me había equivocado de fecha.', 'Het bleek dat ik me in de datum had vergist.'], ['¡No manches! ¿En serio?', 'Dat meen je niet! Echt?']],
    task: { nl: 'Vertel een gênante of grappige gebeurtenis uit je leven (echt of verzonnen). Gebruik de indefinido voor de gebeurtenissen, de imperfecto voor het decor en minstens drie keer de pluscuamperfecto.', model: 'Hace dos años fui a una entrevista de trabajo en Ámsterdam. Era lunes y llovía muchísimo. Cuando llegué, me di cuenta de que había olvidado mi currículum en casa. Además, no había desayunado y estaba muy nervioso. Al final la entrevista fue bien: ¡la jefa también había olvidado sus papeles!' },
    scenario: { nl: 'Je vertelt een Mexicaanse vriendin over een rampzalige dag. Zij wil alle details weten.', role: 'Eres Lupita, una oaxaqueña de 28 años, muy chismosa y divertida. El estudiante te cuenta algo que le pasó. Tú quieres saber todos los detalles: qué había pasado antes, cómo se sentía, qué hizo. Reaccionas con «¡No manches!», «¡Qué oso!» y «¿Y luego?». Usas el pluscuamperfecto en tus preguntas («¿Ya habías…?»).', goal: 'Vertel een verhaal met indefinido, imperfecto en pluscuamperfecto.' },
    reading: {
      t: 'El cuento del tren perdido', type: 'Kort verhaal',
      p: [
        ['Aquella mañana, Ernesto se despertó tarde. La noche anterior había estado en la fiesta de su hermano y se había acostado a las tres. Tenía una cita importante en Puebla a las once.',
          'Die ochtend werd Ernesto laat wakker. De avond ervoor was hij op het feest van zijn broer geweest en was hij om drie uur naar bed gegaan. Hij had om elf uur een belangrijke afspraak in Puebla.'],
        ['Se vistió en dos minutos y corrió a la estación de autobuses. Cuando llegó, el autobús de las ocho ya había salido. Le preguntó a un señor si había otro, pero el señor nunca había oído hablar de Puebla. ¡Era un turista!',
          'Hij kleedde zich in twee minuten aan en rende naar het busstation. Toen hij aankwam, was de bus van acht uur al vertrokken. Hij vroeg een meneer of er nog een was, maar die meneer had nog nooit van Puebla gehoord. Het was een toerist!'],
        ['Ernesto tomó el autobús de las nueve. En el camino se dio cuenta de que había dejado su celular en casa. No podía avisar a nadie. Estaba desesperado.',
          'Ernesto nam de bus van negen uur. Onderweg besefte hij dat hij zijn mobiel thuis had laten liggen. Hij kon niemand waarschuwen. Hij was wanhopig.'],
        ['Llegó a las once y cuarto, sudando. Pero la recepcionista sonrió: «No se preocupe. El licenciado tampoco ha llegado. Anoche estuvo en una fiesta.» Era la fiesta de su hermano.',
          'Hij kwam om kwart over elf aan, zwetend. Maar de receptioniste glimlachte: «Maakt u zich geen zorgen. Meneer is ook nog niet gearriveerd. Gisteravond was hij op een feest.» Het was het feest van zijn broer.']
      ],
      gl: [['aquella mañana', 'die ochtend'], ['oír hablar de', 'horen van'], ['desesperado / desesperada', 'wanhopig'], ['el licenciado', 'meneer (titel voor iemand met een universitaire titel, MX)']],
      q: [
        { t: 'mc', q: '¿Por qué se despertó tarde Ernesto?', o: ['Porque se había acostado a las tres', 'Porque estaba enfermo', 'Porque su celular no funcionaba'] },
        { t: 'mc', q: '¿Qué había pasado cuando llegó a la estación?', o: ['El autobús ya había salido', 'Todavía no había abierto', 'El autobús estaba lleno'] },
        { t: 'mc', q: '¿Qué había dejado en casa?', o: ['Su celular', 'Su boleto', 'Su cartera'] },
        { t: 'mc', q: '¿Por qué no había llegado el licenciado?', o: ['Había estado en la misma fiesta', 'Estaba en Puebla', 'Había perdido el autobús'] }
      ]
    }
  });
  /* ───────────────────────── B1 · 6 ───────────────────────── */
  U({
    id: 'b1-06', level: 'B1', icon: '🐸', title: '¡No te preocupes!', nl: 'Verbieden en waarschuwen: de ontkennende imperativo',
    goals: ['De ontkennende imperativo vormen voor tú, usted en ustedes (no hables, no hable, no hablen)', 'Voornaamwoorden goed plaatsen: hazlo tegenover no lo hagas', 'Regels, waarschuwingen en geruststelling geven'],
    vocab: [
      ['la regla', 'de regel'], ['prohibido', 'verboden'], ['está prohibido…', 'het is verboden om…'], ['permitido', 'toegestaan'], ['la advertencia', 'de waarschuwing'],
      ['tocar', 'aanraken'], ['alimentar a los animales', 'de dieren voeren'], ['tirar basura', 'afval weggooien'], ['salirse del sendero', 'van het pad afwijken'], ['hacer ruido', 'lawaai maken'],
      ['el bosque nuboso', 'het nevelwoud'], ['la selva tropical', 'het tropisch regenwoud'], ['el puente colgante', 'de hangbrug'], ['la serpiente / la culebra', 'de slang'],
      ['el mono', 'de aap'], ['el perezoso', 'de luiaard'], ['la rana', 'de kikker'], ['el mosquito / el zancudo', 'de mug', 'zancudo: CR · CO · VE'], ['el repelente', 'het muggenmiddel'],
      ['venenoso / venenosa', 'giftig'], ['el / la guardaparques', 'de parkwachter'], ['resbaloso / resbalosa', 'glad'], ['soltar', 'loslaten'], ['agarrarse (de)', 'zich vasthouden (aan)'],
      ['acercarse (a)', 'dichterbij komen'], ['alejarse (de)', 'afstand nemen (van)'], ['preocuparse', 'zich zorgen maken'], ['asustarse', 'schrikken'], ['enojarse', 'boos worden', 'ES: enfadarse'],
      ['quejarse', 'klagen'], ['¡no tengas miedo!', 'wees niet bang!'], ['¡no se asuste!', 'schrik niet! (usted)'], ['¡tranquilo, tranquila!', 'rustig maar!'],
      ['diay', 'nou ja, tja, hé', 'CR (informeel)'], ['¡qué miedo!', 'wat eng!']
    ],
    grammar: [
      { t: 'De ontkennende imperativo', es: 'El imperativo negativo',
        html: `<p>Een <b>ontkennende opdracht</b> (doe dit níet) maak je met <b>no + presente de subjuntivo</b>, voor alle personen:</p>
<p><i>¡No hables! ¡No comas eso! ¡No vayas sola!</i> (tú) · <i>¡No se preocupe!</i> (usted) · <i>¡No toquen a los animales!</i> (ustedes)</p>
<p>Dat is dus anders dan de bevestigende tú-vorm: <i>habla → no hables</i>, <i>come → no comas</i>, <i>ven → no vengas</i>, <i>haz → no hagas</i>, <i>di → no digas</i>, <i>ve → no vayas</i>.</p>
<p>Bij usted en ustedes zijn de bevestigende en ontkennende vorm gelijk: <i>hable / no hable</i>, <i>vengan / no vengan</i>.</p>`,
        table: [['', 'bevestigend', 'ontkennend'], ['tú', 'habla · come · ven', 'no hables · no comas · no vengas'], ['usted', 'hable · coma · venga', 'no hable · no coma · no venga'], ['ustedes', 'hablen · coman · vengan', 'no hablen · no coman · no vengan']],
        sum: 'Imperativo negativo = no + presente de subjuntivo: no hables, no hable, no hablen.' },
      { t: 'Voornaamwoorden: hazlo / no lo hagas', es: 'Pronombres y negación',
        html: `<p>Bij een <b>bevestigende</b> opdracht plak je de voornaamwoorden <b>achter</b> het werkwoord: <i>Tócalo.</i> · <i>Siéntate.</i> · <i>Dímelo.</i></p>
<p>Bij een <b>ontkennende</b> opdracht staan ze <b>los ervoor</b>, tussen <i>no</i> en het werkwoord: <i>No lo toques.</i> · <i>No te sientes ahí.</i> · <i>No me lo digas.</i></p>
<p>Wederkerende werkwoorden werken net zo: <i>preocúpate → no te preocupes</i>, <i>acérquense → no se acerquen</i>.</p>`,
        ex: [['¡No lo toques, es venenoso!', 'Raak hem niet aan, hij is giftig!'], ['No se acerquen al borde, por favor.', 'Kom niet te dicht bij de rand, alstublieft.']],
        sum: 'Afirmativo: tócalo. Negativo: no lo toques.' },
      { t: 'Regels en verboden', es: 'Expresar prohibición',
        html: `<p>Er zijn meer manieren om iets te verbieden of af te raden:</p>
<p><b>Está prohibido</b> + infinitief: <i>Está prohibido fumar.</i> · <b>No se puede</b> + infinitief: <i>No se puede nadar aquí.</i> · <b>No hay que</b> + infinitief: <i>No hay que alimentar a los monos.</i> · <b>Prohibido</b> + infinitief (op bordjes): <i>Prohibido el paso.</i></p>
<p>Een ontkennende imperativo kan ook geruststellen: <i>¡No te preocupes! ¡No te asustes! ¡No llores!</i></p>`,
        sum: 'Está prohibido / no se puede / no hay que + infinitivo.' }
    ],
    verbs: ['hablar', 'tocar', 'hacer', 'decir', 'ir', 'venir', 'tener', 'salir', 'poner', 'preocuparse', 'enojarse', 'ser', 'dar'], tenses: ['neg', 'imper'],
    dialogue: {
      t: 'Caminata en Monteverde', place: 'Monteverde 🇨🇷',
      lines: [
        ['Guía Mauricio', '¡Buenos días, mae! Bienvenidos al bosque nuboso. Antes de empezar, unas reglas.', 'Goedemorgen allemaal! Welkom in het nevelwoud. Voordat we beginnen, een paar regels.'],
        ['Guía Mauricio', 'Primero: no se salgan del sendero. Y por favor, no toquen las plantas ni los animales.', 'Eén: wijk niet af van het pad. En raak alsjeblieft de planten en dieren niet aan.'],
        ['Mark', '¿Y si vemos un mono? ¿Le puedo dar un poquito de fruta?', 'En als we een aap zien? Mag ik hem een beetje fruit geven?'],
        ['Guía Mauricio', '¡No, no le des nada! Está prohibido alimentar a los animales. Se enferman.', 'Nee, geef hem niets! Het is verboden de dieren te voeren. Ze worden er ziek van.'],
        ['Turista', 'Disculpe, ¿hay serpientes aquí? Me dan mucho miedo.', 'Pardon, zijn er hier slangen? Ik ben er heel bang voor.'],
        ['Guía Mauricio', 'Algunas, pero no se preocupe. Si ve una, no se acerque y no grite. Solo avíseme.', 'Een paar, maar maakt u zich geen zorgen. Als u er een ziet, ga er niet naartoe en schreeuw niet. Waarschuw mij gewoon.'],
        ['Mark', 'Mira, ¡ahí arriba hay un perezoso!', 'Kijk, daarboven zit een luiaard!'],
        ['Guía Mauricio', '¡Qué tuanis! Pero no hagan ruido, que se asusta. Sáquenle fotos, pero sin flash.', 'Wat cool! Maar maak geen lawaai, anders schrikt hij. Maak foto’s, maar zonder flits.'],
        ['Turista', 'Ay, el puente colgante se mueve mucho…', 'Ai, de hangbrug beweegt heel erg…'],
        ['Guía Mauricio', 'Tranquila. Agárrese bien y no mire para abajo. Diay, ¡ya casi llegamos!', 'Rustig maar. Houd u goed vast en kijk niet naar beneden. Kom op, we zijn er bijna!']
      ],
      q: [
        { t: 'mc', q: '¿Por qué no se puede dar fruta a los monos?', o: ['Porque se enferman', 'Porque son peligrosos', 'Porque no les gusta'] },
        { t: 'mc', q: '¿Qué debe hacer la turista si ve una serpiente?', o: ['No acercarse, no gritar y avisar al guía', 'Sacarle una foto', 'Correr'] },
        { t: 'mc', q: '¿Por qué no deben hacer ruido con el perezoso?', o: ['Porque se asusta', 'Porque duerme', 'Porque es venenoso'] }
      ]
    },
    culture: { t: 'Costa Rica: pura vida en natuur', html: `<p>🇨🇷 Costa Rica beslaat maar 0,03 % van het aardoppervlak, maar heeft ongeveer 5 % van alle dier- en plantensoorten. Een kwart van het land is beschermd natuurgebied. Het land heeft sinds 1948 <b>geen leger</b>.</p>
<p>🦥 Ticos zeggen overal <b>¡pura vida!</b>: als groet, als bedankje, als «alles goed». Ze noemen elkaar <b>mae</b> (gast), en <b>diay</b> is een stopwoordje voor «nou», «tja» of «hé». Iets gaafs is <b>tuanis</b>.</p>
<p>🙂 Costa Ricanen geven opdrachten graag <b>zacht</b>, met <i>por favor</i>, verkleinwoorden en <b>usted</b>, dat in Costa Rica heel veel gebruikt wordt, ook tussen vrienden en in families.</p>` },
    ex: [
      { t: 'cloze', s: '¡No ___ eso, está muy picante!', h: 'comer, tú', a: ['comas'], nl: 'Eet dat niet, het is heel pittig!', tag: 'neg-imperative' },
      { t: 'cloze', s: 'No ___ tan rápido, por favor.', h: 'hablar, usted', a: ['hable'], nl: 'Praat u niet zo snel, alstublieft.', tag: 'neg-imperative' },
      { t: 'cloze', s: '¡No ___ a los animales, chicos!', h: 'tocar, ustedes', a: ['toquen'], nl: 'Raak de dieren niet aan, jongens!', x: 'Tocar → toque(n): c wordt qu vóór e.', tag: 'neg-imperative' },
      { t: 'cloze', s: 'No ___ sola de noche.', h: 'ir, tú', a: ['vayas'], nl: 'Ga ’s nachts niet alleen.', tag: 'neg-imperative' },
      { t: 'cloze', s: '¡No me ___ mentiras!', h: 'decir, tú', a: ['digas'], nl: 'Lieg niet tegen me!', tag: 'neg-imperative' },
      { t: 'cloze', s: 'No ___ preocupes, todo va a salir bien.', a: ['te'], o: ['te', 'se', 'tú'], nl: 'Maak je geen zorgen, alles komt goed.', tag: 'neg-imperative' },
      { t: 'cloze', s: 'No ___ tarde, que la cena es a las siete.', h: 'llegar, tú', a: ['llegues'], nl: 'Kom niet te laat, het eten is om zeven uur.', tag: 'neg-imperative' },
      { t: 'mc', q: 'Ontkenning van «Hazlo»:', o: ['No lo hagas.', 'No hazlo.', 'No lo haz.'], tag: 'neg-imperative' },
      { t: 'mc', q: 'Ontkenning van «Siéntate»:', o: ['No te sientes.', 'No siéntate.', 'No te sienta.'], tag: 'neg-imperative' },
      { t: 'mc', q: 'Ontkenning van «Dímelo»:', o: ['No me lo digas.', 'No dímelo.', 'No me lo dices.'], tag: 'neg-imperative' },
      { t: 'mc', q: 'Wat staat er op het bordje? «Prohibido alimentar a los animales»', o: ['Dieren voeren verboden', 'Dieren aaien toegestaan', 'Pas op voor de dieren'], tag: 'neg-imperative' },
      { t: 'tr', nl: 'Maak je geen zorgen!', a: ['¡No te preocupes!', 'No te preocupes.'], tag: 'neg-imperative' },
      { t: 'tr', nl: 'Raak het niet aan, het is giftig! (tú)', a: ['¡No lo toques, es venenoso!', 'No lo toques, es venenoso.', '¡No la toques, es venenosa!', 'No lo toques, que es venenoso.'], tag: 'neg-imperative' },
      { t: 'tr', nl: 'Wordt u niet boos, alstublieft.', a: ['No se enoje, por favor.', 'Por favor, no se enoje.', 'No se enfade, por favor.'], tag: 'neg-imperative' },
      { t: 'order', s: 'No se salgan del sendero por favor.', nl: 'Wijk alstublieft niet af van het pad.', tag: 'neg-imperative' },
      { t: 'match', p: [['el perezoso', 'de luiaard'], ['el mono', 'de aap'], ['la rana', 'de kikker'], ['el zancudo', 'de mug'], ['la culebra', 'de slang']], tag: 'vocab' }
    ],
    say: [['¡No te preocupes! Todo va a salir bien.', 'Maak je geen zorgen! Alles komt goed.'], ['No toquen a los animales, por favor.', 'Raak de dieren niet aan, alstublieft.'], ['No lo hagas, es peligroso.', 'Doe het niet, het is gevaarlijk.'], ['¡Pura vida, mae!', 'Helemaal goed, gast!']],
    task: { nl: 'Een Latijns-Amerikaanse vriend komt in jouw huis logeren terwijl jij weg bent. Schrijf zes huisregels: drie dingen die hij moet doen en drie dingen die hij níet moet doen.', model: '¡Bienvenido a mi casa! Riega las plantas los lunes. No le des chocolate al perro, porque se enferma. Cierra bien la puerta cuando salgas. No dejes la bici en la calle: aquí roban muchas bicis. No pongas la calefacción muy alta. Y si tienes un problema, llama a mi vecina Anke. ¡No te preocupes por nada!' },
    scenario: { nl: 'Je bent gids in een natuurpark en je legt de regels uit aan een groep toeristen. De AI speelt een toerist die van alles wil doen.', role: 'Eres Kimberly, una turista estadounidense que habla español, un poco nerviosa pero muy curiosa, en un parque nacional de Costa Rica. Quieres tocar todo, darles comida a los monos y salir del sendero. El estudiante es el guía y debe decirte lo que no debes hacer. Pregunta «¿Y puedo…?» muchas veces.', goal: 'Leg regels uit met de ontkennende imperativo (no toque, no se acerque).' },
    reading: {
      t: 'Reglas del Parque Nacional Manuel Antonio', type: 'Informatiebord',
      p: [
        ['Bienvenidos al Parque Nacional Manuel Antonio. Para proteger la naturaleza y su propia seguridad, lean y respeten estas reglas.',
          'Welkom in Nationaal Park Manuel Antonio. Lees en respecteer deze regels om de natuur en uw eigen veiligheid te beschermen.'],
        ['No alimenten a los animales. Los monos y los mapaches aprenden a robar comida y se enferman con la comida humana. Guarden bien sus bolsas: ¡los monos son muy rápidos!',
          'Voer de dieren niet. Apen en wasberen leren eten te stelen en worden ziek van menselijk voedsel. Berg uw tassen goed op: apen zijn erg snel!'],
        ['No se salgan de los senderos marcados y no caminen solos después de las cuatro de la tarde. No dejen basura en la playa: llévensela con ustedes.',
          'Wijk niet af van de gemarkeerde paden en loop na vier uur ’s middags niet alleen. Laat geen afval achter op het strand: neem het mee.'],
        ['En la playa, no se metan al mar donde hay bandera roja. Las corrientes son peligrosas. Está prohibido entrar con alcohol, cigarrillos o altavoces. ¡Disfruten y pura vida!',
          'Ga op het strand niet de zee in waar een rode vlag hangt. De stromingen zijn gevaarlijk. Het is verboden om alcohol, sigaretten of luidsprekers mee naar binnen te nemen. Geniet ervan en pura vida!']
      ],
      gl: [['el mapache', 'de wasbeer'], ['marcado / marcada', 'gemarkeerd'], ['meterse al mar', 'de zee in gaan'], ['la corriente', 'de stroming']],
      q: [
        { t: 'mc', q: '¿Por qué no se debe alimentar a los animales?', o: ['Aprenden a robar y se enferman', 'Porque muerden', 'Porque está muy caro'] },
        { t: 'mc', q: '¿Qué no se debe hacer después de las cuatro?', o: ['Caminar solo', 'Ir a la playa', 'Sacar fotos'] },
        { t: 'mc', q: '¿Qué significa la bandera roja?', o: ['No se metan al mar', 'Pueden nadar', 'Hay monos'] },
        { t: 'mc', q: '¿Qué está prohibido llevar al parque?', o: ['Alcohol, cigarrillos y altavoces', 'Comida y agua', 'Cámaras'] }
      ]
    }
  });

  /* ───────────────────────── B1 · 7 ───────────────────────── */
  U({
    id: 'b1-07', level: 'B1', icon: '📨', title: 'Me dijo que…', nl: 'Vertellen wat iemand zei: de indirecte rede',
    goals: ['Doorvertellen wat iemand zegt of zei (dice que, dijo que)', 'Tijden aanpassen in de indirecte rede', 'Vragen en verzoeken doorgeven (me preguntó si, me pidió que)'],
    vocab: [
      ['decir que', 'zeggen dat'], ['contar (ue) que', 'vertellen dat'], ['explicar que', 'uitleggen dat'], ['comentar', 'opmerken, vertellen'], ['mencionar', 'noemen'],
      ['preguntar si', 'vragen of'], ['pedir que', 'vragen om (verzoek)'], ['responder / contestar', 'antwoorden'], ['prometer', 'beloven'], ['la promesa', 'de belofte'],
      ['transmitir', 'doorgeven'], ['quejarse de', 'klagen over'], ['negar (ie)', 'ontkennen'], ['admitir', 'toegeven'], ['confesar (ie)', 'bekennen'],
      ['el mensaje de voz', 'het spraakbericht', 'heel gewoon via WhatsApp'], ['el audio', 'het spraakbericht', 'informeel'], ['el recado', 'de boodschap (doorgeven)'], ['dejar un recado', 'een boodschap achterlaten'],
      ['el rumor', 'het gerucht'], ['contar un secreto', 'een geheim vertellen'], ['chismear', 'roddelen'], ['según él / ella', 'volgens hem / haar'], ['al parecer', 'blijkbaar'],
      ['por lo visto', 'zo te zien, blijkbaar'], ['dizque', 'zogenaamd, naar het schijnt', 'MX · CO · Midden-Amerika (informeel)'], ['el / la colega', 'de collega'],
      ['el ascenso', 'de promotie'], ['despedirse', 'afscheid nemen'], ['la renuncia', 'het ontslag (eigen keuze)'], ['ascender (ie)', 'promotie maken'], ['la novedad', 'het nieuwtje'],
      ['¡qué chilero!', 'wat gaaf!', 'GT (informeel)'], ['la oficina', 'het kantoor'], ['patojo / patoja', 'kind, jongere', 'GT']
    ],
    grammar: [
      { t: 'Dice que: zonder tijdsverandering', es: 'Estilo indirecto: presente',
        html: `<p>Vertel je door wat iemand <b>nu</b> zegt (<i>dice que, explica que, cuenta que</i>), dan blijft de tijd <b>hetzelfde</b>. Alleen de persoon verandert:</p>
<p>«Estoy cansada.» → <i>Dice que <b>está</b> cansada.</i><br>«Voy a llegar tarde.» → <i>Dice que <b>va a llegar</b> tarde.</i><br>«Ayer fui al médico.» → <i>Dice que ayer <b>fue</b> al médico.</i></p>
<p>Let ook op woorden als <i>aquí → allí</i>, <i>mi → su</i>, <i>hoy → ese día</i> als de situatie verandert.</p>`,
        sum: 'Dice que + mismo tiempo verbal. Solo cambian las personas.' },
      { t: 'Dijo que: tijden verschuiven', es: 'Estilo indirecto: pasado',
        html: `<p>Vertel je door wat iemand <b>zei</b> (<i>dijo que, me contó que</i>), dan schuiven de tijden een stap terug, net als in het Nederlands:</p>`,
        table: [['wat iemand zei', 'indirecte rede'], ['presente: «Tengo hambre.»', 'imperfecto: Dijo que tenía hambre.'], ['indefinido / perfecto: «Perdí / He perdido el bus.»', 'pluscuamperfecto: Dijo que había perdido el bus.'], ['futuro / ir a: «Iré / Voy a ir mañana.»', 'condicional / iba a: Dijo que iría / iba a ir al día siguiente.'], ['imperfecto: «Estaba enfermo.»', 'blijft: Dijo que estaba enfermo.']],
        ex: [['Me dijo que estaba cansada y que se iba a acostar.', 'Ze zei dat ze moe was en naar bed ging.'], ['Nos contó que había conseguido un trabajo nuevo.', 'Hij vertelde ons dat hij een nieuwe baan had gekregen.']],
        sum: 'Dijo que: presente → imperfecto; pretérito → pluscuamperfecto; futuro → condicional.' },
      { t: 'Vragen en verzoeken doorgeven', es: 'Preguntas y peticiones',
        html: `<p>Een <b>ja/nee-vraag</b> geef je door met <b>si</b> (of): «¿Vienes?» → <i>Me preguntó si iba.</i></p>
<p>Een <b>vraagwoordvraag</b> houdt het vraagwoord, mét accent: «¿Dónde vives?» → <i>Me preguntó dónde vivía.</i></p>
<p>Een <b>verzoek of opdracht</b> geef je door met <b>pedir / decir que + subjuntivo</b>: «Llámame.» → <i>Me pide que lo llame.</i> In het verleden gebruik je daarvoor de imperfecto de subjuntivo (<i>me pidió que lo llamara</i>), die je in B2 leert. Herken hem alvast.</p>`,
        sum: 'Me preguntó si… / Me preguntó dónde… / Me pide que + subjuntivo.' }
    ],
    verbs: ['decir', 'contar', 'preguntar', 'pedir', 'estar', 'tener', 'ir', 'ser', 'hacer', 'venir', 'poder'], tenses: ['pret', 'imp', 'cond'],
    dialogue: {
      t: 'El chisme de la oficina', place: 'Ciudad de Guatemala 🇬🇹',
      lines: [
        ['Ana Lucía', 'Mark, ¿supiste lo de Rodrigo? Dizque renunció ayer.', 'Mark, heb je het gehoord van Rodrigo? Hij schijnt gisteren ontslag te hebben genomen.'],
        ['Mark', '¿En serio? Pero el lunes me dijo que estaba feliz en la chamba.', 'Echt? Maar maandag zei hij nog tegen me dat hij het naar zijn zin had op zijn werk.'],
        ['Ana Lucía', 'Pues a mí me contó que le habían ofrecido un puesto en Antigua.', 'Nou, mij vertelde hij dat hij een baan in Antigua aangeboden had gekregen.'],
        ['Mark', '¿Y qué más te dijo?', 'En wat zei hij nog meer?'],
        ['Ana Lucía', 'Que iba a trabajar en un hotel y que ganaría el doble.', 'Dat hij in een hotel ging werken en dat hij het dubbele zou verdienen.'],
        ['Mark', '¡Qué chilero! ¿Y la jefa qué dijo?', 'Wat gaaf! En wat zei de baas?'],
        ['Ana Lucía', 'Al parecer, le preguntó si podía quedarse hasta fin de mes.', 'Blijkbaar vroeg ze of hij tot het eind van de maand kon blijven.'],
        ['Mark', 'Bueno, en realidad Rodrigo me acaba de mandar un audio.', 'Nou, eigenlijk heeft Rodrigo me net een spraakbericht gestuurd.'],
        ['Ana Lucía', '¿Y? ¿Qué dice?', 'En? Wat zegt hij?'],
        ['Mark', 'Dice que no renunció, que solo pidió vacaciones. Y que por favor no le creamos a nadie.', 'Hij zegt dat hij geen ontslag heeft genomen, dat hij alleen vakantie heeft aangevraagd. En dat we alsjeblieft niemand moeten geloven.'],
        ['Ana Lucía', '¡Ay, qué pena! Entonces el chisme lo inventó la de contabilidad.', 'O, wat gênant! Dan heeft die van de boekhouding de roddel verzonnen.']
      ],
      q: [
        { t: 'mc', q: '¿Qué le había dicho Rodrigo a Mark el lunes?', o: ['Que estaba feliz en el trabajo', 'Que iba a renunciar', 'Que se iba a Antigua'] },
        { t: 'mc', q: 'Según Ana Lucía, ¿qué le habían ofrecido a Rodrigo?', o: ['Un puesto en Antigua', 'Un ascenso', 'Unas vacaciones'] },
        { t: 'mc', q: '¿Qué dice Rodrigo en el audio?', o: ['Que solo pidió vacaciones', 'Que ya renunció', 'Que va a ganar el doble'] }
      ]
    },
    culture: { t: 'Guatemala en de spraakberichtcultuur', html: `<p>🇬🇹 Guatemala is het hart van de <b>Mayacultuur</b>: ruim 40 % van de bevolking is inheems en er worden naast Spaans meer dan twintig Mayatalen gesproken, zoals K’iche’ en Q’eqchi’. In Guatemala hoor je ook <b>vos</b>, vooral tussen vrienden.</p>
<p>🎤 In heel Latijns-Amerika sturen mensen veel liever een <b>audio</b> (spraakbericht) dan een getypt bericht. Ze zijn soms minutenlang! Doorvertellen wat iemand zei is dus een heel praktische vaardigheid: <i>Me mandó un audio y dice que…</i></p>
<p>🗣️ <b>Dizque</b> (van <i>dice que</i>) betekent «naar het schijnt» of «zogenaamd» en laat twijfel horen: <i>Dizque está enfermo…</i> (Hij is zogenaamd ziek…). Je hoort het in Mexico, Colombia en Midden-Amerika.</p>` },
    ex: [
      { t: 'cloze', s: '«Estoy cansada.» → Dice que ___ cansada.', a: ['está'], o: ['está', 'estaba', 'estoy'], nl: 'Ze zegt dat ze moe is.', tag: 'reported' },
      { t: 'cloze', s: '«Estoy cansada.» → Dijo que ___ cansada.', a: ['estaba'], o: ['estaba', 'está', 'estuvo'], nl: 'Ze zei dat ze moe was.', tag: 'reported' },
      { t: 'cloze', s: '«Perdí el bus.» → Me contó que ___ el bus.', h: 'perder', a: ['había perdido'], nl: 'Hij vertelde me dat hij de bus had gemist.', tag: 'reported' },
      { t: 'cloze', s: '«Vendré mañana.» → Dijo que ___ al día siguiente.', h: 'venir', a: ['vendría'], nl: 'Hij zei dat hij de volgende dag zou komen.', tag: 'reported' },
      { t: 'cloze', s: '«Voy a llamar.» → Dijo que ___ a llamar.', a: ['iba'], o: ['iba', 'va', 'fue'], nl: 'Ze zei dat ze ging bellen.', tag: 'reported' },
      { t: 'cloze', s: '«¿Tienes hambre?» → Me preguntó ___ tenía hambre.', a: ['si'], o: ['si', 'que', 'sí'], nl: 'Hij vroeg of ik honger had.', tag: 'reported' },
      { t: 'cloze', s: '«¿Dónde vives?» → Me preguntó ___ vivía.', a: ['dónde'], o: ['dónde', 'donde', 'si'], nl: 'Ze vroeg waar ik woonde.', x: 'Vraagwoord blijft, mét accent.', tag: 'reported' },
      { t: 'cloze', s: '«Llámame.» → Me pide que lo ___.', h: 'llamar', a: ['llame'], nl: 'Hij vraagt me hem te bellen.', tag: 'reported' },
      { t: 'mc', q: '«Hoy no puedo ir.» Een week later vertel je:', o: ['Dijo que ese día no podía ir.', 'Dijo que hoy no puede ir.', 'Dijo que hoy no pudo ir.'], tag: 'reported' },
      { t: 'mc', q: '«He terminado el proyecto.» → Nos dijo que…', o: ['había terminado el proyecto.', 'terminaría el proyecto.', 'termina el proyecto.'], tag: 'reported' },
      { t: 'mc', q: '«Dizque está enfermo» betekent…', o: ['Hij is zogenaamd ziek.', 'Hij zegt dat hij ziek wordt.', 'Hij was ziek.'], tag: 'vocab' },
      { t: 'tr', nl: 'Ze zei dat ze geen tijd had.', a: ['Dijo que no tenía tiempo.', 'Ella dijo que no tenía tiempo.', 'Me dijo que no tenía tiempo.'], tag: 'reported' },
      { t: 'tr', nl: 'Hij vroeg me of ik naar het feest kwam.', a: ['Me preguntó si iba a la fiesta.', 'Me preguntó si venía a la fiesta.', 'Me preguntó si iba a ir a la fiesta.'], tag: 'reported' },
      { t: 'tr', nl: 'Ze vertelde me dat ze een nieuwe baan had gevonden.', a: ['Me contó que había encontrado un trabajo nuevo.', 'Me contó que había encontrado un nuevo trabajo.', 'Me dijo que había encontrado un trabajo nuevo.', 'Me contó que había conseguido un trabajo nuevo.'], tag: 'reported' },
      { t: 'order', s: 'Me dijo que iba a llegar tarde.', nl: 'Hij zei tegen me dat hij laat zou komen.', tag: 'reported' },
      { t: 'match', p: [['preguntar si', 'vragen of'], ['pedir que', 'vragen om'], ['prometer', 'beloven'], ['al parecer', 'blijkbaar'], ['el chisme', 'de roddel']], tag: 'vocab' }
    ],
    say: [['Me dijo que estaba muy cansado.', 'Hij zei dat hij heel moe was.'], ['Me preguntó si quería ir con ella.', 'Ze vroeg of ik met haar mee wilde.'], ['Dice que no le creamos a nadie.', 'Hij zegt dat we niemand moeten geloven.'], ['Al parecer, consiguió un trabajo nuevo.', 'Blijkbaar heeft hij een nieuwe baan.']],
    task: { nl: 'Je collega heeft je een lang spraakbericht gestuurd. Vertel een andere collega in 5–6 zinnen wat hij zei: wat er gebeurd was, wat hij ging doen, wat hij vroeg en wat hij beloofde.', model: 'Pedro me mandó un audio esta mañana. Me dijo que estaba enfermo y que no podía venir a la reunión. Me contó que había ido al médico y que tenía gripa. Me preguntó si podía presentar el proyecto yo. Además, prometió que mandaría los documentos por correo y dijo que volvería el jueves.' },
    scenario: { nl: 'Een Guatemalteekse collega heeft het laatste nieuws van kantoor en wil alles weten wat jij gehoord hebt.', role: 'Eres Ana Lucía, una guatemalteca de 31 años que trabaja en una oficina en la Ciudad de Guatemala. Te encantan los chismes. Le cuentas al estudiante lo que te dijeron otros colegas («me dijo que…», «dizque…») y le preguntas qué le dijeron a él. Usas «chilero», «chamba» y «patojo».', goal: 'Vertel door wat anderen zeiden met dijo que, me contó que en me preguntó si.' },
    reading: {
      t: 'Mensajes del día', type: 'Notities van een receptioniste',
      p: [
        ['Licenciada Morales: le dejo los recados de la mañana. A las nueve llamó el señor Paiz. Dijo que no podría venir a la reunión del jueves porque estaba de viaje en Quetzaltenango.',
          'Mevrouw Morales: hier zijn de berichten van vanochtend. Om negen uur belde meneer Paiz. Hij zei dat hij donderdag niet naar de vergadering kon komen omdat hij op reis was in Quetzaltenango.'],
        ['A las diez vino su hermana. Me preguntó si usted estaba en la oficina y le dije que no. Me pidió que le dijera que la llame esta tarde. Dijo que era urgente pero que no era nada malo.',
          'Om tien uur kwam uw zus langs. Ze vroeg of u op kantoor was en ik zei van niet. Ze vroeg me u te zeggen dat u haar vanmiddag moet bellen. Ze zei dat het dringend was, maar dat het niets ergs was.'],
        ['El técnico explicó que ya había arreglado la computadora, pero que la impresora todavía no funcionaba. Prometió que volvería el lunes con una pieza nueva.',
          'De monteur legde uit dat hij de computer al had gerepareerd, maar dat de printer nog niet werkte. Hij beloofde dat hij maandag terug zou komen met een nieuw onderdeel.'],
        ['Por último, el cliente de Antigua se quejó de que no había recibido la factura. Le contesté que se la mandaríamos hoy. Saludos, Gaby.',
          'Tot slot klaagde de klant uit Antigua dat hij de factuur niet had ontvangen. Ik antwoordde dat we die vandaag zouden sturen. Groeten, Gaby.']
      ],
      gl: [['el recado', 'de boodschap'], ['estar de viaje', 'op reis zijn'], ['la pieza', 'het onderdeel'], ['la factura', 'de factuur']],
      q: [
        { t: 'mc', q: '¿Por qué no podrá ir el señor Paiz a la reunión?', o: ['Porque estaba de viaje', 'Porque estaba enfermo', 'Porque no tenía la factura'] },
        { t: 'mc', q: '¿Qué pidió la hermana?', o: ['Que la licenciada la llame esta tarde', 'Que la espere en la oficina', 'Que le mande la factura'] },
        { t: 'mc', q: '¿Qué dijo el técnico de la impresora?', o: ['Que todavía no funcionaba', 'Que ya la había arreglado', 'Que había que comprar otra'] },
        { t: 'mc', q: '¿De qué se quejó el cliente de Antigua?', o: ['De que no había recibido la factura', 'De la reunión', 'De la impresora'] }
      ]
    }
  });

  /* ───────────────────────── B1 · 8 ───────────────────────── */
  U({
    id: 'b1-08', level: 'B1', icon: '🐢', title: 'Si cuidamos el planeta…', nl: 'Natuur en milieu: si-zinnen en voorwaarden',
    goals: ['Echte voorwaarden uitdrukken met si + presente (si llueve, no salimos)', 'Over milieu en klimaat praten', 'Oplossingen voorstellen met deberíamos, hay que en es necesario que'],
    vocab: [
      ['el medio ambiente', 'het milieu'], ['el cambio climático', 'de klimaatverandering'], ['el calentamiento global', 'de opwarming van de aarde'], ['la contaminación del aire', 'de luchtvervuiling'],
      ['contaminar', 'vervuilen'], ['reciclar', 'recyclen'], ['el reciclaje', 'het recyclen'], ['reducir', 'verminderen'], ['reutilizar', 'hergebruiken'], ['ahorrar energía', 'energie besparen'],
      ['la energía solar', 'zonne-energie'], ['la energía eólica', 'windenergie'], ['el plástico de un solo uso', 'wegwerpplastic'], ['la bolsa reutilizable', 'de herbruikbare tas'],
      ['los residuos', 'het afval'], ['la especie', 'de (dier)soort'], ['en peligro de extinción', 'met uitsterven bedreigd'], ['proteger', 'beschermen'], ['la tortuga', 'de schildpad'],
      ['el tiburón', 'de haai'], ['el lobo marino', 'de zeeleeuw', 'LatAm'], ['el arrecife de coral', 'het koraalrif'], ['la deforestación', 'de ontbossing'], ['la sequía', 'de droogte'],
      ['la inundación', 'de overstroming'], ['el incendio forestal', 'de bosbrand'], ['sostenible', 'duurzaam'], ['el ecoturismo', 'het ecotoerisme'], ['la huella de carbono', 'de CO2-voetafdruk'],
      ['el / la voluntario/a', 'de vrijwilliger'], ['tomar conciencia', 'zich bewust worden'], ['a menos que', 'tenzij'], ['siempre que', 'mits, zolang'], ['de lo contrario', 'anders'], ['el panel solar', 'het zonnepaneel']
    ],
    grammar: [
      { t: 'Si + presente: echte voorwaarden', es: 'Condicionales reales',
        html: `<p>Voor een <b>echte, mogelijke</b> voorwaarde gebruik je <b>si + presente</b>. In de hoofdzin staat dan een <b>presente</b>, <b>futuro</b>, <b>ir a</b> of <b>imperativo</b>:</p>
<p><i>Si llueve, no salimos.</i> · <i>Si reciclamos más, habrá menos basura.</i> · <i>Si vas a Galápagos, vas a ver tortugas gigantes.</i> · <i>Si tienes tiempo, ayúdame.</i></p>
<p>⚠️ Na <b>si</b> (als) gebruik je <b>nooit</b> de futuro en nooit de presente de subjuntivo: <s>si lloverá</s>, <s>si llueva</s>.</p>
<p>📌 <b>Si</b> zonder accent = als/of. <b>Sí</b> met accent = ja.</p>`,
        table: [['si + presente', 'hoofdzin'], ['Si llueve,', 'no salimos. (presente)'], ['Si cuidamos el mar,', 'habrá más peces. (futuro)'], ['Si quieres ayudar,', 'usa menos plástico. (imperativo)']],
        sum: 'Si + presente → presente / futuro / imperativo. Nunca «si + futuro».' },
      { t: 'Tenzij en mits: a menos que, siempre que', es: 'A menos que / siempre que',
        html: `<p>Sommige voorwaardelijke voegwoorden krijgen <b>altijd de subjuntivo</b>: <b>a menos que</b> (tenzij), <b>siempre que / con tal de que</b> (mits, op voorwaarde dat), <b>en caso de que</b> (voor het geval dat).</p>
<p><i>Las tortugas van a desaparecer a menos que las protejamos.</i> · <i>Puedes acampar aquí siempre que no hagas fuego.</i> · <i>Lleva agua en caso de que haga calor.</i></p>
<p>Met <b>si no</b> (als niet) of <b>de lo contrario</b> (anders) zeg je hetzelfde met de indicativo: <i>Si no las protegemos, van a desaparecer.</i></p>`,
        sum: 'A menos que / siempre que / en caso de que + subjuntivo.' },
      { t: 'Oplossingen voorstellen', es: 'Proponer soluciones',
        html: `<p>Herhaal wat je al kent om oplossingen voor te stellen:</p>
<p><b>Hay que</b> + infinitief (het moet): <i>Hay que reducir el plástico.</i><br><b>Deberíamos</b> + infinitief (we zouden moeten): <i>Deberíamos usar más la bici.</i><br><b>Es necesario / importante que</b> + subjuntivo: <i>Es necesario que los gobiernos actúen.</i><br><b>Propongo que</b> + subjuntivo: <i>Propongo que prohibamos las bolsas de plástico.</i></p>`,
        sum: 'Hay que + infinitivo; deberíamos + infinitivo; es necesario que / propongo que + subjuntivo.' }
    ],
    verbs: ['reciclar', 'contaminar', 'proteger', 'tener', 'hacer', 'haber', 'poder', 'ser', 'cuidar', 'usar', 'ir'], tenses: ['pres', 'fut', 'subj'],
    dialogue: {
      t: 'Voluntarios en Galápagos', place: 'Isla Santa Cruz, Galápagos 🇪🇨',
      lines: [
        ['Daniela', 'Bienvenido al centro de tortugas, Mark. ¿Es tu primera vez como voluntario?', 'Welkom in het schildpaddencentrum, Mark. Is het je eerste keer als vrijwilliger?'],
        ['Mark', 'Sí. ¿Qué tengo que hacer hoy?', 'Ja. Wat moet ik vandaag doen?'],
        ['Daniela', 'Primero vamos a limpiar la playa. Si encontramos plástico, lo separamos para reciclar.', 'Eerst gaan we het strand schoonmaken. Als we plastic vinden, scheiden we het om te recyclen.'],
        ['Mark', '¿Hay mucha basura? Pensé que las islas estaban protegidas.', 'Is er veel afval? Ik dacht dat de eilanden beschermd waren.'],
        ['Daniela', 'Lo están, pero el mar trae plástico de todo el mundo. Si no lo recogemos, las tortugas se lo comen.', 'Dat zijn ze, maar de zee brengt plastic van over de hele wereld. Als we het niet oprapen, eten de schildpadden het op.'],
        ['Mark', '¡Qué terrible! ¿Y las tortugas gigantes están en peligro de extinción?', 'Wat erg! En worden de reuzenschildpadden met uitsterven bedreigd?'],
        ['Daniela', 'Algunas especies sí. Si seguimos trabajando, se van a recuperar. Pero no lo vamos a lograr a menos que los turistas también ayuden.', 'Sommige soorten wel. Als we blijven werken, herstellen ze zich. Maar het gaat ons niet lukken tenzij de toeristen ook helpen.'],
        ['Mark', '¿Qué deberían hacer los turistas?', 'Wat zouden de toeristen moeten doen?'],
        ['Daniela', 'Cosas simples: no usar plástico de un solo uso, no tocar a los animales y no salirse de los senderos.', 'Simpele dingen: geen wegwerpplastic gebruiken, de dieren niet aanraken en niet van de paden afwijken.'],
        ['Mark', 'Pues si me das una bolsa, empiezo ahora mismo.', 'Nou, als je me een zak geeft, begin ik meteen.'],
        ['Daniela', '¡Bacán! Toma. Y si ves un lobo marino, no te acerques. Muerden.', 'Top! Alsjeblieft. En als je een zeeleeuw ziet, ga er niet naartoe. Ze bijten.']
      ],
      q: [
        { t: 'mc', q: '¿Qué hacen con el plástico de la playa?', o: ['Lo separan para reciclar', 'Lo queman', 'Lo dejan en el mar'] },
        { t: 'mc', q: '¿Qué pasa si no recogen la basura?', o: ['Las tortugas se la comen', 'Viene la policía', 'Los turistas se quejan'] },
        { t: 'mc', q: '¿Qué no debe hacer Mark si ve un lobo marino?', o: ['Acercarse', 'Sacarle fotos', 'Hablar'] }
      ]
    },
    culture: { t: 'Natuur in Latijns-Amerika', html: `<p>🐢 De <b>Galápagoseilanden</b> (Ecuador) inspireerden Darwin tot zijn evolutietheorie. Er wonen dieren die nergens anders voorkomen, zoals reuzenschildpadden en zeeleguanen. Toeristen betalen een hoge toegangsprijs die naar natuurbescherming gaat.</p>
<p>🌳 Het <b>Amazonegebied</b> ligt in negen landen en wordt de «longen van de aarde» genoemd. <b>Ontbossing</b> voor veeteelt en mijnbouw is een groot probleem. Ecuador was in 2008 het eerste land ter wereld dat <b>rechten voor de natuur</b> in de grondwet opnam.</p>
<p>♻️ Veel Latijns-Amerikaanse steden hebben inmiddels een verbod op <b>plastic tasjes en rietjes</b>. In Chili, Colombia en Mexico-Stad moet je je eigen tas meenemen naar de supermarkt.</p>` },
    ex: [
      { t: 'cloze', s: 'Si ___, no vamos a la playa.', h: 'llover', a: ['llueve'], nl: 'Als het regent, gaan we niet naar het strand.', tag: 'si-clause' },
      { t: 'cloze', s: 'Si reciclamos más, ___ menos basura.', h: 'haber', a: ['habrá'], nl: 'Als we meer recyclen, zal er minder afval zijn.', tag: 'si-clause' },
      { t: 'cloze', s: 'Si ___ tiempo, ayúdame con esto.', h: 'tener, tú', a: ['tienes'], nl: 'Als je tijd hebt, help me hiermee.', tag: 'si-clause' },
      { t: 'cloze', s: 'Si vas a Galápagos, ___ tortugas gigantes.', h: 'ver, tú (futuro)', a: ['verás'], nl: 'Als je naar Galápagos gaat, zul je reuzenschildpadden zien.', tag: 'si-clause' },
      { t: 'cloze', s: 'Las tortugas van a desaparecer a menos que las ___.', h: 'proteger, nosotros', a: ['protejamos'], nl: 'De schildpadden gaan verdwijnen, tenzij we ze beschermen.', tag: 'si-clause' },
      { t: 'cloze', s: 'Puedes acampar aquí siempre que no ___ fuego.', h: 'hacer, tú', a: ['hagas'], nl: 'Je mag hier kamperen, mits je geen vuur maakt.', tag: 'si-clause' },
      { t: 'cloze', s: 'Lleva repelente en caso de que ___ zancudos.', h: 'haber', a: ['haya'], nl: 'Neem muggenmiddel mee voor het geval er muggen zijn.', tag: 'si-clause' },
      { t: 'cloze', s: '___ que reducir el plástico de un solo uso.', a: ['Hay'], o: ['Hay', 'Es', 'Tiene'], nl: 'We moeten wegwerpplastic verminderen.', tag: 'obligation' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Si hace sol mañana, iremos a la playa.', 'Si hará sol mañana, iremos a la playa.', 'Si haga sol mañana, iremos a la playa.'], x: 'Na si nooit futuro of presente de subjuntivo.', tag: 'si-clause' },
      { t: 'mc', q: '«A menos que llueva» betekent…', o: ['tenzij het regent', 'als het regent', 'omdat het regent'], tag: 'si-clause' },
      { t: 'mc', q: 'Welke zin is een voorstel?', o: ['Propongo que usemos más la bici.', 'Usamos mucho la bici.', 'Usé la bici ayer.'], tag: 'subj-opinion' },
      { t: 'tr', nl: 'Als we niets doen, wordt het probleem groter.', a: ['Si no hacemos nada, el problema va a ser más grande.', 'Si no hacemos nada, el problema será más grande.', 'Si no hacemos nada, el problema va a crecer.', 'Si no hacemos nada, el problema crecerá.'], tag: 'si-clause' },
      { t: 'tr', nl: 'We zouden minder vlees moeten eten.', a: ['Deberíamos comer menos carne.', 'Tendríamos que comer menos carne.'], tag: 'conditional' },
      { t: 'tr', nl: 'Het is nodig dat iedereen recyclet.', a: ['Es necesario que todos reciclen.', 'Es necesario que todo el mundo recicle.', 'Es necesario que todos reciclemos.'], tag: 'subj-opinion' },
      { t: 'order', s: 'Si no recogemos el plástico las tortugas se lo comen.', nl: 'Als we het plastic niet oprapen, eten de schildpadden het op.', tag: 'si-clause' },
      { t: 'match', p: [['la sequía', 'de droogte'], ['la inundación', 'de overstroming'], ['el incendio forestal', 'de bosbrand'], ['la deforestación', 'de ontbossing'], ['sostenible', 'duurzaam']], tag: 'vocab' }
    ],
    say: [['Si no hacemos nada, el problema va a crecer.', 'Als we niets doen, wordt het probleem groter.'], ['Deberíamos usar menos plástico.', 'We zouden minder plastic moeten gebruiken.'], ['Las tortugas van a desaparecer a menos que las protejamos.', 'De schildpadden verdwijnen, tenzij we ze beschermen.'], ['Si vas a Galápagos, no toques a los animales.', 'Als je naar Galápagos gaat, raak de dieren niet aan.']],
    task: { nl: 'Schrijf een korte tekst voor de schoolkrant of het buurtblad: welk milieuprobleem vind jij het belangrijkst, wat gebeurt er als we niets doen, en welke drie oplossingen stel je voor?', model: 'Para mí, el problema más grave es el plástico en el mar. Si no hacemos nada, en 2050 habrá más plástico que peces. Propongo tres cosas: primero, deberíamos llevar siempre una bolsa reutilizable. Segundo, es necesario que los supermercados vendan menos productos con plástico. Y tercero, si vas a la playa, llévate tu basura. Si todos ayudamos, el mar se puede recuperar.' },
    scenario: { nl: 'Je doet mee aan een vrijwilligersproject op de Galápagoseilanden en praat met de coördinator over wat er moet gebeuren.', role: 'Eres Daniela, una bióloga ecuatoriana de Guayaquil de 33 años que coordina voluntarios en Galápagos. Eres apasionada por la naturaleza. Explicas los problemas (plástico, especies invasoras, turismo) y preguntas al estudiante qué haría y qué propone. Usas frases con «si…», «a menos que» y «deberíamos». Dices «bacán» y «chévere».', goal: 'Praat over oorzaken en oplossingen met si + presente, a menos que en deberíamos.' },
    reading: {
      t: 'Chile dice adiós a las bolsas plásticas', type: 'Nieuwsartikel',
      p: [
        ['En 2018, Chile se convirtió en el primer país de Latinoamérica que prohibió las bolsas plásticas en el comercio. Al principio, muchos clientes se quejaron. Hoy casi todos llevan su propia bolsa al supermercado.',
          'In 2018 werd Chili het eerste land in Latijns-Amerika dat plastic tasjes in winkels verbood. In het begin klaagden veel klanten. Nu neemt bijna iedereen zijn eigen tas mee naar de supermarkt.'],
        ['«Si no hubiéramos hecho nada, nuestras playas estarían llenas de plástico», explica la ministra del Medio Ambiente. Según los expertos, el país evita cada año miles de millones de bolsas.',
          '«Als we niets hadden gedaan, zouden onze stranden vol plastic liggen», legt de minister van Milieu uit. Volgens experts voorkomt het land elk jaar miljarden tasjes.'],
        ['Pero el problema no está resuelto. Muchos productos todavía vienen envueltos en plástico. Los ecologistas dicen que hay que ir más allá: «Si queremos un mar limpio, es necesario que las empresas cambien sus envases».',
          'Maar het probleem is niet opgelost. Veel producten zijn nog steeds in plastic verpakt. Milieuactivisten zeggen dat we verder moeten gaan: «Als we een schone zee willen, is het nodig dat bedrijven hun verpakkingen veranderen».'],
        ['Otros países siguieron el ejemplo: Colombia, Perú y la Ciudad de México también tienen leyes contra el plástico de un solo uso. ¿Y tú? ¿Llevas tu bolsa cuando vas de compras?',
          'Andere landen volgden het voorbeeld: Colombia, Peru en Mexico-Stad hebben ook wetten tegen wegwerpplastic. En jij? Neem je je tas mee als je boodschappen gaat doen?']
      ],
      gl: [['convertirse en', 'worden (tot)'], ['envuelto / envuelta', 'verpakt'], ['ir más allá', 'verder gaan'], ['el envase', 'de verpakking']],
      q: [
        { t: 'mc', q: '¿Qué hizo Chile en 2018?', o: ['Prohibió las bolsas plásticas en el comercio', 'Cerró sus playas', 'Prohibió todo el plástico'] },
        { t: 'mc', q: '¿Cómo reaccionaron los clientes al principio?', o: ['Se quejaron', 'Estaban felices', 'No se dieron cuenta'] },
        { t: 'mc', q: 'Según los ecologistas, ¿qué es necesario?', o: ['Que las empresas cambien sus envases', 'Que la gente no vaya a la playa', 'Que prohíban los supermercados'] },
        { t: 'mc', q: '¿Qué otros lugares tienen leyes parecidas?', o: ['Colombia, Perú y la Ciudad de México', 'Argentina y Uruguay', 'Ningún otro'] }
      ]
    }
  });

  /* ───────────────────────── B1 · 9 ───────────────────────── */
  U({
    id: 'b1-09', level: 'B1', icon: '🎭', title: 'Me puse rojo', nl: 'Gevoelens en veranderingen: ponerse, volverse, quedarse',
    goals: ['Over gevoelens en veranderingen praten met ponerse, volverse, quedarse en hacerse', 'Bijvoeglijke naamwoorden die met ser en estar iets anders betekenen', 'Je gevoelens beschrijven en erop reageren'],
    vocab: [
      ['ponerse pálido/a', 'bleek worden'], ['ponerse rojo/a', 'rood worden, blozen'], ['ponerse triste', 'verdrietig worden'], ['ponerse contento/a', 'blij worden'],
      ['volverse loco/a', 'gek worden'], ['volverse famoso/a', 'beroemd worden'], ['quedarse callado/a', 'stil blijven, niets zeggen'], ['quedarse sorprendido/a', 'verrast zijn'],
      ['quedarse embarazada', 'zwanger raken'], ['hacerse rico/a', 'rijk worden'], ['hacerse amigos', 'vrienden worden'], ['llegar a ser', 'het brengen tot, worden (na lange tijd)'],
      ['convertirse en', 'veranderen in, worden'], ['enamorarse de', 'verliefd worden op'], ['el enamoramiento', 'de verliefdheid'], ['la primera cita', 'het eerste afspraakje'],
      ['salir con alguien', 'met iemand uitgaan, verkering hebben'], ['el / la ex', 'de ex'], ['seguro / segura de sí mismo/a', 'zelfverzekerd'], ['celoso / celosa', 'jaloers (in een relatie)'],
      ['orgulloso / orgullosa', 'trots'], ['agradecido / agradecida', 'dankbaar'], ['harto / harta (de)', 'het zat (zijn)'], ['decepcionado / decepcionada', 'teleurgesteld'],
      ['ser listo / estar listo', 'slim zijn / klaar zijn'], ['ser aburrido / estar aburrido', 'saai zijn / zich vervelen'], ['ser rico / estar rico', 'rijk zijn / lekker zijn'],
      ['ser malo / estar malo', 'slecht zijn / ziek zijn'], ['ser verde / estar verde', 'groen zijn / onrijp zijn'], ['ser vivo / estar vivo', 'slim zijn / in leven zijn'],
      ['echar de menos', 'missen'], ['la mariposa en el estómago', 'vlinders in je buik'], ['¡me late!', 'dat zie ik zitten!', 'MX (informeel)'], ['apapachar', 'knuffelen, vertroetelen', 'MX'],
      ['¡qué onda contigo!', 'wat is er met jou aan de hand?', 'MX (informeel)']
    ],
    grammar: [
      { t: 'Worden: ponerse, volverse, quedarse, hacerse', es: 'Verbos de cambio',
        html: `<p>Het Spaans heeft geen één woord voor <i>worden</i>. Welk werkwoord je kiest, hangt af van het <b>soort verandering</b>:</p>`,
        table: [['werkwoord', 'soort verandering', 'voorbeeld'], ['ponerse', 'snel, tijdelijk (gevoel, kleur, uiterlijk)', 'Me puse nervioso. Se puso roja.'], ['volverse', 'ingrijpend, vaak blijvend (karakter)', 'Se volvió muy serio. Me voy a volver loco.'], ['quedarse', 'resultaat van iets (vaak verlies of verrassing)', 'Se quedó sin trabajo. Nos quedamos sorprendidos.'], ['hacerse', 'door eigen inzet (beroep, geloof, status)', 'Se hizo médico. Se hicieron ricos.'], ['llegar a ser', 'na een lange weg', 'Llegó a ser presidente.']],
        sum: 'Ponerse: cambio rápido. Volverse: cambio profundo. Quedarse: resultado. Hacerse: con esfuerzo.' },
      { t: 'Ser of estar: andere betekenis', es: 'Adjetivos con ser y estar',
        html: `<p>Sommige bijvoeglijke naamwoorden krijgen een <b>andere betekenis</b> met <i>ser</i> (eigenschap) of <i>estar</i> (toestand):</p>
<p><b>listo</b>: <i>Es lista</i> (ze is slim) · <i>Está lista</i> (ze is klaar)<br><b>aburrido</b>: <i>Es aburrido</i> (hij is saai) · <i>Está aburrido</i> (hij verveelt zich)<br><b>rico</b>: <i>Es rico</i> (hij is rijk) · <i>Está rico</i> (het is lekker)<br><b>malo</b>: <i>Es malo</i> (hij is slecht/gemeen) · <i>Está malo</i> (hij is ziek / het is bedorven)<br><b>verde</b>: <i>Es verde</i> (het is groen) · <i>Está verde</i> (het is onrijp)<br><b>vivo</b>: <i>Es muy vivo</i> (hij is slim, sluw) · <i>Está vivo</i> (hij leeft)</p>`,
        sum: 'Ser listo = inteligente; estar listo = preparado. Ser rico = tener dinero; estar rico = delicioso.' },
      { t: 'Gevoelens beschrijven', es: 'Hablar de sentimientos',
        html: `<p>Gevoelens over iets of iemand anders geef je vaak met de gustar-constructie of <b>que + subjuntivo</b> (zie B1·2): <i>Me pone nervioso que me miren.</i> (Ik word zenuwachtig als mensen naar me kijken.) · <i>Me da vergüenza hablar en público.</i></p>
<p>Handige uitdrukkingen: <b>me da vergüenza</b> (ik schaam me), <b>me da rabia</b> (het maakt me woedend), <b>me da igual</b> (het maakt me niet uit), <b>me hace ilusión</b> (ik verheug me erop), <b>estoy harto de</b> (ik ben het zat).</p>`,
        ex: [['Me pone triste que te vayas.', 'Ik word er verdrietig van dat je weggaat.'], ['Me hace mucha ilusión conocer a tu familia.', 'Ik verheug me er erg op je familie te leren kennen.']],
        sum: 'Me pone nervioso / me da vergüenza / me hace ilusión que + subjuntivo.' }
    ],
    verbs: ['ponerse', 'volverse', 'quedarse', 'hacer', 'ser', 'estar', 'sentir', 'enamorarse', 'casarse'], tenses: ['pret', 'pres', 'perf'],
    dialogue: {
      t: 'La primera cita', place: 'Guadalajara 🇲🇽',
      lines: [
        ['Fer', '¿Qué onda contigo, Mark? Te ves muy contento.', 'Wat is er met jou aan de hand, Mark? Je ziet er heel blij uit.'],
        ['Mark', 'Es que ayer salí con Mariana, la chica del curso de salsa.', 'Nou, gisteren ben ik uit geweest met Mariana, het meisje van de salsales.'],
        ['Fer', '¡No manches! ¿Y qué tal? Cuéntamelo todo.', 'Echt? En hoe was het? Vertel me alles.'],
        ['Mark', 'Al principio me puse muy nervioso. Cuando llegó, me quedé callado como un tonto.', 'In het begin werd ik heel zenuwachtig. Toen ze aankwam, zei ik geen woord, als een idioot.'],
        ['Fer', 'Jaja, normal. ¿Y ella?', 'Haha, logisch. En zij?'],
        ['Mark', 'Ella es muy lista. Empezó a hablar de música y me relajé. Luego fuimos a cenar birria.', 'Zij is heel slim. Ze begon over muziek te praten en ik werd rustiger. Daarna gingen we birria eten.'],
        ['Fer', '¿Y estaba rica la birria?', 'En was de birria lekker?'],
        ['Mark', 'Riquísima. Pero me puse rojo cuando se me cayó la salsa en la camisa.', 'Superlekker. Maar ik werd knalrood toen de saus op mijn overhemd viel.'],
        ['Fer', '¡Qué oso! ¿Y no se rió de ti?', 'Wat gênant! En lachte ze je niet uit?'],
        ['Mark', 'Sí, pero de buena onda. Al final nos hicimos muy amigos… o algo más. ¡El sábado volvemos a salir!', 'Ja, maar op een leuke manier. Uiteindelijk werden we goede vrienden… of iets meer. Zaterdag gaan we weer uit!'],
        ['Fer', '¡Me late! Ya te estás volviendo un tapatío de verdad.', 'Te gek! Je wordt nog een echte inwoner van Guadalajara.']
      ],
      q: [
        { t: 'mc', q: '¿Cómo se sintió Mark al principio de la cita?', o: ['Se puso muy nervioso', 'Se aburrió', 'Se puso triste'] },
        { t: 'mc', q: '¿Por qué se puso rojo Mark?', o: ['Se le cayó la salsa en la camisa', 'Mariana le dio un beso', 'No tenía dinero'] },
        { t: 'mc', q: '¿Qué van a hacer el sábado?', o: ['Volver a salir', 'Ir al curso de salsa', 'Cenar con Fer'] }
      ]
    },
    culture: { t: 'Daten en genegenheid in Mexico', html: `<p>❤️ In Latijns-Amerika ligt het tempo van een relatie vaak anders dan in Nederland. Mensen zijn direct en warm: complimenten (<i>piropos</i>) zijn normaal, en al snel ontmoet je de <b>familie</b>, die een grote rol speelt.</p>
<p>🤗 <b>Apapachar</b> is een Mexicaans woord uit het Nahuatl en betekent «iemand met de ziel omhelzen»: knuffelen, vertroetelen, iemand laten voelen dat je om hem geeft.</p>
<p>🌮 <b>Guadalajara</b> (Jalisco) is de stad van de mariachi, de tequila en de <b>birria</b> (pittige stoofpot van geit of rund). Inwoners heten <b>tapatíos</b>.</p>
<p>🗣️ Gevoelens laat je in het Spaans graag horen: <i>¡Te extrañé un montón!</i> (Ik heb je ontzettend gemist!) · <i>¡Estoy tan orgullosa de ti!</i></p>` },
    ex: [
      { t: 'cloze', s: 'Cuando la vi, me ___ muy nervioso.', h: 'ponerse', a: ['puse'], nl: 'Toen ik haar zag, werd ik heel zenuwachtig.', tag: 'become' },
      { t: 'cloze', s: 'Con la fama, el cantante se ___ muy arrogante.', h: 'volverse', a: ['volvió'], nl: 'Door de roem werd de zanger heel arrogant.', tag: 'become' },
      { t: 'cloze', s: 'Por la crisis, muchas personas se ___ sin trabajo.', h: 'quedarse', a: ['quedaron'], nl: 'Door de crisis raakten veel mensen hun werk kwijt.', tag: 'become' },
      { t: 'cloze', s: 'Mi hermana se ___ abogada después de ocho años de estudio.', h: 'hacerse', a: ['hizo'], nl: 'Mijn zus werd advocaat na acht jaar studie.', tag: 'become' },
      { t: 'cloze', s: 'Cuando me dijo la noticia, me ___ sin palabras.', a: ['quedé'], o: ['quedé', 'puse', 'volví'], nl: 'Toen hij me het nieuws vertelde, was ik sprakeloos.', tag: 'become' },
      { t: 'cloze', s: 'Si sigo trabajando así, me voy a ___ loco.', a: ['volver'], o: ['volver', 'poner', 'hacer'], nl: 'Als ik zo doorwerk, word ik gek.', tag: 'become' },
      { t: 'cloze', s: 'La comida ___ lista. ¡A la mesa!', a: ['está'], o: ['está', 'es', 'ha'], nl: 'Het eten is klaar. Aan tafel!', tag: 'ser-estar' },
      { t: 'cloze', s: 'Tu hija ___ muy lista: ya sabe leer.', a: ['es'], o: ['es', 'está', 'se pone'], nl: 'Je dochter is heel slim: ze kan al lezen.', tag: 'ser-estar' },
      { t: 'cloze', s: 'Esta sopa ___ riquísima.', a: ['está'], o: ['está', 'es', 'son'], nl: 'Deze soep is heerlijk.', tag: 'ser-estar' },
      { t: 'mc', q: '«Mi abuelo está malo» betekent…', o: ['Mijn opa is ziek.', 'Mijn opa is gemeen.', 'Mijn opa is slecht in iets.'], tag: 'ser-estar' },
      { t: 'mc', q: '«Estoy aburrido» betekent…', o: ['Ik verveel me.', 'Ik ben saai.', 'Ik ben moe.'], tag: 'ser-estar' },
      { t: 'mc', q: 'Welk werkwoord past? «Se ___ roja de vergüenza.»', o: ['puso', 'volvió', 'hizo'], tag: 'become' },
      { t: 'tr', nl: 'Ik werd heel zenuwachtig.', a: ['Me puse muy nervioso.', 'Me puse muy nerviosa.'], tag: 'become' },
      { t: 'tr', nl: 'Ze werden vrienden op de universiteit.', a: ['Se hicieron amigos en la universidad.', 'Se hicieron amigas en la universidad.', 'Ellos se hicieron amigos en la universidad.'], tag: 'become' },
      { t: 'tr', nl: 'Ik verheug me erg op de reis.', a: ['Me hace mucha ilusión el viaje.', 'El viaje me hace mucha ilusión.', 'Tengo muchas ganas de hacer el viaje.', 'Tengo muchas ganas del viaje.'], tag: 'vocab' },
      { t: 'order', s: 'Al principio me puse muy nervioso.', nl: 'In het begin werd ik heel zenuwachtig.', tag: 'become' },
      { t: 'match', p: [['celoso', 'jaloers'], ['orgulloso', 'trots'], ['harto', 'het zat'], ['agradecido', 'dankbaar'], ['tímido', 'verlegen']], tag: 'vocab' }
    ],
    say: [['Al principio me puse muy nervioso.', 'In het begin werd ik heel zenuwachtig.'], ['Me quedé sin palabras.', 'Ik was sprakeloos.'], ['¡Esta birria está riquísima!', 'Deze birria is heerlijk!'], ['Me hace mucha ilusión verte otra vez.', 'Ik verheug me erg om je weer te zien.']],
    task: { nl: 'Beschrijf een moment waarop je erg zenuwachtig, verlegen, blij of verrast was. Wat gebeurde er en hoe veranderde je gevoel? Gebruik ponerse, quedarse en volverse/hacerse.', model: 'El día de mi primera presentación en el trabajo me puse muy nervioso. Cuando empecé a hablar, me puse rojo y se me olvidó todo. Me quedé callado unos segundos. Pero mi jefa sonrió y me relajé. Al final la presentación salió muy bien y me puse muy contento. Desde ese día, hablar en público ya no me da tanto miedo.' },
    scenario: { nl: 'Je Mexicaanse vriend wil alles weten over een spannende gebeurtenis in je leven.', role: 'Eres Fer, un tapatío de 26 años, muy bromista y curioso, amigo del estudiante. Le preguntas cómo se sintió en distintas situaciones (una cita, un examen, un viaje) y quieres detalles: ¿te pusiste nervioso?, ¿te quedaste callado? Usas «¡no manches!», «¡qué oso!», «¡me late!» y «¿qué onda?».', goal: 'Beschrijf gevoelens en veranderingen met ponerse, quedarse en volverse.' },
    reading: {
      t: 'De tímido a cantante', type: 'Interview met een muzikant',
      p: [
        ['De niño, Julián Romero era tan tímido que se ponía rojo cuando la maestra le hacía una pregunta. Hoy, con 32 años, canta frente a miles de personas. ¿Cómo llegó a ser uno de los cantantes más conocidos de Jalisco?',
          'Als kind was Julián Romero zo verlegen dat hij rood werd als de juf hem een vraag stelde. Nu, op zijn 32e, zingt hij voor duizenden mensen. Hoe werd hij een van de bekendste zangers van Jalisco?'],
        ['«Todo empezó por mi abuelo, que era mariachi. Cuando él murió, me quedé muy triste y empecé a cantar sus canciones para sentirlo cerca. Así me enamoré de la música», cuenta Julián.',
          '«Het begon allemaal door mijn opa, die mariachi was. Toen hij overleed, was ik heel verdrietig en begon ik zijn liedjes te zingen om hem dichtbij te voelen. Zo werd ik verliefd op muziek», vertelt Julián.'],
        ['«La primera vez que canté en público me puse tan nervioso que se me olvidó la letra. Pero la gente aplaudió igual. Ese día me di cuenta de que el miedo no es tan malo: te hace estar atento.»',
          '«De eerste keer dat ik in het openbaar zong, werd ik zo zenuwachtig dat ik de tekst vergat. Maar de mensen klapten toch. Die dag besefte ik dat angst niet zo erg is: het houdt je scherp.»'],
        ['¿Se ha vuelto diferente con la fama? «Espero que no. Mi mamá dice que si me vuelvo arrogante, me jala las orejas. Sigo siendo el mismo chavo tímido… pero ahora con micrófono.»',
          'Is hij veranderd door de roem? «Ik hoop van niet. Mijn moeder zegt dat ze me aan mijn oren trekt als ik arrogant word. Ik ben nog steeds dezelfde verlegen jongen… maar nu met een microfoon.»']
      ],
      gl: [['la letra', 'de (liedjes)tekst'], ['aplaudir', 'applaudisseren'], ['atento / atenta', 'oplettend, scherp'], ['el chavo', 'de jongen (MX)']],
      q: [
        { t: 'mc', q: '¿Qué le pasaba a Julián de niño cuando la maestra le preguntaba algo?', o: ['Se ponía rojo', 'Se ponía a cantar', 'Se quedaba dormido'] },
        { t: 'mc', q: '¿Por qué empezó a cantar?', o: ['Para sentir cerca a su abuelo', 'Para hacerse rico', 'Porque su mamá quería'] },
        { t: 'mc', q: '¿Qué le pasó la primera vez que cantó en público?', o: ['Se le olvidó la letra', 'Nadie aplaudió', 'Se puso enfermo'] },
        { t: 'mc', q: '¿Qué hará su mamá si se vuelve arrogante?', o: ['Le jalará las orejas', 'Dejará de escucharlo', 'Se pondrá triste'] }
      ]
    }
  });

  /* ───────────────────────── B1 · 10 ───────────────────────── */
  U({
    id: 'b1-10', level: 'B1', icon: '⚖️', title: 'En mi opinión…', nl: 'Argumenteren en debatteren',
    goals: ['Een betoog opbouwen met verbindingswoorden (en primer lugar, sin embargo, por lo tanto)', 'Aunque met indicativo of subjuntivo gebruiken', 'Instemmen, tegenspreken en een compromis voorstellen'],
    vocab: [
      ['el debate', 'het debat'], ['el argumento', 'het argument'], ['a favor de', 'voor (iets)'], ['en contra de', 'tegen (iets)'], ['en primer lugar', 'ten eerste'],
      ['en segundo lugar', 'ten tweede'], ['finalmente', 'tenslotte'], ['por un lado', 'aan de ene kant'], ['por otro lado', 'aan de andere kant'], ['aun así', 'toch, desondanks'],
      ['no obstante', 'niettemin'], ['por lo tanto', 'daarom, dus'], ['en consecuencia', 'als gevolg daarvan'], ['a pesar de', 'ondanks'], ['en resumen', 'samengevat'],
      ['en conclusión', 'tot slot, concluderend'], ['es decir', 'dat wil zeggen'], ['por ejemplo', 'bijvoorbeeld'], ['estoy de acuerdo en que…', 'ik ben het ermee eens dat…'],
      ['no estoy de acuerdo con…', 'ik ben het niet eens met…'], ['tienes parte de razón', 'je hebt deels gelijk'], ['desde mi punto de vista', 'vanuit mijn standpunt'],
      ['el turismo masivo', 'het massatoerisme'], ['el / la habitante local', 'de lokale bewoner'], ['la gentrificación', 'de gentrificatie'], ['el alquiler temporal', 'de kortetermijnverhuur'],
      ['subir (los precios)', '(de prijzen) stijgen'], ['el puesto de trabajo', 'de arbeidsplaats'], ['los ingresos', 'de inkomsten'], ['la ley', 'de wet'], ['regular', 'reguleren'],
      ['limitar', 'beperken'], ['el equilibrio', 'het evenwicht'], ['beneficiar', 'ten goede komen aan'], ['perjudicar', 'schaden'], ['el impuesto', 'de belasting']
    ],
    grammar: [
      { t: 'Een betoog opbouwen', es: 'Organizar un argumento',
        html: `<p>Een goed betoog heeft een duidelijke <b>structuur</b>. Gebruik deze verbindingswoorden:</p>`,
        table: [['functie', 'verbindingswoorden'], ['ordenen', 'en primer lugar · en segundo lugar · además · por último'], ['tegenstellen', 'sin embargo · no obstante · en cambio · por otro lado'], ['gevolg', 'por lo tanto · por eso · en consecuencia · así que'], ['voorbeeld', 'por ejemplo · es decir · como'], ['afsluiten', 'en resumen · en conclusión · en definitiva']],
        ex: [['En primer lugar, el turismo crea empleo. Sin embargo, también sube los precios.', 'Ten eerste zorgt toerisme voor banen. Toch stijgen ook de prijzen.'], ['Por lo tanto, creo que hay que regularlo.', 'Daarom denk ik dat het gereguleerd moet worden.']],
        sum: 'En primer lugar… Además… Sin embargo… Por lo tanto… En conclusión…' },
      { t: 'Aunque + indicativo of subjuntivo', es: 'Aunque',
        html: `<p><b>Aunque</b> + <b>indicativo</b> = <i>hoewel</i>: je noemt een <b>feit</b> dat je erkent. <i>Aunque el turismo <b>trae</b> dinero, también tiene problemas.</i> (Het brengt geld op, dat is zo.)</p>
<p><b>Aunque</b> + <b>subjuntivo</b> = <i>ook al, zelfs als</i>: het maakt niet uit of het waar is, of het is nog niet zeker. <i>Aunque <b>traiga</b> dinero, no lo quiero en mi barrio.</i> (Al zou het geld opbrengen…) · <i>Aunque <b>llueva</b>, voy a ir.</i> (Ook als het regent.)</p>
<p><b>A pesar de</b> + infinitief of zelfstandig naamwoord: <i>A pesar del ruido, me encanta vivir aquí.</i></p>`,
        sum: 'Aunque + indicativo: hecho real. Aunque + subjuntivo: no importa / no es seguro.' },
      { t: 'Instemmen en tegenspreken', es: 'Acuerdo y desacuerdo',
        html: `<p><b>Instemmen:</b> <i>Estoy de acuerdo contigo. · Tienes toda la razón. · Exacto. · Eso es.</i></p>
<p><b>Deels instemmen:</b> <i>Tienes parte de razón, pero… · Es verdad que…, sin embargo… · Puede ser, aunque…</i></p>
<p><b>Tegenspreken:</b> <i>No estoy de acuerdo. · No creo que <b>sea</b> así. · No es verdad que <b>sea</b> tan simple.</i> (ontkenning → subjuntivo)</p>
<p><b>Compromis:</b> <i>¿Y si buscamos un punto medio? · Lo ideal sería que…</i> + subjuntivo (B2: <i>que hubiera…</i>).</p>`,
        sum: 'Estoy de acuerdo / tienes parte de razón, pero… / no creo que + subjuntivo.' }
    ],
    verbs: ['ser', 'tener', 'haber', 'creer', 'pensar', 'opinar', 'traer', 'subir', 'mejorar', 'beneficiar', 'proponer', 'limitar'], tenses: ['pres', 'subj', 'cond'],
    dialogue: {
      t: '¿Más turistas en Cusco?', place: 'Cusco 🇵🇪',
      lines: [
        ['Moderadora', 'Bienvenidos al debate. El tema de hoy: ¿hay que limitar el número de turistas en Machu Picchu? Profesora Quispe, usted primero.', 'Welkom bij het debat. Het onderwerp vandaag: moet het aantal toeristen in Machu Picchu beperkt worden? Professor Quispe, u eerst.'],
        ['Prof. Quispe', 'Gracias. En primer lugar, las ruinas se están deteriorando. Por lo tanto, creo que es necesario que limitemos las entradas.', 'Dank u. Ten eerste raken de ruïnes in verval. Daarom denk ik dat het nodig is dat we het aantal kaartjes beperken.'],
        ['Sr. Huamán', 'No estoy de acuerdo. Aunque entiendo el problema, el turismo da trabajo a miles de familias cusqueñas.', 'Daar ben ik het niet mee eens. Hoewel ik het probleem begrijp, geeft het toerisme werk aan duizenden families in Cusco.'],
        ['Prof. Quispe', 'Tiene parte de razón. Sin embargo, si destruimos Machu Picchu, no habrá turismo en el futuro.', 'U heeft deels gelijk. Maar als we Machu Picchu vernietigen, is er in de toekomst geen toerisme meer.'],
        ['Mark', '¿Puedo decir algo? Yo soy turista y, aunque me cueste más, prefiero visitar un lugar protegido.', 'Mag ik iets zeggen? Ik ben toerist en, ook al kost het me meer, ik bezoek liever een beschermde plek.'],
        ['Sr. Huamán', 'Pero no todos los turistas piensan así. Además, ya subieron mucho los precios en la ciudad.', 'Maar niet alle toeristen denken zo. Bovendien zijn de prijzen in de stad al flink gestegen.'],
        ['Prof. Quispe', 'Exacto. Por un lado el turismo trae dinero; por otro lado, muchos cusqueños ya no pueden pagar el alquiler en el centro.', 'Precies. Aan de ene kant brengt toerisme geld op; aan de andere kant kunnen veel inwoners van Cusco de huur in het centrum niet meer betalen.'],
        ['Moderadora', '¿Y qué proponen?', 'En wat stellen jullie voor?'],
        ['Sr. Huamán', 'Propongo que los turistas se queden más días y visiten otros lugares, no solo Machu Picchu.', 'Ik stel voor dat toeristen meer dagen blijven en ook andere plekken bezoeken, niet alleen Machu Picchu.'],
        ['Prof. Quispe', 'En eso estoy de acuerdo. En resumen: menos turistas al mismo tiempo, pero más tiempo en la región.', 'Daar ben ik het mee eens. Samengevat: minder toeristen tegelijk, maar langer in de regio.']
      ],
      q: [
        { t: 'mc', q: '¿Qué propone la profesora Quispe al principio?', o: ['Limitar las entradas a Machu Picchu', 'Cerrar Machu Picchu', 'Traer más turistas'] },
        { t: 'mc', q: '¿Por qué no está de acuerdo el señor Huamán?', o: ['Porque el turismo da trabajo a muchas familias', 'Porque no le gustan los turistas', 'Porque las ruinas están bien'] },
        { t: 'mc', q: '¿En qué están de acuerdo al final?', o: ['Menos turistas al mismo tiempo, pero más días en la región', 'Cerrar el centro de Cusco', 'Subir los precios'] }
      ]
    },
    culture: { t: 'Toerisme en de Andes', html: `<p>🏔️ <b>Machu Picchu</b> trekt meer dan een miljoen bezoekers per jaar. Daarom is het aantal kaartjes per dag beperkt en mag je alleen met een gids en via vaste routes naar binnen.</p>
<p>🗣️ In de regio Cusco spreken veel mensen naast Spaans ook <b>Quechua</b>, de taal van de Inca’s. Woorden als <i>cancha</i> (veld), <i>papa</i> (aardappel), <i>puma</i>, <i>cóndor</i> en <i>llama</i> komen uit het Quechua. Ook <b>soroche</b> (hoogteziekte) en <b>chacra</b> (akker) zijn Quechua.</p>
<p>💬 In discussies is het in Latijns-Amerika beleefd om de ander eerst <b>gelijk te geven</b> voordat je tegenspreekt: <i>Tiene toda la razón en que…, pero…</i> Een harde aanval op iemands mening kan als persoonlijk worden opgevat.</p>` },
    ex: [
      { t: 'cloze', s: 'El turismo crea empleo. ___, también sube los precios.', a: ['Sin embargo'], o: ['Sin embargo', 'Por lo tanto', 'Además'], nl: 'Toerisme zorgt voor banen. Toch stijgen ook de prijzen.', tag: 'argument' },
      { t: 'cloze', s: 'Las ruinas se deterioran; ___, hay que limitar las visitas.', a: ['por lo tanto'], o: ['por lo tanto', 'sin embargo', 'a pesar de'], nl: 'De ruïnes raken in verval; daarom moeten de bezoeken beperkt worden.', tag: 'argument' },
      { t: 'cloze', s: '___ del ruido, me encanta vivir en el centro.', a: ['A pesar'], o: ['A pesar', 'Aunque', 'Sin embargo'], nl: 'Ondanks het lawaai woon ik graag in het centrum.', tag: 'argument' },
      { t: 'cloze', s: 'Aunque el turismo ___ dinero, tiene muchos problemas.', a: ['trae'], o: ['trae', 'traiga', 'traerá'], nl: 'Hoewel het toerisme geld oplevert, heeft het veel problemen.', x: 'Je erkent een feit → indicativo.', tag: 'argument' },
      { t: 'cloze', s: 'Aunque ___ mañana, vamos a ir a la manifestación.', h: 'llover', a: ['llueva'], nl: 'Ook al regent het morgen, we gaan naar de demonstratie.', x: 'Het is nog niet zeker / het maakt niet uit → subjuntivo.', tag: 'argument' },
      { t: 'cloze', s: 'No es verdad que el turismo ___ solo cosas buenas.', h: 'traer', a: ['traiga'], nl: 'Het is niet waar dat toerisme alleen maar goede dingen brengt.', tag: 'subj-opinion' },
      { t: 'cloze', s: 'Propongo que el gobierno ___ los alquileres temporales.', h: 'regular', a: ['regule'], nl: 'Ik stel voor dat de regering de kortetermijnverhuur reguleert.', tag: 'subj-wish' },
      { t: 'mc', q: 'Welk woord geeft een GEVOLG?', o: ['por lo tanto', 'sin embargo', 'por ejemplo'], tag: 'argument' },
      { t: 'mc', q: 'Welk woord gebruik je om AF TE SLUITEN?', o: ['en conclusión', 'en primer lugar', 'por otro lado'], tag: 'argument' },
      { t: 'mc', q: 'Hoe spreek je beleefd tegen?', o: ['Tienes parte de razón, pero…', '¡No tienes razón!', 'Eso es mentira.'], tag: 'argument' },
      { t: 'mc', q: '«Aunque me cueste más, prefiero un lugar protegido.» betekent…', o: ['Ook al kost het me meer, ik heb liever een beschermde plek.', 'Omdat het meer kost, wil ik een beschermde plek.', 'Het kost meer, dus ik ga niet.'], tag: 'argument' },
      { t: 'tr', nl: 'Ten eerste ben ik het niet met je eens.', a: ['En primer lugar, no estoy de acuerdo contigo.', 'En primer lugar, no estoy de acuerdo.', 'Primero, no estoy de acuerdo contigo.'], tag: 'argument' },
      { t: 'tr', nl: 'Aan de ene kant brengt het geld op, aan de andere kant schaadt het de natuur.', a: ['Por un lado trae dinero, por otro lado perjudica la naturaleza.', 'Por un lado, trae dinero; por otro lado, perjudica la naturaleza.', 'Por un lado trae dinero, por otro perjudica la naturaleza.', 'Por un lado, trae dinero, por otro lado, perjudica a la naturaleza.'], tag: 'argument' },
      { t: 'tr', nl: 'Samengevat: we moeten een evenwicht vinden.', a: ['En resumen: tenemos que encontrar un equilibrio.', 'En resumen, tenemos que encontrar un equilibrio.', 'En resumen: hay que encontrar un equilibrio.', 'En resumen, hay que encontrar un equilibrio.'], tag: 'argument' },
      { t: 'order', s: 'Tiene parte de razón pero no estoy de acuerdo.', nl: 'U heeft deels gelijk, maar ik ben het er niet mee eens.', tag: 'argument' },
      { t: 'match', p: [['sin embargo', 'echter'], ['por lo tanto', 'daarom'], ['a pesar de', 'ondanks'], ['en resumen', 'samengevat'], ['es decir', 'dat wil zeggen']], tag: 'argument' }
    ],
    say: [['En primer lugar, quiero decir que estoy de acuerdo.', 'Ten eerste wil ik zeggen dat ik het ermee eens ben.'], ['Tiene parte de razón, pero no creo que sea tan simple.', 'U heeft deels gelijk, maar ik denk niet dat het zo simpel is.'], ['Por lo tanto, propongo que busquemos un punto medio.', 'Daarom stel ik voor dat we een middenweg zoeken.'], ['En conclusión, hay que encontrar un equilibrio.', 'Tot slot: we moeten een evenwicht vinden.']],
    task: { nl: 'Schrijf een kort betoog (8–10 zinnen) over de stelling: «Toeristen zouden extra belasting moeten betalen in populaire steden.» Geef argumenten voor én tegen, en sluit af met je eigen mening. Gebruik minstens zes verbindingswoorden en één keer aunque + subjuntivo.', model: 'En los últimos años, el turismo en ciudades como Cusco y Ámsterdam ha crecido muchísimo. Por un lado, los turistas traen dinero y crean empleo. Por otro lado, suben los precios y los habitantes locales ya no pueden pagar el alquiler. En primer lugar, creo que un impuesto turístico ayudaría a proteger los monumentos. Además, el dinero podría usarse para mejorar el transporte. Sin embargo, no creo que sea justo para los turistas con poco dinero. En conclusión, estoy a favor del impuesto, aunque sea pequeño, siempre que el dinero beneficie a la ciudad.' },
    scenario: { nl: 'Je doet mee aan een debat over massatoerisme. De AI verdedigt het tegenovergestelde standpunt.', role: 'Eres el señor Huamán, un empresario turístico de Cusco de 50 años. Defiendes el turismo con pasión: da trabajo, dinero y orgullo cultural. El estudiante tiene la opinión contraria. Debates de forma educada pero firme, usando «en primer lugar», «sin embargo», «por lo tanto», «aunque». Reconoces cuando el estudiante tiene parte de razón y al final buscan un punto medio.', goal: 'Debatteer met verbindingswoorden, aunque en beleefd tegenspreken.' },
    reading: {
      t: '¿Alquileres temporales: sí o no?', type: 'Twee meningen in een krant',
      p: [
        ['A FAVOR — Lucía Bermúdez, propietaria, Ciudad de México: «Alquilo mi departamento a turistas desde hace tres años. Gracias a eso pude pagar la universidad de mi hija. En primer lugar, los turistas gastan en restaurantes y tiendas del barrio. Además, es mi propiedad y tengo derecho a decidir qué hago con ella.»',
          'VOOR — Lucía Bermúdez, eigenaar, Mexico-Stad: «Ik verhuur mijn appartement al drie jaar aan toeristen. Daardoor kon ik de universiteit van mijn dochter betalen. Ten eerste geven toeristen geld uit in restaurants en winkels in de buurt. Bovendien is het mijn eigendom en heb ik het recht om te beslissen wat ik ermee doe.»'],
        ['«Es verdad que algunos turistas hacen ruido. Sin embargo, no creo que sea justo culpar a todos los propietarios por eso.»',
          '«Het is waar dat sommige toeristen lawaai maken. Toch vind ik het niet eerlijk om alle eigenaren daarvan de schuld te geven.»'],
        ['EN CONTRA — Diego Salinas, vecino de la colonia Roma: «En mi edificio ya casi no quedan vecinos: el setenta por ciento son departamentos para turistas. Los alquileres subieron un cuarenta por ciento en cinco años. Por lo tanto, muchas familias tuvieron que irse a vivir lejos de su trabajo.»',
          'TEGEN — Diego Salinas, bewoner van de wijk Roma: «In mijn gebouw wonen bijna geen buren meer: zeventig procent zijn appartementen voor toeristen. De huren zijn in vijf jaar veertig procent gestegen. Daardoor moesten veel gezinnen ver van hun werk gaan wonen.»'],
        ['«No estoy en contra del turismo. Aunque el gobierno no lo quiera ver, necesitamos reglas claras: un límite de días por año y un impuesto que se use para vivienda. En conclusión, la ciudad debe ser primero para quienes viven en ella.»',
          '«Ik ben niet tegen toerisme. Ook al wil de overheid het niet zien, we hebben duidelijke regels nodig: een maximum aantal dagen per jaar en een belasting die voor woningbouw wordt gebruikt. Tot slot: de stad moet in de eerste plaats van de mensen zijn die er wonen.»']
      ],
      gl: [['el / la propietario/a', 'de eigenaar'], ['culpar', 'de schuld geven'], ['la colonia', 'de wijk (MX)'], ['la vivienda', 'de woning, huisvesting']],
      q: [
        { t: 'mc', q: '¿Qué pudo pagar Lucía gracias a los alquileres?', o: ['La universidad de su hija', 'Un departamento nuevo', 'Un viaje'] },
        { t: 'mc', q: '¿Qué reconoce Lucía?', o: ['Que algunos turistas hacen ruido', 'Que los alquileres son injustos', 'Que no tiene derecho a alquilar'] },
        { t: 'mc', q: 'Según Diego, ¿cuánto subieron los alquileres?', o: ['Un cuarenta por ciento en cinco años', 'Un setenta por ciento', 'Nada'] },
        { t: 'mc', q: '¿Qué propone Diego?', o: ['Un límite de días y un impuesto para vivienda', 'Prohibir el turismo', 'Bajar los impuestos'] }
      ]
    }
  });
})(window.SPT);
