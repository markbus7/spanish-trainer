/* Turks voor Nederlandstaligen — niveau B2, units 9–10 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── B2 · 9 ───────────────────────── */
  U({
    id: 'tr-b2-09', level: 'B2', icon: '🏛️', title: 'Gereğini arz ederim', nl: 'Formeel Turks: loketten, formulieren en brieven',
    goals: ['Officiële brieven en mededelingen begrijpen', 'De formele vormen -mektedir, -miştir en -ecektir herkennen en gebruiken', 'Formele woorden kiezen in plaats van alledaagse', 'Een verzoekschrift (dilekçe) schrijven'],
    vocab: [
      ['dilekçe', 'verzoekschrift'], ['belge', 'document'], ['evrak', 'papieren / stukken'], ['imza', 'handtekening'], ['imzalamak', 'ondertekenen'], ['mühür', 'stempel / zegel'], ['onay', 'goedkeuring'],
      ['resmî', 'officieel'], ['kurum', 'instelling'], ['belediye', 'gemeente'], ['valilik', 'gouverneurschap / provinciehuis'], ['nüfus müdürlüğü', 'bevolkingsregister'], ['göç idaresi', 'immigratiedienst'], ['ikamet izni', 'verblijfsvergunning (officieel)'],
      ['harç', 'leges'], ['süre', 'termijn / duur'], ['geçerli', 'geldig'], ['geçersiz', 'ongeldig'], ['yenilemek', 'vernieuwen'], ['uzatmak', 'verlengen'], ['talep etmek', 'verzoeken / eisen'],
      ['sunmak', 'indienen / aanbieden'], ['ek', 'bijlage'], ['ilgili', 'betreffend / betrokken'], ['uyarınca', 'krachtens / overeenkomstig'], ['yürürlük', 'werking / kracht'], ['yetki', 'bevoegdheid'],
      ['işlem', 'handeling / procedure'], ['memur', 'ambtenaar'], ['gişe', 'loket'], ['sıra numarası', 'volgnummer']
    ],
    grammar: [
      { t: 'De formele tijden: -mektedir, -miştir, -ecektir', es: 'Resmî dil: -mektedir, -miştir',
        html: `<p>In brieven van instanties, nieuwsberichten, wetten en wetenschappelijke teksten krijgt het werkwoord een extra <b>-dir</b>. Dat maakt de zin onpersoonlijk en stellig:</p>
<p>• <b>-mekte + -dir</b> in plaats van -iyor: <i>Başvurunuz incelen<b>mektedir</b>.</i> (Uw aanvraag wordt onderzocht.) · <i>Ülkemizde 85 milyon kişi yaşa<b>maktadır</b>.</i><br>• <b>-miş + -tir</b> in plaats van -di: <i>Talebiniz kabul edil<b>miştir</b>.</i> (Uw verzoek is ingewilligd.) · <i>Toplantı ertelen<b>miştir</b>.</i><br>• <b>-ecek + -tir</b>: <i>Sonuç tarafınıza bildiril<b>ecektir</b>.</i> (De uitslag zal u worden meegedeeld.)<br>• <b>-dir</b> achter een naamwoord: <i>Sigara içmek yasak<b>tır</b>.</i> · <i>Başvuru süresi otuz gün<b>dür</b>.</i></p>
<p>Meestal staat het werkwoord in de <b>lijdende vorm</b> (B1 unit 7), zodat niemand als dader genoemd wordt. <b>Gerekmektedir</b> (het is vereist) en <b>bulunmaktadır</b> (er bevindt zich, er is) zijn de deftige broers van <i>lazım</i> en <i>var</i>.</p>
<p><b>⚠️ Uitzondering:</b> in unit 3 betekende <b>-dir</b> «het zal wel»: <i>Ali evde<b>dir</b>.</i> (Ali zal wel thuis zijn: een gok.) Hier betekent precies hetzelfde achtervoegsel het omgekeerde: <i>Giriş yasak<b>tır</b>.</i> (Toegang is verboden: een vaststaand feit.) <b>Waarom?</b> -dir zegt eigenlijk maar één ding: «dit zeg ik <b>niet uit eigen waarneming</b>». Staat dat op een bord of in een wet, dan lees je: dit geldt algemeen, los van de spreker. Zegt een persoon het in een gewoon gesprek over iets wat hij op dat moment niet kan zien, dan hoor je: hij neemt het aan. De situatie beslist dus: geschreven en officieel is het zeker, gesproken en persoonlijk is het een vermoeden.</p>`,
        table: [['gewoon', 'formeel', 'betekenis'], ['inceleniyor', 'incelenmektedir', 'wordt onderzocht'], ['kabul edildi', 'kabul edilmiştir', 'is ingewilligd'], ['bildirilecek', 'bildirilecektir', 'zal worden meegedeeld'], ['lazım', 'gerekmektedir', 'is vereist'], ['var', 'bulunmaktadır', 'er is / bevindt zich'], ['yasak', 'yasaktır', 'is verboden']],
        sum: 'Başvurunuz incelenmektedir.',
        ex: [['İkamet izniniz bir yıl uzatılmıştır.', 'Uw verblijfsvergunning is met een jaar verlengd.'], ['Eksik belgelerin on gün içinde sunulması gerekmektedir.', 'De ontbrekende documenten dienen binnen tien dagen te worden ingediend.'], ['Binada asansör bulunmamaktadır.', 'In het gebouw is geen lift aanwezig.'], ['Bu belge altı ay geçerlidir.', 'Dit document is zes maanden geldig.']] },
      { t: 'Deftige woorden voor gewone dingen', es: 'Resmî sözcükler',
        html: `<p>Formeel Turks heeft voor bijna elk alledaags woord een deftige tegenhanger, vaak een combinatie met <b>etmek</b> of <b>bulunmak</b>. Je hoeft ze niet allemaal zelf te gebruiken, maar wel te herkennen:</p>
<p><i>istemek</i> → <b>talep etmek</b>, <b>rica etmek</b> · <i>söylemek</i> → <b>belirtmek</b>, <b>ifade etmek</b>, <b>beyan etmek</b> · <i>vermek</i> → <b>sunmak</b>, <b>teslim etmek</b>, <b>ibraz etmek</b> (overleggen) · <i>almak</i> → <b>temin etmek</b> · <i>yapmak</i> → <b>gerçekleştirmek</b> · <i>başlamak</i> → <b>başlatılmak</b> · <i>bitmek</i> → <b>sona ermek</b> · <i>gitmek</i> → <b>müracaat etmek</b> (zich wenden tot).</p>
<p>Ook de achterzetsels worden langer: <i>için</i> → <b>amacıyla</b>, <b>üzere</b> · <i>hakkında</i> → <b>ilişkin</b>, <b>dair</b>, <b>konusunda</b> · <i>-e göre</i> → <b>uyarınca</b>, <b>gereğince</b> · <i>yüzünden</i> → <b>nedeniyle</b>, <b>dolayısıyla</b> · <i>ile</i> → <b>ile birlikte</b> · <i>sonra</i> → <b>-i müteakip</b>, <b>akabinde</b>.</p>
<p>En de voornaamwoorden: <b>tarafınıza</b> (aan u), <b>tarafımca</b> (door mij), <b>tarafımıza</b> (aan ons), <b>kendisi</b> (hij/zij, beleefd), <b>söz konusu</b> (de desbetreffende), <b>aşağıdaki</b> (onderstaand), <b>yukarıda belirtilen</b> (bovengenoemd).</p>
<p><i>Kira sözleşmesi <b>uyarınca</b> depozito <b>tarafınıza</b> iade <b>edilecektir</b>.</i> (Overeenkomstig het huurcontract zal de borg aan u worden terugbetaald.)</p>`,
        table: [['gewoon', 'formeel'], ['istemek', 'talep etmek'], ['söylemek', 'belirtmek · beyan etmek'], ['vermek', 'sunmak · ibraz etmek'], ['için', 'amacıyla · üzere'], ['hakkında', 'ilişkin · dair'], ['-e göre', 'uyarınca · gereğince']],
        sum: 'Talep etmek, sunmak, uyarınca.',
        ex: [['Pasaportunuzu gişede ibraz etmeniz gerekmektedir.', 'U dient uw paspoort aan het loket te overleggen.'], ['İkamet iznine ilişkin başvurunuz alınmıştır.', 'Uw aanvraag betreffende de verblijfsvergunning is ontvangen.'], ['Bakım çalışmaları nedeniyle su kesilecektir.', 'Wegens onderhoudswerkzaamheden wordt het water afgesloten.']] },
      { t: 'Een dilekçe schrijven', es: 'Dilekçe yazmak',
        html: `<p>Wie in Turkije iets van een instantie wil, schrijft een <b>dilekçe</b>: een verzoekschrift van één pagina met een vaste vorm.</p>
<p>1. <b>Bovenaan in het midden</b> de instantie, in hoofdletters en in de <b>-e-vorm</b>: <i>İZMİR GÖÇ İDARESİ MÜDÜRLÜĞÜ<b>NE</b></i><br>2. <b>De kern</b>, kort: wie je bent, wat er speelt, wat je vraagt. Geen aanhef als «Geachte»; die staat al in de adressering.<br>3. <b>De slotzin</b>, altijd dezelfde: <i>Gereğini saygılarımla <b>arz ederim</b>.</i> (Ik verzoek u beleefd het nodige te doen.)<br>4. <b>Rechtsonder</b> datum, naam en handtekening; <b>linksonder</b> adres en <i>Ekler:</i> (bijlagen).</p>
<p>Het verschil tussen <b>arz etmek</b> en <b>rica etmek</b> is hiërarchie: <i>arz</i> gebruik je <b>omhoog</b>, tegen een hogere instantie of een overheid; <i>rica</i> tegen een gelijke of lagere. Een burger schrijft dus altijd <i>arz ederim</i>; een directeur schrijft aan zijn afdeling <i>rica ederim</i>.</p>
<p>In een zakelijke e-mail is de toon lichter: <i><b>Sayın</b> Yılmaz,</i> … <i>Bilgilerinize sunarım.</i> (Ter informatie.) · <i>İlginiz için teşekkür ederim.</i> · <i><b>Saygılarımla,</b></i> (Hoogachtend,) of <i>İyi çalışmalar dilerim.</i></p>`,
        table: [['onderdeel', 'voorbeeld'], ['adressering', '… MÜDÜRLÜĞÜNE'], ['verzoek', '…-mesini talep ediyorum'], ['slotzin', 'Gereğini saygılarımla arz ederim.'], ['aanhef (e-mail)', 'Sayın Yılmaz,'], ['afsluiting', 'Saygılarımla,']],
        sum: 'Gereğini saygılarımla arz ederim.',
        ex: [['İkamet iznimin uzatılmasını talep ediyorum.', 'Ik verzoek om verlenging van mijn verblijfsvergunning.'], ['Gerekli belgeler ekte sunulmuştur.', 'De vereiste documenten zijn bijgevoegd.'], ['Bilgilerinize sunar, iyi çalışmalar dilerim.', 'Ter informatie, met vriendelijke groet.']] }
    ],
    dialogue: {
      t: 'Aan het loket', place: 'İzmir 🇹🇷',
      lines: [
        ['Memur', 'Buyurun, sıra numaranız?', 'Zegt u het maar, uw volgnummer?'],
        ['Ilse', 'Yüz kırk iki. İkamet iznimi uzatmak için başvurmuştum. Durumunu öğrenmek istiyorum.', 'Honderdtweeënveertig. Ik had een aanvraag ingediend om mijn verblijfsvergunning te verlengen. Ik wil weten hoe het ermee staat.'],
        ['Memur', 'Pasaportunuzu alabilir miyim? … Başvurunuz incelenmektedir. Ancak bir belgeniz eksik görünüyor.', 'Mag ik uw paspoort? … Uw aanvraag wordt onderzocht. Maar er lijkt één document te ontbreken.'],
        ['Ilse', 'Hangisi? Hepsini teslim ettiğimi sanıyordum.', 'Welk? Ik dacht dat ik alles had ingeleverd.'],
        ['Memur', 'Sağlık sigortanızın süresi dolmuş. Geçerli bir sigorta belgesi sunmanız gerekiyor.', 'Uw zorgverzekering is verlopen. U moet een geldig verzekeringsbewijs indienen.'],
        ['Ilse', 'Anladım. Onu ne zamana kadar getirmem lazım?', 'Ik begrijp het. Tot wanneer moet ik dat brengen?'],
        ['Memur', 'Otuz gün içinde. Aksi takdirde başvurunuz geçersiz sayılacaktır.', 'Binnen dertig dagen. Anders wordt uw aanvraag als ongeldig beschouwd.'],
        ['Ilse', 'Peki, belgeyi internetten yükleyebilir miyim, yoksa buraya mı gelmeliyim?', 'En kan ik het document via internet uploaden, of moet ik hierheen komen?'],
        ['Memur', 'E-ikamet sistemine yükleyebilirsiniz. Sonuç tarafınıza SMS ile bildirilecektir.', 'U kunt het uploaden in het e-ikamet-systeem. De uitslag wordt u per sms meegedeeld.'],
        ['Ilse', 'Çok teşekkür ederim. Kolay gelsin.', 'Heel hartelijk dank. Succes met uw werk.']
      ],
      q: [
        { t: 'mc', q: 'Ilse ne için başvurmuştu?', o: ['İkamet iznini uzatmak için', 'Vatandaşlık almak için', 'Ehliyet almak için'] },
        { t: 'mc', q: 'Hangi belge eksik?', o: ['Geçerli bir sigorta belgesi', 'Pasaport', 'Kira sözleşmesi'] },
        { t: 'mc', q: 'Belgeyi ne kadar sürede sunması gerekiyor?', o: ['Otuz gün içinde', 'Bugün', 'Bir yıl içinde'] }
      ]
    },
    culture: { t: 'e-Devlet, de arzuhalci en het theeglas op het bureau', html: `<p>Turkije heeft een van de meest gedigitaliseerde overheden van Europa. Via <b>e-Devlet</b> («e-Staat») regel je met één wachtwoord bijna alles: uittreksels, belastingen, je diploma, zelfs je stamboom tot in de negentiende eeuw. Een afspraak bij het ziekenhuis maak je met de app <b>MHRS</b>.</p>
<p>Toch leeft het papier voort. Voor veel zaken blijft een ondertekende <b>dilekçe</b> nodig, en voor de rechtbank zitten nog altijd <b>arzuhalciler</b>: mannen met een typemachine of laptop op een klaptafeltje, die voor een klein bedrag je verzoekschrift in het juiste ambtelijke Turks opstellen.</p>
<p>🫖 Aan het loket helpt geduld en een <i>Kolay gelsin</i>. Het antwoord dat je niet wilt horen is <b>Sistem yok</b> (het systeem ligt eruit) of <b>Yarın gelin</b> (komt u morgen terug).</p>` },
    ex: [
      { t: 'cloze', s: 'Başvurunuz incelen___.', h: 'formeel: wordt', a: ['mektedir'], o: ['mektedir', 'iyor', 'miştir'], nl: 'Uw aanvraag wordt onderzocht.', tag: 'tr-formeel' },
      { t: 'cloze', s: 'Talebiniz kabul edil___.', h: 'formeel: is ge-', a: ['miştir'], o: ['miştir', 'mektedir', 'ecektir'], nl: 'Uw verzoek is ingewilligd.', tag: 'tr-formeel' },
      { t: 'cloze', s: 'Sonuç tarafınıza bildiril___.', h: 'formeel: zal worden', a: ['ecektir'], o: ['ecektir', 'miştir', 'mektedir'], nl: 'De uitslag zal u worden meegedeeld.', tag: 'tr-formeel' },
      { t: 'mc', q: 'Op een bord staat «Giriş yasaktır». Wat betekent -tır hier?', o: ['Het is een vaststaande regel.', 'Het zal wel verboden zijn.', 'Het was verboden.'], x: '⚠️ Uitzondering: dezelfde -dir die in een gesprek «het zal wel» betekent, is in officiële tekst juist stellig. -dir zegt alleen «niet uit eigen waarneming»; de situatie beslist.', tag: 'tr-dir' },
      { t: 'mc', q: 'Je vriend zegt: «Ali evdedir.» Wat bedoelt hij?', o: ['Ali zal wel thuis zijn.', 'Ali is officieel thuis.', 'Ali was thuis.'], x: '⚠️ Uitzondering: gesproken en persoonlijk is -dir een vermoeden.', tag: 'tr-dir' },
      { t: 'mc', q: 'Wat is de formele vorm van «lazım»?', o: ['gerekmektedir', 'bulunmaktadır', 'yasaktır'], tag: 'tr-formeel' },
      { t: 'cloze', s: 'Binada asansör ___.', h: 'formeel: is er niet', a: ['bulunmamaktadır'], o: ['bulunmamaktadır', 'gerekmektedir', 'edilmiştir'], nl: 'In het gebouw is geen lift aanwezig.', tag: 'tr-formeel' },
      { t: 'mc', q: 'Welk woord is de formele vorm van «istemek»?', o: ['talep etmek', 'ibraz etmek', 'beyan etmek'], tag: 'tr-formeel' },
      { t: 'cloze', s: 'Bakım çalışmaları ___ su kesilecektir.', h: 'wegens', a: ['nedeniyle'], o: ['nedeniyle', 'uyarınca', 'amacıyla'], nl: 'Wegens onderhoudswerkzaamheden wordt het water afgesloten.', tag: 'tr-formeel' },
      { t: 'cloze', s: 'Gereğini saygılarımla ___ ederim.', h: 'omhoog', a: ['arz'], o: ['arz', 'rica', 'talep'], nl: 'Ik verzoek u beleefd het nodige te doen.', x: 'arz gebruik je omhoog (burger aan overheid), rica tegen een gelijke of lagere.', tag: 'tr-formeel' },
      { t: 'cloze', s: 'İZMİR GÖÇ İDARESİ MÜDÜRLÜĞÜ___', h: 'aan', a: ['NE'], o: ['NE', 'NDE', 'NÜ'], nl: 'Aan de directie van de immigratiedienst İzmir', tag: 'tr-formeel' },
      { t: 'mc', q: 'Wat betekent «geçerli»?', o: ['geldig', 'verlopen', 'tijdelijk'], tag: 'vocab' },
      { t: 'tr', nl: 'Dit document is zes maanden geldig.', a: ['Bu belge altı ay geçerlidir.', 'Bu belge altı ay geçerli.'], tag: 'tr-formeel' },
      { t: 'tr', nl: 'Ik verzoek om verlenging van mijn verblijfsvergunning.', a: ['İkamet iznimin uzatılmasını talep ediyorum.', 'İkamet iznimin uzatılmasını rica ediyorum.', 'Oturma iznimin uzatılmasını talep ediyorum.'], tag: 'tr-formeel' },
      { t: 'tr', nl: 'Roken is verboden.', a: ['Sigara içmek yasaktır.', 'Sigara içmek yasak.', 'Sigara içilmez.'], tag: 'tr-dir' },
      { t: 'order', s: 'Eksik belgelerin on gün içinde sunulması gerekmektedir.', nl: 'De ontbrekende documenten dienen binnen tien dagen te worden ingediend.', tag: 'tr-formeel' },
      { t: 'match', p: [['belge', 'document'], ['imza', 'handtekening'], ['belediye', 'gemeente'], ['memur', 'ambtenaar'], ['gişe', 'loket'], ['ek', 'bijlage']], tag: 'vocab' }
    ],
    reading: {
      t: 'Resmî yazı: ikamet izni', type: 'Officiële brief',
      p: [
        ['Sayın Ilse de Vries, 14.03.2025 tarihli ikamet izni uzatma başvurunuz kurumumuza ulaşmıştır.', 'Geachte Ilse de Vries, uw aanvraag tot verlenging van de verblijfsvergunning d.d. 14-03-2025 heeft onze instelling bereikt.'],
        ['Yapılan inceleme sonucunda dosyanızda geçerli bir sağlık sigortası belgesinin bulunmadığı tespit edilmiştir. Söz konusu belgenin, bu yazının tebliğ tarihinden itibaren otuz gün içinde sunulması gerekmektedir.', 'Bij het verrichte onderzoek is vastgesteld dat in uw dossier geen geldig bewijs van zorgverzekering aanwezig is. Het desbetreffende document dient binnen dertig dagen na de betekening van deze brief te worden ingediend.'],
        ['Belge, e-ikamet sistemi üzerinden yüklenebileceği gibi müdürlüğümüze şahsen de teslim edilebilir. Belirtilen süre içinde eksikliğin giderilmemesi hâlinde başvurunuz 6458 sayılı Kanun uyarınca işlemden kaldırılacaktır.', 'Het document kan via het e-ikamet-systeem worden geüpload en kan ook persoonlijk bij onze directie worden ingeleverd. Indien het gebrek niet binnen de genoemde termijn wordt hersteld, zal uw aanvraag krachtens wet nr. 6458 buiten behandeling worden gesteld.'],
        ['Bilgilerinize rica olunur. İzmir İl Göç İdaresi Müdürlüğü', 'Ter kennisneming. Provinciale directie Immigratiedienst İzmir']
      ],
      gl: [['tespit etmek', 'vaststellen'], ['tebliğ', 'betekening / kennisgeving'], ['şahsen', 'persoonlijk'], ['eksiklik', 'gebrek / tekort'], ['gidermek', 'verhelpen'], ['işlemden kaldırmak', 'buiten behandeling stellen']],
      q: [
        { t: 'mc', q: 'Dosyada ne eksik?', o: ['Geçerli bir sağlık sigortası belgesi', 'Pasaport fotoğrafı', 'İmza'] },
        { t: 'mc', q: 'Belge nasıl sunulabilir?', o: ['Sistem üzerinden ya da şahsen', 'Sadece posta ile', 'Sadece telefonla'] },
        { t: 'mc', q: 'Belge sunulmazsa ne olacak?', o: ['Başvuru işlemden kaldırılacak', 'İzin otomatik uzatılacak', 'Hiçbir şey olmayacak'] }
      ]
    },
    say: [['Başvurunuz incelenmektedir.', 'Uw aanvraag wordt onderzocht.'], ['Bu belge altı ay geçerlidir.', 'Dit document is zes maanden geldig.'], ['İkamet iznimi uzatmak istiyorum.', 'Ik wil mijn verblijfsvergunning verlengen.'], ['Gereğini saygılarımla arz ederim.', 'Ik verzoek u beleefd het nodige te doen.']],
    task: { nl: 'Schrijf een korte dilekçe aan de gemeente (BELEDİYE BAŞKANLIĞINA) over een probleem in je straat: kapotte verlichting, afval dat niet wordt opgehaald of een gevaarlijk kruispunt. Gebruik de vaste opbouw, minstens twee formele werkwoordsvormen (-mektedir, -miştir), één formeel woord (talep etmek, nedeniyle, söz konusu) en de slotzin.', model: 'KARŞIYAKA BELEDİYE BAŞKANLIĞINA\n\nKarşıyaka, Çiçek Sokak No: 12 adresinde ikamet etmekteyim. Sokağımızdaki sokak lambaları üç haftadır yanmamaktadır. Bu durum nedeniyle akşamları sokakta yürümek tehlikeli hâle gelmiştir. Konu daha önce telefonla bildirilmiş, ancak bir sonuç alınamamıştır. Söz konusu lambaların en kısa sürede tamir edilmesini talep ediyorum.\n\nGereğini saygılarımla arz ederim.\n\n15.04.2025 — Ilse de Vries' },
    scenario: { nl: 'Je staat aan het loket van de immigratiedienst in İzmir om naar je aanvraag te vragen. De ambtenaar is correct maar formeel.', role: 'You are a civil servant (memur) at the immigration office in İzmir: polite, formal, a little bureaucratic. Ask for the queue number and passport, tell the learner their application is being processed (incelenmektedir), that one document is missing or expired, name the deadline (otuz gün içinde) and the consequence (geçersiz sayılacaktır), and explain how to submit it. Answer questions patiently. Use formal B2 Turkish with siz and -mektedir / -ecektir.', goal: 'Vraag naar de stand van je aanvraag, begrijp wat er ontbreekt en vraag hoe en wanneer je het moet aanleveren.' }
  });

  /* ───────────────────────── B2 · 10 ───────────────────────── */
  U({
    id: 'tr-b2-10', level: 'B2', icon: '😎', title: 'Naber? Napıyosun?', nl: 'Spreektaal: zo praten Turken echt',
    goals: ['Snel, informeel gesproken Turks verstaan', 'Verkortingen herkennen: geliyom, gelicem, napıyosun', 'Stopwoordjes gebruiken: ya, yani, hani, işte, falan', 'Versterken met masmavi, tertemiz en kitap mitap'],
    vocab: [
      ['kanka', 'maat / bestie'], ['muhabbet', 'gezellig gesprek'], ['takılmak', 'rondhangen / plagen'], ['dalga geçmek', 'voor de gek houden'], ['saçmalamak', 'onzin uitkramen'], ['boş vermek', 'laten zitten / negeren'], ['bayılmak', 'dol zijn op / flauwvallen'],
      ['kafayı yemek', 'gek worden'], ['berbat', 'waardeloos'], ['fena değil', 'niet slecht'], ['idare eder', 'het gaat wel'], ['espri', 'grap / kwinkslag'], ['argo', 'straattaal'], ['küfür', 'scheldwoord / vloek'],
      ['samimiyet', 'vertrouwelijkheid'], ['laf', 'woord / praatje'], ['aynen', 'precies / inderdaad'], ['valla', 'echt waar / ik zweer het'], ['falan', 'en zo / ongeveer'], ['hani', 'weet je wel / je zou toch'],
      ['bayağı', 'behoorlijk'], ['acayip', 'raar / waanzinnig'], ['süper', 'super'], ['fragman', 'trailer'], ['final', 'seizoensfinale / slot'], ['masmavi', 'knalblauw'], ['tertemiz', 'brandschoon'],
      ['yepyeni', 'gloednieuw'], ['bomboş', 'helemaal leeg'], ['sırılsıklam', 'doorweekt'], ['paramparça', 'in duizend stukken']
    ],
    grammar: [
      { t: 'Zo klinkt het echt: geliyom, gelicem, napıyosun', es: 'Konuşma dilinde kısalmalar',
        html: `<p>Geschreven Turks is heel regelmatig, maar in een snel gesprek <b>slijten</b> veel vormen af. Je schrijft ze zo alleen in appjes; je moet ze vooral <b>verstaan</b>:</p>
<p>• de <b>r</b> van <b>-yor</b> valt weg: <i>geliyorum</i> → <b>geliyom</b> · <i>gidiyorsun</i> → <b>gidiyosun</b> · <i>yapıyoruz</i> → <b>yapıyoz</b> · <i>biliyor</i> → <b>biliyo</b></p>
<p>• <b>-eceğim / -acağım</b> krimpt tot <b>-cem / -cam</b>, en <i>-eceğiz</i> tot <b>-cez / -caz</b>: <i>geleceğim</i> → <b>gelicem</b> · <i>yapacağım</i> → <b>yapıcam</b> · <i>gideceğiz</i> → <b>gidicez</b> · <i>bakacağız</i> → <b>bakıcaz</b></p>
<p>• korte woordjes smelten samen: <i>ne yapıyorsun</i> → <b>napıyosun</b> · <i>ne haber</i> → <b>naber</b> · <i>ne olur</i> → <b>nolur</b> (alsjeblieft!) · <i>bir</i> → <b>bi</b> · <i>bir şey</i> → <b>bişey</b> · <i>burada</i> → <b>burda</b> · <i>nerede</i> → <b>nerde</b> · <i>değil mi</i> → <b>di mi</b> · <i>o zaman</i> → <b>ozman</b></p>
<p>• de <b>ğ</b> en de <b>h</b> verdwijnen bijna: <i>ağabey</i> → <b>abi</b> · <i>hanım</i> → <b>’anım</b> · <i>daha</i> → <b>dā</b> · <i>sabah</i> → <b>saba</b></p>
<p>In een sollicitatiebrief of e-mail schrijf je altijd de <b>volle vorm</b>. Zelf mag je rustig <i>geliyorum</i> blijven zeggen: dat klinkt netjes, niet vreemd.</p>`,
        table: [['geschreven', 'gesproken'], ['geliyorum', 'geliyom'], ['ne yapıyorsun?', 'napıyosun?'], ['geleceğim', 'gelicem'], ['yapacağız', 'yapıcaz'], ['bir şey değil', 'bişey diil'], ['değil mi?', 'di mi?']],
        sum: 'Napıyosun? Geliyom, bi dakka!',
        ex: [['Naber kanka, napıyosun?', 'Alles goed, maat, wat doe je?'], ['Bi dakka, geliyom!', 'Eén minuutje, ik kom eraan!'], ['Akşam bize gelicen mi?', 'Kom je vanavond naar ons?'], ['Çok güzel, di mi?', 'Heel mooi, hè?']] },
      { t: 'Stopwoordjes: ya, yani, hani, işte, falan', es: 'Dolgu sözcükleri',
        html: `<p>Deze woordjes betekenen weinig, maar zonder klinkt je Turks als een schoolboek:</p>
<p><b>ya</b> is het bekendste. Vooraan: ergernis of nadruk (<i><b>Ya</b> bırak!</i> Ach, hou op!). Achteraan: verbazing, klagen of verzachten (<i>Çok pahalı <b>ya</b>!</i> · <i>Yok <b>ya</b>!</i> Nee joh! · <i>Hadi <b>ya</b>!</i> Meen je dat?).</p>
<p><b>yani</b> = dus, ik bedoel, nou ja: <i><b>Yani</b> gelmiyor musun?</i> · alleen als antwoord: <i>Yani…</i> (Mwah, zo zo.)</p>
<p><b>şey</b> = eh, dinges: <i>Dün <b>şey</b>e gittik… sinemaya.</i> · <b>hani</b> = weet je wel; je zou toch: <i><b>Hani</b> geçen hafta tanıştık ya.</i> · <i><b>Hani</b> gelecektin?</i> (Je zou toch komen?) · <b>işte</b> = nou, kijk, dat dus: <i><b>İşte</b> böyle.</i> (Zo zit dat dus.) · <b>falan / filan</b> = en zo, of zoiets: <i>Çay <b>falan</b> içelim.</i> · <i>Saat beş <b>falan</b>dı.</i></p>
<p><b>aynen</b> (precies!), <b>valla / vallahi</b> (echt, eerlijk waar), <b>harbi</b> (serieus), <b>tabii</b>, <b>bence de</b>.</p>
<p>Aanspreken: <b>abi</b> en <b>abla</b> (oudere broer/zus, ook tegen de ober of de buurvrouw), <b>kanka</b>, <b>hocam</b>, <b>canım</b> (schat), <b>güzelim</b>, <b>ya</b>. Met de uitgang <b>-sene / -sana</b> dring je vriendelijk aan: <i>Gel<b>sene</b>!</i> (Kom dan!) · <i>Bak<b>sana</b>!</i> (Kijk nou eens!)</p>
<p>En <b>-iver-</b> achter de stam is «even snel, zomaar»: <i>Kapıyı aç<b>ıver</b>.</i> (Doe even de deur open.) · <i>Şuna bir bak<b>ıver</b>.</i></p>`,
        table: [['woordje', 'betekenis', 'voorbeeld'], ['ya', 'nadruk / verbazing', 'Yok ya!'], ['yani', 'dus / ik bedoel', 'Yani gelmiyor musun?'], ['hani', 'weet je wel / je zou toch', 'Hani gelecektin?'], ['işte', 'nou, kijk', 'İşte böyle.'], ['falan', 'en zo', 'çay falan'], ['-sene', 'doe dan!', 'Gelsene!']],
        sum: 'Yok ya! Hani gelecektin?',
        ex: [['Ya, hani bana haber verecektin?', 'Hé, je zou het me toch laten weten?'], ['Valla çok yoruldum ya.', 'Echt, ik ben zo moe, man.'], ['Sinemaya falan gidelim mi?', 'Zullen we naar de film gaan of zo?'], ['Otursana, çay içeriz.', 'Ga toch zitten, dan drinken we thee.']] },
      { t: 'Versterken en verdubbelen: masmavi, kitap mitap', es: 'Pekiştirme ve ikilemeler',
        html: `<p>Het Turks versterkt niet alleen met <i>çok</i>, maar ook door met het woord zelf te spelen:</p>
<p><b>Verdubbeling</b> maakt er een bijwoord van of geeft nadruk: <i>yavaş yavaş</i> (langzaamaan) · <i>güzel güzel</i> (netjes) · <i>tek tek</i> (een voor een) · <i>sıcak sıcak</i> (lekker warm, vers) · <i>uzun uzun</i> (langdurig) · <i>zaman zaman</i> (af en toe).</p>
<p><b>m-verdubbeling</b>: herhaal het woord met een <b>m</b> vooraan en je zegt «… en dat soort dingen»: <i>kitap <b>m</b>itap</i> (boeken en zo) · <i>çay <b>m</b>ay</i> · <i>para <b>m</b>ara</i> · <i>ev <b>m</b>ev</i>. Begint het woord met een klinker, dan komt de m ervoor: <i>iş <b>m</b>iş</i>. Vaak een tikje minachtend: <i>Diyet <b>m</b>iyet yapmam!</i> (Ik doe niet aan diëten en dat gedoe!)</p>
<p><b>Versterkend voorvoegsel</b>: neem de eerste lettergreep tot en met de klinker, zet er <b>m, p, r of s</b> achter en plak dat ervoor: <i>mavi</i> → <i><b>mas</b>mavi</i> (knalblauw) · <i>beyaz</i> → <i><b>bem</b>beyaz</i> (spierwit) · <i>kırmızı</i> → <i><b>kıp</b>kırmızı</i> · <i>temiz</i> → <i><b>ter</b>temiz</i> · <i>yeni</i> → <i><b>yep</b>yeni</i> · <i>boş</i> → <i><b>bom</b>boş</i>.</p>
<p><b>⚠️ Uitzondering:</b> wélke van de vier medeklinkers het wordt, kun je <b>niet uit een regel afleiden</b>: <i>ma<b>s</b>mavi</i> maar <i>be<b>m</b>beyaz</i>, <i>ye<b>m</b>yeşil</i> maar <i>ye<b>p</b>yeni</i>, <i>te<b>r</b>temiz</i>, <i>si<b>m</b>siyah</i>, <i>sa<b>p</b>sarı</i>, <i>dü<b>m</b>düz</i>, <i>do<b>p</b>dolu</i>, <i>ka<b>p</b>kara</i>. Sommige krijgen zelfs een extra stukje: <i><b>sırıl</b>sıklam</i> (doorweekt), <i><b>çırıl</b>çıplak</i> (spiernaakt), <i><b>param</b>parça</i>, <i><b>yapa</b>yalnız</i> (moederziel alleen), <i><b>güpe</b>gündüz</i> (op klaarlichte dag). <b>Waarom?</b> De medeklinker wordt op het gehoor gekozen: hij mag niet lijken op de medeklinkers die al in het woord zitten (daarom geen <s>mammavi</s>), en verder heeft het gebruik voor elk woord één vorm vastgelegd. Het is een gesloten rijtje van een paar dozijn woorden; nieuwe maak je niet zelf. Leer ze dus als vaste woorden.</p>`,
        table: [['woord', 'versterkt', 'betekenis'], ['mavi', 'masmavi', 'knalblauw'], ['beyaz', 'bembeyaz', 'spierwit'], ['kırmızı', 'kıpkırmızı', 'vuurrood'], ['temiz', 'tertemiz', 'brandschoon'], ['yeni', 'yepyeni', 'gloednieuw'], ['yalnız ⚠️', 'yapayalnız', 'moederziel alleen'], ['çıplak ⚠️', 'çırılçıplak', 'spiernaakt']],
        sum: 'Masmavi deniz, tertemiz hava.',
        ex: [['Deniz masmavi, gökyüzü bomboş.', 'De zee is knalblauw, de lucht helemaal leeg.'], ['Yağmurda sırılsıklam oldum.', 'Ik ben doorweekt geraakt in de regen.'], ['Para mara istemiyorum.', 'Ik wil geen geld of wat dan ook.'], ['Yavaş yavaş alışıyorum.', 'Ik raak er langzaamaan aan gewend.']] }
    ],
    dialogue: {
      t: 'Even bijkletsen', place: 'Kadıköy, İstanbul 🇹🇷',
      lines: [
        ['Berk', 'Oo, Stijn! Naber kanka, napıyosun?', 'Hé, Stijn! Alles goed, maat, wat doe je?'],
        ['Stijn', 'İyidir abi, takılıyoz işte. Sen?', 'Goed, man, beetje rondhangen. En jij?'],
        ['Berk', 'Valla aynı. Ya, hani dün akşam gelecektin? Bekledik seni.', 'Echt, hetzelfde. Hé, je zou toch gisteravond komen? We hebben op je gewacht.'],
        ['Stijn', 'Ya sorma, işten çıkamadım. Yağmurda sırılsıklam oldum, eve gidince bayılmışım.', 'Ach, vraag maar niet, ik kwam niet weg van mijn werk. Ik was doorweekt van de regen, thuis ben ik als een blok in slaap gevallen.'],
        ['Berk', 'Yok ya! Neyse, boş ver. Bu akşam maç var, gelsene.', 'Nee joh! Hoe dan ook, laat maar. Vanavond is er een wedstrijd, kom dan.'],
        ['Stijn', 'Kimde izliyosunuz?', 'Bij wie kijken jullie?'],
        ['Berk', 'Bizde. Çekirdek mekirdek aldım, annem de börek yaptı, sıcak sıcak.', 'Bij ons. Ik heb zonnebloempitten en zo gekocht, en mijn moeder heeft börek gemaakt, lekker warm.'],
        ['Stijn', 'Süper! Ben de bişey getireyim mi? Kola falan?', 'Super! Zal ik ook iets meenemen? Cola of zo?'],
        ['Berk', 'Gerek yok ya, her şey var. Sekizde orda ol, yeter.', 'Hoeft niet joh, alles is er. Als je er om acht uur bent, is het goed.'],
        ['Stijn', 'Tamamdır, gelicem. Bu sefer harbi gelicem!', 'Is goed, ik kom. Deze keer kom ik echt!']
      ],
      q: [
        { t: 'mc', q: 'Stijn dün akşam neden gelmedi?', o: ['İşten çıkamadı', 'Maça gitti', 'Hastaydı'] },
        { t: 'mc', q: 'Bu akşam ne yapacaklar?', o: ['Berk’lerde maç izleyecekler', 'Sinemaya gidecekler', 'Dışarıda yemek yiyecekler'] },
        { t: 'mc', q: 'Stijn bir şey getirecek mi?', o: ['Hayır, gerek yok', 'Evet, börek', 'Evet, çekirdek'] }
      ]
    },
    culture: { t: 'Abi, abla en de taal van de straat', html: `<p>In Turkije is iedereen familie, in elk geval in de taal. De ober, de taxichauffeur en de oudere buurjongen zijn <b>abi</b> (grote broer); de vrouw van de bakker is <b>abla</b> (grote zus); oudere mensen zijn <b>amca</b> en <b>teyze</b> (oom en tante), en een kind noem je <b>evladım</b> of <b>yavrum</b>. Wie zo aanspreekt, maakt de afstand meteen klein. Onder vrienden is het <b>kanka</b> (van <i>kan kardeşi</i>, bloedbroeder) of gewoon <b>oğlum</b> en <b>kızım</b>.</p>
<p>De straattaal (<b>argo</b>) vernieuwt zich snel, vooral via series en sociale media: <i>efsane</i> (legendarisch), <i>çok fena</i> (heel erg goed), <i>kıyak</i> (tof), <i>kafa dengi</i> (iemand op jouw golflengte). Het stoerste stopwoord, <b>lan</b>, hoor je overal, maar gebruik het zelf niet: tussen vrienden is het grappig, tegen een vreemde een belediging.</p>
<p>📺 De beste leerschool is een <b>dizi</b>. Turkse series duren twee uur per aflevering en zitten vol <i>ya</i>, <i>hani</i> en <i>yani</i>.</p>` },
    ex: [
      { t: 'mc', q: 'Wat is de volle, geschreven vorm van «geliyom»?', o: ['geliyorum', 'geleceğim', 'geldim'], tag: 'tr-spreek' },
      { t: 'mc', q: 'En van «napıyosun»?', o: ['ne yapıyorsun', 'ne yapacaksın', 'neden yapıyorsun'], tag: 'tr-spreek' },
      { t: 'mc', q: 'En van «gelicem»?', o: ['geleceğim', 'geliyorum', 'gelirim'], tag: 'tr-spreek' },
      { t: 'cloze', s: 'Çok güzel, ___ mi?', h: 'hè? (gesproken)', a: ['di'], o: ['di', 'de', 'ki'], nl: 'Heel mooi, hè?', tag: 'tr-spreek' },
      { t: 'cloze', s: '___ gelecektin?', h: 'je zou toch', a: ['Hani'], o: ['Hani', 'Falan', 'İşte'], nl: 'Je zou toch komen?', tag: 'tr-spreek' },
      { t: 'cloze', s: 'Sinemaya ___ gidelim mi?', h: 'of zo', a: ['falan'], o: ['falan', 'hani', 'yani'], nl: 'Zullen we naar de film gaan of zo?', tag: 'tr-spreek' },
      { t: 'cloze', s: 'Otur___, çay içeriz.', h: 'doe dan!', a: ['sana'], o: ['sana', 'sene', 'arak'], nl: 'Ga toch zitten, dan drinken we thee.', tag: 'tr-spreek' },
      { t: 'mc', q: 'Wat betekent «Yok ya!»?', o: ['Nee joh! / Dat meen je niet!', 'Er is niets.', 'Nee, dank je.'], tag: 'tr-spreek' },
      { t: 'mc', q: 'Wat betekent «kitap mitap»?', o: ['boeken en dat soort dingen', 'heel veel boeken', 'een klein boekje'], tag: 'tr-versterk' },
      { t: 'mc', q: 'Hoe zeg je «knalblauw»?', o: ['masmavi', 'mapmavi', 'mammavi'], x: '⚠️ Uitzondering: welke medeklinker (m, p, r of s) het wordt, ligt per woord vast en volgt geen regel. Hij mag niet lijken op de medeklinkers in het woord zelf.', tag: 'tr-versterk' },
      { t: 'mc', q: 'En «gloednieuw»?', o: ['yepyeni', 'yemyeni', 'yesyeni'], x: '⚠️ Uitzondering: yepyeni met p, maar yemyeşil met m. Leer ze als vaste woorden.', tag: 'tr-versterk' },
      { t: 'cloze', s: 'Yağmurda ___sıklam oldum.', a: ['sırıl'], o: ['sırıl', 'sıp', 'sım'], nl: 'Ik ben doorweekt geraakt in de regen.', x: '⚠️ Uitzondering: een paar woorden krijgen een langer voorvoegsel: sırılsıklam, çırılçıplak, paramparça.', tag: 'tr-versterk' },
      { t: 'cloze', s: 'Ev ___temiz olmuş!', h: 'brand-', a: ['ter'], o: ['ter', 'tem', 'tep'], nl: 'Het huis is brandschoon geworden!', tag: 'tr-versterk' },
      { t: 'mc', q: 'Tegen wie zeg je «abi»?', o: ['een iets oudere man, ook een ober of chauffeur', 'alleen je echte broer', 'je baas in een brief'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik raak er langzaamaan aan gewend.', a: ['Yavaş yavaş alışıyorum.'], tag: 'tr-versterk' },
      { t: 'tr', nl: 'Kom dan!', a: ['Gelsene!', 'Gelsene.', 'Gelsenize!'], tag: 'tr-spreek' },
      { t: 'tr', nl: 'Laat maar zitten.', a: ['Boş ver.', 'Boş ver!', 'Boş ver ya.'], tag: 'vocab' },
      { t: 'order', s: 'Ya, hani dün akşam bize gelecektin?', nl: 'Hé, je zou toch gisteravond naar ons komen?', tag: 'tr-spreek' },
      { t: 'match', p: [['kanka', 'maat'], ['espri', 'grap'], ['berbat', 'waardeloos'], ['aynen', 'precies'], ['argo', 'straattaal'], ['kaba', 'grof']], tag: 'vocab' }
    ],
    reading: {
      t: 'Sınıf grubu', type: 'Groepschat',
      p: [
        ['Elif: Arkadaşlar yarın sınav var mı ya? Ben hiç çalışmadım 😭 — Mert: Var tabii, hani hoca geçen hafta söylemişti. — Elif: Hadi ya! Kafayı yicem.', 'Elif: Jongens, is er morgen een toets? Ik heb helemaal niet geleerd 😭 — Mert: Natuurlijk, de docent had het toch vorige week gezegd. — Elif: Dat meen je niet! Ik word gek.'],
        ['Zeynep: Boş ver, kolay olucak. Ben notlarımı atıyım mı? — Elif: Atsana nolur! Sen bi tanesin 🙏 — Zeynep: Tamam, bi dakka, fotoğrafını çekiyom.', 'Zeynep: Maak je niet druk, het wordt makkelijk. Zal ik mijn aantekeningen sturen? — Elif: Stuur ze alsjeblieft! Je bent de beste 🙏 — Zeynep: Oké, één minuutje, ik maak er een foto van.'],
        ['Mert: Bu arada akşam Kadıköy’de buluşuyoz, gelen var mı? Kahve falan içeriz. — Elif: Ben gelemem valla, ders çalışıcam. — Mert: Sen mi? Ders mi? Dalga geçme 😂', 'Mert: Trouwens, vanavond spreken we af in Kadıköy, komt er iemand? We drinken koffie of zo. — Elif: Ik kan echt niet, ik ga leren. — Mert: Jij? Leren? Hou me niet voor de gek 😂'],
        ['Zeynep: Notlar geldi mi? — Elif: Geldi geldi, yazın tertemiz maşallah. Çok sağ ol kanka! — Zeynep: Bişey diil. Yarın görüşürüz, kolay gelsin 💪', 'Zeynep: Zijn de aantekeningen aangekomen? — Elif: Ja ja, je handschrift is brandschoon, maşallah. Heel erg bedankt, maat! — Zeynep: Graag gedaan. Tot morgen, succes 💪']
      ],
      gl: [['sınav', 'toets / examen'], ['not', 'aantekening / cijfer'], ['atmak', 'sturen (in chat) / gooien'], ['bu arada', 'trouwens'], ['yazı', 'handschrift / tekst']],
      q: [
        { t: 'mc', q: 'Elif neden panik yapıyor?', o: ['Yarın sınav var ve hiç çalışmadı', 'Notlarını kaybetti', 'Kadıköy’e gidemiyor'] },
        { t: 'mc', q: 'Zeynep ne gönderiyor?', o: ['Notlarının fotoğrafını', 'Sınav sorularını', 'Bir kahve'] },
        { t: 'mc', q: '«Bişey diil» ne demek?', o: ['Bir şey değil (graag gedaan)', 'Bir şey bilmiyorum', 'Bir şey istemiyorum'] }
      ]
    },
    say: [['Naber, napıyosun?', 'Alles goed, wat doe je?'], ['Ya, hani gelecektin?', 'Hé, je zou toch komen?'], ['Deniz masmavi, hava tertemiz.', 'De zee is knalblauw, de lucht brandschoon.'], ['Boş ver ya, gelsene!', 'Laat toch zitten joh, kom dan!']],
    task: { nl: 'Schrijf een appgesprek van 8 korte berichten tussen jou en een Turkse vriend(in) om iets af te spreken. Gebruik minstens vier stopwoordjes (ya, yani, hani, işte, falan, valla), twee gesproken verkortingen (bi, naber, gelicem, di mi), één keer -sene / -sana en één versterkt woord (yepyeni, bomboş, tertemiz).', model: '— Naber? Bu akşam bişey yapıyo musun?\n— Yok ya, evdeyim işte.\n— Hani yeni açılan kafe var ya, oraya gidelim mi?\n— Hangisi? Sahildeki mi?\n— Aynen. Yepyeni, bomboş, çok rahat.\n— Olur valla. Kaçta?\n— Yedi falan. Gelsene erken, yürürüz de.\n— Tamam, gelicem. Görüşürüz!' },
    scenario: { nl: 'Je komt je Turkse vriend Berk tegen in Kadıköy. Hij praat snel en informeel en plaagt je omdat je gisteren niet bent komen opdagen.', role: 'You are Berk, a cheerful 25-year-old from Kadıköy, İstanbul. Speak fast, informal spoken Turkish with contractions (napıyosun, gelicem, bi, di mi) and fillers (ya, yani, hani, işte, falan, valla, abi/kanka). Tease the learner for not showing up yesterday (Hani gelecektin?), invite them to watch the match tonight (Gelsene!), and react with Yok ya! Hadi ya! Aynen. Keep sentences short. If the learner uses full written forms, that is fine.', goal: 'Leg uit waarom je er gisteren niet was, reageer met stopwoordjes en spreek iets af voor vanavond.' }
  });
})(window.SPT);
