/* Duits voor Nederlandstaligen: niveaus, niveautest A1–B1, vrije gesprekken en uitdrukkingen van de dag.
   Hoogduits uit Duitsland; Oostenrijk en Zwitserland komen aan bod in «Op reis» (landen.js). */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('de-nl')) return;

  /* Wat je per niveau kunt (de standaardteksten gaan over Spaans). */
  const CAN = {
    A1: ['Jezelf voorstellen en eenvoudige vragen stellen', 'Over familie, eten, je dag en je woning praten', 'Bestellen, kopen en de weg vragen, met der, die en das'],
    A2: ['Vertellen wat je gisteren en vroeger deed (Perfekt en Präteritum)', 'Plannen, vergelijkingen en redenen geven met weil en dass', 'Bij de dokter, op reis en in een restaurant je redden'],
    B1: ['Meningen geven en een gesprek gaande houden', 'Bijzinnen, passief en Konjunktiv II gebruiken', 'Nieuws, e-mails en series in grote lijnen volgen'],
    B2: ['Vlot en spontaan praten, ook over abstracte onderwerpen', 'Lastige grammatica en naamvallen zonder nadenken gebruiken', 'Typische Nederlandse fouten en valse vrienden vermijden'],
    C1: ['Register bewust kiezen: zakelijk, academisch en informeel', 'Idioom en vaste verbindingen natuurlijk gebruiken', 'Lange, complexe teksten begrijpen en schrijven'],
    C2: ['Ironie, woordgrappen en dialectkleur begrijpen', 'Vrijwel foutloos en volkomen natuurlijk formuleren', 'Vrijwel alles moeiteloos begrijpen']
  };
  const NAME = { A1: 'Anfänger', A2: 'Grundlagen', B1: 'Mittelstufe', B2: 'Gute Mittelstufe', C1: 'Fortgeschritten', C2: 'Fast muttersprachlich' };
  S.C.LEVELS.forEach(L => { if (CAN[L.id]) L.can = CAN[L.id]; if (NAME[L.id]) L.es = NAME[L.id]; });

  /* Niveautest A1–B1: de eerste optie is de juiste. */
  S.placement = [
    { lv: 'A1', q: 'Ich ___ aus den Niederlanden.', o: ['bin', 'bist', 'ist'], nl: 'Ik kom uit Nederland.' },
    { lv: 'A1', q: 'Wie ___ du?', o: ['heißt', 'heiße', 'heißen'], nl: 'Hoe heet je?' },
    { lv: 'A1', q: 'Das ist ___ Schwester.', o: ['meine', 'mein', 'meinen'], nl: 'Dat is mijn zus.' },
    { lv: 'A1', q: 'Sie ___ zwei Kinder.', o: ['hat', 'habt', 'hast'], nl: 'Zij heeft twee kinderen.' },
    { lv: 'A1', q: 'Ich möchte ___ Kaffee, bitte.', o: ['einen', 'ein', 'eine'], nl: 'Ik wil graag een koffie.' },
    { lv: 'A1', q: 'Ich habe ___ Hunger.', o: ['keinen', 'nicht', 'kein'], nl: 'Ik heb geen honger.' },
    { lv: 'A1', q: 'Ich stehe um sieben Uhr ___.', o: ['auf', 'an', 'aus'], nl: 'Ik sta om zeven uur op.' },
    { lv: 'A1', q: 'Die Apotheke ist neben ___ Bank.', o: ['der', 'die', 'dem'], nl: 'De apotheek is naast de bank.' },
    { lv: 'A1', q: 'Er ___ gern Fahrrad.', o: ['fährt', 'fahrt', 'fahren'], nl: 'Hij fietst graag.' },
    { lv: 'A1', q: 'Ich ___ gut schwimmen.', o: ['kann', 'kanne', 'können'], nl: 'Ik kan goed zwemmen.' },
    { lv: 'A1', q: 'Die Party ist ___ Samstag.', o: ['am', 'im', 'um'], nl: 'Het feest is op zaterdag.' },
    { lv: 'A1', q: 'Gestern habe ich einen Film ___.', o: ['gesehen', 'geseht', 'sehen'], nl: 'Gisteren heb ik een film gezien.' },
    { lv: 'A1', q: 'Wo ___ du gestern?', o: ['warst', 'hattest', 'bist'], nl: 'Waar was je gisteren?' },
    { lv: 'A1', q: 'Der Rock ist schön. Ich nehme ___.', o: ['ihn', 'es', 'er'], nl: 'De rok is mooi. Ik neem hem.' },
    { lv: 'A2', q: 'Wir ___ letztes Jahr nach Wien gefahren.', o: ['sind', 'haben', 'waren'], nl: 'We zijn vorig jaar naar Wenen gegaan.' },
    { lv: 'A2', q: 'Als Kind ___ ich nicht schwimmen.', o: ['konnte', 'könnte', 'kann'], nl: 'Als kind kon ik niet zwemmen.' },
    { lv: 'A2', q: 'Der Arzt hilft ___.', o: ['mir', 'mich', 'ich'], nl: 'De dokter helpt mij.' },
    { lv: 'A2', q: 'Ich bleibe zu Hause, weil ich krank ___.', o: ['bin', 'sein', 'ist'], nl: 'Ik blijf thuis, omdat ik ziek ben.' },
    { lv: 'A2', q: 'Ich stelle die Flasche auf ___ Tisch.', o: ['den', 'dem', 'der'], nl: 'Ik zet de fles op de tafel.' },
    { lv: 'A2', q: 'Berlin ist ___ als München.', o: ['größer', 'mehr groß', 'am größten'], nl: 'Berlijn is groter dan München.' },
    { lv: 'A2', q: 'Ich glaube, ___ er heute nicht kommt.', o: ['dass', 'das', 'was'], nl: 'Ik geloof dat hij vandaag niet komt.' },
    { lv: 'A2', q: 'Das Geschenk gefällt ___ sehr.', o: ['ihr', 'sie', 'ihre'], nl: 'Het cadeau bevalt haar erg.' },
    { lv: 'A2', q: '___ Sie mir bitte helfen?', o: ['Könnten', 'Konnten', 'Kannst'], nl: 'Zou u mij alstublieft kunnen helpen?' },
    { lv: 'A2', q: 'Ich interessiere ___ für Musik.', o: ['mich', 'mir', 'sich'], nl: 'Ik interesseer me voor muziek.' },
    { lv: 'A2', q: 'Ich fahre mit ___ Zug.', o: ['dem', 'den', 'der'], nl: 'Ik ga met de trein.' },
    { lv: 'A2', q: 'Das ist ein ___ Film.', o: ['guter', 'gute', 'gut'], nl: 'Dat is een goede film.' },
    { lv: 'A2', q: 'Wenn es regnet, ___ ich zu Hause.', o: ['bleibe', 'bleiben', 'ich bleibe'], nl: 'Als het regent, blijf ik thuis.' },
    { lv: 'A2', q: 'Morgen ___ es regnen.', o: ['wird', 'will', 'wurde'], nl: 'Morgen gaat het regenen.' },
    { lv: 'B1', q: 'Das ist der Mann, ___ ich gestern gesehen habe.', o: ['den', 'der', 'dem'], nl: 'Dat is de man die ik gisteren heb gezien.' },
    { lv: 'B1', q: 'Wenn ich Zeit ___, würde ich mehr reisen.', o: ['hätte', 'habe', 'hatte'], nl: 'Als ik tijd had, zou ik meer reizen.' },
    { lv: 'B1', q: 'Das Haus ___ 1900 gebaut.', o: ['wurde', 'würde', 'war'], nl: 'Het huis werd in 1900 gebouwd.' },
    { lv: 'B1', q: '___ es regnete, gingen wir spazieren.', o: ['Obwohl', 'Trotzdem', 'Weil'], nl: 'Hoewel het regende, gingen we wandelen.' },
    { lv: 'B1', q: 'Ich lerne Deutsch, ___ in Berlin zu arbeiten.', o: ['um', 'damit', 'für'], nl: 'Ik leer Duits om in Berlijn te werken.' },
    { lv: 'B1', q: 'Wegen ___ Wetters bleiben wir zu Hause.', o: ['des', 'dem', 'das'], nl: 'Vanwege het weer blijven we thuis.' },
    { lv: 'B1', q: 'Ich warte ___ den Bus.', o: ['auf', 'für', 'an'], nl: 'Ik wacht op de bus.' },
    { lv: 'B1', q: 'Ich weiß nicht, ___ er kommt.', o: ['ob', 'wenn', 'dass ob'], nl: 'Ik weet niet of hij komt.' },
    { lv: 'B1', q: 'Nachdem ich gegessen ___, ging ich spazieren.', o: ['hatte', 'habe', 'hätte'], nl: 'Nadat ik had gegeten, ging ik wandelen.' },
    { lv: 'B1', q: 'Er ___ gestern nach Hause und las ein Buch.', o: ['kam', 'kommte', 'kommt'], nl: 'Hij kwam gisteren thuis en las een boek.' },
    { lv: 'B1', q: 'Es regnet. ___ gehe ich spazieren.', o: ['Trotzdem', 'Obwohl', 'Weil'], nl: 'Het regent. Toch ga ik wandelen.' },
    { lv: 'B1', q: 'Ich habe vergessen, dich ___.', o: ['anzurufen', 'zu anrufen', 'anrufen'], nl: 'Ik ben vergeten je te bellen.' },
    { lv: 'B1', q: 'Je mehr ich lerne, ___ besser spreche ich.', o: ['desto', 'als', 'wie'], nl: 'Hoe meer ik leer, hoe beter ik spreek.' },
    { lv: 'B1', q: 'Ich lasse mein Auto ___.', o: ['reparieren', 'repariert', 'zu reparieren'], nl: 'Ik laat mijn auto repareren.' },
    { lv: 'B2', q: 'Wenn ich das gewusst ___, wäre ich gekommen.', o: ['hätte', 'habe', 'würde'], nl: 'Als ik dat geweten had, was ik gekomen.' },
    { lv: 'B2', q: 'Du hättest mich anrufen ___.', o: ['können', 'gekonnt', 'kannst'], nl: 'Je had me kunnen bellen.' },
    { lv: 'B2', q: 'Der Minister sagte, er ___ nichts davon gewusst.', o: ['habe', 'hat', 'haben'], nl: 'De minister zei dat hij er niets van had geweten. (krantenstijl)' },
    { lv: 'B2', q: 'Der Müll muss getrennt ___.', o: ['werden', 'worden', 'geworden'], nl: 'Het afval moet gescheiden worden.' },
    { lv: 'B2', q: 'Das Problem ___ sich leicht lösen.', o: ['lässt', 'kann', 'wird'], nl: 'Het probleem is makkelijk op te lossen.' },
    { lv: 'B2', q: 'Ich habe ___ Zeit noch Lust.', o: ['weder', 'entweder', 'sowohl'], nl: 'Ik heb tijd noch zin.' },
    { lv: 'B2', q: 'Er ist müde, ___ arbeitet er weiter.', o: ['trotzdem', 'obwohl', 'sodass'], nl: 'Hij is moe, toch werkt hij door.' },
    { lv: 'B2', q: 'Wegen der ___ Mieten ziehen viele weg.', o: ['steigenden', 'gestiegen', 'steigen'], nl: 'Vanwege de stijgende huren verhuizen velen.' },
    { lv: 'B2', q: 'Der Forscher, ___ Studie ich gelesen habe, kommt aus Wien.', o: ['dessen', 'deren', 'der'], nl: 'De onderzoeker wiens studie ik heb gelezen, komt uit Wenen.' },
    { lv: 'B2', q: 'Das ist alles, ___ ich weiß.', o: ['was', 'das', 'dass'], nl: 'Dat is alles wat ik weet.' },
    { lv: 'B2', q: 'Wir müssen eine Entscheidung ___.', o: ['treffen', 'nehmen', 'tun'], nl: 'We moeten een beslissing nemen.' },
    { lv: 'B2', q: 'Sie ist verliebt ___ ihn.', o: ['in', 'auf', 'an'], nl: 'Ze is verliefd op hem.' },
    { lv: 'B2', q: '___ der Krise haben viele ihre Stelle verloren.', o: ['Infolge', 'Obwohl', 'Deshalb'], nl: 'Als gevolg van de crisis hebben velen hun baan verloren.' },
    { lv: 'B2', q: 'Das Restaurant ___ sehr gut sein. (men zegt het)', o: ['soll', 'will', 'darf'], nl: 'Het restaurant schijnt heel goed te zijn.' }
  ];

  /* Vrije gesprekken met Profe Lupe. */
  S.scenarios = [
    { id: 'de-nl-free', icon: '💬', lv: 'A1', title: 'Vrij gesprek', place: 'Deutschland 🇩🇪', role: 'You are a friendly German (choose a city and say it at the start). Have a natural conversation about daily life, hobbies and plans, adapted to the learner’s level. Use "du".', goal: 'Praat over wat je wilt.' },
    { id: 'de-nl-baeckerei', icon: '🥨', lv: 'A1', title: 'Bestellen bij de bakker', place: 'München 🇩🇪', role: 'You are Frau Huber, a cheerful baker in Munich. Ask what the customer would like, how many, and whether it is to eat here or to take away. Tell the price. Use "Sie".', goal: 'Bestel broodjes en iets te drinken en betaal.' },
    { id: 'de-nl-wochenende', icon: '🕰️', lv: 'A2', title: 'Je weekend vertellen', place: 'Köln 🇩🇪', role: 'You are Jana, a coworker in Cologne. It is Monday morning. Ask what the learner did on the weekend and ask follow-up questions in the Perfekt (haben and sein). Use "du".', goal: 'Vertel wat je in het weekend deed en reageer op haar verhaal.' },
    { id: 'de-nl-arzt', icon: '🩺', lv: 'A2', title: 'Bij de huisarts', place: 'Hamburg 🇩🇪', role: 'You are Dr. Petersen, a calm general practitioner in Hamburg. Ask what is wrong, since when, and give simple advice with "Sie sollten …". Use "Sie".', goal: 'Leg uit wat je klachten zijn en vraag wat je moet doen.' },
    { id: 'de-nl-bewerbung', icon: '💼', lv: 'B1', title: 'Sollicitatiegesprek', place: 'Frankfurt 🇩🇪', role: 'You are Frau Schneider, an HR manager in Frankfurt interviewing the learner. Ask about experience, strengths, why they want to work in Germany, and a difficult situation they handled. Use "Sie".', goal: 'Vertel over je ervaring en beantwoord lastige vragen.' },
    { id: 'de-nl-wg', icon: '🏠', lv: 'B1', title: 'Kennismaken bij een WG', place: 'Berlin 🇩🇪', role: 'You are Max, a student in a shared flat (WG) in Berlin looking for a new flatmate. Interview the learner informally: habits, cleaning, noise, hobbies. Give your opinion and ask for theirs. Use "du".', goal: 'Overtuig Max dat je een goede huisgenoot bent en geef je mening.' }
  ];

  /* Uitdrukking van de dag: [Duits, Nederlands, vlag]. */
  S.phrases = [
    ['Alles klar!', 'Alles duidelijk! / Komt goed!', '🇩🇪'],
    ['Das ist mir Wurst.', 'Dat maakt me niets uit.', '🇩🇪'],
    ['Ich drücke dir die Daumen.', 'Ik duim voor je.', '🇩🇪'],
    ['Ich verstehe nur Bahnhof.', 'Ik snap er niets van.', '🇩🇪'],
    ['Schönen Feierabend!', 'Fijne avond! (na het werk)', '🇩🇪'],
    ['Übung macht den Meister.', 'Oefening baart kunst.', '🇩🇪'],
    ['Kein Problem.', 'Geen probleem.', '🇩🇪'],
    ['Das passt schon.', 'Het is wel goed zo.', '🇦🇹'],
    ['Aller Anfang ist schwer.', 'Alle begin is moeilijk.', '🇩🇪'],
    ['Da haben wir den Salat.', 'Nu zitten we met de gebakken peren.', '🇩🇪'],
    ['Gute Besserung!', 'Beterschap!', '🇩🇪'],
    ['Mahlzeit!', 'Eet smakelijk! (ook als groet rond de middag)', '🇩🇪'],
    ['Jetzt geht’s um die Wurst.', 'Nu komt het erop aan.', '🇩🇪'],
    ['Ich habe die Nase voll.', 'Ik ben het zat.', '🇩🇪'],
    ['En Guete!', 'Eet smakelijk!', '🇨🇭'],
    ['Schritt für Schritt.', 'Stap voor stap.', '🇩🇪']
  ];
})(window.SPT);
