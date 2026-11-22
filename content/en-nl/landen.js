/* Uitbreiding «Op reis» voor Engels (cursus en-nl): Engels per land (accent, slang, eigen woorden).
   Staat los van de basiscursus (Amerikaans Engels): de woorden hier komen niet in je gewone herhaling.
   Velden zoals in content/landen.js (Spaans): words = [Engels, Nederlands, label, uitspraak]; label i = informeel, g = grof.
   sounds = [titel, uitleg, voorbeeldzin, vertaling, neutraal (Amerikaans Engels, alleen als de woorden anders zijn)].
   voice = landcode van de stem (tools/tts-texts.js, PLACE_VOICES.en); voiceNote = uitleg als er geen echte landstem is.
   pin = vlagknop op de wereldkaart (content/kaarten/en.js, viewBox 1000×520). */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('en-nl')) return;

  S.placeMeta = {
    target: 'en', base: 'US', suffix: '',
    intro: 'Je basiscursus is Amerikaans Engels. Hier ga je zelf op bezoek: tik op een land en hoor hoe het Engels daar klinkt, met de typische woorden en slang. Wat je hier oefent, komt niet in je gewone herhaling.'
  };
  S.placeGroups = [
    { id: 'amerika', name: 'Noord-Amerika en de Cariben' },
    { id: 'europa', name: 'Europa' },
    { id: 'afrika', name: 'Afrika' },
    { id: 'azie', name: 'Azië en Oceanië' }
  ];

  S.places = [
    { id: 'us', flag: '🇺🇸', name: 'Verenigde Staten', city: 'New York · Atlanta · Los Angeles', speakers: '±300 mln sprekers', group: 'amerika', voice: 'US', listen: 'en-US', pin: [196, 160],
      hello: ['Hey there! Welcome to the United States.', 'Hoi! Welkom in de Verenigde Staten.'],
      intro: 'Het Engels van je basiscursus. Toch klinkt het in het zuiden, in New York of in Californië elke keer anders, met eigen woorden en slang.',
      sounds: [
        ['Flap-t', 'Een t tussen twee klinkers klinkt als een snelle d: «water» klinkt als «wader», «a lot of» als «a lodda».', 'Can I get a bottle of water?', 'Mag ik een flesje water?'],
        ['De r hoor je altijd', 'Amerikanen spreken elke r uit, ook aan het eind: «car», «park», «better». In Groot-Brittannië valt die r vaak weg.', 'Park the car near the store.', 'Parkeer de auto bij de winkel.'],
        ['Zuidelijk: y’all', 'In het zuiden zeg je «y’all» (jullie). Elders hoor je vooral «you guys».', 'Are y’all coming to the party tonight?', 'Komen jullie vanavond naar het feest?', 'Are you guys coming to the party tonight?']
      ],
      words: [['y’all', 'jullie (vooral in het zuiden)', 'i'], ['you guys', 'jullie', 'i'], ['awesome', 'geweldig'], ['dude', 'gast', 'i'], ['what’s up?', 'hoe is het?', 'i'], ['gonna', 'gaan (= going to)', 'i'], ['wanna', 'willen (= want to)', 'i'],
        ['the restroom', 'de wc (in een restaurant of winkel)'], ['the check', 'de rekening (in een restaurant)'], ['to grab a bite', 'een hapje eten', 'i'], ['the line', 'de rij (wachtrij)'], ['the fall', 'de herfst'], ['the sidewalk', 'de stoep'],
        ['my bad', 'mijn fout, sorry', 'i'], ['to hang out', 'rondhangen, afspreken', 'i'], ['for real?', 'echt waar?', 'i'], ['bummer', 'balen, jammer', 'i'], ['sus', 'verdacht (van: suspicious)', 'i'], ['bless your heart', 'ach, gossie (zuiden; vaak spottend)', 'i'], ['dang!', 'verdorie!', 'i'], ['to be pissed', 'boos zijn (in het Brits: dronken!)', 'g']],
      fact: 'Amerikanen zeggen «soccer» tegen voetbal. «Football» is bij hen American football, met de ovale bal.' },

    { id: 'ca', flag: '🇨🇦', name: 'Canada', city: 'Toronto · Vancouver', speakers: '±30 mln sprekers', group: 'amerika', voice: 'CA', listen: 'en-CA', pin: [246, 82],
      hello: ['Hi there! Welcome to Canada, eh?', 'Hoi! Welkom in Canada, hè?'],
      intro: 'Klinkt bijna als Amerikaans Engels, maar met Britse spelling («colour», «centre»), een paar eigen klanken en het beroemde «eh?».',
      sounds: [
        ['Eh?', 'Aan het eind van een zin zeggen Canadezen «eh?», zoals wij «hè?».', 'It’s pretty cold today, eh?', 'Het is best koud vandaag, hè?', 'It’s pretty cold today, right?'],
        ['Canadian raising', 'De klank in «about» en «house» begint hoger. Voor Amerikanen klinkt «about» daardoor bijna als «a-boat».', 'Let’s go out and walk around the house.', 'Laten we naar buiten gaan en om het huis lopen.'],
        ['Eigen woorden', 'Een muts heet een «toque», een munt van één dollar een «loonie».', 'Grab your toque, it’s freezing out there.', 'Pak je muts, het vriest buiten.', 'Grab your hat, it’s freezing out there.']
      ],
      words: [['eh?', 'hè?', 'i'], ['the toque', 'de wollen muts', '', 'tuke'], ['the loonie', 'de munt van 1 dollar'], ['the toonie', 'de munt van 2 dollar'], ['a double-double', 'koffie met twee keer room en twee keer suiker', 'i'],
        ['the washroom', 'de wc'], ['pop', 'frisdrank'], ['a two-four', 'een krat met 24 biertjes', 'i'], ['the hydro bill', 'de elektriciteitsrekening'], ['a keener', 'een uitslover, een streber', 'i'], ['beauty!', 'top!', 'i'],
        ['sorry', 'sorry (zeg je hier heel vaak, ook als het niet je schuld is)'], ['the chesterfield', 'de bank, de sofa (ouderwets)'], ['a mickey', 'een klein flesje sterke drank', 'i'], ['Timmies', 'Tim Hortons (koffieketen)', 'i'], ['the parkade', 'de parkeergarage'], ['give’r!', 'geef gas! / ga ervoor!', 'i']],
      fact: 'Canada is officieel tweetalig: Engels en Frans. In Québec is Frans de hoofdtaal.' },

    { id: 'jm', flag: '🇯🇲', name: 'Jamaica', city: 'Kingston', speakers: '±3 mln sprekers', group: 'amerika', voice: 'JM', listen: 'en-US', pin: [258, 236], line: true,
      voiceNote: 'Er bestaat nog geen Jamaicaanse computerstem. Je hoort hier een Britse stem; echt Jamaicaans klinkt nog veel ritmischer.',
      hello: ['Wah gwaan! Welcome to Jamaica.', 'Hoe is het! Welkom in Jamaica.'],
      intro: 'Officieel is Engels de taal, maar thuis en op straat spreken de meeste Jamaicanen Patwa (Jamaicaans Creools), met Engelse woorden en Afrikaanse invloeden.',
      sounds: [
        ['Patwa', 'Onderling klinkt het zo: «wah gwaan» = what’s going on, «mi» = ik.', 'Wah gwaan, mi bredda?', 'Hoe is het, broer?', 'What’s going on, my brother?'],
        ['Mi deh yah', '«Mi deh yah» betekent letterlijk «ik ben hier», en is het antwoord op «hoe gaat het?».', 'Mi deh yah, everyting irie.', 'Het gaat, alles goed.', 'I’m doing okay, everything is fine.'],
        ['Soon come', '«Soon come» betekent: ik kom zo. Maar zo kan hier best lang duren.', 'Relax, mi soon come.', 'Rustig, ik kom zo.', 'Relax, I’ll be there soon.']
      ],
      words: [['wah gwaan?', 'hoe is het? (= what’s going on?)', 'i'], ['mi deh yah', 'het gaat (letterlijk: ik ben hier)', 'i'], ['irie', 'relaxed, alles goed', 'i'], ['ya mon', 'ja man, zeker', 'i'], ['likkle', 'klein (= little)', 'i'], ['nyam', 'eten', 'i'],
        ['the pickney', 'het kind', 'i'], ['bredda / sistren', 'broer / zus, maat', 'i'], ['yuh zimmi?', 'snap je?', 'i'], ['soon come', 'ik kom zo (kan lang duren)', 'i'], ['the yaad', 'het huis, thuis (= yard)', 'i'], ['big up!', 'respect! / shout-out!', 'i'],
        ['tek it easy', 'rustig aan', 'i'], ['one love', 'vrede en liefde (ook als afscheid)'], ['labrish', 'roddelen, kletsen', 'i'], ['bumbaclaat!', 'verdomme! (heel grof)', 'g']],
      fact: 'Reggae en Bob Marley maakten Patwa-woorden als «irie» en «one love» over de hele wereld bekend.' },

    { id: 'gb', flag: '🇬🇧', name: 'Verenigd Koninkrijk', city: 'Londen · Manchester · Glasgow', speakers: '±67 mln sprekers', group: 'europa', voice: 'GB', listen: 'en-GB', pin: [494, 88], line: true,
      hello: ['Hiya! Welcome to the UK.', 'Hoi! Welkom in het Verenigd Koninkrijk.'],
      intro: 'Waar het Engels vandaan komt. Je cursus legt de Britse verschillen al uit; hier hoor je hoe het echt klinkt, van Londen tot Schotland.',
      sounds: [
        ['De r valt weg', 'Na een klinker verdwijnt de r: «car» klinkt als «kaa», «water» als «wóótuh».', 'The car is parked near the park.', 'De auto staat bij het park.'],
        ['Ingeslikte t', 'In Londen en veel steden slikken mensen de t in: «bottle» klinkt als «bo’le», «a lot of» als «a lo’ of».', 'Do you want a bottle of water?', 'Wil je een flesje water?'],
        ['Andere woorden', 'Een Amerikaan woont in een «apartment» en neemt de «elevator», een Brit woont in een «flat» en neemt de «lift».', 'My flat is on the third floor, so I take the lift.', 'Mijn flat is op de derde verdieping, dus ik neem de lift.', 'My apartment is on the third floor, so I take the elevator.']
      ],
      words: [['cheers', 'bedankt / proost / doei'], ['mate', 'maat', 'i'], ['brilliant', 'geweldig'], ['knackered', 'kapot, doodmoe', 'i'], ['gutted', 'er kapot van, heel teleurgesteld', 'i'], ['chuffed', 'blij, trots', 'i'],
        ['a cuppa', 'een kopje thee', 'i'], ['the loo', 'de wc', 'i'], ['the queue', 'de rij (wachtrij)'], ['the flat', 'het appartement'], ['the lift', 'de lift'], ['rubbish', 'afval / onzin'], ['the chips', 'de patat (in de VS: fries)'], ['the crisps', 'de chips (in de VS: chips)'],
        ['to take the mickey', 'iemand voor de gek houden', 'i'], ['innit?', 'toch? (= isn’t it?)', 'i'], ['skint', 'blut', 'i'], ['a quid', 'een pond (geld)', 'i'], ['fancy a pint?', 'zin in een biertje?', 'i'], ['cheeky', 'brutaal, ondeugend', 'i'], ['proper', 'echt, heel (proper good = heel goed)', 'i'],
        ['wee', 'klein (Schots)', 'i'], ['aye', 'ja (Schots en Noord-Engels)', 'i'], ['bloody', 'verdomd (als versterker)', 'i'], ['bollocks!', 'onzin! / verdomme! (grof)', 'g']],
      fact: 'Op korte afstand hoor je hier heel verschillende accenten: Scouse (Liverpool), Geordie (Newcastle), Brummie (Birmingham) en Schots.' },

    { id: 'ie', flag: '🇮🇪', name: 'Ierland', city: 'Dublin', speakers: '±5 mln sprekers', group: 'europa', voice: 'IE', listen: 'en-IE', pin: [452, 104], line: true,
      hello: ['Hiya! Welcome to Ireland. How’s the craic?', 'Hoi! Welkom in Ierland. Hoe is het?'],
      intro: 'Zangerig en vriendelijk, met grammatica die nog uit het Iers komt. «Grand» betekent hier gewoon «prima».',
      sounds: [
        ['Zachte th', 'Ieren spreken de th vaak uit als een t of d: «three» klinkt als «tree», «that» als «dat».', 'I think there are three of them over there.', 'Ik denk dat er daar drie zijn.'],
        ['After + -ing', '«I’m after eating» komt uit het Iers en betekent: ik heb net gegeten.', 'I’m after eating my dinner.', 'Ik heb net gegeten.', 'I just ate dinner.'],
        ['Craic en grand', '«The craic» (spreek uit: krak) is plezier, gezelligheid of nieuws. «Grand» = prima.', 'How’s the craic? Ah, grand, thanks.', 'Hoe is het? Ach, prima, bedankt.', 'How’s it going? Oh, fine, thanks.']
      ],
      words: [['the craic', 'de lol, de gezelligheid (spreek uit: krak)', 'i', 'the crack'], ['grand', 'prima, oké'], ['deadly', 'geweldig', 'i'], ['your man / your woman', 'die vent / die vrouw (over wie we het hebben)', 'i'], ['giving out', 'mopperen, klagen', 'i'],
        ['the yoke', 'het ding, dingetje', 'i'], ['an eejit', 'een idioot', 'i'], ['it’s gas', 'het is grappig', 'i'], ['the jacks', 'de wc', 'i'], ['the press', 'de keukenkast'], ['sound', 'aardig, oké (he’s sound = hij is oké)', 'i'],
        ['the gaff', 'het huis', 'i'], ['banjaxed', 'kapot', 'i'], ['the messages', 'de boodschappen'], ['the guards', 'de politie (Garda)'], ['sláinte!', 'proost! (Iers)', '', 'slawn-cha'], ['feck!', 'verdorie! (grof, iets milder dan «fuck»)', 'g']],
      fact: 'Iers (Gaeilge) is de eerste officiële taal van Ierland; Engels de tweede. Toch spreken bijna alle Ieren thuis Engels.' },

    { id: 'ng', flag: '🇳🇬', name: 'Nigeria', city: 'Lagos · Abuja', speakers: '±100 mln sprekers (vaak als tweede taal)', group: 'afrika', voice: 'NG', listen: 'en-NG', pin: [512, 268],
      hello: ['How far? Welcome to Nigeria!', 'Hoe is het? Welkom in Nigeria!'],
      intro: 'Het land met de meeste Engelssprekers van Afrika. Naast het officiële Engels spreekt bijna iedereen Nigeriaans Pidgin.',
      sounds: [
        ['Pidgin', 'Op straat hoor je Pidgin: «How far?» = hoe is het?, «wetin» = wat.', 'How far? Wetin dey happen?', 'Hoe is het? Wat is er aan de hand?', 'Hey, how are you? What’s going on?'],
        ['Gelijk ritme', 'Elke lettergreep krijgt ongeveer even veel nadruk, en de klinkers zijn helder.', 'We are going to the market this evening.', 'We gaan vanavond naar de markt.'],
        ['No wahala', '«Wahala» is gedoe of problemen. «No wahala» = geen probleem.', 'No wahala, I go call you later.', 'Geen probleem, ik bel je later.', 'No problem, I’ll call you later.']
      ],
      words: [['how far?', 'hoe is het?', 'i'], ['wetin?', 'wat?', 'i'], ['abeg', 'alsjeblieft, toe', 'i'], ['oya!', 'kom op! / vooruit!', 'i'], ['no wahala', 'geen probleem', 'i'], ['wahala', 'gedoe, problemen', 'i'],
        ['to chop', 'eten', 'i'], ['to japa', 'emigreren, het land uit gaan', 'i'], ['jollof rice', 'jollofrijst (pittig rijstgerecht)'], ['sharp sharp', 'snel snel', 'i'], ['I dey', 'het gaat (letterlijk: ik ben er)', 'i'], ['na so', 'zo is het', 'i'],
        ['to sabi', 'weten, kunnen (uit het Portugees: saber)', 'i'], ['the go-slow', 'de file'], ['to flash someone', 'iemand kort bellen zodat die terugbelt'], ['ehen!', 'precies! / o ja!', 'i']],
      fact: 'In Nigeria worden meer dan 500 talen gesproken. Engels is de officiële taal die het land verbindt.' },

    { id: 'ke', flag: '🇰🇪', name: 'Kenia', city: 'Nairobi · Mombasa', speakers: '±55 mln inwoners', group: 'afrika', voice: 'KE', listen: 'en-KE', pin: [606, 302],
      hello: ['Karibu! Welcome to Kenya.', 'Welkom! Welkom in Kenia.'],
      intro: 'Engels en Swahili zijn hier allebei officieel, en in Nairobi mengen jongeren ze tot «Sheng».',
      sounds: [
        ['Sheng', 'In Nairobi mengen jongeren Swahili en Engels: «Niaje?» = hoe is het?, «poa» = cool.', 'Niaje, sasa? Poa sana!', 'Hé, hoe is het? Heel goed!', 'Hey, what’s up? Really good!'],
        ['Heldere klinkers', 'Kenianen spreken elke klinker helder uit, zoals in het Swahili: «water» klinkt als «wo-ta».', 'Can I have some water, please?', 'Mag ik wat water?'],
        ['I’m coming', '«I’m coming» betekent hier vaak: ik ga even weg en kom zo terug.', 'Wait for me, I’m coming.', 'Wacht even, ik ben zo terug.', 'Wait for me, I’ll be right back.']
      ],
      words: [['karibu', 'welkom (Swahili)'], ['asante', 'dank je (Swahili)'], ['sawa', 'oké (Swahili)'], ['poa', 'cool, goed', 'i'], ['niaje?', 'hoe is het?', 'i'], ['sasa?', 'hoe gaat het? (letterlijk: nu?)', 'i'],
        ['the matatu', 'het minibusje (openbaar vervoer)'], ['the mzungu', 'de blanke, de buitenlander'], ['pole pole', 'rustig aan'], ['hakuna matata', 'geen probleem'], ['to alight', 'uitstappen (formeel Engels, hier heel gewoon)'], ['I’m coming', 'ik ben zo terug'],
        ['the jua kali', 'de werkplaats in de openlucht (letterlijk: felle zon)'], ['the boda boda', 'de brommertaxi'], ['msee', 'gast', 'i']],
      fact: 'Kenia heeft twee officiële talen: Engels en Swahili. Daarnaast spreken veel mensen thuis nog een eigen taal.' },

    { id: 'za', flag: '🇿🇦', name: 'Zuid-Afrika', city: 'Johannesburg · Kaapstad', speakers: '±60 mln inwoners', group: 'afrika', voice: 'ZA', listen: 'en-ZA', pin: [562, 410],
      hello: ['Howzit! Welcome to South Africa.', 'Hoe is het! Welkom in Zuid-Afrika.'],
      intro: 'Engels is hier de taal die iedereen verbindt, met veel woorden uit het Afrikaans, de zustertaal van het Nederlands. Je herkent er dus een hoop!',
      sounds: [
        ['Now-now en just now', '«Now» betekent niet altijd nu: «now-now» = zo meteen, «just now» = straks (of ooit).', 'I’ll do it just now, I promise.', 'Ik doe het straks, beloofd.', 'I’ll do it later, I promise.'],
        ['Afrikaanse woorden', 'Veel woorden komen uit het Afrikaans: «lekker», «braai», «bakkie».', 'Let’s have a braai this weekend, it’ll be lekker.', 'Laten we dit weekend barbecueën, dat wordt lekker.', 'Let’s have a barbecue this weekend, it’ll be great.'],
        ['Korte klinkers', 'De i in «six» klinkt bijna als een doffe e: «sex». Let goed op!', 'I’ll see you at six.', 'Ik zie je om zes uur.']
      ],
      words: [['howzit?', 'hoe is het?', 'i'], ['lekker', 'lekker, tof (uit het Afrikaans)', 'i'], ['the braai', 'de barbecue (uit het Afrikaans: braaien)'], ['now-now', 'zo meteen', 'i'], ['just now', 'straks, later', 'i'], ['eish!', 'jeetje! / oei!', 'i'],
        ['shame!', 'ach, wat lief! / ach, wat zielig!', 'i'], ['the robot', 'het stoplicht'], ['the bakkie', 'de pick-up (uit het Afrikaans)'], ['ja-nee', 'ja… nou ja (uit het Afrikaans)', 'i'], ['boet', 'broer, maat (uit het Afrikaans)', 'i'], ['sharp!', 'oké! / doei!', 'i'],
        ['yebo', 'ja (uit het Zoeloe)', 'i'], ['biltong', 'gedroogd vlees'], ['is it?', 'o ja? echt?', 'i'], ['gatvol', 'het zat zijn (uit het Afrikaans)', 'i'], ['the location', 'de township (woonwijk)']],
      fact: 'Zuid-Afrika heeft twaalf officiële talen, waaronder Engels, Afrikaans, Zoeloe, Xhosa en sinds 2023 ook gebarentaal.' },

    { id: 'in', flag: '🇮🇳', name: 'India', city: 'Mumbai · Delhi · Bangalore', speakers: '±130 mln sprekers (meestal als tweede taal)', group: 'azie', voice: 'IN', listen: 'en-IN', pin: [730, 220],
      hello: ['Namaste! Welcome to India.', 'Namaste! Welkom in India.'],
      intro: 'Engels is hier de taal van werk, studie en de overheid. Indiaas Engels heeft eigen woorden en zinsbouw, vaak met Hindi ertussen.',
      sounds: [
        ['De -ing-vorm', 'Indiërs gebruiken de -ing-vorm vaker: «I am having two brothers».', 'I am having two brothers.', 'Ik heb twee broers.', 'I have two brothers.'],
        ['Itself en only', '«Today itself» = nog vandaag. «Only» geeft nadruk: «I am here only» = ik ben hier gewoon.', 'I will send it today itself.', 'Ik stuur het nog vandaag.', 'I’ll send it today.'],
        ['Gekrulde t en d', 'De t en d worden uitgesproken met de tongpunt naar achteren gekruld.', 'Today the doctor is not available.', 'Vandaag is de dokter er niet.']
      ],
      words: [['to prepone', 'vervroegen (tegenovergestelde van postpone)'], ['to do the needful', 'doen wat nodig is'], ['kindly revert', 'graag een antwoord (in e-mails)'], ['out of station', 'de stad uit, op reis'], ['a lakh', 'honderdduizend (1,00,000)'], ['a crore', 'tien miljoen'],
        ['timepass', 'tijdverdrijf', 'i'], ['yaar', 'maat (uit het Hindi)', 'i'], ['achha', 'oké, aha (uit het Hindi)', 'i'], ['jugaad', 'slimme oplossing met weinig middelen (uit het Hindi)', 'i'], ['the cousin-brother', 'de neef'],
        ['to pass out', 'afstuderen (elders: flauwvallen!)'], ['what is your good name?', 'hoe heet u? (beleefd)'], ['the batchmate', 'de jaargenoot'], ['chalo', 'kom, we gaan (uit het Hindi)', 'i'], ['the hotel', 'het restaurant, eettentje (ook zonder kamers)']],
      fact: 'India heeft meer Engelssprekers dan het Verenigd Koninkrijk, al spreken de meesten het als tweede taal.' },

    { id: 'sg', flag: '🇸🇬', name: 'Singapore', city: 'Singapore', speakers: '±4 mln sprekers', group: 'azie', voice: 'SG', listen: 'en-SG', pin: [800, 324], line: true,
      hello: ['Hello! Welcome to Singapore lah!', 'Hallo! Welkom in Singapore!'],
      intro: 'Op school en op het werk Standaard-Engels, met vrienden «Singlish»: Engels met woorden en zinsdeeltjes uit het Chinees, Maleis en Tamil.',
      sounds: [
        ['Lah, leh, lor', 'Singlish zet zinsdeeltjes achter de zin: «lah» (geruststellend), «leh» (twijfel), «lor» (tja).', 'Don’t worry lah, can one.', 'Maak je geen zorgen, het lukt heus.', 'Don’t worry, it’s definitely possible.'],
        ['Can or not?', '«Can» betekent: kan, oké, prima. «Can or not?» = gaat dat?', 'Tomorrow can or not?', 'Kan het morgen?', 'Is tomorrow okay?'],
        ['Kort en snel', 'Lidwoorden en hulpwerkwoorden vallen vaak weg.', 'You going where?', 'Waar ga jij heen?', 'Where are you going?']
      ],
      words: [['can', 'kan, oké, prima'], ['lah', 'zinsdeeltje: hoor, nou', 'i'], ['shiok!', 'heerlijk! (uit het Maleis)', 'i'], ['paiseh', 'gênant, sorry (uit het Hokkien)', 'i'], ['to chope', 'een plek reserveren (vaak met een pakje zakdoekjes)', 'i'],
        ['kiasu', 'bang om iets mis te lopen (uit het Hokkien)', 'i'], ['the hawker centre', 'de overdekte eetmarkt'], ['to makan', 'eten (uit het Maleis)', 'i'], ['alamak!', 'o jee! (uit het Maleis)', 'i'], ['aiyah!', 'ach! / jeetje!', 'i'],
        ['sian', 'verveeld, balen (uit het Hokkien)', 'i'], ['steady!', 'goed zo!', 'i'], ['blur', 'de draad kwijt, in de war', 'i'], ['atas', 'chique, kakkerig (uit het Maleis)', 'i'], ['to lepak', 'rondhangen, chillen (uit het Maleis)', 'i']],
      fact: 'De overheid begon in 2000 een «Speak Good English»-campagne tegen Singlish. Toch zijn veel Singaporezen trots op hun Singlish.' },

    { id: 'ph', flag: '🇵🇭', name: 'Filipijnen', city: 'Manilla · Cebu', speakers: '±60 mln sprekers (vaak als tweede taal)', group: 'azie', voice: 'PH', listen: 'en-PH', pin: [874, 258],
      hello: ['Mabuhay! Welcome to the Philippines.', 'Welkom! Welkom in de Filipijnen.'],
      intro: 'Engels is hier een officiële taal en op school leer je veel vakken in het Engels. In het dagelijks leven mengen Filipijnen het met Tagalog: «Taglish».',
      sounds: [
        ['Taglish', 'Filipijnen wisselen midden in een zin tussen Engels en Tagalog.', 'Let’s eat na, I’m so gutom.', 'Laten we nu eten, ik heb zo’n honger.', 'Let’s eat now, I’m so hungry.'],
        ['Eigen woorden', 'Een wc heet hier «comfort room» (CR).', 'Excuse me, where is the comfort room?', 'Pardon, waar is de wc?', 'Excuse me, where is the restroom?'],
        ['Licht aan, licht uit', 'Filipijnen «openen» en «sluiten» het licht, net als in het Tagalog.', 'Please open the light, it’s so dark.', 'Doe het licht even aan, het is zo donker.', 'Please turn on the light, it’s so dark.']
      ],
      words: [['the CR (comfort room)', 'de wc'], ['for a while', 'momentje (aan de telefoon: blijf aan de lijn)'], ['to open the light', 'het licht aandoen'], ['to close the light', 'het licht uitdoen'], ['the ref', 'de koelkast (van: refrigerator)'],
        ['the jeepney', 'het kleurrijke busje (openbaar vervoer)'], ['the load', 'het beltegoed'], ['salamat', 'dank je (Tagalog)'], ['po', 'beleefdheidswoordje tegen ouderen (Tagalog)'], ['kilig', 'vlinders in je buik (Tagalog)', 'i'],
        ['the gimmick', 'het uitje met vrienden', 'i'], ['Filipino time', 'een beetje te laat', 'i'], ['bes', 'beste vriend(in)', 'i'], ['the balikbayan box', 'de doos met cadeaus voor de familie thuis'], ['ano ba!', 'kom op zeg! (Tagalog)', 'i']],
      fact: 'De Filipijnen hebben na de VS en India een van de grootste groepen Engelssprekers ter wereld.' },

    { id: 'au', flag: '🇦🇺', name: 'Australië', city: 'Sydney · Melbourne', speakers: '±25 mln sprekers', group: 'azie', voice: 'AU', listen: 'en-AU', pin: [900, 398],
      hello: ['G’day mate! Welcome to Australia.', 'Goeiedag, maat! Welkom in Australië.'],
      intro: 'Relaxed en vol afkortingen: breakfast wordt «brekkie», afternoon wordt «arvo». En «no worries» hoor je overal.',
      sounds: [
        ['Alles korter', 'Australiërs korten woorden af en zetten er -ie of -o achter: «brekkie», «arvo», «servo».', 'Let’s grab brekkie, then hit the beach this arvo.', 'Laten we ontbijten en vanmiddag naar het strand gaan.', 'Let’s grab breakfast, then go to the beach this afternoon.'],
        ['Stijgende toon', 'Zinnen gaan aan het eind vaak omhoog, ook als het geen vraag is.', 'We went to the beach on Saturday.', 'We zijn zaterdag naar het strand gegaan.'],
        ['No worries', '«No worries» = graag gedaan, geen probleem.', 'Thanks, mate! No worries.', 'Bedankt, maat! Graag gedaan.', 'Thanks, man! You’re welcome.']
      ],
      words: [['g’day', 'goeiedag, hoi', 'i'], ['mate', 'maat', 'i'], ['the arvo', 'de middag', 'i'], ['brekkie', 'het ontbijt', 'i'], ['no worries', 'graag gedaan, geen probleem', 'i'], ['heaps', 'heel veel', 'i'],
        ['the servo', 'het tankstation', 'i'], ['the bottle-o', 'de slijterij', 'i'], ['thongs', 'teenslippers (in de VS: string!)'], ['the esky', 'de koelbox'], ['the ute', 'de pick-up'], ['Macca’s', 'McDonald’s', 'i'],
        ['stoked', 'superblij', 'i'], ['fair dinkum', 'echt waar, eerlijk', 'i'], ['to reckon', 'denken, vinden'], ['she’ll be right', 'komt wel goed', 'i'], ['the barbie', 'de barbecue', 'i'], ['sunnies', 'de zonnebril', 'i'], ['the footy', 'het voetbal (vaak Australian football)', 'i'], ['bloody oath!', 'nou en of! (een beetje grof)', 'g']],
      fact: 'Let op met «thongs»: in Australië zijn het teenslippers, in de VS een string.' },

    { id: 'nz', flag: '🇳🇿', name: 'Nieuw-Zeeland', city: 'Auckland · Wellington', speakers: '±5 mln sprekers', group: 'azie', voice: 'NZ', listen: 'en-NZ', pin: [964, 452],
      hello: ['Kia ora! Welcome to New Zealand.', 'Hallo! Welkom in Nieuw-Zeeland.'],
      intro: 'Kiwi’s klinken een beetje Australisch, maar met eigen klinkers en veel woorden uit het Māori.',
      sounds: [
        ['Fish and chips', 'De korte i wordt een doffe klank: «fish and chips» klinkt als «fush and chups».', 'Can I get fish and chips, please?', 'Mag ik fish and chips?'],
        ['Korte e wordt i', 'De korte e klinkt bijna als een i: «yes» klinkt als «yis», «ten» als «tin».', 'Yes, I’ve got ten pens.', 'Ja, ik heb tien pennen.'],
        ['Māori-woorden', 'Veel Māori-woorden zitten in het gewone Engels: «kia ora» (hallo), «whānau» (familie).', 'Kia ora! How’s your whānau?', 'Hallo! Hoe is het met je familie?', 'Hello! How’s your family?']
      ],
      words: [['kia ora', 'hallo / dank je (Māori)'], ['sweet as', 'prima, top', 'i'], ['chur', 'bedankt! / top!', 'i'], ['jandals', 'teenslippers'], ['the chilly bin', 'de koelbox'], ['the dairy', 'de buurtwinkel'],
        ['togs', 'de zwemkleding'], ['tramping', 'trektochten maken, hiken'], ['the whānau', 'de familie (Māori)', '', 'the faa-no'], ['kai', 'eten (Māori)'], ['the bach', 'het vakantiehuisje (spreek uit: betsj)', '', 'the batch'],
        ['heaps good', 'heel goed', 'i'], ['yeah, nah', 'nee, eigenlijk niet', 'i'], ['hard out', 'helemaal, flink', 'i'], ['mean!', 'geweldig!', 'i'], ['stubbies', 'korte broek', 'i']],
      fact: 'Māori en Nieuw-Zeelandse Gebarentaal zijn officiële talen. Engels is dat in de praktijk, maar staat niet in de wet.' }
  ];
})(window.SPT);
