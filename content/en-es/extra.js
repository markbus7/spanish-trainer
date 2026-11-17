/* Inglés: prueba de nivel, conversaciones libres y frases del día. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-es')) return;

  /* Prueba de nivel A1, A2 y B1: la primera opción es la correcta. */
  S.placement = [
    { lv: 'A1', q: 'I ___ from Panama.', o: ['am', 'is', 'are'] },
    { lv: 'A1', q: 'She ___ a teacher.', o: ['is', 'are', 'am'] },
    { lv: 'A1', q: "What's ___ name?", o: ['your', 'you', "you're"] },
    { lv: 'A1', q: 'I ___ two brothers.', o: ['have', 'has', 'am'] },
    { lv: 'A1', q: 'He ___ coffee every morning.', o: ['drinks', 'drink', 'drinking'] },
    { lv: 'A1', q: '___ you like fish?', o: ['Do', 'Does', 'Are'] },
    { lv: 'A1', q: "She ___ like milk.", o: ["doesn't", "don't", 'not'] },
    { lv: 'A1', q: '___ a bank near here?', o: ['Is there', 'There are', 'Have'] },
    { lv: 'A1', q: "I'd like ___ apple, please.", o: ['an', 'a', 'some'] },
    { lv: 'A1', q: "I'm 25 ___ old.", o: ['years', 'year', 'ages'] },
    { lv: 'A1', q: 'I get up ___ seven.', o: ['at', 'in', 'on'] },
    { lv: 'A1', q: 'This is Ana and ___ husband.', o: ['her', 'his', 'she'] },
    { lv: 'A1', q: 'We ___ go to the beach. (nunca)', o: ['never', 'not never', "don't never"] },
    { lv: 'A1', q: 'They ___ students.', o: ['are', 'is', 'be'] },
    { lv: 'A2', q: 'I ___ to the beach yesterday.', o: ['went', 'go', 'goed'] },
    { lv: 'A2', q: 'Did you ___ the movie?', o: ['see', 'saw', 'seen'] },
    { lv: 'A2', q: 'We ___ at home last night.', o: ['were', 'was', 'are'] },
    { lv: 'A2', q: 'She is ___ than her sister.', o: ['taller', 'more tall', 'tallest'] },
    { lv: 'A2', q: "It's the ___ restaurant in town.", o: ['best', 'better', 'goodest'] },
    { lv: 'A2', q: 'Have you ever ___ to Mexico?', o: ['been', 'went', 'go'] },
    { lv: 'A2', q: "I haven't finished ___.", o: ['yet', 'already', 'ever'] },
    { lv: 'A2', q: 'You ___ see a doctor.', o: ['should', 'should to', 'shoulds'] },
    { lv: 'A2', q: 'I was sleeping when the phone ___.', o: ['rang', 'was ringing', 'rings'] },
    { lv: 'A2', q: 'I think it ___ rain tomorrow.', o: ['will', 'is', 'does'] },
    { lv: 'A2', q: 'We ___ to wear a uniform at work.', o: ['have', 'must', 'has'] },
    { lv: 'A2', q: 'How ___ water do you drink every day?', o: ['much', 'many', 'lot'] },
    { lv: 'A2', q: 'If it rains, we ___ stay home.', o: ['will', 'would', 'are'] },
    { lv: 'A2', q: 'I started this job two years ___.', o: ['ago', 'before', 'last'] },
    { lv: 'B1', q: 'I ___ to live in Colón, but now I live in David.', o: ['used', 'use', 'was used'] },
    { lv: 'B1', q: "I've lived here ___ 2019.", o: ['since', 'for', 'from'] },
    { lv: 'B1', q: "We've been ___ for an hour!", o: ['waiting', 'waited', 'wait'] },
    { lv: 'B1', q: 'The Panama Canal ___ built between 1904 and 1914.', o: ['was', 'is', 'did'] },
    { lv: 'B1', q: 'If I ___ rich, I would travel the world.', o: ['were', 'am', 'will be'] },
    { lv: 'B1', q: 'I wish I ___ more free time.', o: ['had', 'have', 'will have'] },
    { lv: 'B1', q: 'That\u2019s the woman ___ helped me.', o: ['who', 'which', 'whose'] },
    { lv: 'B1', q: 'She told me that she ___ tired.', o: ['was', 'is', 'were'] },
    { lv: 'B1', q: 'When I arrived, the movie had already ___.', o: ['started', 'start', 'starting'] },
    { lv: 'B1', q: 'The lights are on. They ___ be home.', o: ['must', "mustn't", 'can'] },
    { lv: 'B1', q: 'I enjoy ___ in the evening.', o: ['reading', 'to read', 'read'] },
    { lv: 'B1', q: "I'm looking forward to ___ you.", o: ['seeing', 'see', 'saw'] },
    { lv: 'B1', q: 'Can you turn ___ the TV? I want to sleep.', o: ['off', 'out', 'down'] },
    { lv: 'B1', q: 'He asked me where I ___.', o: ['lived', 'do live', 'did live'] }
  ];

  /* Conversaciones libres con Profe Lupe. */
  S.scenarios = [
    { id: 'en-coffee', icon: '☕', lv: 'A1', title: 'Pedir en un café', place: 'New York 🇺🇸', role: 'You are Jake, a friendly barista in a busy coffee shop in New York. Ask for the order, the size (small, medium, large) and the name for the cup.', goal: 'Pide una bebida y algo de comer, y di tu nombre para el vaso.' },
    { id: 'en-airport', icon: '🛂', lv: 'A1', title: 'En migración', place: 'Miami International Airport 🇺🇸', role: 'You are a polite immigration officer at Miami airport. Ask simple questions: purpose of the trip, how long, where the traveler is staying.', goal: 'Contesta las preguntas sobre tu viaje.' },
    { id: 'en-hotel', icon: '🏨', lv: 'A1', title: 'Hacer check-in en un hotel', place: 'Orlando 🇺🇸', role: 'You are Linda, a receptionist at a family hotel in Orlando. Check the guest in, ask for the name and the reservation, and explain breakfast and Wi-Fi.', goal: 'Haz el check-in y pregunta por el desayuno y el wifi.' },
    { id: 'en-store', icon: '🛍️', lv: 'A1', title: 'Comprar ropa', place: 'Houston 🇺🇸', role: 'You are a helpful sales assistant in a clothing store in Houston. Help the customer find a size and a color, and tell the price.', goal: 'Busca una camiseta en tu talla y pregunta el precio.' },
    { id: 'en-weekend', icon: '🕰️', lv: 'A2', title: 'Contar tu fin de semana', place: 'Chicago 🇺🇸', role: 'You are Amy, a coworker in Chicago. It is Monday. Ask what the learner did on the weekend and ask follow-up questions in the past simple. Tell a short funny story about your own weekend.', goal: 'Cuenta qué hiciste el fin de semana y reacciona a su historia.' },
    { id: 'en-doctor', icon: '🩺', lv: 'A2', title: 'En el médico', place: 'Houston 🇺🇸', role: 'You are Dr. Patel at an urgent care clinic in Houston. Ask about symptoms, since when, and give advice with should. Explain how to take the medicine.', goal: 'Explica qué te duele y entiende cómo tomar la medicina.' },
    { id: 'en-trip', icon: '✈️', lv: 'A2', title: 'Recomendar un lugar', place: 'San Diego 🇺🇸', role: 'You are Chris, an American who wants to visit Latin America. Ask the learner to compare places, ask "Have you ever been to…?" and ask for the best food to try.', goal: 'Recomiéndale un lugar y explícale por qué es el mejor.' },
    { id: 'en-interview', icon: '💼', lv: 'B1', title: 'Entrevista de trabajo', place: 'Seattle 🇺🇸', role: 'You are Karen, an HR manager in Seattle interviewing the learner for a job. Ask about experience (How long have you…?), strengths, a difficult situation they solved (past perfect), and what they would do in a hypothetical situation (If you…, what would you do?).', goal: 'Habla de tu experiencia y contesta preguntas hipotéticas.' },
    { id: 'en-complaint', icon: '📦', lv: 'B1', title: 'Hacer un reclamo', place: 'Atlanta 🇺🇸', role: 'You are a customer service agent on the phone for an online store. The learner\u2019s order arrived damaged. Be polite but follow the rules: ask for the order number and details, and offer options.', goal: 'Explica el problema con cortesía y consigue un reembolso.' },
    { id: 'en-debate', icon: '🗳️', lv: 'B1', title: 'Dar tu opinión', place: 'Boston 🇺🇸', role: 'You are Mike, a friendly but opinionated college student in Boston. Discuss a topic (social media, remote work or tourism) with the learner: ask for their opinion, disagree politely sometimes, and ask them to explain why.', goal: 'Da tu opinión con argumentos y reacciona a la suya.' },
    { id: 'en-free', icon: '💬', lv: 'A1', title: 'Conversación libre', place: 'Estados Unidos 🇺🇸', role: 'You are a friendly American (choose a city and say it at the start). Have a natural, simple conversation about daily life, hobbies and plans.', goal: 'Habla de lo que quieras.' }
  ];

  /* Frases del día: [inglés, español, bandera]. */
  S.phrases = [
    ['Practice makes perfect.', 'La práctica hace al maestro.', '🇺🇸'],
    ['Better late than never.', 'Más vale tarde que nunca.', '🇺🇸'],
    ['Take it easy.', 'Tómalo con calma.', '🇺🇸'],
    ['No worries!', '¡No te preocupes!', '🇺🇸'],
    ['Piece of cake.', 'Pan comido (muy fácil).', '🇺🇸'],
    ["It's raining cats and dogs.", 'Está lloviendo a cántaros.', '🇺🇸'],
    ['Break a leg!', '¡Mucha suerte! (antes de una presentación)', '🇺🇸'],
    ['Time flies.', 'El tiempo vuela.', '🇺🇸'],
    ['See you around!', '¡Nos vemos!', '🇺🇸'],
    ['Good job!', '¡Buen trabajo!', '🇺🇸'],
    ['Easy does it.', 'Despacio y con cuidado.', '🇺🇸'],
    ['Every day is a new chance.', 'Cada día es una nueva oportunidad.', '🇺🇸']
  ];
})(window.SPT);
