/* Uitbreiding «Op reis», verdieping per land (Turks): bij elk land een eigen dialoog en een eigen gesprek met de docent.
   Zelfde vorm als content/landen-praten.js (Spaans). Sanne is de bezoeker (me) en praat het Turks van de basiscursus (Turkije);
   de ander praat zoals in het land. Uitleg: 🗺️ lokaal woord + standaardwoord, of «⚠️ Uitzondering» met de reden. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('tr-nl')) return;
  const add = (id, x) => { const p = (S.places || []).find(q => q.id === id); if (p) { x.dialog.me = 'Sanne'; Object.assign(p, x); } };
  const LOC = (w, land, neu) => '🗺️ <b>' + w + '</b>: zo zeggen ze het in ' + land + '. Standaard: <b>' + neu + '</b>.';
  const UITZ = (vorm, neu, uitleg, reden) => '⚠️ <b>Uitzondering:</b> <b>' + vorm + '</b> in plaats van <b>' + neu + '</b>. ' + uitleg + ' Reden: ' + reden;
  const Q = (q, a, b, c) => ({ t: 'mc', q, o: [a, b, c] });

  add('tr', {
    dialog: { t: 'N’aber?', nl: 'Emre zet thee en praat zoals op straat in Istanbul.', place: 'İstanbul 🇹🇷', who: { Emre: 'm', Sanne: 'f' },
      lines: [
        ['Emre', 'Merhaba Sanne! N’aber?', 'Hallo Sanne! Hoe is het?', LOC('n’aber?', 'Turkije (spreektaal)', 'nasılsın?') + ' Het is kort voor «ne haber?» (wat voor nieuws?).'],
        ['Sanne', 'Merhaba Emre! İyiyim, teşekkürler. Sen nasılsın?', 'Hallo Emre! Goed, dank je. Hoe gaat het met jou?'],
        ['Emre', 'İyiyim, valla. Şimdi çay yapıyom, ister misin?', 'Goed, echt waar. Ik zet nu thee, wil je ook?', UITZ('yapıyom', 'yapıyorum', 'In spreektaal wordt -yorum vaak -yom: geliyom, yapıyom.', 'de r aan het eind van een lettergreep slijt weg als je snel praat. Je schrijft altijd -yorum.') + '<br>' + LOC('valla', 'Turkije (spreektaal)', 'gerçekten')],
        ['Sanne', 'Evet, lütfen! Çok güzel kokuyor.', 'Ja, graag! Het ruikt heerlijk.'],
        ['Emre', 'Bi dakika, hemen geliyor. Annem de börek yaptı.', 'Momentje, het komt eraan. Mijn moeder heeft ook börek gemaakt.', LOC('bi dakika', 'Turkije (spreektaal)', 'bir dakika')],
        ['Sanne', 'Börek çok güzel! Annenin eline sağlık.', 'De börek is heerlijk! Dank aan je moeder voor het koken.', '🗺️ <b>eline sağlık</b>: letterlijk «gezondheid aan je hand». Dat zeg je tegen wie gekookt heeft. Het Turks heeft voor bijna elke situatie zo’n vaste wens.'],
        ['Emre', 'Aynen! Yarın işe gidiyor musun?', 'Precies! Ga je morgen naar je werk?', LOC('aynen', 'Turkije (spreektaal)', 'evet, doğru')],
        ['Sanne', 'Evet, yarın çok işim var.', 'Ja, morgen heb ik veel werk.'],
        ['Emre', 'Kolay gelsin! Akşam görüşürüz, inşallah.', 'Succes ermee! Tot vanavond, hopelijk.', '🗺️ <b>kolay gelsin</b>: «moge het je makkelijk afgaan». Je zegt het tegen iedereen die werkt of gaat werken.<br>🗺️ <b>inşallah</b>: als God het wil, hopelijk.']
      ],
      q: [Q('«N’aber?» ne demek?', 'Nasılsın?', 'Nerelisin?', 'Kaç yaşındasın?'), Q('Emre ne yapıyor?', 'Çay', 'Kahve', 'Çorba'), Q('Böreği kim yaptı?', 'Emre’nin annesi', 'Sanne', 'Emre')] },
    talk: { title: 'Op de markt', place: 'Kadıköy, İstanbul', nl: 'Je docent speelt Hasan Amca, groenteman op de markt.', goal: 'Koop groente en fruit, vraag wat het kost en wens hem succes met zijn werk.',
      role: 'You are Hasan Amca, a cheerful greengrocer at the market in Kadıköy, Istanbul. You call out your prices in lira, call the customer "abla" or "abi", say "buyur" and "başka?", let them taste a tomato, and answer "kolay gelsin" with "sağ ol".',
      local: 'Everyday spoken Turkish of Turkey: n’aber, aynen, valla, bi dakika, tamamdır, a light touch of -yom / -icem, fixed wishes (kolay gelsin, hayırlı olsun, eline sağlık, afiyet olsun)' }
  });

  add('cy', {
    dialog: { t: 'Napan?', nl: 'Op Cyprus heet een vork geen çatal en een citroen geen limon.', place: 'Lefkoşa 🇨🇾', who: { Hasan: 'm', Sanne: 'f' },
      lines: [
        ['Hasan', 'Merhaba Sanne! Napan?', 'Hallo Sanne! Hoe is het?', LOC('napan?', 'Cyprus', 'ne yapıyorsun? / nasılsın?')],
        ['Sanne', 'Merhaba Hasan! «Napan» ne demek?', 'Hallo Hasan! Wat betekent «napan»?'],
        ['Hasan', '«Ne yapıyorsun, nasılsın?» demek. Kıbrıs’ta böyle deriz be!', 'Het betekent «wat doe je, hoe gaat het?». Zo zeggen we dat op Cyprus, joh!', '🗺️ <b>be</b>: een woordje voor nadruk, zoals ons «joh» of «zeg».'],
        ['Sanne', 'Anladım! İyiyim, teşekkürler. Ne yiyoruz?', 'Begrepen! Goed, dank je. Wat eten we?'],
        ['Hasan', 'Hellim var, ekmek var. Bir de bulli yaptım.', 'Er is hellim, er is brood. En ik heb ook kip gemaakt.', '🗺️ <b>hellim</b>: de kaas van Cyprus, bij ons bekend als halloumi.<br>' + LOC('bulli', 'Cyprus', 'tavuk')],
        ['Sanne', 'Bulli mi? O ne?', 'Bulli? Wat is dat?'],
        ['Hasan', 'Tavuk! Al, piron da burada.', 'Kip! Hier, de vork ligt hier ook.', UITZ('piron', 'çatal', 'Op Cyprus heet een vork piron.', 'het woord komt uit het Grieks (pirouni). Turken en Grieken wonen al eeuwen samen op het eiland en lenen woorden van elkaar.')],
        ['Sanne', 'Çatal, değil mi? Teşekkürler! Limon var mı?', 'Een vork, toch? Dank je! Is er citroen?'],
        ['Hasan', 'Biz «ekşi» deriz. Gel, barabar yiyelim!', 'Wij zeggen «ekşi». Kom, laten we samen eten!', UITZ('ekşi', 'limon', 'Op Cyprus is ekşi (letterlijk: zuur) het woord voor citroen.', 'de vrucht is genoemd naar haar smaak; in Turkije is ekşi alleen het bijvoeglijk naamwoord «zuur».') + '<br>' + LOC('barabar', 'Cyprus', 'beraber')]
      ],
      q: [Q('«Napan?» ne demek?', 'Nasılsın?', 'Nerelisin?', 'Adın ne?'), Q('«Bulli» ne demek?', 'Tavuk', 'Balık', 'Peynir'), Q('Kıbrıs’ta limona ne derler?', 'Ekşi', 'Piron', 'Hellim')] },
    talk: { title: 'In het restaurant aan de haven', place: 'Girne', nl: 'Je docent speelt Ali Dayı, eigenaar van een restaurantje aan de haven.', goal: 'Bestel hellim en şeftali kebabı, en vraag wat dat eigenlijk is.',
      role: 'You are Ali Dayı, owner of a small restaurant at the harbor of Girne (Kyrenia) in Northern Cyprus. You are relaxed and hospitable. You greet with "Napan?", add "be" for emphasis, recommend grilled hellim and şeftali kebabı (and explain there is no peach in it; people say the name comes from a cook called "Şef Ali"), and are in no hurry at all.',
      local: 'Cypriot Turkish, lightly: napan?, be, hellim, bulli, piron, ekşi (lemon), barabar, k sounding like g (gardaş). Keep the sentences themselves in understandable standard Turkish.' }
  });

  add('bg', {
    dialog: { t: 'Ayde, mari!', nl: 'Bij İsmail in Kırcaali klinkt het Turks zoals op de Balkan.', place: 'Kırcaali 🇧🇬', who: { 'İsmail': 'm', Sanne: 'f' },
      lines: [
        ['İsmail', 'Merhaba Sanne! Hoş geldin, mari!', 'Hallo Sanne! Welkom, zeg!', '🗺️ <b>mari</b>: «hé, zeg» tegen een vrouw. Het woord komt uit de talen van de Balkan.'],
        ['Sanne', 'Merhaba İsmail! Hoş bulduk. «Mari» ne demek?', 'Hallo İsmail! Dank je. Wat betekent «mari»?'],
        ['İsmail', 'Bir kadına «mari» deriz, bir erkeğe «abe».', 'Tegen een vrouw zeggen we «mari», tegen een man «abe».', '🗺️ <b>abe</b>: «hé, zeg» tegen een man.'],
        ['Sanne', 'Anladım. Bu çocuk kim?', 'Begrepen. Wie is dit kind?'],
        ['İsmail', 'Benim kızanım! Adı Emin. Nene de evde.', 'Mijn zoon! Hij heet Emin. Oma is ook thuis.', LOC('kızan', 'de Balkan', 'çocuk') + '<br>' + LOC('nene', 'de Balkan', 'nine, babaanne')],
        ['Sanne', 'Çok tatlı! Bugün ne yiyoruz?', 'Wat lief! Wat eten we vandaag?'],
        ['İsmail', 'Kapuska ve pite var. Sonra boza içeriz.', 'Er is kapuska en pite. Daarna drinken we boza.', '🗺️ <b>kapuska</b>: stoofpot van witte kool. <b>pite</b>: hartige taart van dun deeg (in Turkije: börek). <b>boza</b>: een dikke, zoetzure drank van gierst.'],
        ['Sanne', 'Çok güzel! Yarın pazara gidiyor muyuz?', 'Heerlijk! Gaan we morgen naar de markt?'],
        ['İsmail', 'Evet, yarın sabah gelecem. Ayde, şimdi yiyelim!', 'Ja, ik kom morgenochtend. Kom op, laten we nu eten!', UITZ('gelecem', 'geleceğim', 'Op de Balkan is de toekomende tijd korter.', 'de zachte ğ valt in dit dialect weg, en de twee klinkers smelten samen. Je schrijft «geleceğim».') + '<br>' + LOC('ayde', 'de Balkan', 'hadi') + ' De h valt weg; in het Bulgaars zeggen ze ook «ajde».']
      ],
      q: [Q('Bir kadına ne derler?', 'Mari', 'Abe', 'Nene'), Q('«Kızan» ne demek?', 'Çocuk', 'Yemek', 'Ev'), Q('Yemekten sonra ne içerler?', 'Boza', 'Çay', 'Su')] },
    talk: { title: 'In het dorpscafé', place: 'Kırcaali', nl: 'Je docent speelt Mustafa Dede, een oude man die graag vertelt.', goal: 'Stel je voor, vertel waar je vandaan komt en drink samen een glas boza.',
      role: 'You are Mustafa Dede, an old Turkish man in a village coffee house near Kırcaali (Kardzhali), Bulgaria. You are warm and curious, call a man "abe" and a woman "mari", say "ayde" for "hadi", offer boza and pite, and tell how Turks have lived in the Balkans (Rumeli) for centuries.',
      local: 'Balkan (Rumelian) Turkish, lightly: abe / mari / bre, ayde for hadi, short future (gelecem), kızan for çocuk, nene, babo. Otherwise clear standard Turkish.' }
  });

  add('de', {
    dialog: { t: 'Bahnhof’ta buluşalım', nl: 'Murat uit Berlijn mengt Duits door zijn Turks.', place: 'Berlin 🇩🇪', who: { Murat: 'm', Sanne: 'f' },
      lines: [
        ['Murat', 'Merhaba Sanne! Almanya’ya hoş geldin.', 'Hallo Sanne! Welkom in Duitsland.'],
        ['Sanne', 'Merhaba Murat! Yarın sabah buluşalım mı?', 'Hallo Murat! Zullen we morgenochtend afspreken?'],
        ['Murat', 'Yarın sabah olmaz, doktorda Termin var.', 'Morgenochtend kan niet, ik heb een afspraak bij de dokter.', UITZ('Termin', 'randevu', 'Turken in Duitsland gebruiken voor dagelijkse dingen vaak het Duitse woord.', 'wie in Duitsland opgroeit, leert die woorden op school, bij de dokter en op het werk het eerst in het Duits.')],
        ['Sanne', 'Termin mi? Randevu mu demek?', 'Termin? Bedoel je een afspraak?'],
        ['Murat', 'Evet! Biz burada çok Almanca kelime kullanıyoruz.', 'Ja! Wij gebruiken hier veel Duitse woorden.', '🗺️ <b>Almanca</b>: Duits, de taal.'],
        ['Sanne', 'Anladım. Öğleden sonra nerede buluşalım?', 'Begrepen. Waar zullen we ’s middags afspreken?'],
        ['Murat', 'Bahnhof’ta buluşalım. Saat üçte, tamam mı?', 'Laten we op het station afspreken. Om drie uur, oké?', LOC('Bahnhof', 'Duitsland', 'istasyon') + ' Het Duitse woord krijgt gewoon een Turkse uitgang: Bahnhof’ta = op het station.'],
        ['Sanne', 'Tamam! Yazın ne yapıyorsun?', 'Oké! Wat doe je in de zomer?'],
        ['Murat', 'Urlaub yapıyorum: Türkiye’ye gidiyorum! Orada bana «Almancı» diyorlar.', 'Ik neem vakantie: ik ga naar Turkije! Daar noemen ze mij «Almancı».', UITZ('Urlaub yapmak', 'tatil yapmak', 'Een Duits woord met «yapmak» erachter wordt een Turks werkwoord.', 'zo maakt het Turks altijd al werkwoorden van leenwoorden (spor yapmak, park etmek); in Duitsland gebeurt dat met Duitse woorden.') + '<br>🗺️ <b>Almancı</b>: zo noemen ze in Turkije een Turk uit Duitsland. Het klinkt soms een beetje spottend.']
      ],
      q: [Q('«Termin» ne demek?', 'Randevu', 'Tatil', 'İstasyon'), Q('Nerede buluşuyorlar?', 'Bahnhof’ta', 'Doktorda', 'Evde'), Q('Murat yazın nereye gidiyor?', 'Türkiye’ye', 'Hollanda’ya', 'İngiltere’ye')] },
    talk: { title: 'In de dönerzaak', place: 'Kreuzberg, Berlin', nl: 'Je docent speelt Cem Usta, die al twintig jaar döner snijdt in Berlijn.', goal: 'Bestel een döner (wat erop moet en welke saus) en vraag hoe het is om in Duitsland te wonen.',
      role: 'You are Cem Usta, who has run a döner shop in Berlin-Kreuzberg for twenty years. You are friendly and fast, ask "Soğan olsun mu?" and "Acı ister misin?", mix German words into your Turkish (Termin, Bahnhof, Urlaub yapmak, Feierabend), and talk about going to Turkey every summer.',
      local: 'Turkish as spoken in Germany: German words with Turkish endings (Bahnhof’ta, Termin almak, Urlaub yapmak, Ausbildung yapmak, anmelden olmak), otherwise everyday Turkish. Always explain the German word.' }
  });

  add('nl', {
    dialog: { t: 'Fietsle gidiyoruz', nl: 'Yusuf uit Rotterdam spreekt Turks met woorden die jij al kent.', place: 'Rotterdam 🇳🇱', who: { Yusuf: 'm', Sanne: 'f' },
      lines: [
        ['Yusuf', 'Merhaba Sanne! Hollanda’ya hoş geldin… ama sen zaten Hollandalısın!', 'Hallo Sanne! Welkom in Nederland… maar jij bent al Nederlander!', '🗺️ <b>Hollandalı</b>: Nederlander. Turken zeggen «Hollanda» voor heel Nederland.'],
        ['Sanne', 'Evet! Ama Türkçe öğreniyorum. Sen nerelisin?', 'Ja! Maar ik leer Turks. Waar kom jij vandaan?'],
        ['Yusuf', 'Ben Rotterdam’da doğdum. Annem ve babam Türkiye’den geldi.', 'Ik ben in Rotterdam geboren. Mijn moeder en vader komen uit Turkije.'],
        ['Sanne', 'Evde Türkçe mi konuşuyorsunuz?', 'Spreken jullie thuis Turks?'],
        ['Yusuf', 'Evet, ama Hollandaca kelimeler de var. Yarın gemeente’ye gidiyorum.', 'Ja, maar er zitten ook Nederlandse woorden in. Morgen ga ik naar de gemeente.', UITZ('gemeente’ye', 'belediyeye', 'Turken in Nederland gebruiken voor Nederlandse instanties het Nederlandse woord, met een Turkse uitgang.', 'een gemeente, huisarts of toeslag werkt hier anders dan in Turkije; het Nederlandse woord is dan het duidelijkst.') + '<br>🗺️ <b>Hollandaca</b>: Nederlands, in spreektaal. Officieel heet de taal <b>Felemenkçe</b>.'],
        ['Sanne', 'Belediyeye mi? Ben de geliyorum. Nasıl gidiyoruz?', 'Naar de gemeente? Ik ga mee. Hoe gaan we?'],
        ['Yusuf', 'Fietsle! Burası Hollanda.', 'Met de fiets! Dit is Nederland.', LOC('fietsle', 'Nederland', 'bisikletle') + ' Fiets + de Turkse uitgang -le (met).'],
        ['Sanne', 'Tabii ki! Sonra ne yapıyorsun?', 'Natuurlijk! Wat doe je daarna?'],
        ['Yusuf', 'Huisartsla afspraak yaptım. Saat dörtte.', 'Ik heb een afspraak bij de huisarts gemaakt. Om vier uur.', UITZ('afspraak yapmak', 'randevu almak', 'Een Nederlands woord met «yapmak» erachter wordt een Turks werkwoord.', 'zo maakt het Turks altijd al werkwoorden van leenwoorden (spor yapmak); in Nederland gebeurt dat met Nederlandse woorden.')]
      ],
      q: [Q('Yusuf nerede doğdu?', 'Rotterdam’da', 'İstanbul’da', 'Berlin’de'), Q('«Gemeente» Türkiye’de ne?', 'Belediye', 'Hastane', 'Okul'), Q('Belediyeye nasıl gidiyorlar?', 'Bisikletle', 'Otobüsle', 'Arabayla')] },
    talk: { title: 'In de Turkse buurtwinkel', place: 'Rotterdam', nl: 'Je docent speelt Osman Amca, eigenaar van een Turkse supermarkt op Zuid.', goal: 'Koop brood, olijven en thee, en maak een praatje over Nederland en Turkije.',
      role: 'You are Osman Amca, owner of a Turkish neighborhood shop in Rotterdam-Zuid. You are kind and talkative, call the customer "kızım" or "oğlum", are delighted that a Dutch person is learning Turkish, mix Dutch words into your Turkish (gemeente, afspraak, huisarts, toeslag, fiets) and give prices in euros.',
      local: 'Turkish as spoken in the Netherlands and Belgium: Dutch words with Turkish endings (gemeente’ye, afspraak yapmak, huisartsla, fietsle, stage yapmak), otherwise everyday Turkish. The learner is Dutch, so make this fun and recognizable.' }
  });

  add('az', {
    dialog: { t: 'Təyyarə düşdü!', nl: 'Azerbeidzjaans lijkt op Turks, maar pas op voor de valse vrienden.', place: 'Bakı 🇦🇿', who: { 'Elçin': 'm', Sanne: 'f' },
      lines: [
        ['Elçin', 'Salam, Sanne! Necəsən?', 'Hallo, Sanne! Hoe gaat het?', LOC('salam', 'Azerbeidzjan', 'merhaba') + '<br>' + LOC('necəsən?', 'Azerbeidzjan', 'nasılsın?')],
        ['Sanne', 'Merhaba Elçin! İyiyim, teşekkürler. Sen nasılsın?', 'Hallo Elçin! Goed, dank je. Hoe gaat het met jou?'],
        ['Elçin', 'Mən də yaxşıyam, sağ ol!', 'Met mij gaat het ook goed, dank je!', UITZ('mən də yaxşıyam', 'ben de iyiyim', 'Azerbeidzjaans is een zustertaal van het Turks: bijna hetzelfde, maar met eigen woorden en letters (ə, x, q).', 'de twee talen komen uit dezelfde Oğuz-taal en zijn eeuwenlang elk hun eigen weg gegaan, zoals Nederlands en Duits.')],
        ['Sanne', 'Uçak geç kaldı, özür dilerim.', 'Het vliegtuig was te laat, sorry.'],
        ['Elçin', 'Problem yoxdur. Təyyarə indi düşdü?', 'Geen probleem. Is het vliegtuig net geland?', UITZ('təyyarə düşdü', 'uçak indi', 'In Azerbeidzjan betekent düşmək landen of uitstappen. In Turkije betekent düşmek vallen!', 'beide komen van hetzelfde woord voor «naar beneden komen»; elke taal heeft de betekenis een andere kant op gestuurd.') + '<br>' + LOC('yoxdur', 'Azerbeidzjan', 'yok')],
        ['Sanne', '«Düştü» mü? Hayır, uçak düşmedi!', '«Gevallen»? Nee, het vliegtuig is niet neergestort!'],
        ['Elçin', 'Bizdə «düşmək» sizin «inmek» deməkdir. Qorxma!', 'Bij ons betekent «düşmək» jullie «inmek». Wees niet bang!'],
        ['Sanne', 'Çok komik! Biraz ekmek almak istiyorum.', 'Wat grappig! Ik wil wat brood kopen.'],
        ['Elçin', 'Bizdə çörək deyirlər. Pulun var?', 'Bij ons zeggen ze çörək. Heb je geld?', LOC('çörək', 'Azerbeidzjan', 'ekmek') + ' In Turkije is çörek een zoet broodje.<br>' + UITZ('pul', 'para', 'In Azerbeidzjan is pul geld. In Turkije is pul een postzegel!', 'pul betekende vroeger «muntje» of «schubje». In Turkije bleef het hangen aan de postzegel, in Azerbeidzjan aan geld.')],
        ['Sanne', '«Pul» mu? Bende para var, pul yok!', '«Postzegels»? Ik heb geld, geen postzegels!']
      ],
      q: [Q('Azerbaycan’da «merhaba» yerine ne derler?', 'Salam', 'Sağ ol', 'Bəli'), Q('Azerbaycan’da «təyyarə düşdü» ne demek?', 'Uçak indi', 'Uçak düştü', 'Uçak kalktı'), Q('«Pul» Azerbaycan’da ne demek?', 'Para', 'Ekmek', 'Mektup')] },
    talk: { title: 'In het theehuis', place: 'İçərişəhər, Bakı', nl: 'Je docent speelt Rəşad, eigenaar van een theehuis in de oude stad.', goal: 'Bestel thee met jam, stel je voor en ontdek een paar valse vrienden tussen Turks en Azerbeidzjaans.',
      role: 'You are Rəşad, owner of a tea house in the old city (İçərişəhər) of Baku, Azerbaijan. You are hospitable and funny. You serve tea in pear-shaped glasses with jam (mürəbbə), greet with "Salam! Necəsən?", say "sağ ol" for thanks, and love to laugh about false friends between Turkish and Azerbaijani.',
      local: 'Azerbaijani (sister language of Turkish), kept very simple and close to Turkish: salam, necəsən, sağ ol, bəli / xeyr, yaxşı, mən, yoxdur. Point out false friends with Turkish (pul, çörək, düşmək, kişi). The learner answers in Turkish of Turkey: accept that fully and never mark it as a mistake.' }
  });
})(window.SPT);
