/* Neerlandés A2, unidades 6–10 (neerlandés de los Países Bajos, explicaciones en español latinoamericano). Mismo formato que a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('nl-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'nl-omdat': 'omdat / want / dus', 'nl-bijzin': 'el verbo al final (bijzin)', 'nl-impf': 'imperfectum (werkte, woonde)', 'nl-impfs': 'imperfectum irregular (ging, was)',
    'nl-zullen': 'zullen y gaan (futuro)', 'nl-omte': 'om … te', 'nl-erq': 'er + cantidad', 'nl-veel': 'veel, weinig, een beetje', 'nl-zich': 'verbos reflexivos (zich)', 'nl-als': 'als (si / cuando)'
  });

  /* ───────────────────────── A2 · 6 ───────────────────────── */
  U({
    id: 'nl-a2-06', level: 'A2', icon: '💼', title: 'Op het werk', nl: 'En el trabajo',
    goals: ['Hablar de tu trabajo y tus tareas', 'Dar razones con omdat, want y dus', 'Poner el verbo al final después de omdat'],
    vocab: [
      ['het werk', 'el trabajo'], ['de baan', 'el empleo'], ['de baas', 'el jefe'], ['de collega', 'el compañero de trabajo'], ['de klant', 'el cliente'], ['het bedrijf', 'la empresa'],
      ['het kantoor', 'la oficina'], ['de vergadering', 'la reunión'], ['het salaris', 'el sueldo'], ['fulltime', 'tiempo completo'], ['parttime', 'medio tiempo'], ['de dienst', 'el turno'],
      ['overwerken', 'hacer horas extra'], ['vrij hebben', 'tener libre'], ['solliciteren', 'solicitar un empleo'], ['het sollicitatiegesprek', 'la entrevista de trabajo'], ['het cv', 'el currículum'],
      ['de ervaring', 'la experiencia'], ['de verpleegkundige', 'el enfermero / la enfermera'], ['de kok', 'el cocinero'], ['de schoonmaker', 'el limpiador'], ['omdat', 'porque (verbo al final)'],
      ['want', 'porque (orden normal)'], ['dus', 'así que']
    ],
    grammar: [
      { t: 'Want y dus: orden normal', es: 'Want / dus',
        html: `<p><b>want</b> (porque) y <b>dus</b> (así que) unen dos frases. Después de <b>want</b> el orden es normal: <i>Ik ben moe, <b>want</b> ik <b>heb</b> veel gewerkt.</i></p>
<p>Después de <b>dus</b> el verbo va <b>primero</b> (inversión): <i>Ik ben moe, <b>dus ga</b> ik vroeg slapen.</i></p>`,
        table: [['conector', 'ejemplo'], ['want', 'Ik blijf thuis, want ik ben ziek.'], ['dus', 'Ik ben ziek, dus blijf ik thuis.'], ['en / maar', 'Ik werk hard, maar ik verdien weinig.']],
        sum: 'Want ik ben moe. Dus ga ik slapen.',
        ex: [['Ik neem de fiets, want de bus is te duur.', 'Tomo la bici, porque el bus es muy caro.'], ['Het regent, dus neem ik de trein.', 'Está lloviendo, así que tomo el tren.']] },
      { t: 'Omdat: el verbo al final', es: 'Bijzin met omdat',
        html: `<p><b>omdat</b> también significa «porque», pero abre una <b>bijzin</b> (oración subordinada): ¡el verbo conjugado va al <b>final</b>!</p>
<p><i>Ik blijf thuis, <b>omdat</b> ik ziek <b>ben</b>.</i> · <i>Ze is blij, <b>omdat</b> ze een nieuwe baan <b>heeft</b>.</i> Con dos verbos, los dos van al final: <i>…omdat ik moet <b>werken</b></i> / <i>…omdat ik <b>moet werken</b></i>.</p>`,
        table: [['want (orden normal)', 'omdat (verbo al final)'], ['…, want ik ben moe.', '…, omdat ik moe ben.'], ['…, want hij werkt veel.', '…, omdat hij veel werkt.'], ['…, want ik heb gewerkt.', '…, omdat ik gewerkt heb.']],
        ex: [['Ik leer Nederlands, omdat ik in Nederland wil werken.', 'Aprendo neerlandés porque quiero trabajar en los Países Bajos.'], ['Waarom ben je te laat? — Omdat de trein vertraging had.', '¿Por qué llegas tarde? — Porque el tren tenía retraso.']] },
      { t: 'Hablar de tu trabajo', es: 'Over je werk praten',
        html: `<p><b>Wat voor werk doe je?</b> (¿en qué trabajas?) — <i>Ik ben verpleegkundige.</i> Ojo: en neerlandés la profesión va <b>sin artículo</b>: <i>Ik ben kok</i>, no <s>Ik ben een kok</s>.</p>
<p><i>Ik werk <b>bij</b> een bank.</i> (en una empresa) · <i>Ik werk <b>in</b> een ziekenhuis.</i> (en un lugar) · <i>Ik werk <b>32 uur</b> per week.</i></p>`,
        table: [['pregunta', 'respuesta'], ['Wat voor werk doe je?', 'Ik ben schoonmaker.'], ['Waar werk je?', 'Ik werk bij Albert Heijn.'], ['Hoeveel uur werk je?', 'Ik werk parttime, 24 uur.']],
        ex: [['Mijn zus is verpleegkundige in een ziekenhuis.', 'Mi hermana es enfermera en un hospital.'], ['Ik werk bij een groot bedrijf in Rotterdam.', 'Trabajo en una empresa grande en Róterdam.']] }
    ],
    dialogue: {
      t: 'Het sollicitatiegesprek', place: 'Eindhoven 🇳🇱',
      lines: [
        ['Mevrouw Bakker', 'Goedemorgen. Gaat u zitten. Vertelt u eens iets over uzelf.', 'Buenos días. Siéntese. Cuénteme algo de usted.'],
        ['Paola', 'Ik kom uit Panama. Ik heb toerisme gestudeerd en drie jaar in een hotel gewerkt.', 'Soy de Panamá. Estudié turismo y trabajé tres años en un hotel.'],
        ['Mevrouw Bakker', 'Waarom wilt u bij ons werken?', '¿Por qué quiere trabajar con nosotros?'],
        ['Paola', 'Omdat ik graag met mensen werk. En ik spreek Spaans, Engels en een beetje Nederlands.', 'Porque me gusta trabajar con gente. Y hablo español, inglés y un poco de neerlandés.'],
        ['Mevrouw Bakker', 'Mooi. U moet soms in het weekend werken. Is dat een probleem?', 'Muy bien. A veces tiene que trabajar el fin de semana. ¿Es un problema?'],
        ['Paola', 'Nee hoor. Moet ik ook avonddiensten doen?', 'No, para nada. ¿También tengo que hacer turnos de noche?'],
        ['Mevrouw Bakker', 'Eén keer per week. U krijgt dan wel extra salaris.', 'Una vez por semana. Pero entonces recibe un sueldo extra.'],
        ['Paola', 'Perfect. Wanneer hoor ik iets van u?', 'Perfecto. ¿Cuándo sabré algo de usted?'],
        ['Mevrouw Bakker', 'Vrijdag bellen we u. Bedankt voor uw komst.', 'El viernes la llamamos. Gracias por venir.']
      ],
      q: [
        { t: 'mc', q: 'Waar heeft Paola gewerkt?', o: ['In een hotel', 'In een bank', 'In een ziekenhuis'] },
        { t: 'mc', q: 'Waarom wil ze daar werken?', o: ['Omdat ze graag met mensen werkt', 'Omdat het salaris hoog is', 'Omdat het dichtbij is'] },
        { t: 'mc', q: 'Hoe vaak moet ze een avonddienst doen?', o: ['Eén keer per week', 'Elke dag', 'Nooit'] }
      ]
    },
    culture: { t: 'Trabajar en los Países Bajos', html: `<p>Los neerlandeses son famosos por trabajar <b>parttime</b>: muchísima gente trabaja 4 días por semana. A la hora del almuerzo comen rápido un sándwich en la cantina, y a las 5 o 6 de la tarde la oficina queda vacía.</p>
<p>🗣️ En el trabajo la gente es muy <b>direct</b>: dice lo que piensa sin rodeos, incluso al jefe. No es mala educación, ¡es normal!</p>` },
    ex: [
      { t: 'cloze', s: 'Ik blijf thuis, want ik ___ ziek.', a: ['ben'], o: ['ben', 'is', 'zijn'], nl: 'Me quedo en casa porque estoy enfermo.', tag: 'nl-omdat' },
      { t: 'cloze', s: 'Ik blijf thuis, omdat ik ziek ___.', a: ['ben'], o: ['ben', 'is', 'heb'], nl: 'Me quedo en casa porque estoy enfermo.', tag: 'nl-bijzin' },
      { t: 'cloze', s: 'Het regent, ___ neem ik de trein.', a: ['dus'], o: ['dus', 'want', 'omdat'], nl: 'Está lloviendo, así que tomo el tren.', tag: 'nl-omdat' },
      { t: 'cloze', s: 'Ik leer Nederlands, ___ ik hier wil werken.', a: ['omdat'], o: ['omdat', 'want', 'dus'], nl: 'Aprendo neerlandés porque quiero trabajar aquí.', x: 'El verbo (wil werken) va al final → omdat.', tag: 'nl-bijzin' },
      { t: 'cloze', s: 'Ik werk ___ een groot bedrijf.', a: ['bij'], o: ['bij', 'voor de', 'op'], nl: 'Trabajo en una empresa grande.', tag: 'nl-omdat' },
      { t: 'cloze', s: 'Ze is blij, omdat ze een nieuwe baan ___.', a: ['heeft'], o: ['heeft', 'hebben', 'is'], nl: 'Está feliz porque tiene un empleo nuevo.', tag: 'nl-bijzin' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ik ben moe, omdat ik veel gewerkt heb.', 'Ik ben moe, omdat ik heb veel gewerkt.', 'Ik ben moe, omdat heb ik veel gewerkt.'], tag: 'nl-bijzin' },
      { t: 'mc', q: '«Soy cocinero» es…', o: ['Ik ben kok.', 'Ik ben een de kok.', 'Ik kok.'], tag: 'nl-omdat' },
      { t: 'mc', q: '«solicitar un empleo» es…', o: ['solliciteren', 'overwerken', 'vrij hebben'], tag: 'nl-omdat' },
      { t: 'tr', nl: '¿En qué trabajas?', a: ['Wat voor werk doe je?', 'Wat voor werk doe jij?', 'Wat doe je voor werk?'], tag: 'nl-omdat' },
      { t: 'tr', nl: 'Trabajo medio tiempo.', a: ['Ik werk parttime.'], tag: 'nl-omdat' },
      { t: 'tr', nl: 'Tomo la bici porque el bus es caro.', a: ['Ik neem de fiets, want de bus is duur.', 'Ik neem de fiets, omdat de bus duur is.'], tag: 'nl-omdat' },
      { t: 'tr', nl: 'Estoy cansado, así que me voy a dormir.', a: ['Ik ben moe, dus ik ga slapen.', 'Ik ben moe, dus ga ik slapen.'], tag: 'nl-omdat' },
      { t: 'order', s: 'Ik leer Nederlands, omdat ik hier wil werken.', nl: 'Aprendo neerlandés porque quiero trabajar aquí.', tag: 'nl-bijzin' },
      { t: 'match', p: [['de baas', 'el jefe'], ['het salaris', 'el sueldo'], ['de vergadering', 'la reunión'], ['de klant', 'el cliente'], ['het cv', 'el currículum']], tag: 'nl-omdat' }
    ],
    reading: {
      t: 'Vacature: receptionist', type: 'Un anuncio de trabajo',
      p: [
        ['Hotel De Zon in Eindhoven zoekt een vriendelijke receptionist. Het is een baan voor 32 uur per week.', 'El Hotel De Zon en Eindhoven busca un recepcionista amable. Es un empleo de 32 horas por semana.'],
        ['U spreekt Nederlands en Engels. Andere talen zijn een pluspunt, omdat we veel gasten uit het buitenland hebben. U hoeft geen diploma te hebben, maar wel een jaar ervaring.', 'Habla neerlandés e inglés. Otros idiomas son un punto a favor, porque tenemos muchos huéspedes del extranjero. No hace falta tener diploma, pero sí un año de experiencia.'],
        ['U moet soms in het weekend werken. Wij bieden een goed salaris, gratis parkeren en 25 vakantiedagen. Stuur uw cv en een korte brief naar het hotel.', 'A veces tiene que trabajar el fin de semana. Ofrecemos un buen sueldo, estacionamiento gratis y 25 días de vacaciones. Envíe su currículum y una carta corta al hotel.']
      ],
      gl: [['de vacature', 'la vacante'], ['het pluspunt', 'el punto a favor'], ['de gasten', 'los huéspedes'], ['bieden', 'ofrecer']],
      q: [
        { t: 'mc', q: 'Hoeveel uur per week is de baan?', o: ['32 uur', '40 uur', '25 uur'] },
        { t: 'mc', q: 'Waarom zijn andere talen een pluspunt?', o: ['Omdat er veel gasten uit het buitenland zijn', 'Omdat het hotel in België is', 'Omdat de baas Spaans spreekt'] },
        { t: 'mc', q: 'Moet je een diploma hebben?', o: ['Nee, dat hoeft niet', 'Ja, in toerisme', 'Ja, een universitair diploma'] }
      ]
    },
    say: [['Wat voor werk doe je?', '¿En qué trabajas?'], ['Ik werk parttime in een hotel.', 'Trabajo medio tiempo en un hotel.'], ['Ik leer Nederlands, omdat ik hier wil werken.', 'Aprendo neerlandés porque quiero trabajar aquí.']],
    task: { nl: 'Describe tu trabajo (o el que te gustaría tener): qué haces, cuántas horas, y por qué te gusta. Usa omdat al menos dos veces.', model: 'Ik ben receptionist bij een tandarts. Ik werk 24 uur per week. Ik vind mijn werk leuk, omdat ik met mensen praat. Ik werk niet in het weekend, dus heb ik veel tijd voor mijn familie. Mijn collega’s zijn aardig.' },
    scenario: { nl: 'Tienes una entrevista de trabajo en un hotel de Eindhoven.', role: 'Je bent mevrouw Bakker, manager van een hotel in Eindhoven. Doe een eenvoudig sollicitatiegesprek: vraag naar ervaring, talen en waarom de kandidaat bij jullie wil werken (laat "omdat" gebruiken). Spreek eenvoudig Nederlands (A2) en gebruik "u".', goal: 'Habla de tu experiencia y explica por qué quieres el trabajo (usa omdat).' }
  });

  /* ───────────────────────── A2 · 7 ───────────────────────── */
  U({
    id: 'nl-a2-07', level: 'A2', icon: '📸', title: 'Toen ik klein was', nl: 'Cuando era niño',
    goals: ['Usar el imperfectum para contar historias y costumbres', 'Formar el imperfectum regular (-te / -de)', 'Aprender las formas irregulares más comunes'],
    vocab: [
      ['vroeger', 'antes / antiguamente'], ['toen', 'entonces / cuando (pasado)'], ['de jeugd', 'la infancia / juventud'], ['het dorp', 'el pueblo'], ['de basisschool', 'la escuela primaria'],
      ['de oma', 'la abuela'], ['de opa', 'el abuelo'], ['het speelgoed', 'los juguetes'], ['buiten spelen', 'jugar afuera'], ['klimmen', 'trepar'], ['de boom', 'el árbol'], ['verlegen', 'tímido'],
      ['ondeugend', 'travieso'], ['elke zomer', 'cada verano'], ['altijd', 'siempre'], ['vaak', 'a menudo'], ['woonde', 'vivía'], ['werkte', 'trabajaba'], ['speelde', 'jugaba'],
      ['was / waren', 'era / eran (estaba / estaban)'], ['had / hadden', 'tenía / tenían'], ['ging / gingen', 'iba / iban'], ['kwam / kwamen', 'venía / venían'], ['zag', 'veía / vi']
    ],
    grammar: [
      { t: 'El imperfectum regular: -te / -de', es: 'Het imperfectum',
        html: `<p>El <b>imperfectum</b> se usa para <b>contar historias</b> y para describir cómo eran las cosas antes (como el pretérito imperfecto en español: <i>vivía, jugaba</i>).</p>
<p>Raíz + <b>-te</b> o <b>-de</b> (singular) / <b>-ten</b> o <b>-den</b> (plural). La regla es otra vez <b>’t kofschip</b>: werk → werk<b>te</b>, speel → speel<b>de</b>, woon → woon<b>de</b>.</p>`,
        table: [['infinitivo', 'ik / jij / hij', 'wij / jullie / zij'], ['werken', 'werkte', 'werkten'], ['wonen', 'woonde', 'woonden'], ['spelen', 'speelde', 'speelden'], ['fietsen', 'fietste', 'fietsten']],
        sum: 'Ik woonde in Panama. Wij speelden buiten.',
        ex: [['Vroeger woonde ik in een klein dorp.', 'Antes vivía en un pueblo pequeño.'], ['Mijn opa werkte op een boerderij.', 'Mi abuelo trabajaba en una granja.']] },
      { t: 'Imperfectum irregular', es: 'Sterke werkwoorden',
        html: `<p>Los verbos irregulares cambian la vocal y no llevan -te/-de. Los más importantes:</p>
<p><b>zijn → was / waren</b> · <b>hebben → had / hadden</b> · <b>gaan → ging / gingen</b> · <b>komen → kwam / kwamen</b> · <b>zien → zag / zagen</b> · <b>eten → at / aten</b>.</p>`,
        table: [['infinitivo', 'singular', 'plural'], ['zijn', 'was', 'waren'], ['hebben', 'had', 'hadden'], ['gaan', 'ging', 'gingen'], ['komen', 'kwam', 'kwamen'], ['eten', 'at', 'aten']],
        ex: [['Toen ik klein was, had ik een hond.', 'Cuando era niña, tenía un perro.'], ['Elke zomer gingen we naar de zee.', 'Cada verano íbamos al mar.']] },
      { t: '¿Perfectum o imperfectum?', es: 'Perfectum of imperfectum',
        html: `<p>En la conversación se usa mucho el <b>perfectum</b> para un hecho suelto: <i>Ik <b>heb</b> gisteren pizza <b>gegeten</b>.</i></p>
<p>El <b>imperfectum</b> se usa para <b>historias</b>, costumbres de antes y descripciones: <i>Toen ik klein <b>was</b>, <b>at</b> ik elke dag rijst.</i> Con <b>toen</b> (cuando, en el pasado) casi siempre va el imperfectum. Ojo: <i>toen</i> abre una bijzin → verbo al final.</p>`,
        table: [['perfectum (un hecho)', 'imperfectum (historia / costumbre)'], ['Ik heb Amsterdam gezien.', 'Vroeger zag ik mijn oma elke week.'], ['We zijn naar de zee gegaan.', 'Elke zomer gingen we naar de zee.']],
        ex: [['Toen ik tien jaar was, klom ik altijd in bomen.', 'Cuando tenía diez años, siempre trepaba árboles.'], ['Vroeger had niemand een mobiele telefoon.', 'Antes nadie tenía celular.']] }
    ],
    dialogue: {
      t: 'Oude foto’s', place: 'Groninga 🇳🇱',
      lines: [
        ['Daan', 'Wat een leuke foto! Ben jij dat?', '¡Qué foto tan bonita! ¿Eres tú?'],
        ['Carla', 'Ja, toen was ik zes jaar. We woonden in Chitré, een klein stadje in Panama.', 'Sí, ahí tenía seis años. Vivíamos en Chitré, una ciudad pequeña de Panamá.'],
        ['Daan', 'En wie is die man?', '¿Y quién es ese señor?'],
        ['Carla', 'Dat is mijn opa. Hij had een winkel. Ik hielp hem elke zaterdag.', 'Es mi abuelo. Tenía una tienda. Yo le ayudaba cada sábado.'],
        ['Daan', 'Leuk! Was je een ondeugend kind?', '¡Qué bien! ¿Eras una niña traviesa?'],
        ['Carla', 'Een beetje! Ik klom altijd in de mangobomen en ik kwam vaak vies thuis.', '¡Un poco! Siempre trepaba los árboles de mango y muchas veces llegaba sucia a casa.'],
        ['Daan', 'Ik was juist heel verlegen. Ik speelde altijd alleen met mijn Lego.', 'Yo, al contrario, era muy tímido. Siempre jugaba solo con mi Lego.'],
        ['Carla', 'En nu praat je de hele dag! Mensen veranderen.', '¡Y ahora hablas todo el día! La gente cambia.']
      ],
      q: [
        { t: 'mc', q: 'Waar woonde Carla toen ze klein was?', o: ['In Chitré', 'In Groningen', 'In Panama-Stad'] },
        { t: 'mc', q: 'Wat had haar opa?', o: ['Een winkel', 'Een boerderij', 'Een hond'] },
        { t: 'mc', q: 'Hoe was Daan als kind?', o: ['Heel verlegen', 'Heel ondeugend', 'Altijd vies'] }
      ]
    },
    culture: { t: 'Jugar afuera', html: `<p>Muchos niños neerlandeses van solos en bicicleta a la escuela desde los 8 o 9 años. Los padres creen que es importante ser <b>zelfstandig</b> (independiente).</p>
<p>🧒 Los abuelos de hoy cuentan: <i>«Vroeger speelden we altijd buiten, ook als het regende!»</i> Y en invierno, cuando los canales se congelaban, todos patinaban sobre el hielo.</p>` },
    ex: [
      { t: 'cloze', s: 'Vroeger ___ ik in een dorp. (wonen)', a: ['woonde'], o: ['woonde', 'woonte', 'gewoond'], nl: 'Antes vivía en un pueblo.', tag: 'nl-impf' },
      { t: 'cloze', s: 'Mijn opa ___ op een boerderij. (werken)', a: ['werkte'], o: ['werkte', 'werkde', 'werkten'], nl: 'Mi abuelo trabajaba en una granja.', x: 'Werk termina en k (’t kofschip) → -te.', tag: 'nl-impf' },
      { t: 'cloze', s: 'Wij ___ altijd buiten. (spelen)', a: ['speelden'], o: ['speelden', 'speelde', 'speelten'], nl: 'Siempre jugábamos afuera.', tag: 'nl-impf' },
      { t: 'cloze', s: 'Toen ik klein ___, had ik een hond.', a: ['was'], o: ['was', 'ben', 'waren'], nl: 'Cuando era pequeño, tenía un perro.', tag: 'nl-impfs' },
      { t: 'cloze', s: 'Elke zomer ___ we naar de zee. (gaan)', a: ['gingen'], o: ['gingen', 'gaanden', 'ging'], nl: 'Cada verano íbamos al mar.', tag: 'nl-impfs' },
      { t: 'cloze', s: 'Vroeger ___ niemand een mobiele telefoon. (hebben)', a: ['had'], o: ['had', 'hebde', 'hadden'], nl: 'Antes nadie tenía celular.', tag: 'nl-impfs' },
      { t: 'cloze', s: 'Ik ___ vaak vies thuis. (komen)', a: ['kwam'], o: ['kwam', 'komde', 'kwamen'], nl: 'Muchas veces llegaba sucio a casa.', tag: 'nl-impfs' },
      { t: 'mc', q: '«tímido» es…', o: ['verlegen', 'ondeugend', 'vies'], tag: 'nl-impf' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Toen ik tien was, woonde ik in Colón.', 'Toen ik was tien, woonde ik in Colón.', 'Toen ik tien was, ik woonde in Colón.'], tag: 'nl-impf' },
      { t: 'mc', q: 'El imperfectum de «zien» es…', o: ['zag', 'ziede', 'zien'], tag: 'nl-impfs' },
      { t: 'tr', nl: 'Antes vivía en Panamá.', a: ['Vroeger woonde ik in Panama.', 'Ik woonde vroeger in Panama.'], tag: 'nl-impf' },
      { t: 'tr', nl: 'Cuando era niña, tenía un gato.', a: ['Toen ik klein was, had ik een kat.', 'Toen ik een kind was, had ik een kat.'], tag: 'nl-impfs' },
      { t: 'tr', nl: 'Mi abuela cocinaba muy rico.', a: ['Mijn oma kookte heel lekker.', 'Mijn oma kookte erg lekker.'], tag: 'nl-impf' },
      { t: 'order', s: 'Elke zomer gingen we naar de zee.', nl: 'Cada verano íbamos al mar.', tag: 'nl-impfs' },
      { t: 'match', p: [['zijn', 'was'], ['hebben', 'had'], ['gaan', 'ging'], ['komen', 'kwam'], ['eten', 'at']], tag: 'nl-impfs' }
    ],
    reading: {
      t: 'Mijn oma vertelt', type: 'Un recuerdo',
      p: [
        ['Toen ik jong was, woonden we op een boerderij in Friesland. We hadden tien koeien, twee paarden en heel veel kippen.', 'Cuando era joven, vivíamos en una granja en Frisia. Teníamos diez vacas, dos caballos y muchísimas gallinas.'],
        ['Elke ochtend stond mijn vader om vijf uur op. Ik hielp hem en daarna fietste ik acht kilometer naar school, ook als het regende of sneeuwde.', 'Cada mañana mi papá se levantaba a las cinco. Yo le ayudaba y después iba en bici ocho kilómetros a la escuela, también cuando llovía o nevaba.'],
        ['In de winter waren de sloten bevroren. Dan schaatsten we na school tot het donker werd. We hadden geen televisie, maar we verveelden ons nooit.', 'En invierno las acequias estaban congeladas. Entonces patinábamos después de la escuela hasta que oscurecía. No teníamos televisión, pero nunca nos aburríamos.']
      ],
      gl: [['de koeien', 'las vacas'], ['stond op', 'se levantaba'], ['de sloten', 'las acequias (canales pequeños)'], ['schaatsten', 'patinábamos']],
      q: [
        { t: 'mc', q: 'Waar woonde oma toen ze jong was?', o: ['Op een boerderij in Friesland', 'In Amsterdam', 'In een dorp aan zee'] },
        { t: 'mc', q: 'Hoe ging ze naar school?', o: ['Met de fiets', 'Met de bus', 'Lopend'] },
        { t: 'mc', q: 'Wat deden ze in de winter?', o: ['Ze schaatsten', 'Ze keken televisie', 'Ze gingen naar het strand'] }
      ]
    },
    say: [['Toen ik klein was, woonde ik in Panama.', 'Cuando era niño, vivía en Panamá.'], ['Vroeger speelden we altijd buiten.', 'Antes siempre jugábamos afuera.'], ['Ik was een verlegen kind.', 'Era un niño tímido.']],
    task: { nl: 'Cuenta en 5 o 6 frases cómo era tu infancia: dónde vivías, cómo eras, qué hacías siempre. Usa el imperfectum.', model: 'Toen ik klein was, woonde ik in Santiago de Veraguas. Ik had twee broers. We speelden altijd voetbal op straat. Mijn moeder werkte in een school. Elke zondag gingen we naar mijn oma. Ik was een ondeugend kind!' },
    scenario: { nl: 'Un amigo neerlandés mira fotos viejas contigo y te pregunta por tu infancia.', role: 'Je bent Daan, een vriend uit Groningen. Jullie kijken naar oude foto’s. Vraag naar de jeugd van de leerling (waar woonde je, hoe was je, wat deed je altijd) en vertel ook over jouw jeugd in het imperfectum. Spreek eenvoudig Nederlands (A2).', goal: 'Cuéntale cómo era tu infancia y pregúntale por la suya.' }
  });

  /* ───────────────────────── A2 · 8 ───────────────────────── */
  U({
    id: 'nl-a2-08', level: 'A2', icon: '🔮', title: 'Later en straks', nl: 'El futuro',
    goals: ['Hablar del futuro con gaan, zullen y el presente', 'Explicar para qué haces algo con om … te', 'Hacer promesas y ofrecer ayuda'],
    vocab: [
      ['straks', 'dentro de un rato'], ['later', 'más tarde / en el futuro'], ['binnenkort', 'pronto'], ['volgend jaar', 'el próximo año'], ['over tien jaar', 'dentro de diez años'], ['ooit', 'algún día'],
      ['misschien', 'tal vez'], ['waarschijnlijk', 'probablemente'], ['zeker', 'seguro'], ['hopen', 'esperar (desear)'], ['van plan zijn', 'tener planeado'], ['de toekomst', 'el futuro'],
      ['verhuizen', 'mudarse'], ['trouwen', 'casarse'], ['met pensioen gaan', 'jubilarse'], ['beloven', 'prometer'], ['de droom', 'el sueño'], ['de cursus', 'el curso'], ['het diploma', 'el diploma'],
      ['sparen', 'ahorrar'], ['zullen', 'futuro / ofrecer (shall)'], ['om … te', 'para (+ infinitivo)'], ['Zal ik je helpen?', '¿Te ayudo?'], ['Ik beloof het.', 'Te lo prometo.']
    ],
    grammar: [
      { t: 'El futuro: presente, gaan y zullen', es: 'De toekomst',
        html: `<p>Lo más normal en neerlandés es usar el <b>presente</b> + una palabra de tiempo: <i>Morgen <b>werk</b> ik thuis.</i></p>
<p>Para planes: <b>gaan + infinitivo</b>: <i>Volgend jaar <b>ga</b> ik in Utrecht <b>studeren</b>.</i></p>
<p><b>zullen + infinitivo</b> es más formal o suena a promesa o predicción: <i>Het <b>zal</b> morgen <b>regenen</b>.</i> · <i>Ik <b>zal</b> je morgen <b>bellen</b>.</i></p>`,
        table: [['persona', 'zullen'], ['ik', 'zal'], ['jij / u / hij / zij', 'zult (zal) / zal'], ['wij / jullie / zij', 'zullen']],
        sum: 'Morgen werk ik. Ik ga verhuizen. Ik zal je bellen.',
        ex: [['Over twee jaar ga ik met pensioen.', 'Dentro de dos años me jubilo.'], ['Maak je geen zorgen, het zal goed gaan.', 'No te preocupes, va a salir bien.']] },
      { t: 'Zal ik…? Zullen we…?', es: 'Aanbieden en voorstellen',
        html: `<p><b>Zal ik</b> + infinitivo = ¿quieres que…? (ofrecer): <i><b>Zal ik</b> je tas <b>dragen</b>?</i> (¿Te llevo la bolsa?)</p>
<p><b>Zullen we</b> + infinitivo = ¿y si…? (proponer): <i><b>Zullen we</b> naar de film <b>gaan</b>?</i> (¿Vamos al cine?)</p>`,
        table: [['neerlandés', 'español'], ['Zal ik het raam dichtdoen?', '¿Cierro la ventana?'], ['Zullen we koffie drinken?', '¿Tomamos un café?'], ['Ik zal het niet vergeten.', 'No lo voy a olvidar.']],
        ex: [['Zal ik je helpen met de boodschappen?', '¿Te ayudo con las compras?'], ['Zullen we zaterdag gaan fietsen?', '¿Vamos en bici el sábado?']] },
      { t: 'Om … te + infinitivo: para', es: 'Om ... te',
        html: `<p>Para decir <b>para qué</b> haces algo: <b>om</b> + (complementos) + <b>te</b> + infinitivo al final.</p>
<p><i>Ik spaar geld <b>om</b> een auto <b>te kopen</b>.</i> (Ahorro dinero para comprar un carro.) · <i>Ik leer Nederlands <b>om</b> hier <b>te werken</b>.</i></p>`,
        table: [['frase', 'om … te'], ['Ik ga naar de markt', 'om groente te kopen.'], ['Ze doet een cursus', 'om een betere baan te vinden.'], ['We sparen', 'om op vakantie te gaan.']],
        ex: [['Ik bel je om je iets te vragen.', 'Te llamo para preguntarte algo.'], ['Hij gaat naar Nederland om te studeren.', 'Se va a los Países Bajos a estudiar.']] }
    ],
    dialogue: {
      t: 'Plannen voor volgend jaar', place: 'Utrecht 🇳🇱',
      lines: [
        ['Fleur', 'Wat ga jij volgend jaar doen, Valeria?', '¿Qué vas a hacer el próximo año, Valeria?'],
        ['Valeria', 'Ik ga een cursus Nederlands doen om een betere baan te vinden.', 'Voy a hacer un curso de neerlandés para encontrar un mejor empleo.'],
        ['Fleur', 'Goed plan! En ga je hier blijven wonen?', '¡Buen plan! ¿Y te vas a quedar a vivir aquí?'],
        ['Valeria', 'Waarschijnlijk wel. Maar misschien verhuis ik naar Den Haag, omdat mijn vriend daar werkt.', 'Probablemente sí. Pero tal vez me mude a La Haya, porque mi novio trabaja allá.'],
        ['Fleur', 'Gaan jullie trouwen?', '¿Se van a casar?'],
        ['Valeria', 'Ooit wel, hoop ik! Eerst sparen we om een huis te kopen.', '¡Algún día, espero! Primero ahorramos para comprar una casa.'],
        ['Fleur', 'Als je verhuist, zal ik je helpen. Ik heb een grote auto.', 'Si te mudas, te ayudo. Tengo un carro grande.'],
        ['Valeria', 'Wat lief! Zullen we nu een kopje koffie drinken om dat te vieren?', '¡Qué amable! ¿Tomamos un café ahora para celebrarlo?']
      ],
      q: [
        { t: 'mc', q: 'Waarom doet Valeria een cursus?', o: ['Om een betere baan te vinden', 'Om te trouwen', 'Om een huis te kopen'] },
        { t: 'mc', q: 'Waarom verhuist ze misschien naar Den Haag?', o: ['Omdat haar vriend daar werkt', 'Omdat het goedkoper is', 'Omdat haar familie daar woont'] },
        { t: 'mc', q: 'Hoe zal Fleur helpen?', o: ['Met haar grote auto', 'Met geld', 'Met de cursus'] }
      ]
    },
    culture: { t: 'La agenda neerlandesa', html: `<p>En los Países Bajos todo se planea con tiempo. Para tomar un café con una amiga, ¡muchas veces sacan la <b>agenda</b> y buscan una fecha dentro de dos o tres semanas!</p>
<p>📅 Llegar sin avisar a la casa de alguien no es muy común. Lo normal es preguntar antes: <i>Zullen we volgende week afspreken?</i> (¿Quedamos la próxima semana?)</p>` },
    ex: [
      { t: 'cloze', s: 'Volgend jaar ___ ik in Utrecht studeren.', a: ['ga'], o: ['ga', 'gaat', 'zullen'], nl: 'El próximo año voy a estudiar en Utrecht.', tag: 'nl-zullen' },
      { t: 'cloze', s: 'Ik ___ je morgen bellen. (promesa)', a: ['zal'], o: ['zal', 'zult', 'zullen'], nl: 'Mañana te llamo, te lo prometo.', tag: 'nl-zullen' },
      { t: 'cloze', s: '___ ik je tas dragen?', a: ['Zal'], o: ['Zal', 'Zullen', 'Ga'], nl: '¿Te llevo la bolsa?', tag: 'nl-zullen' },
      { t: 'cloze', s: '___ we naar de film gaan?', a: ['Zullen'], o: ['Zullen', 'Zal', 'Gaan'], nl: '¿Vamos al cine?', tag: 'nl-zullen' },
      { t: 'cloze', s: 'Ik spaar geld ___ een auto te kopen.', a: ['om'], o: ['om', 'voor', 'te'], nl: 'Ahorro dinero para comprar un carro.', tag: 'nl-omte' },
      { t: 'cloze', s: 'Ik leer Nederlands om hier ___ werken.', a: ['te'], o: ['te', 'om', 'voor'], nl: 'Aprendo neerlandés para trabajar aquí.', tag: 'nl-omte' },
      { t: 'cloze', s: 'Morgen ___ ik thuis. (werken, presente)', a: ['werk'], o: ['werk', 'werkt', 'zal werken te'], nl: 'Mañana trabajo en casa.', tag: 'nl-zullen' },
      { t: 'mc', q: '«¿Tomamos un café?» es…', o: ['Zullen we koffie drinken?', 'Zal ik koffie drinken?', 'Gaan wij koffie te drinken?'], tag: 'nl-zullen' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ik ga naar de markt om fruit te kopen.', 'Ik ga naar de markt om te kopen fruit.', 'Ik ga naar de markt voor fruit kopen.'], tag: 'nl-omte' },
      { t: 'mc', q: '«mudarse» es…', o: ['verhuizen', 'verkopen', 'vertrekken'], tag: 'nl-zullen' },
      { t: 'tr', nl: 'Te ayudo.', a: ['Ik zal je helpen.', 'Ik help je.', 'Zal ik je helpen?'], tag: 'nl-zullen' },
      { t: 'tr', nl: 'El próximo año me mudo a Ámsterdam.', a: ['Volgend jaar verhuis ik naar Amsterdam.', 'Volgend jaar ga ik naar Amsterdam verhuizen.', 'Ik verhuis volgend jaar naar Amsterdam.'], tag: 'nl-zullen' },
      { t: 'tr', nl: 'Ahorramos para comprar una casa.', a: ['We sparen om een huis te kopen.', 'Wij sparen om een huis te kopen.'], tag: 'nl-omte' },
      { t: 'tr', nl: 'Te lo prometo.', a: ['Ik beloof het.', 'Ik beloof het je.'], tag: 'nl-zullen' },
      { t: 'order', s: 'Ik doe een cursus om een betere baan te vinden.', nl: 'Hago un curso para encontrar un mejor empleo.', tag: 'nl-omte' },
      { t: 'match', p: [['straks', 'dentro de un rato'], ['binnenkort', 'pronto'], ['sparen', 'ahorrar'], ['trouwen', 'casarse'], ['de droom', 'el sueño']], tag: 'nl-zullen' }
    ],
    reading: {
      t: 'Nederland in 2050', type: 'Un artículo',
      p: [
        ['Hoe zal Nederland er in 2050 uitzien? Experts denken dat er nog meer fietsen zullen zijn, en bijna geen auto’s met benzine.', '¿Cómo serán los Países Bajos en 2050? Los expertos creen que habrá aún más bicicletas, y casi ningún carro de gasolina.'],
        ['De zee zal hoger worden. Daarom bouwt Nederland nu al sterkere dijken om het land te beschermen. Misschien zullen er ook drijvende huizen zijn.', 'El mar va a subir. Por eso los Países Bajos ya construyen diques más fuertes para proteger el país. Tal vez también haya casas flotantes.'],
        ['En het weer? Waarschijnlijk worden de zomers warmer en droger. "We gaan veel moeten veranderen," zegt een wetenschapper, "maar Nederlanders zijn goed in oplossingen."', '¿Y el clima? Probablemente los veranos serán más calientes y secos. «Vamos a tener que cambiar mucho», dice un científico, «pero los neerlandeses son buenos para encontrar soluciones».']
      ],
      gl: [['eruitzien', 'verse (aspecto)'], ['beschermen', 'proteger'], ['drijvend', 'flotante'], ['de oplossing', 'la solución']],
      q: [
        { t: 'mc', q: 'Wat zal er in 2050 bijna niet meer zijn?', o: ['Auto’s met benzine', 'Fietsen', 'Dijken'] },
        { t: 'mc', q: 'Waarom bouwt Nederland sterkere dijken?', o: ['Om het land te beschermen tegen de zee', 'Om meer huizen te bouwen', 'Voor de toeristen'] },
        { t: 'mc', q: 'Hoe worden de zomers waarschijnlijk?', o: ['Warmer en droger', 'Kouder', 'Natter'] }
      ]
    },
    say: [['Volgend jaar ga ik verhuizen.', 'El próximo año me voy a mudar.'], ['Zullen we koffie drinken?', '¿Tomamos un café?'], ['Ik leer Nederlands om hier te werken.', 'Aprendo neerlandés para trabajar aquí.']],
    task: { nl: 'Escribe tus planes y sueños para los próximos 5 años. Usa gaan, zullen y al menos dos frases con om … te.', model: 'Volgend jaar ga ik een cursus Nederlands doen. Ik spaar geld om naar Nederland te reizen. Misschien ga ik daar werken. Over vijf jaar zal ik goed Nederlands spreken. Ik hoop ooit een eigen huis te kopen.' },
    scenario: { nl: 'Una amiga neerlandesa te pregunta por tus planes para el próximo año.', role: 'Je bent Fleur, een vriendin uit Utrecht. Vraag naar de plannen van de leerling voor volgend jaar en waarom (laat om … te gebruiken). Bied hulp aan met "Zal ik…?" en stel iets voor met "Zullen we…?". Spreek eenvoudig Nederlands (A2).', goal: 'Cuéntale tus planes y para qué los haces (usa om … te).' }
  });

  /* ───────────────────────── A2 · 9 ───────────────────────── */
  U({
    id: 'nl-a2-09', level: 'A2', icon: '🍳', title: 'Lekker koken', nl: '¡A cocinar!',
    goals: ['Hablar de cantidades con er (Ik heb er drie)', 'Usar veel, weinig, een beetje y genoeg', 'Entender y dar una receta'],
    vocab: [
      ['het meel', 'la harina'], ['de suiker', 'el azúcar'], ['het zout', 'la sal'], ['de peper', 'la pimienta'], ['de boter', 'la mantequilla'], ['de olie', 'el aceite'], ['de rijst', 'el arroz'],
      ['de bonen', 'los frijoles'], ['de ui', 'la cebolla'], ['de knoflook', 'el ajo'], ['de tomaat', 'el tomate'], ['het ei / de eieren', 'el huevo / los huevos'], ['de aardappel', 'la papa'],
      ['een kopje', 'una taza'], ['een lepel', 'una cuchara(da)'], ['een snufje', 'una pizca'], ['snijden', 'cortar / picar'], ['bakken', 'freír / hornear'], ['koken', 'hervir / cocinar'],
      ['roeren', 'revolver'], ['toevoegen', 'añadir / agregar'], ['de pan', 'la olla / la sartén'], ['de oven', 'el horno'], ['het recept', 'la receta']
    ],
    grammar: [
      { t: 'Er + cantidad', es: 'Er bij hoeveelheden',
        html: `<p>Cuando dices un número o una cantidad <b>sin repetir el sustantivo</b>, hace falta <b>er</b>:</p>
<p><i>Hoeveel eieren heb je? — Ik heb <b>er</b> drie.</i> (Tengo tres.) · <i>Heb je appels? — Ja, ik heb <b>er</b> veel.</i> · <i>Nee, ik heb <b>er</b> geen.</i></p>
<p>Es como el «de ellos» que no decimos en español. ¡Los neerlandeses no lo olvidan nunca!</p>`,
        table: [['pregunta', 'respuesta con er'], ['Hoeveel uien heb je?', 'Ik heb er twee.'], ['Zijn er nog tomaten?', 'Ja, er zijn er nog vijf.'], ['Heb je eieren?', 'Nee, ik heb er geen.']],
        sum: 'Ik heb er drie. Ik heb er geen.',
        ex: [['Hoeveel kinderen heeft ze? — Ze heeft er twee.', '¿Cuántos hijos tiene? — Tiene dos.'], ['Ik wil een appel. Heb jij er nog een?', 'Quiero una manzana. ¿Te queda una?']] },
      { t: 'Veel, weinig, een beetje, genoeg', es: 'Hoeveelheden',
        html: `<p><b>veel</b> = mucho / muchos · <b>weinig</b> = poco / pocos · <b>een beetje</b> = un poco · <b>genoeg</b> = suficiente · <b>te veel</b> = demasiado.</p>
<p>En neerlandés funcionan con contables e incontables: <i>veel rijst, veel eieren, weinig zout, weinig uien</i>. Para medir: <i>een kopje rijst, een lepel suiker, een snufje zout</i>.</p>`,
        table: [['neerlandés', 'español'], ['veel water', 'mucha agua'], ['weinig suiker', 'poca azúcar'], ['een beetje zout', 'un poco de sal'], ['genoeg tijd', 'suficiente tiempo']],
        ex: [['Doe er een beetje zout bij.', 'Ponle un poco de sal.'], ['We hebben niet genoeg eieren.', 'No tenemos suficientes huevos.']] },
      { t: 'La receta: imperativo e infinitivo', es: 'Het recept',
        html: `<p>En las recetas neerlandesas se usa el <b>imperativo</b> (<i>Snijd de ui.</i>) o, muy a menudo, el <b>infinitivo al final</b>: <i>De ui snijden. De rijst 20 minuten koken.</i></p>
<p>Palabras de orden: <b>eerst</b> (primero), <b>dan / daarna</b> (luego), <b>tot slot</b> (por último). Después de estas palabras, el verbo va en segundo lugar: <i>Daarna <b>bak</b> je de ui.</i></p>`,
        table: [['imperativo', 'infinitivo'], ['Snijd de ui.', 'De ui snijden.'], ['Kook de rijst.', 'De rijst koken.'], ['Voeg zout toe.', 'Zout toevoegen.']],
        ex: [['Eerst snijd je de ui en de knoflook.', 'Primero cortas la cebolla y el ajo.'], ['Daarna de aardappels twintig minuten koken.', 'Luego hervir las papas veinte minutos.']] }
    ],
    dialogue: {
      t: 'Sancocho koken', place: 'Ámsterdam 🇳🇱',
      lines: [
        ['Jeroen', 'Wat hebben we nodig voor die Panamese soep?', '¿Qué necesitamos para esa sopa panameña?'],
        ['Itzel', 'Voor sancocho hebben we kip, yuca, een ui, een beetje knoflook en veel koriander nodig.', 'Para el sancocho necesitamos pollo, yuca, una cebolla, un poco de ajo y mucho culantro.'],
        ['Jeroen', 'Hoeveel uien hebben we?', '¿Cuántas cebollas tenemos?'],
        ['Itzel', 'We hebben er twee. Dat is genoeg.', 'Tenemos dos. Es suficiente.'],
        ['Jeroen', 'En yuca? Ik zie er geen.', '¿Y yuca? No veo ninguna.'],
        ['Itzel', 'Geen probleem. Op de markt verkopen ze het. Ik haal het straks.', 'No hay problema. En el mercado la venden. Voy a buscarla dentro de un rato.'],
        ['Jeroen', 'Wat moet ik eerst doen?', '¿Qué tengo que hacer primero?'],
        ['Itzel', 'Eerst snijd je de ui en de knoflook. Daarna kook je de kip met een snufje zout.', 'Primero cortas la cebolla y el ajo. Luego hierves el pollo con una pizca de sal.'],
        ['Jeroen', 'Dat is een enorme pan! Voor hoeveel mensen is dat?', '¡Es una olla enorme! ¿Para cuántas personas es?'],
        ['Itzel', 'Panamezen koken altijd te veel. Jouw vrienden zullen het lekker vinden!', 'Los panameños siempre cocinamos de más. ¡A tus amigos les va a encantar!']
      ],
      q: [
        { t: 'mc', q: 'Hoeveel uien hebben ze?', o: ['Twee', 'Geen', 'Vijf'] },
        { t: 'mc', q: 'Wat hebben ze niet?', o: ['Yuca', 'Kip', 'Knoflook'] },
        { t: 'mc', q: 'Wat moet Jeroen eerst doen?', o: ['De ui en de knoflook snijden', 'Naar de markt gaan', 'De kip koken'] }
      ]
    },
    culture: { t: 'La comida neerlandesa', html: `<p>Los neerlandeses cenan temprano, a las 6, y a mediodía comen algo sencillo: un <b>broodje kaas</b> (pan con queso). Un plato típico de invierno es el <b>stamppot</b>: puré de papas mezclado con verduras y una salchicha.</p>
<p>🧀 ¿Y el dulce? El <b>hagelslag</b>: chispas de chocolate sobre pan con mantequilla, ¡también para los adultos y en el desayuno!</p>` },
    ex: [
      { t: 'cloze', s: 'Hoeveel eieren heb je? — Ik heb ___ drie.', a: ['er'], o: ['er', 'het', 'ze'], nl: '¿Cuántos huevos tienes? — Tengo tres.', tag: 'nl-erq' },
      { t: 'cloze', s: 'Heb je tomaten? — Nee, ik heb er ___.', a: ['geen'], o: ['geen', 'niet', 'nee'], nl: '¿Tienes tomates? — No, no tengo.', tag: 'nl-erq' },
      { t: 'cloze', s: 'Doe er een ___ zout bij.', a: ['beetje'], o: ['beetje', 'weinig', 'veel'], nl: 'Ponle un poco de sal.', tag: 'nl-veel' },
      { t: 'cloze', s: 'We hebben niet ___ eieren.', a: ['genoeg'], o: ['genoeg', 'beetje', 'te'], nl: 'No tenemos suficientes huevos.', tag: 'nl-veel' },
      { t: 'cloze', s: 'Ik drink ___ water. (mucha)', a: ['veel'], o: ['veel', 'weinig', 'genoeg'], nl: 'Tomo mucha agua.', tag: 'nl-veel' },
      { t: 'cloze', s: 'Eerst ___ je de ui. (snijden)', a: ['snijd'], o: ['snijd', 'snijdt', 'snijden'], nl: 'Primero cortas la cebolla.', x: 'Con je después del verbo, sin -t: snijd je.', tag: 'nl-veel' },
      { t: 'cloze', s: 'Daarna ___ je de rijst. (koken)', a: ['kook'], o: ['kook', 'kookt', 'koken'], nl: 'Luego hierves el arroz.', tag: 'nl-veel' },
      { t: 'mc', q: '«una pizca de sal» es…', o: ['een snufje zout', 'een kopje zout', 'een stukje zout'], tag: 'nl-veel' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ik heb er twee.', 'Ik heb twee.', 'Ik heb het twee.'], x: 'Sin el sustantivo, hace falta er.', tag: 'nl-erq' },
      { t: 'mc', q: '«freír / hornear» es…', o: ['bakken', 'koken', 'roeren'], tag: 'nl-veel' },
      { t: 'tr', nl: '¿Cuántas cebollas necesitamos?', a: ['Hoeveel uien hebben we nodig?'], tag: 'nl-erq' },
      { t: 'tr', nl: 'Tengo dos.', a: ['Ik heb er twee.'], tag: 'nl-erq' },
      { t: 'tr', nl: 'Ponle un poco de azúcar.', a: ['Doe er een beetje suiker bij.', 'Voeg een beetje suiker toe.'], tag: 'nl-veel' },
      { t: 'tr', nl: 'No tenemos suficiente tiempo.', a: ['We hebben niet genoeg tijd.', 'Wij hebben niet genoeg tijd.'], tag: 'nl-veel' },
      { t: 'order', s: 'Eerst snijd je de ui en de knoflook.', nl: 'Primero cortas la cebolla y el ajo.', tag: 'nl-veel' },
      { t: 'match', p: [['het meel', 'la harina'], ['de knoflook', 'el ajo'], ['de aardappel', 'la papa'], ['de oven', 'el horno'], ['roeren', 'revolver']], tag: 'nl-veel' }
    ],
    reading: {
      t: 'Recept: pannenkoeken', type: 'Una receta',
      p: [
        ['Je hebt nodig: 250 gram meel, een halve liter melk, 2 eieren, een snufje zout en een beetje boter voor de pan. Dat is genoeg voor ongeveer acht pannenkoeken.', 'Necesitas: 250 gramos de harina, medio litro de leche, 2 huevos, una pizca de sal y un poco de mantequilla para la sartén. Alcanza para unos ocho panqueques.'],
        ['Doe het meel en het zout in een kom. Voeg de eieren en een beetje melk toe en roer goed. Doe er daarna langzaam de rest van de melk bij.', 'Pon la harina y la sal en un tazón. Agrega los huevos y un poco de leche y revuelve bien. Después añade despacio el resto de la leche.'],
        ['Smelt een beetje boter in de pan. Bak de pannenkoek aan twee kanten goudbruin. Eet hem met stroop, suiker of kaas. Eet smakelijk!', 'Derrite un poco de mantequilla en la sartén. Fríe el panqueque por los dos lados hasta que esté dorado. Cómelo con sirope, azúcar o queso. ¡Buen provecho!']
      ],
      gl: [['de kom', 'el tazón'], ['langzaam', 'despacio'], ['smelten', 'derretir'], ['goudbruin', 'dorado']],
      q: [
        { t: 'mc', q: 'Hoeveel eieren heb je nodig?', o: ['Twee', 'Acht', 'Geen'] },
        { t: 'mc', q: 'Hoeveel pannenkoeken maak je?', o: ['Ongeveer acht', 'Twee', 'Twintig'] },
        { t: 'mc', q: 'Waarmee eet je de pannenkoeken?', o: ['Met stroop, suiker of kaas', 'Met rijst', 'Met soep'] }
      ]
    },
    say: [['Hoeveel heb je er?', '¿Cuántos tienes?'], ['Ik heb er twee.', 'Tengo dos.'], ['Doe er een beetje zout bij.', 'Ponle un poco de sal.']],
    task: { nl: 'Escribe la receta de un plato típico de tu país: los ingredientes (con cantidades) y 4 o 5 pasos con eerst, daarna y tot slot.', model: 'Patacones. Je hebt twee groene bakbananen, veel olie en een beetje zout nodig. Eerst schil je de bananen en snijd je ze in stukken. Daarna bak je de stukken drie minuten. Dan druk je ze plat. Tot slot bak je ze nog een keer en doe je er zout bij.' },
    scenario: { nl: 'Un amigo de Ámsterdam quiere cocinar un plato latino contigo.', role: 'Je bent Jeroen, een vriend uit Amsterdam die samen met de leerling een Latijns-Amerikaans gerecht wil koken. Vraag welke ingrediënten jullie nodig hebben, hoeveel (laat "er" gebruiken) en wat je eerst moet doen. Spreek eenvoudig Nederlands (A2).', goal: 'Explícale qué ingredientes necesitan, cuántos, y cómo se prepara el plato.' }
  });

  /* ───────────────────────── A2 · 10 ───────────────────────── */
  U({
    id: 'nl-a2-10', level: 'A2', icon: '❤️', title: 'Vrienden en liefde', nl: 'Amigos, pareja y sentimientos',
    goals: ['Usar verbos reflexivos (zich voelen, zich vervelen…)', 'Hacer frases con als (si / cuando)', 'Hablar de relaciones y sentimientos'],
    vocab: [
      ['de vriend', 'el amigo / el novio'], ['de vriendin', 'la amiga / la novia'], ['de man', 'el esposo'], ['de vrouw', 'la esposa'], ['de beste vriend', 'el mejor amigo'], ['het afspraakje', 'la cita (romántica)'],
      ['verliefd worden', 'enamorarse'], ['het uitmaken', 'terminar (una relación)'], ['ruzie maken', 'pelear / discutir'], ['missen', 'extrañar'], ['vertrouwen', 'confiar'], ['zich voelen', 'sentirse'],
      ['zich vervelen', 'aburrirse'], ['zich haasten', 'apurarse'], ['zich vergissen', 'equivocarse'], ['zich verheugen op', 'tener ganas de'], ['blij', 'contento'], ['verdrietig', 'triste'],
      ['boos', 'enojado'], ['zenuwachtig', 'nervioso'], ['jaloers', 'celoso'], ['als', 'si / cuando'], ['Ik mis je.', 'Te extraño.'], ['appen', 'mandar un mensaje (WhatsApp)']
    ],
    grammar: [
      { t: 'Verbos reflexivos: zich', es: 'Wederkerende werkwoorden',
        html: `<p>Algunos verbos llevan un pronombre reflexivo, como en español «sentir<b>se</b>», «aburrir<b>se</b>»: <b>zich voelen</b>, <b>zich vervelen</b>, <b>zich haasten</b>.</p>
<p><i>Ik voel <b>me</b> goed.</i> · <i>Hij verveelt <b>zich</b>.</i> El pronombre va <b>después del verbo</b>.</p>`,
        table: [['persona', 'zich voelen'], ['ik', 'voel me'], ['jij / u', 'voelt je / voelt u (zich)'], ['hij / zij', 'voelt zich'], ['wij', 'voelen ons'], ['jullie', 'voelen je'], ['zij (plural)', 'voelen zich']],
        sum: 'Ik voel me blij. Hij verveelt zich.',
        ex: [['Ik voel me een beetje verdrietig vandaag.', 'Hoy me siento un poco triste.'], ['We vervelen ons nooit samen.', 'Nunca nos aburrimos juntos.']] },
      { t: 'Als: si y cuando', es: 'Als-zinnen',
        html: `<p><b>als</b> significa <b>si</b> (condición) o <b>cuando</b> (en el presente o futuro). Abre una <b>bijzin</b>: el verbo va al final.</p>
<p><i><b>Als</b> het regent, <b>blijven</b> we thuis.</i> Ojo: si la frase empieza con la parte de als, después viene <b>primero el verbo</b> (blijven we). Al revés: <i>We blijven thuis <b>als</b> het <b>regent</b>.</i></p>`,
        table: [['als + … verbo', 'verbo + sujeto'], ['Als je tijd hebt,', 'gaan we naar de film.'], ['Als ze belt,', 'zeg ik het haar.'], ['Als je naar Panama komt,', 'laat ik je het kanaal zien.']],
        ex: [['Als je wilt, kom ik morgen langs.', 'Si quieres, mañana paso por tu casa.'], ['Ik app je als ik thuis ben.', 'Te escribo cuando llegue a casa.']] },
      { t: 'Hablar de sentimientos', es: 'Gevoelens',
        html: `<p>Con <b>zijn</b>: <i>Ik <b>ben</b> blij / boos / verdrietig / zenuwachtig.</i> Con <b>zich voelen</b>: <i>Ik <b>voel me</b> goed / slecht / alleen.</i></p>
<p>Expresiones útiles: <i>Ik mis je.</i> (te extraño) · <i>Ik verheug me op het weekend.</i> (tengo ganas del fin de semana) · <i>Ik ben verliefd op hem.</i> (estoy enamorada de él)</p>`,
        table: [['neerlandés', 'español'], ['Ik ben verliefd op jou.', 'Estoy enamorado de ti.'], ['Ik verheug me op je bezoek.', 'Tengo muchas ganas de tu visita.'], ['Wees niet jaloers!', '¡No seas celoso!']],
        ex: [['Ik ben zenuwachtig, want ik ontmoet zijn ouders.', 'Estoy nerviosa, porque voy a conocer a sus papás.'], ['Hoe voel je je? — Veel beter, dank je.', '¿Cómo te sientes? — Mucho mejor, gracias.']] }
    ],
    dialogue: {
      t: 'Videobellen', place: 'Ámsterdam 🇳🇱 – Panamá 🇵🇦',
      lines: [
        ['Thijs', 'Hoi schat! Ik mis je zo.', '¡Hola, amor! Te extraño tanto.'],
        ['Daniela', 'Ik mis jou ook! Hoe voel je je? Gisteren was je ziek.', '¡Yo también te extraño! ¿Cómo te sientes? Ayer estabas enfermo.'],
        ['Thijs', 'Veel beter. En ik heb nieuws: als mijn baas ja zegt, kom ik in december naar Panama!', 'Mucho mejor. Y tengo noticias: ¡si mi jefe dice que sí, voy a Panamá en diciembre!'],
        ['Daniela', 'Echt? Wat leuk! Ik verheug me er nu al op.', '¿En serio? ¡Qué bien! Ya tengo muchas ganas.'],
        ['Thijs', 'Ik app je zodra ik het weet.', 'Te escribo en cuanto lo sepa.'],
        ['Daniela', 'Als je komt, gaan we naar Bocas del Toro. En je ontmoet mijn ouders.', 'Si vienes, vamos a Bocas del Toro. Y conoces a mis papás.'],
        ['Thijs', 'Je ouders? Dan word ik zenuwachtig! Mijn Spaans is niet zo goed.', '¿Tus papás? ¡Ahí me pongo nervioso! Mi español no es tan bueno.'],
        ['Daniela', 'Maak je geen zorgen. Als je lacht en langzaam praat, vinden ze je geweldig.', 'No te preocupes. Si sonríes y hablas despacio, les vas a encantar.']
      ],
      q: [
        { t: 'mc', q: 'Hoe voelt Thijs zich nu?', o: ['Veel beter', 'Nog steeds ziek', 'Verdrietig'] },
        { t: 'mc', q: 'Wanneer komt Thijs misschien naar Panama?', o: ['In december', 'Volgende week', 'In januari'] },
        { t: 'mc', q: 'Waarom wordt Thijs zenuwachtig?', o: ['Omdat hij haar ouders ontmoet', 'Omdat hij niet graag vliegt', 'Omdat hij geen geld heeft'] }
      ]
    },
    culture: { t: 'El amor a la neerlandesa', html: `<p>En los Países Bajos muchas parejas viven juntas sin casarse, o hacen un <b>samenlevingscontract</b> (contrato de convivencia). En las citas es común que cada uno pague lo suyo: <b>Nederlands betalen</b> (pagar a la neerlandesa).</p>
<p>💬 Palabras cariñosas: <i>schat</i> (tesoro), <i>lieverd</i> (cariño). Y si alguien dice <i>«Je bent een lekker ding»</i>, ¡es un piropo!</p>` },
    ex: [
      { t: 'cloze', s: 'Ik voel ___ goed vandaag.', a: ['me'], o: ['me', 'mijn', 'zich'], nl: 'Hoy me siento bien.', tag: 'nl-zich' },
      { t: 'cloze', s: 'Hij verveelt ___.', a: ['zich'], o: ['zich', 'hem', 'ons'], nl: 'Él se aburre.', tag: 'nl-zich' },
      { t: 'cloze', s: 'Wij haasten ___.', a: ['ons'], o: ['ons', 'zich', 'we'], nl: 'Nos apuramos.', tag: 'nl-zich' },
      { t: 'cloze', s: 'Als het regent, ___ we thuis. (blijven)', a: ['blijven'], o: ['blijven', 'we blijven', 'blijft'], nl: 'Si llueve, nos quedamos en casa.', tag: 'nl-als' },
      { t: 'cloze', s: 'Ik app je als ik thuis ___.', a: ['ben'], o: ['ben', 'is', 'zijn'], nl: 'Te escribo cuando llegue a casa.', tag: 'nl-als' },
      { t: 'cloze', s: 'Ik verheug ___ op het weekend.', a: ['me'], o: ['me', 'mijn', 'zich'], nl: 'Tengo ganas del fin de semana.', tag: 'nl-zich' },
      { t: 'cloze', s: 'Ze is verliefd ___ hem.', a: ['op'], o: ['op', 'met', 'van'], nl: 'Está enamorada de él.', tag: 'nl-zich' },
      { t: 'mc', q: '«Te extraño» es…', o: ['Ik mis je.', 'Ik verlies je.', 'Ik vreemd je.'], tag: 'nl-zich' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Als je tijd hebt, gaan we naar de film.', 'Als je hebt tijd, we gaan naar de film.', 'Als je tijd hebt, we gaan naar de film.'], tag: 'nl-als' },
      { t: 'mc', q: '«pelear / discutir» es…', o: ['ruzie maken', 'het uitmaken', 'missen'], tag: 'nl-zich' },
      { t: 'tr', nl: '¿Cómo te sientes?', a: ['Hoe voel je je?', 'Hoe voelt u zich?'], tag: 'nl-zich' },
      { t: 'tr', nl: 'Si quieres, vamos al cine.', a: ['Als je wilt, gaan we naar de film.', 'Als jij wilt, gaan we naar de film.', 'Als je wilt, gaan we naar de bioscoop.'], tag: 'nl-als' },
      { t: 'tr', nl: 'Estoy nervioso.', a: ['Ik ben zenuwachtig.'], tag: 'nl-zich' },
      { t: 'tr', nl: 'Nunca nos aburrimos.', a: ['We vervelen ons nooit.', 'Wij vervelen ons nooit.'], tag: 'nl-zich' },
      { t: 'order', s: 'Als je naar Panama komt, laat ik je het kanaal zien.', nl: 'Si vienes a Panamá, te muestro el canal.', tag: 'nl-als' },
      { t: 'match', p: [['blij', 'contento'], ['boos', 'enojado'], ['verdrietig', 'triste'], ['jaloers', 'celoso'], ['vertrouwen', 'confiar']], tag: 'nl-zich' }
    ],
    reading: {
      t: 'Vraag het Ingrid', type: 'Una columna de consejos',
      p: [
        ['Beste Ingrid, mijn beste vriendin is altijd te laat. Vorige zaterdag heb ik een uur op haar gewacht in een restaurant. Als ik er iets van zeg, wordt ze boos. Wat moet ik doen? — Moe van het wachten, Delft', 'Querida Ingrid: mi mejor amiga siempre llega tarde. El sábado pasado la esperé una hora en un restaurante. Si le digo algo, se enoja. ¿Qué hago? — Cansada de esperar, Delft'],
        ['Beste Moe, goede vrienden zijn eerlijk tegen elkaar. Vertel haar rustig hoe je je voelt. Als je vriendelijk blijft, wordt ze waarschijnlijk niet boos.', 'Querida Cansada: los buenos amigos son sinceros entre sí. Dile con calma cómo te sientes. Si te mantienes amable, probablemente no se va a enojar.'],
        ['En maak een afspraak: als ze er na vijftien minuten niet is, bestel je zonder haar. Je hoeft je niet schuldig te voelen. Goede vriendschappen zijn het waard! — Ingrid', 'Y hagan un acuerdo: si no ha llegado a los quince minutos, pides sin ella. No tienes que sentirte culpable. ¡Las buenas amistades valen la pena! — Ingrid']
      ],
      gl: [['eerlijk', 'sincero / honesto'], ['elkaar', 'el uno al otro'], ['zich schuldig voelen', 'sentirse culpable'], ['het waard zijn', 'valer la pena']],
      q: [
        { t: 'mc', q: 'Hoe lang heeft de schrijfster gewacht?', o: ['Een uur', 'Vijftien minuten', 'De hele dag'] },
        { t: 'mc', q: 'Wat moet ze volgens Ingrid eerst doen?', o: ['Rustig vertellen hoe ze zich voelt', 'Een nieuwe vriendin zoeken', 'Nooit meer wachten'] },
        { t: 'mc', q: 'Wat doet ze als de vriendin na 15 minuten niet is?', o: ['Ze bestelt zonder haar', 'Ze gaat naar huis', 'Ze belt haar moeder'] }
      ]
    },
    say: [['Ik mis je.', 'Te extraño.'], ['Hoe voel je je?', '¿Cómo te sientes?'], ['Als je tijd hebt, gaan we uit.', 'Si tienes tiempo, salimos.']],
    task: { nl: 'Escribe un mensaje a un amigo o tu pareja que vive lejos: dile cómo te sientes y haz 3 planes con als para cuando venga.', model: 'Hoi Sam! Ik mis je. Wanneer kom je? Als je in de zomer komt, gaan we elke dag naar het strand. Als het regent, kijken we films. En als je honger hebt, kook ik sancocho voor je!' },
    scenario: { nl: 'Tu pareja (o un buen amigo) vive en Ámsterdam y hablan por videollamada.', role: 'Je bent Thijs, de partner of goede vriend van de leerling, en je woont in Amsterdam. Jullie videobellen. Zeg dat je de leerling mist, vraag hoe hij of zij zich voelt, en maak plannen met als-zinnen (een bezoek, wat jullie gaan doen). Spreek eenvoudig Nederlands (A2).', goal: 'Hablen de cómo se sienten y hagan planes con als.' }
  });
})(window.SPT);
