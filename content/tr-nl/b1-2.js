/* Turks voor Nederlandstaligen — niveau B1, units 3–4 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── B1 · 3 ───────────────────────── */
  U({
    id: 'tr-b1-03', level: 'B1', icon: '🎬', title: 'En sevdiğim dizi', nl: 'Films en series: de bijzin met -diği',
    goals: ['Over films, series en boeken praten en iets aanraden', 'Bijzinnen maken met -diğim, -diğin, -diği (die ik…, die jij…)', 'De toekomstvorm -eceğim gebruiken in een bijzin', 'Kiezen tussen -en en -diği'],
    vocab: [
      ['bölüm', 'aflevering / hoofdstuk'], ['sezon', 'seizoen (van een serie)'], ['yönetmen', 'regisseur'], ['oyuncu', 'acteur / speler'], ['başrol', 'hoofdrol'], ['senaryo', 'scenario'], ['sahne', 'scène / podium'],
      ['konu', 'onderwerp / verhaal'], ['karakter', 'personage'], ['son', 'einde / laatste'], ['altyazı', 'ondertiteling'], ['dublaj', 'nasynchronisatie'], ['roman', 'roman'], ['yazar', 'schrijver'],
      ['şiir', 'gedicht'], ['sayfa', 'bladzijde'], ['tavsiye etmek', 'aanraden'], ['beğenmek', 'mooi / goed vinden'], ['hoşuna gitmek', 'bevallen'], ['sıkılmak', 'zich vervelen'], ['heyecanlı', 'spannend'],
      ['sürükleyici', 'meeslepend'], ['duygusal', 'ontroerend / emotioneel'], ['komedi', 'komedie'], ['korku filmi', 'horrorfilm'], ['belgesel', 'documentaire'], ['yayınlanmak', 'uitgezonden worden'],
      ['izleyici', 'kijker'], ['eleştiri', 'kritiek / recensie'], ['ödül', 'prijs (onderscheiding)']
    ],
    grammar: [
      { t: 'Die ik…: de bijzin met -diğim', es: 'Sıfat-fiil: -dik',
        html: `<p>In unit 2 was het woord na de bijzin het <b>onderwerp</b>: <i>kitap oku<b>yan</b> adam</i> (de man die een boek leest). Is het woord erachter <b>niet</b> het onderwerp («het boek dat <b>ik</b> lees»), dan gebruik je <b>-dik</b> + een bezitsuitgang die zegt <b>wie</b> het doet: <i>oku-<b>duğ</b>-<b>um</b> kitap</i>, letterlijk «mijn-gelezen boek».</p>
<p>De uitgang is <b>-dik / -dık / -duk / -dük</b>, na een harde medeklinker <b>-tik / -tık / -tuk / -tük</b>. Vóór de klinker van de bezitsuitgang wordt de k een <b>ğ</b>: <i>gel-<b>diğ</b>-im</i>, <i>al-<b>dığ</b>-ın</i>, <i>oku-<b>duğ</b>-u</i>, <i>gör-<b>düğ</b>-ümüz</i>, <i>git-<b>tiğ</b>-iniz</i>.</p>
<p>Wie het doet, kun je er in de <b>«van»-vorm</b> voor zetten: <i><b>benim</b> okuduğum kitap</i>, <i><b>Ali’nin</b> okuduğu kitap</i> (het boek dat Ali leest). Net als bij <i>Ali’nin evi</i>: van-Ali zijn-gelezen boek.</p>
<p><b>-dik</b> is tegenwoordige én verleden tijd: <i>izlediğim dizi</i> = de serie die ik kijk óf keek.</p>
<p><b>Ontkenning:</b> <i>izle<b>me</b>diğim film</i> (de film die ik niet heb gezien).</p>
<p><b>⚠️ Uitzondering:</b> bij <b>onlar</b> blijft de <b>k</b> staan: <i>git<b>tik</b>leri yer</i> (de plek waar zij heen gingen), niet <s>gittiğleri</s>. <b>Waarom?</b> De k wordt alleen ğ <b>tussen twee klinkers</b>. Bij <i>-leri</i> volgt er een medeklinker (l) op de k, dus er is geen reden om te verzachten. Hetzelfde zie je bij <i>çocuk</i> → <i>çocuğu</i> maar <i>çocukları</i>.</p>`,
        table: [['wie', 'okumak', 'gitmek', 'voorbeeld'], ['ben', 'okuduğum', 'gittiğim', 'okuduğum kitap'], ['sen', 'okuduğun', 'gittiğin', 'gittiğin okul'], ['o', 'okuduğu', 'gittiği', 'Ali’nin okuduğu kitap'],
          ['biz', 'okuduğumuz', 'gittiğimiz', 'gittiğimiz restoran'], ['siz', 'okuduğunuz', 'gittiğiniz', 'okuduğunuz gazete'], ['onlar ⚠️', 'okudukları', 'gittikleri', 'gittikleri yer']],
        sum: 'Okuduğum kitap, Ali’nin izlediği film, gittikleri yer.',
        ex: [['Dün izlediğim film çok güzeldi.', 'De film die ik gisteren zag was heel mooi.'], ['Senin tavsiye ettiğin diziye başladım.', 'Ik ben begonnen aan de serie die jij aanraadde.'], ['En sevdiğim yazar Orhan Pamuk.', 'Mijn lievelingsschrijver is Orhan Pamuk.'], ['Bu, hiç okumadığım bir roman.', 'Dit is een roman die ik nooit gelezen heb.']] },
      { t: 'Die ik zal…: -eceğim', es: 'Sıfat-fiil: -ecek',
        html: `<p>Voor iets wat <b>nog moet gebeuren</b> gebruik je <b>-ecek / -acak</b> + bezitsuitgang, met dezelfde k → ğ: <i>oku-<b>yacağ</b>-ım kitap</i> (het boek dat ik ga lezen), <i>izle-<b>yeceğ</b>-imiz film</i> (de film die we gaan kijken), <i>git-<b>eceğ</b>-in yer</i> → <i>gi<b>d</b>eceğin yer</i>.</p>
<p><i>Bu akşam izle<b>yeceğimiz</b> film bir komedi.</i> (De film die we vanavond gaan kijken is een komedie.) · <i>Yap<b>acak</b> çok işim var.</i> (Ik heb veel werk te doen.)</p>
<p>Die laatste zonder bezitsuitgang is een vaste constructie: <b>-ecek + naamwoord</b> = «iets om te…»: <i>ye<b>cek</b> bir şey</i> (iets te eten), <i>iç<b>ecek</b></i> (drankje), <i>oku<b>yacak</b> bir kitap</i> (een boek om te lezen), <i>söyle<b>yecek</b> bir şeyim yok</i> (ik heb niets te zeggen).</p>
<p>Zonder naamwoord erachter wordt de bijzin zelf een naamwoord: <i>Söyle<b>diğin</b>i anlamadım.</i> (Ik begreep niet wat je zei.) · <i>İste<b>diğin</b>i al.</i> (Neem wat je wilt.)</p>`,
        table: [['tijd', 'vorm', 'voorbeeld'], ['nu / verleden', '-diğim', 'okuduğum kitap'], ['toekomst', '-eceğim', 'okuyacağım kitap'], ['iets om te…', '-ecek', 'okuyacak bir kitap'], ['wat ik…', '-diğimi', 'Söylediğimi anladın mı?']],
        sum: 'Okuduğum kitap ↔ okuyacağım kitap. Yiyecek bir şey.',
        ex: [['Yarın gideceğimiz konser çok pahalı.', 'Het concert waar we morgen heen gaan is erg duur.'], ['Evde yiyecek bir şey yok.', 'Er is thuis niets te eten.'], ['Söylediğini duymadım.', 'Ik heb niet gehoord wat je zei.']] },
      { t: '-en of -diği? En: toen, waar, omdat', es: '-en mi, -dik mi?',
        html: `<p><b>De keuze</b>: stel de vraag «wie doet het?»<br>• Doet het woord <b>na</b> de bijzin het zelf → <b>-en</b>: <i>beni ara<b>yan</b> adam</i> (de man die mij belde).<br>• Doet <b>iemand anders</b> het → <b>-diği</b>: <i>benim ara<b>dığım</b> adam</i> (de man die ik belde).</p>
<p>Eén letter verschil, heel andere betekenis: <i>seven kadın</i> (de vrouw die liefheeft) ↔ <i>sevdiğim kadın</i> (de vrouw van wie ik hou).</p>
<p>Met <b>-diği</b> + een paar vaste woorden maak je de meest gebruikte bijzinnen:<br>• <b>-diği zaman</b> (wanneer / toen): <i>İstanbul’a git<b>tiğim zaman</b> seni ararım.</i><br>• <b>-diği yer</b> (waar): <i>Otur<b>duğum yer</b> çok sessiz.</i> (Waar ik woon is het heel stil.)<br>• <b>-diği gibi</b> (zoals): <i>Söyle<b>diğin gibi</b> yaptım.</i> (Ik heb het gedaan zoals je zei.)<br>• <b>-diği kadar</b> (zoveel als): <i>İste<b>diğin kadar</b> al.</i> (Neem zoveel je wilt.)<br>• <b>-diği için</b> (omdat): <i>Geç kal<b>dığım için</b> özür dilerim.</i> (Sorry dat ik te laat ben.)</p>
<p>Je mening over een film: <i>Beğendim.</i> (Ik vond hem goed.) · <i>Hoşuma gitti.</i> (Hij beviel me.) · <i>Çok sürükleyiciydi.</i> · <i>Sonu beni çok şaşırttı.</i> (Het einde verraste me erg.) · <i>Sıkıldım.</i> (Ik verveelde me.) · <i>Kesinlikle tavsiye ederim.</i></p>`,
        table: [['-en (hij doet het zelf)', '-diği (iemand anders doet het)'], ['beni arayan adam', 'aradığım adam'], ['kitap okuyan kız', 'kızın okuduğu kitap'], ['seni seven biri', 'senin sevdiğin biri'], ['bizi davet eden arkadaş', 'davet ettiğimiz arkadaş']],
        sum: 'Beni arayan adam ↔ aradığım adam.',
        ex: [['Bana kitabı veren kız Elif’ti.', 'Het meisje dat mij het boek gaf was Elif.'], ['Elif’in bana verdiği kitap çok güzel.', 'Het boek dat Elif mij gaf is heel mooi.'], ['Geldiğin zaman haber ver.', 'Laat het weten wanneer je komt.'], ['Doğduğum şehir çok küçük.', 'De stad waar ik geboren ben is heel klein.']] }
    ],
    dialogue: {
      t: 'Wat zullen we kijken?', place: 'İzmir 🇹🇷',
      lines: [
        ['Selin', 'Bu akşam ne izleyelim? Geçen hafta başladığımız dizi nasıldı?', 'Wat zullen we vanavond kijken? Hoe was de serie waar we vorige week aan begonnen?'],
        ['Bram', 'Açıkçası pek beğenmedim. İlk bölümde çok sıkıldım.', 'Eerlijk gezegd vond ik hem niet zo goed. Ik verveelde me erg in de eerste aflevering.'],
        ['Selin', 'Ama herkesin konuştuğu dizi bu! Ödül bile almış.', 'Maar dit is de serie waar iedereen over praat! Hij heeft zelfs een prijs gewonnen.'],
        ['Bram', 'Olabilir. Senin tavsiye ettiğin film ne oldu? Adını unuttum.', 'Kan zijn. Hoe zit het met de film die jij aanraadde? Ik ben de naam vergeten.'],
        ['Selin', '«Kış Uykusu» mu? Nuri Bilge Ceylan’ın çektiği film.', '«Kış Uykusu»? De film die Nuri Bilge Ceylan heeft gemaakt.'],
        ['Bram', 'Evet! Kapadokya’da geçen film, değil mi? Gittiğimiz otele benziyor.', 'Ja! De film die zich in Cappadocië afspeelt, toch? Het lijkt op het hotel waar wij waren.'],
        ['Selin', 'Aynen. Ama üç saatten uzun. Altyazı ister misin?', 'Precies. Maar hij duurt langer dan drie uur. Wil je ondertiteling?'],
        ['Bram', 'Türkçe altyazı olsun. Anlamadığım kelimeleri yazarım.', 'Doe maar Turkse ondertiteling. De woorden die ik niet begrijp schrijf ik op.'],
        ['Selin', 'Harika fikir. Yiyecek bir şey var mı?', 'Geweldig idee. Is er iets te eten?'],
        ['Bram', 'Dün aldığım çekirdekler var. Gerçek bir Türk gibi izleyeceğiz!', 'Er zijn de zonnebloempitten die ik gisteren heb gekocht. We gaan kijken als echte Turken!']
      ],
      q: [
        { t: 'mc', q: 'Bram diziyi neden beğenmedi?', o: ['Çünkü ilk bölümde sıkıldı', 'Çünkü çok uzundu', 'Çünkü altyazı yoktu'] },
        { t: 'mc', q: 'Selin’in tavsiye ettiği film nerede geçiyor?', o: ['Kapadokya’da', 'İstanbul’da', 'İzmir’de'] },
        { t: 'mc', q: 'Bram filmi nasıl izlemek istiyor?', o: ['Türkçe altyazıyla', 'Dublajlı', 'Altyazısız'] }
      ]
    },
    culture: { t: 'Turkse dizi’s veroveren de wereld', html: `<p>Turkije is na de Verenigde Staten de grootste exporteur van televisieseries ter wereld. Een <b>dizi</b> is geen korte serie: één aflevering duurt vaak <b>twee tot drie uur</b>, en er komt er elke week één. Van Latijns-Amerika tot het Midden-Oosten en de Balkan kijken honderden miljoenen mensen mee.</p>
<p>De genres: historische drama’s zoals <i>Muhteşem Yüzyıl</i> (over sultan Süleyman) en <i>Diriliş: Ertuğrul</i>, familiedrama’s aan de Bosporus, en romantische komedies. Voor wie Turks leert zijn ze goud waard: veel alledaagse dialogen, duidelijke uitspraak en eindeloos veel <i>-miş</i>.</p>
<p>🌻 Bij het kijken horen <b>çekirdek</b> (zonnebloempitten, die je met je tanden kraakt) en thee. In de filmkunst zijn <b>Nuri Bilge Ceylan</b> (Gouden Palm voor <i>Kış Uykusu</i>) en <b>Yılmaz Güney</b> de grote namen; in de literatuur <b>Orhan Pamuk</b> (Nobelprijs 2006), <b>Yaşar Kemal</b> en <b>Elif Şafak</b>.</p>` },
    ex: [
      { t: 'cloze', s: 'Dün izle___ film çok güzeldi.', h: 'die ik', a: ['diğim'], o: ['diğim', 'yen', 'dığım'], nl: 'De film die ik gisteren zag was heel mooi.', tag: 'tr-dik' },
      { t: 'cloze', s: 'Senin oku___ kitap hangisi?', h: 'dat jij', a: ['duğun'], o: ['duğun', 'yan', 'duğum'], nl: 'Welk boek is het dat jij leest?', tag: 'tr-dik' },
      { t: 'cloze', s: 'Ali’nin git___ okul çok uzak.', h: 'waar hij', a: ['tiği'], o: ['tiği', 'diği', 'den'], nl: 'De school waar Ali naartoe gaat is heel ver.', x: 'Na de harde t: -tiği.', tag: 'tr-dik' },
      { t: 'mc', q: 'Hoe zeg je «de plek waar zij heen gingen»?', o: ['gittikleri yer', 'gittiğleri yer', 'giden yer'], x: '⚠️ Uitzondering: bij onlar blijft de k staan. De k wordt alleen ğ tussen twee klinkers; in -leri volgt er een l.', tag: 'tr-dik' },
      { t: 'cloze', s: 'Bu, hiç oku___dığım bir roman.', h: 'niet', a: ['ma'], o: ['ma', 'me', 'mı'], nl: 'Dit is een roman die ik nooit gelezen heb.', tag: 'tr-dik' },
      { t: 'cloze', s: 'Yarın izle___ film bir komedi.', h: 'die we gaan', a: ['yeceğimiz'], o: ['yeceğimiz', 'diğimiz', 'yen'], nl: 'De film die we morgen gaan kijken is een komedie.', tag: 'tr-ecegi' },
      { t: 'cloze', s: 'Evde ye___ bir şey yok.', h: 'om te', a: ['cek'], o: ['cek', 'diğim', 'yen'], nl: 'Er is thuis niets te eten.', tag: 'tr-ecegi' },
      { t: 'mc', q: 'Wat betekent «beni arayan adam»?', o: ['de man die mij belde', 'de man die ik belde', 'de man belt mij'], x: '-en: het woord erna (adam) doet het zelf.', tag: 'tr-en' },
      { t: 'mc', q: 'Wat betekent «aradığım adam»?', o: ['de man die ik belde', 'de man die mij belde', 'ik bel de man'], x: '-diğim: ík doe het, niet de man.', tag: 'tr-dik' },
      { t: 'cloze', s: 'İstanbul’a git___ zaman seni ararım.', h: 'wanneer ik', a: ['tiğim'], o: ['tiğim', 'en', 'tiğin'], nl: 'Wanneer ik naar İstanbul ga, bel ik je.', tag: 'tr-dik' },
      { t: 'cloze', s: 'Söyle___ gibi yaptım.', h: 'zoals jij', a: ['diğin'], o: ['diğin', 'yen', 'diğim'], nl: 'Ik heb het gedaan zoals je zei.', tag: 'tr-dik' },
      { t: 'mc', q: 'Wat is een «belgesel»?', o: ['een documentaire', 'een horrorfilm', 'een recensie'], tag: 'vocab' },
      { t: 'tr', nl: 'Mijn lievelingsfilm is erg oud.', a: ['En sevdiğim film çok eski.'], tag: 'tr-dik' },
      { t: 'tr', nl: 'Ik heb niet begrepen wat je zei.', a: ['Söylediğini anlamadım.', 'Ne dediğini anlamadım.', 'Dediğini anlamadım.'], tag: 'tr-dik' },
      { t: 'tr', nl: 'Het boek dat ik lees is heel spannend.', a: ['Okuduğum kitap çok heyecanlı.', 'Benim okuduğum kitap çok heyecanlı.'], tag: 'tr-dik' },
      { t: 'order', s: 'Senin tavsiye ettiğin diziyi dün akşam izlemeye başladık.', nl: 'We zijn gisteravond begonnen met kijken naar de serie die jij aanraadde.', tag: 'tr-dik' },
      { t: 'match', p: [['bölüm', 'aflevering'], ['yönetmen', 'regisseur'], ['oyuncu', 'acteur'], ['altyazı', 'ondertiteling'], ['yazar', 'schrijver'], ['ödül', 'prijs']], tag: 'vocab' }
    ],
    reading: {
      t: 'Bu hafta ne izlesek?', type: 'Recensie',
      p: [
        ['Bu hafta size tavsiye edeceğim dizi «Sahildeki Ev». Geçen ay yayınlanmaya başlayan dizi şimdiden milyonlarca izleyici topladı.', 'De serie die ik u deze week ga aanraden is «Het huis aan de kust». De serie, die vorige maand begon, heeft nu al miljoenen kijkers getrokken.'],
        ['Dizi, İstanbul’dan küçük bir Ege kasabasına taşınan bir ailenin hikâyesini anlatıyor. Başrolde oynayan genç oyuncu gerçekten çok başarılı.', 'De serie vertelt het verhaal van een familie die van İstanbul naar een klein stadje aan de Egeïsche Zee verhuist. De jonge acteur die de hoofdrol speelt is echt heel goed.'],
        ['En beğendiğim şey, senaristin yazdığı diyaloglar: çok doğal. Beğenmediğim tek şey bölümlerin uzunluğu. Her bölüm iki buçuk saat!', 'Wat ik het mooist vind, zijn de dialogen die de scenarist heeft geschreven: heel natuurlijk. Het enige wat ik niet goed vind is de lengte van de afleveringen. Elke aflevering duurt tweeënhalf uur!'],
        ['Yine de izlediğim her bölümün sonunda «bir tane daha» diyorum. Duygusal hikâyeleri seven herkese tavsiye ederim.', 'Toch zeg ik aan het eind van elke aflevering die ik kijk «nog eentje». Ik raad hem iedereen aan die van ontroerende verhalen houdt.']
      ],
      gl: [['şimdiden', 'nu al'], ['kasaba', 'stadje'], ['başarılı', 'succesvol / goed'], ['doğal', 'natuurlijk'], ['yine de', 'toch']],
      q: [
        { t: 'mc', q: 'Dizi neyi anlatıyor?', o: ['Küçük bir kasabaya taşınan bir aileyi', 'Bir sultanın hayatını', 'Bir yazarın romanını'] },
        { t: 'mc', q: 'Yazarın en beğendiği şey ne?', o: ['Diyaloglar', 'Bölümlerin uzunluğu', 'Müzik'] },
        { t: 'mc', q: 'Yazarın beğenmediği şey ne?', o: ['Bölümlerin çok uzun olması', 'Başroldeki oyuncu', 'Hikâyenin sonu'] }
      ]
    },
    say: [['En sevdiğim dizi bu.', 'Dit is mijn lievelingsserie.'], ['Dün izlediğim film çok güzeldi.', 'De film die ik gisteren zag was heel mooi.'], ['Söylediğini anlamadım.', 'Ik heb niet begrepen wat je zei.'], ['Kesinlikle tavsiye ederim.', 'Ik raad het absoluut aan.']],
    task: { nl: 'Schrijf een korte recensie van 5 of 6 zinnen over een film, serie of boek. Gebruik minstens drie bijzinnen met -diğim / -diği (de film die ik zag, wat ik mooi vond), één met -en (de acteur die… speelt) en zeg aan wie je het aanraadt.', model: 'Geçen hafta izlediğim film bir Türk komedisiydi. Başrolde oynayan oyuncu çok komikti. En beğendiğim sahne düğün sahnesiydi. Anlamadığım bazı şakalar vardı, ama çok güldüm. Beğenmediğim tek şey sonuydu. Türkçe öğrenen herkese tavsiye ederim.' },
    scenario: { nl: 'Je zit met Selin op de bank en jullie moeten kiezen wat jullie vanavond kijken.', role: 'You are Selin, a film and series fan in İzmir. Discuss what to watch tonight: ask about the last film or series the learner watched (En son izlediğin film neydi?), what they liked and did not like (En beğendiğin şey neydi?), recommend a Turkish dizi or film using relative clauses with -diği and -en, and agree on something. Use B1 Turkish.', goal: 'Vertel over iets wat je gezien hebt, wat je ervan vond, en kies samen iets.' }
  });

  /* ───────────────────────── B1 · 4 ───────────────────────── */
  U({
    id: 'tr-b1-04', level: 'B1', icon: '💭', title: 'Bence haklısın, ama…', nl: 'Je mening geven en navertellen wat iemand zei',
    goals: ['Je mening geven en het eens of oneens zijn', 'Navertellen wat iemand zei of denkt met -diğini', 'Zeggen wat je wilt dat een ander doet met -mesini', 'Een betoog opbouwen met verbindingswoorden'],
    vocab: [
      ['fikir', 'idee / mening'], ['görüş', 'opvatting'], ['bence', 'volgens mij'], ['haklı', 'gelijk hebbend'], ['haksız', 'ongelijk hebbend'], ['aynı fikirde olmak', 'het eens zijn'], ['tartışmak', 'discussiëren'],
      ['mesele', 'kwestie'], ['avantaj', 'voordeel'], ['dezavantaj', 'nadeel'], ['fayda', 'nut'], ['zarar', 'schade'], ['gerekli', 'nodig'], ['gereksiz', 'onnodig'], ['mutlaka', 'beslist'],
      ['aslında', 'eigenlijk'], ['açıkçası', 'eerlijk gezegd'], ['ayrıca', 'bovendien'], ['öte yandan', 'aan de andere kant'], ['sonuç olarak', 'kortom / tot slot'], ['örneğin', 'bijvoorbeeld'], ['yani', 'dus / ik bedoel'],
      ['sosyal medya', 'sociale media'], ['bağımlı', 'verslaafd'], ['iletişim', 'communicatie'], ['sanmak', 'menen / denken'], ['tahmin etmek', 'raden / schatten'], ['kabul etmek', 'accepteren / toegeven'],
      ['karşı çıkmak', 'ertegen ingaan'], ['ikna etmek', 'overtuigen'], ['rica etmek', 'verzoeken']
    ],
    grammar: [
      { t: 'Zeggen en denken dat…: -diğini', es: 'Dolaylı anlatım: -diğini',
        html: `<p>«Dat» bestaat in het Turks niet als los woord. Je neemt de <b>-dik</b>-vorm van unit 3 en zet er de <b>-i van het lijdend voorwerp</b> achter, want de hele bijzin is het voorwerp van «zeggen» of «denken»: <i>gel-diğ-i-<b>ni</b> söyledi</i> (hij zei dat hij kwam).</p>
<p>De bezitsuitgang zegt weer <b>wie</b>: <i>gel<b>diğimi</b></i> (dat ik kom / kwam), <i>gel<b>diğini</b></i> (dat jij komt · dat hij komt), <i>gel<b>diğimizi</b></i>, <i>gel<b>diğinizi</b></i>, <i>gel<b>diklerini</b></i>. Het onderwerp van de bijzin staat in de «van»-vorm: <i><b>Ali’nin</b> hasta ol<b>duğunu</b> duydum.</i> (Ik heb gehoord dat Ali ziek is.)</p>
<p>Voor de toekomst: <b>-eceğini</b>: <i>Yarın gel<b>eceğini</b> söyledi.</i> (Hij zei dat hij morgen komt.)</p>
<p>Werkwoorden die zo'n bijzin krijgen: <i>söylemek</i> (zeggen), <i>bilmek</i> (weten), <i>düşünmek</i> (denken), <i>sanmak / zannetmek</i> (menen), <i>duymak</i> (horen), <i>görmek</i>, <i>anlamak</i>, <i>inanmak</i> (met -e: <i>geldiğin<b>e</b> inanmıyorum</i>).</p>
<p>Een <b>vraag</b> navertellen: vraagwoord blijft, of je gebruikt <b>-ip -mediğini</b> voor «of»: <i>Nerede otur<b>duğumu</b> sordu.</i> (Hij vroeg waar ik woon.) · <i>Gel<b>ip</b> gel<b>meyeceğini</b> bilmiyorum.</i> (Ik weet niet of hij komt.)</p>`,
        table: [['direct', 'naverteld'], ['«Geliyorum.»', 'Geldiğini söyledi.'], ['«Geleceğim.»', 'Geleceğini söyledi.'], ['«Hastayım.»', 'Hasta olduğunu söyledi.'], ['«Nerede oturuyorsun?»', 'Nerede oturduğumu sordu.'], ['«Zamanım yok.»', 'Zamanı olmadığını söyledi.']],
        sum: 'Geldiğini söyledi. Hasta olduğunu duydum.',
        ex: [['Haklı olduğunu düşünüyorum.', 'Ik denk dat je gelijk hebt.'], ['Selin yarın geleceğini söyledi.', 'Selin zei dat ze morgen komt.'], ['Türkçe bildiğini bilmiyordum!', 'Ik wist niet dat je Turks kende!'], ['Ne zaman döneceklerini sordum.', 'Ik vroeg wanneer ze terugkomen.']] },
      { t: 'Willen dat…: -mesini', es: '-mesini istemek',
        html: `<p>Na <i>istemek</i> (willen), <i>rica etmek</i> (verzoeken), <i>söylemek</i> in de betekenis «opdragen», <i>beklemek</i> (verwachten) en <i>tavsiye etmek</i> komt geen -diğini.</p>
<p><b>⚠️ Uitzondering:</b> het is <i>Gel<b>meni</b> istiyorum.</i> (Ik wil dat je komt.), niet <s>Geldiğini istiyorum</s>. De bijzin krijgt de korte infinitief <b>-me / -ma</b> + bezitsuitgang + naamval: <i>gel-<b>me</b>-<b>n</b>-<b>i</b></i>. <b>Waarom?</b> <b>-dik</b> beschrijft een <b>feit</b>: iets wat gebeurt of gebeurd is. <b>-me</b> beschrijft een <b>handeling als idee</b>: iets wat nog niet werkelijk is, maar gewenst, gevraagd of verwacht wordt. Een wens is geen feit, dus -me.</p>
<p>Daardoor betekent hetzelfde werkwoord iets anders: <i>Gel<b>diğini</b> söyledi.</i> (Hij zei dat hij kwam: een mededeling.) ↔ <i>Gel<b>mesini</b> söyledi.</i> (Hij zei dat hij moest komen: een opdracht.)</p>
<p>Alle personen: <i>gel<b>memi</b></i> (dat ik kom), <i>gel<b>meni</b></i>, <i>gel<b>mesini</b></i>, <i>gel<b>memizi</b></i>, <i>gel<b>menizi</b></i>, <i>gel<b>melerini</b></i>.</p>
<p>Is het onderwerp <b>hetzelfde</b>, dan gewoon <i>-mek istemek</i>: <i>Gel<b>mek</b> istiyorum.</i> (Ik wil komen.)</p>
<p>Deze -me-vorm ken je al van <i>git<b>mem</b> lazım</i> (A2 unit 4): «mijn gaan is nodig».</p>`,
        table: [['', 'feit: -diğini', 'wens / opdracht: -mesini'], ['ben', 'Geldiğimi biliyor.', 'Gelmemi istiyor.'], ['sen', 'Geldiğini biliyorum.', 'Gelmeni istiyorum.'], ['o', 'Geldiğini söyledi.', 'Gelmesini söyledi.'], ['biz', 'Geldiğimizi duydu.', 'Gelmemizi rica etti.']],
        sum: 'Gelmeni istiyorum. Gelmesini söyledi.',
        ex: [['Bana yardım etmeni istiyorum.', 'Ik wil dat je me helpt.'], ['Doktor çok su içmemi söyledi.', 'De dokter zei dat ik veel water moet drinken.'], ['Beklememizi rica ettiler.', 'Ze verzochten ons te wachten.'], ['Annem geç kalmamamı istiyor.', 'Mijn moeder wil dat ik niet te laat kom.']] },
      { t: 'Je mening geven en reageren', es: 'Fikir bildirme',
        html: `<p><b>Je mening:</b> <i><b>Bence</b>…</i> · <i><b>Bana göre</b>…</i> · <i><b>Bana kalırsa</b>…</i> (als je het mij vraagt) · <i>…<b>diye düşünüyorum</b>.</i> · <i><b>Sanırım</b>…</i> (ik denk) · <i><b>Açıkçası</b>…</i> (eerlijk gezegd)</p>
<p><b>-ce / -ca</b> achter een voornaamwoord betekent «volgens»: <i>ben<b>ce</b></i>, <i>sen<b>ce</b></i> (volgens jou), <i>biz<b>ce</b></i>. Voor <i>o</i> gebruik je <i>ona göre</i>. <i>Sence hangisi daha iyi?</i> (Welke is volgens jou beter?)</p>
<p><b>Eens:</b> <i>Haklısın.</i> · <i>Katılıyorum.</i> · <i>Aynen!</i> · <i>Kesinlikle.</i> · <i>Ben de öyle düşünüyorum.</i> (Dat denk ik ook.)<br><b>Half eens:</b> <i>Haklısın, ama…</i> · <i>Bir yandan evet, öte yandan…</i> · <i>Olabilir, ama…</i><br><b>Oneens:</b> <i>Bence öyle değil.</i> · <i>Katılmıyorum.</i> · <i>Hiç sanmıyorum.</i> (Dat denk ik helemaal niet.) · <i>Yanılıyorsun.</i> (Je vergist je.)</p>
<p><b>Opbouwen:</b> <i>ilk olarak</i> (ten eerste) · <i>ayrıca</i> (bovendien) · <i>örneğin</i> (bijvoorbeeld) · <i>öte yandan</i> (anderzijds) · <i>yani</i> (dus, ik bedoel) · <i>sonuç olarak</i> (kortom).</p>
<p>Het stopwoord <b>yani</b> hoor je in elke tweede zin. Het vult stiltes, net als «nou» of «dus» in het Nederlands.</p>`,
        table: [['Turks', 'Nederlands'], ['Bence…', 'Volgens mij…'], ['Sence?', 'En volgens jou?'], ['Haklısın.', 'Je hebt gelijk.'], ['Katılmıyorum.', 'Ik ben het er niet mee eens.'], ['Öte yandan…', 'Aan de andere kant…'], ['Sonuç olarak…', 'Kortom…']],
        sum: 'Bence… Haklısın, ama… Katılmıyorum.',
        ex: [['Bence sosyal medya çok zaman alıyor.', 'Volgens mij kosten sociale media veel tijd.'], ['Sence bu doğru mu?', 'Klopt dit volgens jou?'], ['Haklısın, ama faydaları da var.', 'Je hebt gelijk, maar er zijn ook voordelen.'], ['Hiç sanmıyorum.', 'Dat denk ik helemaal niet.']] }
    ],
    dialogue: {
      t: 'Telefoons aan tafel', place: 'Ankara 🇹🇷',
      lines: [
        ['Can', 'Annem yemekte telefona bakmamamızı istiyor. Sence haklı mı?', 'Mijn moeder wil dat we tijdens het eten niet op onze telefoon kijken. Heeft ze volgens jou gelijk?'],
        ['Anouk', 'Bence çok haklı. Yemek, konuşmak için güzel bir zaman.', 'Volgens mij heeft ze groot gelijk. Het eten is een mooi moment om te praten.'],
        ['Can', 'Ama ben sadece mesajlarıma bakıyorum. Kimseyi rahatsız ettiğimi sanmıyorum.', 'Maar ik kijk alleen naar mijn berichten. Ik denk niet dat ik iemand stoor.'],
        ['Anouk', 'Katılmıyorum. Karşındaki insan onu dinlemediğini düşünüyor.', 'Daar ben ik het niet mee eens. De persoon tegenover je denkt dat je niet naar hem luistert.'],
        ['Can', 'Olabilir. Öte yandan, bazen önemli bir mesaj geliyor.', 'Kan zijn. Aan de andere kant komt er soms een belangrijk bericht.'],
        ['Anouk', 'Haklısın, ama yarım saat bekleyebilir. Araştırmalar sosyal medyanın bizi bağımlı yaptığını söylüyor.', 'Je hebt gelijk, maar dat kan een half uur wachten. Onderzoeken zeggen dat sociale media ons verslaafd maken.'],
        ['Can', 'Yani sen hiç telefona bakmıyor musun?', 'Dus jij kijkt nooit op je telefoon?'],
        ['Anouk', 'Açıkçası ben de bakıyorum. Mükemmel olduğumu söylemedim!', 'Eerlijk gezegd kijk ik ook. Ik heb niet gezegd dat ik perfect ben!'],
        ['Can', 'Tamam, beni ikna ettin. Anneme haklı olduğunu söyleyeceğim.', 'Oké, je hebt me overtuigd. Ik ga tegen mijn moeder zeggen dat ze gelijk heeft.'],
        ['Anouk', 'Bunu duymak çok hoşuna gidecek!', 'Dat zal ze heel fijn vinden om te horen!']
      ],
      q: [
        { t: 'mc', q: 'Can’ın annesi ne istiyor?', o: ['Yemekte telefona bakmamalarını', 'Daha çok mesaj yazmalarını', 'Yemeği erken yemelerini'] },
        { t: 'mc', q: 'Anouk’a göre karşıdaki insan ne düşünüyor?', o: ['Onu dinlemediğini', 'Çok meşgul olduğunu', 'Haklı olduğunu'] },
        { t: 'mc', q: 'Sonunda Can ne yapacak?', o: ['Annesine haklı olduğunu söyleyecek', 'Telefonunu satacak', 'Anouk’la tartışmaya devam edecek'] }
      ]
    },
    culture: { t: 'Discussiëren op z’n Turks', html: `<p>Turken praten graag en fel over politiek, voetbal en eten, en door elkaar heen praten is geen onbeleefdheid maar betrokkenheid. Toch zeg je «nee» zelden plat. Een directe afwijzing verzacht je met <i>Haklısın, ama…</i>, <i>Estağfurullah</i> (ach, dat mag u niet zeggen) of <i>Bilmem ki…</i> (ik weet het eigenlijk niet…).</p>
<p>Het gebaar voor «nee» is ook anders: <b>hoofd kort omhoog</b>, wenkbrauwen op, soms met een klikje van de tong (<i>cık</i>). Hoofdschudden van links naar rechts betekent «ik begrijp het niet».</p>
<p>☕ Politiek bespreek je traditioneel in het <b>kahvehane</b>. En wie echt gelijk wil krijgen, haalt een spreekwoord aan: <i>Doğru söyleyeni dokuz köyden kovarlar.</i> (Wie de waarheid zegt, wordt uit negen dorpen verjaagd.)</p>` },
    ex: [
      { t: 'cloze', s: 'Selin yarın gel___ söyledi.', h: 'dat ze zal', a: ['eceğini'], o: ['eceğini', 'diğini', 'mesini'], nl: 'Selin zei dat ze morgen komt.', tag: 'tr-digini' },
      { t: 'cloze', s: 'Ali’nin hasta ol___ duydum.', h: 'dat hij is', a: ['duğunu'], o: ['duğunu', 'masını', 'an'], nl: 'Ik heb gehoord dat Ali ziek is.', tag: 'tr-digini' },
      { t: 'cloze', s: 'Haklı ol___ düşünüyorum.', h: 'dat jij', a: ['duğunu'], o: ['duğunu', 'duğumu', 'manı'], nl: 'Ik denk dat je gelijk hebt.', tag: 'tr-digini' },
      { t: 'cloze', s: 'Nerede otur___ sordu.', h: 'waar ik', a: ['duğumu'], o: ['duğumu', 'duğunu', 'mamı'], nl: 'Hij vroeg waar ik woon.', tag: 'tr-digini' },
      { t: 'mc', q: 'Hoe zeg je «Ik wil dat je komt»?', o: ['Gelmeni istiyorum.', 'Geldiğini istiyorum.', 'Gelmek istiyorum.'], x: '⚠️ Uitzondering: na istemek geen -diğini maar -meni. -dik is voor feiten, -me voor iets wat nog niet werkelijk is: een wens.', tag: 'tr-mesini' },
      { t: 'mc', q: 'Wat betekent «Gelmesini söyledi»?', o: ['Hij zei dat hij moest komen.', 'Hij zei dat hij kwam.', 'Hij zei dat hij niet kwam.'], x: '-mesini = opdracht. «Hij zei dat hij kwam» is geldiğini söyledi.', tag: 'tr-mesini' },
      { t: 'cloze', s: 'Bana yardım et___ istiyorum.', h: 'dat jij', a: ['meni'], o: ['meni', 'tiğini', 'memi'], nl: 'Ik wil dat je me helpt.', tag: 'tr-mesini' },
      { t: 'cloze', s: 'Doktor çok su iç___ söyledi.', h: 'dat ik moet', a: ['memi'], o: ['memi', 'tiğimi', 'meni'], nl: 'De dokter zei dat ik veel water moet drinken.', tag: 'tr-mesini' },
      { t: 'mc', q: 'Het onderwerp is hetzelfde: «Ik wil komen.»', o: ['Gelmek istiyorum.', 'Gelmemi istiyorum.', 'Geldiğimi istiyorum.'], tag: 'tr-mesini' },
      { t: 'cloze', s: '___ hangisi daha iyi?', h: 'volgens jou', a: ['Sence'], o: ['Sence', 'Bence', 'Sana'], nl: 'Welke is volgens jou beter?', tag: 'tr-mening' },
      { t: 'mc', q: 'Je bent het half eens. Wat zeg je?', o: ['Haklısın, ama…', 'Hiç sanmıyorum.', 'Yanılıyorsun.'], tag: 'tr-mening' },
      { t: 'mc', q: 'Wat betekent «öte yandan»?', o: ['aan de andere kant', 'bovendien', 'kortom'], tag: 'tr-mening' },
      { t: 'tr', nl: 'Volgens mij heb je gelijk.', a: ['Bence haklısın.', 'Bana göre haklısın.', 'Haklı olduğunu düşünüyorum.'], tag: 'tr-mening' },
      { t: 'tr', nl: 'Ik wist niet dat je Turks kende.', a: ['Türkçe bildiğini bilmiyordum.'], tag: 'tr-digini' },
      { t: 'tr', nl: 'Mijn moeder wil dat ik vroeg kom.', a: ['Annem erken gelmemi istiyor.'], tag: 'tr-mesini' },
      { t: 'order', s: 'Araştırmalar sosyal medyanın bizi bağımlı yaptığını söylüyor.', nl: 'Onderzoeken zeggen dat sociale media ons verslaafd maken.', tag: 'tr-digini' },
      { t: 'match', p: [['bence', 'volgens mij'], ['aslında', 'eigenlijk'], ['ayrıca', 'bovendien'], ['örneğin', 'bijvoorbeeld'], ['yani', 'dus'], ['mutlaka', 'beslist']], tag: 'vocab' }
    ],
    reading: {
      t: 'Büyük şehir mi, küçük kasaba mı?', type: 'Lezersbrief',
      p: [
        ['Geçen haftaki yazınızda büyük şehirde yaşamanın daha iyi olduğunu söylüyorsunuz. Açıkçası ben katılmıyorum.', 'In uw stuk van vorige week zegt u dat het beter is om in een grote stad te wonen. Eerlijk gezegd ben ik het daar niet mee eens.'],
        ['Bir yandan haklısınız: şehirde iş bulmak daha kolay ve yapacak çok şey var. Öte yandan trafik, gürültü ve yüksek kiralar insanı çok yoruyor.', 'Aan de ene kant heeft u gelijk: in de stad is het makkelijker om werk te vinden en er is veel te doen. Aan de andere kant maken het verkeer, het lawaai en de hoge huren een mens erg moe.'],
        ['Ben on yıl İstanbul’da yaşadıktan sonra küçük bir kasabaya taşındım. Arkadaşlarım sıkılacağımı söyledi. Ama hiç sıkılmadım!', 'Ik ben na tien jaar in İstanbul naar een klein stadje verhuisd. Mijn vrienden zeiden dat ik me zou vervelen. Maar ik heb me nooit verveeld!'],
        ['Sonuç olarak, herkesin kendi için en iyisini seçmesini istiyorum. Ama bence mutluluk büyük şehirde değil, sakin bir hayatta.', 'Kortom, ik wil dat iedereen voor zichzelf het beste kiest. Maar volgens mij zit geluk niet in de grote stad, maar in een rustig leven.']
      ],
      gl: [['yazı', 'stuk / artikel'], ['yormak', 'moe maken'], ['mutluluk', 'geluk'], ['sakin', 'rustig']],
      q: [
        { t: 'mc', q: 'Yazar gazetedeki yazıya katılıyor mu?', o: ['Hayır, katılmıyor', 'Evet, tamamen katılıyor', 'Yazıyı okumamış'] },
        { t: 'mc', q: 'Yazarın arkadaşları ne söyledi?', o: ['Kasabada sıkılacağını', 'İş bulamayacağını', 'Geri döneceğini'] },
        { t: 'mc', q: 'Yazara göre mutluluk nerede?', o: ['Sakin bir hayatta', 'Büyük şehirde', 'Yüksek kiralarda'] }
      ]
    },
    say: [['Bence haklısın.', 'Volgens mij heb je gelijk.'], ['Katılmıyorum.', 'Ik ben het er niet mee eens.'], ['Sence hangisi daha iyi?', 'Welke is volgens jou beter?'], ['Gelmeni istiyorum.', 'Ik wil dat je komt.'], ['Haklı olduğunu düşünüyorum.', 'Ik denk dat je gelijk hebt.']],
    task: { nl: 'Geef in 6 zinnen je mening over de vraag «Is het beter om in een grote stad of in een dorp te wonen?». Begin met Bence, noem een voordeel en een nadeel (bir yandan… öte yandan), vertel wat iemand anders erover zegt (-diğini söylüyor) en sluit af met Sonuç olarak.', model: 'Bence küçük bir şehirde yaşamak daha güzel. Bir yandan büyük şehirde daha çok iş var. Öte yandan hayat çok pahalı ve gürültülü. Kardeşim şehirde sıkıldığını söylüyor, ama ben ona katılmıyorum. Ayrıca çocukların doğada büyümesini istiyorum. Sonuç olarak, benim için en iyisi deniz kenarında küçük bir kasaba.' },
    scenario: { nl: 'Can wil met je discussiëren: is sociale media goed of slecht voor ons?', role: 'You are Can, a student in Ankara who loves a friendly debate. Topic: are social media good or bad for us? Give your opinion with Bence and -diğini düşünüyorum, ask the learner theirs (Sence?), disagree politely (Haklısın, ama…, Katılmıyorum), quote what others say (Araştırmalar … söylüyor) and say what you want people to do with -mesini istiyorum. Use B1 Turkish.', goal: 'Geef je mening, reageer op de zijne en vertel wat anderen zeggen.' }
  });
})(window.SPT);
