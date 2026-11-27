/* Turks voor Nederlandstaligen — niveau B2, units 3–4 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── B2 · 3 ───────────────────────── */
  U({
    id: 'tr-b2-03', level: 'B2', icon: '🔍', title: 'Evde olmalı', nl: 'Vermoeden en zeker weten: het zal wel, het kan niet',
    goals: ['Zeggen hoe zeker je van iets bent', 'Een vermoeden uiten met olmalı, olabilir en -dir', 'Zeggen dat iets onmogelijk is met olamaz', 'Speculeren over wat er gebeurd is met -miş olmalı'],
    vocab: [
      ['varsaymak', 'veronderstellen'], ['şüphelenmek', 'vermoeden / verdenken'], ['şüpheli', 'verdachte / verdacht'], ['ipucu', 'aanwijzing'], ['kanıt', 'bewijs'], ['tanık', 'getuige'], ['iz', 'spoor'],
      ['parmak izi', 'vingerafdruk'], ['dolandırıcı', 'oplichter'], ['hırsızlık', 'diefstal'], ['soygun', 'overval'], ['suç', 'misdaad'], ['suçlu', 'schuldig / dader'], ['masum', 'onschuldig'],
      ['dedektif', 'detective'], ['soruşturma', 'onderzoek'], ['ifade vermek', 'een verklaring afleggen'], ['itiraf etmek', 'bekennen'], ['inkâr etmek', 'ontkennen'], ['yalan söylemek', 'liegen'],
      ['sahte', 'vals / nep'], ['bilmece', 'raadsel'], ['gizemli', 'mysterieus'], ['belli', 'duidelijk'], ['anlaşılan', 'kennelijk'], ['büyük ihtimalle', 'hoogstwaarschijnlijk'], ['muhtemelen', 'vermoedelijk'],
      ['şüphesiz', 'ongetwijfeld'], ['besbelli', 'overduidelijk'], ['belki de', 'misschien wel']
    ],
    grammar: [
      { t: 'Het moet wel, het kan: olmalı en olabilir', es: 'Çıkarım: -meli, -ebilir',
        html: `<p>Je kent <b>-meli</b> als «moeten» en <b>-ebilir</b> als «kunnen» (A2). Dezelfde vormen gebruik je om te zeggen <b>hoe zeker</b> je van iets bent:</p>
<p>• <b>-meli</b> = het <b>moet wel</b> zo zijn (je trekt een conclusie): <i>Işıklar yanıyor, evde ol<b>malı</b>.</i> (De lichten branden, hij moet wel thuis zijn.) · <i>Çok yorgun ol<b>malısın</b>.</i> (Je zult wel erg moe zijn.)<br>• <b>-ebilir</b> = het <b>kan</b> zo zijn: <i>Evde ol<b>abilir</b>.</i> (Hij is misschien thuis.) · <i>Yağmur yağ<b>abilir</b>.</i> (Het kan gaan regenen.)<br>• <b>-meyebilir</b> = het kan <b>ook niet</b> zo zijn: <i>Gel<b>meyebilir</b>.</i> (Het kan zijn dat hij niet komt.)</p>
<p>Met een werkwoord dat <b>nu bezig</b> is, komt <i>olmalı</i> achter <b>-iyor</b>: <i>Uyu<b>yor olmalı</b>.</i> (Hij zal wel slapen.) · <i>Şaka yap<b>ıyor olmalısın</b>!</i> (Je maakt zeker een grapje!)</p>
<p><b>Let op het verschil</b> tussen twee ontkenningen: <i>gel<b>meyebilir</b></i> (misschien komt hij niet) ↔ <i>gel<b>emeyebilir</b></i> (misschien <b>kan</b> hij niet komen).</p>
<p><b>⚠️ Uitzondering:</b> het omgekeerde van <i>Evde olmalı</i> (hij moet wel thuis zijn) is <b>niet</b> <s>Evde olmamalı</s>. Dat betekent «hij hoort niet thuis te zijn» (een regel, geen conclusie). «Hij kan niet thuis zijn» is <b>Evde olamaz</b>, met <b>-emez</b>. <b>Waarom?</b> Wie iets uitsluit, zegt dat het <b>onmogelijk</b> is, en onmogelijkheid is in het Turks altijd -eme- («niet kunnen»). -memeli is alleen blijven staan voor wat niet <b>hoort</b>. Vandaar ook de uitroep <i>Olamaz!</i> (Dat kan niet waar zijn!)</p>`,
        table: [['zekerheid', 'Turks', 'Nederlands'], ['95%', 'Evde olmalı.', 'Hij moet wel thuis zijn.'], ['50%', 'Evde olabilir.', 'Hij is misschien thuis.'], ['50% niet', 'Evde olmayabilir.', 'Hij is misschien niet thuis.'], ['0% ⚠️', 'Evde olamaz.', 'Hij kan niet thuis zijn.']],
        sum: 'Evde olmalı ↔ Evde olamaz.',
        ex: [['Bu çanta çok pahalı olmalı.', 'Deze tas moet wel heel duur zijn.'], ['Hırsız pencereden girmiş olabilir.', 'De dief kan door het raam binnengekomen zijn.'], ['Bu doğru olamaz!', 'Dit kan niet waar zijn!'], ['Toplantıya yetişemeyebilirim.', 'Het kan zijn dat ik de vergadering niet haal.']] },
      { t: 'Wat er gebeurd moet zijn: -miş olmalı', es: 'Geçmişe yönelik çıkarım',
        html: `<p>Voor een conclusie over het <b>verleden</b> zet je <b>-miş</b> vóór <i>olmalı / olabilir / olamaz</i>:</p>
<p><i>Anahtarı evde unut<b>muş olmalıyım</b>.</i> (Ik moet de sleutel thuis vergeten zijn.) · <i>Biri kapıyı açık bırak<b>mış olmalı</b>.</i> (Iemand moet de deur open hebben laten staan.) · <i>Yanlış anla<b>mış olabilirim</b>.</i> (Ik kan het verkeerd begrepen hebben.) · <i>Bunu o yap<b>mış olamaz</b>.</i> (Hij kan dit niet gedaan hebben.)</p>
<p>De -miş is hier weer het voltooid deelwoord uit unit 1: «vergeten zijnde moet ik». De persoon staat op <i>olmalı</i>.</p>
<p>Zonder hulpwerkwoord kan het ook, met een bijwoord van zekerheid en de <b>brede tijd</b> of <b>-miştir</b>:<br><b>galiba</b> (geloof ik) · <b>herhalde</b> (vast wel) · <b>muhtemelen</b> (vermoedelijk) · <b>belki</b> (misschien) · <b>kesinlikle</b> (beslist)<br><i><b>Herhalde</b> unut<b>muştur</b>.</i> (Hij is het vast vergeten.) · <i><b>Galiba</b> yanlış numarayı aradım.</i> (Ik geloof dat ik het verkeerde nummer heb gebeld.)</p>`,
        table: [['Turks', 'Nederlands'], ['unutmuş olmalı', 'hij moet het vergeten zijn'], ['unutmuş olabilir', 'hij kan het vergeten zijn'], ['unutmuş olamaz', 'hij kan het niet vergeten zijn'], ['herhalde unutmuştur', 'hij is het vast vergeten']],
        sum: 'Anahtarı evde unutmuş olmalıyım.',
        ex: [['Gece yağmur yağmış olmalı, yerler ıslak.', 'Het moet vannacht geregend hebben, de grond is nat.'], ['Trafikte kalmış olabilirler.', 'Ze kunnen in het verkeer vast zijn komen te zitten.'], ['Bu kadar parayı tek başına harcamış olamaz.', 'Hij kan zoveel geld niet in zijn eentje uitgegeven hebben.']] },
      { t: '-dir: hij zal wel…', es: 'Tahmin bildiren -dir',
        html: `<p>Het achtervoegsel <b>-dir</b> (dır, dir, dur, dür, na een stemloze medeklinker tır…) achter een naamwoord of een tijd betekent in <b>spreektaal</b>: «dat neem ik aan, maar ik heb het niet gecontroleerd».</p>
<p><i>Ali evde<b>dir</b>.</i> (Ali zal wel thuis zijn.) · <i>Yorgunsun<b>dur</b>.</i> (Je zult wel moe zijn.) · <i>Şimdi uyuyor<b>dur</b>.</i> (Hij zal nu wel slapen.) · <i>Unutmuş<b>tur</b>.</i> (Hij zal het wel vergeten zijn.) · <i>Yarın gelir<b>ler</b>.</i> / <i>Geleceklerdir.</i></p>
<p>Vaak met <i>herhalde</i>, <i>mutlaka</i> of <i>belki</i>: <i><b>Mutlaka</b> bir açıklaması var<b>dır</b>.</i> (Er is vast een verklaring voor.)</p>
<p>In vragen met <b>acaba</b> (ik vraag me af) klinkt het hardop denken door: <i><b>Acaba</b> kim yaptı?</i> (Wie zou het gedaan hebben?) · <i>Saat kaç<b>tır</b> acaba?</i></p>
<p>In geschreven, officieel Turks betekent dezelfde -dir juist iets <b>stelligs</b>; dat komt in unit 9. Uit de situatie blijkt altijd welke van de twee bedoeld is.</p>`,
        table: [['Turks', 'Nederlands'], ['Evdedir.', 'Hij zal wel thuis zijn.'], ['Uyuyordur.', 'Hij zal wel slapen.'], ['Unutmuştur.', 'Hij zal het wel vergeten zijn.'], ['Acaba kim?', 'Wie zou het zijn?']],
        sum: 'Herhalde unutmuştur.',
        ex: [['Merak etme, yoldadır.', 'Maak je geen zorgen, hij zal wel onderweg zijn.'], ['Acaba neden aramadı?', 'Waarom zou hij niet gebeld hebben?'], ['Bunu sen de biliyorsundur.', 'Dat weet jij vast ook wel.']] }
    ],
    dialogue: {
      t: 'De verdwenen ketting', place: 'İstanbul 🇹🇷',
      lines: [
        ['Komiser', 'Kolye bu kasada mıydı?', 'Lag de ketting in deze kluis?'],
        ['Femke', 'Evet. Dün akşam buradaydı, bu sabah baktım, yok.', 'Ja. Gisteravond lag hij hier, vanochtend keek ik en hij was weg.'],
        ['Komiser', 'Kasa kırılmamış. Şifreyi bilen biri açmış olmalı.', 'De kluis is niet opengebroken. Iemand die de code kent, moet hem hebben geopend.'],
        ['Femke', 'Şifreyi sadece ben ve eşim biliyoruz. O yapmış olamaz, dün gece Ankara’daydı.', 'Alleen mijn man en ik kennen de code. Hij kan het niet gedaan hebben, hij was vannacht in Ankara.'],
        ['Komiser', 'Evde başka kim vardı?', 'Wie was er nog meer in huis?'],
        ['Femke', 'Temizlikçi kadın sabah geldi. Ama o yirmi yıldır bizimle; hırsız olamaz.', 'De schoonmaakster kwam ’s ochtends. Maar ze is al twintig jaar bij ons; ze kan geen dief zijn.'],
        ['Komiser', 'Belki de şifreyi bir yere yazmışsınızdır?', 'Misschien hebt u de code ergens opgeschreven?'],
        ['Femke', 'Hmm… Telefonuma not almış olabilirim. Yeğenim dün telefonumla oynuyordu.', 'Hm… Ik kan hem in mijn telefoon genoteerd hebben. Mijn neefje speelde gisteren met mijn telefoon.'],
        ['Komiser', 'Yeğeniniz kaç yaşında?', 'Hoe oud is uw neefje?'],
        ['Femke', 'Yedi. Durun… Geçen hafta «korsan hazinesi» oynuyordu. Kolyeyi bahçeye gömmüş olmalı!', 'Zeven. Wacht… Vorige week speelde hij «piratenschat». Hij moet de ketting in de tuin begraven hebben!']
      ],
      q: [
        { t: 'mc', q: 'Komiser’e göre kasayı kim açmış olmalı?', o: ['Şifreyi bilen biri', 'Kasayı kıran bir hırsız', 'Komşu'] },
        { t: 'mc', q: 'Femke’nin eşi neden yapmış olamaz?', o: ['Dün gece Ankara’daydı', 'Şifreyi bilmiyor', 'Kolyeyi sevmiyor'] },
        { t: 'mc', q: 'Kolye muhtemelen nerede?', o: ['Bahçede', 'Ankara’da', 'Temizlikçi kadında'] }
      ]
    },
    culture: { t: 'Polisiye, Behzat Ç. en koffiedik', html: `<p>Turkije is dol op de <b>polisiye</b> (misdaadverhaal). De norse commissaris <b>Behzat Ç.</b> uit Ankara, eerst een romanfiguur en daarna een cultserie, is voor een hele generatie hét gezicht van de Turkse politieman. In de boekwinkel vind je daarnaast de detectives van Ahmet Ümit, die zich in de oude wijken van İstanbul afspelen.</p>
<p>Speculeren is ook een huiselijk tijdverdrijf: <b>kahve falı</b>, het lezen van koffiedik. Na de Turkse koffie keer je het kopje om op het schoteltje, laat het afkoelen en «leest» een vriendin de figuren: <i>Bir yol görünüyor… Yakında bir haber alacaksın.</i> (Ik zie een weg… Je krijgt binnenkort bericht.)</p>
<p>☕ Iedereen kent het gezegde erbij: <i>Fala inanma, falsız da kalma.</i> (Geloof niet in waarzeggerij, maar laat het ook niet achterwege.)</p>` },
    ex: [
      { t: 'cloze', s: 'Işıklar yanıyor, evde ol___.', h: 'moet wel', a: ['malı'], o: ['malı', 'amaz', 'sa'], nl: 'De lichten branden, hij moet wel thuis zijn.', tag: 'tr-vermoed' },
      { t: 'cloze', s: 'Yarın yağmur yağ___.', h: 'het kan', a: ['abilir'], o: ['abilir', 'malı', 'amaz'], nl: 'Het kan morgen regenen.', tag: 'tr-vermoed' },
      { t: 'mc', q: 'Hoe zeg je «Hij kan niet thuis zijn» (je sluit het uit)?', o: ['Evde olamaz.', 'Evde olmamalı.', 'Evde olmayabilir.'], x: '⚠️ Uitzondering: het omgekeerde van olmalı is olamaz. Uitsluiten is zeggen dat iets onmogelijk is, en dat is altijd -eme-. Olmamalı betekent «hij hoort er niet te zijn».', tag: 'tr-vermoed' },
      { t: 'mc', q: 'Wat betekent «Evde olmamalı»?', o: ['Hij hoort niet thuis te zijn.', 'Hij kan niet thuis zijn.', 'Hij is misschien niet thuis.'], x: '⚠️ Uitzondering: -memeli is een regel of advies, geen conclusie.', tag: 'tr-vermoed' },
      { t: 'mc', q: 'Wat betekent «Gelemeyebilir»?', o: ['Misschien kan hij niet komen.', 'Misschien komt hij niet.', 'Hij kan niet komen.'], tag: 'tr-vermoed' },
      { t: 'cloze', s: 'Anahtarı evde unut___ olmalıyım.', h: 'ge-', a: ['muş'], o: ['muş', 'tu', 'acak'], nl: 'Ik moet de sleutel thuis vergeten zijn.', tag: 'tr-vermoed' },
      { t: 'cloze', s: 'Bunu o yapmış ___.', h: 'kan niet', a: ['olamaz'], o: ['olamaz', 'olmalı', 'olabilir'], nl: 'Hij kan dit niet gedaan hebben.', tag: 'tr-vermoed' },
      { t: 'cloze', s: 'Şaka yapıyor ___!', h: 'jij moet wel', a: ['olmalısın'], o: ['olmalısın', 'olamazsın', 'olursun'], nl: 'Je maakt zeker een grapje!', tag: 'tr-vermoed' },
      { t: 'cloze', s: 'Merak etme, yolda___.', h: 'zal wel', a: ['dır'], o: ['dır', 'ymış', 'ydı'], nl: 'Maak je geen zorgen, hij zal wel onderweg zijn.', tag: 'tr-dir' },
      { t: 'cloze', s: 'Herhalde unutmuş___.', h: 'zal wel', a: ['tur'], o: ['tur', 'dur', 'muş'], nl: 'Hij is het vast vergeten.', x: 'Na de stemloze ş wordt -dur → -tur.', tag: 'tr-dir' },
      { t: 'cloze', s: '___ kim yaptı?', h: 'ik vraag me af', a: ['Acaba'], o: ['Acaba', 'Galiba', 'Mutlaka'], nl: 'Wie zou het gedaan hebben?', tag: 'tr-vermoed' },
      { t: 'mc', q: 'Welk woord is het zekerst?', o: ['kesinlikle', 'galiba', 'belki'], tag: 'vocab' },
      { t: 'mc', q: 'Wat is een «tanık»?', o: ['een getuige', 'een verdachte', 'een bewijs'], tag: 'vocab' },
      { t: 'tr', nl: 'Dit kan niet waar zijn!', a: ['Bu doğru olamaz!', 'Bu gerçek olamaz!'], tag: 'tr-vermoed' },
      { t: 'tr', nl: 'Je zult wel erg moe zijn.', a: ['Çok yorgun olmalısın.', 'Çok yorgunsundur.'], tag: 'tr-vermoed' },
      { t: 'tr', nl: 'Ik kan het verkeerd begrepen hebben.', a: ['Yanlış anlamış olabilirim.'], tag: 'tr-vermoed' },
      { t: 'order', s: 'Şifreyi bilen biri kasayı açmış olmalı.', nl: 'Iemand die de code kent, moet de kluis hebben geopend.', tag: 'tr-vermoed' },
      { t: 'match', p: [['kanıt', 'bewijs'], ['ipucu', 'aanwijzing'], ['hırsız', 'dief'], ['suç', 'misdaad'], ['sır', 'geheim'], ['masum', 'onschuldig']], tag: 'vocab' }
    ],
    reading: {
      t: 'Kayıp tablo', type: 'Kort misdaadverhaal',
      p: [
        ['Pazartesi sabahı müze müdürü salona girdiğinde duvar boştu. Ünlü tablo ortada yoktu. Alarm çalmamıştı; kapılar da kilitliydi.', 'Toen de museumdirecteur maandagochtend de zaal binnenkwam, was de muur leeg. Het beroemde schilderij was nergens te bekennen. Het alarm was niet afgegaan en de deuren zaten op slot.'],
        ['Komiser Nevin etrafa baktı. «Hırsız içeriden biri olmalı» dedi. «Alarmı kapatmayı bilen biri. Dışarıdan girmiş olamaz, pencerelerde hiç iz yok.»', 'Commissaris Nevin keek rond. „De dief moet iemand van binnen zijn,” zei ze. „Iemand die weet hoe je het alarm uitzet. Hij kan niet van buiten zijn gekomen, er zijn geen sporen bij de ramen.”'],
        ['Gece bekçisi ifade verdi: «Hiçbir şey duymadım. Uyuyakalmış olabilirim, ama sadece on dakika.» Çayının içinde uyku ilacı bulundu.', 'De nachtwaker legde een verklaring af: „Ik heb niets gehoord. Ik kan in slaap gevallen zijn, maar hooguit tien minuten.” In zijn thee werd een slaapmiddel gevonden.'],
        ['Komiser gülümsedi. «Çayı kim getirdi?» Bekçi düşündü: «Restoratör Selim Bey. Her gece getirir.» Nevin not aldı. Selim Bey o sabah işe gelmemişti. Herhalde çoktan sınırı geçmişti.', 'De commissaris glimlachte. „Wie heeft de thee gebracht?” De waker dacht na: „Restaurateur Selim Bey. Die brengt hij elke nacht.” Nevin maakte een aantekening. Selim Bey was die ochtend niet op zijn werk verschenen. Hij was vast allang de grens over.']
      ],
      gl: [['tablo', 'schilderij'], ['ortada yok', 'nergens te bekennen'], ['kilitli', 'op slot'], ['gece bekçisi', 'nachtwaker'], ['uyuyakalmak', 'in slaap vallen'], ['sınır', 'grens']],
      q: [
        { t: 'mc', q: 'Komiser’e göre hırsız neden dışarıdan girmiş olamaz?', o: ['Pencerelerde hiç iz yok', 'Kapılar açıktı', 'Alarm çaldı'] },
        { t: 'mc', q: 'Bekçinin çayında ne bulundu?', o: ['Uyku ilacı', 'Bir anahtar', 'Parmak izi'] },
        { t: 'mc', q: 'Şüpheli kim?', o: ['Restoratör Selim Bey', 'Müze müdürü', 'Gece bekçisi'] }
      ]
    },
    say: [['Evde olmalı, ışıklar yanıyor.', 'Hij moet wel thuis zijn, de lichten branden.'], ['Bu doğru olamaz!', 'Dit kan niet waar zijn!'], ['Yanlış anlamış olabilirim.', 'Ik kan het verkeerd begrepen hebben.'], ['Herhalde unutmuştur.', 'Hij is het vast vergeten.']],
    task: { nl: 'Je komt thuis en de voordeur staat open, maar er is niets weg. Schrijf 6 zinnen waarin je speculeert wat er gebeurd is. Gebruik olmalı, olabilir, olamaz, één keer -miş olmalı, één keer -dir en een bijwoord als galiba of herhalde.', model: 'Eve geldim, kapı açıktı. Hırsız girmiş olamaz, çünkü hiçbir şey eksik değil. Sabah acele ettim; kapıyı kapatmayı unutmuş olmalıyım. Belki de komşum içeri girmiştir, onda anahtar var. Kedi de ortada yok; korkup bahçeye kaçmış olabilir. Herhalde akşam geri gelir. Yine de bu gece kapıyı iki kez kilitleyeceğim!' },
    scenario: { nl: 'Er is iets kostbaars verdwenen uit het huis waar je logeert. Commissaris Nevin ondervraagt je en denkt hardop mee.', role: 'You are Komiser Nevin, a sharp but friendly police inspector in İstanbul investigating a missing necklace. Ask the learner factual questions (Dün gece neredeydiniz? Evde başka kim vardı?), speculate with olmalı / olabilir / olamaz / -miş olmalı, challenge their theories (Emin misiniz? O yapmış olamaz, çünkü…), and ask for their own theory. Use B2 Turkish with formal siz.', goal: 'Beantwoord haar vragen en geef je eigen theorie met olmalı, olabilir en olamaz.' }
  });

  /* ───────────────────────── B2 · 4 ───────────────────────── */
  U({
    id: 'tr-b2-04', level: 'B2', icon: '🧭', title: 'Buraya geleli on yıl oldu', nl: 'Een leven tussen twee landen: zodra, sinds, totdat',
    goals: ['Over migratie, heimwee en thuis praten', 'Zodra zeggen met -ir -mez', 'Sinds zeggen met -eli en -diğinden beri', 'Totdat en naarmate zeggen met -ene kadar en -dikçe'],
    vocab: [
      ['göç', 'migratie'], ['göç etmek', 'migreren / verhuizen (ver)'], ['göçmen', 'migrant'], ['gurbet', 'den vreemde'], ['gurbetçi', 'Turk in het buitenland'], ['memleket', 'geboortestreek / thuisland'], ['vatan', 'vaderland'],
      ['özlem', 'verlangen / heimwee'], ['hasret', 'gemis'], ['burnunda tütmek', 'hevig missen (lett. in je neus roken)'], ['alışmak', 'wennen'], ['uyum sağlamak', 'zich aanpassen'], ['yerli', 'autochtoon / inheems'], ['kök', 'wortel'],
      ['kuşak', 'generatie (van een familie)'], ['ana dili', 'moedertaal'], ['çift dilli', 'tweetalig'], ['kimlik duygusu', 'identiteitsgevoel'], ['önyargı', 'vooroordeel'], ['ayrımcılık', 'discriminatie'],
      ['vatandaşlık', 'staatsburgerschap'], ['oturma izni', 'verblijfsvergunning'], ['kök salmak', 'wortel schieten'], ['geri dönmek', 'terugkeren'], ['kalıcı', 'blijvend'], ['geçici', 'tijdelijk'],
      ['aidiyet', 'het ergens bij horen'], ['yuva', 'nest / thuis'], ['sıla', 'thuis waar je naar verlangt'], ['izin', 'verlof / zomervakantie in Turkije']
    ],
    grammar: [
      { t: 'Zodra: -ir -mez', es: '-ir -mez',
        html: `<p>«Zodra» is in het Turks één werkwoord dat je <b>twee keer</b> zegt: eerst in de <b>brede tijd</b>, dan in de <b>ontkennende brede tijd</b>, allebei zonder persoon: <i>gel-<b>ir</b> gel-<b>mez</b></i> (zodra hij komt), <i>bit-<b>er</b> bit-<b>mez</b></i>, <i>oku-<b>r</b> oku-<b>maz</b></i>.</p>
<p><i>Eve gel<b>ir</b> gel<b>mez</b> seni ararım.</i> (Zodra ik thuiskom, bel ik je.) · <i>Okul bit<b>er</b> bit<b>mez</b> Almanya’ya gitti.</i> (Zodra de school afgelopen was, ging hij naar Duitsland.)</p>
<p>Wie het doet, blijkt uit de hoofdzin. Is het iemand anders, dan noem je die los: <i><b>Babam</b> gid<b>er</b> git<b>mez</b> annem ağlamaya başladı.</i></p>
<p>Het verschil met <b>-ince</b> (A2): -ince is «wanneer, als», -ir -mez is «<b>onmiddellijk</b> daarna, geen seconde later».</p>
<p><b>⚠️ Uitzondering:</b> het eerste deel is de brede tijd, en die heeft zijn eigen uitzonderingen (A2 unit 9). Eenlettergrepige stammen krijgen <b>-er</b>: <i>bit<b>er</b> bitmez</i>, <i>gid<b>er</b> gitmez</i>, <i>aç<b>ar</b> açmaz</i>. Maar dertien veelgebruikte krijgen <b>-ir</b>: <i>gel<b>ir</b> gelmez</i>, <i>al<b>ır</b> almaz</i>, <i>gör<b>ür</b> görmez</i>, <i>ol<b>ur</b> olmaz</i>, <i>var<b>ır</b> varmaz</i>, <i>ver<b>ir</b> vermez</i>, <i>bil<b>ir</b> bilmez</i>, <i>bul<b>ur</b> bulmaz</i>, <i>dur<b>ur</b> durmaz</i>, <i>kal<b>ır</b> kalmaz</i>. <b>Waarom?</b> Deze stammen eindigen bijna allemaal op <b>l, r of n</b> en hadden vroeger een extra klinker aan het eind (<i>geli-</i>, <i>alı-</i>). Die is weggevallen, maar in de brede tijd hoor je hem nog. Omdat het de meest gebruikte werkwoorden zijn, is de oude vorm nooit gelijkgetrokken.</p>`,
        table: [['stam', 'zodra…', 'regel'], ['bit-', 'biter bitmez', 'één lettergreep: -er'], ['git-', 'gider gitmez', 'één lettergreep: -er'], ['başla-', 'başlar başlamaz', 'klinker: -r'], ['öğren-', 'öğrenir öğrenmez', 'meer lettergrepen: -ir'], ['gel- ⚠️', 'gelir gelmez', 'uitzondering: -ir'], ['gör- ⚠️', 'görür görmez', 'uitzondering: -ir']],
        sum: 'Eve gelir gelmez seni ararım.',
        ex: [['Haberi duyar duymaz yola çıktım.', 'Zodra ik het nieuws hoorde, ging ik op weg.'], ['Onu görür görmez tanıdım.', 'Zodra ik hem zag, herkende ik hem.'], ['Emekli olur olmaz memlekete döneceğim.', 'Zodra ik met pensioen ga, keer ik terug naar mijn geboortestreek.']] },
      { t: 'Sinds: -eli en -diğinden beri', es: '-eli, -diğinden beri',
        html: `<p>Met <b>-eli / -alı</b> achter de stam (na een klinker met y) zeg je <b>sinds wanneer</b> iets zo is. Er komt geen persoon en geen tijd bij: <i>gel-<b>eli</b></i> (sinds ik/jij/hij kwam), <i>başla-<b>yalı</b></i>, <i>evlen-<b>eli</b></i>.</p>
<p>De vaste zin is <b>-eli + tijdsduur + oldu / oluyor</b>: <i>Buraya gel<b>eli</b> on yıl <b>oldu</b>.</i> (Het is tien jaar geleden dat ik hier kwam.) · <i>Onu görme<b>yeli</b> çok <b>oldu</b>.</i> (Ik heb hem lang niet gezien.) · <i>Türkçe öğrenmeye başla<b>yalı</b> iki yıl <b>oluyor</b>.</i></p>
<p>Wil je de <b>persoon</b> erbij, of praat je formeler, gebruik dan <b>-diğ + bezit + -den beri</b>: <i>Buraya gel<b>diğimden beri</b> çok şey değişti.</i> (Sinds ik hier ben gekomen, is er veel veranderd.) · <i>Evlen<b>diklerinden beri</b> İzmir’de yaşıyorlar.</i></p>
<p>Achter een <b>tijdstip</b> staat <b>-den beri</b> (sinds), achter een <b>tijdsduur</b> <b>-dir</b> (al … lang): <i>2015’<b>ten beri</b> buradayım.</i> ↔ <i>On yıl<b>dır</b> buradayım.</i> Het werkwoord staat in de <b>tegenwoordige tijd</b>, want het duurt nog: <i>Üç yıldır Türkçe öğren<b>iyorum</b>.</i> (Ik leer al drie jaar Turks.)</p>`,
        table: [['Turks', 'Nederlands'], ['geleli on yıl oldu', 'het is tien jaar geleden dat … kwam'], ['geldiğimden beri', 'sinds ik gekomen ben'], ['2015’ten beri', 'sinds 2015'], ['on yıldır', 'al tien jaar']],
        sum: 'Buraya geleli on yıl oldu.',
        ex: [['Annemi görmeyeli altı ay oldu.', 'Het is zes maanden geleden dat ik mijn moeder zag.'], ['Hollanda’ya taşındığımdan beri bisiklete biniyorum.', 'Sinds ik naar Nederland ben verhuisd, fiets ik.'], ['Kırk yıldır gurbetteyiz.', 'We zijn al veertig jaar in den vreemde.']] },
      { t: 'Totdat, zolang en naarmate', es: '-ene kadar, -dikçe, -diği sürece',
        html: `<p><b>-ene kadar / -ana kadar</b> = <b>totdat</b>: <i>Sen gel<b>ene kadar</b> bekleyeceğim.</i> (Ik wacht tot je komt.) · <i>Emekli ol<b>ana kadar</b> Almanya’da çalıştı.</i> Formeler is <b>-inceye kadar</b>: <i>İş bul<b>uncaya kadar</b> amcamda kaldım.</i></p>
<p><b>-dikçe</b> ken je als «naarmate» (B1 unit 5). Het betekent ook <b>«telkens wanneer»</b> en <b>«zolang»</b>: <i>Memleketi düşün<b>dükçe</b> içim sızlıyor.</i> (Telkens als ik aan thuis denk, doet het pijn.) · <i>Yaşa<b>dıkça</b> öğreniyorsun.</i> (Zolang je leeft, leer je.) Vaste vormen: <i>git<b>tikçe</b></i> (steeds meer, geleidelijk) en <i>ol<b>dukça</b></i> (tamelijk).</p>
<p><b>-diği sürece</b> = <b>zolang (als)</b>, met de bezitsuitgang voor de persoon: <i>Sen yanımda ol<b>duğun sürece</b> korkmam.</i> (Zolang jij bij me bent, ben ik niet bang.)</p>
<p><b>-diğinde</b> = <b>toen / wanneer</b> (preciezer dan -ince, met persoon): <i>İlk gel<b>diğimde</b> tek kelime Hollandaca bilmiyordum.</i> (Toen ik hier net was, sprak ik geen woord Nederlands.)</p>
<p><b>-mektense</b> = <b>in plaats van / liever dan</b>: <i>Geri dön<b>mektense</b> burada kalmayı seçti.</i></p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['-ene kadar', 'totdat', 'gelene kadar'], ['-dikçe', 'telkens als / naarmate', 'düşündükçe'], ['-diği sürece', 'zolang', 'olduğun sürece'], ['-diğinde', 'toen / wanneer', 'geldiğimde'], ['-mektense', 'liever dan', 'dönmektense']],
        sum: 'Sen gelene kadar bekleyeceğim.',
        ex: [['Çocuklar büyüyene kadar burada kalacağız.', 'We blijven hier tot de kinderen groot zijn.'], ['Yaşlandıkça memleketimi daha çok özlüyorum.', 'Naarmate ik ouder word, mis ik mijn geboortestreek meer.'], ['İlk geldiğimizde her şey çok yabancıydı.', 'Toen we hier net waren, was alles heel vreemd.']] }
    ],
    dialogue: {
      t: 'Hier of daar?', place: 'Rotterdam 🇳🇱',
      lines: [
        ['Sanne', 'Hatice Teyze, Hollanda’ya geleli kaç yıl oldu?', 'Tante Hatice, hoeveel jaar is het geleden dat u naar Nederland kwam?'],
        ['Hatice', 'Kırk beş yıl, kızım. 1979’da geldim. Evlenir evlenmez eşimin yanına geldim.', 'Vijfenveertig jaar, meisje. Ik kwam in 1979. Zodra ik getrouwd was, kwam ik naar mijn man toe.'],
        ['Sanne', 'İlk geldiğinizde zor oldu mu?', 'Was het moeilijk toen u hier net was?'],
        ['Hatice', 'Çok. Tek kelime Hollandaca bilmiyordum. Çocuklar okula başlayana kadar evden pek çıkmadım.', 'Heel erg. Ik sprak geen woord Nederlands. Tot de kinderen naar school gingen, kwam ik nauwelijks buiten.'],
        ['Sanne', 'Sonra alıştınız mı?', 'Bent u daarna gewend?'],
        ['Hatice', 'Yavaş yavaş. Komşularla konuştukça dilim açıldı. Ama memleketi düşündükçe hâlâ içim sızlar.', 'Langzaamaan. Naarmate ik met de buren praatte, kwam de taal los. Maar telkens als ik aan thuis denk, doet het nog steeds pijn.'],
        ['Sanne', 'Emekli olunca geri dönmeyi düşündünüz mü?', 'Hebt u eraan gedacht terug te gaan toen u met pensioen ging?'],
        ['Hatice', 'Eşim emekli olur olmaz dönmek istedi. Ama torunlar burada. Onlar burada olduğu sürece ben de buradayım.', 'Mijn man wilde terug zodra hij met pensioen ging. Maar de kleinkinderen zijn hier. Zolang zij hier zijn, ben ik hier ook.'],
        ['Sanne', 'Yani artık eviniz burası mı?', 'Dus uw thuis is nu hier?'],
        ['Hatice', 'İkisi de evim. Yazın Kayseri’ye gidince «Almancı» diyorlar, burada «Türk». Ben de iki bavullu bir insanım, diyorum.', 'Allebei zijn ze mijn thuis. Als ik ’s zomers naar Kayseri ga, zeggen ze «Almancı», hier «Turk». Dan zeg ik: ik ben een mens met twee koffers.']
      ],
      q: [
        { t: 'mc', q: 'Hatice Teyze Hollanda’ya ne zaman geldi?', o: ['Evlenir evlenmez, 1979’da', 'Emekli olur olmaz', 'Çocukken'] },
        { t: 'mc', q: 'Hatice Teyze ne zamana kadar evden pek çıkmadı?', o: ['Çocuklar okula başlayana kadar', 'Eşi emekli olana kadar', 'Torunlar doğana kadar'] },
        { t: 'mc', q: 'Hatice Teyze neden geri dönmüyor?', o: ['Torunları Hollanda’da olduğu için', 'Kayseri’yi sevmediği için', 'Eşi istemediği için'] }
      ]
    },
    culture: { t: 'Gurbet, Almancı en de zomer van de «izin»', html: `<p>In de jaren zestig en zeventig vertrokken honderdduizenden Turken als <b>misafir işçi</b> (gastarbeider) naar Duitsland, Nederland en België. Het woord dat erbij hoort is <b>gurbet</b>: ver van huis zijn, met alle heimwee die daarbij komt. Er bestaat een hele muziekstijl over, de <i>gurbet türküleri</i>.</p>
<p>Wie terugkomt op vakantie, wordt in Turkije nog altijd <b>Almancı</b> («Duitslander») genoemd, ook als hij uit Rotterdam komt. De zomerse reis naar het dorp van herkomst heet simpelweg <b>izin</b> (verlof): de auto volgeladen, drie dagen rijden via de Balkan, en in augustus de bruiloften.</p>
<p>🧳 De derde en vierde generatie noemt zichzelf steeds vaker <b>Avrupalı Türk</b> (Europese Turk). Hun Turks heeft eigen woorden gekregen: wie <i>«Termin yaptım»</i> of <i>«Afspraak yaptım»</i> zegt, heeft de taal uit twee koffers gepakt.</p>` },
    ex: [
      { t: 'cloze', s: 'Okul biter bit___ Almanya’ya gitti.', h: 'zodra', a: ['mez'], o: ['mez', 'ince', 'ene'], nl: 'Zodra de school afgelopen was, ging hij naar Duitsland.', tag: 'tr-zodra' },
      { t: 'mc', q: 'Hoe zeg je «zodra ik thuiskom»?', o: ['eve gelir gelmez', 'eve geler gelmez', 'eve geliyor gelmez'], x: '⚠️ Uitzondering: gel- hoort bij de dertien eenlettergrepige stammen met -ir in de brede tijd (gelir, alır, görür). Die hadden vroeger een extra klinker aan het eind.', tag: 'tr-zodra' },
      { t: 'cloze', s: 'Onu gör___ görmez tanıdım.', h: 'zodra', a: ['ür'], o: ['ür', 'er', 'üyor'], nl: 'Zodra ik hem zag, herkende ik hem.', x: '⚠️ Uitzondering: gör- krijgt -ür, niet -er, net als gelir en alır.', tag: 'tr-zodra' },
      { t: 'cloze', s: 'Haberi duy___ duymaz yola çıktım.', h: 'zodra', a: ['ar'], o: ['ar', 'ur', 'unca'], nl: 'Zodra ik het nieuws hoorde, ging ik op weg.', x: 'Gewone eenlettergrepige stam: -ar.', tag: 'tr-zodra' },
      { t: 'cloze', s: 'Buraya gel___ on yıl oldu.', h: 'sinds', a: ['eli'], o: ['eli', 'ince', 'ene'], nl: 'Het is tien jaar geleden dat ik hier kwam.', tag: 'tr-beri' },
      { t: 'cloze', s: 'Buraya geldiğim___ beri çok şey değişti.', a: ['den'], o: ['den', 'e', 'de'], nl: 'Sinds ik hier ben gekomen, is er veel veranderd.', tag: 'tr-beri' },
      { t: 'mc', q: 'Welke zin is goed: «Ik leer al drie jaar Turks.»', o: ['Üç yıldır Türkçe öğreniyorum.', 'Üç yıldan beri Türkçe öğrendim.', 'Üç yıl önce Türkçe öğreniyorum.'], x: 'Tijdsduur + -dir, en het werkwoord in de tegenwoordige tijd, want het duurt nog.', tag: 'tr-beri' },
      { t: 'cloze', s: '2015’ten ___ buradayım.', h: 'sinds', a: ['beri'], o: ['beri', 'önce', 'kadar'], nl: 'Ik ben hier sinds 2015.', tag: 'tr-beri' },
      { t: 'cloze', s: 'Sen gel___ kadar bekleyeceğim.', h: 'totdat', a: ['ene'], o: ['ene', 'ince', 'eli'], nl: 'Ik wacht tot je komt.', tag: 'tr-zodra' },
      { t: 'cloze', s: 'Memleketi düşün___ içim sızlıyor.', h: 'telkens als', a: ['dükçe'], o: ['dükçe', 'ene', 'eli'], nl: 'Telkens als ik aan thuis denk, doet het pijn.', tag: 'tr-zodra' },
      { t: 'cloze', s: 'Sen yanımda olduğun ___ korkmam.', h: 'zolang', a: ['sürece'], o: ['sürece', 'kadar', 'beri'], nl: 'Zolang jij bij me bent, ben ik niet bang.', tag: 'tr-zodra' },
      { t: 'mc', q: 'Wat betekent «gurbet»?', o: ['ver van huis, in den vreemde', 'het vaderland', 'een vakantiehuis'], tag: 'vocab' },
      { t: 'mc', q: 'Wat betekent «gittikçe»?', o: ['steeds meer, geleidelijk', 'zodra hij gaat', 'totdat hij gaat'], tag: 'tr-zodra' },
      { t: 'tr', nl: 'Zodra ik thuiskom, bel ik je.', a: ['Eve gelir gelmez seni ararım.', 'Eve gelir gelmez seni arayacağım.', 'Eve varır varmaz seni ararım.'], tag: 'tr-zodra' },
      { t: 'tr', nl: 'Ik heb hem lang niet gezien.', a: ['Onu görmeyeli çok oldu.', 'Onu uzun zamandır görmedim.', 'Onu uzun zamandır görmüyorum.'], tag: 'tr-beri' },
      { t: 'tr', nl: 'We zijn hier al veertig jaar.', a: ['Kırk yıldır buradayız.'], tag: 'tr-beri' },
      { t: 'order', s: 'Çocuklar büyüyene kadar burada kalmaya karar verdik.', nl: 'We hebben besloten hier te blijven tot de kinderen groot zijn.', tag: 'tr-zodra' },
      { t: 'match', p: [['göç', 'migratie'], ['memleket', 'geboortestreek'], ['özlem', 'heimwee'], ['kök', 'wortel'], ['önyargı', 'vooroordeel'], ['yuva', 'thuis']], tag: 'vocab' }
    ],
    reading: {
      t: 'İki bavullu insanlar', type: 'Essay',
      p: [
        ['Dedem 1964’te Kayseri’den Rotterdam’a geldi. Niyeti birkaç yıl çalışıp para biriktirir biriktirmez geri dönmekti. O «birkaç yıl» altmış yıl oldu.', 'Mijn opa kwam in 1964 van Kayseri naar Rotterdam. Zijn bedoeling was een paar jaar te werken en terug te gaan zodra hij geld had gespaard. Die «paar jaar» zijn er zestig geworden.'],
        ['Babam burada doğdu, ama evde Türkçe konuşuldu. Okula başlayana kadar tek kelime Hollandaca bilmiyordu. Büyüdükçe iki dil arasında gidip gelmeyi öğrendi.', 'Mijn vader is hier geboren, maar thuis werd Turks gesproken. Tot hij naar school ging, sprak hij geen woord Nederlands. Naarmate hij opgroeide, leerde hij heen en weer te gaan tussen twee talen.'],
        ['Ben üçüncü kuşağım. Kendimi bildim bileli iki yere de aitim: Feyenoord maçında Hollandalıyım, anneannemin sofrasında Türk. Bana «Nerelisin?» diye sorulduğunda hâlâ bir an duruyorum.', 'Ik ben de derde generatie. Zolang ik me kan herinneren hoor ik bij twee plekken: bij een wedstrijd van Feyenoord ben ik Nederlander, aan de tafel van mijn oma Turk. Als me gevraagd wordt «Waar kom je vandaan?», aarzel ik nog steeds even.'],
        ['Eskiden bu soruya üzülürdüm. Şimdi şöyle cevap veriyorum: «İkisi de.» Dedem iki bavulla gelmişti. Ben o bavulları taşımaya devam ettiğim sürece, hiçbir yerde yabancı değilim.', 'Vroeger werd ik verdrietig van die vraag. Nu antwoord ik: «Allebei.» Mijn opa was met twee koffers gekomen. Zolang ik die koffers blijf dragen, ben ik nergens een vreemde.']
      ],
      gl: [['niyet', 'bedoeling'], ['kendimi bildim bileli', 'zolang ik me kan herinneren'], ['ait olmak', 'horen bij'], ['sofra', 'gedekte tafel'], ['bir an', 'een ogenblik']],
      q: [
        { t: 'mc', q: 'Dedenin niyeti neydi?', o: ['Para biriktirir biriktirmez geri dönmek', 'Hollanda’da sonsuza kadar kalmak', 'Rotterdam’da okumak'] },
        { t: 'mc', q: 'Baba ne zamana kadar Hollandaca bilmiyordu?', o: ['Okula başlayana kadar', 'Evlenene kadar', 'Hiç öğrenmedi'] },
        { t: 'mc', q: 'Yazar «Nerelisin?» sorusuna şimdi ne cevap veriyor?', o: ['«İkisi de.»', '«Hollandalıyım.»', '«Bilmiyorum.»'] }
      ]
    },
    say: [['Eve gelir gelmez seni ararım.', 'Zodra ik thuiskom, bel ik je.'], ['Buraya geleli on yıl oldu.', 'Het is tien jaar geleden dat ik hier kwam.'], ['Sen gelene kadar bekleyeceğim.', 'Ik wacht tot je komt.'], ['Üç yıldır Türkçe öğreniyorum.', 'Ik leer al drie jaar Turks.']],
    task: { nl: 'Schrijf 6 zinnen over een grote verandering in je leven (verhuizen, een nieuwe baan, een nieuw land). Gebruik -ir -mez, -eli … oldu, -diğimden beri, -ene kadar, -dikçe en -diğimde.', model: 'Üniversiteyi bitirir bitirmez Utrecht’e taşındım. Buraya geleli sekiz yıl oldu. İlk geldiğimde kimseyi tanımıyordum. İş bulana kadar bir kafede çalıştım. Burada yaşadığımdan beri bisikletsiz bir hayat düşünemiyorum. Yıllar geçtikçe bu şehri daha çok seviyorum.' },
    scenario: { nl: 'Je praat met Hatice Teyze, die al vijfenveertig jaar in Rotterdam woont, over wonen tussen twee landen. Zij wil ook jouw verhaal horen.', role: 'You are Hatice Teyze, a warm 68-year-old woman from Kayseri who has lived in Rotterdam for 45 years. Tell about arriving (Evlenir evlenmez geldim), the hard first years, homesickness (Memleketi düşündükçe…), and why you stay. Ask the learner how long they have lived where they live, whether they ever moved, why they learn Turkish and since when (Türkçe öğrenmeye başlayalı ne kadar oldu?). Use B2 Turkish, warm and a little nostalgic.', goal: 'Vraag naar haar verhaal en vertel het jouwe met -eli, -diğimden beri en -ir -mez.' }
  });
})(window.SPT);
