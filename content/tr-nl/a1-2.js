/* Turks voor Nederlandstaligen — niveau A1, units 6–10 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── A1 · 6 ───────────────────────── */
  U({
    id: 'tr-a1-06', level: 'A1', icon: '⏰', title: 'Her gün ne yapıyorsun?', nl: 'Je dag: de tegenwoordige tijd',
    goals: ['Vertellen wat je op een dag doet', 'Werkwoorden vervoegen met -iyor', 'Zeggen wat je niet doet en ernaar vragen', 'De dagen van de week noemen'],
    vocab: [
      ['kalkmak', 'opstaan'], ['kahvaltı yapmak', 'ontbijten'], ['gitmek', 'gaan'], ['gelmek', 'komen'], ['çalışmak', 'werken / studeren'], ['yemek yemek', 'eten (een maaltijd)'], ['içmek', 'drinken'],
      ['okumak', 'lezen'], ['yazmak', 'schrijven'], ['izlemek', 'kijken (naar tv, een film)'], ['dinlemek', 'luisteren'], ['uyumak', 'slapen'], ['yapmak', 'doen / maken'],
      ['konuşmak', 'praten / spreken'], ['öğrenmek', 'leren'], ['oturmak', 'zitten / wonen'], ['beklemek', 'wachten'], ['her gün', 'elke dag'], ['öğle', 'middag (rond 12 uur)'], ['gece', 'nacht'],
      ['erken', 'vroeg'], ['geç', 'laat'], ['hafta', 'week'], ['hafta sonu', 'weekend'], ['Pazartesi', 'maandag'], ['Salı', 'dinsdag'], ['Çarşamba', 'woensdag'], ['Perşembe', 'donderdag'],
      ['Cuma', 'vrijdag'], ['Cumartesi', 'zaterdag'], ['Pazar', 'zondag'], ['okul', 'school'], ['genellikle', 'meestal']
    ],
    grammar: [
      { t: 'De tegenwoordige tijd: -iyor', es: 'Şimdiki zaman: -iyor',
        html: `<p>Het hele werkwoord eindigt op <b>-mek</b> of <b>-mak</b>: <i>gel<b>mek</b></i> (komen), <i>al<b>mak</b></i> (nemen). Haal dat eraf en je hebt de <b>stam</b>: <i>gel-</i>, <i>al-</i>.</p>
<p>Voor «ik doe» of «ik ben aan het doen» zet je achter de stam: een <b>klinker</b> (i, ı, u of ü, volgens de klinkerharmonie) + <b>yor</b> + de <b>persoonsuitgang</b>: <i>gel-<b>i</b>-<b>yor</b>-<b>um</b></i> = ik kom.</p>
<p>Het stukje <b>-yor-</b> verandert nooit, en omdat de laatste klinker daarna altijd een <b>o</b> is, zijn de persoonsuitgangen altijd dezelfde: <b>-um, -sun, –, -uz, -sunuz, -lar</b>.</p>
<p>Eindigt de stam op een <b>klinker</b>, dan valt die weg en komt de harmonieklinker ervoor in de plaats: <i>bekl<b>e</b>-</i> → <i>bekl<b>i</b>yor</i> (hij wacht), <i>çalış-</i> → <i>çalış<b>ı</b>yor</i>, <i>ok<b>u</b>-</i> → <i>ok<b>u</b>yor</i>, <i>y<b>e</b>-</i> → <i>y<b>i</b>yor</i> (hij eet).</p>
<p><b>⚠️ Uitzondering:</b> <i>gitmek</i> (gaan) → <i>gi<b>d</b>iyor</i>, niet <s>gitiyor</s>. <b>Waarom?</b> Bij een paar korte, veelgebruikte stammen wordt de <b>t zacht (d)</b> zodra er een klinker op volgt; dat spreekt makkelijker uit. Het zijn er maar een handvol: <i>gitmek → gidiyor</i>, <i>etmek → ediyor</i> (doen), <i>tatmak → tadıyor</i> (proeven). Bij andere werkwoorden blijft de t gewoon staan: <i>yatmak → yatıyor</i> (liggen).</p>`,
        table: [['', 'gelmek (komen)', 'almak (nemen)', 'okumak (lezen)', 'görmek (zien)'], ['ben', 'geliyorum', 'alıyorum', 'okuyorum', 'görüyorum'], ['sen', 'geliyorsun', 'alıyorsun', 'okuyorsun', 'görüyorsun'],
          ['o', 'geliyor', 'alıyor', 'okuyor', 'görüyor'], ['biz', 'geliyoruz', 'alıyoruz', 'okuyoruz', 'görüyoruz'], ['siz', 'geliyorsunuz', 'alıyorsunuz', 'okuyorsunuz', 'görüyorsunuz'], ['onlar', 'geliyorlar', 'alıyorlar', 'okuyorlar', 'görüyorlar']],
        sum: 'Geliyorum, alıyorsun, okuyor, görüyoruz.',
        ex: [['Her gün saat yedide kalkıyorum.', 'Ik sta elke dag om zeven uur op.'], ['Türkçe öğreniyorum.', 'Ik leer Turks.'], ['Annem çay içiyor.', 'Mijn moeder drinkt thee.'], ['Okula gidiyoruz.', 'We gaan naar school.']] },
      { t: 'Niet doen en vragen: -miyor en mu?', es: 'Olumsuz ve soru',
        html: `<p><b>Ontkenning:</b> zet <b>-m-</b> tussen de stam en <i>-iyor</i>. De klinker ervoor volgt weer de harmonie: <i>gel<b>mi</b>yorum</i> (ik kom niet), <i>al<b>mı</b>yorum</i> (ik neem niet), <i>oku<b>mu</b>yorum</i> (ik lees niet), <i>gör<b>mü</b>yorum</i> (ik zie niet).</p>
<p><b>Vraag:</b> het vraagwoordje is hier altijd <b>mu</b> (want het volgt op de o van <i>-yor</i>) en staat los. De persoonsuitgang verhuist naar <i>mu</i>: <i>Geliyor <b>musun</b>?</i> (Kom je?) · <i>Çalışıyor <b>mu</b>?</i> (Werkt hij?) · <i>Gidiyor <b>muyuz</b>?</i> (Gaan we?)</p>
<p>Bij <i>onlar</i> blijft <i>-lar</i> aan het werkwoord: <i>Geliyor<b>lar mı</b>?</i></p>
<p>Het Turks maakt geen verschil tussen «ik werk» en «ik ben aan het werken»: <i>çalışıyorum</i> is allebei.</p>`,
        table: [['', 'bevestigend', 'ontkennend', 'vraag'], ['ben', 'geliyorum', 'gelmiyorum', 'geliyor muyum?'], ['sen', 'geliyorsun', 'gelmiyorsun', 'geliyor musun?'], ['o', 'geliyor', 'gelmiyor', 'geliyor mu?'],
          ['biz', 'geliyoruz', 'gelmiyoruz', 'geliyor muyuz?'], ['siz', 'geliyorsunuz', 'gelmiyorsunuz', 'geliyor musunuz?'], ['onlar', 'geliyorlar', 'gelmiyorlar', 'geliyorlar mı?']],
        sum: 'Gelmiyorum. Geliyor musun?',
        ex: [['Bugün çalışmıyorum.', 'Vandaag werk ik niet.'], ['Kahve içiyor musun?', 'Drink je koffie?'], ['Hayır, kahve içmiyorum.', 'Nee, ik drink geen koffie.'], ['Ne yapıyorsun?', 'Wat doe je? / Wat ben je aan het doen?']] },
      { t: 'Woordvolgorde: het werkwoord komt achteraan', es: 'Söz dizimi',
        html: `<p>De gewone volgorde is <b>onderwerp – tijd – plaats – lijdend voorwerp – werkwoord</b>. Het werkwoord sluit de zin af: <i>Ben her sabah evde kahve <b>içiyorum</b>.</i> (lett.: ik elke ochtend thuis koffie drink.)</p>
<p>Wat je wilt benadrukken, zet je <b>vlak vóór het werkwoord</b>.</p>
<p><b>Dagen:</b> voor «op maandag» zeg je <i>Pazartesi günü</i> (lett.: maandag-dag) of kortweg <i>Pazartesi</i>. Elke maandag: <i>her Pazartesi</i> of <i>Pazartesileri</i>.</p>
<p>De dagen hebben een logica: <i>Pazar</i> = zondag (ook: markt), <i>Pazar<b>tesi</b></i> = «de dag na zondag»; <i>Cuma</i> = vrijdag, <i>Cuma<b>rtesi</b></i> = «de dag na vrijdag».</p>`,
        table: [['Nederlands', 'Turks'], ['Ik drink thee.', 'Çay içiyorum.'], ['Ik drink thuis thee.', 'Evde çay içiyorum.'], ['Ik drink elke dag thuis thee.', 'Her gün evde çay içiyorum.'], ['Op zaterdag werk ik niet.', 'Cumartesi günü çalışmıyorum.']],
        ex: [['Cumartesi günü geç kalkıyorum.', 'Op zaterdag sta ik laat op.'], ['Akşam televizyon izliyoruz.', '’s Avonds kijken we televisie.']] }
    ],
    dialogue: {
      t: 'Een gewone dag', place: 'İstanbul 🇹🇷',
      lines: [
        ['Zeynep', 'Daan, her gün saat kaçta kalkıyorsun?', 'Daan, hoe laat sta je elke dag op?'],
        ['Daan', 'Genellikle saat yedide kalkıyorum. Sonra kahvaltı yapıyorum.', 'Meestal sta ik om zeven uur op. Daarna ontbijt ik.'],
        ['Zeynep', 'Çok erken! Ben sekiz buçukta kalkıyorum. Sabah ne içiyorsun?', 'Wat vroeg! Ik sta om half negen op. Wat drink je ’s ochtends?'],
        ['Daan', 'Kahve içiyorum. Çay içmiyorum.', 'Ik drink koffie. Ik drink geen thee.'],
        ['Zeynep', 'Çay içmiyor musun? Ama Türkiye’desin!', 'Drink je geen thee? Maar je bent in Turkije!'],
        ['Daan', 'Tamam, akşam çay içiyorum. Sen nerede çalışıyorsun?', 'Oké, ’s avonds drink ik thee. Waar werk jij?'],
        ['Zeynep', 'Hastanede çalışıyorum. Cumartesi de çalışıyorum.', 'Ik werk in het ziekenhuis. Ik werk ook op zaterdag.'],
        ['Daan', 'Pazar günü ne yapıyorsun?', 'Wat doe je op zondag?'],
        ['Zeynep', 'Pazar günü çalışmıyorum. Geç kalkıyorum ve kitap okuyorum.', 'Op zondag werk ik niet. Ik sta laat op en lees een boek.'],
        ['Daan', 'Çok güzel. Ben Pazar günü Türkçe öğreniyorum!', 'Heerlijk. Ik leer op zondag Turks!']
      ],
      q: [
        { t: 'mc', q: 'Daan saat kaçta kalkıyor?', o: ['Saat yedide', 'Saat sekiz buçukta', 'Saat dokuzda'] },
        { t: 'mc', q: 'Zeynep nerede çalışıyor?', o: ['Hastanede', 'Okulda', 'Evde'] },
        { t: 'mc', q: 'Zeynep Pazar günü ne yapıyor?', o: ['Kitap okuyor', 'Çalışıyor', 'Türkçe öğreniyor'] }
      ]
    },
    culture: { t: 'Werkweek, weekend en het theeuurtje', html: `<p>De werkweek loopt net als bij ons van <b>maandag tot en met vrijdag</b>; het weekend is zaterdag en zondag. Veel winkels zijn ook op zondag open, vaak tot laat in de avond.</p>
<p>Op <b>vrijdag</b> (<i>Cuma</i>) is rond het middaguur het vrijdaggebed; sommige kleine winkels sluiten dan even. Vrijdag wens je elkaar <i>Hayırlı Cumalar!</i></p>
<p>☕ Rond vijf uur is het <i>çay saati</i> (theetijd). En wie iemand aan het werk ziet, zegt in het voorbijgaan <b>Kolay gelsin!</b> (lett.: «moge het makkelijk gaan»). Dat zeg je tegen de buschauffeur, de bakker en je collega's; er is geen Nederlands woord voor.</p>` },
    ex: [
      { t: 'cloze', s: 'Ben her gün çay iç___.', a: ['iyorum'], o: ['iyorum', 'ıyorum', 'uyorum'], nl: 'Ik drink elke dag thee.', tag: 'tr-iyor' },
      { t: 'cloze', s: 'Sen nerede çalış___?', a: ['ıyorsun'], o: ['ıyorsun', 'iyorsun', 'ıyorum'], nl: 'Waar werk je?', x: 'Na ı komt ı: çalışıyorsun.', tag: 'tr-iyor' },
      { t: 'cloze', s: 'Elif kitap ok___.', a: ['uyor'], o: ['uyor', 'iyor', 'uyorum'], nl: 'Elif leest een boek.', tag: 'tr-iyor' },
      { t: 'cloze', s: 'Biz film izl___.', a: ['iyoruz'], o: ['iyoruz', 'eyoruz', 'iyorsunuz'], nl: 'Wij kijken een film.', x: 'De e van izle- valt weg en wordt i: izliyoruz.', tag: 'tr-iyor' },
      { t: 'mc', q: 'Hoe zeg je «hij gaat»?', o: ['gidiyor', 'gitiyor', 'gidyor'], x: '⚠️ Uitzondering: bij gitmek wordt de t een d vóór een klinker, omdat dat bij deze korte stam makkelijker uitspreekt. Zo ook etmek → ediyor.', tag: 'tr-iyor' },
      { t: 'mc', q: 'Hoe zeg je «hij eet»?', o: ['yiyor', 'yeyor', 'yeiyor'], x: 'De e van ye- valt weg en wordt i: yiyor.', tag: 'tr-iyor' },
      { t: 'cloze', s: 'Bugün çalış___yorum.', h: 'niet', a: ['mı'], o: ['mı', 'mi', 'mu'], nl: 'Vandaag werk ik niet.', tag: 'tr-neg' },
      { t: 'cloze', s: 'Kahve iç___yorum.', h: 'niet', a: ['mi'], o: ['mi', 'mı', 'mü'], nl: 'Ik drink geen koffie.', tag: 'tr-neg' },
      { t: 'cloze', s: 'Türkçe öğreniyor ___?', h: 'jij', a: ['musun'], o: ['musun', 'misin', 'mu'], nl: 'Leer je Turks?', x: 'Na -yor is het altijd mu; de uitgang -sun komt erachter.', tag: 'tr-mi' },
      { t: 'mc', q: 'Welke dag komt na «Pazar»?', o: ['Pazartesi', 'Cumartesi', 'Salı'], x: 'Pazartesi betekent letterlijk «de dag na zondag».', tag: 'vocab' },
      { t: 'tr', nl: 'Wat doe je?', a: ['Ne yapıyorsun?', 'Sen ne yapıyorsun?'], tag: 'tr-iyor' },
      { t: 'tr', nl: 'Ik leer Turks.', a: ['Türkçe öğreniyorum.', 'Ben Türkçe öğreniyorum.'], tag: 'tr-iyor' },
      { t: 'tr', nl: 'Ik werk niet op zondag.', a: ['Pazar günü çalışmıyorum.', 'Pazar çalışmıyorum.', 'Ben Pazar günü çalışmıyorum.', 'Pazar günleri çalışmıyorum.'], tag: 'tr-neg' },
      { t: 'tr', nl: 'Drink je thee?', a: ['Çay içiyor musun?', 'Sen çay içiyor musun?'], tag: 'tr-mi' },
      { t: 'order', s: 'Ben her sabah evde kahve içiyorum.', nl: 'Ik drink elke ochtend thuis koffie.', tag: 'tr-volg' },
      { t: 'match', p: [['gitmek', 'gaan'], ['gelmek', 'komen'], ['okumak', 'lezen'], ['yazmak', 'schrijven'], ['uyumak', 'slapen'], ['içmek', 'drinken']], tag: 'vocab' }
    ],
    reading: {
      t: 'Elif’in bir günü', type: 'Blogbericht',
      p: [
        ['Elif öğretmen. Her gün saat altı buçukta kalkıyor ve kahvaltı yapıyor.', 'Elif is lerares. Ze staat elke dag om half zeven op en ontbijt.'],
        ['Saat sekizde okula gidiyor. Okulda Türkçe dersi veriyor.', 'Om acht uur gaat ze naar school. Op school geeft ze Turkse les.'],
        ['Öğle yemeği yemiyor, sadece çay içiyor. Akşam eve geliyor.', 'Ze eet geen lunch, ze drinkt alleen thee. ’s Avonds komt ze thuis.'],
        ['Hafta sonu çalışmıyor. Cumartesi günü arkadaşları ile konuşuyor, Pazar günü kitap okuyor.', 'In het weekend werkt ze niet. Op zaterdag praat ze met haar vrienden, op zondag leest ze een boek.']
      ],
      gl: [['ders veriyor', 'geeft les'], ['öğle yemeği', 'lunch'], ['sadece', 'alleen'], ['ile', 'met']],
      q: [
        { t: 'mc', q: 'Elif saat kaçta okula gidiyor?', o: ['Saat sekizde', 'Saat altı buçukta', 'Saat yedide'] },
        { t: 'mc', q: 'Elif öğle ne yapıyor?', o: ['Çay içiyor', 'Yemek yiyor', 'Uyuyor'] },
        { t: 'mc', q: 'Elif Pazar günü ne yapıyor?', o: ['Kitap okuyor', 'Çalışıyor', 'Okula gidiyor'] }
      ]
    },
    say: [['Her gün saat yedide kalkıyorum.', 'Ik sta elke dag om zeven uur op.'], ['Ne yapıyorsun?', 'Wat ben je aan het doen?'], ['Türkçe öğreniyorum.', 'Ik leer Turks.'], ['Bugün çalışmıyorum.', 'Vandaag werk ik niet.']],
    task: { nl: 'Beschrijf je dag in 4 of 5 zinnen: hoe laat je opstaat, wat je eet of drinkt, waar je werkt of studeert en wat je ’s avonds doet. Zet er één ontkenning in.', model: 'Her gün saat yedide kalkıyorum. Kahvaltı yapıyorum ve kahve içiyorum. Sonra işe gidiyorum. Akşam kitap okuyorum. Televizyon izlemiyorum.' },
    scenario: { nl: 'Je nieuwe huisgenoot Burak wil weten hoe jouw week eruitziet, zodat jullie de badkamer en keuken kunnen verdelen.', role: 'You are Burak, a relaxed student in İstanbul and the learner’s new flatmate. Ask about their daily routine: what time they get up, when they work or study, what they do in the evening and on weekends. Tell them your own routine too. Use only simple present-tense Turkish (-iyor).', goal: 'Vertel wat je op een gewone dag en in het weekend doet, en vraag het ook aan Burak.' }
  });

  /* ───────────────────────── A1 · 7 ───────────────────────── */
  U({
    id: 'tr-a1-07', level: 'A1', icon: '🗺️', title: 'Şehirde: nerede, nereye, nereden?', nl: 'In de stad: waar, waarheen, waarvandaan',
    goals: ['Zeggen waar iets is met -de / -da', 'Zeggen waar je heen gaat en vandaan komt', 'De weg vragen en begrijpen', 'Vervoermiddelen noemen'],
    vocab: [
      ['nerede', 'waar'], ['nereye', 'waarheen'], ['nereden', 'waarvandaan'], ['burada', 'hier'], ['orada', 'daar'], ['sokak', 'straat'], ['cadde', 'laan / grote straat'], ['meydan', 'plein'],
      ['durak', 'halte'], ['otobüs', 'bus'], ['metro', 'metro'], ['tramvay', 'tram'], ['vapur', 'veerboot'], ['taksi', 'taxi'], ['havalimanı', 'vliegveld'], ['otel', 'hotel'],
      ['banka', 'bank'], ['eczane', 'apotheek'], ['hastane', 'ziekenhuis'], ['market', 'supermarkt'], ['cami', 'moskee'], ['müze', 'museum'], ['köprü', 'brug'], ['tuvalet', 'wc'],
      ['sağ', 'rechts'], ['sol', 'links'], ['düz', 'rechtdoor'], ['yakın', 'dichtbij'], ['uzak', 'ver'], ['karşıda', 'aan de overkant'], ['köşe', 'hoek'], ['bilet', 'kaartje'], ['dönmek', 'afslaan / terugkeren']
    ],
    grammar: [
      { t: 'Waar? -de, -da, -te, -ta', es: 'Nerede? -de / -da',
        html: `<p>Het Turks heeft geen losse voorzetsels als «in», «op» en «bij». Je plakt <b>-de</b> of <b>-da</b> achter het woord (klinkerharmonie soort 1): <i>ev<b>de</b></i> (thuis, in huis), <i>okul<b>da</b></i> (op school), <i>İzmir<b>'de</b></i> (in İzmir).</p>
<p>Na een <b>harde medeklinker</b> (<b>f, s, t, k, ç, ş, h, p</b>) wordt de d een <b>t</b>: <i>sokak<b>ta</b></i> (op straat), <i>otobüs<b>te</b></i> (in de bus), <i>Maastricht<b>'te</b></i>. Ezelsbruggetje voor die acht letters: <b>F</b>ı<b>st</b>ı<b>kç</b>ı <b>Ş</b>a<b>h</b>a<b>p</b> («Şahap de pistacheverkoper»).</p>
<p>Bij <b>eigennamen</b> schrijf je een apostrof vóór de uitgang: <i>İstanbul<b>'da</b></i>, <i>Hollanda<b>'da</b></i>.</p>
<p>Met een persoonsuitgang erachter zeg je waar iemand is: <i>Evde<b>yim</b>.</i> (Ik ben thuis.) <i>Nerede<b>sin</b>?</i> (Waar ben je?)</p>
<p><b>Hier en daar:</b> <i>bura<b>da</b></i> (hier), <i>ora<b>da</b></i> (daar), <i>nere<b>de</b></i> (waar).</p>`,
        table: [['woord', 'waar?', 'waarom zo'], ['ev', 'evde', 'e → e'], ['okul', 'okulda', 'u → a'], ['sokak', 'sokakta', 'na k → t'], ['otobüs', 'otobüste', 'na s → t'], ['İstanbul', 'İstanbul’da', 'eigennaam: apostrof']],
        sum: 'Evde, okulda, sokakta, İstanbul’da.',
        ex: [['Neredesin? — Evdeyim.', 'Waar ben je? — Ik ben thuis.'], ['Eczane bu sokakta.', 'De apotheek is in deze straat.'], ['Hollanda’da yaşıyorum.', 'Ik woon in Nederland.']] },
      { t: 'Waarheen? -e / -a · Waarvandaan? -den / -dan', es: 'Nereye? Nereden?',
        html: `<p><b>Waarheen</b> (naar): <b>-e</b> of <b>-a</b>. Eindigt het woord op een klinker, dan komt er een <b>y</b> tussen: <i>ev<b>e</b></i> (naar huis), <i>okul<b>a</b></i> (naar school), <i>banka<b>ya</b></i> (naar de bank), <i>İzmir<b>'e</b></i>.</p>
<p><b>Waarvandaan</b> (van, uit): <b>-den</b> of <b>-dan</b>, en na een harde medeklinker (Fıstıkçı Şahap) <b>-ten / -tan</b>: <i>ev<b>den</b></i> (van huis), <i>okul<b>dan</b></i>, <i>market<b>ten</b></i>, <i>Hollanda<b>'dan</b></i>.</p>
<p>Vóór <i>-e / -a</i> wordt een <b>k</b> aan het eind van een langer woord weer zacht: <i>sokak</i> → <i>soka<b>ğ</b>a</i> (naar de straat), <i>durak</i> → <i>dura<b>ğ</b>a</i>.</p>
<p><b>⚠️ Uitzondering:</b> <i>ben</i> → <b>bana</b> (aan mij, naar mij) en <i>sen</i> → <b>sana</b> (aan jou), niet <s>bene</s> en <s>sene</s>. <b>Waarom?</b> Dit zijn oeroude vormen waarin de e een a werd onder invloed van de uitgang; alleen deze twee woorden doen dat. De andere naamvallen zijn regelmatig: <i>bende</i>, <i>benden</i>.</p>`,
        table: [['', 'waar? (-de)', 'waarheen? (-e)', 'waarvandaan? (-den)'], ['ev', 'evde', 'eve', 'evden'], ['okul', 'okulda', 'okula', 'okuldan'], ['banka', 'bankada', 'bankaya', 'bankadan'], ['sokak', 'sokakta', 'sokağa', 'sokaktan'], ['bura-', 'burada', 'buraya', 'buradan'], ['ben ⚠️', 'bende', 'bana', 'benden']],
        sum: 'Eve gidiyorum. Okuldan geliyorum.',
        ex: [['Nereye gidiyorsun? — Markete gidiyorum.', 'Waar ga je heen? — Ik ga naar de supermarkt.'], ['Hollanda’dan geliyorum.', 'Ik kom uit Nederland.'], ['Müze buradan uzak mı?', 'Is het museum ver hiervandaan?'], ['Bana bir bilet, lütfen.', 'Een kaartje voor mij, alstublieft.']] },
      { t: 'De weg wijzen: gidin, dönün', es: 'Yol tarifi',
        html: `<p>Een beleefd bevel maak je met <b>-in / -ın / -un / -ün</b> achter de stam (eindigt die op een klinker, dan <b>-yin</b>): <i>git-</i> → <i>gid<b>in</b></i> (gaat u), <i>dön-</i> → <i>dön<b>ün</b></i> (slaat u af), <i>bekle-</i> → <i>bekle<b>yin</b></i> (wacht u). Tegen een vriend gebruik je alleen de stam: <i>Git!</i> <i>Dön!</i></p>
<p>De richting krijgt <i>-a</i> (waarheen): <i>sağ<b>a</b> dönün</i> (sla rechtsaf), <i>sol<b>a</b> dönün</i> (sla linksaf). <i>Düz gidin</i> = ga rechtdoor.</p>
<p>Een vervoermiddel krijgt <b>-le / -la</b> (met), na een klinker <b>-yle / -yla</b>: <i>otobüs<b>le</b></i> (met de bus), <i>metro<b>yla</b></i>, <i>vapur<b>la</b></i>, <i>taksi<b>yle</b></i>. Alleen lopend is anders: <i>yürüyerek</i> (te voet).</p>`,
        table: [['Nederlands', 'Turks'], ['Ga rechtdoor.', 'Düz gidin.'], ['Sla rechtsaf.', 'Sağa dönün.'], ['Sla linksaf.', 'Sola dönün.'], ['Het is op de hoek.', 'Köşede.'], ['met de bus', 'otobüsle'], ['met de metro', 'metroyla']],
        ex: [['Affedersiniz, eczane nerede?', 'Pardon, waar is de apotheek?'], ['Düz gidin, sonra sağa dönün.', 'Ga rechtdoor en sla dan rechtsaf.'], ['İşe metroyla gidiyorum.', 'Ik ga met de metro naar mijn werk.']] }
    ],
    dialogue: {
      t: 'De weg naar het museum', place: 'İstanbul 🇹🇷',
      lines: [
        ['Sanne', 'Affedersiniz, Arkeoloji Müzesi nerede?', 'Pardon, waar is het Archeologisch Museum?'],
        ['Hakan', 'Müze buradan biraz uzak. Yürüyerek mi gidiyorsunuz?', 'Het museum is een beetje ver hiervandaan. Gaat u te voet?'],
        ['Sanne', 'Evet. Tramvay var mı?', 'Ja. Is er een tram?'],
        ['Hakan', 'Var. Durak şurada, köşede. Tramvayla on dakika.', 'Ja. De halte is daar, op de hoek. Met de tram is het tien minuten.'],
        ['Sanne', 'Bileti nereden alıyorum?', 'Waar koop ik een kaartje?'],
        ['Hakan', 'Durakta makine var. Sonra Gülhane’de inin.', 'Bij de halte staat een automaat. Stap daarna uit bij Gülhane.'],
        ['Sanne', 'Gülhane’den müzeye nasıl gidiyorum?', 'Hoe kom ik van Gülhane bij het museum?'],
        ['Hakan', 'Düz gidin, sonra sola dönün. Müze parkta, sağda.', 'Ga rechtdoor en sla dan linksaf. Het museum ligt in het park, rechts.'],
        ['Sanne', 'Çok teşekkür ederim!', 'Heel erg bedankt!'],
        ['Hakan', 'Rica ederim. İyi günler!', 'Graag gedaan. Fijne dag!']
      ],
      q: [
        { t: 'mc', q: 'Sanne nereye gidiyor?', o: ['Müzeye', 'Otele', 'Havalimanına'] },
        { t: 'mc', q: 'Durak nerede?', o: ['Köşede', 'Parkta', 'Müzede'] },
        { t: 'mc', q: 'Sanne Gülhane’den sonra ne yapıyor?', o: ['Düz gidiyor, sonra sola dönüyor', 'Sağa dönüyor', 'Otobüse biniyor'] }
      ]
    },
    culture: { t: 'İstanbulkart, dolmuş en de veerboot', html: `<p>In İstanbul betaal je bus, metro, tram en veerboot met één oplaadbare kaart: de <b>İstanbulkart</b>. Je koopt en laadt hem op bij de gele automaten bij haltes.</p>
<p>De <b>vapur</b> (veerboot) tussen Europa en Azië is geen toeristenuitje maar gewoon openbaar vervoer. Met een glaasje thee en een <i>simit</i> (sesambroodring) aan dek is het de mooiste rit van de stad.</p>
<p>🚐 Een <b>dolmuş</b> is een gedeeld busje met een vaste route maar zonder vaste haltes. Wil je eruit, dan roep je: <i>Müsait bir yerde!</i> (Op een geschikte plek!) of <i>İnecek var!</i> (Er wil iemand uitstappen!)</p>` },
    ex: [
      { t: 'cloze', s: 'Annem ev___.', a: ['de'], o: ['de', 'da', 'te'], nl: 'Mijn moeder is thuis.', tag: 'tr-loc' },
      { t: 'cloze', s: 'Çocuklar okul___.', a: ['da'], o: ['da', 'de', 'ta'], nl: 'De kinderen zijn op school.', tag: 'tr-loc' },
      { t: 'cloze', s: 'Eczane bu sokak___.', a: ['ta'], o: ['ta', 'da', 'te'], nl: 'De apotheek is in deze straat.', x: 'Na k (Fıstıkçı Şahap) wordt d een t: sokakta.', tag: 'tr-loc' },
      { t: 'cloze', s: 'Ben şimdi otobüs___yim.', a: ['te'], o: ['te', 'de', 'ta'], nl: 'Ik zit nu in de bus.', x: 'Na s wordt d een t; na ü volgt e.', tag: 'tr-loc' },
      { t: 'cloze', s: 'Nere___ gidiyorsun?', h: 'waarheen', a: ['ye'], o: ['ye', 'de', 'den'], nl: 'Waar ga je heen?', tag: 'tr-dat' },
      { t: 'cloze', s: 'Banka___ gidiyorum.', h: 'naar de bank', a: ['ya'], o: ['ya', 'a', 'ye'], nl: 'Ik ga naar de bank.', x: 'Na een klinker komt er een y tussen: bankaya.', tag: 'tr-dat' },
      { t: 'cloze', s: 'Hollanda’___ geliyorum.', h: 'uit', a: ['dan'], o: ['dan', 'den', 'tan'], nl: 'Ik kom uit Nederland.', tag: 'tr-abl' },
      { t: 'cloze', s: 'Market___ geliyorum.', h: 'van de supermarkt', a: ['ten'], o: ['ten', 'den', 'tan'], nl: 'Ik kom van de supermarkt.', x: 'Na t wordt d een t: marketten.', tag: 'tr-abl' },
      { t: 'mc', q: 'Hoe zeg je «aan mij / naar mij»?', o: ['bana', 'bene', 'beni'], x: '⚠️ Uitzondering: ben wordt bana (en sen wordt sana). Het zijn oude vormen waarin de e een a werd; alleen deze twee woorden doen dat.', tag: 'tr-dat' },
      { t: 'mc', q: 'Hoe zeg je «Sla rechtsaf» (beleefd)?', o: ['Sağa dönün.', 'Sola dönün.', 'Düz gidin.'], tag: 'tr-imp' },
      { t: 'mc', q: 'Hoe zeg je «met de metro»?', o: ['metroyla', 'metroda', 'metroya'], x: 'Met = -la / -le; na een klinker komt er een y tussen.', tag: 'tr-dat' },
      { t: 'tr', nl: 'Waar is het hotel?', a: ['Otel nerede?'], tag: 'tr-loc' },
      { t: 'tr', nl: 'Ik ga naar huis.', a: ['Eve gidiyorum.', 'Ben eve gidiyorum.'], tag: 'tr-dat' },
      { t: 'tr', nl: 'Ik woon in Nederland.', a: ["Hollanda'da yaşıyorum.", "Hollanda'da oturuyorum.", "Ben Hollanda'da yaşıyorum."], tag: 'tr-loc' },
      { t: 'tr', nl: 'Ga rechtdoor en sla dan linksaf.', a: ['Düz gidin, sonra sola dönün.', 'Düz git, sonra sola dön.'], tag: 'tr-imp' },
      { t: 'order', s: 'Ben işe her gün metroyla gidiyorum.', nl: 'Ik ga elke dag met de metro naar mijn werk.', tag: 'tr-volg' },
      { t: 'match', p: [['sağ', 'rechts'], ['sol', 'links'], ['düz', 'rechtdoor'], ['yakın', 'dichtbij'], ['uzak', 'ver']], tag: 'vocab' }
    ],
    reading: {
      t: 'Otelden mesaj', type: 'Bericht van het hotel',
      p: [
        ['Merhaba! Otelimiz Sultanahmet’te, Ayasofya Camii’ne çok yakın.', 'Hallo! Ons hotel ligt in Sultanahmet, heel dicht bij de Hagia Sophia-moskee.'],
        ['Havalimanından otele metroyla ve tramvayla geliyorsunuz. Taksi de var, ama pahalı.', 'Van het vliegveld komt u met de metro en de tram naar het hotel. Er is ook een taxi, maar die is duur.'],
        ['Tramvay durağından düz gidin ve köşede sağa dönün. Otel solda, eczanenin karşısında.', 'Ga vanaf de tramhalte rechtdoor en sla op de hoek rechtsaf. Het hotel ligt links, tegenover de apotheek.'],
        ['Sokakta bir market ve bir banka var. Görüşürüz!', 'In de straat zijn een supermarkt en een bank. Tot ziens!']
      ],
      gl: [['otelimiz', 'ons hotel'], ['pahalı', 'duur'], ['eczanenin karşısında', 'tegenover de apotheek'], ['durağından', 'vanaf de halte (van)']],
      q: [
        { t: 'mc', q: 'Otel nerede?', o: ['Sultanahmet’te', 'Havalimanında', 'Gülhane’de'] },
        { t: 'mc', q: 'Taksi nasıl?', o: ['Pahalı', 'Yakın', 'Yok'] },
        { t: 'mc', q: 'Otelin karşısında ne var?', o: ['Eczane', 'Müze', 'Cami'] }
      ]
    },
    say: [['Affedersiniz, tuvalet nerede?', 'Pardon, waar is de wc?'], ['Düz gidin, sonra sağa dönün.', 'Ga rechtdoor en sla dan rechtsaf.'], ['Otele gidiyorum.', 'Ik ga naar het hotel.'], ['Hollanda’dan geliyorum.', 'Ik kom uit Nederland.']],
    task: { nl: 'Leg in 3 of 4 zinnen uit hoe je van je huis naar je werk, school of de supermarkt gaat: waar het is, hoe je gaat (bus, fiets, te voet) en hoe lang het duurt.', model: 'Evim Utrecht’te. İşim Amsterdam’da. İşe trenle gidiyorum. Evden işe kırk dakika.' },
    scenario: { nl: 'Je staat op het Taksimplein en zoekt de weg naar de Galatatoren. Je vraagt het aan een voorbijganger.', role: 'You are Ayşe, a helpful passer-by on Taksim Square in İstanbul. The learner asks for directions (to Galata Kulesi, an eczane, the metro). Give short, clear directions with düz gidin, sağa/sola dönün, köşede, yakın/uzak, and mention transport options (tramvayla, metroyla, yürüyerek). Use only very simple Turkish.', goal: 'Vraag de weg, vraag of het ver is en hoe je er het beste komt.' }
  });

  /* ───────────────────────── A1 · 8 ───────────────────────── */
  U({
    id: 'tr-a1-08', level: 'A1', icon: '🛍️', title: 'Bu ne kadar?', nl: 'Winkelen: kleuren, kleren en prijzen',
    goals: ['Naar de prijs vragen en afdingen', 'Kleuren en kleding benoemen', 'Dit en dat zeggen met bu, şu en o', 'Het lijdend voorwerp aanduiden met -i', 'Vergelijken met daha en en'],
    vocab: [
      ['Bu ne kadar?', 'Hoeveel kost dit?'], ['fiyat', 'prijs'], ['lira', 'lira'], ['para', 'geld'], ['pahalı', 'duur'], ['ucuz', 'goedkoop'], ['indirim', 'korting'], ['nakit', 'contant'], ['kart', 'kaart / pinpas'],
      ['kırmızı', 'rood'], ['mavi', 'blauw'], ['yeşil', 'groen'], ['sarı', 'geel'], ['siyah', 'zwart'], ['beyaz', 'wit'], ['renk', 'kleur'],
      ['gömlek', 'overhemd'], ['pantolon', 'broek'], ['elbise', 'jurk'], ['ayakkabı', 'schoen'], ['ceket', 'jasje'], ['çanta', 'tas'], ['beden', 'maat'],
      ['güzel', 'mooi'], ['yeni', 'nieuw'], ['eski', 'oud (van dingen)'], ['almak', 'kopen / nemen'], ['denemek', 'passen / proberen'], ['bakmak', 'kijken'], ['daha', 'meer / -er'], ['en', 'meest / -st'], ['bu', 'dit / deze'], ['şu', 'dat / die (daar)'], ['o', 'dat / die (ver weg); hij / zij / het']
    ],
    grammar: [
      { t: 'Bu, şu, o: dit en dat', es: 'Bu / şu / o',
        html: `<p>Het Turks heeft <b>drie</b> aanwijswoorden: <b>bu</b> (dit, hier bij mij), <b>şu</b> (dat, daar: je wijst het aan) en <b>o</b> (dat, ver weg of al genoemd). <i>O</i> is ook «hij / zij / het».</p>
<p>Vóór een zelfstandig naamwoord veranderen ze niet: <i>bu gömlek</i> (dit overhemd), <i>şu çanta</i> (die tas daar), <i>o ev</i> (dat huis).</p>
<p>Een <b>bijvoeglijk naamwoord</b> staat vóór het woord en <b>verandert nooit</b> (geen -e zoals in het Nederlands, geen meervoud): <i>kırmızı elbise</i>, <i>kırmızı elbiseler</i>. Met <i>bir</i> ertussen: <i>güzel <b>bir</b> çanta</i> (een mooie tas).</p>
<p>Let op de volgorde: <i>Bu gömlek güzel.</i> = Dit overhemd is mooi. · <i>Bu güzel bir gömlek.</i> = Dit is een mooi overhemd.</p>
<p>Krijgen ze een uitgang, dan komt er een <b>n</b> tussen: <i>bu<b>n</b>lar</i> (deze), <i>bu<b>n</b>u</i> (dit, als lijdend voorwerp), <i>bu<b>n</b>da</i>, <i>bu<b>n</b>a</i>.</p>`,
        table: [['', 'dichtbij', 'daar (aanwijzen)', 'ver / genoemd'], ['dit / dat', 'bu', 'şu', 'o'], ['deze / die (mv.)', 'bunlar', 'şunlar', 'onlar'], ['lijdend voorwerp', 'bunu', 'şunu', 'onu'], ['hier / daar', 'burada', 'şurada', 'orada']],
        sum: 'Bu gömlek güzel. Şunu istiyorum.',
        ex: [['Bu ne kadar?', 'Hoeveel kost dit?'], ['Şu mavi gömlek çok güzel.', 'Dat blauwe overhemd daar is heel mooi.'], ['Bunlar pahalı.', 'Deze zijn duur.']] },
      { t: 'Het lijdend voorwerp: -i, -ı, -u, -ü', es: 'Belirtme hâli: -i',
        html: `<p>Is het lijdend voorwerp <b>bepaald</b> (in het Nederlands met «de», «het», «dit», «mijn» of een naam), dan krijgt het de uitgang <b>-i / -ı / -u / -ü</b> (na een klinker: <b>-yi / -yı / -yu / -yü</b>).</p>
<p><i>Bir gömlek alıyorum.</i> = Ik koop <b>een</b> overhemd. (onbepaald: geen uitgang)<br><i>Gömle<b>ği</b> alıyorum.</i> = Ik koop <b>het</b> overhemd. (bepaald: met -i; de k wordt ğ)</p>
<p>Omdat het Turks geen lidwoord «de/het» heeft, is deze uitgang de manier om «de» te zeggen bij een lijdend voorwerp. Na <i>bu</i>, <i>şu</i>, <i>o</i>, een bezitsuitgang en bij namen is het voorwerp altijd bepaald: <i>Bu çanta<b>yı</b> istiyorum.</i> · <i>Elif<b>'i</b> görüyorum.</i></p>
<p>Los gebruikt: <b>bunu</b>, <b>şunu</b>, <b>onu</b>: <i>Şunu alabilir miyim?</i> (Mag ik die daar?)</p>
<p><b>⚠️ Uitzondering:</b> de verzachting k → ğ, p → b, ç → c, t → d geldt vooral voor <b>langere woorden</b>. De meeste woorden van <b>één lettergreep</b> blijven hard: <i>süt</i> → <i>sü<b>t</b>ü</i>, <i>et</i> → <i>e<b>t</b>i</i>, <i>saç</i> → <i>sa<b>ç</b>ı</i>. <b>Waarom?</b> In zo'n kort woord zou het woord anders onherkenbaar veranderen. Een paar korte woorden verzachten toch en moet je onthouden: <i>renk</i> → <i>ren<b>g</b>i</i> (kleur), <i>kap</i> → <i>ka<b>b</b>ı</i> (bak), <i>çok</i> → <i>ço<b>ğ</b>u</i> (de meeste).</p>`,
        table: [['woord', 'bepaald lijdend voorwerp', 'let op'], ['ev', 'evi', ''], ['çanta', 'çantayı', 'klinker → y ertussen'], ['pantolon', 'pantolonu', ''], ['gömlek', 'gömleği', 'k → ğ'], ['süt ⚠️', 'sütü', 'één lettergreep: t blijft'], ['renk ⚠️', 'rengi', 'k → g, toch zacht']],
        sum: 'Bir gömlek alıyorum. Bu gömleği alıyorum.',
        ex: [['Bu çantayı istiyorum.', 'Ik wil deze tas.'], ['Şu ayakkabıları deniyorum.', 'Ik pas die schoenen daar.'], ['Kırmızı elbiseyi alıyorum.', 'Ik neem de rode jurk.'], ['Bir ceket arıyorum.', 'Ik zoek een jasje.']] },
      { t: 'Vergelijken: daha en en', es: 'Daha / en',
        html: `<p>Vergelijken is in het Turks eenvoudig: het bijvoeglijk naamwoord verandert niet. Je zet er <b>daha</b> (meer) of <b>en</b> (meest) voor: <i>ucuz</i> (goedkoop) → <i><b>daha</b> ucuz</i> (goedkoper) → <i><b>en</b> ucuz</i> (goedkoopst).</p>
<p>«Dan» zeg je met <b>-den / -dan</b> achter het woord waarmee je vergelijkt: <i>Bu çanta şu çanta<b>dan</b> daha pahalı.</i> (lett.: deze tas die-tas-vanaf meer duur.)</p>
<p>Handig bij het winkelen: <b>çok</b> (heel / te): <i>çok pahalı</i>; <b>biraz</b> (een beetje): <i>biraz büyük</i>; <i>Daha ucuz var mı?</i> (Heeft u iets goedkopers?) · <i>Daha büyük beden var mı?</i> (Heeft u een grotere maat?)</p>`,
        table: [['', 'goedkoop', 'mooi', 'groot'], ['–', 'ucuz', 'güzel', 'büyük'], ['-er', 'daha ucuz', 'daha güzel', 'daha büyük'], ['-st', 'en ucuz', 'en güzel', 'en büyük']],
        sum: 'Ucuz, daha ucuz, en ucuz.',
        ex: [['Daha ucuz var mı?', 'Heeft u iets goedkopers?'], ['Bu ceket ondan daha güzel.', 'Dit jasje is mooier dan dat.'], ['En güzel renk mavi.', 'De mooiste kleur is blauw.']] }
    ],
    dialogue: {
      t: 'Op de Grote Bazaar', place: 'İstanbul 🇹🇷',
      lines: [
        ['Satıcı', 'Buyurun, hoş geldiniz! Ne arıyorsunuz?', 'Komt u binnen, welkom! Wat zoekt u?'],
        ['Daan', 'Merhaba. Bir çanta arıyorum. Şu kırmızı çanta ne kadar?', 'Hallo. Ik zoek een tas. Hoeveel kost die rode tas daar?'],
        ['Satıcı', 'Bin beş yüz lira. Çok güzel bir çanta!', 'Vijftienhonderd lira. Een heel mooie tas!'],
        ['Daan', 'Çok pahalı! Daha ucuz var mı?', 'Heel duur! Heeft u iets goedkopers?'],
        ['Satıcı', 'Bu siyah çanta daha ucuz: bin lira. Ama kırmızı daha güzel.', 'Deze zwarte tas is goedkoper: duizend lira. Maar de rode is mooier.'],
        ['Daan', 'Evet, kırmızıyı istiyorum. İndirim var mı?', 'Ja, ik wil de rode. Is er korting?'],
        ['Satıcı', 'Sizin için bin üç yüz lira.', 'Voor u dertienhonderd lira.'],
        ['Daan', 'Bin yüz?', 'Elfhonderd?'],
        ['Satıcı', 'Tamam, bin iki yüz. Son fiyat! Nakit mi, kart mı?', 'Oké, twaalfhonderd. Laatste prijs! Contant of met de kaart?'],
        ['Daan', 'Nakit. Bunu alıyorum. Teşekkürler!', 'Contant. Ik neem deze. Dank u!']
      ],
      q: [
        { t: 'mc', q: 'Daan ne arıyor?', o: ['Bir çanta', 'Bir gömlek', 'Bir ceket'] },
        { t: 'mc', q: 'Daan hangi çantayı alıyor?', o: ['Kırmızı çantayı', 'Siyah çantayı', 'Mavi çantayı'] },
        { t: 'mc', q: 'Son fiyat ne kadar?', o: ['Bin iki yüz lira', 'Bin beş yüz lira', 'Bin lira'] }
      ]
    },
    culture: { t: 'Pazarlık: afdingen hoort erbij', html: `<p>Op de bazaar, op markten en bij souvenirwinkels is <b>pazarlık</b> (afdingen) normaal en zelfs gezellig. De eerste prijs is een openingsbod. Blijf vriendelijk, bied wat lager en kom ergens in het midden uit. Vaak krijg je er een glaasje thee bij.</p>
<p>In supermarkten, winkelketens, restaurants en bij vaste prijskaartjes ding je <b>niet</b> af.</p>
<p>🧿 Je ziet overal het blauwe oog, de <b>nazar boncuğu</b>, dat tegen het boze oog beschermt. En wie iets nieuws heeft gekocht, hoort van iedereen: <i>Güle güle kullan!</i> (Gebruik het met plezier!)</p>` },
    ex: [
      { t: 'mc', q: 'Je wijst iets aan dat een eindje verderop ligt. Welk woord past?', o: ['şu', 'bu', 'ben'], tag: 'tr-aanw' },
      { t: 'cloze', s: '___ ne kadar?', h: 'dit, in je hand', a: ['Bu'], o: ['Bu', 'Şu', 'O'], nl: 'Hoeveel kost dit?', tag: 'tr-aanw' },
      { t: 'cloze', s: 'Bu çanta___ istiyorum.', a: ['yı'], o: ['yı', 'ı', 'yi'], nl: 'Ik wil deze tas.', x: 'Na een klinker komt er een y tussen; na a volgt ı.', tag: 'tr-acc' },
      { t: 'cloze', s: 'Şu gömle___ alıyorum.', a: ['ği'], o: ['ği', 'ki', 'ğı'], nl: 'Ik neem dat overhemd daar.', x: 'De k van gömlek wordt ğ vóór een klinker.', tag: 'tr-acc' },
      { t: 'mc', q: 'Welke zin betekent «Ik zoek EEN broek»?', o: ['Bir pantolon arıyorum.', 'Pantolonu arıyorum.', 'Bu pantolonu arıyorum.'], x: 'Onbepaald (een broek): geen uitgang.', tag: 'tr-acc' },
      { t: 'mc', q: 'Welke zin betekent «Ik koop HET overhemd»?', o: ['Gömleği alıyorum.', 'Bir gömlek alıyorum.', 'Gömlek alıyorum.'], tag: 'tr-acc' },
      { t: 'mc', q: 'Hoe zeg je «de melk» als lijdend voorwerp?', o: ['sütü', 'südü', 'sütı'], x: '⚠️ Uitzondering: woorden van één lettergreep blijven meestal hard, anders wordt zo’n kort woord onherkenbaar. Dus sütü, niet südü.', tag: 'tr-acc' },
      { t: 'cloze', s: 'Bu ceket ___ güzel.', h: 'mooier', a: ['daha'], o: ['daha', 'en', 'çok'], nl: 'Dit jasje is mooier.', tag: 'tr-daha' },
      { t: 'cloze', s: '___ ucuz çanta bu.', h: 'de goedkoopste', a: ['En'], o: ['En', 'Daha', 'Çok'], nl: 'Dit is de goedkoopste tas.', tag: 'tr-daha' },
      { t: 'cloze', s: 'Bu gömlek şu gömlek___ daha pahalı.', a: ['ten'], o: ['ten', 'den', 'tan'], nl: 'Dit overhemd is duurder dan dat overhemd.', x: '«Dan» = -den; na k wordt het -ten.', tag: 'tr-daha' },
      { t: 'tr', nl: 'Hoeveel kost dit?', a: ['Bu ne kadar?', 'Bu kaç lira?', 'Bu kaç para?', 'Bunun fiyatı ne kadar?'], tag: 'vocab' },
      { t: 'tr', nl: 'Heel duur! Is er korting?', a: ['Çok pahalı! İndirim var mı?'], tag: 'tr-var' },
      { t: 'tr', nl: 'Ik neem deze.', a: ['Bunu alıyorum.', 'Ben bunu alıyorum.'], tag: 'tr-acc' },
      { t: 'tr', nl: 'Ik zoek een zwart jasje.', a: ['Siyah bir ceket arıyorum.', 'Bir siyah ceket arıyorum.'], tag: 'tr-acc' },
      { t: 'order', s: 'Şu kırmızı çantayı almak istiyorum.', nl: 'Ik wil die rode tas daar kopen.', tag: 'tr-volg' },
      { t: 'match', p: [['kırmızı', 'rood'], ['mavi', 'blauw'], ['yeşil', 'groen'], ['sarı', 'geel'], ['siyah', 'zwart'], ['beyaz', 'wit']], tag: 'vocab' },
      { t: 'mc', q: 'Hoe zeg je «de kleur ervan» (renk + zijn)?', o: ['rengi', 'renki', 'renği'], x: '⚠️ Uitzondering: de meeste woorden van één lettergreep blijven hard, maar renk verzacht toch. Na een n wordt de k geen ğ maar een g: rengi.', tag: 'tr-bezit' },
      { t: 'cloze', s: 'Bu çantanın ___ çok güzel.', a: ['rengi'], o: ['rengi', 'renk', 'renkler'], nl: 'De kleur van deze tas is heel mooi.', tag: 'tr-bezit' }
    ],
    reading: {
      t: 'Büyük indirim!', type: 'Reclamefolder',
      p: [
        ['Bu hafta mağazamızda büyük indirim var!', 'Deze week is er grote korting in onze winkel!'],
        ['Gömlekler dört yüz lira, pantolonlar altı yüz lira. Ayakkabılar daha pahalı: bin lira.', 'Overhemden zijn vierhonderd lira, broeken zeshonderd lira. Schoenen zijn duurder: duizend lira.'],
        ['En ucuz ürün çanta: sadece iki yüz elli lira. Siyah, mavi ve kırmızı renkler var.', 'Het goedkoopste product is de tas: slechts tweehonderdvijftig lira. Er zijn zwarte, blauwe en rode.'],
        ['Mağaza her gün saat ondan akşam dokuza kadar açık. Kart ve nakit var.', 'De winkel is elke dag open van tien tot negen uur ’s avonds. Pinnen en contant kan.']
      ],
      gl: [['mağaza', 'winkel'], ['ürün', 'product'], ['açık', 'open'], ['-e kadar', 'tot']],
      q: [
        { t: 'mc', q: 'En ucuz ürün ne?', o: ['Çanta', 'Gömlek', 'Ayakkabı'] },
        { t: 'mc', q: 'Pantolon ne kadar?', o: ['Altı yüz lira', 'Dört yüz lira', 'Bin lira'] },
        { t: 'mc', q: 'Mağaza saat kaçta açılıyor?', o: ['Saat onda', 'Saat dokuzda', 'Saat sekizde'] }
      ]
    },
    say: [['Bu ne kadar?', 'Hoeveel kost dit?'], ['Çok pahalı! Daha ucuz var mı?', 'Heel duur! Heeft u iets goedkopers?'], ['Şu mavi gömleği istiyorum.', 'Ik wil dat blauwe overhemd daar.'], ['Bunu alıyorum.', 'Ik neem deze.']],
    task: { nl: 'Je bent in een kledingwinkel. Schrijf 4 zinnen: wat je zoekt (met kleur), vraag de prijs, zeg dat het duur is en vraag om korting of iets goedkopers.', model: 'Merhaba, mavi bir gömlek arıyorum. Bu gömlek ne kadar? Çok pahalı! Daha ucuz var mı?' },
    scenario: { nl: 'Je wilt een cadeau kopen op de Grote Bazaar in İstanbul en probeert af te dingen.', role: 'You are Mustafa, a charming shopkeeper in the Kapalıçarşı (Grand Bazaar) in İstanbul. You sell bags, scarves and ceramics. Greet the customer warmly (Buyurun!), name prices in lira, praise your goods, and bargain good-naturedly: come down a little each time and end with “son fiyat”. Use only very simple Turkish.', goal: 'Vraag wat iets kost, zeg dat het te duur is, ding af en koop het.' }
  });

  /* ───────────────────────── A1 · 9 ───────────────────────── */
  U({
    id: 'tr-a1-09', level: 'A1', icon: '⚽', title: 'Dün ne yaptın?', nl: 'Vrije tijd en de verleden tijd',
    goals: ['Zeggen wat je graag doet', 'Vertellen wat je gisteren en vorige week deed', 'De verleden tijd maken met -di', 'Zeggen waar je was'],
    vocab: [
      ['boş zaman', 'vrije tijd'], ['spor yapmak', 'sporten'], ['yüzmek', 'zwemmen'], ['koşmak', 'hardlopen / rennen'], ['yürümek', 'lopen / wandelen'], ['futbol oynamak', 'voetballen'],
      ['müzik dinlemek', 'muziek luisteren'], ['sinemaya gitmek', 'naar de bioscoop gaan'], ['gezmek', 'rondlopen / uitgaan / reizen'], ['yemek yapmak', 'koken'], ['fotoğraf çekmek', 'foto’s maken'],
      ['dans etmek', 'dansen'], ['sevmek', 'houden van'], ['oynamak', 'spelen'], ['görmek', 'zien'], ['buluşmak', 'afspreken / elkaar ontmoeten'], ['kalmak', 'blijven'],
      ['dün', 'gisteren'], ['dün akşam', 'gisteravond'], ['geçen hafta', 'vorige week'], ['geçen yıl', 'vorig jaar'], ['önce', 'eerst / geleden'], ['sonra', 'daarna / later'],
      ['bazen', 'soms'], ['her zaman', 'altijd'], ['hiç', 'nooit / ooit (met ontkenning)'], ['tatil', 'vakantie'], ['deniz', 'zee'], ['film', 'film'], ['kitap', 'boek'], ['yorgun', 'moe'], ['eğlenceli', 'leuk / gezellig']
    ],
    grammar: [
      { t: 'Graag doen en willen doen: -meyi seviyorum, -mek istiyorum', es: '-mek istiyorum / -meyi seviyorum',
        html: `<p><b>Willen</b> + werkwoord: het hele werkwoord (op <i>-mek / -mak</i>) + <b>istiyorum</b>: <i>Yüz<b>mek</b> istiyorum.</i> (Ik wil zwemmen.) · <i>Sinemaya git<b>mek</b> istiyor musun?</i> (Wil je naar de bioscoop?)</p>
<p><b>Houden van</b> + werkwoord: de k van <i>-mek / -mak</i> valt weg en er komt <b>-yi / -yı</b> achter (het lijdend voorwerp van unit 8): <i>yüz<b>meyi</b> seviyorum</i> (ik zwem graag, lett.: het-zwemmen houd-ik-van), <i>oku<b>mayı</b> seviyorum</i> (ik lees graag).</p>
<p>Met een gewoon woord werkt <i>sevmek</i> net zo: <i>Çay<b>ı</b> seviyorum.</i> (Ik houd van thee.) · <i>Futbol<b>u</b> sevmiyorum.</i></p>
<p><b>Hoe vaak:</b> <i>her zaman</i> (altijd), <i>genellikle</i> (meestal), <i>bazen</i> (soms). «Nooit» is <b>hiç</b> + een <b>ontkennend</b> werkwoord: <i>Hiç koş<b>mu</b>yorum.</i> (Ik loop nooit hard.)</p>`,
        table: [['werkwoord', 'ik wil…', 'ik … graag'], ['yüzmek', 'yüzmek istiyorum', 'yüzmeyi seviyorum'], ['okumak', 'okumak istiyorum', 'okumayı seviyorum'], ['dans etmek', 'dans etmek istiyorum', 'dans etmeyi seviyorum'], ['yemek yapmak', 'yemek yapmak istiyorum', 'yemek yapmayı seviyorum']],
        sum: 'Yüzmek istiyorum. Yüzmeyi seviyorum.',
        ex: [['Kitap okumayı çok seviyorum.', 'Ik lees heel graag boeken.'], ['Bu akşam dans etmek istiyorum.', 'Vanavond wil ik dansen.'], ['Yemek yapmayı sevmiyorum.', 'Ik houd niet van koken.']] },
      { t: 'De verleden tijd: -di', es: 'Geçmiş zaman: -di',
        html: `<p>Voor iets wat <b>gebeurd is</b>, zet je <b>-di / -dı / -du / -dü</b> achter de stam (klinkerharmonie soort 2), en daarna een korte persoonsuitgang: <b>-m, -n, –, -k, -niz, -ler</b>.</p>
<p><i>gel-<b>di</b>-<b>m</b></i> (ik kwam / ik ben gekomen), <i>al-<b>dı</b>-<b>n</b></i> (jij nam), <i>oku-<b>du</b></i> (hij las), <i>gör-<b>dü</b>-<b>k</b></i> (wij zagen).</p>
<p>Na een <b>harde medeklinker</b> (Fıstıkçı Şahap: f, s, t, k, ç, ş, h, p) wordt de d een <b>t</b>: <i>git-<b>ti</b>-m</i> (ik ging), <i>yap-<b>tı</b>-n</i> (jij deed), <i>iç-<b>ti</b></i> (hij dronk), <i>konuş-<b>tu</b>-k</i> (wij praatten).</p>
<p>Het Turks maakt hier geen verschil tussen «ik ging» en «ik ben gegaan»: <i>gittim</i> is allebei.</p>
<p><b>⚠️ Let op, anders dan bij -iyor:</b> bij <i>gitmek</i> blijft de t hier gewoon een <b>t</b>: <i>gi<b>tt</b>im</i>. De verzachting t → d (<i>gidiyor</i>) gebeurt alleen vóór een <b>klinker</b>, en <i>-ti</i> begint met een medeklinker.</p>`,
        table: [['', 'gelmek', 'almak', 'okumak', 'gitmek (na t → -ti)'], ['ben', 'geldim', 'aldım', 'okudum', 'gittim'], ['sen', 'geldin', 'aldın', 'okudun', 'gittin'], ['o', 'geldi', 'aldı', 'okudu', 'gitti'],
          ['biz', 'geldik', 'aldık', 'okuduk', 'gittik'], ['siz', 'geldiniz', 'aldınız', 'okudunuz', 'gittiniz'], ['onlar', 'geldiler', 'aldılar', 'okudular', 'gittiler']],
        sum: 'Geldim, aldın, okudu, gittik.',
        ex: [['Dün sinemaya gittim.', 'Gisteren ben ik naar de bioscoop gegaan.'], ['Ne yaptın?', 'Wat heb je gedaan?'], ['Güzel bir film izledik.', 'We hebben een mooie film gekeken.'], ['Geçen hafta çok çalıştım.', 'Vorige week heb ik veel gewerkt.']] },
      { t: 'Niet gedaan, vragen en «ik was»', es: 'Olumsuz, soru ve -ydi',
        html: `<p><b>Ontkenning:</b> <b>-me / -ma</b> tussen stam en <i>-di</i>: <i>gel<b>me</b>dim</i> (ik kwam niet), <i>al<b>ma</b>dım</i> (ik nam niet), <i>git<b>me</b>dik</i> (we gingen niet).</p>
<p><b>Vraag:</b> het vraagwoordje staat helemaal achteraan, <b>ná de persoonsuitgang</b>: <i>Geldin <b>mi</b>?</i> (Ben je gekomen?) · <i>Okudun <b>mu</b>?</i> · <i>Gittiniz <b>mi</b>?</i></p>
<p><b>⚠️ Uitzondering op wat je bij -iyor leerde:</b> daar hing de persoonsuitgang aan het vraagwoordje (<i>geliyor <b>musun</b>?</i>); in de verleden tijd blijft hij aan het werkwoord (<i>geldi<b>n</b> mi?</i>). <b>Waarom?</b> De verleden tijd gebruikt de korte, oude uitgangen (-m, -n, -k), en die zitten vast aan <i>-di</i>; ze kunnen niet los verhuizen.</p>
<p><b>Ik was:</b> achter een gewoon woord betekent <b>-(y)di</b> «was»: <i>Evde<b>ydim</b>.</i> (Ik was thuis.) · <i>Film güzel<b>di</b>.</i> (De film was mooi.) · <i>Yorgun<b>dum</b>.</i> (Ik was moe.) Na een klinker komt er een <b>y</b> tussen. «Er was» is <b>vardı</b>, «er was niet» <b>yoktu</b>; «was niet» is <b>değildi</b>.</p>`,
        table: [['', 'bevestigend', 'ontkennend', 'vraag'], ['ben', 'gittim', 'gitmedim', 'gittim mi?'], ['sen', 'gittin', 'gitmedin', 'gittin mi?'], ['o', 'gitti', 'gitmedi', 'gitti mi?'], ['biz', 'gittik', 'gitmedik', 'gittik mi?']],
        sum: 'Gitmedim. Gittin mi? Evdeydim.',
        ex: [['Dün işe gitmedim.', 'Gisteren ben ik niet naar mijn werk gegaan.'], ['Filmi gördün mü?', 'Heb je de film gezien?'], ['Dün akşam neredeydin?', 'Waar was je gisteravond?'], ['Evdeydim. Çok yorgundum.', 'Ik was thuis. Ik was heel moe.']] }
    ],
    dialogue: {
      t: 'Maandagochtend op het werk', place: 'Ankara 🇹🇷',
      lines: [
        ['Elif', 'Günaydın Sanne! Hafta sonu ne yaptın?', 'Goedemorgen Sanne! Wat heb je in het weekend gedaan?'],
        ['Sanne', 'Cumartesi günü arkadaşlarımla buluştum. Sinemaya gittik.', 'Zaterdag heb ik met mijn vrienden afgesproken. We zijn naar de bioscoop gegaan.'],
        ['Elif', 'Hangi filmi izlediniz? Güzel miydi?', 'Welke film hebben jullie gekeken? Was hij goed?'],
        ['Sanne', 'Bir Türk filmi izledik. Çok eğlenceliydi, ama her şeyi anlamadım.', 'We hebben een Turkse film gekeken. Hij was erg leuk, maar ik heb niet alles begrepen.'],
        ['Elif', 'Normal! Pazar günü ne yaptın?', 'Logisch! Wat heb je zondag gedaan?'],
        ['Sanne', 'Pazar günü evde kaldım. Kitap okudum ve yemek yaptım. Sen ne yaptın?', 'Zondag ben ik thuisgebleven. Ik heb een boek gelezen en gekookt. Wat heb jij gedaan?'],
        ['Elif', 'Ben denize gittim. Yüzmeyi çok seviyorum.', 'Ik ben naar de zee gegaan. Ik zwem heel graag.'],
        ['Sanne', 'Ne güzel! Su soğuk değil miydi?', 'Wat fijn! Was het water niet koud?'],
        ['Elif', 'Biraz soğuktu, ama hava çok güzeldi.', 'Het was een beetje koud, maar het weer was heel mooi.'],
        ['Sanne', 'Ben de gelmek istiyorum!', 'Ik wil ook mee!']
      ],
      q: [
        { t: 'mc', q: 'Sanne Cumartesi günü ne yaptı?', o: ['Sinemaya gitti', 'Evde kaldı', 'Denize gitti'] },
        { t: 'mc', q: 'Film nasıldı?', o: ['Çok eğlenceliydi', 'Çok soğuktu', 'Güzel değildi'] },
        { t: 'mc', q: 'Elif ne yapmayı seviyor?', o: ['Yüzmeyi', 'Yemek yapmayı', 'Kitap okumayı'] }
      ]
    },
    culture: { t: 'Voetbal, tavla en dizi', html: `<p><b>Voetbal</b> is een passie. De drie grote clubs uit İstanbul zijn <b>Galatasaray</b>, <b>Fenerbahçe</b> en <b>Beşiktaş</b>, en de vraag <i>Hangi takımı tutuyorsun?</i> (Voor welke club ben je?) komt snel. Kies gerust een club; het levert meteen gespreksstof op.</p>
<p>In theehuizen speelt men <b>tavla</b> (backgammon) en <b>okey</b> (een soort rummikub). De stenen klikken er de hele dag.</p>
<p>📺 Turkse series, <b>dizi</b>, zijn wereldberoemd; een aflevering duurt vaak ruim twee uur. Ze zijn uitstekend oefenmateriaal: de acteurs spreken duidelijk, en er zijn Turkse ondertitels.</p>` },
    ex: [
      { t: 'cloze', s: 'Dün sinemaya git___m.', a: ['ti'], o: ['ti', 'di', 'tı'], nl: 'Gisteren ben ik naar de bioscoop gegaan.', x: 'Na t wordt d een t: gittim.', tag: 'tr-di' },
      { t: 'cloze', s: 'Dün akşam kitap oku___m.', a: ['du'], o: ['du', 'dı', 'tu'], nl: 'Gisteravond heb ik een boek gelezen.', tag: 'tr-di' },
      { t: 'cloze', s: 'Elif çay iç___.', a: ['ti'], o: ['ti', 'di', 'tı'], nl: 'Elif heeft thee gedronken.', x: 'Na ç wordt d een t: içti.', tag: 'tr-di' },
      { t: 'cloze', s: 'Biz geçen yıl İzmir’e gel___.', a: ['dik'], o: ['dik', 'dim', 'diniz'], nl: 'Wij zijn vorig jaar naar İzmir gekomen.', tag: 'tr-di' },
      { t: 'cloze', s: 'Sen dün ne yap___?', a: ['tın'], o: ['tın', 'dın', 'tım'], nl: 'Wat heb jij gisteren gedaan?', tag: 'tr-di' },
      { t: 'cloze', s: 'Dün işe git___dim.', h: 'niet', a: ['me'], o: ['me', 'ma', 'mi'], nl: 'Gisteren ben ik niet naar mijn werk gegaan.', tag: 'tr-neg' },
      { t: 'mc', q: 'Hoe vraag je «Ben je gekomen?»', o: ['Geldin mi?', 'Geldi misin?', 'Gel midin?'], x: '⚠️ Anders dan bij -iyor: in de verleden tijd blijft de uitgang (-n) aan het werkwoord, want de korte uitgangen zitten vast aan -di. Mi komt helemaal achteraan.', tag: 'tr-mi' },
      { t: 'cloze', s: 'Dün akşam ev___dim.', a: ['dey'], o: ['dey', 'de', 'di'], nl: 'Gisteravond was ik thuis.', x: 'Evde + y + dim: na een klinker komt er een y tussen.', tag: 'tr-di' },
      { t: 'cloze', s: 'Yüz___ çok seviyorum.', a: ['meyi'], o: ['meyi', 'mek', 'mayı'], nl: 'Ik zwem heel graag.', tag: 'tr-mek' },
      { t: 'cloze', s: 'Bu akşam dans et___ istiyorum.', a: ['mek'], o: ['mek', 'meyi', 'mak'], nl: 'Vanavond wil ik dansen.', x: 'Bij istiyorum blijft het hele werkwoord staan.', tag: 'tr-mek' },
      { t: 'mc', q: 'Hoe zeg je «Ik loop nooit hard»?', o: ['Hiç koşmuyorum.', 'Hiç koşuyorum.', 'Her zaman koşmuyorum.'], x: 'Hiç krijgt een ontkennend werkwoord.', tag: 'tr-neg' },
      { t: 'tr', nl: 'Wat heb je gisteren gedaan?', a: ['Dün ne yaptın?', 'Sen dün ne yaptın?'], tag: 'tr-di' },
      { t: 'tr', nl: 'Ik ben naar de bioscoop gegaan.', a: ['Sinemaya gittim.', 'Ben sinemaya gittim.'], tag: 'tr-di' },
      { t: 'tr', nl: 'De film was heel mooi.', a: ['Film çok güzeldi.'], tag: 'tr-di' },
      { t: 'tr', nl: 'Ik lees graag boeken.', a: ['Kitap okumayı seviyorum.', 'Ben kitap okumayı seviyorum.', 'Kitap okumayı çok seviyorum.'], tag: 'tr-mek' },
      { t: 'order', s: 'Geçen hafta arkadaşımla güzel bir film izledim.', nl: 'Vorige week heb ik met mijn vriend een mooie film gekeken.', tag: 'tr-volg' },
      { t: 'match', p: [['dün', 'gisteren'], ['bugün', 'vandaag'], ['yarın', 'morgen'], ['bazen', 'soms'], ['her zaman', 'altijd']], tag: 'vocab' }
    ],
    reading: {
      t: 'Kapadokya’da bir hafta sonu', type: 'Reisblog',
      p: [
        ['Geçen hafta sonu arkadaşım Selin ile Kapadokya’ya gittik.', 'Vorig weekend zijn mijn vriendin Selin en ik naar Cappadocië gegaan.'],
        ['Cumartesi sabahı çok erken kalktık ve balonları izledik. Çok güzeldi! Yüz fotoğraf çektim.', 'Zaterdagochtend zijn we heel vroeg opgestaan en hebben we naar de ballonnen gekeken. Het was prachtig! Ik heb honderd foto’s gemaakt.'],
        ['Öğleden sonra çok yürüdük. Akşam güzel bir lokantada yemek yedik.', '’s Middags hebben we veel gelopen. ’s Avonds hebben we in een mooi restaurant gegeten.'],
        ['Pazar günü yağmur yağdı. Otelde kaldık ve tavla oynadık. Çok eğlenceli bir hafta sonuydu.', 'Zondag regende het. We zijn in het hotel gebleven en hebben backgammon gespeeld. Het was een heel leuk weekend.']
      ],
      gl: [['balon', 'luchtballon'], ['öğleden sonra', '’s middags'], ['yağmur yağdı', 'het regende'], ['tavla', 'backgammon']],
      q: [
        { t: 'mc', q: 'Cumartesi sabahı ne yaptılar?', o: ['Balonları izlediler', 'Tavla oynadılar', 'Otelde kaldılar'] },
        { t: 'mc', q: 'Pazar günü hava nasıldı?', o: ['Yağmur yağdı', 'Çok güzeldi', 'Çok sıcaktı'] },
        { t: 'mc', q: 'Akşam nerede yemek yediler?', o: ['Bir lokantada', 'Otelde', 'Evde'] }
      ]
    },
    say: [['Dün ne yaptın?', 'Wat heb je gisteren gedaan?'], ['Sinemaya gittim. Film çok güzeldi.', 'Ik ben naar de bioscoop gegaan. De film was heel mooi.'], ['Yüzmeyi çok seviyorum.', 'Ik zwem heel graag.'], ['Dün akşam evdeydim.', 'Gisteravond was ik thuis.']],
    task: { nl: 'Schrijf 4 of 5 zinnen over je afgelopen weekend: waar je heen ging, met wie, wat je deed en hoe het was. Zet er één ding bij dat je niet hebt gedaan.', model: 'Cumartesi günü arkadaşımla sinemaya gittim. Film çok güzeldi. Sonra bir lokantada yemek yedik. Pazar günü evde kaldım ve kitap okudum. Spor yapmadım.' },
    scenario: { nl: 'Het is maandag. Je collega Can vraagt bij de koffieautomaat naar je weekend.', role: 'You are Can, a sociable colleague in an office in Ankara. It is Monday morning. Ask what the learner did on the weekend (Hafta sonu ne yaptın?), ask follow-up questions in the past tense (Nereye gittin? Güzel miydi? Kiminle?), and tell them briefly about your own weekend (football match, family dinner). Use simple Turkish with the -di past.', goal: 'Vertel wat je in het weekend deed en vraag ook naar zijn weekend.' }
  });

  /* ───────────────────────── A1 · 10 ───────────────────────── */
  U({
    id: 'tr-a1-10', level: 'A1', icon: '☀️', title: 'Yarın ne yapacaksın?', nl: 'Het weer en plannen: de toekomende tijd',
    goals: ['Over het weer praten', 'Seizoenen en maanden noemen', 'Zeggen wat je gaat doen met -ecek / -acak', 'Een afspraak voorstellen'],
    vocab: [
      ['hava', 'weer / lucht'], ['Hava nasıl?', 'Wat voor weer is het?'], ['güneş', 'zon'], ['güneşli', 'zonnig'], ['yağmur', 'regen'], ['yağmurlu', 'regenachtig'], ['kar', 'sneeuw'], ['rüzgâr', 'wind'],
      ['bulutlu', 'bewolkt'], ['ılık', 'zacht / lauw'], ['derece', 'graad'], ['mevsim', 'seizoen'], ['ilkbahar', 'lente'], ['yaz', 'zomer'], ['sonbahar', 'herfst'], ['kış', 'winter'],
      ['ay', 'maand / maan'], ['yıl', 'jaar'], ['gelecek hafta', 'volgende week'], ['gelecek yıl', 'volgend jaar'], ['plan', 'plan'], ['belki', 'misschien'], ['çünkü', 'omdat / want'],
      ['şemsiye', 'paraplu'], ['plaj', 'strand'], ['dağ', 'berg'], ['seyahat etmek', 'reizen'], ['ziyaret etmek', 'bezoeken'], ['yer ayırtmak', 'reserveren'], ['yağmak', 'vallen (van regen en sneeuw)'], ['beraber', 'samen'], ['hadi', 'kom op / laten we']
    ],
    grammar: [
      { t: 'Het weer', es: 'Hava durumu',
        html: `<p>Over het weer praat je met <b>hava</b> (het weer, de lucht): <i>Hava nasıl?</i> (Wat voor weer is het?) — <i>Hava güzel.</i> · <i>Hava sıcak.</i> · <i>Hava soğuk.</i></p>
<p>Met <b>-li</b> («met», unit 5) maak je weerwoorden: <i>güneş</i> → <i>güneş<b>li</b></i> (zonnig), <i>yağmur</i> → <i>yağmur<b>lu</b></i> (regenachtig), <i>bulut</i> → <i>bulut<b>lu</b></i> (bewolkt), <i>kar</i> → <i>kar<b>lı</b></i> (besneeuwd), <i>rüzgâr</i> → <i>rüzgâr<b>lı</b></i> (winderig).</p>
<p>«Het regent» is letterlijk «regen valt»: <i>Yağmur <b>yağıyor</b>.</i> «Het sneeuwt»: <i>Kar <b>yağıyor</b>.</i> Er is geen «het» als onderwerp.</p>
<p>Temperatuur: <i>Bugün yirmi beş derece.</i> In de zomer / winter: <i>yaz<b>ın</b></i>, <i>kış<b>ın</b></i>; in de lente / herfst: <i>ilkbahar<b>da</b></i>, <i>sonbahar<b>da</b></i>.</p>
<p><b>⚠️ Uitzondering:</b> het is <i>yazın</i> en <i>kışın</i> (met <b>-in</b>), niet <s>yazda</s> en <s>kışta</s>. <b>Waarom?</b> Het zijn versteende oude vormen die als vaste bijwoorden zijn blijven bestaan. De nieuwere woorden <i>ilkbahar</i> en <i>sonbahar</i> krijgen wel gewoon <i>-da</i>.</p>`,
        table: [['woord', 'met -li', 'zin'], ['güneş', 'güneşli', 'Hava güneşli.'], ['yağmur', 'yağmurlu', 'Yağmur yağıyor.'], ['kar', 'karlı', 'Kar yağıyor.'], ['bulut', 'bulutlu', 'Hava bulutlu.'], ['rüzgâr', 'rüzgârlı', 'Hava rüzgârlı.']],
        sum: 'Hava güneşli. Yağmur yağıyor.',
        ex: [['Bugün hava çok güzel.', 'Vandaag is het heel mooi weer.'], ['İstanbul’da yağmur yağıyor.', 'In İstanbul regent het.'], ['Kışın Ankara çok soğuk.', '’s Winters is Ankara heel koud.']] },
      { t: 'De toekomende tijd: -ecek / -acak', es: 'Gelecek zaman: -ecek / -acak',
        html: `<p>Voor plannen en voorspellingen zet je <b>-ecek</b> (na e, i, ö, ü) of <b>-acak</b> (na a, ı, o, u) achter de stam, en dan de persoonsuitgang: <i>gel-<b>ecek</b>-sin</i> (jij zult komen / jij gaat komen), <i>al-<b>acak</b>-lar</i> (zij gaan nemen).</p>
<p>Bij <b>ben</b> en <b>biz</b> begint de uitgang met een klinker, en dan wordt de k een <b>ğ</b>: <i>gel-ece<b>ğ</b>-im</i> (ik zal komen), <i>al-aca<b>ğ</b>-ız</i> (wij zullen nemen). In spreektaal hoor je vaak kort: <i>gelicem</i>, <i>alıcaz</i>; schrijf altijd de volle vorm.</p>
<p>Eindigt de stam op een <b>klinker</b>, dan komt er een <b>y</b> tussen: <i>oku-<b>y</b>-acak</i> (hij zal lezen), <i>bekle-<b>y</b>-ecek</i>.</p>
<p><b>⚠️ Uitzondering:</b> <i>gitmek</i> → <i>gi<b>d</b>ecek</i> en <i>etmek</i> → <i>e<b>d</b>ecek</i>, niet <s>gitecek</s>. <b>Waarom?</b> De t wordt d omdat er een klinker volgt, net als bij <i>gidiyor</i>. En <i>yemek</i> → <i>y<b>i</b>yecek</i>, <i>demek</i> (zeggen) → <i>d<b>i</b>yecek</i>: bij deze twee korte stammen wordt de e een <b>i</b> vóór de y, omdat de y de klinker ervoor «dichtknijpt». Het zijn de enige twee werkwoorden die dat ook in de spelling doen.</p>`,
        table: [['', 'gelmek', 'almak', 'okumak', 'gitmek ⚠️'], ['ben', 'geleceğim', 'alacağım', 'okuyacağım', 'gideceğim'], ['sen', 'geleceksin', 'alacaksın', 'okuyacaksın', 'gideceksin'], ['o', 'gelecek', 'alacak', 'okuyacak', 'gidecek'],
          ['biz', 'geleceğiz', 'alacağız', 'okuyacağız', 'gideceğiz'], ['siz', 'geleceksiniz', 'alacaksınız', 'okuyacaksınız', 'gideceksiniz'], ['onlar', 'gelecekler', 'alacaklar', 'okuyacaklar', 'gidecekler']],
        sum: 'Geleceğim, alacaksın, okuyacak, gideceğiz.',
        ex: [['Yarın denize gideceğim.', 'Morgen ga ik naar de zee.'], ['Yarın yağmur yağacak.', 'Morgen gaat het regenen.'], ['Gelecek yıl Türkiye’ye gideceğiz.', 'Volgend jaar gaan we naar Turkije.'], ['Ne yapacaksın?', 'Wat ga je doen?']] },
      { t: 'Niet gaan doen, vragen en voorstellen', es: 'Olumsuz, soru ve öneri',
        html: `<p><b>Ontkenning:</b> <b>-me / -ma</b> + y + <i>-ecek / -acak</i>: <i>gel<b>meyeceğim</b></i> (ik zal niet komen), <i>al<b>mayacak</b></i> (hij zal niet nemen).</p>
<p><b>Vraag:</b> het vraagwoordje <b>mi / mı</b> staat los, met de persoonsuitgang eraan (zoals bij -iyor): <i>Gelecek <b>misin</b>?</i> (Kom je?) · <i>Alacak <b>mısınız</b>?</i> · <i>Yarın yağmur yağacak <b>mı</b>?</i></p>
<p><b>Iets voorstellen:</b> «laten we…» is <b>-elim / -alım</b> achter de stam: <i>Gid<b>elim</b>!</i> (Laten we gaan!) · <i>Çay iç<b>elim</b>.</i> (Laten we thee drinken.) Vaak met <b>hadi</b> ervoor: <i>Hadi sinemaya gidelim!</i> Als vraag: <i>Gidelim <b>mi</b>?</i> (Zullen we gaan?)</p>
<p><b>Redenen geven:</b> <b>çünkü</b> (want / omdat): <i>Evde kalacağım, çünkü yağmur yağıyor.</i> De woordvolgorde in de bijzin verandert niet.</p>`,
        table: [['', 'bevestigend', 'ontkennend', 'vraag'], ['ben', 'geleceğim', 'gelmeyeceğim', 'gelecek miyim?'], ['sen', 'geleceksin', 'gelmeyeceksin', 'gelecek misin?'], ['o', 'gelecek', 'gelmeyecek', 'gelecek mi?'], ['biz', 'geleceğiz', 'gelmeyeceğiz', 'gelecek miyiz?']],
        sum: 'Gelmeyeceğim. Gelecek misin? Hadi gidelim!',
        ex: [['Yarın çalışmayacağım.', 'Morgen ga ik niet werken.'], ['Partiye gelecek misin?', 'Kom je naar het feest?'], ['Hadi plaja gidelim!', 'Kom, laten we naar het strand gaan!'], ['Kahve içelim mi?', 'Zullen we koffie drinken?']] }
    ],
    dialogue: {
      t: 'Plannen voor het weekend', place: 'İzmir 🇹🇷',
      lines: [
        ['Selin', 'Daan, hafta sonu ne yapacaksın?', 'Daan, wat ga je in het weekend doen?'],
        ['Daan', 'Henüz planım yok. Yarın hava nasıl olacak?', 'Ik heb nog geen plan. Wat voor weer wordt het morgen?'],
        ['Selin', 'Çok güzel olacak: güneşli ve otuz derece.', 'Het wordt heel mooi: zonnig en dertig graden.'],
        ['Daan', 'Harika! Hadi plaja gidelim!', 'Geweldig! Kom, laten we naar het strand gaan!'],
        ['Selin', 'Tamam! Çeşme’ye gidelim mi? Deniz orada çok güzel.', 'Oké! Zullen we naar Çeşme gaan? De zee is daar heel mooi.'],
        ['Daan', 'Olur. Otobüsle mi gideceğiz?', 'Goed. Gaan we met de bus?'],
        ['Selin', 'Hayır, arabayla gideceğiz. Abim de gelecek.', 'Nee, we gaan met de auto. Mijn broer komt ook.'],
        ['Daan', 'Süper. Pazar günü de kalacak mıyız?', 'Super. Blijven we zondag ook?'],
        ['Selin', 'Hayır, kalmayacağız, çünkü Pazar günü yağmur yağacak.', 'Nee, we blijven niet, want zondag gaat het regenen.'],
        ['Daan', 'Tamam. Yarın sabah saat dokuzda görüşürüz!', 'Oké. Tot morgenochtend om negen uur!']
      ],
      q: [
        { t: 'mc', q: 'Yarın hava nasıl olacak?', o: ['Güneşli', 'Yağmurlu', 'Soğuk'] },
        { t: 'mc', q: 'Çeşme’ye nasıl gidecekler?', o: ['Arabayla', 'Otobüsle', 'Vapurla'] },
        { t: 'mc', q: 'Pazar günü neden kalmayacaklar?', o: ['Çünkü yağmur yağacak', 'Çünkü çalışacaklar', 'Çünkü otel pahalı'] }
      ]
    },
    culture: { t: 'İnşallah, en vier seizoenen in één land', html: `<p>Bij plannen hoor je vaak <b>inşallah</b> (als God het wil). Gelovig of niet, bijna iedereen zegt het; het betekent zoiets als «hopelijk» of «als het goed is»: <i>Yarın görüşürüz, inşallah.</i> Reageert iemand op jouw uitnodiging alleen met <i>inşallah</i>, dan is het geen harde toezegging.</p>
<p>Turkije is groot en het weer verschilt enorm. Aan de <b>Egeïsche</b> en <b>Middellandse Zee</b> zijn de zomers heet en droog. In <b>Ankara</b> en het binnenland vriest en sneeuwt het ’s winters flink. Aan de <b>Zwarte Zee</b> regent het het hele jaar, vandaar de groene theeplantages.</p>
<p>🎈 Wie vertrekt op reis, krijgt te horen: <i>İyi yolculuklar!</i> (Goede reis!) Traditioneel gooit men een glas water achter de vertrekkende auto aan: <i>Su gibi git, su gibi gel.</i> (Ga en kom terug als water, vlot en zonder hindernissen.)</p>` },
    ex: [
      { t: 'cloze', s: 'Yarın denize gid___.', a: ['eceğim'], o: ['eceğim', 'ecekim', 'acağım'], nl: 'Morgen ga ik naar de zee.', x: 'De k wordt ğ vóór de klinker van -im.', tag: 'tr-ecek' },
      { t: 'cloze', s: 'Sen ne yap___?', a: ['acaksın'], o: ['acaksın', 'eceksin', 'acağım'], nl: 'Wat ga jij doen?', tag: 'tr-ecek' },
      { t: 'cloze', s: 'Yarın yağmur yağ___.', a: ['acak'], o: ['acak', 'ecek', 'acağız'], nl: 'Morgen gaat het regenen.', tag: 'tr-ecek' },
      { t: 'cloze', s: 'Biz gelecek yıl Türkiye’ye gel___.', a: ['eceğiz'], o: ['eceğiz', 'ecekiz', 'acağız'], nl: 'Wij komen volgend jaar naar Turkije.', tag: 'tr-ecek' },
      { t: 'cloze', s: 'Elif bu kitabı oku___.', a: ['yacak'], o: ['yacak', 'acak', 'yecek'], nl: 'Elif gaat dit boek lezen.', x: 'Na een klinker komt er een y tussen: okuyacak.', tag: 'tr-ecek' },
      { t: 'mc', q: 'Hoe zeg je «hij zal gaan»?', o: ['gidecek', 'gitecek', 'gidacak'], x: '⚠️ Uitzondering: bij gitmek wordt de t een d omdat er een klinker volgt, net als bij gidiyor.', tag: 'tr-ecek' },
      { t: 'mc', q: 'Hoe zeg je «ik zal eten»?', o: ['yiyeceğim', 'yeyeceğim', 'yeceğim'], x: '⚠️ Uitzondering: bij yemek (en demek) wordt de e een i vóór de y, omdat de y de klinker ervoor dichtknijpt.', tag: 'tr-ecek' },
      { t: 'cloze', s: 'Yarın çalış___yacağım.', h: 'niet', a: ['ma'], o: ['ma', 'me', 'mı'], nl: 'Morgen ga ik niet werken.', tag: 'tr-neg' },
      { t: 'cloze', s: 'Partiye gelecek ___?', h: 'jij', a: ['misin'], o: ['misin', 'mısın', 'musun'], nl: 'Kom je naar het feest?', tag: 'tr-mi' },
      { t: 'mc', q: 'Hoe zeg je «Laten we gaan!»?', o: ['Gidelim!', 'Gidiyoruz!', 'Gideceğiz!'], tag: 'tr-imp' },
      { t: 'mc', q: 'Hoe zeg je «in de zomer»?', o: ['yazın', 'yazda', 'yaza'], x: '⚠️ Uitzondering: yazın en kışın zijn versteende oude vormen. Lente en herfst krijgen wel gewoon -da: ilkbaharda, sonbaharda.', tag: 'tr-loc' },
      { t: 'tr', nl: 'Wat voor weer is het?', a: ['Hava nasıl?'], tag: 'vocab' },
      { t: 'tr', nl: 'Het regent.', a: ['Yağmur yağıyor.'], tag: 'tr-iyor' },
      { t: 'tr', nl: 'Morgen ga ik naar İzmir.', a: ["Yarın İzmir'e gideceğim.", "Ben yarın İzmir'e gideceğim.", "Yarın İzmir'e gidiyorum."], tag: 'tr-ecek' },
      { t: 'tr', nl: 'Zullen we thee drinken?', a: ['Çay içelim mi?'], tag: 'tr-imp' },
      { t: 'order', s: 'Gelecek yıl ailemle Türkiye’ye gideceğiz.', nl: 'Volgend jaar gaan we met mijn familie naar Turkije.', tag: 'tr-volg' },
      { t: 'match', p: [['ilkbahar', 'lente'], ['yaz', 'zomer'], ['sonbahar', 'herfst'], ['kış', 'winter'], ['güneş', 'zon'], ['yağmur', 'regen']], tag: 'vocab' }
    ],
    reading: {
      t: 'Hava durumu', type: 'Weerbericht',
      p: [
        ['Bugün İstanbul’da hava bulutlu ve rüzgârlı. Sıcaklık on beş derece.', 'Vandaag is het in İstanbul bewolkt en winderig. De temperatuur is vijftien graden.'],
        ['Yarın yağmur yağacak. Şemsiyenizi alın!', 'Morgen gaat het regenen. Neem uw paraplu mee!'],
        ['Ankara’da hava soğuk olacak. Gece kar yağacak.', 'In Ankara wordt het koud. ’s Nachts gaat het sneeuwen.'],
        ['Antalya’da hava güneşli ve ılık. Hafta sonu yirmi iki derece olacak. Plaja gitmek için güzel bir gün!', 'In Antalya is het zonnig en zacht. In het weekend wordt het tweeëntwintig graden. Een mooie dag om naar het strand te gaan!']
      ],
      gl: [['hava durumu', 'weerbericht'], ['sıcaklık', 'temperatuur'], ['gitmek için', 'om te gaan']],
      q: [
        { t: 'mc', q: 'Yarın İstanbul’da hava nasıl olacak?', o: ['Yağmurlu', 'Güneşli', 'Karlı'] },
        { t: 'mc', q: 'Nerede kar yağacak?', o: ['Ankara’da', 'Antalya’da', 'İstanbul’da'] },
        { t: 'mc', q: 'Antalya’da hafta sonu kaç derece olacak?', o: ['Yirmi iki', 'On beş', 'Otuz'] }
      ]
    },
    say: [['Bugün hava çok güzel.', 'Vandaag is het heel mooi weer.'], ['Yarın ne yapacaksın?', 'Wat ga je morgen doen?'], ['Hafta sonu denize gideceğim.', 'In het weekend ga ik naar de zee.'], ['Hadi çay içelim!', 'Kom, laten we thee drinken!']],
    task: { nl: 'Schrijf 4 of 5 zinnen over je plannen voor het weekend of de vakantie: wat voor weer het wordt, waar je heen gaat, met wie, wat je gaat doen en één ding dat je niet gaat doen.', model: 'Hafta sonu hava güneşli olacak. Arkadaşımla plaja gideceğim. Denizde yüzeceğiz ve balık yiyeceğiz. Pazar günü çalışmayacağım. Çok güzel olacak!' },
    scenario: { nl: 'Je Turkse vriendin Deniz belt om samen iets te plannen voor het weekend.', role: 'You are Deniz, an enthusiastic friend in İzmir. Call the learner to plan the weekend together: talk about the weather forecast (Yarın hava güneşli olacak / yağmur yağacak), suggest activities with -elim (plaja gidelim, sinemaya gidelim), ask what they want to do, and agree on a time and place. Use simple Turkish with the future tense.', goal: 'Bespreek het weer, stel iets voor en spreek een tijd en plaats af.' }
  });
})(window.SPT);
