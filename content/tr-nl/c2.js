/* Turks voor Nederlandstaligen — niveau C2, units 1–2 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  Object.assign(S.C.TAGS, {
    'tr-retor': 'retorische middelen (ne … ne, gerek … gerek, -mez mi?)', 'tr-plecht': 'plechtige vormen (-miş bulunuyoruz, olsun, ola)',
    'tr-agiz': 'dialectvormen (geliyom, gidek, gelirem)', 'tr-agizsoz': 'dialectwoorden en partikels (gari, da, abe)',
    'tr-siir': 'dichterlijke taal (eyle-, kamu, kanı)', 'tr-olcu': 'maat en rijm (hece, kafiye, redif)',
    'tr-cinas': 'woordspel en homoniemen (yüz, çay, dolu)', 'tr-fikra': 'een mop vertellen',
    'tr-argo': 'straattaal (sallamak, yemek, kopmak)', 'tr-lemek': 'leenwerkwoorden (stalklamak, mesaj atmak)',
    'tr-osm': 'Osmaanse woorden en meervouden (ahval, tebrikat)', 'tr-uzun': 'een lange Osmaanse zin ontleden',
    'tr-kalip': 'vaste formules (kolay gelsin, helal olsun)', 'tr-esi': 'zin hebben om (-esi gelmek, -esi tutmak)',
    'tr-cesine': 'alsof, niet alleen, laat staan (-cesine, -mekle kalmayıp, şöyle dursun)', 'tr-ip': 'kettingzinnen met -ip',
    'tr-baslik': 'krantenkoppen en verslagtaal', 'tr-sarki': 'liedtaal (yâr, be, ey)',
    'tr-uslup': 'van register wisselen', 'tr-yalanci': 'valse vrienden (apartman, pasta, sempatik)'
  });

  /* ───────────────────────── C2 · 1 ───────────────────────── */
  U({
    id: 'tr-c2-01', level: 'C2', icon: '🎙️', title: 'Sayın konuklar', nl: 'Spreken voor publiek: toespraak en retoriek',
    goals: ['Een toespraak of plechtige rede volgen en zelf houden', 'Retorische middelen gebruiken: ne … ne, gerek … gerek, de retorische vraag', 'Plechtige vormen herkennen: -miş bulunuyoruz, olsun, ola', 'Een korte toespraak schrijven voor een bruiloft of afscheid'],
    vocab: [
      ['konuşma yapmak', 'een toespraak houden'], ['hitap etmek', 'toespreken'], ['hitabet', 'welsprekendheid'], ['kürsü', 'spreekgestoelte'], ['dinleyici', 'toehoorder'], ['seçkin', 'voornaam / uitgelezen'], ['onur', 'eer'],
      ['onur duymak', 'vereerd zijn'], ['gurur', 'trots'], ['minnettar', 'dankbaar'], ['vefa', 'trouw / loyaliteit'], ['emek', 'inspanning / arbeid'], ['fedakârlık', 'opoffering'], ['dayanışma', 'solidariteit'],
      ['birlik', 'eenheid'], ['beraberlik', 'saamhorigheid'], ['vesile', 'aanleiding / gelegenheid'], ['anmak', 'gedenken'], ['saygıyla', 'met eerbied'], ['şükran', 'dank'], ['temenni', 'wens'],
      ['hitabe', 'plechtige toespraak'], ['uğurlamak', 'uitzwaaien'], ['kadeh kaldırmak', 'het glas heffen'], ['alkışlamak', 'applaudisseren'], ['veda', 'afscheid'], ['emekliye ayrılmak', 'met pensioen gaan'], ['nice yıllara', 'op nog vele jaren']
    ],
    grammar: [
      { t: 'Retorische middelen: ne … ne, gerek … gerek, -mez mi?', es: 'Söz sanatları: ne … ne, gerek … gerek',
        html: `<p>Een toespraak leeft van <b>herhaling en evenwicht</b>. Het Turks heeft daarvoor vaste paren die een zin in twee gelijke helften verdelen.</p>
<p>• <b>hem … hem (de)</b> = zowel … als: <i><b>Hem</b> meslektaşımız <b>hem de</b> dostumuzdu.</i><br>• <b>gerek … gerek(se)</b> = zowel … als (deftig): <i><b>Gerek</b> iyi günde <b>gerek</b> kötü günde yanımızdaydı.</i><br>• <b>ne … ne (de)</b> = noch … noch: <i><b>Ne</b> yoruldu <b>ne de</b> şikâyet etti.</i><br>• <b>ister … ister</b> = of … of (het maakt niet uit): <i><b>İster</b> inanın <b>ister</b> inanmayın.</i><br>• <b>kimi … kimi</b> = sommigen … anderen: <i><b>Kimi</b> güldü, <b>kimi</b> ağladı.</i><br>• <b>bir yandan … öte yandan</b> = enerzijds … anderzijds.</p>
<p>De <b>retorische vraag</b> verwacht geen antwoord en zegt het tegendeel van wat hij vraagt: <i>Bunu kim unutabilir <b>ki</b>?</i> (Wie zou dit kunnen vergeten?) = niemand. · <i>İnsan böyle bir dostu sev<b>mez mi</b>?</i> (Houd je niet van zo’n vriend?) = natuurlijk wel. · <i>Daha ne isteyebiliriz?</i></p>
<p>De <b>drieslag</b> werkt in elke taal: <i>Çalıştı, öğretti, iz bıraktı.</i> En de <b>herhaling vooraan</b>: <i><b>Bugün</b> bir dostu uğurluyoruz. <b>Bugün</b> bir ustaya teşekkür ediyoruz. <b>Bugün</b> …</i></p>
<p>Aanspreken doe je met <b>Sayın</b> (geachte) en <b>Değerli</b> (gewaardeerde): <i>Sayın Başkan, değerli konuklar, sevgili arkadaşlar …</i>, van hoog naar dichtbij.</p>
<p><b>⚠️ Uitzondering:</b> na <b>ne … ne</b> staat het werkwoord <b>bevestigend</b>, niet ontkennend: <i>Ne ara<b>dı</b> ne sor<b>du</b>.</i> (Hij belde niet en vroeg er ook niet naar.) Dat is opvallend, want bij <i>hiç</i> en <i>kimse</i> blijft het werkwoord wél ontkennend (<i>Kimse gel<b>me</b>di</i>). <b>Waarom?</b> <i>Ne</i> komt uit het Perzisch en draagt de ontkenning zelf al in zich, zoals het Nederlandse «noch». Een tweede ontkenning zou de eerste opheffen. <i>Hiç</i> en <i>kimse</i> zijn van zichzelf niet ontkennend («ooit», «wie dan ook») en hebben het werkwoord nodig. In spreektaal hoor je tegenwoordig ook <i>ne aradı ne sormadı</i>; in een verzorgde toespraak vermijd je dat.</p>`,
        table: [['paar', 'betekenis', 'voorbeeld'], ['hem … hem de', 'zowel … als', 'hem dost hem öğretmen'], ['gerek … gerek', 'zowel … als (deftig)', 'gerek evde gerek işte'], ['ne … ne de', 'noch … noch', 'ne aradı ne sordu'], ['ister … ister', 'of … of', 'ister gel ister gelme'], ['kimi … kimi', 'sommigen … anderen', 'kimi güldü kimi ağladı']],
        sum: 'Ne yoruldu ne de şikâyet etti.',
        ex: [['Gerek öğrencileri gerek meslektaşları onu çok severdi.', 'Zowel zijn leerlingen als zijn collega’s hielden veel van hem.'], ['Ne bir gün geç kaldı ne de bir kez sesini yükseltti.', 'Hij kwam geen dag te laat en verhief geen enkele keer zijn stem.'], ['Böyle bir insanı kim unutabilir ki?', 'Wie zou zo iemand kunnen vergeten?'], ['İster inanın ister inanmayın, otuz yıl geçti.', 'Geloof het of niet, er zijn dertig jaar voorbijgegaan.']] },
      { t: 'Plechtige vormen: -miş bulunuyoruz, olsun, ola', es: 'Törensel dil: -miş bulunmak, olsun, ola',
        html: `<p>Bij een opening, een herdenking of een bruiloft krijgt het werkwoord een plechtig jasje.</p>
<p>• <b>-miş bulunuyoruz / bulunmaktayız</b>: <i>Bugün burada toplan<b>mış bulunuyoruz</b>.</i> (Wij zijn hier vandaag bijeengekomen.) · <i>Bir yılı daha geride bırak<b>mış bulunmaktayız</b>.</i><br>• <b>-mekten onur / mutluluk duyuyorum</b>: <i>Sizleri aramızda gör<b>mekten onur duyuyorum</b>.</i> (Het is mij een eer u in ons midden te zien.)<br>• <b>-i bir borç bilirim</b>: <i>Teşekkür etmey<b>i bir borç bilirim</b>.</i> (Ik acht het mijn plicht te danken.)<br>• <b>saygıyla anıyorum / selamlıyorum</b>: <i>Hepinizi <b>saygıyla selamlıyorum</b>.</i></p>
<p><b>Wensen</b> staan in de 3e persoon van de wensvorm, <b>-sin</b>: <i>Yolunuz açık ol<b>sun</b>.</i> (Moge uw weg open zijn: goede reis, veel succes.) · <i>Nice mutlu yıllarınız ol<b>sun</b>.</i> · <i>Bir yastıkta kocayın!</i> (Word samen oud op één kussen: tegen een bruidspaar.) · <i>Allah mesut et<b>sin</b>.</i></p>
<p>In vaste formules en volksliederen leeft een oudere wensvorm op <b>-e / -a</b> voort: <i>Kolay gel<b>e</b>.</i> · <i>Hayırlı ol<b>a</b>.</i> · <i>Allah razı ol<b>a</b>.</i> · <i>Uğurlar ol<b>a</b>!</i> Het klinkt landelijk en hartelijk; in een officiële rede zeg je <i>olsun</i>.</p>
<p>Afsluiten doe je met <i>Beni dinlediğiniz için teşekkür eder, hepinize <b>saygılar sunarım</b>.</i> Bij een toost: <i>Kadehimi … için <b>kaldırıyorum</b>. <b>Şerefe!</b></i></p>
<p><b>⚠️ Uitzondering:</b> <i>toplanmış bulunuyoruz</i> zegt met twee werkwoorden wat <i>toplandık</i> met één zegt, en de <b>-miş</b> erin heeft niets met «van horen zeggen» te maken: de spreker staat er zelf bij. <b>Waarom?</b> <i>Bulunmak</i> betekent «zich bevinden». Letterlijk staat er: «wij bevinden ons in de toestand van bijeengekomen-zijn». Hier is -miş het deelwoord dat een bereikte toestand noemt (zoals in <i>pişmiş</i>, gaar), niet de tijd van het gezegde. De omweg legt de nadruk op het <b>moment zelf</b> en op het resultaat, en dat maakt de zin plechtig. In een gewoon gesprek klinkt het lachwekkend deftig.</p>`,
        table: [['gewoon', 'plechtig'], ['Toplandık.', 'Toplanmış bulunuyoruz.'], ['Sizi gördüğüme sevindim.', 'Sizleri görmekten onur duyuyorum.'], ['Teşekkür ederim.', 'Teşekkürü bir borç bilirim.'], ['İyi şanslar!', 'Yolunuz açık olsun.'], ['Hoşça kalın.', 'Hepinize saygılar sunarım.']],
        sum: 'Bugün burada toplanmış bulunuyoruz.',
        ex: [['Sizleri aramızda görmekten onur duyuyorum.', 'Het is mij een eer u in ons midden te zien.'], ['Yolunuz açık olsun.', 'Het ga u goed.'], ['Emeği geçen herkese teşekkürü bir borç bilirim.', 'Ik acht het mijn plicht iedereen te danken die eraan heeft bijgedragen.'], ['Bir yastıkta kocayın!', 'Word samen gelukkig oud!']] }
    ],
    dialogue: {
      t: 'De toespraak voorbereiden', place: 'İzmir 🇹🇷',
      lines: [
        ['Ilse', 'Cuma günü Nevin Hanım emekliye ayrılıyor. Veda konuşmasını benim yapmamı istediler.', 'Vrijdag gaat mevrouw Nevin met pensioen. Ze hebben gevraagd of ik de afscheidstoespraak wil houden.'],
        ['Tarık', 'Ne güzel! Nasıl başlayacaksın?', 'Wat leuk! Hoe ga je beginnen?'],
        ['Ilse', '«Merhaba arkadaşlar» diye düşündüm ama fazla mı sıradan kaçar?', 'Ik dacht aan «Hallo vrienden», maar is dat niet te gewoon?'],
        ['Tarık', 'Müdür de orada olacak. «Sayın Müdürüm, değerli çalışma arkadaşlarım» de, sonra Nevin Hanım’a dön.', 'De directeur is er ook. Zeg «Geachte directeur, gewaardeerde collega’s» en richt je daarna tot mevrouw Nevin.'],
        ['Ilse', 'Tamam. Sonra şöyle: «Otuz yıl boyunca ne bir gün geç kaldı ne de bir kez sesini yükseltti.»', 'Goed. En dan zo: «Dertig jaar lang kwam ze geen dag te laat en verhief ze geen enkele keer haar stem.»'],
        ['Tarık', 'Çok güzel. Bir de küçük bir anı ekle; insanlar hem gülsün hem duygulansın.', 'Heel mooi. Voeg ook een kleine herinnering toe; laat de mensen zowel lachen als ontroerd raken.'],
        ['Ilse', 'İlk günümde bana çay ısmarlayıp «Burada kimse yabancı değildir» demişti. Onu anlatırım.', 'Op mijn eerste dag trakteerde ze me op thee en zei: «Hier is niemand een vreemde.» Dat vertel ik.'],
        ['Tarık', 'Harika. «Yolunuz açık olsun» diye bitir, kadehini kaldır. Herkes ayakta alkışlar.', 'Geweldig. Sluit af met «Het ga u goed» en hef je glas. Iedereen geeft een staande ovatie.']
      ],
      q: [
        { t: 'mc', q: 'Ilse hangi vesileyle konuşma yapacak?', o: ['Nevin Hanım emekliye ayrılıyor', 'Müdür evleniyor', 'Şirket yeni bir bina açıyor'] },
        { t: 'mc', q: 'Tarık konuşmaya nasıl başlamasını öneriyor?', o: ['Sayın Müdürüm, değerli çalışma arkadaşlarım', 'Merhaba arkadaşlar', 'Sevgili Nevin'] },
        { t: 'mc', q: 'Ilse hangi anıyı anlatacak?', o: ['İlk gününde ısmarlanan çayı', 'Bir toplantıdaki tartışmayı', 'Birlikte yaptıkları tatili'] }
      ]
    },
    culture: { t: 'Van de Nutuk tot de bruiloftstoost', html: `<p>De beroemdste Turkse redevoering is de <b>Nutuk</b>: in oktober 1927 sprak Atatürk zes dagen achter elkaar, ruim zesendertig uur, over de onafhankelijkheidsoorlog. De slotpassage, de <b>Gençliğe Hitabe</b> (Toespraak tot de jeugd), hangt in elk klaslokaal en veel scholieren kennen haar uit het hoofd.</p>
<p>Welsprekendheid heet <b>hitabet</b> en wordt bewonderd. Een goede spreker gebruikt herhaling, een spreekwoord op het juiste moment en een dichtregel als afsluiting. Schoolkinderen oefenen dat bij de wekelijkse vlaggenceremonie en op nationale feestdagen.</p>
<p>🥂 Op een bruiloft is de toespraak kort. De gasten spelden goud of geld op het bruidspaar (<b>takı töreni</b>) en zeggen <i>Bir yastıkta kocayın</i> of <i>Allah mesut etsin</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Ne aradı ne ___.', h: 'en vroeg ook niet', a: ['sordu'], o: ['sordu', 'sormadı', 'sorar'], nl: 'Hij belde niet en vroeg er ook niet naar.', x: '⚠️ Uitzondering: na ne … ne staat het werkwoord bevestigend. Ne draagt de ontkenning al in zich, zoals «noch».', tag: 'tr-retor' },
      { t: 'cloze', s: '___ iyi günde gerek kötü günde yanımızdaydı.', h: 'zowel (deftig)', a: ['Gerek'], o: ['Gerek', 'Ne', 'Kimi'], nl: 'Zowel in goede als in slechte dagen stond hij ons bij.', tag: 'tr-retor' },
      { t: 'cloze', s: 'İster inanın ___ inanmayın.', h: 'of', a: ['ister'], o: ['ister', 'gerek', 'hem'], nl: 'Geloof het of niet.', tag: 'tr-retor' },
      { t: 'cloze', s: '___ güldü, kimi ağladı.', h: 'sommigen', a: ['Kimi'], o: ['Kimi', 'Ne', 'Hem'], nl: 'Sommigen lachten, anderen huilden.', tag: 'tr-retor' },
      { t: 'mc', q: 'Wat bedoelt de spreker met «Böyle bir insanı kim unutabilir ki?»', o: ['Niemand kan zo iemand vergeten.', 'Hij wil weten wie hem vergeten is.', 'Hij is hem zelf vergeten.'], x: 'Een retorische vraag zegt het tegendeel van wat hij vraagt. Ki aan het eind versterkt dat.', tag: 'tr-retor' },
      { t: 'mc', q: 'In welke volgorde spreek je de zaal aan?', o: ['Sayın Başkan, değerli konuklar, sevgili arkadaşlar', 'Sevgili arkadaşlar, Sayın Başkan, değerli konuklar', 'Değerli konuklar, sevgili arkadaşlar, Sayın Başkan'], x: 'Van hoog naar dichtbij: eerst de hoogste, dan de gasten, dan de eigen kring.', tag: 'tr-plecht' },
      { t: 'cloze', s: 'Bugün burada toplanmış ___.', h: 'plechtig: wij zijn', a: ['bulunuyoruz', 'bulunmaktayız'], o: ['bulunuyoruz', 'olacağız', 'gidiyoruz'], nl: 'Wij zijn hier vandaag bijeengekomen.', tag: 'tr-plecht' },
      { t: 'mc', q: 'Is -miş in «toplanmış bulunuyoruz» van horen zeggen?', o: ['Nee: het is een deelwoord dat de bereikte toestand noemt.', 'Ja: de spreker heeft gehoord dat men bijeen is.', 'Ja, maar spottend bedoeld.'], x: '⚠️ Uitzondering: letterlijk «wij bevinden ons in de toestand van bijeengekomen-zijn». De omweg legt nadruk op het moment en maakt de zin plechtig.', tag: 'tr-plecht' },
      { t: 'cloze', s: 'Sizleri aramızda görmekten onur ___.', h: 'het is mij een eer', a: ['duyuyorum', 'duyarım'], o: ['duyuyorum', 'yapıyorum', 'veriyorum'], nl: 'Het is mij een eer u in ons midden te zien.', tag: 'tr-plecht' },
      { t: 'cloze', s: 'Yolunuz açık ___.', h: 'moge … zijn', a: ['olsun', 'ola'], o: ['olsun', 'olur', 'oldu'], nl: 'Het ga u goed.', tag: 'tr-plecht' },
      { t: 'mc', q: 'Wat zeg je tegen een bruidspaar?', o: ['Bir yastıkta kocayın!', 'Geçmiş olsun!', 'Kolay gelsin!'], tag: 'tr-plecht' },
      { t: 'mc', q: 'Wat betekent «vesile»?', o: ['aanleiding, gelegenheid', 'belofte', 'toehoorder'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik hef mijn glas op onze vriendschap.', a: ['Kadehimi dostluğumuza kaldırıyorum.', 'Kadehimi dostluğumuz için kaldırıyorum.', 'Kadehimi arkadaşlığımıza kaldırıyorum.'], tag: 'tr-plecht' },
      { t: 'tr', nl: 'Ze was zowel onze collega als onze vriendin.', a: ['Hem meslektaşımız hem de dostumuzdu.', 'Hem meslektaşımız hem dostumuzdu.', 'Hem iş arkadaşımız hem de dostumuzdu.', 'Hem meslektaşımız hem de arkadaşımızdı.'], tag: 'tr-retor' },
      { t: 'order', s: 'Emeği geçen herkese teşekkürü bir borç bilirim.', nl: 'Ik acht het mijn plicht iedereen te danken die eraan heeft bijgedragen.', tag: 'tr-plecht' },
      { t: 'match', p: [['onur', 'eer'], ['gurur', 'trots'], ['emek', 'inspanning'], ['veda', 'afscheid'], ['kürsü', 'spreekgestoelte'], ['dayanışma', 'solidariteit']], tag: 'vocab' }
    ],
    reading: {
      t: 'Bir veda konuşması', type: 'Toespraak',
      p: [
        ['Sayın Müdürüm, değerli çalışma arkadaşlarım, sevgili Nevin Hanım! Bugün burada, otuz yılını bu kuruma vermiş bir insanı uğurlamak üzere toplanmış bulunuyoruz.', 'Geachte directeur, gewaardeerde collega’s, lieve mevrouw Nevin! Wij zijn hier vandaag bijeengekomen om iemand uit te zwaaien die dertig jaar aan deze instelling heeft gegeven.'],
        ['Nevin Hanım bu otuz yıl boyunca ne bir gün geç kaldı ne de bir kez sesini yükseltti. Gerek zor günlerde gerek bayram sabahlarında kapısı hepimize açıktı. Kimi ona danıştı, kimi dert yandı; kimseyi geri çevirmedi.', 'Mevrouw Nevin kwam in die dertig jaar geen dag te laat en verhief geen enkele keer haar stem. Zowel op moeilijke dagen als op feestochtenden stond haar deur voor ons allen open. De een vroeg haar om raad, de ander stortte zijn hart uit; ze wees niemand af.'],
        ['İlk iş günümü hatırlıyorum. Kimseyi tanımıyordum, Türkçem de yarım yamalaktı. Bana bir çay ısmarladı ve «Burada kimse yabancı değildir» dedi. İnsan böyle birini unutur mu?', 'Ik herinner me mijn eerste werkdag. Ik kende niemand en mijn Turks was gebrekkig. Ze trakteerde me op thee en zei: «Hier is niemand een vreemde.» Vergeet je zo iemand?'],
        ['Sevgili Nevin Hanım, emeğiniz için size teşekkürü bir borç biliriz. Yolunuz açık, sağlığınız yerinde olsun. Kadehimi sizin için kaldırıyorum!', 'Lieve mevrouw Nevin, wij achten het onze plicht u te danken voor uw inzet. Het ga u goed, in goede gezondheid. Ik hef mijn glas op u!']
      ],
      gl: [['dert yanmak', 'zijn hart uitstorten'], ['geri çevirmek', 'afwijzen'], ['yarım yamalak', 'gebrekkig / half'], ['danışmak', 'om raad vragen'], ['kurum', 'instelling']],
      q: [
        { t: 'mc', q: 'Nevin Hanım bu kurumda kaç yıl çalıştı?', o: ['Otuz yıl', 'On yıl', 'Üç yıl'] },
        { t: 'mc', q: 'Konuşmacının ilk gününde Nevin Hanım ne yaptı?', o: ['Çay ısmarladı', 'Onu müdüre götürdü', 'Ona Türkçe dersi verdi'] },
        { t: 'mc', q: '«İnsan böyle birini unutur mu?» sorusu ne anlama geliyor?', o: ['Böyle biri unutulmaz', 'Onu çoktan unuttum', 'Onu kim unuttu, bilmiyorum'] }
      ]
    },
    say: [['Sayın konuklar, değerli arkadaşlar!', 'Geachte gasten, gewaardeerde vrienden!'], ['Sizleri aramızda görmekten onur duyuyorum.', 'Het is mij een eer u in ons midden te zien.'], ['Yolunuz açık olsun.', 'Het ga u goed.'], ['Kadehimi sizin için kaldırıyorum. Şerefe!', 'Ik hef mijn glas op u. Proost!']],
    task: { nl: 'Schrijf een toespraak van zes tot acht zinnen voor een afscheid, een bruiloft of een jubileum. Begin met een passende aanspreking (Sayın …, değerli …, sevgili …), gebruik minstens twee retorische paren (ne … ne, gerek … gerek, hem … hem, kimi … kimi), één retorische vraag, één korte herinnering en sluit af met een wens op -sin en een toost.', model: 'Değerli konuklar, sevgili Elif ve Can! Bugün iki güzel insanın mutluluğuna tanık olmak üzere toplanmış bulunuyoruz. Elif’i on yıldır tanıyorum; ne bir sözünden döndüğünü gördüm ne de bir dostunu yarı yolda bıraktığını. Can ise hem sabırlı hem neşeli; gerek iyi günde gerek kötü günde Elif’in yanında olacağından eminim. İlk tanıştıkları akşam ikisi de bana «Sadece arkadaşız» demişti. Buna kim inanırdı ki? Sevgili dostlar, birbirinize hep bugünkü gibi bakın. Bir yastıkta kocayın! Kadehimi sizin için kaldırıyorum. Şerefe!' },
    scenario: { nl: 'Je moet vrijdag de afscheidstoespraak houden voor een collega die met pensioen gaat. Je oefent hem met je collega Tarık, die goed kan spreken.', role: 'You are Tarık, an eloquent colleague in İzmir who coaches the learner on a farewell speech for Nevin Hanım, who is retiring after thirty years. Ask them to read their opening, suggest the right forms of address (Sayın Müdürüm, değerli çalışma arkadaşlarım), propose rhetorical pairs (ne … ne, gerek … gerek, hem … hem), a short anecdote, a rhetorical question, and a closing wish (Yolunuz açık olsun) with a toast. Give precise but kind feedback on register: too casual or too stiff. Polished C2 Turkish.', goal: 'Draag je toespraak voor, verwerk zijn suggesties en vind de juiste toon tussen warm en plechtig.' }
  });

  /* ───────────────────────── C2 · 2 ───────────────────────── */
  U({
    id: 'tr-c2-02', level: 'C2', icon: '🗺️', title: 'Napıyon gari?', nl: 'Streektalen: het Turks van Anatolië',
    goals: ['Sprekers uit verschillende streken van Turkije verstaan', 'De bekendste dialectvormen herkennen: geliyom, gidek, gelirem', 'Streekwoorden en partikels plaatsen: gari, da, abe, hele', 'Weten wanneer dialect past en wanneer niet'],
    vocab: [
      ['yerel ağız', 'plaatselijke tongval'], ['lehçe', 'dialect / zustertaal'], ['şive', 'tongval / accent'], ['yöre', 'streek'], ['yöresel', 'streekgebonden'], ['Karadenizli', 'iemand van de Zwarte Zeekust'], ['Egeli', 'iemand van de Egeïsche kust'],
      ['Trakyalı', 'iemand uit Thracië'], ['Doğulu', 'iemand uit het oosten'], ['İç Anadolu', 'Centraal-Anatolië'], ['köylü', 'dorpeling'], ['hemşehrilik', 'band tussen streekgenoten'], ['uşak', 'kind / jongen (Zwarte Zee)'], ['bızdık', 'klein kind (streekwoord)'],
      ['gari', 'nu toch / al (Egeïsch)'], ['abe', 'hé jij / zeg (Thracisch)'], ['bağ', 'wijngaard'], ['yayla', 'bergweide'], ['horon', 'dans van de Zwarte Zee'], ['zeybek', 'dans van de Egeïsche streek'], ['tulum', 'doedelzak van de Zwarte Zee'],
      ['kemençe', 'driesnarige vedel'], ['bağlama', 'langhalsluit (saz)'], ['türkü', 'volkslied'], ['ağıt', 'klaaglied'], ['mani', 'vierregelig volksrijm'], ['taklit etmek', 'nadoen'], ['yadırgamak', 'vreemd vinden']
    ],
    grammar: [
      { t: 'Dialectvormen van het werkwoord: geliyom, gidek, gelirem', es: 'Ağızlarda fiil çekimi',
        html: `<p>De standaardtaal is gebaseerd op het Turks van İstanbul. In Anatolië klinkt het werkwoord anders, maar de afwijkingen zijn regelmatig. Wie drie patronen kent, verstaat het grootste deel.</p>
<p><b>1. -yor wordt korter</b> (Centraal-Anatolië, Egeïsche kust, Thracië):<br><i>geliyorum</i> → <b>geliyom</b> · <i>geliyorsun</i> → <b>geliyon</b> · <i>geliyor</i> → <b>geliyo</b> · <i>geliyoruz</i> → <b>geliyoz</b> · <i>ne yapıyorsun?</i> → <b>napıyon?</b></p>
<p><b>2. Wij op -k</b> (Centraal- en Oost-Anatolië):<br><i>gidelim</i> → <b>gidek</b> (laten we gaan) · <i>geliriz</i> → <b>gelirik</b> · <i>gideceğiz</i> → <b>gidecek</b> / <b>gidicik</b>. De korte uitgang -k van <i>geldik</i> is hier uitgebreid naar alle tijden.</p>
<p><b>3. Ik op -em</b> (het oosten en zuidoosten, zoals in het Azerbeidzjaans):<br><i>gelirim</i> → <b>gelirem</b> · <i>bilmiyorum</i> → <b>bilmirem</b> · <i>gideceğim</i> → <b>gidecem</b> / <b>gedecağam</b>.</p>
<p><b>Aan de Zwarte Zee</b> hoor je <b>-yrum</b> en <b>-yisun</b> en doet de klinkerharmonie maar half mee: <i>geliyorum</i> → <b>celeyrum / geliyrum</b>, <i>yapıyorsun</i> → <b>yapaysun</b>, <i>çocuğum</i> → <b>uşağum</b>.</p>
<p>Klanken: in het westen en midden wordt <b>k</b> aan het begin vaak <b>g</b> (<i>kız → gız, koyun → goyun</i>); in het oosten wordt <b>k</b> achter in de keel een <b>h / ch</b> (<i>yok → yoh, bak → bah</i>); in Thracië valt de <b>h</b> weg (<i>hasta → asta, hava → ava</i>).</p>
<p><b>⚠️ Uitzondering:</b> <i>geliyom</i> en <i>napıyon</i> zijn dialect, maar je hoort ze ook van hoogopgeleide İstanbulers in een informeel gesprek en je ziet ze in appjes van iedereen (B2 unit 10). Toch schrijf je ze nooit in een brief. <b>Waarom?</b> Het inkorten van -yor is een natuurlijke slijtage die overal optreedt zodra mensen snel praten; in Anatolië is ze alleen verder gegaan en de gewone vorm geworden. Het verschil zit dus niet in de vorm, maar in het <b>register</b>: in de stad is het «slordig praten onder vrienden», op het platteland is het gewoon hoe je praat. <i>Gidek</i> en <i>gelirem</i> daarentegen zijn echt regionaal: een İstanbuler zegt dat alleen als grap.</p>`,
        table: [['standaard', 'midden / west', 'oost', 'Zwarte Zee'], ['geliyorum', 'geliyom', 'gelirem', 'celeyrum'], ['ne yapıyorsun?', 'napıyon?', 'ne edirsen?', 'ne yapaysun?'], ['gidelim', 'gidek', 'gedek', 'cidelum'], ['yok', 'yok', 'yoh', 'yok'], ['kız', 'gız', 'gız', 'kız']],
        sum: 'Hadi gidek!',
        ex: [['Napıyon gari?', 'Wat ben je nou aan het doen? (Egeïsch)'], ['Hadi çarşıya gidek.', 'Kom, laten we naar de markt gaan. (Centraal-Anatolië)'], ['Ben bilmirem.', 'Ik weet het niet. (oosten)'], ['Uşağum, nereye cideysun?', 'Mijn kind, waar ga je heen? (Zwarte Zee)']] },
      { t: 'Streekwoorden en partikels: gari, da, abe, hele', es: 'Yöresel sözcükler ve edatlar',
        html: `<p>Vaak verraadt één klein woord waar iemand vandaan komt.</p>
<p>• <b>gari</b> (Egeïsche kust: Aydın, Denizli, Muğla) = nu toch, al, eindelijk: <i>Gel <b>gari</b>!</i> (Kom nou toch!) · <i>Yeter <b>gari</b>.</i> Het is een oude vorm van <i>gayrı</i> (voortaan).<br>• <b>da / ha</b> (Zwarte Zee) = versterking aan het eind of begin: <i>Geldum <b>da</b>!</i> · <i><b>Ha</b> uşağum!</i> · <i><b>Ha</b> bu ne?</i> (En wat is dít?)<br>• <b>abe / be ya</b> (Thracië, Balkan-Turken) = hé, zeg: <i><b>Abe</b> napıyon <b>be ya</b>?</i><br>• <b>hele</b> (Centraal- en Oost-Anatolië) = eens even: <i>Gel <b>hele</b>!</i> · <i>Dur <b>hele</b>!</i> (C1 unit 3.)<br>• <b>he / heye</b> (midden, oost) = ja; <b>yoh</b> = nee.<br>• <b>la / lan / ula</b> = joh, man (onder mannen; grof tegen onbekenden).<br>• <b>gadasını aldığım / gurban olduğum</b> (zuidoosten) = letterlijk «wiens onheil ik op me neem»: lieverd, schat.</p>
<p>Ook gewone woorden verschillen: <i>patates</i> is in het midden <b>kumpir</b> of <b>gumpir</b>, <i>çocuk</i> is aan de Zwarte Zee <b>uşak</b>, <i>domates</i> is in het zuiden <b>banadura</b>, <i>mısır</i> is aan de Zwarte Zee <b>lazut</b>, en <i>şimdi</i> hoor je als <b>şimcik</b>, <b>hindi</b> of <b>emdi</b>.</p>
<p>Dialect is in Turkije sterk verbonden met <b>humor en warmte</b>: komieken, tv-series en moppen (over Temel van de Zwarte Zee) leven ervan. Wie als buitenlander een streekwoord gebruikt, krijgt een brede lach. Maar een accent nadoen kan ook als spot overkomen; vraag er liever naar.</p>
<p><b>⚠️ Uitzondering:</b> <b>lan</b> en <b>ulan</b> zijn tussen goede vrienden een teken van vertrouwdheid (<i>Napıyon lan?</i>), maar tegen een onbekende, een oudere of een vrouw zijn ze ronduit <b>beledigend</b> en kunnen ze een ruzie beginnen. <b>Waarom?</b> Het woord komt van <i>oğlan</i> (jongen) en zet de ander dus één trede lager. Onder gelijken die elkaar goed kennen is dat een spel; tegen iemand die je respect verschuldigd bent, is het een vernedering. Hetzelfde geldt voor <i>abi</i> tegenover <i>lan</i>: de eerste tilt op, de tweede duwt omlaag. Als leerling gebruik je <i>lan</i> beter niet.</p>`,
        table: [['woord', 'streek', 'betekenis'], ['gari', 'Egeïsche kust', 'nu toch, al'], ['da / ha', 'Zwarte Zee', 'versterking'], ['abe · be ya', 'Thracië', 'hé, zeg'], ['hele', 'midden, oost', 'eens even'], ['he · yoh', 'midden, oost', 'ja · nee'], ['uşak', 'Zwarte Zee', 'kind']],
        sum: 'Gel gari!',
        ex: [['Gel gari, yemek soğudu!', 'Kom nou toch, het eten is koud geworden!'], ['Abe kaç saattir bekliyom be ya!', 'Zeg, ik sta al uren te wachten!'], ['Ha uşağum, otur da çay iç.', 'Kom jongen, ga zitten en drink thee.'], ['Dur hele, bir soluklanak.', 'Wacht eens even, laten we op adem komen.']] }
    ],
    dialogue: {
      t: 'Op de streekmarkt', place: 'Denizli 🇹🇷',
      lines: [
        ['Teyze', 'Gel gızım gel, domatesler taze. Nereden geliyon sen?', 'Kom meisje, kom, de tomaten zijn vers. Waar kom jij vandaan?'],
        ['Ilse', 'Hollandalıyım teyze. Burada bir arkadaşımı ziyaret ediyorum.', 'Ik ben Nederlandse, mevrouw. Ik bezoek hier een vriendin.'],
        ['Teyze', 'Maşallah, Türkçeyi de ne güzel konuşuyon! Ben seni İstanbullu sandım gari.', 'Maşallah, wat spreek je ook mooi Turks! Ik dacht al dat je uit İstanbul kwam.'],
        ['Ilse', 'Teşekkür ederim. «Gari» ne demek? İlk defa duyuyorum.', 'Dank u wel. Wat betekent «gari»? Ik hoor het voor het eerst.'],
        ['Teyze', 'Bizim buranın lafı o. «Artık» gibi bir şey. «Gel gari» deriz, «yeter gari» deriz.', 'Dat is een woord van hier. Zoiets als «artık». We zeggen «gel gari», «yeter gari».'],
        ['Ilse', 'Çok hoşuma gitti. Peki «gidek» de diyor musunuz? Ankaralı bir arkadaşım hep öyle söylüyor.', 'Ik vind het heel leuk. En zeggen jullie ook «gidek»? Een vriend uit Ankara zegt dat altijd.'],
        ['Teyze', 'Yok, o İç Anadolu’nun lafı. Biz «gidelim» deriz ama «gidiyoz» deriz. Her yörenin kendi ağzı var gızım.', 'Nee, dat is van Centraal-Anatolië. Wij zeggen «gidelim», maar wel «gidiyoz». Elke streek heeft zijn eigen tongval, meisje.'],
        ['Ilse', 'Anladım. O zaman iki kilo domates verin gari!', 'Begrepen. Geef mij dan maar twee kilo tomaten, gari!'],
        ['Teyze', 'Hah, öğrendin bile! Al, bu da benden olsun.', 'Ha, je hebt het al geleerd! Hier, en deze krijg je van mij.']
      ],
      q: [
        { t: 'mc', q: 'Teyze Ilse’yi nereli sandı?', o: ['İstanbullu', 'Ankaralı', 'Alman'] },
        { t: 'mc', q: '«Gari» aşağı yukarı ne demek?', o: ['Artık', 'Hayır', 'Çok'] },
        { t: 'mc', q: '«Gidek» hangi yörenin lafı?', o: ['İç Anadolu’nun', 'Ege’nin', 'Trakya’nın'] }
      ]
    },
    culture: { t: 'Temel, de horon en «nerelisin?»', html: `<p>De eerste vraag aan een onbekende is in Turkije vaak <b>Nerelisin?</b>, waar kom je vandaan? Het antwoord is niet de stad waar je woont, maar je <b>memleket</b>: de streek van je familie. Wie <b>hemşehri</b> (streekgenoot) blijkt te zijn, is meteen een halve verwant. In de grote steden bestaan honderden <i>hemşehri dernekleri</i>, verenigingen van mensen uit dezelfde provincie.</p>
<p>Elke streek heeft zijn clichés: de <b>Karadenizli</b> is koppig, snel en de held van de <b>Temel</b>-moppen; de <b>Egeli</b> is ontspannen; de <b>Kayserili</b> is een geboren handelaar; de <b>Erzurumlu</b> heet <i>dadaş</i>. Ook de dansen horen erbij: de razendsnelle <b>horon</b> op de <i>kemençe</i>, de trotse <b>zeybek</b>, de lange rij van de <b>halay</b>.</p>
<p>🎶 Luister naar een <b>türkü</b> uit elke streek en je hoort de tongval, het instrument en het landschap in één keer.</p>` },
    ex: [
      { t: 'mc', q: 'Wat is «geliyom» in standaard-Turks?', o: ['geliyorum', 'geleceğim', 'geldim'], tag: 'tr-agiz' },
      { t: 'mc', q: 'Wat is «gidek» in standaard-Turks?', o: ['gidelim', 'gideceğim', 'gidiyor'], x: 'In Centraal- en Oost-Anatolië is de korte wij-uitgang -k uitgebreid naar alle tijden.', tag: 'tr-agiz' },
      { t: 'mc', q: 'Waar hoor je «gelirem» en «bilmirem»?', o: ['In het oosten en zuidoosten', 'Aan de Egeïsche kust', 'In Thracië'], tag: 'tr-agiz' },
      { t: 'cloze', s: 'Standaard: Ne yapıyorsun? Streektaal: ___?', h: 'kort', a: ['Napıyon'], o: ['Napıyon', 'Naptın', 'Napcan'], nl: 'Wat ben je aan het doen?', tag: 'tr-agiz' },
      { t: 'mc', q: 'In welke streek wordt «yok» uitgesproken als «yoh»?', o: ['In het oosten', 'In Thracië', 'Aan de Zwarte Zee'], tag: 'tr-agiz' },
      { t: 'mc', q: 'Een hoogopgeleide İstanbuler appt «geliyom». Is dat dialect?', o: ['Nee, het is informeel register; de vorm is dezelfde.', 'Ja, hij komt dan zeker uit Anatolië.', 'Nee, het is een tikfout.'], x: '⚠️ Uitzondering: het inkorten van -yor is natuurlijke slijtage. In de stad is het «slordig onder vrienden», op het platteland de gewone vorm. Gidek en gelirem zijn wél echt regionaal.', tag: 'tr-agiz' },
      { t: 'cloze', s: 'Gel ___, yemek soğudu!', h: 'nu toch (Egeïsch)', a: ['gari'], o: ['gari', 'abe', 'lan'], nl: 'Kom nou toch, het eten is koud geworden!', tag: 'tr-agizsoz' },
      { t: 'mc', q: 'Uit welke streek komt iemand die «Abe napıyon be ya?» zegt?', o: ['Thracië', 'Zwarte Zee', 'Zuidoosten'], tag: 'tr-agizsoz' },
      { t: 'cloze', s: 'Ha ___, otur da çay iç.', h: 'mijn kind (Zwarte Zee)', a: ['uşağum'], o: ['uşağum', 'gızım', 'dadaş'], nl: 'Kom jongen, ga zitten en drink thee.', tag: 'tr-agizsoz' },
      { t: 'mc', q: 'Tegen wie kun je «lan» zeggen?', o: ['Alleen tegen een goede vriend, en als leerling liever niet.', 'Tegen iedereen, het is gewoon «hé».', 'Tegen ouderen, het is respectvol.'], x: '⚠️ Uitzondering: lan komt van oğlan (jongen) en zet de ander een trede lager. Onder vrienden is dat een spel, tegen een onbekende een belediging.', tag: 'tr-agizsoz' },
      { t: 'mc', q: 'Wat is je «memleket»?', o: ['De streek waar je familie vandaan komt', 'De stad waar je nu woont', 'Het land waar je op vakantie gaat'], tag: 'vocab' },
      { t: 'mc', q: 'Welke dans hoort bij de Zwarte Zee?', o: ['horon', 'zeybek', 'halay'], tag: 'vocab' },
      { t: 'tr', nl: 'Elke streek heeft zijn eigen tongval.', a: ['Her yörenin kendi ağzı var.', 'Her yörenin kendi ağzı vardır.', 'Her yörenin kendi şivesi var.', 'Her bölgenin kendi ağzı var.'], tag: 'tr-agizsoz' },
      { t: 'tr', nl: 'Waar kom je vandaan?', a: ['Nerelisin?', 'Nerelisiniz?', 'Memleket neresi?', 'Memleketin neresi?'], tag: 'tr-agizsoz' },
      { t: 'order', s: 'Ben seni İstanbullu sandım.', nl: 'Ik dacht dat je uit İstanbul kwam.', tag: 'tr-agizsoz' },
      { t: 'match', p: [['geliyom', 'geliyorum'], ['gidek', 'gidelim'], ['gelirem', 'gelirim'], ['napıyon', 'ne yapıyorsun'], ['yoh', 'yok'], ['gız', 'kız']], tag: 'tr-agiz' }
    ],
    reading: {
      t: 'Türkiye’nin ağızları', type: 'Achtergrondartikel',
      p: [
        ['Türkiye’de herkes Türkçe konuşur ama herkes aynı Türkçeyi konuşmaz. Ölçünlü dil İstanbul ağzına dayanır; okulda, televizyonda ve resmî yazılarda bu dil kullanılır.', 'In Turkije spreekt iedereen Turks, maar niet iedereen spreekt hetzelfde Turks. De standaardtaal is gebaseerd op de tongval van İstanbul; op school, op televisie en in officiële stukken wordt deze taal gebruikt.'],
        ['Anadolu’da ise her yörenin kendine özgü bir ağzı vardır. Bir Karadenizli «celeyrum» der, bir Konyalı «geliyom», bir Erzurumlu «gelirem». Üçü de aynı şeyi söyler: «Geliyorum.»', 'In Anatolië heeft daarentegen elke streek een eigen tongval. Iemand van de Zwarte Zee zegt «celeyrum», iemand uit Konya «geliyom», iemand uit Erzurum «gelirem». Alle drie zeggen hetzelfde: «Ik kom.»'],
        ['Bu farklar çoğu zaman bir zenginlik olarak görülür. Türküler, fıkralar ve diziler ağızlar sayesinde renk kazanır. Öte yandan büyük şehre göç edenlerin çocukları ağızlarını yavaş yavaş unutuyor.', 'Deze verschillen worden meestal als een rijkdom gezien. Volksliederen, moppen en series krijgen kleur dankzij de streektalen. Anderzijds vergeten de kinderen van wie naar de grote stad zijn verhuisd hun tongval langzaamaan.'],
        ['Dilbilimciler bu yüzden köy köy dolaşıp yaşlıların konuşmalarını kaydediyor. Çünkü bir ağız kaybolduğunda yalnızca sözcükler değil, bir yörenin hafızası da kaybolur.', 'Taalkundigen trekken daarom van dorp naar dorp en nemen de spraak van ouderen op. Want als een streektaal verdwijnt, verdwijnen niet alleen woorden, maar ook het geheugen van een streek.']
      ],
      gl: [['ölçünlü dil', 'standaardtaal'], ['dayanmak', 'gebaseerd zijn op'], ['kendine özgü', 'eigen / kenmerkend'], ['zenginlik', 'rijkdom'], ['dilbilimci', 'taalkundige'], ['kaydetmek', 'opnemen / vastleggen']],
      q: [
        { t: 'mc', q: 'Ölçünlü dil hangi ağza dayanır?', o: ['İstanbul ağzına', 'Ankara ağzına', 'Karadeniz ağzına'] },
        { t: 'mc', q: 'Ağızlar neye renk katar?', o: ['Türkülere, fıkralara ve dizilere', 'Resmî yazılara', 'Ders kitaplarına'] },
        { t: 'mc', q: 'Dilbilimciler köylerde ne yapıyor?', o: ['Yaşlıların konuşmalarını kaydediyor', 'Ölçünlü dili öğretiyor', 'Türkü söylüyor'] }
      ]
    },
    say: [['Nerelisin?', 'Waar kom je vandaan?'], ['Her yörenin kendi ağzı var.', 'Elke streek heeft zijn eigen tongval.'], ['Gel gari!', 'Kom nou toch! (Egeïsch)'], ['Hadi gidek!', 'Kom, we gaan! (Centraal-Anatolië)']],
    task: { nl: 'Schrijf vijf of zes zinnen in standaard-Turks over dialecten in jouw eigen land en vergelijk ze met Turkije. Noem minstens drie Turkse dialectvormen of streekwoorden met hun standaardvorm erbij (geliyom, gidek, gelirem, gari, uşak …) en zeg wanneer je dialect wel en niet gebruikt.', model: 'Hollanda küçük bir ülke ama her yörenin ağzı farklı: Limburglu biriyle Frieslandlı biri birbirini zor anlar. Türkiye’de de durum aynı. Konyalı arkadaşım «geliyom» ve «gidek» diyor, Erzurumlu komşum «gelirem». Ege’de ise «gari» sözünü sık duydum; «artık» demekmiş. Ben evde annemle kendi ağzımızı konuşurum ama iş yerinde ölçünlü dili kullanırım. Bence ağızlar bir dilin en sıcak yanı; kaybolmalarına yazık olur.' },
    scenario: { nl: 'Je loopt over de streekmarkt van Denizli. Een oudere marktvrouw spreekt je aan in de tongval van de Egeïsche kust en is nieuwsgierig waar je vandaan komt.', role: 'You are an elderly market woman (teyze) in Denizli selling tomatoes and olives. Speak warm Aegean-dialect Turkish: shortened -yor (geliyon, napıyon, gidiyoz), gız for kız, and the particle gari. Ask where the learner is from, compliment their Turkish, explain dialect words when asked (gari = artık), compare with other regions (gidek is İç Anadolu), and give them something extra for free. Keep it understandable; if the learner looks lost, repeat in standard Turkish.', goal: 'Vraag naar woorden die je niet kent, vergelijk met wat je elders hoorde en koop iets op de markt.' }
  });
})(window.SPT);
