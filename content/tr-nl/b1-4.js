/* Turks voor Nederlandstaligen — niveau B1, units 7–8 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── B1 · 7 ───────────────────────── */
  U({
    id: 'tr-b1-07', level: 'B1', icon: '🍃', title: 'Çay nasıl yapılır?', nl: 'Hoe iets gemaakt wordt: de lijdende vorm',
    goals: ['Beschrijven hoe iets gemaakt, gebouwd of geregeld wordt', 'De lijdende vorm maken met -il, -in en -n', 'Zeggen door wie iets gedaan is met tarafından', 'Bordjes en algemene regels begrijpen (Girilmez, Sigara içilmez)'],
    vocab: [
      ['üretmek', 'produceren'], ['yetiştirmek', 'verbouwen / kweken'], ['hasat', 'oogst'], ['tarla', 'akker'], ['yaprak', 'blad'], ['kurutmak', 'drogen'], ['paketlemek', 'verpakken'],
      ['ihraç etmek', 'exporteren'], ['ithal etmek', 'importeren'], ['fabrika', 'fabriek'], ['işçi', 'arbeider'], ['ürün', 'product'], ['kalite', 'kwaliteit'], ['el yapımı', 'handgemaakt'],
      ['dokumak', 'weven'], ['ipek', 'zijde'], ['yün', 'wol'], ['pamuk', 'katoen'], ['bakır', 'koper'], ['zanaat', 'ambacht'], ['atölye', 'werkplaats'],
      ['inşa etmek', 'bouwen'], ['kurmak', 'oprichten / opzetten'], ['keşfetmek', 'ontdekken'], ['icat etmek', 'uitvinden'], ['tarafından', 'door (iemand)'], ['yüzyıl', 'eeuw'],
      ['satılık', 'te koop'], ['seramik', 'keramiek'], ['demlemek', '(thee) laten trekken'], ['bölge', 'streek / regio']
    ],
    grammar: [
      { t: 'De lijdende vorm: -il, -in, -n', es: 'Edilgen çatı',
        html: `<p>In het Nederlands zeg je «de thee <b>wordt geplukt</b>». Het Turks heeft daar geen hulpwerkwoord voor, maar een <b>achtervoegsel direct achter de stam</b>, vóór de tijd:</p>
<p>• na een <b>medeklinker</b>: <b>-il</b> (ıl, il, ul, ül): <i>yap-<b>ıl</b>-mak</i> (gemaakt worden), <i>sat-<b>ıl</b>-mak</i>, <i>ver-<b>il</b>-mek</i>, <i>gör-<b>ül</b>-mek</i>, <i>kurut-<b>ul</b>-mak</i>.<br>• na een <b>klinker</b>: <b>-n</b>: <i>oku-<b>n</b>-mak</i> (gelezen worden), <i>topla-<b>n</b>-mak</i>, <i>bekle-<b>n</b>-mek</i>, <i>de-<b>n</b>-mek</i>, <i>ye-<b>n</b>-mek</i>.</p>
<p>Daarna komt de gewone tijd: <i>Çay Rize’de yetiştir<b>il</b>ir.</i> (Thee wordt in Rize verbouwd.) · <i>Köprü 1973’te yap<b>ıl</b>dı.</i> (De brug is in 1973 gebouwd.) · <i>Yeni bir okul aç<b>ıl</b>acak.</i> · <i>Bu kitap çok oku<b>n</b>uyor.</i></p>
<p>Wat in de gewone zin het lijdend voorwerp was (met -i), wordt nu onderwerp en <b>verliest zijn -i</b>: <i>Çay<b>ı</b> topluyorlar.</i> → <i>Çay toplanıyor.</i></p>
<p>Bij werkwoorden met <b>etmek</b> wordt dat <b>edilmek</b>: <i>ihraç <b>edilir</b></i>, <i>inşa <b>edildi</b></i>, <i>kabul <b>edilmedi</b></i>. Bij <b>yapmak</b>-combinaties: <i>park <b>yapılmaz</b></i>.</p>
<p><b>⚠️ Uitzondering:</b> eindigt de stam op een <b>l</b>, dan komt er <b>-in</b> en niet -il: <i>bul-<b>un</b>-mak</i> (gevonden worden, zich bevinden), <i>al-<b>ın</b>-mak</i> (genomen/gekocht worden), <i>bil-<b>in</b>-mek</i> (bekend zijn), <i>sil-<b>in</b>-mek</i>, <i>böl-<b>ün</b>-mek</i>. Dus <i>Bilet gişeden al<b>ın</b>ır</i>, niet <s>alılır</s>. <b>Waarom?</b> Twee keer een l zo dicht na elkaar (<i>al-ıl</i>) spreekt moeilijk uit; het Turks wisselt de tweede l daarom om voor een n. Zo’n ontwijkende klank heet dissimilatie.</p>`,
        table: [['stam eindigt op', 'vorm', 'voorbeeld'], ['medeklinker', '-il', 'yapılır · satılır · görülür'], ['klinker', '-n', 'okunur · toplanır · denir'], ['l ⚠️', '-in', 'bulunur · alınır · bilinir'], ['etmek', 'edilmek', 'ihraç edilir · inşa edildi']],
        sum: 'Yapılır, okunur, alınır.',
        ex: [['Türkiye’de çok çay içilir.', 'In Turkije wordt veel thee gedronken.'], ['Yapraklar elle toplanır.', 'De bladeren worden met de hand geplukt.'], ['Biletler internetten alınır.', 'De kaartjes worden via internet gekocht.'], ['Bu cami on altıncı yüzyılda inşa edildi.', 'Deze moskee is in de zestiende eeuw gebouwd.']] },
      { t: 'Door wie? tarafından', es: 'Tarafından',
        html: `<p>Meestal noem je in een lijdende zin <b>niet</b> wie het doet: daar is die vorm juist voor. Wil je het toch zeggen, gebruik dan <b>tarafından</b> (letterlijk «van de kant van») <b>achter</b> de naam:</p>
<p><i>Bu roman Orhan Pamuk <b>tarafından</b> yazıldı.</i> (Deze roman is door Orhan Pamuk geschreven.) · <i>Selimiye Camii Mimar Sinan <b>tarafından</b> yapıldı.</i></p>
<p>Bij voornaamwoorden staat de bezitsvorm erin: <i>ben<b>im</b> taraf<b>ım</b>dan</i> (door mij), <i>sen<b>in</b> taraf<b>ın</b>dan</i>, <i>on<b>un</b> tarafından</i>, <i>biz<b>im</b> taraf<b>ımız</b>dan</i>.</p>
<p>Bij instanties en oorzaken gebruikt het Turks liever <b>-ce</b> of <b>-den</b>: <i>Karar hükümet<b>çe</b> alındı.</i> (Het besluit is door de regering genomen.) · <i>Ev deprem<b>den</b> yıkıldı.</i> (Het huis is door de aardbeving ingestort.)</p>
<p>In gewone spreektaal klinkt <i>tarafından</i> al snel stijf. Zeg dan liever de bedrijvende zin: <i>Bu romanı Orhan Pamuk yazdı.</i> Door de naam vlak voor het werkwoord te zetten, krijgt die vanzelf de nadruk.</p>`,
        table: [['Turks', 'Nederlands'], ['Mimar Sinan tarafından', 'door Mimar Sinan'], ['benim tarafımdan', 'door mij'], ['bizim tarafımızdan', 'door ons'], ['hükümetçe', 'door de regering'], ['depremden', 'door de aardbeving']],
        sum: 'Orhan Pamuk tarafından yazıldı.',
        ex: [['Telefon kim tarafından icat edildi?', 'Door wie is de telefoon uitgevonden?'], ['Bu halı annem tarafından dokundu.', 'Dit tapijt is door mijn moeder geweven.'], ['Şirket 1950’de dedem tarafından kuruldu.', 'Het bedrijf is in 1950 door mijn opa opgericht.']] },
      { t: 'Men doet dat (niet): bordjes en regels', es: 'Genel kurallar: -ilir, -ilmez',
        html: `<p>Het Turks kan ook werkwoorden <b>zonder lijdend voorwerp</b> in deze vorm zetten. Dat betekent dan «<b>men</b>»: <i>Buradan gir<b>il</b>ir.</i> (Men gaat hier naar binnen: ingang.) · <i>Bu yoldan gid<b>il</b>mez.</i> (Langs deze weg ga je niet.) · <i>Türkiye’de geç yemek ye<b>n</b>ir.</i> (In Turkije eet men laat.)</p>
<p>Daarom staan bordjes en regels bijna altijd in de <b>brede tijd van de lijdende vorm</b>:<br>🚫 <i>Gir<b>ilmez</b></i> (verboden toegang) · <i>Sigara iç<b>ilmez</b></i> (verboden te roken) · <i>Park yap<b>ılmaz</b></i> (verboden te parkeren) · <i>Çimlere bas<b>ılmaz</b></i> (niet op het gras lopen).</p>
<p>Recepten en gebruiksaanwijzingen ook: <i>Su kaynat<b>ılır</b>, çay demle<b>nir</b>, on beş dakika bekle<b>nir</b>.</i></p>
<p>Zo vraag je naar een woord of een gewoonte: <i>Bu Türkçede nasıl <b>denir</b>?</i> (Hoe zeg je dit in het Turks?) · <i>Bu nasıl <b>yazılır</b>?</i> (Hoe schrijf je dit?) · <i>Bu nasıl <b>yenir</b>?</i> (Hoe eet je dit?) · <i>Oraya nasıl <b>gidilir</b>?</i> (Hoe kom je daar?)</p>
<p>Het deelwoord <b>-miş</b> na de lijdende vorm is «ge-…»: <i>yap<b>ılmış</b></i> (gemaakt), <i>el ile dokun<b>muş</b> halı</i>, <i>kapat<b>ılmış</b> yol</i> (afgesloten weg). <b>Satılık</b> (te koop) en <b>kiralık</b> (te huur) zijn vaste bordjeswoorden met -lik.</p>`,
        table: [['bordje', 'betekenis'], ['Girilmez', 'verboden toegang'], ['Sigara içilmez', 'verboden te roken'], ['Park yapılmaz', 'verboden te parkeren'], ['Nasıl denir?', 'Hoe zeg je dat?'], ['Satılık · Kiralık', 'te koop · te huur']],
        sum: 'Girilmez. Nasıl denir?',
        ex: [['Burada sigara içilmez.', 'Hier wordt niet gerookt.'], ['«Bedankt» Türkçede nasıl denir?', 'Hoe zeg je «bedankt» in het Turks?'], ['Havalimanına nasıl gidilir?', 'Hoe kom je bij het vliegveld?']] }
    ],
    dialogue: {
      t: 'Rondleiding in de theefabriek', place: 'Rize 🇹🇷',
      lines: [
        ['Rehber', 'Hoş geldiniz! Türkiye’de içilen çayın büyük kısmı bu bölgede yetiştirilir.', 'Welkom! Het grootste deel van de thee die in Turkije gedronken wordt, wordt in deze streek verbouwd.'],
        ['Lotte', 'Çay ne zaman toplanır?', 'Wanneer wordt de thee geplukt?'],
        ['Rehber', 'Mayıstan ekime kadar, yılda üç kez. Yapraklar hâlâ elle ya da makasla kesilir.', 'Van mei tot oktober, drie keer per jaar. De bladeren worden nog steeds met de hand of met de schaar geknipt.'],
        ['Lotte', 'Sonra ne yapılır?', 'Wat gebeurt er daarna?'],
        ['Rehber', 'Yapraklar aynı gün fabrikaya getirilir. Önce bekletilir, sonra kıvrılır ve kurutulur.', 'De bladeren worden dezelfde dag naar de fabriek gebracht. Eerst laat men ze liggen, daarna worden ze gerold en gedroogd.'],
        ['Lotte', 'Bu fabrika ne zaman kuruldu?', 'Wanneer is deze fabriek opgericht?'],
        ['Rehber', '1947’de açıldı. Bölgedeki ilk çay fabrikası.', 'Hij is in 1947 geopend. De eerste theefabriek van de streek.'],
        ['Lotte', 'Çay yurt dışına da satılıyor mu?', 'Wordt de thee ook aan het buitenland verkocht?'],
        ['Rehber', 'Biraz ihraç ediliyor, ama çoğu Türkiye’de içilir. Kişi başına yılda üç kilodan fazla!', 'Er wordt een beetje geëxporteerd, maar het meeste wordt in Turkije gedronken. Meer dan drie kilo per persoon per jaar!'],
        ['Lotte', 'İnanılmaz. Peki iyi bir çay nasıl demlenir?', 'Ongelooflijk. En hoe zet je goede thee?'],
        ['Rehber', 'Acele edilmez! En az on beş dakika beklenir. Buyurun, tadın.', 'Je haast je niet! Je wacht minstens een kwartier. Alstublieft, proeft u maar.']
      ],
      q: [
        { t: 'mc', q: 'Çay yılda kaç kez toplanır?', o: ['Üç kez', 'Bir kez', 'On kez'] },
        { t: 'mc', q: 'Fabrika ne zaman açıldı?', o: ['1947’de', '1973’te', '1923’te'] },
        { t: 'mc', q: 'Çayın çoğu nerede içilir?', o: ['Türkiye’de', 'Yurt dışında', 'Sadece Rize’de'] }
      ]
    },
    culture: { t: 'Thee uit Rize en het dubbele kannetje', html: `<p>Wie aan Turkije denkt, denkt aan koffie, maar het land drinkt vooral <b>çay</b>: per persoon meer dan waar ook ter wereld. Toch is thee hier jong. Pas in de jaren twintig en dertig van de vorige eeuw werd hij aangeplant op de steile, regenachtige hellingen bij <b>Rize</b> aan de Zwarte Zee, toen koffie na het verlies van Jemen duur was geworden.</p>
<p>Thee wordt gezet in een <b>çaydanlık</b>: twee kannetjes op elkaar. Onderin kookt water, bovenin trekt een sterk aftreksel (<i>dem</i>). In het tulpvormige glas, de <b>ince belli bardak</b>, schenk je eerst dem en leng je aan met heet water. Je bestelt <b>açık</b> (licht) of <b>koyu</b> (donker); de mooiste kleur heet <i>tavşan kanı</i>, konijnenbloed.</p>
<p>🍵 Melk gaat er nooit in. Wil je niet meer, leg dan je lepeltje dwars over het glas: anders wordt er zonder vragen bijgeschonken.</p>` },
    ex: [
      { t: 'cloze', s: 'Türkiye’de çok çay iç___.', h: 'wordt', a: ['ilir'], o: ['ilir', 'inir', 'er'], nl: 'In Turkije wordt veel thee gedronken.', tag: 'tr-passief' },
      { t: 'cloze', s: 'Bu köprü 1973’te yap___.', h: 'is ge-', a: ['ıldı'], o: ['ıldı', 'tı', 'ındı'], nl: 'Deze brug is in 1973 gebouwd.', tag: 'tr-passief' },
      { t: 'cloze', s: 'Yapraklar elle topla___.', h: 'worden', a: ['nır'], o: ['nır', 'lır', 'r'], nl: 'De bladeren worden met de hand geplukt.', x: 'Na een klinker is de lijdende vorm alleen -n: topla-n-ır.', tag: 'tr-passief' },
      { t: 'mc', q: 'Hoe zeg je «De kaartjes worden bij de kassa gekocht»?', o: ['Biletler gişeden alınır.', 'Biletler gişeden alılır.', 'Biletler gişeden alır.'], x: '⚠️ Uitzondering: na een stam op l komt -in, niet -il (al-ın-). Twee l’en vlak na elkaar worden vermeden.', tag: 'tr-passief' },
      { t: 'cloze', s: 'Anahtar masanın altında bul___du.', h: 'ge-', a: ['un'], o: ['un', 'ul', 'ün'], nl: 'De sleutel is onder de tafel gevonden.', x: '⚠️ Uitzondering: bul- eindigt op l, dus -un en niet -ul.', tag: 'tr-passief' },
      { t: 'cloze', s: 'Çay yurt dışına ihraç ___.', h: 'wordt', a: ['edilir'], o: ['edilir', 'eder', 'edinir'], nl: 'De thee wordt naar het buitenland geëxporteerd.', tag: 'tr-passief' },
      { t: 'cloze', s: 'Bu roman Orhan Pamuk ___ yazıldı.', h: 'door', a: ['tarafından'], o: ['tarafından', 'için', 'ile'], nl: 'Deze roman is door Orhan Pamuk geschreven.', tag: 'tr-passief' },
      { t: 'mc', q: 'Wat betekent het bordje «Girilmez»?', o: ['Verboden toegang', 'Ingang', 'Uitverkocht'], tag: 'tr-passief' },
      { t: 'mc', q: 'Je wilt weten hoe je een woord in het Turks zegt. Wat vraag je?', o: ['Bu Türkçede nasıl denir?', 'Bu Türkçede nasıl der?', 'Bu Türkçede ne dedi?'], tag: 'tr-passief' },
      { t: 'cloze', s: 'Burada sigara iç___.', h: 'wordt niet', a: ['ilmez'], o: ['ilmez', 'mez', 'ilir'], nl: 'Hier wordt niet gerookt.', tag: 'tr-passief' },
      { t: 'mc', q: 'Maak lijdend: «Çayı topluyorlar.»', o: ['Çay toplanıyor.', 'Çayı toplanıyor.', 'Çay topluyor.'], x: 'Het lijdend voorwerp wordt onderwerp en verliest zijn -ı.', tag: 'tr-passief' },
      { t: 'mc', q: 'Wat betekent «kiralık»?', o: ['te huur', 'te koop', 'gesloten'], tag: 'vocab' },
      { t: 'tr', nl: 'Wanneer is deze moskee gebouwd?', a: ['Bu cami ne zaman yapıldı?', 'Bu cami ne zaman inşa edildi?'], tag: 'tr-passief' },
      { t: 'tr', nl: 'Hoe schrijf je dit?', a: ['Bu nasıl yazılır?', 'Bu nasıl yazılıyor?'], tag: 'tr-passief' },
      { t: 'tr', nl: 'De winkel wordt om negen uur geopend.', a: ['Dükkân saat dokuzda açılır.', 'Dükkân dokuzda açılır.', 'Dükkân saat dokuzda açılıyor.', 'Mağaza saat dokuzda açılır.', 'Mağaza dokuzda açılır.'], tag: 'tr-passief' },
      { t: 'order', s: 'Türkiye’de içilen çayın çoğu Rize’de yetiştirilir.', nl: 'Het grootste deel van de thee die in Turkije gedronken wordt, wordt in Rize verbouwd.', tag: 'tr-passief' },
      { t: 'match', p: [['fabrika', 'fabriek'], ['ürün', 'product'], ['ipek', 'zijde'], ['yün', 'wol'], ['yüzyıl', 'eeuw'], ['tarla', 'akker']], tag: 'vocab' }
    ],
    reading: {
      t: 'Bir Hereke halısı nasıl dokunur?', type: 'Museumtekst',
      p: [
        ['Hereke halıları dünyanın en ince halıları arasında sayılır. İlk atölye 1843’te Sultan Abdülmecid tarafından kuruldu.', 'Hereke-tapijten worden tot de fijnste tapijten ter wereld gerekend. De eerste werkplaats is in 1843 door sultan Abdülmecid opgericht.'],
        ['Halılar yün, pamuk ya da ipekten yapılır. İpek bir halıda bir santimetrekareye yüz düğüm atılır.', 'De tapijten worden van wol, katoen of zijde gemaakt. In een zijden tapijt worden honderd knopen per vierkante centimeter gelegd.'],
        ['Önce desen kâğıda çizilir ve iplikler doğal boyalarla boyanır. Sonra halı düğüm düğüm elle dokunur. Büyük bir halı bir yılda bile bitirilemez.', 'Eerst wordt het patroon op papier getekend en worden de draden met natuurlijke kleurstoffen geverfd. Daarna wordt het tapijt knoop voor knoop met de hand geweven. Een groot tapijt krijg je zelfs in een jaar niet af.'],
        ['Bugün Hereke halıları saraylarda ve müzelerde görülür. Dolmabahçe Sarayı’ndaki halıların çoğu burada dokundu.', 'Tegenwoordig zijn Hereke-tapijten te zien in paleizen en musea. De meeste tapijten in het Dolmabahçe-paleis zijn hier geweven.']
      ],
      gl: [['sayılmak', 'gerekend worden tot'], ['düğüm', 'knoop'], ['desen', 'patroon'], ['iplik', 'draad'], ['saray', 'paleis']],
      q: [
        { t: 'mc', q: 'İlk atölye kim tarafından kuruldu?', o: ['Sultan Abdülmecid tarafından', 'Mimar Sinan tarafından', 'Bir Hollandalı tarafından'] },
        { t: 'mc', q: 'İpek bir halıda bir santimetrekareye kaç düğüm atılır?', o: ['Yüz', 'On', 'Bin'] },
        { t: 'mc', q: 'Halılar nasıl dokunur?', o: ['Elle, düğüm düğüm', 'Makineyle, bir günde', 'Fabrikada, plastikten'] }
      ]
    },
    say: [['Türkiye’de çok çay içilir.', 'In Turkije wordt veel thee gedronken.'], ['Bu köprü ne zaman yapıldı?', 'Wanneer is deze brug gebouwd?'], ['Bu Türkçede nasıl denir?', 'Hoe zeg je dit in het Turks?'], ['Burada sigara içilmez.', 'Hier wordt niet gerookt.']],
    task: { nl: 'Beschrijf in 5 of 6 zinnen hoe iets typisch Nederlands gemaakt wordt of hoe iets bij jou geregeld is (kaas, stroopwafels, fietsen, afval). Gebruik de lijdende vorm: minstens één keer -il, één keer -n, één keer een stam op l (alınır, bulunur) en één keer tarafından.', model: 'Hollanda’da çok peynir üretilir. Süt her sabah çiftliklerden alınır ve fabrikaya getirilir. Peynir büyük tekerlekler hâlinde yapılır ve aylarca bekletilir. En ünlü peynir Gouda’da bulunur. Cuma günleri eski peynir pazarı turistler tarafından ziyaret edilir. Peynirin çoğu yurt dışına satılır.' },
    scenario: { nl: 'Je bent op bezoek in een theefabriek in Rize en de gids vertelt hoe thee gemaakt wordt. Daarna wil hij weten wat er in Nederland gemaakt wordt.', role: 'You are a friendly guide at a tea factory in Rize. Explain with passive forms how tea is grown and processed (toplanır, kurutulur, paketlenir), answer questions, then ask the learner what is produced in the Netherlands and how (Hollanda’da ne üretilir? Peynir nasıl yapılır?). Use B1 Turkish.', goal: 'Stel twee vragen in de lijdende vorm en vertel hoe iets Nederlands gemaakt wordt.' }
  });

  /* ───────────────────────── B1 · 8 ───────────────────────── */
  U({
    id: 'tr-b1-08', level: 'B1', icon: '✂️', title: 'Saçımı kestirdim', nl: 'Laten doen: kapper, kleermaker en monteur',
    goals: ['Zeggen dat je iets laat doen in plaats van het zelf te doen', 'De laten-vorm maken met -dir en -t', 'Een dienst bestellen bij de kapper, kleermaker of monteur', 'Werkwoordparen herkennen: pişmek ↔ pişirmek'],
    vocab: [
      ['kuaför', 'kapper (dames)'], ['berber', 'kapper (heren)'], ['terzi', 'kleermaker'], ['tamirci', 'monteur'], ['tamir etmek', 'repareren'], ['usta', 'vakman'], ['tesisatçı', 'loodgieter'],
      ['elektrikçi', 'elektricien'], ['çilingir', 'slotenmaker'], ['kuru temizleme', 'stomerij'], ['boyamak', 'verven'], ['kısaltmak', 'inkorten'], ['daraltmak', 'innemen (kleding)'], ['dikmek', 'naaien'],
      ['ütülemek', 'strijken'], ['bozulmak', 'kapot gaan'], ['arıza', 'storing / defect'], ['parça', 'onderdeel / stuk'], ['garanti', 'garantie'], ['ücret', 'tarief / loon'], ['teslim almak', 'ophalen / in ontvangst nemen'],
      ['favori', 'bakkebaard'], ['tıraş olmak', 'zich scheren'], ['uç', 'punt / uiteinde'], ['fön', 'föhnen (het)'], ['paça', 'broekspijp'], ['fermuar', 'rits'], ['düğme', 'knoop'],
      ['su kaçırmak', 'lekken'], ['yaptırmak', 'laten maken'], ['kendim', 'zelf (ik)']
    ],
    grammar: [
      { t: 'Laten doen: -dir en -t', es: 'Ettirgen çatı',
        html: `<p>«Ik knip mijn haar» is <i>Saçımı kes<b>iyorum</b></i>: dan sta je zelf met de schaar. Ga je naar de kapper, dan zegt het Turks dat <b>in het werkwoord</b>: <i>Saçımı kes<b>tir</b>iyorum</i> (ik laat mijn haar knippen). Er zijn twee gewone vormen:</p>
<p>• na een <b>medeklinker</b>: <b>-dir</b> (dır, dir, dur, dür en na een stemloze medeklinker tır, tir, tur, tür): <i>yap-<b>tır</b>-mak</i> (laten maken), <i>kes-<b>tir</b>-mek</i>, <i>aç-<b>tır</b>-mak</i>, <i>yaz-<b>dır</b>-mak</i>, <i>dik-<b>tir</b>-mek</i>.<br>• na een <b>klinker</b>, en na een stam van meer lettergrepen op <b>r</b> of <b>l</b>: <b>-t</b>: <i>boya-<b>t</b>-mak</i> (laten verven), <i>temizle-<b>t</b>-mek</i>, <i>ütüle-<b>t</b>-mek</i>, <i>yıka-<b>t</b>-mak</i>, <i>kısal-<b>t</b>-mak</i>.</p>
<p>Bij <b>etmek</b>: <b>ettirmek</b>: <i>tamir <b>ettirdim</b></i> (ik heb het laten repareren), <i>kontrol <b>ettirmek</b></i>.</p>
<p>Wie het werk doet, staat in de <b>-e-vorm</b>: <i>Saçımı kuaför<b>e</b> kestirdim.</i> (Ik heb mijn haar door de kapper laten knippen.) · <i>Arabayı usta<b>ya</b> tamir ettirdik.</i></p>
<p><b>⚠️ Uitzondering:</b> een groep korte, veelgebruikte werkwoorden doet niet mee en heeft een eigen vorm:<br>• <b>-ir</b>: <i>iç<b>ir</b>mek</i> (laten drinken), <i>piş<b>ir</b>mek</i> (koken), <i>bit<b>ir</b>mek</i> (afmaken), <i>geç<b>ir</b>mek</i>, <i>düş<b>ür</b>mek</i> (laten vallen), <i>kaç<b>ır</b>mak</i> (missen), <i>yat<b>ır</b>mak</i>, <i>doy<b>ur</b>mak</i><br>• <b>-er</b>: <i>çık<b>ar</b>mak</i> (uithalen, uittrekken), <i>kop<b>ar</b>mak</i><br>• <b>-it</b>: <i>kork<b>ut</b>mak</i> (bang maken), <i>ak<b>ıt</b>mak</i><br>• helemaal eigen: <i>kalk-</i> → <i><b>kaldır</b>mak</i> (optillen), <i>gel-</i> → <i><b>getir</b>mek</i> (brengen), <i>gör-</i> → <i><b>göster</b>mek</i> (laten zien).<br><b>Waarom?</b> Dit zijn oude achtervoegsels die niet meer gebruikt worden om nieuwe vormen te maken. Ze zijn alleen blijven vastzitten aan werkwoorden die zo vaak gezegd worden dat de oude vorm nooit is vervangen. Leer ze daarom als losse woorden: je kent er al veel (<i>pişirmek, bitirmek, getirmek, göstermek</i>).</p>`,
        table: [['stam', 'laten-vorm', 'betekenis'], ['kes-', 'kestirmek', 'laten knippen'], ['yap-', 'yaptırmak', 'laten maken'], ['boya-', 'boyatmak', 'laten verven'], ['temizle-', 'temizletmek', 'laten schoonmaken'], ['tamir et-', 'tamir ettirmek', 'laten repareren'], ['iç- ⚠️', 'içirmek', 'laten drinken'], ['çık- ⚠️', 'çıkarmak', 'uithalen'], ['gör- ⚠️', 'göstermek', 'laten zien']],
        sum: 'Kestirmek, boyatmak, tamir ettirmek.',
        ex: [['Saçımı kestirdim.', 'Ik heb mijn haar laten knippen.'], ['Evi boyatacağız.', 'We gaan het huis laten schilderen.'], ['Arabayı tamir ettirmem lazım.', 'Ik moet de auto laten repareren.'], ['Pantolonu terziye kısalttırdım.', 'Ik heb de broek door de kleermaker laten inkorten.']] },
      { t: 'Werkwoordparen: het gebeurt ↔ iemand doet het', es: 'Geçişsiz ↔ geçişli',
        html: `<p>Dezelfde achtervoegsels maken van een werkwoord waar iets <b>vanzelf gebeurt</b> een werkwoord waar <b>iemand iets doet</b>. Het Nederlands heeft daar vaak twee woorden voor, of «laten» / «maken»:</p>
<p><i>Yemek <b>pişiyor</b>.</i> (Het eten staat te koken.) ↔ <i>Annem yemek <b>pişiriyor</b>.</i> (Mijn moeder kookt.)<br><i>Film <b>bitti</b>.</i> (De film is afgelopen.) ↔ <i>Kitabı <b>bitirdim</b>.</i> (Ik heb het boek uitgelezen.)<br><i>Bebek <b>uyuyor</b>.</i> ↔ <i>Bebeği <b>uyutuyorum</b>.</i> (Ik breng de baby in slaap.)<br><i>Çok <b>güldük</b>.</i> ↔ <i>Bizi çok <b>güldürdü</b>.</i> (Hij maakte ons erg aan het lachen.)</p>
<p>De tweede vorm krijgt een lijdend voorwerp met <b>-i</b>: <i>bebe<b>ği</b></i>, <i>kitab<b>ı</b></i>, <i>biz<b>i</b></i>.</p>
<p>Je kunt het achtervoegsel ook <b>stapelen</b>: <i>piş-</i> (gaar worden) → <i>piş<b>ir</b>-</i> (koken) → <i>piş<b>irt</b>-</i> (laten koken). Na -dir komt dan -t, na -t komt -tir: <i>kısal-</i> (korter worden) → <i>kısal<b>t</b>-</i> (inkorten) → <i>kısal<b>ttır</b>-</i> (laten inkorten).</p>`,
        table: [['het gebeurt', 'iemand doet het'], ['pişmek (gaar worden)', 'pişirmek (koken)'], ['bitmek (aflopen)', 'bitirmek (afmaken)'], ['ölmek (sterven)', 'öldürmek (doden)'], ['uyumak (slapen)', 'uyutmak (in slaap brengen)'], ['gülmek (lachen)', 'güldürmek (aan het lachen maken)'], ['değişmek (veranderen)', 'değiştirmek (iets veranderen)']],
        sum: 'Yemek pişiyor ↔ yemek pişiriyorum.',
        ex: [['Ders bitti, ödevimi de bitirdim.', 'De les is afgelopen, en ik heb ook mijn huiswerk afgemaakt.'], ['Bu film beni ağlattı.', 'Deze film heeft me aan het huilen gemaakt.'], ['Telefonumu düşürdüm, ekranı kırıldı.', 'Ik heb mijn telefoon laten vallen, het scherm is gebroken.']] },
      { t: 'Zelf doen of laten doen? Een dienst bestellen', es: 'Hizmet istemek',
        html: `<p>Het verschil is in het Turks verplicht. Zeg je <i>Dişimi <b>çektim</b></i>, dan heb je zelf je tand getrokken; bij de tandarts is het <i>Dişimi <b>çektirdim</b></i>. Net zo: <i>Fotoğraf <b>çektim</b></i> (ik heb een foto gemaakt) ↔ <i>Fotoğraf <b>çektirdim</b></i> (ik heb een foto van mezelf laten maken).</p>
<p>«Zelf» is <b>kendim</b> (kendin, kendi, kendimiz): <i>Evi <b>kendim</b> boyadım.</i> (Ik heb het huis zelf geverfd.)</p>
<p><b>Bestellen</b> doe je met <i>istiyorum</i> of beleefder met <i>-ebilir miyim / -ir misiniz</i>:<br>✂️ <i>Saçımı kestirmek istiyorum. Sadece uçlarından alın, lütfen.</i><br>🧵 <i>Bu pantolonun paçalarını kısaltabilir misiniz?</i><br>🔧 <i>Çamaşır makinesi bozuldu, bakabilir misiniz?</i></p>
<p>En de vragen die er altijd bij horen: <i>Ne kadar <b>tutar</b>?</i> (Wat gaat het kosten?) · <i>Ne zaman <b>hazır olur</b>?</i> (Wanneer is het klaar?) · <i>Garantisi var mı?</i> · <i>Bugün <b>yetişir mi</b>?</i> (Lukt het vandaag nog?)</p>
<p>Als je gaat zitten bij de kapper of iets ophaalt, hoor je een wens: <b>Sıhhatler olsun!</b> (na knippen of scheren) en <b>Güle güle kullanın!</b> (veel plezier ermee).</p>`,
        table: [['zelf', 'laten doen'], ['Saçımı kestim.', 'Saçımı kestirdim.'], ['Fotoğraf çektim.', 'Fotoğraf çektirdim.'], ['Evi boyadım.', 'Evi boyattım.'], ['Arabayı yıkadım.', 'Arabayı yıkattım.']],
        sum: 'Kendim yaptım ↔ yaptırdım.',
        ex: [['Gömleklerimi ütületmek istiyorum.', 'Ik wil mijn overhemden laten strijken.'], ['Ne zaman hazır olur?', 'Wanneer is het klaar?'], ['Musluk su kaçırıyor, tesisatçı çağırmalıyız.', 'De kraan lekt, we moeten een loodgieter laten komen.']] }
    ],
    dialogue: {
      t: 'Klaar voor de bruiloft', place: 'İzmir 🇹🇷',
      lines: [
        ['Elif', 'Saçını mı kestirdin? Çok yakışmış!', 'Heb je je haar laten knippen? Het staat je heel goed!'],
        ['Tom', 'Sağ ol. Sabah berbere gittim, sakalımı da düzelttirdim.', 'Dank je. Vanochtend ben ik naar de kapper geweest, ik heb ook mijn baard laten bijwerken.'],
        ['Elif', 'Cumartesi günkü düğün için mi?', 'Voor de bruiloft van zaterdag?'],
        ['Tom', 'Evet. Takım elbisemi de terziye götürdüm, ceketin kollarını kısalttırıyorum.', 'Ja. Ik heb ook mijn pak naar de kleermaker gebracht, ik laat de mouwen van het jasje inkorten.'],
        ['Elif', 'Ben de elbisemi kuru temizlemeye verdim. Ne zaman hazır olur, bilmiyorum.', 'Ik heb mijn jurk ook naar de stomerij gebracht. Ik weet niet wanneer hij klaar is.'],
        ['Tom', 'Bir sorun daha var: araba bozuldu. Dün tamirciye baktırdım.', 'Er is nog een probleem: de auto is kapot. Gisteren heb ik de monteur ernaar laten kijken.'],
        ['Elif', 'Eyvah! Ne demiş?', 'O jee! Wat zei hij?'],
        ['Tom', 'Bir parçayı değiştirmek gerekiyormuş. Cumaya kadar yetiştiremezmiş.', 'Er schijnt een onderdeel vervangen te moeten worden. Hij krijgt het niet voor vrijdag af.'],
        ['Elif', 'Sorun değil, sizi ben götürürüm. Fotoğrafları kime çektireceksiniz?', 'Geen probleem, ik breng jullie wel. Door wie laten jullie de foto’s maken?'],
        ['Tom', 'Gelinin kuzeni fotoğrafçıymış, ona çektirecekler.', 'De neef van de bruid schijnt fotograaf te zijn, ze laten hem ze maken.'],
        ['Elif', 'Harika. O zaman her şey hazır!', 'Geweldig. Dan is alles klaar!']
      ],
      q: [
        { t: 'mc', q: 'Tom sabah nereye gitti?', o: ['Berbere', 'Terziye', 'Tamirciye'] },
        { t: 'mc', q: 'Tom terziye ne yaptırıyor?', o: ['Ceketin kollarını kısalttırıyor', 'Yeni bir takım elbise diktiriyor', 'Pantolonunu ütületiyor'] },
        { t: 'mc', q: 'Arabanın nesi var?', o: ['Bir parçayı değiştirmek gerekiyor', 'Benzini bitmiş', 'Hiçbir şeyi yok'] }
      ]
    },
    culture: { t: 'De berber, de terzi en de usta', html: `<p>In Turkije laat je veel meer <b>maken</b> dan in Nederland. In elke wijk zit een <b>terzi</b> die voor een klein bedrag een broek inkort terwijl je wacht, een <b>ayakkabı tamircisi</b> die hakken vervangt, en een <b>usta</b> voor alles wat kapot is. <i>Usta</i> betekent «meester in zijn vak» en is ook de aanspreekvorm: <i>Usta, bir bakar mısın?</i></p>
<p>De <b>berber</b> is voor mannen een half uur verwennerij: knippen, scheren met het open mes, een warme handdoek, <i>kolonya</i>, een nekmassage, en oorhaartjes worden weggebrand met een vlammetje. Thee krijg je er ongevraagd bij. Na afloop zegt iedereen <b>Sıhhatler olsun!</b> («moge het gezond zijn»), en je antwoordt <i>Sağ ol</i>.</p>
<p>💈 Voor vrouwen is de <b>kuaför</b> er vooral vóór een feest: <i>fön çektirmek</i> (laten föhnen) voor een bruiloft is heel gewoon.</p>` },
    ex: [
      { t: 'cloze', s: 'Dün saçımı kes___dim.', h: 'laten', a: ['tir'], o: ['tir', 'dir', 't'], nl: 'Gisteren heb ik mijn haar laten knippen.', tag: 'tr-laten' },
      { t: 'cloze', s: 'Evi boya___acağız.', h: 'laten', a: ['t'], o: ['t', 'tır', 'dır'], nl: 'We gaan het huis laten schilderen.', x: 'Na een klinker is de laten-vorm -t: boya-t-.', tag: 'tr-laten' },
      { t: 'cloze', s: 'Arabayı tamir ___ lazım.', h: 'ik, laten', a: ['ettirmem'], o: ['ettirmem', 'etmem', 'edilmem'], nl: 'Ik moet de auto laten repareren.', tag: 'tr-laten' },
      { t: 'cloze', s: 'Saçımı kuaför___ kestirdim.', h: 'door', a: ['e'], o: ['e', 'den', 'ü'], nl: 'Ik heb mijn haar door de kapper laten knippen.', x: 'Wie het werk doet, staat in de -e-vorm.', tag: 'tr-laten' },
      { t: 'mc', q: 'Je bent naar de tandarts geweest. Wat zeg je?', o: ['Dişimi çektirdim.', 'Dişimi çektim.', 'Dişim çekildim.'], x: 'Dişimi çektim betekent dat je de tand zelf getrokken hebt.', tag: 'tr-laten' },
      { t: 'mc', q: 'Wat is de laten-vorm van «içmek» (laten drinken)?', o: ['içirmek', 'içtirmek', 'içitmek'], x: '⚠️ Uitzondering: een groep korte werkwoorden heeft een oude eigen vorm op -ir (içirmek, pişirmek, bitirmek). Die oude achtervoegsels zijn alleen bij veelgebruikte woorden bewaard.', tag: 'tr-laten' },
      { t: 'mc', q: 'Welke hoort bij «görmek» (laten zien)?', o: ['göstermek', 'gördürmek', 'görütmek'], x: '⚠️ Uitzondering: göstermek is een eigen woord, net als getirmek (bij gelmek) en kaldırmak (bij kalkmak).', tag: 'tr-laten' },
      { t: 'cloze', s: 'Yemek pişiyor. Annem yemek piş___iyor.', h: 'zij doet het', a: ['ir'], o: ['ir', 'tir', 't'], nl: 'Het eten staat op. Mijn moeder kookt.', tag: 'tr-laten' },
      { t: 'cloze', s: 'Film bitti. Ben de kitabımı bit___dim.', h: 'ik deed het', a: ['ir'], o: ['ir', 'tir', 'ti'], nl: 'De film is afgelopen. Ik heb ook mijn boek uitgelezen.', tag: 'tr-laten' },
      { t: 'mc', q: 'Wat betekent «Bu film beni ağlattı»?', o: ['Deze film heeft me aan het huilen gemaakt.', 'Ik heb om deze film gehuild.', 'Ik heb deze film laten maken.'], tag: 'tr-laten' },
      { t: 'mc', q: 'Wat zeg je tegen iemand die net van de kapper komt?', o: ['Sıhhatler olsun!', 'Geçmiş olsun!', 'Kolay gelsin!'], tag: 'vocab' },
      { t: 'cloze', s: 'Evi ___ boyadım, kimseye yaptırmadım.', h: 'zelf', a: ['kendim'], o: ['kendim', 'kendin', 'benim'], nl: 'Ik heb het huis zelf geverfd, ik heb het door niemand laten doen.', tag: 'tr-laten' },
      { t: 'tr', nl: 'Ik wil mijn haar laten knippen.', a: ['Saçımı kestirmek istiyorum.', 'Saçlarımı kestirmek istiyorum.'], tag: 'tr-laten' },
      { t: 'tr', nl: 'Wanneer is het klaar?', a: ['Ne zaman hazır olur?', 'Ne zaman hazır olacak?', 'Ne zaman hazır?'], tag: 'vocab' },
      { t: 'tr', nl: 'We hebben de auto laten wassen.', a: ['Arabayı yıkattık.', 'Arabayı yıkattırdık.'], tag: 'tr-laten' },
      { t: 'order', s: 'Takım elbisemi terziye götürdüm, kollarını kısalttırıyorum.', nl: 'Ik heb mijn pak naar de kleermaker gebracht, ik laat de mouwen inkorten.', tag: 'tr-laten' },
      { t: 'match', p: [['terzi', 'kleermaker'], ['berber', 'kapper (heren)'], ['tamirci', 'monteur'], ['arıza', 'storing'], ['ücret', 'tarief'], ['sakal', 'baard']], tag: 'vocab' }
    ],
    reading: {
      t: 'Mahallenin terzisi', type: 'Portret in de wijkkrant',
      p: [
        ['Hasan Usta kırk yıldır Karşıyaka’daki küçük dükkânında terzilik yapıyor. Mahallede herkes pantolonunu ona kısalttırır, ceketini ona daralttırır.', 'Hasan Usta is al veertig jaar kleermaker in zijn kleine winkel in Karşıyaka. Iedereen in de wijk laat zijn broek door hem inkorten en zijn jasje door hem innemen.'],
        ['«Eskiden insanlar takım elbiselerini bana diktirirdi» diyor. «Şimdi herkes hazır giyim alıyor, bana sadece tamirat kalıyor.»', '„Vroeger lieten mensen hun pakken door mij maken,” zegt hij. „Nu koopt iedereen confectie en blijft voor mij alleen het verstelwerk over.”'],
        ['Yine de işinden memnun. Düğünlerden önce dükkân doluyor: gelinler elbiselerini düzelttirir, damatlar düğmelerini değiştirtir.', 'Toch is hij tevreden met zijn werk. Voor bruiloften loopt de winkel vol: bruiden laten hun jurk vermaken, bruidegoms laten hun knopen vervangen.'],
        ['Hasan Usta bu yıl emekli olacak. Dükkânı kızına bırakıyor. «Ona her şeyi öğrettim» diyor. «Artık beni o çalıştırıyor!»', 'Hasan Usta gaat dit jaar met pensioen. Hij laat de winkel na aan zijn dochter. „Ik heb haar alles geleerd,” zegt hij. „Nu zet zij mij aan het werk!”']
      ],
      gl: [['terzilik', 'het kleermakersvak'], ['hazır giyim', 'confectie'], ['gelin', 'bruid'], ['damat', 'bruidegom'], ['öğretmek', 'leren (aan iemand)']],
      q: [
        { t: 'mc', q: 'Hasan Usta kaç yıldır terzilik yapıyor?', o: ['Kırk yıldır', 'On yıldır', 'Dört yıldır'] },
        { t: 'mc', q: 'Eskiden insanlar ona ne yaptırırdı?', o: ['Takım elbise diktirirdi', 'Ayakkabı tamir ettirirdi', 'Saçını kestirirdi'] },
        { t: 'mc', q: 'Dükkân kime kalıyor?', o: ['Kızına', 'Oğluna', 'Komşusuna'] }
      ]
    },
    say: [['Saçımı kestirmek istiyorum.', 'Ik wil mijn haar laten knippen.'], ['Arabayı tamir ettirmem lazım.', 'Ik moet de auto laten repareren.'], ['Ne zaman hazır olur?', 'Wanneer is het klaar?'], ['Evi kendim boyadım.', 'Ik heb het huis zelf geverfd.']],
    task: { nl: 'Je gaat verhuizen of je hebt een feest. Schrijf 5 of 6 zinnen over wat je zelf doet (kendim) en wat je laat doen. Gebruik minstens drie laten-vormen (-tir / -t / ettirmek), één keer de -e-vorm voor wie het doet en één uitzondering (pişirmek, bitirmek, getirmek, göstermek).', model: 'Gelecek ay taşınıyoruz. Duvarları kendim boyayacağım, ama mutfağı bir ustaya yaptıracağız. Eşyaları bir nakliye firmasına taşıtacağız. Perdeleri terziye diktirdim. Eski evi de temizletmemiz lazım. Cumartesi her şeyi bitirmek istiyorum, akşam arkadaşlara yemek pişireceğim.' },
    scenario: { nl: 'Je zit bij de kapper in İzmir. Hij wil weten wat je wilt en maakt intussen een praatje over het feest waar je naartoe gaat.', role: 'You are a talkative barber/hairdresser in İzmir. Ask what the customer wants (Nasıl kestirmek istersiniz? Sakalı da düzeltelim mi?), chat about the upcoming wedding and what else they are having done (Takım elbisenizi diktirdiniz mi?), mention price and time, and end with Sıhhatler olsun. Use B1 Turkish with causative forms.', goal: 'Zeg wat je wilt laten doen, vraag wat het kost en vertel wat je nog meer laat regelen.' }
  });
})(window.SPT);
