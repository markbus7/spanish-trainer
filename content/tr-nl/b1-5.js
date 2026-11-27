/* Turks voor Nederlandstaligen — niveau B1, units 9–10 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── B1 · 9 ───────────────────────── */
  U({
    id: 'tr-b1-09', level: 'B1', icon: '💼', title: 'İş görüşmesi', nl: 'Solliciteren: doel, reden en ondanks',
    goals: ['Over werk, ervaring en solliciteren praten', 'Een doel noemen met -mek için en -meye', 'Een reden geven met -diği için en yüzünden', 'Een tegenstelling maken met -e rağmen en -diği halde'],
    vocab: [
      ['iş görüşmesi', 'sollicitatiegesprek'], ['başvurmak', 'solliciteren / aanvragen'], ['başvuru', 'sollicitatie / aanvraag'], ['özgeçmiş', 'cv'], ['iş ilanı', 'vacature'], ['deneyim', 'ervaring'], ['maaş', 'salaris'],
      ['sözleşme', 'contract'], ['tam zamanlı', 'voltijd'], ['yarı zamanlı', 'deeltijd'], ['staj', 'stage'], ['işe almak', 'aannemen (personeel)'], ['işsiz', 'werkloos'], ['mülakat', 'sollicitatiegesprek (formeel)'],
      ['terfi', 'promotie'], ['fazla mesai', 'overwerk'], ['yıllık izin', 'jaarlijks verlof'], ['yönetici', 'leidinggevende'], ['çalışan', 'werknemer'], ['ekip', 'team'], ['sorumlu', 'verantwoordelijk'],
      ['beceri', 'vaardigheid'], ['diploma', 'diploma'], ['referans', 'referentie'], ['güçlü', 'sterk'], ['yetenek', 'talent'], ['hedef', 'doel'], ['geliştirmek', 'ontwikkelen / verbeteren'],
      ['rağmen', 'ondanks'], ['sayesinde', 'dankzij'], ['yüzünden', 'door (de schuld van)']
    ],
    grammar: [
      { t: 'Om te…: -mek için en -meye', es: 'Amaç: -mek için',
        html: `<p>Een <b>doel</b> zeg je met het hele werkwoord + <b>için</b>: <i>Türkçe öğren<b>mek için</b> kursa gidiyorum.</i> (Ik ga naar een cursus om Turks te leren.) · <i>Deneyim kazan<b>mak için</b> staj yaptım.</i></p>
<p>Is het doel voor <b>iemand anders</b>, dan gebruik je <b>-mesi için</b> met de bezitsuitgang (zie unit 4): <i>Çocukları<b>n</b> oku<b>ması için</b> çok çalışıyor.</i> (Hij werkt hard opdat zijn kinderen kunnen studeren.) · <i>Geç kalma<b>mam için</b> beni erken uyandır.</i></p>
<p>Na een werkwoord van <b>beweging</b> (gitmek, gelmek, çıkmak, inmek) is de korte vorm <b>-meye / -maya</b> het gewoonst: <i>Ekmek al<b>maya</b> gidiyorum.</i> (Ik ga brood halen.) · <i>Seni gör<b>meye</b> geldim.</i> (Ik ben gekomen om je te zien.) Het doel is hier letterlijk de richting waar je heen gaat, en richting is in het Turks de -e-vorm.</p>
<p><b>İçin</b> achter een zelfstandig naamwoord is «voor»: <i>iş <b>için</b></i>, <i>Ali <b>için</b></i>, <i>çocuklar <b>için</b></i>.</p>
<p><b>⚠️ Uitzondering:</b> bij de persoonlijke voornaamwoorden staat vóór <i>için</i> de <b>bezitsvorm</b>: <i>ben<b>im</b> için</i> (voor mij), <i>sen<b>in</b> için</i>, <i>on<b>un</b> için</i>, <i>biz<b>im</b> için</i>, <i>siz<b>in</b> için</i>, <i>bu<b>nun</b> için</i> (hiervoor, daarom), <i>kim<b>in</b> için</i>. Maar <b>onlar için</b> en <i>Ali için</i> hebben niets. <b>Waarom?</b> <i>İçin</i> was vroeger een zelfstandig naamwoord («het binnenste, de zaak van»), en daarvoor hoort een bezitter in de -in-vorm. Bij gewone woorden is die uitgang afgesleten; bij de korte, veelgebruikte voornaamwoorden is hij blijven staan. <i>Onlar</i> is met -lar als een gewoon meervoud gebouwd en doet met de gewone woorden mee. Hetzelfde zie je bij <i>gibi</i>, <i>kadar</i> en <i>ile</i>: <i>benim gibi</i>, <i>senin kadar</i>, <i>benimle</i>.</p>`,
        table: [['', 'vorm', 'voorbeeld'], ['doel (zelf)', '-mek için', 'öğrenmek için'], ['doel (ander)', '-mesi için', 'okuması için'], ['na beweging', '-meye', 'almaya gidiyorum'], ['voornaamwoord ⚠️', 'benim için', 'senin için · onun için'], ['gewoon woord', 'Ali için', 'onlar için · iş için']],
        sum: 'Öğrenmek için, almaya gidiyorum, benim için.',
        ex: [['Bu işe başvurmak için özgeçmişimi gönderdim.', 'Om op deze baan te solliciteren heb ik mijn cv gestuurd.'], ['Görüşmeye geç kalmamak için erken çıktım.', 'Om niet te laat op het gesprek te komen ben ik vroeg vertrokken.'], ['Sizinle tanışmaya geldim.', 'Ik ben gekomen om kennis met u te maken.'], ['Bu fırsat benim için çok önemli.', 'Deze kans is heel belangrijk voor mij.']] },
      { t: 'Omdat en doordat: -diği için, yüzünden, sayesinde', es: 'Sebep: -diği için',
        html: `<p>Je kent <b>çünkü</b> (want), dat een nieuwe zin begint. In verzorgd Turks zet je de reden liever <b>vooraan</b> met <b>-diği için</b> (omdat): de vorm uit unit 3, met de bezitsuitgang voor de persoon.</p>
<p><i>Deneyim<b>im</b> ol<b>duğu için</b> beni işe aldılar.</i> (Omdat ik ervaring heb, hebben ze me aangenomen.) · <i>Geç kal<b>dığım için</b> özür dilerim.</i> (Sorry dat ik te laat ben.) · <i>Yağmur yağ<b>dığı için</b> evde kaldık.</i></p>
<p>Voor de toekomst: <b>-eceği için</b>: <i>Yarın erken kalk<b>acağım için</b> şimdi yatıyorum.</i></p>
<p>Achter een <b>zelfstandig naamwoord</b> kies je op gevoel:<br>• <b>yüzünden</b> = door (iets vervelends, schuld): <i>Trafik <b>yüzünden</b> geç kaldım.</i> · <i>Sen<b>in</b> yüz<b>ünden</b>!</i> (Door jou!)<br>• <b>sayesinde</b> = dankzij (iets goeds): <i>Annem <b>sayesinde</b> Türkçe öğrendim.</i> · <i>Sen<b>in</b> saye<b>nde</b> işi aldım.</i><br>• <b>-den dolayı</b> = wegens (neutraal, formeel): <i>Hastalık<b>tan dolayı</b> gelemedi.</i></p>
<p>Als verbindingswoord aan het begin van de volgende zin: <b>bu yüzden</b> en <b>bu nedenle</b> (daarom), <b>onun için</b> (daarom, spreektaal).</p>`,
        table: [['Turks', 'Nederlands', 'gevoel'], ['-diği için', 'omdat', 'neutraal'], ['yüzünden', 'door (de schuld van)', 'negatief'], ['sayesinde', 'dankzij', 'positief'], ['-den dolayı', 'wegens', 'formeel'], ['bu yüzden', 'daarom', '']],
        sum: 'Geç kaldığım için özür dilerim.',
        ex: [['Üç dil bildiğim için bu işe başvurdum.', 'Omdat ik drie talen spreek, heb ik op deze baan gesolliciteerd.'], ['Grev yüzünden uçaklar kalkmadı.', 'Door de staking zijn de vliegtuigen niet vertrokken.'], ['Ekibim sayesinde projeyi zamanında bitirdik.', 'Dankzij mijn team hebben we het project op tijd afgemaakt.']] },
      { t: 'Ondanks en hoewel: -e rağmen, -diği halde', es: 'Zıtlık: rağmen',
        html: `<p><b>Rağmen</b> (ondanks) staat <b>achter</b> het woord, en dat woord krijgt de <b>-e-vorm</b>: <i>yağmur<b>a rağmen</b></i> (ondanks de regen), <i>her şey<b>e rağmen</b></i> (ondanks alles), <i>bun<b>a rağmen</b></i> (desondanks), <i>ban<b>a rağmen</b></i>.</p>
<p>Met een werkwoord gebruik je de -me-vorm + bezit + -e: <b>-mesine rağmen</b> (hoewel): <i>Yorgun ol<b>masına rağmen</b> çalışmaya devam etti.</i> (Hoewel hij moe was, werkte hij door.) · <i>Çok çalış<b>mama rağmen</b> terfi alamadım.</i> (Hoewel ik hard gewerkt heb, heb ik geen promotie gekregen.)</p>
<p>Hetzelfde zeg je met <b>-diği halde</b>: <i>Deneyimi ol<b>madığı halde</b> onu işe aldılar.</i> (Hoewel hij geen ervaring had, hebben ze hem aangenomen.) · <i>Bil<b>diğim halde</b> söylemedim.</i></p>
<p>Los verbinden, aan het begin van de tweede zin: <b>ama</b> / <b>fakat</b> (maar), <b>yine de</b> (toch), <b>buna rağmen</b> (desondanks), <b>oysa</b> (terwijl toch): <i>Maaş düşük. <b>Yine de</b> bu işi istiyorum.</i></p>
<p>Handige zinnen voor een gesprek: <i>Güçlü yönlerim…</i> (Mijn sterke kanten zijn…) · <i>Kendimi geliştirmek istiyorum.</i> · <i>Ekip çalışmasına yatkınım.</i> (Ik werk goed in een team.) · <i>Maaş beklentiniz nedir?</i> (Wat is uw salarisverwachting?)</p>`,
        table: [['Turks', 'Nederlands'], ['yağmura rağmen', 'ondanks de regen'], ['her şeye rağmen', 'ondanks alles'], ['olmasına rağmen', 'hoewel hij … is'], ['olduğu halde', 'hoewel hij … is'], ['yine de', 'toch']],
        sum: 'Her şeye rağmen. Yorgun olmasına rağmen.',
        ex: [['Soğuğa rağmen işe bisikletle gitti.', 'Ondanks de kou is hij met de fiets naar zijn werk gegaan.'], ['Türkçem iyi olmadığı halde anlaştık.', 'Hoewel mijn Turks niet goed is, hebben we elkaar begrepen.'], ['İş zor. Yine de çok seviyorum.', 'Het werk is zwaar. Toch houd ik er erg van.']] }
    ],
    dialogue: {
      t: 'Het sollicitatiegesprek', place: 'Ankara 🇹🇷',
      lines: [
        ['Müdür', 'Hoş geldiniz, Anna Hanım. Neden bu işe başvurdunuz?', 'Welkom, mevrouw Anna. Waarom hebt u op deze baan gesolliciteerd?'],
        ['Anna', 'Hem Türkçemi hem de kariyerimi geliştirmek için. Şirketiniz Hollanda’yla çalıştığı için benim için çok uygun.', 'Om zowel mijn Turks als mijn carrière te ontwikkelen. Omdat uw bedrijf met Nederland werkt, past het heel goed bij mij.'],
        ['Müdür', 'Özgeçmişinizde beş yıl deneyiminiz olduğunu gördüm. Neden eski işinizden ayrıldınız?', 'Ik zag in uw cv dat u vijf jaar ervaring hebt. Waarom bent u bij uw vorige baan weggegaan?'],
        ['Anna', 'Eşim Ankara’da çalıştığı için Türkiye’ye taşındık.', 'Omdat mijn man in Ankara werkt, zijn we naar Turkije verhuisd.'],
        ['Müdür', 'Anlıyorum. Güçlü yönleriniz neler?', 'Ik begrijp het. Wat zijn uw sterke kanten?'],
        ['Anna', 'Dört dil biliyorum ve ekip çalışmasını seviyorum. Türkçem henüz mükemmel olmamasına rağmen hızlı öğreniyorum.', 'Ik spreek vier talen en ik houd van teamwerk. Hoewel mijn Turks nog niet perfect is, leer ik snel.'],
        ['Müdür', 'Bence gayet iyi konuşuyorsunuz. Bu iş tam zamanlı, bazen fazla mesai de var. Sorun olur mu?', 'Volgens mij spreekt u heel behoorlijk. Deze baan is voltijds en soms is er ook overwerk. Is dat een probleem?'],
        ['Anna', 'Hayır, olmaz. Peki, yıllık izin kaç gün?', 'Nee, hoor. En hoeveel dagen jaarlijks verlof zijn er?'],
        ['Müdür', 'İlk yıl on dört gün. Maaş beklentiniz nedir?', 'Het eerste jaar veertien dagen. Wat is uw salarisverwachting?'],
        ['Anna', 'Deneyimime uygun bir maaş bekliyorum. Teklifinizi duymak isterim.', 'Ik verwacht een salaris dat past bij mijn ervaring. Ik hoor graag uw aanbod.'],
        ['Müdür', 'Tamam. Sizi bu hafta içinde arayacağız. Geldiğiniz için teşekkürler.', 'Goed. We bellen u deze week. Bedankt voor uw komst.']
      ],
      q: [
        { t: 'mc', q: 'Anna neden Türkiye’ye taşındı?', o: ['Eşi Ankara’da çalıştığı için', 'Okumak için', 'Eski işini sevmediği için'] },
        { t: 'mc', q: 'Anna kaç dil biliyor?', o: ['Dört', 'İki', 'Beş'] },
        { t: 'mc', q: 'İlk yıl kaç gün izin var?', o: ['On dört gün', 'Yirmi beş gün', 'Hiç yok'] }
      ]
    },
    culture: { t: 'Hanım, Bey en «torpil»', html: `<p>Op het werk spreek je elkaar aan met de <b>voornaam + Hanım of Bey</b>: <i>Anna Hanım</i>, <i>Murat Bey</i>. Dat is beleefd en tegelijk warm; de achternaam gebruik je bijna nooit. Je zegt <b>siz</b> tot de ander <i>sen</i> voorstelt, en dat kan lang duren. Een leidinggevende noem je <i>Müdür Bey</i> of <i>Müdür Hanım</i>.</p>
<p>Een werkweek is wettelijk <b>45 uur</b>, vaak verdeeld over zes dagen, en het wettelijke verlof begint bij <b>14 dagen</b>. Naast je salaris krijg je meestal een <b>yemek kartı</b> (maaltijdkaart) en soms <b>servis</b>: een busje van de zaak dat je thuis ophaalt.</p>
<p>🤝 Een woord dat je snel leert is <b>torpil</b>: een kruiwagen, iemand die je aan een baan helpt. Iedereen moppert erover en bijna iedereen gebruikt hem. Tegen een collega die aan het werk is, zeg je in het voorbijgaan <b>Kolay gelsin!</b> (moge het makkelijk gaan).</p>` },
    ex: [
      { t: 'cloze', s: 'Türkçe öğrenmek ___ kursa gidiyorum.', h: 'om te', a: ['için'], o: ['için', 'gibi', 'diye'], nl: 'Ik ga naar een cursus om Turks te leren.', tag: 'tr-icin' },
      { t: 'cloze', s: 'Ekmek al___ gidiyorum.', h: 'om te, beweging', a: ['maya'], o: ['maya', 'mak', 'mayı'], nl: 'Ik ga brood halen.', x: 'Na gitmek/gelmek staat het doel meestal in de -e-vorm: almaya.', tag: 'tr-meye' },
      { t: 'cloze', s: 'Seni gör___ geldim.', h: 'om te', a: ['meye'], o: ['meye', 'mek', 'meyi'], nl: 'Ik ben gekomen om je te zien.', tag: 'tr-meye' },
      { t: 'mc', q: 'Hoe zeg je «voor mij»?', o: ['benim için', 'ben için', 'bana için'], x: '⚠️ Uitzondering: voornaamwoorden staan vóór için in de bezitsvorm (benim, senin, onun), omdat için ooit een zelfstandig naamwoord was. Gewone woorden niet: Ali için.', tag: 'tr-icin' },
      { t: 'mc', q: 'Hoe zeg je «voor hen»?', o: ['onlar için', 'onların için', 'onlara için'], x: '⚠️ Uitzondering op de uitzondering: onlar is als een gewoon meervoud gebouwd en krijgt geen bezitsvorm.', tag: 'tr-icin' },
      { t: 'cloze', s: 'Geç kal___ için özür dilerim.', h: 'omdat ik', a: ['dığım'], o: ['dığım', 'mak', 'dım'], nl: 'Sorry dat ik te laat ben.', tag: 'tr-icin' },
      { t: 'cloze', s: 'Yağmur yağ___ için evde kaldık.', h: 'omdat het', a: ['dığı'], o: ['dığı', 'mak', 'ar'], nl: 'Omdat het regende, zijn we thuisgebleven.', tag: 'tr-icin' },
      { t: 'cloze', s: 'Trafik ___ geç kaldım.', h: 'door (vervelend)', a: ['yüzünden'], o: ['yüzünden', 'sayesinde', 'rağmen'], nl: 'Door het verkeer ben ik te laat.', tag: 'tr-icin' },
      { t: 'cloze', s: 'Annem ___ Türkçe öğrendim.', h: 'dankzij', a: ['sayesinde'], o: ['sayesinde', 'yüzünden', 'rağmen'], nl: 'Dankzij mijn moeder heb ik Turks geleerd.', tag: 'tr-icin' },
      { t: 'cloze', s: 'Yağmur___ rağmen yürüdük.', h: 'ondanks', a: ['a'], o: ['a', 'u', 'dan'], nl: 'Ondanks de regen hebben we gelopen.', x: 'Rağmen wil de -e-vorm: yağmura.', tag: 'tr-ragmen' },
      { t: 'cloze', s: 'Yorgun ol___ rağmen çalışmaya devam etti.', h: 'hoewel hij', a: ['masına'], o: ['masına', 'duğu', 'mak'], nl: 'Hoewel hij moe was, werkte hij door.', tag: 'tr-ragmen' },
      { t: 'mc', q: 'Wat betekent «yine de»?', o: ['toch', 'daarom', 'dankzij'], tag: 'tr-ragmen' },
      { t: 'mc', q: 'Wat is een «özgeçmiş»?', o: ['een cv', 'een contract', 'een vacature'], tag: 'vocab' },
      { t: 'tr', nl: 'Ondanks alles ben ik gelukkig.', a: ['Her şeye rağmen mutluyum.'], tag: 'tr-ragmen' },
      { t: 'tr', nl: 'Ik ben gekomen om te werken.', a: ['Çalışmaya geldim.', 'Çalışmak için geldim.'], tag: 'tr-meye' },
      { t: 'tr', nl: 'Dit is heel belangrijk voor mij.', a: ['Bu benim için çok önemli.'], tag: 'tr-icin' },
      { t: 'order', s: 'Deneyimim olduğu için beni hemen işe aldılar.', nl: 'Omdat ik ervaring heb, hebben ze me meteen aangenomen.', tag: 'tr-icin' },
      { t: 'match', p: [['maaş', 'salaris'], ['deneyim', 'ervaring'], ['sözleşme', 'contract'], ['patron', 'baas'], ['ekip', 'team'], ['hedef', 'doel']], tag: 'vocab' }
    ],
    reading: {
      t: 'İş ilanı: Müşteri temsilcisi', type: 'Vacature',
      p: [
        ['İzmir’deki ofisimiz için Hollandaca bilen bir müşteri temsilcisi arıyoruz. Şirketimiz Avrupa’ya meyve ihraç ettiği için yabancı dil çok önemlidir.', 'Voor ons kantoor in İzmir zoeken wij een klantenservicemedewerker die Nederlands spreekt. Omdat ons bedrijf fruit naar Europa exporteert, is een vreemde taal heel belangrijk.'],
        ['Aranan nitelikler: en az iki yıl deneyim, iyi derecede Hollandaca ve İngilizce, ekip çalışmasına yatkınlık. Türkçeniz mükemmel olmasa bile başvurabilirsiniz.', 'Gevraagde kwaliteiten: minstens twee jaar ervaring, goede beheersing van Nederlands en Engels, geschiktheid voor teamwerk. Ook als uw Turks niet perfect is, kunt u solliciteren.'],
        ['İş tam zamanlıdır. Deneyime göre maaş, yemek kartı ve servis verilir. Çalışanlarımızın kendilerini geliştirmesi için her yıl dil kursu sunuyoruz.', 'De baan is voltijds. Er wordt een salaris naar ervaring, een maaltijdkaart en bedrijfsvervoer geboden. Opdat onze werknemers zich kunnen ontwikkelen, bieden wij elk jaar een taalcursus aan.'],
        ['Başvurmak için özgeçmişinizi 15 Mart’a kadar e-postayla gönderin. Uygun adaylar görüşmeye çağrılacaktır.', 'Stuur om te solliciteren uw cv vóór 15 maart per e-mail. Geschikte kandidaten worden uitgenodigd voor een gesprek.']
      ],
      gl: [['müşteri temsilcisi', 'klantenservicemedewerker'], ['nitelik', 'kwaliteit / eigenschap'], ['yatkınlık', 'aanleg / geschiktheid'], ['aday', 'kandidaat'], ['sunmak', 'aanbieden']],
      q: [
        { t: 'mc', q: 'Şirket için yabancı dil neden önemli?', o: ['Avrupa’ya meyve ihraç ettiği için', 'Ofis Hollanda’da olduğu için', 'Müdür Hollandalı olduğu için'] },
        { t: 'mc', q: 'En az kaç yıl deneyim gerekiyor?', o: ['İki yıl', 'Beş yıl', 'Deneyim gerekmiyor'] },
        { t: 'mc', q: 'Şirket çalışanlarına her yıl ne sunuyor?', o: ['Dil kursu', 'Yeni bir araba', 'Bir ay izin'] }
      ]
    },
    say: [['Türkçe öğrenmek için kursa gidiyorum.', 'Ik ga naar een cursus om Turks te leren.'], ['Geç kaldığım için özür dilerim.', 'Sorry dat ik te laat ben.'], ['Her şeye rağmen mutluyum.', 'Ondanks alles ben ik gelukkig.'], ['Bu fırsat benim için çok önemli.', 'Deze kans is heel belangrijk voor mij.']],
    task: { nl: 'Schrijf een korte sollicitatiebrief van 6 zinnen voor de baan in İzmir. Zeg waarom je solliciteert (-mek için), geef een reden (-diğim için), noem een sterke kant, gebruik één keer rağmen of -diği halde en sluit beleefd af.', model: 'Sayın Yetkili, müşteri temsilcisi ilanınıza başvurmak için yazıyorum. Ana dilim Hollandaca olduğu için bu iş bana çok uygun. Beş yıl bir ihracat şirketinde çalıştım. Türkçem henüz mükemmel olmamasına rağmen her gün ilerliyorum. Kendimi geliştirmek ve ekibinize katılmak istiyorum. Görüşmek için sizden haber bekliyorum. Saygılarımla.' },
    scenario: { nl: 'Je hebt een sollicitatiegesprek bij een exportbedrijf in İzmir dat iemand zoekt die Nederlands spreekt.', role: 'You are Murat Bey, a polite HR manager at a fruit export company in İzmir, interviewing the learner (formal siz). Ask why they applied (Neden bu işe başvurdunuz?), about experience, strengths and weaknesses, why they moved to Türkiye, salary expectation, and answer their questions about hours and leave. Encourage answers with -mek için, -diğim için and rağmen. Use B1 Turkish.', goal: 'Leg uit waarom je solliciteert, noem je ervaring en stel zelf een vraag over de baan.' }
  });

  /* ───────────────────────── B1 · 10 ───────────────────────── */
  U({
    id: 'tr-b1-10', level: 'B1', icon: '📰', title: 'Haberlere göre…', nl: 'Nieuws en media: hoe en waarom iets gebeurt',
    goals: ['Het nieuws volgen en navertellen', 'Zeggen hoe iets gebeurt met -erek en -e -e', 'Zonder te… zeggen met -meden', 'Diye gebruiken voor citaat, reden en doel'],
    vocab: [
      ['gazeteci', 'journalist'], ['muhabir', 'verslaggever'], ['manşet', 'krantenkop'], ['başlık', 'titel / kop'], ['makale', 'artikel'], ['röportaj', 'interview'], ['canlı yayın', 'live-uitzending'],
      ['kanal', 'zender / kanaal'], ['köşe yazısı', 'column'], ['paylaşmak', 'delen'], ['yorum', 'reactie / commentaar'], ['takip etmek', 'volgen'], ['basın', 'pers'], ['açıklama', 'verklaring'],
      ['açıklamak', 'bekendmaken / uitleggen'], ['iddia etmek', 'beweren'], ['yalan haber', 'nepnieuws'], ['kaynak', 'bron'], ['tarafsız', 'onpartijdig'], ['gelişme', 'ontwikkeling'], ['seçim', 'verkiezing'],
      ['hükümet', 'regering'], ['cumhurbaşkanı', 'president'], ['bakan', 'minister'], ['ekonomi', 'economie'], ['enflasyon', 'inflatie'], ['zam', 'prijs- of loonsverhoging'], ['gündem', 'agenda / het nieuws van de dag'],
      ['belirtmek', 'aangeven / verklaren'], ['yaralı', 'gewonde'], ['doğrulamak', 'bevestigen / verifiëren']
    ],
    grammar: [
      { t: 'Door te… en al …end: -erek, -e -e', es: 'Ulaç: -erek',
        html: `<p>Met <b>-erek / -arak</b> achter de stam zeg je <b>hoe</b> of <b>waardoor</b> iets gebeurt. Na een klinker komt er een y tussen. Er komt <b>geen</b> tijd en geen persoon bij: die staan alleen op het laatste werkwoord.</p>
<p><i>Koş<b>arak</b> geldi.</i> (Hij kwam aanrennen.) · <i>Gazete oku<b>yarak</b> Türkçe öğreniyorum.</i> (Ik leer Turks door de krant te lezen.) · <i>Gül<b>erek</b> cevap verdi.</i> (Ze antwoordde lachend.) · <i>Bakan bir açıklama yap<b>arak</b> iddiaları reddetti.</i> (De minister wees de beweringen af door een verklaring af te leggen.)</p>
<p>Ontkennend is het <b>-meyerek</b>, maar veel gewoner is <b>-meden</b> (zonder te): zie hieronder.</p>
<p>Verdubbel je de vorm <b>-e / -a</b>, dan duurt het lang of gebeurt het steeds opnieuw: <i>koş<b>a</b> koş<b>a</b></i> (al rennend, hals over kop), <i>gül<b>e</b> gül<b>e</b></i> (al lachend: daarom is het ook «dag!» tegen wie vertrekt), <i>bil<b>e</b> bil<b>e</b></i> (willens en wetens), <i>sor<b>a</b> sor<b>a</b></i>. Spreekwoord: <i>Sora sora Bağdat bulunur.</i> (Al vragend vind je Bagdad.)</p>
<p><b>⚠️ Uitzondering:</b> <b>olarak</b> is de -erek-vorm van <i>olmak</i>, maar betekent niet «door te zijn». Het is een vast woord voor <b>«als»</b> (in de rol van): <i>Öğretmen <b>olarak</b> çalışıyorum.</i> (Ik werk als leraar.) · <i>Hediye <b>olarak</b> aldım.</i> (Ik heb het als cadeau gekocht.) Het maakt ook bijwoorden: <i>genel <b>olarak</b></i> (in het algemeen), <i>ilk <b>olarak</b></i> (als eerste), <i>resmî <b>olarak</b></i> (officieel). <b>Waarom?</b> Het wordt zo vaak gebruikt dat het is versteend tot een los woordje; de oorspronkelijke betekenis («zijnde») is verbleekt. Hetzelfde gebeurde met <i>diye</i> hieronder.</p>`,
        table: [['vorm', 'betekenis', 'voorbeeld'], ['-erek', 'door te / al …end', 'koşarak · okuyarak'], ['-e -e', 'steeds, lang', 'koşa koşa · güle güle'], ['-meden', 'zonder te', 'sormadan'], ['olarak ⚠️', 'als', 'öğretmen olarak'], ['… olarak ⚠️', 'bijwoord', 'genel olarak']],
        sum: 'Koşarak geldi. Öğretmen olarak çalışıyorum.',
        ex: [['Haberleri dinleyerek kahvaltı yapıyorum.', 'Ik ontbijt terwijl ik naar het nieuws luister.'], ['Çalışarak başardı.', 'Hij heeft het bereikt door te werken.'], ['Gazeteci olarak on yıl çalıştı.', 'Hij heeft tien jaar als journalist gewerkt.'], ['Çocuklar koşa koşa geldi.', 'De kinderen kwamen aangerend.']] },
      { t: 'Zonder te en voordat: -meden', es: '-meden, -meden önce',
        html: `<p><b>-meden / -madan</b> achter de stam is <b>«zonder te»</b>: <i>Kahvaltı yap<b>madan</b> çıktı.</i> (Hij vertrok zonder te ontbijten.) · <i>Düşün<b>meden</b> konuşma!</i> (Praat niet zonder na te denken!) · <i>Kaynağı doğrula<b>madan</b> haberi paylaşmayın.</i> (Deel het bericht niet zonder de bron te controleren.)</p>
<p>Met <b>önce</b> erachter is het <b>«voordat»</b>: <i>Yat<b>madan önce</b> haberlere bakarım.</i> (Voordat ik ga slapen, kijk ik naar het nieuws.) Net als bij -erek staat er geen persoon op; wie het doet, blijkt uit de rest van de zin. Is het iemand anders, dan noem je die los: <i><b>Sen</b> gel<b>meden önce</b> her şeyi hazırladım.</i></p>
<p>Het tegenovergestelde ken je al uit A2: <b>-dikten sonra</b> (nadat): <i>Haberi oku<b>duktan sonra</b> yorum yazdım.</i></p>
<p>En om twee handelingen na elkaar te zetten zonder twee keer de tijd te herhalen: <b>-ip</b>: <i>Haberi oku<b>yup</b> paylaştım.</i> (Ik heb het bericht gelezen en gedeeld.) · <i>Otur<b>up</b> konuşalım.</i> (Laten we gaan zitten en praten.)</p>`,
        table: [['Turks', 'Nederlands'], ['sormadan', 'zonder te vragen'], ['yatmadan önce', 'voor het slapengaan'], ['okuduktan sonra', 'na het lezen'], ['okuyup paylaştım', 'ik las en deelde het']],
        sum: 'Düşünmeden konuşma!',
        ex: [['Bana sormadan arabayı almış.', 'Hij schijnt de auto genomen te hebben zonder het mij te vragen.'], ['Karar vermeden önce iki kaynağa bak.', 'Kijk naar twee bronnen voordat je beslist.'], ['Hiç durmadan beş saat konuştu.', 'Hij heeft vijf uur zonder ophouden gepraat.']] },
      { t: 'Diye: citaat, reden en doel', es: 'Diye',
        html: `<p><b>Diye</b> komt van <i>demek</i> (zeggen) en betekent letterlijk «zeggende». Het is een vast woordje geworden dat je overal hoort. Het staat <b>achter</b> een stukje dat iemand zegt of denkt:</p>
<p>• <b>citaat</b>, bij werkwoorden als roepen, vragen, schrijven: <i>«Geliyorum!» <b>diye</b> bağırdı.</i> (Hij riep: «Ik kom eraan!») · <i>«Ne zaman?» <b>diye</b> sordu.</i> Bij <i>demek</i> zelf komt het niet: <i>«Geliyorum» <b>dedi</b>.</i></p>
<p>• <b>reden</b> (omdat hij dacht dat): <i>Yağmur yağacak <b>diye</b> şemsiye aldım.</i> (Ik heb een paraplu meegenomen omdat het zou gaan regenen.) · <i>Hasta <b>diye</b> işe gelmedi.</i> (Hij is niet komen werken, zogenaamd omdat hij ziek is.)</p>
<p>• <b>doel</b> (zodat), met de wensvorm <i>-sin / -eyim</i>: <i>Geç kalma<b>yayım diye</b> taksiye bindim.</i> (Ik nam een taxi om niet te laat te komen.) · <i>Herkes duy<b>sun diye</b> yüksek sesle söyledi.</i> (Hij zei het hardop zodat iedereen het zou horen.)</p>
<p>• <b>genaamd</b>: <i>Ayşe <b>diye</b> bir gazeteci</i> (een journaliste die Ayşe heet) · <i>Böyle bir şey <b>diye</b> bir şey yok.</i></p>
<p>In het nieuws hoor je daarnaast de vormen uit unit 4 en 7: <i>Bakan, zam yapılmayacağ<b>ını</b> açıkladı.</i> (De minister maakte bekend dat er geen verhoging komt.) · <i>Kazada üç kişinin yaralan<b>dığı</b> belirt<b>ildi</b>.</i> (Er werd verklaard dat bij het ongeluk drie mensen gewond zijn geraakt.) · <i>Haberler<b>e göre</b>…</i> (Volgens het nieuws…)</p>`,
        table: [['gebruik', 'voorbeeld', 'betekenis'], ['citaat', '«Gel!» diye bağırdı.', 'Hij riep: «Kom!»'], ['reden', 'Hasta diye gelmedi.', 'omdat hij (zogenaamd) ziek is'], ['doel', 'Unutmayayım diye yazdım.', 'om het niet te vergeten'], ['genaamd', 'Ayşe diye biri', 'iemand die Ayşe heet']],
        sum: '«Geliyorum!» diye bağırdı.',
        ex: [['Unutmayayım diye telefonuma yazdım.', 'Ik heb het in mijn telefoon gezet om het niet te vergeten.'], ['«Bu haber doğru mu?» diye sordum.', 'Ik vroeg: «Klopt dit bericht?»'], ['Seni rahatsız etmeyeyim diye aramadım.', 'Ik heb niet gebeld om je niet te storen.']] }
    ],
    dialogue: {
      t: 'Klopt dat bericht wel?', place: 'Ankara 🇹🇷',
      lines: [
        ['Selin', 'Haberi gördün mü? Benzine yine zam gelmiş!', 'Heb je het nieuws gezien? De benzine schijnt weer duurder te zijn geworden!'],
        ['Mark', 'Nerede okudun? Ben sabah haberleri dinleyerek kahvaltı yaptım, öyle bir şey duymadım.', 'Waar heb je dat gelezen? Ik heb vanochtend ontbeten met het nieuws aan, zoiets heb ik niet gehoord.'],
        ['Selin', 'Sosyal medyada biri paylaşmış. «Gece yarısından itibaren» diye yazıyor.', 'Iemand heeft het op sociale media gedeeld. Er staat «vanaf middernacht».'],
        ['Mark', 'Kaynağına bakmadan inanma. Geçen hafta da yalan bir haber çıkmıştı.', 'Geloof het niet zonder naar de bron te kijken. Vorige week was er ook al een nepbericht.'],
        ['Selin', 'Haklısın. Dur, güvenilir bir gazeteye bakayım.', 'Je hebt gelijk. Wacht, ik kijk even in een betrouwbare krant.'],
        ['Mark', 'Ne diyor?', 'Wat zegt die?'],
        ['Selin', 'Bakan bir açıklama yaparak iddiaları reddetmiş. «Bu ay zam yapılmayacak» demiş.', 'De minister heeft de beweringen afgewezen met een verklaring. Hij zei: «Deze maand komt er geen verhoging.»'],
        ['Mark', 'Gördün mü? İnsanlar düşünmeden paylaşıyor.', 'Zie je wel? Mensen delen zonder na te denken.'],
        ['Selin', 'Ben de az kalsın paylaşacaktım! Herkes bilsin diye…', 'Ik had het zelf ook bijna gedeeld! Zodat iedereen het zou weten…'],
        ['Mark', 'Olsun. Yine de depoyu doldurmaya gidelim mi? Ne olur ne olmaz.', 'Geeft niet. Zullen we toch maar gaan tanken? Je weet maar nooit.']
      ],
      q: [
        { t: 'mc', q: 'Selin haberi nerede okudu?', o: ['Sosyal medyada', 'Bir gazetede', 'Televizyonda'] },
        { t: 'mc', q: 'Bakan ne demiş?', o: ['Bu ay zam yapılmayacak', 'Gece yarısı zam gelecek', 'Benzin bitecek'] },
        { t: 'mc', q: 'Mark’a göre insanlar ne yapıyor?', o: ['Düşünmeden paylaşıyor', 'Hiç haber okumuyor', 'Çok gazete alıyor'] }
      ]
    },
    culture: { t: 'Gündem, ana haber en de çay ocağı', html: `<p>Turkije is een land van nieuwsvolgers. Het woord <b>gündem</b> (wat er vandaag speelt) hoor je de hele dag: <i>Gündemde ne var?</i> Het avondjournaal, de <b>ana haber</b>, duurt op veel zenders ruim een uur en staat in theehuizen, kapperszaken en wachtkamers gewoon aan.</p>
<p>De taal van het nieuws is herkenbaar: lange zinnen die eindigen op <b>-di</b> met de lijdende vorm (<i>açıklandı, belirtildi, öğrenildi</i>: «er werd bekendgemaakt, verklaard, vernomen»), zodat de bron niet genoemd hoeft te worden. Wat niet zeker is, krijgt <b>iddia edildi</b> (er werd beweerd) of <b>-miş</b>.</p>
<p>📱 Turken horen bij de actiefste gebruikers van sociale media ter wereld. Het controleren van berichten heet <b>teyit</b>, en de vraag <i>Kaynağı ne?</i> (wat is de bron?) is een goede gewoonte om meteen mee te nemen.</p>` },
    ex: [
      { t: 'cloze', s: 'Gazete oku___ Türkçe öğreniyorum.', h: 'door te', a: ['yarak'], o: ['yarak', 'arak', 'madan'], nl: 'Ik leer Turks door de krant te lezen.', x: 'Na een klinker komt er een y tussen: oku-y-arak.', tag: 'tr-erek' },
      { t: 'cloze', s: 'Çocuk gül___ cevap verdi.', h: 'al …end', a: ['erek'], o: ['erek', 'arak', 'meden'], nl: 'Het kind antwoordde lachend.', tag: 'tr-erek' },
      { t: 'mc', q: 'Hoe zeg je «Ik werk als leraar»?', o: ['Öğretmen olarak çalışıyorum.', 'Öğretmen gibi çalışıyorum.', 'Öğretmen diye çalışıyorum.'], x: '⚠️ Uitzondering: olarak (van olmak) is versteend tot het woordje «als» in de rol van. Öğretmen gibi zou betekenen: zoals een leraar (maar je bent het niet).', tag: 'tr-erek' },
      { t: 'mc', q: 'Wat betekent «genel olarak»?', o: ['in het algemeen', 'door algemeen te zijn', 'als generaal'], x: '⚠️ Uitzondering: olarak maakt hier een bijwoord; de oorspronkelijke betekenis «zijnde» is verbleekt.', tag: 'tr-erek' },
      { t: 'cloze', s: 'Kahvaltı yap___ çıktı.', h: 'zonder te', a: ['madan'], o: ['madan', 'arak', 'meden'], nl: 'Hij vertrok zonder te ontbijten.', tag: 'tr-erek' },
      { t: 'cloze', s: 'Yat___ önce haberlere bakarım.', h: 'voordat', a: ['madan'], o: ['madan', 'tıktan', 'arak'], nl: 'Voordat ik ga slapen, kijk ik naar het nieuws.', tag: 'tr-erek' },
      { t: 'cloze', s: 'Haberi oku___ paylaştım.', h: 'en', a: ['yup'], o: ['yup', 'yarak', 'madan'], nl: 'Ik heb het bericht gelezen en gedeeld.', tag: 'tr-erek' },
      { t: 'cloze', s: '«Geliyorum!» ___ bağırdı.', a: ['diye'], o: ['diye', 'dedi', 'gibi'], nl: 'Hij riep: «Ik kom eraan!»', tag: 'tr-diye' },
      { t: 'cloze', s: 'Geç kalmayayım ___ taksiye bindim.', h: 'zodat', a: ['diye'], o: ['diye', 'için', 'rağmen'], nl: 'Ik nam een taxi om niet te laat te komen.', tag: 'tr-diye' },
      { t: 'mc', q: 'Wat betekent «Hasta diye işe gelmedi»?', o: ['Hij kwam niet werken omdat hij (naar eigen zeggen) ziek is.', 'Hij kwam ziek op het werk.', 'Hij zei dat het werk hem ziek maakt.'], tag: 'tr-diye' },
      { t: 'mc', q: 'Wat betekent «Ayşe diye bir gazeteci»?', o: ['een journaliste die Ayşe heet', 'Ayşe zegt dat ze journaliste is', 'een journaliste zoals Ayşe'], tag: 'tr-diye' },
      { t: 'mc', q: 'Wat is «yalan haber»?', o: ['nepnieuws', 'het laatste nieuws', 'goed nieuws'], tag: 'vocab' },
      { t: 'mc', q: 'Wat betekent «güle güle» letterlijk?', o: ['al lachend', 'kom terug', 'tot morgen'], x: 'De verdubbelde -e-vorm: gül-e gül-e. Je zegt het tegen wie weggaat.', tag: 'tr-erek' },
      { t: 'tr', nl: 'Praat niet zonder na te denken!', a: ['Düşünmeden konuşma!', 'Düşünmeden konuşmayın!'], tag: 'tr-erek' },
      { t: 'tr', nl: 'Hij kwam aanrennen.', a: ['Koşarak geldi.', 'Koşa koşa geldi.'], tag: 'tr-erek' },
      { t: 'tr', nl: 'Volgens het nieuws komt er geen verhoging.', a: ['Haberlere göre zam yapılmayacak.', 'Haberlere göre zam olmayacak.', 'Haberlere göre zam gelmeyecek.'], tag: 'tr-passief' },
      { t: 'order', s: 'Kaynağına bakmadan hiçbir haberi paylaşmamalıyız.', nl: 'We moeten geen enkel bericht delen zonder naar de bron te kijken.', tag: 'tr-erek' },
      { t: 'match', p: [['basın', 'pers'], ['kaynak', 'bron'], ['seçim', 'verkiezing'], ['hükümet', 'regering'], ['bakan', 'minister'], ['yorum', 'reactie']], tag: 'vocab' }
    ],
    reading: {
      t: 'Yalan haber nasıl anlaşılır?', type: 'Artikel',
      p: [
        ['Sosyal medyada her gün binlerce haber paylaşılıyor. Uzmanlara göre bunların önemli bir kısmı yanlış ya da eksik.', 'Op sociale media worden elke dag duizenden berichten gedeeld. Volgens deskundigen is een belangrijk deel daarvan onjuist of onvolledig.'],
        ['Yalan haberler genellikle büyük harflerle ve ünlem işaretleriyle yazılır. «Herkes görsün diye paylaşın!» gibi cümleler dikkat çekmek için kullanılır.', 'Nepnieuws wordt meestal met hoofdletters en uitroeptekens geschreven. Zinnen als «Deel dit zodat iedereen het ziet!» worden gebruikt om aandacht te trekken.'],
        ['Bir haberi paylaşmadan önce üç şeye bakın: Kaynak güvenilir mi? Haber başka gazetelerde de var mı? Tarih yeni mi? Bazen beş yıllık bir olay bugün olmuş gibi gösterilir.', 'Kijk naar drie dingen voordat u een bericht deelt: is de bron betrouwbaar? Staat het bericht ook in andere kranten? Is de datum recent? Soms wordt een gebeurtenis van vijf jaar geleden gepresenteerd alsof ze vandaag is gebeurd.'],
        ['Unutmayın: bir haber sizi çok kızdırıyorsa ya da çok korkutuyorsa, bir dakika durup düşünün. Yalan haberler duygularımızı kullanarak yayılır.', 'Vergeet niet: als een bericht u erg boos of erg bang maakt, wacht dan een minuut en denk na. Nepnieuws verspreidt zich door onze emoties te gebruiken.']
      ],
      gl: [['uzman', 'deskundige'], ['eksik', 'onvolledig'], ['ünlem işareti', 'uitroepteken'], ['dikkat çekmek', 'aandacht trekken'], ['yayılmak', 'zich verspreiden']],
      q: [
        { t: 'mc', q: 'Yalan haberler genellikle nasıl yazılır?', o: ['Büyük harflerle ve ünlem işaretleriyle', 'Çok uzun ve sıkıcı cümlelerle', 'Sadece İngilizce'] },
        { t: 'mc', q: 'Paylaşmadan önce kaç şeye bakmalısınız?', o: ['Üç şeye', 'Bir şeye', 'On şeye'] },
        { t: 'mc', q: 'Yalan haberler nasıl yayılır?', o: ['Duygularımızı kullanarak', 'Gazeteler sayesinde', 'Hükümet tarafından'] }
      ]
    },
    say: [['Gazete okuyarak Türkçe öğreniyorum.', 'Ik leer Turks door de krant te lezen.'], ['Düşünmeden konuşma!', 'Praat niet zonder na te denken!'], ['Öğretmen olarak çalışıyorum.', 'Ik werk als leraar.'], ['Unutmayayım diye yazdım.', 'Ik heb het opgeschreven om het niet te vergeten.']],
    task: { nl: 'Vertel in 5 of 6 zinnen een nieuwsbericht na dat je deze week gelezen of gehoord hebt. Gebruik Haberlere göre, één keer -erek, één keer -meden, één keer diye en één lijdende vorm (açıklandı, belirtildi).', model: 'Haberlere göre Hollanda’da trenler dün çalışmadı. Çalışanlar daha yüksek maaş isteyerek greve gitti. Birçok insan bunu bilmeden istasyona gelmiş. Bir kadın «İşe nasıl gideceğim?» diye soruyordu. Grevin yarın da devam edeceği açıklandı. Ben geç kalmayayım diye bisikletle gideceğim.' },
    scenario: { nl: 'Je drinkt thee met je buurvrouw Selin, die altijd het laatste nieuws heeft. Niet alles wat ze vertelt, klopt.', role: 'You are Selin, a neighbour in Ankara who loves discussing the news over tea. Tell the learner a piece of news you saw on social media (using -miş and diye), ask what is in the news in the Netherlands (Hollanda’da gündemde ne var?), ask how they follow the news (Haberleri nasıl takip ediyorsun?), and react when they question your source. Use B1 Turkish with -erek, -meden and diye.', goal: 'Vertel een nieuwsbericht na, vraag naar de bron en zeg hoe jij het nieuws volgt.' }
  });
})(window.SPT);
