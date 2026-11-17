/* Inglés A2, unidades 1–5 (inglés estadounidense, explicaciones en español latinoamericano). Mismo formato que a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-past': 'pasado simple regular (-ed)', 'en-was': 'was / were', 'en-irr': 'pasado irregular (went, saw…)', 'en-did': 'did en preguntas y negativas',
    'en-should': 'should / shouldn’t', 'en-health': 'la salud', 'en-comp': 'comparativos (bigger, more…)', 'en-sup': 'superlativos (the biggest…)',
    'en-pp': 'present perfect (have done)', 'en-ever': 'ever / never / already / yet'
  });

  /* ───────────────────────── A2 · 1 ───────────────────────── */
  U({
    id: 'en-a2-01', level: 'A2', icon: '🕰️', title: 'Last weekend', nl: 'El fin de semana pasado',
    goals: ['Contar lo que hiciste con el pasado regular (-ed)', 'Usar was y were', 'Usar yesterday, last y ago'],
    vocab: [
      ['yesterday', 'ayer'], ['last night', 'anoche'], ['last weekend', 'el fin de semana pasado'], ['last year', 'el año pasado'], ['two days ago', 'hace dos días'],
      ['stay home', 'quedarse en casa'], ['watch', 'ver / mirar'], ['visit', 'visitar'], ['cook', 'cocinar'], ['clean', 'limpiar'], ['walk', 'caminar'], ['call', 'llamar'],
      ['play', 'jugar'], ['study', 'estudiar'], ['travel', 'viajar'], ['arrive', 'llegar'], ['start', 'empezar'], ['finish', 'terminar'], ['relax', 'relajarse'],
      ['tired', 'cansado'], ['great', 'genial'], ['terrible', 'terrible'], ['crowded', 'lleno de gente'], ['How was your weekend?', '¿Qué tal tu fin de semana?'], ['It was fun.', 'Estuvo divertido.']
    ],
    grammar: [
      { t: 'Was y were: el pasado de to be', es: 'Was / were',
        html: `<p>El pasado de <b>to be</b> tiene dos formas: <b>was</b> (I, he, she, it) y <b>were</b> (you, we, they).</p>
<p>Pregunta: <b>Were you</b> at home? <b>Was it</b> fun? Negativa: <b>wasn’t</b>, <b>weren’t</b>.</p>`,
        table: [['persona', 'afirmativa', 'negativa'], ['I / he / she / it', 'was', 'wasn’t'], ['you / we / they', 'were', 'weren’t']],
        sum: 'I was tired. We were at the beach.',
        ex: [['The party was great!', '¡La fiesta estuvo genial!'], ['Where were you last night?', '¿Dónde estabas anoche?']] },
      { t: 'Pasado simple regular: -ed', es: 'Past simple (regular)',
        html: `<p>Los verbos regulares forman el pasado con <b>-ed</b>, igual para todas las personas: <i>I play<b>ed</b>, she play<b>ed</b>, they play<b>ed</b></i>.</p>
<p>Escritura: cook → cook<b>ed</b>, live → liv<b>ed</b> (solo -d), study → stud<b>ied</b>, stop → stop<b>ped</b>.</p>
<p>Pronunciación: la -ed suena /t/ (walked), /d/ (played) o /id/ después de t o d (start<b>ed</b>, visit<b>ed</b>).</p>`,
        table: [['verbo', 'pasado'], ['watch', 'watched'], ['arrive', 'arrived'], ['study', 'studied'], ['stop', 'stopped']],
        ex: [['I watched a movie last night.', 'Anoche vi una película.'], ['We visited my grandparents on Sunday.', 'El domingo visitamos a mis abuelos.']] },
      { t: 'Yesterday, last, ago', es: 'Time expressions',
        html: `<p><b>yesterday</b> = ayer · <b>last</b> + semana/mes/año = el pasado: <i>last week</i>, <i>last summer</i> · <b>ago</b> = hace, y va <b>después</b> del tiempo: <i>three days <b>ago</b></i> (hace tres días).</p>
<p>Ojo: <i>last night</i> = anoche, no <s>yesterday night</s>.</p>`,
        table: [['inglés', 'español'], ['yesterday morning', 'ayer en la mañana'], ['last night', 'anoche'], ['last month', 'el mes pasado'], ['a week ago', 'hace una semana']],
        ex: [['I started this job two years ago.', 'Empecé este trabajo hace dos años.'], ['She called me last night.', 'Ella me llamó anoche.']] }
    ],
    dialogue: {
      t: 'Monday morning', place: 'Miami, Florida 🇺🇸',
      lines: [
        ['Jen', 'Good morning, Carlos! How was your weekend?', '¡Buenos días, Carlos! ¿Qué tal tu fin de semana?'],
        ['Carlos', 'It was great, thanks. I visited my cousins in Fort Lauderdale.', 'Estuvo genial, gracias. Visité a mis primos en Fort Lauderdale.'],
        ['Jen', 'Nice! What did you do there?', '¡Qué bien! ¿Y qué hicieron allá?'],
        ['Carlos', 'We played volleyball on the beach and cooked a big dinner.', 'Jugamos voleibol en la playa y cocinamos una cena grande.'],
        ['Jen', 'Sounds fun. Was the beach crowded?', 'Suena divertido. ¿La playa estaba llena?'],
        ['Carlos', 'Yes, it was very crowded. And you? Were you at home?', 'Sí, estaba muy llena. ¿Y tú? ¿Estuviste en casa?'],
        ['Jen', 'Yes. I stayed home and cleaned my apartment. Then I watched three movies.', 'Sí. Me quedé en casa y limpié mi apartamento. Después vi tres películas.'],
        ['Carlos', 'That sounds relaxing too!', '¡Eso también suena relajante!']
      ],
      q: [
        { t: 'mc', q: 'Who did Carlos visit?', o: ['His cousins', 'His parents', 'Jen'] },
        { t: 'mc', q: 'What was the beach like?', o: ['Very crowded', 'Empty', 'Closed'] },
        { t: 'mc', q: 'What did Jen do?', o: ['She stayed home and watched movies', 'She went to the beach', 'She worked'] }
      ]
    },
    culture: { t: 'Small talk en la oficina', html: `<p>Los lunes en una oficina de EE. UU. es muy común preguntar <b>How was your weekend?</b> La respuesta suele ser corta y positiva: <i>Good, thanks! I just relaxed.</i></p>
<p>💬 No hace falta contar todo con detalles. Y es normal preguntar de vuelta: <i>How about you?</i></p>` },
    ex: [
      { t: 'cloze', s: 'I ___ tired yesterday.', a: ['was'], o: ['was', 'were', 'am'], nl: 'Ayer estaba cansado.', tag: 'en-was' },
      { t: 'cloze', s: 'We ___ at the beach last Sunday.', a: ['were'], o: ['were', 'was', 'are'], nl: 'El domingo pasado estuvimos en la playa.', tag: 'en-was' },
      { t: 'cloze', s: 'She ___ a movie last night. (watch)', a: ['watched'], o: ['watched', 'watch', 'watches'], nl: 'Anoche ella vio una película.', tag: 'en-past' },
      { t: 'cloze', s: 'They ___ English for two years. (study)', a: ['studied'], o: ['studied', 'studyed', 'studies'], nl: 'Estudiaron inglés durante dos años.', tag: 'en-past' },
      { t: 'cloze', s: 'I started this job three years ___.', a: ['ago'], o: ['ago', 'before', 'last'], nl: 'Empecé este trabajo hace tres años.', tag: 'en-past' },
      { t: 'cloze', s: 'She called me ___ night.', a: ['last'], o: ['last', 'yesterday', 'ago'], nl: 'Ella me llamó anoche.', tag: 'en-past' },
      { t: 'cloze', s: '___ the party fun?', a: ['Was'], o: ['Was', 'Were', 'Did'], nl: '¿La fiesta estuvo divertida?', tag: 'en-was' },
      { t: 'mc', q: '«anoche» es…', o: ['last night', 'yesterday night', 'the night past'], tag: 'en-past' },
      { t: 'mc', q: '«hace dos días» es…', o: ['two days ago', 'ago two days', 'makes two days'], tag: 'en-past' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['We were very tired.', 'We was very tired.', 'We are very tired yesterday.'], tag: 'en-was' },
      { t: 'tr', nl: 'Ayer cociné para mi familia.', a: ['I cooked for my family yesterday.', 'Yesterday I cooked for my family.'], tag: 'en-past' },
      { t: 'tr', nl: '¿Qué tal tu fin de semana?', a: ['How was your weekend?'], tag: 'en-was' },
      { t: 'tr', nl: 'Visitamos a mis abuelos el fin de semana pasado.', a: ['We visited my grandparents last weekend.', 'Last weekend we visited my grandparents.'], tag: 'en-past' },
      { t: 'tr', nl: 'La playa estaba llena de gente.', a: ['The beach was crowded.', 'The beach was very crowded.', 'The beach was full of people.'], tag: 'en-was' },
      { t: 'order', s: 'I stayed home and cleaned my apartment.', nl: 'Me quedé en casa y limpié mi apartamento.', tag: 'en-past' },
      { t: 'match', p: [['yesterday', 'ayer'], ['arrive', 'llegar'], ['finish', 'terminar'], ['crowded', 'lleno de gente'], ['tired', 'cansado']], tag: 'en-past' }
    ],
    reading: {
      t: 'A rainy Saturday', type: 'Un diario',
      p: [
        ['Last Saturday I wanted to go to the beach, but it rained all day. So I stayed home.', 'El sábado pasado quería ir a la playa, pero llovió todo el día. Así que me quedé en casa.'],
        ['In the morning I cleaned the kitchen and called my mom in Panama. We talked for an hour.', 'En la mañana limpié la cocina y llamé a mi mamá en Panamá. Hablamos una hora.'],
        ['In the afternoon my neighbor knocked on the door. She baked cookies and we played cards. It wasn’t a beach day, but it was a nice day.', 'En la tarde mi vecina tocó la puerta. Había horneado galletas y jugamos cartas. No fue un día de playa, pero fue un día bonito.']
      ],
      gl: [['wanted', 'quería'], ['neighbor', 'vecino / vecina'], ['knocked', 'tocó (la puerta)'], ['baked', 'horneó']],
      q: [
        { t: 'mc', q: 'Why didn’t the writer go to the beach?', o: ['Because it rained', 'Because the beach was closed', 'Because of work'] },
        { t: 'mc', q: 'How long did the writer talk with mom?', o: ['For an hour', 'For ten minutes', 'All day'] },
        { t: 'mc', q: 'What did the neighbor bring?', o: ['Cookies', 'Cards', 'A cake'] }
      ]
    },
    say: [['How was your weekend?', '¿Qué tal tu fin de semana?'], ['I stayed home and watched movies.', 'Me quedé en casa y vi películas.'], ['It was great, thanks!', '¡Estuvo genial, gracias!']],
    task: { nl: 'Cuenta en 5 frases qué hiciste el fin de semana pasado. Usa was/were y verbos regulares en pasado.', model: "Last weekend was great. On Saturday I visited my friend Ana. We cooked dinner and watched a movie. On Sunday I stayed home and relaxed. I was very happy." },
    scenario: { nl: 'Es lunes y una compañera de trabajo te pregunta por tu fin de semana.', role: 'You are Jen, a friendly coworker in an office in Miami. It is Monday morning. Ask about the learner’s weekend, react with interest and tell what you did (you stayed home and watched movies).', goal: 'Cuéntale qué hiciste el fin de semana y pregúntale por el suyo.' }
  });

  /* ───────────────────────── A2 · 2 ───────────────────────── */
  U({
    id: 'en-a2-02', level: 'A2', icon: '✈️', title: 'A great trip', nl: 'Un viaje inolvidable',
    goals: ['Usar los verbos irregulares más comunes en pasado', 'Hacer preguntas y negativas con did', 'Contar un viaje'],
    vocab: [
      ['go → went', 'ir → fui'], ['see → saw', 'ver → vi'], ['eat → ate', 'comer → comí'], ['take → took', 'tomar → tomé'], ['buy → bought', 'comprar → compré'],
      ['have → had', 'tener → tuve'], ['get → got', 'conseguir / llegar → conseguí'], ['make → made', 'hacer → hice'], ['come → came', 'venir → vine'], ['fly → flew', 'volar → volé'],
      ['meet → met', 'conocer → conocí'], ['sleep → slept', 'dormir → dormí'], ['flight', 'vuelo'], ['airport', 'aeropuerto'], ['passport', 'pasaporte'], ['suitcase', 'maleta'],
      ['hotel room', 'cuarto de hotel'], ['sightseeing', 'turismo / pasear'], ['souvenir', 'recuerdo'], ['amazing', 'increíble'], ['delayed', 'retrasado'], ['lost', 'perdido'],
      ['trip', 'viaje'], ['abroad', 'en el extranjero']
    ],
    grammar: [
      { t: 'Verbos irregulares', es: 'Irregular verbs',
        html: `<p>Muchos verbos muy comunes son <b>irregulares</b>: no llevan -ed y hay que aprenderlos de memoria. La buena noticia: también son iguales para todas las personas.</p>
<p><i>I <b>went</b>, she <b>went</b>, they <b>went</b>.</i></p>`,
        table: [['infinitivo', 'pasado', 'español'], ['go', 'went', 'fui / fue'], ['see', 'saw', 'vi / vio'], ['eat', 'ate', 'comí / comió'], ['buy', 'bought', 'compré'], ['take', 'took', 'tomé'], ['have', 'had', 'tuve']],
        sum: 'I went, I saw, I ate, I bought.',
        ex: [['We went to New York last summer.', 'El verano pasado fuimos a Nueva York.'], ['I bought a souvenir for my mom.', 'Le compré un recuerdo a mi mamá.']] },
      { t: 'Did: preguntas y negativas', es: 'Did / didn’t',
        html: `<p>En pasado, las preguntas y negativas usan <b>did</b> / <b>didn’t</b>, y el verbo vuelve al <b>infinitivo</b>:</p>
<p><i><b>Did</b> you <b>go</b> to the museum?</i> (no <s>Did you went</s>) · <i>I <b>didn’t see</b> the Statue of Liberty.</i></p>
<p>Respuesta corta: <b>Yes, I did.</b> / <b>No, I didn’t.</b></p>`,
        table: [['afirmativa', 'pregunta', 'negativa'], ['You went.', 'Did you go?', 'You didn’t go.'], ['She ate.', 'Did she eat?', 'She didn’t eat.']],
        ex: [['Did you have a good flight? — Yes, I did.', '¿Tuviste un buen vuelo? — Sí.'], ['We didn’t take many pictures.', 'No tomamos muchas fotos.']] },
      { t: 'Preguntas con palabras: Where did…?', es: 'Wh- questions in the past',
        html: `<p>Con palabras de pregunta el orden es: <b>Where / What / When + did + sujeto + verbo</b>.</p>
<p><i>Where <b>did you stay</b>? What <b>did you eat</b>? When <b>did she arrive</b>?</i></p>`,
        table: [['pregunta', 'respuesta'], ['Where did you go?', 'We went to Chicago.'], ['What did you see?', 'We saw a baseball game.'], ['How long did you stay?', 'We stayed a week.']],
        ex: [['Where did you stay? — At a small hotel downtown.', '¿Dónde se quedaron? — En un hotel pequeño en el centro.'], ['What did you like the most?', '¿Qué fue lo que más te gustó?']] }
    ],
    dialogue: {
      t: 'Back from New York', place: 'Panama City 🇵🇦',
      lines: [
        ['Mike', 'Welcome back! How was New York?', '¡Bienvenida! ¿Qué tal Nueva York?'],
        ['Rosa', 'Amazing! But the flight was terrible. It was delayed five hours.', '¡Increíble! Pero el vuelo fue terrible. Se retrasó cinco horas.'],
        ['Mike', 'Oh no! Where did you stay?', '¡Ay, no! ¿Dónde te quedaste?'],
        ['Rosa', 'At a small hotel in Manhattan. The room was tiny, but I didn’t care.', 'En un hotel pequeño en Manhattan. El cuarto era chiquito, pero no me importó.'],
        ['Mike', 'What did you see?', '¿Qué viste?'],
        ['Rosa', 'I saw Times Square and Central Park, and I went to a Broadway show.', 'Vi Times Square y Central Park, y fui a un espectáculo de Broadway.'],
        ['Mike', 'Did you go to the Statue of Liberty?', '¿Fuiste a la Estatua de la Libertad?'],
        ['Rosa', 'No, I didn’t. It rained that day. But I ate the best pizza of my life!', 'No. Ese día llovió. ¡Pero comí la mejor pizza de mi vida!']
      ],
      q: [
        { t: 'mc', q: 'What was the problem with the flight?', o: ['It was delayed', 'It was canceled', 'Her suitcase got lost'] },
        { t: 'mc', q: 'What did Rosa see?', o: ['Times Square and Central Park', 'The Statue of Liberty', 'A baseball game'] },
        { t: 'mc', q: 'Why didn’t she go to the Statue of Liberty?', o: ['It rained', 'It was closed', 'She was tired'] }
      ]
    },
    culture: { t: 'Viajar a EE. UU.', html: `<p>Para entrar a Estados Unidos con pasaporte panameño hace falta una <b>visa</b>. En migración te pueden preguntar: <i>What’s the purpose of your visit?</i> (¿cuál es el propósito de tu visita?) y <i>How long are you staying?</i></p>
<p>🧳 Respuestas cortas y claras son lo mejor: <i>Tourism. One week.</i></p>` },
    ex: [
      { t: 'cloze', s: 'We ___ to Chicago last year. (go)', a: ['went'], o: ['went', 'goed', 'gone'], nl: 'El año pasado fuimos a Chicago.', tag: 'en-irr' },
      { t: 'cloze', s: 'I ___ a souvenir for my sister. (buy)', a: ['bought'], o: ['bought', 'buyed', 'buy'], nl: 'Le compré un recuerdo a mi hermana.', tag: 'en-irr' },
      { t: 'cloze', s: 'She ___ a lot of pictures. (take)', a: ['took'], o: ['took', 'taked', 'takes'], nl: 'Ella tomó muchas fotos.', tag: 'en-irr' },
      { t: 'cloze', s: '___ you have a good flight?', a: ['Did'], o: ['Did', 'Were', 'Do'], nl: '¿Tuviste un buen vuelo?', tag: 'en-did' },
      { t: 'cloze', s: 'Did you ___ the museum?', a: ['see'], o: ['see', 'saw', 'seen'], nl: '¿Viste el museo?', x: 'Después de did, el verbo va en infinitivo.', tag: 'en-did' },
      { t: 'cloze', s: 'We ___ go to the beach. It rained.', a: ['didn’t'], o: ['didn’t', 'don’t', 'wasn’t'], nl: 'No fuimos a la playa. Llovió.', tag: 'en-did' },
      { t: 'cloze', s: 'Where did you ___?', a: ['stay'], o: ['stay', 'stayed', 'staying'], nl: '¿Dónde te quedaste?', tag: 'en-did' },
      { t: 'mc', q: 'El pasado de «eat» es…', o: ['ate', 'eated', 'eaten'], tag: 'en-irr' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Did she go to Miami?', 'Did she went to Miami?', 'She did went to Miami?'], tag: 'en-did' },
      { t: 'mc', q: '«Mi vuelo se retrasó» es…', o: ['My flight was delayed.', 'My flight was late-ed.', 'My flight retarded.'], tag: 'en-irr' },
      { t: 'tr', nl: 'Fui a Nueva York el verano pasado.', a: ['I went to New York last summer.', 'Last summer I went to New York.'], tag: 'en-irr' },
      { t: 'tr', nl: '¿Qué comiste?', a: ['What did you eat?'], tag: 'en-did' },
      { t: 'tr', nl: 'No vimos la estatua.', a: ["We didn't see the statue.", 'We did not see the statue.'], tag: 'en-did' },
      { t: 'tr', nl: 'Conocí a mucha gente.', a: ['I met a lot of people.', 'I met many people.', 'I met lots of people.'], tag: 'en-irr' },
      { t: 'order', s: 'Did you take a lot of pictures?', nl: '¿Tomaste muchas fotos?', tag: 'en-did' },
      { t: 'match', p: [['go', 'went'], ['see', 'saw'], ['eat', 'ate'], ['buy', 'bought'], ['fly', 'flew']], tag: 'en-irr' }
    ],
    reading: {
      t: 'Lost in Washington', type: 'Una historia de viaje',
      p: [
        ['Two years ago I flew to Washington, D.C. for a conference. On the first day I took the metro, but I got off at the wrong station.', 'Hace dos años volé a Washington D. C. para una conferencia. El primer día tomé el metro, pero me bajé en la estación equivocada.'],
        ['I didn’t have internet on my phone, so I asked a woman for directions. She didn’t know the hotel, but she walked with me to a coffee shop with Wi-Fi.', 'No tenía internet en el celular, así que le pregunté a una mujer cómo llegar. Ella no conocía el hotel, pero caminó conmigo hasta un café con wifi.'],
        ['We had coffee and talked for an hour. I arrived late to the conference, but I made a new friend. We still write to each other!', 'Tomamos café y hablamos una hora. Llegué tarde a la conferencia, pero hice una nueva amiga. ¡Todavía nos escribimos!']
      ],
      gl: [['got off', 'se bajó'], ['the wrong station', 'la estación equivocada'], ['asked for directions', 'preguntó cómo llegar'], ['each other', 'el uno al otro']],
      q: [
        { t: 'mc', q: 'Why did the writer go to Washington?', o: ['For a conference', 'For a vacation', 'To visit family'] },
        { t: 'mc', q: 'What was the problem?', o: ['The writer got off at the wrong station', 'The flight was delayed', 'The hotel was closed'] },
        { t: 'mc', q: 'What happened in the end?', o: ['The writer made a new friend', 'The writer missed the flight', 'The writer lost the phone'] }
      ]
    },
    say: [['Where did you go on vacation?', '¿Adónde fuiste de vacaciones?'], ['We went to Mexico and ate a lot of tacos.', 'Fuimos a México y comimos muchos tacos.'], ['I didn’t see the museum.', 'No vi el museo.']],
    task: { nl: 'Cuenta un viaje en 5 o 6 frases: adónde fuiste, cómo, qué viste, qué comiste y algo que salió mal.', model: "Last year I went to Costa Rica with my friends. We took a bus from Panama. We saw volcanoes and ate gallo pinto. One day it rained a lot and we didn't go to the beach. It was an amazing trip." },
    scenario: { nl: 'Un amigo de Boston te pregunta por tus últimas vacaciones.', role: 'You are Mike, a curious friend from Boston. Ask the learner about their last trip: where, when, with who, what they saw and ate. Ask follow-up questions with "did".', goal: 'Cuéntale tu viaje y contesta todas sus preguntas.' }
  });

  /* ───────────────────────── A2 · 3 ───────────────────────── */
  U({
    id: 'en-a2-03', level: 'A2', icon: '🩺', title: 'At the doctor’s', nl: 'En el médico',
    goals: ['Decir qué te duele', 'Dar consejos con should', 'Entender instrucciones del médico'],
    vocab: [
      ['head', 'cabeza'], ['stomach', 'estómago'], ['back', 'espalda'], ['throat', 'garganta'], ['tooth / teeth', 'diente / dientes'], ['arm', 'brazo'], ['leg', 'pierna'],
      ['headache', 'dolor de cabeza'], ['stomachache', 'dolor de estómago'], ['sore throat', 'dolor de garganta'], ['fever', 'fiebre'], ['cough', 'tos'], ['a cold', 'un resfriado'],
      ['the flu', 'la gripe'], ['sick', 'enfermo'], ['hurt', 'doler / lastimar'], ['medicine', 'medicina'], ['pill', 'pastilla'], ['prescription', 'receta médica'],
      ['appointment', 'cita'], ['rest', 'descansar'], ['What’s the matter?', '¿Qué le pasa?'], ['I feel sick.', 'Me siento mal.'], ['Get well soon!', '¡Que te mejores!'], ['pharmacy', 'farmacia']
    ],
    grammar: [
      { t: 'Have a… / My … hurts', es: 'Talking about pain',
        html: `<p>Para enfermedades se usa <b>have</b>: <i>I <b>have</b> a headache / a fever / a cold / the flu</i>.</p>
<p>Para una parte del cuerpo se usa <b>hurt</b>: <i>My back <b>hurts</b>. My feet <b>hurt</b>.</i> Ojo: en inglés se usa el posesivo, no el artículo: <i><b>my</b> head</i>, no <s>the head</s>.</p>`,
        table: [['español', 'inglés'], ['Me duele la cabeza.', 'I have a headache. / My head hurts.'], ['Tengo fiebre.', 'I have a fever.'], ['Me duele la espalda.', 'My back hurts.']],
        sum: 'I have a headache. My back hurts.',
        ex: [['I have a sore throat and a cough.', 'Me duele la garganta y tengo tos.'], ['My leg hurts when I walk.', 'Me duele la pierna cuando camino.']] },
      { t: 'Should: consejos', es: 'Should / shouldn’t',
        html: `<p><b>Should</b> = deberías. Es igual para todas las personas y va con el verbo sin <i>to</i>: <i>You <b>should rest</b>.</i></p>
<p>Negativa: <b>shouldn’t</b>: <i>You shouldn’t drink coffee.</i> Pregunta: <i><b>Should I</b> take this medicine?</i></p>`,
        table: [['consejo', 'español'], ['You should drink water.', 'Deberías tomar agua.'], ['You shouldn’t go to work.', 'No deberías ir a trabajar.'], ['Should I call a doctor?', '¿Debería llamar a un médico?']],
        ex: [['You should stay in bed for two days.', 'Deberías quedarte en cama dos días.'], ['She shouldn’t eat spicy food.', 'Ella no debería comer comida picante.']] },
      { t: 'Instrucciones: take, twice a day', es: 'Doctor’s instructions',
        html: `<p>El médico usa el imperativo: <b>Take</b> one pill twice a day. <b>Don’t</b> drink alcohol. <b>Come back</b> next week.</p>
<p>Frecuencias útiles: <b>once a day</b>, <b>twice a day</b>, <b>every eight hours</b>, <b>before / after meals</b>.</p>`,
        table: [['inglés', 'español'], ['Take two pills.', 'Tome dos pastillas.'], ['every eight hours', 'cada ocho horas'], ['after meals', 'después de las comidas']],
        ex: [['Take this medicine every eight hours.', 'Tome esta medicina cada ocho horas.'], ['Don’t forget to drink a lot of water.', 'No olvide tomar mucha agua.']] }
    ],
    dialogue: {
      t: 'At the clinic', place: 'Houston, Texas 🇺🇸',
      lines: [
        ['Doctor', 'Good morning. What’s the matter?', 'Buenos días. ¿Qué le pasa?'],
        ['Pedro', 'I feel sick. I have a sore throat and a fever.', 'Me siento mal. Me duele la garganta y tengo fiebre.'],
        ['Doctor', 'When did it start?', '¿Cuándo empezó?'],
        ['Pedro', 'Two days ago. And last night I had a bad headache.', 'Hace dos días. Y anoche tuve un dolor de cabeza fuerte.'],
        ['Doctor', 'Let me see… It’s the flu. You should stay home and rest.', 'A ver… Es gripe. Debería quedarse en casa y descansar.'],
        ['Pedro', 'Should I take any medicine?', '¿Debería tomar alguna medicina?'],
        ['Doctor', 'Take one of these pills every eight hours. And drink a lot of water.', 'Tome una de estas pastillas cada ocho horas. Y tome mucha agua.'],
        ['Pedro', 'Can I go to work tomorrow?', '¿Puedo ir a trabajar mañana?'],
        ['Doctor', 'No, you shouldn’t. Come back on Friday if you don’t feel better.', 'No, no debería. Regrese el viernes si no se siente mejor.']
      ],
      q: [
        { t: 'mc', q: 'What does Pedro have?', o: ['The flu', 'A broken leg', 'A stomachache'] },
        { t: 'mc', q: 'How often should he take the pills?', o: ['Every eight hours', 'Once a day', 'Twice a week'] },
        { t: 'mc', q: 'Can he go to work tomorrow?', o: ['No, he shouldn’t', 'Yes, in the afternoon', 'Yes, if he takes the pills'] }
      ]
    },
    culture: { t: 'Seguro médico y la farmacia', html: `<p>En Estados Unidos la atención médica es muy cara sin seguro (<b>health insurance</b>). Para cosas pequeñas mucha gente va a una <b>urgent care</b> en lugar de la sala de emergencias.</p>
<p>💊 Las farmacias grandes (<i>drugstores</i>) venden de todo: medicinas, comida, maquillaje. Algunas medicinas solo se venden con receta (<b>prescription</b>).</p>` },
    ex: [
      { t: 'cloze', s: 'I ___ a headache.', a: ['have'], o: ['have', 'am', 'hurt'], nl: 'Me duele la cabeza.', tag: 'en-health' },
      { t: 'cloze', s: 'My back ___.', a: ['hurts'], o: ['hurts', 'hurt', 'has pain'], nl: 'Me duele la espalda.', tag: 'en-health' },
      { t: 'cloze', s: 'You ___ rest. (deberías)', a: ['should'], o: ['should', 'should to', 'shoulds'], nl: 'Deberías descansar.', tag: 'en-should' },
      { t: 'cloze', s: 'You ___ go to work today.', a: ['shouldn’t'], o: ['shouldn’t', 'don’t should', 'not should'], nl: 'Hoy no deberías ir a trabajar.', tag: 'en-should' },
      { t: 'cloze', s: '___ I take this medicine?', a: ['Should'], o: ['Should', 'Do', 'Am'], nl: '¿Debería tomar esta medicina?', tag: 'en-should' },
      { t: 'cloze', s: 'Take one pill ___ eight hours.', a: ['every'], o: ['every', 'each of', 'all'], nl: 'Tome una pastilla cada ocho horas.', tag: 'en-health' },
      { t: 'mc', q: 'El médico pregunta «¿Qué le pasa?». Dice…', o: ['What’s the matter?', 'What passes you?', 'What do you have matter?'], tag: 'en-health' },
      { t: 'mc', q: '«Me duele la garganta» es…', o: ['I have a sore throat.', 'I have pain of throat.', 'The throat hurts me.'], tag: 'en-health' },
      { t: 'mc', q: 'A alguien enfermo le dices…', o: ['Get well soon!', 'Good luck!', 'Have fun!'], tag: 'en-health' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['She should see a doctor.', 'She should to see a doctor.', 'She shoulds see a doctor.'], tag: 'en-should' },
      { t: 'tr', nl: 'Tengo fiebre.', a: ['I have a fever.', "I've got a fever."], tag: 'en-health' },
      { t: 'tr', nl: 'Deberías tomar agua.', a: ['You should drink water.', 'You should drink some water.'], tag: 'en-should' },
      { t: 'tr', nl: 'Me siento mal.', a: ['I feel sick.', "I don't feel well.", 'I feel bad.'], tag: 'en-health' },
      { t: 'order', s: 'You should stay in bed for two days.', nl: 'Deberías quedarte en cama dos días.', tag: 'en-should' },
      { t: 'match', p: [['head', 'cabeza'], ['back', 'espalda'], ['cough', 'tos'], ['fever', 'fiebre'], ['pill', 'pastilla']], tag: 'en-health' }
    ],
    reading: {
      t: 'Five tips for a cold', type: 'Un artículo de salud',
      p: [
        ['Do you have a cold? Don’t worry. Most colds go away in a week. But there are some things you should do.', '¿Tienes un resfriado? No te preocupes. La mayoría de los resfriados se quitan en una semana. Pero hay algunas cosas que deberías hacer.'],
        ['First, you should rest and sleep a lot. Second, drink water, tea or soup. Hot chicken soup is great for a sore throat.', 'Primero, deberías descansar y dormir mucho. Segundo, toma agua, té o sopa. La sopa de pollo caliente es muy buena para el dolor de garganta.'],
        ['You shouldn’t go to work or school, because other people can get sick. And wash your hands often! If you have a high fever for three days, you should see a doctor.', 'No deberías ir al trabajo o a la escuela, porque otras personas se pueden enfermar. ¡Y lávate las manos seguido! Si tienes fiebre alta durante tres días, deberías ir al médico.']
      ],
      gl: [['go away', 'quitarse / desaparecer'], ['most', 'la mayoría'], ['wash your hands', 'lavarte las manos'], ['high fever', 'fiebre alta']],
      q: [
        { t: 'mc', q: 'How long does a cold usually last?', o: ['About a week', 'One day', 'A month'] },
        { t: 'mc', q: 'What is good for a sore throat?', o: ['Hot chicken soup', 'Cold soda', 'Coffee'] },
        { t: 'mc', q: 'When should you see a doctor?', o: ['If you have a high fever for three days', 'On the first day', 'Never'] }
      ]
    },
    say: [['I have a headache and a fever.', 'Me duele la cabeza y tengo fiebre.'], ['You should rest.', 'Deberías descansar.'], ['Get well soon!', '¡Que te mejores!']],
    task: { nl: 'Escribe un mensaje a tu jefe: explica que estás enfermo, qué te duele y qué te dijo el médico.', model: "Hi Mr. Brown, I'm sorry, but I can't come to work today. I have the flu. I have a fever and a sore throat. The doctor said I should rest for two days." },
    scenario: { nl: 'Te sientes mal y vas al médico en Houston.', role: 'You are Dr. Ramírez, a kind doctor at a clinic in Houston. Ask what the matter is, since when, and give advice with "should" and clear instructions for medicine.', goal: 'Explica tus síntomas y pregunta qué debes hacer.' }
  });

  /* ───────────────────────── A2 · 4 ───────────────────────── */
  U({
    id: 'en-a2-04', level: 'A2', icon: '🏙️', title: 'Bigger and better', nl: 'Comparar ciudades y lugares',
    goals: ['Comparar con -er y more', 'Usar superlativos (the biggest, the most…)', 'Describir ciudades y países'],
    vocab: [
      ['big', 'grande'], ['small', 'pequeño'], ['old', 'viejo / antiguo'], ['new', 'nuevo'], ['cheap', 'barato'], ['expensive', 'caro'], ['safe', 'seguro'], ['dangerous', 'peligroso'],
      ['busy', 'concurrido / ajetreado'], ['quiet', 'tranquilo'], ['clean', 'limpio'], ['dirty', 'sucio'], ['beautiful', 'bonito'], ['interesting', 'interesante'], ['modern', 'moderno'],
      ['good → better → the best', 'bueno → mejor → el mejor'], ['bad → worse → the worst', 'malo → peor → el peor'], ['far → farther', 'lejos → más lejos'],
      ['population', 'población'], ['traffic', 'tráfico'], ['skyscraper', 'rascacielos'], ['countryside', 'el campo'], ['nightlife', 'vida nocturna'], ['than', 'que (al comparar)']
    ],
    grammar: [
      { t: 'Comparativos', es: 'Comparatives',
        html: `<p>Adjetivos cortos: <b>-er + than</b>. <i>Panama City is hot<b>ter than</b> Boquete.</i></p>
<p>Adjetivos largos (2 sílabas o más): <b>more + adjetivo + than</b>. <i>New York is <b>more expensive than</b> Miami.</i></p>
<p>Escritura: big → bi<b>gg</b>er, easy → eas<b>ier</b>. Irregulares: good → <b>better</b>, bad → <b>worse</b>.</p>`,
        table: [['adjetivo', 'comparativo'], ['cheap', 'cheaper than'], ['big', 'bigger than'], ['busy', 'busier than'], ['beautiful', 'more beautiful than'], ['good', 'better than']],
        sum: 'Bigger than, cheaper than, more expensive than, better than.',
        ex: [['Boquete is cooler than Panama City.', 'Boquete es más fresco que Ciudad de Panamá.'], ['The subway is faster than the bus.', 'El metro es más rápido que el bus.']] },
      { t: 'Superlativos', es: 'Superlatives',
        html: `<p>Para decir <i>el más…</i>: adjetivos cortos <b>the + -est</b>, largos <b>the most + adjetivo</b>.</p>
<p><i>the biggest</i>, <i>the cheapest</i>, <i>the most beautiful</i>. Irregulares: <b>the best</b>, <b>the worst</b>. Y se dice <i>the biggest city <b>in</b> the world</i> (no <s>of the world</s>).</p>`,
        table: [['adjetivo', 'superlativo'], ['tall', 'the tallest'], ['big', 'the biggest'], ['interesting', 'the most interesting'], ['good', 'the best'], ['bad', 'the worst']],
        ex: [['It’s the tallest building in Latin America.', 'Es el edificio más alto de Latinoamérica.'], ['This is the best restaurant in town.', 'Este es el mejor restaurante de la ciudad.']] },
      { t: 'As… as y not as… as', es: 'As ... as',
        html: `<p>Para decir que dos cosas son iguales: <b>as + adjetivo + as</b>: <i>Colón is <b>as hot as</b> Panama City.</i></p>
<p>Para decir que es menos: <b>not as + adjetivo + as</b>: <i>My town is<b>n’t as busy as</b> the city.</i></p>`,
        table: [['inglés', 'español'], ['as big as', 'tan grande como'], ['not as expensive as', 'no tan caro como']],
        ex: [['My apartment isn’t as big as yours.', 'Mi apartamento no es tan grande como el tuyo.'], ['The food here is as good as in my country.', 'La comida aquí es tan buena como en mi país.']] }
    ],
    dialogue: {
      t: 'Where should I live?', place: 'Panama City 🇵🇦',
      lines: [
        ['Emily', 'I want to move to Panama. Is Panama City better than Boquete?', 'Me quiero mudar a Panamá. ¿Es mejor Ciudad de Panamá que Boquete?'],
        ['Luis', 'It depends. The city is busier and more modern. The nightlife is great.', 'Depende. La ciudad es más ajetreada y más moderna. La vida nocturna es genial.'],
        ['Emily', 'And Boquete?', '¿Y Boquete?'],
        ['Luis', 'Boquete is quieter and cooler. It’s in the mountains.', 'Boquete es más tranquilo y más fresco. Está en las montañas.'],
        ['Emily', 'Is it cheaper?', '¿Es más barato?'],
        ['Luis', 'Rent is cheaper, yes. But it’s farther from the airport.', 'El alquiler es más barato, sí. Pero queda más lejos del aeropuerto.'],
        ['Emily', 'What’s the most beautiful place in Panama, in your opinion?', 'En tu opinión, ¿cuál es el lugar más bonito de Panamá?'],
        ['Luis', 'Bocas del Toro. It has the best beaches in the country!', 'Bocas del Toro. ¡Tiene las mejores playas del país!']
      ],
      q: [
        { t: 'mc', q: 'Which place is quieter?', o: ['Boquete', 'Panama City', 'They are the same'] },
        { t: 'mc', q: 'What is a problem with Boquete?', o: ['It’s farther from the airport', 'It’s more expensive', 'It’s too hot'] },
        { t: 'mc', q: 'What place has the best beaches, according to Luis?', o: ['Bocas del Toro', 'Boquete', 'Panama City'] }
      ]
    },
    culture: { t: 'Los rascacielos de Panamá', html: `<p>Ciudad de Panamá tiene uno de los <i>skylines</i> más impresionantes de Latinoamérica, con decenas de <b>skyscrapers</b>. Muchos estadounidenses la comparan con Miami.</p>
<p>🏔️ Y Boquete, en Chiriquí, es uno de los lugares favoritos de los jubilados (<i>retirees</i>) de EE. UU. y Canadá por su clima más fresco.</p>` },
    ex: [
      { t: 'cloze', s: 'Boquete is ___ than Panama City. (cool)', a: ['cooler'], o: ['cooler', 'more cool', 'coolest'], nl: 'Boquete es más fresco que Ciudad de Panamá.', tag: 'en-comp' },
      { t: 'cloze', s: 'New York is ___ expensive than Miami.', a: ['more'], o: ['more', 'most', 'much'], nl: 'Nueva York es más cara que Miami.', tag: 'en-comp' },
      { t: 'cloze', s: 'My car is ___ than yours. (big)', a: ['bigger'], o: ['bigger', 'biger', 'more big'], nl: 'Mi carro es más grande que el tuyo.', tag: 'en-comp' },
      { t: 'cloze', s: 'This pizza is ___ than the other one. (good)', a: ['better'], o: ['better', 'gooder', 'more good'], nl: 'Esta pizza es mejor que la otra.', tag: 'en-comp' },
      { t: 'cloze', s: 'It’s the ___ building in the city. (tall)', a: ['tallest'], o: ['tallest', 'most tall', 'taller'], nl: 'Es el edificio más alto de la ciudad.', tag: 'en-sup' },
      { t: 'cloze', s: 'It’s the most beautiful beach ___ the country.', a: ['in'], o: ['in', 'of', 'from'], nl: 'Es la playa más bonita del país.', tag: 'en-sup' },
      { t: 'cloze', s: 'My town isn’t ___ busy as the city.', a: ['as'], o: ['as', 'so', 'than'], nl: 'Mi pueblo no es tan ajetreado como la ciudad.', tag: 'en-comp' },
      { t: 'mc', q: '«el peor» es…', o: ['the worst', 'the baddest', 'the most bad'], tag: 'en-sup' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['She is taller than me.', 'She is more tall than me.', 'She is taller that me.'], tag: 'en-comp' },
      { t: 'mc', q: '«más fácil» es…', o: ['easier', 'more easy', 'easyer'], tag: 'en-comp' },
      { t: 'tr', nl: 'El metro es más rápido que el bus.', a: ['The subway is faster than the bus.', 'The metro is faster than the bus.'], tag: 'en-comp' },
      { t: 'tr', nl: 'Es el mejor restaurante de la ciudad.', a: ["It's the best restaurant in the city.", 'It is the best restaurant in the city.', "It's the best restaurant in town."], tag: 'en-sup' },
      { t: 'tr', nl: 'Mi ciudad es más tranquila que Panamá.', a: ['My city is quieter than Panama.', 'My town is quieter than Panama.'], tag: 'en-comp' },
      { t: 'order', s: 'Bocas del Toro has the best beaches in Panama.', nl: 'Bocas del Toro tiene las mejores playas de Panamá.', tag: 'en-sup' },
      { t: 'match', p: [['quiet', 'tranquilo'], ['dirty', 'sucio'], ['safe', 'seguro'], ['traffic', 'tráfico'], ['countryside', 'el campo']], tag: 'en-comp' }
    ],
    reading: {
      t: 'The Panama Canal', type: 'Un texto informativo',
      p: [
        ['The Panama Canal is one of the most important waterways in the world. It connects the Atlantic and Pacific Oceans.', 'El Canal de Panamá es una de las vías marítimas más importantes del mundo. Conecta los océanos Atlántico y Pacífico.'],
        ['Before the canal, ships traveled around South America. That trip was much longer and more dangerous.', 'Antes del canal, los barcos daban la vuelta a Sudamérica. Ese viaje era mucho más largo y más peligroso.'],
        ['In 2016 Panama opened new, bigger locks. Now the biggest ships can use the canal. It is faster and cheaper than the old route.', 'En 2016 Panamá abrió esclusas nuevas y más grandes. Ahora los barcos más grandes pueden usar el canal. Es más rápido y más barato que la ruta antigua.']
      ],
      gl: [['waterway', 'vía marítima'], ['ships', 'barcos'], ['locks', 'esclusas'], ['route', 'ruta']],
      q: [
        { t: 'mc', q: 'What does the canal connect?', o: ['The Atlantic and Pacific Oceans', 'Panama and Colombia', 'Two lakes'] },
        { t: 'mc', q: 'How was the trip before the canal?', o: ['Longer and more dangerous', 'Shorter', 'Cheaper'] },
        { t: 'mc', q: 'What happened in 2016?', o: ['New, bigger locks opened', 'The canal closed', 'The first ship passed'] }
      ]
    },
    say: [['Boquete is cooler than the city.', 'Boquete es más fresco que la ciudad.'], ['It’s the best beach in Panama.', 'Es la mejor playa de Panamá.'], ['My town isn’t as busy as the city.', 'Mi pueblo no es tan ajetreado como la ciudad.']],
    task: { nl: 'Compara dos ciudades que conoces en 5 frases. Usa comparativos y al menos un superlativo.', model: "Panama City is bigger and more modern than David. David is quieter and cheaper. The traffic in Panama City is worse. But the city has the best restaurants in the country." },
    scenario: { nl: 'Una estadounidense quiere mudarse a Panamá y te pide consejo.', role: 'You are Emily, an American who wants to move to Latin America. Ask the learner to compare cities in Panama (prices, weather, safety, nightlife) and ask for the best place to live.', goal: 'Compara dos lugares y recomiéndale el mejor para ella.' }
  });

  /* ───────────────────────── A2 · 5 ───────────────────────── */
  U({
    id: 'en-a2-05', level: 'A2', icon: '🌟', title: 'Have you ever…?', nl: 'Experiencias',
    goals: ['Hablar de experiencias con el present perfect', 'Usar ever, never, already y yet', 'Saber cuándo usar el pasado simple'],
    vocab: [
      ['been', 'estado / ido'], ['seen', 'visto'], ['eaten', 'comido'], ['done', 'hecho'], ['tried', 'probado'], ['met', 'conocido'], ['flown', 'volado'], ['taken', 'tomado'],
      ['written', 'escrito'], ['ridden', 'montado'], ['ever', 'alguna vez'], ['never', 'nunca'], ['already', 'ya'], ['yet', 'todavía / ya (en preguntas)'], ['just', 'acabar de'],
      ['experience', 'experiencia'], ['dream', 'sueño'], ['skydiving', 'paracaidismo'], ['snorkeling', 'esnórquel'], ['famous', 'famoso'], ['volcano', 'volcán'],
      ['zip line', 'tirolesa / canopy'], ['once', 'una vez'], ['several times', 'varias veces']
    ],
    grammar: [
      { t: 'Present perfect: experiencias', es: 'Present perfect',
        html: `<p>Se forma con <b>have / has + participio</b>: <i>I <b>have been</b> to Mexico.</i> Se usa para experiencias en la vida, <b>sin decir cuándo</b>.</p>
<p>Forma corta: I’ve, she’s, we’ve. Los participios regulares terminan en <b>-ed</b> (visited); los irregulares hay que aprenderlos (been, seen, eaten).</p>`,
        table: [['', 'present perfect'], ['I / you / we / they', 'have (’ve) seen'], ['he / she / it', 'has (’s) seen'], ['negativa', 'haven’t / hasn’t seen'], ['pregunta', 'Have you seen…?']],
        sum: 'I’ve been to Mexico. She’s never seen snow.',
        ex: [['I’ve tried sushi, but I don’t like it.', 'He probado el sushi, pero no me gusta.'], ['My dad has visited Spain three times.', 'Mi papá ha visitado España tres veces.']] },
      { t: 'Ever, never, already, yet, just', es: 'Ever / never / already / yet',
        html: `<p><b>Have you ever…?</b> = ¿alguna vez has…? <b>never</b> = nunca. <b>already</b> = ya (afirmativa). <b>yet</b> = todavía (negativa) / ya (pregunta), y va <b>al final</b>. <b>just</b> = acabar de.</p>
<p><i>Have you <b>ever</b> been to Canada? — No, <b>never</b>.</i> · <i>I’ve <b>already</b> eaten.</i> · <i>I haven’t finished <b>yet</b>.</i> · <i>She’s <b>just</b> arrived.</i></p>`,
        table: [['palabra', 'ejemplo', 'español'], ['ever', 'Have you ever seen a volcano?', '¿Alguna vez has visto un volcán?'], ['never', 'I’ve never flown.', 'Nunca he volado.'], ['already', 'We’ve already paid.', 'Ya pagamos.'], ['yet', 'Have you called her yet?', '¿Ya la llamaste?']],
        ex: [['Have you ever eaten ceviche? — Yes, many times!', '¿Alguna vez has comido ceviche? — ¡Sí, muchas veces!'], ['I haven’t seen that movie yet.', 'Todavía no he visto esa película.']] },
      { t: 'Present perfect o pasado simple', es: 'Present perfect vs. past simple',
        html: `<p>Si dices <b>cuándo</b> pasó, usa el <b>pasado simple</b>. Si no dices cuándo, el present perfect.</p>
<p><i>I’ve been to Miami.</i> (experiencia) → <i>I <b>went</b> there <b>last year</b>.</i> (cuándo). Nunca: <s>I’ve been to Miami last year</s>.</p>`,
        table: [['present perfect', 'pasado simple'], ['I’ve met a famous singer.', 'I met him in 2019.'], ['Have you ever been to Peru?', 'When did you go?']],
        ex: [['Have you ever been to Costa Rica? — Yes, I went there in 2022.', '¿Has estado en Costa Rica? — Sí, fui en 2022.'], ['She’s never ridden a horse.', 'Ella nunca ha montado a caballo.']] }
    ],
    dialogue: {
      t: 'Bucket list', place: 'Boquete, Panama 🇵🇦',
      lines: [
        ['Nora', 'Have you ever been on a zip line?', '¿Alguna vez te has tirado en una tirolesa?'],
        ['Diego', 'Yes, I have. I did it here in Boquete last year. It was amazing!', 'Sí. Lo hice aquí en Boquete el año pasado. ¡Fue increíble!'],
        ['Nora', 'I’ve never done it. I’m a little scared.', 'Yo nunca lo he hecho. Me da un poco de miedo.'],
        ['Diego', 'You should try it! Have you climbed the Barú Volcano yet?', '¡Deberías probar! ¿Ya subiste el Volcán Barú?'],
        ['Nora', 'Not yet. But I’ve already bought a good jacket for it.', 'Todavía no. Pero ya compré una buena chaqueta para eso.'],
        ['Diego', 'Great. From the top you can see both oceans. I’ve seen them twice.', 'Genial. Desde la cima puedes ver los dos océanos. Yo los he visto dos veces.'],
        ['Nora', 'Wow. What else is on your bucket list?', '¡Guau! ¿Qué más tienes en tu lista de sueños?'],
        ['Diego', 'I’ve never seen snow. That’s my next dream!', 'Nunca he visto la nieve. ¡Ese es mi próximo sueño!']
      ],
      q: [
        { t: 'mc', q: 'When did Diego go on the zip line?', o: ['Last year', 'Yesterday', 'He has never done it'] },
        { t: 'mc', q: 'Has Nora climbed the volcano?', o: ['Not yet', 'Yes, twice', 'Yes, last year'] },
        { t: 'mc', q: 'What has Diego never seen?', o: ['Snow', 'The ocean', 'A volcano'] }
      ]
    },
    culture: { t: 'The bucket list', html: `<p>Una <b>bucket list</b> es una lista de cosas que quieres hacer antes de morir: ver la aurora boreal, saltar en paracaídas, aprender un idioma… La expresión viene de <i>to kick the bucket</i>, una forma informal de decir «morir».</p>
<p>✍️ En inglés es muy común preguntar en una conversación: <i>What’s on your bucket list?</i></p>` },
    ex: [
      { t: 'cloze', s: 'I’ve ___ to Mexico twice. (be)', a: ['been'], o: ['been', 'was', 'be'], nl: 'He estado en México dos veces.', tag: 'en-pp' },
      { t: 'cloze', s: 'She ___ never seen snow.', a: ['has'], o: ['has', 'have', 'is'], nl: 'Ella nunca ha visto la nieve.', tag: 'en-pp' },
      { t: 'cloze', s: 'Have you ___ eaten ceviche?', a: ['ever'], o: ['ever', 'never', 'yet'], nl: '¿Alguna vez has comido ceviche?', tag: 'en-ever' },
      { t: 'cloze', s: 'I haven’t finished my homework ___.', a: ['yet'], o: ['yet', 'already', 'ever'], nl: 'Todavía no he terminado la tarea.', tag: 'en-ever' },
      { t: 'cloze', s: 'We’ve ___ paid. (ya)', a: ['already'], o: ['already', 'yet', 'ever'], nl: 'Ya pagamos.', tag: 'en-ever' },
      { t: 'cloze', s: 'I ___ to Costa Rica in 2022.', a: ['went'], o: ['went', 'have been', 'have gone'], nl: 'Fui a Costa Rica en 2022.', x: 'Con una fecha (in 2022) se usa el pasado simple.', tag: 'en-pp' },
      { t: 'cloze', s: 'Have you ever ___ a horse? (ride)', a: ['ridden'], o: ['ridden', 'rode', 'rided'], nl: '¿Alguna vez has montado a caballo?', tag: 'en-pp' },
      { t: 'mc', q: '«Nunca he volado» es…', o: ['I’ve never flown.', 'I never have flied.', 'I haven’t never flown.'], tag: 'en-ever' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['I saw that movie last week.', 'I’ve seen that movie last week.', 'I’ve saw that movie last week.'], tag: 'en-pp' },
      { t: 'mc', q: '«Ella acaba de llegar» es…', o: ['She’s just arrived.', 'She finishes to arrive.', 'She just arrive.'], tag: 'en-ever' },
      { t: 'tr', nl: '¿Alguna vez has estado en Nueva York?', a: ['Have you ever been to New York?'], tag: 'en-ever' },
      { t: 'tr', nl: 'Nunca he visto la nieve.', a: ["I've never seen snow.", 'I have never seen snow.', "I've never seen the snow."], tag: 'en-ever' },
      { t: 'tr', nl: 'Ya comí.', a: ["I've already eaten.", 'I have already eaten.', 'I already ate.'], tag: 'en-ever' },
      { t: 'order', s: 'Have you ever tried Panamanian food?', nl: '¿Alguna vez has probado la comida panameña?', tag: 'en-ever' },
      { t: 'match', p: [['seen', 'visto'], ['eaten', 'comido'], ['been', 'estado'], ['written', 'escrito'], ['flown', 'volado']], tag: 'en-pp' }
    ],
    reading: {
      t: 'Never too late', type: 'Una entrevista corta',
      p: [
        ['Margaret Wilson is 78 years old, and she has had an amazing life. She has visited forty countries and has lived in five.', 'Margaret Wilson tiene 78 años y ha tenido una vida increíble. Ha visitado cuarenta países y ha vivido en cinco.'],
        ['"I’ve done a lot of crazy things," she says. "I’ve gone skydiving, I’ve swum with sharks and I’ve climbed a volcano in Guatemala."', '«He hecho muchas locuras», dice. «He saltado en paracaídas, he nadado con tiburones y he subido un volcán en Guatemala».'],
        ['Is there anything she hasn’t done yet? "I’ve never learned to play the piano. I started lessons last month!"', '¿Hay algo que todavía no haya hecho? «Nunca he aprendido a tocar el piano. ¡Empecé clases el mes pasado!»']
      ],
      gl: [['crazy things', 'locuras'], ['sharks', 'tiburones'], ['anything', 'algo']],
      q: [
        { t: 'mc', q: 'How many countries has Margaret visited?', o: ['Forty', 'Five', 'Seventy-eight'] },
        { t: 'mc', q: 'Where did she climb a volcano?', o: ['In Guatemala', 'In Panama', 'In Hawaii'] },
        { t: 'mc', q: 'What did she start last month?', o: ['Piano lessons', 'Skydiving', 'Swimming lessons'] }
      ]
    },
    say: [['Have you ever been to the United States?', '¿Alguna vez has estado en Estados Unidos?'], ['I’ve never seen snow.', 'Nunca he visto la nieve.'], ['I haven’t done it yet.', 'Todavía no lo he hecho.']],
    task: { nl: 'Escribe tu propia bucket list: tres cosas que ya has hecho (y cuándo) y tres que nunca has hecho pero quieres hacer.', model: "I've been to Costa Rica. I went there in 2021. I've tried sushi and I've ridden a horse. I've never seen snow, I've never flown to Europe and I've never gone skydiving." },
    scenario: { nl: 'Juegan «Have you ever…?» con un amigo de California.', role: 'You are Jake, a fun guy from California. Play "Have you ever…?" with the learner: ask about experiences, then ask follow-up questions in the past simple (When? Where? Did you like it?). Share your own experiences too.', goal: 'Contesta sus preguntas y hazle tú también tres preguntas con «Have you ever…?».' }
  });
})(window.SPT);
