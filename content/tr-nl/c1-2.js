/* Turks voor Nederlandstaligen — niveau C1, units 3–4 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── C1 · 3 ───────────────────────── */
  U({
    id: 'tr-c1-03', level: 'C1', icon: '⚖️', title: 'Haklısın ama …', nl: 'Discussiëren met nuance: toegeven en tegenwerpen',
    goals: ['Een standpunt genuanceerd verdedigen', 'Toegeven en toch tegenwerpen: -se de, -se bile, her ne kadar, gerçi', 'Je betoog sturen met nitekim, kaldı ki, hele, ne de olsa', 'Een opiniestuk lezen en de redenering volgen'],
    vocab: [
      ['bakış açısı', 'gezichtspunt'], ['karşı görüş', 'tegengeluid'], ['genelleme', 'generalisatie'], ['çelişki', 'tegenstrijdigheid'], ['çelişmek', 'in tegenspraak zijn'], ['tutarsız', 'inconsistent'], ['itiraz', 'bezwaar'],
      ['karşı koymak', 'weerstand bieden aan'], ['ikna olmak', 'overtuigd raken'], ['ikna edici', 'overtuigend'], ['hemfikir olmak', 'het eens zijn'], ['uzlaşmak', 'tot overeenstemming komen'], ['taviz', 'concessie'], ['abartmak', 'overdrijven'],
      ['küçümsemek', 'kleineren / onderschatten'], ['göz ardı etmek', 'negeren / over het hoofd zien'], ['yadsımak', 'ontkennen (schrijftaal)'], ['öngörülebilir', 'voorspelbaar'], ['buna karşın', 'daartegenover'], ['bir bakıma', 'in zekere zin'], ['doğrusu', 'eerlijk gezegd'],
      ['kuşkusuz', 'ongetwijfeld'], ['tartışmasız', 'onbetwistbaar'], ['yapay zekâ', 'kunstmatige intelligentie'], ['mahremiyet', 'privacy'], ['denetim', 'toezicht / controle'], ['sakınca', 'bezwaar / nadeel'], ['kaçınılmaz', 'onvermijdelijk']
    ],
    grammar: [
      { t: 'Toegeven en toch tegenwerpen: -se de, -se bile, her ne kadar, gerçi', es: '-se de, -se bile, her ne kadar, gerçi',
        html: `<p>Wie goed discussieert, geeft de ander eerst een stukje gelijk. Het Turks heeft daar een hele ladder voor.</p>
<p>• <b>-se de / -sa da</b> = al, ook al: <i>Pahalı ol<b>sa da</b> alacağım.</i> (Al is het duur, ik koop het.)<br>• <b>-se bile</b> = zelfs als: <i>Herkes karşı çık<b>sa bile</b> fikrimi değiştirmem.</i> (Zelfs als iedereen ertegen is …)<br>• <b>her ne kadar … -se de</b> = hoe … ook, hoewel (nadrukkelijk, schrijftaal): <i><b>Her ne kadar</b> faydalı ol<b>sa da</b> sakıncaları göz ardı edilemez.</i><br>• <b>-mesine rağmen / karşın</b> en <b>-diği hâlde</b> = ondanks dat, hoewel (een feit): <i>Uyar<b>ılmasına rağmen</b> devam etti.</i><br>• <b>gerçi … ama</b> = weliswaar … maar: <i><b>Gerçi</b> haklısın <b>ama</b> zamanlaması yanlış.</i><br>• <b>yine de / gene de</b> = toch; <b>ne var ki</b> = alleen, echter; <b>buna karşın</b> = daartegenover.</p>
<p>In gesproken Turks komt <b>gerçi</b> vaak <b>achteraf</b>, als bijstelling van wat je net zei: <i>Gelmedi. Haber vermişti <b>gerçi</b>.</i> (Hij kwam niet. Al had hij het wel laten weten.)</p>
<p>Een verleden feit toegeven doe je met <b>-miş olsa da</b> of <b>-se de</b> achter de tijd: <i>Söz ver<b>miş olsa da</b> gelmedi.</i> · <i>Söz ver<b>diyse de</b> gelmedi.</i></p>
<p><b>⚠️ Uitzondering:</b> <b>-se</b> is de vorm voor een voorwaarde («als»), maar in <i>Yorgun ol<b>sam da</b> geldim</i> is er niets voorwaardelijks: ik bén moe, en ik bén gekomen. <b>Waarom?</b> Het woordje <b>de</b> (ook) verandert de betekenis. Letterlijk staat er «ook in het geval dat ik moe ben»: je noemt een omstandigheid die het had kunnen tegenhouden en zegt dat het tóch gebeurt. Of die omstandigheid echt is of alleen denkbaar, maakt de vorm niet uit. Het Nederlandse «al ben ik moe» doet hetzelfde met een vraagvolgorde.</p>`,
        table: [['vorm', 'betekenis', 'toon'], ['-se de', 'al, ook al', 'neutraal'], ['-se bile', 'zelfs als', 'sterker'], ['her ne kadar … -se de', 'hoewel, hoe … ook', 'schrijftaal'], ['-mesine rağmen', 'ondanks dat', 'feit'], ['gerçi … ama', 'weliswaar … maar', 'spreektaal'], ['yine de', 'toch', 'neutraal']],
        sum: 'Pahalı olsa da alacağım.',
        ex: [['Her ne kadar zor olsa da denemeye değer.', 'Hoe moeilijk het ook is, het is het proberen waard.'], ['Özür dilese bile onu affetmem.', 'Zelfs als hij zijn excuses aanbiedt, vergeef ik hem niet.'], ['Gerçi biraz geç oldu ama yine de arayacağım.', 'Het is weliswaar wat laat, maar ik bel toch.'], ['Bütün uyarılara rağmen yola çıktılar.', 'Ondanks alle waarschuwingen gingen ze op weg.']] },
      { t: 'Je betoog sturen: nitekim, kaldı ki, hele, ne de olsa', es: 'Nitekim, kaldı ki, hele, ne de olsa',
        html: `<p>Kleine woorden laten horen waar je redenering heen gaat. Ze staan vooraan in de zin of er vlak na.</p>
<p>• <b>nitekim</b> = en inderdaad, zoals ook blijkt (het volgende bevestigt het vorige): <i>Projenin gecikeceğini söylemiştim. <b>Nitekim</b> gecikti.</i><br>• <b>kaldı ki</b> = daar komt bij dat, bovendien (een extra, vaak beslissend argument): <i>Vaktimiz yok. <b>Kaldı ki</b> bütçemiz de yetmez.</i><br>• <b>ne de olsa</b> = tenslotte, per slot van rekening: <i>Ona kızamıyorum; <b>ne de olsa</b> kardeşim.</i><br>• <b>zaten</b> = toch al, sowieso: <i>Ben <b>zaten</b> gitmeyecektim.</i><br>• <b>aksine / tam tersine</b> = integendeel: <i>Kızmadım; <b>aksine</b> çok sevindim.</i><br>• <b>demek ki</b> = dus, dat betekent dat (een conclusie): <i>Işıklar yanmıyor. <b>Demek ki</b> evde yoklar.</i><br>• <b>en azından / hiç değilse</b> = ten minste, op zijn minst.<br>• <b>bırak -meyi</b> = laat staan: <i><b>Bırak</b> konuş<b>mayı</b>, selam bile vermedi.</i> (Laat staan praten, hij groette niet eens.)</p>
<p><b>Hele</b> betekent <b>vooral, zeker</b> en zet het sterkste voorbeeld neer: <i>Bu şehir çok kalabalık, <b>hele</b> yazın.</i> (… vooral in de zomer.) Met een voorwaarde betekent het «als … maar eens»: <i><b>Hele</b> bir gelsin, konuşuruz.</i> (Laat hem eerst maar eens komen, dan praten we.)</p>
<p><b>⚠️ Uitzondering:</b> in <i><b>Hele şükür</b> geldin!</i> betekent <i>hele</i> niet «vooral» maar <b>eindelijk</b>, en in <i>Dur <b>hele</b>!</i> betekent het «wacht nou eens even». <b>Waarom?</b> <i>Hele</i> heeft zelf geen vaste inhoud; het is een <b>versterker</b> die de aandacht richt op het woord ernaast. Naast een voorbeeld wordt dat «vooral», naast een bevel «nou eens», naast <i>şükür</i> (godzijdank) «eindelijk dan toch». Lees het dus altijd samen met zijn buurman.</p>`,
        table: [['woord', 'betekenis', 'wat volgt'], ['nitekim', 'en inderdaad', 'bevestiging'], ['kaldı ki', 'daar komt bij', 'extra argument'], ['ne de olsa', 'tenslotte', 'verzachtende reden'], ['aksine', 'integendeel', 'het omgekeerde'], ['demek ki', 'dus', 'conclusie'], ['hele', 'vooral', 'sterkste voorbeeld']],
        sum: 'Vaktimiz yok. Kaldı ki bütçemiz de yetmez.',
        ex: [['Yağmur yağacak demiştin. Nitekim yağdı.', 'Je zei dat het zou gaan regenen. En inderdaad, het regende.'], ['Ne de olsa o daha çocuk.', 'Hij is tenslotte nog maar een kind.'], ['Bırak yardım etmeyi, teşekkür bile etmedi.', 'Laat staan helpen, hij bedankte niet eens.'], ['Trafik berbat, hele cuma akşamları.', 'Het verkeer is vreselijk, vooral op vrijdagavond.']] }
    ],
    dialogue: {
      t: 'Kunstmatige intelligentie op het werk', place: 'İstanbul 🇹🇷',
      lines: [
        ['Selin', 'Bence yapay zekâ işimizi kolaylaştırıyor. Buna itiraz edecek biri var mı?', 'Volgens mij maakt AI ons werk makkelijker. Is er iemand die daar bezwaar tegen heeft?'],
        ['Ilse', 'Kolaylaştırdığını inkâr etmiyorum. Ne var ki her şeyi ona bırakmak bana riskli geliyor.', 'Ik ontken niet dat het dingen makkelijker maakt. Alleen lijkt het me riskant om alles eraan over te laten.'],
        ['Selin', 'Riskli olsa da kaçınılmaz. Rakiplerimiz kullanıyor; biz kullanmazsak geride kalırız.', 'Al is het riskant, het is onvermijdelijk. Onze concurrenten gebruiken het; als wij het niet doen, raken we achterop.'],
        ['Ilse', 'Gerçi haklısın ama müşteri verilerini ne yapacağız? Kaldı ki mahremiyet konusunda yasa çok açık.', 'Je hebt weliswaar gelijk, maar wat doen we met klantgegevens? Daar komt bij dat de wet over privacy heel duidelijk is.'],
        ['Selin', 'Verileri paylaşmadan da kullanılabilir. Abartıyorsun bence.', 'Het kan ook gebruikt worden zonder gegevens te delen. Je overdrijft, vind ik.'],
        ['Ilse', 'Abartmıyorum; aksine, sakıncaları küçümsediğimizi düşünüyorum. Hele denetim yokken.', 'Ik overdrijf niet; integendeel, ik denk dat we de nadelen onderschatten. Zeker zolang er geen toezicht is.'],
        ['Selin', 'Peki, o zaman önce net kurallar koyalım, sonra deneyelim. Bu konuda uzlaşabilir miyiz?', 'Goed, laten we dan eerst duidelijke regels opstellen en het daarna proberen. Kunnen we het daarover eens worden?'],
        ['Ilse', 'Bu bana makul geliyor. Ne de olsa ikimiz de aynı şeyi istiyoruz.', 'Dat klinkt me redelijk. We willen tenslotte allebei hetzelfde.']
      ],
      q: [
        { t: 'mc', q: 'Ilse neyi inkâr etmiyor?', o: ['Yapay zekânın işi kolaylaştırdığını', 'Yasanın açık olduğunu', 'Rakiplerin geride kaldığını'] },
        { t: 'mc', q: 'Ilse’nin asıl endişesi ne?', o: ['Müşteri verileri ve mahremiyet', 'Programın pahalı olması', 'Selin’in işini kaybetmesi'] },
        { t: 'mc', q: 'Sonunda neye karar veriyorlar?', o: ['Önce kural koyup sonra denemeye', 'Yapay zekâyı hiç kullanmamaya', 'Konuyu müdüre bırakmaya'] }
      ]
    },
    culture: { t: 'Discussiëren op zijn Turks: tegenspreken zonder gezichtsverlies', html: `<p>In Nederland geldt directheid als eerlijk. In Turkije geldt een frontaal «dat klopt niet» snel als onbeleefd, zeker tegen iemand die ouder of hoger is. Je begint daarom met erkenning: <b>Haklısınız ama …</b>, <b>Dediğinizi anlıyorum, yalnız …</b>, <b>Bir bakıma doğru, ancak …</b></p>
<p>Wie het echt oneens is, zegt vaak <b>Estağfurullah</b> (letterlijk: ik vraag God om vergeving) als de ander zichzelf kleineert of te veel eer geeft, en <b>Müsaadenizle</b> (met uw permissie) vóór een tegenwerping.</p>
<p>📺 Op tv is het omgekeerd: in de avondlijke <b>tartışma programları</b> praten zes gasten uren door elkaar heen. Niemand verwacht dat je dat thuis nadoet.</p>` },
    ex: [
      { t: 'cloze', s: 'Pahalı ol___ da alacağım.', h: 'al', a: ['sa'], o: ['sa', 'unca', 'duğu'], nl: 'Al is het duur, ik koop het.', tag: 'tr-toegeven' },
      { t: 'cloze', s: 'Herkes karşı çıksa ___ fikrimi değiştirmem.', h: 'zelfs', a: ['bile'], o: ['bile', 'gerçi', 'hele'], nl: 'Zelfs als iedereen ertegen is, verander ik niet van mening.', tag: 'tr-toegeven' },
      { t: 'cloze', s: 'Her ne ___ zor olsa da denemeye değer.', h: 'hoe … ook', a: ['kadar'], o: ['kadar', 'zaman', 'için'], nl: 'Hoe moeilijk het ook is, het is het proberen waard.', tag: 'tr-toegeven' },
      { t: 'cloze', s: '___ haklısın ama zamanlaması yanlış.', h: 'weliswaar', a: ['Gerçi'], o: ['Gerçi', 'Nitekim', 'Kaldı ki'], nl: 'Je hebt weliswaar gelijk, maar de timing is verkeerd.', tag: 'tr-toegeven' },
      { t: 'mc', q: '«Yorgun olsam da geldim.» Waarom staat hier de als-vorm -se, terwijl er geen voorwaarde is?', o: ['De (ook) maakt er «ook in het geval dat» van; echt of denkbaar maakt niet uit.', '-se is hier de verleden tijd.', 'Het is spreektaal en eigenlijk fout.'], x: '⚠️ Uitzondering: -se + de noemt een omstandigheid die het had kunnen tegenhouden. Net als het Nederlandse «al ben ik moe».', tag: 'tr-toegeven' },
      { t: 'cloze', s: 'Projenin gecikeceğini söylemiştim. ___ gecikti.', h: 'en inderdaad', a: ['Nitekim'], o: ['Nitekim', 'Aksine', 'Gerçi'], nl: 'Ik had gezegd dat het project vertraging zou oplopen. En inderdaad.', tag: 'tr-betoog' },
      { t: 'cloze', s: 'Vaktimiz yok. ___ ki bütçemiz de yetmez.', h: 'daar komt bij', a: ['Kaldı'], o: ['Kaldı', 'Demek', 'Oysa'], nl: 'We hebben geen tijd. Daar komt bij dat ons budget ook niet toereikend is.', tag: 'tr-betoog' },
      { t: 'cloze', s: 'Ona kızamıyorum; ne de ___ kardeşim.', h: 'tenslotte', a: ['olsa'], o: ['olsa', 'olur', 'oldu'], nl: 'Ik kan niet boos op hem worden; hij is tenslotte mijn broer.', tag: 'tr-betoog' },
      { t: 'mc', q: 'Wat betekent «hele» in «Hele şükür geldin!»?', o: ['eindelijk', 'vooral', 'misschien'], x: '⚠️ Uitzondering: hele is een versterker zonder vaste inhoud. Naast een voorbeeld betekent het «vooral», naast şükür «eindelijk dan toch».', tag: 'tr-betoog' },
      { t: 'mc', q: 'Kızmadım; … çok sevindim. Welk woord past?', o: ['aksine', 'nitekim', 'gerçi'], x: 'Aksine = integendeel: wat volgt is het omgekeerde van wat de ander dacht.', tag: 'tr-betoog' },
      { t: 'mc', q: 'Wat betekent «göz ardı etmek»?', o: ['negeren', 'bekijken', 'overtuigen'], tag: 'vocab' },
      { t: 'tr', nl: 'Hij is tenslotte nog maar een kind.', a: ['Ne de olsa o daha çocuk.', 'Ne de olsa daha çocuk.', 'Ne de olsa o henüz çocuk.', 'O ne de olsa daha çocuk.'], tag: 'tr-betoog' },
      { t: 'tr', nl: 'Al is het laat, ik bel toch.', a: ['Geç olsa da yine de arayacağım.', 'Geç olsa da arayacağım.', 'Geç olsa da yine de ararım.', 'Geç olsa bile arayacağım.'], tag: 'tr-toegeven' },
      { t: 'order', s: 'Bırak yardım etmeyi, teşekkür bile etmedi.', nl: 'Laat staan helpen, hij bedankte niet eens.', tag: 'tr-betoog' },
      { t: 'order', s: 'Her ne kadar faydalı olsa da sakıncaları göz ardı edilemez.', nl: 'Hoe nuttig het ook is, de nadelen kunnen niet worden genegeerd.', tag: 'tr-toegeven' },
      { t: 'match', p: [['önyargı', 'vooroordeel'], ['itiraz', 'bezwaar'], ['taviz', 'concessie'], ['çelişki', 'tegenstrijdigheid'], ['kuşkusuz', 'ongetwijfeld'], ['denetim', 'toezicht']], tag: 'vocab' }
    ],
    reading: {
      t: 'Uzaktan çalışma: özgürlük mü, yalnızlık mı?', type: 'Opiniestuk',
      p: [
        ['Uzaktan çalışmanın hayatımızı kolaylaştırdığı tartışmasız. Yolda geçen saatler bitti, aileyle geçirilen zaman arttı. Ne var ki madalyonun bir de öteki yüzü var.', 'Dat thuiswerken ons leven makkelijker heeft gemaakt, is onbetwistbaar. De uren onderweg zijn voorbij, de tijd met het gezin is toegenomen. Alleen heeft de medaille ook een keerzijde.'],
        ['Her ne kadar verimlilik artmış görünse de, birçok çalışan kendini yalnız hissettiğini söylüyor. Nitekim son araştırmalar, evden çalışanların işten daha zor koptuğunu gösteriyor.', 'Hoewel de productiviteit lijkt te zijn toegenomen, zeggen veel werknemers dat ze zich eenzaam voelen. En inderdaad laat recent onderzoek zien dat thuiswerkers moeilijker loskomen van hun werk.'],
        ['Bazıları bunun bir alışma meselesi olduğunu öne sürüyor. Bir bakıma haklılar. Kaldı ki ofise dönmek isteyenlerin sayısı da her yıl azalıyor.', 'Sommigen stellen dat dit een kwestie van wennen is. In zekere zin hebben ze gelijk. Daar komt bij dat het aantal mensen dat terug wil naar kantoor elk jaar afneemt.'],
        ['Bence çözüm ikisinin ortasında: haftada iki gün ofis, üç gün ev. Ne de olsa insan hem özgürlüğe hem de insana ihtiyaç duyar.', 'Volgens mij ligt de oplossing in het midden: twee dagen per week kantoor, drie dagen thuis. Een mens heeft tenslotte zowel vrijheid als mensen nodig.']
      ],
      gl: [['madalyonun öteki yüzü', 'de keerzijde van de medaille'], ['verimlilik', 'productiviteit'], ['kopmak', 'loskomen / afbreken'], ['alışma meselesi', 'kwestie van wennen'], ['ihtiyaç duymak', 'nodig hebben']],
      q: [
        { t: 'mc', q: 'Yazar uzaktan çalışmanın hangi yanını kabul ediyor?', o: ['Hayatı kolaylaştırdığını', 'Herkesi mutlu ettiğini', 'Verimliliği düşürdüğünü'] },
        { t: 'mc', q: 'Araştırmalar ne gösteriyor?', o: ['Evden çalışanlar işten daha zor kopuyor', 'Ofiste çalışanlar daha yalnız', 'Herkes ofise dönmek istiyor'] },
        { t: 'mc', q: 'Yazarın önerisi ne?', o: ['İkisini birleştirmek', 'Tamamen evden çalışmak', 'Tamamen ofise dönmek'] }
      ]
    },
    say: [['Haklısın ama bir de şöyle düşün.', 'Je hebt gelijk, maar bekijk het ook eens zo.'], ['Zor olsa da denemeye değer.', 'Al is het moeilijk, het is het proberen waard.'], ['Ne de olsa ikimiz de aynı şeyi istiyoruz.', 'We willen tenslotte allebei hetzelfde.'], ['Abartmıyorum; aksine, küçümsüyoruz.', 'Ik overdrijf niet; integendeel, we onderschatten het.']],
    task: { nl: 'Schrijf een opiniestukje van vijf of zes zinnen over een stelling waar je het half mee eens bent (bijvoorbeeld: «Kinderen onder de twaalf horen geen smartphone te hebben»). Geef de andere kant eerst gelijk (gerçi, her ne kadar, -se de), breng dan je eigen punt met minstens twee betoogwoorden (nitekim, kaldı ki, aksine, ne de olsa) en sluit af met een voorstel.', model: 'On iki yaşından küçük çocukların akıllı telefonu olmamalı deniyor. Gerçi telefonun güvenlik açısından faydalı olduğu doğru; ne var ki zararları da küçümsenmemeli. Her ne kadar çocuklar teknolojiye erken alışsa da, ekran başında geçen saatler uykularını ve derslerini etkiliyor. Nitekim öğretmenler dikkat sorunlarının arttığını söylüyor. Kaldı ki bir çocuğun aranabilmesi için akıllı telefona gerek yok; basit bir telefon da yeter. Bence yasaklamak yerine net kurallar koymak en doğrusu.' },
    scenario: { nl: 'In een vergadering in İstanbul discussieer je met collega Selin over de vraag of het team AI moet gaan gebruiken voor klantcontact. Zij is voor, jij hebt bedenkingen.', role: 'You are Selin, an enthusiastic team lead in İstanbul who wants the team to use AI for customer contact. Argue your case, concede small points (haklısın ama, gerçi), push back with kaldı ki, nitekim, aksine, and try to reach a compromise at the end. Challenge the learner to justify their objections. Use fluent C1 Turkish.', goal: 'Geef haar gedeeltelijk gelijk, breng je bezwaren met nuance en kom samen tot een compromis.' }
  });

  /* ───────────────────────── C1 · 4 ───────────────────────── */
  U({
    id: 'tr-c1-04', level: 'C1', icon: '👂', title: 'Kulak misafiri oldum', nl: 'Uitdrukkingen en verdubbelingen',
    goals: ['Veelgebruikte uitdrukkingen met lichaamsdelen begrijpen en gebruiken', 'Weten wie het onderwerp is in «canım sıkıldı» en «gözüm kaldı»', 'Verdubbelingen herkennen: yavaş yavaş, çoluk çocuk, kitap mitap', 'Natuurlijker klinken in een informeel gesprek'],
    vocab: [
      ['göz atmak', 'een blik werpen op'], ['gözden kaçmak', 'over het hoofd gezien worden'], ['göze almak', 'aandurven / voor lief nemen'], ['gözü kalmak', 'zijn zinnen op iets gezet hebben'], ['kulak misafiri olmak', 'toevallig meeluisteren'], ['kulak asmamak', 'zich er niets van aantrekken'], ['el atmak', 'iets aanpakken / zich ermee gaan bezighouden'],
      ['eli açık', 'gul / vrijgevig'], ['eli sıkı', 'gierig'], ['elinden gelmek', 'in staat zijn tot'], ['başa çıkmak', 'aankunnen / het hoofd bieden'], ['baştan savma', 'met de Franse slag'], ['ağzı sıkı', 'kan een geheim bewaren'], ['ağız aramak', 'iemand uithoren'],
      ['dil dökmek', 'mooi praten / inpalmen'], ['burnu havada', 'verwaand'], ['ayak uydurmak', 'zich aanpassen'], ['içi rahat etmek', 'gerustgesteld zijn'], ['canı çekmek', 'trek hebben in'], ['kafa yormak', 'zijn hoofd breken over'], ['aklı başına gelmek', 'tot bezinning komen'],
      ['yüz vermek', 'te veel toelaten'], ['üstüne alınmak', 'zich aangesproken voelen'], ['lafı dolandırmak', 'eromheen draaien'], ['çoluk çocuk', 'vrouw en kinderen / het hele gezin'], ['ufak tefek', 'klein / onbeduidend'], ['eğri büğrü', 'krom en scheef'], ['abuk sabuk', 'onzinnig / zomaar wat'], ['doğru dürüst', 'fatsoenlijk / behoorlijk'], ['yalan yanlış', 'half fout / onnauwkeurig']
    ],
    grammar: [
      { t: 'Uitdrukkingen met lichaamsdelen: wie is het onderwerp?', es: 'Deyimler: göz, kulak, el, baş, can',
        html: `<p>Een <b>deyim</b> is een vaste uitdrukking die je niet letterlijk kunt vertalen. Heel veel Turkse uitdrukkingen bouwen op een lichaamsdeel: <b>göz</b> (oog) voor aandacht en verlangen, <b>kulak</b> (oor) voor luisteren, <b>el</b> (hand) voor macht en geld, <b>baş</b> (hoofd) voor problemen en leiding, <b>ağız</b> en <b>dil</b> (mond, tong) voor praten, <b>can</b> (ziel, leven) voor zin en gevoel.</p>
<p>Er zijn twee bouwtypes, en het verschil is belangrijk:</p>
<p><b>Type 1: jij bent het onderwerp.</b> Het lichaamsdeel is het voorwerp, het werkwoord krijgt jouw persoonsuitgang: <i>Rapora <b>göz attım</b>.</i> (Ik heb een blik op het rapport geworpen.) · <i>Ona <b>kulak asmıyorum</b>.</i> · <i>Bu riski <b>göze aldık</b>.</i> · <i>Lafı <b>dolandırma</b>!</i></p>
<p><b>Type 2: het lichaamsdeel is het onderwerp.</b> Jij zit alleen in de <b>bezitsuitgang</b>, het werkwoord blijft in de 3e persoon: <i>O ayakkabıda <b>gözüm kaldı</b>.</i> (Letterlijk: mijn oog bleef achter bij die schoen.) · <i><b>Canım</b> dondurma <b>çekti</b>.</i> (Ik heb trek in ijs.) · <i><b>Elimden</b> bir şey <b>gelmez</b>.</i> (Ik kan er niets aan doen.) · <i><b>Aklın</b> başına <b>geldi</b> mi?</i> (Ben je tot bezinning gekomen?) · <i><b>İçim rahat etti</b>.</i></p>
<p>Als bijvoeglijk naamwoord krijgt het lichaamsdeel een bezitsuitgang van de 3e persoon: <b>eli açık</b> biri (iemand wiens hand open is: gul), <b>ağzı sıkı</b>, <b>burnu havada</b>, <b>gözü pek</b> (onverschrokken), <b>başı kalabalık</b> (druk bezet).</p>
<p><b>⚠️ Uitzondering:</b> je zegt <i>Canım sıkıl<b>dı</b></i> (ik verveel me) en nooit <i>canım sıkıldım</i>, hoewel het over «ik» gaat. <b>Waarom?</b> Grammaticaal is niet «ik» het onderwerp maar <i>canım</i> (mijn ziel), en dat is een 3e persoon. De ik-vorm zit al in de bezitsuitgang <b>-ım</b>. Wil je de persoon veranderen, dan verander je dus de bezitsuitgang, niet het werkwoord: <i>can<b>ın</b> sıkıldı</i> (jij), <i>can<b>ımız</b> sıkıldı</i> (wij).</p>`,
        table: [['uitdrukking', 'letterlijk', 'betekenis'], ['göz atmak', 'oog werpen', 'even bekijken'], ['gözüm kaldı', 'mijn oog bleef', 'ik wil het zo graag'], ['kulak misafiri olmak', 'oorgast zijn', 'toevallig meeluisteren'], ['elimden geleni yaptım', 'ik deed wat uit mijn hand kwam', 'ik deed wat ik kon'], ['ağzı sıkı', 'zijn mond is strak', 'zwijgzaam'], ['canım çekti', 'mijn ziel trok', 'ik heb er trek in']],
        sum: 'Canım dondurma çekti.',
        ex: [['Şu e-postaya bir göz atar mısın?', 'Wil je even naar deze e-mail kijken?'], ['Elimden geleni yapacağım.', 'Ik zal doen wat ik kan.'], ['Ona söyleyebilirsin, ağzı sıkıdır.', 'Je kunt het hem vertellen, hij kan zwijgen.'], ['Bu kadar işle nasıl başa çıkıyorsun?', 'Hoe kun je al dat werk aan?']] },
      { t: 'Verdubbelingen: yavaş yavaş, çoluk çocuk, kitap mitap', es: 'İkilemeler',
        html: `<p>Het Turks zegt dingen graag twee keer. Zulke paren heten <b>ikilemeler</b>. Er zijn vier soorten.</p>
<p><b>1. Hetzelfde woord twee keer</b> maakt er een bijwoord van, of zegt «één voor één», «steeds»: <i><b>yavaş yavaş</b></i> (langzaamaan), <i><b>tek tek</b></i> (een voor een), <i><b>sık sık</b></i> (vaak), <i><b>kapı kapı</b> dolaştı</i> (hij ging de deuren langs), <i><b>güle güle</b></i> (lachend: dag!).</p>
<p><b>2. Twee woorden die bijna hetzelfde betekenen</b>, vaak met rijm of beginrijm: <i><b>çoluk çocuk</b></i> (kind en kraai), <i><b>doğru dürüst</b></i> (fatsoenlijk), <i><b>yalan yanlış</b></i> (half fout), <i><b>ufak tefek</b></i> (klein grut), <i><b>eğri büğrü</b></i> (krom en scheef), <i><b>abuk sabuk</b></i> (onzin), <i><b>eş dost</b></i> (vrienden en bekenden), <i><b>aşağı yukarı</b></i> (ongeveer). Vaak bestaat het tweede woord nergens anders meer.</p>
<p><b>3. Tegenstellingen</b>: <i><b>er geç</b></i> (vroeg of laat), <i><b>az çok</b></i> (min of meer), <i><b>iyi kötü</b></i> (zo goed en zo kwaad als het gaat), <i><b>gece gündüz</b></i> (dag en nacht).</p>
<p><b>4. De m-verdubbeling</b>: herhaal het woord en vervang de eerste medeklinker door <b>m</b> (of zet er een m voor als het met een klinker begint). Dat betekent «… en zo, … en dat soort dingen», vaak een beetje wegwuivend: <i><b>kitap mitap</b></i> (boeken en zo), <i><b>para mara</b> istemem</i> (ik hoef geen geld of wat dan ook), <i><b>ev mev</b></i>, <i><b>çay may</b> içer misin?</i> Alleen in spreektaal.</p>
<p><b>⚠️ Uitzondering:</b> begint een woord zelf al met een <b>m</b>, dan werkt de m-verdubbeling niet: je zegt niet <i>masa masa</i> of <i>müzik müzik</i>. In plaats daarvan gebruik je <b>falan</b> of <b>filan</b>: <i>masa <b>falan</b></i>, <i>müzik <b>filan</b></i>. <b>Waarom?</b> Het effect van de m-verdubbeling zit in het verschil tussen de twee woorden. Bij een m-woord is er geen verschil te horen, en dan lijkt het op soort 1 (hetzelfde woord twee keer), dat iets anders betekent. <i>Falan</i> lost dat op.</p>`,
        table: [['soort', 'voorbeeld', 'betekenis'], ['zelfde woord', 'yavaş yavaş', 'langzaamaan'], ['bijna-synoniemen', 'ufak tefek', 'klein grut'], ['tegenstelling', 'er geç', 'vroeg of laat'], ['m-verdubbeling', 'kitap mitap', 'boeken en zo'], ['m-woord', 'masa falan', 'tafels en zo']],
        sum: 'Er geç öğrenecek.',
        ex: [['Yavaş yavaş alışıyorum.', 'Ik wen er langzaamaan aan.'], ['Doğru dürüst bir cevap alamadım.', 'Ik heb geen fatsoenlijk antwoord gekregen.'], ['Er geç gerçeği öğrenecek.', 'Vroeg of laat komt hij achter de waarheid.'], ['Para mara istemem, sadece yardım et.', 'Ik hoef geen geld of zo, help me alleen.']] }
    ],
    dialogue: {
      t: 'Op het terras', place: 'İzmir 🇹🇷',
      lines: [
        ['Zeynep', 'Dün kafede kulak misafiri oldum: Burak işten ayrılıyormuş!', 'Gisteren ving ik in het café toevallig iets op: Burak schijnt ontslag te nemen!'],
        ['Ilse', 'Ciddi misin? Bana hiçbir şey söylemedi. Gerçi son zamanlarda canı çok sıkkındı.', 'Meen je dat? Hij heeft mij niets gezegd. Al was hij de laatste tijd wel erg chagrijnig.'],
        ['Zeynep', 'Yeni müdürle başa çıkamıyormuş. Adamın burnu havada, kimseye kulak asmıyor.', 'Hij schijnt de nieuwe directeur niet aan te kunnen. Die man is verwaand en trekt zich van niemand iets aan.'],
        ['Ilse', 'Doğru, toplantıda da abuk sabuk şeyler söyledi. Ama işi bırakmayı göze almak kolay değil.', 'Klopt, in de vergadering zei hij ook maar wat. Maar het aandurven om je baan op te zeggen is niet makkelijk.'],
        ['Zeynep', 'Çoluk çocuk var, kira var … Umarım aklı başına gelir de önce yeni bir iş bulur.', 'Hij heeft een gezin, huur … Ik hoop dat hij tot bezinning komt en eerst een nieuwe baan zoekt.'],
        ['Ilse', 'Onunla bir konuşayım. Elimden bir şey gelir mi bilmem ama içim rahat etmez yoksa.', 'Ik ga eens met hem praten. Ik weet niet of ik iets kan doen, maar anders ben ik er niet gerust op.'],
        ['Zeynep', 'İyi edersin. Yalnız benden duyduğunu söyleme, tamam mı?', 'Dat is goed van je. Alleen niet zeggen dat je het van mij hebt, oké?'],
        ['Ilse', 'Merak etme, ağzım sıkıdır.', 'Maak je geen zorgen, ik kan zwijgen.']
      ],
      q: [
        { t: 'mc', q: 'Zeynep haberi nereden öğrendi?', o: ['Kafede tesadüfen duydu', 'Burak kendisi söyledi', 'Müdürden öğrendi'] },
        { t: 'mc', q: 'Burak neden işten ayrılmak istiyor?', o: ['Yeni müdürle başa çıkamıyor', 'Maaşı düşük', 'Başka şehre taşınıyor'] },
        { t: 'mc', q: 'Ilse ne yapacak?', o: ['Burak’la konuşacak', 'Müdüre şikâyet edecek', 'Hiçbir şey yapmayacak'] }
      ]
    },
    culture: { t: 'Atasözü en deyim: wijsheid in één zin', html: `<p>Turken maken onderscheid tussen een <b>deyim</b> (uitdrukking, zoals <i>göz atmak</i>) en een <b>atasözü</b> (letterlijk «voorouderwoord»: een spreekwoord met een les). Spreekwoorden gebruik je om een gesprek af te ronden; er is dan weinig meer tegen in te brengen.</p>
<p>Een paar die je vaak hoort: <b>Damlaya damlaya göl olur</b> (druppel voor druppel wordt het een meer: alle beetjes helpen), <b>Sakla samanı, gelir zamanı</b> (bewaar het stro, zijn tijd komt wel), <b>Ağaç yaşken eğilir</b> (een boom buig je als hij jong is), <b>Üzüm üzüme baka baka kararır</b> (druiven worden donker door naar elkaar te kijken: je wordt zoals je omgeving).</p>
<p>👀 Let op de verdubbelingen in die spreekwoorden: <i>damlaya damlaya</i>, <i>baka baka</i>. Het ritme helpt bij het onthouden.</p>` },
    ex: [
      { t: 'cloze', s: 'Şu rapora bir göz ___ mısın?', h: 'even bekijken', a: ['atar'], o: ['atar', 'kalır', 'asar'], nl: 'Wil je even naar dit rapport kijken?', tag: 'tr-deyim' },
      { t: 'cloze', s: 'Canım dondurma ___.', h: 'ik heb trek in', a: ['çekti', 'çekiyor'], o: ['çekti', 'çektim', 'attı'], nl: 'Ik heb trek in ijs.', x: 'Canım is het onderwerp, dus het werkwoord staat in de 3e persoon: çekti, niet çektim.', tag: 'tr-deyim' },
      { t: 'cloze', s: 'Elim___ geleni yapacağım.', h: 'wat ik kan', a: ['den'], o: ['den', 'e', 'de'], nl: 'Ik zal doen wat ik kan.', tag: 'tr-deyim' },
      { t: 'mc', q: 'Waarom is «canım sıkıldım» fout?', o: ['Het onderwerp is canım (3e persoon); «ik» zit al in de bezitsuitgang.', 'Sıkılmak heeft geen verleden tijd.', 'Can kan geen bezitsuitgang krijgen.'], x: '⚠️ Uitzondering: bij deze uitdrukkingen verander je de bezitsuitgang, niet het werkwoord: canım sıkıldı, canın sıkıldı, canımız sıkıldı.', tag: 'tr-deyim' },
      { t: 'mc', q: 'Wat zeg je over iemand die geen geheimen doorvertelt?', o: ['Ağzı sıkıdır.', 'Eli sıkıdır.', 'Burnu havadadır.'], x: 'Ağzı sıkı = zwijgzaam. Eli sıkı = gierig. Burnu havada = verwaand.', tag: 'tr-deyim' },
      { t: 'mc', q: 'Wat betekent «O ayakkabıda gözüm kaldı»?', o: ['Ik wil die schoenen nog steeds heel graag.', 'Ik heb die schoenen over het hoofd gezien.', 'Ik heb die schoenen bekeken.'], tag: 'tr-deyim' },
      { t: 'cloze', s: '___ yavaş alışıyorum.', h: 'langzaamaan', a: ['Yavaş'], o: ['Yavaş', 'Mavaş', 'Tek'], nl: 'Ik wen er langzaamaan aan.', tag: 'tr-ikileme' },
      { t: 'cloze', s: 'Er ___ gerçeği öğrenecek.', h: 'vroeg of laat', a: ['geç'], o: ['geç', 'çok', 'gündüz'], nl: 'Vroeg of laat komt hij achter de waarheid.', tag: 'tr-ikileme' },
      { t: 'cloze', s: 'Kitap ___ istemiyorum, sadece dinlenmek istiyorum.', h: '… en zo', a: ['mitap'], o: ['mitap', 'kitap', 'tefek'], nl: 'Ik wil geen boeken of zo, ik wil alleen uitrusten.', tag: 'tr-ikileme' },
      { t: 'mc', q: 'Hoe zeg je «muziek en zo» in spreektaal?', o: ['müzik falan', 'müzik müzik', 'müzik mitap'], x: '⚠️ Uitzondering: bij een woord dat met m begint werkt de m-verdubbeling niet. Er is dan geen verschil te horen. Gebruik falan of filan.', tag: 'tr-ikileme' },
      { t: 'mc', q: 'Wat betekent «doğru dürüst bir cevap»?', o: ['een fatsoenlijk antwoord', 'een eerlijk maar hard antwoord', 'een fout antwoord'], tag: 'tr-ikileme' },
      { t: 'mc', q: 'Wat betekent «lafı dolandırmak»?', o: ['eromheen draaien', 'iemand uithoren', 'mooi praten'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik ving het toevallig op.', a: ['Kulak misafiri oldum.', 'Tesadüfen kulak misafiri oldum.'], tag: 'tr-deyim' },
      { t: 'tr', nl: 'Ik kan er niets aan doen.', a: ['Elimden bir şey gelmez.', 'Elimden bir şey gelmiyor.', 'Elimden hiçbir şey gelmez.', 'Elimden hiçbir şey gelmiyor.'], tag: 'tr-deyim' },
      { t: 'order', s: 'Bu kadar işle nasıl başa çıkıyorsun?', nl: 'Hoe kun je al dat werk aan?', tag: 'tr-deyim' },
      { t: 'match', p: [['eli açık', 'gul'], ['eli sıkı', 'gierig'], ['burnu havada', 'verwaand'], ['ağzı sıkı', 'zwijgzaam'], ['ufak tefek', 'klein grut'], ['er geç', 'vroeg of laat']], tag: 'tr-deyim' }
    ],
    reading: {
      t: 'Deyimleri kelimesi kelimesine anlayınca', type: 'Blog',
      p: [
        ['Türkçe öğrenmeye başladığım ilk yıl deyimler yüzünden az gülmediler bana. Ev sahibim bir gün «Kızım, gözün aydın!» dedi. Aynaya koştum; gözümde bir şey mi vardı?', 'In het eerste jaar dat ik Turks leerde, is er door de uitdrukkingen flink om me gelachen. Mijn huisbazin zei op een dag: «Meisje, je oog is helder!» Ik rende naar de spiegel; zat er iets in mijn oog?'],
        ['Meğer annem geliyor diye beni kutluyormuş. Başka bir gün komşum «Kusura bakma, kulak misafiri oldum» dedi. Kulağı nasıl misafir olur, doğru dürüst anlayamadım.', 'Ze bleek me te feliciteren omdat mijn moeder kwam. Een andere dag zei mijn buurvrouw: «Neem me niet kwalijk, ik was oorgast.» Hoe een oor te gast kan zijn, begreep ik niet goed.'],
        ['En çok «eline sağlık» beni şaşırttı. Yemek yaptım, herkes ellerime sağlık diledi. Ellerim hasta değildi ki! Yavaş yavaş öğrendim: Türkçede teşekkür bile bir dua gibi.', 'Het meest verbaasde me «gezondheid aan je hand». Ik had gekookt en iedereen wenste mijn handen gezondheid. Mijn handen waren toch niet ziek! Langzaamaan leerde ik: in het Turks is zelfs een bedankje een soort gebed.'],
        ['Şimdi ben de ufak tefek deyimler kullanıyorum. Yanlış malış söylüyorum belki ama komşularım çok seviniyor. Er geç hepsini öğreneceğim.', 'Nu gebruik ik zelf ook wat kleine uitdrukkingen. Misschien zeg ik ze fout of zo, maar mijn buren zijn er erg blij mee. Vroeg of laat leer ik ze allemaal.']
      ],
      gl: [['az gülmediler', 'ze hebben niet weinig (= flink) gelachen'], ['gözün aydın', 'gefeliciteerd (bij een blij weerzien of goed nieuws)'], ['meğer', 'het bleek dat'], ['eline sağlık', 'dank je wel voor wat je gemaakt hebt'], ['dua', 'gebed'], ['yanlış malış', 'fout of zo']],
      q: [
        { t: 'mc', q: 'Ev sahibi neden «gözün aydın» dedi?', o: ['Yazarın annesi geliyordu', 'Yazarın gözü kızarmıştı', 'Yazar sınavı geçmişti'] },
        { t: 'mc', q: 'Yazarı en çok hangi deyim şaşırttı?', o: ['Eline sağlık', 'Kulak misafiri olmak', 'Gözün aydın'] },
        { t: 'mc', q: 'Komşular yazarın deyim kullanmasına ne diyor?', o: ['Çok seviniyorlar', 'Gülüp düzeltiyorlar', 'Hiç anlamıyorlar'] }
      ]
    },
    say: [['Elimden geleni yapacağım.', 'Ik zal doen wat ik kan.'], ['Merak etme, ağzım sıkıdır.', 'Maak je geen zorgen, ik kan zwijgen.'], ['Yavaş yavaş alışıyorum.', 'Ik wen er langzaamaan aan.'], ['Lafı dolandırma, açık konuş.', 'Draai er niet omheen, praat duidelijk.']],
    task: { nl: 'Beschrijf in vijf of zes zinnen een collega, buur of familielid, zonder de naam te noemen. Gebruik minstens vier uitdrukkingen met een lichaamsdeel (eli açık, burnu havada, ağzı sıkı, kulak asmamak, elinden gelmek …) en twee verdubbelingen (doğru dürüst, ufak tefek, er geç, yavaş yavaş).', model: 'Komşum Hatice Teyze eli açık bir kadındır; kapısına kim gelse boş çevirmez. Ağzı da sıkıdır, ona anlattığın sır kimseye gitmez. Yalnız biraz meraklıdır: balkonda otururken herkese kulak misafiri olur. Ufak tefek şeylere üzülmez, zor günlerle başa çıkmayı iyi bilir. Bir şeye ihtiyacım olsa elinden geleni yapar. Er geç ben de onun gibi bir komşu olmak istiyorum.' },
    scenario: { nl: 'Je zit met je vriendin Zeynep op een terras in İzmir. Ze heeft nieuws opgevangen over een gezamenlijke collega en wil er alles over kwijt.', role: 'You are Zeynep, a warm and gossipy friend on a terrace in İzmir. Tell the learner what you overheard (kulak misafiri oldum) about a colleague who wants to quit. Use many idioms with body parts (burnu havada, kulak asmamak, başa çıkmak, aklı başına gelmek, ağzı sıkı, canı sıkkın) and reduplications (abuk sabuk, çoluk çocuk, doğru dürüst, falan filan). Ask the learner what they think and whether they can keep a secret. If they misuse an idiom, repeat it correctly in your reply. Informal C1 Turkish.', goal: 'Reageer op het nieuws met passende uitdrukkingen, geef je mening en beloof dat je het niet doorvertelt.' }
  });
})(window.SPT);
