/* Turks voor Nederlandstaligen — niveau A2, units 9–10 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── A2 · 9 ───────────────────────── */
  U({
    id: 'tr-a2-09', level: 'A2', icon: '📞', title: 'Alo, kiminle görüşüyorum?', nl: 'Aan de telefoon en afspraken maken',
    goals: ['Een telefoongesprek beginnen en afsluiten', 'Iets aanbieden met -eyim (zal ik…?)', 'Achterzetsels gebruiken: ile, için, hakkında, kadar', 'Een afspraak maken, verzetten en afzeggen'],
    vocab: [
      ['alo', 'hallo (aan de telefoon)'], ['geri aramak', 'terugbellen'], ['telefonu açmak', 'de telefoon opnemen'], ['telefonu kapatmak', 'ophangen'], ['mesaj', 'bericht'], ['mesaj bırakmak', 'een bericht achterlaten'],
      ['numara', 'nummer'], ['yanlış numara', 'verkeerd nummer'], ['meşgul', 'bezet / druk'], ['müsait', 'beschikbaar'], ['toplantı', 'vergadering'], ['görüşme', 'gesprek / afspraak'],
      ['görüşmek', 'elkaar spreken / zien'], ['bağlamak', 'doorverbinden / vastmaken'], ['hatta kalmak', 'aan de lijn blijven'], ['bir dakika', 'een momentje'], ['tekrar', 'opnieuw / nog eens'],
      ['ertelemek', 'uitstellen / verzetten'], ['iptal etmek', 'afzeggen / annuleren'], ['uygun', 'geschikt / passend'], ['takvim', 'agenda / kalender'], ['şarj', 'oplader / batterij'],
      ['çekmek', 'trekken / bereik hebben'], ['ses', 'stem / geluid'], ['yavaş', 'langzaam'], ['hakkında', 'over (een onderwerp)'], ['için', 'voor'], ['göre', 'volgens'], ['kadar', 'tot / ongeveer'],
      ['haber vermek', 'laten weten'], ['bilgi', 'informatie']
    ],
    grammar: [
      { t: 'Zal ik…? Laat mij…: -eyim', es: 'İstek kipi: -eyim',
        html: `<p>Je kent <b>-elim</b> voor «laten we» (A1 unit 10). De ik-vorm is <b>-eyim / -ayım</b>: daarmee bied je aan iets te doen of kondig je aan wat je gaat doen. <i>Ben bak<b>ayım</b>.</i> (Laat mij even kijken.) · <i>Size yardım ed<b>eyim</b>.</i> (Laat mij u helpen.) · <i>Bir dakika, sor<b>ayım</b>.</i> (Momentje, ik vraag het even.)</p>
<p>Na een klinker met y: <i>ara-<b>yayım</b></i> (laat ik bellen), <i>bekle-<b>yeyim</b></i>. In spreektaal hoor je vaak kort <i>arıyım</i>, <i>bakıyım</i>; schrijf de volle vorm.</p>
<p>Als <b>vraag</b> betekent het «zal ik…?»: <i>Sonra ara<b>yayım mı</b>?</i> (Zal ik later bellen?) · <i>Pencereyi aç<b>ayım mı</b>?</i> (Zal ik het raam opendoen?) · <i>Ne yap<b>ayım</b>?</i> (Wat moet ik doen?)</p>
<p>En met <b>-elim</b> als vraag maak je een afspraak: <i>Yarın görüş<b>elim mi</b>?</i> (Zullen we elkaar morgen zien?) · <i>Saat kaçta buluş<b>alım</b>?</i> (Hoe laat zullen we afspreken?)</p>
<p>Ook hier: <i>gitmek</i> → <i>gi<b>d</b>eyim</i>, <i>etmek</i> → <i>e<b>d</b>eyim</i>, <i>yemek</i> → <i>y<b>i</b>yeyim</i>, <i>demek</i> → <i>d<b>i</b>yeyim</i>.</p>`,
        table: [['werkwoord', 'ik (-eyim)', 'wij (-elim)', 'betekenis'], ['bakmak', 'bakayım', 'bakalım', 'laat mij / laten we kijken'], ['aramak', 'arayayım', 'arayalım', 'laat mij / laten we bellen'], ['gitmek', 'gideyim', 'gidelim', 'laat mij / laten we gaan'],
          ['sormak', 'sorayım', 'soralım', 'laat mij / laten we vragen'], ['beklemek', 'bekleyeyim', 'bekleyelim', 'laat mij / laten we wachten']],
        sum: 'Bakayım. Arayayım mı? Görüşelim mi?',
        ex: [['Bir dakika, takvimime bakayım.', 'Momentje, ik kijk even in mijn agenda.'], ['Sizi sonra arayayım mı?', 'Zal ik u later bellen?'], ['Bir not alayım.', 'Ik maak even een notitie.'], ['Bakalım!', 'We zullen zien!']] },
      { t: 'Achterzetsels: ile, için, hakkında, kadar, göre', es: 'Edatlar',
        html: `<p>Nederlands heeft <b>voor</b>zetsels (met Ali), Turks heeft <b>achter</b>zetsels: ze staan na het woord. <i>Ali <b>ile</b></i> (met Ali), <i>Ali <b>için</b></i> (voor Ali), <i>toplantı <b>hakkında</b></i> (over de vergadering).</p>
<p><b>ile</b> (met) plakt meestal vast als <b>-le / -la</b>, na een klinker <b>-yle / -yla</b>: <i>Ali’<b>yle</b></i>, <i>otobüs<b>le</b></i>, <i>arkadaşım<b>la</b></i>.</p>
<p>Sommige achterzetsels vragen een <b>naamval</b> op het woord ervoor:<br>• <b>-e kadar</b> (tot): <i>saat beş<b>e kadar</b></i>, <i>yarın<b>a kadar</b></i><br>• <b>-e göre</b> (volgens): <i>ban<b>a göre</b></i> (volgens mij), <i>doktor<b>a göre</b></i><br>• <b>-den önce / -den sonra</b> (unit 8), <b>-den beri</b> (sinds): <i>pazartesi<b>den beri</b></i></p>
<p><b>⚠️ Uitzondering:</b> bij <b>ile</b>, <b>için</b>, <b>gibi</b> en <b>kadar</b> krijgen de voornaamwoorden <b>-im / -in</b> (de «van»-vorm): <i>ben<b>im</b> için</i> (voor mij), <i>sen<b>in</b>le</i> (met jou), <i>on<b>un</b> gibi</i> (zoals hij), <i>biz<b>im</b> için</i>. Een gewoon naamwoord krijgt niets: <i>Ali için</i>, niet <s>Ali’nin için</s>. En <i>onlar</i> doet ook niet mee: <i>onlar için</i>, <i>onlarla</i>. <b>Waarom?</b> Deze vier achterzetsels waren ooit zelfstandige naamwoorden («ten behoeve van», «gezelschap»), en daar hoorde een bezitter bij. Bij de korte voornaamwoorden is die oude vorm versteend; <i>onlar</i> gedraagt zich door zijn meervoud <i>-lar</i> als een gewoon naamwoord.</p>`,
        table: [['', 'ile (met)', 'için (voor)', 'gibi (zoals)'], ['ben', 'benimle', 'benim için', 'benim gibi'], ['sen', 'seninle', 'senin için', 'senin gibi'], ['o', 'onunla', 'onun için', 'onun gibi'], ['biz', 'bizimle', 'bizim için', 'bizim gibi'],
          ['siz', 'sizinle', 'sizin için', 'sizin gibi'], ['onlar ⚠️', 'onlarla', 'onlar için', 'onlar gibi'], ['Ali', 'Ali’yle', 'Ali için', 'Ali gibi']],
        sum: 'Benimle, senin için, Ali’yle, saat beşe kadar.',
        ex: [['Bu mesaj senin için.', 'Dit bericht is voor jou.'], ['Kiminle görüşüyorum?', 'Met wie spreek ik?'], ['Saat altıya kadar toplantıdayım.', 'Ik zit tot zes uur in een vergadering.'], ['Bana göre perşembe daha uygun.', 'Volgens mij is donderdag geschikter.'], ['Proje hakkında konuşalım.', 'Laten we over het project praten.']] },
      { t: 'Telefoonzinnen en afspraken', es: 'Telefonda',
        html: `<p><b>Opnemen:</b> <i>Alo?</i> · <i>Efendim?</i> (Ja, zegt u het maar?) Zakelijk: <i>Yılmaz Şirketi, buyurun.</i></p>
<p><b>Vragen naar iemand:</b> <i>Elif Hanım’la görüşebilir miyim?</i> (Kan ik mevrouw Elif spreken?) · <i>Kiminle görüşüyorum?</i> (Met wie spreek ik?) — <i>Ben Daan.</i></p>
<p><b>Doorverbinden en wachten:</b> <i>Bir dakika, bağlıyorum.</i> (Momentje, ik verbind u door.) · <i>Hatta kalın, lütfen.</i> (Blijft u aan de lijn.) · <i>Şu an meşgul / toplantıda.</i> · <i>Mesaj bırakmak ister misiniz?</i></p>
<p><b>Slechte verbinding:</b> <i>Sesiniz gelmiyor.</i> (Ik hoor u niet.) · <i>Burası çekmiyor.</i> (Ik heb hier geen bereik.) · <i>Tekrar eder misiniz?</i> (Wilt u het herhalen?) · <i>Daha yavaş konuşur musunuz?</i></p>
<p><b>Afspreken:</b> <i>Ne zaman müsaitsiniz?</i> (Wanneer kunt u?) · <i>Salı günü size uygun mu?</i> (Schikt dinsdag u?) · <i>Randevuyu erteleyebilir miyiz?</i> (Kunnen we de afspraak verzetten?) · <i>Maalesef iptal etmek zorundayım.</i></p>
<p><b>Afsluiten:</b> <i>Görüşmek üzere.</i> (Tot ziens / tot horens.) · <i>İyi günler.</i> · <i>Kendine iyi bak!</i> (Pas goed op jezelf!)</p>`,
        table: [['Turks', 'Nederlands'], ['Efendim?', 'Ja? / Zegt u het maar?'], ['Kiminle görüşüyorum?', 'Met wie spreek ik?'], ['Bir dakika, lütfen.', 'Een momentje, alstublieft.'], ['Sizi sonra arayayım.', 'Ik bel u later wel.'], ['Görüşmek üzere.', 'Tot ziens.']],
        sum: 'Alo? Kiminle görüşüyorum? Görüşmek üzere.',
        ex: [['Elif Hanım’la görüşebilir miyim?', 'Kan ik mevrouw Elif spreken?'], ['Şu an toplantıda, mesaj bırakmak ister misiniz?', 'Ze zit nu in een vergadering, wilt u een bericht achterlaten?'], ['Perşembe günü saat üçte müsait misiniz?', 'Kunt u donderdag om drie uur?']] }
    ],
    dialogue: {
      t: 'Een afspraak verzetten', place: 'İstanbul 🇹🇷',
      lines: [
        ['Sekreter', 'Demir Mimarlık, buyurun.', 'Demir Architecten, zegt u het maar.'],
        ['Jeroen', 'İyi günler. Elif Hanım’la görüşebilir miyim?', 'Goedendag. Kan ik mevrouw Elif spreken?'],
        ['Sekreter', 'Kiminle görüşüyorum?', 'Met wie spreek ik?'],
        ['Jeroen', 'Ben Jeroen Bakker. Yarınki randevu hakkında arıyorum.', 'Met Jeroen Bakker. Ik bel over de afspraak van morgen.'],
        ['Sekreter', 'Bir dakika, bakayım… Maalesef şu an toplantıda. Mesaj bırakmak ister misiniz?', 'Momentje, ik kijk even… Helaas zit ze nu in een vergadering. Wilt u een bericht achterlaten?'],
        ['Jeroen', 'Evet, lütfen. Yarın gelemeyeceğim. Randevuyu erteleyebilir miyiz?', 'Ja, graag. Morgen kan ik niet komen. Kunnen we de afspraak verzetten?'],
        ['Sekreter', 'Tabii. Perşembe günü saat üçte size uygun mu?', 'Natuurlijk. Schikt donderdag om drie uur u?'],
        ['Jeroen', 'Üçte başka bir görüşmem var. Dörde kadar meşgulüm.', 'Om drie uur heb ik een andere afspraak. Ik ben tot vier uur bezet.'],
        ['Sekreter', 'O zaman dört buçuk yazayım mı?', 'Zal ik dan half vijf noteren?'],
        ['Jeroen', 'Çok iyi olur. Benim için fark etmez, Elif Hanım’a uygunsa.', 'Dat zou heel fijn zijn. Voor mij maakt het niet uit, als het mevrouw Elif schikt.'],
        ['Sekreter', 'Tamam, not aldım. Bir değişiklik olursa size haber veririm.', 'Oké, genoteerd. Als er iets verandert, laat ik het u weten.'],
        ['Jeroen', 'Çok teşekkürler. Görüşmek üzere!', 'Hartelijk dank. Tot ziens!']
      ],
      q: [
        { t: 'mc', q: 'Elif Hanım neden telefona gelemiyor?', o: ['Çünkü toplantıda', 'Çünkü hasta', 'Çünkü tatilde'] },
        { t: 'mc', q: 'Jeroen ne istiyor?', o: ['Randevuyu ertelemek', 'Randevuyu iptal etmek', 'Elif Hanım’ın numarasını'] },
        { t: 'mc', q: 'Yeni randevu ne zaman?', o: ['Perşembe dört buçukta', 'Perşembe üçte', 'Yarın dörtte'] }
      ]
    },
    culture: { t: 'Bey en Hanım, en «efendim»', html: `<p>Beleefd aanspreken doe je in Turkije met de <b>voornaam</b> plus <b>Bey</b> (meneer) of <b>Hanım</b> (mevrouw): <i>Mehmet Bey</i>, <i>Elif Hanım</i>. De achternaam gebruik je alleen in heel officiële brieven. Zo noemt ook de directeur zijn secretaresse en omgekeerd.</p>
<p>Het woord <b>efendim</b> (letterlijk: mijn heer) is een duizendpoot. Aan de telefoon betekent het «ja, zegt u het maar», met een vraagtoon «wat zegt u?», en achter een zin is het gewoon beleefd: <i>Buyurun efendim.</i></p>
<p>📱 Turken bellen en appen veel en graag, ook zakelijk via WhatsApp. Een gesprek begint zelden met de zaak zelf: eerst <i>Nasılsınız? İyi misiniz? Aileniz nasıl?</i>, en pas daarna waarvoor je belt. Afsluiten duurt ook even: <i>Hadi görüşürüz, kendine iyi bak, öptüm!</i> (Nou, tot ziens, pas goed op jezelf, kusjes!)</p>` },
    ex: [
      { t: 'cloze', s: 'Bir dakika, takvimime bak___.', h: 'laat mij', a: ['ayım'], o: ['ayım', 'eyim', 'alım'], nl: 'Momentje, ik kijk even in mijn agenda.', tag: 'tr-eyim' },
      { t: 'cloze', s: 'Sizi sonra ara___ mı?', h: 'zal ik', a: ['yayım'], o: ['yayım', 'ayım', 'yeyim'], nl: 'Zal ik u later bellen?', x: 'Na een klinker komt er een y tussen: arayayım.', tag: 'tr-eyim' },
      { t: 'cloze', s: 'Yarın görüş___ mi?', h: 'zullen we', a: ['elim'], o: ['elim', 'eyim', 'alım'], nl: 'Zullen we elkaar morgen zien?', tag: 'tr-eyim' },
      { t: 'mc', q: 'Hoe zeg je «laat mij gaan»?', o: ['gideyim', 'giteyim', 'gidayım'], x: 'gitmek → gideyim: de t wordt d vóór een klinker.', tag: 'tr-eyim' },
      { t: 'mc', q: 'Hoe zeg je «voor mij»?', o: ['benim için', 'ben için', 'bana için'], x: '⚠️ Uitzondering: bij için krijgen de voornaamwoorden de «van»-vorm, omdat için ooit een zelfstandig naamwoord was met een bezitter.', tag: 'tr-achter' },
      { t: 'mc', q: 'Hoe zeg je «met jou»?', o: ['seninle', 'senle', 'sanayla'], x: '⚠️ Uitzondering: sen + ile = seninle, met de «van»-vorm senin.', tag: 'tr-achter' },
      { t: 'mc', q: 'Hoe zeg je «voor hen»?', o: ['onlar için', 'onların için', 'onlara için'], x: '⚠️ Uitzondering op de uitzondering: onlar krijgt géén -ın, want door zijn meervoud -lar gedraagt het zich als een gewoon naamwoord.', tag: 'tr-achter' },
      { t: 'cloze', s: 'Bu çiçekler Elif ___.', h: 'voor', a: ['için'], o: ['için', 'ile', 'kadar'], nl: 'Deze bloemen zijn voor Elif.', x: 'Een naam krijgt niets vóór için.', tag: 'tr-achter' },
      { t: 'cloze', s: 'Saat beş___ kadar toplantıdayım.', a: ['e'], o: ['e', 'te', 'ten'], nl: 'Ik zit tot vijf uur in een vergadering.', x: '«Tot» is -e kadar.', tag: 'tr-achter' },
      { t: 'cloze', s: 'Ban___ göre bu saat uygun değil.', a: ['a'], o: ['a', 'im', 'dan'], nl: 'Volgens mij is dit tijdstip niet geschikt.', tag: 'tr-achter' },
      { t: 'cloze', s: 'Randevu ___ arıyorum.', h: 'over', a: ['hakkında'], o: ['hakkında', 'için de', 'kadar'], nl: 'Ik bel over de afspraak.', tag: 'tr-achter' },
      { t: 'mc', q: 'Wat zeg je als je de telefoon opneemt?', o: ['Efendim?', 'Görüşmek üzere.', 'Kolay gelsin.'], tag: 'vocab' },
      { t: 'mc', q: 'Wat betekent «Hatta kalın, lütfen»?', o: ['Blijft u aan de lijn.', 'Hangt u maar op.', 'Belt u later terug.'], tag: 'vocab' },
      { t: 'tr', nl: 'Met wie spreek ik?', a: ['Kiminle görüşüyorum?', 'Kiminle konuşuyorum?'], tag: 'tr-achter' },
      { t: 'tr', nl: 'Kunnen we de afspraak verzetten?', a: ['Randevuyu erteleyebilir miyiz?', 'Görüşmeyi erteleyebilir miyiz?'], tag: 'tr-mogen' },
      { t: 'tr', nl: 'Zal ik je morgen bellen?', a: ['Yarın seni arayayım mı?', 'Seni yarın arayayım mı?', 'Yarın arayayım mı?'], tag: 'tr-eyim' },
      { t: 'order', s: 'Perşembe günü saat üçte sizin için uygun mu?', nl: 'Schikt donderdag om drie uur u?', tag: 'tr-achter' },
      { t: 'match', p: [['meşgul', 'bezet'], ['müsait', 'beschikbaar'], ['ertelemek', 'uitstellen'], ['iptal etmek', 'afzeggen'], ['toplantı', 'vergadering'], ['mesaj', 'bericht']], tag: 'vocab' }
    ],
    reading: {
      t: 'Sesli mesajlar', type: 'Voicemail',
      p: [
        ['«Merhaba Daan, ben Selin. Seni iki kez aradım, ama telefonun kapalıydı. Cumartesi akşamı için planımız hâlâ geçerli mi? Beni ara, öptüm!»', '«Hoi Daan, met Selin. Ik heb je twee keer gebeld, maar je telefoon stond uit. Gaat ons plan voor zaterdagavond nog door? Bel me, kusjes!»'],
        ['«İyi günler Daan Bey, diş hekimi Kaya’nın muayenehanesinden arıyorum. Salı günkü randevunuzu çarşambaya ertelemek zorundayız. Sizin için uygun mu? Lütfen bize haber verin.»', '«Goedendag meneer Daan, ik bel van de praktijk van tandarts Kaya. We moeten uw afspraak van dinsdag naar woensdag verzetten. Schikt dat u? Laat het ons alstublieft weten.»'],
        ['«Alo, Daan? Ben annen. Sana göre saat kaç bilmiyorum, ama burada akşam oldu. Müsait olunca ara, seninle bir şey hakkında konuşmak istiyorum. Merak etme, kötü bir şey değil!»', '«Hallo, Daan? Met je moeder. Ik weet niet hoe laat het bij jou is, maar hier is het avond geworden. Bel als je tijd hebt, ik wil met je over iets praten. Maak je geen zorgen, het is niets ergs!»']
      ],
      gl: [['kapalı', 'uit / dicht'], ['geçerli', 'geldig'], ['hâlâ', 'nog steeds'], ['muayenehane', 'praktijk'], ['merak etmek', 'zich zorgen maken']],
      q: [
        { t: 'mc', q: 'Selin neden mesaj bıraktı?', o: ['Çünkü Daan’ın telefonu kapalıydı', 'Çünkü hastaydı', 'Çünkü randevuyu iptal etti'] },
        { t: 'mc', q: 'Diş hekimi randevuyu hangi güne erteledi?', o: ['Çarşambaya', 'Salıya', 'Cumartesiye'] },
        { t: 'mc', q: 'Daan’ın annesi ne istiyor?', o: ['Onunla bir şey hakkında konuşmak', 'Onu ziyaret etmek', 'Randevu almak'] }
      ]
    },
    say: [['Alo, kiminle görüşüyorum?', 'Hallo, met wie spreek ik?'], ['Elif Hanım’la görüşebilir miyim?', 'Kan ik mevrouw Elif spreken?'], ['Sizi sonra arayayım mı?', 'Zal ik u later bellen?'], ['Randevuyu erteleyebilir miyiz?', 'Kunnen we de afspraak verzetten?'], ['Görüşmek üzere!', 'Tot ziens!']],
    task: { nl: 'Spreek een voicemail in van 5 zinnen voor een Turkse kennis: zeg wie je bent, waarover je belt (hakkında), dat je een afspraak wilt verzetten, wanneer je wel kunt (-e kadar, müsait) en bied aan om later terug te bellen (-eyim).', model: 'Merhaba Elif Hanım, ben Sanne. Cuma günkü toplantı hakkında arıyorum. Maalesef cuma gelemeyeceğim, erteleyebilir miyiz? Pazartesi saat ikiye kadar müsaitim. Sizi akşam tekrar arayayım. Görüşmek üzere!' },
    scenario: { nl: 'Je belt naar een kantoor in İstanbul om een afspraak te verzetten. De secretaresse neemt op.', role: 'You are the secretary of an architecture office in İstanbul. Answer the phone (Demir Mimarlık, buyurun), ask who is calling (Kiminle görüşüyorum?), say that Elif Hanım is in a meeting, offer to take a message, and help reschedule the appointment by proposing days and times (Perşembe size uygun mu? Dört buçuk yazayım mı?). Use simple A2 Turkish with the polite siz form.', goal: 'Zeg wie je bent, verzet de afspraak naar een moment dat je kunt en sluit beleefd af.' }
  });

  /* ───────────────────────── A2 · 10 ───────────────────────── */
  U({
    id: 'tr-a2-10', level: 'A2', icon: '🎉', title: 'Bayramınız kutlu olsun!', nl: 'Feest: vergelijken, zowel… als, niemand',
    goals: ['Over feestdagen, bruiloften en verjaardagen praten', 'Vergelijken met kadar (even… als) en gibi (zoals)', 'Zinnen verbinden met hem… hem, ya… ya en ne… ne', 'Zeggen dat er niemand, niets of nooit iets is met hiç'],
    vocab: [
      ['bayram', 'feest / feestdag'], ['kutlamak', 'vieren / feliciteren'], ['kutlu olsun', 'gefeliciteerd'], ['düğün', 'bruiloft'], ['nişan', 'verloving'], ['gelin', 'bruid'], ['damat', 'bruidegom'],
      ['evlenmek', 'trouwen'], ['doğum günü', 'verjaardag'], ['pasta', 'taart'], ['mum', 'kaars'], ['lokum', 'Turks fruit'], ['davetiye', 'uitnodiging'], ['davetli', 'genodigde'],
      ['akraba', 'familielid'], ['büyükler', 'de ouderen'], ['el öpmek', 'de hand kussen'], ['harçlık', 'zakgeld'], ['altın', 'goud'], ['takmak', 'opspelden / omdoen'], ['halay', 'kringdans'],
      ['müzik', 'muziek'], ['kalabalık', 'druk / menigte'], ['herkes', 'iedereen'], ['hiç kimse', 'niemand'], ['hiçbir şey', 'niets'], ['hiçbir yer', 'nergens'], ['her şey', 'alles'],
      ['bazıları', 'sommigen'], ['aynı', 'dezelfde / hetzelfde'], ['farklı', 'anders / verschillend'], ['gelenek', 'traditie']
    ],
    grammar: [
      { t: 'Even… als en zoals: kadar en gibi', es: 'Kadar ve gibi',
        html: `<p>Je kent <i>daha</i> (meer) en <i>en</i> (meest) uit A1. Voor «<b>even … als</b>» gebruik je <b>kadar</b> achter het woord waarmee je vergelijkt: <i>Düğün bayram <b>kadar</b> kalabalıktı.</i> (De bruiloft was even druk als het feest.) · <i>Ali <b>kadar</b> uzun değilim.</i> (Ik ben niet zo lang als Ali.)</p>
<p><b>gibi</b> betekent «zoals, als»: het vergelijkt de manier, niet de hoeveelheid: <i>Kardeşim <b>gibi</b> konuşuyorsun.</i> (Je praat zoals mijn broer.) · <i>Bal <b>gibi</b> tatlı.</i> (Zo zoet als honing.) · <i>Senin <b>gibi</b> bir arkadaş…</i> (Een vriend als jij…)</p>
<p>Denk aan unit 9: voornaamwoorden krijgen hier <b>-im / -in</b>: <i>benim kadar</i>, <i>senin gibi</i>, <i>onun kadar</i>.</p>
<p><b>Hetzelfde en anders:</b> <i><b>aynı</b></i> (dezelfde): <i>Aynı yaştayız.</i> (We zijn even oud.) · <i>-den <b>farklı</b></i> (anders dan): <i>Türk düğünleri Hollanda düğünlerin<b>den farklı</b>.</i></p>
<p><b>Kadar</b> heeft nog twee betekenissen die je al kent: <i>saat beş<b>e kadar</b></i> (tot vijf uur) en <i>yüz kişi <b>kadar</b></i> (ongeveer honderd mensen). Zonder naamval = «zo veel als» of «ongeveer»; met <b>-e</b> = «tot».</p>`,
        table: [['Turks', 'Nederlands'], ['Ali kadar uzun', 'even lang als Ali'], ['Ali’den daha uzun', 'langer dan Ali'], ['Ali gibi', 'zoals Ali'], ['benim kadar', 'evenveel als ik'], ['aynı', 'dezelfde / hetzelfde'], ['-den farklı', 'anders dan']],
        sum: 'Ali kadar uzun. Senin gibi. Aynı yaştayız.',
        ex: [['Bu pasta annemin pastası kadar güzel.', 'Deze taart is even lekker als die van mijn moeder.'], ['Senin gibi dans edemem.', 'Ik kan niet dansen zoals jij.'], ['Düğünde beş yüz kişi kadar vardı.', 'Op de bruiloft waren ongeveer vijfhonderd mensen.']] },
      { t: 'Zowel… als, of… of, noch… noch', es: 'Hem… hem, ya… ya, ne… ne',
        html: `<p>Drie paren verbinden twee dingen:</p>
<p>• <b>hem … hem (de)</b> = zowel … als: <i><b>Hem</b> dans ettik <b>hem de</b> şarkı söyledik.</i> (We hebben zowel gedanst als gezongen.)<br>• <b>ya … ya (da)</b> = of … of: <i><b>Ya</b> cumartesi <b>ya da</b> pazar gelirim.</i> (Ik kom óf zaterdag óf zondag.)<br>• <b>ne … ne (de)</b> = noch … noch: <i><b>Ne</b> çay <b>ne de</b> kahve içerim.</i> (Ik drink thee noch koffie.)</p>
<p><b>⚠️ Uitzondering:</b> na <b>ne … ne</b> blijft het werkwoord <b>bevestigend</b>: <i>Ne et ne balık <b>yerim</b>.</i> (Ik eet geen vlees en geen vis.), niet <s>yemem</s>. Dat is anders dan bij <i>hiç</i>, waar het werkwoord juist ontkennend moet zijn. <b>Waarom?</b> <i>Ne … ne</i> komt uit het Perzisch en draagt de ontkenning zelf al in zich; een tweede ontkenning zou die opheffen. <i>Hiç</i> is alleen een versterker («ooit, ook maar») en heeft de ontkenning van het werkwoord nodig. In spreektaal hoor je na <i>ne … ne</i> soms toch een ontkenning; in verzorgd Turks is dat fout.</p>
<p>Andere handige verbinders: <b>ama / fakat</b> (maar), <b>çünkü</b> (want), <b>bu yüzden / onun için</b> (daarom), <b>yoksa</b> (anders / of toch), <b>hatta</b> (zelfs), <b>ayrıca</b> (bovendien).</p>`,
        table: [['paar', 'betekenis', 'werkwoord'], ['hem … hem de', 'zowel … als', 'bevestigend'], ['ya … ya da', 'of … of', 'bevestigend'], ['ne … ne de ⚠️', 'noch … noch', 'bevestigend!'], ['hiç … (niet)', 'nooit / helemaal niet', 'ontkennend']],
        sum: 'Hem… hem de, ya… ya da, ne… ne de.',
        ex: [['Gelin hem güzel hem de çok mutluydu.', 'De bruid was zowel mooi als heel gelukkig.'], ['Ya sen gel ya da ben geleyim.', 'Of jij komt, of ik kom.'], ['Bayramda ne annem ne de babam çalışır.', 'Met het feest werkt mijn moeder noch mijn vader.']] },
      { t: 'Niemand, niets, nooit: hiç + ontkenning', es: 'Belgisiz zamirler',
        html: `<p>«Niemand», «niets» en «nergens» maak je met <b>hiç</b> + een <b>ontkennend</b> werkwoord. Turks zegt dus letterlijk «niemand kwam niet»:</p>
<p><i><b>Hiç kimse</b> gel<b>me</b>di.</i> (Er kwam niemand.) · <i><b>Hiçbir şey</b> ye<b>me</b>dim.</i> (Ik heb niets gegeten.) · <i><b>Hiçbir yere</b> git<b>mi</b>yoruz.</i> (We gaan nergens heen.) · <i><b>Hiç</b> param <b>yok</b>.</i> (Ik heb helemaal geen geld.)</p>
<p><b>Hiçbir</b> (geen enkele) staat vóór een naamwoord in het enkelvoud: <i>hiçbir davetli</i>, <i>hiçbir zaman</i> (nooit).</p>
<p>In een <b>vraag</b> betekent <i>hiç</i> «ooit»: <i><b>Hiç</b> Türk düğününe gittin <b>mi</b>?</i> (Ben je ooit naar een Turkse bruiloft geweest?) — <i>Hayır, hiç gitmedim.</i> (Nee, nog nooit.)</p>
<p>De tegenhangers: <b>herkes</b> (iedereen), <b>her şey</b> (alles), <b>her yer</b> (overal), <b>biri / birisi</b> (iemand), <b>bir şey</b> (iets), <b>bazıları</b> (sommigen). Let op: <i>herkes</i> krijgt een werkwoord in het <b>enkelvoud</b>: <i>Herkes gel<b>di</b>.</i></p>`,
        table: [['alles / ieder', 'iets / iemand', 'niets / niemand (+ ontkenning)'], ['herkes', 'biri', 'hiç kimse'], ['her şey', 'bir şey', 'hiçbir şey'], ['her yer', 'bir yer', 'hiçbir yer'], ['her zaman', 'bazen', 'hiçbir zaman']],
        sum: 'Hiç kimse gelmedi. Hiçbir şey yemedim.',
        ex: [['Düğünde hiç kimseyi tanımıyordum.', 'Ik kende niemand op de bruiloft.'], ['Hiçbir şey anlamadım.', 'Ik heb er niets van begrepen.'], ['Hiç baklava yedin mi?', 'Heb je ooit baklava gegeten?'], ['Herkes çok eğlendi.', 'Iedereen heeft het erg naar zijn zin gehad.']] }
    ],
    dialogue: {
      t: 'Na de bruiloft', place: 'Gaziantep 🇹🇷',
      lines: [
        ['Zeynep', 'Düğün nasıldı? Hiç Türk düğününe gittin mi daha önce?', 'Hoe was de bruiloft? Was je ooit eerder naar een Turkse bruiloft geweest?'],
        ['Thijs', 'Hayır, hiç gitmedim. İnanılmazdı! Beş yüz kişi kadar vardı.', 'Nee, nog nooit. Het was ongelooflijk! Er waren ongeveer vijfhonderd mensen.'],
        ['Zeynep', 'Bizim için normal! Hollanda’da düğünler bu kadar kalabalık değil mi?', 'Voor ons is dat normaal! Zijn bruiloften in Nederland niet zo druk?'],
        ['Thijs', 'Hayır, çok farklı. Bizde genellikle elli ya da yüz kişi olur.', 'Nee, heel anders. Bij ons zijn er meestal vijftig of honderd mensen.'],
        ['Zeynep', 'Dans ettin mi?', 'Heb je gedanst?'],
        ['Thijs', 'Hem halay çektim hem de şarkı söyledim! Ama senin kuzenin gibi dans edemiyorum.', 'Ik heb zowel de halay gedanst als gezongen! Maar ik kan niet dansen zoals jouw neef.'],
        ['Zeynep', 'Hiç kimse onun kadar iyi dans edemez. Geline altın taktın mı?', 'Niemand kan zo goed dansen als hij. Heb je de bruid goud opgespeld?'],
        ['Thijs', 'Evet, küçük bir altın. Herkes takıyordu, ben de taktım.', 'Ja, een klein goudstukje. Iedereen deed het, dus ik ook.'],
        ['Zeynep', 'Aferin! Yemekler nasıldı?', 'Goed zo! Hoe was het eten?'],
        ['Thijs', 'Harikaydı. Ama o kadar çok yedim ki bugün hiçbir şey yiyemiyorum!', 'Geweldig. Maar ik heb zo veel gegeten dat ik vandaag niets kan eten!']
      ],
      q: [
        { t: 'mc', q: 'Düğünde kaç kişi vardı?', o: ['Beş yüz kişi kadar', 'Elli kişi kadar', 'Yüz kişi kadar'] },
        { t: 'mc', q: 'Thijs düğünde ne yaptı?', o: ['Hem dans etti hem de şarkı söyledi', 'Ne dans etti ne de şarkı söyledi', 'Sadece yemek yedi'] },
        { t: 'mc', q: 'Thijs geline ne taktı?', o: ['Küçük bir altın', 'Çiçek', 'Hiçbir şey'] }
      ]
    },
    culture: { t: 'Bayram en de Turkse bruiloft', html: `<p>Turkije kent twee grote religieuze feesten. Het <b>Ramazan Bayramı</b> (Suikerfeest, ook <i>Şeker Bayramı</i>) sluit de vastenmaand af; het <b>Kurban Bayramı</b> (Offerfeest) valt ongeveer zeventig dagen later. Je wenst elkaar <i>Bayramınız kutlu olsun!</i> of <i>İyi bayramlar!</i></p>
<p>Op de eerste dag bezoek je de oudsten van de familie. Kinderen en jongeren <b>kussen de hand</b> van opa en oma en brengen die naar hun voorhoofd (<i>el öpmek</i>); in ruil krijgen ze <b>harçlık</b> (zakgeld) en snoep. Overal staat baklava en <i>kolonya</i> klaar.</p>
<p>💍 Een <b>düğün</b> is groot: honderden gasten zijn normaal. Hoogtepunt is de <b>takı töreni</b>: gasten spelden om de beurt <b>goud</b> of geld op bruid en bruidegom. Daarna dansen in een kring: de <b>halay</b>. Je wenst het paar: <i>Bir yastıkta kocayın!</i> (Word samen oud op één kussen!)</p>
<p>En op 23 april vieren kinderen hun eigen nationale feestdag, het <i>Çocuk Bayramı</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Ben Ali ___ uzun değilim.', h: 'even… als', a: ['kadar'], o: ['kadar', 'gibi', 'daha'], nl: 'Ik ben niet zo lang als Ali.', tag: 'tr-gibi' },
      { t: 'cloze', s: 'Kardeşim ___ konuşuyorsun.', h: 'zoals', a: ['gibi'], o: ['gibi', 'kadar', 'için'], nl: 'Je praat zoals mijn broer.', tag: 'tr-gibi' },
      { t: 'mc', q: 'Hoe zeg je «zoals jij»?', o: ['senin gibi', 'sen gibi', 'sana gibi'], x: 'Bij gibi krijgen de voornaamwoorden de «van»-vorm (unit 9).', tag: 'tr-gibi' },
      { t: 'cloze', s: 'Düğünde yüz kişi ___ vardı.', h: 'ongeveer', a: ['kadar'], o: ['kadar', 'gibi', 'daha'], nl: 'Op de bruiloft waren ongeveer honderd mensen.', tag: 'tr-gibi' },
      { t: 'cloze', s: '___ dans ettik hem de şarkı söyledik.', a: ['Hem'], o: ['Hem', 'Ne', 'Ya'], nl: 'We hebben zowel gedanst als gezongen.', tag: 'tr-hem' },
      { t: 'cloze', s: 'Ya cumartesi ___ pazar gelirim.', a: ['ya da'], o: ['ya da', 'hem de', 'ne de'], nl: 'Ik kom óf zaterdag óf zondag.', tag: 'tr-hem' },
      { t: 'mc', q: 'Welke zin is goed: «Ik drink thee noch koffie»?', o: ['Ne çay ne de kahve içerim.', 'Ne çay ne de kahve içmem.', 'Hem çay hem de kahve içmem.'], x: '⚠️ Uitzondering: na ne … ne blijft het werkwoord bevestigend, want ne … ne (uit het Perzisch) is zelf al de ontkenning.', tag: 'tr-hem' },
      { t: 'mc', q: 'Welke zin is goed: «Er kwam niemand»?', o: ['Hiç kimse gelmedi.', 'Hiç kimse geldi.', 'Ne kimse geldi.'], x: 'Bij hiç moet het werkwoord ontkennend zijn; hiç is alleen een versterker.', tag: 'tr-hic' },
      { t: 'cloze', s: 'Hiçbir şey ye___dim.', a: ['me'], o: ['me', 'ma', 'di'], nl: 'Ik heb niets gegeten.', tag: 'tr-hic' },
      { t: 'cloze', s: '___ Türk düğününe gittin mi?', h: 'ooit', a: ['Hiç'], o: ['Hiç', 'Her', 'Hem'], nl: 'Ben je ooit naar een Turkse bruiloft geweest?', x: 'In een vraag betekent hiç «ooit».', tag: 'tr-hic' },
      { t: 'cloze', s: 'Herkes çok eğlen___.', a: ['di'], o: ['di', 'diler', 'dik'], nl: 'Iedereen heeft het erg naar zijn zin gehad.', x: 'Herkes krijgt een werkwoord in het enkelvoud.', tag: 'tr-hic' },
      { t: 'mc', q: 'Wat zeg je met het Suikerfeest?', o: ['Bayramınız kutlu olsun!', 'Geçmiş olsun!', 'Kolay gelsin!'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik heb niets begrepen.', a: ['Hiçbir şey anlamadım.', 'Hiç anlamadım.'], tag: 'tr-hic' },
      { t: 'tr', nl: 'Niemand is gekomen.', a: ['Hiç kimse gelmedi.', 'Kimse gelmedi.'], tag: 'tr-hic' },
      { t: 'tr', nl: 'Ik kan niet dansen zoals jij.', a: ['Senin gibi dans edemem.', 'Senin gibi dans edemiyorum.', 'Ben senin gibi dans edemem.'], tag: 'tr-gibi' },
      { t: 'order', s: 'Bayramda hem akrabalarımızı ziyaret ederiz hem de tatlı yeriz.', nl: 'Met het feest bezoeken we zowel onze familie als eten we zoetigheid.', tag: 'tr-hem' },
      { t: 'match', p: [['herkes', 'iedereen'], ['hiç kimse', 'niemand'], ['her şey', 'alles'], ['hiçbir şey', 'niets'], ['düğün', 'bruiloft'], ['doğum günü', 'verjaardag']], tag: 'vocab' }
    ],
    reading: {
      t: 'Bayram sabahı', type: 'Dagboek',
      p: [
        ['Bugün Ramazan Bayramı’nın ilk günü. Sabah erkenden kalktık; evde hiç kimse uyumuyordu.', 'Vandaag is de eerste dag van het Suikerfeest. We zijn ’s ochtends heel vroeg opgestaan; thuis sliep niemand.'],
        ['Önce büyüklerin elini öptük. Dedem hem bana hem de kardeşime harçlık verdi. Kardeşim benim kadar para aldı, ama o daha çok şeker yedi!', 'Eerst hebben we de hand van de ouderen gekust. Mijn opa gaf zowel mij als mijn broertje zakgeld. Mijn broertje kreeg evenveel geld als ik, maar hij at meer snoep!'],
        ['Öğleden sonra akrabalarımızı ziyaret ettik. Her evde ya baklava ya da lokum vardı. Hiçbir evde «hayır» diyemedim.', '’s Middags hebben we onze familie bezocht. In elk huis was er of baklava of Turks fruit. In geen enkel huis kon ik «nee» zeggen.'],
        ['Akşam o kadar yorgundum ki ne televizyon izledim ne de telefonuma baktım. Bayram gibisi yok!', '’s Avonds was ik zo moe dat ik geen televisie heb gekeken en ook niet op mijn telefoon. Er gaat niets boven het feest!']
      ],
      gl: [['erkenden', 'heel vroeg'], ['dede', 'opa'], ['lokum', 'Turks fruit'], ['gibisi yok', 'er gaat niets boven']],
      q: [
        { t: 'mc', q: 'Dede kime harçlık verdi?', o: ['Hem yazara hem de kardeşine', 'Sadece kardeşine', 'Hiç kimseye'] },
        { t: 'mc', q: 'Evlerde ne vardı?', o: ['Ya baklava ya da lokum', 'Sadece çay', 'Hiçbir şey'] },
        { t: 'mc', q: 'Yazar akşam ne yaptı?', o: ['Ne televizyon izledi ne de telefonuna baktı', 'Hem televizyon izledi hem de telefonuna baktı', 'Akrabalarını ziyaret etti'] }
      ]
    },
    say: [['Bayramınız kutlu olsun!', 'Fijne feestdagen!'], ['Doğum günün kutlu olsun!', 'Gefeliciteerd met je verjaardag!'], ['Hiçbir şey anlamadım.', 'Ik heb er niets van begrepen.'], ['Senin gibi dans edemem.', 'Ik kan niet dansen zoals jij.'], ['Hem dans ettik hem de şarkı söyledik.', 'We hebben zowel gedanst als gezongen.']],
    task: { nl: 'Beschrijf in 5 of 6 zinnen een feest waar je bent geweest (bruiloft, verjaardag, feestdag). Gebruik minstens één keer kadar of gibi, één keer hem… hem de of ne… ne de, en één keer hiç kimse of hiçbir şey.', model: 'Geçen ay arkadaşımın düğününe gittim. İki yüz kişi kadar vardı. Hem çok dans ettik hem de çok güldük. Gelin bir prenses gibi güzeldi. Hiç kimse erken gitmedi. Ertesi gün o kadar yorgundum ki hiçbir şey yapamadım!' },
    scenario: { nl: 'Zeynep uit Gaziantep wil alles weten over feesten in Nederland en vertelt over de Turkse.', role: 'You are Zeynep, a cheerful friend from Gaziantep. Ask the learner about a celebration they attended (Düğün nasıldı? Kaç kişi vardı? Dans ettin mi?), compare Turkish and Dutch weddings and holidays using kadar, gibi and -den farklı, ask whether they have ever (hiç) been to a Turkish wedding or bayram, and explain traditions like altın takmak and el öpmek. Use simple A2 Turkish.', goal: 'Vertel over een feest, vergelijk het met Turkije en zeg wat je nog nooit hebt gedaan.' }
  });
})(window.SPT);
