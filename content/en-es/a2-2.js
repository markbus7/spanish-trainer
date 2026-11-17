/* Inglés A2, unidades 6–10 (inglés estadounidense, explicaciones en español latinoamericano). Mismo formato que a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-pcont': 'pasado continuo (was doing)', 'en-when': 'when / while', 'en-will': 'will (futuro y predicciones)', 'en-future': 'will o going to',
    'en-haveto': 'have to / don’t have to', 'en-must': 'must / mustn’t', 'en-count': 'contables e incontables', 'en-much': 'much / many / a lot of',
    'en-if1': 'condicional (if + presente, will)', 'en-adv': 'adverbios (quickly, well…)'
  });

  /* ───────────────────────── A2 · 6 ───────────────────────── */
  U({
    id: 'en-a2-06', level: 'A2', icon: '📰', title: 'What happened?', nl: '¿Qué pasó?',
    goals: ['Usar el pasado continuo (was / were + -ing)', 'Contar una historia con when y while', 'Reaccionar a una noticia'],
    vocab: [
      ['happen', 'pasar / ocurrir'], ['accident', 'accidente'], ['break → broke', 'romper → rompí'], ['fall → fell', 'caer → caí'], ['drop', 'dejar caer'], ['lose → lost', 'perder → perdí'],
      ['find → found', 'encontrar → encontré'], ['ring → rang', 'sonar → sonó'], ['suddenly', 'de repente'], ['while', 'mientras'], ['when', 'cuando'], ['then', 'luego / entonces'],
      ['at that moment', 'en ese momento'], ['power outage', 'apagón'], ['storm', 'tormenta'], ['wallet', 'billetera'], ['keys', 'llaves'], ['stairs', 'escaleras'],
      ['scared', 'asustado'], ['lucky', 'afortunado / con suerte'], ['What a shame!', '¡Qué lástima!'], ['You’re kidding!', '¡No me digas!'], ['Are you OK?', '¿Estás bien?'], ['police officer', 'policía']
    ],
    grammar: [
      { t: 'Pasado continuo', es: 'Past continuous',
        html: `<p>Se forma con <b>was / were + verbo-ing</b>. Sirve para una acción <b>en progreso</b> en un momento del pasado: <i>At 8 o’clock I <b>was having</b> dinner.</i> (A las 8 estaba cenando.)</p>
<p>Negativa: <b>wasn’t / weren’t + -ing</b>. Pregunta: <i><b>What were you doing</b>?</i></p>`,
        table: [['persona', 'pasado continuo'], ['I / he / she / it', 'was working'], ['you / we / they', 'were working'], ['pregunta', 'Were you sleeping?']],
        sum: 'I was cooking. They were watching TV.',
        ex: [['What were you doing at ten last night?', '¿Qué estabas haciendo anoche a las diez?'], ['We were waiting for the bus.', 'Estábamos esperando el bus.']] },
      { t: 'When y while', es: 'When / while',
        html: `<p>Una acción larga (pasado continuo) se interrumpe por una acción corta (pasado simple):</p>
<p><i>I <b>was taking</b> a shower <b>when</b> the phone <b>rang</b>.</i> · <i><b>While</b> she <b>was walking</b> home, it <b>started</b> to rain.</i></p>
<p><b>while</b> va con la acción larga; <b>when</b> casi siempre con la acción corta.</p>`,
        table: [['acción larga', 'acción corta'], ['I was driving…', '…when I saw the accident.'], ['While we were eating…', '…the lights went out.']],
        ex: [['I was cooking when my friend called.', 'Estaba cocinando cuando me llamó mi amigo.'], ['While I was sleeping, someone took my car.', 'Mientras dormía, alguien se llevó mi carro.']] },
      { t: 'Reaccionar a una historia', es: 'Reacting',
        html: `<p>Cuando alguien te cuenta algo, en inglés se reacciona mucho: <b>Really?</b> · <b>Oh no!</b> · <b>What a shame!</b> · <b>You’re kidding!</b> · <b>That’s amazing!</b> · <b>What happened next?</b></p>`,
        table: [['situación', 'reacción'], ['una mala noticia', 'Oh no! I’m sorry.'], ['algo sorprendente', 'No way! / You’re kidding!'], ['quieres saber más', 'What happened next?']],
        ex: [['I lost my wallet. — Oh no! Did you find it?', 'Perdí mi billetera. — ¡Ay, no! ¿La encontraste?'], ['I met Shakira at the airport! — You’re kidding!', '¡Conocí a Shakira en el aeropuerto! — ¡No me digas!']] }
    ],
    dialogue: {
      t: 'The power outage', place: 'Tampa, Florida 🇺🇸',
      lines: [
        ['Kim', 'Did you hear about the power outage last night?', '¿Supiste del apagón de anoche?'],
        ['Andrés', 'Hear about it? I was in the elevator when the lights went out!', '¿Que si supe? ¡Estaba en el ascensor cuando se fue la luz!'],
        ['Kim', 'You’re kidding! What happened?', '¡No me digas! ¿Qué pasó?'],
        ['Andrés', 'I was going up to my apartment. Suddenly everything stopped.', 'Iba subiendo a mi apartamento. De repente todo se detuvo.'],
        ['Kim', 'Oh no! Were you scared?', '¡Ay, no! ¿Tenías miedo?'],
        ['Andrés', 'A little. I called the building manager, but he wasn’t answering.', 'Un poco. Llamé al administrador del edificio, pero no contestaba.'],
        ['Kim', 'How long were you there?', '¿Cuánto tiempo estuviste ahí?'],
        ['Andrés', 'About forty minutes. While I was waiting, I played games on my phone.', 'Unos cuarenta minutos. Mientras esperaba, jugué en el celular.'],
        ['Kim', 'Well, at least you were lucky your battery was full!', '¡Bueno, por lo menos tuviste suerte de que tu batería estaba llena!']
      ],
      q: [
        { t: 'mc', q: 'Where was Andrés when the lights went out?', o: ['In the elevator', 'In the shower', 'In his car'] },
        { t: 'mc', q: 'How long was he there?', o: ['About forty minutes', 'Four hours', 'Five minutes'] },
        { t: 'mc', q: 'What did he do while he was waiting?', o: ['He played games on his phone', 'He slept', 'He read a book'] }
      ]
    },
    culture: { t: 'Huracanes en Florida', html: `<p>En Florida la temporada de huracanes va de junio a noviembre. Cuando viene una tormenta grande, la gente compra agua, baterías y comida, y a veces hay apagones (<b>power outages</b>) de varios días.</p>
<p>🌀 En las noticias vas a oír: <i>«The storm is moving north. Stay inside and stay safe.»</i></p>` },
    ex: [
      { t: 'cloze', s: 'At 8 p.m. I ___ having dinner.', a: ['was'], o: ['was', 'were', 'did'], nl: 'A las 8 de la noche estaba cenando.', tag: 'en-pcont' },
      { t: 'cloze', s: 'They ___ watching TV when I arrived.', a: ['were'], o: ['were', 'was', 'are'], nl: 'Estaban viendo televisión cuando llegué.', tag: 'en-pcont' },
      { t: 'cloze', s: 'I was taking a shower when the phone ___. (ring)', a: ['rang'], o: ['rang', 'was ringing', 'ringed'], nl: 'Me estaba bañando cuando sonó el teléfono.', tag: 'en-when' },
      { t: 'cloze', s: '___ I was walking home, it started to rain.', a: ['While'], o: ['While', 'When', 'During'], nl: 'Mientras caminaba a casa, empezó a llover.', tag: 'en-when' },
      { t: 'cloze', s: 'What ___ you doing at ten last night?', a: ['were'], o: ['were', 'was', 'did'], nl: '¿Qué estabas haciendo anoche a las diez?', tag: 'en-pcont' },
      { t: 'cloze', s: 'She ___ down the stairs and broke her arm. (fall)', a: ['fell'], o: ['fell', 'falled', 'was falling'], nl: 'Se cayó por las escaleras y se rompió el brazo.', tag: 'en-when' },
      { t: 'mc', q: 'Tu amigo dice «I lost my wallet». Contestas…', o: ['Oh no! Did you find it?', 'Congratulations!', 'Have fun!'], tag: 'en-when' },
      { t: 'mc', q: '«de repente» es…', o: ['suddenly', 'sudden', 'in repent'], tag: 'en-when' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['I was driving when I saw the accident.', 'I drove when I was seeing the accident.', 'I was drive when I saw the accident.'], tag: 'en-when' },
      { t: 'tr', nl: 'Estábamos esperando el bus.', a: ['We were waiting for the bus.'], tag: 'en-pcont' },
      { t: 'tr', nl: '¿Qué pasó?', a: ['What happened?'], tag: 'en-when' },
      { t: 'tr', nl: 'Estaba cocinando cuando me llamó mi amiga.', a: ['I was cooking when my friend called.', 'I was cooking when my friend called me.'], tag: 'en-when' },
      { t: 'tr', nl: 'Perdí mis llaves.', a: ['I lost my keys.'], tag: 'en-when' },
      { t: 'order', s: 'While we were eating, the lights went out.', nl: 'Mientras comíamos, se fue la luz.', tag: 'en-when' },
      { t: 'match', p: [['happen', 'pasar'], ['storm', 'tormenta'], ['wallet', 'billetera'], ['scared', 'asustado'], ['lucky', 'con suerte']], tag: 'en-pcont' }
    ],
    reading: {
      t: 'Honest taxi driver returns $10,000', type: 'Una noticia',
      p: [
        ['Last Tuesday, taxi driver Sam Ortiz was cleaning his car when he found a black bag under the back seat. Inside there was $10,000 in cash.', 'El martes pasado, el taxista Sam Ortiz estaba limpiando su carro cuando encontró una bolsa negra debajo del asiento de atrás. Adentro había 10 000 dólares en efectivo.'],
        ['"I was shaking," Ortiz said. "At that moment I remembered my last passenger. She was talking about her wedding while I was driving."', '«Estaba temblando», dijo Ortiz. «En ese momento me acordé de mi última pasajera. Ella hablaba de su boda mientras yo manejaba».'],
        ['Ortiz drove to the police station. Two hours later the woman arrived. She was crying, but now she was happy. The money was for her wedding party.', 'Ortiz manejó hasta la estación de policía. Dos horas después llegó la mujer. Estaba llorando, pero ahora de felicidad. El dinero era para su fiesta de boda.']
      ],
      gl: [['back seat', 'asiento de atrás'], ['cash', 'efectivo'], ['shaking', 'temblando'], ['wedding', 'boda']],
      q: [
        { t: 'mc', q: 'What was Sam doing when he found the bag?', o: ['Cleaning his car', 'Driving', 'Sleeping'] },
        { t: 'mc', q: 'What was the money for?', o: ['A wedding party', 'A new car', 'A trip'] },
        { t: 'mc', q: 'Where did Sam take the bag?', o: ['To the police station', 'To his home', 'To a bank'] }
      ]
    },
    say: [['What were you doing?', '¿Qué estabas haciendo?'], ['I was sleeping when the phone rang.', 'Estaba durmiendo cuando sonó el teléfono.'], ['You’re kidding! What happened next?', '¡No me digas! ¿Y qué pasó después?']],
    task: { nl: 'Cuenta algo raro o divertido que te pasó. Usa el pasado continuo para el fondo y el pasado simple para lo que pasó de repente.', model: "Last year I was walking in the park with my dog. It was sunny and people were playing soccer. Suddenly a ball hit my head! A man ran to me and said sorry. Now he is my boyfriend." },
    scenario: { nl: 'Un amigo te cuenta una historia y luego te toca a ti.', role: 'You are Kim, a friend from Tampa. Tell a short story about a power outage, then ask the learner what they were doing at a specific moment and ask for a story. React a lot (Really? Oh no! You’re kidding!).', goal: 'Escucha su historia, reacciona y cuenta una historia tuya.' }
  });

  /* ───────────────────────── A2 · 7 ───────────────────────── */
  U({
    id: 'en-a2-07', level: 'A2', icon: '🔮', title: 'The future', nl: 'El futuro',
    goals: ['Hacer predicciones con will', 'Ofrecer y prometer con will', 'Elegir entre will y going to'],
    vocab: [
      ['will / won’t', 'futuro / no (en futuro)'], ['probably', 'probablemente'], ['maybe', 'tal vez'], ['definitely', 'definitivamente / seguro'], ['I think…', 'creo que…'],
      ['I hope…', 'espero que…'], ['future', 'futuro'], ['robot', 'robot'], ['electric car', 'carro eléctrico'], ['the moon', 'la luna'], ['planet', 'planeta'], ['climate', 'clima'],
      ['world', 'mundo'], ['change', 'cambiar'], ['become', 'llegar a ser'], ['get married', 'casarse'], ['retire', 'jubilarse'], ['promise', 'prometer'], ['help', 'ayudar'],
      ['I’ll call you later.', 'Te llamo más tarde.'], ['someday', 'algún día'], ['in ten years', 'dentro de diez años'], ['soon', 'pronto'], ['forecast', 'pronóstico']
    ],
    grammar: [
      { t: 'Will: predicciones', es: 'Will for predictions',
        html: `<p><b>will + verbo</b> (sin <i>to</i>) es igual para todas las personas. Sirve para predicciones y opiniones sobre el futuro: <i>I think robots <b>will do</b> a lot of jobs.</i></p>
<p>Forma corta: I’ll, she’ll, it’ll. Negativa: <b>won’t</b> (= will not). Muchas veces va con <i>I think, probably, maybe</i>.</p>`,
        table: [['', 'ejemplo'], ['afirmativa', 'It will rain tomorrow.'], ['negativa', 'It won’t be easy.'], ['pregunta', 'Will you be at home?'], ['respuesta corta', 'Yes, I will. / No, I won’t.']],
        sum: 'I think it will rain. It won’t be easy.',
        ex: [['In ten years, everybody will have an electric car.', 'Dentro de diez años todo el mundo tendrá un carro eléctrico.'], ['Don’t worry, you won’t be late.', 'No te preocupes, no vas a llegar tarde.']] },
      { t: 'Will: decisiones rápidas, ofrecer y prometer', es: 'Offers and promises',
        html: `<p>También usamos <b>will</b> cuando decidimos algo <b>en el momento</b>, para ofrecer ayuda o para prometer:</p>
<p><i>The phone is ringing. — <b>I’ll get</b> it!</i> · <i>That bag looks heavy. <b>I’ll help</b> you.</i> · <i>I promise <b>I’ll call</b> you tonight.</i></p>`,
        table: [['situación', 'ejemplo'], ['decisión rápida', 'I’ll have the chicken, please.'], ['ofrecer', 'I’ll carry it for you.'], ['prometer', 'I won’t tell anyone.']],
        ex: [['It’s cold. — I’ll close the window.', 'Hace frío. — Cierro la ventana.'], ['I promise I won’t be late again.', 'Te prometo que no voy a llegar tarde otra vez.']] },
      { t: '¿Will o going to?', es: 'Will vs. going to',
        html: `<p><b>going to</b> = un plan que ya decidiste antes: <i>I’m going to visit my aunt next week.</i></p>
<p><b>will</b> = predicción, opinión o decisión en el momento: <i>Maybe I’ll visit her too.</i></p>
<p>Si ves una señal clara de que algo va a pasar, se usa going to: <i>Look at those clouds! It’s <b>going to</b> rain.</i></p>`,
        table: [['going to', 'will'], ['We’re going to get married in May. (plan)', 'I think they’ll be very happy. (opinión)'], ['Look! He’s going to fall!', 'He’ll probably be fine.']],
        ex: [['I’m going to study medicine. I think I’ll be a good doctor.', 'Voy a estudiar medicina. Creo que seré una buena doctora.'], ['Watch out! You’re going to drop it!', '¡Cuidado! ¡Se te va a caer!']] }
    ],
    dialogue: {
      t: 'The fortune teller', place: 'New Orleans 🇺🇸',
      lines: [
        ['Madame Lulu', 'Sit down, my dear. Give me your hand…', 'Siéntate, querida. Dame tu mano…'],
        ['Valeria', 'OK… What do you see? Will I be rich?', 'Bueno… ¿Qué ves? ¿Voy a ser rica?'],
        ['Madame Lulu', 'Hmm. You won’t be rich, but you’ll be very happy.', 'Mmm. No vas a ser rica, pero vas a ser muy feliz.'],
        ['Valeria', 'And love? Will I get married?', '¿Y el amor? ¿Me voy a casar?'],
        ['Madame Lulu', 'Yes, you will. I see a tall man… He’ll cook for you every day.', 'Sí. Veo a un hombre alto… Va a cocinar para ti todos los días.'],
        ['Valeria', 'That sounds perfect! Will I travel a lot?', '¡Eso suena perfecto! ¿Voy a viajar mucho?'],
        ['Madame Lulu', 'Definitely. Next year you’ll go to a cold country.', 'Definitivamente. El próximo año vas a ir a un país frío.'],
        ['Valeria', 'Well, I’m going to visit my sister in Canada in January!', '¡Bueno, en enero voy a visitar a mi hermana en Canadá!'],
        ['Madame Lulu', 'You see? Madame Lulu is never wrong. That’ll be twenty dollars.', '¿Ves? Madame Lulu nunca se equivoca. Son veinte dólares.']
      ],
      q: [
        { t: 'mc', q: 'Will Valeria be rich?', o: ['No, but she’ll be happy', 'Yes, very rich', 'Madame Lulu doesn’t know'] },
        { t: 'mc', q: 'What will the tall man do?', o: ['Cook for her every day', 'Travel with her', 'Buy her a house'] },
        { t: 'mc', q: 'Where is Valeria going in January?', o: ['To Canada', 'To New Orleans', 'To Mexico'] }
      ]
    },
    culture: { t: 'New Orleans', html: `<p>New Orleans, en Luisiana, es famosa por el <b>jazz</b>, el <b>Mardi Gras</b> (su carnaval) y su mezcla de culturas francesa, africana, española y caribeña. En la plaza Jackson Square hay lectoras de cartas y de la mano.</p>
<p>🎷 Prueba el <i>gumbo</i> y los <i>beignets</i>, unas donas cuadradas con mucha azúcar.</p>` },
    ex: [
      { t: 'cloze', s: 'I think it ___ rain tomorrow.', a: ['will'], o: ['will', 'is', 'going'], nl: 'Creo que mañana va a llover.', tag: 'en-will' },
      { t: 'cloze', s: 'Don’t worry. It ___ be difficult.', a: ['won’t'], o: ['won’t', 'willn’t', 'doesn’t'], nl: 'No te preocupes. No va a ser difícil.', tag: 'en-will' },
      { t: 'cloze', s: 'The phone is ringing. — I’ll ___ it!', a: ['get'], o: ['get', 'to get', 'getting'], nl: 'Está sonando el teléfono. — ¡Yo contesto!', tag: 'en-will' },
      { t: 'cloze', s: 'We’re ___ to get married in May. (plan)', a: ['going'], o: ['going', 'will', 'go'], nl: 'Nos vamos a casar en mayo.', tag: 'en-future' },
      { t: 'cloze', s: 'Look at those clouds! It’s going to ___.', a: ['rain'], o: ['rain', 'raining', 'rains'], nl: '¡Mira esas nubes! Va a llover.', tag: 'en-future' },
      { t: 'cloze', s: 'I promise I ___ call you tonight.', a: ['will'], o: ['will', 'am', 'going'], nl: 'Te prometo que te llamo esta noche.', tag: 'en-will' },
      { t: 'cloze', s: '___ you be at home this evening?', a: ['Will'], o: ['Will', 'Do', 'Are'], nl: '¿Vas a estar en casa esta noche?', tag: 'en-will' },
      { t: 'mc', q: 'En el restaurante decides en el momento. Dices…', o: ['I’ll have the fish, please.', 'I’m going to have the fish yesterday.', 'I have the fish tomorrow.'], tag: 'en-future' },
      { t: 'mc', q: '«Te ayudo» (ofreces ayuda) es…', o: ['I’ll help you.', 'I help you yesterday.', 'I’m helping you last week.'], tag: 'en-will' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['She will be a great doctor.', 'She will to be a great doctor.', 'She wills be a great doctor.'], tag: 'en-will' },
      { t: 'tr', nl: 'Creo que va a llover.', a: ['I think it will rain.', "I think it'll rain.", "I think it's going to rain."], tag: 'en-will' },
      { t: 'tr', nl: 'Te llamo más tarde.', a: ["I'll call you later.", 'I will call you later.'], tag: 'en-will' },
      { t: 'tr', nl: 'Voy a visitar a mi hermana el próximo mes.', a: ["I'm going to visit my sister next month.", 'I am going to visit my sister next month.'], tag: 'en-future' },
      { t: 'tr', nl: 'No va a ser fácil.', a: ["It won't be easy.", 'It will not be easy.'], tag: 'en-will' },
      { t: 'order', s: 'I think robots will do a lot of jobs.', nl: 'Creo que los robots harán muchos trabajos.', tag: 'en-will' },
      { t: 'match', p: [['probably', 'probablemente'], ['someday', 'algún día'], ['retire', 'jubilarse'], ['promise', 'prometer'], ['forecast', 'pronóstico']], tag: 'en-will' }
    ],
    reading: {
      t: 'Life in 2050', type: 'Un artículo de opinión',
      p: [
        ['What will life be like in 2050? Nobody knows for sure, but experts have some ideas.', '¿Cómo será la vida en 2050? Nadie lo sabe con seguridad, pero los expertos tienen algunas ideas.'],
        ['Most people will drive electric cars, and many cars will drive themselves. Robots will probably clean our homes and cook our food.', 'La mayoría de la gente manejará carros eléctricos, y muchos carros se manejarán solos. Probablemente los robots limpiarán nuestras casas y cocinarán nuestra comida.'],
        ['But there will also be problems. The climate will be hotter, and some cities near the ocean will have more floods. "We won’t stop climate change," says one scientist, "but we can make it slower."', 'Pero también habrá problemas. El clima será más caliente, y algunas ciudades cerca del océano tendrán más inundaciones. «No vamos a detener el cambio climático», dice una científica, «pero podemos hacerlo más lento».']
      ],
      gl: [['for sure', 'con seguridad'], ['drive themselves', 'se manejan solos'], ['floods', 'inundaciones'], ['scientist', 'científico / científica']],
      q: [
        { t: 'mc', q: 'What kind of cars will most people drive?', o: ['Electric cars', 'Old cars', 'No cars'] },
        { t: 'mc', q: 'What will robots probably do?', o: ['Clean our homes and cook', 'Teach in schools', 'Drive buses'] },
        { t: 'mc', q: 'What problem will some cities have?', o: ['More floods', 'More snow', 'No electricity'] }
      ]
    },
    say: [['I think it will be sunny tomorrow.', 'Creo que mañana va a hacer sol.'], ['I’ll help you!', '¡Te ayudo!'], ['I’m going to visit my family next month.', 'El próximo mes voy a visitar a mi familia.']],
    task: { nl: 'Escribe 5 predicciones sobre tu vida dentro de 10 años. Usa will, won’t, probably y maybe.', model: "In ten years I'll probably live in a bigger house. I think I'll speak English very well. Maybe I'll have two kids. I won't work in an office. I'll travel a lot." },
    scenario: { nl: 'Una adivina de New Orleans te lee la mano.', role: 'You are Madame Lulu, a funny fortune teller in New Orleans. Make predictions about the learner’s future with will and won’t (love, money, travel, work). Ask about their plans with going to.', goal: 'Pregúntale por tu futuro y cuéntale tus planes con going to.' }
  });

  /* ───────────────────────── A2 · 8 ───────────────────────── */
  U({
    id: 'en-a2-08', level: 'A2', icon: '💼', title: 'At work', nl: 'En el trabajo',
    goals: ['Hablar de tu trabajo y tus tareas', 'Usar have to, don’t have to y must', 'Hacer una entrevista de trabajo sencilla'],
    vocab: [
      ['job', 'trabajo / empleo'], ['boss', 'jefe / jefa'], ['coworker', 'compañero de trabajo'], ['customer', 'cliente'], ['company', 'empresa'], ['office', 'oficina'], ['meeting', 'reunión'],
      ['salary', 'salario / sueldo'], ['full-time', 'tiempo completo'], ['part-time', 'medio tiempo'], ['shift', 'turno'], ['overtime', 'horas extra'], ['day off', 'día libre'],
      ['apply for a job', 'solicitar un empleo'], ['interview', 'entrevista'], ['résumé', 'currículum / hoja de vida'], ['experience', 'experiencia'], ['skills', 'habilidades'],
      ['hire', 'contratar'], ['quit', 'renunciar'], ['nurse', 'enfermero / enfermera'], ['engineer', 'ingeniero'], ['cashier', 'cajero'], ['uniform', 'uniforme']
    ],
    grammar: [
      { t: 'Have to: obligación', es: 'Have to / has to',
        html: `<p><b>have to / has to + verbo</b> = tener que: <i>I <b>have to</b> wear a uniform.</i> · <i>She <b>has to</b> work on Saturdays.</i></p>
<p>Pregunta: <i><b>Do</b> you <b>have to</b> work tomorrow?</i> Pasado: <b>had to</b>: <i>I <b>had to</b> work late yesterday.</i></p>`,
        table: [['persona', 'have to'], ['I / you / we / they', 'have to'], ['he / she / it', 'has to'], ['pregunta', 'Do you have to…? / Does she have to…?'], ['pasado', 'had to']],
        sum: 'I have to work. She has to wear a uniform.',
        ex: [['Nurses have to work at night sometimes.', 'Los enfermeros a veces tienen que trabajar de noche.'], ['Does he have to travel for work?', '¿Él tiene que viajar por el trabajo?']] },
      { t: 'Don’t have to y mustn’t', es: 'Don’t have to vs. mustn’t',
        html: `<p>¡Ojo, no son lo mismo!</p>
<p><b>don’t have to</b> = no hace falta, no es necesario: <i>You <b>don’t have to</b> wear a tie.</i> (puedes, pero no es necesario)</p>
<p><b>mustn’t</b> = está prohibido: <i>You <b>mustn’t</b> smoke here.</i> <b>must</b> es más formal que have to y se ve mucho en letreros y reglas.</p>`,
        table: [['inglés', 'español'], ['You have to sign here.', 'Tienes que firmar aquí.'], ['You don’t have to pay.', 'No tienes que pagar (no hace falta).'], ['You mustn’t park here.', 'No puedes estacionar aquí (prohibido).']],
        ex: [['On Fridays we don’t have to wear a suit.', 'Los viernes no tenemos que usar traje.'], ['Employees must wash their hands.', 'Los empleados deben lavarse las manos.']] },
      { t: 'Hablar de tu trabajo', es: 'Talking about your job',
        html: `<p>Preguntas típicas: <b>What do you do?</b> (¿a qué te dedicas?) — <i>I’m a nurse.</i> / <i>I work <b>for</b> a bank.</i> / <i>I work <b>in</b> sales.</i></p>
<p>Ojo: en inglés el trabajo lleva <b>a / an</b>: <i>I’m <b>an</b> engineer</i>, no <s>I’m engineer</s>.</p>`,
        table: [['pregunta', 'respuesta'], ['What do you do?', 'I’m a cashier.'], ['Where do you work?', 'I work for a hotel.'], ['Do you like your job?', 'Yes, but I work long hours.']],
        ex: [['I work part-time in a restaurant.', 'Trabajo medio tiempo en un restaurante.'], ['My sister is an engineer at the Panama Canal.', 'Mi hermana es ingeniera en el Canal de Panamá.']] }
    ],
    dialogue: {
      t: 'The job interview', place: 'Atlanta, Georgia 🇺🇸',
      lines: [
        ['Mr. Green', 'Good morning. Please, have a seat. Tell me about yourself.', 'Buenos días. Siéntese, por favor. Hábleme de usted.'],
        ['Paola', 'I’m from Panama. I studied tourism and I worked at a hotel for three years.', 'Soy de Panamá. Estudié turismo y trabajé en un hotel tres años.'],
        ['Mr. Green', 'Great. In this job you have to speak with customers all day. Is that OK?', 'Excelente. En este trabajo tiene que hablar con clientes todo el día. ¿Está bien?'],
        ['Paola', 'Yes, I love working with people. Do I have to work weekends?', 'Sí, me encanta trabajar con gente. ¿Tengo que trabajar los fines de semana?'],
        ['Mr. Green', 'One weekend a month. And sometimes you have to work the night shift.', 'Un fin de semana al mes. Y a veces tiene que hacer el turno de noche.'],
        ['Paola', 'No problem. Do I have to wear a uniform?', 'No hay problema. ¿Tengo que usar uniforme?'],
        ['Mr. Green', 'Yes, but you don’t have to buy it. We give you two.', 'Sí, pero no tiene que comprarlo. Le damos dos.'],
        ['Paola', 'Perfect. When will I know your decision?', 'Perfecto. ¿Cuándo sabré su decisión?'],
        ['Mr. Green', 'We’ll call you on Friday. Thank you for coming.', 'La llamamos el viernes. Gracias por venir.']
      ],
      q: [
        { t: 'mc', q: 'Where did Paola work before?', o: ['At a hotel', 'At a bank', 'At a hospital'] },
        { t: 'mc', q: 'How often does she have to work weekends?', o: ['One weekend a month', 'Every weekend', 'Never'] },
        { t: 'mc', q: 'Does she have to buy the uniform?', o: ['No, she doesn’t', 'Yes, two', 'Yes, one'] }
      ]
    },
    culture: { t: 'La entrevista de trabajo en EE. UU.', html: `<p>En Estados Unidos el currículum (<b>résumé</b>) normalmente <b>no lleva foto</b>, ni edad, ni estado civil. Es corto: una página.</p>
<p>🤝 En la entrevista es importante dar la mano con firmeza, mirar a los ojos y hablar de tus logros con seguridad. Al final, es normal preguntar: <i>What are the next steps?</i></p>` },
    ex: [
      { t: 'cloze', s: 'I ___ to wear a uniform at work.', a: ['have'], o: ['have', 'has', 'must'], nl: 'Tengo que usar uniforme en el trabajo.', tag: 'en-haveto' },
      { t: 'cloze', s: 'She ___ to work on Saturdays.', a: ['has'], o: ['has', 'have', 'is'], nl: 'Ella tiene que trabajar los sábados.', tag: 'en-haveto' },
      { t: 'cloze', s: '___ you have to work tomorrow?', a: ['Do'], o: ['Do', 'Have', 'Are'], nl: '¿Tienes que trabajar mañana?', tag: 'en-haveto' },
      { t: 'cloze', s: 'It’s free. You ___ have to pay.', a: ['don’t'], o: ['don’t', 'mustn’t', 'haven’t'], nl: 'Es gratis. No tienes que pagar.', tag: 'en-must' },
      { t: 'cloze', s: 'You ___ smoke in the hospital. (prohibido)', a: ['mustn’t'], o: ['mustn’t', 'don’t have to', 'have to'], nl: 'No se puede fumar en el hospital.', tag: 'en-must' },
      { t: 'cloze', s: 'Yesterday I ___ to work late. (pasado)', a: ['had'], o: ['had', 'have', 'has'], nl: 'Ayer tuve que trabajar hasta tarde.', tag: 'en-haveto' },
      { t: 'cloze', s: 'My brother is ___ engineer.', a: ['an'], o: ['an', 'a', '—'], nl: 'Mi hermano es ingeniero.', tag: 'en-haveto' },
      { t: 'mc', q: '«¿A qué te dedicas?» es…', o: ['What do you do?', 'What do you dedicate?', 'What is your do?'], tag: 'en-haveto' },
      { t: 'mc', q: '«You don’t have to come» significa…', o: ['No hace falta que vengas.', 'Está prohibido venir.', 'Tienes que venir.'], tag: 'en-must' },
      { t: 'mc', q: '«renunciar» es…', o: ['quit', 'hire', 'retire'], tag: 'en-haveto' },
      { t: 'tr', nl: 'Tengo que trabajar el sábado.', a: ['I have to work on Saturday.', 'I have to work Saturday.', 'I have to work this Saturday.'], tag: 'en-haveto' },
      { t: 'tr', nl: 'Soy enfermera.', a: ["I'm a nurse.", 'I am a nurse.'], tag: 'en-haveto' },
      { t: 'tr', nl: 'No tienes que usar corbata.', a: ["You don't have to wear a tie.", 'You do not have to wear a tie.'], tag: 'en-must' },
      { t: 'tr', nl: 'Trabajo medio tiempo.', a: ['I work part-time.', 'I work part time.'], tag: 'en-haveto' },
      { t: 'order', s: 'Does she have to work at night?', nl: '¿Ella tiene que trabajar de noche?', tag: 'en-haveto' },
      { t: 'match', p: [['boss', 'jefe'], ['salary', 'sueldo'], ['shift', 'turno'], ['hire', 'contratar'], ['meeting', 'reunión']], tag: 'en-haveto' }
    ],
    reading: {
      t: 'Job ad: Front Desk Agent', type: 'Un anuncio de trabajo',
      p: [
        ['Sunshine Hotel, Orlando, is hiring! We are looking for a friendly Front Desk Agent. Full-time, $18 an hour.', '¡El Sunshine Hotel de Orlando está contratando! Buscamos un recepcionista amable. Tiempo completo, 18 dólares la hora.'],
        ['You have to speak English and Spanish. You must have one year of experience in a hotel or a store. You don’t have to have a college degree.', 'Tienes que hablar inglés y español. Debes tener un año de experiencia en un hotel o una tienda. No hace falta tener título universitario.'],
        ['You will have to work some weekends and holidays. We offer free parking, health insurance and two weeks of vacation. Send your résumé to jobs@sunshinehotel.example.', 'Tendrás que trabajar algunos fines de semana y feriados. Ofrecemos estacionamiento gratis, seguro médico y dos semanas de vacaciones. Envía tu currículum a jobs@sunshinehotel.example.']
      ],
      gl: [['front desk', 'recepción'], ['an hour', 'por hora'], ['college degree', 'título universitario'], ['holidays', 'feriados']],
      q: [
        { t: 'mc', q: 'What languages do you have to speak?', o: ['English and Spanish', 'Only English', 'English and French'] },
        { t: 'mc', q: 'Do you need a college degree?', o: ['No, you don’t', 'Yes, you must', 'Yes, in tourism'] },
        { t: 'mc', q: 'What does the hotel offer?', o: ['Free parking and health insurance', 'A free car', 'Free hotel rooms'] }
      ]
    },
    say: [['What do you do?', '¿A qué te dedicas?'], ['I have to work on Saturdays.', 'Tengo que trabajar los sábados.'], ['You don’t have to pay.', 'No tienes que pagar.']],
    task: { nl: 'Describe tu trabajo (o un trabajo que te gustaría): qué haces, qué tienes que hacer y qué no hace falta hacer.', model: "I'm a receptionist at a dental clinic. I have to answer the phone and make appointments. I have to start at 8 a.m. I don't have to work on weekends. I like my job because my coworkers are nice." },
    scenario: { nl: 'Tienes una entrevista de trabajo en un hotel de Atlanta.', role: 'You are Mr. Green, a hotel manager in Atlanta. Do a simple job interview: ask about experience, skills and availability. Explain what the employee has to do and doesn’t have to do.', goal: 'Habla de tu experiencia y pregunta por el horario y el uniforme.' }
  });

  /* ───────────────────────── A2 · 9 ───────────────────────── */
  U({
    id: 'en-a2-09', level: 'A2', icon: '🍳', title: 'Let’s cook!', nl: '¡A cocinar!',
    goals: ['Distinguir sustantivos contables e incontables', 'Usar much, many, a lot of, a few y a little', 'Entender y dar una receta'],
    vocab: [
      ['flour', 'harina'], ['sugar', 'azúcar'], ['salt', 'sal'], ['pepper', 'pimienta'], ['butter', 'mantequilla'], ['oil', 'aceite'], ['rice', 'arroz'], ['beans', 'frijoles'],
      ['onion', 'cebolla'], ['garlic', 'ajo'], ['tomato', 'tomate'], ['egg', 'huevo'], ['cheese', 'queso'], ['a cup of', 'una taza de'], ['a spoonful of', 'una cucharada de'],
      ['a pinch of', 'una pizca de'], ['chop', 'picar'], ['fry', 'freír'], ['boil', 'hervir'], ['bake', 'hornear'], ['mix', 'mezclar'], ['add', 'añadir / agregar'],
      ['pan', 'sartén'], ['pot', 'olla'], ['oven', 'horno'], ['recipe', 'receta']
    ],
    grammar: [
      { t: 'Contables e incontables', es: 'Countable / uncountable',
        html: `<p><b>Contables</b>: se pueden contar y tienen plural: <i>an egg, two eggs, an onion, three onions</i>.</p>
<p><b>Incontables</b>: no tienen plural ni llevan <i>a/an</i>: <i>rice, sugar, water, money, bread</i>. Para contarlos se usa una medida: <i><b>a cup of</b> rice</i>, <i><b>a piece of</b> bread</i>, <i><b>a bottle of</b> water</i>.</p>`,
        table: [['contable', 'incontable'], ['an egg / eggs', 'rice'], ['a tomato / tomatoes', 'cheese'], ['a cookie / cookies', 'bread → a piece of bread']],
        sum: 'Two eggs, a cup of rice, some cheese.',
        ex: [['We need two onions and a cup of rice.', 'Necesitamos dos cebollas y una taza de arroz.'], ['Can I have some water, please?', '¿Me das un poco de agua, por favor?']] },
      { t: 'Much, many, a lot of', es: 'Much / many / a lot of',
        html: `<p><b>many</b> + contables (plural): <i>How <b>many</b> eggs?</i> · <b>much</b> + incontables: <i>How <b>much</b> sugar?</i></p>
<p>En frases afirmativas se usa mucho <b>a lot of</b> con los dos: <i>There’s <b>a lot of</b> rice. There are <b>a lot of</b> beans.</i></p>
<p>Poco: <b>a few</b> + contables (<i>a few tomatoes</i>), <b>a little</b> + incontables (<i>a little salt</i>).</p>`,
        table: [['', 'contables', 'incontables'], ['¿cuánto?', 'How many eggs?', 'How much milk?'], ['mucho', 'a lot of / many eggs', 'a lot of / much milk'], ['un poco', 'a few eggs', 'a little milk']],
        ex: [['How much salt do I add? — Just a little.', '¿Cuánta sal le pongo? — Solo un poco.'], ['I don’t have many eggs.', 'No tengo muchos huevos.']] },
      { t: 'Some y any', es: 'Some / any',
        html: `<p><b>some</b> en frases afirmativas: <i>I bought <b>some</b> cheese.</i> · <b>any</b> en negativas y preguntas: <i>We don’t have <b>any</b> butter. Do we have <b>any</b> eggs?</i></p>
<p>Para ofrecer o pedir algo se usa <b>some</b> también en preguntas: <i>Would you like <b>some</b> coffee?</i></p>`,
        table: [['afirmativa', 'negativa', 'pregunta'], ['There’s some milk.', 'There isn’t any milk.', 'Is there any milk?'], ['I have some eggs.', 'I don’t have any eggs.', 'Do you have any eggs?']],
        ex: [['There aren’t any tomatoes. I’ll go to the store.', 'No hay tomates. Voy a la tienda.'], ['Would you like some rice and beans?', '¿Quieres un poco de arroz con frijoles?']] }
    ],
    dialogue: {
      t: 'Cooking sancocho', place: 'Brooklyn, New York 🇺🇸',
      lines: [
        ['Tyler', 'So, what do we need for this Panamanian soup?', 'Entonces, ¿qué necesitamos para esta sopa panameña?'],
        ['Itzel', 'For sancocho we need chicken, yuca, an onion, some garlic and a lot of culantro.', 'Para el sancocho necesitamos pollo, yuca, una cebolla, un poco de ajo y bastante culantro.'],
        ['Tyler', 'How much chicken?', '¿Cuánto pollo?'],
        ['Itzel', 'About two pounds. Are there any onions?', 'Como dos libras. ¿Hay cebollas?'],
        ['Tyler', 'There are a few. But there isn’t any yuca.', 'Hay algunas. Pero no hay yuca.'],
        ['Itzel', 'No problem. There’s a Latin store on the corner. I’ll buy some.', 'No hay problema. Hay una tienda latina en la esquina. Voy a comprar.'],
        ['Tyler', 'What do I do first?', '¿Qué hago primero?'],
        ['Itzel', 'Chop the onion and the garlic. Then boil the chicken in a big pot with a little salt.', 'Pica la cebolla y el ajo. Luego hierve el pollo en una olla grande con un poco de sal.'],
        ['Tyler', 'How many people will eat this? It’s a huge pot!', '¿Cuántas personas van a comer esto? ¡Es una olla enorme!'],
        ['Itzel', 'Panamanians always cook a lot of food. Your friends will love it!', 'Los panameños siempre cocinamos mucha comida. ¡A tus amigos les va a encantar!']
      ],
      q: [
        { t: 'mc', q: 'What don’t they have?', o: ['Yuca', 'Onions', 'Chicken'] },
        { t: 'mc', q: 'How much chicken do they need?', o: ['About two pounds', 'One pound', 'Five pounds'] },
        { t: 'mc', q: 'What does Tyler have to do first?', o: ['Chop the onion and the garlic', 'Boil the yuca', 'Go to the store'] }
      ]
    },
    culture: { t: 'Libras, onzas y tazas', html: `<p>En Estados Unidos no se usan kilos ni litros en la cocina. Se usan <b>pounds</b> (libras, 1 lb ≈ 450 g), <b>ounces</b> (onzas), <b>cups</b> (tazas) y <b>spoons</b> (cucharas). Y la temperatura del horno va en grados <b>Fahrenheit</b>: 350 °F ≈ 180 °C.</p>
<p>🥘 En Panamá también se usa mucho la libra en el mercado, ¡así que vas con ventaja!</p>` },
    ex: [
      { t: 'cloze', s: 'How ___ eggs do we need?', a: ['many'], o: ['many', 'much', 'lot'], nl: '¿Cuántos huevos necesitamos?', tag: 'en-much' },
      { t: 'cloze', s: 'How ___ sugar do you want?', a: ['much'], o: ['much', 'many', 'few'], nl: '¿Cuánta azúcar quieres?', tag: 'en-much' },
      { t: 'cloze', s: 'There isn’t ___ butter.', a: ['any'], o: ['any', 'some', 'many'], nl: 'No hay mantequilla.', tag: 'en-count' },
      { t: 'cloze', s: 'I bought ___ cheese.', a: ['some'], o: ['some', 'any', 'a'], nl: 'Compré queso.', tag: 'en-count' },
      { t: 'cloze', s: 'Add a ___ salt. (un poco)', a: ['little'], o: ['little', 'few', 'lot'], nl: 'Agrega un poco de sal.', tag: 'en-much' },
      { t: 'cloze', s: 'We have a ___ tomatoes. (unos pocos)', a: ['few'], o: ['few', 'little', 'much'], nl: 'Tenemos unos pocos tomates.', tag: 'en-much' },
      { t: 'cloze', s: 'Can I have a ___ of bread?', a: ['piece'], o: ['piece', 'cup', 'bottle'], nl: '¿Me das un pedazo de pan?', tag: 'en-count' },
      { t: 'mc', q: '¿Cuál es incontable?', o: ['rice', 'egg', 'onion'], tag: 'en-count' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['There is a lot of rice.', 'There are a lot of rices.', 'There is many rice.'], tag: 'en-much' },
      { t: 'mc', q: '«hornear» es…', o: ['bake', 'boil', 'fry'], tag: 'en-count' },
      { t: 'tr', nl: '¿Cuánta agua necesitamos?', a: ['How much water do we need?'], tag: 'en-much' },
      { t: 'tr', nl: 'No tenemos huevos.', a: ["We don't have any eggs.", 'We have no eggs.', 'We do not have any eggs.'], tag: 'en-count' },
      { t: 'tr', nl: 'Pica la cebolla.', a: ['Chop the onion.'], tag: 'en-count' },
      { t: 'tr', nl: '¿Quieres un poco de café?', a: ['Would you like some coffee?', 'Do you want some coffee?'], tag: 'en-count' },
      { t: 'order', s: 'Boil the chicken with a little salt.', nl: 'Hierve el pollo con un poco de sal.', tag: 'en-much' },
      { t: 'match', p: [['flour', 'harina'], ['garlic', 'ajo'], ['pot', 'olla'], ['oven', 'horno'], ['beans', 'frijoles']], tag: 'en-count' }
    ],
    reading: {
      t: 'Easy banana pancakes', type: 'Una receta',
      p: [
        ['You need: 2 ripe bananas, 2 eggs, half a cup of flour, a little milk, a pinch of salt and some butter for the pan.', 'Necesitas: 2 bananos maduros, 2 huevos, media taza de harina, un poco de leche, una pizca de sal y un poco de mantequilla para la sartén.'],
        ['First, mash the bananas in a bowl. Add the eggs and mix well. Then add the flour, the milk and the salt. Don’t mix too much.', 'Primero, aplasta los bananos en un tazón. Agrega los huevos y mezcla bien. Luego agrega la harina, la leche y la sal. No mezcles demasiado.'],
        ['Heat a little butter in a pan. Pour a few spoonfuls of the mix and cook for two minutes on each side. Serve with honey or fruit. This recipe makes about eight pancakes.', 'Calienta un poco de mantequilla en una sartén. Echa unas cucharadas de la mezcla y cocina dos minutos por cada lado. Sirve con miel o fruta. Esta receta da unos ocho panqueques.']
      ],
      gl: [['ripe', 'maduro'], ['mash', 'aplastar'], ['bowl', 'tazón'], ['pour', 'echar / verter']],
      q: [
        { t: 'mc', q: 'How many bananas do you need?', o: ['Two', 'Eight', 'Half'] },
        { t: 'mc', q: 'How much flour do you need?', o: ['Half a cup', 'Two cups', 'A pinch'] },
        { t: 'mc', q: 'How long do you cook each side?', o: ['Two minutes', 'Ten minutes', 'Half a minute'] }
      ]
    },
    say: [['How much sugar do you want?', '¿Cuánta azúcar quieres?'], ['We don’t have any eggs.', 'No tenemos huevos.'], ['Add a little salt.', 'Agrega un poco de sal.']],
    task: { nl: 'Escribe la receta de un plato típico de tu país: los ingredientes (con cantidades) y 4 o 5 pasos con imperativo.', model: 'Patacones. You need two green plantains, a lot of oil and a little salt. First, peel the plantains and cut them. Fry the pieces for three minutes. Then press them flat. Fry them again and add some salt.' },
    scenario: { nl: 'Un amigo de Brooklyn quiere cocinar un plato latino contigo.', role: 'You are Tyler, a friend from Brooklyn who wants to cook a Latin American dish with the learner. Ask what ingredients you need, how much and how many, and what to do first. Say what you have and don’t have in the kitchen.', goal: 'Explícale qué ingredientes necesitan y cómo se prepara el plato.' }
  });

  /* ───────────────────────── A2 · 10 ───────────────────────── */
  U({
    id: 'en-a2-10', level: 'A2', icon: '❤️', title: 'If you’re free…', nl: 'Planes, condiciones y relaciones',
    goals: ['Usar el condicional real: if + presente, will', 'Describir cómo haces algo con adverbios', 'Hablar de amigos, pareja y familia'],
    vocab: [
      ['boyfriend', 'novio'], ['girlfriend', 'novia'], ['husband', 'esposo'], ['wife', 'esposa'], ['best friend', 'mejor amigo / amiga'], ['date', 'cita (romántica)'],
      ['go out with', 'salir con'], ['fall in love', 'enamorarse'], ['break up', 'terminar (una relación)'], ['get along', 'llevarse bien'], ['argue', 'discutir'], ['miss someone', 'extrañar a alguien'],
      ['trust', 'confiar'], ['quickly', 'rápido / rápidamente'], ['slowly', 'despacio'], ['carefully', 'con cuidado'], ['well', 'bien'], ['badly', 'mal'], ['hard', 'duro / mucho'],
      ['if', 'si (condición)'], ['unless', 'a menos que'], ['as soon as', 'en cuanto'], ['I miss you.', 'Te extraño.'], ['text', 'mandar un mensaje']
    ],
    grammar: [
      { t: 'If + presente, will', es: 'First conditional',
        html: `<p>Para hablar de algo <b>posible</b> en el futuro: <b>If + presente simple, will + verbo</b>.</p>
<p><i><b>If</b> it <b>rains</b>, we<b>’ll stay</b> home.</i> Ojo: después de <i>if</i> va el <b>presente</b>, no will: <s>If it will rain</s>.</p>
<p>El orden puede cambiar: <i>We’ll stay home <b>if</b> it rains.</i> (sin coma)</p>`,
        table: [['if + presente', 'will + verbo'], ['If you’re free,', 'we’ll go to the movies.'], ['If she calls,', 'I’ll tell her.'], ['If you don’t hurry,', 'you’ll miss the bus.']],
        sum: 'If it rains, we’ll stay home.',
        ex: [['If you come to Panama, I’ll show you the canal.', 'Si vienes a Panamá, te muestro el canal.'], ['I’ll be angry if you’re late again.', 'Me voy a enojar si llegas tarde otra vez.']] },
      { t: 'When, as soon as, unless', es: 'When / as soon as / unless',
        html: `<p>Igual que con <i>if</i>, después de <b>when</b> (cuando), <b>as soon as</b> (en cuanto) y <b>unless</b> (a menos que) se usa el <b>presente</b>, aunque hablemos del futuro:</p>
<p><i>I’ll text you <b>when</b> I <b>arrive</b>.</i> · <i>Call me <b>as soon as</b> you <b>know</b>.</i> · <i>We’ll go to the beach <b>unless</b> it <b>rains</b>.</i></p>`,
        table: [['inglés', 'español'], ['when I arrive', 'cuando llegue'], ['as soon as you know', 'en cuanto sepas'], ['unless it rains', 'a menos que llueva']],
        ex: [['I’ll call you when I get home.', 'Te llamo cuando llegue a casa.'], ['She won’t come unless you invite her.', 'Ella no va a venir a menos que la invites.']] },
      { t: 'Adverbios: cómo haces algo', es: 'Adverbs of manner',
        html: `<p>Los adjetivos describen cosas; los <b>adverbios</b> describen <b>cómo</b> haces algo. Casi siempre: adjetivo + <b>-ly</b>: <i>quick → quick<b>ly</b>, careful → careful<b>ly</b>, easy → eas<b>ily</b></i>.</p>
<p>Irregulares: good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b>. <i>She speaks English <b>well</b>.</i> (no <s>good</s>)</p>`,
        table: [['adjetivo', 'adverbio'], ['slow', 'slowly'], ['careful', 'carefully'], ['happy', 'happily'], ['good', 'well'], ['fast', 'fast']],
        ex: [['Please drive carefully.', 'Maneja con cuidado, por favor.'], ['He works hard and he dances really well.', 'Trabaja duro y baila muy bien.']] }
    ],
    dialogue: {
      t: 'Long distance', place: 'Video call: Chicago 🇺🇸 – Panama 🇵🇦',
      lines: [
        ['Ryan', 'Hi, babe! I miss you so much.', '¡Hola, amor! Te extraño muchísimo.'],
        ['Daniela', 'I miss you too! How was your day?', '¡Yo también te extraño! ¿Qué tal tu día?'],
        ['Ryan', 'Busy. But I have news: if my boss says yes, I’ll come to Panama in December!', 'Ocupado. Pero tengo noticias: ¡si mi jefe dice que sí, voy a Panamá en diciembre!'],
        ['Daniela', 'Really? That’s amazing! When will you know?', '¿En serio? ¡Qué maravilla! ¿Cuándo vas a saber?'],
        ['Ryan', 'Next week. I’ll text you as soon as I know.', 'La próxima semana. Te escribo en cuanto sepa.'],
        ['Daniela', 'If you come, I’ll take you to Bocas del Toro. And you’ll meet my parents.', 'Si vienes, te llevo a Bocas del Toro. Y vas a conocer a mis papás.'],
        ['Ryan', 'Your parents? I’m nervous! I don’t speak Spanish well.', '¿Tus papás? ¡Estoy nervioso! No hablo bien español.'],
        ['Daniela', 'Don’t worry. If you speak slowly and smile, they’ll love you.', 'No te preocupes. Si hablas despacio y sonríes, te van a querer.']
      ],
      q: [
        { t: 'mc', q: 'When will Ryan maybe come to Panama?', o: ['In December', 'Next week', 'In January'] },
        { t: 'mc', q: 'What will Ryan do as soon as he knows?', o: ['Text Daniela', 'Buy a ticket', 'Call his parents'] },
        { t: 'mc', q: 'Why is Ryan nervous?', o: ['He doesn’t speak Spanish well', 'He doesn’t like flying', 'He has no money'] }
      ]
    },
    culture: { t: 'Las citas en EE. UU.', html: `<p>En Estados Unidos <b>going on a date</b> (salir en una cita) puede ser algo casual. Muchas parejas se conocen por aplicaciones. Una pregunta importante después de varias citas es: <i>Are we exclusive?</i> (¿somos solo tú y yo?).</p>
<p>💌 Expresiones cariñosas: <i>babe, honey, sweetheart</i>. Y para despedirse en pareja: <i>Love you! Talk to you later!</i></p>` },
    ex: [
      { t: 'cloze', s: 'If it ___, we’ll stay home. (rain)', a: ['rains'], o: ['rains', 'will rain', 'rained'], nl: 'Si llueve, nos quedamos en casa.', x: 'Después de if va el presente, no will.', tag: 'en-if1' },
      { t: 'cloze', s: 'If you come to Panama, I ___ show you the canal.', a: ['will'], o: ['will', 'would', 'am'], nl: 'Si vienes a Panamá, te muestro el canal.', tag: 'en-if1' },
      { t: 'cloze', s: 'I’ll text you as soon as I ___. (arrive)', a: ['arrive'], o: ['arrive', 'will arrive', 'arrived'], nl: 'Te escribo en cuanto llegue.', tag: 'en-if1' },
      { t: 'cloze', s: 'We’ll go to the beach ___ it rains.', a: ['unless'], o: ['unless', 'if', 'when'], nl: 'Vamos a la playa a menos que llueva.', tag: 'en-if1' },
      { t: 'cloze', s: 'Please drive ___. (careful)', a: ['carefully'], o: ['carefully', 'careful', 'carefuly'], nl: 'Maneja con cuidado, por favor.', tag: 'en-adv' },
      { t: 'cloze', s: 'She speaks English very ___.', a: ['well'], o: ['well', 'good', 'goodly'], nl: 'Ella habla inglés muy bien.', tag: 'en-adv' },
      { t: 'cloze', s: 'Can you speak more ___, please? (slow)', a: ['slowly'], o: ['slowly', 'slow', 'slowlier'], nl: '¿Puedes hablar más despacio, por favor?', tag: 'en-adv' },
      { t: 'mc', q: '«Te extraño» es…', o: ['I miss you.', 'I lose you.', 'I strange you.'], tag: 'en-if1' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['If you are late, I’ll be angry.', 'If you will be late, I’ll be angry.', 'If you are late, I am angry tomorrow.'], tag: 'en-if1' },
      { t: 'mc', q: '«llevarse bien» es…', o: ['get along', 'get up', 'break up'], tag: 'en-if1' },
      { t: 'tr', nl: 'Si tienes tiempo, vamos al cine.', a: ["If you have time, we'll go to the movies.", "If you have time, we will go to the movies.", "If you're free, we'll go to the movies."], tag: 'en-if1' },
      { t: 'tr', nl: 'Te llamo cuando llegue a casa.', a: ["I'll call you when I get home.", "I'll call you when I arrive home.", 'I will call you when I get home.'], tag: 'en-if1' },
      { t: 'tr', nl: 'Él trabaja duro.', a: ['He works hard.'], tag: 'en-adv' },
      { t: 'tr', nl: 'Me llevo bien con mi hermana.', a: ['I get along with my sister.', 'I get along well with my sister.'], tag: 'en-if1' },
      { t: 'order', s: 'If you speak slowly, they will understand you.', nl: 'Si hablas despacio, te van a entender.', tag: 'en-if1' },
      { t: 'match', p: [['quickly', 'rápido'], ['carefully', 'con cuidado'], ['argue', 'discutir'], ['trust', 'confiar'], ['break up', 'terminar']], tag: 'en-adv' }
    ],
    reading: {
      t: 'Ask Abby: My friend is always late', type: 'Una columna de consejos',
      p: [
        ['Dear Abby, my best friend is always late. Last Saturday I waited for her for an hour at a restaurant. If I say something, she’ll get angry. What should I do? — Tired of Waiting, Dallas', 'Querida Abby: mi mejor amiga siempre llega tarde. El sábado pasado la esperé una hora en un restaurante. Si le digo algo, se va a enojar. ¿Qué hago? — Cansada de Esperar, Dallas'],
        ['Dear Tired, good friends talk honestly. Tell her calmly how you feel. If you speak kindly, she probably won’t get angry.', 'Querida Cansada: los buenos amigos hablan con sinceridad. Dile con calma cómo te sientes. Si hablas con cariño, probablemente no se va a enojar.'],
        ['And next time, make a plan: if she isn’t there in fifteen minutes, you’ll order without her. Unless she changes, you’ll always wait. But good friendships are worth it! — Abby', 'Y la próxima vez, haz un plan: si no ha llegado en quince minutos, pides sin ella. A menos que ella cambie, siempre vas a esperar. ¡Pero las buenas amistades valen la pena! — Abby']
      ],
      gl: [['honestly', 'con sinceridad'], ['calmly', 'con calma'], ['kindly', 'con cariño / amablemente'], ['worth it', 'vale la pena']],
      q: [
        { t: 'mc', q: 'How long did the writer wait last Saturday?', o: ['An hour', 'Fifteen minutes', 'All day'] },
        { t: 'mc', q: 'What does Abby say she should do first?', o: ['Talk to her friend calmly', 'Find a new friend', 'Never wait again'] },
        { t: 'mc', q: 'What should she do if her friend is 15 minutes late?', o: ['Order without her', 'Go home', 'Call her mom'] }
      ]
    },
    say: [['If you’re free, we’ll go out.', 'Si estás libre, salimos.'], ['I’ll text you when I arrive.', 'Te escribo cuando llegue.'], ['Please speak slowly.', 'Habla despacio, por favor.']],
    task: { nl: 'Escribe un mensaje a un amigo que vive lejos: dile que lo extrañas y haz 3 planes con «if» para cuando venga.', model: "Hi Sam! I miss you. When are you coming? If you come in summer, we'll go to the beach every day. If it rains, we'll watch movies. And if you're hungry, I'll cook sancocho for you!" },
    scenario: { nl: 'Tu pareja (o un buen amigo) vive en Chicago y hablan por videollamada.', role: 'You are Ryan, the learner’s partner or close friend who lives in Chicago. Talk on a video call: say you miss them, make plans with if and when (a visit, what you’ll do), and ask how they do things (adverbs).', goal: 'Hagan planes para su próxima visita usando if y when.' }
  });
})(window.SPT);
