/* 📖 Grammaticabegrippen: wat is een lidwoord, een onderwerp, de subjuntivo …? (Mark, 2026-11-25)
   Elk begrip in gewone taal, met voorbeelden in de taal die je leert. Werkt zonder AI en offline.

   Taalonafhankelijk opgezet:
   - De algemene uitleg (html) is in de uitlegtaal van de cursus (nu: Nederlands, voor es-nl en en-nl).
   - Per doeltaal een eigen blok: es (Spaans, Latijns-Amerikaans) en en (Engels). Een nieuwe taal (bv. de of fr)
     krijgt gewoon een eigen sleutel met { n, html, ex, uz, table }. Ontbreekt het blok voor een doeltaal en heeft
     het begrip wel blokken voor andere talen, dan hoort het begrip niet bij deze taal en wordt het verborgen.
   - Uitzonderingen staan in uz als [titel, uitleg MÉT de reden] en krijgen de herkenbare ⚠️-stijl (Marks regel).

   Begrip: { id, c: categorie, t: naam, a: [zoekpatronen (regex, kleine letters) voor tikbare woorden in de uitleg],
             k: korte omschrijving, html: algemene uitleg, es/en: blok per doeltaal, rel: [verwante id's] }

   Tikbaar maken: S.Begrippen.decorate(el) zet in de uitleg van lessen, ⓘ-notities en uitzonderingen een stippellijn
   onder de eerste keer dat een begrip voorkomt; tik = korte uitleg in een venster. match(tekst) is puur (getest). */
