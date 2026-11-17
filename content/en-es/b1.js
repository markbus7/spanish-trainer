/* Inglés B1, unidades 1–5 (inglés estadounidense, explicaciones en español latinoamericano). Mismo formato que a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-usedto': 'used to', 'en-ppc': 'present perfect continuous', 'en-forsince': 'for / since', 'en-passive': 'la voz pasiva',
    'en-if2': 'condicional irreal (if I had…, I would…)', 'en-wish': 'I wish…', 'en-rel': 'oraciones de relativo (who, which, that)', 'en-where': 'where / whose'
  });

  /* ───────────────────────── B1 · 1 ───────────────────────── */
  U({
    id: 'en-b1-01', level: 'B1', icon: '📼', title: 'I used to…', nl: 'Antes y ahora',
    goals: ['Hablar de costumbres del pasado con used to', 'Comparar el pasado con el presente', 'Usar be used to / get used to'],
    vocab: [
      ['used to', 'solía'], ['didn’t use to', 'no solía'], ['nowadays', 'hoy en día'], ['these days', 'estos días / actualmente'], ['back then', 'en aquel entonces'],
      ['childhood', 'infancia'], ['teenager', 'adolescente'], ['grow up → grew up', 'crecer → crecí'], ['hang out', 'pasar el rato'], ['landline', 'teléfono fijo'],
      ['cassette', 'casete'], ['record', 'grabar'], ['rent a movie', 'alquilar una película'], ['handwritten letter', 'carta escrita a mano'], ['mailbox', 'buzón'],
      ['habit', 'costumbre / hábito'], ['get used to', 'acostumbrarse a'], ['be used to', 'estar acostumbrado a'], ['miss', 'extrañar'], ['simple', 'sencillo'],
      ['slower', 'más lento'], ['strict', 'estricto'], ['nostalgic', 'nostálgico'], ['generation', 'generación']
    ],
    grammar: [
      { t: 'Used to: costumbres del pasado', es: 'Used to',
        html: `<p><b>used to + verbo</b> = solía. Habla de costumbres o situaciones del pasado que <b>ya no</b> son así: <i>I <b>used to</b> play outside every day.</i></p>
<p>Negativa y pregunta con <b>did</b>, y entonces se escribe <b>use to</b> (sin -d): <i>I <b>didn’t use to</b> like coffee. <b>Did</b> you <b>use to</b> have long hair?</i></p>
<p>No existe en presente: para hoy usa el presente simple (<i>I usually…</i>).</p>`,
        table: [['', 'ejemplo'], ['afirmativa', 'We used to live in Colón.'], ['negativa', 'She didn’t use to work.'], ['pregunta', 'Did you use to walk to school?']],
        sum: 'I used to play outside. I didn’t use to like coffee.',
        ex: [['People used to write letters by hand.', 'La gente solía escribir cartas a mano.'], ['Did you use to watch cartoons on Saturday mornings?', '¿Solías ver caricaturas los sábados en la mañana?']] },
      { t: 'Be used to / get used to', es: 'Be used to vs. get used to',
        html: `<p>¡Cuidado, es otra cosa! <b>be used to + -ing / sustantivo</b> = estar acostumbrado a. <b>get used to + -ing / sustantivo</b> = acostumbrarse (el proceso).</p>
<p><i>I’m used to <b>working</b> at night.</i> · <i>It took me a year to <b>get used to</b> the cold.</i></p>`,
        table: [['estructura', 'significado'], ['used to + verbo', 'solía (pasado)'], ['be used to + -ing', 'estar acostumbrado'], ['get used to + -ing', 'acostumbrarse']],
        ex: [['I’m not used to driving on the highway.', 'No estoy acostumbrada a manejar en la autopista.'], ['You’ll get used to the food.', 'Te vas a acostumbrar a la comida.']] },
      { t: 'Antes y ahora', es: 'Then and now',
        html: `<p>Para comparar: <i><b>Back then</b> we used to…, but <b>nowadays</b> we…</i> · <i>I used to…, but now I…</i> · <i>I <b>don’t</b> … <b>anymore</b></i> (ya no).</p>`,
        table: [['antes', 'ahora'], ['We used to rent movies.', 'Nowadays we stream them.'], ['I used to smoke.', 'I don’t smoke anymore.']],
        ex: [['I used to live with my parents, but now I live alone.', 'Antes vivía con mis papás, pero ahora vivo sola.'], ['He doesn’t play the guitar anymore.', 'Él ya no toca la guitarra.']] }
    ],
    dialogue: {
      t: 'Old photos', place: 'San Antonio, Texas 🇺🇸',
      lines: [
        ['Grandpa Joe', 'Look at this photo. That’s me when I was eighteen.', 'Mira esta foto. Ese soy yo cuando tenía dieciocho años.'],
        ['Lucía', 'No way! You used to have so much hair!', '¡No puede ser! ¡Tenías tanto pelo!'],
        ['Grandpa Joe', 'Ha! And I used to drive that old red car. It didn’t have air conditioning.', '¡Ja! Y manejaba ese carro rojo viejo. No tenía aire acondicionado.'],
        ['Lucía', 'In Texas? How did you get used to that?', '¿En Texas? ¿Cómo te acostumbraste a eso?'],
        ['Grandpa Joe', 'We were used to the heat. We used to open all the windows.', 'Estábamos acostumbrados al calor. Abríamos todas las ventanas.'],
        ['Lucía', 'Did you use to go out a lot?', '¿Salías mucho?'],
        ['Grandpa Joe', 'Every Saturday. We used to go dancing. There were no cell phones, so we had to be on time.', 'Todos los sábados. Íbamos a bailar. No había celulares, así que había que llegar a tiempo.'],
        ['Lucía', 'That sounds nice. Nowadays everybody is always late and just texts "5 min"!', '¡Suena bonito! Hoy en día todo el mundo llega tarde y solo escribe «5 min».']
      ],
      q: [
        { t: 'mc', q: 'What did Grandpa Joe use to drive?', o: ['An old red car', 'A motorcycle', 'A truck'] },
        { t: 'mc', q: 'What did they use to do on Saturdays?', o: ['Go dancing', 'Go to the beach', 'Watch movies'] },
        { t: 'mc', q: 'Why did they have to be on time?', o: ['There were no cell phones', 'Their parents were strict', 'The buses left early'] }
      ]
    },
    culture: { t: 'Los «good old days»', html: `<p>En inglés se habla con nostalgia de <b>the good old days</b>. Cada generación tiene su nombre: <b>Baby Boomers</b>, <b>Gen X</b>, <b>Millennials</b> y <b>Gen Z</b>.</p>
<p>📼 Si alguien dice <i>«OK, boomer»</i>, es una forma un poco burlona de decir que la otra persona piensa a la antigua.</p>` },
    ex: [
      { t: 'cloze', s: 'I ___ to play outside every day.', a: ['used'], o: ['used', 'use', 'was used'], nl: 'Yo solía jugar afuera todos los días.', tag: 'en-usedto' },
      { t: 'cloze', s: 'Did you ___ to have long hair?', a: ['use'], o: ['use', 'used', 'using'], nl: '¿Antes tenías el pelo largo?', x: 'Con did se escribe use to, sin -d.', tag: 'en-usedto' },
      { t: 'cloze', s: 'She didn’t use to ___ coffee.', a: ['like'], o: ['like', 'liked', 'liking'], nl: 'Antes no le gustaba el café.', tag: 'en-usedto' },
      { t: 'cloze', s: 'I’m used to ___ at night.', a: ['working'], o: ['working', 'work', 'worked'], nl: 'Estoy acostumbrado a trabajar de noche.', tag: 'en-usedto' },
      { t: 'cloze', s: 'You’ll ___ used to the cold.', a: ['get'], o: ['get', 'be', 'use'], nl: 'Te vas a acostumbrar al frío.', tag: 'en-usedto' },
      { t: 'cloze', s: 'I don’t smoke ___.', a: ['anymore'], o: ['anymore', 'never', 'already'], nl: 'Ya no fumo.', tag: 'en-usedto' },
      { t: 'mc', q: '«Solíamos vivir en Colón» es…', o: ['We used to live in Colón.', 'We use to live in Colón.', 'We were used to live in Colón.'], tag: 'en-usedto' },
      { t: 'mc', q: '«hoy en día» es…', o: ['nowadays', 'back then', 'these old days'], tag: 'en-usedto' },
      { t: 'mc', q: '¿Cuál significa «estoy acostumbrada»?', o: ['I’m used to it.', 'I used to it.', 'I use to it.'], tag: 'en-usedto' },
      { t: 'tr', nl: 'Antes vivía con mis papás.', a: ['I used to live with my parents.'], tag: 'en-usedto' },
      { t: 'tr', nl: 'Ya no toco la guitarra.', a: ["I don't play the guitar anymore.", 'I do not play the guitar anymore.', "I don't play guitar anymore."], tag: 'en-usedto' },
      { t: 'tr', nl: 'No estoy acostumbrado al calor.', a: ["I'm not used to the heat.", 'I am not used to the heat.'], tag: 'en-usedto' },
      { t: 'tr', nl: '¿Solías ir a bailar?', a: ['Did you use to go dancing?'], tag: 'en-usedto' },
      { t: 'order', s: 'People used to write letters by hand.', nl: 'La gente solía escribir cartas a mano.', tag: 'en-usedto' },
      { t: 'match', p: [['childhood', 'infancia'], ['habit', 'costumbre'], ['grow up', 'crecer'], ['hang out', 'pasar el rato'], ['strict', 'estricto']], tag: 'en-usedto' }
    ],
    reading: {
      t: 'Before smartphones', type: 'Un artículo',
      p: [
        ['Thirty years ago, life used to be very different. If you wanted to call a friend, you used the landline at home, and sometimes their mom answered first.', 'Hace treinta años la vida era muy diferente. Si querías llamar a un amigo, usabas el teléfono fijo de la casa, y a veces primero contestaba su mamá.'],
        ['People didn’t use to take hundreds of photos. A camera roll had only 24 pictures, and you had to wait a week to see them.', 'La gente no solía tomar cientos de fotos. Un rollo de cámara tenía solo 24 fotos, y había que esperar una semana para verlas.'],
        ['Today we are used to having all the information in our pocket. It’s faster and easier, but many older people say they miss the slower, simpler days.', 'Hoy estamos acostumbrados a tener toda la información en el bolsillo. Es más rápido y fácil, pero muchas personas mayores dicen que extrañan los días más lentos y sencillos.']
      ],
      gl: [['camera roll', 'rollo de cámara'], ['answered', 'contestó'], ['pocket', 'bolsillo'], ['older people', 'personas mayores']],
      q: [
        { t: 'mc', q: 'How did people use to call friends?', o: ['With the landline at home', 'With a smartphone', 'By email'] },
        { t: 'mc', q: 'How many pictures did a camera roll have?', o: ['24', 'Hundreds', '100'] },
        { t: 'mc', q: 'What do many older people miss?', o: ['The slower, simpler days', 'Their old cars', 'Television'] }
      ]
    },
    say: [['I used to live in a small town.', 'Antes vivía en un pueblo pequeño.'], ['I’m not used to the cold.', 'No estoy acostumbrado al frío.'], ['I don’t do that anymore.', 'Ya no hago eso.']],
    task: { nl: 'Compara tu vida de hace diez años con tu vida de ahora. Usa used to, didn’t use to y anymore.', model: "Ten years ago I used to live with my parents in Chitré. I used to take the bus to school. I didn't use to like vegetables. Now I live in Panama City and I drive to work. I don't eat fast food anymore." },
    scenario: { nl: 'Un abuelo de Texas te cuenta cómo era su juventud.', role: 'You are Grandpa Joe, 75, from San Antonio, Texas. Tell the learner about your youth with used to (cars, music, dancing, no cell phones) and ask how their childhood was different. Ask what they had to get used to in a new place.', goal: 'Cuéntale cómo era tu infancia y compárala con la de él.' }
  });

  /* ───────────────────────── B1 · 2 ───────────────────────── */
  U({
    id: 'en-b1-02', level: 'B1', icon: '⏳', title: 'How long have you…?', nl: 'Desde hace cuánto',
    goals: ['Usar for y since', 'Usar el present perfect continuous', 'Hablar de cosas que empezaron en el pasado y siguen'],
    vocab: [
      ['for', 'durante / desde hace'], ['since', 'desde'], ['How long…?', '¿Cuánto tiempo…? / ¿Desde cuándo…?'], ['lately', 'últimamente'], ['recently', 'recientemente'], ['all day', 'todo el día'],
      ['wait', 'esperar'], ['learn', 'aprender'], ['practice', 'practicar'], ['train', 'entrenar'], ['save money', 'ahorrar dinero'], ['look for', 'buscar'], ['marathon', 'maratón'],
      ['volunteer', 'voluntario / hacer voluntariado'], ['progress', 'progreso'], ['improve', 'mejorar'], ['exhausted', 'agotado'], ['out of breath', 'sin aliento'],
      ['sweaty', 'sudado'], ['soaked', 'empapado'], ['ages', 'muchísimo tiempo'], ['so far', 'hasta ahora'], ['in a row', 'seguidos'], ['goal', 'meta']
    ],
    grammar: [
      { t: 'For y since', es: 'For / since',
        html: `<p>Con el present perfect se dice <b>desde cuándo</b> dura algo que todavía sigue:</p>
<p><b>for</b> + período de tiempo: <i>for two years, for a week, for ages</i>. <b>since</b> + momento de inicio: <i>since 2020, since Monday, since I was a child</i>.</p>
<p>¡Ojo! En español decimos «vivo aquí desde hace dos años» (presente), pero en inglés es <i>I’<b>ve lived</b> here <b>for</b> two years</i>, no <s>I live here for two years</s>.</p>`,
        table: [['for', 'since'], ['for ten minutes', 'since 9 o’clock'], ['for three months', 'since March'], ['for a long time', 'since I was a kid']],
        sum: 'I’ve lived here for two years. I’ve known her since 2019.',
        ex: [['I’ve known Ana since we were in school.', 'Conozco a Ana desde que estábamos en la escuela.'], ['How long have you had your car? — For five years.', '¿Desde cuándo tienes tu carro? — Desde hace cinco años.']] },
      { t: 'Present perfect continuous', es: 'Present perfect continuous',
        html: `<p><b>have / has been + -ing</b>. Para acciones que empezaron en el pasado y <b>siguen</b> (o acaban de terminar), cuando importa la duración o la actividad:</p>
<p><i>I’<b>ve been studying</b> English for six months.</i> · <i>It’<b>s been raining</b> all day.</i> · <i>Why are you sweaty? — I’<b>ve been running</b>.</i></p>`,
        table: [['', 'ejemplo'], ['afirmativa', 'She’s been working here since May.'], ['negativa', 'I haven’t been sleeping well.'], ['pregunta', 'How long have you been waiting?']],
        ex: [['We’ve been waiting for forty minutes!', '¡Llevamos cuarenta minutos esperando!'], ['What have you been doing lately?', '¿Qué has estado haciendo últimamente?']] },
      { t: '¿Simple o continuous?', es: 'Simple vs. continuous',
        html: `<p><b>Continuous</b> = la actividad, el proceso: <i>I’ve been reading this book for a week.</i> <b>Simple</b> = el resultado, cuántas veces o cuánto: <i>I’ve read three books this month.</i></p>
<p>Verbos de estado (<i>know, have (tener), like, believe</i>) no van en continuous: <i>I’ve <b>known</b> him for years</i>, no <s>I’ve been knowing</s>.</p>`,
        table: [['continuous (actividad)', 'simple (resultado)'], ['I’ve been cleaning all morning.', 'I’ve cleaned the kitchen.'], ['She’s been training for months.', 'She’s run three marathons.']],
        ex: [['I’ve been saving money for a trip. I’ve saved $800 so far.', 'Llevo un tiempo ahorrando para un viaje. Hasta ahora he ahorrado 800 dólares.'], ['They’ve been married for twenty years.', 'Llevan veinte años casados.']] }
    ],
    dialogue: {
      t: 'At the running club', place: 'Central Park, New York 🇺🇸',
      lines: [
        ['Coach Dana', 'Hi! You’re new, right? How long have you been running?', '¡Hola! Eres nuevo, ¿verdad? ¿Desde cuándo corres?'],
        ['Mateo', 'Only for three months. I started in August.', 'Solo desde hace tres meses. Empecé en agosto.'],
        ['Coach Dana', 'Great. And how long have you lived in New York?', 'Genial. ¿Y desde cuándo vives en Nueva York?'],
        ['Mateo', 'I’ve lived here since January. I moved from Panama for work.', 'Vivo aquí desde enero. Me mudé de Panamá por trabajo.'],
        ['Coach Dana', 'Have you been training for a race?', '¿Has estado entrenando para alguna carrera?'],
        ['Mateo', 'Yes! I’ve been preparing for the Brooklyn Half Marathon. I’ve already run 15 kilometers once.', '¡Sí! He estado preparándome para el medio maratón de Brooklyn. Ya corrí 15 kilómetros una vez.'],
        ['Coach Dana', 'Impressive! You look a little out of breath, though.', '¡Impresionante! Pero te ves un poco sin aliento.'],
        ['Mateo', 'Well, I’ve been running in circles for twenty minutes because I couldn’t find the club!', '¡Es que llevo veinte minutos corriendo en círculos porque no encontraba el club!']
      ],
      q: [
        { t: 'mc', q: 'How long has Mateo been running?', o: ['For three months', 'Since January', 'For a year'] },
        { t: 'mc', q: 'Since when has he lived in New York?', o: ['Since January', 'Since August', 'For ten years'] },
        { t: 'mc', q: 'Why is Mateo out of breath?', o: ['He couldn’t find the club', 'He ran a marathon', 'He was late for work'] }
      ]
    },
    culture: { t: 'Running en EE. UU.', html: `<p>Correr es muy popular en Estados Unidos. Hay clubes gratuitos que se reúnen en parques y miles de carreras de <b>5K</b>, a veces para recaudar fondos para una causa (<b>charity run</b>).</p>
<p>🏃 Las distancias se miden en <b>millas</b>: un medio maratón son 13.1 millas (21 km) y un maratón 26.2 millas.</p>` },
    ex: [
      { t: 'cloze', s: 'I’ve lived here ___ two years.', a: ['for'], o: ['for', 'since', 'during'], nl: 'Vivo aquí desde hace dos años.', tag: 'en-forsince' },
      { t: 'cloze', s: 'She’s worked here ___ 2021.', a: ['since'], o: ['since', 'for', 'from'], nl: 'Ella trabaja aquí desde 2021.', tag: 'en-forsince' },
      { t: 'cloze', s: 'We’ve been ___ for forty minutes!', a: ['waiting'], o: ['waiting', 'waited', 'wait'], nl: '¡Llevamos cuarenta minutos esperando!', tag: 'en-ppc' },
      { t: 'cloze', s: 'How long ___ you been studying English?', a: ['have'], o: ['have', 'are', 'did'], nl: '¿Desde cuándo estudias inglés?', tag: 'en-ppc' },
      { t: 'cloze', s: 'It’s been ___ all day.', a: ['raining'], o: ['raining', 'rained', 'rain'], nl: 'Ha estado lloviendo todo el día.', tag: 'en-ppc' },
      { t: 'cloze', s: 'I’ve ___ him since we were kids.', a: ['known'], o: ['known', 'been knowing', 'knew'], nl: 'Lo conozco desde que éramos niños.', x: 'know es un verbo de estado: no va en continuous.', tag: 'en-ppc' },
      { t: 'cloze', s: 'I’ve read three books ___ far.', a: ['so'], o: ['so', 'this', 'as'], nl: 'Hasta ahora he leído tres libros.', tag: 'en-ppc' },
      { t: 'mc', q: '«Vivo aquí desde hace un año» es…', o: ['I’ve lived here for a year.', 'I live here since a year.', 'I live here for a year ago.'], tag: 'en-forsince' },
      { t: 'mc', q: '¿Cuál va con since?', o: ['last summer', 'three weeks', 'a long time'], tag: 'en-forsince' },
      { t: 'mc', q: 'Alguien está sudado. Le preguntas…', o: ['Have you been running?', 'Did you run since?', 'Are you running for?'], tag: 'en-ppc' },
      { t: 'tr', nl: '¿Desde cuándo vives en Panamá?', a: ['How long have you lived in Panama?', 'How long have you been living in Panama?'], tag: 'en-forsince' },
      { t: 'tr', nl: 'Llevo tres meses estudiando inglés.', a: ["I've been studying English for three months.", 'I have been studying English for three months.'], tag: 'en-ppc' },
      { t: 'tr', nl: 'Llevan veinte años casados.', a: ["They've been married for twenty years.", 'They have been married for twenty years.'], tag: 'en-forsince' },
      { t: 'tr', nl: '¿Qué has estado haciendo últimamente?', a: ['What have you been doing lately?', 'What have you been doing recently?'], tag: 'en-ppc' },
      { t: 'order', s: 'I have been saving money for a trip.', nl: 'He estado ahorrando dinero para un viaje.', tag: 'en-ppc' },
      { t: 'match', p: [['lately', 'últimamente'], ['improve', 'mejorar'], ['exhausted', 'agotado'], ['soaked', 'empapado'], ['goal', 'meta']], tag: 'en-ppc' }
    ],
    reading: {
      t: 'Ninety and still teaching', type: 'Un perfil',
      p: [
        ['Rosa Delgado has been teaching piano for seventy years. She has lived in the same small house in Miami since 1965.', 'Rosa Delgado lleva setenta años enseñando piano. Vive en la misma casita de Miami desde 1965.'],
        ['"I’ve had more than two thousand students," she says. "Some of them have been coming every Tuesday for twenty years!"', '«He tenido más de dos mil alumnos», dice. «¡Algunos llevan veinte años viniendo todos los martes!»'],
        ['Lately she has been learning something new herself: how to make videos. Since March, she has posted forty piano lessons online, and they have been watched by people in thirty countries.', 'Últimamente ella misma ha estado aprendiendo algo nuevo: hacer videos. Desde marzo ha subido cuarenta clases de piano a internet, y las han visto personas de treinta países.']
      ],
      gl: [['herself', 'ella misma'], ['posted', 'publicó / subió'], ['students', 'alumnos']],
      q: [
        { t: 'mc', q: 'How long has Rosa been teaching piano?', o: ['For seventy years', 'Since March', 'For twenty years'] },
        { t: 'mc', q: 'What has she been learning lately?', o: ['How to make videos', 'How to play guitar', 'English'] },
        { t: 'mc', q: 'How many lessons has she posted online?', o: ['Forty', 'Thirty', 'Two thousand'] }
      ]
    },
    say: [['How long have you lived here?', '¿Desde cuándo vives aquí?'], ['I’ve been studying English for a year.', 'Llevo un año estudiando inglés.'], ['I’ve known her since 2015.', 'La conozco desde 2015.']],
    task: { nl: 'Escribe 5 frases sobre cosas de tu vida que empezaron en el pasado y siguen: tu casa, tu trabajo, un amigo, un pasatiempo. Usa for, since y el present perfect continuous.', model: "I've lived in my apartment since 2020. I've been working at the bank for four years. I've known my best friend since high school. I've been learning English for eight months. I've been going to the gym since January." },
    scenario: { nl: 'Te unes a un club de corredores en Nueva York y la entrenadora te hace preguntas.', role: 'You are Coach Dana, a friendly running coach in Central Park. Ask the learner How long…? questions about running, living in the city, work and hobbies. Use for, since and the present perfect continuous.', goal: 'Contesta sus preguntas con for y since, y pregúntale tú también.' }
  });

  /* ───────────────────────── B1 · 3 ───────────────────────── */
  U({
    id: 'en-b1-03', level: 'B1', icon: '🏭', title: 'Made in…', nl: 'Cómo se hace: la voz pasiva',
    goals: ['Usar la voz pasiva en presente y pasado', 'Decir quién hizo algo con by', 'Describir procesos e inventos'],
    vocab: [
      ['make → made', 'hacer → hecho'], ['build → built', 'construir → construido'], ['invent', 'inventar'], ['discover', 'descubrir'], ['produce', 'producir'], ['grow → grown', 'cultivar → cultivado'],
      ['export', 'exportar'], ['import', 'importar'], ['design', 'diseñar'], ['paint', 'pintar'], ['steal → stolen', 'robar → robado'], ['write → written', 'escribir → escrito'],
      ['factory', 'fábrica'], ['farmer', 'agricultor'], ['coffee beans', 'granos de café'], ['harvest', 'cosechar / cosecha'], ['roast', 'tostar'], ['ship', 'enviar por barco'],
      ['worldwide', 'en todo el mundo'], ['invention', 'invento'], ['century', 'siglo'], ['by hand', 'a mano'], ['made of', 'hecho de'], ['label', 'etiqueta']
    ],
    grammar: [
      { t: 'La voz pasiva', es: 'The passive',
        html: `<p>Usamos la pasiva cuando lo importante es la acción o el objeto, no quién lo hace: <b>be + participio</b>.</p>
<p>Presente: <i>Coffee <b>is grown</b> in Boquete.</i> Pasado: <i>The canal <b>was built</b> between 1904 and 1914.</i> En español muchas veces decimos <b>«se»</b>: <i>se cultiva, se construyó</i>.</p>`,
        table: [['tiempo', 'activa', 'pasiva'], ['presente', 'They grow coffee here.', 'Coffee is grown here.'], ['pasado', 'They built the canal.', 'The canal was built.'], ['plural', 'They make cars here.', 'Cars are made here.']],
        sum: 'Coffee is grown in Boquete. The canal was built in 1914.',
        ex: [['Spanish is spoken in twenty countries.', 'El español se habla en veinte países.'], ['These bags are made by hand.', 'Estas bolsas se hacen a mano.']] },
      { t: 'By: quién lo hizo', es: 'Passive + by',
        html: `<p>Si quieres decir quién hizo la acción, usa <b>by</b>: <i>«One Hundred Years of Solitude» <b>was written by</b> Gabriel García Márquez.</i></p>
<p>Pero muchas veces no se dice, porque no se sabe o no importa: <i>My bike <b>was stolen</b> last night.</i></p>`,
        table: [['pasiva', 'español'], ['It was painted by Frida Kahlo.', 'Lo pintó Frida Kahlo.'], ['The phone was invented in 1876.', 'El teléfono se inventó en 1876.'], ['My wallet was stolen.', 'Me robaron la billetera.']],
        ex: [['The first iPhone was designed in California.', 'El primer iPhone se diseñó en California.'], ['Our house was built by my grandfather.', 'Nuestra casa la construyó mi abuelo.']] },
      { t: 'Pasiva en preguntas y negativas', es: 'Passive questions',
        html: `<p>Preguntas: <i><b>Where is</b> it <b>made</b>? <b>When was</b> it <b>built</b>? <b>Is</b> breakfast <b>included</b>?</i></p>
<p>Negativas: <i>It <b>isn’t made</b> in China. They <b>weren’t invited</b>.</i></p>`,
        table: [['pregunta', 'respuesta'], ['Where was this shirt made?', 'It was made in Guatemala.'], ['Is service included?', 'No, it isn’t included.']],
        ex: [['When was the Panama Canal opened? — In 1914.', '¿Cuándo se inauguró el Canal de Panamá? — En 1914.'], ['Is breakfast included in the price?', '¿El desayuno está incluido en el precio?']] }
    ],
    dialogue: {
      t: 'The coffee tour', place: 'Boquete, Panama 🇵🇦',
      lines: [
        ['Guide', 'Welcome to our farm! Our coffee is grown here, on the slopes of the Barú Volcano.', '¡Bienvenidos a nuestra finca! Nuestro café se cultiva aquí, en las faldas del Volcán Barú.'],
        ['Sarah', 'Wow. Is it picked by machines?', '¡Guau! ¿Lo recogen con máquinas?'],
        ['Guide', 'No, every bean is picked by hand. Most of the pickers are from the Ngäbe community.', 'No, cada grano se recoge a mano. La mayoría de los recolectores son de la comunidad ngäbe.'],
        ['Sarah', 'And what happens after that?', '¿Y qué pasa después?'],
        ['Guide', 'The beans are dried in the sun for about two weeks. Then they’re roasted.', 'Los granos se secan al sol unas dos semanas. Después se tuestan.'],
        ['Sarah', 'Where is the coffee sold?', '¿Dónde se vende el café?'],
        ['Guide', 'Most of it is exported to Japan and the United States. In 2019, a Geisha coffee from Boquete was sold for more than 1,000 dollars a pound!', 'La mayoría se exporta a Japón y Estados Unidos. ¡En 2019, un café geisha de Boquete se vendió a más de 1000 dólares la libra!'],
        ['Sarah', 'Seriously? I hope the samples are included in the tour!', '¿En serio? ¡Espero que las muestras estén incluidas en el tour!']
      ],
      q: [
        { t: 'mc', q: 'How is the coffee picked?', o: ['By hand', 'By machines', 'By tourists'] },
        { t: 'mc', q: 'What happens to the beans after they are picked?', o: ['They are dried in the sun', 'They are exported immediately', 'They are frozen'] },
        { t: 'mc', q: 'Where is most of the coffee exported?', o: ['To Japan and the United States', 'To Colombia', 'To Europe'] }
      ]
    },
    culture: { t: 'El café geisha de Panamá', html: `<p>El <b>café geisha</b> de Boquete es uno de los cafés más caros y premiados del mundo. Tiene un sabor floral, casi como té.</p>
<p>☕ En inglés, en un café de EE. UU. vas a ver palabras como <i>pour-over</i>, <i>single origin</i> y <i>light roast</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Coffee ___ grown in Boquete.', a: ['is'], o: ['is', 'are', 'was'], nl: 'En Boquete se cultiva café.', tag: 'en-passive' },
      { t: 'cloze', s: 'The canal was ___ between 1904 and 1914. (build)', a: ['built'], o: ['built', 'build', 'builded'], nl: 'El canal se construyó entre 1904 y 1914.', tag: 'en-passive' },
      { t: 'cloze', s: 'These bags ___ made by hand.', a: ['are'], o: ['are', 'is', 'were be'], nl: 'Estas bolsas se hacen a mano.', tag: 'en-passive' },
      { t: 'cloze', s: 'The book was written ___ García Márquez.', a: ['by'], o: ['by', 'from', 'of'], nl: 'El libro lo escribió García Márquez.', tag: 'en-passive' },
      { t: 'cloze', s: 'My bike was ___ last night. (steal)', a: ['stolen'], o: ['stolen', 'stole', 'stealed'], nl: 'Anoche me robaron la bici.', tag: 'en-passive' },
      { t: 'cloze', s: 'Where ___ this shirt made?', a: ['was'], o: ['was', 'did', 'were'], nl: '¿Dónde se hizo esta camisa?', tag: 'en-passive' },
      { t: 'cloze', s: 'Is breakfast ___ in the price?', a: ['included'], o: ['included', 'include', 'including'], nl: '¿El desayuno está incluido en el precio?', tag: 'en-passive' },
      { t: 'mc', q: '«Aquí se habla español» es…', o: ['Spanish is spoken here.', 'Spanish speaks here.', 'Here is speaking Spanish.'], tag: 'en-passive' },
      { t: 'mc', q: '«Me robaron la billetera» es…', o: ['My wallet was stolen.', 'My wallet stole.', 'They stolen my wallet.'], tag: 'en-passive' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['The phone was invented in 1876.', 'The phone invented in 1876.', 'The phone was invent in 1876.'], tag: 'en-passive' },
      { t: 'tr', nl: 'El café se exporta a Japón.', a: ['The coffee is exported to Japan.', 'Coffee is exported to Japan.'], tag: 'en-passive' },
      { t: 'tr', nl: 'La casa la construyó mi abuelo.', a: ['The house was built by my grandfather.'], tag: 'en-passive' },
      { t: 'tr', nl: '¿Cuándo se construyó el puente?', a: ['When was the bridge built?'], tag: 'en-passive' },
      { t: 'order', s: 'Every bean is picked by hand.', nl: 'Cada grano se recoge a mano.', tag: 'en-passive' },
      { t: 'match', p: [['factory', 'fábrica'], ['harvest', 'cosecha'], ['roast', 'tostar'], ['invention', 'invento'], ['century', 'siglo']], tag: 'en-passive' }
    ],
    reading: {
      t: 'The story of the Panama hat', type: 'Un texto informativo',
      p: [
        ['The famous "Panama hat" is not made in Panama. It is made in Ecuador, from the leaves of a palm called toquilla.', 'El famoso «sombrero Panamá» no se hace en Panamá. Se hace en Ecuador, con las hojas de una palma llamada toquilla.'],
        ['In the 1800s, the hats were shipped to Panama and sold to travelers and gold seekers on their way to California. Later, thousands were worn by the workers who built the canal.', 'En el siglo XIX, los sombreros se enviaban a Panamá y se vendían a los viajeros y buscadores de oro que iban a California. Después, miles los usaron los trabajadores que construyeron el canal.'],
        ['In 1906, President Theodore Roosevelt was photographed in one when he visited the canal, and the name was made famous worldwide. A fine hat can take months to weave, and the best ones are sold for thousands of dollars.', 'En 1906 fotografiaron al presidente Theodore Roosevelt con uno cuando visitó el canal, y el nombre se hizo famoso en todo el mundo. Un sombrero fino puede tardar meses en tejerse, y los mejores se venden por miles de dólares.']
      ],
      gl: [['leaves', 'hojas'], ['gold seekers', 'buscadores de oro'], ['worn', 'usado (ropa)'], ['weave', 'tejer']],
      q: [
        { t: 'mc', q: 'Where are Panama hats made?', o: ['In Ecuador', 'In Panama', 'In California'] },
        { t: 'mc', q: 'Who were the hats sold to in the 1800s?', o: ['Travelers and gold seekers', 'Farmers in Ecuador', 'Presidents'] },
        { t: 'mc', q: 'Why did the name become famous?', o: ['Roosevelt was photographed in one', 'They were cheap', 'They were made by machines'] }
      ]
    },
    say: [['Where is it made?', '¿Dónde se hace?'], ['It was built in 1914.', 'Se construyó en 1914.'], ['Coffee is grown in Boquete.', 'En Boquete se cultiva café.']],
    task: { nl: 'Explica cómo se hace un producto típico de tu país (café, chocolate, una artesanía…). Usa la pasiva al menos 5 veces.', model: 'Molas are made by Guna women in Panama. Different layers of colored cloth are used. The designs are cut by hand and the layers are sewn together. Molas are sold to tourists and they are exported to many countries.' },
    scenario: { nl: 'Una turista estadounidense hace un tour por una finca de café y te hace preguntas.', role: 'You are Sarah, an American tourist on a coffee tour in Boquete. The learner is the guide. Ask how the coffee is grown, picked, dried, roasted and sold. Ask passive questions (Where is it…? When was…?).', goal: 'Explícale el proceso del café usando la voz pasiva.' }
  });

  /* ───────────────────────── B1 · 4 ───────────────────────── */
  U({
    id: 'en-b1-04', level: 'B1', icon: '💭', title: 'If I had a million dollars', nl: 'Situaciones imaginarias',
    goals: ['Usar el condicional irreal: if + pasado, would', 'Expresar deseos con I wish', 'Dar consejos con If I were you…'],
    vocab: [
      ['would', 'condicional (-ría)'], ['could', 'podría'], ['might', 'quizás / podría'], ['win the lottery', 'ganarse la lotería'], ['million', 'millón'], ['rich', 'rico'],
      ['island', 'isla'], ['afford', 'poder pagar / alcanzar para'], ['quit my job', 'renunciar a mi trabajo'], ['donate', 'donar'], ['charity', 'organización benéfica'],
      ['invisible', 'invisible'], ['superpower', 'superpoder'], ['fly', 'volar'], ['read minds', 'leer la mente'], ['travel in time', 'viajar en el tiempo'],
      ['I wish…', 'ojalá… / me gustaría que…'], ['If I were you…', 'yo que tú…'], ['dream', 'soñar'], ['imagine', 'imaginar'], ['choose', 'elegir'], ['probably', 'probablemente'],
      ['spend money', 'gastar dinero'], ['mansion', 'mansión']
    ],
    grammar: [
      { t: 'If + pasado, would + verbo', es: 'Second conditional',
        html: `<p>Para situaciones <b>imaginarias</b> o poco probables: <b>If + pasado simple, would + verbo</b>.</p>
<p><i><b>If</b> I <b>had</b> a million dollars, I <b>would buy</b> a house on the beach.</i> (Si tuviera un millón de dólares, compraría una casa en la playa.)</p>
<p>Forma corta: <b>I’d</b>, she’d. Negativa: <b>wouldn’t</b>. En lugar de would también: <b>could</b> (podría), <b>might</b> (quizás).</p>`,
        table: [['if + pasado', 'would + verbo'], ['If I won the lottery,', 'I’d travel the world.'], ['If she had more time,', 'she’d learn French.'], ['If we lived in New York,', 'we could see a Broadway show.']],
        sum: 'If I had more money, I would travel.',
        ex: [['If I didn’t have to work, I’d sleep until noon.', 'Si no tuviera que trabajar, dormiría hasta el mediodía.'], ['What would you do if you could fly?', '¿Qué harías si pudieras volar?']] },
      { t: 'If I were you…: consejos', es: 'If I were you',
        html: `<p>Con el verbo <b>be</b> en el condicional irreal se usa <b>were</b> para todas las personas (aunque en la conversación también se oye <i>was</i>): <i>If I <b>were</b> rich…, If she <b>were</b> here…</i></p>
<p><b>If I were you, I’d…</b> = yo que tú, yo en tu lugar: <i><b>If I were you, I’d</b> talk to your boss.</i></p>`,
        table: [['inglés', 'español'], ['If I were you, I’d take the job.', 'Yo que tú, aceptaría el trabajo.'], ['If it were cheaper, I’d buy it.', 'Si fuera más barato, lo compraría.']],
        ex: [['If I were you, I wouldn’t call him.', 'Yo que tú, no lo llamaría.'], ['If my mom were here, she’d know what to do.', 'Si mi mamá estuviera aquí, sabría qué hacer.']] },
      { t: 'I wish + pasado', es: 'I wish',
        html: `<p>Para decir que te gustaría que algo fuera distinto <b>ahora</b>: <b>I wish + pasado</b>.</p>
<p><i>I <b>wish</b> I <b>had</b> more free time.</i> (Ojalá tuviera más tiempo libre.) · <i>I <b>wish</b> I <b>could</b> speak Chinese.</i> · <i>I <b>wish</b> it <b>were</b> Friday!</i></p>`,
        table: [['realidad', 'deseo'], ['I don’t have a car.', 'I wish I had a car.'], ['I can’t swim.', 'I wish I could swim.'], ['It’s Monday.', 'I wish it were Friday.']],
        ex: [['I wish I lived closer to the beach.', 'Ojalá viviera más cerca de la playa.'], ['I wish you were here!', '¡Ojalá estuvieras aquí!']] }
    ],
    dialogue: {
      t: 'The lottery ticket', place: 'Los Angeles, California 🇺🇸',
      lines: [
        ['Tony', 'The lottery jackpot is 500 million dollars this week! I bought a ticket.', '¡El premio mayor de la lotería es de 500 millones de dólares esta semana! Compré un boleto.'],
        ['Camila', 'Ha! What would you do if you won?', '¡Ja! ¿Qué harías si ganaras?'],
        ['Tony', 'First, I’d quit my job. Then I’d buy a mansion in Malibu.', 'Primero, renunciaría a mi trabajo. Después compraría una mansión en Malibú.'],
        ['Camila', 'Really? If I were you, I’d keep it a secret. Everybody would ask you for money!', '¿En serio? Yo que tú, lo mantendría en secreto. ¡Todo el mundo te pediría dinero!'],
        ['Tony', 'Good point. And you? What would you do?', 'Buen punto. ¿Y tú? ¿Qué harías?'],
        ['Camila', 'I’d help my family in Panama and I’d donate a lot to charity. And I might buy a small island.', 'Ayudaría a mi familia en Panamá y donaría mucho a la caridad. Y quizás compraría una isla pequeña.'],
        ['Tony', 'An island? I wish I had your imagination!', '¿Una isla? ¡Ojalá yo tuviera tu imaginación!'],
        ['Camila', 'Well, it doesn’t matter. The chances of winning are one in 300 million!', 'Bueno, da igual. ¡La probabilidad de ganar es una en 300 millones!']
      ],
      q: [
        { t: 'mc', q: 'What would Tony do first?', o: ['Quit his job', 'Buy an island', 'Help his family'] },
        { t: 'mc', q: 'What is Camila’s advice?', o: ['Keep it a secret', 'Buy a mansion', 'Buy more tickets'] },
        { t: 'mc', q: 'What would Camila do?', o: ['Help her family and donate to charity', 'Quit her job', 'Move to Malibu'] }
      ]
    },
    culture: { t: 'La lotería en EE. UU.', html: `<p>Las loterías <b>Powerball</b> y <b>Mega Millions</b> a veces tienen premios de más de mil millones de dólares (<i>a billion</i>). Ojo: en inglés <b>a billion</b> = mil millones, no un billón.</p>
<p>💵 Los ganadores pueden elegir recibir todo de una vez (<i>lump sum</i>) o en pagos durante 30 años.</p>` },
    ex: [
      { t: 'cloze', s: 'If I ___ a million dollars, I’d buy a house. (have)', a: ['had'], o: ['had', 'have', 'would have'], nl: 'Si tuviera un millón de dólares, compraría una casa.', tag: 'en-if2' },
      { t: 'cloze', s: 'If I won the lottery, I ___ travel the world.', a: ['would'], o: ['would', 'will', 'did'], nl: 'Si ganara la lotería, viajaría por el mundo.', tag: 'en-if2' },
      { t: 'cloze', s: 'If I ___ you, I’d take the job.', a: ['were'], o: ['were', 'am', 'be'], nl: 'Yo que tú, aceptaría el trabajo.', tag: 'en-if2' },
      { t: 'cloze', s: 'I wish I ___ speak Chinese.', a: ['could'], o: ['could', 'can', 'would'], nl: 'Ojalá pudiera hablar chino.', tag: 'en-wish' },
      { t: 'cloze', s: 'I wish it ___ Friday!', a: ['were'], o: ['were', 'is', 'will be'], nl: '¡Ojalá fuera viernes!', tag: 'en-wish' },
      { t: 'cloze', s: 'What would you do if you ___ fly?', a: ['could'], o: ['could', 'can', 'would'], nl: '¿Qué harías si pudieras volar?', tag: 'en-if2' },
      { t: 'cloze', s: 'If she had more time, she ___ learn French.', a: ['’d'], o: ['’d', '’ll', '’s'], nl: 'Si tuviera más tiempo, aprendería francés.', tag: 'en-if2' },
      { t: 'mc', q: '«Yo que tú, no lo haría» es…', o: ['If I were you, I wouldn’t do it.', 'If I am you, I don’t do it.', 'If I was you, I won’t do it.'], tag: 'en-if2' },
      { t: 'mc', q: '«Ojalá estuvieras aquí» es…', o: ['I wish you were here.', 'I wish you are here.', 'I hope you were here.'], tag: 'en-wish' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['If I had a car, I would drive to work.', 'If I would have a car, I drive to work.', 'If I have a car, I would drive to work.'], tag: 'en-if2' },
      { t: 'tr', nl: '¿Qué harías si ganaras la lotería?', a: ['What would you do if you won the lottery?'], tag: 'en-if2' },
      { t: 'tr', nl: 'Ojalá tuviera más tiempo libre.', a: ['I wish I had more free time.', 'I wish I had more time.'], tag: 'en-wish' },
      { t: 'tr', nl: 'Si fuera más barato, lo compraría.', a: ["If it were cheaper, I'd buy it.", 'If it were cheaper, I would buy it.', "If it was cheaper, I'd buy it.", 'If it was cheaper, I would buy it.'], tag: 'en-if2' },
      { t: 'order', s: 'If I were you, I would talk to your boss.', nl: 'Yo que tú, hablaría con tu jefe.', tag: 'en-if2' },
      { t: 'match', p: [['afford', 'poder pagar'], ['donate', 'donar'], ['island', 'isla'], ['superpower', 'superpoder'], ['mansion', 'mansión']], tag: 'en-if2' }
    ],
    reading: {
      t: 'What would you choose?', type: 'Una encuesta',
      p: [
        ['We asked 1,000 Americans: "If you could have one superpower, what would it be?" The answers were surprising.', 'Les preguntamos a 1000 estadounidenses: «Si pudieras tener un superpoder, ¿cuál sería?». Las respuestas fueron sorprendentes.'],
        ['The most popular answer was not flying, but traveling in time. "I’d go back and buy Apple shares in 1990," said one man from Ohio. Others said they would visit their grandparents again.', 'La respuesta más popular no fue volar, sino viajar en el tiempo. «Volvería atrás y compraría acciones de Apple en 1990», dijo un hombre de Ohio. Otros dijeron que visitarían otra vez a sus abuelos.'],
        ['Only 8% chose to be invisible. "If I were invisible, I’d probably do bad things," joked one woman. "I wish I could just read my teenager’s mind!"', 'Solo el 8 % eligió ser invisible. «Si fuera invisible, probablemente haría cosas malas», bromeó una mujer. «¡Ojalá pudiera simplemente leer la mente de mi hijo adolescente!»']
      ],
      gl: [['surprising', 'sorprendente'], ['shares', 'acciones (de bolsa)'], ['joked', 'bromeó'], ['go back', 'volver atrás']],
      q: [
        { t: 'mc', q: 'What was the most popular superpower?', o: ['Traveling in time', 'Flying', 'Being invisible'] },
        { t: 'mc', q: 'What would the man from Ohio do?', o: ['Buy Apple shares in 1990', 'Visit his grandparents', 'Fly to Panama'] },
        { t: 'mc', q: 'What does the woman wish?', o: ['That she could read her teenager’s mind', 'That she were invisible', 'That she were rich'] }
      ]
    },
    say: [['What would you do if you were rich?', '¿Qué harías si fueras rico?'], ['If I were you, I’d take the job.', 'Yo que tú, aceptaría el trabajo.'], ['I wish I had more time.', 'Ojalá tuviera más tiempo.']],
    task: { nl: 'Contesta: ¿qué harías si ganaras un millón de dólares? ¿Y si pudieras vivir en cualquier país? Escribe 5 frases y termina con un deseo (I wish…).', model: "If I won a million dollars, I'd buy a house for my parents. I'd travel to Japan and I'd study photography. If I could live anywhere, I'd live in Canada, because I love nature. I wish I had more time to travel!" },
    scenario: { nl: 'Un amigo de Los Ángeles compró un boleto de lotería y sueña en voz alta.', role: 'You are Tony, a fun friend in Los Angeles who just bought a lottery ticket. Ask the learner what they would do with the money, which superpower they would choose, and ask for advice (What would you do if you were me?).', goal: 'Habla de situaciones imaginarias y dale un consejo con If I were you…' }
  });

  /* ───────────────────────── B1 · 5 ───────────────────────── */
  U({
    id: 'en-b1-05', level: 'B1', icon: '🔎', title: 'The person who…', nl: 'Describir personas y cosas',
    goals: ['Unir frases con who, which y that', 'Usar where y whose', 'Explicar una palabra que no sabes'],
    vocab: [
      ['who', 'que / quien (personas)'], ['which', 'que (cosas)'], ['that', 'que (personas y cosas)'], ['where', 'donde'], ['whose', 'cuyo / de quien'],
      ['neighbor', 'vecino'], ['landlord', 'dueño (del apartamento)'], ['roommate', 'compañero de cuarto'], ['stranger', 'desconocido'], ['tool', 'herramienta'],
      ['device', 'aparato'], ['thing', 'cosa'], ['stuff', 'cosas (informal)'], ['place', 'lugar'], ['describe', 'describir'], ['explain', 'explicar'], ['define', 'definir'],
      ['It’s a kind of…', 'Es un tipo de…'], ['It’s used for…', 'Se usa para…'], ['It’s something that…', 'Es algo que…'], ['It’s someone who…', 'Es alguien que…'],
      ['hardware store', 'ferretería'], ['plumber', 'plomero'], ['leak', 'gotera / fuga']
    ],
    grammar: [
      { t: 'Who, which, that', es: 'Relative clauses',
        html: `<p>Para dar información sobre una persona o cosa sin empezar otra frase:</p>
<p><b>who</b> = personas: <i>The woman <b>who</b> lives next door is a nurse.</i> · <b>which</b> = cosas: <i>The bus <b>which</b> goes downtown is late.</i> · <b>that</b> = personas o cosas (muy común al hablar).</p>`,
        table: [['', 'ejemplo'], ['personas', 'I have a friend who/that speaks five languages.'], ['cosas', 'This is the phone which/that I bought.'], ['lugares', 'That’s the café where we met.']],
        sum: 'The man who lives here. The car that I bought.',
        ex: [['A plumber is a person who fixes pipes.', 'Un plomero es una persona que arregla tuberías.'], ['I lost the keys that you gave me.', 'Perdí las llaves que me diste.']] },
      { t: 'Where y whose', es: 'Where / whose',
        html: `<p><b>where</b> = donde (lugares): <i>That’s the hospital <b>where</b> I was born.</i></p>
<p><b>whose</b> = cuyo, de quien (posesión): <i>I have a neighbor <b>whose</b> dog barks all night.</i> (un vecino cuyo perro ladra toda la noche)</p>`,
        table: [['inglés', 'español'], ['the town where I grew up', 'el pueblo donde crecí'], ['the girl whose phone was stolen', 'la muchacha a quien le robaron el celular']],
        ex: [['This is the restaurant where they make the best ceviche.', 'Este es el restaurante donde hacen el mejor ceviche.'], ['He’s the singer whose song is everywhere.', 'Es el cantante cuya canción suena en todas partes.']] },
      { t: 'Explicar una palabra que no sabes', es: 'Paraphrasing',
        html: `<p>¿No sabes cómo se dice algo? ¡Descríbelo! <i>It’s <b>a thing which</b> you use to open bottles.</i> · <i>It’s <b>someone who</b> works in a restaurant and makes the food.</i> · <i>It’s <b>a place where</b> you can buy medicine.</i></p>
<p>Cuando <i>that/which/who</i> es el objeto, se puede omitir: <i>The movie (that) we saw was great.</i></p>`,
        table: [['descripción', 'palabra'], ['a thing which you use to cut paper', 'scissors'], ['someone who flies planes', 'a pilot'], ['a place where you wash clothes', 'a laundromat']],
        ex: [['It’s a kind of fruit which is green outside and red inside.', 'Es un tipo de fruta que es verde por fuera y roja por dentro.'], ['The book I’m reading is really good.', 'El libro que estoy leyendo es muy bueno.']] }
    ],
    dialogue: {
      t: 'At the hardware store', place: 'Phoenix, Arizona 🇺🇸',
      lines: [
        ['Clerk', 'Hi there! Can I help you find something?', '¡Hola! ¿Le ayudo a encontrar algo?'],
        ['Rafael', 'Yes, but I don’t know the word in English. It’s a tool which you use to fix pipes.', 'Sí, pero no sé la palabra en inglés. Es una herramienta que se usa para arreglar tuberías.'],
        ['Clerk', 'A wrench? Is it the thing that turns the nuts?', '¿Una llave inglesa? ¿Es eso que aprieta las tuercas?'],
        ['Rafael', 'Yes! A wrench. My kitchen has a leak, and the landlord who owns the apartment never answers.', '¡Sí! Una llave inglesa. Mi cocina tiene una fuga, y el dueño del apartamento nunca contesta.'],
        ['Clerk', 'Oh no. Is it the pipe which is under the sink?', '¡Ay, no! ¿Es la tubería que está debajo del fregadero?'],
        ['Rafael', 'Exactly. I have a neighbor whose brother is a plumber, but he’s on vacation.', 'Exacto. Tengo un vecino cuyo hermano es plomero, pero está de vacaciones.'],
        ['Clerk', 'Here’s the wrench, and this is the tape that plumbers use. Aisle 7 is where you’ll find the videos… just kidding!', 'Aquí está la llave, y esta es la cinta que usan los plomeros. En el pasillo 7 están los videos… ¡es broma!'],
        ['Rafael', 'Ha! Thanks. I’ll watch the videos online.', '¡Ja! Gracias. Veré los videos en internet.']
      ],
      q: [
        { t: 'mc', q: 'What does Rafael need?', o: ['A wrench', 'A plumber', 'A new sink'] },
        { t: 'mc', q: 'Where is the leak?', o: ['Under the kitchen sink', 'In the bathroom', 'On the roof'] },
        { t: 'mc', q: 'Why can’t the neighbor’s brother help?', o: ['He’s on vacation', 'He’s sick', 'He doesn’t have tools'] }
      ]
    },
    culture: { t: 'Hazlo tú mismo', html: `<p>En Estados Unidos la mano de obra es cara, así que mucha gente arregla cosas sola: es la cultura del <b>DIY</b> (<i>do it yourself</i>). Las grandes ferreterías (<b>hardware stores</b>) son enormes y venden de todo.</p>
<p>🔧 Si alquilas, el <b>landlord</b> normalmente tiene que arreglar lo que se daña. Pídelo por escrito, por mensaje o correo.</p>` },
    ex: [
      { t: 'cloze', s: 'The woman ___ lives next door is a nurse.', a: ['who'], o: ['who', 'which', 'where'], nl: 'La mujer que vive al lado es enfermera.', tag: 'en-rel' },
      { t: 'cloze', s: 'The bus ___ goes downtown is late.', a: ['which'], o: ['which', 'who', 'whose'], nl: 'El bus que va al centro está atrasado.', tag: 'en-rel' },
      { t: 'cloze', s: 'That’s the hospital ___ I was born.', a: ['where'], o: ['where', 'which', 'who'], nl: 'Ese es el hospital donde nací.', tag: 'en-where' },
      { t: 'cloze', s: 'I have a neighbor ___ dog barks all night.', a: ['whose'], o: ['whose', 'who', 'who’s'], nl: 'Tengo un vecino cuyo perro ladra toda la noche.', tag: 'en-where' },
      { t: 'cloze', s: 'A plumber is a person ___ fixes pipes.', a: ['who'], o: ['who', 'which', 'where'], nl: 'Un plomero es una persona que arregla tuberías.', tag: 'en-rel' },
      { t: 'cloze', s: 'It’s a place ___ you can buy medicine.', a: ['where'], o: ['where', 'which', 'what'], nl: 'Es un lugar donde puedes comprar medicinas.', tag: 'en-where' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['I lost the keys that you gave me.', 'I lost the keys who you gave me.', 'I lost the keys what you gave me.'], tag: 'en-rel' },
      { t: 'mc', q: '«Es algo que se usa para…» es…', o: ['It’s something that you use to…', 'It’s a something who you use for…', 'Is thing which use to…'], tag: 'en-rel' },
      { t: 'mc', q: '«el pueblo donde crecí» es…', o: ['the town where I grew up', 'the town which I grew up', 'the town who I grew up'], tag: 'en-where' },
      { t: 'tr', nl: 'Tengo una amiga que habla cinco idiomas.', a: ['I have a friend who speaks five languages.', 'I have a friend that speaks five languages.'], tag: 'en-rel' },
      { t: 'tr', nl: 'Este es el restaurante donde nos conocimos.', a: ["This is the restaurant where we met.", "That's the restaurant where we met."], tag: 'en-where' },
      { t: 'tr', nl: 'La película que vimos fue buenísima.', a: ['The movie that we saw was great.', 'The movie we saw was great.', 'The movie which we saw was great.'], tag: 'en-rel' },
      { t: 'tr', nl: 'Es alguien que trabaja en un hospital.', a: ["It's someone who works in a hospital.", 'It is someone who works in a hospital.'], tag: 'en-rel' },
      { t: 'order', s: 'He is the singer whose song is everywhere.', nl: 'Es el cantante cuya canción suena en todas partes.', tag: 'en-where' },
      { t: 'match', p: [['landlord', 'dueño del apartamento'], ['roommate', 'compañero de cuarto'], ['stranger', 'desconocido'], ['tool', 'herramienta'], ['leak', 'fuga']], tag: 'en-rel' }
    ],
    reading: {
      t: 'Guess the word', type: 'Un juego de palabras',
      p: [
        ['1. It’s a machine which keeps food cold. You can find it in every kitchen. Most people have magnets and photos on it.', '1. Es una máquina que mantiene la comida fría. La encuentras en todas las cocinas. Casi todo el mundo le pone imanes y fotos.'],
        ['2. It’s a person who helps you when you are lost in a city. This person works in an office where tourists can get maps and information.', '2. Es una persona que te ayuda cuando estás perdido en una ciudad. Trabaja en una oficina donde los turistas pueden conseguir mapas e información.'],
        ['3. It’s an animal whose neck is very long. It lives in Africa and eats leaves which are at the top of trees.', '3. Es un animal cuyo cuello es muy largo. Vive en África y come hojas que están en la parte de arriba de los árboles.']
      ],
      gl: [['magnets', 'imanes'], ['lost', 'perdido'], ['neck', 'cuello'], ['top', 'parte de arriba']],
      q: [
        { t: 'mc', q: 'What is word number 1?', o: ['A refrigerator', 'An oven', 'A microwave'] },
        { t: 'mc', q: 'Where does person number 2 work?', o: ['At a tourist information office', 'At a hospital', 'At a hotel kitchen'] },
        { t: 'mc', q: 'What is animal number 3?', o: ['A giraffe', 'An elephant', 'A lion'] }
      ]
    },
    say: [['It’s a tool which you use to fix pipes.', 'Es una herramienta que se usa para arreglar tuberías.'], ['That’s the town where I grew up.', 'Ese es el pueblo donde crecí.'], ['She’s the woman who helped me.', 'Ella es la mujer que me ayudó.']],
    task: { nl: 'Elige 4 palabras (una persona, una cosa, un lugar y un animal) y descríbelas en inglés sin decir la palabra, usando who, which, where y whose.', model: "It's a person who works in a school and teaches children. It's a thing which you use to take pictures. It's a place where you can see old paintings. It's an animal whose skin has black and white stripes." },
    scenario: { nl: 'En una ferretería de Phoenix necesitas algo, pero no sabes cómo se llama en inglés.', role: 'You are a helpful clerk at a hardware store in Phoenix. The learner needs something but doesn’t know the word. Ask questions so they describe it with who, which, that and where, and guess the word.', goal: 'Describe lo que necesitas sin saber la palabra hasta que el empleado lo adivine.' }
  });
})(window.SPT);
