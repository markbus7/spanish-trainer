/* Turks voor Nederlandstaligen — niveau A2, units 5–6 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── A2 · 5 ───────────────────────── */
  U({
    id: 'tr-a2-05', level: 'A2', icon: '🏠', title: 'Bu kimin evi?', nl: 'Wonen: van wie is het?',
    goals: ['Je huis en de kamers beschrijven', 'Zeggen van wie iets is met -in … -i', 'Samengestelde woorden maken zoals yatak odası', 'Een woning bekijken en naar de huur vragen'],
    vocab: [
      ['daire', 'appartement'], ['kira', 'huur'], ['kiralık', 'te huur'], ['kiralamak', 'huren'], ['taşınmak', 'verhuizen'], ['komşu', 'buurman / buurvrouw'], ['kat', 'verdieping'],
      ['asansör', 'lift'], ['merdiven', 'trap'], ['yatak odası', 'slaapkamer'], ['oturma odası', 'woonkamer'], ['mutfak', 'keuken'], ['banyo', 'badkamer'], ['balkon', 'balkon'], ['bahçe', 'tuin'],
      ['eşya', 'spullen / meubels'], ['koltuk', 'fauteuil / bank'], ['dolap', 'kast'], ['buzdolabı', 'koelkast'], ['çamaşır makinesi', 'wasmachine'], ['yatak', 'bed'], ['halı', 'tapijt'], ['perde', 'gordijn'],
      ['anahtar', 'sleutel'], ['fatura', 'rekening (gas, licht)'], ['depozito', 'borg'], ['geniş', 'ruim / breed'], ['dar', 'krap / smal'], ['aydınlık', 'licht'], ['gürültülü', 'lawaaiig'], ['sessiz', 'stil'], ['manzara', 'uitzicht']
    ],
    grammar: [
      { t: 'Van wie? -in … -i', es: 'İsim tamlaması',
        html: `<p>«Het huis van Ali» zeg je in het Turks met <b>twee</b> uitgangen: de eigenaar krijgt <b>-in</b> (van), het bezit krijgt <b>-i</b> (zijn): <i>Ali’<b>nin</b> ev<b>i</b></i>, letterlijk «van-Ali zijn-huis». De eigenaar staat altijd <b>voorop</b>.</p>
<p><b>De eigenaar:</b> na een medeklinker <b>-in / -ın / -un / -ün</b>, na een klinker <b>-nin / -nın / -nun / -nün</b>: <i>ev<b>in</b></i>, <i>okul<b>un</b></i>, <i>Elif’<b>in</b></i>, <i>anne<b>nin</b></i>, <i>Ayşe’<b>nin</b></i>, <i>araba<b>nın</b></i>.</p>
<p><b>Het bezit:</b> de uitgang van «zijn / haar» uit A1 unit 3: na een medeklinker <b>-i / -ı / -u / -ü</b>, na een klinker <b>-si / -sı / -su / -sü</b>: <i>ev<b>i</b></i>, <i>kapı<b>sı</b></i>, <i>araba<b>sı</b></i>, <i>oda<b>sı</b></i>.</p>
<p>De voornaamwoorden hebben eigen vormen: <b>benim</b>, <b>senin</b>, <b>onun</b>, <b>bizim</b>, <b>sizin</b>, <b>onların</b>. En de vraag is <b>kimin?</b> (van wie?): <i>Bu <b>kimin</b> anahtarı?</i> — <i><b>Benim</b>.</i></p>
<p><b>⚠️ Uitzondering:</b> <i>su</i> → <i>su<b>y</b>un</i> (van het water) en <i>ne</i> → <i>ne<b>y</b>in</i> (waarvan), niet <s>sunun</s> en <s>nenin</s>. <b>Waarom?</b> <i>Su</i> was vroeger <i>suv</i>; die verdwenen slotmedeklinker komt als <b>y</b> terug zodra er een klinker volgt. Je kent het van <i>meyve su<b>y</b>u</i>. <i>Ne</i> is zo kort dat het dezelfde y kreeg om de klinkers te scheiden.</p>`,
        table: [['eigenaar', 'bezit', 'samen', 'betekenis'], ['Ali', 'ev', 'Ali’nin evi', 'het huis van Ali'], ['annem', 'araba', 'annemin arabası', 'de auto van mijn moeder'], ['ev', 'kapı', 'evin kapısı', 'de deur van het huis'],
          ['okul', 'bahçe', 'okulun bahçesi', 'de tuin van de school'], ['komşu', 'kedi', 'komşunun kedisi', 'de kat van de buren'], ['kim?', 'anahtar', 'kimin anahtarı?', 'wiens sleutel?']],
        sum: 'Ali’nin evi, annemin arabası, evin kapısı.',
        ex: [['Bu, Elif’in odası.', 'Dit is de kamer van Elif.'], ['Komşunun köpeği çok gürültülü.', 'De hond van de buren is erg lawaaiig.'], ['Dairenin kirası ne kadar?', 'Hoeveel is de huur van het appartement?'], ['Bu kimin çantası?', 'Van wie is deze tas?']] },
      { t: 'Samengestelde woorden: yatak odası', es: 'Belirtisiz isim tamlaması',
        html: `<p>Nederlands plakt woorden aan elkaar: slaap + kamer = slaapkamer. Turks zet ze naast elkaar en geeft het <b>tweede</b> woord de uitgang <b>-i / -si</b>; het eerste woord krijgt <b>niets</b>: <i>yatak oda<b>sı</b></i> (bed-kamer), <i>çamaşır makine<b>si</b></i> (was-machine), <i>otobüs durağ<b>ı</b></i> (bushalte), <i>Türk kahve<b>si</b></i>, <i>diş fırça<b>sı</b></i> (tandenborstel).</p>
<p><b>Verschil met -in … -i:</b> <i>çocuk odası</i> = een kinderkamer (een soort kamer). <i>çocuğ<b>un</b> odası</i> = de kamer van het kind (dat ene kind). Zonder -in is het een <b>soort</b>, met -in een <b>eigenaar</b>.</p>
<p>Zo werken ook straten, pleinen en dagen: <i>Taksim Meydan<b>ı</b></i>, <i>İstiklal Cadde<b>si</b></i>, <i>pazar gün<b>ü</b></i>, <i>İstanbul Üniversite<b>si</b></i>.</p>
<p>Komt er een bezitter bij, dan blijft er maar <b>één</b> uitgang: <i>yatak odam</i> (mijn slaapkamer), niet <s>yatak odasım</s>. In het meervoud komt -ler <b>vóór</b> de -i: <i>yatak oda<b>ları</b></i>.</p>`,
        table: [['woord 1', 'woord 2', 'samen', 'betekenis'], ['yatak', 'oda', 'yatak odası', 'slaapkamer'], ['oturma', 'oda', 'oturma odası', 'woonkamer'], ['çamaşır', 'makine', 'çamaşır makinesi', 'wasmachine'], ['buz', 'dolap', 'buzdolabı', 'koelkast (ijskast)'], ['ev', 'kira', 'ev kirası', 'huishuur']],
        sum: 'Yatak odası, çamaşır makinesi, otobüs durağı.',
        ex: [['Yatak odası çok aydınlık.', 'De slaapkamer is heel licht.'], ['Mutfakta bulaşık makinesi var mı?', 'Is er een vaatwasser in de keuken?'], ['Otobüs durağı evin önünde.', 'De bushalte is voor het huis.']] },
      { t: 'Een n vóór de naamval: evinde, odasına', es: 'Kaynaştırma n’si',
        html: `<p>Komt er na de bezitsuitgang van de derde persoon (<b>-i / -si</b>) nog een naamval, dan schuift er een <b>n</b> tussen: <i>Ali’nin ev<b>i</b></i> + <i>-de</i> → <i>Ali’nin evi<b>n</b>de</i> (in het huis van Ali). <i>yatak oda<b>sı</b></i> + <i>-a</i> → <i>yatak odası<b>n</b>a</i> (naar de slaapkamer). <i>annemin araba<b>sı</b></i> + <i>-dan</i> → <i>arabası<b>n</b>dan</i>.</p>
<p>Het lijdend voorwerp (-i) wordt hier <b>-ni</b>: <i>Elif’in evi<b>ni</b> gördüm.</i> (Ik heb het huis van Elif gezien.)</p>
<p>Dat is handig, want het maakt verschil hoorbaar: <i>evi<b>m</b>de</i> = in mijn huis, <i>evi<b>n</b>de</i> = in jouw huis óf in zijn huis. De context of <i>senin / onun</i> ervoor zegt welke: <i>senin evinde</i> ↔ <i>onun evinde</i>.</p>
<p>Plaatswoorden werken precies zo, want het zijn eigenlijk zelfstandige naamwoorden: <i>ev<b>in</b> ön<b>ü</b>nde</i> (voor het huis, letterlijk: aan de voorkant van het huis), <i>masa<b>nın</b> üst<b>ü</b>nde</i> (op de tafel), <i>dolab<b>ın</b> iç<b>i</b>nde</i> (in de kast), <i>okul<b>un</b> yan<b>ı</b>nda</i> (naast de school), <i>kapı<b>nın</b> arka<b>sı</b>nda</i> (achter de deur).</p>`,
        table: [['zonder naamval', 'waar?', 'waarheen?', 'waarvandaan?'], ['Ali’nin evi', 'Ali’nin evinde', 'Ali’nin evine', 'Ali’nin evinden'], ['yatak odası', 'yatak odasında', 'yatak odasına', 'yatak odasından'], ['evin önü', 'evin önünde', 'evin önüne', 'evin önünden']],
        sum: 'Ali’nin evinde. Yatak odasına. Masanın üstünde.',
        ex: [['Anahtar masanın üstünde.', 'De sleutel ligt op de tafel.'], ['Annemin evine gidiyoruz.', 'We gaan naar het huis van mijn moeder.'], ['Kedi koltuğun altında.', 'De kat zit onder de bank.'], ['Arkadaşımın dairesini gördün mü?', 'Heb je het appartement van mijn vriend gezien?']] }
    ],
    dialogue: {
      t: 'Een appartement bekijken', place: 'İzmir 🇹🇷',
      lines: [
        ['Emlakçı', 'Hoş geldiniz. Daire üçüncü katta, asansör var.', 'Welkom. Het appartement is op de derde verdieping, er is een lift.'],
        ['Mark', 'Çok güzel. Kaç odası var?', 'Heel mooi. Hoeveel kamers heeft het?'],
        ['Emlakçı', 'İki yatak odası ve geniş bir oturma odası var. Burası mutfak.', 'Er zijn twee slaapkamers en een ruime woonkamer. Dit is de keuken.'],
        ['Mark', 'Mutfak biraz dar. Buzdolabı ve çamaşır makinesi kimin?', 'De keuken is een beetje krap. Van wie zijn de koelkast en de wasmachine?'],
        ['Emlakçı', 'Ev sahibinin. Dairede kalıyorlar.', 'Van de huisbaas. Ze blijven in het appartement.'],
        ['Mark', 'Balkonun manzarası harika! Deniz görünüyor.', 'Het uitzicht van het balkon is geweldig! Je ziet de zee.'],
        ['Emlakçı', 'Evet, ve sokak çok sessiz. Komşular da çok iyi.', 'Ja, en de straat is heel stil. De buren zijn ook erg aardig.'],
        ['Mark', 'Dairenin kirası ne kadar?', 'Hoeveel is de huur van het appartement?'],
        ['Emlakçı', 'Ayda yirmi bin lira. Faturalar kiraya dahil değil.', 'Twintigduizend lira per maand. De rekeningen zijn niet bij de huur inbegrepen.'],
        ['Mark', 'Anladım. Depozito kaç aylık?', 'Begrepen. Hoeveel maanden borg?'],
        ['Emlakçı', 'İki aylık. İsterseniz yarın ev sahibiyle konuşabiliriz.', 'Twee maanden. Als u wilt, kunnen we morgen met de huisbaas praten.']
      ],
      q: [
        { t: 'mc', q: 'Dairede kaç yatak odası var?', o: ['İki', 'Üç', 'Bir'] },
        { t: 'mc', q: 'Buzdolabı kimin?', o: ['Ev sahibinin', 'Mark’ın', 'Komşunun'] },
        { t: 'mc', q: 'Balkondan ne görünüyor?', o: ['Deniz', 'Okul', 'Otobüs durağı'] }
      ]
    },
    culture: { t: '2+1, de kapıcı en het aidat', html: `<p>Turkse woningadvertenties tellen kamers als <b>2+1</b> of <b>3+1</b>: het eerste getal is het aantal slaapkamers, de <b>+1</b> is de woonkamer (<i>salon</i>). Een studio is <b>1+0</b>.</p>
<p>De meeste stedelingen wonen in een <b>apartman</b> (flatgebouw). Veel gebouwen hebben een <b>kapıcı</b> (conciërge) die het trappenhuis schoonhoudt, het vuilnis ophaalt en ’s ochtends vers brood en de krant aan de deur hangt. Daarvoor en voor de lift betaal je maandelijks <b>aidat</b> (servicekosten).</p>
<p>🧿 Verhuist er iemand, dan wens je <i>Güle güle oturun!</i> (Woon er met plezier!) En boven veel voordeuren hangt een <b>nazar boncuğu</b>, het blauwe oog dat jaloerse blikken afweert.</p>` },
    ex: [
      { t: 'cloze', s: 'Ali’___ evi çok büyük.', a: ['nin'], o: ['nin', 'in', 'nın'], nl: 'Het huis van Ali is heel groot.', x: 'Na een klinker: -nin.', tag: 'tr-gen' },
      { t: 'cloze', s: 'Ev___ kapısı açık.', a: ['in'], o: ['in', 'nin', 'ın'], nl: 'De deur van het huis is open.', tag: 'tr-gen' },
      { t: 'cloze', s: 'Annemin araba___ yeni.', a: ['sı'], o: ['sı', 'ı', 'si'], nl: 'De auto van mijn moeder is nieuw.', x: 'Het bezit krijgt na een klinker -sı.', tag: 'tr-gen' },
      { t: 'cloze', s: 'Bu ___ anahtarı?', h: 'van wie', a: ['kimin'], o: ['kimin', 'kim', 'kime'], nl: 'Van wie is deze sleutel?', tag: 'tr-gen' },
      { t: 'mc', q: 'Hoe zeg je «de prijs van het water»?', o: ['suyun fiyatı', 'sunun fiyatı', 'su fiyatın'], x: '⚠️ Uitzondering: su → suyun. Su was vroeger suv; de verdwenen medeklinker komt terug als y, net als in meyve suyu.', tag: 'tr-gen' },
      { t: 'mc', q: 'Wat is «een kinderkamer» (een soort kamer)?', o: ['çocuk odası', 'çocuğun odası', 'çocuk oda'], x: 'Zonder -in is het een soort; çocuğun odası is de kamer van dat ene kind.', tag: 'tr-samen' },
      { t: 'cloze', s: 'Çamaşır makine___ banyoda.', a: ['si'], o: ['si', 'i', 'nin'], nl: 'De wasmachine staat in de badkamer.', tag: 'tr-samen' },
      { t: 'mc', q: 'Hoe zeg je «mijn slaapkamer»?', o: ['yatak odam', 'yatak odasım', 'yatağım oda'], x: 'Er blijft maar één uitgang over: -m komt in de plaats van -sı.', tag: 'tr-samen' },
      { t: 'cloze', s: 'Anahtar masanın üstü___.', a: ['nde'], o: ['nde', 'de', 'nda'], nl: 'De sleutel ligt op de tafel.', x: 'Na de bezitsuitgang -ü komt een n vóór de naamval.', tag: 'tr-gen' },
      { t: 'cloze', s: 'Elif’in evi___ gidiyoruz.', a: ['ne'], o: ['ne', 'ye', 'e'], nl: 'We gaan naar het huis van Elif.', x: 'evi + n + e.', tag: 'tr-gen' },
      { t: 'cloze', s: 'Otobüs durağı okul___ yanında.', a: ['un'], o: ['un', 'u', 'da'], nl: 'De bushalte is naast de school.', tag: 'tr-gen' },
      { t: 'mc', q: 'Wat betekent «2+1» in een advertentie?', o: ['Twee slaapkamers en een woonkamer', 'Twee verdiepingen en een tuin', 'Twee maanden huur en een maand borg'], tag: 'vocab' },
      { t: 'tr', nl: 'Dit is de kamer van mijn broer.', a: ['Bu, kardeşimin odası.', 'Bu kardeşimin odası.', 'Bu abimin odası.', 'Bu, abimin odası.'], tag: 'tr-gen' },
      { t: 'tr', nl: 'Hoeveel is de huur van het appartement?', a: ['Dairenin kirası ne kadar?', 'Dairenin kirası kaç lira?'], tag: 'tr-gen' },
      { t: 'tr', nl: 'De kat zit onder de tafel.', a: ['Kedi masanın altında.'], tag: 'tr-gen' },
      { t: 'order', s: 'Komşumuzun bahçesi bizim bahçemizden daha büyük.', nl: 'De tuin van onze buren is groter dan onze tuin.', tag: 'tr-gen' },
      { t: 'match', p: [['mutfak', 'keuken'], ['banyo', 'badkamer'], ['yatak odası', 'slaapkamer'], ['kat', 'verdieping'], ['kira', 'huur'], ['komşu', 'buurman']], tag: 'vocab' }
    ],
    reading: {
      t: 'Kiralık daire', type: 'Advertentie',
      p: [
        ['Karşıyaka’da, denize beş dakika, kiralık 2+1 daire. Dördüncü kat, asansörlü.', 'In Karşıyaka, vijf minuten van de zee, appartement 2+1 te huur. Vierde verdieping, met lift.'],
        ['Oturma odası geniş ve aydınlık. Yatak odalarının biri balkonlu. Mutfağın eşyaları yeni: buzdolabı ve bulaşık makinesi var.', 'De woonkamer is ruim en licht. Eén van de slaapkamers heeft een balkon. De apparatuur in de keuken is nieuw: er is een koelkast en een vaatwasser.'],
        ['Binanın önünde otobüs durağı, arkasında küçük bir park var. Sokak sessiz, komşular yaşlı.', 'Voor het gebouw is een bushalte, erachter een klein park. De straat is stil, de buren zijn op leeftijd.'],
        ['Kira ayda on sekiz bin lira, depozito iki aylık. Öğrenciye verilmez. Ev sahibinin telefonu: 0532…', 'De huur is achttienduizend lira per maand, twee maanden borg. Niet voor studenten. Telefoon van de huisbaas: 0532…']
      ],
      gl: [['bina', 'gebouw'], ['yaşlı', 'oud (van mensen)'], ['verilmez', 'wordt niet gegeven']],
      q: [
        { t: 'mc', q: 'Daire kaçıncı katta?', o: ['Dördüncü katta', 'İkinci katta', 'Birinci katta'] },
        { t: 'mc', q: 'Binanın arkasında ne var?', o: ['Küçük bir park', 'Otobüs durağı', 'Deniz'] },
        { t: 'mc', q: 'Depozito kaç aylık?', o: ['İki aylık', 'Bir aylık', 'Üç aylık'] }
      ]
    },
    say: [['Bu kimin anahtarı?', 'Van wie is deze sleutel?'], ['Dairenin kirası ne kadar?', 'Hoeveel is de huur van het appartement?'], ['Yatak odası çok aydınlık.', 'De slaapkamer is heel licht.'], ['Anahtar masanın üstünde.', 'De sleutel ligt op de tafel.']],
    task: { nl: 'Beschrijf je huis in 5 zinnen: hoeveel kamers, wat er in de keuken of woonkamer staat (met plaatswoorden als üstünde, yanında), iets over de buren of de straat en wat je het mooiste vindt. Gebruik minstens twee keer -in … -i.', model: 'Dairem ikinci katta ve üç odası var. Oturma odasının penceresi çok büyük. Koltuğun yanında küçük bir masa var. Komşumun köpeği biraz gürültülü, ama sokak sessiz. Evin en güzel yeri balkon.' },
    scenario: { nl: 'Je zoekt een appartement in İzmir. Een makelaar laat je een woning zien.', role: 'You are Hakan Bey, a friendly estate agent in İzmir showing a 2+1 flat. Describe the rooms (yatak odası, oturma odası, mutfak, balkon), answer questions about whose the furniture is (ev sahibinin), the rent, the deposit, the bills and the neighbours. Ask what the learner is looking for. Use simple A2 Turkish with the polite siz form.', goal: 'Vraag naar de kamers, de huur en de borg en zeg wat je ervan vindt.' }
  });

  /* ───────────────────────── A2 · 6 ───────────────────────── */
  U({
    id: 'tr-a2-06', level: 'A2', icon: '🧸', title: 'Çocukken nasıldın?', nl: 'Vroeger: was, waren, er was',
    goals: ['Vertellen hoe iets of iemand vroeger was', '«Was» en «waren» maken met -di achter een naamwoord', 'Vardı en yoktu gebruiken voor «er was» en «ik had»', 'Over je kindertijd praten met çocukken en eskiden'],
    vocab: [
      ['çocukluk', 'kindertijd'], ['çocukken', 'toen ik (jij, hij) kind was'], ['eskiden', 'vroeger'], ['o zaman', 'toen / in die tijd'], ['yıllar önce', 'jaren geleden'], ['on yıl önce', 'tien jaar geleden'],
      ['köy', 'dorp'], ['mahalle', 'wijk / buurt'], ['oyuncak', 'speelgoed'], ['oyun', 'spel'], ['sınıf', 'klas'], ['ilkokul', 'basisschool'], ['lise', 'middelbare school'], ['not', 'cijfer / notitie'],
      ['yaramaz', 'ondeugend'], ['uslu', 'braaf'], ['utangaç', 'verlegen'], ['çalışkan', 'ijverig'], ['tembel', 'lui'], ['mutlu', 'gelukkig'], ['üzgün', 'verdrietig'], ['sıkıcı', 'saai'],
      ['neşeli', 'vrolijk'], ['zayıf', 'dun / zwak'], ['şişman', 'dik'], ['uzun boylu', 'lang (van mensen)'], ['kısa boylu', 'klein (van mensen)'], ['saç', 'haar'], ['hatırlamak', 'zich herinneren'], ['özlemek', 'missen'], ['büyümek', 'opgroeien / groeien']
    ],
    grammar: [
      { t: 'Was en waren: -di achter een naamwoord', es: 'İsim cümlelerinde geçmiş zaman',
        html: `<p>De verleden tijd van «zijn» is dezelfde <b>-di</b> die je van werkwoorden kent, nu achter een naamwoord of bijvoeglijk naamwoord: <i>hasta<b>ydı</b></i> (hij was ziek), <i>güzel<b>di</b></i> (het was mooi).</p>
<p>• na een <b>klinker</b> komt er een <b>y</b> tussen: <i>hasta-<b>y</b>-dım</i>, <i>evde-<b>y</b>-din</i>, <i>mutlu-<b>y</b>-duk</i><br>• na een <b>medeklinker</b> direct -di: <i>öğretmen-<b>dim</b></i>, <i>güzel-<b>di</b></i>, <i>yorgun-<b>duk</b></i><br>• na een <b>harde</b> medeklinker (p, ç, t, k, f, h, s, ş) wordt het <b>-ti</b>: <i>genç-<b>tim</b></i>, <i>küçük-<b>tü</b></i>, <i>yaramaz-<b>dı</b></i> maar <i>utangaç-<b>tı</b></i></p>
<p>De persoonsuitgangen zijn die van de verleden tijd: <b>-m, -n, –, -k, -niz, -ler</b>.</p>
<p><b>Ontkenning</b> met <i>değil</i>: <i>Hasta <b>değildim</b>.</i> (Ik was niet ziek.) <b>Vraag</b>: <i>mi</i> + y + di, los geschreven: <i>Evde <b>miydin</b>?</i> (Was je thuis?) · <i>Film güzel <b>miydi</b>?</i></p>`,
        table: [['', 'hasta (klinker)', 'öğretmen', 'küçük (hard)'], ['ben', 'hastaydım', 'öğretmendim', 'küçüktüm'], ['sen', 'hastaydın', 'öğretmendin', 'küçüktün'], ['o', 'hastaydı', 'öğretmendi', 'küçüktü'],
          ['biz', 'hastaydık', 'öğretmendik', 'küçüktük'], ['siz', 'hastaydınız', 'öğretmendiniz', 'küçüktünüz'], ['onlar', 'hastaydılar', 'öğretmendiler', 'küçüktüler']],
        sum: 'Hastaydım, güzeldi, küçüktük, değildi.',
        ex: [['Dün çok yorgundum.', 'Gisteren was ik erg moe.'], ['Hava çok güzeldi.', 'Het weer was heel mooi.'], ['Dün akşam neredeydin?', 'Waar was je gisteravond?'], ['Sınav zor değildi.', 'Het examen was niet moeilijk.']] },
      { t: 'Er was, ik had: vardı en yoktu', es: 'Vardı / yoktu',
        html: `<p><b>Var</b> en <b>yok</b> krijgen dezelfde uitgang: <i>var<b>dı</b></i> (er was / er waren), <i>yok<b>tu</b></i> (er was niet). Na de harde k van <i>yok</i> is het -tu.</p>
<p><i>Mahallede büyük bir park <b>vardı</b>.</i> (In de wijk was een groot park.) · <i>O zaman internet <b>yoktu</b>.</i> (Toen was er geen internet.)</p>
<p>Met een bezitsuitgang betekent het «ik had»: <i>Bir köpeğ<b>im vardı</b>.</i> (Ik had een hond.) · <i>Çok oyuncağ<b>ımız yoktu</b>.</i> (We hadden niet veel speelgoed.) · <i>Araba<b>nız var mıydı</b>?</i> (Hadden jullie een auto?)</p>
<p>Handige tijdwoorden: <b>eskiden</b> (vroeger), <b>o zaman</b> (toen), <b>geçen yıl</b> (vorig jaar), <b>iki yıl önce</b> (twee jaar geleden). Let op: bij «geleden» staat <i>önce</i> <b>achter</b> de tijd.</p>`,
        table: [['nu', 'vroeger'], ['var', 'vardı'], ['yok', 'yoktu'], ['var mı?', 'var mıydı?'], ['Bir kedim var.', 'Bir kedim vardı.'], ['Zamanım yok.', 'Zamanım yoktu.']],
        sum: 'Vardı, yoktu, var mıydı?',
        ex: [['Evimizin büyük bir bahçesi vardı.', 'Ons huis had een grote tuin.'], ['Dün hiç zamanım yoktu.', 'Gisteren had ik helemaal geen tijd.'], ['Sınıfta kaç öğrenci vardı?', 'Hoeveel leerlingen waren er in de klas?']] },
      { t: 'Toen ik kind was: -ken', es: '-ken',
        html: `<p>Met <b>-ken</b> achter een naamwoord zeg je «toen … was»: <i>çocuk<b>ken</b></i> (toen ik kind was), <i>öğrenci<b>yken</b></i> (toen ik student was), <i>genç<b>ken</b></i> (toen ik jong was), <i>Türkiye’de<b>yken</b></i> (toen ik in Turkije was). Na een klinker komt er een y tussen.</p>
<p><b>-ken</b> krijgt <b>geen persoonsuitgang</b>. Wie bedoeld wordt, blijkt uit de rest van de zin: <i>Çocukken çok yaramaz<b>dım</b>.</i> (Toen ik kind was…) · <i>Çocukken çok yaramaz<b>dın</b>.</i> (Toen jij kind was…) Voor de duidelijkheid kun je <i>ben</i> of <i>sen</i> ervoor zetten: <i><b>Ben</b> çocukken burada park yoktu.</i></p>
<p><b>⚠️ Uitzondering:</b> <b>-ken</b> doet niet mee aan de klinkerharmonie: het is <i>çocuk<b>ken</b></i> en <i>okulda<b>yken</b></i>, nooit <s>çocukkan</s> of <s>okuldaykan</s>. <b>Waarom?</b> <i>-ken</i> is een afgesleten los woord: <i>iken</i> (terwijl … zijnde). Je mag het nog steeds los schrijven: <i>çocuk iken</i>. Een los woord heeft zijn eigen klinkers en past zich niet aan. Dezelfde reden als bij <i>-yor</i> in <i>geliyor</i>.</p>`,
        table: [['woord', 'met -ken', 'betekenis'], ['çocuk', 'çocukken', 'toen … kind was'], ['genç', 'gençken', 'toen … jong was'], ['öğrenci', 'öğrenciyken', 'toen … student was'], ['evde', 'evdeyken', 'toen … thuis was'], ['küçük', 'küçükken', 'toen … klein was']],
        sum: 'Çocukken, gençken, öğrenciyken.',
        ex: [['Çocukken çok utangaçtım.', 'Als kind was ik erg verlegen.'], ['Öğrenciyken Ankara’da yaşıyordum.', 'Toen ik student was, woonde ik in Ankara.'], ['Annem gençken çok güzeldi.', 'Mijn moeder was heel mooi toen ze jong was.']] }
    ],
    dialogue: {
      t: 'Oude foto’s', place: 'Konya 🇹🇷',
      lines: [
        ['Noor', 'Bu fotoğraftaki küçük çocuk kim? Sen misin?', 'Wie is dat kleine kind op deze foto? Ben jij dat?'],
        ['Mert', 'Evet, benim! Beş yaşındaydım. Çok yaramazdım.', 'Ja, dat ben ik! Ik was vijf jaar. Ik was heel ondeugend.'],
        ['Noor', 'Saçların sarıydı! Şimdi siyah.', 'Je haar was blond! Nu is het zwart.'],
        ['Mert', 'Evet, çocukken sarıydı. Bu da bizim eski evimiz, köydeydi.', 'Ja, als kind was het blond. En dit is ons oude huis, het stond in het dorp.'],
        ['Noor', 'Büyük müydü?', 'Was het groot?'],
        ['Mert', 'Hayır, küçüktü, ama çok büyük bir bahçesi vardı.', 'Nee, het was klein, maar het had een heel grote tuin.'],
        ['Noor', 'Köyde okul var mıydı?', 'Was er een school in het dorp?'],
        ['Mert', 'İlkokul vardı, ama lise yoktu. Sınıfta sadece on öğrenci vardı.', 'Er was een basisschool, maar geen middelbare school. In de klas zaten maar tien leerlingen.'],
        ['Noor', 'Okulda nasıldın? Çalışkan mıydın?', 'Hoe was je op school? Was je ijverig?'],
        ['Mert', 'Hiç değildim! Çok tembeldim, ama öğretmenim çok iyiydi.', 'Helemaal niet! Ik was heel lui, maar mijn leraar was erg aardig.'],
        ['Noor', 'Köyü özlüyor musun?', 'Mis je het dorp?'],
        ['Mert', 'Evet, bazen çok özlüyorum.', 'Ja, soms mis ik het erg.']
      ],
      q: [
        { t: 'mc', q: 'Mert çocukken nasıldı?', o: ['Yaramazdı', 'Usluydu', 'Utangaçtı'] },
        { t: 'mc', q: 'Eski evin nesi vardı?', o: ['Büyük bir bahçesi', 'Büyük bir balkonu', 'Asansörü'] },
        { t: 'mc', q: 'Köyde ne yoktu?', o: ['Lise', 'İlkokul', 'Bahçe'] }
      ]
    },
    culture: { t: 'Het dorp, en spelen op straat', html: `<p>Veel stadse Turken hebben een <b>memleket</b>: de plek waar de familie vandaan komt, vaak een dorp in Anatolië of aan de Zwarte Zee. De vraag <i>Memleket neresi?</i> (Waar kom je oorspronkelijk vandaan?) hoor je bij elke kennismaking, en het antwoord is zelden «İstanbul», ook al woont de familie er al drie generaties.</p>
<p>In de zomer en met de feestdagen gaat iedereen terug <i>köye</i> (naar het dorp), naar opa en oma. Wie in de jaren tachtig en negentig opgroeide, vertelt graag over spelen op straat: <b>saklambaç</b> (verstoppertje), <b>ip atlama</b> (touwtjespringen), <b>misket</b> (knikkeren) en <b>beş taş</b> (bikkelen met vijf steentjes).</p>
<p>📺 Het bijbehorende zinnetje is <i>Nerede o eski günler!</i> (Waar zijn die goede oude tijden!)</p>` },
    ex: [
      { t: 'cloze', s: 'Dün çok yorgun___.', h: 'ik', a: ['dum'], o: ['dum', 'dım', 'tum'], nl: 'Gisteren was ik erg moe.', tag: 'tr-idi' },
      { t: 'cloze', s: 'Geçen hafta hasta___.', h: 'hij', a: ['ydı'], o: ['ydı', 'dı', 'ydi'], nl: 'Vorige week was hij ziek.', x: 'Na een klinker komt er een y tussen.', tag: 'tr-idi' },
      { t: 'cloze', s: 'Ev küçük___.', a: ['tü'], o: ['tü', 'dü', 'ydü'], nl: 'Het huis was klein.', x: 'Na de harde k wordt -dü → -tü.', tag: 'tr-idi' },
      { t: 'cloze', s: 'Dün akşam evde ___?', h: 'jij', a: ['miydin'], o: ['miydin', 'mıydın', 'midin'], nl: 'Was je gisteravond thuis?', tag: 'tr-idi' },
      { t: 'cloze', s: 'Film güzel ___.', h: 'was niet', a: ['değildi'], o: ['değildi', 'yoktu', 'değil'], nl: 'De film was niet mooi.', tag: 'tr-idi' },
      { t: 'cloze', s: 'Köyde lise ___.', h: 'er was geen', a: ['yoktu'], o: ['yoktu', 'yokdu', 'değildi'], nl: 'In het dorp was geen middelbare school.', tag: 'tr-idi' },
      { t: 'cloze', s: 'Bir köpeğim ___.', h: 'ik had', a: ['vardı'], o: ['vardı', 'vardım', 'vartı'], nl: 'Ik had een hond.', x: 'Het bezit zit in köpeğim; vardı blijft in de derde persoon.', tag: 'tr-idi' },
      { t: 'mc', q: 'Hoe zeg je «toen ik kind was»?', o: ['çocukken', 'çocukkan', 'çocukdum'], x: '⚠️ Uitzondering: -ken doet niet mee aan de klinkerharmonie, want het is het afgesleten losse woord iken.', tag: 'tr-ken' },
      { t: 'mc', q: 'Hoe zeg je «toen ik op school zat»?', o: ['okuldayken', 'okuldaykan', 'okuldaken'], x: '⚠️ Uitzondering: altijd -ken, ook na a. Na een klinker komt er wel een y tussen.', tag: 'tr-ken' },
      { t: 'mc', q: 'Hoe zeg je «twee jaar geleden»?', o: ['iki yıl önce', 'önce iki yıl', 'iki yıldan'], tag: 'tr-tijd' },
      { t: 'mc', q: 'Wat is het tegenovergestelde van «tembel»?', o: ['çalışkan', 'yaramaz', 'üzgün'], tag: 'vocab' },
      { t: 'tr', nl: 'Als kind was ik erg verlegen.', a: ['Çocukken çok utangaçtım.', 'Ben çocukken çok utangaçtım.'], tag: 'tr-ken' },
      { t: 'tr', nl: 'Waar was je gisteren?', a: ['Dün neredeydin?', 'Dün nerdeydin?'], tag: 'tr-idi' },
      { t: 'tr', nl: 'Het weer was heel mooi.', a: ['Hava çok güzeldi.'], tag: 'tr-idi' },
      { t: 'order', s: 'Eskiden mahallemizde büyük bir park vardı.', nl: 'Vroeger was er in onze wijk een groot park.', tag: 'tr-idi' },
      { t: 'match', p: [['yaramaz', 'ondeugend'], ['uslu', 'braaf'], ['utangaç', 'verlegen'], ['tembel', 'lui'], ['mutlu', 'gelukkig'], ['üzgün', 'verdrietig']], tag: 'vocab' }
    ],
    reading: {
      t: 'Benim çocukluğum', type: 'Column',
      p: [
        ['Ben küçük bir köyde büyüdüm. Köyümüz Karadeniz’deydi ve her yer yeşildi.', 'Ik ben opgegroeid in een klein dorp. Ons dorp lag aan de Zwarte Zee en alles was groen.'],
        ['Evimiz eskiydi, ama çok sıcaktı. Televizyonumuz vardı, ama internet yoktu. Telefon bile yoktu!', 'Ons huis was oud, maar heel warm. We hadden een televisie, maar er was geen internet. Er was zelfs geen telefoon!'],
        ['Çocukken çok mutluydum. Arkadaşlarım hep sokaktaydı. En sevdiğimiz oyun saklambaçtı.', 'Als kind was ik heel gelukkig. Mijn vrienden waren altijd op straat. Ons lievelingsspel was verstoppertje.'],
        ['Şimdi İstanbul’da yaşıyorum. Burada her şey var, ama bazen o sessiz köyü çok özlüyorum.', 'Nu woon ik in İstanbul. Hier is alles, maar soms mis ik dat stille dorp heel erg.']
      ],
      gl: [['Karadeniz', 'Zwarte Zee'], ['bile', 'zelfs'], ['en sevdiğimiz', 'onze favoriete'], ['saklambaç', 'verstoppertje']],
      q: [
        { t: 'mc', q: 'Köy neredeydi?', o: ['Karadeniz’de', 'İstanbul’da', 'Ankara’da'] },
        { t: 'mc', q: 'Evde ne yoktu?', o: ['İnternet', 'Televizyon', 'Oyun'] },
        { t: 'mc', q: 'Çocukların en sevdiği oyun neydi?', o: ['Saklambaç', 'Futbol', 'Satranç'] }
      ]
    },
    say: [['Çocukken çok utangaçtım.', 'Als kind was ik erg verlegen.'], ['Dün akşam neredeydin?', 'Waar was je gisteravond?'], ['Bir köpeğim vardı.', 'Ik had een hond.'], ['Hava çok güzeldi.', 'Het weer was heel mooi.']],
    task: { nl: 'Schrijf 5 zinnen over je kindertijd: waar je woonde, hoe je huis of school was, wat je wel en niet had (vardı / yoktu) en hoe je zelf als kind was. Begin minstens één zin met Çocukken.', model: 'Çocukken küçük bir şehirde yaşıyordum. Evimiz büyük değildi, ama bahçesi vardı. Bir kedim ve iki balığım vardı. Okulda çok utangaçtım ve çalışkandım. O zaman telefonum yoktu, ama çok mutluydum.' },
    scenario: { nl: 'Mert laat je oude familiefoto’s zien en wil ook alles over jouw kindertijd weten.', role: 'You are Mert, a nostalgic friend from Konya showing old family photos. Tell about your childhood in the village with -ydi, vardı and yoktu, then ask the learner about theirs (Çocukken nasıldın? Nerede yaşıyordun? Eviniz büyük müydü? Hayvanın var mıydı?). React warmly. Use simple A2 Turkish.', goal: 'Vertel hoe je als kind was, waar je woonde en wat je had.' }
  });
})(window.SPT);
