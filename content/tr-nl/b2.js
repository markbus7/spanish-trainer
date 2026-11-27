/* Turks voor Nederlandstaligen — niveau B2, units 1–2 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  Object.assign(S.C.TAGS, {
    'tr-misti': 'had gedaan (-mişti)', 'tr-ecekti': 'zou gaan doen (-ecekti)', 'tr-indir': 'navertellen: vragen en zeggen (-ip -mediğini)', 'tr-emir': 'iemand iets vragen te doen (-mesini söylemek)',
    'tr-vermoed': 'vermoeden (olmalı, olabilir, -dir)', 'tr-zodra': 'zodra, totdat, naarmate (-ir -mez, -ene kadar)', 'tr-beri': 'sinds (-eli, -diğinden beri)',
    'tr-elkaar': 'elkaar (-iş-, birbiri)', 'tr-zich': 'zich (-in-, kendi)', 'tr-naamval': 'werkwoord met vaste naamval', 'tr-mevs': '-mek, -me en -iş als zelfstandig naamwoord',
    'tr-verbind': 'verbindingswoorden (oysa, üstelik, dolayısıyla)', 'tr-ki': 'ki en -ki', 'tr-alsof': 'alsof (sanki, -miş gibi)', 'tr-graad': 'graad en hoeveelheid (gittikçe, o kadar … ki)',
    'tr-formeel': 'formeel Turks (-mektedir, -miştir)', 'tr-dir': '-dir: stellig of vermoedelijk', 'tr-spreek': 'spreektaal (ya, yani, hani, işte)', 'tr-versterk': 'versterking en verdubbeling (masmavi, kitap mitap)'
  });

  /* ───────────────────────── B2 · 1 ───────────────────────── */
  U({
    id: 'tr-b2-01', level: 'B2', icon: '🧳', title: 'Uçak çoktan kalkmıştı', nl: 'Pech onderweg: had gedaan en zou gaan doen',
    goals: ['Een verhaal vertellen met een voorgeschiedenis', 'De voltooid verleden tijd maken met -mişti', 'Zeggen wat je van plan was met -ecekti', 'Bijna-ongelukken vertellen met az kalsın en neredeyse'],
    vocab: [
      ['aksilik', 'tegenslag / pech'], ['iniş', 'landing'], ['gecikmeli', 'vertraagd'], ['iptal', 'annulering'], ['el koymak', 'in beslag nemen'], ['aktarmasız', 'rechtstreeks (zonder overstap)'], ['bagaj', 'bagage'],
      ['kayıp eşya', 'gevonden voorwerpen'], ['pasaport kontrolü', 'paspoortcontrole'], ['vize', 'visum'], ['gümrük', 'douane'], ['el bagajı', 'handbagage'], ['kapı', 'gate / deur'], ['anons', 'omroepbericht'],
      ['farkına varmak', 'beseffen / merken'], ['çoktan', 'allang'], ['henüz', 'nog (niet)'], ['az kalsın', 'bijna (het scheelde weinig)'], ['neredeyse', 'bijna'], ['tam', 'precies / net'],
      ['derken', 'en toen ineens'], ['beklenmedik', 'onverwacht'], ['neyse ki', 'gelukkig maar'], ['nihayet', 'eindelijk'], ['telaş', 'haast / paniek'], ['sakin', 'kalm'], ['çaresiz', 'machteloos'],
      ['şikâyet etmek', 'klagen'], ['tazminat', 'schadevergoeding'], ['konaklamak', 'overnachten']
    ],
    grammar: [
      { t: 'Had gedaan: -mişti', es: 'Geçmişin geçmişi: -mişti',
        html: `<p>Vertel je een verhaal in de verleden tijd en wil je <b>nog verder terug</b>, dan gebruik je <b>-miş + -ti</b>: <i>gel-<b>miş-ti</b></i> (hij was gekomen), <i>unut-<b>muş-tum</b></i> (ik was vergeten), <i>başla-<b>mış-tı</b></i>.</p>
<p><i>Havalimanına vardığımda uçak çoktan kalk<b>mıştı</b>.</i> (Toen ik op het vliegveld aankwam, was het vliegtuig allang vertrokken.) · <i>Pasaportumu evde unut<b>muştum</b>.</i> (Ik had mijn paspoort thuis laten liggen.)</p>
<p>De uitgangen zijn die van -di: <i>-miştim, -miştin, -mişti, -miştik, -miştiniz, -mişlerdi</i>. Ontkennend: <i>gel<b>me</b>mişti</i>. Vraag: <i>gelmiş <b>miydi</b>?</i></p>
<p>Vaak staat er <b>çoktan</b> (allang), <b>daha önce</b> (eerder), <b>henüz</b> + ontkenning (nog niet) of <b>hiç</b> bij: <i>Daha önce hiç uçağa bin<b>memiştim</b>.</i> (Ik had nog nooit in een vliegtuig gezeten.)</p>
<p>In een gesprek gebruik je -mişti ook om iets in herinnering te brengen: <i>Sana söyle<b>miştim</b>!</i> (Ik had het je toch gezegd!) · <i>Geçen yıl burada tanış<b>mıştık</b>.</i> (We hebben elkaar hier vorig jaar ontmoet, weet je nog.)</p>
<p><b>⚠️ Uitzondering:</b> je kent <b>-miş</b> als «van horen zeggen» (B1 unit 1). In <b>-mişti</b> heeft het die betekenis <b>niet</b>: <i>Unutmuştum</i> is iets wat je zelf zeker weet. <b>Waarom?</b> -miş is van oorsprong een voltooid deelwoord («gedaan»), zoals in <i>oku<b>muş</b> bir adam</i> (een belezen man). Staat het alleen aan het eind van de zin, dan kreeg het de betekenis «ik zag alleen het resultaat, dus ik heb het van horen zeggen». Komt er <i>-ti</i> achter, dan zegt -ti al dat je het zelf weet, en blijft alleen «voltooid» over. Wil je toch «hij schijnt … te hebben», dan is het <i>gelmiş<b>miş</b></i>.</p>`,
        table: [['', 'had gedaan', 'had niet gedaan'], ['ben', 'gelmiştim', 'gelmemiştim'], ['sen', 'gelmiştin', 'gelmemiştin'], ['o', 'gelmişti', 'gelmemişti'], ['biz', 'gelmiştik', 'gelmemiştik'], ['siz', 'gelmiştiniz', 'gelmemiştiniz'], ['onlar', 'gelmişlerdi', 'gelmemişlerdi']],
        sum: 'Uçak çoktan kalkmıştı.',
        ex: [['Eve geldiğimde herkes yatmıştı.', 'Toen ik thuiskwam, was iedereen al naar bed.'], ['Biletimi internetten almıştım.', 'Ik had mijn kaartje via internet gekocht.'], ['Daha önce hiç bu kadar korkmamıştım.', 'Ik was nog nooit zo bang geweest.'], ['Sana söylemiştim!', 'Ik had het je toch gezegd!']] },
      { t: 'Zou gaan doen: -ecekti', es: 'Gerçekleşmeyen niyet: -ecekti',
        html: `<p><b>-ecek + -ti</b> is «de toekomst van toen»: iets wat je <b>van plan was</b> of wat <b>stond te gebeuren</b>, en dat meestal niet doorging.</p>
<p><i>Seni ara<b>yacaktım</b>, ama şarjım bitti.</i> (Ik wilde je bellen, maar mijn batterij was leeg.) · <i>Dün gel<b>ecekti</b>, gelmedi.</i> (Hij zou gisteren komen, hij is niet gekomen.) · <i>Uçak saat sekizde kalk<b>acaktı</b>.</i> (Het vliegtuig zou om acht uur vertrekken.)</p>
<p>Met <b>tam</b> ervoor is het «net op het punt staan»: <i><b>Tam</b> çık<b>acaktım</b>, telefon çaldı.</i> (Ik wilde net weggaan, toen ging de telefoon.) Hetzelfde zeg je met <b>-mek üzereydi</b>: <i>Kapı kapan<b>mak üzereydi</b>.</i> (De gate stond op het punt te sluiten.)</p>
<p><b>Bijna</b> gebeurd: <b>az kalsın</b> of <b>neredeyse</b> + <b>-iyordu</b> of <b>-ecekti</b>: <i>Az kalsın uçağı kaçır<b>ıyordum</b>.</i> (Ik had bijna het vliegtuig gemist.) · <i>Neredeyse düş<b>ecektim</b>.</i> (Ik viel bijna.)</p>
<p>In een voorwaardelijke zin is -ecekti «zou hebben»: <i>Bilseydim gel<b>ecektim</b>.</i> Dat is stelliger dan <i>gelirdim</i> uit B1 unit 6: je was het echt van plan.</p>`,
        table: [['Turks', 'Nederlands'], ['Arayacaktım.', 'Ik wilde bellen / zou bellen.'], ['Tam çıkacaktım…', 'Ik wilde net weggaan…'], ['Kalkmak üzereydi.', 'Hij stond op het punt te vertrekken.'], ['Az kalsın kaçırıyordum.', 'Ik had het bijna gemist.']],
        sum: 'Seni arayacaktım, ama unuttum.',
        ex: [['Bugün alışverişe gidecektik, ama yağmur yağdı.', 'We zouden vandaag gaan winkelen, maar het regende.'], ['Tam uyuyacaktım, kapı çaldı.', 'Ik wilde net gaan slapen, toen ging de bel.'], ['Az kalsın bavulumu trende unutuyordum.', 'Ik had bijna mijn koffer in de trein laten staan.']] },
      { t: 'Een verhaal opbouwen', es: 'Hikâye anlatmak',
        html: `<p>Met vier tijden zet je een verhaal neer:<br>• <b>-di</b>: wat er gebeurde, stap voor stap<br>• <b>-iyordu</b>: de achtergrond, wat er bezig was<br>• <b>-mişti</b>: wat er daarvóór al gebeurd was<br>• <b>-ecekti</b>: wat er nog moest komen</p>
<p><i>Havalimanına <b>geldim</b>. Herkes kuyrukta <b>bekliyordu</b>. Uçuş iptal <b>edilmişti</b>. Oysa akşam bir toplantıya <b>katılacaktım</b>.</i></p>
<p><b>Meğer</b> («naar bleek») leidt een ontdekking in en krijgt <b>-miş</b>: <i><b>Meğer</b> yanlış kapıda bekliyor<b>muşum</b>!</i> (Ik bleek bij de verkeerde gate te staan wachten!) De -miş is hier geen roddel maar verrassing over jezelf.</p>
<p>Handige overgangen: <b>önce</b> (eerst), <b>derken</b> (en toen ineens), <b>tam o sırada</b> (precies op dat moment), <b>bir de baktım</b> (en wat zie ik), <b>neyse ki</b> (gelukkig), <b>sonunda</b> (uiteindelijk), <b>kısacası</b> (kortom).</p>`,
        table: [['woord', 'betekenis'], ['meğer', 'naar bleek'], ['derken', 'en toen ineens'], ['tam o sırada', 'precies op dat moment'], ['bir de baktım', 'en wat zie ik'], ['neyse ki', 'gelukkig maar']],
        sum: 'Meğer yanlış kapıda bekliyormuşum!',
        ex: [['Bir de baktım, cüzdanım yok!', 'En wat zie ik: mijn portemonnee is weg!'], ['Meğer bavulum başka bir uçağa yüklenmiş.', 'Mijn koffer bleek in een ander vliegtuig geladen te zijn.'], ['Neyse ki bir sonraki uçakta yer vardı.', 'Gelukkig was er plaats in het volgende vliegtuig.']] }
    ],
    dialogue: {
      t: 'Wat een reis!', place: 'İstanbul 🇹🇷',
      lines: [
        ['Burcu', 'Hoş geldin! Dün akşam gelecektin, ne oldu?', 'Welkom! Je zou gisteravond komen, wat is er gebeurd?'],
        ['Jasper', 'Sorma! Amsterdam’da havalimanına vardığımda uçuş iptal edilmişti.', 'Vraag maar niet! Toen ik in Amsterdam op het vliegveld aankwam, was de vlucht geannuleerd.'],
        ['Burcu', 'Olamaz! Sana haber vermemişler miydi?', 'Nee toch! Hadden ze het je niet laten weten?'],
        ['Jasper', 'Mesaj göndermişler, ama ben telefonumu kapatmıştım. Meğer sabahtan beri biliniyormuş.', 'Ze hadden een bericht gestuurd, maar ik had mijn telefoon uitgezet. Het bleek al sinds de ochtend bekend te zijn.'],
        ['Burcu', 'Peki sonra?', 'En toen?'],
        ['Jasper', 'Beni Münih aktarmalı bir uçağa koydular. Orada da rötar vardı; az kalsın ikinci uçağı kaçırıyordum.', 'Ze zetten me op een vlucht met een overstap in München. Daar was ook vertraging; ik had bijna het tweede vliegtuig gemist.'],
        ['Burcu', 'Vay canına. Bavulun geldi mi bari?', 'Jeetje. Is je koffer tenminste aangekomen?'],
        ['Jasper', 'Hayır! Tam çıkacaktım, bir de baktım bant boş. Bavul Münih’te kalmış.', 'Nee! Ik wilde net naar buiten gaan, en wat zie ik: de band is leeg. De koffer is in München gebleven.'],
        ['Burcu', 'Şikâyet ettin mi? Tazminat isteyebilirsin.', 'Heb je geklaagd? Je kunt schadevergoeding vragen.'],
        ['Jasper', 'Formu doldurdum. Yarın otele getireceklermiş. Neyse ki diş fırçamı el çantama koymuştum!', 'Ik heb het formulier ingevuld. Ze schijnen hem morgen naar het hotel te brengen. Gelukkig had ik mijn tandenborstel in mijn handbagage gedaan!']
      ],
      q: [
        { t: 'mc', q: 'Jasper havalimanına vardığında ne olmuştu?', o: ['Uçuş iptal edilmişti', 'Uçak çoktan kalkmıştı', 'Bavulu kaybolmuştu'] },
        { t: 'mc', q: 'Jasper mesajı neden görmedi?', o: ['Telefonunu kapatmıştı', 'Telefonunu evde unutmuştu', 'Mesaj gönderilmemişti'] },
        { t: 'mc', q: 'Bavul nerede kaldı?', o: ['Münih’te', 'Amsterdam’da', 'Otelde'] }
      ]
    },
    culture: { t: 'Otogar, dolmuş en «Allah kavuştursun»', html: `<p>Turkije is groot, en wie niet vliegt, neemt de <b>otobüs</b>. Elke stad heeft een <b>otogar</b> (busstation) waar tientallen maatschappijen roepend hun bestemmingen aanprijzen. Onderweg loopt een <b>muavin</b> (steward) door het gangpad met thee, water en <i>kolonya</i> voor je handen. Mannen en vrouwen die elkaar niet kennen, worden niet naast elkaar gezet.</p>
<p>Voor korte stukken is er de <b>dolmuş</b>: een busje dat vertrekt zodra het vol is (<i>dolmak</i> = vol raken). Je geeft het geld door naar voren en roept <i>İnecek var!</i> (er wil iemand uitstappen) als je er bent.</p>
<p>🧳 Wie vertrekt, krijgt water achter zich aan gegooid: <i>Su gibi git, su gibi gel</i> (ga en kom terug als water, vlot en ongehinderd). Tegen de achterblijvers zeg je <b>Allah kavuştursun</b>: moge God jullie herenigen.</p>` },
    ex: [
      { t: 'cloze', s: 'Havalimanına vardığımda uçak çoktan kalk___.', h: 'was ge-', a: ['mıştı'], o: ['mıştı', 'tı', 'acaktı'], nl: 'Toen ik op het vliegveld aankwam, was het vliegtuig allang vertrokken.', tag: 'tr-misti' },
      { t: 'cloze', s: 'Pasaportumu evde unut___.', h: 'ik had', a: ['muştum'], o: ['muştum', 'muşum', 'acaktım'], nl: 'Ik had mijn paspoort thuis laten liggen.', tag: 'tr-misti' },
      { t: 'cloze', s: 'Daha önce hiç uçağa bin___miştim.', h: 'niet', a: ['me'], o: ['me', 'ma', 'mi'], nl: 'Ik had nog nooit in een vliegtuig gezeten.', tag: 'tr-misti' },
      { t: 'mc', q: 'Wat betekent «Biletimi almıştım»?', o: ['Ik had mijn kaartje gekocht (dat weet ik zeker).', 'Ik schijn mijn kaartje gekocht te hebben.', 'Ik zou mijn kaartje kopen.'], x: '⚠️ Uitzondering: in -mişti betekent -miş niet «van horen zeggen». Het is hier het oude voltooid deelwoord; -ti zegt dat je het zelf weet.', tag: 'tr-misti' },
      { t: 'mc', q: 'Hoe zeg je «Hij schijnt gekomen te zijn» (je hebt het alleen gehoord)?', o: ['Gelmişmiş.', 'Gelmişti.', 'Gelecekti.'], x: '⚠️ Uitzondering: gelmişti is zeker weten. Voor horen zeggen komt er een tweede -miş achter.', tag: 'tr-misti' },
      { t: 'cloze', s: 'Seni ara___, ama şarjım bitti.', h: 'ik wilde', a: ['yacaktım'], o: ['yacaktım', 'mıştım', 'dım'], nl: 'Ik wilde je bellen, maar mijn batterij was leeg.', tag: 'tr-ecekti' },
      { t: 'cloze', s: 'Uçak saat sekizde kalk___, ama rötar var.', h: 'zou', a: ['acaktı'], o: ['acaktı', 'mıştı', 'ıyordu'], nl: 'Het vliegtuig zou om acht uur vertrekken, maar er is vertraging.', tag: 'tr-ecekti' },
      { t: 'cloze', s: '___ çıkacaktım, telefon çaldı.', h: 'net', a: ['Tam'], o: ['Tam', 'Çoktan', 'Henüz'], nl: 'Ik wilde net weggaan, toen ging de telefoon.', tag: 'tr-ecekti' },
      { t: 'cloze', s: 'Az ___ uçağı kaçırıyordum.', a: ['kalsın'], o: ['kalsın', 'kaldı', 'kalır'], nl: 'Ik had bijna het vliegtuig gemist.', tag: 'tr-ecekti' },
      { t: 'cloze', s: 'Kapı kapanmak ___.', h: 'stond op het punt', a: ['üzereydi'], o: ['üzereydi', 'içindi', 'kadardı'], nl: 'De gate stond op het punt te sluiten.', tag: 'tr-ecekti' },
      { t: 'cloze', s: '___ yanlış kapıda bekliyormuşum!', h: 'naar bleek', a: ['Meğer'], o: ['Meğer', 'Keşke', 'Neyse'], nl: 'Ik bleek bij de verkeerde gate te staan wachten!', tag: 'tr-misti' },
      { t: 'mc', q: 'Welke zin vertelt de achtergrond (wat er bezig was)?', o: ['Herkes kuyrukta bekliyordu.', 'Uçuş iptal edilmişti.', 'Formu doldurdum.'], tag: 'tr-iyordu' },
      { t: 'mc', q: 'Wat is «rötar»?', o: ['vertraging', 'overstap', 'douane'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik had het je toch gezegd!', a: ['Sana söylemiştim!', 'Sana demiştim!'], tag: 'tr-misti' },
      { t: 'tr', nl: 'Hij zou gisteren komen.', a: ['Dün gelecekti.'], tag: 'tr-ecekti' },
      { t: 'tr', nl: 'Ik viel bijna.', a: ['Az kalsın düşüyordum.', 'Neredeyse düşüyordum.', 'Neredeyse düşecektim.', 'Az kalsın düşecektim.'], tag: 'tr-ecekti' },
      { t: 'order', s: 'Eve geldiğimde herkes çoktan yatmıştı.', nl: 'Toen ik thuiskwam, was iedereen allang naar bed.', tag: 'tr-misti' },
      { t: 'match', p: [['rötar', 'vertraging'], ['aktarma', 'overstap'], ['gümrük', 'douane'], ['bagaj', 'bagage'], ['vize', 'visum'], ['aksilik', 'tegenslag']], tag: 'vocab' }
    ],
    reading: {
      t: 'Hayatımın en uzun gecesi', type: 'Reisblog',
      p: [
        ['Geçen kış Kars’a trenle gitmeye karar vermiştim. Doğu Ekspresi’ni yıllardır hayal ediyordum ve biletimi aylar önce almıştım.', 'Afgelopen winter had ik besloten met de trein naar Kars te gaan. Ik droomde al jaren van de Doğu Ekspresi en had mijn kaartje maanden van tevoren gekocht.'],
        ['Ankara’dan akşam kalkacaktık, ama kar yüzünden tren üç saat gecikti. Garda beklerken yanıma yaşlı bir adam oturdu. Meğer o da aynı vagonda yolculuk edecekmiş.', 'We zouden ’s avonds uit Ankara vertrekken, maar door de sneeuw had de trein drie uur vertraging. Terwijl ik op het station wachtte, kwam er een oude man naast me zitten. Hij bleek in dezelfde wagon te gaan reizen.'],
        ['Gece yarısı tren bir köyün yakınında durdu. Elektrikler kesilmişti ve vagon buz gibi olmuştu. Tam uyuyacaktım, adam çantasından bir termos çay ve ev yapımı börek çıkardı.', 'Rond middernacht stopte de trein bij een dorp. De stroom was uitgevallen en de wagon was ijskoud geworden. Ik wilde net gaan slapen, toen haalde de man een thermoskan thee en zelfgemaakte börek uit zijn tas.'],
        ['Sabaha kadar konuştuk. Kars’a on saat geç vardık, ama pişman değilim: o gece olmasaydı Hasan Amca’yı hiç tanımayacaktım.', 'We praatten tot de ochtend. We kwamen tien uur te laat in Kars aan, maar ik heb geen spijt: zonder die nacht had ik Hasan Amca nooit leren kennen.']
      ],
      gl: [['gar', 'station'], ['vagon', 'wagon'], ['elektrik kesilmek', 'stroom uitvallen'], ['buz gibi', 'ijskoud'], ['termos', 'thermoskan']],
      q: [
        { t: 'mc', q: 'Yazar biletini ne zaman almıştı?', o: ['Aylar önce', 'Aynı gün', 'Garda'] },
        { t: 'mc', q: 'Tren neden gecikti?', o: ['Kar yüzünden', 'Grev yüzünden', 'Bir kaza yüzünden'] },
        { t: 'mc', q: 'Yaşlı adam çantasından ne çıkardı?', o: ['Çay ve börek', 'Bir battaniye', 'Bir kitap'] }
      ]
    },
    say: [['Uçak çoktan kalkmıştı.', 'Het vliegtuig was allang vertrokken.'], ['Seni arayacaktım, ama unuttum.', 'Ik wilde je bellen, maar ik ben het vergeten.'], ['Az kalsın treni kaçırıyordum.', 'Ik had bijna de trein gemist.'], ['Sana söylemiştim!', 'Ik had het je toch gezegd!']],
    task: { nl: 'Vertel in 6 tot 8 zinnen over een reis waarbij iets misging. Gebruik de vier tijden: -di voor wat er gebeurde, -iyordu voor de achtergrond, minstens twee keer -mişti en één keer -ecekti. Zet er meğer of az kalsın in.', model: 'İki yıl önce Roma’ya gidiyordum. Havalimanına erken gelmiştim, çünkü önceki yolculukta uçağı kaçırmıştım. Kahve içerken anons yapıldı: uçuş iptal edilmişti. Akşam bir konsere gidecektim, biletini de almıştım. Meğer İtalya’da grev varmış. Az kalsın eve dönüyordum, ama bir görevli beni başka bir uçağa koydu. Konsere tam zamanında yetiştim!' },
    scenario: { nl: 'Je komt een dag te laat aan bij je vriendin Burcu in İstanbul. Ze wil precies weten wat er onderweg gebeurd is.', role: 'You are Burcu, a friend in İstanbul. The learner arrived a day late. Ask what happened (Dün gelecektin, ne oldu?), react with surprise and sympathy (Olamaz! Vay canına!), ask follow-up questions that invite -mişti and -ecekti (Haber vermemişler miydi? Ne yapacaktın?), and tell a short travel mishap of your own. Use B2 Turkish.', goal: 'Vertel je pechverhaal met -mişti en -ecekti en zeg hoe het afliep.' }
  });

  /* ───────────────────────── B2 · 2 ───────────────────────── */
  U({
    id: 'tr-b2-02', level: 'B2', icon: '📋', title: 'Gelip gelmeyeceğini sordu', nl: 'Navertellen: vragen, antwoorden en opdrachten',
    goals: ['Navertellen wat iemand vroeg', 'Een ja/nee-vraag navertellen met -ip -mediğini', 'Doorgeven wat iemand moet doen met -mesini söylemek', 'Een boodschap aannemen en doorgeven op het werk'],
    vocab: [
      ['oturum', 'zitting / sessie'], ['gündem maddesi', 'agendapunt'], ['tutanak', 'notulen'], ['rapor', 'rapport / verslag'], ['sunum', 'presentatie'], ['teklif', 'voorstel / offerte'], ['onaylamak', 'goedkeuren'],
      ['reddetmek', 'afwijzen'], ['öne almak', 'vervroegen'], ['hatırlatmak', 'herinneren aan'], ['uyarmak', 'waarschuwen'], ['emretmek', 'bevelen'], ['ısrar etmek', 'aandringen'], ['itiraz etmek', 'bezwaar maken'],
      ['önermek', 'voorstellen'], ['merak etmek', 'zich afvragen / benieuwd zijn'], ['bildirmek', 'meedelen'], ['iletmek', 'doorgeven'], ['not almak', 'aantekeningen maken'], ['son tarih', 'deadline'],
      ['bütçe', 'budget'], ['tedarikçi', 'leverancier'], ['sipariş', 'bestelling'], ['teslimat', 'levering'], ['gecikme', 'vertraging (werk)'], ['yetkili', 'bevoegde / verantwoordelijke'], ['ivedi', 'spoedeisend'],
      ['ayrıntı', 'detail'], ['özetlemek', 'samenvatten'], ['kararlaştırmak', 'afspreken / besluiten']
    ],
    grammar: [
      { t: 'Een vraag navertellen', es: 'Dolaylı soru',
        html: `<p>In B1 unit 4 leerde je een mededeling navertellen met <b>-diğini</b>: <i>Geleceğ<b>ini</b> söyledi.</i> Een <b>vraag</b> gaat net zo, met <b>sormak</b> (vragen), <b>merak etmek</b> (zich afvragen), <b>bilmek</b> (weten) of <b>öğrenmek</b> (te weten komen).</p>
<p><b>Met een vraagwoord</b> blijft het vraagwoord gewoon staan: <i>«Ne zaman geleceksin?»</i> → <i><b>Ne zaman</b> geleceğ<b>imi</b> sordu.</i> (Hij vroeg wanneer ik zou komen.) · <i>«Toplantı nerede?»</i> → <i>Toplantının <b>nerede</b> olduğ<b>unu</b> biliyor musun?</i> · <i><b>Kim</b>in ara<b>dığını</b> söylemedi.</i></p>
<p><b>Een ja/nee-vraag</b> heeft geen vraagwoord. Het Turks zegt dan letterlijk «of hij komt, niet komt»: het werkwoord staat <b>twee keer</b>, eerst met <b>-ip</b>, dan <b>ontkennend</b> met -diği / -eceği:</p>
<p><i>«Geliyor musun?»</i> → <i>Gel<b>ip</b> gel<b>me</b>diğimi sordu.</i> (Hij vroeg of ik kwam.)<br><i>«Gelecek misin?»</i> → <i>Gel<b>ip</b> gel<b>me</b>yeceğimi sordu.</i> (Hij vroeg of ik zou komen.)<br><i>Rapor<b>un</b> hazır ol<b>up</b> ol<b>ma</b>dığını bilmiyorum.</i> (Ik weet niet of het rapport klaar is.)</p>
<p>Het <b>mi</b> van de vraag verdwijnt dus helemaal. In spreektaal hoor je daarnaast de directe vorm met <b>diye</b>: <i>«Geliyor musun?» <b>diye</b> sordu.</i></p>`,
        table: [['directe vraag', 'naverteld'], ['«Ne zaman geleceksin?»', 'Ne zaman geleceğimi sordu.'], ['«Nerede oturuyorsun?»', 'Nerede oturduğumu sordu.'], ['«Geliyor musun?»', 'Gelip gelmediğimi sordu.'], ['«Gelecek misin?»', 'Gelip gelmeyeceğimi sordu.'], ['«Rapor hazır mı?»', 'Raporun hazır olup olmadığını sordu.']],
        sum: 'Gelip gelmeyeceğimi sordu.',
        ex: [['Müşteri siparişin ne zaman geleceğini soruyor.', 'De klant vraagt wanneer de bestelling komt.'], ['Toplantıya katılıp katılmayacağını bilmiyorum.', 'Ik weet niet of hij aan de vergadering deelneemt.'], ['Teklifi onaylayıp onaylamadıklarını öğrenir misin?', 'Wil je uitzoeken of ze het voorstel hebben goedgekeurd?'], ['Kimin aradığını söylemedi.', 'Hij zei niet wie er gebeld had.']] },
      { t: 'Een opdracht of verzoek doorgeven: -mesini', es: 'Dolaylı emir',
        html: `<p>Wat iemand <b>moet doen</b>, vertel je na met <b>-me + bezit + -i</b>: de vorm van <i>istemek</i> uit B1 unit 4. Het verschil met -diğini is groot:</p>
<p><i>Gel<b>diğini</b> söyledi.</i> (Hij zei <b>dat</b> hij gekomen is: een feit.)<br><i>Gel<b>mesini</b> söyledi.</i> (Hij zei dat hij <b>moest</b> komen: een opdracht.)</p>
<p><i>«Raporu yarına kadar bitir!»</i> → <i>Müdür raporu yarına kadar bitir<b>memi</b> söyledi.</i> (De directeur zei dat ik het rapport voor morgen moest afmaken.) · <i>«Beni arayın.»</i> → <i>Kendisini ara<b>manızı</b> rica etti.</i> (Hij verzocht u hem te bellen.)</p>
<p><b>Niet doen:</b> <i>«Kimseye söyleme!»</i> → <i>Kimseye söyle<b>me</b>me<b>mi</b> istedi.</i> (Hij vroeg me het aan niemand te vertellen.)</p>
<p>Welke naamval het werkwoord wil, hoort bij het werkwoord: <i>-mesini <b>söylemek / istemek / rica etmek / önermek / emretmek</b></i> (-i), maar <i>-mesi<b>ne</b> <b>izin vermek / karar vermek / itiraz etmek</b></i> (-e) en <i>-mesi <b>için ısrar etmek</b></i>.</p>
<p><b>⚠️ Uitzondering:</b> bij <b>demek</b> (zeggen) kan dit allemaal <b>niet</b>. <s>Geleceğini dedi</s> en <s>Gelmemi dedi</s> zijn fout; het is <i>«Geleceğim» <b>dedi</b></i> of <i>Geleceğini <b>söyledi</b></i>. <b>Waarom?</b> <i>Demek</i> is het werkwoord dat de <b>letterlijke woorden</b> aanhaalt: wat ervoor staat, is altijd een citaat en geen zinsdeel met een naamval. Voor de inhoud van wat iemand zei is er <i>söylemek</i>. Daarom is <i>diye</i> («zeggende») ook het woordje dat een citaat aan een ander werkwoord plakt.</p>`,
        table: [['direct', 'naverteld'], ['«Gel!»', 'Gelmemi söyledi.'], ['«Bekleyin, lütfen.»', 'Beklememizi rica etti.'], ['«Söyleme!»', 'Söylememeni istedi.'], ['«Geliyorum.» ⚠️', '«Geliyorum» dedi. / Geldiğini söyledi.']],
        sum: 'Raporu bitirmemi söyledi.',
        ex: [['Yetkili, formu doldurmamızı istedi.', 'De verantwoordelijke wilde dat we het formulier invulden.'], ['Toplantıyı ertelemelerini önerdim.', 'Ik heb voorgesteld dat ze de vergadering uitstellen.'], ['Geç kalmamamı söylemişti.', 'Hij had gezegd dat ik niet te laat moest komen.'], ['«Bütçe yetmez» dedi.', 'Hij zei: «Het budget is niet genoeg.»']] },
      { t: 'Tijd en persoon schuiven niet mee', es: 'Zaman ve kişi',
        html: `<p>In het Nederlands verandert de tijd bij navertellen: «Ik kom» → hij zei dat hij <b>kwam</b>. Het Turks doet dat <b>niet</b>. Er zijn maar twee vormen:<br>• <b>-diği</b> voor alles wat op het moment van spreken <b>nu of vroeger</b> was<br>• <b>-eceği</b> voor wat toen nog <b>moest komen</b></p>
<p><i>«Yorgunum.»</i> → <i>Yorgun ol<b>duğunu</b> söyledi.</i> (Hij zei dat hij moe was.)<br><i>«Dün geldim.»</i> → <i>Dün gel<b>diğini</b> söyledi.</i><br><i>«Yarın geleceğim.»</i> → <i>Yarın gel<b>eceğini</b> söyledi.</i> (Hij zei dat hij morgen zou komen.)</p>
<p>Wil je duidelijk maken dat iets <b>bezig</b> was of <b>al voorbij</b>, dan zet je <i>olduğunu</i> achter de tijd: <i>Çalış<b>makta olduğunu</b> söyledi.</i> (dat hij aan het werk was) · <i>Raporu bitir<b>miş olduğunu</b> söyledi.</i> (dat hij het rapport af had)</p>
<p>De <b>persoon</b> verandert wel, net als in het Nederlands, en zit in de bezitsuitgang: <i>«Seni arayacağım.»</i> → <i>Ben<b>i</b> arayacağ<b>ını</b> söyledi.</i></p>
<p>Zo geef je een boodschap door: <i>Ahmet Bey aradı. Toplantının saat üçe alın<b>dığını</b> ilet<b>memi</b> istedi.</i> (Meneer Ahmet belde. Hij vroeg me door te geven dat de vergadering naar drie uur is verzet.)</p>`,
        table: [['hij zei', 'naverteld', 'Nederlands'], ['«Yorgunum.»', 'yorgun olduğunu', 'dat hij moe was'], ['«Geldim.»', 'geldiğini', 'dat hij gekomen was'], ['«Geleceğim.»', 'geleceğini', 'dat hij zou komen'], ['«Çalışıyorum.»', 'çalıştığını', 'dat hij werkte']],
        sum: 'Yarın geleceğini söyledi.',
        ex: [['Müşteri, teslimatın geciktiğini bildirdi.', 'De klant deelde mee dat de levering vertraagd was.'], ['Sunumu cuma günü yapacağını söyledi.', 'Hij zei dat hij de presentatie vrijdag zou geven.'], ['Size haber vereceğini iletmemi istedi.', 'Hij vroeg me door te geven dat hij u bericht zal sturen.']] }
    ],
    dialogue: {
      t: 'Er is voor je gebeld', place: 'İzmir 🇹🇷',
      lines: [
        ['Pınar', 'Günaydın Sven. Sen toplantıdayken Kaya Bey aradı.', 'Goedemorgen Sven. Terwijl je in de vergadering zat, heeft meneer Kaya gebeld.'],
        ['Sven', 'Ne istiyormuş?', 'Wat wilde hij?'],
        ['Pınar', 'Siparişin ne zaman teslim edileceğini sordu. Bir de teklifi onaylayıp onaylamadığımızı öğrenmek istiyor.', 'Hij vroeg wanneer de bestelling geleverd wordt. En hij wil weten of we de offerte hebben goedgekeurd.'],
        ['Sven', 'Henüz onaylamadık. Bütçeye bakmam gerektiğini söyledin mi?', 'Nog niet. Heb je gezegd dat ik naar het budget moet kijken?'],
        ['Pınar', 'Söyledim. O da acele etmemizi rica etti; son tarihin cuma olduğunu hatırlattı.', 'Ja. Hij verzocht ons op te schieten; hij herinnerde eraan dat de deadline vrijdag is.'],
        ['Sven', 'Tamam. Başka bir şey dedi mi?', 'Goed. Zei hij nog iets?'],
        ['Pınar', '«Sven Bey beni mutlaka bugün arasın» dedi. Yani bugün aramanı istiyor.', 'Hij zei: «Laat meneer Sven me in elk geval vandaag bellen.» Hij wil dus dat je vandaag belt.'],
        ['Sven', 'Peki. Müdür toplantıda teslimatın bir hafta gecikeceğini söyledi. Bunu ona nasıl anlatacağım?', 'Oké. De directeur zei in de vergadering dat de levering een week vertraging krijgt. Hoe ga ik hem dat vertellen?'],
        ['Pınar', 'Dürüst ol. Gecikmenin nedenini açıklayıp özür dilemeni öneririm.', 'Wees eerlijk. Ik raad je aan de reden van de vertraging uit te leggen en je excuses aan te bieden.'],
        ['Sven', 'Haklısın. Kabul edip etmeyeceğini bilmiyorum, ama deneyeceğim.', 'Je hebt gelijk. Ik weet niet of hij het accepteert, maar ik ga het proberen.']
      ],
      q: [
        { t: 'mc', q: 'Kaya Bey ne sordu?', o: ['Siparişin ne zaman teslim edileceğini', 'Sven’in nerede oturduğunu', 'Toplantının kaçta bittiğini'] },
        { t: 'mc', q: 'Son tarih ne zaman?', o: ['Cuma', 'Bugün', 'Gelecek hafta'] },
        { t: 'mc', q: 'Pınar Sven’e ne öneriyor?', o: ['Nedeni açıklayıp özür dilemesini', 'Kaya Bey’i hiç aramamasını', 'Teklifi reddetmesini'] }
      ]
    },
    culture: { t: 'Zakendoen: eerst thee, dan zaken', html: `<p>Een Turkse zakelijke afspraak begint zelden met de zaak zelf. Eerst komt er <b>çay</b>, en een gesprek over de reis, de familie, het voetbal. Dat is geen tijdverlies: vertrouwen (<b>güven</b>) gaat vóór het contract, en wie meteen ter zake komt, lijkt gehaast of onbeleefd.</p>
<p>Een rechtstreeks «nee» is zeldzaam. <b>Bakarız</b> (we zien wel), <b>İnşallah</b> (als God het wil) of <b>Bir düşünelim</b> (laten we erover nadenken) betekenen vaak «waarschijnlijk niet». Andersom is <b>Hallederiz</b> (we regelen het) een belofte van goede wil, nog geen toezegging met een datum. Vraag daarom altijd door: <i>Ne zamana kadar?</i></p>
<p>📞 Titels doen ertoe: <i>Müdür Bey</i>, <i>Hocam</i> (voor iedereen die lesgeeft of veel weet), <i>Doktor Hanım</i>. Een bericht sluit je af met <b>İyi çalışmalar</b> (fijne werkdag).</p>` },
    ex: [
      { t: 'cloze', s: 'Ne zaman gel___ sordu.', h: 'dat ik zou', a: ['eceğimi'], o: ['eceğimi', 'memi', 'ecek mi'], nl: 'Hij vroeg wanneer ik zou komen.', tag: 'tr-indir' },
      { t: 'cloze', s: 'Toplantıya gelip gel___ sordu.', h: 'of ik zou', a: ['meyeceğimi'], o: ['meyeceğimi', 'eceğimi', 'memi'], nl: 'Hij vroeg of ik naar de vergadering zou komen.', x: 'Ja/nee-vraag navertellen: twee keer het werkwoord, eerst -ip, dan ontkennend.', tag: 'tr-indir' },
      { t: 'cloze', s: 'Raporun hazır ol___ olmadığını bilmiyorum.', h: 'of', a: ['up'], o: ['up', 'duğu', 'an'], nl: 'Ik weet niet of het rapport klaar is.', tag: 'tr-indir' },
      { t: 'mc', q: 'Vertel na: «Yorgun musun?»', o: ['Yorgun olup olmadığımı sordu.', 'Yorgun mu olduğumu sordu.', 'Yorgun olmamı sordu.'], x: 'Het vraagpartikel mi verdwijnt; daarvoor komt olup olmadığı in de plaats.', tag: 'tr-indir' },
      { t: 'mc', q: 'Wat is het verschil? «Geldiğini söyledi» ↔ «Gelmesini söyledi»', o: ['dat hij gekomen is ↔ dat hij moet komen', 'dat hij moet komen ↔ dat hij gekomen is', 'geen verschil'], tag: 'tr-emir' },
      { t: 'cloze', s: 'Müdür raporu yarına kadar bitir___ söyledi.', h: 'dat ik moest', a: ['memi'], o: ['memi', 'diğimi', 'eceğimi'], nl: 'De directeur zei dat ik het rapport voor morgen moest afmaken.', tag: 'tr-emir' },
      { t: 'cloze', s: 'Kendisini ara___ rica etti.', h: 'dat u', a: ['manızı'], o: ['manızı', 'dığınızı', 'yacağınızı'], nl: 'Hij verzocht u hem te bellen.', tag: 'tr-emir' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['«Geleceğim» dedi.', 'Geleceğini dedi.', 'Gelmesini dedi.'], x: '⚠️ Uitzondering: demek haalt alleen letterlijke woorden aan en kan geen -diğini of -mesini voor zich hebben. Daarvoor gebruik je söylemek.', tag: 'tr-emir' },
      { t: 'cloze', s: 'Geleceğini ___.', h: 'hij zei', a: ['söyledi'], o: ['söyledi', 'dedi', 'diye'], nl: 'Hij zei dat hij zou komen.', x: '⚠️ Uitzondering: na -diğini / -eceğini komt söylemek, nooit demek.', tag: 'tr-emir' },
      { t: 'mc', q: 'Vertel na: «Yarın geleceğim.»', o: ['Yarın geleceğini söyledi.', 'Yarın geldiğini söyledi.', 'Yarın gelmesini söyledi.'], x: 'De tijd schuift niet mee: wat toen nog moest komen, blijft -eceği.', tag: 'tr-indir' },
      { t: 'cloze', s: 'Toplantıyı ertelemelerine itiraz ___.', h: 'ik maakte', a: ['ettim'], o: ['ettim', 'verdim', 'yaptım'], nl: 'Ik heb er bezwaar tegen gemaakt dat ze de vergadering uitstellen.', tag: 'tr-emir' },
      { t: 'mc', q: 'Wat betekent «son tarih»?', o: ['deadline', 'vorige week', 'geschiedenis'], tag: 'vocab' },
      { t: 'tr', nl: 'Hij vroeg waar ik woon.', a: ['Nerede oturduğumu sordu.', 'Nerede yaşadığımı sordu.'], tag: 'tr-indir' },
      { t: 'tr', nl: 'Ik weet niet of hij komt.', a: ['Gelip gelmeyeceğini bilmiyorum.', 'Gelip gelmediğini bilmiyorum.'], tag: 'tr-indir' },
      { t: 'tr', nl: 'Hij wil dat je vandaag belt.', a: ['Bugün aramanı istiyor.', 'Bugün onu aramanı istiyor.'], tag: 'tr-emir' },
      { t: 'order', s: 'Müşteri siparişin ne zaman teslim edileceğini öğrenmek istiyor.', nl: 'De klant wil weten wanneer de bestelling geleverd wordt.', tag: 'tr-indir' },
      { t: 'match', p: [['toplantı', 'vergadering'], ['rapor', 'rapport'], ['teklif', 'voorstel'], ['bütçe', 'budget'], ['sipariş', 'bestelling'], ['ayrıntı', 'detail']], tag: 'vocab' }
    ],
    reading: {
      t: 'Toplantı tutanağı', type: 'Notulen',
      p: [
        ['Toplantı 12 Mart Salı günü saat 10.00’da başladı. Genel Müdür, geçen ayın satışlarının beklenenden düşük olduğunu belirtti ve nedenini sordu.', 'De vergadering begon op dinsdag 12 maart om 10.00 uur. De algemeen directeur gaf aan dat de verkopen van vorige maand lager waren dan verwacht en vroeg naar de reden.'],
        ['Satış Müdürü, iki büyük müşterinin siparişlerini ertelediğini açıkladı. Yeni bir kampanya yapılıp yapılmayacağı tartışıldı.', 'De verkoopdirecteur legde uit dat twee grote klanten hun bestellingen hebben uitgesteld. Er werd besproken of er een nieuwe campagne komt.'],
        ['Pazarlama ekibi, bütçenin artırılmasını önerdi. Mali İşler Müdürü buna itiraz etti ve önce ayrıntılı bir rapor hazırlanmasını istedi.', 'Het marketingteam stelde voor het budget te verhogen. De financieel directeur maakte daar bezwaar tegen en wilde dat er eerst een gedetailleerd rapport wordt opgesteld.'],
        ['Raporun 20 Mart’a kadar teslim edilmesi kararlaştırıldı. Bir sonraki toplantının 26 Mart’ta yapılacağı bildirildi.', 'Er werd afgesproken dat het rapport uiterlijk 20 maart wordt ingeleverd. Er werd meegedeeld dat de volgende vergadering op 26 maart plaatsvindt.']
      ],
      gl: [['satış', 'verkoop'], ['tartışmak', 'bespreken / discussiëren'], ['pazarlama', 'marketing'], ['artırmak', 'verhogen'], ['mali işler', 'financiën']],
      q: [
        { t: 'mc', q: 'Genel Müdür ne sordu?', o: ['Satışların neden düşük olduğunu', 'Toplantının ne zaman biteceğini', 'Kimin geç kaldığını'] },
        { t: 'mc', q: 'Pazarlama ekibi ne önerdi?', o: ['Bütçenin artırılmasını', 'Toplantının ertelenmesini', 'Müşterilerin aranmasını'] },
        { t: 'mc', q: 'Rapor ne zamana kadar teslim edilecek?', o: ['20 Mart’a kadar', '12 Mart’a kadar', '26 Mart’a kadar'] }
      ]
    },
    say: [['Ne zaman geleceğimi sordu.', 'Hij vroeg wanneer ik zou komen.'], ['Gelip gelmeyeceğini bilmiyorum.', 'Ik weet niet of hij komt.'], ['Bugün aramanı istiyor.', 'Hij wil dat je vandaag belt.'], ['Yarın geleceğini söyledi.', 'Hij zei dat hij morgen zou komen.']],
    task: { nl: 'Een collega heeft voor je baas gebeld toen die er niet was. Schrijf een notitie van 5 of 6 zinnen. Vertel een mededeling na (-diğini / -eceğini), een vraag met een vraagwoord, een ja/nee-vraag (-ip -mediğini) en een verzoek (-mesini).', model: 'Merhaba Aylin Hanım, siz yokken Deniz Bey aradı. Sözleşmenin hazır olduğunu söyledi. Ne zaman imzalayabileceğinizi sordu. Ayrıca perşembe günkü toplantıya katılıp katılmayacağınızı öğrenmek istiyor. Kendisini bugün saat beşten önce aramanızı rica etti. Acil olduğunu da ekledi. İyi çalışmalar.' },
    scenario: { nl: 'Je collega Pınar heeft een telefoontje voor je aangenomen van een belangrijke klant. Je wilt precies weten wat hij zei en vroeg.', role: 'You are Pınar, a colleague in an office in İzmir. A client, Kaya Bey, called while the learner was in a meeting. Report what he said, asked and requested using indirect speech (…-diğini söyledi, …-ip -mediğini sordu, …-mesini rica etti), ask the learner what the director said in the meeting, and advise how to respond. Use B2 Turkish.', goal: 'Vraag wat de klant precies zei, vertel wat er in de vergadering gezegd is en spreek af wat je gaat doen.' }
  });
})(window.SPT);
