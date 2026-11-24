/* Uitbreiding «Op reis»: Spaans per land (accent, slang, uitdrukkingen).
   Staat los van de basiscursus: de woorden hier komen niet in je gewone herhaling.
   Per land:
     voice  = landcode van de opnamestem (tools/tts-texts.js), listen = taalcode voor de microfoon
     hello  = [begroeting, vertaling]
     sounds = [titel, uitleg, voorbeeldzin, vertaling, neutraal]: wat je hoort; de zin klinkt «hier» (lokale stem).
              neutraal = dezelfde zin zoals in de basiscursus (alleen als de woorden anders zijn; anders dezelfde zin, neutrale stem)
     words  = [Spaans, Nederlands, label, uitspraak]: label i = informeel, g = grof (alleen herkennen);
              leenwoorden krijgen hun herkomst in de vertaling, bijv. «(uit het Engels: friend)»;
              uitspraak (optioneel) = hoe de stem het moet lezen als de spelling dat niet laat zien
     pin    = plek van de vlagknop op de kaart (viewBox 600×800), line = lijntje naar het land
     group  = indeling in de lijst onder de kaart */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('es-nl')) return;

  S.placeGroups = [
    { id: 'noord', name: 'Noord- en Midden-Amerika' },
    { id: 'caribe', name: 'Caribisch gebied' },
    { id: 'zuid', name: 'Zuid-Amerika' },
    { id: 'verder', name: 'Europa, Afrika en de VS' }
  ];

  S.places = [
    { id: 'mx', flag: '🇲🇽', name: 'Mexico', city: 'Ciudad de México', speakers: '±130 mln', group: 'noord', voice: 'MX', listen: 'es-MX', pin: [104, 122],
      hello: ['¡Qué onda! Bienvenido a México.', 'Hoe is het? Welkom in Mexico.'],
      intro: 'Het land met de meeste Spaanssprekers ter wereld. Wat je in de basiscursus leert, ligt hier heel dichtbij.',
      sounds: [
        ['Duidelijke medeklinkers', 'De s blijft hoorbaar, ook aan het eind van een woord. Daarom vinden veel mensen Mexicaans Spaans makkelijk te volgen.', 'Nos vemos más tarde en el centro.', 'We zien elkaar straks in het centrum.'],
        ['Zangerige toon', 'Vooral in Mexico-Stad gaat de toon aan het eind van een zin omhoog en weer omlaag.', '¿Y ahora qué vamos a hacer?', 'En wat gaan we nu doen?'],
        ['Verkleinwoorden', '«ahorita», «cafecito», «tantito»: kleiner maken klinkt vriendelijker. Let op: «ahorita» kan «nu meteen» betekenen, maar ook «straks, misschien».', 'Ahorita vengo, voy por un cafecito.', 'Ik kom zo, ik haal even een koffietje.']
      ],
      words: [['¿qué onda?', 'hoe is het?', 'i'], ['chido / padre', 'tof', 'i'], ['¡qué padre!', 'wat tof!', 'i'], ['güey', 'gast', 'i'], ['la lana', 'het geld', 'i'], ['la chamba', 'het werk', 'i'],
        ['¡órale!', 'oké! / kom op! / wauw!', 'i'], ['el camión', 'de bus'], ['¿mande?', 'pardon? (beleefd)'], ['ahorita', 'zo meteen'], ['¡aguas!', 'pas op!', 'i'], ['¡no manches!', 'dat meen je niet!', 'i'],
        ['el chavo / la chava', 'de jongen / het meisje', 'i'], ['pinche', 'klote-, rot- (voor een woord)', 'g'], ['¡qué oso!', 'wat gênant!', 'i'], ['¿neta?', 'echt waar?', 'i'], ['el cuate', 'de vriend', 'i'], ['la morra', 'het meisje', 'i'], ['¡qué chafa!', 'wat slecht, wat nep!', 'i'], ['un buen', 'heel veel', 'i'], ['¡ándale!', 'kom op! / precies!', 'i'], ['la peda', 'het drinkfeest', 'i'], ['crudo / cruda', 'met een kater', 'i'], ['fresa', 'kakker', 'i'], ['¡a huevo!', 'zeker weten!', 'g']],
      fact: 'Veel tekenfilms en series worden in Mexico nagesynchroniseerd. Daarom kent heel Latijns-Amerika het Mexicaanse accent.' },

    { id: 'gt', flag: '🇬🇹', name: 'Guatemala', city: 'Ciudad de Guatemala', speakers: '±18 mln', group: 'noord', voice: 'GT', listen: 'es-GT', pin: [112, 196], line: true,
      hello: ['¡Qué onda, vos! Bienvenido a Guatemala.', 'Hoe is het, jij? Welkom in Guatemala.'],
      intro: 'Het land van de Maya’s. Naast Spaans spreken veel mensen een Mayataal, zoals K’iche’.',
      sounds: [
        ['Voseo', 'Onder vrienden zeggen ze «vos» in plaats van «tú», met een eigen werkwoordsvorm: vos sabés, vos tenés.', '¿Vos querés ir al mercado conmigo?', 'Wil jij met mij naar de markt?', '¿Tú quieres ir al mercado conmigo?'],
        ['Zachte rr', 'De rr klinkt vaak zacht, bijna als de «zj» in «garage». De s blijft wel goed hoorbaar.', 'El carro rojo está en la calle.', 'De rode auto staat op straat.']
      ],
      words: [['chapín / chapina', 'Guatemalteek / Guatemalteekse', 'i'], ['¡qué chilero!', 'wat tof!', 'i'], ['el pisto', 'het geld', 'i'], ['la chamba', 'het werk', 'i'], ['el patojo / la patoja', 'het kind, de jongere', 'i'],
        ['¡a la gran!', 'wauw! / jeetje!', 'i'], ['la chumpa', 'de jas'], ['la camioneta', 'de bus (tussen steden)'], ['¿va?', 'oké? / afgesproken?', 'i'], ['cabal', 'precies, klopt', 'i'], ['shute', 'nieuwsgierig', 'i', 'chute'], ['muchá', 'jongens! (tegen een groep)', 'i'], ['la mara', 'de vrienden, de groep', 'i'], ['¡qué clavo!', 'wat een gedoe!', 'i'], ['¡chish!', 'bah! / gatver!', 'i'], ['el cuate', 'de vriend', 'i'], ['chucho', 'de hond (ook: gierig)', 'i'], ['la chela', 'het biertje', 'i'], ['¡a la gran puchis!', 'jeetje!', 'i']],
      fact: 'De kleurrijke «chicken buses» zijn oude Amerikaanse schoolbussen. Ze heten hier «camionetas».' },

    { id: 'sv', flag: '🇸🇻', name: 'El Salvador', city: 'San Salvador', speakers: '±6 mln', group: 'noord', voice: 'SV', listen: 'es-SV', pin: [132, 236], line: true,
      hello: ['¡Hola, vos! Bienvenido a El Salvador.', 'Hoi, jij! Welkom in El Salvador.'],
      intro: 'Het kleinste land van het Midden-Amerikaanse vasteland. Bekend om de pupusa, een gevulde maïspannenkoek.',
      sounds: [
        ['Voseo', '«Vos» onder vrienden: vos sos, vos podés.', '¿Vos de dónde sos?', 'Waar kom jij vandaan?', '¿Tú de dónde eres?'],
        ['Zachte s', 'Aan het eind van een lettergreep klinkt de s vaak als een h: «los pájaros» wordt «loh pájaroh».', 'Los pájaros están en el árbol.', 'De vogels zitten in de boom.']
      ],
      words: [['guanaco / guanaca', 'Salvadoraan / Salvadoraanse', 'i'], ['¡qué chivo!', 'wat tof!', 'i'], ['el cipote / la cipota', 'het kind', 'i'], ['el chero / la chera', 'de maat, de vriend(in)', 'i'],
        ['el pisto', 'het geld', 'i'], ['la pupusa', 'de gevulde maïspannenkoek'], ['vaya pues', 'oké dan'], ['¡puchica!', 'verdorie!', 'i'], ['la chamba', 'het werk', 'i'], ['bayunco', 'onnozel, gek', 'i'], ['¿qué ondas?', 'hoe is het?', 'i'], ['¡va pues!', 'oké, goed!', 'i'], ['la jaña', 'de vriendin', 'i'], ['bolo / bola', 'dronken', 'i'], ['la birria', 'het bier', 'i'], ['chucho', 'de hond (ook: gierig)', 'i'], ['chulón / chulona', 'naakt', 'i'], ['¡qué pijudo!', 'wat geweldig!', 'g']],
      fact: 'Elke tweede zondag van november is het de nationale Dag van de Pupusa.' },

    { id: 'hn', flag: '🇭🇳', name: 'Honduras', city: 'Tegucigalpa', speakers: '±10 mln', group: 'noord', voice: 'HN', listen: 'es-HN', pin: [204, 158], line: true,
      hello: ['¡Hola, vos! Bienvenido a Honduras.', 'Hoi, jij! Welkom in Honduras.'],
      intro: 'Hondurezen noemen zichzelf «catrachos». Aan de kust en op de eilanden hoor je ook Engels en Garifuna.',
      sounds: [
        ['Voseo', 'Onder vrienden «vos»: vos querés, vos tenés.', '¿Y vos qué querés comer?', 'En wat wil jij eten?', '¿Y tú qué quieres comer?'],
        ['De s valt weg', 'De s aan het eind wordt een zachte h of verdwijnt: «¿cómo estás?» klinkt als «¿cómo ehtá?».', '¿Cómo estás, mi amigo?', 'Hoe gaat het, vriend?']
      ],
      words: [['catracho / catracha', 'Hondurees / Hondurese', 'i'], ['tuani', 'tof', 'i'], ['cheque', 'oké, prima', 'i'], ['el pisto', 'het geld', 'i'], ['el cipote / la cipota', 'het kind', 'i'],
        ['alero / alera', 'beste vriend(in)', 'i'], ['la baleada', 'de gevulde tortilla met bonen'], ['¡púchica!', 'verdorie!', 'i'], ['la mara', 'de groep mensen (ook: bende)', 'i'], ['el bolo', 'de dronkaard', 'i'], ['maje', 'gast', 'i'], ['el volado', 'het ding', 'i'], ['la pulpería', 'de buurtwinkel'], ['chele / chela', 'lichthuidige, blanke', 'i'], ['chucho', 'de hond', 'i'], ['la birra', 'het bier', 'i'], ['¡qué pena!', 'sorry / wat gênant']],
      fact: 'Op de Bay Islands (Roatán, Utila) is Engels voor veel mensen de moedertaal.' },

    { id: 'ni', flag: '🇳🇮', name: 'Nicaragua', city: 'Managua', speakers: '±7 mln', group: 'noord', voice: 'NI', listen: 'es-NI', pin: [244, 196], line: true,
      hello: ['¡Hola, vos! Bienvenido a Nicaragua.', 'Hoi, jij! Welkom in Nicaragua.'],
      intro: 'Land van meren en vulkanen. Nicaraguanen noemen zichzelf «nicas». Voseo hoor je hier overal, zelfs in reclames.',
      sounds: [
        ['Voseo', '«Vos» is hier de gewone jij-vorm: vos sabés, vos vivís.', '¿Vos sabés dónde queda el lago?', 'Weet jij waar het meer is?', '¿Tú sabes dónde queda el lago?'],
        ['De s valt weg', 'Net als in Honduras klinkt de s aan het eind als een h of verdwijnt.', 'Vamos a la playa mañana.', 'We gaan morgen naar het strand.']
      ],
      words: [['nica', 'Nicaraguaan(se)', 'i'], ['tuani', 'tof', 'i'], ['el chunche', 'het ding', 'i'], ['el chavalo / la chavala', 'de jongen / het meisje', 'i'], ['los reales', 'het geld', 'i'],
        ['¡dale pues!', 'oké, doen we!', 'i'], ['¿idiay?', 'hé? / en nu? / hoe zit dat?', 'i'], ['chele / chela', 'blanke, lichthuidige (ook: buitenlander)', 'i'], ['el gallo pinto', 'rijst met bonen (ontbijt)'], ['¡qué tuani!', 'wat tof!', 'i'], ['¡chocho!', 'jeetje!', 'i'], ['tapudo / tapuda', 'brutaal, grote mond', 'i'], ['¡salvaje!', 'geweldig!', 'i'], ['¡chiva!', 'pas op!', 'i'], ['el maje', 'de gast', 'i'], ['la pulpería', 'de buurtwinkel'], ['¡qué vergón!', 'wat tof!', 'g']],
      fact: 'Het Nicaraguameer is zo groot dat er haaien in zwemmen die vanuit zee de rivier op zijn gekomen.' },

    { id: 'cr', flag: '🇨🇷', name: 'Costa Rica', city: 'San José', speakers: '±5 mln', group: 'noord', voice: 'CR', listen: 'es-CR', pin: [176, 274], line: true,
      hello: ['¡Pura vida! Bienvenido a Costa Rica.', 'Pura vida! Welkom in Costa Rica.'],
      intro: '«Ticos» staan bekend om «pura vida» en om hun beleefdheid. Veel mensen zeggen «usted», zelfs tegen vrienden en kinderen.',
      sounds: [
        ['Usted voor iedereen', 'Waar jij «tú» zou zeggen, zegt een Costa Ricaan vaak «usted».', '¿Usted quiere un cafecito?', 'Wil je een koffietje?', '¿Tú quieres un cafecito?'],
        ['Zachte r', 'De rr en de r aan het begin van een woord klinken bijna als de Franse j: «carro» klinkt als «cazjo».', 'El carro de Rodrigo es rojo.', 'De auto van Rodrigo is rood.'],
        ['Verkleinwoord op -tico', 'Niet «momentito» maar «momentico», niet «chiquitito» maar «chiquitico».', 'Espere un momentico, por favor.', 'Wacht heel even, alstublieft.', 'Espere un momentito, por favor.']
      ],
      words: [['pura vida', 'top! / alles goed / dag!'], ['mae', 'gast', 'i'], ['tuanis', 'tof', 'i'], ['¡qué chiva!', 'wat tof!', 'i'], ['el brete', 'het werk', 'i'], ['la birra', 'het bier', 'i'],
        ['el chunche', 'het ding', 'i'], ['¡upe!', 'hallo? (als je bij iemand binnenstapt)'], ['diay', 'tja, nou', 'i'], ['el tico / la tica', 'Costa Ricaan / Costa Ricaanse'], ['la soda', 'het eenvoudige eettentje'], ['jalar', 'verkering hebben', 'i'], ['el carajillo', 'het kind', 'i'], ['¡qué pereza!', 'geen zin in!', 'i'], ['la jupa', 'het hoofd', 'i'], ['¡qué sal!', 'balen! / pech!', 'i'], ['al chile', 'echt waar', 'i'], ['la harina', 'het geld', 'i'], ['la choza', 'het huis', 'i'], ['buenas', 'hallo (bij binnenkomst)']],
      fact: 'Costa Rica heeft sinds 1948 geen leger meer.' },

    { id: 'pa', flag: '🇵🇦', name: 'Panama', city: 'Ciudad de Panamá', speakers: '±4,5 mln', group: 'noord', voice: 'PA', listen: 'es-PA', pin: [226, 286], line: true,
      hello: ['¡Qué xopá! Bienvenido a Panamá.', 'Hoe is het? Welkom in Panama.', 'Qué chopá. Bienvenido a Panamá.'],
      intro: 'Het land van het kanaal, tussen twee oceanen. Panamees Spaans is snel en Caribisch, met veel Engelse woorden.',
      sounds: [
        ['Snel, de s valt weg', 'Panamezen praten snel. De s aan het eind en de d tussen klinkers verdwijnen: «pelado» wordt «pelao».', '¿Para dónde vas, mi hermano?', 'Waar ga je heen, broer?'],
        ['Pa’ in plaats van para', '«Para» wordt bijna altijd «pa’».', 'Voy pa’ la playa con los pelaos.', 'Ik ga met de kids naar het strand.', 'Voy para la playa con los niños.'],
        ['Engelse leenwoorden', 'Door het kanaal en de Amerikanen: «parquear», «bróder», «el man».', 'Voy a parquear el carro aquí.', 'Ik ga de auto hier parkeren.', 'Voy a estacionar el carro aquí.']
      ],
      words: [['¿qué xopá?', 'hoe is het? (spreek uit: ke sjopá)', 'i', 'qué chopá'], ['ofi', 'oké! / tuurlijk! (uit het Engels: official)', 'i'], ['el pelao / la pelaa', 'het kind', 'i'], ['¡chuleta!', 'jeetje! / verdorie!', 'i'],
        ['¡juega vivo!', 'wees slim, let op!', 'i'], ['el chantin', 'het huis', 'i'], ['la fría', 'het koude biertje', 'i'], ['el man', 'de vent, de gast', 'i'], ['la vaina', 'het ding, het gedoe', 'i'],
        ['¡ayala vida!', 'oh jee! / wauw!', 'i'], ['el bróder', 'de maat, broer (uit het Engels: brother)', 'i'], ['la chiva', 'het (oude) busje', 'i'], ['el frin', 'de vriend (uit het Engels: friend)', 'i'], ['¡chuzo!', 'wauw! / jeetje!', 'i'], ['buco', 'heel veel', 'i'], ['pritty', 'mooi, tof (uit het Engels: pretty)', 'i'], ['al cien', 'top, helemaal goed', 'i'], ['el chenchén', 'het geld', 'i'], ['el bochinche', 'de roddel', 'i'], ['¡diablo!', 'jeetje!', 'i'], ['la pinta', 'het biertje', 'i'], ['el chichí', 'de baby', 'i'], ['yeyé', 'kakker', 'i'], ['rakataka', 'ordinair, goedkoop', 'i']],
      fact: 'Panama betaalt met de Amerikaanse dollar. De eigen munt, de balboa, bestaat alleen als muntgeld.' },

    { id: 'cu', flag: '🇨🇺', name: 'Cuba', city: 'La Habana', speakers: '±11 mln', group: 'caribe', voice: 'CU', listen: 'es-CU', pin: [246, 106], line: true, unit: 'b2-06',
      hello: ['¡Asere, qué bolá! Bienvenido a Cuba.', 'Hé maat, hoe is het? Welkom in Cuba.'],
      intro: 'Snel, muzikaal en vol eigen woorden. De s en de d aan het eind vallen vaak weg.',
      sounds: [
        ['De s valt weg', '«¿Cómo estás?» klinkt als «¿cómo etá?» en «los amigos» als «lo amigo».', '¿Cómo estás? Estamos bien.', 'Hoe gaat het? Met ons gaat het goed.'],
        ['Tú vóór het werkwoord', 'In vragen zetten Cubanen «tú» vóór het werkwoord.', '¿Qué tú quieres comer?', 'Wat wil jij eten?', '¿Qué quieres comer?'],
        ['Dubbele medeklinker', 'In het westen wordt een r of l voor een medeklinker vaak een dubbele klank: «puerta» klinkt als «puetta».', 'Abre la puerta, por favor.', 'Doe de deur open, alsjeblieft.']
      ],
      words: [['asere', 'maat', 'i'], ['¿qué bolá?', 'hoe is het?', 'i'], ['la guagua', 'de bus'], ['la pincha', 'het werk', 'i'], ['el yuma', 'de buitenlander, vooral Amerikaan (van «Yuma», de VS)', 'i'],
        ['¡qué bárbaro!', 'geweldig!'], ['la jeva', 'het meisje, de vriendin', 'i'], ['los fulas', 'de dollars', 'i'], ['¡tremendo!', 'enorm, geweldig'], ['la jama', 'het eten', 'i'],
        ['estar en talla', 'er goed uitzien, helemaal in zijn', 'i'], ['¡pinga!', 'verdorie! (heel grof)', 'g'], ['la Yuma', 'de VS', 'i'], ['el socio', 'de maat', 'i'], ['¡alabao!', 'jeetje!', 'i'], ['el jinetero', 'iemand die toeristen aanklampt', 'i'], ['el almendrón', 'de oude Amerikaanse taxi'], ['el paladar', 'het privérestaurant'], ['¡qué cosa más grande!', 'wat geweldig!'], ['no es fácil', 'het is niet makkelijk (veelgehoorde zucht)']],
      fact: '«Guagua» betekent in de Cariben «bus», maar in de Andes «baby». Handig om te weten!' },

    { id: 'do', flag: '🇩🇴', name: 'Dominicaanse Republiek', city: 'Santo Domingo', speakers: '±11 mln', group: 'caribe', voice: 'DO', listen: 'es-DO', pin: [300, 124], line: true, unit: 'b2-06',
      hello: ['¿Qué lo que? Bienvenido a la República Dominicana.', 'Hoe is het? Welkom in de Dominicaanse Republiek.'],
      intro: 'Supersnel en vol energie. Dominicanen hebben heel veel eigen woorden.',
      sounds: [
        ['De s valt weg', 'De s aan het eind hoor je bijna nooit: «los muchachos» wordt «lo muchacho».', 'Los muchachos están en la casa.', 'De jongens zijn thuis.'],
        ['r en l worden i', 'In het noorden (Cibao) wordt een r of l aan het eind van een lettergreep een i: «por favor» klinkt als «poi favoi».', 'Por favor, ¿me da un café?', 'Mag ik een koffie, alstublieft?'],
        ['Tú vóór het werkwoord', 'Net als in Cuba: «¿Qué tú dices?»', '¿Qué tú dices?', 'Wat zeg jij?', '¿Qué dices?']
      ],
      words: [['¿qué lo que?', 'hoe is het?', 'i'], ['el tíguere', 'de slimme gast, het boefje', 'i'], ['¡qué chévere!', 'wat tof!'], ['la vaina', 'het ding, het gedoe', 'i'], ['un chin', 'een beetje', 'i'],
        ['el colmado', 'de buurtwinkel'], ['el concho', 'de gedeelde taxi', 'i'], ['el motoconcho', 'de mototaxi'], ['jevo / jeva', 'vriendje / vriendinnetje', 'i'], ['dique', 'zogenaamd', 'i'],
        ['¡diache!', 'jeetje!', 'i'], ['el pariguayo', 'de sukkel, de saaie gast', 'i'], ['la guagua', 'de bus'], ['¡manín!', 'maat!', 'i'], ['¡jevi!', 'tof! (uit het Engels: heavy)', 'i'], ['la bulla', 'het lawaai, het feest', 'i'], ['el bonche', 'het feest, de groep', 'i'], ['la chercha', 'het gezellige praatje', 'i'], ['¡ta to!', 'alles goed!', 'i', 'tá tó'], ['los cuartos', 'het geld', 'i']],
      fact: 'Bachata en merengue komen allebei uit de Dominicaanse Republiek.' },

    { id: 'pr', flag: '🇵🇷', name: 'Puerto Rico', city: 'San Juan', speakers: '±3 mln', group: 'caribe', voice: 'PR', listen: 'es-PR', pin: [350, 138], line: true, unit: 'b2-06',
      hello: ['¡Wepa! Bienvenido a Puerto Rico.', 'Joepie! Welkom in Puerto Rico.'],
      intro: 'Hoort bij de VS, maar het dagelijks leven gaat in het Spaans. Met veel Engelse woorden en de bekende l in plaats van r.',
      sounds: [
        ['r wordt l', 'Een r aan het eind van een lettergreep klinkt als een l: «comer» wordt «comel», «parque» wordt «palque».', 'Voy a comer en el parque.', 'Ik ga in het park eten.'],
        ['rr achter in de keel', 'Sommige Puerto Ricanen spreken de rr achter in de keel uit, bijna als een Nederlandse g of r.', 'El carro de Ramón corre rápido.', 'De auto van Ramón rijdt snel.'],
        ['Tú vóór het werkwoord', 'Net als in Cuba en de Dominicaanse Republiek.', '¿Qué tú vas a hacer hoy?', 'Wat ga jij vandaag doen?', '¿Qué vas a hacer hoy?']
      ],
      words: [['¡wepa!', 'joepie!', 'i'], ['boricua', 'Puerto Ricaan(se)'], ['el corillo', 'de vriendengroep', 'i'], ['janguear', 'uitgaan, rondhangen (uit het Engels: to hang out)', 'i'], ['la guagua', 'de bus'],
        ['el pana', 'de maat', 'i'], ['¡ay bendito!', 'ach gut! / oh jee!'], ['brutal', 'geweldig', 'i'], ['el zafacón', 'de vuilnisbak'], ['los chavos', 'het geld', 'i'], ['¡acho!', 'jeetje! / hé!', 'i'], ['estar al garete', 'stuurloos zijn', 'i'], ['la china', 'de sinaasappel'], ['el mahón', 'de spijkerbroek'], ['el bizcocho', 'de taart'], ['la nena', 'het meisje', 'i'], ['bregar', 'ergens mee dealen', 'i'], ['¡ea rayos!', 'jeetje!', 'i'], ['¡qué jevi!', 'wat tof!', 'i']],
      fact: '«Janguear» komt van het Engelse «to hang out». Dat soort mengtaal heet Spanglish.' },

    { id: 've', flag: '🇻🇪', name: 'Venezuela', city: 'Caracas', speakers: '±28 mln', group: 'zuid', voice: 'VE', listen: 'es-VE', pin: [334, 244], unit: 'b2-13',
      hello: ['¡Epa, chamo! ¿Qué más? Bienvenido a Venezuela.', 'Hé gast, hoe is het? Welkom in Venezuela.'],
      intro: 'Vrolijk en melodieus Spaans met veel slang. Veel Venezolanen wonen nu in andere landen, dus je hoort het overal.',
      sounds: [
        ['Zachte s', 'Aan de kust en in Caracas wordt de s aan het eind zacht of valt weg.', 'Nos vemos mañana, mi pana.', 'Tot morgen, maat.'],
        ['Melodie', 'Venezolanen praten met een duidelijke, zangerige melodie en leggen klemtoon op het laatste woord.', 'Chévere, nos vemos a las tres.', 'Top, we zien elkaar om drie uur.']
      ],
      words: [['chamo / chama', 'jongen / meisje, gast', 'i'], ['el pana', 'de maat', 'i'], ['¡chévere!', 'tof!'], ['¡qué fino!', 'wat tof!', 'i'], ['¿qué más?', 'hoe gaat het?', 'i'],
        ['la arepa', 'het gevulde maïsbroodje'], ['burda de', 'heel veel', 'i'], ['la vaina', 'het ding, het gedoe', 'i'], ['¡qué ladilla!', 'wat irritant! / wat saai!', 'i'], ['el ratón', 'de kater (na drinken)', 'i'],
        ['la cola', 'de lift (meerijden)', 'i'], ['¡epa!', 'hé! / hallo!', 'i'], ['marico', 'gast (onder vrienden; ook scheldwoord)', 'g'], ['las cotufas', 'de popcorn'], ['¡qué molleja!', 'wauw!', 'i'], ['¡naguará!', 'wauw! (Lara)', 'i'], ['el musiú', 'de buitenlander', 'i'], ['echar los perros', 'flirten', 'i'], ['la rumba', 'het feest', 'i'], ['el bululú', 'de menigte', 'i'], ['jalabolas', 'slijmbal', 'g'], ['¡qué arrecho!', 'wat heftig! (ook: boos)', 'g']],
      fact: 'De Salto Ángel in Venezuela is de hoogste waterval ter wereld (979 meter).' },

    { id: 'co', flag: '🇨🇴', name: 'Colombia', city: 'Bogotá', speakers: '±52 mln', group: 'zuid', voice: 'CO', listen: 'es-CO', pin: [276, 290],
      hello: ['¡Quiubo, parce! Bienvenido a Colombia.', 'Hoe is het, maat? Welkom in Colombia.'],
      intro: 'Heel verschillende accenten: helder en beleefd in Bogotá, zangerig in Medellín, Caribisch aan de kust.',
      sounds: [
        ['Bogotá: helder en beleefd', 'Duidelijke uitspraak en veel «usted», ook onder vrienden en in relaties.', '¿Usted qué quiere tomar, parcero?', 'Wat wil jij drinken, maat?', '¿Tú qué quieres tomar, amigo?'],
        ['Kust: Caribisch', 'In Cartagena en Barranquilla valt de s aan het eind weg en «para» wordt «pa’».', 'Vamos pa’ la playa, que está bacano.', 'Kom, naar het strand, het is top.', 'Vamos a la playa, que está muy bonito.'],
        ['Medellín: voseo', '«Paisas» gebruiken «vos» met een zangerige toon en vaak «pues» aan het eind.', '¿Vos qué hacés, pues?', 'Wat doe jij nou?', '¿Tú qué haces?']
      ],
      words: [['parce / parcero', 'maat, vriend', 'i'], ['¡qué chévere! / ¡qué bacano!', 'wat tof!', 'i'], ['¿quiubo?', 'hoe is het?', 'i'], ['un tinto', 'een zwarte koffie'], ['la plata', 'het geld'],
        ['¡qué pena!', 'sorry / wat gênant'], ['¡listo!', 'oké!'], ['el camello', 'het werk', 'i'], ['¿me regala…?', 'mag ik … ? (bij bestellen)'], ['la rumba', 'het feest', 'i'],
        ['¡qué boleta!', 'wat gênant!', 'i'], ['¡hágale!', 'doe maar! / kom op!', 'i'], ['¡qué chimba!', 'wat tof! (straattaal)', 'i'], ['¡qué gonorrea!', 'wat walgelijk! (heel grof)', 'g'], ['¡qué nota!', 'wat tof!', 'i'], ['¡de una!', 'tuurlijk, doen we!', 'i'], ['¡qué mamera!', 'wat saai, wat vermoeiend!', 'i'], ['el guayabo', 'de kater', 'i'], ['¡a la orden!', 'tot uw dienst (in winkels)'], ['el man / la vieja', 'de gast / de vrouw', 'i'], ['la buseta', 'het busje']],
      fact: '«¿Me regala un café?» betekent gewoon «mag ik een koffie?». Je betaalt er wel voor!' },

    { id: 'ec', flag: '🇪🇨', name: 'Ecuador', city: 'Quito', speakers: '±18 mln', group: 'zuid', voice: 'EC', listen: 'es-EC', pin: [212, 322], line: true,
      hello: ['¡Qué más, ñaño! Bienvenido a Ecuador.', 'Hoe is het, broer? Welkom in Ecuador.'],
      intro: 'Van de Andes tot de Galápagos. In Quito praten ze rustig en duidelijk, aan de kust (Guayaquil) sneller en Caribischer.',
      sounds: [
        ['Andes: rustig en duidelijk', 'Medeklinkers blijven goed hoorbaar en klinkers zijn kort.', 'Ya mismo llegamos a Quito.', 'We zijn zo in Quito.', 'Pronto llegamos a Quito.'],
        ['Kust: de s valt weg', 'In Guayaquil klinkt de s aan het eind als een h.', 'Los manes están en la playa.', 'De gasten zijn op het strand.', 'Los chicos están en la playa.'],
        ['«Dame pasando»', 'Een beleefd verzoek: «dame pasando la sal» = geef me even het zout.', 'Dame pasando la sal, por favor.', 'Geef me even het zout, alsjeblieft.', '¿Me pasas la sal, por favor?']
      ],
      words: [['ya mismo', 'zo meteen (kan nog even duren!)'], ['ñaño / ñaña', 'broer / zus, maat', 'i'], ['¡chévere!', 'tof!'], ['la guagua', 'de baby (Andes)'], ['el man', 'de gast', 'i'],
        ['¡achachay!', 'brr, koud!'], ['¡arrarray!', 'au, heet!'], ['el chuchaqui', 'de kater', 'i'], ['¡de ley!', 'zeker weten!', 'i'], ['el pana', 'de maat', 'i'], ['la buseta', 'het busje'], ['¿qué fue?', 'hoe is het? (kust)', 'i'], ['bacán', 'tof', 'i'], ['¡qué bestia!', 'wauw!', 'i'], ['la jama', 'het eten', 'i'], ['la farra', 'het feest', 'i'], ['chulla vida', 'je leeft maar één keer']],
      fact: '«Achachay» en «arrarray» komen uit het Quechua, de taal van de Inca’s.' },

    { id: 'pe', flag: '🇵🇪', name: 'Peru', city: 'Lima', speakers: '±34 mln', group: 'zuid', voice: 'PE', listen: 'es-PE', pin: [264, 392],
      hello: ['¿Qué tal, causa? Bienvenido al Perú.', 'Hoe is het, maat? Welkom in Peru.'],
      intro: 'Het Spaans van Lima is rustig en goed te volgen. In de Andes hoor je de invloed van het Quechua.',
      sounds: [
        ['Rustig en duidelijk', 'De s blijft staan en het tempo is rustig. Een goed accent om mee te beginnen.', 'Vamos a comer un ceviche en Miraflores.', 'We gaan ceviche eten in Miraflores.'],
        ['Andes: Quechua-invloed', 'In de bergen lijken e en i, en o en u soms op elkaar, omdat het Quechua maar drie klinkers heeft.', 'Allá en la sierra hace mucho frío.', 'Daar in de bergen is het erg koud.']
      ],
      words: [['el causa / el pata', 'de maat', 'i'], ['¡bacán!', 'tof!', 'i'], ['la chamba', 'het werk', 'i'], ['el jato', 'het huis', 'i'], ['¡ya!', 'oké!'], ['la palta', 'de avocado'],
        ['el soroche', 'de hoogteziekte'], ['¡qué roche!', 'wat gênant!', 'i'], ['la chela', 'het biertje', 'i'], ['jalar', 'zakken (voor een examen)', 'i'], ['al toque', 'meteen', 'i'], ['¡habla!', 'hé, hoe is het?', 'i'], ['pituco / pituca', 'kakker', 'i'], ['¡qué palta!', 'wat gênant!', 'i'], ['¡asu mare!', 'jeetje!', 'i'], ['la jerma', 'de vriendin', 'i'], ['la flaca', 'het meisje, de vriendin', 'i'], ['la combi', 'het busje'], ['la yapa', 'het extraatje (gratis erbij)'], ['bamba', 'nep', 'i']],
      fact: 'Peruanen zeggen «palta» voor avocado, net als in Chili en Argentinië. In Mexico en Colombia is het «aguacate».' },

    { id: 'bo', flag: '🇧🇴', name: 'Bolivia', city: 'La Paz', speakers: '±12 mln', group: 'zuid', voice: 'BO', listen: 'es-BO', pin: [342, 444], unit: 'b2-11',
      hello: ['¡Hola, cumpa! Bienvenido a Bolivia.', 'Hoi, maat! Welkom in Bolivia.'],
      intro: 'Hoog in de Andes. Veel mensen spreken ook Quechua of Aymara, en het Spaans is rustig en helder.',
      sounds: [
        ['Heldere s, rustige toon', 'In La Paz praten mensen rustig en spreken ze elke s duidelijk uit.', 'Mañana vamos al lago Titicaca.', 'Morgen gaan we naar het Titicacameer.'],
        ['Verkleinwoorden en «ya»', 'Overal verkleinwoorden (un ratito, cerquita) en vaak «¿ya?» aan het eind van een zin.', 'Espérame un ratito, ¿ya?', 'Wacht even op me, oké?', 'Espérame un momento, ¿sí?']
      ],
      words: [['el cumpa', 'de maat', 'i'], ['¡ya!', 'oké!'], ['la wawa', 'de baby'], ['el chango / la changa', 'de jongen / het meisje', 'i'], ['la salteña', 'het gevulde deegpasteitje'],
        ['el api', 'warme maïsdrank (paars)'], ['el micro', 'de bus'], ['¡jallalla!', 'proost! / leve! (Aymara)'], ['el soroche', 'de hoogteziekte'], ['la farra', 'het feest', 'i'], ['¡ya, pues!', 'oké, goed dan!', 'i'], ['la chela', 'het biertje', 'i'], ['¡qué macana!', 'wat jammer!', 'i'], ['el cuate', 'de vriend', 'i'], ['el llokalla', 'de jongen', 'i', 'el yocalla'], ['jailón / jailona', 'kakker', 'i'], ['el pucho', 'de sigaret', 'i']],
      fact: 'La Paz ligt op ±3600 meter. Er rijdt een kabelbaan als openbaar vervoer.' },

    { id: 'py', flag: '🇵🇾', name: 'Paraguay', city: 'Asunción', speakers: '±7 mln', group: 'zuid', voice: 'PY', listen: 'es-PY', pin: [392, 494], unit: 'b2-12',
      hello: ['¡Hola! Bienvenido a Paraguay.', 'Hoi! Welkom in Paraguay.'],
      intro: 'Een tweetalig land: bijna iedereen spreekt ook Guaraní. Veel mensen mengen de twee talen (dat heet «jopara»).',
      sounds: [
        ['Voseo', 'Onder vrienden «vos»: vos sabés, vos tenés.', '¿Vos sabés hablar guaraní?', 'Kun jij Guaraní spreken?', '¿Tú sabes hablar guaraní?'],
        ['Guaraní-woordjes', 'Kleine woordjes uit het Guaraní maken een zin zachter, zoals «na» (toe, alsjeblieft).', 'Vení un ratito, na.', 'Kom even hier, toe.', 'Ven un momento, por favor.']
      ],
      words: [['¿mba’éichapa?', 'hoe gaat het? (Guaraní)', '', 'mbaeíchapa'], ['¡nde!', 'hé! / zeg!', 'i'], ['la chipa', 'het kaasbroodje'], ['el tereré', 'de koude mate'], ['¡jaha!', 'kom, we gaan! (Guaraní)', 'i', 'jajá'],
        ['la guaina', 'het meisje', 'i'], ['el karaku', 'de kracht, de energie', 'i'], ['luego', 'toch, gewoon (opvulwoord)', 'i'], ['la plata', 'het geld'], ['¡nderakore!', 'jeetje! (Guaraní)', 'i', 'nderakoré'], ['¡ha upéi!', 'en toen? (Guaraní)', 'i'], ['vyrorei', 'onzin (Guaraní)', 'i', 'virorei'], ['¡chake!', 'pas op! (Guaraní)', 'i'], ['el mitã', 'het kind (Guaraní)', '', 'el mitá'], ['chuchi', 'chic, kakkerig', 'i'], ['la sopa paraguaya', 'maïscake (geen soep!)'], ['el reviro', 'gebakken deeggerecht']],
      fact: 'Guaraní is in Paraguay een officiële taal, naast Spaans.' },

    { id: 'cl', flag: '🇨🇱', name: 'Chili', city: 'Santiago', speakers: '±19 mln', group: 'zuid', voice: 'CL', listen: 'es-CL', pin: [284, 580], line: true,
      hello: ['¡Hola! ¿Cómo estái? Bienvenido a Chile.', 'Hoi! Hoe gaat het? Welkom in Chili.'],
      intro: 'Chilenen praten snel, slikken eindletters in en hebben heel veel eigen slang. Een uitdaging, ook voor andere Latijns-Amerikanen.',
      sounds: [
        ['Snel, eindletters vallen weg', 'De s en de d aan het eind verdwijnen: «cansado» wordt «cansao».', 'Estoy cansado, vamos a la casa.', 'Ik ben moe, laten we naar huis gaan.'],
        ['«po» achter de zin', '«Po» (van «pues») komt overal achter: «sí po», «ya po».', 'Sí po, vamos al tiro.', 'Ja joh, we gaan meteen.', 'Sí, vamos ahora mismo.'],
        ['Chileense jij-vorm', 'Onder vrienden: «¿cómo estái?», «¿querí?», «¿cachai?».', '¿Querí ir a la playa?', 'Wil je naar het strand?', '¿Quieres ir a la playa?']
      ],
      words: [['¿cachai?', 'snap je?', 'i'], ['bacán', 'tof', 'i'], ['fome', 'saai', 'i'], ['el pololo / la polola', 'het vriendje / het vriendinnetje', 'i'], ['la pega', 'het werk', 'i'], ['al tiro', 'meteen', 'i'],
        ['una luca', 'duizend peso', 'i'], ['la once', 'de lichte avondmaaltijd'], ['¡qué lata!', 'wat vervelend!', 'i'], ['la micro', 'de bus'], ['el carrete', 'het feestje', 'i'], ['harto', 'veel', 'i'],
        ['huevón / weón', 'gast (onder vrienden; ook scheldwoord)', 'g'], ['la talla', 'de grap', 'i'], ['carretear', 'uitgaan, feesten', 'i'], ['el copete', 'het drankje (alcohol)', 'i'], ['cuático', 'heftig, apart', 'i'], ['la guagua', 'de baby'], ['¡filo!', 'laat maar, maakt niet uit', 'i'], ['el flaite', 'de straatgast', 'i'], ['¡pucha!', 'balen!', 'i'], ['¡la raja!', 'geweldig!', 'g']],
      fact: '«La once» (de elf) is een lichte maaltijd met thee en brood, rond zes uur ’s avonds.' },

    { id: 'ar', flag: '🇦🇷', name: 'Argentinië', city: 'Buenos Aires', speakers: '±46 mln', group: 'zuid', voice: 'AR', listen: 'es-AR', pin: [356, 604],
      hello: ['¡Hola, che! ¿Todo bien? Bienvenido a la Argentina.', 'Hoi! Alles goed? Welkom in Argentinië.'],
      intro: 'Het Spaans van Buenos Aires klinkt het meest anders: «vos» in plaats van «tú», een «sj»-klank en een Italiaanse melodie.',
      sounds: [
        ['Voseo', '«Vos» in plaats van «tú», met eigen vormen: vos sos, vos tenés, vos querés. Gebiedende wijs: vení, decime.', 'Vos sos de Holanda, ¿no?', 'Jij komt uit Nederland, toch?', 'Tú eres de Holanda, ¿no?'],
        ['ll en y als «sj»', '«Calle» klinkt als «kasje», «yo» als «sjo».', 'Yo me llamo Lucía y vivo en esta calle.', 'Ik heet Lucía en ik woon in deze straat.'],
        ['Italiaanse melodie', 'Door de vele Italiaanse immigranten klinkt het Argentijnse Spaans zangerig, met lange klinkers.', '¡Pero no, che! ¿Qué decís?', 'Ach nee, joh! Wat zeg je nou?', '¡Pero no, oye! ¿Qué dices?']
      ],
      words: [['che', 'hé, joh', 'i'], ['dale', 'oké, doe maar', 'i'], ['el laburo', 'het werk', 'i'], ['el bondi / el colectivo', 'de bus', 'i'], ['re-', 'heel (re lindo = heel mooi)', 'i'],
        ['¡qué copado!', 'wat tof!', 'i'], ['el pibe / la piba', 'de jongen / het meisje', 'i'], ['la mina', 'de vrouw, het meisje', 'i'], ['el quilombo', 'de chaos, de puinhoop', 'i'],
        ['¡qué bajón!', 'wat balen!', 'i'], ['la guita', 'het geld', 'i'], ['la birra', 'het bier', 'i'], ['el mate', 'de mate (kruidenthee)'], ['boludo', 'gast (onder vrienden), maar ook: sukkel!', 'g'], ['¡bárbaro!', 'geweldig!'], ['la fiaca', 'de luiheid, geen zin', 'i'], ['¡qué garrón!', 'wat een pech!', 'i'], ['el chorro', 'de dief', 'i'], ['el boliche', 'de disco, de bar', 'i'], ['la posta', 'de waarheid, echt waar', 'i'], ['el bardo', 'de chaos, de herrie', 'i'], ['al pedo', 'voor niks, nutteloos', 'g'], ['¡ni en pedo!', 'echt niet!', 'g']],
      fact: 'Mate drink je samen uit één beker met een metalen rietje. Hij gaat het hele rondje rond.' },

    { id: 'uy', flag: '🇺🇾', name: 'Uruguay', city: 'Montevideo', speakers: '±3,4 mln', group: 'zuid', voice: 'UY', listen: 'es-UY', pin: [452, 590], line: true,
      hello: ['¡Hola, bo! ¿Todo bien? Bienvenido a Uruguay.', 'Hoi joh! Alles goed? Welkom in Uruguay.'],
      intro: 'Klinkt veel als Buenos Aires (voseo, de sj-klank), maar Uruguayanen hebben hun eigen woorden. En ze drinken nog meer mate.',
      sounds: [
        ['Tú met vos-vorm', 'In Montevideo hoor je vaak een mengvorm: «tú» met de werkwoordsvorm van «vos».', '¿Tú querés un mate?', 'Wil jij een mate?', '¿Tú quieres un mate?'],
        ['ll en y als «sj»', 'Net als in Buenos Aires.', 'Llueve mucho en Montevideo.', 'Het regent veel in Montevideo.']
      ],
      words: [['bo', 'hé jij, joh', 'i'], ['¡ta!', 'oké!', 'i'], ['¡qué bárbaro!', 'geweldig!'], ['el gurí / la gurisa', 'het kind', 'i'], ['el mate', 'de mate'], ['la guita', 'het geld', 'i'],
        ['el laburo', 'het werk', 'i'], ['¡salado!', 'cool! / heftig!', 'i'], ['el ómnibus', 'de bus'], ['la rambla', 'de boulevard langs het water'], ['¡qué embole!', 'wat saai!', 'i'], ['el botija', 'het kind', 'i'], ['¡de más!', 'super! / top!', 'i'], ['el bondi', 'de bus', 'i'], ['los championes', 'de sportschoenen'], ['el termo', 'de thermoskan (voor mate)'], ['¡qué chanta!', 'wat een prutser / opschepper!', 'i']],
      fact: 'De «rambla» van Montevideo is ruim 20 kilometer lang.' },

    { id: 'es', flag: '🇪🇸', name: 'Spanje', city: 'Madrid', speakers: '±48 mln', group: 'verder', voice: 'ES', listen: 'es-ES', pin: [470, 102],
      hello: ['¡Hola! ¿Qué tal? Bienvenido a España.', 'Hoi! Hoe gaat het? Welkom in Spanje.'],
      intro: 'Hier begon het Spaans. Het klinkt anders dan in Latijns-Amerika: «vosotros» voor jullie en in het grootste deel van het land een «th»-klank. Je hoeft het niet zelf te gebruiken, maar herkennen is handig.',
      sounds: [
        ['z en ce/ci als «th»', 'De z en de c voor e en i klinken als het Engelse «th» in «think»: «gracias» klinkt als «grathias».', 'Gracias, voy a cenar en la plaza.', 'Bedankt, ik ga op het plein eten.'],
        ['Vosotros', 'Tegen een groep vrienden zeg je «vosotros», met eigen vormen: queréis, tenéis, sois.', '¿Vosotros queréis venir esta noche?', 'Willen jullie vanavond komen?', '¿Ustedes quieren venir esta noche?'],
        ['Voltooide tijd voor vandaag', 'Over vandaag zegt een Spanjaard «he comido», waar Latijns-Amerikanen «comí» zeggen.', 'Hoy he comido paella.', 'Ik heb vandaag paella gegeten.', 'Hoy comí paella.']
      ],
      words: [['¡vale!', 'oké!'], ['¡guay!', 'tof!', 'i'], ['¡mola!', 'dat is tof!', 'i'], ['el tío / la tía', 'de gast / de meid', 'i'], ['el curro', 'het werk', 'i'], ['la pasta', 'het geld', 'i'],
        ['el coche', 'de auto (Latijns-Amerika: el carro)'], ['el móvil', 'de mobiel (Latijns-Amerika: el celular)'], ['el ordenador', 'de computer'], ['el zumo', 'het sap (Latijns-Amerika: el jugo)'],
        ['la caña', 'het kleine biertje'], ['vosotros', 'jullie (informeel)'], ['coger', 'pakken (in Latijns-Amerika vaak grof!)'], ['¡hostia!', 'verdorie!', 'g'], ['¡qué fuerte!', 'niet te geloven!', 'i'], ['flipar', 'versteld staan', 'i'], ['el colega', 'de maat', 'i'], ['el botellón', 'buiten drinken met vrienden', 'i'], ['¡venga!', 'kom op! / oké, doei!', 'i'], ['currar', 'werken', 'i'], ['¡ostras!', 'jeetje! (netjes)', 'i'], ['el guiri / la guiri', 'de (noordelijke) toerist', 'i']],
      fact: 'In de Canarische Eilanden en in Andalusië zeggen ze geen «vosotros» maar «ustedes», net als in Latijns-Amerika.' },

    { id: 'gq', flag: '🇬🇶', name: 'Equatoriaal-Guinea', city: 'Malabo', speakers: '±1,7 mln', group: 'verder', voice: 'GQ', listen: 'es-ES', pin: [514, 192],
      hello: ['¡Hola! Bienvenido a Guinea Ecuatorial.', 'Hoi! Welkom in Equatoriaal-Guinea.'],
      intro: 'Het enige Spaanstalige land in Afrika. Mensen spreken thuis vaak Fang, Bubi of Pichi. Het Spaans volgt de regels van Spanje, met een eigen melodie.',
      sounds: [
        ['Elke lettergreep even sterk', 'Het Spaans klinkt rustig en duidelijk, met minder verschil tussen beklemtoonde en onbeklemtoonde lettergrepen.', 'Vamos a Malabo mañana por la mañana.', 'We gaan morgenochtend naar Malabo.'],
        ['Vosotros, zoals in Spanje', 'Voor «jullie» gebruiken ze «vosotros», net als in Spanje.', '¿Vosotros sois de Bata?', 'Komen jullie uit Bata?', '¿Ustedes son de Bata?']
      ],
      words: [['ecuatoguineano / ecuatoguineana', 'Equatoriaal-Guinees / -Guinese'], ['Malabo', 'hoofdstad, op het eiland Bioko'], ['Bata', 'grootste stad, op het vasteland'], ['¡vale!', 'oké!'],
        ['el coche', 'de auto'], ['el móvil', 'de mobiel'], ['vosotros', 'jullie (informeel)'], ['el pichi', 'het Pichi (Engelse creooltaal op Bioko)'], ['¡mbolo!', 'hallo! (Fang)'], ['el fang', 'het Fang (grootste taal)'], ['el bubi', 'het Bubi (taal van Bioko)'], ['¿cómo amaneciste?', 'goedemorgen, hoe heb je geslapen?']],
      fact: 'Equatoriaal-Guinea was tot 1968 een Spaanse kolonie. Spaans is er nog steeds de taal van school en overheid.' },

    { id: 'us', flag: '🇺🇸', name: 'Verenigde Staten', city: 'Los Ángeles · Miami · Nueva York', speakers: '±42 mln', group: 'verder', voice: 'US', listen: 'es-US', pin: [150, 38], noShape: true,
      hello: ['¡Hola! Bienvenido a los Estados Unidos.', 'Hoi! Welkom in de Verenigde Staten.'],
      intro: 'Meer Spaanssprekers dan in Spanje! Veel mensen wisselen midden in een zin tussen Spaans en Engels: Spanglish.',
      sounds: [
        ['Spanglish', 'Engelse woorden krijgen een Spaans jasje: «parquear», «la troca» (truck), «el lonche» (lunch).', 'Voy a parquear la troca.', 'Ik ga de pick-up parkeren.', 'Voy a estacionar la camioneta.'],
        ['Letterlijk uit het Engels', 'Engelse uitdrukkingen woord voor woord vertaald: «te llamo para atrás» = I’ll call you back.', 'Te llamo para atrás más tarde.', 'Ik bel je straks terug.', 'Te devuelvo la llamada más tarde.']
      ],
      words: [['la troca', 'de pick-up (uit het Engels: truck)', 'i'], ['parquear', 'parkeren (uit het Engels: to park)', 'i'], ['el lonche', 'de lunch (uit het Engels: lunch)', 'i'], ['los biles', 'de rekeningen (uit het Engels: bills)', 'i'], ['la marqueta', 'de supermarkt (uit het Engels: market)', 'i'],
        ['te llamo para atrás', 'ik bel je terug', 'i'], ['vacunar la carpeta', 'de vloerbedekking stofzuigen', 'i'], ['el bróder', 'de broer, maat (uit het Engels: brother)', 'i'], ['¿qué es lo que es?', 'wat is er? (New York)', 'i'], ['la yarda', 'de tuin (uit het Engels: yard)', 'i'], ['el rufo', 'het dak (uit het Engels: roof)', 'i'], ['textear', 'appen, sms’en', 'i'], ['aplicar', 'solliciteren (uit het Engels: to apply)', 'i'], ['el raite', 'de lift, meerijden (uit het Engels: ride)', 'i'], ['el parqueo', 'de parkeerplaats', 'i']],
      fact: '«Vacunar la carpeta» betekent eigenlijk «het tapijt inenten». Een mooi voorbeeld van Spanglish: vacuum the carpet.' }
  ];
})(window.SPT);
