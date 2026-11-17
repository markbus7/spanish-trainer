/* Neerlandés A2, unidades 1–5 (neerlandés de los Países Bajos, explicaciones en español latinoamericano). Mismo formato que a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('nl-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'nl-perf': 'perfectum con hebben', 'nl-ge': 'participio: ge- … -t / -d', 'nl-perfz': 'perfectum con zijn', 'nl-irr': 'participios irregulares',
    'nl-ov': 'transporte público', 'nl-moet': 'moeten / hoeven', 'nl-dokter': 'la salud', 'nl-comp': 'comparativo (groter, meer…)', 'nl-sup': 'superlativo (het grootst…)',
    'nl-ooit': 'ooit, nooit, al, nog niet'
  });

  /* ───────────────────────── A2 · 1 ───────────────────────── */
  U({
    id: 'nl-a2-01', level: 'A2', icon: '🕰️', title: 'Wat heb je gedaan?', nl: 'El fin de semana pasado',
    goals: ['Contar qué hiciste con el perfectum (hebben + participio)', 'Formar el participio regular: ge- … -t / -d', 'Usar gisteren, vorige week y geleden'],
    vocab: [
      ['gisteren', 'ayer'], ['gisteravond', 'anoche'], ['vorig weekend', 'el fin de semana pasado'], ['vorige week', 'la semana pasada'], ['vorig jaar', 'el año pasado'],
      ['twee dagen geleden', 'hace dos días'], ['werken → gewerkt', 'trabajar → trabajado'], ['maken → gemaakt', 'hacer → hecho'], ['koken → gekookt', 'cocinar → cocinado'],
      ['spelen → gespeeld', 'jugar → jugado'], ['wonen → gewoond', 'vivir → vivido'], ['bellen → gebeld', 'llamar → llamado'], ['schoonmaken → schoongemaakt', 'limpiar → limpiado'],
      ['fietsen → gefietst', 'andar en bici → andado en bici'], ['eten → gegeten', 'comer → comido'], ['drinken → gedronken', 'beber → bebido'], ['zien → gezien', 'ver → visto'],
      ['lezen → gelezen', 'leer → leído'], ['moe', 'cansado'], ['gezellig', 'agradable / ameno'], ['leuk', 'divertido / bonito'], ['Hoe was je weekend?', '¿Qué tal tu fin de semana?'],
      ['Het was leuk.', 'Estuvo divertido.'], ['uitslapen', 'dormir hasta tarde']
    ],
    grammar: [
      { t: 'El perfectum: hebben + participio', es: 'Het perfectum',
        html: `<p>Para hablar del pasado en una conversación se usa casi siempre el <b>perfectum</b>: <b>hebben</b> (conjugado) + <b>participio</b> al <b>final</b> de la frase.</p>
<p><i>Ik <b>heb</b> gisteren pizza <b>gegeten</b>.</i> (Ayer comí pizza.) Ojo: en español decimos «comí», pero en neerlandés se dice «he comido».</p>`,
        table: [['persona', 'hebben', 'ejemplo'], ['ik', 'heb', 'Ik heb gewerkt.'], ['jij / u / hij / zij', 'hebt / heeft', 'Zij heeft gekookt.'], ['wij / jullie / zij', 'hebben', 'Wij hebben gespeeld.']],
        sum: 'Ik heb gewerkt. Wij hebben gegeten.',
        ex: [['Ik heb vorig weekend veel gefietst.', 'El fin de semana pasado anduve mucho en bici.'], ['Heb je de film gezien?', '¿Viste la película?']] },
      { t: 'El participio regular: ge- … -t / -d', es: 'Voltooid deelwoord',
        html: `<p>Toma la raíz del verbo (werken → werk) y pon <b>ge-</b> delante. Al final va <b>-t</b> o <b>-d</b>.</p>
<p>Truco: <b>’t kofschip</b>. Si la raíz termina en una consonante de <b>t, k, f, s, ch, p</b> → <b>-t</b> (gewerk<b>t</b>, gefiets<b>t</b>). Si no → <b>-d</b> (gespeel<b>d</b>, gewoon<b>d</b>).</p>
<p>Verbos con <b>be-, ge-, ver-, her-, ont-</b> no llevan otro ge-: <i>betalen → betaald</i>, <i>vertellen → verteld</i>.</p>`,
        table: [['infinitivo', 'raíz', 'participio'], ['werken', 'werk', 'gewerkt'], ['koken', 'kook', 'gekookt'], ['spelen', 'speel', 'gespeeld'], ['bellen', 'bel', 'gebeld'], ['betalen', 'betaal', 'betaald']],
        ex: [['We hebben de hele dag gewerkt.', 'Trabajamos todo el día.'], ['Ik heb mijn moeder gebeld.', 'Llamé a mi mamá.']] },
      { t: 'Gisteren, vorige week, geleden', es: 'Tijd in het verleden',
        html: `<p><b>gisteren</b> = ayer · <b>vorige</b> week (de-woord) / <b>vorig</b> jaar, <b>vorig</b> weekend (het-woord) = pasado · <b>geleden</b> = hace, y va <b>después</b>: <i>drie dagen <b>geleden</b></i>.</p>
<p>Si la frase empieza con la palabra de tiempo, el verbo va en segundo lugar: <i>Gisteren <b>heb</b> ik gekookt.</i></p>`,
        table: [['neerlandés', 'español'], ['gisterochtend', 'ayer en la mañana'], ['gisteravond', 'anoche'], ['vorige maand', 'el mes pasado'], ['een week geleden', 'hace una semana']],
        ex: [['Twee jaar geleden heb ik in Panama gewoond.', 'Hace dos años viví en Panamá.'], ['Vorige week heb ik veel gelezen.', 'La semana pasada leí mucho.']] }
    ],
    dialogue: {
      t: 'Maandagochtend', place: 'Utrecht 🇳🇱',
      lines: [
        ['Sanne', 'Goedemorgen, Andrés! Hoe was je weekend?', '¡Buenos días, Andrés! ¿Qué tal tu fin de semana?'],
        ['Andrés', 'Heel leuk! Ik heb met vrienden gefietst naar het strand.', '¡Muy bueno! Fui en bici a la playa con unos amigos.'],
        ['Sanne', 'Gezellig! Wat hebben jullie daar gedaan?', '¡Qué bien! ¿Y qué hicieron allá?'],
        ['Andrés', 'We hebben gevoetbald en patat gegeten.', 'Jugamos fútbol y comimos papas fritas.'],
        ['Sanne', 'Lekker. Was het niet koud?', 'Rico. ¿No hacía frío?'],
        ['Andrés', 'Een beetje. En jij? Wat heb jij gedaan?', 'Un poco. ¿Y tú? ¿Qué hiciste?'],
        ['Sanne', 'Ik heb uitgeslapen en mijn huis schoongemaakt. En ik heb een serie gekeken.', 'Dormí hasta tarde y limpié mi casa. Y vi una serie.'],
        ['Andrés', 'Dat klinkt ook lekker rustig!', '¡Eso también suena muy tranquilo!']
      ],
      q: [
        { t: 'mc', q: 'Waar heeft Andrés naartoe gefietst?', o: ['Naar het strand', 'Naar zijn werk', 'Naar Amsterdam'] },
        { t: 'mc', q: 'Wat hebben ze gegeten?', o: ['Patat', 'Pizza', 'Soep'] },
        { t: 'mc', q: 'Wat heeft Sanne gedaan?', o: ['Ze heeft uitgeslapen en schoongemaakt', 'Ze heeft gefietst', 'Ze heeft gewerkt'] }
      ]
    },
    culture: { t: '«Gezellig»', html: `<p><b>Gezellig</b> es quizás la palabra más neerlandesa que existe. Significa agradable, acogedor, ameno… un buen rato con gente querida, con café y algo dulce.</p>
<p>☕ El lunes en el trabajo es normal preguntar <i>Hoe was je weekend?</i> y contestar: <i>Gezellig! Ik heb met vrienden gegeten.</i></p>` },
    ex: [
      { t: 'cloze', s: 'Ik ___ gisteren gewerkt.', a: ['heb'], o: ['heb', 'ben', 'hebt'], nl: 'Ayer trabajé.', tag: 'nl-perf' },
      { t: 'cloze', s: 'Wij ___ pizza gegeten.', a: ['hebben'], o: ['hebben', 'heeft', 'zijn'], nl: 'Comimos pizza.', tag: 'nl-perf' },
      { t: 'cloze', s: 'Zij heeft lekker ___. (koken)', a: ['gekookt'], o: ['gekookt', 'gekookd', 'kookt'], nl: 'Ella cocinó rico.', x: 'Koken → raíz kook, termina en k (’t kofschip) → -t.', tag: 'nl-ge' },
      { t: 'cloze', s: 'Ik heb met mijn broer ___. (spelen)', a: ['gespeeld'], o: ['gespeeld', 'gespeelt', 'speelde'], nl: 'Jugué con mi hermano.', tag: 'nl-ge' },
      { t: 'cloze', s: 'Ik heb mijn moeder ___. (bellen)', a: ['gebeld'], o: ['gebeld', 'gebelt', 'gebellen'], nl: 'Llamé a mi mamá.', tag: 'nl-ge' },
      { t: 'cloze', s: 'Drie dagen ___ heb ik een film gezien.', a: ['geleden'], o: ['geleden', 'vorige', 'gisteren'], nl: 'Hace tres días vi una película.', tag: 'nl-perf' },
      { t: 'cloze', s: '___ week heb ik veel gelezen.', a: ['Vorige'], o: ['Vorige', 'Vorig', 'Geleden'], nl: 'La semana pasada leí mucho.', x: 'Week es een de-woord → vorige.', tag: 'nl-perf' },
      { t: 'mc', q: '«Ayer comí pizza» es…', o: ['Ik heb gisteren pizza gegeten.', 'Ik heb gegeten gisteren pizza.', 'Ik at gisteren pizza gegeten.'], tag: 'nl-perf' },
      { t: 'mc', q: 'El participio de «betalen» es…', o: ['betaald', 'gebetaald', 'betaalt'], tag: 'nl-ge' },
      { t: 'mc', q: '«anoche» es…', o: ['gisteravond', 'vorige nacht', 'gisternacht'], tag: 'nl-perf' },
      { t: 'tr', nl: 'Ayer trabajé.', a: ['Ik heb gisteren gewerkt.', 'Gisteren heb ik gewerkt.'], tag: 'nl-perf' },
      { t: 'tr', nl: '¿Qué tal tu fin de semana?', a: ['Hoe was je weekend?', 'Hoe was jouw weekend?'], tag: 'nl-perf' },
      { t: 'tr', nl: 'Limpiamos la casa.', a: ['Wij hebben het huis schoongemaakt.', 'We hebben het huis schoongemaakt.'], tag: 'nl-ge' },
      { t: 'tr', nl: '¿Viste la película?', a: ['Heb je de film gezien?', 'Heb jij de film gezien?', 'Hebt u de film gezien?'], tag: 'nl-perf' },
      { t: 'order', s: 'Ik heb gisteren met vrienden gefietst.', nl: 'Ayer anduve en bici con amigos.', tag: 'nl-perf' },
      { t: 'match', p: [['werken', 'gewerkt'], ['spelen', 'gespeeld'], ['eten', 'gegeten'], ['zien', 'gezien'], ['bellen', 'gebeld']], tag: 'nl-ge' }
    ],
    reading: {
      t: 'Een regenachtige zaterdag', type: 'Un diario',
      p: [
        ['Vorige zaterdag wilde ik naar het strand, maar het heeft de hele dag geregend. Dus ben ik thuis gebleven.', 'El sábado pasado quería ir a la playa, pero llovió todo el día. Así que me quedé en casa.'],
        ['In de ochtend heb ik de keuken schoongemaakt en mijn moeder in Panama gebeld. We hebben een uur gepraat.', 'En la mañana limpié la cocina y llamé a mi mamá en Panamá. Hablamos una hora.'],
        ['In de middag heeft mijn buurvrouw aangebeld. Ze had koekjes gebakken en we hebben samen thee gedronken. Het was geen stranddag, maar wel heel gezellig.', 'En la tarde mi vecina tocó el timbre. Había horneado galletas y tomamos té juntas. No fue un día de playa, pero sí muy agradable.']
      ],
      gl: [['geregend', 'llovido'], ['de buurvrouw', 'la vecina'], ['aangebeld', 'tocó el timbre'], ['gebakken', 'horneado']],
      q: [
        { t: 'mc', q: 'Waarom is de schrijver niet naar het strand gegaan?', o: ['Omdat het regende', 'Omdat het strand dicht was', 'Omdat ze moest werken'] },
        { t: 'mc', q: 'Hoe lang heeft ze met haar moeder gepraat?', o: ['Een uur', 'Tien minuten', 'De hele dag'] },
        { t: 'mc', q: 'Wat had de buurvrouw gebakken?', o: ['Koekjes', 'Brood', 'Een taart'] }
      ]
    },
    say: [['Hoe was je weekend?', '¿Qué tal tu fin de semana?'], ['Ik heb uitgeslapen en een film gekeken.', 'Dormí hasta tarde y vi una película.'], ['Het was heel gezellig!', '¡Estuvo muy agradable!']],
    task: { nl: 'Cuenta en 5 frases qué hiciste el fin de semana pasado. Usa el perfectum con hebben.', model: 'Vorig weekend was leuk. Op zaterdag heb ik met Ana gekookt. We hebben ook een film gekeken. Op zondag heb ik gefietst. Daarna heb ik mijn moeder gebeld.' },
    scenario: { nl: 'Es lunes y una compañera de trabajo te pregunta por tu fin de semana.', role: 'Je bent Sanne, een vriendelijke collega op kantoor in Utrecht. Het is maandagochtend. Vraag naar het weekend van de leerling, reageer enthousiast en vertel wat jij hebt gedaan (uitgeslapen, serie gekeken). Spreek eenvoudig Nederlands (A2).', goal: 'Cuéntale qué hiciste el fin de semana y pregúntale por el suyo.' }
  });

  /* ───────────────────────── A2 · 2 ───────────────────────── */
  U({
    id: 'nl-a2-02', level: 'A2', icon: '✈️', title: 'Op reis', nl: 'De viaje',
    goals: ['Usar el perfectum con zijn (verbos de movimiento y cambio)', 'Aprender los participios irregulares más comunes', 'Contar un viaje'],
    vocab: [
      ['gaan → gegaan', 'ir → ido'], ['komen → gekomen', 'venir → venido'], ['blijven → gebleven', 'quedarse → quedado'], ['vliegen → gevlogen', 'volar → volado'],
      ['vertrekken → vertrokken', 'salir / partir → salido'], ['aankomen → aangekomen', 'llegar → llegado'], ['worden → geworden', 'volverse → vuelto'], ['zijn → geweest', 'ser / estar → sido / estado'],
      ['nemen → genomen', 'tomar → tomado'], ['kopen → gekocht', 'comprar → comprado'], ['doen → gedaan', 'hacer → hecho'], ['slapen → geslapen', 'dormir → dormido'],
      ['de reis', 'el viaje'], ['de vlucht', 'el vuelo'], ['het vliegveld', 'el aeropuerto'], ['het paspoort', 'el pasaporte'], ['de koffer', 'la maleta'], ['het hotel', 'el hotel'],
      ['vertraagd', 'retrasado'], ['kwijt', 'perdido'], ['het souvenir', 'el recuerdo'], ['geweldig', 'increíble / genial'], ['in het buitenland', 'en el extranjero'], ['de vakantie', 'las vacaciones']
    ],
    grammar: [
      { t: 'Perfectum con zijn', es: 'Perfectum met zijn',
        html: `<p>Algunos verbos usan <b>zijn</b> en lugar de hebben. Son sobre todo verbos de <b>movimiento hacia un lugar</b> o de <b>cambio</b>: gaan, komen, vertrekken, aankomen, vliegen (naar), worden, blijven.</p>
<p><i>Ik <b>ben</b> naar Amsterdam <b>gegaan</b>.</i> · <i>Zij <b>is</b> gisteren <b>aangekomen</b>.</i> · <i>Wij <b>zijn</b> thuis <b>gebleven</b>.</i></p>`,
        table: [['persona', 'zijn', 'ejemplo'], ['ik', 'ben', 'Ik ben gegaan.'], ['jij / hij / zij', 'bent / is', 'Hij is gekomen.'], ['wij / jullie / zij', 'zijn', 'Wij zijn gevlogen.']],
        sum: 'Ik ben naar Amsterdam gegaan. Wij zijn thuis gebleven.',
        ex: [['We zijn met de trein naar Brussel gegaan.', 'Fuimos en tren a Bruselas.'], ['Hoe laat ben je aangekomen?', '¿A qué hora llegaste?']] },
      { t: 'Participios irregulares', es: 'Sterke werkwoorden',
        html: `<p>Muchos verbos comunes son <b>irregulares</b>: el participio termina en <b>-en</b> y a veces cambia la vocal. Hay que aprenderlos de memoria.</p>
<p>Ojo con <b>zijn → geweest</b>: <i>Ik <b>ben</b> in Parijs <b>geweest</b>.</i> (He estado en París.)</p>`,
        table: [['infinitivo', 'participio', 'auxiliar'], ['eten', 'gegeten', 'hebben'], ['nemen', 'genomen', 'hebben'], ['kopen', 'gekocht', 'hebben'], ['gaan', 'gegaan', 'zijn'], ['blijven', 'gebleven', 'zijn'], ['zijn', 'geweest', 'zijn']],
        ex: [['Ik heb veel foto’s genomen.', 'Tomé muchas fotos.'], ['Ben je ooit in België geweest?', '¿Alguna vez has estado en Bélgica?']] },
      { t: 'Preguntas en el pasado', es: 'Vragen in het perfectum',
        html: `<p>La pregunta empieza con el auxiliar o con una palabra de pregunta, y el participio sigue al final: <i><b>Heb</b> je goed <b>geslapen</b>?</i> · <i>Waar <b>ben</b> je <b>geweest</b>?</i> · <i>Wat <b>heb</b> je <b>gedaan</b>?</i></p>`,
        table: [['pregunta', 'respuesta'], ['Waar ben je naartoe gegaan?', 'Ik ben naar Maastricht gegaan.'], ['Wat heb je gezien?', 'Ik heb een museum gezien.'], ['Hoe lang ben je gebleven?', 'Ik ben een week gebleven.']],
        ex: [['Waar hebben jullie geslapen? — In een klein hotel.', '¿Dónde durmieron? — En un hotel pequeño.'], ['Wat vond je het leukst?', '¿Qué fue lo que más te gustó?']] }
    ],
    dialogue: {
      t: 'Terug uit Parijs', place: 'Ámsterdam 🇳🇱',
      lines: [
        ['Mark', 'Welkom terug! Hoe was Parijs?', '¡Bienvenida! ¿Qué tal París?'],
        ['Rosa', 'Geweldig! Maar de trein was twee uur vertraagd.', '¡Increíble! Pero el tren se retrasó dos horas.'],
        ['Mark', 'Wat vervelend! Waar heb je geslapen?', '¡Qué fastidio! ¿Dónde dormiste?'],
        ['Rosa', 'In een klein hotel bij de Eiffeltoren. De kamer was heel klein, maar dat vond ik niet erg.', 'En un hotel pequeño cerca de la Torre Eiffel. El cuarto era chiquito, pero no me importó.'],
        ['Mark', 'Wat heb je allemaal gezien?', '¿Qué cosas viste?'],
        ['Rosa', 'Ik ben naar het Louvre gegaan en ik heb een boottocht gemaakt.', 'Fui al Louvre e hice un paseo en barco.'],
        ['Mark', 'Ben je ook naar Montmartre geweest?', '¿Fuiste también a Montmartre?'],
        ['Rosa', 'Nee, het heeft die dag geregend. Maar ik heb de lekkerste croissants van mijn leven gegeten!', 'No, ese día llovió. ¡Pero comí los croissants más ricos de mi vida!']
      ],
      q: [
        { t: 'mc', q: 'Wat was het probleem met de trein?', o: ['Hij was vertraagd', 'Hij was vol', 'Haar koffer was kwijt'] },
        { t: 'mc', q: 'Waar is Rosa naartoe gegaan?', o: ['Naar het Louvre', 'Naar Montmartre', 'Naar een voetbalwedstrijd'] },
        { t: 'mc', q: 'Waarom is ze niet naar Montmartre gegaan?', o: ['Het regende', 'Het was dicht', 'Ze was moe'] }
      ]
    },
    culture: { t: 'Viajar desde los Países Bajos', html: `<p>Los Países Bajos son pequeños y están en el centro de Europa: en tren llegas a Bruselas en menos de dos horas y a París en poco más de tres. Muchos neerlandeses viajan en verano con su caravana (<b>caravan</b>) a Francia.</p>
<p>🚆 Un tren retrasado se anuncia así: <i>«De trein naar Parijs heeft tien minuten vertraging.»</i></p>` },
    ex: [
      { t: 'cloze', s: 'Ik ___ naar Brussel gegaan.', a: ['ben'], o: ['ben', 'heb', 'is'], nl: 'Fui a Bruselas.', tag: 'nl-perfz' },
      { t: 'cloze', s: 'Zij ___ gisteren aangekomen.', a: ['is'], o: ['is', 'heeft', 'zijn'], nl: 'Ella llegó ayer.', tag: 'nl-perfz' },
      { t: 'cloze', s: 'Wij ___ veel foto’s genomen.', a: ['hebben'], o: ['hebben', 'zijn', 'heeft'], nl: 'Tomamos muchas fotos.', tag: 'nl-perfz' },
      { t: 'cloze', s: 'Ik ben een week in Parijs ___. (blijven)', a: ['gebleven'], o: ['gebleven', 'geblijfd', 'gebleefd'], nl: 'Me quedé una semana en París.', tag: 'nl-irr' },
      { t: 'cloze', s: 'Ik heb een souvenir ___. (kopen)', a: ['gekocht'], o: ['gekocht', 'gekoopt', 'gekopen'], nl: 'Compré un recuerdo.', tag: 'nl-irr' },
      { t: 'cloze', s: 'Ben je ooit in België ___? (zijn)', a: ['geweest'], o: ['geweest', 'gezijnd', 'gebent'], nl: '¿Alguna vez has estado en Bélgica?', tag: 'nl-irr' },
      { t: 'cloze', s: 'Wat heb je ___? (doen)', a: ['gedaan'], o: ['gedaan', 'gedoet', 'gedoen'], nl: '¿Qué hiciste?', tag: 'nl-irr' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Wij zijn naar Parijs gevlogen.', 'Wij hebben naar Parijs gevlogen.', 'Wij zijn gevlogen naar Parijs geweest.'], tag: 'nl-perfz' },
      { t: 'mc', q: 'El participio de «nemen» es…', o: ['genomen', 'geneemd', 'genamen'], tag: 'nl-irr' },
      { t: 'mc', q: '«Mi vuelo se retrasó» es…', o: ['Mijn vlucht was vertraagd.', 'Mijn vlucht was laat-gemaakt.', 'Mijn vlucht heeft geretardeerd.'], tag: 'nl-irr' },
      { t: 'tr', nl: 'Fui a Ámsterdam el verano pasado.', a: ['Ik ben vorige zomer naar Amsterdam gegaan.', 'Vorige zomer ben ik naar Amsterdam gegaan.'], tag: 'nl-perfz' },
      { t: 'tr', nl: '¿Qué comiste?', a: ['Wat heb je gegeten?', 'Wat heb jij gegeten?', 'Wat hebt u gegeten?'], tag: 'nl-irr' },
      { t: 'tr', nl: 'Nos quedamos en casa.', a: ['Wij zijn thuis gebleven.', 'We zijn thuis gebleven.', 'Wij zijn thuisgebleven.', 'We zijn thuisgebleven.'], tag: 'nl-perfz' },
      { t: 'tr', nl: '¿A qué hora llegaste?', a: ['Hoe laat ben je aangekomen?', 'Hoe laat ben jij aangekomen?', 'Hoe laat bent u aangekomen?'], tag: 'nl-perfz' },
      { t: 'order', s: 'Ik ben met de trein naar Parijs gegaan.', nl: 'Fui en tren a París.', tag: 'nl-perfz' },
      { t: 'match', p: [['gaan', 'gegaan'], ['zijn', 'geweest'], ['kopen', 'gekocht'], ['nemen', 'genomen'], ['blijven', 'gebleven']], tag: 'nl-irr' }
    ],
    reading: {
      t: 'Verdwaald in Brussel', type: 'Una historia de viaje',
      p: [
        ['Twee jaar geleden ben ik naar Brussel gegaan voor een congres. De eerste dag heb ik de metro genomen, maar ik ben bij de verkeerde halte uitgestapt.', 'Hace dos años fui a Bruselas para un congreso. El primer día tomé el metro, pero me bajé en la parada equivocada.'],
        ['Ik had geen internet op mijn telefoon. Daarom heb ik een vrouw de weg gevraagd. Ze kende het hotel niet, maar ze is met me naar een café met wifi gelopen.', 'No tenía internet en el celular. Por eso le pregunté el camino a una mujer. Ella no conocía el hotel, pero caminó conmigo hasta un café con wifi.'],
        ['We hebben koffie gedronken en een uur gepraat. Ik ben te laat op het congres aangekomen, maar ik heb een nieuwe vriendin gevonden. We mailen nog steeds!', 'Tomamos café y hablamos una hora. Llegué tarde al congreso, pero encontré una nueva amiga. ¡Todavía nos escribimos!']
      ],
      gl: [['verdwaald', 'perdido (sin saber el camino)'], ['de verkeerde halte', 'la parada equivocada'], ['uitgestapt', 'me bajé'], ['de weg gevraagd', 'pregunté el camino']],
      q: [
        { t: 'mc', q: 'Waarom is de schrijver naar Brussel gegaan?', o: ['Voor een congres', 'Voor vakantie', 'Voor familie'] },
        { t: 'mc', q: 'Wat was het probleem?', o: ['Ze is bij de verkeerde halte uitgestapt', 'De vlucht was vertraagd', 'Het hotel was dicht'] },
        { t: 'mc', q: 'Wat is er aan het eind gebeurd?', o: ['Ze heeft een nieuwe vriendin gevonden', 'Ze heeft haar vlucht gemist', 'Ze is haar telefoon kwijt'] }
      ]
    },
    say: [['Waar ben je op vakantie geweest?', '¿Dónde estuviste de vacaciones?'], ['Ik ben naar Spanje gevlogen.', 'Volé a España.'], ['We zijn een week gebleven.', 'Nos quedamos una semana.']],
    task: { nl: 'Cuenta un viaje en 5 o 6 frases: adónde fuiste, cómo, qué viste, qué comiste y algo que salió mal. Usa hebben y zijn.', model: 'Vorig jaar ben ik naar Costa Rica gegaan. Ik ben met de bus gereisd. Ik heb vulkanen gezien en veel fruit gegeten. Op een dag heeft het veel geregend. Toen zijn we in het hotel gebleven. Het was een geweldige reis.' },
    scenario: { nl: 'Un amigo neerlandés te pregunta por tus últimas vacaciones.', role: 'Je bent Mark, een nieuwsgierige vriend uit Amsterdam. Vraag de leerling naar de laatste reis: waar, wanneer, met wie, wat gezien en gegeten. Stel vervolgvragen in het perfectum. Spreek eenvoudig Nederlands (A2).', goal: 'Cuéntale tu viaje y contesta todas sus preguntas.' }
  });

  /* ───────────────────────── A2 · 3 ───────────────────────── */
  U({
    id: 'nl-a2-03', level: 'A2', icon: '🚆', title: 'Met de trein', nl: 'En tren y en transporte público',
    goals: ['Comprar un boleto y preguntar por el andén', 'Usar moeten y hoeven (niet)', 'Entender anuncios en la estación'],
    vocab: [
      ['de trein', 'el tren'], ['de bus', 'el bus'], ['de tram', 'el tranvía'], ['de metro', 'el metro'], ['het station', 'la estación'], ['het perron', 'el andén'], ['het spoor', 'la vía (andén)'],
      ['het kaartje', 'el boleto'], ['enkele reis', 'solo ida'], ['retour', 'ida y vuelta'], ['de OV-chipkaart', 'la tarjeta del transporte'], ['inchecken', 'marcar la entrada'], ['uitchecken', 'marcar la salida'],
      ['overstappen', 'hacer transbordo'], ['instappen', 'subir'], ['uitstappen', 'bajar'], ['de vertraging', 'el retraso'], ['vertrekken', 'salir'], ['aankomen', 'llegar'],
      ['de dienstregeling', 'el horario'], ['de halte', 'la parada'], ['rechtstreeks', 'directo'], ['Hoe laat gaat de trein?', '¿A qué hora sale el tren?'], ['Van welk spoor?', '¿De qué andén?']
    ],
    grammar: [
      { t: 'Moeten y hoeven', es: 'Moeten / niet hoeven',
        html: `<p><b>moeten</b> = tener que: <i>Je <b>moet</b> in Utrecht <b>overstappen</b>.</i> El infinitivo va al final.</p>
<p>Para decir «no hace falta» se usa <b>niet hoeven te</b> + infinitivo: <i>Je <b>hoeft niet</b> over <b>te</b> stappen.</i> Ojo: <i>je moet niet</i> significa «no debes» (prohibido).</p>`,
        table: [['persona', 'moeten', 'hoeven'], ['ik', 'moet', 'hoef'], ['jij / hij / zij', 'moet', 'hoeft'], ['wij / jullie / zij', 'moeten', 'hoeven']],
        sum: 'Je moet overstappen. Je hoeft niet over te stappen.',
        ex: [['Ik moet om acht uur op het werk zijn.', 'Tengo que estar en el trabajo a las ocho.'], ['Je hoeft geen kaartje te kopen.', 'No hace falta que compres boleto.']] },
      { t: 'Verbos separables en el transporte', es: 'Scheidbare werkwoorden',
        html: `<p>Muchos verbos del transporte son <b>separables</b>: <b>in</b>stappen, <b>uit</b>stappen, <b>over</b>stappen, <b>in</b>checken, <b>aan</b>komen. En presente la partícula va al final: <i>Ik stap in Utrecht <b>over</b>.</i></p>
<p>En el participio el ge- va en medio: <i>overgestapt</i>, <i>ingecheckt</i>, <i>aangekomen</i>. Con un modal se queda junto: <i>Je moet hier <b>uitstappen</b>.</i></p>`,
        table: [['infinitivo', 'presente', 'perfectum'], ['overstappen', 'ik stap over', 'ik ben overgestapt'], ['inchecken', 'ik check in', 'ik heb ingecheckt'], ['aankomen', 'de trein komt aan', 'de trein is aangekomen']],
        ex: [['De trein komt om 10.15 uur aan.', 'El tren llega a las 10:15.'], ['Vergeet niet uit te checken!', '¡No olvides marcar la salida!']] },
      { t: 'Preguntar en la estación', es: 'Vragen op het station',
        html: `<p>Frases útiles: <b>Hoe laat</b> gaat de trein naar…? · <b>Van welk spoor</b> vertrekt hij? · <b>Moet ik</b> overstappen? · <b>Een enkele reis</b> / <b>een retour</b> naar Den Haag, graag.</p>
<p>Las horas en los horarios van con punto y 24 horas: <i>14.32 uur</i> = las dos y treinta y dos de la tarde.</p>`,
        table: [['pregunta', 'respuesta'], ['Hoe laat gaat de trein naar Leiden?', 'Om 9.12 uur.'], ['Van welk spoor?', 'Van spoor 5b.'], ['Moet ik overstappen?', 'Nee, hij gaat rechtstreeks.']],
        ex: [['Een retour naar Rotterdam, alstublieft.', 'Un boleto de ida y vuelta a Róterdam, por favor.'], ['Hoe lang duurt de reis?', '¿Cuánto dura el viaje?']] }
    ],
    dialogue: {
      t: 'Aan het loket', place: 'Ámsterdam Centraal 🇳🇱',
      lines: [
        ['Lucía', 'Goedemorgen. Een retour naar Maastricht, alstublieft.', 'Buenos días. Un boleto de ida y vuelta a Maastricht, por favor.'],
        ['Medewerker', 'Dat is 54 euro. Wilt u pinnen?', 'Son 54 euros. ¿Quiere pagar con tarjeta?'],
        ['Lucía', 'Ja. Hoe laat gaat de volgende trein?', 'Sí. ¿A qué hora sale el próximo tren?'],
        ['Medewerker', 'Om 10.24 uur, van spoor 7a.', 'A las 10:24, del andén 7a.'],
        ['Lucía', 'Moet ik overstappen?', '¿Tengo que hacer transbordo?'],
        ['Medewerker', 'Ja, in Utrecht. Daar moet u de trein naar Maastricht nemen.', 'Sí, en Utrecht. Allí tiene que tomar el tren a Maastricht.'],
        ['Lucía', 'Hoe lang duurt de reis?', '¿Cuánto dura el viaje?'],
        ['Medewerker', 'Ongeveer tweeënhalf uur. U hoeft niet te reserveren.', 'Unas dos horas y media. No hace falta reservar.'],
        ['Lucía', 'Dank u wel!', '¡Muchas gracias!']
      ],
      q: [
        { t: 'mc', q: 'Waar wil Lucía naartoe?', o: ['Naar Maastricht', 'Naar Utrecht', 'Naar Den Haag'] },
        { t: 'mc', q: 'Waar moet ze overstappen?', o: ['In Utrecht', 'In Amsterdam', 'Ze hoeft niet over te stappen'] },
        { t: 'mc', q: 'Moet ze reserveren?', o: ['Nee, dat hoeft niet', 'Ja, online', 'Ja, aan het loket'] }
      ]
    },
    culture: { t: 'In- en uitchecken', html: `<p>En el transporte público neerlandés hay que <b>inchecken</b> (pasar la tarjeta al entrar) y <b>uitchecken</b> (al salir). Si olvidas uitchecken, ¡te cobran una tarifa alta!</p>
<p>💳 Hoy también puedes pasar directamente tu tarjeta bancaria o el celular. Y en los trenes hay vagones de silencio: <b>stiltecoupé</b>. Ahí no se habla por teléfono.</p>` },
    ex: [
      { t: 'cloze', s: 'Je ___ in Utrecht overstappen.', a: ['moet'], o: ['moet', 'moeten', 'hoeft'], nl: 'Tienes que hacer transbordo en Utrecht.', tag: 'nl-moet' },
      { t: 'cloze', s: 'U hoeft niet ___ reserveren.', a: ['te'], o: ['te', 'om', 'zu'], nl: 'No hace falta reservar.', tag: 'nl-moet' },
      { t: 'cloze', s: 'Ik stap in Leiden ___.', a: ['over'], o: ['over', 'in', 'aan'], nl: 'Hago transbordo en Leiden.', tag: 'nl-ov' },
      { t: 'cloze', s: 'De trein komt om tien uur ___.', a: ['aan'], o: ['aan', 'uit', 'op'], nl: 'El tren llega a las diez.', tag: 'nl-ov' },
      { t: 'cloze', s: 'Van welk ___ vertrekt de trein?', a: ['spoor'], o: ['spoor', 'station', 'kaartje'], nl: '¿De qué andén sale el tren?', tag: 'nl-ov' },
      { t: 'cloze', s: 'Een ___ naar Den Haag, graag. (ida y vuelta)', a: ['retour'], o: ['retour', 'enkele reis', 'kaart'], nl: 'Un boleto de ida y vuelta a La Haya, por favor.', tag: 'nl-ov' },
      { t: 'mc', q: '«No hace falta hacer transbordo» es…', o: ['Je hoeft niet over te stappen.', 'Je moet niet overstappen.', 'Je hoeft niet overstappen te.'], tag: 'nl-moet' },
      { t: 'mc', q: '«uitchecken» significa…', o: ['marcar la salida con la tarjeta', 'comprar un boleto', 'subir al tren'], tag: 'nl-ov' },
      { t: 'mc', q: 'La trein vertrekt «om 14.32 uur». ¿A qué hora sale?', o: ['A las 2:32 de la tarde', 'A las 4:32 de la tarde', 'A las 2:23 de la tarde'], tag: 'nl-ov' },
      { t: 'tr', nl: '¿A qué hora sale el tren a Utrecht?', a: ['Hoe laat gaat de trein naar Utrecht?', 'Hoe laat vertrekt de trein naar Utrecht?'], tag: 'nl-ov' },
      { t: 'tr', nl: 'Tengo que hacer transbordo.', a: ['Ik moet overstappen.'], tag: 'nl-moet' },
      { t: 'tr', nl: '¿Cuánto dura el viaje?', a: ['Hoe lang duurt de reis?'], tag: 'nl-ov' },
      { t: 'tr', nl: 'No hace falta que pagues.', a: ['Je hoeft niet te betalen.', 'Jij hoeft niet te betalen.', 'U hoeft niet te betalen.'], tag: 'nl-moet' },
      { t: 'order', s: 'Je moet in Utrecht overstappen.', nl: 'Tienes que hacer transbordo en Utrecht.', tag: 'nl-moet' },
      { t: 'match', p: [['het perron', 'el andén'], ['het kaartje', 'el boleto'], ['de halte', 'la parada'], ['de vertraging', 'el retraso'], ['overstappen', 'hacer transbordo']], tag: 'nl-ov' }
    ],
    reading: {
      t: 'Omroepberichten', type: 'Anuncios en la estación',
      p: [
        ['Dames en heren, de intercity naar Eindhoven van 11.05 uur vertrekt vandaag van spoor 8 in plaats van spoor 5.', 'Señoras y señores, el intercity a Eindhoven de las 11:05 sale hoy del andén 8 en lugar del andén 5.'],
        ['De sprinter naar Gouda heeft ongeveer vijftien minuten vertraging door een defecte trein. Reizigers naar Gouda kunnen ook de bus nemen.', 'El sprinter a Gouda tiene unos quince minutos de retraso por un tren averiado. Los viajeros a Gouda también pueden tomar el bus.'],
        ['Let op: vandaag rijden er geen treinen tussen Leiden en Den Haag. Er rijden bussen. Reizigers moeten in Leiden overstappen op de bus.', 'Atención: hoy no hay trenes entre Leiden y La Haya. Hay buses. Los viajeros tienen que pasarse al bus en Leiden.']
      ],
      gl: [['in plaats van', 'en lugar de'], ['defect', 'averiado'], ['reizigers', 'viajeros'], ['let op', 'atención']],
      q: [
        { t: 'mc', q: 'Van welk spoor vertrekt de trein naar Eindhoven vandaag?', o: ['Spoor 8', 'Spoor 5', 'Spoor 11'] },
        { t: 'mc', q: 'Hoeveel vertraging heeft de trein naar Gouda?', o: ['Ongeveer vijftien minuten', 'Een uur', 'Vijf minuten'] },
        { t: 'mc', q: 'Wat moeten reizigers naar Den Haag doen?', o: ['In Leiden overstappen op de bus', 'Thuisblijven', 'Een taxi nemen'] }
      ]
    },
    say: [['Een enkele reis naar Utrecht, alstublieft.', 'Un boleto de solo ida a Utrecht, por favor.'], ['Moet ik overstappen?', '¿Tengo que hacer transbordo?'], ['Van welk spoor vertrekt de trein?', '¿De qué andén sale el tren?']],
    task: { nl: 'Escribe a un amigo cómo llegar de Ámsterdam a tu casa en transporte público: qué tren o bus, dónde hace transbordo y dónde se baja.', model: 'Je neemt de trein van Amsterdam Centraal naar Utrecht. Daar moet je overstappen op bus 12. Je stapt uit bij de halte Kerkplein. Je hoeft geen kaartje te kopen: je kunt inchecken met je bankpas.' },
    scenario: { nl: 'Estás en la ventanilla de la estación de Ámsterdam y quieres ir a Maastricht.', role: 'Je bent een medewerker aan het loket op Amsterdam Centraal. Help de reiziger met een kaartje, de vertrektijd, het spoor en het overstappen. Spreek eenvoudig, beleefd Nederlands (A2) en gebruik "u".', goal: 'Compra un boleto y pregunta la hora, el andén y si tienes que hacer transbordo.' }
  });

  /* ───────────────────────── A2 · 4 ───────────────────────── */
  U({
    id: 'nl-a2-04', level: 'A2', icon: '🩺', title: 'Bij de huisarts', nl: 'En el médico',
    goals: ['Decir qué te duele', 'Pedir una cita por teléfono', 'Entender los consejos del médico'],
    vocab: [
      ['het hoofd', 'la cabeza'], ['de buik', 'la barriga / el estómago'], ['de rug', 'la espalda'], ['de keel', 'la garganta'], ['de tand / tanden', 'el diente / los dientes'],
      ['de arm', 'el brazo'], ['het been', 'la pierna'], ['de voet', 'el pie'], ['hoofdpijn', 'dolor de cabeza'], ['buikpijn', 'dolor de barriga'], ['keelpijn', 'dolor de garganta'],
      ['koorts', 'fiebre'], ['hoesten', 'toser'], ['verkouden', 'resfriado'], ['de griep', 'la gripe'], ['ziek', 'enfermo'], ['pijn doen', 'doler'], ['het medicijn', 'la medicina'],
      ['de pil', 'la pastilla'], ['het recept', 'la receta'], ['de afspraak', 'la cita'], ['de huisarts', 'el médico de cabecera'], ['de apotheek', 'la farmacia'], ['Beterschap!', '¡Que te mejores!']
    ],
    grammar: [
      { t: 'Decir qué te duele', es: 'Pijn hebben',
        html: `<p>Dos formas: <b>Ik heb</b> + hoofdpijn / buikpijn / keelpijn / koorts. O: <b>Mijn</b> + parte del cuerpo + <b>doet pijn</b>.</p>
<p><i>Ik heb hoofdpijn.</i> · <i>Mijn rug doet pijn.</i> · Plural: <i>Mijn voeten <b>doen</b> pijn.</i> Ojo: en neerlandés se usa <b>mijn</b>, no el artículo.</p>`,
        table: [['español', 'neerlandés'], ['Me duele la cabeza.', 'Ik heb hoofdpijn.'], ['Tengo fiebre.', 'Ik heb koorts.'], ['Me duele la espalda.', 'Mijn rug doet pijn.'], ['Estoy resfriado.', 'Ik ben verkouden.']],
        sum: 'Ik heb hoofdpijn. Mijn rug doet pijn.',
        ex: [['Ik heb keelpijn en ik moet veel hoesten.', 'Me duele la garganta y toso mucho.'], ['Mijn been doet pijn als ik loop.', 'Me duele la pierna cuando camino.']] },
      { t: 'Consejos: je moet, je mag niet, je kunt beter', es: 'Advies geven',
        html: `<p>El médico da consejos con modales: <b>Je moet</b> rusten (tienes que). <b>Je mag niet</b> sporten (no puedes / está prohibido). <b>Je kunt beter</b> thuisblijven (mejor quédate).</p>
<p>También con <b>zou … moeten</b> (deberías): <i>Je <b>zou</b> meer water <b>moeten</b> drinken.</i></p>`,
        table: [['consejo', 'español'], ['U moet veel drinken.', 'Tiene que tomar mucho líquido.'], ['U mag geen alcohol drinken.', 'No puede tomar alcohol.'], ['Je kunt beter in bed blijven.', 'Mejor quédate en cama.'], ['Je zou moeten rusten.', 'Deberías descansar.']],
        ex: [['U moet drie keer per dag een pil nemen.', 'Tiene que tomar una pastilla tres veces al día.'], ['Je kunt beter niet naar je werk gaan.', 'Mejor no vayas al trabajo.']] },
      { t: 'Llamar para una cita', es: 'Een afspraak maken',
        html: `<p>En los Países Bajos primero se llama a la <b>huisarts</b>. La asistente (<b>doktersassistente</b>) pregunta qué te pasa.</p>
<p>Frases útiles: <i>Ik wil graag een <b>afspraak</b> maken.</i> · <i>Kan ik <b>vandaag</b> nog komen?</i> · <i>Sinds wanneer heeft u klachten?</i> (¿Desde cuándo tiene molestias?) — <i><b>Sinds</b> twee dagen.</i></p>`,
        table: [['frecuencia', 'español'], ['één keer per dag', 'una vez al día'], ['twee keer per dag', 'dos veces al día'], ['om de acht uur', 'cada ocho horas'], ['na het eten', 'después de comer']],
        ex: [['Ik wil graag een afspraak maken met de huisarts.', 'Quisiera hacer una cita con el médico.'], ['Ik heb al drie dagen koorts.', 'Tengo fiebre desde hace tres días.']] }
    ],
    dialogue: {
      t: 'In de spreekkamer', place: 'Leiden 🇳🇱',
      lines: [
        ['Huisarts', 'Goedemorgen. Wat kan ik voor u doen?', 'Buenos días. ¿En qué le puedo ayudar?'],
        ['Pedro', 'Ik voel me niet goed. Ik heb keelpijn en koorts.', 'No me siento bien. Me duele la garganta y tengo fiebre.'],
        ['Huisarts', 'Sinds wanneer heeft u dat?', '¿Desde cuándo tiene eso?'],
        ['Pedro', 'Sinds twee dagen. En gisteravond had ik ook erge hoofdpijn.', 'Desde hace dos días. Y anoche también tuve un dolor de cabeza fuerte.'],
        ['Huisarts', 'Even kijken… U heeft griep. U moet thuisblijven en veel rusten.', 'A ver… Tiene gripe. Tiene que quedarse en casa y descansar mucho.'],
        ['Pedro', 'Moet ik medicijnen nemen?', '¿Tengo que tomar medicinas?'],
        ['Huisarts', 'U kunt paracetamol nemen, om de zes uur. En drink veel water.', 'Puede tomar paracetamol, cada seis horas. Y tome mucha agua.'],
        ['Pedro', 'Mag ik morgen werken?', '¿Puedo trabajar mañana?'],
        ['Huisarts', 'Nee, dat kunt u beter niet doen. Bel me vrijdag als het niet beter gaat.', 'No, mejor no. Llámeme el viernes si no mejora.']
      ],
      q: [
        { t: 'mc', q: 'Wat heeft Pedro?', o: ['Griep', 'Een gebroken been', 'Buikpijn'] },
        { t: 'mc', q: 'Hoe vaak mag hij paracetamol nemen?', o: ['Om de zes uur', 'Eén keer per dag', 'Twee keer per week'] },
        { t: 'mc', q: 'Mag hij morgen werken?', o: ['Nee, dat kan hij beter niet doen', 'Ja, ’s middags', 'Ja, als hij een pil neemt'] }
      ]
    },
    culture: { t: 'La huisarts y el paracetamol', html: `<p>En los Países Bajos no vas directo al especialista: primero siempre a la <b>huisarts</b> (médico de cabecera). Él decide si necesitas ir al hospital.</p>
<p>💊 Muchos latinos se sorprenden: para muchas cosas el médico solo receta <b>paracetamol</b> y descanso. Las medicinas con receta se compran en la <b>apotheek</b>; las simples, en una droguería como el <i>Kruidvat</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Ik ___ hoofdpijn.', a: ['heb'], o: ['heb', 'ben', 'doe'], nl: 'Me duele la cabeza.', tag: 'nl-dokter' },
      { t: 'cloze', s: 'Mijn rug ___ pijn.', a: ['doet'], o: ['doet', 'heeft', 'is'], nl: 'Me duele la espalda.', tag: 'nl-dokter' },
      { t: 'cloze', s: 'Mijn voeten ___ pijn.', a: ['doen'], o: ['doen', 'doet', 'hebben'], nl: 'Me duelen los pies.', tag: 'nl-dokter' },
      { t: 'cloze', s: 'Ik ben ___. (resfriado)', a: ['verkouden'], o: ['verkouden', 'koorts', 'griep'], nl: 'Estoy resfriado.', tag: 'nl-dokter' },
      { t: 'cloze', s: 'U ___ geen alcohol drinken.', a: ['mag'], o: ['mag', 'hoeft', 'wil'], nl: 'No puede tomar alcohol.', tag: 'nl-dokter' },
      { t: 'cloze', s: 'Je kunt ___ thuisblijven.', a: ['beter'], o: ['beter', 'goed', 'meer'], nl: 'Mejor quédate en casa.', tag: 'nl-dokter' },
      { t: 'cloze', s: 'Ik heb ___ twee dagen koorts.', a: ['al'], o: ['al', 'sinds', 'geleden'], nl: 'Tengo fiebre desde hace dos días.', tag: 'nl-dokter' },
      { t: 'mc', q: 'A alguien enfermo le dices…', o: ['Beterschap!', 'Gefeliciteerd!', 'Eet smakelijk!'], tag: 'nl-dokter' },
      { t: 'mc', q: '«Me duele la garganta» es…', o: ['Ik heb keelpijn.', 'Mijn keel heeft pijn.', 'De keel doet mij pijn.'], tag: 'nl-dokter' },
      { t: 'mc', q: '¿Dónde compras medicinas con receta?', o: ['In de apotheek', 'In de bakkerij', 'Op het station'], tag: 'nl-dokter' },
      { t: 'tr', nl: 'Tengo fiebre.', a: ['Ik heb koorts.'], tag: 'nl-dokter' },
      { t: 'tr', nl: 'Quisiera hacer una cita.', a: ['Ik wil graag een afspraak maken.', 'Ik wil een afspraak maken.', 'Ik zou graag een afspraak willen maken.'], tag: 'nl-dokter' },
      { t: 'tr', nl: 'No me siento bien.', a: ['Ik voel me niet goed.', 'Ik voel me niet lekker.', 'Ik voel mij niet goed.'], tag: 'nl-dokter' },
      { t: 'order', s: 'U moet drie keer per dag een pil nemen.', nl: 'Tiene que tomar una pastilla tres veces al día.', tag: 'nl-dokter' },
      { t: 'match', p: [['het hoofd', 'la cabeza'], ['de buik', 'la barriga'], ['de keel', 'la garganta'], ['koorts', 'fiebre'], ['de apotheek', 'la farmacia']], tag: 'nl-dokter' }
    ],
    reading: {
      t: 'Vijf tips bij verkoudheid', type: 'Un artículo de salud',
      p: [
        ['Ben je verkouden? Geen zorgen. De meeste verkoudheden zijn binnen een week over. Maar je kunt wel een paar dingen doen.', '¿Estás resfriado? No te preocupes. La mayoría de los resfriados se quitan en una semana. Pero sí puedes hacer algunas cosas.'],
        ['Ten eerste moet je goed slapen en rusten. Ten tweede moet je veel drinken: water, thee of soep. Warme kippensoep is goed voor je keel.', 'Primero, tienes que dormir bien y descansar. Segundo, tienes que tomar mucho líquido: agua, té o sopa. La sopa de pollo caliente es buena para la garganta.'],
        ['Was vaak je handen, zodat anderen niet ziek worden. Je hoeft niet meteen naar de huisarts. Maar heb je meer dan drie dagen hoge koorts? Bel dan wel de huisarts.', 'Lávate las manos seguido, para que los demás no se enfermen. No hace falta ir de inmediato al médico. Pero ¿tienes fiebre alta por más de tres días? Entonces sí llama al médico.']
      ],
      gl: [['over zijn', 'haberse quitado'], ['ten eerste', 'primero'], ['zodat', 'para que'], ['meteen', 'de inmediato']],
      q: [
        { t: 'mc', q: 'Hoe lang duurt een verkoudheid meestal?', o: ['Ongeveer een week', 'Eén dag', 'Een maand'] },
        { t: 'mc', q: 'Wat is goed voor je keel?', o: ['Warme kippensoep', 'Koude cola', 'Koffie'] },
        { t: 'mc', q: 'Wanneer moet je de huisarts bellen?', o: ['Als je meer dan drie dagen hoge koorts hebt', 'Meteen de eerste dag', 'Nooit'] }
      ]
    },
    say: [['Ik heb hoofdpijn en koorts.', 'Me duele la cabeza y tengo fiebre.'], ['Ik wil graag een afspraak maken.', 'Quisiera hacer una cita.'], ['Beterschap!', '¡Que te mejores!']],
    task: { nl: 'Escribe un mensaje a tu jefe: explica que estás enfermo, qué te duele y qué te dijo el médico.', model: 'Beste Jan, het spijt me, maar ik kan vandaag niet werken. Ik heb griep. Ik heb koorts en keelpijn. De huisarts zegt dat ik twee dagen thuis moet blijven. Groetjes, Pedro' },
    scenario: { nl: 'Te sientes mal y vas a la huisarts en Leiden.', role: 'Je bent dokter De Vries, een vriendelijke huisarts in Leiden. Vraag wat er aan de hand is, sinds wanneer, en geef advies met moeten, mogen en "u kunt beter". Spreek eenvoudig Nederlands (A2) en gebruik "u".', goal: 'Explica tus síntomas y pregunta qué debes hacer.' }
  });

  /* ───────────────────────── A2 · 5 ───────────────────────── */
  U({
    id: 'nl-a2-05', level: 'A2', icon: '🏙️', title: 'Groter en mooier', nl: 'Comparar ciudades y lugares',
    goals: ['Comparar con -er dan y meer', 'Usar superlativos (het grootst, de mooiste…)', 'Hablar de experiencias con ooit y nooit'],
    vocab: [
      ['groot', 'grande'], ['klein', 'pequeño'], ['oud', 'viejo / antiguo'], ['nieuw', 'nuevo'], ['goedkoop', 'barato'], ['duur', 'caro'], ['veilig', 'seguro'], ['gevaarlijk', 'peligroso'],
      ['druk', 'concurrido / ajetreado'], ['rustig', 'tranquilo'], ['schoon', 'limpio'], ['vies', 'sucio'], ['mooi', 'bonito'], ['interessant', 'interesante'], ['modern', 'moderno'],
      ['goed → beter → best', 'bueno → mejor → el mejor'], ['veel → meer → meest', 'mucho → más → lo más'], ['graag → liever → liefst', 'con gusto → preferir → lo que más'],
      ['dan', 'que (al comparar)'], ['net zo … als', 'tan … como'], ['ooit', 'alguna vez'], ['nooit', 'nunca'], ['het platteland', 'el campo'], ['de inwoners', 'los habitantes']
    ],
    grammar: [
      { t: 'Comparativo: -er dan', es: 'Vergrotende trap',
        html: `<p>En neerlandés casi todos los adjetivos forman el comparativo con <b>-er</b>, también los largos: <i>groot → groter</i>, <i>interessant → interessanter</i>. Después va <b>dan</b>: <i>Rotterdam is moderner <b>dan</b> Utrecht.</i></p>
<p>Si el adjetivo termina en <b>-r</b>, se añade <b>-der</b>: <i>duur → duur<b>der</b></i>, <i>lekker → lekker<b>der</b></i>. Irregulares: goed → <b>beter</b>, veel → <b>meer</b>, graag → <b>liever</b>.</p>`,
        table: [['adjetivo', 'comparativo'], ['klein', 'kleiner dan'], ['groot', 'groter dan'], ['mooi', 'mooier dan'], ['duur', 'duurder dan'], ['goed', 'beter dan']],
        sum: 'Groter dan, mooier dan, duurder dan, beter dan.',
        ex: [['Amsterdam is drukker dan Leiden.', 'Ámsterdam es más ajetreada que Leiden.'], ['Ik fiets liever dan dat ik de bus neem.', 'Prefiero ir en bici que tomar el bus.']] },
      { t: 'Superlativo: -st', es: 'Overtreffende trap',
        html: `<p>Superlativo = <b>-st</b>. Antes de un sustantivo lleva <b>-e</b> y artículo: <i>de mooi<b>ste</b> stad</i>, <i>het grootst<b>e</b> museum</i>.</p>
<p>Después del verbo se usa <b>het</b> + -st: <i>Deze stad is <b>het mooist</b>.</i> Irregulares: <b>best</b>, <b>meest</b>, <b>liefst</b>.</p>`,
        table: [['adjetivo', 'superlativo'], ['groot', 'de / het grootste'], ['mooi', 'de / het mooiste'], ['goed', 'de / het beste'], ['veel', 'de / het meeste']],
        ex: [['Amsterdam is de grootste stad van Nederland.', 'Ámsterdam es la ciudad más grande de los Países Bajos.'], ['Welk seizoen vind jij het mooist?', '¿Qué estación te parece la más bonita?']] },
      { t: 'Net zo … als, ooit y nooit', es: 'Net zo ... als / ooit / nooit',
        html: `<p>Para decir que dos cosas son iguales: <b>net zo</b> + adjetivo + <b>als</b>: <i>Den Haag is <b>net zo</b> mooi <b>als</b> Utrecht.</i> Menos: <b>niet zo … als</b>.</p>
<p>Experiencias: <i>Ben je <b>ooit</b> in Maastricht geweest?</i> (¿alguna vez?) — <i>Nee, <b>nooit</b>.</i> · <i>Ik heb <b>nog nooit</b> sneeuw gezien.</i> (nunca todavía)</p>`,
        table: [['neerlandés', 'español'], ['net zo groot als', 'tan grande como'], ['niet zo duur als', 'no tan caro como'], ['Ben je ooit…?', '¿Alguna vez has…?'], ['Ik heb nog nooit…', 'Nunca he…']],
        ex: [['Mijn huis is niet zo groot als jouw huis.', 'Mi casa no es tan grande como la tuya.'], ['Heb je ooit stamppot gegeten?', '¿Alguna vez has comido stamppot?']] }
    ],
    dialogue: {
      t: 'Waar ga je wonen?', place: 'Róterdam 🇳🇱',
      lines: [
        ['Emma', 'Ik ga in september in Nederland studeren. Is Amsterdam leuker dan Rotterdam?', 'En septiembre voy a estudiar en los Países Bajos. ¿Es más bonita Ámsterdam que Róterdam?'],
        ['Luis', 'Dat hangt ervan af. Amsterdam is ouder en mooier, maar ook drukker.', 'Depende. Ámsterdam es más antigua y más bonita, pero también más ajetreada.'],
        ['Emma', 'En Rotterdam?', '¿Y Róterdam?'],
        ['Luis', 'Rotterdam is moderner. Het heeft de mooiste gebouwen van Nederland, vind ik.', 'Róterdam es más moderna. Tiene los edificios más bonitos de los Países Bajos, en mi opinión.'],
        ['Emma', 'Is het ook goedkoper?', '¿Es también más barata?'],
        ['Luis', 'Ja, de huur is lager. Amsterdam is het duurst.', 'Sí, el alquiler es más bajo. Ámsterdam es la más cara.'],
        ['Emma', 'Ben je ooit in Groningen geweest?', '¿Alguna vez has estado en Groninga?'],
        ['Luis', 'Nee, nog nooit. Maar het is een echte studentenstad en het is rustiger dan Amsterdam.', 'No, nunca. Pero es una verdadera ciudad de estudiantes y es más tranquila que Ámsterdam.']
      ],
      q: [
        { t: 'mc', q: 'Welke stad is moderner?', o: ['Rotterdam', 'Amsterdam', 'Groningen'] },
        { t: 'mc', q: 'Welke stad is het duurst?', o: ['Amsterdam', 'Rotterdam', 'Groningen'] },
        { t: 'mc', q: 'Is Luis ooit in Groningen geweest?', o: ['Nee, nog nooit', 'Ja, vorig jaar', 'Ja, twee keer'] }
      ]
    },
    culture: { t: 'Róterdam, la ciudad moderna', html: `<p>Róterdam fue bombardeada en 1940 y casi todo el centro tuvo que reconstruirse. Por eso hoy es la ciudad más moderna del país, con arquitectura única como las <b>kubuswoningen</b> (casas cubo) y el <b>Markthal</b>.</p>
<p>🚢 Además tiene el puerto más grande de Europa. Ámsterdam, en cambio, conserva sus canales del siglo XVII.</p>` },
    ex: [
      { t: 'cloze', s: 'Amsterdam is ___ dan Leiden. (druk)', a: ['drukker'], o: ['drukker', 'meer druk', 'drukste'], nl: 'Ámsterdam es más ajetreada que Leiden.', tag: 'nl-comp' },
      { t: 'cloze', s: 'Deze jas is ___ dan die jas. (duur)', a: ['duurder'], o: ['duurder', 'duurer', 'meer duur'], nl: 'Esta chaqueta es más cara que esa.', x: 'Termina en -r → -der.', tag: 'nl-comp' },
      { t: 'cloze', s: 'Rotterdam is moderner ___ Utrecht.', a: ['dan'], o: ['dan', 'als', 'van'], nl: 'Róterdam es más moderna que Utrecht.', tag: 'nl-comp' },
      { t: 'cloze', s: 'Deze pizza is ___ dan de andere. (goed)', a: ['beter'], o: ['beter', 'goeder', 'meer goed'], nl: 'Esta pizza es mejor que la otra.', tag: 'nl-comp' },
      { t: 'cloze', s: 'Amsterdam is de ___ stad van Nederland. (groot)', a: ['grootste'], o: ['grootste', 'grootst', 'groter'], nl: 'Ámsterdam es la ciudad más grande de los Países Bajos.', tag: 'nl-sup' },
      { t: 'cloze', s: 'Mijn huis is net zo groot ___ jouw huis.', a: ['als'], o: ['als', 'dan', 'zo'], nl: 'Mi casa es tan grande como la tuya.', tag: 'nl-comp' },
      { t: 'cloze', s: 'Heb je ___ stamppot gegeten?', a: ['ooit'], o: ['ooit', 'nooit', 'al'], nl: '¿Alguna vez has comido stamppot?', tag: 'nl-ooit' },
      { t: 'mc', q: '«Nunca he visto la nieve» es…', o: ['Ik heb nog nooit sneeuw gezien.', 'Ik heb niet nooit sneeuw gezien.', 'Ik heb ooit niet sneeuw gezien.'], tag: 'nl-ooit' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Zij is groter dan ik.', 'Zij is meer groot dan ik.', 'Zij is groter als ik.'], tag: 'nl-comp' },
      { t: 'mc', q: '«prefiero el té» es…', o: ['Ik drink liever thee.', 'Ik drink beter thee.', 'Ik drink meer graag thee.'], tag: 'nl-comp' },
      { t: 'tr', nl: 'El tren es más rápido que el bus.', a: ['De trein is sneller dan de bus.'], tag: 'nl-comp' },
      { t: 'tr', nl: 'Es el mejor restaurante de la ciudad.', a: ['Het is het beste restaurant van de stad.', 'Dit is het beste restaurant van de stad.'], tag: 'nl-sup' },
      { t: 'tr', nl: '¿Alguna vez has estado en Ámsterdam?', a: ['Ben je ooit in Amsterdam geweest?', 'Ben jij ooit in Amsterdam geweest?', 'Bent u ooit in Amsterdam geweest?'], tag: 'nl-ooit' },
      { t: 'order', s: 'Rotterdam heeft de mooiste gebouwen van Nederland.', nl: 'Róterdam tiene los edificios más bonitos de los Países Bajos.', tag: 'nl-sup' },
      { t: 'match', p: [['rustig', 'tranquilo'], ['vies', 'sucio'], ['veilig', 'seguro'], ['duur', 'caro'], ['het platteland', 'el campo']], tag: 'nl-comp' }
    ],
    reading: {
      t: 'Nederland in cijfers', type: 'Un texto informativo',
      p: [
        ['Nederland is een klein land, maar het heeft veel inwoners: bijna achttien miljoen. Het is een van de drukste landen van Europa.', 'Los Países Bajos son un país pequeño, pero tienen muchos habitantes: casi dieciocho millones. Es uno de los países más densamente poblados de Europa.'],
        ['Amsterdam is de grootste stad, maar Den Haag is net zo belangrijk: daar zitten de regering en de koning. Rotterdam heeft de grootste haven van Europa.', 'Ámsterdam es la ciudad más grande, pero La Haya es igual de importante: allí están el gobierno y el rey. Róterdam tiene el puerto más grande de Europa.'],
        ['Het hoogste punt van Nederland is maar 322 meter. Een groot deel van het land ligt lager dan de zee. Daarom zijn de dijken zo belangrijk!', 'El punto más alto de los Países Bajos mide solo 322 metros. Una gran parte del país está por debajo del nivel del mar. ¡Por eso los diques son tan importantes!']
      ],
      gl: [['bijna', 'casi'], ['de regering', 'el gobierno'], ['de haven', 'el puerto'], ['de dijk', 'el dique']],
      q: [
        { t: 'mc', q: 'Hoeveel inwoners heeft Nederland?', o: ['Bijna achttien miljoen', 'Acht miljoen', 'Dertig miljoen'] },
        { t: 'mc', q: 'Waar zit de regering?', o: ['In Den Haag', 'In Amsterdam', 'In Rotterdam'] },
        { t: 'mc', q: 'Waarom zijn de dijken belangrijk?', o: ['Omdat veel land lager ligt dan de zee', 'Omdat het veel regent', 'Omdat er veel bergen zijn'] }
      ]
    },
    say: [['Rotterdam is moderner dan Amsterdam.', 'Róterdam es más moderna que Ámsterdam.'], ['Het is de mooiste stad van Nederland.', 'Es la ciudad más bonita de los Países Bajos.'], ['Ik heb nog nooit sneeuw gezien.', 'Nunca he visto la nieve.']],
    task: { nl: 'Compara dos ciudades que conoces en 5 frases. Usa comparativos con dan y al menos un superlativo.', model: 'Panama-Stad is groter en moderner dan David. David is rustiger en goedkoper. Het verkeer in Panama-Stad is erger. Maar in de stad zijn de beste restaurants van het land.' },
    scenario: { nl: 'Una estudiante va a mudarse a los Países Bajos y te pide consejo.', role: 'Je bent Emma, een studente die naar Nederland gaat verhuizen. Vraag de leerling om steden te vergelijken (prijs, drukte, sfeer) en vraag welke stad het beste is. Stel ook een vraag met "ooit". Spreek eenvoudig Nederlands (A2).', goal: 'Compara dos lugares y recomiéndale el mejor para ella.' }
  });
})(window.SPT);
