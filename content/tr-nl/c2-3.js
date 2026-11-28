/* Turks voor Nederlandstaligen — niveau C2, units 5–6 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── C2 · 5 ───────────────────────── */
  U({
    id: 'tr-c2-05', level: 'C2', icon: '🧢', title: 'Takma kafana', nl: 'Straattaal en jongerentaal',
    goals: ['Informele gesprekken tussen jongeren volgen', 'De straatbetekenis van gewone werkwoorden kennen: sallamak, yemek, kopmak, takmak', 'Nieuwe leenwerkwoorden begrijpen en vervoegen: stalklamak, story atmak', 'Inschatten wanneer straattaal past'],
    vocab: [
      ['sokak dili', 'straattaal'], ['birader', 'broer / maat'], ['moruk', 'ouwe (tegen een vriend)'], ['hacı', 'gozer (aanspreekvorm)'], ['harbiden', 'echt waar'], ['efsane', 'legendarisch / geweldig'], ['manyak', 'gestoord / waanzinnig'],
      ['feci', 'vreselijk / heel erg'], ['ölümüne', 'tot de dood / enorm'], ['tırsmak', 'bang worden'], ['kıl olmak', 'zich ergeren aan'], ['gıcık', 'irritant'], ['kafaya takmak', 'zich iets aantrekken van'], ['sallamak', 'maar wat zeggen / negeren'],
      ['kopmak', 'uit zijn dak gaan'], ['atmak (argo)', 'uit zijn duim zuigen'], ['çakmak (argo)', 'doorhebben / zakken'], ['yırtmak', 'de dans ontspringen'], ['hava atmak', 'opscheppen'], ['trip atmak', 'beledigd doen'], ['kafa yapmak', 'voor de gek houden'],
      ['ayar olmak', 'zich kapot ergeren'], ['yok artık', 'dat meen je niet'], ['etiketlemek', 'taggen'], ['stalklamak', 'iemands profiel uitpluizen'], ['engellemek', 'blokkeren'], ['paylaşım', 'post / bericht'], ['beğeni', 'like']
    ],
    grammar: [
      { t: 'Gewone werkwoorden, andere betekenis', es: 'Argoda anlam kayması',
        html: `<p>Turkse straattaal maakt zelden nieuwe woorden. Ze geeft <b>alledaagse werkwoorden</b> een tweede betekenis. Je kent het woord al, maar niet wat het hier doet.</p>
<p>• <b>sallamak</b> (schudden) → maar wat zeggen: <i>Bilmiyorsan <b>sallama</b>.</i> · negeren: <i>Onu hiç <b>sallamıyor</b>.</i><br>• <b>yemek</b> (eten) → incasseren, erin trappen: <i>ceza <b>yedim</b></i> (ik kreeg een boete) · <i>dayak yemek</i> (klappen krijgen) · <i>Bu numarayı <b>yemem</b>.</i> (Daar trap ik niet in.) · <i>kafayı yemek</i> (gek worden)<br>• <b>kopmak</b> (afbreken) → uit je dak gaan: <i>Konserde <b>koptuk</b>.</i> · <i>Gülmekten <b>koptum</b>.</i><br>• <b>takmak</b> (bevestigen) → zich aantrekken: <i><b>Takma</b> kafana!</i> (Trek het je niet aan!) · <i>Beni hiç <b>takmıyor</b>.</i> · <i>kafayı takmak</i> (geobsedeerd zijn door)<br>• <b>atmak</b> (gooien) → verzinnen: <i><b>Atma</b>!</i> (Lieg niet!) · en als hulpwerkwoord: <i>mesaj atmak, hava atmak, trip atmak</i><br>• <b>çakmak</b> (inslaan) → snappen: <i>Durumu <b>çaktın</b> mı?</i> · zakken: <i>Sınavdan <b>çaktım</b>.</i><br>• <b>uçmak</b> (vliegen) → heel blij of ver heen zijn: <i>Sevinçten <b>uçtum</b>.</i><br>• <b>patlamak</b> (ontploffen) → mislukken: <i>Plan <b>patladı</b>.</i> · zich vervelen: <i>Sıkıntıdan <b>patladım</b>.</i><br>• <b>yürümek</b> (lopen) → versieren: <i>Kıza <b>yürüyor</b>.</i></p>
<p>Aanspreken doe je met <i>kanka</i>, <i>abi</i>, <i>hacı</i>, <i>moruk</i>, <i>birader</i> of <i>kardeş</i>; instemmen met <i>aynen</i>, <i>harbiden</i>, <i>cidden mi?</i>, <i>yok artık!</i> (dat meen je niet!), <i>oha!</i> (wow, grof), <i>eyvallah</i> (oké, bedankt).</p>
<p><b>⚠️ Uitzondering:</b> woorden met een <b>slechte</b> betekenis dienen als <b>versterker van iets goeds</b>: <i><b>manyak</b> güzel</i> (waanzinnig mooi) · <i><b>feci</b> komik</i> (vreselijk grappig) · <i><b>acayip</b> iyi</i> · <i><b>ölümüne</b> seviyorum</i> · <i><b>deli gibi</b> çalıştı</i>. <b>Waarom?</b> Een versterker moet schokken om te werken. <i>Çok</i> is versleten, dus grijpt de spreker naar het sterkste woord dat hij heeft, en dat zijn de woorden voor gekte, ramp en dood. Het Nederlands doet hetzelfde met «waanzinnig», «vreselijk» en «doodleuk». Na een paar jaar is ook dat woord versleten en komt er een nieuw.</p>`,
        table: [['werkwoord', 'gewoon', 'straattaal'], ['sallamak', 'schudden', 'maar wat zeggen · negeren'], ['yemek', 'eten', 'incasseren · erin trappen'], ['kopmak', 'afbreken', 'uit je dak gaan'], ['takmak', 'bevestigen', 'zich aantrekken'], ['atmak', 'gooien', 'verzinnen'], ['çakmak', 'inslaan', 'snappen · zakken']],
        sum: 'Takma kafana!',
        ex: [['Takma kafana, yarına unutulur.', 'Trek het je niet aan, morgen is het vergeten.'], ['Bilmiyorsan sallama.', 'Als je het niet weet, zeg dan niet zomaar wat.'], ['Dün gece konserde koptuk.', 'Gisteravond gingen we uit ons dak op het concert.'], ['Bu numarayı yemem.', 'Daar trap ik niet in.']] },
      { t: 'Nieuwe leenwerkwoorden: -lemek en atmak', es: 'Yeni ödünç fiiller: -lemek ve atmak',
        html: `<p>Voor alles wat op een scherm gebeurt, maakt het Turks razendsnel werkwoorden. Er zijn twee recepten.</p>
<p><b>1. Vreemd woord + -le- / -la-</b>:<br><i>stalk<b>lamak</b></i> (iemands profiel uitpluizen) · <i>blok<b>lamak</b></i> (blokkeren) · <i>etiket<b>lemek</b></i> (taggen) · <i>trol<b>lemek</b></i> · <i>ghost<b>lamak</b></i> · <i>link<b>lemek</b></i> · <i>Google’<b>lamak</b></i> · <i>like’<b>lamak</b></i>. Daarna gaat alles gewoon Turks verder: <i>stalkla<b>dım</b>, stalkla<b>mışsın</b>, stalkla<b>n</b>mak</i> (gestalkt worden), <i>stalkla<b>t</b>mam</i>.</p>
<p><b>2. Vreemd woord + een hulpwerkwoord</b>:<br>• <b>atmak</b> (iets versturen): <i>mesaj atmak · story atmak · tweet atmak · foto atmak · link atmak</i><br>• <b>yapmak</b>: <i>yorum yapmak · paylaşım yapmak · canlı yayın yapmak · şov yapmak</i><br>• <b>etmek</b>: <i>takip etmek · şikâyet etmek · check etmek · download etmek</i><br>• <b>vermek</b>: <i>spoiler vermek · ayar vermek · tepki vermek</i><br>• <b>çekmek</b>: <i>video çekmek · selfie çekmek</i></p>
<p>Naast de leenwoorden bestaan Turkse vormen, en de officiële taal gebruikt die: <i>engellemek</i> (blokkeren), <i>beğenmek</i> (liken), <i>paylaşmak</i> (delen), <i>indirmek</i> (downloaden), <i>özçekim</i> (selfie, maar bijna niemand zegt dat).</p>
<p><b>⚠️ Uitzondering:</b> het achtervoegsel volgt de <b>uitspraak</b>, niet de spelling: <i>like’<b>la</b>dım</i> (je zegt <i>layk</i>, dus <b>-la-</b>, al is de laatste geschreven klinker een e) · <i>Google’<b>la</b>dım</i> (<i>gugıl</i>) · <i>tweet’<b>le</b>dim</i> (<i>tivit</i>) · <i>meme’<b>le</b>ri</i> (<i>miim</i>). <b>Waarom?</b> Klinkerharmonie is een regel van het <b>oor</b>. Bij Turkse woorden vallen spelling en klank samen, dus merk je het verschil niet. Bij een woord dat op zijn Engels gespeld blijft, kiest de spreker het achtervoegsel bij de laatste klinker die hij werkelijk uitspreekt. De apostrof laat zien waar het vreemde woord ophoudt.</p>`,
        table: [['recept', 'voorbeeld', 'betekenis'], ['+ -lamak', 'stalklamak', 'profiel uitpluizen'], ['+ -lemek', 'etiketlemek', 'taggen'], ['+ atmak', 'story atmak', 'een story plaatsen'], ['+ yapmak', 'yorum yapmak', 'reageren'], ['+ vermek', 'spoiler vermek', 'spoilen'], ['Turks', 'engellemek', 'blokkeren']],
        sum: 'Bana mesaj at.',
        ex: [['Eski sevgilisini stalklamış.', 'Ze heeft kennelijk het profiel van haar ex uitgeplozen.'], ['Akşam bana mesaj at.', 'Stuur me vanavond een berichtje.'], ['Beni her yerden engellemiş.', 'Hij heeft me overal geblokkeerd.'], ['Sakın spoiler verme!', 'Waag het niet te spoilen!']] }
    ],
    dialogue: {
      t: 'Op de campus', place: 'Ankara 🇹🇷',
      lines: [
        ['Mert', 'Kanka, dün gece konser efsaneydi! Sen niye gelmedin?', 'Maat, het concert gisteravond was legendarisch! Waarom ben je niet gekomen?'],
        ['Ilse', 'Sınavım vardı. Zaten çaktım galiba, hiçbir şey yazamadım.', 'Ik had een tentamen. Ik ben trouwens gezakt, geloof ik; ik kon niets opschrijven.'],
        ['Mert', 'Takma kafana ya, bütünlemesi var. Bu arada Selin’in story’sini gördün mü?', 'Ach, trek het je niet aan, er is een herkansing. Trouwens, heb je de story van Selin gezien?'],
        ['Ilse', 'Görmedim, o beni engellemiş. Sana trip atıyor mu hâlâ?', 'Nee, ze heeft me geblokkeerd. Doet ze nog steeds beledigd tegen jou?'],
        ['Mert', 'Yok artık, seni niye engellesin? Bana da mesaj atmıyor. Harbiden kıl oluyorum bu duruma.', 'Dat meen je niet, waarom zou ze jou blokkeren? Mij stuurt ze ook geen berichten. Ik erger me echt aan deze situatie.'],
        ['Ilse', 'Bir dakika: «kıl olmak» sinirlenmek demek, değil mi? «Kıl» saç gibi bir şey değil miydi?', 'Wacht even: «kıl olmak» betekent je ergeren, toch? Was «kıl» niet zoiets als haar?'],
        ['Mert', 'Aynen, argo işte. Hocanın yanında kullanma ama! Ona «rahatsız oluyorum» dersin.', 'Precies, dat is nou straattaal. Maar gebruik het niet bij de docent! Tegen hem zeg je «rahatsız oluyorum».'],
        ['Ilse', 'Tamam hacı, çaktım.', 'Oké gozer, ik snap het.'],
        ['Mert', 'Hahaha, koptum! Bu kadar hızlı öğreneceğini düşünmemiştim.', 'Hahaha, ik lig dubbel! Ik had niet gedacht dat je het zo snel zou leren.']
      ],
      q: [
        { t: 'mc', q: 'Ilse konsere neden gitmedi?', o: ['Sınavı vardı', 'Bileti yoktu', 'Hastaydı'] },
        { t: 'mc', q: 'Selin Ilse’ye ne yapmış?', o: ['Onu engellemiş', 'Ona mesaj atmış', 'Onu konsere çağırmış'] },
        { t: 'mc', q: 'Mert’e göre hocanın yanında «kıl oluyorum» yerine ne denir?', o: ['Rahatsız oluyorum', 'Koptum', 'Çaktım'] }
      ]
    },
    culture: { t: 'Van Beyoğlu tot TikTok', html: `<p>Turkse straattaal heeft oude wortels. De eerste woordenlijsten zijn al uit de negentiende eeuw en veel woorden komen uit het Grieks, Armeens, Italiaans en Romani van het oude İstanbul: <i>moruk</i>, <i>manita</i> (vriendin), <i>racon</i> (de ongeschreven regels), <i>palavra</i> (kletspraat).</p>
<p>Elke generatie voegt een laag toe. De jaren negentig gaven <i>kanka</i> (van <i>kan kardeşi</i>, bloedbroeder), sociale media gaven <i>stalklamak</i>, <i>trip atmak</i> en Engelse woorden als <i>cringe</i> en <i>crush</i>. Ouders klagen dat ze hun kinderen niet meer verstaan, en dat is ook een beetje de bedoeling.</p>
<p>⚠️ Straattaal is een <b>teken van nabijheid</b>. Onder vrienden van dezelfde leeftijd verwarmt ze het gesprek; tegenover een oudere, een docent of een klant is ze respectloos. Als buitenlander krijg je er een lach voor, maar begin er niet zelf mee bij iemand die je met <i>siz</i> aanspreekt.</p>` },
    ex: [
      { t: 'mc', q: 'Wat betekent «Takma kafana!»?', o: ['Trek het je niet aan!', 'Zet je pet af!', 'Denk goed na!'], tag: 'tr-argo' },
      { t: 'cloze', s: 'Bilmiyorsan ___.', h: 'zeg niet zomaar wat', a: ['sallama'], o: ['sallama', 'kopma', 'yeme'], nl: 'Als je het niet weet, zeg dan niet zomaar wat.', tag: 'tr-argo' },
      { t: 'mc', q: 'Wat betekent «ceza yedim»?', o: ['Ik kreeg een boete.', 'Ik heb iets vies gegeten.', 'Ik heb iemand gestraft.'], x: 'Yemek betekent in straattaal incasseren: ceza yemek, dayak yemek, gol yemek.', tag: 'tr-argo' },
      { t: 'cloze', s: 'Dün gece konserde ___.', h: 'we gingen uit ons dak', a: ['koptuk'], o: ['koptuk', 'çaktık', 'taktık'], nl: 'Gisteravond gingen we uit ons dak op het concert.', tag: 'tr-argo' },
      { t: 'mc', q: '«Sınavdan çaktım.» Wat is er gebeurd?', o: ['Ik ben gezakt.', 'Ik heb een tien gehaald.', 'Ik heb gespiekt.'], tag: 'tr-argo' },
      { t: 'mc', q: 'Waarom betekent «manyak güzel» iets positiefs?', o: ['Woorden voor gekte en ramp dienen als sterke versterker.', 'Manyak betekent eigenlijk «heel».', 'Het is ironisch bedoeld: het is lelijk.'], x: '⚠️ Uitzondering: een versterker moet schokken. Çok is versleten, dus grijpt men naar woorden voor gekte, ramp en dood: manyak, feci, acayip, ölümüne.', tag: 'tr-argo' },
      { t: 'cloze', s: 'Akşam bana mesaj ___.', h: 'stuur', a: ['at'], o: ['at', 'et', 'ver'], nl: 'Stuur me vanavond een berichtje.', tag: 'tr-lemek' },
      { t: 'mc', q: 'Wat is de officiële Turkse vorm van «bloklamak»?', o: ['engellemek', 'beğenmek', 'paylaşmak'], tag: 'tr-lemek' },
      { t: 'cloze', s: 'Fotoğrafını like’___.', h: 'ik heb geliket', a: ['ladım'], o: ['ladım', 'ledim', 'lıdım'], nl: 'Ik heb je foto geliket.', x: '⚠️ Uitzondering: het achtervoegsel volgt de uitspraak (layk), niet de spelling. Klinkerharmonie is een regel van het oor.', tag: 'tr-lemek' },
      { t: 'cloze', s: 'Sakın spoiler ___!', h: 'geef niet', a: ['verme'], o: ['verme', 'atma', 'etme'], nl: 'Waag het niet te spoilen!', tag: 'tr-lemek' },
      { t: 'mc', q: 'Welk hulpwerkwoord hoort bij «story»?', o: ['atmak', 'vermek', 'çekmek'], tag: 'tr-lemek' },
      { t: 'mc', q: 'Tegen wie kun je «kanka» zeggen?', o: ['Een goede vriend van je eigen leeftijd', 'Je docent', 'Een klant'], tag: 'vocab' },
      { t: 'tr', nl: 'Daar trap ik niet in.', a: ['Bu numarayı yemem.', 'Bunu yemem.', 'Ben bunu yemem.'], tag: 'tr-argo' },
      { t: 'tr', nl: 'Hij heeft me overal geblokkeerd.', a: ['Beni her yerden engellemiş.', 'Beni her yerden engelledi.', 'Beni her yerden bloklamış.', 'Beni her yerden blokladı.'], tag: 'tr-lemek' },
      { t: 'order', s: 'Harbiden kıl oluyorum bu duruma.', nl: 'Ik erger me echt aan deze situatie.', tag: 'tr-argo' },
      { t: 'match', p: [['kanka', 'maat'], ['efsane', 'geweldig'], ['tırsmak', 'bang worden'], ['hava atmak', 'opscheppen'], ['aynen', 'precies'], ['yok artık', 'dat meen je niet']], tag: 'vocab' }
    ],
    reading: {
      t: 'Gençler ne diyor?', type: 'Column',
      p: [
        ['Geçen hafta on altı yaşındaki yeğenimle yarım saat konuştum ve itiraf edeyim, söylediklerinin üçte birini anlamadım. «Hocaya ayar oldum», «kanka trip attı», «sınavdan çaktım» …', 'Vorige week heb ik een halfuur met mijn zestienjarige nichtje gepraat en ik moet bekennen dat ik een derde van wat ze zei niet begreep. «Ik ergerde me kapot aan de docent», «mijn bestie deed beledigd», «ik ben gezakt voor het tentamen» …'],
        ['Önce kızdım: Bu çocuklar Türkçeyi bozuyor, dedim. Sonra kendi gençliğimi hatırladım. Biz de «manita», «kıyak», «cillop» derdik; annem de bize aynı şeyi söylerdi.', 'Eerst werd ik boos: deze kinderen verpesten het Turks, zei ik. Toen herinnerde ik me mijn eigen jeugd. Wij zeiden ook «manita», «kıyak», «cillop»; en mijn moeder zei hetzelfde tegen ons.'],
        ['Argo bir dilin bozulması değil, canlı olduğunun kanıtıdır. Gençler dili bozmaz, onunla oynar. «Stalklamak» sözcüğüne bakın: kök İngilizce ama ek, çekim, hatta ünlü uyumu tamamen Türkçe.', 'Straattaal is geen verloedering van een taal, maar het bewijs dat ze leeft. Jongeren verpesten de taal niet, ze spelen ermee. Kijk naar het woord «stalklamak»: de stam is Engels, maar het achtervoegsel, de vervoeging en zelfs de klinkerharmonie zijn helemaal Turks.'],
        ['Yine de yeğenime bir şey söyledim: Argoyu bilmek güzel, ama nerede susacağını bilmek daha güzel. İş görüşmesinde «kanka» diyen kimse işe alınmaz.', 'Toch heb ik mijn nichtje één ding gezegd: straattaal kennen is mooi, maar weten waar je haar moet inslikken is mooier. Wie in een sollicitatiegesprek «kanka» zegt, wordt niet aangenomen.']
      ],
      gl: [['yeğen', 'neefje / nichtje'], ['itiraf etmek', 'bekennen'], ['bozmak', 'verpesten / bederven'], ['kanıt', 'bewijs'], ['çekim', 'vervoeging'], ['iş görüşmesi', 'sollicitatiegesprek']],
      q: [
        { t: 'mc', q: 'Yazar yeğeninin söylediklerinin ne kadarını anlamadı?', o: ['Üçte birini', 'Hepsini', 'Yarısını'] },
        { t: 'mc', q: 'Yazara göre argo neyin kanıtıdır?', o: ['Dilin canlı olduğunun', 'Dilin bozulduğunun', 'Gençlerin tembel olduğunun'] },
        { t: 'mc', q: '«Stalklamak» sözcüğünde Türkçe olan nedir?', o: ['Ek, çekim ve ünlü uyumu', 'Kök', 'Hiçbir şey'] }
      ]
    },
    say: [['Takma kafana!', 'Trek het je niet aan!'], ['Yok artık!', 'Dat meen je niet!'], ['Akşam bana mesaj at.', 'Stuur me vanavond een berichtje.'], ['Konser efsaneydi.', 'Het concert was legendarisch.']],
    task: { nl: 'Schrijf een chatgesprek van acht tot tien korte regels tussen twee studenten over een feest, een tentamen of een ruzie. Gebruik minstens vier werkwoorden in hun straatbetekenis (takmak, sallamak, kopmak, yemek, çakmak, atmak) en twee leenwerkwoorden (mesaj atmak, engellemek, stalklamak, story atmak). Schrijf er daarna in twee nette zinnen bij hoe je hetzelfde aan een docent zou vertellen.', model: '— Kanka dün gece neredeydin? — Evdeydim, sınav vardı. Çaktım galiba. — Takma kafana ya. Parti efsaneydi, koptuk! — Selin geldi mi? — Geldi ama bana trip attı, hiç sallamadı. — Niye? — Story’sine yorum yapmadım diye. — Yok artık! — Harbiden. Sonra da beni engellemiş. — Atma! — Vallahi. / Hocaya: «Dün akşam bir arkadaşımın davetine katıldım. Maalesef bir arkadaşımla aramda küçük bir anlaşmazlık oldu.»' },
    scenario: { nl: 'Je zit op de campus in Ankara met Mert, een studievriend die snel en vol straattaal praat. Je wilt meepraten en begrijpen wat hij zegt.', role: 'You are Mert, a 21-year-old university student in Ankara chatting with a friend on campus. Speak fast, natural youth Turkish full of slang: kanka, hacı, aynen, harbiden, yok artık, takma kafana, kıl olmak, koptum, çakmak, trip atmak, mesaj atmak, engellemek, stalklamak. Talk about last night\'s concert, exams and a friend who is sulking. When the learner asks what a slang word means, explain it briefly in plain Turkish, give the neutral equivalent, and warn when a word is not for teachers or elders. Tease the learner good-naturedly when they use slang well.', goal: 'Praat mee over het concert en het gedoe met Selin, vraag naar woorden die je niet kent en gebruik zelf drie straatwoorden.' }
  });

  /* ───────────────────────── C2 · 6 ───────────────────────── */
  U({
    id: 'tr-c2-06', level: 'C2', icon: '📜', title: 'Muhterem efendim', nl: 'Oude teksten lezen: het Osmaanse erfgoed',
    goals: ['Een Turkse tekst uit de vroege twintigste eeuw lezen', 'Arabische meervouden herkennen: ahval, eşya, evrak, tebrikat', 'Bijwoorden op -en en oude voegwoorden begrijpen: şahsen, zira, binaenaleyh', 'Een lange Osmaanse zin stap voor stap ontleden'],
    vocab: [
      ['eski yazı', 'het oude (Arabische) schrift'], ['muhterem', 'geacht / eerbiedwaardig'], ['efendim', 'mijnheer / mevrouw (beleefd)'], ['ahval', 'omstandigheden'], ['Millet Mektebi', 'volksschool (1929)'], ['malumat', 'inlichtingen / kennis'], ['tafsilat', 'bijzonderheden'],
      ['teşkilat', 'organisatie'], ['tebrikat', 'gelukwensen'], ['ihtiyar', 'oud / bejaard'], ['zat', 'persoon (deftig)'], ['şahsen', 'persoonlijk'], ['resmen', 'officieel'], ['takriben', 'bij benadering'],
      ['nispeten', 'betrekkelijk'], ['esasen', 'in wezen / eigenlijk'], ['hakikaten', 'waarlijk'], ['bilhassa', 'in het bijzonder'], ['zira', 'want'], ['şayet', 'indien'], ['velhasıl', 'kortom'],
      ['binaenaleyh', 'derhalve'], ['mamafih', 'niettemin'], ['arz etmek', 'eerbiedig voorleggen'], ['sual etmek', 'vragen (oud)'], ['beyan etmek', 'verklaren'], ['el yazması', 'handschrift'], ['hat', 'kalligrafie']
    ],
    grammar: [
      { t: 'Arabische meervouden: ahval, eşya, evrak, tebrikat', es: 'Arapça çoğullar',
        html: `<p>Het Osmaans nam Arabische woorden over met hun eigen meervoud. Veel daarvan leven voort, vooral in ambtelijke en geleerde taal. Er zijn twee soorten.</p>
<p><b>1. Het regelmatige meervoud op -at</b> (vaak met een lange a, soms geschreven -ât):<br><i>tebrik</i> → <b>tebrikat</b> (gelukwensen) · <i>teşkil</i> → <b>teşkilat</b> (organisatie) · <i>malum</i> → <b>malumat</b> (inlichtingen) · <i>tafsil</i> → <b>tafsilat</b> · <i>hayvan</i> → <b>hayvanat</b> (<i>hayvanat bahçesi</i>, dierentuin) · <i>ihraç</i> → <b>ihracat</b> (uitvoer) · <i>ithal</i> → <b>ithalat</b> (invoer) · <i>edebiyat</i> (letteren) · <i>mücevherat</i> (juwelen)</p>
<p><b>2. Het gebroken meervoud</b>, waarbij de klinkers binnen in het woord veranderen. De medeklinkers blijven; daaraan herken je het:<br><i>hal</i> → <b>ahval</b> (omstandigheden) · <i>haber</i> → <b>ahbar</b> · <i>fikir</i> → <b>efkâr</b> (<i>kamuoyu = efkârıumumiye</i>) · <i>hak</i> → <b>hukuk</b> (rechten → het recht) · <i>şart</i> → <b>şerait</b> · <i>sebep</i> → <b>esbap</b> · <i>vakit</i> → <b>evkat</b> · <i>kitap</i> → <b>kütüp</b> (<i>kütüphane</i>, bibliotheek: «boekenhuis») · <i>eser</i> → <b>asar</b> · <i>millet</i> → <b>milel</b></p>
<p>Voor personen bestond het meervoud op <b>-in</b>: <i>memur<b>in</b></i> (ambtenaren), <i>muallim<b>in</b></i> (onderwijzers), <i>mebus<b>an</b></i> (afgevaardigden, Perzisch -an).</p>
<p>In modern Turks zeg je gewoon <i>haller, haberler, şartlar, kitaplar</i>. Maar wie een akte, een oude krant of een roman uit 1920 leest, heeft de Arabische vormen nodig.</p>
<p><b>⚠️ Uitzondering:</b> <i>eşya</i> (spullen), <i>evrak</i> (papieren), <i>evlat</i> (kind), <i>tüccar</i> (koopman), <i>ahlak</i> (moraal) en <i>hayvanat</i> zijn Arabische <b>meervouden</b>, maar het Turks behandelt ze als <b>enkelvoud</b> en zet er rustig nog een meervoud achter: <i>eşya<b>lar</b>, evrak<b>lar</b>, evlat<b>lar</b>, tüccar<b>lar</b></i>. <b>Waarom?</b> Een Turkse spreker hoort een meervoud alleen aan <b>-ler / -lar</b>. Het gebroken meervoud zit ín het woord en is zonder kennis van het Arabisch onzichtbaar: <i>eşya</i> (van <i>şey</i>, ding) klinkt gewoon als één woord. Zo werd het een verzamelnaam en later een enkelvoud. Taalzuiveraars vonden <i>evraklar</i> lang een fout, maar het is nu algemeen aanvaard.</p>`,
        table: [['enkelvoud', 'Arabisch meervoud', 'betekenis'], ['hal', 'ahval', 'omstandigheden'], ['şey', 'eşya', 'dingen → spullen'], ['varak', 'evrak', 'bladen → papieren'], ['velet', 'evlat', 'kinderen → kind'], ['tebrik', 'tebrikat', 'gelukwensen'], ['kitap', 'kütüp', 'boeken (kütüphane)']],
        sum: 'Ahvaliniz nasıldır?',
        ex: [['Ahvalinizi sual etmek isterim.', 'Ik zou naar uw omstandigheden willen vragen.'], ['Evrakları yarın teslim edeceğim.', 'Ik lever de papieren morgen in.'], ['Bu hususta malumatım yok.', 'Hierover heb ik geen inlichtingen.'], ['Tafsilatı mektupta bulacaksınız.', 'De bijzonderheden vindt u in de brief.']] },
      { t: 'Bijwoorden op -en en een lange zin ontleden', es: '-en zarfları ve uzun cümleyi çözmek',
        html: `<p>Een tweede Arabisch erfstuk is het bijwoord op <b>-en</b> (na een keel- of nadrukklank <b>-an</b>). Het is de Arabische vierde naamval, de <i>tenvin</i>, en het wordt achter een zelfstandig of bijvoeglijk naamwoord gezet:</p>
<p><i>şahıs</i> → <b>şahsen</b> (persoonlijk) · <i>resmî</i> → <b>resmen</b> (officieel) · <i>tamam</i> → <b>tamamen</b> (geheel) · <i>hakikat</i> → <b>hakikaten</b> (waarlijk) · <i>nispet</i> → <b>nispeten</b> (betrekkelijk) · <i>takrib</i> → <b>takriben</b> (ongeveer) · <i>esas</i> → <b>esasen</b> · <i>aynı</i> → <b>aynen</b> · <i>kısım</i> → <b>kısmen</b> (deels) · <i>mecbur</i> → <b>mecburen</b> · <i>derhal</i> (meteen) · <i>evvela</i> (eerst) · <i>mesela</i> (bijvoorbeeld) · <i>asla</i> (nooit)</p>
<p><b>Oude voegwoorden</b> die je nog in formele tekst vindt: <b>zira</b> (want) · <b>şayet</b> (indien) · <b>mamafih</b> (niettemin) · <b>binaenaleyh</b> (derhalve) · <b>velhasıl</b> (kortom) · <b>lakin</b> (maar) · <b>keza</b> (evenzo) · <b>dahi</b> (zelfs, ook) · <b>veyahut</b> (of wel).</p>
<p><b>Zo ontleed je een lange Osmaanse zin:</b><br>1. Zoek het <b>laatste werkwoord</b>: dat is het gezegde van de hele zin.<br>2. Zoek het <b>onderwerp</b>, meestal helemaal vooraan.<br>3. Knip de zin bij elke <b>-ip, -erek, -diğinden, olup</b> en bij elke <b>ve</b>: dat zijn de naden.<br>4. Los elke <b>izafet</b> van achter naar voren op (C1 unit 8): <i>ahval-i sıhhiye</i> = de toestand van de gezondheid.<br>5. Vervang de Arabische meervouden en -en-woorden door hun moderne vorm.</p>
<p>Voorbeeld: <i>Mektubunuzu alıp ahvalinizin iyi olduğunu öğrendiğimden pek memnun oldum.</i> Gezegde: <i>memnun oldum</i>. Naden: <i>alıp</i> (ik ontving en …), <i>öğrendiğimden</i> (doordat ik vernam). Modern: <i>Mektubunuzu aldım; durumunuzun iyi olduğunu öğrendiğim için çok sevindim.</i></p>
<p><b>⚠️ Uitzondering:</b> de bijwoorden op <b>-en</b> trekken zich niets aan van de klinkerharmonie en hebben de <b>klemtoon vóór de uitgang</b>: <i>ta<b>ma</b>men</i> (niet <i>tamaman</i>), <i><b>res</b>men</i>, <i><b>şah</b>sen</i>, <i>ha<b>ki</b>katen</i>. <b>Waarom?</b> <b>-en</b> is geen Turks achtervoegsel maar een versteende Arabische naamvalsuitgang. Het woord is in zijn geheel geleend en de uitgang is er nooit los van geweest; hij past zich dus niet aan en trekt ook de klemtoon niet naar zich toe, zoals echte Turkse achtervoegsels meestal doen. Daarom kun je met -en ook geen nieuwe woorden maken.</p>`,
        table: [['oud', 'modern', 'betekenis'], ['şahsen', 'kendim, bizzat', 'persoonlijk'], ['takriben', 'yaklaşık', 'ongeveer'], ['zira', 'çünkü', 'want'], ['şayet', 'eğer', 'indien'], ['binaenaleyh', 'bu yüzden', 'derhalve'], ['velhasıl', 'kısacası', 'kortom']],
        sum: 'Şahsen tanımıyorum.',
        ex: [['Kendisini şahsen tanımıyorum.', 'Ik ken hem niet persoonlijk.'], ['Takriben iki saat sürdü.', 'Het duurde ongeveer twee uur.'], ['Gelemedim, zira hastaydım.', 'Ik kon niet komen, want ik was ziek.'], ['Velhasıl her şey yolunda.', 'Kortom, alles is in orde.']] }
    ],
    dialogue: {
      t: 'De brief van de overgrootvader', place: 'Bursa 🇹🇷',
      lines: [
        ['Ilse', 'Bu mektup çok eski görünüyor. Kimin?', 'Deze brief ziet er heel oud uit. Van wie is hij?'],
        ['Zerrin', 'Büyük dedemin. 1931’de yazmış, yeni harflerle ama dili hâlâ Osmanlıca. Ben bile zor okuyorum.', 'Van mijn overgrootvader. Hij schreef hem in 1931, in het nieuwe alfabet, maar de taal is nog Osmaans. Zelfs ik lees hem met moeite.'],
        ['Ilse', 'Bir deneyeyim mi? «Muhterem efendim, ahvalinizi sual ederim.» «Ahval» ne demek?', 'Zal ik het eens proberen? «Muhterem efendim, ahvalinizi sual ederim.» Wat betekent «ahval»?'],
        ['Zerrin', '«Hal»in çoğulu, Arapça. «Durumunuzu sorarım» diyor yani: «Nasılsınız?»', 'Het meervoud van «hal», Arabisch. Hij zegt dus «ik vraag naar uw toestand»: «Hoe maakt u het?»'],
        ['Ilse', 'Anladım. Devam ediyorum: «Evrakı takriben iki hafta evvel gönderdim, zira …» «Zira» çünkü mü?', 'Begrepen. Ik ga verder: «Evrakı takriben iki hafta evvel gönderdim, zira …» Is «zira» çünkü?'],
        ['Zerrin', 'Evet! «Takriben» de «yaklaşık». Sen bunları nereden biliyorsun?', 'Ja! En «takriben» is «yaklaşık». Hoe weet jij dit allemaal?'],
        ['Ilse', 'Hukuk metinlerinde hâlâ kullanılıyor. Ama şu uzun cümlede kayboldum; yüklem nerede?', 'In juridische teksten worden ze nog gebruikt. Maar in deze lange zin ben ik verdwaald; waar is het gezegde?'],
        ['Zerrin', 'En sona bak: «memnun oldum». Önce onu bul, sonra «-ip» geçen yerlerden kes. Dedem tek cümleyle yarım sayfa doldurmuş!', 'Kijk helemaal aan het eind: «memnun oldum». Zoek dat eerst, en knip dan op de plekken waar «-ip» staat. Mijn overgrootvader heeft met één zin een halve bladzijde gevuld!']
      ],
      q: [
        { t: 'mc', q: 'Mektup ne zaman yazılmış?', o: ['1931’de', '1831’de', '1981’de'] },
        { t: 'mc', q: '«Ahval» hangi sözcüğün çoğulu?', o: ['Hal', 'Ahlak', 'Havale'] },
        { t: 'mc', q: 'Zerrin uzun cümlede önce neyi bulmayı öneriyor?', o: ['En sondaki yüklemi', 'İlk sözcüğü', 'Arapça sözcükleri'] }
      ]
    },
    culture: { t: 'Eén nacht, een nieuw alfabet', html: `<p>Tot 1928 werd het Turks geschreven in het <b>Arabische schrift</b>. Op 1 november 1928 nam het parlement de wet op de <b>nieuwe Turkse letters</b> aan; vanaf 1 januari 1929 moesten kranten, boeken en straatnaamborden in het Latijnse alfabet verschijnen. Atatürk trok zelf met een schoolbord het land door. In de <i>Millet Mektepleri</i> (volksscholen) leerden miljoenen volwassenen in enkele maanden lezen.</p>
<p>De prijs was hoog: wie na 1928 naar school ging, kan de grafsteen van zijn overgrootvader, de familiebrieven en zes eeuwen archief niet lezen zonder een cursus <b>Osmanlıca</b>. Daarna verving de <b>dil devrimi</b> (C1 unit 8) ook nog een groot deel van de woorden.</p>
<p>📜 Toch is het Osmaans niet weg. Het leeft in de rechtstaal, in spreekwoorden, in de kalligrafie (<b>hat</b>) op moskeeën en fonteinen, en in woorden als <i>kütüphane</i>, <i>hayvanat bahçesi</i> en <i>maalesef</i>.</p>` },
    ex: [
      { t: 'mc', q: 'Waarvan is «ahval» het meervoud?', o: ['hal', 'ahlak', 'havale'], tag: 'tr-osm' },
      { t: 'mc', q: 'Hoe herken je een gebroken Arabisch meervoud?', o: ['De medeklinkers blijven, de klinkers binnenin veranderen.', 'Er komt altijd -ler achter.', 'Het woord wordt verdubbeld.'], tag: 'tr-osm' },
      { t: 'mc', q: 'Wat betekent «hayvanat bahçesi» letterlijk?', o: ['tuin van de dieren (hayvan + Arabisch meervoud -at)', 'tuin van het leven (hayat)', 'tuin in de open lucht (hava)'], tag: 'tr-osm' },
      { t: 'mc', q: 'Waarom zegt men «evraklar», terwijl «evrak» al een meervoud is?', o: ['Het Turks hoort een meervoud alleen aan -ler / -lar.', 'Evrak is eigenlijk een enkelvoud in het Arabisch.', 'Het is een drukfout die is blijven hangen.'], x: '⚠️ Uitzondering: het gebroken meervoud zit ín het woord en is zonder Arabisch onzichtbaar. Eşya, evrak, evlat en tüccar werden zo enkelvoud.', tag: 'tr-osm' },
      { t: 'mc', q: 'Wat is het moderne woord voor «malumat»?', o: ['bilgi', 'belge', 'bölge'], tag: 'tr-osm' },
      { t: 'cloze', s: 'Kendisini ___ tanımıyorum.', h: 'persoonlijk', a: ['şahsen'], o: ['şahsen', 'resmen', 'kısmen'], nl: 'Ik ken hem niet persoonlijk.', tag: 'tr-osm' },
      { t: 'cloze', s: 'Gelemedim, ___ hastaydım.', h: 'want (oud)', a: ['zira'], o: ['zira', 'şayet', 'keza'], nl: 'Ik kon niet komen, want ik was ziek.', tag: 'tr-uzun' },
      { t: 'mc', q: 'Wat betekent «binaenaleyh»?', o: ['bu yüzden', 'buna rağmen', 'bundan önce'], tag: 'tr-uzun' },
      { t: 'mc', q: 'Wat zoek je als eerste in een lange Osmaanse zin?', o: ['Het laatste werkwoord: het gezegde', 'Het langste woord', 'Het eerste bijvoeglijk naamwoord'], tag: 'tr-uzun' },
      { t: 'mc', q: 'Waarom is het «tamamen» en niet «tamaman»?', o: ['-en is een versteende Arabische uitgang en volgt de klinkerharmonie niet.', 'Omdat de laatste klinker van tamam een e is.', 'Het is een uitzondering zonder reden.'], x: '⚠️ Uitzondering: het woord is in zijn geheel geleend. De uitgang past zich niet aan en trekt ook de klemtoon niet naar zich toe.', tag: 'tr-osm' },
      { t: 'cloze', s: '___ her şey yolunda.', h: 'kortom (oud)', a: ['Velhasıl'], o: ['Velhasıl', 'Mamafih', 'Şayet'], nl: 'Kortom, alles is in orde.', tag: 'tr-uzun' },
      { t: 'mc', q: 'Wat betekent «muhterem»?', o: ['geacht, eerbiedwaardig', 'haastig', 'verboden'], tag: 'vocab' },
      { t: 'tr', nl: 'Het duurde ongeveer twee uur.', a: ['Takriben iki saat sürdü.', 'Yaklaşık iki saat sürdü.', 'Aşağı yukarı iki saat sürdü.'], tag: 'tr-osm' },
      { t: 'tr', nl: 'Ik lever de papieren morgen in.', a: ['Evrakları yarın teslim edeceğim.', 'Evrakı yarın teslim edeceğim.', 'Belgeleri yarın teslim edeceğim.', 'Evrakları yarın vereceğim.'], tag: 'tr-osm' },
      { t: 'order', s: 'Ahvalinizin iyi olduğunu öğrendiğimden pek memnun oldum.', nl: 'Ik was zeer verheugd te vernemen dat het u goed gaat.', tag: 'tr-uzun' },
      { t: 'match', p: [['zira', 'çünkü'], ['şayet', 'eğer'], ['takriben', 'yaklaşık'], ['velhasıl', 'kısacası'], ['lakin', 'ama'], ['sual', 'soru']], tag: 'tr-uzun' }
    ],
    reading: {
      t: 'Bursa, 12 Mart 1931', type: 'Brief',
      p: [
        ['Muhterem efendim, mektubunuzu alıp ahvalinizin iyi olduğunu öğrendiğimden pek memnun oldum. Bizleri sual ederseniz, hamdolsun cümlemiz sıhhatteyiz.', 'Geachte heer, ik was zeer verheugd uw brief te ontvangen en te vernemen dat het u goed gaat. Mocht u naar ons vragen: God zij dank zijn wij allen gezond.'],
        ['İstediğiniz evrakı takriben iki hafta evvel postaya verdim; şayet henüz elinize geçmediyse lütfen haber veriniz, zira bir suretini yanımda muhafaza ediyorum.', 'De papieren waarom u vroeg heb ik ongeveer twee weken geleden op de post gedaan; indien ze u nog niet hebben bereikt, laat het mij dan weten, want ik bewaar een afschrift bij mij.'],
        ['Buralarda ahval nispeten iyidir. Çocuklar yeni harfleri mektepte öğrendiler; bendeniz dahi ihtiyar halimle akşamları Millet Mektebine devam ediyorum. Evvela güç geldi, lakin şimdi gazeteyi okuyabiliyorum.', 'Hier zijn de omstandigheden betrekkelijk goed. De kinderen hebben de nieuwe letters op school geleerd; ook ondergetekende gaat op zijn oude dag ’s avonds naar de Volksschool. Eerst viel het zwaar, maar nu kan ik de krant lezen.'],
        ['Velhasıl merak edilecek bir şey yoktur. Validenizin ellerinden öper, cümlenize selam ve hürmetlerimi arz ederim.', 'Kortom, er is niets om u zorgen over te maken. Ik kus de handen van uw moeder en bied u allen mijn groeten en eerbied aan.']
      ],
      gl: [['hamdolsun', 'God zij dank'], ['cümlemiz', 'wij allen (oud)'], ['suret', 'afschrift'], ['muhafaza etmek', 'bewaren'], ['bendeniz', 'ondergetekende / uw dienaar'], ['valide', 'moeder (deftig)'], ['hürmet', 'eerbied']],
      q: [
        { t: 'mc', q: 'Mektubu yazan kişi evrakı ne zaman göndermiş?', o: ['Yaklaşık iki hafta önce', 'Dün', 'İki yıl önce'] },
        { t: 'mc', q: 'Yazar akşamları nereye gidiyor?', o: ['Millet Mektebine', 'Kahveye', 'Postaneye'] },
        { t: 'mc', q: '«Bendeniz» kimi anlatıyor?', o: ['Mektubu yazanın kendisini', 'Mektubu alan kişiyi', 'Çocukları'] }
      ]
    },
    say: [['Ahvaliniz nasıldır efendim?', 'Hoe maakt u het, mijnheer?'], ['Kendisini şahsen tanımıyorum.', 'Ik ken hem niet persoonlijk.'], ['Takriben iki saat sürdü.', 'Het duurde ongeveer twee uur.'], ['Velhasıl her şey yolunda.', 'Kortom, alles is in orde.']],
    task: { nl: 'Zet de volgende ouderwetse zin om in modern Turks en leg in drie zinnen uit hoe je hem hebt ontleed (gezegde, naden, oude woorden): «İstediğiniz evrakı takriben iki hafta evvel postaya verdim; şayet henüz elinize geçmediyse lütfen haber veriniz, zira bir suretini yanımda muhafaza ediyorum.» Schrijf daarna zelf twee zinnen in dezelfde deftige stijl.', model: 'Modern: «İstediğiniz belgeleri yaklaşık iki hafta önce postaya verdim; eğer hâlâ elinize ulaşmadıysa lütfen haber verin, çünkü bir kopyasını yanımda saklıyorum.» — Önce yüklemleri buldum: «verdim», «haber veriniz», «muhafaza ediyorum». Cümleyi noktalı virgülden ve «zira»dan böldüm. Sonra eski sözcükleri değiştirdim: evrak → belgeler, takriben → yaklaşık, evvel → önce, şayet → eğer, suret → kopya. — Kendi cümlelerim: «Muhterem efendim, davetinize şahsen icabet edemeyeceğimi teessürle arz ederim. Mamafih tebrikatımı kabul buyurmanızı rica ederim.»' },
    scenario: { nl: 'Bij een vriendin in Bursa vind je een familiebrief uit 1931. Samen met haar probeer je hem te lezen en in gewoon Turks om te zetten.', role: 'You are Zerrin, a history teacher in Bursa, showing the learner a letter written by your great-grandfather in 1931: Latin script but still Ottoman-style Turkish. Read out short phrases from it (Muhterem efendim, ahvalinizi sual ederim, evrakı takriben iki hafta evvel gönderdim, zira …, velhasıl …) and ask the learner what they think each means. Confirm or correct, explain Arabic plurals (ahval, evrak), -en adverbs (takriben, şahsen) and old conjunctions (zira, şayet), and show how to find the final verb in a long sentence. Tell a little about the 1928 alphabet reform when it fits. Patient, cultured C2 Turkish.', goal: 'Lees de oude zinnen, raad de betekenis en zet er minstens twee om in modern Turks.' }
  });
})(window.SPT);
