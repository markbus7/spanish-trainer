/* Turks voor Nederlandstaligen — niveau C2, units 3–4 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── C2 · 3 ───────────────────────── */
  U({
    id: 'tr-c2-03', level: 'C2', icon: '🖋️', title: 'Sevelim, sevilelim', nl: 'Poëzie: van Yunus Emre tot de volksdichters',
    goals: ['Een Turks gedicht lezen en de vorm benoemen', 'Dichterlijke en oude woorden herkennen: eyle-, kıl-, kamu, ol', 'Lettergrepen tellen en rijm van redif onderscheiden', 'Zelf een kwatrijn in lettergreepmaat schrijven'],
    vocab: [
      ['koşma', 'volksgedicht van elf lettergrepen'], ['divan şiiri', 'Osmaanse hofpoëzie'], ['ozan', 'volksdichter / bard'], ['âşık', 'rondtrekkende zanger-dichter'], ['aruz', 'lang-kortmaat'], ['mısra', 'versregel (oud)'], ['dörtlük', 'kwatrijn'],
      ['beyit', 'tweeregelig vers'], ['tam kafiye', 'vol rijm'], ['redif', 'herhaalde uitgang na het rijm'], ['hece ölçüsü', 'lettergreepmaat'], ['serbest şiir', 'vrij vers'], ['nakarat', 'refrein'], ['ezberlemek', 'uit het hoofd leren'],
      ['ezbere okumak', 'voordragen uit het hoofd'], ['ilham', 'inspiratie'], ['esin', 'inspiratie (nieuw woord)'], ['imge', 'beeld'], ['atışma', 'dichtersduel'], ['yarım kafiye', 'half rijm'], ['derviş', 'derwisj'],
      ['tekke', 'derwisjenklooster'], ['tasavvuf', 'islamitische mystiek'], ['fani', 'vergankelijk'], ['ebedî', 'eeuwig'], ['eylemek', 'doen (dichterlijk)'], ['kılmak', 'maken / verrichten (oud)'], ['kamu', 'allen (oud) / de openbare sector']
    ],
    grammar: [
      { t: 'Dichterlijke taal: eyle-, kıl-, kamu, ol', es: 'Şiir dili: eski ve şiirsel biçimler',
        html: `<p><b>Yunus Emre</b> schreef rond 1300 in het Turks van het volk. Zevenhonderd jaar later is hij voor een Turk nog leesbaar, op een handvol woorden na. Dezelfde woorden keren terug bij de volksdichters (<i>âşık</i>) en in moderne poëzie die plechtig wil klinken.</p>
<p>• <b>eyle-</b> = <i>et-</i> (doen): <i>sabr<b>eyle</b></i> (heb geduld) · <i>Neyle<b>yim</b>?</i> (wat moet ik doen? van <i>ne eyleyeyim</i>) · <i>seyr<b>eyle</b></i> (kijk)<br>• <b>kıl-</b> = <i>yap-, et-</i>: <i>işi kolay <b>kılalım</b></i> (laten we het makkelijk maken). Nu nog in <i>namaz kılmak</i> en <i>mümkün kılmak</i>.<br>• <b>kamu</b> = <i>hepsi, herkes</i>: <i><b>kamu</b> âlem</i> (de hele wereld). Nu: de openbare sector (<i>kamu görevlisi</i>).<br>• <b>ol</b> = <i>o</i> (die), <b>şol</b> = <i>şu</i>: <i><b>ol</b> dem</i> (dat ogenblik)<br>• <b>kanı</b> = <i>hani, nerede</i> (waar is …?) · <b>kande</b> = <i>nerede</i> · <b>kim</b> = <i>ki</i> (dat)<br>• <b>gerek</b> als gezegde = <i>lazım</i>: <i>Bana seni <b>gerek</b> seni.</i> (Jou heb ik nodig, jou.)<br>• <b>-uban / -üben</b> = <i>-ip</i>: <i>gel<b>üben</b></i> (komend)<br>• <b>ey, hey, a</b> als aanroep: <i><b>Ey</b> gönül!</i> · <i><b>A</b> benim canım!</i></p>
<p>Ook de vormen kunnen ouder zijn: <i>gelir<b>em</b></i> voor <i>gelirim</i>, <i>ben<b>üm</b></i> voor <i>benim</i>, <i>sana</i> als <i>sa<b>ña</b></i>. Je herkent in de dialecten van unit 2 dus het Turks van Yunus terug: de streektaal heeft bewaard wat de standaardtaal heeft losgelaten.</p>
<p><b>⚠️ Uitzondering:</b> in een gedicht staat het werkwoord vaak <b>niet achteraan</b>: <i>Gidiyorum gündüz gece.</i> (Ik ga, dag en nacht.) · <i>Bana seni gerek seni.</i> Dat heet een <b>devrik cümle</b> (omgekeerde zin) en in een zakelijke tekst geldt het als fout. <b>Waarom?</b> De vaste plaats van het werkwoord is een afspraak van de schrijftaal. De naamvallen zeggen al wie wat doet, dus de volgorde is vrij voor wie nadruk, maat of rijm zoekt. Wat achter het werkwoord komt, klinkt als een nagedachte of een echo, en precies dat effect wil de dichter. In spreektaal doet iedereen het ook (<i>Geldim ben!</i>).</p>`,
        table: [['dichterlijk / oud', 'nu', 'betekenis'], ['eyle-', 'et-', 'doen'], ['kıl-', 'yap-', 'maken'], ['kamu', 'herkes, hepsi', 'allen'], ['ol', 'o', 'die'], ['kanı', 'hani, nerede', 'waar is'], ['gerek', 'lazım', 'nodig']],
        sum: 'Gelin tanış olalım, işi kolay kılalım.',
        ex: [['Gelin tanış olalım, işi kolay kılalım.', 'Kom, laten we elkaar leren kennen en het ons makkelijk maken. (Yunus Emre)'], ['Sevelim, sevilelim; dünya kimseye kalmaz.', 'Laten we liefhebben en geliefd worden; de wereld blijft aan niemand. (Yunus Emre)'], ['Bana seni gerek seni.', 'Jou heb ik nodig, jou. (Yunus Emre)'], ['Neyleyim, elimden bir şey gelmez.', 'Wat moet ik doen, ik kan er niets aan veranderen.']] },
      { t: 'Maat en rijm: hece, durak, kafiye, redif', es: 'Ölçü ve uyak: hece, durak, kafiye, redif',
        html: `<p>Turkse volkspoëzie telt <b>lettergrepen</b> (<i>hece ölçüsü</i>). Elke klinker is één lettergreep; lang of kort, beklemtoond of niet doet er niet toe.</p>
<p>• <b>7 lettergrepen</b> (Yunus, <i>mani</i>): <i>İ-lim i-lim bil-mek-tir</i> (7) / <i>İ-lim ken-din bil-mek-tir</i> (7)<br>• <b>8 lettergrepen</b> (4+4): <i>U-zun in-ce | bir yol-da-yım</i> / <i>Gi-di-yo-rum | gün-düz ge-ce</i> (Âşık Veysel)<br>• <b>11 lettergrepen</b> (6+5 of 4+4+3), de maat van de <i>koşma</i>: <i>E-lâ göz-le-ri-ne | kur-ban ol-du-ğum</i> (Karacaoğlan)</p>
<p>De vaste pauze in de regel heet <b>durak</b>. Hij valt altijd tussen twee woorden, nooit midden in een woord.</p>
<p><b>Kafiye</b> (rijm) en <b>redif</b> zijn niet hetzelfde:<br><i>Gelin tanış ol<b>alım</b> / İşi kolay kıl<b>alım</b></i><br>De uitgang <b>-alım</b> is in beide regels hetzelfde achtervoegsel met dezelfde functie: dat is de <b>redif</b>. Het echte rijm zit ervóór, in de stam: o<b>l</b>- / kı<b>l</b>-. Eén gelijke klank heet <i>yarım kafiye</i> (half rijm), twee <i>tam kafiye</i>, drie of meer <i>zengin kafiye</i> (rijk rijm).</p>
<p>De hofpoëzie (<i>divan şiiri</i>) gebruikte een andere maat, de <b>aruz</b>, die lange en korte lettergrepen afwisselt zoals in het Arabisch en Perzisch. Sinds de jaren 1940 schrijven de meeste dichters <b>serbest şiir</b> (vrij vers), met Orhan Veli en Nâzım Hikmet als wegbereiders.</p>
<p><b>⚠️ Uitzondering:</b> twee regels die op precies dezelfde uitgang eindigen, <b>rijmen daarmee nog niet</b>: <i>gel<b>iyorum</b> / bak<b>ıyorum</b></i> heeft alleen redif en geen rijm. In het Nederlands zou «lopen / kopen» gewoon rijm zijn. <b>Waarom?</b> Het Turks plakt achter elk werkwoord dezelfde achtervoegsels. Als die als rijm telden, zou bijna elke regel op elke andere rijmen en was rijmen geen kunst meer. Daarom moet de overeenkomst in de <b>stam</b> zitten, of in uitgangen met een verschillende functie. De redif is de echo, het rijm is de vondst.</p>`,
        table: [['term', 'betekenis', 'voorbeeld'], ['hece ölçüsü', 'lettergrepen tellen', '7, 8 of 11'], ['durak', 'vaste pauze', '4+4 · 6+5'], ['kafiye', 'rijm in de stam', 'ol- / kıl-'], ['redif', 'herhaalde uitgang', '-alım / -alım'], ['aruz', 'lang-kortmaat (hofpoëzie)', 'divan şiiri'], ['serbest şiir', 'vrij vers', 'Orhan Veli']],
        sum: 'Uzun ince bir yoldayım.',
        ex: [['Uzun ince bir yoldayım.', 'Ik ben op een lange, smalle weg. (Âşık Veysel)'], ['İlim ilim bilmektir, ilim kendin bilmektir.', 'Kennis is kennis weten; kennis is jezelf kennen. (Yunus Emre)'], ['Bu dizede sekiz hece var.', 'In deze regel zitten acht lettergrepen.'], ['Kafiye gövdede, redif ekte.', 'Het rijm zit in de stam, de redif in de uitgang.']] }
    ],
    dialogue: {
      t: 'Op de poëzieavond', place: 'Eskişehir 🇹🇷',
      lines: [
        ['Ilse', 'Az önce okunan şiir Yunus Emre’nindi, değil mi? Neredeyse hepsini anladım, şaşırdım.', 'Het gedicht dat net werd voorgedragen was van Yunus Emre, toch? Ik begreep het bijna helemaal, tot mijn verbazing.'],
        ['Defne', 'Evet. Yedi yüz yıllık ama dili sade. Yalnız birkaç eski sözcük var: «kılalım» mesela.', 'Ja. Het is zevenhonderd jaar oud, maar de taal is eenvoudig. Er zitten alleen een paar oude woorden in: «kılalım» bijvoorbeeld.'],
        ['Ilse', '«Yapalım» demek, değil mi? «Namaz kılmak»taki gibi.', 'Dat betekent «yapalım», toch? Zoals in «namaz kılmak».'],
        ['Defne', 'Aynen. Peki ölçüyü fark ettin mi? Her dize yedi hece.', 'Precies. En heb je de maat opgemerkt? Elke regel heeft zeven lettergrepen.'],
        ['Ilse', 'Saymadım ama ritmi hissettim. «Olalım» ile «kılalım» kafiyeli mi?', 'Ik heb niet geteld, maar ik voelde het ritme. Rijmen «olalım» en «kılalım»?'],
        ['Defne', '«-alım» redif, çünkü aynı ek. Asıl kafiye «l» sesinde. Lisede hepimize ezberletirler.', '«-alım» is redif, want het is dezelfde uitgang. Het eigenlijke rijm zit in de klank «l». Op de middelbare school laten ze ons dat allemaal uit het hoofd leren.'],
        ['Ilse', 'Sen ezbere şiir biliyor musun?', 'Ken jij gedichten uit je hoofd?'],
        ['Defne', 'Bilmez olur muyum! Ama sıra sende: bir dörtlük de sen yaz, haftaya okursun.', 'Natuurlijk! Maar nu ben jij aan de beurt: schrijf jij ook een kwatrijn, dan draag je het volgende week voor.']
      ],
      q: [
        { t: 'mc', q: 'Ilse neye şaşırdı?', o: ['Yedi yüz yıllık şiiri anlamasına', 'Şiirin çok uzun olmasına', 'Defne’nin şiir yazmasına'] },
        { t: 'mc', q: 'Şiirin her dizesi kaç hece?', o: ['Yedi', 'Sekiz', 'On bir'] },
        { t: 'mc', q: '«-alım» neden kafiye sayılmıyor?', o: ['Aynı ek olduğu için redif', 'Çok kısa olduğu için', 'Eski bir sözcük olduğu için'] }
      ]
    },
    culture: { t: 'Een land dat gedichten uit het hoofd kent', html: `<p>In Turkije is poëzie geen zaak van een kleine kring. Bijna iedereen kan een paar regels van <b>Yunus Emre</b>, <b>Karacaoğlan</b>, <b>Nâzım Hikmet</b> of <b>Orhan Veli</b> opzeggen, en politici sluiten hun toespraken graag af met een strofe.</p>
<p>De <b>âşık</b> trok met zijn <i>saz</i> van dorp tot dorp. In Kars en Erzurum bestaan nog <i>âşık kahveleri</i>, koffiehuizen waar twee zangers elkaar uitdagen in een <b>atışma</b>: om beurten improviseren ze een strofe op hetzelfde rijm, soms met een naald tussen de lippen (<i>lebdeğmez</i>) zodat ze geen b, p, m, v of f kunnen uitspreken. Deze traditie staat op de UNESCO-lijst.</p>
<p>🖋️ <b>Âşık Veysel</b> (1894–1973), blind sinds zijn kindertijd, is de bekendste van de twintigste eeuw. Zijn lied <i>Uzun İnce Bir Yoldayım</i> kent iedereen.</p>` },
    ex: [
      { t: 'mc', q: 'Wat betekent «kılalım» in «işi kolay kılalım»?', o: ['yapalım', 'bakalım', 'kalalım'], tag: 'tr-siir' },
      { t: 'mc', q: 'Wat is «neyleyim» in gewoon Turks?', o: ['ne yapayım', 'nereye gideyim', 'neden geleyim'], x: 'Van ne eyleyeyim: eyle- is de dichterlijke vorm van et-.', tag: 'tr-siir' },
      { t: 'cloze', s: 'Bana seni ___ seni.', h: 'nodig (Yunus)', a: ['gerek'], o: ['gerek', 'kamu', 'kanı'], nl: 'Jou heb ik nodig, jou.', tag: 'tr-siir' },
      { t: 'mc', q: 'Wat betekende «kamu» bij Yunus Emre?', o: ['herkes, hepsi', 'devlet', 'kimse'], x: 'Nu betekent kamu de openbare sector: kamu görevlisi.', tag: 'tr-siir' },
      { t: 'mc', q: '«Gidiyorum gündüz gece.» Wat is hier bijzonder?', o: ['Het werkwoord staat niet achteraan: devrik cümle.', 'Het werkwoord ontbreekt.', 'De zin heeft geen onderwerp.'], x: '⚠️ Uitzondering: de naamvallen zeggen al wie wat doet, dus de volgorde is vrij voor maat, rijm en nadruk. In zakelijke tekst geldt het als fout.', tag: 'tr-siir' },
      { t: 'cloze', s: 'Sevelim, sevilelim; dünya ___ kalmaz.', h: 'aan niemand', a: ['kimseye'], o: ['kimseye', 'herkese', 'kimsede'], nl: 'Laten we liefhebben en geliefd worden; de wereld blijft aan niemand.', tag: 'tr-siir' },
      { t: 'mc', q: 'Hoeveel lettergrepen heeft «Uzun ince bir yoldayım»?', o: ['8', '7', '11'], x: 'U-zun in-ce bir yol-da-yım: elke klinker is één lettergreep.', tag: 'tr-olcu' },
      { t: 'mc', q: 'Wat is de «durak»?', o: ['De vaste pauze in een versregel', 'Het laatste woord van de strofe', 'Het refrein'], tag: 'tr-olcu' },
      { t: 'mc', q: '«geliyorum / bakıyorum»: wat hebben deze regels?', o: ['Alleen redif, geen rijm', 'Rijk rijm', 'Half rijm zonder redif'], x: '⚠️ Uitzondering: dezelfde uitgang met dezelfde functie telt niet als rijm. Anders zou in het Turks bijna alles rijmen. Het rijm moet in de stam zitten.', tag: 'tr-olcu' },
      { t: 'cloze', s: 'Kafiye gövdede, ___ ekte.', h: 'de herhaalde uitgang', a: ['redif'], o: ['redif', 'durak', 'dize'], nl: 'Het rijm zit in de stam, de redif in de uitgang.', tag: 'tr-olcu' },
      { t: 'mc', q: 'Welke maat gebruikte de hofpoëzie (divan şiiri)?', o: ['aruz', 'hece ölçüsü', 'serbest ölçü'], tag: 'tr-olcu' },
      { t: 'mc', q: 'Wat is een «dörtlük»?', o: ['een strofe van vier regels', 'een gedicht van vier strofen', 'een regel van vier lettergrepen'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik ken dit gedicht uit mijn hoofd.', a: ['Bu şiiri ezbere biliyorum.', 'Bu şiiri ezbere bilirim.', 'Bu şiiri ezberden biliyorum.'], tag: 'tr-olcu' },
      { t: 'tr', nl: 'Elke regel heeft zeven lettergrepen.', a: ['Her dize yedi hece.', 'Her dizede yedi hece var.', 'Her dize yedi hecedir.', 'Her mısra yedi hece.'], tag: 'tr-olcu' },
      { t: 'order', s: 'Gelin tanış olalım, işi kolay kılalım.', nl: 'Kom, laten we elkaar leren kennen en het ons makkelijk maken.', tag: 'tr-siir' },
      { t: 'match', p: [['eyle-', 'et-'], ['kıl-', 'yap-'], ['ol', 'o'], ['kanı', 'hani'], ['dize', 'versregel'], ['ozan', 'volksdichter']], tag: 'tr-siir' }
    ],
    reading: {
      t: 'Yunus Emre’yi bugün okumak', type: 'Essay',
      p: [
        ['Yunus Emre on üçüncü yüzyılın sonunda Anadolu’da yaşadı. Hayatı hakkında kesin olarak bildiğimiz pek az şey var; birçok şehir mezarının kendi topraklarında olduğunu öne sürer.', 'Yunus Emre leefde aan het einde van de dertiende eeuw in Anatolië. Over zijn leven weten we maar heel weinig zeker; veel steden beweren dat zijn graf op hun grond ligt.'],
        ['O dönemde saray şairleri Farsça yazarken Yunus halkın konuştuğu Türkçeyi seçti. Hece ölçüsünü kullandı, kısa dizeler kurdu, herkesin bildiği sözcüklerle büyük sorular sordu.', 'Terwijl de hofdichters in die tijd in het Perzisch schreven, koos Yunus voor het Turks dat het volk sprak. Hij gebruikte de lettergreepmaat, maakte korte regels en stelde grote vragen met woorden die iedereen kende.'],
        ['Bu yüzden yedi yüz yıl sonra bile onu sözlüksüz okuyabiliyoruz. «Sevelim, sevilelim, dünya kimseye kalmaz» dizesini anlamak için ne Arapça ne Farsça bilmek gerekir.', 'Daarom kunnen we hem zelfs na zevenhonderd jaar zonder woordenboek lezen. Om de regel «Laten we liefhebben en geliefd worden, de wereld blijft aan niemand» te begrijpen, hoef je Arabisch noch Perzisch te kennen.'],
        ['Şiirlerinde sevgi, ölüm ve insanın kendini tanıması öne çıkar. «İlim kendin bilmektir» der; ona göre okumanın amacı insanın kendi içine bakmasıdır.', 'In zijn gedichten staan liefde, dood en zelfkennis centraal. «Kennis is jezelf kennen», zegt hij; volgens hem is het doel van leren dat de mens in zichzelf kijkt.']
      ],
      gl: [['öne sürmek', 'beweren / aanvoeren'], ['saray şairi', 'hofdichter'], ['sözlüksüz', 'zonder woordenboek'], ['öne çıkmak', 'op de voorgrond treden'], ['kendini tanımak', 'zichzelf kennen']],
      q: [
        { t: 'mc', q: 'Yunus Emre hangi dilde yazdı?', o: ['Halkın konuştuğu Türkçeyle', 'Farsçayla', 'Arapçayla'] },
        { t: 'mc', q: 'Onu bugün neden kolayca okuyabiliyoruz?', o: ['Herkesin bildiği sözcükleri kullandığı için', 'Şiirleri çevrildiği için', 'Çok kısa yaşadığı için'] },
        { t: 'mc', q: 'Yunus’a göre okumanın amacı nedir?', o: ['İnsanın kendini bilmesi', 'Zengin olmak', 'Saraya girmek'] }
      ]
    },
    say: [['Sevelim, sevilelim; dünya kimseye kalmaz.', 'Laten we liefhebben en geliefd worden; de wereld blijft aan niemand.'], ['Gelin tanış olalım, işi kolay kılalım.', 'Kom, laten we elkaar leren kennen en het ons makkelijk maken.'], ['Uzun ince bir yoldayım.', 'Ik ben op een lange, smalle weg.'], ['Bu şiiri ezbere biliyorum.', 'Ik ken dit gedicht uit mijn hoofd.']],
    task: { nl: 'Schrijf zelf een kwatrijn (dörtlük) van vier regels met elk zeven of acht lettergrepen. Tel de lettergrepen na, zorg dat minstens twee regels rijmen in de stam en gebruik als het lukt een redif. Schrijf er in twee zinnen bij welke maat en welk rijm je hebt gebruikt.', model: 'Sabah erken kalkarım / Denize doğru bakarım / Bir martı geçer önümden / İçimde mum yakarım. — Her dize yedi ya da sekiz hece. «Kalk-», «bak-» ve «yak-» gövdeleri «ak» sesiyle kafiyeli; «-arım» eki ise redif.' },
    scenario: { nl: 'Je bent op een poëzieavond in Eskişehir, de streek van Yunus Emre. Naast je zit Defne, lerares Turks, die graag over gedichten praat.', role: 'You are Defne, a Turkish literature teacher at a poetry evening in Eskişehir. Talk with the learner about Yunus Emre and folk poetry: explain old words when asked (kıl- = yap-, eyle- = et-, kamu = herkes), count syllables together (hece ölçüsü), explain the difference between kafiye and redif with examples, recite a line or two, and encourage the learner to compose a simple dörtlük and improve it together. Cultured, enthusiastic C2 Turkish.', goal: 'Bespreek een gedicht, vraag naar oude woorden en maak samen met Defne een eigen kwatrijn.' }
  });

  /* ───────────────────────── C2 · 4 ───────────────────────── */
  U({
    id: 'tr-c2-04', level: 'C2', icon: '😂', title: 'Ya tutarsa?', nl: 'Humor: moppen, woordspel en Nasreddin Hoca',
    goals: ['Een Turkse mop begrijpen en zelf vertellen', 'Woordspel met homoniemen doorzien: yüz, çay, dolu, gül', 'De vertelvorm van de mop gebruiken: adamın biri, -miş, demiş', 'Verwijzingen naar Nasreddin Hoca en Temel herkennen'],
    vocab: [
      ['fıkra', 'mop / anekdote'], ['kahkahaya boğulmak', 'in lachen uitbarsten'], ['espri yapmak', 'een grap maken'], ['şaka', 'grapje'], ['şakacı', 'grappenmaker'], ['mizah', 'humor'], ['mizahçı', 'humorist'],
      ['karikatür', 'spotprent / cartoon'], ['kahkaha', 'schaterlach'], ['kahkaha atmak', 'schaterlachen'], ['gülmekten kırılmak', 'krom liggen van het lachen'], ['kelime oyunu', 'woordspel'], ['cinas', 'woordspeling met gelijkluidende woorden'], ['eşsesli', 'gelijkluidend'],
      ['ince espri', 'fijnzinnige grap'], ['iğneleme', 'steek onder water'], ['hazırcevap', 'gevat'], ['kurnaz', 'sluw'], ['saf', 'naïef / zuiver'], ['şaşkın', 'verbouwereerd'], ['kürk', 'bontjas'],
      ['kazan', 'ketel'], ['maya', 'gist / zuursel'], ['göl', 'meer'], ['eşek', 'ezel'], ['kadı', 'rechter (Osmaans)'], ['tekerleme', 'rijmpje / tongbreker'], ['güldürü', 'klucht / komedie']
    ],
    grammar: [
      { t: 'Woordspel: homoniemen en bijna-homoniemen', es: 'Kelime oyunu: eşsesli sözcükler',
        html: `<p>Het Turks heeft veel korte woorden die er hetzelfde uitzien maar iets anders betekenen. Vaak is één ervan een <b>zelfstandig naamwoord</b> en de andere de <b>gebiedende wijs</b> van een werkwoord. Daar leven woordgrappen, raadsels en de volkspoëzie (<i>cinaslı mani</i>) van.</p>
<p>• <b>yüz</b> = honderd · gezicht · zwem! · vil!<br>• <b>çay</b> = thee · beek<br>• <b>dolu</b> = vol · hagel<br>• <b>gül</b> = roos · lach!<br>• <b>yaz</b> = zomer · schrijf!<br>• <b>at</b> = paard · gooi!<br>• <b>kır</b> = veld · breek! · grijs<br>• <b>bin</b> = duizend · stap op!<br>• <b>dil</b> = tong · taal<br>• <b>ben</b> = ik · moedervlek<br>• <b>el</b> = hand · vreemde, de anderen (<i>el âlem</i>)<br>• <b>ocak</b> = fornuis · januari · groeve<br>• <b>kara</b> = zwart · land (tegenover zee)<br>• <b>düş</b> = droom · val!</p>
<p>Een bekende mop: <i>— Garson, çayda sinek var! — Merak etmeyin efendim, <b>yüz</b>meyi bilir.</i> En het raadsel: <i>Hangi <b>yüz</b> yıkanmaz?</i> (Welke «yüz» wordt niet gewassen? Het getal honderd.)</p>
<p>Een tweede bron is de <b>letterlijke lezing van een uitdrukking</b>: <i>— Doktor, herkes beni görmezden geliyor. — Sıradaki!</i> Of het spel met een achtervoegsel: <i><b>Ya tutarsa?</b></i> (En als het nu eens aanslaat?) zei Nasreddin Hoca toen hij yoghurtzuursel in het meer roerde.</p>
<p><b>⚠️ Uitzondering:</b> <i>kar</i> (sneeuw) en <i>kâr</i> (winst), <i>hala</i> (tante van vaderskant) en <i>hâlâ</i> (nog steeds), <i>adet</i> (stuk, aantal) en <i>âdet</i> (gewoonte) zijn <b>geen homoniemen</b>: je spreekt ze verschillend uit. Toch zie je ze vaak zonder dakje geschreven. <b>Waarom?</b> Het dakje (<i>düzeltme işareti</i>) geeft in leenwoorden uit het Arabisch en Perzisch een lange klinker of een zachte, «dunne» k, g of l aan. Op een toetsenbord kost het moeite en veel mensen laten het weg; de lezer raadt het uit de zin. Grappen spelen daar graag mee: <i>Bu işte hiç <b>kar</b> yok.</i> (Hier zit geen sneeuw in / geen winst in.)</p>`,
        table: [['woord', 'betekenis 1', 'betekenis 2'], ['yüz', 'honderd / gezicht', 'zwem!'], ['gül', 'roos', 'lach!'], ['yaz', 'zomer', 'schrijf!'], ['at', 'paard', 'gooi!'], ['dolu', 'vol', 'hagel'], ['çay', 'thee', 'beek']],
        sum: 'Hangi yüz yıkanmaz?',
        ex: [['Merak etmeyin, yüzmeyi bilir.', 'Maakt u zich geen zorgen, hij kan zwemmen.'], ['Yüzüne gül, gül yüzlüm.', 'Lach, jij met je rozengezicht. (woordspel met gül)'], ['Dolu yağdı, bardaklar dolu.', 'Het heeft gehageld, de glazen zijn vol.'], ['Ya tutarsa?', 'En als het nu eens lukt?']] },
      { t: 'Een mop vertellen: adamın biri, -miş, demiş', es: 'Fıkra anlatmak: adamın biri, -miş, demiş',
        html: `<p>Een Turkse mop heeft een vaste vorm. Wie die beheerst, klinkt meteen als een verteller.</p>
<p><b>1. Het begin</b>: <i><b>Adamın biri</b> …</i> (Er was eens een man …) · <i><b>Bir gün</b> Temel …</i> · <i><b>Günlerden bir gün</b> Hoca …</i> · <i><b>Bir İngiliz, bir Fransız, bir de Türk</b> …</i></p>
<p><b>2. De tijd</b>: de vertelling staat in <b>-miş</b> (overlevering, zie C1 unit 6), de directe rede eindigt op <b>demiş</b>: <i>Hoca göle maya çal<b>mış</b>. Görenler «Ne yapıyorsun?» <b>demiş</b>ler.</i> Levendiger wordt het met de tegenwoordige tijd: <i>Temel doktora <b>gidiyor</b>, <b>diyor ki</b> …</i> Die twee wissel je niet halverwege zonder reden.</p>
<p><b>3. De opbouw</b>: korte zinnen, veel <i>demiş</i>, en verbindingswoorden als <i>derken</i> (en toen opeens), <i>bunun üzerine</i> (daarop), <i>tam o sırada</i> (precies op dat moment), <i>neyse</i> (enfin).</p>
<p><b>4. De clou</b> staat helemaal aan het eind, na een korte pauze, en is bijna altijd een antwoord in directe rede: <i>Hoca gülmüş: «<b>Ya tutarsa?</b>»</i> Na de clou komt niets meer.</p>
<p>Veel clous zijn spreekwoordelijk geworden. <i>Ye kürküm ye</i> (eet, mijn bontjas, eet) zeg je als iemand om zijn uiterlijk wordt geëerd. <i>Kazan doğurdu</i> (de ketel heeft gejongd) als iemand een onzinverhaal slikt zolang het hem uitkomt. <i>Parayı veren düdüğü çalar</i> (wie betaalt, blaast de fluit) als geld beslist.</p>
<p><b>⚠️ Uitzondering:</b> <i>adamın biri</i> betekent niet «een van de man» maar <b>«een of andere man»</b>, ook al staat <i>adam</i> in het enkelvoud met een genitief. <b>Waarom?</b> <i>Adamın</i> noemt hier de <b>soort</b>, niet één bepaalde man: «van het slag man, één». De genitief is dus partitief, zoals in <i>çocukların biri</i> (een van de kinderen), maar het enkelvoud maakt de figuur opzettelijk vaag en een beetje komisch: het doet er niet toe wie het was. Zo ook <i>kadının biri</i>, <i>köylünün biri</i> en afkeurend <i>herifin biri</i>.</p>`,
        table: [['onderdeel', 'vorm', 'voorbeeld'], ['begin', 'adamın biri · bir gün', 'Adamın biri doktora gitmiş.'], ['vertelling', '-miş', 'Hoca göle maya çalmış.'], ['directe rede', '… demiş', '«Ne yapıyorsun?» demişler.'], ['overgang', 'derken · bunun üzerine', 'Bunun üzerine Hoca gülmüş.'], ['clou', 'kort antwoord', '«Ya tutarsa?»']],
        sum: 'Adamın biri doktora gitmiş.',
        ex: [['Adamın biri doktora gitmiş.', 'Een man ging naar de dokter.'], ['Günlerden bir gün Hoca eşeğine ters binmiş.', 'Op een dag ging de Hoca achterstevoren op zijn ezel zitten.'], ['Bunun üzerine komşusu «Kazan doğurur mu hiç?» demiş.', 'Daarop zei zijn buurman: «Kan een ketel soms jongen?»'], ['Ye kürküm ye!', 'Eet, mijn bontjas, eet!']] }
    ],
    dialogue: {
      t: 'Een mop bij de thee', place: 'Trabzon 🇹🇷',
      lines: [
        ['İdris', 'Ilse, sana bir Temel fıkrası anlatayım mı? Karadeniz’e gelip de fıkra dinlemeden gidilmez.', 'Ilse, zal ik je een Temel-mop vertellen? Je kunt niet naar de Zwarte Zee komen en weggaan zonder een mop te horen.'],
        ['Ilse', 'Anlat tabii! Ama yavaş anlat, espriyi kaçırmayayım.', 'Vertel natuurlijk! Maar vertel langzaam, zodat ik de grap niet mis.'],
        ['İdris', 'Temel bir gün lokantaya gitmiş. Çay istemiş. Bakmış, çayın içinde sinek var.', 'Temel ging op een dag naar een restaurant. Hij bestelde thee. Hij keek, en er zat een vlieg in de thee.'],
        ['Ilse', 'Eee, sonra?', 'En, toen?'],
        ['İdris', 'Garsonu çağırmış: «Uşağum, bu sinek çayda ne yapayi?» Garson bakmış, bakmış: «Galiba sırtüstü yüziyi» demiş.', 'Hij riep de ober: «Jongen, wat doet deze vlieg in de thee?» De ober keek en keek: «Ik geloof dat hij op zijn rug zwemt», zei hij.'],
        ['Ilse', 'Hahaha! «Yüzmek» burada «zwemmen», değil mi? «Yüz» sayı da olabilir, surat da.', 'Hahaha! «Yüzmek» is hier «zwemmen», toch? «Yüz» kan ook een getal zijn, en een gezicht.'],
        ['İdris', 'Bravo, fıkrayı açıklayan yabancı ilk kez görüyorum! Hadi şimdi sen bir tane anlat.', 'Bravo, voor het eerst zie ik een buitenlander die de mop uitlegt! Kom, vertel jij er nu een.'],
        ['Ilse', 'Peki: Adamın biri Nasreddin Hoca’ya sormuş: «Göle neden maya çalıyorsun?» Hoca da «Ya tutarsa?» demiş.', 'Goed dan: een man vroeg aan Nasreddin Hoca: «Waarom roer je zuursel in het meer?» En de Hoca zei: «En als het nu eens aanslaat?»'],
        ['İdris', 'Helal olsun! Fıkrayı da Türk gibi anlattın: «adamın biri», «demiş» …', 'Petje af! En je vertelde de mop als een Turk: «adamın biri», «demiş» …']
      ],
      q: [
        { t: 'mc', q: 'Temel’in çayında ne vardı?', o: ['Sinek', 'Şeker', 'Limon'] },
        { t: 'mc', q: 'Garsona göre sinek ne yapıyordu?', o: ['Sırtüstü yüzüyordu', 'Çay içiyordu', 'Uyuyordu'] },
        { t: 'mc', q: 'İdris Ilse’yi neden övdü?', o: ['Fıkrayı Türk gibi anlattığı için', 'Çok güldüğü için', 'Çayı sevdiği için'] }
      ]
    },
    culture: { t: 'Nasreddin Hoca, Temel en de humorbladen', html: `<p><b>Nasreddin Hoca</b> zou in de dertiende eeuw in Akşehir hebben geleefd, waar elk jaar in juli een festival voor hem is. Hij is tegelijk wijze en dwaas: hij rijdt achterstevoren op zijn ezel, voert zijn bontjas soep omdat die en niet hijzelf werd uitgenodigd, en beantwoordt macht met een kwinkslag. Zijn verhalen worden verteld van de Balkan tot China.</p>
<p><b>Temel</b>, met zijn vriend <b>Dursun</b> en zijn vrouw <b>Fadime</b>, is de held van de moppen over de Zwarte Zeekust. De mensen daar vertellen ze zelf het liefst. De moppen spelen met de tongval (unit 2) en met een eigenzinnige logica.</p>
<p>📰 Turkije heeft een sterke traditie van <b>humorbladen</b>: <i>Gırgır</i> was in de jaren zeventig een van de meestverkochte ter wereld; <i>Penguen</i>, <i>Uykusuz</i> en <i>LeMan</i> volgden. Een cartoon zegt vaak wat een krant niet kan zeggen.</p>` },
    ex: [
      { t: 'mc', q: 'Welke betekenis heeft «yüz» NIET?', o: ['schrijf!', 'honderd', 'gezicht'], x: 'Yüz = honderd, gezicht, zwem!, vil! Schrijf! is yaz.', tag: 'tr-cinas' },
      { t: 'mc', q: '«Hangi yüz yıkanmaz?» Wat is het antwoord?', o: ['Het getal honderd', 'Een vuil gezicht', 'Een zwemmer'], tag: 'tr-cinas' },
      { t: 'cloze', s: 'Merak etmeyin efendim, ___ bilir.', h: 'zwemmen', a: ['yüzmeyi'], o: ['yüzmeyi', 'yüzünü', 'yüzlerce'], nl: 'Maakt u zich geen zorgen meneer, hij kan zwemmen.', tag: 'tr-cinas' },
      { t: 'mc', q: 'Wat kan «dolu» behalve «vol» nog meer betekenen?', o: ['hagel', 'beek', 'veld'], tag: 'tr-cinas' },
      { t: 'mc', q: 'Zijn «kar» (sneeuw) en «kâr» (winst) homoniemen?', o: ['Nee: de uitspraak verschilt, het dakje geeft dat aan.', 'Ja, ze klinken precies hetzelfde.', 'Ja, maar alleen in het meervoud.'], x: '⚠️ Uitzondering: het dakje geeft in leenwoorden een lange klinker of een zachte k, g of l aan. Veel mensen typen het niet; de lezer raadt het uit de zin.', tag: 'tr-cinas' },
      { t: 'mc', q: 'Welk woord betekent zowel «zomer» als «schrijf!»?', o: ['yaz', 'gül', 'kır'], tag: 'tr-cinas' },
      { t: 'cloze', s: 'Adamın ___ doktora gitmiş.', h: 'een of andere', a: ['biri'], o: ['biri', 'bir', 'birisine'], nl: 'Een man ging naar de dokter.', x: '⚠️ Uitzondering: adamın biri = «een of andere man». De genitief noemt de soort; het enkelvoud maakt de figuur opzettelijk vaag.', tag: 'tr-fikra' },
      { t: 'cloze', s: 'Görenler «Ne yapıyorsun Hoca?» ___.', h: 'zeiden ze (vertelvorm)', a: ['demişler', 'demiş'], o: ['demişler', 'diyecekler', 'desinler'], nl: 'Wie het zagen, zeiden: «Wat doe je, Hoca?»', tag: 'tr-fikra' },
      { t: 'mc', q: 'Waar staat de clou van een Turkse mop?', o: ['Helemaal aan het eind, meestal als kort antwoord', 'In de eerste zin', 'In het midden, gevolgd door uitleg'], tag: 'tr-fikra' },
      { t: 'mc', q: 'Wanneer zeg je «Ye kürküm ye»?', o: ['Als iemand om zijn uiterlijk wordt geëerd', 'Als het eten koud is', 'Als iemand te veel eet'], tag: 'tr-fikra' },
      { t: 'cloze', s: 'Hoca gülmüş: «Ya ___?»', h: 'als het aanslaat', a: ['tutarsa'], o: ['tutarsa', 'tutmuş', 'tutacak'], nl: 'De Hoca lachte: «En als het nu eens lukt?»', tag: 'tr-fikra' },
      { t: 'mc', q: 'Wat betekent «hazırcevap»?', o: ['gevat', 'naïef', 'verlegen'], tag: 'vocab' },
      { t: 'tr', nl: 'Zal ik je een mop vertellen?', a: ['Sana bir fıkra anlatayım mı?', 'Size bir fıkra anlatayım mı?', 'Bir fıkra anlatayım mı?'], tag: 'tr-fikra' },
      { t: 'tr', nl: 'We lagen krom van het lachen.', a: ['Gülmekten kırıldık.', 'Gülmekten öldük.', 'Gülmekten yerlere yattık.'], tag: 'tr-fikra' },
      { t: 'order', s: 'Günlerden bir gün Hoca eşeğine ters binmiş.', nl: 'Op een dag ging de Hoca achterstevoren op zijn ezel zitten.', tag: 'tr-fikra' },
      { t: 'match', p: [['gül', 'roos / lach!'], ['at', 'paard / gooi!'], ['bin', 'duizend / stap op!'], ['düş', 'droom / val!'], ['çay', 'thee / beek'], ['dil', 'tong / taal']], tag: 'tr-cinas' }
    ],
    reading: {
      t: 'Ye kürküm ye', type: 'Volksverhaal',
      p: [
        ['Nasreddin Hoca bir gün bir düğün yemeğine çağrılmış. Tarladan geldiği için üstünde eski, yamalı giysiler varmış. Kapıdakiler onu içeri almışlar ama kimse yüzüne bakmamış; sofranın en ucuna oturtmuşlar.', 'Nasreddin Hoca werd op een dag uitgenodigd voor een bruiloftsmaal. Omdat hij van het veld kwam, droeg hij oude, verstelde kleren. De mensen bij de deur lieten hem binnen, maar niemand keurde hem een blik waardig; ze zetten hem helemaal aan het uiteinde van de tafel.'],
        ['Hoca hiçbir şey dememiş, kalkıp evine gitmiş. En güzel kürkünü giymiş, düğün evine geri dönmüş. Bu sefer herkes ayağa kalkmış: «Buyurun Hocam, başköşeye buyurun!» demişler.', 'De Hoca zei niets, stond op en ging naar huis. Hij trok zijn mooiste bontjas aan en keerde terug naar het bruiloftshuis. Deze keer stond iedereen op: «Komt u verder, Hoca, neemt u plaats op de ereplaats!» zeiden ze.'],
        ['Önüne çorba koymuşlar. Hoca kürkünün yenini çorbaya batırmış: «Ye kürküm ye!» demiş. Herkes şaşırmış: «Hocam, ne yapıyorsun? Kürk çorba içer mi?»', 'Ze zetten soep voor hem neer. De Hoca doopte de mouw van zijn bontjas in de soep: «Eet, mijn bontjas, eet!» zei hij. Iedereen was verbaasd: «Hoca, wat doe je? Drinkt een bontjas soms soep?»'],
        ['Hoca gülmüş: «Demin eski giysilerimle geldim, yüzüme bakan olmadı. Kürkü giyince başköşeye oturttunuz. Demek ki bu ikram bana değil, kürke. Öyleyse yemeği de o yesin!»', 'De Hoca lachte: «Zojuist kwam ik in mijn oude kleren en niemand keek naar mij om. Toen ik de bontjas aantrok, zette u mij op de ereplaats. Dan is deze gastvrijheid dus niet voor mij, maar voor de bontjas. Laat die dan ook het eten opeten!»']
      ],
      gl: [['yamalı', 'versteld / met lappen'], ['başköşe', 'ereplaats'], ['yen', 'mouw'], ['batırmak', 'dopen / onderdompelen'], ['ikram', 'onthaal / traktatie'], ['demin', 'zojuist']],
      q: [
        { t: 'mc', q: 'Hoca ilk gelişinde neden başköşeye oturtulmadı?', o: ['Eski giysiler giydiği için', 'Geç kaldığı için', 'Davetli olmadığı için'] },
        { t: 'mc', q: 'Hoca kürkünün yenini neye batırdı?', o: ['Çorbaya', 'Çaya', 'Suya'] },
        { t: 'mc', q: 'Hoca’ya göre ikram kime yapılıyordu?', o: ['Kürke', 'Kendisine', 'Damada'] }
      ]
    },
    say: [['Sana bir fıkra anlatayım mı?', 'Zal ik je een mop vertellen?'], ['Adamın biri doktora gitmiş.', 'Een man ging naar de dokter.'], ['Ya tutarsa?', 'En als het nu eens lukt?'], ['Gülmekten kırıldık.', 'We lagen krom van het lachen.']],
    task: { nl: 'Vertel een mop of grappig verhaal in zes tot acht zinnen in de Turkse vertelvorm. Begin met «Adamın biri», «Bir gün» of «Günlerden bir gün», vertel in -miş, zet de directe rede tussen aanhalingstekens met «demiş», gebruik één overgangswoord (bunun üzerine, tam o sırada, derken) en zet de clou helemaal aan het eind.', model: 'Günlerden bir gün Hoca komşusundan bir kazan ödünç almış. Ertesi gün kazanı geri verirken içine küçük bir tencere koymuş. Komşusu «Bu ne?» diye sormuş. Hoca «Kazanın doğurdu» demiş. Komşu sevinmiş, tencereyi almış. Bir hafta sonra Hoca kazanı yine istemiş ama bu sefer geri getirmemiş. Bunun üzerine komşu kapıya gelmiş: «Kazanım nerede?» Hoca üzgün bir yüzle «Başın sağ olsun, kazanın öldü» demiş. Komşu bağırmış: «Kazan ölür mü hiç?» Hoca gülmüş: «Doğurduğuna inandın da öldüğüne neden inanmıyorsun?»' },
    scenario: { nl: 'Je zit in een theehuis in Trabzon met İdris, een echte Karadenizli die de ene mop na de andere vertelt en verwacht dat jij er ook een vertelt.', role: 'You are İdris, a cheerful man from Trabzon in a tea house, who loves telling Temel jokes and Nasreddin Hoca stories. Tell a short joke in proper fıkra form (Temel bir gün …, -miş, demiş), with a little Black Sea flavour in Temel\'s lines (uşağum, yapayi) but otherwise clear Turkish. If the learner does not get the pun, explain the wordplay (e.g. yüz = hundred / face / swim). Then insist that the learner tells a joke too, and react: laugh, correct the storytelling form gently (adamın biri, demiş, punchline at the end). Warm, playful C2 Turkish.', goal: 'Begrijp de woordgrap, leg hem uit en vertel zelf een mop in de Turkse vertelvorm.' }
  });
})(window.SPT);
