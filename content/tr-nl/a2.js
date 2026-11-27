/* Turks voor Nederlandstaligen — niveau A2, units 1–2 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'tr-aor': 'brede tijd: gewoontes (-er / -ir)', 'tr-aorneg': 'brede tijd ontkennend (-mez)', 'tr-aanbod': 'aanbieden en vragen (-er misin?)', 'tr-freq': 'hoe vaak? (her zaman, bazen, hiç)',
    'tr-kunnen': 'kunnen (-ebil- / -eme-)', 'tr-mogen': 'mogen en verzoeken (-ebilir miyim?)', 'tr-moeten': 'moeten (-meli, lazım, zorunda)', 'tr-gen': 'van wie? (-in … -i)',
    'tr-samen': 'samengestelde woorden (yatak odası)', 'tr-idi': 'was / waren (-di, vardı, yoktu)', 'tr-iyordu': 'was aan het… (-iyordu)', 'tr-ken': 'terwijl / toen (-ken)',
    'tr-once': 'voor en na (-meden önce, -dikten sonra)', 'tr-ince': 'zodra / wanneer (-ince)', 'tr-ip': 'en… (-ip)', 'tr-eyim': 'zal ik…? / laat mij… (-eyim)',
    'tr-achter': 'achterzetsels (ile, için, hakkında, kadar)', 'tr-gibi': 'zo… als (kadar, gibi)', 'tr-hem': 'hem… hem, ne… ne, ya… ya', 'tr-hic': 'niemand, niets, nooit (hiç + ontkenning)'
  });

  /* ───────────────────────── A2 · 1 ───────────────────────── */
  U({
    id: 'tr-a2-01', level: 'A2', icon: '🔁', title: 'Genellikle ne yaparsın?', nl: 'Gewoontes: de brede tijd',
    goals: ['Vertellen wat je meestal, vaak of soms doet', 'De brede tijd maken met -r, -er en -ir', 'Het verschil kennen tussen yapıyorum (nu) en yaparım (altijd)', 'Zeggen hoe vaak je iets doet'],
    vocab: [
      ['çoğunlukla', 'meestal / grotendeels'], ['hep', 'altijd / steeds'], ['sık sık', 'vaak'], ['arada bir', 'zo nu en dan'], ['nadiren', 'zelden'], ['ara sıra', 'af en toe'], ['haftada bir', 'één keer per week'], ['günde iki kez', 'twee keer per dag'],
      ['alışkanlık', 'gewoonte'], ['hafta sonları', 'in de weekenden'], ['egzersiz yapmak', 'oefeningen doen'], ['yürüyüş yapmak', 'wandelen'], ['koşuya çıkmak', 'gaan hardlopen'], ['havuz', 'zwembad'], ['dinlenmek', 'uitrusten'],
      ['ziyarete gitmek', 'op bezoek gaan'], ['sohbet etmek', 'kletsen'], ['alışveriş yapmak', 'boodschappen doen / winkelen'], ['temizlik yapmak', 'schoonmaken'], ['yemek pişirmek', 'koken'],
      ['bulaşık yıkamak', 'afwassen'], ['geç kalmak', 'te laat komen'], ['erken yatmak', 'vroeg naar bed gaan'], ['uyanmak', 'wakker worden'], ['duş almak', 'douchen'], ['hafta içi', 'doordeweeks'],
      ['spor salonu', 'sportschool'], ['dizi', 'serie'], ['haber', 'nieuws'], ['gazete', 'krant']
    ],
    grammar: [
      { t: 'De brede tijd: wat je altijd of meestal doet', es: 'Geniş zaman',
        html: `<p>Je kent <b>-iyor</b> voor wat <b>nu</b> gebeurt: <i>Çay içiyorum.</i> (Ik drink nu thee.) Voor <b>gewoontes</b> en dingen die <b>altijd waar</b> zijn heeft Turks een eigen tijd: de <b>brede tijd</b> (geniş zaman). <i>Her sabah çay iç<b>er</b>im.</i> (Ik drink elke ochtend thee.)</p>
<p>De uitgang hangt af van de stam:</p>
<p>• stam op een <b>klinker</b>: alleen <b>-r</b> → <i>oku-<b>r</b></i>, <i>başla-<b>r</b></i>, <i>ye-<b>r</b></i><br>• stam van <b>één lettergreep</b> op een medeklinker: <b>-er / -ar</b> → <i>yap-<b>ar</b></i>, <i>iç-<b>er</b></i>, <i>sev-<b>er</b></i>, <i>bak-<b>ar</b></i><br>• stam van <b>meer lettergrepen</b> op een medeklinker: <b>-ir / -ır / -ur / -ür</b> → <i>konuş-<b>ur</b></i>, <i>çalış-<b>ır</b></i>, <i>öğren-<b>ir</b></i>, <i>düşün-<b>ür</b></i></p>
<p>Daarna komen de persoonsuitgangen van «zijn» (unit 1): <i>yapar<b>ım</b></i>, <i>yapar<b>sın</b></i>, <i>yapar</i>, <i>yapar<b>ız</b></i>, <i>yapar<b>sınız</b></i>, <i>yapar<b>lar</b></i>.</p>
<p>Net als bij -iyor en -ecek: <i>gitmek</i> → <i>gi<b>d</b>er</i> en <i>etmek</i> → <i>e<b>d</b>er</i>, omdat er een klinker op de t volgt.</p>`,
        table: [['', 'yapmak', 'içmek', 'okumak', 'konuşmak'], ['ben', 'yaparım', 'içerim', 'okurum', 'konuşurum'], ['sen', 'yaparsın', 'içersin', 'okursun', 'konuşursun'], ['o', 'yapar', 'içer', 'okur', 'konuşur'],
          ['biz', 'yaparız', 'içeriz', 'okuruz', 'konuşuruz'], ['siz', 'yaparsınız', 'içersiniz', 'okursunuz', 'konuşursunuz'], ['onlar', 'yaparlar', 'içerler', 'okurlar', 'konuşurlar']],
        sum: 'Yaparım, içersin, okur, konuşuruz.',
        ex: [['Her sabah kahve içerim.', 'Ik drink elke ochtend koffie.'], ['Akşamları kitap okurum.', '’s Avonds lees ik een boek.'], ['Hafta sonu ne yaparsın?', 'Wat doe je in het weekend (meestal)?'], ['Türkler çok çay içer.', 'Turken drinken veel thee.']] },
      { t: 'Dertien korte werkwoorden met -ir', es: 'Düzensiz geniş zaman',
        html: `<p>Stammen van één lettergreep krijgen <i>-er / -ar</i>: <i>yapar</i>, <i>gider</i>, <i>içer</i>.</p>
<p><b>⚠️ Uitzondering:</b> dertien korte werkwoorden krijgen toch <b>-ir / -ır / -ur / -ür</b>: <i>al<b>ır</b></i>, <i>bil<b>ir</b></i>, <i>bul<b>ur</b></i>, <i>dur<b>ur</b></i>, <i>gel<b>ir</b></i>, <i>gör<b>ür</b></i>, <i>kal<b>ır</b></i>, <i>ol<b>ur</b></i>, <i>öl<b>ür</b></i>, <i>san<b>ır</b></i>, <i>var<b>ır</b></i>, <i>ver<b>ir</b></i>, <i>vur<b>ur</b></i>. <b>Waarom?</b> Kijk naar de laatste letter: al deze stammen eindigen op <b>l</b>, <b>n</b> of <b>r</b>. Na die «vloeiende» medeklinkers is de oude, nauwe klinker (i / ı / u / ü) bewaard gebleven; bij de andere korte werkwoorden is die later een e / a geworden.</p>
<p>Het omgekeerde geldt niet: niet elk kort werkwoord op l, n of r hoort erbij. <i>Sormak</i> → <i>sor<b>ar</b></i> en <i>girmek</i> → <i>gir<b>er</b></i> zijn gewoon regelmatig. Leer de dertien dus als rijtje; de zeven die je het meest hoort zijn <i>alır, bilir, gelir, görür, kalır, olur, verir</i>.</p>`,
        table: [['werkwoord', 'brede tijd', 'betekenis'], ['almak', 'alır', 'nemen / kopen'], ['bilmek', 'bilir', 'weten'], ['bulmak', 'bulur', 'vinden'], ['durmak', 'durur', 'stilstaan'], ['gelmek', 'gelir', 'komen'],
          ['görmek', 'görür', 'zien'], ['kalmak', 'kalır', 'blijven'], ['olmak', 'olur', 'worden / zijn'], ['vermek', 'verir', 'geven'], ['varmak', 'varır', 'aankomen']],
        sum: 'Alır, bilir, gelir, görür, kalır, olur, verir.',
        ex: [['Annem her gün pazara gelir.', 'Mijn moeder komt elke dag naar de markt.'], ['Hafta sonu evde kalırız.', 'In het weekend blijven we thuis.'], ['Olur!', 'Goed! / Dat kan!'], ['Kim bilir?', 'Wie weet?']] },
      { t: 'Hoe vaak? En: -iyor of de brede tijd?', es: 'Sıklık zarfları',
        html: `<p>Woorden voor «hoe vaak» staan meestal vóór het werkwoord of vooraan in de zin: <i><b>Her zaman</b> erken kalkarım.</i> · <i><b>Genellikle</b> otobüsle giderim.</i> · <i><b>Bazen</b> sinemaya gideriz.</i> · <i><b>Nadiren</b> et yerim.</i></p>
<p>«Eén keer per week» is letterlijk «in de week één»: <i>hafta<b>da</b> bir</i>, <i>gün<b>de</b> iki kez</i>, <i>ay<b>da</b> üç kez</i>, <i>yıl<b>da</b> bir</i>.</p>
<p>«’s Ochtends, ’s avonds» als gewoonte maak je met <b>-leri / -ları</b>: <i>sabah<b>ları</b></i>, <i>akşam<b>ları</b></i>, <i>hafta sonu<b>ları</b></i>, <i>pazar<b>ları</b></i> (op zondagen).</p>
<p><b>-iyor of brede tijd?</b> <i>Şimdi kitap oku<b>yorum</b>.</i> (Ik ben nu aan het lezen.) ↔ <i>Akşamları kitap oku<b>rum</b>.</i> (’s Avonds lees ik, dat is mijn gewoonte.) In spreektaal gebruiken Turken -iyor ook vaak voor gewoontes (<i>Her gün spor yapıyorum</i>); dat is niet fout. De brede tijd klinkt algemener: zo ben ik, zo gaat het altijd.</p>`,
        table: [['Turks', 'Nederlands', 'ongeveer'], ['her zaman', 'altijd', '100%'], ['genellikle', 'meestal', '80%'], ['sık sık', 'vaak', '60%'], ['bazen / ara sıra', 'soms / af en toe', '30%'], ['nadiren', 'zelden', '10%']],
        sum: 'Her zaman, genellikle, sık sık, bazen, nadiren.',
        ex: [['Haftada iki kez spor yaparım.', 'Ik sport twee keer per week.'], ['Sabahları erken kalkarım.', '’s Ochtends sta ik vroeg op.'], ['Genellikle saat on birde yatarız.', 'We gaan meestal om elf uur naar bed.']] }
    ],
    dialogue: {
      t: 'Een nieuwe huisgenoot', place: 'İstanbul 🇹🇷',
      lines: [
        ['Emre', 'Hoş geldin Sanne! Sabahları kaçta kalkarsın?', 'Welkom Sanne! Hoe laat sta jij ’s ochtends op?'],
        ['Sanne', 'Genellikle yedide kalkarım. Önce duş alırım, sonra kahvaltı yaparım.', 'Meestal sta ik om zeven uur op. Eerst douche ik, daarna ontbijt ik.'],
        ['Emre', 'Ben geç kalkarım, çünkü akşamları çalışırım.', 'Ik sta laat op, want ik werk ’s avonds.'],
        ['Sanne', 'Anladım. Evde yemek pişirir misin?', 'Begrepen. Kook je thuis?'],
        ['Emre', 'Evet, sık sık pişiririm. Sen ne yersin?', 'Ja, ik kook vaak. Wat eet jij?'],
        ['Sanne', 'Her şeyi yerim, ama nadiren et yerim.', 'Ik eet alles, maar ik eet zelden vlees.'],
        ['Emre', 'Tamam. Bulaşığı kim yıkar?', 'Oké. Wie doet de afwas?'],
        ['Sanne', 'Sen pişirirsin, ben yıkarım. Olur mu?', 'Jij kookt, ik was af. Is dat goed?'],
        ['Emre', 'Olur! Hafta sonları ne yaparsın?', 'Goed! Wat doe je in de weekenden?'],
        ['Sanne', 'Cumartesileri yüzerim, pazarları arkadaşlarımla buluşurum.', 'Op zaterdag zwem ik, op zondag spreek ik af met mijn vrienden.']
      ],
      q: [
        { t: 'mc', q: 'Sanne sabahları kaçta kalkar?', o: ['Yedide', 'Dokuzda', 'On birde'] },
        { t: 'mc', q: 'Emre neden geç kalkar?', o: ['Çünkü akşamları çalışır', 'Çünkü hasta', 'Çünkü spor yapar'] },
        { t: 'mc', q: 'Bulaşığı kim yıkar?', o: ['Sanne', 'Emre', 'Hiç kimse'] }
      ]
    },
    culture: { t: 'Çay, de hele dag door', html: `<p>Turkije drinkt per persoon de meeste thee ter wereld. Een Turk zegt dan ook niet «ik drink nu thee» maar gewoon <i>Çay içerim</i>: het is een gewoonte, geen moment. Thee komt in een <b>ince belli bardak</b> (een glaasje met een smalle taille), zonder melk, met suikerklontjes ernaast.</p>
<p>De dag heeft vaste theemomenten: bij het ontbijt, op het werk (de <b>çaycı</b> brengt hem rond), na het eten en bij elk bezoek. Een glas weigeren mag, maar je krijgt er meestal toch nog een aangeboden.</p>
<p>🥄 Is je glas leeg en wil je <b>niet</b> meer? Leg dan je theelepeltje <b>dwars over het glas</b>. Anders wordt er zonder vragen bijgeschonken.</p>` },
    ex: [
      { t: 'cloze', s: 'Her sabah kahve iç___.', h: 'ik', a: ['erim'], o: ['erim', 'irim', 'arım'], nl: 'Ik drink elke ochtend koffie.', x: 'Eén lettergreep op een medeklinker: -er.', tag: 'tr-aor' },
      { t: 'cloze', s: 'Akşamları kitap oku___.', h: 'ik', a: ['rum'], o: ['rum', 'urum', 'arım'], nl: '’s Avonds lees ik een boek.', x: 'Stam op een klinker: alleen -r.', tag: 'tr-aor' },
      { t: 'cloze', s: 'Babam çok çalış___.', a: ['ır'], o: ['ır', 'ar', 'ir'], nl: 'Mijn vader werkt veel.', x: 'Meer lettergrepen: -ır.', tag: 'tr-aor' },
      { t: 'cloze', s: 'Hafta sonu ne yap___?', h: 'jij', a: ['arsın'], o: ['arsın', 'ırsın', 'ersin'], nl: 'Wat doe je in het weekend?', tag: 'tr-aor' },
      { t: 'cloze', s: 'Biz genellikle otobüsle gi___.', a: ['deriz'], o: ['deriz', 'teriz', 'diriz'], nl: 'Wij gaan meestal met de bus.', x: 'gitmek → gider: de t wordt d vóór een klinker.', tag: 'tr-aor' },
      { t: 'mc', q: 'Hoe zeg je «hij komt (altijd)»?', o: ['gelir', 'geler', 'gelar'], x: '⚠️ Uitzondering: gelmek is één van de dertien korte werkwoorden op l, n of r die -ir krijgen.', tag: 'tr-aor' },
      { t: 'mc', q: 'Hoe zeg je «ik neem (meestal)»?', o: ['alırım', 'alarım', 'alerim'], x: '⚠️ Uitzondering: almak → alır. De stam eindigt op l en hoort bij de dertien.', tag: 'tr-aor' },
      { t: 'mc', q: 'Welke is regelmatig (met -er)?', o: ['girer', 'verir', 'görür'], x: 'Girmek → girer is gewoon regelmatig. Vermek en görmek horen bij de dertien uitzonderingen.', tag: 'tr-aor' },
      { t: 'cloze', s: 'Hafta sonu evde kal___.', h: 'wij', a: ['ırız'], o: ['ırız', 'arız', 'ırsınız'], nl: 'In het weekend blijven we thuis.', tag: 'tr-aor' },
      { t: 'mc', q: 'Welke zin gaat over nu, dit moment?', o: ['Şimdi kitap okuyorum.', 'Akşamları kitap okurum.', 'Her gün kitap okurum.'], tag: 'tr-aor' },
      { t: 'cloze', s: 'Hafta___ iki kez spor yaparım.', a: ['da'], o: ['da', 'de', 'ya'], nl: 'Ik sport twee keer per week.', x: 'Letterlijk: in de week twee keer.', tag: 'tr-freq' },
      { t: 'mc', q: 'Wat betekent «nadiren»?', o: ['zelden', 'vaak', 'altijd'], tag: 'tr-freq' },
      { t: 'tr', nl: 'Ik sta meestal vroeg op.', a: ['Genellikle erken kalkarım.', 'Ben genellikle erken kalkarım.', 'Genellikle erken kalkıyorum.'], tag: 'tr-aor' },
      { t: 'tr', nl: 'Soms gaan we naar de bioscoop.', a: ['Bazen sinemaya gideriz.', 'Bazen sinemaya gidiyoruz.', 'Biz bazen sinemaya gideriz.'], tag: 'tr-aor' },
      { t: 'tr', nl: 'Wat doe je ’s avonds?', a: ['Akşamları ne yaparsın?', 'Akşamları ne yapıyorsun?', 'Akşam ne yaparsın?'], tag: 'tr-aor' },
      { t: 'order', s: 'Sabahları genellikle saat yedide kalkarım.', nl: '’s Ochtends sta ik meestal om zeven uur op.', tag: 'tr-volg' },
      { t: 'match', p: [['her zaman', 'altijd'], ['genellikle', 'meestal'], ['sık sık', 'vaak'], ['bazen', 'soms'], ['nadiren', 'zelden'], ['haftada bir', 'één keer per week']], tag: 'tr-freq' }
    ],
    reading: {
      t: 'Bir günüm', type: 'Blog',
      p: [
        ['Merhaba, ben Zeynep. İzmir’de yaşıyorum ve bir bankada çalışıyorum.', 'Hallo, ik ben Zeynep. Ik woon in İzmir en werk bij een bank.'],
        ['Hafta içi her gün altı buçukta uyanırım. Önce bir bardak su içerim, sonra yarım saat yürüyüş yaparım.', 'Doordeweeks word ik elke dag om half zeven wakker. Eerst drink ik een glas water, daarna wandel ik een half uur.'],
        ['İşe vapurla giderim. Vapurda genellikle gazete okurum, bazen de sadece denize bakarım.', 'Ik ga met de veerboot naar mijn werk. Op de boot lees ik meestal de krant, soms kijk ik ook alleen maar naar de zee.'],
        ['Akşamları yemek pişiririm ve bir dizi izlerim. Haftada bir arkadaşlarımla buluşurum. Nadiren geç yatarım, çünkü uykuyu çok severim!', '’s Avonds kook ik en kijk ik een serie. Eén keer per week spreek ik af met mijn vrienden. Ik ga zelden laat naar bed, want ik hou erg van slapen!']
      ],
      gl: [['bir bardak su', 'een glas water'], ['yarım saat', 'een half uur'], ['uyku', 'slaap']],
      q: [
        { t: 'mc', q: 'Zeynep işe nasıl gider?', o: ['Vapurla', 'Otobüsle', 'Arabayla'] },
        { t: 'mc', q: 'Vapurda genellikle ne yapar?', o: ['Gazete okur', 'Uyur', 'Çalışır'] },
        { t: 'mc', q: 'Arkadaşlarıyla ne kadar sık buluşur?', o: ['Haftada bir', 'Her gün', 'Ayda bir'] }
      ]
    },
    say: [['Genellikle erken kalkarım.', 'Ik sta meestal vroeg op.'], ['Haftada iki kez spor yaparım.', 'Ik sport twee keer per week.'], ['Akşamları ne yaparsın?', 'Wat doe je ’s avonds?'], ['Bazen arkadaşlarımla buluşurum.', 'Soms spreek ik af met mijn vrienden.']],
    task: { nl: 'Schrijf 5 zinnen over je gewoontes: hoe laat je opstaat, wat je ’s ochtends en ’s avonds doet en hoe vaak je sport of vrienden ziet. Gebruik de brede tijd en minstens drie woorden als genellikle, bazen of haftada bir.', model: 'Genellikle saat yedide kalkarım. Sabahları kahve içerim ve gazete okurum. İşe bisikletle giderim. Haftada iki kez spor yaparım. Akşamları bazen dizi izlerim, bazen arkadaşlarımla buluşurum.' },
    scenario: { nl: 'Je nieuwe Turkse huisgenoot Emre wil weten hoe jouw dagen eruitzien, zodat jullie afspraken kunnen maken over het huis.', role: 'You are Emre, a relaxed flatmate in İstanbul. Ask the learner about their routines using the aorist tense (Sabahları kaçta kalkarsın? Yemek pişirir misin? Hafta sonları ne yaparsın?), tell about your own habits, and agree who cooks, who cleans and who washes up. Use simple A2 Turkish.', goal: 'Vertel over je gewoontes, vraag naar de zijne en verdeel de taken.' }
  });

  /* ───────────────────────── A2 · 2 ───────────────────────── */
  U({
    id: 'tr-a2-02', level: 'A2', icon: '🫖', title: 'Çay içer misiniz?', nl: 'Te gast: aanbieden, vragen en «nooit»',
    goals: ['Iets aanbieden en beleefd om iets vragen met -er misin?', 'Zeggen wat je nooit doet met -mez', 'Beleefd aannemen en afslaan', 'Iets beloven of spontaan besluiten'],
    vocab: [
      ['misafir', 'gast'], ['ev sahibi', 'gastheer / gastvrouw / huisbaas'], ['davet etmek', 'uitnodigen'], ['ikram etmek', 'aanbieden (eten of drinken)'], ['buyurun', 'alstublieft / ga uw gang'],
      ['zahmet olmasın', 'doe geen moeite'], ['ne zahmeti', 'het is geen moeite'], ['ellerinize sağlık', 'dank voor het heerlijke eten'], ['afiyet olsun', 'eet smakelijk'], ['doydum', 'ik zit vol'],
      ['terlik', 'slipper / pantoffel'], ['ayakkabılık', 'schoenenkast'], ['çıkarmak', 'uittrekken / eruit halen'], ['buyur etmek', 'binnen vragen'], ['hediye', 'cadeau'], ['getirmek', 'meebrengen'],
      ['baklava', 'baklava'], ['börek', 'hartig bladerdeeggebak'], ['mercimek çorbası', 'linzensoep'], ['tabak', 'bord'], ['bardak', 'glas'], ['biraz daha', 'nog een beetje'], ['kesinlikle', 'absoluut / zeker'],
      ['asla', 'nooit (sterk)'], ['sigara içmek', 'roken'], ['yardım etmek', 'helpen'], ['kapatmak', 'dichtdoen / uitzetten'], ['açmak', 'opendoen / aanzetten'], ['pencere', 'raam'], ['söz vermek', 'beloven']
    ],
    grammar: [
      { t: 'Aanbieden en vragen: -er misin?', es: 'Rica ve teklif',
        html: `<p>Met de brede tijd als <b>vraag</b> bied je iets aan of vraag je beleefd om iets. Het vraagwoordje <b>mi</b> staat los, met de persoonsuitgang eraan: <i>Çay iç<b>er misin</b>?</i> (Wil je thee? letterlijk: drink je thee?) · <i>Çay iç<b>er misiniz</b>?</i> (Wilt u thee?)</p>
<p>Als <b>verzoek</b>: <i>Pencereyi aç<b>ar mısın</b>?</i> (Wil je het raam opendoen?) · <i>Bana yardım ed<b>er misiniz</b>?</i> (Wilt u me helpen?) Dat is vriendelijker dan de gebiedende wijs <i>Pencereyi aç!</i></p>
<p>Vergelijk: <i>Çay iç<b>iyor musun</b>?</i> is een gewone vraag (ben je thee aan het drinken?), <i>Çay iç<b>er misin</b>?</i> is een aanbod.</p>
<p><b>Aannemen:</b> <i>Evet, lütfen.</i> · <i>Olur, teşekkürler.</i> · <i>Çok iyi olur!</i> (Dat zou heel fijn zijn!)<br><b>Afslaan:</b> <i>Hayır, teşekkür ederim.</i> · <i>Sağ ol, doydum.</i> (Dank je, ik zit vol.) · <i>Zahmet olmasın.</i> (Doe geen moeite.)</p>`,
        table: [['', 'vraag', 'betekenis'], ['sen', 'içer misin?', 'wil je (drinken)?'], ['siz', 'içer misiniz?', 'wilt u (drinken)?'], ['sen', 'açar mısın?', 'wil je opendoen?'], ['siz', 'oturur musunuz?', 'wilt u gaan zitten?'], ['siz', 'görür müsünüz?', 'ziet u?']],
        sum: 'Çay içer misin? Pencereyi açar mısınız?',
        ex: [['Bir şey içer misiniz?', 'Wilt u iets drinken?'], ['Kapıyı kapatır mısın?', 'Wil je de deur dichtdoen?'], ['Biraz daha çorba alır mısınız?', 'Neemt u nog wat soep?'], ['Olur, teşekkürler.', 'Graag, dank je.']] },
      { t: 'De brede tijd ontkennend: -mez / -maz', es: 'Geniş zamanın olumsuzu',
        html: `<p>Wat je <b>nooit</b> of uit principe niet doet, zeg je met <b>-mez / -maz</b> achter de stam: <i>iç-<b>mez</b></i> (hij drinkt niet), <i>yap-<b>maz</b></i> (hij doet het niet). Hier is geen verschil meer tussen korte en lange stammen: het is altijd -mez of -maz.</p>
<p><i>Sen et ye<b>mez</b>sin.</i> (Jij eet geen vlees.) · <i>O sigara iç<b>mez</b>.</i> (Hij rookt niet.) · <i>Onlar geç kal<b>maz</b>lar.</i> (Zij komen niet te laat.)</p>
<p><b>⚠️ Uitzondering:</b> bij <b>ben</b> en <b>biz</b> valt de z weg: <i>yap<b>mam</b></i> (ik doe het niet), <i>yap<b>mayız</b></i> (wij doen het niet), dus niet <s>yapmazım</s> en <s>yapmazız</s>. <b>Waarom?</b> De oude vorm was <i>yapmazam</i>; die is in de loop der eeuwen samengetrokken tot <i>yapmam</i>. Bij <i>biz</i> kwam er een y tussen de twee klinkers. De andere personen hebben de z gehouden.</p>
<p>Met <b>hiç</b> of <b>asla</b> maak je het sterker: <i><b>Hiç</b> sigara içmem.</i> (Ik rook nooit.) · <i><b>Asla</b> yalan söylemem.</i> (Ik lieg nooit.) Let op: het werkwoord blijft ontkennend, ook al staat er al «nooit».</p>
<p><b>Ontkennende vraag</b> = vriendelijk aandringen: <i>Bir çay daha iç<b>mez misin</b>?</i> (Drink je niet nog een thee? = Neem er toch nog een!)</p>`,
        table: [['', 'yapmak', 'içmek', 'gelmek'], ['ben ⚠️', 'yapmam', 'içmem', 'gelmem'], ['sen', 'yapmazsın', 'içmezsin', 'gelmezsin'], ['o', 'yapmaz', 'içmez', 'gelmez'], ['biz ⚠️', 'yapmayız', 'içmeyiz', 'gelmeyiz'], ['siz', 'yapmazsınız', 'içmezsiniz', 'gelmezsiniz'], ['onlar', 'yapmazlar', 'içmezler', 'gelmezler']],
        sum: 'Yapmam, yapmazsın, yapmaz, yapmayız.',
        ex: [['Ben et yemem.', 'Ik eet geen vlees.'], ['Biz hiç geç kalmayız.', 'Wij komen nooit te laat.'], ['Babam asla sigara içmez.', 'Mijn vader rookt nooit.'], ['Oturmaz mısınız?', 'Gaat u niet zitten? (= Gaat u toch zitten!)']] },
      { t: 'Beloven en spontaan besluiten', es: 'Söz verme',
        html: `<p>De brede tijd gebruik je ook voor iets wat je <b>ter plekke besluit</b> of <b>belooft</b>, waar het Nederlands «ik … wel» zegt: <i>Ben aç<b>arım</b>.</i> (Ik doe wel open.) · <i>Yarın seni ar<b>arım</b>.</i> (Ik bel je morgen wel.) · <i>Merak etme, yardım ed<b>erim</b>.</i> (Maak je geen zorgen, ik help wel.)</p>
<p>Vergelijk met <b>-ecek</b>: <i>Yarın seni arayacağım.</i> is een vast plan, <i>Yarın seni ararım.</i> is een toezegging op dit moment, wat losser.</p>
<p>Vaste zinnetjes met de brede tijd: <i><b>Olur.</b></i> (Goed.) · <i><b>Olmaz!</b></i> (Dat kan niet! / Geen sprake van!) · <i><b>Fark etmez.</b></i> (Maakt niet uit.) · <i><b>Görüşürüz.</b></i> (Tot ziens, letterlijk: we zien elkaar.) · <i><b>Teşekkür ederim.</b></i> (Ik dank.)</p>`,
        table: [['Turks', 'Nederlands'], ['Olur.', 'Goed. / Dat kan.'], ['Olmaz.', 'Dat kan niet.'], ['Fark etmez.', 'Maakt niet uit.'], ['Ben yaparım.', 'Ik doe het wel.'], ['Sonra konuşuruz.', 'We praten later wel.']],
        sum: 'Ben açarım. Yarın ararım. Fark etmez.',
        ex: [['Ben bulaşığı yıkarım.', 'Ik doe de afwas wel.'], ['Akşam sana yazarım.', 'Ik schrijf je vanavond wel.'], ['Çay mı, kahve mi? — Fark etmez.', 'Thee of koffie? — Maakt niet uit.']] }
    ],
    dialogue: {
      t: 'Op bezoek bij Ayşe Hanım', place: 'Bursa 🇹🇷',
      lines: [
        ['Ayşe', 'Hoş geldiniz! Buyurun, içeri girin.', 'Welkom! Kom binnen.'],
        ['Tom', 'Hoş bulduk. Ayakkabılarımı çıkarayım mı?', 'Dank u. Zal ik mijn schoenen uittrekken?'],
        ['Ayşe', 'Evet, lütfen. Buyurun, terlik. Çay içer misiniz?', 'Ja, graag. Alstublieft, slippers. Wilt u thee?'],
        ['Tom', 'Olur, teşekkür ederim. Zahmet olmasın.', 'Graag, dank u wel. Doe geen moeite.'],
        ['Ayşe', 'Ne zahmeti! Börek de yer misiniz?', 'Het is geen moeite! Eet u ook börek?'],
        ['Tom', 'Çok güzel görünüyor. Peynirli mi? Ben et yemem.', 'Het ziet er heerlijk uit. Is het met kaas? Ik eet geen vlees.'],
        ['Ayşe', 'Evet, peynirli. Afiyet olsun!', 'Ja, met kaas. Eet smakelijk!'],
        ['Tom', 'Ellerinize sağlık, çok lezzetli.', 'Dank voor het heerlijke eten, het is erg lekker.'],
        ['Ayşe', 'Biraz daha almaz mısınız?', 'Neemt u niet nog een beetje?'],
        ['Tom', 'Sağ olun, doydum. Ama bir çay daha içerim!', 'Dank u, ik zit vol. Maar ik drink nog wel een thee!']
      ],
      q: [
        { t: 'mc', q: 'Tom kapıda ne yapar?', o: ['Ayakkabılarını çıkarır', 'Çay içer', 'Börek yer'] },
        { t: 'mc', q: 'Börek nasıl?', o: ['Peynirli', 'Etli', 'Tatlı'] },
        { t: 'mc', q: 'Tom sonunda ne ister?', o: ['Bir çay daha', 'Biraz daha börek', 'Bir kahve'] }
      ]
    },
    culture: { t: 'Misafirperverlik: de gast is koning', html: `<p>Een Turks spreekwoord zegt: <i>Misafir Tanrı misafiridir</i> (een gast is een gast van God). Kom je op bezoek, dan trek je bij de deur je <b>schoenen uit</b> en krijg je <b>terlik</b> (slippers). De tafel staat vol, ook als je «alleen even langskwam».</p>
<p>Afslaan is een klein ritueel. De gastvrouw biedt aan, jij zegt beleefd <i>zahmet olmasın</i>, zij dringt aan met <i>Biraz daha almaz mısınız?</i> en dan neem je toch. Pas na twee of drie keer afslaan wordt een nee echt geloofd. Wil je echt niet meer, zeg dan <i>Elinize sağlık, çok doydum</i> met je hand op je buik.</p>
<p>🎁 Kom nooit met lege handen: een doos <b>baklava</b>, bonbons of bloemen is gebruikelijk. De gastvrouw zegt dan: <i>Ne gerek vardı!</i> (Dat had toch niet gehoeven!)</p>` },
    ex: [
      { t: 'cloze', s: 'Çay iç___ misiniz?', a: ['er'], o: ['er', 'ir', 'iyor'], nl: 'Wilt u thee?', x: 'Een aanbod doe je met de brede tijd als vraag.', tag: 'tr-aanbod' },
      { t: 'cloze', s: 'Pencereyi açar ___?', h: 'jij', a: ['mısın'], o: ['mısın', 'misin', 'musun'], nl: 'Wil je het raam opendoen?', x: 'Na a komt mı: açar mısın.', tag: 'tr-aanbod' },
      { t: 'cloze', s: 'Bana yardım eder ___?', h: 'u', a: ['misiniz'], o: ['misiniz', 'mısınız', 'musunuz'], nl: 'Wilt u me helpen?', tag: 'tr-aanbod' },
      { t: 'mc', q: 'Welke zin is een aanbod?', o: ['Kahve içer misin?', 'Kahve içiyor musun?', 'Kahve içtin mi?'], x: 'İçer misin? = wil je? İçiyor musun? = ben je aan het drinken?', tag: 'tr-aanbod' },
      { t: 'cloze', s: 'O sigara iç___.', h: 'niet', a: ['mez'], o: ['mez', 'maz', 'miyor'], nl: 'Hij rookt niet.', tag: 'tr-aorneg' },
      { t: 'mc', q: 'Hoe zeg je «ik eet geen vlees» (nooit)?', o: ['Et yemem.', 'Et yemezim.', 'Et yemezem.'], x: '⚠️ Uitzondering: bij ben valt de z weg. Het oude yemezem is samengetrokken tot yemem.', tag: 'tr-aorneg' },
      { t: 'mc', q: 'Hoe zeg je «wij komen niet te laat»?', o: ['Geç kalmayız.', 'Geç kalmazız.', 'Geç kalmazlar.'], x: '⚠️ Uitzondering: ook bij biz valt de z weg; er komt een y tussen de klinkers: kalmayız.', tag: 'tr-aorneg' },
      { t: 'cloze', s: 'Sen hiç spor yap___.', a: ['mazsın'], o: ['mazsın', 'mezsin', 'mam'], nl: 'Jij sport nooit.', tag: 'tr-aorneg' },
      { t: 'cloze', s: 'Ben ___ sigara içmem.', h: 'nooit', a: ['hiç'], o: ['hiç', 'her', 'çok'], nl: 'Ik rook nooit.', x: 'Hiç + ontkennend werkwoord = nooit.', tag: 'tr-freq' },
      { t: 'mc', q: 'Wat betekent «Biraz daha almaz mısınız?»', o: ['Neemt u niet nog een beetje?', 'Heeft u het niet genomen?', 'Wilt u minder?'], tag: 'tr-aanbod' },
      { t: 'mc', q: 'Je gastvrouw heeft heerlijk gekookt. Wat zeg je?', o: ['Ellerinize sağlık!', 'Geçmiş olsun!', 'Kolay gelsin!'], tag: 'vocab' },
      { t: 'mc', q: 'Hoe zeg je «Maakt niet uit»?', o: ['Fark etmez.', 'Olmaz.', 'Yok.'], tag: 'tr-aorneg' },
      { t: 'tr', nl: 'Wil je thee?', a: ['Çay içer misin?', 'Çay ister misin?'], tag: 'tr-aanbod' },
      { t: 'tr', nl: 'Ik bel je morgen wel.', a: ['Yarın seni ararım.', 'Seni yarın ararım.', 'Yarın ararım.'], tag: 'tr-aor' },
      { t: 'tr', nl: 'Wil je de deur dichtdoen?', a: ['Kapıyı kapatır mısın?', 'Kapıyı kapar mısın?'], tag: 'tr-aanbod' },
      { t: 'order', s: 'Biraz daha çorba alır mısınız?', nl: 'Neemt u nog wat soep?', tag: 'tr-aanbod' },
      { t: 'match', p: [['Buyurun.', 'Alstublieft.'], ['Afiyet olsun.', 'Eet smakelijk.'], ['Doydum.', 'Ik zit vol.'], ['Olur.', 'Goed.'], ['Olmaz.', 'Dat kan niet.'], ['Zahmet olmasın.', 'Doe geen moeite.']], tag: 'vocab' }
    ],
    reading: {
      t: 'Türkiye’de misafirlik', type: 'Reisgids',
      p: [
        ['Türkiye’de misafir çok önemlidir. Bir eve girersiniz ve ev sahibi hemen çay ikram eder.', 'In Turkije is een gast heel belangrijk. U komt een huis binnen en de gastheer biedt meteen thee aan.'],
        ['Kapıda ayakkabılarınızı çıkarırsınız. Ev sahibi size terlik verir.', 'Bij de deur trekt u uw schoenen uit. De gastheer geeft u slippers.'],
        ['Türkler misafire «hayır» demez. Tabağınız boş kalmaz: ev sahibi hep biraz daha koyar.', 'Turken zeggen geen «nee» tegen een gast. Uw bord blijft niet leeg: de gastheer schept steeds nog wat op.'],
        ['Misafir genellikle küçük bir hediye getirir: tatlı, çikolata veya çiçek. Eve asla eli boş gitmeyiz!', 'Een gast brengt meestal een klein cadeau mee: iets zoets, chocola of bloemen. We gaan nooit met lege handen op bezoek!']
      ],
      gl: [['önemli', 'belangrijk'], ['hemen', 'meteen'], ['koymak', 'neerzetten / opscheppen'], ['eli boş', 'met lege handen']],
      q: [
        { t: 'mc', q: 'Ev sahibi hemen ne yapar?', o: ['Çay ikram eder', 'Kapıyı kapatır', 'Hediye getirir'] },
        { t: 'mc', q: 'Misafir kapıda ne yapar?', o: ['Ayakkabılarını çıkarır', 'Terlik verir', 'Çay içer'] },
        { t: 'mc', q: 'Misafir genellikle ne getirir?', o: ['Küçük bir hediye', 'Çorba', 'Terlik'] }
      ]
    },
    say: [['Çay içer misiniz?', 'Wilt u thee?'], ['Ellerinize sağlık, çok lezzetli.', 'Dank voor het heerlijke eten, het is erg lekker.'], ['Sağ olun, doydum.', 'Dank u, ik zit vol.'], ['Ben et yemem.', 'Ik eet geen vlees.']],
    task: { nl: 'Je krijgt Turkse vrienden te eten. Schrijf 5 zinnen: verwelkom ze, bied twee dingen aan met -er misiniz?, zeg één ding dat je nooit eet of drinkt, en beloof iets met de brede tijd.', model: 'Hoş geldiniz, buyurun! Bir şey içer misiniz? Çorba alır mısınız? Ben hiç et yemem, ama balık yerim. Yemekten sonra kahve yaparım.' },
    scenario: { nl: 'Je bent op bezoek bij Ayşe Hanım in Bursa. Ze wil je van alles laten proeven.', role: 'You are Ayşe Hanım, a very hospitable host in Bursa. Welcome the learner (Hoş geldiniz), offer slippers, tea, börek, soup and dessert using -er misiniz? and insist politely with -mez misiniz? when they decline. Ask what they never eat or drink. Use simple A2 Turkish with the polite siz form.', goal: 'Neem iets aan, sla iets beleefd af en bedank voor het eten.' }
  });
})(window.SPT);
