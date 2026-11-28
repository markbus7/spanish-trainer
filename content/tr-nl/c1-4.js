/* Turks voor Nederlandstaligen — niveau C1, units 7–8 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── C1 · 7 ───────────────────────── */
  U({
    id: 'tr-c1-07', level: 'C1', icon: '📜', title: 'Haklarımı biliyorum', nl: 'Recht en contract: huren, werken en je rechten',
    goals: ['Een contract of wetsartikel in grote lijnen begrijpen', 'Juridische verbindingen lezen: -mek kaydıyla, -mek üzere, aksi takdirde', 'Plicht, recht en verbod herkennen: yükümlüdür, -ebilir, -emez', 'Bij een advocaat of huurdersvereniging je situatie uitleggen'],
    vocab: [
      ['anayasa', 'grondwet'], ['madde', 'artikel / punt'], ['mahkeme', 'rechtbank'], ['dava', 'rechtszaak'], ['dava açmak', 'een zaak aanspannen'], ['hâkim', 'rechter'], ['savcı', 'officier van justitie'],
      ['bilirkişi', 'deskundige (bij de rechtbank)'], ['sanık', 'verdachte'], ['kabahat', 'overtreding'], ['icra', 'beslaglegging / executie'], ['kiracı', 'huurder'], ['tahliye', 'ontruiming'], ['fesih', 'opzegging / ontbinding'],
      ['feshetmek', 'opzeggen / ontbinden'], ['ihbar süresi', 'opzegtermijn'], ['yükümlülük', 'verplichting'], ['yükümlü', 'verplicht / gehouden'], ['ihlal etmek', 'schenden'], ['temyiz', 'cassatie / hoger beroep'], ['arabulucu', 'mediator'],
      ['noter', 'notaris'], ['vekâlet', 'volmacht'], ['yaptırım', 'sanctie'], ['kıdem tazminatı', 'ontslagvergoeding'], ['mesai', 'werktijd / overwerk'], ['mağdur', 'gedupeerde'], ['hüküm', 'bepaling / vonnis'], ['taraf', 'partij'], ['delil', 'bewijsstuk']
    ],
    grammar: [
      { t: 'Juridische verbindingen: -mek kaydıyla, -mek üzere, aksi takdirde', es: '-mek kaydıyla, -mek üzere, aksi takdirde',
        html: `<p>Contracten en wetten hebben een eigen gereedschapskist. De woorden zijn lang, maar de bouw is steeds dezelfde: een werkwoord als zelfstandig naamwoord, plus een vast woord dat de verhouding noemt.</p>
<p>• <b>-mek kaydıyla / şartıyla</b> = op voorwaarde dat, mits: <i>Kiracı, iki ay önceden bildir<b>mek kaydıyla</b> sözleşmeyi feshedebilir.</i> (De huurder kan het contract opzeggen, mits hij dat twee maanden vooraf meldt.)<br>• <b>-mek suretiyle</b> = door te, bij wijze van: <i>Fesih, yazılı bildirimde bulun<b>mak suretiyle</b> yapılır.</i><br>• <b>-mek üzere</b> = om te, met als doel: <i>Taraflar, anlaşmazlığı çöz<b>mek üzere</b> arabulucuya başvurdu.</i><br>• <b>aksi takdirde / aksi hâlde</b> = anders, bij gebreke waarvan: <i>Kira her ayın beşine kadar ödenir; <b>aksi takdirde</b> gecikme faizi uygulanır.</i><br>• <b>… saklı kalmak üzere</b> = onverminderd, behoudens: <i>Tazminat hakkı <b>saklı kalmak üzere</b> sözleşme sona erer.</i><br>• <b>-e ilişkin / -e dair</b> = betreffende; <b>-e istinaden</b> = op grond van; <b>-den itibaren</b> = met ingang van; <b>en geç</b> = uiterlijk; <b>en az</b> = ten minste.</p>
<p>Het onderwerp van zo’n bijzin krijgt <b>-in</b> en het werkwoord een bezitsuitgang als het een ander is dan in de hoofdzin: <i>Kiracı<b>nın</b> kirayı öde<b>memesi</b> hâlinde …</i> Is het dezelfde persoon, dan volstaat de kale infinitief: <i>bildir<b>mek</b> kaydıyla</i>.</p>
<p><b>⚠️ Uitzondering:</b> <b>-mek üzere</b> heeft drie betekenissen die niets met elkaar te maken lijken te hebben. <i>Görüş<b>mek üzere</b> toplandılar</i> (ze kwamen bijeen <b>om te</b> overleggen), <i>Tren kalk<b>mak üzere</b></i> (de trein <b>staat op het punt</b> te vertrekken), en als groet <i>Görüş<b>mek üzere</b>!</i> (tot ziens). <b>Waarom?</b> <i>Üzere</i> betekent van oorsprong «op, bovenop». «Op het doen» is ofwel <b>gericht op</b> een handeling (doel), ofwel <b>vlak ervoor</b> staan (op het punt). De groet is het doel zonder hoofdzin: «(we gaan uit elkaar) om elkaar weer te zien». Wat je hoort, beslis je aan het slot van de zin: staat er nog een hoofdwerkwoord, dan is het «om te»; is <i>üzere</i> zelf het gezegde, dan is het «op het punt».</p>`,
        table: [['vorm', 'betekenis', 'gewoon Turks'], ['-mek kaydıyla', 'mits', '-mek şartıyla, -irse'], ['-mek suretiyle', 'door te', '-erek'], ['-mek üzere', 'om te', '-mek için'], ['aksi takdirde', 'anders', 'yoksa'], ['saklı kalmak üzere', 'onverminderd', '(geen)'], ['-den itibaren', 'met ingang van', '-den beri, -den sonra']],
        sum: 'Bildirmek kaydıyla feshedebilir.',
        ex: [['Depozito, eve zarar verilmemiş olması kaydıyla iade edilir.', 'De borg wordt teruggegeven, mits er geen schade aan de woning is toegebracht.'], ['İtirazınızı en geç on beş gün içinde yapmalısınız; aksi takdirde karar kesinleşir.', 'U moet uiterlijk binnen vijftien dagen bezwaar maken; anders wordt het besluit definitief.'], ['Sözleşme 1 Ocak’tan itibaren geçerlidir.', 'Het contract is geldig met ingang van 1 januari.'], ['Duruşma bitmek üzere.', 'De zitting is bijna afgelopen.']] },
      { t: 'Plicht, recht en verbod in de wet: yükümlüdür, -ebilir, -emez', es: 'Yükümlülük, hak ve yasak',
        html: `<p>Een wet of contract zegt drie dingen: wat moet, wat mag en wat niet mag. Elk heeft vaste vormen.</p>
<p><b>Moeten</b><br>• <b>-mekle yükümlüdür</b>: <i>Ev sahibi, evi kullanıma uygun hâlde teslim et<b>mekle yükümlüdür</b>.</i> (De verhuurder is gehouden de woning in bruikbare staat op te leveren.)<br>• <b>-mek zorundadır</b>, <b>-mesi zorunludur / şarttır / gerekir</b>: <i>Fesih bildiriminin yazılı ol<b>ması zorunludur</b>.</i></p>
<p><b>Mogen</b><br>• <b>-ebilir</b>: <i>Kiracı sözleşmeyi feshed<b>ebilir</b>.</i> (De huurder mag opzeggen.)<br>• <b>hakkı vardır / hakkına sahiptir</b>: <i>İşçinin yıllık izin <b>hakkı vardır</b>.</i> · <i>Tüketici, ürünü on dört gün içinde iade etme <b>hakkına sahiptir</b>.</i><br>• <b>serbesttir</b> (staat vrij): <i>Taraflar kira bedelini belirlemekte <b>serbesttir</b>.</i></p>
<p><b>Niet mogen</b><br>• <b>-emez</b>: <i>Ev sahibi, kirayı yasal oranın üzerinde artır<b>amaz</b>.</i> (De verhuurder mag de huur niet boven het wettelijke percentage verhogen.)<br>• <b>yasaktır</b>, <b>-mesi yasaktır</b>: <i>İşçinin izinsiz çalıştırılması <b>yasaktır</b>.</i><br>• <b>geçersizdir</b> (is nietig): <i>Bu hükme aykırı sözleşmeler <b>geçersizdir</b>.</i></p>
<p>Handige zinnen bij een advocaat: <i>Bu konuda <b>yasal haklarım neler</b>?</i> · <i>Ev sahibim beni <b>çıkarabilir mi</b>?</i> · <i><b>Dava açsam</b> ne kadar sürer?</i> · <i>Bunun için <b>hangi belgeler gerekiyor</b>?</i></p>
<p><b>⚠️ Uitzondering:</b> in een wet staat vaak gewoon de <b>brede tijd</b>, zonder enig woord voor «moeten»: <i>Kiracı, kirayı zamanında <b>öder</b>.</i> Dat is geen beschrijving van wat huurders doen, maar een <b>plicht</b>: de huurder moet op tijd betalen. En <b>-emez</b> betekent hier niet «kan niet» maar «mag niet». <b>Waarom?</b> De wet beschrijft de wereld zoals hij hoort te zijn. De brede tijd zegt wat <b>algemeen geldt</b>, en in een wettekst is «wat geldt» hetzelfde als «wat moet». Het Nederlandse recht doet hetzelfde: «De huurder betaalt de huur vóór de eerste van de maand.»</p>`,
        table: [['', 'vorm', 'voorbeeld'], ['moet', '-mekle yükümlüdür', 'ödemekle yükümlüdür'], ['moet', 'brede tijd', 'kiracı öder'], ['mag', '-ebilir · hakkı vardır', 'feshedebilir'], ['mag niet', '-emez · yasaktır', 'artıramaz'], ['nietig', 'geçersizdir', 'sözleşme geçersizdir']],
        sum: 'Ev sahibi kirayı yasal oranın üzerinde artıramaz.',
        ex: [['İşveren, fazla mesai ücretini ödemekle yükümlüdür.', 'De werkgever is verplicht de overwerkvergoeding te betalen.'], ['Tüketici, ürünü on dört gün içinde iade edebilir.', 'De consument mag het product binnen veertien dagen terugsturen.'], ['Kiracı, ev sahibinin izni olmadan evi başkasına kiralayamaz.', 'De huurder mag de woning niet zonder toestemming van de verhuurder onderverhuren.'], ['Yasal haklarım neler?', 'Wat zijn mijn wettelijke rechten?']] }
    ],
    dialogue: {
      t: 'Bij de advocaat', place: 'İstanbul 🇹🇷',
      lines: [
        ['Avukat', 'Buyurun, sorun nedir? Telefonda kira meselesinden söz etmiştiniz.', 'Zegt u het maar, wat is het probleem? Aan de telefoon had u het over een huurkwestie.'],
        ['Ilse', 'Ev sahibim kirayı yüzde yüz artırmak istiyor. Kabul etmezsem evi boşaltmamı söyledi.', 'Mijn verhuurder wil de huur met honderd procent verhogen. Als ik niet akkoord ga, moet ik de woning verlaten, zei hij.'],
        ['Avukat', 'Sözleşmeniz kaç yıllık? Ve içinde artış oranına ilişkin bir madde var mı?', 'Voor hoeveel jaar is uw contract? En staat er een artikel in over het verhogingspercentage?'],
        ['Ilse', 'İki yıllık, daha bir yılı var. Artışın yasal orana göre yapılacağı yazıyor.', 'Voor twee jaar, er is nog een jaar over. Er staat dat de verhoging volgens het wettelijke percentage gebeurt.'],
        ['Avukat', 'O hâlde içiniz rahat olsun. Ev sahibi kirayı yasal oranın üzerinde artıramaz; sizi bu gerekçeyle çıkaramaz da.', 'Dan kunt u gerust zijn. De verhuurder mag de huur niet boven het wettelijke percentage verhogen; en hij mag u om die reden ook niet uitzetten.'],
        ['Ilse', 'Peki dava açarsa ne olur?', 'En wat gebeurt er als hij een zaak aanspant?'],
        ['Avukat', 'Önce arabulucuya gitmek zorunda. Orada anlaşma sağlanamazsa mahkemeye başvurabilir, ama elinde bir delil yok.', 'Hij moet eerst naar een mediator. Als daar geen akkoord komt, kan hij naar de rechter, maar hij heeft geen bewijs in handen.'],
        ['Ilse', 'Çok teşekkür ederim. Ona yazılı bir cevap vermem gerekir mi?', 'Heel hartelijk dank. Moet ik hem schriftelijk antwoorden?'],
        ['Avukat', 'Evet, noter aracılığıyla bildirimde bulunalım. Böylece her şey kayıt altında olur.', 'Ja, laten we een kennisgeving doen via de notaris. Dan staat alles zwart op wit.']
      ],
      q: [
        { t: 'mc', q: 'Ev sahibi ne istiyor?', o: ['Kirayı yüzde yüz artırmak', 'Evi satmak', 'Sözleşmeyi uzatmak'] },
        { t: 'mc', q: 'Avukata göre ev sahibi ne yapamaz?', o: ['Kirayı yasal oranın üzerinde artıramaz', 'Arabulucuya gidemez', 'Sözleşmeyi okuyamaz'] },
        { t: 'mc', q: 'Ilse ev sahibine nasıl cevap verecek?', o: ['Noter aracılığıyla yazılı olarak', 'Telefonla', 'Hiç cevap vermeyecek'] }
      ]
    },
    culture: { t: 'De noter, de arabulucu en het mahalle-gevoel', html: `<p>De <b>noter</b> speelt in het Turkse dagelijks leven een grotere rol dan in Nederland. Je gaat erheen voor een volmacht (<b>vekâletname</b>), de verkoop van een auto, een beëdigde vertaling en een officiële kennisgeving (<b>ihtarname</b>). Wie iets «via de notaris» stuurt, laat weten dat het menens is.</p>
<p>Sinds enkele jaren moeten arbeids-, huur- en consumentengeschillen eerst langs een <b>arabulucu</b> (mediator) voordat de rechter ernaar kijkt. Consumenten kunnen voor kleinere bedragen terecht bij het <b>Tüketici Hakem Heyeti</b>, gratis en zonder advocaat.</p>
<p>🏘️ Toch wordt veel nog buiten het recht om opgelost: via de <b>muhtar</b> (het gekozen wijkhoofd), een gemeenschappelijke kennis, of een glas thee met de verhuurder.</p>` },
    ex: [
      { t: 'cloze', s: 'Kiracı, iki ay önceden bildirmek ___ sözleşmeyi feshedebilir.', h: 'mits', a: ['kaydıyla', 'şartıyla'], o: ['kaydıyla', 'suretiyle', 'üzere'], nl: 'De huurder kan het contract opzeggen, mits hij dat twee maanden vooraf meldt.', tag: 'tr-hukuk' },
      { t: 'cloze', s: 'Kira ayın beşine kadar ödenir; aksi ___ gecikme faizi uygulanır.', h: 'anders', a: ['takdirde', 'hâlde', 'halde'], o: ['takdirde', 'kaydıyla', 'itibaren'], nl: 'De huur wordt vóór de vijfde betaald; anders wordt vertragingsrente toegepast.', tag: 'tr-hukuk' },
      { t: 'cloze', s: 'Sözleşme 1 Ocak’tan ___ geçerlidir.', h: 'met ingang van', a: ['itibaren'], o: ['itibaren', 'üzere', 'dair'], nl: 'Het contract is geldig met ingang van 1 januari.', tag: 'tr-hukuk' },
      { t: 'mc', q: 'Wat betekent «Duruşma bitmek üzere»?', o: ['De zitting is bijna afgelopen.', 'De zitting is bedoeld om te eindigen.', 'Tot ziens na de zitting.'], x: '⚠️ Uitzondering: -mek üzere betekent «om te» als er nog een hoofdwerkwoord volgt, en «op het punt te» als üzere zelf het gezegde is.', tag: 'tr-hukuk' },
      { t: 'mc', q: 'Taraflar, anlaşmazlığı çözmek üzere arabulucuya başvurdu. Wat betekent «üzere» hier?', o: ['om te', 'op het punt te', 'tot ziens'], tag: 'tr-hukuk' },
      { t: 'cloze', s: 'İşveren, fazla mesai ücretini ödemekle ___.', h: 'is verplicht', a: ['yükümlüdür'], o: ['yükümlüdür', 'serbesttir', 'yasaktır'], nl: 'De werkgever is verplicht de overwerkvergoeding te betalen.', tag: 'tr-yukum' },
      { t: 'cloze', s: 'Ev sahibi, kirayı yasal oranın üzerinde artır___.', h: 'mag niet', a: ['amaz'], o: ['amaz', 'abilir', 'malı'], nl: 'De verhuurder mag de huur niet boven het wettelijke percentage verhogen.', tag: 'tr-yukum' },
      { t: 'cloze', s: 'İşçinin yıllık izin ___ vardır.', h: 'recht', a: ['hakkı'], o: ['hakkı', 'suçu', 'davası'], nl: 'De werknemer heeft recht op jaarlijks verlof.', tag: 'tr-yukum' },
      { t: 'mc', q: 'In een wet staat: «Kiracı, kirayı zamanında öder.» Wat betekent dat?', o: ['De huurder moet de huur op tijd betalen.', 'Huurders betalen meestal op tijd.', 'De huurder heeft op tijd betaald.'], x: '⚠️ Uitzondering: in een wettekst is de brede tijd een plicht. De wet beschrijft wat algemeen geldt, en dat is wat moet. Vergelijk: «De huurder betaalt de huur vóór de eerste.»', tag: 'tr-yukum' },
      { t: 'mc', q: 'Wat betekent «Bu hükme aykırı sözleşmeler geçersizdir»?', o: ['Contracten in strijd met deze bepaling zijn nietig.', 'Contracten volgens deze bepaling zijn geldig.', 'Deze bepaling geldt niet voor contracten.'], tag: 'tr-yukum' },
      { t: 'mc', q: 'Wie is de «sanık»?', o: ['de verdachte', 'de getuige', 'de rechter'], tag: 'vocab' },
      { t: 'tr', nl: 'Wat zijn mijn wettelijke rechten?', a: ['Yasal haklarım neler?', 'Yasal haklarım nelerdir?', 'Yasal haklarım ne?'], tag: 'tr-yukum' },
      { t: 'tr', nl: 'De consument mag het product binnen veertien dagen terugsturen.', a: ['Tüketici ürünü on dört gün içinde iade edebilir.', 'Tüketici, ürünü on dört gün içinde iade edebilir.', 'Tüketici ürünü 14 gün içinde iade edebilir.'], tag: 'tr-yukum' },
      { t: 'order', s: 'İtirazınızı en geç on beş gün içinde yapmalısınız.', nl: 'U moet uiterlijk binnen vijftien dagen bezwaar maken.', tag: 'tr-hukuk' },
      { t: 'order', s: 'Kiracı, ev sahibinin izni olmadan evi başkasına kiralayamaz.', nl: 'De huurder mag de woning niet zonder toestemming van de verhuurder onderverhuren.', tag: 'tr-yukum' },
      { t: 'match', p: [['mahkeme', 'rechtbank'], ['dava', 'rechtszaak'], ['tanık', 'getuige'], ['tazminat', 'schadevergoeding'], ['kiracı', 'huurder'], ['noter', 'notaris']], tag: 'vocab' }
    ],
    reading: {
      t: 'Kira sözleşmesinden maddeler', type: 'Contract (fragment)',
      p: [
        ['Madde 3 – Kira bedeli aylık 18.000 TL olup her ayın beşine kadar ev sahibinin banka hesabına ödenir. Aksi takdirde yasal gecikme faizi uygulanır.', 'Artikel 3 – De huurprijs bedraagt 18.000 TL per maand en wordt vóór de vijfde van elke maand op de bankrekening van de verhuurder betaald. Bij gebreke daarvan wordt de wettelijke vertragingsrente toegepast.'],
        ['Madde 5 – Kira bedeli, her yıl sözleşmenin yenilendiği tarihte yasal oranı geçmemek kaydıyla artırılır. Bu orana aykırı artış talepleri geçersizdir.', 'Artikel 5 – De huurprijs wordt elk jaar op de datum waarop het contract wordt verlengd verhoogd, mits het wettelijke percentage niet wordt overschreden. Verhogingseisen in strijd met dit percentage zijn nietig.'],
        ['Madde 7 – Kiracı, evi özenle kullanmak ve komşulara saygı göstermekle yükümlüdür. Ev sahibinin yazılı izni olmadan evde değişiklik yapamaz, evi başkasına kiralayamaz.', 'Artikel 7 – De huurder is gehouden de woning zorgvuldig te gebruiken en de buren te respecteren. Zonder schriftelijke toestemming van de verhuurder mag hij geen wijzigingen in de woning aanbrengen en de woning niet onderverhuren.'],
        ['Madde 9 – Kiracı, en az iki ay önceden yazılı olarak bildirmek kaydıyla sözleşmeyi feshedebilir. Depozito, eve zarar verilmemiş olması hâlinde tahliyeden itibaren on beş gün içinde iade edilir.', 'Artikel 9 – De huurder kan het contract opzeggen, mits hij dat ten minste twee maanden vooraf schriftelijk meldt. De borg wordt, indien er geen schade aan de woning is toegebracht, binnen vijftien dagen na de ontruiming teruggegeven.']
      ],
      gl: [['kira bedeli', 'huurprijs'], ['gecikme faizi', 'vertragingsrente'], ['aykırı', 'in strijd met'], ['özenle', 'zorgvuldig'], ['değişiklik', 'wijziging'], ['depozito', 'borg']],
      q: [
        { t: 'mc', q: 'Kira en geç ne zaman ödenmeli?', o: ['Her ayın beşine kadar', 'Her ayın sonunda', 'Yılda bir kez'] },
        { t: 'mc', q: 'Kiracı ev sahibinin izni olmadan ne yapamaz?', o: ['Evi başkasına kiralayamaz', 'Evde oturamaz', 'Kirayı ödeyemez'] },
        { t: 'mc', q: 'Kiracı sözleşmeyi hangi şartla feshedebilir?', o: ['İki ay önceden yazılı bildirerek', 'Hiçbir şart olmadan', 'Sadece mahkeme kararıyla'] }
      ]
    },
    say: [['Yasal haklarım neler?', 'Wat zijn mijn wettelijke rechten?'], ['Ev sahibi kirayı bu kadar artıramaz.', 'De verhuurder mag de huur niet zo veel verhogen.'], ['Sözleşmede buna ilişkin bir madde var mı?', 'Staat daar een artikel over in het contract?'], ['Noter aracılığıyla bildirimde bulunacağım.', 'Ik doe een kennisgeving via de notaris.']],
    task: { nl: 'Schrijf vier artikelen (Madde 1 tot en met 4) van een eenvoudig contract tussen huisgenoten of tussen jou en iemand die je fiets, auto of vakantiehuis leent. Gebruik één plicht (-mekle yükümlüdür of de brede tijd), één recht (-ebilir, hakkı vardır), één verbod (-emez) en één voorwaarde (-mek kaydıyla of aksi takdirde).', model: 'Madde 1 – Ev arkadaşları kirayı ve faturaları eşit olarak paylaşır.\nMadde 2 – Her ev arkadaşı, haftada bir ortak alanları temizlemekle yükümlüdür.\nMadde 3 – Ev arkadaşları, bir gün önceden haber vermek kaydıyla misafir ağırlayabilir. Misafirler üç geceden fazla kalamaz.\nMadde 4 – Evden ayrılmak isteyen kişi bunu en az bir ay önceden bildirir; aksi takdirde o ayın kirasını ödemekle yükümlüdür.' },
    scenario: { nl: 'Je hebt een afspraak bij een advocaat in İstanbul. Je verhuurder wil de huur verdubbelen en dreigt met uitzetting.', role: 'You are a calm, experienced lawyer (avukat) in İstanbul specialised in tenancy law. Ask the learner about their contract (duration, clause on rent increase), explain what the landlord may and may not do (artıramaz, çıkaramaz, arabulucuya gitmek zorunda), reassure them, and suggest sending a formal notice via the notary. Use clear legal C1 Turkish with -mekle yükümlüdür, -mek kaydıyla, aksi takdirde, and explain a term in simpler Turkish if the learner asks.', goal: 'Leg je situatie uit, vraag wat je rechten zijn, en spreek af welke stap jullie zetten.' }
  });

  /* ───────────────────────── C1 · 8 ───────────────────────── */
  U({
    id: 'tr-c1-08', level: 'C1', icon: '🕌', title: 'Cevap mı, yanıt mı?', nl: 'Oude en nieuwe woorden: de lagen van het Turks',
    goals: ['Begrijpen waarom het Turks vaak twee woorden voor hetzelfde heeft', 'Het register horen: ouderwets, neutraal, modern', 'Arabische en Perzische resten herkennen: -î, gayri-, bi-, -hane', 'Een tekst over de taalhervorming lezen'],
    vocab: [
      ['yanıt', 'antwoord (nieuw woord)'], ['olanak', 'mogelijkheid (nieuw)'], ['misal', 'voorbeeld (oud)'], ['koşul', 'voorwaarde (nieuw)'], ['sözcük', 'woord (nieuw)'], ['tümce', 'zin (nieuw, zeldzaam)'], ['mektep', 'school (verouderd)'],
      ['hekim', 'arts (oud, deftig)'], ['muallim', 'leraar (verouderd)'], ['tayyare', 'vliegtuig (verouderd)'], ['tabiat', 'natuur (oud)'], ['ulus', 'natie (nieuw)'], ['millet', 'volk / natie (oud)'], ['uygarlık', 'beschaving (nieuw)'],
      ['medeniyet', 'beschaving (oud)'], ['hürriyet', 'vrijheid (oud)'], ['bağımsızlık', 'onafhankelijkheid (nieuw)'], ['istiklal', 'onafhankelijkheid (oud)'], ['devrim', 'revolutie / hervorming (nieuw)'], ['inkılap', 'hervorming (oud)'], ['anı', 'herinnering (nieuw)'],
      ['hatıra', 'aandenken / herinnering (oud)'], ['yaşam', 'leven (nieuw)'], ['siyasal', 'politiek (nieuw)'], ['siyasi', 'politiek (oud)'], ['tarihî', 'historisch'], ['gayriresmî', 'officieus / informeel'], ['bihaber', 'niet op de hoogte'], ['Osmanlıca', 'Osmaans-Turks'], ['Öztürkçe', 'zuiver Turks'], ['harf devrimi', 'schrifthervorming']
    ],
    grammar: [
      { t: 'Twee woorden voor één ding: oud en nieuw', es: 'Eski ve yeni sözcükler',
        html: `<p>Het Osmaans-Turks zat vol Arabische en Perzische woorden. Vanaf 1932 heeft de <b>Türk Dil Kurumu</b> (het taalinstituut) daar duizenden «zuiver Turkse» woorden tegenover gezet: nieuw gevormd uit Turkse stammen, of teruggehaald uit oude teksten en dialecten. Het resultaat: voor heel veel begrippen bestaan nu <b>twee woorden</b>.</p>
<p><i>cevap</i> – <b>yanıt</b> (antwoord) · <i>imkân</i> – <b>olanak</b> (mogelijkheid) · <i>şart</i> – <b>koşul</b> (voorwaarde) · <i>kelime</i> – <b>sözcük</b> (woord) · <i>hayat</i> – <b>yaşam</b> (leven) · <i>millet</i> – <b>ulus</b> (natie) · <i>medeniyet</i> – <b>uygarlık</b> (beschaving) · <i>hürriyet</i> – <b>özgürlük</b> (vrijheid) · <i>istiklal</i> – <b>bağımsızlık</b> (onafhankelijkheid) · <i>misal</i> – <b>örnek</b> (voorbeeld) · <i>tabiat</i> – <b>doğa</b> (natuur) · <i>hatıra</i> – <b>anı</b> (herinnering).</p>
<p>Drie dingen kunnen er met zo’n paar gebeuren:<br><b>1. Het nieuwe woord wint.</b> <i>Mektep, muallim, tayyare</i> zijn verdwenen; iedereen zegt <b>okul, öğretmen, uçak</b>. Wie de oude gebruikt, klinkt als een grootvader of als een roman uit 1920.<br><b>2. Beide blijven, met een verschil in toon.</b> Het oude woord klinkt warmer, alledaagser of behoudender (<i>hayat, cevap, kelime</i>); het nieuwe klinkt schriftelijker, moderner of intellectueler (<i>yaşam, yanıt, sözcük</i>). De woordkeuze kan zelfs iets over iemands politieke kleur zeggen.<br><b>3. De betekenis splitst.</b> <i>Hatıra</i> is vooral een aandenken of souvenir, <i>anı</i> een herinnering in je hoofd. <i>Şehir</i> is een stad waar je woont, <i>kent</i> een stad in een beleidsstuk (<i>kentsel dönüşüm</i>, stadsvernieuwing).</p>
<p>Sommige nieuwe woorden zijn nooit aangeslagen en worden nu als grap gebruikt, zoals het verzonnen <i>gök konuksal avrat</i> («hemelgastvrouw») voor stewardess. En veel oude woorden zijn onmisbaar gebleven in vaste verbindingen: <i>İstiklal Caddesi, Cumhuriyet, Millî Eğitim Bakanlığı</i>.</p>
<p><b>⚠️ Uitzondering:</b> bij kleuren en het hart is het omgekeerd. Hier is het <b>Turkse</b> woord het oude, gevoelige en figuurlijke, en het <b>leenwoord</b> het neutrale, alledaagse: <i>siyah</i> (zwart, neutraal) naast <b>kara</b> (<i>kara gün</i>, zwarte dag; <i>kara sevda</i>, hopeloze liefde), <i>beyaz</i> (wit) naast <b>ak</b> (<i>ak saçlı</i>, grijsharig; <i>alnı ak</i>, met een schoon geweten), <i>kalp</i> (hart, ook het orgaan) naast <b>yürek</b> (moed, gevoel) en <b>gönül</b> (het hart dat liefheeft). <b>Waarom?</b> Deze leenwoorden kwamen al vroeg binnen via de stad, de handel en de geneeskunde, voor het ding zelf. De oude Turkse woorden bleven voortleven in liederen, spreekwoorden en plaatsnamen (<i>Karadeniz, Akdeniz</i>), en kregen daardoor een dichterlijke lading.</p>`,
        table: [['oud (Arabisch / Perzisch)', 'nieuw (Turks)', 'betekenis'], ['cevap', 'yanıt', 'antwoord'], ['imkân', 'olanak', 'mogelijkheid'], ['şart', 'koşul', 'voorwaarde'], ['hayat', 'yaşam', 'leven'], ['millet', 'ulus', 'natie'], ['hürriyet', 'özgürlük', 'vrijheid'], ['mektep', 'okul', 'school']],
        sum: 'Cevap da denir, yanıt da.',
        ex: [['Sorunuza yazılı yanıt vereceğiz.', 'We zullen uw vraag schriftelijk beantwoorden.'], ['Bana bir cevap ver!', 'Geef me antwoord!'], ['Dedem hâlâ «mektep» der.', 'Mijn opa zegt nog steeds «mektep».'], ['Bu yüzük annemden hatıra.', 'Deze ring is een aandenken van mijn moeder.']] },
      { t: 'Arabische en Perzische resten: -î, gayri-, bi-, -hane', es: 'Arapça ve Farsça ekler',
        html: `<p>De leenwoorden hebben stukjes eigen grammatica meegenomen. Je hoeft ze niet zelf te vormen, maar als je ze herkent, kun je honderden woorden raden.</p>
<p><b>-î</b> (Arabisch, maakt een bijvoeglijk naamwoord): <i>tarih → tarih<b>î</b></i> (historisch), <i>resm<b>î</b></i> (officieel), <i>asker<b>î</b></i> (militair), <i>mill<b>î</b></i> (nationaal), <i>hukuk<b>î</b></i> (juridisch). De Turkse tegenhanger is <b>-sel / -sal</b>: <i>tarih<b>sel</b>, siyas<b>al</b>, ulus<b>al</b>, hukuk<b>sal</b></i>.</p>
<p><b>Ontkennende voorvoegsels</b> (het Turks zelf heeft geen voorvoegsels!): <b>gayri-</b> (niet-): <i>gayriresmî</i> (officieus), <i>gayrimenkul</i> (onroerend goed), <i>gayrimüslim</i> · <b>bi-</b> (zonder): <i>bihaber</i> (niet op de hoogte), <i>biçare</i> (hulpeloos) · <b>na-</b> (on-): <i>nahoş</i> (onaangenaam), <i>namüsait</i> (ongelegen). De Turkse manier is <b>-siz</b> of <b>değil</b>: <i>habersiz, çaresiz, resmî değil</i>.</p>
<p><b>Perzische bouwstenen</b>: <b>-hane</b> (huis): <i>kütüphane</i> (bibliotheek), <i>postane</i>, <i>hastane</i>, <i>eczane</i>, <i>çayhane</i> · <b>-kâr</b> (doener): <i>sanatkâr</i> (kunstenaar), <i>hizmetkâr</i> (bediende), <i>günahkâr</i> (zondaar) · <b>-dar</b> (houder): <i>hissedar</i> (aandeelhouder), <i>dindar</i> (gelovig) · <b>hem-</b> (mede-): <i>hemşehri</i> (stadgenoot), <i>hemfikir</i>.</p>
<p><b>De izafet</b>: een Perzische manier om «van» te zeggen met een <b>-i</b> ertussen, in omgekeerde volgorde vergeleken met het Turks: <i>nokta-<b>i</b> nazar</i> (gezichtspunt), <i>Bâb-<b>ı</b> Âli</i> (de Verheven Poort), <i>aşk-<b>ı</b> memnu</i> (verboden liefde). Je ziet het in namen, titels en plechtige taal.</p>
<p><b>⚠️ Uitzondering:</b> <i>evlat</i> (kind), <i>eşya</i> (spullen), <i>evrak</i> (papieren), <i>ahbap</i> (kennis) en <i>hayvanat</i> zijn in het Arabisch <b>meervoudsvormen</b> (van <i>veled, şey, varak, habip, hayvan</i>). Toch gebruikt het Turks ze als enkelvoud en zet er gewoon <b>-ler</b> achter: <i>evlat<b>lar</b>ım, eşya<b>lar</b>, ahbap<b>lar</b></i>. <b>Waarom?</b> Het Turks heeft deze woorden als kant-en-klare blokken geleend, zonder de Arabische grammatica erbij. Voor een Turkse spreker is <i>evlat</i> gewoon één woord voor «kind van iemand». Hetzelfde gebeurde in het Nederlands met <i>data</i> en <i>media</i>, die steeds vaker als enkelvoud worden gebruikt.</p>`,
        table: [['bouwsteen', 'betekenis', 'voorbeelden', 'Turkse tegenhanger'], ['-î', 'bijvoeglijk', 'tarihî · resmî · millî', '-sel / -sal'], ['gayri-', 'niet-', 'gayriresmî · gayrimenkul', 'değil'], ['bi- · na-', 'zonder · on-', 'bihaber · nahoş', '-siz'], ['-hane', 'huis', 'kütüphane · eczane', '-evi, -lik'], ['-kâr · -dar', 'doener · houder', 'sanatkâr · hissedar', '-ci, -li']],
        sum: 'Tarihî de denir, tarihsel de.',
        ex: [['Bu tarihî bir bina.', 'Dit is een historisch gebouw.'], ['Gayriresmî rakamlara göre işsizlik artıyor.', 'Volgens officieuze cijfers stijgt de werkloosheid.'], ['Olanlardan bihaberdim.', 'Ik was niet op de hoogte van wat er gebeurd was.'], ['Eşyalarımı topladım.', 'Ik heb mijn spullen gepakt.']] }
    ],
    dialogue: {
      t: 'Thee met opa', place: 'Konya 🇹🇷',
      lines: [
        ['Dede', 'Hoş geldin kızım. Mektepten yeni mi çıktın, yoksa işe mi başladın?', 'Welkom, meisje. Kom je net van school, of ben je al aan het werk?'],
        ['Elif', 'Dede, artık kimse «mektep» demiyor! Ilse üniversitede araştırmacı.', 'Opa, niemand zegt meer «mektep»! Ilse is onderzoeker aan de universiteit.'],
        ['Ilse', 'Olsun, ben anladım. Eski kelimeleri duymak hoşuma gidiyor; kitaplarda hep karşıma çıkıyor.', 'Geeft niet, ik begreep het. Ik hoor de oude woorden graag; in boeken kom ik ze steeds tegen.'],
        ['Dede', 'Bizim zamanımızda muallim derdik, hekim derdik. Şimdikiler «yanıt» diyor, «olanak» diyor. Tuhafıma gidiyor.', 'In onze tijd zeiden we «muallim», «hekim». Die van nu zeggen «yanıt», «olanak». Ik vind het raar klinken.'],
        ['Elif', 'Ama dede, sen de «uçak» diyorsun, «tayyare» demiyorsun.', 'Maar opa, jij zegt ook «uçak» en niet «tayyare».'],
        ['Dede', 'O başka! Bazısı tuttu, bazısı tutmadı. Dil dediğin nehir gibidir; kendi yolunu bulur.', 'Dat is wat anders! Sommige zijn aangeslagen, andere niet. Een taal is als een rivier; die vindt zijn eigen weg.'],
        ['Ilse', 'Çok güzel söylediniz. Peki sizce hangisi daha güzel: «hürriyet» mi, «özgürlük» mü?', 'Dat heeft u mooi gezegd. En welke vindt u mooier: «hürriyet» of «özgürlük»?'],
        ['Dede', 'İkisi de güzel kızım, yeter ki olsun. Hadi çayınız soğumasın.', 'Ze zijn allebei mooi, meisje, als het er maar is. Kom, laat jullie thee niet koud worden.']
      ],
      q: [
        { t: 'mc', q: 'Dede «okul» yerine hangi kelimeyi kullanıyor?', o: ['Mektep', 'Kent', 'Yanıt'] },
        { t: 'mc', q: 'Dede yeni kelimeler için ne diyor?', o: ['Tuhafına gidiyor', 'Çok beğeniyor', 'Hiç duymamış'] },
        { t: 'mc', q: 'Dedeye göre dil neye benzer?', o: ['Bir nehre', 'Bir dağa', 'Bir eve'] }
      ]
    },
    culture: { t: '1928 en 1932: een taal in één generatie veranderd', html: `<p>Op 1 november 1928 verving Turkije het Arabische schrift door het <b>Latijnse alfabet</b>: de <b>Harf Devrimi</b>. Kranten kregen een paar maanden om over te schakelen, Atatürk trok zelf met een schoolbord door het land, en binnen enkele jaren kon een nieuwe generatie de boeken van haar grootouders niet meer lezen.</p>
<p>In 1932 volgde de <b>Dil Devrimi</b>, de taalhervorming: de <b>Türk Dil Kurumu</b> ging Arabische en Perzische woorden vervangen. Het ging zo snel dat Atatürks beroemde redevoering uit 1927, de <i>Nutuk</i>, al een paar decennia later in «hedendaags Turks» vertaald moest worden.</p>
<p>🗣️ Het debat is nooit geëindigd. Voor de een zijn de nieuwe woorden een bevrijding, voor de ander een verlies van geheugen. Luister naar het nieuws, een preek en een popliedje, en je hoort drie verschillende woordenschatten.</p>` },
    ex: [
      { t: 'mc', q: 'Welk woord is de nieuwe, Turkse tegenhanger van «cevap»?', o: ['yanıt', 'koşul', 'sözcük'], tag: 'tr-eski' },
      { t: 'mc', q: 'Welk woord is de nieuwe tegenhanger van «imkân»?', o: ['olanak', 'yaşam', 'ulus'], tag: 'tr-eski' },
      { t: 'cloze', s: 'Bu yüzük annemden ___.', h: 'aandenken', a: ['hatıra'], o: ['hatıra', 'anı', 'yanıt'], nl: 'Deze ring is een aandenken van mijn moeder.', x: 'Hatıra is vooral een tastbaar aandenken; anı is een herinnering in je hoofd.', tag: 'tr-eski' },
      { t: 'mc', q: 'Iemand zegt «mektep» en «muallim». Hoe klinkt dat?', o: ['Ouderwets, als een grootvader.', 'Modern en intellectueel.', 'Neutraal, zo zegt iedereen het.'], tag: 'tr-eski' },
      { t: 'mc', q: 'Bij kleuren is het omgekeerd. Welk woord is het neutrale, alledaagse woord voor «zwart»?', o: ['siyah', 'kara', 'ak'], x: '⚠️ Uitzondering: hier is het leenwoord (siyah, beyaz) neutraal en het Turkse woord (kara, ak) figuurlijk en dichterlijk: kara gün, ak saçlı. De oude woorden leefden voort in liederen en spreekwoorden.', tag: 'tr-eski' },
      { t: 'cloze', s: '___ gün dostu', h: 'zwarte (figuurlijk)', a: ['Kara'], o: ['Kara', 'Siyah', 'Ak'], nl: 'een vriend in zwarte dagen', tag: 'tr-eski' },
      { t: 'mc', q: 'Wat is de Turkse tegenhanger van het Arabische -î in «tarihî»?', o: ['-sel (tarihsel)', '-siz (tarihsiz)', '-ci (tarihçi)'], tag: 'tr-izafet' },
      { t: 'cloze', s: '___resmî rakamlara göre işsizlik artıyor.', h: 'niet-', a: ['Gayri'], o: ['Gayri', 'Bi', 'Hem'], nl: 'Volgens officieuze cijfers stijgt de werkloosheid.', tag: 'tr-izafet' },
      { t: 'cloze', s: 'Olanlardan ___haberdim.', h: 'zonder', a: ['bi'], o: ['bi', 'gayri', 'na'], nl: 'Ik was niet op de hoogte van wat er gebeurd was.', tag: 'tr-izafet' },
      { t: 'mc', q: 'Wat betekent het stukje -hane in «kütüphane» en «eczane»?', o: ['huis, gebouw', 'boek', 'dokter'], tag: 'tr-izafet' },
      { t: 'mc', q: '«Evlat» is in het Arabisch een meervoud. Hoe zeg je in het Turks «mijn kinderen»?', o: ['evlatlarım', 'evladım', 'evlat'], x: '⚠️ Uitzondering: het Turks heeft evlat, eşya en evrak als kant-en-klare woorden geleend, zonder de Arabische grammatica. Het zijn dus gewone enkelvouden die -ler krijgen.', tag: 'tr-izafet' },
      { t: 'mc', q: 'Wat betekent «hemşehri»?', o: ['stadgenoot', 'burgemeester', 'vreemdeling'], x: 'hem- = mede-, şehir = stad.', tag: 'tr-izafet' },
      { t: 'tr', nl: 'Dit is een historisch gebouw.', a: ['Bu tarihî bir bina.', 'Bu tarihi bir bina.', 'Bu tarihsel bir bina.', 'Bu tarihî bir binadır.'], tag: 'tr-izafet' },
      { t: 'tr', nl: 'Ik heb mijn spullen gepakt.', a: ['Eşyalarımı topladım.', 'Eşyalarımı hazırladım.'], tag: 'tr-izafet' },
      { t: 'order', s: 'Sorunuza yazılı yanıt vereceğiz.', nl: 'We zullen uw vraag schriftelijk beantwoorden.', tag: 'tr-eski' },
      { t: 'match', p: [['şart', 'koşul'], ['kelime', 'sözcük'], ['hayat', 'yaşam'], ['millet', 'ulus'], ['hürriyet', 'özgürlük'], ['tabiat', 'doğa']], tag: 'tr-eski' }
    ],
    reading: {
      t: 'Bir gecede değişen alfabe', type: 'Achtergrondartikel',
      p: [
        ['1928 yılının kasım ayında Türkiye, Arap harflerini bırakarak Latin alfabesine geçti. Harf Devrimi adı verilen bu değişiklik, birkaç ay gibi kısa bir sürede uygulandı.', 'In november 1928 liet Turkije de Arabische letters los en ging over op het Latijnse alfabet. Deze verandering, die de Schrifthervorming werd genoemd, werd in de korte tijd van enkele maanden doorgevoerd.'],
        ['Dört yıl sonra Türk Dil Kurumu kuruldu. Kurumun amacı, Arapça ve Farsça sözcüklerin yerine Türkçe karşılıklar bulmaktı. Kimi sözcükler halk ağzından derlendi, kimileri yeniden türetildi.', 'Vier jaar later werd het Turkse Taalinstituut opgericht. Het doel van het instituut was Turkse tegenhangers te vinden voor Arabische en Perzische woorden. Sommige woorden werden uit de volksmond verzameld, andere opnieuw afgeleid.'],
        ['Bu yeni sözcüklerin bir kısmı tuttu: «okul», «uçak», «öğretmen» bugün herkesin dilinde. Bir kısmı ise hiç benimsenmedi ve unutulup gitti.', 'Een deel van deze nieuwe woorden sloeg aan: «okul», «uçak», «öğretmen» liggen vandaag bij iedereen in de mond. Een ander deel werd nooit overgenomen en raakte in vergetelheid.'],
        ['Değişim o kadar hızlı oldu ki bugün bir lise öğrencisi, yüz yıl önce yazılmış bir romanı sözlüksüz okuyamıyor. Kimine göre bu bir özgürleşme, kimine göre ise bir hafıza kaybı.', 'De verandering ging zo snel dat een scholier van nu een roman van honderd jaar geleden niet zonder woordenboek kan lezen. Volgens sommigen is dat een bevrijding, volgens anderen een geheugenverlies.']
      ],
      gl: [['karşılık', 'tegenhanger / equivalent'], ['halk ağzı', 'volksmond'], ['derlemek', 'verzamelen'], ['türetmek', 'afleiden'], ['benimsemek', 'zich eigen maken / overnemen'], ['hafıza kaybı', 'geheugenverlies']],
      q: [
        { t: 'mc', q: '1928’de ne değişti?', o: ['Alfabe', 'Başkent', 'Para birimi'] },
        { t: 'mc', q: 'Türk Dil Kurumu’nun amacı neydi?', o: ['Yabancı sözcüklere Türkçe karşılık bulmak', 'Yeni bir alfabe yapmak', 'Arapça öğretmek'] },
        { t: 'mc', q: 'Bugünkü öğrenciler eski romanları nasıl okuyor?', o: ['Sözlük yardımıyla', 'Çok kolay', 'Hiç okuyamıyorlar çünkü yasak'] }
      ]
    },
    say: [['Cevap da denir, yanıt da.', 'Je kunt zowel cevap als yanıt zeggen.'], ['Dedem hâlâ «mektep» der.', 'Mijn opa zegt nog steeds «mektep».'], ['Bu tarihî bir bina.', 'Dit is een historisch gebouw.'], ['Olanlardan bihaberdim.', 'Ik was er niet van op de hoogte.']],
    task: { nl: 'Schrijf vijf of zes zinnen over woorden in jouw eigen taal die oud of juist nieuw klinken (in het Nederlands bijvoorbeeld «rijwiel» en «fiets», of Engelse leenwoorden). Vergelijk met het Turks en gebruik minstens drie woordparen uit deze unit (cevap/yanıt, hayat/yaşam, hürriyet/özgürlük …) en één woord met -î, gayri- of bi-.', model: 'Hollandacada da eski ve yeni sözcükler yan yana yaşıyor. Ninem bisiklete hâlâ «rijwiel» der; bana tarihî bir kelime gibi geliyor. Türkçede de durum aynı: dedeler «mektep» ve «hayat» diyor, gençler «okul» ve «yaşam». Bence «cevap» daha sıcak, «yanıt» daha resmî duruyor. Hürriyet de özgürlük de güzel; hangisini seçtiğiniz biraz da kim olduğunuzu gösteriyor. Ben bu farklardan uzun süre bihaberdim.' },
    scenario: { nl: 'Je bent op bezoek bij de opa van je vriendin Elif in Konya. Hij is tachtig en gebruikt veel ouderwetse woorden. Je bent nieuwsgierig naar het verschil.', role: 'You are Elif’s 80-year-old grandfather (dede) in Konya: gentle, a bit nostalgic, fond of proverbs. You use old-fashioned Arabic and Persian words (mektep, muallim, hekim, hürriyet, medeniyet, vesaire, maalesef, teşrif ettiniz) and find the new words (yanıt, olanak, yaşam) odd. When the learner asks, explain an old word with its modern equivalent, tell a short memory of your school days, and ask which words exist in the learner’s language. Address the learner as kızım or evladım. Warm C1 Turkish.', goal: 'Vraag wat zijn ouderwetse woorden betekenen, noem het moderne woord en praat over hoe talen veranderen.' }
  });
})(window.SPT);