(function (S) {
  'use strict';

  const CATS = [
    ['soort', '🧱', 'Woordsoorten', 'Wat voor soort woord is het?'],
    ['zin', '🧩', 'De zin', 'Welke rol speelt een woord in de zin?'],
    ['ww', '⚙️', 'Werkwoorden', 'Hoe een werkwoord van vorm verandert'],
    ['tijd', '⏳', 'Tijden en wijzen', 'Wanneer gebeurt het, en hoe bedoel je het?'],
    ['vorm', '🔤', 'Vorm en klank', 'Geslacht, meervoud, accenten …'],
    ['aan', '🗣️', 'Aanspreken', 'Jij, u en jullie']
  ];

  const B = [
    /* ================= Woordsoorten ================= */
    { id: 'zn', c: 'soort', t: 'Zelfstandig naamwoord', a: ['zelfstandige? naamwoord(?:en)?', 'znw'],
      k: 'Een woord voor een ding, persoon, dier, plaats of idee: huis, vriendin, liefde.',
      html: 'Een <b>zelfstandig naamwoord</b> is een woord voor een ding, persoon, dier, plaats of idee: <i>tafel, moeder, kat, Lima, geluk</i>. <b>Test:</b> past er <i>de</i>, <i>het</i> of <i>een</i> voor? Dan is het bijna altijd een zelfstandig naamwoord.',
      es: { n: 'el sustantivo',
        html: 'In het Spaans is elk zelfstandig naamwoord <b>mannelijk of vrouwelijk</b>, ook dingen en ideeën. Dat zie je aan het lidwoord: <i>el libro</i>, <i>la mesa</i>. Woorden op <b>-o</b> zijn meestal mannelijk, woorden op <b>-a</b> meestal vrouwelijk. Leer een nieuw woord daarom altijd mét <i>el</i> of <i>la</i>.',
        ex: [['el libro', 'het boek'], ['la ciudad', 'de stad'], ['el amor', 'de liefde'], ['la computadora', 'de computer']],
        uz: [['el día, el problema, la mano', 'Deze woorden hebben het "verkeerde" geslacht voor hun uitgang: <i>el día</i> en <i>el problema</i> eindigen op -a maar zijn mannelijk, <i>la mano</i> eindigt op -o maar is vrouwelijk. <b>Waarom?</b> Ze hadden dat geslacht al in het Latijn of Grieks, en dat is zo gebleven.']] },
      en: { n: 'noun',
        html: 'In het Engels hebben zelfstandige naamwoorden <b>geen geslacht</b>: het lidwoord is altijd <i>the</i>, voor een man, een vrouw of een ding.',
        ex: [['the house', 'het huis'], ['a friend', 'een vriend(in)'], ['happiness', 'geluk']],
        uz: [['information, advice, furniture', 'Deze woorden zijn in het Engels <b>ontelbaar</b>: geen meervoud en geen <i>a/an</i>. Dus <i>some advice</i>, niet <i>an advice</i> of <i>advices</i>. <b>Waarom?</b> Het Engels ziet ze als een massa (zoals water), niet als losse dingen die je kunt tellen.']] },
      rel: ['lidwoord', 'geslacht', 'getal'] },

    { id: 'lidwoord', c: 'soort', t: 'Lidwoord', a: ['lidwoord(?:en)?', 'bepaalde? lidwoord(?:en)?', 'onbepaalde? lidwoord(?:en)?'],
      k: 'De, het en een: het woordje vóór een zelfstandig naamwoord.',
      html: 'Een <b>lidwoord</b> is het woordje vóór een zelfstandig naamwoord. Het <b>bepaalde</b> lidwoord (<i>de, het</i>) gebruik je voor iets dat bekend is: <i>de</i> fiets van mijn zus. Het <b>onbepaalde</b> lidwoord (<i>een</i>) gebruik je voor iets nieuws of willekeurigs: ik wil <i>een</i> fiets.',
      es: { n: 'el artículo',
        html: 'Het Spaans heeft vier vormen per soort, want het lidwoord past zich aan bij het <b>geslacht</b> en het <b>getal</b> van het woord. Je gebruikt het bepaalde lidwoord ook vaker dan in het Nederlands, bijvoorbeeld bij dingen in het algemeen: <i>Me gusta <b>el</b> café</i> (ik hou van koffie). Let op: <b>a + el = al</b> en <b>de + el = del</b>: <i>Voy al mercado</i>, <i>Soy del sur</i>.',
        table: [['', 'mannelijk', 'vrouwelijk'], ['de (enkelvoud)', 'el', 'la'], ['de (meervoud)', 'los', 'las'], ['een (enkelvoud)', 'un', 'una'], ['enkele / wat', 'unos', 'unas']],
        ex: [['el perro y la casa', 'de hond en het huis'], ['un amigo y una amiga', 'een vriend en een vriendin'], ['los niños y las niñas', 'de jongens en de meisjes'], ['Me gusta el café.', 'Ik hou van koffie.']],
        uz: [['el agua, el águila, el hambre', 'Deze woorden zijn <b>vrouwelijk</b>, toch zeg je <b>el</b>. <b>Waarom?</b> Ze beginnen met een beklemtoonde <b>a-</b>; <i>la agua</i> zou klinken als één lange a, dus wordt het lidwoord <i>el</i>. De rest blijft vrouwelijk: <i>el agua fría</i>, <i>las aguas</i>.']] },
      en: { n: 'article',
        html: 'Het Engels heeft één bepaald lidwoord: <b>the</b>. Het onbepaalde is <b>a</b>, of <b>an</b> vóór een klinkerklank: <i>a car, an apple</i>. Bij dingen in het algemeen gebruik je géén lidwoord: <i>I love coffee</i>.',
        ex: [['the dog', 'de hond'], ['a car, an apple', 'een auto, een appel'], ['I love coffee.', 'Ik hou van koffie.']],
        uz: [['an hour, a university', 'Je zegt <i>an hour</i> maar <i>a university</i>. <b>Waarom?</b> Het gaat om de <b>klank</b>, niet om de letter: in <i>hour</i> hoor je geen h (dus een klinker), <i>university</i> begint met een j-klank (dus een medeklinker).']] },
      rel: ['zn', 'geslacht', 'congruentie'] },

    { id: 'bn', c: 'soort', t: 'Bijvoeglijk naamwoord', a: ['bijvoeglijke? naamwoord(?:en)?', 'bijv\\. naamw\\.', 'adjectie(?:f|ven)'],
      k: 'Zegt hoe iets of iemand is: groot, mooi, Mexicaans.',
      html: 'Een <b>bijvoeglijk naamwoord</b> zegt hoe iets of iemand is: <i>een <b>rode</b> auto</i>, <i>het eten is <b>lekker</b></i>. Het hoort bij een zelfstandig naamwoord.',
      es: { n: 'el adjetivo',
        html: 'In het Spaans staat het bijvoeglijk naamwoord meestal <b>achter</b> het zelfstandig naamwoord, en het past zich aan in <b>geslacht en getal</b>: <i>un carro rojo</i>, <i>una casa roja</i>, <i>unos carros rojos</i>. Woorden op <b>-e</b> of een medeklinker veranderen alleen in het meervoud: <i>una chica inteligente</i>, <i>dos chicas inteligentes</i>.',
        ex: [['un carro rojo', 'een rode auto'], ['una ciudad bonita', 'een mooie stad'], ['Los tacos están ricos.', 'De taco’s zijn lekker.'], ['unos amigos amables', 'een paar aardige vrienden']],
        uz: [['buen, mal, gran', 'Een paar bijvoeglijke naamwoorden mogen ook <b>vóór</b> het woord, en worden dan korter: <i>un <b>buen</b> amigo</i>, <i>un <b>mal</b> día</i>, <i>una <b>gran</b> ciudad</i>. <b>Waarom?</b> Vóór een woord slijt de uitgang weg in de uitspraak. Bij <i>grande</i> verandert ook de betekenis: <i>una ciudad grande</i> = een grote stad, <i>una gran ciudad</i> = een geweldige stad.']] },
      en: { n: 'adjective',
        html: 'In het Engels staat het bijvoeglijk naamwoord <b>vóór</b> het zelfstandig naamwoord en het <b>verandert nooit</b>: geen -e zoals in het Nederlands, geen meervoud.',
        ex: [['a red car, two red cars', 'een rode auto, twee rode auto’s'], ['The food is delicious.', 'Het eten is heerlijk.']] },
      rel: ['zn', 'congruentie', 'vergelijking', 'bw'] },

    { id: 'ww', c: 'soort', t: 'Werkwoord', a: ['werkwoord(?:en|s)?'],
      k: 'Zegt wat iemand doet, wat er gebeurt of hoe iets is: lopen, eten, zijn.',
      html: 'Een <b>werkwoord</b> zegt wat iemand doet of wat er gebeurt (<i>lopen, eten, regenen</i>) of hoe iets is (<i>zijn, worden, lijken</i>). Het werkwoord verandert van vorm afhankelijk van <b>wie</b> het doet en <b>wanneer</b>: <i>ik loop, hij loopt, wij liepen</i>. Dat heet vervoegen.',
      es: { n: 'el verbo',
        html: 'Spaanse werkwoorden vallen in drie groepen, naar hun uitgang in de infinitief: <b>-ar</b> (<i>hablar</i>), <b>-er</b> (<i>comer</i>) en <b>-ir</b> (<i>vivir</i>). Elke groep heeft eigen uitgangen. Omdat de uitgang al laat zien wie iets doet, laat je <i>yo, tú</i> enzovoort meestal weg: <i>Hablo español</i> = ik spreek Spaans.',
        ex: [['hablar, comer, vivir', 'praten, eten, wonen'], ['Hablo español.', 'Ik spreek Spaans.'], ['¿Dónde vives?', 'Waar woon je?']] },
      en: { n: 'verb',
        html: 'Engelse werkwoorden veranderen weinig. In de tegenwoordige tijd krijgt alleen <b>he/she/it</b> een <b>-s</b>: <i>I work, she works</i>.',
        ex: [['I work, she works', 'ik werk, zij werkt'], ['They live in Boston.', 'Ze wonen in Boston.']] },
      rel: ['infinitief', 'vervoegen', 'pv', 'onregelmatig'] },

    { id: 'bw', c: 'soort', t: 'Bijwoord', a: ['bijwoord(?:en)?'],
      k: 'Zegt iets over een werkwoord of een hele zin: snel, heel, gisteren, hier.',
      html: 'Een <b>bijwoord</b> zegt iets over een werkwoord (<i>hij praat <b>snel</b></i>), over een bijvoeglijk naamwoord (<i><b>heel</b> mooi</i>) of over de hele zin (<i><b>gisteren</b>, <b>hier</b>, <b>misschien</b></i>). Een bijwoord verandert nooit van vorm.',
      es: { n: 'el adverbio',
        html: 'Veel Spaanse bijwoorden maak je door <b>-mente</b> achter de vrouwelijke vorm van het bijvoeglijk naamwoord te zetten: <i>rápida → rápidamente</i>, <i>fácil → fácilmente</i>. In Latijns-Amerika hoor je in spreektaal vaak gewoon de korte vorm: <i>Habla rápido</i>. Bijwoorden veranderen nooit van vorm: <i>muy</i> blijft <i>muy</i>.',
        ex: [['Habla muy rápido.', 'Hij praat heel snel.'], ['Mañana vamos a la playa.', 'Morgen gaan we naar het strand.'], ['Llegó tranquilamente.', 'Ze kwam rustig aan.']],
        uz: [['bien en mal', 'Van <i>bueno</i> (goed) en <i>malo</i> (slecht) zeg je niet <i>buenamente</i>, maar <b>bien</b> en <b>mal</b>: <i>Cantas muy bien</i>. <b>Waarom?</b> Het zijn oude Latijnse bijwoorden (<i>bene, male</i>) die al bestonden voordat -mente in gebruik kwam.']] },
      en: { n: 'adverb',
        html: 'Engelse bijwoorden eindigen vaak op <b>-ly</b>: <i>quick → quickly</i>. In het Nederlands zie je geen verschil (<i>snel</i> en <i>snel</i>), in het Engels wel: <i>a quick answer</i>, maar <i>she answered quickly</i>.',
        ex: [['She answered quickly.', 'Ze antwoordde snel.'], ['very nice', 'heel mooi']],
        uz: [['good → well, fast, hard', 'Van <i>good</i> wordt het bijwoord <b>well</b>: <i>You speak English well</i>. En <i>fast</i> en <i>hard</i> blijven gewoon <i>fast</i> en <i>hard</i> (<i>hardly</i> betekent "nauwelijks"!). <b>Waarom?</b> Het zijn oude vormen die ouder zijn dan de -ly-regel.']] },
      rel: ['bn', 'ww'] },

    { id: 'vnw', c: 'soort', t: 'Voornaamwoord', a: ['voornaamwoord(?:en)?'],
      k: 'Een woord in plaats van een naam of zelfstandig naamwoord: ik, hem, mijn, deze.',
      html: 'Een <b>voornaamwoord</b> gebruik je in plaats van een naam of een zelfstandig naamwoord, zodat je niet steeds hetzelfde hoeft te zeggen: <i>Ana is moe. <b>Ze</b> gaat slapen.</i> Er zijn verschillende soorten: persoonlijke (<i>ik, hem</i>), bezittelijke (<i>mijn</i>), aanwijzende (<i>deze, die</i>), wederkerende (<i>zich</i>), betrekkelijke (<i>die, dat</i> in een bijzin) en vragende (<i>wie, wat</i>).',
      es: { n: 'el pronombre',
        html: 'Ook het Spaans heeft al die soorten. Bekijk ze hieronder per soort. Een groot verschil met het Nederlands: het <b>onderwerp</b> (<i>yo, tú, ella</i>) laat je meestal weg, en de voornaamwoorden voor het lijdend en meewerkend voorwerp (<i>lo, la, le</i>) staan <b>vóór</b> het werkwoord.',
        ex: [['Ana está cansada. Va a dormir.', 'Ana is moe. Ze gaat slapen.'], ['¿El libro? Lo compré ayer.', 'Het boek? Ik heb het gisteren gekocht.']] },
      en: { n: 'pronoun',
        html: 'Ook het Engels heeft al die soorten. Het onderwerp mag je in het Engels <b>nooit</b> weglaten: <i>She is tired</i>, niet <i>Is tired</i>.',
        ex: [['Ana is tired. She is going to sleep.', 'Ana is moe. Ze gaat slapen.']] },
      rel: ['pers', 'bez', 'aanw', 'obj', 'wederk', 'betr', 'vraag'] },

    { id: 'pers', c: 'soort', t: 'Persoonlijk voornaamwoord', a: ['persoonlijke? voornaamwoord(?:en)?', 'onderwerpsvorm(?:en)?'],
      k: 'Ik, jij, hij, zij, wij, jullie, zij: wie iets doet.',
      html: 'Het <b>persoonlijk voornaamwoord</b> zegt over welke persoon het gaat: <i>ik, jij, hij, zij, wij, jullie, zij</i>. Als onderwerp staan ze in de zin op de plek van een naam: <i>Pedro werkt → <b>Hij</b> werkt</i>.',
      es: { n: 'los pronombres personales',
        html: 'Omdat de werkwoordsvorm al laat zien wie iets doet, laat je het voornaamwoord meestal <b>weg</b>: <i>Trabajo en Bogotá</i>. Je zegt het alleen voor nadruk of contrast: <i><b>Yo</b> trabajo, <b>tú</b> descansas</i>. <i>Nosotras</i> en <i>ellas</i> zijn de vormen voor een groep van alleen vrouwen.',
        table: [['', 'enkelvoud', 'meervoud'], ['1e persoon', 'yo (ik)', 'nosotros / nosotras (wij)'], ['2e persoon', 'tú (jij) · vos (jij, o.a. 🇦🇷)', 'ustedes (jullie)'], ['3e persoon', 'él (hij) · ella (zij) · usted (u)', 'ellos / ellas (zij)']],
        ex: [['Trabajo en Bogotá.', 'Ik werk in Bogotá.'], ['Yo cocino y tú lavas los platos.', 'Ík kook en jíj wast af.'], ['¿Ustedes son de Chile?', 'Komen jullie uit Chili?']],
        uz: [['usted en ustedes', '<i>Usted</i> (u) en <i>ustedes</i> (jullie) spreken iemand aan, maar het werkwoord staat in de <b>3e persoon</b>: <i>usted <b>habla</b></i>, <i>ustedes <b>hablan</b></i>, net als bij <i>él</i> en <i>ellos</i>. <b>Waarom?</b> <i>Usted</i> komt van <i>vuestra merced</i> ("uwe genade"): je sprak iemand vroeger beleefd aan alsof het over een derde ging.']] },
      en: { n: 'personal pronouns',
        html: 'Engels: <i>I, you, he, she, it, we, you, they</i>. <b>You</b> is zowel jij, u als jullie. <b>I</b> schrijf je altijd met een hoofdletter.',
        ex: [['We are from Utrecht.', 'Wij komen uit Utrecht.'], ['Are you ready?', 'Ben je / bent u / zijn jullie klaar?']],
        uz: [['I met een hoofdletter', '<i>I</i> schrijf je altijd met een hoofdletter, ook midden in de zin. <b>Waarom?</b> Een losse kleine <i>i</i> viel in oude handschriften weg tussen de andere letters; de hoofdletter maakte het woord zichtbaar.']] },
      rel: ['vnw', 'persoon', 'onderwerp', 'aanspreken'] },

    { id: 'bez', c: 'soort', t: 'Bezittelijk voornaamwoord', a: ['bezittelijke? voornaamwoord(?:en)?', 'bezittelijke? vorm(?:en)?', 'bezittelijk'],
      k: 'Mijn, jouw, zijn, haar, ons: van wie iets is.',
      html: 'Een <b>bezittelijk voornaamwoord</b> zegt van wie iets is: <i><b>mijn</b> moeder, <b>jouw</b> telefoon, <b>ons</b> huis</i>.',
      es: { n: 'los posesivos',
        html: 'In het Spaans past het bezittelijk voornaamwoord zich aan bij <b>het bezit</b>, niet bij de bezitter: <i><b>mis</b> libros</i> (mijn boeken, meervoud omdat het om meer boeken gaat), <i><b>nuestra</b> casa</i> (ons huis, vrouwelijk omdat <i>casa</i> vrouwelijk is). Achter het woord of los gebruik je de lange vorm: <i>Es <b>mío</b></i> (het is van mij), <i>un amigo <b>mío</b></i> (een vriend van mij).',
        table: [['', 'vóór het woord', 'los / achter het woord'], ['mijn', 'mi, mis', 'mío, mía, míos, mías'], ['jouw', 'tu, tus', 'tuyo, tuya …'], ['zijn, haar, uw, hun', 'su, sus', 'suyo, suya …'], ['ons', 'nuestro, nuestra …', 'nuestro, nuestra …']],
        ex: [['mis libros', 'mijn boeken'], ['nuestra casa', 'ons huis'], ['Ese celular es mío.', 'Die mobiel is van mij.']],
        uz: [['su = zijn, haar, uw én hun', '<i>Su</i> kan vier dingen betekenen: zijn, haar, uw en hun. <b>Waarom?</b> Al die vormen kwamen in de loop van de tijd samen in één woord. Is het onduidelijk, dan zeg je het erbij: <i>la casa <b>de ella</b></i>, <i>la casa <b>de usted</b></i>.']] },
      en: { n: 'possessive pronouns',
        html: 'Engels: <i>my, your, his, her, its, our, their</i>, en los: <i>mine, yours, his, hers, ours, theirs</i>. Ze veranderen niet bij meervoud: <i>my book, my books</i>.',
        ex: [['my books', 'mijn boeken'], ['This phone is mine.', 'Deze telefoon is van mij.']],
        uz: [['its, niet it’s', '<i>Its</i> (zijn/haar, van een ding) heeft <b>geen</b> apostrof: <i>The dog wags its tail</i>. <b>Waarom?</b> <i>It’s</i> was al bezet als afkorting van <i>it is</i>; zonder apostrof is het verschil zichtbaar.']] },
      rel: ['vnw', 'congruentie'] },

    { id: 'aanw', c: 'soort', t: 'Aanwijzend voornaamwoord', a: ['aanwijzende? voornaamwoord(?:en)?', 'aanwijzend'],
      k: 'Deze, dit, die, dat: wijst iets aan.',
      html: 'Een <b>aanwijzend voornaamwoord</b> wijst iets aan: <i><b>deze</b> jas, <b>dat</b> huis</i>. Het zegt ook iets over afstand: <i>deze/dit</i> is dichtbij, <i>die/dat</i> verder weg.',
      es: { n: 'los demostrativos',
        html: 'Het Spaans heeft <b>drie</b> afstanden: <b>este</b> (hier, bij mij), <b>ese</b> (daar, bij jou) en <b>aquel</b> (daarginds, ver van ons allebei). Ze passen zich aan in geslacht en getal: <i>esta casa, estos carros</i>. Voor iets onbekends of een hele situatie gebruik je de onzijdige vorm: <i>¿Qué es <b>esto</b>?</i>',
        table: [['', 'hier', 'daar', 'daarginds'], ['mannelijk', 'este, estos', 'ese, esos', 'aquel, aquellos'], ['vrouwelijk', 'esta, estas', 'esa, esas', 'aquella, aquellas'], ['onzijdig', 'esto', 'eso', 'aquello']],
        ex: [['Esta chaqueta es nueva.', 'Deze jas is nieuw.'], ['¿Me pasas ese vaso?', 'Geef je me dat glas (bij jou)?'], ['Aquel volcán es el Popocatépetl.', 'Die vulkaan daarginds is de Popocatépetl.'], ['¿Qué es esto?', 'Wat is dit?']] },
      en: { n: 'demonstratives',
        html: 'Engels: <b>this/these</b> (dichtbij) en <b>that/those</b> (verder weg). Geen verschil tussen de- en het-woorden.',
        ex: [['this jacket, these shoes', 'deze jas, deze schoenen'], ['that house, those cars', 'dat huis, die auto’s']] },
      rel: ['vnw', 'congruentie'] },

    { id: 'obj', c: 'soort', t: 'Voornaamwoord als voorwerp', a: ['objectvoornaamwoord(?:en)?', 'object-voornaamwoord(?:en)?'],
      k: 'Hem, haar, het, ze, mij: als iemand of iets het voorwerp van de zin is.',
      html: 'Is iemand of iets niet het onderwerp maar het <b>voorwerp</b> van de zin, dan krijgt het voornaamwoord een andere vorm: <i>Ik zie <b>hem</b></i>, <i>Ze geeft <b>mij</b> een cadeau</i>.',
      es: { n: 'los pronombres de objeto',
        html: 'Voor het <b>lijdend voorwerp</b>: <i>me, te, lo/la, nos, los/las</i>. Voor het <b>meewerkend voorwerp</b> (aan wie): <i>me, te, le, nos, les</i>. Ze staan <b>vóór</b> de persoonsvorm: <i><b>Lo</b> veo</i>, <i><b>Te</b> llamo mañana</i>. Bij een infinitief, gerundio of bevelende vorm plak je ze er achteraan vast: <i>Quiero ver<b>lo</b></i>, <i>¡Llámame!</i>',
        table: [['', 'lijdend voorwerp', 'meewerkend voorwerp'], ['mij', 'me', 'me'], ['jou', 'te', 'te'], ['hem / haar / u / het', 'lo, la', 'le'], ['ons', 'nos', 'nos'], ['jullie / hen / ze', 'los, las', 'les']],
        ex: [['¿El café? Lo tomo sin azúcar.', 'De koffie? Ik drink hem zonder suiker.'], ['Te llamo mañana.', 'Ik bel je morgen.'], ['Le doy un regalo a mi mamá.', 'Ik geef mijn moeder een cadeau.'], ['Quiero verla.', 'Ik wil haar zien.']],
        uz: [['se lo (niet le lo)', 'Komen <i>le/les</i> en <i>lo/la/los/las</i> naast elkaar, dan wordt <i>le</i> → <b>se</b>: <i><b>Se lo</b> doy</i> (ik geef het aan hem/haar), niet <i>le lo doy</i>. <b>Waarom?</b> In het oude Spaans was dat <i>gelo</i>; dat klonk later als <i>se lo</i>, en zo bleef het.']] },
      en: { n: 'object pronouns',
        html: 'Engels: <i>me, you, him, her, it, us, them</i>. Ze staan altijd <b>achter</b> het werkwoord: <i>I see <b>him</b></i>, <i>Call <b>me</b></i>.',
        ex: [['I see him.', 'Ik zie hem.'], ['She gives me a present.', 'Ze geeft me een cadeau.']] },
      rel: ['lv', 'mv', 'vnw'] },

    { id: 'wederk', c: 'soort', t: 'Wederkerend werkwoord', a: ['wederkerende? werkwoord(?:en)?', 'wederkerende? voornaamwoord(?:en)?', 'wederkerend', 'reflexie(?:f|ve|ven)'],
      k: 'Iets wat je bij jezelf doet: zich wassen, zich vervelen. Me, te, se …',
      html: 'Bij een <b>wederkerend werkwoord</b> doe je iets bij of met jezelf. Het onderwerp en het voorwerp zijn dezelfde persoon: <i>ik was <b>me</b></i>, <i>hij vergist <b>zich</b></i>. Het woordje <i>me, je, zich</i> heet het <b>wederkerend voornaamwoord</b>.',
      es: { n: 'los verbos reflexivos',
        html: 'Je herkent ze aan <b>-se</b> achter de infinitief: <i>levantarse</i> (opstaan), <i>llamarse</i> (heten), <i>bañarse</i> (douchen, in 🇲🇽). Het voornaamwoord verandert mee met de persoon en staat vóór de persoonsvorm: <i><b>me</b> levanto, <b>te</b> levantas, <b>se</b> levanta, <b>nos</b> levantamos, <b>se</b> levantan</i>. Veel Spaanse werkwoorden zijn wederkerend waar het Nederlandse dat niet is: <i>levantarse</i> = opstaan.',
        ex: [['Me llamo Mark.', 'Ik heet Mark.'], ['Me levanto a las siete.', 'Ik sta om zeven uur op.'], ['¿A qué hora se acuestan ustedes?', 'Hoe laat gaan jullie naar bed?']] },
      en: { n: 'reflexive verbs',
        html: 'Het Engels gebruikt wederkerende vormen (<i>myself, yourself, himself …</i>) veel <b>minder</b> dan het Nederlands: <i>I get up</i> (ik sta op), <i>I shower</i> (ik douche me), <i>I feel tired</i>. Alleen als je echt jezelf bedoelt: <i>I hurt myself</i>.',
        ex: [['I get up at seven.', 'Ik sta om zeven uur op.'], ['She hurt herself.', 'Ze heeft zich bezeerd.']] },
      rel: ['vnw', 'obj', 'ww'] },

    { id: 'betr', c: 'soort', t: 'Betrekkelijk voornaamwoord', a: ['betrekkelijke? voornaamwoord(?:en)?', 'betrekkelijke? bijzin(?:nen)?', 'relativos?'],
      k: 'Die, dat, wie, waar: begint een bijzin die iets uitlegt.',
      html: 'Een <b>betrekkelijk voornaamwoord</b> begint een bijzin die iets vertelt over een woord ervoor: <i>de film <b>die</b> ik zag</i>, <i>het dorp <b>waar</b> ik woon</i>.',
      es: { n: 'los relativos',
        html: 'Het gewoonste is <b>que</b>, voor personen én dingen: <i>el libro <b>que</b> leí</i>, <i>la chica <b>que</b> canta</i>. Na een voorzetsel bij personen: <b>quien</b> (<i>la amiga con <b>quien</b> viajé</i>). Voor plaatsen: <b>donde</b>. En <b>lo que</b> = wat (<i>No entiendo <b>lo que</b> dices</i>). Formeler: <i>el cual, la cual</i>.',
        ex: [['La película que vi ayer era buenísima.', 'De film die ik gisteren zag was supergoed.'], ['La ciudad donde vivo es tranquila.', 'De stad waar ik woon is rustig.'], ['No entiendo lo que dices.', 'Ik begrijp niet wat je zegt.']] },
      en: { n: 'relative pronouns',
        html: 'Engels: <b>who</b> (personen), <b>which</b> (dingen) en <b>that</b> (allebei). Is het het voorwerp van de bijzin, dan mag je het weglaten: <i>the film (that) I saw</i>.',
        ex: [['the woman who lives next door', 'de vrouw die naast ons woont'], ['the film (that) I saw', 'de film die ik zag']] },
      rel: ['bijzin', 'vnw'] },

    { id: 'vraag', c: 'soort', t: 'Vraagwoord', a: ['vraagwoord(?:en)?', 'vragende? voornaamwoord(?:en)?'],
      k: 'Wie, wat, waar, wanneer, hoe, waarom: begint een vraag.',
      html: 'Een <b>vraagwoord</b> begint een vraag waarop je niet met ja of nee kunt antwoorden: <i><b>waar</b> woon je?</i>',
      es: { n: 'los interrogativos',
        html: 'Spaanse vraagwoorden hebben <b>altijd een accent</b>: <i>qué, quién, dónde, cuándo, cómo, cuánto, cuál, por qué</i>. Ook in een indirecte vraag: <i>No sé <b>dónde</b> está</i>.',
        table: [['wat', 'qué'], ['wie', 'quién, quiénes'], ['waar / waarheen', 'dónde / adónde'], ['wanneer', 'cuándo'], ['hoe', 'cómo'], ['hoeveel', 'cuánto, cuánta, cuántos, cuántas'], ['welke', 'cuál, cuáles'], ['waarom', 'por qué']],
        ex: [['¿Dónde vives?', 'Waar woon je?'], ['¿Cuántos años tienes?', 'Hoe oud ben je?'], ['¿Por qué no vienes?', 'Waarom kom je niet?']],
        uz: [['por qué en porque', '<b>¿Por qué?</b> (waarom, twee woorden met accent) en <b>porque</b> (omdat, één woord zonder accent). <b>Waarom?</b> Het accent laat zien dat het een vraagwoord is; zonder accent is het een gewoon voegwoord.']] },
      en: { n: 'question words',
        html: 'Engels: <i>what, who, where, when, how, how much/many, which, why</i>. Na het vraagwoord komt meestal <b>do/does/did</b>: <i>Where <b>do</b> you live?</i>',
        ex: [['Where do you live?', 'Waar woon je?'], ['How old are you?', 'Hoe oud ben je?']] },
      rel: ['vraagzin', 'accent'] },

    { id: 'vz', c: 'soort', t: 'Voorzetsel', a: ['voorzetsel(?:s)?'],
      k: 'In, op, naar, met, van, voor: zegt waar, wanneer of hoe.',
      html: 'Een <b>voorzetsel</b> is een klein woord vóór een zelfstandig naamwoord of voornaamwoord, dat een verband aangeeft: plaats (<i>in, op, naast</i>), richting (<i>naar</i>), tijd (<i>om, na</i>) of iets anders (<i>met, zonder, van</i>).',
      es: { n: 'las preposiciones',
        html: 'De belangrijkste: <i>a</i> (naar, om), <i>en</i> (in, op), <i>de</i> (van, uit), <i>con</i> (met), <i>sin</i> (zonder), <i>por</i> en <i>para</i> (voor, door), <i>desde</i> (vanaf), <i>hasta</i> (tot). Ze komen niet één op één overeen met het Nederlands: <i>en</i> is zowel in als op (<i>en la mesa</i>). En bij personen als lijdend voorwerp zet je er een <b>a</b> voor: <i>Veo <b>a</b> mi hermana</i>.',
        ex: [['Voy a Bogotá.', 'Ik ga naar Bogotá.'], ['El celular está en la mesa.', 'De mobiel ligt op tafel.'], ['un café con leche', 'een koffie met melk'], ['Este regalo es para ti.', 'Dit cadeau is voor jou.']],
        uz: [['conmigo en contigo', 'Na een voorzetsel zeg je <i>mí</i> en <i>ti</i> (<i>para mí, para ti</i>), maar met <i>con</i> wordt het <b>conmigo</b> en <b>contigo</b>. <b>Waarom?</b> In het Latijn zei je al <i>mecum</i> en <i>tecum</i>; die vorm bleef en kreeg later nog een <i>con</i> ervoor.']] },
      en: { n: 'prepositions',
        html: 'Ook de Engelse voorzetsels komen niet altijd overeen met het Nederlands: <i>on Monday</i> (op maandag), <i>in July</i> (in juli), <i>at 8 o’clock</i> (om 8 uur), <i>at home</i> (thuis).',
        ex: [['on Monday, in July, at 8 o’clock', 'op maandag, in juli, om 8 uur'], ['It depends on the weather.', 'Het hangt af van het weer.']] },
      rel: ['lv', 'por-para'] },

    { id: 'por-para', c: 'soort', t: 'Por en para', a: ['por en para', 'por/para', 'por of para'],
      k: 'Twee Spaanse woorden voor "voor": doel (para) of oorzaak en ruil (por).',
      html: 'In het Nederlands zeg je vaak <i>voor</i> of <i>door</i>, in het Spaans moet je kiezen tussen <b>por</b> en <b>para</b>.',
      es: { n: 'por y para',
        html: '<b>Para</b> wijst vooruit, naar een <b>doel</b>, ontvanger of deadline: <i>para ti</i>, <i>para aprender</i>, <i>para el lunes</i>. <b>Por</b> wijst naar een <b>oorzaak</b>, een ruil, een route of een tijdsduur: <i>gracias <b>por</b> todo</i>, <i>lo compré <b>por</b> diez dólares</i>, <i>caminamos <b>por</b> el parque</i>, <i><b>por</b> la mañana</i>.',
        ex: [['Estudio para aprender.', 'Ik studeer om te leren.'], ['Gracias por la ayuda.', 'Bedankt voor de hulp.'], ['Caminamos por el centro.', 'We lopen door het centrum.'], ['La tarea es para el lunes.', 'Het huiswerk is voor maandag.']] },
      rel: ['vz'] },

    { id: 'vw', c: 'soort', t: 'Voegwoord', a: ['voegwoord(?:en)?'],
      k: 'En, of, maar, omdat, als: verbindt woorden of zinnen.',
      html: 'Een <b>voegwoord</b> verbindt woorden of zinnen: <i>koffie <b>en</b> thee</i>, <i>ik blijf thuis <b>omdat</b> ik ziek ben</i>. Sommige voegwoorden beginnen een bijzin (<i>omdat, als, dat, hoewel</i>).',
      es: { n: 'las conjunciones',
        html: 'Veelgebruikt: <i>y</i> (en), <i>o</i> (of), <i>pero</i> (maar), <i>porque</i> (omdat), <i>cuando</i> (als, wanneer), <i>si</i> (als, indien), <i>que</i> (dat), <i>aunque</i> (hoewel). Na sommige voegwoorden volgt de subjuntivo: <i>cuando <b>llegues</b></i> (als je aankomt).',
        ex: [['café o té', 'koffie of thee'], ['Me quedo en casa porque estoy enfermo.', 'Ik blijf thuis omdat ik ziek ben.'], ['Cuando llegues, me llamas.', 'Als je aankomt, bel je me.']],
        uz: [['y → e, o → u', 'Vóór een woord dat met de klank <b>i</b> begint, wordt <i>y</i> → <b>e</b>: <i>padre <b>e</b> hijo</i>, <i>español <b>e</b> inglés</i>. Vóór een <b>o</b>-klank wordt <i>o</i> → <b>u</b>: <i>siete <b>u</b> ocho</i>. <b>Waarom?</b> Twee dezelfde klanken achter elkaar smelten samen, dan hoor je het voegwoord niet meer.']] },
      en: { n: 'conjunctions',
        html: 'Engels: <i>and, or, but, because, when, if, that, although</i>. Na <i>when</i> en <i>if</i> over de toekomst gebruik je de tegenwoordige tijd: <i>When I <b>arrive</b>, I’ll call you</i>.',
        ex: [['coffee or tea', 'koffie of thee'], ['When I arrive, I’ll call you.', 'Als ik aankom, bel ik je.']] },
      rel: ['bijzin', 'subjuntivo'] },

    { id: 'telw', c: 'soort', t: 'Telwoord', a: ['telwoord(?:en)?', 'rangtelwoord(?:en)?', 'hoofdtelwoord(?:en)?'],
      k: 'Een, twee, drie (hoeveel) en eerste, tweede (welke plek).',
      html: 'Een <b>telwoord</b> zegt hoeveel (<i>een, twee, honderd</i>: hoofdtelwoorden) of welke plek in een rij (<i>eerste, tweede</i>: rangtelwoorden).',
      es: { n: 'los números',
        html: 'Hoofdtelwoorden: <i>uno, dos, tres … veinte, treinta y uno, cien</i>. Rangtelwoorden: <i>primero, segundo, tercero</i>; die passen zich aan: <i>la primera vez</i>. Voor datums gebruik je gewone getallen: <i>el dos de mayo</i>, alleen de eerste mag ook <i>el primero de mayo</i> (zo zeg je het in Latijns-Amerika meestal).',
        ex: [['treinta y cinco', 'vijfendertig'], ['la primera vez', 'de eerste keer'], ['el primero de mayo', '1 mei']],
        uz: [['un, primer, tercer', 'Vóór een mannelijk woord wordt <i>uno</i> → <b>un</b> (<i>un libro, veintiún años</i>) en <i>primero/tercero</i> → <b>primer/tercer</b> (<i>el primer día</i>). <b>Waarom?</b> Vóór een woord slijt de -o weg in de uitspraak, net als bij <i>buen</i> en <i>mal</i>.']] },
      en: { n: 'numbers',
        html: 'Engels: <i>one, two, three …</i> en <i>first, second, third, fourth</i>. Bij datums zeg je het rangtelwoord: <i>May 2nd</i> = "May second".',
        ex: [['thirty-five', 'vijfendertig'], ['the first time', 'de eerste keer']] },
      rel: ['zn', 'congruentie'] },

    { id: 'tussenw', c: 'soort', t: 'Tussenwerpsel', a: ['tussenwerpsel(?:s)?'],
      k: 'Een uitroep: au!, hè?, wauw!',
      html: 'Een <b>tussenwerpsel</b> is een losse uitroep die een gevoel uitdrukt: <i>au!, oei!, wauw!, hè?</i> Het hoort niet echt bij de zin.',
      es: { n: 'las interjecciones',
        html: 'Spaanse uitroepen krijgen ook vooraan een omgekeerd uitroepteken: <i>¡Ay!</i> Veel zijn regionaal: <i>¡Híjole!</i> en <i>¡Órale!</i> (🇲🇽), <i>¡Uy!</i>, <i>¡Chévere!</i> (🇻🇪 🇨🇴, "gaaf").',
        ex: [['¡Ay, qué dolor!', 'Au, wat een pijn!'], ['¡Híjole, se me olvidó!', 'Oei, ik ben het vergeten!'], ['¡Qué chévere!', 'Wat gaaf!']] },
      en: { n: 'interjections',
        html: 'Engels: <i>oh!, wow!, oops!, ouch!, hey!</i>',
        ex: [['Oops, sorry!', 'Oeps, sorry!']] },
      rel: [] },

    /* ================= De zin ================= */
    { id: 'onderwerp', c: 'zin', t: 'Onderwerp', a: ['onderwerp(?:en)?'],
      k: 'Wie of wat iets doet in de zin.',
      html: 'Het <b>onderwerp</b> is wie of wat iets doet (of is) in de zin. <b>Test:</b> vraag "wie of wat + werkwoord?". <i><b>Mijn broer</b> kookt.</i> Wie kookt? Mijn broer. Het werkwoord past zich aan bij het onderwerp: <i>mijn broer kookt</i>, <i>mijn broers koken</i>.',
      es: { n: 'el sujeto',
        html: 'In het Spaans laat je het onderwerp vaak <b>weg</b> als het een voornaamwoord is: <i>(Yo) hablo español</i>. De uitgang van het werkwoord laat al zien wie het doet. Het onderwerp mag ook achter het werkwoord staan: <i>Llegó <b>mi hermano</b></i>.',
        ex: [['Mi hermano cocina muy bien.', 'Mijn broer kookt heel goed.'], ['Hablo español.', 'Ik spreek Spaans.'], ['Me gustan los tacos.', 'Ik hou van taco’s (letterlijk: de taco’s bevallen mij).']],
        uz: [['me gusta(n)', 'Bij <i>gustar</i> is wat je leuk vindt het <b>onderwerp</b>, niet jij: <i>Me <b>gustan</b> los tacos</i>, met het werkwoord in het meervoud omdat <i>los tacos</i> meervoud is. <b>Waarom?</b> <i>Gustar</i> betekent eigenlijk "bevallen": de taco’s bevallen mij. Zo werken ook <i>encantar, interesar, doler</i>.']] },
      en: { n: 'subject',
        html: 'In het Engels heeft elke zin een onderwerp, je mag het nooit weglaten. Het staat bijna altijd vóór het werkwoord: <i>My brother cooks</i>.',
        ex: [['My brother cooks very well.', 'Mijn broer kookt heel goed.']],
        uz: [['it is raining', 'Bij het weer en de tijd zeg je <i><b>it</b> is raining</i>, <i><b>it</b>’s late</i>, ook al betekent <i>it</i> hier niets. <b>Waarom?</b> Een Engelse zin heeft altijd een onderwerp nodig; <i>it</i> vult die plek (net als "het" in "het regent").']] },
      rel: ['pv', 'lv', 'pers', 'congruentie'] },

    { id: 'pv', c: 'zin', t: 'Persoonsvorm', a: ['persoonsvorm(?:en)?', 'vervoegde? vorm(?:en)?', 'vervoegde werkwoord'],
      k: 'Het vervoegde werkwoord in de zin: het past zich aan bij het onderwerp.',
      html: 'De <b>persoonsvorm</b> is het werkwoord dat verandert als je het onderwerp verandert of de tijd: <i>ik <b>werk</b>, hij <b>werkt</b>, wij <b>werkten</b></i>. In <i>ik <b>wil</b> slapen</i> is <i>wil</i> de persoonsvorm en <i>slapen</i> een infinitief.',
      es: { n: 'el verbo conjugado',
        html: 'In het Spaans laat de persoonsvorm met zijn uitgang zien <b>wie</b> iets doet en <b>wanneer</b>: <i>viv<b>imos</b></i> = wij wonen. Staan er twee werkwoorden, dan is de eerste de persoonsvorm en de tweede een infinitief: <i><b>Quiero</b> comer</i>.',
        ex: [['Nosotros vivimos en Quito.', 'Wij wonen in Quito.'], ['Quiero comer.', 'Ik wil eten.'], ['Ayer trabajaron mucho.', 'Gisteren werkten ze veel.']] },
      en: { n: 'finite verb',
        html: 'In het Engels zie je de persoonsvorm vaak aan <i>do/does/did</i> of aan de -s: <i>She <b>works</b></i>, <i><b>Does</b> she work?</i>',
        ex: [['She works in Boston.', 'Ze werkt in Boston.'], ['I want to sleep.', 'Ik wil slapen.']] },
      rel: ['onderwerp', 'vervoegen', 'infinitief'] },

    { id: 'lv', c: 'zin', t: 'Lijdend voorwerp', a: ['lijdende? voorwerp(?:en)?', 'direct object'],
      k: 'Wie of wat "het ondergaat": ik koop een boek.',
      html: 'Het <b>lijdend voorwerp</b> is de persoon of het ding dat de handeling ondergaat. <b>Test:</b> vraag "wie of wat + werkwoord + onderwerp?". <i>Ik koop <b>een boek</b>.</i> Wat koop ik? Een boek.',
      es: { n: 'el objeto directo',
        html: 'Vervang je het lijdend voorwerp door een voornaamwoord, dan wordt het <i>lo, la, los, las</i> en staat het vóór het werkwoord: <i>Compro el libro → <b>Lo</b> compro</i>. Is het lijdend voorwerp een <b>persoon</b>, dan zet je er <b>a</b> voor: <i>Veo <b>a</b> mi mamá</i>.',
        ex: [['Compro un libro.', 'Ik koop een boek.'], ['¿El libro? Lo compro mañana.', 'Het boek? Dat koop ik morgen.'], ['Visito a mis abuelos.', 'Ik bezoek mijn opa en oma.']],
        uz: [['de persoonlijke a', 'Bij een persoon als lijdend voorwerp komt er een <b>a</b> voor, die je niet vertaalt: <i>Busco <b>a</b> Carlos</i>, maar <i>Busco un taxi</i>. <b>Waarom?</b> In het Spaans mag de woordvolgorde vrij zijn; de <i>a</i> laat zien wie de handeling ondergaat en wie hem doet.']] },
      en: { n: 'direct object',
        html: 'In het Engels staat het lijdend voorwerp direct achter het werkwoord: <i>I buy <b>a book</b></i>. Een voornaamwoord wordt <i>him, her, it, them</i>.',
        ex: [['I buy a book.', 'Ik koop een boek.'], ['I visit them every week.', 'Ik bezoek ze elke week.']] },
      rel: ['mv', 'obj', 'onderwerp'] },

    { id: 'mv', c: 'zin', t: 'Meewerkend voorwerp', a: ['meewerkende? voorwerp(?:en)?', 'indirect object'],
      k: 'Aan of voor wie: ik geef mijn moeder een bloem.',
      html: 'Het <b>meewerkend voorwerp</b> is degene aan of voor wie iets gebeurt. <b>Test:</b> kun je er "aan" of "voor" voor zetten? <i>Ik geef <b>mijn moeder</b> een bloem</i> = ik geef een bloem <i>aan</i> mijn moeder.',
      es: { n: 'el objeto indirecto',
        html: 'Het voornaamwoord is <i>le</i> (enkelvoud) of <i>les</i> (meervoud), vóór het werkwoord: <i><b>Le</b> doy una flor</i>. Het persoon zelf staat met <b>a</b>: <i>a mi mamá</i>.',
        ex: [['Le doy una flor a mi mamá.', 'Ik geef mijn moeder een bloem.'], ['Les escribo a mis amigos.', 'Ik schrijf mijn vrienden.'], ['¿Me pasas la sal?', 'Geef je me het zout aan?']],
        uz: [['le … a mi mamá (dubbel)', 'In <i><b>Le</b> doy una flor <b>a mi mamá</b></i> staat het meewerkend voorwerp twee keer: als <i>le</i> én als <i>a mi mamá</i>. Dat is in het Spaans heel gewoon en klinkt zonder <i>le</i> juist stijf. <b>Waarom?</b> Het voornaamwoord kondigt aan dát er iemand is die iets krijgt; <i>a mi mamá</i> zegt daarna wie.']] },
      en: { n: 'indirect object',
        html: 'Engels: zonder voorzetsel vóór het lijdend voorwerp (<i>I give <b>my mom</b> a flower</i>) of met <i>to</i> erachter (<i>I give a flower <b>to my mom</b></i>).',
        ex: [['I give my mom a flower.', 'Ik geef mijn moeder een bloem.'], ['She sent it to me.', 'Ze stuurde het naar mij.']] },
      rel: ['lv', 'obj'] },

    { id: 'bijzin', c: 'zin', t: 'Hoofdzin en bijzin', a: ['bijzin(?:nen)?', 'hoofdzin(?:nen)?'],
      k: 'Een hoofdzin kan alleen staan, een bijzin hoort bij een andere zin.',
      html: 'Een <b>hoofdzin</b> kan op zichzelf staan: <i>Ik blijf thuis.</i> Een <b>bijzin</b> kan dat niet; die begint meestal met een voegwoord of betrekkelijk voornaamwoord en hoort bij de hoofdzin: <i>Ik blijf thuis <b>omdat het regent</b>.</i>',
      es: { n: 'la oración principal y la subordinada',
        html: 'Anders dan in het Nederlands gaat het werkwoord in een Spaanse bijzin <b>niet</b> naar achteren: <i>porque <b>está</b> lloviendo</i> (omdat het regent, niet "omdat lloviendo está"). In sommige bijzinnen staat het werkwoord in de <b>subjuntivo</b>: na een wens, een gevoel, twijfel, of <i>cuando</i> over de toekomst.',
        ex: [['Me quedo en casa porque está lloviendo.', 'Ik blijf thuis omdat het regent.'], ['Creo que va a llover.', 'Ik denk dat het gaat regenen.'], ['Quiero que vengas.', 'Ik wil dat je komt.']] },
      en: { n: 'main clause and subordinate clause',
        html: 'Ook in het Engels blijft de woordvolgorde in een bijzin gewoon (onderwerp + werkwoord): <i>because it <b>is</b> raining</i>. Het voegwoord <i>that</i> mag vaak weg: <i>I think (that) it will rain</i>.',
        ex: [['I’m staying home because it’s raining.', 'Ik blijf thuis omdat het regent.'], ['I think it will rain.', 'Ik denk dat het gaat regenen.']] },
      rel: ['vw', 'betr', 'subjuntivo'] },

    { id: 'ontkenning', c: 'zin', t: 'Ontkenning', a: ['ontkenning(?:en)?', 'ontkennende? (?:zin|vorm)(?:nen|en)?', 'dubbele ontkenning'],
      k: 'Een zin negatief maken: niet, geen, nooit, niemand.',
      html: 'Met een <b>ontkenning</b> maak je een zin negatief: <i>niet, geen, nooit, niemand, niets</i>. <i>Ik rook <b>niet</b>.</i>',
      es: { n: 'la negación',
        html: 'Zet <b>no</b> vóór de persoonsvorm (en vóór <i>lo, le, me</i> …): <i><b>No</b> fumo</i>, <i><b>No</b> lo sé</i>. Het Nederlandse "geen" is ook gewoon <i>no</i>: <i><b>No</b> tengo carro</i>. Met <i>nada, nadie, nunca</i> gebruik je een <b>dubbele ontkenning</b>, die in het Spaans verplicht is: <i><b>No</b> veo <b>nada</b></i> (ik zie niets).',
        ex: [['No fumo.', 'Ik rook niet.'], ['No tengo carro.', 'Ik heb geen auto.'], ['No viene nadie.', 'Er komt niemand.'], ['Nunca como carne.', 'Ik eet nooit vlees.']],
        uz: [['nadie, nada, nunca vooraan: zonder no', 'Staat <i>nadie, nada</i> of <i>nunca</i> <b>vóór</b> het werkwoord, dan komt er géén <i>no</i>: <i><b>Nadie</b> vino</i>, <i><b>Nunca</b> como carne</i>. <b>Waarom?</b> De ontkenning staat dan al vooraan in de zin; een tweede is niet nodig om de zin negatief te laten beginnen.']] },
      en: { n: 'negation',
        html: 'In het Engels gebruik je <b>do/does/did + not</b> bij gewone werkwoorden: <i>I <b>don’t</b> smoke</i>, <i>She <b>didn’t</b> come</i>. Een dubbele ontkenning is in standaard-Engels fout: <i>I don’t see <b>anything</b></i> (niet <i>nothing</i>).',
        ex: [['I don’t smoke.', 'Ik rook niet.'], ['I don’t see anything.', 'Ik zie niets.']] },
      rel: ['pv'] },

    { id: 'vraagzin', c: 'zin', t: 'Vraagzin', a: ['vraagzin(?:nen)?', 'vragende zin(?:nen)?'],
      k: 'Een zin die iets vraagt.',
      html: 'Een <b>vraagzin</b> vraagt iets. Een ja/nee-vraag (<i>Woon je hier?</i>) of een vraag met een vraagwoord (<i>Waar woon je?</i>). In het Nederlands draai je het werkwoord en het onderwerp om.',
      es: { n: 'la oración interrogativa',
        html: 'In het Spaans schrijf je vooraan een <b>omgekeerd vraagteken</b>: <i>¿…?</i> De woordvolgorde mag gewoon hetzelfde blijven; je hoort de vraag aan de stem die omhooggaat: <i>¿Hablas español?</i>',
        ex: [['¿Hablas español?', 'Spreek je Spaans?'], ['¿Dónde está el baño?', 'Waar is de wc?'], ['¿Vienes mañana?', 'Kom je morgen?']] },
      en: { n: 'question',
        html: 'In het Engels gebruik je bij gewone werkwoorden <b>do/does/did</b>: <i><b>Do</b> you speak English?</i>, <i>Where <b>does</b> she live?</i> Bij <i>be</i>, <i>can</i>, <i>will</i> draai je om: <i>Are you ready?</i>',
        ex: [['Do you speak English?', 'Spreek je Engels?'], ['Where does she live?', 'Waar woont ze?']] },
      rel: ['vraag'] },

    /* ================= Werkwoorden ================= */
    { id: 'infinitief', c: 'ww', t: 'Infinitief', a: ['infinitie(?:f|ven)', 'hele werkwoord(?:en)?', 'infinitivo'],
      k: 'Het hele werkwoord, zoals in het woordenboek: praten, eten, wonen.',
      html: 'De <b>infinitief</b> (het hele werkwoord) is de vorm uit het woordenboek: <i>praten, eten, wonen</i>. Je gebruikt hem na een ander werkwoord: <i>ik wil <b>slapen</b></i>.',
      es: { n: 'el infinitivo',
        html: 'Spaanse infinitieven eindigen op <b>-ar, -er</b> of <b>-ir</b>. Je gebruikt ze na een ander werkwoord (<i>Quiero <b>bailar</b></i>), na <i>ir a</i> (<i>Voy a <b>viajar</b></i>) en na een voorzetsel, waar het Nederlands vaak "voordat/om te" zegt: <i>antes de <b>comer</b></i> (voor het eten), <i>para <b>aprender</b></i> (om te leren).',
        ex: [['Quiero bailar.', 'Ik wil dansen.'], ['Voy a viajar a Perú.', 'Ik ga naar Peru reizen.'], ['Me lavo las manos antes de comer.', 'Ik was mijn handen voor het eten.']] },
      en: { n: 'infinitive',
        html: 'In het Engels staat er meestal <b>to</b> voor: <i>I want <b>to sleep</b></i>. Na <i>can, must, will, should</i> juist zonder <i>to</i>: <i>I can swim</i>.',
        ex: [['I want to sleep.', 'Ik wil slapen.'], ['You can stay.', 'Je mag blijven.']] },
      rel: ['ww', 'stam', 'vervoegen'] },

    { id: 'vervoegen', c: 'ww', t: 'Vervoegen', a: ['vervoeg(?:en|ing|ingen|d|de|t)', 'vervoegingstabel(?:len)?'],
      k: 'Een werkwoord de juiste vorm geven voor wie het doet en wanneer.',
      html: '<b>Vervoegen</b> is een werkwoord de juiste vorm geven: <i>werken → ik werk, jij werkt, wij werken, wij werkten</i>. De vorm hangt af van de <b>persoon</b> (wie) en de <b>tijd</b> (wanneer).',
      es: { n: 'la conjugación',
        html: 'In het Spaans heeft elke persoon een eigen uitgang. Haal <i>-ar, -er</i> of <i>-ir</i> van de infinitief af (dat is de stam) en zet er de uitgang achter. Hier de tegenwoordige tijd:',
        table: [['', 'hablar', 'comer', 'vivir'], ['yo', 'hablo', 'como', 'vivo'], ['tú', 'hablas', 'comes', 'vives'], ['él / ella / usted', 'habla', 'come', 'vive'], ['nosotros', 'hablamos', 'comemos', 'vivimos'], ['ellos / ustedes', 'hablan', 'comen', 'viven']],
        ex: [['Hablo con mi mamá.', 'Ik praat met mijn moeder.'], ['¿Comes carne?', 'Eet je vlees?'], ['Vivimos en Cali.', 'We wonen in Cali.']] },
      en: { n: 'conjugation',
        html: 'Engels vervoegt weinig: in de tegenwoordige tijd alleen een <b>-s</b> bij he/she/it, in de verleden tijd meestal <b>-ed</b> voor iedereen.',
        table: [['', 'work (nu)', 'work (verleden)'], ['I / you / we / they', 'work', 'worked'], ['he / she / it', 'works', 'worked']],
        ex: [['She works, they work.', 'Zij werkt, zij werken.'], ['We worked late.', 'We werkten tot laat.']] },
      rel: ['stam', 'persoon', 'pv', 'onregelmatig'] },

    { id: 'stam', c: 'ww', t: 'Stam en uitgang', a: ['stam(?:men)?', 'werkwoordsstam', 'uitgang(?:en)?', 'stamklinker(?:s)?'],
      k: 'Het vaste deel van een werkwoord (de stam) en het deel dat verandert (de uitgang).',
      html: 'Een werkwoordsvorm bestaat uit een <b>stam</b> (het vaste deel, met de betekenis) en een <b>uitgang</b> (het deel dat verandert): <i>werk-<b>t</b></i>, <i>werk-<b>ten</b></i>.',
      es: { n: 'la raíz y la terminación',
        html: 'De stam vind je door <i>-ar, -er, -ir</i> weg te halen: <i><b>habl</b>-ar</i>, <i><b>com</b>-er</i>, <i><b>viv</b>-ir</i>. De uitgang zegt wie en wanneer: <i>habl-<b>o</b></i> (ik praat), <i>habl-<b>é</b></i> (ik praatte). Bij sommige werkwoorden verandert ook de klinker in de stam (zie stamklinkerwisseling).',
        ex: [['habl-o, habl-as, habl-amos', 'ik praat, jij praat, wij praten'], ['com-í', 'ik at'], ['viv-iremos', 'we zullen wonen']] },
      en: { n: 'stem and ending',
        html: 'Engels heeft maar een paar uitgangen: <i>-s, -ed, -ing</i>: <i>work-<b>s</b>, work-<b>ed</b>, work-<b>ing</b></i>.',
        ex: [['work, works, worked, working', 'werken in verschillende vormen']] },
      rel: ['vervoegen', 'stamwissel', 'infinitief'] },

    { id: 'stamwissel', c: 'ww', t: 'Stamklinkerwisseling', a: ['stamklinkerwisseling(?:en)?', 'stamwisseling(?:en)?', 'stamveranderende? werkwoord(?:en)?', 'e ?→ ?ie', 'o ?→ ?ue'],
      k: 'Werkwoorden waarbij de klinker in de stam verandert: querer → quiero.',
      html: 'Bij sommige werkwoorden verandert de klinker in de stam als je ze vervoegt. In het Nederlands ken je dat van <i>lopen → liep</i> of <i>breken → brak</i>.',
      es: { n: 'los verbos con cambio de raíz',
        html: 'Drie soorten: <b>e → ie</b> (<i>querer → qu<b>ie</b>ro</i>), <b>o → ue</b> (<i>poder → p<b>ue</b>do</i>) en <b>e → i</b> (<i>pedir → p<b>i</b>do</i>). De wisseling gebeurt alleen als de <b>klemtoon op de stam</b> valt. Daarom blijft <i>nosotros</i> regelmatig: <i>queremos, podemos, pedimos</i> (de klemtoon ligt daar op de uitgang).',
        table: [['', 'querer (e→ie)', 'poder (o→ue)', 'pedir (e→i)'], ['yo', 'quiero', 'puedo', 'pido'], ['tú', 'quieres', 'puedes', 'pides'], ['él / ella / usted', 'quiere', 'puede', 'pide'], ['nosotros', 'queremos', 'podemos', 'pedimos'], ['ellos / ustedes', 'quieren', 'pueden', 'piden']],
        ex: [['Quiero un café.', 'Ik wil een koffie.'], ['¿Puedes venir?', 'Kun je komen?'], ['Siempre pido tacos al pastor.', 'Ik bestel altijd tacos al pastor.']],
        uz: [['jugar: u → ue', '<i>Jugar</i> (spelen) is het enige werkwoord met <b>u → ue</b>: <i>j<b>ue</b>go, j<b>ue</b>gas</i>, maar <i>jugamos</i>. <b>Waarom?</b> In het oude Spaans was het <i>jogar</i>, met een o; het kreeg later een u, maar hield de o → ue-wisseling.']] },
      rel: ['stam', 'onregelmatig', 'accent'] },

    { id: 'persoon', c: 'ww', t: 'Persoon en getal', a: ['(?:eerste|tweede|derde|1e|2e|3e) persoon(?: enkelvoud| meervoud)?'],
      k: 'Ik/wij (1e persoon), jij/jullie (2e), hij/zij/u (3e), in enkelvoud of meervoud.',
      html: 'Bij werkwoorden spreek je van de <b>1e persoon</b> (ik, wij), de <b>2e persoon</b> (jij, jullie) en de <b>3e persoon</b> (hij, zij, het, zij). Elk in <b>enkelvoud</b> (één) of <b>meervoud</b> (meer).',
      es: { n: 'la persona y el número',
        html: 'Elke persoon heeft in het Spaans een eigen uitgang. Een vervoegingstabel in de app heeft daarom vijf regels: <i>yo, tú, él/ella/usted, nosotros, ellos/ellas/ustedes</i>.',
        table: [['', 'enkelvoud', 'meervoud'], ['1e persoon', 'yo hablo', 'nosotros hablamos'], ['2e persoon', 'tú hablas', 'ustedes hablan'], ['3e persoon', 'él / ella / usted habla', 'ellos / ellas hablan']],
        ex: [['Ella habla tres idiomas.', 'Zij spreekt drie talen.'], ['¿Ustedes hablan inglés?', 'Spreken jullie Engels?']],
        uz: [['usted en ustedes in de 3e persoon', '<i>Usted</i> (u) en <i>ustedes</i> (jullie) zijn eigenlijk 2e persoon (je spreekt iemand aan), maar het werkwoord staat in de <b>3e persoon</b>: <i>usted habla</i>, <i>ustedes hablan</i>. <b>Waarom?</b> Ze komen van <i>vuestra merced</i> ("uwe genade"): je sprak iemand vroeger beleefd aan alsof het over een ander ging.']] },
      en: { n: 'person and number',
        html: 'In het Engels zie je de persoon bijna alleen aan het onderwerp: alleen de 3e persoon enkelvoud krijgt een -s (<i>she works</i>), en bij <i>be</i> heb je <i>am, is, are</i>.',
        ex: [['I am, you are, she is', 'ik ben, jij bent, zij is']] },
      rel: ['pers', 'vervoegen', 'getal', 'aanspreken'] },

    { id: 'onregelmatig', c: 'ww', t: 'Regelmatig en onregelmatig', a: ['onregelmatige?(?: werkwoord(?:en)?| vorm(?:en)?)?', 'regelmatige werkwoord(?:en)?', 'regelmatige vorm(?:en)?'],
      k: 'Regelmatig = volgt de regel. Onregelmatig = eigen vormen die je uit je hoofd leert.',
      html: 'Een <b>regelmatig</b> werkwoord volgt de vaste regel (<i>werken → werkte → gewerkt</i>). Een <b>onregelmatig</b> werkwoord heeft eigen vormen, die je uit je hoofd leert (<i>zijn → was → geweest</i>).',
      es: { n: 'los verbos regulares e irregulares',
        html: 'De meeste Spaanse werkwoorden zijn regelmatig. De onregelmatige zijn juist de <b>meest gebruikte</b>: <i>ser, estar, ir, tener, hacer, poder, decir, venir</i>. Soms is alleen de ik-vorm anders: <i>tengo, hago, pongo, salgo, conozco</i>.',
        ex: [['soy, eres, es', 'ik ben, jij bent, hij is (ser)'], ['voy, vas, va', 'ik ga, jij gaat, hij gaat (ir)'], ['Tengo dos hermanos.', 'Ik heb twee broers.']],
        uz: [['juist de gewoonste werkwoorden', 'Waarom zijn juist <i>ser, ir, tener</i> onregelmatig? <b>Reden:</b> woorden die je heel vaak zegt, slijten in de uitspraak, en mensen onthouden de rare vormen toch wel omdat ze ze elke dag horen. Zo is <i>ir</i> zelfs uit drie Latijnse werkwoorden samengesteld (<i>voy, iba, fui</i>). In het Nederlands is dat net zo: <i>zijn, hebben, gaan</i>.']] },
      en: { n: 'regular and irregular verbs',
        html: 'Regelmatige Engelse werkwoorden krijgen <b>-ed</b>: <i>work → worked</i>. Onregelmatige heb je in drie vormen te leren: <i>go – went – gone</i>, <i>see – saw – seen</i>.',
        ex: [['I went home.', 'Ik ging naar huis.'], ['She has seen it.', 'Ze heeft het gezien.']] },
      rel: ['vervoegen', 'stamwissel', 'deelwoord'] },

    { id: 'hulpww', c: 'ww', t: 'Hulpwerkwoord', a: ['hulpwerkwoord(?:en)?'],
      k: 'Een werkwoord dat helpt om een tijd te maken: hebben, zijn, zullen.',
      html: 'Een <b>hulpwerkwoord</b> helpt een ander werkwoord om een tijd of betekenis te maken: <i>ik <b>heb</b> gegeten</i>, <i>ik <b>ben</b> gegaan</i>, <i>ik <b>zal</b> komen</i>.',
      es: { n: 'el verbo auxiliar',
        html: 'De belangrijkste: <b>haber</b> voor de voltooide tijd (<i><b>he</b> comido</i>), <b>estar</b> voor "bezig zijn" (<i><b>estoy</b> comiendo</i>) en <b>ir a</b> voor de toekomst (<i><b>voy a</b> comer</i>).',
        ex: [['He comido.', 'Ik heb gegeten.'], ['Estoy comiendo.', 'Ik ben aan het eten.'], ['Voy a comer.', 'Ik ga eten.']],
        uz: [['altijd haber, ook bij "zijn"', 'Waar het Nederlands "zijn" gebruikt (<i>ik <b>ben</b> gegaan</i>), zegt het Spaans ook <b>haber</b>: <i><b>He</b> ido</i>. Nooit <i>soy ido</i> of <i>tengo ido</i>. <b>Waarom?</b> Het Spaans heeft de keuze tussen twee hulpwerkwoorden in de loop van de eeuwen opgegeven en houdt alleen <i>haber</i> over.']] },
      en: { n: 'auxiliary verb',
        html: 'Engels: <b>have</b> (<i>I have eaten</i>), <b>be</b> (<i>I am eating</i>), <b>will</b> (<i>I will eat</i>) en <b>do</b> voor vragen en ontkenningen.',
        ex: [['I have eaten.', 'Ik heb gegeten.'], ['I have gone.', 'Ik ben gegaan.']] },
      rel: ['deelwoord', 'gerundio', 'perfecto'] },

    { id: 'deelwoord', c: 'ww', t: 'Voltooid deelwoord', a: ['voltooide? deelwoord(?:en)?', 'deelwoord(?:en)?', 'participio'],
      k: 'De vorm na hebben/zijn: gegeten, gewerkt, geschreven.',
      html: 'Het <b>voltooid deelwoord</b> is de vorm die je na <i>hebben</i> of <i>zijn</i> gebruikt: <i>ik heb <b>gewerkt</b></i>, <i>de deur is <b>gesloten</b></i>.',
      es: { n: 'el participio',
        html: 'Regelmatig: <b>-ar → -ado</b> (<i>hablado</i>), <b>-er/-ir → -ido</b> (<i>comido, vivido</i>). Na <i>haber</i> verandert het nooit: <i>ella ha habl<b>ado</b></i>. Gebruik je het als bijvoeglijk naamwoord, dan past het zich wél aan: <i>la puerta está cerrad<b>a</b></i>.',
        ex: [['He hablado con ella.', 'Ik heb met haar gepraat.'], ['¿Has comido?', 'Heb je gegeten?'], ['La tienda está cerrada.', 'De winkel is dicht.']],
        uz: [['hecho, dicho, escrito, visto …', 'Een groep veelgebruikte werkwoorden heeft een eigen deelwoord: <i>hacer → <b>hecho</b>, decir → <b>dicho</b>, escribir → <b>escrito</b>, ver → <b>visto</b>, poner → <b>puesto</b>, volver → <b>vuelto</b>, abrir → <b>abierto</b>, romper → <b>roto</b>, morir → <b>muerto</b></i>. <b>Waarom?</b> Het zijn oude Latijnse vormen die bewaard bleven omdat de woorden zo vaak gebruikt werden.']] },
      en: { n: 'past participle',
        html: 'Regelmatig: <b>-ed</b> (<i>worked</i>). Onregelmatig: de derde vorm uit het rijtje (<i>go – went – <b>gone</b></i>, <i>write – wrote – <b>written</b></i>).',
        ex: [['I have worked.', 'Ik heb gewerkt.'], ['She has written a book.', 'Ze heeft een boek geschreven.']] },
      rel: ['hulpww', 'perfecto', 'passief', 'onregelmatig'] },

    { id: 'gerundio', c: 'ww', t: 'Gerundio', a: ['gerundio', 'gerund', 'onvoltooid deelwoord', 'ing-vorm(?:en)?', '-ing-vorm(?:en)?'],
      k: 'De vorm voor "bezig zijn met": hablando, comiendo.',
      html: 'De <b>gerundio</b> is de werkwoordsvorm voor iets dat <b>op dit moment bezig</b> is. In het Nederlands zeg je "aan het … zijn": <i>ik ben aan het eten</i>.',
      es: { n: 'el gerundio',
        html: 'Regelmatig: <b>-ar → -ando</b> (<i>hablando</i>), <b>-er/-ir → -iendo</b> (<i>comiendo, viviendo</i>). Met <b>estar</b> ervoor: <i>Estoy comiendo</i>. Met <i>seguir</i>: <i>Sigo estudiando</i> (ik studeer nog steeds). In Latijns-Amerika hoor je ook veel <i>andar + gerundio</i>: <i>Ando buscando trabajo</i> (ik ben werk aan het zoeken).',
        ex: [['Estoy comiendo.', 'Ik ben aan het eten.'], ['¿Qué estás haciendo?', 'Wat ben je aan het doen?'], ['Sigo estudiando español.', 'Ik leer nog steeds Spaans.']],
        uz: [['leyendo, durmiendo, diciendo', 'Een paar werkwoorden krijgen een aangepaste vorm: <i>leer → <b>leyendo</b></i>, <i>oír → <b>oyendo</b></i> (een i tussen twee klinkers wordt y), <i>dormir → <b>durmiendo</b></i>, <i>pedir → <b>pidiendo</b></i>, <i>decir → <b>diciendo</b></i> (de stamklinker verandert). <b>Waarom?</b> <i>leiendo</i> is lastig uit te spreken, dus wordt de i een y; en bij -ir-werkwoorden met stamwisseling trekt de uitgang de klinker mee.']] },
      en: { n: '-ing form',
        html: 'De Engelse <b>-ing-vorm</b>: <i>I am eat<b>ing</b></i>. Het Engels gebruikt die vorm veel vaker dan het Nederlands "aan het": <i>What are you doing?</i>',
        ex: [['I’m eating.', 'Ik ben aan het eten.'], ['It’s raining.', 'Het regent.']] },
      rel: ['hulpww', 'presente'] },

    { id: 'passief', c: 'ww', t: 'Lijdende vorm (passief)', a: ['lijdende vorm(?:en)?', 'passie(?:f|ve|ven)', 'pasiva'],
      k: 'Wie iets ondergaat staat voorop: het huis wordt gebouwd.',
      html: 'In de <b>lijdende vorm</b> (het passief) zet je centraal wat er gebeurt of wie iets ondergaat, niet wie het doet: <i>Het huis <b>wordt gebouwd</b></i>, <i>De brief <b>is geschreven</b> door Ana</i>.',
      es: { n: 'la voz pasiva',
        html: 'Het Spaans gebruikt meestal <b>se</b>: <i><b>Se</b> habla español</i> (er wordt Spaans gesproken), <i><b>Se</b> venden casas</i> (huizen te koop). Het "echte" passief met <i>ser</i> + deelwoord is vooral voor nieuws en boeken: <i>El puente <b>fue construido</b> en 1950</i>.',
        ex: [['Se habla español.', 'Hier wordt Spaans gesproken.'], ['Se venden casas.', 'Huizen te koop.'], ['El puente fue construido en 1950.', 'De brug werd in 1950 gebouwd.']] },
      en: { n: 'passive voice',
        html: 'Engels: <b>be</b> + voltooid deelwoord: <i>The house <b>is being built</b></i>, <i>The letter <b>was written</b> by Ana</i>. Het Engels gebruikt het passief vaker dan het Spaans.',
        ex: [['English is spoken here.', 'Hier wordt Engels gesproken.']] },
      rel: ['deelwoord'] },

    /* ================= Tijden en wijzen ================= */
    { id: 'tijdwijs', c: 'tijd', t: 'Tijd en wijs', a: ['werkwoordstijd(?:en)?', 'aantonende wijs', 'indicativo'],
      k: 'Tijd = wanneer het gebeurt. Wijs = hoe je het bedoelt: feit, wens of bevel.',
      html: 'De <b>tijd</b> van een werkwoord zegt <b>wanneer</b> iets gebeurt: nu, vroeger of later. De <b>wijs</b> zegt <b>hoe</b> je het bedoelt: als feit (<i>hij komt</i>), als wens of mogelijkheid (<i>leve de koning!</i>) of als bevel (<i>kom!</i>).',
      es: { n: 'el tiempo y el modo',
        html: 'Het Spaans heeft drie wijzen: de <b>indicativo</b> (feiten: <i>viene</i>), de <b>subjuntivo</b> (wensen, gevoelens, twijfel: <i>que venga</i>) en de <b>imperativo</b> (bevelen: <i>¡ven!</i>). Binnen elke wijs zijn er tijden. In de vervoegingstabellen van de app zie je ze allemaal.',
        ex: [['Viene mañana.', 'Hij komt morgen (feit).'], ['Ojalá que venga.', 'Hopelijk komt hij (wens).'], ['¡Ven!', 'Kom! (bevel)']] },
      en: { n: 'tense and mood',
        html: 'Het Engels heeft veel tijden (<i>simple, continuous, perfect</i>), maar bijna geen aparte wijzen: een wens of bevel maak je met gewone vormen (<i>Come here!</i>, <i>I wish he were here</i>).',
        ex: [['He comes tomorrow.', 'Hij komt morgen.'], ['Come here!', 'Kom hier!']] },
      rel: ['presente', 'indefinido', 'imperfecto', 'subjuntivo', 'imperativo'] },

    { id: 'presente', c: 'tijd', t: 'Tegenwoordige tijd', a: ['tegenwoordige tijd', 'presente', 'present simple', 'present tense', 'o\\.t\\.t\\.'],
      k: 'Wat nu gebeurt, wat je gewoonlijk doet: ik werk, ik woon in Lima.',
      html: 'De <b>tegenwoordige tijd</b> gebruik je voor wat nu gebeurt, wat altijd zo is of wat je gewoonlijk doet: <i>ik werk</i>, <i>ik woon in Lima</i>, <i>ik drink elke ochtend koffie</i>.',
      es: { n: 'el presente',
        html: 'Net als in het Nederlands gebruik je de <i>presente</i> ook voor de nabije toekomst: <i>Mañana <b>trabajo</b></i> (morgen werk ik). Voor wat precies op dit moment bezig is, gebruik je vaak <i>estar + gerundio</i>: <i>Estoy trabajando</i>.',
        ex: [['Trabajo en una oficina.', 'Ik werk op een kantoor.'], ['Todos los días tomo café.', 'Ik drink elke dag koffie.'], ['Mañana viajo a Cusco.', 'Morgen reis ik naar Cusco.']] },
      en: { n: 'present simple',
        html: 'Engels: <i>present simple</i> voor gewoontes en feiten (<i>I work in an office</i>), <i>present continuous</i> (<i>I am working</i>) voor wat nu bezig is. Het Engels is daar strenger in dan het Nederlands.',
        ex: [['I work in an office.', 'Ik werk op een kantoor.'], ['I’m working now.', 'Ik ben nu aan het werk.']] },
      rel: ['vervoegen', 'gerundio', 'tijdwijs'] },

    { id: 'indefinido', c: 'tijd', t: 'Pretérito indefinido', a: ['pretérito indefinido', 'indefinido', 'pretérito perfecto simple', 'pretérito', 'past simple', 'simple past'],
      k: 'De verleden tijd voor afgeronde gebeurtenissen: ayer comí tacos.',
      html: 'Dit is een <b>verleden tijd</b> voor een afgeronde gebeurtenis op een bepaald moment: <i>gisteren <b>at</b> ik taco’s</i>, <i>in 2019 <b>reisde</b> ik naar Mexico</i>. Het verhaal gaat ermee vooruit: eerst dit, toen dat.',
      es: { n: 'el pretérito indefinido',
        html: 'In Latijns-Amerika is dit dé verleden tijd van alledag, ook voor iets wat net gebeurde: <i>¿Ya <b>comiste</b>?</i> (heb je al gegeten?). Signaalwoorden: <i>ayer, anoche, el año pasado, en 2019, una vez</i>.',
        table: [['', 'hablar', 'comer / vivir'], ['yo', 'hablé', 'comí / viví'], ['tú', 'hablaste', 'comiste / viviste'], ['él / ella / usted', 'habló', 'comió / vivió'], ['nosotros', 'hablamos', 'comimos / vivimos'], ['ellos / ustedes', 'hablaron', 'comieron / vivieron']],
        ex: [['Ayer comí tacos.', 'Gisteren at ik taco’s.'], ['En 2019 viajé a México.', 'In 2019 reisde ik naar Mexico.'], ['¿Ya comiste?', 'Heb je al gegeten?']],
        uz: [['fui = ik was én ik ging', '<i>Ser</i> en <i>ir</i> hebben in deze tijd <b>dezelfde vormen</b>: <i>fui, fuiste, fue …</i> <i>Fui a Lima</i> = ik ging naar Lima, <i>Fue increíble</i> = het was ongelooflijk. <b>Waarom?</b> Beide vormen komen van het Latijnse <i>fui</i> (ik ben geweest); "ik ben ergens geweest" werd ook "ik ging". De zin laat zien welke je bedoelt.']] },
      en: { n: 'past simple',
        html: 'Engels: <i>past simple</i>, met <b>-ed</b> of een onregelmatige vorm: <i>I <b>worked</b></i>, <i>I <b>went</b></i>. Bij een tijdstip in het verleden (<i>yesterday, in 2019</i>) is het in het Engels altijd deze tijd, nooit <i>have + deelwoord</i>.',
        ex: [['Yesterday I ate tacos.', 'Gisteren at ik taco’s.'], ['I went to Mexico in 2019.', 'Ik ging in 2019 naar Mexico.']] },
      rel: ['imperfecto', 'perfecto', 'tijdwijs'] },

    { id: 'imperfecto', c: 'tijd', t: 'Imperfecto', a: ['imperfecto', 'pretérito imperfecto', 'onvoltooid verleden tijd', 'o\\.v\\.t\\.'],
      k: 'De verleden tijd voor achtergrond en gewoontes: de niña vivía en Cali.',
      html: 'Ook een <b>verleden tijd</b>, maar voor de <b>achtergrond</b> van een verhaal, hoe iets was, en wat je vroeger <b>gewoonlijk</b> deed: <i>vroeger <b>woonde</b> ik in Cali</i>, <i>het <b>regende</b> en ik <b>was</b> moe</i>.',
      es: { n: 'el pretérito imperfecto',
        html: 'Vorm: <b>-ar → -aba</b> (<i>hablaba</i>), <b>-er/-ir → -ía</b> (<i>comía, vivía</i>). Vergelijk met de <i>indefinido</i>: <i>Mientras <b>cocinaba</b> (achtergrond, bezig), <b>sonó</b> el teléfono (gebeurtenis)</i>. Signaalwoorden: <i>antes, de niño, siempre, todos los días, mientras</i>.',
        ex: [['De niña vivía en Cali.', 'Als kind woonde ik in Cali.'], ['Llovía y hacía frío.', 'Het regende en het was koud.'], ['Mientras cocinaba, sonó el teléfono.', 'Terwijl ik aan het koken was, ging de telefoon.']],
        uz: [['ser, ir, ver', 'Er zijn maar drie onregelmatige werkwoorden in de imperfecto: <i>ser → <b>era</b></i>, <i>ir → <b>iba</b></i>, <i>ver → <b>veía</b></i>. <b>Waarom?</b> Bij <i>ser</i> en <i>ir</i> bleven de oude Latijnse vormen (<i>erat, ibat</i>); bij <i>ver</i> bleef de e van het oude <i>veer</i> staan.']] },
      en: { n: 'past continuous / used to',
        html: 'Het Engels heeft hier geen aparte tijd voor. Je gebruikt <i>past continuous</i> voor achtergrond (<i>It <b>was raining</b></i>) en <i>used to</i> of <i>would</i> voor gewoontes (<i>I <b>used to</b> live in Cali</i>).',
        ex: [['It was raining.', 'Het regende.'], ['I used to live in Cali.', 'Vroeger woonde ik in Cali.']] },
      rel: ['indefinido', 'tijdwijs'] },

    { id: 'perfecto', c: 'tijd', t: 'Voltooide tijd', a: ['voltooide? (?:tegenwoordige )?tijd', 'pretérito perfecto(?! simple)', 'present perfect', 'v\\.t\\.t\\.'],
      k: 'Heb/is + deelwoord: ik heb gegeten, he comido.',
      html: 'De <b>voltooide tijd</b> maak je met een hulpwerkwoord en een voltooid deelwoord: <i>ik <b>heb gegeten</b></i>, <i>ik <b>ben geweest</b></i>. Je gebruikt hem voor iets uit het verleden dat nog met nu te maken heeft.',
      es: { n: 'el pretérito perfecto',
        html: 'Vorm: <b>haber + deelwoord</b>: <i>he comido, has comido, ha comido, hemos comido, han comido</i>. In Latijns-Amerika gebruik je deze tijd <b>minder</b> dan in het Nederlands: vooral voor ervaringen (<i>¿Alguna vez <b>has estado</b> en Perú?</i>) en dingen die nog doorlopen. Voor iets wat net gebeurde zeg je meestal de <i>indefinido</i>: <i>¿Ya comiste?</i>',
        ex: [['¿Alguna vez has estado en Perú?', 'Ben je ooit in Peru geweest?'], ['Todavía no he terminado.', 'Ik ben nog niet klaar.'], ['Hemos vivido aquí cinco años.', 'We wonen hier al vijf jaar.']] },
      en: { n: 'present perfect',
        html: 'Engels: <b>have/has + voltooid deelwoord</b>: <i>I have eaten</i>. Let op: met een tijdstip uit het verleden (<i>yesterday, last year</i>) mag het in het Engels <b>niet</b>; dan gebruik je de <i>past simple</i>.',
        ex: [['I have been to Peru.', 'Ik ben in Peru geweest.'], ['We have lived here for five years.', 'We wonen hier al vijf jaar.']] },
      rel: ['deelwoord', 'hulpww', 'indefinido'] },

    { id: 'futuro', c: 'tijd', t: 'Toekomende tijd', a: ['toekomende tijd', 'futuro', 'future tense'],
      k: 'Wat later gebeurt: ik zal reizen, voy a viajar.',
      html: 'De <b>toekomende tijd</b> gebruik je voor wat later gebeurt: <i>ik <b>zal</b> komen</i>, <i>ik <b>ga</b> morgen reizen</i>.',
      es: { n: 'el futuro',
        html: 'In Latijns-Amerika zeg je meestal <b>ir a + infinitief</b>: <i><b>Voy a</b> viajar</i> (ik ga reizen). De echte <i>futuro</i> plakt de uitgang aan de hele infinitief: <i>hablar<b>é</b>, comer<b>ás</b>, vivir<b>á</b></i>. Die gebruik je voor plechtige beloftes, voorspellingen en voor <b>vermoedens</b>: <i>¿Dónde <b>estará</b> Juan?</i> (waar zou Juan zijn?).',
        ex: [['Voy a viajar a Chile.', 'Ik ga naar Chili reizen.'], ['Mañana lloverá.', 'Morgen zal het regenen.'], ['¿Qué hora será?', 'Hoe laat zou het zijn?']],
        uz: [['tendré, haré, diré …', 'Een paar werkwoorden hebben een kortere stam in de futuro: <i>tener → <b>tendr</b>é</i>, <i>hacer → <b>har</b>é</i>, <i>decir → <b>dir</b>é</i>, <i>poder → <b>podr</b>é</i>, <i>salir → <b>saldr</b>é</i>, <i>venir → <b>vendr</b>é</i>. <b>Waarom?</b> De futuro is ontstaan uit <i>infinitief + he</i> (<i>tener he</i>); bij veelgebruikte werkwoorden sleet de infinitief in. In <i>tendré</i> kwam er een d bij om het makkelijker uit te spreken.']] },
      en: { n: 'future',
        html: 'Engels: <b>will</b> voor voorspellingen en spontane besluiten (<i>It will rain</i>, <i>I’ll help you</i>), <b>going to</b> voor plannen (<i>I’m going to travel</i>).',
        ex: [['It will rain tomorrow.', 'Morgen gaat het regenen.'], ['I’m going to travel to Chile.', 'Ik ga naar Chili reizen.']] },
      rel: ['infinitief', 'condicional', 'tijdwijs'] },

    { id: 'condicional', c: 'tijd', t: 'Voorwaardelijke wijs', a: ['voorwaardelijke? (?:wijs|vorm|tijd)', 'condicional', 'conditional'],
      k: 'Zou + werkwoord: ik zou graag willen, me gustaría.',
      html: 'Met de <b>voorwaardelijke wijs</b> zeg je wat er <b>zou</b> gebeuren, of je vraagt iets beleefd: <i>ik <b>zou</b> graag een koffie willen</i>, <i>als ik tijd had, <b>zou</b> ik reizen</i>.',
      es: { n: 'el condicional',
        html: 'Vorm: hele infinitief + <b>-ía</b>: <i>hablar<b>ía</b>, comer<b>ías</b>, vivir<b>íamos</b></i>. Heel handig om beleefd te zijn: <i>Me <b>gustaría</b> un café</i>, <i>¿<b>Podría</b> ayudarme?</i> Werkwoorden met een korte stam in de futuro hebben die ook hier: <i>tendría, haría, diría, podría</i>.',
        ex: [['Me gustaría un café, por favor.', 'Ik zou graag een koffie willen.'], ['¿Podría ayudarme?', 'Zou u me kunnen helpen?'], ['Si tuviera tiempo, viajaría más.', 'Als ik tijd had, zou ik meer reizen.']] },
      en: { n: 'conditional',
        html: 'Engels: <b>would</b> + werkwoord: <i>I <b>would</b> like a coffee</i>, <i>If I had time, I <b>would</b> travel</i>. Beleefd: <i>Could you help me?</i>',
        ex: [['I’d like a coffee, please.', 'Ik zou graag een koffie willen.'], ['Could you help me?', 'Zou je me kunnen helpen?']] },
      rel: ['futuro', 'subjuntivo'] },

    { id: 'subjuntivo', c: 'tijd', t: 'Subjuntivo (aanvoegende wijs)', a: ['subjuntivo', 'aanvoegende wijs', 'subjunctie(?:f|ve)', 'subjunctive'],
      k: 'De werkwoordsvorm voor wensen, gevoelens, twijfel: quiero que vengas.',
      html: 'De <b>aanvoegende wijs</b> gebruik je voor iets wat (nog) geen feit is: een wens, een gevoel, twijfel of een doel. Het Nederlands heeft er alleen nog resten van: <i>leve de koning!</i>, <i>het zij zo</i>.',
      es: { n: 'el subjuntivo',
        html: 'In het Spaans is de <i>subjuntivo</i> springlevend. Je gebruikt hem vooral in een bijzin na <b>que</b>, als de hoofdzin een wens, gevoel, twijfel of verzoek uitdrukt: <i>Quiero que <b>vengas</b></i> (ik wil dat je komt), <i>Me alegra que <b>estés</b> aquí</i>. Ook na <i>ojalá</i>, <i>para que</i> en na <i>cuando</i> over de toekomst. <b>Vorm:</b> neem de ik-vorm, haal de -o weg en wissel de klinker: <i>-ar → -e</i> (<i>hablo → hable</i>), <i>-er/-ir → -a</i> (<i>como → coma, tengo → tenga</i>).',
        table: [['', 'hablar', 'comer', 'tener'], ['yo', 'hable', 'coma', 'tenga'], ['tú', 'hables', 'comas', 'tengas'], ['él / ella / usted', 'hable', 'coma', 'tenga'], ['nosotros', 'hablemos', 'comamos', 'tengamos'], ['ellos / ustedes', 'hablen', 'coman', 'tengan']],
        ex: [['Quiero que vengas a mi fiesta.', 'Ik wil dat je naar mijn feest komt.'], ['Ojalá que no llueva.', 'Hopelijk regent het niet.'], ['Cuando llegues, me avisas.', 'Laat het me weten als je aankomt.'], ['Es importante que descanses.', 'Het is belangrijk dat je rust.']],
        uz: [['sea, vaya, esté, haya, sepa, dé', 'Een paar werkwoorden volgen de ik-vorm-regel niet: <i>ser → <b>sea</b></i>, <i>ir → <b>vaya</b></i>, <i>estar → <b>esté</b></i>, <i>haber → <b>haya</b></i>, <i>saber → <b>sepa</b></i>, <i>dar → <b>dé</b></i>. <b>Waarom?</b> Hun ik-vorm eindigt niet op -o (<i>soy, voy, estoy, he, sé, doy</i>), dus de truc werkt niet; ze hielden hun oude Latijnse vorm.']] },
      en: { n: 'subjunctive',
        html: 'In het Engels is de aanvoegende wijs bijna verdwenen. Je ziet hem nog in <i>If I <b>were</b> you</i> en in formele zinnen als <i>I suggest that he <b>be</b> on time</i>. Meestal zeg je gewoon: <i>I want you <b>to come</b></i>.',
        ex: [['If I were you, I would go.', 'Als ik jou was, zou ik gaan.'], ['I want you to come to my party.', 'Ik wil dat je naar mijn feest komt.']] },
      rel: ['bijzin', 'imperativo', 'tijdwijs'] },

    { id: 'imperativo', c: 'tijd', t: 'Gebiedende wijs', a: ['gebiedende wijs', 'imperativo', 'imperatie(?:f|ve)', 'bevelende? (?:vorm|wijs)'],
      k: 'Een bevel, verzoek of advies: kom!, eet!, ¡ven!',
      html: 'Met de <b>gebiedende wijs</b> geef je een bevel, verzoek, advies of instructie: <i><b>kom</b> binnen!</i>, <i><b>neem</b> de tweede straat rechts</i>.',
      es: { n: 'el imperativo',
        html: 'Voor <b>tú</b> lijkt de bevestigende vorm op de hij-vorm: <i>¡<b>Habla</b>!</i>, <i>¡<b>Come</b>!</i> Voor <b>usted</b> en <b>ustedes</b> gebruik je de subjuntivo: <i>¡<b>Hable</b>!</i>, <i>¡<b>Hablen</b>!</i> Een <b>ontkennend</b> bevel is altijd subjuntivo: <i>¡No <b>hables</b>!</i> Voornaamwoorden plak je achter een bevestigend bevel: <i>¡Dí<b>me</b>!</i>, <i>¡Siénte<b>se</b>!</i>',
        table: [['', 'hablar', 'comer', 'venir'], ['tú', '¡habla!', '¡come!', '¡ven!'], ['tú (niet)', '¡no hables!', '¡no comas!', '¡no vengas!'], ['usted', '¡hable!', '¡coma!', '¡venga!'], ['ustedes', '¡hablen!', '¡coman!', '¡vengan!']],
        ex: [['¡Ven aquí!', 'Kom hier!'], ['Siga derecho y gire a la derecha.', 'Ga rechtdoor en sla rechtsaf (u).'], ['¡No te preocupes!', 'Maak je geen zorgen!']],
        uz: [['ven, pon, sal, ten, haz, di, ve, sé', 'Acht veelgebruikte werkwoorden hebben een korte tú-vorm: <i>venir → <b>ven</b>, poner → <b>pon</b>, salir → <b>sal</b>, tener → <b>ten</b>, hacer → <b>haz</b>, decir → <b>di</b>, ir → <b>ve</b>, ser → <b>sé</b></i>. <b>Waarom?</b> Bevelen roep je kort en krachtig; bij deze dagelijkse werkwoorden sleet de uitgang helemaal weg.']] },
      en: { n: 'imperative',
        html: 'Engels: gewoon de infinitief zonder <i>to</i>: <i>Come in!</i>, <i>Take the second street on the right</i>. Ontkennend met <i>don’t</i>: <i>Don’t worry!</i>',
        ex: [['Come here!', 'Kom hier!'], ['Don’t worry!', 'Maak je geen zorgen!']] },
      rel: ['subjuntivo', 'obj', 'aanspreken'] },

    /* ================= Vorm en klank ================= */
    { id: 'geslacht', c: 'vorm', t: 'Geslacht', a: ['geslacht', 'mannelijke?', 'vrouwelijke?', 'onzijdige?'],
      k: 'Mannelijk of vrouwelijk (of in het Nederlands: de- of het-woord).',
      html: 'Woorden hebben in veel talen een <b>geslacht</b>. In het Nederlands zie je dat aan <i>de</i> of <i>het</i>. Het geslacht van een woord heeft meestal <b>niets</b> met man of vrouw te maken: het is gewoon een eigenschap van het woord.',
      es: { n: 'el género',
        html: 'In het Spaans is elk zelfstandig naamwoord <b>mannelijk</b> (<i>el</i>) of <b>vrouwelijk</b> (<i>la</i>). Vuistregels: <b>-o</b> is meestal mannelijk (<i>el libro</i>), <b>-a</b> meestal vrouwelijk (<i>la casa</i>), en ook vrouwelijk zijn woorden op <b>-ción, -sión, -dad, -tad</b> (<i>la canción, la ciudad</i>). Lidwoorden en bijvoeglijke naamwoorden passen zich aan het geslacht aan.',
        ex: [['el libro nuevo', 'het nieuwe boek'], ['la casa nueva', 'het nieuwe huis'], ['la canción, la ciudad', 'het liedje, de stad']],
        uz: [['el problema, el día, el mapa, la mano, la foto', 'Een kleine groep woorden heeft een ander geslacht dan de uitgang doet vermoeden: <i>el problema, el tema, el idioma, el día, el mapa</i> (mannelijk op -a), <i>la mano, la foto, la moto</i> (vrouwelijk op -o). <b>Waarom?</b> <i>Problema, tema, idioma</i> komen uit het Grieks waar ze onzijdig waren; <i>día</i> en <i>mano</i> hadden hun geslacht al in het Latijn; <i>foto</i> en <i>moto</i> zijn afkortingen van <i>la fotografía, la motocicleta</i>.']] },
      en: { n: 'gender',
        html: 'In het Engels hebben woorden <b>geen</b> grammaticaal geslacht. Alleen bij personen en dieren kies je <i>he</i> of <i>she</i>; voor dingen altijd <i>it</i>.',
        ex: [['the book, the house', 'het boek, het huis'], ['It is new.', 'Het/hij is nieuw.']] },
      rel: ['zn', 'lidwoord', 'congruentie'] },

    { id: 'getal', c: 'vorm', t: 'Enkelvoud en meervoud', a: ['enkelvoud(?:svorm)?', 'meervoud(?:svorm(?:en)?)?'],
      k: 'Eén (enkelvoud) of meer (meervoud): boek, boeken.',
      html: '<b>Enkelvoud</b> is één (<i>boek</i>), <b>meervoud</b> is meer dan één (<i>boeken</i>). Dat heet het <b>getal</b> van een woord.',
      es: { n: 'el singular y el plural',
        html: 'Eindigt een woord op een klinker, dan komt er <b>-s</b> achter: <i>libro → libros</i>. Op een medeklinker: <b>-es</b>: <i>ciudad → ciudades, papel → papeles</i>. Lidwoorden en bijvoeglijke naamwoorden gaan mee: <i>los libros nuevos</i>.',
        ex: [['un libro → dos libros', 'een boek → twee boeken'], ['una ciudad → muchas ciudades', 'een stad → veel steden'], ['el doctor → los doctores', 'de dokter → de dokters']],
        uz: [['lápiz → lápices, joven → jóvenes', 'Twee spellingsaanpassingen: een <b>-z</b> wordt <b>-ces</b> (<i>lápiz → lápices, vez → veces</i>). <b>Waarom?</b> Het Spaans schrijft <i>ze/zi</i> bijna nooit, maar <i>ce/ci</i>. En soms komt er een accent bij of gaat er een af (<i>joven → jóvenes</i>, <i>canción → canciones</i>). <b>Waarom?</b> De klemtoon op dezelfde lettergreep blijft terwijl het woord langer wordt.']] },
      en: { n: 'singular and plural',
        html: 'Engels: meestal <b>-s</b> (<i>books</i>), na s/sh/ch/x <b>-es</b> (<i>boxes</i>). Bijvoeglijke naamwoorden gaan niet mee: <i>new books</i>.',
        ex: [['one book, two books', 'een boek, twee boeken']],
        uz: [['children, men, women, feet', 'Een paar woorden hebben een eigen meervoud: <i>child → <b>children</b>, man → <b>men</b>, woman → <b>women</b>, foot → <b>feet</b>, tooth → <b>teeth</b>, mouse → <b>mice</b></i>. <b>Waarom?</b> Het zijn oude Germaanse vormen (net als in het Nederlands <i>kind → kinderen</i>) die bleven bestaan omdat de woorden zo vaak gebruikt worden.']] },
      rel: ['zn', 'congruentie', 'accent'] },

    { id: 'congruentie', c: 'vorm', t: 'Overeenkomst (congruentie)', a: ['congruentie', 'overeenkomst in (?:geslacht|getal)', 'past zich aan', 'passen zich aan'],
      k: 'Woorden die bij elkaar horen, passen zich aan elkaar aan.',
      html: '<b>Congruentie</b> betekent dat woorden die bij elkaar horen, met elkaar <b>overeenkomen</b>. In het Nederlands: <i>de mooi<b>e</b> fiets</i>, <i>het mooi<b>e</b> huis</i>, maar <i>een mooi huis</i>; en het werkwoord past bij het onderwerp: <i>hij loop<b>t</b>, zij lop<b>en</b></i>.',
      es: { n: 'la concordancia',
        html: 'In het Spaans is dit overal: lidwoord, zelfstandig naamwoord en bijvoeglijk naamwoord hebben hetzelfde <b>geslacht en getal</b> (<i>l<b>as</b> cas<b>as</b> blanc<b>as</b></i>), en het werkwoord past bij het onderwerp (<i>los niños <b>juegan</b></i>). Is een groep gemengd, dan wordt het mannelijk meervoud: <i>Pedro y Ana son simpátic<b>os</b></i>.',
        ex: [['las casas blancas', 'de witte huizen'], ['Pedro y Ana son simpáticos.', 'Pedro en Ana zijn aardig.'], ['Los niños juegan en el parque.', 'De kinderen spelen in het park.']] },
      en: { n: 'agreement',
        html: 'Het Engels kent bijna alleen overeenkomst tussen onderwerp en werkwoord: <i>he work<b>s</b></i>, <i>they work</i>. Lidwoorden en bijvoeglijke naamwoorden veranderen niet.',
        ex: [['He works. They work.', 'Hij werkt. Zij werken.']] },
      rel: ['geslacht', 'getal', 'bn', 'onderwerp'] },

    { id: 'verkleinwoord', c: 'vorm', t: 'Verkleinwoord', a: ['verkleinwoord(?:en)?', 'verkleinvorm(?:en)?', 'diminutie(?:f|ven)'],
      k: 'Iets kleiner of liever maken: huisje, casita.',
      html: 'Met een <b>verkleinwoord</b> maak je iets kleiner, of je zegt het liever of vriendelijker: <i>huis<b>je</b></i>, <i>momentje</i>.',
      es: { n: 'el diminutivo',
        html: 'Meestal <b>-ito / -ita</b>: <i>casa → cas<b>ita</b></i>, <i>perro → perr<b>ito</b></i>. In Latijns-Amerika gebruik je dat <b>heel veel</b>, vaak alleen om vriendelijk te klinken: <i>un cafecito</i>, <i>un momentito</i>, <i>ahorita</i>. Let op: in 🇲🇽 Mexico is <i>ahorita</i> "zo meteen" (of "straks"), niet per se "nu". In 🇨🇷 Costa Rica en 🇨🇴 Colombia hoor je ook <i>-ico</i>: <i>un momentico</i>.',
        ex: [['Un cafecito, por favor.', 'Een koffietje, alsjeblieft.'], ['Espérame un momentito.', 'Wacht even op me.'], ['Ahorita vengo.', 'Ik kom zo.']],
        uz: [['cafecito, pancito (met -c-)', 'Bij korte woorden en woorden op <i>-e</i>, <i>-n</i> of <i>-r</i> komt er een <b>c</b> tussen: <i>café → cafe<b>c</b>ito</i>, <i>pan → pan<b>c</b>ito</i>, <i>amor → amor<b>c</b>ito</i>. <b>Waarom?</b> Zonder die c botsen de klanken of wordt het woord onherkenbaar (<i>caféito</i>); de c maakt een duidelijke overgang.']] },
      en: { n: 'diminutive',
        html: 'Het Engels gebruikt bijna geen verkleinwoorden; je zegt <b>little</b> of <b>small</b>: <i>a little house</i>. In spreektaal soms <i>-ie/-y</i>: <i>doggy</i>.',
        ex: [['a little house', 'een huisje']] },
      rel: ['zn'] },

    { id: 'vergelijking', c: 'vorm', t: 'Vergelijken', a: ['trappen van vergelijking', 'vergrotende trap', 'overtreffende trap', 'vergelijking(?:en)?', 'comparatie(?:f|ven)', 'superlatie(?:f|ven)'],
      k: 'Groter, grootst: iets vergelijken met iets anders.',
      html: 'Met de <b>vergrotende trap</b> vergelijk je twee dingen (<i>Lima is <b>groter</b> dan Quito</i>). Met de <b>overtreffende trap</b> zeg je dat iets het meest is (<i>de <b>grootste</b> stad</i>).',
      es: { n: 'el comparativo y el superlativo',
        html: 'Vergelijken: <b>más … que</b> (meer … dan), <b>menos … que</b> (minder … dan), <b>tan … como</b> (even … als): <i>Lima es <b>más</b> grande <b>que</b> Quito</i>. Het meest: <b>el/la más</b>: <i>la ciudad <b>más</b> grande</i>. Heel erg: <b>-ísimo</b>: <i>buen<b>ísimo</b></i> (supergoed).',
        ex: [['Lima es más grande que Quito.', 'Lima is groter dan Quito.'], ['Soy tan alto como mi papá.', 'Ik ben even lang als mijn vader.'], ['Es la ciudad más bonita del país.', 'Het is de mooiste stad van het land.'], ['¡Está buenísimo!', 'Het is superlekker!']],
        uz: [['mejor, peor, mayor, menor', 'Vier woorden hebben een eigen vorm: <i>bueno → <b>mejor</b></i>, <i>malo → <b>peor</b></i>, <i>grande → <b>mayor</b></i> (ouder), <i>pequeño → <b>menor</b></i> (jonger). Dus <i>es mejor</i>, niet <i>más bueno</i>. <b>Waarom?</b> Het zijn oude Latijnse vormen (<i>melior, peior, maior, minor</i>) die bleven, net als ons <i>goed → beter</i>.']] },
      en: { n: 'comparative and superlative',
        html: 'Korte woorden: <b>-er / -est</b> (<i>bigger, the biggest</i>). Lange woorden: <b>more / most</b> (<i>more beautiful, the most beautiful</i>). Vergelijken met <i>than</i>.',
        ex: [['Lima is bigger than Quito.', 'Lima is groter dan Quito.'], ['the most beautiful city', 'de mooiste stad']],
        uz: [['good – better – best', '<i>good → better → best</i>, <i>bad → worse → worst</i>, <i>far → further → furthest</i>. <b>Waarom?</b> Oude vormen die ouder zijn dan de -er-regel, net als in het Nederlands <i>goed → beter → best</i>.']] },
      rel: ['bn'] },

    { id: 'accent', c: 'vorm', t: 'Klemtoon en accent', a: ['klemtoon', 'accent(?:en|teken(?:s)?)?', 'tilde', 'lettergre(?:ep|pen)'],
      k: 'Welke lettergreep je het hardst zegt, en wanneer je een streepje (´) schrijft.',
      html: 'De <b>klemtoon</b> is de lettergreep die je het hardst zegt: <i>ta<b>FEL</b></i>, <i><b>AU</b>to</i>. Een <b>accent</b> (´) is een streepje op een klinker dat iets over de uitspraak of betekenis zegt.',
      es: { n: 'el acento y la tilde',
        html: 'Het Spaans heeft vaste regels. Eindigt een woord op een <b>klinker, -n of -s</b>, dan ligt de klemtoon op de <b>voorlaatste</b> lettergreep: <i>ca-sa, ha-blan</i>. Eindigt het op een andere medeklinker, dan op de <b>laatste</b>: <i>ha-blar, ciu-dad</i>. Wijkt een woord van die regel af, dan schrijf je een <b>accent</b>: <i>ca-<b>fé</b>, can-<b>ción</b>, <b>ár</b>-bol</i>. Accenten onderscheiden ook woorden: <i>tú</i> (jij) / <i>tu</i> (jouw), <i>sí</i> (ja) / <i>si</i> (als), <i>él</i> (hij) / <i>el</i> (de).',
        ex: [['café, canción, árbol', 'koffie, liedje, boom'], ['Tú tienes tu libro.', 'Jij hebt jouw boek.'], ['Sí, si quieres.', 'Ja, als je wilt.']] },
      en: { n: 'stress',
        html: 'Het Engels schrijft <b>geen</b> accenten, maar de klemtoon kan de betekenis veranderen: <i><b>RE</b>cord</i> (een plaat, zn) en <i>re<b>CORD</b></i> (opnemen, ww).',
        ex: [['a RECORD / to reCORD', 'een plaat / opnemen']] },
      rel: ['stamwissel', 'vraag', 'getal'] },

    /* ================= Aanspreken ================= */
    { id: 'aanspreken', c: 'aan', t: 'Tú, usted en vos', a: ['aanspreekvorm(?:en)?', 'beleefdheidsvorm(?:en)?', 'voseo', 'tuteo', 'ustedeo', 'formeel', 'informeel'],
      k: 'Jij of u zeggen, en hoe dat per land verschilt.',
      html: 'Bij het <b>aanspreken</b> kies je tussen <b>jij</b> (informeel: vrienden, familie, kinderen) en <b>u</b> (formeel, beleefd: onbekenden, ouderen, klanten).',
      es: { n: 'tú, usted y vos',
        html: '<b>Tú</b> = jij (informeel), <b>usted</b> = u (beleefd). Voor "jullie" zeg je in heel Latijns-Amerika altijd <b>ustedes</b>, tegen vrienden én onbekenden. In 🇦🇷 Argentinië, 🇺🇾 Uruguay, 🇵🇾 Paraguay en delen van Midden-Amerika zegt men <b>vos</b> in plaats van <i>tú</i>, met eigen vormen: <i>vos hablás, vos tenés, vos sos</i>. In 🇨🇴 Colombia en 🇨🇷 Costa Rica zeggen veel mensen zelfs tegen familie <i>usted</i>.',
        table: [['', 'informeel', 'beleefd'], ['jij / u', 'tú hablas · vos hablás (🇦🇷)', 'usted habla'], ['jullie', 'ustedes hablan', 'ustedes hablan']],
        ex: [['¿Cómo estás? (tú)', 'Hoe gaat het met je?'], ['¿Cómo está usted?', 'Hoe gaat het met u?'], ['¿Ustedes quieren algo?', 'Willen jullie iets?'], ['¿Vos sos de Buenos Aires?', 'Kom jij uit Buenos Aires? (🇦🇷)']],
        uz: [['usted/ustedes met de hij-vorm', '<i>Usted</i> en <i>ustedes</i> spreken iemand direct aan, maar het werkwoord staat in de <b>3e persoon</b>: <i>usted <b>tiene</b></i>, <i>ustedes <b>tienen</b></i>. <b>Waarom?</b> <i>Usted</i> is ontstaan uit <i>vuestra merced</i> ("uwe genade"): je sprak vroeger beleefd over iemand alsof het een derde was. In Spanje bestaat nog een aparte vorm voor "jullie", maar die heb je in Latijns-Amerika niet nodig.']] },
      en: { n: 'you',
        html: 'Het Engels heeft maar één woord: <b>you</b>, voor jij, u én jullie. Beleefdheid laat je horen met woorden als <i>please, could you, sir, ma’am</i> en met voornaam of achternaam.',
        ex: [['How are you?', 'Hoe gaat het met je/u?'], ['Could you help me, please?', 'Zou u me kunnen helpen?']] },
      rel: ['pers', 'persoon', 'imperativo'] }
  ];

  /* ---------- opzoeken en matchen (puur, zonder DOM) ---------- */
  const BY = {}; B.forEach(b => { BY[b.id] = b; });
  // een begrip hoort bij de doeltaal als het een blok voor die taal heeft (of voor geen enkele taal)
  const LANGS = ['es', 'en', 'nl', 'de', 'fr', 'tr'];
  const fits = (b, tl) => !!b[tl] || !LANGS.some(l => b[l]);
  const target = () => (S.course && S.course.target) || 'es';
  const ui = () => (S.course && S.course.ui) || 'nl';
  // de uitleg is (nu) in het Nederlands; in cursussen met Spaanse uitleg (en-es, nl-es) staat de sectie uit
  const enabled = () => ui() === 'nl';
  const list = (tl = target()) => B.filter(b => fits(b, tl));
  const get = id => BY[id] || null;
  // per doeltaal mag een blok de naam (t), korte omschrijving (k), algemene uitleg (gen) en extra zoekpatronen (a) vervangen/aanvullen
  const blkOf = (b, tl = target()) => (b && b[tl]) || {};
  const T = (b, tl) => blkOf(b, tl).t || b.t;
  const K = (b, tl) => blkOf(b, tl).k || b.k;
  /** Blokken voor één doeltaal toevoegen vanuit een eigen bestand (js/begrippen-<taal>.js).
      blocks = { begripId: { n, html, ex, uz, table, a?, t?, k?, gen? } }; extra = [begrippen die alleen in die taal bestaan]. */
  function add(tl, blocks, extra) {
    Object.keys(blocks || {}).forEach(id => { if (BY[id]) BY[id][tl] = blocks[id]; });
    (extra || []).forEach(b => { if (b && b.id && !BY[b.id]) { B.push(b); BY[b.id] = b; } });
    RX = null;
  }

  const L = '\\p{L}\\p{M}';
  let RX = null, RXT = null;
  function rx() {
    const tl = target();
    if (RX && RXT === tl) return RX;
    const parts = [];
    list(tl).forEach(b => b.a.concat(blkOf(b, tl).a || []).forEach(p => parts.push({ id: b.id, src: p })));
    // langste patroon eerst, zodat «voltooid deelwoord» wint van «deelwoord»
    parts.sort((x, y) => y.src.length - x.src.length);
    RX = parts.map(p => ({ id: p.id, re: new RegExp('(?<![' + L + '])(?:' + p.src + ')(?![' + L + '])', 'giu') }));
    RXT = tl;
    return RX;
  }
  /** Alle begrippen in een tekst: [{ id, i (index), n (lengte), s (gevonden tekst) }], zonder overlap, op volgorde.
      once: elk begrip maar één keer (de eerste keer). skip: Set met id's die al getoond zijn. */
  function match(text, opt = {}) {
    const t = String(text || ''), found = [];
    rx().forEach(({ id, re }) => {
      re.lastIndex = 0; let m;
      while ((m = re.exec(t))) { found.push({ id, i: m.index, n: m[0].length, s: m[0] }); if (!m[0].length) re.lastIndex++; }
    });
    found.sort((a, b) => a.i - b.i || b.n - a.n);
    const out = [], seen = new Set(opt.skip || []); let end = -1;
    for (const f of found) {
      if (f.i < end) continue;
      if (opt.once !== false && seen.has(f.id)) continue;
      out.push(f); seen.add(f.id); end = f.i + f.n;
    }
    return out;
  }
  function search(q, tl = target()) {
    const n = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const w = n(q).trim(); if (!w) return list(tl);
    return list(tl).filter(b => {
      const blk = b[tl] || {};
      return [b.t, b.k, blk.n, blk.t, blk.k].some(x => n(x).includes(w)) || b.a.concat(blk.a || []).some(p => { try { return new RegExp(p, 'iu').test(q.trim()); } catch (e) { return false; } });
    });
  }

  /* ---------- weergave ---------- */
  const hasDom = typeof document !== 'undefined';
  const h = (...a) => S.U.h(...a);
  const tlFlag = () => (target() === 'es' ? '🌎' : (S.course && S.course.flag) || '');
  const tlName = () => ((S.course && S.course.name && S.course.name.nl) || 'de doeltaal');

  /** Inhoud van één begrip. onRel(id) = wat er gebeurt bij een tik op een verwant begrip. */
  function body(b, onRel) {
    const tl = target(), blk = b[tl];
    const wrap = h('div', { class: 'bg-body' }, h('div', { class: 'prose bg-gen', html: (blk && blk.gen) || b.html }));
    if (blk) {
      const part = h('div', { class: 'bg-tl' }, h('div', { class: 'bg-tl-head' }, tlFlag() + ' In het ' + tlName(), blk.n ? h('span', { class: 'bg-tl-n', lang: tl }, ' · ' + blk.n) : null),
        blk.html ? h('div', { class: 'prose', html: blk.html }) : null);
      if (blk.table) {
        const tb = h('table', { class: 'gtable' });
        blk.table.forEach((row, ri) => tb.append(h('tr', null, row.map((c, ci) => h(ri === 0 && blk.table.length > 2 ? 'th' : 'td', { html: c, lang: ri > 0 && ci > 0 ? tl : null })))));
        part.append(h('div', { class: 'table-wrap' }, tb));
      }
      if (blk.ex && blk.ex.length) part.append(h('div', { class: 'examples' }, blk.ex.map(([e, n]) =>
        h('div', { class: 'ex-line' }, S.Lesson && S.Lesson.speakBtn ? S.Lesson.speakBtn(e) : null, h('div', { class: 'grow' }, h('div', { class: 'es', lang: tl }, e), h('div', { class: 'nl' }, n))))));
      if (blk.uz && blk.uz.length && S.uitzBox) part.append(S.uitzBox(blk.uz.map(([t, html]) => ({ t, html }))));
      wrap.append(part);
    }
    const rel = (b.rel || []).map(get).filter(r => r && fits(r, tl));
    if (rel.length) wrap.append(h('div', { class: 'bg-rel' }, h('span', { class: 'small muted' }, 'Zie ook: '),
      rel.map(r => h('button', { class: 'chip toggle bg-rel-chip', type: 'button', onclick: e => { e.stopPropagation(); onRel(r.id); } }, T(r)))));
    return wrap;
  }

  /** Venster met één begrip (ook tijdens een les; de les blijft gewoon staan). */
  function open(id) {
    const b = get(id); if (!b || !hasDom) return;
    const root = document.getElementById('modal-root'); if (!root) return;
    root.innerHTML = '';
    const close = () => { root.innerHTML = ''; document.removeEventListener('keydown', esc, true); };
    const esc = e => { if (e.key === 'Escape') { e.stopPropagation(); e.preventDefault(); close(); } };
    document.addEventListener('keydown', esc, true);
    const inLesson = !!(document.getElementById('lesson') && !document.getElementById('lesson').hidden);
    const blk = b[target()];
    const card = h('div', { class: 'modal bg-modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': T(b) },
      h('div', { class: 'bg-m-top' }, h('div', { class: 'grow' }, h('div', { class: 'eyebrow' }, '📖 Grammaticabegrip'), h('h3', null, T(b)), blk && blk.n ? h('div', { class: 'bg-m-n muted', lang: target() }, blk.n) : null),
        h('button', { class: 'icon-btn bg-x', type: 'button', 'aria-label': 'Sluiten', onclick: close }, '✕')),
      h('p', { class: 'bg-k' }, K(b)),
      body(b, rid => open(rid)),
      h('div', { class: 'row gap end bg-m-foot' },
        inLesson ? null : h('a', { class: 'btn ghost', href: '#/begrippen/' + b.id, onclick: close }, '📖 Alle begrippen'),
        h('button', { class: 'btn primary', type: 'button', onclick: close }, 'Begrepen')));
    decorate(card.querySelector('.bg-body'), { skip: new Set([b.id]), all: true });
    root.append(h('div', { class: 'modal-bg', onclick: e => { if (e.target.classList.contains('modal-bg')) close(); } }, card));
  }

  /** Zet een stippellijn onder grammaticabegrippen in el (alleen in gewone tekst, niet in knoppen of doeltaal).
      opt.skip: Set met id's die niet (meer) hoeven; opt.all: elk begrip maar één keer per element. */
  function decorate(el, opt = {}) {
    if (!el || !hasDom || !enabled()) return el;
    const skip = opt.skip || new Set();
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: n => {
        for (let p = n.parentElement; p && p !== el.parentElement; p = p.parentElement) {
          if (/^(A|BUTTON|INPUT|TEXTAREA|SELECT|SCRIPT|STYLE|TH)$/.test(p.tagName) || p.classList.contains('bg-term') || p.classList.contains('uz-t') || p.classList.contains('xi-t')) return NodeFilter.FILTER_REJECT;
          const lg = p.getAttribute('lang'); if (lg && lg !== 'nl') return NodeFilter.FILTER_REJECT;
        }
        return n.nodeValue.trim().length > 2 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      } });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      const ms = match(n.nodeValue, { skip });
      if (!ms.length) return;
      const frag = document.createDocumentFragment(); let pos = 0;
      ms.forEach(m => {
        skip.add(m.id);
        if (m.i > pos) frag.append(n.nodeValue.slice(pos, m.i));
        const b = BY[m.id];
        frag.append(h('span', { class: 'bg-term', role: 'button', tabindex: '0', 'data-b': m.id, title: T(b) + ': ' + K(b),
          onclick: e => { e.stopPropagation(); e.preventDefault(); open(m.id); },
          onkeydown: e => { if (e.key === 'Enter') { e.stopPropagation(); e.preventDefault(); open(m.id); } } }, m.s));
        pos = m.i + m.n;
      });
      if (pos < n.nodeValue.length) frag.append(n.nodeValue.slice(pos));
      n.replaceWith(frag);
    });
    return el;
  }

  /* ---------- pagina #/begrippen ---------- */
  function page(arg) {
    const wrap = h('div', { class: 'page bg-page' });
    const back = h('a', { class: 'back', href: '#/practica' }, '← ' + (S.tl ? S.tl('Práctica') : 'Práctica'));
    if (!enabled()) { wrap.append(back, h('h1', null, 'Grammaticabegrippen'), h('p', { class: 'muted' }, 'Deze uitleg is er nu voor cursussen met uitleg in het Nederlands.')); return wrap; }
    const all = list();
    wrap.append(back, h('h1', null, 'Grammaticabegrippen'),
      h('p', { class: 'muted' }, 'Wat is een lidwoord, een onderwerp of ' + (target() === 'es' ? 'de subjuntivo' : 'een bijwoord') + '? Hier staat elk begrip in gewone taal, met voorbeelden in het ' + tlName() + '. '),
      h('div', { class: 'bg-tip card' }, h('span', { class: 'bg-tip-ic', 'aria-hidden': 'true' }, '💡'), h('div', null, 'In de uitleg van je lessen staan deze woorden ', h('span', { class: 'bg-term demo' }, 'onderstreept'), '. Tik erop, dan zie je meteen wat het betekent, ook midden in een oefening.')));
    const q = h('input', { class: 'input bg-search', type: 'search', placeholder: '🔍 Zoek een begrip, bv. lidwoord of gerundio', 'aria-label': 'Zoek een begrip', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' });
    const chips = h('nav', { class: 'chips wrap bg-cats', 'aria-label': 'Onderdelen' });
    const out = h('div', { class: 'bg-list' });
    const items = {};
    const item = b => {
      const d = h('details', { class: 'bg-item card', id: 'bg-' + b.id },
        h('summary', null, h('div', { class: 'grow' }, h('b', null, T(b)), b[target()] && b[target()].n ? h('span', { class: 'bg-n muted', lang: target() }, ' · ' + b[target()].n) : null, h('div', { class: 'small muted bg-sum-k' }, K(b))), h('span', { class: 'fold-chev', 'aria-hidden': 'true' }, '›')));
      let filled = false;
      d.addEventListener('toggle', () => {
        if (d.open && !filled) { filled = true; const bd = body(b, go); d.append(bd); decorate(bd, { skip: new Set([b.id]) }); }
      });
      items[b.id] = d;
      return d;
    };
    const go = id => {
      if (q.value) { q.value = ''; draw(); }
      const d = items[id]; if (!d) return;
      d.open = true; d.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const draw = () => {
      out.innerHTML = '';
      const hits = q.value.trim() ? search(q.value) : all;
      if (!hits.length) { out.append(h('p', { class: 'muted' }, 'Niets gevonden. Probeer een ander woord.')); return; }
      CATS.forEach(([c, icon, title, sub]) => {
        const these = hits.filter(b => b.c === c); if (!these.length) return;
        out.append(h('section', { class: 'sec bg-cat', id: 'bgc-' + c }, h('h2', { class: 'sec-title' }, icon + ' ' + title), h('p', { class: 'small muted bg-cat-sub' }, sub), these.map(item)));
      });
      if (q.value.trim() && hits.length === 1) items[hits[0].id].open = true;
    };
    CATS.forEach(([c, icon, title]) => { if (all.some(b => b.c === c)) chips.append(h('button', { class: 'chip toggle', type: 'button', onclick: () => { if (q.value) { q.value = ''; draw(); } const s = document.getElementById('bgc-' + c); if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }, icon + ' ' + title)); });
    q.addEventListener('input', draw);
    wrap.append(q, chips, out);
    draw();
    if (arg && items[arg]) setTimeout(() => go(arg), 60);
    return wrap;
  }

  S.Begrippen = { B, CATS, list, get, match, search, decorate, open, page, enabled, fits, add, title: T };
})(window.SPT);
