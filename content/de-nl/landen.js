/* Uitbreiding «Op reis» voor Duits (cursus de-nl): Duits per land (accent, eigen woorden, spreektaal).
   Staat los van de basiscursus (Hoogduits uit Duitsland): de woorden hier komen niet in je gewone herhaling.
   Velden zoals in content/landen.js (Spaans): words = [Duits, Nederlands, label, uitspraak]; label i = informeel, g = grof.
   sounds = [titel, uitleg, voorbeeldzin, vertaling, neutraal (standaard-Duits, alleen als de woorden anders zijn)].
   voice = landcode van de stem (tools/tts-texts.js, PLACE_VOICES.de); voiceNote = uitleg als er geen echte landstem is.
   pin = vlagknop op de kaart (content/kaarten/de.js, viewBox 600×600). */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('de-nl')) return;

  S.placeMeta = {
    target: 'de', base: 'DE', suffix: '',
    intro: 'Je basiscursus is het Hoogduits uit Duitsland. Hier ga je zelf op bezoek: tik op een land en hoor hoe het Duits daar klinkt, met de typische woorden en spreektaal. Wat je hier oefent, komt niet in je gewone herhaling.'
  };
  S.placeGroups = [
    { id: 'dach', name: 'Duitsland, Oostenrijk en Zwitserland' },
    { id: 'klein', name: 'Kleine buren' }
  ];

  S.places = [
    { id: 'de', flag: '🇩🇪', name: 'Duitsland', city: 'Berlin · Hamburg · München · Köln', speakers: '±80 mln sprekers', group: 'dach', voice: 'DE', listen: 'de-DE', pin: [321, 265],
      hello: ['Hallo! Willkommen in Deutschland.', 'Hallo! Welkom in Duitsland.'],
      intro: 'Het Hoogduits van je basiscursus. In het echt klinkt het in elke streek anders: «Moin» in het noorden, «Servus» in Beieren, en in Berlijn zegt men «ick» in plaats van «ich».',
      sounds: [
        ['Moin en Servus', 'In het noorden (Hamburg, Bremen) groet je de hele dag met «Moin», ook ’s avonds. In het zuiden zeg je «Servus» of «Grüß Gott». Uitzondering op wat je leerde: «Guten Tag» klinkt daar bijna stijf.', 'Moin! Na, alles klar bei dir?', 'Hoi! Zo, alles goed met je?', 'Guten Tag! Wie geht es dir?'],
        ['Letters verdwijnen', 'In spreektaal slikken Duitsers uitgangen in: «ich habe» wordt «ich hab», «nicht» wordt «nich», «eine» wordt «’ne» en «ist» wordt «is».', 'Ich hab heute keine Zeit, das is nich so schlimm.', 'Ik heb vandaag geen tijd, dat is niet zo erg.', 'Ich habe heute keine Zeit, das ist nicht so schlimm.'],
        ['Berlinerisch', 'In Berlijn wordt «ich» tot «ick», «das» tot «dit» en «was» tot «wat». Dat lijkt op het Nederlands, en dat is geen toeval: het Berlijns heeft Nederduitse wortels.', 'Ick weeß, dit is nich einfach.', 'Ik weet het, dat is niet makkelijk.', 'Ich weiß, das ist nicht einfach.']
      ],
      words: [['Moin!', 'hoi! (noorden)', 'i'], ['Servus!', 'hoi! / doei! (zuiden)', 'i'], ['Na?', 'en? / hoe is het?', 'i'], ['krass', 'heftig, te gek', 'i'], ['geil', 'gaaf, vet', 'i'], ['die Kohle', 'het geld', 'i'], ['der Kumpel', 'de maat, de vriend', 'i'],
        ['quatschen', 'kletsen', 'i'], ['Quatsch!', 'onzin!', 'i'], ['keinen Bock haben', 'geen zin hebben', 'i'], ['das Feierabendbier', 'het biertje na het werk', 'i'], ['die Kneipe', 'de kroeg', 'i'], ['Alter!', 'gast! man!', 'i'],
        ['jein', 'ja en nee', 'i'], ['Mahlzeit!', 'eet smakelijk / hallo (rond lunchtijd)', 'i'], ['Tschüssi!', 'doeg!', 'i'], ['das Brötchen', 'het broodje'], ['die Schrippe', 'het broodje (Berlijn)', 'i'], ['Mist!', 'verdorie!', 'i'], ['Scheiße!', 'shit!', 'g']],
      fact: 'Een broodje heet overal anders: «Brötchen» in het westen, «Schrippe» in Berlijn, «Semmel» in Beieren, «Weck» in het zuidwesten en «Rundstück» in Hamburg.' },

    { id: 'at', flag: '🇦🇹', name: 'Oostenrijk', city: 'Wien · Graz · Salzburg · Innsbruck', speakers: '±9 mln sprekers', group: 'dach', voice: 'AT', listen: 'de-AT', pin: [464, 479],
      hello: ['Servus! Willkommen in Österreich.', 'Hoi! Welkom in Oostenrijk.'],
      intro: 'Oostenrijks Duits klinkt zachter en zangeriger. Het heeft veel eigen woorden, vooral voor eten, en is net zo «officieel» als het Duits uit Duitsland.',
      sounds: [
        ['Grüß Gott en Servus', 'Je groet met «Grüß Gott» (beleefd) of «Servus» (onder bekenden). Afscheid nemen doe je met «Baba» of «Pfiat di». «Tschüss» klinkt hier erg Duits.', 'Grüß Gott! Was darf es sein?', 'Goedendag! Wat mag het zijn?', 'Guten Tag! Was darf es sein?'],
        ['Verkleinwoorden op -erl', 'Waar het Hoogduits «-chen» gebruikt, zegt een Oostenrijker «-erl»: een «Sackerl» (tasje), een «Packerl» (pakje), een «Glaserl» wijn.', 'Möchten Sie ein Sackerl dazu?', 'Wilt u er een tasje bij?', 'Möchten Sie eine Tüte dazu?'],
        ['Eigen woorden voor eten', 'Op de markt heet bijna alles anders: «Erdäpfel» (aardappelen), «Paradeiser» (tomaten), «Marillen» (abrikozen), «Topfen» (kwark).', 'Ich hätte gern ein Kilo Erdäpfel und Paradeiser.', 'Ik wil graag een kilo aardappelen en tomaten.', 'Ich hätte gern ein Kilo Kartoffeln und Tomaten.']
      ],
      words: [['Grüß Gott!', 'goedendag!'], ['Baba!', 'doei!', 'i'], ['das Sackerl', 'het tasje'], ['der Erdapfel', 'de aardappel'], ['der Paradeiser', 'de tomaat'], ['die Marille', 'de abrikoos'], ['der Topfen', 'de kwark'],
        ['das Schlagobers', 'de slagroom'], ['die Semmel', 'het broodje'], ['der Jänner', 'januari'], ['heuer', 'dit jaar'], ['leiwand', 'geweldig, tof (Wenen)', 'i'], ['das Beisl', 'het eetcafé', 'i'],
        ['die Melange', 'koffie met melkschuim'], ['der Sessel', 'de stoel (in Duitsland: de fauteuil)'], ['der Kasten', 'de kast'], ['die Jause', 'het tussendoortje'], ['ur-', 'heel erg, mega- (ur-gut)', 'i'], ['Oida!', 'gast! man! (Wenen)', 'i'], ['das geht sich aus', 'dat lukt net, dat past'], ['raunzen', 'zeuren, mopperen', 'i']],
      fact: 'Bij de toetreding tot de EU liet Oostenrijk 23 woorden officieel vastleggen, zoals «Erdäpfel» en «Marillen». Ze zijn in EU-teksten gelijkwaardig aan de Duitse woorden.' },

    { id: 'ch', flag: '🇨🇭', name: 'Zwitserland', city: 'Zürich · Bern · Basel · Luzern', speakers: '±5,5 mln sprekers', group: 'dach', voice: 'CH', listen: 'de-CH', pin: [232, 530],
      hello: ['Grüezi! Willkommen in der Schweiz.', 'Goedendag! Welkom in Zwitserland.'],
      intro: 'Zwitsers schrijven Hoogduits, maar spreken onderling «Schwyzerdütsch», dat zelfs Duitsers moeilijk verstaan. Het Zwitserse Hoogduits is rustig, met een harde ch en veel Franse leenwoorden.',
      sounds: [
        ['Geen ß', 'Uitzondering op de Duitse spelling: Zwitserland gebruikt de ß helemaal niet en schrijft altijd «ss»: «Strasse», «gross», «heiss». De reden is praktisch: op de Zwitserse typemachine was geen plaats naast de Franse accenten.', 'Die Strasse ist gross und heiss.', 'De straat is groot en heet.'],
        ['Verkleinwoorden op -li', 'Het Zwitserse verkleinwoord eindigt op «-li»: «Müesli», «Brötli», «Rüebli» (worteltje). Vandaar het woord muesli!', 'Zum Zmorge gibt es ein Müesli und ein Gipfeli.', 'Bij het ontbijt is er muesli en een croissant.', 'Zum Frühstück gibt es ein Müsli und ein Hörnchen.'],
        ['Franse woorden', 'Zwitsers gebruiken veel Franse woorden: «Velo» (fiets), «Billett» (kaartje), «Trottoir» (stoep), «Merci vilmal» (hartelijk dank).', 'Merci vilmal! Ich nehme das Velo, nicht das Tram.', 'Hartelijk dank! Ik neem de fiets, niet de tram.', 'Vielen Dank! Ich nehme das Fahrrad, nicht die Straßenbahn.']
      ],
      words: [['Grüezi!', 'goedendag!'], ['Merci vilmal!', 'hartelijk dank!'], ['das Velo', 'de fiets'], ['das Billett', 'het kaartje'], ['das Tram', 'de tram'], ['das Trottoir', 'de stoep'], ['der Zmorge', 'het ontbijt', 'i'],
        ['der Znüni', 'het tussendoortje om negen uur', 'i'], ['das Gipfeli', 'de croissant'], ['das Rüebli', 'de wortel'], ['das Poulet', 'de kip (vlees)'], ['das Natel', 'het mobieltje'], ['parkieren', 'parkeren'],
        ['grillieren', 'barbecueën'], ['der Coiffeur', 'de kapper'], ['das Spital', 'het ziekenhuis'], ['Uf Widerluege!', 'tot ziens!'], ['Ade!', 'dag!', 'i'], ['En Guete!', 'eet smakelijk!'], ['es bitzeli', 'een beetje', 'i']],
      fact: 'Het bekendste Zwitsers-Duitse woord is «Chuchichäschtli» (keukenkastje): drie keer de harde ch achter elkaar. Zwitsers laten bezoekers het graag proberen.' },

    { id: 'li', flag: '🇱🇮', name: 'Liechtenstein', city: 'Vaduz · Schaan', speakers: '±40.000 sprekers', group: 'klein', voice: 'CH', listen: 'de-CH', pin: [304, 492],
      voiceNote: 'Er bestaat geen computerstem uit Liechtenstein. Je hoort hier een Zwitserse stem; het dialect van Liechtenstein lijkt daar het meest op.',
      hello: ['Hoi! Willkommen in Liechtenstein.', 'Hoi! Welkom in Liechtenstein.'],
      intro: 'Het enige land ter wereld met alleen Duits als officiële taal. Op straat hoor je een Alemannisch dialect dat op Zwitsers-Duits lijkt; schrijven doet men in Hoogduits (zonder ß, net als in Zwitserland).',
      sounds: [
        ['Hoi!', 'Je groet elkaar met «Hoi», precies zoals in het Nederlands. Iedereen kent elkaar, dus je zegt ook snel «du».', 'Hoi! Wie geht es dir?', 'Hoi! Hoe gaat het met je?', 'Hallo! Wie geht es dir?'],
        ['Zwitserse woorden en franken', 'Liechtenstein gebruikt de Zwitserse frank en veel Zwitserse woorden: «Velo», «Billett», «parkieren».', 'Das Billett kostet fünf Franken.', 'Het kaartje kost vijf frank.', 'Die Fahrkarte kostet fünf Franken.']
      ],
      words: [['Hoi!', 'hoi!', 'i'], ['der Fürst', 'de vorst'], ['das Fürstentum', 'het vorstendom'], ['der Franken', 'de frank'], ['das Ländle', 'het landje (koosnaam voor Liechtenstein)', 'i'], ['das Schloss', 'het kasteel'],
        ['der Rhein', 'de Rijn'], ['die Alp', 'de bergweide'], ['das Velo', 'de fiets'], ['Tschau!', 'doei!', 'i'], ['der Rappen', 'de rappen (cent van de frank)'], ['die Gemeinde', 'de gemeente']],
      fact: 'Liechtenstein is 25 kilometer lang en heeft ongeveer 40.000 inwoners. Op de nationale feestdag nodigt de vorst het hele land uit voor een drankje in de tuin van zijn kasteel.' },

    { id: 'lu', flag: '🇱🇺', name: 'Luxemburg', city: 'Luxemburg · Esch · Echternach', speakers: '±500.000 sprekers', group: 'klein', voice: 'DE', listen: 'de-DE', pin: [152, 358],
      voiceNote: 'Er bestaat geen Luxemburgse computerstem voor het Duits. Je hoort hier een stem uit Duitsland; Luxemburgers spreken Duits met een zachter, wat Frans klinkend accent.',
      hello: ['Moien! Willkommen in Luxemburg.', 'Hallo! Welkom in Luxemburg.'],
      intro: 'Luxemburgers groeien op met drie talen: Luxemburgs (Lëtzebuergesch) thuis, Duits op de basisschool en in de krant, Frans in de winkel en bij de overheid. Hun Duits zit vol Franse woorden.',
      sounds: [
        ['Moien en Äddi', 'In het Luxemburgs groet je met «Moien» en neem je afscheid met «Äddi». Bedanken doe je op zijn Frans: «Merci».', 'Moien! Merci für die Hilfe.', 'Hallo! Bedankt voor de hulp.', 'Hallo! Danke für die Hilfe.'],
        ['Franse woorden in het Duits', 'In Luxemburgs Duits staan veel Franse woorden: de «Camion» (vrachtwagen), de «Coiffeur» (kapper), het «Trottoir» (stoep).', 'Der Camion steht auf dem Trottoir.', 'De vrachtwagen staat op de stoep.', 'Der Lastwagen steht auf dem Bürgersteig.']
      ],
      words: [['Moien!', 'hallo!'], ['Äddi!', 'dag!'], ['Merci!', 'bedankt!'], ['der Camion', 'de vrachtwagen'], ['der Coiffeur', 'de kapper'], ['das Trottoir', 'de stoep'], ['das Lyzeum', 'de middelbare school'],
        ['die Gemeinde', 'de gemeente'], ['das Großherzogtum', 'het groothertogdom'], ['der Großherzog', 'de groothertog'], ['dreisprachig', 'drietalig'], ['der Grenzgänger', 'de grensarbeider']],
      fact: 'Het nationale motto is Luxemburgs: «Mir wëlle bleiwe wat mir sinn» (Wij willen blijven wat wij zijn). Elke dag pendelen ruim 200.000 mensen uit Duitsland, Frankrijk en België naar Luxemburg om er te werken.' },

    { id: 'be', flag: '🇧🇪', name: 'Oost-België', city: 'Eupen · Sankt Vith', speakers: '±78.000 sprekers', group: 'klein', voice: 'DE', listen: 'de-DE', pin: [150, 298],
      voiceNote: 'Er bestaat geen Belgische computerstem voor het Duits. Je hoort hier een stem uit Duitsland; het Duits van Oost-België lijkt sterk op dat van het Duitse Rijnland.',
      hello: ['Guten Tag! Willkommen in Ostbelgien.', 'Goedendag! Welkom in Oost-België.'],
      intro: 'België heeft drie officiële talen, en de derde is Duits. In negen gemeenten rond Eupen en Sankt Vith, tegen de Duitse grens, is Duits de taal van school, bestuur en straat.',
      sounds: [
        ['Belgische woorden', 'Het Duits van Oost-België heeft woorden die uit het Frans of het Belgisch-Nederlands komen: het «Handy» heet hier vaak «GSM» en de burgemeester heeft «Schöffen» (schepenen) naast zich.', 'Ich rufe dich gleich mit dem GSM an.', 'Ik bel je zo met mijn mobieltje.', 'Ich rufe dich gleich mit dem Handy an.'],
        ['Drie talen op één dag', 'Veel Oost-Belgen spreken ook vloeiend Frans en vaak Nederlands. Een gesprek wisselt soms midden in de zin van taal.', 'Wir sprechen Deutsch, Französisch und ein bisschen Niederländisch.', 'We spreken Duits, Frans en een beetje Nederlands.']
      ],
      words: [['Ostbelgien', 'Oost-België'], ['der GSM', 'het mobieltje'], ['der Schöffe', 'de schepen (wethouder)'], ['die Deutschsprachige Gemeinschaft', 'de Duitstalige Gemeenschap'], ['das Hohe Venn', 'de Hoge Venen'],
        ['die Fritte', 'het frietje', 'i'], ['die Grenze', 'de grens'], ['zweisprachig', 'tweetalig'], ['der Bürgermeister', 'de burgemeester'], ['das Athenäum', 'het atheneum (middelbare school)'], ['die Mutuelle', 'het ziekenfonds'], ['der Belgier', 'de Belg']],
      fact: 'De Duitstalige Gemeenschap heeft een eigen parlement en regering in Eupen, voor maar ongeveer 78.000 inwoners. Daarmee is het een van de best beschermde taalminderheden van Europa.' }
  ];
})(window.SPT);
