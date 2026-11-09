/* Niveau A1 — Latijns-Amerikaans Spaans.
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzeknoppen, eerste = juist), tr (vertalen NL→ES), order, match. */
(function (S) {
  'use strict';
  const U = S.addUnit;

  /* ───────────────────────── A1 · 1 ───────────────────────── */
  U({
    id: 'a1-01', level: 'A1', icon: '👋', title: '¡Hola! ¿Qué tal?', nl: 'Begroeten en jezelf voorstellen',
    goals: ['Iemand begroeten en afscheid nemen', 'Je naam zeggen en vragen', 'Weten wanneer je tú of usted gebruikt'],
    vocab: [
      ['hola', 'hallo'], ['buenos días', 'goedemorgen'], ['buenas tardes', 'goedemiddag'], ['buenas noches', 'goedenavond / goedenacht'],
      ['¿cómo estás?', 'hoe gaat het met je? (tú)'], ['¿cómo está usted?', 'hoe gaat het met u?'], ['¿qué tal?', 'hoe is het?'],
      ['bien', 'goed'], ['muy bien', 'heel goed'], ['más o menos', 'zo-zo'], ['mal', 'slecht'], ['gracias', 'dank je'],
      ['de nada', 'graag gedaan'], ['¿y tú?', 'en jij?'], ['me llamo…', 'ik heet…'], ['¿cómo te llamas?', 'hoe heet je?'],
      ['mucho gusto', 'aangenaam'], ['encantado / encantada', 'aangenaam (man / vrouw zegt)'], ['adiós', 'dag (afscheid)'],
      ['chao', 'doei', 'in heel Latijns-Amerika heel gewoon'], ['hasta luego', 'tot later'], ['hasta mañana', 'tot morgen'],
      ['nos vemos', 'we zien elkaar'], ['por favor', 'alsjeblieft / alstublieft'], ['perdón', 'sorry / pardon'],
      ['sí', 'ja'], ['no', 'nee'], ['el nombre', 'de naam'], ['el amigo / la amiga', 'de vriend / de vriendin'],
      ['¿qué onda?', 'hoe is ’t? (informeel)', 'Mexico'], ['¿quiubo?', 'hoe is ’t? (informeel)', 'Colombia']
    ],
    grammar: [
      { t: 'Persoonlijke voornaamwoorden', es: 'Los pronombres personales',
        html: `<p>In Latijns-Amerika bestaat <b>vosotros</b> in de praktijk niet. Voor <i>jullie</i> gebruik je altijd <b>ustedes</b>, of je nu met vrienden of met onbekenden praat.</p>
<p>Omdat de werkwoordsvorm al laat zien wie iets doet, laat je het voornaamwoord vaak weg: <i>Soy Mark</i> in plaats van <i>Yo soy Mark</i>.</p>`,
        table: [['', 'enkelvoud', 'meervoud'], ['1', 'yo — ik', 'nosotros / nosotras — wij'], ['2', 'tú — jij (informeel)<br>usted — u (formeel)', 'ustedes — jullie / u'], ['3', 'él — hij · ella — zij', 'ellos / ellas — zij']],
        sum: 'En Latinoamérica no se usa «vosotros»: «ustedes» es para todos.' },
      { t: 'Het werkwoord ser (zijn)', es: 'El verbo ser',
        html: `<p><b>Ser</b> gebruik je voor wie of wat iemand is: je naam, herkomst, beroep en vaste eigenschappen.</p>
<p>Let op: <b>usted</b> en <b>ustedes</b> gebruiken de werkwoordsvorm van de 3e persoon (<i>es</i>, <i>son</i>).</p>`,
        table: [['persoon', 'ser'], ['yo', 'soy'], ['tú', 'eres'], ['él / ella / usted', 'es'], ['nosotros', 'somos'], ['ellos / ellas / ustedes', 'son']],
        ex: [['Soy de Holanda.', 'Ik kom uit Nederland.'], ['¿Eres estudiante?', 'Ben je student?'], ['Usted es muy amable.', 'U bent erg vriendelijk.']] },
      { t: 'Je naam zeggen: llamarse', es: 'Me llamo…',
        html: `<p><b>Llamarse</b> betekent letterlijk <i>zichzelf noemen</i>. Je zet er een klein woordje vóór: <b>me</b>, <b>te</b> of <b>se</b>.</p>`,
        table: [['', ''], ['yo', 'me llamo'], ['tú', 'te llamas'], ['él / ella / usted', 'se llama']],
        ex: [['¿Cómo te llamas? — Me llamo Ana.', 'Hoe heet je? — Ik heet Ana.'], ['¿Cómo se llama usted?', 'Hoe heet u?']] }
    ],
    verbs: ['ser', 'llamarse'], tenses: ['pres'],
    dialogue: {
      t: 'Primer día en la universidad', place: 'Ciudad de México 🇲🇽',
      lines: [
        ['Sofía', '¡Hola! Buenos días.', 'Hoi! Goedemorgen.'],
        ['Daniel', 'Buenos días. ¿Cómo estás?', 'Goedemorgen. Hoe gaat het?'],
        ['Sofía', 'Muy bien, gracias. ¿Y tú?', 'Heel goed, dank je. En met jou?'],
        ['Daniel', 'Bien, bien. Me llamo Daniel. ¿Cómo te llamas?', 'Goed, goed. Ik heet Daniel. Hoe heet jij?'],
        ['Sofía', 'Me llamo Sofía. Mucho gusto.', 'Ik heet Sofía. Aangenaam.'],
        ['Daniel', 'Encantado. ¿Eres estudiante?', 'Aangenaam. Ben je student?'],
        ['Sofía', 'Sí, soy estudiante de arquitectura. ¿Y tú?', 'Ja, ik studeer architectuur. En jij?'],
        ['Daniel', 'Yo también. Soy de Guadalajara.', 'Ik ook. Ik kom uit Guadalajara.'],
        ['Sofía', '¡Qué bien! Yo soy de aquí, de la Ciudad de México.', 'Wat leuk! Ik ben van hier, uit Mexico-Stad.'],
        ['Daniel', 'Bueno, nos vemos en clase. ¡Chao!', 'Oké, we zien elkaar in de les. Doei!'],
        ['Sofía', '¡Hasta luego!', 'Tot later!']
      ],
      q: [
        { t: 'mc', q: '¿De dónde es Daniel?', o: ['De Guadalajara', 'De la Ciudad de México', 'De Bogotá'] },
        { t: 'mc', q: '¿Qué estudia Sofía?', o: ['Arquitectura', 'Medicina', 'Español'] },
        { t: 'mc', q: '¿Cómo está Sofía?', o: ['Muy bien', 'Mal', 'Más o menos'] }
      ]
    },
    culture: { t: 'Tú, usted… y vos', html: `<p><b>Usted</b> gebruik je tegen ouderen, onbekenden, klanten en in formele situaties. Twijfel je? Begin dan met usted. Mensen zeggen het vanzelf als je <i>tú</i> mag zeggen (<i>«puedes tutearme»</i>).</p>
<p>🇨🇴 In Colombia, en vooral in Bogotá, zeggen mensen vaak <b>usted</b>, zelfs tegen vrienden en familie. Dat is daar warm en niet afstandelijk.</p>
<p>🇦🇷🇺🇾 In Argentinië, Uruguay en grote delen van Midden-Amerika gebruiken mensen <b>vos</b> in plaats van tú (<i>vos sos</i> = tú eres). Vanaf B2 leer je dat herkennen.</p>
<p>👋 <b>Begroeten:</b> vrouwen onderling en mannen tegenover vrouwen geven meestal één kus op de wang. Mannen geven elkaar een hand of een korte omhelzing.</p>` },
    ex: [
      { t: 'mc', q: 'Je ontmoet de moeder van een vriend. Hoe vraag je hoe het met haar gaat?', o: ['¿Cómo está usted?', '¿Cómo estás?', '¿Qué onda?'], x: 'Tegen ouderen en onbekenden gebruik je usted.', tag: 'tu-usted' },
      { t: 'cloze', s: 'Yo ___ Ana.', a: ['soy'], o: ['soy', 'eres', 'es'], nl: 'Ik ben Ana.', tag: 'ser' },
      { t: 'cloze', s: 'Tú ___ de Perú.', a: ['eres'], o: ['eres', 'es', 'soy'], nl: 'Jij komt uit Peru.', tag: 'ser' },
      { t: 'cloze', s: 'Ella ___ de Chile.', a: ['es'], nl: 'Zij komt uit Chili.', h: 'ser', tag: 'ser' },
      { t: 'cloze', s: 'Nosotros ___ estudiantes.', a: ['somos'], o: ['somos', 'son', 'es'], nl: 'Wij zijn studenten.', tag: 'ser' },
      { t: 'cloze', s: 'Ustedes ___ de Colombia.', a: ['son'], o: ['son', 'somos', 'eres'], nl: 'Jullie komen uit Colombia.', x: 'Ustedes gebruikt dezelfde vorm als ellos: son.', tag: 'ser' },
      { t: 'cloze', s: '¿Cómo te ___?', a: ['llamas'], o: ['llamas', 'llamo', 'llama'], nl: 'Hoe heet je?', tag: 'pronouns' },
      { t: 'cloze', s: 'Usted se ___ Carlos, ¿verdad?', a: ['llama'], o: ['llama', 'llamas', 'llamo'], nl: 'U heet Carlos, toch?', tag: 'tu-usted' },
      { t: 'mc', q: 'Wat betekent «mucho gusto»?', o: ['Aangenaam (kennis te maken)', 'Heel veel smaak', 'Dank je wel'], tag: 'vocab' },
      { t: 'mc', q: 'Hoe zeg je «jullie» in Latijns-Amerika?', o: ['ustedes', 'vosotros', 'ellos'], tag: 'pronouns' },
      { t: 'tr', nl: 'Ik heet Mark.', a: ['Me llamo Mark.', 'Yo me llamo Mark.', 'Soy Mark.', 'Mi nombre es Mark.'], tag: 'pronouns' },
      { t: 'tr', nl: 'Hoe heet je?', a: ['¿Cómo te llamas?', '¿Cuál es tu nombre?'], tag: 'pronouns' },
      { t: 'tr', nl: 'Goedemorgen, hoe gaat het met u?', a: ['Buenos días, ¿cómo está usted?', 'Buenos días, ¿cómo está?'], tag: 'tu-usted' },
      { t: 'order', s: 'Mucho gusto, me llamo Sofía.', nl: 'Aangenaam, ik heet Sofía.' },
      { t: 'match', p: [['hola', 'hallo'], ['adiós', 'dag'], ['gracias', 'dank je'], ['por favor', 'alsjeblieft'], ['perdón', 'sorry']], tag: 'vocab' }
    ],
    say: [['Hola, ¿cómo estás?', 'Hoi, hoe gaat het?'], ['Muy bien, gracias. ¿Y tú?', 'Heel goed, dank je. En met jou?'], ['Mucho gusto, me llamo Daniel.', 'Aangenaam, ik heet Daniel.'], ['Soy de Holanda.', 'Ik kom uit Nederland.']],
    task: { nl: 'Stel jezelf voor in 3–4 zinnen. Begroet de ander, zeg je naam en waar je vandaan komt, en vraag hoe het met de ander gaat.', model: '¡Hola! Buenos días. Me llamo Mark y soy de Holanda. Soy estudiante de español. ¿Y tú? ¿Cómo te llamas?' },
    scenario: { nl: 'Je ontmoet Camila, een nieuwe collega in Bogotá.', role: 'Eres Camila, una colega colombiana muy amable de Bogotá. Es el primer día de trabajo del estudiante en tu oficina.', goal: 'Begroet Camila, stel je voor en vraag waar ze vandaan komt.' }
  });

  /* ───────────────────────── A1 · 2 ───────────────────────── */
  U({
    id: 'a1-02', level: 'A1', icon: '🧑‍💼', title: 'Personas y profesiones', nl: 'Mensen, beroepen en nationaliteiten',
    goals: ['Lidwoorden en het geslacht van woorden gebruiken', 'Je beroep en nationaliteit noemen', 'Iemand kort beschrijven'],
    vocab: [
      ['el hombre', 'de man'], ['la mujer', 'de vrouw'], ['el chico / la chica', 'de jongen / het meisje'], ['el / la estudiante', 'de student(e)'],
      ['el profesor / la profesora', 'de leraar / lerares'], ['el médico / la médica', 'de arts', 'ook vaak: el doctor / la doctora'],
      ['el ingeniero / la ingeniera', 'de ingenieur'], ['el abogado / la abogada', 'de advocaat'],
      ['el mesero / la mesera', 'de ober / serveerster', 'AR/PE/UY: el mozo · ES: el camarero'], ['el enfermero / la enfermera', 'de verpleegkundige'],
      ['el / la periodista', 'de journalist'], ['el / la policía', 'de politieagent'], ['mexicano / mexicana', 'Mexicaans'],
      ['colombiano / colombiana', 'Colombiaans'], ['argentino / argentina', 'Argentijns'], ['peruano / peruana', 'Peruaans'],
      ['chileno / chilena', 'Chileens'], ['holandés / holandesa', 'Nederlands(e)', 'ook: neerlandés'], ['alemán / alemana', 'Duits(e)'],
      ['estadounidense', 'Amerikaans (VS)'], ['alto / alta', 'lang'], ['bajo / baja', 'klein (van stuk)'], ['simpático / simpática', 'aardig'],
      ['inteligente', 'slim'], ['joven', 'jong'], ['trabajador / trabajadora', 'hardwerkend'], ['¿a qué te dedicas?', 'wat doe je voor werk?'],
      ['el trabajo', 'het werk'], ['también', 'ook'], ['pero', 'maar'], ['y', 'en']
    ],
    grammar: [
      { t: 'Lidwoorden en geslacht', es: 'Artículos y género',
        html: `<p>Elk zelfstandig naamwoord is <b>mannelijk</b> of <b>vrouwelijk</b>. Woorden op <b>-o</b> zijn meestal mannelijk, woorden op <b>-a</b> meestal vrouwelijk. Woorden op <b>-ción</b>, <b>-sión</b> en <b>-dad</b> zijn altijd vrouwelijk.</p>
<p>⚠️ Uitzonderingen die je veel tegenkomt: <i>el día, el mapa, el problema, el idioma, el sistema</i> en <i>la mano, la foto, la radio</i>.</p>`,
        table: [['', 'bepaald (de/het)', 'onbepaald (een)'], ['mannelijk enk.', 'el chico', 'un chico'], ['vrouwelijk enk.', 'la chica', 'una chica'], ['mannelijk mv.', 'los chicos', 'unos chicos'], ['vrouwelijk mv.', 'las chicas', 'unas chicas']],
        sum: 'Palabras en -o: casi siempre masculinas. En -a, -ción, -dad: femeninas.' },
      { t: 'Meervoud', es: 'El plural',
        html: `<p>Eindigt een woord op een klinker, dan komt er <b>-s</b> achter: <i>casa → casas</i>. Eindigt het op een medeklinker, dan komt er <b>-es</b> achter: <i>ciudad → ciudades</i>, <i>profesor → profesores</i>. Een <b>-z</b> aan het eind wordt <b>-ces</b>: <i>lápiz → lápices</i>.</p>
<p>Een gemengde groep (mannen en vrouwen) krijgt de mannelijke vorm: <i>los amigos</i> kan dus ook een groep vrienden en vriendinnen zijn.</p>` },
      { t: 'Bijvoeglijke naamwoorden', es: 'Concordancia del adjetivo',
        html: `<p>Een bijvoeglijk naamwoord staat meestal <b>achter</b> het zelfstandig naamwoord. Het past zich aan in geslacht en getal: <i>un chico alto, una chica alta, unos chicos altos</i>.</p>
<p>Woorden op <b>-e</b> of een medeklinker blijven hetzelfde voor man en vrouw: <i>inteligente, joven, azul</i>. <b>Uitzondering:</b> nationaliteiten krijgen wél een -a: <i>holandés → holandesa</i>, <i>alemán → alemana</i>, <i>español → española</i>.</p>
<p>📌 Bij een beroep na <b>ser</b> gebruik je géén lidwoord: <i>Soy médico.</i> en niet <s>Soy un médico</s>.</p>`,
        ex: [['Valentina es periodista. Es argentina.', 'Valentina is journalist. Ze is Argentijns.'], ['Mis amigos son muy simpáticos.', 'Mijn vrienden zijn heel aardig.']] }
    ],
    verbs: ['ser'], tenses: ['pres'],
    dialogue: {
      t: 'Una fiesta en Lima', place: 'Lima 🇵🇪',
      lines: [
        ['Lucía', 'Mira, Mark, te presento a mis amigos. Él es Andrés.', 'Kijk, Mark, dit zijn mijn vrienden. Dit is Andrés.'],
        ['Andrés', 'Hola, mucho gusto.', 'Hoi, aangenaam.'],
        ['Mark', 'Mucho gusto. ¿Eres de Lima?', 'Aangenaam. Kom je uit Lima?'],
        ['Andrés', 'Sí, soy peruano. Soy ingeniero. ¿Y tú? ¿A qué te dedicas?', 'Ja, ik ben Peruaan. Ik ben ingenieur. En jij? Wat doe jij?'],
        ['Mark', 'Soy profesor de inglés. Soy holandés, de Ámsterdam.', 'Ik ben leraar Engels. Ik ben Nederlander, uit Amsterdam.'],
        ['Lucía', 'Y ella es Valentina. Es argentina.', 'En dit is Valentina. Ze is Argentijnse.'],
        ['Valentina', '¡Hola! Sí, soy de Buenos Aires, pero vivo aquí en Lima. Soy periodista.', 'Hoi! Ja, ik kom uit Buenos Aires, maar ik woon hier in Lima. Ik ben journalist.'],
        ['Mark', '¡Qué interesante!', 'Wat interessant!'],
        ['Andrés', 'Valentina es muy simpática y muy trabajadora.', 'Valentina is heel aardig en werkt heel hard.'],
        ['Valentina', '¡Gracias, Andrés! Tú también.', 'Dank je, Andrés! Jij ook.']
      ],
      q: [
        { t: 'mc', q: '¿Qué es Andrés?', o: ['Ingeniero', 'Profesor', 'Periodista'] },
        { t: 'mc', q: '¿De dónde es Valentina?', o: ['De Buenos Aires', 'De Lima', 'De Ámsterdam'] },
        { t: 'mc', q: '¿Cómo es Valentina, según Andrés?', o: ['Simpática y trabajadora', 'Alta y joven', 'Baja e inteligente'] }
      ]
    },
    culture: { t: 'Nationaliteiten en beroepen per land', html: `<p>Nationaliteiten en talen schrijf je in het Spaans met een <b>kleine letter</b>: <i>mexicano, inglés, holandés</i>. Landen krijgen wel een hoofdletter: <i>México</i>.</p>
<p><b>Ober</b> verschilt per land: <i>mesero</i> 🇲🇽🇨🇴, <i>mozo</i> 🇦🇷🇺🇾🇵🇪, <i>garzón</i> 🇨🇱, <i>camarero</i> 🇪🇸.</p>
<p>Mensen uit de VS heten officieel <i>estadounidenses</i>. In Mexico hoor je ook <i>gringo</i>: informeel en niet per se negatief, maar ook niet altijd vriendelijk.</p>` },
    ex: [
      { t: 'mc', q: 'Welk lidwoord? ___ problema', o: ['el', 'la', 'los'], x: 'Problema eindigt op -a, maar is mannelijk (net als el sistema, el idioma).', tag: 'gender' },
      { t: 'mc', q: 'Welk lidwoord? ___ ciudad', o: ['la', 'el', 'las'], x: 'Woorden op -dad zijn altijd vrouwelijk.', tag: 'gender' },
      { t: 'mc', q: 'Welk lidwoord? ___ mano', o: ['la', 'el', 'los'], x: 'La mano is een bekende uitzondering: vrouwelijk, maar eindigt op -o.', tag: 'gender' },
      { t: 'cloze', s: 'Valentina es ___.', h: 'argentino', a: ['argentina'], nl: 'Valentina is Argentijnse.', tag: 'adj-agree' },
      { t: 'cloze', s: 'Los chicos son ___.', h: 'alto', a: ['altos'], nl: 'De jongens zijn lang.', tag: 'adj-agree' },
      { t: 'cloze', s: 'Ana y Lucía son ___.', h: 'inteligente', a: ['inteligentes'], nl: 'Ana en Lucía zijn slim.', tag: 'adj-agree' },
      { t: 'cloze', s: 'Mi amiga es ___.', h: 'holandés', a: ['holandesa'], nl: 'Mijn vriendin is Nederlandse.', x: 'Nationaliteit op medeklinker + a; het accent valt weg: holandés → holandesa.', tag: 'adj-agree' },
      { t: 'mc', q: 'Meervoud van «la ciudad»:', o: ['las ciudades', 'las ciudads', 'los ciudades'], tag: 'plural' },
      { t: 'mc', q: 'Meervoud van «el lápiz»:', o: ['los lápices', 'los lápizes', 'los lápizs'], tag: 'plural' },
      { t: 'mc', q: '«Ik ben arts» in het Spaans:', o: ['Soy médico.', 'Soy un médico.', 'Estoy médico.'], x: 'Na ser zet je géén lidwoord voor een beroep.', tag: 'articles' },
      { t: 'cloze', s: 'Ellos ___ ingenieros.', a: ['son'], o: ['son', 'somos', 'es'], nl: 'Zij zijn ingenieurs.', tag: 'ser' },
      { t: 'tr', nl: 'Zij is een aardige vrouw.', a: ['Ella es una mujer simpática.', 'Es una mujer simpática.'], tag: 'adj-agree' },
      { t: 'tr', nl: 'Wij zijn Nederlanders.', a: ['Somos holandeses.', 'Nosotros somos holandeses.', 'Somos neerlandeses.'], tag: 'adj-agree' },
      { t: 'tr', nl: 'Wat doe je voor werk?', a: ['¿A qué te dedicas?', '¿En qué trabajas?', '¿Cuál es tu trabajo?'], tag: 'vocab' },
      { t: 'order', s: 'Valentina es una periodista argentina.', nl: 'Valentina is een Argentijnse journaliste.' }
    ],
    say: [['Soy profesor de inglés.', 'Ik ben leraar Engels.'], ['Él es ingeniero y es muy simpático.', 'Hij is ingenieur en hij is heel aardig.'], ['¿A qué te dedicas?', 'Wat doe je voor werk?']],
    task: { nl: 'Beschrijf een vriend of vriendin: naam, nationaliteit, beroep en twee eigenschappen.', model: 'Mi amiga se llama Valentina. Es argentina y es periodista. Es muy simpática y trabajadora.' },
    scenario: { nl: 'Je bent op een feestje in Lima en leert nieuwe mensen kennen.', role: 'Eres Andrés, un ingeniero peruano de 30 años, en una fiesta en Lima. Eres curioso y haces preguntas sobre el trabajo y el origen.', goal: 'Vertel wat je doet en waar je vandaan komt, en vraag hetzelfde aan Andrés.' }
  });

  /* ───────────────────────── A1 · 3 ───────────────────────── */
  U({
    id: 'a1-03', level: 'A1', icon: '👨‍👩‍👧', title: 'Mi familia', nl: 'Familie, bezit en getallen tot 100',
    goals: ['Over je familie vertellen', 'Leeftijd vragen en zeggen met tener', 'Bezittelijke voornaamwoorden en getallen tot 100'],
    vocab: [
      ['la familia', 'de familie / het gezin'], ['el papá / el padre', 'de papa / de vader'], ['la mamá / la madre', 'de mama / de moeder'],
      ['los papás / los padres', 'de ouders'], ['el hermano / la hermana', 'de broer / de zus'], ['el hijo / la hija', 'de zoon / de dochter'],
      ['el abuelo / la abuela', 'de opa / de oma'], ['el tío / la tía', 'de oom / de tante'], ['el primo / la prima', 'de neef / de nicht (kind van oom/tante)'],
      ['el sobrino / la sobrina', 'het neefje / het nichtje (kind van broer/zus)'], ['el esposo / la esposa', 'de echtgenoot / de echtgenote'],
      ['el novio / la novia', 'de vriend / de vriendin (relatie)'], ['la pareja', 'de partner'], ['mayor', 'ouder'], ['menor', 'jonger'],
      ['casado / casada', 'getrouwd'], ['soltero / soltera', 'vrijgezel'], ['el perro', 'de hond'], ['el gato', 'de kat'],
      ['tener', 'hebben'], ['¿cuántos años tienes?', 'hoe oud ben je?'], ['grande', 'groot'], ['pequeño / pequeña', 'klein'],
      ['diez', 'tien'], ['quince', 'vijftien'], ['veinte', 'twintig'], ['treinta', 'dertig'], ['cuarenta', 'veertig'],
      ['cincuenta', 'vijftig'], ['cien', 'honderd'], ['mijo / mija', 'jongen / meisje (lief, van mi hijo/a)', 'MX · CO']
    ],
    grammar: [
      { t: 'Het werkwoord tener (hebben)', es: 'El verbo tener',
        html: `<p><b>Tener</b> is onregelmatig: de yo-vorm is <i>tengo</i>, en in de meeste vormen wordt de <b>e</b> een <b>ie</b>.</p>
<p>📌 Je <b>leeftijd</b> zeg je met tener, niet met ser: <i>Tengo 30 años</i> (letterlijk: ik heb 30 jaren).</p>`,
        table: [['persoon', 'tener'], ['yo', 'tengo'], ['tú', 'tienes'], ['él / ella / usted', 'tiene'], ['nosotros', 'tenemos'], ['ellos / ellas / ustedes', 'tienen']],
        ex: [['Tengo dos hermanos.', 'Ik heb twee broers (of: een broer en een zus).'], ['¿Cuántos años tienes? — Tengo 34.', 'Hoe oud ben je? — 34.']] },
      { t: 'Bezittelijke voornaamwoorden', es: 'Los posesivos',
        html: `<p>Het bezittelijk voornaamwoord past zich aan aan het <b>bezit</b>, niet aan de eigenaar: <i>mi hermano, mis hermanos</i>.</p>
<p><b>Su</b> kan <i>zijn, haar, uw</i> én <i>hun</i> betekenen. Is het niet duidelijk wie je bedoelt, zeg dan: <i>la casa de él / de ella / de usted</i>.</p>
<p>⚠️ <b>tu</b> (zonder accent) = jouw · <b>tú</b> (met accent) = jij.</p>`,
        table: [['', 'enkelvoud', 'meervoud'], ['mijn', 'mi', 'mis'], ['jouw', 'tu', 'tus'], ['zijn / haar / uw', 'su', 'sus'], ['ons / onze', 'nuestro / nuestra', 'nuestros / nuestras'], ['jullie / hun', 'su', 'sus']] },
      { t: 'Getallen 0–100', es: 'Los números',
        html: `<p>0 cero · 1 uno · 2 dos · 3 tres · 4 cuatro · 5 cinco · 6 seis · 7 siete · 8 ocho · 9 nueve · 10 diez<br>
11 once · 12 doce · 13 trece · 14 catorce · 15 quince · 16 dieciséis · 17 diecisiete · 18 dieciocho · 19 diecinueve<br>
20 veinte · 21 veintiuno · 22 veintidós · 23 veintitrés … 29 veintinueve<br>
30 treinta · 31 treinta y uno · 40 cuarenta · 50 cincuenta · 60 sesenta · 70 setenta · 80 ochenta · 90 noventa · 100 cien</p>
<p>Tot en met 29 schrijf je het getal als één woord. Vanaf 31 gebruik je <b>y</b>: <i>cuarenta y cinco</i>. Vóór een mannelijk woord wordt uno <b>un</b>: <i>un año, veintiún años</i>.</p>` }
    ],
    verbs: ['tener'], tenses: ['pres'],
    dialogue: {
      t: 'Las fotos de la familia', place: 'Bogotá 🇨🇴',
      lines: [
        ['Mateo', 'Mira, esta es mi familia.', 'Kijk, dit is mijn familie.'],
        ['Mark', '¡Qué bonita foto! ¿Quién es él?', 'Wat een mooie foto! Wie is hij?'],
        ['Mateo', 'Es mi papá. Se llama Jorge y tiene sesenta y dos años.', 'Dat is mijn vader. Hij heet Jorge en hij is 62.'],
        ['Mark', '¿Y ella es tu mamá?', 'En is zij je moeder?'],
        ['Mateo', 'No, ella es mi tía Carmen, la hermana de mi papá. Mi mamá es ella, con el perro.', 'Nee, dat is mijn tante Carmen, de zus van mijn vader. Mijn moeder is zij, met de hond.'],
        ['Mark', '¿Tienes hermanos?', 'Heb je broers of zussen?'],
        ['Mateo', 'Sí, tengo una hermana mayor y un hermano menor. Mi hermana tiene dos hijos.', 'Ja, ik heb een oudere zus en een jongere broer. Mijn zus heeft twee kinderen.'],
        ['Mark', 'Entonces eres tío.', 'Dus jij bent oom.'],
        ['Mateo', '¡Sí! Mis sobrinos se llaman Tomás y Sara. ¿Y tú? ¿Tienes una familia grande?', 'Ja! Mijn neefje en nichtje heten Tomás en Sara. En jij? Heb je een grote familie?'],
        ['Mark', 'No, es pequeña. Somos mis papás, mi hermano y yo. Y nuestro gato, Pancho.', 'Nee, die is klein. Mijn ouders, mijn broer en ik. En onze kat, Pancho.']
      ],
      q: [
        { t: 'mc', q: '¿Cuántos años tiene el papá de Mateo?', o: ['62', '52', '72'] },
        { t: 'mc', q: '¿Quién es Carmen?', o: ['La tía de Mateo', 'La mamá de Mateo', 'La hermana de Mateo'] },
        { t: 'mc', q: '¿Cuántos hermanos tiene Mateo?', o: ['Dos', 'Uno', 'Tres'] }
      ]
    },
    culture: { t: 'Twee achternamen en de familie', html: `<p>In Latijns-Amerika heeft bijna iedereen <b>twee achternamen</b>: de eerste van de vader en de eerste van de moeder. Een voorbeeld is <i>Gabriel García Márquez</i>. Dagelijks gebruik je vaak alleen de eerste.</p>
<p>Familie is heel belangrijk. In veel gezinnen is er elke zondag een groot gezamenlijk middageten.</p>
<p>Woorden van genegenheid: <i>mijo/mija</i> (mi hijo/a) 🇲🇽🇨🇴, <i>mi viejo / mi vieja</i> voor je ouders 🇦🇷🇺🇾🇨🇱, en <i>mami / papi</i> hoor je overal.</p>` },
    ex: [
      { t: 'cloze', s: 'Yo ___ dos hermanos.', a: ['tengo'], o: ['tengo', 'tienes', 'tiene'], nl: 'Ik heb twee broers/zussen.', tag: 'tener' },
      { t: 'cloze', s: '¿Cuántos años ___ tú?', a: ['tienes'], o: ['tienes', 'eres', 'tiene'], nl: 'Hoe oud ben jij?', tag: 'tener' },
      { t: 'mc', q: '«Ik ben 25 jaar.»', o: ['Tengo veinticinco años.', 'Soy veinticinco años.', 'Estoy veinticinco años.'], x: 'Leeftijd = tener + años.', tag: 'tener' },
      { t: 'cloze', s: 'Nosotros ___ un perro.', a: ['tenemos'], h: 'tener', nl: 'Wij hebben een hond.', tag: 'tener' },
      { t: 'cloze', s: '___ padres son de Chile.', a: ['Mis'], o: ['Mis', 'Mi', 'Me'], nl: 'Mijn ouders komen uit Chili.', tag: 'possessive' },
      { t: 'cloze', s: '¿Cómo se llama ___ hermana?', a: ['tu'], o: ['tu', 'tú', 'tus'], nl: 'Hoe heet jouw zus?', x: 'tu (zonder accent) = jouw; tú (met accent) = jij.', tag: 'possessive' },
      { t: 'cloze', s: '___ casa es grande.', a: ['Nuestra'], o: ['Nuestra', 'Nuestro', 'Nuestros'], nl: 'Ons huis is groot.', tag: 'possessive' },
      { t: 'mc', q: '«Su hijo» kan betekenen:', o: ['zijn, haar, uw of hun zoon', 'alleen: zijn zoon', 'jouw zoon'], tag: 'possessive' },
      { t: 'mc', q: 'Hoe schrijf je 47?', o: ['cuarenta y siete', 'cuatro y siete', 'cuarentisiete'], tag: 'numbers' },
      { t: 'mc', q: 'Hoe schrijf je 16?', o: ['dieciséis', 'diez y seis', 'seisdiez'], tag: 'numbers' },
      { t: 'mc', q: 'El hijo de mi hermano es mi…', o: ['sobrino', 'primo', 'tío'], tag: 'vocab' },
      { t: 'tr', nl: 'Mijn moeder heet Ana.', a: ['Mi madre se llama Ana.', 'Mi mamá se llama Ana.'], tag: 'possessive' },
      { t: 'tr', nl: 'Heb je kinderen?', a: ['¿Tienes hijos?', '¿Tiene hijos?', '¿Usted tiene hijos?', '¿Tú tienes hijos?'], tag: 'tener' },
      { t: 'order', s: 'Mi hermana mayor tiene dos hijos.', nl: 'Mijn oudere zus heeft twee kinderen.' },
      { t: 'match', p: [['el abuelo', 'de opa'], ['la tía', 'de tante'], ['el primo', 'de neef'], ['la hija', 'de dochter'], ['los padres', 'de ouders']], tag: 'vocab' }
    ],
    say: [['Tengo un hermano y una hermana.', 'Ik heb een broer en een zus.'], ['Mi papá tiene sesenta años.', 'Mijn vader is zestig.'], ['¿Tienes una familia grande?', 'Heb je een grote familie?']],
    task: { nl: 'Beschrijf je familie: wie hoort erbij, hoe heten ze en hoe oud zijn ze?', model: 'Mi familia es pequeña. Mi papá se llama Peter y tiene sesenta años. Mi mamá se llama Ingrid. Tengo un hermano menor: se llama Tim y tiene veintiocho años.' },
    scenario: { nl: 'Je zit bij een Colombiaanse familie aan tafel en oma wil alles over jouw familie weten.', role: 'Eres doña Rosa, una abuela colombiana muy cariñosa de Medellín. Haces muchas preguntas sobre la familia del estudiante y hablas con orgullo de tus nietos.', goal: 'Vertel over je familie: hoeveel mensen, namen en leeftijden.' }
  });

  /* ───────────────────────── A1 · 4 ───────────────────────── */
  U({
    id: 'a1-04', level: 'A1', icon: '🏙️', title: 'Mi ciudad', nl: 'De stad, de weg vragen, hay vs. estar',
    goals: ['Zeggen wat er in de stad is (hay)', 'Zeggen waar iets is (estar)', 'De weg vragen en begrijpen'],
    vocab: [
      ['la ciudad', 'de stad'], ['el barrio', 'de wijk', 'MX ook: la colonia'], ['la calle', 'de straat'], ['la cuadra', 'het huizenblok', 'ES: la manzana'],
      ['la plaza', 'het plein'], ['el parque', 'het park'], ['el banco', 'de bank'], ['el cajero (automático)', 'de geldautomaat'],
      ['el supermercado', 'de supermarkt'], ['la farmacia', 'de apotheek'], ['el hospital', 'het ziekenhuis'], ['el restaurante', 'het restaurant'],
      ['la tienda', 'de winkel'], ['la iglesia', 'de kerk'], ['el museo', 'het museum'], ['la estación', 'het station'],
      ['el autobús / el bus', 'de bus', 'MX: el camión · AR: el colectivo · Caribe: la guagua'], ['el baño', 'de wc / de badkamer'],
      ['aquí', 'hier'], ['allí / allá', 'daar'], ['cerca de', 'dichtbij'], ['lejos de', 'ver van'], ['al lado de', 'naast'],
      ['enfrente de', 'tegenover'], ['entre', 'tussen'], ['a la derecha', 'rechts'], ['a la izquierda', 'links'], ['derecho', 'rechtdoor', 'ES: recto'],
      ['¿dónde?', 'waar?'], ['hay', 'er is / er zijn'], ['disculpe', 'pardon (u) — om iets te vragen']
    ],
    grammar: [
      { t: 'Het werkwoord estar', es: 'El verbo estar',
        html: `<p><b>Estar</b> betekent ook <i>zijn</i>, maar je gebruikt het voor <b>plaats</b> (waar iets is) en voor <b>toestand</b> (hoe het met je gaat). <i>¿Cómo estás?</i> ken je al.</p>`,
        table: [['persoon', 'estar'], ['yo', 'estoy'], ['tú', 'estás'], ['él / ella / usted', 'está'], ['nosotros', 'estamos'], ['ellos / ellas / ustedes', 'están']],
        ex: [['El museo está en el centro.', 'Het museum is in het centrum.'], ['Estoy en la plaza.', 'Ik ben op het plein.']] },
      { t: 'Hay of estar?', es: '¿Hay o está?',
        html: `<p><b>Hay</b> (er is / er zijn) gebruik je als je iets <b>nieuws</b> noemt, met <i>un/una</i>, een getal of zonder lidwoord. <i>Hay</i> verandert nooit.</p>
<p><b>Estar</b> gebruik je voor een <b>bekend, specifiek</b> ding, met <i>el/la</i>, een naam of <i>mi/tu</i>.</p>`,
        table: [['hay + …', 'estar + …'], ['Hay un banco en la plaza.', 'El banco está en la plaza.'], ['Hay dos farmacias.', 'Las farmacias están cerca.'], ['¿Hay baño aquí?', '¿Dónde está el baño?']],
        sum: '«Hay» presenta algo nuevo; «estar» ubica algo conocido.' },
      { t: 'Plaatsaanduidingen en al / del', es: 'Preposiciones de lugar',
        html: `<p><i>cerca de, lejos de, al lado de, enfrente de, entre … y …, a la derecha de, a la izquierda de</i></p>
<p>📌 <b>de + el = del</b> en <b>a + el = al</b>. Dit gebeurt verplicht, maar alleen bij <i>el</i> (niet bij la, los of las): <i>al lado <b>del</b> parque, enfrente <b>de la</b> iglesia, vamos <b>al</b> museo</i>.</p>` }
    ],
    verbs: ['estar'], tenses: ['pres'],
    dialogue: {
      t: '¿Hay un banco por aquí?', place: 'Cartagena 🇨🇴',
      lines: [
        ['Mark', 'Disculpe, señora. ¿Hay un banco por aquí?', 'Pardon, mevrouw. Is er hier ergens een bank?'],
        ['Señora', 'Sí, hay uno en la plaza, al lado de la iglesia.', 'Ja, er is er een op het plein, naast de kerk.'],
        ['Mark', '¿Y la plaza está lejos?', 'En is het plein ver?'],
        ['Señora', 'No, está muy cerca. Está a dos cuadras. Siga derecho y luego a la izquierda.', 'Nee, heel dichtbij. Twee blokken verder. Ga rechtdoor en dan naar links.'],
        ['Mark', 'Perfecto. ¿Y hay una farmacia cerca también?', 'Perfect. En is er ook een apotheek in de buurt?'],
        ['Señora', 'Sí, hay una enfrente del banco.', 'Ja, er is er een tegenover de bank.'],
        ['Mark', 'Muchas gracias, muy amable.', 'Hartelijk dank, heel vriendelijk.'],
        ['Señora', 'Con mucho gusto.', 'Graag gedaan.']
      ],
      q: [
        { t: 'mc', q: '¿Dónde está el banco?', o: ['Al lado de la iglesia', 'Enfrente de la iglesia', 'Lejos de la plaza'] },
        { t: 'mc', q: '¿A cuántas cuadras está la plaza?', o: ['A dos cuadras', 'A diez cuadras', 'A una cuadra'] },
        { t: 'mc', q: '¿Dónde está la farmacia?', o: ['Enfrente del banco', 'Al lado del banco', 'En la estación'] }
      ]
    },
    culture: { t: 'De weg vinden in Latijns-Amerika', html: `<p>Afstanden geef je vaak aan in <b>cuadras</b> (huizenblokken): <i>está a tres cuadras</i>. <i>A la vuelta</i> betekent <i>om de hoek</i>.</p>
<p>🇨🇴 In Colombiaanse steden hebben de straten nummers: een <i>Calle</i> loopt de ene kant op, een <i>Carrera</i> de andere. Een adres ziet er dan zo uit: <i>Calle 10 # 5-20</i>.</p>
<p>🚌 Hoe heet de bus? <i>camión</i> 🇲🇽 · <i>bus / buseta</i> 🇨🇴 · <i>colectivo / bondi</i> 🇦🇷 · <i>micro</i> 🇨🇱 · <i>guagua</i> 🇨🇺🇵🇷🇩🇴</p>
<p>Op <i>gracias</i> antwoorden ze in Colombia en Costa Rica vaak met <b>con mucho gusto</b>. In Mexico zeg je eerder <i>de nada</i> of <i>por nada</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'El museo ___ en el centro.', a: ['está'], o: ['está', 'hay', 'es'], nl: 'Het museum is in het centrum.', tag: 'hay-estar' },
      { t: 'cloze', s: '___ un parque muy bonito cerca de mi casa.', a: ['Hay'], o: ['Hay', 'Está', 'Es'], nl: 'Er is een heel mooi park bij mijn huis.', tag: 'hay-estar' },
      { t: 'cloze', s: '¿Dónde ___ los baños?', a: ['están'], o: ['están', 'hay', 'son'], nl: 'Waar zijn de wc’s?', tag: 'hay-estar' },
      { t: 'cloze', s: 'En mi barrio ___ dos supermercados.', a: ['hay'], o: ['hay', 'están', 'son'], nl: 'In mijn wijk zijn twee supermarkten.', tag: 'hay-estar' },
      { t: 'cloze', s: 'Yo ___ en la plaza. ¿Dónde estás tú?', a: ['estoy'], h: 'estar', nl: 'Ik ben op het plein. Waar ben jij?', tag: 'conj' },
      { t: 'cloze', s: 'La farmacia está al lado ___ banco.', a: ['del'], o: ['del', 'de el', 'al'], nl: 'De apotheek is naast de bank.', tag: 'contractions' },
      { t: 'cloze', s: 'Vamos ___ parque.', a: ['al'], o: ['al', 'a el', 'del'], nl: 'We gaan naar het park.', tag: 'contractions' },
      { t: 'mc', q: '«Tegenover het hotel»', o: ['enfrente del hotel', 'cerca del hotel', 'lejos del hotel'], tag: 'prepositions' },
      { t: 'mc', q: '«Hay» gebruik je met…', o: ['iets nieuws: un/una, een getal of zonder lidwoord', 'een specifiek ding met el/la', 'alleen met personen'], tag: 'hay-estar' },
      { t: 'mc', q: 'Hoe noemen Mexicanen de stadsbus?', o: ['el camión', 'la guagua', 'el bondi'], tag: 'vocab' },
      { t: 'tr', nl: 'Is er een apotheek in de buurt?', a: ['¿Hay una farmacia cerca?', '¿Hay una farmacia por aquí?', '¿Hay una farmacia cerca de aquí?'], tag: 'hay-estar' },
      { t: 'tr', nl: 'Het station is ver van hier.', a: ['La estación está lejos de aquí.', 'La estación está lejos.'], tag: 'hay-estar' },
      { t: 'tr', nl: 'Waar is de wc?', a: ['¿Dónde está el baño?'], tag: 'hay-estar' },
      { t: 'order', s: 'El banco está enfrente de la iglesia.', nl: 'De bank is tegenover de kerk.' }
    ],
    say: [['Disculpe, ¿hay un banco por aquí?', 'Pardon, is er hier ergens een bank?'], ['La plaza está a dos cuadras.', 'Het plein is twee blokken verder.'], ['¿Dónde está la estación?', 'Waar is het station?']],
    task: { nl: 'Beschrijf je eigen buurt: wat is er en waar ligt het?', model: 'En mi barrio hay un supermercado, una farmacia y un parque. El supermercado está al lado de mi casa y el parque está enfrente de la iglesia.' },
    scenario: { nl: 'Je bent verdwaald in Cartagena en vraagt een voorbijganger de weg.', role: 'Eres don Luis, un señor amable de Cartagena, Colombia. Das direcciones con cuadras, derecha, izquierda y lugares de referencia.', goal: 'Vraag de weg naar het museum en naar een geldautomaat (cajero).' }
  });

  /* ───────────────────────── A1 · 5 ───────────────────────── */
  U({
    id: 'a1-05', level: 'A1', icon: '⏰', title: 'Mi día', nl: 'Regelmatige werkwoorden, tijd en dagen',
    goals: ['Regelmatige werkwoorden in de presente vervoegen', 'Klokkijken en afspraken maken', 'Zeggen hoe vaak je iets doet'],
    vocab: [
      ['trabajar', 'werken'], ['estudiar', 'studeren'], ['hablar', 'spreken / praten'], ['llegar', 'aankomen'], ['comer', 'eten'],
      ['beber / tomar', 'drinken', 'in LatAm zeg je meestal tomar'], ['vivir', 'wonen / leven'], ['escribir', 'schrijven'], ['aprender', 'leren'],
      ['escuchar', 'luisteren'], ['desayunar', 'ontbijten'], ['cenar', 'avondeten'], ['la mañana', 'de ochtend'], ['la tarde', 'de middag'],
      ['la noche', 'de avond / de nacht'], ['temprano', 'vroeg'], ['tarde', 'laat'], ['siempre', 'altijd'], ['a veces', 'soms'],
      ['nunca', 'nooit'], ['todos los días', 'elke dag'], ['normalmente', 'normaal gesproken'], ['el lunes', 'maandag'],
      ['el martes', 'dinsdag'], ['el miércoles', 'woensdag'], ['el jueves', 'donderdag'], ['el viernes', 'vrijdag'],
      ['el sábado', 'zaterdag'], ['el domingo', 'zondag'], ['el fin de semana', 'het weekend'], ['¿qué hora es?', 'hoe laat is het?'],
      ['¡qué bacán!', 'wat tof!', 'CL · PE · CO']
    ],
    grammar: [
      { t: 'Presente: regelmatige werkwoorden', es: 'Presente regular',
        html: `<p>Er zijn drie groepen werkwoorden: <b>-ar</b>, <b>-er</b> en <b>-ir</b>. Je haalt de uitgang eraf en zet er de juiste persoonsuitgang achter.</p>
<p>-er en -ir lijken veel op elkaar. Alleen bij <i>nosotros</i> zie je het verschil: <i>comemos</i> en <i>vivimos</i>.</p>`,
        table: [['', 'hablar', 'comer', 'vivir'], ['yo', 'hablo', 'como', 'vivo'], ['tú', 'hablas', 'comes', 'vives'], ['él / ella / usted', 'habla', 'come', 'vive'], ['nosotros', 'hablamos', 'comemos', 'vivimos'], ['ellos / ustedes', 'hablan', 'comen', 'viven']],
        sum: '-ar: o, as, a, amos, an · -er: o, es, e, emos, en · -ir: o, es, e, imos, en' },
      { t: 'Klokkijken', es: '¿Qué hora es?',
        html: `<p><b>Es la una.</b> (alleen bij 1 uur) · <b>Son las dos / las tres…</b><br>
y cuarto (kwart over) · y media (half … later!) · menos cuarto (kwart voor)</p>
<p>⚠️ Let op: <i>Son las tres y media</i> = 15:30, dus <b>half vier</b> in het Nederlands!</p>
<p>Om … uur = <b>a las …</b>: <i>a las ocho de la mañana</i>, <i>a las nueve de la noche</i>.</p>
<p>🇲🇽 In Mexico hoor je ook <i>un cuarto para las ocho</i> (kwart voor acht) en <i>veinte para las tres</i> (twintig voor drie).</p>`,
        ex: [['Son las tres y media.', 'Het is half vier.'], ['Es la una y cuarto.', 'Het is kwart over één.'], ['Llego a las ocho.', 'Ik kom om acht uur aan.']] },
      { t: 'Dagen en hoe vaak', es: 'Días y frecuencia',
        html: `<p><i><b>el</b> lunes</i> = (op) maandag, die ene keer · <i><b>los</b> lunes</i> = op maandagen, elke maandag. Er komt géén <i>en</i> voor.</p>
<p><i>siempre, normalmente, a veces, nunca</i>. Staat <b>nunca</b> vóór het werkwoord, dan heb je geen <i>no</i> nodig: <i>Nunca como carne.</i> Staat het erachter, dan wel: <i>No como carne nunca.</i></p>` }
    ],
    verbs: ['hablar', 'trabajar', 'estudiar', 'comer', 'beber', 'vivir', 'escribir', 'aprender', 'cenar', 'llegar'], tenses: ['pres'],
    dialogue: {
      t: 'Hablando de rutinas', place: 'Santiago de Chile 🇨🇱',
      lines: [
        ['Camila', 'Oye, Mark, ¿a qué hora llegas a la oficina?', 'Hé Mark, hoe laat kom jij op kantoor?'],
        ['Mark', 'Normalmente llego a las ocho y media. ¿Y tú?', 'Normaal om half negen. En jij?'],
        ['Camila', 'Yo trabajo desde casa los lunes y los viernes.', 'Ik werk op maandag en vrijdag thuis.'],
        ['Mark', '¡Qué suerte! ¿Y los otros días?', 'Wat een geluk! En de andere dagen?'],
        ['Camila', 'Llego a las nueve. Pero siempre trabajo hasta tarde.', 'Dan kom ik om negen uur. Maar ik werk altijd tot laat.'],
        ['Mark', 'Yo nunca trabajo después de las seis. En la tarde estudio español.', 'Ik werk nooit na zessen. ’s Middags studeer ik Spaans.'],
        ['Camila', '¡Qué bacán! ¿Y practicas con alguien?', 'Wat tof! En oefen je met iemand?'],
        ['Mark', 'Sí, hablo con un amigo mexicano por video los miércoles.', 'Ja, op woensdag videobel ik met een Mexicaanse vriend.'],
        ['Camila', 'Si quieres, practicamos juntos a la hora de almuerzo.', 'Als je wilt, oefenen we samen tijdens de lunch.'],
        ['Mark', '¡Me encanta la idea!', 'Superidee!']
      ],
      q: [
        { t: 'mc', q: '¿Cuándo trabaja Camila desde casa?', o: ['Los lunes y los viernes', 'Los miércoles', 'Todos los días'] },
        { t: 'mc', q: '¿Qué hace Mark en la tarde?', o: ['Estudia español', 'Trabaja hasta tarde', 'Come con Camila'] },
        { t: 'mc', q: '¿Con quién habla Mark los miércoles?', o: ['Con un amigo mexicano', 'Con Camila', 'Con su profesor'] }
      ]
    },
    culture: { t: 'Dagdelen en maaltijden', html: `<p>In Latijns-Amerika zeg je <b>en la mañana / en la tarde / en la noche</b>. In Spanje zeggen ze <i>por la mañana</i>. Iedereen begrijpt beide.</p>
<p>🍽️ De warme hoofdmaaltijd is vaak het <b>almuerzo</b>, tussen 13:00 en 15:00 uur. In Mexico heet die maaltijd <i>la comida</i>. Het avondeten (<i>cena</i>) is vaak lichter.</p>
<p>🇨🇱 In Chili drinken mensen rond 18:00–20:00 uur <b>once</b>: thee met brood, een soort licht avondmaal.</p>
<p>«Cool!» per land: <i>bacán</i> 🇨🇱🇵🇪🇨🇴 · <i>chévere</i> 🇨🇴🇻🇪🇵🇪 · <i>chido</i> 🇲🇽 · <i>copado / genial</i> 🇦🇷</p>` },
    ex: [
      { t: 'cloze', s: 'Yo ___ en un banco.', h: 'trabajar', a: ['trabajo'], nl: 'Ik werk bij een bank.', tag: 'pres-regular' },
      { t: 'cloze', s: 'Tú ___ mucho café.', h: 'tomar', a: ['tomas'], nl: 'Jij drinkt veel koffie.', tag: 'pres-regular' },
      { t: 'cloze', s: 'Ella ___ en Quito.', h: 'vivir', a: ['vive'], nl: 'Zij woont in Quito.', tag: 'pres-regular' },
      { t: 'cloze', s: 'Nosotros ___ español.', h: 'aprender', a: ['aprendemos'], nl: 'Wij leren Spaans.', tag: 'pres-regular' },
      { t: 'cloze', s: 'Ustedes ___ muy bien.', h: 'hablar', a: ['hablan'], nl: 'Jullie spreken heel goed.', tag: 'pres-regular' },
      { t: 'cloze', s: 'Mis padres ___ a las ocho.', h: 'cenar', a: ['cenan'], nl: 'Mijn ouders eten om acht uur.', tag: 'pres-regular' },
      { t: 'cloze', s: '¿Tú ___ correos en español?', h: 'escribir', a: ['escribes'], nl: 'Schrijf jij e-mails in het Spaans?', tag: 'pres-regular' },
      { t: 'mc', q: 'Hoe laat is het? 15:30', o: ['Son las tres y media.', 'Es las tres y media.', 'Son las tres y cuarto.'], tag: 'time' },
      { t: 'mc', q: 'Hoe laat is het? 13:00', o: ['Es la una.', 'Son las una.', 'Es las uno.'], x: 'Alleen bij één uur gebruik je es la.', tag: 'time' },
      { t: 'mc', q: '«Op zaterdag werk ik niet.» (deze zaterdag)', o: ['El sábado no trabajo.', 'En el sábado no trabajo.', 'A sábado no trabajo.'], x: 'Er komt geen voorzetsel voor de dag: el sábado.', tag: 'time' },
      { t: 'mc', q: '«Ik eet nooit vlees.»', o: ['Nunca como carne.', 'Como nunca carne.', 'No nunca como carne.'], tag: 'frequency' },
      { t: 'tr', nl: 'Om acht uur ontbijt ik.', a: ['A las ocho desayuno.', 'Desayuno a las ocho.'], tag: 'time' },
      { t: 'tr', nl: 'Wij wonen in Amsterdam.', a: ['Vivimos en Ámsterdam.', 'Nosotros vivimos en Ámsterdam.', 'Vivimos en Amsterdam.'], tag: 'pres-regular' },
      { t: 'tr', nl: 'Spreek je Engels?', a: ['¿Hablas inglés?', '¿Habla inglés?', '¿Usted habla inglés?', '¿Tú hablas inglés?'], tag: 'pres-regular' },
      { t: 'order', s: 'Los domingos siempre como con mi familia.', nl: 'Op zondag eet ik altijd met mijn familie.' }
    ],
    say: [['Trabajo de lunes a viernes.', 'Ik werk van maandag tot vrijdag.'], ['En la tarde estudio español.', '’s Middags studeer ik Spaans.'], ['¿A qué hora desayunas?', 'Hoe laat ontbijt je?']],
    task: { nl: 'Beschrijf een normale werkdag met tijden, in minstens 4 zinnen.', model: 'Desayuno a las siete. Trabajo de nueve a cinco en una oficina. En la tarde estudio español y a las ocho ceno con mi pareja. Nunca trabajo los domingos.' },
    scenario: { nl: 'Een collega in Santiago vraagt naar je dagritme.', role: 'Eres Camila, una colega chilena simpática y curiosa de Santiago. Usas a veces expresiones chilenas suaves como «bacán». Preguntas por la rutina diaria y los horarios.', goal: 'Vertel hoe laat je opstaat, werkt, eet en wat je ’s avonds doet.' }
  });

  /* ───────────────────────── A1 · 6 ───────────────────────── */
  U({
    id: 'a1-06', level: 'A1', icon: '💃', title: '¿Qué te gusta?', nl: 'Hobby’s, gustar en encantar',
    goals: ['Zeggen wat je leuk en niet leuk vindt', 'Reageren met también / tampoco', 'Over vrije tijd praten'],
    vocab: [
      ['gustar', 'leuk vinden / lekker vinden'], ['encantar', 'heel leuk vinden / dol zijn op'], ['interesar', 'interesseren'],
      ['el tiempo libre', 'de vrije tijd'], ['el fútbol', 'het voetbal'], ['el deporte', 'de sport'], ['la música', 'de muziek'],
      ['el cine', 'de bioscoop'], ['la película', 'de film'], ['la serie', 'de serie'], ['el libro', 'het boek'],
      ['los videojuegos', 'videogames'], ['bailar', 'dansen'], ['cantar', 'zingen'], ['nadar', 'zwemmen'], ['cocinar', 'koken'],
      ['viajar', 'reizen'], ['caminar', 'wandelen / lopen'], ['correr', 'hardlopen / rennen'], ['la playa', 'het strand'],
      ['la montaña', 'de berg(en)'], ['mucho', 'veel / erg'], ['un poco', 'een beetje'], ['también', 'ook'], ['tampoco', 'ook niet'],
      ['prefiero…', 'ik heb liever…'], ['¡qué chévere!', 'wat leuk / tof!', 'CO · VE · PE'], ['¡qué chido!', 'wat tof!', 'MX']
    ],
    grammar: [
      { t: 'Gustar', es: 'El verbo gustar',
        html: `<p><b>Gustar</b> werkt anders dan in het Nederlands. Letterlijk zeg je: <i>iets bevalt mij</i>. Wat je leuk vindt, is het onderwerp. Daarom gebruik je <b>gusta</b> bij één ding of een werkwoord, en <b>gustan</b> bij meerdere dingen.</p>
<p>Wie iets leuk vindt, zeg je met <b>me, te, le, nos, les</b>. Voor nadruk of duidelijkheid kun je ervoor zetten: <i>a mí, a ti, a él / a ella / a usted, a nosotros, a ellos / a ustedes</i>.</p>`,
        table: [['', '+ enkelvoud / werkwoord', '+ meervoud'], ['(a mí)', 'me gusta el café', 'me gustan los perros'], ['(a ti)', 'te gusta bailar', 'te gustan las series'], ['(a él / ella / usted)', 'le gusta la playa', 'le gustan los libros'], ['(a nosotros)', 'nos gusta viajar', 'nos gustan los tacos'], ['(a ellos / ustedes)', 'les gusta el fútbol', 'les gustan las películas']],
        sum: 'Me gusta + singular/infinitivo · Me gustan + plural' },
      { t: 'Encantar en interesar', es: 'Verbos como gustar',
        html: `<p><b>Encantar</b> (dol zijn op) en <b>interesar</b> (interessant vinden) werken precies zoals gustar: <i>Me encanta la salsa. ¿Te interesan los museos?</i></p>
<p>⚠️ Zeg niet <s>me encanta mucho</s>: encantar is al heel sterk. <i>Me gusta mucho</i> is wel goed.</p>` },
      { t: 'Reageren: también, tampoco, sí, no', es: 'A mí también / tampoco',
        html: `<p>Je reageert met <b>a mí</b> + een kort woord:</p>`,
        table: [['de ander zegt', 'jij bent het eens', 'jij bent het oneens'], ['Me gusta el café. (+)', 'A mí también.', 'A mí no.'], ['No me gusta el frío. (−)', 'A mí tampoco.', 'A mí sí.']] }
    ],
    verbs: ['bailar', 'cantar', 'cocinar', 'viajar', 'nadar', 'escuchar', 'correr'], tenses: ['pres'],
    dialogue: {
      t: '¿Qué te gusta hacer?', place: 'Medellín 🇨🇴',
      lines: [
        ['Juliana', 'Bueno, Mark, ¿qué te gusta hacer en tu tiempo libre?', 'Zo Mark, wat doe je graag in je vrije tijd?'],
        ['Mark', 'Me gusta mucho viajar y me encanta la comida latina.', 'Ik reis heel graag en ik ben dol op Latijns-Amerikaans eten.'],
        ['Juliana', '¡Qué chévere! A mí también me encanta viajar. ¿Te gusta bailar?', 'Wat leuk! Ik reis ook heel graag. Dans je graag?'],
        ['Mark', 'Mmm… no mucho. No bailo muy bien.', 'Mmm… niet echt. Ik dans niet zo goed.'],
        ['Juliana', '¡Aquí en Medellín todo el mundo baila salsa! Yo te enseño.', 'Hier in Medellín danst iedereen salsa! Ik leer het je wel.'],
        ['Mark', 'Está bien, pero solo un poco. ¿Y a ti te gustan los deportes?', 'Oké, maar een beetje. En hou jij van sport?'],
        ['Juliana', 'Me gusta el fútbol, ¡soy fan del Nacional! Pero no me gusta correr.', 'Ik hou van voetbal, ik ben fan van Nacional! Maar hardlopen vind ik niks.'],
        ['Mark', 'A mí tampoco. Prefiero caminar en la montaña.', 'Ik ook niet. Ik wandel liever in de bergen.'],
        ['Juliana', 'Entonces el domingo vamos a caminar y después, ¡a bailar!', 'Dan gaan we zondag wandelen en daarna dansen!']
      ],
      q: [
        { t: 'mc', q: '¿Qué le encanta a Mark?', o: ['La comida latina', 'Bailar salsa', 'Correr'] },
        { t: 'mc', q: '¿A Juliana le gusta correr?', o: ['No', 'Sí, mucho', 'No se sabe'] },
        { t: 'mc', q: '¿Qué baila todo el mundo en Medellín, según Juliana?', o: ['Salsa', 'Tango', 'Bachata'] }
      ]
    },
    culture: { t: 'Muziek van een continent', html: `<p>🎶 <b>Salsa</b> 🇨🇴🇨🇺🇵🇷 · <b>cumbia</b> 🇨🇴🇦🇷🇲🇽🇵🇪 · <b>reguetón</b> 🇵🇷 · <b>tango</b> 🇦🇷🇺🇾 · <b>bachata</b> en <b>merengue</b> 🇩🇴 · <b>mariachi</b> en <b>ranchera</b> 🇲🇽 · <b>vallenato</b> 🇨🇴</p>
<p>Tip: luister naar muziek met Spaanse ondertitels of de songtekst erbij. Zo leer je veel woorden en uitspraak.</p>
<p>⚽ Voetbal is bijna een religie. Vraag gerust <i>¿De qué equipo eres?</i> (voor welke club ben je?), dan heb je meteen een gesprek.</p>` },
    ex: [
      { t: 'cloze', s: 'Me ___ el café.', a: ['gusta'], o: ['gusta', 'gustan', 'gusto'], nl: 'Ik vind koffie lekker.', tag: 'gustar' },
      { t: 'cloze', s: 'Me ___ las películas de terror.', a: ['gustan'], o: ['gustan', 'gusta', 'gusto'], nl: 'Ik hou van horrorfilms.', tag: 'gustar' },
      { t: 'cloze', s: '¿Te ___ bailar?', a: ['gusta'], o: ['gusta', 'gustan', 'gustas'], nl: 'Dans je graag?', x: 'Met een werkwoord (infinitief) altijd: gusta.', tag: 'gustar' },
      { t: 'cloze', s: 'A mi hermano ___ gusta el fútbol.', a: ['le'], o: ['le', 'se', 'lo'], nl: 'Mijn broer houdt van voetbal.', tag: 'gustar' },
      { t: 'cloze', s: 'A nosotros ___ encanta viajar.', a: ['nos'], o: ['nos', 'les', 'me'], nl: 'Wij reizen dolgraag.', tag: 'gustar' },
      { t: 'cloze', s: 'A mis padres ___ gustan los perros.', a: ['les'], o: ['les', 'le', 'los'], nl: 'Mijn ouders houden van honden.', tag: 'gustar' },
      { t: 'mc', q: '— No me gusta el frío. — Ik ook niet!', o: ['A mí tampoco.', 'A mí también.', 'Yo no también.'], tag: 'gustar' },
      { t: 'mc', q: '— Me encanta la salsa. — Ik ook!', o: ['¡A mí también!', '¡Yo también me encanta!', '¡A mí tampoco!'], tag: 'gustar' },
      { t: 'mc', q: '— No me gusta el reguetón. — Ik wel!', o: ['A mí sí.', 'A mí también.', 'Yo sí gusto.'], tag: 'gustar' },
      { t: 'mc', q: 'Welk woord voor «tof» hoor je vooral in Mexico?', o: ['chido', 'bacán', 'copado'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik hou van muziek.', a: ['Me gusta la música.', 'Me encanta la música.', 'A mí me gusta la música.'], tag: 'gustar' },
      { t: 'tr', nl: 'Hou je van boeken?', a: ['¿Te gustan los libros?', '¿Le gustan los libros?', '¿A ti te gustan los libros?'], tag: 'gustar' },
      { t: 'tr', nl: 'Zij is dol op koken.', a: ['Le encanta cocinar.', 'A ella le encanta cocinar.'], tag: 'gustar' },
      { t: 'order', s: 'A mí no me gusta correr, prefiero nadar.', nl: 'Ik hou niet van hardlopen, ik zwem liever.' }
    ],
    say: [['Me gusta mucho viajar.', 'Ik reis heel graag.'], ['¿Te gusta bailar salsa?', 'Dans je graag salsa?'], ['A mí también me encanta la música.', 'Ik ben ook dol op muziek.']],
    task: { nl: 'Schrijf wat jij en iemand die je kent wel en niet leuk vinden. Gebruik gustar, encantar en también of tampoco.', model: 'Me encanta viajar y me gusta mucho la comida mexicana. A mi novia le gusta bailar, pero a mí no. A nosotros no nos gusta el frío.' },
    scenario: { nl: 'Je praat met Juliana uit Medellín over jullie hobby’s.', role: 'Eres Juliana, una paisa (de Medellín) alegre de 28 años. Te encanta bailar salsa y el fútbol. Usas «chévere» y «bacano». Preguntas por los gustos del estudiante.', goal: 'Vertel wat je graag doet, vraag naar haar hobby’s en reageer met también of tampoco.' }
  });

  /* ───────────────────────── A1 · 7 ───────────────────────── */
  U({
    id: 'a1-07', level: 'A1', icon: '🌮', title: 'La comida', nl: 'Eten, bestellen en stamwisselaars',
    goals: ['Eten en drinken bestellen', 'Werkwoorden met stamwisseling gebruiken (quiero, puedo, pido)', 'Eten benoemen met de Latijns-Amerikaanse woorden'],
    vocab: [
      ['la comida', 'het eten'], ['el desayuno', 'het ontbijt'], ['el almuerzo', 'de lunch (warme maaltijd)'], ['la cena', 'het avondeten'],
      ['el agua', 'het water', 'vrouwelijk: el agua fría'], ['el jugo', 'het sap', 'ES: el zumo'], ['el café', 'de koffie'], ['la cerveza', 'het bier'],
      ['el refresco', 'de frisdrank', 'CO/AR: la gaseosa'], ['el pan', 'het brood'], ['el arroz', 'de rijst'], ['los frijoles', 'de bonen', 'AR/CL/UY: los porotos'],
      ['el pollo', 'de kip'], ['la carne', 'het vlees'], ['el pescado', 'de vis'], ['las verduras', 'de groenten'], ['la fruta', 'het fruit'],
      ['el aguacate', 'de avocado', 'AR/CL/PE/UY: la palta'], ['el maíz', 'de mais', 'maïskolf: MX el elote · AR/CL/PE el choclo'],
      ['la papa', 'de aardappel', 'ES: la patata'], ['el queso', 'de kaas'], ['picante', 'pittig'], ['rico / rica', 'lekker'],
      ['la cuenta', 'de rekening'], ['la propina', 'de fooi'], ['tener hambre', 'honger hebben'], ['tener sed', 'dorst hebben'],
      ['quisiera…', 'ik zou graag … willen'], ['para llevar', 'om mee te nemen'], ['¡buen provecho!', 'eet smakelijk!']
    ],
    grammar: [
      { t: 'Stamwisseling e → ie', es: 'Verbos con cambio e → ie',
        html: `<p>Bij sommige werkwoorden verandert de klinker in de stam als er nadruk op valt. Dat gebeurt in alle vormen <b>behalve nosotros</b>. Als je die vier vormen in een tabel omcirkelt, krijg je de vorm van een laars. Daarom heten ze ook wel <i>boot verbs</i>.</p>`,
        table: [['', 'querer', 'preferir', 'pensar'], ['yo', 'quiero', 'prefiero', 'pienso'], ['tú', 'quieres', 'prefieres', 'piensas'], ['él / usted', 'quiere', 'prefiere', 'piensa'], ['nosotros', '<b>queremos</b>', '<b>preferimos</b>', '<b>pensamos</b>'], ['ellos / ustedes', 'quieren', 'prefieren', 'piensan']] },
      { t: 'Stamwisseling o → ue en e → i', es: 'Cambio o → ue · e → i',
        html: `<p>Bij <b>o → ue</b> horen bijvoorbeeld <i>poder, costar, almorzar, volver</i> en <i>dormir</i>. Jugar gaat op dezelfde manier: <b>u → ue</b> (<i>juego</i>).<br>Bij <b>e → i</b> horen <i>pedir, servir</i> en <i>repetir</i>.</p>`,
        table: [['', 'poder', 'almorzar', 'pedir'], ['yo', 'puedo', 'almuerzo', 'pido'], ['tú', 'puedes', 'almuerzas', 'pides'], ['él / usted', 'puede', 'almuerza', 'pide'], ['nosotros', '<b>podemos</b>', '<b>almorzamos</b>', '<b>pedimos</b>'], ['ellos / ustedes', 'pueden', 'almuerzan', 'piden']] },
      { t: 'Beleefd bestellen', es: 'Pedir en un restaurante',
        html: `<p>✅ <b>Quisiera</b> un café, por favor. · <b>¿Me trae</b> la cuenta? · <b>Para mí</b>, el pollo. · <b>¿Me da</b> una cerveza? · <b>¿Nos trae</b> agua?</p>
<p>🇨🇴 In Colombia bestel je met <b>¿Me regala…?</b> (letterlijk: geeft u mij … cadeau?). Je betaalt gewoon, het is alleen een beleefde vorm.</p>
<p>Honger en dorst zeg je met <b>tener</b>: <i>Tengo hambre. Tengo sed.</i></p>` }
    ],
    verbs: ['querer', 'poder', 'preferir', 'pedir', 'almorzar', 'costar', 'pensar', 'servir', 'jugar'], tenses: ['pres'],
    dialogue: {
      t: 'En la taquería', place: 'Ciudad de México 🇲🇽',
      lines: [
        ['Mesero', 'Buenas tardes, jóvenes. ¿Qué les sirvo?', 'Goedemiddag, jongelui. Wat mag het zijn?'],
        ['Mark', 'Buenas tardes. Para mí, tres tacos al pastor, por favor.', 'Goedemiddag. Voor mij drie tacos al pastor, alstublieft.'],
        ['Mesero', '¿Con todo? ¿Cebolla, cilantro y salsa?', 'Met alles? Ui, koriander en saus?'],
        ['Mark', 'Sí, con todo. Pero la salsa… ¿es muy picante?', 'Ja, met alles. Maar de saus… is die erg pittig?'],
        ['Mesero', 'La verde, sí. La roja es menos picante.', 'De groene wel. De rode is minder pittig.'],
        ['Mark', 'Entonces prefiero la roja.', 'Dan heb ik liever de rode.'],
        ['Ana', 'Yo quiero una quesadilla con queso y un agua de horchata.', 'Ik wil een quesadilla met kaas en een horchata.'],
        ['Mesero', '¿Y para tomar, joven?', 'En om te drinken, jongeman?'],
        ['Mark', 'Un jugo de mango, por favor.', 'Een mangosap, alstublieft.'],
        ['Ana', '¿Nos trae la cuenta, por favor?', 'Mogen we de rekening, alstublieft?'],
        ['Mesero', 'Claro que sí. Son ciento ochenta pesos.', 'Natuurlijk. Dat is honderdtachtig peso.']
      ],
      q: [
        { t: 'mc', q: '¿Cuántos tacos pide Mark?', o: ['Tres', 'Dos', 'Cuatro'] },
        { t: 'mc', q: '¿Qué salsa prefiere Mark?', o: ['La roja', 'La verde', 'Ninguna'] },
        { t: 'mc', q: '¿Qué toma Ana?', o: ['Agua de horchata', 'Jugo de mango', 'Cerveza'] }
      ]
    },
    culture: { t: 'Eten per land', html: `<p>De woorden verschillen per land, dus let op:<br><i>aguacate</i> 🇲🇽🇨🇴 / <i>palta</i> 🇦🇷🇨🇱🇵🇪 · <i>frijoles</i> 🇲🇽🇨🇴 / <i>porotos</i> 🇦🇷🇨🇱 / <i>caraotas</i> 🇻🇪 · <i>elote</i> 🇲🇽 / <i>choclo</i> 🇦🇷🇨🇱🇵🇪 · <i>refresco</i> / <i>gaseosa</i> / <i>soda</i></p>
<p>🥤 In Latijns-Amerika gebruik je <b>tomar</b> voor drinken: <i>¿Qué quieres tomar?</i></p>
<p>🧀 Weetje: in Mexico-Stad zit er in een <i>quesadilla</i> niet altijd kaas. Bestel daarom <i>con queso</i>!</p>
<p>💵 Fooi: zo’n 10%. In Colombia staat er vaak al <i>servicio</i> op de rekening. Vraag gerust: <i>¿Incluye el servicio?</i></p>` },
    ex: [
      { t: 'cloze', s: 'Yo ___ un café, por favor.', h: 'querer', a: ['quiero'], nl: 'Ik wil graag een koffie.', tag: 'stem-change' },
      { t: 'cloze', s: 'Nosotros ___ comer aquí.', h: 'querer', a: ['queremos'], nl: 'Wij willen hier eten.', x: 'Bij nosotros is er géén stamwisseling.', tag: 'stem-change' },
      { t: 'cloze', s: '¿___ pagar con tarjeta?', h: 'poder, yo', a: ['Puedo'], nl: 'Kan ik met de kaart betalen?', tag: 'stem-change' },
      { t: 'cloze', s: 'Mi hermana siempre ___ pescado.', h: 'pedir', a: ['pide'], nl: 'Mijn zus bestelt altijd vis.', tag: 'stem-change' },
      { t: 'cloze', s: '¿Ustedes ___ té o café?', h: 'preferir', a: ['prefieren'], nl: 'Hebben jullie liever thee of koffie?', tag: 'stem-change' },
      { t: 'cloze', s: '¿Cuánto ___ los tacos?', h: 'costar', a: ['cuestan'], nl: 'Hoeveel kosten de tacos?', tag: 'stem-change' },
      { t: 'cloze', s: 'Los niños ___ en la escuela.', h: 'almorzar', a: ['almuerzan'], nl: 'De kinderen lunchen op school.', tag: 'stem-change' },
      { t: 'cloze', s: 'Los sábados ___ al fútbol con mis amigos.', h: 'jugar, yo', a: ['juego'], nl: 'Op zaterdag voetbal ik met mijn vrienden.', tag: 'stem-change' },
      { t: 'mc', q: 'Welke zin is het beleefdst?', o: ['Quisiera una cerveza, por favor.', 'Dame cerveza.', 'Quiero cerveza ya.'], tag: 'vocab' },
      { t: 'mc', q: '«Avocado» in Chili en Argentinië:', o: ['la palta', 'el aguacate', 'el elote'], tag: 'vocab' },
      { t: 'mc', q: 'Tengo ___. ¿Hay agua?', o: ['sed', 'hambre', 'frío'], tag: 'tener' },
      { t: 'tr', nl: 'Mag ik de rekening, alstublieft?', a: ['¿Me trae la cuenta, por favor?', 'La cuenta, por favor.', '¿Nos trae la cuenta, por favor?', '¿Me da la cuenta, por favor?', '¿Me regala la cuenta, por favor?'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik heb honger.', a: ['Tengo hambre.', 'Tengo mucha hambre.'], tag: 'tener' },
      { t: 'tr', nl: 'Kunnen we hier eten?', a: ['¿Podemos comer aquí?'], tag: 'stem-change' },
      { t: 'order', s: 'Para mí, un jugo de mango y tres tacos.', nl: 'Voor mij een mangosap en drie tacos.' }
    ],
    say: [['Quisiera tres tacos al pastor, por favor.', 'Ik wil graag drie tacos al pastor.'], ['¿La salsa es muy picante?', 'Is de saus erg pittig?'], ['¿Nos trae la cuenta, por favor?', 'Mogen we de rekening?']],
    task: { nl: 'Je zit in een restaurant. Schrijf wat je bestelt (eten en drinken) en wat je liever niet wilt.', model: 'Buenas noches. Para mí, una sopa de tortilla y pollo con arroz. Para tomar, quisiera un jugo de naranja. No quiero nada muy picante, por favor.' },
    scenario: { nl: 'Je bestelt in een taquería in Mexico-Stad.', role: 'Eres don Beto, el mesero de una taquería popular en la Ciudad de México. Hablas rápido pero amable, dices «joven», ofreces salsas y recomiendas los tacos al pastor.', goal: 'Bestel eten en drinken, vraag of iets pittig is en vraag om de rekening.' }
  });

  /* ───────────────────────── A1 · 8 ───────────────────────── */
  U({
    id: 'a1-08', level: 'A1', icon: '🪥', title: 'Mi rutina', nl: 'Dagelijkse routine en wederkerende werkwoorden',
    goals: ['Je dagelijkse routine beschrijven', 'Wederkerende werkwoorden gebruiken (me levanto)', 'Gebeurtenissen ordenen: primero, luego, después'],
    vocab: [
      ['levantarse', 'opstaan'], ['despertarse', 'wakker worden'], ['bañarse', 'douchen / in bad gaan', 'in LatAm vaak = douchen'],
      ['ducharse', 'douchen'], ['cepillarse los dientes', 'tanden poetsen', 'ES: lavarse los dientes'], ['lavarse la cara', 'je gezicht wassen'],
      ['vestirse', 'zich aankleden'], ['peinarse', 'zijn haar kammen'], ['maquillarse', 'zich opmaken'], ['afeitarse', 'zich scheren'],
      ['acostarse', 'naar bed gaan'], ['dormir', 'slapen'], ['salir de casa', 'de deur uitgaan'], ['volver a casa', 'thuiskomen'],
      ['primero', 'eerst'], ['luego', 'dan / daarna'], ['después', 'daarna'], ['más tarde', 'later'], ['por último', 'als laatste'],
      ['antes de…', 'voordat… / vóór'], ['después de…', 'nadat… / na'], ['el despertador', 'de wekker'], ['la cama', 'het bed'],
      ['cansado / cansada', 'moe'], ['rápido', 'snel'], ['tranquilo / tranquila', 'rustig'], ['ahorita', 'zo meteen / nu meteen', 'MX: kan ook veel later betekenen 😉'],
      ['ya mismo', 'zo meteen', 'EC: betekent juist «straks», niet nu!']
    ],
    grammar: [
      { t: 'Wederkerende werkwoorden', es: 'Verbos reflexivos',
        html: `<p>Een werkwoord dat op <b>-se</b> eindigt, krijgt een wederkerend voornaamwoord: <b>me, te, se, nos, se</b>. Vergelijk het Nederlandse <i>ik was me</i>.</p>
<p>Het voornaamwoord staat <b>vóór</b> het vervoegde werkwoord. Bij een infinitief mag het ook <b>achter</b> het werkwoord vastgeplakt worden: <i>Me voy a bañar</i> = <i>Voy a bañarme</i>.</p>`,
        table: [['', 'levantarse', 'bañarse'], ['yo', 'me levanto', 'me baño'], ['tú', 'te levantas', 'te bañas'], ['él / ella / usted', 'se levanta', 'se baña'], ['nosotros', 'nos levantamos', 'nos bañamos'], ['ellos / ustedes', 'se levantan', 'se bañan']] },
      { t: 'Wederkerend én stamwisseling', es: 'Reflexivos con cambio',
        html: `<p>Sommige wederkerende werkwoorden hebben ook een stamwisseling, die je al kent uit unit 7:</p>`,
        table: [['', 'despertarse (e→ie)', 'acostarse (o→ue)', 'vestirse (e→i)'], ['yo', 'me despierto', 'me acuesto', 'me visto'], ['tú', 'te despiertas', 'te acuestas', 'te vistes'], ['él / usted', 'se despierta', 'se acuesta', 'se viste'], ['nosotros', 'nos despertamos', 'nos acostamos', 'nos vestimos'], ['ellos / ustedes', 'se despiertan', 'se acuestan', 'se visten']] },
      { t: 'Volgorde aangeven', es: 'Conectores de secuencia',
        html: `<p><b>primero</b> → <b>luego / después</b> → <b>más tarde</b> → <b>por último</b></p>
<p><b>antes de</b> en <b>después de</b> + <b>infinitief</b>: <i>Antes de acostarme, leo.</i> (Voordat ik naar bed ga, lees ik.) · <i>Después de desayunar, salgo.</i></p>` }
    ],
    verbs: ['levantarse', 'despertarse', 'bañarse', 'vestirse', 'acostarse', 'dormir', 'volver', 'salir'], tenses: ['pres'],
    dialogue: {
      t: 'En casa de la familia anfitriona', place: 'Quito 🇪🇨',
      lines: [
        ['Señora Elena', 'Mark, ¿a qué hora te levantas mañana?', 'Mark, hoe laat sta je morgen op?'],
        ['Mark', 'Normalmente me levanto a las seis y media.', 'Normaal sta ik om half zeven op.'],
        ['Señora Elena', '¡Qué temprano! Mis hijos se levantan a las siete y se bañan primero.', 'Wat vroeg! Mijn kinderen staan om zeven uur op en douchen als eersten.'],
        ['Mark', 'No hay problema. Yo me baño en la noche, antes de acostarme.', 'Geen probleem. Ik douche ’s avonds, voordat ik naar bed ga.'],
        ['Señora Elena', 'Perfecto. ¿Y desayunas en casa?', 'Perfect. En ontbijt je thuis?'],
        ['Mark', 'Sí, pero rápido. Primero me visto, luego desayuno y después salgo para el trabajo.', 'Ja, maar snel. Eerst kleed ik me aan, dan ontbijt ik en daarna ga ik naar mijn werk.'],
        ['Señora Elena', '¿Y a qué hora vuelves?', 'En hoe laat kom je terug?'],
        ['Mark', 'Vuelvo a las seis. Después de cenar, estudio un poco y me acuesto a las once.', 'Ik kom om zes uur terug. Na het eten studeer ik wat en om elf uur ga ik naar bed.'],
        ['Señora Elena', 'Muy bien, ¡eres muy organizado!', 'Heel goed, je bent erg georganiseerd!']
      ],
      q: [
        { t: 'mc', q: '¿Cuándo se baña Mark?', o: ['En la noche', 'En la mañana, primero', 'Al mediodía'] },
        { t: 'mc', q: '¿A qué hora se acuesta Mark?', o: ['A las once', 'A las seis y media', 'A las siete'] },
        { t: 'mc', q: '¿Quiénes se bañan primero en la mañana?', o: ['Los hijos de Elena', 'Mark', 'La señora Elena'] }
      ]
    },
    culture: { t: '«Ahorita» en de Latijns-Amerikaanse tijd', html: `<p>⏳ 🇲🇽 <b>Ahorita</b> kan <i>nu meteen</i> betekenen, maar ook <i>straks</i> of zelfs <i>misschien nooit</i>. Uit de context en de toon hoor je wat iemand bedoelt. <i>Ahoritita</i> betekent echt nu.</p>
<p>🇪🇨 In Ecuador betekent <b>ya mismo</b> <i>straks</i>, terwijl het in Spanje <i>nu meteen</i> betekent.</p>
<p>Bij sociale afspraken is wat later komen vaak normaal (<i>la hora latina</i>). Bij werk, dokters en officiële afspraken kom je wel op tijd.</p>
<p>🚿 Een douche heet <i>la ducha</i>, in Mexico <i>la regadera</i>. Douchen zeg je in grote delen van Latijns-Amerika gewoon met <i>bañarse</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Yo ___ levanto a las siete.', a: ['me'], o: ['me', 'te', 'se'], nl: 'Ik sta om zeven uur op.', tag: 'reflexive' },
      { t: 'cloze', s: '¿A qué hora ___ acuestas?', a: ['te'], o: ['te', 'se', 'me'], nl: 'Hoe laat ga je naar bed?', tag: 'reflexive' },
      { t: 'cloze', s: 'Mi papá se ___ a las cinco.', h: 'despertarse', a: ['despierta'], nl: 'Mijn vader wordt om vijf uur wakker.', tag: 'stem-change' },
      { t: 'cloze', s: 'Nosotros ___ bañamos en la noche.', a: ['nos'], o: ['nos', 'se', 'me'], nl: 'Wij douchen ’s avonds.', tag: 'reflexive' },
      { t: 'cloze', s: 'Los niños se ___ solos.', h: 'vestirse', a: ['visten'], nl: 'De kinderen kleden zich zelf aan.', tag: 'stem-change' },
      { t: 'cloze', s: 'Yo me ___ a las once.', h: 'acostarse', a: ['acuesto'], nl: 'Ik ga om elf uur naar bed.', tag: 'stem-change' },
      { t: 'mc', q: '«Ik ga (zo) douchen.»', o: ['Voy a bañarme.', 'Voy a bañar me.', 'Voy me a bañar.'], x: 'Het voornaamwoord staat aan de infinitief vast (bañarme) of vóór het vervoegde werkwoord (me voy a bañar).', tag: 'reflexive' },
      { t: 'mc', q: 'Welk woord betekent «daarna»?', o: ['después', 'antes', 'primero'], tag: 'vocab' },
      { t: 'mc', q: '«Ahorita» in Mexico betekent…', o: ['zo meteen — of misschien veel later', 'gisteren', 'nooit'], tag: 'vocab' },
      { t: 'cloze', s: 'Después ___ desayunar, salgo de casa.', a: ['de'], o: ['de', 'que', 'a'], nl: 'Na het ontbijt ga ik de deur uit.', tag: 'prepositions' },
      { t: 'tr', nl: 'Ik sta om zes uur op.', a: ['Me levanto a las seis.', 'Yo me levanto a las seis.'], tag: 'reflexive' },
      { t: 'tr', nl: 'Hoe laat ga je naar bed?', a: ['¿A qué hora te acuestas?', '¿A qué hora se acuesta?', '¿A qué hora se acuesta usted?'], tag: 'reflexive' },
      { t: 'tr', nl: 'Eerst kleed ik me aan, daarna ontbijt ik.', a: ['Primero me visto, después desayuno.', 'Primero me visto y después desayuno.', 'Primero me visto, luego desayuno.', 'Primero me visto y luego desayuno.'], tag: 'reflexive' },
      { t: 'order', s: 'Primero me baño y luego me visto.', nl: 'Eerst douche ik en dan kleed ik me aan.' }
    ],
    say: [['Me levanto a las seis y media.', 'Ik sta om half zeven op.'], ['Primero me visto, luego desayuno.', 'Eerst kleed ik me aan, dan ontbijt ik.'], ['¿A qué hora te acuestas?', 'Hoe laat ga je naar bed?']],
    task: { nl: 'Beschrijf je ochtend- en avondroutine. Gebruik wederkerende werkwoorden en woorden als primero, luego en después.', model: 'Me despierto a las seis, pero me levanto a las seis y cuarto. Primero me baño, luego me visto y desayuno. En la noche ceno, leo un poco y me acuesto a las once.' },
    scenario: { nl: 'Je gastmoeder in Quito wil je dagritme weten.', role: 'Eres la señora Elena, una mamá ecuatoriana amable de Quito que recibe a un estudiante extranjero. Quieres organizar los horarios de la casa (baño, desayuno, cena).', goal: 'Vertel hoe laat je opstaat, doucht, eet en naar bed gaat.' }
  });

  /* ───────────────────────── A1 · 9 ───────────────────────── */
  U({
    id: 'a1-09', level: 'A1', icon: '🛍️', title: 'De compras', nl: 'Kleding, kleuren, prijzen en este/ese/aquel',
    goals: ['Kleding kopen en naar de prijs vragen', 'Aanwijzen met este / ese / aquel', 'Grote getallen begrijpen (prijzen)'],
    vocab: [
      ['la ropa', 'de kleding'], ['la camisa', 'het overhemd'], ['la camiseta', 'het T-shirt', 'MX: la playera · AR: la remera'],
      ['los pantalones', 'de broek'], ['los jeans', 'de spijkerbroek'], ['la falda', 'de rok', 'AR/UY: la pollera'], ['el vestido', 'de jurk'],
      ['los zapatos', 'de schoenen'], ['los tenis', 'de sneakers', 'AR/CL/ES: las zapatillas'], ['la chaqueta', 'de jas', 'MX: la chamarra · AR: la campera'],
      ['el suéter', 'de trui', 'ES: el jersey'], ['la talla', 'de maat'], ['caro / cara', 'duur'], ['barato / barata', 'goedkoop'],
      ['rojo', 'rood'], ['azul', 'blauw'], ['verde', 'groen'], ['amarillo', 'geel'], ['negro', 'zwart'], ['blanco', 'wit'],
      ['gris', 'grijs'], ['rosado', 'roze', 'ook: rosa'], ['morado', 'paars'], ['café / marrón', 'bruin', 'MX/CO: café'],
      ['¿cuánto cuesta?', 'hoeveel kost het?'], ['probarse', 'passen (kleding)'], ['me queda grande', 'het is me te groot'],
      ['la tarjeta', 'de (bank)pas'], ['en efectivo', 'contant'], ['el descuento', 'de korting'], ['me lo llevo', 'ik neem het']
    ],
    grammar: [
      { t: 'Aanwijzende voornaamwoorden', es: 'Los demostrativos',
        html: `<p>Welk woord je kiest, hangt af van de <b>afstand</b>: <b>este</b> = hier, bij mij · <b>ese</b> = daar, bij jou · <b>aquel</b> = daarginds, ver van ons allebei.</p>
<p>De neutrale vormen <b>esto / eso / aquello</b> gebruik je als je niet weet wat iets is: <i>¿Qué es eso?</i></p>`,
        table: [['', 'dichtbij', 'bij jou', 'ver weg'], ['m. enk.', 'este', 'ese', 'aquel'], ['v. enk.', 'esta', 'esa', 'aquella'], ['m. mv.', 'estos', 'esos', 'aquellos'], ['v. mv.', 'estas', 'esas', 'aquellas']] },
      { t: 'Kleuren', es: 'Los colores',
        html: `<p>Kleuren zijn bijvoeglijke naamwoorden en komen <b>achter</b> het woord: <i>una camisa roja, unos zapatos negros</i>. Kleuren op <b>-o</b> veranderen mee (rojo/roja/rojos/rojas). Kleuren op <b>-e</b> of een medeklinker veranderen alleen in getal: <i>verde → verdes, azul → azules, gris → grises</i>.</p>` },
      { t: 'Getallen vanaf 100', es: 'Números grandes',
        html: `<p>100 <b>cien</b> (precies honderd) · 101 <b>ciento</b> uno · 200 doscientos · 300 trescientos · 400 cuatrocientos · <b>500 quinientos</b> · 600 seiscientos · <b>700 setecientos</b> · 800 ochocientos · <b>900 novecientos</b> · 1.000 <b>mil</b> · 2.000 dos mil · 1.000.000 un millón (de)</p>
<p>Honderdtallen worden vrouwelijk vóór een vrouwelijk woord: <i>doscient<b>as</b> personas</i>. Je zegt <b>mil</b>, niet <s>un mil</s>.</p>
<p>💡 Een punt in een getal scheidt duizendtallen: 1.500 = <i>mil quinientos</i>.</p>` }
    ],
    verbs: ['comprar', 'pagar', 'costar', 'llevar', 'buscar', 'probarse'], tenses: ['pres'],
    dialogue: {
      t: 'En una tienda de ropa', place: 'Bogotá 🇨🇴',
      lines: [
        ['Vendedora', 'Buenas. ¿Le puedo ayudar en algo?', 'Goedendag. Kan ik u ergens mee helpen?'],
        ['Mark', 'Sí, gracias. ¿Cuánto cuesta esta chaqueta?', 'Ja, graag. Hoeveel kost deze jas?'],
        ['Vendedora', '¿Esa negra? Cuesta doscientos mil pesos.', 'Die zwarte? Die kost tweehonderdduizend peso.'],
        ['Mark', 'Uf, es un poco cara. ¿Y aquella azul?', 'Oei, dat is een beetje duur. En die blauwe daar?'],
        ['Vendedora', 'Aquella está en descuento: ciento veinte mil.', 'Die is in de aanbieding: honderdtwintigduizend.'],
        ['Mark', '¿Me la puedo probar?', 'Mag ik hem passen?'],
        ['Vendedora', 'Claro, el probador está allí. ¿Qué talla usa?', 'Natuurlijk, de paskamer is daar. Welke maat heeft u?'],
        ['Mark', 'Mediana, creo… Mmm, me queda un poco grande.', 'Medium, denk ik… Mmm, hij is me een beetje te groot.'],
        ['Vendedora', 'Tenga, esta es una talla pequeña.', 'Alstublieft, dit is een small.'],
        ['Mark', '¡Perfecta! Me la llevo. ¿Puedo pagar con tarjeta?', 'Perfect! Ik neem hem. Kan ik met de kaart betalen?'],
        ['Vendedora', 'Sí, con tarjeta o en efectivo, como quiera.', 'Ja, met de kaart of contant, zoals u wilt.']
      ],
      q: [
        { t: 'mc', q: '¿Cuánto cuesta la chaqueta negra?', o: ['200.000 pesos', '120.000 pesos', '20.000 pesos'] },
        { t: 'mc', q: '¿Cómo le queda a Mark la talla mediana?', o: ['Grande', 'Pequeña', 'Perfecta'] },
        { t: 'mc', q: '¿Cómo puede pagar Mark?', o: ['Con tarjeta o en efectivo', 'Solo en efectivo', 'Solo con tarjeta'] }
      ]
    },
    culture: { t: 'Geld en kleding per land', html: `<p>💰 Munteenheden: <b>peso</b> 🇲🇽🇨🇴🇦🇷🇨🇱🇺🇾 · <b>sol</b> 🇵🇪 · <b>dólar</b> 🇪🇨🇸🇻🇵🇦 · <b>quetzal</b> 🇬🇹 · <b>colón</b> 🇨🇷 · <b>bolívar</b> 🇻🇪. In Colombia en Chili lopen prijzen al snel in de duizenden, dus grote getallen zijn handig.</p>
<p>🧥 Kledingwoorden verschillen sterk per land: <i>chaqueta / chamarra / campera</i>, <i>camiseta / playera / remera</i>, <i>tenis / zapatillas</i>.</p>
<p>🧺 Op markten mag je afdingen (<i>regatear</i>): <i>¿Me lo deja más barato?</i> In gewone winkels doe je dat niet.</p>` },
    ex: [
      { t: 'cloze', s: '¿Cuánto cuesta ___ camisa?', h: 'deze, hier bij mij', a: ['esta'], o: ['esta', 'este', 'esa'], nl: 'Hoeveel kost dit overhemd?', tag: 'demonstratives' },
      { t: 'cloze', s: 'Me gustan ___ zapatos.', h: 'die, bij jou', a: ['esos'], o: ['esos', 'esas', 'estos'], nl: 'Ik vind die schoenen mooi.', tag: 'demonstratives' },
      { t: 'cloze', s: '___ casa de allá es muy bonita.', h: 'die daar ver weg', a: ['Aquella'], o: ['Aquella', 'Esta', 'Aquel'], nl: 'Dat huis daarginds is heel mooi.', tag: 'demonstratives' },
      { t: 'cloze', s: 'Quiero los pantalones ___.', h: 'negro', a: ['negros'], nl: 'Ik wil de zwarte broek.', tag: 'adj-agree' },
      { t: 'cloze', s: 'Busco una falda ___.', h: 'azul', a: ['azul'], nl: 'Ik zoek een blauwe rok.', x: 'Azul blijft gelijk voor mannelijk en vrouwelijk.', tag: 'adj-agree' },
      { t: 'mc', q: '500 =', o: ['quinientos', 'cincocientos', 'cinco cientos'], tag: 'numbers' },
      { t: 'mc', q: '100 camisetas =', o: ['cien camisetas', 'ciento camisetas', 'un cien camisetas'], tag: 'numbers' },
      { t: 'mc', q: '1.200 pesos =', o: ['mil doscientos pesos', 'un mil doscientos pesos', 'doce cientos pesos'], tag: 'numbers' },
      { t: 'mc', q: '«Het is me te groot.»', o: ['Me queda grande.', 'Soy grande.', 'Tengo grande.'], tag: 'vocab' },
      { t: 'mc', q: 'Hoe heet een jas in Mexico?', o: ['la chamarra', 'la campera', 'la remera'], tag: 'vocab' },
      { t: 'tr', nl: 'Hoeveel kost deze trui?', a: ['¿Cuánto cuesta este suéter?', '¿Cuánto vale este suéter?'], tag: 'demonstratives' },
      { t: 'tr', nl: 'Kan ik met de kaart betalen?', a: ['¿Puedo pagar con tarjeta?'], tag: 'stem-change' },
      { t: 'tr', nl: 'Die rode schoenen (bij jou) zijn goedkoop.', a: ['Esos zapatos rojos son baratos.'], tag: 'demonstratives' },
      { t: 'order', s: 'Aquella chaqueta azul está en descuento.', nl: 'Die blauwe jas daar is in de aanbieding.' }
    ],
    say: [['¿Cuánto cuesta esta chaqueta?', 'Hoeveel kost deze jas?'], ['Es un poco cara.', 'Hij is een beetje duur.'], ['¿Puedo pagar en efectivo?', 'Kan ik contant betalen?']],
    task: { nl: 'Je bent in een kledingwinkel. Vraag naar de prijs, maat en kleur, en beslis wat je koopt.', model: 'Buenas tardes. ¿Cuánto cuestan estos tenis blancos? ¿Tiene una talla más grande? Mmm, son un poco caros. Prefiero aquellos negros. Me los llevo.' },
    scenario: { nl: 'Je koopt kleding in een winkel in Bogotá.', role: 'Eres Paola, vendedora en una tienda de ropa en Bogotá. Tratas de «usted», eres muy amable y ofreces descuentos y otras tallas o colores.', goal: 'Vraag naar prijzen, pas iets en reken af.' }
  });

  /* ───────────────────────── A1 · 10 ───────────────────────── */
  U({
    id: 'a1-10', level: 'A1', icon: '🌦️', title: 'Planes y el clima', nl: 'Het weer, plannen (ir a) en estar + gerundio',
    goals: ['Over het weer praten', 'Plannen maken met ir a + infinitief', 'Zeggen wat je nu aan het doen bent'],
    vocab: [
      ['el clima', 'het weer / het klimaat', 'in LatAm vaak = het weer'], ['hace calor', 'het is warm'], ['hace frío', 'het is koud'],
      ['hace sol', 'de zon schijnt'], ['hace viento', 'het waait'], ['hace buen tiempo', 'het is lekker weer'], ['llueve / está lloviendo', 'het regent'],
      ['está nublado', 'het is bewolkt'], ['la lluvia', 'de regen'], ['la tormenta', 'het onweer / de storm'], ['el verano', 'de zomer'],
      ['el invierno', 'de winter'], ['la primavera', 'de lente'], ['el otoño', 'de herfst'], ['la temporada de lluvias', 'het regenseizoen'],
      ['mañana', 'morgen'], ['pasado mañana', 'overmorgen'], ['la próxima semana', 'volgende week'], ['este fin de semana', 'dit weekend'],
      ['el plan', 'het plan'], ['¿qué vas a hacer?', 'wat ga je doen?'], ['quedarse en casa', 'thuisblijven'], ['la maleta', 'de koffer'],
      ['el paraguas', 'de paraplu', 'CO ook: la sombrilla'], ['el bloqueador', 'de zonnebrand', 'ook: el protector solar'], ['ahora', 'nu'],
      ['¡qué padre!', 'wat gaaf!', 'MX'], ['enero · febrero · marzo', 'januari · februari · maart'], ['diciembre', 'december']
    ],
    grammar: [
      { t: 'Plannen: ir a + infinitief', es: 'Ir a + infinitivo',
        html: `<p>Met <b>ir</b> (in de presente) + <b>a</b> + een <b>infinitief</b> zeg je wat je gaat doen. Dit is in het dagelijks Latijns-Amerikaans Spaans de gewoonste manier om over de toekomst te praten.</p>`,
        table: [['persoon', 'ir', '+ a + infinitief'], ['yo', 'voy', 'a viajar'], ['tú', 'vas', 'a comer'], ['él / ella / usted', 'va', 'a estudiar'], ['nosotros', 'vamos', 'a bailar'], ['ellos / ustedes', 'van', 'a salir']],
        ex: [['Mañana voy a visitar a mi abuela.', 'Morgen ga ik mijn oma bezoeken.'], ['¿Qué van a hacer el sábado?', 'Wat gaan jullie zaterdag doen?']] },
      { t: 'Het weer', es: 'El clima',
        html: `<p><b>hace</b> + calor / frío / sol / viento / buen tiempo / mal tiempo<br><b>está</b> + nublado / lloviendo / soleado<br><b>hay</b> + tormenta / niebla<br>Werkwoorden: <b>llueve</b> (llover) · <b>nieva</b> (nevar)</p>
<p>Voor nadruk: <i>hace <b>mucho</b> calor</i> (het is erg warm). Je zegt niet <s>muy calor</s>, want calor is een zelfstandig naamwoord.</p>` },
      { t: 'Nu bezig: estar + gerundio', es: 'Estar + gerundio',
        html: `<p>Met <b>estar</b> + een vorm op <b>-ando</b> (bij -ar) of <b>-iendo</b> (bij -er/-ir) zeg je wat je op dit moment aan het doen bent.</p>
<p>Onregelmatige vormen: <i>leer → leyendo, dormir → durmiendo, pedir → pidiendo, decir → diciendo, ir → yendo</i>.</p>`,
        table: [['', 'estar', '+ gerundio'], ['yo', 'estoy', 'trabajando'], ['tú', 'estás', 'comiendo'], ['él / ella', 'está', 'escribiendo'], ['nosotros', 'estamos', 'leyendo'], ['ellos', 'están', 'durmiendo']],
        sum: '¿Qué estás haciendo? — Estoy estudiando.' }
    ],
    verbs: ['ir', 'hacer', 'viajar', 'cocinar', 'leer', 'dormir', 'estudiar', 'pedir'], tenses: ['ira', 'prog'],
    dialogue: {
      t: 'Una llamada', place: 'Monterrey 🇲🇽 ↔ Ámsterdam',
      lines: [
        ['Diego', '¡Hola, Mark! ¿Qué estás haciendo?', 'Hoi Mark! Waar ben je mee bezig?'],
        ['Mark', 'Hola, Diego. Estoy haciendo la maleta. ¡Mañana voy a viajar a Santiago de Chile!', 'Hoi Diego. Ik ben mijn koffer aan het inpakken. Morgen ga ik naar Santiago de Chile!'],
        ['Diego', '¡Qué padre! ¿Y qué clima hace allá ahora?', 'Wat gaaf! En wat voor weer is het daar nu?'],
        ['Mark', 'En diciembre es verano en Chile, entonces hace calor y hace mucho sol.', 'In december is het zomer in Chili, dus het is warm en zonnig.'],
        ['Diego', 'Aquí en Monterrey está haciendo frío y está lloviendo.', 'Hier in Monterrey is het koud en het regent.'],
        ['Mark', '¡Pobre! ¿Y qué vas a hacer este fin de semana?', 'Arme jij! En wat ga je dit weekend doen?'],
        ['Diego', 'Me voy a quedar en casa. Voy a ver series y voy a cocinar pozole.', 'Ik blijf thuis. Ik ga series kijken en pozole koken.'],
        ['Mark', '¡Qué rico! Yo voy a ir a la playa en Viña del Mar.', 'Lekker! Ik ga naar het strand in Viña del Mar.'],
        ['Diego', '¡No olvides el bloqueador!', 'Vergeet je zonnebrand niet!']
      ],
      q: [
        { t: 'mc', q: '¿Qué está haciendo Mark?', o: ['Está haciendo la maleta', 'Está viendo series', 'Está cocinando'] },
        { t: 'mc', q: '¿Qué clima hace en Monterrey?', o: ['Hace frío y está lloviendo', 'Hace calor y sol', 'Está nevando'] },
        { t: 'mc', q: '¿Qué va a hacer Diego el fin de semana?', o: ['Quedarse en casa', 'Ir a la playa', 'Viajar a Chile'] }
      ]
    },
    culture: { t: 'Seizoenen op z’n kop', html: `<p>🌍 Op het zuidelijk halfrond (Argentinië, Chili, Uruguay, Paraguay) is het in <b>december tot februari zomer</b>. Kerst vieren ze daar met BBQ (<i>asado</i>) en hitte!</p>
<p>🌴 In tropische landen zoals Colombia, Venezuela en Midden-Amerika zijn er niet echt vier seizoenen. Daar heb je een <b>temporada seca</b> (droge tijd) en een <b>temporada de lluvias</b> (regentijd), die mensen vaak gewoon <i>invierno</i> noemen.</p>
<p>In Latijns-Amerika vraag je vaak <b>¿Qué clima hace?</b> of <b>¿Cómo está el clima?</b>, waar ze in Spanje <i>¿Qué tiempo hace?</i> zeggen.</p>` },
    ex: [
      { t: 'cloze', s: 'Mañana yo ___ a viajar a Lima.', a: ['voy'], o: ['voy', 'va', 'vamos'], nl: 'Morgen ga ik naar Lima reizen.', tag: 'ir-a' },
      { t: 'cloze', s: '¿Qué ___ a hacer ustedes el sábado?', a: ['van'], o: ['van', 'vas', 'vamos'], nl: 'Wat gaan jullie zaterdag doen?', tag: 'ir-a' },
      { t: 'cloze', s: 'Nosotros vamos ___ cocinar.', a: ['a'], o: ['a', 'de', 'en'], nl: 'Wij gaan koken.', tag: 'ir-a' },
      { t: 'cloze', s: 'En enero ___ mucho calor en Buenos Aires.', a: ['hace'], o: ['hace', 'está', 'hay'], nl: 'In januari is het erg warm in Buenos Aires.', tag: 'weather' },
      { t: 'cloze', s: 'Hoy ___ nublado.', a: ['está'], o: ['está', 'hace', 'es'], nl: 'Vandaag is het bewolkt.', tag: 'weather' },
      { t: 'cloze', s: 'Mira, ___ lloviendo.', a: ['está'], o: ['está', 'es', 'hace'], nl: 'Kijk, het regent.', tag: 'progressive' },
      { t: 'cloze', s: 'Los niños están ___.', h: 'dormir', a: ['durmiendo'], nl: 'De kinderen liggen te slapen.', tag: 'progressive' },
      { t: 'cloze', s: 'Estoy ___ un libro muy bueno.', h: 'leer', a: ['leyendo'], nl: 'Ik ben een heel goed boek aan het lezen.', tag: 'progressive' },
      { t: 'mc', q: 'Wanneer is het zomer in Argentinië?', o: ['december–februari', 'juni–augustus', 'maart–mei'], tag: 'weather' },
      { t: 'mc', q: '«Waar ben je mee bezig?»', o: ['¿Qué estás haciendo?', '¿Qué eres haciendo?', '¿Qué haces haciendo?'], tag: 'progressive' },
      { t: 'mc', q: '«Het is erg warm.»', o: ['Hace mucho calor.', 'Hace muy calor.', 'Está mucho calor.'], x: 'Calor is een zelfstandig naamwoord, dus je zegt mucho calor.', tag: 'weather' },
      { t: 'tr', nl: 'Het is koud vandaag.', a: ['Hoy hace frío.', 'Hace frío hoy.'], tag: 'weather' },
      { t: 'tr', nl: 'Ik ga morgen naar het strand.', a: ['Mañana voy a ir a la playa.', 'Voy a ir a la playa mañana.', 'Mañana voy a la playa.', 'Voy a la playa mañana.'], tag: 'ir-a' },
      { t: 'tr', nl: 'We zijn aan het koken.', a: ['Estamos cocinando.', 'Nosotros estamos cocinando.'], tag: 'progressive' },
      { t: 'order', s: 'Este fin de semana voy a quedarme en casa.', nl: 'Dit weekend blijf ik thuis.' }
    ],
    say: [['¿Qué clima hace allá?', 'Wat voor weer is het daar?'], ['Mañana voy a viajar a Chile.', 'Morgen reis ik naar Chili.'], ['Ahora estoy estudiando español.', 'Nu ben ik Spaans aan het studeren.']],
    task: { nl: 'Vertel wat voor weer het is waar je nu bent, wat je op dit moment doet en wat je dit weekend gaat doen.', model: 'Hoy en Ámsterdam hace frío y está lloviendo. Ahora estoy estudiando español en casa. Este fin de semana voy a visitar a mis padres y vamos a cocinar juntos.' },
    scenario: { nl: 'Je vriend Diego uit Monterrey belt je op.', role: 'Eres Diego, un amigo mexicano de Monterrey, relajado y bromista. Usas expresiones como «¡qué padre!» y «güey» (con cariño). Preguntas qué está haciendo el estudiante, qué clima hace y sus planes.', goal: 'Vertel wat je nu doet, hoe het weer is en wat je plannen zijn.' }
  });
})(window.SPT);
