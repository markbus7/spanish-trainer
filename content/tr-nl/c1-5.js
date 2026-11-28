/* Turks voor Nederlandstaligen — niveau C1, units 9–10 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── C1 · 9 ───────────────────────── */
  U({
    id: 'tr-c1-09', level: 'C1', icon: '💭', title: 'Gitseydim ne olurdu?', nl: 'Wat als? Keuzes, spijt en net niet',
    goals: ['Over gemiste kansen en keerpunten in je leven praten', 'Onwerkelijke voorwaarden in alle tijden: -se … -irdi, -seydi … -ecekti', 'Verwijten met -eceğine en -ecek yerde', 'Zeggen dat iets bijna gebeurde: az kalsın, neredeyse, kıl payı'],
    vocab: [
      ['iç hesaplaşma', 'afrekening met jezelf'], ['vicdan', 'geweten'], ['vicdan azabı', 'wroeging'], ['alın yazısı', 'lot (wat op je voorhoofd geschreven staat)'], ['kısmet', 'wat voor je is weggelegd'], ['tesadüf', 'toeval'], ['dönüm noktası', 'keerpunt'],
      ['fırsatı kaçırmak', 'de kans missen'], ['cesaret etmek', 'durven'], ['hayıflanmak', 'iets betreuren'], ['telafi etmek', 'goedmaken'], ['ders çıkarmak', 'lering trekken'], ['geri dönüş', 'weg terug'], ['olasılık', 'waarschijnlijkheid'],
      ['ihtimal', 'kans / mogelijkheid'], ['farz etmek', 'veronderstellen'], ['diyelim ki', 'stel dat'], ['iyi ki', 'gelukkig maar dat'], ['Allah’tan', 'gelukkig (spreektaal)'], ['ucuz atlatmak', 'er goed van afkomen'], ['kıl payı', 'op een haar na'],
      ['az daha', 'bijna'], ['boşuna', 'tevergeefs'], ['yanılmak', 'zich vergissen'], ['öngörü', 'vooruitziende blik'], ['el âlem', 'de mensen / wat anderen ervan zeggen'], ['memleket hasreti', 'heimwee naar je streek'], ['burs', 'studiebeurs']
    ],
    grammar: [
      { t: 'Onwerkelijke voorwaarden door de tijd: -se … -irdi, -seydi … -ecekti', es: '-se … -irdi, -seydi … -irdi / -ecekti',
        html: `<p>In B1 leerde je <i>Zamanım olsa gelirdim</i>. Op C1 komt het aan op het <b>precieze tijdsverband</b> tussen de voorwaarde en het gevolg.</p>
<p><b>1. Nu niet waar</b>: <b>-se</b> … <b>-irdi</b>. <i>Zengin ol<b>sam</b> dünyayı gez<b>erdim</b>.</i> (Als ik rijk was, zou ik de wereld rondreizen.)</p>
<p><b>2. Toen niet gebeurd</b>: <b>-seydi</b> … <b>-irdi</b> of <b>-ecekti</b>. <i>Bil<b>seydim</b> gel<b>irdim</b>.</i> (Als ik het geweten had, was ik gekomen.) Met <b>-ecekti</b> klinkt het gevolg zekerder, alsof het al vaststond: <i>Beş dakika erken çık<b>saydık</b> trene yetiş<b>ecektik</b>.</i> (Als we vijf minuten eerder waren vertrokken, hadden we de trein gehaald.)</p>
<p><b>3. Gemengd</b>: toen iets niet gedaan, nu het gevolg. <i>O bursu kabul et<b>seydim</b> şimdi Almanya’da yaş<b>ıyor olurdum</b>.</i> (Als ik die beurs had aangenomen, zou ik nu in Duitsland wonen.) De vorm <b>-iyor olurdu</b> zegt «zou nu bezig zijn met».</p>
<p><b>4. Achteraf wensen</b>: <b>keşke</b> + <b>-seydi</b> of <b>-miş olsaydı</b>: <i>Keşke daha önce söyle<b>miş olsaydın</b>.</i> (Had je het maar eerder gezegd.)</p>
<p><b>5. Het omgekeerde van spijt</b>: <b>iyi ki</b> + verleden tijd: <i><b>İyi ki</b> gel<b>din</b>!</i> (Gelukkig maar dat je gekomen bent!) · <i><b>İyi ki</b> o gün evde kalmış<b>ım</b>.</i></p>
<p><b>6. Mocht …</b> (onwaarschijnlijk maar mogelijk): <b>-ecek olursa</b>: <i>Bir sorun çık<b>acak olursa</b> beni arayın.</i> (Mocht er een probleem zijn, bel me dan.)</p>
<p>Inleidingen voor een gedachte-experiment: <b>diyelim ki</b> (stel dat), <b>farz edelim</b> (laten we aannemen), <b>tut ki</b> (neem nou aan dat): <i><b>Diyelim ki</b> piyangoyu kazandın. Ne yapardın?</i></p>
<p><b>⚠️ Uitzondering:</b> <i>Gel<b>irdim</b></i> betekent twee heel verschillende dingen: «ik <b>zou</b> komen» (maar ik kom niet) en «ik <b>kwam altijd</b>» (vroeger, echt gebeurd). <b>Waarom?</b> De brede tijd plus verleden tijd beschrijft een handeling die niet aan één echt moment vastzit. Dat kan zijn omdat ze zich vroeger steeds herhaalde, of omdat ze alleen in gedachten bestaat. De rest van de zin kiest: staat er een <b>-se</b> bij, dan is het «zou»; staat er <i>eskiden</i> of <i>her yaz</i> bij, dan is het «placht». Het Engels heeft hetzelfde met <i>would</i>.</p>`,
        table: [['voorwaarde', 'gevolg', 'voorbeeld', 'betekenis'], ['-se', '-irdi', 'olsa gelirdim', 'als … was, zou ik komen'], ['-seydi', '-irdi', 'bilseydim gelirdim', 'als … had, was ik gekomen'], ['-seydi', '-ecekti', 'çıksaydık yetişecektik', '… hadden we het (zeker) gehaald'], ['-seydi', '-iyor olurdu', 'etseydim yaşıyor olurdum', '… zou ik nu wonen'], ['-ecek olursa', 'gebiedende wijs', 'çıkacak olursa arayın', 'mocht …, bel dan']],
        sum: 'Bilseydim gelirdim.',
        ex: [['O gün yağmur yağmasaydı tanışmazdık.', 'Als het die dag niet had geregend, hadden we elkaar niet ontmoet.'], ['Türkçeyi daha erken öğrenseydim şimdi çok daha rahat konuşuyor olurdum.', 'Als ik eerder Turks had geleerd, zou ik nu veel makkelijker spreken.'], ['İyi ki o işi kabul etmemişim.', 'Gelukkig maar dat ik die baan niet heb aangenomen.'], ['Geç kalacak olursam haber veririm.', 'Mocht ik te laat komen, dan laat ik het weten.']] },
      { t: 'In plaats van en bijna: -eceğine, -ecek yerde, az kalsın', es: '-eceğine, -ecek yerde, az kalsın, neredeyse',
        html: `<p><b>In plaats van (met een verwijt)</b><br>• <b>-eceğine</b> en <b>-ecek yerde</b>: iemand doet het verkeerde in plaats van het juiste. <i>Otur<b>acağına</b> bana yardım et!</i> (Help me in plaats van te zitten!) · <i>Özür dile<b>yecek yerde</b> bir de bağırdı.</i> (In plaats van zijn excuses aan te bieden, ging hij ook nog schreeuwen.)<br>• <b>-mek yerine</b> is neutraal, <b>-mektense</b> is een voorkeur (unit 2). Met <b>-eceğine</b> hoor je altijd afkeuring.</p>
<p><b>Terwijl iemand eigenlijk zou …</b><br>• <b>-ecekken</b>: <i>Tam çık<b>acakken</b> telefon çaldı.</i> (Net toen ik op het punt stond weg te gaan, ging de telefoon.) · <i>Yardım ed<b>ecekken</b> her şeyi berbat etti.</i> (Terwijl hij zou helpen, heeft hij alles verpest.)</p>
<p><b>Bijna</b><br>• <b>az kalsın</b> / <b>az daha</b> + <b>-iyordu</b> of <b>-ecekti</b>: <i><b>Az kalsın</b> düş<b>üyordum</b>.</i> (Ik viel bijna.) · <i><b>Az daha</b> unut<b>acaktım</b>.</i> (Ik was het bijna vergeten.)<br>• <b>neredeyse</b>: <i><b>Neredeyse</b> ağlayacaktım.</i> Ook «bijna» bij hoeveelheden: <i>neredeyse herkes</i> (bijna iedereen).<br>• <b>kıl payı</b> (op een haar na): <i>Uçağı <b>kıl payı</b> kaçırdık.</i> (We misten het vliegtuig op een haar na.) · <i>Kazadan <b>kıl payı</b> kurtuldu.</i><br>• <b>-eyaz-</b> uit unit 6 is de literaire manier: <i>düş<b>eyazdım</b></i>.</p>
<p><b>⚠️ Uitzondering:</b> in <i>Az kalsın düş<b>üyordum</b></i> staat <b>-iyordu</b>, de vorm voor «ik was aan het vallen», terwijl je helemaal niet gevallen bent. <b>Waarom?</b> -iyordu beschrijft een handeling die <b>onderweg</b> was, zonder te zeggen of ze is afgemaakt. Je vertelt dus letterlijk: het vallen was al begonnen, maar het kwam niet af. <i>Az kalsın</i> («er had weinig moeten overblijven») maakt duidelijk dát het werd afgebroken. Met <b>-ecekti</b> ligt het accent ergens anders: «het zou gaan gebeuren» en ging niet door. Beide zijn goed; <i>düştüm</i> kan hier nooit.</p>`,
        table: [['vorm', 'betekenis', 'toon'], ['-eceğine', 'in plaats van te', 'verwijt'], ['-ecek yerde', 'in plaats van te', 'verwijt'], ['-mek yerine', 'in plaats van te', 'neutraal'], ['-ecekken', 'net toen … zou', 'onverwachte wending'], ['az kalsın + -iyordu', 'bijna', 'opluchting of schrik'], ['kıl payı', 'op een haar na', 'beeldend']],
        sum: 'Az kalsın düşüyordum.',
        ex: [['Şikâyet edeceğine bir çözüm bul.', 'Zoek een oplossing in plaats van te klagen.'], ['Tam uyuyacakken kapı çaldı.', 'Net toen ik in slaap zou vallen, werd er aangebeld.'], ['Az daha yanlış trene biniyordum.', 'Ik was bijna in de verkeerde trein gestapt.'], ['Sınavı kıl payı geçtim.', 'Ik heb het examen op het nippertje gehaald.']] }
    ],
    dialogue: {
      t: 'Aan de Bosporus', place: 'İstanbul 🇹🇷',
      lines: [
        ['Murat', 'Biliyor musun, yirmi yaşımdayken Almanya’dan burs kazanmıştım. Gitmedim.', 'Weet je, toen ik twintig was had ik een beurs voor Duitsland gewonnen. Ik ben niet gegaan.'],
        ['Ilse', 'Neden? Gitseydin hayatın bambaşka olurdu.', 'Waarom niet? Als je was gegaan, had je leven er totaal anders uitgezien.'],
        ['Murat', 'Babam hastaydı, cesaret edemedim. Gitseydim şimdi belki mühendis olarak Münih’te yaşıyor olurdum.', 'Mijn vader was ziek, ik durfde niet. Als ik was gegaan, zou ik nu misschien als ingenieur in München wonen.'],
        ['Ilse', 'Pişman mısın?', 'Heb je spijt?'],
        ['Murat', 'Eskiden hayıflanırdım. Ama gitseydim eşimle tanışmazdım. İyi ki kalmışım diyorum artık.', 'Vroeger betreurde ik het. Maar als ik was gegaan, had ik mijn vrouw niet ontmoet. Gelukkig maar dat ik gebleven ben, zeg ik nu.'],
        ['Ilse', 'Bende tam tersi oldu. Az kalsın Türkiye’ye gelmekten vazgeçiyordum. Uçağı da kıl payı yakaladım.', 'Bij mij ging het precies andersom. Ik had bijna afgezien van mijn komst naar Turkije. En het vliegtuig haalde ik op een haar na.'],
        ['Murat', 'Kaçırsaydın bu çayı içemezdik! Demek ki kısmetmiş.', 'Als je het gemist had, hadden we deze thee niet kunnen drinken! Het was dus voorbestemd.'],
        ['Ilse', 'Öyle. Geçmişe hayıflanacağımıza bugünün tadını çıkaralım.', 'Zo is het. Laten we van vandaag genieten in plaats van het verleden te betreuren.']
      ],
      q: [
        { t: 'mc', q: 'Murat neden Almanya’ya gitmedi?', o: ['Babası hastaydı', 'Bursu kazanamadı', 'Almanca bilmiyordu'] },
        { t: 'mc', q: 'Murat bugün kararı hakkında ne düşünüyor?', o: ['İyi ki kalmışım diyor', 'Hâlâ çok pişman', 'Yeniden başvuracak'] },
        { t: 'mc', q: 'Ilse’ye az kalsın ne oluyordu?', o: ['Türkiye’ye gelmekten vazgeçiyordu', 'İşini kaybediyordu', 'Almanya’ya taşınıyordu'] }
      ]
    },
    culture: { t: 'Kısmet, nasip en «olacağı varmış»', html: `<p>Waar een Nederlander zegt «had ik maar», zegt een Turk vaak <b>Kısmet değilmiş</b> (het was niet voor mij weggelegd) of <b>Nasip</b>. Dat is geen fatalisme in de zin van niets doen: je doet je best, en wat daarna gebeurt, laat je los. Het spreekwoord zegt het zo: <i>Önce eşeğini sağlam kazığa bağla, sonra Allah’a emanet et</i> (bind eerst je ezel aan een stevige paal, vertrouw hem dán aan God toe).</p>
<p>Na een ongeluk dat goed afloopt hoor je <b>Geçmiş olsun</b> en <b>Ucuz atlattın</b> (je bent er goedkoop van afgekomen). Na iets wat mislukt: <b>Hayırlısı olsun</b> (moge het goede eruit voortkomen) en <b>Vardır bir hayır</b> (er zal wel iets goeds in zitten).</p>
<p>🧿 Het woord <b>gurbet</b>, ver van huis zijn, heeft een eigen muziek en poëzie. Miljoenen gezinnen kennen de vraag «wat als hij niet was gegaan?»</p>` },
    ex: [
      { t: 'cloze', s: 'Bil___ gelirdim.', h: 'als ik had geweten', a: ['seydim'], o: ['seydim', 'irsem', 'diğim'], nl: 'Als ik het geweten had, was ik gekomen.', tag: 'tr-spijt' },
      { t: 'cloze', s: 'Beş dakika erken çıksaydık trene yetiş___.', h: 'hadden we (zeker)', a: ['ecektik', 'irdik'], o: ['ecektik', 'iyoruz', 'tik'], nl: 'Als we vijf minuten eerder waren vertrokken, hadden we de trein gehaald.', tag: 'tr-spijt' },
      { t: 'cloze', s: 'O bursu kabul etseydim şimdi Almanya’da yaşıyor ___.', h: 'zou ik nu', a: ['olurdum'], o: ['olurdum', 'oldum', 'olacağım'], nl: 'Als ik die beurs had aangenomen, zou ik nu in Duitsland wonen.', tag: 'tr-spijt' },
      { t: 'cloze', s: '___ ki geldin!', h: 'gelukkig maar', a: ['İyi'], o: ['İyi', 'Keşke', 'Diyelim'], nl: 'Gelukkig maar dat je gekomen bent!', tag: 'tr-spijt' },
      { t: 'mc', q: '«Her yaz köye giderdim» en «Vaktim olsa giderdim». Waarom betekent -irdi de ene keer «placht» en de andere keer «zou»?', o: ['De vorm zegt alleen: niet op één echt moment. De rest van de zin kiest.', 'Het zijn twee verschillende achtervoegsels die hetzelfde klinken.', 'In de tweede zin is het eigenlijk fout.'], x: '⚠️ Uitzondering: brede tijd + verleden is een handeling die zich herhaalde óf alleen in gedachten bestaat. Met -se erbij: zou. Met eskiden of her yaz: placht.', tag: 'tr-spijt' },
      { t: 'cloze', s: 'Bir sorun çıkacak ___ beni arayın.', h: 'mocht', a: ['olursa'], o: ['olursa', 'olsaydı', 'oldu'], nl: 'Mocht er een probleem zijn, bel me dan.', tag: 'tr-spijt' },
      { t: 'cloze', s: 'Otur___ bana yardım et!', h: 'in plaats van te', a: ['acağına'], o: ['acağına', 'ursan', 'arken'], nl: 'Help me in plaats van te zitten!', tag: 'tr-yerine' },
      { t: 'cloze', s: 'Özür dileyecek ___ bir de bağırdı.', h: 'in plaats van', a: ['yerde'], o: ['yerde', 'kadar', 'için'], nl: 'In plaats van zijn excuses aan te bieden, ging hij ook nog schreeuwen.', tag: 'tr-yerine' },
      { t: 'mc', q: 'Welke vorm klinkt als een verwijt?', o: ['Şikâyet edeceğine çözüm bul.', 'Şikâyet etmek yerine çözüm buldu.', 'Şikâyet etmektense çözüm bulmayı tercih ederim.'], x: '-eceğine draagt altijd afkeuring. -mek yerine is neutraal, -mektense een voorkeur.', tag: 'tr-yerine' },
      { t: 'cloze', s: 'Az kalsın düş___.', h: 'bijna viel ik', a: ['üyordum', 'ecektim'], o: ['üyordum', 'tüm', 'erim'], nl: 'Ik viel bijna.', x: '⚠️ Uitzondering: -iyordu zegt dat het vallen onderweg was, niet dat het is afgemaakt. Düştüm kan hier nooit.', tag: 'tr-bijna' },
      { t: 'cloze', s: 'Uçağı kıl ___ kaçırdık.', h: 'op een haar na', a: ['payı'], o: ['payı', 'kadar', 'gibi'], nl: 'We misten het vliegtuig op een haar na.', tag: 'tr-bijna' },
      { t: 'mc', q: 'Wat betekent «Tam çıkacakken telefon çaldı»?', o: ['Net toen ik weg zou gaan, ging de telefoon.', 'Nadat ik was weggegaan, ging de telefoon.', 'Ik ging weg omdat de telefoon ging.'], tag: 'tr-yerine' },
      { t: 'mc', q: 'Wat betekent «ucuz atlatmak»?', o: ['er goed van afkomen', 'goedkoop inkopen', 'een kans missen'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik was het bijna vergeten.', a: ['Az daha unutacaktım.', 'Az kalsın unutuyordum.', 'Az kalsın unutacaktım.', 'Neredeyse unutuyordum.', 'Neredeyse unutacaktım.', 'Az daha unutuyordum.'], tag: 'tr-bijna' },
      { t: 'tr', nl: 'Gelukkig maar dat je gekomen bent!', a: ['İyi ki geldin!', 'İyi ki geldin.', 'İyi ki gelmişsin!', 'İyi ki gelmişsin.'], tag: 'tr-spijt' },
      { t: 'order', s: 'O gün yağmur yağmasaydı tanışmazdık.', nl: 'Als het die dag niet had geregend, hadden we elkaar niet ontmoet.', tag: 'tr-spijt' },
      { t: 'match', p: [['pişmanlık', 'spijt'], ['kader', 'lot'], ['tesadüf', 'toeval'], ['vicdan', 'geweten'], ['dönüm noktası', 'keerpunt'], ['burs', 'studiebeurs']], tag: 'vocab' }
    ],
    reading: {
      t: 'Gitmeyenin mektubu', type: 'Brief',
      p: [
        ['Sevgili kardeşim, sen Hollanda’ya gideli otuz yıl oldu. Geçen gün eski fotoğraflara bakarken düşündüm: Ben de seninle gelseydim hayatım nasıl olurdu?', 'Lieve broer, het is dertig jaar geleden dat jij naar Nederland ging. Laatst, toen ik oude foto’s bekeek, dacht ik: hoe zou mijn leven zijn geweest als ik met je was meegegaan?'],
        ['Babam «İkiniz de giderseniz bu toprak kime kalacak?» demişti. Kalacağıma gitseydim belki şimdi çocuklarım iki dil konuşuyor olurdu. Ama o zaman annemin son yıllarında yanında olamazdım.', 'Vader had gezegd: «Als jullie allebei gaan, voor wie blijft deze grond dan?» Als ik was gegaan in plaats van te blijven, zouden mijn kinderen nu misschien twee talen spreken. Maar dan had ik er in moeders laatste jaren niet voor haar kunnen zijn.'],
        ['Az kalsın ben de bavulumu topluyordum, biliyor musun? Otobüs biletini bile almıştım. Son gece vazgeçtim. Yıllarca hayıflandım; şimdi «iyi ki kalmışım» diyorum.', 'Ik had bijna zelf ook mijn koffer gepakt, wist je dat? Ik had zelfs het buskaartje al gekocht. De laatste nacht zag ik ervan af. Jarenlang heb ik het betreurd; nu zeg ik «gelukkig maar dat ik gebleven ben».'],
        ['Sen gurbette kendi yolunu çizdin, ben sılada. İkimiz de bir şey kazandık, bir şey kaybettik. Bu yaz gelecek olursan bağ evinde uzun uzun konuşuruz.', 'Jij hebt in den vreemde je eigen weg uitgestippeld, ik thuis. We hebben allebei iets gewonnen en iets verloren. Mocht je deze zomer komen, dan praten we er in het huisje bij de wijngaard uitgebreid over.']
      ],
      gl: [['toprak', 'grond / land'], ['bavul', 'koffer'], ['yolunu çizmek', 'zijn weg uitstippelen'], ['bağ evi', 'huisje bij de wijngaard'], ['uzun uzun', 'uitgebreid']],
      q: [
        { t: 'mc', q: 'Mektubu yazan kişi neden gitmedi?', o: ['Babası toprağın sahipsiz kalmasını istemedi', 'Bilet bulamadı', 'Hollanda’yı sevmiyordu'] },
        { t: 'mc', q: 'Az kalsın ne oluyordu?', o: ['Yazar da gidiyordu', 'Kardeşi geri dönüyordu', 'Toprak satılıyordu'] },
        { t: 'mc', q: 'Yazar bugün kararı hakkında ne diyor?', o: ['İyi ki kalmışım', 'Keşke gitseydim', 'Hâlâ karar veremedim'] }
      ]
    },
    say: [['Bilseydim gelirdim.', 'Als ik het geweten had, was ik gekomen.'], ['İyi ki geldin!', 'Gelukkig maar dat je gekomen bent!'], ['Az kalsın unutuyordum.', 'Ik was het bijna vergeten.'], ['Şikâyet edeceğine bir çözüm bul.', 'Zoek een oplossing in plaats van te klagen.']],
    task: { nl: 'Schrijf vijf of zes zinnen over een keerpunt in je leven: een keuze die je maakte of juist niet maakte. Wat zou er anders zijn als het anders was gelopen? Gebruik één keer -seydi … -irdi, één gemengde zin (-seydi … -iyor olurdu), één keer iyi ki of keşke, en één keer az kalsın of kıl payı.', model: 'On sekiz yaşımdayken konservatuvara girmek istiyordum ama ailem karşı çıktı. Sınava girseydim belki kazanırdım. Müzik okusaydım şimdi bir orkestrada çalıyor olurdum. Az kalsın gizlice başvuruyordum; formu bile doldurmuştum. Yine de pişman değilim: iyi ki öğretmen olmuşum, çünkü bu işi çok seviyorum. Müziği de bırakmadım; her cumartesi bir koroda şarkı söylüyorum.' },
    scenario: { nl: 'Je drinkt thee aan de Bosporus met je vriend Murat. Hij vertelt over een beurs die hij ooit afsloeg, en jullie praten over keuzes en «wat als».', role: 'You are Murat, a thoughtful man in his fifties in İstanbul. Tell the learner about the scholarship to Germany you turned down at twenty because your father was ill, and what your life might be now (gitseydim … yaşıyor olurdum). Ask the learner about turning points in their own life, near misses (az kalsın, kıl payı) and whether they regret anything. React with iyi ki, keşke, kısmetmiş, hayırlısı. Reflective, warm C1 Turkish.', goal: 'Vertel over een keerpunt in je eigen leven, zeg wat er anders had kunnen zijn en of je spijt hebt.' }
  });

  /* ───────────────────────── C1 · 10 ───────────────────────── */
  U({
    id: 'tr-c1-10', level: 'C1', icon: '🎭', title: 'Hani beşte gelecektin?', nl: 'Tussen de regels: partikels, verwijt en ironie',
    goals: ['Horen wat iemand bedoelt maar niet zegt', 'De partikels ya, ki, hani, bari, sakın, madem en -sene gebruiken', 'Ironie en twijfel herkennen: güya, sözde, meğer en het spottende -miş', 'Vriendelijk plagen zonder te kwetsen'],
    vocab: [
      ['ima', 'toespeling'], ['ima etmek', 'insinueren'], ['kinaye', 'ironie (stijlfiguur)'], ['alay etmek', 'de spot drijven met'], ['iğnelemek', 'steken onder water geven'], ['şakalaşmak', 'met elkaar dollen'], ['laf sokmak', 'een sneer geven'],
      ['nükte', 'geestige opmerking'], ['ciddiye almak', 'serieus nemen'], ['alınmak', 'zich gekwetst voelen'], ['surat asmak', 'een lang gezicht trekken'], ['içerlemek', 'zich inwendig ergeren'], ['imalı', 'veelbetekenend'], ['içten', 'oprecht'],
      ['yapmacık', 'gemaakt / onecht'], ['sözümona', 'zogenaamd (spottend)'], ['lafın gelişi', 'bij wijze van spreken'], ['meğerse', 'het bleek dat (nadrukkelijk)'], ['bari', 'dan tenminste'], ['sakın', 'waag het niet / pas op'], ['sahi', 'echt? / trouwens'],
      ['madem', 'nu … toch / aangezien'], ['hiç olmazsa', 'op zijn minst'], ['ses tonu', 'toon van de stem'], ['çok bilmiş', 'wijsneus'], ['görmüş geçirmiş', 'levenswijs'], ['sitem', 'zacht verwijt'], ['sitem etmek', 'iemand iets verwijten (zacht)']
    ],
    grammar: [
      { t: 'Kleine woorden, grote lading: ya, ki, hani, bari, sakın, madem, -sene', es: 'Ya, ki, hani, bari, sakın, madem, -sene',
        html: `<p>In B2 leerde je de stopwoordjes van de spreektaal. Deze partikels doen meer: ze dragen een <b>verwijt, een wens of een waarschuwing</b>.</p>
<p>• <b>ya</b> aan het eind = dat weet je toch, dat zei ik toch: <i>Söyledim <b>ya</b>!</i> (Dat heb ik toch gezegd!) · <i>Bugün pazar <b>ya</b>, kapalıdır.</i> Vooraan = en als …?: <i><b>Ya</b> gelmezse?</i> (En als hij niet komt?)<br>• <b>ki</b> aan het eind = verzuchting of twijfel: <i>Bilmem <b>ki</b>.</i> (Ik zou het echt niet weten.) · <i>Gelir mi <b>ki</b>?</i> (Zou hij wel komen?) · <i>O kadar güzel <b>ki</b>!</i> (Zó mooi!)<br>• <b>hani</b> + iets wat was beloofd = waar blijft dat nou?: <i><b>Hani</b> beşte gelecektin?</i> (Je zou toch om vijf uur komen?) · <i><b>Hani</b> benim çayım?</i> (En waar is míjn thee?)<br>• <b>bari</b> = dan tenminste (tweede keus): <i>Gelmiyorsun, <b>bari</b> bir ara.</i> (Je komt niet, bel dan tenminste even.)<br>• <b>sakın</b> + ontkennend bevel = waag het niet: <i><b>Sakın</b> unutma!</i> · <i><b>Sakın</b> ona söyleme!</i> Met een 3e persoon is het een angstige gok: <i><b>Sakın</b> hasta olmasın?</i> (Hij zal toch niet ziek zijn?)<br>• <b>madem (ki)</b> = nu … toch, aangezien: <i><b>Madem</b> geldin, otur bir çay iç.</i> (Nu je er toch bent, ga zitten en drink een thee.)<br>• <b>sahi</b> = echt? of: trouwens, nu ik eraan denk: <i><b>Sahi</b>, annen nasıl oldu?</i></p>
<p>Het versterkende <b>de / da</b> tussen twee gelijke woorden: <i>Güzel <b>de</b> güzel!</i> (Mooi is nog zacht uitgedrukt!) En na een werkwoord, schamper: <i>Geldi <b>de</b> ne oldu?</i> (Hij is gekomen, en wat schoten we ermee op?)</p>
<p><b>⚠️ Uitzondering:</b> <i>Otur<b>sana</b>!</i> en <i>Gel<b>sene</b>!</i> zien eruit als de als-vorm (<i>otursan</i> = als je zat), maar het zijn <b>bevelen</b>: «ga toch zitten!», «kom nou!» Je kunt er niet «als» mee zeggen. <b>Waarom?</b> De vorm is ontstaan uit een wens: <i>otursan</i> («als je eens ging zitten …») plus de aanroep <b>-e/-a</b>. Een wens die je iemand recht in het gezicht zegt, klinkt als een aansporing. Het Nederlands kent het ook: «Als je nou eens ging zitten!» De toon beslist: zacht is het hartelijk aandringen, scherp is het ongeduld. Voor <i>siz</i>: <i>otur<b>sanıza</b></i>.</p>`,
        table: [['partikel', 'plek', 'lading', 'voorbeeld'], ['ya', 'einde', 'dat weet je toch', 'Söyledim ya!'], ['ki', 'einde', 'twijfel, verzuchting', 'Bilmem ki.'], ['hani', 'begin', 'waar blijft …?', 'Hani gelecektin?'], ['bari', 'vóór het bevel', 'dan tenminste', 'Bari ara.'], ['sakın', 'begin', 'waag het niet', 'Sakın unutma!'], ['madem', 'begin', 'nu … toch', 'Madem geldin …'], ['-sene', 'aan de stam', 'toe nou', 'Gelsene!']],
        sum: 'Hani beşte gelecektin?',
        ex: [['Hani bana yardım edecektin?', 'Je zou me toch helpen?'], ['Madem istemiyorsun, zorlamayayım.', 'Nu je het toch niet wilt, zal ik niet aandringen.'], ['Bari bir mesaj atsaydın.', 'Had dan tenminste een berichtje gestuurd.'], ['Baksana, sana bir şey soracağım.', 'Moet je horen, ik wil je iets vragen.']] },
      { t: 'Ironie en twijfel: güya, sözde, meğer en het spottende -miş', es: 'Güya, sözde, meğer, alaycı -miş',
        html: `<p>Je kent <b>-miş</b> als «van horen zeggen». Wie iets alleen van horen zeggen heeft, staat er niet voor in. Die afstand kun je ook <b>opzettelijk</b> nemen, om te laten horen dat je er niets van gelooft.</p>
<p>• <b>Het spottende -miş</b>: herhaal wat de ander beweert, met -miş en een veelzeggende toon. <i>Çok meşgul<b>müş</b>!</i> (Hij is «heel druk», ja ja.) · <i>Parası yok<b>muş</b>!</i> · <i>Beni çok özlemiş<b>miş</b>.</i> (Hij zou me zó gemist hebben … met dubbel -miş voor dubbele twijfel.)<br>• <b>güya</b> en <b>sözde</b> = zogenaamd: <i><b>Güya</b> diyet yapıyor.</i> (Hij is zogenaamd op dieet.) · <i><b>Sözde</b> arkadaşım!</i> (En dat noemt zich mijn vriend!) <i>Sözümona</i> is nog spottender.<br>• <b>meğer</b> + <b>-miş</b> = het bleek (tegen de verwachting in): <i>Onu kibirli sanırdım; <b>meğer</b> utangaç<b>mış</b>.</i> (Ik dacht dat hij arrogant was; hij bleek verlegen te zijn.)<br>• <b>-miş gibi yapmak</b> = doen alsof: <i>Duyma<b>mış gibi yaptı</b>.</i></p>
<p>Ironie zit ook in <b>overdreven lof</b>: <i><b>Aferin</b> sana!</i> · <i><b>Bravo</b>, çok iyi yaptın!</i> · <i><b>Ne</b> güzel, <b>ne</b> güzel!</i> En in zinnen die beleefd klinken maar een deur dichtgooien: <i><b>Sen bilirsin.</b></i> (Letterlijk: jij weet het. Bedoeld: doe maar wat je wilt, maar ik ben het er niet mee eens.) · <i><b>Olur olur.</b></i> · <i><b>Tabii canım.</b></i> · <i><b>Hiç zahmet etme.</b></i> (Doe vooral geen moeite.)</p>
<p>Plagen onder vrienden heet <b>takılmak</b> en hoort bij warmte: <i>Sana takılıyorum, alınma!</i> (Ik plaag je maar, voel je niet gekwetst!) Een zacht, liefdevol verwijt heet <b>sitem</b>: <i>Hiç aramıyorsun …</i></p>
<p><b>⚠️ Uitzondering:</b> in <b>çok bilmiş</b> (wijsneus), <b>görmüş geçirmiş</b> (levenswijs), <b>okumuş</b> (gestudeerd) en <b>geçmiş</b> (verleden) is <b>-miş</b> geen tijd, geen twijfel en geen spot. <i>Okumuş bir adam</i> is gewoon iemand die gestudeerd heeft. <b>Waarom?</b> -miş is van oorsprong een <b>deelwoord</b>: «die … gedaan heeft». Vóór een zelfstandig naamwoord of als vast woord beschrijft het een eigenschap die het resultaat is van iets wat gebeurd is (zoals in <i>pişmiş yemek</i>, gekookt eten). Het «van horen zeggen» ontstaat pas wanneer -miş het gezegde van de zin is: dan zie je alleen het resultaat en heb je de handeling zelf niet meegemaakt.</p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['-miş (spottend)', 'ja ja, zal wel', 'Çok meşgulmüş!'], ['güya · sözde', 'zogenaamd', 'Güya diyet yapıyor.'], ['meğer + -miş', 'het bleek', 'Meğer utangaçmış.'], ['-miş gibi yapmak', 'doen alsof', 'Duymamış gibi yaptı.'], ['Sen bilirsin.', 'doe maar, ik vind het niks', '(toon!)'], ['çok bilmiş', 'wijsneus', '(geen spot-miş)']],
        sum: 'Güya diyet yapıyor.',
        ex: [['Vakti yokmuş! Ama maç izlemeye vakti var.', 'Hij heeft «geen tijd»! Maar wel tijd om voetbal te kijken.'], ['Onu soğuk biri sanırdım; meğer çok içtenmiş.', 'Ik dacht dat ze een kil mens was; ze bleek heel oprecht te zijn.'], ['Beni görmemiş gibi yaptı.', 'Hij deed alsof hij me niet zag.'], ['Sana takılıyorum, alınma!', 'Ik plaag je maar, voel je niet gekwetst!']] }
    ],
    dialogue: {
      t: 'Te laat op de afspraak', place: 'Ankara 🇹🇷',
      lines: [
        ['Ceren', 'Ooo, kimleri görüyorum! Hani beşte gelecektin?', 'Zo zo, wie we daar hebben! Je zou toch om vijf uur komen?'],
        ['Ilse', 'Biliyorum, çok özür dilerim. Otobüs gelmedi, taksi de bulamadım.', 'Ik weet het, het spijt me heel erg. De bus kwam niet en ik kon ook geen taxi vinden.'],
        ['Ceren', 'Otobüs gelmemiş! Taksi de bulamamış! Bari bir mesaj atsaydın.', 'De bus «kwam niet»! En een taxi «kon ze niet vinden»! Had dan tenminste een berichtje gestuurd.'],
        ['Ilse', 'Attım ya! Telefonuna bak. Sen görmemişsin demek ki.', 'Dat heb ik toch gedaan! Kijk op je telefoon. Jij hebt het dus niet gezien.'],
        ['Ceren', 'Sahi mi? … Aa, gelmiş. Meğer telefonum sessizdeymiş. Tamam, bu sefer affettim.', 'Echt? … O, het is binnengekomen. Mijn telefoon bleek op stil te staan. Goed, deze keer vergeef ik het je.'],
        ['Ilse', 'Çok naziksin! Güya ben geç kalmışım, mesajı görmeyen sen.', 'Wat ben je toch aardig! Ik ben zogenaamd de laatkomer, en jij bent degene die het bericht niet zag.'],
        ['Ceren', 'Tamam tamam, takılıyorum sana, alınma. Madem geldin, otursana. Ne içersin?', 'Oké oké, ik plaag je maar, niet boos zijn. Nu je er toch bent: ga toch zitten. Wat wil je drinken?'],
        ['Ilse', 'Bir Türk kahvesi. Ama sakın şeker koydurma, sade içiyorum.', 'Een Turkse koffie. Maar laat er vooral geen suiker in doen, ik drink hem zonder.']
      ],
      q: [
        { t: 'mc', q: 'Ilse neden geç kaldı?', o: ['Otobüs gelmedi, taksi bulamadı', 'Saati yanlış anladı', 'İşten çıkamadı'] },
        { t: 'mc', q: 'Ceren mesajı neden görmedi?', o: ['Telefonu sessizdeydi', 'Ilse mesaj atmadı', 'Telefonu evde kalmıştı'] },
        { t: 'mc', q: 'Ceren «Otobüs gelmemiş!» derken ne demek istiyor?', o: ['Buna pek inanmadığını', 'Otobüsün geldiğini gördüğünü', 'Ilse için üzüldüğünü'] }
      ]
    },
    culture: { t: '«Sen bilirsin»: wat er niet gezegd wordt', html: `<p>Turks is een taal van <b>indirect zeggen</b>. Een directe weigering of klacht geldt snel als hard, dus luisteraars zijn getraind om de boodschap achter de woorden te horen. <b>Sen bilirsin</b> na een voorstel betekent zelden «prima». <b>İnşallah</b> op een uitnodiging kan «ik kom» zijn of «reken er maar niet op». En wie drie keer <b>Yok, zahmet etme</b> zegt, wil soms juist dat je aandringt.</p>
<p>Dat aandringen heeft een naam: <b>ısrar</b>. De gastvrouw biedt drie keer aan, de gast weigert twee keer en zegt de derde keer ja. Wie na de eerste «nee, dank je» ophoudt, lijkt het niet te menen.</p>
<p>👀 Let ook op het lichaam: het hoofd kort achterover met een klikje van de tong betekent <b>nee</b>. Een hand op het hart betekent <b>dank je, maar nee</b>. En opgetrokken wenkbrauwen zijn een stil «nee» dat je als buitenlander makkelijk mist.</p>` },
    ex: [
      { t: 'cloze', s: '___ beşte gelecektin?', h: 'je zou toch …?', a: ['Hani'], o: ['Hani', 'Bari', 'Madem'], nl: 'Je zou toch om vijf uur komen?', tag: 'tr-partikel' },
      { t: 'cloze', s: 'Gelmiyorsun, ___ bir ara.', h: 'dan tenminste', a: ['bari'], o: ['bari', 'hani', 'sakın'], nl: 'Je komt niet, bel dan tenminste even.', tag: 'tr-partikel' },
      { t: 'cloze', s: '___ ona söyleme!', h: 'waag het niet', a: ['Sakın'], o: ['Sakın', 'Madem', 'Sahi'], nl: 'Zeg het hem vooral niet!', tag: 'tr-partikel' },
      { t: 'cloze', s: '___ geldin, otur bir çay iç.', h: 'nu … toch', a: ['Madem'], o: ['Madem', 'Bari', 'Güya'], nl: 'Nu je er toch bent, ga zitten en drink een thee.', tag: 'tr-partikel' },
      { t: 'cloze', s: 'Söyledim ___!', h: 'dat zei ik toch', a: ['ya'], o: ['ya', 'ki', 'mi'], nl: 'Dat heb ik toch gezegd!', tag: 'tr-partikel' },
      { t: 'mc', q: 'Wat betekent «Otursana!»?', o: ['Ga toch zitten!', 'Als je gaat zitten …', 'Zit niet!'], x: '⚠️ Uitzondering: -sene / -sana lijkt op de als-vorm, maar is een bevel. Het is ontstaan uit een wens («als je eens ging zitten») plus een aanroep.', tag: 'tr-partikel' },
      { t: 'mc', q: 'Wat drukt «ki» uit in «Gelir mi ki?»', o: ['twijfel', 'een verwijt', 'een bevel'], tag: 'tr-partikel' },
      { t: 'cloze', s: '___ diyet yapıyor.', h: 'zogenaamd', a: ['Güya', 'Sözde'], o: ['Güya', 'Meğer', 'Bari'], nl: 'Hij is zogenaamd op dieet.', tag: 'tr-ironi' },
      { t: 'cloze', s: 'Onu kibirli sanırdım; ___ utangaçmış.', h: 'het bleek', a: ['meğer'], o: ['meğer', 'güya', 'hani'], nl: 'Ik dacht dat hij arrogant was; hij bleek verlegen te zijn.', tag: 'tr-ironi' },
      { t: 'mc', q: 'Je vriendin zegt met een scheve glimlach: «Çok meşgulmüş!» Wat bedoelt ze?', o: ['Ze gelooft niet dat hij het echt druk heeft.', 'Ze heeft gehoord dat hij het druk heeft en vindt dat erg.', 'Hij had het vroeger druk.'], x: 'Het spottende -miş: je herhaalt wat de ander beweert en neemt er afstand van.', tag: 'tr-ironi' },
      { t: 'mc', q: 'Je doet een voorstel en krijgt als antwoord: «Sen bilirsin.» Wat is waarschijnlijk bedoeld?', o: ['Doe maar, maar ik ben het er niet mee eens.', 'Wat een goed idee!', 'Jij weet er veel van.'], tag: 'tr-ironi' },
      { t: 'mc', q: 'Is -miş in «okumuş bir adam» spottend of van horen zeggen?', o: ['Geen van beide: het is een deelwoord, «iemand die gestudeerd heeft».', 'Spottend: hij heeft zogenaamd gestudeerd.', 'Van horen zeggen: hij schijnt gestudeerd te hebben.'], x: '⚠️ Uitzondering: vóór een zelfstandig naamwoord is -miş een deelwoord dat een eigenschap beschrijft. De twijfel ontstaat pas als -miş het gezegde van de zin is.', tag: 'tr-ironi' },
      { t: 'tr', nl: 'Hij deed alsof hij me niet zag.', a: ['Beni görmemiş gibi yaptı.', 'Beni görmemiş gibi davrandı.', 'Beni görmüyormuş gibi yaptı.'], tag: 'tr-ironi' },
      { t: 'tr', nl: 'Ik plaag je maar, voel je niet gekwetst!', a: ['Sana takılıyorum, alınma!', 'Sana takılıyorum, alınma.', 'Takılıyorum sana, alınma!', 'Takılıyorum sana, alınma.'], tag: 'tr-ironi' },
      { t: 'order', s: 'Madem istemiyorsun, zorlamayayım.', nl: 'Nu je het toch niet wilt, zal ik niet aandringen.', tag: 'tr-partikel' },
      { t: 'match', p: [['güya', 'zogenaamd'], ['meğer', 'het bleek dat'], ['bari', 'dan tenminste'], ['sakın', 'waag het niet'], ['içten', 'oprecht'], ['sitem', 'zacht verwijt']], tag: 'vocab' }
    ],
    reading: {
      t: '«Sen bilirsin» ne demek?', type: 'Column',
      p: [
        ['Türkiye’ye ilk geldiğimde herkesin çok açık konuştuğunu sanıyordum. Meğer en önemli şeyler hiç söylenmiyormuş.', 'Toen ik net in Turkije was, dacht ik dat iedereen heel open sprak. Het bleek dat de belangrijkste dingen juist helemaal niet gezegd worden.'],
        ['Bir gün ev arkadaşıma «Bu akşam misafir çağırsam olur mu?» diye sordum. «Sen bilirsin» dedi. Ben de çağırdım. Bütün akşam odasından çıkmadı. Güya izin vermişti!', 'Op een dag vroeg ik mijn huisgenote: «Is het goed als ik vanavond gasten uitnodig?» «Jij weet het», zei ze. Dus nodigde ik ze uit. De hele avond kwam ze haar kamer niet uit. Ze had zogenaamd toestemming gegeven!'],
        ['Sonradan bir arkadaşım anlattı: «Sen bilirsin» çoğu zaman «Bence yapma ama karışmıyorum» demekmiş. Ses tonuna bakacakmışım. Bari biri bana bunu baştan söyleseydi!', 'Later legde een vriend het me uit: «Jij weet het» schijnt meestal te betekenen «volgens mij moet je het niet doen, maar ik bemoei me er niet mee». Ik had op de toon moeten letten. Had iemand me dat nou maar meteen verteld!'],
        ['Şimdi ben de kullanıyorum. Geçen gün annem telefonda «Bu yaz gelmeyecek misin?» diye sitem etti. «İnşallah» dedim. Annem güldü: «Sen de Türk olmuşsun!»', 'Nu gebruik ik het zelf ook. Laatst verweet mijn moeder me aan de telefoon: «Kom je deze zomer niet?» «İnşallah», zei ik. Mijn moeder lachte: «Jij bent ook al een Turk geworden!»']
      ],
      gl: [['açık konuşmak', 'open / recht voor zijn raap spreken'], ['çağırmak', 'uitnodigen / roepen'], ['karışmak', 'zich bemoeien met'], ['baştan', 'van het begin af'], ['sitem etmek', 'zacht verwijten']],
      q: [
        { t: 'mc', q: 'Ev arkadaşı «Sen bilirsin» derken ne demek istiyordu?', o: ['Bence yapma ama karışmıyorum', 'Çok iyi fikir', 'Ben de misafir çağıracağım'] },
        { t: 'mc', q: 'Yazar neye dikkat etmeliymiş?', o: ['Ses tonuna', 'Saate', 'Yemeğe'] },
        { t: 'mc', q: 'Yazar annesine ne cevap verdi?', o: ['İnşallah', 'Sen bilirsin', 'Hayır, gelmeyeceğim'] }
      ]
    },
    say: [['Hani beşte gelecektin?', 'Je zou toch om vijf uur komen?'], ['Bari bir mesaj atsaydın.', 'Had dan tenminste een berichtje gestuurd.'], ['Madem geldin, otursana.', 'Nu je er toch bent: ga toch zitten.'], ['Sana takılıyorum, alınma!', 'Ik plaag je maar, niet boos zijn!']],
    task: { nl: 'Schrijf een kort dialoogje van zes tot acht regels tussen twee vrienden, waarin de een de ander plaagt of iets zacht verwijt (te laat, vergeten te bellen, een smoesje). Gebruik minstens vier partikels (hani, bari, madem, sakın, ya, ki, -sene) en één keer het spottende -miş of güya.', model: '— Ooo, hoş geldin! Hani dün arayacaktın?\n— Aradım ya! Açmadın.\n— Aramış! Telefonumda hiçbir şey yok.\n— Sahi mi? Meğer yanlış numarayı aramışım.\n— Güya en yakın arkadaşımsın, numaramı bile bilmiyorsun.\n— Tamam, haklısın. Bari bir kahve ısmarlayayım.\n— Madem ısmarlıyorsun, yanına tatlı da isterim.\n— Sakın abartma!' },
    scenario: { nl: 'Je komt een half uur te laat op een afspraak met je vriendin Ceren in Ankara. Ze is niet echt boos, maar laat je er niet zomaar mee wegkomen.', role: 'You are Ceren, a witty, teasing friend in Ankara. The learner arrives thirty minutes late. Greet them with playful reproach (Hani beşte gelecektin? Bari mesaj atsaydın!), repeat their excuses with the mocking -miş (Otobüs gelmemiş!), use particles (ya, ki, madem, sakın, sahi, -sene) and güya, then soften: say you are only teasing (takılıyorum, alınma) and invite them to sit. Expect them to tease back. Lively, informal C1 Turkish.', goal: 'Verontschuldig je, verdedig je met humor, plaag terug en maak het weer goed.' }
  });
})(window.SPT);
