/* Inglés A1, unidades 6–10 (inglés estadounidense, explicaciones en español latinoamericano). Mismo formato que a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-this': 'this, that, these, those', 'en-price': 'precios y números grandes', 'en-can': 'can / can’t',
    'en-weather': 'el clima', 'en-ing': 'like / love + -ing', 'en-pc': 'presente continuo (I’m doing)',
    'en-home': 'la casa', 'en-goingto': 'going to (planes)', 'en-dates': 'días, meses y fechas', 'en-obj': 'pronombres objeto (me, him, her…)'
  });

  /* ───────────────────────── A1 · 6 ───────────────────────── */
  U({
    id: 'en-a1-06', level: 'A1', icon: '🛍️', title: 'Shopping', nl: 'De compras',
    goals: ['Preguntar precios', 'Usar this, that, these, those', 'Hablar de ropa, colores y tallas'],
    vocab: [
      ['shirt', 'camisa'], ['T-shirt', 'camiseta / suéter (Panamá)'], ['pants', 'pantalón'], ['jeans', 'jeans'], ['dress', 'vestido'], ['skirt', 'falda'],
      ['shoes', 'zapatos'], ['sneakers', 'zapatillas / tenis'], ['jacket', 'chaqueta'], ['hat', 'sombrero / gorra'], ['bag', 'bolsa / cartera'],
      ['red', 'rojo'], ['blue', 'azul'], ['green', 'verde'], ['yellow', 'amarillo'], ['black', 'negro'], ['white', 'blanco'], ['size', 'talla'],
      ['How much is it?', '¿Cuánto cuesta?'], ['expensive', 'caro'], ['cheap', 'barato'], ['on sale', 'en oferta'], ['I’ll take it.', 'Me lo llevo.'],
      ['Can I try it on?', '¿Me lo puedo probar?'], ['the fitting room', 'el probador'], ['cash', 'efectivo'], ['credit card', 'tarjeta de crédito'], ['dollar', 'dólar']
    ],
    grammar: [
      { t: 'This, that, these, those', es: 'Demonstratives',
        html: `<p><b>This</b> = este / esta (cerca). <b>That</b> = ese / aquel (lejos). En plural: <b>these</b> (estos) y <b>those</b> (esos).</p>
<p>No cambian según el género: <i>this shirt</i>, <i>this dress</i>. Solo cambian del singular al plural.</p>`,
        table: [['', 'cerca', 'lejos'], ['singular', 'this shirt', 'that shirt'], ['plural', 'these shoes', 'those shoes']],
        sum: 'This shirt, that dress, these shoes, those bags.',
        ex: [['How much is this jacket?', '¿Cuánto cuesta esta chaqueta?'], ['I like those sneakers.', 'Me gustan esos tenis.']] },
      { t: 'How much…? y los precios', es: 'How much is it?',
        html: `<p>Para preguntar el precio: <b>How much is</b> this shirt? (singular) / <b>How much are</b> these shoes? (plural).</p>
<p>Los precios se dicen así: <b>$15.99</b> = <i>fifteen ninety-nine</i> o <i>fifteen dollars and ninety-nine cents</i>. Y $100 = <i>a hundred dollars</i>.</p>`,
        table: [['precio', 'se dice'], ['$5', 'five dollars'], ['$12.50', 'twelve fifty'], ['$30', 'thirty dollars'], ['$100', 'a hundred dollars']],
        ex: [['How much are these jeans? — They’re forty dollars.', '¿Cuánto cuestan estos jeans? — Cuestan cuarenta dólares.'], ['It’s on sale: only twenty bucks!', 'Está en oferta: ¡solo veinte dólares!']] },
      { t: 'El adjetivo va antes', es: 'Adjective + noun',
        html: `<p>En inglés el adjetivo va <b>antes</b> del sustantivo: <i>a <b>red</b> dress</i> (un vestido rojo), <i><b>black</b> shoes</i>.</p>
<p>Y el adjetivo nunca lleva plural: <i>black shoes</i>, no <s>blacks shoes</s>.</p>`,
        table: [['español', 'inglés'], ['un vestido rojo', 'a red dress'], ['zapatos negros', 'black shoes'], ['una bolsa grande', 'a big bag']],
        ex: [['I want a blue T-shirt.', 'Quiero una camiseta azul.'], ['These are cheap sneakers.', 'Estos son tenis baratos.']] }
    ],
    dialogue: {
      t: 'At the mall', place: 'Orlando, Florida 🇺🇸',
      lines: [
        ['Clerk', 'Hi there! Can I help you?', '¡Hola! ¿En qué le puedo ayudar?'],
        ['Mariela', 'Yes, please. How much is this dress?', 'Sí, por favor. ¿Cuánto cuesta este vestido?'],
        ['Clerk', 'It’s thirty-five dollars. It’s on sale today.', 'Cuesta treinta y cinco dólares. Hoy está en oferta.'],
        ['Mariela', 'Nice! Do you have it in blue?', '¡Qué bien! ¿Lo tiene en azul?'],
        ['Clerk', 'Yes, we do. What size are you?', 'Sí. ¿Qué talla usa?'],
        ['Mariela', 'Medium. Can I try it on?', 'Mediana. ¿Me lo puedo probar?'],
        ['Clerk', 'Sure. The fitting room is over there.', 'Claro. El probador está por allá.'],
        ['Mariela', 'It’s perfect. I’ll take it. Can I pay by card?', 'Me queda perfecto. Me lo llevo. ¿Puedo pagar con tarjeta?'],
        ['Clerk', 'Of course. Have a nice day!', 'Por supuesto. ¡Que tenga un buen día!']
      ],
      q: [
        { t: 'mc', q: 'How much is the dress?', o: ['$35', '$25', '$53'] },
        { t: 'mc', q: 'What color does Mariela want?', o: ['Blue', 'Red', 'Black'] },
        { t: 'mc', q: 'How does she pay?', o: ['By card', 'In cash', 'She doesn’t buy it'] }
      ]
    },
    culture: { t: 'Sales tax: el precio no es el precio', html: `<p>En Estados Unidos el precio en la etiqueta normalmente <b>no incluye el impuesto</b> (<i>sales tax</i>). Se suma en la caja y cambia de un estado a otro: en Florida es un 6 %, más o menos.</p>
<p>💵 Y como en Panamá, la moneda es el dólar. A un dólar le dicen informalmente <b>a buck</b>: <i>twenty bucks</i> = veinte dólares.</p>` },
    ex: [
      { t: 'cloze', s: 'How much is ___ shirt? (esta)', a: ['this'], o: ['this', 'these', 'those'], nl: '¿Cuánto cuesta esta camisa?', tag: 'en-this' },
      { t: 'cloze', s: 'I like ___ shoes over there.', a: ['those'], o: ['those', 'that', 'this'], nl: 'Me gustan esos zapatos de allá.', tag: 'en-this' },
      { t: 'cloze', s: 'How much ___ these jeans?', a: ['are'], o: ['are', 'is', 'do'], nl: '¿Cuánto cuestan estos jeans?', tag: 'en-price' },
      { t: 'cloze', s: 'How much ___ this bag?', a: ['is'], o: ['is', 'are', 'does'], nl: '¿Cuánto cuesta esta bolsa?', tag: 'en-price' },
      { t: 'cloze', s: 'I want a ___ dress.', a: ['red'], o: ['red', 'reds', 'dress red'], nl: 'Quiero un vestido rojo.', tag: 'en-this' },
      { t: 'cloze', s: 'Can I ___ it on?', a: ['try'], o: ['try', 'prove', 'test'], nl: '¿Me lo puedo probar?', tag: 'en-price' },
      { t: 'mc', q: '«zapatos negros» es…', o: ['black shoes', 'shoes black', 'blacks shoes'], tag: 'en-this' },
      { t: 'mc', q: '«Me lo llevo» es…', o: ['I’ll take it.', 'I carry it.', 'I take me it.'], tag: 'en-price' },
      { t: 'mc', q: '$12.50 se dice…', o: ['twelve fifty', 'twelve and five', 'one two five zero'], tag: 'en-price' },
      { t: 'mc', q: '«barato» es…', o: ['cheap', 'expensive', 'sale'], tag: 'en-price' },
      { t: 'tr', nl: '¿Cuánto cuesta?', a: ['How much is it?', 'How much does it cost?'], tag: 'en-price' },
      { t: 'tr', nl: 'Estos zapatos son caros.', a: ['These shoes are expensive.'], tag: 'en-this' },
      { t: 'tr', nl: 'Quiero una camiseta azul.', a: ['I want a blue T-shirt.', 'I want a blue t-shirt.', "I'd like a blue T-shirt.", 'I want a blue shirt.'], tag: 'en-this' },
      { t: 'tr', nl: '¿Puedo pagar con tarjeta?', a: ['Can I pay by card?', 'Can I pay with a card?', 'Can I pay by credit card?', 'Can I pay with my card?'], tag: 'en-price' },
      { t: 'order', s: 'How much are those black sneakers?', nl: '¿Cuánto cuestan esos tenis negros?', tag: 'en-this' },
      { t: 'match', p: [['shoes', 'zapatos'], ['size', 'talla'], ['cheap', 'barato'], ['cash', 'efectivo'], ['dress', 'vestido']], tag: 'en-price' }
    ],
    reading: {
      t: 'Black Friday', type: 'Un artículo corto',
      p: [
        ['Black Friday is the day after Thanksgiving, at the end of November. Many stores have big sales and open very early.', 'Black Friday es el día después de Acción de Gracias, a finales de noviembre. Muchas tiendas tienen grandes ofertas y abren muy temprano.'],
        ['Some people wait outside the store all night. They want cheap TVs, phones and clothes.', 'Algunas personas esperan afuera de la tienda toda la noche. Quieren televisores, celulares y ropa barata.'],
        ['Today many people shop online. The Monday after Black Friday is called Cyber Monday, and it has online sales.', 'Hoy mucha gente compra por internet. El lunes después de Black Friday se llama Cyber Monday y tiene ofertas en línea.']
      ],
      gl: [['the day after', 'el día después'], ['wait outside', 'esperar afuera'], ['online', 'por internet']],
      q: [
        { t: 'mc', q: 'When is Black Friday?', o: ['The day after Thanksgiving', 'In December', 'On the first Monday of the year'] },
        { t: 'mc', q: 'Why do people wait all night?', o: ['They want cheap things', 'They work there', 'The store is closed for a week'] },
        { t: 'mc', q: 'What is Cyber Monday?', o: ['A day with online sales', 'A computer fair', 'A holiday with no stores'] }
      ]
    },
    say: [['How much is this shirt?', '¿Cuánto cuesta esta camisa?'], ['Can I try it on?', '¿Me lo puedo probar?'], ['I’ll take it, thanks.', 'Me lo llevo, gracias.']],
    task: { nl: 'Escribe un diálogo corto en una tienda: pregunta el precio de dos cosas, la talla o el color, y decide si compras.', model: "How much are these jeans? — They're thirty dollars. — Do you have them in black? — Yes. — Great, I'll take them." },
    scenario: { nl: 'Estás en una tienda de ropa en Miami y quieres comprar una camisa.', role: 'You are a friendly sales clerk in a clothing store in Miami. Help the customer with size, color and price. Mention a sale.', goal: 'Pregunta el precio, pide otra talla o color y paga.' }
  });

  /* ───────────────────────── A1 · 7 ───────────────────────── */
  U({
    id: 'en-a1-07', level: 'A1', icon: '🌦️', title: 'Weather and abilities', nl: 'El clima y lo que puedes hacer',
    goals: ['Hablar del clima', 'Decir lo que puedes y no puedes hacer con can', 'Nombrar las estaciones'],
    vocab: [
      ['weather', 'clima / tiempo'], ['sunny', 'soleado'], ['cloudy', 'nublado'], ['rainy', 'lluvioso'], ['windy', 'con viento'], ['hot', 'caliente / hace calor'],
      ['warm', 'templado / calientito'], ['cold', 'frío'], ['It’s raining.', 'Está lloviendo.'], ['It’s snowing.', 'Está nevando.'], ['the rain', 'la lluvia'],
      ['the snow', 'la nieve'], ['the sun', 'el sol'], ['spring', 'primavera'], ['summer', 'verano'], ['fall', 'otoño'], ['winter', 'invierno'],
      ['the rainy season', 'la temporada lluviosa'], ['swim', 'nadar'], ['drive', 'manejar'], ['dance', 'bailar'], ['sing', 'cantar'], ['cook', 'cocinar'],
      ['ride a bike', 'andar en bicicleta'], ['umbrella', 'paraguas / sombrilla'], ['degrees', 'grados'], ['What’s the weather like?', '¿Cómo está el clima?']
    ],
    grammar: [
      { t: 'El clima: It’s…', es: 'Talking about the weather',
        html: `<p>Para el clima se usa <b>it</b> como sujeto: <b>It’s</b> hot. <b>It’s</b> sunny. <b>It’s raining</b> (ahora mismo).</p>
<p>Ojo: en español dices <i>hace calor</i>, pero en inglés es <b>it is hot</b>, nunca <s>it makes hot</s>. Y la pregunta es <b>What’s the weather like?</b></p>`,
        table: [['español', 'inglés'], ['Hace calor.', 'It’s hot.'], ['Hace frío.', 'It’s cold.'], ['Está nublado.', 'It’s cloudy.'], ['Está lloviendo.', 'It’s raining.']],
        sum: 'It’s hot. It’s sunny. It’s raining.',
        ex: [['It’s very hot in Panama City today.', 'Hoy hace mucho calor en Ciudad de Panamá.'], ['What’s the weather like in Chicago? — It’s cold and windy.', '¿Cómo está el clima en Chicago? — Hace frío y viento.']] },
      { t: 'Can y can’t', es: 'Can / can’t',
        html: `<p><b>Can</b> significa <i>poder</i> o <i>saber hacer algo</i>. Es igual para todas las personas: I can, she <b>can</b> (sin -s).</p>
<p>Después de can el verbo va sin <i>to</i>: <i>I can <b>swim</b></i>, no <s>I can to swim</s>. Negativa: <b>can’t</b> (cannot). Pregunta: <b>Can you</b> drive?</p>`,
        table: [['afirmativa', 'negativa', 'pregunta'], ['I can swim.', 'I can’t swim.', 'Can you swim?'], ['She can drive.', 'She can’t drive.', 'Can she drive?']],
        ex: [['I can cook, but I can’t sing.', 'Sé cocinar, pero no sé cantar.'], ['Can you ride a bike? — Yes, I can.', '¿Sabes andar en bicicleta? — Sí.']] },
      { t: 'Can para pedir permiso', es: 'Can I…?',
        html: `<p>Con <b>Can I…?</b> pides permiso y con <b>Can you…?</b> pides un favor: <i>Can I open the window?</i> <i>Can you help me, please?</i></p>
<p>Para ser más formal se usa <b>Could you…?</b>: <i>Could you repeat that, please?</i></p>`,
        table: [['inglés', 'español'], ['Can I sit here?', '¿Me puedo sentar aquí?'], ['Can you help me?', '¿Me puedes ayudar?'], ['Could you repeat that?', '¿Podría repetirlo?']],
        ex: [['Can I borrow your umbrella?', '¿Me prestas tu paraguas?'], ['Could you speak more slowly, please?', '¿Podría hablar más despacio, por favor?']] }
    ],
    dialogue: {
      t: 'A trip to Chicago', place: 'Chicago, Illinois 🇺🇸',
      lines: [
        ['Ken', 'So, what’s the weather like in Panama now?', 'Oye, ¿cómo está el clima en Panamá ahora?'],
        ['Iris', 'It’s hot and it rains every afternoon. It’s the rainy season.', 'Hace calor y llueve todas las tardes. Es la temporada lluviosa.'],
        ['Ken', 'Here it’s very cold. It’s winter and it’s snowing!', 'Aquí hace mucho frío. ¡Es invierno y está nevando!'],
        ['Iris', 'Wow, I can’t wait to see snow! Can you ski?', '¡Uy, ya quiero ver la nieve! ¿Sabes esquiar?'],
        ['Ken', 'No, I can’t. But I can skate. I can teach you.', 'No. Pero sé patinar. Te puedo enseñar.'],
        ['Iris', 'Great! But I don’t have a winter jacket.', '¡Genial! Pero no tengo chaqueta de invierno.'],
        ['Ken', 'Don’t worry. You can use my sister’s jacket.', 'No te preocupes. Puedes usar la chaqueta de mi hermana.'],
        ['Iris', 'Thank you! See you on Friday.', '¡Gracias! Nos vemos el viernes.']
      ],
      q: [
        { t: 'mc', q: 'What’s the weather like in Chicago?', o: ['Cold and snowy', 'Hot and rainy', 'Warm and sunny'] },
        { t: 'mc', q: 'What can Ken do?', o: ['He can skate', 'He can ski', 'He can’t do any sport'] },
        { t: 'mc', q: 'What does Iris need?', o: ['A winter jacket', 'An umbrella', 'A ticket'] }
      ]
    },
    culture: { t: 'Fahrenheit y cuatro estaciones', html: `<p>En Estados Unidos la temperatura se mide en <b>grados Fahrenheit</b>. 32 °F = 0 °C (se congela el agua) y 90 °F ≈ 32 °C, un día típico en Panamá.</p>
<p>🍂 En gran parte del país hay cuatro estaciones muy marcadas. En otoño (<b>fall</b>, en Inglaterra <i>autumn</i>) las hojas se ponen rojas y amarillas.</p>` },
    ex: [
      { t: 'cloze', s: '___ hot today.', a: ['It’s'], o: ['It’s', 'Makes', 'Is'], nl: 'Hoy hace calor.', tag: 'en-weather' },
      { t: 'cloze', s: 'It’s ___ right now. Take an umbrella!', a: ['raining'], o: ['raining', 'rain', 'rains'], nl: 'Está lloviendo ahora. ¡Lleva paraguas!', tag: 'en-weather' },
      { t: 'cloze', s: 'What’s the weather ___?', a: ['like'], o: ['like', 'how', 'as'], nl: '¿Cómo está el clima?', tag: 'en-weather' },
      { t: 'cloze', s: 'She ___ swim very well.', a: ['can'], o: ['can', 'cans', 'can to'], nl: 'Ella sabe nadar muy bien.', tag: 'en-can' },
      { t: 'cloze', s: 'I can ___ a car.', a: ['drive'], o: ['drive', 'to drive', 'drives'], nl: 'Sé manejar carro.', tag: 'en-can' },
      { t: 'cloze', s: '___ you help me, please?', a: ['Can'], o: ['Can', 'Do', 'Are'], nl: '¿Me puedes ayudar, por favor?', tag: 'en-can' },
      { t: 'mc', q: '«Hace frío» es…', o: ['It’s cold.', 'It makes cold.', 'Is cold.'], tag: 'en-weather' },
      { t: 'mc', q: '«otoño» en inglés de EE. UU. es…', o: ['fall', 'spring', 'winter'], tag: 'en-weather' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['He can’t sing.', 'He doesn’t can sing.', 'He can’t to sing.'], tag: 'en-can' },
      { t: 'mc', q: 'Para pedir algo con más cortesía dices…', o: ['Could you repeat that, please?', 'Repeat!', 'You repeat that?'], tag: 'en-can' },
      { t: 'tr', nl: 'Hace calor y está soleado.', a: ["It's hot and sunny.", 'It is hot and sunny.', "It's hot and it's sunny."], tag: 'en-weather' },
      { t: 'tr', nl: 'No sé nadar.', a: ["I can't swim.", 'I cannot swim.'], tag: 'en-can' },
      { t: 'tr', nl: '¿Sabes manejar?', a: ['Can you drive?'], tag: 'en-can' },
      { t: 'tr', nl: 'Está lloviendo.', a: ["It's raining.", 'It is raining.'], tag: 'en-weather' },
      { t: 'order', s: 'Can you speak more slowly, please?', nl: '¿Puedes hablar más despacio, por favor?', tag: 'en-can' },
      { t: 'match', p: [['summer', 'verano'], ['winter', 'invierno'], ['cloudy', 'nublado'], ['snow', 'nieve'], ['umbrella', 'paraguas']], tag: 'en-weather' }
    ],
    reading: {
      t: 'Two seasons in Panama', type: 'Una guía de viaje',
      p: [
        ['Panama doesn’t have four seasons. It has two: the dry season, from January to April, and the rainy season, from May to December.', 'Panamá no tiene cuatro estaciones. Tiene dos: la temporada seca, de enero a abril, y la lluviosa, de mayo a diciembre.'],
        ['In the dry season it’s sunny and windy, and you can go to the beach every day. Panamanians call it "summer".', 'En la temporada seca está soleado y hace viento, y puedes ir a la playa todos los días. Los panameños le dicen «verano».'],
        ['In the rainy season it’s hot in the morning, and it rains a lot in the afternoon. Don’t forget your umbrella!', 'En la temporada lluviosa hace calor en la mañana y llueve mucho en la tarde. ¡No olvides tu paraguas!']
      ],
      gl: [['dry', 'seco'], ['don’t forget', 'no olvides'], ['a lot', 'mucho']],
      q: [
        { t: 'mc', q: 'How many seasons does Panama have?', o: ['Two', 'Four', 'One'] },
        { t: 'mc', q: 'When is the dry season?', o: ['From January to April', 'From May to December', 'All year'] },
        { t: 'mc', q: 'When does it rain a lot in the rainy season?', o: ['In the afternoon', 'In the morning', 'At night only'] }
      ]
    },
    say: [['What’s the weather like today?', '¿Cómo está el clima hoy?'], ['It’s hot and sunny.', 'Hace calor y está soleado.'], ['I can swim, but I can’t dance.', 'Sé nadar, pero no sé bailar.']],
    task: { nl: 'Describe el clima de tu ciudad y di tres cosas que sabes hacer y una que no.', model: "In Panama City it's hot all year. It rains a lot from May to December. I can swim, cook and drive, but I can't dance." },
    scenario: { nl: 'Hablas por videollamada con Ken, un amigo de Chicago, sobre el clima y lo que sabes hacer.', role: 'You are Ken, a friendly guy from Chicago. Talk about the weather in Chicago (cold winter) and ask about Panama. Ask what the learner can do: swim, cook, dance, drive.', goal: 'Compara el clima y cuéntale qué sabes hacer.' }
  });

  /* ───────────────────────── A1 · 8 ───────────────────────── */
  U({
    id: 'en-a1-08', level: 'A1', icon: '⚽', title: 'Free time', nl: 'Tiempo libre',
    goals: ['Hablar de tus pasatiempos', 'Usar like, love y hate + -ing', 'Decir con qué frecuencia haces algo'],
    vocab: [
      ['free time', 'tiempo libre'], ['hobby', 'pasatiempo'], ['play soccer', 'jugar fútbol'], ['play baseball', 'jugar béisbol'], ['play video games', 'jugar videojuegos'],
      ['go to the movies', 'ir al cine'], ['go to the beach', 'ir a la playa'], ['go shopping', 'ir de compras'], ['read', 'leer'], ['listen to music', 'escuchar música'],
      ['watch movies', 'ver películas'], ['go running', 'salir a correr'], ['go to the gym', 'ir al gimnasio'], ['take pictures', 'tomar fotos'], ['draw', 'dibujar'],
      ['play the guitar', 'tocar la guitarra'], ['hang out with friends', 'pasar el rato con amigos'], ['the weekend', 'el fin de semana'], ['once a week', 'una vez a la semana'],
      ['twice a week', 'dos veces a la semana'], ['How often…?', '¿Con qué frecuencia…?'], ['boring', 'aburrido'], ['fun', 'divertido'], ['love', 'encantar'], ['hate', 'odiar']
    ],
    grammar: [
      { t: 'Like, love, hate + -ing', es: 'I like reading',
        html: `<p>Después de <b>like</b>, <b>love</b> y <b>hate</b> el verbo lleva <b>-ing</b>: <i>I like read<b>ing</b></i>, <i>She loves danc<b>ing</b></i>.</p>
<p>Reglas de escritura: dance → danc<b>ing</b> (se va la e), swim → swim<b>ming</b> (se duplica la consonante), play → play<b>ing</b>.</p>`,
        table: [['verbo', '-ing'], ['read', 'reading'], ['dance', 'dancing'], ['swim', 'swimming'], ['run', 'running']],
        sum: 'I love reading. I like swimming. I hate running.',
        ex: [['I love going to the beach.', 'Me encanta ir a la playa.'], ['My brother hates getting up early.', 'Mi hermano odia levantarse temprano.']] },
      { t: 'Play, go y do', es: 'Play / go / do',
        html: `<p>Con deportes de pelota se usa <b>play</b>: play soccer, play baseball. Con actividades en -ing se usa <b>go</b>: go running, go shopping, go swimming. Con otros deportes y ejercicios, <b>do</b>: do yoga, do karate.</p>
<p>Instrumentos: <b>play the</b> guitar, <b>play the</b> piano.</p>`,
        table: [['play', 'go', 'do'], ['play soccer', 'go running', 'do yoga'], ['play baseball', 'go swimming', 'do karate'], ['play the guitar', 'go shopping', 'do exercise']],
        ex: [['We play soccer on Saturdays.', 'Jugamos fútbol los sábados.'], ['She does yoga twice a week.', 'Ella hace yoga dos veces a la semana.']] },
      { t: 'How often…? Frecuencia', es: 'How often',
        html: `<p>Para preguntar la frecuencia: <b>How often</b> do you go to the gym? Respuestas: <b>every day</b>, <b>once a week</b> (una vez a la semana), <b>twice a month</b> (dos veces al mes), <b>three times a year</b>.</p>
<p>Estas expresiones van al <b>final</b> de la frase: <i>I go running three times a week.</i></p>`,
        table: [['inglés', 'español'], ['once a week', 'una vez a la semana'], ['twice a month', 'dos veces al mes'], ['three times a year', 'tres veces al año'], ['every weekend', 'todos los fines de semana']],
        ex: [['How often do you go to the movies? — Once a month.', '¿Con qué frecuencia vas al cine? — Una vez al mes.'], ['I call my mom every day.', 'Llamo a mi mamá todos los días.']] }
    ],
    dialogue: {
      t: 'New roommates', place: 'Austin, Texas 🇺🇸',
      lines: [
        ['Tyler', 'So, what do you like doing in your free time?', 'Bueno, ¿qué te gusta hacer en tu tiempo libre?'],
        ['Andrés', 'I love playing soccer. And I like listening to music.', 'Me encanta jugar fútbol. Y me gusta escuchar música.'],
        ['Tyler', 'Cool! How often do you play soccer?', '¡Chévere! ¿Con qué frecuencia juegas fútbol?'],
        ['Andrés', 'Twice a week, on Tuesdays and Saturdays. And you?', 'Dos veces a la semana, los martes y los sábados. ¿Y tú?'],
        ['Tyler', 'I don’t like sports very much. I love playing the guitar.', 'No me gustan mucho los deportes. Me encanta tocar la guitarra.'],
        ['Andrés', 'Really? Can you play salsa?', '¿De verdad? ¿Sabes tocar salsa?'],
        ['Tyler', 'Not yet! Maybe you can teach me to dance first.', '¡Todavía no! Quizás primero me puedes enseñar a bailar.'],
        ['Andrés', 'Deal! But I hate getting up early, so lessons start at noon.', '¡Trato hecho! Pero odio madrugar, así que las clases empiezan al mediodía.']
      ],
      q: [
        { t: 'mc', q: 'What does Andrés love doing?', o: ['Playing soccer', 'Playing the guitar', 'Getting up early'] },
        { t: 'mc', q: 'How often does Andrés play soccer?', o: ['Twice a week', 'Every day', 'Once a month'] },
        { t: 'mc', q: 'What does Tyler love doing?', o: ['Playing the guitar', 'Playing sports', 'Dancing'] }
      ]
    },
    culture: { t: 'Soccer, football y béisbol', html: `<p>En Estados Unidos <b>football</b> es el fútbol americano. El fútbol de Panamá se llama <b>soccer</b>.</p>
<p>⚾ El béisbol es muy popular en EE. UU. y también en Panamá: varios panameños han jugado en las Grandes Ligas, como Mariano Rivera de los Yankees.</p>` },
    ex: [
      { t: 'cloze', s: 'I love ___ to the beach.', a: ['going'], o: ['going', 'go', 'goes'], nl: 'Me encanta ir a la playa.', tag: 'en-ing' },
      { t: 'cloze', s: 'She likes ___.', a: ['swimming'], o: ['swimming', 'swiming', 'swim'], nl: 'A ella le gusta nadar.', tag: 'en-ing' },
      { t: 'cloze', s: 'We ___ soccer on Saturdays.', a: ['play'], o: ['play', 'do', 'go'], nl: 'Jugamos fútbol los sábados.', tag: 'en-ing' },
      { t: 'cloze', s: 'I ___ running every morning.', a: ['go'], o: ['go', 'play', 'do'], nl: 'Salgo a correr todas las mañanas.', tag: 'en-ing' },
      { t: 'cloze', s: 'He ___ yoga twice a week.', a: ['does'], o: ['does', 'plays', 'goes'], nl: 'Él hace yoga dos veces a la semana.', tag: 'en-ing' },
      { t: 'cloze', s: 'How ___ do you go to the gym?', a: ['often'], o: ['often', 'much', 'many'], nl: '¿Con qué frecuencia vas al gimnasio?', tag: 'en-q' },
      { t: 'mc', q: '«una vez a la semana» es…', o: ['once a week', 'one time in week', 'one for week'], tag: 'en-ing' },
      { t: 'mc', q: 'En EE. UU., el fútbol de Panamá se llama…', o: ['soccer', 'football', 'baseball'], tag: 'en-ing' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['I hate getting up early.', 'I hate get up early.', 'I hating get up early.'], tag: 'en-ing' },
      { t: 'mc', q: '«tocar la guitarra» es…', o: ['play the guitar', 'touch the guitar', 'do the guitar'], tag: 'en-ing' },
      { t: 'tr', nl: 'Me gusta leer.', a: ['I like reading.', 'I like to read.'], tag: 'en-ing' },
      { t: 'tr', nl: 'Me encanta bailar.', a: ['I love dancing.', 'I love to dance.'], tag: 'en-ing' },
      { t: 'tr', nl: 'Juego videojuegos los fines de semana.', a: ['I play video games on weekends.', 'I play video games on the weekend.', 'I play video games at the weekend.'], tag: 'en-ing' },
      { t: 'order', s: 'How often do you go to the movies?', nl: '¿Con qué frecuencia vas al cine?', tag: 'en-q' },
      { t: 'match', p: [['read', 'leer'], ['draw', 'dibujar'], ['fun', 'divertido'], ['boring', 'aburrido'], ['weekend', 'fin de semana']], tag: 'en-ing' }
    ],
    reading: {
      t: 'My weekend', type: 'Una publicación en redes',
      p: [
        ['I love weekends! On Saturday mornings I go running in the park with my sister. We run for one hour.', '¡Me encantan los fines de semana! Los sábados en la mañana salgo a correr en el parque con mi hermana. Corremos una hora.'],
        ['In the afternoon I hang out with my friends. We usually go to the movies or play video games at my house.', 'En la tarde paso el rato con mis amigos. Normalmente vamos al cine o jugamos videojuegos en mi casa.'],
        ['On Sundays I don’t do much. I read, I listen to music and I call my grandma. I hate Sunday nights because Monday is coming!', 'Los domingos no hago mucho. Leo, escucho música y llamo a mi abuela. ¡Odio los domingos en la noche porque ya viene el lunes!']
      ],
      gl: [['for one hour', 'durante una hora'], ['I don’t do much', 'no hago mucho'], ['is coming', 'ya viene']],
      q: [
        { t: 'mc', q: 'Who does the writer go running with?', o: ['With the sister', 'With friends', 'Alone'] },
        { t: 'mc', q: 'What do the friends usually do?', o: ['Go to the movies or play video games', 'Play soccer', 'Go shopping'] },
        { t: 'mc', q: 'Why does the writer hate Sunday nights?', o: ['Because Monday is coming', 'Because it’s boring', 'Because it rains'] }
      ]
    },
    say: [['In my free time I like reading.', 'En mi tiempo libre me gusta leer.'], ['I play soccer twice a week.', 'Juego fútbol dos veces a la semana.'], ['How often do you go to the gym?', '¿Con qué frecuencia vas al gimnasio?']],
    task: { nl: 'Escribe sobre tu tiempo libre: dos cosas que te encantan, una que odias y con qué frecuencia haces cada una.', model: "I love dancing and going to the beach. I go to the beach every weekend. I dance salsa once a week. I hate running!" },
    scenario: { nl: 'Conoces a tu nuevo compañero de cuarto en Texas y hablan de pasatiempos.', role: 'You are Tyler, a relaxed college student in Austin, Texas, and the learner is your new roommate. Ask about hobbies, sports and how often they do them. You love music and video games.', goal: 'Cuéntale tus pasatiempos y busca algo que puedan hacer juntos.' }
  });

  /* ───────────────────────── A1 · 9 ───────────────────────── */
  U({
    id: 'en-a1-09', level: 'A1', icon: '🏠', title: 'At home', nl: 'En casa',
    goals: ['Describir tu casa', 'Usar el presente continuo para lo que pasa ahora', 'Usar me, him, her, them'],
    vocab: [
      ['house', 'casa'], ['apartment', 'apartamento'], ['room', 'cuarto / habitación'], ['bedroom', 'recámara / cuarto'], ['bathroom', 'baño'], ['kitchen', 'cocina'],
      ['living room', 'sala'], ['dining room', 'comedor'], ['yard', 'patio'], ['balcony', 'balcón'], ['bed', 'cama'], ['sofa / couch', 'sofá'], ['table', 'mesa'],
      ['chair', 'silla'], ['window', 'ventana'], ['door', 'puerta'], ['fridge', 'refrigeradora'], ['stove', 'estufa'], ['upstairs', 'arriba'], ['downstairs', 'abajo'],
      ['clean', 'limpiar / limpio'], ['wash the dishes', 'lavar los platos'], ['do the laundry', 'lavar la ropa'], ['air conditioning', 'aire acondicionado'], ['rent', 'alquiler / alquilar']
    ],
    grammar: [
      { t: 'Presente continuo: lo que pasa ahora', es: 'Present continuous',
        html: `<p>Para lo que está pasando <b>en este momento</b> se usa <b>am / is / are + verbo en -ing</b>: <i>I<b>’m cooking</b></i> (estoy cocinando).</p>
<p>Compara: <i>I cook every day</i> (hábito, presente simple) y <i>I’m cooking now</i> (ahora). Palabras típicas: <b>now</b>, <b>right now</b>, <b>at the moment</b>.</p>`,
        table: [['', 'afirmativa', 'pregunta'], ['I', 'I’m cleaning.', 'Am I…?'], ['he / she', 'She’s sleeping.', 'Is she sleeping?'], ['we / you / they', 'They’re watching TV.', 'Are they watching TV?']],
        sum: 'I’m cooking. She’s sleeping. They’re watching TV.',
        ex: [['Mom is cooking in the kitchen.', 'Mamá está cocinando en la cocina.'], ['What are you doing? — I’m doing the laundry.', '¿Qué estás haciendo? — Estoy lavando la ropa.']] },
      { t: 'Pronombres objeto', es: 'me, you, him, her, it, us, them',
        html: `<p>Cuando la persona recibe la acción se usa otra forma: <b>me</b>, <b>you</b>, <b>him</b>, <b>her</b>, <b>it</b>, <b>us</b>, <b>them</b>.</p>
<p>Y van <b>después</b> del verbo, no antes como en español: <i>I love <b>her</b></i> (la quiero). <i>Call <b>me</b>!</i> (¡Llámame!)</p>`,
        table: [['sujeto', 'objeto', 'ejemplo'], ['I', 'me', 'Help me!'], ['he', 'him', 'I see him.'], ['she', 'her', 'I call her.'], ['we', 'us', 'Visit us!'], ['they', 'them', 'I like them.']],
        ex: [['Where are my keys? I can’t find them.', '¿Dónde están mis llaves? No las encuentro.'], ['My grandma lives with us.', 'Mi abuela vive con nosotros.']] },
      { t: 'There is / are en la casa', es: 'In my house there is…',
        html: `<p>Para describir tu casa usa otra vez <b>there is / there are</b>: <i>There are three bedrooms. There’s a big kitchen.</i></p>
<p>Y <b>has</b> también funciona: <i>My apartment <b>has</b> two bathrooms.</i></p>`,
        table: [['inglés', 'español'], ['There are two bedrooms.', 'Hay dos cuartos.'], ['There’s a balcony.', 'Hay un balcón.'], ['It has air conditioning.', 'Tiene aire acondicionado.']],
        ex: [['My apartment has a small balcony.', 'Mi apartamento tiene un balcón pequeño.'], ['Is there a washing machine?', '¿Hay lavadora?']] }
    ],
    dialogue: {
      t: 'On the phone', place: 'Panama City 🇵🇦',
      lines: [
        ['Mom', 'Hi, honey! What are you doing?', '¡Hola, mi amor! ¿Qué estás haciendo?'],
        ['Lucía', 'Hi, Mom. I’m cleaning my new apartment.', 'Hola, mami. Estoy limpiando mi apartamento nuevo.'],
        ['Mom', 'How is it? Is it big?', '¿Qué tal es? ¿Es grande?'],
        ['Lucía', 'It’s small, but nice. There’s one bedroom, a living room and a little kitchen.', 'Es pequeño, pero bonito. Hay un cuarto, una sala y una cocina chiquita.'],
        ['Mom', 'Does it have air conditioning?', '¿Tiene aire acondicionado?'],
        ['Lucía', 'Yes, it does! And there’s a balcony. I can see the ocean from it.', '¡Sí! Y hay un balcón. Desde ahí puedo ver el mar.'],
        ['Mom', 'Wonderful! Is your brother helping you?', '¡Qué maravilla! ¿Tu hermano te está ayudando?'],
        ['Lucía', 'No, he’s sleeping on my couch! Call him later, please.', '¡No, está durmiendo en mi sofá! Llámalo más tarde, por favor.']
      ],
      q: [
        { t: 'mc', q: 'What is Lucía doing?', o: ['Cleaning her apartment', 'Sleeping', 'Cooking'] },
        { t: 'mc', q: 'How many bedrooms are there?', o: ['One', 'Two', 'Three'] },
        { t: 'mc', q: 'What is her brother doing?', o: ['He’s sleeping on the couch', 'He’s helping her', 'He’s on the balcony'] }
      ]
    },
    culture: { t: 'Floors and yards', html: `<p>Ojo con los pisos: en Estados Unidos la planta baja es el <b>first floor</b>. Lo que en Panamá llamamos «primer piso» a veces es su <i>second floor</i>.</p>
<p>🏡 Muchas casas en EE. UU. tienen <b>yard</b> (jardín o patio) adelante y atrás, y un <b>garage</b> para el carro.</p>` },
    ex: [
      { t: 'cloze', s: 'I’m ___ the dishes right now.', a: ['washing'], o: ['washing', 'wash', 'washes'], nl: 'Ahora estoy lavando los platos.', tag: 'en-pc' },
      { t: 'cloze', s: 'She ___ sleeping.', a: ['is'], o: ['is', 'are', 'am'], nl: 'Ella está durmiendo.', tag: 'en-pc' },
      { t: 'cloze', s: 'What ___ you doing?', a: ['are'], o: ['are', 'do', 'is'], nl: '¿Qué estás haciendo?', tag: 'en-pc' },
      { t: 'cloze', s: 'My grandma lives with ___.', a: ['us'], o: ['us', 'we', 'our'], nl: 'Mi abuela vive con nosotros.', tag: 'en-obj' },
      { t: 'cloze', s: 'I love my sister. I call ___ every day.', a: ['her'], o: ['her', 'she', 'him'], nl: 'Quiero a mi hermana. La llamo todos los días.', tag: 'en-obj' },
      { t: 'cloze', s: 'Where are my keys? I can’t find ___.', a: ['them'], o: ['them', 'they', 'it'], nl: '¿Dónde están mis llaves? No las encuentro.', tag: 'en-obj' },
      { t: 'cloze', s: 'There ___ two bathrooms.', a: ['are'], o: ['are', 'is', 'has'], nl: 'Hay dos baños.', tag: 'en-there' },
      { t: 'mc', q: '«Estoy cocinando» es…', o: ['I’m cooking.', 'I cook.', 'I cooking.'], tag: 'en-pc' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Call me later!', 'Me call later!', 'Call I later!'], tag: 'en-obj' },
      { t: 'mc', q: '«la sala» es…', o: ['the living room', 'the dining room', 'the bedroom'], tag: 'en-home' },
      { t: 'tr', nl: 'Estoy limpiando la cocina.', a: ["I'm cleaning the kitchen.", 'I am cleaning the kitchen.'], tag: 'en-pc' },
      { t: 'tr', nl: 'Mi apartamento tiene un balcón.', a: ['My apartment has a balcony.', "There's a balcony in my apartment."], tag: 'en-home' },
      { t: 'tr', nl: '¿Qué estás haciendo?', a: ['What are you doing?'], tag: 'en-pc' },
      { t: 'order', s: 'My brother is sleeping on the couch.', nl: 'Mi hermano está durmiendo en el sofá.', tag: 'en-pc' },
      { t: 'match', p: [['kitchen', 'cocina'], ['bedroom', 'cuarto'], ['window', 'ventana'], ['chair', 'silla'], ['fridge', 'refrigeradora']], tag: 'en-home' }
    ],
    reading: {
      t: 'Apartment for rent', type: 'Un anuncio',
      p: [
        ['FOR RENT: nice apartment in downtown Miami. There are two bedrooms, one bathroom and a big living room.', 'SE ALQUILA: lindo apartamento en el centro de Miami. Hay dos cuartos, un baño y una sala grande.'],
        ['The kitchen is new. It has a fridge, a stove and a dishwasher. There’s air conditioning in every room.', 'La cocina es nueva. Tiene refrigeradora, estufa y lavaplatos. Hay aire acondicionado en todos los cuartos.'],
        ['The rent is $1,800 a month. No pets, please. Call Diane at 305-555-0142.', 'El alquiler es de $1800 al mes. No se aceptan mascotas. Llama a Diane al 305-555-0142.']
      ],
      gl: [['for rent', 'se alquila'], ['dishwasher', 'lavaplatos'], ['pets', 'mascotas'], ['a month', 'al mes']],
      q: [
        { t: 'mc', q: 'How many bedrooms are there?', o: ['Two', 'One', 'Three'] },
        { t: 'mc', q: 'How much is the rent?', o: ['$1,800 a month', '$800 a month', '$1,800 a year'] },
        { t: 'mc', q: 'Can you have a dog?', o: ['No, no pets', 'Yes, small dogs', 'Only cats'] }
      ]
    },
    say: [['There are two bedrooms in my house.', 'Hay dos cuartos en mi casa.'], ['I’m cleaning the kitchen.', 'Estoy limpiando la cocina.'], ['Call me later, please.', 'Llámame más tarde, por favor.']],
    task: { nl: 'Describe tu casa o apartamento en 4 frases y di qué está haciendo alguien de tu familia ahora mismo.', model: "I live in a small apartment. There are two bedrooms and a nice kitchen. It has air conditioning. Right now my mom is watching TV in the living room." },
    scenario: { nl: 'Buscas un apartamento en Miami y llamas por un anuncio.', role: 'You are Diane, a landlord in Miami. The learner calls about your apartment for rent (2 bedrooms, $1,800). Answer questions and ask about them.', goal: 'Pregunta cuántos cuartos tiene, el precio y si tiene aire acondicionado.' }
  });

  /* ───────────────────────── A1 · 10 ───────────────────────── */
  U({
    id: 'en-a1-10', level: 'A1', icon: '📅', title: 'Plans and invitations', nl: 'Planes e invitaciones',
    goals: ['Hablar de planes con going to', 'Decir fechas, días y meses', 'Invitar, aceptar y rechazar'],
    vocab: [
      ['Monday', 'lunes'], ['Tuesday', 'martes'], ['Wednesday', 'miércoles'], ['Thursday', 'jueves'], ['Friday', 'viernes'], ['Saturday', 'sábado'], ['Sunday', 'domingo'],
      ['January', 'enero'], ['March', 'marzo'], ['July', 'julio'], ['December', 'diciembre'], ['tomorrow', 'mañana (el día)'], ['tonight', 'esta noche'],
      ['next week', 'la próxima semana'], ['birthday', 'cumpleaños'], ['party', 'fiesta'], ['invite', 'invitar'], ['Would you like to…?', '¿Te gustaría…?'],
      ['I’d love to!', '¡Me encantaría!'], ['Sorry, I can’t.', 'Lo siento, no puedo.'], ['Maybe another time.', 'Quizás otro día.'], ['Let’s…', 'Vamos a… / ¿Y si…?'],
      ['What time?', '¿A qué hora?'], ['vacation', 'vacaciones'], ['visit', 'visitar'], ['busy', 'ocupado']
    ],
    grammar: [
      { t: 'Going to: planes', es: 'Be going to',
        html: `<p>Para planes ya decididos: <b>am / is / are + going to + verbo</b>. <i>I’m going to visit my grandma on Sunday.</i></p>
<p>Es muy parecido al español <i>voy a…</i>. Pregunta: <b>Are you going to</b> come? Negativa: <i>I’m <b>not</b> going to work tomorrow.</i> Al hablar rápido suena <i>gonna</i>.</p>`,
        table: [['', 'going to'], ['I', 'I’m going to travel.'], ['he / she', 'She’s going to study.'], ['we / they', 'We’re going to have a party.'], ['pregunta', 'Are you going to come?']],
        sum: 'I’m going to visit my family next week.',
        ex: [['We’re going to have a party on Saturday.', 'Vamos a hacer una fiesta el sábado.'], ['What are you going to do tonight?', '¿Qué vas a hacer esta noche?']] },
      { t: 'Días, meses y fechas', es: 'Days, months and dates',
        html: `<p>En inglés los días y los meses van con <b>mayúscula</b>: Monday, July. Con días se usa <b>on</b> (on Friday), con meses <b>in</b> (in July) y con horas <b>at</b> (at 8).</p>
<p>En EE. UU. la fecha se escribe <b>mes/día/año</b>: 7/4/2026 = 4 de julio. Se dice <i>July fourth</i>.</p>`,
        table: [['preposición', 'ejemplo'], ['on + día', 'on Monday, on July 4th'], ['in + mes / año', 'in December, in 2027'], ['at + hora', 'at 7 p.m.']],
        ex: [['My birthday is in March.', 'Mi cumpleaños es en marzo.'], ['The party is on Friday at eight.', 'La fiesta es el viernes a las ocho.']] },
      { t: 'Invitar y contestar', es: 'Invitations',
        html: `<p>Para invitar: <b>Would you like to</b> come to my party? / <b>Do you want to</b> go to the movies? / <b>Let’s</b> go to the beach!</p>
<p>Para aceptar: <b>I’d love to!</b> / <b>Sure!</b> Para rechazar con cortesía: <b>Sorry, I can’t. I’m busy.</b> <b>Maybe another time.</b></p>`,
        table: [['invitar', 'aceptar', 'rechazar'], ['Would you like to…?', 'I’d love to!', 'Sorry, I can’t.'], ['Do you want to…?', 'Sure, sounds great!', 'Maybe another time.']],
        ex: [['Would you like to have dinner with us? — I’d love to!', '¿Te gustaría cenar con nosotros? — ¡Me encantaría!'], ['Let’s meet at the mall at six.', 'Veámonos en el mall a las seis.']] }
    ],
    dialogue: {
      t: 'A birthday party', place: 'Panama City 🇵🇦',
      lines: [
        ['Sara', 'Hey, Josh! What are you going to do on Saturday?', '¡Hola, Josh! ¿Qué vas a hacer el sábado?'],
        ['Josh', 'Nothing special. Why?', 'Nada especial. ¿Por qué?'],
        ['Sara', 'It’s my birthday! I’m going to have a party at my house. Would you like to come?', '¡Es mi cumpleaños! Voy a hacer una fiesta en mi casa. ¿Te gustaría venir?'],
        ['Josh', 'I’d love to! What time?', '¡Me encantaría! ¿A qué hora?'],
        ['Sara', 'At eight. My cousins are going to cook sancocho.', 'A las ocho. Mis primos van a cocinar sancocho.'],
        ['Josh', 'Great! Can I bring my girlfriend?', '¡Genial! ¿Puedo llevar a mi novia?'],
        ['Sara', 'Of course! Is she going to bring her guitar?', '¡Claro! ¿Va a traer su guitarra?'],
        ['Josh', 'Maybe. See you on Saturday!', 'Quizás. ¡Nos vemos el sábado!']
      ],
      q: [
        { t: 'mc', q: 'When is the party?', o: ['On Saturday at eight', 'On Friday at seven', 'On Sunday at noon'] },
        { t: 'mc', q: 'Who is going to cook?', o: ['Sara’s cousins', 'Josh', 'Sara’s mom'] },
        { t: 'mc', q: 'What does Josh ask?', o: ['If he can bring his girlfriend', 'If he can cook', 'Where the house is'] }
      ]
    },
    culture: { t: 'RSVP y el Fourth of July', html: `<p>En una invitación en inglés muchas veces dice <b>RSVP</b>: significa que debes contestar si vas o no. ¡Es importante responder!</p>
<p>🎆 El <b>Fourth of July</b> (4 de julio) es el Día de la Independencia de EE. UU. La gente hace parrilladas (<i>barbecues</i>) y ve fuegos artificiales.</p>` },
    ex: [
      { t: 'cloze', s: 'I’m ___ to visit my grandma tomorrow.', a: ['going'], o: ['going', 'go', 'goes'], nl: 'Mañana voy a visitar a mi abuela.', tag: 'en-goingto' },
      { t: 'cloze', s: 'We ___ going to have a party.', a: ['are'], o: ['are', 'is', 'am'], nl: 'Vamos a hacer una fiesta.', tag: 'en-goingto' },
      { t: 'cloze', s: 'What are you going to ___ tonight?', a: ['do'], o: ['do', 'doing', 'does'], nl: '¿Qué vas a hacer esta noche?', tag: 'en-goingto' },
      { t: 'cloze', s: 'My birthday is ___ March.', a: ['in'], o: ['in', 'on', 'at'], nl: 'Mi cumpleaños es en marzo.', tag: 'en-dates' },
      { t: 'cloze', s: 'The party is ___ Friday.', a: ['on'], o: ['on', 'in', 'at'], nl: 'La fiesta es el viernes.', tag: 'en-dates' },
      { t: 'cloze', s: '___ you like to come to my party?', a: ['Would'], o: ['Would', 'Do', 'Are'], nl: '¿Te gustaría venir a mi fiesta?', tag: 'en-goingto' },
      { t: 'mc', q: 'Te invitan y quieres ir. ¿Qué dices?', o: ['I’d love to!', 'I’d love it to!', 'I love!'], tag: 'en-goingto' },
      { t: 'mc', q: 'En EE. UU., 3/5/2026 es…', o: ['5 de marzo', '3 de mayo', '5 de marzo de 1926'], tag: 'en-dates' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['See you on Monday!', 'See you in Monday!', 'See you at monday!'], tag: 'en-dates' },
      { t: 'mc', q: 'Para rechazar con cortesía dices…', o: ['Sorry, I can’t. Maybe another time.', 'No.', 'I don’t want you.'], tag: 'en-goingto' },
      { t: 'tr', nl: 'Voy a viajar la próxima semana.', a: ["I'm going to travel next week.", 'I am going to travel next week.'], tag: 'en-goingto' },
      { t: 'tr', nl: '¿Te gustaría ir al cine?', a: ['Would you like to go to the movies?', 'Do you want to go to the movies?', 'Would you like to go to the cinema?'], tag: 'en-goingto' },
      { t: 'tr', nl: 'Mi cumpleaños es en julio.', a: ['My birthday is in July.'], tag: 'en-dates' },
      { t: 'order', s: 'We are going to have a party on Saturday.', nl: 'Vamos a hacer una fiesta el sábado.', tag: 'en-goingto' },
      { t: 'match', p: [['Monday', 'lunes'], ['Thursday', 'jueves'], ['tomorrow', 'mañana'], ['tonight', 'esta noche'], ['busy', 'ocupado']], tag: 'en-dates' }
    ],
    reading: {
      t: 'Summer plans', type: 'Un correo',
      p: [
        ['Hi Megan! Great news: I’m going to visit you in New York in July! My flight is on July 10th.', '¡Hola, Megan! Buenas noticias: ¡voy a visitarte en Nueva York en julio! Mi vuelo es el 10 de julio.'],
        ['I’m going to stay for two weeks. I want to see Central Park and the Statue of Liberty. Are we going to see a show on Broadway?', 'Me voy a quedar dos semanas. Quiero ver Central Park y la Estatua de la Libertad. ¿Vamos a ver un espectáculo en Broadway?'],
        ['My brother is going to come too, but only for one week. Is that OK? Write back soon! Love, Daniela.', 'Mi hermano también va a venir, pero solo por una semana. ¿Está bien? ¡Contéstame pronto! Un abrazo, Daniela.']
      ],
      gl: [['great news', 'buenas noticias'], ['flight', 'vuelo'], ['stay', 'quedarse'], ['write back', 'contestar']],
      q: [
        { t: 'mc', q: 'When is Daniela’s flight?', o: ['On July 10th', 'On June 10th', 'On July 1st'] },
        { t: 'mc', q: 'How long is she going to stay?', o: ['Two weeks', 'One week', 'One month'] },
        { t: 'mc', q: 'Who is going to come too?', o: ['Her brother', 'Her mother', 'Megan’s brother'] }
      ]
    },
    say: [['What are you going to do on Saturday?', '¿Qué vas a hacer el sábado?'], ['Would you like to come to my party?', '¿Te gustaría venir a mi fiesta?'], ['I’d love to!', '¡Me encantaría!']],
    task: { nl: 'Escribe una invitación corta a una fiesta (día, hora, lugar) y cuenta tres cosas que vas a hacer la próxima semana.', model: "Would you like to come to my birthday party? It's on Friday, May 5th, at 8 p.m., at my house. Next week I'm going to work, visit my mom and go to the beach." },
    scenario: { nl: 'Invitas a una amiga de Nueva York a hacer algo el fin de semana.', role: 'You are Megan, a busy friend from New York. The learner invites you to do something this weekend. Ask questions (when, where, what time). Say no to the first idea and yes to the second.', goal: 'Invita a Megan, pon día y hora, y busca un plan que le guste.' }
  });
})(window.SPT);
