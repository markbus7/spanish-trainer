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
    { lv: 'A2', q: 'Hiç kimse gel___.', o: ['medi', 'di', 'ir'], nl: 'Er is niemand gekomen.' },
    { lv: 'B1', q: 'Ali yarın gelecek___, ama emin değilim.', o: ['miş', 'ti', 'se'], nl: 'Ali schijnt morgen te komen, maar ik weet het niet zeker.' },
    { lv: 'B1', q: 'Kapıda bekle___ adam kim?', o: ['yen', 'diği', 'yor'], nl: 'Wie is de man die bij de deur wacht?' },
    { lv: 'B1', q: 'Dün izle___ film çok güzeldi.', o: ['diğim', 'yen', 'dim'], nl: 'De film die ik gisteren heb gezien, was erg mooi.' },
    { lv: 'B1', q: 'Onun gel___ biliyorum.', o: ['diğini', 'mesini', 'diği'], nl: 'Ik weet dat hij gekomen is.' },
    { lv: 'B1', q: 'Senin de gel___ istiyorum.', o: ['meni', 'diğini', 'mek'], nl: 'Ik wil dat jij ook komt.' },
    { lv: 'B1', q: 'Yağmur yağ___ evde kalırız.', o: ['arsa', 'sa', 'ınca'], nl: 'Als het regent, blijven we thuis.' },
    { lv: 'B1', q: 'Vaktim ol___ gelirim.', o: ['ursa', 'sa', 'saydı'], nl: 'Als ik tijd heb, kom ik.' },
    { lv: 'B1', q: 'Zengin ol___ dünyayı gezerdim.', o: ['sam', 'ursam', 'dum'], nl: 'Als ik rijk was, zou ik de wereld rondreizen.' },
    { lv: 'B1', q: 'Keşke dün gel___!', o: ['seydin', 'irsen', 'din'], nl: 'Was je gisteren maar gekomen!' },
    { lv: 'B1', q: 'Bu köprü 1973’te yap___.', o: ['ıldı', 'tı', 'ıyor'], nl: 'Deze brug is in 1973 gebouwd.' },
    { lv: 'B1', q: 'Biletler gişeden al___.', o: ['ınır', 'ılır', 'ır'], nl: 'De kaartjes worden bij de kassa gekocht.' },
    { lv: 'B1', q: 'Dün saçımı kes___.', o: ['tirdim', 'ildim', 'tim'], nl: 'Gisteren heb ik mijn haar laten knippen.' },
    { lv: 'B1', q: 'Geç kal___ için özür dilerim.', o: ['dığım', 'mak', 'dım'], nl: 'Sorry dat ik te laat ben.' },
    { lv: 'B1', q: 'Yağmur___ rağmen yürüdük.', o: ['a', 'u', 'dan'], nl: 'Ondanks de regen hebben we gelopen.' },
    { lv: 'B1', q: 'Kahvaltı yap___ çıktı.', o: ['madan', 'arak', 'ıp'], nl: 'Hij vertrok zonder te ontbijten.' },
    { lv: 'B1', q: 'Geç kalmayayım ___ taksiye bindim.', o: ['diye', 'için', 'gibi'], nl: 'Ik nam een taxi om niet te laat te komen.' },
    { lv: 'B2', q: 'Havalimanına vardığımda uçak çoktan kalk___.', o: ['mıştı', 'acaktı', 'ıyor'], nl: 'Toen ik op het vliegveld aankwam, was het vliegtuig allang vertrokken.' },
    { lv: 'B2', q: 'Seni ara___, ama şarjım bitti.', o: ['yacaktım', 'mıştım', 'rım'], nl: 'Ik wilde je bellen, maar mijn batterij was leeg.' },
    { lv: 'B2', q: 'Toplantıya gelip gel___ sordu.', o: ['meyeceğimi', 'memi', 'ecek mi'], nl: 'Hij vroeg of ik naar de vergadering zou komen.' },
    { lv: 'B2', q: 'Müdür raporu bugün bitir___ söyledi.', o: ['memi', 'diğimi', 'ip'], nl: 'De directeur zei dat ik het rapport vandaag moest afmaken.' },
    { lv: 'B2', q: 'Bunu o yapmış ___, dün Ankara’daydı.', o: ['olamaz', 'olmamalı', 'olmalı'], nl: 'Hij kan dit niet gedaan hebben, hij was gisteren in Ankara.' },
    { lv: 'B2', q: 'Anahtarı evde unut___ olmalıyım.', o: ['muş', 'tu', 'acak'], nl: 'Ik moet de sleutel thuis vergeten zijn.' },
    { lv: 'B2', q: 'Eve gel___ gelmez seni ararım.', o: ['ir', 'er', 'ince'], nl: 'Zodra ik thuiskom, bel ik je.' },
    { lv: 'B2', q: 'Buraya gel___ on yıl oldu.', o: ['eli', 'ene', 'ince'], nl: 'Het is tien jaar geleden dat ik hier kwam.' },
    { lv: 'B2', q: 'Sen gel___ kadar bekleyeceğim.', o: ['ene', 'eli', 'diği'], nl: 'Ik wacht tot je komt.' },
    { lv: 'B2', q: 'Birbir___ yanlış anlamışız.', o: ['imizi', 'imize', 'leri'], nl: 'We hebben elkaar verkeerd begrepen.' },
    { lv: 'B2', q: 'Diyet yap___ bıktım.', o: ['maktan', 'maya', 'mayı'], nl: 'Ik ben het zat om op dieet te zijn.' },
    { lv: 'B2', q: 'Her sabah koş___ başladım.', o: ['maya', 'mayı', 'maktan'], nl: 'Ik ben begonnen elke ochtend te hardlopen.' },
    { lv: 'B2', q: 'O kadar yorgunum ___ ayakta duramıyorum.', o: ['ki', 'de', 'diye'], nl: 'Ik ben zo moe dat ik niet op mijn benen kan staan.' },
    { lv: 'B2', q: '___ gazeteyi okudun mu?', o: ['Bugünkü', 'Bugünki', 'Bugünün'], nl: 'Heb je de krant van vandaag gelezen?' },
    { lv: 'B2', q: 'Hiçbir şey olmamış ___ davranıyor.', o: ['gibi', 'kadar', 'için'], nl: 'Hij doet alsof er niets gebeurd is.' },
    { lv: 'B2', q: 'Başvurunuz incelen___.', o: ['mektedir', 'iyorum', 'se'], nl: 'Uw aanvraag wordt onderzocht.' }
  ];

  /* Vrije gesprekken met Pamuk Öğretmen. */
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
    { id: 'tr-nl-hikaye', icon: '📖', lv: 'A2', title: 'Vertel wat er gebeurde', place: 'İstanbul 🇹🇷', role: 'You are Selin, a curious friend in İstanbul. Ask the learner to tell something funny or strange that happened to them, keep the story going with Eee, sonra? Olamaz! Gerçekten mi?, and tell a short mishap of your own with -iyordu and -di. Use simple A2 Turkish.', goal: 'Vertel een kort verhaal met achtergrond en gebeurtenis.' },
    { id: 'tr-nl-dedikodu', icon: '🗣️', lv: 'B1', title: 'Roddels uit de buurt', place: 'İzmir 🇹🇷', role: 'You are Zeynep, a neighbour in İzmir who loves gossip. Tell the learner news about the neighbours that you only heard from others, using -miş and -mişmiş (Duydun mu? Üst kattaki komşu taşınıyormuş!), ask what they have heard, and react with Yok artık! Sahi mi? Use B1 Turkish.', goal: 'Vertel iets wat je gehoord hebt met -miş en reageer verbaasd.' },
    { id: 'tr-nl-film', icon: '🎬', lv: 'B1', title: 'Welke film gaan we kijken?', place: 'İstanbul 🇹🇷', role: 'You are Can, a film-loving friend in İstanbul. Discuss which film to watch tonight, describe films with relative clauses (geçen hafta izlediğim film, Oscar kazanan oyuncu), ask about the last film or series the learner saw and what they thought of it (Sence nasıldı?). Use B1 Turkish.', goal: 'Beschrijf een film met -en of -diği en geef je mening.' },
    { id: 'tr-nl-iklim', icon: '🌍', lv: 'B1', title: 'Als het zo doorgaat…', place: 'Antalya 🇹🇷', role: 'You are Deniz, an environmentally conscious friend in Antalya during a heatwave. Talk about climate with real conditionals (Böyle devam ederse…, Herkes bir şey yaparsa…), ask what people do in the Netherlands and what the learner does at home, and suggest plans with -irse and yoksa. Use B1 Turkish.', goal: 'Zeg wat er gebeurt als we niets doen en stel iets voor.' },
    { id: 'tr-nl-piyango', icon: '✨', lv: 'B1', title: 'Als je de loterij won…', place: 'İstanbul 🇹🇷', role: 'You are Emre, a daydreaming friend in İstanbul who just bought a lottery ticket. Ask what the learner would do if they won (Kazansan ne yapardın?), share your own dreams with -sem … -erdim, ask about a regret (Keşke ne yapsaydın?) and give advice with Senin yerinde olsam. Use B1 Turkish.', goal: 'Vertel wat je zou doen en noem een wens of spijt met keşke.' },
    { id: 'tr-nl-berber', icon: '✂️', lv: 'B1', title: 'Bij de kapper', place: 'İzmir 🇹🇷', role: 'You are a talkative barber/hairdresser in İzmir. Ask what the customer wants (Nasıl kestirmek istersiniz?), chat about what else they are having done before a wedding (Takım elbisenizi diktirdiniz mi?), mention price and time, and end with Sıhhatler olsun. Use B1 Turkish with causative forms.', goal: 'Zeg wat je wilt laten doen en vraag wat het kost.' },
    { id: 'tr-nl-gorusme', icon: '💼', lv: 'B1', title: 'Het sollicitatiegesprek', place: 'Ankara 🇹🇷', role: 'You are Murat Bey, a polite HR manager in Ankara interviewing the learner (formal siz). Ask why they applied (Neden bu işe başvurdunuz?), about experience, strengths and weaknesses, salary expectation, and answer their questions about hours and leave. Encourage answers with -mek için, -diğim için and rağmen. Use B1 Turkish.', goal: 'Leg uit waarom je solliciteert en stel zelf een vraag.' },
    { id: 'tr-nl-aksilik', icon: '🧳', lv: 'B2', title: 'Wat een reis!', place: 'İstanbul 🇹🇷', role: 'You are Burcu, a friend in İstanbul. The learner arrived a day late. Ask what happened (Dün gelecektin, ne oldu?), react with surprise and sympathy, ask follow-up questions that invite -mişti and -ecekti, and tell a short travel mishap of your own. Use B2 Turkish.', goal: 'Vertel je pechverhaal met -mişti en -ecekti.' },
    { id: 'tr-nl-mesaj', icon: '📋', lv: 'B2', title: 'Een boodschap doorgeven', place: 'İzmir 🇹🇷', role: 'You are Pınar, a colleague in an office in İzmir. A client called while the learner was in a meeting. Report what he said, asked and requested with indirect speech (-diğini söyledi, -ip -mediğini sordu, -mesini rica etti), ask what was decided in the meeting, and advise how to respond. Use B2 Turkish.', goal: 'Vraag wat de klant zei en vertel na wat er in de vergadering gezegd is.' },
    { id: 'tr-nl-komiser', icon: '🔍', lv: 'B2', title: 'De verdwenen ketting', place: 'İstanbul 🇹🇷', role: 'You are Komiser Nevin, a sharp but friendly police inspector in İstanbul investigating a missing necklace. Ask factual questions, speculate with olmalı / olabilir / olamaz / -miş olmalı, challenge the learner’s theories and ask for their own. Use B2 Turkish with formal siz.', goal: 'Geef je theorie met olmalı, olabilir en olamaz.' },
    { id: 'tr-nl-gurbet', icon: '🧭', lv: 'B2', title: 'Tussen twee landen', place: 'Rotterdam 🇳🇱', role: 'You are Hatice Teyze, a warm 68-year-old woman from Kayseri who has lived in Rotterdam for 45 years. Tell about arriving, the hard first years and homesickness, and ask the learner how long they have lived where they live and since when they learn Turkish. Use B2 Turkish with -ir -mez, -eli, -diğinden beri, -ene kadar.', goal: 'Vertel je eigen verhaal met -eli, -diğimden beri en -ir -mez.' },
    { id: 'tr-nl-koy', icon: '🌆', lv: 'B2', title: 'Stad of dorp?', place: 'İstanbul 🇹🇷', role: 'You are Cem, an exhausted office worker in İstanbul who dreams of moving to a village on the Aegean coast. Argue for village life, respond to objections with oysa, öte yandan, yine de, üstelik, and ask where the learner would prefer to live and why. Use B2 Turkish with connectives and o kadar … ki.', goal: 'Weeg voor- en nadelen af met verbindingswoorden.' },
    { id: 'tr-nl-gise', icon: '🏛️', lv: 'B2', title: 'Aan het loket', place: 'İzmir 🇹🇷', role: 'You are a civil servant at the immigration office in İzmir: polite, formal, a little bureaucratic. Tell the learner their application is being processed (incelenmektedir), that one document is missing, name the deadline and the consequence, and explain how to submit it. Use formal B2 Turkish with siz and -mektedir / -ecektir.', goal: 'Vraag naar je aanvraag en wat je nog moet aanleveren.' },
    { id: 'tr-nl-kanka', icon: '😎', lv: 'B2', title: 'Bijkletsen op straat', place: 'İstanbul 🇹🇷', role: 'You are Berk, a cheerful 25-year-old from Kadıköy. Speak fast, informal spoken Turkish with contractions (napıyosun, gelicem, bi, di mi) and fillers (ya, yani, hani, işte, falan, valla, kanka). Tease the learner for not showing up yesterday and invite them to watch the match tonight. Keep sentences short.', goal: 'Reageer met stopwoordjes en spreek iets af voor vanavond.' }
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
