/* Turks voor Nederlandstaligen — niveau C1, units 1–2 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  Object.assign(S.C.TAGS, {
    'tr-halinde': 'indien en wegens in schrijftaal (-mesi hâlinde, -diği takdirde)', 'tr-haber': 'nieuwstaal (-diği bildirildi, -mesi bekleniyor)',
    'tr-akad': 'academische verbindingen (-mekle birlikte, -meksizin)', 'tr-dikce': 'naarmate, zolang, voor zover (-dikçe, -diği sürece)',
    'tr-toegeven': 'toegeven en tegenwerpen (-se de, her ne kadar, gerçi)', 'tr-betoog': 'betoogwoorden (nitekim, kaldı ki, hele)',
    'tr-deyim': 'uitdrukkingen (deyimler)', 'tr-ikileme': 'verdubbelingen (yavaş yavaş, kitap mitap)',
    'tr-stapel': 'gestapelde vormen (yaptırılmak, yapılabilmek)', 'tr-zacht': 'beleefd afzwakken (acaba, -ebilir miydiniz)',
    'tr-aspect': 'samengestelde werkwoorden (-iver, -ekal, -edur, -eyaz)', 'tr-vertel': 'verteltijden in literatuur (-mekteydi, -irdi)',
    'tr-hukuk': 'juridische verbindingen (-mek suretiyle, gerekçesiyle)', 'tr-yukum': 'plicht en recht (yükümlü, zorunlu, hakkı var)',
    'tr-eski': 'oude en nieuwe woorden (cevap / yanıt)', 'tr-izafet': 'Arabische en Perzische resten (-î, gayri-, bi-)',
    'tr-spijt': 'onwerkelijke voorwaarde (-seydi … -irdi)', 'tr-yerine': 'in plaats van (-eceğine, -ecek yerde)', 'tr-bijna': 'bijna (az kalsın, neredeyse)',
    'tr-partikel': 'partikels (ya, ki, hani, bari, sakın)', 'tr-ironi': 'ironie en twijfel (güya, sözde, meğer, -miş)'
  });

  /* ───────────────────────── C1 · 1 ───────────────────────── */
  U({
    id: 'tr-c1-01', level: 'C1', icon: '📰', title: 'Son dakika', nl: 'Het nieuws volgen: krantentaal en verklaringen',
    goals: ['Nieuwsberichten en persverklaringen begrijpen', 'Voorwaarde en reden in schrijftaal: -mesi hâlinde, -diği takdirde, -mesi nedeniyle', 'Weten wanneer een bijzin -diği krijgt en wanneer -mesi', 'Een nieuwsbericht samenvatten in je eigen woorden'],
    vocab: [
      ['kamu yararı', 'algemeen belang'], ['başyazı', 'hoofdartikel'], ['köşe yazarı', 'columnist'], ['basın bülteni', 'persbericht'], ['basın toplantısı', 'persconferentie'], ['demeç', 'verklaring (van een politicus)'], ['iddia', 'bewering'],
      ['ileri sürmek', 'aanvoeren / stellen'], ['yalanlamak', 'tegenspreken / ontkennen'], ['teyit etmek', 'bevestigen (formeel)'], ['haber ajansı', 'persbureau'], ['sözcü', 'woordvoerder'], ['yolsuzluk', 'corruptie'], ['son gelişmeler', 'de laatste ontwikkelingen'],
      ['kamuoyu', 'publieke opinie'], ['yayımlamak', 'publiceren'], ['sansür', 'censuur'], ['yanlı', 'partijdig'], ['öne sürmek', 'stellen / naar voren brengen'], ['dile getirmek', 'verwoorden / uiten'], ['yol açmak', 'leiden tot'],
      ['ele almak', 'behandelen / aan de orde stellen'], ['son dakika', 'laatste nieuws'], ['ücret artışı', 'loonsverhoging'], ['alım gücü', 'koopkracht'], ['asgari ücret', 'minimumloon'], ['sendika', 'vakbond'], ['grev', 'staking']
    ],
    grammar: [
      { t: 'Indien, mits, wegens: de bijzin in schrijftaal', es: '-mesi hâlinde, -diği takdirde, -mesi nedeniyle',
        html: `<p>In gesprekken zeg je <i>gelirse</i> (als hij komt) en <i>geldiği için</i> (omdat hij kwam). Kranten, contracten en instanties kiezen een andere bouw: het werkwoord wordt een <b>zelfstandig naamwoord</b> met een bezitsuitgang, gevolgd door een woord als <i>geval</i> of <i>reden</i>.</p>
<p><b>Voorwaarde</b> (indien):<br>• <b>-mesi hâlinde</b>: <i>Yağmur yağ<b>ması hâlinde</b> konser ertelenecektir.</i> (Indien het regent, wordt het concert uitgesteld.)<br>• <b>-mesi durumunda</b>: <i>Anlaşma sağlan<b>maması durumunda</b> grev başlayacak.</i> (Ingeval er geen akkoord komt, begint de staking.)<br>• <b>-diği takdirde</b>: <i>Ödeme yapıl<b>madığı takdirde</b> sözleşme iptal edilir.</i> (Indien niet wordt betaald, vervalt het contract.)</p>
<p><b>Reden</b> (wegens, doordat):<br>• <b>-mesi nedeniyle / sebebiyle</b>: <i>Fiyatların art<b>ması nedeniyle</b> …</i> (Wegens het stijgen van de prijzen …)<br>• <b>-diğinden (dolayı)</b>: <i>Yeterli kanıt bulun<b>madığından</b> dava düştü.</i> (Doordat er onvoldoende bewijs was, verviel de zaak.)<br>• <b>-diği gerekçesiyle</b>: <i>Kurallara uy<b>madığı gerekçesiyle</b> işten çıkarıldı.</i> (Hij werd ontslagen op grond van het feit dat hij zich niet aan de regels hield: dat is de opgegeven reden, niet per se de echte.)</p>
<p>De persoon zit in de bezitsuitgang: <i>gel<b>mem</b> hâlinde</i> (indien ik kom), <i>gel<b>meniz</b> hâlinde</i> (indien u komt). Een genoemd onderwerp krijgt <b>-in</b>: <i>Bakan<b>ın</b> istifa etmesi hâlinde</i>.</p>
<p><b>⚠️ Uitzondering:</b> <b>-diği takdirde</b> gaat over iets wat nog moet gebeuren, en toch staat er <b>-diği</b>, dat je kent van het verleden en heden. Je zegt niet <i>-eceği takdirde</i>. <b>Waarom?</b> -diği betekent eigenlijk niet «verleden», maar «als feit beschouwd». <i>Takdir</i> betekent «veronderstelling»: je stelt je de situatie voor alsof ze al een feit is en zegt wat er dan geldt. Daarom past de feit-vorm, ook al ligt de situatie in de toekomst.</p>`,
        table: [['spreektaal', 'schrijftaal', 'betekenis'], ['yağmur yağarsa', 'yağmur yağması hâlinde', 'indien het regent'], ['ödemezseniz', 'ödemediğiniz takdirde', 'indien u niet betaalt'], ['fiyatlar arttığı için', 'fiyatların artması nedeniyle', 'wegens de prijsstijging'], ['kanıt olmadığı için', 'kanıt bulunmadığından', 'bij gebrek aan bewijs']],
        sum: 'Yağmur yağması hâlinde konser ertelenecektir.',
        ex: [['Gecikme olması hâlinde yolculara bilgi verilecektir.', 'Indien er vertraging is, worden de reizigers geïnformeerd.'], ['Şartlar yerine getirilmediği takdirde başvuru reddedilir.', 'Indien niet aan de voorwaarden wordt voldaan, wordt de aanvraag afgewezen.'], ['Yoğun kar yağışı nedeniyle okullar tatil edildi.', 'Wegens zware sneeuwval zijn de scholen gesloten.'], ['Basına bilgi sızdırdığı gerekçesiyle görevden alındı.', 'Hij werd uit zijn functie gezet omdat hij informatie naar de pers zou hebben gelekt.']] },
      { t: 'Nieuwstaal: -diği bildirildi, -mesi bekleniyor', es: 'Haber dili',
        html: `<p>Een nieuwsbericht zegt zelden «X gebeurde». Het zegt «er is meegedeeld dat X gebeurde». De bijzin komt eerst, het werkwoord van melden staat in de <b>lijdende vorm</b> achteraan:</p>
<p>• <i>Kazada üç kişinin yaralan<b>dığı bildirildi</b>.</i> (Er is gemeld dat bij het ongeluk drie mensen gewond zijn geraakt.)<br>• <i>Bakanın yarın açıklama yap<b>acağı öğrenildi</b>.</i> (Vernomen is dat de minister morgen een verklaring aflegt.)<br>• <i>Şirketin vergi kaçır<b>dığı iddia ediliyor</b>.</i> (Er wordt beweerd dat het bedrijf belasting ontduikt.)<br>• <i>Görüşmelerin sür<b>düğü belirtildi</b>.</i> (Er is aangegeven dat de gesprekken voortduren.)</p>
<p>De regel achter de keuze van de uitgang:<br>• Is de bijzin een <b>mededeling over een feit</b> (zeggen, weten, horen, beweren, begrijpen)? Dan <b>-diği</b> (nu of vroeger) of <b>-eceği</b> (later).<br>• Is de bijzin een <b>wens, verwachting, eis of beoordeling</b> (willen, verwachten, eisen, nodig zijn, belangrijk zijn)? Dan <b>-mesi</b>: <i>Faizlerin düş<b>mesi bekleniyor</b>.</i> (Verwacht wordt dat de rente daalt.) · <i>Sendika ücretlerin artırıl<b>masını talep etti</b>.</i></p>
<p>Vaste krantenwerkwoorden: <b>bildirildi</b> (gemeld), <b>belirtildi</b> (aangegeven), <b>açıklandı</b> (bekendgemaakt), <b>öğrenildi</b> (vernomen), <b>kaydedildi</b> (opgetekend), <b>ileri sürüldü / öne sürüldü</b> (gesteld), <b>iddia edildi</b> (beweerd). Met <i>iddia</i> en <i>öne sürmek</i> neemt de krant afstand: het is niet bewezen.</p>
<p><b>⚠️ Uitzondering:</b> <i>beklemek</i> (verwachten) gaat over de toekomst, en toch is het <i>düş<b>mesi</b> bekleniyor</i> en niet <i>düşeceği bekleniyor</i>. <b>Waarom?</b> Niet de tijd beslist, maar de soort werkwoord. <i>Beklemek</i> meldt geen feit; het drukt een verwachting uit, net als <i>istemek</i> en <i>ummak</i> (hopen). Zulke werkwoorden krijgen altijd de kale handeling (-me). Vergelijk: <i>düş<b>eceğini</b> söyledi</i> (hij zei dát het zal dalen: een mededeling) naast <i>düş<b>mesini</b> bekliyor</i> (hij verwacht het dalen ervan).</p>`,
        table: [['soort hoofdwerkwoord', 'uitgang', 'voorbeeld'], ['melden, weten, beweren', '-diği / -eceği', 'geldiği bildirildi'], ['verwachten, willen, eisen', '-mesi', 'gelmesi bekleniyor'], ['nodig, belangrijk, jammer', '-mesi', 'gelmesi gerekiyor']],
        sum: 'Faizlerin düşmesi bekleniyor.',
        ex: [['Depremde can kaybı olmadığı açıklandı.', 'Bekendgemaakt is dat er bij de aardbeving geen doden zijn gevallen.'], ['Zammın ocak ayında yürürlüğe gireceği belirtildi.', 'Aangegeven is dat de verhoging in januari ingaat.'], ['Yetkililer iddiaları yalanladı.', 'Functionarissen spraken de beweringen tegen.'], ['Görüşmelerin haftaya sonuçlanması bekleniyor.', 'Verwacht wordt dat de besprekingen volgende week worden afgerond.']] }
    ],
    dialogue: {
      t: 'Bij de koffieautomaat', place: 'Ankara 🇹🇷',
      lines: [
        ['Deniz', 'Sabah haberlerini gördün mü? Asgari ücrete yeniden zam yapılacağı konuşuluyor.', 'Heb je het ochtendnieuws gezien? Er wordt gezegd dat het minimumloon weer omhooggaat.'],
        ['Ilse', 'Gördüm ama resmî bir açıklama yok, değil mi? Sadece bir kaynağa dayandırıyorlar.', 'Ik heb het gezien, maar er is geen officiële verklaring, toch? Ze baseren het op maar één bron.'],
        ['Deniz', 'Doğru. Bakanlık ne doğruladı ne yalanladı. Yarın basın toplantısı yapılması bekleniyor.', 'Klopt. Het ministerie heeft het bevestigd noch ontkend. Morgen wordt een persconferentie verwacht.'],
        ['Ilse', 'Sendikalar ne diyor? Anlaşma sağlanmaması hâlinde greve gideceklerini okudum.', 'Wat zeggen de vakbonden? Ik las dat ze gaan staken indien er geen akkoord komt.'],
        ['Deniz', 'Evet, enflasyonun maaşları erittiğini öne sürüyorlar. Haksız da sayılmazlar.', 'Ja, ze stellen dat de inflatie de lonen uitholt. Ongelijk hebben ze ook niet echt.'],
        ['Ilse', 'Peki bu zam fiyatların daha da artmasına yol açmaz mı?', 'Maar leidt die verhoging er niet toe dat de prijzen nog verder stijgen?'],
        ['Deniz', 'İşte asıl tartışma o. Her gazete konuyu başka bir açıdan ele alıyor.', 'Dat is nu net de eigenlijke discussie. Elke krant belicht het vanuit een andere hoek.'],
        ['Ilse', 'O yüzden iki üç farklı kaynaktan okuyorum. Tarafsız haber bulmak kolay değil.', 'Daarom lees ik het uit twee, drie verschillende bronnen. Onpartijdig nieuws vinden is niet makkelijk.']
      ],
      q: [
        { t: 'mc', q: 'Zam haberi neye dayanıyor?', o: ['Tek bir kaynağa', 'Resmî bir açıklamaya', 'Bir basın toplantısına'] },
        { t: 'mc', q: 'Sendikalar hangi durumda greve gidecek?', o: ['Anlaşma sağlanmazsa', 'Zam yapılırsa', 'Enflasyon düşerse'] },
        { t: 'mc', q: 'Ilse neden birkaç kaynaktan okuyor?', o: ['Tarafsız haber bulmak zor olduğu için', 'Türkçesini geliştirmek için', 'İşi gereği'] }
      ]
    },
    culture: { t: 'Kranten, kolommen en de «köşe yazarı»', html: `<p>Turkse kranten hebben een eigen sterrenstelsel: de <b>köşe yazarları</b>, columnisten met een vaste «hoek» (köşe) op de pagina. Lezers kopen een krant vaak om één schrijver, en een columnist die overstapt neemt zijn publiek mee.</p>
<p>Het medialandschap is sterk gepolariseerd. Je hoort de termen <b>yandaş medya</b> (regeringsgezinde media) en <b>muhalif medya</b> (oppositiemedia). Veel mensen volgen het nieuws daarom via meerdere kanalen tegelijk, en steeds meer via YouTube-journalisten en sociale media.</p>
<p>📺 Let op het rode balkje <b>SON DAKİKA</b> onder in beeld. Het staat er zo vaak dat Turken er grappen over maken: «laatste nieuws» is in de praktijk gewoon «nieuws».</p>` },
    ex: [
      { t: 'cloze', s: 'Yağmur yağması ___ konser ertelenecektir.', h: 'indien', a: ['hâlinde', 'halinde'], o: ['hâlinde', 'nedeniyle', 'gerekçesiyle'], nl: 'Indien het regent, wordt het concert uitgesteld.', tag: 'tr-halinde' },
      { t: 'cloze', s: 'Ödeme yapılmadığı ___ sözleşme iptal edilir.', h: 'indien', a: ['takdirde'], o: ['takdirde', 'nedeniyle', 'hâlinde'], nl: 'Indien niet wordt betaald, vervalt het contract.', x: 'Na -diği komt takdirde; na -mesi komt hâlinde of durumunda.', tag: 'tr-halinde' },
      { t: 'cloze', s: 'Yoğun kar yağışı ___ okullar tatil edildi.', h: 'wegens', a: ['nedeniyle', 'sebebiyle'], o: ['nedeniyle', 'hâlinde', 'takdirde'], nl: 'Wegens zware sneeuwval zijn de scholen gesloten.', tag: 'tr-halinde' },
      { t: 'mc', q: 'Waarom is het «ödenmediği takdirde» en niet «ödenmeyeceği takdirde», terwijl het over de toekomst gaat?', o: ['-diği betekent «als feit beschouwd», niet «verleden».', 'Takdirde is zelf al een toekomende tijd.', 'Het is een drukfout die gewoon is geworden.'], x: '⚠️ Uitzondering: je stelt je de situatie voor alsof ze al een feit is. Daarom de feit-vorm -diği, ook voor iets wat nog moet gebeuren.', tag: 'tr-halinde' },
      { t: 'mc', q: 'Wat zegt «kurallara uymadığı gerekçesiyle işten çıkarıldı»?', o: ['Dat dit de opgegeven reden voor het ontslag is.', 'Dat hij zeker de regels heeft overtreden.', 'Dat hij zelf ontslag nam.'], x: 'Gerekçe is de aangevoerde grond. De krant laat in het midden of die reden klopt.', tag: 'tr-halinde' },
      { t: 'cloze', s: 'Kazada üç kişinin yaralan___ bildirildi.', h: 'dat … gewond raakten', a: ['dığı'], o: ['dığı', 'ması', 'acak'], nl: 'Er is gemeld dat bij het ongeluk drie mensen gewond zijn geraakt.', tag: 'tr-haber' },
      { t: 'cloze', s: 'Faizlerin düş___ bekleniyor.', h: 'verwachting', a: ['mesi'], o: ['mesi', 'tüğü', 'eceği'], nl: 'Verwacht wordt dat de rente daalt.', x: '⚠️ Uitzondering: beklemek gaat over de toekomst, maar krijgt -mesi. Het meldt geen feit, het drukt een verwachting uit.', tag: 'tr-haber' },
      { t: 'cloze', s: 'Bakanın yarın açıklama yap___ öğrenildi.', h: 'dat … zal', a: ['acağı'], o: ['acağı', 'ması', 'tığı'], nl: 'Vernomen is dat de minister morgen een verklaring aflegt.', tag: 'tr-haber' },
      { t: 'mc', q: 'Welk werkwoord gebruikt een krant om afstand te nemen van een onbewezen bericht?', o: ['iddia edildi', 'açıklandı', 'bildirildi'], x: 'Met iddia edildi (beweerd) en öne sürüldü (gesteld) zegt de krant: dit is niet bevestigd.', tag: 'tr-haber' },
      { t: 'mc', q: 'Sendika ücretlerin artırıl… talep etti. Welke uitgang?', o: ['-masını', '-dığını', '-acağını'], x: 'Talep etmek is een eis, geen mededeling: dus -mesi.', tag: 'tr-haber' },
      { t: 'mc', q: 'Wat betekent «yalanlamak»?', o: ['tegenspreken', 'liegen', 'bevestigen'], x: 'Liegen is yalan söylemek. Yalanlamak is zeggen dat iets niet waar is.', tag: 'vocab' },
      { t: 'tr', nl: 'Wegens de staking rijden er geen treinen.', a: ['Grev nedeniyle trenler çalışmıyor.', 'Grev nedeniyle tren seferleri yapılmıyor.', 'Grev sebebiyle trenler çalışmıyor.', 'Grev nedeniyle trenler çalışmamaktadır.'], tag: 'tr-halinde' },
      { t: 'tr', nl: 'Functionarissen spraken de beweringen tegen.', a: ['Yetkililer iddiaları yalanladı.', 'Yetkililer iddiaları yalanladılar.'], tag: 'tr-haber' },
      { t: 'order', s: 'Zammın ocak ayında yürürlüğe gireceği belirtildi.', nl: 'Aangegeven is dat de verhoging in januari ingaat.', tag: 'tr-haber' },
      { t: 'order', s: 'Gecikme olması hâlinde yolculara bilgi verilecektir.', nl: 'Indien er vertraging is, worden de reizigers geïnformeerd.', tag: 'tr-halinde' },
      { t: 'match', p: [['manşet', 'krantenkop'], ['kaynak', 'bron'], ['iddia', 'bewering'], ['grev', 'staking'], ['sendika', 'vakbond'], ['kamuoyu', 'publieke opinie']], tag: 'vocab' }
    ],
    reading: {
      t: 'Asgari ücret görüşmeleri', type: 'Nieuwsbericht',
      p: [
        ['Asgari ücret görüşmelerinin üçüncü turu dün Ankara’da yapıldı. Toplantıdan bir sonuç çıkmadığı, tarafların haftaya yeniden bir araya geleceği bildirildi.', 'De derde ronde van de onderhandelingen over het minimumloon vond gisteren plaats in Ankara. Gemeld is dat de bijeenkomst geen resultaat opleverde en dat de partijen volgende week opnieuw bijeenkomen.'],
        ['Sendika temsilcileri, enflasyonun ücretleri erittiğini öne sürerek en az yüzde kırk oranında artış talep etti. İşveren tarafı ise bu oranın işsizliğe yol açacağını savundu.', 'Vakbondsvertegenwoordigers stelden dat de inflatie de lonen uitholt en eisten een verhoging van minstens veertig procent. De werkgeverskant betoogde daarentegen dat dit percentage tot werkloosheid zou leiden.'],
        ['Bakanlık kaynakları, anlaşma sağlanamaması hâlinde son kararı hükümetin vereceğini belirtti. Yeni ücretin ay sonuna kadar açıklanması bekleniyor.', 'Bronnen bij het ministerie gaven aan dat de regering het laatste woord heeft indien er geen akkoord wordt bereikt. Verwacht wordt dat het nieuwe loon voor het einde van de maand bekend wordt gemaakt.'],
        ['Öte yandan bazı sendikalar, taleplerinin karşılanmadığı takdirde greve gideceklerini duyurdu.', 'Anderzijds kondigden enkele vakbonden aan te gaan staken indien hun eisen niet worden ingewilligd.']
      ],
      gl: [['tur', 'ronde'], ['temsilci', 'vertegenwoordiger'], ['eritmek', 'doen smelten / uithollen'], ['oran', 'percentage / verhouding'], ['işveren', 'werkgever'], ['savunmak', 'betogen / verdedigen'], ['duyurmak', 'aankondigen']],
      q: [
        { t: 'mc', q: 'Dünkü toplantıdan ne çıktı?', o: ['Bir sonuç çıkmadı', 'Yüzde kırk zam kararı çıktı', 'Grev kararı çıktı'] },
        { t: 'mc', q: 'İşveren tarafı neyi savundu?', o: ['Bu oranın işsizliğe yol açacağını', 'Enflasyonun ücretleri erittiğini', 'Görüşmelerin bitmesi gerektiğini'] },
        { t: 'mc', q: 'Anlaşma olmazsa son kararı kim verecek?', o: ['Hükümet', 'Sendikalar', 'İşverenler'] }
      ]
    },
    say: [['Resmî bir açıklama yapılmadı.', 'Er is geen officiële verklaring afgelegd.'], ['Yetkililer iddiaları yalanladı.', 'Functionarissen spraken de beweringen tegen.'], ['Faizlerin düşmesi bekleniyor.', 'Verwacht wordt dat de rente daalt.'], ['Tarafsız haber bulmak kolay değil.', 'Onpartijdig nieuws vinden is niet makkelijk.']],
    task: { nl: 'Schrijf een kort nieuwsbericht van vier of vijf zinnen over iets wat deze week in jouw stad is gebeurd (een stroomstoring, een nieuw fietspad, een demonstratie). Gebruik minstens twee meldwerkwoorden in de lijdende vorm (bildirildi, açıklandı, bekleniyor) en één voorwaarde of reden in schrijftaal (hâlinde, takdirde, nedeniyle).', model: 'Utrecht’te dün akşam büyük bir elektrik kesintisi yaşandı. Kesintinin bir trafodaki arıza nedeniyle meydana geldiği bildirildi. Yaklaşık yirmi bin evin üç saat boyunca elektriksiz kaldığı açıklandı. Yetkililer, arızanın bu sabah giderildiğini belirtti. Benzer bir sorunun yaşanması hâlinde vatandaşların SMS ile bilgilendirileceği kaydedildi.' },
    scenario: { nl: 'Je drinkt koffie met je Turkse collega Deniz in Ankara. Jullie bespreken het nieuws van vanochtend over het minimumloon en een mogelijke staking.', role: 'You are Deniz, an office colleague in Ankara who follows the news closely. Discuss this morning’s headlines about the minimum wage talks and a possible strike. Report what was said using news constructions (-diği bildirildi, -mesi bekleniyor, iddia ediliyor), ask the learner what they read and whether they trust the source, and challenge them politely. Use natural C1 Turkish.', goal: 'Vertel wat je hebt gelezen, zeg wat bevestigd is en wat alleen beweerd wordt, en geef je mening over de gevolgen.' }
  });

  /* ───────────────────────── C1 · 2 ───────────────────────── */
  U({
    id: 'tr-c1-02', level: 'C1', icon: '🎓', title: 'Bulgular gösteriyor ki', nl: 'Studie en onderzoek: academisch Turks',
    goals: ['Een wetenschappelijke tekst of scriptie volgen', 'Verbinden zonder voegwoord: -mekle birlikte, -meksizin, -mektense', 'Verhoudingen uitdrukken: -dikçe, -diği sürece, -diği ölçüde', 'Een bevinding voorzichtig formuleren'],
    vocab: [
      ['bulgu', 'bevinding'], ['varsayım', 'aanname / hypothese'], ['kuram', 'theorie'], ['yöntem', 'methode'], ['veri', 'gegevens / data'], ['örneklem', 'steekproef'], ['anket', 'enquête'],
      ['katılımcı', 'deelnemer'], ['çıkarım', 'gevolgtrekking'], ['güvenilirlik', 'betrouwbaarheid'], ['kanıtlamak', 'bewijzen'], ['kaynakça', 'literatuurlijst'], ['alıntı', 'citaat'], ['özet', 'samenvatting'],
      ['tez', 'scriptie / proefschrift'], ['danışman', 'begeleider / adviseur'], ['hakemli dergi', 'wetenschappelijk tijdschrift met peerreview'], ['kavram', 'begrip / concept'], ['bağlam', 'context'], ['ölçüt', 'criterium'], ['etken', 'factor'],
      ['saptamak', 'vaststellen'], ['vurgulamak', 'benadrukken'], ['öngörmek', 'voorzien / voorspellen'], ['kapsamak', 'omvatten'], ['yorumlamak', 'interpreteren'], ['intihal', 'plagiaat'], ['savunma', 'verdediging']
    ],
    grammar: [
      { t: 'Verbinden zonder voegwoord: -mekle birlikte, -meksizin, -mektense', es: '-mekle birlikte, -meksizin, -mektense',
        html: `<p>Academisch Turks plakt zinnen aan elkaar met vormen van de infinitief. Ze krijgen <b>geen tijd en geen persoon</b>; die lees je af aan het laatste werkwoord.</p>
<p>• <b>-mekle birlikte / -mekle beraber</b> = hoewel, zij het dat: <i>Örneklem küçük ol<b>makla birlikte</b> sonuçlar tutarlıdır.</i> (Hoewel de steekproef klein is, zijn de resultaten consistent.)<br>• <b>-meksizin</b> = zonder te (deftige broer van <i>-meden</i>): <i>Kaynak göster<b>meksizin</b> alıntı yapmak intihaldir.</i> (Citeren zonder bronvermelding is plagiaat.)<br>• <b>-mektense</b> = liever dan, in plaats van: <i>Ezberle<b>mektense</b> anlamaya çalışın.</i> (Probeer het te begrijpen in plaats van het uit je hoofd te leren.)<br>• <b>-mek yerine</b> = in plaats van (neutraal): <i>Soru sor<b>mak yerine</b> sustu.</i><br>• <b>-mek suretiyle / -erek</b> = door te: <i>Anket uygula<b>mak suretiyle</b> veri toplandı.</i> (Door een enquête af te nemen zijn gegevens verzameld.)<br>• <b>-mek üzere</b> = om te, met het doel: <i>Bu etkiyi ölç<b>mek üzere</b> iki grup oluşturuldu.</i></p>
<p>Wil je een ander onderwerp dan in de hoofdzin, dan gebruik je <b>-mesiyle birlikte</b> met een bezitter: <i>Teknoloji<b>nin</b> geliş<b>mesiyle birlikte</b> alışkanlıklar değişti.</i> (Met de ontwikkeling van de technologie zijn de gewoonten veranderd.) Let op: hier betekent het «tegelijk met», niet «hoewel».</p>
<p><b>⚠️ Uitzondering:</b> <i>birlikte</i> betekent «samen», en toch betekent <b>-mekle birlikte</b> «hoewel»: een tegenstelling. <b>Waarom?</b> Letterlijk zeg je «samen met het klein-zijn van de steekproef zijn de resultaten consistent»: twee dingen zijn tegelijk waar. Dat de tweede je verbaast, lees je uit de inhoud. Het Nederlandse «naast het feit dat» werkt net zo. Bij <b>-mesiyle birlikte</b> (met bezitsuitgang) blijft alleen het «tegelijk» over.</p>`,
        table: [['vorm', 'betekenis', 'gewone tegenhanger'], ['-mekle birlikte', 'hoewel', '-diği hâlde, -se de'], ['-meksizin', 'zonder te', '-meden'], ['-mektense', 'liever dan', '-mek yerine'], ['-mek suretiyle', 'door te', '-erek'], ['-mek üzere', 'om te', '-mek için']],
        sum: 'Örneklem küçük olmakla birlikte sonuçlar tutarlıdır.',
        ex: [['Bu yöntem pahalı olmakla birlikte en güvenilir olanıdır.', 'Hoewel deze methode duur is, is ze de betrouwbaarste.'], ['Katılımcılar isim belirtmeksizin anketi doldurdu.', 'De deelnemers vulden de enquête in zonder hun naam te vermelden.'], ['Tek bir kurama bağlanmaktansa farklı yaklaşımları karşılaştırdık.', 'In plaats van ons aan één theorie te binden, hebben we verschillende benaderingen vergeleken.'], ['İnternetin yaygınlaşmasıyla birlikte okuma alışkanlıkları değişti.', 'Met de verspreiding van internet zijn de leesgewoonten veranderd.']] },
      { t: 'Naarmate, zolang, voor zover: -dikçe, -diği sürece, -diği ölçüde', es: '-dikçe, -diği sürece, -diği ölçüde',
        html: `<p>Onderzoek gaat over verbanden: hoe meer A, hoe meer B. Daarvoor heeft het Turks een rij achtervoegsels en vaste combinaties.</p>
<p>• <b>-dikçe</b> = naarmate, telkens wanneer: <i>Gelir art<b>tıkça</b> harcama da artar.</i> (Naarmate het inkomen stijgt, stijgen ook de uitgaven.) · <i>Onu gör<b>dükçe</b> çocukluğumu hatırlıyorum.</i> (Telkens als ik hem zie …)<br>• <b>-diği sürece / müddetçe</b> = zolang: <i>Veriler paylaşıl<b>madığı sürece</b> sonuçlar doğrulanamaz.</i> (Zolang de gegevens niet worden gedeeld, kunnen de resultaten niet worden bevestigd.)<br>• <b>-diği ölçüde / oranda</b> = in de mate waarin: <i>Katılımcılar bilgilendiril<b>diği ölçüde</b> güven artıyor.</i><br>• <b>-diği kadarıyla</b> = voor zover: <i>Bil<b>diğim kadarıyla</b> bu konuda başka çalışma yok.</i> (Voor zover ik weet …)<br>• <b>ne kadar … o kadar</b> = hoe … hoe: <i><b>Ne kadar</b> çok okursan <b>o kadar</b> iyi yazarsın.</i></p>
<p>De ontkenning van -dikçe betekent «zolang niet» of «tenzij»: <i>Kanıt bulun<b>madıkça</b> bu bir varsayım olarak kalır.</i> (Zolang er geen bewijs is gevonden, blijft dit een aanname.)</p>
<p>Voorzichtig formuleren hoort erbij. In plaats van <i>Bu kanıtlıyor</i> schrijf je: <i>Bulgular … <b>olduğunu göstermektedir</b></i> (de bevindingen laten zien dat), <i>… <b>olduğu söylenebilir</b></i> (men kan zeggen dat), <i>… <b>olduğu düşünülmektedir</b></i> (er wordt aangenomen dat), <i>… <b>işaret etmektedir</b></i> (wijst op).</p>
<p><b>⚠️ Uitzondering:</b> <b>oldukça</b> ziet eruit als «naarmate het wordt», maar betekent in bijna elke zin gewoon <b>tamelijk, behoorlijk</b>: <i>Sonuçlar <b>oldukça</b> şaşırtıcı.</i> (De resultaten zijn tamelijk verrassend.) <b>Waarom?</b> De vorm is versteend tot een los bijwoord, net als <i>gittikçe</i> (steeds meer) uit B2. De oorspronkelijke betekenis was «voor zover het kan», en van daaruit is het «in vrij hoge mate» geworden. De letterlijke betekenis bestaat nog wel met een eigen onderwerp: <i>fırsat <b>oldukça</b></i> (telkens als er gelegenheid is).</p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['-dikçe', 'naarmate, telkens als', 'arttıkça'], ['-medikçe', 'zolang niet, tenzij', 'bulunmadıkça'], ['-diği sürece', 'zolang', 'devam ettiği sürece'], ['-diği ölçüde', 'in de mate waarin', 'mümkün olduğu ölçüde'], ['-diği kadarıyla', 'voor zover', 'bildiğim kadarıyla']],
        sum: 'Gelir arttıkça harcama da artar.',
        ex: [['Yaş ilerledikçe yeni bir dil öğrenmek zorlaşır.', 'Naarmate de leeftijd vordert, wordt een nieuwe taal leren moeilijker.'], ['Kanıt bulunmadıkça bu bir varsayım olarak kalır.', 'Zolang er geen bewijs is gevonden, blijft dit een aanname.'], ['Bildiğim kadarıyla bu konuda başka çalışma yok.', 'Voor zover ik weet is er geen ander onderzoek over dit onderwerp.'], ['Bulgular, uykunun belleği güçlendirdiğini göstermektedir.', 'De bevindingen laten zien dat slaap het geheugen versterkt.']] }
    ],
    dialogue: {
      t: 'Bij de scriptiebegeleider', place: 'İstanbul 🇹🇷',
      lines: [
        ['Hoca', 'Tezinizin taslağını okudum. Yöntem bölümü oldukça sağlam, tebrik ederim.', 'Ik heb het concept van uw scriptie gelezen. Het methodehoofdstuk is behoorlijk degelijk, gefeliciteerd.'],
        ['Ilse', 'Teşekkür ederim hocam. Örneklemin küçük olması beni biraz endişelendiriyor.', 'Dank u wel. Dat de steekproef klein is, baart me wat zorgen.'],
        ['Hoca', 'Örneklem küçük olmakla birlikte bulgularınız tutarlı. Bunu sınırlılıklar kısmında açıkça belirtin, yeter.', 'Hoewel de steekproef klein is, zijn uw bevindingen consistent. Vermeld dat duidelijk bij de beperkingen, dat volstaat.'],
        ['Ilse', 'Peki sonuç bölümü? «Kanıtlamaktadır» diye yazdım ama fazla iddialı mı oldu?', 'En het slothoofdstuk? Ik heb «bewijst» geschreven, maar is dat te stellig?'],
        ['Hoca', 'Evet. «Göstermektedir» ya da «işaret etmektedir» deyin. Daha fazla veri toplanmadıkça kesin konuşamayız.', 'Ja. Zeg «laat zien» of «wijst op». Zolang er niet meer gegevens zijn verzameld, kunnen we niet met zekerheid spreken.'],
        ['Ilse', 'Anladım. Bir de kaynakçada eksikler var, bildiğim kadarıyla üç makaleyi eklemeyi unutmuşum.', 'Begrepen. En er ontbreekt nog wat in de literatuurlijst; voor zover ik weet ben ik drie artikelen vergeten toe te voegen.'],
        ['Hoca', 'Kaynak göstermeksizin tek bir cümle bile kalmasın. İntihal programı her şeyi yakalıyor.', 'Laat er geen enkele zin zonder bronvermelding staan. Het plagiaatprogramma vangt alles.'],
        ['Ilse', 'Tamam hocam. Düzeltip cuma gününe kadar gönderirim.', 'Goed. Ik verbeter het en stuur het vóór vrijdag op.']
      ],
      q: [
        { t: 'mc', q: 'Hoca tezin hangi bölümünü beğendi?', o: ['Yöntem bölümünü', 'Kaynakçayı', 'Sonuç bölümünü'] },
        { t: 'mc', q: 'Hoca «kanıtlamaktadır» yerine ne öneriyor?', o: ['Göstermektedir', 'Bilinmektedir', 'Yalanlamaktadır'] },
        { t: 'mc', q: 'Kaynakçada ne eksik?', o: ['Üç makale', 'Anket soruları', 'Özet'] }
      ]
    },
    culture: { t: '«Hocam»: de universiteit en het woord voor iedereen', html: `<p>Op een Turkse universiteit spreek je elke docent aan met <b>Hocam</b> (mijn leraar), ongeacht titel of leeftijd. Docenten zeggen het ook tegen elkaar, en buiten de universiteit hoor je het tegen de fitnesstrainer, de rij-instructeur en soms de taxichauffeur. Het is respectvol én warm.</p>
<p>De weg naar de universiteit loopt via één landelijk examen, de <b>YKS</b>. De score bepaalt welke stad, universiteit en studie je krijgt. Hele gezinnen leven een jaar lang naar dat ene weekend toe, en de <b>dershane</b> (bijlesinstituut) is een begrip.</p>
<p>🎓 Na de verdediging (<b>tez savunması</b>) hoor je <i>Hayırlı olsun!</i> en trakteert de kersverse afgestudeerde op baklava.</p>` },
    ex: [
      { t: 'cloze', s: 'Örneklem küçük ol___ birlikte sonuçlar tutarlıdır.', h: 'hoewel', a: ['makla'], o: ['makla', 'maksızın', 'maktansa'], nl: 'Hoewel de steekproef klein is, zijn de resultaten consistent.', tag: 'tr-akad' },
      { t: 'cloze', s: 'Kaynak göster___ alıntı yapmak intihaldir.', h: 'zonder te', a: ['meksizin', 'meden'], o: ['meksizin', 'mekle', 'mektense'], nl: 'Citeren zonder bronvermelding is plagiaat.', tag: 'tr-akad' },
      { t: 'cloze', s: 'Ezberle___ anlamaya çalışın.', h: 'liever dan', a: ['mektense'], o: ['mektense', 'meksizin', 'mekle'], nl: 'Probeer het te begrijpen in plaats van het uit je hoofd te leren.', tag: 'tr-akad' },
      { t: 'mc', q: '«Birlikte» betekent samen. Waarom betekent «-mekle birlikte» dan «hoewel»?', o: ['Twee dingen zijn tegelijk waar; de tegenstelling lees je uit de inhoud.', 'Birlikte heeft hier een Arabische oorsprong met een andere betekenis.', 'Het is een verkorting van «birlikte değil».'], x: '⚠️ Uitzondering: letterlijk «samen met het klein-zijn». Net als het Nederlandse «naast het feit dat».', tag: 'tr-akad' },
      { t: 'mc', q: 'Wat betekent «teknolojinin gelişmesiyle birlikte»?', o: ['met de ontwikkeling van de technologie', 'hoewel de technologie zich ontwikkelt', 'zonder dat de technologie zich ontwikkelt'], x: 'Met een bezitsuitgang (-mesiyle birlikte) blijft alleen «tegelijk met» over.', tag: 'tr-akad' },
      { t: 'cloze', s: 'Gelir art___ harcama da artar.', h: 'naarmate', a: ['tıkça'], o: ['tıkça', 'tığı', 'madan'], nl: 'Naarmate het inkomen stijgt, stijgen ook de uitgaven.', tag: 'tr-dikce' },
      { t: 'cloze', s: 'Kanıt bulun___ bu bir varsayım olarak kalır.', h: 'zolang niet', a: ['madıkça'], o: ['madıkça', 'dukça', 'maksızın'], nl: 'Zolang er geen bewijs is gevonden, blijft dit een aanname.', tag: 'tr-dikce' },
      { t: 'cloze', s: 'Bil___ kadarıyla bu konuda başka çalışma yok.', h: 'voor zover ik', a: ['diğim'], o: ['diğim', 'dikçe', 'mekle'], nl: 'Voor zover ik weet is er geen ander onderzoek over dit onderwerp.', tag: 'tr-dikce' },
      { t: 'mc', q: 'Sonuçlar oldukça şaşırtıcı. Wat betekent «oldukça» hier?', o: ['tamelijk', 'naarmate het wordt', 'zolang het duurt'], x: '⚠️ Uitzondering: oldukça is versteend tot een bijwoord (tamelijk, behoorlijk), net als gittikçe. Alleen met een eigen onderwerp (fırsat oldukça) is het nog «telkens als».', tag: 'tr-dikce' },
      { t: 'mc', q: 'Welke formulering is het voorzichtigst?', o: ['Bulgular bu etkiye işaret etmektedir.', 'Bulgular bu etkiyi kanıtlamaktadır.', 'Bu etki kesindir.'], x: 'İşaret etmek (wijzen op) laat ruimte voor twijfel; kanıtlamak (bewijzen) niet.', tag: 'tr-akad' },
      { t: 'mc', q: 'Wat is een «kaynakça»?', o: ['literatuurlijst', 'voetnoot', 'steekproef'], tag: 'vocab' },
      { t: 'tr', nl: 'Voor zover ik weet, is dat niet waar.', a: ['Bildiğim kadarıyla bu doğru değil.', 'Bildiğim kadarıyla o doğru değil.', 'Bildiğim kadarıyla doğru değil.'], tag: 'tr-dikce' },
      { t: 'tr', nl: 'Naarmate ik lees, begrijp ik het beter.', a: ['Okudukça daha iyi anlıyorum.', 'Okudukça daha iyi anlarım.'], tag: 'tr-dikce' },
      { t: 'order', s: 'Bu yöntem pahalı olmakla birlikte en güvenilir olanıdır.', nl: 'Hoewel deze methode duur is, is ze de betrouwbaarste.', tag: 'tr-akad' },
      { t: 'order', s: 'Yaş ilerledikçe yeni bir dil öğrenmek zorlaşır.', nl: 'Naarmate de leeftijd vordert, wordt een nieuwe taal leren moeilijker.', tag: 'tr-dikce' },
      { t: 'match', p: [['bulgu', 'bevinding'], ['veri', 'gegevens'], ['yöntem', 'methode'], ['kanıt', 'bewijs'], ['alıntı', 'citaat'], ['kavram', 'begrip']], tag: 'vocab' }
    ],
    reading: {
      t: 'İki dilli çocuklar üzerine bir araştırma', type: 'Samenvatting van een onderzoek',
      p: [
        ['Bu çalışma, iki dilli büyüyen çocukların dikkat becerilerini incelemek üzere yürütülmüştür. Araştırmaya Hollanda’da yaşayan, evde Türkçe konuşan 120 çocuk katılmıştır.', 'Dit onderzoek is uitgevoerd om de aandachtsvaardigheden te bestuderen van kinderen die tweetalig opgroeien. Aan het onderzoek namen 120 kinderen deel die in Nederland wonen en thuis Turks spreken.'],
        ['Veriler, ailelere anket uygulamak ve çocuklara kısa testler vermek suretiyle toplanmıştır. Bulgular, iki dilin düzenli kullanıldığı ölçüde dikkat puanlarının yükseldiğini göstermektedir.', 'De gegevens zijn verzameld door de gezinnen een enquête voor te leggen en de kinderen korte tests te geven. De bevindingen laten zien dat de aandachtsscores stijgen in de mate waarin beide talen regelmatig worden gebruikt.'],
        ['Örneklem küçük olmakla birlikte sonuçlar önceki çalışmalarla tutarlıdır. Yine de daha geniş bir grupla tekrarlanmadıkça bu sonuçların genellenemeyeceği vurgulanmalıdır.', 'Hoewel de steekproef klein is, zijn de resultaten consistent met eerdere onderzoeken. Toch moet worden benadrukt dat deze resultaten niet kunnen worden gegeneraliseerd zolang ze niet met een grotere groep zijn herhaald.'],
        ['Sonuç olarak, ana dilini bırakmaktansa iki dili birlikte geliştirmenin çocuğun yararına olduğu söylenebilir.', 'Concluderend kan worden gezegd dat het in het belang van het kind is om beide talen samen te ontwikkelen in plaats van de moedertaal op te geven.']
      ],
      gl: [['beceri', 'vaardigheid'], ['yürütmek', 'uitvoeren'], ['tutarlı', 'consistent'], ['genellemek', 'generaliseren'], ['yarar', 'belang / nut'], ['ana dili', 'moedertaal']],
      q: [
        { t: 'mc', q: 'Araştırma neyi inceliyor?', o: ['İki dilli çocukların dikkat becerilerini', 'Çocukların okul notlarını', 'Ailelerin gelir düzeyini'] },
        { t: 'mc', q: 'Veriler nasıl toplandı?', o: ['Anket ve kısa testlerle', 'Sadece gözlemle', 'Okul kayıtlarından'] },
        { t: 'mc', q: 'Yazar hangi sınırlılığı vurguluyor?', o: ['Sonuçlar daha geniş bir grupla tekrarlanmalı', 'Testler çok uzundu', 'Çocuklar Türkçe bilmiyordu'] }
      ]
    },
    say: [['Bildiğim kadarıyla bu doğru değil.', 'Voor zover ik weet, is dat niet waar.'], ['Bulgular bunu göstermektedir.', 'De bevindingen laten dat zien.'], ['Okudukça daha iyi anlıyorum.', 'Naarmate ik lees, begrijp ik het beter.'], ['Örneklem küçük olmakla birlikte sonuçlar tutarlı.', 'Hoewel de steekproef klein is, zijn de resultaten consistent.']],
    task: { nl: 'Schrijf een samenvatting (özet) van vijf zinnen van een onderzoek, echt of verzonnen: doel, methode, bevinding, beperking, conclusie. Gebruik -mek üzere of -mek suretiyle, één keer -mekle birlikte, één keer -dikçe of -medikçe, en formuleer de conclusie voorzichtig (göstermektedir, söylenebilir).', model: 'Bu çalışma, uzaktan çalışmanın verimlilik üzerindeki etkisini incelemek üzere yapılmıştır. Veriler, 200 çalışana anket uygulamak suretiyle toplanmıştır. Bulgular, evden çalışılan gün sayısı arttıkça iş memnuniyetinin de yükseldiğini göstermektedir. Katılımcıların tümü aynı sektörden olmakla birlikte sonuçlar önceki araştırmalarla uyumludur. Farklı sektörlerde tekrarlanmadıkça kesin bir yargıya varılamayacağı söylenebilir.' },
    scenario: { nl: 'Je bespreekt het concept van je scriptie met je begeleider op een universiteit in İstanbul. De begeleider is vriendelijk maar precies.', role: 'You are a thesis supervisor (address the learner formally; they call you hocam) at a university in İstanbul. Give feedback on their draft: praise the method chapter, question the small sample, ask them to formulate conclusions more cautiously (göstermektedir instead of kanıtlamaktadır), and insist on complete references. Ask about their research question and next steps. Use academic C1 Turkish with -mekle birlikte, -medikçe, -diği ölçüde.', goal: 'Leg je onderzoek uit, verdedig je keuzes, erken een beperking en spreek af wat je verbetert.' }
  });
})(window.SPT);
