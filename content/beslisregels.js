/* 📐 Beslisregels en ezelsbruggetjes voor onderwerpen die hardnekkig fout blijven gaan (js/strategie.js, strategie «Beslisregel»).
   Eén korte regel die je bij elke zin kunt nalopen, in plaats van de hele uitleg opnieuw. Sleutel = grammatica-tag uit C.TAGS,
   of één werkwoordstijd ('c|estar|pres'). Uitzonderingen staan er altijd bij als «Uitzondering», mét de reden.
   Andere cursussen kunnen hun eigen lijst toevoegen (S.beslis); zonder regel gebruikt de app de uitleg uit de les. */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('es-nl')) return; // cursus Spaans (uitleg in het Nederlands)

  S.beslis = Object.assign(S.beslis || {}, {
    'contractions': { t: 'Beslisregel: al en del', html: `<p>Stel jezelf bij elke zin twee vragen:</p>
<ol><li>Staat er <b>a</b> of <b>de</b>?</li><li>Komt er direct <b>el</b> achter?</li></ol>
<p>Twee keer ja? Dan plak je ze aan elkaar: <b>a + el = al</b>, <b>de + el = del</b>. In alle andere gevallen (la, los, las) verandert er niets.</p>
<div class="table-wrap"><table class="gtable"><tr><th>el</th><th>la / los / las</th></tr><tr><td>Voy <b>al</b> banco.</td><td>Voy <b>a la</b> farmacia.</td></tr><tr><td>Cerca <b>del</b> parque.</td><td>Cerca <b>de la</b> plaza.</td></tr><tr><td>Al lado <b>del</b> museo.</td><td>Al lado <b>de los</b> baños.</td></tr></table></div>
<p>🧠 Ezelsbruggetje: <b>alleen «el» smelt</b>. De l van el blijft staan, de e verdwijnt: a+<s>e</s>l, de+<s>e</s>l.</p>
<p>⚠️ Uitzondering: <b>él</b> met accent (= hij) smelt niet: <i>el libro es de él</i>. Reden: él is een persoon, geen lidwoord.</p>
<p>⚠️ Uitzondering: een naam die met El begint smelt in geschreven Spaans niet: <i>Voy a El Salvador</i>. Reden: El hoort bij de naam.</p>` },
    'ser-estar': { t: 'Beslisregel: ser of estar', html: `<p>Vraag je af: zeg ik <b>wat</b> iets is, of <b>hoe of waar</b> het nu is?</p>
<ul><li><b>Wat het is</b> (naam, beroep, herkomst, karakter, tijd): <b>ser</b>. <i>Soy Mark. Es doctora. Somos de Holanda. Son las tres.</i></li>
<li><b>Hoe het nu is</b> (gevoel, toestand) of <b>waar het is</b>: <b>estar</b>. <i>Estoy cansado. El baño está allí.</i></li></ul>
<p>🧠 Ezelsbruggetje: bij <b>estar</b> hoort een <b>st</b>and of een <b>st</b>ek (plaats).</p>
<p>⚠️ Uitzondering: waar een <b>feest of evenement</b> plaatsvindt zeg je met <b>ser</b>: <i>¿Dónde es la fiesta?</i> Reden: het gaat om «plaatsvinden», niet om waar een ding staat.</p>` },
    'hay-estar': { t: 'Beslisregel: hay of estar', html: `<p>Kijk naar het woord dat erachter komt:</p>
<ul><li><b>un / una, een getal of niets</b> ervoor (iets nieuws noemen): <b>hay</b>. <i>Hay un banco. Hay dos farmacias.</i></li>
<li><b>el / la, mi / tu of een naam</b> (iets bekends): <b>estar</b>. <i>El banco está en la plaza.</i></li></ul>
<p>🧠 Ezelsbruggetje: <b>hay = «er is»</b>. Past «er is / er zijn» in je Nederlandse zin, dan is het hay. <i>Hay</i> verandert nooit, ook niet in het meervoud.</p>` },
    'por-para': { t: 'Beslisregel: por of para', html: `<p>Teken in gedachten een pijl:</p>
<ul><li><b>para →</b> wijst vooruit naar een <b>doel, bestemming, ontvanger of deadline</b>: <i>Es para ti. Salgo para México. Estudio para aprender. Para el lunes.</i></li>
<li><b>por ↔</b> gaat over de <b>reden, de weg erdoorheen, de duur of een ruil</b>: <i>Gracias por la ayuda. Camino por el parque. Por dos horas. Diez pesos por un taco.</i></li></ul>
<p>🧠 Ezelsbruggetje: <b>para = pijl</b> (waarheen, voor wie), <b>por = oorzaak</b> (waardoor, waarlangs).</p>` },
    'gender': { t: 'Beslisregel: el of la', html: `<p>Kijk naar het einde van het woord:</p>
<ul><li>eindigt op <b>-o</b>: meestal <b>el</b> (el libro, el banco)</li><li>eindigt op <b>-a, -ción, -sión, -dad, -tad</b>: meestal <b>la</b> (la casa, la estación, la ciudad)</li></ul>
<p>⚠️ Uitzondering: woorden op <b>-ma</b> uit het Grieks zijn mannelijk: <i>el problema, el tema, el idioma, el clima</i>. Reden: in het Grieks waren ze onzijdig.</p>
<p>⚠️ Uitzondering: <i>la mano, la foto, la moto</i> zijn vrouwelijk. Reden: mano was al vrouwelijk in het Latijn; foto en moto zijn afkortingen van la fotografía en la motocicleta.</p>
<p>⚠️ Uitzondering: <i>el día</i> is mannelijk, ook al eindigt het op -a. Reden: het Latijnse woord (dies) was al mannelijk. Leer het met het lidwoord erbij.</p>` },
    'muy-mucho': { t: 'Beslisregel: muy of mucho', html: `<p>Kijk naar het woord dat erachter komt:</p>
<ul><li>een <b>bijvoeglijk naamwoord of bijwoord</b> (hoe iets is): <b>muy</b>. <i>muy grande, muy bien</i></li>
<li>een <b>zelfstandig naamwoord</b> (een ding): <b>mucho / mucha / muchos / muchas</b>. <i>mucho trabajo, muchas gracias</i></li>
<li><b>na een werkwoord</b> (veel doen): <b>mucho</b>. <i>Trabajo mucho.</i></li></ul>
<p>🧠 Ezelsbruggetje: <b>muy = «heel»</b>, <b>mucho = «veel»</b>. Vertaal je zin naar het Nederlands en je weet het.</p>` },
    'gustar': { t: 'Beslisregel: gusta of gustan', html: `<p>Draai de zin om: <i>me gusta el café</i> is letterlijk «de koffie bevalt mij». Het ding dat bevalt bepaalt de vorm:</p>
<ul><li>één ding of een werkwoord: <b>gusta</b>. <i>Me gusta el café. Me gusta bailar.</i></li><li>meer dingen: <b>gustan</b>. <i>Me gustan los tacos.</i></li></ul>
<p>En wie het leuk vindt staat vooraan: <b>me, te, le, nos, les</b>. Na gustar komt altijd een lidwoord: <i>me gusta <b>el</b> chocolate</i>.</p>
<p>🧠 Ezelsbruggetje: tel wat er ná gustar staat, niet wie er spreekt.</p>` },
    'pret-imp': { t: 'Beslisregel: indefinido of imperfecto', html: `<p>Stel je een film voor:</p>
<ul><li><b>Wat er gebeurde</b> (één keer, afgerond, de actie): <b>indefinido</b>. <i>Ayer comí tacos. Llegó a las ocho.</i></li>
<li><b>Het decor</b> (hoe het was, wat je altijd deed, wat er bezig was): <b>imperfecto</b>. <i>Hacía calor. De niño jugaba fútbol.</i></li></ul>
<p>🧠 Ezelsbruggetje: signaalwoorden. <b>ayer, anoche, una vez, de repente</b> → indefinido. <b>siempre, todos los días, mientras, de niño</b> → imperfecto.</p>` },
    'c|estar|pres': { html: `<p>🧠 Ezelsbruggetje: bij <b>estar</b> ligt de klemtoon altijd op de <b>a</b>, daarom staat er een accent op <b>estás, está, están</b>. Alleen <i>yo</i> is anders: <b>estoy</b>, net als <i>soy, voy, doy</i>.</p>
<p>⚠️ Uitzondering: <b>estamos</b> heeft geen accent. Reden: de klemtoon valt daar vanzelf al op de a (voorlaatste lettergreep).</p>` },
    'c|ser|pres': { html: `<p>🧠 Ezelsbruggetje: <b>soy, eres, es, somos, son</b>. Ser is helemaal onregelmatig, dus leer de rij als een rijmpje. <i>Yo</i> eindigt op <b>-oy</b>, net als <i>estoy, voy, doy</i>.</p>` },
    'c|ir|pres': { html: `<p>🧠 Ezelsbruggetje: <b>voy, vas, va, vamos, van</b>. Alles begint met een <b>v</b>, daarna gaat het als een gewoon -ar-werkwoord (vas, va, vamos, van). Alleen <i>yo</i> krijgt <b>-oy</b>.</p>` }
  });
})(window.SPT);
