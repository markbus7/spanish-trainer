/* Uitbreiding «Op reis» voor Turks (cursus tr-nl): Turks per land (accent, spreektaal, eigen woorden).
   Staat los van de basiscursus (standaard-Turks van Turkije): de woorden hier komen niet in je gewone herhaling.
   Velden zoals in content/landen.js (Spaans): words = [Turks, Nederlands, label, uitspraak]; label i = informeel, g = grof.
   sounds = [titel, uitleg, voorbeeldzin, vertaling, neutraal (standaard-Turks, alleen als de woorden anders zijn)].
   voice = landcode van de stem (tools/tts-texts.js, PLACE_VOICES.tr); voiceNote = uitleg als er geen echte landstem is.
   pin = vlagknop op de kaart (content/kaarten/tr.js, viewBox 900×560). */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('tr-nl')) return;

  S.placeMeta = {
    target: 'tr', base: 'TR', suffix: '',
    intro: 'Je basiscursus is het standaard-Turks van Turkije. Hier ga je zelf op bezoek: tik op een land en hoor hoe het Turks daar klinkt, met de typische woorden en spreektaal. Wat je hier oefent, komt niet in je gewone herhaling.'
  };
  S.placeGroups = [
    { id: 'kern', name: 'Turkije en Cyprus' },
    { id: 'balkan', name: 'De Balkan' },
    { id: 'europa', name: 'West-Europa' },
    { id: 'kaukasus', name: 'De Kaukasus' }
  ];

  S.places = [
    { id: 'tr', flag: '🇹🇷', name: 'Turkije', city: 'İstanbul · Ankara · İzmir', speakers: '±85 mln sprekers', group: 'kern', voice: 'TR', listen: 'tr-TR', pin: [609, 430],
      hello: ['Merhaba! Türkiye’ye hoş geldin.', 'Hallo! Welkom in Turkije.'],
      intro: 'Het Turks van je basiscursus, gebaseerd op de uitspraak van İstanbul. Op straat klinkt het korter en sneller dan in je boek, en er is een vaste beleefdheidszin voor bijna elke situatie.',
      sounds: [
        ['-yor wordt -yo', 'In spreektaal valt de r van -yor vaak weg, en «geliyorum» wordt «geliyom». Schrijven doe je het nooit zo.', 'Geliyom, bi dakika!', 'Ik kom eraan, momentje!', 'Geliyorum, bir dakika!'],
        ['-eceğim wordt -icem', 'De toekomende tijd wordt in het spreken sterk ingekort: «gideceğim» klinkt als «gidicem», «yapacağız» als «yapıcaz».', 'Yarın sana gelicem.', 'Morgen kom ik naar je toe.', 'Yarın sana geleceğim.'],
        ['Samengetrokken groeten', '«Ne haber?» (wat voor nieuws?) wordt «N’aber?», en «Ne yapıyorsun?» wordt «Napıyorsun?».', 'N’aber kanka, napıyorsun?', 'Hoe is het, maat, wat doe je?', 'Ne haber arkadaşım, ne yapıyorsun?']
      ],
      words: [['n’aber?', 'hoe is het?', 'i'], ['kanka', 'maat, vriend', 'i'], ['aynen', 'precies, klopt', 'i'], ['eyvallah', 'bedankt / oké / tot ziens', 'i'], ['valla', 'echt waar, eerlijk', 'i'], ['boş ver', 'laat maar zitten', 'i'],
        ['hadi ya!', 'nee, echt?!', 'i'], ['yok ya', 'nee joh', 'i'], ['tamamdır', 'komt in orde'], ['kolay gelsin', 'succes met je werk (zeg je tegen iedereen die werkt)'], ['geçmiş olsun', 'beterschap / sterkte'],
        ['eline sağlık', 'dank voor het koken (lett.: gezondheid aan je hand)'], ['çok yaşa', 'gezondheid (bij niezen)'], ['maşallah', 'wat mooi, wat goed (tegen het boze oog)'], ['inşallah', 'hopelijk (als God het wil)'],
        ['hayırlı olsun', 'gefeliciteerd met iets nieuws (baan, huis, auto)'], ['başın sağ olsun', 'gecondoleerd'], ['bi dakika', 'momentje', 'i'], ['çüş!', 'ho ho, dat gaat te ver!', 'i'], ['lan', 'man, gast (onder vrienden; anders beledigend)', 'g']],
      fact: 'Het Turks heeft voor bijna elke gebeurtenis een vaste wens: bij ziekte, werk, niezen, een nieuwe aankoop, een reis of na het douchen (sıhhatler olsun!). Wie ze gebruikt, klinkt meteen thuis.' },

    { id: 'cy', flag: '🇨🇾', name: 'Cyprus', city: 'Lefkoşa · Girne · Gazimağusa', speakers: '±300.000 sprekers', group: 'kern', voice: 'CY', listen: 'tr-TR', pin: [571, 521],
      voiceNote: 'Er bestaat nog geen Cypriotische computerstem. Je hoort hier de stem uit Turkije; echt Cypriotisch Turks klinkt zangeriger en zachter.',
      hello: ['Merhaba! Kıbrıs’a hoş geldin. Napan?', 'Hallo! Welkom op Cyprus. Hoe is het?'],
      intro: 'Op Cyprus wordt al eeuwen Turks gesproken. Het Cypriotisch Turks (Kıbrıs Türkçesi) heeft een eigen melodie, zachtere medeklinkers en leenwoorden uit het Grieks en het Engels.',
      sounds: [
        ['K wordt g, t wordt d', 'Aan het begin van een woord klinkt de k vaak als g en de t als d: «kız» wordt «gız», «kardeş» wordt «gardaş», «taş» wordt «daş».', 'Gardaşım Lefkoşa’da yaşar.', 'Mijn broer woont in Nicosia.', 'Kardeşim Lefkoşa’da yaşıyor.'],
        ['Napan?', 'De tegenwoordige tijd is korter dan in Turkije. «Ne yapıyorsun?» is hier «Napan?», ook als groet.', 'Napan, iyisin?', 'Hoe is het, gaat het goed?', 'Ne yapıyorsun, iyi misin?'],
        ['Be!', 'Het woordje «be» geeft nadruk of warmte aan een zin, een beetje als «joh».', 'Gel be buraya!', 'Kom eens hier, joh!', 'Gel buraya!']
      ],
      words: [['napan?', 'hoe is het? / wat doe je?', 'i'], ['be', 'joh, zeg (voor nadruk)', 'i'], ['hellim', 'halloumi (Cypriotische kaas)'], ['babutsa', 'cactusvijg'], ['piron', 'vork (in Turkije: çatal)'],
        ['gancelli', 'tuinhek, poort'], ['bulli', 'kip (in Turkije: tavuk)'], ['gabira', 'geroosterd brood'], ['garavolli', 'slak'], ['ekşi', 'citroen (in Turkije: limon; ekşi = zuur)'],
        ['barabar', 'samen (in Turkije: beraber)'], ['zibil', 'afval, vuilnis (in Turkije: çöp)'], ['Lefkoşa', 'Nicosia'], ['şeftali kebabı', 'Cypriotische worstjes van de grill (zonder perzik!)']],
      fact: '«Şeftali kebabı» betekent letterlijk perzikkebab, maar er zit geen fruit in. Volgens een bekend verhaal komt de naam van «Şef Ali», de kok die het bedacht.' },

    { id: 'bg', flag: '🇧🇬', name: 'Bulgarije en de Balkan', city: 'Kırcaali · Razgrad · Üsküp · Prizren', speakers: '±1 mln sprekers', group: 'balkan', voice: 'BG', listen: 'tr-TR', pin: [436, 346],
      voiceNote: 'Er bestaat nog geen computerstem voor het Balkan-Turks. Je hoort hier de stem uit Turkije.',
      hello: ['Merhaba! Balkanlara hoş geldin, abe!', 'Hallo! Welkom op de Balkan, zeg!'],
      intro: 'Uit de Osmaanse tijd wonen er nog altijd Turkse gemeenschappen in Bulgarije, Griekenland (West-Thracië), Noord-Macedonië en Kosovo. Hun Turks heet Rumeli Türkçesi en klinkt ouderwets en gemoedelijk.',
      sounds: [
        ['De h valt weg', 'Aan het begin van een woord verdwijnt de h vaak: «hadi» wordt «ayde», «hasta» wordt «asta».', 'Ayde, gidelim!', 'Kom, laten we gaan!', 'Hadi, gidelim!'],
        ['Korte toekomende tijd', 'De toekomende tijd wordt ingekort: «geleceğim» wordt «gelecem», «yapacağım» wordt «yapacam».', 'Yarın sana gelecem.', 'Morgen kom ik naar je toe.', 'Yarın sana geleceğim.'],
        ['Abe, mari, bre', 'Je roept een man aan met «abe» of «bre» en een vrouw met «mari». Het klinkt hartelijk, niet onbeleefd.', 'Abe, ne yapıyorsun?', 'Hé, wat ben je aan het doen?', 'Hey, ne yapıyorsun?']
      ],
      words: [['abe', 'hé, zeg (tegen een man)', 'i'], ['mari', 'hé, zeg (tegen een vrouw)', 'i'], ['bre', 'hé, joh', 'i'], ['ayde', 'kom op (in Turkije: hadi)', 'i'], ['kızan', 'kind, jongen (in Turkije: çocuk)'],
        ['babo', 'vader (in Turkije: baba)'], ['nene', 'oma'], ['kapuska', 'stoofpot van witte kool'], ['boza', 'dikke, zoetzure drank van gierst'], ['pite', 'hartige taart van dun deeg (in Turkije: börek)'],
        ['gelecem', 'ik zal komen (in Turkije: geleceğim)', 'i'], ['Rumeli', 'het Osmaanse deel van Europa, de Balkan']],
      fact: 'De ouders van Atatürk kwamen uit de Balkan; hijzelf werd in 1881 geboren in Selanik, het huidige Thessaloniki in Griekenland.' },

    { id: 'de', flag: '🇩🇪', name: 'Duitsland', city: 'Berlin · Köln · Duisburg', speakers: '±3 mln sprekers', group: 'europa', voice: 'DE', listen: 'tr-TR', pin: [180, 131],
      voiceNote: 'Je hoort hier de stem uit Turkije. In Duitsland spreekt men de Duitse woorden natuurlijk op zijn Duits uit.',
      hello: ['Merhaba! Almanya’ya hoş geldin.', 'Hallo! Welkom in Duitsland.'],
      intro: 'In Duitsland woont de grootste Turkse gemeenschap buiten Turkije. Thuis en op straat lopen Turks en Duits door elkaar: Duitse woorden krijgen gewoon Turkse uitgangen.',
      sounds: [
        ['Duitse woorden met Turkse uitgangen', 'Een Duits zelfstandig naamwoord krijgt de Turkse naamval erachter, volgens de klinkerharmonie.', 'Bahnhof’ta buluşalım.', 'Laten we op het station afspreken.', 'İstasyonda buluşalım.'],
        ['Duits woord + yapmak', 'Met «yapmak» (doen) maak je van een Duits woord een werkwoord: «Termin yapmak», «Urlaub yapmak».', 'Doktordan Termin aldım.', 'Ik heb een afspraak bij de dokter gemaakt.', 'Doktordan randevu aldım.'],
        ['Halverwege wisselen', 'Sprekers wisselen midden in een zin van taal, vaak bij woorden voor werk, school en instanties.', 'Yarın Arbeitsamt’a gidiyorum.', 'Morgen ga ik naar het arbeidsbureau.', 'Yarın iş bulma kurumuna gidiyorum.']
      ],
      words: [['Almancı', 'Turk uit Duitsland (in Turkije soms spottend)', 'i'], ['gurbetçi', 'Turk die in het buitenland woont en werkt'], ['Termin', 'afspraak (in Turkije: randevu)'], ['Urlaub yapmak', 'vakantie nemen (in Turkije: tatil yapmak)', 'i'],
        ['Ausbildung yapmak', 'een beroepsopleiding doen', 'i'], ['anmelden olmak', 'zich inschrijven (in Turkije: kaydolmak)', 'i'], ['Bahnhof', 'station (in Turkije: istasyon)'], ['Krankenkasse', 'ziektekostenverzekeraar'],
        ['Führerschein yapmak', 'je rijbewijs halen (in Turkije: ehliyet almak)', 'i'], ['izne gitmek', 'op zomervakantie naar Turkije gaan'], ['Almanca', 'Duits (de taal)'], ['gurbet', 'den vreemde, ver van huis']],
      fact: 'De döner in een broodje, zoals wij die kennen, werd in de jaren zeventig populair gemaakt door Turkse gastarbeiders in Berlijn.' },

    { id: 'nl', flag: '🇳🇱', name: 'Nederland en België', city: 'Rotterdam · Den Haag · Gent', speakers: '±600.000 sprekers', group: 'europa', voice: 'NL', listen: 'tr-TR', pin: [96, 101],
      voiceNote: 'Je hoort hier de stem uit Turkije. In Nederland en België spreekt men de Nederlandse woorden natuurlijk op zijn Nederlands uit.',
      hello: ['Merhaba! Hollanda’ya hoş geldin.', 'Hallo! Welkom in Nederland.'],
      intro: 'Dicht bij huis: in Nederland en België wonen ruim een half miljoen mensen met een Turkse achtergrond. Hun Turks zit vol Nederlandse woorden voor alles wat met werk, school en instanties te maken heeft.',
      sounds: [
        ['Nederlandse woorden met Turkse uitgangen', 'Een Nederlands woord krijgt gewoon de Turkse naamval, met klinkerharmonie en al.', 'Yarın gemeente’ye gidiyorum.', 'Morgen ga ik naar de gemeente.', 'Yarın belediyeye gidiyorum.'],
        ['Nederlands woord + yapmak', 'Met «yapmak» wordt een Nederlands woord een werkwoord: «afspraak yapmak», «stage yapmak».', 'Huisartsla afspraak yaptım.', 'Ik heb een afspraak met de huisarts gemaakt.', 'Aile doktorundan randevu aldım.'],
        ['Fietsle', 'Ook het vervoer gaat op zijn Nederlands: fiets + le (met).', 'İşe fietsle gidiyorum.', 'Ik ga met de fiets naar mijn werk.', 'İşe bisikletle gidiyorum.']
      ],
      words: [['Hollandalı', 'Nederlander'], ['Felemenkçe', 'Nederlands (de taal, officieel)'], ['Hollandaca', 'Nederlands (de taal, spreektaal)'], ['gemeente', 'gemeente (in Turkije: belediye)'], ['afspraak yapmak', 'een afspraak maken (in Turkije: randevu almak)', 'i'],
        ['huisarts', 'huisarts (in Turkije: aile doktoru)'], ['uitkering', 'uitkering'], ['toeslag', 'toeslag'], ['stage yapmak', 'stage lopen (in Turkije: staj yapmak)', 'i'], ['fietsle', 'met de fiets (in Turkije: bisikletle)', 'i'],
        ['gurbetçi', 'Turk die in het buitenland woont en werkt'], ['lale', 'tulp'], ['Belçika', 'België']],
      fact: 'De tulp kwam in de zestiende eeuw vanuit het Osmaanse Rijk naar Nederland. Ons woord «tulp» komt van «tülbent» (tulband), waar de bloem op lijkt; in het Turks heet ze «lale».' },

    { id: 'az', flag: '🇦🇿', name: 'Azerbeidzjan', city: 'Bakı · Gəncə', speakers: '±10 mln sprekers (zustertaal)', group: 'kaukasus', voice: 'AZ', listen: 'az-AZ', pin: [823, 403],
      hello: ['Salam! Azərbaycana xoş gəlmisən.', 'Hallo! Welkom in Azerbeidzjan.'],
      intro: 'Azerbeidzjaans is geen Turks, maar een nauw verwante zustertaal: ongeveer zoals Nederlands en Duits. Turken en Azerbeidzjanen verstaan elkaar grotendeels, maar er zijn extra letters (ə, x, q) en verraderlijke valse vrienden.',
      sounds: [
        ['Eigen letters: ə, x, q', 'De ə klinkt als de a in het Engelse «cat», de x als onze harde g, en de q als een g achter in de keel. «Ben» is hier «mən».', 'Mən Bakıdan gəlirəm.', 'Ik kom uit Bakoe.', 'Ben Bakü’den geliyorum.'],
        ['Valse vrienden', '«Düşmək» betekent hier uitstappen en landen; in Turkije betekent «düşmek» vallen. Een vliegtuig dat «düşür», landt dus gewoon veilig.', 'Təyyarə düşür.', 'Het vliegtuig landt.', 'Uçak iniyor.'],
        ['Bedanken', '«Sağ ol» is hier de gewone manier om te bedanken; «çox» is het Turkse «çok».', 'Çox sağ ol!', 'Heel erg bedankt!', 'Çok teşekkürler!']
      ],
      words: [['salam', 'hallo (in Turkije: merhaba)'], ['necəsən?', 'hoe gaat het? (in Turkije: nasılsın?)'], ['sağ ol', 'dank je'], ['bəli', 'ja (in Turkije: evet)'], ['xeyr', 'nee (in Turkije: hayır)'], ['yaxşı', 'goed (in Turkije: iyi)'],
        ['mən', 'ik (in Turkije: ben)'], ['pul', 'geld (in Turkije: para; pul = postzegel)'], ['çörək', 'brood (in Turkije: ekmek; çörek = zoet broodje)'], ['düşmək', 'uitstappen, landen (in Turkije: düşmek = vallen)'],
        ['kişi', 'man (in Turkije: kişi = persoon)'], ['sabahınız xeyir', 'goedemorgen (in Turkije: günaydın)'], ['təyyarə', 'vliegtuig (in Turkije: uçak)'], ['yox', 'nee, er is niet (in Turkije: yok)']],
      fact: 'Turken en Azerbeidzjanen zeggen over elkaar: «tek millet, iki devlet», één volk, twee staten.' }
  ];
})(window.SPT);
