/* Niveau B2 — Latijns-Amerikaans Spaans (eerste units).
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzeknoppen, eerste = juist), tr (vertalen NL→ES), order, match.
   Vanaf B1 toont de app (instelling «Automatisch») de Spaanse samenvatting (sum) en zit de Nederlandse uitleg achter een klapmenu. */
(function (S) {
  'use strict';
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
})(window.SPT);
