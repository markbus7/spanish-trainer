/* Neerlandés: prueba de nivel, conversaciones libres y frases del día. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('nl-es')) return;

  /* Prueba de nivel A1, A2 y B1: la primera opción es la correcta. */
  S.placement = [
    { lv: 'A1', q: 'Ik ___ uit Panama.', o: ['kom', 'komt', 'komen'], nl: "Soy de Panamá." },
    { lv: 'A1', q: 'Zij ___ docent.', o: ['is', 'ben', 'zijn'], nl: "Ella es profesora." },
    { lv: 'A1', q: 'Hoe ___ je?', o: ['heet', 'ben', 'is'], nl: "¿Cómo te llamas?" },
    { lv: 'A1', q: 'Ik ___ twee broers.', o: ['heb', 'heeft', 'ben'], nl: "Tengo dos hermanos." },
    { lv: 'A1', q: 'Hij ___ elke ochtend koffie.', o: ['drinkt', 'drink', 'drinken'], nl: "Él toma café todas las mañanas." },
    { lv: 'A1', q: '___ jij thee?', o: ['Drink', 'Drinkt', 'Drinken'], nl: "¿Tomas té?" },
    { lv: 'A1', q: 'Ik heb ___ honger.', o: ['geen', 'niet', 'nee'], nl: "No tengo hambre." },
    { lv: 'A1', q: '___ er een bank in de buurt?', o: ['Is', 'Zijn', 'Heeft'], nl: "¿Hay un banco cerca?" },
    { lv: 'A1', q: '___ kind is jong.', o: ['Het', 'De', 'Den'], nl: "El niño es pequeño." },
    { lv: 'A1', q: 'Ik ___ 25 jaar.', o: ['ben', 'heb', 'heeft'], nl: "Tengo 25 años." },
    { lv: 'A1', q: 'Vandaag ___ ik thuis.', o: ['werk', 'werkt', 'werken'], nl: "Hoy trabajo en casa." },
    { lv: 'A1', q: 'Dit is Ana en ___ man.', o: ['haar', 'zijn', 'hun'], nl: "Esta es Ana y su esposo." },
    { lv: 'A1', q: '«half acht» is…', o: ['7:30', '8:30', '8:00'] },
    { lv: 'A1', q: 'Wij ___ vrienden.', o: ['zijn', 'is', 'bent'], nl: "Somos amigos." },
    { lv: 'A2', q: 'Ik ___ gisteren pizza gegeten.', o: ['heb', 'ben', 'had'], nl: "Ayer comí pizza." },
    { lv: 'A2', q: 'Wij ___ naar Brussel gegaan.', o: ['zijn', 'hebben', 'is'], nl: "Fuimos a Bruselas." },
    { lv: 'A2', q: 'Ik heb mijn moeder ___.', o: ['gebeld', 'gebelt', 'gebellen'], nl: "Llamé a mi mamá." },
    { lv: 'A2', q: 'Ben je ooit in België ___?', o: ['geweest', 'gezijnd', 'gebent'], nl: "¿Alguna vez has estado en Bélgica?" },
    { lv: 'A2', q: 'Je ___ niet te betalen.', o: ['hoeft', 'moet', 'mag'], nl: "No tienes que pagar." },
    { lv: 'A2', q: 'Amsterdam is groter ___ Utrecht.', o: ['dan', 'als', 'van'], nl: "Ámsterdam es más grande que Utrecht." },
    { lv: 'A2', q: 'Dit is de ___ stad van Nederland.', o: ['mooiste', 'mooier', 'meest mooi'], nl: "Es la ciudad más bonita de los Países Bajos." },
    { lv: 'A2', q: 'Mijn rug ___ pijn.', o: ['doet', 'heeft', 'is'], nl: "Me duele la espalda." },
    { lv: 'A2', q: 'Ik blijf thuis, omdat ik ziek ___.', o: ['ben', 'is', 'zijn'], nl: "Me quedo en casa porque estoy enfermo." },
    { lv: 'A2', q: 'Toen ik klein was, ___ ik in Panama.', o: ['woonde', 'woon', 'gewoond'], nl: "Cuando era niño, vivía en Panamá." },
    { lv: 'A2', q: 'Ik ga naar de markt ___ groente te kopen.', o: ['om', 'voor', 'want'], nl: "Voy al mercado a comprar verduras." },
    { lv: 'A2', q: 'Hoeveel appels heb je? Ik heb ___ drie.', o: ['er', 'het', 'ze'], nl: "¿Cuántas manzanas tienes? Tengo tres." },
    { lv: 'A2', q: 'Ik ___ me een beetje moe.', o: ['voel', 'voelt', 'voelen'], nl: "Me siento un poco cansado." },
    { lv: 'A2', q: 'Als het morgen regent, ___ ik thuis.', o: ['blijf', 'blijft', 'blijven'], nl: "Si mañana llueve, me quedo en casa." },
    { lv: 'B1', q: 'Ik vind dat Amsterdam te duur ___.', o: ['is', 'zijn', 'ben'], nl: "Creo que Ámsterdam es demasiado caro." },
    { lv: 'B1', q: 'Weet jij ___ de winkel open is?', o: ['of', 'dat', 'als'], nl: "¿Sabes si la tienda está abierta?" },
    { lv: 'B1', q: 'Het huis ___ ik zoek, moet een balkon hebben.', o: ['dat', 'die', 'wat'], nl: "La casa que busco tiene que tener balcón." },
    { lv: 'B1', q: 'De wijk ___ ik woon, is rustig.', o: ['waar', 'die', 'wat'], nl: "El barrio donde vivo es tranquilo." },
    { lv: 'B1', q: 'Kaas ___ in Gouda gemaakt.', o: ['wordt', 'worden', 'heeft'], nl: "El queso se hace en Gouda." },
    { lv: 'B1', q: 'Als ik rijk was, ___ ik een wereldreis maken.', o: ['zou', 'zal', 'ik zou'], nl: "Si fuera rico, haría un viaje por el mundo." },
    { lv: 'B1', q: 'Toen ik aankwam, ___ de trein al vertrokken.', o: ['was', 'had', 'is'], nl: "Cuando llegué, el tren ya había salido." },
    { lv: 'B1', q: 'Hij zei dat hij moe ___.', o: ['was', 'is geweest is', 'ben'], nl: "Dijo que estaba cansado." },
    { lv: 'B1', q: 'Wacht je op de bus? Ja, ik wacht ___.', o: ['erop', 'op het', 'op hem'], nl: "¿Esperas el autobús? Sí, lo estoy esperando." },
    { lv: 'B1', q: 'Ik denk vaak ___ mijn familie.', o: ['aan', 'over', 'op'], nl: "Pienso mucho en mi familia." },
    { lv: 'B1', q: 'Ik probeer elke dag Nederlands ___ spreken.', o: ['te', 'om', 'voor'], nl: "Intento hablar neerlandés todos los días." },
    { lv: 'B1', q: 'Ik heb twee uur moeten ___.', o: ['wachten', 'gewacht', 'te wachten'], nl: "Tuve que esperar dos horas." },
    { lv: 'B1', q: '___ u mij kunnen helpen?', o: ['Zou', 'Zal', 'Wil het'], nl: "¿Podría ayudarme?" },
    { lv: 'B1', q: 'De kat ligt op de bank te ___.', o: ['slapen', 'slaapt', 'geslapen'], nl: "El gato está durmiendo en el sofá." }
  ];

  /* Conversaciones libres con Profe Lupe. */
  S.scenarios = [
    { id: 'nl-bakker', icon: '🥖', lv: 'A1', title: 'En la panadería', place: 'Haarlem 🇳🇱', role: 'Je bent Petra, een vriendelijke bakker in Haarlem. Vraag wat de klant wil, bied brood en koekjes aan en noem de prijs. Spreek heel eenvoudig Nederlands.', goal: 'Compra pan y algo dulce, y paga.' },
    { id: 'nl-fiets', icon: '🚲', lv: 'A1', title: 'Alquilar una bicicleta', place: 'Ámsterdam 🇳🇱', role: 'Je bent Joost, je verhuurt fietsen in Amsterdam. Vraag hoe lang de klant de fiets wil, leg de prijs uit en geef één tip voor het verkeer. Spreek eenvoudig.', goal: 'Alquila una bicicleta por un día y pregunta el precio.' },
    { id: 'nl-trein', icon: '🚆', lv: 'A1', title: 'En la estación', place: 'Utrecht Centraal 🇳🇱', role: 'Je werkt bij de informatiebalie van station Utrecht Centraal. Help de reiziger met een kaartje, het perron en de tijd van de trein. Spreek eenvoudig.', goal: 'Pregunta cómo llegar a Ámsterdam en tren, de qué andén sale y a qué hora.' },
    { id: 'nl-verjaardag', icon: '🎂', lv: 'A1', title: 'Un cumpleaños neerlandés', place: 'Róterdam 🇳🇱', role: 'Je bent Femke en het is je verjaardag. Er zitten gasten in een kring. Begroet de gast, bied koffie en taart aan en vraag waar hij of zij vandaan komt. Spreek eenvoudig.', goal: 'Felicita, preséntate y conversa un poco con los invitados.' },
    { id: 'nl-weekend', icon: '🕰️', lv: 'A2', title: 'Contar tu fin de semana', place: 'Den Haag 🇳🇱', role: 'Je bent Lotte, een collega in Den Haag. Het is maandag. Vraag wat de leerling in het weekend heeft gedaan en stel vervolgvragen in het perfectum. Vertel ook kort over je eigen weekend. Spreek eenvoudig Nederlands (A2).', goal: 'Cuenta qué hiciste el fin de semana y reacciona a su historia.' },
    { id: 'nl-huisarts', icon: '🩺', lv: 'A2', title: 'Llamar a la huisarts', place: 'Leiden 🇳🇱', role: 'Je bent doktersassistente bij een huisartsenpraktijk in Leiden. De patiënt belt. Vraag naar de klachten en sinds wanneer, en maak een afspraak. Spreek eenvoudig, beleefd Nederlands (A2) en gebruik "u".', goal: 'Explica qué te pasa y haz una cita para hoy o mañana.' },
    { id: 'nl-stad', icon: '🏙️', lv: 'A2', title: 'Comparar ciudades', place: 'Groningen 🇳🇱', role: 'Je bent Bram, een student in Groningen. Vraag de leerling om zijn of haar stad te vergelijken met Groningen (groter, duurder, gezelliger) en vraag "Ben je ooit in … geweest?". Spreek eenvoudig Nederlands (A2).', goal: 'Compara tu ciudad con una ciudad neerlandesa.' },
    { id: 'nl-sollicitatie', icon: '💼', lv: 'B1', title: 'Entrevista de trabajo', place: 'Utrecht 🇳🇱', role: 'Je bent Karin, HR-manager bij een bedrijf in Utrecht, en je houdt een sollicitatiegesprek met de leerling. Vraag naar ervaring, sterke punten, een moeilijke situatie (wat was er gebeurd?) en een hypothetische vraag (Wat zou je doen als…?). Spreek Nederlands op B1-niveau en gebruik "u".', goal: 'Habla de tu experiencia y contesta preguntas hipotéticas.' },
    { id: 'nl-klacht', icon: '📦', lv: 'B1', title: 'Hacer un reclamo', place: 'Eindhoven 🇳🇱', role: 'Je bent medewerker van de klantenservice van een webwinkel en neemt de telefoon op. De bestelling van de leerling is beschadigd aangekomen. Wees beleefd, vraag naar het ordernummer en details, en bied oplossingen. Spreek Nederlands op B1-niveau en gebruik "u".', goal: 'Explica el problema con cortesía y consigue una solución.' },
    { id: 'nl-discussie', icon: '🗳️', lv: 'B1', title: 'Dar tu opinión', place: 'Nijmegen 🇳🇱', role: 'Je bent Bas, een student in Nijmegen met een duidelijke mening. Bespreek een onderwerp (thuiswerken, sociale media of toerisme in Amsterdam). Vraag naar de mening van de leerling, ben het soms beleefd oneens en vraag waarom. Spreek Nederlands op B1-niveau.', goal: 'Da tu opinión con argumentos y reacciona a la suya.' },
    { id: 'nl-vrij', icon: '💬', lv: 'A1', title: 'Conversación libre', place: 'Países Bajos 🇳🇱', role: 'Je bent een vriendelijke Nederlander (kies een stad en noem die aan het begin). Praat op een natuurlijke, eenvoudige manier over het dagelijks leven, hobby’s en plannen.', goal: 'Habla de lo que quieras.' }
  ];

  /* Frases del día: [neerlandés, español, bandera]. */
  S.phrases = [
    ['Oefening baart kunst.', 'La práctica hace al maestro.', '🇳🇱'],
    ['Beter laat dan nooit.', 'Más vale tarde que nunca.', '🇳🇱'],
    ['Gezellig!', '¡Qué agradable! (ambiente acogedor)', '🇳🇱'],
    ['Lekker bezig!', '¡Muy bien, sigue así!', '🇳🇱'],
    ['Geen zorgen.', 'No te preocupes.', '🇳🇱'],
    ['Wie niet waagt, die niet wint.', 'El que no arriesga, no gana.', '🇳🇱'],
    ['Het regent pijpenstelen.', 'Está lloviendo a cántaros.', '🇳🇱'],
    ['Doe maar normaal, dan doe je al gek genoeg.', 'Sé normal, que con eso ya es bastante loco.', '🇳🇱'],
    ['Tijd is geld.', 'El tiempo es oro.', '🇳🇱'],
    ['Eet smakelijk!', '¡Buen provecho!', '🇳🇱'],
    ['Succes!', '¡Mucha suerte!', '🇳🇱'],
    ['Stap voor stap.', 'Paso a paso.', '🇳🇱']
  ];
})(window.SPT);
