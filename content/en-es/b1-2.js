/* Inglés B1, unidades 6–10 (inglés estadounidense, explicaciones en español latinoamericano). Mismo formato que a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-reported': 'estilo indirecto (she said that…)', 'en-pastperf': 'past perfect (had done)', 'en-deduce': 'must / might / can’t (deducción)',
    'en-gerund': 'gerundio o infinitivo (enjoy doing / want to do)', 'en-phrasal': 'phrasal verbs', 'en-formal': 'correo formal y quejas'
  });

  /* ───────────────────────── B1 · 6 ───────────────────────── */
  U({
    id: 'en-b1-06', level: 'B1', icon: '💬', title: 'She said that…', nl: 'Contar lo que dijo otra persona',
    goals: ['Usar el estilo indirecto con say y tell', 'Cambiar los tiempos verbales al contar', 'Contar preguntas y pedidos (asked if…, told me to…)'],
    vocab: [
      ['say → said', 'decir → dijo'], ['tell → told', 'decir (a alguien) → le dijo'], ['ask → asked', 'preguntar / pedir'], ['explain', 'explicar'], ['promise', 'prometer'],
      ['complain', 'quejarse'], ['mention', 'mencionar'], ['admit', 'admitir'], ['reply', 'responder'], ['whisper', 'susurrar'], ['gossip', 'chisme / chismear'],
      ['rumor', 'rumor'], ['message', 'mensaje'], ['voicemail', 'mensaje de voz'], ['the day before', 'el día anterior'], ['the next day', 'al día siguiente'],
      ['that day', 'ese día'], ['there', 'allí'], ['apparently', 'al parecer'], ['according to', 'según'], ['secret', 'secreto'], ['promotion', 'ascenso'],
      ['engaged', 'comprometido (para casarse)'], ['pregnant', 'embarazada']
    ],
    grammar: [
      { t: 'Say y tell', es: 'Say vs. tell',
        html: `<p><b>say</b> + lo que se dijo: <i>She <b>said</b> (that) she was tired.</i> · <b>tell</b> + <b>persona</b> + lo que se dijo: <i>She <b>told me</b> (that) she was tired.</i></p>
<p>No se dice <s>She said me</s> ni <s>She told that</s>. <i>That</i> se puede omitir.</p>`,
        table: [['verbo', 'ejemplo'], ['say', 'He said that he was busy.'], ['say to someone', 'He said to me that he was busy.'], ['tell someone', 'He told me that he was busy.']],
        sum: 'She said that… / She told me that…',
        ex: [['My boss told me that I could leave early.', 'Mi jefe me dijo que me podía ir temprano.'], ['What did she say?', '¿Qué dijo ella?']] },
      { t: 'Los tiempos retroceden', es: 'Backshift',
        html: `<p>Al contar lo que alguien dijo en el pasado, el verbo normalmente va «un paso atrás»:</p>
<p>presente → pasado: <i>«I <b>am</b> tired.» → She said she <b>was</b> tired.</i> · will → <b>would</b> · can → <b>could</b> · pasado / present perfect → <b>past perfect</b>: <i>«I <b>lost</b> my keys.» → He said he <b>had lost</b> his keys.</i></p>
<p>También cambian los pronombres y palabras de tiempo: <i>today → that day</i>, <i>tomorrow → the next day</i>, <i>here → there</i>.</p>`,
        table: [['palabras exactas', 'estilo indirecto'], ['«I live in Miami.»', 'She said she lived in Miami.'], ['«I’ll call you.»', 'He said he would call me.'], ['«I can’t come.»', 'She said she couldn’t come.'], ['«We’ve finished.»', 'They said they had finished.']],
        ex: [['He said he would be here at eight.', 'Dijo que estaría aquí a las ocho.'], ['She told me she had never been to Europe.', 'Me dijo que nunca había ido a Europa.']] },
      { t: 'Preguntas y pedidos', es: 'Reported questions and requests',
        html: `<p>Preguntas: <b>asked + if / wh-</b> y el orden de una frase normal (sin do/did): <i>«Are you OK?» → He <b>asked if I was</b> OK.</i> · <i>«Where do you live?» → She <b>asked where I lived</b>.</i></p>
<p>Pedidos y órdenes: <b>told / asked + persona + (not) to + verbo</b>: <i>«Please call me.» → She <b>asked me to call</b> her.</i> · <i>«Don’t be late.» → He <b>told me not to be</b> late.</i></p>`,
        table: [['directo', 'indirecto'], ['«Do you speak English?»', 'She asked if I spoke English.'], ['«What time is it?»', 'He asked what time it was.'], ['«Close the door.»', 'She told me to close the door.']],
        ex: [['The doctor told me to rest for a week.', 'El médico me dijo que descansara una semana.'], ['They asked me where I was from.', 'Me preguntaron de dónde era.']] }
    ],
    dialogue: {
      t: 'Office gossip', place: 'Chicago, Illinois 🇺🇸',
      lines: [
        ['Brianna', 'You won’t believe what Kevin told me this morning!', '¡No vas a creer lo que me dijo Kevin esta mañana!'],
        ['Andrea', 'What? Tell me!', '¿Qué? ¡Cuéntame!'],
        ['Brianna', 'He said that Linda was leaving the company. Apparently she had gotten a job in Seattle.', 'Dijo que Linda se iba de la empresa. Al parecer había conseguido un trabajo en Seattle.'],
        ['Andrea', 'Really? But yesterday she told me she loved working here!', '¿En serio? ¡Pero ayer ella me dijo que le encantaba trabajar aquí!'],
        ['Brianna', 'I know. And he said the boss had asked him to keep it a secret.', 'Ya sé. Y dijo que el jefe le había pedido que lo mantuviera en secreto.'],
        ['Andrea', 'So why did he tell you?', '¿Y entonces por qué te lo contó?'],
        ['Brianna', 'Ha! Good question. Oh, wait… Linda just texted me. She asked if we wanted to have lunch.', '¡Ja! Buena pregunta. Ay, espera… Linda me acaba de escribir. Pregunta si queremos almorzar.'],
        ['Andrea', 'Perfect. Let’s ask her ourselves. And let’s not tell Kevin!', 'Perfecto. Preguntémosle nosotras mismas. ¡Y no le digamos nada a Kevin!']
      ],
      q: [
        { t: 'mc', q: 'What did Kevin say about Linda?', o: ['That she was leaving the company', 'That she was getting married', 'That she was sick'] },
        { t: 'mc', q: 'What had Linda told Andrea the day before?', o: ['That she loved working there', 'That she was moving to Seattle', 'Nothing'] },
        { t: 'mc', q: 'What did Linda ask in her text?', o: ['If they wanted to have lunch', 'If they had heard the news', 'Where Kevin was'] }
      ]
    },
    culture: { t: 'Chismes en la oficina', html: `<p>El chisme en el trabajo se llama <b>office gossip</b> y en EE. UU. está mal visto en el ambiente profesional. Algunas frases para no meterte: <i>«I’d rather not talk about that.»</i> o <i>«I don’t know anything about it.»</i></p>
<p>🗨️ Para contar algo que oíste: <i>«I heard that…»</i>, <i>«Apparently…»</i>, <i>«According to…»</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'She ___ me that she was tired.', a: ['told'], o: ['told', 'said', 'asked'], nl: 'Ella me dijo que estaba cansada.', tag: 'en-reported' },
      { t: 'cloze', s: 'He ___ that he was busy.', a: ['said'], o: ['said', 'told', 'told me to'], nl: 'Dijo que estaba ocupado.', tag: 'en-reported' },
      { t: 'cloze', s: '«I am hungry.» → She said she ___ hungry.', a: ['was'], o: ['was', 'is', 'were'], nl: 'Dijo que tenía hambre.', tag: 'en-reported' },
      { t: 'cloze', s: '«I’ll call you.» → He said he ___ call me.', a: ['would'], o: ['would', 'will', 'can'], nl: 'Dijo que me llamaría.', tag: 'en-reported' },
      { t: 'cloze', s: '«I lost my keys.» → He said he had ___ his keys.', a: ['lost'], o: ['lost', 'lose', 'losing'], nl: 'Dijo que había perdido las llaves.', tag: 'en-reported' },
      { t: 'cloze', s: 'She asked ___ I spoke English.', a: ['if'], o: ['if', 'that', 'do'], nl: 'Me preguntó si hablaba inglés.', tag: 'en-reported' },
      { t: 'cloze', s: 'The doctor told me ___ rest.', a: ['to'], o: ['to', 'that', 'for'], nl: 'El médico me dijo que descansara.', tag: 'en-reported' },
      { t: 'mc', q: '«Where do you live?» → She asked…', o: ['where I lived.', 'where did I live.', 'where do I live.'], tag: 'en-reported' },
      { t: 'mc', q: '«Don’t be late.» → He told me…', o: ['not to be late.', 'don’t be late.', 'to not being late.'], tag: 'en-reported' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['She told me the news.', 'She said me the news.', 'She told the news me.'], tag: 'en-reported' },
      { t: 'tr', nl: 'Me dijo que estaba cansada.', a: ['She told me she was tired.', 'She told me that she was tired.', 'She said she was tired.', 'She said that she was tired.'], tag: 'en-reported' },
      { t: 'tr', nl: 'Me preguntaron de dónde era.', a: ['They asked me where I was from.', 'They asked where I was from.'], tag: 'en-reported' },
      { t: 'tr', nl: 'Mi jefe me pidió que llegara temprano.', a: ['My boss asked me to come early.', 'My boss asked me to arrive early.', 'My boss told me to come early.'], tag: 'en-reported' },
      { t: 'order', s: 'He said that he would be here at eight.', nl: 'Dijo que estaría aquí a las ocho.', tag: 'en-reported' },
      { t: 'match', p: [['complain', 'quejarse'], ['promise', 'prometer'], ['whisper', 'susurrar'], ['rumor', 'rumor'], ['engaged', 'comprometido']], tag: 'en-reported' }
    ],
    reading: {
      t: 'The voicemail', type: 'Una historia corta',
      p: [
        ['When Marcos got home, there was a voicemail from his landlord. She said that she had tried to call him three times.', 'Cuando Marcos llegó a casa, había un mensaje de voz de su casera. Decía que había intentado llamarlo tres veces.'],
        ['She explained that a pipe had broken in the apartment upstairs and that water was coming into his kitchen. She asked him to call her back as soon as possible.', 'Explicaba que se había roto una tubería en el apartamento de arriba y que estaba entrando agua a su cocina. Le pidió que la llamara lo antes posible.'],
        ['Marcos ran to the kitchen. Everything was dry. Then he listened again: the message was for the man who had lived there before him! He called her and told her she had the wrong number.', 'Marcos corrió a la cocina. Todo estaba seco. Entonces volvió a escuchar: ¡el mensaje era para el hombre que había vivido allí antes que él! La llamó y le dijo que tenía el número equivocado.']
      ],
      gl: [['upstairs', 'arriba'], ['call back', 'devolver la llamada'], ['dry', 'seco'], ['wrong number', 'número equivocado']],
      q: [
        { t: 'mc', q: 'How many times had the landlord tried to call?', o: ['Three times', 'Once', 'Ten times'] },
        { t: 'mc', q: 'What did she ask Marcos to do?', o: ['Call her back', 'Fix the pipe', 'Move out'] },
        { t: 'mc', q: 'Who was the message really for?', o: ['The man who had lived there before', 'Marcos’s neighbor', 'The plumber'] }
      ]
    },
    say: [['She told me that she was tired.', 'Me dijo que estaba cansada.'], ['He asked if I was OK.', 'Me preguntó si estaba bien.'], ['The doctor told me to rest.', 'El médico me dijo que descansara.']],
    task: { nl: 'Piensa en una conversación de esta semana (con tu familia, un amigo o en el trabajo). Cuenta en 5 frases qué te dijeron, qué te preguntaron y qué te pidieron.', model: "Yesterday my sister called me. She said she was coming to visit next month. She asked if she could stay at my apartment. She told me she had found cheap tickets. She asked me not to tell our mom because it's a surprise." },
    scenario: { nl: 'Una compañera de trabajo te cuenta un chisme y te pregunta qué te dijeron a ti.', role: 'You are Brianna, a chatty coworker in Chicago. Tell the learner some office news using reported speech (He said that…, She told me…). Then ask what other people told them this week and ask them to report it.', goal: 'Cuéntale lo que te dijeron otras personas usando el estilo indirecto.' }
  });

  /* ───────────────────────── B1 · 7 ───────────────────────── */
  U({
    id: 'en-b1-07', level: 'B1', icon: '📖', title: 'It had already happened', nl: 'Contar historias: el past perfect',
    goals: ['Usar el past perfect (had + participio)', 'Ordenar una historia con before, after, by the time', 'Contar una anécdota con detalles'],
    vocab: [
      ['had + participle', 'había + participio'], ['already', 'ya'], ['just', 'justo / acabar de'], ['by the time', 'para cuando'], ['before', 'antes de que'], ['after', 'después de que'],
      ['as soon as', 'en cuanto'], ['realize', 'darse cuenta'], ['remember', 'acordarse'], ['forget → forgot → forgotten', 'olvidar'], ['leave → left', 'irse / dejar'],
      ['miss the flight', 'perder el vuelo'], ['boarding pass', 'pase de abordar'], ['gate', 'puerta (de embarque)'], ['check-in desk', 'mostrador de check-in'],
      ['lock', 'cerrar con llave'], ['turn off', 'apagar'], ['oven', 'horno'], ['luckily', 'por suerte'], ['unfortunately', 'por desgracia'], ['in the end', 'al final'],
      ['panic', 'entrar en pánico'], ['rush', 'correr / apurarse'], ['embarrassing', 'vergonzoso']
    ],
    grammar: [
      { t: 'Past perfect', es: 'Past perfect',
        html: `<p><b>had + participio</b>, igual para todas las personas. Sirve para una acción que pasó <b>antes</b> de otra acción del pasado:</p>
<p><i>When I got to the airport, the plane <b>had</b> already <b>left</b>.</i> (Cuando llegué, el avión ya había salido.)</p>
<p>Forma corta: <b>I’d</b>, she’d. Negativa: <b>hadn’t</b>. Pregunta: <i><b>Had</b> you ever <b>been</b> there before?</i></p>`,
        table: [['primero (past perfect)', 'después (pasado simple)'], ['I had forgotten my passport,', 'so I went back home.'], ['She had never flown before', 'her trip to Miami.'], ['The movie had started', 'when we arrived.']],
        sum: 'When I arrived, the plane had already left.',
        ex: [['I realized I hadn’t locked the door.', 'Me di cuenta de que no había cerrado la puerta con llave.'], ['We had just sat down when the phone rang.', 'Acabábamos de sentarnos cuando sonó el teléfono.']] },
      { t: 'Before, after, by the time', es: 'Linking past events',
        html: `<p><b>by the time</b> (para cuando) casi siempre va con past perfect: <i><b>By the time</b> the police arrived, the thief <b>had escaped</b>.</i></p>
<p>Con <b>before</b> y <b>after</b> el orden ya está claro, así que también se puede usar el pasado simple: <i>After I (had) finished work, I went to the gym.</i></p>`,
        table: [['conector', 'ejemplo'], ['by the time', 'By the time I woke up, everyone had left.'], ['after', 'After she had eaten, she felt better.'], ['before', 'I had never seen snow before I moved to Boston.']],
        ex: [['By the time we got to the party, all the food had gone.', 'Para cuando llegamos a la fiesta, ya no quedaba comida.'], ['I had never tried sushi before I went to California.', 'Nunca había probado el sushi antes de ir a California.']] },
      { t: '¿Pasado simple o past perfect?', es: 'Past simple vs. past perfect',
        html: `<p>Compara: <i>When I arrived, the movie <b>started</b>.</i> (llegué y luego empezó) · <i>When I arrived, the movie <b>had started</b>.</i> (ya había empezado antes).</p>
<p>Si cuentas las cosas en orden, basta con el pasado simple. El past perfect sirve para «volver atrás» en la historia.</p>`,
        table: [['frase', 'significado'], ['When she called, I left.', 'Ella llamó y después me fui.'], ['When she called, I had left.', 'Ya me había ido cuando llamó.']],
        ex: [['I was nervous because I had never given a speech before.', 'Estaba nervioso porque nunca había dado un discurso.'], ['She was angry because I had forgotten her birthday.', 'Estaba enojada porque yo había olvidado su cumpleaños.']] }
    ],
    dialogue: {
      t: 'The worst trip ever', place: 'Orlando, Florida 🇺🇸',
      lines: [
        ['Nick', 'How was your trip to Disney World?', '¿Qué tal tu viaje a Disney World?'],
        ['Gabriela', 'It started terribly! When we got to the airport in Panama, I realized I had left my passport at home.', '¡Empezó terrible! Cuando llegamos al aeropuerto en Panamá, me di cuenta de que había dejado el pasaporte en casa.'],
        ['Nick', 'Oh no! What did you do?', '¡Ay, no! ¿Qué hiciste?'],
        ['Gabriela', 'My brother drove home to get it. But by the time he came back, the check-in desk had closed.', 'Mi hermano manejó a la casa a buscarlo. Pero para cuando regresó, el mostrador de check-in ya había cerrado.'],
        ['Nick', 'So you missed the flight?', '¿Así que perdiste el vuelo?'],
        ['Gabriela', 'Yes. Luckily, there was another flight that evening. But when we arrived in Orlando, the hotel had given our room to someone else!', 'Sí. Por suerte había otro vuelo esa noche. ¡Pero cuando llegamos a Orlando, el hotel le había dado nuestro cuarto a otra persona!'],
        ['Nick', 'You’re kidding! Had you paid already?', '¡No me digas! ¿Ya habían pagado?'],
        ['Gabriela', 'Yes! In the end they gave us a suite with a view of the fireworks. So it was worth it!', '¡Sí! Al final nos dieron una suite con vista a los fuegos artificiales. ¡Así que valió la pena!']
      ],
      q: [
        { t: 'mc', q: 'What had Gabriela forgotten?', o: ['Her passport', 'Her boarding pass', 'Her suitcase'] },
        { t: 'mc', q: 'What had happened by the time her brother came back?', o: ['The check-in desk had closed', 'The plane had crashed', 'The airport had closed'] },
        { t: 'mc', q: 'What did the hotel give them in the end?', o: ['A suite with a view of the fireworks', 'Their money back', 'Free tickets'] }
      ]
    },
    culture: { t: 'Contar anécdotas', html: `<p>En inglés, para contar una anécdota se usan frases como <i>«You won’t believe what happened…»</i>, <i>«So anyway…»</i> y <i>«Long story short…»</i> (en resumen).</p>
<p>🎢 Orlando, en Florida, es la capital mundial de los parques temáticos y uno de los destinos favoritos de las familias latinoamericanas.</p>` },
    ex: [
      { t: 'cloze', s: 'When I got to the airport, the plane ___ already left.', a: ['had'], o: ['had', 'has', 'was'], nl: 'Cuando llegué al aeropuerto, el avión ya había salido.', tag: 'en-pastperf' },
      { t: 'cloze', s: 'I realized I hadn’t ___ the door. (lock)', a: ['locked'], o: ['locked', 'lock', 'locking'], nl: 'Me di cuenta de que no había cerrado la puerta con llave.', tag: 'en-pastperf' },
      { t: 'cloze', s: '___ the time the police arrived, the thief had escaped.', a: ['By'], o: ['By', 'At', 'In'], nl: 'Para cuando llegó la policía, el ladrón se había escapado.', tag: 'en-pastperf' },
      { t: 'cloze', s: 'She had never ___ before. (fly)', a: ['flown'], o: ['flown', 'flew', 'flied'], nl: 'Ella nunca había volado.', tag: 'en-pastperf' },
      { t: 'cloze', s: 'We had ___ sat down when the phone rang.', a: ['just'], o: ['just', 'yet', 'ever'], nl: 'Acabábamos de sentarnos cuando sonó el teléfono.', tag: 'en-pastperf' },
      { t: 'cloze', s: 'She was angry because I had ___ her birthday. (forget)', a: ['forgotten'], o: ['forgotten', 'forgot', 'forget'], nl: 'Estaba enojada porque yo había olvidado su cumpleaños.', tag: 'en-pastperf' },
      { t: 'mc', q: '«Ya me había ido cuando llamó» es…', o: ['I had left when she called.', 'I left when she called.', 'I have left when she called.'], tag: 'en-pastperf' },
      { t: 'mc', q: '«para cuando» es…', o: ['by the time', 'for when', 'until the time'], tag: 'en-pastperf' },
      { t: 'mc', q: '«perder el vuelo» es…', o: ['miss the flight', 'lose the flight', 'lost the plane'], tag: 'en-pastperf' },
      { t: 'tr', nl: 'Nunca había visto la nieve.', a: ["I had never seen snow.", "I'd never seen snow.", 'I had never seen the snow.'], tag: 'en-pastperf' },
      { t: 'tr', nl: 'Cuando llegamos, la película ya había empezado.', a: ['When we arrived, the movie had already started.', 'When we got there, the movie had already started.'], tag: 'en-pastperf' },
      { t: 'tr', nl: 'Me di cuenta de que había olvidado el pasaporte.', a: ['I realized I had forgotten my passport.', "I realized I'd forgotten my passport.", 'I realized that I had forgotten my passport.'], tag: 'en-pastperf' },
      { t: 'order', s: 'By the time we got there, all the food had gone.', nl: 'Para cuando llegamos, ya no quedaba comida.', tag: 'en-pastperf' },
      { t: 'match', p: [['realize', 'darse cuenta'], ['gate', 'puerta de embarque'], ['luckily', 'por suerte'], ['rush', 'apurarse'], ['embarrassing', 'vergonzoso']], tag: 'en-pastperf' }
    ],
    reading: {
      t: 'The missing cake', type: 'Una anécdota',
      p: [
        ['Last year I decided to bake a cake for my mom’s 60th birthday. I had never baked a cake before, but I had watched a lot of videos.', 'El año pasado decidí hornear un pastel para los 60 años de mi mamá. Nunca había horneado un pastel, pero había visto muchos videos.'],
        ['After I had put the cake in the oven, I went to take a shower. When I came out, the kitchen was full of smoke. I had set the oven to the wrong temperature!', 'Después de meter el pastel al horno, fui a bañarme. Cuando salí, la cocina estaba llena de humo. ¡Había puesto el horno a la temperatura equivocada!'],
        ['By the time the guests arrived, I had bought a new cake at the bakery. Nobody knew… until my mom found the black one in the trash. She laughed so hard she cried.', 'Para cuando llegaron los invitados, ya había comprado otro pastel en la panadería. Nadie se enteró… hasta que mi mamá encontró el pastel negro en la basura. Se rió tanto que lloró.']
      ],
      gl: [['bake', 'hornear'], ['smoke', 'humo'], ['set the oven', 'poner el horno'], ['trash', 'basura']],
      q: [
        { t: 'mc', q: 'Had the writer baked a cake before?', o: ['No, never', 'Yes, many times', 'Yes, once'] },
        { t: 'mc', q: 'What had gone wrong?', o: ['The oven was at the wrong temperature', 'There was no sugar', 'The guests came early'] },
        { t: 'mc', q: 'How did the mom find out?', o: ['She found the black cake in the trash', 'The baker told her', 'She smelled the smoke'] }
      ]
    },
    say: [['When I arrived, the plane had already left.', 'Cuando llegué, el avión ya había salido.'], ['I had never done that before.', 'Nunca había hecho eso.'], ['By the time I got there, everyone had gone.', 'Para cuando llegué, todos se habían ido.']],
    task: { nl: 'Cuenta una anécdota en la que algo salió mal (un viaje, una fiesta, un examen). Usa el past perfect al menos 3 veces y by the time, before o after.', model: "Last Christmas I took a bus to my grandparents' town. When I got off, I realized I had left my bag on the bus. My presents were in it! By the time I called the bus company, the bus had already gone back to the city. Luckily, the driver had found the bag and he brought it the next day." },
    scenario: { nl: 'Un amigo de Orlando te pregunta por tu peor viaje.', role: 'You are Nick, a friend from Orlando. Ask the learner about their worst trip or most embarrassing day. Ask follow-up questions that need the past perfect (Had you…? What had happened? Why had…?). React with surprise.', goal: 'Cuéntale una anécdota y explica lo que ya había pasado antes.' }
  });

  /* ───────────────────────── B1 · 8 ───────────────────────── */
  U({
    id: 'en-b1-08', level: 'B1', icon: '🕵️', title: 'It must be…', nl: 'Hacer suposiciones',
    goals: ['Deducir con must, might, could y can’t', 'Expresar probabilidad con probably y I bet', 'Hacer suposiciones sobre el pasado (must have…)'],
    vocab: [
      ['must', 'debe de (seguro que sí)'], ['might', 'puede que'], ['may', 'puede que (formal)'], ['could', 'podría'], ['can’t', 'no puede ser'], ['probably', 'probablemente'],
      ['definitely', 'definitivamente'], ['maybe / perhaps', 'tal vez'], ['I bet…', 'apuesto a que…'], ['clue', 'pista'], ['evidence', 'prueba / evidencia'], ['suspect', 'sospechoso / sospechar'],
      ['detective', 'detective'], ['mystery', 'misterio'], ['footprint', 'huella (de pie)'], ['fingerprint', 'huella digital'], ['guess', 'adivinar / suposición'], ['solve', 'resolver'],
      ['missing', 'desaparecido / que falta'], ['broken', 'roto'], ['package', 'paquete'], ['delivery', 'entrega'], ['neighbor’s cat', 'el gato del vecino'], ['muddy', 'lleno de lodo']
    ],
    grammar: [
      { t: 'Must, might, can’t: deducciones en presente', es: 'Modals of deduction',
        html: `<p>Para adivinar o deducir algo según las pistas:</p>
<p><b>must</b> = estoy casi seguro de que sí: <i>The lights are on. They <b>must</b> be home.</i> · <b>might / may / could</b> = es posible: <i>She <b>might</b> be in a meeting.</i> · <b>can’t</b> = estoy casi seguro de que no: <i>That <b>can’t</b> be Tom. He’s in Mexico.</i></p>
<p>Ojo: lo contrario de <i>must</i> aquí es <b>can’t</b>, no <s>mustn’t</s>.</p>`,
        table: [['seguridad', 'modal', 'ejemplo'], ['90 %', 'must', 'He must be tired.'], ['50 %', 'might / may / could', 'He might be tired.'], ['10 %', 'can’t', 'He can’t be tired.']],
        sum: 'She must be home. She might be asleep. She can’t be at work.',
        ex: [['You’ve been working all day. You must be exhausted.', 'Has trabajado todo el día. Debes de estar agotado.'], ['That can’t be right. Check it again.', 'Eso no puede ser correcto. Revísalo otra vez.']] },
      { t: 'Deducciones sobre el pasado', es: 'Must have / might have / can’t have',
        html: `<p>Para el pasado: <b>modal + have + participio</b>.</p>
<p><i>The ground is wet. It <b>must have rained</b>.</i> (Debe de haber llovido.) · <i>She <b>might have missed</b> the bus.</i> · <i>He <b>can’t have seen</b> us. He didn’t say hello.</i></p>`,
        table: [['modal + have + participio', 'español'], ['must have forgotten', 'debe de haber olvidado'], ['might have lost', 'puede que haya perdido'], ['can’t have known', 'no puede haberlo sabido']],
        ex: [['I can’t find my keys. I must have left them at work.', 'No encuentro mis llaves. Debo de haberlas dejado en el trabajo.'], ['She didn’t answer. She might have been asleep.', 'No contestó. Puede que estuviera dormida.']] },
      { t: 'Probably, I bet, I doubt', es: 'Talking about probability',
        html: `<p>Otras formas: <b>probably</b> (probablemente), <b>I bet</b> (apuesto a que), <b>I doubt</b> (dudo que), <b>There’s no way</b> (es imposible que).</p>
<p><i>He’s <b>probably</b> stuck in traffic.</i> · <i><b>I bet</b> she forgot.</i> · <i><b>I doubt</b> it will rain.</i></p>`,
        table: [['inglés', 'español'], ['I bet it was the cat.', 'Apuesto a que fue el gato.'], ['I doubt he knows.', 'Dudo que lo sepa.'], ['There’s no way!', '¡Es imposible!']],
        ex: [['I bet the package is at the neighbor’s house.', 'Apuesto a que el paquete está en la casa del vecino.'], ['They’re probably still sleeping.', 'Probablemente todavía están durmiendo.']] }
    ],
    dialogue: {
      t: 'The missing package', place: 'Austin, Texas 🇺🇸',
      lines: [
        ['Sam', 'The app says my package was delivered at two o’clock, but it isn’t here.', 'La app dice que mi paquete se entregó a las dos, pero no está aquí.'],
        ['Valeria', 'Hmm. The driver might have left it at the wrong house.', 'Mmm. Puede que el repartidor lo haya dejado en la casa equivocada.'],
        ['Sam', 'Or someone could have stolen it. There’s a lot of that around here.', 'O alguien podría haberlo robado. Pasa mucho por aquí.'],
        ['Valeria', 'Wait, look. There are muddy footprints on the porch. They’re tiny…', 'Espera, mira. Hay huellas de lodo en el porche. Son chiquitas…'],
        ['Sam', 'They can’t be from a person. They must be from an animal.', 'No pueden ser de una persona. Deben de ser de un animal.'],
        ['Valeria', 'I bet it was Mrs. Miller’s dog. He loves boxes.', 'Apuesto a que fue el perro de la señora Miller. Le encantan las cajas.'],
        ['Sam', 'A dog can’t have carried a box that big!', '¡Un perro no puede haber cargado una caja tan grande!'],
        ['Valeria', 'Oh, it must have. Look! It’s in his yard, and he’s sleeping on it.', 'Ah, pues sí. ¡Mira! Está en su patio, y está durmiendo encima.']
      ],
      q: [
        { t: 'mc', q: 'What does the app say?', o: ['The package was delivered at two', 'The package is late', 'The package was lost'] },
        { t: 'mc', q: 'What does Valeria find on the porch?', o: ['Muddy footprints', 'A broken box', 'A note'] },
        { t: 'mc', q: 'Where is the package in the end?', o: ['In the neighbor’s yard', 'At the post office', 'In the driver’s truck'] }
      ]
    },
    culture: { t: 'Los «porch pirates»', html: `<p>En EE. UU. muchos paquetes se dejan en la puerta, y a veces alguien se los roba: son los <b>porch pirates</b> (piratas del porche). Por eso mucha gente tiene una cámara en el timbre (<i>doorbell camera</i>).</p>
<p>📦 Si un paquete no llega, puedes escribir: <i>«My package says delivered, but I didn’t receive it.»</i></p>` },
    ex: [
      { t: 'cloze', s: 'The lights are on. They ___ be home.', a: ['must'], o: ['must', 'can’t', 'mustn’t'], nl: 'Las luces están encendidas. Deben de estar en casa.', tag: 'en-deduce' },
      { t: 'cloze', s: 'That ___ be Tom. He’s in Mexico.', a: ['can’t'], o: ['can’t', 'mustn’t', 'must'], nl: 'Ese no puede ser Tom. Está en México.', tag: 'en-deduce' },
      { t: 'cloze', s: 'She ___ be in a meeting. I’m not sure.', a: ['might'], o: ['might', 'must', 'can’t'], nl: 'Puede que esté en una reunión. No estoy seguro.', tag: 'en-deduce' },
      { t: 'cloze', s: 'The ground is wet. It must have ___. (rain)', a: ['rained'], o: ['rained', 'rain', 'raining'], nl: 'El suelo está mojado. Debe de haber llovido.', tag: 'en-deduce' },
      { t: 'cloze', s: 'I can’t find my keys. I must ___ left them at work.', a: ['have'], o: ['have', 'had', 'has'], nl: 'No encuentro mis llaves. Debo de haberlas dejado en el trabajo.', tag: 'en-deduce' },
      { t: 'cloze', s: 'I ___ she forgot. (apuesto)', a: ['bet'], o: ['bet', 'doubt', 'must'], nl: 'Apuesto a que se le olvidó.', tag: 'en-deduce' },
      { t: 'mc', q: 'Lo contrario de «He must be at home» es…', o: ['He can’t be at home.', 'He mustn’t be at home.', 'He doesn’t must be at home.'], tag: 'en-deduce' },
      { t: 'mc', q: '«Puede que haya perdido el bus» es…', o: ['She might have missed the bus.', 'She might missed the bus.', 'She must to miss the bus.'], tag: 'en-deduce' },
      { t: 'mc', q: '«pista» (en un misterio) es…', o: ['clue', 'track', 'hint of road'], tag: 'en-deduce' },
      { t: 'tr', nl: 'Debes de estar cansado.', a: ['You must be tired.'], tag: 'en-deduce' },
      { t: 'tr', nl: 'No puede ser verdad.', a: ["It can't be true.", 'That can\'t be true.', 'It cannot be true.'], tag: 'en-deduce' },
      { t: 'tr', nl: 'Debe de haber olvidado.', a: ['She must have forgotten.', 'He must have forgotten.'], tag: 'en-deduce' },
      { t: 'tr', nl: 'Probablemente está en el tráfico.', a: ["He's probably stuck in traffic.", "She's probably stuck in traffic.", "He's probably in traffic.", "She's probably in traffic."], tag: 'en-deduce' },
      { t: 'order', s: 'The driver might have left it at the wrong house.', nl: 'Puede que el repartidor lo haya dejado en la casa equivocada.', tag: 'en-deduce' },
      { t: 'match', p: [['clue', 'pista'], ['suspect', 'sospechoso'], ['solve', 'resolver'], ['missing', 'desaparecido'], ['fingerprint', 'huella digital']], tag: 'en-deduce' }
    ],
    reading: {
      t: 'Who ate the cookies?', type: 'Un mini misterio',
      p: [
        ['Mom had baked twelve chocolate cookies for the school party. In the morning, only four were left on the plate. There were crumbs on the floor and a chair next to the counter.', 'Mamá había horneado doce galletas de chocolate para la fiesta de la escuela. En la mañana solo quedaban cuatro en el plato. Había migas en el piso y una silla junto a la encimera.'],
        ['Dad can’t have eaten them: he’s allergic to chocolate. And the dog can’t have climbed on a chair. Grandma was asleep all night, so it can’t have been her either.', 'Papá no puede habérselas comido: es alérgico al chocolate. Y el perro no puede haberse subido a una silla. La abuela estuvo dormida toda la noche, así que tampoco pudo haber sido ella.'],
        ['Only one person is short enough to need a chair and loves chocolate: six-year-old Leo. And he must have been hungry, because there was chocolate all over his pillow.', 'Solo una persona es lo bastante bajita como para necesitar una silla y ama el chocolate: Leo, de seis años. Y debe de haber tenido hambre, porque había chocolate por toda su almohada.']
      ],
      gl: [['crumbs', 'migas'], ['counter', 'encimera / mostrador'], ['allergic', 'alérgico'], ['pillow', 'almohada']],
      q: [
        { t: 'mc', q: 'How many cookies were left?', o: ['Four', 'Twelve', 'None'] },
        { t: 'mc', q: 'Why can’t Dad have eaten them?', o: ['He’s allergic to chocolate', 'He was at work', 'He was asleep'] },
        { t: 'mc', q: 'Who must have eaten the cookies?', o: ['Leo', 'Grandma', 'The dog'] }
      ]
    },
    say: [['You must be tired.', 'Debes de estar cansado.'], ['She might be in a meeting.', 'Puede que esté en una reunión.'], ['That can’t be true!', '¡Eso no puede ser verdad!']],
    task: { nl: 'Mira a tu alrededor (o imagina una escena) y escribe 5 suposiciones: sobre una persona, un ruido, algo que falta… Usa must, might, can’t y must have.', model: "My neighbor's car isn't there. He must be at work. I can hear music upstairs. It might be the new girl. There's a big box at the door. Someone must have bought a TV. The cat looks happy. It can't have eaten my fish… or can it?" },
    scenario: { nl: 'Un vecino de Austin no encuentra su paquete y juntos buscan pistas.', role: 'You are Sam, a neighbor in Austin whose package is missing. Describe clues one by one (footprints, a torn box, a noise) and ask the learner what they think happened. Use and invite must, might, can’t and must have.', goal: 'Haz suposiciones con must, might y can’t hasta resolver el misterio.' }
  });

  /* ───────────────────────── B1 · 9 ───────────────────────── */
  U({
    id: 'en-b1-09', level: 'B1', icon: '🎯', title: 'I enjoy learning', nl: 'Gustos y planes: -ing o to',
    goals: ['Saber qué verbos van con -ing y cuáles con to', 'Usar -ing después de preposiciones', 'Hablar de gustos, metas y hábitos'],
    vocab: [
      ['enjoy', 'disfrutar'], ['avoid', 'evitar'], ['mind', 'importar / molestar'], ['finish', 'terminar'], ['keep', 'seguir'], ['suggest', 'sugerir'], ['consider', 'considerar'],
      ['give up', 'dejar (un hábito)'], ['want', 'querer'], ['decide', 'decidir'], ['hope', 'esperar (desear)'], ['plan', 'planear'], ['learn', 'aprender'], ['manage', 'lograr'],
      ['afford', 'poder pagar'], ['refuse', 'negarse'], ['agree', 'aceptar / estar de acuerdo'], ['be good at', 'ser bueno en'], ['be interested in', 'estar interesado en'],
      ['look forward to', 'tener ganas de'], ['be afraid of', 'tener miedo de'], ['instead of', 'en lugar de'], ['New Year’s resolution', 'propósito de Año Nuevo'], ['procrastinate', 'postergar']
    ],
    grammar: [
      { t: 'Verbos + -ing', es: 'Verb + -ing',
        html: `<p>Algunos verbos siempre van seguidos de <b>verbo-ing</b>: <b>enjoy, avoid, mind, finish, keep, suggest, consider, give up, miss, practice</b>.</p>
<p><i>I <b>enjoy cooking</b>.</i> · <i>She <b>gave up smoking</b>.</i> · <i>Do you <b>mind waiting</b>?</i> · <i>He <b>keeps calling</b> me.</i></p>`,
        table: [['verbo', 'ejemplo'], ['enjoy', 'I enjoy reading.'], ['avoid', 'I avoid eating late.'], ['finish', 'Have you finished studying?'], ['give up', 'He gave up drinking soda.']],
        sum: 'I enjoy cooking. She gave up smoking.',
        ex: [['I don’t mind working on weekends.', 'No me molesta trabajar los fines de semana.'], ['She suggested going to the beach.', 'Ella sugirió ir a la playa.']] },
      { t: 'Verbos + to', es: 'Verb + to-infinitive',
        html: `<p>Otros verbos van con <b>to + verbo</b>: <b>want, decide, hope, plan, learn, need, manage, afford, refuse, agree, promise, would like</b>.</p>
<p><i>I <b>want to learn</b> English.</i> · <i>We <b>decided to move</b>.</i> · <i>I can’t <b>afford to buy</b> a car.</i></p>
<p>Con <b>like, love, hate, start</b> se pueden usar los dos: <i>I love <b>dancing</b> / I love <b>to dance</b>.</i></p>`,
        table: [['verbo', 'ejemplo'], ['want', 'I want to travel.'], ['decide', 'She decided to quit.'], ['manage', 'We managed to finish on time.'], ['would like', 'I’d like to order, please.']],
        ex: [['I’m planning to visit my family in December.', 'Estoy planeando visitar a mi familia en diciembre.'], ['He refused to pay for the broken glass.', 'Se negó a pagar el vaso roto.']] },
      { t: 'Preposición + -ing', es: 'Preposition + -ing',
        html: `<p>Después de una <b>preposición</b> (at, in, of, about, for, without, before, after, instead of…) el verbo va siempre en <b>-ing</b>:</p>
<p><i>I’m good <b>at cooking</b>.</i> · <i>She’s afraid <b>of flying</b>.</i> · <i>Thanks <b>for helping</b> me.</i> · <i>I’m looking forward <b>to seeing</b> you!</i> (¡ojo! aquí <i>to</i> es preposición)</p>`,
        table: [['expresión', 'ejemplo'], ['be interested in', 'I’m interested in learning Italian.'], ['be tired of', 'I’m tired of waiting.'], ['instead of', 'Let’s walk instead of taking a taxi.'], ['look forward to', 'I look forward to hearing from you.']],
        ex: [['How about going to the movies?', '¿Qué tal si vamos al cine?'], ['He left without saying goodbye.', 'Se fue sin despedirse.']] }
    ],
    dialogue: {
      t: 'New Year’s resolutions', place: 'Denver, Colorado 🇺🇸',
      lines: [
        ['Ashley', 'So, any New Year’s resolutions?', 'Y bueno, ¿algún propósito de Año Nuevo?'],
        ['Felipe', 'Yes! I want to learn to ski. I’ve never tried skiing, and Colorado is perfect for it.', '¡Sí! Quiero aprender a esquiar. Nunca he intentado esquiar, y Colorado es perfecto para eso.'],
        ['Ashley', 'Fun! Aren’t you afraid of falling?', '¡Qué divertido! ¿No te da miedo caerte?'],
        ['Felipe', 'A little. But I’m tired of watching from the coffee shop!', 'Un poco. ¡Pero estoy cansado de mirar desde la cafetería!'],
        ['Ashley', 'Ha! Mine is to give up checking my phone in bed. I keep doing it until 1 a.m.', '¡Ja! El mío es dejar de revisar el celular en la cama. Sigo haciéndolo hasta la una de la mañana.'],
        ['Felipe', 'That’s hard. Have you considered leaving it in the kitchen?', 'Eso es difícil. ¿Has pensado en dejarlo en la cocina?'],
        ['Ashley', 'Good idea. And I’d like to start running again. Do you mind running with me on Saturdays?', 'Buena idea. Y me gustaría volver a correr. ¿Te molestaría correr conmigo los sábados?'],
        ['Felipe', 'Not at all! I’m looking forward to it. But after skiing, OK?', '¡Para nada! Tengo muchas ganas. Pero después de esquiar, ¿sí?']
      ],
      q: [
        { t: 'mc', q: 'What does Felipe want to learn?', o: ['To ski', 'To run', 'To cook'] },
        { t: 'mc', q: 'What does Ashley want to give up?', o: ['Checking her phone in bed', 'Drinking coffee', 'Running'] },
        { t: 'mc', q: 'What does Felipe suggest?', o: ['Leaving the phone in the kitchen', 'Buying a new phone', 'Going to bed earlier'] }
      ]
    },
    culture: { t: 'Los propósitos de Año Nuevo', html: `<p>En EE. UU. es muy común hacer <b>New Year’s resolutions</b>: hacer ejercicio, comer sano, ahorrar… En enero los gimnasios se llenan, y en febrero, ¡muchos ya se rindieron!</p>
<p>⛷️ Colorado es famoso por sus montañas Rocosas (<i>the Rockies</i>) y estaciones de esquí como Aspen y Vail.</p>` },
    ex: [
      { t: 'cloze', s: 'I enjoy ___. (cook)', a: ['cooking'], o: ['cooking', 'to cook', 'cook'], nl: 'Disfruto cocinar.', tag: 'en-gerund' },
      { t: 'cloze', s: 'I want ___ English. (learn)', a: ['to learn'], o: ['to learn', 'learning', 'learn'], nl: 'Quiero aprender inglés.', tag: 'en-gerund' },
      { t: 'cloze', s: 'She gave up ___. (smoke)', a: ['smoking'], o: ['smoking', 'to smoke', 'smoke'], nl: 'Dejó de fumar.', tag: 'en-gerund' },
      { t: 'cloze', s: 'We decided ___ to Chicago. (move)', a: ['to move'], o: ['to move', 'moving', 'move'], nl: 'Decidimos mudarnos a Chicago.', tag: 'en-gerund' },
      { t: 'cloze', s: 'I’m good at ___. (dance)', a: ['dancing'], o: ['dancing', 'to dance', 'dance'], nl: 'Soy bueno bailando.', tag: 'en-gerund' },
      { t: 'cloze', s: 'I’m looking forward to ___ you! (see)', a: ['seeing'], o: ['seeing', 'see', 'saw'], nl: '¡Tengo muchas ganas de verte!', x: 'En look forward to, to es preposición: va -ing.', tag: 'en-gerund' },
      { t: 'cloze', s: 'Do you mind ___? (wait)', a: ['waiting'], o: ['waiting', 'to wait', 'wait'], nl: '¿Te molesta esperar?', tag: 'en-gerund' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['He left without saying goodbye.', 'He left without say goodbye.', 'He left without to say goodbye.'], tag: 'en-gerund' },
      { t: 'mc', q: '«No puedo pagar un carro» es…', o: ['I can’t afford to buy a car.', 'I can’t afford buying a car to.', 'I can’t pay buy a car.'], tag: 'en-gerund' },
      { t: 'mc', q: '«propósito de Año Nuevo» es…', o: ['New Year’s resolution', 'New Year’s purpose', 'New Year’s intent'], tag: 'en-gerund' },
      { t: 'tr', nl: 'Quiero aprender a esquiar.', a: ['I want to learn to ski.', 'I want to learn how to ski.'], tag: 'en-gerund' },
      { t: 'tr', nl: 'Me da miedo volar.', a: ["I'm afraid of flying.", 'I am afraid of flying.'], tag: 'en-gerund' },
      { t: 'tr', nl: 'Gracias por ayudarme.', a: ['Thanks for helping me.', 'Thank you for helping me.'], tag: 'en-gerund' },
      { t: 'tr', nl: 'Estoy planeando viajar en diciembre.', a: ["I'm planning to travel in December.", 'I am planning to travel in December.'], tag: 'en-gerund' },
      { t: 'order', s: 'Let us walk instead of taking a taxi.', nl: 'Caminemos en lugar de tomar un taxi.', tag: 'en-gerund' },
      { t: 'match', p: [['avoid', 'evitar'], ['manage', 'lograr'], ['refuse', 'negarse'], ['suggest', 'sugerir'], ['procrastinate', 'postergar']], tag: 'en-gerund' }
    ],
    reading: {
      t: 'How to stop procrastinating', type: 'Un artículo de consejos',
      p: [
        ['Do you keep putting things off until tomorrow? You’re not alone. Most people avoid doing boring tasks, even when they know they need to do them.', '¿Sigues dejando las cosas para mañana? No estás solo. La mayoría de la gente evita hacer tareas aburridas, aunque sabe que tiene que hacerlas.'],
        ['Experts suggest starting with just five minutes. "Once you start working, you usually manage to continue," says one psychologist. Also, try to avoid checking your phone while you work.', 'Los expertos sugieren empezar con solo cinco minutos. «Una vez que empiezas a trabajar, normalmente logras seguir», dice una psicóloga. Además, trata de evitar revisar el celular mientras trabajas.'],
        ['Finally, don’t forget to reward yourself. After finishing a difficult task, enjoy doing something you love. You deserve it!', 'Por último, no olvides darte un premio. Después de terminar una tarea difícil, disfruta haciendo algo que te encante. ¡Te lo mereces!']
      ],
      gl: [['put off', 'postergar'], ['boring', 'aburrido'], ['reward', 'premiar'], ['deserve', 'merecer']],
      q: [
        { t: 'mc', q: 'What do experts suggest?', o: ['Starting with just five minutes', 'Working all night', 'Never using a phone'] },
        { t: 'mc', q: 'What should you avoid while you work?', o: ['Checking your phone', 'Drinking water', 'Taking breaks'] },
        { t: 'mc', q: 'What should you do after a difficult task?', o: ['Reward yourself', 'Start another one', 'Go to sleep'] }
      ]
    },
    say: [['I enjoy learning English.', 'Disfruto aprender inglés.'], ['I want to travel more.', 'Quiero viajar más.'], ['I’m looking forward to seeing you.', 'Tengo muchas ganas de verte.']],
    task: { nl: 'Escribe tus propósitos para el próximo año: 3 cosas que quieres empezar (want to, plan to, decide to) y 2 que quieres dejar o evitar (give up, avoid, stop).', model: "Next year I want to learn to swim. I'm planning to save money for a trip to Canada. I've decided to read one book a month. I'd like to give up drinking soda and I want to avoid checking my phone at night." },
    scenario: { nl: 'Una amiga de Denver te pregunta por tus propósitos de Año Nuevo.', role: 'You are Ashley, a friend from Denver. Talk about New Year’s resolutions: ask what the learner wants to start, give up and avoid. Share your own. Use and invite verbs with -ing and to (enjoy, avoid, want, decide, look forward to).', goal: 'Cuéntale tus propósitos y dale un consejo a ella.' }
  });

  /* ───────────────────────── B1 · 10 ───────────────────────── */
  U({
    id: 'en-b1-10', level: 'B1', icon: '✉️', title: 'I’d like to complain', nl: 'Quejas, correos formales y phrasal verbs',
    goals: ['Escribir un correo formal con una queja', 'Usar phrasal verbs comunes (turn on, look for, give back…)', 'Ser cortés y firme a la vez'],
    vocab: [
      ['complaint', 'queja / reclamo'], ['refund', 'reembolso'], ['receipt', 'recibo'], ['order', 'pedido'], ['damaged', 'dañado'], ['faulty', 'defectuoso'], ['customer service', 'servicio al cliente'],
      ['manager', 'gerente'], ['exchange', 'cambiar (un producto)'], ['warranty', 'garantía'], ['turn on / turn off', 'encender / apagar'], ['look for', 'buscar'], ['find out', 'averiguar'],
      ['give back', 'devolver'], ['fill out', 'llenar (un formulario)'], ['call back', 'devolver la llamada'], ['put up with', 'aguantar'], ['sort out', 'resolver'], ['break down', 'dañarse (una máquina)'],
      ['I look forward to hearing from you.', 'Quedo atento a su respuesta.'], ['Dear Sir or Madam', 'Estimados señores'], ['Sincerely', 'Atentamente'], ['unacceptable', 'inaceptable'], ['as soon as possible', 'lo antes posible']
    ],
    grammar: [
      { t: 'Phrasal verbs', es: 'Phrasal verbs',
        html: `<p>Un <b>phrasal verb</b> es un verbo + una partícula (up, down, on, off, out, back…) que juntos tienen un significado nuevo: <i>give</i> = dar, <i>give <b>up</b></i> = rendirse / dejar, <i>give <b>back</b></i> = devolver.</p>
<p>Con muchos se puede separar: <i>Turn <b>off</b> the TV</i> / <i>Turn the TV <b>off</b></i>. Con un pronombre, ¡siempre en medio!: <i>Turn <b>it</b> off</i> (no <s>turn off it</s>).</p>`,
        table: [['phrasal verb', 'español', 'ejemplo'], ['turn on', 'encender', 'Turn on the lights.'], ['look for', 'buscar', 'I’m looking for my keys.'], ['find out', 'averiguar', 'I’ll find out the price.'], ['break down', 'dañarse', 'My car broke down.']],
        sum: 'Turn it off. I’m looking for my keys.',
        ex: [['Can you fill out this form, please?', '¿Puede llenar este formulario, por favor?'], ['The washing machine broke down after two weeks.', 'La lavadora se dañó a las dos semanas.']] },
      { t: 'Quejarse con cortesía', es: 'Polite complaints',
        html: `<p>En inglés una queja suena mejor si es <b>cortés pero clara</b>:</p>
<p><i>I’m afraid there’s a problem with…</i> (Lamentablemente hay un problema con…) · <i>I’d like to speak to the manager, please.</i> · <i>Could you possibly…?</i> · <i>I would appreciate it if you could…</i> (Le agradecería que…)</p>`,
        table: [['directo (poco cortés)', 'cortés'], ['This is broken.', 'I’m afraid this is broken.'], ['Give me my money back.', 'I’d like a refund, please.'], ['Fix it now.', 'Could you sort it out as soon as possible?']],
        ex: [['I’m afraid the room is too noisy. Could we change rooms?', 'Lamentablemente el cuarto es muy ruidoso. ¿Podríamos cambiar de cuarto?'], ['I would appreciate it if you could call me back today.', 'Le agradecería que me devolviera la llamada hoy.']] },
      { t: 'El correo formal', es: 'Formal emails',
        html: `<p>Estructura de un correo formal en inglés:</p>
<p><b>Dear Sir or Madam</b> / <b>Dear Ms. Smith</b>, · <b>I am writing to</b> complain about… · explica el problema con datos (fecha, número de pedido) · di qué quieres: <i>I would like a refund / an exchange.</i> · <b>I look forward to hearing from you.</b> · <b>Sincerely</b>, + tu nombre.</p>
<p>En un correo formal es mejor no usar contracciones: <i>I am</i>, no <i>I’m</i>.</p>`,
        table: [['parte', 'frase'], ['saludo', 'Dear Sir or Madam,'], ['motivo', 'I am writing to complain about my order #4521.'], ['pedido', 'I would like a full refund.'], ['cierre', 'I look forward to hearing from you. Sincerely, Ana Ríos']],
        ex: [['I am writing to complain about the service I received on May 3.', 'Le escribo para quejarme del servicio que recibí el 3 de mayo.'], ['Please find attached a copy of the receipt.', 'Adjunto una copia del recibo.']] }
    ],
    dialogue: {
      t: 'At customer service', place: 'Seattle, Washington 🇺🇸',
      lines: [
        ['Agent', 'Hi, how can I help you today?', 'Hola, ¿en qué le puedo ayudar hoy?'],
        ['Carolina', 'Hi. I’m afraid there’s a problem with this coffee maker. It broke down after three days.', 'Hola. Lamentablemente hay un problema con esta cafetera. Se dañó a los tres días.'],
        ['Agent', 'I’m sorry to hear that. Do you have the receipt?', 'Lamento escuchar eso. ¿Tiene el recibo?'],
        ['Carolina', 'Yes, here it is. I turned it on this morning and nothing happened.', 'Sí, aquí está. La encendí esta mañana y no pasó nada.'],
        ['Agent', 'Let me find out if we have another one in stock… Unfortunately, we’re sold out.', 'Déjeme averiguar si tenemos otra en inventario… Lamentablemente, están agotadas.'],
        ['Carolina', 'In that case, I’d like a refund, please.', 'En ese caso, quisiera un reembolso, por favor.'],
        ['Agent', 'Of course. Could you fill out this form? The money will go back to your card in three to five days.', 'Claro. ¿Puede llenar este formulario? El dinero regresará a su tarjeta en tres a cinco días.'],
        ['Carolina', 'Great, thank you for sorting it out so quickly.', 'Perfecto, gracias por resolverlo tan rápido.']
      ],
      q: [
        { t: 'mc', q: 'What was the problem?', o: ['The coffee maker broke down', 'The coffee maker was the wrong color', 'She lost the receipt'] },
        { t: 'mc', q: 'Why can’t she exchange it?', o: ['They’re sold out', 'She doesn’t have the receipt', 'The warranty is over'] },
        { t: 'mc', q: 'When will she get her money back?', o: ['In three to five days', 'Right now', 'Next month'] }
      ]
    },
    culture: { t: 'Devolver productos en EE. UU.', html: `<p>En Estados Unidos es muy fácil devolver productos: muchas tiendas aceptan devoluciones (<b>returns</b>) en 30 días, a veces sin preguntar por qué. Guarda siempre el <b>receipt</b>.</p>
<p>⭐ Y si un servicio es malo, la gente deja una reseña (<b>review</b>) en internet. Las empresas se toman muy en serio las quejas.</p>` },
    ex: [
      { t: 'cloze', s: 'Can you turn ___ the TV? It’s too loud.', a: ['off'], o: ['off', 'on', 'up'], nl: '¿Puedes apagar la televisión? Está muy fuerte.', tag: 'en-phrasal' },
      { t: 'cloze', s: 'I’m looking ___ my keys.', a: ['for'], o: ['for', 'at', 'after'], nl: 'Estoy buscando mis llaves.', tag: 'en-phrasal' },
      { t: 'cloze', s: 'My car broke ___ on the highway.', a: ['down'], o: ['down', 'up', 'out'], nl: 'Se me dañó el carro en la autopista.', tag: 'en-phrasal' },
      { t: 'cloze', s: 'Please fill ___ this form.', a: ['out'], o: ['out', 'up', 'down'], nl: 'Por favor, llene este formulario.', tag: 'en-phrasal' },
      { t: 'cloze', s: 'I’d like a ___, please. (reembolso)', a: ['refund'], o: ['refund', 'receipt', 'return back'], nl: 'Quisiera un reembolso, por favor.', tag: 'en-formal' },
      { t: 'cloze', s: 'I am writing ___ complain about my order.', a: ['to'], o: ['to', 'for', 'about'], nl: 'Le escribo para quejarme de mi pedido.', tag: 'en-formal' },
      { t: 'cloze', s: 'I look forward to ___ from you.', a: ['hearing'], o: ['hearing', 'hear', 'heard'], nl: 'Quedo atento a su respuesta.', tag: 'en-formal' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Turn it off.', 'Turn off it.', 'Turn it of.'], tag: 'en-phrasal' },
      { t: 'mc', q: 'La forma más cortés es…', o: ['I’m afraid there’s a problem with my room.', 'Your room is bad.', 'Fix my room now.'], tag: 'en-formal' },
      { t: 'mc', q: 'Para cerrar un correo formal escribes…', o: ['Sincerely,', 'Hugs,', 'See ya,'], tag: 'en-formal' },
      { t: 'tr', nl: 'Quisiera hablar con el gerente, por favor.', a: ["I'd like to speak to the manager, please.", 'I would like to speak to the manager, please.', "I'd like to talk to the manager, please."], tag: 'en-formal' },
      { t: 'tr', nl: 'La lavadora se dañó.', a: ['The washing machine broke down.'], tag: 'en-phrasal' },
      { t: 'tr', nl: 'Voy a averiguar el precio.', a: ["I'll find out the price.", "I'm going to find out the price.", 'I will find out the price.'], tag: 'en-phrasal' },
      { t: 'tr', nl: 'Le agradecería que me llamara.', a: ['I would appreciate it if you could call me.', "I'd appreciate it if you could call me.", 'I would appreciate it if you called me.'], tag: 'en-formal' },
      { t: 'order', s: 'Could you sort it out as soon as possible?', nl: '¿Podría resolverlo lo antes posible?', tag: 'en-formal' },
      { t: 'match', p: [['refund', 'reembolso'], ['receipt', 'recibo'], ['faulty', 'defectuoso'], ['warranty', 'garantía'], ['give back', 'devolver']], tag: 'en-phrasal' }
    ],
    reading: {
      t: 'A complaint email', type: 'Un correo formal',
      p: [
        ['Dear Sir or Madam, I am writing to complain about the hotel room I stayed in from March 3 to March 6 (reservation number 88214).', 'Estimados señores: Les escribo para quejarme del cuarto de hotel en el que me hospedé del 3 al 6 de marzo (número de reserva 88214).'],
        ['When I arrived, the room had not been cleaned. The air conditioning broke down on the first night, and nobody came to fix it, although I called the front desk three times.', 'Cuando llegué, el cuarto no se había limpiado. El aire acondicionado se dañó la primera noche y nadie vino a arreglarlo, aunque llamé a la recepción tres veces.'],
        ['I find this unacceptable for a four-star hotel. I would appreciate it if you could give back the cost of one night. I look forward to hearing from you. Sincerely, Ana Ríos', 'Me parece inaceptable para un hotel de cuatro estrellas. Les agradecería que me devolvieran el costo de una noche. Quedo atenta a su respuesta. Atentamente, Ana Ríos']
      ],
      gl: [['stayed', 'me hospedé'], ['although', 'aunque'], ['front desk', 'recepción'], ['four-star', 'de cuatro estrellas']],
      q: [
        { t: 'mc', q: 'How long did Ana stay at the hotel?', o: ['Three nights', 'One night', 'A week'] },
        { t: 'mc', q: 'What broke down?', o: ['The air conditioning', 'The TV', 'The elevator'] },
        { t: 'mc', q: 'What does Ana want?', o: ['The cost of one night back', 'A free week', 'A new room'] }
      ]
    },
    say: [['I’m afraid there’s a problem with my order.', 'Lamentablemente hay un problema con mi pedido.'], ['I’d like a refund, please.', 'Quisiera un reembolso, por favor.'], ['Could you turn it off, please?', '¿Podría apagarlo, por favor?']],
    task: { nl: 'Escribe un correo formal de queja (unas 80 palabras) sobre un producto o servicio. Incluye saludo, el problema con datos, lo que quieres y el cierre.', model: "Dear Sir or Madam, I am writing to complain about the headphones I ordered on your website (order #5532). They arrived on May 2, but the box was damaged and the left side does not work. I would like a full refund or a new pair. I look forward to hearing from you. Sincerely, Carlos Pérez" },
    scenario: { nl: 'Vas al servicio al cliente de una tienda en Seattle porque un producto se dañó.', role: 'You are a customer service agent at a store in Seattle. The learner has a problem with a product. Be polite, ask for details and the receipt, offer an exchange or a refund, and ask them to fill out a form. Use phrasal verbs naturally.', goal: 'Explica el problema con cortesía y consigue un reembolso o un cambio.' }
  });
})(window.SPT);
