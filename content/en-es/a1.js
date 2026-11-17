/* Inglés para hispanohablantes — nivel A1 (inglés estadounidense, explicaciones en español latinoamericano).
   Velden zoals in de Spaanse cursus: in vocab/zinnen is [0] de doeltaal (Engels) en [1] de uitlegtaal (Spaans).
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzes, eerste = juist), tr (ES→EN), order, match. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('en-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'en-be': 'el verbo to be (am, is, are)', 'en-pron': 'pronombres (I, you, he, she…)', 'en-art': 'a / an / the', 'en-have': 'have / has',
    'en-poss': 'my, your, his, her…', 'en-plural': 'plural (-s, -es)', 'en-like': 'like / don’t like', 'en-do': 'do / does en preguntas',
    'en-ps': 'presente simple (-s en he/she)', 'en-time': 'la hora', 'en-there': 'there is / there are', 'en-prep': 'preposiciones de lugar',
    'en-imp': 'imperativo (turn left…)', 'en-q': 'palabras de pregunta', 'en-order': 'orden de las palabras', 'en-num': 'números'
  });

  /* ───────────────────────── A1 · 1 ───────────────────────── */
  U({
    id: 'en-a1-01', level: 'A1', icon: '👋', title: 'Hello! Nice to meet you', nl: 'Saludar y presentarte',
    goals: ['Saludar y despedirte', 'Decir tu nombre y de dónde eres', 'Usar I am, you are, he is'],
    vocab: [
      ["hello", "hola"], ["hi", "hola (informal)"], ["good morning", "buenos días"], ["good afternoon", "buenas tardes"], ["good evening", "buenas noches (al llegar)"],
      ["good night", "buenas noches (al irte o a dormir)"], ["goodbye", "adiós"], ["bye", "chao"], ["see you later", "nos vemos"], ["How are you?", "¿Cómo estás?"],
      ["I'm fine, thanks.", "Estoy bien, gracias."], ["And you?", "¿Y tú?"], ["What's your name?", "¿Cómo te llamas?"], ["My name is…", "Me llamo…"],
      ["Nice to meet you.", "Mucho gusto."], ["Where are you from?", "¿De dónde eres?"], ["I'm from Panama.", "Soy de Panamá."], ["thank you", "gracias"],
      ["you're welcome", "de nada"], ["please", "por favor"], ["sorry", "perdón / lo siento"], ["excuse me", "disculpe / con permiso"], ["yes", "sí"], ["no", "no"],
      ["friend", "amigo / amiga"], ["teacher", "profesor / profesora"], ["student", "estudiante"]
    ],
    grammar: [
      { t: 'El verbo to be: ser y estar en uno', es: 'The verb to be',
        html: `<p>En inglés <b>to be</b> significa <i>ser</i> y también <i>estar</i>. Tiene tres formas en presente: <b>am</b>, <b>is</b> y <b>are</b>.</p>
<p>En inglés <b>siempre</b> hay que decir el sujeto. En español dices <i>Soy de Panamá</i>, pero en inglés es <b>I am from Panama</b>, nunca <s>Am from Panama</s>.</p>
<p>Al hablar casi siempre se usa la forma corta: <b>I'm</b>, <b>you're</b>, <b>he's</b>, <b>she's</b>, <b>it's</b>, <b>we're</b>, <b>they're</b>.</p>`,
        table: [['', 'forma larga', 'forma corta'], ['yo', 'I am', "I'm"], ['tú / usted / ustedes', 'you are', "you're"], ['él / ella / eso', 'he / she / it is', "he's / she's / it's"], ['nosotros', 'we are', "we're"], ['ellos / ellas', 'they are', "they're"]],
        sum: "I am, you are, he is, she is, we are, they are.",
        ex: [["I'm Ana. I'm from Panama.", 'Soy Ana. Soy de Panamá.'], ['She is a teacher.', 'Ella es profesora.'], ['We are friends.', 'Somos amigos.']] },
      { t: 'You: tú, usted y ustedes', es: 'You',
        html: `<p>En inglés <b>you</b> sirve para <i>tú</i>, <i>usted</i> y <i>ustedes</i>. No hay forma formal: la cortesía se muestra con palabras como <b>please</b>, <b>thank you</b> y <b>excuse me</b>.</p>
<p>Y ojo: <b>I</b> (yo) siempre va con mayúscula, aunque esté en medio de la frase.</p>`,
        table: [['español', 'inglés'], ['tú eres', 'you are'], ['usted es', 'you are'], ['ustedes son', 'you are']],
        ex: [['Are you a student?', '¿Eres estudiante? / ¿Es usted estudiante?'], ['You are very kind.', 'Usted es muy amable.']] },
      { t: 'Preguntas y negativas con to be', es: 'Questions and negatives',
        html: `<p>Para preguntar, pon el verbo <b>antes</b> del sujeto: <b>Are you</b> from Panama? <b>Is she</b> a teacher?</p>
<p>Para negar, agrega <b>not</b> después del verbo: <b>I'm not</b> tired. <b>He isn't</b> here. <b>They aren't</b> students.</p>`,
        table: [['afirmativa', 'pregunta', 'negativa'], ['You are tired.', 'Are you tired?', "You aren't tired."], ['She is from Colón.', 'Is she from Colón?', "She isn't from Colón."]],
        ex: [['Are you from Panama? — Yes, I am.', '¿Eres de Panamá? — Sí.'], ["I'm not a teacher. I'm a student.", 'No soy profesor. Soy estudiante.']] }
    ],
    dialogue: {
      t: 'First day at the language school', place: 'Panama City 🇵🇦',
      lines: [
        ['Laura', 'Hi! Good morning.', '¡Hola! Buenos días.'],
        ['Mike', 'Good morning. How are you?', 'Buenos días. ¿Cómo estás?'],
        ['Laura', "I'm fine, thanks. And you?", 'Bien, gracias. ¿Y tú?'],
        ['Mike', "I'm great. My name is Mike. What's your name?", 'Muy bien. Me llamo Mike. ¿Cómo te llamas?'],
        ['Laura', "I'm Laura. Nice to meet you.", 'Soy Laura. Mucho gusto.'],
        ['Mike', 'Nice to meet you too. Where are you from?', 'Igualmente. ¿De dónde eres?'],
        ['Laura', "I'm from David, in Chiriquí. Are you from the United States?", 'Soy de David, en Chiriquí. ¿Eres de Estados Unidos?'],
        ['Mike', "Yes, I am. I'm from Texas. I'm the new English teacher.", 'Sí. Soy de Texas. Soy el nuevo profesor de inglés.'],
        ['Laura', 'Oh, great! See you in class.', '¡Ah, qué bien! Nos vemos en clase.'],
        ['Mike', 'See you later, Laura!', '¡Nos vemos, Laura!']
      ],
      q: [
        { t: 'mc', q: 'Where is Laura from?', o: ['From David, in Chiriquí', 'From Texas', 'From Panama City'] },
        { t: 'mc', q: 'Who is Mike?', o: ['The new English teacher', 'A student', "Laura's brother"] },
        { t: 'mc', q: 'How is Laura?', o: ["She's fine", "She's tired", "She's sad"] }
      ]
    },
    culture: { t: 'Hi, first names y small talk', html: `<p>En Estados Unidos la gente usa mucho el <b>nombre de pila</b>, también con el jefe o un profesor: <i>Hi, Mike!</i> Para alguien mayor o en una situación formal se dice <b>Mr.</b> (señor) o <b>Ms.</b> (señora/señorita) con el apellido: <i>Good morning, Ms. Smith.</i></p>
<p><b>How are you?</b> muchas veces es solo un saludo. La respuesta normal es corta: <i>Good, thanks. And you?</i></p>
<p>🤝 Al conocer a alguien se da la mano. El beso en la mejilla, tan normal en Panamá, no es costumbre en Estados Unidos.</p>` },
    ex: [
      { t: 'cloze', s: 'I ___ from Panama.', a: ['am'], o: ['am', 'is', 'are'], nl: 'Soy de Panamá.', tag: 'en-be' },
      { t: 'cloze', s: 'She ___ a teacher.', a: ['is'], o: ['is', 'am', 'are'], nl: 'Ella es profesora.', tag: 'en-be' },
      { t: 'cloze', s: 'We ___ friends.', a: ['are'], o: ['are', 'is', 'am'], nl: 'Somos amigos.', tag: 'en-be' },
      { t: 'cloze', s: '___ you a student?', a: ['Are'], o: ['Are', 'Is', 'Am'], nl: '¿Eres estudiante?', tag: 'en-be' },
      { t: 'cloze', s: 'They ___ from Colombia.', a: ['are'], h: 'to be', nl: 'Ellos son de Colombia.', tag: 'en-be' },
      { t: 'cloze', s: '___ am Laura.', a: ['I'], o: ['I', 'Me', 'i'], nl: 'Soy Laura.', x: 'En inglés el sujeto siempre se dice, y I siempre va con mayúscula.', tag: 'en-pron' },
      { t: 'mc', q: 'Alguien te dice «Nice to meet you». ¿Qué contestas?', o: ['Nice to meet you too.', "You're welcome.", 'Good night.'], tag: 'en-be' },
      { t: 'mc', q: '¿Cómo se dice «usted es muy amable»?', o: ['You are very kind.', 'Usted is very kind.', 'He are very kind.'], x: 'You sirve para tú, usted y ustedes.', tag: 'en-pron' },
      { t: 'mc', q: '¿Qué dices al irte a dormir?', o: ['Good night.', 'Good evening.', 'Good morning.'], x: 'Good evening es para saludar al llegar en la noche; good night es para despedirte.', tag: 'en-be' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ["I'm not tired.", "I amn't tired.", 'I no am tired.'], tag: 'en-be' },
      { t: 'tr', nl: 'Me llamo Ana.', a: ['My name is Ana.', "I'm Ana.", 'I am Ana.', "My name's Ana."], tag: 'en-pron' },
      { t: 'tr', nl: 'Soy de Panamá.', a: ["I'm from Panama.", 'I am from Panama.'], tag: 'en-be' },
      { t: 'tr', nl: '¿Cómo estás?', a: ['How are you?'], tag: 'en-be' },
      { t: 'tr', nl: 'Ella no es estudiante.', a: ["She isn't a student.", 'She is not a student.', "She's not a student."], tag: 'en-be' },
      { t: 'order', s: 'Nice to meet you, my name is Laura.', nl: 'Mucho gusto, me llamo Laura.', tag: 'en-order' },
      { t: 'match', p: [['hello', 'hola'], ['goodbye', 'adiós'], ['thank you', 'gracias'], ['please', 'por favor'], ['sorry', 'perdón']], tag: 'en-be' }
    ],
    reading: {
      t: 'Hi, I’m Carlos', type: 'Perfil en una app de idiomas',
      p: [
        ["Hi! My name is Carlos Pérez. I'm from Panama City. I'm 24 years old and I'm a student at the university.", '¡Hola! Me llamo Carlos Pérez. Soy de Ciudad de Panamá. Tengo 24 años y soy estudiante en la universidad.'],
        ["I speak Spanish and a little English. I'm not very good at English, but I want to learn.", 'Hablo español y un poco de inglés. No soy muy bueno en inglés, pero quiero aprender.'],
        ["I'm looking for friends from the United States and Canada. Write to me! See you soon.", 'Busco amigos de Estados Unidos y Canadá. ¡Escríbeme! Nos vemos pronto.']
      ],
      gl: [['years old', 'años (de edad)'], ['a little', 'un poco'], ['I want to learn', 'quiero aprender'], ["I'm looking for", 'estoy buscando']],
      q: [
        { t: 'mc', q: 'Where is Carlos from?', o: ['Panama City', 'Canada', 'The United States'] },
        { t: 'mc', q: 'How old is Carlos?', o: ['24', '14', '42'] },
        { t: 'mc', q: 'What is Carlos looking for?', o: ['Friends from the US and Canada', 'A job', 'A teacher'] }
      ]
    },
    say: [['Hello, how are you?', 'Hola, ¿cómo estás?'], ["I'm fine, thanks. And you?", 'Bien, gracias. ¿Y tú?'], ['My name is Laura. Nice to meet you.', 'Me llamo Laura. Mucho gusto.'], ["I'm from Panama.", 'Soy de Panamá.']],
    task: { nl: 'Preséntate en 3 o 4 frases: saluda, di tu nombre, de dónde eres y pregúntale a la otra persona cómo está.', model: "Hi! Good morning. My name is Ana and I'm from Panama. I'm a student. How are you?" },
    scenario: { nl: 'Conoces a Jessica, una nueva compañera de trabajo de Florida.', role: 'You are Jessica, a friendly new coworker from Miami, Florida. It is your first day at the office in Panama City.', goal: 'Saluda a Jessica, preséntate y pregúntale de dónde es.' }
  });

  /* ───────────────────────── A1 · 2 ───────────────────────── */
  U({
    id: 'en-a1-02', level: 'A1', icon: '👨‍👩‍👧', title: 'My family', nl: 'Tu familia',
    goals: ['Hablar de tu familia', 'Usar have y has', 'Usar my, your, his, her'],
    vocab: [
      ['family', 'familia'], ['mother / mom', 'madre / mamá'], ['father / dad', 'padre / papá'], ['parents', 'padres (mamá y papá)'], ['brother', 'hermano'],
      ['sister', 'hermana'], ['son', 'hijo'], ['daughter', 'hija'], ['children / kids', 'hijos / niños'], ['grandmother', 'abuela'], ['grandfather', 'abuelo'],
      ['uncle', 'tío'], ['aunt', 'tía'], ['cousin', 'primo / prima'], ['husband', 'esposo'], ['wife', 'esposa'], ['boyfriend', 'novio'], ['girlfriend', 'novia'],
      ['baby', 'bebé'], ['dog', 'perro'], ['cat', 'gato'], ['old', 'viejo / mayor'], ['young', 'joven'], ['tall', 'alto'], ['short', 'bajo / corto'], ['married', 'casado'], ['single', 'soltero']
    ],
    grammar: [
      { t: 'Have y has: tener', es: 'Have / has',
        html: `<p><b>Have</b> significa <i>tener</i>. Con <b>he</b>, <b>she</b> e <b>it</b> cambia a <b>has</b>. Con todas las demás personas es <b>have</b>.</p>
<p>Ojo: la edad <b>no</b> va con have. En inglés se usa to be: <b>I'm 30</b> o <b>I'm 30 years old</b>, nunca <s>I have 30 years</s>.</p>`,
        table: [['persona', 'have'], ['I / you / we / they', 'have'], ['he / she / it', 'has']],
        sum: 'I have, you have, he has, she has, we have, they have.',
        ex: [['I have two brothers.', 'Tengo dos hermanos.'], ['She has a cat.', 'Ella tiene un gato.'], ["My mom is 55 years old.", 'Mi mamá tiene 55 años.']] },
      { t: 'Posesivos: my, your, his, her', es: 'Possessive adjectives',
        html: `<p>En inglés el posesivo depende de <b>quién tiene</b> algo, no de la cosa. <b>His</b> es <i>de él</i> y <b>her</b> es <i>de ella</i>: <i>his sister</i> (la hermana de él), <i>her brother</i> (el hermano de ella).</p>
<p>Y no cambia en plural: <b>my</b> brother, <b>my</b> brothers (mi hermano, mis hermanos).</p>`,
        table: [['', 'inglés', 'español'], ['I', 'my', 'mi / mis'], ['you', 'your', 'tu / su'], ['he', 'his', 'su (de él)'], ['she', 'her', 'su (de ella)'], ['we', 'our', 'nuestro'], ['they', 'their', 'su (de ellos)']],
        ex: [['This is my sister. Her name is Ana.', 'Esta es mi hermana. Se llama Ana.'], ['Pedro and his wife.', 'Pedro y su esposa.']] },
      { t: 'El plural', es: 'Plural nouns',
        html: `<p>Casi siempre se agrega <b>-s</b>: brother → brother<b>s</b>. Después de s, sh, ch, x se agrega <b>-es</b>: bus → bus<b>es</b>.</p>
<p>Algunos son irregulares: <b>child → children</b>, <b>man → men</b>, <b>woman → women</b>, <b>person → people</b>.</p>`,
        table: [['singular', 'plural'], ['sister', 'sisters'], ['box', 'boxes'], ['child', 'children'], ['person', 'people']],
        ex: [['I have three children.', 'Tengo tres hijos.'], ['They are nice people.', 'Son buena gente.']] }
    ],
    dialogue: {
      t: 'Family photos', place: 'Panama City 🇵🇦',
      lines: [
        ['Emma', 'Is this your family?', '¿Esta es tu familia?'],
        ['José', 'Yes, it is. This is my mom and this is my dad.', 'Sí. Esta es mi mamá y este es mi papá.'],
        ['Emma', 'Your mom looks young! Do you have brothers or sisters?', '¡Tu mamá se ve joven! ¿Tienes hermanos?'],
        ['José', 'I have one sister. Her name is Sofía. She has two kids.', 'Tengo una hermana. Se llama Sofía. Ella tiene dos hijos.'],
        ['Emma', 'So you are an uncle!', '¡Entonces eres tío!'],
        ['José', 'Yes! And this is our dog, Rocky.', '¡Sí! Y este es nuestro perro, Rocky.'],
        ['Emma', 'He is so cute. I have a cat, but no brothers or sisters.', 'Es lindísimo. Yo tengo un gato, pero no tengo hermanos.'],
        ['José', 'What is your cat’s name?', '¿Cómo se llama tu gato?'],
        ['Emma', 'Her name is Luna.', 'Se llama Luna.']
      ],
      q: [
        { t: 'mc', q: 'How many sisters does José have?', o: ['One', 'Two', 'None'] },
        { t: 'mc', q: 'Who is Rocky?', o: ["José's dog", "José's brother", "Emma's cat"] },
        { t: 'mc', q: 'Does Emma have brothers or sisters?', o: ['No, she has a cat', 'Yes, two', 'Yes, one sister'] }
      ]
    },
    culture: { t: 'Mom, dad y las familias en EE. UU.', html: `<p>En Estados Unidos se dice <b>mom</b> y <b>dad</b> (en Inglaterra: <i>mum</i>). Los hijos adultos muchas veces viven lejos de sus padres y se reúnen en fiestas como <b>Thanksgiving</b>.</p>
<p>👪 Ojo con <b>parents</b>: significa <i>padres</i> (mamá y papá), no <i>parientes</i>. Parientes es <b>relatives</b>.</p>` },
    ex: [
      { t: 'cloze', s: 'I ___ two brothers.', a: ['have'], o: ['have', 'has', 'am'], nl: 'Tengo dos hermanos.', tag: 'en-have' },
      { t: 'cloze', s: 'She ___ a cat.', a: ['has'], o: ['has', 'have', 'is'], nl: 'Ella tiene un gato.', tag: 'en-have' },
      { t: 'cloze', s: 'My dad ___ 60 years old.', a: ['is'], o: ['is', 'has', 'have'], nl: 'Mi papá tiene 60 años.', x: 'La edad va con to be: he is 60.', tag: 'en-be' },
      { t: 'cloze', s: 'This is Ana and ___ husband.', a: ['her'], o: ['her', 'his', 'your'], nl: 'Esta es Ana y su esposo.', x: 'Her = de ella.', tag: 'en-poss' },
      { t: 'cloze', s: 'This is Pedro and ___ wife.', a: ['his'], o: ['his', 'her', 'its'], nl: 'Este es Pedro y su esposa.', x: 'His = de él.', tag: 'en-poss' },
      { t: 'cloze', s: 'We love ___ dog.', a: ['our'], o: ['our', 'their', 'we'], nl: 'Queremos mucho a nuestro perro.', tag: 'en-poss' },
      { t: 'cloze', s: 'I have three ___.', a: ['children'], o: ['children', 'childs', 'childrens'], nl: 'Tengo tres hijos.', tag: 'en-plural' },
      { t: 'mc', q: '¿Qué significa «parents»?', o: ['padres (mamá y papá)', 'parientes', 'primos'], tag: 'en-have' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ["I'm 30 years old.", 'I have 30 years.', 'I has 30 years.'], tag: 'en-be' },
      { t: 'mc', q: 'La hermana de tu mamá es tu…', o: ['aunt', 'uncle', 'cousin'], tag: 'en-have' },
      { t: 'tr', nl: 'Tengo una hermana.', a: ['I have a sister.', 'I have one sister.'], tag: 'en-have' },
      { t: 'tr', nl: 'Él tiene dos hijos.', a: ['He has two children.', 'He has two kids.', 'He has two sons.'], tag: 'en-have' },
      { t: 'tr', nl: 'Mi mamá se llama María.', a: ["My mom's name is María.", 'My mother is called María.', "My mother's name is María.", "My mom's name is Maria.", "My mother's name is Maria."], tag: 'en-poss' },
      { t: 'order', s: 'My sister has two kids.', nl: 'Mi hermana tiene dos hijos.', tag: 'en-order' },
      { t: 'match', p: [['brother', 'hermano'], ['daughter', 'hija'], ['grandmother', 'abuela'], ['uncle', 'tío'], ['cousin', 'primo']], tag: 'en-have' }
    ],
    reading: {
      t: 'My big family', type: 'Un correo a una amiga',
      p: [
        ["Hi Kate! I have a big family. My parents live in Santiago de Veraguas. My dad is a farmer and my mom is a nurse.", '¡Hola, Kate! Tengo una familia grande. Mis padres viven en Santiago de Veraguas. Mi papá es agricultor y mi mamá es enfermera.'],
        ["I have two brothers and one sister. My sister Ana is married. Her husband is from Colombia and they have a baby.", 'Tengo dos hermanos y una hermana. Mi hermana Ana está casada. Su esposo es de Colombia y tienen un bebé.'],
        ["On Sundays we eat together at my grandmother's house. It is noisy, but I love it! Tell me about your family.", 'Los domingos comemos juntos en la casa de mi abuela. ¡Hay mucho ruido, pero me encanta! Cuéntame de tu familia.']
      ],
      gl: [['farmer', 'agricultor'], ['nurse', 'enfermera'], ['together', 'juntos'], ['noisy', 'ruidoso']],
      q: [
        { t: 'mc', q: 'Where do the parents live?', o: ['In Santiago de Veraguas', 'In Colombia', 'In Panama City'] },
        { t: 'mc', q: "What is the mother's job?", o: ["She's a nurse", "She's a farmer", "She's a teacher"] },
        { t: 'mc', q: 'Where do they eat on Sundays?', o: ["At the grandmother's house", 'At a restaurant', 'At Ana’s house'] }
      ]
    },
    say: [['This is my family.', 'Esta es mi familia.'], ['I have two brothers and one sister.', 'Tengo dos hermanos y una hermana.'], ['Her name is Sofía.', 'Ella se llama Sofía.']],
    task: { nl: 'Describe a tu familia en 4 frases: cuántos hermanos tienes, cómo se llaman y algo de ellos.', model: "I have a small family. I have one brother. His name is Luis and he is 20. My mom is a teacher and my dad has a store." },
    scenario: { nl: 'Le muestras fotos de tu familia a Tom, un amigo de Chicago.', role: 'You are Tom, a curious friend from Chicago. The learner shows you photos of their family on their phone. Ask simple questions about each person.', goal: 'Muéstrale tu familia a Tom y contesta sus preguntas.' }
  });

  /* ───────────────────────── A1 · 3 ───────────────────────── */
  U({
    id: 'en-a1-03', level: 'A1', icon: '🍔', title: 'Food and drinks', nl: 'Comida y bebida',
    goals: ['Decir qué te gusta y qué no', 'Hacer preguntas con do', 'Pedir algo en un café'],
    vocab: [
      ['water', 'agua'], ['coffee', 'café'], ['tea', 'té'], ['juice', 'jugo'], ['milk', 'leche'], ['soda', 'soda / refresco'], ['beer', 'cerveza'],
      ['bread', 'pan'], ['rice', 'arroz'], ['beans', 'frijoles / porotos'], ['chicken', 'pollo'], ['fish', 'pescado'], ['meat', 'carne'], ['eggs', 'huevos'],
      ['cheese', 'queso'], ['fruit', 'fruta'], ['apple', 'manzana'], ['banana', 'guineo / banano'], ['salad', 'ensalada'], ['soup', 'sopa'], ['breakfast', 'desayuno'],
      ['lunch', 'almuerzo'], ['dinner', 'cena'], ['delicious', 'delicioso / sabroso'], ['hungry', 'con hambre'], ['thirsty', 'con sed'],
      ["I'd like…", 'Quisiera… / Me gustaría…'], ['the check', 'la cuenta']
    ],
    grammar: [
      { t: 'Like y don’t like', es: 'I like / I don’t like',
        html: `<p>En español dices <i>me gusta el café</i>. En inglés la persona va primero: <b>I like coffee</b> (literalmente: <i>yo gusto café</i>).</p>
<p>Para negar usa <b>don't</b> (= do not): <b>I don't like</b> fish. Con he/she: <b>She likes</b> tea, <b>She doesn't like</b> milk.</p>
<p>Y sin artículo cuando hablas en general: <b>I like coffee</b>, no <s>I like the coffee</s>.</p>`,
        table: [['', 'afirmativa', 'negativa'], ['I / you / we / they', 'like', "don't like"], ['he / she', 'likes', "doesn't like"]],
        sum: "I like rice. I don't like fish. She likes tea.",
        ex: [['I like chicken and rice.', 'Me gusta el arroz con pollo.'], ["We don't like beer.", 'No nos gusta la cerveza.'], ['My brother likes soda.', 'A mi hermano le gusta la soda.']] },
      { t: 'Preguntas con do / does', es: 'Do you…?',
        html: `<p>Con verbos normales (no to be) la pregunta empieza con <b>Do</b>, o con <b>Does</b> para he/she: <b>Do you like</b> coffee? <b>Does she like</b> fish?</p>
<p>Respuesta corta: <b>Yes, I do.</b> / <b>No, I don't.</b> — <b>Yes, she does.</b> / <b>No, she doesn't.</b></p>
<p>Ojo: después de does el verbo va sin -s: <i>Does she <b>like</b>…?</i>, nunca <s>Does she likes</s>.</p>`,
        table: [['pregunta', 'respuesta corta'], ['Do you like tea?', "Yes, I do. / No, I don't."], ['Does he like fish?', "Yes, he does. / No, he doesn't."]],
        ex: [['Do you want coffee? — Yes, please.', '¿Quieres café? — Sí, por favor.'], ['Does your sister eat meat?', '¿Tu hermana come carne?']] },
      { t: 'A, an y some', es: 'A / an / some',
        html: `<p><b>A</b> y <b>an</b> significan <i>un / una</i>. Usa <b>an</b> antes de sonido de vocal: <b>an</b> apple, <b>an</b> egg, pero <b>a</b> banana.</p>
<p>Con cosas que no se cuentan (water, rice, coffee) no se usa a/an. Se dice <b>some</b> o nada: <i>some water</i>, <i>rice</i>.</p>`,
        table: [['a', 'an', 'some'], ['a banana', 'an apple', 'some water'], ['a sandwich', 'an egg', 'some rice']],
        ex: [["I'd like an orange juice, please.", 'Quisiera un jugo de naranja, por favor.'], ['Can I have some water?', '¿Me da agua, por favor?']] }
    ],
    dialogue: {
      t: 'At the café', place: 'Casco Viejo, Panama 🇵🇦',
      lines: [
        ['Waiter', 'Hi! What can I get you?', '¡Hola! ¿Qué le traigo?'],
        ['Rosa', "I'd like a coffee, please.", 'Quisiera un café, por favor.'],
        ['Waiter', 'With milk?', '¿Con leche?'],
        ['Rosa', 'Yes, please. And do you have sandwiches?', 'Sí, por favor. ¿Y tienen sándwiches?'],
        ['Waiter', 'Yes, we do. Chicken, cheese or tuna.', 'Sí. De pollo, de queso o de atún.'],
        ['Rosa', "I don't like tuna. A chicken sandwich, please.", 'No me gusta el atún. Un sándwich de pollo, por favor.'],
        ['Waiter', 'Anything else?', '¿Algo más?'],
        ['Rosa', 'An apple juice for my friend. He doesn’t like coffee.', 'Un jugo de manzana para mi amigo. A él no le gusta el café.'],
        ['Waiter', 'Sure. Here you go.', 'Claro. Aquí tiene.'],
        ['Rosa', 'Thank you! Can I have the check, please?', '¡Gracias! ¿Me trae la cuenta, por favor?']
      ],
      q: [
        { t: 'mc', q: 'What does Rosa drink?', o: ['Coffee with milk', 'Apple juice', 'Water'] },
        { t: 'mc', q: 'What sandwich does Rosa order?', o: ['Chicken', 'Tuna', 'Cheese'] },
        { t: 'mc', q: "Why doesn't her friend drink coffee?", o: ["He doesn't like it", "It's late", "He's not thirsty"] }
      ]
    },
    culture: { t: 'Tips y refills', html: `<p>En restaurantes de Estados Unidos se deja una propina (<b>tip</b>) de 15 a 20 %. Muchas veces el refresco o el café tienen <b>free refills</b>: te sirven otra vez sin pagar más.</p>
<p>🍽️ Para pedir la cuenta di <b>Can I have the check, please?</b> En Inglaterra dicen <i>the bill</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'I ___ coffee.', a: ['like'], o: ['like', 'likes', 'liking'], nl: 'Me gusta el café.', tag: 'en-like' },
      { t: 'cloze', s: 'She ___ fish.', a: ['likes'], o: ['likes', 'like', 'is like'], nl: 'A ella le gusta el pescado.', tag: 'en-like' },
      { t: 'cloze', s: "We ___ like beer.", a: ["don't"], o: ["don't", "doesn't", 'not'], nl: 'No nos gusta la cerveza.', tag: 'en-like' },
      { t: 'cloze', s: "He ___ like milk.", a: ["doesn't"], o: ["doesn't", "don't", 'no'], nl: 'A él no le gusta la leche.', tag: 'en-like' },
      { t: 'cloze', s: '___ you like rice?', a: ['Do'], o: ['Do', 'Does', 'Are'], nl: '¿Te gusta el arroz?', tag: 'en-do' },
      { t: 'cloze', s: '___ your sister eat meat?', a: ['Does'], o: ['Does', 'Do', 'Is'], nl: '¿Tu hermana come carne?', tag: 'en-do' },
      { t: 'cloze', s: "I'd like ___ apple.", a: ['an'], o: ['an', 'a', 'some'], nl: 'Quisiera una manzana.', x: 'Antes de sonido de vocal se usa an.', tag: 'en-art' },
      { t: 'cloze', s: 'Can I have ___ water, please?', a: ['some'], o: ['some', 'a', 'an'], nl: '¿Me da agua, por favor?', tag: 'en-art' },
      { t: 'mc', q: '¿Cómo pides la cuenta?', o: ['Can I have the check, please?', 'Can I have the count, please?', 'I want the money.'], tag: 'en-like' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Does she like tea?', 'Does she likes tea?', 'She does like tea?'], x: 'Después de does el verbo va sin -s.', tag: 'en-do' },
      { t: 'tr', nl: 'Me gusta el pollo.', a: ['I like chicken.'], tag: 'en-like' },
      { t: 'tr', nl: 'No me gusta el pescado.', a: ["I don't like fish.", 'I do not like fish.'], tag: 'en-like' },
      { t: 'tr', nl: '¿Te gusta el café?', a: ['Do you like coffee?'], tag: 'en-do' },
      { t: 'tr', nl: 'Quisiera un jugo, por favor.', a: ["I'd like a juice, please.", 'I would like a juice, please.', "I'd like some juice, please."], tag: 'en-art' },
      { t: 'order', s: 'Do you like rice and beans?', nl: '¿Te gusta el arroz con frijoles?', tag: 'en-do' },
      { t: 'match', p: [['bread', 'pan'], ['cheese', 'queso'], ['eggs', 'huevos'], ['juice', 'jugo'], ['lunch', 'almuerzo']], tag: 'en-like' }
    ],
    reading: {
      t: 'Food in Panama', type: 'Un blog de viajes',
      p: [
        ["I love the food in Panama! For breakfast people eat hojaldras, a kind of fried bread, with eggs and cheese.", '¡Me encanta la comida de Panamá! En el desayuno la gente come hojaldras, una especie de pan frito, con huevos y queso.'],
        ["For lunch, my favorite is rice with chicken and beans. And on the coast there is a lot of fresh fish.", 'En el almuerzo, mi favorito es el arroz con pollo y frijoles. Y en la costa hay mucho pescado fresco.'],
        ["I don't like sancocho on hot days, but my friends drink it every Sunday. They say it is good for everything!", 'No me gusta el sancocho en días de calor, pero mis amigos lo toman cada domingo. ¡Dicen que es bueno para todo!']
      ],
      gl: [['fried', 'frito'], ['favorite', 'favorito'], ['fresh', 'fresco'], ['every Sunday', 'cada domingo']],
      q: [
        { t: 'mc', q: 'What are hojaldras?', o: ['A kind of fried bread', 'A soup', 'A drink'] },
        { t: 'mc', q: "What is the writer's favorite lunch?", o: ['Rice with chicken and beans', 'Fresh fish', 'Sancocho'] },
        { t: 'mc', q: 'When do the friends eat sancocho?', o: ['Every Sunday', 'Every morning', 'Never'] }
      ]
    },
    say: [["I'd like a coffee, please.", 'Quisiera un café, por favor.'], ["I don't like fish.", 'No me gusta el pescado.'], ['Can I have the check, please?', '¿Me trae la cuenta, por favor?']],
    task: { nl: 'Escribe 4 frases sobre lo que te gusta comer y beber, y lo que no te gusta.', model: "I like rice and beans. I love coffee in the morning. I don't like beer. My favorite food is fish." },
    scenario: { nl: 'Estás en un café en Nueva York y pides algo para comer y beber.', role: 'You are a friendly waiter in a small café in New York. Take the order, offer drinks and food, and ask "Anything else?".', goal: 'Pide una bebida y algo de comer, y al final pide la cuenta.' }
  });

  /* ───────────────────────── A1 · 4 ───────────────────────── */
  U({
    id: 'en-a1-04', level: 'A1', icon: '⏰', title: 'My day', nl: 'Tu rutina diaria',
    goals: ['Contar tu rutina', 'Usar el presente simple (con -s en he/she)', 'Decir la hora'],
    vocab: [
      ['wake up', 'despertarse'], ['get up', 'levantarse'], ['take a shower', 'bañarse'], ['get dressed', 'vestirse'], ['have breakfast', 'desayunar'],
      ['go to work', 'ir al trabajo'], ['go to school', 'ir a la escuela'], ['work', 'trabajar'], ['study', 'estudiar'], ['come home', 'llegar a casa'],
      ['cook', 'cocinar'], ['watch TV', 'ver televisión'], ['go to bed', 'acostarse'], ['sleep', 'dormir'], ['always', 'siempre'], ['usually', 'normalmente'],
      ['sometimes', 'a veces'], ['never', 'nunca'], ['every day', 'todos los días'], ['in the morning', 'en la mañana'], ['in the afternoon', 'en la tarde'],
      ['at night', 'en la noche'], ['What time is it?', '¿Qué hora es?'], ["It's seven o'clock.", 'Son las siete.'], ['half past', 'y media'], ['early', 'temprano'], ['late', 'tarde']
    ],
    grammar: [
      { t: 'Presente simple', es: 'Present simple',
        html: `<p>El presente simple es para hábitos y rutinas: <i>I work</i>, <i>I study</i>. El verbo casi no cambia, <b>solo con he, she e it lleva -s</b>: she work<b>s</b>, he stud<b>ies</b>.</p>
<p>Es el error más común de los hispanohablantes: <s>She work in a bank</s> ❌ → <b>She works in a bank</b> ✅.</p>
<p>Algunos cambian un poco: go → go<b>es</b>, watch → watch<b>es</b>, study → stud<b>ies</b>, have → <b>has</b>.</p>`,
        table: [['persona', 'work', 'go'], ['I / you / we / they', 'work', 'go'], ['he / she / it', 'works', 'goes']],
        sum: 'I get up at seven. She gets up at six.',
        ex: [['I go to work by bus.', 'Voy al trabajo en bus.'], ['My dad cooks every night.', 'Mi papá cocina todas las noches.'], ['She studies English in the morning.', 'Ella estudia inglés en la mañana.']] },
      { t: 'Adverbios de frecuencia', es: 'Always, usually, never',
        html: `<p><b>Always</b>, <b>usually</b>, <b>sometimes</b> y <b>never</b> van <b>antes</b> del verbo normal: <i>I <b>always</b> have breakfast</i>.</p>
<p>Pero van <b>después</b> de to be: <i>I'm <b>always</b> late</i>.</p>
<p>Ojo: <b>never</b> ya es negativo. Se dice <i>I never eat meat</i>, no <s>I don't never eat</s>.</p>`,
        table: [['', 'ejemplo'], ['always (100%)', 'I always get up early.'], ['usually', 'She usually takes the bus.'], ['sometimes', 'We sometimes cook.'], ['never (0%)', 'He never watches TV.']],
        ex: [['I usually go to bed at eleven.', 'Normalmente me acuesto a las once.'], ["He's never late.", 'Él nunca llega tarde.']] },
      { t: 'La hora', es: 'Telling the time',
        html: `<p><b>What time is it?</b> — <b>It's</b> seven <b>o'clock</b> (las siete en punto). <b>half past</b> seven = siete y media. <b>a quarter to</b> eight = cuarto para las ocho.</p>
<p>Muchas veces se dice solo con números: <i>It's seven thirty</i> (7:30), <i>It's eight fifteen</i> (8:15). Y <b>at</b> para decir a qué hora: <i>at six</i> (a las seis). En EE. UU. se usa <b>a.m.</b> (mañana) y <b>p.m.</b> (tarde y noche).</p>`,
        table: [['hora', 'en inglés'], ['7:00', "seven o'clock"], ['7:30', 'seven thirty / half past seven'], ['7:45', 'seven forty-five / a quarter to eight'], ['a las 6', 'at six']],
        ex: [["It's ten thirty.", 'Son las diez y media.'], ['I start work at nine a.m.', 'Empiezo a trabajar a las nueve de la mañana.']] }
    ],
    dialogue: {
      t: 'A busy day', place: 'Panama City 🇵🇦',
      lines: [
        ['Sam', 'You look tired! What time do you get up?', '¡Te ves cansada! ¿A qué hora te levantas?'],
        ['Yaneth', 'I get up at five thirty every day.', 'Me levanto a las cinco y media todos los días.'],
        ['Sam', "Wow, that's early! Why?", '¡Uy, qué temprano! ¿Por qué?'],
        ['Yaneth', 'I take the metro to work. My job starts at seven.', 'Tomo el metro para ir al trabajo. Mi trabajo empieza a las siete.'],
        ['Sam', 'And what do you do after work?', '¿Y qué haces después del trabajo?'],
        ['Yaneth', 'I usually go to the gym. Then I cook dinner.', 'Normalmente voy al gimnasio. Después cocino la cena.'],
        ['Sam', 'Do you watch TV at night?', '¿Ves televisión en la noche?'],
        ['Yaneth', "Sometimes. But I always go to bed at ten. And you?", 'A veces. Pero siempre me acuesto a las diez. ¿Y tú?'],
        ['Sam', "I work from home. I never get up before eight!", 'Trabajo desde la casa. ¡Nunca me levanto antes de las ocho!']
      ],
      q: [
        { t: 'mc', q: 'What time does Yaneth get up?', o: ['At five thirty', 'At seven', 'At eight'] },
        { t: 'mc', q: 'How does she go to work?', o: ['By metro', 'By car', 'On foot'] },
        { t: 'mc', q: 'Where does Sam work?', o: ['At home', 'At the gym', 'At a school'] }
      ]
    },
    culture: { t: 'a.m., p.m. y el reloj de 12 horas', html: `<p>En Estados Unidos casi nadie dice <i>17:00</i>. Se usa el reloj de 12 horas con <b>a.m.</b> (de medianoche a mediodía) y <b>p.m.</b> (de mediodía a medianoche): <i>5 p.m.</i> = las cinco de la tarde.</p>
<p>⏱️ Y la puntualidad importa: si una reunión es <i>at 9</i>, la gente llega a las 9, no a las 9:20.</p>` },
    ex: [
      { t: 'cloze', s: 'She ___ in a bank.', a: ['works'], o: ['works', 'work', 'working'], nl: 'Ella trabaja en un banco.', tag: 'en-ps' },
      { t: 'cloze', s: 'I ___ up at six.', a: ['get'], o: ['get', 'gets', 'getting'], nl: 'Me levanto a las seis.', tag: 'en-ps' },
      { t: 'cloze', s: 'My brother ___ to school by bus.', a: ['goes'], o: ['goes', 'go', 'gos'], nl: 'Mi hermano va a la escuela en bus.', tag: 'en-ps' },
      { t: 'cloze', s: 'He ___ English every night.', a: ['studies'], o: ['studies', 'studys', 'study'], nl: 'Él estudia inglés todas las noches.', tag: 'en-ps' },
      { t: 'cloze', s: 'We ___ have breakfast at home.', a: ['always'], o: ['always', 'are always', 'always are'], nl: 'Siempre desayunamos en casa.', tag: 'en-ps' },
      { t: 'cloze', s: "It's seven ___.", a: ["o'clock"], o: ["o'clock", 'hours', 'clock'], nl: 'Son las siete en punto.', tag: 'en-time' },
      { t: 'cloze', s: 'I start work ___ nine.', a: ['at'], o: ['at', 'in', 'on'], nl: 'Empiezo a trabajar a las nueve.', tag: 'en-time' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['She never eats meat.', "She doesn't never eat meat.", 'She never eat meat.'], tag: 'en-ps' },
      { t: 'mc', q: '7:30 es…', o: ['seven thirty', 'seven three', 'half seven past'], tag: 'en-time' },
      { t: 'mc', q: '«Me baño» en inglés es…', o: ['I take a shower.', 'I take a bath room.', 'I shower me.'], tag: 'en-ps' },
      { t: 'tr', nl: 'Me levanto a las siete.', a: ['I get up at seven.', "I get up at seven o'clock.", 'I wake up at seven.'], tag: 'en-ps' },
      { t: 'tr', nl: 'Ella trabaja en un hospital.', a: ['She works in a hospital.', 'She works at a hospital.'], tag: 'en-ps' },
      { t: 'tr', nl: 'Nunca veo televisión.', a: ['I never watch TV.', 'I never watch television.'], tag: 'en-ps' },
      { t: 'tr', nl: '¿Qué hora es?', a: ['What time is it?'], tag: 'en-time' },
      { t: 'order', s: 'I usually go to bed at eleven.', nl: 'Normalmente me acuesto a las once.', tag: 'en-order' },
      { t: 'match', p: [['wake up', 'despertarse'], ['cook', 'cocinar'], ['sleep', 'dormir'], ['always', 'siempre'], ['never', 'nunca']], tag: 'en-ps' }
    ],
    reading: {
      t: 'A day in the life of a nurse', type: 'Artículo de revista',
      p: [
        ["Marisol is a nurse in Panama City. She gets up at four thirty, takes a shower and has a quick breakfast: coffee and bread.", 'Marisol es enfermera en Ciudad de Panamá. Se levanta a las cuatro y media, se baña y desayuna rápido: café y pan.'],
        ["She starts work at six. She works twelve hours, three days a week. She always talks with her patients and she never feels bored.", 'Empieza a trabajar a las seis. Trabaja doce horas, tres días a la semana. Siempre habla con sus pacientes y nunca se aburre.'],
        ["On her free days she sleeps late, visits her mother and goes to the beach. “I love my job,” she says, “but I love my free days too!”", 'En sus días libres duerme hasta tarde, visita a su mamá y va a la playa. «Me encanta mi trabajo», dice, «¡pero también me encantan mis días libres!»']
      ],
      gl: [['quick', 'rápido'], ['patients', 'pacientes'], ['bored', 'aburrido'], ['free days', 'días libres']],
      q: [
        { t: 'mc', q: 'What time does Marisol get up?', o: ['At four thirty', 'At six', 'At twelve'] },
        { t: 'mc', q: 'How many days a week does she work?', o: ['Three', 'Five', 'Twelve'] },
        { t: 'mc', q: 'What does she do on her free days?', o: ['She goes to the beach', 'She works at home', 'She studies'] }
      ]
    },
    say: [['I get up at six every day.', 'Me levanto a las seis todos los días.'], ['She works in a bank.', 'Ella trabaja en un banco.'], ['What time is it?', '¿Qué hora es?']],
    task: { nl: 'Describe un día normal tuyo en 5 frases: a qué hora te levantas, cómo vas al trabajo o a la escuela y qué haces en la noche.', model: "I get up at six. I take a shower and have coffee. I go to work by bus. I come home at five. I usually cook and watch TV." },
    scenario: { nl: 'Una compañera de Boston te pregunta por tu rutina.', role: 'You are Megan, a coworker from Boston. Ask the learner about their daily routine: what time they get up, how they go to work, what they do in the evening.', goal: 'Cuéntale a Megan cómo es un día normal para ti.' }
  });

  /* ───────────────────────── A1 · 5 ───────────────────────── */
  U({
    id: 'en-a1-05', level: 'A1', icon: '🏙️', title: 'In the city', nl: 'En la ciudad',
    goals: ['Decir qué hay en un lugar (there is / there are)', 'Preguntar y dar direcciones', 'Usar preposiciones de lugar'],
    vocab: [
      ['street', 'calle'], ['avenue', 'avenida'], ['corner', 'esquina'], ['bank', 'banco'], ['supermarket', 'supermercado'], ['pharmacy / drugstore', 'farmacia'],
      ['hospital', 'hospital'], ['restaurant', 'restaurante'], ['hotel', 'hotel'], ['park', 'parque'], ['beach', 'playa'], ['church', 'iglesia'], ['museum', 'museo'],
      ['bus stop', 'parada de bus'], ['metro station', 'estación del metro'], ['restroom', 'baño (en un lugar público)'], ['near', 'cerca de'], ['far', 'lejos'],
      ['next to', 'al lado de'], ['across from', 'frente a'], ['between', 'entre'], ['turn left', 'dobla a la izquierda'], ['turn right', 'dobla a la derecha'],
      ['go straight', 'sigue derecho'], ['Excuse me, where is…?', 'Disculpe, ¿dónde está…?'], ['downtown', 'el centro']
    ],
    grammar: [
      { t: 'There is / there are: hay', es: 'There is / there are',
        html: `<p>Para decir <i>hay</i> en inglés usa <b>there is</b> con una cosa y <b>there are</b> con varias.</p>
<p>Pregunta: <b>Is there</b> a bank near here? <b>Are there</b> any restaurants? Negativa: <b>There isn't</b> a hospital. <b>There aren't</b> any hotels.</p>
<p>Ojo: no se dice <s>Have a bank here</s>. Siempre <b>There is</b> a bank here.</p>`,
        table: [['', 'singular', 'plural'], ['afirmativa', "There is (there's) a park.", 'There are two parks.'], ['pregunta', 'Is there a park?', 'Are there any parks?'], ['negativa', "There isn't a park.", "There aren't any parks."]],
        sum: "There is a bank on the corner. There are many restaurants downtown.",
        ex: [["There's a pharmacy next to the bank.", 'Hay una farmacia al lado del banco.'], ['Are there any hotels near the beach?', '¿Hay hoteles cerca de la playa?']] },
      { t: 'Preposiciones de lugar', es: 'Prepositions of place',
        html: `<p><b>next to</b> = al lado de · <b>across from</b> = frente a · <b>between</b> = entre · <b>near</b> = cerca de · <b>on the corner</b> = en la esquina.</p>
<p>Con calles se usa <b>on</b>: <i>The bank is <b>on</b> Main Street</i>. Con ciudades y países se usa <b>in</b>: <i><b>in</b> Panama City</i>.</p>`,
        table: [['inglés', 'español'], ['next to the park', 'al lado del parque'], ['across from the church', 'frente a la iglesia'], ['between the bank and the hotel', 'entre el banco y el hotel'], ['on 50th Street', 'en la calle 50']],
        ex: [['The museum is across from the park.', 'El museo está frente al parque.'], ['The hotel is on Balboa Avenue.', 'El hotel está en la avenida Balboa.']] },
      { t: 'Dar direcciones: el imperativo', es: 'Giving directions',
        html: `<p>Para dar instrucciones se usa el verbo solo, sin sujeto: <b>Turn left.</b> <b>Go straight.</b> <b>Take</b> the first street on the right.</p>
<p>Para ser amable, agrega <b>please</b> o empieza con <b>Excuse me</b> al preguntar: <i>Excuse me, how do I get to the metro station?</i></p>`,
        table: [['instrucción', 'significado'], ['Go straight.', 'Sigue derecho.'], ['Turn left / right.', 'Dobla a la izquierda / derecha.'], ['Take the second street.', 'Toma la segunda calle.'], ["It's on your left.", 'Está a tu izquierda.']],
        ex: [["Go straight and turn right. It's on your left.", 'Sigue derecho y dobla a la derecha. Está a tu izquierda.'], ['Excuse me, is there a bus stop near here?', 'Disculpe, ¿hay una parada de bus por aquí?']] }
    ],
    dialogue: {
      t: 'Lost downtown', place: 'Miami, Florida 🇺🇸',
      lines: [
        ['Diana', 'Excuse me. Is there a pharmacy near here?', 'Disculpe. ¿Hay una farmacia por aquí?'],
        ['Man', 'Yes, there is. It’s on Flagler Street.', 'Sí, hay una. Está en la calle Flagler.'],
        ['Diana', 'Is it far?', '¿Está lejos?'],
        ['Man', "No, it's very near. Go straight and turn left at the corner.", 'No, está muy cerca. Siga derecho y doble a la izquierda en la esquina.'],
        ['Diana', 'Turn left at the corner. OK.', 'Doblar a la izquierda en la esquina. Bien.'],
        ['Man', "The pharmacy is next to a big bank, across from the park.", 'La farmacia está al lado de un banco grande, frente al parque.'],
        ['Diana', 'Thank you! And are there any restaurants there?', '¡Gracias! ¿Y hay restaurantes por ahí?'],
        ['Man', 'Yes, there are a lot. There’s a great Cuban restaurant on the corner.', 'Sí, hay muchos. Hay un restaurante cubano buenísimo en la esquina.'],
        ['Diana', 'Perfect. Thanks a lot!', '¡Perfecto! ¡Muchas gracias!']
      ],
      q: [
        { t: 'mc', q: 'What is Diana looking for?', o: ['A pharmacy', 'A bank', 'A park'] },
        { t: 'mc', q: 'Where is the pharmacy?', o: ['Next to a bank, across from the park', 'Next to the park', 'Far from downtown'] },
        { t: 'mc', q: 'What restaurant is on the corner?', o: ['A Cuban restaurant', 'A Mexican restaurant', 'A pizza place'] }
      ]
    },
    culture: { t: 'Blocks y números de calles', html: `<p>Muchas ciudades de Estados Unidos están hechas en cuadrícula. Para dar direcciones la gente cuenta <b>blocks</b> (cuadras): <i>Go two blocks and turn right</i>.</p>
<p>🗺️ Las calles muchas veces tienen números: <i>5th Avenue</i>, <i>42nd Street</i>. Y la dirección se escribe con el número primero: <i>350 Main Street</i>.</p>` },
    ex: [
      { t: 'cloze', s: '___ a bank on the corner.', a: ["There's"], o: ["There's", "There're", 'Have'], nl: 'Hay un banco en la esquina.', tag: 'en-there' },
      { t: 'cloze', s: 'There ___ two parks near my house.', a: ['are'], o: ['are', 'is', 'have'], nl: 'Hay dos parques cerca de mi casa.', tag: 'en-there' },
      { t: 'cloze', s: '___ there a pharmacy near here?', a: ['Is'], o: ['Is', 'Are', 'Do'], nl: '¿Hay una farmacia por aquí?', tag: 'en-there' },
      { t: 'cloze', s: "There ___ any hotels in my town.", a: ["aren't"], o: ["aren't", "isn't", "don't"], nl: 'No hay hoteles en mi pueblo.', tag: 'en-there' },
      { t: 'cloze', s: 'The bank is ___ to the supermarket.', a: ['next'], o: ['next', 'near of', 'beside of'], nl: 'El banco está al lado del supermercado.', tag: 'en-prep' },
      { t: 'cloze', s: 'The church is ___ from the park.', a: ['across'], o: ['across', 'front', 'in front'], nl: 'La iglesia está frente al parque.', tag: 'en-prep' },
      { t: 'cloze', s: 'The museum is ___ the bank and the hotel.', a: ['between'], o: ['between', 'among', 'next'], nl: 'El museo está entre el banco y el hotel.', tag: 'en-prep' },
      { t: 'mc', q: '«Dobla a la derecha» es…', o: ['Turn right.', 'Turn left.', 'Go straight.'], tag: 'en-imp' },
      { t: 'mc', q: '¿Cómo preguntas por un baño en un restaurante de EE. UU.?', o: ['Where is the restroom?', 'Where is the bathroom of the house?', 'Where is the WC room?'], tag: 'en-q' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['There is a bank here.', 'Have a bank here.', 'It has a bank here.'], x: 'Hay = there is / there are.', tag: 'en-there' },
      { t: 'tr', nl: 'Hay un parque cerca de mi casa.', a: ["There's a park near my house.", 'There is a park near my house.'], tag: 'en-there' },
      { t: 'tr', nl: 'Disculpe, ¿dónde está la estación del metro?', a: ['Excuse me, where is the metro station?', "Excuse me, where's the metro station?", 'Excuse me, where is the subway station?'], tag: 'en-q' },
      { t: 'tr', nl: 'Sigue derecho y dobla a la izquierda.', a: ['Go straight and turn left.', 'Go straight ahead and turn left.'], tag: 'en-imp' },
      { t: 'order', s: 'The pharmacy is next to the bank.', nl: 'La farmacia está al lado del banco.', tag: 'en-prep' },
      { t: 'match', p: [['street', 'calle'], ['corner', 'esquina'], ['beach', 'playa'], ['near', 'cerca de'], ['far', 'lejos']], tag: 'en-prep' }
    ],
    reading: {
      t: 'Welcome to Casco Viejo', type: 'Folleto turístico',
      p: [
        ["Casco Viejo is the old part of Panama City. There are beautiful churches, small squares and old houses with colorful balconies.", 'El Casco Viejo es la parte antigua de Ciudad de Panamá. Hay iglesias bonitas, plazas pequeñas y casas antiguas con balcones de colores.'],
        ["There is a museum about the Panama Canal next to the Cathedral. Across from the museum there are many cafés and restaurants.", 'Hay un museo sobre el Canal de Panamá al lado de la Catedral. Frente al museo hay muchos cafés y restaurantes.'],
        ["The best way to see Casco Viejo is on foot. From the metro station, take a taxi. It isn't far: only ten minutes!", 'La mejor forma de ver el Casco Viejo es a pie. Desde la estación del metro, toma un taxi. No está lejos: ¡solo diez minutos!']
      ],
      gl: [['old', 'antiguo'], ['squares', 'plazas'], ['colorful', 'de colores'], ['on foot', 'a pie']],
      q: [
        { t: 'mc', q: 'What is Casco Viejo?', o: ['The old part of Panama City', 'A new mall', 'A beach'] },
        { t: 'mc', q: 'Where is the Canal museum?', o: ['Next to the Cathedral', 'Across from the metro', 'Far from the city'] },
        { t: 'mc', q: 'What is the best way to see Casco Viejo?', o: ['On foot', 'By car', 'By bus'] }
      ]
    },
    say: [['Excuse me, is there a bank near here?', 'Disculpe, ¿hay un banco por aquí?'], ['Go straight and turn left.', 'Sigue derecho y dobla a la izquierda.'], ['The hotel is across from the park.', 'El hotel está frente al parque.']],
    task: { nl: 'Describe tu barrio en 4 frases: qué hay, qué no hay y dónde están las cosas.', model: "I live in El Cangrejo. There are many restaurants and there's a big park. There isn't a beach. The supermarket is next to my building." },
    scenario: { nl: 'Estás de turista en Nueva York y le preguntas a alguien cómo llegar a un lugar.', role: 'You are a helpful New Yorker on the street in Manhattan. The learner is a tourist and asks for directions. Give simple directions with blocks, left and right.', goal: 'Pregunta cómo llegar a un museo o una estación del metro y repite las direcciones.' }
  });
})(window.SPT);
