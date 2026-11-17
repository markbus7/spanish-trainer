/* Neerlandés B1, unidades 1–5 (neerlandés de los Países Bajos, explicaciones en español latinoamericano). Mismo formato que a1.js. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('nl-es')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'nl-dat': 'bijzin con dat / of', 'nl-mening': 'dar tu opinión', 'nl-rel': 'relativos die / dat', 'nl-waar': 'waar / waarin',
    'nl-passief': 'la voz pasiva (worden)', 'nl-zou': 'zou / zouden (condicional)', 'nl-irreel': 'als ik … was / had', 'nl-pqp': 'plusquamperfectum (had / was + participio)'
  });

  /* ───────────────────────── B1 · 1 ───────────────────────── */
  U({
    id: 'nl-b1-01', level: 'B1', icon: '🗣️', title: 'Wat vind jij?', nl: 'Dar tu opinión',
    goals: ['Dar tu opinión con Ik vind dat… / Ik denk dat…', 'Hacer bijzinnen con dat y of', 'Estar de acuerdo o no'],
    vocab: [
      ['vinden', 'opinar / parecer'], ['denken', 'pensar / creer'], ['de mening', 'la opinión'], ['het eens zijn', 'estar de acuerdo'], ['het oneens zijn', 'no estar de acuerdo'],
      ['volgens mij', 'en mi opinión'], ['eigenlijk', 'en realidad'], ['natuurlijk', 'por supuesto'], ['juist', 'precisamente / al contrario'], ['het voordeel', 'la ventaja'],
      ['het nadeel', 'la desventaja'], ['belangrijk', 'importante'], ['eerlijk', 'justo / sincero'], ['onzin', 'tontería'], ['de regel', 'la regla'], ['het verbod', 'la prohibición'],
      ['de maatschappij', 'la sociedad'], ['de discussie', 'la discusión'], ['overtuigen', 'convencer'], ['twijfelen', 'dudar'], ['Dat klopt.', 'Así es. / Es correcto.'],
      ['Daar heb je gelijk in.', 'En eso tienes razón.'], ['Dat ben ik niet met je eens.', 'No estoy de acuerdo contigo.'], ['Ik weet het niet zeker.', 'No estoy seguro.']
    ],
    grammar: [
      { t: 'Ik vind dat… / Ik denk dat…', es: 'Bijzin met dat',
        html: `<p>Para dar tu opinión: <b>Ik vind dat</b> / <b>Ik denk dat</b> / <b>Ik weet dat</b> + bijzin. Recuerda: en la bijzin el verbo conjugado va al <b>final</b>.</p>
<p><i>Ik vind dat fietsen gezond <b>is</b>.</i> · <i>Ik denk dat het morgen gaat <b>regenen</b>.</i> · <i>Ik denk dat hij het al <b>heeft</b> gezien.</i></p>`,
        table: [['frase principal', 'bijzin (verbo al final)'], ['Ik vind', 'dat Amsterdam te duur is.'], ['Ik denk', 'dat ze morgen komt.'], ['Ik weet', 'dat jij gelijk hebt.']],
        sum: 'Ik vind dat het te duur is.',
        ex: [['Ik vind dat iedereen Nederlands moet leren.', 'Opino que todo el mundo debería aprender neerlandés.'], ['Ik denk niet dat het een goed idee is.', 'No creo que sea una buena idea.']] },
      { t: 'Of: preguntas indirectas', es: 'Bijzin met of',
        html: `<p>Para una pregunta de sí/no dentro de otra frase se usa <b>of</b> (si): <i>Weet jij <b>of</b> de winkel open <b>is</b>?</i> · <i>Ik vraag me af <b>of</b> hij komt.</i></p>
<p>Con palabras de pregunta (wat, waar, wanneer…) también es bijzin: <i>Weet jij <b>waar</b> het station <b>is</b>?</i></p>`,
        table: [['pregunta directa', 'pregunta indirecta'], ['Is hij thuis?', 'Ik weet niet of hij thuis is.'], ['Waar woont ze?', 'Weet jij waar ze woont?'], ['Hoe laat begint het?', 'Kun je zeggen hoe laat het begint?']],
        ex: [['Ik weet niet of ik tijd heb.', 'No sé si tengo tiempo.'], ['Weet u hoe laat de bus vertrekt?', '¿Sabe a qué hora sale el bus?']] },
      { t: 'De acuerdo o no', es: 'Het eens of oneens zijn',
        html: `<p><b>Ik ben het met je eens.</b> (estoy de acuerdo contigo) · <b>Ik ben het niet met je eens.</b> · <b>Daar heb je gelijk in.</b> · <b>Dat klopt.</b> · <b>Ja, maar…</b></p>
<p>Ojo: <i>vinden</i> se usa para opiniones (<i>Ik vind het mooi</i>), <i>denken</i> para lo que crees que es verdad (<i>Ik denk dat hij ziek is</i>).</p>`,
        table: [['neerlandés', 'español'], ['Volgens mij…', 'En mi opinión…'], ['Aan de ene kant… aan de andere kant…', 'Por un lado… por otro lado…'], ['Ik twijfel.', 'Tengo dudas.']],
        ex: [['Daar heb je gelijk in, maar het is wel duur.', 'En eso tienes razón, pero sí es caro.'], ['Volgens mij is dat onzin.', 'En mi opinión, eso es una tontería.']] }
    ],
    dialogue: {
      t: 'Discussie op het werk', place: 'Den Haag 🇳🇱',
      lines: [
        ['Ruben', 'Heb je gehoord dat de baas de koffieautomaat wil weghalen?', '¿Supiste que el jefe quiere quitar la máquina de café?'],
        ['Mariana', 'Ja! Ik vind dat echt onzin. Koffie is heel belangrijk voor de sfeer.', '¡Sí! Me parece una tontería. El café es muy importante para el ambiente.'],
        ['Ruben', 'Daar heb je gelijk in. Maar hij zegt dat het te duur is.', 'En eso tienes razón. Pero él dice que es demasiado caro.'],
        ['Mariana', 'Ik denk niet dat dat klopt. Een automaat kost niet zo veel.', 'No creo que eso sea cierto. Una máquina no cuesta tanto.'],
        ['Ruben', 'Weet jij of de andere collega’s het ermee eens zijn?', '¿Sabes si los demás compañeros están de acuerdo?'],
        ['Mariana', 'Volgens mij is niemand het met hem eens.', 'En mi opinión, nadie está de acuerdo con él.'],
        ['Ruben', 'Zullen we een petitie maken?', '¿Hacemos una petición?'],
        ['Mariana', 'Goed idee! Maar ik vraag me af of hij hem gaat lezen…', '¡Buena idea! Pero me pregunto si la va a leer…']
      ],
      q: [
        { t: 'mc', q: 'Wat wil de baas doen?', o: ['De koffieautomaat weghalen', 'Een nieuwe automaat kopen', 'Het kantoor sluiten'] },
        { t: 'mc', q: 'Waarom wil de baas dat?', o: ['Hij zegt dat het te duur is', 'Hij drinkt geen koffie', 'De automaat is kapot'] },
        { t: 'mc', q: 'Wat stelt Ruben voor?', o: ['Een petitie maken', 'Een eigen automaat kopen', 'Met de baas praten'] }
      ]
    },
    culture: { t: 'La franqueza neerlandesa', html: `<p>Los neerlandeses dan su opinión de forma muy directa, incluso al jefe. En las reuniones todos pueden opinar y se busca un acuerdo entre todos: es el famoso <b>poldermodel</b>.</p>
<p>🗨️ Si alguien dice <i>«Dat vind ik geen goed idee»</i>, no es una ofensa: ¡solo es su opinión sincera!</p>` },
    ex: [
      { t: 'cloze', s: 'Ik vind dat Amsterdam te duur ___.', a: ['is'], o: ['is', 'zijn', 'ben'], nl: 'Opino que Ámsterdam es demasiado cara.', tag: 'nl-dat' },
      { t: 'cloze', s: 'Ik denk ___ hij morgen komt.', a: ['dat'], o: ['dat', 'of', 'die'], nl: 'Creo que viene mañana.', tag: 'nl-dat' },
      { t: 'cloze', s: 'Weet jij ___ de winkel open is?', a: ['of'], o: ['of', 'dat', 'als'], nl: '¿Sabes si la tienda está abierta?', tag: 'nl-dat' },
      { t: 'cloze', s: 'Weet jij waar ze ___? (wonen)', a: ['woont'], o: ['woont', 'wonen', 'woon'], nl: '¿Sabes dónde vive ella?', tag: 'nl-dat' },
      { t: 'cloze', s: 'Ik ben het ___ je eens.', a: ['met'], o: ['met', 'van', 'op'], nl: 'Estoy de acuerdo contigo.', tag: 'nl-mening' },
      { t: 'cloze', s: 'Daar heb je ___ in.', a: ['gelijk'], o: ['gelijk', 'recht', 'waar'], nl: 'En eso tienes razón.', tag: 'nl-mening' },
      { t: 'cloze', s: '___ mij is dat onzin.', a: ['Volgens'], o: ['Volgens', 'Voor', 'Bij'], nl: 'En mi opinión, eso es una tontería.', tag: 'nl-mening' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ik denk dat hij ziek is.', 'Ik denk dat hij is ziek.', 'Ik denk dat is hij ziek.'], tag: 'nl-dat' },
      { t: 'mc', q: '«No estoy de acuerdo contigo» es…', o: ['Ik ben het niet met je eens.', 'Ik ben niet eens met jou.', 'Ik vind je niet eens.'], tag: 'nl-mening' },
      { t: 'mc', q: '«la desventaja» es…', o: ['het nadeel', 'het voordeel', 'de regel'], tag: 'nl-mening' },
      { t: 'tr', nl: 'Creo que va a llover.', a: ['Ik denk dat het gaat regenen.', 'Ik denk dat het gaat regenen vandaag.'], tag: 'nl-dat' },
      { t: 'tr', nl: 'No sé si tengo tiempo.', a: ['Ik weet niet of ik tijd heb.'], tag: 'nl-dat' },
      { t: 'tr', nl: 'Opino que es demasiado caro.', a: ['Ik vind dat het te duur is.', 'Ik vind het te duur.'], tag: 'nl-dat' },
      { t: 'tr', nl: 'Así es.', a: ['Dat klopt.'], tag: 'nl-mening' },
      { t: 'order', s: 'Ik vind dat iedereen Nederlands moet leren.', nl: 'Opino que todo el mundo debería aprender neerlandés.', tag: 'nl-dat' },
      { t: 'match', p: [['de mening', 'la opinión'], ['het voordeel', 'la ventaja'], ['overtuigen', 'convencer'], ['twijfelen', 'dudar'], ['eerlijk', 'justo']], tag: 'nl-mening' }
    ],
    reading: {
      t: 'Geen telefoons op school?', type: 'Un artículo de opinión',
      p: [
        ['Sinds 2024 mogen leerlingen op veel Nederlandse middelbare scholen hun telefoon niet meer in de klas gebruiken. Wat vinden ouders en leerlingen daarvan?', 'Desde 2024, en muchas escuelas secundarias neerlandesas los alumnos ya no pueden usar el celular en clase. ¿Qué opinan los padres y los alumnos?'],
        ['"Ik vind het een goede regel," zegt moeder Anouk. "Ik merk dat mijn zoon zich beter concentreert en dat hij weer met vrienden praat in de pauze."', '«Me parece una buena regla», dice Anouk, una mamá. «Noto que mi hijo se concentra mejor y que vuelve a hablar con sus amigos en el recreo».'],
        ['Niet iedereen is het ermee eens. Leerling Sem (15): "Ik snap dat het afleidt, maar ik denk dat we ook moeten leren hoe we een telefoon goed gebruiken. Een verbod is te makkelijk."', 'No todos están de acuerdo. Sem, un alumno de 15 años: «Entiendo que distrae, pero creo que también tenemos que aprender a usar bien el celular. Una prohibición es demasiado fácil».']
      ],
      gl: [['de middelbare school', 'la escuela secundaria'], ['merken', 'notar'], ['zich concentreren', 'concentrarse'], ['afleiden', 'distraer']],
      q: [
        { t: 'mc', q: 'Wat is de nieuwe regel?', o: ['Geen telefoons in de klas', 'Geen huiswerk', 'Langere pauzes'] },
        { t: 'mc', q: 'Wat vindt Anouk van de regel?', o: ['Ze vindt het een goede regel', 'Ze vindt het onzin', 'Ze twijfelt'] },
        { t: 'mc', q: 'Wat denkt Sem?', o: ['Dat leerlingen moeten leren een telefoon goed te gebruiken', 'Dat telefoons verboden moeten worden', 'Dat school te lang duurt'] }
      ]
    },
    say: [['Ik vind dat het te duur is.', 'Opino que es demasiado caro.'], ['Daar heb je gelijk in.', 'En eso tienes razón.'], ['Weet jij of hij komt?', '¿Sabes si viene?']],
    task: { nl: 'Escribe tu opinión sobre un tema (por ejemplo: «¿celulares en la escuela, sí o no?»). Da dos argumentos con Ik vind dat… / Ik denk dat… y una ventaja y una desventaja.', model: 'Ik vind dat telefoons niet in de klas horen. Ik denk dat leerlingen zich dan beter concentreren. Een voordeel is dat ze meer met elkaar praten. Een nadeel is dat ze de telefoon soms nodig hebben voor school. Toch ben ik voor een verbod.' },
    scenario: { nl: 'Un compañero de trabajo quiere discutir una nueva regla de la empresa.', role: 'Je bent Ruben, een collega in Den Haag. Bespreek met de leerling een nieuwe regel op het werk (bijvoorbeeld: niet meer thuiswerken). Vraag naar de mening ("Wat vind jij?"), geef zelf argumenten en reageer met "Daar heb je gelijk in" of "Dat ben ik niet met je eens". Spreek Nederlands op B1-niveau.', goal: 'Da tu opinión con argumentos y reacciona a la suya.' }
  });

  /* ───────────────────────── B1 · 2 ───────────────────────── */
  U({
    id: 'nl-b1-02', level: 'B1', icon: '🏠', title: 'Het huis dat ik zoek', nl: 'Buscar casa: los relativos',
    goals: ['Unir frases con die y dat', 'Usar waar, waarin y waarop', 'Buscar y alquilar una vivienda'],
    vocab: [
      ['huren', 'alquilar (como inquilino)'], ['verhuren', 'alquilar (como dueño)'], ['de huur', 'el alquiler'], ['de huurder', 'el inquilino'], ['de verhuurder', 'el arrendador'],
      ['de woning', 'la vivienda'], ['het appartement', 'el apartamento'], ['de studio', 'el estudio'], ['de bovenwoning', 'el piso de arriba'], ['de wijk', 'el barrio'],
      ['de borg', 'el depósito'], ['gemeubileerd', 'amueblado'], ['de servicekosten', 'los gastos de comunidad'], ['inclusief', 'incluido'], ['exclusief', 'sin incluir'],
      ['de bezichtiging', 'la visita (a una vivienda)'], ['de wachtlijst', 'la lista de espera'], ['de woningnood', 'la escasez de vivienda'], ['de vierkante meter', 'el metro cuadrado'],
      ['het balkon', 'el balcón'], ['de buren', 'los vecinos'], ['inschrijven', 'empadronarse / inscribirse'], ['het contract', 'el contrato'], ['opzeggen', 'cancelar (un contrato)']
    ],
    grammar: [
      { t: 'Die y dat', es: 'Betrekkelijke voornaamwoorden',
        html: `<p>Para dar más información sobre algo: <b>die</b> para palabras <b>de</b> y para todo plural, <b>dat</b> para palabras <b>het</b> (singular). La frase de relativo es una bijzin: ¡verbo al final!</p>
<p><i>De man <b>die</b> naast mij <b>woont</b>, is kok.</i> · <i>Het huis <b>dat</b> ik <b>zoek</b>, moet een balkon hebben.</i> · <i>De mensen <b>die</b> hier <b>wonen</b>, zijn aardig.</i></p>`,
        table: [['palabra', 'relativo', 'ejemplo'], ['de-woord', 'die', 'de stad die ik mooi vind'], ['het-woord', 'dat', 'het appartement dat we huren'], ['plural', 'die', 'de huizen die te duur zijn']],
        sum: 'De man die hier woont. Het huis dat ik zoek.',
        ex: [['Ik zoek een appartement dat niet te duur is.', 'Busco un apartamento que no sea demasiado caro.'], ['De buurvrouw die boven woont, is erg aardig.', 'La vecina que vive arriba es muy amable.']] },
      { t: 'Waar, waarin, waarop', es: 'Waar + voorzetsel',
        html: `<p>Para lugares se usa <b>waar</b>: <i>De wijk <b>waar</b> ik woon, is rustig.</i></p>
<p>Con una preposición, en lugar de <s>in die</s> se dice <b>waar + preposición</b>: <i>Het huis <b>waarin</b> ik ben opgegroeid.</i> (la casa en la que crecí) · <i>De stoel <b>waarop</b> je zit.</i> Para personas: <b>preposición + wie</b>: <i>de vriend <b>met wie</b> ik woon</i>.</p>`,
        table: [['español', 'neerlandés'], ['el barrio donde vivo', 'de wijk waar ik woon'], ['la casa en la que vivo', 'het huis waarin ik woon'], ['la amiga con la que vivo', 'de vriendin met wie ik woon']],
        ex: [['Dit is het café waar we elkaar hebben ontmoet.', 'Este es el café donde nos conocimos.'], ['Het bed waarop ik slaap, is te klein.', 'La cama en la que duermo es demasiado pequeña.']] },
      { t: 'Explicar algo que no sabes decir', es: 'Omschrijven',
        html: `<p>¿No sabes una palabra? Descríbela con un relativo: <i>Het is <b>iets waarmee</b> je… (algo con lo que…)</i> · <i>Het is <b>iemand die</b>… (alguien que…)</i> · <i>Het is <b>een plek waar</b>… (un lugar donde…)</i></p>`,
        table: [['descripción', 'palabra'], ['iemand die een huis verhuurt', 'de verhuurder'], ['iets waarmee je de deur opent', 'de sleutel'], ['een plek waar je boeken leent', 'de bibliotheek']],
        ex: [['Het is iets waarmee je de muur verft.', 'Es algo con lo que pintas la pared.'], ['Het is iemand die je huis schoonmaakt.', 'Es alguien que limpia tu casa.']] }
    ],
    dialogue: {
      t: 'De bezichtiging', place: 'Utrecht 🇳🇱',
      lines: [
        ['Makelaar', 'Welkom! Dit is het appartement dat ik u aan de telefoon heb beschreven.', '¡Bienvenida! Este es el apartamento que le describí por teléfono.'],
        ['Sofía', 'Mooi licht! Is de huur inclusief servicekosten?', '¡Qué buena luz! ¿El alquiler incluye los gastos de comunidad?'],
        ['Makelaar', 'Nee, die zijn exclusief. Dat is zestig euro per maand extra.', 'No, no están incluidos. Son sesenta euros extra al mes.'],
        ['Sofía', 'En hoe zijn de buren die hier wonen?', '¿Y cómo son los vecinos que viven aquí?'],
        ['Makelaar', 'Rustig. Boven woont een ouder stel dat al dertig jaar in dit gebouw woont.', 'Tranquilos. Arriba vive una pareja mayor que lleva treinta años en este edificio.'],
        ['Sofía', 'En de wijk waar het appartement ligt, is die veilig?', '¿Y el barrio donde está el apartamento, es seguro?'],
        ['Makelaar', 'Heel veilig. De supermarkt waar iedereen boodschappen doet, is om de hoek.', 'Muy seguro. El supermercado donde todos hacen las compras está a la vuelta.'],
        ['Sofía', 'Perfect. Wat moet ik betalen als borg?', 'Perfecto. ¿Cuánto tengo que pagar de depósito?'],
        ['Makelaar', 'Twee maanden huur. Maar er zijn nog twintig andere mensen die het willen huren…', 'Dos meses de alquiler. Pero hay otras veinte personas que lo quieren alquilar…']
      ],
      q: [
        { t: 'mc', q: 'Zijn de servicekosten inclusief?', o: ['Nee, ze zijn zestig euro extra', 'Ja', 'Er zijn geen servicekosten'] },
        { t: 'mc', q: 'Wie woont er boven?', o: ['Een ouder stel', 'Een student', 'De makelaar'] },
        { t: 'mc', q: 'Hoeveel is de borg?', o: ['Twee maanden huur', 'Zestig euro', 'Eén maand huur'] }
      ]
    },
    culture: { t: 'La escasez de vivienda', html: `<p>En los Países Bajos hay <b>woningnood</b>: faltan casas, sobre todo en las ciudades grandes. Para una vivienda social a veces hay que esperar años en una <b>wachtlijst</b>, y a una visita pueden ir treinta personas.</p>
<p>🏠 Importante: al mudarte tienes que inscribirte en la municipalidad (<b>gemeente</b>) con tu nueva dirección.</p>` },
    ex: [
      { t: 'cloze', s: 'De man ___ naast mij woont, is kok.', a: ['die'], o: ['die', 'dat', 'wat'], nl: 'El hombre que vive a mi lado es cocinero.', tag: 'nl-rel' },
      { t: 'cloze', s: 'Het huis ___ ik zoek, moet een balkon hebben.', a: ['dat'], o: ['dat', 'die', 'wat'], nl: 'La casa que busco tiene que tener balcón.', tag: 'nl-rel' },
      { t: 'cloze', s: 'De mensen die hier ___, zijn aardig. (wonen)', a: ['wonen'], o: ['wonen', 'woont', 'woon'], nl: 'La gente que vive aquí es amable.', tag: 'nl-rel' },
      { t: 'cloze', s: 'De wijk ___ ik woon, is rustig.', a: ['waar'], o: ['waar', 'die', 'dat'], nl: 'El barrio donde vivo es tranquilo.', tag: 'nl-waar' },
      { t: 'cloze', s: 'Het bed ___ ik slaap, is te klein.', a: ['waarop'], o: ['waarop', 'op dat', 'dat'], nl: 'La cama en la que duermo es demasiado pequeña.', tag: 'nl-waar' },
      { t: 'cloze', s: 'De vriendin met ___ ik woon, komt uit Chili.', a: ['wie'], o: ['wie', 'die', 'waar'], nl: 'La amiga con la que vivo es de Chile.', tag: 'nl-waar' },
      { t: 'cloze', s: 'Ik zoek een appartement dat niet te duur ___.', a: ['is'], o: ['is', 'zijn', 'heeft'], nl: 'Busco un apartamento que no sea demasiado caro.', tag: 'nl-rel' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['De stad die ik het mooist vind, is Utrecht.', 'De stad dat ik het mooist vind, is Utrecht.', 'De stad die ik vind het mooist, is Utrecht.'], tag: 'nl-rel' },
      { t: 'mc', q: '«el depósito» es…', o: ['de borg', 'de huur', 'de wachtlijst'], tag: 'nl-rel' },
      { t: 'mc', q: '«Es algo con lo que abres la puerta» es…', o: ['Het is iets waarmee je de deur opent.', 'Het is iets met dat je de deur opent.', 'Het is iets die de deur opent je.'], tag: 'nl-waar' },
      { t: 'tr', nl: 'Busco un apartamento que tenga balcón.', a: ['Ik zoek een appartement dat een balkon heeft.', 'Ik zoek een appartement met een balkon.'], tag: 'nl-rel' },
      { t: 'tr', nl: 'Este es el café donde nos conocimos.', a: ['Dit is het café waar we elkaar hebben ontmoet.', 'Dit is het café waar wij elkaar hebben ontmoet.', 'Dit is het café waar we elkaar ontmoet hebben.'], tag: 'nl-waar' },
      { t: 'tr', nl: 'El alquiler no incluye los gastos.', a: ['De huur is exclusief servicekosten.', 'De huur is exclusief de servicekosten.'], tag: 'nl-rel' },
      { t: 'order', s: 'De buurvrouw die boven woont, is erg aardig.', nl: 'La vecina que vive arriba es muy amable.', tag: 'nl-rel' },
      { t: 'match', p: [['huren', 'alquilar'], ['de wijk', 'el barrio'], ['gemeubileerd', 'amueblado'], ['de bezichtiging', 'la visita'], ['opzeggen', 'cancelar']], tag: 'nl-rel' }
    ],
    reading: {
      t: 'Te huur: studio in Groningen', type: 'Un anuncio de alquiler',
      p: [
        ['Te huur: gemeubileerde studio van 28 vierkante meter in een rustige wijk, op tien minuten fietsen van het centrum. De huur is 750 euro per maand, inclusief gas, water en licht.', 'Se alquila: estudio amueblado de 28 metros cuadrados en un barrio tranquilo, a diez minutos en bici del centro. El alquiler es de 750 euros al mes, con gas, agua y luz incluidos.'],
        ['De studio heeft een eigen keuken en een badkamer die vorig jaar is gerenoveerd. Er is ook een kleine tuin die je deelt met twee andere huurders.', 'El estudio tiene cocina propia y un baño que se renovó el año pasado. También hay un jardín pequeño que compartes con otros dos inquilinos.'],
        ['Wij zoeken een rustige huurder die niet rookt en geen huisdieren heeft. De borg is één maand huur. Stuur een e-mail met een korte introductie als je wilt komen kijken.', 'Buscamos un inquilino tranquilo que no fume y no tenga mascotas. El depósito es de un mes de alquiler. Manda un correo con una presentación corta si quieres venir a verlo.']
      ],
      gl: [['te huur', 'se alquila'], ['gerenoveerd', 'renovado'], ['delen', 'compartir'], ['huisdieren', 'mascotas']],
      q: [
        { t: 'mc', q: 'Wat is inclusief?', o: ['Gas, water en licht', 'Internet', 'Niets'] },
        { t: 'mc', q: 'Met wie deel je de tuin?', o: ['Met twee andere huurders', 'Met de verhuurder', 'Met niemand'] },
        { t: 'mc', q: 'Wat voor huurder zoeken ze?', o: ['Iemand die niet rookt en geen huisdieren heeft', 'Een gezin met kinderen', 'Een student met een hond'] }
      ]
    },
    say: [['Ik zoek een appartement dat niet te duur is.', 'Busco un apartamento que no sea demasiado caro.'], ['Is de huur inclusief servicekosten?', '¿El alquiler incluye los gastos?'], ['De wijk waar ik woon, is rustig.', 'El barrio donde vivo es tranquilo.']],
    task: { nl: 'Describe la vivienda ideal que buscas y el barrio donde te gustaría vivir. Usa die, dat y waar al menos una vez cada uno.', model: 'Ik zoek een appartement dat dicht bij het station ligt. Het moet een balkon hebben waar ik in de zon kan zitten. Ik wil buren die rustig zijn. De wijk waar ik wil wonen, heeft veel parken en winkels.' },
    scenario: { nl: 'Visitas un apartamento en Utrecht con el agente inmobiliario.', role: 'Je bent een makelaar in Utrecht en laat een appartement zien. Beantwoord vragen over de huur, de servicekosten, de borg, de buren en de wijk. Gebruik relatieve bijzinnen (die, dat, waar). Spreek Nederlands op B1-niveau en gebruik "u".', goal: 'Haz preguntas sobre el apartamento, el precio y el barrio.' }
  });

  /* ───────────────────────── B1 · 3 ───────────────────────── */
  U({
    id: 'nl-b1-03', level: 'B1', icon: '🏭', title: 'Hoe wordt het gemaakt?', nl: 'Cómo se hace: la voz pasiva',
    goals: ['Usar la voz pasiva con worden (presente y pasado)', 'Usar el perfectum pasivo con zijn', 'Describir procesos y productos'],
    vocab: [
      ['maken → gemaakt', 'hacer → hecho'], ['bouwen → gebouwd', 'construir → construido'], ['uitvinden → uitgevonden', 'inventar → inventado'], ['ontdekken → ontdekt', 'descubrir → descubierto'],
      ['produceren', 'producir'], ['kweken', 'cultivar'], ['exporteren', 'exportar'], ['ontwerpen → ontworpen', 'diseñar → diseñado'], ['schilderen → geschilderd', 'pintar → pintado'],
      ['stelen → gestolen', 'robar → robado'], ['schrijven → geschreven', 'escribir → escrito'], ['de fabriek', 'la fábrica'], ['de boer', 'el agricultor'], ['de kaas', 'el queso'],
      ['de melk', 'la leche'], ['de tulp', 'el tulipán'], ['de bloembollen', 'los bulbos'], ['de molen', 'el molino'], ['de eeuw', 'el siglo'], ['met de hand', 'a mano'],
      ['wereldwijd', 'en todo el mundo'], ['de veiling', 'la subasta'], ['het product', 'el producto'], ['door', 'por (quién lo hace)']
    ],
    grammar: [
      { t: 'La pasiva: worden + participio', es: 'De lijdende vorm',
        html: `<p>Cuando lo importante es la acción, no quién la hace: <b>worden</b> + <b>participio</b> al final. En español muchas veces decimos «se»: <i>se hace, se cultiva</i>.</p>
<p>Presente: <i>Kaas <b>wordt</b> in Gouda <b>gemaakt</b>.</i> Pasado (imperfectum): <i>De molen <b>werd</b> in 1740 <b>gebouwd</b>.</i></p>`,
        table: [['persona', 'presente', 'pasado'], ['singular', 'wordt gemaakt', 'werd gemaakt'], ['plural', 'worden gemaakt', 'werden gemaakt']],
        sum: 'Kaas wordt in Gouda gemaakt. De molen werd in 1740 gebouwd.',
        ex: [['In Nederland worden veel tulpen gekweekt.', 'En los Países Bajos se cultivan muchos tulipanes.'], ['Het schilderij werd in de 17e eeuw geschilderd.', 'El cuadro se pintó en el siglo XVII.']] },
      { t: 'Door: quién lo hizo', es: 'Lijdende vorm met door',
        html: `<p>Para decir quién hizo la acción se usa <b>door</b>: <i>«De Nachtwacht» werd <b>door</b> Rembrandt geschilderd.</i></p>
<p>Muchas veces no se dice: <i>Mijn fiets <b>wordt</b> steeds <b>gestolen</b>!</i></p>`,
        table: [['activa', 'pasiva'], ['Rembrandt schilderde het.', 'Het werd door Rembrandt geschilderd.'], ['Boeren maken de kaas.', 'De kaas wordt door boeren gemaakt.']],
        ex: [['Het boek werd door Anne Frank geschreven.', 'El libro lo escribió Ana Frank.'], ['De brug wordt morgen geopend door de burgemeester.', 'La alcaldesa inaugura el puente mañana.']] },
      { t: 'Pasiva en perfectum: is + participio', es: 'Lijdende vorm in het perfectum',
        html: `<p>En el perfectum la pasiva usa <b>zijn</b> (no worden): <i>Mijn fiets <b>is gestolen</b>.</i> (Me robaron la bici.) · <i>Het huis <b>is</b> vorig jaar <b>verkocht</b>.</i></p>
<p>¡Ojo! <i>De deur wordt geopend</i> = alguien la está abriendo. <i>De deur is geopend</i> = ya está abierta / la abrieron.</p>`,
        table: [['tiempo', 'ejemplo'], ['presente', 'Het huis wordt verkocht.'], ['imperfectum', 'Het huis werd verkocht.'], ['perfectum', 'Het huis is verkocht.']],
        ex: [['Mijn portemonnee is gestolen!', '¡Me robaron la billetera!'], ['Wanneer is deze kerk gebouwd?', '¿Cuándo se construyó esta iglesia?']] }
    ],
    dialogue: {
      t: 'Op de kaasmarkt', place: 'Alkmaar 🇳🇱',
      lines: [
        ['Gids', 'Welkom op de kaasmarkt van Alkmaar! Hier wordt al sinds 1593 kaas verhandeld.', '¡Bienvenidos al mercado de queso de Alkmaar! Aquí se comercia queso desde 1593.'],
        ['Diego', 'Wauw. En hoe wordt de kaas gemaakt?', '¡Guau! ¿Y cómo se hace el queso?'],
        ['Gids', 'Hij wordt gemaakt van koemelk. De melk wordt verwarmd en daarna wordt er stremsel toegevoegd.', 'Se hace con leche de vaca. Se calienta la leche y después se le agrega cuajo.'],
        ['Diego', 'En die grote ronde kazen, worden die met de hand gedragen?', '¿Y esos quesos grandes y redondos, se cargan a mano?'],
        ['Gids', 'Ja, ze worden door de kaasdragers op een soort bed van hout gedragen. Elke kaas weegt ongeveer dertien kilo.', 'Sí, los cargadores de queso los llevan en una especie de camilla de madera. Cada queso pesa unos trece kilos.'],
        ['Diego', 'Waar wordt de kaas naartoe geëxporteerd?', '¿Adónde se exporta el queso?'],
        ['Gids', 'Over de hele wereld. Nederlandse kaas wordt in meer dan honderd landen verkocht.', 'A todo el mundo. El queso neerlandés se vende en más de cien países.'],
        ['Diego', 'Mag er ook geproefd worden?', '¿Y se puede probar?'],
        ['Gids', 'Natuurlijk! Daar staat de proeverij.', '¡Claro! Allá está la degustación.']
      ],
      q: [
        { t: 'mc', q: 'Sinds wanneer wordt er kaas verhandeld in Alkmaar?', o: ['Sinds 1593', 'Sinds 1900', 'Sinds vorig jaar'] },
        { t: 'mc', q: 'Waarvan wordt de kaas gemaakt?', o: ['Van koemelk', 'Van geitenmelk', 'Van room'] },
        { t: 'mc', q: 'Hoeveel weegt een kaas?', o: ['Ongeveer dertien kilo', 'Eén kilo', 'Honderd kilo'] }
      ]
    },
    culture: { t: 'Tulipanes y quesos', html: `<p>Los Países Bajos son uno de los mayores exportadores de flores del mundo. En Aalsmeer está una de las <b>bloemenveilingen</b> (subastas de flores) más grandes del planeta: cada día se venden millones de flores.</p>
<p>🧀 Y los quesos más famosos, <b>Gouda</b> y <b>Edam</b>, llevan el nombre de ciudades neerlandesas.</p>` },
    ex: [
      { t: 'cloze', s: 'Kaas ___ in Gouda gemaakt.', a: ['wordt'], o: ['wordt', 'worden', 'is'], nl: 'En Gouda se hace queso.', tag: 'nl-passief' },
      { t: 'cloze', s: 'In Nederland ___ veel tulpen gekweekt.', a: ['worden'], o: ['worden', 'wordt', 'werd'], nl: 'En los Países Bajos se cultivan muchos tulipanes.', tag: 'nl-passief' },
      { t: 'cloze', s: 'De molen ___ in 1740 gebouwd.', a: ['werd'], o: ['werd', 'wordt', 'werden'], nl: 'El molino se construyó en 1740.', tag: 'nl-passief' },
      { t: 'cloze', s: 'Het schilderij werd ___ Rembrandt geschilderd.', a: ['door'], o: ['door', 'van', 'bij'], nl: 'El cuadro lo pintó Rembrandt.', tag: 'nl-passief' },
      { t: 'cloze', s: 'Mijn fiets ___ gestolen! (perfectum)', a: ['is'], o: ['is', 'heeft', 'wordt'], nl: '¡Me robaron la bici!', tag: 'nl-passief' },
      { t: 'cloze', s: 'Het boek werd door Anne Frank ___. (schrijven)', a: ['geschreven'], o: ['geschreven', 'geschrijfd', 'schreef'], nl: 'El libro lo escribió Ana Frank.', tag: 'nl-passief' },
      { t: 'cloze', s: 'Nederlandse kaas wordt wereldwijd ___. (verkopen)', a: ['verkocht'], o: ['verkocht', 'geverkocht', 'verkoopt'], nl: 'El queso neerlandés se vende en todo el mundo.', tag: 'nl-passief' },
      { t: 'mc', q: '«Aquí se habla neerlandés» es…', o: ['Hier wordt Nederlands gesproken.', 'Hier spreekt Nederlands.', 'Hier is Nederlands spreken.'], tag: 'nl-passief' },
      { t: 'mc', q: '«Me robaron la billetera» es…', o: ['Mijn portemonnee is gestolen.', 'Mijn portemonnee heeft gestolen.', 'Mijn portemonnee stal.'], tag: 'nl-passief' },
      { t: 'mc', q: '«la subasta» es…', o: ['de veiling', 'de fabriek', 'de molen'], tag: 'nl-passief' },
      { t: 'tr', nl: 'El queso se hace con leche.', a: ['De kaas wordt van melk gemaakt.', 'Kaas wordt van melk gemaakt.', 'Kaas wordt gemaakt van melk.', 'De kaas wordt gemaakt van melk.'], tag: 'nl-passief' },
      { t: 'tr', nl: '¿Cuándo se construyó esta casa?', a: ['Wanneer is dit huis gebouwd?', 'Wanneer werd dit huis gebouwd?'], tag: 'nl-passief' },
      { t: 'tr', nl: 'La casa se vendió el año pasado.', a: ['Het huis is vorig jaar verkocht.', 'Het huis werd vorig jaar verkocht.'], tag: 'nl-passief' },
      { t: 'order', s: 'In Nederland worden veel tulpen gekweekt.', nl: 'En los Países Bajos se cultivan muchos tulipanes.', tag: 'nl-passief' },
      { t: 'match', p: [['de fabriek', 'la fábrica'], ['de boer', 'el agricultor'], ['de eeuw', 'el siglo'], ['kweken', 'cultivar'], ['met de hand', 'a mano']], tag: 'nl-passief' }
    ],
    reading: {
      t: 'De Afsluitdijk', type: 'Un texto informativo',
      p: [
        ['In 1916 werd een groot deel van Noord-Holland overstroomd door de zee. Daarna werd besloten dat er een lange dijk gebouwd moest worden.', 'En 1916 el mar inundó una gran parte de Holanda Septentrional. Después se decidió que había que construir un dique largo.'],
        ['De Afsluitdijk werd tussen 1927 en 1932 aangelegd. Hij is 32 kilometer lang. Het werk werd grotendeels met de hand gedaan door duizenden arbeiders.', 'El Afsluitdijk se construyó entre 1927 y 1932. Mide 32 kilómetros. El trabajo lo hicieron en gran parte a mano miles de obreros.'],
        ['Door de dijk werd de zee een meer: het IJsselmeer. De laatste jaren is de dijk versterkt, omdat de zeespiegel stijgt. Hij wordt nog steeds door wetenschappers uit de hele wereld bestudeerd.', 'Gracias al dique, el mar se convirtió en un lago: el IJsselmeer. En los últimos años se reforzó el dique, porque el nivel del mar está subiendo. Científicos de todo el mundo todavía lo estudian.']
      ],
      gl: [['overstroomd', 'inundado'], ['besluiten → besloten', 'decidir → decidido'], ['aanleggen', 'construir (obras)'], ['de zeespiegel', 'el nivel del mar']],
      q: [
        { t: 'mc', q: 'Wat gebeurde er in 1916?', o: ['Noord-Holland werd overstroomd', 'De dijk werd geopend', 'Er werd een meer gegraven'] },
        { t: 'mc', q: 'Hoe lang is de Afsluitdijk?', o: ['32 kilometer', '1932 meter', '16 kilometer'] },
        { t: 'mc', q: 'Waarom is de dijk de laatste jaren versterkt?', o: ['Omdat de zeespiegel stijgt', 'Omdat hij kapot was', 'Voor de toeristen'] }
      ]
    },
    say: [['Hoe wordt het gemaakt?', '¿Cómo se hace?'], ['Kaas wordt van melk gemaakt.', 'El queso se hace con leche.'], ['Mijn fiets is gestolen.', 'Me robaron la bici.']],
    task: { nl: 'Explica cómo se hace un producto típico de tu país (café, chocolate, una artesanía…). Usa la pasiva con worden al menos 5 veces.', model: 'Molas worden door Guna-vrouwen in Panama gemaakt. Er worden verschillende lagen gekleurde stof gebruikt. De figuren worden met de hand uitgeknipt en de lagen worden aan elkaar genaaid. Molas worden aan toeristen verkocht en naar veel landen geëxporteerd.' },
    scenario: { nl: 'Un turista visita el mercado de queso de Alkmaar y tú eres el guía.', role: 'Je bent een nieuwsgierige toerist op de kaasmarkt van Alkmaar. De leerling is de gids. Stel vragen in de lijdende vorm: hoe wordt de kaas gemaakt, door wie, waar wordt hij verkocht, sinds wanneer… Spreek Nederlands op B1-niveau.', goal: 'Explícale el proceso usando la voz pasiva.' }
  });

  /* ───────────────────────── B1 · 4 ───────────────────────── */
  U({
    id: 'nl-b1-04', level: 'B1', icon: '💭', title: 'Als ik rijk was…', nl: 'Situaciones imaginarias',
    goals: ['Usar zou / zouden + infinitivo (condicional)', 'Hablar de situaciones irreales: Als ik … was / had', 'Pedir algo con cortesía y dar consejos'],
    vocab: [
      ['zou / zouden', 'condicional (-ría)'], ['de loterij', 'la lotería'], ['winnen → gewonnen', 'ganar → ganado'], ['miljoen', 'millón'], ['rijk', 'rico'], ['arm', 'pobre'],
      ['het eiland', 'la isla'], ['de villa', 'la mansión'], ['stoppen met werken', 'dejar de trabajar'], ['doneren', 'donar'], ['het goede doel', 'la causa benéfica'],
      ['onzichtbaar', 'invisible'], ['de superkracht', 'el superpoder'], ['gedachten lezen', 'leer la mente'], ['tijdreizen', 'viajar en el tiempo'], ['ik wou dat', 'ojalá'],
      ['in jouw plaats', 'en tu lugar'], ['Zou je…?', '¿Podrías…? / ¿Harías…?'], ['Zou ik…?', '¿Debería…?'], ['het liefst', 'lo que más me gustaría'], ['dromen', 'soñar'],
      ['kiezen → gekozen', 'elegir → elegido'], ['uitgeven', 'gastar'], ['de wereldreis', 'la vuelta al mundo']
    ],
    grammar: [
      { t: 'Zou / zouden + infinitivo', es: 'De voorwaardelijke wijs',
        html: `<p><b>zou</b> (singular) / <b>zouden</b> (plural) + infinitivo al final = condicional: <i>Ik <b>zou</b> een huis <b>kopen</b>.</i> (Compraría una casa.)</p>
<p>Se usa para situaciones imaginarias, deseos y peticiones corteses: <i><b>Zou</b> je het raam dicht willen <b>doen</b>?</i> (¿Podrías cerrar la ventana?)</p>`,
        table: [['persona', 'zullen → condicional'], ['ik', 'zou'], ['jij / u / hij / zij', 'zou'], ['wij / jullie / zij', 'zouden']],
        sum: 'Ik zou een huis kopen. Wij zouden reizen.',
        ex: [['Ik zou graag in Amsterdam wonen.', 'Me gustaría vivir en Ámsterdam.'], ['Zou u mij kunnen helpen?', '¿Me podría ayudar?']] },
      { t: 'Als ik rijk was…', es: 'Irreële als-zinnen',
        html: `<p>Situación imaginaria: <b>Als</b> + imperfectum (verbo al final), <b>dan</b> + zou + infinitivo.</p>
<p><i><b>Als</b> ik rijk <b>was</b>, <b>zou</b> ik een wereldreis <b>maken</b>.</i> (Si fuera rico, haría la vuelta al mundo.) · <i><b>Als</b> ik meer tijd <b>had</b>, <b>zou</b> ik vaker <b>sporten</b>.</i></p>
<p>Recuerda: después de la parte con als va primero el verbo (<b>zou ik</b>).</p>`,
        table: [['als + imperfectum', 'zou + infinitivo'], ['Als ik de loterij won,', 'zou ik stoppen met werken.'], ['Als het niet regende,', 'zouden we naar het strand gaan.'], ['Als ik jou was,', 'zou ik het doen.']],
        ex: [['Als ik kon vliegen, zou ik naar Panama vliegen.', 'Si pudiera volar, volaría a Panamá.'], ['Wat zou jij doen als je onzichtbaar was?', '¿Qué harías si fueras invisible?']] },
      { t: 'Consejos y deseos', es: 'Advies en wensen',
        html: `<p><b>Als ik jou was, zou ik…</b> = yo que tú… · <b>Ik zou…</b> (consejo suave): <i>Ik zou nog even wachten.</i> (Yo esperaría un poco.)</p>
<p>Deseos: <b>Ik wou dat</b> + imperfectum (verbo al final): <i>Ik wou dat ik meer geld <b>had</b>.</i> (Ojalá tuviera más dinero.)</p>`,
        table: [['neerlandés', 'español'], ['Als ik jou was, zou ik bellen.', 'Yo que tú, llamaría.'], ['Ik zou dat niet doen.', 'Yo no haría eso.'], ['Ik wou dat het vrijdag was.', 'Ojalá fuera viernes.']],
        ex: [['Als ik jou was, zou ik die baan nemen.', 'Yo que tú, aceptaría ese trabajo.'], ['Ik wou dat je hier was.', 'Ojalá estuvieras aquí.']] }
    ],
    dialogue: {
      t: 'Het lot', place: 'Eindhoven 🇳🇱',
      lines: [
        ['Tom', 'Ik heb een lot gekocht. De jackpot is dertig miljoen euro!', 'Compré un billete de lotería. ¡El premio mayor es de treinta millones de euros!'],
        ['Camila', 'Haha! Wat zou je doen als je won?', '¡Jaja! ¿Qué harías si ganaras?'],
        ['Tom', 'Eerst zou ik stoppen met werken. Dan zou ik een villa in Zuid-Frankrijk kopen.', 'Primero dejaría de trabajar. Después compraría una mansión en el sur de Francia.'],
        ['Camila', 'Als ik jou was, zou ik het aan niemand vertellen. Iedereen zou om geld vragen!', 'Yo que tú, no se lo diría a nadie. ¡Todo el mundo te pediría dinero!'],
        ['Tom', 'Goed punt. En jij? Wat zou jij doen?', 'Buen punto. ¿Y tú? ¿Qué harías?'],
        ['Camila', 'Ik zou mijn familie in Panama helpen en veel geld aan goede doelen geven. En misschien zou ik een klein eiland kopen.', 'Ayudaría a mi familia en Panamá y daría mucho dinero a causas benéficas. Y tal vez compraría una isla pequeña.'],
        ['Tom', 'Een eiland? Ik wou dat ik jouw fantasie had!', '¿Una isla? ¡Ojalá yo tuviera tu imaginación!'],
        ['Camila', 'Maakt niet uit. De kans dat je wint, is één op de vijftien miljoen!', 'Da igual. ¡La probabilidad de que ganes es una en quince millones!']
      ],
      q: [
        { t: 'mc', q: 'Wat zou Tom eerst doen?', o: ['Stoppen met werken', 'Een eiland kopen', 'Zijn familie helpen'] },
        { t: 'mc', q: 'Wat is het advies van Camila?', o: ['Het aan niemand vertellen', 'Een villa kopen', 'Meer loten kopen'] },
        { t: 'mc', q: 'Wat zou Camila doen?', o: ['Haar familie helpen en geld aan goede doelen geven', 'Stoppen met werken', 'Naar Frankrijk verhuizen'] }
      ]
    },
    culture: { t: 'La Postcode Loterij', html: `<p>En los Países Bajos existe la <b>Postcode Loterij</b>: si sale tu código postal, ¡ganan todos los vecinos de tu calle que participan! Por eso a veces una calle entera celebra junta.</p>
<p>🎟️ Una parte del dinero de esta lotería va a <b>goede doelen</b> (causas benéficas).</p>` },
    ex: [
      { t: 'cloze', s: 'Ik ___ een huis kopen.', a: ['zou'], o: ['zou', 'zouden', 'zal'], nl: 'Compraría una casa.', tag: 'nl-zou' },
      { t: 'cloze', s: 'Wij ___ een wereldreis maken.', a: ['zouden'], o: ['zouden', 'zou', 'zullen'], nl: 'Haríamos la vuelta al mundo.', tag: 'nl-zou' },
      { t: 'cloze', s: 'Als ik rijk ___, zou ik reizen.', a: ['was'], o: ['was', 'ben', 'zou'], nl: 'Si fuera rico, viajaría.', tag: 'nl-irreel' },
      { t: 'cloze', s: 'Als ik meer tijd had, ___ ik vaker sporten.', a: ['zou'], o: ['zou', 'ik zou', 'zal'], nl: 'Si tuviera más tiempo, haría deporte más seguido.', tag: 'nl-irreel' },
      { t: 'cloze', s: 'Als ik jou ___, zou ik bellen.', a: ['was'], o: ['was', 'ben', 'waren'], nl: 'Yo que tú, llamaría.', tag: 'nl-irreel' },
      { t: 'cloze', s: 'Ik wou dat ik meer geld ___.', a: ['had'], o: ['had', 'heb', 'zou'], nl: 'Ojalá tuviera más dinero.', tag: 'nl-irreel' },
      { t: 'cloze', s: '___ u mij kunnen helpen?', a: ['Zou'], o: ['Zou', 'Zal', 'Wil'], nl: '¿Me podría ayudar?', tag: 'nl-zou' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Als ik de loterij won, zou ik een huis kopen.', 'Als ik de loterij won, ik zou een huis kopen.', 'Als ik won de loterij, zou ik een huis kopen.'], tag: 'nl-irreel' },
      { t: 'mc', q: '«Yo no haría eso» es…', o: ['Ik zou dat niet doen.', 'Ik zal dat niet gedaan.', 'Ik zou niet dat doen te.'], tag: 'nl-zou' },
      { t: 'mc', q: '«el superpoder» es…', o: ['de superkracht', 'het goede doel', 'de loterij'], tag: 'nl-zou' },
      { t: 'tr', nl: '¿Qué harías si fueras rico?', a: ['Wat zou je doen als je rijk was?', 'Wat zou jij doen als je rijk was?', 'Wat zou u doen als u rijk was?'], tag: 'nl-irreel' },
      { t: 'tr', nl: 'Me gustaría vivir en Ámsterdam.', a: ['Ik zou graag in Amsterdam wonen.', 'Ik zou graag in Amsterdam willen wonen.'], tag: 'nl-zou' },
      { t: 'tr', nl: 'Ojalá estuvieras aquí.', a: ['Ik wou dat je hier was.', 'Ik wou dat jij hier was.'], tag: 'nl-irreel' },
      { t: 'order', s: 'Als ik jou was, zou ik die baan nemen.', nl: 'Yo que tú, aceptaría ese trabajo.', tag: 'nl-irreel' },
      { t: 'match', p: [['rijk', 'rico'], ['het eiland', 'la isla'], ['doneren', 'donar'], ['onzichtbaar', 'invisible'], ['uitgeven', 'gastar']], tag: 'nl-zou' }
    ],
    reading: {
      t: 'Welke superkracht zou jij kiezen?', type: 'Una encuesta',
      p: [
        ['We vroegen duizend Nederlanders: "Als je één superkracht kon hebben, welke zou je dan kiezen?" De antwoorden waren verrassend.', 'Les preguntamos a mil neerlandeses: «Si pudieras tener un superpoder, ¿cuál elegirías?». Las respuestas fueron sorprendentes.'],
        ['Het populairste antwoord was niet vliegen, maar tijdreizen. "Ik zou teruggaan en mijn oma nog één keer bezoeken," zei een vrouw uit Zwolle.', 'La respuesta más popular no fue volar, sino viajar en el tiempo. «Volvería atrás y visitaría a mi abuela una vez más», dijo una mujer de Zwolle.'],
        ['Maar acht procent koos voor iets heel Nederlands: nooit meer tegenwind op de fiets. "Als ik dat had, zou ik elke dag een uur eerder op mijn werk zijn," lachte een man uit Groningen.', 'Pero un ocho por ciento eligió algo muy neerlandés: no volver a tener viento en contra en la bici. «Si tuviera eso, llegaría al trabajo una hora antes cada día», se rió un hombre de Groninga.']
      ],
      gl: [['verrassend', 'sorprendente'], ['teruggaan', 'volver atrás'], ['de tegenwind', 'el viento en contra'], ['lachen', 'reír']],
      q: [
        { t: 'mc', q: 'Wat was het populairste antwoord?', o: ['Tijdreizen', 'Vliegen', 'Onzichtbaar zijn'] },
        { t: 'mc', q: 'Wat zou de vrouw uit Zwolle doen?', o: ['Haar oma nog één keer bezoeken', 'Naar Panama vliegen', 'Rijk worden'] },
        { t: 'mc', q: 'Welke "Nederlandse" superkracht kozen sommige mensen?', o: ['Nooit meer tegenwind op de fiets', 'Altijd zon', 'Gratis kaas'] }
      ]
    },
    say: [['Wat zou jij doen als je rijk was?', '¿Qué harías si fueras rico?'], ['Als ik jou was, zou ik het doen.', 'Yo que tú, lo haría.'], ['Zou u mij kunnen helpen?', '¿Me podría ayudar?']],
    task: { nl: 'Contesta: ¿qué harías si ganaras un millón de euros? ¿Y qué superpoder elegirías? Escribe 5 frases con als … zou y termina con un deseo (Ik wou dat…).', model: 'Als ik een miljoen euro won, zou ik een huis voor mijn ouders kopen. Ik zou een wereldreis maken. Als ik een superkracht kon kiezen, zou ik willen tijdreizen. Dan zou ik mijn opa weer zien. Ik wou dat ik meer vrije tijd had!' },
    scenario: { nl: 'Un amigo de Eindhoven compró lotería y sueña en voz alta.', role: 'Je bent Tom, een grappige vriend uit Eindhoven die net een lot heeft gekocht. Vraag de leerling wat hij of zij zou doen met het geld, welke superkracht hij of zij zou kiezen, en vraag om advies ("Wat zou jij doen als je mij was?"). Spreek Nederlands op B1-niveau.', goal: 'Habla de situaciones imaginarias y dale un consejo con Als ik jou was…' }
  });

  /* ───────────────────────── B1 · 5 ───────────────────────── */
  U({
    id: 'nl-b1-05', level: 'B1', icon: '📰', title: 'Wat was er gebeurd?', nl: 'Contar lo que había pasado',
    goals: ['Usar el plusquamperfectum (had / was + participio)', 'Ordenar una historia con nadat, voordat y toen', 'Entender una noticia corta'],
    vocab: [
      ['gebeuren', 'pasar / ocurrir'], ['het ongeluk', 'el accidente'], ['de inbraak', 'el robo (en una casa)'], ['de inbreker', 'el ladrón'], ['de politie', 'la policía'],
      ['de getuige', 'el testigo'], ['vergeten → vergeten', 'olvidar → olvidado'], ['verliezen → verloren', 'perder → perdido'], ['vinden → gevonden', 'encontrar → encontrado'],
      ['vertrekken → vertrokken', 'salir → salido'], ['nadat', 'después de que'], ['voordat', 'antes de que'], ['toen', 'cuando (una vez, pasado)'], ['al', 'ya'],
      ['net', 'justo / recién'], ['plotseling', 'de repente'], ['gelukkig', 'por suerte'], ['helaas', 'lamentablemente'], ['het nieuws', 'las noticias'], ['de krant', 'el periódico'],
      ['het slachtoffer', 'la víctima'], ['de schade', 'el daño'], ['gewond', 'herido'], ['de brandweer', 'los bomberos']
    ],
    grammar: [
      { t: 'El plusquamperfectum', es: 'Voltooid verleden tijd',
        html: `<p>Para decir lo que <b>ya había pasado</b> antes de otro momento del pasado: <b>had / hadden</b> o <b>was / waren</b> + participio.</p>
<p>Se usa el mismo auxiliar que en el perfectum: <i>Ik <b>heb</b> gegeten → Ik <b>had</b> gegeten.</i> · <i>Ik <b>ben</b> vertrokken → Ik <b>was</b> vertrokken.</i></p>
<p><i>Toen ik op het station aankwam, <b>was</b> de trein al <b>vertrokken</b>.</i> (Cuando llegué, el tren ya había salido.)</p>`,
        table: [['perfectum', 'plusquamperfectum'], ['Ik heb gegeten.', 'Ik had gegeten.'], ['Hij is vertrokken.', 'Hij was vertrokken.'], ['Wij hebben het gezien.', 'Wij hadden het gezien.']],
        sum: 'Ik had al gegeten. De trein was al vertrokken.',
        ex: [['Ik had mijn sleutels vergeten, dus ik kon niet naar binnen.', 'Había olvidado las llaves, así que no pude entrar.'], ['Toen de politie kwam, was de inbreker al weg.', 'Cuando llegó la policía, el ladrón ya se había ido.']] },
      { t: 'Nadat, voordat, toen', es: 'Nadat / voordat / toen',
        html: `<p>Estas palabras abren una <b>bijzin</b> (verbo al final):</p>
<p><b>nadat</b> (después de que), casi siempre con plusquamperfectum: <i><b>Nadat</b> hij had gegeten, ging hij slapen.</i> · <b>voordat</b> (antes de que): <i><b>Voordat</b> ik vertrok, belde ik mijn moeder.</i> · <b>toen</b> (cuando, una vez en el pasado): <i><b>Toen</b> ik thuiskwam, was alles weg.</i></p>`,
        table: [['conector', 'ejemplo'], ['nadat', 'Nadat ik had betaald, ging ik naar huis.'], ['voordat', 'Voordat je gaat, moet je dit lezen.'], ['toen', 'Toen ik klein was, woonde ik in Colón.']],
        ex: [['Nadat ze haar diploma had gehaald, verhuisde ze naar Amsterdam.', 'Después de sacar su título, se mudó a Ámsterdam.'], ['Toen ik de deur opendeed, zag ik dat er was ingebroken.', 'Cuando abrí la puerta, vi que habían entrado a robar.']] },
      { t: 'Contar una historia', es: 'Een verhaal vertellen',
        html: `<p>Una historia en neerlandés combina: <b>imperfectum</b> para lo que pasa (<i>ik liep, ik zag</i>), <b>plusquamperfectum</b> para lo de antes (<i>ik had vergeten</i>) y palabras de orden: <b>eerst</b>, <b>daarna</b>, <b>plotseling</b>, <b>gelukkig</b>, <b>uiteindelijk</b> (al final).</p>`,
        table: [['palabra', 'español'], ['plotseling', 'de repente'], ['gelukkig', 'por suerte'], ['helaas', 'lamentablemente'], ['uiteindelijk', 'al final']],
        ex: [['Plotseling hoorde ik een harde knal.', 'De repente oí un golpe fuerte.'], ['Gelukkig was er niemand gewond.', 'Por suerte no había nadie herido.']] }
    ],
    dialogue: {
      t: 'Inbraak!', place: 'Delft 🇳🇱',
      lines: [
        ['Agent', 'Goedemiddag. U heeft gebeld over een inbraak?', 'Buenas tardes. ¿Usted llamó por un robo?'],
        ['Valentina', 'Ja. Toen ik om zes uur thuiskwam, stond de deur open.', 'Sí. Cuando llegué a casa a las seis, la puerta estaba abierta.'],
        ['Agent', 'Had u de deur op slot gedaan voordat u vertrok?', '¿Había cerrado la puerta con llave antes de salir?'],
        ['Valentina', 'Ja, zeker. Maar ik had het raam in de keuken open laten staan.', 'Sí, claro. Pero había dejado abierta la ventana de la cocina.'],
        ['Agent', 'Wat is er weggenomen?', '¿Qué se llevaron?'],
        ['Valentina', 'Mijn laptop en wat sieraden. Mijn buurman zegt dat hij rond vier uur een man had gezien.', 'Mi laptop y algunas joyas. Mi vecino dice que había visto a un hombre como a las cuatro.'],
        ['Agent', 'Prima, dan is hij een getuige. Heeft u al iets aangeraakt?', 'Bien, entonces es testigo. ¿Ya tocó algo?'],
        ['Valentina', 'Nee, nadat ik de deur had gezien, heb ik meteen gebeld.', 'No, después de ver la puerta llamé de inmediato.'],
        ['Agent', 'Heel goed. We gaan nu naar binnen.', 'Muy bien. Ahora vamos a entrar.']
      ],
      q: [
        { t: 'mc', q: 'Hoe was de inbreker binnengekomen?', o: ['Door het keukenraam', 'Door de voordeur', 'Met een sleutel'] },
        { t: 'mc', q: 'Wat is er weggenomen?', o: ['Een laptop en sieraden', 'Geld', 'Een fiets'] },
        { t: 'mc', q: 'Wat had de buurman gezien?', o: ['Een man rond vier uur', 'Niets', 'Een auto'] }
      ]
    },
    culture: { t: '112 y la seguridad', html: `<p>En los Países Bajos el número de emergencias es el <b>112</b> (policía, bomberos, ambulancia). Para algo que no es urgente, como un robo que ya pasó, llamas al <b>0900-8844</b> de la policía.</p>
<p>🚲 El robo más común: ¡bicicletas! Por eso todo el mundo usa dos candados (<i>twee sloten</i>).</p>` },
    ex: [
      { t: 'cloze', s: 'Toen ik aankwam, ___ de trein al vertrokken.', a: ['was'], o: ['was', 'had', 'is'], nl: 'Cuando llegué, el tren ya había salido.', tag: 'nl-pqp' },
      { t: 'cloze', s: 'Ik ___ mijn sleutels vergeten.', a: ['had'], o: ['had', 'was', 'heb gehad'], nl: 'Había olvidado mis llaves.', tag: 'nl-pqp' },
      { t: 'cloze', s: 'Wij ___ de film al gezien.', a: ['hadden'], o: ['hadden', 'waren', 'had'], nl: 'Ya habíamos visto la película.', tag: 'nl-pqp' },
      { t: 'cloze', s: '___ hij had gegeten, ging hij slapen.', a: ['Nadat'], o: ['Nadat', 'Voordat', 'Toen dat'], nl: 'Después de comer, se fue a dormir.', tag: 'nl-pqp' },
      { t: 'cloze', s: '___ ik vertrok, belde ik mijn moeder.', a: ['Voordat'], o: ['Voordat', 'Nadat', 'Daarna'], nl: 'Antes de salir, llamé a mi mamá.', tag: 'nl-pqp' },
      { t: 'cloze', s: 'Toen de politie kwam, was de inbreker al ___.', a: ['weg'], o: ['weg', 'gegaan weg', 'vertrekt'], nl: 'Cuando llegó la policía, el ladrón ya se había ido.', tag: 'nl-pqp' },
      { t: 'cloze', s: '___ was er niemand gewond.', a: ['Gelukkig'], o: ['Gelukkig', 'Helaas', 'Plotseling'], nl: 'Por suerte no había nadie herido.', tag: 'nl-pqp' },
      { t: 'mc', q: '¿Cuál es correcta?', o: ['Ze was al vertrokken.', 'Ze had al vertrokken.', 'Ze is al vertrok.'], x: 'Vertrekken usa zijn → was vertrokken.', tag: 'nl-pqp' },
      { t: 'mc', q: '«el testigo» es…', o: ['de getuige', 'het slachtoffer', 'de inbreker'], tag: 'nl-pqp' },
      { t: 'mc', q: '«de repente» es…', o: ['plotseling', 'uiteindelijk', 'gelukkig'], tag: 'nl-pqp' },
      { t: 'tr', nl: 'Ya había comido.', a: ['Ik had al gegeten.'], tag: 'nl-pqp' },
      { t: 'tr', nl: 'Cuando llegué a casa, la puerta estaba abierta.', a: ['Toen ik thuiskwam, stond de deur open.', 'Toen ik thuiskwam, was de deur open.'], tag: 'nl-pqp' },
      { t: 'tr', nl: 'Por suerte nadie estaba herido.', a: ['Gelukkig was er niemand gewond.', 'Gelukkig was niemand gewond.'], tag: 'nl-pqp' },
      { t: 'order', s: 'Ik had mijn sleutels vergeten, dus ik kon niet naar binnen.', nl: 'Había olvidado las llaves, así que no pude entrar.', tag: 'nl-pqp' },
      { t: 'match', p: [['het ongeluk', 'el accidente'], ['de brandweer', 'los bomberos'], ['gewond', 'herido'], ['de schade', 'el daño'], ['helaas', 'lamentablemente']], tag: 'nl-pqp' }
    ],
    reading: {
      t: 'Eerlijke vinder', type: 'Una noticia',
      p: [
        ['Een taxichauffeur uit Rotterdam heeft vorige week een tas met tienduizend euro teruggebracht. Een passagier had de tas op de achterbank laten liggen.', 'Un taxista de Róterdam devolvió la semana pasada una bolsa con diez mil euros. Una pasajera había dejado la bolsa en el asiento de atrás.'],
        ['"Nadat ik de auto had schoongemaakt, zag ik plotseling een zwarte tas," vertelt chauffeur Ahmed. "Ik herinnerde me dat de vrouw over haar bruiloft had gepraat."', '«Después de limpiar el carro, de repente vi una bolsa negra», cuenta el chofer Ahmed. «Me acordé de que la mujer había hablado de su boda».'],
        ['Hij reed meteen naar het politiebureau. Twee uur later kwam de vrouw. Ze had al de hele stad doorzocht. Het geld was bedoeld voor haar bruiloftsfeest.', 'Manejó de inmediato a la estación de policía. Dos horas después llegó la mujer. Ya había buscado por toda la ciudad. El dinero era para su fiesta de bodas.']
      ],
      gl: [['de achterbank', 'el asiento de atrás'], ['zich herinneren', 'acordarse'], ['de bruiloft', 'la boda'], ['doorzoeken', 'registrar / buscar por todas partes']],
      q: [
        { t: 'mc', q: 'Waar had de passagier de tas laten liggen?', o: ['Op de achterbank', 'In een café', 'Op het station'] },
        { t: 'mc', q: 'Waarvoor was het geld bedoeld?', o: ['Voor een bruiloftsfeest', 'Voor een nieuwe auto', 'Voor een reis'] },
        { t: 'mc', q: 'Wat had de vrouw al gedaan?', o: ['De hele stad doorzocht', 'De politie gebeld', 'Een nieuwe tas gekocht'] }
      ]
    },
    say: [['Wat was er gebeurd?', '¿Qué había pasado?'], ['Ik had mijn sleutels vergeten.', 'Había olvidado mis llaves.'], ['Toen ik aankwam, was de trein al vertrokken.', 'Cuando llegué, el tren ya había salido.']],
    task: { nl: 'Cuenta un día en que algo salió mal. Usa el imperfectum, el plusquamperfectum (had / was + participio) y nadat, voordat o toen.', model: 'Vorige maand had ik een belangrijke afspraak. Toen ik op het station aankwam, was de trein al vertrokken. Ik had mijn wekker niet gehoord! Nadat ik mijn baas had gebeld, nam ik een taxi. Gelukkig was de afspraak ook te laat begonnen.' },
    scenario: { nl: 'Entraron a robar en tu casa y hablas con un agente de policía.', role: 'Je bent een vriendelijke politieagent in Delft. De leerling meldt een inbraak. Vraag wat er was gebeurd, wanneer, of de deur op slot was, wat er weg is en of iemand iets had gezien. Gebruik het plusquamperfectum. Spreek Nederlands op B1-niveau en gebruik "u".', goal: 'Explica qué pasó, qué ya había pasado antes y qué te robaron.' }
  });
})(window.SPT);
