/* Niveau A1 — aanvulling: extra woorden, extra oefeningen en een leestekst per unit.
   Alles wordt achteraan de bestaande unit toegevoegd (zie S.extendUnit), zodat je voortgang blijft kloppen. */
(function (S) {
  'use strict';
  const X = S.extendUnit;

  /* ───────── A1 · 1 ───────── */
  X('a1-01', {
    vocab: [
      ['el apellido', 'de achternaam'], ['¿de dónde eres?', 'waar kom je vandaan?'], ['soy de…', 'ik kom uit…'], ['la nacionalidad', 'de nationaliteit'],
      ['el idioma', 'de taal'], ['Holanda / los Países Bajos', 'Nederland'], ['el señor / la señora', 'meneer / mevrouw'], ['la señorita', 'juffrouw (jonge vrouw)'],
      ['don / doña', 'beleefd voor een voornaam (don Carlos)', 'heel gewoon in heel Latijns-Amerika'], ['bienvenido / bienvenida', 'welkom'],
      ['igualmente', 'insgelijks'], ['con permiso', 'pardon (als je langs wilt / weggaat)'], ['¿cómo se dice…?', 'hoe zeg je…?'],
      ['no entiendo', 'ik begrijp het niet'], ['¿puede repetir, por favor?', 'kunt u dat herhalen, alstublieft?'], ['más despacio, por favor', 'langzamer, alstublieft'],
      ['hablo un poco de español', 'ik spreek een beetje Spaans'], ['buen día', 'goedemorgen', 'AR · UY · ook in veel andere landen']
    ],
    ex: [
      { t: 'mc', q: 'Iemand zegt «Mucho gusto». Wat zeg je terug?', o: ['Igualmente.', 'De nada.', 'Con permiso.'], tag: 'vocab' },
      { t: 'cloze', s: '¿De dónde ___ tú?', a: ['eres'], o: ['eres', 'es', 'soy'], nl: 'Waar kom jij vandaan?', tag: 'ser' },
      { t: 'cloze', s: 'Ellos ___ de Holanda.', a: ['son'], h: 'ser', nl: 'Zij komen uit Nederland.', tag: 'ser' },
      { t: 'tr', nl: 'Ik begrijp het niet. Kunt u het herhalen, alstublieft?', a: ['No entiendo. ¿Puede repetir, por favor?', 'No entiendo. ¿Puede repetir?', 'No entiendo. ¿Lo puede repetir, por favor?'], tag: 'tu-usted' },
      { t: 'match', p: [['el apellido', 'de achternaam'], ['el idioma', 'de taal'], ['la nacionalidad', 'de nationaliteit'], ['igualmente', 'insgelijks'], ['bienvenido', 'welkom']], tag: 'vocab' }
    ],
    reading: {
      t: 'Hola, soy Lucía', type: 'Profiel in een taal-app',
      p: [
        ['¡Hola! Me llamo Lucía Herrera y soy de Puebla, en México. Soy estudiante de turismo. Hablo español e inglés, y un poco de francés.',
          'Hoi! Ik heet Lucía Herrera en ik kom uit Puebla, in Mexico. Ik studeer toerisme. Ik spreek Spaans en Engels, en een beetje Frans.'],
        ['Busco amigos de otros países para practicar idiomas. ¿Eres de Holanda? ¡Qué bien! No hablo holandés, pero quiero aprender.',
          'Ik zoek vrienden uit andere landen om talen te oefenen. Kom je uit Nederland? Wat leuk! Ik spreek geen Nederlands, maar ik wil het leren.'],
        ['Puedes escribirme en español o en inglés. Si no entiendes algo, no hay problema. ¡Hasta pronto!',
          'Je kunt me schrijven in het Spaans of in het Engels. Als je iets niet begrijpt, is dat geen probleem. Tot snel!']
      ],
      gl: [['buscar', 'zoeken'], ['otros países', 'andere landen'], ['quiero aprender', 'ik wil leren'], ['hasta pronto', 'tot snel']],
      q: [
        { t: 'mc', q: '¿De dónde es Lucía?', o: ['De Puebla, en México', 'De Holanda', 'De Francia'] },
        { t: 'mc', q: '¿Qué estudia Lucía?', o: ['Turismo', 'Francés', 'Inglés'] },
        { t: 'mc', q: '¿Qué busca Lucía en la app?', o: ['Amigos para practicar idiomas', 'Un trabajo en Holanda', 'Una profesora de francés'] },
        { t: 'mc', q: '¿Habla Lucía holandés?', o: ['No, pero quiere aprender', 'Sí, muy bien', 'Sí, un poco'] }
      ]
    }
  });

  /* ───────── A1 · 2 ───────── */
  X('a1-02', {
    vocab: [
      ['el arquitecto / la arquitecta', 'de architect'], ['el / la dentista', 'de tandarts'], ['el cocinero / la cocinera', 'de kok'],
      ['el vendedor / la vendedora', 'de verkoper / verkoopster'], ['el empleado / la empleada', 'de werknemer'], ['el actor / la actriz', 'de acteur / actrice'],
      ['el / la cantante', 'de zanger(es)'], ['cubano / cubana', 'Cubaans'], ['venezolano / venezolana', 'Venezolaans'], ['ecuatoriano / ecuatoriana', 'Ecuadoraans'],
      ['español / española', 'Spaans (uit Spanje)'], ['rubio / rubia', 'blond', 'MX ook: güero / güera'], ['moreno / morena', 'donker (haar of huid)'],
      ['delgado / delgada', 'slank'], ['guapo / guapa', 'knap'],
      ['divertido / divertida', 'grappig, leuk'], ['serio / seria', 'serieus'], ['amable', 'vriendelijk']
    ],
    ex: [
      { t: 'cloze', s: 'Mi hermana es muy ___.', h: 'divertido', a: ['divertida'], nl: 'Mijn zus is heel grappig.', tag: 'adj-agree' },
      { t: 'mc', q: 'Vrouwelijke vorm van «el actor»:', o: ['la actriz', 'la actora', 'la actoriz'], tag: 'gender' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Pedro es cocinero.', 'Pedro es un cocinero.', 'Pedro está cocinero.'], x: 'Beroep na ser: zonder lidwoord.', tag: 'articles' },
      { t: 'tr', nl: 'Mijn vriend is lang en blond.', a: ['Mi amigo es alto y rubio.', 'Mi amigo es alto y güero.'], tag: 'adj-agree' },
      { t: 'match', p: [['cubano', 'Cubaans'], ['ecuatoriano', 'Ecuadoraans'], ['venezolano', 'Venezolaans'], ['español', 'Spaans (uit Spanje)'], ['estadounidense', 'Amerikaans']], tag: 'vocab' }
    ],
    reading: {
      t: 'Mi clase de español', type: 'Blog',
      p: [
        ['Estudio español en una escuela de idiomas en Bogotá. En mi clase hay ocho estudiantes de seis países diferentes.',
          'Ik studeer Spaans op een talenschool in Bogota. In mijn klas zitten acht studenten uit zes verschillende landen.'],
        ['Klaus es alemán. Es ingeniero y es muy serio. Akiko es japonesa y es dentista. Es pequeña, morena y muy amable.',
          'Klaus is Duits. Hij is ingenieur en hij is heel serieus. Akiko is Japans en ze is tandarts. Ze is klein, donker en heel vriendelijk.'],
        ['Los dos estudiantes de Estados Unidos son cocineros. Son jóvenes y muy divertidos. Yo soy holandesa y soy enfermera.',
          'De twee studenten uit de Verenigde Staten zijn koks. Ze zijn jong en heel grappig. Ik ben Nederlandse en ik ben verpleegkundige.'],
        ['La profesora se llama Natalia. Es colombiana, de Cali. Es una profesora excelente, pero las clases son a las siete de la mañana.',
          'De lerares heet Natalia. Ze is Colombiaans, uit Cali. Ze is een uitstekende lerares, maar de lessen zijn om zeven uur ’s ochtends.']
      ],
      gl: [['la escuela de idiomas', 'de talenschool'], ['diferente', 'verschillend'], ['los dos', 'de twee, allebei'], ['excelente', 'uitstekend']],
      q: [
        { t: 'mc', q: '¿Cuántos estudiantes hay en la clase?', o: ['Ocho', 'Seis', 'Siete'] },
        { t: 'mc', q: '¿Qué es Akiko?', o: ['Dentista', 'Ingeniera', 'Cocinera'] },
        { t: 'mc', q: '¿Cómo son los estudiantes de Estados Unidos?', o: ['Jóvenes y divertidos', 'Serios y altos', 'Pequeños y amables'] },
        { t: 'mc', q: '¿De dónde es la profesora?', o: ['De Cali', 'De Bogotá', 'De Holanda'] }
      ]
    }
  });

  /* ───────── A1 · 3 ───────── */
  X('a1-03', {
    vocab: [
      ['el nieto / la nieta', 'het kleinkind'], ['el suegro / la suegra', 'de schoonvader / schoonmoeder'], ['el cuñado / la cuñada', 'de zwager / schoonzus'],
      ['el bebé', 'de baby'], ['los gemelos / las gemelas', 'de tweeling'], ['hijo único / hija única', 'enig kind'], ['divorciado / divorciada', 'gescheiden'],
      ['la mascota', 'het huisdier'], ['vivir con…', 'wonen met…'], ['la edad', 'de leeftijd'], ['once', 'elf'], ['doce', 'twaalf'],
      ['sesenta', 'zestig'], ['setenta', 'zeventig'], ['ochenta', 'tachtig'], ['noventa', 'negentig'],
      ['el carnal', 'de broer, goede maat', 'MX (informeel)'], ['la ñaña', 'de (oudere) zus', 'EC · PE (informeel)']
    ],
    ex: [
      { t: 'cloze', s: 'Mis abuelos ___ ochenta años.', a: ['tienen'], o: ['tienen', 'son', 'tenemos'], nl: 'Mijn grootouders zijn tachtig.', tag: 'tener' },
      { t: 'cloze', s: '___ hijos son gemelos.', a: ['Sus'], o: ['Sus', 'Su', 'Suyos'], nl: 'Haar kinderen zijn een tweeling.', tag: 'possessive' },
      { t: 'mc', q: 'Hoe schrijf je 76?', o: ['setenta y seis', 'setentaiséis', 'sesenta y seis'], tag: 'numbers' },
      { t: 'tr', nl: 'Ik ben enig kind.', a: ['Soy hijo único.', 'Soy hija única.', 'Yo soy hijo único.', 'Yo soy hija única.'], tag: 'vocab' },
      { t: 'tr', nl: 'Hoe oud is je moeder?', a: ['¿Cuántos años tiene tu mamá?', '¿Cuántos años tiene tu madre?', '¿Qué edad tiene tu mamá?'], tag: 'tener' }
    ],
    reading: {
      t: 'Te presento a mi familia', type: 'E-mail',
      p: [
        ['Querida Anouk: ¿Cómo estás? Aquí te mando una foto de mi familia. Vivo con mis papás y mi hermana menor en Medellín.',
          'Lieve Anouk, hoe gaat het? Hier stuur ik je een foto van mijn familie. Ik woon met mijn ouders en mijn jongere zus in Medellín.'],
        ['Mi papá se llama Jorge y tiene cincuenta y dos años. Es taxista. Mi mamá se llama Patricia y es profesora. Mi hermana Sara tiene doce años y es muy divertida.',
          'Mijn vader heet Jorge en hij is tweeënvijftig. Hij is taxichauffeur. Mijn moeder heet Patricia en ze is lerares. Mijn zus Sara is twaalf en ze is heel grappig.'],
        ['Mis abuelos viven en un pueblo cerca de la ciudad. Mi abuela tiene setenta y ocho años y tiene once nietos. También tenemos una mascota: un perro que se llama Pacho.',
          'Mijn grootouders wonen in een dorp vlak bij de stad. Mijn oma is achtenzeventig en ze heeft elf kleinkinderen. We hebben ook een huisdier: een hond die Pacho heet.'],
        ['¿Y tú? ¿Tienes hermanos? Un abrazo, Mateo.',
          'En jij? Heb je broers of zussen? Een knuffel, Mateo.']
      ],
      gl: [['querida', 'lieve (aanhef)'], ['te mando', 'ik stuur je'], ['el pueblo', 'het dorp'], ['un abrazo', 'een knuffel (groet onder brieven)']],
      q: [
        { t: 'mc', q: '¿Con quién vive Mateo?', o: ['Con sus papás y su hermana', 'Con sus abuelos', 'Solo, con su perro'] },
        { t: 'mc', q: '¿Cuántos años tiene el papá?', o: ['Cincuenta y dos', 'Setenta y ocho', 'Doce'] },
        { t: 'mc', q: '¿Cuántos nietos tiene la abuela?', o: ['Once', 'Doce', 'Dos'] },
        { t: 'mc', q: '¿Quién es Pacho?', o: ['El perro de la familia', 'El hermano de Mateo', 'El abuelo'] }
      ]
    }
  });

  /* ───────── A1 · 4 ───────── */
  X('a1-04', {
    vocab: [
      ['el centro', 'het centrum'], ['el mercado', 'de markt'], ['la panadería', 'de bakkerij'], ['la universidad', 'de universiteit'],
      ['la oficina de correos', 'het postkantoor'], ['la parada (de bus)', 'de (bus)halte'], ['la catedral', 'de kathedraal'], ['el taxi', 'de taxi'],
      ['detrás de', 'achter'], ['delante de', 'voor (plaats)'], ['debajo de', 'onder'], ['encima de', 'op, boven'], ['dentro de', 'binnen in'],
      ['bonito / bonita', 'mooi'], ['el puerto', 'de haven'], ['animado / animada', 'levendig, gezellig druk'], ['el colectivo', 'de bus', 'AR · ook: la micro (CL), la buseta (CO), el camión (MX)'],
      ['¿me puede ayudar?', 'kunt u me helpen?']
    ],
    ex: [
      { t: 'cloze', s: 'La panadería está ___ lado del banco.', a: ['al'], o: ['al', 'a el', 'del'], nl: 'De bakkerij is naast de bank.', tag: 'contractions' },
      { t: 'cloze', s: '¿___ una farmacia por aquí?', a: ['Hay'], o: ['Hay', 'Está', 'Es'], nl: 'Is er een apotheek hier in de buurt?', tag: 'hay-estar' },
      { t: 'cloze', s: 'El mercado ___ en el centro.', a: ['está'], o: ['está', 'hay', 'es'], nl: 'De markt is in het centrum.', tag: 'hay-estar' },
      { t: 'mc', q: 'De kat zit ónder de tafel:', o: ['El gato está debajo de la mesa.', 'El gato está encima de la mesa.', 'El gato hay debajo de la mesa.'], tag: 'prepositions' },
      { t: 'tr', nl: 'Pardon, waar is de bushalte?', a: ['Disculpe, ¿dónde está la parada de bus?', 'Disculpe, ¿dónde está la parada?', 'Perdón, ¿dónde está la parada de bus?', 'Disculpe, ¿dónde está la parada del bus?'], tag: 'hay-estar' }
    ],
    reading: {
      t: 'Bienvenidos a Getsemaní', type: 'Folder van een hostel',
      p: [
        ['Nuestro hostal está en Getsemaní, un barrio muy bonito de Cartagena. Está cerca del centro histórico, a cinco minutos a pie.',
          'Ons hostel ligt in Getsemaní, een heel mooie wijk van Cartagena. Het is dicht bij het historische centrum, op vijf minuten lopen.'],
        ['En el barrio hay muchos restaurantes, tiendas pequeñas y una plaza con música todas las noches. La plaza se llama Plaza de la Trinidad y está enfrente de la iglesia.',
          'In de wijk zijn veel restaurants, kleine winkels en een plein met elke avond muziek. Het plein heet Plaza de la Trinidad en ligt tegenover de kerk.'],
        ['El supermercado está a dos cuadras, en la esquina de la calle de la Media Luna. Hay un cajero automático al lado del supermercado.',
          'De supermarkt is twee straten verderop, op de hoek van de calle de la Media Luna. Naast de supermarkt is een geldautomaat.'],
        ['La parada de bus está detrás del hostal. ¿Necesitas ayuda? En la recepción hay mapas del barrio.',
          'De bushalte is achter het hostel. Heb je hulp nodig? Bij de receptie liggen plattegronden van de wijk.']
      ],
      gl: [['a pie', 'te voet'], ['el centro histórico', 'het historische centrum'], ['necesitar', 'nodig hebben'], ['el mapa', 'de plattegrond, kaart']],
      q: [
        { t: 'mc', q: '¿Dónde está el hostal?', o: ['En Getsemaní, cerca del centro', 'En el centro histórico', 'Lejos de Cartagena'] },
        { t: 'mc', q: '¿Qué hay en la plaza todas las noches?', o: ['Música', 'Un mercado', 'Un cajero'] },
        { t: 'mc', q: '¿Dónde está el cajero automático?', o: ['Al lado del supermercado', 'Enfrente de la iglesia', 'Detrás del hostal'] },
        { t: 'mc', q: '¿Dónde hay mapas del barrio?', o: ['En la recepción', 'En la parada de bus', 'En la iglesia'] }
      ]
    }
  });

  /* ───────── A1 · 5 ───────── */
  X('a1-05', {
    vocab: [
      ['abrir', 'openen'], ['cerrar (ie)', 'sluiten'], ['leer', 'lezen'], ['comprender', 'begrijpen'], ['necesitar', 'nodig hebben'], ['esperar', 'wachten; hopen'],
      ['tomar el bus', 'de bus nemen'], ['el mediodía', 'het middaguur'], ['la medianoche', 'middernacht'], ['en punto', 'precies (op de klok)'],
      ['y media', 'half (… y media = half …)'], ['y cuarto', 'kwart over'], ['menos cuarto', 'kwart voor'], ['de la mañana', '’s ochtends'],
      ['casi nunca', 'bijna nooit'], ['a menudo', 'vaak'], ['la semana', 'de week'], ['entre semana', 'doordeweeks']
    ],
    ex: [
      { t: 'cloze', s: 'Nosotros ___ en una oficina.', h: 'trabajar', a: ['trabajamos'], nl: 'Wij werken op een kantoor.', tag: 'pres-regular' },
      { t: 'cloze', s: 'Mis hijos ___ el periódico.', h: 'leer', a: ['leen'], nl: 'Mijn kinderen lezen de krant.', tag: 'pres-regular' },
      { t: 'mc', q: 'Hoe zeg je «Het is kwart voor negen»?', o: ['Son las nueve menos cuarto.', 'Son las ocho menos cuarto.', 'Es las nueve y cuarto.'], tag: 'time' },
      { t: 'mc', q: '«Hoe laat begint de les?» — De les begint om één uur:', o: ['A la una.', 'A las una.', 'Es la una.'], x: 'Bij één uur: a la una (enkelvoud). Daarna: a las dos, a las tres…', tag: 'time' },
      { t: 'tr', nl: 'Doordeweeks eet ik om zeven uur.', a: ['Entre semana ceno a las siete.', 'Entre semana como a las siete.', 'Entre semana yo ceno a las siete.'], tag: 'pres-regular' }
    ],
    reading: {
      t: 'Un día normal de Camila', type: 'Persoonlijke tekst',
      p: [
        ['Me llamo Camila y vivo en Santiago de Chile. Trabajo en un banco en el centro. Entre semana desayuno a las siete en punto: café con leche y pan con palta.',
          'Ik heet Camila en ik woon in Santiago de Chile. Ik werk bij een bank in het centrum. Doordeweeks ontbijt ik om precies zeven uur: koffie met melk en brood met avocado.'],
        ['Tomo el metro a las siete y media y llego a la oficina a las ocho y cuarto. Trabajo hasta las seis de la tarde. Al mediodía almuerzo con mis compañeros.',
          'Ik neem om half acht de metro en kom om kwart over acht op kantoor aan. Ik werk tot zes uur ’s middags. Tussen de middag lunch ik met mijn collega’s.'],
        ['Por la tarde estudio inglés en una academia. Los martes y jueves corro en el parque. Ceno a las nueve, como muchos chilenos.',
          'In de avond studeer ik Engels op een taleninstituut. Op dinsdag en donderdag loop ik hard in het park. Ik eet om negen uur, zoals veel Chilenen.'],
        ['Los fines de semana no trabajo. Leo, escucho música y visito a mi familia. ¡Casi nunca miro la tele!',
          'In het weekend werk ik niet. Ik lees, luister muziek en ga bij mijn familie langs. Ik kijk bijna nooit tv!']
      ],
      gl: [['la palta', 'de avocado (CL · AR · PE; MX/CO: el aguacate)'], ['hasta', 'tot'], ['la academia', 'het (taal)instituut'], ['como muchos chilenos', 'zoals veel Chilenen']],
      q: [
        { t: 'mc', q: '¿A qué hora llega Camila a la oficina?', o: ['A las ocho y cuarto', 'A las siete en punto', 'A las siete y media'] },
        { t: 'mc', q: '¿Qué hace Camila por la tarde?', o: ['Estudia inglés', 'Trabaja en el banco', 'Visita a su familia'] },
        { t: 'mc', q: '¿Qué días corre en el parque?', o: ['Los martes y jueves', 'Los fines de semana', 'Todos los días'] },
        { t: 'mc', q: '¿Qué es «la palta» en Chile?', o: ['El aguacate', 'El pan', 'El café con leche'] }
      ]
    }
  });

  /* ───────── A1 · 6 ───────── */
  X('a1-06', {
    vocab: [
      ['el baloncesto / el básquetbol', 'basketbal'], ['el béisbol', 'honkbal', 'populair in MX, Venezuela en het Caribisch gebied'], ['el tenis', 'tennis'],
      ['ir al gimnasio', 'naar de sportschool gaan'], ['montar en bicicleta', 'fietsen', 'MX/AR: andar en bici'], ['pintar', 'schilderen'], ['dibujar', 'tekenen'],
      ['tocar la guitarra', 'gitaar spelen'], ['sacar fotos', 'foto’s maken'], ['el museo de arte', 'het kunstmuseum'], ['la discoteca', 'de discotheek'],
      ['salir con amigos', 'uitgaan met vrienden'], ['odiar', 'een hekel hebben aan'], ['aburrido / aburrida', 'saai'], ['interesante', 'interessant'],
      ['divertirse (ie)', 'plezier hebben'], ['¡me fascina!', 'ik vind het geweldig!'], ['¡qué bacano!', 'wat gaaf!', 'CO']
    ],
    ex: [
      { t: 'cloze', s: 'A mis papás les ___ el béisbol.', a: ['gusta'], o: ['gusta', 'gustan', 'gustas'], nl: 'Mijn ouders houden van honkbal.', tag: 'gustar' },
      { t: 'cloze', s: '¿A ti te ___ los museos?', a: ['interesan'], o: ['interesan', 'interesa', 'interesas'], nl: 'Interesseren musea jou?', tag: 'gustar' },
      { t: 'cloze', s: 'A nosotros ___ encanta bailar.', a: ['nos'], o: ['nos', 'les', 'nosotros'], nl: 'Wij vinden dansen heerlijk.', tag: 'gustar' },
      { t: 'mc', q: '«No me gusta el fútbol.» — «A mí ___.» (ik ook niet)', o: ['tampoco', 'también', 'sí'], tag: 'gustar' },
      { t: 'tr', nl: 'Ik speel gitaar en ik vind schilderen leuk.', a: ['Toco la guitarra y me gusta pintar.', 'Yo toco la guitarra y me gusta pintar.'], tag: 'gustar' }
    ],
    reading: {
      t: 'Busco compañero de apartamento', type: 'Advertentie',
      p: [
        ['Hola, me llamo Julián, tengo veintiocho años y soy diseñador. Busco un compañero o una compañera para mi apartamento en Medellín, en el barrio Laureles.',
          'Hoi, ik heet Julián, ik ben achtentwintig en ik ben ontwerper. Ik zoek een huisgenoot voor mijn appartement in Medellín, in de wijk Laureles.'],
        ['Me gusta mucho cocinar y me encanta la música, sobre todo la salsa. Los fines de semana me gusta montar en bicicleta y sacar fotos en la montaña.',
          'Ik kook graag en ik ben dol op muziek, vooral salsa. In het weekend fiets ik graag en maak ik foto’s in de bergen.'],
        ['No me gustan las fiestas en casa entre semana porque trabajo temprano. Tampoco me gusta el desorden.',
          'Ik houd niet van feestjes thuis doordeweeks, want ik begin vroeg met werken. Ik houd ook niet van rommel.'],
        ['¿Te interesa? ¿Te gustan los gatos? Tengo una gata muy tranquila que se llama Luna. ¡Escríbeme!',
          'Interesse? Houd je van katten? Ik heb een heel rustige kat die Luna heet. Schrijf me!']
      ],
      gl: [['el diseñador', 'de ontwerper'], ['sobre todo', 'vooral'], ['porque', 'omdat, want'], ['el desorden', 'de rommel']],
      q: [
        { t: 'mc', q: '¿Qué música le encanta a Julián?', o: ['La salsa', 'El rock', 'El reguetón'] },
        { t: 'mc', q: '¿Qué hace Julián los fines de semana?', o: ['Monta en bicicleta y saca fotos', 'Organiza fiestas en casa', 'Trabaja temprano'] },
        { t: 'mc', q: '¿Por qué no le gustan las fiestas entre semana?', o: ['Porque trabaja temprano', 'Porque no le gusta la música', 'Porque la gata no duerme'] },
        { t: 'mc', q: '¿Quién es Luna?', o: ['La gata de Julián', 'La compañera de apartamento', 'La hermana de Julián'] }
      ]
    }
  });

  /* ───────── A1 · 7 ───────── */
  X('a1-07', {
    vocab: [
      ['el huevo', 'het ei', 'MX: el blanquillo (soms)'], ['la sopa', 'de soep'], ['la ensalada', 'de salade'], ['el tomate / el jitomate', 'de tomaat', 'jitomate: MX'],
      ['la cebolla', 'de ui'], ['el plátano', 'de banaan / de bakbanaan'], ['la leche', 'de melk'], ['el azúcar', 'de suiker'], ['la sal', 'het zout'],
      ['el postre', 'het toetje'], ['el plato', 'het bord; het gerecht'], ['el vaso', 'het glas'], ['el tenedor', 'de vork'], ['la cuchara', 'de lepel'],
      ['el menú del día', 'het dagmenu', 'CO: el corrientazo · PE: el menú'], ['la mesa para dos', 'een tafel voor twee'], ['sin', 'zonder'], ['con', 'met']
    ],
    ex: [
      { t: 'cloze', s: 'Yo ___ el pollo con arroz.', h: 'pedir', a: ['pido'], nl: 'Ik bestel de kip met rijst.', tag: 'stem-change' },
      { t: 'cloze', s: '¿Cuánto ___ el menú del día?', h: 'costar', a: ['cuesta'], nl: 'Hoeveel kost het dagmenu?', tag: 'stem-change' },
      { t: 'cloze', s: 'Nosotros ___ comer aquí.', a: ['queremos'], o: ['queremos', 'quieremos', 'quieren'], nl: 'Wij willen hier eten.', x: 'Bij nosotros verandert de stam niet: queremos.', tag: 'stem-change' },
      { t: 'tr', nl: 'Een tafel voor twee, alstublieft.', a: ['Una mesa para dos, por favor.', 'Mesa para dos, por favor.'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik wil graag een sap zonder suiker.', a: ['Quisiera un jugo sin azúcar.', 'Quiero un jugo sin azúcar.', 'Me da un jugo sin azúcar.', 'Quisiera un jugo sin azúcar, por favor.'], tag: 'vocab' }
    ],
    reading: {
      t: 'La Cocina de Doña Rosa', type: 'Menukaart',
      p: [
        ['Menú del día: 120 pesos. Incluye sopa, plato fuerte, agua fresca y postre. De lunes a viernes, de la una a las cinco.',
          'Dagmenu: 120 pesos. Inclusief soep, hoofdgerecht, vers vruchtenwater en toetje. Van maandag tot en met vrijdag, van één tot vijf uur.'],
        ['Sopas: sopa de tortilla o sopa de verduras. Platos fuertes: pollo con mole y arroz, enchiladas verdes de queso, o pescado a la plancha con ensalada.',
          'Soepen: tortillasoep of groentesoep. Hoofdgerechten: kip met mole en rijst, groene enchilada’s met kaas, of gegrilde vis met salade.'],
        ['Aguas frescas: de jamaica, de horchata o de limón. Postres: flan o plátanos fritos con crema.',
          'Vruchtenwater: van hibiscus, van horchata of van limoen. Toetjes: flan of gebakken banaan met room.'],
        ['¿Prefiere algo sin carne? Pregunte por el plato vegetariano. Todos nuestros platos son caseros. ¡Buen provecho!',
          'Liever iets zonder vlees? Vraag naar het vegetarische gerecht. Al onze gerechten zijn huisgemaakt. Eet smakelijk!']
      ],
      gl: [['el plato fuerte', 'het hoofdgerecht'], ['el agua fresca', 'vruchtenwater (MX)'], ['a la plancha', 'gegrild (op de bakplaat)'], ['casero / casera', 'huisgemaakt']],
      q: [
        { t: 'mc', q: '¿Qué incluye el menú del día?', o: ['Sopa, plato fuerte, agua fresca y postre', 'Solo plato fuerte y postre', 'Sopa y café'] },
        { t: 'mc', q: '¿Cuándo hay menú del día?', o: ['De lunes a viernes', 'Todos los días', 'Solo los fines de semana'] },
        { t: 'mc', q: '¿Qué plato es con queso?', o: ['Las enchiladas verdes', 'El pollo con mole', 'El pescado a la plancha'] },
        { t: 'mc', q: '¿Qué puede pedir una persona que no come carne?', o: ['El plato vegetariano', 'El pollo con mole', 'Nada'] }
      ]
    }
  });

  /* ───────── A1 · 8 ───────── */
  X('a1-08', {
    vocab: [
      ['el champú', 'de shampoo'], ['el jabón', 'de zeep'], ['la toalla', 'de handdoek'], ['el cepillo de dientes', 'de tandenborstel'], ['el espejo', 'de spiegel'],
      ['quitarse (la ropa)', '(kleren) uittrekken'], ['ponerse (la ropa)', '(kleren) aantrekken'], ['arreglarse', 'zich klaarmaken'], ['relajarse', 'ontspannen'],
      ['sentarse (ie)', 'gaan zitten'], ['quedarse dormido / dormida', 'in slaap vallen; zich verslapen'], ['tarde o temprano', 'vroeg of laat'],
      ['de lunes a viernes', 'van maandag tot vrijdag'], ['la siesta', 'het middagdutje'], ['a la misma hora', 'op hetzelfde tijdstip'],
      ['el turno de noche', 'de nachtdienst'], ['enseguida', 'meteen'], ['¡qué flojera!', 'wat heb ik een zin om niks te doen!', 'MX (informeel)']
    ],
    ex: [
      { t: 'cloze', s: 'Yo ___ a las seis.', h: 'despertarse', a: ['me despierto'], nl: 'Ik word om zes uur wakker.', tag: 'reflexive' },
      { t: 'cloze', s: 'Mis hijos ___ los dientes después de comer.', h: 'cepillarse', a: ['se cepillan'], nl: 'Mijn kinderen poetsen hun tanden na het eten.', tag: 'reflexive' },
      { t: 'cloze', s: 'Nosotros ___ a las once.', h: 'acostarse', a: ['nos acostamos'], nl: 'Wij gaan om elf uur naar bed.', x: 'Bij nosotros geen stamwisseling: nos acostamos.', tag: 'stem-change' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Me pongo la chaqueta.', 'Pongo me la chaqueta.', 'Me pongo mi chaqueta me.'], x: 'Het wederkerend voornaamwoord staat vóór het vervoegde werkwoord.', tag: 'reflexive' },
      { t: 'tr', nl: 'Na het douchen kleed ik me aan.', a: ['Después de ducharme, me visto.', 'Después de bañarme, me visto.', 'Después de ducharme me visto.'], tag: 'reflexive' }
    ],
    reading: {
      t: 'La rutina de un enfermero', type: 'Interview',
      p: [
        ['Andrés es enfermero en un hospital de Quito. Trabaja en el turno de noche, de lunes a viernes. Su rutina es diferente a la de su familia.',
          'Andrés is verpleegkundige in een ziekenhuis in Quito. Hij werkt in de nachtdienst, van maandag tot vrijdag. Zijn routine is anders dan die van zijn gezin.'],
        ['«Me despierto a las cuatro de la tarde. Primero me ducho y me visto. Luego como algo con mis hijos cuando vuelven del colegio.»',
          '«Ik word om vier uur ’s middags wakker. Eerst douche ik en kleed ik me aan. Daarna eet ik iets met mijn kinderen als ze terugkomen van school.»'],
        ['«Salgo de casa a las seis y media y empiezo a trabajar a las siete. A medianoche me tomo un café con mis compañeros.»',
          '«Ik ga om half zeven van huis en begin om zeven uur met werken. Om middernacht drink ik een koffie met mijn collega’s.»'],
        ['«Vuelvo a casa a las siete de la mañana. Desayuno con mi esposa, me quito el uniforme y me acuesto enseguida. Nunca me quedo dormido en el trabajo… ¡casi nunca!»',
          '«Ik kom om zeven uur ’s ochtends thuis. Ik ontbijt met mijn vrouw, trek mijn uniform uit en ga meteen naar bed. Ik val nooit in slaap op het werk… bijna nooit!»']
      ],
      gl: [['el colegio', 'de school'], ['empezar a trabajar', 'beginnen met werken'], ['tomarse un café', 'een koffie drinken'], ['el uniforme', 'het uniform']],
      q: [
        { t: 'mc', q: '¿A qué hora se despierta Andrés?', o: ['A las cuatro de la tarde', 'A las siete de la mañana', 'A medianoche'] },
        { t: 'mc', q: '¿Con quién come antes del trabajo?', o: ['Con sus hijos', 'Con sus compañeros', 'Solo'] },
        { t: 'mc', q: '¿Qué hace a medianoche?', o: ['Se toma un café', 'Se acuesta', 'Desayuna con su esposa'] },
        { t: 'mc', q: '¿Qué hace después de desayunar?', o: ['Se acuesta enseguida', 'Sale de casa', 'Se ducha y se viste'] }
      ]
    }
  });

  /* ───────── A1 · 9 ───────── */
  X('a1-09', {
    vocab: [
      ['el abrigo', 'de jas (winterjas)'], ['la gorra', 'de pet'], ['el sombrero', 'de hoed'], ['la bufanda', 'de sjaal'], ['las medias', 'de sokken', 'CO · AR · PE; MX: los calcetines'],
      ['las sandalias', 'de sandalen'], ['la bolsa', 'de tas; de zak', 'AR: la cartera (handtas)'], ['el centro comercial', 'het winkelcentrum'],
      ['el probador', 'de paskamer'], ['la caja', 'de kassa'], ['pagar con tarjeta', 'met de kaart betalen'], ['me queda bien', 'het past me goed'],
      ['me queda pequeño', 'het is me te klein'], ['claro / oscuro', 'licht / donker (kleur)'], ['doscientos', 'tweehonderd'], ['quinientos', 'vijfhonderd'],
      ['mil', 'duizend'], ['la oferta', 'de aanbieding']
    ],
    ex: [
      { t: 'cloze', s: '¿Cuánto cuesta ___ camisa de aquí?', a: ['esta'], o: ['esta', 'este', 'estos'], nl: 'Hoeveel kost dit overhemd hier?', tag: 'demonstratives' },
      { t: 'cloze', s: '¿Me puedo probar ___ zapatos de allá?', a: ['aquellos'], o: ['aquellos', 'aquel', 'estas'], nl: 'Mag ik die schoenen daarginds passen?', tag: 'demonstratives' },
      { t: 'mc', q: 'Hoe zeg je 550?', o: ['quinientos cincuenta', 'cincocientos cincuenta', 'quinientos y cincuenta'], tag: 'numbers' },
      { t: 'mc', q: 'Het jasje is je te klein. Je zegt:', o: ['Me queda pequeña.', 'Me queda grande.', 'Me queda bien.'], tag: 'vocab' },
      { t: 'tr', nl: 'Kan ik met de kaart betalen?', a: ['¿Puedo pagar con tarjeta?', '¿Se puede pagar con tarjeta?'], tag: 'vocab' }
    ],
    reading: {
      t: 'Ofertas de fin de temporada', type: 'Advertentie en chatbericht',
      p: [
        ['¡Gran venta en Moda Andina! Todo con descuento en el centro comercial Gran Estación. Chaquetas de invierno: de 300.000 a 180.000 pesos. Bufandas y gorras: 2 por 40.000.',
          'Grote uitverkoop bij Moda Andina! Alles met korting in winkelcentrum Gran Estación. Winterjassen: van 300.000 naar 180.000 pesos. Sjaals en petten: 2 voor 40.000.'],
        ['Jeans para hombre y mujer: 30 % de descuento. Puede pagar en efectivo o con tarjeta. Solo este fin de semana.',
          'Spijkerbroeken voor mannen en vrouwen: 30 % korting. U kunt contant of met de kaart betalen. Alleen dit weekend.'],
        ['Mensaje de Valeria: «¡Amiga! Estoy en Moda Andina. Hay una chaqueta negra muy linda, pero me queda grande. ¿Esta talla o la pequeña? La gris también es chévere y es más barata.»',
          'Bericht van Valeria: «Vriendin! Ik ben bij Moda Andina. Er is een heel mooi zwart jasje, maar het is me te groot. Deze maat of de kleine? Het grijze is ook leuk en is goedkoper.»'],
        ['«Al final me llevo la gris y unas medias rojas. ¡Y todo por menos de 200.000 pesos!»',
          '«Uiteindelijk neem ik het grijze en een paar rode sokken. En alles voor minder dan 200.000 pesos!»']
      ],
      gl: [['la venta', 'de uitverkoop'], ['la temporada', 'het seizoen'], ['de … a …', 'van … naar …'], ['más barata', 'goedkoper']],
      q: [
        { t: 'mc', q: '¿Cuánto cuesta ahora una chaqueta de invierno?', o: ['180.000 pesos', '300.000 pesos', '40.000 pesos'] },
        { t: 'mc', q: '¿Qué problema tiene la chaqueta negra?', o: ['Le queda grande', 'Es muy cara', 'No es linda'] },
        { t: 'mc', q: '¿Qué compra Valeria al final?', o: ['La chaqueta gris y unas medias rojas', 'La chaqueta negra', 'Dos bufandas'] },
        { t: 'mc', q: '¿Cuándo son las ofertas?', o: ['Solo este fin de semana', 'Todo el mes', 'De lunes a viernes'] }
      ]
    }
  });

  /* ───────── A1 · 10 ───────── */
  X('a1-10', {
    vocab: [
      ['abril', 'april'], ['mayo', 'mei'], ['junio', 'juni'], ['julio', 'juli'], ['agosto', 'augustus'], ['septiembre', 'september'], ['octubre', 'oktober'], ['noviembre', 'november'],
      ['la temperatura', 'de temperatuur'], ['los grados', 'de graden'], ['el pronóstico', 'de weersverwachting'], ['el sol', 'de zon'], ['la nieve', 'de sneeuw'],
      ['caluroso / calurosa', 'heet, warm (dag, klimaat)'], ['seco / seca', 'droog'], ['las vacaciones', 'de vakantie'], ['¡qué rico!', 'heerlijk!'], ['hace un frío tremendo', 'het is ontzettend koud']
    ],
    ex: [
      { t: 'cloze', s: 'Mañana ___ a llover en Bogotá.', a: ['va'], o: ['va', 'vas', 'voy'], nl: 'Morgen gaat het regenen in Bogota.', tag: 'ir-a' },
      { t: 'cloze', s: 'Ahora mismo los niños están ___.', h: 'dormir', a: ['durmiendo'], nl: 'Op dit moment liggen de kinderen te slapen.', x: 'Dormir → durmiendo (o → u).', tag: 'progressive' },
      { t: 'mc', q: 'In Buenos Aires is juli een wintermaand. Welke zin klopt?', o: ['En julio hace frío en Buenos Aires.', 'En julio hace mucho calor en Buenos Aires.', 'En julio está calor en Buenos Aires.'], tag: 'weather' },
      { t: 'tr', nl: 'Wat gaan jullie in augustus doen?', a: ['¿Qué van a hacer en agosto?', '¿Qué van a hacer ustedes en agosto?'], tag: 'ir-a' },
      { t: 'tr', nl: 'Het is vandaag twintig graden.', a: ['Hoy hace veinte grados.', 'Hoy estamos a veinte grados.', 'Hace veinte grados hoy.'], tag: 'weather' }
    ],
    reading: {
      t: 'El pronóstico del fin de semana', type: 'Weerbericht en bericht',
      p: [
        ['Buenos días, Monterrey. Este sábado va a hacer mucho calor: la temperatura va a llegar a treinta y ocho grados. Va a hacer sol todo el día.',
          'Goedemorgen, Monterrey. Deze zaterdag wordt het heel warm: de temperatuur gaat naar achtendertig graden. De hele dag gaat de zon schijnen.'],
        ['El domingo va a estar nublado por la mañana y por la tarde va a haber tormentas. Si van a salir, lleven el paraguas.',
          'Zondag is het ’s ochtends bewolkt en ’s middags komt er onweer. Als jullie naar buiten gaan, neem dan de paraplu mee.'],
        ['Mensaje de Diego: «Güey, ¿qué vas a hacer este fin de semana? El sábado vamos a ir a la presa con mis primos. Vamos a nadar y a hacer carne asada.»',
          'Bericht van Diego: «Gast, wat ga jij dit weekend doen? Zaterdag gaan we met mijn neven naar het stuwmeer. We gaan zwemmen en vlees barbecueën.»'],
        ['«El domingo me voy a quedar en casa porque va a llover. Ahora estoy preparando la maleta. ¡No olvides el bloqueador!»',
          '«Zondag blijf ik thuis, want het gaat regenen. Nu ben ik de tas aan het inpakken. Vergeet de zonnebrand niet!»']
      ],
      gl: [['va a haber', 'er komt / er zal zijn'], ['la presa', 'het stuwmeer'], ['la carne asada', 'gegrild vlees, barbecue (MX)'], ['no olvides…', 'vergeet … niet']],
      q: [
        { t: 'mc', q: '¿Qué tiempo va a hacer el sábado?', o: ['Mucho calor y sol', 'Tormentas', 'Frío y viento'] },
        { t: 'mc', q: '¿Qué va a pasar el domingo por la tarde?', o: ['Va a haber tormentas', 'Va a hacer sol', 'Va a nevar'] },
        { t: 'mc', q: '¿Qué van a hacer Diego y sus primos en la presa?', o: ['Nadar y hacer carne asada', 'Estudiar', 'Sacar fotos de la nieve'] },
        { t: 'mc', q: '¿Qué está haciendo Diego ahora?', o: ['Está preparando la maleta', 'Está nadando', 'Está durmiendo'] }
      ]
    }
  });
})(window.SPT);
