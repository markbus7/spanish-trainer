/* Turks voor Nederlandstaligen — niveau B2, units 7–8 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── B2 · 7 ───────────────────────── */
  U({
    id: 'tr-b2-07', level: 'B2', icon: '🌆', title: 'Şehir mi, köy mü?', nl: 'Een betoog opbouwen: stad of platteland',
    goals: ['Voor- en nadelen tegen elkaar afwegen', 'Argumenten verbinden met üstelik, oysa en dolayısıyla', 'Het voegwoord ki gebruiken', 'Het achtervoegsel -ki gebruiken: evdeki, benimki'],
    vocab: [
      ['kırsal', 'platteland / landelijk'], ['kent', 'stad (formeel)'], ['büyükşehir', 'grote stad / metropool'], ['gürültü', 'lawaai'], ['trafik sıkışıklığı', 'file / verkeersdrukte'], ['geçim', 'levensonderhoud'], ['hayat pahalılığı', 'dure levensstandaard'],
      ['imkân', 'mogelijkheid / voorziening'], ['sakinlik', 'rust'], ['komşuluk', 'nabuurschap'], ['yalnızlık', 'eenzaamheid'], ['tarım', 'landbouw'], ['çiftçi', 'boer'], ['toprak', 'grond / aarde'],
      ['altyapı', 'infrastructuur'], ['ulaşım', 'vervoer / bereikbaarheid'], ['eğitim', 'onderwijs'], ['işsizlik', 'werkloosheid'], ['nüfus', 'bevolking'], ['artı', 'pluspunt'], ['eksi', 'minpunt'],
      ['tercih etmek', 'de voorkeur geven aan'], ['karşılaştırmak', 'vergelijken'], ['üstelik', 'bovendien'], ['oysa', 'terwijl toch / maar'], ['dolayısıyla', 'dientengevolge / dus'], ['buna karşılık', 'daartegenover'],
      ['hatta', 'zelfs'], ['zaten', 'toch al / sowieso'], ['bana kalırsa', 'als je het mij vraagt'], ['kısacası', 'kortom']
    ],
    grammar: [
      { t: 'Argumenten aan elkaar rijgen', es: 'Bağlaçlar',
        html: `<p>Een goed betoog staat of valt met de woordjes ertussen. Ze staan aan het <b>begin van de zin</b> (of vlak na het onderwerp):</p>
<p><b>Iets toevoegen:</b> <i>ayrıca</i> (daarnaast) · <i>üstelik</i> (bovendien, en dat ook nog) · <i>hatta</i> (zelfs) · <i>hem de</i> (en ook nog eens)<br><i>Köyde kiralar ucuz. <b>Üstelik</b> hava temiz.</i></p>
<p><b>Iets tegenoverstellen:</b> <i>ama / fakat / ancak</i> (maar) · <i>oysa / halbuki</i> (terwijl toch) · <i>öte yandan</i> (aan de andere kant) · <i>buna karşılık</i> (daartegenover) · <i>yine de</i> (toch)<br><i>Herkes şehre taşınıyor. <b>Oysa</b> orada hayat çok pahalı.</i></p>
<p><b>Een gevolg trekken:</b> <i>bu yüzden / bu nedenle</i> (daarom) · <i>dolayısıyla</i> (dus, dientengevolge) · <i>böylece</i> (zodoende) · <i>sonuç olarak</i> (als slotsom)<br><i>Köyde iş yok, <b>dolayısıyla</b> gençler gidiyor.</i></p>
<p><b>Verduidelijken en afronden:</b> <i>yani</i> (dus, dat wil zeggen) · <i>örneğin / mesela</i> (bijvoorbeeld) · <i>zaten</i> (toch al) · <i>kısacası</i> (kortom) · <i>bana kalırsa</i> (als je het mij vraagt)</p>
<p>Een afweging in één zin: <b>bir yandan … öte yandan</b>: <i><b>Bir yandan</b> sakinlik istiyorum, <b>öte yandan</b> şehrin imkânlarından vazgeçemiyorum.</i> En <b>-mekle birlikte</b> (hoewel, weliswaar): <i>Şehri sev<b>mekle birlikte</b> gürültüden bıktım.</i></p>`,
        table: [['functie', 'woorden'], ['toevoegen', 'ayrıca · üstelik · hatta'], ['tegenstellen', 'oysa · halbuki · öte yandan · yine de'], ['gevolg', 'bu yüzden · dolayısıyla · böylece'], ['afronden', 'yani · kısacası · sonuç olarak']],
        sum: 'Üstelik, oysa, dolayısıyla, kısacası.',
        ex: [['Şehirde iş bulmak kolay. Ayrıca ulaşım çok iyi.', 'In de stad is het makkelijk werk te vinden. Daarnaast is het vervoer heel goed.'], ['Köyde doğdum, oysa hiç tarla görmedim.', 'Ik ben in een dorp geboren, en toch heb ik nooit een akker gezien.'], ['Kiralar çok arttı, dolayısıyla taşınmak zorunda kaldık.', 'De huren zijn sterk gestegen, dus moesten we verhuizen.'], ['Kısacası, her yerin iyi ve kötü yanları var.', 'Kortom, elke plek heeft goede en slechte kanten.']] },
      { t: 'Het voegwoord ki', es: 'Bağlaç olan ki',
        html: `<p>Turkse bijzinnen staan normaal <b>vóór</b> de hoofdzin en hebben geen voegwoord (<i>Geldiğini biliyorum</i>). Maar er is één los woordje dat het op zijn Nederlands doet: <b>ki</b> («dat»). Het komt uit het Perzisch, staat <b>los</b>, verandert <b>nooit</b> van klinker en zet de bijzin <b>achteraan</b>:</p>
<p>• na denken, weten, hopen: <i>Biliyorum <b>ki</b> haklısın.</i> (Ik weet dat je gelijk hebt.) · <i>Sanıyorum <b>ki</b> gelmeyecek.</i> · <i>Umarım <b>ki</b> beğenirsin.</i> Dit klinkt nadrukkelijker of ouderwetser dan de -diğini-vorm.</p>
<p>• <b>zo … dat</b>: <i>O kadar yorgunum <b>ki</b> ayakta duramıyorum.</i> (Ik ben zo moe dat ik niet op mijn benen kan staan.) · <i>Öyle bir gürültü var <b>ki</b> uyuyamıyoruz.</i></p>
<p>• aan het <b>eind</b> van de zin, als verbazing of protest: <i>Gelmedi <b>ki</b>!</i> (Hij is toch helemaal niet gekomen!) · <i>Bilmiyorum <b>ki</b>…</i> (Ik weet het echt niet…) · <i>O kadar güzel <b>ki</b>!</i> (Zo mooi!)</p>
<p>• in vaste woorden, hier wel aaneen: <i>çün<b>kü</b></i> (omdat), <i>bel<b>ki</b></i> (misschien), <i>san<b>ki</b></i> (alsof), <i>oysa<b>ki</b></i>, <i>madem<b>ki</b></i> (aangezien), <i>hâlbu<b>ki</b></i>, <i>tabii <b>ki</b></i> (natuurlijk), <i>ne yazık <b>ki</b></i> (helaas), <i>iyi <b>ki</b></i> (gelukkig maar dat).</p>`,
        table: [['Turks', 'Nederlands'], ['Biliyorum ki…', 'Ik weet dat…'], ['O kadar … ki', 'Zo … dat'], ['Gelmedi ki!', 'Hij is toch niet gekomen!'], ['iyi ki', 'gelukkig maar dat'], ['ne yazık ki', 'helaas']],
        sum: 'O kadar yorgunum ki…',
        ex: [['Şehir o kadar kalabalık ki nefes alamıyorum.', 'De stad is zo druk dat ik geen adem krijg.'], ['İyi ki taşınmışız!', 'Gelukkig maar dat we verhuisd zijn!'], ['Ne yazık ki köyde doktor yok.', 'Helaas is er in het dorp geen dokter.'], ['Ben bir şey demedim ki!', 'Ik heb toch niks gezegd!']] },
      { t: 'Het achtervoegsel -ki: die van…, dat in…', es: 'İlgi eki -ki',
        html: `<p>Er is ook een <b>-ki</b> die <b>vastzit</b> aan het woord ervoor. Het maakt van een plaats, tijd of bezitter een <b>bijvoeglijk naamwoord</b> of een <b>zelfstandig voornaamwoord</b>:</p>
<p>• na <b>-de</b> (plaats): <i>ev<b>deki</b> kitaplar</i> (de boeken die thuis zijn) · <i>köy<b>deki</b> hayat</i> (het leven in het dorp) · <i>masanın üstün<b>deki</b> anahtar</i></p>
<p>• na een <b>tijdwoord</b>: <i>yarın<b>ki</b> toplantı</i> (de vergadering van morgen) · <i>şimdi<b>ki</b> gençler</i> (de jeugd van tegenwoordig) · <i>geçen yıl<b>ki</b> tatil</i> · <i>sabah<b>ki</b> haber</i></p>
<p>• na de <b>bezitsvorm</b> = «die van»: <i>benim<b>ki</b></i> (de mijne) · <i>senin<b>ki</b></i> · <i>Ali’nin<b>ki</b></i> (die van Ali) · <i>Bizim ev küçük, sizin<b>ki</b> daha büyük.</i></p>
<p>Daarna kunnen nog meervoud en naamvallen komen, met een <b>n</b> ertussen: <i>evdeki<b>ler</b></i> (die thuis), <i>benimki<b>ni</b></i>, <i>yarınki<b>nden</b></i>.</p>
<p><b>⚠️ Uitzondering:</b> -ki doet <b>niet</b> mee aan de klinkerharmonie: het is <i>yarın<b>ki</b></i>, <i>okulda<b>ki</b></i>, <i>onun<b>ki</b></i>, nooit <s>yarınkı</s> of <s>onunku</s>. Maar bij twee woorden wel: <b>bugün<u>kü</u></b> (van vandaag) en <b>dün<u>kü</u></b> (van gisteren), en zo ook <i>öbür<b>kü</b></i>. <b>Waarom?</b> -ki was vroeger een los woordje en is pas laat aan het woord ervoor vastgegroeid; daarom houdt het zijn eigen klinker. Alleen in <i>dünkü</i> en <i>bugünkü</i>, die elke dag ontelbare keren gezegd worden, heeft de <b>ü</b> ervoor de i meegetrokken. De ronde <b>ü</b> is de sterkste harmonie van het Turks.</p>`,
        table: [['basis', 'met -ki', 'betekenis'], ['evde', 'evdeki', 'die/dat thuis is'], ['yarın', 'yarınki', 'van morgen'], ['benim', 'benimki', 'de mijne'], ['Ali’nin', 'Ali’ninki', 'die van Ali'], ['bugün ⚠️', 'bugünkü', 'van vandaag'], ['dün ⚠️', 'dünkü', 'van gisteren']],
        sum: 'Evdeki, yarınki, benimki, bugünkü.',
        ex: [['Köydeki evimiz çok eski.', 'Ons huis in het dorp is heel oud.'], ['Bugünkü gazeteyi okudun mu?', 'Heb je de krant van vandaag gelezen?'], ['Benim arabam bozuk, seninkiyle gidelim.', 'Mijn auto is kapot, laten we met de jouwe gaan.'], ['Şimdiki çocuklar sokakta oynamıyor.', 'De kinderen van tegenwoordig spelen niet op straat.']] }
    ],
    dialogue: {
      t: 'Verhuizen naar het dorp?', place: 'İstanbul 🇹🇷',
      lines: [
        ['Cem', 'Duydun mu? Kerem’ler Ayvalık’ta bir köye taşınıyormuş.', 'Heb je het gehoord? Kerem en zijn gezin schijnen naar een dorp bij Ayvalık te verhuizen.'],
        ['Lieke', 'Ciddi misin? Oysa ikisinin de burada iyi işi var.', 'Meen je dat? En ze hebben allebei een goede baan hier.'],
        ['Cem', 'Uzaktan çalışacaklarmış. İstanbul’daki kirayla orada bahçeli ev tutuyorlar, üstelik denize on dakika.', 'Ze gaan op afstand werken. Voor de huur van İstanbul huren ze daar een huis met tuin, en bovendien tien minuten van zee.'],
        ['Lieke', 'Kulağa hoş geliyor. Öte yandan köyde hayat sandıkları kadar kolay olmayabilir.', 'Het klinkt mooi. Aan de andere kant is het leven in een dorp misschien niet zo makkelijk als ze denken.'],
        ['Cem', 'Neden? Bana kalırsa buradaki trafikten sonra her yer cennet.', 'Waarom? Als je het mij vraagt, is na het verkeer hier elke plek een paradijs.'],
        ['Lieke', 'Doğru, ama çocukların okulu ne olacak? En yakın lise kırk kilometre uzaktaymış.', 'Klopt, maar hoe moet het met de school van de kinderen? De dichtstbijzijnde middelbare school schijnt veertig kilometer verderop te zijn.'],
        ['Cem', 'Onu düşünmemiştim. Hastane de yoktur herhalde.', 'Daar had ik niet aan gedacht. Een ziekenhuis is er vast ook niet.'],
        ['Lieke', 'Yok tabii. Dolayısıyla her şey için arabaya bağımlı olacaklar.', 'Natuurlijk niet. Dus worden ze voor alles afhankelijk van de auto.'],
        ['Cem', 'Yine de onları kıskanıyorum. Ben o kadar yoruldum ki bazen her şeyi bırakıp gitmek istiyorum.', 'Toch ben ik jaloers op ze. Ik ben zo moe dat ik soms alles wil achterlaten en weggaan.'],
        ['Lieke', 'Ben de! Kısacası, ideal olanı şu: kışın şehir, yazın köy.', 'Ik ook! Kortom, ideaal is dit: ’s winters de stad, ’s zomers het dorp.']
      ],
      q: [
        { t: 'mc', q: 'Kerem’ler nereye taşınıyor?', o: ['Ayvalık’ta bir köye', 'İstanbul’un merkezine', 'Hollanda’ya'] },
        { t: 'mc', q: 'Lieke’ye göre köyde hangi sorun var?', o: ['Okul ve hastane uzakta', 'Kiralar çok yüksek', 'Deniz çok uzak'] },
        { t: 'mc', q: 'Lieke’ye göre ideal olan nedir?', o: ['Kışın şehir, yazın köy', 'Her zaman köy', 'Her zaman şehir'] }
      ]
    },
    culture: { t: 'Köyden kente en weer terug', html: `<p>In 1950 woonde driekwart van de Turken in een dorp; nu is dat minder dan een kwart. De grote trek naar de stad, <b>köyden kente göç</b>, heeft het land in twee generaties veranderd. Aan de randen van İstanbul en Ankara verrezen <b>gecekondu</b>-wijken: huisjes die letterlijk «in één nacht neergezet» zijn, omdat een dak dat er bij zonsopgang stond niet meer mocht worden afgebroken.</p>
<p>Bijna iedere stedeling heeft daardoor nog een <b>memleket</b>, het dorp of de stad waar de familie vandaan komt, ook als hij er zelf nooit gewoond heeft. De vraag <i>Memleket neresi?</i> is een van de eerste die je gesteld wordt.</p>
<p>🌿 Sinds een paar jaar is er een tegenbeweging: jonge stedelingen die naar de Egeïsche kust trekken om olijven te telen of op afstand te werken. Dat heet <b>tersine göç</b>, omgekeerde migratie.</p>` },
    ex: [
      { t: 'cloze', s: 'Köyde kiralar ucuz. ___ hava temiz.', h: 'bovendien', a: ['Üstelik'], o: ['Üstelik', 'Oysa', 'Dolayısıyla'], nl: 'In het dorp zijn de huren laag. Bovendien is de lucht schoon.', tag: 'tr-verbind' },
      { t: 'cloze', s: 'Herkes şehre taşınıyor. ___ orada hayat çok pahalı.', h: 'terwijl toch', a: ['Oysa'], o: ['Oysa', 'Ayrıca', 'Böylece'], nl: 'Iedereen verhuist naar de stad. En toch is het leven daar heel duur.', tag: 'tr-verbind' },
      { t: 'cloze', s: 'Köyde iş yok, ___ gençler gidiyor.', h: 'dus', a: ['dolayısıyla'], o: ['dolayısıyla', 'oysa', 'hatta'], nl: 'In het dorp is geen werk, dus gaan de jongeren weg.', tag: 'tr-verbind' },
      { t: 'mc', q: 'Wat betekent «kısacası»?', o: ['kortom', 'bovendien', 'daarentegen'], tag: 'tr-verbind' },
      { t: 'cloze', s: 'O kadar yorgunum ___ ayakta duramıyorum.', h: 'dat', a: ['ki'], o: ['ki', 'de', 'diye'], nl: 'Ik ben zo moe dat ik niet op mijn benen kan staan.', tag: 'tr-ki' },
      { t: 'mc', q: 'Wat betekent «Gelmedi ki!»?', o: ['Hij is toch helemaal niet gekomen!', 'Dat hij niet gekomen is.', 'Hij komt misschien niet.'], tag: 'tr-ki' },
      { t: 'cloze', s: '___ ki taşınmışız!', h: 'gelukkig maar', a: ['İyi'], o: ['İyi', 'Ne yazık', 'Belki'], nl: 'Gelukkig maar dat we verhuisd zijn!', tag: 'tr-ki' },
      { t: 'cloze', s: 'Köyde___ evimiz çok eski.', h: 'dat … is', a: ['ki'], o: ['ki', 'kı', 'n'], nl: 'Ons huis in het dorp is heel oud.', tag: 'tr-ki' },
      { t: 'mc', q: 'Hoe zeg je «de vergadering van morgen»?', o: ['yarınki toplantı', 'yarınkı toplantı', 'yarının toplantı'], x: '⚠️ Uitzondering: -ki doet niet mee aan de klinkerharmonie, omdat het vroeger een los woordje was.', tag: 'tr-ki' },
      { t: 'mc', q: 'Hoe zeg je «de krant van vandaag»?', o: ['bugünkü gazete', 'bugünki gazete', 'bugünün gazete'], x: '⚠️ Uitzondering op de uitzondering: alleen na dün en bugün (en öbür) wordt het -kü. De ronde ü heeft de i meegetrokken in deze veelgebruikte woorden.', tag: 'tr-ki' },
      { t: 'cloze', s: 'Benim arabam bozuk, senin___ gidelim.', h: 'met de jouwe', a: ['kiyle'], o: ['kiyle', 'le', 'kini'], nl: 'Mijn auto is kapot, laten we met de jouwe gaan.', tag: 'tr-ki' },
      { t: 'mc', q: 'Wat is een «gecekondu»?', o: ['een huisje dat in één nacht illegaal is gebouwd', 'een nachttrein', 'een dorpsfeest'], tag: 'vocab' },
      { t: 'tr', nl: 'Helaas is er in het dorp geen dokter.', a: ['Ne yazık ki köyde doktor yok.', 'Maalesef köyde doktor yok.'], tag: 'tr-ki' },
      { t: 'tr', nl: 'Mijn huis is klein, het jouwe is groter.', a: ['Benim evim küçük, seninki daha büyük.', 'Evim küçük, seninki daha büyük.'], tag: 'tr-ki' },
      { t: 'tr', nl: 'Aan de andere kant is het leven in de stad duur.', a: ['Öte yandan şehirde hayat pahalı.', 'Öte yandan şehirdeki hayat pahalı.', 'Öte yandan kentte hayat pahalı.'], tag: 'tr-verbind' },
      { t: 'order', s: 'Bir yandan sakinlik istiyorum, öte yandan şehrin imkânlarından vazgeçemiyorum.', nl: 'Aan de ene kant wil ik rust, aan de andere kant kan ik de voorzieningen van de stad niet opgeven.', tag: 'tr-verbind' },
      { t: 'match', p: [['gürültü', 'lawaai'], ['tarım', 'landbouw'], ['nüfus', 'bevolking'], ['ulaşım', 'vervoer'], ['avantaj', 'voordeel'], ['çiftçi', 'boer']], tag: 'vocab' }
    ],
    reading: {
      t: 'Tersine göç: şehirden köye', type: 'Achtergrondartikel',
      p: [
        ['Yıllarca gençler köyden şehre gitti. Oysa son yıllarda tam tersi oluyor: binlerce aile büyükşehirleri bırakıp Ege’deki ve Akdeniz’deki köylere yerleşiyor.', 'Jarenlang trokken jongeren van het dorp naar de stad. De laatste jaren gebeurt echter precies het omgekeerde: duizenden gezinnen verlaten de grote steden en vestigen zich in dorpen aan de Egeïsche en de Middellandse Zee.'],
        ['Nedenleri açık: şehirdeki kiralar o kadar arttı ki orta gelirli bir aile geçinemiyor. Üstelik uzaktan çalışma artık mümkün. Dolayısıyla insanlar «Neden burada kalayım?» diye soruyor.', 'De redenen zijn duidelijk: de huren in de stad zijn zo gestegen dat een gezin met een middeninkomen niet rondkomt. Bovendien is werken op afstand nu mogelijk. Dus vragen mensen zich af: «Waarom zou ik hier blijven?»'],
        ['Öte yandan köy hayatı herkese göre değil. İnternet yavaş, kışlar uzun ve yalnız. Yeni gelenlerle eski köylüler arasındaki ilişki de her zaman kolay olmuyor.', 'Aan de andere kant is het dorpsleven niet voor iedereen. Het internet is traag, de winters zijn lang en eenzaam. Ook de verhouding tussen nieuwkomers en oude dorpelingen is niet altijd makkelijk.'],
        ['Yine de dönenlerin sayısı az. Bir çiftçi şöyle diyor: «Şehirdeki maaşımın yarısını kazanıyorum, ama sabah kuş sesiyle uyanıyorum. Kısacası, pişman değilim.»', 'Toch zijn er maar weinig die terugkeren. Een boer zegt: «Ik verdien de helft van mijn salaris in de stad, maar ik word ’s ochtends wakker van vogelgezang. Kortom, ik heb geen spijt.»']
      ],
      gl: [['tam tersi', 'precies het omgekeerde'], ['orta gelirli', 'met een middeninkomen'], ['geçinmek', 'rondkomen'], ['köylü', 'dorpeling'], ['kuş sesi', 'vogelgezang']],
      q: [
        { t: 'mc', q: 'Son yıllarda ne oluyor?', o: ['Aileler şehirden köye taşınıyor', 'Gençler köyden şehre gidiyor', 'Köyler boşalıyor'] },
        { t: 'mc', q: 'Yazıya göre köy hayatının dezavantajı nedir?', o: ['İnternet yavaş, kışlar yalnız', 'Kiralar çok yüksek', 'Trafik çok yoğun'] },
        { t: 'mc', q: 'Çiftçi pişman mı?', o: ['Hayır, pişman değil', 'Evet, şehre dönmek istiyor', 'Henüz karar vermedi'] }
      ]
    },
    say: [['O kadar yorgunum ki ayakta duramıyorum.', 'Ik ben zo moe dat ik niet op mijn benen kan staan.'], ['Üstelik hava da temiz.', 'Bovendien is de lucht ook schoon.'], ['Benimki bozuk, seninkiyle gidelim.', 'De mijne is kapot, laten we met de jouwe gaan.'], ['Kısacası, pişman değilim.', 'Kortom, ik heb geen spijt.']],
    task: { nl: 'Schrijf een kort betoog van 7 of 8 zinnen: waar woon je liever, in de stad of op het platteland? Noem twee voordelen (ayrıca, üstelik), een tegenwerping (oysa, öte yandan), een gevolg (dolayısıyla), één zin met o kadar … ki, één met -deki of -ki en sluit af met kısacası.', model: 'Bana kalırsa küçük bir şehirde yaşamak en iyisi. Büyükşehirdeki hayat çok pahalı; üstelik trafikte her gün iki saat kaybediyorsun. Köy ise sakin, ama orada iş bulmak zor. Dolayısıyla gençler köyde kalamıyor. Öte yandan küçük bir şehirde hem iş hem de doğa var. Bizimki o kadar küçük ki her yere bisikletle gidebiliyorum. Dünkü konsere bile yürüyerek gittim. Kısacası, ne köy ne büyükşehir: ortası!' },
    scenario: { nl: 'Je vriend Cem droomt ervan İstanbul te verlaten en naar een dorp aan de kust te verhuizen. Jij speelt advocaat van de duivel.', role: 'You are Cem, an exhausted office worker in İstanbul who dreams of moving to a village on the Aegean coast. Argue enthusiastically for village life (Üstelik denize on dakika! Buradaki trafikten sonra her yer cennet), respond to the learner’s objections with oysa, öte yandan, yine de, and ask where they would prefer to live and why. Use B2 Turkish with connectives and o kadar … ki.', goal: 'Weeg voor- en nadelen af met verbindingswoorden en zeg waar jij zou willen wonen.' }
  });

  /* ───────────────────────── B2 · 8 ───────────────────────── */
  U({
    id: 'tr-b2-08', level: 'B2', icon: '🏷️', title: 'Sanki bedavaymış gibi', nl: 'Reclame en geld: alsof, steeds meer, een beetje',
    goals: ['Over kopen, reclame en geld praten', 'Alsof zeggen met sanki en -miş gibi', 'Graad en verhouding uitdrukken: gittikçe, iki katı, yarı yarıya', 'Afzwakken en verkleinen met -ce, -imsi en -cik'],
    vocab: [
      ['reklam', 'reclame'], ['kampanya', 'actie / campagne'], ['etiket', 'prijskaartje / etiket'], ['marka', 'merk'], ['tüketici', 'consument'], ['tüketmek', 'verbruiken / consumeren'], ['taksit', 'termijn (afbetaling)'],
      ['borç', 'schuld'], ['faiz', 'rente'], ['gelir', 'inkomen'], ['gider', 'uitgave / kostenpost'], ['harcama', 'uitgave'], ['iade etmek', 'retourneren / teruggeven'], ['değişim', 'ruil / verandering'],
      ['kandırmak', 'misleiden / voor de gek houden'], ['ihtiyaç', 'behoefte'], ['lüks', 'luxe'], ['israf etmek', 'verspillen'], ['bedava', 'gratis'], ['değer', 'waarde'], ['oran', 'verhouding / percentage'],
      ['yarı yarıya', 'voor de helft'], ['aşırı', 'overdreven / extreem'], ['epey', 'behoorlijk'], ['gayet', 'heel / uitermate'], ['giderek', 'geleidelijk / steeds meer'], ['sanki', 'alsof'],
      ['sahiden', 'werkelijk'], ['sözde', 'zogenaamd / in naam'], ['pişmanlık', 'spijt'], ['dayanıklı', 'duurzaam / stevig']
    ],
    grammar: [
      { t: 'Alsof: sanki … -miş gibi', es: 'Benzetme: -miş gibi',
        html: `<p><b>Gibi</b> (zoals, als) ken je achter een naamwoord: <i>buz <b>gibi</b></i> (ijskoud). Achter een <b>werkwoord</b> betekent het <b>«alsof»</b>, en dan komt er <b>-miş</b> voor: de vorm voor wat niet echt of niet zeker is.</p>
<p><i>Hiçbir şey ol<b>mamış gibi</b> davranıyor.</i> (Hij doet alsof er niets gebeurd is.) · <i>Beni tanı<b>mıyormuş gibi</b> baktı.</i> (Hij keek alsof hij me niet kende.) · <i>Yağmur yağ<b>acakmış gibi</b>.</i> (Het lijkt alsof het gaat regenen.) · <i>Bedava<b>ymış gibi</b> alıyorlar.</i> (Ze kopen het alsof het gratis is.)</p>
<p>De tijd kies je vóór -miş: <b>-miş</b> (alsof het gebeurd is), <b>-iyormuş</b> (alsof het bezig is), <b>-ecekmiş</b> (alsof het gaat gebeuren), <b>-ymiş</b> na een naamwoord.</p>
<p><b>Sanki</b> aan het begin maakt het sterker en mag ook alleen staan: <i><b>Sanki</b> dünyanın sonu gel<b>miş gibi</b>!</i> · <i><b>Sanki</b> ben bilmiyorum!</i> (Alsof ik dat niet weet!)</p>
<p>Voor «zoals» bij een echt feit gebruik je <b>-diği gibi</b>: <i>Söyle<b>diğim gibi</b> yap.</i> (Doe het zoals ik zei.) · <i>Bil<b>diğin gibi</b>…</i> (Zoals je weet…) En <b>-cesine</b> is een literaire «alsof»: <i>Koş<b>arcasına</b> yürüyordu.</i> (Hij liep alsof hij rende.)</p>
<p>Twee woordjes voor «zogenaamd»: <b>güya</b> en <b>sözde</b>: <i><b>Güya</b> yüzde elli indirim varmış.</i> (Er zou zogenaamd vijftig procent korting zijn.)</p>`,
        table: [['Turks', 'Nederlands'], ['olmamış gibi', 'alsof het niet gebeurd is'], ['bilmiyormuş gibi', 'alsof hij het niet weet'], ['yağacakmış gibi', 'alsof het gaat regenen'], ['söylediğim gibi', 'zoals ik zei (echt)'], ['güya / sözde', 'zogenaamd']],
        sum: 'Hiçbir şey olmamış gibi davranıyor.',
        ex: [['Sanki hiç paramız yokmuş gibi konuşuyorsun.', 'Je praat alsof we helemaal geen geld hebben.'], ['Reklamda her şey mükemmelmiş gibi gösteriliyor.', 'In de reclame wordt alles voorgesteld alsof het perfect is.'], ['Dediğim gibi, bu ay tasarruf etmeliyiz.', 'Zoals ik zei, moeten we deze maand zuinig zijn.']] },
      { t: 'Graad en verhouding', es: 'Derece ve oran',
        html: `<p><b>Hoe erg?</b> Van zwak naar sterk: <i>biraz</i> (een beetje) · <i>oldukça / epey</i> (tamelijk, behoorlijk) · <i>gayet</i> (heel) · <i>son derece</i> (uiterst) · <i>aşırı</i> (overdreven). <b>Fazla</b> is «te»: <i><b>fazla</b> pahalı</i> (te duur), <i>çok <b>fazla</b></i> (veel te veel).</p>
<p><b>Steeds meer:</b> <i>gittikçe</i> of <i>giderek</i>: <i>Fiyatlar <b>gittikçe</b> artıyor.</i> (De prijzen stijgen steeds verder.) · <i><b>Giderek</b> daha az nakit kullanıyoruz.</i></p>
<p><b>Hoe … hoe:</b> <i>ne kadar … o kadar</i>: <i><b>Ne kadar</b> çok kazanırsan <b>o kadar</b> çok harcarsın.</i> (Hoe meer je verdient, hoe meer je uitgeeft.)</p>
<p><b>Keer en deel:</b> <i>iki <b>kat</b>ı</i> (het dubbele) · <i>üç <b>kat</b> pahalı</i> (drie keer zo duur) · <i>yarı<b>sı</b></i> (de helft) · <i>yarı yarıya</i> (voor de helft) · <i>üçte bir</i> (een derde) · <i>yüzde yirmi</i> (twintig procent) · <i>en az</i> (minstens) · <i>en fazla</i> (hoogstens).</p>
<p><b>Zoveel als:</b> <i>-diği kadar</i>: <i>İste<b>diğin kadar</b> al.</i> (Neem zoveel je wilt.) · <i>San<b>dığım kadar</b> pahalı değil.</i> (Het is niet zo duur als ik dacht.) <b>Voor zover:</b> <i>Bil<b>diğim kadarıyla</b> garanti iki yıl.</i></p>`,
        table: [['Turks', 'Nederlands'], ['gittikçe / giderek', 'steeds meer'], ['ne kadar … o kadar', 'hoe … hoe'], ['iki katı', 'het dubbele'], ['yarı yarıya', 'voor de helft'], ['sandığım kadar', 'zo … als ik dacht'], ['bildiğim kadarıyla', 'voor zover ik weet']],
        sum: 'Fiyatlar gittikçe artıyor.',
        ex: [['Bu telefon ötekinin iki katı fiyatında.', 'Deze telefoon kost het dubbele van de andere.'], ['Kira gelirimin yarısını alıyor.', 'De huur slokt de helft van mijn inkomen op.'], ['Ne kadar az reklam izlersen o kadar az harcarsın.', 'Hoe minder reclame je kijkt, hoe minder je uitgeeft.']] },
      { t: 'Een beetje, -achtig, piepklein', es: 'Küçültme ve yaklaşıklık',
        html: `<p>Het Turks kan een eigenschap met een achtervoegsel <b>afzwakken</b> of <b>verkleinen</b>:</p>
<p><b>-ce / -ca</b> (na een stemloze medeklinker -çe / -ça) achter een bijvoeglijk naamwoord is «<b>tamelijk</b>»: <i>büyük<b>çe</b></i> (aan de grote kant) · <i>pahalı<b>ca</b></i> · <i>iyi<b>ce</b></i> (flink, goed) · <i>uzun<b>ca</b></i>.</p>
<p><b>-imsi</b> en <b>-imtırak</b> zijn «<b>-achtig</b>», vooral bij kleuren en smaken: <i>yeşil<b>imsi</b></i> (groenig) · <i>sarı<b>msı</b></i> · <i>mavi<b>mtırak</b></i> (blauwachtig) · <i>ekşi<b>msi</b></i> (zurig).</p>
<p><b>-cik</b> (cık, cik, cuk, cük; na een stemloze medeklinker -çik) maakt iets <b>klein en lief</b>: <i>ev<b>cik</b></i> (huisje) · <i>kedi<b>cik</b></i> (poesje) · <i>anne<b>ciğim</b></i> (lieve mama) · <i>Ayşe<b>ciğim</b></i>. Bij hoeveelheden is het «maar een heel klein beetje»: <i>az<b>ıcık</b></i> · <i>bir<b>icik</b></i> (de enige echte) · <i>şu<b>ncacık</b></i>.</p>
<p><b>⚠️ Uitzondering:</b> eindigt het bijvoeglijk naamwoord op <b>-k</b>, dan <b>valt die k weg</b> vóór -cik: <i>küçü<s>k</s></i> → <i>küçü<b>cük</b></i> (piepklein) · <i>ufa<s>k</s></i> → <i>ufa<b>cık</b></i> · <i>sıca<s>k</s></i> → <i>sıca<b>cık</b></i> (lekker warm) · <i>alça<s>k</s></i> → <i>alça<b>cık</b></i> · <i>minik</i> → <i>mini<b>cik</b></i>. <b>Waarom?</b> <i>küçük-cük</i> zou twee keer achter elkaar een k-klank met een c ertussen geven, en dat struikelt. Het Turks laat bij zulke botsingen de eerste van de twee vallen. Bij <i>azıcık</i> en <i>biricik</i> gebeurt het omgekeerde: daar komt er juist een klinker <b>bij</b>, omdat <i>az-cık</i> en <i>bir-cik</i> twee medeklinkers zouden laten botsen.</p>`,
        table: [['woord', 'vorm', 'betekenis'], ['büyük', 'büyükçe', 'aan de grote kant'], ['yeşil', 'yeşilimsi', 'groenig'], ['ev', 'evcik', 'huisje'], ['küçük ⚠️', 'küçücük', 'piepklein'], ['sıcak ⚠️', 'sıcacık', 'lekker warm'], ['az ⚠️', 'azıcık', 'een heel klein beetje']],
        sum: 'Küçücük, sıcacık, azıcık.',
        ex: [['Küçücük bir dükkân, ama her şey var.', 'Een piepklein winkeltje, maar ze hebben alles.'], ['Azıcık pazarlık yapsak?', 'Zullen we een heel klein beetje afdingen?'], ['Büyükçe bir çanta arıyorum.', 'Ik zoek een tas die aan de grote kant is.']] }
    ],
    dialogue: {
      t: 'Uitverkoop!', place: 'İstanbul 🇹🇷',
      lines: [
        ['Ece', 'Bak, «Efsane Cuma»! Her şey yarı yarıya indirimli.', 'Kijk, «Legendarische Vrijdag»! Alles voor de helft afgeprijsd.'],
        ['Ruud', 'Güya. Geçen hafta bu ceketin fiyatı daha düşüktü. Önce artırıp sonra indiriyorlar.', 'Zogenaamd. Vorige week was dit jasje goedkoper. Eerst verhogen ze de prijs en dan verlagen ze hem.'],
        ['Ece', 'Sen de her şeyden şüpheleniyorsun! Bak, şu televizyon ötekinin yarı fiyatına.', 'Jij wantrouwt ook alles! Kijk, die televisie kost de helft van de andere.'],
        ['Ruud', 'Bizim televizyonumuz var. Sanki evde hiç ekran yokmuş gibi davranıyorsun.', 'We hebben een televisie. Je doet alsof er thuis geen enkel scherm is.'],
        ['Ece', 'Ama bu daha büyük! Üstelik on iki taksit yapıyorlar.', 'Maar deze is groter! Bovendien kun je in twaalf termijnen betalen.'],
        ['Ruud', 'Taksitle alınca ucuzmuş gibi geliyor, ama faiziyle iki katını ödüyorsun.', 'Op afbetaling lijkt het goedkoop, maar met de rente betaal je het dubbele.'],
        ['Ece', 'Tamam, haklısın. Peki şu küçücük hoparlör? Sadece dört yüz lira.', 'Oké, je hebt gelijk. En dat piepkleine speakertje dan? Maar vierhonderd lira.'],
        ['Ruud', 'İhtiyacın var mı?', 'Heb je het nodig?'],
        ['Ece', 'Azıcık… Yani, hayır. Ama çok tatlı!', 'Een heel klein beetje… Nou ja, nee. Maar het is zo schattig!'],
        ['Ruud', 'İşte reklam böyle çalışıyor. Ne kadar çok bakarsan o kadar çok istersin. Hadi çay içmeye gidelim, o bedava değil ama gerekli.', 'Kijk, zo werkt reclame. Hoe langer je kijkt, hoe meer je het wilt. Kom, we gaan thee drinken; dat is niet gratis, maar wel nodig.']
      ],
      q: [
        { t: 'mc', q: 'Ruud indirime neden inanmıyor?', o: ['Önce fiyatı artırıp sonra indiriyorlar', 'Mağaza çok uzakta', 'Ceket çok küçük'] },
        { t: 'mc', q: 'Ruud’a göre taksitle alınca ne oluyor?', o: ['Faiziyle iki katını ödüyorsun', 'Daha ucuza geliyor', 'Garanti bitiyor'] },
        { t: 'mc', q: 'Ece’nin hoparlöre ihtiyacı var mı?', o: ['Hayır, aslında yok', 'Evet, çok var', 'Eskisi bozuldu'] }
      ]
    },
    culture: { t: 'Taksit, altın en de kunst van het sparen', html: `<p>Bijna alles koop je in Turkije <b>taksitle</b>: in termijnen op je creditcard, van een koelkast tot een winterjas. Bij de kassa vraagt men standaard <i>Tek çekim mi, taksit mi?</i> (in één keer of in termijnen?). Door de jarenlange hoge <b>enflasyon</b> is geld dat blijft liggen snel minder waard, en dat verandert hoe mensen ermee omgaan.</p>
<p>Sparen doet men daarom liever in <b>altın</b> (goud) dan in lira. Op een bruiloft spelden gasten gouden muntjes op het bruidspaar, de <b>çeyrek altın</b> (kwartje goud), en in veel huizen ligt spaargeld «onder het kussen»: <i>yastık altı</i>. Vrouwen sparen samen in een <b>altın günü</b>: elke maand krijgt een ander de pot.</p>
<p>💰 Het bijbehorende spreekwoord: <i>Ayağını yorganına göre uzat</i>: strek je voeten naar je deken, oftewel: zet de tering naar de nering.</p>` },
    ex: [
      { t: 'cloze', s: 'Hiçbir şey olmamış ___ davranıyor.', h: 'alsof', a: ['gibi'], o: ['gibi', 'kadar', 'diye'], nl: 'Hij doet alsof er niets gebeurd is.', tag: 'tr-alsof' },
      { t: 'cloze', s: 'Beni tanımıyor___ gibi baktı.', h: 'alsof', a: ['muş'], o: ['muş', 'du', 'sa'], nl: 'Hij keek alsof hij me niet kende.', tag: 'tr-alsof' },
      { t: 'cloze', s: '___ ben bilmiyorum!', h: 'alsof', a: ['Sanki'], o: ['Sanki', 'Güya', 'Keşke'], nl: 'Alsof ik dat niet weet!', tag: 'tr-alsof' },
      { t: 'mc', q: 'Wat is het verschil? «Söylediğim gibi» ↔ «Söylemişim gibi»', o: ['zoals ik zei (echt) ↔ alsof ik het gezegd heb (niet echt)', 'alsof ik het zei ↔ zoals ik zei', 'geen verschil'], tag: 'tr-alsof' },
      { t: 'cloze', s: 'Fiyatlar ___ artıyor.', h: 'steeds verder', a: ['gittikçe'], o: ['gittikçe', 'gayet', 'güya'], nl: 'De prijzen stijgen steeds verder.', tag: 'tr-graad' },
      { t: 'cloze', s: 'Ne kadar çok kazanırsan ___ kadar çok harcarsın.', a: ['o'], o: ['o', 'bu', 'ne'], nl: 'Hoe meer je verdient, hoe meer je uitgeeft.', tag: 'tr-graad' },
      { t: 'cloze', s: 'Bu telefon ötekinin iki ___ fiyatında.', h: 'keer', a: ['katı'], o: ['katı', 'yarısı', 'kadar'], nl: 'Deze telefoon kost het dubbele van de andere.', tag: 'tr-graad' },
      { t: 'cloze', s: 'San___ kadar pahalı değil.', h: 'als ik', a: ['dığım'], o: ['dığım', 'mak', 'arak'], nl: 'Het is niet zo duur als ik dacht.', tag: 'tr-graad' },
      { t: 'mc', q: 'Wat betekent «fazla pahalı»?', o: ['te duur', 'tamelijk duur', 'niet zo duur'], tag: 'tr-graad' },
      { t: 'mc', q: 'Hoe zeg je «piepklein»?', o: ['küçücük', 'küçükcük', 'küçükçük'], x: '⚠️ Uitzondering: de k aan het eind valt weg vóór -cik (küçük → küçücük, sıcak → sıcacık), omdat twee k-klanken met een c ertussen struikelen.', tag: 'tr-graad' },
      { t: 'mc', q: 'En «een heel klein beetje»?', o: ['azıcık', 'azcık', 'azçık'], x: '⚠️ Uitzondering: hier komt er juist een klinker bij (az-ı-cık), omdat z en c anders botsen.', tag: 'tr-graad' },
      { t: 'mc', q: 'Wat betekent «yeşilimsi»?', o: ['groenig', 'heel groen', 'niet groen'], tag: 'tr-graad' },
      { t: 'mc', q: 'Wat betekent «güya»?', o: ['zogenaamd', 'gratis', 'helaas'], tag: 'vocab' },
      { t: 'tr', nl: 'Neem zoveel je wilt.', a: ['İstediğin kadar al.', 'İstediğiniz kadar alın.'], tag: 'tr-graad' },
      { t: 'tr', nl: 'Je praat alsof we geen geld hebben.', a: ['Sanki paramız yokmuş gibi konuşuyorsun.', 'Paramız yokmuş gibi konuşuyorsun.', 'Sanki hiç paramız yokmuş gibi konuşuyorsun.'], tag: 'tr-alsof' },
      { t: 'tr', nl: 'Voor zover ik weet, is het gratis.', a: ['Bildiğim kadarıyla bedava.', 'Bildiğim kadarıyla ücretsiz.'], tag: 'tr-graad' },
      { t: 'order', s: 'Taksitle alınca ucuzmuş gibi geliyor, ama iki katını ödüyorsun.', nl: 'Op afbetaling lijkt het goedkoop, maar je betaalt het dubbele.', tag: 'tr-alsof' },
      { t: 'match', p: [['reklam', 'reclame'], ['borç', 'schuld'], ['faiz', 'rente'], ['gelir', 'inkomen'], ['marka', 'merk'], ['ihtiyaç', 'behoefte']], tag: 'vocab' }
    ],
    reading: {
      t: 'İhtiyaç mı, istek mi?', type: 'Column',
      p: [
        ['Geçen ay kredi kartı ekstreme baktım ve şaşırdım: gelirimin yarısından fazlasını harcamışım. Oysa hiçbir şey almamış gibiydim.', 'Vorige maand keek ik naar het overzicht van mijn creditcard en schrok: ik bleek meer dan de helft van mijn inkomen te hebben uitgegeven. En toch voelde het alsof ik niets had gekocht.'],
        ['Sorun büyük harcamalar değildi. Sorun, küçücük alışverişlerdi: bir kahve, bir uygulama, «son üç ürün!» yazan bir tişört. Reklamlar bize sürekli bir şey eksikmiş gibi hissettiriyor.', 'Het probleem waren niet de grote uitgaven. Het probleem waren de piepkleine aankopen: een koffie, een app, een T-shirt waar «laatste drie stuks!» bij stond. Reclames geven ons voortdurend het gevoel alsof er iets ontbreekt.'],
        ['Bir ay boyunca basit bir kural denedim: bir şey almadan önce yirmi dört saat bekledim. Sonuç? İstediğim şeylerin üçte ikisini ertesi gün artık istemiyordum.', 'Een maand lang probeerde ik een eenvoudige regel: voordat ik iets kocht, wachtte ik vierentwintig uur. Het resultaat? Tweederde van wat ik wilde, wilde ik de volgende dag al niet meer.'],
        ['Ne kadar az alırsam o kadar rahatladım. Evim de, kafam da gittikçe boşalıyor. Annemin dediği gibi: «Ayağını yorganına göre uzat.»', 'Hoe minder ik kocht, hoe rustiger ik werd. Zowel mijn huis als mijn hoofd raken steeds leger. Zoals mijn moeder zegt: «Strek je voeten naar je deken.»']
      ],
      gl: [['ekstre', 'rekeningoverzicht'], ['sürekli', 'voortdurend'], ['eksik', 'ontbrekend'], ['ertesi gün', 'de volgende dag'], ['rahatlamak', 'tot rust komen'], ['boşalmak', 'leeg raken']],
      q: [
        { t: 'mc', q: 'Yazar gelirinin ne kadarını harcamış?', o: ['Yarısından fazlasını', 'Üçte birini', 'Hepsini'] },
        { t: 'mc', q: 'Asıl sorun neydi?', o: ['Küçük alışverişler', 'Büyük harcamalar', 'Kira'] },
        { t: 'mc', q: 'Yazar hangi kuralı denedi?', o: ['Almadan önce yirmi dört saat beklemek', 'Hiç alışveriş yapmamak', 'Sadece nakit kullanmak'] }
      ]
    },
    say: [['Hiçbir şey olmamış gibi davranıyor.', 'Hij doet alsof er niets gebeurd is.'], ['Fiyatlar gittikçe artıyor.', 'De prijzen stijgen steeds verder.'], ['Sandığım kadar pahalı değil.', 'Het is niet zo duur als ik dacht.'], ['Küçücük bir dükkân, ama her şey var.', 'Een piepklein winkeltje, maar ze hebben alles.']],
    task: { nl: 'Schrijf 6 zinnen over een aankoop waar je spijt van hebt, of over reclame die je irriteert. Gebruik sanki … -miş gibi, gittikçe of giderek, ne kadar … o kadar, een verhouding (iki katı, yarısı, yüzde…) en een verkleinwoord (küçücük, azıcık).', model: 'Geçen yıl internetten pahalı bir koşu bandı aldım. Reklamda sanki herkes her gün koşuyormuş gibi gösteriliyordu. Normal fiyatının yarısına satılıyordu, ben de inandım. İlk hafta kullandım, sonra gittikçe daha az. Şimdi küçücük salonumuzda duruyor ve üstüne çamaşır asıyoruz. Ne kadar çok bakarsam o kadar pişman oluyorum.' },
    scenario: { nl: 'Je loopt met je vriendin Ece door een winkelcentrum tijdens de grote uitverkoop. Ze wil alles kopen; jij bent kritisch.', role: 'You are Ece, an enthusiastic shopper in an İstanbul mall during a big sale. Point at bargains (Her şey yarı yarıya indirimli! Sadece dört yüz lira!), defend buying on instalments, use diminutives (küçücük, azıcık) and ask the learner what they would buy and what they last regretted buying. Let the learner challenge you; respond to sanki … gibi remarks with humour. Use B2 Turkish.', goal: 'Reageer kritisch op de aanbiedingen met sanki … gibi en vertel over een aankoop waar je spijt van had.' }
  });
})(window.SPT);
