/* Turks voor Nederlandstaligen — niveau B2, units 5–6 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── B2 · 5 ───────────────────────── */
  U({
    id: 'tr-b2-05', level: 'B2', icon: '🤝', title: 'Anlaşamıyoruz', nl: 'Relaties en ruzies: elkaar en zichzelf',
    goals: ['Over vriendschap, ruzie en goedmaken praten', 'Elkaar zeggen met -iş- en birbiri', 'Zich zeggen met -in- en kendi', 'Veranderingen beschrijven met -leş- en -len-'],
    vocab: [
      ['ilişki', 'relatie / verhouding'], ['dostluk', 'vriendschap'], ['anlaşmak', 'het eens worden / goed overweg kunnen'], ['atışmak', 'kibbelen'], ['darılmak', 'boos worden op'], ['küsmek', 'boos zijn en niet meer praten'], ['gönül almak', 'het goedmaken (iemands hart winnen)'],
      ['kırılmak', 'gekwetst zijn / breken'], ['gücenmek', 'zich beledigd voelen'], ['affetmek', 'vergeven'], ['özür', 'excuus'], ['güvenmek', 'vertrouwen'], ['kıskanmak', 'jaloers zijn'], ['iftira', 'laster'],
      ['yanlış anlamak', 'verkeerd begrijpen'], ['yanlış anlaşılma', 'misverstand'], ['suçlamak', 'beschuldigen'], ['savunmak', 'verdedigen'], ['destek olmak', 'steunen'], ['sırdaş', 'vertrouweling'],
      ['samimi', 'oprecht / close'], ['saygı', 'respect'], ['hoşgörü', 'verdraagzaamheid'], ['inatçı', 'koppig'], ['kırgın', 'gekwetst'], ['öfkeli', 'woedend'], ['birbiri', 'elkaar'],
      ['kendi kendine', 'in zichzelf / op zichzelf'], ['yakınlaşmak', 'naar elkaar toe groeien'], ['uzaklaşmak', 'van elkaar vervreemden'], ['ayrılık', 'scheiding / afscheid']
    ],
    grammar: [
      { t: 'Elkaar: -iş- en birbiri', es: 'İşteş çatı',
        html: `<p>Doe je iets <b>met elkaar</b> of <b>tegen elkaar</b>, dan zet het Turks <b>-iş-</b> (ış, iş, uş, üş; na een klinker alleen <b>-ş-</b>) achter de stam:</p>
<p><i>gör-mek</i> (zien) → <i>gör-<b>üş</b>-mek</i> (elkaar zien, spreken) · <i>bul-</i> → <i>bul<b>uş</b>mak</i> (afspreken) · <i>yaz-</i> → <i>yaz<b>ış</b>mak</i> (corresponderen) · <i>anla-</i> → <i>anla<b>ş</b>mak</i> (elkaar begrijpen, het eens worden) · <i>tanı-</i> → <i>tanı<b>ş</b>mak</i> (kennismaken) · <i>öp-</i> → <i>öp<b>üş</b>mek</i> · <i>döv-</i> → <i>döv<b>üş</b>mek</i> (vechten).</p>
<p>Met wie staat erbij met <b>ile / -le</b>: <i>Ali<b>’yle</b> görüştüm.</i> (Ik heb Ali gesproken.) · <i>Komşular<b>la</b> iyi anlaşıyoruz.</i></p>
<p>Ook van naamwoorden, met <b>-leş-</b>: <i>mektup<b>laş</b>mak</i> (brieven wisselen), <i>selam<b>laş</b>mak</i> (elkaar groeten), <i>haber<b>leş</b>mek</i> (contact houden), <i>veda<b>laş</b>mak</i> (afscheid nemen), <i>dert<b>leş</b>mek</i> (elkaar je hart luchten), <i>yardım<b>laş</b>mak</i> (elkaar helpen).</p>
<p>Bestaat er geen -iş-vorm, of wil je nadruk, gebruik dan <b>birbiri</b> + bezit + naamval: <i>Birbir<b>imizi</b> seviyoruz.</i> (We houden van elkaar.) · <i>Birbir<b>inize</b> yardım edin.</i> · <i>Birbir<b>lerinden</b> nefret ediyorlar.</i></p>
<p><b>⚠️ Uitzondering:</b> je kunt -iş- <b>niet zelf</b> achter elk werkwoord zetten. <i>Sevmek</i> (houden van) → <i>sev<b>iş</b>mek</i> betekent niet «van elkaar houden» maar «vrijen»; dat eerste is <i>birbirini sevmek</i>. En <i>gelişmek</i> (zich ontwikkelen), <i>yetişmek</i> (halen), <i>alışmak</i> (wennen), <i>çalışmak</i> (werken) hebben helemaal niets met «elkaar» te maken. <b>Waarom?</b> -iş- is een oud achtervoegsel dat niet meer vrij wordt gebruikt. De woorden waar het in zit, zijn vaste woorden geworden en hebben in de loop van de tijd elk hun eigen betekenis gekregen. Leer ze daarom als losse woorden, en neem voor iets nieuws altijd <i>birbiri</i>.</p>`,
        table: [['werkwoord', 'met -iş-', 'betekenis'], ['görmek', 'görüşmek', 'elkaar zien / spreken'], ['bulmak', 'buluşmak', 'afspreken'], ['anlamak', 'anlaşmak', 'het eens worden'], ['yazmak', 'yazışmak', 'corresponderen'], ['sevmek ⚠️', 'sevişmek', 'vrijen (niet: van elkaar houden)'], ['— ⚠️', 'alışmak', 'wennen (geen «elkaar»)']],
        sum: 'Görüşürüz! Birbirimizi seviyoruz.',
        ex: [['Yarın saat beşte buluşalım mı?', 'Zullen we morgen om vijf uur afspreken?'], ['Kardeşimle hiç anlaşamıyoruz.', 'Mijn broer en ik kunnen helemaal niet met elkaar overweg.'], ['Yıllardır yazışıyoruz.', 'We schrijven elkaar al jaren.'], ['Birbirimize her şeyi anlatırız.', 'We vertellen elkaar alles.']] },
      { t: 'Zich: -in- en kendi', es: 'Dönüşlü çatı',
        html: `<p>Doe je iets <b>met jezelf</b>, dan heeft het Turks <b>-in-</b> (na een klinker <b>-n-</b>): <i>yıka-mak</i> (wassen) → <i>yıka<b>n</b>mak</i> (zich wassen) · <i>giy-</i> → <i>giy<b>in</b>mek</i> (zich aankleden) · <i>tara-</i> → <i>tara<b>n</b>mak</i> (zijn haar kammen) · <i>hazırla-</i> → <i>hazırla<b>n</b>mak</i> (zich klaarmaken) · <i>süsle-</i> → <i>süsle<b>n</b>mek</i> (zich opdoffen) · <i>sakla-</i> → <i>sakla<b>n</b>mak</i> (zich verstoppen).</p>
<p>De vorm is dezelfde als de lijdende vorm na een klinker (B1 unit 7). <i>Çocuk yıkandı</i> kan dus «het kind waste zich» of «het kind werd gewassen» zijn; de situatie beslist.</p>
<p>Bij gevoelens zit -in- in veel vaste werkwoorden: <i>sev<b>in</b>mek</i> (blij zijn), <i>üz<b>ül</b>mek</i> (verdrietig zijn), <i>kır<b>ıl</b>mak</i> (gekwetst zijn), <i>güce<b>n</b>mek</i>, <i>dinle<b>n</b>mek</i> (uitrusten), <i>söyle<b>n</b>mek</i> (mopperen).</p>
<p>Het losse woord is <b>kendi</b> + bezit + naamval: <i>Kendi<b>mi</b> iyi hissetmiyorum.</i> (Ik voel me niet goed.) · <i>Kendi<b>ne</b> iyi bak!</i> (Pas goed op jezelf!) · <i>Kendi<b>nden</b> başka kimseyi düşünmüyor.</i> (Hij denkt aan niemand behalve zichzelf.)</p>
<p><b>Kendi kendine</b> is «in je eentje, vanzelf, in zichzelf»: <i>Kendi kendine konuşuyor.</i> (Hij praat in zichzelf.) · <i>Kapı kendi kendine açıldı.</i> (De deur ging vanzelf open.) En <b>kendi</b> vóór een naamwoord is «eigen»: <i>kendi evim</i> (mijn eigen huis).</p>`,
        table: [['', 'zelf / zich', 'aan zichzelf'], ['ben', 'kendimi', 'kendime'], ['sen', 'kendini', 'kendine'], ['o', 'kendini', 'kendine'], ['biz', 'kendimizi', 'kendimize'], ['siz', 'kendinizi', 'kendinize'], ['onlar', 'kendilerini', 'kendilerine']],
        sum: 'Kendine iyi bak!',
        ex: [['Hazırlanıyorum, beş dakikaya çıkarız.', 'Ik ben me aan het klaarmaken, over vijf minuten gaan we.'], ['Kendimi çok yalnız hissediyorum.', 'Ik voel me erg eenzaam.'], ['Kendi kendime «Sakin ol» dedim.', 'Ik zei tegen mezelf: «Blijf kalm.»']] },
      { t: 'Worden: -leş- en -len-', es: 'Olma bildiren ekler',
        html: `<p>Van een bijvoeglijk of zelfstandig naamwoord maak je met <b>-leş- / -laş-</b> een werkwoord dat <b>«… worden»</b> betekent: <i>güzel</i> → <i>güzel<b>leş</b>mek</i> (mooier worden) · <i>kolay</i> → <i>kolay<b>laş</b>mak</i> (makkelijker worden) · <i>zor<b>laş</b>mak</i> · <i>yakın<b>laş</b>mak</i> (dichterbij komen) · <i>uzak<b>laş</b>mak</i> · <i>iyi<b>leş</b>mek</i> (beter worden) · <i>modern<b>leş</b>mek</i> · <i>şişman<b>la</b>mak</i> is een uitzondering zonder ş.</p>
<p>Met <b>-len- / -lan-</b> is het «… krijgen, raken»: <i>ev<b>len</b>mek</i> (trouwen, lett. een huis krijgen) · <i>hasta<b>lan</b>mak</i> (ziek worden) · <i>sinir<b>len</b>mek</i> (zich kwaad maken) · <i>heyecan<b>lan</b>mak</i> (opgewonden raken) · <i>yaş<b>lan</b>mak</i> (oud worden) · <i>ilgi<b>len</b>mek</i> (zich interesseren).</p>
<p>Zet je daar de laten-vorm <b>-tir-</b> achter (B1 unit 8), dan <b>maak</b> je iets zo: <i>kolaylaş<b>tır</b>mak</i> (vergemakkelijken) · <i>güzelleş<b>tir</b>mek</i> (verfraaien) · <i>sinirlen<b>dir</b>mek</i> (kwaad maken) · <i>yakınlaş<b>tır</b>mak</i>.</p>
<p>In een ruzie hoor je: <i>Beni yanlış anladın.</i> (Je hebt me verkeerd begrepen.) · <i>Öyle demek istemedim.</i> (Zo bedoelde ik het niet.) · <i>Kusura bakma.</i> (Neem me niet kwalijk.) · <i>Hadi barışalım.</i> (Kom, laten we het goedmaken.)</p>`,
        table: [['woord', 'worden', 'maken'], ['kolay', 'kolaylaşmak', 'kolaylaştırmak'], ['güzel', 'güzelleşmek', 'güzelleştirmek'], ['yakın', 'yakınlaşmak', 'yakınlaştırmak'], ['sinir', 'sinirlenmek', 'sinirlendirmek'], ['hasta', 'hastalanmak', '—']],
        sum: 'Türkçe gittikçe kolaylaşıyor.',
        ex: [['Zamanla birbirimizden uzaklaştık.', 'Mettertijd zijn we van elkaar vervreemd.'], ['Bana sinirlenme, lütfen.', 'Word alsjeblieft niet boos op me.'], ['Bu uygulama hayatımı kolaylaştırıyor.', 'Deze app maakt mijn leven makkelijker.']] }
    ],
    dialogue: {
      t: 'Het goedmaken', place: 'Ankara 🇹🇷',
      lines: [
        ['Gül', 'Aslı’yla hâlâ küs müsünüz?', 'Zijn Aslı en jij nog steeds boos op elkaar?'],
        ['Maud', 'Evet. İki haftadır görüşmüyoruz. Mesajlaşmıyoruz bile.', 'Ja. We zien elkaar al twee weken niet. We appen niet eens.'],
        ['Gül', 'Ne oldu ki? Siz çok iyi anlaşırdınız.', 'Wat is er dan gebeurd? Jullie konden zo goed met elkaar overweg.'],
        ['Maud', 'Doğum günümü unuttu. Ben de kırıldım, bir şey söylemedim. O da benim uzaklaştığımı düşünmüş.', 'Ze is mijn verjaardag vergeten. Ik was gekwetst en zei niets. En zij dacht dat ik afstand nam.'],
        ['Gül', 'Yani birbirinizi yanlış anlamışsınız.', 'Jullie hebben elkaar dus verkeerd begrepen.'],
        ['Maud', 'Galiba. Ama o da hiç aramadı. Çok inatçıdır.', 'Ik denk het. Maar zij heeft ook nooit gebeld. Ze is erg koppig.'],
        ['Gül', 'Sen de öylesin! İkiniz de kendi kendinize üzülüyorsunuz.', 'Jij ook! Jullie zitten allebei in je eentje verdrietig te zijn.'],
        ['Maud', 'Haklısın. Kendimi kötü hissediyorum. Özür dilesem mi?', 'Je hebt gelijk. Ik voel me rot. Zal ik sorry zeggen?'],
        ['Gül', 'Bence ara. Bir kahve içip dertleşin. On yıllık dostluk bir doğum günü yüzünden bitmez.', 'Volgens mij moet je bellen. Drink koffie en lucht jullie hart. Een vriendschap van tien jaar gaat niet kapot aan één verjaardag.'],
        ['Maud', 'Tamam. Bu akşam arayıp «Hadi barışalım» diyeceğim.', 'Goed. Ik bel vanavond en zeg: «Kom, laten we het goedmaken.»']
      ],
      q: [
        { t: 'mc', q: 'Maud ve Aslı ne zamandır görüşmüyor?', o: ['İki haftadır', 'On yıldır', 'Dünden beri'] },
        { t: 'mc', q: 'Maud neden kırıldı?', o: ['Aslı doğum gününü unuttu', 'Aslı ona yalan söyledi', 'Aslı taşındı'] },
        { t: 'mc', q: 'Gül ne öneriyor?', o: ['Arayıp bir kahve içmelerini', 'Dostluğu bitirmelerini', 'Bir ay beklemelerini'] }
      ]
    },
    culture: { t: 'Küsmek, barışmak en «kırk yıllık hatır»', html: `<p>Het Turks heeft een woord waar het Nederlands een hele zin voor nodig heeft: <b>küsmek</b>. Het is boos of gekwetst zijn en daarom <b>niet meer met iemand praten</b>, zonder dat er per se een echte ruzie was. Je kunt weken <i>küs</i> zijn met je zus over iets kleins, en iedereen in de familie weet het.</p>
<p>Het tegenovergestelde is <b>barışmak</b>, en daar is een vast moment voor: op een <b>bayram</b> (feestdag) hoort niemand küs te blijven. Jongeren kussen de hand van ouderen, en wie ruzie had, omhelst elkaar. Een ander die bemiddelt, heet <i>arabulucu</i>.</p>
<p>☕ Dat vriendschap lang meegaat, zegt het spreekwoord <i>Bir fincan kahvenin kırk yıl hatırı vardır</i>: één kopje koffie schept een band die veertig jaar telt.</p>` },
    ex: [
      { t: 'cloze', s: 'Yarın saat beşte bul___alım mı?', h: 'elkaar', a: ['uş'], o: ['uş', 'un', 'dur'], nl: 'Zullen we morgen om vijf uur afspreken?', tag: 'tr-elkaar' },
      { t: 'cloze', s: 'Kardeşimle hiç anla___amıyoruz.', h: 'elkaar', a: ['ş'], o: ['ş', 'n', 't'], nl: 'Mijn broer en ik kunnen helemaal niet met elkaar overweg.', x: 'Na een klinker is het alleen -ş-.', tag: 'tr-elkaar' },
      { t: 'mc', q: 'Hoe zeg je «We houden van elkaar»?', o: ['Birbirimizi seviyoruz.', 'Sevişiyoruz.', 'Kendimizi seviyoruz.'], x: '⚠️ Uitzondering: sevişmek betekent «vrijen». -iş- is een oud achtervoegsel in vaste woorden met een eigen betekenis; voor «elkaar» neem je anders birbiri.', tag: 'tr-elkaar' },
      { t: 'mc', q: 'Welk werkwoord heeft niets met «elkaar» te maken?', o: ['alışmak', 'buluşmak', 'yazışmak'], x: '⚠️ Uitzondering: alışmak (wennen) is een vast woord; de -ış- betekent hier geen «elkaar».', tag: 'tr-elkaar' },
      { t: 'cloze', s: 'Birbir___ yardım edin.', h: 'jullie, aan', a: ['inize'], o: ['inize', 'imizi', 'lerini'], nl: 'Help elkaar.', tag: 'tr-elkaar' },
      { t: 'cloze', s: 'Ali___ görüştüm.', h: 'met', a: ['’yle'], o: ['’yle', '’yi', '’ye'], nl: 'Ik heb Ali gesproken.', tag: 'tr-elkaar' },
      { t: 'cloze', s: 'Hazırla___ıyorum, beş dakikaya çıkarız.', h: 'me', a: ['n'], o: ['n', 'ş', 't'], nl: 'Ik ben me aan het klaarmaken, over vijf minuten gaan we.', tag: 'tr-zich' },
      { t: 'cloze', s: '___ iyi bak!', h: 'op jezelf', a: ['Kendine'], o: ['Kendine', 'Kendini', 'Kendim'], nl: 'Pas goed op jezelf!', tag: 'tr-zich' },
      { t: 'cloze', s: '___ iyi hissetmiyorum.', h: 'me', a: ['Kendimi'], o: ['Kendimi', 'Kendime', 'Kendi'], nl: 'Ik voel me niet goed.', tag: 'tr-zich' },
      { t: 'mc', q: 'Wat betekent «Kapı kendi kendine açıldı»?', o: ['De deur ging vanzelf open.', 'Hij heeft zelf de deur geopend.', 'De deur is van hemzelf.'], tag: 'tr-zich' },
      { t: 'cloze', s: 'Türkçe gittikçe kolay___ıyor.', h: 'worden', a: ['laş'], o: ['laş', 'lan', 'lat'], nl: 'Turks wordt steeds makkelijker.', tag: 'tr-elkaar' },
      { t: 'mc', q: 'Wat betekent «kolaylaştırmak»?', o: ['makkelijker maken', 'makkelijker worden', 'het makkelijk vinden'], tag: 'tr-laten' },
      { t: 'mc', q: 'Wat betekent «küsmek»?', o: ['boos zijn en niet meer met iemand praten', 'iemand kussen', 'het goedmaken'], tag: 'vocab' },
      { t: 'tr', nl: 'We hebben elkaar verkeerd begrepen.', a: ['Birbirimizi yanlış anladık.', 'Birbirimizi yanlış anlamışız.'], tag: 'tr-elkaar' },
      { t: 'tr', nl: 'Kom, laten we het goedmaken.', a: ['Hadi barışalım.', 'Hadi, barışalım.', 'Gel barışalım.'], tag: 'tr-elkaar' },
      { t: 'tr', nl: 'Hij praat in zichzelf.', a: ['Kendi kendine konuşuyor.'], tag: 'tr-zich' },
      { t: 'order', s: 'On yıllık dostluk bir yanlış anlaşılma yüzünden bitmez.', nl: 'Een vriendschap van tien jaar gaat niet kapot door een misverstand.', tag: 'tr-elkaar' },
      { t: 'match', p: [['dostluk', 'vriendschap'], ['saygı', 'respect'], ['özür', 'excuus'], ['dedikodu', 'roddel'], ['inatçı', 'koppig'], ['kırgın', 'gekwetst']], tag: 'vocab' }
    ],
    reading: {
      t: 'Sevgili Ayşe Abla', type: 'Lezersbrief en antwoord',
      p: [
        ['«Sevgili Ayşe Abla, en yakın arkadaşımla yirmi yıldır görüşüyoruz. Geçen ay ona bir sırrımı anlattım; o da başkalarına söylemiş. Çok kırıldım ve artık ona güvenemiyorum. Ne yapmalıyım? — Kırgın bir okur»', '„Lieve Ayşe Abla, mijn beste vriendin en ik zien elkaar al twintig jaar. Vorige maand vertelde ik haar een geheim; ze heeft het aan anderen doorverteld. Ik ben erg gekwetst en kan haar niet meer vertrouwen. Wat moet ik doen? — Een gekwetste lezer”'],
        ['«Sevgili okurum, kırılmakta haklısınız. Ama küsüp uzaklaşmak sorunu çözmez; sadece ikinizi de yalnızlaştırır.', '„Beste lezer, u hebt gelijk dat u gekwetst bent. Maar boos zwijgen en afstand nemen lost het probleem niet op; het maakt jullie allebei alleen maar eenzamer.'],
        ['Önce kendinize şunu sorun: Bu dostluk benim için ne kadar değerli? Sonra onunla yüz yüze konuşun. Suçlamadan, kendi duygularınızı anlatın: ‹Bunu duyunca çok üzüldüm› deyin.', 'Vraag uzelf eerst af: hoeveel is deze vriendschap mij waard? Praat daarna onder vier ogen met haar. Vertel zonder te beschuldigen over uw eigen gevoelens: zeg ‹Ik werd heel verdrietig toen ik het hoorde›.'],
        ['Özür dilerse affetmeyi deneyin. Yirmi yıl, bir hatadan daha uzundur. Ama aynı şey tekrarlanırsa, bazı sırları kendinize saklamayı öğrenin.»', 'Als ze haar excuses aanbiedt, probeer dan te vergeven. Twintig jaar is langer dan één fout. Maar als hetzelfde zich herhaalt, leer dan sommige geheimen voor uzelf te houden.”']
      ],
      gl: [['okur', 'lezer'], ['yalnızlaştırmak', 'eenzaam maken'], ['değerli', 'waardevol'], ['yüz yüze', 'onder vier ogen'], ['tekrarlanmak', 'zich herhalen'], ['saklamak', 'bewaren / verbergen']],
      q: [
        { t: 'mc', q: 'Okurun arkadaşı ne yapmış?', o: ['Sırrını başkalarına söylemiş', 'Doğum gününü unutmuş', 'Başka şehre taşınmış'] },
        { t: 'mc', q: 'Ayşe Abla’ya göre küsmek ne yapar?', o: ['İkisini de yalnızlaştırır', 'Sorunu çözer', 'Dostluğu güçlendirir'] },
        { t: 'mc', q: 'Ayşe Abla ne öneriyor?', o: ['Yüz yüze konuşmayı ve suçlamamayı', 'Bir daha hiç görüşmemeyi', 'Onun da sırrını anlatmayı'] }
      ]
    },
    say: [['Yarın saat beşte buluşalım mı?', 'Zullen we morgen om vijf uur afspreken?'], ['Birbirimizi yanlış anladık.', 'We hebben elkaar verkeerd begrepen.'], ['Kendine iyi bak!', 'Pas goed op jezelf!'], ['Hadi barışalım.', 'Kom, laten we het goedmaken.']],
    task: { nl: 'Schrijf 6 zinnen over een vriendschap of een ruzie die je hebt meegemaakt. Gebruik minstens twee werkwoorden met -iş- (görüşmek, anlaşmak, buluşmak, barışmak), één keer birbiri, één keer kendi (kendimi, kendime) en één werkwoord met -leş- of -len-.', model: 'Lisedeki en iyi arkadaşımla yıllarca çok iyi anlaştık. Üniversiteden sonra farklı şehirlere taşındık ve yavaş yavaş birbirimizden uzaklaştık. Bir gün küçük bir şey yüzünden tartıştık. Aylarca görüşmedik; kendimi çok kötü hissettim. Sonunda ona uzun bir mesaj yazdım. Geçen hafta buluşup barıştık.' },
    scenario: { nl: 'Je hebt ruzie met een goede vriend(in) en lucht je hart bij Gül. Ze luistert, stelt vragen en geeft advies.', role: 'You are Gül, a wise and direct friend in Ankara. The learner has fallen out with a close friend. Ask what happened (Ne oldu ki? Ne zamandır görüşmüyorsunuz?), point out misunderstandings (Birbirinizi yanlış anlamışsınız), gently tease the learner for being stubborn, and advise making up (Hadi barışın!). Use reciprocal and reflexive forms. Use B2 Turkish.', goal: 'Vertel wat er gebeurd is, zeg hoe je je voelt en besluit wat je gaat doen.' }
  });

  /* ───────────────────────── B2 · 6 ───────────────────────── */
  U({
    id: 'tr-b2-06', level: 'B2', icon: '🏃', title: 'Sigarayı bırakmaya karar verdim', nl: 'Gezond leven: werkwoorden met een vaste naamval',
    goals: ['Over gewoontes, sporten en gezondheid praten', 'Kiezen tussen -mek en -me', 'Het werkwoord als zelfstandig naamwoord met een naamval gebruiken', 'Weten welke naamval bij welk werkwoord hoort'],
    vocab: [
      ['huy', 'gewoonte / karaktertrek'], ['bağımlılık', 'verslaving'], ['tiryaki', 'verslaafde (aan thee, tabak)'], ['diyet yapmak', 'op dieet zijn'], ['kilo vermek', 'afvallen'], ['kilo almak', 'aankomen'], ['egzersiz', 'oefening / beweging'],
      ['koşu bandı', 'loopband'], ['antrenman', 'training'], ['kas', 'spier'], ['nefes', 'adem'], ['nabız', 'hartslag'], ['tansiyon', 'bloeddruk'], ['stres', 'stress'],
      ['uyku düzeni', 'slaapritme'], ['dengeli', 'evenwichtig'], ['beslenme', 'voeding'], ['zararlı', 'schadelijk'], ['faydalı', 'nuttig / gezond'], ['kaçınmak', 'vermijden'],
      ['bıkmak', 'het zat zijn'], ['nefret etmek', 'haten'], ['uğraşmak', 'zich bezighouden met / moeite doen'], ['irade', 'wilskracht'], ['motivasyon', 'motivatie'], ['disiplin', 'discipline'],
      ['üstesinden gelmek', 'te boven komen / aankunnen'], ['dayanmak', 'volhouden / verdragen'], ['pes etmek', 'opgeven'], ['üşenmek', 'te lui zijn om'], ['yürüyüş', 'wandeling']
    ],
    grammar: [
      { t: '-mek of -me?', es: '-mek ve -me',
        html: `<p>Het Turks heeft twee vormen voor «het …en»: <b>-mek</b> (het hele werkwoord) en <b>-me</b> (het korte werkwoordelijke naamwoord). De regel is eenvoudig:</p>
<p>• <b>-mek</b> blijft <b>kaal</b>. Het staat als onderwerp (<i>Yüz<b>mek</b> sağlıklıdır.</i> Zwemmen is gezond.), vóór <i>için, üzere, gibi</i> (<i>kilo ver<b>mek</b> için</i>), en met de naamvallen <b>-ten</b> en <b>-le</b>: <i>koş<b>mak</b>tan</i>, <i>bekle<b>mek</b>le</i>.<br>• <b>-me</b> gebruik je zodra er een <b>bezitsuitgang</b> of de naamval <b>-i</b> of <b>-e</b> achter komt: <i>yüz<b>me</b>yi seviyorum</i> · <i>yüz<b>me</b>ye başladım</i> · <i>yüz<b>me</b>m lazım</i> (ik moet zwemmen) · <i>yüz<b>me</b>si yasak</i>.</p>
<p>Na een klinker komt er een y: <i>bırak-ma-<b>y</b>-ı</i>, <i>koş-ma-<b>y</b>-a</i>. Ontkennend staat er twee keer -me: <i>iç<b>meme</b>ye karar verdim</i> (ik heb besloten niet te drinken).</p>
<p>Let op: <i>yüzme</i> kan dus ook «zwem niet!» zijn. De klemtoon is anders (<i>YÜZ-me!</i> ↔ <i>yüz-ME</i>) en de zin maakt het duidelijk.</p>
<p><b>⚠️ Uitzondering:</b> je verwacht <i>-meyi</i> bij elk werkwoord dat een lijdend voorwerp wil, zoals bij <i>sevmek</i>: <i>Yüz<b>meyi</b> seviyorum.</i> Maar <b>istemek</b> (willen) krijgt <b>kaal -mek</b>: <i>Yüz<b>mek</b> istiyorum</i>, niet <s>yüzmeyi istiyorum</s>. <b>Waarom?</b> Bij <i>istemek</i> vormen wens en handeling één geheel met hetzelfde onderwerp, net als een onbepaald lijdend voorwerp dat vlak voor het werkwoord staat en ook geen -i krijgt (<i>çay istiyorum</i>, niet <i>çayı</i>). Zodra het onderwerp verschilt, is het geen geheel meer en komt de naamval terug: <i>Yüz<b>meni</b> istiyorum.</i> (Ik wil dat jij zwemt.)</p>`,
        table: [['', 'vorm', 'voorbeeld'], ['onderwerp', '-mek', 'Koşmak sağlıklıdır.'], ['vóór için', '-mek', 'koşmak için'], ['met -ten / -le', '-mek', 'koşmaktan · koşmakla'], ['met -i / -e', '-me', 'koşmayı · koşmaya'], ['met bezit', '-me', 'koşmam · koşman · koşması'], ['istemek ⚠️', '-mek', 'koşmak istiyorum']],
        sum: 'Yüzmeyi seviyorum, yüzmek istiyorum.',
        ex: [['Sigarayı bırakmak kolay değil.', 'Stoppen met roken is niet makkelijk.'], ['Her sabah koşmaya başladım.', 'Ik ben begonnen elke ochtend te hardlopen.'], ['Erken yatmam lazım.', 'Ik moet vroeg naar bed.'], ['Şeker yememeye çalışıyorum.', 'Ik probeer geen suiker te eten.']] },
      { t: 'Welke naamval wil het werkwoord?', es: 'Fiillerin istediği hâl ekleri',
        html: `<p>Elk Turks werkwoord bepaalt welke naamval het woord ervoor krijgt, en dat geldt ook voor een -me-vorm. Dat is geen logica maar woordkennis; leer het werkwoord daarom <b>mét zijn naamval</b>:</p>
<p><b>-e</b> (richting): <i>-meye <b>başlamak</b></i> (beginnen) · <i><b>devam etmek</b></i> (doorgaan) · <i><b>karar vermek</b></i> (besluiten) · <i><b>çalışmak</b></i> (proberen) · <i><b>alışmak</b></i> (wennen) · <i><b>mecbur olmak</b></i> (gedwongen zijn) · <i><b>hazır olmak</b></i></p>
<p><b>-i</b> (lijdend voorwerp): <i>-meyi <b>sevmek</b></i> · <i><b>bırakmak</b></i> (stoppen met) · <i><b>denemek</b></i> (proberen) · <i><b>unutmak</b></i> · <i><b>öğrenmek</b></i> · <i><b>bilmek</b></i> (kunnen) · <i><b>düşünmek</b></i> (overwegen) · <i><b>tercih etmek</b></i></p>
<p><b>-den</b> (weg van): <i>-mekten <b>korkmak</b></i> (bang zijn) · <i><b>vazgeçmek</b></i> (afzien van) · <i><b>hoşlanmak</b></i> (leuk vinden) · <i><b>nefret etmek</b></i> · <i><b>bıkmak</b></i> (zat zijn) · <i><b>kaçınmak</b></i> (vermijden) · <i><b>çekinmek</b></i> (zich generen)</p>
<p><b>-le</b> (met): <i>-mekle <b>uğraşmak</b></i> (bezig zijn met) · <i><b>yetinmek</b></i> (genoegen nemen met) · <i><b>ilgilenmek</b></i></p>
<p>Hetzelfde geldt voor gewone zelfstandige naamwoorden: <i>köpek<b>ten</b> korkmak</i>, <i>spor<b>a</b> başlamak</i>, <i>sigara<b>yı</b> bırakmak</i>, <i>müzik<b>le</b> ilgilenmek</i>.</p>`,
        table: [['naamval', 'werkwoorden'], ['-e', 'başlamak · devam etmek · karar vermek · çalışmak · alışmak'], ['-i', 'sevmek · bırakmak · denemek · unutmak · bilmek'], ['-den', 'korkmak · vazgeçmek · hoşlanmak · bıkmak · nefret etmek'], ['-le', 'uğraşmak · ilgilenmek · yetinmek']],
        sum: 'Koşmaya başladım, koşmaktan hoşlanıyorum.',
        ex: [['Spor salonuna gitmeye karar verdim.', 'Ik heb besloten naar de sportschool te gaan.'], ['Diyet yapmaktan bıktım.', 'Ik ben het zat om op dieet te zijn.'], ['Asansöre binmekten vazgeçtim, merdiven çıkıyorum.', 'Ik heb de lift opgegeven, ik neem de trap.'], ['Erken kalkmaya alışamadım.', 'Ik heb niet kunnen wennen aan vroeg opstaan.']] },
      { t: 'Zelfstandige naamwoorden van werkwoorden: -iş, -im, -gi', es: 'Fiilden isim yapan ekler',
        html: `<p>Naast -mek en -me zijn er achtervoegsels die van een werkwoord een <b>echt zelfstandig naamwoord</b> maken:</p>
<p><b>-iş</b> (ış, iş, uş, üş; na een klinker -yiş) is <b>de manier waarop</b> of <b>één keer</b>: <i>yürü<b>yüş</b></i> (wandeling, manier van lopen) · <i>gir<b>iş</b></i> (ingang) · <i>çık<b>ış</b></i> (uitgang) · <i>bak<b>ış</b></i> (blik) · <i>gül<b>üş</b></i> (lach) · <i>dur<b>uş</b></i> (houding) · <i>dön<b>üş</b></i> (terugkeer) · <i>alışver<b>iş</b></i> (boodschappen, lett. nemen-geven). Dit is een andere -iş dan «elkaar» uit unit 5.</p>
<p><b>-im</b> is het resultaat of de gebeurtenis: <i>seç<b>im</b></i> (keuze, verkiezing) · <i>ölç<b>üm</b></i> (meting) · <i>doğ<b>um</b></i> (geboorte) · <i>öl<b>üm</b></i> (dood) · <i>üret<b>im</b></i> (productie) · <i>eğit<b>im</b></i> (onderwijs) · <i>yaşa<b>m</b></i> (leven).</p>
<p><b>-gi / -gü</b> (na een stemloze medeklinker -ki): <i>sev<b>gi</b></i> (liefde) · <i>bil<b>gi</b></i> (kennis) · <i>duy<b>gu</b></i> (gevoel) · <i>iç<b>ki</b></i> (drank) · <i>say<b>gı</b></i> (respect).</p>
<p>Ook <b>-me</b> en <b>-mek</b> zelf zijn in sommige woorden vastgegroeid: <i>dondur<b>ma</b></i> (ijs, lett. «het bevriezen»), <i>dol<b>ma</b></i>, <i>kıy<b>ma</b></i> (gehakt), <i>ye<b>mek</b></i> (eten), <i>çak<b>mak</b></i> (aansteker).</p>`,
        table: [['achtervoegsel', 'betekenis', 'voorbeelden'], ['-iş', 'manier / één keer', 'yürüyüş · giriş · bakış'], ['-im', 'resultaat', 'seçim · doğum · eğitim'], ['-gi', 'begrip', 'sevgi · bilgi · duygu'], ['-me (vast)', 'ding', 'dondurma · dolma']],
        sum: 'Yürüyüş, seçim, sevgi.',
        ex: [['Her akşam yarım saat yürüyüş yapıyorum.', 'Ik maak elke avond een halfuur een wandeling.'], ['Onun gülüşünü çok seviyorum.', 'Ik houd erg van haar lach.'], ['Dengeli beslenme bir seçimdir.', 'Evenwichtige voeding is een keuze.']] }
    ],
    dialogue: {
      t: 'Goede voornemens', place: 'İzmir 🇹🇷',
      lines: [
        ['Onur', 'Sigara içmeyecek misin? Hayırdır?', 'Rook je niet? Wat is er aan de hand?'],
        ['Niels', 'Bırakmaya karar verdim. Bugün on dördüncü gün.', 'Ik heb besloten te stoppen. Vandaag is dag veertien.'],
        ['Onur', 'Helal olsun! Zor oluyor mu?', 'Petje af! Is het zwaar?'],
        ['Niels', 'İlk hafta çok zordu. Kahve içerken sigara aramaktan vazgeçemiyordum.', 'De eerste week was heel zwaar. Bij de koffie kon ik het maar niet laten naar een sigaret te zoeken.'],
        ['Onur', 'Ben üç kere denedim, başaramadım. Bir ay dayanıyorum, sonra yine başlıyorum.', 'Ik heb het drie keer geprobeerd, het is niet gelukt. Ik houd het een maand vol en dan begin ik weer.'],
        ['Niels', 'Ben bu sefer koşmaya da başladım. Nefes nefese kalmaktan bıkmıştım.', 'Ik ben deze keer ook gaan hardlopen. Ik was het zat om buiten adem te raken.'],
        ['Onur', 'Koşmaktan nefret ederim. Yüzmeyi tercih ederim, ama havuza gitmeye üşeniyorum.', 'Ik haat hardlopen. Ik zwem liever, maar ik ben te lui om naar het zwembad te gaan.'],
        ['Niels', 'Beraber gidelim! Tek başına yapmak zor, birlikte daha kolay olur.', 'Laten we samen gaan! In je eentje is het moeilijk, samen wordt het makkelijker.'],
        ['Onur', 'Olur. Ama önce şu son paketi bitireyim…', 'Goed. Maar laat ik eerst dit laatste pakje opmaken…'],
        ['Niels', 'Ertelemekten vazgeç! Paketi bana ver, yarın sabah yedide havuzdayız.', 'Hou op met uitstellen! Geef dat pakje aan mij, morgenochtend om zeven uur zijn we in het zwembad.']
      ],
      q: [
        { t: 'mc', q: 'Niels neye karar verdi?', o: ['Sigarayı bırakmaya', 'Diyet yapmaya', 'Türkiye’ye taşınmaya'] },
        { t: 'mc', q: 'Onur neden nefret ediyor?', o: ['Koşmaktan', 'Yüzmekten', 'Kahve içmekten'] },
        { t: 'mc', q: 'Yarın sabah yedide nerede olacaklar?', o: ['Havuzda', 'Spor salonunda', 'Kafede'] }
      ]
    },
    culture: { t: 'Roken, de nargile en «Yeşilay»', html: `<p>«Roken als een Turk» is een uitdrukking in half Europa, en lang klopte dat ook. Maar sinds 2009 geldt in Turkije een van de strengste rookverboden: niet in cafés, restaurants, taxi’s of zelfs op terrassen met een dak. De organisatie <b>Yeşilay</b> (de Groene Halve Maan) voert al sinds 1920 campagne tegen roken en alcohol, en het stopnummer <i>Alo 171</i> staat op elk pakje.</p>
<p>De <b>nargile</b> (waterpijp) is gebleven als sociaal ritueel: in een <i>nargile kafe</i> zit je uren met vrienden, thee en backgammon (<b>tavla</b>).</p>
<p>🏃 Gezond leven is intussen een stadsding geworden. Aan de boulevard van elke kustplaats staan gratis fitnesstoestellen in de openlucht, en ’s avonds loopt half İzmir zijn <b>yürüyüş</b> langs de <i>Kordon</i>, met zonnebloempitten (<i>çekirdek</i>) in de hand.</p>` },
    ex: [
      { t: 'cloze', s: 'Her sabah koş___ başladım.', h: 'te', a: ['maya'], o: ['maya', 'mayı', 'maktan'], nl: 'Ik ben begonnen elke ochtend te hardlopen.', x: 'başlamak wil de -e-vorm.', tag: 'tr-naamval' },
      { t: 'cloze', s: 'Sigarayı bırak___ karar verdim.', h: 'te', a: ['maya'], o: ['maya', 'mayı', 'mak'], nl: 'Ik heb besloten te stoppen met roken.', tag: 'tr-naamval' },
      { t: 'cloze', s: 'Yüz___ seviyorum.', h: 'het …en', a: ['meyi'], o: ['meyi', 'meye', 'mekten'], nl: 'Ik houd van zwemmen.', tag: 'tr-naamval' },
      { t: 'mc', q: 'Welke zin is goed: «Ik wil zwemmen.»', o: ['Yüzmek istiyorum.', 'Yüzmeyi istiyorum.', 'Yüzmeye istiyorum.'], x: '⚠️ Uitzondering: istemek krijgt kaal -mek. Wens en handeling vormen één geheel met hetzelfde onderwerp, net als een onbepaald lijdend voorwerp zonder -i (çay istiyorum).', tag: 'tr-mevs' },
      { t: 'mc', q: 'En «Ik wil dat jij zwemt»?', o: ['Yüzmeni istiyorum.', 'Yüzmek istiyorum.', 'Yüzmen istiyorum.'], x: '⚠️ Uitzondering vervalt: bij een ander onderwerp komt de naamval terug (-me + bezit + -i).', tag: 'tr-mevs' },
      { t: 'cloze', s: 'Diyet yap___ bıktım.', h: 'van het', a: ['maktan'], o: ['maktan', 'maya', 'mayı'], nl: 'Ik ben het zat om op dieet te zijn.', x: 'bıkmak wil -den, en vóór -den blijft het -mak.', tag: 'tr-naamval' },
      { t: 'cloze', s: 'Köpekler___ korkuyorum.', a: ['den'], o: ['den', 'e', 'i'], nl: 'Ik ben bang voor honden.', tag: 'tr-naamval' },
      { t: 'cloze', s: 'Erken kalk___ alışamadım.', h: 'aan', a: ['maya'], o: ['maya', 'maktan', 'mayı'], nl: 'Ik heb niet kunnen wennen aan vroeg opstaan.', tag: 'tr-naamval' },
      { t: 'cloze', s: 'Erken yat___ lazım.', h: 'ik', a: ['mam'], o: ['mam', 'mak', 'mayı'], nl: 'Ik moet vroeg naar bed.', tag: 'tr-mevs' },
      { t: 'cloze', s: 'Şeker ye___ çalışıyorum.', h: 'niet te', a: ['memeye'], o: ['memeye', 'meye', 'memek'], nl: 'Ik probeer geen suiker te eten.', x: 'Twee keer -me: eerst de ontkenning, dan het naamwoord.', tag: 'tr-mevs' },
      { t: 'mc', q: 'Welke naamval wil «vazgeçmek» (afzien van)?', o: ['-den', '-e', '-i'], tag: 'tr-naamval' },
      { t: 'mc', q: 'Wat betekent «yürüyüş»?', o: ['wandeling', 'loop niet!', 'hij loopt'], tag: 'tr-mevs' },
      { t: 'mc', q: 'Van welk werkwoord komt «dondurma» (ijs)?', o: ['dondurmak (bevriezen)', 'donmak (niet vriezen)', 'dönmek (draaien)'], tag: 'tr-mevs' },
      { t: 'tr', nl: 'Stoppen met roken is niet makkelijk.', a: ['Sigarayı bırakmak kolay değil.', 'Sigara bırakmak kolay değil.'], tag: 'tr-mevs' },
      { t: 'tr', nl: 'Ik haat hardlopen.', a: ['Koşmaktan nefret ediyorum.', 'Koşmaktan nefret ederim.'], tag: 'tr-naamval' },
      { t: 'tr', nl: 'Ik ben begonnen Turks te leren.', a: ['Türkçe öğrenmeye başladım.'], tag: 'tr-naamval' },
      { t: 'order', s: 'Her akşam yarım saat yürüyüş yapmaya karar verdim.', nl: 'Ik heb besloten elke avond een halfuur te wandelen.', tag: 'tr-naamval' },
      { t: 'match', p: [['alışkanlık', 'gewoonte'], ['kas', 'spier'], ['nefes', 'adem'], ['irade', 'wilskracht'], ['zararlı', 'schadelijk'], ['faydalı', 'nuttig']], tag: 'vocab' }
    ],
    reading: {
      t: 'Yirmi bir gün kuralı', type: 'Gezondheidsrubriek',
      p: [
        ['Yeni bir alışkanlık kazanmak için yirmi bir gün yeterli midir? Uzmanlara göre hayır: araştırmalar ortalama altmış altı gün gerektiğini gösteriyor.', 'Is eenentwintig dagen genoeg om een nieuwe gewoonte aan te leren? Volgens deskundigen niet: onderzoek laat zien dat er gemiddeld zesenzestig dagen nodig zijn.'],
        ['En sık yapılan hata, her şeyi aynı anda değiştirmeye çalışmaktır. Hem sigarayı bırakmaya, hem diyet yapmaya, hem de spora başlamaya karar veren kişi genellikle iki hafta sonra pes eder.', 'De meest gemaakte fout is alles tegelijk proberen te veranderen. Wie besluit zowel te stoppen met roken als op dieet te gaan en te gaan sporten, geeft het meestal na twee weken op.'],
        ['Küçük başlayın. «Her gün bir saat koşacağım» demektense «Her gün on dakika yürüyeceğim» deyin. Başarmak motivasyonu artırır; başaramamak ise insanı denemekten vazgeçirir.', 'Begin klein. Zeg niet «Ik ga elke dag een uur hardlopen» maar «Ik ga elke dag tien minuten wandelen». Slagen verhoogt de motivatie; mislukken daarentegen maakt dat je ophoudt met proberen.'],
        ['Bir gün atlamaktan korkmayın, ama iki gün üst üste atlamamaya dikkat edin. Ve unutmayın: alışkanlık irade işi değil, tekrar işidir.', 'Wees niet bang om een dag over te slaan, maar let erop dat je niet twee dagen achter elkaar overslaat. En vergeet niet: een gewoonte is geen kwestie van wilskracht maar van herhaling.']
      ],
      gl: [['kazanmak', 'verwerven / winnen'], ['ortalama', 'gemiddeld'], ['atlamak', 'overslaan / springen'], ['üst üste', 'achter elkaar'], ['tekrar', 'herhaling']],
      q: [
        { t: 'mc', q: 'Araştırmalara göre yeni bir alışkanlık için ortalama kaç gün gerekiyor?', o: ['Altmış altı gün', 'Yirmi bir gün', 'İki hafta'] },
        { t: 'mc', q: 'En sık yapılan hata nedir?', o: ['Her şeyi aynı anda değiştirmeye çalışmak', 'Çok küçük başlamak', 'Bir gün atlamak'] },
        { t: 'mc', q: 'Yazıya göre alışkanlık ne işidir?', o: ['Tekrar işi', 'İrade işi', 'Şans işi'] }
      ]
    },
    say: [['Sigarayı bırakmaya karar verdim.', 'Ik heb besloten te stoppen met roken.'], ['Koşmaktan nefret ederim.', 'Ik haat hardlopen.'], ['Erken kalkmaya alışamadım.', 'Ik heb niet kunnen wennen aan vroeg opstaan.'], ['Yüzmeyi seviyorum, yüzmek istiyorum.', 'Ik houd van zwemmen, ik wil zwemmen.']],
    task: { nl: 'Schrijf 6 zinnen over je eigen gewoontes: wat je wilt beginnen, waarmee je wilt stoppen, wat je haat en waar je aan gewend bent. Gebruik -meye başlamak / karar vermek, -meyi bırakmak / sevmek, -mekten nefret etmek / vazgeçmek / bıkmak, en één keer -mek istiyorum.', model: 'Bu yıl daha sağlıklı yaşamaya karar verdim. Akşamları geç yemeyi bıraktım. Haftada üç kez yüzmeye başladım. Spor salonuna gitmekten nefret ediyorum, bu yüzden dışarıda yürümeyi tercih ediyorum. Telefona bakmaktan vazgeçemiyorum, ama deniyorum. Yazın bir yarı maratona katılmak istiyorum.' },
    scenario: { nl: 'Je vriend Onur merkt dat je iets aan je leefstijl veranderd hebt. Hij is nieuwsgierig, maar zoekt zelf vooral uitvluchten.', role: 'You are Onur, a funny friend in İzmir who smokes, hates exercise and always postpones. Notice the learner’s new healthy habit, ask about it (Neye karar verdin? Zor oluyor mu? Neyi bıraktın?), confess your own failed attempts (Üç kere denedim, başaramadım), make excuses, and let yourself be persuaded to join. Use verbs with fixed cases (-meye başlamak, -mekten vazgeçmek). Use B2 Turkish.', goal: 'Vertel wat je veranderd hebt en waarom, en haal hem over om mee te doen.' }
  });
})(window.SPT);
