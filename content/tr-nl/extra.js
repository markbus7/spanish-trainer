/* Turks voor Nederlandstaligen: niveaus, niveautest, vrije gesprekken en uitdrukkingen van de dag.
   Standaard-Turks van Turkije. De niveautest groeit mee met de lesstof: elk niveau met units heeft hier 12+ vragen. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;

  /* Wat je per niveau kunt (de standaardteksten gaan over de Spaanse cursus). */
  const CAN = {
    A1: ['Jezelf voorstellen en eenvoudige vragen stellen', 'Over familie, eten, je dag en je stad praten', 'Bestellen, afdingen en de weg vragen'],
    A2: ['Vertellen wat je meemaakte en wat je gewend bent', 'Kunnen, moeten en mogen uitdrukken', 'Bij de dokter, op reis en aan de telefoon je redden'],
    B1: ['Meningen geven en een gesprek gaande houden', 'Bijzinnen maken met -dik en -en, en navertellen met -miş', 'Series en nieuws in grote lijnen volgen'],
    B2: ['Vlot en spontaan praten, ook over abstracte onderwerpen', 'Lange zinnen met meerdere bijzinnen begrijpen en maken', 'Formeel en informeel Turks uit elkaar houden'],
    C1: ['Register bewust kiezen: zakelijk, academisch en informeel', 'Uitdrukkingen en spreekwoorden natuurlijk gebruiken', 'Kranten, essays en literatuur lezen'],
    C2: ['Humor, ironie en woordspel begrijpen en gebruiken', 'Osmaanse en moderne woordenschat herkennen', 'Vrijwel foutloos en volkomen natuurlijk formuleren']
  };
  const NAME = { A1: 'Başlangıç', A2: 'Temel', B1: 'Orta', B2: 'Orta üstü', C1: 'İleri', C2: 'Ustalık' };
  S.C.LEVELS.forEach(L => { if (CAN[L.id]) L.can = CAN[L.id]; if (NAME[L.id]) L.es = NAME[L.id]; });

  /* Niveautest: de eerste optie is de juiste. nl = vertaling van de hele zin. */
  S.placement = [
    { lv: 'A1', q: 'Ben öğrenci___.', o: ['yim', 'sin', 'siniz'], nl: 'Ik ben student.' },
    { lv: 'A1', q: 'Sen Hollandalı ___?', o: ['mısın', 'misin', 'musun'], nl: 'Ben jij Nederlander?' },
    { lv: 'A1', q: 'Ben doktor ___, öğretmenim.', o: ['değilim', 'yok', 'değil'], nl: 'Ik ben geen dokter, ik ben leraar.' },
    { lv: 'A1', q: 'İki kardeşim ___.', o: ['var', 'değil', 'yim'], nl: 'Ik heb twee broers/zussen.' },
    { lv: 'A1', q: 'Bu benim anne___.', o: ['m', 'n', 'si'], nl: 'Dit is mijn moeder.' },
    { lv: 'A1', q: 'Saat üç ___.', o: ['buçuk', 'yarım', 'yarı'], nl: 'Het is half vier.' },
    { lv: 'A1', q: 'Şekersiz bir çay ___.', o: ['istiyorum', 'var', 'değilim'], nl: 'Ik wil een thee zonder suiker.' },
    { lv: 'A1', q: 'Her sabah kahve iç___.', o: ['iyorum', 'ıyorum', 'uyorum'], nl: 'Ik drink elke ochtend koffie.' },
    { lv: 'A1', q: 'Annem ev___.', o: ['de', 'da', 'te'], nl: 'Mijn moeder is thuis.' },
    { lv: 'A1', q: 'Yarın okul___ gidiyorum.', o: ['a', 'da', 'dan'], nl: 'Morgen ga ik naar school.' },
    { lv: 'A1', q: 'Hollanda’___ geliyorum.', o: ['dan', 'da', 'ya'], nl: 'Ik kom uit Nederland.' },
    { lv: 'A1', q: 'Bu çanta___ istiyorum.', o: ['yı', 'ya', 'da'], nl: 'Ik wil deze tas.' },
    { lv: 'A1', q: 'Dün sinemaya git___.', o: ['tim', 'dim', 'iyorum'], nl: 'Gisteren ben ik naar de bioscoop gegaan.' },
    { lv: 'A1', q: 'Yarın yağmur yağ___.', o: ['acak', 'ecek', 'dı'], nl: 'Morgen gaat het regenen.' },
    { lv: 'A1', q: 'Bugün çalış___yorum, çünkü Pazar.', o: ['mı', 'mi', 'ma'], nl: 'Vandaag werk ik niet, want het is zondag.' },
    { lv: 'A2', q: 'Her sabah erken kalk___.', o: ['arım', 'erim', 'ırım'], nl: 'Ik sta elke ochtend vroeg op.' },
    { lv: 'A2', q: 'Annem her gün pazara gel___.', o: ['ir', 'er', 'ar'], nl: 'Mijn moeder komt elke dag naar de markt.' },
    { lv: 'A2', q: 'Ben hiç sigara iç___.', o: ['mem', 'mezim', 'miyor'], nl: 'Ik rook nooit.' },
    { lv: 'A2', q: 'Bir çay daha iç___ misiniz?', o: ['er', 'iyor', 'ecek'], nl: 'Wilt u nog een thee?' },
    { lv: 'A2', q: 'Maalesef yarın gel___.', o: ['emem', 'ebilmem', 'emezim'], nl: 'Helaas kan ik morgen niet komen.' },
    { lv: 'A2', q: 'Bu çantayı taşı___ misin?', o: ['yabilir', 'abilir', 'yebilir'], nl: 'Kun je deze tas dragen?' },
    { lv: 'A2', q: 'Kar___ çok ağrıyor.', o: ['nım', 'ınım', 'nim'], nl: 'Ik heb erge buikpijn.' },
    { lv: 'A2', q: 'Çok su iç___.', o: ['melisin', 'malısın', 'meksin'], nl: 'Je moet veel water drinken.' },
    { lv: 'A2', q: 'Yarın erken kalk___ lazım.', o: ['mam', 'mak', 'tım'], nl: 'Ik moet morgen vroeg opstaan.' },
    { lv: 'A2', q: 'Ali’___ evi çok büyük.', o: ['nin', 'in', 'ye'], nl: 'Het huis van Ali is heel groot.' },
    { lv: 'A2', q: 'Anahtar masanın üstü___.', o: ['nde', 'de', 'ne'], nl: 'De sleutel ligt op de tafel.' },
    { lv: 'A2', q: 'Çocuk___ çok utangaçtım.', o: ['ken', 'kan', 'ince'], nl: 'Als kind was ik erg verlegen.' },
    { lv: 'A2', q: 'Dün akşam evde ___?', o: ['miydin', 'misin', 'mıydın'], nl: 'Was je gisteravond thuis?' },
    { lv: 'A2', q: 'Otobüs bekl___, birden telefonum çaldı.', o: ['iyordum', 'edim', 'erim'], nl: 'Ik stond op de bus te wachten, plotseling ging mijn telefoon.' },
    { lv: 'A2', q: 'Yat___ önce dişlerimi fırçalarım.', o: ['madan', 'tıktan', 'ınca'], nl: 'Voor het slapengaan poets ik mijn tanden.' },
    { lv: 'A2', q: 'Otele var___ seni ararım.', o: ['ınca', 'ırken', 'madan'], nl: 'Zodra ik in het hotel ben, bel ik je.' },
    { lv: 'A2', q: 'Bu mesaj ___ için.', o: ['senin', 'sen', 'sana'], nl: 'Dit bericht is voor jou.' },
    { lv: 'A2', q: 'Hiç kimse gel___.', o: ['medi', 'di', 'ir'], nl: 'Er is niemand gekomen.' }
  ];

  /* Vrije gesprekken met Profe Lupe. */
  S.scenarios = [
    { id: 'tr-nl-free', icon: '💬', lv: 'A1', title: 'Vrij gesprek', place: 'Turkije 🇹🇷', role: 'You are a friendly Turkish person (choose a city and say it at the start). Have a natural conversation about daily life, family, food and plans, adapted to the learner’s level. Use standard Turkish.', goal: 'Praat over wat je wilt.' },
    { id: 'tr-nl-cay', icon: '🍵', lv: 'A1', title: 'Thee bestellen in een çay bahçesi', place: 'İstanbul 🇹🇷', role: 'You are Hakan, a cheerful waiter in a tea garden by the Bosphorus in İstanbul. Greet the guest (Hoş geldiniz), ask what they want to drink and eat (çay, Türk kahvesi, simit, tost), ask şekerli or şekersiz, and bring the bill. Use only very simple Turkish.', goal: 'Bestel iets te drinken en te eten en vraag om de rekening.' },
    { id: 'tr-nl-tanisma', icon: '👋', lv: 'A1', title: 'Kennismaken met de buren', place: 'İzmir 🇹🇷', role: 'You are Ayşe Teyze, a warm, curious neighbour in İzmir. Welcome the learner who just moved in, ask where they are from, about their family and their work, and tell a little about yourself. Use only very simple Turkish.', goal: 'Stel jezelf voor, vertel over je familie en vraag ook naar haar.' },
    { id: 'tr-nl-pazar', icon: '🛍️', lv: 'A1', title: 'Afdingen op de bazaar', place: 'İstanbul 🇹🇷', role: 'You are Mustafa, a charming shopkeeper in the Grand Bazaar in İstanbul. Greet the customer (Buyurun!), name prices in lira, praise your goods and bargain good-naturedly, coming down a little each time. Use only very simple Turkish.', goal: 'Vraag de prijs, zeg dat het te duur is en ding af.' },
    { id: 'tr-nl-yol', icon: '🗺️', lv: 'A1', title: 'De weg vragen', place: 'Ankara 🇹🇷', role: 'You are Elif, a helpful passer-by in the centre of Ankara. The learner asks for directions to a museum, a pharmacy or the metro. Give short directions (düz gidin, sağa dönün, köşede) and say how far it is. Use only very simple Turkish.', goal: 'Vraag de weg, vraag of het ver is en bedank.' },
    { id: 'tr-nl-plan', icon: '☀️', lv: 'A1', title: 'Een weekend plannen', place: 'Antalya 🇹🇷', role: 'You are Deniz, an enthusiastic friend in Antalya. Plan the weekend with the learner: talk about the weather, suggest activities with -elim (plaja gidelim), and agree on a time and place. Use simple Turkish with the present, past (-di) and future (-ecek) tense.', goal: 'Bespreek het weer, stel iets voor en spreek een tijd af.' },
    { id: 'tr-nl-misafir', icon: '🫖', lv: 'A2', title: 'Op bezoek: aannemen en afslaan', place: 'Bursa 🇹🇷', role: 'You are Ayşe Hanım, a very hospitable host in Bursa. Offer tea, börek, soup and dessert with -er misiniz?, insist politely with -mez misiniz?, and ask about the guest’s habits (Genellikle ne yersiniz? Et yer misiniz?). Use simple A2 Turkish with the polite siz form.', goal: 'Neem iets aan, sla iets beleefd af en bedank voor het eten.' },
    { id: 'tr-nl-doktor', icon: '🩺', lv: 'A2', title: 'Bij de dokter', place: 'Antalya 🇹🇷', role: 'You are Dr. Yılmaz, a calm family doctor in Antalya. Ask what is wrong (Neyiniz var? Nereniz ağrıyor?), give advice with -meli and zorunda, say what is not needed with gerek yok and answer questions with -ebilir miyim. End with Geçmiş olsun. Use simple A2 Turkish.', goal: 'Vertel wat er pijn doet en vraag wat je moet doen.' },
    { id: 'tr-nl-daire', icon: '🏠', lv: 'A2', title: 'Een appartement bekijken', place: 'İzmir 🇹🇷', role: 'You are Hakan Bey, an estate agent in İzmir showing a 2+1 flat. Describe the rooms, the rent, the deposit and the neighbours, say whose the furniture is (ev sahibinin) and ask what the learner is looking for. Use simple A2 Turkish.', goal: 'Vraag naar de kamers, de huur en de borg.' },
    { id: 'tr-nl-otel', icon: '🎈', lv: 'A2', title: 'Inchecken in Cappadocië', place: 'Kapadokya 🇹🇷', role: 'You are the receptionist of a cave hotel in Göreme. Check the guest in, confirm the room and breakfast, and explain the balloon tour using -meden önce, -dikten sonra and -ince. Use simple A2 Turkish with the polite siz form.', goal: 'Check in en vraag naar het ontbijt en de ballonvaart.' },
    { id: 'tr-nl-telefon', icon: '📞', lv: 'A2', title: 'Een afspraak verzetten', place: 'İstanbul 🇹🇷', role: 'You are the secretary of an office in İstanbul. Answer the phone, ask who is calling (Kiminle görüşüyorum?), say the person they want is in a meeting, take a message and help reschedule (Perşembe size uygun mu?). Use simple A2 Turkish with the polite siz form.', goal: 'Zeg wie je bent en verzet de afspraak.' },
    { id: 'tr-nl-hikaye', icon: '📖', lv: 'A2', title: 'Vertel wat er gebeurde', place: 'İstanbul 🇹🇷', role: 'You are Selin, a curious friend in İstanbul. Ask the learner to tell something funny or strange that happened to them, keep the story going with Eee, sonra? Olamaz! Gerçekten mi?, and tell a short mishap of your own with -iyordu and -di. Use simple A2 Turkish.', goal: 'Vertel een kort verhaal met achtergrond en gebeurtenis.' }
  ];

  /* Uitdrukking van de dag: [Turks, Nederlands, vlag]. */
  S.phrases = [
    ['Kolay gelsin!', 'Succes met je werk! (zeg je tegen iedereen die aan het werk is)', '🇹🇷'],
    ['Geçmiş olsun.', 'Beterschap. / Sterkte. (lett.: moge het voorbij zijn)', '🇹🇷'],
    ['Elinize sağlık!', 'Dank voor het lekkere eten! (lett.: gezondheid aan uw handen)', '🇹🇷'],
    ['Afiyet olsun!', 'Eet smakelijk! (ook ná het eten)', '🇹🇷'],
    ['Hoş geldiniz! — Hoş bulduk.', 'Welkom! — (vast antwoord, lett.: wij vonden het prettig)', '🇹🇷'],
    ['Güle güle kullan.', 'Veel plezier ermee. (bij iets nieuws)', '🇹🇷'],
    ['Çok yaşa! — Sen de gör.', 'Gezondheid! — (vast antwoord, lett.: moge jij het ook meemaken)', '🇹🇷'],
    ['Damlaya damlaya göl olur.', 'Vele kleintjes maken één grote. (lett.: druppel voor druppel wordt het een meer)', '🇹🇷'],
    ['Bir dil bir insan, iki dil iki insan.', 'Eén taal, één mens; twee talen, twee mensen.', '🇹🇷'],
    ['Yavaş yavaş.', 'Rustig aan, stap voor stap.', '🇹🇷'],
    ['Boş ver!', 'Laat maar zitten! / Maak je niet druk!', '🇹🇷'],
    ['Başka bir şey?', 'Anders nog iets?', '🇹🇷'],
    ['Hayırlı olsun!', 'Gefeliciteerd! (met een nieuwe baan, een huis, een auto)', '🇹🇷'],
    ['İyi ki varsın.', 'Fijn dat je er bent. (lett.: gelukkig dat je bestaat)', '🇹🇷']
  ];
})(window.SPT);
