/* Turks voor Nederlandstaligen — niveau A2, units 3–4 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── A2 · 3 ───────────────────────── */
  U({
    id: 'tr-a2-03', level: 'A2', icon: '🎸', title: 'Gitar çalabiliyor musun?', nl: 'Hobby’s: kunnen en niet kunnen',
    goals: ['Over hobby’s en sport praten', 'Zeggen wat je kunt met -ebil- / -abil-', 'Zeggen wat je niet kunt met -eme- / -ama-', 'Het verschil kennen tussen «kunnen» en «weten hoe» (bilmek)'],
    vocab: [
      ['hobi', 'hobby'], ['gitar çalmak', 'gitaar spelen'], ['piyano', 'piano'], ['şarkı söylemek', 'zingen'], ['halk oyunları', 'volksdansen'], ['resim yapmak', 'tekenen / schilderen'],
      ['fotoğraf makinesi', 'fototoestel'], ['bisiklete binmek', 'fietsen'], ['araba kullanmak', 'autorijden'], ['satranç', 'schaken'], ['tavla', 'backgammon'], ['basketbol', 'basketbal'],
      ['maç', 'wedstrijd'], ['takım', 'team / ploeg'], ['kazanmak', 'winnen / verdienen'], ['kaybetmek', 'verliezen'], ['başarmak', 'slagen / voor elkaar krijgen'], ['katılmak', 'meedoen'],
      ['kurs', 'cursus'], ['ders almak', 'les nemen'], ['kolay', 'makkelijk'], ['zor', 'moeilijk'], ['tabii', 'natuurlijk'], ['maalesef', 'helaas'],
      ['yetenekli', 'getalenteerd'], ['taşımak', 'dragen / vervoeren'], ['yetişmek', 'op tijd komen / halen'], ['duymak', 'horen'], ['anlamak', 'begrijpen'], ['tek başına', 'in je eentje']
    ],
    grammar: [
      { t: 'Kunnen: -ebil- / -abil-', es: 'Yeterlilik: -ebil-',
        html: `<p>«Kunnen» is in het Turks geen los werkwoord maar een stuk dat je <b>in het werkwoord</b> plakt: stam + <b>-ebil-</b> (na e, i, ö, ü) of <b>-abil-</b> (na a, ı, o, u), en dan de tijd. Meestal is dat de brede tijd, en omdat <i>bil-</i> bij de dertien hoort wordt dat <b>-ebilir</b>: <i>gel-<b>ebilir</b>-im</i> (ik kan komen), <i>yap-<b>abilir</b>-sin</i> (jij kunt het doen).</p>
<p>Stam op een <b>klinker</b>: er komt een <b>y</b> tussen: <i>oku-<b>y</b>-abilirim</i> (ik kan lezen), <i>bekle-<b>y</b>-ebiliriz</i> (we kunnen wachten).</p>
<p>De bekende veranderingen gelden ook hier: <i>gitmek</i> → <i>gi<b>d</b>ebilirim</i>, <i>etmek</i> → <i>e<b>d</b>ebilirim</i>, <i>yemek</i> → <i>y<b>i</b>yebilirim</i>, <i>demek</i> → <i>d<b>i</b>yebilirim</i>.</p>
<p>Met <b>-iyor</b> zeg je dat je iets op dit moment (of tegenwoordig) kunt: <i>Gitar çal<b>abiliyorum</b>.</i> (Ik kan gitaar spelen.) Met <b>-di</b>: <i>Gel<b>ebildim</b>.</i> (Het is me gelukt te komen.)</p>
<p><b>Vragen:</b> <i>Yarın gel<b>ebilir misin</b>?</i> (Kun je morgen komen?) · <i>Türkçe konuş<b>abiliyor musunuz</b>?</i> (Kunt u Turks spreken?)</p>`,
        table: [['', 'gelmek', 'yapmak', 'okumak', 'gitmek'], ['ben', 'gelebilirim', 'yapabilirim', 'okuyabilirim', 'gidebilirim'], ['sen', 'gelebilirsin', 'yapabilirsin', 'okuyabilirsin', 'gidebilirsin'], ['o', 'gelebilir', 'yapabilir', 'okuyabilir', 'gidebilir'],
          ['biz', 'gelebiliriz', 'yapabiliriz', 'okuyabiliriz', 'gidebiliriz'], ['siz', 'gelebilirsiniz', 'yapabilirsiniz', 'okuyabilirsiniz', 'gidebilirsiniz'], ['onlar', 'gelebilirler', 'yapabilirler', 'okuyabilirler', 'gidebilirler']],
        sum: 'Gelebilirim, yapabilirsin, okuyabilir, gidebiliriz.',
        ex: [['Yarın gelebilirim.', 'Ik kan morgen komen.'], ['Bu çantayı taşıyabilir misin?', 'Kun je deze tas dragen?'], ['Burada fotoğraf çekebilirsiniz.', 'Hier kunt u foto’s maken.'], ['Biraz Türkçe konuşabiliyorum.', 'Ik kan een beetje Turks spreken.']] },
      { t: 'Niet kunnen: -eme- / -ama-', es: 'Yetersizlik: -eme-',
        html: `<p>Voor «niet kunnen» zet je <b>-eme- / -ama-</b> achter de stam: <i>gel-<b>eme</b>-m</i> (ik kan niet komen), <i>yap-<b>ama</b>-z</i> (hij kan het niet). Daarna gaat het precies als de ontkennende brede tijd van unit 2: <i>gelemem, gelemezsin, gelemez, gelemeyiz, gelemezsiniz, gelemezler</i>.</p>
<p><b>⚠️ Uitzondering:</b> de ontkenning van <i>gelebilirim</i> is <b>gelemem</b>, niet <s>gelebilmem</s>: het stukje <b>-bil-</b> verdwijnt. <b>Waarom?</b> «Kunnen» en «niet kunnen» komen van twee verschillende oude werkwoorden. <i>Gelebil-</i> is gemaakt met <i>bilmek</i> (weten hoe), maar <i>geleme-</i> met het verdwenen werkwoord <i>umak</i> (in staat zijn): <i>gel-e u-ma-</i> is samengesmolten tot <i>geleme-</i>. Alleen de <b>e / a</b> hebben ze gemeen.</p>
<p>Met andere tijden: <i>Şimdi gel<b>emiyorum</b>.</i> (Ik kan nu niet komen.) · <i>Dün gel<b>emedim</b>.</i> (Gisteren kon ik niet komen.) · <i>Yarın gel<b>emeyeceğim</b>.</i> (Morgen zal ik niet kunnen komen.)</p>
<p>Stam op een klinker: weer een y: <i>oku-<b>y</b>-amam</i>, <i>anla-<b>y</b>-amıyorum</i> (ik kan het niet begrijpen). En <i>gitmek</i> → <i>gi<b>d</b>emem</i>.</p>`,
        table: [['', 'kunnen', 'niet kunnen ⚠️', 'kon niet'], ['ben', 'gelebilirim', 'gelemem', 'gelemedim'], ['sen', 'gelebilirsin', 'gelemezsin', 'gelemedin'], ['o', 'gelebilir', 'gelemez', 'gelemedi'], ['biz', 'gelebiliriz', 'gelemeyiz', 'gelemedik'], ['siz', 'gelebilirsiniz', 'gelemezsiniz', 'gelemediniz']],
        sum: 'Gelebilirim ↔ gelemem. Yapamıyorum. Gelemedim.',
        ex: [['Maalesef yarın gelemem.', 'Helaas kan ik morgen niet komen.'], ['Seni duyamıyorum.', 'Ik kan je niet horen.'], ['Dün maça gidemedik.', 'Gisteren konden we niet naar de wedstrijd.'], ['Bunu tek başına yapamazsın.', 'Dit kun je niet in je eentje.']] },
      { t: 'Kunnen of «weten hoe»: bilmek', es: 'Bilmek',
        html: `<p>Voor een <b>aangeleerde vaardigheid</b> gebruikt Turks vaak <b>bilmek</b> (weten, kennen), net als Frans <i>savoir</i>: <i>Türkçe <b>biliyorum</b>.</i> (Ik spreek Turks, letterlijk: ik ken Turks.) · <i>Yüzme <b>biliyor musun</b>?</i> (Kun je zwemmen?) · <i>Araba kullanmayı <b>bilmiyorum</b>.</i> (Ik kan niet autorijden.)</p>
<p>Het werkwoord ervoor krijgt <b>-meyi / -mayı</b> (de -mek-vorm als lijdend voorwerp, zie A1 unit 9) of kort <b>-me / -ma</b>: <i>dans etme<b>yi</b> biliyorum</i> · <i>yüzme biliyorum</i>.</p>
<p><b>Verschil:</b> <i>Yüzme<b>yi biliyorum</b>, ama bugün yüz<b>emem</b>: hastayım.</i> (Ik kan zwemmen, maar vandaag kan ik niet zwemmen: ik ben ziek.) <i>Bilmek</i> = je hebt het geleerd. <i>-ebil-</i> = het is mogelijk, het lukt.</p>
<p>Instrumenten bespeel je met <b>çalmak</b>, sporten en spellen doe je met <b>oynamak</b>: <i>gitar çalmak</i>, <i>piyano çalmak</i> ↔ <i>futbol oynamak</i>, <i>satranç oynamak</i>, <i>tavla oynamak</i>.</p>`,
        table: [['zin', 'betekenis'], ['Yüzmeyi biliyorum.', 'Ik kan zwemmen (heb het geleerd).'], ['Bugün yüzebilirim.', 'Vandaag kan ik zwemmen (het is mogelijk).'], ['Bugün yüzemem.', 'Vandaag kan ik niet zwemmen.'], ['Gitar çalmayı bilmiyorum.', 'Ik kan geen gitaar spelen.']],
        sum: 'Yüzmeyi biliyorum, ama bugün yüzemem.',
        ex: [['Satranç oynamayı biliyor musun?', 'Kun je schaken?'], ['Annem çok güzel şarkı söyler.', 'Mijn moeder zingt heel mooi.'], ['Tavla bilmiyorum, ama öğrenebilirim.', 'Ik kan geen backgammon, maar ik kan het leren.']] }
    ],
    dialogue: {
      t: 'Een band zoekt een gitarist', place: 'Ankara 🇹🇷',
      lines: [
        ['Can', 'Lisa, sen gitar çalabiliyor musun?', 'Lisa, kun jij gitaar spelen?'],
        ['Lisa', 'Evet, biraz çalabiliyorum. Neden?', 'Ja, ik kan een beetje spelen. Hoezo?'],
        ['Can', 'Bizim grupta gitarist yok. Cumartesi günü gelebilir misin?', 'In onze band is geen gitarist. Kun je zaterdag komen?'],
        ['Lisa', 'Maalesef cumartesi gelemem, çalışıyorum. Pazar olabilir mi?', 'Helaas kan ik zaterdag niet komen, ik werk. Kan zondag?'],
        ['Can', 'Olur. Türkçe şarkı söyleyebilir misin?', 'Dat kan. Kun je Turkse liedjes zingen?'],
        ['Lisa', 'Şarkı söyleyemem, sesim çok kötü! Ama dans edebilirim.', 'Ik kan niet zingen, mijn stem is heel slecht! Maar ik kan wel dansen.'],
        ['Can', 'Fark etmez, Elif söyler. Nota okumayı biliyor musun?', 'Maakt niet uit, Elif zingt. Kun je noten lezen?'],
        ['Lisa', 'Evet, biliyorum. Çocukken piyano dersi aldım.', 'Ja, dat kan ik. Als kind heb ik pianoles gehad.'],
        ['Can', 'Harika! Gitarını getirebilir misin?', 'Geweldig! Kun je je gitaar meenemen?'],
        ['Lisa', 'Tabii, getiririm. Pazar günü görüşürüz!', 'Natuurlijk, die neem ik mee. Tot zondag!']
      ],
      q: [
        { t: 'mc', q: 'Lisa cumartesi neden gelemez?', o: ['Çünkü çalışıyor', 'Çünkü hasta', 'Çünkü gitarı yok'] },
        { t: 'mc', q: 'Lisa ne yapamaz?', o: ['Şarkı söyleyemez', 'Gitar çalamaz', 'Dans edemez'] },
        { t: 'mc', q: 'Lisa çocukken hangi dersi aldı?', o: ['Piyano', 'Gitar', 'Dans'] }
      ]
    },
    culture: { t: 'Tavla en voetbal', html: `<p>In elk <b>kahvehane</b> (koffiehuis) hoor je het geklik van dobbelstenen: <b>tavla</b> (backgammon) is het nationale tijdverdrijf. De worpen hebben eigen namen uit het Perzisch: <i>şeş beş</i> (zes-vijf), <i>dü şeş</i> (dubbel zes). Wie verliest, betaalt de thee.</p>
<p><b>Voetbal</b> is bijna een geloof. De grote drie uit İstanbul zijn <b>Galatasaray</b>, <b>Fenerbahçe</b> en <b>Beşiktaş</b>. De eerste vraag bij een kennismaking is vaak: <i>Hangi takımı tutuyorsun?</i> (Voor welke club ben je?) «Voor een club zijn» is <i>takım tutmak</i>, letterlijk een team vasthouden.</p>
<p>🎵 De <b>saz</b> (of <i>bağlama</i>) is het snaarinstrument van de volksmuziek. Wie een beetje kan spelen, heet meteen <i>yetenekli</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Yarın gel___.', h: 'ik kan', a: ['ebilirim'], o: ['ebilirim', 'abilirim', 'ebilerim'], nl: 'Ik kan morgen komen.', tag: 'tr-kunnen' },
      { t: 'cloze', s: 'Bu çantayı taşı___ misin?', h: 'kunnen', a: ['yabilir'], o: ['yabilir', 'abilir', 'yebilir'], nl: 'Kun je deze tas dragen?', x: 'Na een klinker komt er een y tussen: taşıyabilir.', tag: 'tr-kunnen' },
      { t: 'cloze', s: 'Sen çok güzel dans e___.', h: 'kunnen', a: ['debilirsin'], o: ['debilirsin', 'tebilirsin', 'dabilirsin'], nl: 'Jij kunt heel mooi dansen.', x: 'etmek → edebilir: de t wordt d vóór een klinker.', tag: 'tr-kunnen' },
      { t: 'mc', q: 'Hoe zeg je «ik kan niet komen»?', o: ['Gelemem.', 'Gelebilmem.', 'Gelebilmezim.'], x: '⚠️ Uitzondering: bij «niet kunnen» verdwijnt -bil-. Geleme- komt van een ander oud werkwoord (umak) dan gelebil- (bilmek).', tag: 'tr-kunnen' },
      { t: 'mc', q: 'Hoe zeg je «hij kan het niet doen»?', o: ['Yapamaz.', 'Yapabilmez.', 'Yapamam.'], x: '⚠️ Uitzondering: niet kunnen = -ama- zonder -bil-.', tag: 'tr-kunnen' },
      { t: 'cloze', s: 'Seni duy___.', h: 'ik kan nu niet', a: ['amıyorum'], o: ['amıyorum', 'emiyorum', 'abiliyorum'], nl: 'Ik kan je niet horen.', tag: 'tr-kunnen' },
      { t: 'cloze', s: 'Dün maça gid___.', h: 'wij konden niet', a: ['emedik'], o: ['emedik', 'amadık', 'ebildik'], nl: 'Gisteren konden we niet naar de wedstrijd.', tag: 'tr-kunnen' },
      { t: 'cloze', s: 'Yüzme___ biliyor musun?', a: ['yi'], o: ['yi', 'k', 'ye'], nl: 'Kun je zwemmen?', x: 'Vóór bilmek krijgt het werkwoord -meyi.', tag: 'tr-mek' },
      { t: 'mc', q: 'Welk werkwoord hoort bij «gitar»?', o: ['çalmak', 'oynamak', 'yapmak'], x: 'Een instrument bespeel je met çalmak; een sport of spel doe je met oynamak.', tag: 'vocab' },
      { t: 'mc', q: 'Welk werkwoord hoort bij «satranç»?', o: ['oynamak', 'çalmak', 'binmek'], tag: 'vocab' },
      { t: 'mc', q: 'Je hebt leren zwemmen, maar je bent vandaag ziek. Wat zeg je?', o: ['Yüzmeyi biliyorum, ama bugün yüzemem.', 'Yüzemem, ama bugün yüzmeyi biliyorum.', 'Yüzmeyi bilmiyorum.'], tag: 'tr-kunnen' },
      { t: 'tr', nl: 'Kun je morgen komen?', a: ['Yarın gelebilir misin?', 'Yarın gelebiliyor musun?'], tag: 'tr-kunnen' },
      { t: 'tr', nl: 'Helaas kan ik niet komen.', a: ['Maalesef gelemem.', 'Maalesef gelemiyorum.', 'Maalesef gelemeyeceğim.'], tag: 'tr-kunnen' },
      { t: 'tr', nl: 'Ik kan een beetje Turks spreken.', a: ['Biraz Türkçe konuşabiliyorum.', 'Biraz Türkçe konuşabilirim.', 'Biraz Türkçe biliyorum.'], tag: 'tr-kunnen' },
      { t: 'order', s: 'Hafta sonu bizimle futbol oynayabilir misin?', nl: 'Kun je in het weekend met ons voetballen?', tag: 'tr-kunnen' },
      { t: 'match', p: [['kazanmak', 'winnen'], ['kaybetmek', 'verliezen'], ['denemek', 'proberen'], ['kolay', 'makkelijk'], ['zor', 'moeilijk'], ['maalesef', 'helaas']], tag: 'vocab' }
    ],
    reading: {
      t: 'Gençlik merkezi: kurslar', type: 'Folder',
      p: [
        ['Boş zamanınızda ne yapıyorsunuz? Merkezimizde yeni bir hobi öğrenebilirsiniz!', 'Wat doet u in uw vrije tijd? In ons centrum kunt u een nieuwe hobby leren!'],
        ['Salı ve perşembe akşamları gitar ve piyano dersi alabilirsiniz. Nota bilmiyor musunuz? Sorun değil, sıfırdan başlayabilirsiniz.', 'Op dinsdag- en donderdagavond kunt u gitaar- en pianoles nemen. Kunt u geen noten lezen? Geen probleem, u kunt vanaf nul beginnen.'],
        ['Cumartesi günleri resim ve fotoğraf kursu var. Fotoğraf kursuna telefonunuzla da katılabilirsiniz.', 'Op zaterdag is er een teken- en fotocursus. Aan de fotocursus kunt u ook met uw telefoon meedoen.'],
        ['On iki yaşından küçük çocuklar akşam kurslarına katılamaz. Onlar için pazar sabahı satranç dersi var.', 'Kinderen jonger dan twaalf kunnen niet aan de avondcursussen meedoen. Voor hen is er op zondagochtend schaakles.']
      ],
      gl: [['merkez', 'centrum'], ['sorun değil', 'geen probleem'], ['sıfırdan', 'vanaf nul'], ['-den küçük', 'jonger dan']],
      q: [
        { t: 'mc', q: 'Gitar dersi ne zaman?', o: ['Salı ve perşembe akşamları', 'Cumartesi günleri', 'Pazar sabahı'] },
        { t: 'mc', q: 'Fotoğraf kursuna neyle katılabilirsiniz?', o: ['Telefonla', 'Gitarla', 'Bisikletle'] },
        { t: 'mc', q: 'Küçük çocuklar hangi derse gidebilir?', o: ['Satranç', 'Piyano', 'Fotoğraf'] }
      ]
    },
    say: [['Yarın gelebilir misin?', 'Kun je morgen komen?'], ['Maalesef gelemem.', 'Helaas kan ik niet komen.'], ['Biraz Türkçe konuşabiliyorum.', 'Ik kan een beetje Turks spreken.'], ['Yüzmeyi biliyorum.', 'Ik kan zwemmen.']],
    task: { nl: 'Schrijf 5 zinnen over wat je wel en niet kunt: twee dingen die je goed kunt, één ding dat je niet kunt, één ding dat je vroeger niet kon (met -emedim of -emiyordum) en één ding dat je wilt leren.', model: 'Bisiklete binebilirim ve iyi yemek pişirebilirim. Gitar çalmayı biliyorum, ama şarkı söyleyemem. Geçen yıl Türkçe konuşamıyordum, şimdi biraz konuşabiliyorum. Tavla oynamayı öğrenmek istiyorum.' },
    scenario: { nl: 'Can zoekt mensen voor zijn band en zijn voetbalteam in Ankara. Hij wil weten wat jij kunt.', role: 'You are Can, an energetic student in Ankara who runs a band and a five-a-side football team. Ask the learner what they can do with -ebil- (Gitar çalabiliyor musun? Futbol oynayabilir misin?), react to what they cannot do, and try to fix a day they can come (Cumartesi gelebilir misin?). Use simple A2 Turkish.', goal: 'Zeg wat je wel en niet kunt en spreek een dag af waarop je kunt.' }
  });

  /* ───────────────────────── A2 · 4 ───────────────────────── */
  U({
    id: 'tr-a2-04', level: 'A2', icon: '🩺', title: 'Neyiniz var?', nl: 'Bij de dokter: moeten en mogen',
    goals: ['Zeggen wat er pijn doet en hoe je je voelt', 'Advies geven met -meli / -malı', 'Zeggen wat moet met lazım en zorunda', 'Vragen of iets mag met -ebilir miyim?'],
    vocab: [
      ['hasta', 'ziek / patiënt'], ['acil servis', 'spoedeisende hulp'], ['randevu', 'afspraak'], ['muayene', 'onderzoek (bij de dokter)'], ['ağrı', 'pijn'], ['ağrımak', 'pijn doen'], ['ateş', 'koorts / vuur'],
      ['öksürük', 'hoest'], ['nezle', 'verkoudheid'], ['grip', 'griep'], ['ilaç', 'medicijn'], ['reçete', 'recept'], ['hap', 'pil'], ['baş', 'hoofd'], ['boğaz', 'keel'], ['karın', 'buik'],
      ['mide', 'maag'], ['diş', 'tand'], ['sırt', 'rug'], ['kol', 'arm'], ['bacak', 'been'], ['ayak', 'voet'], ['burun', 'neus'], ['ağız', 'mond'], ['kulak', 'oor'],
      ['halsiz', 'slap / futloos'], ['kendini iyi hissetmek', 'je goed voelen'], ['geçmiş olsun', 'beterschap'], ['yasak', 'verboden'], ['acil', 'spoed / dringend']
    ],
    grammar: [
      { t: 'Wat doet er pijn?', es: 'Neren ağrıyor?',
        html: `<p>«Ik heb hoofdpijn» is in het Turks «mijn hoofd doet pijn»: lichaamsdeel + <b>bezitsuitgang</b> + <b>ağrıyor</b>. <i>Baş<b>ım</b> ağrıyor.</i> · <i>Boğaz<b>ım</b> ağrıyor.</i> · <i>Diş<b>in</b> mi ağrıyor?</i> (Heb je kiespijn?) · <i>Sırt<b>ı</b> ağrıyor.</i> (Hij heeft rugpijn.)</p>
<p>De dokter vraagt: <i>Neyiniz var?</i> (Wat heeft u?) of <i>Şikâyetiniz ne?</i> (Wat is uw klacht?) of <i>Nereniz ağrıyor?</i> (Waar doet het pijn?)</p>
<p>Met <b>var</b> zeg je wat je hebt: <i>Ateş<b>im</b> var.</i> (Ik heb koorts.) · <i>Öksürüğ<b>üm</b> var.</i> (Ik moet hoesten.) · <i>Nezle<b>yim</b>.</i> (Ik ben verkouden.) · <i>Hasta<b>yım</b>.</i> (Ik ben ziek.)</p>
<p><b>⚠️ Uitzondering:</b> <i>ağız</i> → <i>a<b>ğz</b>ım</i> (mijn mond), <i>burun</i> → <i>bu<b>rn</b>um</i> (mijn neus), <i>karın</i> → <i>ka<b>rn</b>ım</i> (mijn buik): de tweede klinker valt weg, dus niet <s>ağızım</s>, <s>burunum</s>, <s>karınım</s>. <b>Waarom?</b> Die klinker hoorde oorspronkelijk niet bij het woord: hij is er alleen tussen gezet omdat <i>ağz</i> of <i>burn</i> aan het woordeinde moeilijk uit te spreken is. Komt er een uitgang met een klinker achter, dan is die hulpklinker niet meer nodig. Je kent het al van <i>oğul</i> → <i>oğlum</i>. Het gebeurt vooral bij lichaamsdelen: ook <i>boyun</i> → <i>boynum</i> (nek), <i>omuz</i> → <i>omzum</i> (schouder), <i>göğüs</i> → <i>göğsüm</i> (borst).</p>`,
        table: [['woord', 'mijn…', 'zin'], ['baş', 'başım', 'Başım ağrıyor.'], ['diş', 'dişim', 'Dişim ağrıyor.'], ['karın ⚠️', 'karnım', 'Karnım ağrıyor.'], ['burun ⚠️', 'burnum', 'Burnum akıyor.'], ['ağız ⚠️', 'ağzım', 'Ağzım kuru.'], ['ateş', 'ateşim', 'Ateşim var.']],
        sum: 'Başım ağrıyor. Karnım ağrıyor. Ateşim var.',
        ex: [['Başım çok ağrıyor.', 'Ik heb erge hoofdpijn.'], ['Karnım ağrıyor.', 'Ik heb buikpijn.'], ['Ateşiniz var mı?', 'Heeft u koorts?'], ['Kendimi iyi hissetmiyorum.', 'Ik voel me niet goed.']] },
      { t: 'Moeten: -meli, lazım en zorunda', es: 'Gereklilik',
        html: `<p>Er zijn drie manieren om «moeten» te zeggen.</p>
<p><b>1. Advies: -meli / -malı</b> achter de stam, plus de persoonsuitgang: <i>Dinlen<b>meli</b>sin.</i> (Je moet uitrusten / je zou moeten uitrusten.) · <i>Çok su iç<b>meli</b>siniz.</i> · <i>Doktora git<b>meli</b>yim.</i> Ontkennend betekent het «moet niet, mag niet»: <i>Sigara iç<b>memeli</b>sin.</i> (Je moet niet roken.)</p>
<p><b>2. Noodzaak: -mem lazım</b>, letterlijk «mijn gaan is nodig». Het werkwoord krijgt <b>-me / -ma</b> + de bezitsuitgang: <i>Git<b>mem</b> lazım.</i> (Ik moet gaan.) · <i>Git<b>men</b> lazım.</i> (Jij moet gaan.) · <i>Git<b>mesi</b> lazım.</i> (Hij moet gaan.) · <i>Git<b>memiz</b> lazım.</i> (Wij moeten gaan.) In plaats van <i>lazım</i> hoor je ook <b>gerek</b>, vooral in <i>-meye gerek yok</i> (het hoeft niet): <i>Gelme<b>ne gerek yok</b>.</i> (Je hoeft niet te komen.)</p>
<p><b>3. Verplichting: -mek zorunda</b> + «zijn»: <i>Çalışmak <b>zorundayım</b>.</i> (Ik moet werken, ik kan er niet onderuit.) · <i>Beklemek <b>zorundasınız</b>.</i></p>
<p>Let op het verschil: <i>Gel<b>memeli</b>sin.</i> = je moet niet komen (kom niet!). <i>Gelmene <b>gerek yok</b>.</i> = je hoeft niet te komen.</p>`,
        table: [['', '-meli (advies)', '-mem lazım (nodig)', 'zorunda (verplicht)'], ['ben', 'gitmeliyim', 'gitmem lazım', 'gitmek zorundayım'], ['sen', 'gitmelisin', 'gitmen lazım', 'gitmek zorundasın'], ['o', 'gitmeli', 'gitmesi lazım', 'gitmek zorunda'],
          ['biz', 'gitmeliyiz', 'gitmemiz lazım', 'gitmek zorundayız'], ['siz', 'gitmelisiniz', 'gitmeniz lazım', 'gitmek zorundasınız']],
        sum: 'Gitmelisin. Gitmem lazım. Gitmek zorundayım.',
        ex: [['Bu ilacı günde üç kez içmelisiniz.', 'U moet dit medicijn drie keer per dag innemen.'], ['Yarın erken kalkmam lazım.', 'Ik moet morgen vroeg opstaan.'], ['Hastaneye gitmek zorundayız.', 'We moeten naar het ziekenhuis.'], ['Korkmana gerek yok.', 'Je hoeft niet bang te zijn.']] },
      { t: 'Mogen: -ebilir miyim?', es: 'İzin isteme',
        html: `<p>Toestemming vraag je met <b>-ebil-</b> uit unit 3: <i>Gir<b>ebilir miyim</b>?</i> (Mag ik binnenkomen?) · <i>Bir şey sor<b>abilir miyim</b>?</i> (Mag ik iets vragen?) · <i>Burada otur<b>abilir miyiz</b>?</i> (Mogen we hier zitten?)</p>
<p><b>Toestemming geven:</b> <i>Tabii, gir<b>ebilirsin</b>.</i> · <i>Buyurun.</i><br><b>Weigeren:</b> <i>Maalesef gir<b>emezsiniz</b>.</i> (Helaas mag u niet naar binnen.) Voor een verbod op een bordje: <b>-mek yasak</b> of kort <b>-ilmez</b>: <i>Sigara içmek <b>yasak</b>.</i> · <i>Sigara içilmez.</i> (Verboden te roken.) · <i>Girilmez.</i> (Verboden toegang.)</p>
<p>Medicijnen «drink» je in het Turks: <i>ilaç <b>içmek</b></i>, ook als het een pil is. Dat geldt ook voor sigaretten: <i>sigara içmek</i>. De oude betekenis van <i>içmek</i> is «naar binnen nemen».</p>`,
        table: [['vraag', 'ja', 'nee'], ['Girebilir miyim?', 'Girebilirsin.', 'Giremezsin.'], ['Fotoğraf çekebilir miyim?', 'Çekebilirsiniz.', 'Çekemezsiniz.'], ['Burada oturabilir miyiz?', 'Tabii, buyurun.', 'Maalesef, dolu.']],
        sum: 'Girebilir miyim? — Tabii, girebilirsin.',
        ex: [['Bir şey sorabilir miyim?', 'Mag ik iets vragen?'], ['Pencereyi açabilir miyim?', 'Mag ik het raam opendoen?'], ['Burada sigara içemezsiniz.', 'U mag hier niet roken.'], ['Park etmek yasak.', 'Verboden te parkeren.']] }
    ],
    dialogue: {
      t: 'Bij de huisarts', place: 'Antalya 🇹🇷',
      lines: [
        ['Doktor', 'Buyurun, oturun. Neyiniz var?', 'Komt u binnen, gaat u zitten. Wat heeft u?'],
        ['Eva', 'İki gündür boğazım ağrıyor ve çok öksürüyorum.', 'Sinds twee dagen heb ik keelpijn en ik hoest veel.'],
        ['Doktor', 'Ateşiniz var mı?', 'Heeft u koorts?'],
        ['Eva', 'Evet, dün akşam otuz sekiz buçuktu. Başım da ağrıyor.', 'Ja, gisteravond was het achtendertig en een half. Ik heb ook hoofdpijn.'],
        ['Doktor', 'Ağzınızı açar mısınız? Evet… Grip olmuşsunuz.', 'Wilt u uw mond opendoen? Ja… U heeft griep.'],
        ['Eva', 'Antibiyotik almam lazım mı?', 'Moet ik antibiotica nemen?'],
        ['Doktor', 'Hayır, gerek yok. Dinlenmelisiniz ve çok su içmelisiniz.', 'Nee, dat hoeft niet. U moet rusten en veel water drinken.'],
        ['Eva', 'Yarın işe gidebilir miyim?', 'Mag ik morgen naar mijn werk?'],
        ['Doktor', 'Hayır, üç gün evde kalmak zorundasınız. Bu ilacı günde iki kez için.', 'Nee, u moet drie dagen thuisblijven. Neem dit medicijn twee keer per dag.'],
        ['Eva', 'Tamam, teşekkür ederim.', 'Oké, dank u wel.'],
        ['Doktor', 'Rica ederim. Geçmiş olsun!', 'Graag gedaan. Beterschap!']
      ],
      q: [
        { t: 'mc', q: 'Eva’nın neresi ağrıyor?', o: ['Boğazı ve başı', 'Karnı', 'Sırtı'] },
        { t: 'mc', q: 'Eva ne yapmalı?', o: ['Dinlenmeli ve su içmeli', 'Antibiyotik almalı', 'İşe gitmeli'] },
        { t: 'mc', q: 'Eva kaç gün evde kalmak zorunda?', o: ['Üç gün', 'İki gün', 'Bir hafta'] }
      ]
    },
    culture: { t: 'Geçmiş olsun, en de apotheek als eerste hulp', html: `<p>Hoor je dat iemand ziek is, een ongeluk had of iets vervelends meemaakte, dan zeg je altijd <b>Geçmiş olsun</b> (moge het voorbij zijn). Het antwoord is <i>Teşekkürler</i> of <i>Sağ ol</i>. Het is één van de zinnen die Turken het meest waarderen uit de mond van een buitenlander.</p>
<p>Met kleine klachten gaan Turken eerst naar de <b>eczane</b> (apotheek, te herkennen aan de rode E). De apotheker geeft advies en veel middelen krijg je zonder recept. ’s Nachts en op zondag is er altijd een <b>nöbetçi eczane</b> (dienstdoende apotheek) open; het adres hangt op de deur van elke gesloten apotheek.</p>
<p>🍋 En oma’s advies bij verkoudheid: <i>ıhlamur</i> (lindebloesemthee) met citroen en honing. Na het niezen zegt men <i>Çok yaşa!</i> (leef lang), met als antwoord <i>Sen de gör</i> (moge jij het ook meemaken).</p>
<p>Het alarmnummer in Turkije is <b>112</b>.</p>` },
    ex: [
      { t: 'cloze', s: 'Baş___ ağrıyor.', h: 'mijn', a: ['ım'], o: ['ım', 'im', 'um'], nl: 'Ik heb hoofdpijn.', tag: 'tr-bezit' },
      { t: 'mc', q: 'Hoe zeg je «mijn buik»?', o: ['karnım', 'karınım', 'karnim'], x: '⚠️ Uitzondering: de tweede klinker van karın is een hulpklinker en valt weg zodra er een klinker-uitgang volgt.', tag: 'tr-bezit' },
      { t: 'mc', q: 'Hoe zeg je «mijn neus»?', o: ['burnum', 'burunum', 'burnım'], x: '⚠️ Uitzondering: burun → burnum. De hulpklinker valt weg, net als bij oğul → oğlum.', tag: 'tr-bezit' },
      { t: 'cloze', s: 'Ateş___ var mı?', h: 'uw', a: ['iniz'], o: ['iniz', 'ınız', 'im'], nl: 'Heeft u koorts?', tag: 'tr-bezit' },
      { t: 'cloze', s: 'Çok su iç___.', h: 'u moet', a: ['melisiniz'], o: ['melisiniz', 'malısınız', 'meliyim'], nl: 'U moet veel water drinken.', tag: 'tr-moeten' },
      { t: 'cloze', s: 'Doktora git___.', h: 'jij moet', a: ['melisin'], o: ['melisin', 'malısın', 'melisiniz'], nl: 'Je moet naar de dokter gaan.', tag: 'tr-moeten' },
      { t: 'cloze', s: 'Yarın erken kalk___ lazım.', h: 'ik', a: ['mam'], o: ['mam', 'mak', 'mem'], nl: 'Ik moet morgen vroeg opstaan.', x: 'Letterlijk: mijn opstaan is nodig. -ma + m.', tag: 'tr-moeten' },
      { t: 'cloze', s: 'Üç gün evde kalmak ___.', h: 'u', a: ['zorundasınız'], o: ['zorundasınız', 'zorundayım', 'lazım'], nl: 'U moet drie dagen thuisblijven.', tag: 'tr-moeten' },
      { t: 'mc', q: 'Wat betekent «Gelmene gerek yok»?', o: ['Je hoeft niet te komen.', 'Je mag niet komen.', 'Je moet komen.'], x: 'Gerek yok = het is niet nodig. «Je moet niet komen» is gelmemelisin.', tag: 'tr-moeten' },
      { t: 'cloze', s: 'Bir şey sor___ miyim?', h: 'mogen', a: ['abilir'], o: ['abilir', 'ebilir', 'ar'], nl: 'Mag ik iets vragen?', tag: 'tr-mogen' },
      { t: 'mc', q: 'Hoe zeg je «U mag hier niet roken»?', o: ['Burada sigara içemezsiniz.', 'Burada sigara içmelisiniz.', 'Burada sigara içebilirsiniz.'], tag: 'tr-mogen' },
      { t: 'mc', q: 'Je collega is ziek. Wat zeg je?', o: ['Geçmiş olsun!', 'Afiyet olsun!', 'Güle güle!'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik heb keelpijn.', a: ['Boğazım ağrıyor.'], tag: 'tr-bezit' },
      { t: 'tr', nl: 'Je moet uitrusten.', a: ['Dinlenmelisin.', 'Dinlenmen lazım.', 'Dinlenmen gerek.'], tag: 'tr-moeten' },
      { t: 'tr', nl: 'Mag ik binnenkomen?', a: ['Girebilir miyim?', 'İçeri girebilir miyim?'], tag: 'tr-mogen' },
      { t: 'order', s: 'Bu ilacı günde üç kez içmelisiniz.', nl: 'U moet dit medicijn drie keer per dag innemen.', tag: 'tr-moeten' },
      { t: 'match', p: [['baş', 'hoofd'], ['boğaz', 'keel'], ['karın', 'buik'], ['sırt', 'rug'], ['diş', 'tand'], ['kulak', 'oor']], tag: 'vocab' }
    ],
    reading: {
      t: 'Sağlıklı yaşam için beş kural', type: 'Poster in de wachtkamer',
      p: [
        ['Sağlıklı olmak istiyor musunuz? O zaman her gün en az otuz dakika yürümelisiniz.', 'Wilt u gezond zijn? Dan moet u elke dag minstens dertig minuten wandelen.'],
        ['Günde iki litre su içmelisiniz. Çok çay ve kahve içmemelisiniz.', 'U moet twee liter water per dag drinken. U moet niet te veel thee en koffie drinken.'],
        ['Sebze ve meyve yemek çok önemli. Her gün tatlı yemenize gerek yok!', 'Groente en fruit eten is heel belangrijk. U hoeft niet elke dag iets zoets te eten!'],
        ['Geceleri en az yedi saat uyumanız lazım. Ve unutmayın: hastanede ve otobüste sigara içmek yasak.', '’s Nachts moet u minstens zeven uur slapen. En vergeet niet: in het ziekenhuis en in de bus is roken verboden.']
      ],
      gl: [['sağlıklı', 'gezond'], ['en az', 'minstens'], ['kural', 'regel'], ['unutmak', 'vergeten']],
      q: [
        { t: 'mc', q: 'Her gün kaç dakika yürümelisiniz?', o: ['En az otuz dakika', 'En az on dakika', 'İki saat'] },
        { t: 'mc', q: 'Neyi çok içmemelisiniz?', o: ['Çay ve kahve', 'Su', 'Meyve suyu'] },
        { t: 'mc', q: 'Nerede sigara içmek yasak?', o: ['Hastanede ve otobüste', 'Evde', 'Parkta'] }
      ]
    },
    say: [['Başım ağrıyor.', 'Ik heb hoofdpijn.'], ['Kendimi iyi hissetmiyorum.', 'Ik voel me niet goed.'], ['Doktora gitmem lazım.', 'Ik moet naar de dokter.'], ['Bir şey sorabilir miyim?', 'Mag ik iets vragen?'], ['Geçmiş olsun!', 'Beterschap!']],
    task: { nl: 'Een Turkse vriend is verkouden en moe. Schrijf hem 5 zinnen: wens beterschap, geef drie adviezen met -meli (waarvan één ontkennend) en zeg één ding dat niet hoeft met gerek yok.', model: 'Geçmiş olsun! Bugün evde kalmalısın ve dinlenmelisin. Çok su ve ıhlamur içmelisin. Geç yatmamalısın. İşe gelmene gerek yok, ben patronla konuşurum.' },
    scenario: { nl: 'Je voelt je al een paar dagen niet goed en gaat naar een huisarts in Antalya.', role: 'You are Dr. Yılmaz, a calm family doctor in Antalya. Ask the patient what is wrong (Neyiniz var? Nereniz ağrıyor? Ateşiniz var mı?), ask how long it has lasted, give advice with -meli and zorunda, say what is not necessary with gerek yok, prescribe a medicine (günde iki kez) and answer their questions about what they may do (-ebilir miyim?). Finish with Geçmiş olsun. Use simple A2 Turkish with the polite siz form.', goal: 'Vertel wat er pijn doet, vraag wat je moet doen en of je mag werken.' }
  });
})(window.SPT);
