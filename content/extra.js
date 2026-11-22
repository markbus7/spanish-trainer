/* Plaatsingstoets, vrije gesprekssituaties, regio’s en uitdrukkingen. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('es-nl')) return; // lesstof van de cursus Spaans (uitleg in het Nederlands)

  /* Plaatsingstoets: per niveau 8 vragen, eerste optie is juist. */
  S.placement = [
    { lv: 'A1', q: '¿Cómo ___ llamas?', o: ['te', 'se', 'me'], nl: "Hoe heet je?" },
    { lv: 'A1', q: 'Ella ___ de Colombia.', o: ['es', 'está', 'son'], nl: "Zij komt uit Colombia." },
    { lv: 'A1', q: 'Tengo veinte ___.', o: ['años', 'edad', 'viejos'], nl: "Ik ben twintig jaar." },
    { lv: 'A1', q: '¿Dónde ___ el baño?', o: ['está', 'es', 'hay'], nl: "Waar is de wc?" },
    { lv: 'A1', q: 'Me ___ los tacos.', o: ['gustan', 'gusta', 'gusto'], nl: "Ik vind taco's lekker." },
    { lv: 'A1', q: 'Nosotros ___ en Lima.', o: ['vivimos', 'viven', 'vivo'], nl: "Wij wonen in Lima." },
    { lv: 'A1', q: 'Mañana voy ___ estudiar.', o: ['a', 'de', 'para'], nl: "Morgen ga ik studeren." },
    { lv: 'A1', q: '¿___ un banco cerca de aquí?', o: ['Hay', 'Está', 'Es'], nl: "Is er een bank hier in de buurt?" },

    { lv: 'A2', q: 'Ayer ___ al cine con mis amigos.', o: ['fui', 'iba', 'voy'], nl: "Gisteren ging ik met mijn vrienden naar de film." },
    { lv: 'A2', q: 'Cuando era niño, ___ mucho fútbol.', o: ['jugaba', 'jugué', 'juego'], nl: "Toen ik klein was, voetbalde ik veel." },
    { lv: 'A2', q: '¿Alguna vez ___ ceviche?', o: ['has probado', 'has probando', 'probaste nunca'], nl: "Heb je ooit ceviche geproefd?" },
    { lv: 'A2', q: '¿Tienes el libro? — Sí, ___ tengo.', o: ['lo', 'le', 'la'], nl: "Heb je het boek? — Ja, ik heb het." },
    { lv: 'A2', q: 'Mi hermano es ___ que yo.', o: ['mayor', 'más mayor', 'el mayor de'], nl: "Mijn broer is ouder dan ik." },
    { lv: 'A2', q: 'Mientras yo ___, sonó el teléfono.', o: ['dormía', 'dormí', 'duermo'], nl: "Terwijl ik sliep, ging de telefoon." },
    { lv: 'A2', q: 'El próximo año ___ a Chile.', o: ['viajaré', 'viajaba', 'viajé'], nl: "Volgend jaar reis ik naar Chili." },
    { lv: 'A2', q: '¡___ la verdad! (decir, tú)', o: ['Di', 'Dice', 'Dices'], nl: "Zeg de waarheid!" },

    { lv: 'B1', q: 'Quiero que tú ___ conmigo.', o: ['vengas', 'vienes', 'venir'], nl: "Ik wil dat je met me meekomt." },
    { lv: 'B1', q: 'Es importante que ustedes ___ temprano.', o: ['lleguen', 'llegan', 'llegarán'], nl: "Het is belangrijk dat jullie vroeg komen." },
    { lv: 'B1', q: 'Yo en tu lugar, ___ con ella.', o: ['hablaría', 'hablaré', 'hablé'], nl: "Als ik jou was, zou ik met haar praten." },
    { lv: 'B1', q: 'No creo que ___ razón.', o: ['tengas', 'tienes', 'tendrás'], nl: "Ik denk niet dat je gelijk hebt." },
    { lv: 'B1', q: 'Cuando ___ a México, te visitaré.', o: ['vaya', 'voy', 'iré'], nl: "Als ik naar Mexico ga, kom ik bij je langs." },
    { lv: 'B1', q: 'Me dijo que ___ muy cansado.', o: ['estaba', 'esté', 'estará'], nl: "Hij zei dat hij erg moe was." },
    { lv: 'B1', q: 'Busco un apartamento que ___ cerca del metro.', o: ['esté', 'está', 'estará'], nl: "Ik zoek een appartement dat dicht bij de metro ligt." },
    { lv: 'B1', q: 'Ojalá ___ buen clima mañana.', o: ['haga', 'hace', 'hará'], nl: "Hopelijk is het morgen mooi weer." },

    /* Extra vragen (november 2026): de niveautest kiest er elke keer een paar uit, zodat je hem kunt herhalen. */
    { lv: 'A1', q: 'Ustedes ___ estudiantes, ¿verdad?', o: ['son', 'están', 'es'], nl: "Jullie zijn studenten, toch?" },
    { lv: 'A1', q: 'Yo ___ café todas las mañanas.', o: ['tomo', 'toma', 'tomas'], nl: "Ik drink elke ochtend koffie." },
    { lv: 'A1', q: 'La casa de Lucía es muy ___.', o: ['bonita', 'bonito', 'bonitas'], nl: "Het huis van Lucía is heel mooi." },
    { lv: 'A1', q: 'Son las tres ___ la tarde.', o: ['de', 'en', 'a'], nl: "Het is drie uur 's middags." },
    { lv: 'A1', q: 'Mi mamá ___ cansada hoy.', o: ['está', 'es', 'tiene'], nl: "Mijn moeder is vandaag moe." },
    { lv: 'A1', q: 'Los niños ___ en el parque.', o: ['juegan', 'juega', 'jugan'], nl: "De kinderen spelen in het park." },
    { lv: 'A1', q: '¿___ cuesta el boleto?', o: ['Cuánto', 'Cuál', 'Dónde'], nl: "Hoeveel kost het kaartje?" },
    { lv: 'A1', q: 'Yo me ___ a las siete.', o: ['levanto', 'levanta', 'levantas'], nl: "Ik sta om zeven uur op." },
    { lv: 'A1', q: '___ hermanas de Ana son altas.', o: ['Las', 'Los', 'La'], nl: "De zussen van Ana zijn lang." },
    { lv: 'A1', q: 'Tengo ___ y quiero un vaso de agua.', o: ['sed', 'hambre', 'sueño'], nl: "Ik heb dorst en wil een glas water." },

    { lv: 'A2', q: 'La semana pasada ___ (nosotros) a la playa.', o: ['fuimos', 'íbamos', 'vamos'], nl: "Vorige week gingen we naar het strand." },
    { lv: 'A2', q: '¿Ya ___ la tarea? — Sí, ya la terminé.', o: ['terminaste', 'terminabas', 'terminas'], nl: "Heb je je huiswerk al af? — Ja, ik ben er al mee klaar." },
    { lv: 'A2', q: 'Hace dos años que ___ español.', o: ['estudio', 'estudié', 'estudiaba'], nl: "Ik studeer al twee jaar Spaans." },
    { lv: 'A2', q: 'Ayer le ___ un regalo a mi mamá.', o: ['compré', 'compraba', 'compro'], nl: "Gisteren kocht ik een cadeau voor mijn moeder." },
    { lv: 'A2', q: 'Este libro es para ___.', o: ['ti', 'tú', 'te'], nl: "Dit boek is voor jou." },
    { lv: 'A2', q: 'Me duele ___ cabeza.', o: ['la', 'mi', 'una'], nl: "Ik heb hoofdpijn." },
    { lv: 'A2', q: 'Hoy hace ___ calor que ayer.', o: ['más', 'muy', 'tan'], nl: "Vandaag is het warmer dan gisteren." },
    { lv: 'A2', q: '___ la sal, por favor. (pasar, usted)', o: ['Páseme', 'Pásame', 'Pasa'], nl: "Geeft u mij het zout even aan, alstublieft." },
    { lv: 'A2', q: 'Voy a la tienda ___ comprar pan.', o: ['para', 'por', 'de'], nl: "Ik ga naar de winkel om brood te kopen." },
    { lv: 'A2', q: 'No conozco a ___ en esta ciudad.', o: ['nadie', 'nada', 'ninguno'], nl: "Ik ken niemand in deze stad." },

    { lv: 'B1', q: 'Te llamo cuando ___ a casa.', o: ['llegue', 'llego', 'llegaré'], nl: "Ik bel je als ik thuiskom." },
    { lv: 'B1', q: 'Espero que te ___ mejor pronto.', o: ['sientas', 'sientes', 'sentirás'], nl: "Ik hoop dat je je snel beter voelt." },
    { lv: 'B1', q: 'Es posible que ___ mañana.', o: ['llueva', 'llueve', 'lloverá'], nl: "Het kan zijn dat het morgen regent." },
    { lv: 'B1', q: 'Cuando llegué a la estación, el tren ya ___.', o: ['había salido', 'ha salido', 'salía'], nl: "Toen ik op het station aankwam, was de trein al vertrokken." },
    { lv: 'B1', q: 'Me molesta que la gente ___ tan fuerte en el cine.', o: ['hable', 'habla', 'hablará'], nl: "Het stoort me dat mensen zo hard praten in de bioscoop." },
    { lv: 'B1', q: 'Te presto el carro para que ___ al aeropuerto.', o: ['vayas', 'vas', 'irás'], nl: "Ik leen je de auto zodat je naar het vliegveld kunt." },
    { lv: 'B1', q: 'Me prometió que me ___ el lunes, pero no llamó.', o: ['llamaría', 'llame', 'llamará'], nl: "Hij beloofde dat hij me maandag zou bellen, maar hij belde niet." },
    { lv: 'B1', q: 'No es que no ___, es que no tengo tiempo.', o: ['quiera', 'quiero', 'querré'], nl: "Het is niet dat ik niet wil, ik heb gewoon geen tijd." },
    { lv: 'B1', q: 'Mi hermana se ___ muy nerviosa antes del examen.', o: ['puso', 'hizo', 'volvió'], nl: "Mijn zus werd heel zenuwachtig voor het examen." },
    { lv: 'B1', q: 'El museo ___ visitamos ayer es enorme.', o: ['que', 'quien', 'donde'], nl: "Het museum dat we gisteren bezochten is enorm." },

    { lv: 'B2', q: 'Si ___ más tiempo, aprendería portugués.', o: ['tuviera', 'tengo', 'tendría'], nl: "Als ik meer tijd had, zou ik Portugees leren." },
    { lv: 'B2', q: 'Me alegré mucho de que ___ a la fiesta.', o: ['vinieras', 'vienes', 'vendrás'], nl: "Ik was heel blij dat je naar het feest kwam." },
    { lv: 'B2', q: 'Si me hubieras llamado, te ___ ayudado.', o: ['habría', 'había', 'habré'], nl: "Als je me had gebeld, had ik je geholpen." },
    { lv: 'B2', q: 'En Buenos Aires: «Vos ___ muy amable.»', o: ['sos', 'sois', 'es'], nl: "In Buenos Aires: «Jij bent heel aardig.»" },
    { lv: 'B2', q: 'Le pedí que me ___ el libro.', o: ['devolviera', 'devolvía', 'devolverá'], nl: "Ik vroeg hem of hij me het boek terug wilde geven." },
    { lv: 'B2', q: 'No había nadie que ___ hablar inglés.', o: ['supiera', 'sabía', 'sabe'], nl: "Er was niemand die Engels kon spreken." },
    { lv: 'B2', q: 'Me miró como si ___ un fantasma.', o: ['hubiera visto', 'ha visto', 'vio'], nl: "Hij keek me aan alsof hij een spook had gezien." },
    { lv: 'B2', q: '¿Qué significa «estar en las nubes»?', o: ['estar distraído', 'estar muy feliz', 'viajar en avión'] }
  ];

  /* Vrije rollenspellen voor de AI-docent. */
  S.scenarios = [
    { id: 'taqueria', icon: '🌮', lv: 'A1', title: 'Taco’s bestellen', place: 'Ciudad de México 🇲🇽', role: 'Eres don Beto, mesero de una taquería en la CDMX. Hablas amable y rápido, dices «joven», recomiendas tacos al pastor y preguntas «¿con todo?».', goal: 'Bestel eten en drinken en reken af.' },
    { id: 'taxi', icon: '🚕', lv: 'A1', title: 'In de taxi', place: 'Bogotá 🇨🇴', role: 'Eres don Hernán, taxista bogotano muy conversador. Tratas de «usted», preguntas de dónde es el pasajero y recomiendas lugares de la ciudad.', goal: 'Zeg waar je heen wilt, vraag naar de prijs en voer een praatje.' },
    { id: 'mercado', icon: '🥭', lv: 'A1', title: 'Op de markt', place: 'Lima 🇵🇪', role: 'Eres la señora Carmen, vendedora de frutas en un mercado de Lima. Ofreces frutas peruanas (lúcuma, chirimoya, mango) y aceptas regatear un poco.', goal: 'Koop fruit, vraag naar prijzen en probeer af te dingen.' },
    { id: 'hostal', icon: '🛏️', lv: 'A2', title: 'Inchecken in een hostel', place: 'Cusco 🇵🇪', role: 'Eres Wilmer, recepcionista de un hostal en Cusco. Explicas horarios, el desayuno, consejos para la altura (soroche) y excursiones.', goal: 'Check in, vraag naar ontbijt, wifi en een excursie naar Machu Picchu.' },
    { id: 'asado', icon: '🥩', lv: 'A2', title: 'Een asado bij vrienden', place: 'Buenos Aires 🇦🇷', role: 'Eres Martín, porteño de Buenos Aires que organiza un asado. Hablas con voseo (vos tenés, vos sos), usas «che», «dale», «re» y explicas los cortes de carne y el mate. Si el estudiante no entiende el voseo, explícalo brevemente.', goal: 'Stel je voor, praat over eten en reageer op het Argentijnse vos.' },
    { id: 'doctor', icon: '🩺', lv: 'A2', title: 'Bij de dokter', place: 'Guadalajara 🇲🇽', role: 'Eres la doctora Ramírez, médica general en Guadalajara. Usas «usted», preguntas por síntomas y das consejos.', goal: 'Beschrijf klachten en begrijp het advies.' },
    { id: 'piso', icon: '🏠', lv: 'A2', title: 'Een kamer huren', place: 'Santiago 🇨🇱', role: 'Eres Javiera, chilena que alquila una pieza en su departamento en Santiago. Usas un poco de jerga chilena suave («po», «¿cachai?», «bacán») y explicas reglas de la casa y el precio.', goal: 'Vraag naar prijs, buurt en huisregels en maak een afspraak.' },
    { id: 'entrevista', icon: '💼', lv: 'B1', title: 'Sollicitatiegesprek', place: 'Ciudad de Panamá 🇵🇦', role: 'Eres el señor Delgado, gerente de una empresa de logística en Ciudad de Panamá. Haces una entrevista formal sobre experiencia, motivación, fortalezas y debilidades.', goal: 'Overtuig de interviewer en stel zelf ook vragen.' },
    { id: 'debate', icon: '🗣️', lv: 'B1', title: 'Discussie: stad of platteland?', place: 'Medellín 🇨🇴', role: 'Eres Juliana, paisa de Medellín, y defiendes que es mejor vivir en la ciudad. Das argumentos, pides la opinión del estudiante y usas expresiones para opinar («creo que», «no estoy de acuerdo»).', goal: 'Geef je mening met argumenten en reageer op de hare.' },
    { id: 'libre', icon: '☕', lv: 'A1', title: 'Vrij gesprek', place: 'Latinoamérica 🌎', role: 'Eres un amigo latinoamericano simpático (elige un país al empezar y dilo). Conversas de forma natural sobre la vida diaria, intereses y planes del estudiante.', goal: 'Praat vrijuit over wat je wilt.' }
  ];

  /* De oude «Regio’s» staan nu, uitgebreid per land, in content/landen.js (uitbreiding «Op reis»). */

  /* Uitdrukkingen voor «la frase del día». */
  S.phrases = [
    ['Poco a poco se va lejos.', 'Stapje voor stapje kom je ver.', '🌎'],
    ['Más vale tarde que nunca.', 'Beter laat dan nooit.', '🌎'],
    ['No hay mal que por bien no venga.', 'Elk nadeel heeft z’n voordeel.', '🌎'],
    ['Camarón que se duerme, se lo lleva la corriente.', 'Wie slaapt, wordt meegesleurd door de stroom (blijf alert).', '🌎'],
    ['El que no arriesga, no gana.', 'Wie niet waagt, die niet wint.', '🌎'],
    ['Echar la mano.', 'Een handje helpen.', '🇲🇽'],
    ['Estar en las nubes.', 'Met je hoofd in de wolken zitten.', '🌎'],
    ['Ser pan comido.', 'Een makkie zijn (letterlijk: gegeten brood).', '🌎'],
    ['Dar papaya.', 'Jezelf kwetsbaar opstellen / vragen om problemen.', '🇨🇴'],
    ['Ponerse las pilas.', 'Aan de bak gaan (letterlijk: je batterijen erin doen).', '🌎'],
    ['Estar hecho pelota.', 'Kapot / doodmoe zijn.', '🇦🇷'],
    ['¡No manches!', 'Echt niet! / Niet te geloven! (informeel)', '🇲🇽'],
    ['Tirar la toalla.', 'De handdoek in de ring gooien.', '🌎'],
    ['Costar un ojo de la cara.', 'Een fortuin kosten.', '🌎'],
    ['Al mal tiempo, buena cara.', 'Houd de moed erin bij tegenslag.', '🌎'],
    ['Quien mucho abarca, poco aprieta.', 'Wie te veel tegelijk wil, bereikt weinig.', '🌎'],
    ['Hablando del rey de Roma…', 'Als je het over de duivel hebt…', '🌎'],
    ['Andar con pies de plomo.', 'Heel voorzichtig te werk gaan.', '🌎'],
    ['Me importa un pepino.', 'Het kan me geen moer schelen.', '🌎'],
    ['Ser buena onda.', 'Een aardig, relaxed persoon zijn.', '🇲🇽'],
    ['Tener mala leche.', 'Pech hebben (CL) / kwade bedoelingen hebben (AR, ES).', '🇨🇱'],
    ['Estar como agua para chocolate.', 'Woedend zijn (op het kookpunt).', '🇲🇽'],
    ['De tal palo, tal astilla.', 'Zo vader, zo zoon.', '🌎'],
    ['Agarrar la onda.', 'Het snappen / het oppikken.', '🇲🇽'],
    ['Ni modo.', 'Jammer dan / er is niks aan te doen.', '🇲🇽'],
    ['Echar los perros.', 'Iemand versieren.', '🇨🇴'],
    ['Hacerse la vaca.', 'Spijbelen.', '🇵🇪'],
    ['Buscarle cinco patas al gato.', 'Spijkers op laag water zoeken.', '🇦🇷'],
    ['El que madruga, Dios lo ayuda.', 'De morgenstond heeft goud in de mond.', '🌎'],
    ['Aprender español es pan comido… ¡con práctica!', 'Spaans leren is een makkie… met oefening!', '😉']
  ];
})(window.SPT);
