/* Niveau B2 — Latijns-Amerikaans Spaans (eerste units).
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzeknoppen, eerste = juist), tr (vertalen NL→ES), order, match.
   Vanaf B1 toont de app (instelling «Automatisch») de Spaanse samenvatting (sum) en zit de Nederlandse uitleg achter een klapmenu. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('es-nl')) return; // lesstof van de cursus Spaans (uitleg in het Nederlands)
  const U = S.addUnit;

  /* ───────────────────────── B2 · 1 ───────────────────────── */
  U({
    id: 'b2-01', level: 'B2', icon: '💭', title: 'Si tuviera tiempo…', nl: 'Dromen en onwerkelijke situaties: de imperfecto de subjuntivo',
    goals: ['De imperfecto de subjuntivo vormen vanuit de indefinido', 'Onwerkelijke situaties beschrijven met si + imperfecto de subjuntivo + condicional', 'Dromen en wensen uitdrukken met ojalá + imperfecto de subjuntivo en como si'],
    vocab: [
      ['si tuviera…', 'als ik … had'], ['si fuera…', 'als ik … was'], ['si pudiera…', 'als ik kon…'], ['ojalá + imperfecto de subjuntivo', 'was het maar zo dat… (onwaarschijnlijk)'],
      ['como si…', 'alsof…'], ['soñar (ue) con', 'dromen van'], ['el sueño', 'de droom; de slaap'], ['cumplir un sueño', 'een droom waarmaken'], ['la meta', 'het doel'],
      ['la lotería', 'de loterij'], ['ganarse la lotería', 'de loterij winnen', 'LatAm: ganarse; ES: ganar'], ['el boleto', 'het lot, het kaartje', 'ES: el billete'],
      ['renunciar (a)', 'ontslag nemen; afzien van'], ['dedicarse a', 'zich bezighouden met, … als beroep hebben'], ['dar la vuelta al mundo', 'een wereldreis maken'],
      ['montar un negocio', 'een bedrijf beginnen'], ['ahorrar', 'sparen'], ['invertir (ie)', 'investeren'], ['la finca', 'de boerderij, het landgoed', 'CO · Midden-Amerika'],
      ['el cafetal', 'de koffieplantage'], ['la jubilación', 'het pensioen'], ['jubilarse', 'met pensioen gaan'], ['de verdad', 'echt, serieus'], ['¿y si…?', 'en wat als…?'],
      ['me encantaría', 'ik zou het geweldig vinden'], ['valer la pena', 'de moeite waard zijn'], ['arrepentirse (ie)', 'spijt hebben'], ['atreverse a', 'durven'],
      ['el riesgo', 'het risico'], ['arriesgarse', 'een risico nemen'], ['la plata', 'het geld', 'LatAm (informeel)'], ['chévere', 'tof, gaaf', 'CO · VE'],
      ['bacano / bacana', 'tof, gaaf', 'CO'], ['¡de una!', 'meteen! zeker!', 'CO (informeel)']
    ],
    grammar: [
      { t: 'De imperfecto de subjuntivo: vorming', es: 'El imperfecto de subjuntivo',
        html: `<p>De <b>imperfecto de subjuntivo</b> maak je altijd vanuit de <b>ellos-vorm van de indefinido</b>: haal <i>-ron</i> weg en zet er <b>-ra, -ras, -ra, -ramos, -ran</b> achter.</p>
<p>Daardoor gaan alle onregelmatige indefinido-vormen vanzelf mee: <i>tuvieron → tuviera</i>, <i>fueron → fuera</i>, <i>dijeron → dijera</i>, <i>pidieron → pidiera</i>, <i>durmieron → durmiera</i>.</p>
<p>📌 De nosotros-vorm krijgt een <b>accent</b>: <i>habláramos, tuviéramos, fuéramos</i>.</p>
<p>📌 Je hoort soms ook vormen op <b>-se</b> (<i>tuviese, hablase</i>). Die betekenen hetzelfde, maar in Latijns-Amerika is <b>-ra</b> veel gewoner. Herkennen is genoeg.</p>`,
        table: [['', 'hablar', 'comer', 'tener', 'ser / ir'], ['yo', 'hablara', 'comiera', 'tuviera', 'fuera'], ['tú', 'hablaras', 'comieras', 'tuvieras', 'fueras'], ['él / ella / usted', 'hablara', 'comiera', 'tuviera', 'fuera'], ['nosotros', 'habláramos', 'comiéramos', 'tuviéramos', 'fuéramos'], ['ellos / ustedes', 'hablaran', 'comieran', 'tuvieran', 'fueran']],
        ex: [['Si tuviera más plata, viajaría por toda Sudamérica.', 'Als ik meer geld had, zou ik door heel Zuid-Amerika reizen.'], ['Si fuera tú, no renunciaría.', 'Als ik jou was, zou ik geen ontslag nemen.']],
        sum: 'Imperfecto de subjuntivo: 3.ª persona plural del indefinido sin -ron + -ra, -ras, -ra, -ramos, -ran.' },
      { t: 'Si-zinnen: onwerkelijk heden', es: 'Si + imperfecto de subjuntivo + condicional',
        html: `<p>In B1 leerde je <b>echte voorwaarden</b>: <i>Si tengo tiempo, voy.</i> (Als ik tijd heb, ga ik.)</p>
<p>Is de situatie <b>onwerkelijk of onwaarschijnlijk</b>, dan gebruik je <b>si + imperfecto de subjuntivo</b> en in de andere helft de <b>condicional</b>: <i>Si tuviera tiempo, iría.</i> (Als ik tijd had, zou ik gaan… maar ik heb geen tijd.)</p>
<p>⚠️ Na <b>si</b> komt <b>nooit</b> de condicional en nooit de presente de subjuntivo. Fout: <s>Si tendría…</s>, <s>Si tenga…</s>.</p>
<p>De volgorde mag om: <i>Iría si tuviera tiempo.</i> Dan valt de komma weg.</p>`,
        table: [['soort', 'si-deel', 'hoofdzin'], ['echt / mogelijk', 'si + presente', 'presente / futuro / imperativo'], ['onwerkelijk nu', 'si + imperfecto de subjuntivo', 'condicional']],
        ex: [['Si me ganara la lotería, me compraría una finca.', 'Als ik de loterij won, zou ik een boerderij kopen.'], ['¿Qué harías si pudieras vivir en cualquier país?', 'Wat zou je doen als je in elk land kon wonen?']],
        sum: 'Situación irreal: si + imperfecto de subjuntivo, condicional. Nunca «si + condicional».' },
      { t: 'Ojalá en como si', es: 'Ojalá + imperfecto · Como si',
        html: `<p><b>Ojalá + presente de subjuntivo</b> is een wens die kan uitkomen: <i>Ojalá que llueva mañana.</i></p>
<p><b>Ojalá + imperfecto de subjuntivo</b> is een wens die (bijna) onmogelijk is: <i>Ojalá tuviera veinte años otra vez.</i> (Was ik maar weer twintig.) · <i>Ojalá estuvieras aquí.</i> (Was je maar hier.)</p>
<p>Na <b>como si</b> (alsof) volgt <b>altijd</b> de imperfecto de subjuntivo: <i>Habla como si fuera el jefe.</i> (Hij praat alsof hij de baas is.)</p>`,
        ex: [['Ojalá pudiera quedarme un mes más.', 'Kon ik maar een maand langer blijven.'], ['Me miró como si no me conociera.', 'Hij keek me aan alsof hij me niet kende.']],
        sum: 'Ojalá + imperfecto de subjuntivo: deseo poco probable. Como si + imperfecto de subjuntivo.' }
    ],
    verbs: ['hablar', 'tener', 'ser', 'ir', 'poder', 'hacer', 'decir', 'saber', 'estar', 'querer', 'venir', 'vivir', 'dormir', 'pedir', 'dar', 'poner'], tenses: ['impsubj', 'cond'],
    dialogue: {
      t: '¿Y si te ganaras la lotería?', place: 'Bogotá 🇨🇴',
      lines: [
        ['Valentina', 'Mark, ¿compraste el boleto de la lotería? Hoy es el sorteo.', 'Mark, heb je het lot gekocht? Vandaag is de trekking.'],
        ['Mark', 'Sí, pero no creo que gane. ¿Tú qué harías si te ganaras la lotería?', 'Ja, maar ik denk niet dat ik win. Wat zou jij doen als je de loterij won?'],
        ['Valentina', 'Uy, de una renunciaría a mi trabajo y me compraría una finca en el Eje Cafetero.', 'Oei, ik zou meteen ontslag nemen en een boerderij kopen in de koffiestreek.'],
        ['Mark', '¿Y qué harías allá? ¿Te dedicarías al café?', 'En wat zou je daar doen? Zou je koffie gaan verbouwen?'],
        ['Valentina', 'Claro. Si tuviera un cafetal, haría el mejor café de Colombia. ¿Y tú?', 'Natuurlijk. Als ik een koffieplantage had, zou ik de beste koffie van Colombia maken. En jij?'],
        ['Mark', 'Yo daría la vuelta al mundo. Bueno, primero viviría un año en Latinoamérica.', 'Ik zou een wereldreis maken. Nou ja, eerst zou ik een jaar in Latijns-Amerika wonen.'],
        ['Valentina', '¡Qué chévere! Pero, ¿por qué no lo haces ya? No necesitas la lotería.', 'Wat gaaf! Maar waarom doe je het niet nu al? Je hebt de loterij niet nodig.'],
        ['Mark', 'Si fuera tan fácil… Tengo mi trabajo, mi apartamento, mis amigos…', 'Was het maar zo makkelijk… Ik heb mijn werk, mijn appartement, mijn vrienden…'],
        ['Valentina', 'Hablas como si tuvieras ochenta años. ¡Arriésgate! Si no lo haces, te vas a arrepentir.', 'Je praat alsof je tachtig bent. Neem een risico! Als je het niet doet, krijg je er spijt van.'],
        ['Mark', 'Tienes razón. Ojalá tuviera tu valentía.', 'Je hebt gelijk. Had ik maar jouw moed.']
      ],
      q: [
        { t: 'mc', q: '¿Qué haría Valentina con el dinero de la lotería?', o: ['Comprar una finca de café', 'Dar la vuelta al mundo', 'Vivir en Europa'] },
        { t: 'mc', q: '¿Qué le aconseja Valentina a Mark?', o: ['Que se arriesgue y lo haga ya', 'Que compre más boletos', 'Que no deje su trabajo'] },
        { t: 'mc', q: '¿Por qué dice Valentina que Mark habla como si tuviera ochenta años?', o: ['Porque tiene miedo de cambiar su vida', 'Porque está cansado', 'Porque no oye bien'] }
      ]
    },
    culture: { t: 'Het Eje Cafetero', html: `<p>☕ Het <b>Eje Cafetero</b> (de koffie-as) ligt tussen Bogotá en Medellín, rond de steden Manizales, Pereira en Armenia. Het landschap van koffieplantages staat op de werelderfgoedlijst van UNESCO.</p>
<p>🌴 In de <b>Valle de Cocora</b> groeien de <i>palmas de cera</i>, de hoogste palmbomen ter wereld (tot 60 meter). Veel boeren ontvangen toeristen op hun <i>finca</i> en laten zien hoe koffie van bes tot kopje gaat.</p>
<p>🗣️ Colombianen gebruiken vaak <b>usted</b>, ook met vrienden en familie. In Bogotá hoor je zelfs ouders hun kinderen met <i>usted</i> aanspreken. In deze unit praten Mark en Valentina met <i>tú</i>, wat in de grote steden onder jongeren ook heel gewoon is.</p>` },
    ex: [
      { t: 'cloze', s: 'Si yo ___ más tiempo, aprendería a tocar guitarra.', h: 'tener', a: ['tuviera'], nl: 'Als ik meer tijd had, zou ik gitaar leren spelen.', tag: 'impsubj' },
      { t: 'cloze', s: 'Si nosotros ___ en la playa, no trabajaríamos tanto.', h: 'vivir', a: ['viviéramos'], nl: 'Als we aan het strand woonden, zouden we niet zo hard werken.', x: 'Nosotros-vorm met accent: viviéramos.', tag: 'impsubj' },
      { t: 'cloze', s: 'Si ustedes ___ cómo es, no dirían eso.', h: 'saber', a: ['supieran'], nl: 'Als jullie wisten hoe het is, zouden jullie dat niet zeggen.', tag: 'impsubj' },
      { t: 'cloze', s: 'Si fuera rico, ___ una casa en Cartagena.', h: 'comprar', a: ['compraría', 'me compraría'], nl: 'Als ik rijk was, zou ik een huis in Cartagena kopen.', tag: 'si-irreal' },
      { t: 'cloze', s: 'Si ___ tú, hablaría con el jefe.', a: ['fuera'], o: ['fuera', 'sería', 'sea'], nl: 'Als ik jou was, zou ik met de baas praten.', tag: 'si-irreal' },
      { t: 'cloze', s: 'Si mañana ___ sol, vamos a la finca.', a: ['hace'], o: ['hace', 'hiciera', 'haría'], nl: 'Als het morgen zonnig is, gaan we naar de boerderij.', x: 'Een echte mogelijkheid → si + presente.', tag: 'si-irreal' },
      { t: 'cloze', s: 'Ojalá ___ aquí conmigo.', h: 'estar, tú', a: ['estuvieras'], nl: 'Was je maar hier bij mij.', tag: 'impsubj' },
      { t: 'cloze', s: 'Gasta plata como si ___ millonario.', h: 'ser', a: ['fuera'], nl: 'Hij geeft geld uit alsof hij miljonair is.', tag: 'impsubj' },
      { t: 'mc', q: 'Imperfecto de subjuntivo van «decir» (yo):', o: ['dijera', 'dijiera', 'diciera'], x: 'Dijeron → dijera: na j geen i.', tag: 'impsubj' },
      { t: 'mc', q: 'Imperfecto de subjuntivo van «dormir» (ellos):', o: ['durmieran', 'dormieran', 'duermieran'], tag: 'impsubj' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Si tuviera dinero, viajaría.', 'Si tendría dinero, viajaría.', 'Si tenga dinero, viajaría.'], tag: 'si-irreal' },
      { t: 'mc', q: '«Ojalá tuviera veinte años.» betekent:', o: ['Was ik maar twintig.', 'Hopelijk word ik twintig.', 'Ik was twintig.'], tag: 'impsubj' },
      { t: 'order', s: '¿Qué harías si pudieras vivir en otro país?', nl: 'Wat zou je doen als je in een ander land kon wonen?', tag: 'si-irreal' },
      { t: 'tr', nl: 'Als ik jou was, zou ik het doen.', a: ['Si yo fuera tú, lo haría.', 'Si fuera tú, lo haría.', 'Yo que tú, lo haría.', 'Yo en tu lugar lo haría.', 'Yo en tu lugar, lo haría.'], tag: 'si-irreal' },
      { t: 'tr', nl: 'Als we meer geld hadden, zouden we een bedrijf beginnen.', a: ['Si tuviéramos más dinero, montaríamos un negocio.', 'Si tuviéramos más plata, montaríamos un negocio.', 'Si tuviéramos más dinero, empezaríamos un negocio.', 'Si tuviéramos más plata, empezaríamos un negocio.'], tag: 'si-irreal' },
      { t: 'match', p: [['de una', 'meteen, zeker'], ['chévere', 'tof'], ['la plata', 'het geld'], ['arriesgarse', 'een risico nemen'], ['valer la pena', 'de moeite waard zijn']], tag: 'vocab' }
    ],
    say: [['Si tuviera más tiempo, viajaría más.', 'Als ik meer tijd had, zou ik meer reizen.'], ['Si fuera tú, no lo pensaría dos veces.', 'Als ik jou was, zou ik er geen twee keer over nadenken.'], ['Ojalá pudiera quedarme más tiempo.', 'Kon ik maar langer blijven.'], ['Habla como si lo supiera todo.', 'Hij praat alsof hij alles weet.']],
    task: { nl: 'Wat zou jij doen als je de loterij won? Schrijf 6 tot 8 zinnen met si + imperfecto de subjuntivo en de condicional. Gebruik ook één keer ojalá en één keer como si.', model: 'Si me ganara la lotería, primero les daría una parte a mis papás. Después renunciaría a mi trabajo y viviría un año en Colombia. Si pudiera, compraría una finca pequeña cerca de Salento. No me compraría un carro caro, porque no lo necesito. Ojalá fuera tan fácil… Mis amigos dicen que hablo como si ya tuviera el dinero.' },
    scenario: { nl: 'Je praat met een Colombiaanse vriendin over wat jullie zouden doen als jullie de loterij wonnen.', role: 'Eres Valentina, una bogotana de 28 años, alegre y directa, que trabaja en una agencia de publicidad. Hablas con el estudiante sobre qué harían si ganaran la lotería, usando mucho «si + imperfecto de subjuntivo» y el condicional. Usas expresiones colombianas como «chévere», «de una» y «bacano». Le preguntas por sus sueños y lo animas a arriesgarse.', goal: 'Gebruik minstens drie zinnen met si + imperfecto de subjuntivo + condicional.' },
    reading: {
      t: '¿Qué harías con un año libre?', type: 'Enquête in een tijdschrift',
      p: [
        ['Les hicimos una pregunta sencilla a cuatro personas de diferentes países: si tuvieran un año libre y el dinero no fuera un problema, ¿qué harían?',
          'We stelden vier mensen uit verschillende landen een simpele vraag: als ze een jaar vrij hadden en geld geen probleem was, wat zouden ze dan doen?'],
        ['«Yo volvería a la universidad», dice Rosa, una enfermera de Quito de 45 años. «De joven no pude estudiar lo que quería. Si tuviera la oportunidad, estudiaría historia del arte. Mis hijos dicen que hablo como si fuera una estudiante de veinte años.»',
          '«Ik zou teruggaan naar de universiteit», zegt Rosa, een verpleegkundige van 45 uit Quito. «Toen ik jong was kon ik niet studeren wat ik wilde. Als ik de kans had, zou ik kunstgeschiedenis studeren. Mijn kinderen zeggen dat ik praat alsof ik een studente van twintig ben.»'],
        ['Andrés, un programador de Guadalajara, lo tiene claro: «Me iría a una playa de Oaxaca y no haría absolutamente nada durante tres meses. Después, si me aburriera, montaría un pequeño hostal.»',
          'Andrés, een programmeur uit Guadalajara, weet het precies: «Ik zou naar een strand in Oaxaca gaan en drie maanden helemaal niets doen. Daarna, als ik me zou vervelen, zou ik een klein hostel beginnen.»'],
        ['Para Lucía, una estudiante chilena, la respuesta es diferente: «Si pudiera, trabajaría como voluntaria en la Amazonía. Me encantaría hacer algo que valiera la pena.» Y don Ernesto, un jubilado de Montevideo, solo sonríe: «Ojalá alguien me hubiera hecho esa pregunta hace cuarenta años.»',
          'Voor Lucía, een Chileense studente, is het antwoord anders: «Als ik kon, zou ik als vrijwilliger in het Amazonegebied werken. Ik zou graag iets doen wat de moeite waard is.» En don Ernesto, een gepensioneerde uit Montevideo, glimlacht alleen: «Had iemand me die vraag maar veertig jaar geleden gesteld.»']
      ],
      gl: [['sencillo / sencilla', 'eenvoudig'], ['de joven', 'toen ik jong was'], ['aburrirse', 'zich vervelen'], ['el hostal', 'het hostel, pension'], ['el jubilado', 'de gepensioneerde']],
      q: [
        { t: 'mc', q: '¿Qué haría Rosa con un año libre?', o: ['Estudiaría historia del arte', 'Trabajaría como voluntaria', 'Se iría a la playa'] },
        { t: 'mc', q: '¿Qué haría Andrés si se aburriera?', o: ['Montaría un hostal', 'Volvería a trabajar como programador', 'Viajaría a Chile'] },
        { t: 'mc', q: '¿Dónde le gustaría trabajar a Lucía?', o: ['En la Amazonía', 'En un hostal en Oaxaca', 'En una universidad'] },
        { t: 'mc', q: '¿Qué quiere decir don Ernesto?', o: ['Que le habría gustado pensar en sus sueños cuando era joven', 'Que no quiere un año libre', 'Que ya hizo todo lo que quería'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 2 ───────────────────────── */
  U({
    id: 'b2-02', level: 'B2', icon: '📨', title: 'Me pidió que viniera', nl: 'De subjuntivo in het verleden: wensen, gevoelens en verzoeken',
    goals: ['Na een hoofdzin in het verleden de imperfecto de subjuntivo gebruiken', 'Vertellen wat iemand wilde, vroeg of voelde (quería que, me pidió que, me alegró que)', 'Beleefd vragen met quisiera en verzoeken doorgeven in het verleden'],
    vocab: [
      ['pedir (i) que', 'vragen dat (verzoek)'], ['rogar (ue) que', 'smeken, dringend vragen dat'], ['exigir que', 'eisen dat'], ['insistir en que', 'erop aandringen dat'],
      ['proponer que', 'voorstellen dat'], ['convencer a alguien de que', 'iemand overtuigen om'], ['impedir (i) que', 'verhinderen dat'], ['evitar que', 'voorkomen dat'],
      ['me extrañó que', 'het verbaasde me dat'], ['me dolió que', 'het deed me pijn dat'], ['me hizo ilusión que', 'ik vond het heel fijn dat'], ['me dio rabia que', 'ik werd boos dat'],
      ['tenía miedo de que', 'ik was bang dat'], ['quisiera', 'ik zou graag willen (beleefd)'], ['el encargo', 'de opdracht, bestelling'], ['el plazo', 'de termijn, deadline'],
      ['la entrega', 'de levering, inlevering'], ['a tiempo', 'op tijd'], ['de antemano', 'bij voorbaat'], ['el malentendido', 'het misverstand'], ['la queja', 'de klacht'],
      ['quejarse de', 'klagen over'], ['disculparse', 'zich verontschuldigen'], ['la disculpa', 'de verontschuldiging'], ['enterarse de', 'te weten komen, horen van'],
      ['contar con alguien', 'op iemand rekenen'], ['avisar', 'laten weten, waarschuwen'], ['el compromiso', 'de verplichting, afspraak'], ['la boda', 'de bruiloft'],
      ['el padrino / la madrina', 'de getuige (bruiloft); peetoom/-tante'], ['chamba', 'werk, klus', 'MX · PE (informeel)'], ['chambear', 'werken', 'MX · PE (informeel)'],
      ['pata', 'maat, vriend', 'PE (informeel)'], ['chévere', 'tof', 'PE · CO · VE'], ['al toque', 'meteen', 'PE · AR (informeel)']
    ],
    grammar: [
      { t: 'Tijdsovereenkomst: presente → imperfecto de subjuntivo', es: 'La concordancia de tiempos',
        html: `<p>De tijd van de <b>hoofdzin</b> bepaalt welke subjuntivo je in de bijzin gebruikt.</p>
<p>Hoofdzin in het <b>heden of de toekomst</b> → <b>presente de subjuntivo</b>: <i>Quiero que <b>vengas</b>.</i> · <i>Te pido que me <b>ayudes</b>.</i></p>
<p>Hoofdzin in het <b>verleden</b> (indefinido, imperfecto) of in de <b>condicional</b> → <b>imperfecto de subjuntivo</b>: <i>Quería que <b>vinieras</b>.</i> · <i>Te pedí que me <b>ayudaras</b>.</i> · <i>Me gustaría que <b>vinieras</b>.</i></p>
<p>Dat geldt voor alles wat je in B1 leerde: wensen, verzoeken, gevoelens, twijfel en <i>para que / antes de que</i>.</p>`,
        table: [['hoofdzin', 'bijzin'], ['Quiero que… / Te pido que…', 'vengas (presente de subjuntivo)'], ['Quería que… / Te pedí que…', 'vinieras (imperfecto de subjuntivo)'], ['Me gustaría que…', 'vinieras (imperfecto de subjuntivo)']],
        ex: [['Mi jefa me pidió que terminara el informe antes del viernes.', 'Mijn bazin vroeg me het verslag voor vrijdag af te maken.'], ['Me alegró mucho que me llamaras.', 'Ik was heel blij dat je me belde.']],
        sum: 'Verbo principal en pasado o condicional → imperfecto de subjuntivo: Quería que vinieras.' },
      { t: 'Verzoeken doorgeven in het verleden', es: 'Me pidió que…',
        html: `<p>Een opdracht of verzoek geef je in het verleden door met <b>pedir / decir / rogar que + imperfecto de subjuntivo</b>:</p>
<p>«Llámame mañana.» → <i>Me dijo que la <b>llamara</b> al día siguiente.</i></p>
<p>«No llegues tarde.» → <i>Me pidió que no <b>llegara</b> tarde.</i></p>
<p>📌 Let op het verschil: <b>decir que + indicativo</b> geeft informatie door (<i>Me dijo que <b>llegaba</b> tarde</i> = hij zei dát hij laat kwam). <b>Decir que + subjuntivo</b> geeft een opdracht door (<i>Me dijo que <b>llegara</b> temprano</i> = hij zei dat ik vroeg moest komen).</p>`,
        ex: [['La profesora nos dijo que leyéramos el capítulo tres.', 'De lerares zei dat we hoofdstuk drie moesten lezen.'], ['Mi mamá me rogó que tuviera cuidado.', 'Mijn moeder smeekte me voorzichtig te zijn.']],
        sum: 'Pedir / decir / rogar que + imperfecto de subjuntivo para transmitir órdenes en pasado.' },
      { t: 'Beleefd vragen: quisiera, me gustaría que', es: 'La cortesía',
        html: `<p><b>Quisiera</b> (imperfecto de subjuntivo van querer) is de beleefdste manier om iets te vragen: <i>Quisiera hablar con el gerente.</i> · <i>Quisiera una mesa para dos.</i></p>
<p>Met <b>me gustaría que</b> + imperfecto de subjuntivo vraag je iets beleefd aan een ander: <i>Me gustaría que me explicara el contrato.</i></p>
<p>💡 In Peru en de Andes klinken verzoeken vaak extra zacht met verkleinwoorden en <i>pues</i>: <i>¿Me pasas la salsita, pues?</i></p>`,
        ex: [['Quisiera cambiar la fecha de mi vuelo.', 'Ik zou graag de datum van mijn vlucht willen wijzigen.'], ['Nos gustaría que vinieran a la boda.', 'We zouden het fijn vinden als jullie naar de bruiloft kwamen.']],
        sum: 'Quisiera… / Me gustaría que + imperfecto de subjuntivo: peticiones muy corteses.' }
    ],
    verbs: ['venir', 'llamar', 'ayudar', 'traer', 'hacer', 'llegar', 'tener', 'decir', 'ser', 'estar', 'poder', 'saber', 'leer', 'terminar', 'pedir', 'querer'], tenses: ['impsubj', 'subj'],
    dialogue: {
      t: 'El padrino de la boda', place: 'Lima 🇵🇪',
      lines: [
        ['Diego', '¡Mark, pata! Qué bueno que viniste. ¿Te contó Camila lo de la boda?', 'Mark, maat! Fijn dat je er bent. Heeft Camila je over de bruiloft verteld?'],
        ['Mark', 'Sí, me llamó la semana pasada. Me pidió que viniera a Lima un mes antes.', 'Ja, ze belde me vorige week. Ze vroeg me een maand eerder naar Lima te komen.'],
        ['Diego', 'Es que queríamos que nos ayudaras con los preparativos. Y hay algo más…', 'We wilden namelijk dat je ons hielp met de voorbereidingen. En er is nog iets…'],
        ['Mark', '¿Qué cosa? Me estás asustando.', 'Wat dan? Je maakt me bang.'],
        ['Diego', 'Nada malo. Camila y yo queremos que seas el padrino de la boda.', 'Niets ergs. Camila en ik willen dat jij de getuige van de bruiloft bent.'],
        ['Mark', '¿En serio? ¡Qué honor! Me extrañó que Camila insistiera tanto en que viniera antes.', 'Echt? Wat een eer! Het verbaasde me al dat Camila er zo op aandrong dat ik eerder kwam.'],
        ['Diego', 'Yo le dije que no te lo contara por teléfono. Quería decírtelo en persona.', 'Ik zei tegen haar dat ze het niet door de telefoon moest vertellen. Ik wilde het je persoonlijk zeggen.'],
        ['Mark', 'Me hace mucha ilusión. ¿Y qué tiene que hacer el padrino aquí en Perú?', 'Ik vind het echt geweldig. En wat moet de getuige hier in Peru doen?'],
        ['Diego', 'Firmar en la ceremonia, dar un brindis… y bailar toda la noche. Mi abuela me pidió que te lo advirtiera.', 'Tekenen bij de ceremonie, een toost uitbrengen… en de hele nacht dansen. Mijn oma vroeg me je daarvoor te waarschuwen.'],
        ['Mark', '¡Al toque! Pero me gustaría que alguien me enseñara a bailar marinera.', 'Komt goed! Maar ik zou het fijn vinden als iemand me de marinera leerde dansen.']
      ],
      q: [
        { t: 'mc', q: '¿Qué le pidió Camila a Mark?', o: ['Que viniera a Lima un mes antes', 'Que organizara la boda', 'Que llamara a Diego'] },
        { t: 'mc', q: '¿Qué quieren Diego y Camila?', o: ['Que Mark sea el padrino', 'Que Mark baile en la ceremonia', 'Que Mark se quede en Lima'] },
        { t: 'mc', q: '¿Por qué Camila no le contó todo por teléfono?', o: ['Porque Diego quería decírselo en persona', 'Porque se le olvidó', 'Porque Mark no contestó'] }
      ]
    },
    culture: { t: 'Een bruiloft in Peru', html: `<p>💍 Op een Peruaanse bruiloft heb je niet één maar vaak <b>meerdere padrinos</b>: de <i>padrinos de anillos</i> (ringen), <i>de lazo</i> (het koord om het bruidspaar) en <i>de torta</i> (de taart). Zij helpen vaak ook mee betalen.</p>
<p>🎉 Het feest duurt tot diep in de nacht. Rond middernacht begint de <b>hora loca</b>: een uur met maskers, toeters, confetti en muziek op volle kracht.</p>
<p>💃 De <b>marinera</b> is de nationale dans van Peru: een elegante dans met zakdoeken, die een flirt tussen een man en een vrouw uitbeeldt. In Trujillo is er elk jaar een groot marinerafestival.</p>
<p>🗣️ <b>Pata</b> (vriend), <b>chamba</b> (werk) en <b>al toque</b> (meteen) hoor je overal in Lima.</p>` },
    ex: [
      { t: 'cloze', s: 'Mi jefa me pidió que ___ el informe antes del viernes.', h: 'terminar', a: ['terminara'], nl: 'Mijn bazin vroeg me het verslag voor vrijdag af te maken.', tag: 'subj-past' },
      { t: 'cloze', s: 'Queríamos que ustedes ___ a la boda.', h: 'venir', a: ['vinieran'], nl: 'We wilden dat jullie naar de bruiloft kwamen.', tag: 'subj-past' },
      { t: 'cloze', s: 'Me alegró mucho que me ___ por mi cumpleaños.', h: 'llamar, tú', a: ['llamaras'], nl: 'Ik was heel blij dat je me belde voor mijn verjaardag.', tag: 'subj-past' },
      { t: 'cloze', s: 'No creí que ___ verdad.', h: 'ser', a: ['fuera'], nl: 'Ik geloofde niet dat het waar was.', tag: 'subj-past' },
      { t: 'cloze', s: 'Te lo expliqué para que lo ___.', h: 'entender', a: ['entendieras'], nl: 'Ik legde het je uit zodat je het begreep.', tag: 'subj-past' },
      { t: 'cloze', s: 'Vámonos antes de que ___ a llover.', a: ['empiece'], o: ['empiece', 'empezara', 'empieza'], nl: 'Laten we gaan voordat het begint te regenen.', x: 'Hoofdzin in het heden → presente de subjuntivo.', tag: 'subj-past' },
      { t: 'cloze', s: 'Ayer salimos antes de que ___ a llover.', a: ['empezara'], o: ['empezara', 'empiece', 'empezaba'], nl: 'We gingen weg voordat het begon te regenen.', x: '«Salimos» is hier verleden tijd (indefinido) → imperfecto de subjuntivo.', tag: 'subj-past' },
      { t: 'cloze', s: '«Trae el vino.» → Me dijo que ___ el vino.', a: ['trajera'], o: ['trajera', 'traía', 'traiga'], nl: 'Hij zei dat ik de wijn moest meebrengen.', tag: 'subj-past' },
      { t: 'cloze', s: 'Me dijo que ___ tarde porque había mucho tráfico.', a: ['llegaba'], o: ['llegaba', 'llegara', 'llegue'], nl: 'Hij zei dat hij laat kwam omdat er veel verkeer was.', x: 'Informatie doorgeven → indicativo. Een opdracht → subjuntivo.', tag: 'subj-past' },
      { t: 'mc', q: '___ hablar con el gerente, por favor.', o: ['Quisiera', 'Quiera', 'Quise'], tag: 'subj-past' },
      { t: 'mc', q: 'Me gustaría que me ___ el contrato.', o: ['explicaran', 'expliquen', 'explicarán'], tag: 'subj-past' },
      { t: 'mc', q: '«Me hizo ilusión que vinieras.» betekent:', o: ['Ik vond het heel fijn dat je kwam.', 'Ik dacht dat je zou komen.', 'Ik droomde dat je kwam.'], tag: 'vocab' },
      { t: 'order', s: 'Mi abuela me pidió que tuviera mucho cuidado.', nl: 'Mijn oma vroeg me heel voorzichtig te zijn.', tag: 'subj-past' },
      { t: 'tr', nl: 'Hij wilde dat ik met hem meeging.', a: ['Quería que fuera con él.', 'Él quería que yo fuera con él.', 'Quería que yo fuera con él.', 'Quiso que fuera con él.'], tag: 'subj-past' },
      { t: 'tr', nl: 'Het verbaasde me dat ze niets zei.', a: ['Me extrañó que no dijera nada.', 'Me sorprendió que no dijera nada.', 'Me extrañó que ella no dijera nada.', 'Me sorprendió que ella no dijera nada.'], tag: 'subj-past' },
      { t: 'match', p: [['pata', 'maat, vriend'], ['al toque', 'meteen'], ['la chamba', 'het werk'], ['el padrino', 'de getuige'], ['enterarse de', 'te weten komen']], tag: 'vocab' }
    ],
    say: [['Me pidió que viniera un mes antes.', 'Ze vroeg me een maand eerder te komen.'], ['Quisiera hablar con el gerente, por favor.', 'Ik zou graag de manager willen spreken.'], ['Me alegró mucho que me llamaras.', 'Ik was heel blij dat je me belde.'], ['Me gustaría que me enseñaras a bailar.', 'Ik zou het fijn vinden als je me leerde dansen.']],
    task: { nl: 'Schrijf een berichtje aan een vriend over een gesprek met je baas of familie. Vertel wat die persoon van je wilde of vroeg (quería que, me pidió que, me dijo que) en hoe je je daarbij voelde (me alegró que, me molestó que).', model: 'Ayer hablé con mi jefe. Me pidió que trabajara el sábado porque teníamos una entrega importante. Me molestó un poco que me lo dijera tan tarde, pero le dije que sí. Después me dijo que me tomara el lunes libre. Me alegró que lo entendiera. Quería que me quedara hasta tarde, pero le pedí que me dejara salir a las seis.' },
    scenario: { nl: 'Je bent in Lima en helpt je Peruaanse vriend met de voorbereidingen voor zijn bruiloft.', role: 'Eres Diego, un limeño de 32 años, simpático y un poco nervioso porque te casas en un mes. Hablas con el estudiante, que es tu padrino de boda. Le cuentas qué te pidieron tu novia, tu mamá y tu abuela (usando «me pidió que», «quería que» + imperfecto de subjuntivo) y le preguntas qué le pidieron a él. Usas expresiones peruanas como «pata», «chamba», «al toque» y «chévere».', goal: 'Vertel minstens drie dingen die iemand je vroeg of wilde, met de imperfecto de subjuntivo.' },
    reading: {
      t: 'Querida Rosa: mi suegra me vuelve loca', type: 'Adviesrubriek',
      p: [
        ['«Querida Rosa: hace un mes nos mudamos a la casa de mi suegra en Arequipa, porque mi esposo quería que ahorráramos para comprar un departamento. Al principio todo iba bien, pero ahora tengo un problema.»',
          '«Lieve Rosa, een maand geleden zijn we bij mijn schoonmoeder in Arequipa gaan wonen, omdat mijn man wilde dat we spaarden om een appartement te kopen. In het begin ging alles goed, maar nu heb ik een probleem.»'],
        ['«Mi suegra insiste en que cocinemos juntas todos los días. La semana pasada me pidió que no usara tanta sal y que hiciera el arroz "como se debe". Ayer me dijo que planchara las camisas de mi esposo. Me dio mucha rabia que me hablara como si yo fuera una niña.»',
          '«Mijn schoonmoeder staat erop dat we elke dag samen koken. Vorige week vroeg ze me niet zoveel zout te gebruiken en de rijst "zoals het hoort" te maken. Gisteren zei ze dat ik de overhemden van mijn man moest strijken. Ik werd heel boos dat ze tegen me praatte alsof ik een kind was.»'],
        ['«Mi esposo dice que no es para tanto y que ella solo quiere ayudar. ¿Qué harías tú en mi lugar? — Desesperada en Arequipa»',
          '«Mijn man zegt dat het zo erg niet is en dat ze alleen wil helpen. Wat zou jij doen in mijn plaats? — Wanhopig in Arequipa»'],
        ['«Querida Desesperada: si yo estuviera en tu lugar, primero hablaría con tu esposo a solas. Es importante que él entienda cómo te sientes. Después, yo invitaría a tu suegra a un café y le diría con cariño que te gustaría que confiara más en ti. Muchas veces, las suegras solo necesitan sentir que todavía las necesitamos. Y si nada funciona… ¡que ahorren más rápido! — Rosa»',
          '«Lieve Wanhopig, als ik in jouw plaats was, zou ik eerst onder vier ogen met je man praten. Het is belangrijk dat hij begrijpt hoe je je voelt. Daarna zou ik je schoonmoeder voor een koffie uitnodigen en haar liefdevol zeggen dat je het fijn zou vinden als ze je meer vertrouwde. Vaak hebben schoonmoeders gewoon het gevoel nodig dat we ze nog nodig hebben. En als niets werkt… spaar dan sneller! — Rosa»']
      ],
      gl: [['la suegra', 'de schoonmoeder'], ['mudarse', 'verhuizen'], ['el departamento', 'het appartement', 'PE · AR · CL; MX: departamento; CO: apartamento'], ['planchar', 'strijken'], ['no es para tanto', 'het is zo erg niet'], ['a solas', 'onder vier ogen, alleen']],
      q: [
        { t: 'mc', q: '¿Por qué se mudaron a la casa de la suegra?', o: ['Porque el esposo quería que ahorraran', 'Porque la suegra estaba enferma', 'Porque no tenían trabajo'] },
        { t: 'mc', q: '¿Qué le molestó a «Desesperada»?', o: ['Que la suegra le hablara como si fuera una niña', 'Que la suegra no cocinara', 'Que su esposo no planchara'] },
        { t: 'mc', q: '¿Qué opina el esposo?', o: ['Que no es para tanto', 'Que deben mudarse ya', 'Que su mamá exagera'] },
        { t: 'mc', q: '¿Qué le recomienda Rosa primero?', o: ['Hablar con su esposo a solas', 'Hablar con la suegra en la cocina', 'Buscar otra casa'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 3 ───────────────────────── */
  U({
    id: 'b2-03', level: 'B2', icon: '🧉', title: '¿Vos sabés qué hora es?', nl: 'Het voseo van Argentinië en Uruguay verstaan en gebruiken',
    goals: ['De vos-vormen van de presente en de imperativo herkennen en gebruiken', 'Typische woorden en uitspraak van de Río de la Plata verstaan (sh-klank, che, boludo)', 'Een gesprek in Buenos Aires of Montevideo volgen'],
    vocab: [
      ['vos', 'jij (Argentinië, Uruguay, Midden-Amerika)'], ['vos sos', 'jij bent'], ['vos tenés', 'jij hebt'], ['vos querés', 'jij wilt'], ['vos podés', 'jij kunt'],
      ['vos sabés', 'jij weet'], ['vos venís', 'jij komt'], ['vos decís', 'jij zegt'], ['¡mirá!', 'kijk!'], ['¡vení!', 'kom!'], ['¡decime!', 'zeg het me!'], ['¡tomá!', 'alsjeblieft (pak aan)!'],
      ['che', 'hé, joh (aanspreekwoord)', 'AR · UY'], ['boludo / boluda', 'gast; sukkel (tussen vrienden vriendschappelijk!)', 'AR (informeel)'], ['bárbaro', 'geweldig', 'AR · UY'],
      ['re-', 'heel, super (re lindo = superleuk)', 'AR · UY'], ['dale', 'oké, goed; kom op', 'AR · UY'], ['¿viste?', 'snap je?, weet je wel', 'AR · UY'], ['la birra', 'het bier', 'AR (informeel)'],
      ['laburar', 'werken', 'AR · UY (informeel)'], ['el laburo', 'het werk', 'AR · UY'], ['el colectivo', 'de (stads)bus', 'AR'], ['el subte', 'de metro', 'AR (Buenos Aires)'],
      ['el mate', 'de mate (kruidenthee in een kalebas)'], ['la bombilla', 'het metalen rietje voor mate'], ['el termo', 'de thermosfles'], ['cebar mate', 'mate klaarmaken en schenken'],
      ['el asado', 'de barbecue (groot vleesfeest)'], ['la pileta', 'het zwembad', 'AR · UY; MX: alberca'], ['la frutilla', 'de aardbei', 'AR · UY · CL; elders: fresa'],
      ['la palta', 'de avocado', 'AR · UY · CL · PE; MX: aguacate'], ['el pibe / la piba', 'het joch / de meid', 'AR'], ['quilombo', 'chaos, puinhoop', 'AR · UY (informeel)'],
      ['mina', 'meid, vrouw', 'AR (informeel)'], ['¡qué lindo!', 'wat mooi!']
    ],
    grammar: [
      { t: 'Vos in de presente', es: 'El voseo: presente',
        html: `<p>In <b>Argentinië, Uruguay en Paraguay</b>, en ook in grote delen van <b>Midden-Amerika</b>, gebruiken mensen <b>vos</b> in plaats van <i>tú</i>. Het is daar helemaal normaal, ook op tv en in kranten.</p>
<p><b>Vorming in de presente:</b> neem de infinitief, haal de <i>-r</i> weg, zet er <b>-s</b> achter en leg de klemtoon op de laatste lettergreep: <i>hablar → hablás</i>, <i>comer → comés</i>, <i>vivir → vivís</i>.</p>
<p>📌 <b>Geen stamwisseling!</b> <i>Tú quieres → vos querés</i>, <i>tú puedes → vos podés</i>, <i>tú duermes → vos dormís</i>.</p>
<p>📌 <b>Ser</b> is onregelmatig: <b>vos sos</b>. Alle andere vormen (yo, él, nosotros, ustedes) blijven gewoon hetzelfde. En de voornaamwoorden: <i>te</i> en <i>tu</i> blijven: <i>Vos te llamás Mark. ¿Este es tu celular?</i></p>`,
        table: [['', 'tú', 'vos'], ['hablar', 'hablas', 'hablás'], ['querer', 'quieres', 'querés'], ['poder', 'puedes', 'podés'], ['tener', 'tienes', 'tenés'], ['venir', 'vienes', 'venís'], ['ser', 'eres', 'sos'], ['llamarse', 'te llamas', 'te llamás']],
        ex: [['¿Vos de dónde sos?', 'Waar kom jij vandaan?'], ['¿Querés un mate?', 'Wil je een mate?']],
        sum: 'Voseo: infinitivo sin -r + -s, con acento final y sin diptongo: hablás, querés, podés, vivís. Ser: vos sos.' },
      { t: 'Vos in de imperativo', es: 'El voseo: imperativo',
        html: `<p>De <b>imperativo</b> voor vos is nog makkelijker: haal de <i>-r</i> van de infinitief weg en zet een accent op de laatste klinker: <i>mirar → <b>mirá</b></i>, <i>comer → <b>comé</b></i>, <i>venir → <b>vení</b></i>, <i>decir → <b>decí</b></i>.</p>
<p>Met voornaamwoorden erachter valt het accent weg: <i><b>decime</b></i> (zeg het me), <i><b>contame</b></i> (vertel me), <i><b>sentate</b></i> (ga zitten).</p>
<p>📌 Uitzondering: <i>ir → <b>andá</b></i> (ga!). <i>¡Andá!</i> betekent ook «ach, kom nou».</p>
<p>📌 De ontkennende imperativo gebruikt meestal de gewone subjuntivo: <i>¡No te preocupes!</i> In Argentinië hoor je ook <i>¡No te preocupés!</i></p>`,
        table: [['', 'tú', 'vos'], ['mirar', 'mira', 'mirá'], ['comer', 'come', 'comé'], ['venir', 'ven', 'vení'], ['decir', 'di', 'decí'], ['tener', 'ten', 'tené'], ['contarme', 'cuéntame', 'contame']],
        ex: [['¡Mirá qué lindo está el día!', 'Kijk eens wat een mooie dag het is!'], ['Che, contame qué pasó.', 'Hé, vertel me wat er gebeurd is.']],
        sum: 'Imperativo de vos: infinitivo sin -r con acento: mirá, comé, vení. Con pronombre: decime, contame.' },
      { t: 'De Río de la Plata horen', es: 'El acento rioplatense',
        html: `<p>Het Spaans van Buenos Aires en Montevideo klinkt anders, onder meer door de invloed van Italiaanse immigranten.</p>
<p>🔊 <b>ll</b> en <b>y</b> klinken als <b>sj</b> (of zj): <i>calle</i> klinkt als «casje», <i>yo</i> als «sjo», <i>playa</i> als «plasja».</p>
<p>🎵 De zinsmelodie gaat op en neer, een beetje zoals in het Italiaans. Veel mensen praten met hun handen.</p>
<p>🗣️ <b>Che</b> is een aanspreekwoord («hé»). <b>Boludo</b> is tussen goede vrienden een vriendelijk «gast», maar tegen een onbekende is het een belediging. Gebruik het dus pas als je de mensen kent!</p>
<p>✅ Je hoeft zelf geen <i>vos</i> te gebruiken: met <i>tú</i> word je overal begrepen. Maar als je in Argentinië of Uruguay bent, maakt <i>vos</i> je meteen sympathiek.</p>`,
        ex: [['Che, ¿me pasás la yerba?', 'Hé, geef je me de yerba even aan?'], ['Dale, nos vemos en la esquina.', 'Oké, we zien elkaar op de hoek.']],
        sum: 'En el Río de la Plata: «ll» e «y» suenan como «sh»; «che» para llamar a alguien; «boludo» solo entre amigos.' }
    ],
    verbs: ['hablar', 'comer', 'vivir', 'querer', 'poder', 'tener', 'venir', 'ser', 'decir', 'saber', 'dormir', 'mirar', 'tomar'], tenses: ['pres', 'imper'],
    dialogue: {
      t: 'Un mate en la rambla', place: 'Montevideo 🇺🇾',
      lines: [
        ['Facundo', '¡Che, Mark! Vení, sentate acá. ¿Querés un mate?', 'Hé, Mark! Kom, ga hier zitten. Wil je een mate?'],
        ['Mark', 'Dale, gracias. ¿Cómo se toma? No quiero hacer ningún quilombo.', 'Oké, dank je. Hoe drink je het? Ik wil er geen puinhoop van maken.'],
        ['Facundo', 'Tranquilo. Tomá, lo tomás todo y me lo devolvés. No movás la bombilla, ¿viste?', 'Rustig. Pak aan, je drinkt hem helemaal leeg en geeft hem terug. Niet aan het rietje zitten, snap je?'],
        ['Mark', 'Uy, está re amargo. ¿Vos tomás esto todos los días?', 'Oei, die is superbitter. Drink jij dit elke dag?'],
        ['Facundo', '¡Todo el día! En Uruguay tomamos más mate que los argentinos. Vos sabés que andamos con el termo bajo el brazo.', 'De hele dag! In Uruguay drinken we meer mate dan de Argentijnen. Je weet dat we met de thermosfles onder de arm rondlopen.'],
        ['Mark', 'Sí, lo vi en la rambla. ¿Y por qué decís «vos» y no «tú»?', 'Ja, ik zag het op de boulevard. En waarom zeg je «vos» en niet «tú»?'],
        ['Facundo', 'Acá todos usamos vos. Algunos en el interior dicen «tú», pero con el verbo de vos: «tú tenés».', 'Hier gebruiken we allemaal vos. Sommigen op het platteland zeggen «tú», maar met het werkwoord van vos: «tú tenés».'],
        ['Mark', '¡Qué lío! Pero me gusta cómo suena. ¿Podés hablar un poco más despacio?', 'Wat een gedoe! Maar ik vind het mooi klinken. Kun je iets langzamer praten?'],
        ['Facundo', 'Perdoname, hablo re rápido. Mirá, el domingo hacemos un asado en casa de mi viejo. ¿Venís?', 'Sorry, ik praat superhard. Kijk, zondag houden we een asado bij mijn vader thuis. Kom je?'],
        ['Mark', '¡Bárbaro! ¿Llevo algo? ¿Una birra, un postre?', 'Geweldig! Zal ik iets meenemen? Een biertje, een toetje?'],
        ['Facundo', 'Traé un postre con dulce de leche y vas a ser el invitado favorito de mi vieja.', 'Neem een toetje met dulce de leche mee, dan word je de favoriete gast van mijn moeder.']
      ],
      q: [
        { t: 'mc', q: '¿Qué no hay que hacer con el mate?', o: ['Mover la bombilla', 'Tomarlo todo', 'Devolverlo'] },
        { t: 'mc', q: 'Según Facundo, ¿quién toma más mate?', o: ['Los uruguayos', 'Los argentinos', 'Los brasileños'] },
        { t: 'mc', q: '¿Qué le recomienda Facundo llevar al asado?', o: ['Un postre con dulce de leche', 'Cerveza', 'Carne'] }
      ]
    },
    culture: { t: 'Mate, asado en «mi viejo»', html: `<p>🧉 <b>Mate</b> is in Uruguay, Argentinië en Paraguay veel meer dan een drankje. Je drinkt het samen: één persoon (<i>el cebador</i>) schenkt steeds bij en geeft de kalebas door. Zeg pas <b>«gracias»</b> als je niet meer wilt, want dat betekent «voor mij niet meer».</p>
<p>🥩 Het <b>asado</b> op zondag is heilig. De <i>asador</i> (meestal een man) staat uren bij het vuur. Na afloop klap je voor hem: <i>¡Un aplauso para el asador!</i></p>
<p>👨‍👩‍👦 Argentijnen en Uruguayanen noemen hun ouders liefkozend <b>mi viejo</b> en <b>mi vieja</b>. Dat is niet onbeleefd, maar juist warm.</p>
<p>🌊 De <b>rambla</b> van Montevideo is een boulevard van 22 kilometer langs de Río de la Plata. Op zondag zit half Montevideo daar met mate en thermosfles.</p>` },
    ex: [
      { t: 'cloze', s: '¿Vos de dónde ___?', a: ['sos'], o: ['sos', 'eres', 'sois'], nl: 'Waar kom jij vandaan?', tag: 'voseo' },
      { t: 'cloze', s: '¿Vos ___ venir al asado?', h: 'querer', a: ['querés'], nl: 'Wil jij naar de asado komen?', x: 'Bij vos geen stamwisseling: querés.', tag: 'voseo' },
      { t: 'cloze', s: 'Che, ¿___ un minuto?', h: 'tener, vos', a: ['tenés'], nl: 'Hé, heb je even een minuutje?', tag: 'voseo' },
      { t: 'cloze', s: '¿Vos ___ hablar más despacio?', h: 'poder', a: ['podés'], nl: 'Kun je langzamer praten?', tag: 'voseo' },
      { t: 'cloze', s: '¡___ qué lindo está el río! (mirar, vos)', a: ['Mirá'], nl: 'Kijk eens hoe mooi de rivier is!', tag: 'voseo' },
      { t: 'cloze', s: '¡___ acá, Mark! (venir, vos)', a: ['Vení'], nl: 'Kom hier, Mark!', tag: 'voseo' },
      { t: 'cloze', s: 'Che, ___ qué pasó. (contar + me, vos)', a: ['contame'], nl: 'Hé, vertel me wat er gebeurd is.', tag: 'voseo' },
      { t: 'mc', q: '«Vos dormís mucho» is in tú-vorm:', o: ['Tú duermes mucho.', 'Tú dormes mucho.', 'Tú dormís mucho.'], tag: 'voseo' },
      { t: 'mc', q: 'Hoe klinkt «calle» in Buenos Aires?', o: ['ca-sje', 'ca-je', 'ca-lje'], tag: 'voseo' },
      { t: 'mc', q: 'Wanneer kun je «boludo» zeggen?', o: ['Alleen tegen goede vrienden', 'Tegen iedereen, het is beleefd', 'Alleen tegen ouderen'], tag: 'vocab' },
      { t: 'mc', q: 'Je wilt geen mate meer. Wat zeg je?', o: ['Gracias.', 'Dale.', '¿Viste?'], x: 'Met «gracias» geef je aan dat je klaar bent.', tag: 'vocab' },
      { t: 'mc', q: '«La palta» is in Mexico:', o: ['el aguacate', 'la fresa', 'la alberca'], tag: 'vocab' },
      { t: 'order', s: 'Che, ¿vos sabés dónde para el colectivo?', nl: 'Hé, weet jij waar de bus stopt?', tag: 'voseo' },
      { t: 'tr', nl: 'Wil je een mate? (gebruik vos)', a: ['¿Querés un mate?', '¿Vos querés un mate?', '¿Querés mate?'], tag: 'voseo' },
      { t: 'tr', nl: 'Jij bent heel aardig. (gebruik vos)', a: ['Vos sos muy amable.', 'Sos muy amable.', 'Vos sos re amable.', 'Sos re amable.'], tag: 'voseo' },
      { t: 'match', p: [['el colectivo', 'de bus (AR)'], ['laburar', 'werken'], ['la pileta', 'het zwembad'], ['bárbaro', 'geweldig'], ['quilombo', 'chaos']], tag: 'vocab' }
    ],
    say: [['Che, ¿vos de dónde sos?', 'Hé, waar kom jij vandaan?'], ['¿Querés un mate?', 'Wil je een mate?'], ['Mirá, el domingo hacemos un asado.', 'Kijk, zondag houden we een asado.'], ['Dale, nos vemos mañana.', 'Oké, tot morgen.']],
    task: { nl: 'Schrijf een WhatsApp-bericht aan een Argentijnse vriend in vos. Nodig hem uit voor een etentje, vraag of hij kan en wil komen, en geef twee opdrachten (vení…, traé…). Gebruik minstens vijf vos-vormen.', model: 'Che, ¿cómo andás? ¿Tenés planes para el sábado? Hago una cena en casa con unos amigos. ¿Querés venir? Si podés, vení a las nueve. Traé algo para tomar, una birra o un vino. Ah, y decile a tu hermana que también está invitada. ¡Avisame! Un abrazo.' },
    scenario: { nl: 'Je bent in Buenos Aires en praat met een Argentijnse vriend in een café in Palermo.', role: 'Eres Facundo, un porteño de 30 años, muy charlatán y simpático. Hablas con voseo rioplatense (vos sos, tenés, querés, mirá, decime) y usas palabras como «che», «re», «bárbaro», «laburo», «dale» y «¿viste?». Le explicas al estudiante cosas de Buenos Aires (el subte, el colectivo, el mate, el asado) y le preguntas por su vida. Si el estudiante usa «tú», no lo corriges, pero le muestras la forma con vos de vez en cuando.', goal: 'Gebruik zelf minstens vier vos-vormen in het gesprek.' },
    reading: {
      t: 'Guía rápida para no perderse en Buenos Aires', type: 'Reisblog',
      p: [
        ['Llegaste a Buenos Aires y no entendés nada. Tranquilo, nos pasó a todos. Lo primero que vas a notar es que acá nadie dice «tú». Todos usan «vos»: «¿Vos de dónde sos?», «¿Querés un café?». No te asustes: en dos días lo vas a entender perfecto.',
          'Je bent in Buenos Aires aangekomen en je begrijpt er niets van. Rustig, dat hebben we allemaal gehad. Het eerste wat je merkt, is dat hier niemand «tú» zegt. Iedereen gebruikt «vos»: «Waar kom jij vandaan?», «Wil je een koffie?». Schrik niet: binnen twee dagen begrijp je het perfect.'],
        ['Para moverte, tomá el subte, que es rápido y barato, o el colectivo, que llega a todas partes. Vas a necesitar una tarjeta SUBE: la comprás en cualquier kiosco. Ojo: los porteños hacen fila para el colectivo con mucho orden. ¡No te colés!',
          'Om je te verplaatsen neem je de metro, die snel en goedkoop is, of de bus, die overal komt. Je hebt een SUBE-kaart nodig: die koop je in elke kiosk. Let op: de inwoners van Buenos Aires staan heel netjes in de rij voor de bus. Niet voordringen!'],
        ['Si te invitan a un asado, aceptá siempre. Llevá vino o un postre, y no llegues a la hora exacta: llegar treinta minutos tarde es lo normal. Y si alguien te ofrece un mate, no digas «gracias» hasta que no quieras más, porque «gracias» significa «ya no quiero».',
          'Als je wordt uitgenodigd voor een asado, zeg dan altijd ja. Neem wijn of een toetje mee en kom niet precies op tijd: een halfuur te laat is normaal. En als iemand je een mate aanbiedt, zeg dan pas «gracias» als je niet meer wilt, want «gracias» betekent «ik hoef niet meer».'],
        ['Por último, no te ofendas si un amigo te dice «boludo». Entre amigos es casi una forma de cariño. Pero vos no lo uses con desconocidos, ¿eh? Disfrutá la ciudad: es re linda, y la gente, aunque hable rápido, es muy cálida.',
          'Tot slot: wees niet beledigd als een vriend je «boludo» noemt. Tussen vrienden is het bijna een koosnaam. Maar gebruik het zelf niet tegen onbekenden, hè? Geniet van de stad: hij is superleuk, en de mensen zijn heel hartelijk, ook al praten ze snel.']
      ],
      gl: [['el porteño / la porteña', 'inwoner van Buenos Aires'], ['hacer fila', 'in de rij staan'], ['colarse', 'voordringen'], ['ofenderse', 'beledigd zijn'], ['cálido / cálida', 'hartelijk, warm']],
      q: [
        { t: 'mc', q: '¿Dónde se compra la tarjeta SUBE?', o: ['En cualquier kiosco', 'En el colectivo', 'En el aeropuerto'] },
        { t: 'mc', q: '¿Qué es normal cuando te invitan a un asado?', o: ['Llegar unos treinta minutos tarde', 'Llevar carne', 'Llegar a la hora exacta'] },
        { t: 'mc', q: '¿Qué significa decir «gracias» con el mate?', o: ['Que ya no quieres más', 'Que te gusta mucho', 'Que quieres otro'] },
        { t: 'mc', q: '¿Qué dice el texto sobre la palabra «boludo»?', o: ['Entre amigos es casi cariñosa', 'Siempre es un insulto', 'Solo la usan los turistas'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 4 ───────────────────────── */
  U({
    id: 'b2-04', level: 'B2', icon: '🕰️', title: 'Si lo hubiera sabido…', nl: 'Spijt en gemiste kansen: onwerkelijk verleden',
    goals: ['De pluscuamperfecto de subjuntivo (hubiera + participio) vormen', 'Over gemiste kansen praten met si + hubiera + participio en habría + participio', 'Spijt en verwijten uitdrukken (ojalá hubiera…, debería haber…)'],
    vocab: [
      ['si lo hubiera sabido', 'als ik het had geweten'], ['habría + participio', 'zou … hebben'], ['debería haber + participio', 'had … moeten'], ['ojalá hubiera…', 'had ik maar…'],
      ['arrepentirse (ie) de', 'spijt hebben van'], ['el arrepentimiento', 'de spijt'], ['la oportunidad', 'de kans'], ['perder (ie) una oportunidad', 'een kans missen'],
      ['aprovechar', 'benutten, profiteren van'], ['la decisión', 'de beslissing'], ['tomar una decisión', 'een beslissing nemen'], ['equivocarse', 'zich vergissen'], ['el error', 'de fout'],
      ['por culpa de', 'door de schuld van'], ['echar de menos', 'missen (iemand)', 'LatAm vaker: extrañar'], ['extrañar', 'missen (iemand, iets)'], ['el terremoto', 'de aardbeving'],
      ['el temblor', 'de (lichte) aardbeving'], ['la cordillera', 'de bergketen (de Andes)'], ['la beca', 'de beurs (studie)'], ['el intercambio', 'de uitwisseling'], ['a estas alturas', 'op dit punt, inmiddels'],
      ['tarde o temprano', 'vroeg of laat'], ['lo hecho, hecho está', 'gedane zaken nemen geen keer'], ['no hay mal que por bien no venga', 'geen kwaad zonder baat'], ['¡qué lata!', 'wat vervelend / saai!', 'CL'],
      ['¿cachai?', 'snap je?', 'CL (informeel)'], ['al tiro', 'meteen', 'CL'], ['po', 'nou, hoor (na een woord: sí po, no po)', 'CL (informeel)'], ['la pega', 'het werk', 'CL (informeel)'],
      ['fome', 'saai', 'CL (informeel)'], ['bacán', 'tof, gaaf', 'CL · PE']
    ],
    grammar: [
      { t: 'Pluscuamperfecto de subjuntivo', es: 'Hubiera + participio',
        html: `<p>De <b>pluscuamperfecto de subjuntivo</b> maak je met de imperfecto de subjuntivo van <b>haber</b> + <b>participio</b>: <i>hubiera hablado, hubieras visto, hubiéramos ido</i>.</p>
<p>Je gebruikt hem overal waar je een subjuntivo nodig hebt, maar dan over iets wat <b>al voorbij</b> is: <i>Me alegró que <b>hubieras venido</b>.</i> · <i>No creía que lo <b>hubieran terminado</b>.</i></p>`,
        table: [['', 'haber', '+ participio'], ['yo', 'hubiera', 'hablado / comido / vivido'], ['tú', 'hubieras', 'visto'], ['él / ella / usted', 'hubiera', 'hecho'], ['nosotros', 'hubiéramos', 'ido'], ['ellos / ustedes', 'hubieran', 'dicho']],
        ex: [['Me sorprendió que no me hubieras llamado.', 'Het verbaasde me dat je me niet had gebeld.']],
        sum: 'Pluscuamperfecto de subjuntivo: hubiera, hubieras, hubiera, hubiéramos, hubieran + participio.' },
      { t: 'Si-zinnen: onwerkelijk verleden', es: 'Si hubiera…, habría…',
        html: `<p>Over iets wat in het verleden <b>niet</b> is gebeurd, praat je met: <b>si + hubiera + participio</b>, gevolgd door <b>habría + participio</b> (condicional compuesto).</p>
<p><i>Si <b>hubiera estudiado</b> más, <b>habría aprobado</b> el examen.</i> (Als ik meer had gestudeerd, zou ik voor het examen zijn geslaagd… maar ik studeerde niet.)</p>
<p>💬 In gesproken Latijns-Amerikaans Spaans hoor je in de tweede helft vaak ook <b>hubiera</b>: <i>Si lo hubiera sabido, te <b>hubiera</b> llamado.</i> Dat is helemaal correct.</p>
<p>🔀 <b>Gemengd:</b> een verleden oorzaak met een gevolg nu: <i>Si <b>hubiera aceptado</b> la beca, ahora <b>viviría</b> en Chile.</i></p>`,
        table: [['soort', 'si-deel', 'hoofdzin'], ['echt / mogelijk', 'si + presente', 'presente / futuro'], ['onwerkelijk nu', 'si + tuviera', 'haría'], ['onwerkelijk verleden', 'si + hubiera tenido', 'habría / hubiera hecho']],
        ex: [['Si hubiéramos salido antes, no habríamos perdido el vuelo.', 'Als we eerder waren vertrokken, hadden we de vlucht niet gemist.'], ['Si lo hubiera sabido, te habría ayudado.', 'Als ik het had geweten, had ik je geholpen.']],
        sum: 'Pasado irreal: si + pluscuamperfecto de subjuntivo, condicional compuesto (habría / hubiera + participio).' },
      { t: 'Spijt en verwijten', es: 'Expresar arrepentimiento',
        html: `<p><b>Ojalá + hubiera + participio:</b> had ik maar… <i>Ojalá hubiera aprendido español de niño.</i></p>
<p><b>Debería haber + participio:</b> ik had … moeten. <i>Debería haber llamado a mi abuela más seguido.</i> Een verwijt aan een ander: <i>Me lo podrías haber dicho.</i> (Je had het me kunnen zeggen.)</p>
<p><b>Como si + hubiera + participio:</b> alsof … had. <i>Me miró como si hubiera visto un fantasma.</i></p>
<p>💬 Troostende uitdrukkingen: <i>Lo hecho, hecho está.</i> (Gedane zaken nemen geen keer.) · <i>No hay mal que por bien no venga.</i> (Geen kwaad zonder baat.)</p>`,
        ex: [['Ojalá no hubiera dicho eso.', 'Had ik dat maar niet gezegd.'], ['Deberías haberme avisado.', 'Je had me moeten waarschuwen.']],
        sum: 'Ojalá hubiera + participio; debería haber + participio; como si hubiera + participio.' }
    ],
    verbs: ['hacer', 'ir', 'ver', 'decir', 'saber', 'estudiar', 'llamar', 'salir', 'perder', 'conocer', 'tener', 'volver', 'escribir', 'poder', 'ser'], tenses: ['plussubj', 'condperf'],
    dialogue: {
      t: 'La beca que no acepté', place: 'Santiago de Chile 🇨🇱',
      lines: [
        ['Catalina', 'Oye, Mark, ¿por qué estás tan callado? ¿Pasó algo?', 'Hé Mark, waarom ben je zo stil? Is er iets gebeurd?'],
        ['Mark', 'Nada grave. Estaba pensando en algo que me pasó hace diez años.', 'Niets ergs. Ik zat te denken aan iets wat me tien jaar geleden overkwam.'],
        ['Catalina', 'Cuéntame po. ¿Qué cosa?', 'Vertel nou. Wat dan?'],
        ['Mark', 'Me ofrecieron una beca para estudiar un año en Santiago, pero no la acepté.', 'Ik kreeg een beurs aangeboden om een jaar in Santiago te studeren, maar ik heb hem niet aangenomen.'],
        ['Catalina', '¿En serio? ¿Y por qué no?', 'Echt? En waarom niet?'],
        ['Mark', 'Tenía novia y un buen trabajo. Pensé que si me hubiera ido, lo habría perdido todo.', 'Ik had een vriendin en een goede baan. Ik dacht dat ik alles kwijt zou zijn als ik was gegaan.'],
        ['Catalina', '¿Y ahora te arrepientes?', 'En nu heb je spijt?'],
        ['Mark', 'Un poco. Si hubiera aceptado la beca, ahora hablaría español perfecto. Y la novia me dejó un año después.', 'Een beetje. Als ik de beurs had aangenomen, sprak ik nu perfect Spaans. En die vriendin heeft me een jaar later toch verlaten.'],
        ['Catalina', '¡Qué lata! Pero mira, si te hubieras venido entonces, no me habrías conocido a mí.', 'Wat balen! Maar kijk, als je toen was gekomen, had je mij niet leren kennen.'],
        ['Mark', 'Jaja, tienes razón. No hay mal que por bien no venga.', 'Haha, je hebt gelijk. Geen kwaad zonder baat.'],
        ['Catalina', 'Exacto. Lo hecho, hecho está. Ahora estás aquí, ¿cachai? Vamos al tiro por unas empanadas.', 'Precies. Gedane zaken nemen geen keer. Nu ben je hier, snap je? Kom, we gaan meteen empanadas halen.']
      ],
      q: [
        { t: 'mc', q: '¿Qué le ofrecieron a Mark hace diez años?', o: ['Una beca para estudiar en Santiago', 'Un trabajo en Chile', 'Un viaje a la cordillera'] },
        { t: 'mc', q: '¿Por qué no aceptó Mark?', o: ['Porque tenía novia y un buen trabajo', 'Porque no hablaba español', 'Porque no tenía dinero'] },
        { t: 'mc', q: '¿Qué dice Catalina para consolarlo?', o: ['Que si hubiera venido entonces, no la habría conocido', 'Que todavía puede pedir la beca', 'Que su español ya es perfecto'] }
      ]
    },
    culture: { t: 'Chili: tussen de Andes en de oceaan', html: `<p>🏔️ Chili is meer dan 4.000 kilometer lang en gemiddeld maar 180 kilometer breed. Vanuit Santiago zie je op heldere dagen de besneeuwde toppen van de <b>cordillera de los Andes</b>.</p>
<p>🌍 Chili ligt op de grens van twee aardplaten. Kleine aardbevingen (<b>temblores</b>) zijn heel gewoon; Chilenen schrikken pas bij een echte <b>terremoto</b>. Gebouwen worden daarom extra stevig gebouwd.</p>
<p>🗣️ Het Chileense Spaans is snel en zit vol eigen woorden: <i>po</i> (sí po, ya po), <i>¿cachai?</i> (snap je?), <i>al tiro</i> (meteen), <i>la pega</i> (het werk), <i>fome</i> (saai) en <i>bacán</i> (tof). Veel mensen laten de s aan het eind van een woord weg: <i>¿cómo estái?</i></p>
<p>🥟 <b>Empanadas de pino</b> (met gehakt, ui, ei en olijf) eet je vooral rond 18 september, de nationale feestdag.</p>` },
    ex: [
      { t: 'cloze', s: 'Si ___ más, habría aprobado el examen.', h: 'estudiar, yo', a: ['hubiera estudiado'], nl: 'Als ik meer had gestudeerd, was ik geslaagd.', tag: 'si-past' },
      { t: 'cloze', s: 'Si hubiéramos salido antes, no ___ el vuelo.', h: 'perder, nosotros', a: ['habríamos perdido', 'hubiéramos perdido'], nl: 'Als we eerder waren vertrokken, hadden we de vlucht niet gemist.', tag: 'si-past' },
      { t: 'cloze', s: 'Si me lo ___, te habría ayudado.', h: 'decir, tú', a: ['hubieras dicho'], nl: 'Als je het me had gezegd, had ik je geholpen.', tag: 'si-past' },
      { t: 'cloze', s: 'Si hubiera aceptado la beca, ahora ___ en Chile.', a: ['viviría'], o: ['viviría', 'habría vivido', 'vivía'], nl: 'Als ik de beurs had aangenomen, woonde ik nu in Chili.', x: 'Oorzaak in het verleden, gevolg nu → condicional.', tag: 'si-past' },
      { t: 'cloze', s: 'Ojalá no ___ eso.', h: 'decir, yo', a: ['hubiera dicho'], nl: 'Had ik dat maar niet gezegd.', tag: 'si-past' },
      { t: 'cloze', s: 'Me miró como si ___ un fantasma.', h: 'ver', a: ['hubiera visto'], nl: 'Hij keek me aan alsof hij een spook had gezien.', tag: 'si-past' },
      { t: 'cloze', s: 'Deberías ___ llamado a tu mamá.', a: ['haber'], o: ['haber', 'hubiera', 'habías'], nl: 'Je had je moeder moeten bellen.', tag: 'si-past' },
      { t: 'cloze', s: 'Me alegró que ___ a la fiesta.', h: 'venir, ustedes', a: ['hubieran venido', 'vinieran'], nl: 'Ik was blij dat jullie naar het feest waren gekomen.', tag: 'si-past' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Si lo hubiera sabido, te habría llamado.', 'Si lo habría sabido, te hubiera llamado.', 'Si lo había sabido, te habría llamado.'], x: 'Na si nooit habría.', tag: 'si-past' },
      { t: 'mc', q: '«Si lo hubiera sabido, te hubiera llamado.» Is dat correct?', o: ['Ja, dat hoor je veel in Latijns-Amerika.', 'Nee, het moet «habría» zijn.', 'Nee, het moet «había» zijn.'], tag: 'si-past' },
      { t: 'mc', q: '«Lo hecho, hecho está.» betekent:', o: ['Gedane zaken nemen geen keer.', 'Het werk is af.', 'Wat je doet, doe je goed.'], tag: 'vocab' },
      { t: 'mc', q: '«Al tiro» betekent in Chili:', o: ['meteen', 'schieten', 'op tijd'], tag: 'vocab' },
      { t: 'order', s: 'Si hubiera sabido la verdad, no habría venido.', nl: 'Als ik de waarheid had geweten, was ik niet gekomen.', tag: 'si-past' },
      { t: 'tr', nl: 'Als je eerder was gekomen, had je hem gezien.', a: ['Si hubieras venido antes, lo habrías visto.', 'Si hubieras llegado antes, lo habrías visto.', 'Si hubieras venido antes, lo hubieras visto.', 'Si hubieras llegado antes, lo hubieras visto.'], tag: 'si-past' },
      { t: 'tr', nl: 'Had ik maar meer gereisd.', a: ['Ojalá hubiera viajado más.', 'Ojalá que hubiera viajado más.'], tag: 'si-past' },
      { t: 'match', p: [['¿cachai?', 'snap je?'], ['la pega', 'het werk'], ['fome', 'saai'], ['bacán', 'tof'], ['¡qué lata!', 'wat vervelend!']], tag: 'vocab' }
    ],
    say: [['Si lo hubiera sabido, te habría llamado.', 'Als ik het had geweten, had ik je gebeld.'], ['Ojalá hubiera aprendido español de niño.', 'Had ik maar als kind Spaans geleerd.'], ['Deberías haberme avisado.', 'Je had me moeten waarschuwen.'], ['No hay mal que por bien no venga.', 'Geen kwaad zonder baat.']],
    task: { nl: 'Schrijf over een beslissing uit je verleden die je anders had kunnen nemen. Wat zou er gebeurd zijn als…? Gebruik si + hubiera + participio, habría + participio en ojalá hubiera.', model: 'Hace quince años tuve la oportunidad de trabajar en Barcelona, pero me quedé en Holanda. Si hubiera aceptado, habría aprendido español mucho antes. Tal vez ahora viviría en España o en Latinoamérica. Pero si me hubiera ido, no habría conocido a mi pareja. A veces pienso: ojalá hubiera sido más valiente. Pero bueno, lo hecho, hecho está.' },
    scenario: { nl: 'Je praat met een Chileense vriendin over keuzes die jullie in het verleden hebben gemaakt.', role: 'Eres Catalina, una santiaguina de 35 años, ingeniera, cálida y con mucho humor. Hablas con el estudiante sobre decisiones del pasado y oportunidades perdidas, usando «si hubiera + participio», «habría + participio» y «ojalá hubiera». Usas chilenismos como «po», «¿cachai?», «al tiro», «la pega», «fome» y «bacán». Le cuentas que tú casi te fuiste a vivir a Canadá.', goal: 'Gebruik minstens twee zinnen met si + hubiera + participio.' },
    reading: {
      t: 'Cartas que nunca envié', type: 'Persoonlijk verhaal',
      p: [
        ['Mi abuela Elena murió el año pasado en Valparaíso, a los 92 años. Cuando ordenamos su casa, encontramos una caja con cartas. Todas estaban dirigidas a un tal Rodrigo, y ninguna tenía sello. Nunca las había enviado.',
          'Mijn oma Elena overleed vorig jaar in Valparaíso, op haar 92e. Toen we haar huis opruimden, vonden we een doos met brieven. Ze waren allemaal gericht aan een zekere Rodrigo, en op geen enkele zat een postzegel. Ze had ze nooit verstuurd.'],
        ['Mi mamá nos contó la historia. Cuando mi abuela tenía veinte años, se enamoró de un pescador. Su familia no quería que se casara con un hombre pobre, así que Rodrigo se fue al sur a buscar trabajo. Prometió escribirle, pero las cartas nunca llegaron.',
          'Mijn moeder vertelde ons het verhaal. Toen mijn oma twintig was, werd ze verliefd op een visser. Haar familie wilde niet dat ze met een arme man trouwde, dus Rodrigo vertrok naar het zuiden om werk te zoeken. Hij beloofde haar te schrijven, maar de brieven kwamen nooit aan.'],
        ['En la última carta, de 1958, mi abuela escribió: «Si me hubieras escrito, te habría esperado toda la vida. Si hubiera sido más valiente, me habría ido contigo. Ojalá hubiéramos tenido otra oportunidad.» Dos años después se casó con mi abuelo.',
          'In de laatste brief, uit 1958, schreef mijn oma: «Als je me had geschreven, had ik mijn hele leven op je gewacht. Als ik moediger was geweest, was ik met je meegegaan. Hadden we maar een andere kans gekregen.» Twee jaar later trouwde ze met mijn opa.'],
        ['Lo más triste es lo que descubrimos después: en la casa de la familia de mi abuela había otra caja, escondida por su padre, con las cartas de Rodrigo. Si alguien se las hubiera dado, quizás yo no estaría escribiendo esto. Pero mi abuela fue feliz con mi abuelo, o eso nos decía siempre. Lo hecho, hecho está.',
          'Het droevigste is wat we daarna ontdekten: in het huis van de familie van mijn oma stond nog een doos, verstopt door haar vader, met de brieven van Rodrigo. Als iemand ze haar had gegeven, schreef ik dit nu misschien niet. Maar mijn oma was gelukkig met mijn opa, dat zei ze ons tenminste altijd. Gedane zaken nemen geen keer.']
      ],
      gl: [['dirigido a', 'gericht aan'], ['el sello', 'de postzegel'], ['el pescador', 'de visser'], ['prometer', 'beloven'], ['esconder', 'verstoppen']],
      q: [
        { t: 'mc', q: '¿Qué encontraron en la casa de la abuela?', o: ['Una caja con cartas que nunca envió', 'Cartas de su abuelo', 'Fotos de Rodrigo'] },
        { t: 'mc', q: '¿Por qué se fue Rodrigo al sur?', o: ['Porque la familia de Elena no quería que se casaran', 'Porque quería ser pescador', 'Porque se enamoró de otra mujer'] },
        { t: 'mc', q: '¿Qué habría hecho la abuela si Rodrigo le hubiera escrito?', o: ['Lo habría esperado toda la vida', 'Se habría casado con el abuelo', 'Se habría ido a Valparaíso'] },
        { t: 'mc', q: '¿Qué descubrieron después?', o: ['Que el padre de Elena había escondido las cartas de Rodrigo', 'Que Rodrigo nunca escribió', 'Que la abuela no fue feliz'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 5 ───────────────────────── */
  U({
    id: 'b2-05', level: 'B2', icon: '🚢', title: 'El canal fue construido…', nl: 'Passief en se: wat er gedaan wordt en wat je per ongeluk overkomt',
    goals: ['Het passief met ser + voltooid deelwoord herkennen en gebruiken (fue construido)', 'Met se + werkwoord zeggen wat er in het algemeen gebeurt (se venden casas, se dice que…)', 'Ongelukjes vertellen zonder schuld: se me olvidó, se me cayó, se me rompió'],
    vocab: [
      ['el canal', 'het kanaal'], ['la esclusa', 'de sluis'], ['el buque', 'het (grote) schip'], ['la carga', 'de lading, vracht'], ['la construcción', 'de bouw'],
      ['inaugurar', 'openen, inwijden'], ['ampliar', 'uitbreiden'], ['la ampliación', 'de uitbreiding'], ['diseñar', 'ontwerpen'], ['fundar', 'stichten, oprichten'],
      ['el ingeniero / la ingeniera', 'de ingenieur'], ['el trabajador / la trabajadora', 'de arbeider, werknemer'], ['la obra', 'het bouwwerk; het (kunst)werk'],
      ['ser + participio', 'worden (passief): fue construido = werd gebouwd'], ['se dice que', 'men zegt dat'], ['se habla español', 'hier wordt Spaans gesproken'],
      ['se me olvidó', 'ik ben het vergeten (per ongeluk)'], ['se me cayó', 'het is uit mijn handen gevallen'], ['se me perdió', 'ik ben het kwijtgeraakt'],
      ['se me rompió', 'het is (bij mij) kapotgegaan'], ['se me acabó', 'het is op (bij mij)'], ['a cargo de', 'verantwoordelijk voor, onder leiding van'],
      ['el peaje', 'de tol'], ['la selva', 'het oerwoud'], ['el lago', 'het meer'], ['el mirador', 'het uitkijkpunt'], ['la noticia', 'het nieuwsbericht'],
      ['el periódico', 'de krant'], ['según', 'volgens'], ['la sequía', 'de droogte'], ['la sombrilla', 'de paraplu; de parasol', 'PA · CO · MX'],
      ['¡Qué xopá!', 'hoi, hoe is het?', 'PA (informeel, van ¿qué pasó?)'], ['¡Chuleta!', 'jeetje!, wauw!', 'PA (informeel)'], ['el chantin', 'het huis, thuis', 'PA (informeel)'],
      ['el pelao', 'het kind, de jongen', 'PA (informeel)']
    ],
    grammar: [
      { t: 'Het passief met ser', es: 'La voz pasiva con ser',
        html: `<p>In het passief staat niet de dader centraal, maar <b>wat er gebeurt</b>. Je maakt het met <b>ser + voltooid deelwoord</b>. De dader zet je erachter met <b>por</b>: <i>El canal <b>fue construido</b> por Estados Unidos.</i> (Het kanaal werd door de VS gebouwd.)</p>
<p>📌 Het deelwoord past zich aan het onderwerp aan: <i>la ciudad fue fundad<b>a</b></i>, <i>las esclusas fueron construid<b>as</b></i>.</p>
<p>📌 Dit passief zie je vooral in <b>nieuws, geschiedenis en formele teksten</b>. In een gewoon gesprek zeggen Latijns-Amerikanen liever de actieve zin (<i>Estados Unidos construyó el canal</i>) of een zin met <b>se</b>.</p>
<p>⚠️ Verwar het niet met <b>estar + deelwoord</b>, dat een toestand beschrijft: <i>La tienda <b>fue</b> abierta en 2010</i> (werd geopend) ↔ <i>La tienda <b>está</b> abierta</i> (is open).</p>`,
        table: [['tijd', 'passief', 'betekenis'], ['presente', 'es construido', 'wordt gebouwd'], ['indefinido', 'fue construido', 'werd gebouwd'], ['perfecto', 'ha sido construido', 'is gebouwd'], ['futuro', 'será construido', 'zal worden gebouwd']],
        ex: [['La Ciudad de Panamá fue fundada en 1519.', 'Panama-Stad werd in 1519 gesticht.'], ['Las esclusas nuevas fueron inauguradas en 2016.', 'De nieuwe sluizen werden in 2016 geopend.']],
        sum: 'Voz pasiva: ser + participio (concuerda con el sujeto) + por. Típica de noticias y textos formales.' },
      { t: 'Se + werkwoord: men, je, er wordt…', es: 'La pasiva refleja y el se impersonal',
        html: `<p>Veel vaker dan het passief met ser hoor je <b>se + werkwoord</b>. Het betekent «men…», «je…» of «er wordt…».</p>
<p>Gaat het over een <b>ding</b>, dan past het werkwoord zich daaraan aan: <i>Se <b>vende</b> casa.</i> (Huis te koop.) · <i>Se <b>venden</b> casas.</i> (Huizen te koop.)</p>
<p>Zonder ding, of met een <b>persoon na a</b>, blijft het werkwoord enkelvoud: <i>Aquí se <b>vive</b> bien.</i> (Hier woon je fijn.) · <i>Se <b>busca</b> a los responsables.</i> (Men zoekt de verantwoordelijken.)</p>
<p>Handige vaste vormen: <i>se dice que</i> (men zegt dat), <i>¿cómo se dice…?</i> (hoe zeg je…?), <i>se prohíbe fumar</i> (roken verboden).</p>`,
        table: [['', 'enkelvoud', 'meervoud'], ['ding', 'Se vende carro.', 'Se venden carros.'], ['zonder ding', 'Aquí se come bien.', '—'], ['persoon (a)', 'Se busca a un ingeniero.', 'Se busca a dos ingenieros.']],
        ex: [['En Panamá se usa el dólar.', 'In Panama gebruik je de dollar.'], ['Se dice que el canal da trabajo a miles de personas.', 'Men zegt dat het kanaal duizenden mensen werk geeft.']],
        sum: 'Se + verbo en 3.ª persona: concuerda con la cosa (se venden casas); sin cosa o con «a» + persona, singular.' },
      { t: 'Het «oeps-se»: se me olvidó', es: 'El se accidental',
        html: `<p>Als iets je <b>per ongeluk</b> overkomt, gebruik je <b>se + me/te/le/nos/les + werkwoord</b>. Het ding is het onderwerp; jij bent alleen «degene bij wie het gebeurde». Zo klinkt het minder als jouw schuld.</p>
<p><i>Rompí el vaso.</i> = Ik heb het glas gebroken (misschien expres). <br><i>Se me rompió el vaso.</i> = Het glas is bij mij gebroken (oeps).</p>
<p>📌 Het werkwoord past zich aan het <b>ding</b> aan, niet aan de persoon: <i>Se me <b>cayó</b> el celular.</i> · <i>Se me <b>cayeron</b> las llaves.</i></p>
<p>📌 Met een naam erbij zet je <b>a</b> ervoor: <i>A Mark se le olvidó el pasaporte.</i></p>
<p>Werkwoorden die je zo vaak hoort: <i>olvidar, caer, perder, romper, acabar, quedar</i> (laten liggen): <i>Se me quedó la sombrilla en el taxi.</i></p>`,
        table: [['wie', 'enkelvoud ding', 'meervoud ding'], ['yo', 'se me olvidó', 'se me olvidaron'], ['tú', 'se te olvidó', 'se te olvidaron'], ['él / ella / usted', 'se le olvidó', 'se le olvidaron'], ['nosotros', 'se nos olvidó', 'se nos olvidaron'], ['ellos / ustedes', 'se les olvidó', 'se les olvidaron']],
        ex: [['Perdón, se me olvidó tu nombre.', 'Sorry, ik ben je naam vergeten.'], ['Se nos acabó la gasolina en la carretera.', 'Onze benzine raakte op onderweg.']],
        sum: 'Se accidental: se + me/te/le/nos/les + verbo que concuerda con la cosa: se me cayeron las llaves.' }
    ],
    verbs: ['construir', 'abrir', 'vender', 'descubrir', 'escribir', 'romper', 'caer', 'perder', 'olvidar', 'acabar', 'hacer', 'decir', 'terminar', 'pagar', 'ver'], tenses: ['pret', 'pres'],
    dialogue: {
      t: 'En las esclusas de Miraflores', place: 'Ciudad de Panamá 🇵🇦',
      lines: [
        ['Yaritza', '¡Qué xopá, Mark! Llegaste justo a tiempo: en diez minutos pasa un buque por la esclusa.', 'Hoi Mark! Je bent precies op tijd: over tien minuten gaat er een schip door de sluis.'],
        ['Mark', 'Perdona la demora. Se me perdió la tarjeta del metro y tuve que comprar otra.', 'Sorry dat ik laat ben. Ik was mijn metrokaart kwijt en moest een nieuwe kopen.'],
        ['Yaritza', 'No pasa nada. Mira, ¿sabías que el canal fue inaugurado en 1914?', 'Geeft niks. Kijk, wist je dat het kanaal in 1914 werd geopend?'],
        ['Mark', '¿Y quién lo construyó? Se dice que primero lo intentaron los franceses.', 'En wie heeft het gebouwd? Men zegt dat de Fransen het eerst probeerden.'],
        ['Yaritza', 'Así es. El proyecto fue iniciado por los franceses, pero fue terminado por Estados Unidos. Miles de trabajadores del Caribe murieron en la selva.', 'Klopt. Het project werd door de Fransen begonnen, maar door de Verenigde Staten afgemaakt. Duizenden arbeiders uit het Caribisch gebied stierven in het oerwoud.'],
        ['Mark', '¡Chuleta! ¿Y desde cuándo es de Panamá?', 'Jeetje! En sinds wanneer is het van Panama?'],
        ['Yaritza', 'Desde el 31 de diciembre de 1999. Ese día se celebró en todo el país. Y en 2016 se inauguraron las esclusas nuevas, mucho más grandes.', 'Sinds 31 december 1999. Die dag werd in het hele land feestgevierd. En in 2016 werden de nieuwe, veel grotere sluizen geopend.'],
        ['Mark', '¿Y cuánto se paga por pasar?', 'En hoeveel betaal je om erdoor te varen?'],
        ['Yaritza', 'Depende del buque. Los más grandes pagan cientos de miles de dólares de peaje. Ay, ¡se me olvidó traer el agua!', 'Dat hangt af van het schip. De grootste betalen honderdduizenden dollars tol. Oei, ik ben vergeten water mee te nemen!'],
        ['Mark', 'Tranquila, en el mirador se vende agua. Yo te invito.', 'Rustig maar, bij het uitkijkpunt wordt water verkocht. Ik trakteer.']
      ],
      q: [
        { t: 'mc', q: '¿Por qué llegó tarde Mark?', o: ['Se le perdió la tarjeta del metro', 'Se le olvidó la hora', 'Se le rompió el celular'] },
        { t: 'mc', q: '¿Quién terminó la construcción del canal?', o: ['Estados Unidos', 'Francia', 'Panamá'] },
        { t: 'mc', q: '¿Qué pasó en 2016?', o: ['Se inauguraron las esclusas nuevas', 'El canal pasó a ser de Panamá', 'Se empezó la construcción'] }
      ]
    },
    culture: { t: 'Panamá: het land van het kanaal', html: `<p>🚢 Het <b>Panamakanaal</b> verbindt de Atlantische en de Stille Oceaan. Een schip doet er zo'n 8 tot 10 uur over. Sinds 31 december 1999 is het kanaal helemaal in Panamese handen; daarvoor had de VS het bijna een eeuw lang in beheer.</p>
<p>💵 In Panama betaal je met de <b>Amerikaanse dollar</b>. Het land heeft ook een eigen munt, de <i>balboa</i>, maar die bestaat alleen als munten.</p>
<p>🗣️ Panamezen praten snel en «slikken» vaak de s in, net als in het Caribisch gebied. Groeten doe je met <b>¡Qué xopá!</b> (van <i>¿qué pasó?</i>, met de lettergrepen omgedraaid). Een kind is een <i>pelao</i>, je huis is je <i>chantin</i> en als iets je verbaast, roep je <b>¡Chuleta!</b></p>` },
    ex: [
      { t: 'cloze', s: 'El canal ___ inaugurado en 1914.', a: ['fue'], o: ['fue', 'era', 'estuvo'], nl: 'Het kanaal werd in 1914 geopend.', x: 'Een gebeurtenis op één moment → passief met ser in de indefinido: fue.', tag: 'passive' },
      { t: 'cloze', s: 'Las esclusas nuevas fueron ___ por un consorcio internacional.', h: 'construir', a: ['construidas'], nl: 'De nieuwe sluizen werden door een internationaal consortium gebouwd.', x: 'Het deelwoord past zich aan: las esclusas → construidas.', tag: 'passive' },
      { t: 'cloze', s: 'Cien años de soledad ___ escrita por Gabriel García Márquez.', h: 'ser, indefinido', a: ['fue'], nl: 'Honderd jaar eenzaamheid werd door Gabriel García Márquez geschreven.', tag: 'passive' },
      { t: 'cloze', s: 'En esta tienda se ___ celulares usados.', h: 'vender', a: ['venden'], nl: 'In deze winkel worden gebruikte mobieltjes verkocht.', x: 'Celulares is meervoud → se venden.', tag: 'se-impersonal' },
      { t: 'cloze', s: '¿Cómo se ___ «lock» en español?', h: 'decir', a: ['dice'], nl: 'Hoe zeg je «lock» in het Spaans?', tag: 'se-impersonal' },
      { t: 'cloze', s: 'En Panamá se ___ el dólar.', h: 'usar', a: ['usa', 'utiliza'], nl: 'In Panama gebruik je de dollar.', tag: 'se-impersonal' },
      { t: 'cloze', s: 'Ay, se me ___ las llaves en el taxi.', h: 'olvidar', a: ['olvidaron', 'quedaron'], nl: 'Oei, ik heb mijn sleutels in de taxi laten liggen.', x: 'Las llaves is meervoud → se me olvidaron.', tag: 'se-accidental' },
      { t: 'cloze', s: 'A Mark se ___ cayó el celular en el agua.', a: ['le'], o: ['le', 'lo', 'se'], nl: 'Mark liet zijn mobiel in het water vallen.', x: 'Voor één andere persoon: se le…', tag: 'se-accidental' },
      { t: 'cloze', s: 'Se nos ___ la gasolina en medio de la carretera.', h: 'acabar', a: ['acabó', 'terminó'], nl: 'Onze benzine raakte op midden op de weg.', tag: 'se-accidental' },
      { t: 'mc', q: '«Se me rompió el vaso.» betekent:', o: ['Het glas is (per ongeluk) bij me gebroken.', 'Ik heb het glas expres kapotgemaakt.', 'Het glas is van mij.'], tag: 'se-accidental' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Se venden casas.', 'Se vende casas.', 'Se venden la casa.'], x: 'Casas is meervoud, dus het werkwoord ook.', tag: 'se-impersonal' },
      { t: 'mc', q: 'Waar zie je het passief met ser vooral?', o: ['In nieuws, geschiedenis en formele teksten', 'In gesprekken met vrienden', 'Alleen in Spanje'], tag: 'passive' },
      { t: 'mc', q: 'Welke zin betekent «De winkel werd in 2010 geopend»?', o: ['La tienda fue abierta en 2010.', 'La tienda está abierta en 2010.', 'La tienda se me abrió en 2010.'], x: 'Fue abierta = werd geopend (gebeurtenis). Está abierta = is open (toestand).', tag: 'passive' },
      { t: 'order', s: 'La ciudad fue fundada en el año 1519.', nl: 'De stad werd in het jaar 1519 gesticht.', tag: 'passive' },
      { t: 'tr', nl: 'Ik ben mijn paraplu vergeten.', a: ['Se me olvidó la sombrilla.', 'Se me olvidó el paraguas.', 'Se me quedó la sombrilla.', 'Se me quedó el paraguas.', 'Olvidé la sombrilla.', 'Olvidé el paraguas.'], tag: 'se-accidental' },
      { t: 'tr', nl: 'Hier wordt Spaans gesproken.', a: ['Aquí se habla español.', 'Acá se habla español.', 'Se habla español aquí.', 'Se habla español acá.', 'Se habla español.'], tag: 'se-impersonal' },
      { t: 'match', p: [['la esclusa', 'de sluis'], ['el buque', 'het schip'], ['el peaje', 'de tol'], ['¡Qué xopá!', 'hoi, hoe is het? (PA)'], ['¡Chuleta!', 'jeetje! (PA)']], tag: 'vocab' }
    ],
    say: [['El canal fue inaugurado en 1914.', 'Het kanaal werd in 1914 geopend.'], ['Aquí se habla español.', 'Hier wordt Spaans gesproken.'], ['Perdón, se me olvidó tu nombre.', 'Sorry, ik ben je naam vergeten.'], ['Se me cayó el celular y se me rompió la pantalla.', 'Mijn mobiel viel en het scherm ging kapot.']],
    task: { nl: 'Schrijf een kort nieuwsbericht (6 tot 8 zinnen) over een gebouw, brug of monument in jouw stad. Gebruik minstens twee keer het passief met ser en twee keer se + werkwoord. Vertel aan het eind iets wat je per ongeluk overkwam (se me olvidó, se me cayó…).', model: 'El puente Erasmus de Róterdam fue diseñado por el arquitecto Ben van Berkel y fue inaugurado en 1996. Por su forma, en la ciudad se le conoce como «el Cisne». Desde el puente se ve todo el puerto. Cada año es visitado por miles de turistas. En verano se organizan conciertos y carreras cerca del río. Ayer fui a tomarle fotos, pero se me olvidó cargar la cámara. ¡Qué mala suerte!' },
    scenario: { nl: 'Je bent bij de sluizen van Miraflores en praat met een Panamese gids over de geschiedenis van het kanaal.', role: 'Eres Yaritza, una guía panameña de 30 años que trabaja en el centro de visitantes de las esclusas de Miraflores. Eres simpática y estás orgullosa de tu país. Explicas la historia del canal usando la voz pasiva («fue construido», «fue inaugurado») y el se («se paga», «se dice que»). A veces usas expresiones panameñas como «¡Qué xopá!», «chuleta» y «pelao». Haces preguntas al estudiante y, si se le olvida algo, le enseñas a decir «se me olvidó».', goal: 'Gebruik minstens twee zinnen met het passief (fue + -do) en één met se me … (per ongeluk).' },
    reading: {
      t: 'Un canal con sed', type: 'Nieuwsbericht',
      p: [
        ['Ciudad de Panamá. — Por el canal de Panamá pasa cerca del cinco por ciento del comercio marítimo mundial. Sin embargo, pocas personas saben que cada barco que lo cruza necesita millones de litros de agua dulce.',
          'Panama-Stad. — Door het Panamakanaal gaat ongeveer vijf procent van de wereldwijde zeehandel. Toch weten weinig mensen dat elk schip dat erdoor vaart miljoenen liters zoet water nodig heeft.'],
        ['Esa agua viene del lago Gatún, que fue creado durante la construcción del canal. En cada paso, el agua se usa para subir y bajar los buques en las esclusas, y después se va al mar.',
          'Dat water komt uit het Gatúnmeer, dat tijdens de bouw van het kanaal werd aangelegd. Bij elke doorvaart wordt het water gebruikt om de schepen in de sluizen omhoog en omlaag te brengen, en daarna stroomt het naar zee.'],
        ['En 2023 se registró una de las peores sequías de la historia del país. El número de pasos diarios fue reducido y muchos barcos tuvieron que esperar semanas. Algunas empresas decidieron mandar su carga por otras rutas.',
          'In 2023 werd een van de ergste droogtes uit de geschiedenis van het land gemeten. Het aantal doorvaarten per dag werd verlaagd en veel schepen moesten weken wachten. Sommige bedrijven besloten hun lading via andere routes te sturen.'],
        ['Las esclusas nuevas, inauguradas en 2016, reutilizan parte del agua. Aun así, se buscan nuevas soluciones, como un embalse en el río Indio. «El agua no es solo para los barcos; también es la que se toma en nuestras casas», recuerda una vecina de Colón.',
          'De nieuwe sluizen, geopend in 2016, hergebruiken een deel van het water. Toch wordt er naar nieuwe oplossingen gezocht, zoals een stuwmeer bij de Río Indio. «Het water is niet alleen voor de schepen; het is ook het water dat we thuis drinken», zegt een bewoonster van Colón.']
      ],
      gl: [['el comercio marítimo', 'de zeehandel'], ['el agua dulce', 'het zoete water'], ['registrar', 'meten, optekenen'], ['reutilizar', 'hergebruiken'], ['el embalse', 'het stuwmeer']],
      q: [
        { t: 'mc', q: '¿De dónde viene el agua que usa el canal?', o: ['Del lago Gatún', 'Del mar Caribe', 'Del océano Pacífico'] },
        { t: 'mc', q: '¿Qué pasó durante la sequía de 2023?', o: ['Se redujo el número de barcos por día', 'Se cerró el canal para siempre', 'Se construyeron esclusas nuevas'] },
        { t: 'mc', q: '¿Qué ventaja tienen las esclusas nuevas?', o: ['Reutilizan parte del agua', 'Son gratis', 'No necesitan agua'] },
        { t: 'mc', q: '¿Qué quiere decir la vecina de Colón?', o: ['Que el agua del lago también es para la gente', 'Que los barcos no necesitan agua', 'Que el agua del canal está sucia'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 6 ───────────────────────── */
  U({
    id: 'b2-06', level: 'B2', icon: '🌴', title: '¿Qué tú quieres, mi pana?', nl: 'Caribisch Spaans verstaan: Cuba, Puerto Rico en de Dominicaanse Republiek',
    goals: ['De Caribische uitspraak herkennen: weggevallen s, -ao in plaats van -ado, pa\' in plaats van para', 'Vragen als «¿Qué tú quieres?» begrijpen en zelf stellen', 'Caribische woorden per land kennen (guagua, pana, china, colmado…)'],
    vocab: [
      ['la guagua', 'de bus', 'CU · PR · RD'], ['el pana / la pana', 'de maat, vriend(in)', 'PR · RD · VE · PA'], ['chévere', 'tof, gaaf', 'PR · RD · VE'],
      ['la vaina', 'het ding, gedoe', 'RD · VE · CO'], ['¿Qué lo que?', 'hoe is het?, wat is er?', 'RD (informeel)'], ['¿Qué bolá?', 'hoe is het?', 'CU (informeel)'],
      ['¿Qué es la que hay?', 'hoe gaat het?, wat is er?', 'PR (informeel)'], ['asere', 'maat, makker', 'CU (informeel)'], ['la china', 'de sinaasappel', 'PR'],
      ['la chinola', 'de passievrucht', 'RD'], ['el colmado', 'de buurtwinkel', 'RD · PR'], ['el jevo / la jeva', 'het vriendje / het vriendinnetje', 'PR · RD (informeel)'],
      ['el zafacón', 'de vuilnisbak', 'PR · RD'], ['janguear', 'uitgaan, rondhangen', 'PR (van Engels hang out)'], ['bregar', 'zich redden, ploeteren; regelen', 'PR · RD'],
      ['un chin', 'een klein beetje', 'RD'], ['¡Wepa!', 'joepie!, hup!', 'PR'], ['el plátano', 'de bakbanaan'], ['los tostones', 'gefrituurde schijfjes bakbanaan'],
      ['el mofongo', 'fijngestampte bakbanaan met knoflook', 'PR'], ['el moro', 'rijst met zwarte bonen', 'CU'], ['la yuca', 'de cassave'],
      ['el malecón', 'de boulevard langs de zee'], ['coger la guagua', 'de bus nemen'], ['tremendo / tremenda', 'geweldig; enorm'], ['¿tú sabes?', 'weet je?, snap je?'],
      ['mi amor', 'schat (ook tegen onbekenden)'], ['la bachata', 'de bachata (muziek en dans)', 'RD'], ['comerse las eses', 'de s\'en inslikken'], ['estar cansao', 'moe zijn (uitspraak van cansado)', 'Caribisch, gesproken']
    ],
    grammar: [
      { t: 'De Caribische uitspraak', es: 'La pronunciación caribeña',
        html: `<p>In Cuba, Puerto Rico en de Dominicaanse Republiek (en aan de kust van Venezuela, Colombia en Panama) klinkt Spaans anders dan in Mexico of Bogotá. Je hoeft het niet na te doen, maar wel te <b>verstaan</b>.</p>
<p>📌 <b>De s aan het eind van een lettergreep</b> wordt een zachte h of valt weg: <i>¿cómo estás?</i> → «¿cómo ehtá?», <i>los amigos</i> → «loh amigo».</p>
<p>📌 <b>-ado wordt -ao</b>: <i>cansado</i> → «cansao», <i>pescado</i> → «pescao». En <i>para</i> wordt vaak <b>pa'</b>: «¿Pa' dónde vas?»</p>
<p>📌 In <b>Puerto Rico</b> wordt een r aan het eind van een lettergreep vaak een l: <i>puerta</i> → «puelta», <i>verdad</i> → «veldá». In Havana hoor je soms een dubbele medeklinker: <i>puerta</i> → «puetta».</p>`,
        table: [['geschreven', 'je hoort', 'waar'], ['los amigos', 'loh amigo', 'hele Caribisch gebied'], ['cansado', 'cansao', 'hele Caribisch gebied'], ['para', 'pa\'', 'hele Caribisch gebied'], ['puerta', 'puelta', 'Puerto Rico'], ['puerta', 'puetta', 'Cuba']],
        ex: [['¿Pa\' dónde tú vas?', 'Waar ga jij naartoe?'], ['Estoy cansao, mi pana.', 'Ik ben moe, maat.']],
        sum: 'En el Caribe la -s final se aspira o se pierde, -ado suena -ao y «para» suena «pa\'». En Puerto Rico la -r final puede sonar -l.' },
      { t: 'Vragen zonder omdraaien: ¿Qué tú quieres?', es: 'El sujeto antes del verbo',
        html: `<p>In de meeste landen zet je het onderwerp in een vraag <b>achter</b> het werkwoord, of laat je het weg: <i>¿Qué quieres (tú)?</i></p>
<p>In het Caribisch gebied blijft <b>tú vóór het werkwoord</b> staan: <i>¿Qué <b>tú</b> quieres?</i> · <i>¿Dónde <b>tú</b> vives?</i> · <i>¿Cómo <b>tú</b> te llamas?</i></p>
<p>Ook zeggen Caribiërs vaker <b>yo, tú, él</b> waar anderen het voornaamwoord weglaten. Een verklaring: door de weggevallen s klinken <i>está</i> en <i>estás</i> hetzelfde, dus het voornaamwoord maakt duidelijk wie er bedoeld wordt.</p>
<p>Je hoort zelfs <b>para + onderwerp + infinitief</b>: <i>Te lo explico <b>para tú entender</b>.</i> (Ik leg het uit zodat jij het begrijpt.) Elders zeg je <i>para que entiendas</i>.</p>`,
        table: [['Mexico / Colombia', 'Caribisch gebied'], ['¿Qué quieres?', '¿Qué tú quieres?'], ['¿Dónde vives?', '¿Dónde tú vives?'], ['para que entiendas', 'para tú entender']],
        ex: [['¿Y qué tú haces por aquí?', 'En wat doe jij hier?'], ['¿De dónde tú eres?', 'Waar kom jij vandaan?']],
        sum: 'En el Caribe se dice «¿Qué tú quieres?»: el pronombre va antes del verbo y se usa más que en otros países.' },
      { t: 'Hetzelfde ding, ander woord', es: 'Palabras de cada país',
        html: `<p>Veel gewone dingen hebben in elk land een eigen woord. In het Caribisch gebied valt vooral de <b>guagua</b> (bus) op, en in Puerto Rico de <b>china</b> (sinaasappel).</p>
<p>📌 <i>Coger</i> (nemen, pakken) is in het Caribisch gebied en Colombia heel gewoon: <i>coger la guagua</i>. In Mexico en Argentinië is het een plat woord; zeg daar <i>tomar el camión / el colectivo</i>.</p>
<p>📌 <i>Mi amor</i> en <i>mi vida</i> zeggen verkopers en buschauffeurs ook tegen onbekenden. Dat is gewoon vriendelijk, niet vrijpostig.</p>`,
        table: [['', 'bus', 'vriend', 'sinaasappel'], ['Caribisch', 'la guagua', 'el pana, asere (CU)', 'la china (PR)'], ['Mexico', 'el camión', 'el cuate', 'la naranja'], ['Colombia', 'el bus', 'el parce', 'la naranja'], ['Argentinië', 'el colectivo', 'el amigo', 'la naranja']],
        ex: [['Vamos a coger la guagua al malecón.', 'We nemen de bus naar de boulevard.'], ['Dame un jugo de china, por favor.', 'Een sinaasappelsap, alsjeblieft.']],
        sum: 'Guagua = bus (CU, PR, RD). China = naranja (PR). «Coger» es normal en el Caribe, pero evítalo en México y Argentina.' }
    ],
    verbs: ['querer', 'vivir', 'estar', 'ser', 'tener', 'hacer', 'ir', 'saber', 'decir', 'poder', 'comer', 'hablar'], tenses: ['pres'],
    dialogue: {
      t: 'Esperando la guagua', place: 'San Juan 🇵🇷',
      lines: [
        ['Coralis', '¡Wepa, Mark! ¿Qué es la que hay? ¿Qué tú haces por aquí?', 'Hé Mark! Hoe is het? Wat doe jij hier?'],
        ['Mark', 'Hola, Coralis. Estoy esperando la guagua para ir a la playa, pero no llega.', 'Hoi Coralis. Ik wacht op de bus naar het strand, maar hij komt niet.'],
        ['Coralis', 'Ay, mi amor, aquí la guagua llega cuando quiere. ¿Pa\' dónde tú vas?', 'Ach schat, hier komt de bus wanneer hij zin heeft. Waar ga jij naartoe?'],
        ['Mark', 'A Ocean Park. Un pana me dijo que es la mejor playa de San Juan.', 'Naar Ocean Park. Een maat zei dat het het beste strand van San Juan is.'],
        ['Coralis', 'Es chévere, sí. Pero mira, yo tengo carro. Si quieres, te llevo ahorita y de camino comemos un mofongo.', 'Het is tof, ja. Maar kijk, ik heb een auto. Als je wilt, breng ik je zo en eten we onderweg een mofongo.'],
        ['Mark', 'Perdona, ¿un qué? Es que hablas muy rápido y no oigo las eses.', 'Sorry, een wat? Je praat zo snel en ik hoor de s\'en niet.'],
        ['Coralis', '¡Jajaja! Es que aquí nos comemos las eses. Un mofongo es plátano majado con ajo. Es tremendo.', 'Haha! Hier slikken we de s\'en nu eenmaal in. Een mofongo is fijngestampte bakbanaan met knoflook. Het is geweldig.'],
        ['Mark', '¿Y qué tú me recomiendas para tomar?', 'En wat raad jij me aan om te drinken?'],
        ['Coralis', 'Un jugo de china bien frío. China es naranja, ¿tú sabes? Después vamos a janguear a La Placita.', 'Een ijskoud sinaasappelsap. China is sinaasappel, weet je? Daarna gaan we uit op La Placita.'],
        ['Mark', '¡Dale! Pero hoy no bailo, que estoy cansao.', 'Oké! Maar vandaag dans ik niet, want ik ben moe.']
      ],
      q: [
        { t: 'mc', q: '¿Por qué Mark no entiende bien a Coralis?', o: ['Porque ella habla rápido y no pronuncia las eses', 'Porque ella habla inglés', 'Porque hay mucho ruido en la calle'] },
        { t: 'mc', q: '¿Qué es la «china» en Puerto Rico?', o: ['Una naranja', 'Una muchacha de China', 'Un tipo de guagua'] },
        { t: 'mc', q: '¿Cómo van a ir a la playa?', o: ['En el carro de Coralis', 'En guagua', 'Caminando'] }
      ]
    },
    culture: { t: 'Drie eilanden, één zee', html: `<p>🇨🇺 In <b>Cuba</b> groet je een vriend met <i>¿Qué bolá, asere?</i>. Je hoort er veel salsa en son, en in Havana rijden nog steeds oude Amerikaanse auto's uit de jaren vijftig.</p>
<p>🇵🇷 <b>Puerto Rico</b> hoort bij de Verenigde Staten, maar thuis en op straat spreekt bijna iedereen Spaans. Daardoor zitten er veel Engelse woorden in het dagelijks Spaans: <i>janguear</i> (hang out), <i>parquear</i> (parkeren), <i>el bizcocho de birthday</i>. Reggaeton werd groot in San Juan.</p>
<p>🇩🇴 In de <b>Dominicaanse Republiek</b> zeg je <i>¿Qué lo que?</i> en koop je alles in de <i>colmado</i> op de hoek, waar ook muziek speelt en buren samenkomen. Bachata en merengue komen hiervandaan.</p>
<p>🇵🇦 Ook aan de kust van <b>Panama</b>, Colombia en Venezuela klinkt het Spaans zo: wie Caribisch Spaans verstaat, verstaat ook een Panamees.</p>` },
    ex: [
      { t: 'mc', q: 'Een Puerto Ricaan zegt «Estoy cansao». Wat bedoelt hij?', o: ['Estoy cansado.', 'Estoy casado.', 'Estoy cansando.'], x: 'Caribisch: -ado klinkt als -ao.', tag: 'caribe' },
      { t: 'mc', q: 'Je hoort «loh amigo». Wat wordt er gezegd?', o: ['los amigos', 'lo amigo', 'la amiga'], x: 'De s aan het eind van een lettergreep wordt een zachte h of valt weg.', tag: 'caribe' },
      { t: 'mc', q: 'In Puerto Rico klinkt «puerta» vaak als:', o: ['puelta', 'puesta', 'pueda'], tag: 'caribe' },
      { t: 'mc', q: '«¿Dónde tú vives?» zeg je in Mexico of Colombia meestal als:', o: ['¿Dónde vives?', '¿Dónde vive tú?', '¿Tú dónde vivir?'], tag: 'caribe' },
      { t: 'mc', q: '«¿Qué bolá, asere?» hoor je vooral in:', o: ['Cuba', 'Argentinië', 'Mexico'], tag: 'caribe' },
      { t: 'mc', q: '«¿Qué lo que?» betekent:', o: ['Hoe is het?, wat is er?', 'Wat is dat?', 'Wie is dat?'], tag: 'caribe' },
      { t: 'mc', q: 'Wat bestel je in Puerto Rico als je sinaasappelsap wilt?', o: ['un jugo de china', 'un jugo de chinola', 'un jugo de yuca'], x: 'Chinola is passievrucht (RD).', tag: 'vocab' },
      { t: 'mc', q: 'Waar kun je «coger» (nemen) beter vermijden?', o: ['In Mexico en Argentinië', 'In Cuba en Puerto Rico', 'In Colombia'], tag: 'vocab' },
      { t: 'cloze', s: 'Voy a coger la ___ para ir al centro.', a: ['guagua'], o: ['guagua', 'china', 'vaina'], nl: 'Ik neem de bus naar het centrum.', tag: 'vocab' },
      { t: 'cloze', s: '¿Qué ___ quieres comer, mi pana?', a: ['tú'], o: ['tú', 'te', 'ti'], nl: 'Wat wil jij eten, maat?', x: 'Caribisch: het onderwerp blijft in de vraag vóór het werkwoord.', tag: 'caribe' },
      { t: 'cloze', s: 'Ella es mi ___; la conozco desde la escuela.', a: ['pana'], o: ['pana', 'guagua', 'vaina'], nl: 'Zij is mijn maatje; ik ken haar al van school.', tag: 'vocab' },
      { t: 'cloze', s: 'Pásame esa ___ que está en la mesa.', a: ['vaina'], o: ['vaina', 'guagua', 'chinola'], nl: 'Geef me dat ding op tafel even aan.', tag: 'vocab' },
      { t: 'cloze', s: 'Esta noche vamos a ___ en La Placita.', a: ['janguear'], o: ['janguear', 'bregar', 'coger'], nl: 'Vanavond gaan we uit op La Placita.', tag: 'vocab' },
      { t: 'order', s: '¿Qué tú vas a hacer esta noche?', nl: 'Wat ga jij vanavond doen?', tag: 'caribe' },
      { t: 'tr', nl: 'Waar kom jij vandaan? (Caribisch: tú vóór het werkwoord)', a: ['¿De dónde tú eres?'], tag: 'caribe' },
      { t: 'tr', nl: 'Wat wil jij? (Caribisch: tú vóór het werkwoord)', a: ['¿Qué tú quieres?'], tag: 'caribe' },
      { t: 'match', p: [['la guagua', 'de bus'], ['la china', 'de sinaasappel (PR)'], ['el colmado', 'de buurtwinkel'], ['el zafacón', 'de vuilnisbak'], ['janguear', 'uitgaan']], tag: 'vocab' }
    ],
    say: [['¿Qué tú quieres comer?', 'Wat wil jij eten?'], ['Voy a coger la guagua.', 'Ik neem de bus.'], ['Ella es mi pana.', 'Zij is mijn maatje.'], ['Perdona, ¿me lo puedes repetir más despacio?', 'Sorry, kun je het langzamer herhalen?']],
    task: { nl: 'Je bent een week in San Juan of Santo Domingo. Schrijf een bericht van 6 tot 8 zinnen aan een vriend over wat je hoorde en zag. Gebruik minstens vier Caribische woorden (guagua, pana, chévere, colmado…) en één vraag in Caribische stijl (¿Qué tú…?).', model: '¡Hola, pana! Llevo una semana en Santo Domingo y todo es chévere. Aquí la gente se come las eses y al principio no entendía nada. Ayer cogí la guagua al malecón y un señor me preguntó: «¿De dónde tú eres?». En el colmado de la esquina compro jugo de chinola todos los días. Por la noche la gente baila bachata en la calle. ¿Y qué tú haces? ¿Cuándo vienes?' },
    scenario: { nl: 'Je bent in Santo Domingo en vraagt in een colmado de weg naar de boulevard. De eigenaar praat snel en Caribisch.', role: 'Eres Wilson, el dueño dominicano de un colmado en la Zona Colonial de Santo Domingo. Tienes 50 años, eres muy amable y hablas rápido, con expresiones dominicanas como «¿Qué lo que?», «un chin», «vaina», «chévere» y «mi pana». Haces preguntas como «¿Qué tú quieres?» y «¿De dónde tú eres?». Si el estudiante no entiende, repites más despacio y le explicas la palabra.', goal: 'Vraag de weg en koop iets te drinken; vraag één keer om uitleg van een Dominicaans woord.' },
    reading: {
      t: '¿Por qué nos comemos las eses?', type: 'Blog van een taalcoach',
      p: [
        ['«¿Cómo ehtá? ¿Tú ehtá bien?» Si viajas a Cuba, Puerto Rico o la República Dominicana, vas a oír frases como esta. No es que la gente hable mal: el español del Caribe tiene sus propias reglas, igual que el de México o el de Argentina.',
          '«Hoe is het? Gaat het goed met je?» Als je naar Cuba, Puerto Rico of de Dominicaanse Republiek reist, hoor je zulke zinnen. Het is niet zo dat mensen slecht praten: het Spaans van het Caribisch gebied heeft zijn eigen regels, net als dat van Mexico of Argentinië.'],
        ['La característica más famosa es la ese al final de la sílaba, que se pronuncia como una hache suave o desaparece. Por eso «los amigos» suena como «loh amigo». Esto también pasa en la costa de Venezuela, Colombia y Panamá.',
          'Het bekendste kenmerk is de s aan het eind van een lettergreep, die als een zachte h wordt uitgesproken of verdwijnt. Daarom klinkt «los amigos» als «loh amigo». Dat gebeurt ook aan de kust van Venezuela, Colombia en Panama.'],
        ['Como las eses se pierden, a veces no se sabe si alguien dice «está» o «estás». Muchos lingüistas creen que por eso los caribeños usan más los pronombres: «tú estás», «¿qué tú quieres?». Así queda claro quién hace qué.',
          'Omdat de s\'en wegvallen, weet je soms niet of iemand «está» of «estás» zegt. Veel taalkundigen denken dat Caribiërs daarom vaker voornaamwoorden gebruiken: «tú estás», «¿qué tú quieres?». Zo is duidelijk wie wat doet.'],
        ['Mi consejo: no intentes imitar todo desde el primer día. Escucha mucha música, como bachata, salsa o reguetón, y fíjate en el contexto. Y si no entiendes, pregunta sin miedo: «Perdona, ¿me lo puedes repetir más despacio?». Nadie se va a molestar.',
          'Mijn advies: probeer niet alles vanaf de eerste dag na te doen. Luister veel muziek, zoals bachata, salsa of reggaeton, en let op de context. En als je iets niet begrijpt, vraag het gerust: «Sorry, kun je het langzamer herhalen?». Niemand neemt je dat kwalijk.']
      ],
      gl: [['la sílaba', 'de lettergreep'], ['desaparecer', 'verdwijnen'], ['el lingüista / la lingüista', 'de taalkundige'], ['imitar', 'nadoen, imiteren'], ['fijarse en', 'letten op']],
      q: [
        { t: 'mc', q: '¿Qué pasa con la ese en el Caribe?', o: ['Suena como una hache suave o desaparece', 'Suena como una zeta', 'Se pronuncia más fuerte'] },
        { t: 'mc', q: 'Según muchos lingüistas, ¿por qué los caribeños usan más los pronombres?', o: ['Porque sin las eses no siempre queda claro quién hace qué', 'Porque es más formal', 'Porque lo aprendieron del inglés'] },
        { t: 'mc', q: '¿Dónde más se oye esta pronunciación?', o: ['En la costa de Venezuela, Colombia y Panamá', 'En Buenos Aires', 'En el centro de México'] },
        { t: 'mc', q: '¿Qué recomienda la autora?', o: ['Escuchar música y preguntar sin miedo', 'Imitar todo desde el primer día', 'Evitar hablar con caribeños'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 7 ───────────────────────── */
  U({
    id: 'b2-07', level: 'B2', icon: '✉️', title: 'Le agradecería que…', nl: 'Formeel Spaans: e-mails, sollicitaties en beleefde verzoeken',
    goals: ['Een formele e-mail openen en afsluiten (Estimada señora…, Quedo a la espera…)', 'Beleefd vragen met quisiera, podría en le agradecería que + imperfecto de subjuntivo', 'Formele verbindingswoorden gebruiken: en cuanto a, no obstante, por lo tanto, asimismo'],
    vocab: [
      ['estimado / estimada', 'geachte (aanhef)'], ['a quien corresponda', 'aan wie het aangaat'], ['le escribo para…', 'ik schrijf u om…'], ['quedo a la espera de su respuesta', 'ik zie uw antwoord graag tegemoet'],
      ['atentamente', 'met vriendelijke groet (formeel)'], ['saludos cordiales', 'hartelijke groet (zakelijk)'], ['adjuntar', 'bijvoegen (bijlage)'], ['adjunto le envío…', 'bijgaand stuur ik u…'],
      ['el archivo adjunto', 'de bijlage'], ['la hoja de vida', 'het cv', 'CO · Midden-Amerika; MX: el currículum'], ['el currículum', 'het cv'], ['la vacante', 'de vacature'],
      ['postularse a', 'solliciteren naar', 'LatAm; ES: presentarse a'], ['la postulación', 'de sollicitatie', 'LatAm'], ['el puesto', 'de functie, baan'], ['la experiencia laboral', 'de werkervaring'],
      ['disponible', 'beschikbaar'], ['la disponibilidad', 'de beschikbaarheid'], ['a la brevedad', 'zo spoedig mogelijk', 'LatAm (formeel)'], ['agradecer', 'bedanken, dankbaar zijn voor'],
      ['le agradecería que…', 'ik zou het waarderen als u…'], ['quisiera', 'ik zou graag willen'], ['¿podría…?', 'zou u kunnen…?'], ['en cuanto a', 'wat betreft'],
      ['no obstante', 'echter, niettemin'], ['por lo tanto', 'daarom, dus'], ['asimismo', 'eveneens, tevens'], ['cabe destacar que', 'het is goed om te vermelden dat'],
      ['de antemano', 'bij voorbaat'], ['la entrevista', 'het sollicitatiegesprek, interview'], ['el licenciado / la licenciada', 'meneer/mevrouw (titel voor iemand met een universitaire studie)', 'MX · Midden-Amerika'],
      ['la cita', 'de afspraak'], ['agendar una cita', 'een afspraak inplannen', 'LatAm'], ['el trámite', 'de formaliteit, procedure']
    ],
    grammar: [
      { t: 'Een formele e-mail', es: 'El correo formal',
        html: `<p>Een formele e-mail in het Spaans heeft vaste onderdelen. Je schrijft altijd met <b>usted</b> (of <b>ustedes</b>) en je gebruikt geen afkortingen.</p>
<p>📌 <b>Aanhef</b>: <i>Estimada señora Ramírez:</i> · <i>Estimado licenciado Torres:</i> · <i>A quien corresponda:</i> (als je de naam niet weet). Let op: na de aanhef komt een <b>dubbele punt</b>, geen komma.</p>
<p>📌 <b>Opening</b>: <i>Le escribo para…</i> (Ik schrijf u om…) · <i>Me pongo en contacto con usted para…</i></p>
<p>📌 <b>Afsluiting</b>: <i>Quedo a la espera de su respuesta.</i> · <i>Agradezco de antemano su atención.</i> en dan <i>Atentamente,</i> of <i>Saludos cordiales,</i> met je naam.</p>
<p>📌 In Mexico en Midden-Amerika spreek je iemand met een universitaire studie vaak aan met <b>licenciado / licenciada</b> (afgekort <i>Lic.</i>), een ingenieur met <b>ingeniero</b> (<i>Ing.</i>).</p>`,
        table: [['onderdeel', 'formeel', 'informeel'], ['aanhef', 'Estimada señora López:', '¡Hola, Ana!'], ['opening', 'Le escribo para…', 'Te escribo porque…'], ['afsluiting', 'Quedo a la espera de su respuesta.', 'Espero tu respuesta.'], ['groet', 'Atentamente, / Saludos cordiales,', 'Un abrazo, / Besos,']],
        ex: [['Estimada señora Ramírez: le escribo para postularme a la vacante de profesor.', 'Geachte mevrouw Ramírez, ik schrijf u om te solliciteren naar de vacature van docent.'], ['Adjunto le envío mi currículum. Quedo a la espera de su respuesta.', 'Bijgaand stuur ik u mijn cv. Ik zie uw antwoord graag tegemoet.']],
        sum: 'Correo formal: «Estimado/a + nombre:», «Le escribo para…», «Quedo a la espera de su respuesta», «Atentamente,». Siempre usted.' },
      { t: 'Beleefd vragen: quisiera, podría, le agradecería que', es: 'La cortesía: condicional e imperfecto de subjuntivo',
        html: `<p>Een gewone vraag (<i>¿Me manda la información?</i>) klinkt in een formele brief snel te direct. Maak hem zachter met de <b>condicional</b> of de <b>imperfecto de subjuntivo</b>:</p>
<p>📌 <b>¿Podría</b> + infinitief? → <i>¿Podría enviarme más información?</i> (Zou u me meer informatie kunnen sturen?)</p>
<p>📌 <b>Quisiera</b> + infinitief → <i>Quisiera solicitar una cita.</i> (Ik zou graag een afspraak willen.) <i>Quisiera</i> is nog iets beleefder dan <i>querría</i> of <i>me gustaría</i>.</p>
<p>📌 <b>Le agradecería que</b> + <b>imperfecto de subjuntivo</b> → <i>Le agradecería que me respondiera a la brevedad.</i> (Ik zou het waarderen als u zo spoedig mogelijk antwoordt.) De hoofdzin staat in de condicional, dus de bijzin krijgt de imperfecto de subjuntivo, net als in B2 · 2.</p>
<p>⚠️ Fout: <s>Le agradecería que me responda</s>. Na <i>agradecería que</i> hoort <i>respondiera</i>.</p>`,
        table: [['direct', 'beleefd'], ['Mándeme el formulario.', '¿Podría mandarme el formulario?'], ['Quiero una cita.', 'Quisiera agendar una cita.'], ['Respóndame pronto.', 'Le agradecería que me respondiera pronto.']],
        ex: [['Le agradecería que me confirmara la fecha de la entrevista.', 'Ik zou het waarderen als u de datum van het gesprek bevestigt.'], ['¿Podría decirme qué documentos necesito?', 'Zou u me kunnen zeggen welke documenten ik nodig heb?']],
        sum: 'Cortesía: ¿Podría…?, quisiera + infinitivo, le agradecería que + imperfecto de subjuntivo (que me respondiera).' },
      { t: 'Formele verbindingswoorden', es: 'Conectores del registro formal',
        html: `<p>In een formele tekst gebruik je andere verbindingswoorden dan in een gesprek. Ze maken je e-mail of brief helder en volwassen.</p>
<p>📌 <b>En cuanto a</b> = wat betreft: <i>En cuanto a mi experiencia, trabajé cinco años en ventas.</i></p>
<p>📌 <b>No obstante</b> = echter (formeler dan <i>pero</i> of <i>sin embargo</i>): <i>El puesto me interesa mucho. No obstante, solo estoy disponible a partir de marzo.</i></p>
<p>📌 <b>Por lo tanto</b> = daarom, dus: <i>Hablo inglés y neerlandés; por lo tanto, puedo atender a clientes europeos.</i></p>
<p>📌 <b>Asimismo</b> = eveneens, ook: <i>Asimismo, adjunto dos cartas de recomendación.</i></p>
<p>📌 <b>Cabe destacar que</b> = het is goed om te vermelden dat: <i>Cabe destacar que tengo experiencia con grupos grandes.</i></p>`,
        table: [['in een gesprek', 'formeel', 'betekenis'], ['pero', 'no obstante', 'maar, echter'], ['por eso', 'por lo tanto', 'daarom'], ['también', 'asimismo', 'ook, eveneens'], ['sobre…', 'en cuanto a…', 'wat betreft…']],
        ex: [['En cuanto al horario, tengo disponibilidad por las mañanas.', 'Wat het rooster betreft, ben ik \'s ochtends beschikbaar.'], ['Me interesa el puesto; no obstante, quisiera saber más sobre el salario.', 'De functie interesseert me; ik zou echter graag meer weten over het salaris.']],
        sum: 'Conectores formales: en cuanto a (sobre), no obstante (pero), por lo tanto (por eso), asimismo (también), cabe destacar que.' }
    ],
    verbs: ['poder', 'querer', 'responder', 'enviar', 'escribir', 'decir', 'tener', 'ser', 'estar', 'hablar', 'mandar', 'llamar'], tenses: ['cond', 'impsubj'],
    dialogue: {
      t: 'Una entrevista por videollamada', place: 'Ciudad de México 🇲🇽',
      lines: [
        ['Entrevistadora', 'Buenos días, señor Mark. Gracias por conectarse a tiempo. ¿Me escucha bien?', 'Goedemorgen, meneer Mark. Bedankt dat u op tijd bent ingelogd. Hoort u me goed?'],
        ['Mark', 'Buenos días, licenciada. Sí, la escucho perfectamente. Gracias por la invitación.', 'Goedemorgen, mevrouw. Ja, ik hoor u perfect. Bedankt voor de uitnodiging.'],
        ['Entrevistadora', 'Leí su currículum con mucho interés. ¿Por qué se postuló a esta vacante?', 'Ik heb uw cv met veel interesse gelezen. Waarom heeft u gesolliciteerd naar deze vacature?'],
        ['Mark', 'Porque me encanta enseñar idiomas. En cuanto a mi experiencia, di clases de neerlandés durante tres años.', 'Omdat ik het geweldig vind om talen te geven. Wat mijn ervaring betreft: ik heb drie jaar Nederlandse les gegeven.'],
        ['Entrevistadora', 'Muy bien. Cabe destacar que aquí la mayoría de los alumnos son adultos que trabajan. ¿Tiene disponibilidad por las tardes?', 'Heel goed. Het is goed om te weten dat de meeste leerlingen hier volwassenen zijn die werken. Bent u \'s middags en \'s avonds beschikbaar?'],
        ['Mark', 'Sí, por las tardes no hay problema. No obstante, quisiera saber si también hay clases en línea.', 'Ja, \'s middags is geen probleem. Ik zou echter graag weten of er ook online lessen zijn.'],
        ['Entrevistadora', 'Claro, la mitad de los cursos son en línea. Por lo tanto, podría trabajar algunos días desde casa.', 'Zeker, de helft van de cursussen is online. U zou dus een paar dagen thuis kunnen werken.'],
        ['Mark', '¡Qué bien! ¿Podría decirme cuándo empezaría el contrato?', 'Wat fijn! Zou u me kunnen zeggen wanneer het contract zou beginnen?'],
        ['Entrevistadora', 'En febrero. Le agradecería que me mandara dos cartas de recomendación antes del viernes.', 'In februari. Ik zou het waarderen als u me vóór vrijdag twee aanbevelingsbrieven stuurt.'],
        ['Mark', 'Con mucho gusto. Se las envío a la brevedad. Muchas gracias por su tiempo.', 'Met plezier. Ik stuur ze u zo spoedig mogelijk. Hartelijk dank voor uw tijd.']
      ],
      q: [
        { t: 'mc', q: '¿Qué experiencia tiene Mark?', o: ['Dio clases de neerlandés durante tres años', 'Trabajó en ventas en México', 'Nunca ha enseñado'] },
        { t: 'mc', q: '¿Qué quería saber Mark?', o: ['Si también hay clases en línea', 'Cuánto es el salario', 'Dónde está la escuela'] },
        { t: 'mc', q: '¿Qué le pide la entrevistadora a Mark?', o: ['Dos cartas de recomendación antes del viernes', 'Que empiece mañana', 'Que mande su currículum otra vez'] }
      ]
    },
    culture: { t: 'Licenciado, ingeniero y «usted»', html: `<p>🎓 In <b>Mexico</b> en grote delen van Midden-Amerika zijn titels belangrijk. Wie gestudeerd heeft, is <i>licenciado</i> of <i>licenciada</i>, en in een e-mail schrijf je <i>Estimado Lic. Torres</i> of <i>Estimada Ing. Pérez</i>. Een titel weglaten kan onbeleefd overkomen.</p>
<p>✉️ Formele e-mails zijn in Latijns-Amerika vaak <b>warmer en langer</b> dan in Nederland. Een korte zakelijke mail zonder groet of beleefdheidszin (<i>Espero que se encuentre bien</i>) kan bot klinken.</p>
<p>🗣️ In een sollicitatiegesprek gebruik je <b>usted</b> tot de ander voorstelt om <i>tú</i> te zeggen (<i>Puedes tutearme</i>). In Colombia en Costa Rica blijft men zelfs onder collega's vaak bij <i>usted</i>.</p>
<p>📄 Een cv heet in Mexico <i>currículum</i> of <i>CV</i>, in Colombia en Midden-Amerika vaak <i>hoja de vida</i>. Solliciteren is in Latijns-Amerika <i>postularse</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Le agradecería que me ___ la fecha de la entrevista.', h: 'confirmar, usted', a: ['confirmara'], nl: 'Ik zou het waarderen als u de datum van het gesprek bevestigt.', x: 'Na «le agradecería que» volgt de imperfecto de subjuntivo.', tag: 'register' },
      { t: 'cloze', s: 'Le agradecería que me ___ a la brevedad.', h: 'responder, usted', a: ['respondiera', 'contestara'], nl: 'Ik zou het waarderen als u zo spoedig mogelijk antwoordt.', tag: 'register' },
      { t: 'cloze', s: '¿___ enviarme más información sobre el puesto?', a: ['Podría'], o: ['Podría', 'Puede que', 'Pudiera que'], nl: 'Zou u me meer informatie over de functie kunnen sturen?', tag: 'register' },
      { t: 'cloze', s: '___ agendar una cita para la próxima semana.', a: ['Quisiera'], o: ['Quisiera', 'Quiera', 'Quise'], nl: 'Ik zou graag een afspraak inplannen voor volgende week.', tag: 'register' },
      { t: 'cloze', s: 'El puesto me interesa mucho; ___, solo puedo empezar en marzo.', a: ['no obstante'], o: ['no obstante', 'por lo tanto', 'asimismo'], nl: 'De functie interesseert me erg; ik kan echter pas in maart beginnen.', tag: 'connectors' },
      { t: 'cloze', s: 'Hablo cuatro idiomas; ___, puedo atender a clientes de muchos países.', a: ['por lo tanto'], o: ['por lo tanto', 'no obstante', 'en cuanto a'], nl: 'Ik spreek vier talen; daarom kan ik klanten uit veel landen helpen.', tag: 'connectors' },
      { t: 'cloze', s: '___ al horario, tengo disponibilidad por las mañanas.', a: ['En cuanto'], o: ['En cuanto', 'No obstante', 'Por lo tanto'], nl: 'Wat het rooster betreft, ben ik \'s ochtends beschikbaar.', tag: 'connectors' },
      { t: 'cloze', s: '___ le envío mi hoja de vida.', a: ['Adjunto'], o: ['Adjunto', 'Atentamente', 'Estimado'], nl: 'Bijgaand stuur ik u mijn cv.', tag: 'register' },
      { t: 'mc', q: 'Hoe begin je een formele e-mail als je de naam niet weet?', o: ['A quien corresponda:', 'Querido amigo:', '¡Hola a todos!'], tag: 'register' },
      { t: 'mc', q: 'Welke afsluiting past bij een sollicitatiebrief?', o: ['Quedo a la espera de su respuesta. Atentamente,', 'Nos vemos, besos.', 'Chao, un abrazo.'], tag: 'register' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Le agradecería que me llamara.', 'Le agradecería que me llame.', 'Le agradecería que me llamaría.'], x: 'Hoofdzin in de condicional → bijzin in de imperfecto de subjuntivo.', tag: 'register' },
      { t: 'mc', q: '«Asimismo» betekent:', o: ['eveneens, ook', 'echter', 'daarom'], tag: 'connectors' },
      { t: 'mc', q: 'Wat zet je in het Spaans na de aanhef «Estimada señora López»?', o: ['een dubbele punt (:)', 'een komma (,)', 'een uitroepteken (!)'], tag: 'register' },
      { t: 'order', s: 'Quedo a la espera de su respuesta.', nl: 'Ik zie uw antwoord graag tegemoet.', tag: 'register' },
      { t: 'tr', nl: 'Zou u me kunnen zeggen welke documenten ik nodig heb?', a: ['¿Podría decirme qué documentos necesito?', '¿Me podría decir qué documentos necesito?', '¿Podría usted decirme qué documentos necesito?'], tag: 'register' },
      { t: 'tr', nl: 'Ik zou het waarderen als u me het formulier stuurt.', a: ['Le agradecería que me enviara el formulario.', 'Le agradecería que me mandara el formulario.', 'Le agradecería que me enviara el formulario', 'Le agradecería mucho que me enviara el formulario.'], tag: 'register' },
      { t: 'match', p: [['no obstante', 'echter'], ['por lo tanto', 'daarom'], ['en cuanto a', 'wat betreft'], ['adjuntar', 'bijvoegen'], ['a la brevedad', 'zo spoedig mogelijk']], tag: 'vocab' }
    ],
    say: [['Le escribo para postularme a la vacante.', 'Ik schrijf u om te solliciteren naar de vacature.'], ['¿Podría enviarme más información, por favor?', 'Zou u me meer informatie kunnen sturen, alstublieft?'], ['Le agradecería que me respondiera a la brevedad.', 'Ik zou het waarderen als u zo spoedig mogelijk antwoordt.'], ['Quedo a la espera de su respuesta. Atentamente, Mark.', 'Ik zie uw antwoord graag tegemoet. Met vriendelijke groet, Mark.']],
    task: { nl: 'Schrijf een formele e-mail van 7 tot 9 zinnen aan een taalschool in Mexico-Stad: je solliciteert naar een vacature als docent. Gebruik een formele aanhef en afsluiting, «le agradecería que + imperfecto de subjuntivo», «¿podría…?» en minstens drie formele verbindingswoorden (en cuanto a, no obstante, por lo tanto, asimismo).', model: 'Estimada licenciada Ramírez: Le escribo para postularme a la vacante de profesor de neerlandés que vi en su página web. En cuanto a mi experiencia, di clases a adultos durante tres años en Utrecht. Asimismo, hablo español, inglés y alemán; por lo tanto, puedo explicar la gramática en varios idiomas. Tengo disponibilidad por las tardes. No obstante, solo podría empezar a partir de febrero. ¿Podría decirme si también hay clases en línea? Adjunto le envío mi currículum. Le agradecería que me respondiera a la brevedad. Quedo a la espera de su respuesta. Atentamente, Mark.' },
    scenario: { nl: 'Je hebt een sollicitatiegesprek (videobellen) bij een taalschool in Mexico-Stad. Blijf formeel en gebruik usted.', role: 'Eres la licenciada Gabriela Ramírez, directora de recursos humanos de una escuela de idiomas en la colonia Roma de Ciudad de México. Tienes 42 años, eres amable pero profesional y siempre hablas de usted. Haces una entrevista de trabajo por videollamada: preguntas por la experiencia, la disponibilidad y por qué quiere el puesto. Si el estudiante es demasiado informal (tú, «oye», «vale»), le das un pequeño consejo amable sobre el registro formal.', goal: 'Beantwoord drie vragen over jezelf en stel zelf twee beleefde vragen met ¿podría…? of quisiera.' },
    reading: {
      t: 'Cinco errores en un correo formal', type: 'Artikel op een vacaturesite',
      p: [
        ['Cada semana recibimos cientos de postulaciones. Muchas son de personas con buena experiencia, pero su primer correo no causa una buena impresión. Estos son los cinco errores más comunes y cómo evitarlos.',
          'Elke week krijgen we honderden sollicitaties. Veel komen van mensen met goede ervaring, maar hun eerste e-mail maakt geen goede indruk. Dit zijn de vijf meest gemaakte fouten en hoe je ze voorkomt.'],
        ['El primer error es el saludo. «Hola» o «Buenas» es demasiado informal; es mejor escribir «Estimada señora…» o, si no sabe el nombre, «A quien corresponda». El segundo es tutear al reclutador. Aunque la empresa sea joven y moderna, en el primer correo siempre se usa usted.',
          'De eerste fout is de aanhef. «Hola» of «Buenas» is te informeel; beter is «Estimada señora…» of, als u de naam niet weet, «A quien corresponda». De tweede is de recruiter tutoyeren. Ook al is het bedrijf jong en modern, in de eerste e-mail gebruik je altijd usted.'],
        ['El tercer error es olvidar el archivo adjunto. Parece mentira, pero muchas personas escriben «adjunto mi currículum» y no adjuntan nada. El cuarto es escribir un texto demasiado largo: cinco o seis frases claras son suficientes. Cabe destacar que el reclutador lee cada correo en menos de un minuto.',
          'De derde fout is de bijlage vergeten. Het klinkt ongelooflijk, maar veel mensen schrijven «bijgaand mijn cv» en voegen niets toe. De vierde is een te lange tekst: vijf of zes heldere zinnen zijn genoeg. Het is goed om te weten dat de recruiter elke e-mail in minder dan een minuut leest.'],
        ['Por último, no exija una respuesta. «Contésteme pronto» suena agresivo. En su lugar, escriba «Le agradecería que me respondiera a la brevedad» o simplemente «Quedo a la espera de su respuesta». Con estos pequeños cambios, su correo será mucho más profesional.',
          'Ten slotte: eis geen antwoord. «Antwoord me snel» klinkt agressief. Schrijf in plaats daarvan «Ik zou het waarderen als u zo spoedig mogelijk antwoordt» of gewoon «Ik zie uw antwoord graag tegemoet». Met deze kleine veranderingen wordt uw e-mail veel professioneler.']
      ],
      gl: [['causar una buena impresión', 'een goede indruk maken'], ['el reclutador / la reclutadora', 'de recruiter'], ['tutear', 'met tú aanspreken, tutoyeren'], ['parece mentira', 'het is haast niet te geloven'], ['exigir', 'eisen']],
      q: [
        { t: 'mc', q: '¿Qué saludo recomienda el artículo si no sabe el nombre?', o: ['A quien corresponda', 'Hola a todos', 'Buenas'] },
        { t: 'mc', q: '¿Cuánto tiempo lee el reclutador cada correo?', o: ['Menos de un minuto', 'Unos cinco minutos', 'Media hora'] },
        { t: 'mc', q: '¿Qué error cometen muchas personas con el currículum?', o: ['Dicen que lo adjuntan, pero no lo adjuntan', 'Lo mandan dos veces', 'Lo escriben en inglés'] },
        { t: 'mc', q: '¿Por qué no se debe escribir «Contésteme pronto»?', o: ['Porque suena agresivo', 'Porque es demasiado largo', 'Porque es incorrecto gramaticalmente'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 8 ───────────────────────── */
  U({
    id: 'b2-08', level: 'B2', icon: '⛰️', title: 'Aunque llueva, vamos', nl: 'Toch doen: aunque, a pesar de que en por más que met subjuntivo',
    goals: ['Het verschil kennen tussen aunque + indicativo (het is zo) en aunque + subjuntivo (misschien, of: maakt niet uit)', 'Tegenstellingen uitdrukken met a pesar de (que), por más que, aun así en sin embargo', 'Oorzaak en gevolg verbinden met ya que, puesto que en así que'],
    vocab: [
      ['aunque', 'hoewel, ook al'], ['a pesar de', 'ondanks'], ['a pesar de que', 'ondanks dat, hoewel'], ['por más que', 'hoe … ook'], ['aun así', 'toch, zelfs dan'],
      ['sin embargo', 'toch, echter'], ['de todas formas', 'hoe dan ook'], ['igual', 'toch, evengoed', 'LatAm (informeel)'], ['ya que', 'aangezien, omdat'], ['puesto que', 'aangezien (formeler)'],
      ['así que', 'dus, zodat'], ['el cerro', 'de heuvel, berg'], ['la cordillera', 'de bergketen'], ['el sendero', 'het wandelpad'], ['hacer trekking', 'een trektocht maken'],
      ['la carpa', 'de tent', 'LatAm; ES: la tienda de campaña'], ['el saco de dormir', 'de slaapzak'], ['el pronóstico', 'de weersverwachting'], ['el chubasco', 'de stortbui'], ['la neblina', 'de mist, nevel'],
      ['abrigarse', 'zich warm aankleden'], ['la parka', 'de (gewatteerde) jas', 'CL · AR'], ['el bloqueador', 'de zonnebrandcrème', 'LatAm; ES: la crema solar'], ['agotador / agotadora', 'uitputtend'], ['valer la pena', 'de moeite waard zijn'],
      ['rendirse', 'opgeven'], ['el mirador', 'het uitzichtpunt'], ['la cumbre', 'de top'], ['el embalse', 'het stuwmeer'], ['bacán', 'tof, gaaf', 'CL (informeel)'],
      ['fome', 'saai', 'CL (informeel)'], ['¿cachai?', 'snap je?', 'CL (informeel)'], ['po', 'nou, hoor (versterking: sí po, ya po)', 'CL (informeel)'], ['al tiro', 'meteen', 'CL (informeel)']
    ],
    grammar: [
      { t: 'Aunque + indicativo of subjuntivo', es: 'Aunque llueve / aunque llueva',
        html: `<p>Na <b>aunque</b> kun je twee wijzen gebruiken, en dat verandert de betekenis:</p>
<p>📌 <b>Aunque + indicativo</b>: je weet dat het zo is. <i>Aunque <b>llueve</b>, vamos al cerro.</i> = Het regent (echt), maar we gaan toch.</p>
<p>📌 <b>Aunque + subjuntivo</b>: je weet het niet, of het maakt niet uit. <i>Aunque <b>llueva</b>, vamos al cerro.</i> = Misschien gaat het regenen; ook al regent het, we gaan.</p>
<p>📌 Ook bij een feit dat de ander al weet en dat jou niets uitmaakt, kies je vaak de subjuntivo: <i>Aunque <b>seas</b> mi hermano, no te presto la carpa.</i> (Ook al ben je mijn broer…)</p>
<p>📌 In het verleden en bij onwerkelijke situaties gebruik je de <b>imperfecto de subjuntivo</b>: <i>Aunque <b>tuviera</b> plata, no me compraría ese auto.</i></p>`,
        table: [['', 'betekenis', 'voorbeeld'], ['aunque + indicativo', 'het is zo (nieuwe info)', 'Aunque está nublado, salimos.'], ['aunque + presente de subjuntivo', 'misschien / maakt niet uit', 'Aunque esté nublado, salimos.'], ['aunque + imperfecto de subjuntivo', 'onwerkelijk', 'Aunque estuviera nublado, saldríamos.']],
        ex: [['Aunque hace frío, vamos a hacer trekking.', 'Hoewel het koud is, gaan we een trektocht maken.'], ['Aunque haga frío mañana, vamos igual.', 'Ook al is het morgen koud, we gaan toch.']],
        sum: 'Aunque + indicativo: un hecho. Aunque + subjuntivo: una posibilidad o algo que no importa.' },
      { t: 'A pesar de (que) en por más que', es: 'A pesar de · Por más que',
        html: `<p>📌 <b>A pesar de</b> + zelfstandig naamwoord of infinitief: <i>A pesar del frío, subimos a la cumbre.</i> · <i>A pesar de estar cansados, seguimos.</i></p>
<p>📌 <b>A pesar de que</b> + zin. Het werkt als <i>aunque</i>: indicativo voor een feit, subjuntivo voor een mogelijkheid. <i>A pesar de que <b>llovió</b>, lo pasamos bacán.</i></p>
<p>📌 <b>Por más que</b> = hoe … ook. Meestal met subjuntivo: <i>Por más que <b>corras</b>, no vas a llegar a tiempo.</i> (Hoe hard je ook rent…) Met indicativo als het echt gebeurt: <i>Por más que <b>estudio</b>, no me acuerdo.</i></p>
<p>📌 <b>Aun así</b> (zonder accent!) en <b>sin embargo</b> beginnen een nieuwe zin: <i>Estaba agotada. Aun así, no se rindió.</i> Let op: <i>aún</i> mét accent betekent nog (steeds).</p>`,
        table: [['woord', 'daarna', 'voorbeeld'], ['a pesar de', 'zelfst. nw. / infinitief', 'a pesar de la lluvia'], ['a pesar de que', 'zin (ind./subj.)', 'a pesar de que llovió'], ['por más que', 'zin (meestal subj.)', 'por más que insistas'], ['aun así / sin embargo', 'nieuwe zin', 'Aun así, fuimos.']],
        ex: [['A pesar de la neblina, la vista desde el mirador era increíble.', 'Ondanks de mist was het uitzicht vanaf het uitzichtpunt ongelooflijk.'], ['Por más que me lo expliques, no lo voy a entender.', 'Hoe vaak je het me ook uitlegt, ik ga het niet begrijpen.']],
        sum: 'A pesar de + sustantivo/infinitivo; a pesar de que + frase. Por más que + subjuntivo = hoe… ook. Aun así = toch.' },
      { t: 'Oorzaak en gevolg: ya que, puesto que, así que', es: 'Causa y consecuencia',
        html: `<p>📌 <b>Ya que</b> en <b>puesto que</b> = aangezien. Ze geven een reden die de ander vaak al kent, en staan graag aan het begin van de zin: <i>Ya que estás aquí, ayúdame con la carpa.</i> <i>Puesto que</i> is formeler.</p>
<p>📌 <b>Así que</b> = dus. Het geeft een gevolg, na de reden: <i>Va a llover, así que lleva la parka.</i></p>
<p>📌 Na deze woorden volgt gewoon de <b>indicativo</b>, want het zijn feiten.</p>`,
        table: [['woord', 'betekenis', 'voorbeeld'], ['porque', 'omdat', 'No fui porque llovía.'], ['ya que', 'aangezien', 'Ya que llueve, nos quedamos.'], ['puesto que', 'aangezien (formeel)', 'Puesto que no hay buses, caminaremos.'], ['así que', 'dus', 'Llueve, así que nos quedamos.']],
        ex: [['Ya que tenemos tiempo, subamos al mirador.', 'Aangezien we tijd hebben, laten we naar het uitzichtpunt gaan.'], ['El pronóstico dice chubascos, así que lleva la parka.', 'De verwachting zegt stortbuien, dus neem je jas mee.']],
        sum: 'Ya que / puesto que = como (causa conocida). Así que = por eso (consecuencia). Con indicativo.' }
    ],
    verbs: ['llover', 'hacer', 'estar', 'ser', 'tener', 'ir', 'poder', 'querer', 'subir', 'decir', 'llegar', 'correr'], tenses: ['subj', 'impsubj'],
    dialogue: {
      t: 'Trekking en el Cajón del Maipo', place: 'Santiago de Chile 🇨🇱',
      lines: [
        ['Catalina', 'Mark, ¿viste el pronóstico? Dicen que mañana puede haber chubascos en la cordillera.', 'Mark, heb je de weersverwachting gezien? Ze zeggen dat er morgen stortbuien kunnen zijn in de bergen.'],
        ['Mark', 'Sí, lo vi. Pero aunque llueva, yo quiero ir igual. Llevo semanas esperando este trekking.', 'Ja, ik heb het gezien. Maar ook al regent het, ik wil toch gaan. Ik wacht al weken op deze trektocht.'],
        ['Catalina', '¡Bacán! Yo me apunto al tiro. A pesar de que el sendero es largo, la vista del embalse vale la pena.', 'Tof! Ik doe meteen mee. Hoewel het pad lang is, is het uitzicht op het stuwmeer de moeite waard.'],
        ['Mark', '¿Y llevamos la carpa? Ya que vamos tan lejos, podríamos quedarnos una noche.', 'En nemen we de tent mee? Aangezien we zo ver gaan, kunnen we een nachtje blijven.'],
        ['Catalina', 'Ya po, pero en la noche hace mucho frío allá arriba, así que abrígate bien. Lleva tu parka y el saco de dormir.', 'Goed hoor, maar \'s nachts is het daarboven heel koud, dus kleed je goed aan. Neem je jas en je slaapzak mee.'],
        ['Mark', 'Mi parka es bastante fome, pero abriga harto. ¿Y el bloqueador? Aunque esté nublado, el sol de la cordillera quema.', 'Mijn jas is behoorlijk saai, maar hij is heel warm. En de zonnebrand? Ook al is het bewolkt, de zon in de bergen brandt.'],
        ['Catalina', 'Exacto. Mi hermano nunca se echa bloqueador. Por más que le digo, no me hace caso.', 'Precies. Mijn broer smeert zich nooit in. Hoe vaak ik het hem ook zeg, hij luistert niet.'],
        ['Mark', '¿Y si llegamos a la cumbre y hay neblina?', 'En als we op de top komen en het is mistig?'],
        ['Catalina', 'Aunque no veamos nada, el camino es precioso. Y si estás agotado, no te rindas, ¿cachai?', 'Ook al zien we niets, de weg is prachtig. En als je uitgeput bent, geef niet op, snap je?'],
        ['Mark', 'Te lo prometo. Mañana paso a buscarte a las seis, llueva o no llueva.', 'Beloofd. Ik kom je morgen om zes uur ophalen, regen of geen regen.']
      ],
      q: [
        { t: 'mc', q: '¿Qué dice el pronóstico para mañana?', o: ['Que puede haber chubascos en la cordillera', 'Que va a hacer mucho calor', 'Que va a nevar en Santiago'] },
        { t: 'mc', q: '¿Por qué Mark quiere llevar bloqueador?', o: ['Porque el sol de la cordillera quema aunque esté nublado', 'Porque van a la playa', 'Porque su hermano se lo pidió'] },
        { t: 'mc', q: '¿Qué pasa con el hermano de Catalina?', o: ['Nunca se echa bloqueador aunque ella se lo dice', 'No quiere ir al trekking', 'Siempre llega tarde'] }
      ]
    },
    culture: { t: 'Santiago en de Andes', html: `<p>🏔️ <b>Santiago de Chile</b> ligt aan de voet van de Andes. Op een heldere dag na de regen zie je vanuit de stad besneeuwde toppen van meer dan 5.000 meter. Binnen anderhalf uur rijden ben je in het <b>Cajón del Maipo</b>, een vallei met rivieren, hete bronnen en het turquoise stuwmeer <i>Embalse El Yeso</i>.</p>
<p>🌦️ Het weer in de bergen verandert snel. Chilenen zeggen <i>«Aunque esté despejado, lleva parka»</i>: ook als het helder is, neem een jas mee.</p>
<p>🗣️ Chileens Spaans staat bekend als snel en vol eigen woorden: <i>bacán</i> (tof), <i>fome</i> (saai), <i>al tiro</i> (meteen), <i>harto</i> (veel, heel) en <i>po</i> (van <i>pues</i>), zoals in <i>sí po</i> en <i>ya po</i>. Aan het eind van een zin hoor je vaak <i>¿cachai?</i> (snap je?, van het Engelse <i>to catch</i>).</p>` },
    ex: [
      { t: 'cloze', s: 'Aunque mañana ___, vamos a subir el cerro.', h: 'llover', a: ['llueva'], nl: 'Ook al regent het morgen, we gaan de berg op.', x: 'Je weet niet of het regent → subjuntivo.', tag: 'concession' },
      { t: 'cloze', s: 'Aunque ahora ___ mucho frío, el paisaje es precioso.', a: ['hace'], o: ['hace', 'haga', 'hiciera'], nl: 'Hoewel het nu erg koud is, is het landschap prachtig.', x: 'Het is nu echt koud → indicativo.', tag: 'concession' },
      { t: 'cloze', s: 'Aunque ___ nublado, lleva bloqueador.', a: ['esté'], o: ['esté', 'está', 'estaría'], nl: 'Ook al is het bewolkt, neem zonnebrand mee.', x: 'Een algemeen advies voor een mogelijke situatie → subjuntivo.', tag: 'concession' },
      { t: 'cloze', s: 'Aunque ___ millonaria, no viviría en otra ciudad.', h: 'ser, yo', a: ['fuera'], nl: 'Ook al was ik miljonair, ik zou niet in een andere stad wonen.', tag: 'concession' },
      { t: 'cloze', s: 'Por más que le ___, no me hace caso.', h: 'decir, yo', a: ['digo', 'diga'], nl: 'Hoe vaak ik het hem ook zeg, hij luistert niet naar me.', tag: 'concession' },
      { t: 'cloze', s: 'A pesar ___ la lluvia, lo pasamos bacán.', a: ['de'], o: ['de', 'que', 'de que'], nl: 'Ondanks de regen hadden we het geweldig.', x: 'A pesar de + zelfstandig naamwoord.', tag: 'concession' },
      { t: 'cloze', s: 'A pesar de ___ cansados, seguimos caminando.', h: 'estar', a: ['estar'], nl: 'Ondanks dat we moe waren, liepen we door.', x: 'A pesar de + infinitief.', tag: 'concession' },
      { t: 'cloze', s: 'Va a hacer frío en la noche, ___ lleva el saco de dormir.', a: ['así que'], o: ['así que', 'ya que', 'aunque'], nl: '\'s Nachts wordt het koud, dus neem je slaapzak mee.', tag: 'connectors' },
      { t: 'cloze', s: '___ estás aquí, ayúdame con la carpa.', a: ['Ya que'], o: ['Ya que', 'Así que', 'Aunque'], nl: 'Aangezien je hier bent, help me met de tent.', tag: 'connectors' },
      { t: 'mc', q: '«Aunque llueva, vamos.» betekent:', o: ['Ook al zou het regenen, we gaan.', 'Het regent, maar we gaan.', 'Omdat het regent, gaan we.'], tag: 'concession' },
      { t: 'mc', q: '«Aunque llueve, vamos.» betekent:', o: ['Het regent (echt), maar we gaan toch.', 'Misschien gaat het regenen; we gaan toch.', 'Als het regent, gaan we niet.'], tag: 'concession' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Estaba agotada. Aun así, no se rindió.', 'Estaba agotada. Aún así, no se rindió.', 'Estaba agotada. Aunque así, no se rindió.'], x: 'Aun así (toch) heeft geen accent; aún = nog.', tag: 'concession' },
      { t: 'mc', q: 'Wat betekent «fome» in Chili?', o: ['saai', 'tof', 'meteen'], tag: 'vocab' },
      { t: 'order', s: 'Aunque no veamos nada, el camino es precioso.', nl: 'Ook al zien we niets, de weg is prachtig.', tag: 'concession' },
      { t: 'tr', nl: 'Ook al is het morgen koud, we gaan toch.', a: ['Aunque haga frío mañana, vamos igual.', 'Aunque mañana haga frío, vamos igual.', 'Aunque haga frío mañana, vamos de todas formas.', 'Aunque mañana haga frío, vamos de todas formas.', 'Aunque haga frío mañana, igual vamos.', 'Aunque mañana haga frío, igual vamos.', 'Aunque haga frío mañana, vamos a ir igual.', 'Aunque mañana haga frío, vamos a ir igual.'], tag: 'concession' },
      { t: 'tr', nl: 'Ondanks de mist was het uitzicht prachtig.', a: ['A pesar de la neblina, la vista era preciosa.', 'A pesar de la neblina, la vista era increíble.', 'A pesar de la niebla, la vista era preciosa.', 'A pesar de la neblina la vista era preciosa.'], tag: 'concession' },
      { t: 'match', p: [['aunque', 'hoewel, ook al'], ['a pesar de', 'ondanks'], ['por más que', 'hoe … ook'], ['así que', 'dus'], ['ya que', 'aangezien']], tag: 'connectors' }
    ],
    say: [['Aunque llueva, vamos igual.', 'Ook al regent het, we gaan toch.'], ['A pesar del frío, subimos a la cumbre.', 'Ondanks de kou gingen we naar de top.'], ['Por más que lo intente, no me sale.', 'Hoe ik het ook probeer, het lukt me niet.'], ['Va a llover, así que lleva la parka.', 'Het gaat regenen, dus neem je jas mee.']],
    task: { nl: 'Schrijf 6 tot 8 zinnen over een plan dat je doorzet, ook al zit niet alles mee (een reis, een sport, Spaans leren…). Gebruik aunque één keer met indicativo en één keer met subjuntivo, en verder a pesar de, por más que en así que.', model: 'Este año quiero hacer el trekking de las Torres del Paine. Aunque es caro, llevo meses ahorrando. Mis amigos dicen que hace mucho viento allá, pero aunque haga mal tiempo, voy a ir igual. A pesar de mi miedo a las alturas, quiero llegar al mirador. Por más que me canse, no me voy a rendir. El viaje es en marzo, así que todavía tengo tiempo para entrenar. ¡Va a ser bacán!' },
    scenario: { nl: 'Je plant met een Chileense vriendin een trektocht in de Andes, maar zij twijfelt door het weer. Overtuig haar om toch te gaan.', role: 'Eres Catalina, una santiaguina de 27 años que trabaja en una oficina y ama la montaña. Hablas con el estudiante sobre un trekking en el Cajón del Maipo, pero tienes dudas: el pronóstico dice lluvia, el sendero es largo y tienes miedo del frío. Pones objeciones con «¿y si…?» y «pero…», y te dejas convencer cuando el estudiante usa bien «aunque», «a pesar de» o «por más que». Usas chilenismos como «po», «bacán», «fome», «al tiro» y «¿cachai?», y si el estudiante no entiende uno, lo explicas.', goal: 'Overtuig Catalina met minstens twee zinnen met aunque + subjuntivo en één met a pesar de.' },
    reading: {
      t: 'El día que casi me rendí', type: 'Reisblog',
      p: [
        ['Siempre había soñado con ver las Torres del Paine, en la Patagonia chilena. Por eso, aunque el viaje era caro y largo, ahorré durante un año entero. Cuando por fin llegué a Puerto Natales, el pronóstico era terrible: viento, lluvia y nieve en las alturas.',
          'Ik had er altijd van gedroomd de Torres del Paine in Chileens Patagonië te zien. Daarom spaarde ik een heel jaar, hoewel de reis duur en lang was. Toen ik eindelijk in Puerto Natales aankwam, was de weersverwachting vreselijk: wind, regen en sneeuw op de hoogte.'],
        ['El guía del hostal me dijo: «Aunque llueva, la subida es posible, pero tiene que ir con cuidado». Así que a la mañana siguiente salí a las seis, con mi parka, dos pares de calcetines y un montón de chocolate.',
          'De gids van het hostel zei tegen me: «Ook al regent het, de klim is mogelijk, maar u moet voorzichtig zijn». Dus de volgende ochtend vertrok ik om zes uur, met mijn jas, twee paar sokken en een hoop chocola.'],
        ['El sendero era agotador. A pesar de que llevaba buenos zapatos, tenía los pies mojados y fríos. Después de cuatro horas, el viento era tan fuerte que casi no podía caminar. Pensé en volver. Aun así, seguí, paso a paso, detrás de una pareja de argentinos que no paraba de cantar.',
          'Het pad was uitputtend. Hoewel ik goede schoenen aanhad, had ik natte en koude voeten. Na vier uur was de wind zo sterk dat ik bijna niet meer kon lopen. Ik dacht erover terug te gaan. Toch liep ik door, stap voor stap, achter een Argentijns stel dat maar bleef zingen.'],
        ['Cuando llegué al mirador, había tanta neblina que no se veían las torres. Me senté en una piedra, un poco triste. Y de repente, durante dos minutos, las nubes se abrieron. Por más fotos que tomé, ninguna muestra lo que sentí en ese momento. Ahora, cuando algo me cuesta, me acuerdo de ese día.',
          'Toen ik bij het uitzichtpunt aankwam, was er zoveel mist dat je de torens niet zag. Ik ging een beetje verdrietig op een steen zitten. En opeens, twee minuten lang, gingen de wolken open. Hoeveel foto\'s ik ook maakte, geen enkele laat zien wat ik op dat moment voelde. Nu, als iets me moeite kost, denk ik aan die dag.']
      ],
      gl: [['la subida', 'de klim'], ['ir con cuidado', 'voorzichtig zijn'], ['los calcetines', 'de sokken'], ['de repente', 'opeens'], ['costar (ue)', 'moeite kosten']],
      q: [
        { t: 'mc', q: '¿Cómo era el pronóstico cuando llegó a Puerto Natales?', o: ['Terrible: viento, lluvia y nieve', 'Soleado y sin viento', 'Con mucho calor'] },
        { t: 'mc', q: '¿Por qué pensó en volver?', o: ['Porque el viento era tan fuerte que casi no podía caminar', 'Porque se perdió', 'Porque los argentinos cantaban'] },
        { t: 'mc', q: '¿Qué vio desde el mirador?', o: ['Al principio nada, pero luego las torres durante dos minutos', 'Nada en todo el día', 'Las torres durante horas'] },
        { t: 'mc', q: '¿Qué aprendió la autora?', o: ['A no rendirse cuando algo le cuesta', 'A no viajar nunca a la Patagonia', 'A sacar mejores fotos'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 9 ───────────────────────── */
  U({
    id: 'b2-09', level: 'B2', icon: '🕵️', title: '¿Dónde estará?', nl: 'Gissen en vermoeden: futuro en condicional van waarschijnlijkheid',
    goals: ['Vermoedens over nu uitdrukken met de futuro (¿Dónde estará? Serán las ocho.)', 'Vermoedens over het verleden uitdrukken met de condicional (Serían las diez.) en de futuro perfecto (Se habrá dormido.)', 'Voorzichtig formuleren met al parecer, se supone que, a lo mejor, quizás en deber de'],
    vocab: [
      ['¿dónde estará?', 'waar zou hij/zij zijn?'], ['serán las ocho', 'het zal zo\'n acht uur zijn'], ['tendrá unos treinta años', 'hij/zij is zo\'n jaar of dertig'], ['habrá tráfico', 'er zal wel file zijn'],
      ['se habrá dormido', 'hij/zij heeft zich zeker verslapen'], ['serían las diez', 'het was zo\'n uur of tien'], ['al parecer', 'blijkbaar, naar het schijnt'], ['se supone que', 'het is de bedoeling dat; naar verluidt'],
      ['a lo mejor', 'misschien (+ indicativo)'], ['quizás / tal vez', 'misschien (meestal + subjuntivo)'], ['deber de + infinitivo', 'moeten (vermoeden): debe de estar cansado'], ['seguramente', 'vast, waarschijnlijk'],
      ['probablemente', 'waarschijnlijk'], ['me imagino que', 'ik neem aan dat'], ['sospechar', 'vermoeden, verdenken'], ['la sospecha', 'het vermoeden'], ['el rumor', 'het gerucht'],
      ['estar preocupado / preocupada', 'ongerust zijn'], ['no contestar', 'niet opnemen'], ['el celular', 'de mobiele telefoon', 'LatAm; ES: el móvil'], ['quedarse sin batería', 'een lege batterij hebben'],
      ['el tráfico', 'het verkeer, de file'], ['el combi', 'het busje (openbaar vervoer)', 'PE'], ['el jato', 'het huis', 'PE (informeel)'], ['el pata', 'de maat, vriend', 'PE (informeel)'],
      ['la chamba', 'het werk', 'PE · MX (informeel)'], ['al toque', 'meteen', 'PE (informeel)'], ['¡qué roche!', 'wat gênant!', 'PE (informeel)'], ['¿ya?', 'oké?, goed?', 'PE (informeel)'],
      ['la causa', 'de causa (Peruaans aardappelgerecht); ook: maat', 'PE'], ['de hecho', 'sterker nog, eigenlijk'], ['quién sabe', 'wie weet']
    ],
    grammar: [
      { t: 'De futuro van waarschijnlijkheid', es: 'El futuro de probabilidad',
        html: `<p>In het Spaans gebruik je de <b>futuro</b> niet alleen voor de toekomst, maar ook voor een <b>vermoeden over nu</b>. In het Nederlands zeg je dan «zal wel», «zou» of «zo'n».</p>
<p>📌 <i>¿Dónde <b>estará</b> Andrés?</i> = Waar zou Andrés zijn?</p>
<p>📌 <i><b>Serán</b> las ocho.</i> = Het zal zo'n acht uur zijn. (Zeker weten: <i>Son las ocho.</i>)</p>
<p>📌 <i><b>Tendrá</b> unos cuarenta años.</i> = Hij is zo'n jaar of veertig.</p>
<p>📌 <i>No contesta. <b>Estará</b> en el combi.</i> = Hij neemt niet op. Hij zit zeker in het busje.</p>
<p>Je vraagt jezelf ook vaak iets af met de futuro: <i>¿Qué <b>querrá</b> decir eso?</i> (Wat zou dat betekenen?)</p>`,
        table: [['zeker (nu)', 'vermoeden (nu)', 'betekenis'], ['Son las ocho.', 'Serán las ocho.', 'het zal zo\'n acht uur zijn'], ['Está en casa.', 'Estará en casa.', 'hij is zeker thuis'], ['Tiene treinta años.', 'Tendrá treinta años.', 'hij is zo\'n dertig'], ['Hay tráfico.', 'Habrá tráfico.', 'er zal wel file zijn']],
        ex: [['No contesta el celular. Se habrá quedado sin batería.', 'Hij neemt zijn telefoon niet op. Zijn batterij zal wel leeg zijn.'], ['¿Quién será esa señora? Será la nueva vecina.', 'Wie zou die mevrouw zijn? Dat zal de nieuwe buurvrouw wel zijn.']],
        sum: 'Futuro de probabilidad: suposición sobre el presente. «¿Dónde estará?», «Serán las ocho».' },
      { t: 'Vermoedens over het verleden', es: 'Condicional y futuro perfecto de probabilidad',
        html: `<p>Gaat je vermoeden over het <b>verleden</b>, dan schuift alles een tijd op:</p>
<p>📌 Een vermoeden over een <b>afgeronde handeling</b> (vandaag, net) → <b>futuro perfecto</b>: <i>habrá + participio</i>. <i>Se <b>habrá dormido</b>.</i> (Hij heeft zich zeker verslapen.)</p>
<p>📌 Een vermoeden over <b>toen</b> (indefinido of imperfecto) → <b>condicional</b>: <i>Cuando llegué, <b>serían</b> las diez.</i> (Toen ik aankwam, was het zo'n uur of tien.) · <i>¿Por qué no <b>vendría</b> ayer?</i> (Waarom zou hij gisteren niet gekomen zijn?)</p>
<p>⚠️ Verwar dit niet met de gewone condicional (zou + doen). De context maakt duidelijk wat bedoeld is.</p>`,
        table: [['zeker', 'vermoeden', 'vorm'], ['Son las ocho.', 'Serán las ocho.', 'futuro'], ['Se ha dormido.', 'Se habrá dormido.', 'futuro perfecto'], ['Eran las diez.', 'Serían las diez.', 'condicional'], ['No vino porque estaba enfermo.', 'No vendría porque estaría enfermo.', 'condicional']],
        ex: [['Ya habrá llegado a su jato.', 'Hij zal inmiddels wel thuis zijn aangekomen.'], ['Anoche había mucha gente; serían unas doscientas personas.', 'Gisteravond waren er veel mensen; het waren er zo\'n tweehonderd.']],
        sum: 'Suposición sobre el pasado: futuro perfecto (se habrá dormido) o condicional (serían las diez).' },
      { t: 'Voorzichtig formuleren', es: 'Expresar duda e hipótesis',
        html: `<p>📌 <b>A lo mejor</b> + <b>indicativo</b>: <i>A lo mejor <b>está</b> en la chamba.</i> Heel gewoon in gesprekken.</p>
<p>📌 <b>Quizás / tal vez</b> + meestal <b>subjuntivo</b>: <i>Quizás <b>esté</b> enfermo.</i> Met indicativo klink je zekerder.</p>
<p>📌 <b>Deber de</b> + infinitief = vermoeden: <i>Debe de estar cansado.</i> (Hij zal wel moe zijn.) Zonder <i>de</i> is het een plicht: <i>Debe estudiar.</i> (Hij moet studeren.) In gesprekken lopen ze door elkaar.</p>
<p>📌 <b>Al parecer</b> en <b>se supone que</b> geven door wat je gehoord hebt: <i>Al parecer, cancelaron el concierto.</i> · <i>Se supone que el combi pasa cada diez minutos.</i> (Het busje hoort elke tien minuten te komen.)</p>`,
        table: [['uitdrukking', 'daarna', 'voorbeeld'], ['a lo mejor', 'indicativo', 'A lo mejor viene.'], ['quizás / tal vez', 'meestal subjuntivo', 'Quizás venga.'], ['deber de', 'infinitief', 'Debe de estar ocupado.'], ['al parecer', 'indicativo', 'Al parecer, ya se fue.']],
        ex: [['A lo mejor se quedó sin batería.', 'Misschien was zijn batterij leeg.'], ['Tal vez no le guste la sorpresa.', 'Misschien vindt hij de verrassing niet leuk.']],
        sum: 'A lo mejor + indicativo; quizás / tal vez + subjuntivo; deber de + infinitivo = suposición.' }
    ],
    verbs: ['estar', 'ser', 'tener', 'haber', 'querer', 'venir', 'saber', 'poder', 'hacer', 'decir', 'salir', 'llegar'], tenses: ['fut', 'cond'],
    dialogue: {
      t: 'La sorpresa de Andrés', place: 'Lima 🇵🇪',
      lines: [
        ['Lucía', 'Mark, ya son las ocho y media y Andrés no llega. ¿Dónde estará?', 'Mark, het is al half negen en Andrés komt niet. Waar zou hij zijn?'],
        ['Mark', 'Habrá tráfico en la Javier Prado. A esta hora siempre hay.', 'Er zal wel file zijn op de Javier Prado. Op dit uur is die er altijd.'],
        ['Lucía', 'Pero tampoco contesta el celular. Se habrá quedado sin batería, como siempre.', 'Maar hij neemt ook zijn telefoon niet op. Zijn batterij zal wel leeg zijn, zoals altijd.'],
        ['Mark', 'A lo mejor está en el combi y no oye nada. ¿Le dijiste que la fiesta es sorpresa?', 'Misschien zit hij in het busje en hoort hij niets. Heb je hem gezegd dat het feest een verrassing is?'],
        ['Lucía', 'No, se supone que solo viene a cenar conmigo. ¡Ay, qué roche si llega y no hay nadie escondido!', 'Nee, het is de bedoeling dat hij alleen met mij komt eten. Oei, wat gênant als hij komt en er niemand verstopt zit!'],
        ['Mark', 'Tranquila. Sus patas ya están en la cocina. ¿Quién será esa que acaba de tocar la puerta?', 'Rustig. Zijn vrienden zitten al in de keuken. Wie zou dat zijn die net aanbelde?'],
        ['Lucía', 'Será la vecina. Ayer vino a quejarse de la música; serían las once de la noche.', 'Dat zal de buurvrouw zijn. Gisteren kwam ze klagen over de muziek; het was zo\'n uur of elf \'s avonds.'],
        ['Mark', 'Al parecer no le gustan mucho las fiestas. Quizás debamos invitarla.', 'Blijkbaar houdt ze niet zo van feestjes. Misschien moeten we haar uitnodigen.'],
        ['Lucía', '¡Buena idea! Ábrele tú, ¿ya? Yo apago las luces al toque.', 'Goed idee! Doe jij open, oké? Ik doe meteen de lichten uit.'],
        ['Mark', 'Espera… no es la vecina. ¡Es Andrés! Debe de haber venido en taxi. ¡Todos, escóndanse!', 'Wacht… het is de buurvrouw niet. Het is Andrés! Hij is zeker met de taxi gekomen. Iedereen, verstop je!']
      ],
      q: [
        { t: 'mc', q: '¿Por qué cree Mark que Andrés llega tarde?', o: ['Porque habrá tráfico en la Javier Prado', 'Porque está enfermo', 'Porque se olvidó de la cena'] },
        { t: 'mc', q: '¿Qué sabe Andrés de la fiesta?', o: ['Nada: cree que solo va a cenar con Lucía', 'Que es una fiesta sorpresa', 'Que la vecina va a venir'] },
        { t: 'mc', q: '¿Quién toca la puerta al final?', o: ['Andrés', 'La vecina', 'Un taxista'] }
      ]
    },
    culture: { t: 'Lima: combis, causa en «¿ya?»', html: `<p>🚌 In <b>Lima</b> rijden duizenden <i>combis</i>: kleine busjes waarin een <i>cobrador</i> uit de deur hangt en de route roept. Ze stoppen overal waar je je hand opsteekt. De stad heeft ook de snelbus <i>Metropolitano</i> en een metrolijn, maar het verkeer op lanen als de <i>Javier Prado</i> staat vaak vast.</p>
<p>🥔 Peru heeft duizenden soorten aardappels. De <b>causa limeña</b> is een koud laagjesgerecht van gele aardappel met limoen en ají amarillo, gevuld met kip of tonijn. <i>Causa</i> is in Lima ook een woord voor een goede vriend.</p>
<p>🗣️ Limeños sluiten een vraag of afspraak vaak af met <b>¿ya?</b> (oké?) en antwoorden met <i>ya</i> (goed). Een vriend is een <i>pata</i>, je huis is je <i>jato</i>, en iets gênants is <i>un roche</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'No sé qué hora es. ___ las ocho.', a: ['Serán'], o: ['Serán', 'Son', 'Sean'], nl: 'Ik weet niet hoe laat het is. Het zal zo\'n acht uur zijn.', tag: 'probability' },
      { t: 'cloze', s: '¿Dónde ___ mis llaves?', h: 'estar', a: ['estarán'], nl: 'Waar zouden mijn sleutels zijn?', x: 'Een vermoeden over nu → futuro.', tag: 'probability' },
      { t: 'cloze', s: 'Ese señor ___ unos sesenta años.', h: 'tener', a: ['tendrá'], nl: 'Die meneer is zo\'n jaar of zestig.', tag: 'probability' },
      { t: 'cloze', s: 'No contesta. Se ___ dormido.', a: ['habrá'], o: ['habrá', 'ha', 'haya'], nl: 'Hij neemt niet op. Hij heeft zich zeker verslapen.', tag: 'probability' },
      { t: 'cloze', s: 'Cuando llegamos a la fiesta, ___ las once.', h: 'ser', a: ['serían'], nl: 'Toen we op het feest aankwamen, was het zo\'n uur of elf.', x: 'Vermoeden over toen → condicional.', tag: 'probability' },
      { t: 'cloze', s: 'A lo mejor ___ en la chamba todavía.', a: ['está'], o: ['está', 'esté', 'estuviera'], nl: 'Misschien is hij nog op het werk.', x: 'A lo mejor + indicativo.', tag: 'probability' },
      { t: 'cloze', s: 'Quizás ___ enferma; no vino a clase.', h: 'estar', a: ['esté', 'está'], nl: 'Misschien is ze ziek; ze kwam niet naar de les.', tag: 'probability' },
      { t: 'cloze', s: 'Debe ___ estar cansado después del viaje.', a: ['de'], o: ['de', 'que', 'a'], nl: 'Hij zal wel moe zijn na de reis.', x: 'Deber de + infinitief = vermoeden.', tag: 'probability' },
      { t: 'mc', q: '«Serán las diez.» betekent:', o: ['Het zal zo\'n uur of tien zijn.', 'Het wordt straks tien uur.', 'Het is precies tien uur.'], tag: 'probability' },
      { t: 'mc', q: '«Se habrá quedado sin batería.» betekent:', o: ['Zijn batterij zal wel leeg zijn.', 'Zijn batterij gaat straks leeg.', 'Zijn batterij was leeg geweest.'], tag: 'probability' },
      { t: 'mc', q: 'Wat betekent «debe de estar en casa»?', o: ['Hij zal wel thuis zijn.', 'Hij moet thuisblijven.', 'Hij was thuis.'], tag: 'probability' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['A lo mejor viene mañana.', 'A lo mejor venga mañana.', 'A lo mejor vendría mañana.'], x: 'A lo mejor + indicativo.', tag: 'probability' },
      { t: 'mc', q: 'Een «jato» in Lima is:', o: ['een huis', 'een busje', 'een vriend'], tag: 'vocab' },
      { t: 'order', s: '¿Dónde estará Andrés a esta hora?', nl: 'Waar zou Andrés op dit uur zijn?', tag: 'probability' },
      { t: 'tr', nl: 'Er zal wel file zijn.', a: ['Habrá tráfico.', 'Habrá mucho tráfico.', 'Seguramente hay tráfico.'], tag: 'probability' },
      { t: 'tr', nl: 'Waar zou mijn telefoon zijn?', a: ['¿Dónde estará mi celular?', '¿Dónde estará mi teléfono?', '¿Dónde estará mi móvil?'], tag: 'probability' },
      { t: 'match', p: [['al parecer', 'blijkbaar'], ['se supone que', 'het is de bedoeling dat'], ['a lo mejor', 'misschien'], ['al toque', 'meteen'], ['¡qué roche!', 'wat gênant!']], tag: 'vocab' }
    ],
    say: [['¿Dónde estará? No contesta el celular.', 'Waar zou hij zijn? Hij neemt zijn telefoon niet op.'], ['Serán las ocho, más o menos.', 'Het zal zo\'n acht uur zijn, ongeveer.'], ['Se habrá quedado dormido.', 'Hij heeft zich zeker verslapen.'], ['A lo mejor hay tráfico.', 'Misschien is er file.']],
    task: { nl: 'Je vriend(in) is een uur te laat voor een afspraak en neemt niet op. Schrijf 6 tot 8 zinnen waarin je gist wat er aan de hand is. Gebruik de futuro van waarschijnlijkheid (minstens 2×), één keer habrá + participio, een vermoeden over gisteren met de condicional, en a lo mejor of quizás.', model: '¡Qué raro! Valeria no llega y ya son las nueve. ¿Dónde estará? A lo mejor está en el combi y no oye el celular. O se habrá quedado sin batería, porque nunca la carga. Ayer trabajó hasta muy tarde; serían las doce cuando salió de la oficina. Estará cansadísima. Quizás se haya dormido en el sofá. Le voy a mandar un mensaje y, si no contesta, voy a su jato.' },
    scenario: { nl: 'Je wacht in Lima met een Peruaanse vriendin op iemand die niet komt opdagen. Samen bedenken jullie wat er gebeurd kan zijn.', role: 'Eres Lucía, una limeña de 26 años, alegre y un poco nerviosa. Estás organizando una fiesta sorpresa para tu amigo Andrés en tu casa de Miraflores, pero Andrés no llega y no contesta. Haces suposiciones con el futuro de probabilidad («¿Dónde estará?», «Habrá tráfico») y le preguntas al estudiante qué cree que pasó. Usas palabras peruanas como «pata», «jato», «al toque», «¡qué roche!» y «¿ya?», y las explicas si el estudiante no entiende.', goal: 'Geef minstens drie vermoedens met de futuro of habrá + participio, en één met a lo mejor.' },
    reading: {
      t: 'El misterio de las Líneas de Nasca', type: 'Populairwetenschappelijk artikel',
      p: [
        ['En el desierto del sur del Perú hay cientos de dibujos gigantes: un mono, un colibrí, una araña y muchas líneas rectas de varios kilómetros. Solo se ven bien desde el aire. Se supone que los hizo la cultura Nasca hace unos dos mil años.',
          'In de woestijn in het zuiden van Peru liggen honderden reusachtige tekeningen: een aap, een kolibrie, een spin en veel rechte lijnen van een paar kilometer. Je ziet ze alleen goed vanuit de lucht. Naar verluidt maakte de Nasca-cultuur ze zo\'n tweeduizend jaar geleden.'],
        ['Pero ¿para qué servirían? Durante años hubo teorías de todo tipo. Algunas personas decían que serían pistas para extraterrestres, algo que ningún científico serio cree. La matemática alemana María Reiche, que vivió cuarenta años en el desierto, pensaba que sería un enorme calendario astronómico.',
          'Maar waar zouden ze voor gediend hebben? Jarenlang waren er allerlei theorieën. Sommige mensen zeiden dat het landingsbanen voor buitenaardsen zouden zijn, iets wat geen serieuze wetenschapper gelooft. De Duitse wiskundige María Reiche, die veertig jaar in de woestijn woonde, dacht dat het een enorme sterrenkalender zou zijn.'],
        ['Hoy muchos arqueólogos creen que las líneas tendrían que ver con el agua, que en esa zona es escasa. A lo mejor eran caminos para ceremonias en las que la gente pedía lluvia. Al parecer, algunas líneas apuntan hacia lugares donde había agua subterránea.',
          'Tegenwoordig denken veel archeologen dat de lijnen met water te maken zouden hebben, dat in dat gebied schaars is. Misschien waren het paden voor ceremonies waarbij mensen om regen vroegen. Blijkbaar wijzen sommige lijnen naar plekken waar grondwater was.'],
        ['¿Tendrán razón? Quizás nunca lo sepamos con seguridad. Lo que sí sabemos es que en 2022 se descubrieron con drones e inteligencia artificial más de ciento sesenta figuras nuevas. Y seguramente habrá muchas más esperando bajo la arena.',
          'Zouden ze gelijk hebben? Misschien weten we het nooit zeker. Wat we wel weten, is dat in 2022 met drones en kunstmatige intelligentie meer dan honderdzestig nieuwe figuren zijn ontdekt. En er liggen er vast nog veel meer onder het zand te wachten.']
      ],
      gl: [['el colibrí', 'de kolibrie'], ['la pista', 'de landingsbaan; het spoor'], ['escaso / escasa', 'schaars'], ['subterráneo / subterránea', 'ondergronds'], ['la arena', 'het zand']],
      q: [
        { t: 'mc', q: '¿Desde dónde se ven bien las líneas?', o: ['Desde el aire', 'Desde la carretera', 'Desde el mar'] },
        { t: 'mc', q: '¿Qué pensaba María Reiche?', o: ['Que serían un calendario astronómico', 'Que serían pistas para extraterrestres', 'Que serían caminos comerciales'] },
        { t: 'mc', q: '¿Con qué tendrían que ver las líneas, según muchos arqueólogos?', o: ['Con el agua', 'Con la guerra', 'Con el comercio de oro'] },
        { t: 'mc', q: '¿Qué pasó en 2022?', o: ['Se descubrieron más de 160 figuras nuevas', 'Se destruyeron algunas líneas', 'Se probó la teoría de María Reiche'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 10 ───────────────────────── */
  U({
    id: 'b2-10', level: 'B2', icon: '🐢', title: 'La isla en la que…', nl: 'Betrekkelijke voornaamwoorden: el que, el cual, lo cual, quien en cuyo',
    goals: ['Na een voorzetsel het juiste betrekkelijk voornaamwoord kiezen (la isla en la que…, el guía con quien…)', 'Lo que en lo cual gebruiken om naar een hele zin te verwijzen', 'Bezit uitdrukken met cuyo / cuya / cuyos / cuyas'],
    vocab: [
      ['el que / la que', 'die, dat (na een voorzetsel)'], ['el cual / la cual', 'die, dat (formeler)'], ['lo que', 'wat (naar een hele zin)'], ['lo cual', 'wat (formeler, naar een hele zin)'],
      ['quien / quienes', 'die (voor personen)'], ['cuyo / cuya', 'wiens, wier, waarvan'], ['la isla', 'het eiland'], ['el archipiélago', 'de archipel, eilandengroep'],
      ['la tortuga gigante', 'de reuzenschildpad'], ['la iguana marina', 'de zeeleguaan'], ['el piquero de patas azules', 'de blauwvoetgent'], ['el lobo marino', 'de zeeleeuw'],
      ['la especie', 'de soort'], ['en peligro de extinción', 'met uitsterven bedreigd'], ['el parque nacional', 'het nationaal park'], ['el guardaparques', 'de parkwachter', 'LatAm'],
      ['la evolución', 'de evolutie'], ['el volcán', 'de vulkaan'], ['hacer esnórquel', 'snorkelen'], ['el muelle', 'de pier, steiger'], ['la lancha', 'de motorboot'],
      ['proteger', 'beschermen'], ['la basura plástica', 'het plastic afval'], ['el voluntariado', 'het vrijwilligerswerk'], ['ñaño / ñaña', 'broer / zus; ook: maat', 'EC (informeel)'],
      ['¡chuta!', 'jeetje!, verdorie!', 'EC (informeel)'], ['¡achachay!', 'brr, wat koud!', 'EC (uit het Kichwa)'], ['¡arrarray!', 'au, wat heet!', 'EC (uit het Kichwa)'],
      ['de ley', 'zeker, absoluut', 'EC (informeel)'], ['chévere', 'tof, gaaf', 'EC · CO · VE'], ['¿mande?', 'wat zegt u?, pardon?', 'EC · MX']
    ],
    grammar: [
      { t: 'Voorzetsel + el que / la que', es: 'Preposición + artículo + que',
        html: `<p>Na een <b>voorzetsel</b> (en, con, de, para, por, a…) zeg je in het Spaans meestal niet alleen <i>que</i>, maar <b>lidwoord + que</b>. Het lidwoord past zich aan het woord aan waar je naar verwijst:</p>
<p>📌 <i>la isla <b>en la que</b> vivo</i> (het eiland waarop ik woon) · <i>el barco <b>con el que</b> llegamos</i> (de boot waarmee we aankwamen) · <i>las playas <b>de las que</b> te hablé</i> (de stranden waarover ik je vertelde) · <i>los turistas <b>para los que</b> trabajo</i>.</p>
<p>📌 In het Nederlands staat het voorzetsel vaak achteraan (<i>waar ik <b>op</b> woon</i>). In het Spaans <b>nooit</b>: het staat altijd vóór het betrekkelijk voornaamwoord.</p>
<p>📌 Bij <b>personen</b> kan ook <b>quien / quienes</b>: <i>el guía <b>con quien</b> hablé</i> = <i>el guía <b>con el que</b> hablé</i>.</p>`,
        table: [['', 'enkelvoud', 'meervoud'], ['mannelijk', 'el que / el cual', 'los que / los cuales'], ['vrouwelijk', 'la que / la cual', 'las que / las cuales'], ['personen', 'quien', 'quienes'], ['hele zin', 'lo que / lo cual', '—']],
        ex: [['Esta es la isla en la que viven las tortugas gigantes.', 'Dit is het eiland waarop de reuzenschildpadden leven.'], ['La guía con quien hicimos el tour es de Quito.', 'De gids met wie we de tour deden komt uit Quito.']],
        sum: 'Preposición + el/la/los/las + que (o + quien para personas): la isla en la que vivo, el guía con quien hablé.' },
      { t: 'El cual en lo cual', es: 'El cual · Lo que · Lo cual',
        html: `<p>📌 <b>El cual / la cual / los cuales / las cuales</b> betekent hetzelfde als <i>el que</i>, maar klinkt <b>formeler</b>. Je ziet het vooral in teksten en na langere voorzetsels: <i>el volcán <b>desde el cual</b> se ve todo el archipiélago</i>, <i>la razón <b>por la cual</b> vine</i>.</p>
<p>📌 Wil je naar een <b>hele zin</b> verwijzen, dan gebruik je <b>lo que</b> of <b>lo cual</b> (onzijdig): <i>No había basura en la playa, <b>lo cual</b> me sorprendió.</i> (…wat me verbaasde.)</p>
<p>📌 <b>Lo que</b> zonder woord ervoor = «wat», «datgene wat»: <i><b>Lo que</b> más me gustó fue hacer esnórquel.</i> Hier kun je <i>lo cual</i> <b>niet</b> gebruiken.</p>`,
        table: [['', 'voorbeeld', 'betekenis'], ['na een zin', '…, lo que / lo cual me encantó.', '…, wat ik geweldig vond.'], ['aan het begin', 'Lo que más me gustó…', 'Wat ik het leukst vond…'], ['formeel', 'la razón por la cual…', 'de reden waarom…']],
        ex: [['El guardaparques nos dejó nadar con lobos marinos, lo cual fue increíble.', 'De parkwachter liet ons met zeeleeuwen zwemmen, wat ongelooflijk was.'], ['Lo que más me impresionó fue el tamaño de las tortugas.', 'Wat de meeste indruk op me maakte, was de grootte van de schildpadden.']],
        sum: 'El cual = el que (más formal). Lo que / lo cual remiten a toda una frase; al inicio solo «lo que».' },
      { t: 'Cuyo: wiens, waarvan', es: 'El relativo «cuyo»',
        html: `<p><b>Cuyo</b> drukt <b>bezit</b> uit (wiens, wier, waarvan). Het past zich aan het <b>bezeten ding</b> aan, niet aan de bezitter:</p>
<p>📌 <i>el pájaro <b>cuyas</b> patas son azules</i> (de vogel <b>wiens</b> poten blauw zijn) → <i>cuyas</i> omdat <i>patas</i> vrouwelijk meervoud is.</p>
<p>📌 <i>la científica <b>cuyo</b> libro leí</i> (de wetenschapster <b>van wie</b> ik het boek las) → <i>cuyo</i> omdat <i>libro</i> mannelijk is.</p>
<p>📌 <i>Cuyo</i> is vrij formeel. In gesprekken hoor je vaker een omschrijving: <i>el pájaro que tiene las patas azules</i>.</p>`,
        table: [['bezeten ding', 'vorm', 'voorbeeld'], ['mannelijk enkelvoud', 'cuyo', 'la isla cuyo volcán…'], ['vrouwelijk enkelvoud', 'cuya', 'el pueblo cuya playa…'], ['mannelijk meervoud', 'cuyos', 'la tortuga cuyos huevos…'], ['vrouwelijk meervoud', 'cuyas', 'el ave cuyas patas…']],
        ex: [['Darwin, cuyas ideas cambiaron la ciencia, visitó las islas en 1835.', 'Darwin, wiens ideeën de wetenschap veranderden, bezocht de eilanden in 1835.'], ['Es una especie cuyo hábitat está en peligro.', 'Het is een soort waarvan de leefomgeving in gevaar is.']],
        sum: 'Cuyo/a/os/as = posesión; concuerda con lo poseído: el ave cuyas patas son azules.' }
    ],
    verbs: ['vivir', 'hablar', 'llegar', 'ver', 'ser', 'estar', 'tener', 'nadar', 'proteger', 'visitar', 'decir', 'hacer'], tenses: ['pret', 'imp'],
    dialogue: {
      t: 'Un día en Santa Cruz', place: 'Galápagos 🇪🇨',
      lines: [
        ['Daniela', '¡Bienvenido a Santa Cruz, Mark! Esta es la isla en la que trabajo como voluntaria desde hace un año.', 'Welkom op Santa Cruz, Mark! Dit is het eiland waarop ik al een jaar als vrijwilligster werk.'],
        ['Mark', '¡Chuta, qué calor! Pensé que en Ecuador haría más frío.', 'Jeetje, wat warm! Ik dacht dat het in Ecuador kouder zou zijn.'],
        ['Daniela', 'Jaja, eso es en Quito, donde siempre decimos «¡achachay!». Aquí, en cambio, es «¡arrarray!». Mira, ese es el centro en el que cuidamos a las tortugas gigantes.', 'Haha, dat is in Quito, waar we altijd «brr!» zeggen. Hier is het juist «au, heet!». Kijk, dat is het centrum waar we voor de reuzenschildpadden zorgen.'],
        ['Mark', '¿Esa tortuga enorme es la famosa de la que me hablaste?', 'Is die enorme schildpad de beroemde waarover je me vertelde?'],
        ['Daniela', 'No, esa murió en 2012. Aquí también vivió Diego, un macho cuyos hijos ayudaron a salvar su especie. En 2020 volvió a su isla, Española, con más de cien años.', 'Nee, die is in 2012 gestorven. Hier woonde ook Diego, een mannetje wiens jongen hielpen zijn soort te redden. In 2020 ging hij terug naar zijn eiland, Española, toen hij al meer dan honderd was.'],
        ['Mark', 'Increíble. ¿Y la guía con quien vamos a bucear mañana también es voluntaria?', 'Ongelooflijk. En de gids met wie we morgen gaan duiken, is die ook vrijwilligster?'],
        ['Daniela', 'No, es guardaparques. Es mi ñaña, de hecho. Mañana vamos a una bahía en la cual nadan lobos marinos y tiburones pequeños.', 'Nee, ze is parkwachter. Ze is eigenlijk mijn zus. Morgen gaan we naar een baai waarin zeeleeuwen en kleine haaien zwemmen.'],
        ['Mark', '¿Tiburones? Lo que me estás diciendo me da un poco de miedo.', 'Haaien? Wat je me nu vertelt, maakt me een beetje bang.'],
        ['Daniela', 'Tranquilo, no hacen nada. Lo que sí me preocupa es la basura plástica que llega del mar, lo cual es un problema serio.', 'Rustig, ze doen niets. Waar ik me wel zorgen over maak, is het plastic afval dat uit zee aanspoelt, wat een serieus probleem is.'],
        ['Mark', 'Entonces mañana, después de bucear, te ayudo a limpiar la playa. ¡De ley!', 'Dan help ik je morgen na het duiken het strand op te ruimen. Zeker weten!']
      ],
      q: [
        { t: 'mc', q: '¿Qué hace Daniela en Santa Cruz?', o: ['Trabaja como voluntaria con tortugas gigantes', 'Es guardaparques', 'Vende excursiones de buceo'] },
        { t: 'mc', q: '¿Quién es la guía con quien van a bucear?', o: ['La hermana de Daniela', 'Una amiga de Quito', 'Una turista argentina'] },
        { t: 'mc', q: '¿Qué le preocupa a Daniela?', o: ['La basura plástica que llega del mar', 'Los tiburones', 'El calor'] }
      ]
    },
    culture: { t: 'De Galápagos en het Spaans van Ecuador', html: `<p>🐢 De <b>Galápagos</b> liggen 1.000 km uit de kust van Ecuador. Veel dieren komen nergens anders voor: reuzenschildpadden, zeeleguanen en de <i>piquero de patas azules</i>. Charles Darwin kwam er in 1835 en zijn ideeën over evolutie zijn mede hier ontstaan. Bijna het hele gebied is nationaal park; je bezoekt veel plekken alleen met een gids.</p>
<p>🐢 De schildpad <b>Diego</b> uit de dialoog bestaat echt: hij was met honderden jongen een van de redders van zijn soort en ging in 2020 met «pensioen» naar zijn eigen eiland Española.</p>
<p>🗣️ In Ecuador hoor je veel woorden uit het <b>Kichwa</b>: <i>¡achachay!</i> (wat koud!), <i>¡arrarray!</i> (wat heet!) en <i>ñaño/ñaña</i> (broer/zus). Ecuadorianen zeggen beleefd <i>¿mande?</i> als ze iets niet verstaan, en <i>de ley</i> betekent «zeker».</p>` },
    ex: [
      { t: 'cloze', s: 'Esta es la isla en ___ que viven las tortugas.', a: ['la'], o: ['la', 'el', 'lo'], nl: 'Dit is het eiland waarop de schildpadden leven.', tag: 'relative-adv' },
      { t: 'cloze', s: 'El barco con ___ que llegamos era muy pequeño.', a: ['el'], o: ['el', 'la', 'lo'], nl: 'De boot waarmee we aankwamen was heel klein.', tag: 'relative-adv' },
      { t: 'cloze', s: 'Las playas de ___ que te hablé están en Isabela.', a: ['las'], o: ['las', 'los', 'lo'], nl: 'De stranden waarover ik je vertelde liggen op Isabela.', tag: 'relative-adv' },
      { t: 'cloze', s: 'La guía con ___ hicimos el tour es de Quito.', a: ['quien', 'la que', 'la cual'], o: ['quien', 'que', 'cual'], nl: 'De gids met wie we de tour deden komt uit Quito.', tag: 'relative-adv' },
      { t: 'cloze', s: 'No había basura en la playa, lo ___ me sorprendió.', a: ['cual', 'que'], o: ['cual', 'cuyo', 'quien'], nl: 'Er lag geen afval op het strand, wat me verbaasde.', tag: 'relative-adv' },
      { t: 'cloze', s: '___ más me gustó fue nadar con los lobos marinos.', a: ['Lo que'], o: ['Lo que', 'Lo cual', 'El que'], nl: 'Wat ik het leukst vond, was zwemmen met de zeeleeuwen.', x: 'Aan het begin van de zin alleen «lo que».', tag: 'relative-adv' },
      { t: 'cloze', s: 'Es un pájaro ___ patas son azules.', a: ['cuyas'], o: ['cuyas', 'cuyo', 'cuyos'], nl: 'Het is een vogel waarvan de poten blauw zijn.', x: 'Cuyo past zich aan «patas» aan (vrouwelijk meervoud).', tag: 'relative-adv' },
      { t: 'cloze', s: 'Darwin, ___ libro leí en la universidad, visitó estas islas.', a: ['cuyo'], o: ['cuyo', 'cuya', 'quien'], nl: 'Darwin, van wie ik het boek op de universiteit las, bezocht deze eilanden.', tag: 'relative-adv' },
      { t: 'cloze', s: 'Esa es la razón por ___ cual vine a Ecuador.', a: ['la'], o: ['la', 'el', 'lo'], nl: 'Dat is de reden waarom ik naar Ecuador kwam.', tag: 'relative-adv' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Es el amigo con quien viajé.', 'Es el amigo quien viajé con.', 'Es el amigo que viajé con.'], x: 'Het voorzetsel staat in het Spaans altijd vóór het betrekkelijk voornaamwoord.', tag: 'relative-adv' },
      { t: 'mc', q: '«la tortuga cuyos huevos protegemos» betekent:', o: ['de schildpad waarvan we de eieren beschermen', 'de schildpad die onze eieren beschermt', 'de schildpad die we beschermen'], tag: 'relative-adv' },
      { t: 'mc', q: 'Wat zegt een Ecuadoriaan als het heel koud is?', o: ['¡Achachay!', '¡Arrarray!', '¡De ley!'], tag: 'vocab' },
      { t: 'mc', q: 'Wat betekent «ñaña» in Ecuador?', o: ['zus', 'oma', 'buurvrouw'], tag: 'vocab' },
      { t: 'order', s: 'Esta es la isla en la que trabajo.', nl: 'Dit is het eiland waarop ik werk.', tag: 'relative-adv' },
      { t: 'tr', nl: 'Wat ik het leukst vond, was snorkelen.', a: ['Lo que más me gustó fue hacer esnórquel.', 'Lo que más me gustó fue el esnórquel.', 'Lo que más me gustó fue hacer snorkel.', 'Lo que más me gustó fue bucear.'], tag: 'relative-adv' },
      { t: 'tr', nl: 'De gids met wie ik sprak is parkwachter.', a: ['La guía con quien hablé es guardaparques.', 'La guía con la que hablé es guardaparques.', 'El guía con quien hablé es guardaparques.', 'El guía con el que hablé es guardaparques.', 'La guía con la cual hablé es guardaparques.', 'El guía con el cual hablé es guardaparques.'], tag: 'relative-adv' },
      { t: 'match', p: [['en la que', 'waarin, waarop'], ['con quien', 'met wie'], ['lo cual', 'wat (naar een hele zin)'], ['cuyo', 'wiens, waarvan'], ['¡chuta!', 'jeetje!']], tag: 'vocab' }
    ],
    say: [['Esta es la isla en la que trabajo.', 'Dit is het eiland waarop ik werk.'], ['Lo que más me gustó fue nadar con los lobos marinos.', 'Wat ik het leukst vond, was zwemmen met de zeeleeuwen.'], ['Es un pájaro cuyas patas son azules.', 'Het is een vogel waarvan de poten blauw zijn.'], ['No había basura, lo cual me sorprendió.', 'Er lag geen afval, wat me verbaasde.']],
    task: { nl: 'Beschrijf in 6 tot 8 zinnen een bijzondere plek die je bezocht hebt (of graag wilt bezoeken). Gebruik minstens twee keer voorzetsel + el/la que of quien, één keer lo que of lo cual, en één keer cuyo/cuya.', model: 'El lugar del que más me acuerdo es el lago de Atitlán, en Guatemala. Es un lago enorme cuyas orillas están rodeadas de volcanes. Me quedé en un pueblo pequeño en el que no había carros, lo cual me encantó. La señora con quien me alojé me enseñó a hacer tortillas. Lo que más me impresionó fue el silencio por la mañana. Es un sitio al que quiero volver de ley.' },
    scenario: { nl: 'Je bent op de Galápagos en krijgt een rondleiding van een Ecuadoriaanse vrijwilligster. Stel vragen over de dieren en de eilanden.', role: 'Eres Daniela, una quiteña de 27 años que trabaja como voluntaria en un centro de tortugas gigantes en la isla Santa Cruz (Galápagos). Eres simpática, apasionada por la naturaleza y explicas todo con detalle. Usas mucho oraciones de relativo («la isla en la que…», «el guardaparques con quien…», «una especie cuyo hábitat…», «lo cual…»). Usas palabras ecuatorianas como «chuta», «ñaño/ñaña», «achachay», «arrarray», «de ley» y «¿mande?», y las explicas si el estudiante no las entiende.', goal: 'Stel drie vragen over de dieren en gebruik zelf minstens twee keer voorzetsel + el/la que of quien.' },
    reading: {
      t: 'Las islas que cambiaron la ciencia', type: 'Reisgids',
      p: [
        ['Las Galápagos son un archipiélago volcánico cuyas islas aparecieron en medio del océano Pacífico hace millones de años. Los animales que llegaron a ellas lo hicieron flotando sobre troncos, volando o nadando, lo cual explica por qué no hay casi mamíferos grandes.',
          'De Galápagos zijn een vulkanische archipel waarvan de eilanden miljoenen jaren geleden midden in de Grote Oceaan verschenen. De dieren die er kwamen, deden dat drijvend op boomstammen, vliegend of zwemmend, wat verklaart waarom er bijna geen grote zoogdieren zijn.'],
        ['En 1835 llegó el barco en el que viajaba un joven naturalista inglés llamado Charles Darwin. Lo que más le llamó la atención fueron los pinzones, unos pájaros pequeños cuyos picos eran diferentes en cada isla. Años después, esas observaciones lo ayudaron a desarrollar su teoría de la evolución.',
          'In 1835 kwam het schip aan waarop een jonge Engelse natuurkenner reisde die Charles Darwin heette. Wat hem het meest opviel, waren de vinken, kleine vogels waarvan de snavels op elk eiland anders waren. Jaren later hielpen die waarnemingen hem zijn evolutietheorie te ontwikkelen.'],
        ['Hoy el 97 % del territorio es parque nacional. Los visitantes, cuyo número ha crecido mucho, deben ir con guías autorizados, con quienes recorren senderos marcados. No se puede tocar a los animales ni darles comida, algo que muchos turistas no saben.',
          'Tegenwoordig is 97 % van het gebied nationaal park. De bezoekers, van wie het aantal sterk gegroeid is, moeten met erkende gidsen gaan, met wie ze gemarkeerde paden volgen. Je mag de dieren niet aanraken of voeren, iets wat veel toeristen niet weten.'],
        ['El mayor peligro actual son las especies invasoras, como las cabras y las ratas, y la basura plástica que trae el mar. Por eso existen programas de voluntariado en los que cualquiera puede participar, lo cual es una buena forma de conocer las islas y, al mismo tiempo, protegerlas.',
          'Het grootste gevaar nu zijn invasieve soorten, zoals geiten en ratten, en het plastic afval dat de zee aanvoert. Daarom bestaan er vrijwilligersprogramma\'s waaraan iedereen kan meedoen, wat een goede manier is om de eilanden te leren kennen en ze tegelijk te beschermen.']
      ],
      gl: [['flotar', 'drijven'], ['el tronco', 'de boomstam'], ['el pinzón', 'de vink'], ['el pico', 'de snavel'], ['la especie invasora', 'de invasieve (uitheemse) soort']],
      q: [
        { t: 'mc', q: '¿Por qué casi no hay mamíferos grandes en las Galápagos?', o: ['Porque los animales tuvieron que llegar flotando, volando o nadando', 'Porque hace demasiado calor', 'Porque los cazaron los turistas'] },
        { t: 'mc', q: '¿Qué le llamó más la atención a Darwin?', o: ['Los pinzones, cuyos picos eran diferentes en cada isla', 'Las tortugas gigantes', 'Los volcanes'] },
        { t: 'mc', q: '¿Qué está prohibido para los visitantes?', o: ['Tocar a los animales o darles comida', 'Ir con guías', 'Caminar por los senderos'] },
        { t: 'mc', q: '¿Cuál es el mayor peligro actual según el texto?', o: ['Las especies invasoras y la basura plástica', 'Los volcanes activos', 'Los tiburones'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 11 ───────────────────────── */
  U({
    id: 'b2-11', level: 'B2', icon: '🦩', title: 'Llevo tres días viajando', nl: 'Werkwoordgroepen: llevar, seguir, ponerse a, estar a punto de en acabar + gerundio',
    goals: ['Zeggen hoe lang je iets al doet met llevar + gerundio (Llevo tres días viajando) en llevar … sin + infinitief', 'Verloop uitdrukken met seguir, ir en acabar + gerundio (sigo esperando, te vas acostumbrando, acabé comprando)', 'Begin, bijna en einde uitdrukken met ponerse a, echarse a, estar a punto de en dejar de'],
    vocab: [
      ['llevar + gerundio', 'al (een tijd) bezig zijn met …'], ['seguir + gerundio', 'nog steeds …, blijven …'], ['ir + gerundio', 'langzaamaan …, beetje bij beetje …'], ['acabar + gerundio', 'uiteindelijk (toch) …'],
      ['ponerse a + infinitivo', 'beginnen te … (ineens)'], ['echarse a reír', 'in lachen uitbarsten'], ['estar a punto de + infinitivo', 'op het punt staan te …'], ['demorarse en + infinitivo', 'er lang over doen om te …', 'LatAm'],
      ['el salar', 'de zoutvlakte'], ['la sal', 'het zout'], ['el altiplano', 'de hoogvlakte (in de Andes)'], ['la altura', 'de hoogte'],
      ['el soroche', 'de hoogteziekte', 'BO · PE · EC'], ['el mate de coca', 'de cocathee'], ['el teleférico', 'de kabelbaan'], ['el flamenco', 'de flamingo'],
      ['el espejo', 'de spiegel'], ['el amanecer', 'de zonsopgang'], ['el recorrido', 'de route, de tocht'], ['abrigarse', 'zich warm aankleden'],
      ['acostumbrarse a', 'wennen aan'], ['la chompa', 'de trui', 'BO · PE · EC'], ['la movilidad', 'het vervoer; het busje, de auto', 'BO · PE'], ['la cholita', 'Aymara- of Quechuavrouw in traditionele kleding', 'BO'],
      ['la pollera', 'de wijde, traditionele rok', 'BO · PE'], ['la salteña', 'gevuld deegpasteitje met sappige vulling', 'BO'], ['el casero / la casera', 'de vaste verkoper / verkoopster (ook: vaste klant)', 'BO'], ['la yapa', 'het extraatje (gratis erbij)', 'BO · PE · EC'],
      ['la wawa', 'de baby, het kindje', 'BO · PE · EC (uit het Quechua en Aymara)'], ['¿ya?', 'oké?, goed?', 'BO · PE'], ['¡qué macana!', 'wat jammer!, wat balen!', 'BO (informeel)'], ['¡jallalla!', 'proost!, leve …! (Aymara)', 'BO']
    ],
    grammar: [
      { t: 'Llevar + gerundio: hoe lang al?', es: 'Llevar + gerundio',
        html: `<p>Met <b>llevar + tijd + gerundio</b> zeg je <b>hoe lang iets al bezig is</b>. In het Nederlands gebruik je «al»:</p>
<p>📌 <i><b>Llevo</b> tres días <b>viajando</b> por Bolivia.</i> = Ik reis <b>al</b> drie dagen door Bolivia. Hetzelfde als <i>Hace tres días que viajo por Bolivia.</i></p>
<p>📌 <b>Ontkennend</b> gebruik je <b>sin + infinitief</b>: <i>Llevo dos noches <b>sin dormir</b> bien.</i> (Ik slaap al twee nachten niet goed.)</p>
<p>📌 Zonder werkwoord kan ook: <i>Llevo un mes <b>en La Paz</b>.</i> (Ik ben al een maand in La Paz.)</p>
<p>📌 In het <b>verleden</b> neem je de imperfecto: <i><b>Llevábamos</b> una hora esperando cuando llegó la movilidad.</i> (We stonden al een uur te wachten toen…) Nooit <s>he llevado</s> of <s>llevé</s> in deze betekenis.</p>`,
        table: [['', 'vorm', 'voorbeeld'], ['nu', 'llevo + tijd + gerundio', 'Llevo ocho años trabajando aquí.'], ['ontkennend', 'llevo + tijd + sin + infinitief', 'Llevo un año sin verla.'], ['verleden', 'llevaba + tijd + gerundio', 'Llevaba dos horas caminando.'], ['vraag', '¿Cuánto tiempo llevas…?', '¿Cuánto tiempo llevas estudiando español?']],
        ex: [['¿Cuánto tiempo llevas viviendo en Bolivia?', 'Hoe lang woon je al in Bolivia?'], ['Llevamos tres horas sin comer nada.', 'We hebben al drie uur niets gegeten.']],
        sum: 'Llevar + tiempo + gerundio = «hace … que»: Llevo tres días viajando. En negativo: llevo dos días sin dormir.' },
      { t: 'Seguir, ir en acabar + gerundio', es: 'Seguir · Ir · Andar · Acabar + gerundio',
        html: `<p>Vier werkwoorden die samen met een <b>gerundio</b> (-ando, -iendo) laten zien <b>hoe iets verloopt</b>:</p>
<p>📌 <b>seguir + gerundio</b> = nog steeds, blijven: <i><b>Sigo estudiando</b> español.</i> Ontkennend met <b>sin</b>: <i>Sigo <b>sin entender</b>.</i> (Ik begrijp het nog steeds niet.)</p>
<p>📌 <b>ir + gerundio</b> = langzaamaan, stap voor stap: <i>Te <b>vas acostumbrando</b> a la altura.</i> (Je went langzaam aan de hoogte.)</p>
<p>📌 <b>andar + gerundio</b> = steeds maar, de hele tijd (vaak een beetje kritisch): <i><b>Anda diciendo</b> que es guía.</i> (Hij loopt maar te vertellen dat hij gids is.)</p>
<p>📌 <b>acabar / terminar + gerundio</b> = uiteindelijk toch: <i><b>Acabé comprando</b> tres chompas.</i> Let op het verschil met <b>acabar de + infinitief</b> = net: <i><b>Acabo de comprar</b> una chompa.</i> (Ik heb net een trui gekocht.)</p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['seguir + gerundio', 'nog steeds', 'Sigue lloviendo.'], ['seguir sin + inf.', 'nog steeds niet', 'Sigo sin saberlo.'], ['ir + gerundio', 'langzaamaan', 'Voy aprendiendo.'], ['andar + gerundio', 'steeds maar', 'Anda buscando trabajo.'], ['acabar + gerundio', 'uiteindelijk', 'Acabamos yendo en taxi.'], ['acabar de + inf.', 'net', 'Acabamos de llegar.']],
        ex: [['Llevo ocho años haciendo este recorrido y sigo emocionándome.', 'Ik doe deze tocht al acht jaar en ik raak nog steeds ontroerd.'], ['Íbamos a caminar, pero acabamos tomando el teleférico.', 'We zouden gaan lopen, maar uiteindelijk namen we de kabelbaan.']],
        sum: 'Seguir + gerundio (todavía), ir + gerundio (poco a poco), acabar + gerundio (al final). Ojo: acabar de + infinitivo = hace un momento.' },
      { t: 'Beginnen, bijna en ophouden', es: 'Ponerse a · Estar a punto de · Dejar de',
        html: `<p>Deze groepen krijgen een <b>infinitief</b>. Let goed op het <b>voorzetsel</b>:</p>
<p>📌 <b>ponerse a</b> + inf. = (ineens) beginnen te: <i>Me <b>puse a hablar</b> con una casera.</i> Bij lachen, huilen, rennen en vliegen hoor je ook <b>echarse a</b>: <i>Los flamencos <b>se echaron a volar</b>.</i></p>
<p>📌 <b>estar a punto de</b> + inf. = op het punt staan: <i><b>Estamos a punto de</b> salir.</i> In Zuid-Amerika hoor je ook kort <b>estar por</b>: <i>Estamos por salir.</i></p>
<p>📌 <b>dejar de</b> + inf. = ophouden met: <i><b>Dejó de</b> llover.</i> En <b>no dejar de</b> = maar blijven doen: <i><b>No dejo de</b> tomar fotos.</i></p>
<p>📌 <b>soler</b> + inf. (zonder voorzetsel) = gewoonlijk: <i>Aquí <b>suele</b> hacer frío de noche.</i> En <b>demorarse en</b> + inf. = er lang over doen: <i>La movilidad <b>se demoró en</b> llegar.</i></p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['ponerse a + inf.', 'beginnen te', 'Se puso a llover.'], ['echarse a + inf.', 'het op een … zetten', 'Se echó a reír.'], ['estar a punto de + inf.', 'op het punt staan', 'Está a punto de amanecer.'], ['dejar de + inf.', 'ophouden met', 'Dejé de tomar café.'], ['no dejar de + inf.', 'blijven doen', 'No deja de hablar.'], ['soler + inf.', 'gewoonlijk', 'Suelo levantarme temprano.']],
        ex: [['Estábamos a punto de salir cuando se puso a llover.', 'We stonden op het punt te vertrekken toen het begon te regenen.'], ['Desde que llegué a Bolivia no dejo de comer salteñas.', 'Sinds ik in Bolivia ben, eet ik aan één stuk door salteñas.']],
        sum: 'Ponerse a (empezar), estar a punto de (casi), dejar de (parar), no dejar de (seguir), soler (normalmente) + infinitivo.' }
    ],
    verbs: ['llevar', 'seguir', 'ir', 'acabar', 'ponerse', 'dejar', 'estar', 'viajar', 'esperar', 'subir', 'caminar', 'tomar'], tenses: ['pres', 'imp'],
    dialogue: {
      t: 'Amanecer en el salar', place: 'Salar de Uyuni 🇧🇴',
      lines: [
        ['Wara', '¡Buenos días, Mark! ¿Sigues durmiendo? Estamos a punto de salir: el sol sale en media hora.', 'Goedemorgen, Mark! Slaap je nog steeds? We staan op het punt te vertrekken: de zon komt over een half uur op.'],
        ['Mark', 'Ya voy, ya voy. Llevo dos noches sin dormir bien por la altura.', 'Ik kom al, ik kom al. Ik slaap al twee nachten niet goed door de hoogte.'],
        ['Wara', 'Es el soroche. Tómate un mate de coca y abrígate bien, ¿ya? Poco a poco te vas acostumbrando.', 'Dat is de hoogteziekte. Drink een cocathee en kleed je warm aan, oké? Beetje bij beetje wen je eraan.'],
        ['Mark', 'Gracias. ¿Cuánto tiempo llevas trabajando de guía?', 'Dank je. Hoe lang werk je al als gids?'],
        ['Wara', 'Llevo ocho años haciendo este recorrido y sigo emocionándome cada vez. Mira: como llovió anoche, el salar se convirtió en un espejo.', 'Ik doe deze tocht al acht jaar en ik raak nog elke keer ontroerd. Kijk: doordat het vannacht geregend heeft, is de zoutvlakte een spiegel geworden.'],
        ['Mark', '¡Qué belleza! No puedo dejar de tomar fotos. ¿Y esos pájaros rosados?', 'Wat prachtig! Ik kan niet ophouden met foto\'s maken. En die roze vogels?'],
        ['Wara', 'Son flamencos. Si nos acercamos, se echan a volar, así que mejor los miramos desde aquí.', 'Dat zijn flamingo\'s. Als we dichterbij komen, vliegen ze op, dus we kunnen beter van hieraf kijken.'],
        ['Mark', 'Ayer en Uyuni me puse a hablar con una casera del mercado y acabé comprando tres chompas de alpaca.', 'Gisteren in Uyuni raakte ik aan de praat met een marktvrouw en uiteindelijk kocht ik drie alpacatruien.'],
        ['Wara', '¡Jajaja! Así son las caseras. ¿Por lo menos te dio yapa?', 'Hahaha! Zo zijn de marktvrouwen. Heb je er tenminste iets gratis bij gekregen?'],
        ['Mark', 'Sí, unos guantes chiquitos para la wawa de mi hermana. Oye, me está dando hambre…', 'Ja, kleine handschoentjes voor de baby van mijn zus. Zeg, ik begin honger te krijgen…'],
        ['Wara', 'Tranquilo, la movilidad está a punto de llegar con el desayuno: salteñas calientitas. Pero ojo, que el jugo suele chorrear.', 'Rustig maar, het busje komt er zo aan met het ontbijt: lekker warme salteñas. Maar pas op, het sap druipt er meestal uit.']
      ],
      q: [
        { t: 'mc', q: '¿Por qué Mark no ha dormido bien?', o: ['Por la altura', 'Porque hacía mucho calor', 'Porque se acostó muy tarde'] },
        { t: 'mc', q: '¿Cuánto tiempo lleva Wara trabajando de guía?', o: ['Ocho años', 'Tres días', 'Dos años'] },
        { t: 'mc', q: '¿Qué pasó ayer en el mercado de Uyuni?', o: ['Mark acabó comprando tres chompas', 'Mark perdió sus guantes', 'Mark no quiso hablar con nadie'] }
      ]
    },
    culture: { t: 'Bolivia: zout, hoogte en Aymara-woorden', html: `<p>🧂 De <b>Salar de Uyuni</b> is de grootste zoutvlakte ter wereld: ruim 10.000 km² wit, op ongeveer 3.650 meter hoogte. In de regentijd (ongeveer december tot maart) blijft er een dun laagje water op staan en verandert de vlakte in een reusachtige <b>spiegel</b>. Onder het zout ligt een van de grootste lithiumvoorraden op aarde.</p>
<p>🚡 <b>La Paz</b> ligt op zo'n 3.600 meter en buurstad El Alto nog hoger. Tegen de <i>soroche</i> (hoogteziekte) drinken mensen <i>mate de coca</i>. Het openbaar vervoer gaat er door de lucht: <b>Mi Teleférico</b> is het grootste stedelijke kabelbaannet ter wereld.</p>
<p>🗣️ Het Spaans van Bolivia zit vol woorden uit het <b>Aymara</b> en <b>Quechua</b>: <i>la wawa</i> (baby), <i>la yapa</i> (extraatje) en <i>¡jallalla!</i> (proost, leve!). Op de markt noemen verkoopster en klant elkaar allebei <i>casera</i> of <i>casero</i>. En zinnen eindigen vaak op een vriendelijk <i>¿ya?</i></p>` },
    ex: [
      { t: 'cloze', s: 'Llevo tres días ___ por Bolivia.', a: ['viajando'], o: ['viajando', 'viajar', 'viajado'], nl: 'Ik reis al drie dagen door Bolivia.', tag: 'periphrasis-adv' },
      { t: 'cloze', s: '___ ocho años trabajando de guía.', a: ['Llevo'], o: ['Llevo', 'Hace', 'Soy'], nl: 'Ik werk al acht jaar als gids.', tag: 'periphrasis-adv' },
      { t: 'cloze', s: 'Llevo dos noches sin ___ bien.', a: ['dormir'], o: ['dormir', 'durmiendo', 'dormido'], nl: 'Ik slaap al twee nachten niet goed.', x: 'Ontkennend: llevar + tijd + sin + infinitief.', tag: 'periphrasis-adv' },
      { t: 'cloze', s: '¿Sigues ___ en La Paz?', a: ['viviendo'], o: ['viviendo', 'vivir', 'vivido'], nl: 'Woon je nog steeds in La Paz?', tag: 'periphrasis-adv' },
      { t: 'cloze', s: 'Estamos a punto ___ salir.', a: ['de'], o: ['de', 'a', 'en'], nl: 'We staan op het punt te vertrekken.', tag: 'periphrasis-adv' },
      { t: 'cloze', s: 'Cuando vio la foto, se puso ___ reír.', a: ['a'], o: ['a', 'de', 'en'], nl: 'Toen ze de foto zag, begon ze te lachen.', tag: 'periphrasis-adv' },
      { t: 'cloze', s: 'Por fin dejó ___ llover.', a: ['de'], o: ['de', 'a', 'que'], nl: 'Eindelijk hield het op met regenen.', tag: 'periphrasis-adv' },
      { t: 'cloze', s: 'No quería gastar plata, pero acabé ___ tres chompas.', a: ['comprando'], o: ['comprando', 'comprar', 'de comprar'], nl: 'Ik wilde geen geld uitgeven, maar uiteindelijk kocht ik drie truien.', x: 'Acabar + gerundio = uiteindelijk. Acabar de + infinitief = net.', tag: 'periphrasis-adv' },
      { t: 'cloze', s: 'Poco a poco te vas ___ a la altura.', a: ['acostumbrando'], o: ['acostumbrando', 'acostumbrar', 'acostumbrado'], nl: 'Beetje bij beetje wen je aan de hoogte.', tag: 'periphrasis-adv' },
      { t: 'cloze', s: '___ una hora esperando cuando por fin llegó la movilidad.', a: ['Llevábamos'], o: ['Llevábamos', 'Hemos llevado', 'Llevaremos'], nl: 'We stonden al een uur te wachten toen het busje eindelijk kwam.', x: 'In het verleden: llevaba + tijd + gerundio.', tag: 'periphrasis-adv' },
      { t: 'mc', q: '«Acabo de comer» en «Acabé comiendo solo» betekenen:', o: ['Ik heb net gegeten / Uiteindelijk at ik alleen', 'Ik ben klaar met eten / Ik at net alleen', 'Ik ga zo eten / Ik at alles alleen op'], tag: 'periphrasis-adv' },
      { t: 'mc', q: 'Welke zin betekent «Ik leer al twee jaar Spaans»?', o: ['Llevo dos años estudiando español.', 'Llevo dos años a estudiar español.', 'Estoy dos años estudiando español.'], tag: 'periphrasis-adv' },
      { t: 'mc', q: '«Sigo sin entender» betekent:', o: ['Ik begrijp het nog steeds niet.', 'Ik blijf het begrijpen.', 'Ik begrijp het zonder moeite.'], tag: 'periphrasis-adv' },
      { t: 'mc', q: 'Wat is «el soroche»?', o: ['de hoogteziekte', 'een warme trui', 'een zoutvlakte'], tag: 'vocab' },
      { t: 'mc', q: 'Je krijgt op de markt iets gratis erbij. Dat is…', o: ['la yapa', 'la pollera', 'la movilidad'], tag: 'vocab' },
      { t: 'order', s: 'Llevo ocho años haciendo este recorrido.', nl: 'Ik doe deze tocht al acht jaar.', tag: 'periphrasis-adv' },
      { t: 'tr', nl: 'Ik woon al een jaar in Bolivia.', a: ['Llevo un año viviendo en Bolivia.', 'Llevo un año en Bolivia.', 'Hace un año que vivo en Bolivia.', 'Vivo en Bolivia desde hace un año.', 'Ya llevo un año viviendo en Bolivia.', 'Ya llevo un año en Bolivia.'], tag: 'periphrasis-adv' },
      { t: 'tr', nl: 'We staan op het punt te vertrekken.', a: ['Estamos a punto de salir.', 'Estamos a punto de irnos.', 'Estamos por salir.', 'Estamos a punto de partir.', 'Estamos por irnos.'], tag: 'periphrasis-adv' },
      { t: 'tr', nl: 'Het bleef de hele nacht regenen.', a: ['Siguió lloviendo toda la noche.', 'Siguió lloviendo durante toda la noche.', 'Continuó lloviendo toda la noche.', 'No dejó de llover en toda la noche.', 'No dejó de llover toda la noche.'], tag: 'periphrasis-adv' },
      { t: 'match', p: [['llevar + gerundio', 'al … bezig zijn'], ['seguir + gerundio', 'nog steeds …'], ['ponerse a', 'beginnen te …'], ['estar a punto de', 'op het punt staan te …'], ['acabar + gerundio', 'uiteindelijk …']], tag: 'vocab' }
    ],
    say: [['Llevo tres días viajando por Bolivia.', 'Ik reis al drie dagen door Bolivia.'], ['Sigo emocionándome cada vez.', 'Ik raak nog elke keer ontroerd.'], ['Estamos a punto de salir.', 'We staan op het punt te vertrekken.'], ['Acabé comprando tres chompas de alpaca.', 'Uiteindelijk kocht ik drie alpacatruien.']],
    task: { nl: 'Vertel in 6 tot 8 zinnen over iets wat je al een tijd doet (een hobby, je werk, Spaans leren). Gebruik llevar + gerundio, seguir + gerundio, ponerse a of estar a punto de, en acabar + gerundio.', model: 'Llevo casi un año estudiando español. Al principio me ponía a estudiar solo los domingos, pero poco a poco fui encontrando mi ritmo. Ahora practico todos los días y sigo aprendiendo palabras nuevas. Hace un mes estuve a punto de dejarlo porque tenía mucho trabajo, pero acabé estudiando en el tren. Llevo tres semanas sin faltar ni un día. No voy a dejar de practicar hasta poder viajar por Bolivia sin problemas.' },
    scenario: { nl: 'Je bent op de Salar de Uyuni met een Boliviaanse gids. Vertel hoe je reis tot nu toe gaat en vraag naar haar werk en naar Bolivia.', role: 'Eres Wara, una guía boliviana de 30 años, de origen aymara, que lleva ocho años haciendo recorridos por el Salar de Uyuni. Eres tranquila, cálida y bromista. Usas muchas perífrasis verbales («llevo ocho años trabajando…», «sigue haciendo frío», «estamos a punto de…», «te vas acostumbrando», «acabamos comiendo…») y le preguntas al estudiante cuánto tiempo lleva viajando o estudiando español. Usas palabras bolivianas como «¿ya?», «la movilidad», «la chompa», «la yapa», «la wawa», «casera» y «soroche», y las explicas si el estudiante no las entiende.', goal: 'Gebruik minstens twee keer llevar + gerundio en één keer seguir + gerundio of estar a punto de.' },
    reading: {
      t: 'La ciudad que viaja por el aire', type: 'Reportage',
      p: [
        ['La Paz lleva más de diez años moviéndose por el aire. Desde 2014, miles de paceños dejaron de pasar horas en el tráfico y se pusieron a viajar en teleférico. Hoy la red tiene diez líneas y sigue siendo la red de teleféricos urbanos más grande del mundo.',
          'La Paz verplaatst zich al meer dan tien jaar door de lucht. Sinds 2014 staan duizenden inwoners niet meer urenlang in het verkeer en zijn ze met de kabelbaan gaan reizen. Nu heeft het net tien lijnen en het is nog steeds het grootste stedelijke kabelbaannet ter wereld.'],
        ['La ciudad está a unos 3.600 metros de altura y El Alto, la ciudad vecina, a más de 4.000. Antes, bajar de una a otra en minibús podía tardar una hora; ahora el viaje dura unos quince minutos. Los turistas que acaban de llegar suelen marearse un poco, pero poco a poco se van acostumbrando.',
          'De stad ligt op ongeveer 3.600 meter hoogte en El Alto, de buurstad, op meer dan 4.000. Vroeger kon de afdaling van de ene naar de andere stad per minibus een uur duren; nu duurt de rit ongeveer een kwartier. Toeristen die net zijn aangekomen worden meestal een beetje duizelig, maar langzaamaan wennen ze eraan.'],
        ['En las cabinas viaja todo el mundo: estudiantes, oficinistas y también las cholitas, mujeres aymaras que llevan pollera, manta y sombrero bombín. Durante mucho tiempo fueron discriminadas, pero ellas siguieron luchando por sus derechos. Hoy hay cholitas que trabajan como abogadas, presentadoras de televisión y hasta escaladoras de montañas.',
          'In de cabines reist iedereen: studenten, kantoormensen en ook de cholitas, Aymara-vrouwen die een wijde rok, een omslagdoek en een bolhoed dragen. Lange tijd werden ze gediscrimineerd, maar ze bleven vechten voor hun rechten. Nu zijn er cholitas die werken als advocaat, tv-presentatrice en zelfs als bergbeklimster.'],
        ['Los domingos, muchos visitantes suben a El Alto para ver a las cholitas luchadoras. Cuando la lucha está a punto de empezar, el público se pone a gritar y nadie deja de aplaudir hasta el final. Más de uno llega solo por curiosidad y acaba volviendo el domingo siguiente.',
          'Op zondag gaan veel bezoekers omhoog naar El Alto om de worstelende cholitas te zien. Als het gevecht op het punt staat te beginnen, begint het publiek te schreeuwen en houdt niemand op met klappen tot het einde. Menigeen komt alleen uit nieuwsgierigheid en komt de zondag erna toch weer terug.']
      ],
      gl: [['paceño / paceña', 'uit La Paz'], ['la red', 'het netwerk'], ['marearse', 'duizelig of misselijk worden'], ['la manta', 'de omslagdoek'], ['el sombrero bombín', 'de bolhoed'], ['la escaladora', 'de bergbeklimster']],
      q: [
        { t: 'mc', q: '¿Qué cambió en La Paz desde 2014?', o: ['Mucha gente dejó de pasar horas en el tráfico y viaja en teleférico', 'Se prohibieron los minibuses', 'La ciudad se trasladó a El Alto'] },
        { t: 'mc', q: '¿Qué les suele pasar a los turistas que acaban de llegar?', o: ['Se marean un poco por la altura', 'Se pierden en el teleférico', 'Compran una pollera'] },
        { t: 'mc', q: '¿Qué dice el texto sobre las cholitas?', o: ['Siguieron luchando por sus derechos y hoy tienen todo tipo de profesiones', 'Ya no llevan ropa tradicional', 'No pueden viajar en teleférico'] },
        { t: 'mc', q: '¿Qué pasa los domingos en El Alto?', o: ['Hay lucha libre de cholitas', 'Cierran el teleférico', 'Hay un mercado de sal'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 12 ───────────────────────── */
  U({
    id: 'b2-12', level: 'B2', icon: '🧉', title: 'Busco a alguien que sepa…', nl: 'Subjuntivo na que: wat je zoekt, wat niet bestaat en «lo que quieras»',
    goals: ['Kiezen tussen indicativo (iets wat je kent) en subjuntivo (iets wat je zoekt): Tengo una pieza que tiene patio / Busco una pieza que tenga patio', 'Ontkennen en vragen met nadie que, nada que en ¿hay alguien que…? + subjuntivo, ook in het verleden (No había nadie que supiera…)', 'De keuze aan de ander laten: lo que quieras, donde quieras, cuando puedas, pase lo que pase'],
    vocab: [
      ['alguien que', 'iemand die'], ['nadie que', 'niemand die'], ['cualquiera', 'wie dan ook, om het even welke'], ['cualquier cosa', 'wat dan ook, om het even wat'],
      ['lo que quieras', 'wat je maar wilt'], ['donde quieras', 'waar je maar wilt'], ['cuando puedas', 'wanneer je kunt'], ['como prefieras', 'zoals je het liefst hebt'],
      ['pase lo que pase', 'wat er ook gebeurt'], ['da igual', 'het maakt niet uit'], ['el alquiler', 'de huur'], ['la pieza', 'de kamer', 'PY · AR · CL'],
      ['amoblado / amoblada', 'gemeubileerd', 'LatAm'], ['el aire acondicionado', 'de airco'], ['el patio', 'de binnenplaats, de patio'], ['el quincho', 'de overdekte barbecueplek', 'PY · AR · UY'],
      ['el dueño / la dueña', 'de eigenaar / de eigenares'], ['el aviso', 'de advertentie', 'LatAm'], ['compartir', 'delen'], ['el colectivo', 'de (stads)bus', 'PY · AR'],
      ['el tereré', 'koude mate met kruiden', 'PY'], ['la guampa', 'de beker voor tereré (vaak van hoorn)', 'PY'], ['la bombilla', 'het metalen rietje (voor mate en tereré)'], ['los yuyos', 'de (genees)kruiden', 'PY · AR · UY'],
      ['la chipa', 'het kaasbroodje van maniokmeel', 'PY'], ['la sopa paraguaya', 'hartige maïscake (geen soep!)', 'PY'], ['el jopara', 'de mengeling van Spaans en Guaraní', 'PY'], ['bilingüe', 'tweetalig'],
      ['¿mba’éichapa?', 'hoe gaat het? (Guaraní)', 'PY'], ['iporã', 'goed, mooi (Guaraní)', 'PY'], ['aguyje', 'dank je (Guaraní)', 'PY'], ['haku', 'heet, warm (Guaraní)', 'PY']
    ],
    grammar: [
      { t: 'Bekend of nog op zoek?', es: 'Oraciones de relativo: indicativo o subjuntivo',
        html: `<p>Na <b>que</b> kies je de wijs op basis van één vraag: <b>ken je het al, of zoek je het nog?</b></p>
<p>📌 <b>Bekend, bestaat zeker → indicativo</b>: <i>Tengo una pieza que <b>tiene</b> aire acondicionado.</i> (Die kamer is er, ik ken hem.)</p>
<p>📌 <b>Onbekend, je zoekt of wenst het → subjuntivo</b>: <i>Busco una pieza que <b>tenga</b> aire acondicionado.</i> (Welke dan ook, als hij maar airco heeft.)</p>
<p>📌 Dit hoor je vaak na <b>buscar, necesitar, querer, ¿conoces…?</b> en <b>¿hay…?</b>: <i>Necesitamos a alguien que <b>ayude</b> con la limpieza. ¿Hay algún colectivo que <b>pase</b> cerca?</i></p>
<p>📌 Let op de <b>a</b> bij personen: een bekende persoon krijgt <i>a</i>, een onbekende niet: <i>Busco <b>a</b> un profesor que <b>habla</b> guaraní</i> (ik weet wie) ↔ <i>Busco un profesor que <b>hable</b> guaraní</i> (maakt niet uit wie). <i>Alguien</i> en <i>nadie</i> krijgen wél altijd <i>a</i>: <i>Busco <b>a alguien</b> que hable guaraní.</i></p>`,
        table: [['', 'wijs', 'voorbeeld'], ['bekend', 'indicativo', 'Vivo en una casa que tiene patio.'], ['gezocht', 'subjuntivo', 'Quiero una casa que tenga patio.'], ['bekend', 'indicativo', 'Conozco a una chica que habla guaraní.'], ['gezocht', 'subjuntivo', '¿Conoces a alguien que hable guaraní?']],
        ex: [['Busco una pieza que no esté muy lejos del centro.', 'Ik zoek een kamer die niet te ver van het centrum ligt.'], ['Esta es la pieza que se alquila: tiene aire y da al patio.', 'Dit is de kamer die verhuurd wordt: hij heeft airco en kijkt uit op de patio.']],
        sum: 'Conocido → indicativo (tengo una pieza que tiene aire). Buscado o deseado → subjuntivo (busco una pieza que tenga aire).' },
      { t: 'Nadie que, nada que + subjuntivo', es: 'Antecedente negativo',
        html: `<p>Bestaat iets of iemand <b>niet</b> (voor zover jij weet)? Dan volgt altijd de <b>subjuntivo</b>:</p>
<p>📌 <i>No hay <b>nadie que hable</b> tan rápido.</i> · <i>No conozco a <b>nadie que no tome</b> tereré.</i> · <i>No encuentro <b>nada que me guste</b>.</i> · <i>No hay <b>ningún</b> supermercado <b>que abra</b> de noche.</i></p>
<p>📌 Ook bij <b>weinig</b>: <i>Hay <b>poca gente que sepa</b> escribir bien en guaraní.</i></p>
<p>📌 Staat de hoofdzin in het <b>verleden</b>, dan gebruik je de <b>imperfecto de subjuntivo</b>: <i>Buscaba una casa que <b>tuviera</b> patio.</i> · <i>No había nadie que <b>supiera</b> inglés.</i></p>`,
        table: [['hoofdzin', 'bijzin', 'voorbeeld'], ['No hay nadie que…', 'presente de subjuntivo', 'No hay nadie que lo sepa.'], ['No había nadie que…', 'imperfecto de subjuntivo', 'No había nadie que lo supiera.'], ['Busco algo que…', 'presente de subjuntivo', 'Busco algo que sea barato.'], ['Buscaba algo que…', 'imperfecto de subjuntivo', 'Buscaba algo que fuera barato.']],
        ex: [['En esta casa no hay nadie que no hable guaraní.', 'In dit huis is er niemand die geen Guaraní spreekt.'], ['No encontré ninguna pieza que tuviera patio.', 'Ik vond geen enkele kamer die een patio had.']],
        sum: 'Si no existe (nadie, nada, ningún… que) → subjuntivo. Con el verbo principal en pasado → imperfecto de subjuntivo.' },
      { t: 'Lo que quieras: jij mag kiezen', es: 'Donde quieras · Lo que quieras · Pase lo que pase',
        html: `<p>Met <b>lo que, donde, cuando, como, quien + subjuntivo</b> laat je de keuze open. In het Nederlands zeg je dan «…maar»:</p>
<p>📌 <i>Siéntate <b>donde quieras</b>.</i> (waar je maar wilt) · <i>Cocina <b>lo que quieras</b>.</i> (wat je maar wilt) · <i>Ven <b>cuando puedas</b>.</i> (wanneer je kunt) · <i>Hazlo <b>como prefieras</b>.</i></p>
<p>📌 Vergelijk met de indicativo, als je het antwoord al weet: <i>Hago <b>lo que quieres</b>.</i> (Ik doe wat jij wilt, en ik weet wat dat is.) ↔ <i>Haré <b>lo que quieras</b>.</i> (wat je ook maar wilt)</p>
<p>📌 <b>Cualquier(a) … que</b> + subjuntivo: <i>Llámame por <b>cualquier cosa que necesites</b>.</i></p>
<p>📌 Twee keer hetzelfde werkwoord = «wat/waar/hoe … ook»: <i><b>pase lo que pase</b></i> (wat er ook gebeurt), <i><b>digan lo que digan</b></i> (wat ze ook zeggen), <i><b>sea como sea</b></i> (hoe dan ook), <i><b>vayas donde vayas</b></i> (waar je ook heen gaat).</p>`,
        table: [['Spaans', 'Nederlands'], ['lo que quieras', 'wat je maar wilt'], ['donde quieras', 'waar je maar wilt'], ['cuando puedas', 'wanneer je kunt'], ['como prefieras', 'zoals je wilt'], ['quien quiera', 'wie maar wil'], ['pase lo que pase', 'wat er ook gebeurt']],
        ex: [['Puedes invitar a quien quieras.', 'Je mag uitnodigen wie je maar wilt.'], ['Pase lo que pase, aquí siempre vas a tener una casa.', 'Wat er ook gebeurt, hier heb je altijd een thuis.']],
        sum: 'Lo que / donde / cuando / como / quien + subjuntivo = elección abierta: siéntate donde quieras. Pase lo que pase, sea como sea.' }
    ],
    verbs: ['tener', 'saber', 'hablar', 'querer', 'poder', 'ser', 'estar', 'hacer', 'decir', 'vivir', 'buscar', 'necesitar', 'conocer', 'preferir'], tenses: ['subj', 'impsubj'],
    dialogue: {
      t: 'Se alquila una pieza', place: 'Asunción 🇵🇾',
      lines: [
        ['Arami', '¡Hola! ¿Vos sos Mark? Mba’éichapa. Pasá, pasá, que afuera hace un calor terrible.', 'Hoi! Ben jij Mark? Hoe gaat het? Kom binnen, kom binnen, want buiten is het vreselijk heet.'],
        ['Mark', '¡Hola, Arami! Vengo por el aviso: busco una pieza que tenga aire acondicionado y que no esté muy lejos del centro.', 'Hoi, Arami! Ik kom voor de advertentie: ik zoek een kamer die airco heeft en die niet te ver van het centrum ligt.'],
        ['Arami', 'Entonces llegaste al lugar correcto. Mirá, esta es la pieza que se alquila: tiene aire, está amoblada y da al patio.', 'Dan ben je op de juiste plek. Kijk, dit is de kamer die verhuurd wordt: hij heeft airco, is gemeubileerd en kijkt uit op de patio.'],
        ['Mark', 'Me encanta. ¿Y hay algún colectivo que pase cerca y que me lleve a la universidad?', 'Ik vind hem geweldig. En is er een bus die hier in de buurt langskomt en die me naar de universiteit brengt?'],
        ['Arami', 'Sí, el 30 pasa por la esquina y te deja en la puerta. Lo que no hay en este barrio es un supermercado que abra de noche.', 'Ja, lijn 30 komt langs de hoek en zet je voor de deur af. Wat er in deze wijk niet is, is een supermarkt die \'s nachts open is.'],
        ['Mark', 'No importa. ¿Y cuáles son las reglas de la casa?', 'Dat geeft niet. En wat zijn de huisregels?'],
        ['Arami', 'Pocas. Podés cocinar lo que quieras e invitar a quien quieras, pero necesitamos a alguien que ayude a limpiar el quincho después de los asados.', 'Weinig. Je mag koken wat je wilt en uitnodigen wie je wilt, maar we hebben iemand nodig die helpt de barbecueplek schoon te maken na de barbecues.'],
        ['Mark', 'Hecho. Por cierto, estoy buscando a alguien que me enseñe un poco de guaraní. ¿Conoces a alguien?', 'Afgesproken. Trouwens, ik zoek iemand die me een beetje Guaraní leert. Ken jij iemand?'],
        ['Arami', '¡En esta casa no hay nadie que no hable guaraní! Empezamos hoy: «haku» quiere decir que hace calor, y cuando hace calor se toma tereré.', 'In dit huis is er niemand die geen Guaraní spreekt! We beginnen vandaag: «haku» wil zeggen dat het heet is, en als het heet is drink je tereré.'],
        ['Mark', '¿Tereré? ¿Es como el mate?', 'Tereré? Is dat zoiets als mate?'],
        ['Arami', 'Sí, pero con agua bien fría y yuyos. Sentate donde quieras, que ya traigo la guampa.', 'Ja, maar met ijskoud water en kruiden. Ga zitten waar je wilt, ik haal de beker.'],
        ['Mark', 'Aguyje, Arami. Creo que no voy a encontrar ningún lugar que me guste más que este.', 'Dank je, Arami. Ik denk niet dat ik een plek ga vinden die me beter bevalt dan deze.']
      ],
      q: [
        { t: 'mc', q: '¿Qué tipo de pieza busca Mark?', o: ['Una que tenga aire acondicionado y no esté lejos del centro', 'Una que tenga cocina propia', 'Una que esté cerca de un supermercado'] },
        { t: 'mc', q: '¿Qué no hay en el barrio?', o: ['Un supermercado que abra de noche', 'Un colectivo que pase cerca', 'Una universidad'] },
        { t: 'mc', q: '¿Quién le va a enseñar guaraní a Mark?', o: ['La gente de la casa, porque todos lo hablan', 'Un profesor de la universidad', 'Nadie: en Asunción no se habla guaraní'] }
      ]
    },
    culture: { t: 'Paraguay: twee talen en één tereré', html: `<p>🗣️ <b>Paraguay</b> is echt <b>tweetalig</b>: het <b>Guaraní</b> is sinds 1992 officieel naast het Spaans en de meeste Paraguayanen spreken het elke dag, wat hun afkomst ook is. Vaak worden de twee talen in één zin gemengd; dat heet <i>jopara</i>. Je hoort meteen <i>¿mba’éichapa?</i> (hoe gaat het?), <i>iporã</i> (goed) en <i>aguyje</i> (dank je).</p>
<p>🧉 <b>Tereré</b> is mate met ijskoud water en verse kruiden (<i>yuyos</i>), gedronken uit een <i>guampa</i> met een <i>bombilla</i>. Eén beker gaat de kring rond. Sinds 2020 staat het op de UNESCO-lijst van immaterieel erfgoed. En let op: <i>sopa paraguaya</i> is geen soep, maar een hartige maïscake.</p>
<p>👋 Net als in Argentinië en Uruguay zeggen Paraguayanen onder elkaar <b>vos</b>: <i>vos sos, vos tenés, pasá, mirá, sentate</i>. In de subjuntivo verandert er niets: <i>lo que quieras, donde quieras</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Busco una pieza que ___ aire acondicionado.', a: ['tenga'], o: ['tenga', 'tiene', 'tendrá'], nl: 'Ik zoek een kamer die airco heeft.', tag: 'subj-relative' },
      { t: 'cloze', s: 'Vivo en una casa que ___ un patio enorme.', a: ['tiene'], o: ['tiene', 'tenga', 'tuviera'], nl: 'Ik woon in een huis dat een enorme patio heeft.', x: 'Het huis bestaat en je kent het: indicativo.', tag: 'subj-relative' },
      { t: 'cloze', s: '¿Conoces a alguien que ___ guaraní?', a: ['hable', 'sepa'], o: ['hable', 'habla', 'hablar'], nl: 'Ken jij iemand die Guaraní spreekt?', tag: 'subj-relative' },
      { t: 'cloze', s: 'En esta casa no hay nadie que no ___ tereré.', a: ['tome'], o: ['tome', 'toma', 'tomar'], nl: 'In dit huis is er niemand die geen tereré drinkt.', tag: 'subj-relative' },
      { t: 'cloze', s: 'Necesitamos a alguien que ___ con la limpieza.', a: ['ayude'], o: ['ayude', 'ayuda', 'ayudará'], nl: 'We hebben iemand nodig die helpt met schoonmaken.', tag: 'subj-relative' },
      { t: 'cloze', s: 'Siéntate donde ___.', a: ['quieras', 'prefieras'], o: ['quieras', 'quieres', 'querrás'], nl: 'Ga zitten waar je maar wilt.', tag: 'subj-relative' },
      { t: 'cloze', s: 'Buscaba una casa que ___ patio, pero no encontré ninguna.', a: ['tuviera', 'tuviese'], o: ['tuviera', 'tenga', 'tiene'], nl: 'Ik zocht een huis dat een patio had, maar ik vond er geen.', x: 'Hoofdzin in het verleden → imperfecto de subjuntivo.', tag: 'subj-relative' },
      { t: 'cloze', s: 'No había nadie que ___ inglés.', a: ['hablara', 'supiera', 'hablase', 'supiese'], o: ['hablara', 'hablaba', 'hable'], nl: 'Er was niemand die Engels sprak.', tag: 'subj-relative' },
      { t: 'cloze', s: 'Pase lo que ___, te voy a ayudar.', a: ['pase'], o: ['pase', 'pasa', 'pasó'], nl: 'Wat er ook gebeurt, ik ga je helpen.', tag: 'subj-relative' },
      { t: 'cloze', s: 'Puedes venir cuando ___.', a: ['quieras', 'puedas'], o: ['quieras', 'quieres', 'querer'], nl: 'Je mag komen wanneer je maar wilt.', tag: 'subj-relative' },
      { t: 'cloze', s: 'Llámame por cualquier cosa que ___.', a: ['necesites'], o: ['necesites', 'necesitas', 'necesitar'], nl: 'Bel me voor wat je ook maar nodig hebt.', tag: 'subj-relative' },
      { t: 'mc', q: '«Busco a un profesor que habla guaraní» of «Busco un profesor que hable guaraní»: wat is het verschil?', o: ['De eerste is een bepaalde leraar die je kent; de tweede mag om het even welke leraar zijn', 'Er is geen verschil', 'De eerste is formeel, de tweede informeel'], tag: 'subj-relative' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['No conozco a nadie que viva en Paraguay.', 'No conozco a nadie que vive en Paraguay.', 'No conozco nadie que vivir en Paraguay.'], x: 'Na «nadie que» altijd subjuntivo.', tag: 'subj-relative' },
      { t: 'mc', q: '«Digan lo que digan» betekent:', o: ['Wat ze ook zeggen', 'Zeg wat je wilt', 'Ze zeggen het zoals het is'], tag: 'subj-relative' },
      { t: 'mc', q: 'Wat is «sopa paraguaya»?', o: ['een hartige maïscake', 'een koude soep', 'een kruidenthee'], tag: 'vocab' },
      { t: 'mc', q: 'Hoe heet de mengeling van Spaans en Guaraní?', o: ['jopara', 'guampa', 'tereré'], tag: 'vocab' },
      { t: 'order', s: 'Busco a alguien que me enseñe guaraní.', nl: 'Ik zoek iemand die me Guaraní leert.', tag: 'subj-relative' },
      { t: 'tr', nl: 'Ik zoek een kamer die niet duur is.', a: ['Busco una pieza que no sea cara.', 'Busco un cuarto que no sea caro.', 'Busco una habitación que no sea cara.', 'Estoy buscando una pieza que no sea cara.', 'Estoy buscando un cuarto que no sea caro.', 'Estoy buscando una habitación que no sea cara.'], tag: 'subj-relative' },
      { t: 'tr', nl: 'Er is niemand die het weet.', a: ['No hay nadie que lo sepa.', 'No hay nadie que sepa.', 'No hay nadie que sepa eso.', 'No hay nadie que lo sepa aquí.'], tag: 'subj-relative' },
      { t: 'tr', nl: 'Doe wat je wilt.', a: ['Haz lo que quieras.', 'Hacé lo que quieras.', 'Haga lo que quiera.', 'Hagan lo que quieran.'], tag: 'subj-relative' },
      { t: 'match', p: [['lo que quieras', 'wat je maar wilt'], ['donde quieras', 'waar je maar wilt'], ['nadie que', 'niemand die'], ['la pieza', 'de kamer'], ['el tereré', 'koude mate']], tag: 'vocab' }
    ],
    say: [['Busco una pieza que tenga aire acondicionado.', 'Ik zoek een kamer die airco heeft.'], ['¿Conoces a alguien que hable guaraní?', 'Ken jij iemand die Guaraní spreekt?'], ['No hay nadie que no tome tereré.', 'Er is niemand die geen tereré drinkt.'], ['Siéntate donde quieras.', 'Ga zitten waar je maar wilt.']],
    task: { nl: 'Schrijf een advertentie van 6 tot 8 zinnen: je zoekt een kamer, een huisgenoot of een taalmaatje. Beschrijf wat je zoekt met que + subjuntivo, gebruik één keer nadie que of nada que, en sluit af met cuando quieras of lo que prefieras.', model: 'Hola, me llamo Mark y voy a vivir tres meses en Asunción. Busco una pieza que esté cerca del centro y que tenga aire acondicionado. Prefiero una casa donde viva gente que quiera compartir la cocina y conversar. También busco a alguien que me enseñe guaraní, porque todavía no conozco a nadie que lo hable. No necesito nada que sea lujoso: con una cama y un escritorio me alcanza. Puedo pagar el alquiler como prefieran, por semana o por mes. Escríbanme cuando quieran. ¡Aguyje!' },
    scenario: { nl: 'Je bekijkt een kamer in een gedeeld huis in Asunción. Vertel wat voor kamer je zoekt en vraag naar het huis, de buurt en de regels.', role: 'Eres Arami, una paraguaya de 26 años que vive en una casa compartida en Asunción y busca un compañero de casa. Eres alegre, directa y muy hospitalaria. Tratas al estudiante de «vos» (vos sos, tenés, mirá, pasá, sentate). Usas muchas oraciones de relativo con subjuntivo («buscamos a alguien que…», «no hay nadie que…», «cociná lo que quieras», «vení cuando puedas») y le preguntas qué tipo de pieza busca. Mezclas alguna palabra en guaraní («mba’éichapa», «iporã», «aguyje», «haku») y hablas del tereré, la chipa y el quincho; explicas las palabras si el estudiante no las entiende.', goal: 'Beschrijf wat je zoekt met minstens drie zinnen met que + subjuntivo (busco una pieza que…, necesito algo que…, ¿hay alguien que…?).' },
    reading: {
      t: 'Un país, dos lenguas', type: 'Artikel',
      p: [
        ['Paraguay es un caso único en América: casi toda la población, sea cual sea su origen, habla una lengua indígena. No hay otro país en la región que tenga una situación parecida. El guaraní es oficial junto con el español desde 1992, y la mayoría de los paraguayos lo usa todos los días.',
          'Paraguay is een uniek geval in Amerika: bijna de hele bevolking, wat haar afkomst ook is, spreekt een inheemse taal. Er is geen ander land in de regio dat een vergelijkbare situatie heeft. Het Guaraní is sinds 1992 officieel naast het Spaans, en de meeste Paraguayanen gebruiken het elke dag.'],
        ['En la calle es difícil encontrar a alguien que hable solo una de las dos lenguas. Lo normal es mezclarlas en la misma frase, una costumbre que se llama jopara. Quien llegue a Asunción escuchará enseguida «mba’éichapa» (¿cómo estás?) e «iporã» (bien).',
          'Op straat is het moeilijk iemand te vinden die maar één van de twee talen spreekt. Het is normaal om ze in dezelfde zin te mengen, een gewoonte die jopara heet. Wie in Asunción aankomt, hoort meteen «mba’éichapa» (hoe gaat het?) en «iporã» (goed).'],
        ['Durante mucho tiempo, el guaraní estuvo prohibido en las escuelas y muchos padres preferían que sus hijos hablaran solo español. Hoy la situación es otra: se enseña en todos los colegios, y muchas empresas buscan empleados que sepan atender al público en los dos idiomas.',
          'Lange tijd was het Guaraní op scholen verboden en veel ouders hadden liever dat hun kinderen alleen Spaans spraken. Nu is de situatie anders: het wordt op alle scholen onderwezen, en veel bedrijven zoeken werknemers die klanten in beide talen kunnen helpen.'],
        ['Y si hay algo que une a todos los paraguayos, es el tereré: yerba mate con agua helada y yuyos, que se comparte en una sola guampa. No importa dónde estés ni la hora que sea: siempre habrá alguien que te ofrezca uno. Desde 2020 es Patrimonio Cultural Inmaterial de la Humanidad.',
          'En als er iets is wat alle Paraguayanen verbindt, dan is het de tereré: yerba mate met ijskoud water en kruiden, die je deelt uit één beker. Het maakt niet uit waar je bent of hoe laat het is: er is altijd wel iemand die je er een aanbiedt. Sinds 2020 is het immaterieel cultureel erfgoed van de mensheid.']
      ],
      gl: [['indígena', 'inheems'], ['la costumbre', 'de gewoonte'], ['enseguida', 'meteen'], ['atender al público', 'klanten helpen'], ['helado / helada', 'ijskoud'], ['el patrimonio', 'het erfgoed']],
      q: [
        { t: 'mc', q: '¿Por qué Paraguay es un caso único?', o: ['Porque casi toda la población habla una lengua indígena', 'Porque nadie habla español', 'Porque tiene tres lenguas oficiales'] },
        { t: 'mc', q: '¿Qué es el jopara?', o: ['La mezcla de guaraní y español en la misma frase', 'Una bebida fría con yuyos', 'Una escuela bilingüe'] },
        { t: 'mc', q: '¿Qué buscan hoy muchas empresas?', o: ['Empleados que sepan atender en los dos idiomas', 'Empleados que hablen solo español', 'Profesores de inglés'] },
        { t: 'mc', q: '¿Qué dice el texto sobre el tereré?', o: ['Que siempre habrá alguien que te ofrezca uno', 'Que solo se toma en invierno', 'Que está prohibido compartirlo'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 13 ───────────────────────── */
  U({
    id: 'b2-13', level: 'B2', icon: '📻', title: 'Dijo que vendría', nl: 'Nieuws en geruchten doorgeven: indirecte rede in het verleden, según en «habría»',
    goals: ['Doorvertellen wat iemand zei, met de tijden die opschuiven (dijo que estaba, que había vuelto, que vendría, que lo hiciera)', 'Nieuwswerkwoorden gebruiken: afirmar, asegurar, negar que + subjuntivo, anunciar, reconocer', 'Laten horen dat iets nog niet bevestigd is: según, al parecer, por lo visto en het condicional van geruchten (habría renunciado)'],
    vocab: [
      ['afirmar', 'beweren, verklaren'], ['asegurar', 'verzekeren, stellig zeggen'], ['negar (ie)', 'ontkennen'], ['anunciar', 'aankondigen'], ['advertir (ie)', 'waarschuwen'],
      ['confesar (ie)', 'bekennen'], ['reconocer', 'toegeven, erkennen'], ['añadir', 'eraan toevoegen'], ['confirmar', 'bevestigen'], ['desmentir (ie)', '(een bericht) tegenspreken'],
      ['al parecer', 'naar het schijnt'], ['por lo visto', 'blijkbaar, zo te zien'], ['se rumorea que', 'het gerucht gaat dat'], ['el rumor', 'het gerucht'], ['la fuente', 'de bron'],
      ['el comunicado', 'de verklaring, het persbericht'], ['el titular', 'de krantenkop'], ['la rueda de prensa', 'de persconferentie'], ['el / la periodista', 'de journalist'],
      ['la emisora', 'de radiozender'], ['el chisme', 'de roddel'], ['enterarse de', 'horen van, te weten komen'], ['al día siguiente', 'de volgende dag'], ['la víspera', 'de dag ervoor'],
      ['dizque', 'zogenaamd, naar men zegt', 'LatAm (informeel)'], ['echar el cuento', 'het verhaal vertellen', 'VE (informeel)'], ['chamo / chama', 'jongen / meisje; gast', 'VE (informeel)'],
      ['¡Epa!', 'hé!, hoi!', 'VE'], ['la cola', 'de file; de rij', 'VE: ook file'], ['la arepa', 'het gevulde maïsbroodje'], ['el teleférico', 'de kabelbaan'], ['el cerro', 'de berg, heuvel'],
      ['emigrar', 'emigreren'], ['en el extranjero', 'in het buitenland']
    ],
    grammar: [
      { t: 'Doorvertellen in het verleden: de tijden schuiven op', es: 'El estilo indirecto en pasado',
        html: `<p>In B1 leerde je <i>Dice que…</i> en <i>Dijo que…</i>. Op B2 let je erop dat de tijden <b>één stap terug</b> gaan als je in het verleden doorvertelt (<i>dijo que, me contó que, explicó que</i>):</p>
<p>📌 <b>presente → imperfecto</b>: «Estoy cansada.» → <i>Dijo que <b>estaba</b> cansada.</i></p>
<p>📌 <b>indefinido / perfecto → pluscuamperfecto</b>: «Volví la semana pasada.» → <i>Dijo que <b>había vuelto</b> la semana anterior.</i></p>
<p>📌 <b>futuro → condicional</b>: «Anunciaré algo.» → <i>Aseguró que <b>anunciaría</b> algo.</i> En <b>ir a</b> → <i>iba a</i>.</p>
<p>📌 <b>imperativo → imperfecto de subjuntivo</b>: «No lo publiques.» → <i>Me pidió que no lo <b>publicara</b>.</i></p>
<p>Ook woorden van tijd en plaats schuiven mee: <i>mañana → al día siguiente</i>, <i>ayer → el día anterior</i>, <i>aquí → allí</i>, <i>este → ese</i>.</p>`,
        table: [['hij zei:', 'jij vertelt door:'], ['«Estoy feliz.»', 'Dijo que estaba feliz.'], ['«Volví ayer.»', 'Dijo que había vuelto el día anterior.'], ['«Lo haré mañana.»', 'Dijo que lo haría al día siguiente.'], ['«Llámame.»', 'Me pidió que lo llamara.']],
        ex: [['Me contó que el cantante había vuelto al país.', 'Hij vertelde me dat de zanger was teruggekeerd naar het land.'], ['Aseguró que pronto anunciaría algo especial.', 'Hij verzekerde dat hij binnenkort iets speciaals zou aankondigen.']],
        sum: 'Estilo indirecto en pasado: presente → imperfecto, indefinido → pluscuamperfecto, futuro → condicional, imperativo → imperfecto de subjuntivo.' },
      { t: 'Nieuwswerkwoorden', es: 'Verbos para citar',
        html: `<p>Journalisten (en goede vertellers) zeggen niet steeds <i>dijo</i>. Ze kiezen een werkwoord dat laat horen <b>hoe</b> iets gezegd werd:</p>
<p>📌 <b>afirmar, asegurar</b> (stellig), <b>explicar, añadir</b> (uitleg, aanvulling), <b>reconocer, confesar</b> (toegeven), <b>advertir</b> (waarschuwen), <b>anunciar</b> (iets nieuws).</p>
<p>⚠️ Na <b>negar que</b> (ontkennen) komt de <b>subjuntivo</b>, omdat je zegt dat iets níet zo is: <i>Negó que <b>hubiera</b> un problema.</i> Vergelijk: <i>Afirmó que <b>había</b> un problema.</i></p>
<p>📌 <b>Advertir que</b> + indicativo is «waarschuwen dat»; <b>advertir que</b> + subjuntivo is «waarschuwen om»: <i>Nos advirtió que no <b>saliéramos</b> de noche.</i></p>`,
        table: [['werkwoord', 'voorbeeld'], ['afirmar / asegurar', 'Aseguró que estaba feliz.'], ['reconocer', 'Reconoció que se había equivocado.'], ['negar que + subj.', 'Negó que hubiera un concierto.'], ['advertir que + subj.', 'Nos advirtió que no saliéramos.']],
        ex: [['El cantante no negó que hubiera un concierto.', 'De zanger ontkende niet dat er een concert was.'], ['La empresa reconoció que había cometido un error.', 'Het bedrijf gaf toe dat het een fout had gemaakt.']],
        sum: 'Afirmar, asegurar, reconocer + indicativo. Negar que + subjuntivo: Negó que hubiera un problema.' },
      { t: 'Niet bevestigd: según, al parecer en «habría»', es: 'Información no confirmada',
        html: `<p>Een goed nieuwsbericht laat horen <b>waar</b> informatie vandaan komt en of die al <b>zeker</b> is.</p>
<p>📌 Bron noemen: <i><b>según</b> la policía…</i>, <i><b>de acuerdo con</b> el comunicado…</i></p>
<p>📌 Nog onzeker: <i><b>al parecer</b>, <b>por lo visto</b>, <b>se rumorea que</b></i>, en informeel in veel landen <i><b>dizque</b></i> (zogenaamd).</p>
<p>📌 Het <b>condicional van geruchten</b> (<i>condicional periodístico</i>) betekent «zou … hebben / zou … zijn», precies zoals het Nederlandse <b>zou</b> in het nieuws: <i>El alcalde <b>habría renunciado</b>.</i> = De burgemeester zou zijn afgetreden (nog niet bevestigd). <i>El concierto <b>sería</b> el sábado.</i> = Het concert zou zaterdag zijn.</p>`,
        table: [['zeker', 'niet bevestigd'], ['El concierto es el sábado.', 'El concierto sería el sábado.'], ['El cantante volvió.', 'El cantante habría vuelto.'], ['Hay tres heridos.', 'Al parecer, habría tres heridos.']],
        ex: [['Según una página de chismes, el concierto sería gratis.', 'Volgens een roddelsite zou het concert gratis zijn.'], ['Por lo visto, nadie lo ha confirmado todavía.', 'Blijkbaar heeft nog niemand het bevestigd.']],
        sum: 'Según + fuente; al parecer, por lo visto: no confirmado. Condicional de rumor: habría renunciado = zou zijn afgetreden.' }
    ],
    verbs: ['decir', 'estar', 'ser', 'tener', 'volver', 'hacer', 'poder', 'venir', 'ir', 'saber', 'haber'], tenses: ['cond', 'condperf', 'impsubj'],
    dialogue: {
      t: '¿Te enteraste?', place: 'Caracas 🇻🇪',
      lines: [
        ['Génesis', '¡Epa, Mark! ¿Te enteraste? Dicen que la banda Cielo Abierto va a dar un concierto gratis en Caracas.', 'Hé Mark! Heb je het gehoord? Ze zeggen dat de band Cielo Abierto een gratis concert gaat geven in Caracas.'],
        ['Mark', '¿En serio? ¿Quién te lo dijo?', 'Echt? Wie heeft je dat verteld?'],
        ['Génesis', 'Un pana de la emisora me echó el cuento. Me dijo que el cantante había vuelto al país la semana pasada.', 'Een maat van de radiozender vertelde het me. Hij zei dat de zanger vorige week was teruggekeerd naar het land.'],
        ['Mark', '¿Y eso está confirmado? Porque en internet se rumorea de todo.', 'En is dat bevestigd? Want op internet gaan allerlei geruchten rond.'],
        ['Génesis', 'Todavía no. Según una página de chismes, el concierto sería el sábado en la plaza Altamira, pero no hay ningún comunicado.', 'Nog niet. Volgens een roddelsite zou het concert zaterdag op de Plaza Altamira zijn, maar er is geen persbericht.'],
        ['Mark', 'Entonces mejor esperamos. ¿Y el cantante no ha dicho nada?', 'Dan wachten we beter af. En heeft de zanger niets gezegd?'],
        ['Génesis', 'Sí, ayer dio una entrevista. Afirmó que estaba feliz de volver y aseguró que pronto anunciaría algo especial.', 'Ja, gisteren gaf hij een interview. Hij verklaarde dat hij blij was terug te zijn en verzekerde dat hij binnenkort iets speciaals zou aankondigen.'],
        ['Mark', '¿Y negó lo del concierto?', 'En ontkende hij dat van het concert?'],
        ['Génesis', 'No lo negó, pero tampoco lo confirmó. Y el productor me pidió que no lo publicara todavía.', 'Hij ontkende het niet, maar hij bevestigde het ook niet. En de producer vroeg me het nog niet te publiceren.'],
        ['Mark', '¡Ajá! O sea que tú ya sabes la verdad.', 'Aha! Dus jij weet de waarheid al.'],
        ['Génesis', 'Yo no he dicho nada, chamo. Pero el sábado no hagas planes.', 'Ik heb niets gezegd, gast. Maar maak zaterdag geen plannen.']
      ],
      q: [
        { t: 'mc', q: '¿Quién le contó la noticia a Génesis?', o: ['Un amigo de la emisora', 'El cantante', 'Una página de chismes'] },
        { t: 'mc', q: '¿Qué afirmó el cantante en la entrevista?', o: ['Que estaba feliz de volver', 'Que no habría concierto', 'Que se iba a otro país'] },
        { t: 'mc', q: '¿Qué le pidió el productor a Génesis?', o: ['Que no publicara la noticia todavía', 'Que fuera al concierto', 'Que llamara a Mark'] }
      ]
    },
    culture: { t: 'Caracas, onder de groene berg', html: `<p>⛰️ Caracas ligt in een lang dal onder <b>El Ávila</b>, een groene berg van ruim 2.000 meter die officieel <i>Waraira Repano</i> heet. Met de <b>teleférico</b> (kabelbaan) ga je in een kwartier van de stad naar de top, met uitzicht op de stad aan de ene en de Caribische Zee aan de andere kant.</p>
<p>🫓 Venezolanen eten <b>arepas</b> bij elke maaltijd: een rond maïsbroodje dat je openmaakt en vult. Een <i>reina pepiada</i> is gevuld met kip en avocado, een <i>pabellón</i> met rijst, bonen en draadjesvlees.</p>
<p>🌎 De laatste jaren zijn miljoenen Venezolanen naar het buitenland vertrokken, vooral naar Colombia, Peru, Chili en Spanje. Daardoor hoor je hun Spaans nu overal, en reist nieuws uit Venezuela via WhatsApp razendsnel naar familie ver weg.</p>
<p>🗣️ Venezolaanse woorden: <b>chamo/chama</b> (gast, meisje), <b>pana</b> (maat), <b>¡Epa!</b> (hé!), <b>echar el cuento</b> (het verhaal vertellen) en <b>la cola</b>, dat er zowel de rij in de winkel als de file op de snelweg is.</p>` },
    ex: [
      { t: 'cloze', s: '«Estoy cansada.» → Me dijo que ___ cansada.', h: 'estar', a: ['estaba'], nl: 'Ze zei me dat ze moe was.', x: 'Presente → imperfecto.', tag: 'reported-adv' },
      { t: 'cloze', s: '«Volví la semana pasada.» → Dijo que ___ la semana anterior.', h: 'volver', a: ['había vuelto', 'había regresado'], nl: 'Hij zei dat hij de week ervoor was teruggekeerd.', x: 'Indefinido → pluscuamperfecto.', tag: 'reported-adv' },
      { t: 'cloze', s: '«Pronto anunciaré algo.» → Aseguró que pronto ___ algo.', h: 'anunciar', a: ['anunciaría'], nl: 'Hij verzekerde dat hij binnenkort iets zou aankondigen.', x: 'Futuro → condicional.', tag: 'reported-adv' },
      { t: 'cloze', s: '«No lo publiques.» → El productor me pidió que no lo ___.', h: 'publicar', a: ['publicara'], nl: 'De producer vroeg me het niet te publiceren.', x: 'Imperativo → imperfecto de subjuntivo.', tag: 'reported-adv' },
      { t: 'cloze', s: '«Nos vemos mañana.» → Me dijo que nos veríamos ___.', a: ['al día siguiente'], o: ['al día siguiente', 'ayer', 'la víspera'], nl: 'Hij zei dat we elkaar de volgende dag zouden zien.', tag: 'reported-adv' },
      { t: 'cloze', s: 'El ministro negó que ___ un problema con el agua.', h: 'haber', a: ['hubiera', 'hubiese'], nl: 'De minister ontkende dat er een probleem met het water was.', x: 'Negar que + subjuntivo.', tag: 'reported-adv' },
      { t: 'cloze', s: 'Según la policía, el ladrón ___ por la ventana.', a: ['habría entrado'], o: ['habría entrado', 'haya entrado', 'entraría mañana'], nl: 'Volgens de politie zou de dief door het raam zijn binnengekomen.', x: 'Nog niet zeker → condicional van geruchten.', tag: 'rumor' },
      { t: 'cloze', s: '___, el concierto será gratis, pero nadie lo ha confirmado.', a: ['Al parecer', 'Por lo visto'], o: ['Al parecer', 'Sin duda', 'Por supuesto'], nl: 'Naar het schijnt is het concert gratis, maar niemand heeft het bevestigd.', tag: 'rumor' },
      { t: 'mc', q: '«El alcalde habría renunciado.» betekent:', o: ['De burgemeester zou zijn afgetreden (niet bevestigd).', 'De burgemeester had moeten aftreden.', 'De burgemeester is zeker afgetreden.'], tag: 'rumor' },
      { t: 'mc', q: '«Voy a llamarte.» → Me dijo que…', o: ['iba a llamarme', 'va a llamarte', 'fue a llamarme'], x: 'Ir a in het presente → ir a in het imperfecto, en «te» wordt «me».', tag: 'reported-adv' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Negó que fuera verdad.', 'Negó que era verdad.', 'Negó que será verdad.'], tag: 'reported-adv' },
      { t: 'mc', q: 'Welk werkwoord betekent «een bericht tegenspreken»?', o: ['desmentir', 'confirmar', 'anunciar'], tag: 'vocab' },
      { t: 'mc', q: 'Wat betekent «¡Epa, chamo!» in Venezuela?', o: ['Hé, gast!', 'Pas op, kind!', 'Tot ziens, vriend!'], tag: 'vocab' },
      { t: 'order', s: 'Al parecer el concierto sería el sábado.', nl: 'Naar het schijnt zou het concert zaterdag zijn.', tag: 'rumor' },
      { t: 'tr', nl: 'Hij zei dat hij moe was.', a: ['Dijo que estaba cansado.', 'Él dijo que estaba cansado.', 'Me dijo que estaba cansado.'], tag: 'reported-adv' },
      { t: 'tr', nl: 'Volgens de krant zou de zanger teruggekeerd zijn.', a: ['Según el periódico, el cantante habría vuelto.', 'Según el periódico, el cantante habría regresado.', 'Según el diario, el cantante habría vuelto.', 'Según el diario, el cantante habría regresado.'], tag: 'rumor' },
      { t: 'match', p: [['el rumor', 'het gerucht'], ['la fuente', 'de bron'], ['desmentir', 'tegenspreken'], ['el titular', 'de krantenkop'], ['echar el cuento', 'het verhaal vertellen (VE)']], tag: 'vocab' }
    ],
    say: [['Me dijo que vendría al día siguiente.', 'Hij zei me dat hij de volgende dag zou komen.'], ['Al parecer, el concierto es gratis.', 'Naar het schijnt is het concert gratis.'], ['Según la radio, habría mucha cola en la autopista.', 'Volgens de radio zou er veel file op de snelweg staan.'], ['No lo confirmó, pero tampoco lo negó.', 'Hij bevestigde het niet, maar ontkende het ook niet.']],
    task: { nl: 'Vertel een nieuwtje of roddel door die je deze week hoorde (6 tot 8 zinnen; verzinnen mag). Gebruik de indirecte rede in het verleden (dijo que…, me contó que…), minstens twee nieuwswerkwoorden (afirmar, negar, asegurar…) en één keer het condicional van geruchten (habría…).', model: 'Ayer mi vecina me contó que el panadero de la esquina se iba a jubilar. Me dijo que lo había anunciado en la tienda y que cerraría en enero. Según ella, su hijo habría comprado el negocio, pero nadie lo ha confirmado. Hoy le pregunté al panadero y negó que fuera a cerrar. Aseguró que solo se tomaría unas vacaciones largas. Al parecer, mi vecina exageró un poquito.' },
    scenario: { nl: 'Een Venezolaanse radiomaakster in Caracas vertelt je het laatste nieuws uit de buurt. Jij vertelt haar ook iets door.', role: 'Eres Génesis, una periodista caraqueña de 34 años que presenta un programa de radio por la mañana. Eres alegre, curiosa y te encanta un buen chisme. Le cuentas al estudiante noticias del barrio y de la ciudad (siempre inventadas, nunca de política ni de personas reales), usando el estilo indirecto («me dijo que…», «aseguró que…») y el condicional de rumor («habría…», «sería…»). Usas expresiones venezolanas como «¡Epa!», «chamo», «pana», «echar el cuento» y «chévere». Le pides al estudiante que te cuente una noticia y quién se la contó.', goal: 'Geef twee nieuwtjes door met dijo que / me contó que en gebruik één keer según of al parecer.' },
    reading: {
      t: '¿Cómo saber si una noticia es falsa?', type: 'Artikel',
      p: [
        ['Un video que se compartió miles de veces en Venezuela aseguraba que el teleférico de Caracas cerraría para siempre. En pocas horas, muchas personas lo habían reenviado a sus familiares en el extranjero.',
          'Een video die in Venezuela duizenden keren werd gedeeld, beweerde dat de kabelbaan van Caracas voorgoed zou sluiten. Binnen een paar uur hadden veel mensen hem doorgestuurd naar familie in het buitenland.'],
        ['Al día siguiente, la empresa publicó un comunicado. En él explicó que el teleférico solo cerraría una semana por mantenimiento y negó que hubiera planes de cerrarlo. El video, por lo visto, venía de una cuenta que no existía hasta la semana anterior.',
          'De volgende dag publiceerde het bedrijf een verklaring. Daarin legde het uit dat de kabelbaan maar een week dicht zou gaan voor onderhoud, en ontkende het dat er plannen waren om hem te sluiten. De video kwam blijkbaar van een account dat tot de week ervoor niet bestond.'],
        ['Según la periodista Génesis Rojas, este tipo de rumores se extiende rápido porque mucha gente tiene a su familia lejos y quiere saber todo lo que pasa en su país. «Las noticias viajan más rápido que la verdad», afirma.',
          'Volgens journaliste Génesis Rojas verspreiden zulke geruchten zich snel, omdat veel mensen hun familie ver weg hebben en alles willen weten wat er in hun land gebeurt. «Nieuws reist sneller dan de waarheid», zegt ze.'],
        ['Su consejo: antes de compartir algo, pregúntate quién lo dice. Busca la fuente original, mira la fecha y fíjate en palabras como «al parecer» o «habría»: significan que la información todavía no está confirmada.',
          'Haar advies: vraag je af wie het zegt voordat je iets deelt. Zoek de oorspronkelijke bron, kijk naar de datum en let op woorden als «al parecer» of «habría»: die betekenen dat de informatie nog niet bevestigd is.']
      ],
      gl: [['reenviar', 'doorsturen'], ['el mantenimiento', 'het onderhoud'], ['la cuenta', 'het account; de rekening'], ['extenderse (ie)', 'zich verspreiden'], ['fijarse en', 'letten op']],
      q: [
        { t: 'mc', q: '¿Qué aseguraba el video?', o: ['Que el teleférico cerraría para siempre', 'Que el teleférico sería gratis', 'Que habría un teleférico nuevo'] },
        { t: 'mc', q: '¿Qué explicó la empresa en su comunicado?', o: ['Que solo cerraría una semana por mantenimiento', 'Que el video decía la verdad', 'Que cerraría un mes'] },
        { t: 'mc', q: 'Según Génesis, ¿por qué se extienden rápido estos rumores?', o: ['Porque muchos tienen a su familia lejos', 'Porque a la gente le gustan los videos', 'Porque la radio los repite'] },
        { t: 'mc', q: '¿Qué significan palabras como «habría»?', o: ['Que la información no está confirmada', 'Que la noticia es falsa', 'Que pasó hace mucho tiempo'] }
      ]
    }
  });
})(window.SPT);
