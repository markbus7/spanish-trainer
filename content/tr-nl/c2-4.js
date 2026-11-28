/* Turks voor Nederlandstaligen — niveau C2, units 7–8 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── C2 · 7 ───────────────────────── */
  U({
    id: 'tr-c2-07', level: 'C2', icon: '🫖', title: 'Gönül ne kahve ister ne kahvehane', nl: 'Onvertaalbare woorden en vaste formules',
    goals: ['Woorden begrijpen waar het Nederlands geen woord voor heeft: gönül, keyif, hüzün, gurbet', 'Voor elke situatie de juiste formule kiezen: eline sağlık, darısı başına, gözün aydın', 'Zin en onwil uitdrukken met -esi gelmek en -eceği tutmak', 'Uitleggen wat een woord betekent zonder het te vertalen'],
    vocab: [
      ['gönül', 'hart (als zetel van gevoel en wil)'], ['keyif', 'welbehagen / genoeglijke stemming'], ['gönül koymak', 'zich gekwetst voelen'], ['gurbet eli', 'den vreemde (in liederen)'], ['sıla özlemi', 'heimwee naar huis'], ['hasret gidermek', 'het gemis stillen'], ['naz', 'koket tegenstribbelen'],
      ['nazlanmak', 'zich laten bidden'], ['ısrar', 'aandringen'], ['gönül kırmak', 'iemand kwetsen'], ['ayağına sağlık', 'dank dat je gekomen bent'], ['imece', 'gezamenlijk dorpswerk'], ['kısmetse', 'als het zo mag zijn'], ['nasip', 'lot / deel'],
      ['hayırlısı', 'wat het beste is (moge gebeuren)'], ['nazar', 'het boze oog'], ['yakamoz', 'zeelichtgevendheid'], ['gönül vermek', 'zijn hart schenken'], ['gönlü olmak', 'instemmen / er zin in hebben'], ['keyfi yerinde', 'in een goed humeur'], ['keyif yapmak', 'lekker genieten'],
      ['eline sağlık', 'gezondheid aan je handen (dank voor wat je maakte)'], ['ağzına sağlık', 'goed gezegd / mooi gezongen'], ['darısı başına', 'moge het jou ook overkomen'], ['gözün aydın', 'gefeliciteerd (met een blijde komst)'], ['estağfurullah', 'geen dank / zeg dat niet'], ['ziyade olsun', 'dank voor het eten'], ['güle güle kullan', 'veel plezier ermee']
    ],
    grammar: [
      { t: 'De juiste formule op het juiste moment', es: 'Kalıp sözler: yerinde söz söylemek',
        html: `<p>Het Turks heeft voor bijna elke gebeurtenis een <b>kant-en-klare zin</b>. Wie hem op tijd zegt, hoort erbij; wie zwijgt, lijkt koel. Veel ervan ken je al (<i>geçmiş olsun, kolay gelsin, afiyet olsun</i>). Hier is de volgende laag.</p>
<p><b>Dank voor wat iemand deed</b>, met het lichaamsdeel waarmee het gedaan is:<br>• <i><b>Eline sağlık.</b></i> voor koken, bakken, repareren, tekenen<br>• <i><b>Ağzına sağlık.</b></i> voor een mooi lied, een goed verhaal, een rake opmerking<br>• <i><b>Ayağına sağlık.</b></i> tegen iemand die de moeite nam te komen<br>• <i><b>Emeğine sağlık.</b></i> voor elk werk in het algemeen</p>
<p><b>Blijde gebeurtenissen</b>:<br>• <i><b>Gözün aydın!</b></i> als iemand terugkomt of een kind krijgt (antwoord: <i>Aydınlıkta kal</i>)<br>• <i><b>Darısı başına!</b></i> tegen wie hetzelfde geluk nog wacht: een bruiloft, een diploma, een huis<br>• <i><b>Güle güle kullan / giy / otur.</b></i> bij een nieuw ding, kledingstuk of huis<br>• <i><b>Allah analı babalı büyütsün.</b></i> bij een geboorte<br>• <i><b>Allah kavuştursun.</b></i> tegen wie afscheid nam van een dierbare</p>
<p><b>Aan tafel</b>: de gast zegt <i>Ziyade olsun</i> of <i>Kesenize bereket</i>, de gastvrouw <i>Afiyet olsun</i>.</p>
<p><b>Onzekerheid aanvaarden</b>: <i><b>Hayırlısı olsun.</b></i> (Moge het beste gebeuren.) · <i><b>Kısmet.</b></i> (Als het zo moet zijn.) · <i><b>Nasip değilmiş.</b></i> (Het was ons niet beschoren.)</p>
<p><b>⚠️ Uitzondering:</b> <i><b>Estağfurullah</b></i> zeg je in twee tegengestelde situaties: als iemand jou <b>bedankt of prijst</b> («geen dank, dat is te veel eer») én als iemand <b>zichzelf kleineert</b> (<i>— Ben anlamam, cahilim. — Estağfurullah!</i> = «zeg dat toch niet»). <b>Waarom?</b> Letterlijk is het Arabisch voor «ik vraag God om vergeving». In beide gevallen wijs je iets af wat volgens de beleefdheid niet mag blijven staan: te veel lof voor jou, of te weinig lof voor de ander. De formule herstelt het evenwicht tussen de twee sprekers; welke kant ze op werkt, hangt af van wat er net gezegd is.</p>`,
        table: [['situatie', 'formule'], ['lekker gekookt', 'Eline sağlık.'], ['mooi gezegd of gezongen', 'Ağzına sağlık.'], ['iemand is terug · baby', 'Gözün aydın!'], ['jij bent de volgende', 'Darısı başına!'], ['nieuw ding gekocht', 'Güle güle kullan.'], ['afwachten', 'Hayırlısı olsun.']],
        sum: 'Eline sağlık, çok güzel olmuş.',
        ex: [['Eline sağlık, börek çok güzel olmuş.', 'Dank je wel, de börek is heerlijk geworden.'], ['Kızın evleniyormuş, gözün aydın!', 'Ik hoor dat je dochter gaat trouwen, gefeliciteerd!'], ['Darısı senin başına!', 'Nu jij nog!'], ['Estağfurullah, ne demek!', 'Maar nee, geen dank!']] },
      { t: 'Zin hebben en uitgerekend dan: -esi gelmek, -eceği tutmak', es: '-esi gelmek, -eceği tutmak',
        html: `<p>Voor een opwelling die je <b>overkomt</b>, heeft het Turks een eigen vorm: <b>stam + -esi / -ası + bezitsuitgang + gelmek</b>. Letterlijk: «mijn willen-doen is gekomen».</p>
<p>• <i>Ağla<b>yasım geldi</b>.</i> (Ik kon wel huilen.)<br>• <i>Gül<b>esim geldi</b>.</i> (Ik moest bijna lachen.)<br>• <i>Canım dondurma ye<b>mek istedi</b></i> is een wens; <i>dondurma yi<b>yesim geldi</b></i> is een plotselinge trek.<br>• <i>Seni gör<b>esim geldi</b>.</i> (Ik kreeg zin je te zien: ik mis je.)<br>• Ontkennend met <b>yok</b>: <i>Hiç gid<b>esim yok</b>.</i> (Ik heb helemaal geen zin om te gaan.) · <i>Bugün çalış<b>asım yok</b>.</i></p>
<p>De vorm is voor alle personen: <i>gid<b>esin</b> geldi mi?</i> · <i>uyu<b>yası</b> gelmiş</i> · <i>kaç<b>asımız</b> geldi</i>.</p>
<p>Met <b>tutmak</b> krijgt de opwelling iets eigenzinnigs of ongelegens: <b>-eceği tutmak</b>.<br>• <i>Tam çıkacakken yağmurun yağ<b>acağı tuttu</b>.</i> (Uitgerekend toen we weg wilden, moest het zo nodig gaan regenen.)<br>• <i>Gecenin üçünde şarkı söyle<b>yeceği tuttu</b>.</i> (Om drie uur ’s nachts kreeg hij het op zijn heupen en ging zingen.)<br>• <i>İnadı tuttu.</i> (Hij kreeg een koppige bui.) · <i>Gülmesi tuttu.</i> (Ze kreeg de slappe lach.)</p>
<p>Verwant is <b>canı istemek / çekmek</b>: <i>Canım tatlı <b>çekti</b>.</i> (Ik heb trek in iets zoets.) · <i>Canın ne isterse.</i> (Wat je maar wilt.)</p>
<p><b>⚠️ Uitzondering:</b> hetzelfde <b>-esi</b> zonder <i>gelmek</i> is een <b>verwensing</b>: <i>kahrol<b>ası</b>!</i> (vervloekt!) · <i>kör ol<b>ası</b></i> (moge hij blind worden: die ellendeling) · <i>adı bat<b>ası</b></i> (wiens naam moge vergaan) · <i>geber<b>esi</b>ce</i>. <b>Waarom?</b> <b>-esi</b> is van oorsprong een deelwoord van de wensvorm: «die moge …». Als bijvoeglijk naamwoord vóór een persoon of ding wenst het hem iets toe, en in de praktijk is dat bijna altijd iets slechts. Met een bezitsuitgang en <i>gelmek</i> wordt de wens naar binnen gekeerd: «mijn mogen-huilen is gekomen». Eén achtervoegsel, twee kanten van hetzelfde verlangen.</p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['-esi + gelmek', 'opeens zin krijgen', 'Ağlayasım geldi.'], ['-esi + yok', 'geen zin hebben', 'Gidesim yok.'], ['-eceği tutmak', 'uitgerekend dan', 'Yağmurun yağacağı tuttu.'], ['-mesi tutmak', 'een bui krijgen', 'Gülmesi tuttu.'], ['canı çekmek', 'trek hebben in', 'Canım tatlı çekti.'], ['-esi (bijv. nw.)', 'verwensing', 'kahrolası']],
        sum: 'Hiç gidesim yok.',
        ex: [['Bu şarkıyı duyunca ağlayasım geldi.', 'Toen ik dit lied hoorde, kon ik wel huilen.'], ['Bugün hiç çalışasım yok.', 'Ik heb vandaag helemaal geen zin om te werken.'], ['Tam yola çıkacakken arabanın bozulacağı tuttu.', 'Net toen we wilden vertrekken, moest de auto zo nodig kapotgaan.'], ['Canım mantı çekti.', 'Ik heb trek in mantı.']] }
    ],
    dialogue: {
      t: 'Op bezoek met baklava', place: 'Gaziantep 🇹🇷',
      lines: [
        ['Ilse', 'Hayriye Teyze, baklava nefis olmuş. Elinize sağlık!', 'Tante Hayriye, de baklava is verrukkelijk. Dank u wel!'],
        ['Hayriye', 'Afiyet olsun kızım. Bir tane daha al, nazlanma.', 'Eet smakelijk, meisje. Neem er nog een, laat je niet bidden.'],
        ['Ilse', '«Nazlanmak» ne demek tam olarak? Sözlükte «koket doen» yazıyor ama pek oturmadı.', 'Wat betekent «nazlanmak» precies? In het woordenboek staat «koket doen», maar dat klopt niet helemaal.'],
        ['Hayriye', 'İstediğin hâlde «yok, almayayım» demek. Biraz ısrar bekliyorsun yani. Bizde misafir üç kere «hayır» der, dördüncüde yer.', 'Dat je «nee, liever niet» zegt terwijl je het wel wilt. Je wacht dus op wat aandringen. Bij ons zegt een gast drie keer «nee» en eet hij de vierde keer.'],
        ['Ilse', 'O zaman nazlanmıyorum, alıyorum! Bu arada duydum, torununuz olmuş. Gözünüz aydın!', 'Dan laat ik me niet bidden, ik neem er een! Ik hoorde trouwens dat u een kleinkind hebt gekregen. Gefeliciteerd!'],
        ['Hayriye', 'Aydınlıkta kal yavrum. Allah analı babalı büyütsün. Darısı senin başına!', 'Dank je, kindje. Moge God het met moeder en vader laten opgroeien. Nu jij nog!'],
        ['Ilse', 'Kısmet teyzeciğim, hayırlısı. Şimdilik hiç evlenesim yok.', 'Als het zo moet zijn, tantetje, wat het beste is. Voorlopig heb ik helemaal geen zin om te trouwen.'],
        ['Hayriye', 'Hah, «evlenesim yok» dedin ya, artık bizden birisin! Türkçen maşallah, nazar değmesin.', 'Ha, je zei «evlenesim yok», nu ben je echt een van ons! Je Turks, maşallah, moge het boze oog het niet treffen.']
      ],
      q: [
        { t: 'mc', q: 'Hayriye Teyze’ye göre «nazlanmak» ne demek?', o: ['İstediğin hâlde «hayır» demek', 'Çok yemek yemek', 'Misafire kızmak'] },
        { t: 'mc', q: 'Ilse neden «Gözünüz aydın» dedi?', o: ['Hayriye’nin torunu olduğu için', 'Baklava güzel olduğu için', 'Hayriye hastalıktan kalktığı için'] },
        { t: 'mc', q: 'Ilse evlilik konusunda ne diyor?', o: ['Şimdilik hiç evlenesi yok', 'Yakında evlenecek', 'Evli olduğunu söylüyor'] }
      ]
    },
    culture: { t: 'Keyif, hüzün en het aandringen', html: `<p><b>Keyif</b> is meer dan plezier: het is de trage, bewuste tevredenheid van thee op het balkon, een waterpijp, een zondags ontbijt dat tot twee uur duurt. Je kunt het <i>maken</i> (<i>keyif yapmak</i>), en het kan <i>wegvluchten</i> (<i>keyfim kaçtı</i>).</p>
<p><b>Hüzün</b> is de weemoed die volgens Orhan Pamuk boven İstanbul hangt: een gedeeld gevoel van verloren grootheid, dat de inwoners eerder koesteren dan bestrijden. <b>Gurbet</b> is het land ver van huis, en wie daar woont is <i>gurbetçi</i>; zo heten ook de Turken in Nederland en Duitsland.</p>
<p>🫖 En dan het <b>ısrar</b>, het aandringen. Een gastvrouw die maar één keer aanbiedt, meent het niet; een gast die meteen toehapt, is gulzig. Het spel van <i>naz</i> en <i>ısrar</i> duurt een paar rondes. Wie echt niet meer kan, legt de hand op het hart en zegt <i>Ziyade olsun</i>.</p>` },
    ex: [
      { t: 'mc', q: 'Je vriendin heeft heerlijk gekookt. Wat zeg je?', o: ['Eline sağlık.', 'Ağzına sağlık.', 'Gözün aydın.'], tag: 'tr-kalip' },
      { t: 'mc', q: 'Iemand heeft prachtig gezongen. Wat zeg je?', o: ['Ağzına sağlık.', 'Eline sağlık.', 'Darısı başına.'], x: 'Het lichaamsdeel waarmee het gedaan is: el voor maken, ağız voor zingen en spreken, ayak voor komen.', tag: 'tr-kalip' },
      { t: 'cloze', s: 'Torununuz olmuş, gözünüz ___!', h: 'helder', a: ['aydın'], o: ['aydın', 'sağlık', 'kolay'], nl: 'U hebt een kleinkind gekregen, gefeliciteerd!', tag: 'tr-kalip' },
      { t: 'mc', q: 'Je vriend heeft een nieuwe auto. Wat zeg je?', o: ['Güle güle kullan.', 'Güle güle giy.', 'Geçmiş olsun.'], tag: 'tr-kalip' },
      { t: 'mc', q: 'Iemand zegt: «Ben anlamam, cahilim.» Jij antwoordt:', o: ['Estağfurullah!', 'Darısı başına!', 'Ziyade olsun!'], x: '⚠️ Uitzondering: estağfurullah zeg je bij te veel lof voor jou én bij te weinig lof voor de ander. In beide gevallen herstel je het evenwicht.', tag: 'tr-kalip' },
      { t: 'cloze', s: '___ senin başına!', h: 'moge het jou ook overkomen', a: ['Darısı'], o: ['Darısı', 'Hayırlısı', 'Kısmeti'], nl: 'Nu jij nog!', tag: 'tr-kalip' },
      { t: 'cloze', s: 'Bu şarkıyı duyunca ağla___ geldi.', h: 'ik kon wel', a: ['yasım'], o: ['yasım', 'mak', 'yacak'], nl: 'Toen ik dit lied hoorde, kon ik wel huilen.', tag: 'tr-esi' },
      { t: 'cloze', s: 'Bugün hiç çalışasım ___.', h: 'geen zin', a: ['yok'], o: ['yok', 'değil', 'gelmez'], nl: 'Ik heb vandaag helemaal geen zin om te werken.', tag: 'tr-esi' },
      { t: 'mc', q: 'Wat zegt «Tam çıkacakken yağmurun yağacağı tuttu»?', o: ['Uitgerekend toen we weg wilden, ging het regenen.', 'Het zou gaan regenen, maar het bleef droog.', 'We gingen weg omdat het regende.'], tag: 'tr-esi' },
      { t: 'mc', q: 'Wat is «kahrolası» voor een vorm?', o: ['Een verwensing: -esi als bijvoeglijk naamwoord', 'Een toekomende tijd', 'Een beleefd verzoek'], x: '⚠️ Uitzondering: -esi is van oorsprong een deelwoord van de wensvorm, «die moge …». Vóór een persoon of ding wenst het hem iets (slechts) toe.', tag: 'tr-esi' },
      { t: 'cloze', s: 'Canım tatlı ___.', h: 'trek hebben in', a: ['çekti', 'istedi', 'çekiyor'], o: ['çekti', 'geldi', 'tuttu'], nl: 'Ik heb trek in iets zoets.', tag: 'tr-esi' },
      { t: 'mc', q: 'Wat is «gurbet»?', o: ['het land ver van huis', 'een gezellig samenzijn', 'gezamenlijk werk in het dorp'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik heb helemaal geen zin om te gaan.', a: ['Hiç gidesim yok.', 'Hiç gitmek istemiyorum.', 'Hiç gidesim gelmiyor.'], tag: 'tr-esi' },
      { t: 'tr', nl: 'Moge het beste gebeuren.', a: ['Hayırlısı olsun.', 'Hayırlısı.', 'Hayırlısı neyse o olsun.'], tag: 'tr-kalip' },
      { t: 'order', s: 'Bizde misafir üç kere hayır der, dördüncüde yer.', nl: 'Bij ons zegt een gast drie keer nee en eet hij de vierde keer.', tag: 'tr-kalip' },
      { t: 'match', p: [['hüzün', 'weemoed'], ['hasret', 'verlangen'], ['nazar', 'het boze oog'], ['kısmet', 'wat je beschoren is'], ['sitem', 'liefdevol verwijt'], ['imece', 'gezamenlijk dorpswerk']], tag: 'vocab' }
    ],
    reading: {
      t: 'Çevrilemeyen sözcükler', type: 'Essay',
      p: [
        ['Her dilde başka dile tam çevrilemeyen sözcükler vardır. Türkçede bunların başında «gönül» gelir. Kalp değildir, çünkü kalp bir organdır; akıl da değildir. Gönül, insanın sevdiği, kırıldığı, razı olduğu yerdir.', 'In elke taal bestaan woorden die niet helemaal in een andere taal te vertalen zijn. In het Turks staat «gönül» daarbij vooraan. Het is niet het hart, want het hart is een orgaan; het is ook niet het verstand. Gönül is de plek waar de mens liefheeft, gekwetst raakt en instemt.'],
        ['Gönül alınır, gönül kırılır, gönül verilir. «Gönül ne kahve ister ne kahvehane; gönül sohbet ister, kahve bahane» der atasözü. Yani insan aslında kahveye değil, dosta gider.', 'Een gönül wordt gewonnen, gebroken, weggeschonken. «Het hart wil koffie noch koffiehuis; het hart wil gezelschap, de koffie is een voorwendsel», zegt het spreekwoord. De mens gaat dus eigenlijk niet voor de koffie, maar voor de vriend.'],
        ['«İmece» de böyledir. Köyde bir evin çatısı yapılacaksa bütün köy toplanır, kimse para istemez; yarın sıra başkasına gelecektir. Tek sözcükte hem iş hem dayanışma vardır.', 'Zo is het ook met «imece». Als in het dorp het dak van een huis gemaakt moet worden, komt het hele dorp bijeen en niemand vraagt geld; morgen is een ander aan de beurt. In één woord zitten zowel werk als solidariteit.'],
        ['Bu sözcükleri öğrenmenin yolu sözlüğe bakmak değil, onları yaşamaktır. Bir gün biri size «gönlüm razı değil» dediğinde çeviri aramadığınızı fark edersiniz. İşte o gün dil sizin olmuştur.', 'De manier om deze woorden te leren is niet het woordenboek raadplegen, maar ze beleven. Op een dag, wanneer iemand tegen u zegt «gönlüm razı değil», merkt u dat u geen vertaling zoekt. Op die dag is de taal van u geworden.']
      ],
      gl: [['razı olmak', 'instemmen'], ['bahane', 'voorwendsel'], ['atasözü', 'spreekwoord'], ['çatı', 'dak'], ['sıra gelmek', 'aan de beurt komen']],
      q: [
        { t: 'mc', q: 'Yazara göre «gönül» nedir?', o: ['İnsanın sevdiği, kırıldığı, razı olduğu yer', 'Bir organ', 'Aklın başka bir adı'] },
        { t: 'mc', q: 'Atasözüne göre gönül aslında ne ister?', o: ['Sohbet', 'Kahve', 'Kahvehane'] },
        { t: 'mc', q: 'İmecede kim para ister?', o: ['Hiç kimse', 'Ev sahibi', 'Köyün muhtarı'] }
      ]
    },
    say: [['Eline sağlık, çok güzel olmuş.', 'Dank je wel, het is heerlijk geworden.'], ['Gözün aydın!', 'Gefeliciteerd!'], ['Hayırlısı olsun.', 'Moge het beste gebeuren.'], ['Hiç gidesim yok.', 'Ik heb helemaal geen zin om te gaan.']],
    task: { nl: 'Kies een Nederlands woord dat moeilijk te vertalen is (gezellig, uitwaaien, voorpret …) en leg het in vijf of zes Turkse zinnen uit aan een Turkse vriend, zonder het te vertalen: beschrijf een situatie. Vergelijk het daarna met een Turks woord uit deze unit (keyif, gönül, hüzün, imece). Gebruik één keer -esi gelmek of -esi yok.', model: 'Hollandacada «gezellig» diye bir sözcük var ve Türkçeye tam çevrilemiyor. Kışın dışarıda yağmur yağarken içeride mum yakıp dostlarla oturduğunuzu düşünün; işte o hava «gezellig». Bir mekân, bir akşam, hatta bir insan «gezellig» olabilir. Bence Türkçedeki «keyif» sözcüğüne yakın ama aynı değil: keyfi tek başına da yaparsın, «gezellig» ise çoğu zaman başkalarıyla olur. Böyle akşamlarda hiç eve gidesim gelmiyor.' },
    scenario: { nl: 'Je bent op bezoek bij Hayriye Teyze in Gaziantep. Ze heeft baklava gemaakt, heeft net een kleinkind gekregen en dringt aan dat je nog meer eet.', role: 'You are Hayriye Teyze, a warm, talkative grandmother in Gaziantep hosting the learner with tea and homemade baklava. Insist (ısrar) that they eat more, at least three times. Share news that calls for set phrases: your new grandchild, your son\'s new car, a neighbour\'s daughter getting married, your own knee operation. Expect the right formula each time (Elinize sağlık, Gözünüz aydın, Güle güle kullansın, Darısı başına, Geçmiş olsun) and gently supply it if the learner misses it. Explain words like naz, kısmet, nazar when asked. Homely, affectionate Turkish with yavrum, kızım / oğlum.', goal: 'Zeg bij elk nieuwtje de juiste formule, sla beleefd af en geef daarna toe, en vraag naar een woord dat je niet kunt vertalen.' }
  });

  /* ───────────────────────── C2 · 8 ───────────────────────── */
  U({
    id: 'tr-c2-08', level: 'C2', icon: '🧵', title: 'Bırakın yardım etmeyi', nl: 'De lange zin: alsof, niet alleen, laat staan',
    goals: ['Lange, gelaagde zinnen lezen en zelf bouwen', 'Vergelijken en overtreffen: -cesine, -mekle kalmayıp, şöyle dursun, -mektense', 'Weten hoe ver ontkenning en tijd reiken in een ketting met -ip', 'Een alinea schrijven die uit één goed gebouwde zin bestaat'],
    vocab: [
      ['uçarcasına', 'als het ware vliegend'], ['deli gibi', 'als een gek'], ['adeta', 'als het ware'], ['bir yana', 'daargelaten'], ['bununla kalmayıp', 'en daar bleef het niet bij'], ['kaldı ki', 'daar komt bij dat'], ['bırak', 'laat staan (spreektaal)'],
      ['şöyle dursun', 'laat staan (schrijftaal)'], ['değil … bile', 'niet eens … laat staan'], ['yetinmek', 'genoegen nemen met'], ['kalkışmak', 'zich wagen aan'], ['yeltenmek', 'zich aanmatigen'], ['tenezzül etmek', 'zich verwaardigen'], ['sakınmak', 'zich hoeden voor'],
      ['çekinmek', 'aarzelen / zich generen'], ['esirgemek', 'onthouden / sparen'], ['gözden kaçırmak', 'over het hoofd zien'], ['göz yummak', 'door de vingers zien'], ['katlanmak', 'verdragen'], ['boyun eğmek', 'zich neerleggen bij'], ['direnmek', 'zich verzetten'],
      ['caymak', 'terugkrabbelen'], ['yeğlemek', 'verkiezen'], ['ödün vermek', 'concessies doen'], ['ısrarla', 'met aandrang'], ['aralıksız', 'onafgebroken'], ['art arda', 'achter elkaar'], ['virgül', 'komma']
    ],
    grammar: [
      { t: 'Alsof, niet alleen, laat staan: -cesine, -mekle kalmayıp, şöyle dursun', es: '-cesine, -mekle kalmayıp, şöyle dursun, -mektense',
        html: `<p>Op C2 gaat het om de <b>verhouding</b> tussen twee handelingen. Het Turks drukt die uit met een achtervoegsel aan het eerste werkwoord.</p>
<p><b>Alsof: -cesine / -mişçesine</b><br>Achter de brede tijd of -miş: <i>uçar<b>casına</b> koştu</i> (hij rende alsof hij vloog) · <i>hiçbir şey olma<b>mışçasına</b> gülümsedi</i> (ze glimlachte alsof er niets gebeurd was) · <i>bizi tanımaz<b>casına</b> geçti</i>. Het is schrijftaal; in gesprek zeg je <i>-miş gibi</i>.</p>
<p><b>Niet alleen … maar ook: -mekle kalmayıp / -mekle kalmadı</b><br><i>Özür dile<b>mekle kalmayıp</b> zararı da ödedi.</i> (Hij bood niet alleen zijn excuses aan, maar vergoedde ook de schade.) Letterlijk: «hij bleef niet bij excuseren». Ook: <i>-diği gibi … de</i>: <i>Geç gel<b>diği gibi</b> özür <b>de</b> dilemedi.</i> (Niet alleen kwam hij te laat, hij bood ook geen excuses aan.)</p>
<p><b>Laat staan: -mek şöyle dursun / bırak(ın) -meyi / değil … bile</b><br><i>Yardım et<b>mek şöyle dursun</b>, selam bile vermedi.</i> · <i><b>Bırak</b> yardım etmey<b>i</b>, selam bile vermedi.</i> · <i><b>Değil</b> yardım etmek, selam <b>bile</b> vermedi.</i> (Laat staan dat hij hielp: hij groette niet eens.)</p>
<p><b>Liever dan: -mektense / -meye … -mek</b><br><i>Yalan söyle<b>mektense</b> susarım.</i> (Ik zwijg liever dan dat ik lieg.) · <i>Böyle yaşa<b>maktansa</b> …</i></p>
<p><b>Zonder te: -meksizin / -meden</b><br><i>Hiçbir şey söyle<b>meksizin</b> çıktı.</i> (schrijftaal voor <i>söylemeden</i>)</p>
<p><b>Zogenaamd: güya / sözde … -ecekti</b><br><i><b>Güya</b> bize yardım edecekti.</i> (Hij zou ons zogenaamd helpen.)</p>
<p><b>⚠️ Uitzondering:</b> bij <i>şöyle dursun</i> en <i>bırak</i> staat het <b>grote, onwaarschijnlijke</b> voorop en het kleine achteraan, andersom dan in het Nederlands: <i>Yardım etmek şöyle dursun, selam bile vermedi.</i> = «Hij groette niet eens, <u>laat staan</u> dat hij hielp.» <b>Waarom?</b> <i>Şöyle dursun</i> betekent letterlijk «laat dat daar maar even staan». Je zet eerst het grote opzij als iets waar je niet eens aan begint, en noemt dan het kleine dat óók al niet gebeurde. De Turkse zin bouwt zo naar zijn werkwoord toe, dat zoals altijd achteraan staat en met <i>bile</i> de klap geeft. Vertaal je woord voor woord in de Nederlandse volgorde, dan zeg je het omgekeerde.</p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['-cesine', 'alsof', 'uçarcasına koştu'], ['-mekle kalmayıp', 'niet alleen … ook', 'özür dilemekle kalmayıp ödedi'], ['-mek şöyle dursun', 'laat staan', 'yardım etmek şöyle dursun'], ['bırak -meyi', 'laat staan (spreektaal)', 'bırak yardım etmeyi'], ['-mektense', 'liever dan', 'yalan söylemektense'], ['-meksizin', 'zonder te', 'söylemeksizin']],
        sum: 'Bırak yardım etmeyi, selam bile vermedi.',
        ex: [['Hiçbir şey olmamışçasına gülümsedi.', 'Ze glimlachte alsof er niets gebeurd was.'], ['Özür dilemekle kalmayıp zararı da ödedi.', 'Hij bood niet alleen zijn excuses aan, maar vergoedde ook de schade.'], ['Yardım etmek şöyle dursun, selam bile vermedi.', 'Hij groette niet eens, laat staan dat hij hielp.'], ['Yalan söylemektense susarım.', 'Ik zwijg liever dan dat ik lieg.']] },
      { t: 'Kettingzinnen met -ip: hoe ver reikt de ontkenning?', es: '-ip zincirleri: olumsuzluğun kapsamı',
        html: `<p><b>-ip</b> is een leeg haakje: het werkwoord waar het aan hangt, heeft zelf geen tijd, geen persoon en geen wijs. Alles leent het van het <b>laatste werkwoord</b> van de zin.</p>
<p><i>Eve gid<b>ip</b> yemek ye<b>dim</b>.</i> = <i>gittim ve yedim</i> · <i>Eve gid<b>ip</b> yemek ye<b>meliyiz</b>.</i> = <i>gitmeliyiz ve yemeliyiz</i> · <i>Otur<b>up</b> konuş<b>alım</b>.</i> = <i>oturalım ve konuşalım</i></p>
<p>Dat geldt meestal ook voor de <b>ontkenning</b>:<br><i>Ara<b>yıp</b> sor<b>madı</b>.</i> = hij belde niet en vroeg er niet naar. · <i>Otur<b>up</b> konuş<b>madık</b>.</i> = we zijn niet gaan zitten om te praten. De twee handelingen vormen één geheel en dat geheel wordt ontkend.</p>
<p>Wil je <b>alleen het eerste</b> ontkennen, dan zet je de ontkenning daar: <i>Git<b>meyip</b> evde kaldı.</i> (Hij ging niet en bleef thuis.) · <i>Cevap ver<b>meyip</b> güldü.</i> In gewone taal vaker <i>-meden</i>: <i>Cevap vermeden güldü.</i></p>
<p>Een lange ketting lees je als een trein: elke <b>-ip</b> is een wagon, de locomotief staat achteraan. <i>Sabah erkenden kalk<b>ıp</b> kahvaltıyı hazırla<b>yıp</b> çocukları okula bırak<b>ıp</b> işe yetiş<b>mek zorundayım</b>.</i> Alle vier vallen onder <i>zorundayım</i>.</p>
<p>Verwante haakjes met een eigen kleur: <b>-erek</b> (terwijl, doordat: de manier), <b>-ince</b> (zodra), <b>-dikçe</b> (telkens als, naarmate), <b>-eli</b> (sinds), <b>-meden</b> (voordat, zonder).</p>
<p><b>⚠️ Uitzondering:</b> zet je <b>de / da</b> achter -ip, dan <b>stopt</b> de ontkenning daar: <i>Gör<b>üp de</b> söyle<b>medi</b>.</i> betekent «hij zag het <u>wel</u>, maar zei het niet», en niet «hij zag het niet en zei het niet». Zo ook <i>Bil<b>ip de</b> sustu.</i> (Hij wist het en zweeg toch.) · <i>Gel<b>ip de</b> uğra<b>ma</b>mak olur mu?</i> (Kun je hier nu zijn en niet langskomen?) <b>Waarom?</b> <i>De</i> betekent «ook, en toch» en maakt van het eerste werkwoord een <b>eigen bewering</b> die wordt vastgesteld voordat de zin verdergaat. Daarmee is het haakje gesloten: wat erna komt, ook de ontkenning, hoort alleen bij het tweede werkwoord. Het effect is bijna altijd een <b>verwijt</b>: «je deed het ene wél, en dan het andere niet!»</p>`,
        table: [['zin', 'betekenis'], ['Arayıp sordu.', 'Hij belde en vroeg.'], ['Arayıp sormadı.', 'Hij belde niet en vroeg niet.'], ['Aramayıp mesaj attı.', 'Hij belde niet, maar stuurde een bericht.'], ['Arayıp da sormadı.', 'Hij belde wél, maar vroeg het niet.'], ['Görüp de söylemedi.', 'Hij zag het wél en zei niets.']],
        sum: 'Görüp de söylemedi.',
        ex: [['Bir kere bile arayıp sormadı.', 'Hij heeft niet één keer gebeld om te vragen hoe het ging.'], ['Gitmeyip evde kaldı.', 'Hij ging niet en bleef thuis.'], ['Görüp de söylemedi.', 'Hij zag het wél, maar zei niets.'], ['Buraya kadar gelip de uğramamak olur mu?', 'Kun je helemaal hierheen komen en dan niet langsgaan?']] }
    ],
    dialogue: {
      t: 'Een zin van een halve bladzijde', place: 'İstanbul 🇹🇷',
      lines: [
        ['Ilse', 'Yusuf, şu cümleye bakar mısın? Yarım sayfa sürüyor, sonunu getiremedim.', 'Yusuf, wil je even naar deze zin kijken? Hij is een halve bladzijde lang, ik kwam niet tot het eind.'],
        ['Yusuf', 'Tanpınar mı okuyorsun? O zaman normal. Önce en sona git: yüklem ne?', 'Lees je Tanpınar? Dan is het normaal. Ga eerst naar het eind: wat is het gezegde?'],
        ['Ilse', '«… bir daha dönmemek üzere çıkıp gitti.» Yani biri gitmiş. Ama ondan önce altı tane «-ip» var.', '«… bir daha dönmemek üzere çıkıp gitti.» Er is dus iemand weggegaan. Maar daarvoor staan zes keer «-ip».'],
        ['Yusuf', 'Her «-ip» bir vagon, lokomotif sonda. Hepsi «gitti»nin zamanını ve kişisini alır.', 'Elke «-ip» is een wagon, de locomotief staat achteraan. Ze krijgen allemaal de tijd en de persoon van «gitti».'],
        ['Ilse', 'Peki şurası: «Görüp de bir şey söylemedi.» Görmedi mi, gördü mü?', 'En dit dan: «Görüp de bir şey söylemedi.» Zag hij het niet, of wel?'],
        ['Yusuf', 'Gördü! «De» olumsuzluğu durdurur. «Gördüğü hâlde söylemedi» demek. Biraz da sitem var içinde.', 'Hij zag het! «De» houdt de ontkenning tegen. Het betekent «hoewel hij het zag, zei hij niets». Er zit ook een beetje verwijt in.'],
        ['Ilse', 'Ya bu: «Özür dilemek şöyle dursun, yüzüme bile bakmadı»?', 'En dit: «Özür dilemek şöyle dursun, yüzüme bile bakmadı»?'],
        ['Yusuf', 'Özür dilemedi, hatta yüzüne bile bakmadı. Büyük şey önce, küçük şey sonra; Hollandacanın tersi galiba.', 'Hij bood geen excuses aan, hij keek je zelfs niet aan. Het grote eerst, het kleine daarna; het omgekeerde van het Nederlands, geloof ik.']
      ],
      q: [
        { t: 'mc', q: 'Yusuf uzun cümlede önce neye bakmayı öneriyor?', o: ['En sondaki yükleme', 'İlk sözcüğe', 'Virgüllere'] },
        { t: 'mc', q: '«Görüp de bir şey söylemedi» cümlesinde adam gördü mü?', o: ['Evet, gördü ama söylemedi', 'Hayır, görmedi', 'Belli değil'] },
        { t: 'mc', q: '«Şöyle dursun» kalıbında önce ne söylenir?', o: ['Büyük, beklenmeyen şey', 'Küçük şey', 'Yüklem'] }
      ]
    },
    culture: { t: 'De lange adem van Tanpınar', html: `<p>De Turkse zin kan lang zijn, omdat alle bijzinnen <b>vóór</b> het werkwoord passen en elk haakje (-ip, -erek, -diği için, -ince) de lezer vertelt dat het einde nog niet in zicht is. Meesters van die lange adem zijn <b>Ahmet Hamdi Tanpınar</b> (<i>Huzur</i>, <i>Saatleri Ayarlama Enstitüsü</i>) en <b>Oğuz Atay</b> (<i>Tutunamayanlar</i>), die een hoofdstuk van tientallen bladzijden zonder één punt schreef.</p>
<p>Daartegenover staat de korte zin van <b>Sait Faik</b> en <b>Orhan Veli</b>, en de «devrik cümle» van de dichters. Op school leren Turkse kinderen dat een goede zin <i>kurallı</i> is (werkwoord achteraan); schrijvers bewijzen het tegendeel.</p>
<p>🧵 Voor vertalers is de lange Turkse zin een puzzel: het Nederlands wil het werkwoord vroeg, het Turks bewaart het tot het laatst. Wie Turks leest, leert geduld; de zin betaalt altijd uit op het einde.</p>` },
    ex: [
      { t: 'cloze', s: 'Hiçbir şey olmamış___ gülümsedi.', h: 'alsof', a: ['çasına'], o: ['çasına', 'ken', 'tan'], nl: 'Ze glimlachte alsof er niets gebeurd was.', tag: 'tr-cesine' },
      { t: 'cloze', s: 'Özür dilemekle ___ zararı da ödedi.', h: 'bleef er niet bij', a: ['kalmayıp'], o: ['kalmayıp', 'kalıp', 'kalınca'], nl: 'Hij bood niet alleen zijn excuses aan, maar vergoedde ook de schade.', tag: 'tr-cesine' },
      { t: 'mc', q: 'Wat betekent «Yardım etmek şöyle dursun, selam bile vermedi»?', o: ['Hij groette niet eens, laat staan dat hij hielp.', 'Hij hielp wel, maar groette niet.', 'Hij groette, maar hielp niet.'], x: '⚠️ Uitzondering: het grote staat voorop, het kleine achteraan, andersom dan in het Nederlands. Şöyle dursun = «laat dat daar maar staan».', tag: 'tr-cesine' },
      { t: 'cloze', s: '___ yardım etmeyi, selam bile vermedi.', h: 'laat staan (spreektaal)', a: ['Bırak', 'Bırakın'], o: ['Bırak', 'Güya', 'Sözde'], nl: 'Hij groette niet eens, laat staan dat hij hielp.', tag: 'tr-cesine' },
      { t: 'cloze', s: 'Yalan söyle___ susarım.', h: 'liever dan', a: ['mektense'], o: ['mektense', 'mekle', 'meksizin'], nl: 'Ik zwijg liever dan dat ik lieg.', tag: 'tr-cesine' },
      { t: 'mc', q: 'Wat zegt «Güya bize yardım edecekti»?', o: ['Hij zou ons zogenaamd helpen (maar deed het niet).', 'Hij heeft ons goed geholpen.', 'Hij gaat ons morgen helpen.'], tag: 'tr-cesine' },
      { t: 'mc', q: 'Wat betekent «Arayıp sormadı»?', o: ['Hij belde niet en vroeg er niet naar.', 'Hij belde wel, maar vroeg niets.', 'Hij vroeg het zonder te bellen.'], x: '-ip leent alles van het laatste werkwoord, meestal ook de ontkenning.', tag: 'tr-ip' },
      { t: 'mc', q: 'Wat betekent «Görüp de söylemedi»?', o: ['Hij zag het wél, maar zei niets.', 'Hij zag het niet en zei niets.', 'Hij zei het zonder het te zien.'], x: '⚠️ Uitzondering: de achter -ip sluit het haakje. De ontkenning hoort dan alleen bij het tweede werkwoord, en de zin klinkt als een verwijt.', tag: 'tr-ip' },
      { t: 'cloze', s: 'Git___ evde kaldı.', h: 'hij ging niet en', a: ['meyip', 'meden'], o: ['meyip', 'ip', 'ince'], nl: 'Hij ging niet en bleef thuis.', tag: 'tr-ip' },
      { t: 'mc', q: '«Oturup konuşalım.» Welke vorm heeft «oturup» hier eigenlijk?', o: ['oturalım', 'oturduk', 'oturacak'], tag: 'tr-ip' },
      { t: 'cloze', s: 'Buraya kadar gelip ___ uğramamak olur mu?', h: 'en dan toch', a: ['de'], o: ['de', 'ki', 'mi'], nl: 'Kun je helemaal hierheen komen en dan niet langsgaan?', tag: 'tr-ip' },
      { t: 'mc', q: 'Wat betekent «göz yummak»?', o: ['door de vingers zien', 'in slaap vallen', 'knipogen'], tag: 'vocab' },
      { t: 'tr', nl: 'Hij rende alsof hij vloog.', a: ['Uçarcasına koştu.', 'Uçar gibi koştu.', 'Uçuyormuş gibi koştu.'], tag: 'tr-cesine' },
      { t: 'tr', nl: 'Hij wist het en zweeg toch.', a: ['Bilip de sustu.', 'Bildiği hâlde sustu.', 'Bildiği halde sustu.', 'Bilip de söylemedi.'], tag: 'tr-ip' },
      { t: 'order', s: 'Özür dilemek şöyle dursun, yüzüme bile bakmadı.', nl: 'Hij keek me niet eens aan, laat staan dat hij zijn excuses aanbood.', tag: 'tr-cesine' },
      { t: 'match', p: [['güya', 'zogenaamd'], ['üstelik', 'bovendien'], ['katlanmak', 'verdragen'], ['vazgeçmek', 'afzien van'], ['direnmek', 'zich verzetten'], ['art arda', 'achter elkaar']], tag: 'vocab' }
    ],
    reading: {
      t: 'Tek cümlelik bir sabah', type: 'Literair fragment',
      p: [
        ['O sabah, her zamanki gibi erkenden kalkıp pencereyi açarak denizin kokusunu içine çeken, sonra hiçbir şey olmamışçasına çayını demleyip gazetesini masaya yayan ihtiyar, karşı kıyıdan gelen vapurun düdüğünü duyunca birden durdu.', 'Die ochtend bleef de oude man, die zoals altijd vroeg was opgestaan, het raam had geopend en de geur van de zee had opgesnoven, en daarna, alsof er niets gebeurd was, zijn thee had gezet en zijn krant op tafel had uitgespreid, plotseling staan toen hij de fluit van de veerboot van de overkant hoorde.'],
        ['Kırk yıldır aynı düdüğü duyup da bir kez olsun başını kaldırmamış olan bu adam, o gün gazeteyi okumakla kalmayıp katlayıp cebine koydu, paltosunu giydi ve kimseye bir şey söylemeksizin evden çıktı.', 'Deze man, die veertig jaar lang dezelfde fluit had gehoord en toch niet één keer zijn hoofd had opgetild, las die dag niet alleen de krant, maar vouwde hem ook op en stak hem in zijn zak, trok zijn jas aan en verliet het huis zonder tegen iemand iets te zeggen.'],
        ['Komşuları, onun iskeleye inmek şöyle dursun, sokağın başına kadar bile yürüdüğünü yıllardır görmemişlerdi.', 'Zijn buren hadden hem al jaren niet eens tot het begin van de straat zien lopen, laat staan dat hij naar de aanlegsteiger afdaalde.'],
        ['Böyle yaşamaktansa gitmeyi mi seçmişti, yoksa yalnızca vapuru yakından görmek mi istemişti, bunu kimse öğrenemedi; çünkü ihtiyar, bir daha dönmemek üzere çıkıp gitti.', 'Had hij liever willen gaan dan zo te leven, of wilde hij alleen de veerboot van dichtbij zien? Niemand is het te weten gekomen, want de oude man ging weg om nooit meer terug te keren.']
      ],
      gl: [['demlemek', 'thee zetten / laten trekken'], ['yaymak', 'uitspreiden'], ['düdük', 'fluit'], ['katlamak', 'opvouwen'], ['iskele', 'aanlegsteiger'], ['-mek üzere', 'om te / met de bedoeling']],
      q: [
        { t: 'mc', q: 'İhtiyar neyi duyunca durdu?', o: ['Vapurun düdüğünü', 'Kapının zilini', 'Komşusunun sesini'] },
        { t: 'mc', q: 'Kırk yıl boyunca düdüğü duyunca ne yapardı?', o: ['Başını bile kaldırmazdı', 'İskeleye inerdi', 'Pencereyi kapatırdı'] },
        { t: 'mc', q: 'İhtiyar evden nasıl çıktı?', o: ['Kimseye bir şey söylemeksizin', 'Komşularıyla vedalaşarak', 'Koşarcasına'] }
      ]
    },
    say: [['Hiçbir şey olmamışçasına gülümsedi.', 'Ze glimlachte alsof er niets gebeurd was.'], ['Bırak yardım etmeyi, selam bile vermedi.', 'Hij groette niet eens, laat staan dat hij hielp.'], ['Görüp de söylemedi.', 'Hij zag het wél, maar zei niets.'], ['Yalan söylemektense susarım.', 'Ik zwijg liever dan dat ik lieg.']],
    task: { nl: 'Schrijf één lange, goed gebouwde zin van minstens veertig woorden over een ochtend, een reis of een beslissing. Gebruik minstens twee keer -ip, één keer -erek of -ince, en één van de vormen -cesine, -mekle kalmayıp, şöyle dursun of -mektense. Zet het gezegde helemaal achteraan. Schrijf er daarna dezelfde inhoud in drie korte zinnen onder.', model: 'Dün sabah, alarm çalmadan uyanıp perdeyi aralayarak dışarıdaki karı görünce, işe gitmek şöyle dursun yataktan bile çıkmak istemeyen ben, kahvemi hazırlayıp pencerenin önüne oturdum ve kırk yıllık bir dostu karşılarcasına kar tanelerini seyretmekle kalmayıp patronuma «Bugün evden çalışıyorum» diye bir mesaj attım. — Kısa hâli: Dün sabah erken uyandım ve dışarıda kar vardı. Yataktan çıkmak bile istemedim. Kahvemi alıp karı seyrettim ve patronuma evden çalışacağımı yazdım.' },
    scenario: { nl: 'Je leest een roman van Tanpınar en loopt vast op een zin van een halve bladzijde. In een boekhandel-café in İstanbul helpt Yusuf, redacteur bij een uitgeverij, je hem te ontleden.', role: 'You are Yusuf, an editor at an İstanbul publishing house, sitting in a bookshop café. The learner is stuck on long literary sentences. Give them two or three long sentences (40+ words) with chains of -ip / -erek and constructions like -mişçesine, -mekle kalmayıp, -mek şöyle dursun, -ip de … -medi. Guide them: find the final predicate, cut at each -ip, decide what the negation covers. Ask comprehension questions (Gördü mü, görmedi mi?), then challenge them to build one long sentence themselves and edit it with them. Precise, literary but friendly C2 Turkish.', goal: 'Ontleed twee lange zinnen, leg uit wat wel en niet ontkend wordt en bouw zelf één lange zin.' }
  });
})(window.SPT);
