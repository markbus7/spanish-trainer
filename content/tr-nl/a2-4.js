/* Turks voor Nederlandstaligen — niveau A2, units 7–8 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── A2 · 7 ───────────────────────── */
  U({
    id: 'tr-a2-07', level: 'A2', icon: '📖', title: 'Ne oldu? Anlat!', nl: 'Vertellen wat je meemaakte',
    goals: ['Een verhaal vertellen over iets wat je meemaakte', 'Zeggen wat er aan de gang was met -iyordu', 'Twee dingen tegelijk vertellen met -ken (terwijl)', 'Een verhaal opbouwen met önce, sonra, birden en sonunda'],
    vocab: [
      ['olmak', 'gebeuren / worden'], ['Ne oldu?', 'Wat is er gebeurd?'], ['anlatmak', 'vertellen'], ['hikâye', 'verhaal'], ['birden', 'plotseling'], ['tam o sırada', 'precies op dat moment'], ['sonunda', 'uiteindelijk'],
      ['ilk önce', 'allereerst'], ['ondan sonra', 'daarna'], ['kaza', 'ongeluk'], ['düşmek', 'vallen'], ['kırmak', 'breken'], ['kaybolmak', 'verdwalen / zoekraken'], ['unutmak', 'vergeten'],
      ['bulmak', 'vinden'], ['aramak', 'zoeken / bellen'], ['korkmak', 'bang zijn'], ['şaşırmak', 'verbaasd zijn'], ['gülmek', 'lachen'], ['ağlamak', 'huilen'], ['bağırmak', 'schreeuwen'],
      ['kaçırmak', 'missen (bus, trein)'], ['çalmak', 'stelen / rinkelen'], ['hırsız', 'dief'], ['cüzdan', 'portemonnee'], ['polis', 'politie'], ['şans', 'geluk'], ['şanslı', 'gelukkig (met geluk)'],
      ['garip', 'vreemd'], ['komik', 'grappig'], ['korkunç', 'verschrikkelijk'], ['gerçekten', 'echt'], ['inanmak', 'geloven']
    ],
    grammar: [
      { t: 'Was aan het…: -iyordu', es: 'Şimdiki zamanın hikâyesi',
        html: `<p>Zet <b>-du</b> achter <b>-iyor</b> en je krijgt «was aan het…»: <i>gel-iyor-<b>du</b>-m</i> (ik was aan het komen, ik kwam). Het beschrijft de <b>achtergrond</b>: iets wat bezig was, of wat vroeger een gewoonte was.</p>
<p><i>Yağmur yağ<b>ıyordu</b>.</i> (Het regende.) · <i>Herkes uyu<b>yordu</b>.</i> (Iedereen sliep.) · <i>Çocukken burada oturu<b>yorduk</b>.</i> (Als kind woonden we hier.)</p>
<p>Persoonsuitgangen zoals bij -di: <i>geliyor<b>dum</b>, geliyor<b>dun</b>, geliyor<b>du</b>, geliyor<b>duk</b>, geliyor<b>dunuz</b>, geliyor<b>lardı</b></i>.</p>
<p><b>Ontkenning:</b> <i>gel<b>mi</b>yordum</i> (ik kwam niet). <b>Vraag:</b> <i>geliyor <b>muydun</b>?</i> (kwam je?)</p>
<p><b>⚠️ Uitzondering:</b> de uitgang is altijd <b>-du</b>, ook na woorden met e of i: <i>gel<b>iyordu</b></i>, <i>iç<b>iyordum</b></i>, nooit <s>geliyördü</s> of <s>geliyordi</s>. <b>Waarom?</b> <i>-yor</i> komt van een oud los werkwoord (<i>yorımak</i>, gaan) en houdt daarom altijd zijn eigen <b>o</b>; het past zich niet aan. Alles wat erachter komt, richt zich naar die o en wordt dus -du, -muydu, -lardı.</p>`,
        table: [['', 'gelmek', 'yapmak', 'okumak'], ['ben', 'geliyordum', 'yapıyordum', 'okuyordum'], ['sen', 'geliyordun', 'yapıyordun', 'okuyordun'], ['o', 'geliyordu', 'yapıyordu', 'okuyordu'],
          ['biz', 'geliyorduk', 'yapıyorduk', 'okuyorduk'], ['siz', 'geliyordunuz', 'yapıyordunuz', 'okuyordunuz'], ['onlar', 'geliyorlardı', 'yapıyorlardı', 'okuyorlardı']],
        sum: 'Geliyordum, yapıyordun, okuyordu.',
        ex: [['Dün akşam saat sekizde yemek yiyordum.', 'Gisteravond om acht uur was ik aan het eten.'], ['Hava çok soğuktu ve kar yağıyordu.', 'Het was heel koud en het sneeuwde.'], ['Ne yapıyordun?', 'Wat was je aan het doen?'], ['Eskiden sigara içiyordum.', 'Vroeger rookte ik.']] },
      { t: 'Achtergrond en gebeurtenis: -iyordu en -di', es: '-iyordu ve -di',
        html: `<p>In een verhaal wissel je twee tijden af. <b>-iyordu</b> schildert de achtergrond (wat was er aan de gang?), <b>-di</b> vertelt wat er <b>gebeurde</b> (één keer, afgerond).</p>
<p><i>Otobüs bekl<b>iyordum</b>. Birden telefonum çal<b>dı</b>.</i> (Ik stond op de bus te wachten. Plotseling ging mijn telefoon.)</p>
<p><i>Uyu<b>yorduk</b>. Tam o sırada biri kapıyı çal<b>dı</b>.</i> (We sliepen. Precies op dat moment klopte er iemand aan.)</p>
<p>Woorden die bij <b>-di</b> horen: <i>birden</i> (plotseling), <i>tam o sırada</i> (precies toen), <i>sonunda</i> (uiteindelijk), <i>önce … sonra</i> (eerst … daarna). Woorden die bij <b>-iyordu</b> horen: <i>eskiden</i>, <i>her gün</i>, <i>o zaman</i>, <i>hep</i> (steeds).</p>
<p>Voor een gewoonte van vroeger kun je ook de brede tijd + -di gebruiken: <i>Çocukken her yaz köye gid<b>erdik</b>.</i> (Als kind gingen we elke zomer naar het dorp.) Dat klinkt wat meer als «wij plachten te gaan»; met <i>gidiyorduk</i> zeg je bijna hetzelfde.</p>`,
        table: [['achtergrond (-iyordu)', 'gebeurtenis (-di)'], ['Yağmur yağıyordu.', 'Şemsiyemi unuttum.'], ['Yolda yürüyordum.', 'Birden düştüm.'], ['Televizyon izliyorduk.', 'Elektrik kesildi.'], ['Herkes gülüyordu.', 'Öğretmen içeri girdi.']],
        sum: 'Bekliyordum. Birden telefonum çaldı.',
        ex: [['Eve gidiyordum, eski bir arkadaşımı gördüm.', 'Ik was op weg naar huis en zag een oude vriend.'], ['Duş alıyordum, telefon çaldı.', 'Ik stond onder de douche en de telefoon ging.'], ['Sonunda cüzdanımı buldum.', 'Uiteindelijk vond ik mijn portemonnee.']] },
      { t: 'Terwijl: werkwoord + -ken', es: 'Fiil + -ken',
        html: `<p>De <b>-ken</b> van unit 6 werkt ook met werkwoorden. Je zet hem achter de <b>brede tijd</b>: <i>gid<b>er</b>-<b>ken</b></i> (terwijl … ging / onderweg), <i>yap<b>ar</b>ken</i> (terwijl … deed), <i>oku<b>r</b>ken</i> (tijdens het lezen), <i>gel<b>ir</b>ken</i> (bij het komen).</p>
<p>Ook hier <b>geen persoonsuitgang en geen tijd</b>: de hoofdzin zegt wie en wanneer. <i>Eve gid<b>erken</b> ekmek al<b>dım</b>.</i> (Terwijl ik naar huis ging, kocht ik brood.) · <i>Eve gid<b>erken</b> ekmek al<b>ır mısın</b>?</i> (Koop je brood als je naar huis gaat?)</p>
<p>Is het onderwerp van de twee delen <b>verschillend</b>, noem het dan: <i><b>Ben</b> yemek yap<b>arken</b> <b>çocuklar</b> oyun oynuyordu.</i> (Terwijl ik kookte, speelden de kinderen.)</p>
<p>Ontkennend met -mez: <i>kimse bak<b>mazken</b></i> (terwijl niemand keek). Dat hoor je minder vaak.</p>
<p>Vaste combinaties: <i>gelirken</i> (onderweg hierheen), <i>çıkarken</i> (bij het weggaan), <i>yemek yerken</i> (onder het eten), <i>uyurken</i> (in je slaap).</p>`,
        table: [['werkwoord', 'brede tijd', 'met -ken', 'betekenis'], ['gitmek', 'gider', 'giderken', 'terwijl … ging'], ['gelmek', 'gelir', 'gelirken', 'terwijl … kwam'], ['beklemek', 'bekler', 'beklerken', 'tijdens het wachten'], ['yürümek', 'yürür', 'yürürken', 'onder het lopen'], ['uyumak', 'uyur', 'uyurken', 'in de slaap']],
        sum: 'Giderken, gelirken, yemek yerken.',
        ex: [['Okula giderken düştüm.', 'Op weg naar school ben ik gevallen.'], ['Yemek yerken telefona bakma!', 'Kijk niet op je telefoon onder het eten!'], ['Sen uyurken annen aradı.', 'Terwijl jij sliep, heeft je moeder gebeld.'], ['Çıkarken kapıyı kapat, lütfen.', 'Doe de deur dicht als je weggaat, alsjeblieft.']] }
    ],
    dialogue: {
      t: 'Wat een dag!', place: 'İstanbul 🇹🇷',
      lines: [
        ['Selin', 'Daan, neredeydin? Bir saattir seni bekliyorum!', 'Daan, waar was je? Ik wacht al een uur op je!'],
        ['Daan', 'Özür dilerim! İnanamazsın, çok garip bir gün geçirdim.', 'Sorry! Je gelooft het niet, ik heb een heel vreemde dag gehad.'],
        ['Selin', 'Ne oldu? Anlat!', 'Wat is er gebeurd? Vertel!'],
        ['Daan', 'Sabah vapuru bekliyordum. Yağmur yağıyordu, şemsiyem de yoktu.', 'Vanochtend stond ik op de veerboot te wachten. Het regende en ik had ook geen paraplu.'],
        ['Selin', 'Eee, sonra?', 'En toen?'],
        ['Daan', 'Vapura binerken telefonum denize düştü!', 'Terwijl ik op de boot stapte, viel mijn telefoon in zee!'],
        ['Selin', 'Olamaz! Gerçekten mi?', 'Dat meen je niet! Echt?'],
        ['Daan', 'Evet. Ben bağırıyordum, herkes bana bakıyordu. Tam o sırada bir balıkçı geldi.', 'Ja. Ik stond te schreeuwen, iedereen keek naar me. Precies op dat moment kwam er een visser.'],
        ['Selin', 'Telefonu buldu mu?', 'Heeft hij de telefoon gevonden?'],
        ['Daan', 'Buldu! Ama tabii çalışmıyor. Bu yüzden seni arayamadım.', 'Ja! Maar hij doet het natuurlijk niet. Daarom kon ik je niet bellen.'],
        ['Selin', 'Geçmiş olsun! Hadi, sana bir çay ısmarlayayım.', 'Wat naar voor je! Kom, ik trakteer je op een thee.']
      ],
      q: [
        { t: 'mc', q: 'Daan sabah ne bekliyordu?', o: ['Vapuru', 'Otobüsü', 'Selin’i'] },
        { t: 'mc', q: 'Telefon nereye düştü?', o: ['Denize', 'Yola', 'Vapura'] },
        { t: 'mc', q: 'Telefonu kim buldu?', o: ['Bir balıkçı', 'Bir polis', 'Selin'] }
      ]
    },
    culture: { t: 'Nasreddin Hoca en «eee, sonra?»', html: `<p>De bekendste verteller van Turkije leefde (misschien) in de dertiende eeuw: <b>Nasreddin Hoca</b> uit Akşehir. Zijn korte, grappige verhaaltjes kent elk kind. Hij rijdt achterstevoren op zijn ezel, zoekt zijn sleutel onder de lantaarn «omdat het daar licht is» en heeft altijd het laatste woord.</p>
<p>Wie in Turkije een verhaal vertelt, krijgt de hele tijd reacties. Zeg als luisteraar <i>Eee, sonra?</i> (En toen?), <i>Olamaz!</i> (Dat kan niet waar zijn!), <i>Deme!</i> (Zeg dat niet! = Nee toch!), <i>Vay be!</i> (Zo hé!) of <i>Gerçekten mi?</i> (Echt?). Stil luisteren voelt als desinteresse.</p>
<p>😅 Overkwam de verteller iets vervelends, dan sluit je af met <i>Geçmiş olsun</i>. Liep het goed af: <i>Çok şükür!</i> (Godzijdank!)</p>` },
    ex: [
      { t: 'cloze', s: 'Dün akşam saat sekizde yemek yi___.', h: 'ik was aan het', a: ['yordum'], o: ['yordum', 'yordim', 'yördüm'], nl: 'Gisteravond om acht uur was ik aan het eten.', tag: 'tr-iyordu' },
      { t: 'mc', q: 'Hoe zeg je «hij kwam / hij was aan het komen»?', o: ['geliyordu', 'geliyördü', 'geliyordi'], x: '⚠️ Uitzondering: -yor houdt altijd zijn eigen o (het was een los werkwoord). De uitgang erachter richt zich naar die o: -du.', tag: 'tr-iyordu' },
      { t: 'cloze', s: 'Yağmur yağ___.', a: ['ıyordu'], o: ['ıyordu', 'iyordu', 'ıyordı'], nl: 'Het regende.', tag: 'tr-iyordu' },
      { t: 'cloze', s: 'Biz o zaman Ankara’da otur___.', a: ['uyorduk'], o: ['uyorduk', 'uyordunuz', 'duk'], nl: 'Wij woonden toen in Ankara.', tag: 'tr-iyordu' },
      { t: 'cloze', s: 'Sen ne yapıyor ___?', a: ['muydun'], o: ['muydun', 'miydin', 'mıydın'], nl: 'Wat was jij aan het doen?', x: 'Na de o van -yor: mu + y + dun.', tag: 'tr-iyordu' },
      { t: 'mc', q: 'Otobüs bekliyordum. Birden telefonum ___.', o: ['çaldı', 'çalıyordu', 'çalar'], x: 'Na birden komt de gebeurtenis: -di.', tag: 'tr-di' },
      { t: 'mc', q: 'Welke zin beschrijft de achtergrond?', o: ['Herkes uyuyordu.', 'Kapı açıldı.', 'Birden düştüm.'], tag: 'tr-iyordu' },
      { t: 'cloze', s: 'Okula gid___ düştüm.', h: 'terwijl', a: ['erken'], o: ['erken', 'iyorken', 'ince'], nl: 'Op weg naar school ben ik gevallen.', x: 'Brede tijd + -ken: gider + ken.', tag: 'tr-ken' },
      { t: 'cloze', s: 'Yemek ye___ telefona bakma!', a: ['rken'], o: ['rken', 'ken', 'rkan'], nl: 'Kijk niet op je telefoon onder het eten!', tag: 'tr-ken' },
      { t: 'cloze', s: 'Sen uyu___ annen aradı.', a: ['rken'], o: ['rken', 'rkan', 'yordu'], nl: 'Terwijl jij sliep, heeft je moeder gebeld.', tag: 'tr-ken' },
      { t: 'mc', q: 'Wat zeg je als luisteraar: «En toen?»', o: ['Eee, sonra?', 'Ne zaman?', 'Olur mu?'], tag: 'vocab' },
      { t: 'mc', q: 'Wat betekent «kaçırmak» in «Otobüsü kaçırdım»?', o: ['missen', 'nemen', 'wachten'], tag: 'vocab' },
      { t: 'tr', nl: 'Wat is er gebeurd?', a: ['Ne oldu?'], tag: 'tr-di' },
      { t: 'tr', nl: 'Ik was op de bus aan het wachten.', a: ['Otobüs bekliyordum.', 'Otobüsü bekliyordum.'], tag: 'tr-iyordu' },
      { t: 'tr', nl: 'Plotseling ging de telefoon.', a: ['Birden telefon çaldı.', 'Aniden telefon çaldı.'], tag: 'tr-di' },
      { t: 'order', s: 'Eve giderken eski bir arkadaşımı gördüm.', nl: 'Op weg naar huis zag ik een oude vriend.', tag: 'tr-ken' },
      { t: 'match', p: [['birden', 'plotseling'], ['sonunda', 'uiteindelijk'], ['düşmek', 'vallen'], ['unutmak', 'vergeten'], ['gülmek', 'lachen'], ['ağlamak', 'huilen']], tag: 'vocab' }
    ],
    reading: {
      t: 'Nasreddin Hoca ve anahtar', type: 'Volksverhaal',
      p: [
        ['Bir akşam Nasreddin Hoca sokakta bir şey arıyordu. Komşusu geldi ve sordu: «Hocam, ne arıyorsun?»', 'Op een avond was Nasreddin Hoca op straat iets aan het zoeken. Zijn buurman kwam en vroeg: «Hoca, wat zoek je?»'],
        ['Hoca «Anahtarımı kaybettim» dedi. Komşusu da yardım etti. Birlikte uzun zaman aradılar, ama bulamadılar.', 'De Hoca zei: «Ik ben mijn sleutel kwijt.» Zijn buurman hielp ook. Samen zochten ze lang, maar ze konden hem niet vinden.'],
        ['Sonunda komşu sordu: «Hocam, anahtarı tam olarak nerede düşürdün?» Hoca «Evde» dedi.', 'Uiteindelijk vroeg de buurman: «Hoca, waar heb je de sleutel precies laten vallen?» «Thuis,» zei de Hoca.'],
        ['Komşu çok şaşırdı: «O zaman neden sokakta arıyorsun?» Hoca güldü: «Çünkü ev karanlık, sokak aydınlık!»', 'De buurman was heel verbaasd: «Waarom zoek je dan op straat?» De Hoca lachte: «Omdat het thuis donker is en op straat licht!»']
      ],
      gl: [['hocam', 'meester (aanspreekvorm)'], ['birlikte', 'samen'], ['tam olarak', 'precies'], ['düşürmek', 'laten vallen'], ['karanlık', 'donker']],
      q: [
        { t: 'mc', q: 'Hoca ne arıyordu?', o: ['Anahtarını', 'Cüzdanını', 'Komşusunu'] },
        { t: 'mc', q: 'Hoca anahtarı nerede düşürdü?', o: ['Evde', 'Sokakta', 'Parkta'] },
        { t: 'mc', q: 'Hoca neden sokakta arıyordu?', o: ['Çünkü sokak aydınlıktı', 'Çünkü ev kapalıydı', 'Çünkü komşusu oradaydı'] }
      ]
    },
    say: [['Ne oldu? Anlat!', 'Wat is er gebeurd? Vertel!'], ['Otobüs bekliyordum.', 'Ik stond op de bus te wachten.'], ['Birden telefonum çaldı.', 'Plotseling ging mijn telefoon.'], ['Eve giderken düştüm.', 'Op weg naar huis ben ik gevallen.'], ['Olamaz! Gerçekten mi?', 'Dat meen je niet! Echt?']],
    task: { nl: 'Vertel in 5 of 6 zinnen iets grappigs of vreemds dat je hebt meegemaakt. Begin met de achtergrond (-iyordu: het weer, waar je was, wat je deed), dan wat er gebeurde (-di, met birden of tam o sırada) en hoe het afliep (sonunda).', model: 'Geçen yaz İstanbul’daydım. Hava çok sıcaktı ve Kapalıçarşı’da yürüyordum. Bir halıya bakarken arkadaşlarımı kaybettim. Telefonum çalışmıyordu. Birden bir satıcı bana çay verdi ve yardım etti. Sonunda arkadaşlarımı bir kafede buldum.' },
    scenario: { nl: 'Je komt een uur te laat op een afspraak met Selin. Ze wil precies horen wat er gebeurd is.', role: 'You are Selin, a curious friend in İstanbul who has been waiting for an hour. Ask what happened (Ne oldu? Neredeydin?), keep the story going with reactions (Eee, sonra? Olamaz! Gerçekten mi?), ask what the learner was doing when it happened (Sen ne yapıyordun?), and tell a short mishap of your own using -iyordu and -di. Use simple A2 Turkish.', goal: 'Vertel wat er aan de gang was, wat er plotseling gebeurde en hoe het afliep.' }
  });

  /* ───────────────────────── A2 · 8 ───────────────────────── */
  U({
    id: 'tr-a2-08', level: 'A2', icon: '✈️', title: 'İyi yolculuklar!', nl: 'Op reis: voor, na en zodra',
    goals: ['Een kaartje kopen en inchecken in een hotel', 'Volgorde aangeven met -meden önce en -dikten sonra', '«Zodra» en «wanneer» zeggen met -ince', 'Twee handelingen verbinden met -ip'],
    vocab: [
      ['yolculuk', 'reis'], ['bilet gişesi', 'loket'], ['gidiş dönüş', 'retour'], ['tek yön', 'enkele reis'], ['biniş kartı', 'instapkaart'], ['uçak', 'vliegtuig'], ['uçuş', 'vlucht'], ['otogar', 'busstation'],
      ['peron', 'perron'], ['kalkış', 'vertrek'], ['varmak', 'aankomen'], ['inmek', 'uitstappen / landen'], ['binmek', 'instappen'], ['aktarma', 'overstap'], ['rötar', 'vertraging'],
      ['bavul', 'koffer'], ['valiz', 'reistas / koffer'], ['pasaport', 'paspoort'], ['kimlik', 'identiteitsbewijs'], ['rezervasyon', 'reservering'], ['resepsiyon', 'receptie'], ['tek kişilik oda', 'eenpersoonskamer'],
      ['çift kişilik oda', 'tweepersoonskamer'], ['kahvaltı dahil', 'inclusief ontbijt'], ['boş', 'vrij / leeg'], ['dolu', 'vol / bezet'], ['hazırlamak', 'klaarmaken'], ['kontrol etmek', 'controleren'],
      ['teslim etmek', 'inleveren / afgeven'], ['yorulmak', 'moe worden'], ['iyi yolculuklar', 'goede reis']
    ],
    grammar: [
      { t: 'Voor en na: -meden önce, -dikten sonra', es: '-meden önce, -dikten sonra',
        html: `<p><b>Voordat</b> = stam + <b>-meden / -madan önce</b>: <i>git-<b>meden önce</b></i> (voordat … gaat), <i>yat-<b>madan önce</b></i> (voor het slapengaan). Zonder <i>önce</i> betekent -meden «zonder te»: <i>kahvaltı yap<b>madan</b> çıktım</i> (ik ging weg zonder te ontbijten).</p>
<p><b>Nadat</b> = stam + <b>-dikten / -dıktan / -duktan / -dükten sonra</b>: <i>gel-<b>dikten sonra</b></i> (nadat … gekomen is), <i>oku-<b>duktan sonra</b></i>. Na een harde medeklinker wordt de d een t: <i>git-<b>tikten sonra</b></i>, <i>yap-<b>tıktan sonra</b></i>.</p>
<p>Beide vormen hebben <b>geen persoon en geen tijd</b>; de hoofdzin bepaalt die: <i>Uçağa bin<b>meden önce</b> annemi ara<b>dım</b>.</i> (Voordat ik instapte, belde ik mijn moeder.) · <i>Otele var<b>dıktan sonra</b> seni ara<b>rım</b>.</i> (Nadat ik in het hotel ben aangekomen, bel ik je wel.)</p>
<p>Met een <b>naamwoord</b>: <i>yemek<b>ten önce</b></i> (voor het eten), <i>iş<b>ten sonra</b></i> (na het werk), <i>saat sekiz<b>den sonra</b></i> (na acht uur).</p>
<p><b>⚠️ Uitzondering:</b> bij een <b>hoeveelheid tijd</b> vervalt <b>-den</b>: <i>iki gün <b>önce</b></i> (twee dagen geleden), <i>bir hafta <b>sonra</b></i> (een week later, over een week), niet <s>iki günden önce</s>. <b>Waarom?</b> <i>-den</i> betekent «vanaf, gerekend vanaf dat punt»: <i>yemekten önce</i> is «vóór, gerekend vanaf het eten». «Twee dagen» is geen punt maar een afstand in de tijd; er is dus niets om «vanaf» te rekenen.</p>`,
        table: [['', 'voordat', 'nadat'], ['gitmek', 'gitmeden önce', 'gittikten sonra'], ['gelmek', 'gelmeden önce', 'geldikten sonra'], ['yapmak', 'yapmadan önce', 'yaptıktan sonra'], ['okumak', 'okumadan önce', 'okuduktan sonra'], ['yemek (naamwoord)', 'yemekten önce', 'yemekten sonra']],
        sum: 'Gitmeden önce, geldikten sonra. İki gün önce.',
        ex: [['Yatmadan önce dişlerimi fırçalarım.', 'Voor het slapengaan poets ik mijn tanden.'], ['Bileti aldıktan sonra kahve içtik.', 'Nadat we het kaartje hadden gekocht, dronken we koffie.'], ['Uçak iki saat sonra kalkıyor.', 'Het vliegtuig vertrekt over twee uur.'], ['Üç gün önce geldik.', 'We zijn drie dagen geleden aangekomen.']] },
      { t: 'Zodra, wanneer: -ince', es: '-ince',
        html: `<p><b>-ince / -ınca / -unca / -ünce</b> achter de stam betekent «wanneer, zodra, toen»: het ene gebeurt en dan direct het andere. <i>gel-<b>ince</b></i>, <i>var-<b>ınca</b></i>, <i>ol-<b>unca</b></i>, <i>gör-<b>ünce</b></i>. Na een klinker met y: <i>başla-<b>yınca</b></i>, <i>oku-<b>yunca</b></i>.</p>
<p>Weer zonder persoon en tijd: <i>Otele var<b>ınca</b> seni ara<b>rım</b>.</i> (Zodra ik in het hotel ben, bel ik je.) · <i>Beni gör<b>ünce</b> çok şaşır<b>dı</b>.</i> (Toen hij me zag, was hij heel verbaasd.)</p>
<p>Verschillend onderwerp? Noem het: <i><b>Uçak</b> in<b>ince</b> <b>herkes</b> ayağa kalktı.</i> (Toen het vliegtuig landde, stond iedereen op.)</p>
<p><b>Ontkennend</b> met -me: <i>otobüs gel<b>meyince</b> taksiye bindik</i> (toen de bus niet kwam, namen we een taxi).</p>
<p><b>-ince of -ken?</b> <i>Eve gid<b>erken</b> ekmek aldım.</i> = onderweg, tegelijk. <i>Eve gid<b>ince</b> yemek yaptım.</i> = toen ik thuis was aangekomen, daarna.</p>`,
        table: [['werkwoord', 'met -ince', 'betekenis'], ['gelmek', 'gelince', 'zodra … komt'], ['varmak', 'varınca', 'zodra … aankomt'], ['görmek', 'görünce', 'toen … zag'], ['olmak', 'olunca', 'als het … wordt'], ['başlamak', 'başlayınca', 'zodra … begint']],
        sum: 'Gelince, varınca, görünce.',
        ex: [['Eve gelince bana haber ver.', 'Laat het me weten zodra je thuis bent.'], ['Yaz gelince tatile gideriz.', 'Als de zomer komt, gaan we op vakantie.'], ['Fiyatı duyunca şaşırdım.', 'Toen ik de prijs hoorde, was ik verbaasd.']] },
      { t: 'En…: -ip', es: '-ip',
        html: `<p>Doet <b>dezelfde persoon</b> twee dingen na elkaar, dan hoeft het eerste werkwoord geen tijd en persoon: het krijgt <b>-ip / -ıp / -up / -üp</b> en het tweede werkwoord doet de rest. <i>Bilet al<b>ıp</b> trene bin<b>dim</b>.</i> = <i>Bilet aldım ve trene bindim.</i> (Ik kocht een kaartje en stapte in de trein.)</p>
<p>Na een klinker met y: <i>bekle-<b>yip</b></i>, <i>oku-<b>yup</b></i>. En <i>gitmek</i> → <i>gi<b>d</b>ip</i>, <i>etmek</i> → <i>e<b>d</b>ip</i>.</p>
<p>Het werkt met elke tijd en ook met de gebiedende wijs: <i>Pasaportunuzu göster<b>ip</b> geç<b>in</b>.</i> (Laat uw paspoort zien en loop door.) · <i>Otele gid<b>ip</b> dinlen<b>eceğiz</b>.</i> (We gaan naar het hotel en rusten uit.)</p>
<p>Een handige vaste combinatie is <b>-ip -me-</b> voor «wel of niet»: <i>Gel<b>ip</b> gel<b>me</b>yeceğini bilmiyorum.</i> (Ik weet niet of hij komt of niet.) Die hoef je nu alleen te herkennen.</p>`,
        table: [['twee zinnen', 'met -ip'], ['Kalktım ve duş aldım.', 'Kalkıp duş aldım.'], ['Gidiyoruz ve bakıyoruz.', 'Gidip bakıyoruz.'], ['Oturun ve bekleyin.', 'Oturup bekleyin.'], ['Arayacağım ve soracağım.', 'Arayıp soracağım.']],
        sum: 'Bilet alıp trene bindim.',
        ex: [['Bavulumu hazırlayıp yattım.', 'Ik heb mijn koffer gepakt en ben naar bed gegaan.'], ['Resepsiyona gidip soralım.', 'Laten we naar de receptie gaan en het vragen.'], ['Oturup bir çay içelim mi?', 'Zullen we gaan zitten en een thee drinken?']] }
    ],
    dialogue: {
      t: 'Inchecken in het hotel', place: 'Kapadokya 🇹🇷',
      lines: [
        ['Resepsiyonist', 'İyi akşamlar, hoş geldiniz. Rezervasyonunuz var mı?', 'Goedenavond, welkom. Heeft u een reservering?'],
        ['Iris', 'Evet, iki gün önce internetten yaptım. Adım Iris de Vries.', 'Ja, die heb ik twee dagen geleden via internet gemaakt. Mijn naam is Iris de Vries.'],
        ['Resepsiyonist', 'Evet, buldum. Çift kişilik oda, üç gece, kahvaltı dahil. Pasaportunuzu alabilir miyim?', 'Ja, gevonden. Tweepersoonskamer, drie nachten, inclusief ontbijt. Mag ik uw paspoort?'],
        ['Iris', 'Buyurun. Kahvaltı saat kaçta?', 'Alstublieft. Hoe laat is het ontbijt?'],
        ['Resepsiyonist', 'Yediden ona kadar. Balon turuna katılacak mısınız?', 'Van zeven tot tien. Gaat u mee met de ballonvaart?'],
        ['Iris', 'Evet, yarın sabah. Balon kaçta kalkıyor?', 'Ja, morgenochtend. Hoe laat vertrekt de ballon?'],
        ['Resepsiyonist', 'Güneş doğmadan önce, saat beşte. Servis sizi dört buçukta otelden alacak.', 'Voor zonsopgang, om vijf uur. De pendelbus haalt u om half vijf bij het hotel op.'],
        ['Iris', 'Çok erken! Döndükten sonra kahvaltı yapabilir miyiz?', 'Heel vroeg! Kunnen we ontbijten nadat we terug zijn?'],
        ['Resepsiyonist', 'Tabii. Dönünce doğrudan restorana gelin. Odanız ikinci katta, 204 numara.', 'Natuurlijk. Kom zodra u terug bent direct naar het restaurant. Uw kamer is op de tweede verdieping, nummer 204.'],
        ['Iris', 'Teşekkürler. Bavulları bırakıp biraz yürüyeceğiz.', 'Dank u. We zetten de koffers neer en gaan een stukje lopen.'],
        ['Resepsiyonist', 'İyi eğlenceler!', 'Veel plezier!']
      ],
      q: [
        { t: 'mc', q: 'Iris rezervasyonu ne zaman yaptı?', o: ['İki gün önce', 'Bir hafta önce', 'Dün'] },
        { t: 'mc', q: 'Balon ne zaman kalkıyor?', o: ['Güneş doğmadan önce', 'Kahvaltıdan sonra', 'Akşam'] },
        { t: 'mc', q: 'Döndükten sonra ne yapacaklar?', o: ['Kahvaltı yapacaklar', 'Bavulları hazırlayacaklar', 'Uyuyacaklar'] }
      ]
    },
    culture: { t: 'Reizen per nachtbus, en Cappadocië', html: `<p>Turkije reist per <b>bus</b>. Vanaf de <b>otogar</b> (busstation) van elke stad vertrekken dag en nacht luxe bussen naar alle uithoeken. Aan boord loopt een <b>muavin</b> (steward) rond met thee, koffie, water en cake, en vaak met <b>kolonya</b>: citroen-eau-de-cologne die hij in je handen giet om je op te frissen. Mannen en vrouwen die elkaar niet kennen krijgen geen stoelen naast elkaar.</p>
<p>Om de paar uur stopt de bus bij een <b>dinlenme tesisi</b> (wegrestaurant). De chauffeur roept dan <i>Yirmi dakika mola!</i> (Twintig minuten pauze!)</p>
<p>🎈 In <b>Kapadokya</b> (Cappadocië) stijgen bij zonsopgang honderden heteluchtballonnen op boven de <b>peribacaları</b> («feeënschoorstenen», rotspunten van tufsteen). Veel hotels zijn in de rots uitgehakt: een <i>mağara otel</i> (grothotel).</p>` },
    ex: [
      { t: 'cloze', s: 'Yat___ önce dişlerimi fırçalarım.', a: ['madan'], o: ['madan', 'meden', 'tıktan'], nl: 'Voor het slapengaan poets ik mijn tanden.', tag: 'tr-once' },
      { t: 'cloze', s: 'Uçağa bin___ önce annemi aradım.', a: ['meden'], o: ['meden', 'madan', 'dikten'], nl: 'Voordat ik in het vliegtuig stapte, belde ik mijn moeder.', tag: 'tr-once' },
      { t: 'cloze', s: 'Bileti al___ sonra kahve içtik.', a: ['dıktan'], o: ['dıktan', 'dikten', 'madan'], nl: 'Nadat we het kaartje hadden gekocht, dronken we koffie.', tag: 'tr-once' },
      { t: 'cloze', s: 'Otele git___ sonra dinlendik.', a: ['tikten'], o: ['tikten', 'dikten', 'tıktan'], nl: 'Nadat we naar het hotel waren gegaan, rustten we uit.', x: 'Na de harde t wordt de d een t: gittikten.', tag: 'tr-once' },
      { t: 'mc', q: 'Hoe zeg je «twee dagen geleden»?', o: ['iki gün önce', 'iki günden önce', 'önce iki gün'], x: '⚠️ Uitzondering: bij een hoeveelheid tijd vervalt -den. «Twee dagen» is een afstand, geen punt om vanaf te rekenen.', tag: 'tr-once' },
      { t: 'mc', q: 'Hoe zeg je «na het eten»?', o: ['yemekten sonra', 'yemek sonra', 'sonra yemekten'], x: 'Het eten is een punt in de tijd, dus met -ten.', tag: 'tr-once' },
      { t: 'cloze', s: 'Otele var___ seni ararım.', h: 'zodra', a: ['ınca'], o: ['ınca', 'ince', 'ırken'], nl: 'Zodra ik in het hotel ben, bel ik je.', tag: 'tr-ince' },
      { t: 'cloze', s: 'Beni gör___ çok şaşırdı.', h: 'toen', a: ['ünce'], o: ['ünce', 'unca', 'ince'], nl: 'Toen hij me zag, was hij heel verbaasd.', tag: 'tr-ince' },
      { t: 'mc', q: 'Welke zin betekent «onderweg naar huis kocht ik brood»?', o: ['Eve giderken ekmek aldım.', 'Eve gidince ekmek aldım.', 'Eve gittikten sonra ekmek aldım.'], x: '-ken = tegelijk, onderweg. -ince = zodra je er bent.', tag: 'tr-ken' },
      { t: 'cloze', s: 'Bilet al___ trene bindim.', h: 'en', a: ['ıp'], o: ['ıp', 'ip', 'up'], nl: 'Ik kocht een kaartje en stapte in de trein.', tag: 'tr-ip' },
      { t: 'cloze', s: 'Resepsiyona gi___ soralım.', h: 'en', a: ['dip'], o: ['dip', 'tip', 'dıp'], nl: 'Laten we naar de receptie gaan en het vragen.', x: 'gitmek → gidip: de t wordt d vóór een klinker.', tag: 'tr-ip' },
      { t: 'mc', q: 'Wat is «gidiş dönüş»?', o: ['retour', 'enkele reis', 'overstap'], tag: 'vocab' },
      { t: 'tr', nl: 'Heeft u een reservering?', a: ['Rezervasyonunuz var mı?'], tag: 'tr-var' },
      { t: 'tr', nl: 'Het vliegtuig vertrekt over twee uur.', a: ['Uçak iki saat sonra kalkıyor.', 'Uçak iki saat sonra kalkacak.'], tag: 'tr-once' },
      { t: 'tr', nl: 'Bel me zodra je aankomt.', a: ['Varınca beni ara.', 'Gelince beni ara.', 'Varınca ara beni.'], tag: 'tr-ince' },
      { t: 'order', s: 'Otele vardıktan sonra hemen duş alıp yattım.', nl: 'Nadat ik in het hotel was aangekomen, heb ik meteen gedoucht en ben ik naar bed gegaan.', tag: 'tr-once' },
      { t: 'match', p: [['kalkmak', 'vertrekken'], ['varmak', 'aankomen'], ['binmek', 'instappen'], ['inmek', 'uitstappen'], ['bavul', 'koffer'], ['rötar', 'vertraging']], tag: 'vocab' }
    ],
    reading: {
      t: 'Yolcularımızın dikkatine', type: 'Mededeling van de busmaatschappij',
      p: [
        ['Sayın yolcularımız, İstanbul–Nevşehir otobüsümüze hoş geldiniz. Yolculuğumuz yaklaşık on bir saat sürecek.', 'Geachte reizigers, welkom in onze bus İstanbul–Nevşehir. Onze reis zal ongeveer elf uur duren.'],
        ['Otobüs kalkmadan önce lütfen biletinizi ve koltuk numaranızı kontrol edin. Büyük bavullarınızı muavine teslim edin.', 'Controleer voordat de bus vertrekt alstublieft uw kaartje en stoelnummer. Geef uw grote koffers af bij de steward.'],
        ['Ankara’yı geçtikten sonra yirmi dakika mola vereceğiz. Molada inip yemek yiyebilirsiniz.', 'Nadat we Ankara zijn gepasseerd, houden we twintig minuten pauze. In de pauze kunt u uitstappen en eten.'],
        ['Nevşehir’e varınca otellere ücretsiz servisimiz var. İnmeden önce eşyalarınızı unutmayın. İyi yolculuklar!', 'Zodra we in Nevşehir aankomen, is er een gratis pendeldienst naar de hotels. Vergeet uw spullen niet voordat u uitstapt. Goede reis!']
      ],
      gl: [['yolcu', 'reiziger'], ['yaklaşık', 'ongeveer'], ['sürmek', 'duren'], ['mola', 'pauze'], ['ücretsiz', 'gratis']],
      q: [
        { t: 'mc', q: 'Yolculuk yaklaşık kaç saat sürecek?', o: ['On bir saat', 'Yirmi saat', 'İki saat'] },
        { t: 'mc', q: 'Mola ne zaman?', o: ['Ankara’yı geçtikten sonra', 'Otobüs kalkmadan önce', 'Nevşehir’e varınca'] },
        { t: 'mc', q: 'Yolcular büyük bavullarını kime teslim eder?', o: ['Muavine', 'Resepsiyona', 'Polise'] }
      ]
    },
    say: [['Rezervasyonum var.', 'Ik heb een reservering.'], ['Gidiş dönüş bir bilet, lütfen.', 'Eén retourtje, alstublieft.'], ['Varınca seni ararım.', 'Ik bel je zodra ik aankom.'], ['Kahvaltı saat kaçta?', 'Hoe laat is het ontbijt?'], ['İyi yolculuklar!', 'Goede reis!']],
    task: { nl: 'Beschrijf in 5 zinnen een reisdag: wat je deed voordat je vertrok (-meden önce), wat je deed nadat je aankwam (-dikten sonra), iets met zodra (-ince) en twee handelingen achter elkaar met -ip.', model: 'Evden çıkmadan önce pasaportumu kontrol ettim. Havalimanına varınca bavulumu teslim ettim. Bir kahve alıp uçağı bekledim. İzmir’e indikten sonra otele taksiyle gittim. Otele varınca hemen denize girdim!' },
    scenario: { nl: 'Je komt ’s avonds aan bij een grothotel in Cappadocië en checkt in.', role: 'You are the receptionist of a cave hotel in Göreme, Kapadokya. Check the guest in: ask for the reservation and passport, confirm room type, nights and breakfast (kahvaltı dahil), explain the balloon tour (güneş doğmadan önce, servis dört buçukta) and what they can do after returning (döndükten sonra, dönünce). Answer their questions. Use simple A2 Turkish with the polite siz form.', goal: 'Check in, vraag naar het ontbijt en de ballonvaart en spreek een tijd af.' }
  });
})(window.SPT);
