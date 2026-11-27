/* Turks voor Nederlandstaligen — niveau B1, units 1–2 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'tr-mis': 'van horen zeggen (-miş)', 'tr-mismis': '-miş bij naamwoorden (-ymiş)', 'tr-en': 'bijzin met -en / -an (die…)', 'tr-olan': 'olan / olmayan',
    'tr-dik': 'bijzin met -diği (die / dat ik…)', 'tr-ecegi': 'bijzin met -eceği (die ik zal…)', 'tr-digini': 'zeggen en denken dat (-diğini)', 'tr-mesini': 'willen dat (-mesini)',
    'tr-mening': 'je mening geven (bence, bana göre)', 'tr-se': 'als… (-se / -sa)', 'tr-keske': 'wensen en spijt (keşke, -seydi)', 'tr-erdi': 'zou… (-erdi)',
    'tr-passief': 'lijdende vorm (-il- / -in-)', 'tr-laten': 'laten doen (-dir- / -t-)', 'tr-icin': 'om te en omdat (için)', 'tr-ragmen': 'ondanks (-e rağmen)',
    'tr-meye': 'gaan om te… (-meye gitmek)', 'tr-erek': 'door te… (-erek)', 'tr-diye': 'diye'
  });

  /* ───────────────────────── B1 · 1 ───────────────────────── */
  U({
    id: 'tr-b1-01', level: 'B1', icon: '👂', title: 'Duydun mu? Evlenmişler!', nl: 'Van horen zeggen: -miş',
    goals: ['Nieuws doorvertellen dat je zelf niet hebt gezien', 'Het verschil kennen tussen -di (zelf gezien) en -miş (gehoord of afgeleid)', 'Verrassing en complimenten uitdrukken met -miş', 'Een sprookje herkennen en beginnen'],
    vocab: [
      ['dedikodu', 'roddel'], ['söylenti', 'gerucht'], ['masal', 'sprookje'], ['galiba', 'waarschijnlijk / geloof ik'], ['sanırım', 'ik denk'], ['meğer', 'het blijkt dat'], ['güya', 'zogenaamd'],
      ['herhalde', 'vast wel / vermoedelijk'], ['demek ki', 'dus / dat betekent dat'], ['belli ki', 'kennelijk'], ['ayrılmak', 'uit elkaar gaan / vertrekken'], ['boşanmak', 'scheiden'], ['nişanlanmak', 'zich verloven'],
      ['hamile', 'zwanger'], ['terfi etmek', 'promotie maken'], ['işten çıkarmak', 'ontslaan'], ['istifa etmek', 'ontslag nemen'], ['yerleşmek', 'zich vestigen'], ['kavga etmek', 'ruzie maken'],
      ['barışmak', 'het goedmaken'], ['şaşırtıcı', 'verrassend'], ['inanılmaz', 'ongelooflijk'], ['sır', 'geheim'], ['olay', 'gebeurtenis / voorval'], ['fark etmek', 'merken'], ['emin', 'zeker'],
      ['şüphe', 'twijfel'], ['gerçek', 'waar / werkelijkheid'], ['yalan', 'leugen'], ['uyuyakalmak', 'in slaap vallen']
    ],
    grammar: [
      { t: 'Gezien of gehoord? -di tegenover -miş', es: 'Görülen ve duyulan geçmiş zaman',
        html: `<p>Turks heeft <b>twee</b> verleden tijden, en je moet kiezen. Met <b>-di</b> zeg je: ik was erbij, ik weet het zeker. Met <b>-miş</b> zeg je: ik heb het van iemand <b>gehoord</b>, of ik <b>leid het af</b> uit wat ik zie.</p>
<p><i>Ali gel<b>di</b>.</i> (Ali is gekomen: ik heb hem gezien.) ↔ <i>Ali gel<b>miş</b>.</i> (Ali schijnt gekomen te zijn: iemand vertelde het, of ik zie zijn jas hangen.)</p>
<p>De uitgang volgt de vierklankharmonie: <b>-miş / -mış / -muş / -müş</b>: <i>gel<b>miş</b></i>, <i>al<b>mış</b></i>, <i>oku<b>muş</b></i>, <i>gör<b>müş</b></i>. Daarna de persoonsuitgangen van «zijn»: <i>gelmiş<b>im</b>, gelmiş<b>sin</b>, gelmiş, gelmiş<b>iz</b>, gelmiş<b>siniz</b>, gelmiş<b>ler</b></i>.</p>
<p><b>Ontkenning:</b> <i>gel<b>me</b>miş</i> (hij schijnt niet gekomen te zijn). <b>Vraag:</b> <i>gelmiş <b>mi</b>?</i> · <i>gelmiş <b>miyim</b>?</i></p>
<p>In het Nederlands heb je er woorden voor nodig: «schijnt», «blijkbaar», «naar het schijnt», «ik hoorde dat». In het Turks zit dat allemaal in die ene uitgang.</p>`,
        table: [['', 'gelmek', 'almak', 'okumak', 'görmek'], ['ben', 'gelmişim', 'almışım', 'okumuşum', 'görmüşüm'], ['sen', 'gelmişsin', 'almışsın', 'okumuşsun', 'görmüşsün'], ['o', 'gelmiş', 'almış', 'okumuş', 'görmüş'],
          ['biz', 'gelmişiz', 'almışız', 'okumuşuz', 'görmüşüz'], ['siz', 'gelmişsiniz', 'almışsınız', 'okumuşsunuz', 'görmüşsünüz'], ['onlar', 'gelmişler', 'almışlar', 'okumuşlar', 'görmüşler']],
        sum: 'Ali geldi (gezien) ↔ Ali gelmiş (gehoord).',
        ex: [['Elif ile Can evlenmişler.', 'Elif en Can schijnen getrouwd te zijn.'], ['Dün gece kar yağmış.', 'Het heeft vannacht blijkbaar gesneeuwd.'], ['Müdür istifa etmiş, duydun mu?', 'De directeur heeft ontslag genomen, heb je het gehoord?'], ['Toplantıya gelmemiş.', 'Hij is naar het schijnt niet naar de vergadering gekomen.']] },
      { t: 'Verrassing, complimenten en «zonder het te merken»', es: '-miş’in diğer anlamları',
        html: `<p><b>-miş</b> gebruik je ook als je iets <b>nu pas ontdekt</b>. Dat kan zelfs over iets wat je voor je neus ziet:</p>
<p>• <b>Compliment of oordeel bij een resultaat:</b> <i>Yemek çok güzel ol<b>muş</b>!</i> (Het eten is heerlijk geworden!) · <i>Saçını kestir<b>mişsin</b>, çok yakış<b>mış</b>.</i> (Je bent naar de kapper geweest, het staat je goed.) Hier zou <i>-di</i> vreemd klinken: je ziet het resultaat, niet het koken zelf.</p>
<p>• <b>Zonder het te merken</b> (bij <i>ben</i>): <i>Uyuyakal<b>mışım</b>.</i> (Ik ben blijkbaar in slaap gevallen.) · <i>Anahtarımı evde unut<b>muşum</b>.</i> (Ik heb mijn sleutel thuis laten liggen, merk ik nu.)</p>
<p>• <b>Ontdekking</b> met <i>meğer</i>: <i><b>Meğer</b> o da Hollandalıy<b>mış</b>!</i> (Blijkt dat hij ook Nederlander is!)</p>
<p>• <b>Sprookjes</b> beginnen altijd zo: <i>Bir var<b>mış</b>, bir yok<b>muş</b>…</i> (Er was eens…, letterlijk: er was er een, er was er geen.)</p>
<p><b>⚠️ Uitzondering:</b> in kranten en officiële teksten lees je <b>-mıştır</b>: <i>Başbakan Ankara’ya gel<b>miştir</b>.</i> Dat is <b>geen</b> «van horen zeggen» maar juist een <b>stellige mededeling</b>. <b>Waarom?</b> De <i>-dir</i> erachter betekent «het is zo» en heft de twijfel van -miş op: «het is een feit dat hij gekomen is». In gesproken taal betekent <i>gelmiştir</i> juist weer «hij zal wel gekomen zijn» (een vermoeden); de schrijftaal en de spreektaal lopen hier uiteen.</p>`,
        table: [['zin', 'betekenis'], ['Çok güzel olmuş!', 'Het is prachtig geworden!'], ['Uyuyakalmışım.', 'Ik ben (kennelijk) in slaap gevallen.'], ['Meğer hastaymış.', 'Blijkt dat hij ziek was.'], ['Bir varmış, bir yokmuş.', 'Er was eens.'], ['Gelmiştir. ⚠️', 'krant: is gekomen · gesprek: zal wel gekomen zijn']],
        sum: 'Çok güzel olmuş! Uyuyakalmışım. Bir varmış, bir yokmuş.',
        ex: [['Türkçen çok ilerlemiş!', 'Je Turks is erg vooruitgegaan!'], ['Aa, telefonumu evde unutmuşum.', 'O, ik heb mijn telefoon thuis laten liggen.'], ['Çocuklar büyümüş!', 'Wat zijn de kinderen gegroeid!']] },
      { t: '-miş bij naamwoorden: -ymiş', es: 'İsim + -(y)miş',
        html: `<p>Ook achter een naamwoord of bijvoeglijk naamwoord kan <b>-miş</b>. Na een klinker komt er een <b>y</b> tussen: <i>hasta<b>ymış</b></i> (hij schijnt ziek te zijn), <i>güzel<b>miş</b></i>, <i>evde<b>ymiş</b></i>, <i>öğretmen<b>miş</b></i>.</p>
<p>Let op: hier zegt -miş <b>niets over de tijd</b>. <i>Hastaymış</i> kan betekenen «hij is ziek, hoor ik» of «hij was ziek, hoor ik». De context bepaalt het.</p>
<p><i>Var</i> en <i>yok</i>: <i>var<b>mış</b></i> (er schijnt te zijn), <i>yok<b>muş</b></i>. Met <i>değil</i>: <i>değil<b>miş</b></i>. <i>Yeni müdür çok genç<b>miş</b>.</i> · <i>Yarın toplantı yok<b>muş</b>.</i> · <i>Sınav zor değil<b>miş</b>.</i></p>
<p>Achter andere tijden maakt -miş er «naar het schijnt» van: <i>geliyor<b>muş</b></i> (hij schijnt te komen), <i>gelecek<b>miş</b></i> (hij zou komen, zegt men), <i>gelir<b>miş</b></i>. Zo vertel je door wat een ander zei: <i>Selin yarın gelemeyecek<b>miş</b>.</i> (Selin kan morgen niet komen, zegt ze.)</p>
<p>Woorden die vaak bij -miş staan: <b>galiba</b> (geloof ik), <b>herhalde</b> (vast wel), <b>güya</b> (zogenaamd, je gelooft het niet), <b>duyduğuma göre</b> (naar ik hoor).</p>`,
        table: [['direct (ik weet het)', 'gehoord'], ['Hasta.', 'Hastaymış.'], ['Toplantı var.', 'Toplantı varmış.'], ['Evde değil.', 'Evde değilmiş.'], ['Yarın geliyor.', 'Yarın geliyormuş.'], ['Gelecek.', 'Gelecekmiş.']],
        sum: 'Hastaymış, varmış, yokmuş, geliyormuş.',
        ex: [['Yeni komşumuz doktormuş.', 'Onze nieuwe buurman schijnt dokter te zijn.'], ['Film çok sıkıcıymış.', 'De film schijnt erg saai te zijn.'], ['Güya çok zenginmiş.', 'Hij is zogenaamd heel rijk.'], ['Yarın yağmur yağacakmış.', 'Het gaat morgen regenen, zeggen ze.']] }
    ],
    dialogue: {
      t: 'Bij het koffieapparaat', place: 'Ankara 🇹🇷',
      lines: [
        ['Zeynep', 'Duydun mu? Murat Bey istifa etmiş!', 'Heb je het gehoord? Meneer Murat heeft ontslag genomen!'],
        ['Koen', 'Gerçekten mi? Ben dün onu gördüm, hiçbir şey söylemedi.', 'Echt? Ik heb hem gisteren gezien, hij zei niets.'],
        ['Zeynep', 'Evet, bu sabah müdürle konuşmuş. İzmir’de yeni bir iş bulmuş.', 'Ja, hij heeft vanochtend met de directeur gesproken. Hij schijnt een nieuwe baan in İzmir te hebben gevonden.'],
        ['Koen', 'Demek ki o yüzden geçen hafta izin aldı.', 'Dus daarom nam hij vorige week vrij.'],
        ['Zeynep', 'Aynen. Karısı da İzmirliymiş, oraya yerleşeceklermiş.', 'Precies. Zijn vrouw schijnt ook uit İzmir te komen, ze gaan zich daar vestigen.'],
        ['Koen', 'Peki onun yerine kim gelecek?', 'En wie komt er in zijn plaats?'],
        ['Zeynep', 'Emin değilim, ama galiba Selin terfi etmiş.', 'Ik weet het niet zeker, maar ik geloof dat Selin promotie heeft gemaakt.'],
        ['Koen', 'Bunu kimden duydun?', 'Van wie heb je dat gehoord?'],
        ['Zeynep', 'Çaycıdan. O her şeyi bilir!', 'Van de theeman. Die weet alles!'],
        ['Koen', 'Aa, kahvem soğumuş. Dedikoduya daldık!', 'O, mijn koffie is koud geworden. We gingen helemaal op in het geroddel!']
      ],
      q: [
        { t: 'mc', q: 'Murat Bey ne yapmış?', o: ['İstifa etmiş', 'Terfi etmiş', 'Boşanmış'] },
        { t: 'mc', q: 'Murat Bey nereye yerleşecekmiş?', o: ['İzmir’e', 'Ankara’ya', 'İstanbul’a'] },
        { t: 'mc', q: 'Zeynep bu haberi kimden duymuş?', o: ['Çaycıdan', 'Müdürden', 'Selin’den'] }
      ]
    },
    culture: { t: 'Dedikodu en «Bir varmış, bir yokmuş»', html: `<p><b>Dedikodu</b> (roddel) is een woord dat klinkt als wat het is: het komt van <i>dedi</i> (hij zei) en <i>kodu</i> (hij zette neer). Omdat de -miş-vorm in één uitgang zegt «ik heb het ook maar gehoord», heet die tijd in de volksmond wel de <b>roddeltijd</b>. Wie -miş gebruikt, neemt geen verantwoordelijkheid voor wat hij vertelt.</p>
<p>Dat maakt Turken ook gevoelig voor de keuze. Zeg je <i>Ali geldi</i> terwijl je het alleen van horen zeggen hebt, dan kan de ander vragen: <i>Gördün mü?</i> (Heb je het gezien?)</p>
<p>📚 Elk Turks sprookje begint met een <b>tekerleme</b> (rijmpje) in de -miş-vorm: <i>Bir varmış, bir yokmuş. Evvel zaman içinde, kalbur saman içinde, develer tellal iken, pireler berber iken…</i> (Er was eens. In een tijd van vroeger, toen de zeef in het stro lag, de kamelen omroepers waren en de vlooien kappers…)</p>` },
    ex: [
      { t: 'mc', q: 'Je zag met eigen ogen dat Ali binnenkwam. Wat zeg je?', o: ['Ali geldi.', 'Ali gelmiş.', 'Ali gelecekmiş.'], x: '-di = je was erbij.', tag: 'tr-mis' },
      { t: 'mc', q: 'Je ziet een natte straat en denkt dat het geregend heeft. Wat zeg je?', o: ['Yağmur yağmış.', 'Yağmur yağdı.', 'Yağmur yağıyor.'], x: '-miş = je leidt het af uit wat je ziet.', tag: 'tr-mis' },
      { t: 'cloze', s: 'Elif ile Can evlen___.', h: 'schijnt', a: ['mişler'], o: ['mişler', 'mışlar', 'diler'], nl: 'Elif en Can schijnen getrouwd te zijn.', tag: 'tr-mis' },
      { t: 'cloze', s: 'Müdür yeni bir iş bul___.', h: 'schijnt', a: ['muş'], o: ['muş', 'miş', 'mış'], nl: 'De directeur schijnt een nieuwe baan te hebben gevonden.', tag: 'tr-mis' },
      { t: 'cloze', s: 'Toplantıya gel___miş.', h: 'niet', a: ['me'], o: ['me', 'ma', 'mi'], nl: 'Hij is naar het schijnt niet naar de vergadering gekomen.', tag: 'tr-mis' },
      { t: 'cloze', s: 'Aa, anahtarımı evde unut___.', h: 'ik, merk ik nu', a: ['muşum'], o: ['muşum', 'tum', 'muş'], nl: 'O, ik heb mijn sleutel thuis laten liggen.', tag: 'tr-mis' },
      { t: 'mc', q: 'Je proeft de soep van je gastvrouw. Wat zeg je?', o: ['Çok güzel olmuş!', 'Çok güzel oldu!', 'Çok güzel olacak!'], x: 'Bij een resultaat dat je nu ontdekt gebruik je -miş.', tag: 'tr-mis' },
      { t: 'cloze', s: 'Yeni komşumuz doktor___.', h: 'schijnt', a: ['muş'], o: ['muş', 'ymuş', 'du'], nl: 'Onze nieuwe buurman schijnt dokter te zijn.', tag: 'tr-mismis' },
      { t: 'cloze', s: 'Film çok sıkıcı___.', h: 'schijnt', a: ['ymış'], o: ['ymış', 'mış', 'ymiş'], nl: 'De film schijnt erg saai te zijn.', x: 'Na een klinker komt er een y tussen.', tag: 'tr-mismis' },
      { t: 'cloze', s: 'Yarın toplantı yok___.', h: 'zeggen ze', a: ['muş'], o: ['muş', 'tu', 'miş'], nl: 'Morgen is er geen vergadering, zeggen ze.', tag: 'tr-mismis' },
      { t: 'cloze', s: 'Selin yarın gelemeyecek___.', h: 'zegt ze', a: ['miş'], o: ['miş', 'ti', 'mış'], nl: 'Selin kan morgen niet komen, zegt ze.', tag: 'tr-mismis' },
      { t: 'mc', q: 'In de krant staat «Başbakan Ankara’ya gelmiştir». Wat betekent dat?', o: ['De premier is (zeker) in Ankara aangekomen.', 'De premier schijnt in Ankara te zijn.', 'De premier komt misschien naar Ankara.'], x: '⚠️ Uitzondering: in schrijftaal heft -dir de twijfel van -miş op: het is een stellige mededeling.', tag: 'tr-mis' },
      { t: 'mc', q: 'Hoe begint een Turks sprookje?', o: ['Bir varmış, bir yokmuş.', 'Bir vardı, bir yoktu.', 'Bir var, bir yok.'], tag: 'tr-mismis' },
      { t: 'tr', nl: 'Heb je het gehoord?', a: ['Duydun mu?'], tag: 'tr-di' },
      { t: 'tr', nl: 'Het heeft vannacht blijkbaar gesneeuwd.', a: ['Dün gece kar yağmış.', 'Gece kar yağmış.', 'Bu gece kar yağmış.'], tag: 'tr-mis' },
      { t: 'tr', nl: 'Hij schijnt ziek te zijn.', a: ['Hastaymış.', 'O hastaymış.'], tag: 'tr-mismis' },
      { t: 'order', s: 'Duyduğuma göre Murat Bey geçen hafta istifa etmiş.', nl: 'Naar ik hoor heeft meneer Murat vorige week ontslag genomen.', tag: 'tr-mis' },
      { t: 'match', p: [['dedikodu', 'roddel'], ['söylenti', 'gerucht'], ['sır', 'geheim'], ['yalan', 'leugen'], ['galiba', 'geloof ik'], ['meğer', 'het blijkt dat']], tag: 'vocab' }
    ],
    reading: {
      t: 'Keloğlan ve altın', type: 'Sprookje',
      p: [
        ['Bir varmış, bir yokmuş. Küçük bir köyde Keloğlan adında fakir bir genç yaşarmış. Annesiyle küçük bir evde otururmuş.', 'Er was eens. In een klein dorp leefde een arme jongen die Keloğlan heette. Hij woonde met zijn moeder in een klein huisje.'],
        ['Bir gün Keloğlan ormanda bir kese altın bulmuş. Çok sevinmiş, ama hemen düşünmüş: «Bu altın kimin?»', 'Op een dag vond Keloğlan in het bos een buidel goud. Hij was heel blij, maar dacht meteen: «Van wie is dit goud?»'],
        ['Köye dönmüş ve herkese sormuş. Yaşlı bir adam ağlıyormuş: altınlarını kaybetmiş. Keloğlan keseyi ona vermiş.', 'Hij ging terug naar het dorp en vroeg het aan iedereen. Een oude man zat te huilen: hij was zijn goud kwijt. Keloğlan gaf hem de buidel.'],
        ['Yaşlı adam meğer padişahmış! Keloğlan’ı saraya davet etmiş. Onlar ermiş muradına, biz çıkalım kerevetine.', 'De oude man bleek de sultan te zijn! Hij nodigde Keloğlan uit in het paleis. Zij kregen wat ze wensten, en wij gaan naar bed. (vast slot van een sprookje)']
      ],
      gl: [['fakir', 'arm'], ['orman', 'bos'], ['kese', 'buidel'], ['sevinmek', 'blij zijn'], ['padişah', 'sultan'], ['saray', 'paleis']],
      q: [
        { t: 'mc', q: 'Keloğlan ormanda ne bulmuş?', o: ['Bir kese altın', 'Bir anahtar', 'Bir ev'] },
        { t: 'mc', q: 'Yaşlı adam neden ağlıyormuş?', o: ['Çünkü altınlarını kaybetmiş', 'Çünkü hastaymış', 'Çünkü evi yokmuş'] },
        { t: 'mc', q: 'Yaşlı adam meğer kimmiş?', o: ['Padişah', 'Keloğlan’ın babası', 'Bir hırsız'] }
      ]
    },
    say: [['Duydun mu? Evlenmişler!', 'Heb je het gehoord? Ze zijn getrouwd!'], ['Çok güzel olmuş!', 'Het is prachtig geworden!'], ['Galiba hastaymış.', 'Ik geloof dat hij ziek is.'], ['Telefonumu evde unutmuşum.', 'Ik heb mijn telefoon thuis laten liggen.']],
    task: { nl: 'Vertel in 5 zinnen nieuws door dat je van iemand anders hebt gehoord (over een buur, collega of bekende persoon). Gebruik -miş bij werkwoorden en minstens één keer -ymiş bij een naamwoord, en zeg van wie je het hebt.', model: 'Duydun mu? Komşumuz Ayşe Hanım yeni bir iş bulmuş. Almanya’ya taşınacakmış. Kocası da onunla gidecekmiş, ama çocukları burada kalacakmış. Yeni işi çok iyiymiş. Bunu kapıcıdan duydum.' },
    scenario: { nl: 'Je collega Zeynep staat bij het koffieapparaat en heeft nieuws. Jij hebt ook iets gehoord.', role: 'You are Zeynep, a talkative colleague in an office in Ankara. Share office news you have only heard second-hand using -miş (Murat Bey istifa etmiş, yeni müdür çok gençmiş), ask the learner what they have heard (Sen ne duydun?), react with Gerçekten mi? Deme! and ask who told them. Correct gently if they use -di for hearsay. Use B1 Turkish.', goal: 'Vertel nieuws door dat je gehoord hebt en reageer op het hare.' }
  });

  /* ───────────────────────── B1 · 2 ───────────────────────── */
  U({
    id: 'tr-b1-02', level: 'B1', icon: '🧑‍💼', title: 'Yanımda oturan kadın', nl: 'Mensen beschrijven: de bijzin met -en',
    goals: ['Zeggen wie of wat je bedoelt met een bijzin', 'Bijzinnen maken met -en / -an (die…)', 'Olan en olmayan gebruiken bij naamwoorden en bij var / yok', 'Uiterlijk en karakter beschrijven'],
    vocab: [
      ['tanımak', 'kennen (een persoon)'], ['tanışmak', 'kennismaken'], ['görünmek', 'eruitzien / lijken'], ['benzemek', 'lijken op'], ['giymek', 'dragen / aantrekken'], ['gözlük', 'bril'], ['sakal', 'baard'],
      ['bıyık', 'snor'], ['kel', 'kaal'], ['dalgalı', 'golvend'], ['çilli', 'met sproeten'], ['kıvırcık', 'krullend'], ['orta yaşlı', 'van middelbare leeftijd'], ['yakışıklı', 'knap (van een man)'],
      ['sevimli', 'lief / schattig'], ['ciddi', 'serieus'], ['somurtkan', 'nors'], ['kibar', 'beleefd / vriendelijk'], ['kaba', 'grof / onbeleefd'], ['cömert', 'gul'], ['cimri', 'gierig'], ['sabırlı', 'geduldig'],
      ['dürüst', 'eerlijk'], ['güvenilir', 'betrouwbaar'], ['çekingen', 'terughoudend'], ['konuşkan', 'spraakzaam'], ['meslektaş', 'collega'], ['patron', 'baas'], ['müşteri', 'klant'], ['yabancı', 'vreemdeling / buitenlander'], ['ünlü', 'beroemd']
    ],
    grammar: [
      { t: 'Die…: de bijzin met -en / -an', es: 'Sıfat-fiil: -en / -an',
        html: `<p>Nederlands zet een bijzin <b>achter</b> het woord: «de vrouw <b>die naast me zit</b>». Turks heeft geen woord voor «die» en zet de hele bijzin <b>ervoor</b>, als een lang bijvoeglijk naamwoord: <i><b>yanımda otur<u>an</u></b> kadın</i>, letterlijk «de naast-mij-zittende vrouw».</p>
<p>Je maakt de vorm met stam + <b>-en</b> (na e, i, ö, ü) of <b>-an</b> (na a, ı, o, u): <i>gel-<b>en</b></i> (die komt / kwam), <i>otur-<b>an</b></i>, <i>çalış-<b>an</b></i>, <i>gül-<b>en</b></i>. Na een klinker met y: <i>bekle-<b>yen</b></i>, <i>oku-<b>yan</b></i>. En de bekende veranderingen: <i>gitmek</i> → <i>gi<b>d</b>en</i>, <i>yemek</i> → <i>y<b>i</b>yen</i>, <i>demek</i> → <i>d<b>i</b>yen</i>.</p>
<p>Gebruik <b>-en</b> als het woord erachter het <b>onderwerp</b> van de bijzin is: de vrouw zit, de man komt, de trein vertrekt.</p>
<p><b>-en</b> heeft <b>geen tijd en geen persoon</b>: <i>gelen adam</i> = de man die komt óf de man die kwam. De hoofdzin maakt het duidelijk.</p>
<p><b>Ontkenning:</b> <i>gel<b>meyen</b></i> (die niet komt), <i>çalış<b>mayan</b></i>.</p>
<p>Zonder naamwoord erachter betekent het «degene die»: <i>Gel<b>enler</b> kim?</i> (Wie zijn degenen die gekomen zijn?) · <i>Bil<b>en</b> var mı?</i> (Is er iemand die het weet?)</p>`,
        table: [['Nederlands', 'Turks'], ['de man die komt', 'gelen adam'], ['de vrouw die naast me zit', 'yanımda oturan kadın'], ['het kind dat huilt', 'ağlayan çocuk'], ['de trein die naar Ankara gaat', 'Ankara’ya giden tren'], ['mensen die niet roken', 'sigara içmeyen insanlar']],
        sum: 'Gelen adam, yanımda oturan kadın, Ankara’ya giden tren.',
        ex: [['Kapıda bekleyen adam kim?', 'Wie is de man die bij de deur wacht?'], ['Türkçe bilen biri var mı?', 'Is er iemand die Turks kent?'], ['Bizimle çalışan herkes çok kibar.', 'Iedereen die met ons werkt is erg vriendelijk.'], ['İstanbul’a giden otobüs kaçta kalkıyor?', 'Hoe laat vertrekt de bus die naar İstanbul gaat?']] },
      { t: 'Olan en olmayan', es: 'Olan / olmayan',
        html: `<p>Een bijzin zonder werkwoord («die ziek is», «die een auto heeft») heeft toch een -en-vorm nodig. Daarvoor gebruik je <b>olan</b>, van <i>olmak</i> (zijn / worden): <i>hasta <b>olan</b> çocuk</i> (het kind dat ziek is), <i>masada <b>olan</b> kitap</i> (het boek dat op tafel ligt), <i>annesi doktor <b>olan</b> kız</i> (het meisje wier moeder dokter is).</p>
<p>Ontkennend: <b>olmayan</b>: <i>evde <b>olmayan</b>lar</i> (degenen die niet thuis zijn), <i>pahalı <b>olmayan</b> bir otel</i> (een hotel dat niet duur is).</p>
<p><b>⚠️ Uitzondering:</b> van <b>var</b> en <b>yok</b> kun je geen -en-vorm maken: <s>varan</s> en <s>yokan</s> bestaan niet. Je zegt <b>olan</b> en <b>olmayan</b>: <i>araba<b>sı olan</b> biri</i> (iemand die een auto heeft), <i>para<b>sı olmayan</b> öğrenciler</i> (studenten die geen geld hebben), <i>soru<b>su olan</b> var mı?</i> (Is er iemand die een vraag heeft?) <b>Waarom?</b> <i>Var</i> en <i>yok</i> zijn geen werkwoorden maar naamwoorden («het bestaande», «het ontbrekende») en hebben dus geen stam waar een uitgang aan kan. <i>Olmak</i> springt in, net als bij de toekomende tijd (<i>olacak</i>) en bij -ince (<i>olunca</i>).</p>
<p>Bij een gewoon bijvoeglijk naamwoord is <i>olan</i> vaak niet nodig: <i>hasta çocuk</i> is gewoon «het zieke kind». <i>Hasta olan çocuk</i> legt de nadruk: «het kind dat ziek is (en niet het andere)».</p>`,
        table: [['zin', 'als bijzin'], ['Çocuk hasta.', 'hasta olan çocuk'], ['Arabası var.', 'arabası olan biri'], ['Parası yok.', 'parası olmayan öğrenci'], ['Annesi doktor.', 'annesi doktor olan kız'], ['Evde değil.', 'evde olmayanlar']],
        sum: 'Hasta olan çocuk, arabası olan biri, parası olmayan öğrenci.',
        ex: [['Sorusu olan var mı?', 'Heeft er iemand een vraag?'], ['Bahçesi olan bir ev arıyoruz.', 'We zoeken een huis met een tuin.'], ['Saçı kıvırcık olan kız benim kardeşim.', 'Het meisje met het krullende haar is mijn zus.'], ['Vizesi olmayanlar giremez.', 'Wie geen visum heeft, mag niet naar binnen.']] },
      { t: 'Iemand beschrijven', es: 'Birini tarif etmek',
        html: `<p><b>Uiterlijk</b> beschrijf je met <b>-li</b> (met) of met een bezitsconstructie: <i>uzun boy<b>lu</b></i>, <i>sarı saç<b>lı</b></i>, <i>mavi göz<b>lü</b></i>, <i>gözlük<b>lü</b></i>, <i>sakal<b>lı</b></i>. Of: <i>Saç<b>ı</b> kıvırcık.</i> (Zijn haar is krullend.) · <i>Göz<b>leri</b> yeşil.</i></p>
<p><b>Kleding</b> met <i>giymek</i> in de -en-vorm: <i>kırmızı ceket gi<b>yen</b> adam</i> (de man die een rode jas draagt), of met -li: <i>kırmızı ceket<b>li</b> adam</i>.</p>
<p><b>Lijken op</b>: <i>-e benzemek</i>: <i>Baban<b>a</b> çok benziyorsun.</i> (Je lijkt erg op je vader.) <b>Eruitzien</b>: <i>Yorgun görünüyorsun.</i> (Je ziet er moe uit.)</p>
<p><b>Karakter</b>: tegenstellingen maak je vaak met <b>-siz</b> (zonder) naast <b>-li</b>: <i>sabır<b>lı</b></i> ↔ <i>sabır<b>sız</b></i> (geduldig / ongeduldig), <i>saygı<b>lı</b></i> ↔ <i>saygı<b>sız</b></i> (respectvol / respectloos), <i>düşünce<b>li</b></i> ↔ <i>düşünce<b>siz</b></i> (attent / onnadenkend).</p>
<p>Vragen: <i>Nasıl biri?</i> (Wat voor iemand is hij?) · <i>Neye benziyor?</i> (Hoe ziet hij eruit?) · <i>Hangisi?</i> (Welke?) — <i>Şu gözlüklü olan.</i> (Die met de bril.)</p>`,
        table: [['Turks', 'Nederlands'], ['uzun boylu, sarı saçlı', 'lang, met blond haar'], ['gözlüklü ve sakallı', 'met bril en baard'], ['Nasıl biri?', 'Wat voor iemand is hij?'], ['Babasına benziyor.', 'Hij lijkt op zijn vader.'], ['sabırlı ↔ sabırsız', 'geduldig ↔ ongeduldig']],
        sum: 'Uzun boylu, gözlüklü. Nasıl biri?',
        ex: [['Yeni patron nasıl biri?', 'Wat voor iemand is de nieuwe baas?'], ['Ciddi görünüyor, ama çok neşeli.', 'Hij ziet er serieus uit, maar is heel vrolijk.'], ['Mavi gömlek giyen adam benim meslektaşım.', 'De man met het blauwe overhemd is mijn collega.']] }
    ],
    dialogue: {
      t: 'Op de bedrijfsborrel', place: 'İstanbul 🇹🇷',
      lines: [
        ['Emre', 'Lotte, buradaki herkesi tanıyor musun?', 'Lotte, ken je iedereen hier?'],
        ['Lotte', 'Hayır, daha yeniyim. Pencerenin yanında duran uzun boylu adam kim?', 'Nee, ik ben nog nieuw. Wie is die lange man die bij het raam staat?'],
        ['Emre', 'Gözlüklü olan mı? O Kemal Bey, satış müdürü.', 'Die met de bril? Dat is meneer Kemal, de verkoopdirecteur.'],
        ['Lotte', 'Ciddi görünüyor.', 'Hij ziet er serieus uit.'],
        ['Emre', 'Öyle görünüyor, ama aslında çok neşeli biri. En çok şaka yapan o.', 'Dat lijkt zo, maar eigenlijk is het een heel vrolijk iemand. Hij is degene die de meeste grappen maakt.'],
        ['Lotte', 'Peki onunla konuşan kıvırcık saçlı kadın?', 'En die vrouw met het krullende haar die met hem praat?'],
        ['Emre', 'O Deniz. Almancası çok iyi olan tek kişi. Almanya’dan gelen müşterilerle o ilgileniyor.', 'Dat is Deniz. De enige die heel goed Duits spreekt. Zij ontfermt zich over de klanten die uit Duitsland komen.'],
        ['Lotte', 'Hollandaca bilen var mı burada?', 'Is er hier iemand die Nederlands kent?'],
        ['Emre', 'Senden başka yok! Ama öğrenmek isteyen çok.', 'Behalve jij niemand! Maar er zijn er veel die het willen leren.'],
        ['Lotte', 'O zaman sorusu olan bana gelsin!', 'Laat dan wie een vraag heeft maar naar mij komen!']
      ],
      q: [
        { t: 'mc', q: 'Kemal Bey nerede duruyor?', o: ['Pencerenin yanında', 'Kapıda', 'Masada'] },
        { t: 'mc', q: 'Kemal Bey aslında nasıl biri?', o: ['Çok neşeli', 'Çok ciddi', 'Çok sessiz'] },
        { t: 'mc', q: 'Almanya’dan gelen müşterilerle kim ilgileniyor?', o: ['Deniz', 'Kemal Bey', 'Lotte'] }
      ]
    },
    culture: { t: 'Abi, abla, teyze, amca: iedereen is familie', html: `<p>In het Turks spreek je ook vreemden aan met <b>familiewoorden</b>. Een iets oudere man is <b>abi</b> (grote broer), een iets oudere vrouw <b>abla</b> (grote zus). De groenteboer van middelbare leeftijd is <b>amca</b> (oom) of <b>dayı</b>, de buurvrouw <b>teyze</b> (tante). Tegen een kind zeg je <i>oğlum</i> of <i>kızım</i> (mijn zoon, mijn dochter).</p>
<p>Je plakt ze ook achter de voornaam: <i>Ayşe abla</i>, <i>Mehmet amca</i>. Dat is warm en respectvol tegelijk; het zakelijke <i>Bey</i> en <i>Hanım</i> gebruik je op kantoor en in winkels.</p>
<p>👀 Bij het beschrijven van mensen zijn Turken direct. <i>Şişmanlamışsın!</i> (Je bent dikker geworden!) of <i>Zayıflamışsın!</i> (Je bent afgevallen!) is een gewone begroeting na lange tijd en zelden onaardig bedoeld. Het antwoord is een lach en <i>Sen de hiç değişmemişsin!</i> (En jij bent niets veranderd!)</p>` },
    ex: [
      { t: 'cloze', s: 'Kapıda bekle___ adam kim?', h: 'die', a: ['yen'], o: ['yen', 'en', 'yan'], nl: 'Wie is de man die bij de deur wacht?', x: 'Na een klinker komt er een y tussen.', tag: 'tr-en' },
      { t: 'cloze', s: 'Yanımda otur___ kadın çok kibar.', h: 'die', a: ['an'], o: ['an', 'en', 'duğu'], nl: 'De vrouw die naast me zit is erg vriendelijk.', tag: 'tr-en' },
      { t: 'cloze', s: 'Ankara’ya gi___ tren kaçta kalkıyor?', h: 'die', a: ['den'], o: ['den', 'ten', 'dan'], nl: 'Hoe laat vertrekt de trein die naar Ankara gaat?', x: 'gitmek → giden: de t wordt d vóór een klinker.', tag: 'tr-en' },
      { t: 'cloze', s: 'Sigara iç___ insanlar burada oturabilir.', h: 'die niet', a: ['meyen'], o: ['meyen', 'mayan', 'mez'], nl: 'Mensen die niet roken kunnen hier zitten.', tag: 'tr-en' },
      { t: 'cloze', s: 'Türkçe bil___ biri var mı?', h: 'die', a: ['en'], o: ['en', 'an', 'ir'], nl: 'Is er iemand die Turks kent?', tag: 'tr-en' },
      { t: 'mc', q: 'Wat betekent «gelenler»?', o: ['degenen die komen / kwamen', 'zij komen', 'de komst'], tag: 'tr-en' },
      { t: 'mc', q: 'Hoe zeg je «iemand die een auto heeft»?', o: ['arabası olan biri', 'arabası varan biri', 'araba var biri'], x: '⚠️ Uitzondering: van var kun je geen -en-vorm maken, want var is geen werkwoord. Olmak springt in: olan.', tag: 'tr-olan' },
      { t: 'mc', q: 'Hoe zeg je «studenten die geen geld hebben»?', o: ['parası olmayan öğrenciler', 'parası yokan öğrenciler', 'para yok öğrenciler'], x: '⚠️ Uitzondering: yok wordt in een bijzin olmayan.', tag: 'tr-olan' },
      { t: 'cloze', s: 'Sorusu ___ var mı?', h: 'die heeft', a: ['olan'], o: ['olan', 'var', 'olmayan'], nl: 'Heeft er iemand een vraag?', tag: 'tr-olan' },
      { t: 'cloze', s: 'Annesi doktor ___ kız benim arkadaşım.', a: ['olan'], o: ['olan', 'olmayan', 'eden'], nl: 'Het meisje wier moeder dokter is, is mijn vriendin.', tag: 'tr-olan' },
      { t: 'cloze', s: 'Babana çok benzi___.', h: 'jij', a: ['yorsun'], o: ['yorsun', 'yor', 'yorum'], nl: 'Je lijkt erg op je vader.', tag: 'tr-iyor' },
      { t: 'mc', q: 'Wat is het tegenovergestelde van «cömert»?', o: ['cimri', 'kibar', 'dürüst'], tag: 'vocab' },
      { t: 'tr', nl: 'Wat voor iemand is de nieuwe baas?', a: ['Yeni patron nasıl biri?'], tag: 'vocab' },
      { t: 'tr', nl: 'Wie is de man die met Elif praat?', a: ["Elif'le konuşan adam kim?", 'Elif ile konuşan adam kim?'], tag: 'tr-en' },
      { t: 'tr', nl: 'We zoeken een huis met een tuin.', a: ['Bahçesi olan bir ev arıyoruz.', 'Bahçeli bir ev arıyoruz.'], tag: 'tr-olan' },
      { t: 'order', s: 'Pencerenin yanında duran gözlüklü adam bizim müdürümüz.', nl: 'De man met de bril die bij het raam staat is onze directeur.', tag: 'tr-en' },
      { t: 'match', p: [['kibar', 'beleefd'], ['kaba', 'grof'], ['cömert', 'gul'], ['cimri', 'gierig'], ['dürüst', 'eerlijk'], ['sabırlı', 'geduldig']], tag: 'vocab' }
    ],
    reading: {
      t: 'Kayıp aranıyor', type: 'Oproep op sociale media',
      p: [
        ['Dün akşam Kadıköy’de vapurdan inen yaşlı bir adam çantasını bankta unutmuş. Çantayı bulan biz olduk.', 'Gisteravond heeft een oude man die in Kadıköy van de veerboot stapte zijn tas op een bankje laten liggen. Wij zijn degenen die de tas hebben gevonden.'],
        ['Adam orta boylu, beyaz sakallı ve gözlüklüydü. Kahverengi ceket giyiyordu. Yanında küçük bir köpek vardı.', 'De man was van gemiddelde lengte, had een witte baard en een bril. Hij droeg een bruine jas. Hij had een klein hondje bij zich.'],
        ['Çantanın içinde ilaç olan bir kutu ve eski fotoğraflar var. Kimliği olmayan bir cüzdan da var.', 'In de tas zitten een doosje met medicijnen en oude foto’s. Er zit ook een portemonnee zonder identiteitsbewijs in.'],
        ['Bu adamı tanıyan ya da gören varsa lütfen bize yazsın. Paylaşan herkese teşekkürler!', 'Als er iemand is die deze man kent of gezien heeft, laat die ons dan alstublieft schrijven. Dank aan iedereen die dit deelt!']
      ],
      gl: [['kayıp', 'vermist / verloren'], ['bank', 'bankje'], ['kutu', 'doos'], ['paylaşmak', 'delen']],
      q: [
        { t: 'mc', q: 'Adam çantasını nerede unutmuş?', o: ['Bankta', 'Vapurda', 'Otobüste'] },
        { t: 'mc', q: 'Adam nasıl biriydi?', o: ['Beyaz sakallı ve gözlüklü', 'Uzun boylu ve genç', 'Kel ve bıyıklı'] },
        { t: 'mc', q: 'Çantada ne yok?', o: ['Kimlik', 'İlaç', 'Fotoğraf'] }
      ]
    },
    say: [['Kapıda bekleyen adam kim?', 'Wie is de man die bij de deur wacht?'], ['Sorusu olan var mı?', 'Heeft er iemand een vraag?'], ['Yeni patron nasıl biri?', 'Wat voor iemand is de nieuwe baas?'], ['Babana çok benziyorsun.', 'Je lijkt erg op je vader.']],
    task: { nl: 'Beschrijf in 5 zinnen drie mensen op een foto of in een ruimte zonder hun naam te noemen: gebruik bijzinnen met -en (wat ze doen, wat ze dragen) en minstens één keer olan of olmayan.', model: 'Fotoğrafta ortada duran kadın benim annem. Onun yanında gülen çocuk kardeşim. Arkada gitar çalan uzun boylu adam dayım. Saçı olmayan adam dedem! Elinde çiçek olan kız da kuzenim.' },
    scenario: { nl: 'Je bent nieuw op een Turks kantoor. Op de borrel wijst collega Emre je wie wie is.', role: 'You are Emre, a friendly colleague at a company party in İstanbul. Point out colleagues using relative clauses with -en and olan (Pencerenin yanında duran adam…, Almancası iyi olan kişi…), describe their looks and character, and ask the learner to describe people they see or people from their own workplace (Patronun nasıl biri?). Use B1 Turkish.', goal: 'Vraag wie iemand is met een -en-bijzin en beschrijf zelf twee mensen.' }
  });
})(window.SPT);
