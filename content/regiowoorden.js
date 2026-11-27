/* 🗺️ Standaardwoorden bij regiowoorden (js/regio.js). Per doeltaal: regiowoord (exact zoals in de vocab) → standaardwoord
   dat overal begrepen wordt. Bij een typvraag naar het regiowoord is het standaardwoord ook goed.
   Geen standaardwoord (gerechten, cultuur, titels)? Laat het woord weg: dan toont de app alleen waar het vandaan komt.
   Nieuwe regiowoorden: zet de landcodes vooraan in de notitie van het woord, bijv. ['la ñaña', 'de zus', 'EC (informeel)'],
   en voeg hier het standaardwoord toe. tests/run.js controleert dat elk woord hier ook echt als regiowoord in de lesstof staat. */
(function (S) {
  'use strict';
  S.regioStd = S.regioStd || {};
  S.regioStd.es = {
    '¿qué onda?': '¿qué tal?', '¿quiubo?': '¿qué tal?', 'buen día': 'buenos días', 'mijo / mija': 'mi hijo / mi hija',
    'el carnal': 'el hermano / el amigo', 'la ñaña': 'la hermana', 'ñaño / ñaña': 'hermano / hermana', 'el colectivo': 'el autobús',
    '¡qué bacán!': '¡qué genial!', '¡qué chévere!': '¡qué genial!', '¡qué chido!': '¡qué genial!', '¡qué bacano!': '¡qué genial!',
    '¡qué padre!': '¡qué genial!', '¡qué tuanis!': '¡qué genial!', '¡qué chilero!': '¡qué genial!', '¡qué flojera!': '¡qué pereza!',
    'las medias': 'los calcetines', '¡pura vida!': '¡todo bien!', 'el tico / la tica': 'el / la costarricense', 'mae': 'amigo',
    'el soroche': 'el mal de altura', 'el chamaco / el pibe': 'el niño / el chico', 'las caricaturas': 'los dibujos animados',
    'la tiendita': 'la tienda', 'la nana': 'la niñera', '¡qué pena!': '¡qué vergüenza!', 'el cuy': 'el conejillo de Indias',
    'los chapulines': 'los saltamontes', 'la gripa': 'la gripe', '¡sale! / ¡órale!': '¡de acuerdo!', '¡listo! / ¡dale!': '¡de acuerdo!',
    'güey': 'amigo', 'de una': 'enseguida', 'el trancón': 'el embotellamiento', 'la chamba': 'el trabajo', 'el laburo': 'el trabajo',
    'la pega': 'el trabajo', 'chamba': 'trabajo', 'chambear': 'trabajar', 'laburar': 'trabajar', '¡listo el pollo!': '¡listo!',
    'la cédula': 'el documento de identidad', 'la sombrilla': 'el paraguas', '¡ni modo!': '¡qué le vamos a hacer!', 'la vaina': 'la cosa',
    '¡xopá!': '¿qué tal?', '¡Qué xopá!': '¿qué tal?', 'el colmado': 'la tienda', 'la guagua': 'el autobús', '¡qué lo qué!': '¿qué tal?',
    '¿Qué lo que?': '¿qué tal?', '¿Qué bolá?': '¿qué tal?', '¿Qué es la que hay?': '¿qué tal?', 'chévere': 'genial', '¡aguas!': '¡cuidado!',
    'ándale': '¡vamos!', '¡qué oso!': '¡qué vergüenza!', '¡qué boleta!': '¡qué vergüenza!', '¡qué roche!': '¡qué vergüenza!',
    'parcero / parcera': 'amigo / amiga', 'el / la colectivero/a': 'el / la conductor/a de autobús', 'la combi': 'el minibús', 'el combi': 'el minibús',
    'al toque': 'enseguida', 'al tiro': 'enseguida', 'el depa': 'el apartamento', 'bacán': 'genial', 'bacano / bacana': 'genial', '¿cachai?': '¿entiendes?',
    'fome': 'aburrido', '¡no manches!': '¡no puede ser!', 'diay': 'pues', 'dizque': 'supuestamente', 'patojo / patoja': 'niño / niña',
    '¡me late!': '¡me gusta la idea!', 'apapachar': 'abrazar', '¡qué onda contigo!': '¿qué te pasa?', '¡de una!': '¡claro!', 'pata': 'amigo',
    'el pata': 'el amigo', 'che': 'oye', 'boludo / boluda': 'amigo / amiga', 'bárbaro': 'genial', 're-': 'muy', 'dale': 'de acuerdo', '¿viste?': '¿sabes?',
    'la birra': 'la cerveza', 'el subte': 'el metro', 'la pileta': 'la piscina', 'la frutilla': 'la fresa', 'la palta': 'el aguacate',
    'el pibe / la piba': 'el chico / la chica', 'quilombo': 'el lío', 'mina': 'la chica', '¡qué lata!': '¡qué aburrido!', 'po': 'pues',
    '¡Chuleta!': '¡caramba!', '¡chuta!': '¡caramba!', 'el chantin': 'la casa', 'el jato': 'la casa', 'el pelao': 'el niño / el chico',
    'el pana / la pana': 'el amigo / la amiga', 'asere': 'amigo', 'la china': 'la naranja', 'la chinola': 'la maracuyá',
    'el jevo / la jeva': 'el novio / la novia', 'el zafacón': 'el basurero', 'janguear': 'salir', 'bregar': 'luchar', 'un chin': 'un poquito',
    '¡Wepa!': '¡bravo!', 'la hoja de vida': 'el currículum', 'la parka': 'la chaqueta', '¿ya?': '¿de acuerdo?', '¡achachay!': '¡qué frío!',
    '¡arrarray!': '¡qué calor!', 'de ley': 'seguro', '¿mande?': '¿perdón?', 'la chompa': 'el suéter', 'la movilidad': 'el transporte',
    'la pollera': 'la falda', 'el casero / la casera': 'el vendedor / la vendedora', 'la wawa': 'el bebé', '¡qué macana!': '¡qué lástima!',
    '¡jallalla!': '¡salud!', 'la pieza': 'la habitación', 'los yuyos': 'las hierbas', '¿mba’éichapa?': '¿cómo estás?', 'iporã': 'bien',
    'aguyje': 'gracias', 'haku': 'caliente', 'echar el cuento': 'contar la historia', 'chamo / chama': 'chico / chica', '¡Epa!': '¡hola!',
    'la guara': 'la guacamaya', 'catracho / catracha': 'hondureño / hondureña', 'cheque': 'de acuerdo', 'el pisto': 'el dinero', 'la pulpería': 'la tienda',
    '¡púchica!': '¡caramba!', '¡dale pues!': '¡de acuerdo!', '¡ideay!': '¡oye!', 'el chunche': 'la cosa', 'la medialuna': 'el cruasán', 'bancar': 'aguantar',
    'un garrón': 'una molestia', 'tal cual': 'exacto', 'chivo': 'genial', 'el chero / la chera': 'el amigo / la amiga', 'el cipote / la cipota': 'el niño / la niña',
    '¡cabal!': '¡exacto!', '¡vaya pues!': '¡de acuerdo!', 'un momentico': 'un momentito', 'chiquitico': 'chiquitito', '¡upe!': '¿hay alguien?', '¡qué chiva!': '¡qué genial!',
    'chapín / chapina': 'guatemalteco / guatemalteca', '¡Híjole!': '¡caramba!'
  };
})(window.SPT);
