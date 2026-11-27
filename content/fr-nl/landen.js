/* Uitbreiding «Op reis» voor Frans (cursus fr-nl): Frans per land (accent, eigen woorden, spreektaal).
   Staat los van de basiscursus (Frans van Frankrijk): de woorden hier komen niet in je gewone herhaling.
   Velden zoals in content/landen.js (Spaans): words = [Frans, Nederlands, label, uitspraak]; label i = informeel, g = grof.
   sounds = [titel, uitleg, voorbeeldzin, vertaling, neutraal (standaard-Frans, alleen als de woorden anders zijn)].
   voice = landcode van de stem (tools/tts-texts.js, PLACE_VOICES.fr); voiceNote = uitleg als er geen echte landstem is.
   pin = vlagknop op de kaart (content/kaarten/fr.js, viewBox 1000×600; Frankrijk, België en Zwitserland staan in het kader). */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('fr-nl')) return;
  const NOTE = land => 'Er bestaat nog geen computerstem uit ' + land + '. Je hoort hier een stem uit Frankrijk; in het echt klinkt het Frans er anders, met een eigen ritme en een rollende r.';

  S.placeMeta = {
    target: 'fr', base: 'FR', suffix: '',
    intro: 'Je basiscursus is het Frans van Frankrijk. Hier ga je zelf op bezoek: tik op een land en hoor hoe het Frans daar klinkt, met de typische woorden en spreektaal. Wat je hier oefent, komt niet in je gewone herhaling.'
  };
  S.placeGroups = [
    { id: 'europa', name: 'Europa' },
    { id: 'amerika', name: 'Noord-Amerika en de Cariben' },
    { id: 'afrika', name: 'Afrika' }
  ];

  S.places = [
    { id: 'fr', flag: '🇫🇷', name: 'Frankrijk', city: 'Paris · Lyon · Marseille', speakers: '±66 mln sprekers', group: 'europa', voice: 'FR', listen: 'fr-FR', pin: [412, 278],
      hello: ['Salut ! Bienvenue en France.', 'Hoi! Welkom in Frankrijk.'],
      intro: 'Het Frans van je basiscursus. Op straat hoor je daarnaast veel spreektaal (argot) en verlan: woorden waarvan de lettergrepen zijn omgedraaid.',
      sounds: [
        ['«Ne» valt weg', 'In spreektaal laten Fransen «ne» bijna altijd weg, en «je» smelt samen met het werkwoord: «je ne sais pas» wordt «chais pas».', 'Je sais pas, j\'ai pas le temps.', 'Ik weet het niet, ik heb geen tijd.', 'Je ne sais pas, je n\'ai pas le temps.'],
        ['Verlan', 'Jongeren draaien lettergrepen om: «femme» wordt «meuf», «fou» wordt «ouf», «louche» wordt «chelou». Het woord verlan is zelf «l\'envers» (andersom) omgedraaid.', 'C\'est un truc de ouf !', 'Dat is echt gestoord!', 'C\'est une chose folle !'],
        ['Zuidelijk accent', 'In Marseille en Toulouse hoor je de stomme e aan het eind wél, en klinken neusklanken als «-eng»: «pain» klinkt bijna als «peng».', 'Tu veux du pain et une petite tarte ?', 'Wil je brood en een taartje?']
      ],
      words: [['le boulot', 'het werk', 'i'], ['bosser', 'werken', 'i'], ['la bagnole', 'de auto', 'i'], ['la bouffe', 'het eten', 'i'], ['le fric', 'het geld', 'i'], ['un mec', 'een gast, een kerel', 'i'], ['une meuf', 'een meid, een vrouw (verlan van femme)', 'i'],
        ['un truc', 'een ding, een dinges', 'i'], ['kiffer', 'te gek vinden, dol zijn op', 'i'], ['ouf', 'gestoord, te gek (verlan van fou)', 'i'], ['chelou', 'raar, verdacht (verlan van louche)', 'i'], ['relou', 'irritant (verlan van lourd)', 'i'], ['la flemme', 'geen zin, luiheid', 'i'],
        ['bof', 'mwah, niet bijzonder', 'i'], ['nickel', 'perfect, piekfijn', 'i'], ['du coup', 'dus, daardoor (stopwoord)', 'i'], ['c\'est pas grave', 'het geeft niet', 'i'], ['un pote', 'een maat, een vriend', 'i'], ['les fringues', 'de kleren', 'i'], ['putain !', 'verdomme! (hoor je overal)', 'g']],
      fact: 'De Académie française waakt sinds 1635 over de Franse taal en bedenkt Franse woorden voor Engelse termen, zoals «courriel» voor e-mail. De meeste Fransen zeggen toch gewoon «mail».' },

    { id: 'be', flag: '🇧🇪', name: 'België', city: 'Bruxelles · Liège · Namur', speakers: '±4,5 mln sprekers', group: 'europa', voice: 'BE', listen: 'fr-BE', pin: [442, 191],
      hello: ['Bonjour ! Bienvenue en Belgique, une fois.', 'Goedendag! Welkom in België.'],
      intro: 'In Wallonië en Brussel spreekt men Frans met logische getallen (septante, nonante) en een flink aantal woorden die uit het Nederlands komen.',
      sounds: [
        ['Septante en nonante', 'Belgen tellen logisch: 70 is «septante» en 90 is «nonante». Alleen 80 blijft «quatre-vingts».', 'Ça coûte septante-cinq euros, pas nonante.', 'Dat kost vijfenzeventig euro, geen negentig.', 'Ça coûte soixante-quinze euros, pas quatre-vingt-dix.'],
        ['Déjeuner, dîner, souper', 'De maaltijden schuiven op: «déjeuner» is het ontbijt, «dîner» de lunch en «souper» het avondeten. In Frankrijk is «déjeuner» juist de lunch.', 'On dîne à midi et on soupe à sept heures.', 'We lunchen om twaalf uur en eten \'s avonds om zeven uur.', 'On déjeune à midi et on dîne à sept heures.'],
        ['Savoir in plaats van pouvoir', 'Belgen gebruiken «savoir» vaak waar Fransen «pouvoir» zeggen, net als «kunnen» in het Nederlands.', 'Tu sais me passer le sel ?', 'Kun je me het zout aangeven?', 'Tu peux me passer le sel ?']
      ],
      words: [['septante', 'zeventig'], ['nonante', 'negentig'], ['le GSM', 'het mobieltje'], ['la drache', 'de stortbui', 'i'], ['il drache', 'het giet', 'i'], ['le kot', 'de studentenkamer', 'i'], ['le chicon', 'het witlof'],
        ['un essuie', 'een handdoek'], ['le bourgmestre', 'de burgemeester'], ['la dringuelle', 'de fooi, het zakcentje (van: drinkgeld)', 'i'], ['le brol', 'de rommel', 'i'], ['un pistolet', 'een rond broodje'], ['à tantôt', 'tot straks'],
        ['tirer son plan', 'zich redden (letterlijk: zijn plan trekken)', 'i'], ['une carabistouille', 'een onzinverhaal', 'i'], ['la farde', 'de map, de ordner'], ['s\'il vous plaît', 'alstublieft (ook bij het aangeven, anders dan in Frankrijk)'], ['non, peut-être !', 'ja, natuurlijk! (Brussels, ironisch)', 'i']],
      fact: 'Friet is Belgisch, niet Frans: Belgen eten ze met mayonaise uit een «cornet» van de «friterie» (of in Brussel: het «fritkot»).' },

    { id: 'ch', flag: '🇨🇭', name: 'Zwitserland', city: 'Genève · Lausanne · Neuchâtel', speakers: '±2 mln sprekers', group: 'europa', voice: 'CH', listen: 'fr-CH', pin: [494, 275],
      hello: ['Bonjour ! Bienvenue en Suisse romande.', 'Goedendag! Welkom in Franstalig Zwitserland.'],
      intro: 'In «la Suisse romande», het westen van Zwitserland, spreekt men rustig en duidelijk Frans, met septante, huitante en nonante en woorden uit het Duits.',
      sounds: [
        ['Septante, huitante, nonante', 'Net als de Belgen zeggen Zwitsers «septante» en «nonante», en in veel kantons ook «huitante» voor 80.', 'J\'ai huitante francs dans mon porte-monnaie.', 'Ik heb tachtig frank in mijn portemonnee.', 'J\'ai quatre-vingts francs dans mon porte-monnaie.'],
        ['Rustig tempo', 'Zwitsers praten langzamer dan Parijzenaars en spreken de lettergrepen duidelijk uit. Fijn voor wie Frans leert!', 'Il n\'y a pas le feu au lac.', 'Er is geen haast bij. (letterlijk: het meer staat niet in brand)'],
        ['Ça joue', '«Ça joue» betekent: het is goed, het klopt, het komt in orde. Je hoort het de hele dag.', 'Demain à huit heures, ça joue ?', 'Morgen om acht uur, komt dat uit?', 'Demain à huit heures, ça te va ?']
      ],
      words: [['huitante', 'tachtig'], ['septante', 'zeventig'], ['nonante', 'negentig'], ['le natel', 'het mobieltje'], ['ça joue', 'het is goed, het komt in orde', 'i'], ['service !', 'graag gedaan!'], ['adieu !', 'hallo! / dag! (onder bekenden)'],
        ['la panosse', 'de dweil'], ['le cornet', 'het plastic tasje'], ['le linge', 'de handdoek'], ['poutzer', 'schoonmaken, poetsen (uit het Duits: putzen)', 'i'], ['le chenit', 'de rommel', 'i'], ['le foehn', 'de föhn, de haardroger'],
        ['la votation', 'de volksstemming'], ['déçu en bien', 'aangenaam verrast (letterlijk: positief teleurgesteld)'], ['le souper', 'het avondeten'], ['un bancomat', 'een geldautomaat'], ['tout de bon !', 'het allerbeste!']],
      fact: 'Zwitserland heeft vier landstalen: Duits, Frans, Italiaans en Reto-Romaans. Ongeveer een kwart van de Zwitsers heeft Frans als moedertaal.' },

    { id: 'ca', flag: '🇨🇦', name: 'Québec (Canada)', city: 'Montréal · Québec', speakers: '±7,5 mln sprekers', group: 'amerika', voice: 'CA', listen: 'fr-CA', pin: [247, 90],
      hello: ['Allô ! Bienvenue au Québec.', 'Hallo! Welkom in Québec.'],
      intro: 'Het Frans van Québec klinkt heel anders dan dat van Parijs: oudere klanken uit de 17e eeuw, eigen woorden, en Franse vertalingen voor wat Fransen in het Engels zeggen.',
      sounds: [
        ['Tsu en dzi', 'Een t of d voor «u» of «i» krijgt een s- of z-klank erbij: «tu» klinkt als «tsu», «dix» als «dzis».', 'Tu dis que tu es fatigué ?', 'Zeg je dat je moe bent?'],
        ['Tu veux-tu ?', 'In spreektaal maak je een ja/nee-vraag met een extra «-tu» achter het werkwoord, bij elke persoon.', 'Tu veux-tu un café ?', 'Wil je een koffie?', 'Est-ce que tu veux un café ?'],
        ['Franse woorden voor Engels', 'Québécois vertalen wat Fransen uit het Engels lenen: «fin de semaine» (week-end), «courriel» (mail), «magasiner» (faire du shopping).', 'En fin de semaine, je vais magasiner.', 'In het weekend ga ik winkelen.', 'Le week-end, je vais faire du shopping.']
      ],
      words: [['le char', 'de auto', 'i'], ['ma blonde', 'mijn vriendin (verkering)', 'i'], ['mon chum', 'mijn vriend (verkering) / mijn maat', 'i', 'tchomme'], ['le dépanneur', 'de buurtwinkel, de avondwinkel'], ['magasiner', 'winkelen'], ['la fin de semaine', 'het weekend'],
        ['le courriel', 'de e-mail'], ['la tuque', 'de wollen muts'], ['il fait frette', 'het is steenkoud', 'i'], ['c\'est le fun', 'het is leuk', 'i'], ['pantoute', 'helemaal niet', 'i'], ['icitte', 'hier', 'i'], ['bienvenue', 'graag gedaan (antwoord op merci)'],
        ['à tantôt', 'tot straks'], ['la poutine', 'friet met kaas en jus'], ['le déjeuner', 'het ontbijt (in Frankrijk: de lunch)'], ['jaser', 'kletsen', 'i'], ['une piastre', 'een dollar', 'i', 'piasse'], ['tabarnak !', 'verdomme! (kerkelijk vloekwoord)', 'g']],
      fact: 'Vloeken doe je in Québec met kerkwoorden: «tabarnak» (tabernakel), «câlice» (kelk) en «ostie» (hostie). Deze «sacres» zijn veel grover dan ze voor ons klinken.' },

    { id: 'ht', flag: '🇭🇹', name: 'Haïti', city: 'Port-au-Prince', speakers: '±4 mln sprekers van het Frans', group: 'amerika', voice: 'AFR', listen: 'fr-FR', pin: [193, 325],
      voiceNote: NOTE('Haïti'),
      hello: ['Bonjour ! Bienvenue en Haïti.', 'Goedendag! Welkom in Haïti.'],
      intro: 'Haïti heeft twee officiële talen: Frans (school, pers, overheid) en Haïtiaans Creools (kreyòl), dat iedereen spreekt. Het Creools is uit het Frans ontstaan en je herkent veel woorden.',
      sounds: [
        ['Creools: Frans op het gehoor', 'Creools schrijf je zoals je het hoort. «Bonjou» is bonjour, «mèsi» is merci, «lakay» is la maison (van: la case).', 'Bonjou, mèsi anpil !', 'Goedendag, heel erg bedankt!', 'Bonjour, merci beaucoup !'],
        ['Sak pase ?', 'De bekendste groet van Haïti: «Sak pase ?» (wat gebeurt er?). Het antwoord is «N ap boule» (we branden = het gaat prima).', 'Sak pase ? N ap boule !', 'Hoe gaat het? Prima!', 'Comment ça va ? Ça va bien !'],
        ['De r verdwijnt', 'In het Frans van Haïti is de r aan het eind van een lettergreep zacht of weg: «parler» klinkt als «pa-lé».', 'Nous allons parler avec le professeur.', 'We gaan met de leraar praten.']
      ],
      words: [['sak pase ?', 'hoe gaat het? (Creools)', 'i'], ['n ap boule', 'het gaat prima (Creools)', 'i'], ['bonjou', 'goedendag (Creools)'], ['mèsi anpil', 'heel erg bedankt (Creools)'], ['lakay', 'thuis, het huis (Creools)'],
        ['le tap-tap', 'de beschilderde deelbus'], ['le griot', 'gebakken stukjes varkensvlees'], ['la banane pesée', 'gebakken platte bakbanaan'], ['le clairin', 'de lokale witte rum'], ['la gourde', 'de gourde (Haïtiaanse munt)'],
        ['le blanc', 'de buitenlander (ook als hij niet wit is)', 'i'], ['un ti moun', 'een kind (Creools, van: petit monde)'], ['le lakou', 'het gezamenlijke erf van een familie'], ['le konpa', 'de kompa (dansmuziek)'], ['pa gen pwoblèm', 'geen probleem (Creools)', 'i']],
      fact: 'Haïti werd in 1804 onafhankelijk van Frankrijk na de enige geslaagde slavenopstand in de geschiedenis. Het was de eerste zwarte republiek ter wereld.' },

    { id: 'ma', flag: '🇲🇦', name: 'Marokko', city: 'Casablanca · Rabat · Marrakech', speakers: '±13 mln sprekers van het Frans', group: 'afrika', voice: 'AFR', listen: 'fr-FR', pin: [622, 240],
      voiceNote: NOTE('Marokko'),
      hello: ['Salam, bonjour ! Bienvenue au Maroc.', 'Salam, goedendag! Welkom in Marokko.'],
      intro: 'In Marokko is Frans de taal van zaken, studie en media, naast Arabisch (darija) en Berbers. Mensen wisselen midden in een zin van taal. Veel Arabische woorden zijn ook in Frankrijk spreektaal geworden.',
      sounds: [
        ['Rollende r', 'De r wordt met de tongpunt gerold, anders dan de Franse huig-r.', 'Le restaurant est près de la gare de Rabat.', 'Het restaurant is dicht bij het station van Rabat.'],
        ['Frans en darija door elkaar', 'Arabische woordjes als «wakha» (oké), «safi» (klaar, genoeg) en «yallah» (kom op) staan gewoon tussen het Frans.', 'Wakha, on se retrouve à cinq heures, inchallah.', 'Oké, we zien elkaar om vijf uur, als God het wil.', 'D\'accord, on se retrouve à cinq heures, j\'espère.'],
        ['Arabisch in het Franse argot', '«Kif-kif» (hetzelfde), «un chouïa» (een beetje) en «le bled» (het dorp, het thuisland) hoor je ook in Parijs.', 'C\'est kif-kif, donne-moi un chouïa de thé.', 'Het is om het even, geef me een beetje thee.', 'C\'est pareil, donne-moi un peu de thé.']
      ],
      words: [['inchallah', 'als God het wil, hopelijk'], ['wakha', 'oké (darija)', 'i'], ['safi', 'klaar, genoeg, afgesproken (darija)', 'i'], ['yallah', 'kom op, we gaan', 'i'], ['kif-kif', 'hetzelfde, om het even', 'i'], ['un chouïa', 'een beetje', 'i'],
        ['le bled', 'het dorp / het thuisland', 'i'], ['le souk', 'de markt'], ['la médina', 'de oude binnenstad'], ['le riad', 'het stadshuis met binnentuin'], ['le hanout', 'het buurtwinkeltje'], ['le petit taxi', 'de stadstaxi (per stad een eigen kleur)'],
        ['le tajine', 'de tajine (stoofschotel)'], ['le thé à la menthe', 'de muntthee'], ['le flouse', 'het geld', 'i'], ['le toubib', 'de dokter', 'i'], ['khouya', 'broer, vriend (aanspreekvorm)', 'i'], ['la baraka', 'het geluk, de zegen']],
      fact: 'Muntthee schenk je van hoog in het glas, zodat er schuim op komt. Een glas weigeren is onbeleefd; drie glazen is de traditie.' },

    { id: 'sn', flag: '🇸🇳', name: 'Senegal', city: 'Dakar · Saint-Louis', speakers: '±5 mln sprekers van het Frans', group: 'afrika', voice: 'AFR', listen: 'fr-FR', pin: [581, 361],
      voiceNote: NOTE('Senegal'),
      hello: ['Bonjour ! Nanga def ? Bienvenue au Sénégal.', 'Goedendag! Hoe gaat het? Welkom in Senegal.'],
      intro: 'Frans is de officiële taal van Senegal, maar op straat spreekt bijna iedereen Wolof. Het Senegalese Frans is beleefd en verzorgd, met eigen woorden en lange begroetingen.',
      sounds: [
        ['Lange begroetingen', 'Je vraagt eerst uitgebreid naar de ander, de familie en het werk. Meteen ter zake komen is onbeleefd.', 'Bonjour ! Ça va ? Et la famille ? Et le travail ?', 'Goedendag! Gaat het? En de familie? En het werk?'],
        ['Ça va un peu', 'Op «Ça va ?» antwoord je vaak bescheiden «Ça va un peu» (het gaat een beetje). Het betekent gewoon dat het goed gaat.', 'Ça va un peu, on est ensemble.', 'Het gaat wel, we staan er samen voor.', 'Ça va bien, merci.'],
        ['Wolof in het Frans', 'Wolofwoorden staan tussen het Frans: «waaw» (ja), «déedéet» (nee), «jërëjëf» (dank je).', 'Waaw, jërëjëf, c\'est très gentil.', 'Ja, dank je, dat is heel aardig.', 'Oui, merci, c\'est très gentil.']
      ],
      words: [['nanga def ?', 'hoe gaat het? (Wolof)', 'i'], ['mangi fi', 'het gaat goed (Wolof: ik ben hier)', 'i'], ['jërëjëf', 'dank je (Wolof)', '', 'djeredjef'], ['on est ensemble', 'we staan er samen voor / tot ziens'], ['ça va un peu', 'het gaat wel'],
        ['le toubab', 'de witte, de Europeaan', 'i'], ['la teranga', 'de gastvrijheid (Wolof)'], ['le thiéboudienne', 'rijst met vis (nationaal gerecht)', '', 'tjéboe-djèn'], ['une essencerie', 'een tankstation'], ['la dibiterie', 'het grillrestaurant (geroosterd vlees)'],
        ['le car rapide', 'de bontbeschilderde minibus'], ['un taximan', 'een taxichauffeur'], ['le boubou', 'het wijde gewaad'], ['dégager', 'weggaan, opschieten', 'i'], ['le bissap', 'de hibiscusdrank'], ['cadeauter', 'cadeau geven', 'i']],
      fact: 'De eerste president van Senegal, Léopold Sédar Senghor, was dichter en het eerste Afrikaanse lid van de Académie française.' },

    { id: 'ci', flag: '🇨🇮', name: 'Ivoorkust', city: 'Abidjan · Yamoussoukro', speakers: '±10 mln sprekers van het Frans', group: 'afrika', voice: 'AFR', listen: 'fr-FR', pin: [640, 414],
      voiceNote: NOTE('Ivoorkust'),
      hello: ['Bonjour ! On dit quoi ? Bienvenue en Côte d\'Ivoire.', 'Goedendag! Hoe is het? Welkom in Ivoorkust.'],
      intro: 'In Ivoorkust is Frans de taal die iedereen verbindt. Op straat in Abidjan ontstond het nouchi: een creatieve mix van Frans en lokale talen die via muziek door heel Franstalig Afrika reist.',
      sounds: [
        ['On dit quoi ?', 'De groet van Abidjan: «On dit quoi ?» (wat zegt men?). Je antwoordt «Ça va aller» of «On est là».', 'On dit quoi, mon frère ? On est là !', 'Hoe is het, broer? We zijn er nog!', 'Comment ça va, mon ami ? Ça va bien !'],
        ['Lidwoorden vallen weg', 'In het straat-Frans verdwijnen lidwoorden en worden zinnen kort en ritmisch.', 'Je vais prendre gbaka pour aller au maquis.', 'Ik pak de minibus om naar het eettentje te gaan.', 'Je vais prendre le minibus pour aller au restaurant.'],
        ['Nouchi', 'Nouchi maakt nieuwe werkwoorden: «s\'enjailler» (plezier maken, van het Engelse enjoy) wordt nu ook in Frankrijk gebruikt.', 'Ce soir, on va s\'enjailler !', 'Vanavond gaan we lol maken!', 'Ce soir, on va s\'amuser !']
      ],
      words: [['on dit quoi ?', 'hoe is het?', 'i'], ['on est là', 'het gaat wel, we zijn er nog', 'i'], ['ça va aller', 'het komt goed'], ['le maquis', 'het openluchtrestaurant, het eettentje'], ['le gbaka', 'de minibus', 'i', 'baka'], ['le wôrô-wôrô', 'de deeltaxi', 'i'],
        ['s\'enjailler', 'plezier maken', 'i'], ['une go', 'een meisje, een vriendin', 'i'], ['un môgô', 'een gast, een kerel', 'i'], ['yako', 'sterkte, gecondoleerd'], ['le garba', 'attiéké met gebakken tonijn (straatgerecht)'], ['l\'attiéké', 'cassave-couscous'],
        ['l\'alloco', 'gebakken bakbanaan'], ['y a foye', 'er is niets aan de hand', 'i'], ['dja', 'nu al, blijkbaar', 'i'], ['le vieux père', 'de oudere (respectvolle aanspreekvorm)', 'i'], ['gâter', 'kapotmaken, bederven'], ['c\'est comment ?', 'hoe zit het? / hoe gaat het?', 'i']],
      fact: 'De muziekstijl coupé-décalé en de band Magic System («Premier Gaou») maakten het nouchi bekend tot in de Franse hitlijsten.' },

    { id: 'cd', flag: '🇨🇩', name: 'Congo-Kinshasa', city: 'Kinshasa · Lubumbashi', speakers: '±50 mln sprekers van het Frans', group: 'afrika', voice: 'AFR', listen: 'fr-FR', pin: [838, 497],
      voiceNote: NOTE('Congo'),
      hello: ['Mbote ! Bonjour ! Bienvenue à Kinshasa.', 'Hallo! Goedendag! Welkom in Kinshasa.'],
      intro: 'De Democratische Republiek Congo is het land met de meeste Franstaligen ter wereld, en Kinshasa is de grootste Franstalige stad, groter dan Parijs. Het Frans leeft er naast het Lingala, het Swahili en honderden andere talen. Door het Belgische verleden zegt men ook hier septante en nonante.',
      sounds: [
        ['Septante en nonante', 'Een erfenis van België: Congolezen tellen met «septante» en «nonante».', 'Il a nonante ans et sa femme septante-huit.', 'Hij is negentig en zijn vrouw achtenzeventig.', 'Il a quatre-vingt-dix ans et sa femme soixante-dix-huit.'],
        ['Lingala in het Frans', 'Woorden uit het Lingala staan tussen het Frans: «mbote» (hallo), «malamu» (goed), «mundele» (witte).', 'Mbote, ça va malamu ?', 'Hallo, gaat het goed?', 'Bonjour, ça va bien ?'],
        ['Verzorgd en plechtig', 'Congolees Frans klinkt vaak formeler dan Europees Frans, met mooie, soms ouderwetse woorden en een duidelijke uitspraak van elke lettergreep.', 'Je vous prie de bien vouloir patienter un instant.', 'Ik verzoek u vriendelijk een ogenblik te wachten.']
      ],
      words: [['mbote', 'hallo (Lingala)'], ['malamu', 'goed (Lingala)'], ['septante', 'zeventig'], ['nonante', 'negentig'], ['un sapeur', 'een modebewuste dandy (lid van «la Sape»)'], ['la sape', 'de (chique) kleding', 'i'],
        ['le nganda', 'het café, de bar', 'i'], ['le malewa', 'het eetkraampje', 'i'], ['le wewa', 'de motortaxi', 'i'], ['le matabiche', 'de fooi, het steekpenningetje', 'i'], ['le mundele', 'de witte, de Europeaan', 'i'], ['ambiancer', 'feesten, sfeer maken', 'i'],
        ['un ambianceur', 'een feestvierder', 'i'], ['le fula-fula', 'de volle stadsbus', 'i'], ['le pondu', 'gestoofde cassavebladeren'], ['le fufu', 'deegbal van cassave of maïs'], ['la rumba', 'de Congolese rumba (dansmuziek)'], ['article quinze', 'red jezelf maar (spreekwoordelijk «artikel 15»)', 'i']],
      fact: '«La Sape» is een beweging van elegante heren (sapeurs) die in felgekleurde maatpakken door Kinshasa en Brazzaville paraderen. De Congolese rumba staat op de UNESCO-lijst van immaterieel erfgoed.' }
  ];
  if (S.frTypo) S.places = S.frTypo(S.places); // vaste spatie vóór ? en !
})(window.SPT);
