/* Neerlandés A1, unidades 6–10 (neerlandés de los Países Bajos, explicaciones en español latinoamericano). Mismo formato que a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('nl-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'nl-dit': 'deze, dit, die, dat', 'nl-prijs': 'precios', 'nl-adj': 'adjetivo con o sin -e', 'nl-modal': 'kunnen, willen, moeten, mogen',
    'nl-weer': 'el clima', 'nl-hobby': 'pasatiempos', 'nl-huis': 'la casa', 'nl-pos': 'staan, liggen, hangen', 'nl-gaan': 'gaan + infinitivo',
    'nl-datum': 'días, meses y fechas', 'nl-obj': 'pronombres objeto (me, hem, haar…)'
  });

  /* ───────────────────────── A1 · 6 ───────────────────────── */
  U({
    id: 'nl-a1-06', level: 'A1', icon: '🛍️', title: 'Boodschappen doen', nl: 'De compras',
    goals: ['Preguntar precios', 'Usar deze, dit, die, dat', 'Saber cuándo el adjetivo lleva -e'],
    vocab: [
      ['de winkel', 'la tienda'], ['de markt', 'el mercado'], ['de kleren', 'la ropa'], ['het shirt', 'la camiseta'], ['de broek', 'el pantalón'], ['de jurk', 'el vestido'],
      ['de rok', 'la falda'], ['de schoenen', 'los zapatos'], ['de jas', 'la chaqueta / el abrigo'], ['de tas', 'la bolsa / la cartera'], ['rood', 'rojo'], ['blauw', 'azul'],
      ['groen', 'verde'], ['geel', 'amarillo'], ['zwart', 'negro'], ['wit', 'blanco'], ['de maat', 'la talla'], ['Hoeveel kost het?', '¿Cuánto cuesta?'], ['duur', 'caro'],
      ['goedkoop', 'barato'], ['de aanbieding', 'la oferta'], ['Ik neem het.', 'Me lo llevo.'], ['Mag ik het passen?', '¿Me lo puedo probar?'], ['de paskamer', 'el probador'],
      ['pinnen', 'pagar con tarjeta'], ['contant', 'en efectivo'], ['de euro', 'el euro'], ['het bonnetje', 'el recibo']
    ],
    grammar: [
      { t: 'Deze, dit, die, dat', es: 'Aanwijzende voornaamwoorden',
        html: `<p>Depende de si la palabra es <b>de</b> o <b>het</b>, y de si está cerca o lejos.</p>
<p>Palabras con <b>de</b> (y todo plural): <b>deze</b> (este, cerca) y <b>die</b> (ese, lejos). Palabras con <b>het</b>: <b>dit</b> (este) y <b>dat</b> (ese).</p>`,
        table: [['', 'cerca', 'lejos'], ['de-woord', 'deze jas', 'die jas'], ['het-woord', 'dit shirt', 'dat shirt'], ['plural', 'deze schoenen', 'die schoenen']],
        sum: 'Deze jas, dit shirt, die schoenen, dat huis.',
        ex: [['Hoeveel kost deze jas?', '¿Cuánto cuesta esta chaqueta?'], ['Ik vind dat shirt mooi.', 'Esa camiseta me parece bonita.']] },
      { t: 'El adjetivo: ¿con -e o sin -e?', es: 'Bijvoeglijk naamwoord',
        html: `<p>Antes de un sustantivo el adjetivo casi siempre lleva <b>-e</b>: <i>de rod<b>e</b> jas</i>, <i>het rod<b>e</b> shirt</i>, <i>rod<b>e</b> schoenen</i>.</p>
<p>La excepción: con <b>een</b> + palabra <b>het</b> no lleva -e: <i>een rood shirt</i>. Y después del verbo nunca lleva -e: <i>De jas is rood.</i></p>`,
        table: [['', 'con -e', 'sin -e'], ['de-woord', 'de / een rode jas', 'de jas is rood'], ['het-woord', 'het rode shirt', 'een rood shirt']],
        ex: [['Ik zoek een zwarte broek.', 'Busco un pantalón negro.'], ['Dat is een groot huis.', 'Esa es una casa grande.']] },
      { t: 'Precios y pagar', es: 'Hoeveel kost het?',
        html: `<p><b>Hoeveel kost</b> deze tas? — Hij <b>kost</b> 25 euro. En plural: Hoeveel <b>kosten</b> deze schoenen?</p>
<p>Los precios: €12,50 = <i>twaalf euro vijftig</i>. Ojo: los decimales se escriben con coma. En los Países Bajos casi todo se paga con tarjeta: <b>pinnen</b>.</p>`,
        table: [['precio', 'se dice'], ['€5', 'vijf euro'], ['€12,50', 'twaalf euro vijftig'], ['€99', 'negenennegentig euro']],
        ex: [['Hoeveel kosten deze schoenen? — Ze kosten 60 euro.', '¿Cuánto cuestan estos zapatos? — Cuestan 60 euros.'], ['Kan ik pinnen?', '¿Puedo pagar con tarjeta?']] }
    ],
    dialogue: {
      t: 'In de kledingwinkel', place: 'Róterdam 🇳🇱',
      lines: [
        ['Verkoopster', 'Goedemiddag! Kan ik u helpen?', '¡Buenas tardes! ¿Le puedo ayudar?'],
        ['Mariela', 'Ja, graag. Hoeveel kost deze jurk?', 'Sí, por favor. ¿Cuánto cuesta este vestido?'],
        ['Verkoopster', 'Die kost 35 euro. Hij is in de aanbieding.', 'Cuesta 35 euros. Está en oferta.'],
        ['Mariela', 'Mooi! Heeft u hem ook in het blauw?', '¡Qué bien! ¿Lo tiene también en azul?'],
        ['Verkoopster', 'Ja. Welke maat heeft u?', 'Sí. ¿Qué talla usa?'],
        ['Mariela', 'Maat 38. Mag ik hem passen?', 'Talla 38. ¿Me lo puedo probar?'],
        ['Verkoopster', 'Natuurlijk. De paskamer is daar.', 'Claro. El probador está allá.'],
        ['Mariela', 'Hij past perfect. Ik neem hem. Kan ik pinnen?', 'Me queda perfecto. Me lo llevo. ¿Puedo pagar con tarjeta?'],
        ['Verkoopster', 'Ja hoor. Wilt u het bonnetje?', 'Sí, claro. ¿Quiere el recibo?']
      ],
      q: [
        { t: 'mc', q: 'Hoeveel kost de jurk?', o: ['35 euro', '25 euro', '53 euro'] },
        { t: 'mc', q: 'Welke kleur wil Mariela?', o: ['Blauw', 'Rood', 'Zwart'] },
        { t: 'mc', q: 'Hoe betaalt ze?', o: ['Ze pint', 'Contant', 'Ze koopt niets'] }
      ]
    },
    culture: { t: 'Pinnen y el mercado', html: `<p>En los Países Bajos casi todo el mundo paga con tarjeta de débito: <b>pinnen</b>. Algunas tiendas ni aceptan efectivo (<i>«Wij accepteren alleen pin»</i>).</p>
<p>🧀 Casi cada ciudad tiene un <b>mercado</b> semanal con frutas, queso, pescado y ropa barata. ¡Prueba el arenque (<i>haring</i>) si te atreves!</p>` },
    ex: [
      { t: 'cloze', s: 'Hoeveel kost ___ jas? (esta)', a: ['deze'], o: ['deze', 'dit', 'dat'], nl: '¿Cuánto cuesta esta chaqueta?', tag: 'nl-dit' },
      { t: 'cloze', s: 'Ik vind ___ shirt mooi. (esa, lejos)', a: ['dat'], o: ['dat', 'die', 'deze'], nl: 'Esa camiseta me parece bonita.', tag: 'nl-dit' },
      { t: 'cloze', s: 'Hoeveel ___ deze schoenen?', a: ['kosten'], o: ['kosten', 'kost', 'koste'], nl: '¿Cuánto cuestan estos zapatos?', tag: 'nl-prijs' },
      { t: 'cloze', s: 'Ik zoek een ___ broek.', a: ['zwarte'], o: ['zwarte', 'zwart', 'zwarten'], nl: 'Busco un pantalón negro.', tag: 'nl-adj' },
      { t: 'cloze', s: 'Dat is een ___ huis.', a: ['groot'], o: ['groot', 'grote', 'groten'], nl: 'Esa es una casa grande.', x: 'een + het-woord: sin -e.', tag: 'nl-adj' },
      { t: 'cloze', s: 'De jas is ___.', a: ['rood'], o: ['rood', 'rode', 'roden'], nl: 'La chaqueta es roja.', tag: 'nl-adj' },
      { t: 'mc', q: '«pinnen» significa…', o: ['pagar con tarjeta', 'pagar en efectivo', 'pedir un descuento'], tag: 'nl-prijs' },
      { t: 'mc', q: '€12,50 se dice…', o: ['twaalf euro vijftig', 'twaalf komma vijf', 'vijftig twaalf'], tag: 'nl-prijs' },
      { t: 'mc', q: '«barato» es…', o: ['goedkoop', 'duur', 'aanbieding'], tag: 'nl-prijs' },
      { t: 'mc', q: '«estos zapatos» es…', o: ['deze schoenen', 'dit schoenen', 'dat schoenen'], tag: 'nl-dit' },
      { t: 'tr', nl: '¿Cuánto cuesta?', a: ['Hoeveel kost het?', 'Wat kost het?'], tag: 'nl-prijs' },
      { t: 'tr', nl: '¿Me lo puedo probar?', a: ['Mag ik het passen?', 'Mag ik hem passen?', 'Kan ik het passen?', 'Kan ik hem passen?'], tag: 'nl-prijs' },
      { t: 'tr', nl: 'Estos zapatos son caros.', a: ['Deze schoenen zijn duur.'], tag: 'nl-dit' },
      { t: 'tr', nl: '¿Puedo pagar con tarjeta?', a: ['Kan ik pinnen?', 'Mag ik pinnen?'], tag: 'nl-prijs' },
      { t: 'order', s: 'Hoeveel kost deze rode jas?', nl: '¿Cuánto cuesta esta chaqueta roja?', tag: 'nl-adj' },
      { t: 'match', p: [['de schoenen', 'los zapatos'], ['de maat', 'la talla'], ['goedkoop', 'barato'], ['contant', 'en efectivo'], ['de jurk', 'el vestido']], tag: 'nl-prijs' }
    ],
    reading: {
      t: 'De markt in Den Haag', type: 'Una guía de la ciudad',
      p: [
        ['De Haagse Markt is een van de grootste markten van Europa. Hij is open op maandag, woensdag, vrijdag en zaterdag.', 'El Mercado de La Haya es uno de los mercados más grandes de Europa. Está abierto los lunes, miércoles, viernes y sábados.'],
        ['Er zijn meer dan vijfhonderd kraampjes. Je kunt er fruit, groente, vis, kaas en kleren kopen.', 'Hay más de quinientos puestos. Ahí puedes comprar fruta, verdura, pescado, queso y ropa.'],
        ['Alles is goedkoop. Een kilo mango’s kost maar twee euro! Veel kraampjes accepteren pinnen, maar neem ook wat contant geld mee.', 'Todo es barato. ¡Un kilo de mangos cuesta solo dos euros! Muchos puestos aceptan tarjeta, pero lleva también algo de efectivo.']
      ],
      gl: [['een van de grootste', 'uno de los más grandes'], ['het kraampje', 'el puesto'], ['meenemen', 'llevar']],
      q: [
        { t: 'mc', q: 'Wanneer is de markt open?', o: ['Op maandag, woensdag, vrijdag en zaterdag', 'Elke dag', 'Alleen op zondag'] },
        { t: 'mc', q: 'Hoeveel kraampjes zijn er?', o: ['Meer dan vijfhonderd', 'Vijftig', 'Vijfduizend'] },
        { t: 'mc', q: 'Hoeveel kost een kilo mango’s?', o: ['Twee euro', 'Tien euro', 'Vijf euro'] }
      ]
    },
    say: [['Hoeveel kost deze jas?', '¿Cuánto cuesta esta chaqueta?'], ['Mag ik hem passen?', '¿Me lo puedo probar?'], ['Ik neem het. Kan ik pinnen?', 'Me lo llevo. ¿Puedo pagar con tarjeta?']],
    task: { nl: 'Escribe un diálogo corto en una tienda: pregunta el precio de dos cosas, pide otra talla o color y decide si compras.', model: 'Hoeveel kost deze broek? — Hij kost 40 euro. — Heeft u hem ook in het zwart? — Ja. — Mooi, ik neem hem. Kan ik pinnen?' },
    scenario: { nl: 'Estás en una tienda de ropa en Róterdam y quieres comprar una chaqueta.', role: 'Je bent een vriendelijke verkoopster in een kledingwinkel in Rotterdam. Help de klant met maat, kleur en prijs. Noem een aanbieding. Spreek eenvoudig Nederlands.', goal: 'Pregunta el precio, pide otra talla o color y paga con tarjeta.' }
  });

  /* ───────────────────────── A1 · 7 ───────────────────────── */
  U({
    id: 'nl-a1-07', level: 'A1', icon: '🌦️', title: 'Het weer en wat je kunt', nl: 'El clima y lo que puedes hacer',
    goals: ['Hablar del clima', 'Usar kunnen, willen, moeten y mogen', 'Poner el infinitivo al final de la frase'],
    vocab: [
      ['het weer', 'el clima / el tiempo'], ['de zon', 'el sol'], ['de regen', 'la lluvia'], ['de wind', 'el viento'], ['de sneeuw', 'la nieve'], ['Het regent.', 'Está lloviendo.'],
      ['Het waait.', 'Hace viento.'], ['Het is koud.', 'Hace frío.'], ['Het is warm.', 'Hace calor.'], ['bewolkt', 'nublado'], ['zonnig', 'soleado'], ['de lente', 'la primavera'],
      ['de zomer', 'el verano'], ['de herfst', 'el otoño'], ['de winter', 'el invierno'], ['de paraplu', 'el paraguas'], ['zwemmen', 'nadar'], ['fietsen', 'andar en bicicleta'],
      ['schaatsen', 'patinar sobre hielo'], ['dansen', 'bailar'], ['zingen', 'cantar'], ['autorijden', 'manejar carro'], ['kunnen', 'poder / saber'], ['moeten', 'tener que'],
      ['mogen', 'tener permiso'], ['willen', 'querer'], ['de graad', 'el grado']
    ],
    grammar: [
      { t: 'El clima: het', es: 'Het weer',
        html: `<p>Para el clima el sujeto es <b>het</b>: <b>Het regent</b> (llueve), <b>het waait</b> (hace viento), <b>het sneeuwt</b> (nieva), <b>het is warm</b>.</p>
<p>Para preguntar: <b>Wat voor weer is het?</b> o <b>Hoe is het weer?</b> Los neerlandeses hablan del clima todo el tiempo, ¡es el tema favorito!</p>`,
        table: [['español', 'neerlandés'], ['Hace calor.', 'Het is warm.'], ['Hace frío.', 'Het is koud.'], ['Llueve.', 'Het regent.'], ['Hace viento.', 'Het waait.']],
        sum: 'Het regent. Het waait. Het is koud.',
        ex: [['Het regent vandaag, neem een paraplu mee.', 'Hoy llueve, lleva un paraguas.'], ['Hoe is het weer in Panama? — Het is warm.', '¿Cómo está el clima en Panamá? — Hace calor.']] },
      { t: 'Verbos modales: el infinitivo al final', es: 'Kunnen, willen, moeten, mogen',
        html: `<p><b>kunnen</b> (poder, saber), <b>willen</b> (querer), <b>moeten</b> (tener que) y <b>mogen</b> (tener permiso) van con un segundo verbo en infinitivo, y ese infinitivo va <b>al final</b> de la frase:</p>
<p><i>Ik <b>kan</b> goed <b>zwemmen</b>.</i> <i>Wij <b>moeten</b> morgen vroeg <b>werken</b>.</i></p>`,
        table: [['', 'kunnen', 'willen', 'moeten', 'mogen'], ['ik', 'kan', 'wil', 'moet', 'mag'], ['jij / u', 'kunt / kan', 'wilt / wil', 'moet', 'mag'], ['hij / zij', 'kan', 'wil', 'moet', 'mag'], ['wij / jullie / zij', 'kunnen', 'willen', 'moeten', 'mogen']],
        ex: [['Ik kan niet zingen.', 'No sé cantar.'], ['Mag ik hier zitten?', '¿Me puedo sentar aquí?'], ['Je moet een jas meenemen.', 'Tienes que llevar una chaqueta.']] },
      { t: 'Preguntas con modales', es: 'Kun je…? Mag ik…?',
        html: `<p>En una pregunta el modal va primero y el infinitivo sigue al final: <b>Kun je</b> fietsen? <b>Wil je</b> koffie <b>drinken</b>?</p>
<p>Para pedir un favor: <b>Kunt u</b> mij helpen? Para pedir permiso: <b>Mag ik</b> het raam opendoen?</p>`,
        table: [['neerlandés', 'español'], ['Kun je zwemmen?', '¿Sabes nadar?'], ['Kunt u mij helpen?', '¿Me puede ayudar?'], ['Mag ik binnenkomen?', '¿Puedo entrar?']],
        ex: [['Kun je langzaam praten, alsjeblieft?', '¿Puedes hablar despacio, por favor?'], ['Wil je mee naar het strand?', '¿Quieres venir a la playa?']] }
    ],
    dialogue: {
      t: 'Een koude winter', place: 'Groninga 🇳🇱',
      lines: [
        ['Sem', 'Hoe is het weer in Panama nu?', '¿Cómo está el clima en Panamá ahora?'],
        ['Iris', 'Het is warm en het regent elke middag.', 'Hace calor y llueve todas las tardes.'],
        ['Sem', 'Hier is het heel koud. Het is winter en het sneeuwt!', 'Aquí hace mucho frío. ¡Es invierno y está nevando!'],
        ['Iris', 'Wat leuk! Kun jij schaatsen?', '¡Qué bonito! ¿Tú sabes patinar?'],
        ['Sem', 'Ja, natuurlijk. Alle Nederlanders kunnen schaatsen. Ik kan het je leren.', 'Sí, claro. Todos los neerlandeses saben patinar. Te puedo enseñar.'],
        ['Iris', 'Graag! Maar ik heb geen winterjas.', '¡Me encantaría! Pero no tengo abrigo de invierno.'],
        ['Sem', 'Je moet een warme jas kopen. Of je mag de jas van mijn zus lenen.', 'Tienes que comprar un abrigo. O puedes usar el de mi hermana.'],
        ['Iris', 'Dank je! Tot vrijdag.', '¡Gracias! Hasta el viernes.']
      ],
      q: [
        { t: 'mc', q: 'Hoe is het weer in Groningen?', o: ['Koud, het sneeuwt', 'Warm, het regent', 'Zonnig'] },
        { t: 'mc', q: 'Wat kan Sem?', o: ['Schaatsen', 'Skiën', 'Niets'] },
        { t: 'mc', q: 'Wat heeft Iris niet?', o: ['Een winterjas', 'Een paraplu', 'Een fiets'] }
      ]
    },
    culture: { t: 'Lluvia, viento y la Elfstedentocht', html: `<p>En los Países Bajos llueve unos 130 días al año, y casi siempre hace viento. Por eso la gente dice: <i>«Er bestaat geen slecht weer, alleen slechte kleding»</i> (no existe el mal clima, solo la mala ropa).</p>
<p>⛸️ Cuando los canales se congelan, todo el mundo sale a patinar. La carrera más famosa, la <b>Elfstedentocht</b> (200 km por once ciudades), solo se hace cuando el hielo es muy grueso: ¡la última fue en 1997!</p>` },
    ex: [
      { t: 'cloze', s: 'Het ___ vandaag. (llueve)', a: ['regent'], o: ['regent', 'regen', 'is regen'], nl: 'Hoy llueve.', tag: 'nl-weer' },
      { t: 'cloze', s: '___ is koud.', a: ['Het'], o: ['Het', 'De', 'Er'], nl: 'Hace frío.', tag: 'nl-weer' },
      { t: 'cloze', s: 'Ik ___ goed zwemmen.', a: ['kan'], o: ['kan', 'kunnen', 'kun'], nl: 'Sé nadar bien.', tag: 'nl-modal' },
      { t: 'cloze', s: 'Wij moeten morgen vroeg ___.', a: ['werken'], o: ['werken', 'werk', 'werkt'], nl: 'Mañana tenemos que trabajar temprano.', x: 'Con un modal, el infinitivo va al final.', tag: 'nl-modal' },
      { t: 'cloze', s: '___ ik hier zitten?', a: ['Mag'], o: ['Mag', 'Moet', 'Mogen'], nl: '¿Me puedo sentar aquí?', tag: 'nl-modal' },
      { t: 'cloze', s: 'Hij ___ een nieuwe fiets kopen.', a: ['wil'], o: ['wil', 'willen', 'wilt'], nl: 'Él quiere comprar una bicicleta nueva.', tag: 'nl-modal' },
      { t: 'mc', q: '«Hace viento» es…', o: ['Het waait.', 'Het maakt wind.', 'Is wind.'], tag: 'nl-weer' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ik kan niet zingen.', 'Ik kan zingen niet.', 'Ik niet kan zingen.'], tag: 'nl-modal' },
      { t: 'mc', q: '«moeten» significa…', o: ['tener que', 'poder', 'querer'], tag: 'nl-modal' },
      { t: 'mc', q: '«el otoño» es…', o: ['de herfst', 'de lente', 'de zomer'], tag: 'nl-weer' },
      { t: 'tr', nl: 'Hace calor.', a: ['Het is warm.', 'Het is heet.'], tag: 'nl-weer' },
      { t: 'tr', nl: 'No sé nadar.', a: ['Ik kan niet zwemmen.'], tag: 'nl-modal' },
      { t: 'tr', nl: '¿Sabes andar en bicicleta?', a: ['Kun je fietsen?', 'Kan je fietsen?', 'Kun jij fietsen?', 'Kan jij fietsen?'], tag: 'nl-modal' },
      { t: 'tr', nl: 'Tengo que trabajar.', a: ['Ik moet werken.'], tag: 'nl-modal' },
      { t: 'order', s: 'Kunt u langzaam praten, alstublieft?', nl: '¿Puede hablar despacio, por favor?', tag: 'nl-modal' },
      { t: 'match', p: [['de zomer', 'el verano'], ['de winter', 'el invierno'], ['bewolkt', 'nublado'], ['de sneeuw', 'la nieve'], ['de paraplu', 'el paraguas']], tag: 'nl-weer' }
    ],
    reading: {
      t: 'Twee seizoenen in Panama', type: 'Una guía de viaje',
      p: [
        ['Panama heeft geen vier seizoenen, maar twee: het droge seizoen, van januari tot april, en het regenseizoen, van mei tot december.', 'Panamá no tiene cuatro estaciones, sino dos: la temporada seca, de enero a abril, y la lluviosa, de mayo a diciembre.'],
        ['In het droge seizoen is het zonnig en het waait veel. Je kunt elke dag naar het strand gaan.', 'En la temporada seca está soleado y hace mucho viento. Puedes ir a la playa todos los días.'],
        ['In het regenseizoen is het ’s ochtends warm en ’s middags regent het veel. Je moet altijd een paraplu meenemen!', 'En la temporada lluviosa hace calor en la mañana y en la tarde llueve mucho. ¡Siempre tienes que llevar paraguas!']
      ],
      gl: [['droog', 'seco'], ['het seizoen', 'la estación / la temporada'], ['meenemen', 'llevar']],
      q: [
        { t: 'mc', q: 'Hoeveel seizoenen heeft Panama?', o: ['Twee', 'Vier', 'Een'] },
        { t: 'mc', q: 'Wanneer is het droge seizoen?', o: ['Van januari tot april', 'Van mei tot december', 'Het hele jaar'] },
        { t: 'mc', q: 'Wat moet je in het regenseizoen meenemen?', o: ['Een paraplu', 'Een winterjas', 'Schaatsen'] }
      ]
    },
    say: [['Hoe is het weer vandaag?', '¿Cómo está el clima hoy?'], ['Het regent en het waait.', 'Llueve y hace viento.'], ['Ik kan zwemmen, maar ik kan niet dansen.', 'Sé nadar, pero no sé bailar.']],
    task: { nl: 'Describe el clima de tu ciudad y di tres cosas que sabes hacer, una que quieres hacer y una que tienes que hacer esta semana.', model: 'In Panama-Stad is het altijd warm. Van mei tot december regent het veel. Ik kan zwemmen, koken en autorijden. Ik wil leren schaatsen. Ik moet morgen werken.' },
    scenario: { nl: 'Hablas por videollamada con Sem, un amigo de Groninga, sobre el clima.', role: 'Je bent Sem, een vriendelijke jongen uit Groningen. Praat over het koude weer in Nederland en vraag naar Panama. Vraag wat de leerling kan: zwemmen, fietsen, schaatsen, dansen. Spreek eenvoudig Nederlands.', goal: 'Compara el clima y cuéntale qué sabes hacer.' }
  });

  /* ───────────────────────── A1 · 8 ───────────────────────── */
  U({
    id: 'nl-a1-08', level: 'A1', icon: '⚽', title: 'Vrije tijd', nl: 'Tiempo libre',
    goals: ['Hablar de tus pasatiempos', 'Usar graag, liever y het liefst', 'Decir con qué frecuencia haces algo'],
    vocab: [
      ['de vrije tijd', 'el tiempo libre'], ['de hobby', 'el pasatiempo'], ['voetballen', 'jugar fútbol'], ['sporten', 'hacer deporte'], ['gamen', 'jugar videojuegos'],
      ['naar de film gaan', 'ir al cine'], ['naar het strand gaan', 'ir a la playa'], ['winkelen', 'ir de compras'], ['lezen', 'leer'], ['muziek luisteren', 'escuchar música'],
      ['films kijken', 'ver películas'], ['hardlopen', 'salir a correr'], ['naar de sportschool gaan', 'ir al gimnasio'], ['foto’s maken', 'tomar fotos'], ['tekenen', 'dibujar'],
      ['gitaar spelen', 'tocar la guitarra'], ['afspreken met vrienden', 'quedar con amigos'], ['het weekend', 'el fin de semana'], ['een keer per week', 'una vez a la semana'],
      ['twee keer per week', 'dos veces a la semana'], ['Hoe vaak…?', '¿Con qué frecuencia…?'], ['saai', 'aburrido'], ['leuk', 'divertido / bonito'], ['liever', 'preferir (más)'], ['het liefst', 'lo que más (me gusta)']
    ],
    grammar: [
      { t: 'Graag, liever, het liefst', es: 'Graag – liever – het liefst',
        html: `<p><b>graag</b> = me gusta, <b>liever</b> = prefiero, <b>het liefst</b> = lo que más me gusta. Van <b>después</b> del verbo conjugado:</p>
<p><i>Ik lees <b>graag</b>.</i> <i>Ik kijk <b>liever</b> films.</i> <i>Ik ga <b>het liefst</b> naar het strand.</i></p>`,
        table: [['', 'ejemplo', 'español'], ['graag', 'Ik dans graag.', 'Me gusta bailar.'], ['liever', 'Ik zwem liever.', 'Prefiero nadar.'], ['het liefst', 'Ik slaap het liefst.', 'Lo que más me gusta es dormir.']],
        sum: 'Ik lees graag, ik zwem liever, ik dans het liefst.',
        ex: [['Ik voetbal graag, maar ik zwem liever.', 'Me gusta jugar fútbol, pero prefiero nadar.'], ['Wat doe je het liefst in het weekend?', '¿Qué es lo que más te gusta hacer el fin de semana?']] },
      { t: 'Leuk vinden: opinar', es: 'Ik vind het leuk',
        html: `<p>Para decir que algo te gusta o no: <b>Ik vind</b> + algo + <b>leuk / saai / mooi</b>. <i>Ik vind voetbal leuk</i> (el fútbol me gusta / me parece divertido).</p>
<p>Negativa: <i>Ik vind het <b>niet</b> leuk.</i> Pregunta: <i><b>Vind je</b> lezen leuk?</i></p>`,
        table: [['neerlandés', 'español'], ['Ik vind dansen leuk.', 'Me gusta bailar.'], ['Ik vind gamen saai.', 'Los videojuegos me aburren.'], ['Vind je het leuk?', '¿Te gusta?']],
        ex: [['Ik vind hardlopen niet leuk.', 'No me gusta correr.'], ['Vind je deze film mooi?', '¿Te parece bonita esta película?']] },
      { t: 'Hoe vaak? Frecuencia', es: 'Hoe vaak?',
        html: `<p><b>Hoe vaak</b> ga je naar de sportschool? Respuestas: <b>elke dag</b>, <b>een keer per week</b>, <b>twee keer per maand</b>, <b>soms</b>, <b>nooit</b>.</p>
<p>Recuerda la inversión si empiezas con la frecuencia: <i><b>Elke zaterdag voetbal ik.</b></i></p>`,
        table: [['neerlandés', 'español'], ['een keer per week', 'una vez a la semana'], ['twee keer per maand', 'dos veces al mes'], ['elk weekend', 'todos los fines de semana']],
        ex: [['Hoe vaak ga je naar de film? — Een keer per maand.', '¿Con qué frecuencia vas al cine? — Una vez al mes.'], ['Elk weekend spreek ik af met vrienden.', 'Todos los fines de semana quedo con amigos.']] }
    ],
    dialogue: {
      t: 'Nieuwe huisgenoten', place: 'Leiden 🇳🇱',
      lines: [
        ['Thijs', 'Wat doe jij graag in je vrije tijd?', '¿Qué te gusta hacer en tu tiempo libre?'],
        ['Andrés', 'Ik voetbal graag. En ik luister graag muziek.', 'Me gusta jugar fútbol. Y me gusta escuchar música.'],
        ['Thijs', 'Leuk! Hoe vaak voetbal je?', '¡Chévere! ¿Con qué frecuencia juegas fútbol?'],
        ['Andrés', 'Twee keer per week, op dinsdag en zaterdag. En jij?', 'Dos veces a la semana, los martes y los sábados. ¿Y tú?'],
        ['Thijs', 'Ik vind sport niet zo leuk. Ik speel liever gitaar.', 'El deporte no me gusta tanto. Prefiero tocar guitarra.'],
        ['Andrés', 'Echt? Kun je salsa spelen?', '¿De verdad? ¿Sabes tocar salsa?'],
        ['Thijs', 'Nog niet! Misschien kun jij me eerst leren dansen.', '¡Todavía no! Quizás primero me puedes enseñar a bailar.'],
        ['Andrés', 'Afgesproken! Maar ik sta niet graag vroeg op, dus de les begint om twaalf uur.', '¡Trato hecho! Pero no me gusta madrugar, así que la clase empieza a las doce.']
      ],
      q: [
        { t: 'mc', q: 'Wat doet Andrés graag?', o: ['Voetballen', 'Gitaar spelen', 'Vroeg opstaan'] },
        { t: 'mc', q: 'Hoe vaak voetbalt Andrés?', o: ['Twee keer per week', 'Elke dag', 'Een keer per maand'] },
        { t: 'mc', q: 'Wat doet Thijs liever?', o: ['Gitaar spelen', 'Sporten', 'Dansen'] }
      ]
    },
    culture: { t: 'Clubs y gezelligheid', html: `<p>Muchos neerlandeses son miembros de un club (<b>vereniging</b>): de fútbol, de hockey, de música… Después del deporte se toma algo juntos en el bar del club.</p>
<p>☕ La palabra más típica es <b>gezellig</b>: un ambiente agradable, acogedor y con buena compañía. Una noche con amigos, velas y café es <i>heel gezellig</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Ik lees ___. (me gusta)', a: ['graag'], o: ['graag', 'liever', 'leuk'], nl: 'Me gusta leer.', tag: 'nl-graag' },
      { t: 'cloze', s: 'Ik zwem ___. (prefiero)', a: ['liever'], o: ['liever', 'graag', 'liefst'], nl: 'Prefiero nadar.', tag: 'nl-graag' },
      { t: 'cloze', s: 'Ik ___ voetbal leuk.', a: ['vind'], o: ['vind', 'vindt', 'ben'], nl: 'Me gusta el fútbol.', tag: 'nl-hobby' },
      { t: 'cloze', s: 'Hoe ___ ga je naar de sportschool?', a: ['vaak'], o: ['vaak', 'veel', 'laat'], nl: '¿Con qué frecuencia vas al gimnasio?', tag: 'nl-q' },
      { t: 'cloze', s: 'Elk weekend ___ ik met vrienden af.', a: ['spreek'], o: ['spreek', 'spreekt', 'spreken'], nl: 'Todos los fines de semana quedo con amigos.', tag: 'nl-inv' },
      { t: 'cloze', s: 'Ik vind gamen niet ___.', a: ['leuk'], o: ['leuk', 'graag', 'liever'], nl: 'No me gustan los videojuegos.', tag: 'nl-hobby' },
      { t: 'mc', q: '«una vez a la semana» es…', o: ['een keer per week', 'een tijd per week', 'een week keer'], tag: 'nl-hobby' },
      { t: 'mc', q: '«gezellig» significa…', o: ['agradable y acogedor', 'aburrido', 'caro'], tag: 'nl-hobby' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ik dans graag.', 'Ik graag dans.', 'Graag ik dans.'], tag: 'nl-graag' },
      { t: 'mc', q: '«tocar la guitarra» es…', o: ['gitaar spelen', 'gitaar doen', 'gitaar raken'], tag: 'nl-hobby' },
      { t: 'tr', nl: 'Me gusta leer.', a: ['Ik lees graag.', 'Ik vind lezen leuk.'], tag: 'nl-graag' },
      { t: 'tr', nl: 'Prefiero ver películas.', a: ['Ik kijk liever films.', 'Ik kijk liever een film.'], tag: 'nl-graag' },
      { t: 'tr', nl: 'Juego fútbol dos veces a la semana.', a: ['Ik voetbal twee keer per week.', 'Twee keer per week voetbal ik.'], tag: 'nl-hobby' },
      { t: 'order', s: 'Wat doe je het liefst in het weekend?', nl: '¿Qué es lo que más te gusta hacer el fin de semana?', tag: 'nl-graag' },
      { t: 'match', p: [['lezen', 'leer'], ['tekenen', 'dibujar'], ['leuk', 'divertido'], ['saai', 'aburrido'], ['het weekend', 'el fin de semana']], tag: 'nl-hobby' }
    ],
    reading: {
      t: 'Mijn weekend', type: 'Una publicación en redes',
      p: [
        ['Ik vind het weekend heerlijk! Op zaterdagochtend ga ik met mijn zus hardlopen in het park. We lopen een uur.', '¡Me encantan los fines de semana! Los sábados en la mañana salgo a correr con mi hermana en el parque. Corremos una hora.'],
        ['’s Middags spreek ik af met vrienden. Meestal gaan we naar de film of we gamen bij mij thuis.', 'En la tarde quedo con amigos. Normalmente vamos al cine o jugamos videojuegos en mi casa.'],
        ['Op zondag doe ik niet veel. Ik lees, ik luister muziek en ik bel mijn oma. Zondagavond vind ik niet leuk, want dan komt maandag weer!', 'Los domingos no hago mucho. Leo, escucho música y llamo a mi abuela. ¡Los domingos en la noche no me gustan, porque ya viene el lunes!']
      ],
      gl: [['heerlijk', 'delicioso / maravilloso'], ['een uur', 'una hora'], ['bellen', 'llamar por teléfono']],
      q: [
        { t: 'mc', q: 'Met wie gaat de schrijver hardlopen?', o: ['Met de zus', 'Met vrienden', 'Alleen'] },
        { t: 'mc', q: 'Wat doen de vrienden meestal?', o: ['Naar de film gaan of gamen', 'Voetballen', 'Winkelen'] },
        { t: 'mc', q: 'Waarom vindt de schrijver zondagavond niet leuk?', o: ['Omdat dan maandag komt', 'Omdat het saai is', 'Omdat het regent'] }
      ]
    },
    say: [['In mijn vrije tijd lees ik graag.', 'En mi tiempo libre me gusta leer.'], ['Ik voetbal twee keer per week.', 'Juego fútbol dos veces a la semana.'], ['Hoe vaak ga je naar de sportschool?', '¿Con qué frecuencia vas al gimnasio?']],
    task: { nl: 'Escribe sobre tu tiempo libre: qué te gusta, qué prefieres, qué es lo que más te gusta y con qué frecuencia lo haces.', model: 'Ik dans graag salsa. Ik ga liever naar het strand dan naar de sportschool. Het liefst slaap ik lang. Elk weekend spreek ik af met vrienden.' },
    scenario: { nl: 'Conoces a tu nuevo compañero de casa en Leiden y hablan de pasatiempos.', role: 'Je bent Thijs, een relaxte student in Leiden en de nieuwe huisgenoot van de leerling. Vraag naar hobby’s, sport en hoe vaak hij of zij die doet. Jij houdt van muziek en gamen. Spreek eenvoudig Nederlands.', goal: 'Cuéntale tus pasatiempos y busca algo que puedan hacer juntos.' }
  });

  /* ───────────────────────── A1 · 9 ───────────────────────── */
  U({
    id: 'nl-a1-09', level: 'A1', icon: '🏠', title: 'Mijn huis', nl: 'En casa',
    goals: ['Describir tu casa', 'Usar staan, liggen y hangen para decir dónde está algo', 'Usar me, je, hem, haar, ons, ze'],
    vocab: [
      ['het huis', 'la casa'], ['het appartement', 'el apartamento'], ['de kamer', 'el cuarto'], ['de slaapkamer', 'el dormitorio / la recámara'], ['de badkamer', 'el baño'],
      ['de keuken', 'la cocina'], ['de woonkamer', 'la sala'], ['de tuin', 'el jardín / el patio'], ['het balkon', 'el balcón'], ['de trap', 'la escalera'], ['het bed', 'la cama'],
      ['de bank', 'el sofá'], ['de tafel', 'la mesa'], ['de stoel', 'la silla'], ['het raam', 'la ventana'], ['de deur', 'la puerta'], ['de koelkast', 'la refrigeradora'],
      ['de kast', 'el armario / el clóset'], ['de lamp', 'la lámpara'], ['boven', 'arriba'], ['beneden', 'abajo'], ['schoonmaken', 'limpiar'], ['afwassen', 'lavar los platos'],
      ['de huur', 'el alquiler'], ['huren', 'alquilar']
    ],
    grammar: [
      { t: 'Staan, liggen, hangen', es: 'Waar is het?',
        html: `<p>En neerlandés casi nunca se dice solo «está». Se usa la posición: <b>staan</b> (estar de pie / vertical), <b>liggen</b> (estar acostado / horizontal), <b>hangen</b> (estar colgado).</p>
<p><i>De lamp <b>staat</b> op de tafel. Het boek <b>ligt</b> op het bed. De foto <b>hangt</b> aan de muur.</i></p>`,
        table: [['verbo', 'para…', 'ejemplo'], ['staan', 'cosas verticales', 'De stoel staat in de keuken.'], ['liggen', 'cosas planas o acostadas', 'Mijn telefoon ligt op de bank.'], ['hangen', 'cosas colgadas', 'De klok hangt aan de muur.']],
        sum: 'De lamp staat, het boek ligt, de foto hangt.',
        ex: [['Waar ligt mijn telefoon? — Hij ligt op de tafel.', '¿Dónde está mi celular? — Está en la mesa.'], ['De fietsen staan in de tuin.', 'Las bicicletas están en el patio.']] },
      { t: 'Pronombres objeto', es: 'Mij, je, hem, haar, ons, ze',
        html: `<p>Cuando la persona recibe la acción: <b>mij / me</b>, <b>jou / je</b>, <b>u</b>, <b>hem</b>, <b>haar</b>, <b>ons</b>, <b>jullie</b>, <b>hen / ze</b>. Van <b>después</b> del verbo: <i>Ik bel <b>haar</b></i> (la llamo).</p>
<p>Con cosas: una palabra <b>de</b> se convierte en <b>hem</b>, una palabra <b>het</b> en <b>het</b>: <i>De jas? Ik koop <b>hem</b>.</i></p>`,
        table: [['sujeto', 'objeto', 'ejemplo'], ['ik', 'mij / me', 'Help me!'], ['hij', 'hem', 'Ik zie hem.'], ['zij', 'haar', 'Ik bel haar.'], ['wij', 'ons', 'Bezoek ons!'], ['zij (plural)', 'ze / hen', 'Ik ken ze.']],
        ex: [['Waar zijn mijn sleutels? Ik kan ze niet vinden.', '¿Dónde están mis llaves? No las encuentro.'], ['Mijn oma woont bij ons.', 'Mi abuela vive con nosotros.']] },
      { t: 'Op, in, onder, naast, achter', es: 'Voorzetsels in huis',
        html: `<p><b>op</b> = encima de · <b>in</b> = dentro de · <b>onder</b> = debajo de · <b>naast</b> = al lado de · <b>achter</b> = detrás de · <b>voor</b> = delante de.</p>
<p>Y <b>boven</b> / <b>beneden</b>: arriba / abajo. En las casas neerlandesas los cuartos casi siempre están <i>boven</i>.</p>`,
        table: [['neerlandés', 'español'], ['op de tafel', 'en la mesa'], ['onder het bed', 'debajo de la cama'], ['achter de deur', 'detrás de la puerta'], ['in de kast', 'en el armario']],
        ex: [['De kat slaapt onder het bed.', 'El gato duerme debajo de la cama.'], ['De slaapkamers zijn boven.', 'Los cuartos están arriba.']] }
    ],
    dialogue: {
      t: 'Aan de telefoon', place: 'Utrecht 🇳🇱',
      lines: [
        ['Mama', 'Hoi lieverd! Wat ben je aan het doen?', '¡Hola, mi amor! ¿Qué estás haciendo?'],
        ['Lucía', 'Hoi mam. Ik maak mijn nieuwe appartement schoon.', 'Hola, mami. Estoy limpiando mi apartamento nuevo.'],
        ['Mama', 'Hoe is het? Is het groot?', '¿Qué tal es? ¿Es grande?'],
        ['Lucía', 'Het is klein, maar mooi. Er is een slaapkamer, een woonkamer en een kleine keuken.', 'Es pequeño, pero bonito. Hay un dormitorio, una sala y una cocina chiquita.'],
        ['Mama', 'Is er een balkon?', '¿Hay balcón?'],
        ['Lucía', 'Ja! Ik kan de gracht zien vanaf het balkon.', '¡Sí! Desde el balcón puedo ver el canal.'],
        ['Mama', 'Wat mooi! Helpt je broer je?', '¡Qué bonito! ¿Tu hermano te está ayudando?'],
        ['Lucía', 'Nee, hij ligt op mijn bank te slapen! Bel hem straks maar.', '¡No, está dormido en mi sofá! Llámalo más tarde.']
      ],
      q: [
        { t: 'mc', q: 'Wat doet Lucía?', o: ['Ze maakt haar appartement schoon', 'Ze slaapt', 'Ze kookt'] },
        { t: 'mc', q: 'Wat kan Lucía zien vanaf het balkon?', o: ['De gracht', 'De zee', 'Het station'] },
        { t: 'mc', q: 'Waar ligt de broer?', o: ['Op de bank', 'In bed', 'Op het balkon'] }
      ]
    },
    culture: { t: 'Escaleras empinadas y ventanas sin cortinas', html: `<p>Las casas neerlandesas antiguas son altas y estrechas, con <b>escaleras muy empinadas</b>. Por eso los muebles grandes se suben con un gancho por la ventana.</p>
<p>🪟 Muchas casas no tienen cortinas en la sala: desde la calle puedes ver a la gente comiendo o viendo televisión. Es normal: ¡no tienen nada que esconder!</p>` },
    ex: [
      { t: 'cloze', s: 'De lamp ___ op de tafel.', a: ['staat'], o: ['staat', 'ligt', 'hangt'], nl: 'La lámpara está en la mesa.', tag: 'nl-pos' },
      { t: 'cloze', s: 'Het boek ___ op het bed.', a: ['ligt'], o: ['ligt', 'staat', 'hangt'], nl: 'El libro está en la cama.', tag: 'nl-pos' },
      { t: 'cloze', s: 'De foto ___ aan de muur.', a: ['hangt'], o: ['hangt', 'staat', 'ligt'], nl: 'La foto está colgada en la pared.', tag: 'nl-pos' },
      { t: 'cloze', s: 'Mijn oma woont bij ___.', a: ['ons'], o: ['ons', 'wij', 'onze'], nl: 'Mi abuela vive con nosotros.', tag: 'nl-obj' },
      { t: 'cloze', s: 'Ik bel ___ elke dag. (a ella)', a: ['haar'], o: ['haar', 'zij', 'hem'], nl: 'La llamo todos los días.', tag: 'nl-obj' },
      { t: 'cloze', s: 'De kat slaapt ___ het bed.', a: ['onder'], o: ['onder', 'boven', 'tussen'], nl: 'El gato duerme debajo de la cama.', tag: 'nl-prep' },
      { t: 'cloze', s: 'Er ___ drie slaapkamers.', a: ['zijn'], o: ['zijn', 'is', 'hebben'], nl: 'Hay tres dormitorios.', tag: 'nl-er' },
      { t: 'mc', q: '«la sala» es…', o: ['de woonkamer', 'de slaapkamer', 'de badkamer'], tag: 'nl-huis' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Help me!', 'Me help!', 'Help ik!'], tag: 'nl-obj' },
      { t: 'mc', q: 'Tu celular está sobre la mesa. ¿Qué verbo usas?', o: ['liggen', 'staan', 'hangen'], x: 'Un celular está plano: ligt.', tag: 'nl-pos' },
      { t: 'tr', nl: 'Estoy limpiando la cocina.', a: ['Ik maak de keuken schoon.', 'Ik ben de keuken aan het schoonmaken.'], tag: 'nl-huis' },
      { t: 'tr', nl: 'Mi apartamento tiene un balcón.', a: ['Mijn appartement heeft een balkon.', 'Er is een balkon in mijn appartement.'], tag: 'nl-huis' },
      { t: 'tr', nl: 'Los dormitorios están arriba.', a: ['De slaapkamers zijn boven.'], tag: 'nl-huis' },
      { t: 'order', s: 'Mijn telefoon ligt op de bank.', nl: 'Mi celular está en el sofá.', tag: 'nl-pos' },
      { t: 'match', p: [['de keuken', 'la cocina'], ['het raam', 'la ventana'], ['de stoel', 'la silla'], ['de koelkast', 'la refrigeradora'], ['de trap', 'la escalera']], tag: 'nl-huis' }
    ],
    reading: {
      t: 'Appartement te huur', type: 'Un anuncio',
      p: [
        ['TE HUUR: mooi appartement in het centrum van Utrecht. Er zijn twee slaapkamers, een badkamer en een grote woonkamer.', 'SE ALQUILA: lindo apartamento en el centro de Utrecht. Hay dos dormitorios, un baño y una sala grande.'],
        ['De keuken is nieuw, met een koelkast en een vaatwasser. Er is een klein balkon aan de achterkant.', 'La cocina es nueva, con refrigeradora y lavaplatos. Hay un balcón pequeño en la parte de atrás.'],
        ['De huur is 1.400 euro per maand. Geen huisdieren. Bel Anouk: 06-12345678.', 'El alquiler es de 1400 euros al mes. No se aceptan mascotas. Llama a Anouk: 06-12345678.']
      ],
      gl: [['te huur', 'se alquila'], ['de vaatwasser', 'el lavaplatos'], ['het huisdier', 'la mascota'], ['per maand', 'al mes']],
      q: [
        { t: 'mc', q: 'Hoeveel slaapkamers zijn er?', o: ['Twee', 'Een', 'Drie'] },
        { t: 'mc', q: 'Hoeveel is de huur?', o: ['1.400 euro per maand', '400 euro per maand', '1.400 euro per jaar'] },
        { t: 'mc', q: 'Mag je een hond hebben?', o: ['Nee, geen huisdieren', 'Ja, een kleine hond', 'Alleen een kat'] }
      ]
    },
    say: [['Er zijn twee slaapkamers boven.', 'Hay dos dormitorios arriba.'], ['Mijn telefoon ligt op de tafel.', 'Mi celular está en la mesa.'], ['Bel me straks, alsjeblieft.', 'Llámame más tarde, por favor.']],
    task: { nl: 'Describe tu casa o apartamento en 4 frases y di dónde están tres cosas (usa staan, liggen y hangen).', model: 'Ik woon in een klein appartement. Er zijn twee slaapkamers. De tv staat in de woonkamer, mijn boeken liggen op de tafel en een foto van mijn familie hangt aan de muur.' },
    scenario: { nl: 'Buscas un apartamento en Utrecht y llamas por un anuncio.', role: 'Je bent Anouk, je verhuurt een appartement in Utrecht (2 slaapkamers, 1.400 euro). De leerling belt over de advertentie. Beantwoord vragen en stel er zelf ook een paar. Spreek eenvoudig Nederlands.', goal: 'Pregunta cuántos cuartos tiene, el precio y si tiene balcón.' }
  });

  /* ───────────────────────── A1 · 10 ───────────────────────── */
  U({
    id: 'nl-a1-10', level: 'A1', icon: '📅', title: 'Plannen maken', nl: 'Planes e invitaciones',
    goals: ['Hablar de planes con gaan + infinitivo', 'Decir días, meses y fechas', 'Invitar, aceptar y rechazar'],
    vocab: [
      ['maandag', 'lunes'], ['dinsdag', 'martes'], ['woensdag', 'miércoles'], ['donderdag', 'jueves'], ['vrijdag', 'viernes'], ['zaterdag', 'sábado'], ['zondag', 'domingo'],
      ['januari', 'enero'], ['maart', 'marzo'], ['juli', 'julio'], ['december', 'diciembre'], ['morgen', 'mañana (el día)'], ['vanavond', 'esta noche'],
      ['volgende week', 'la próxima semana'], ['de verjaardag', 'el cumpleaños'], ['het feest', 'la fiesta'], ['uitnodigen', 'invitar'], ['Heb je zin om…?', '¿Tienes ganas de…?'],
      ['Leuk, ik kom!', '¡Qué bien, voy!'], ['Sorry, ik kan niet.', 'Lo siento, no puedo.'], ['Een andere keer.', 'Otro día.'], ['Zullen we…?', '¿Y si…? / ¿Vamos a…?'],
      ['Hoe laat?', '¿A qué hora?'], ['de vakantie', 'las vacaciones'], ['bezoeken', 'visitar'], ['druk', 'ocupado']
    ],
    grammar: [
      { t: 'Gaan + infinitivo: planes', es: 'Ik ga… + infinitief',
        html: `<p>Igual que en español <i>voy a…</i>: <b>gaan</b> + infinitivo al final de la frase. <i>Ik <b>ga</b> morgen mijn oma <b>bezoeken</b>.</i></p>
<p>Ojo con la inversión: <i>Zaterdag <b>ga ik</b> naar het strand.</i> Y la pregunta: <i><b>Wat ga je</b> vanavond <b>doen</b>?</i></p>`,
        table: [['', 'gaan', 'ejemplo'], ['ik', 'ga', 'Ik ga reizen.'], ['jij / u', 'gaat', 'Ga jij ook?'], ['hij / zij', 'gaat', 'Zij gaat studeren.'], ['wij / jullie / zij', 'gaan', 'We gaan een feest geven.']],
        sum: 'Ik ga volgende week mijn familie bezoeken.',
        ex: [['We gaan zaterdag een feest geven.', 'El sábado vamos a hacer una fiesta.'], ['Wat ga je vanavond doen?', '¿Qué vas a hacer esta noche?']] },
      { t: 'Días, meses y fechas', es: 'Dagen, maanden en data',
        html: `<p>En neerlandés los días y los meses van con <b>minúscula</b>: maandag, juli. Con días se usa <b>op</b> (op vrijdag), con meses <b>in</b> (in juli) y con horas <b>om</b> (om acht uur).</p>
<p>La fecha se escribe como en Panamá: <b>día-mes-año</b>. 4 juli = el 4 de julio.</p>`,
        table: [['preposición', 'ejemplo'], ['op + día', 'op maandag, op 4 juli'], ['in + mes / año', 'in december, in 2027'], ['om + hora', 'om zeven uur']],
        ex: [['Mijn verjaardag is in maart.', 'Mi cumpleaños es en marzo.'], ['Het feest is op vrijdag om acht uur.', 'La fiesta es el viernes a las ocho.']] },
      { t: 'Invitar y contestar', es: 'Uitnodigen',
        html: `<p>Para invitar: <b>Heb je zin om</b> naar de film te gaan? / <b>Zullen we</b> naar het strand gaan? / <b>Kom je</b> op mijn feest?</p>
<p>Para aceptar: <b>Leuk!</b> / <b>Ja, gezellig!</b> Para rechazar: <b>Sorry, ik kan niet. Ik heb het druk.</b> / <b>Een andere keer?</b></p>`,
        table: [['invitar', 'aceptar', 'rechazar'], ['Heb je zin om…?', 'Ja, leuk!', 'Sorry, ik kan niet.'], ['Zullen we…?', 'Goed idee!', 'Een andere keer?']],
        ex: [['Zullen we zaterdag samen eten? — Ja, gezellig!', '¿Y si comemos juntos el sábado? — ¡Sí, qué bien!'], ['Sorry, vanavond kan ik niet. Ik heb het druk.', 'Lo siento, esta noche no puedo. Estoy ocupado.']] }
    ],
    dialogue: {
      t: 'Een verjaardag', place: 'Ámsterdam 🇳🇱',
      lines: [
        ['Sara', 'Hoi Joost! Wat ga je zaterdag doen?', '¡Hola, Joost! ¿Qué vas a hacer el sábado?'],
        ['Joost', 'Niets bijzonders. Hoezo?', 'Nada especial. ¿Por qué?'],
        ['Sara', 'Ik ben jarig! Ik ga een feest geven. Heb je zin om te komen?', '¡Es mi cumpleaños! Voy a hacer una fiesta. ¿Tienes ganas de venir?'],
        ['Joost', 'Leuk! Hoe laat?', '¡Qué bien! ¿A qué hora?'],
        ['Sara', 'Om acht uur. Mijn neven gaan sancocho koken.', 'A las ocho. Mis primos van a cocinar sancocho.'],
        ['Joost', 'Gezellig! Mag mijn vriendin ook komen?', '¡Qué buena onda! ¿Puede venir también mi novia?'],
        ['Sara', 'Natuurlijk! Neemt ze haar gitaar mee?', '¡Claro! ¿Va a traer su guitarra?'],
        ['Joost', 'Misschien. Tot zaterdag!', 'Quizás. ¡Hasta el sábado!']
      ],
      q: [
        { t: 'mc', q: 'Wanneer is het feest?', o: ['Op zaterdag om acht uur', 'Op vrijdag om zeven uur', 'Op zondag om twaalf uur'] },
        { t: 'mc', q: 'Wie gaan er koken?', o: ['De neven van Sara', 'Joost', 'De moeder van Sara'] },
        { t: 'mc', q: 'Wat vraagt Joost?', o: ['Of zijn vriendin mag komen', 'Of hij mag koken', 'Waar het huis is'] }
      ]
    },
    culture: { t: 'El cumpleaños en círculo y Koningsdag', html: `<p>En un cumpleaños neerlandés típico los invitados se sientan <b>en círculo</b> en la sala, toman café con pastel y felicitan a todos: <i>«Gefeliciteerd!»</i></p>
<p>👑 El 27 de abril es <b>Koningsdag</b>, el Día del Rey. Todo el país se viste de naranja, hay mercados en la calle y fiestas en los canales.</p>` },
    ex: [
      { t: 'cloze', s: 'Ik ga morgen mijn oma ___.', a: ['bezoeken'], o: ['bezoeken', 'bezoek', 'bezoekt'], nl: 'Mañana voy a visitar a mi abuela.', tag: 'nl-gaan' },
      { t: 'cloze', s: 'Wij ___ een feest geven.', a: ['gaan'], o: ['gaan', 'gaat', 'ga'], nl: 'Vamos a hacer una fiesta.', tag: 'nl-gaan' },
      { t: 'cloze', s: 'Wat ga je vanavond ___?', a: ['doen'], o: ['doen', 'doet', 'doe'], nl: '¿Qué vas a hacer esta noche?', tag: 'nl-gaan' },
      { t: 'cloze', s: 'Mijn verjaardag is ___ maart.', a: ['in'], o: ['in', 'op', 'om'], nl: 'Mi cumpleaños es en marzo.', tag: 'nl-datum' },
      { t: 'cloze', s: 'Het feest is ___ vrijdag.', a: ['op'], o: ['op', 'in', 'om'], nl: 'La fiesta es el viernes.', tag: 'nl-datum' },
      { t: 'cloze', s: 'Zaterdag ___ ik naar het strand.', a: ['ga'], o: ['ga', 'gaat', 'gaan'], nl: 'El sábado voy a la playa.', tag: 'nl-inv' },
      { t: 'mc', q: 'Te invitan y quieres ir. ¿Qué dices?', o: ['Leuk, ik kom!', 'Ik heb het druk.', 'Een andere keer.'], tag: 'nl-gaan' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Tot maandag!', 'Tot Maandag!', 'Tot in maandag!'], x: 'Los días van con minúscula.', tag: 'nl-datum' },
      { t: 'mc', q: '«Zullen we…?» sirve para…', o: ['proponer un plan', 'pedir la cuenta', 'decir la hora'], tag: 'nl-gaan' },
      { t: 'mc', q: '«Ik ben jarig» significa…', o: ['Es mi cumpleaños.', 'Soy joven.', 'Estoy cansado.'], tag: 'nl-datum' },
      { t: 'tr', nl: 'Voy a viajar la próxima semana.', a: ['Ik ga volgende week reizen.', 'Volgende week ga ik reizen.'], tag: 'nl-gaan' },
      { t: 'tr', nl: '¿Tienes ganas de ir al cine?', a: ['Heb je zin om naar de film te gaan?', 'Heb jij zin om naar de film te gaan?', 'Heb je zin om naar de bioscoop te gaan?'], tag: 'nl-gaan' },
      { t: 'tr', nl: 'Mi cumpleaños es en julio.', a: ['Mijn verjaardag is in juli.'], tag: 'nl-datum' },
      { t: 'order', s: 'Zaterdag gaan we een feest geven.', nl: 'El sábado vamos a hacer una fiesta.', tag: 'nl-gaan' },
      { t: 'match', p: [['maandag', 'lunes'], ['donderdag', 'jueves'], ['morgen', 'mañana'], ['vanavond', 'esta noche'], ['druk', 'ocupado']], tag: 'nl-datum' }
    ],
    reading: {
      t: 'Zomerplannen', type: 'Un correo',
      p: [
        ['Hoi Femke! Goed nieuws: ik ga je in juli bezoeken in Amsterdam! Mijn vlucht is op 10 juli.', '¡Hola, Femke! Buenas noticias: ¡voy a visitarte en julio en Ámsterdam! Mi vuelo es el 10 de julio.'],
        ['Ik blijf twee weken. Ik wil het Rijksmuseum zien en een fietstocht maken. Gaan we ook naar het strand in Zandvoort?', 'Me quedo dos semanas. Quiero ver el Rijksmuseum y hacer un paseo en bicicleta. ¿También vamos a la playa en Zandvoort?'],
        ['Mijn broer komt ook, maar maar één week. Is dat goed? Schrijf snel terug! Liefs, Daniela.', 'Mi hermano también viene, pero solo una semana. ¿Está bien? ¡Contéstame pronto! Un abrazo, Daniela.']
      ],
      gl: [['goed nieuws', 'buenas noticias'], ['de vlucht', 'el vuelo'], ['blijven', 'quedarse'], ['de fietstocht', 'el paseo en bicicleta']],
      q: [
        { t: 'mc', q: 'Wanneer is de vlucht van Daniela?', o: ['Op 10 juli', 'Op 10 juni', 'Op 1 juli'] },
        { t: 'mc', q: 'Hoe lang blijft ze?', o: ['Twee weken', 'Een week', 'Een maand'] },
        { t: 'mc', q: 'Wie komt er ook?', o: ['Haar broer', 'Haar moeder', 'De broer van Femke'] }
      ]
    },
    say: [['Wat ga je zaterdag doen?', '¿Qué vas a hacer el sábado?'], ['Heb je zin om naar mijn feest te komen?', '¿Tienes ganas de venir a mi fiesta?'], ['Leuk, ik kom!', '¡Qué bien, voy!']],
    task: { nl: 'Escribe una invitación corta a una fiesta (día, hora, lugar) y cuenta tres cosas que vas a hacer la próxima semana.', model: 'Kom je op mijn verjaardag? Het feest is op vrijdag 5 mei om acht uur, bij mij thuis. Volgende week ga ik werken, mijn moeder bezoeken en naar het strand gaan.' },
    scenario: { nl: 'Invitas a una amiga de Ámsterdam a hacer algo el fin de semana.', role: 'Je bent Femke, een drukke vriendin uit Amsterdam. De leerling nodigt je uit voor het weekend. Vraag wanneer, waar en hoe laat. Zeg nee tegen het eerste idee en ja tegen het tweede. Spreek eenvoudig Nederlands.', goal: 'Invita a Femke, pon día y hora, y busca un plan que le guste.' }
  });
})(window.SPT);
