/* Niveau A2 — Latijns-Amerikaans Spaans. Zie a1.js voor het formaat. */
(function (S) {
  'use strict';
  const U = S.addUnit;

  /* ───────────────────────── A2 · 1 ───────────────────────── */
  U({
    id: 'a2-01', level: 'A2', icon: '📅', title: '¿Qué hiciste ayer?', nl: 'Pretérito indefinido: regelmatige vormen',
    goals: ['Vertellen wat je gisteren of vorig weekend deed', 'De regelmatige indefinido vormen', 'Tijdsaanduidingen voor het verleden gebruiken'],
    vocab: [
      ['ayer', 'gisteren'], ['anoche', 'gisteravond / vannacht'], ['anteayer', 'eergisteren'], ['la semana pasada', 'vorige week'],
      ['el mes pasado', 'vorige maand'], ['el año pasado', 'vorig jaar'], ['el fin de semana pasado', 'afgelopen weekend'], ['hace dos días', 'twee dagen geleden'],
      ['¿cómo te fue?', 'hoe was het? / hoe ging het?'], ['me fue bien', 'het ging goed'], ['pasarla bien', 'het naar je zin hebben', 'LatAm: la pasamos bien'],
      ['visitar', 'bezoeken'], ['limpiar', 'schoonmaken'], ['terminar', 'afmaken / eindigen'], ['quedarse', 'blijven'], ['conocer (pret.)', 'leren kennen'],
      ['salir', 'uitgaan / vertrekken'], ['volver', 'terugkomen'], ['recibir', 'ontvangen'], ['ganar', 'winnen'], ['perder', 'verliezen / missen'],
      ['la reunión', 'de vergadering'], ['el correo', 'de e-mail / de post'], ['la fiesta', 'het feest'], ['el concierto', 'het concert'],
      ['el partido', 'de wedstrijd'], ['el volcán', 'de vulkaan'], ['¡pura vida!', 'top! / alles goed! (groet en bedankje)', 'CR'],
      ['¡qué tuanis!', 'wat tof!', 'CR'], ['ya', 'al / nu']
    ],
    grammar: [
      { t: 'Indefinido: regelmatige vormen', es: 'Pretérito indefinido regular',
        html: `<p>De <b>pretérito indefinido</b> (ook wel <i>pretérito perfecto simple</i>) gebruik je voor <b>afgeronde handelingen</b> in het verleden: <i>ayer, el lunes, en 2020, hace dos años</i>.</p>
<p>⚠️ Let op de <b>accenten</b>: <i>hablo</i> (ik spreek) is iets anders dan <i>habló</i> (hij sprak). <b>-er</b> en <b>-ir</b> hebben dezelfde uitgangen.</p>`,
        table: [['', 'hablar', 'comer', 'vivir'], ['yo', 'hablé', 'comí', 'viví'], ['tú', 'hablaste', 'comiste', 'viviste'], ['él / ella / usted', 'habló', 'comió', 'vivió'], ['nosotros', 'hablamos', 'comimos', 'vivimos'], ['ellos / ustedes', 'hablaron', 'comieron', 'vivieron']],
        sum: '-ar: é, aste, ó, amos, aron · -er/-ir: í, iste, ió, imos, ieron' },
      { t: 'Spellingveranderingen bij yo', es: 'Cambios ortográficos',
        html: `<p>De klank moet hetzelfde blijven, daarom verandert bij <b>yo</b> de spelling:</p>
<p><b>-car → -qué:</b> buscar → <i>busqué</i>, tocar → <i>toqué</i>, sacar → <i>saqué</i><br>
<b>-gar → -gué:</b> llegar → <i>llegué</i>, pagar → <i>pagué</i>, jugar → <i>jugué</i><br>
<b>-zar → -cé:</b> empezar → <i>empecé</i>, almorzar → <i>almorcé</i>, cruzar → <i>crucé</i></p>
<p>En bij <i>leer, creer</i> en <i>oír</i> wordt de i een <b>y</b>: <i>leyó, leyeron, creyó, oyó</i>.</p>` },
      { t: 'Latijns-Amerika: indefinido voor bijna alles', es: 'El indefinido en Latinoamérica',
        html: `<p>In Spanje zegt men <i>Hoy me he levantado temprano</i>. In Latijns-Amerika gebruik je ook voor vandaag gewoon de indefinido: <b>Hoy me levanté temprano.</b> <i>¿Ya comiste?</i> (heb je al gegeten?) hoor je overal.</p>
<p><b>hace + tijd</b> = geleden: <i>Llegué hace tres días.</i> (Ik ben drie dagen geleden aangekomen.)</p>` }
    ],
    verbs: ['hablar', 'trabajar', 'comer', 'vivir', 'escribir', 'llegar', 'buscar', 'empezar', 'salir', 'volver', 'leer', 'pagar'], tenses: ['pret'],
    dialogue: {
      t: '¿Cómo te fue el fin de semana?', place: 'San José 🇨🇷',
      lines: [
        ['Andrea', '¡Hola, Mark! ¿Cómo te fue el fin de semana?', 'Hoi Mark! Hoe was je weekend?'],
        ['Mark', '¡Muy bien! El sábado visité el volcán Poás con unos amigos.', 'Heel goed! Zaterdag heb ik met een paar vrienden de Poás-vulkaan bezocht.'],
        ['Andrea', '¡Qué tuanis! ¿Y vieron el cráter?', 'Wat tof! En hebben jullie de krater gezien?'],
        ['Mark', 'Sí, llegamos muy temprano y lo vimos perfecto. Después llovió un poco.', 'Ja, we kwamen heel vroeg aan en zagen hem perfect. Daarna regende het een beetje.'],
        ['Andrea', '¿Y el domingo?', 'En zondag?'],
        ['Mark', 'El domingo me quedé en casa. Limpié el apartamento, cociné y anoche miré una película. ¿Y tú?', 'Zondag bleef ik thuis. Ik heb het appartement schoongemaakt, gekookt en gisteravond een film gekeken. En jij?'],
        ['Andrea', 'Yo salí a bailar el viernes y volví a las tres de la mañana. El sábado dormí todo el día.', 'Ik ging vrijdag dansen en kwam om drie uur ’s nachts thuis. Zaterdag heb ik de hele dag geslapen.'],
        ['Mark', '¡Ja, ja! ¿Y el domingo?', 'Haha! En zondag?'],
        ['Andrea', 'Almorcé con mi familia y después estudié para un examen.', 'Ik heb met mijn familie geluncht en daarna voor een examen gestudeerd.'],
        ['Mark', '¡Pura vida!', 'Top!']
      ],
      q: [
        { t: 'mc', q: '¿Qué visitó Mark el sábado?', o: ['El volcán Poás', 'Un museo', 'La playa'] },
        { t: 'mc', q: '¿Qué hizo Mark el domingo?', o: ['Se quedó en casa', 'Salió a bailar', 'Estudió para un examen'] },
        { t: 'mc', q: '¿A qué hora volvió Andrea el viernes?', o: ['A las tres de la mañana', 'A las once de la noche', 'A las cinco de la tarde'] }
      ]
    },
    culture: { t: 'Costa Rica: ¡pura vida!', html: `<p>🇨🇷 <b>Pura vida</b> is in Costa Rica overal bruikbaar: als groet, als bedankje en om te zeggen dat alles goed is. Costa Ricanen noemen zichzelf <b>ticos</b>. Vrienden noemen elkaar <i>mae</i> (gast) en iets leuks is <i>tuanis</i>.</p>
<p>Costa Rica gebruikt veel <b>usted</b>, ook in informele situaties, en daarnaast <b>vos</b> onder vrienden.</p>
<p>🗣️ Een gesprek op maandag begint meestal zo: <i>¿Cómo te fue el fin de semana?</i> of <i>¿Qué tal tu finde?</i> (<i>finde</i> = fin de semana).</p>` },
    ex: [
      { t: 'cloze', s: 'Ayer ___ con mi jefe.', h: 'hablar, yo', a: ['hablé'], nl: 'Gisteren heb ik met mijn baas gesproken.', tag: 'pret-regular' },
      { t: 'cloze', s: '¿Qué ___ anoche?', h: 'comer, tú', a: ['comiste'], nl: 'Wat heb je gisteravond gegeten?', tag: 'pret-regular' },
      { t: 'cloze', s: 'Mi abuela me ___ una carta.', h: 'escribir', a: ['escribió'], nl: 'Mijn oma heeft me een brief geschreven.', tag: 'pret-regular' },
      { t: 'cloze', s: 'Ellos ___ a las diez.', h: 'salir', a: ['salieron'], nl: 'Zij vertrokken om tien uur.', tag: 'pret-regular' },
      { t: 'cloze', s: 'Ayer ___ tarde al trabajo.', h: 'llegar, yo', a: ['llegué'], nl: 'Gisteren kwam ik te laat op mijn werk.', x: '-gar → -gué bij yo.', tag: 'pret-regular' },
      { t: 'cloze', s: '___ mis llaves por todas partes.', h: 'buscar, yo', a: ['Busqué'], nl: 'Ik heb overal mijn sleutels gezocht.', x: '-car → -qué bij yo.', tag: 'pret-regular' },
      { t: 'cloze', s: 'El lunes ___ un curso de salsa.', h: 'empezar, yo', a: ['empecé'], nl: 'Maandag ben ik met een salsacursus begonnen.', x: '-zar → -cé bij yo.', tag: 'pret-regular' },
      { t: 'cloze', s: 'Ella ___ el libro en dos días.', h: 'leer', a: ['leyó'], nl: 'Zij las het boek in twee dagen.', tag: 'pret-regular' },
      { t: 'mc', q: '«Llegué hace dos días» betekent:', o: ['Ik ben twee dagen geleden aangekomen.', 'Ik kom over twee dagen aan.', 'Ik ben er al twee dagen.'], tag: 'pret-regular' },
      { t: 'mc', q: 'Hoe vraag je in Mexico meestal «Heb je al gegeten?»', o: ['¿Ya comiste?', '¿Ya comes?', '¿Ya comerás?'], x: 'In Latijns-Amerika gebruik je hier meestal de indefinido.', tag: 'pret-regular' },
      { t: 'mc', q: '«Hablo» of «habló»: wat betekent «habló»?', o: ['hij/zij/u sprak', 'ik spreek', 'ik sprak'], tag: 'pret-regular' },
      { t: 'tr', nl: 'Gisteren heb ik tot laat gewerkt.', a: ['Ayer trabajé hasta tarde.', 'Trabajé hasta tarde ayer.'], tag: 'pret-regular' },
      { t: 'tr', nl: 'Hoe was je weekend?', a: ['¿Cómo te fue el fin de semana?', '¿Qué tal el fin de semana?', '¿Qué tal tu fin de semana?', '¿Cómo estuvo tu fin de semana?', '¿Cómo estuvo el fin de semana?', '¿Cómo te fue el fin?'], tag: 'pret-regular' },
      { t: 'tr', nl: 'Gisteravond hebben we een film gekeken.', a: ['Anoche miramos una película.', 'Anoche vimos una película.', 'Vimos una película anoche.', 'Miramos una película anoche.'], tag: 'pret-regular' },
      { t: 'order', s: 'El sábado visité a mis abuelos.', nl: 'Zaterdag ben ik bij mijn opa en oma op bezoek geweest.' }
    ],
    say: [['¿Cómo te fue el fin de semana?', 'Hoe was je weekend?'], ['El sábado visité a mis amigos.', 'Zaterdag heb ik mijn vrienden bezocht.'], ['Anoche llegué muy tarde.', 'Gisteravond kwam ik heel laat thuis.']],
    task: { nl: 'Vertel wat je afgelopen weekend hebt gedaan: minstens 5 handelingen in de indefinido.', model: 'El sábado me levanté tarde. Desayuné con mi novia y después visitamos el mercado. En la noche salimos a comer. El domingo limpié la casa y llamé a mis padres.' },
    scenario: { nl: 'Maandagochtend: een Costa Ricaanse collega vraagt naar je weekend.', role: 'Eres Andrea, una colega costarricense (tica) muy alegre en San José. Usas «pura vida» y «tuanis». Preguntas con detalle qué hizo el estudiante el fin de semana.', goal: 'Vertel wat je zaterdag en zondag hebt gedaan en vraag naar haar weekend.' }
  });

  /* ───────────────────────── A2 · 2 ───────────────────────── */
  U({
    id: 'a2-02', level: 'A2', icon: '✈️', title: 'Un viaje inolvidable', nl: 'Indefinido: onregelmatige werkwoorden',
    goals: ['Over een reis vertellen', 'De belangrijkste onregelmatige indefinido-vormen', 'Ser en ir in de indefinido uit elkaar houden'],
    vocab: [
      ['el viaje', 'de reis'], ['el vuelo', 'de vlucht'], ['el aeropuerto', 'het vliegveld'], ['el boleto', 'het kaartje', 'CO: el tiquete · vliegticket: el pasaje'],
      ['el equipaje', 'de bagage'], ['el pasaporte', 'het paspoort'], ['el hostal', 'het hostel / pension'], ['la reserva', 'de reservering'],
      ['la frontera', 'de grens'], ['el paisaje', 'het landschap'], ['la selva', 'de jungle / het regenwoud'], ['el desierto', 'de woestijn'],
      ['la costa', 'de kust'], ['la isla', 'het eiland'], ['el lago', 'het meer'], ['las ruinas', 'de ruïnes'], ['el / la guía', 'de gids'],
      ['la carretera', 'de (snel)weg'], ['manejar', 'autorijden', 'ES: conducir'], ['el carro', 'de auto', 'AR/CL/UY: el auto · ES: el coche'],
      ['hacer una excursión', 'een uitstapje maken'], ['sacar / tomar fotos', 'foto’s maken'], ['perder el vuelo', 'de vlucht missen'],
      ['la altura', 'de hoogte'], ['el soroche', 'hoogteziekte', 'Andes'], ['increíble', 'ongelooflijk'], ['inolvidable', 'onvergetelijk'],
      ['valiente', 'dapper'], ['el regalo', 'het cadeau']
    ],
    grammar: [
      { t: 'Ser en ir: dezelfde vormen!', es: 'Ser e ir en indefinido',
        html: `<p>In de indefinido zijn <b>ser</b> en <b>ir</b> precies gelijk. Uit de context blijkt wat je bedoelt: <i>Fui a Lima</i> (ik ging naar Lima) of <i>Fue increíble</i> (het was ongelooflijk).</p>`,
        table: [['', 'ser / ir'], ['yo', 'fui'], ['tú', 'fuiste'], ['él / ella / usted', 'fue'], ['nosotros', 'fuimos'], ['ellos / ustedes', 'fueron']] },
      { t: 'Sterke werkwoorden (zonder accent!)', es: 'Pretéritos fuertes',
        html: `<p>Een groep veelgebruikte werkwoorden krijgt een nieuwe stam en de uitgangen <b>-e, -iste, -o, -imos, -ieron</b>, <b>zonder accenten</b>.</p>
<p>Bij een stam op <b>-j</b> wordt <i>ellos</i> <b>-eron</b>: <i>dijeron, trajeron, condujeron</i>.<br>
<b>dar</b> en <b>ver</b> krijgen de -er/-ir-uitgangen zonder accent: <i>di, diste, dio, dimos, dieron · vi, viste, vio, vimos, vieron</i>.</p>`,
        table: [['infinitief', 'stam', 'yo', 'él / ella'], ['tener', 'tuv-', 'tuve', 'tuvo'], ['estar', 'estuv-', 'estuve', 'estuvo'], ['poder', 'pud-', 'pude', 'pudo'], ['poner', 'pus-', 'puse', 'puso'], ['saber', 'sup-', 'supe', 'supo'], ['querer', 'quis-', 'quise', 'quiso'], ['venir', 'vin-', 'vine', 'vino'], ['hacer', 'hic-', 'hice', '<b>hizo</b>'], ['decir', 'dij-', 'dije', 'dijo'], ['traer', 'traj-', 'traje', 'trajo']],
        sum: 'tuve, estuve, pude, puse, supe, quise, vine, hice, dije, traje — ¡sin tilde!' }
    ],
    verbs: ['ser', 'ir', 'tener', 'estar', 'hacer', 'poder', 'poner', 'venir', 'decir', 'traer', 'querer', 'saber', 'dar', 'ver'], tenses: ['pret'],
    dialogue: {
      t: 'El viaje a Cusco', place: 'Lima 🇵🇪',
      lines: [
        ['Rosa', '¿Y qué tal tu viaje a Cusco?', 'En hoe was je reis naar Cusco?'],
        ['Mark', '¡Fue increíble! Fui con mi hermano en junio.', 'Het was ongelooflijk! Ik ben er in juni met mijn broer geweest.'],
        ['Rosa', '¿Cómo llegaron?', 'Hoe zijn jullie er gekomen?'],
        ['Mark', 'Fuimos en avión de Lima a Cusco. Pero el primer día estuve un poco mal por la altura.', 'We vlogen van Lima naar Cusco. Maar de eerste dag voelde ik me niet zo goed door de hoogte.'],
        ['Rosa', 'Es normal, es el soroche. ¿Tomaste mate de coca?', 'Dat is normaal, dat is hoogteziekte. Heb je cocathee gedronken?'],
        ['Mark', 'Sí, la señora del hostal nos hizo un mate. ¡Y funcionó!', 'Ja, de vrouw van het hostel zette cocathee voor ons. En het werkte!'],
        ['Rosa', '¿Y pudieron ver Machu Picchu?', 'En hebben jullie Machu Picchu kunnen zien?'],
        ['Mark', 'Sí, hicimos el Camino Inca. Tuvimos que caminar cuatro días.', 'Ja, we hebben de Inca Trail gelopen. We moesten vier dagen lopen.'],
        ['Rosa', '¡Qué valientes! ¿Y qué dijo tu hermano?', 'Wat dapper! En wat zei je broer?'],
        ['Mark', 'Dijo que fue el mejor viaje de su vida. Y trajimos muchos regalos para la familia.', 'Hij zei dat het de beste reis van zijn leven was. En we hebben veel cadeautjes voor de familie meegenomen.']
      ],
      q: [
        { t: 'mc', q: '¿Con quién fue Mark a Cusco?', o: ['Con su hermano', 'Con Rosa', 'Solo'] },
        { t: 'mc', q: '¿Por qué estuvo mal el primer día?', o: ['Por la altura', 'Por la comida', 'Por el vuelo'] },
        { t: 'mc', q: '¿Cuántos días caminaron?', o: ['Cuatro', 'Dos', 'Siete'] }
      ]
    },
    culture: { t: 'Reizen door Latijns-Amerika', html: `<p>🏔️ Cusco ligt op ongeveer 3.400 meter hoogte. Hoogteziekte heet in de Andes <b>soroche</b>. Lokale mensen drinken er <i>mate de coca</i> (cocathee) tegen.</p>
<p>🎫 Een kaartje heet in Mexico <i>boleto</i>, in Colombia <i>tiquete</i> en in het zuiden van het continent <i>pasaje</i> (vooral voor vlieg- en langeafstandsbussen). Een lange busreis maak je vaak met de nachtbus: <i>bus cama</i>, met stoelen die bijna plat gaan.</p>
<p>🚗 Autorijden is in Latijns-Amerika <b>manejar</b>. <i>Conducir</i> begrijpen mensen ook, maar zo zeggen ze het vooral in Spanje.</p>` },
    ex: [
      { t: 'cloze', s: 'El año pasado ___ a México.', h: 'ir, yo', a: ['fui'], nl: 'Vorig jaar ging ik naar Mexico.', tag: 'pret-irregular' },
      { t: 'cloze', s: 'La fiesta ___ muy divertida.', h: 'ser', a: ['fue'], nl: 'Het feest was heel leuk.', tag: 'pret-irregular' },
      { t: 'cloze', s: '¿Dónde ___ ayer?', h: 'estar, tú', a: ['estuviste'], nl: 'Waar was je gisteren?', tag: 'pret-irregular' },
      { t: 'cloze', s: 'Nosotros no ___ entrar al museo.', h: 'poder', a: ['pudimos'], nl: 'We konden het museum niet in.', tag: 'pret-irregular' },
      { t: 'cloze', s: 'Ella ___ una reserva para cuatro personas.', h: 'hacer', a: ['hizo'], nl: 'Zij heeft een reservering voor vier personen gemaakt.', tag: 'pret-irregular' },
      { t: 'cloze', s: 'Ellos me ___ la verdad.', h: 'decir', a: ['dijeron'], nl: 'Ze hebben me de waarheid verteld.', tag: 'pret-irregular' },
      { t: 'cloze', s: '¿Qué ___ ustedes de Perú?', h: 'traer', a: ['trajeron'], nl: 'Wat hebben jullie uit Peru meegenomen?', tag: 'pret-irregular' },
      { t: 'cloze', s: '___ un problema con el vuelo.', h: 'tener, yo', a: ['Tuve'], nl: 'Ik had een probleem met de vlucht.', tag: 'pret-irregular' },
      { t: 'cloze', s: 'Mis padres ___ a visitarme en mayo.', h: 'venir', a: ['vinieron'], nl: 'Mijn ouders kwamen me in mei opzoeken.', tag: 'pret-irregular' },
      { t: 'mc', q: '«Fue» betekent…', o: ['ging óf was — de context beslist', 'alleen: ging', 'alleen: was'], tag: 'pret-irregular' },
      { t: 'mc', q: 'Juiste spelling: «hij deed»', o: ['hizo', 'hació', 'hico'], x: 'De c wordt een z vóór de o: hizo.', tag: 'pret-irregular' },
      { t: 'mc', q: 'Welke vorm is correct?', o: ['tuve', 'tuvé', 'tení'], x: 'Sterke preterita krijgen geen accent.', tag: 'pret-irregular' },
      { t: 'tr', nl: 'Ik heb mijn vlucht gemist.', a: ['Perdí mi vuelo.', 'Perdí el vuelo.'], tag: 'pret-regular' },
      { t: 'tr', nl: 'We gingen met de bus naar Cusco.', a: ['Fuimos en bus a Cusco.', 'Fuimos a Cusco en bus.', 'Fuimos en autobús a Cusco.', 'Fuimos a Cusco en autobús.'], tag: 'pret-irregular' },
      { t: 'tr', nl: 'Wat zei je?', a: ['¿Qué dijiste?', '¿Qué dijo?', '¿Qué dijo usted?'], tag: 'pret-irregular' },
      { t: 'order', s: 'Fuimos a Machu Picchu y sacamos muchas fotos.', nl: 'We gingen naar Machu Picchu en maakten veel foto’s.' }
    ],
    say: [['¡Fue un viaje increíble!', 'Het was een ongelooflijke reis!'], ['Tuvimos que caminar cuatro días.', 'We moesten vier dagen lopen.'], ['¿Qué hiciste en las vacaciones?', 'Wat heb je in de vakantie gedaan?']],
    task: { nl: 'Vertel over je mooiste reis: waar ging je heen, met wie, wat deed je en hoe was het? Gebruik minstens 4 onregelmatige vormen.', model: 'Hace dos años fui a México con mi novia. Estuvimos tres semanas. Hicimos muchas excursiones y vimos las pirámides de Teotihuacán. Tuvimos un problema con el carro, pero fue un viaje inolvidable.' },
    scenario: { nl: 'Een Peruaanse vriendin wil alles weten over je reis.', role: 'Eres Rosa, una amiga limeña (de Lima, Perú) curiosa y cálida. Haces preguntas sobre el viaje del estudiante: adónde fue, con quién, qué hizo, qué comió.', goal: 'Vertel over een reis die je echt gemaakt hebt, in de indefinido.' }
  });

  /* ───────────────────────── A2 · 3 ───────────────────────── */
  U({
    id: 'a2-03', level: 'A2', icon: '🧸', title: 'Cuando era niño', nl: 'Pretérito imperfecto: vroeger en beschrijvingen',
    goals: ['Vertellen hoe je leven vroeger was', 'Gewoontes en beschrijvingen in het verleden', 'De imperfecto vormen (met maar 3 onregelmatige werkwoorden!)'],
    vocab: [
      ['la infancia', 'de jeugd (kindertijd)'], ['de niño / de niña', 'als kind'], ['cuando era pequeño', 'toen ik klein was'], ['la escuela', 'de school'],
      ['el / la maestro/a', 'de leraar / juf'], ['el recreo', 'de pauze (op school)'], ['los juguetes', 'het speelgoed'], ['la pelota', 'de bal'],
      ['la muñeca', 'de pop'], ['el pueblo', 'het dorp'], ['el campo', 'het platteland'], ['la finca', 'de boerderij / het landgoed'],
      ['los vecinos', 'de buren'], ['el / la mejor amigo/a', 'de beste vriend(in)'], ['travieso / traviesa', 'ondeugend'], ['tímido / tímida', 'verlegen'],
      ['cariñoso / cariñosa', 'lief / aanhankelijk'], ['estricto / estricta', 'streng'], ['antes', 'vroeger / eerder'], ['ya no', 'niet meer'],
      ['todavía', 'nog (steeds)'], ['cada verano', 'elke zomer'], ['soler + inf.', 'gewoonlijk … (solía jugar)'], ['crecer', 'opgroeien'],
      ['mudarse', 'verhuizen'], ['extrañar', 'missen', 'ES: echar de menos'], ['andar en bici', 'fietsen', 'ES: montar en bici'],
      ['lindo / linda', 'mooi / schattig', 'in LatAm veel meer dan bonito'], ['el chamaco / el pibe', 'het joch', 'MX / AR']
    ],
    grammar: [
      { t: 'Imperfecto: de vormen', es: 'Pretérito imperfecto',
        html: `<p>De imperfecto is heel regelmatig. Er zijn maar <b>drie</b> onregelmatige werkwoorden: <b>ser</b>, <b>ir</b> en <b>ver</b>.</p>
<p>De yo-vorm en de él-vorm zijn gelijk (<i>yo hablaba, él hablaba</i>). Let op het accent bij <i>nosotros</i>: <i>hablábamos</i>.</p>`,
        table: [['', 'hablar', 'comer / vivir', 'ser', 'ir', 'ver'], ['yo', 'hablaba', 'comía', 'era', 'iba', 'veía'], ['tú', 'hablabas', 'comías', 'eras', 'ibas', 'veías'], ['él / usted', 'hablaba', 'comía', 'era', 'iba', 'veía'], ['nosotros', 'hablábamos', 'comíamos', 'éramos', 'íbamos', 'veíamos'], ['ellos / ustedes', 'hablaban', 'comían', 'eran', 'iban', 'veían']] },
      { t: 'Wanneer gebruik je de imperfecto?', es: '¿Cuándo se usa?',
        html: `<p>1. <b>Gewoontes</b> in het verleden (vroeger deed ik altijd…): <i>Cada verano íbamos a la playa.</i><br>
2. <b>Beschrijvingen</b> van mensen, dingen en situaties: <i>Mi abuela era muy cariñosa. La casa tenía un jardín.</i><br>
3. <b>Leeftijd, tijd en gevoelens</b> in het verleden: <i>Tenía diez años. Eran las ocho. Estaba feliz.</i></p>
<p>Signaalwoorden: <i>antes, de niño, cuando era pequeño, siempre, todos los días, a menudo, normalmente</i>.</p>`,
        sum: 'Imperfecto = costumbres y descripciones en el pasado.' }
    ],
    verbs: ['ser', 'ir', 'ver', 'vivir', 'jugar', 'tener', 'hablar', 'comer', 'estar', 'querer'], tenses: ['imp'],
    dialogue: {
      t: '¿Cómo eras de niño?', place: 'Antigua 🇬🇹',
      lines: [
        ['Mark', 'Carlos, ¿dónde vivías cuando eras niño?', 'Carlos, waar woonde je toen je klein was?'],
        ['Carlos', 'Vivía en un pueblo cerca de Antigua. Mis abuelos tenían una finca de café.', 'Ik woonde in een dorp vlak bij Antigua. Mijn opa en oma hadden een koffieplantage.'],
        ['Mark', '¡Qué lindo! ¿Y qué hacías allí?', 'Wat mooi! En wat deed je daar?'],
        ['Carlos', 'Todos los días jugaba fútbol con mis primos en la calle. No teníamos videojuegos, pero éramos muy felices.', 'Elke dag voetbalde ik met mijn neven op straat. We hadden geen videogames, maar we waren heel gelukkig.'],
        ['Mark', '¿Ibas a la escuela en el pueblo?', 'Ging je in het dorp naar school?'],
        ['Carlos', 'Sí, la escuela era pequeña. Mi maestra se llamaba doña Marta y era muy estricta.', 'Ja, de school was klein. Mijn juf heette doña Marta en ze was heel streng.'],
        ['Mark', '¿Y eras buen estudiante?', 'En was je een goede leerling?'],
        ['Carlos', '¡Para nada! Era muy travieso. ¿Y tú? ¿Cómo eras de niño?', 'Helemaal niet! Ik was heel ondeugend. En jij? Hoe was jij als kind?'],
        ['Mark', 'Yo era tímido. Leía mucho y en los veranos íbamos a la playa en Francia.', 'Ik was verlegen. Ik las veel en in de zomer gingen we naar het strand in Frankrijk.'],
        ['Carlos', '¿Extrañas esa época?', 'Mis je die tijd?'],
        ['Mark', 'A veces sí. Todo era más tranquilo.', 'Soms wel. Alles was rustiger.']
      ],
      q: [
        { t: 'mc', q: '¿Qué tenían los abuelos de Carlos?', o: ['Una finca de café', 'Un restaurante', 'Una escuela'] },
        { t: 'mc', q: '¿Cómo era Carlos de niño?', o: ['Travieso', 'Tímido', 'Muy estudioso'] },
        { t: 'mc', q: '¿Qué hacía Mark en los veranos?', o: ['Iba a la playa', 'Jugaba fútbol en la calle', 'Trabajaba en una finca'] }
      ]
    },
    culture: { t: 'Kinderen heten overal anders', html: `<p>👦 Een kind of joch heet per land anders: <i>chamaco</i> 🇲🇽 · <i>pibe</i> 🇦🇷🇺🇾 · <i>patojo</i> 🇬🇹 · <i>cipote</i> 🇭🇳🇸🇻 · <i>chamo</i> 🇻🇪 · <i>cabro chico</i> 🇨🇱 · <i>pelado</i> 🇨🇴</p>
<p>⚠️ Pas op met <b>guagua</b>: in Chili, Ecuador en Bolivia betekent het <i>baby</i>, maar in het Caribisch gebied betekent het <i>bus</i>!</p>
<p>⚽ In Latijns-Amerika zeg je <b>jugar fútbol</b>. In Spanje zeggen ze <i>jugar al fútbol</i>.<br>💙 <b>Extrañar</b> (missen) is de Latijns-Amerikaanse vorm. In Spanje zeggen ze <i>echar de menos</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'De niño, yo ___ en un pueblo.', h: 'vivir', a: ['vivía'], nl: 'Als kind woonde ik in een dorp.', tag: 'imperfect' },
      { t: 'cloze', s: 'Mi abuela ___ muy cariñosa.', h: 'ser', a: ['era'], nl: 'Mijn oma was heel lief.', tag: 'imperfect' },
      { t: 'cloze', s: 'Todos los veranos ___ a la playa.', h: 'ir, nosotros', a: ['íbamos'], nl: 'Elke zomer gingen we naar het strand.', tag: 'imperfect' },
      { t: 'cloze', s: 'Antes tú ___ mucho fútbol, ¿no?', h: 'jugar', a: ['jugabas'], nl: 'Vroeger voetbalde jij veel, toch?', tag: 'imperfect' },
      { t: 'cloze', s: 'Mis padres ___ en una finca.', h: 'trabajar', a: ['trabajaban'], nl: 'Mijn ouders werkten op een boerderij.', tag: 'imperfect' },
      { t: 'cloze', s: '¿Qué programas ___ ustedes en la tele?', h: 'ver', a: ['veían'], nl: 'Welke programma’s keken jullie op tv?', tag: 'imperfect' },
      { t: 'cloze', s: 'Cuando ___ diez años, me mudé a Lima.', h: 'tener, yo', a: ['tenía'], nl: 'Toen ik tien was, verhuisde ik naar Lima.', tag: 'imperfect' },
      { t: 'mc', q: 'De imperfecto gebruik je voor…', o: ['gewoontes en beschrijvingen in het verleden', 'één afgeronde gebeurtenis', 'de toekomst'], tag: 'imperfect' },
      { t: 'mc', q: 'Nosotros-vorm van hablar (imperfecto):', o: ['hablábamos', 'hablabamos', 'hablámos'], tag: 'imperfect' },
      { t: 'mc', q: '«Ik mis mijn familie.»', o: ['Extraño a mi familia.', 'Falto a mi familia.', 'Pierdo a mi familia.'], x: 'Extrañar a alguien = iemand missen (LatAm). Let op de a vóór personen.', tag: 'vocab' },
      { t: 'mc', q: 'Wat betekent «guagua» in Chili?', o: ['baby', 'bus', 'auto'], tag: 'vocab' },
      { t: 'tr', nl: 'Vroeger woonde ik in Utrecht.', a: ['Antes vivía en Utrecht.', 'Antes yo vivía en Utrecht.', 'Vivía en Utrecht antes.'], tag: 'imperfect' },
      { t: 'tr', nl: 'Als kind was ik verlegen.', a: ['De niño era tímido.', 'De niña era tímida.', 'Cuando era niño, era tímido.', 'Cuando era niña, era tímida.', 'De pequeño era tímido.', 'De pequeña era tímida.', 'Cuando era niño era tímido.', 'Cuando era niña era tímida.'], tag: 'imperfect' },
      { t: 'tr', nl: 'Wij speelden elke dag op straat.', a: ['Jugábamos en la calle todos los días.', 'Todos los días jugábamos en la calle.'], tag: 'imperfect' },
      { t: 'order', s: 'Cuando era niño, leía muchos libros.', nl: 'Toen ik klein was, las ik veel boeken.' }
    ],
    say: [['Cuando era niño, vivía en un pueblo.', 'Toen ik klein was, woonde ik in een dorp.'], ['Mi abuela era muy cariñosa.', 'Mijn oma was heel lief.'], ['Todos los veranos íbamos a la playa.', 'Elke zomer gingen we naar het strand.']],
    task: { nl: 'Beschrijf je jeugd: waar woonde je, hoe was je, wat deed je graag en wat deed je elke zomer?', model: 'Cuando era niño, vivía en un pueblo pequeño. Era un niño tímido, pero tenía muchos amigos. Todos los días andaba en bici y jugaba fútbol. Cada verano íbamos a la casa de mis abuelos.' },
    scenario: { nl: 'Je praat met een oudere Guatemalteek over vroeger.', role: 'Eres don Carlos, un señor guatemalteco de 70 años de un pueblo cerca de Antigua. Te encanta contar cómo era la vida antes y preguntas al estudiante sobre su infancia.', goal: 'Vertel hoe jouw jeugd was en vraag hoe het leven vroeger in Guatemala was.' }
  });

  /* ───────────────────────── A2 · 4 ───────────────────────── */
  U({
    id: 'a2-04', level: 'A2', icon: '📖', title: 'Una historia', nl: 'Indefinido en imperfecto combineren',
    goals: ['Een verhaal vertellen met achtergrond en gebeurtenissen', 'Kiezen tussen indefinido en imperfecto', 'Reageren op een verhaal'],
    vocab: [
      ['de repente', 'plotseling'], ['de pronto', 'opeens'], ['mientras', 'terwijl'], ['un día', 'op een dag'], ['entonces', 'toen / dus'],
      ['al final', 'uiteindelijk'], ['en ese momento', 'op dat moment'], ['por suerte', 'gelukkig'], ['por desgracia', 'helaas'],
      ['pasar', 'gebeuren'], ['¿qué pasó?', 'wat is er gebeurd?'], ['darse cuenta (de)', 'beseffen / merken'], ['dejar', 'laten / achterlaten'],
      ['el celular', 'de mobiele telefoon', 'ES: el móvil'], ['la billetera', 'de portemonnee', 'ook: la cartera'], ['el ladrón / la ladrona', 'de dief'],
      ['robar', 'stelen'], ['caerse', 'vallen'], ['el / la taxista', 'de taxichauffeur'], ['asustado / asustada', 'bang / geschrokken'],
      ['nervioso / nerviosa', 'zenuwachtig'], ['sorprendido / sorprendida', 'verrast'], ['contar', 'vertellen (ue)'], ['contestar', 'opnemen / antwoorden'],
      ['¡no me digas!', 'echt waar? / meen je dat!'], ['¿en serio?', 'serieus?'], ['¡qué buena gente!', 'wat aardig! (van iemand)'],
      ['¡qué pena!', 'wat gênant / sorry', 'CO; elders ook: wat jammer'], ['te ves…', 'je ziet er … uit']
    ],
    grammar: [
      { t: 'Decor en actie', es: 'Imperfecto vs. indefinido',
        html: `<p>Een verhaal heeft een <b>decor</b> en <b>acties</b>. Denk aan een film:</p>
<p>🎬 <b>Imperfecto</b> = het decor: wat er aan de hand was, het weer, de tijd, beschrijvingen, gevoelens en handelingen die nog bezig waren.<br>
⚡ <b>Indefinido</b> = de acties die het verhaal vooruit brengen: <i>en toen…, en toen…</i></p>`,
        table: [['imperfecto (decor)', 'indefinido (actie)'], ['Llovía mucho…', '…cuando salí de casa.'], ['Mientras cocinaba…', '…sonó el teléfono.'], ['Eran las once y estaba cansado.', 'Tomé un taxi.'], ['Todos los días caminaba al trabajo.', 'Un día encontré un perro.']],
        sum: 'Imperfecto: la escena (¿cómo era?). Indefinido: los hechos (¿qué pasó?).' },
      { t: 'Signaalwoorden', es: 'Marcadores',
        html: `<p><b>Imperfecto:</b> mientras, siempre, todos los días, de niño, normalmente, a menudo<br>
<b>Indefinido:</b> ayer, un día, de repente, entonces, en 2019, hace un año, al final</p>
<p>Een handeling die bezig was en <b>onderbroken</b> wordt: imperfecto + <i>cuando</i> + indefinido. <i>Dormía cuando llamaste.</i></p>` },
      { t: 'Werkwoorden die van betekenis veranderen', es: 'Cambio de significado',
        html: `<p><b>conocer:</b> <i>conocía</i> = ik kende · <i>conocí</i> = ik leerde kennen<br>
<b>saber:</b> <i>sabía</i> = ik wist · <i>supe</i> = ik hoorde / kwam erachter<br>
<b>tener:</b> <i>tenía</i> = ik had · <i>tuve</i> = ik kreeg / moest<br>
<b>querer:</b> <i>no quería</i> = ik wilde niet · <i>no quise</i> = ik weigerde</p>` }
    ],
    verbs: ['estar', 'tener', 'hacer', 'salir', 'llegar', 'conocer', 'caerse', 'dormir', 'llover'], tenses: ['pret', 'imp'],
    dialogue: {
      t: '¡Perdí mi celular!', place: 'Lima 🇵🇪',
      lines: [
        ['Lucía', '¿Qué te pasó? Te ves nervioso.', 'Wat is er met jou? Je ziet er zenuwachtig uit.'],
        ['Mark', '¡Ay, Lucía! Ayer perdí mi celular.', 'Ach, Lucía! Gisteren ben ik mijn telefoon kwijtgeraakt.'],
        ['Lucía', '¿En serio? ¿Cómo pasó?', 'Serieus? Hoe gebeurde dat?'],
        ['Mark', 'Eran las once de la noche y llovía mucho. Tomé un taxi para volver a casa.', 'Het was elf uur ’s avonds en het regende hard. Ik nam een taxi naar huis.'],
        ['Lucía', '¿Y?', 'En?'],
        ['Mark', 'Mientras el taxista manejaba, yo hablaba por teléfono con mi mamá. Cuando llegamos, pagué y salí rápido por la lluvia.', 'Terwijl de taxichauffeur reed, belde ik met mijn moeder. Toen we aankwamen, betaalde ik en stapte ik snel uit vanwege de regen.'],
        ['Lucía', 'Y dejaste el celular en el taxi…', 'En je liet je telefoon in de taxi liggen…'],
        ['Mark', '¡Exacto! Me di cuenta cinco minutos después. Estaba muy asustado.', 'Precies! Vijf minuten later had ik het door. Ik was echt geschrokken.'],
        ['Lucía', '¿Y qué hiciste?', 'En wat deed je?'],
        ['Mark', 'Llamé a mi número desde el teléfono de un vecino y, por suerte, ¡el taxista contestó! Hoy en la mañana me lo trajo.', 'Ik belde mijn nummer vanaf de telefoon van een buurman en gelukkig nam de taxichauffeur op! Vanochtend bracht hij hem terug.'],
        ['Lucía', '¡Qué buena gente!', 'Wat een aardige man!']
      ],
      q: [
        { t: 'mc', q: '¿Qué tiempo hacía?', o: ['Llovía mucho', 'Hacía sol', 'Hacía mucho calor'] },
        { t: 'mc', q: '¿Qué hacía Mark en el taxi?', o: ['Hablaba por teléfono con su mamá', 'Dormía', 'Leía'] },
        { t: 'mc', q: '¿Quién le trajo el celular?', o: ['El taxista', 'Un vecino', 'Lucía'] }
      ]
    },
    culture: { t: 'Reageren op een verhaal', html: `<p>Een goede luisteraar reageert steeds kort. Een paar manieren om dat te doen:<br>😮 <i>¡No me digas! · ¿En serio? · ¡No puede ser! · ¿Y qué pasó?</i><br>😊 <i>¡Qué buena onda!</i> 🇲🇽 · <i>¡Qué buena gente!</i> · <i>¡Qué bien!</i><br>😞 <i>¡Qué mala suerte! · ¡Pobre!</i></p>
<p>🇨🇴 <b>¡Qué pena!</b> betekent in Colombia vooral <i>sorry, wat vervelend voor je</i> of <i>wat gênant</i>, bijvoorbeeld als je iemand stoort: <i>Qué pena con usted…</i> In andere landen betekent het vaker <i>wat jammer</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Cuando ___ a casa, mi hermano dormía.', h: 'llegar, yo', a: ['llegué'], nl: 'Toen ik thuiskwam, sliep mijn broer.', tag: 'pret-imp' },
      { t: 'cloze', s: 'Mientras yo ___, sonó el teléfono.', h: 'cocinar', a: ['cocinaba'], nl: 'Terwijl ik aan het koken was, ging de telefoon.', tag: 'pret-imp' },
      { t: 'cloze', s: '___ mucho frío cuando salimos.', h: 'hacer', a: ['Hacía'], nl: 'Het was erg koud toen we weggingen.', tag: 'pret-imp' },
      { t: 'cloze', s: 'De repente, ___ a llover.', h: 'empezar', a: ['empezó'], nl: 'Plotseling begon het te regenen.', tag: 'pret-imp' },
      { t: 'cloze', s: 'Eran las tres cuando el avión ___.', h: 'salir', a: ['salió'], nl: 'Het was drie uur toen het vliegtuig vertrok.', tag: 'pret-imp' },
      { t: 'cloze', s: 'Ayer ___ a la novia de Diego.', h: 'conocer, yo', a: ['conocí'], nl: 'Gisteren heb ik de vriendin van Diego leren kennen.', x: 'Conocer in de indefinido betekent: leren kennen.', tag: 'pret-imp' },
      { t: 'cloze', s: 'Mi abuelo ___ una tienda en el centro.', h: 'tener', a: ['tenía'], nl: 'Mijn opa had een winkel in het centrum.', tag: 'pret-imp' },
      { t: 'cloze', s: 'Estaba muy cansada, entonces ___ temprano.', h: 'acostarse, yo', a: ['me acosté'], nl: 'Ik was erg moe, dus ik ging vroeg naar bed.', tag: 'pret-imp' },
      { t: 'mc', q: 'Het decor van een verhaal (weer, tijd, gevoelens):', o: ['imperfecto', 'indefinido', 'presente'], tag: 'pret-imp' },
      { t: 'mc', q: '«Ik lag te slapen toen je belde.»', o: ['Dormía cuando llamaste.', 'Dormí cuando llamaste.', 'Dormiendo cuando llamaste.'], x: 'Een handeling die bezig was (slapen) = imperfecto. Wat ertussen komt (bellen) = indefinido.', tag: 'pret-imp' },
      { t: 'mc', q: '«¡Qué pena!» betekent in Colombia meestal…', o: ['sorry / wat gênant', 'wat leuk', 'wat lekker'], tag: 'vocab' },
      { t: 'tr', nl: 'Het regende toen ik wegging.', a: ['Llovía cuando salí.', 'Estaba lloviendo cuando salí.', 'Cuando salí, llovía.', 'Cuando salí, estaba lloviendo.'], tag: 'pret-imp' },
      { t: 'tr', nl: 'Wat is er gebeurd?', a: ['¿Qué pasó?', '¿Qué te pasó?', '¿Qué ocurrió?'], tag: 'pret-regular' },
      { t: 'tr', nl: 'Ik kende hem niet.', a: ['No lo conocía.', 'Yo no lo conocía.'], tag: 'pret-imp' },
      { t: 'order', s: 'Mientras caminaba por el parque, vi a un amigo.', nl: 'Terwijl ik door het park liep, zag ik een vriend.' }
    ],
    say: [['¿Qué te pasó?', 'Wat is er met je gebeurd?'], ['Eran las once y llovía mucho.', 'Het was elf uur en het regende hard.'], ['¡No me digas! ¿Y qué hiciste?', 'Echt waar? En wat deed je?']],
    task: { nl: 'Vertel een kort verhaal over iets wat jou ooit is overkomen (iets grappigs, spannends of vervelends). Gebruik zowel imperfecto (het decor) als indefinido (de acties).', model: 'Era un viernes y hacía mucho calor. Estaba en el metro y escuchaba música. De repente, un señor se cayó. Lo ayudé a levantarse y le di agua. Al final, ¡era el papá de un compañero de trabajo!' },
    scenario: { nl: 'Je vertelt een vriendin wat je overkomen is.', role: 'Eres Lucía, una amiga peruana de Lima, muy expresiva. Reaccionas mucho a las historias («¡No me digas!», «¿En serio?») y haces preguntas para saber más detalles.', goal: 'Vertel een verhaal met achtergrond (imperfecto) en gebeurtenissen (indefinido).' }
  });

  /* ───────────────────────── A2 · 5 ───────────────────────── */
  U({
    id: 'a2-05', level: 'A2', icon: '🌟', title: '¿Alguna vez has…?', nl: 'Pretérito perfecto en ervaringen',
    goals: ['Over levenservaringen praten', 'Het pretérito perfecto vormen (he comido)', 'Ya en todavía no gebruiken'],
    vocab: [
      ['alguna vez', 'ooit'], ['nunca', 'nooit'], ['jamás', 'nooit (sterker)'], ['ya', 'al'], ['todavía no', 'nog niet'], ['una vez', 'één keer'],
      ['muchas veces', 'vaak / vele keren'], ['últimamente', 'de laatste tijd'], ['en mi vida', 'in mijn leven'], ['probar', 'proeven / uitproberen'],
      ['la experiencia', 'de ervaring'], ['la aventura', 'het avontuur'], ['la lista de deseos', 'de bucketlist'], ['bucear', 'duiken'],
      ['acampar', 'kamperen'], ['montar a caballo', 'paardrijden'], ['subir (una montaña)', '(een berg) beklimmen'], ['la ballena', 'de walvis'],
      ['vivir en el extranjero', 'in het buitenland wonen'], ['el país', 'het land'], ['impresionante', 'indrukwekkend'], ['¡qué envidia!', 'wat ben ik jaloers!'],
      ['el ceviche', 'ceviche (rauwe vis in limoen)', 'PE'], ['la arepa', 'arepa (maïsbroodje)', 'CO · VE'], ['la empanada', 'empanada (gevuld deeghapje)'],
      ['el ajiaco', 'ajiaco (kip-aardappelsoep)', 'CO'], ['la mazorca', 'de maïskolf', 'CO'], ['el mate', 'mate (kruidenthee)', 'AR · UY · PY']
    ],
    grammar: [
      { t: 'Vorming: haber + participio', es: 'Pretérito perfecto',
        html: `<p>Het <b>pretérito perfecto</b> lijkt op de Nederlandse voltooide tijd (<i>ik heb gegeten</i>). Je maakt het met de presente van <b>haber</b> en een <b>participio</b>: <b>-ar → -ado</b>, <b>-er/-ir → -ido</b>.</p>
<p>⚠️ Je haalt <i>haber</i> en het participio nooit uit elkaar. Voornaamwoorden komen vóór haber: <i><b>Me</b> he levantado. <b>Lo</b> hemos visto.</i></p>`,
        table: [['', 'haber', '+ participio'], ['yo', 'he', 'hablado'], ['tú', 'has', 'comido'], ['él / ella / usted', 'ha', 'vivido'], ['nosotros', 'hemos', 'estado'], ['ellos / ustedes', 'han', 'ido']] },
      { t: 'Onregelmatige participios', es: 'Participios irregulares',
        html: `<p>hacer → <b>hecho</b> · decir → <b>dicho</b> · ver → <b>visto</b> · escribir → <b>escrito</b> · poner → <b>puesto</b> · volver → <b>vuelto</b> · abrir → <b>abierto</b> · romper → <b>roto</b> · morir → <b>muerto</b> · descubrir → <b>descubierto</b></p>
<p>Werkwoorden als leer en traer krijgen een accent: <i>leído, traído, oído, creído</i>.</p>` },
      { t: 'Wanneer? (Latijns-Amerika vs. Spanje)', es: 'Uso en Latinoamérica',
        html: `<p>In Latijns-Amerika gebruik je het perfecto vooral voor:<br>
✅ <b>ervaringen</b> in je leven: <i>¿Alguna vez has comido ceviche?</i><br>
✅ iets wat <b>tot nu toe</b> wel of niet is gebeurd: <i>Todavía no he terminado. Nunca he estado en Chile.</i></p>
<p>Voor <b>vandaag</b> en het <b>recente verleden</b> gebruiken Latijns-Amerikanen meestal de indefinido: <i>Hoy me levanté tarde. ¿Ya comiste?</i> In Spanje zou je hier het perfecto horen. Beide vormen zijn correct en worden overal begrepen.</p>` }
    ],
    verbs: ['comer', 'estar', 'hacer', 'ver', 'escribir', 'volver', 'decir', 'poner', 'abrir', 'romper', 'ir', 'levantarse'], tenses: ['perf'],
    dialogue: {
      t: 'La lista de deseos', place: 'Bogotá 🇨🇴',
      lines: [
        ['Mateo', 'Mark, ¿alguna vez has probado el ajiaco?', 'Mark, heb je ooit ajiaco geproefd?'],
        ['Mark', 'No, nunca lo he probado. ¿Qué es?', 'Nee, nog nooit. Wat is het?'],
        ['Mateo', 'Es una sopa típica de Bogotá, con pollo, papa y mazorca. Te va a encantar.', 'Het is een typische soep uit Bogotá, met kip, aardappel en maïskolf. Je gaat het heerlijk vinden.'],
        ['Mark', '¡Qué rico! Ya he probado las arepas y la bandeja paisa.', 'Lekker! Ik heb al arepa’s en bandeja paisa geproefd.'],
        ['Mateo', '¿Y has viajado mucho por Colombia?', 'En heb je veel door Colombia gereisd?'],
        ['Mark', 'He estado en Medellín y en Cartagena, pero todavía no he visitado el Eje Cafetero.', 'Ik ben in Medellín en Cartagena geweest, maar het koffiegebied heb ik nog niet bezocht.'],
        ['Mateo', '¡Tienes que ir! Yo he ido tres veces. ¿Alguna vez has montado a caballo?', 'Daar moet je heen! Ik ben er drie keer geweest. Heb je ooit paardgereden?'],
        ['Mark', 'Sí, una vez, en Holanda… pero me caí.', 'Ja, één keer, in Nederland… maar ik viel eraf.'],
        ['Mateo', '¡Ja, ja! En el Eje Cafetero hay caballos muy tranquilos.', 'Haha! In het koffiegebied zijn de paarden heel rustig.'],
        ['Mark', 'Bueno, lo pongo en mi lista de deseos.', 'Oké, ik zet het op mijn bucketlist.']
      ],
      q: [
        { t: 'mc', q: '¿Ha probado Mark el ajiaco?', o: ['No, nunca', 'Sí, una vez', 'Sí, muchas veces'] },
        { t: 'mc', q: '¿Qué lugares de Colombia ha visitado Mark?', o: ['Medellín y Cartagena', 'El Eje Cafetero', 'Bogotá y Cali'] },
        { t: 'mc', q: '¿Cuántas veces ha ido Mateo al Eje Cafetero?', o: ['Tres veces', 'Una vez', 'Nunca'] }
      ]
    },
    culture: { t: 'Gerechten die je geproefd moet hebben', html: `<p>🍲 <b>ajiaco</b> en <b>bandeja paisa</b> 🇨🇴 · <b>ceviche</b> en <b>lomo saltado</b> 🇵🇪 · <b>asado</b> en <b>empanadas</b> 🇦🇷 · <b>mole</b> en <b>tacos al pastor</b> 🇲🇽 · <b>arepas</b> 🇻🇪🇨🇴 · <b>pupusas</b> 🇸🇻 · <b>gallo pinto</b> 🇨🇷🇳🇮 · <b>pastel de choclo</b> 🇨🇱</p>
<p>🗺️ Hoe vaak je het perfecto hoort, verschilt per regio. In de Andes (Peru en Bolivia) gebruiken mensen het vaker dan in Mexico of Argentinië. Een Mexicaan vraagt <i>¿Ya comiste?</i>, iemand uit Spanje vraagt <i>¿Ya has comido?</i></p>` },
    ex: [
      { t: 'cloze', s: '¿Alguna vez ___ comido ceviche?', a: ['has'], o: ['has', 'ha', 'he'], nl: 'Heb jij ooit ceviche gegeten?', tag: 'perfect' },
      { t: 'cloze', s: 'Nosotros nunca ___ estado en Chile.', a: ['hemos'], o: ['hemos', 'han', 'habemos'], nl: 'Wij zijn nog nooit in Chili geweest.', tag: 'perfect' },
      { t: 'cloze', s: 'Todavía no he ___ la tarea.', h: 'hacer', a: ['hecho'], nl: 'Ik heb mijn huiswerk nog niet gemaakt.', tag: 'perfect' },
      { t: 'cloze', s: '¿Quién ha ___ la ventana?', h: 'romper', a: ['roto'], nl: 'Wie heeft het raam gebroken?', tag: 'perfect' },
      { t: 'cloze', s: 'Mi hermana ha ___ un libro.', h: 'escribir', a: ['escrito'], nl: 'Mijn zus heeft een boek geschreven.', tag: 'perfect' },
      { t: 'cloze', s: 'Hemos ___ esa película dos veces.', h: 'ver', a: ['visto'], nl: 'We hebben die film twee keer gezien.', tag: 'perfect' },
      { t: 'cloze', s: '¿Ustedes han ___ a México desde 2020?', h: 'volver', a: ['vuelto'], nl: 'Zijn jullie sinds 2020 nog terug geweest in Mexico?', tag: 'perfect' },
      { t: 'cloze', s: 'Ellos ya ___.', h: 'llegar', a: ['han llegado'], nl: 'Zij zijn al aangekomen.', tag: 'perfect' },
      { t: 'mc', q: 'Waar staat het voornaamwoord?', o: ['Me he levantado tarde.', 'He me levantado tarde.', 'He levantádome tarde.'], tag: 'perfect' },
      { t: 'mc', q: 'Wat vraagt een Mexicaan meestal voor «Heb je al gegeten?»', o: ['¿Ya comiste?', '¿Ya comes?', '¿Ya habrás comido?'], x: 'In Latijns-Amerika gebruik je voor het recente verleden vaak de indefinido.', tag: 'perfect' },
      { t: 'mc', q: '«todavía no» betekent…', o: ['nog niet', 'al', 'nooit meer'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik ben nog nooit in Peru geweest.', a: ['Nunca he estado en Perú.', 'No he estado nunca en Perú.', 'Nunca he ido a Perú.', 'No he ido nunca a Perú.', 'Todavía no he estado en Perú.'], tag: 'perfect' },
      { t: 'tr', nl: 'Heb je ooit mate gedronken?', a: ['¿Alguna vez has tomado mate?', '¿Has tomado mate alguna vez?', '¿Alguna vez has probado el mate?', '¿Has probado el mate alguna vez?', '¿Alguna vez has tomado el mate?', '¿Alguna vez has probado mate?'], tag: 'perfect' },
      { t: 'tr', nl: 'We hebben het al gedaan.', a: ['Ya lo hemos hecho.', 'Ya lo hicimos.'], tag: 'perfect' },
      { t: 'order', s: '¿Alguna vez has visto una ballena?', nl: 'Heb je ooit een walvis gezien?' }
    ],
    say: [['¿Alguna vez has probado el ceviche?', 'Heb je ooit ceviche geproefd?'], ['Nunca he estado en Argentina.', 'Ik ben nog nooit in Argentinië geweest.'], ['Todavía no he visitado el Eje Cafetero.', 'Ik heb het koffiegebied nog niet bezocht.']],
    task: { nl: 'Schrijf je eigen bucketlist: 3 dingen die je al gedaan hebt en 3 dingen die je nog nooit gedaan hebt maar wél wilt doen.', model: 'Ya he viajado a México y he probado los tacos al pastor. También he subido una montaña de 3.000 metros. Nunca he buceado, todavía no he visto una ballena y nunca he estado en Patagonia. ¡Algún día!' },
    scenario: { nl: 'Je vergelijkt jullie levenservaringen met een Colombiaanse vriend.', role: 'Eres Mateo, un bogotano aventurero de 32 años. Te encanta preguntar «¿alguna vez has…?» y contar tus propias experiencias viajando por Colombia y Latinoamérica.', goal: 'Vraag en vertel over ervaringen met alguna vez, nunca, ya en todavía no.' }
  });

  /* ───────────────────────── A2 · 6 ───────────────────────── */
  U({
    id: 'a2-06', level: 'A2', icon: '🩺', title: 'En el médico', nl: 'Lichaam, gezondheid en advies geven',
    goals: ['Zeggen wat er pijn doet (doler)', 'Klachten beschrijven bij de dokter', 'Advies en verplichting: tener que, hay que, deber'],
    vocab: [
      ['el cuerpo', 'het lichaam'], ['la cabeza', 'het hoofd'], ['la garganta', 'de keel'], ['el estómago', 'de maag / buik', 'MX informeel: la panza'],
      ['la espalda', 'de rug'], ['el brazo', 'de arm'], ['la mano', 'de hand'], ['la pierna', 'het been'], ['el pie', 'de voet'], ['la rodilla', 'de knie'],
      ['los ojos', 'de ogen'], ['el oído', 'het oor (binnenoor)'], ['la muela', 'de kies'], ['doler (ue)', 'pijn doen'], ['el dolor', 'de pijn'],
      ['la fiebre', 'de koorts'], ['la tos', 'de hoest'], ['la gripa', 'de griep', 'MX · CO; ES: la gripe'], ['estar resfriado/a', 'verkouden zijn'],
      ['estar enfermo/a', 'ziek zijn'], ['sentirse mal', 'zich slecht voelen'], ['mareado / mareada', 'duizelig / misselijk'], ['la alergia', 'de allergie'],
      ['la pastilla', 'de pil / tablet'], ['la receta', 'het recept (van de arts)'], ['la cita', 'de afspraak'], ['el seguro médico', 'de zorgverzekering'],
      ['descansar', 'uitrusten'], ['¡que te mejores!', 'beterschap!'], ['¡salud!', 'gezondheid! (bij niezen) / proost!']
    ],
    grammar: [
      { t: 'Doler werkt als gustar', es: 'El verbo doler',
        html: `<p>Je zegt: <b>me duele</b> + één lichaamsdeel en <b>me duelen</b> + meerdere. Wie de pijn heeft, geef je aan met <i>me, te, le, nos, les</i>.</p>
<p>⚠️ Bij lichaamsdelen gebruik je in het Spaans een <b>lidwoord</b>, geen bezittelijk voornaamwoord: <i>Me duele <b>la</b> cabeza</i> en niet <s>mi cabeza</s>.</p>`,
        table: [['', 'enkelvoud', 'meervoud'], ['(a mí)', 'me duele la cabeza', 'me duelen los pies'], ['(a ti)', 'te duele la espalda', 'te duelen los ojos'], ['(a él / ella / usted)', 'le duele el estómago', 'le duelen las piernas']] },
      { t: 'Klachten beschrijven', es: 'Describir síntomas',
        html: `<p><b>tener</b> + fiebre / tos / gripa / dolor de cabeza / alergia / náuseas<br>
<b>estar</b> + resfriado / enfermo / mareado / cansado<br>
<b>sentirse</b> + bien / mal / mejor: <i>Me siento mal desde ayer.</i></p>` },
      { t: 'Moeten en advies', es: 'Obligación y consejos',
        html: `<p><b>tener que</b> + infinitief = moeten, persoonlijk: <i>Tengo que ir al médico.</i><br>
<b>hay que</b> + infinitief = je moet, algemeen en zonder persoon: <i>Hay que tomar mucha agua.</i><br>
<b>deber</b> + infinitief = zou moeten, als advies: <i>Debes descansar.</i><br>
<b>necesitar</b> + infinitief = nodig hebben om: <i>Necesito dormir.</i></p>`,
        sum: 'Tengo que (yo) · Hay que (todos) · Debes (consejo)' }
    ],
    verbs: ['sentirse', 'tener', 'deber', 'descansar', 'dormir', 'tomar', 'necesitar'], tenses: ['pres', 'pret'],
    dialogue: {
      t: 'En el consultorio', place: 'Guadalajara 🇲🇽',
      lines: [
        ['Doctora', 'Buenos días, pase y siéntese. ¿Qué le pasa?', 'Goedemorgen, komt u binnen en gaat u zitten. Wat is er aan de hand?'],
        ['Mark', 'Buenos días, doctora. Me siento muy mal desde ayer.', 'Goedemorgen, dokter. Ik voel me sinds gisteren heel slecht.'],
        ['Doctora', '¿Qué síntomas tiene?', 'Wat voor klachten heeft u?'],
        ['Mark', 'Me duele mucho la garganta y tengo tos. También me duele la cabeza.', 'Mijn keel doet erg pijn en ik hoest. Ik heb ook hoofdpijn.'],
        ['Doctora', '¿Tiene fiebre?', 'Heeft u koorts?'],
        ['Mark', 'Sí, anoche tuve treinta y ocho grados.', 'Ja, gisteravond had ik achtendertig graden.'],
        ['Doctora', 'A ver… abra la boca, por favor. Mmm, tiene la garganta muy roja. Es una gripa fuerte.', 'Even kijken… doet u uw mond open, alstublieft. Hmm, uw keel is erg rood. Het is een flinke griep.'],
        ['Mark', '¿Qué tengo que hacer?', 'Wat moet ik doen?'],
        ['Doctora', 'Tiene que descansar y tomar mucha agua. Le voy a dar una receta para unas pastillas. Debe tomar una cada ocho horas.', 'U moet uitrusten en veel water drinken. Ik geef u een recept voor tabletten. Neem er elke acht uur één.'],
        ['Mark', '¿Puedo ir a trabajar?', 'Kan ik gaan werken?'],
        ['Doctora', 'No, mejor no. Hay que quedarse en casa dos o tres días. ¡Que se mejore!', 'Nee, liever niet. U moet twee à drie dagen thuisblijven. Beterschap!']
      ],
      q: [
        { t: 'mc', q: '¿Qué le duele a Mark?', o: ['La garganta y la cabeza', 'El estómago', 'La espalda'] },
        { t: 'mc', q: '¿Qué tiene Mark, según la doctora?', o: ['Una gripa fuerte', 'Una alergia', 'Dolor de muela'] },
        { t: 'mc', q: '¿Cada cuánto debe tomar las pastillas?', o: ['Cada ocho horas', 'Cada dos horas', 'Una vez al día'] }
      ]
    },
    culture: { t: 'Naar de dokter en de apotheek', html: `<p>💊 In veel Latijns-Amerikaanse landen geeft de <b>apotheker</b> zelf advies. Veel medicijnen kun je er zonder recept kopen. In Mexico zitten bij grote apotheken zelfs vaak goedkope artsenpraktijken (<i>consultorios</i>).</p>
<p>🌡️ Koorts meet je in graden Celsius: <i>Tengo 38 (grados).</i></p>
<p>🤧 Als iemand niest, zeg je <b>¡Salud!</b>. In sommige landen zeggen mensen ook <i>¡Jesús!</i>. Wens iemand beterschap met <b>¡Que te mejores!</b> (tú) of <b>¡Que se mejore!</b> (usted).</p>` },
    ex: [
      { t: 'cloze', s: 'Me ___ la cabeza.', a: ['duele'], o: ['duele', 'duelen', 'dolo'], nl: 'Ik heb hoofdpijn.', tag: 'doler' },
      { t: 'cloze', s: 'Me ___ los pies.', a: ['duelen'], o: ['duelen', 'duele', 'dolen'], nl: 'Mijn voeten doen pijn.', tag: 'doler' },
      { t: 'cloze', s: '¿Te ___ el estómago?', a: ['duele'], o: ['duele', 'duelen', 'dueles'], nl: 'Heb je buikpijn?', tag: 'doler' },
      { t: 'cloze', s: 'A mi hijo le ___ los oídos.', a: ['duelen'], o: ['duelen', 'duele', 'duelo'], nl: 'Mijn zoon heeft oorpijn.', tag: 'doler' },
      { t: 'mc', q: 'Me duele ___ espalda.', o: ['la', 'mi', 'mía'], x: 'Bij lichaamsdelen gebruik je het lidwoord.', tag: 'doler' },
      { t: 'cloze', s: 'Tienes ___ descansar.', a: ['que'], o: ['que', 'de', 'a'], nl: 'Je moet uitrusten.', tag: 'obligation' },
      { t: 'cloze', s: '___ que tomar mucha agua.', h: 'algemeen', a: ['Hay'], o: ['Hay', 'Tiene', 'Debe'], nl: 'Je moet veel water drinken.', tag: 'obligation' },
      { t: 'cloze', s: 'Usted ___ dejar de fumar.', h: 'advies', a: ['debe'], o: ['debe', 'hay', 'tiene'], nl: 'U zou moeten stoppen met roken.', tag: 'obligation' },
      { t: 'mc', q: '«Ik heb koorts.»', o: ['Tengo fiebre.', 'Estoy fiebre.', 'Soy fiebre.'], tag: 'doler' },
      { t: 'mc', q: 'Beterschap wensen aan een vriend:', o: ['¡Que te mejores!', '¡Buen provecho!', '¡Mucho gusto!'], tag: 'vocab' },
      { t: 'mc', q: '«Griep» in Mexico en Colombia:', o: ['la gripa', 'la gripo', 'el gripe'], tag: 'vocab' },
      { t: 'tr', nl: 'Mijn keel doet pijn.', a: ['Me duele la garganta.'], tag: 'doler' },
      { t: 'tr', nl: 'Ik moet naar de dokter.', a: ['Tengo que ir al médico.', 'Tengo que ir al doctor.', 'Necesito ir al médico.', 'Necesito ir al doctor.'], tag: 'obligation' },
      { t: 'tr', nl: 'Ik voel me niet goed.', a: ['No me siento bien.', 'Me siento mal.'], tag: 'doler' },
      { t: 'order', s: 'Tiene que tomar una pastilla cada ocho horas.', nl: 'U moet elke acht uur een tablet nemen.' }
    ],
    say: [['Me duele mucho la garganta.', 'Mijn keel doet erg pijn.'], ['Me siento mal desde ayer.', 'Ik voel me sinds gisteren niet goed.'], ['¿Qué tengo que hacer, doctora?', 'Wat moet ik doen, dokter?']],
    task: { nl: 'Je bent ziek. Schrijf een berichtje aan je baas: wat je klachten zijn, sinds wanneer, wat de dokter zei en wat je moet doen.', model: 'Buenos días, Laura. Lo siento, hoy no puedo ir a la oficina. Desde ayer me duele mucho la cabeza y tengo fiebre. El médico dice que tengo gripa. Tengo que descansar dos días y tomar pastillas.' },
    scenario: { nl: 'Je bent bij de huisarts in Guadalajara.', role: 'Eres la doctora Ramírez, una médica general mexicana en Guadalajara. Tratas de «usted», haces preguntas sobre síntomas (desde cuándo, dónde duele, fiebre, alergias) y das consejos claros.', goal: 'Beschrijf je klachten, beantwoord de vragen van de arts en vraag wat je moet doen.' }
  });

  /* ───────────────────────── A2 · 7 ───────────────────────── */
  U({
    id: 'a2-07', level: 'A2', icon: '🎁', title: 'Favores y regalos', nl: 'Lijdend en meewerkend voornaamwoord (lo, le, se lo)',
    goals: ['Om een gunst vragen en iets lenen', 'Herhaling vermijden met lo/la/le', 'Twee voornaamwoorden combineren (se lo doy)'],
    vocab: [
      ['prestar', 'uitlenen'], ['pedir prestado', 'lenen (van iemand)'], ['devolver (ue)', 'teruggeven'], ['regalar', 'cadeau geven'], ['mandar / enviar', 'sturen'],
      ['mostrar (ue)', 'laten zien'], ['explicar', 'uitleggen'], ['deber', 'schuldig zijn / moeten'], ['acordarse (ue) de', 'zich herinneren'],
      ['el favor', 'de gunst / het plezier'], ['¿me haces un favor?', 'wil je me een plezier doen?'], ['el cumpleaños', 'de verjaardag'],
      ['la mudanza', 'de verhuizing'], ['la caja', 'de doos'], ['la cinta', 'het plakband'], ['el cargador', 'de oplader'], ['la llave', 'de sleutel'],
      ['la computadora', 'de computer', 'ES: el ordenador'], ['el dinero', 'het geld', 'informeel: la plata (veel landen) · la lana (MX)'],
      ['¡claro!', 'natuurlijk!'], ['¡con gusto!', 'graag!'], ['¡sale! / ¡órale!', 'oké! / komt goed!', 'MX'], ['¡listo! / ¡dale!', 'oké! / prima!', 'CO / AR · UY · CO'],
      ['güey', 'gast / makker', 'MX, informeel'], ['¡eres un sol!', 'je bent een schat!']
    ],
    grammar: [
      { t: 'Lijdend voorwerp: lo, la, los, las', es: 'Objeto directo',
        html: `<p>Met <b>lo, la, los, las</b> vermijd je dat je een woord herhaalt. Het voornaamwoord staat <b>vóór</b> het vervoegde werkwoord.</p>
<p><i>¿Tienes <b>el libro</b>? — Sí, <b>lo</b> tengo.</i> · <i>¿Conoces <b>a Lucía</b>? — Sí, <b>la</b> conozco.</i></p>
<p>In Latijns-Amerika gebruik je voor een man als lijdend voorwerp <b>lo</b>: <i>Lo vi ayer</i>. In delen van Spanje hoor je daar <i>le</i>.</p>`,
        table: [['', 'enkelvoud', 'meervoud'], ['1', 'me (mij)', 'nos (ons)'], ['2', 'te (jou)', 'los / las (jullie, u)'], ['3', 'lo (hem/het) · la (haar/het)', 'los · las (ze)']] },
      { t: 'Meewerkend voorwerp: le, les', es: 'Objeto indirecto',
        html: `<p>Het meewerkend voorwerp is <b>aan wie</b> of <b>voor wie</b> iets is: <b>me, te, le, nos, les</b>.</p>
<p>In het Spaans noem je de persoon er vaak óók nog bij: <i><b>Le</b> doy el regalo <b>a mi mamá</b>.</i> <i><b>Les</b> escribí <b>a mis amigos</b>.</i></p>` },
      { t: 'Twee voornaamwoorden: se lo', es: 'Dos pronombres juntos',
        html: `<p>De volgorde is altijd: eerst meewerkend, dan lijdend. <i>¿Me lo prestas?</i> (leen je het mij?)</p>
<p>⚠️ <b>le / les + lo / la / los / las → se</b>: <i><s>le lo doy</s> → <b>se lo</b> doy</i> (ik geef het hem/haar/u).</p>
<p>De voornaamwoorden staan <b>vóór</b> het vervoegde werkwoord, óf ze plakken vast aan een infinitief of gerundio: <i>Te lo voy a dar = Voy a dártelo.</i> Let op het accent!</p>
<p>🌎 Typisch Latijns-Amerikaans: bij een meervoudige ontvanger zeg je vaak <b>se los</b>: <i>Se los dije</i> (ik heb het jullie gezegd).</p>` }
    ],
    verbs: ['prestar', 'dar', 'devolver', 'traer', 'decir', 'mandar', 'mostrar'], tenses: ['pres', 'pret'],
    dialogue: {
      t: 'La mudanza', place: 'Monterrey 🇲🇽',
      lines: [
        ['Diego', 'Güey, ¿me haces un favor? Mañana es mi mudanza.', 'Gast, wil je me een plezier doen? Morgen verhuis ik.'],
        ['Mark', '¡Claro! ¿Qué necesitas?', 'Natuurlijk! Wat heb je nodig?'],
        ['Diego', '¿Me prestas tu carro? Tengo muchas cajas.', 'Mag ik je auto lenen? Ik heb veel dozen.'],
        ['Mark', 'Sí, te lo presto. ¿A qué hora lo necesitas?', 'Ja, die mag je lenen. Hoe laat heb je hem nodig?'],
        ['Diego', 'A las nueve. Ah, ¿y tienes cinta para las cajas?', 'Om negen uur. O, en heb je plakband voor de dozen?'],
        ['Mark', 'No, no la tengo, pero la puedo comprar en la mañana.', 'Nee, dat heb ik niet, maar ik kan het morgenochtend kopen.'],
        ['Diego', '¡Sale! Oye, ¿te acuerdas del libro que te presté?', 'Top! Hé, weet je nog dat boek dat ik je geleend heb?'],
        ['Mark', '¿El de Juan Rulfo? Sí, ya lo terminé. Te lo devuelvo mañana.', 'Dat van Juan Rulfo? Ja, ik heb het al uit. Ik geef het je morgen terug.'],
        ['Diego', 'Perfecto. Y a mi hermana le debo dinero… ¿Se lo puedes dar tú? Ella vive cerca de tu casa.', 'Perfect. En ik ben mijn zus nog geld schuldig… Kun jij het haar geven? Ze woont bij jou in de buurt.'],
        ['Mark', 'Sí, dámelo y se lo doy hoy en la noche.', 'Ja, geef het maar aan mij, dan geef ik het haar vanavond.'],
        ['Diego', '¡Eres un gran amigo!', 'Je bent een topvriend!']
      ],
      q: [
        { t: 'mc', q: '¿Qué le presta Mark a Diego?', o: ['Su carro', 'Su celular', 'Dinero'] },
        { t: 'mc', q: '¿Qué va a comprar Mark?', o: ['Cinta para las cajas', 'Cajas nuevas', 'Un libro'] },
        { t: 'mc', q: '¿Qué va a hacer Mark con el dinero?', o: ['Dárselo a la hermana de Diego', 'Comprar comida', 'Pagar la mudanza'] }
      ]
    },
    culture: { t: '«Oké!» in twintig landen', html: `<p>👍 <b>¡Sale!</b> en <b>¡Órale!</b> 🇲🇽 · <b>¡Listo!</b> 🇨🇴 · <b>¡Dale!</b> 🇦🇷🇺🇾🇨🇴🇨🇺 · <b>¡Ya!</b> / <b>¡Ya po!</b> 🇨🇱 · <b>¡Vale!</b> 🇪🇸🇻🇪 · <b>¡Chévere!</b> 🇻🇪🇵🇷</p>
<p>🚗 Een auto heet <i>carro</i> in het grootste deel van Latijns-Amerika, <i>auto</i> in 🇦🇷🇨🇱🇺🇾 en <i>coche</i> in 🇪🇸.</p>
<p>🇨🇴 In Colombia is <b>prestar</b> heel beleefd: <i>¿Me presta el baño?</i> betekent <i>mag ik van uw wc gebruikmaken?</i> Je hoeft hem natuurlijk niet terug te geven 😄.</p>
<p>📚 Juan Rulfo (Mexico) schreef <i>Pedro Páramo</i>, een klassieker die veel schrijvers inspireerde.</p>` },
    ex: [
      { t: 'cloze', s: '¿Tienes las llaves? — Sí, ___ tengo.', a: ['las'], o: ['las', 'los', 'les'], nl: 'Heb je de sleutels? — Ja, ik heb ze.', tag: 'object-pron' },
      { t: 'cloze', s: '¿Compraste el pan? — Sí, ___ compré.', a: ['lo'], o: ['lo', 'la', 'le'], nl: 'Heb je het brood gekocht? — Ja, ik heb het gekocht.', tag: 'object-pron' },
      { t: 'cloze', s: '¿Conoces a Lucía? — Sí, ___ conozco.', a: ['la'], o: ['la', 'le', 'lo'], nl: 'Ken je Lucía? — Ja, ik ken haar.', tag: 'object-pron' },
      { t: 'cloze', s: '¿Me ayudas? — Sí, ___ ayudo.', a: ['te'], o: ['te', 'me', 'lo'], nl: 'Help je me? — Ja, ik help je.', tag: 'object-pron' },
      { t: 'cloze', s: '___ doy el regalo a mi mamá.', a: ['Le'], o: ['Le', 'La', 'Lo'], nl: 'Ik geef het cadeau aan mijn moeder.', tag: 'object-pron' },
      { t: 'cloze', s: '¿Le diste el libro a Ana? — Sí, ___ lo di.', a: ['se'], o: ['se', 'le', 'la'], nl: 'Heb je Ana het boek gegeven? — Ja, ik heb het haar gegeven.', x: 'le + lo wordt se lo.', tag: 'object-pron' },
      { t: 'mc', q: '«Kun je hem (de oplader) aan mij lenen?»', o: ['¿Me lo puedes prestar?', '¿Lo me puedes prestar?', '¿Puedes me lo prestar?'], tag: 'object-pron' },
      { t: 'mc', q: 'Welke zin betekent hetzelfde als «¿Me lo puedes prestar?»', o: ['¿Puedes prestármelo?', '¿Puedes prestarlome?', '¿Puedes melo prestar?'], x: 'Aan de infinitief vast: eerst me, dan lo. Er komt een accent bij.', tag: 'object-pron' },
      { t: 'mc', q: 'Welke uitdrukking voor «oké!» is typisch Mexicaans?', o: ['¡Sale!', '¡Ya po!', '¡Vale, tío!'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik geef het (el libro) je morgen terug.', a: ['Te lo devuelvo mañana.', 'Mañana te lo devuelvo.', 'Te lo voy a devolver mañana.', 'Mañana te lo voy a devolver.'], tag: 'object-pron' },
      { t: 'tr', nl: 'Ik heb hem (Diego) gisteren gezien.', a: ['Lo vi ayer.', 'Ayer lo vi.', 'Lo vi a Diego ayer.'], tag: 'object-pron' },
      { t: 'tr', nl: 'Wil je me een plezier doen?', a: ['¿Me haces un favor?', '¿Me puedes hacer un favor?', '¿Me hace un favor?', '¿Me puede hacer un favor?', '¿Puedes hacerme un favor?'], tag: 'object-pron' },
      { t: 'order', s: 'Se lo voy a dar esta noche.', nl: 'Ik ga het hem/haar vanavond geven.' }
    ],
    say: [['¿Me haces un favor?', 'Wil je me een plezier doen?'], ['Sí, te lo presto.', 'Ja, ik leen het je.'], ['Te lo devuelvo mañana.', 'Ik geef het je morgen terug.']],
    task: { nl: 'Je gaat verhuizen. Schrijf een berichtje aan een vriend: vraag 2 gunsten (iets lenen of helpen) en beloof iets terug. Gebruik lo/la/le en minstens één keer se lo.', model: 'Hola, Ana. El sábado es mi mudanza. ¿Me prestas tu carro? Te lo devuelvo el domingo. Y ¿tienes las cajas de tu hermano? ¿Me las puedes traer? A tu hermano le compro una cerveza; ¡se la doy en la fiesta!' },
    scenario: { nl: 'Een vriend uit Monterrey vraagt jou om hulp bij zijn verhuizing.', role: 'Eres Diego, un amigo regiomontano (de Monterrey) relajado. Pides favores: que te preste cosas, que te ayude, que le dé algo a alguien. Usas «güey», «sale», «órale».', goal: 'Reageer op de gunsten en gebruik lo/la/le/se lo in je antwoorden.' }
  });

  /* ───────────────────────── A2 · 8 ───────────────────────── */
  U({
    id: 'a2-08', level: 'A2', icon: '⚖️', title: 'Comparando ciudades', nl: 'Vergelijkingen en overtreffende trap',
    goals: ['Steden, mensen en dingen vergelijken', 'Mejor, peor, mayor, menor gebruiken', 'De overtreffende trap en -ísimo'],
    vocab: [
      ['más … que', 'meer … dan / …er dan'], ['menos … que', 'minder … dan'], ['tan … como', 'even … als / net zo … als'],
      ['tanto/a … como', 'evenveel … als'], ['igual de …', 'net zo …'], ['mejor', 'beter / best'], ['peor', 'slechter / slechtst'],
      ['la capital', 'de hoofdstad'], ['la población', 'de bevolking'], ['el / la habitante', 'de inwoner'], ['peligroso / peligrosa', 'gevaarlijk'],
      ['seguro / segura', 'veilig'], ['ruidoso / ruidosa', 'lawaaierig'], ['limpio / limpia', 'schoon'], ['sucio / sucia', 'vies'],
      ['moderno / moderna', 'modern'], ['antiguo / antigua', 'oud (gebouwen, steden)'], ['el edificio', 'het gebouw'], ['el tráfico', 'het verkeer'],
      ['el transporte público', 'het openbaar vervoer'], ['el metro', 'de metro'], ['la vida nocturna', 'het nachtleven'],
      ['el costo de vida', 'de kosten van levensonderhoud', 'ES: el coste'], ['húmedo / húmeda', 'vochtig'], ['hace fresco', 'het is fris'],
      ['parecerse a', 'lijken op'], ['en cambio', 'daarentegen'], ['obvio', 'natuurlijk / duh', 'LatAm']
    ],
    grammar: [
      { t: 'Vergelijken', es: 'Comparativos',
        html: `<p><b>más</b> + bijv. nw. + <b>que</b>: <i>Bogotá es más fría que Cali.</i><br>
<b>menos</b> + bijv. nw. + <b>que</b>: <i>Lima es menos cara que Santiago.</i><br>
<b>tan</b> + bijv. nw. + <b>como</b>: <i>Quito es tan alta como… casi.</i></p>
<p>Bij een zelfstandig naamwoord gebruik je <b>tanto / tanta / tantos / tantas … como</b>: <i>No tengo tantos amigos como tú.</i> Bij een werkwoord zet je <b>tanto como</b> erachter: <i>No trabajo tanto como tú.</i></p>` },
      { t: 'Onregelmatige vormen', es: 'Comparativos irregulares',
        html: `<p><b>bueno → mejor</b> · <b>malo → peor</b> · <b>joven → menor</b> (jonger) · <b>viejo → mayor</b> (ouder)</p>
<p>⚠️ Zeg nooit <s>más bueno</s> of <s>más mejor</s>. Voor grootte gebruik je <i>más grande / más pequeño</i>, voor leeftijd <i>mayor / menor</i>.</p>`,
        table: [['', 'vergrotend', 'overtreffend'], ['bueno', 'mejor', 'el / la mejor'], ['malo', 'peor', 'el / la peor'], ['(edad)', 'mayor / menor', 'el / la mayor · menor']] },
      { t: 'Overtreffende trap en -ísimo', es: 'Superlativos',
        html: `<p><b>el / la / los / las</b> (+ znw.) + <b>más</b> + bijv. nw. + <b>de</b>: <i>Es la ciudad más grande <b>de</b> México.</i> (Let op: <b>de</b>, niet <i>en</i>.)</p>
<p>Met <b>-ísimo</b> maak je iets <i>heel erg</i>: <i>rico → riquísimo · grande → grandísimo · fácil → facilísimo · amable → amabilísimo · mucho → muchísimo</i>.</p>` }
    ],
    verbs: ['ser', 'parecer', 'tener'], tenses: ['pres', 'imp'],
    dialogue: {
      t: '¿Bogotá o la Ciudad de México?', place: 'Videollamada 🇨🇴 🇲🇽',
      lines: [
        ['Mark', 'Estoy pensando en vivir un año en Latinoamérica. ¿Qué ciudad es mejor: Bogotá o la Ciudad de México?', 'Ik denk erover om een jaar in Latijns-Amerika te gaan wonen. Welke stad is beter: Bogotá of Mexico-Stad?'],
        ['Sofía', '¡La Ciudad de México, obvio! Es más grande que Bogotá y es una de las ciudades con más museos del mundo.', 'Mexico-Stad, natuurlijk! Die is groter dan Bogotá en een van de steden met de meeste musea ter wereld.'],
        ['Mateo', 'Sí, pero también tiene más tráfico. Bogotá es más tranquila.', 'Ja, maar er is ook meer verkeer. Bogotá is rustiger.'],
        ['Sofía', '¿Más tranquila? En Bogotá llueve muchísimo y hace más frío.', 'Rustiger? In Bogotá regent het ontzettend veel en is het kouder.'],
        ['Mateo', 'Bueno, hace fresco, pero el clima no es tan malo como dices. Y la gente es amabilísima.', 'Nou ja, het is fris, maar het weer is niet zo slecht als je zegt. En de mensen zijn superaardig.'],
        ['Mark', '¿Y el costo de vida?', 'En de kosten van levensonderhoud?'],
        ['Mateo', 'Bogotá es un poco más barata. Y está a 2.600 metros, más alta que la Ciudad de México.', 'Bogotá is iets goedkoper. En het ligt op 2.600 meter, hoger dan Mexico-Stad.'],
        ['Sofía', 'Eso sí. Pero los tacos de México son los mejores del mundo.', 'Dat klopt. Maar de Mexicaanse taco’s zijn de beste ter wereld.'],
        ['Mateo', '¡Y el café de Colombia es el mejor del mundo!', 'En de Colombiaanse koffie is de beste ter wereld!'],
        ['Mark', 'Ja, ja. Creo que las dos son igual de interesantes.', 'Haha. Ik denk dat ze allebei even interessant zijn.']
      ],
      q: [
        { t: 'mc', q: '¿Qué ciudad es más grande?', o: ['La Ciudad de México', 'Bogotá', 'Son iguales'] },
        { t: 'mc', q: '¿Cuál es más barata, según Mateo?', o: ['Bogotá', 'La Ciudad de México', 'Ninguna'] },
        { t: 'mc', q: '¿Qué ciudad está más alta?', o: ['Bogotá', 'La Ciudad de México', 'Las dos están al nivel del mar'] }
      ]
    },
    culture: { t: 'Steden in de wolken', html: `<p>🏔️ Veel Latijns-Amerikaanse hoofdsteden liggen hoog: <b>La Paz</b> 🇧🇴 (±3.600 m, de hoogste regeringszetel ter wereld) · <b>Quito</b> 🇪🇨 (±2.850 m) · <b>Bogotá</b> 🇨🇴 (±2.600 m) · <b>Ciudad de México</b> 🇲🇽 (±2.240 m).</p>
<p>🏙️ Mexico-Stad is met meer dan 20 miljoen inwoners in de agglomeratie de grootste Spaanstalige stad ter wereld.</p>
<p>🇧🇷 Vergeet niet: in Brazilië, het grootste land van Zuid-Amerika, spreken ze <b>Portugees</b>.</p>` },
    ex: [
      { t: 'cloze', s: 'Bogotá es ___ alta que la Ciudad de México.', a: ['más'], o: ['más', 'tan', 'muy'], nl: 'Bogotá ligt hoger dan Mexico-Stad.', tag: 'comparatives' },
      { t: 'cloze', s: 'Mi hermano es ___ alto como yo.', h: 'even', a: ['tan'], o: ['tan', 'tanto', 'más'], nl: 'Mijn broer is even lang als ik.', tag: 'comparatives' },
      { t: 'cloze', s: 'Tengo ___ libros como tú.', h: 'evenveel', a: ['tantos'], o: ['tantos', 'tan', 'tantas'], nl: 'Ik heb evenveel boeken als jij.', tag: 'comparatives' },
      { t: 'cloze', s: 'Este restaurante es ___ que el otro.', h: 'beter', a: ['mejor'], o: ['mejor', 'más bueno', 'más mejor'], nl: 'Dit restaurant is beter dan het andere.', tag: 'comparatives' },
      { t: 'cloze', s: 'Mi abuela es la ___ de la familia.', h: 'oudste', a: ['mayor'], o: ['mayor', 'más vieja que', 'menor'], nl: 'Mijn oma is de oudste van de familie.', tag: 'comparatives' },
      { t: 'cloze', s: 'Los tacos están ___.', h: 'rico + -ísimo', a: ['riquísimos'], nl: 'De taco’s zijn overheerlijk.', x: 'c → qu: rico → riquísimo, en meervoud: riquísimos.', tag: 'comparatives' },
      { t: 'mc', q: 'Welke zin is correct?', o: ['Es la ciudad más grande del país.', 'Es la ciudad más grande en el país.', 'Es la más ciudad grande del país.'], x: 'Na een overtreffende trap komt de, niet en.', tag: 'comparatives' },
      { t: 'mc', q: 'muy fácil =', o: ['facilísimo', 'facílisimo', 'fácilísimo'], tag: 'comparatives' },
      { t: 'mc', q: '«peor» is de vergrotende trap van…', o: ['malo', 'poco', 'pequeño'], tag: 'comparatives' },
      { t: 'mc', q: 'Welke taal spreken ze in Brazilië?', o: ['Portugees', 'Spaans', 'Braziliaans'], tag: 'vocab' },
      { t: 'tr', nl: 'Mijn broer is ouder dan ik.', a: ['Mi hermano es mayor que yo.'], tag: 'comparatives' },
      { t: 'tr', nl: 'Dit is de beste koffie ter wereld.', a: ['Este es el mejor café del mundo.', 'Es el mejor café del mundo.', 'Éste es el mejor café del mundo.'], tag: 'comparatives' },
      { t: 'tr', nl: 'Het is net zo duur als in Nederland.', a: ['Es tan caro como en Holanda.', 'Es tan caro como en los Países Bajos.', 'Está tan caro como en Holanda.'], tag: 'comparatives' },
      { t: 'tr', nl: 'Ik werk minder dan jij.', a: ['Trabajo menos que tú.', 'Yo trabajo menos que tú.'], tag: 'comparatives' },
      { t: 'order', s: 'La comida aquí es mejor que en mi país.', nl: 'Het eten hier is beter dan in mijn land.' }
    ],
    say: [['Bogotá es más fría que Cali.', 'Bogotá is kouder dan Cali.'], ['Es la ciudad más grande del país.', 'Het is de grootste stad van het land.'], ['La comida está riquísima.', 'Het eten is overheerlijk.']],
    task: { nl: 'Vergelijk jouw woonplaats met een Latijns-Amerikaanse stad die je kent of wilt bezoeken. Schrijf minstens 5 vergelijkingen.', model: 'Ámsterdam es más pequeña que Buenos Aires, pero es tan bonita como ella. En Buenos Aires hace más calor y la vida nocturna es mejor. Ámsterdam es más cara. La carne argentina es la mejor del mundo, ¡riquísima!' },
    scenario: { nl: 'Twee vrienden proberen je te overtuigen om in hún stad te komen wonen.', role: 'Eres Sofía, una chilanga (de la Ciudad de México) orgullosa de su ciudad. Comparas la CDMX con otras ciudades latinoamericanas y quieres convencer al estudiante de que viva allí. Haces preguntas sobre su ciudad.', goal: 'Vergelijk steden (meer/minder/even … als, de beste, -ísimo) en kies uiteindelijk een stad.' }
  });

  /* ───────────────────────── A2 · 9 ───────────────────────── */
  U({
    id: 'a2-09', level: 'A2', icon: '💼', title: 'El trabajo y el futuro', nl: 'Futuro simple en por vs. para',
    goals: ['Over werk en je toekomstplannen praten', 'De futuro simple vormen (también onregelmatig)', 'Por en para onderscheiden (basis)'],
    vocab: [
      ['el empleo', 'de baan'], ['la empresa', 'het bedrijf'], ['el / la jefe/a', 'de baas'], ['el / la compañero/a de trabajo', 'de collega'],
      ['el sueldo', 'het salaris'], ['la entrevista', 'het sollicitatiegesprek / interview'], ['el currículum', 'het cv', 'CO: la hoja de vida'],
      ['el puesto', 'de functie'], ['solicitar', 'solliciteren / aanvragen'], ['la reunión', 'de vergadering'], ['el proyecto', 'het project'],
      ['el equipo', 'het team'], ['el horario', 'het (werk)rooster'], ['tiempo completo', 'fulltime', 'ES: jornada completa'], ['medio tiempo', 'parttime'],
      ['trabajar desde casa', 'thuiswerken'], ['ahorrar', 'sparen'], ['jubilarse', 'met pensioen gaan'], ['algún día', 'ooit / op een dag'],
      ['dentro de cinco años', 'over vijf jaar'], ['seguramente', 'waarschijnlijk / vast'], ['tal vez / quizás', 'misschien'],
      ['con fluidez', 'vloeiend'], ['la chamba', 'het werk', 'MX · PE · informeel'], ['el laburo', 'het werk', 'AR · UY · informeel'],
      ['la pega', 'het werk', 'CL · informeel']
    ],
    grammar: [
      { t: 'Futuro simple', es: 'El futuro simple',
        html: `<p>De futuro is makkelijk. Je neemt de <b>hele infinitief</b> en zet er een uitgang achter. Die uitgangen zijn voor alle groepen gelijk: <b>-é, -ás, -á, -emos, -án</b>.</p>
<p>In het dagelijkse Latijns-Amerikaanse Spaans hoor je voor plannen vaker <i>ir a + infinitief</i>. De futuro gebruik je vooral voor <b>voorspellingen</b>, <b>beloftes</b>, formele plannen en <b>gissingen</b>: <i>¿Dónde estará Ana? — Estará en el trabajo.</i> (Ze zal wel op haar werk zijn.)</p>`,
        table: [['', 'hablar', 'comer', 'vivir'], ['yo', 'hablaré', 'comeré', 'viviré'], ['tú', 'hablarás', 'comerás', 'vivirás'], ['él / usted', 'hablará', 'comerá', 'vivirá'], ['nosotros', 'hablaremos', 'comeremos', 'viviremos'], ['ellos / ustedes', 'hablarán', 'comerán', 'vivirán']] },
      { t: 'Onregelmatige stammen', es: 'Futuros irregulares',
        html: `<p>tener → <b>tendr</b>é · salir → <b>saldr</b>é · venir → <b>vendr</b>é · poner → <b>pondr</b>é · poder → <b>podr</b>é · saber → <b>sabr</b>é · querer → <b>querr</b>é · haber → <b>habr</b>á (er zal/zullen zijn) · hacer → <b>har</b>é · decir → <b>dir</b>é</p>` },
      { t: 'Por of para? (basis)', es: 'Por y para',
        html: `<p><b>para</b> = doel, bestemming, deadline of ontvanger: <i>Estudio <b>para</b> trabajar en México.</i> · <i>Salgo <b>para</b> Lima.</i> · <i>Es <b>para</b> el viernes.</i> · <i>Es <b>para</b> ti.</i></p>
<p><b>por</b> = oorzaak/reden, via/door, ruil/prijs, een periode: <i>Gracias <b>por</b> todo.</i> · <i>Te llamo <b>por</b> teléfono.</i> · <i>Lo compré <b>por</b> 100 pesos.</i> · <i>Caminamos <b>por</b> el parque.</i> · <i><b>Por</b> la lluvia no salimos.</i></p>`,
        sum: 'para → objetivo / destino · por → causa / medio / intercambio' }
    ],
    verbs: ['tener', 'hacer', 'poder', 'decir', 'salir', 'venir', 'poner', 'saber', 'querer', 'trabajar', 'vivir', 'ser', 'haber'], tenses: ['fut'],
    dialogue: {
      t: 'La entrevista de trabajo', place: 'Ciudad de México 🇲🇽',
      lines: [
        ['Entrevistadora', 'Buenos días, Mark. Gracias por venir. ¿Por qué quiere trabajar en nuestra empresa?', 'Goedemorgen, Mark. Bedankt voor uw komst. Waarom wilt u bij ons bedrijf werken?'],
        ['Mark', 'Buenos días. Porque es una empresa internacional y quiero trabajar en Latinoamérica para mejorar mi español.', 'Goedemorgen. Omdat het een internationaal bedrijf is en ik in Latijns-Amerika wil werken om mijn Spaans te verbeteren.'],
        ['Entrevistadora', '¿Dónde se ve dentro de cinco años?', 'Waar ziet u zichzelf over vijf jaar?'],
        ['Mark', 'Dentro de cinco años tendré más experiencia y seré jefe de un equipo. También hablaré español con fluidez.', 'Over vijf jaar heb ik meer ervaring en ben ik leidinggevende van een team. Ook spreek ik dan vloeiend Spaans.'],
        ['Entrevistadora', 'Muy bien. El puesto es de tiempo completo. Tendrá que viajar mucho por la región.', 'Heel goed. Het is een fulltime functie. U zult veel door de regio moeten reizen.'],
        ['Mark', 'Perfecto, me encanta viajar.', 'Perfect, ik reis heel graag.'],
        ['Entrevistadora', '¿Cuándo puede empezar?', 'Wanneer kunt u beginnen?'],
        ['Mark', 'Podré empezar el primero de marzo.', 'Ik kan op 1 maart beginnen.'],
        ['Entrevistadora', 'Excelente. Le mandaremos una respuesta por correo antes del viernes.', 'Uitstekend. We sturen u vóór vrijdag per e-mail een antwoord.'],
        ['Mark', 'Muchas gracias por la oportunidad.', 'Hartelijk dank voor de kans.']
      ],
      q: [
        { t: 'mc', q: '¿Por qué quiere Mark trabajar en la empresa?', o: ['Para trabajar en Latinoamérica y mejorar su español', 'Por el sueldo', 'Porque vive cerca'] },
        { t: 'mc', q: '¿Qué tendrá que hacer Mark en el puesto?', o: ['Viajar mucho por la región', 'Trabajar medio tiempo', 'Trabajar desde casa'] },
        { t: 'mc', q: '¿Cómo le mandarán la respuesta?', o: ['Por correo', 'Por teléfono', 'En persona'] }
      ]
    },
    culture: { t: 'Werkcultuur', html: `<p>💼 Werk heet in de spreektaal: <i>chamba</i> 🇲🇽🇵🇪 · <i>laburo</i> 🇦🇷🇺🇾 · <i>pega</i> 🇨🇱 · <i>camello</i> 🇨🇴. Een cv heet in Colombia <i>hoja de vida</i>.</p>
<p>🎓 Titels zijn belangrijk. In Mexico spreek je iemand met een universitaire opleiding aan met <b>licenciado/a</b> (<i>Lic.</i>), een ingenieur met <b>ingeniero/a</b>. In Colombia heet een advocaat vaak <i>doctor</i>.</p>
<p>🎄 In veel landen krijg je in december een extra maandsalaris: <b>aguinaldo</b> 🇲🇽🇦🇷 of <b>prima</b> 🇨🇴.</p>
<p>🤝 In een sollicitatiegesprek begin je altijd met <b>usted</b>.</p>` },
    ex: [
      { t: 'cloze', s: 'Mañana ___.', h: 'llover', a: ['lloverá'], nl: 'Morgen gaat het regenen.', tag: 'future' },
      { t: 'cloze', s: 'El próximo año ___ a Chile.', h: 'viajar, yo', a: ['viajaré'], nl: 'Volgend jaar reis ik naar Chili.', tag: 'future' },
      { t: 'cloze', s: '¿Qué ___ tú en las vacaciones?', h: 'hacer', a: ['harás'], nl: 'Wat ga jij doen in de vakantie?', tag: 'future' },
      { t: 'cloze', s: 'Nosotros ___ una reunión el lunes.', h: 'tener', a: ['tendremos'], nl: 'We hebben maandag een vergadering.', tag: 'future' },
      { t: 'cloze', s: 'Ellos no ___ venir.', h: 'poder', a: ['podrán'], nl: 'Zij zullen niet kunnen komen.', tag: 'future' },
      { t: 'cloze', s: 'Te lo ___ mañana.', h: 'decir, yo', a: ['diré'], nl: 'Ik zeg het je morgen.', tag: 'future' },
      { t: 'cloze', s: '___ mucha gente en la fiesta.', h: 'haber', a: ['Habrá'], nl: 'Er zullen veel mensen op het feest zijn.', tag: 'future' },
      { t: 'cloze', s: 'Este regalo es ___ ti.', a: ['para'], o: ['para', 'por'], nl: 'Dit cadeau is voor jou.', tag: 'por-para' },
      { t: 'cloze', s: 'Gracias ___ tu ayuda.', a: ['por'], o: ['por', 'para'], nl: 'Bedankt voor je hulp.', tag: 'por-para' },
      { t: 'cloze', s: 'Estudio español ___ trabajar en México.', a: ['para'], o: ['para', 'por'], nl: 'Ik leer Spaans om in Mexico te werken.', tag: 'por-para' },
      { t: 'cloze', s: 'Compré este suéter ___ 300 pesos.', a: ['por'], o: ['por', 'para'], nl: 'Ik heb deze trui voor 300 peso gekocht.', tag: 'por-para' },
      { t: 'cloze', s: 'Necesito el informe ___ el viernes.', a: ['para'], o: ['para', 'por'], nl: 'Ik heb het rapport vóór vrijdag nodig.', tag: 'por-para' },
      { t: 'mc', q: '«Chamba» betekent…', o: ['werk', 'feest', 'geld'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik bel je morgen.', a: ['Te llamaré mañana.', 'Mañana te llamaré.', 'Te voy a llamar mañana.', 'Mañana te voy a llamar.', 'Mañana te llamo.', 'Te llamo mañana.'], tag: 'future' },
      { t: 'tr', nl: 'Waar zou Ana zijn? (gissing)', a: ['¿Dónde estará Ana?'], tag: 'future' },
      { t: 'order', s: 'Dentro de cinco años tendré mi propia empresa.', nl: 'Over vijf jaar heb ik mijn eigen bedrijf.' }
    ],
    say: [['Dentro de cinco años hablaré español con fluidez.', 'Over vijf jaar spreek ik vloeiend Spaans.'], ['Gracias por la oportunidad.', 'Bedankt voor de kans.'], ['Estudio español para trabajar en Latinoamérica.', 'Ik leer Spaans om in Latijns-Amerika te werken.']],
    task: { nl: 'Beschrijf hoe je leven er over 10 jaar uitziet: werk, woonplaats, Spaans, familie. Gebruik minstens 5 futurovormen en één keer por en para.', model: 'Dentro de diez años viviré en Colombia, en Medellín. Tendré mi propia empresa y trabajaré desde casa. Hablaré español con fluidez. Viajaré por toda Latinoamérica para conocer cada país.' },
    scenario: { nl: 'Je doet een sollicitatiegesprek bij een bedrijf in Mexico-Stad.', role: 'Eres la licenciada Torres, gerente de recursos humanos de una empresa en la Ciudad de México. Haces una entrevista de trabajo formal (usted): motivación, experiencia, planes para el futuro, disponibilidad.', goal: 'Beantwoord de vragen; vertel over je ervaring en je toekomstplannen (futuro).' }
  });

  /* ───────────────────────── A2 · 10 ───────────────────────── */
  U({
    id: 'a2-10', level: 'A2', icon: '🥑', title: 'Instrucciones y consejos', nl: 'De gebiedende wijs (imperativo)',
    goals: ['Instructies, recepten en routebeschrijvingen geven', 'De imperativo voor tú, usted en ustedes', 'Voornaamwoorden aan de imperativo vastplakken (dímelo)'],
    vocab: [
      ['girar / doblar', 'afslaan'], ['seguir derecho', 'rechtdoor gaan'], ['cruzar', 'oversteken'], ['la esquina', 'de hoek (van de straat)'],
      ['el semáforo', 'het verkeerslicht'], ['la avenida', 'de laan / avenue'], ['la glorieta', 'de rotonde', 'ook: la rotonda'], ['el puente', 'de brug'],
      ['subir / bajar', 'instappen, omhoog / uitstappen, omlaag'], ['estacionar', 'parkeren', 'CO/CR/PA: parquear · ES: aparcar'],
      ['la receta', 'het recept'], ['lavar', 'wassen'], ['cortar', 'snijden'], ['pelar', 'schillen'], ['mezclar', 'mengen'], ['agregar', 'toevoegen', 'ES vaker: añadir'],
      ['hervir (ie)', 'koken (water)'], ['freír', 'bakken (in olie)'], ['el horno', 'de oven'], ['la olla', 'de pan'], ['la sartén', 'de koekenpan'],
      ['una pizca de sal', 'een snufje zout'], ['el cuchillo', 'het mes'], ['¡ojo!', 'let op!'], ['¡cuidado!', 'pas op!'], ['¡apúrate!', 'schiet op!'],
      ['¡no te preocupes!', 'maak je geen zorgen!'], ['poquito / finito', 'een klein beetje / heel fijn', 'verkleinwoorden: overal in LatAm']
    ],
    grammar: [
      { t: 'Imperativo voor tú', es: 'Imperativo afirmativo (tú)',
        html: `<p>De bevestigende tú-vorm is gelijk aan de <b>él-vorm van de presente</b>: <i>habla, come, escribe, piensa, duerme, pide</i>.</p>
<p>Acht veelgebruikte werkwoorden zijn onregelmatig. Leer ze uit je hoofd:</p>`,
        table: [['decir', 'hacer', 'ir', 'poner', 'salir', 'ser', 'tener', 'venir'], ['di', 'haz', 've', 'pon', 'sal', 'sé', 'ten', 'ven']] },
      { t: 'Imperativo voor usted en ustedes', es: 'Imperativo (usted / ustedes)',
        html: `<p>Neem de <b>yo-vorm</b> van de presente, haal de <b>-o</b> weg en wissel de klinker om: bij <b>-ar</b> wordt het <b>-e / -en</b>, bij <b>-er/-ir</b> wordt het <b>-a / -an</b>.</p>
<p><i>hablar → hable / hablen · comer → coma / coman · tener (tengo) → tenga / tengan · seguir (sigo) → siga / sigan · decir (digo) → diga / digan</i></p>
<p>Spelling: <i>buscar → busque · llegar → llegue · cruzar → cruce</i>. Onregelmatig: <b>ir → vaya</b>, <b>ser → sea</b>, <b>dar → dé</b>, <b>estar → esté</b>, <b>saber → sepa</b>.</p>
<p>🌎 In Latijns-Amerika is <b>ustedes</b> ook de informele meervoudsvorm. Tegen een groep vrienden zeg je dus: <i>¡Vengan! ¡Siéntense!</i></p>` },
      { t: 'Voornaamwoorden vastplakken', es: 'Pronombres con imperativo',
        html: `<p>Bij een bevestigende imperativo plak je de voornaamwoorden <b>achter</b> het werkwoord. Vaak komt er dan een accent bij om de klemtoon te behouden: <i>dime, dímelo, siéntese, levántate, pruébalo, ponle sal</i>.</p>
<p>Bij een <b>ontkenning</b> gebruik je een andere vorm (<i>no hables, no lo toques</i>). Die leer je in B1 bij de subjuntivo.</p>` }
    ],
    verbs: ['hablar', 'comer', 'escribir', 'venir', 'hacer', 'decir', 'poner', 'salir', 'tener', 'ir', 'ser', 'seguir', 'cruzar', 'doblar', 'pensar', 'dormir'], tenses: ['imper'],
    dialogue: {
      t: 'El guacamole de la abuela', place: 'Puebla 🇲🇽',
      lines: [
        ['Abuela Lupe', 'Mira, mijo, te voy a enseñar a hacer guacamole de verdad.', 'Kijk, jongen, ik ga je leren hoe je echte guacamole maakt.'],
        ['Mark', '¡Qué bien! ¿Qué hago primero?', 'Leuk! Wat doe ik eerst?'],
        ['Abuela Lupe', 'Primero, lava los tomates y el cilantro. Luego corta la cebolla muy finita.', 'Eerst was je de tomaten en de koriander. Dan snij je de ui heel fijn.'],
        ['Mark', '¿Así está bien?', 'Is het zo goed?'],
        ['Abuela Lupe', 'Sí, perfecto. Ahora abre los aguacates y saca la semilla. ¡Ojo con el cuchillo!', 'Ja, perfect. Nu snij je de avocado’s open en haal je de pit eruit. Pas op met het mes!'],
        ['Mark', 'Listo. ¿Y ahora?', 'Klaar. En nu?'],
        ['Abuela Lupe', 'Pon los aguacates en el molcajete y machácalos bien.', 'Doe de avocado’s in de molcajete en prak ze goed fijn.'],
        ['Mark', '¿Le pongo el chile ya?', 'Doe ik de chilipeper er al in?'],
        ['Abuela Lupe', 'Sí, pero ponle poquito, que pica mucho. Después agrega la cebolla, el tomate, el cilantro, sal y unas gotas de limón.', 'Ja, maar doe er maar een klein beetje in, want hij is erg pittig. Voeg daarna de ui, tomaat, koriander, zout en een paar druppels limoen toe.'],
        ['Mark', '¡Huele riquísimo!', 'Het ruikt heerlijk!'],
        ['Abuela Lupe', 'Pruébalo. Y sírvelo con totopos. ¡Provecho!', 'Proef maar. En serveer het met totopos. Eet smakelijk!']
      ],
      q: [
        { t: 'mc', q: '¿Qué hace Mark primero?', o: ['Lava los tomates y el cilantro', 'Corta los aguacates', 'Pone el chile'] },
        { t: 'mc', q: '¿Por qué debe poner poco chile?', o: ['Porque pica mucho', 'Porque es caro', 'Porque no le gusta a la abuela'] },
        { t: 'mc', q: '¿Con qué se sirve el guacamole?', o: ['Con totopos', 'Con pan', 'Con arroz'] }
      ]
    },
    culture: { t: 'Verkleinwoorden en routebeschrijvingen', html: `<p>💛 In Latijns-Amerika hoor je overal <b>verkleinwoorden</b> (<i>-ito, -ita</i>): <i>un cafecito, ahorita, poquito, finita, un momentito</i>. Ze maken wat je zegt vriendelijker en warmer. In Costa Rica en Colombia hoor je ook <i>-ico</i>: <i>un momentico</i>.</p>
<p>🧭 Tegen onbekenden geef je routebeschrijvingen meestal met <b>usted</b>: <i>Siga derecho dos cuadras, doble a la derecha en el semáforo y cruce la avenida.</i></p>
<p>🥑 Een <b>molcajete</b> is een vijzel van vulkanisch steen. <b>Totopos</b> zijn tortillachips (🇲🇽).</p>` },
    ex: [
      { t: 'cloze', s: '___ más despacio, por favor.', h: 'hablar, tú', a: ['Habla'], nl: 'Praat wat langzamer, alsjeblieft.', tag: 'imperative' },
      { t: 'cloze', s: '___ algo, ¡estás muy flaco!', h: 'comer, tú', a: ['Come'], nl: 'Eet iets, je bent heel mager!', tag: 'imperative' },
      { t: 'cloze', s: '___ aquí, por favor.', h: 'venir, tú', a: ['Ven'], nl: 'Kom hier, alsjeblieft.', tag: 'imperative' },
      { t: 'cloze', s: '___ la tarea ahora.', h: 'hacer, tú', a: ['Haz'], nl: 'Maak je huiswerk nu.', tag: 'imperative' },
      { t: 'cloze', s: '___ la verdad.', h: 'decir, tú', a: ['Di'], nl: 'Zeg de waarheid.', tag: 'imperative' },
      { t: 'cloze', s: '___ la mesa, por favor.', h: 'poner, tú', a: ['Pon'], nl: 'Dek de tafel, alsjeblieft.', tag: 'imperative' },
      { t: 'cloze', s: '___ derecho dos cuadras.', h: 'seguir, usted', a: ['Siga'], nl: 'Gaat u twee blokken rechtdoor.', tag: 'imperative' },
      { t: 'cloze', s: '___ a la derecha en el semáforo.', h: 'doblar, usted', a: ['Doble'], nl: 'Slaat u bij het stoplicht rechtsaf.', tag: 'imperative' },
      { t: 'cloze', s: '___ la avenida con cuidado.', h: 'cruzar, ustedes', a: ['Crucen'], nl: 'Steek de avenue voorzichtig over.', tag: 'imperative' },
      { t: 'cloze', s: '___ cuidado con el perro.', h: 'tener, usted', a: ['Tenga'], nl: 'Pas op voor de hond.', tag: 'imperative' },
      { t: 'mc', q: 'Imperativo van ir (tú):', o: ['ve', 'va', 'vas'], tag: 'imperative' },
      { t: 'mc', q: '«Gaat u zitten.»', o: ['Siéntese.', 'Siéntase.', 'Se siente.'], x: 'sentarse → siéntese (ga zitten). Siéntase komt van sentirse (zich voelen).', tag: 'imperative' },
      { t: 'mc', q: '«Dímelo» betekent…', o: ['Zeg het me', 'Geef het me', 'Ik zeg het je'], tag: 'imperative' },
      { t: 'tr', nl: 'Neem de metro. (tú)', a: ['Toma el metro.', 'Agarra el metro.'], tag: 'imperative' },
      { t: 'tr', nl: 'Komt u binnen, alstublieft.', a: ['Pase, por favor.', 'Entre, por favor.', 'Adelante, por favor.', 'Pase.', 'Entre.', 'Pase usted, por favor.'], tag: 'imperative' },
      { t: 'order', s: 'Siga derecho y doble a la izquierda en la esquina.', nl: 'Ga rechtdoor en sla op de hoek linksaf.' }
    ],
    say: [['Siga derecho y doble a la derecha.', 'Ga rechtdoor en sla rechtsaf.'], ['Pon los aguacates en el molcajete.', 'Doe de avocado’s in de vijzel.'], ['¡Pruébalo, está riquísimo!', 'Proef maar, het is heerlijk!']],
    task: { nl: 'Schrijf een recept van een gerecht dat jij goed kunt maken, of een routebeschrijving van het station naar je huis. Gebruik minstens 6 imperativos.', model: 'Para hacer una tortilla de papas: primero, pela y corta las papas. Luego fríelas en aceite. Bate cuatro huevos y agrega sal. Mezcla todo y ponlo en la sartén. Después de cinco minutos, dale la vuelta. ¡Sírvela caliente!' },
    scenario: { nl: 'Een Mexicaanse oma leert je koken, en vraagt daarna jou om een recept uit je eigen land.', role: 'Eres la abuela Lupe, una abuela mexicana de Puebla, cariñosa y mandona. Das instrucciones de cocina con imperativo (tú), usas diminutivos (poquito, finito) y luego pides al estudiante que te explique una receta de su país.', goal: 'Volg en geef instructies met de imperativo.' }
  });
})(window.SPT);
