/* Neerlandés para hispanohablantes — nivel A1 (neerlandés de los Países Bajos, explicaciones en español latinoamericano).
   Velden zoals in de Spaanse cursus: in vocab/zinnen is [0] de doeltaal (Nederlands) en [1] de uitlegtaal (Spaans).
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzes, eerste = juist), tr (ES→NL), order, match. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('nl-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'nl-zijn': 'el verbo zijn (ben, bent, is)', 'nl-pron': 'pronombres (ik, jij, u…)', 'nl-dehet': 'de o het', 'nl-hebben': 'hebben (tener)',
    'nl-bez': 'mijn, jouw, zijn, haar…', 'nl-plural': 'plural (-en, -s)', 'nl-pres': 'presente (ik werk, jij werkt)', 'nl-q': 'preguntas (wat, waar, hoe…)',
    'nl-inv': 'inversión (verbo en 2.º lugar)', 'nl-tijd': 'la hora', 'nl-er': 'er is / er zijn', 'nl-prep': 'preposiciones de lugar',
    'nl-neg': 'niet y geen', 'nl-graag': 'graag y willen', 'nl-sep': 'verbos separables', 'nl-order': 'orden de las palabras'
  });

  /* ───────────────────────── A1 · 1 ───────────────────────── */
  U({
    id: 'nl-a1-01', level: 'A1', icon: '👋', title: 'Hallo! Hoe heet je?', nl: 'Saludar y presentarte',
    goals: ['Saludar y despedirte', 'Decir tu nombre y de dónde eres', 'Usar ik ben, jij bent, hij is'],
    vocab: [
      ['hallo', 'hola'], ['hoi', 'hola (informal)'], ['goedemorgen', 'buenos días'], ['goedemiddag', 'buenas tardes'], ['goedenavond', 'buenas noches (al llegar)'],
      ['welterusten', 'que duermas bien'], ['dag', 'adiós / hola (corto)'], ['doei', 'chao'], ['tot ziens', 'hasta luego'], ['tot straks', 'nos vemos al rato'],
      ['Hoe gaat het?', '¿Cómo estás?'], ['Goed, dank je.', 'Bien, gracias.'], ['En met jou?', '¿Y tú?'], ['Hoe heet je?', '¿Cómo te llamas?'],
      ['Ik heet…', 'Me llamo…'], ['Leuk je te ontmoeten.', 'Mucho gusto.'], ['Waar kom je vandaan?', '¿De dónde eres?'], ['Ik kom uit Panama.', 'Soy de Panamá.'],
      ['dank je wel', 'muchas gracias'], ['alsjeblieft', 'por favor / aquí tienes'], ['sorry', 'perdón'], ['pardon', 'disculpe / ¿cómo?'], ['ja', 'sí'], ['nee', 'no'],
      ['de vriend', 'el amigo'], ['de vriendin', 'la amiga'], ['de docent', 'el profesor / la profesora'], ['de student', 'el / la estudiante']
    ],
    grammar: [
      { t: 'El verbo zijn: ser y estar', es: 'Het werkwoord zijn',
        html: `<p><b>Zijn</b> significa <i>ser</i> y también <i>estar</i>. Es irregular, como en español, así que hay que aprenderlo de memoria.</p>
<p>En neerlandés el sujeto <b>siempre</b> se dice: <b>Ik ben</b> Ana, nunca <s>Ben Ana</s>.</p>
<p>Ojo con <b>jij bent</b>: en una pregunta, cuando jij va después del verbo, se pierde la -t: <b>Ben jij</b> moe? (¿Estás cansado?).</p>`,
        table: [['', 'zijn'], ['ik (yo)', 'ben'], ['jij / je (tú)', 'bent'], ['u (usted)', 'bent'], ['hij / zij / het (él / ella / eso)', 'is'], ['wij / we (nosotros)', 'zijn'], ['jullie (ustedes)', 'zijn'], ['zij / ze (ellos)', 'zijn']],
        sum: 'Ik ben, jij bent, hij is, wij zijn, jullie zijn, zij zijn.',
        ex: [['Ik ben Ana. Ik kom uit Panama.', 'Soy Ana. Soy de Panamá.'], ['Zij is docent.', 'Ella es profesora.'], ['Wij zijn vrienden.', 'Somos amigos.']] },
      { t: 'Jij, u y jullie', es: 'Jij, u en jullie',
        html: `<p><b>Jij</b> (o <b>je</b>) es <i>tú</i>. <b>U</b> es <i>usted</i>: se usa con personas mayores, en una tienda o en una oficina. En los Países Bajos se tutea mucho, también a los jefes.</p>
<p><b>Jullie</b> es <i>ustedes</i> para un grupo de amigos o familia. Con un grupo formal también se puede usar <b>u</b>.</p>`,
        table: [['español', 'neerlandés'], ['tú eres', 'jij bent'], ['usted es', 'u bent'], ['ustedes son', 'jullie zijn']],
        ex: [['Bent u mevrouw De Vries?', '¿Es usted la señora De Vries?'], ['Jullie zijn welkom!', '¡Ustedes son bienvenidos!']] },
      { t: 'Heten y komen: me llamo y soy de', es: 'Ik heet… / Ik kom uit…',
        html: `<p>Para el nombre se usa <b>heten</b> (llamarse): <b>Ik heet</b> Laura. <b>Hoe heet je?</b></p>
<p>Para decir de dónde eres se usa <b>komen uit</b>: <b>Ik kom uit</b> Panama. <b>Waar kom je vandaan?</b></p>
<p>En el presente la forma de <b>ik</b> es la raíz del verbo (heet, kom), y con <b>jij</b>, <b>u</b> y <b>hij/zij</b> se agrega <b>-t</b> (heet ya termina en t).</p>`,
        table: [['', 'heten', 'komen'], ['ik', 'heet', 'kom'], ['jij / u', 'heet', 'komt'], ['hij / zij', 'heet', 'komt'], ['wij / jullie / zij', 'heten', 'komen']],
        ex: [['Hoe heet u? — Ik heet Carlos.', '¿Cómo se llama usted? — Me llamo Carlos.'], ['Zij komt uit Colombia.', 'Ella es de Colombia.']] }
    ],
    dialogue: {
      t: 'De eerste les', place: 'Ámsterdam 🇳🇱',
      lines: [
        ['Sanne', 'Hoi! Goedemorgen.', '¡Hola! Buenos días.'],
        ['Diego', 'Goedemorgen. Hoe gaat het?', 'Buenos días. ¿Cómo estás?'],
        ['Sanne', 'Goed, dank je. En met jou?', 'Bien, gracias. ¿Y tú?'],
        ['Diego', 'Ook goed. Ik heet Diego. Hoe heet jij?', 'También bien. Me llamo Diego. ¿Cómo te llamas?'],
        ['Sanne', 'Ik ben Sanne. Leuk je te ontmoeten.', 'Soy Sanne. Mucho gusto.'],
        ['Diego', 'Leuk je te ontmoeten. Ben jij de docent?', 'Mucho gusto. ¿Tú eres la profesora?'],
        ['Sanne', 'Nee, ik ben student. Waar kom je vandaan?', 'No, soy estudiante. ¿De dónde eres?'],
        ['Diego', 'Ik kom uit Panama. En jij?', 'Soy de Panamá. ¿Y tú?'],
        ['Sanne', 'Ik kom uit Utrecht. Welkom in Nederland!', 'Soy de Utrecht. ¡Bienvenido a los Países Bajos!'],
        ['Diego', 'Dank je wel! Tot straks.', '¡Muchas gracias! Nos vemos al rato.']
      ],
      q: [
        { t: 'mc', q: 'Waar komt Diego vandaan?', o: ['Uit Panama', 'Uit Utrecht', 'Uit Amsterdam'] },
        { t: 'mc', q: 'Is Sanne de docent?', o: ['Nee, ze is student', 'Ja, ze is docent', 'Nee, ze is Diego'] },
        { t: 'mc', q: 'Hoe gaat het met Sanne?', o: ['Goed', 'Slecht', 'Ze is moe'] }
      ]
    },
    culture: { t: 'Tres besos y mucha puntualidad', html: `<p>Entre amigos y familia, los neerlandeses se saludan con <b>tres besos</b> en la mejilla (derecha, izquierda, derecha) en un cumpleaños o una fiesta. Al conocer a alguien se da la mano y se dice el nombre: <i>«Sanne.» — «Diego.»</i></p>
<p>🕒 La puntualidad es muy importante. Si quedas a las ocho, llega a las ocho. Y muchas veces la gente usa una agenda, también para ver a sus amigos.</p>` },
    ex: [
      { t: 'cloze', s: 'Ik ___ Ana.', a: ['ben'], o: ['ben', 'bent', 'is'], nl: 'Soy Ana.', tag: 'nl-zijn' },
      { t: 'cloze', s: 'Zij ___ docent.', a: ['is'], o: ['is', 'ben', 'zijn'], nl: 'Ella es profesora.', tag: 'nl-zijn' },
      { t: 'cloze', s: 'Wij ___ vrienden.', a: ['zijn'], o: ['zijn', 'is', 'bent'], nl: 'Somos amigos.', tag: 'nl-zijn' },
      { t: 'cloze', s: 'Jij ___ student.', a: ['bent'], o: ['bent', 'ben', 'is'], nl: 'Tú eres estudiante.', tag: 'nl-zijn' },
      { t: 'cloze', s: '___ jij moe?', a: ['Ben'], o: ['Ben', 'Bent', 'Is'], nl: '¿Estás cansado?', x: 'En una pregunta con jij después del verbo, se pierde la -t.', tag: 'nl-zijn' },
      { t: 'cloze', s: 'Ik ___ uit Panama.', a: ['kom'], o: ['kom', 'komt', 'komen'], nl: 'Soy de Panamá.', tag: 'nl-pres' },
      { t: 'cloze', s: 'Hoe ___ je?', a: ['heet'], o: ['heet', 'ben', 'kom'], nl: '¿Cómo te llamas?', tag: 'nl-q' },
      { t: 'mc', q: '¿Cómo le dices «usted es» a una señora mayor?', o: ['u bent', 'jij bent', 'jullie zijn'], tag: 'nl-pron' },
      { t: 'mc', q: 'Alguien dice «Leuk je te ontmoeten». ¿Qué significa?', o: ['Mucho gusto.', 'Hasta luego.', 'De nada.'], tag: 'nl-pron' },
      { t: 'mc', q: '«Ustedes son» (a un grupo de amigos) es…', o: ['jullie zijn', 'u bent', 'zij is'], tag: 'nl-pron' },
      { t: 'tr', nl: 'Me llamo Ana.', a: ['Ik heet Ana.', 'Ik ben Ana.', 'Mijn naam is Ana.'], tag: 'nl-pres' },
      { t: 'tr', nl: 'Soy de Panamá.', a: ['Ik kom uit Panama.'], tag: 'nl-pres' },
      { t: 'tr', nl: '¿Cómo estás?', a: ['Hoe gaat het?', 'Hoe gaat het met jou?', 'Hoe gaat het met je?'], tag: 'nl-q' },
      { t: 'tr', nl: 'Ella es estudiante.', a: ['Zij is student.', 'Ze is student.', 'Zij is studente.', 'Ze is studente.'], tag: 'nl-zijn' },
      { t: 'order', s: 'Ik heet Diego en ik kom uit Panama.', nl: 'Me llamo Diego y soy de Panamá.', tag: 'nl-order' },
      { t: 'match', p: [['hallo', 'hola'], ['tot ziens', 'hasta luego'], ['dank je wel', 'muchas gracias'], ['ja', 'sí'], ['nee', 'no']], tag: 'nl-pron' }
    ],
    reading: {
      t: 'Hallo, ik ben Carla', type: 'Perfil en una app de idiomas',
      p: [
        ['Hallo! Ik heet Carla Méndez. Ik kom uit Panama-Stad, maar ik woon nu in Rotterdam. Ik ben 27 jaar.', '¡Hola! Me llamo Carla Méndez. Soy de Ciudad de Panamá, pero ahora vivo en Róterdam. Tengo 27 años.'],
        ['Ik ben verpleegkundige. Ik spreek Spaans en Engels, en een beetje Nederlands.', 'Soy enfermera. Hablo español e inglés, y un poco de neerlandés.'],
        ['Ik zoek een taalmaatje: jij leert Spaans en ik leer Nederlands. Stuur me een bericht! Tot ziens.', 'Busco un compañero de idiomas: tú aprendes español y yo aprendo neerlandés. ¡Mándame un mensaje! Hasta luego.']
      ],
      gl: [['ik woon', 'vivo'], ['een beetje', 'un poco'], ['het taalmaatje', 'compañero de idiomas'], ['het bericht', 'mensaje']],
      q: [
        { t: 'mc', q: 'Waar woont Carla nu?', o: ['In Rotterdam', 'In Panama-Stad', 'In Amsterdam'] },
        { t: 'mc', q: 'Hoe oud is Carla?', o: ['27 jaar', '17 jaar', '37 jaar'] },
        { t: 'mc', q: 'Wat zoekt Carla?', o: ['Een taalmaatje', 'Een baan', 'Een huis'] }
      ]
    },
    say: [['Hallo, hoe gaat het?', 'Hola, ¿cómo estás?'], ['Goed, dank je. En met jou?', 'Bien, gracias. ¿Y tú?'], ['Ik heet Laura. Leuk je te ontmoeten.', 'Me llamo Laura. Mucho gusto.'], ['Ik kom uit Panama.', 'Soy de Panamá.']],
    task: { nl: 'Preséntate en 3 o 4 frases: saluda, di cómo te llamas, de dónde eres y pregúntale a la otra persona cómo está.', model: 'Hallo! Goedemorgen. Ik heet Ana en ik kom uit Panama. Ik ben student. Hoe gaat het met jou?' },
    scenario: { nl: 'Conoces a Lotte, una nueva compañera de clase de Utrecht.', role: 'Je bent Lotte, een vriendelijke studente uit Utrecht. Het is de eerste dag van een cursus. Spreek heel eenvoudig Nederlands.', goal: 'Saluda a Lotte, preséntate y pregúntale de dónde es.' }
  });

  /* ───────────────────────── A1 · 2 ───────────────────────── */
  U({
    id: 'nl-a1-02', level: 'A1', icon: '👨‍👩‍👧', title: 'Mijn familie', nl: 'Tu familia',
    goals: ['Hablar de tu familia', 'Usar hebben (tener)', 'Saber cuándo es de y cuándo het', 'Usar mijn, jouw, zijn, haar'],
    vocab: [
      ['de familie', 'la familia'], ['de moeder', 'la madre'], ['mama', 'mamá'], ['de vader', 'el padre'], ['papa', 'papá'], ['de ouders', 'los padres (mamá y papá)'],
      ['de broer', 'el hermano'], ['de zus', 'la hermana'], ['de zoon', 'el hijo'], ['de dochter', 'la hija'], ['het kind', 'el niño / el hijo'], ['de kinderen', 'los niños / los hijos'],
      ['de oma', 'la abuela'], ['de opa', 'el abuelo'], ['de oom', 'el tío'], ['de tante', 'la tía'], ['de neef', 'el primo / el sobrino'], ['de nicht', 'la prima / la sobrina'],
      ['de man', 'el esposo / el hombre'], ['de vrouw', 'la esposa / la mujer'], ['de baby', 'el bebé'], ['de hond', 'el perro'], ['de kat', 'el gato'],
      ['oud', 'viejo / mayor'], ['jong', 'joven'], ['lang', 'alto'], ['getrouwd', 'casado'], ['het huis', 'la casa']
    ],
    grammar: [
      { t: 'Hebben: tener', es: 'Het werkwoord hebben',
        html: `<p><b>Hebben</b> significa <i>tener</i>. Es irregular: con <b>jij</b> y <b>u</b> es <b>hebt</b>, y con <b>hij/zij</b> es <b>heeft</b>.</p>
<p>La edad <b>no</b> va con hebben. Se usa zijn: <b>Ik ben 30 (jaar)</b> = tengo 30 años.</p>`,
        table: [['', 'hebben'], ['ik', 'heb'], ['jij / u', 'hebt'], ['hij / zij', 'heeft'], ['wij / jullie / zij', 'hebben']],
        sum: 'Ik heb, jij hebt, hij heeft, wij hebben.',
        ex: [['Ik heb twee broers.', 'Tengo dos hermanos.'], ['Zij heeft een kat.', 'Ella tiene un gato.'], ['Mijn moeder is 55 jaar.', 'Mi mamá tiene 55 años.']] },
      { t: 'De o het: los dos artículos', es: 'De en het',
        html: `<p>El neerlandés tiene dos artículos para <i>el / la</i>: <b>de</b> y <b>het</b>. Unas dos terceras partes de las palabras van con <b>de</b>. No hay una regla fácil, así que aprende cada palabra con su artículo: <i>de vader</i>, <i>het kind</i>.</p>
<p>Algunas pistas: las personas casi siempre van con <b>de</b>. Los diminutivos (-je) siempre van con <b>het</b>: <i>het huisje</i>. Y <b>todo plural</b> va con <b>de</b>: <i>het kind → de kinderen</i>.</p>
<p><b>Een</b> es <i>un / una</i> y sirve para de y het: <i>een broer</i>, <i>een huis</i>.</p>`,
        table: [['de', 'het', 'plural'], ['de vader', 'het kind', 'de kinderen'], ['de hond', 'het huis', 'de huizen'], ['de zus', 'het meisje', 'de meisjes']],
        ex: [['Het kind is jong.', 'El niño es joven.'], ['De kinderen zijn thuis.', 'Los niños están en casa.']] },
      { t: 'Posesivos: mijn, jouw, zijn, haar', es: 'Bezittelijke voornaamwoorden',
        html: `<p>El posesivo depende de <b>quién tiene</b> algo: <b>zijn</b> = de él, <b>haar</b> = de ella. <i>Zijn zus</i> (la hermana de él), <i>haar broer</i> (el hermano de ella).</p>
<p>No cambia en plural: <b>mijn</b> broer, <b>mijn</b> broers. Al hablar se usa mucho la forma corta <b>m'n</b> y <b>je</b> en lugar de jouw.</p>`,
        table: [['', 'neerlandés', 'español'], ['ik', 'mijn', 'mi / mis'], ['jij', 'jouw / je', 'tu / tus'], ['u', 'uw', 'su (de usted)'], ['hij', 'zijn', 'su (de él)'], ['zij', 'haar', 'su (de ella)'], ['wij', 'ons / onze', 'nuestro'], ['jullie', 'jullie', 'su (de ustedes)'], ['zij (plural)', 'hun', 'su (de ellos)']],
        ex: [['Dit is mijn zus. Haar naam is Ana.', 'Esta es mi hermana. Se llama Ana.'], ['Pedro en zijn vrouw.', 'Pedro y su esposa.']] }
    ],
    dialogue: {
      t: 'Foto’s van de familie', place: 'Utrecht 🇳🇱',
      lines: [
        ['Emma', 'Is dit jouw familie?', '¿Esta es tu familia?'],
        ['José', 'Ja. Dit is mijn moeder en dit is mijn vader.', 'Sí. Esta es mi mamá y este es mi papá.'],
        ['Emma', 'Je moeder is mooi! Heb je broers of zussen?', '¡Tu mamá es bonita! ¿Tienes hermanos?'],
        ['José', 'Ik heb een zus. Ze heet Sofía. Ze heeft twee kinderen.', 'Tengo una hermana. Se llama Sofía. Ella tiene dos hijos.'],
        ['Emma', 'Dus jij bent oom!', '¡Entonces eres tío!'],
        ['José', 'Ja! En dit is onze hond, Rocky.', '¡Sí! Y este es nuestro perro, Rocky.'],
        ['Emma', 'Wat lief! Ik heb een kat, maar geen broers of zussen.', '¡Qué lindo! Yo tengo un gato, pero no tengo hermanos.'],
        ['José', 'Hoe heet je kat?', '¿Cómo se llama tu gato?'],
        ['Emma', 'Ze heet Luna.', 'Se llama Luna.']
      ],
      q: [
        { t: 'mc', q: 'Hoeveel zussen heeft José?', o: ['Een', 'Twee', 'Geen'] },
        { t: 'mc', q: 'Wie is Rocky?', o: ['De hond van José', 'De broer van José', 'De kat van Emma'] },
        { t: 'mc', q: 'Heeft Emma broers of zussen?', o: ['Nee, ze heeft een kat', 'Ja, twee', 'Ja, een zus'] }
      ]
    },
    culture: { t: 'Neef y nicht: una palabra para dos', html: `<p>En neerlandés <b>neef</b> significa <i>primo</i> y también <i>sobrino</i>, y <b>nicht</b> es <i>prima</i> y <i>sobrina</i>. Por el contexto se entiende cuál es.</p>
<p>🎂 En un cumpleaños neerlandés (<b>verjaardag</b>) no solo felicitas al cumpleañero: también a su familia. <i>«Gefeliciteerd met je zus!»</i> = ¡Felicidades por (el cumpleaños de) tu hermana!</p>` },
    ex: [
      { t: 'cloze', s: 'Ik ___ twee broers.', a: ['heb'], o: ['heb', 'hebt', 'heeft'], nl: 'Tengo dos hermanos.', tag: 'nl-hebben' },
      { t: 'cloze', s: 'Zij ___ een kat.', a: ['heeft'], o: ['heeft', 'hebt', 'heb'], nl: 'Ella tiene un gato.', tag: 'nl-hebben' },
      { t: 'cloze', s: 'Mijn vader ___ 60 jaar.', a: ['is'], o: ['is', 'heeft', 'hebt'], nl: 'Mi papá tiene 60 años.', x: 'La edad va con zijn: hij is 60.', tag: 'nl-zijn' },
      { t: 'cloze', s: '___ kind is jong.', a: ['Het'], o: ['Het', 'De', 'Een de'], nl: 'El niño es joven.', tag: 'nl-dehet' },
      { t: 'cloze', s: '___ kinderen zijn thuis.', a: ['De'], o: ['De', 'Het', 'Een'], nl: 'Los niños están en casa.', x: 'Todo plural va con de.', tag: 'nl-dehet' },
      { t: 'cloze', s: 'Dit is Ana en ___ man.', a: ['haar'], o: ['haar', 'zijn', 'jouw'], nl: 'Esta es Ana y su esposo.', x: 'Haar = de ella.', tag: 'nl-bez' },
      { t: 'cloze', s: 'Dit is Pedro en ___ vrouw.', a: ['zijn'], o: ['zijn', 'haar', 'hun'], nl: 'Este es Pedro y su esposa.', x: 'Zijn = de él.', tag: 'nl-bez' },
      { t: 'mc', q: '¿Qué significa «de ouders»?', o: ['los padres (mamá y papá)', 'los abuelos', 'los viejos'], tag: 'nl-hebben' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ik ben 30 jaar.', 'Ik heb 30 jaar.', 'Ik heeft 30 jaar.'], tag: 'nl-zijn' },
      { t: 'mc', q: '¿Qué artículo lleva «huis»?', o: ['het huis', 'de huis', 'den huis'], tag: 'nl-dehet' },
      { t: 'tr', nl: 'Tengo una hermana.', a: ['Ik heb een zus.', 'Ik heb één zus.'], tag: 'nl-hebben' },
      { t: 'tr', nl: 'Él tiene dos hijos.', a: ['Hij heeft twee kinderen.', 'Hij heeft twee zonen.'], tag: 'nl-hebben' },
      { t: 'tr', nl: 'Mi mamá se llama María.', a: ['Mijn moeder heet María.', 'Mijn mama heet María.', "M'n moeder heet María.", 'Mijn moeder heet Maria.', 'Mijn mama heet Maria.'], tag: 'nl-bez' },
      { t: 'order', s: 'Mijn zus heeft twee kinderen.', nl: 'Mi hermana tiene dos hijos.', tag: 'nl-order' },
      { t: 'match', p: [['de broer', 'el hermano'], ['de dochter', 'la hija'], ['de oma', 'la abuela'], ['de oom', 'el tío'], ['de hond', 'el perro']], tag: 'nl-hebben' }
    ],
    reading: {
      t: 'Mijn grote familie', type: 'Un correo a una amiga',
      p: [
        ['Hoi Lisa! Ik heb een grote familie. Mijn ouders wonen in Santiago de Veraguas. Mijn vader is boer en mijn moeder is verpleegkundige.', '¡Hola, Lisa! Tengo una familia grande. Mis padres viven en Santiago de Veraguas. Mi papá es agricultor y mi mamá es enfermera.'],
        ['Ik heb twee broers en een zus. Mijn zus Ana is getrouwd. Haar man komt uit Colombia en ze hebben een baby.', 'Tengo dos hermanos y una hermana. Mi hermana Ana está casada. Su esposo es de Colombia y tienen un bebé.'],
        ['Op zondag eten we samen bij mijn oma. Het is druk, maar ik vind het heerlijk! Vertel eens over jouw familie.', 'Los domingos comemos juntos en casa de mi abuela. Hay mucho ruido, ¡pero me encanta! Cuéntame de tu familia.']
      ],
      gl: [['de boer', 'el agricultor'], ['de verpleegkundige', 'la enfermera'], ['samen', 'juntos'], ['druk', 'mucho movimiento / ruidoso']],
      q: [
        { t: 'mc', q: 'Waar wonen de ouders?', o: ['In Santiago de Veraguas', 'In Colombia', 'In Panama-Stad'] },
        { t: 'mc', q: 'Wat doet de moeder?', o: ['Ze is verpleegkundige', 'Ze is boer', 'Ze is docent'] },
        { t: 'mc', q: 'Waar eten ze op zondag?', o: ['Bij oma', 'In een restaurant', 'Bij Ana'] }
      ]
    },
    say: [['Dit is mijn familie.', 'Esta es mi familia.'], ['Ik heb twee broers en een zus.', 'Tengo dos hermanos y una hermana.'], ['Haar naam is Sofía.', 'Ella se llama Sofía.']],
    task: { nl: 'Describe a tu familia en 4 frases: cuántos hermanos tienes, cómo se llaman y algo de ellos.', model: 'Ik heb een kleine familie. Ik heb een broer. Hij heet Luis en hij is 20 jaar. Mijn moeder is docent en mijn vader heeft een winkel.' },
    scenario: { nl: 'Le muestras fotos de tu familia a Daan, un amigo de Ámsterdam.', role: 'Je bent Daan, een nieuwsgierige vriend uit Amsterdam. De leerling laat foto’s van de familie zien op de telefoon. Stel eenvoudige vragen over elke persoon.', goal: 'Muéstrale a Daan la familia de tu papel (puedes inventar los nombres) y contesta sus preguntas.' }
  });

  /* ───────────────────────── A1 · 3 ───────────────────────── */
  U({
    id: 'nl-a1-03', level: 'A1', icon: '🧀', title: 'Eten en drinken', nl: 'Comida y bebida',
    goals: ['Pedir algo en un café', 'Conjugar verbos regulares en presente', 'Decir qué te gusta con graag y lekker'],
    vocab: [
      ['het water', 'el agua'], ['de koffie', 'el café'], ['de thee', 'el té'], ['het sap', 'el jugo'], ['de melk', 'la leche'], ['het bier', 'la cerveza'],
      ['het brood', 'el pan'], ['de rijst', 'el arroz'], ['de bonen', 'los frijoles'], ['de kip', 'el pollo'], ['de vis', 'el pescado'], ['het vlees', 'la carne'],
      ['het ei', 'el huevo'], ['de kaas', 'el queso'], ['het fruit', 'la fruta'], ['de appel', 'la manzana'], ['de banaan', 'el guineo / el banano'], ['de soep', 'la sopa'],
      ['het ontbijt', 'el desayuno'], ['de lunch', 'el almuerzo'], ['het avondeten', 'la cena'], ['lekker', 'rico / sabroso'], ['honger hebben', 'tener hambre'],
      ['dorst hebben', 'tener sed'], ['Ik wil graag…', 'Quisiera…'], ['de rekening', 'la cuenta'], ['eten', 'comer'], ['drinken', 'beber / tomar']
    ],
    grammar: [
      { t: 'El presente de los verbos regulares', es: 'De tegenwoordige tijd',
        html: `<p>Toma el infinitivo y quita <b>-en</b>: werken → <b>werk</b>. Esa es la forma de <b>ik</b>. Con <b>jij</b>, <b>u</b> y <b>hij/zij</b> agregas <b>-t</b>: jij werk<b>t</b>. En plural se usa el infinitivo: wij <b>werken</b>.</p>
<p>A veces la ortografía cambia un poco: eten → ik <b>eet</b> (la vocal larga se escribe doble), drinken → ik <b>drink</b>.</p>
<p>Y otra vez la regla de la pregunta: <b>Drink jij</b> koffie? — sin -t cuando jij va después del verbo.</p>`,
        table: [['', 'werken', 'eten', 'drinken'], ['ik', 'werk', 'eet', 'drink'], ['jij / u', 'werkt', 'eet', 'drinkt'], ['hij / zij', 'werkt', 'eet', 'drinkt'], ['wij / jullie / zij', 'werken', 'eten', 'drinken']],
        sum: 'ik drink, jij drinkt, hij drinkt, wij drinken.',
        ex: [['Ik drink elke dag koffie.', 'Tomo café todos los días.'], ['Hij eet geen vlees.', 'Él no come carne.'], ['Drink jij thee?', '¿Tomas té?']] },
      { t: 'Graag, lekker y willen', es: 'Graag, lekker en willen',
        html: `<p><b>Graag</b> después del verbo significa <i>con gusto / me gusta</i>: <b>Ik drink graag</b> koffie = me gusta tomar café.</p>
<p>Para decir que algo está rico: <b>Dat is lekker!</b> Y para pedir algo de forma amable: <b>Ik wil graag</b> een koffie = quisiera un café. <i>Mag ik</i> een koffie? también es muy común.</p>`,
        table: [['neerlandés', 'español'], ['Ik eet graag kip.', 'Me gusta comer pollo.'], ['Ik wil graag een thee.', 'Quisiera un té.'], ['Mag ik de rekening?', '¿Me trae la cuenta?'], ['Het is lekker!', '¡Está rico!']],
        ex: [['Ik wil graag een broodje kaas.', 'Quisiera un sándwich de queso.'], ['De soep is heel lekker.', 'La sopa está muy rica.']] },
      { t: 'Niet y geen: dos formas de decir no', es: 'Niet en geen',
        html: `<p><b>Geen</b> se usa con un sustantivo sin artículo o con <i>een</i>: Ik heb <b>geen</b> honger. Ik drink <b>geen</b> koffie. (= no + un/ningún)</p>
<p><b>Niet</b> se usa con todo lo demás: verbos, adjetivos, palabras con de/het: Ik werk <b>niet</b>. De soep is <b>niet</b> lekker.</p>`,
        table: [['geen', 'niet'], ['Ik eet geen vis.', 'Ik eet de vis niet.'], ['Ik heb geen kat.', 'Het is niet duur.']],
        ex: [['Ik drink geen bier.', 'No tomo cerveza.'], ['Ik vind het niet lekker.', 'No me gusta (no lo encuentro rico).']] }
    ],
    dialogue: {
      t: 'In het café', place: 'Utrecht 🇳🇱',
      lines: [
        ['Ober', 'Goedemiddag! Wat wilt u drinken?', '¡Buenas tardes! ¿Qué desea tomar?'],
        ['Rosa', 'Ik wil graag een koffie, alstublieft.', 'Quisiera un café, por favor.'],
        ['Ober', 'Met melk?', '¿Con leche?'],
        ['Rosa', 'Ja, graag. Hebben jullie ook broodjes?', 'Sí, por favor. ¿También tienen sándwiches?'],
        ['Ober', 'Ja, met kaas, kip of tonijn.', 'Sí, de queso, de pollo o de atún.'],
        ['Rosa', 'Ik eet geen vis. Een broodje kip, graag.', 'No como pescado. Un sándwich de pollo, por favor.'],
        ['Ober', 'Verder nog iets?', '¿Algo más?'],
        ['Rosa', 'Een appelsap voor mijn vriend. Hij drinkt geen koffie.', 'Un jugo de manzana para mi amigo. Él no toma café.'],
        ['Ober', 'Prima. Alstublieft!', 'Muy bien. ¡Aquí tiene!'],
        ['Rosa', 'Dank u wel. Mag ik straks de rekening?', 'Muchas gracias. ¿Me trae la cuenta después?']
      ],
      q: [
        { t: 'mc', q: 'Wat drinkt Rosa?', o: ['Koffie met melk', 'Appelsap', 'Water'] },
        { t: 'mc', q: 'Welk broodje neemt Rosa?', o: ['Kip', 'Tonijn', 'Kaas'] },
        { t: 'mc', q: 'Waarom drinkt haar vriend geen koffie?', o: ['Hij drinkt geen koffie', 'Het is te laat', 'Hij heeft geen dorst'] }
      ]
    },
    culture: { t: 'Pan con queso y la boterham', html: `<p>Al mediodía muchos neerlandeses no comen caliente: comen <b>boterhammen</b> (pan con mantequilla) con queso o con <b>hagelslag</b>, chispitas de chocolate. La comida caliente es la cena, a eso de las seis.</p>
<p>☕ Con el café casi siempre te dan <b>één koekje</b>, una sola galleta. Y para pedir la cuenta se dice <i>Mag ik afrekenen?</i> o <i>Mag ik de rekening?</i></p>` },
    ex: [
      { t: 'cloze', s: 'Ik ___ elke dag koffie.', a: ['drink'], o: ['drink', 'drinkt', 'drinken'], nl: 'Tomo café todos los días.', tag: 'nl-pres' },
      { t: 'cloze', s: 'Zij ___ in een café.', a: ['werkt'], o: ['werkt', 'werk', 'werken'], nl: 'Ella trabaja en un café.', tag: 'nl-pres' },
      { t: 'cloze', s: 'Wij ___ rijst met kip.', a: ['eten'], o: ['eten', 'eet', 'eetten'], nl: 'Comemos arroz con pollo.', tag: 'nl-pres' },
      { t: 'cloze', s: '___ jij thee?', a: ['Drink'], o: ['Drink', 'Drinkt', 'Drinken'], nl: '¿Tomas té?', x: 'Cuando jij va después del verbo, se pierde la -t.', tag: 'nl-pres' },
      { t: 'cloze', s: 'Ik heb ___ honger.', a: ['geen'], o: ['geen', 'niet', 'nee'], nl: 'No tengo hambre.', tag: 'nl-neg' },
      { t: 'cloze', s: 'De soep is ___ lekker.', a: ['niet'], o: ['niet', 'geen', 'nee'], nl: 'La sopa no está rica.', tag: 'nl-neg' },
      { t: 'cloze', s: 'Ik wil ___ een koffie.', a: ['graag'], o: ['graag', 'lekker', 'goed'], nl: 'Quisiera un café.', tag: 'nl-graag' },
      { t: 'mc', q: '¿Cómo pides la cuenta?', o: ['Mag ik de rekening?', 'Mag ik de tekening?', 'Ik wil het geld.'], tag: 'nl-graag' },
      { t: 'mc', q: '«Me gusta comer pescado» es…', o: ['Ik eet graag vis.', 'Ik graag eet vis.', 'Ik eet lekker vis.'], tag: 'nl-graag' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ik drink geen bier.', 'Ik drink niet bier.', 'Ik geen drink bier.'], tag: 'nl-neg' },
      { t: 'tr', nl: 'Me gusta el pollo.', a: ['Ik eet graag kip.', 'Ik vind kip lekker.'], tag: 'nl-graag' },
      { t: 'tr', nl: 'No como pescado.', a: ['Ik eet geen vis.'], tag: 'nl-neg' },
      { t: 'tr', nl: 'Quisiera un café, por favor.', a: ['Ik wil graag een koffie, alstublieft.', 'Ik wil graag een koffie.', 'Mag ik een koffie, alstublieft?', 'Een koffie, alstublieft.', 'Ik wil graag een koffie, alsjeblieft.'], tag: 'nl-graag' },
      { t: 'tr', nl: 'Ella toma té.', a: ['Zij drinkt thee.', 'Ze drinkt thee.'], tag: 'nl-pres' },
      { t: 'order', s: 'Ik wil graag een broodje kaas.', nl: 'Quisiera un sándwich de queso.', tag: 'nl-order' },
      { t: 'match', p: [['het brood', 'el pan'], ['de kaas', 'el queso'], ['het ei', 'el huevo'], ['het sap', 'el jugo'], ['de rekening', 'la cuenta']], tag: 'nl-graag' }
    ],
    reading: {
      t: 'Eten in Nederland', type: 'Un blog de viajes',
      p: [
        ['Het ontbijt in Nederland is simpel: brood met kaas of met hagelslag. Ik vind hagelslag heel lekker!', 'El desayuno en los Países Bajos es sencillo: pan con queso o con chispitas de chocolate. ¡A mí me encantan las chispitas!'],
        ['Voor de lunch eten veel mensen ook brood. Ze drinken er melk of karnemelk bij. Karnemelk vind ik niet lekker.', 'En el almuerzo mucha gente también come pan. Lo acompañan con leche o con suero de leche. El suero de leche no me gusta.'],
        ['Het avondeten is om zes uur. Dan eten ze warm: aardappels, groente en vlees. In Panama eten we veel later!', 'La cena es a las seis. Entonces comen caliente: papas, verduras y carne. ¡En Panamá cenamos mucho más tarde!']
      ],
      gl: [['simpel', 'sencillo'], ['de hagelslag', 'chispitas de chocolate'], ['de karnemelk', 'suero de leche'], ['de aardappels', 'las papas'], ['de groente', 'las verduras']],
      q: [
        { t: 'mc', q: 'Wat eten Nederlanders bij het ontbijt?', o: ['Brood met kaas of hagelslag', 'Rijst met kip', 'Soep'] },
        { t: 'mc', q: 'Hoe laat is het avondeten?', o: ['Om zes uur', 'Om negen uur', 'Om twaalf uur'] },
        { t: 'mc', q: 'Wat vindt de schrijver niet lekker?', o: ['Karnemelk', 'Hagelslag', 'Kaas'] }
      ]
    },
    say: [['Ik wil graag een koffie, alstublieft.', 'Quisiera un café, por favor.'], ['Ik eet geen vis.', 'No como pescado.'], ['Mag ik de rekening?', '¿Me trae la cuenta?']],
    task: { nl: 'Escribe 4 frases sobre lo que te gusta comer y beber, y lo que no.', model: 'Ik eet graag rijst met bonen. Ik drink elke ochtend koffie. Ik drink geen bier. Vis vind ik heel lekker.' },
    scenario: { nl: 'Estás en un café en Ámsterdam y pides algo para comer y beber.', role: 'Je bent een vriendelijke ober in een klein café in Amsterdam. Neem de bestelling op, bied drinken en broodjes aan en vraag «Verder nog iets?». Spreek eenvoudig Nederlands.', goal: 'Pide una bebida y algo de comer, y al final pide la cuenta.' }
  });

  /* ───────────────────────── A1 · 4 ───────────────────────── */
  U({
    id: 'nl-a1-04', level: 'A1', icon: '⏰', title: 'Mijn dag', nl: 'Tu rutina diaria',
    goals: ['Contar tu rutina', 'Poner el verbo en segundo lugar (inversión)', 'Decir la hora', 'Conocer los verbos separables'],
    vocab: [
      ['wakker worden', 'despertarse'], ['opstaan', 'levantarse'], ['douchen', 'bañarse'], ['aankleden', 'vestirse'], ['ontbijten', 'desayunar'],
      ['naar het werk gaan', 'ir al trabajo'], ['naar school gaan', 'ir a la escuela'], ['werken', 'trabajar'], ['studeren', 'estudiar'], ['thuiskomen', 'llegar a casa'],
      ['koken', 'cocinar'], ['tv kijken', 'ver televisión'], ['naar bed gaan', 'acostarse'], ['slapen', 'dormir'], ['altijd', 'siempre'], ['meestal', 'normalmente'],
      ['soms', 'a veces'], ['nooit', 'nunca'], ['elke dag', 'todos los días'], ["'s ochtends", 'en la mañana'], ["'s middags", 'en la tarde'], ["'s avonds", 'en la noche'],
      ['Hoe laat is het?', '¿Qué hora es?'], ['Het is zeven uur.', 'Son las siete.'], ['half acht', 'las siete y media'], ['vroeg', 'temprano'], ['laat', 'tarde'], ['de fiets', 'la bicicleta']
    ],
    grammar: [
      { t: 'El verbo en segundo lugar', es: 'Inversie',
        html: `<p>En una frase neerlandesa el verbo conjugado va <b>siempre en segundo lugar</b>. Si empiezas con otra cosa (una hora, un lugar), el sujeto pasa <b>detrás</b> del verbo:</p>
<p><i>Ik werk vandaag.</i> → <b>Vandaag werk ik.</b> (Hoy trabajo yo.)<br><i>Ik sta om zeven uur op.</i> → <b>Om zeven uur sta ik op.</b></p>
<p>Esto se llama <b>inversión</b> y es uno de los errores más comunes al principio: <s>Vandaag ik werk</s> ❌.</p>`,
        table: [['1', '2 (verbo)', '3', 'resto'], ['Ik', 'ga', '', "'s ochtends naar het werk."], ["'s Ochtends", 'ga', 'ik', 'naar het werk.'], ['Om zes uur', 'eet', 'ik.', '']],
        sum: 'Vandaag werk ik. Morgen studeer ik.',
        ex: [["'s Avonds kijk ik tv.", 'En la noche veo televisión.'], ['Om acht uur begint mijn werk.', 'Mi trabajo empieza a las ocho.']] },
      { t: 'La hora: ¡half es antes!', es: 'Hoe laat is het?',
        html: `<p><b>Het is zeven uur</b> = son las siete. Ojo: <b>half acht</b> significa <i>media hora antes de las ocho</i>, o sea <b>7:30</b>. ¡No 8:30!</p>
<p><b>Kwart over</b> zeven = 7:15. <b>Kwart voor</b> acht = 7:45. Para decir <i>a las</i> se usa <b>om</b>: <i>om zeven uur</i>. En la escritura se usa el reloj de 24 horas: 19:00.</p>`,
        table: [['hora', 'en neerlandés'], ['7:00', 'zeven uur'], ['7:15', 'kwart over zeven'], ['7:30', 'half acht'], ['7:45', 'kwart voor acht'], ['a las 6', 'om zes uur']],
        ex: [['Het is half elf.', 'Son las diez y media.'], ['Ik begin om negen uur.', 'Empiezo a las nueve.']] },
      { t: 'Verbos separables', es: 'Scheidbare werkwoorden',
        html: `<p>Algunos verbos tienen un prefijo que se <b>separa</b> y va al final de la frase: <b>opstaan</b> (levantarse) → <i>Ik <b>sta</b> om zeven uur <b>op</b>.</i></p>
<p>Otros ejemplos: <b>thuiskomen</b> → ik kom om zes uur thuis; <b>aankleden</b> → ik kleed me aan. En el infinitivo el prefijo va pegado: <i>Ik wil vroeg opstaan.</i></p>`,
        table: [['infinitivo', 'presente'], ['opstaan', 'ik sta op'], ['thuiskomen', 'ik kom thuis'], ['meegaan', 'ik ga mee']],
        ex: [['Hoe laat sta jij op?', '¿A qué hora te levantas?'], ['Mijn vader komt om vijf uur thuis.', 'Mi papá llega a casa a las cinco.']] }
    ],
    dialogue: {
      t: 'Een drukke dag', place: 'Den Haag 🇳🇱',
      lines: [
        ['Bram', 'Je ziet er moe uit! Hoe laat sta je op?', '¡Te ves cansada! ¿A qué hora te levantas?'],
        ['Yaneth', 'Ik sta elke dag om half zes op.', 'Me levanto todos los días a las cinco y media.'],
        ['Bram', 'Wat vroeg! Waarom?', '¡Qué temprano! ¿Por qué?'],
        ['Yaneth', 'Ik ga met de trein naar Rotterdam. Om zeven uur begint mijn werk.', 'Voy en tren a Róterdam. Mi trabajo empieza a las siete.'],
        ['Bram', 'En wat doe je na je werk?', '¿Y qué haces después del trabajo?'],
        ['Yaneth', 'Meestal ga ik naar de sportschool. Daarna kook ik.', 'Normalmente voy al gimnasio. Después cocino.'],
        ['Bram', "Kijk je 's avonds tv?", '¿Ves televisión en la noche?'],
        ['Yaneth', 'Soms. Maar om tien uur ga ik altijd naar bed. En jij?', 'A veces. Pero siempre me acuesto a las diez. ¿Y tú?'],
        ['Bram', 'Ik werk thuis. Ik sta nooit voor acht uur op!', 'Trabajo desde casa. ¡Nunca me levanto antes de las ocho!']
      ],
      q: [
        { t: 'mc', q: 'Hoe laat staat Yaneth op?', o: ['Om half zes', 'Om zeven uur', 'Om acht uur'] },
        { t: 'mc', q: 'Hoe gaat ze naar haar werk?', o: ['Met de trein', 'Met de auto', 'Met de fiets'] },
        { t: 'mc', q: 'Waar werkt Bram?', o: ['Thuis', 'In de sportschool', 'In Rotterdam'] }
      ]
    },
    culture: { t: 'El país de las bicicletas', html: `<p>En los Países Bajos hay más bicicletas que personas. Mucha gente va en <b>fiets</b> al trabajo y a la escuela, con lluvia y con viento. Hay carriles para bicicletas en todas partes.</p>
<p>🚲 Si caminas por la ciudad, cuidado: el carril rojo es para las bicicletas, ¡no para los peatones!</p>` },
    ex: [
      { t: 'cloze', s: "'s Ochtends ___ ik koffie.", a: ['drink'], o: ['drink', 'drinkt', 'drinken'], nl: 'En la mañana tomo café.', tag: 'nl-inv' },
      { t: 'cloze', s: 'Vandaag ___ ik thuis.', a: ['werk'], o: ['werk', 'werkt', 'ik werk'], nl: 'Hoy trabajo en casa.', x: 'El verbo va en segundo lugar, y el sujeto después.', tag: 'nl-inv' },
      { t: 'cloze', s: 'Ik sta om zeven uur ___.', a: ['op'], o: ['op', 'aan', 'thuis'], nl: 'Me levanto a las siete.', tag: 'nl-sep' },
      { t: 'cloze', s: 'Mijn broer ___ om zes uur thuis.', a: ['komt'], o: ['komt', 'kom', 'komen'], nl: 'Mi hermano llega a casa a las seis.', tag: 'nl-sep' },
      { t: 'cloze', s: 'Ik begin ___ negen uur.', a: ['om'], o: ['om', 'in', 'op'], nl: 'Empiezo a las nueve.', tag: 'nl-tijd' },
      { t: 'cloze', s: 'Wij gaan ___ naar bed.', a: ['altijd'], o: ['altijd', 'nooit niet', 'geen'], nl: 'Siempre nos vamos a la cama.', tag: 'nl-pres' },
      { t: 'mc', q: '«half acht» es…', o: ['7:30', '8:30', '8:00'], x: 'Half acht = media hora antes de las ocho.', tag: 'nl-tijd' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Morgen werk ik.', 'Morgen ik werk.', 'Morgen werken ik.'], tag: 'nl-inv' },
      { t: 'mc', q: '7:15 es…', o: ['kwart over zeven', 'kwart voor zeven', 'half zeven'], tag: 'nl-tijd' },
      { t: 'mc', q: '«Me levanto» con el verbo opstaan es…', o: ['Ik sta op.', 'Ik opsta.', 'Ik op sta.'], tag: 'nl-sep' },
      { t: 'tr', nl: 'Me levanto a las siete.', a: ['Ik sta om zeven uur op.', 'Om zeven uur sta ik op.'], tag: 'nl-sep' },
      { t: 'tr', nl: 'En la noche veo televisión.', a: ["'s Avonds kijk ik tv.", "'s Avonds kijk ik televisie.", "Ik kijk 's avonds tv.", "Ik kijk 's avonds televisie."], tag: 'nl-inv' },
      { t: 'tr', nl: 'Nunca cocino.', a: ['Ik kook nooit.'], tag: 'nl-pres' },
      { t: 'tr', nl: '¿Qué hora es?', a: ['Hoe laat is het?'], tag: 'nl-tijd' },
      { t: 'order', s: 'Om tien uur ga ik naar bed.', nl: 'A las diez me acuesto.', tag: 'nl-inv' },
      { t: 'match', p: [['slapen', 'dormir'], ['koken', 'cocinar'], ['altijd', 'siempre'], ['nooit', 'nunca'], ['de fiets', 'la bicicleta']], tag: 'nl-pres' }
    ],
    reading: {
      t: 'Een dag van een verpleegkundige', type: 'Artículo de revista',
      p: [
        ['Marisol is verpleegkundige in Amsterdam. Ze staat om half vijf op, ze doucht en ze ontbijt snel: koffie en brood.', 'Marisol es enfermera en Ámsterdam. Se levanta a las cuatro y media, se baña y desayuna rápido: café y pan.'],
        ['Om zes uur begint haar werk. Ze gaat met de fiets naar het ziekenhuis. Ze werkt drie dagen per week.', 'Su trabajo empieza a las seis. Va en bicicleta al hospital. Trabaja tres días a la semana.'],
        ['Op haar vrije dagen slaapt ze lang, belt ze met haar moeder in Panama en gaat ze naar het strand. «Ik werk graag,» zegt ze, «maar vrije dagen zijn ook fijn!»', 'En sus días libres duerme hasta tarde, llama a su mamá en Panamá y va a la playa. «Me gusta trabajar», dice, «¡pero los días libres también son bonitos!»']
      ],
      gl: [['snel', 'rápido'], ['het ziekenhuis', 'el hospital'], ['vrij', 'libre'], ['het strand', 'la playa'], ['fijn', 'agradable']],
      q: [
        { t: 'mc', q: 'Hoe laat staat Marisol op?', o: ['Om half vijf', 'Om zes uur', 'Om vijf uur'] },
        { t: 'mc', q: 'Hoe gaat ze naar het ziekenhuis?', o: ['Met de fiets', 'Met de bus', 'Met de trein'] },
        { t: 'mc', q: 'Wat doet ze op haar vrije dagen?', o: ['Ze gaat naar het strand', 'Ze werkt thuis', 'Ze studeert'] }
      ]
    },
    say: [['Ik sta elke dag om zes uur op.', 'Me levanto todos los días a las seis.'], ["'s Avonds kook ik.", 'En la noche cocino.'], ['Hoe laat is het?', '¿Qué hora es?']],
    task: { nl: 'Describe un día normal tuyo en 5 frases. Empieza algunas frases con la hora (Om zeven uur…) y recuerda el verbo en segundo lugar.', model: "Om zes uur sta ik op. Ik douche en ik drink koffie. Om acht uur ga ik met de bus naar mijn werk. 's Avonds kook ik en kijk ik tv." },
    scenario: { nl: 'Un compañero de trabajo de Róterdam te pregunta por tu rutina.', role: 'Je bent Bram, een collega uit Rotterdam. Vraag de leerling naar de dag: hoe laat hij of zij opstaat, hoe hij of zij naar het werk gaat, wat hij of zij ’s avonds doet. Spreek eenvoudig Nederlands.', goal: 'Cuéntale a Bram cómo es un día normal para ti.' }
  });

  /* ───────────────────────── A1 · 5 ───────────────────────── */
  U({
    id: 'nl-a1-05', level: 'A1', icon: '🏙️', title: 'In de stad', nl: 'En la ciudad',
    goals: ['Decir qué hay en un lugar (er is / er zijn)', 'Preguntar y dar direcciones', 'Usar preposiciones de lugar'],
    vocab: [
      ['de straat', 'la calle'], ['de hoek', 'la esquina'], ['de bank', 'el banco'], ['de supermarkt', 'el supermercado'], ['de apotheek', 'la farmacia'],
      ['het ziekenhuis', 'el hospital'], ['het restaurant', 'el restaurante'], ['het hotel', 'el hotel'], ['het park', 'el parque'], ['het strand', 'la playa'],
      ['de kerk', 'la iglesia'], ['het museum', 'el museo'], ['de bushalte', 'la parada de bus'], ['het station', 'la estación de tren'], ['het toilet', 'el baño'],
      ['het plein', 'la plaza'], ['de brug', 'el puente'], ['dichtbij', 'cerca'], ['ver', 'lejos'], ['naast', 'al lado de'], ['tegenover', 'frente a'], ['tussen', 'entre'],
      ['linksaf', 'a la izquierda (doblar)'], ['rechtsaf', 'a la derecha (doblar)'], ['rechtdoor', 'derecho'], ['Waar is…?', '¿Dónde está…?'], ['het centrum', 'el centro']
    ],
    grammar: [
      { t: 'Er is / er zijn: hay', es: 'Er is / er zijn',
        html: `<p>Para decir <i>hay</i> se usa <b>er is</b> con una cosa y <b>er zijn</b> con varias: <i>Er is een bank.</i> <i>Er zijn twee parken.</i></p>
<p>Pregunta: <b>Is er</b> een apotheek in de buurt? <b>Zijn er</b> restaurants? Negativa: <b>Er is geen</b> ziekenhuis.</p>`,
        table: [['', 'singular', 'plural'], ['afirmativa', 'Er is een park.', 'Er zijn twee parken.'], ['pregunta', 'Is er een park?', 'Zijn er parken?'], ['negativa', 'Er is geen park.', 'Er zijn geen parken.']],
        sum: 'Er is een bank op de hoek. Er zijn veel restaurants in het centrum.',
        ex: [['Er is een apotheek naast de bank.', 'Hay una farmacia al lado del banco.'], ['Zijn er hotels bij het strand?', '¿Hay hoteles cerca de la playa?']] },
      { t: 'Preposiciones de lugar', es: 'Voorzetsels van plaats',
        html: `<p><b>naast</b> = al lado de · <b>tegenover</b> = frente a · <b>tussen</b> = entre · <b>bij</b> = cerca de / en casa de · <b>op de hoek</b> = en la esquina · <b>in</b> = en (dentro de).</p>
<p>Con calles se dice <b>in</b>: <i>De bank is in de Kerkstraat.</i> Y con plazas, <b>op</b>: <i>op het plein</i>.</p>`,
        table: [['neerlandés', 'español'], ['naast het park', 'al lado del parque'], ['tegenover de kerk', 'frente a la iglesia'], ['tussen de bank en het hotel', 'entre el banco y el hotel'], ['op de hoek', 'en la esquina']],
        ex: [['Het museum is tegenover het park.', 'El museo está frente al parque.'], ['Het hotel is in de Kalverstraat.', 'El hotel está en la calle Kalverstraat.']] },
      { t: 'Dar direcciones', es: 'De weg wijzen',
        html: `<p>Para dar instrucciones se usa el verbo al principio, en la forma de ik: <b>Ga</b> rechtdoor. <b>Neem</b> de tweede straat links. O se dice con <b>u</b> o <b>je</b>: <i>U gaat hier linksaf.</i></p>
<p>Para preguntar con cortesía: <b>Pardon, waar is het station?</b> o <b>Weet u waar de apotheek is?</b></p>`,
        table: [['instrucción', 'significado'], ['Ga rechtdoor.', 'Sigue derecho.'], ['Ga linksaf / rechtsaf.', 'Dobla a la izquierda / derecha.'], ['Neem de tweede straat.', 'Toma la segunda calle.'], ['Het is aan de linkerkant.', 'Está a la izquierda.']],
        ex: [['Ga rechtdoor en dan rechtsaf. Het is aan de linkerkant.', 'Sigue derecho y luego dobla a la derecha. Está a la izquierda.'], ['Pardon, is er een bushalte in de buurt?', 'Disculpe, ¿hay una parada de bus por aquí?']] }
    ],
    dialogue: {
      t: 'De weg kwijt', place: 'Ámsterdam 🇳🇱',
      lines: [
        ['Diana', 'Pardon, is er een apotheek in de buurt?', 'Disculpe, ¿hay una farmacia por aquí?'],
        ['Man', 'Ja, in de Kerkstraat.', 'Sí, en la calle Kerkstraat.'],
        ['Diana', 'Is het ver?', '¿Está lejos?'],
        ['Man', 'Nee, het is dichtbij. Ga rechtdoor en op de hoek linksaf.', 'No, está cerca. Siga derecho y en la esquina doble a la izquierda.'],
        ['Diana', 'Op de hoek linksaf. Oké.', 'En la esquina a la izquierda. Bien.'],
        ['Man', 'De apotheek is naast een grote bank, tegenover het park.', 'La farmacia está al lado de un banco grande, frente al parque.'],
        ['Diana', 'Dank u wel! En zijn er daar ook restaurants?', '¡Muchas gracias! ¿Y también hay restaurantes por ahí?'],
        ['Man', 'Ja, heel veel. Er is een lekker Surinaams restaurant op de hoek.', 'Sí, muchísimos. Hay un restaurante surinamés muy rico en la esquina.'],
        ['Diana', 'Perfect. Fijne dag nog!', '¡Perfecto! ¡Que tenga buen día!']
      ],
      q: [
        { t: 'mc', q: 'Wat zoekt Diana?', o: ['Een apotheek', 'Een bank', 'Een park'] },
        { t: 'mc', q: 'Waar is de apotheek?', o: ['Naast een bank, tegenover het park', 'Naast het park', 'Ver van het centrum'] },
        { t: 'mc', q: 'Welk restaurant is er op de hoek?', o: ['Een Surinaams restaurant', 'Een Mexicaans restaurant', 'Een pizzeria'] }
      ]
    },
    culture: { t: 'Canales, puentes y Surinam', html: `<p>Ámsterdam tiene más de 100 kilómetros de canales (<b>grachten</b>) y unos 1500 puentes. Muchas casas antiguas son altas y estrechas, con escaleras muy empinadas.</p>
<p>🌎 En las ciudades vas a encontrar mucha comida de <b>Surinam</b>, en Sudamérica, que fue colonia neerlandesa. ¡En Surinam se habla neerlandés! Prueba un <i>broodje pom</i> o arroz con pollo al estilo surinamés.</p>` },
    ex: [
      { t: 'cloze', s: 'Er ___ een bank op de hoek.', a: ['is'], o: ['is', 'zijn', 'heeft'], nl: 'Hay un banco en la esquina.', tag: 'nl-er' },
      { t: 'cloze', s: 'Er ___ twee parken bij mijn huis.', a: ['zijn'], o: ['zijn', 'is', 'hebben'], nl: 'Hay dos parques cerca de mi casa.', tag: 'nl-er' },
      { t: 'cloze', s: '___ er een apotheek in de buurt?', a: ['Is'], o: ['Is', 'Zijn', 'Heeft'], nl: '¿Hay una farmacia por aquí?', tag: 'nl-er' },
      { t: 'cloze', s: 'Er is ___ ziekenhuis in mijn dorp.', a: ['geen'], o: ['geen', 'niet', 'nee'], nl: 'No hay hospital en mi pueblo.', tag: 'nl-neg' },
      { t: 'cloze', s: 'De bank is ___ de supermarkt.', a: ['naast'], o: ['naast', 'tussen', 'ver'], nl: 'El banco está al lado del supermercado.', tag: 'nl-prep' },
      { t: 'cloze', s: 'De kerk is ___ het park.', a: ['tegenover'], o: ['tegenover', 'tussen', 'dichtbij'], nl: 'La iglesia está frente al parque.', tag: 'nl-prep' },
      { t: 'cloze', s: 'Het museum is ___ de bank en het hotel.', a: ['tussen'], o: ['tussen', 'naast', 'tegenover'], nl: 'El museo está entre el banco y el hotel.', tag: 'nl-prep' },
      { t: 'mc', q: '«Dobla a la derecha» es…', o: ['Ga rechtsaf.', 'Ga linksaf.', 'Ga rechtdoor.'], tag: 'nl-prep' },
      { t: 'mc', q: '«rechtdoor» significa…', o: ['derecho (sin doblar)', 'a la derecha', 'atrás'], x: 'Rechtdoor = seguir derecho; rechtsaf = doblar a la derecha.', tag: 'nl-prep' },
      { t: 'mc', q: '¿Cómo preguntas con cortesía por el baño?', o: ['Pardon, waar is het toilet?', 'Waar toilet?', 'Ik wil toilet nu.'], tag: 'nl-q' },
      { t: 'tr', nl: 'Hay un parque cerca de mi casa.', a: ['Er is een park bij mijn huis.', 'Er is een park dicht bij mijn huis.', 'Er is een park in de buurt van mijn huis.', 'Bij mijn huis is een park.'], tag: 'nl-er' },
      { t: 'tr', nl: 'Disculpe, ¿dónde está la estación?', a: ['Pardon, waar is het station?', 'Sorry, waar is het station?'], tag: 'nl-q' },
      { t: 'tr', nl: 'Sigue derecho y dobla a la izquierda.', a: ['Ga rechtdoor en ga linksaf.', 'Ga rechtdoor en dan linksaf.', 'Ga rechtdoor en sla linksaf.', 'Ga rechtdoor en dan naar links.'], tag: 'nl-prep' },
      { t: 'order', s: 'De apotheek is naast de bank.', nl: 'La farmacia está al lado del banco.', tag: 'nl-prep' },
      { t: 'match', p: [['de straat', 'la calle'], ['de hoek', 'la esquina'], ['de brug', 'el puente'], ['dichtbij', 'cerca'], ['ver', 'lejos']], tag: 'nl-prep' }
    ],
    reading: {
      t: 'Welkom in Utrecht', type: 'Folleto turístico',
      p: [
        ['Utrecht is een oude stad in het midden van Nederland. Er zijn mooie grachten, oude kerken en veel kleine winkels.', 'Utrecht es una ciudad antigua en el centro de los Países Bajos. Hay canales bonitos, iglesias antiguas y muchas tiendas pequeñas.'],
        ['In het centrum is de Domtoren, de hoogste kerktoren van Nederland. Tegenover de toren is een plein met veel cafés.', 'En el centro está la Domtoren, la torre de iglesia más alta de los Países Bajos. Frente a la torre hay una plaza con muchos cafés.'],
        ['Het station is dichtbij: tien minuten lopen. En er is een enorme fietsenstalling met plek voor 12.500 fietsen!', 'La estación está cerca: a diez minutos a pie. ¡Y hay un estacionamiento enorme para 12 500 bicicletas!']
      ],
      gl: [['het midden', 'el centro / el medio'], ['de toren', 'la torre'], ['lopen', 'caminar'], ['de fietsenstalling', 'estacionamiento de bicicletas']],
      q: [
        { t: 'mc', q: 'Wat is de Domtoren?', o: ['De hoogste kerktoren van Nederland', 'Een station', 'Een museum'] },
        { t: 'mc', q: 'Wat is er tegenover de toren?', o: ['Een plein met cafés', 'Het station', 'Een park'] },
        { t: 'mc', q: 'Hoe ver is het station?', o: ['Tien minuten lopen', 'Een uur met de bus', 'Heel ver'] }
      ]
    },
    say: [['Pardon, is er een bank in de buurt?', 'Disculpe, ¿hay un banco por aquí?'], ['Ga rechtdoor en dan linksaf.', 'Sigue derecho y luego a la izquierda.'], ['Het hotel is tegenover het park.', 'El hotel está frente al parque.']],
    task: { nl: 'Describe tu barrio en 4 frases: qué hay, qué no hay y dónde están las cosas.', model: 'Ik woon in El Cangrejo. Er zijn veel restaurants en er is een groot park. Er is geen strand. De supermarkt is naast mijn gebouw.' },
    scenario: { nl: 'Estás de turista en Ámsterdam y le preguntas a alguien cómo llegar a un lugar.', role: 'Je bent een behulpzame Amsterdammer op straat. De leerling is toerist en vraagt de weg. Geef eenvoudige aanwijzingen met links, rechts en rechtdoor. Spreek langzaam en eenvoudig.', goal: 'Pregunta cómo llegar a un museo o a la estación y repite las direcciones.' }
  });
})(window.SPT);
