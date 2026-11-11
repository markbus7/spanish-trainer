/* Plaatsingstoets, vrije gesprekssituaties, regio’s en uitdrukkingen. */
(function (S) {
  'use strict';

  /* Plaatsingstoets: per niveau 8 vragen, eerste optie is juist. */
  S.placement = [
    { lv: 'A1', q: '¿Cómo ___ llamas?', o: ['te', 'se', 'me'] },
    { lv: 'A1', q: 'Ella ___ de Colombia.', o: ['es', 'está', 'son'] },
    { lv: 'A1', q: 'Tengo veinte ___.', o: ['años', 'edad', 'viejos'] },
    { lv: 'A1', q: '¿Dónde ___ el baño?', o: ['está', 'es', 'hay'] },
    { lv: 'A1', q: 'Me ___ los tacos.', o: ['gustan', 'gusta', 'gusto'] },
    { lv: 'A1', q: 'Nosotros ___ en Lima.', o: ['vivimos', 'viven', 'vivo'] },
    { lv: 'A1', q: 'Mañana voy ___ estudiar.', o: ['a', 'de', 'para'] },
    { lv: 'A1', q: '¿___ un banco cerca de aquí?', o: ['Hay', 'Está', 'Es'] },

    { lv: 'A2', q: 'Ayer ___ al cine con mis amigos.', o: ['fui', 'iba', 'voy'] },
    { lv: 'A2', q: 'Cuando era niño, ___ mucho fútbol.', o: ['jugaba', 'jugué', 'juego'] },
    { lv: 'A2', q: '¿Alguna vez ___ ceviche?', o: ['has probado', 'has probando', 'probaste nunca'] },
    { lv: 'A2', q: '¿Tienes el libro? — Sí, ___ tengo.', o: ['lo', 'le', 'la'] },
    { lv: 'A2', q: 'Mi hermano es ___ que yo.', o: ['mayor', 'más mayor', 'el mayor de'] },
    { lv: 'A2', q: 'Mientras yo ___, sonó el teléfono.', o: ['dormía', 'dormí', 'duermo'] },
    { lv: 'A2', q: 'El próximo año ___ a Chile.', o: ['viajaré', 'viajaba', 'viajé'] },
    { lv: 'A2', q: '¡___ la verdad! (decir, tú)', o: ['Di', 'Dice', 'Dices'] },

    { lv: 'B1', q: 'Quiero que tú ___ conmigo.', o: ['vengas', 'vienes', 'venir'] },
    { lv: 'B1', q: 'Es importante que ustedes ___ temprano.', o: ['lleguen', 'llegan', 'llegarán'] },
    { lv: 'B1', q: 'Yo en tu lugar, ___ con ella.', o: ['hablaría', 'hablaré', 'hablé'] },
    { lv: 'B1', q: 'No creo que ___ razón.', o: ['tengas', 'tienes', 'tendrás'] },
    { lv: 'B1', q: 'Cuando ___ a México, te visitaré.', o: ['vaya', 'voy', 'iré'] },
    { lv: 'B1', q: 'Me dijo que ___ muy cansado.', o: ['estaba', 'esté', 'estará'] },
    { lv: 'B1', q: 'Busco un apartamento que ___ cerca del metro.', o: ['esté', 'está', 'estará'] },
    { lv: 'B1', q: 'Ojalá ___ buen clima mañana.', o: ['haga', 'hace', 'hará'] },

    /* Extra vragen (november 2026): de niveautest kiest er elke keer een paar uit, zodat je hem kunt herhalen. */
    { lv: 'A1', q: 'Ustedes ___ estudiantes, ¿verdad?', o: ['son', 'están', 'es'] },
    { lv: 'A1', q: 'Yo ___ café todas las mañanas.', o: ['tomo', 'toma', 'tomas'] },
    { lv: 'A1', q: 'La casa de Lucía es muy ___.', o: ['bonita', 'bonito', 'bonitas'] },
    { lv: 'A1', q: 'Son las tres ___ la tarde.', o: ['de', 'en', 'a'] },
    { lv: 'A1', q: 'Mi mamá ___ cansada hoy.', o: ['está', 'es', 'tiene'] },
    { lv: 'A1', q: 'Los niños ___ en el parque.', o: ['juegan', 'juega', 'jugan'] },
    { lv: 'A1', q: '¿___ cuesta el boleto?', o: ['Cuánto', 'Cuál', 'Dónde'] },
    { lv: 'A1', q: 'Yo me ___ a las siete.', o: ['levanto', 'levanta', 'levantas'] },
    { lv: 'A1', q: '___ hermanas de Ana son altas.', o: ['Las', 'Los', 'La'] },
    { lv: 'A1', q: 'Tengo ___ y quiero un vaso de agua.', o: ['sed', 'hambre', 'sueño'] },

    { lv: 'A2', q: 'La semana pasada ___ (nosotros) a la playa.', o: ['fuimos', 'íbamos', 'vamos'] },
    { lv: 'A2', q: '¿Ya ___ la tarea? — Sí, ya la terminé.', o: ['terminaste', 'terminabas', 'terminas'] },
    { lv: 'A2', q: 'Hace dos años que ___ español.', o: ['estudio', 'estudié', 'estudiaba'] },
    { lv: 'A2', q: 'Ayer le ___ un regalo a mi mamá.', o: ['compré', 'compraba', 'compro'] },
    { lv: 'A2', q: 'Este libro es para ___.', o: ['ti', 'tú', 'te'] },
    { lv: 'A2', q: 'Me duele ___ cabeza.', o: ['la', 'mi', 'una'] },
    { lv: 'A2', q: 'Hoy hace ___ calor que ayer.', o: ['más', 'muy', 'tan'] },
    { lv: 'A2', q: '___ la sal, por favor. (pasar, usted)', o: ['Páseme', 'Pásame', 'Pasa'] },
    { lv: 'A2', q: 'Voy a la tienda ___ comprar pan.', o: ['para', 'por', 'de'] },
    { lv: 'A2', q: 'No conozco a ___ en esta ciudad.', o: ['nadie', 'nada', 'ninguno'] },

    { lv: 'B1', q: 'Te llamo cuando ___ a casa.', o: ['llegue', 'llego', 'llegaré'] },
    { lv: 'B1', q: 'Espero que te ___ mejor pronto.', o: ['sientas', 'sientes', 'sentirás'] },
    { lv: 'B1', q: 'Es posible que ___ mañana.', o: ['llueva', 'llueve', 'lloverá'] },
    { lv: 'B1', q: 'Cuando llegué a la estación, el tren ya ___.', o: ['había salido', 'ha salido', 'salía'] },
    { lv: 'B1', q: 'Me molesta que la gente ___ tan fuerte en el cine.', o: ['hable', 'habla', 'hablará'] },
    { lv: 'B1', q: 'Te presto el carro para que ___ al aeropuerto.', o: ['vayas', 'vas', 'irás'] },
    { lv: 'B1', q: 'Me prometió que me ___ el lunes, pero no llamó.', o: ['llamaría', 'llame', 'llamará'] },
    { lv: 'B1', q: 'No es que no ___, es que no tengo tiempo.', o: ['quiera', 'quiero', 'querré'] },
    { lv: 'B1', q: 'Mi hermana se ___ muy nerviosa antes del examen.', o: ['puso', 'hizo', 'volvió'] },
    { lv: 'B1', q: 'El museo ___ visitamos ayer es enorme.', o: ['que', 'quien', 'donde'] },

    { lv: 'B2', q: 'Si ___ más tiempo, aprendería portugués.', o: ['tuviera', 'tengo', 'tendría'] },
    { lv: 'B2', q: 'Me alegré mucho de que ___ a la fiesta.', o: ['vinieras', 'vienes', 'vendrás'] },
    { lv: 'B2', q: 'Si me hubieras llamado, te ___ ayudado.', o: ['habría', 'había', 'habré'] },
    { lv: 'B2', q: 'En Buenos Aires: «Vos ___ muy amable.»', o: ['sos', 'sois', 'es'] },
    { lv: 'B2', q: 'Le pedí que me ___ el libro.', o: ['devolviera', 'devolvía', 'devolverá'] },
    { lv: 'B2', q: 'No había nadie que ___ hablar inglés.', o: ['supiera', 'sabía', 'sabe'] },
    { lv: 'B2', q: 'Me miró como si ___ un fantasma.', o: ['hubiera visto', 'ha visto', 'vio'] },
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

  /* Regio’s: kenmerken en typische woorden (herkenning, vooral vanaf B1/B2). */
  S.regions = [
    { id: 'mx', flag: '🇲🇽', name: 'Mexico', speakers: '±130 mln',
      traits: ['Duidelijke uitspraak, vaak gezien als «neutraal» (veel dubbing komt uit Mexico)', 'Veel verkleinwoorden: ahorita, cafecito, tantito', 'Beleefd: «¿mande?» = pardon?'],
      words: [['¿qué onda?', 'hoe is ’t?'], ['chido / padre', 'tof'], ['güey', 'gast (informeel)'], ['la lana', 'geld'], ['la chamba', 'werk'], ['¡órale! / ¡sale!', 'oké! / komt goed!'], ['el camión', 'de bus'], ['¿mande?', 'pardon? (beleefd)']] },
    { id: 'co', flag: '🇨🇴', name: 'Colombia', speakers: '±52 mln',
      traits: ['Bogotá: heel duidelijke uitspraak, veel «usted», ook onder vrienden (ustedeo)', 'Kust (Cartagena, Barranquilla): s aan het eind valt weg, Caribisch ritme', 'Heel beleefd: «¿me regala…?», «qué pena con usted»'],
      words: [['parce / parcero', 'maat, vriend'], ['chévere / bacano', 'tof'], ['¿quiubo?', 'hoe is ’t?'], ['un tinto', 'zwarte koffie'], ['la plata', 'geld'], ['¡qué pena!', 'sorry / wat gênant'], ['¡listo!', 'oké!'], ['el camello', 'werk (informeel)']] },
    { id: 'ar', flag: '🇦🇷', name: 'Argentinië & Uruguay (Río de la Plata)', speakers: '±50 mln',
      traits: ['VOSEO: «vos» in plaats van tú: vos sos, vos tenés, vos querés, vení', 'll en y klinken als «sj» (sheísmo): «calle» ≈ «kasje»', 'Italiaanse melodie en handgebaren'],
      words: [['che', 'hé / joh'], ['boludo', 'gast (vriendschappelijk, maar ook scheldwoord!)'], ['el laburo', 'werk'], ['el bondi / el colectivo', 'de bus'], ['re-', 'heel (re lindo)'], ['dale', 'oké'], ['la birra', 'het bier'], ['¿todo bien?', 'alles goed?']] },
    { id: 'cl', flag: '🇨🇱', name: 'Chili', speakers: '±19 mln',
      traits: ['Snel gesproken, eindletters vallen weg', 'Veel eigen slang, «po» (= pues) achter zinnen: «sí po», «ya po»', 'Soms voseo in de werkwoordsvorm: «¿cómo estái?»'],
      words: [['¿cachai?', 'snap je?'], ['bacán', 'tof'], ['fome', 'saai'], ['el pololo / la polola', 'vriend / vriendin (relatie)'], ['la pega', 'werk'], ['al tiro', 'meteen'], ['una luca', 'duizend peso'], ['la once', 'lichte avondmaaltijd']] },
    { id: 'pe', flag: '🇵🇪', name: 'Peru & Andes (Bolivia, Ecuador)', speakers: '±60 mln',
      traits: ['Rustig en duidelijk, goed te verstaan', 'Invloed van Quechua: «guagua» (baby), «cancha» (geroosterde mais / veld)', 'Ecuador: «ya mismo» = straks; veel «usted»'],
      words: [['el pata / el causa', 'maat, vriend (PE)'], ['chévere / bacán', 'tof'], ['la chamba', 'werk'], ['el jato', 'het huis (PE, slang)'], ['¡ya!', 'oké!'], ['la palta', 'de avocado'], ['el soroche', 'hoogteziekte'], ['la guagua', 'de baby (Andes)']] },
    { id: 'car', flag: '🇨🇺🇵🇷🇩🇴🇻🇪', name: 'Caribisch gebied (Cuba, Puerto Rico, Dominicaanse Rep., Venezuela)', speakers: '±50 mln',
      traits: ['Snel en melodieus; s valt weg («¿cómo etá?»)', 'Puerto Rico: r aan het eind kan als l klinken («puelta»)', 'Onderwerp vóór werkwoord in vragen: «¿Qué tú quieres?»'],
      words: [['la guagua', 'de bus'], ['chévere', 'tof'], ['el / la pana', 'maat, vriend'], ['la vaina', 'het ding / gedoe'], ['¡wepa!', 'joepie! (PR)'], ['el chamo', 'de jongen (VE)'], ['¿qué lo que?', 'hoe is ’t? (DR)'], ['jevo / jeva', 'vriend(in) (relatie)']] },
    { id: 'ca', flag: '🇬🇹🇸🇻🇭🇳🇳🇮🇨🇷', name: 'Midden-Amerika', speakers: '±45 mln',
      traits: ['Veel voseo (Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica)', 'Costa Rica: veel «usted», ook tegen kinderen; «pura vida»', 'Verkleinwoord op -ico: «momentico», «chiquitico»'],
      words: [['pura vida', 'top! / alles goed (CR)'], ['mae', 'gast (CR)'], ['tuanis', 'tof (CR)'], ['el chunche', 'het ding (CR, NI)'], ['el cipote', 'het kind (HN, SV)'], ['chapín', 'Guatemalteek'], ['el pisto', 'geld (GT, HN, SV)'], ['¡qué chilero!', 'wat tof! (GT)']] }
  ];

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
