/* Uitbreiding «Op reis» voor Nederlands (cursus nl-es, uitleg in Latijns-Amerikaans Spaans): Nederlands per land/regio.
   Staat los van de basiscursus (Nederlands uit Nederland): de woorden hier komen niet in de gewone herhaling.
   Velden zoals in content/landen.js: words = [Nederlands, Spaans, label, uitspraak]; label i = informeel, g = grof.
   sounds = [titel, uitleg, voorbeeldzin, vertaling, neutraal (Nederlands uit Nederland, alleen als de woorden anders zijn)].
   Suriname en Curaçao hebben geen eigen computerstem: voiceNote legt dat uit. Zuid-Afrika = Afrikaans, de zustertaal.
   pin = vlagknop op de kaart (content/kaarten/nl.js, viewBox 600×640). */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('nl-es')) return;

  S.placeMeta = {
    target: 'nl', base: 'NL', suffix: '',
    intro: 'Tu curso base es el neerlandés de los Países Bajos. Aquí vas de visita: toca un lugar y escucha cómo suena el neerlandés allí, con sus palabras y su jerga. Lo que practiques aquí no entra en tus repasos normales.'
  };
  S.placeGroups = [
    { id: 'europa', name: 'Europa' },
    { id: 'verder', name: 'América y África' }
  ];

  S.places = [
    { id: 'nl', flag: '🇳🇱', name: 'Países Bajos', city: 'Ámsterdam · Róterdam · Eindhoven', speakers: '±18 mln hablantes', group: 'europa', voice: 'NL', listen: 'nl-NL', pin: [420, 230],
      hello: ['Hoi! Welkom in Nederland.', '¡Hola! Bienvenido a los Países Bajos.'],
      intro: 'El neerlandés de tu curso. Pero en el norte, en el sur y en la ciudad suena distinto: la g fuerte de Ámsterdam, la g suave de Brabante y mucha jerga.',
      sounds: [
        ['La g fuerte', 'En el norte la g y la ch suenan fuertes, como la j de «jamón»: «goedemorgen».', 'Goedemorgen! Gaat het goed?', '¡Buenos días! ¿Todo bien?'],
        ['El sur: houdoe', 'En Brabante y Limburgo la g es suave, y para despedirse dicen «houdoe».', 'Houdoe, tot morgen!', '¡Chao, hasta mañana!'],
        ['Palabras cortas', 'Los neerlandeses hablan rápido y directo, con muchas palabras cortas como «even» (un momentito) y «hoor».', 'Wacht even, ik kom zo, hoor.', 'Espera un momentito, ya voy.']
      ],
      words: [['gezellig', 'acogedor, agradable (no tiene traducción exacta)'], ['lekker', 'rico; también: agradable, bien'], ['hoi', 'hola'], ['doei', 'chao', 'i'], ['de borrel', 'el rato de tomar algo con amigos o colegas'], ['de fiets', 'la bicicleta'],
        ['de stroopwafel', 'el wafle con caramelo'], ['uitwaaien', 'pasear con viento para despejarse'], ['houdoe', 'chao (Brabante)', 'i'], ['moi', 'hola (Groninga y Frisia)', 'i'], ['doe normaal!', '¡compórtate! / ¡no exageres!', 'i'],
        ['lekker bezig!', '¡bien hecho!', 'i'], ['balen', 'qué fastidio', 'i'], ['gaaf', 'genial', 'i'], ['tof', 'chévere', 'i'], ['jemig!', '¡caramba!', 'i'], ['nou', 'pues, bueno'], ['even', 'un momentito'], ['kut!', '¡mierda! (muy grosero)', 'g']],
      fact: 'En los Países Bajos hay más bicicletas que personas: unos 23 millones de bicis para 18 millones de habitantes.' },

    { id: 'be', flag: '🇧🇪', name: 'Bélgica (Flandes)', city: 'Amberes · Gante · Bruselas', speakers: '±6,5 mln hablantes', group: 'europa', voice: 'BE', listen: 'nl-BE', pin: [330, 420],
      hello: ['Dag! Welkom in Vlaanderen.', '¡Hola! Bienvenido a Flandes.'],
      intro: 'En el norte de Bélgica se habla neerlandés (flamenco). Suena más suave y melódico, y tiene palabras propias. Un flamenco y un holandés se entienden sin problema.',
      sounds: [
        ['Ge y gij', 'En Flandes, de manera informal, se dice «ge» o «gij» en vez de «jij» (tú).', 'Hebt ge dat gezien?', '¿Viste eso?', 'Heb jij dat gezien?'],
        ['La g suave', 'La g y la ch son suaves, mucho más que en Holanda.', 'Goedemiddag, gaat het goed met u?', 'Buenas tardes, ¿cómo está usted?'],
        ['Allez en amai', 'Dos palabras que oyes todo el tiempo: «allez» (¡vamos! / bueno) y «amai» (¡guau!).', 'Allez, amai, dat is straf!', '¡Vamos, guau, eso es impresionante!', 'Kom op, jeetje, dat is indrukwekkend!']
      ],
      words: [['amai!', '¡guau!', 'i'], ['allez', '¡vamos! / bueno…'], ['goesting', 'ganas (en NL: zin)', 'i'], ['het frietkot', 'el puesto de papas fritas'], ['zalig', 'delicioso, genial'], ['straf', 'impresionante', 'i'],
        ['een pintje', 'una cerveza', 'i'], ['plezant', 'agradable'], ['ambetant', 'molesto, fastidioso', 'i'], ['de gsm', 'el celular (en NL: mobiel)'], ['de beenhouwer', 'el carnicero (en NL: slager)'], ['schoon', 'bonito (en NL: limpio)'],
        ['efkes', 'un momentito (en NL: even)', 'i'], ['dikke merci', 'muchas gracias', 'i'], ['salut', 'chao'], ['ne keer', 'una vez, un rato', 'i'], ['ge / gij', 'tú (informal)', 'i']],
      fact: 'Bélgica tiene tres idiomas oficiales: neerlandés, francés y alemán. Bruselas es oficialmente bilingüe.' },

    { id: 'sr', flag: '🇸🇷', name: 'Surinam', city: 'Paramaribo', speakers: '±600.000 hablantes', group: 'verder', voice: 'SR', listen: 'nl-NL', pin: [130, 96], line: true,
      voiceNote: 'Todavía no existe una voz de computadora de Surinam. Escuchas una voz neerlandesa; el neerlandés de Surinam suena más rítmico y claro.',
      hello: ['Fa waka? Welkom in Suriname!', '¿Qué tal? ¡Bienvenido a Surinam!'],
      intro: 'El único país de Sudamérica donde el neerlandés es idioma oficial. En la calle se mezcla con el sranan tongo, la lengua que todos entienden.',
      sounds: [
        ['Sranan tongo', 'El neerlandés de Surinam usa muchas palabras del sranan: «Fa waka?» = ¿qué tal?', 'Fa waka? Alles goed met je?', '¿Qué tal? ¿Todo bien?', 'Hoe gaat het? Alles goed met je?'],
        ['Vocales claras', 'La r suena fuerte y clara, y las vocales son más puras que en Holanda.', 'Ik ga morgen naar de markt in Paramaribo.', 'Mañana voy al mercado de Paramaribo.'],
        ['No span', '«No span» (sin tensión) significa: tranquilo, no te estreses.', 'No span, baya, het komt goed.', 'Tranquilo, hermano, todo saldrá bien.', 'Rustig maar, vriend, het komt goed.']
      ],
      words: [['fa waka?', '¿qué tal? (sranan)', 'i'], ['odi!', '¡hola! (sranan)'], ['mi boi', 'amigo, mi pana', 'i'], ['baya', 'hermano, amigo', 'i'], ['switi', 'dulce, rico (sranan)', 'i'], ['de tori', 'la historia, el chisme', 'i'],
        ['kaba', 'listo, terminado (sranan)', 'i'], ['no span', 'tranquilo, sin estrés', 'i'], ['tjo!', '¡guau! / ¡oye!', 'i'], ['de pom', 'el pom (plato al horno típico)'], ['de roti', 'el roti (pan plano con curry)'], ['mati', 'amigo, amiga', 'i'], ['bakra', 'el blanco, el europeo', 'i']],
      fact: 'En Surinam se hablan más de veinte idiomas: neerlandés, sranan tongo, sarnami (hindi), javanés, chino y lenguas indígenas y cimarronas.' },

    { id: 'cw', flag: '🇨🇼', name: 'Curazao y Aruba', city: 'Willemstad · Oranjestad', speakers: '±260.000 habitantes', group: 'verder', voice: 'CW', listen: 'nl-NL', pin: [148, 212], line: true,
      voiceNote: 'Todavía no existe una voz de computadora en papiamento. Escuchas una voz neerlandesa.',
      hello: ['Bon bini! Welkom op Curaçao.', '¡Bienvenido! Bienvenido a Curazao.'],
      intro: 'Islas del Caribe, frente a Venezuela. El neerlandés es oficial y se usa en la escuela, pero en casa la gente habla papiamento, un criollo con mucho español y portugués. ¡Vas a reconocer muchas palabras!',
      sounds: [
        ['Papiamento', 'En la calle se habla papiamento: «Bon dia! Kon ta bai?» = ¡Buenos días! ¿Cómo va?', 'Bon dia! Kon ta bai?', '¡Buenos días! ¿Cómo va?', 'Goedemorgen! Hoe gaat het?'],
        ['Mezcla', 'Mucha gente mezcla neerlandés y papiamento en la misma frase.', 'Ik ga even naar de toko, dushi.', 'Voy un momentito a la tienda, cariño.', 'Ik ga even naar de winkel, schat.']
      ],
      words: [['bon bini', 'bienvenido (papiamento)'], ['bon dia', 'buenos días (papiamento)'], ['kon ta bai?', '¿cómo va? (papiamento)', 'i'], ['mi ta bon', 'estoy bien (papiamento)'], ['danki', 'gracias (papiamento)'], ['dushi', 'cariño; también: rico, lindo', 'i'],
        ['ayo', 'chao (papiamento)'], ['de toko', 'la tiendita'], ['pasa un bon dia', 'que pases un buen día (papiamento)'], ['mi stima bo', 'te quiero (papiamento)'], ['pika', 'picante (papiamento)'], ['ta kiko?', '¿qué pasa? (papiamento)', 'i']],
      fact: 'Aruba, Curazao y Sint Maarten son países propios dentro del Reino de los Países Bajos. Bonaire, Saba y San Eustaquio son municipios neerlandeses.' },

    { id: 'za', flag: '🇿🇦', name: 'Sudáfrica (afrikáans)', city: 'Pretoria · Ciudad del Cabo', speakers: '±7 mln hablantes de afrikáans', group: 'verder', voice: 'AF', listen: 'af-ZA', pin: [112, 552], line: true,
      hello: ['Goeie môre! Welkom in Suid-Afrika.', '¡Buenos días! Bienvenido a Sudáfrica.'],
      intro: 'El afrikáans no es neerlandés, sino su «idioma hermano»: viene del neerlandés que llegó a Ciudad del Cabo en el siglo XVII. Con tu neerlandés entiendes muchísimo.',
      sounds: [
        ['Idioma hermano', 'Compara: «Hoe gaan dit met jou?» y «Hoe gaat het met jou?» significan lo mismo.', 'Hoe gaan dit met jou?', '¿Cómo estás?', 'Hoe gaat het met jou?'],
        ['Doble negación', 'El afrikáans niega dos veces: «Ek praat nie Afrikaans nie».', 'Ek praat nie Afrikaans nie.', 'No hablo afrikáans.', 'Ik spreek geen Afrikaans.'],
        ['Más sencillo', 'Los verbos casi no cambian: «ek is, jy is, ons is» (yo soy, tú eres, nosotros somos).', 'Ek is moeg en jy is honger.', 'Yo estoy cansado y tú tienes hambre.', 'Ik ben moe en jij hebt honger.']
      ],
      words: [['baie dankie', 'muchas gracias (NL: heel erg bedankt)'], ['goeie môre', 'buenos días (NL: goedemorgen)'], ['totsiens', 'adiós (NL: tot ziens)'], ['lekker', 'rico, genial'], ['die braai', 'el asado (NL: barbecue)'], ['baie', 'mucho (NL: veel)'],
        ['mooi', 'bonito'], ['kuier', 'visitar, pasar el rato (NL: op bezoek gaan)'], ['ek', 'yo (NL: ik)'], ['jy', 'tú (NL: jij)'], ['eina!', '¡ay! (cuando algo duele)', 'i'], ['ag nee!', '¡ay, no!', 'i'], ['die bakkie', 'la camioneta (pick-up)'], ['dis reg', 'está bien (NL: dat is goed)']],
      fact: 'El afrikáans es uno de los doce idiomas oficiales de Sudáfrica. Un neerlandés entiende un texto en afrikáans casi sin estudiar.' }
  ];
})(window.SPT);
