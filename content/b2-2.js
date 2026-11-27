/* Niveau B2 — Latijns-Amerikaans Spaans, deel 2 (b2-14 t/m b2-20): hiermee is B2 compleet.
   Zelfde opbouw als content/b2.js. Woorden en oefeningen in een bestaande unit ALTIJD achteraan toevoegen (de herhaling onthoudt het volgnummer). */
(function (S) {
  'use strict';
  if (S.isCourse && !S.isCourse('es-nl')) return; // lesstof van de cursus Spaans (uitleg in het Nederlands)
  const U = S.addUnit;

  /* ───────────────────────── B2 · 14 ───────────────────────── */
  U({
    id: 'b2-14', level: 'B2', icon: '🗿', title: 'Cuando hayas llegado', nl: 'Wat (hopelijk) al gebeurd is en wat tegen die tijd klaar zal zijn: haya + participio en habré + participio',
    goals: ['Zeggen wat je hoopt, betwijfelt of fijn vindt over iets wat al gebeurd is: espero que hayas dormido bien', 'Twee toekomstige dingen in de goede volgorde zetten: cuando hayamos terminado, almorzamos', 'Vertellen wat tegen een bepaald moment klaar zal zijn: para el viernes habré llegado'],
    vocab: [
      ['el yacimiento', 'de opgraving, de vindplaats'], ['la pirámide', 'de piramide'], ['el templo', 'de tempel'], ['la escalinata', 'de (grote stenen) trap'], ['el jeroglífico', 'de hiëroglief'],
      ['la estela', 'de stèle, gedenksteen'], ['el / la arqueólogo/a', 'de archeoloog'], ['excavar', 'opgraven'], ['el hallazgo', 'de vondst'], ['restaurar', 'restaureren'],
      ['el siglo', 'de eeuw'], ['el arrecife', 'het rif'], ['hacer esnórquel', 'snorkelen'], ['el ferry', 'de veerboot'], ['la travesía', 'de overtocht'],
      ['el boleto de ida y vuelta', 'het retourtje'], ['para entonces', 'tegen die tijd'], ['dentro de', 'over (een week, een jaar)'], ['de aquí a', 'van nu tot, tegen'], ['a más tardar', 'uiterlijk'],
      ['la fecha límite', 'de uiterste datum, de deadline'], ['cumplir', 'halen (een deadline), nakomen'], ['el atajo', 'de kortere weg'], ['abrir el apetito', 'trek krijgen'], ['dormir como un tronco', 'slapen als een blok'],
      ['la guara', 'de ara (papegaai)', 'HN'], ['catracho / catracha', 'Hondurees / Hondurese', 'HN (informeel)'], ['cheque', 'oké, prima', 'HN · SV (informeel)'], ['el pisto', 'het geld', 'HN · GT · SV (informeel)'],
      ['la pulpería', 'de buurtwinkel', 'HN · NI · CR'], ['¡púchica!', 'verdorie!, jeetje!', 'HN · SV · GT (informeel)'], ['la baleada', 'de dubbelgevouwen tortilla met bonen en kaas'], ['la curiosidad', 'de nieuwsgierigheid'], ['el secreto', 'het geheim']
    ],
    grammar: [
      { t: 'Haya + participio: de subjuntivo van «is gebeurd»', es: 'El pretérito perfecto de subjuntivo',
        html: `<p>Je kent <i>he llegado</i> (ik ben aangekomen). Komt die zin na iets wat de <b>subjuntivo</b> vraagt (hopen, betwijfelen, blij zijn, <i>es posible que</i>…), dan wordt <i>he</i> → <b>haya</b>:</p>
<p>📌 <b>haya, hayas, haya, hayamos, hayan</b> + participio: <i>Espero que <b>hayas dormido</b> bien.</i> = Ik hoop dat je goed geslapen hebt.</p>
<p>📌 Het verschil met de gewone presente de subjuntivo zit in de <b>tijd</b>: <i>Espero que <b>llegue</b></i> (dat hij aankomt, nu of straks) tegenover <i>Espero que <b>haya llegado</b></i> (dat hij al aangekomen is).</p>
<p>⚠️ <b>Uitzondering:</b> een aantal veelgebruikte werkwoorden heeft een onregelmatig participio: <i>haya <b>hecho</b>, <b>visto</b>, <b>dicho</b>, <b>vuelto</b>, <b>puesto</b>, <b>escrito</b>, <b>abierto</b>, <b>roto</b></i>. <b>Waarom?</b> Deze werkwoorden hebben hun oude Latijnse deelwoord bewaard. Het is precies hetzelfde deelwoord als in <i>he hecho, he visto</i>.</p>`,
        table: [['zeker (indicativo)', 'na hopen, twijfel, gevoel (subjuntivo)'], ['Ha llegado.', 'Espero que haya llegado.'], ['Han salido.', 'No creo que hayan salido.'], ['Me lo has dicho.', 'Me alegra que me lo hayas dicho.'], ['Se han vendido.', 'Es posible que se hayan vendido.']],
        ex: [['No creo que hayan llegado los grupos grandes.', 'Ik denk niet dat de grote groepen al aangekomen zijn.'], ['Me alegra que me lo hayas dicho.', 'Ik ben blij dat je het me gezegd hebt.']],
        sum: 'Perfecto de subjuntivo: haya, hayas, haya, hayamos, hayan + participio. Espero que hayas dormido bien.' },
      { t: 'Cuando hayas terminado: eerst dit, dan dat', es: 'Cuando + perfecto de subjuntivo',
        html: `<p>In B1 leerde je <i>cuando llegues</i> (wanneer je aankomt). Wil je benadrukken dat het eerste <b>helemaal klaar</b> moet zijn voordat het tweede begint, dan gebruik je <b>haya + participio</b>:</p>
<p>📌 <i><b>Cuando hayamos visto</b> las ruinas, almorzamos.</i> = Als we de ruïnes gezien hebben, gaan we lunchen.</p>
<p>📌 Dat werkt ook na <b>en cuanto</b> (zodra), <b>hasta que</b> (totdat) en <b>después de que</b> (nadat): <i>No te vayas <b>hasta que hayas probado</b> una baleada.</i></p>
<p>⚠️ <b>Uitzondering:</b> in het Nederlands zeg je «als je aangekomen <b>bent</b>» of zelfs «zult zijn», maar na <i>cuando</i> over de toekomst komt in het Spaans nooit een futuro: niet <s>cuando habrás llegado</s>, maar <i>cuando <b>hayas llegado</b></i>. <b>Waarom?</b> Het is nog niet gebeurd, en een tijdsbijzin over iets wat nog moet komen krijgt altijd de subjuntivo.</p>`,
        table: [['eerst klaar', 'dan'], ['Cuando hayas llegado,', 'llámame.'], ['En cuanto hayamos terminado,', 'compro el boleto.'], ['Hasta que no hayas comido,', 'no salimos.']],
        ex: [['Lo compro en cuanto hayamos terminado la visita.', 'Ik koop het zodra we klaar zijn met het bezoek.'], ['Cuando hayas vuelto, hablamos.', 'Als je terug bent, praten we.']],
        sum: 'Cuando / en cuanto / hasta que + haya + participio: la primera acción termina antes. Nunca «cuando habrás».' },
      { t: 'Habré + participio: tegen die tijd is het klaar', es: 'El futuro perfecto',
        html: `<p>Met het <b>futuro perfecto</b> kijk je vanuit de toekomst terug: op dat moment <b>zal</b> iets al <b>gebeurd zijn</b>.</p>
<p>📌 Het futuro van <i>haber</i> + participio: <b>habré, habrás, habrá, habremos, habrán</b> + <i>llegado</i>.</p>
<p>📌 Er staat bijna altijd een moment bij: <b>para</b> el viernes, <b>para entonces</b>, <b>dentro de</b> un año, <b>de aquí a</b> diciembre, <b>a más tardar</b>: <i><b>Para el mediodía</b> habrás llegado a La Ceiba.</i></p>
<p>📌 De twee tijden van deze les horen bij elkaar: <i>Cuando <b>hayas vuelto</b>, yo ya <b>habré terminado</b>.</i> = Als jij terug bent, zal ik al klaar zijn.</p>
<p>Je kent deze vorm ook van het gissen uit B2 · 9: <i>¿Ya <b>habrán llegado</b>?</i> = Zouden ze al aangekomen zijn?</p>`,
        table: [['persoon', 'haber', '+ participio'], ['yo', 'habré', 'llegado'], ['tú / vos', 'habrás', 'terminado'], ['él, ella, usted', 'habrá', 'vuelto'], ['nosotros', 'habremos', 'visto'], ['ellos, ustedes', 'habrán', 'hecho']],
        ex: [['Para la noche ya habré cenado frente al mar.', 'Vanavond zal ik al aan zee gegeten hebben.'], ['Dentro de diez años habrán descubierto más secretos.', 'Over tien jaar zullen ze meer geheimen ontdekt hebben.']],
        sum: 'Futuro perfecto: habré, habrás, habrá, habremos, habrán + participio. Para el viernes habré terminado.' }
    ],
    verbs: ['llegar', 'terminar', 'ver', 'hacer', 'volver', 'decir', 'abrir', 'escribir', 'poner', 'dormir'], tenses: ['perfsubj', 'futperf'],
    dialogue: {
      t: 'Antes de que lleguen los grupos', place: 'Copán Ruinas 🇭🇳',
      lines: [
        ['Suyapa', '¡Buenos días, Mark! Espero que hayas dormido bien, porque hoy vamos a caminar bastante.', 'Goedemorgen Mark! Ik hoop dat je goed geslapen hebt, want vandaag gaan we flink lopen.'],
        ['Mark', 'Dormí como un tronco. ¿Ya habrán llegado los grupos grandes?', 'Ik heb geslapen als een blok. Zouden de grote groepen er al zijn?'],
        ['Suyapa', 'No creo que hayan llegado todavía. Vos tranquilo: cuando hayamos visto la escalinata de los jeroglíficos, el parque seguirá casi vacío.', 'Ik denk niet dat ze er al zijn. Maak je niet druk: als we de hiërogliefentrap gezien hebben, is het park nog steeds bijna leeg.'],
        ['Mark', '¡Qué bien! Oye, mañana quiero ir a Roatán. ¿Es mucho viaje?', 'Fijn! Zeg, morgen wil ik naar Roatán. Is dat een lange reis?'],
        ['Suyapa', 'Bastante. Si salís a las seis, para el mediodía habrás llegado a La Ceiba, y el ferry sale a las cuatro.', 'Best wel. Als je om zes uur vertrekt, ben je tegen de middag in La Ceiba aangekomen, en de veerboot vertrekt om vier uur.'],
        ['Mark', 'Entonces para la noche ya habré cenado frente al mar.', 'Dan heb ik vanavond al aan zee gegeten.'],
        ['Suyapa', '¡Cheque! Pero comprá el boleto hoy. Es posible que ya se hayan vendido los de la mañana.', 'Prima! Maar koop het kaartje vandaag. Het kan zijn dat die van de ochtend al uitverkocht zijn.'],
        ['Mark', 'Lo compro en cuanto hayamos terminado la visita. ¿Y el pisto? ¿Cambio dólares aquí?', 'Ik koop het zodra we klaar zijn met het bezoek. En het geld? Wissel ik hier dollars?'],
        ['Suyapa', 'Mejor aquí, sí. Y no te vayas de Copán hasta que hayas probado una baleada de doña Reina.', 'Beter hier, ja. En ga niet weg uit Copán voordat je een baleada van doña Reina geproefd hebt.'],
        ['Mark', 'Me alegra que me lo hayas dicho. ¿Vamos después de las ruinas?', 'Fijn dat je het zegt. Gaan we na de ruïnes?'],
        ['Suyapa', '¡Claro! Para entonces ya se nos habrá abierto el apetito.', 'Natuurlijk! Tegen die tijd hebben we wel trek gekregen.']
      ],
      q: [
        { t: 'mc', q: '¿Qué piensa Suyapa de los grupos grandes?', o: ['No cree que hayan llegado todavía', 'Cree que ya están en la escalinata', 'Dice que hoy no vienen'] },
        { t: 'mc', q: '¿Cuándo va a comprar Mark el boleto del ferry?', o: ['En cuanto hayan terminado la visita', 'Mañana a las seis', 'Cuando haya llegado a La Ceiba'] },
        { t: 'mc', q: '¿Qué tiene que probar Mark antes de irse de Copán?', o: ['Una baleada', 'Un café', 'Una pupusa'] }
      ]
    },
    culture: { t: 'Copán, de stad van de hiërogliefen', html: `<p>🗿 <b>Copán</b>, in het westen van Honduras, was meer dan duizend jaar geleden een van de grote Maya-steden. De <b>Escalinata de los Jeroglíficos</b> is een trap van 63 treden met ruim tweeduizend tekens: de langste Maya-tekst die bewaard is gebleven. Archeologen puzzelen er nog altijd aan.</p>
<p>🦜 Boven de ruïnes vliegen vrije <b>guaras rojas</b> (rode ara's), de nationale vogel van Honduras. Ze worden in de buurt opgekweekt en weer losgelaten.</p>
<p>🌮 Het bekendste Hondurese hapje is de <b>baleada</b>: een dikke tarwetortilla, dubbelgevouwen met bonen, kaas en room. Je koopt hem op straat of in een <b>pulpería</b>, het winkeltje op de hoek.</p>
<p>🗣️ Hondurezen noemen zichzelf <b>catrachos</b>. Onder vrienden zeggen ze <b>vos</b> (<i>si salís, comprá</i>), net als in Argentinië, en tegen onbekenden vaak <i>usted</i>. <b>¡Cheque!</b> is «oké» en <b>pisto</b> is geld.</p>
<p>🐠 Voor de noordkust liggen de <b>Islas de la Bahía</b> (Roatán, Utila) aan het op één na grootste koraalrif ter wereld. Veel eilanders spreken van huis uit Engels.</p>` },
    ex: [
      { t: 'cloze', s: 'Espero que ustedes ___ bien esta noche.', h: 'dormir', a: ['hayan dormido'], nl: 'Ik hoop dat jullie vannacht goed geslapen hebben.', x: 'Na espero que: haya + participio voor iets wat al gebeurd is.', tag: 'subj-perfect' },
      { t: 'cloze', s: 'No creo que el bus ___ todavía.', h: 'salir', a: ['haya salido'], nl: 'Ik denk niet dat de bus al vertrokken is.', tag: 'subj-perfect' },
      { t: 'cloze', s: 'Me alegra que (tú) me lo ___.', h: 'decir', a: ['hayas dicho'], nl: 'Ik ben blij dat je het me gezegd hebt.', x: 'Onregelmatig participio: dicho.', tag: 'subj-perfect' },
      { t: 'cloze', s: 'Cuando (nosotros) ___ la visita, vamos a almorzar.', h: 'terminar', a: ['hayamos terminado'], nl: 'Als we klaar zijn met het bezoek, gaan we lunchen.', x: 'Eerst helemaal klaar, dan het volgende: cuando + haya + participio.', tag: 'subj-perfect' },
      { t: 'cloze', s: 'No te vayas hasta que ___ una baleada.', h: 'probar', a: ['hayas probado'], nl: 'Ga niet weg voordat je een baleada geproefd hebt.', tag: 'subj-perfect' },
      { t: 'cloze', s: 'Para el mediodía (nosotros) ya ___ a La Ceiba.', h: 'llegar', a: ['habremos llegado'], nl: 'Tegen de middag zullen we al in La Ceiba aangekomen zijn.', x: 'Para + moment: futuro perfecto.', tag: 'future-perfect' },
      { t: 'cloze', s: 'Dentro de un año (yo) ___ mis estudios.', h: 'terminar', a: ['habré terminado'], nl: 'Over een jaar zal ik mijn studie afgerond hebben.', tag: 'future-perfect' },
      { t: 'cloze', s: 'Es posible que ya se ___ todos los boletos.', a: ['hayan vendido'], o: ['hayan vendido', 'han vendido', 'habrán vendido'], nl: 'Het kan zijn dat alle kaartjes al verkocht zijn.', x: 'Es posible que + subjuntivo.', tag: 'subj-perfect' },
      { t: 'cloze', s: 'Cuando leas esta carta, ___ diez años.', a: ['habrán pasado'], o: ['habrán pasado', 'hayan pasado', 'pasaron'], nl: 'Als je deze brief leest, zullen er tien jaar voorbij zijn.', tag: 'future-perfect' },
      { t: 'mc', q: 'Welke zin betekent «Ik hoop dat je het gezien hebt»?', o: ['Espero que lo hayas visto.', 'Espero que lo veas.', 'Espero que lo habrás visto.'], tag: 'subj-perfect' },
      { t: 'mc', q: '«Para el viernes habré terminado.» betekent:', o: ['Vrijdag zal ik klaar zijn.', 'Vrijdag begin ik eraan.', 'Vrijdag was ik klaar.'], tag: 'future-perfect' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Cuando hayas llegado, llámame.', 'Cuando habrás llegado, llámame.', 'Cuando has llegado, llámame.'], x: 'Na cuando over de toekomst komt nooit een futuro, maar de subjuntivo.', uitz: 'Na <b>cuando</b> over de toekomst komt nooit een futuro, ook al zegt het Nederlands «als je aangekomen bent». <b>Waarom?</b> Het is nog niet gebeurd, en een tijdsbijzin over de toekomst krijgt altijd de subjuntivo: <i>cuando hayas llegado</i>.', tag: 'subj-perfect' },
      { t: 'mc', q: 'Welke zin gaat over iets wat al gebeurd kan zijn?', o: ['Espero que haya llegado.', 'Espero que llegue.', 'Espero que llegara.'], tag: 'subj-perfect' },
      { t: 'mc', q: 'Wat is «el pisto» in Honduras?', o: ['het geld', 'de bus', 'het eten'], tag: 'vocab' },
      { t: 'order', s: 'Para entonces ya habremos llegado a la isla.', nl: 'Tegen die tijd zullen we al op het eiland aangekomen zijn.', tag: 'future-perfect' },
      { t: 'tr', nl: 'Ik hoop dat je goed geslapen hebt.', a: ['Espero que hayas dormido bien.'], tag: 'subj-perfect' },
      { t: 'tr', nl: 'Over een jaar zal ik het boek geschreven hebben.', a: ['Dentro de un año habré escrito el libro.', 'En un año habré escrito el libro.'], tag: 'future-perfect' },
      { t: 'match', p: [['el hallazgo', 'de vondst'], ['el arrecife', 'het rif'], ['a más tardar', 'uiterlijk'], ['para entonces', 'tegen die tijd'], ['la fecha límite', 'de deadline']], tag: 'vocab' }
    ],
    say: [['Espero que hayas dormido bien.', 'Ik hoop dat je goed geslapen hebt.'], ['Cuando hayamos terminado, vamos a almorzar.', 'Als we klaar zijn, gaan we lunchen.'], ['Para el viernes ya habré llegado a la isla.', 'Vrijdag zal ik al op het eiland aangekomen zijn.'], ['No creo que hayan salido todavía.', 'Ik denk niet dat ze al vertrokken zijn.']],
    task: { nl: 'Schrijf een korte brief aan jezelf over vijf jaar (6 tot 8 zinnen). Vertel wat je hoopt dat er dan gebeurd is (espero que hayas…, ojalá hayas…) en wat er tegen die tijd klaar zal zijn (para entonces habré…, dentro de cinco años habrás…).', model: 'Querido yo del futuro: Cuando leas esta carta, habrán pasado cinco años. Espero que hayas seguido estudiando español y que hayas viajado por fin a Honduras. Para entonces ya habrás terminado de pagar la casa. Ojalá hayas aprendido a bucear, como siempre quisiste. No creo que hayas cambiado mucho, pero espero que hayas hecho nuevos amigos. Y cuando hayas leído esto, escríbeme otra carta.' },
    scenario: { nl: 'Suyapa, gids in Copán, helpt je de rest van je reis door Honduras te plannen: wat moet af zijn voordat je vertrekt en waar ben je tegen het weekend?', role: 'Eres Suyapa, una guía hondureña de 29 años que trabaja en las ruinas mayas de Copán. Eres paciente, organizada y muy orgullosa de tu país. Ayudas al estudiante a planear su viaje a Roatán y La Ceiba. Usas el voseo suave de Honduras («si salís», «comprá») y palabras catrachas como «cheque», «pisto» y «baleada». Usas mucho el perfecto de subjuntivo («espero que hayas…», «cuando hayas…») y el futuro perfecto («para el viernes habrás…»), y le preguntas al estudiante qué habrá hecho para el final del viaje.', goal: 'Vertel wat je hoopt dat al geregeld is en wat je tegen het eind van de reis gedaan zult hebben.' },
    reading: {
      t: 'Carta para dentro de diez años', type: 'Brief',
      p: [
        ['Querida Suyapa del futuro: Cuando leas esta carta, habrán pasado diez años. Yo te escribo desde Copán Ruinas, sentada frente al parque, mientras las guaras vuelan sobre las pirámides.',
          'Lieve Suyapa van de toekomst: Als je deze brief leest, zullen er tien jaar voorbij zijn. Ik schrijf je vanuit Copán Ruinas, zittend voor het park, terwijl de ara’s boven de piramides vliegen.'],
        ['Espero que para entonces hayas aprendido a bucear en Roatán, como siempre quisiste, y que hayas visitado por fin a la tía Reina en La Ceiba. No creo que hayas dejado de ser guía, porque este trabajo te hace feliz.',
          'Ik hoop dat je tegen die tijd hebt leren duiken op Roatán, zoals je altijd al wilde, en dat je eindelijk tante Reina in La Ceiba hebt bezocht. Ik denk niet dat je gestopt bent als gids, want dit werk maakt je gelukkig.'],
        ['Para entonces, los arqueólogos habrán descubierto más secretos de la ciudad. Tal vez habrán terminado de leer todos los jeroglíficos de la escalinata. ¡Ojalá hayas estado ahí para verlo!',
          'Tegen die tijd zullen de archeologen meer geheimen van de stad ontdekt hebben. Misschien zijn ze dan klaar met het lezen van alle hiërogliefen van de trap. Hopelijk ben je erbij geweest om het te zien!'],
        ['Si las cosas no han salido como pensabas, no te preocupes. Lo importante es que hayas seguido aprendiendo y que no hayas perdido la curiosidad. Con cariño, Suyapa (la de antes).',
          'Als de dingen niet gelopen zijn zoals je dacht, maak je dan geen zorgen. Het belangrijkste is dat je bent blijven leren en dat je je nieuwsgierigheid niet bent kwijtgeraakt. Liefs, Suyapa (die van vroeger).']
      ],
      gl: [['sentada', 'zittend (vrouw)'], ['por fin', 'eindelijk'], ['dejar de', 'ophouden met'], ['tal vez', 'misschien'], ['con cariño', 'liefs']],
      q: [
        { t: 'mc', q: '¿Cuándo va a leer Suyapa esta carta?', o: ['Cuando hayan pasado diez años', 'Cuando haya llegado a Roatán', 'Dentro de un año'] },
        { t: 'mc', q: '¿Qué espera que haya aprendido?', o: ['A bucear', 'A leer jeroglíficos', 'A cocinar baleadas'] },
        { t: 'mc', q: '¿Qué habrán hecho los arqueólogos para entonces?', o: ['Habrán descubierto más secretos de la ciudad', 'Habrán cerrado el parque', 'Habrán construido otra escalinata'] },
        { t: 'mc', q: 'Según la carta, ¿qué es lo importante?', o: ['Que haya seguido aprendiendo', 'Que haya ganado mucho pisto', 'Que haya dejado de ser guía'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 15 ───────────────────────── */
  U({
    id: 'b2-15', level: 'B2', icon: '🌋', title: 'En cuanto llegue, te aviso', nl: 'Zodra, totdat, mits en tenzij: voegwoorden van tijd en voorwaarde met subjuntivo',
    goals: ['Afspraken maken over later met en cuanto, tan pronto como, apenas, hasta que en una vez que + subjuntivo', 'Voorwaarden stellen met con tal de que, siempre y cuando, a no ser que en en caso de que', 'Het verschil horen tussen mientras llueve (terwijl) en mientras llueva (zolang), en por si acaso gebruiken'],
    vocab: [
      ['en cuanto', 'zodra'], ['tan pronto como', 'zodra, zo gauw als'], ['apenas', 'zodra; nauwelijks'], ['hasta que', 'totdat'], ['una vez que', 'zodra, als … eenmaal'],
      ['con tal de que', 'mits, als … maar'], ['siempre y cuando', 'mits, op voorwaarde dat'], ['a no ser que', 'tenzij'], ['salvo que', 'tenzij, behalve als'], ['en caso de que', 'voor het geval dat'],
      ['por si acaso', 'voor de zekerheid, voor het geval dat'], ['a condición de que', 'op voorwaarde dat'], ['la lava', 'de lava'], ['el cráter', 'de krater'], ['la ceniza', 'de as'],
      ['la erupción', 'de uitbarsting'], ['la subida', 'de klim'], ['la cima', 'de top'], ['la bajada', 'de afdaling'], ['el oleaje', 'de golfslag'],
      ['la orilla', 'de oever'], ['zarpar', 'uitvaren, vertrekken (boot)'], ['el relámpago', 'de bliksemflits'], ['el aguacero', 'de stortbui'], ['la llovizna', 'de motregen'],
      ['el lodo', 'de modder'], ['resbaloso', 'glad', 'LatAm: in Spanje resbaladizo'], ['el impermeable', 'de regenjas'], ['suspender', 'afgelasten, opschorten'], ['de inmediato', 'onmiddellijk'],
      ['el gallo pinto', 'rijst met bonen (ontbijt)', 'NI · CR'], ['¡dale pues!', 'oké, doen we!', 'NI (informeel)'], ['¡ideay!', 'hé, wat nou!', 'NI (informeel)'], ['el chunche', 'het ding, het dingetje', 'NI · CR (informeel)'], ['el / la nica', 'de Nicaraguaan (informeel)']
    ],
    grammar: [
      { t: 'Zodra en totdat: en cuanto, hasta que', es: 'Conjunciones de tiempo',
        html: `<p>Net als <i>cuando</i> (B1) krijgen deze voegwoorden de <b>subjuntivo</b> als het over <b>later</b> gaat, want het is nog niet gebeurd:</p>
<p>📌 <b>en cuanto, tan pronto como, apenas</b> (zodra): <i>Salimos <b>en cuanto deje</b> de llover.</i></p>
<p>📌 <b>hasta que</b> (totdat): <i>Esperamos <b>hasta que salga</b> el sol.</i></p>
<p>📌 <b>una vez que, después de que</b> (als eenmaal, nadat): <i><b>Una vez que veas</b> el lago, no vas a querer bajar.</i></p>
<p>📌 Gaat het over een <b>gewoonte</b> of over het <b>verleden</b>, dan is het een feit en gebruik je de indicativo: <i>Siempre almorzamos en cuanto <b>bajamos</b>.</i> · <i>Salimos en cuanto <b>dejó</b> de llover.</i></p>
<p>⚠️ <b>Uitzondering:</b> <b>antes de que</b> krijgt <b>altijd</b> de subjuntivo, ook bij een gewoonte en in het verleden: <i>Siempre salgo antes de que <b>amanezca</b>.</i> · <i>Bajamos antes de que <b>lloviera</b>.</i> <b>Waarom?</b> Op het moment van de hoofdzin is dat andere nog niet gebeurd, dus het is nooit een feit.</p>
<p>Is het onderwerp twee keer dezelfde persoon, dan mag het korter met de infinitivo: <i>antes de <b>salir</b>, después de <b>comer</b>, hasta <b>llegar</b></i>.</p>`,
        table: [['later (subjuntivo)', 'gewoonte of verleden (indicativo)'], ['Te aviso en cuanto llegue.', 'Me avisó en cuanto llegó.'], ['Espera hasta que yo diga.', 'Esperó hasta que yo dije.'], ['Tan pronto como bajemos, comemos.', 'Tan pronto como bajamos, comemos (siempre).']],
        ex: [['Te aviso apenas note algo raro.', 'Ik laat het je weten zodra ik iets vreemds merk.'], ['Almorzamos tan pronto como bajemos.', 'We lunchen zodra we beneden zijn.']],
        sum: 'En cuanto, tan pronto como, apenas, hasta que + subjuntivo (futuro) o indicativo (pasado, costumbre). Antes de que: siempre subjuntivo.' },
      { t: 'Mits en tenzij: con tal de que, a no ser que', es: 'Conjunciones de condición',
        html: `<p>Met deze voegwoorden stel je een <b>voorwaarde</b>. Ze krijgen <b>altijd</b> de subjuntivo:</p>
<p>📌 <b>mits</b>: <i>con tal de que, siempre y cuando, a condición de que</i>: <i>Se puede subir <b>con tal de que no haya</b> tormenta.</i></p>
<p>📌 <b>tenzij</b>: <i>a no ser que, a menos que, salvo que</i>: <i>Subimos hasta el mirador, <b>a no ser que</b> el sendero <b>esté</b> resbaloso.</i></p>
<p>📌 <b>voor het geval dat</b>: <i>en caso de que</i>: <i><b>En caso de que te sientas</b> mal, avísame.</i></p>
<p>⚠️ <b>Uitzondering:</b> het gewone <b>si</b> (als) krijgt nooit de presente de subjuntivo: <i>si <b>llueve</b>, no subimos</i>, nooit <s>si llueva</s>. En <b>por si (acaso)</b> betekent ook «voor het geval dat», maar krijgt de indicativo: <i>Llevo un impermeable <b>por si llueve</b>.</i> <b>Waarom?</b> Er zit <i>si</i> in, en <i>si</i> volgt zijn eigen regel.</p>`,
        table: [['voegwoord', 'betekenis', 'voorbeeld'], ['con tal de que', 'mits', 'Voy con tal de que vengas.'], ['siempre y cuando', 'mits', 'Te espero siempre y cuando llegues a tiempo.'], ['a no ser que', 'tenzij', 'Salimos, a no ser que llueva.'], ['en caso de que', 'voor het geval dat', 'En caso de que haya ceniza, bajamos.'], ['por si (acaso)', 'voor het geval dat', 'Llevo agua por si hace calor.']],
        ex: [['Nos guardan el almuerzo siempre y cuando lleguemos antes de las tres.', 'Ze bewaren de lunch voor ons, mits we voor drie uur aankomen.'], ['Llevo un impermeable por si llueve más arriba.', 'Ik neem een regenjas mee voor het geval het hogerop regent.']],
        sum: 'Con tal de que, siempre y cuando, a no ser que, en caso de que: siempre subjuntivo. Si y por si: indicativo.' },
      { t: 'Mientras: terwijl of zolang?', es: 'Mientras + indicativo o subjuntivo',
        html: `<p><b>Mientras</b> heeft twee betekenissen, en de wijs laat horen welke:</p>
<p>📌 <b>mientras + indicativo</b> = <b>terwijl</b> (het gebeurt echt, tegelijk): <i>Mientras <b>subimos</b>, Norlan cuenta historias.</i></p>
<p>📌 <b>mientras + subjuntivo</b> = <b>zolang (als)</b> (een voorwaarde): <i>Mientras solo <b>sea</b> una llovizna, no hay problema.</i></p>
<p>📌 <b>mientras que</b> zet twee dingen tegenover elkaar (terwijl, daarentegen): <i>El Concepción está activo, <b>mientras que</b> el Maderas está dormido.</i></p>
<p>📌 <b>mientras tanto</b> = intussen: <i>Yo preparo el café. <b>Mientras tanto</b>, revisa tu mochila.</i></p>`,
        table: [['zin', 'betekenis'], ['Mientras llueve, leo.', 'Terwijl het regent, lees ik.'], ['Mientras llueva, no salgo.', 'Zolang het regent, ga ik niet weg.'], ['Yo subo, mientras que él se queda.', 'Ik ga omhoog, terwijl hij (juist) blijft.']],
        ex: [['Mientras no haya tormenta, seguimos.', 'Zolang er geen onweer is, gaan we door.'], ['Mientras caminábamos, empezó a llover.', 'Terwijl we liepen, begon het te regenen.']],
        sum: 'Mientras + indicativo = terwijl. Mientras + subjuntivo = zolang. Mientras que = contraste.' }
    ],
    verbs: ['llegar', 'dejar', 'haber', 'ser', 'decir', 'estar', 'sentirse', 'ver', 'salir', 'llover'], tenses: ['subj'],
    dialogue: {
      t: 'La subida al Concepción', place: 'Isla de Ometepe 🇳🇮',
      lines: [
        ['Norlan', '¡Ideay, Mark! ¿Listo para subir el volcán? Salimos en cuanto deje de llover.', 'Hé Mark! Klaar om de vulkaan op te gaan? We vertrekken zodra het ophoudt met regenen.'],
        ['Mark', 'Listo. Pero ¿se puede subir con este tiempo?', 'Klaar. Maar kun je met dit weer wel omhoog?'],
        ['Norlan', 'Sí, con tal de que no haya tormenta. Mientras solo sea una llovizna, no hay problema.', 'Ja, als er maar geen onweer is. Zolang het alleen motregen is, is er geen probleem.'],
        ['Mark', '¿Y hasta dónde llegamos?', 'En tot waar gaan we?'],
        ['Norlan', 'Hasta el mirador, a no ser que el sendero esté muy resbaloso. Arriba mando yo: seguimos hasta que yo diga.', 'Tot het uitkijkpunt, tenzij het pad erg glad is. Boven ben ik de baas: we gaan door totdat ik het zeg.'],
        ['Mark', 'De acuerdo. Llevo un impermeable por si llueve más arriba.', 'Afgesproken. Ik neem een regenjas mee voor het geval het hogerop regent.'],
        ['Norlan', 'Bien pensado. Y en caso de que te sientas mal, me avisás de inmediato.', 'Goed bedacht. En mocht je je niet lekker voelen, dan laat je het me meteen weten.'],
        ['Mark', 'Tranquilo, te aviso apenas note algo raro. ¿Y cuándo almorzamos?', 'Rustig maar, ik zeg het zodra ik iets vreemds merk. En wanneer lunchen we?'],
        ['Norlan', 'Tan pronto como bajemos. Doña Lesbia nos guarda un gallo pinto, siempre y cuando lleguemos antes de las tres.', 'Zodra we beneden zijn. Doña Lesbia bewaart een gallo pinto voor ons, mits we voor drie uur terug zijn.'],
        ['Mark', 'Entonces no perdamos tiempo. Mira, ya está saliendo el sol.', 'Laten we dan geen tijd verliezen. Kijk, de zon komt al door.'],
        ['Norlan', '¡Dale pues! Una vez que veas el lago desde arriba, no vas a querer bajar.', 'Oké, doen we! Als je het meer eenmaal van boven ziet, wil je niet meer naar beneden.']
      ],
      q: [
        { t: 'mc', q: '¿Cuándo van a salir Norlan y Mark?', o: ['En cuanto deje de llover', 'Antes de las tres', 'Cuando haya tormenta'] },
        { t: 'mc', q: '¿En qué caso no llegan hasta el mirador?', o: ['Si el sendero está muy resbaloso', 'Si sale el sol', 'Si Mark lleva impermeable'] },
        { t: 'mc', q: '¿Con qué condición les guardan el almuerzo?', o: ['Que lleguen antes de las tres', 'Que suban hasta el cráter', 'Que no llueva'] }
      ]
    },
    culture: { t: 'Ometepe, het eiland met twee vulkanen', html: `<p>🌋 <b>Ometepe</b> ligt midden in het <b>Lago Cocibolca</b> (het Meer van Nicaragua), het grootste meer van Midden-Amerika. Het eiland bestaat uit twee vulkanen die door een smalle strook land verbonden zijn: de actieve <b>Concepción</b> (ruim 1.600 meter) en de slapende, beboste <b>Maderas</b>. De naam komt uit het Nahuatl: <i>ome tepetl</i>, «twee bergen».</p>
<p>🥾 De klim naar de top van de Concepción duurt een hele dag en is alleen toegestaan met een gids. Veel wandelaars gaan tot een <b>mirador</b> halverwege. In de bomen hoor je de <b>monos congos</b> (brulapen) al van ver.</p>
<p>🍳 Het ontbijt is <b>gallo pinto</b>: rijst met rode bonen, vaak met ei, kaas en gebakken banaan. Costa Rica eet het ook, en beide landen vinden dat zij het hebben uitgevonden.</p>
<p>🗣️ Nicaraguanen noemen zichzelf <b>nicas</b>. Ze zeggen <b>vos</b> (<i>me avisás</i>) en slikken de s aan het eind in: <i>¿cómo estás?</i> klinkt als <i>¿cómo ehtá?</i>. <b>¡Dale pues!</b> hoor je de hele dag: oké, doen we, tot zo.</p>` },
    ex: [
      { t: 'cloze', s: 'Salimos en cuanto ___ de llover.', h: 'dejar', a: ['deje'], nl: 'We vertrekken zodra het ophoudt met regenen.', x: 'Het is nog niet gebeurd: subjuntivo.', tag: 'subj-conj' },
      { t: 'cloze', s: 'Te aviso tan pronto como (yo) ___ al hotel.', h: 'llegar', a: ['llegue'], nl: 'Ik laat het je weten zodra ik in het hotel aankom.', tag: 'subj-conj' },
      { t: 'cloze', s: 'Ayer me avisó en cuanto ___ al hotel.', h: 'llegar', a: ['llegó'], nl: 'Gisteren liet hij het me weten zodra hij in het hotel aankwam.', x: 'Verleden = een feit: indicativo.', tag: 'subj-conj' },
      { t: 'cloze', s: 'Se puede subir con tal de que no ___ tormenta.', h: 'haber', a: ['haya'], nl: 'Je kunt omhoog, als er maar geen onweer is.', x: 'Con tal de que: altijd subjuntivo.', tag: 'subj-conj' },
      { t: 'cloze', s: 'Vamos hasta la cima, a no ser que el sendero ___ cerrado.', h: 'estar', a: ['esté'], nl: 'We gaan tot de top, tenzij het pad afgesloten is.', tag: 'subj-conj' },
      { t: 'cloze', s: 'Llevo un impermeable por si ___.', a: ['llueve'], o: ['llueve', 'llueva', 'lloverá'], nl: 'Ik neem een regenjas mee voor het geval het regent.', x: 'Por si + indicativo.', uitz: '<b>Por si</b> betekent «voor het geval dat», maar krijgt de <b>indicativo</b>: <i>por si llueve</i>. <b>Waarom?</b> Er zit <i>si</i> in, en na <i>si</i> komt nooit de presente de subjuntivo. Vergelijk: <i>en caso de que llueva</i>.', tag: 'subj-conj' },
      { t: 'cloze', s: 'Mientras solo ___ una llovizna, seguimos caminando.', a: ['sea'], o: ['sea', 'es', 'será'], nl: 'Zolang het alleen motregen is, lopen we door.', x: 'Mientras = zolang: subjuntivo.', tag: 'subj-conj' },
      { t: 'cloze', s: 'En caso de que te ___ mal, avísame.', h: 'sentirse', a: ['sientas'], nl: 'Mocht je je niet lekker voelen, laat het me weten.', tag: 'subj-conj' },
      { t: 'cloze', s: 'Siempre salgo antes de que ___ el sol.', h: 'salir', a: ['salga'], nl: 'Ik vertrek altijd voordat de zon opkomt.', x: 'Antes de que: altijd subjuntivo, ook bij een gewoonte.', uitz: '<b>Antes de que</b> krijgt altijd de subjuntivo, ook bij een gewoonte of in het verleden. <b>Waarom?</b> Op het moment van de hoofdzin is dat andere nog niet gebeurd, dus het is nooit een feit.', tag: 'subj-conj' },
      { t: 'mc', q: '«Mientras llueva, no salgo.» betekent:', o: ['Zolang het regent, ga ik niet weg.', 'Terwijl het regent, ga ik weg.', 'Omdat het regende, ging ik niet weg.'], tag: 'subj-conj' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['Si llueve, no subimos.', 'Si llueva, no subimos.', 'Si lloverá, no subimos.'], x: 'Na si komt nooit de presente de subjuntivo of het futuro.', tag: 'subj-conj' },
      { t: 'mc', q: 'Welk voegwoord betekent «tenzij»?', o: ['a no ser que', 'con tal de que', 'en cuanto'], tag: 'subj-conj' },
      { t: 'mc', q: 'Welke zin gaat over een gewoonte?', o: ['Siempre comemos en cuanto bajamos.', 'Comemos en cuanto bajemos.', 'Comeremos en cuanto hayamos bajado.'], tag: 'subj-conj' },
      { t: 'mc', q: 'Wat zegt een Nicaraguaan met «¡Dale pues!»?', o: ['Oké, doen we!', 'Geef het maar!', 'Pas op!'], tag: 'vocab' },
      { t: 'order', s: 'Te aviso apenas note algo raro.', nl: 'Ik laat het je weten zodra ik iets vreemds merk.', tag: 'subj-conj' },
      { t: 'tr', nl: 'Ik bel je zodra ik aankom.', a: ['Te llamo en cuanto llegue.', 'Te llamo tan pronto como llegue.', 'Te llamo apenas llegue.', 'Te llamo cuando llegue.'], tag: 'subj-conj' },
      { t: 'tr', nl: 'We gaan, tenzij het regent.', a: ['Vamos, a no ser que llueva.', 'Vamos, a menos que llueva.', 'Vamos, salvo que llueva.', 'Vamos a ir, a no ser que llueva.', 'Vamos a ir, a menos que llueva.'], tag: 'subj-conj' },
      { t: 'match', p: [['en cuanto', 'zodra'], ['hasta que', 'totdat'], ['a no ser que', 'tenzij'], ['siempre y cuando', 'mits'], ['por si acaso', 'voor de zekerheid']], tag: 'vocab' }
    ],
    say: [['Te aviso en cuanto llegue.', 'Ik laat het je weten zodra ik aankom.'], ['Vamos, a no ser que llueva.', 'We gaan, tenzij het regent.'], ['Llevo un impermeable por si acaso.', 'Ik neem voor de zekerheid een regenjas mee.'], ['Mientras no haya tormenta, seguimos.', 'Zolang er geen onweer is, gaan we door.']],
    task: { nl: 'Je organiseert een dagtocht (wandeling, fietstocht of boottocht) voor vrienden. Schrijf een bericht van 6 tot 8 zinnen met de afspraken: wanneer jullie vertrekken (en cuanto, tan pronto como), tot wanneer iets duurt (hasta que), en de voorwaarden (con tal de que, a no ser que, en caso de que, por si acaso).', model: '¡Hola a todos! El sábado vamos al lago. Salimos en cuanto llegue el último, así que no se duerman. Caminamos hasta que encontremos un buen lugar para comer, a no ser que haga demasiado calor. En caso de que llueva, nos quedamos en el café del pueblo. Lleven un impermeable por si acaso. Yo llevo el almuerzo, con tal de que alguien traiga el postre. Y tan pronto como volvamos, les mando las fotos.' },
    scenario: { nl: 'Norlan, gids op Ometepe, spreekt met je af hoe de vulkaantocht van morgen gaat: wanneer, tot waar en onder welke voorwaarden.', role: 'Eres Norlan, un guía nicaragüense de 33 años que lleva turistas al volcán Concepción, en la isla de Ometepe. Eres bromista pero muy serio con la seguridad. Explicas las condiciones de la subida usando «en cuanto», «hasta que», «con tal de que», «a no ser que», «en caso de que» y «por si acaso». Usas el voseo nicaragüense («me avisás», «llevá agua») y expresiones como «¡Ideay!», «¡Dale pues!» y «tuani». Le preguntas al estudiante qué hará en diferentes situaciones (si llueve, si se cansa, si hay ceniza).', goal: 'Spreek de tocht af met minstens drie voorwaarden of tijdsafspraken (en cuanto…, a no ser que…, por si…).' },
    reading: {
      t: 'Normas para subir el volcán Concepción', type: 'Folder',
      p: [
        ['¡Bienvenidos a Ometepe! Antes de que empiecen a caminar, lean estas normas con atención. La subida solo está permitida con un guía local, y el grupo no sale hasta que todos hayan firmado el registro.',
          'Welkom op Ometepe! Lees deze regels aandachtig voordat u begint te lopen. De klim is alleen toegestaan met een lokale gids, en de groep vertrekt pas als iedereen het register heeft getekend.'],
        ['Se puede subir todo el año, siempre y cuando el volcán esté tranquilo. En caso de que haya ceniza o tormenta, el guía cancelará la excursión. Mientras dure la subida, sigan siempre el sendero marcado.',
          'U kunt het hele jaar omhoog, mits de vulkaan rustig is. Mocht er as of onweer zijn, dan blaast de gids de tocht af. Zolang de klim duurt, volgt u altijd het gemarkeerde pad.'],
        ['Lleven tres litros de agua por persona, comida y un impermeable por si acaso. Avisen al guía en cuanto se sientan mareados o muy cansados: nadie continúa solo, a no ser que el guía lo autorice.',
          'Neem drie liter water per persoon mee, eten en voor de zekerheid een regenjas. Laat het de gids weten zodra u zich duizelig of erg moe voelt: niemand gaat alleen verder, tenzij de gids het toestaat.'],
        ['Tan pronto como lleguen al mirador, tendrán una vista increíble del lago y del volcán Maderas. Una vez que hayan bajado, los espera un buen gallo pinto en el pueblo. ¡Dale pues, buen camino!',
          'Zodra u bij het uitkijkpunt aankomt, hebt u een ongelooflijk uitzicht op het meer en de vulkaan Maderas. Als u eenmaal beneden bent, wacht er een goede gallo pinto in het dorp. Vooruit, goede tocht!']
      ],
      gl: [['la norma', 'de regel'], ['firmar', 'ondertekenen'], ['el registro', 'het register'], ['mareado', 'duizelig'], ['autorizar', 'toestaan']],
      q: [
        { t: 'mc', q: '¿Cuándo sale el grupo?', o: ['Cuando todos hayan firmado el registro', 'En cuanto llegue el guía', 'Antes de que salga el sol'] },
        { t: 'mc', q: '¿Qué pasa en caso de que haya ceniza?', o: ['El guía cancela la excursión', 'Suben más rápido', 'Siguen hasta el cráter'] },
        { t: 'mc', q: '¿Cuándo hay que avisar al guía?', o: ['En cuanto uno se sienta mareado o muy cansado', 'Solo al llegar al mirador', 'Cuando se acabe el agua'] },
        { t: 'mc', q: '¿Puede alguien continuar solo?', o: ['No, a no ser que el guía lo autorice', 'Sí, siempre y cuando lleve agua', 'Sí, mientras siga el sendero'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 16 ───────────────────────── */
  U({
    id: 'b2-16', level: 'B2', icon: '🗣️', title: 'No es que no me guste…', nl: 'Debatteren en nuanceren: no es que, el hecho de que, si bien, por un lado… por otro',
    goals: ['Een misverstand wegnemen met no es que + subjuntivo, es que…', 'Iemand deels gelijk geven en toch tegenspreken: puede que tengas razón, pero… · si bien… · el hecho de que…', 'Een betoog ordenen met por un lado, en cambio, sin embargo, de hecho, o sea en al fin y al cabo'],
    vocab: [
      ['no es que', 'het is niet zo dat'], ['el hecho de que', 'het feit dat'], ['si bien', 'hoewel, ook al'], ['por un lado', 'aan de ene kant'], ['por otro lado', 'aan de andere kant'],
      ['en cambio', 'daarentegen'], ['no obstante', 'desondanks, niettemin'], ['de hecho', 'sterker nog, in feite'], ['es decir', 'dat wil zeggen'], ['o sea', 'oftewel, dus'],
      ['al fin y al cabo', 'uiteindelijk, per slot van rekening'], ['el punto de vista', 'het standpunt'], ['matizar', 'nuanceren'], ['plantear', 'aan de orde stellen, opwerpen'], ['sostener (ie)', 'volhouden, stellen'],
      ['coincidir', 'het eens zijn, overeenkomen'], ['discrepar', 'van mening verschillen'], ['dar la razón', 'gelijk geven'], ['tener en cuenta', 'rekening houden met'], ['discutir', 'discussiëren; betwisten'],
      ['el teletrabajo', 'het thuiswerken'], ['rendir (i)', 'presteren, productief zijn'], ['el término medio', 'de gulden middenweg'], ['el aislamiento', 'het isolement'], ['desconectar', 'loskomen van het werk, afschakelen'],
      ['ahorrarse', 'zich besparen'], ['la sobremesa', 'het natafelen'], ['el cortado', 'de espresso met een scheutje melk', 'AR · UY'], ['la medialuna', 'het croissantje', 'AR · UY'],
      ['bancar', 'verdragen, uithouden; steunen', 'AR · UY (informeel)'], ['un garrón', 'balen, iets heel vervelends', 'AR (informeel)'], ['tal cual', 'precies, zo is het', 'AR · UY · CL'], ['¡pará!', 'wacht!, stop!', 'AR · UY: vos-vorm van parar'], ['un montón', 'heel veel, een hoop']
    ],
    grammar: [
      { t: 'No es que…: zo bedoel ik het niet', es: 'No es que + subjuntivo',
        html: `<p>Met <b>no es que</b> haal je een verkeerde indruk weg. Wat je <b>ontkent</b> staat in de <b>subjuntivo</b>; de echte reden volgt met <b>es que</b> of <b>sino que</b> en staat in de indicativo:</p>
<p>📌 <i><b>No es que</b> no me <b>guste</b> la gente, <b>es que</b> en casa <b>rindo</b> más.</i> = Het is niet zo dat ik niet van mensen houd, ik presteer thuis gewoon beter.</p>
<p>📌 Hetzelfde na <b>no digo que</b>, <b>no significa que</b> en <b>no porque</b>: <i><b>No digo que haya</b> que volver todos los días.</i> · <i>Eso <b>no significa que estés</b> mejor.</i></p>
<p>⚠️ <b>Uitzondering:</b> <i>es que</i> en <i>digo que</i> krijgen de indicativo, maar zodra er <b>no</b> voor staat de subjuntivo. <b>Waarom?</b> Je presenteert het dan niet meer als een feit: je zegt juist dat het níet zo is. Het is dezelfde regel als bij <i>creo que es</i> tegenover <i>no creo que sea</i>.</p>`,
        table: [['je ontkent (subjuntivo)', 'je legt uit (indicativo)'], ['No es que sea caro,', 'es que no lo necesito.'], ['No es que no quiera,', 'es que no puedo.'], ['No digo que tengas la culpa,', 'digo que hay que hablar.']],
        ex: [['No es que no me guste la oficina, es que pierdo dos horas en el viaje.', 'Het is niet dat ik het kantoor niet leuk vind, ik verlies alleen twee uur aan de reis.'], ['No digo que sea fácil.', 'Ik zeg niet dat het makkelijk is.']],
        sum: 'No es que + subjuntivo, es que + indicativo. No digo que / no significa que + subjuntivo.' },
      { t: 'Gelijk geven en toch tegenspreken', es: 'Conceder y rebatir',
        html: `<p>Een goed debat begint met een stukje gelijk geven. Daarna komt je <b>pero</b>:</p>
<p>📌 <b>Puede que</b> + subjuntivo: <i><b>Puede que tengas</b> razón, pero…</i> = Je kunt gelijk hebben, maar…</p>
<p>📌 <b>El hecho de que</b> + subjuntivo: <i><b>El hecho de que rindas</b> más no significa que estés mejor.</i> Je neemt het punt van de ander over als uitgangspunt, niet als nieuws.</p>
<p>📌 <b>Es cierto que</b> / <b>es verdad que</b> + indicativo: <i>Es cierto que el viaje <b>cansa</b>, pero…</i></p>
<p>📌 <b>No te lo discuto</b> (dat bestrijd ik niet), <b>en eso coincido</b> (daarin ben ik het met je eens), <b>te doy la razón</b>.</p>
<p>⚠️ <b>Uitzondering:</b> <b>si bien</b> betekent «hoewel», net als <i>aunque</i>, maar krijgt altijd de <b>indicativo</b>: <i>Si bien en casa me <b>concentro</b> mejor, las ideas no se me ocurren solo.</i> <b>Waarom?</b> Met <i>si bien</i> erken je iets als een vaststaand feit. Het is ook wat formeler dan <i>aunque</i>.</p>`,
        table: [['uitdrukking', 'wijs', 'voorbeeld'], ['puede que', 'subjuntivo', 'Puede que tengas razón.'], ['el hecho de que', 'subjuntivo', 'El hecho de que sea cómodo…'], ['es cierto que', 'indicativo', 'Es cierto que ahorras tiempo.'], ['si bien', 'indicativo', 'Si bien es cómodo, aísla.']],
        ex: [['Puede que tengas razón, pero yo lo veo distinto.', 'Je kunt gelijk hebben, maar ik zie het anders.'], ['Si bien es más cómodo, también es más solitario.', 'Hoewel het comfortabeler is, is het ook eenzamer.']],
        sum: 'Puede que + subjuntivo, el hecho de que + subjuntivo. Es cierto que y si bien + indicativo.' },
      { t: 'Je betoog ordenen', es: 'Conectores para debatir',
        html: `<p>Met verbindingswoorden hoort de ander waar je heen wilt:</p>
<p>📌 <b>Twee kanten</b>: <i><b>por un lado</b>… <b>por otro (lado)</b>…</i></p>
<p>📌 <b>Tegenstelling</b>: <i><b>sin embargo</b>, <b>no obstante</b></i> (echter, toch), <i><b>en cambio</b></i> (daarentegen), <i><b>mientras que</b></i> (terwijl).</p>
<p>📌 <b>Versterken</b>: <i><b>de hecho</b></i> (sterker nog), <i><b>además</b>, <b>es más</b></i>.</p>
<p>📌 <b>Anders zeggen</b>: <i><b>es decir</b></i>, en informeel <i><b>o sea</b></i>.</p>
<p>📌 <b>Afsluiten</b>: <i><b>al fin y al cabo</b></i> (per slot van rekening), <i><b>en resumen</b>, <b>en definitiva</b></i>.</p>
<p>⚠️ <b>Uitzondering:</b> na een ontkenning is «maar» niet <i>pero</i> maar <b>sino</b> (of <b>sino que</b> + werkwoord), als je iets <b>vervangt</b>: <i>No trabajo en la oficina, <b>sino</b> en casa.</i> <b>Waarom?</b> <i>Pero</i> voegt iets toe, <i>sino</i> verbetert: niet A, maar B.</p>`,
        table: [['functie', 'woorden'], ['twee kanten', 'por un lado… por otro…'], ['tegenstelling', 'sin embargo · no obstante · en cambio'], ['versterken', 'de hecho · además · es más'], ['anders zeggen', 'es decir · o sea'], ['afsluiten', 'al fin y al cabo · en resumen']],
        ex: [['Por un lado extraño a mis compañeros; por otro, me ahorro el viaje.', 'Aan de ene kant mis ik mijn collega’s; aan de andere kant bespaar ik me de reis.'], ['De hecho, mi mejor proyecto nació en una sobremesa.', 'Sterker nog, mijn beste project ontstond tijdens het natafelen.']],
        sum: 'Por un lado… por otro. Sin embargo, en cambio, de hecho, es decir, o sea, al fin y al cabo. No… sino…' }
    ],
    verbs: ['tener', 'estar', 'sentirse', 'haber', 'decir', 'pensar', 'ser', 'querer'], tenses: ['subj', 'pres'],
    dialogue: {
      t: 'Un cortado y un debate', place: 'Buenos Aires 🇦🇷',
      lines: [
        ['Nico', 'Che, Mark, ¿vos seguís trabajando desde casa? Yo no sé cómo te lo bancás.', 'Zeg Mark, werk jij nog steeds vanuit huis? Ik snap niet hoe je het volhoudt.'],
        ['Mark', 'A mí me encanta. No es que no me guste la gente, es que en casa rindo más.', 'Ik vind het heerlijk. Het is niet dat ik niet van mensen houd, ik presteer thuis gewoon beter.'],
        ['Nico', 'Puede que tengas razón, pero el hecho de que rindas más no significa que estés mejor. ¿No te sentís solo?', 'Je kunt gelijk hebben, maar dat je meer presteert betekent niet dat je je beter voelt. Voel je je niet alleen?'],
        ['Mark', 'A veces, sí. Por un lado extraño el café con los compañeros; por otro, me ahorro dos horas de viaje por día.', 'Soms wel. Aan de ene kant mis ik de koffie met collega’s; aan de andere kant bespaar ik me twee uur reizen per dag.'],
        ['Nico', 'Tal cual, el viaje en subte es un garrón, no te lo discuto. Sin embargo, la oficina tiene algo que la pantalla no tiene.', 'Precies, de reis met de metro is balen, dat bestrijd ik niet. Toch heeft het kantoor iets wat het scherm niet heeft.'],
        ['Mark', '¿Qué cosa?', 'Wat dan?'],
        ['Nico', 'Las ideas que salen charlando. De hecho, mi mejor proyecto nació en una sobremesa, no en una reunión.', 'De ideeën die al kletsend ontstaan. Sterker nog, mijn beste project ontstond tijdens het natafelen, niet in een vergadering.'],
        ['Mark', 'En eso coincido. Si bien en casa me concentro mejor, las buenas ideas casi nunca se me ocurren solo.', 'Daarin ben ik het met je eens. Hoewel ik me thuis beter concentreer, krijg ik goede ideeën bijna nooit in mijn eentje.'],
        ['Nico', '¿Ves? No digo que haya que volver todos los días. Digo que hace falta un equilibrio.', 'Zie je? Ik zeg niet dat je elke dag terug moet. Ik zeg dat er een evenwicht nodig is.'],
        ['Mark', 'O sea, dos días en la oficina y tres en casa. Al fin y al cabo, pensamos casi lo mismo.', 'Dus twee dagen op kantoor en drie thuis. Uiteindelijk denken we bijna hetzelfde.'],
        ['Nico', '¡Pará! Un porteño nunca termina un debate tan rápido. Pidamos otro cortado y te sigo discutiendo.', 'Wacht! Iemand uit Buenos Aires beëindigt een debat nooit zo snel. Laten we nog een cortado bestellen, dan discussieer ik verder met je.']
      ],
      q: [
        { t: 'mc', q: '¿Por qué prefiere Mark trabajar en casa?', o: ['Porque en casa rinde más', 'Porque no le gusta la gente', 'Porque su oficina cerró'] },
        { t: 'mc', q: '¿Qué tiene la oficina, según Nico?', o: ['Las ideas que salen charlando', 'Mejores computadoras', 'Un horario más corto'] },
        { t: 'mc', q: '¿A qué conclusión llegan?', o: ['Que hace falta un equilibrio', 'Que hay que volver todos los días', 'Que el teletrabajo no funciona'] }
      ]
    },
    culture: { t: 'Buenos Aires, hoofdstad van het gesprek', html: `<p>☕ In Buenos Aires is het café een verlengstuk van de huiskamer. De stad heeft tientallen beschermde <b>cafés notables</b>; het oudste, het Tortoni, bestaat sinds 1858. Je bestelt een <b>cortado</b> met <b>medialunas</b> en niemand jaagt je weg, ook niet na twee uur.</p>
<p>🗣️ <b>Discutir</b> is er bijna een sport: over voetbal, politiek, de beste pizza. Het hoort bij de <b>sobremesa</b>, het lange natafelen. Een stevig debat is geen ruzie, en het eindigt vaak met «¿otro café?».</p>
<p>🚇 De <b>subte</b> van Buenos Aires (1913) is de oudste metro van Latijns-Amerika. De inwoners heten <b>porteños</b>, mensen van de haven.</p>
<p>💬 Je hoort het <b>voseo</b> uit B2 · 3 terug: <i>vos seguís, te sentís, ¡pará!</i> Typische woorden: <b>che</b> (hé, zeg), <b>tal cual</b> (precies), <b>bancar</b> (verdragen, maar ook steunen: <i>yo te banco</i> = ik sta achter je) en <b>un garrón</b> (balen).</p>` },
    ex: [
      { t: 'cloze', s: 'No es que no me ___ la oficina, es que está muy lejos.', h: 'gustar', a: ['guste'], nl: 'Het is niet dat ik het kantoor niet leuk vind, het is alleen erg ver.', x: 'No es que + subjuntivo.', tag: 'debate' },
      { t: 'cloze', s: 'No es que sea caro, es que no lo ___.', h: 'necesitar (yo)', a: ['necesito'], nl: 'Het is niet dat het duur is, ik heb het gewoon niet nodig.', x: 'Na es que (de echte reden): indicativo.', tag: 'debate' },
      { t: 'cloze', s: 'Puede que (tú) ___ razón, pero yo lo veo distinto.', h: 'tener', a: ['tengas'], nl: 'Je kunt gelijk hebben, maar ik zie het anders.', tag: 'debate' },
      { t: 'cloze', s: 'El hecho de que ___ más cómodo no significa que sea mejor.', h: 'ser', a: ['sea'], nl: 'Het feit dat het comfortabeler is, betekent niet dat het beter is.', x: 'El hecho de que + subjuntivo.', tag: 'debate' },
      { t: 'cloze', s: 'No digo que ___ que volver todos los días.', h: 'haber', a: ['haya'], nl: 'Ik zeg niet dat je elke dag terug moet.', tag: 'debate' },
      { t: 'cloze', s: 'Si bien en casa me ___ mejor, extraño a mis compañeros.', a: ['concentro'], o: ['concentro', 'concentre', 'concentrara'], nl: 'Hoewel ik me thuis beter concentreer, mis ik mijn collega’s.', x: 'Si bien + indicativo.', uitz: '<b>Si bien</b> betekent «hoewel», maar krijgt altijd de <b>indicativo</b>. <b>Waarom?</b> Je erkent ermee een vaststaand feit. Bij <i>aunque</i> kun je kiezen, bij <i>si bien</i> niet.', tag: 'debate' },
      { t: 'cloze', s: 'No trabajo en la oficina, ___ en casa.', a: ['sino'], o: ['sino', 'pero', 'aunque'], nl: 'Ik werk niet op kantoor, maar thuis.', x: 'Niet A maar B: sino.', uitz: 'Na een ontkenning is «maar» <b>sino</b> als je iets vervangt: <i>no en la oficina, sino en casa</i>. <b>Waarom?</b> <i>Pero</i> voegt iets toe, <i>sino</i> verbetert: niet A, maar B.', tag: 'connectors' },
      { t: 'cloze', s: 'Por un lado extraño la oficina; ___, me ahorro el viaje.', a: ['por otro'], o: ['por otro', 'es decir', 'de hecho'], nl: 'Aan de ene kant mis ik het kantoor; aan de andere kant bespaar ik me de reis.', tag: 'connectors' },
      { t: 'cloze', s: 'Yo prefiero la ciudad. Mi hermano, ___, vive feliz en el campo.', a: ['en cambio'], o: ['en cambio', 'o sea', 'por lo tanto'], nl: 'Ik heb liever de stad. Mijn broer daarentegen woont gelukkig op het platteland.', tag: 'connectors' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['No es que no quiera, es que no puedo.', 'No es que no quiero, es que no pueda.', 'No es que no quiero, es que no puedo.'], tag: 'debate' },
      { t: 'mc', q: 'Waarmee geef je iemand deels gelijk?', o: ['Puede que tengas razón, pero…', 'De ninguna manera.', 'O sea, no.'], tag: 'debate' },
      { t: 'mc', q: '«De hecho» betekent:', o: ['sterker nog, in feite', 'daarentegen', 'tenzij'], tag: 'connectors' },
      { t: 'mc', q: 'Welk woord sluit een betoog af?', o: ['al fin y al cabo', 'por un lado', 'si bien'], tag: 'connectors' },
      { t: 'mc', q: 'Een Argentijn zegt «Yo te banco». Wat bedoelt hij?', o: ['Ik sta achter je.', 'Ik betaal voor je.', 'Ik wacht op je bij de bank.'], tag: 'vocab' },
      { t: 'order', s: 'Puede que tengas razón, pero no estoy de acuerdo.', nl: 'Je kunt gelijk hebben, maar ik ben het er niet mee eens.', tag: 'debate' },
      { t: 'tr', nl: 'Het is niet dat ik niet wil, ik kan gewoon niet.', a: ['No es que no quiera, es que no puedo.', 'No es que no quiera, sino que no puedo.', 'No es que no quiera, simplemente no puedo.'], tag: 'debate' },
      { t: 'tr', nl: 'Ik zeg niet dat het makkelijk is.', a: ['No digo que sea fácil.', 'Yo no digo que sea fácil.'], tag: 'debate' },
      { t: 'match', p: [['en cambio', 'daarentegen'], ['de hecho', 'sterker nog'], ['es decir', 'dat wil zeggen'], ['no obstante', 'desondanks'], ['al fin y al cabo', 'per slot van rekening']], tag: 'vocab' }
    ],
    say: [['No es que no quiera, es que no puedo.', 'Het is niet dat ik niet wil, ik kan gewoon niet.'], ['Puede que tengas razón, pero yo lo veo distinto.', 'Je kunt gelijk hebben, maar ik zie het anders.'], ['Por un lado me gusta; por otro, me cansa.', 'Aan de ene kant vind ik het leuk; aan de andere kant word ik er moe van.'], ['Al fin y al cabo, pensamos casi lo mismo.', 'Uiteindelijk denken we bijna hetzelfde.']],
    task: { nl: 'Schrijf je mening over thuiswerken of op kantoor werken (7 tot 9 zinnen). Noem beide kanten (por un lado… por otro…), geef de andere kant deels gelijk (puede que…, si bien…, es cierto que…), neem een misverstand weg met no es que… en sluit af met al fin y al cabo of en resumen.', model: 'Para mí, lo ideal es combinar la casa y la oficina. Por un lado, en casa me concentro mejor y me ahorro el viaje; por otro, extraño hablar con mis compañeros. No es que no me guste la oficina, es que no la necesito todos los días. Es cierto que las reuniones en persona son más fáciles. Sin embargo, muchas se pueden hacer por video. Puede que algunas personas rindan más en la oficina, y lo entiendo. De hecho, mi hermana no soporta trabajar en casa. Al fin y al cabo, cada persona debería poder elegir.' },
    scenario: { nl: 'In een café in Buenos Aires wil Nico met je in debat. Hij kiest een stelling en verdedigt de andere kant dan jij.', role: 'Eres Nico, un porteño de 35 años, diseñador, que adora debatir en el café. Eres simpático, irónico y nunca das la razón del todo. Propones un tema ligero (trabajar en casa o en la oficina, ciudad o campo, libro o película; nunca política ni religión) y defiendes la posición contraria a la del estudiante. Usas el voseo («vos pensás», «mirá», «¡pará!») y expresiones como «che», «tal cual», «un garrón» y «te banco». Usas y provocas estructuras para matizar: «no es que…, es que…», «puede que tengas razón, pero…», «el hecho de que…», «por un lado… por otro…», «al fin y al cabo».', goal: 'Verdedig je standpunt met twee argumenten, geef Nico één keer deels gelijk en gebruik no es que…' },
    reading: {
      t: '¿Casa u oficina? Dos miradas', type: 'Column',
      p: [
        ['Desde hace unos años, millones de personas trabajan desde casa. Para algunos es un sueño; para otros, una forma moderna de aislamiento. Como casi siempre, la verdad está en el medio.',
          'Sinds een paar jaar werken miljoenen mensen vanuit huis. Voor sommigen is het een droom; voor anderen een moderne vorm van isolement. Zoals bijna altijd ligt de waarheid in het midden.'],
        ['Por un lado, quienes defienden el teletrabajo sostienen que rinden más y que recuperan tiempo para su familia. De hecho, en una ciudad como Buenos Aires, mucha gente pierde dos horas por día en el transporte.',
          'Aan de ene kant stellen de voorstanders van thuiswerken dat ze meer presteren en tijd voor hun gezin terugwinnen. Sterker nog, in een stad als Buenos Aires verliezen veel mensen twee uur per dag aan vervoer.'],
        ['Por otro lado, no es que la oficina sea solo un lugar para trabajar: es también donde se hacen amigos y nacen las ideas. Si bien una videollamada resuelve muchas cosas, no reemplaza una charla con un café en la mano.',
          'Aan de andere kant is het kantoor niet alleen een plek om te werken: het is ook waar je vrienden maakt en waar ideeën ontstaan. Hoewel een videogesprek veel oplost, vervangt het geen praatje met een kop koffie in de hand.'],
        ['El hecho de que un sistema funcione para una persona no significa que funcione para todas. Al fin y al cabo, lo más razonable parece ser un equilibrio: algunos días en casa y otros en la oficina, según el trabajo y la persona.',
          'Het feit dat een systeem voor één persoon werkt, betekent niet dat het voor iedereen werkt. Uiteindelijk lijkt een evenwicht het redelijkst: sommige dagen thuis en andere op kantoor, afhankelijk van het werk en de persoon.']
      ],
      gl: [['la mirada', 'de blik, de kijk'], ['recuperar', 'terugwinnen'], ['resolver (ue)', 'oplossen'], ['reemplazar', 'vervangen'], ['razonable', 'redelijk']],
      q: [
        { t: 'mc', q: '¿Qué sostienen los que defienden el teletrabajo?', o: ['Que rinden más y recuperan tiempo', 'Que hacen más amigos', 'Que la oficina es peligrosa'] },
        { t: 'mc', q: '¿Qué es la oficina, además de un lugar para trabajar?', o: ['Un lugar donde nacen ideas y amistades', 'Un lugar para descansar', 'Una forma de aislamiento'] },
        { t: 'mc', q: '¿Qué dice el texto de las videollamadas?', o: ['Resuelven mucho, pero no reemplazan una charla', 'Son mejores que una reunión', 'No sirven para nada'] },
        { t: 'mc', q: '¿Cuál es la conclusión?', o: ['Lo más razonable es un equilibrio', 'Todos deberían trabajar en casa', 'Hay que volver a la oficina'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 17 ───────────────────────── */
  U({
    id: 'b2-17', level: 'B2', icon: '🏄', title: 'Sueño con volver', nl: 'Werkwoorden met een vast voorzetsel: soñar con, depender de, fijarse en, atreverse a',
    goals: ['De meest gebruikte werkwoorden met hun vaste voorzetsel kennen, juist waar het Nederlands een ander voorzetsel heeft', 'Vragen en bijzinnen maken waarin het voorzetsel meeverhuist: ¿de qué depende?, me di cuenta de que…', 'Het verschil horen tussen pensar en / pensar de, tratar de / tratarse de en quedarse con / quedarse sin'],
    vocab: [
      ['soñar con (ue)', 'dromen van'], ['contar con (ue)', 'rekenen op'], ['depender de', 'afhangen van'], ['fijarse en', 'letten op'], ['confiar en', 'vertrouwen op'],
      ['insistir en', 'aandringen op, blijven hameren op'], ['darse cuenta de', 'beseffen, merken'], ['enamorarse de', 'verliefd worden op'], ['arrepentirse de (ie)', 'spijt hebben van'], ['quejarse de', 'klagen over'],
      ['encargarse de', 'zorgen voor, op zich nemen'], ['burlarse de', 'uitlachen, de spot drijven met'], ['atreverse a', 'durven'], ['acostumbrarse a', 'wennen aan'], ['negarse a (ie)', 'weigeren'],
      ['tardar en', 'er (lang) over doen om'], ['tratar de', 'proberen te'], ['tratarse de', 'gaan over'], ['dar con', 'vinden, stuiten op'], ['quedarse sin', 'zonder komen te zitten'],
      ['la ola', 'de golf'], ['la tabla', 'de (surf)plank'], ['remar', 'peddelen, roeien'], ['la marea', 'het getij'], ['la corriente', 'de stroming'],
      ['ponerse de pie', 'gaan staan'], ['la pupusa', 'de gevulde maïstortilla'], ['el curtido', 'de zure koolsalade bij pupusas', 'SV'], ['la pupusería', 'het pupusa-eethuis', 'SV'],
      ['chivo', 'tof, gaaf', 'SV (informeel)'], ['el chero / la chera', 'de vriend / de vriendin', 'SV (informeel)'], ['el cipote / la cipota', 'het jongetje / het meisje', 'SV · HN (informeel)'],
      ['¡cabal!', 'precies!, klopt!', 'SV · GT · HN'], ['¡vaya pues!', 'oké dan, tot zo', 'SV (informeel)'], ['el / la principiante', 'de beginner']
    ],
    grammar: [
      { t: 'Werkwoord + vast voorzetsel', es: 'Verbos con preposición',
        html: `<p>Veel Spaanse werkwoorden hebben een <b>vast voorzetsel</b>. Je leert ze het best als één geheel, want het Nederlands kiest vaak een ander voorzetsel:</p>
<p>📌 <b>con</b>: <i>soñar <b>con</b></i> (dromen <b>van</b>), <i>contar <b>con</b></i> (rekenen <b>op</b>), <i>casarse <b>con</b></i> (trouwen <b>met</b>).</p>
<p>📌 <b>de</b>: <i>depender <b>de</b></i> (afhangen van), <i>enamorarse <b>de</b></i> (verliefd worden <b>op</b>), <i>acordarse <b>de</b></i>, <i>darse cuenta <b>de</b></i>, <i>quejarse <b>de</b></i> (klagen <b>over</b>), <i>arrepentirse <b>de</b></i>, <i>encargarse <b>de</b></i>.</p>
<p>📌 <b>en</b>: <i>pensar <b>en</b></i> (denken <b>aan</b>), <i>fijarse <b>en</b></i> (letten <b>op</b>), <i>confiar <b>en</b></i> (vertrouwen <b>op</b>), <i>insistir <b>en</b></i>, <i>tardar <b>en</b></i>.</p>
<p>📌 <b>a</b>: <i>atreverse <b>a</b></i> (durven), <i>acostumbrarse <b>a</b></i> (wennen aan), <i>negarse <b>a</b></i> (weigeren), <i>aprender <b>a</b></i>.</p>
<p>Na het voorzetsel komt een zelfstandig naamwoord of een <b>infinitivo</b>: <i>Sueño con <b>vivir</b> frente al mar.</i> · <i>No me atrevo a <b>meterme</b>.</i></p>
<p>⚠️ <b>Uitzondering:</b> het Nederlandse voorzetsel is geen houvast. Je droomt <b>van</b> iets, maar in het Spaans <i>sueñas <b>con</b> algo</i>; je wordt verliefd <b>op</b> iemand, maar <i>te enamoras <b>de</b> alguien</i>. <b>Waarom?</b> Voorzetsels bij werkwoorden zijn in elke taal historisch gegroeid en laten zich niet woord voor woord vertalen.</p>`,
        table: [['Spaans', 'Nederlands'], ['soñar con', 'dromen van'], ['pensar en', 'denken aan'], ['enamorarse de', 'verliefd worden op'], ['fijarse en', 'letten op'], ['contar con', 'rekenen op'], ['quejarse de', 'klagen over']],
        ex: [['Hoy todo depende de la marea.', 'Vandaag hangt alles af van het getij.'], ['Me enamoré del surf a los doce años.', 'Ik werd op mijn twaalfde verliefd op het surfen.']],
        sum: 'Soñar con, contar con · depender de, enamorarse de, darse cuenta de · pensar en, fijarse en, confiar en · atreverse a, acostumbrarse a.' },
      { t: 'Het voorzetsel verhuist mee', es: 'La preposición en preguntas y con «que»',
        html: `<p>Het voorzetsel blijft altijd bij zijn werkwoord horen, ook als de zin anders loopt:</p>
<p>📌 In een <b>vraag</b> staat het helemaal <b>vooraan</b>, vóór het vraagwoord: <i><b>¿Con qué</b> sueñas?</i> · <i><b>¿De qué</b> depende?</i> · <i><b>¿En qué</b> piensas?</i> · <i><b>¿De quién</b> te enamoraste?</i> In het Nederlands mag het achteraan («Waar droom je <b>van</b>?»), in het Spaans nooit.</p>
<p>📌 Vóór een bijzin met <b>que</b> blijft het ook staan: <i>Me di cuenta <b>de que</b> las olas vienen de tres en tres.</i> · <i>Me acuerdo <b>de que</b> hacía frío.</i> · <i>Insistió <b>en que</b> lo intentara.</i></p>
<p>⚠️ <b>Uitzondering:</b> bij <i>pensar, creer, decir, opinar</i> en <i>parecer</i> komt géén <i>de</i> voor <i>que</i>: <i>Pienso <b>que</b> es difícil</i>, niet <s>pienso de que</s>. <b>Waarom?</b> Deze werkwoorden hebben geen vast voorzetsel. Test het met <i>eso</i>: je zegt <i>pienso <b>eso</b></i> (dus <i>pienso que</i>), maar <i>me acuerdo <b>de eso</b></i> (dus <i>me acuerdo de que</i>).</p>`,
        table: [['met eso', 'met que'], ['Me doy cuenta de eso.', 'Me doy cuenta de que es tarde.'], ['Estoy seguro de eso.', 'Estoy seguro de que viene.'], ['Pienso eso.', 'Pienso que es tarde.'], ['Dijo eso.', 'Dijo que venía.']],
        ex: [['¿En qué tengo que pensar cuando viene la ola?', 'Waar moet ik aan denken als de golf komt?'], ['¿Te das cuenta de que vienen de tres en tres?', 'Merk je dat ze met drie tegelijk komen?']],
        sum: 'La preposición va delante: ¿Con qué sueñas? ¿De qué depende? Darse cuenta de que, acordarse de que; pero pensar que, creer que.' },
      { t: 'Ander voorzetsel, andere betekenis', es: 'Cambios de significado',
        html: `<p>Bij sommige werkwoorden verandert de <b>betekenis</b> met het voorzetsel:</p>
<p>📌 <b>pensar en</b> = denken aan · <b>pensar de</b> = vinden van (je mening) · <b>pensar</b> + infinitivo = van plan zijn: <i>Pienso <b>en</b> ti.</i> · <i>¿Qué piensas <b>de</b> la película?</i> · <i>Pienso <b>volver</b>.</i></p>
<p>📌 <b>tratar de</b> = proberen · <b>tratarse de</b> = gaan over · <b>tratar con</b> = omgaan met: <i><b>Trata de</b> remar fuerte.</i> · <i>¿De qué <b>se trata</b>?</i></p>
<p>📌 <b>quedarse con</b> = houden, nemen · <b>quedarse sin</b> = zonder komen te zitten · <b>quedar en</b> = afspreken om: <i>Me quedo <b>con</b> esta tabla.</i> · <i>Me quedé <b>sin</b> batería.</i> · <i>Quedamos <b>en</b> vernos a las seis.</i></p>
<p>📌 <b>contar</b> = tellen, vertellen · <b>contar con</b> = rekenen op · <b>dar con</b> = vinden · <b>dar a</b> = uitkijken op: <i>La ventana <b>da al</b> mar.</i></p>
<p>📌 <b>acabar de</b> = zojuist hebben gedaan · <b>acabar con</b> = een einde maken aan: <i><b>Acabo de</b> llegar.</i> · <i>La lluvia <b>acabó con</b> la fiesta.</i></p>`,
        table: [['werkwoord', 'betekenis', 'voorbeeld'], ['pensar en', 'denken aan', 'Pienso en mi familia.'], ['pensar de', 'vinden van', '¿Qué piensas de esto?'], ['tratar de', 'proberen', 'Trato de dormir.'], ['tratarse de', 'gaan over', 'Se trata de un error.'], ['quedarse sin', 'zonder komen te zitten', 'Me quedé sin dinero.']],
        ex: [['Casi me quedo sin tiempo para surfear.', 'Ik houd bijna geen tijd meer over om te surfen.'], ['¿De qué se trata la película?', 'Waar gaat de film over?']],
        sum: 'Pensar en ≠ pensar de. Tratar de ≠ tratarse de. Quedarse con ≠ quedarse sin. Contar ≠ contar con.' }
    ],
    verbs: ['soñar', 'contar', 'depender', 'pensar', 'acordarse', 'quejarse', 'atreverse', 'tardar', 'tratar', 'quedarse'], tenses: ['pres', 'pret'],
    dialogue: {
      t: 'Clase de surf en El Tunco', place: 'Playa El Tunco 🇸🇻',
      lines: [
        ['Xiomara', '¡Buenas, Mark! ¿Listo para la clase? Hoy todo depende de la marea.', 'Hoi Mark! Klaar voor de les? Vandaag hangt alles af van het getij.'],
        ['Mark', 'Listo, aunque no me atrevo a meterme muy adentro. Todavía no confío en la tabla.', 'Klaar, al durf ik niet zo ver het water in. Ik vertrouw de plank nog niet.'],
        ['Xiomara', 'Tranquilo, vos contá conmigo. Fijate en las olas: ¿te das cuenta de que vienen de tres en tres?', 'Rustig maar, reken op mij. Let op de golven: merk je dat ze met drie tegelijk komen?'],
        ['Mark', 'Ahora que lo dices, sí. ¿Y en qué tengo que pensar cuando viene la ola?', 'Nu je het zegt, ja. En waar moet ik aan denken als de golf komt?'],
        ['Xiomara', 'En nada, ja, ja. Tratá de remar fuerte y acordate de mirar hacia la playa.', 'Nergens aan, haha. Probeer hard te peddelen en denk eraan naar het strand te kijken.'],
        ['Mark', 'Me acuerdo de la última vez: tardé una hora en ponerme de pie.', 'Ik herinner me de vorige keer: ik deed er een uur over om te gaan staan.'],
        ['Xiomara', 'Es normal. Yo me enamoré del surf a los doce años y al principio me quejaba de todo.', 'Dat is normaal. Ik werd op mijn twaalfde verliefd op het surfen en in het begin klaagde ik over alles.'],
        ['Mark', '¿Y nunca te arrepentiste de dejar la ciudad?', 'En heb je er nooit spijt van gehad dat je de stad verliet?'],
        ['Xiomara', 'Jamás. Soñaba con vivir frente al mar y aquí estoy. Eso sí: me encargo de la escuela y casi me quedo sin tiempo para surfear.', 'Nooit. Ik droomde ervan aan zee te wonen en hier ben ik. Wel is het zo: ik run de school en houd bijna geen tijd over om te surfen.'],
        ['Mark', 'Pues yo sueño con una pupusa después de la clase.', 'Nou, ik droom van een pupusa na de les.'],
        ['Xiomara', '¡Cabal! De eso también me encargo yo. Conozco una pupusería que queda a dos cuadras.', 'Precies! Daar zorg ik ook voor. Ik ken een pupusería twee straten verderop.']
      ],
      q: [
        { t: 'mc', q: '¿De qué depende la clase de hoy?', o: ['De la marea', 'De la tabla', 'Del precio'] },
        { t: 'mc', q: '¿Cuánto tardó Mark en ponerse de pie la última vez?', o: ['Una hora', 'Doce años', 'Tres olas'] },
        { t: 'mc', q: '¿Con qué soñaba Xiomara?', o: ['Con vivir frente al mar', 'Con tener una pupusería', 'Con volver a la ciudad'] }
      ]
    },
    culture: { t: 'El Salvador, klein land met grote golven', html: `<p>🌊 El Salvador is het kleinste land van het Amerikaanse vasteland; de dichter Gabriela Mistral noemde het liefkozend <b>el Pulgarcito de América</b>, het Klein Duimpje. De Pacifische kust staat bekend om lange, regelmatige golven. <b>El Tunco</b> dankt zijn naam aan een rots in zee die op een varken lijkt: <i>tunco</i> is het Salvadoraanse woord voor varken.</p>
<p>🫓 Het nationale gerecht is de <b>pupusa</b>: een dikke maïstortilla, gevuld met kaas, bonen of <i>chicharrón</i>, gebakken op een hete plaat. Je eet hem met je handen, met <b>curtido</b> (zure koolsalade) en tomatensaus. De tweede zondag van november is het officieel <i>Día Nacional de la Pupusa</i>.</p>
<p>🐦 De nationale vogel is de <b>torogoz</b>, een turquoise vogel met een staart als twee kleine racketjes.</p>
<p>🗣️ Salvadoranen zeggen onder vrienden <b>vos</b> (<i>contá conmigo, fijate</i>) en tegen ouderen <i>usted</i>. Iets leuks is <b>chivo</b>, een vriend is een <b>chero</b>, een kind een <b>cipote</b>, en als je gelijk hebt hoor je <b>¡cabal!</b></p>` },
    ex: [
      { t: 'cloze', s: 'Sueño ___ vivir frente al mar.', a: ['con'], o: ['con', 'de', 'en'], nl: 'Ik droom ervan aan zee te wonen.', x: 'Soñar con.', uitz: 'In het Nederlands droom je <b>van</b> iets, in het Spaans <i>sueñas <b>con</b> algo</i>. <b>Waarom?</b> Vaste voorzetsels bij werkwoorden zijn in elke taal anders gegroeid; leer ze als één geheel met het werkwoord.', tag: 'verb-prep' },
      { t: 'cloze', s: 'Hoy todo depende ___ la marea.', a: ['de'], o: ['de', 'en', 'a'], nl: 'Vandaag hangt alles af van het getij.', tag: 'verb-prep' },
      { t: 'cloze', s: 'Fíjate ___ las olas antes de entrar.', a: ['en'], o: ['en', 'a', 'de'], nl: 'Let op de golven voordat je erin gaat.', x: 'Fijarse en.', tag: 'verb-prep' },
      { t: 'cloze', s: 'Me enamoré ___ surf a los doce años.', a: ['del'], o: ['del', 'en el', 'con el'], nl: 'Ik werd op mijn twaalfde verliefd op het surfen.', x: 'Enamorarse de (de + el = del).', tag: 'verb-prep' },
      { t: 'cloze', s: 'No me atrevo ___ meterme al agua.', a: ['a'], o: ['a', 'de', 'en'], nl: 'Ik durf het water niet in.', tag: 'verb-prep' },
      { t: 'cloze', s: 'Tardé una hora ___ ponerme de pie.', a: ['en'], o: ['en', 'a', 'de'], nl: 'Ik deed er een uur over om te gaan staan.', x: 'Tardar en + infinitivo.', tag: 'verb-prep' },
      { t: 'cloze', s: 'Me di cuenta ___ había olvidado la tabla.', a: ['de que'], o: ['de que', 'que', 'en que'], nl: 'Ik merkte dat ik de plank vergeten was.', x: 'Darse cuenta de → de que.', tag: 'verb-prep' },
      { t: 'cloze', s: 'Pienso ___ el surf es más difícil de lo que parece.', a: ['que'], o: ['que', 'de que', 'en que'], nl: 'Ik denk dat surfen moeilijker is dan het lijkt.', x: 'Pensar que, zonder de.', uitz: 'Bij <i>pensar, creer, decir</i> en <i>opinar</i> komt géén <i>de</i> voor <i>que</i>. <b>Waarom?</b> Ze hebben geen vast voorzetsel. Test met <i>eso</i>: <i>pienso eso</i> → <i>pienso que</i>; <i>me acuerdo de eso</i> → <i>me acuerdo de que</i>.', tag: 'verb-prep' },
      { t: 'cloze', s: '¿___ qué sueñas?', a: ['Con'], o: ['Con', 'De', 'En'], nl: 'Waar droom je van?', x: 'Het voorzetsel staat vooraan.', tag: 'verb-prep' },
      { t: 'mc', q: 'Hoe vraag je «Waar hangt het van af?»', o: ['¿De qué depende?', '¿Qué depende de?', '¿Qué depende?'], x: 'In het Spaans staat het voorzetsel nooit achteraan.', tag: 'verb-prep' },
      { t: 'mc', q: '«Pienso en ti.» betekent:', o: ['Ik denk aan je.', 'Ik vind iets van je.', 'Ik ben van plan je te bellen.'], tag: 'verb-prep' },
      { t: 'mc', q: '«¿Qué piensas de la película?» vraagt naar:', o: ['je mening', 'je plannen', 'je herinnering'], tag: 'verb-prep' },
      { t: 'mc', q: '«Me quedé sin batería.» betekent:', o: ['Mijn batterij is leeg geraakt.', 'Ik heb de batterij gehouden.', 'Ik ben bij de batterij gebleven.'], tag: 'verb-prep' },
      { t: 'mc', q: 'Wat zegt een Salvadoraan met «¡Cabal!»?', o: ['Precies!', 'Rustig aan!', 'Kom op!'], tag: 'vocab' },
      { t: 'order', s: 'No me arrepiento de haber dejado la ciudad.', nl: 'Ik heb er geen spijt van dat ik de stad verlaten heb.', tag: 'verb-prep' },
      { t: 'tr', nl: 'Ik droom ervan om te reizen.', a: ['Sueño con viajar.'], tag: 'verb-prep' },
      { t: 'tr', nl: 'Je kunt op mij rekenen.', a: ['Puedes contar conmigo.', 'Cuenta conmigo.', 'Podés contar conmigo.', 'Puede contar conmigo.', 'Contá conmigo.', 'Cuente conmigo.'], tag: 'verb-prep' },
      { t: 'match', p: [['soñar con', 'dromen van'], ['confiar en', 'vertrouwen op'], ['darse cuenta de', 'beseffen'], ['arrepentirse de', 'spijt hebben van'], ['atreverse a', 'durven']], tag: 'vocab' }
    ],
    say: [['Sueño con vivir frente al mar.', 'Ik droom ervan aan zee te wonen.'], ['Todo depende del tiempo.', 'Alles hangt af van het weer.'], ['Me di cuenta de que era tarde.', 'Ik merkte dat het laat was.'], ['¿En qué piensas?', 'Waar denk je aan?']],
    task: { nl: 'Schrijf 6 tot 8 zinnen over iets wat je hebt leren doen (een sport, een instrument, een taal). Gebruik minstens zes werkwoorden met een vast voorzetsel: soñar con, atreverse a, tardar en, quejarse de, darse cuenta de, acostumbrarse a, arrepentirse de, depender de…', model: 'De niño soñaba con tocar la guitarra, pero no me atrevía a pedir una. A los quince años mi abuelo se dio cuenta de que siempre miraba la suya y me la regaló. Tardé meses en aprender mi primera canción y me quejaba de que me dolían los dedos. Poco a poco me acostumbré a practicar todos los días. Hoy sé que todo depende de la paciencia. No me arrepiento de haber insistido en seguir. Y cuento con mi abuelo: sigue siendo mi mejor público.' },
    scenario: { nl: 'Xiomara geeft je surfles in El Tunco. Ze wil weten waar je van droomt, wat je durft en waar je tegenop ziet.', role: 'Eres Xiomara, una salvadoreña de 28 años, instructora de surf en la playa El Tunco. Eres alegre, directa y muy paciente con los principiantes. Le das una clase al estudiante y conversas sobre sus sueños y miedos. Usas muchos verbos con preposición («depender de», «fijarse en», «atreverse a», «soñar con», «darse cuenta de», «contar con») y haces preguntas con la preposición delante («¿Con qué soñás?», «¿De qué te quejás?», «¿En qué pensás?»). Usas el voseo salvadoreño («contá conmigo», «fijate») y palabras como «chivo», «chero» y «¡cabal!». Si el estudiante se equivoca de preposición, repites la frase correcta con naturalidad.', goal: 'Vertel waar je van droomt, wat je niet durft en waar je op rekent, met de juiste voorzetsels.' },
    reading: {
      t: 'Lo que aprendí del mar', type: 'Blog',
      p: [
        ['Crecí en San Salvador, lejos de las olas. De niña soñaba con ser arquitecta, pero a los doce años mi tío me llevó a El Tunco y me enamoré del mar para siempre.',
          'Ik groeide op in San Salvador, ver van de golven. Als kind droomde ik ervan architect te worden, maar toen ik twaalf was nam mijn oom me mee naar El Tunco en werd ik voorgoed verliefd op de zee.'],
        ['Al principio me quejaba de todo: del agua fría de la mañana, de la tabla, que pesaba más que yo. Tardé meses en ponerme de pie. Mi tío insistía en que no me rindiera, y poco a poco me acostumbré a levantarme a las cinco.',
          'In het begin klaagde ik over alles: over het koude water in de ochtend, over de plank, die zwaarder was dan ik. Ik deed er maanden over om te gaan staan. Mijn oom bleef erop hameren dat ik niet moest opgeven, en beetje bij beetje wende ik eraan om vijf uur op te staan.'],
        ['Con el tiempo me di cuenta de que el surf no depende de la fuerza, sino de la paciencia. Hay que fijarse en el mar, confiar en la tabla y atreverse a intentarlo otra vez. El mar no se burla de nadie, pero tampoco regala nada.',
          'Na verloop van tijd besefte ik dat surfen niet afhangt van kracht, maar van geduld. Je moet op de zee letten, op de plank vertrouwen en het opnieuw durven proberen. De zee lacht niemand uit, maar geeft ook niets cadeau.'],
        ['Hoy me encargo de una pequeña escuela de surf. No me arrepiento de haber dejado la ciudad. Cuando una alumna se pone de pie por primera vez, me acuerdo de aquella niña que se quejaba de todo, y pienso que valió la pena.',
          'Nu run ik een kleine surfschool. Ik heb er geen spijt van dat ik de stad verlaten heb. Als een leerling voor het eerst gaat staan, denk ik terug aan dat meisje dat over alles klaagde, en dan denk ik dat het de moeite waard was.']
      ],
      gl: [['crecer', 'opgroeien'], ['pesar', 'wegen'], ['rendirse (i)', 'opgeven'], ['la fuerza', 'de kracht'], ['valer la pena', 'de moeite waard zijn']],
      q: [
        { t: 'mc', q: '¿Con qué soñaba Xiomara de niña?', o: ['Con ser arquitecta', 'Con tener una escuela de surf', 'Con vivir en San Salvador'] },
        { t: 'mc', q: '¿De qué se quejaba al principio?', o: ['Del agua fría y de la tabla', 'De su tío', 'De la escuela'] },
        { t: 'mc', q: 'Según ella, ¿de qué depende el surf?', o: ['De la paciencia', 'De la fuerza', 'De la tabla'] },
        { t: 'mc', q: '¿Se arrepiente de haber dejado la ciudad?', o: ['No, piensa que valió la pena', 'Sí, extraña San Salvador', 'A veces, cuando hace frío'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 18 ───────────────────────── */
  U({
    id: 'b2-18', level: 'B2', icon: '☕', title: '¿Le sirvo un cafecito?', nl: 'Verkleinen, verzachten en versterken: -ito, -ico, -ísimo, -azo en -ote',
    goals: ['Verkleinwoorden maken en begrijpen waarom Latijns-Amerikanen ze zo graag gebruiken: cafecito, ahorita, cerquita', 'De Costa Ricaanse en Caribische vorm -ico herkennen: momentico, chiquitico', 'Iets sterker maken met -ísimo, -azo en -ote: riquísimo, golazo, grandote'],
    vocab: [
      ['el cafecito', 'het kopje koffie, het koffietje'], ['ahorita', 'nu meteen; zo meteen', 'LatAm: de betekenis verschilt per land'], ['un ratito', 'een poosje'], ['un momentico', 'een momentje', 'CR · CO · VE · CU'], ['chiquitico', 'piepklein', 'CR · CO · VE · CU'],
      ['cerquita', 'heel dichtbij'], ['despacito', 'heel rustig, langzaam'], ['tempranito', 'lekker vroeg'], ['igualito', 'precies hetzelfde'], ['un chorrito', 'een scheutje'],
      ['un pedacito', 'een stukje'], ['el favorcito', 'de kleine gunst'], ['riquísimo', 'heerlijk, superlekker'], ['durísimo', 'keihard, loodzwaar'], ['carísimo', 'peperduur'],
      ['larguísimo', 'ellenlang'], ['grandote / grandota', 'heel groot, een joekel'], ['el golazo', 'het prachtige doelpunt'], ['el portazo', 'de klap met de deur'], ['el trabajazo', 'de enorme klus'],
      ['comilón / comilona', 'veelvraat, iemand die van eten houdt'], ['el tostado', 'de branding (van koffie)'], ['el grano', 'de korrel, de boon'], ['la cosecha', 'de oogst'], ['el / la recolector/a', 'de plukker'],
      ['maduro', 'rijp'], ['tostar (ue)', 'branden, roosteren'], ['la ladera', 'de helling'], ['la mata', 'de plant, de struik', 'LatAm: in Spanje la planta'], ['el canasto', 'de mand'],
      ['el chorreador', 'het stoffen koffiefilter aan een houten standaard', 'CR'], ['¡upe!', 'volk!, is daar iemand?', 'CR'], ['¡qué chiva!', 'wat gaaf!', 'CR (informeel)'], ['regalar', 'geven, aanreiken', 'CR · CO: ¿me regala un café? = mag ik een koffie?'], ['la soda', 'het eenvoudige eethuisje', 'CR']
    ],
    grammar: [
      { t: 'Verkleinwoorden: -ito, -cito, -ecito', es: 'Los diminutivos',
        html: `<p>In Latijns-Amerika hoor je verkleinwoorden de hele dag. Ze maken iets niet alleen <b>klein</b>, maar vooral <b>lief, gezellig of beleefd</b>: <i>un cafecito</i> is een lekker kopje koffie, <i>un favorcito</i> een gunst die je vriendelijk vraagt.</p>
<p>📌 Eindigt het woord op <b>-o / -a</b>: klinker weg + <b>-ito / -ita</b>: <i>casa → cas<b>ita</b>, rato → rat<b>ito</b>, abuela → abuel<b>ita</b></i>.</p>
<p>📌 Eindigt het op <b>-e, -n of -r</b>: <b>-cito / -cita</b>: <i>café → cafe<b>cito</b>, joven → joven<b>cito</b>, favor → favor<b>cito</b>, amor → amor<b>cito</b></i>.</p>
<p>📌 Korte woorden van één lettergreep krijgen vaak <b>-ecito</b>: <i>flor → flor<b>ecita</b>, sol → sol<b>ecito</b></i>.</p>
<p>📌 De spelling past zich aan om de klank te bewaren: <i>po<b>c</b>o → po<b>qu</b>ito, cer<b>c</b>a → cer<b>qu</b>ita, ami<b>g</b>o → ami<b>gu</b>ito, lápi<b>z</b> → lapi<b>c</b>ito</i>.</p>
<p>📌 Ook bijwoorden doen mee: <i>ahor<b>ita</b>, cerqu<b>ita</b>, despac<b>ito</b>, tempran<b>ito</b>, igual<b>ito</b></i>.</p>
<p>⚠️ <b>Uitzondering:</b> mannelijke woorden op <b>-a</b> houden hun a: <i>el problema → el problem<b>ita</b></i>, <i>el mapa → el map<b>ita</b></i>, <i>el día → el di<b>íta</b></i>. En <i>la mano</i> wordt in Latijns-Amerika <i>la man<b>ito</b></i>. <b>Waarom?</b> Het verkleinwoord bewaart de laatste klinker van het woord, niet het geslacht. Het lidwoord blijft dus gewoon <i>el</i> of <i>la</i>.</p>`,
        table: [['woord', 'verkleinwoord', 'regel'], ['casa', 'casita', '-a → -ita'], ['café', 'cafecito', '-e → -cito'], ['favor', 'favorcito', '-r → -cito'], ['flor', 'florecita', 'kort woord → -ecita'], ['poco', 'poquito', 'c → qu'], ['amigo', 'amiguito', 'g → gu']],
        ex: [['Llegó tempranito. ¿Le sirvo un cafecito?', 'U bent lekker vroeg. Zal ik een kopje koffie voor u inschenken?'], ['Solo un chorrito, gracias.', 'Alleen een scheutje, dank u.']],
        sum: 'Diminutivos: casa → casita, café → cafecito, flor → florecita, poco → poquito. Expresan cariño y cortesía.' },
      { t: '-ico en ahorita: per land anders', es: 'El diminutivo -ico · Ahorita',
        html: `<p>📌 In <b>Costa Rica, Colombia, Venezuela en Cuba</b> wordt <i>-ito</i> na een <b>t</b> vaak <b>-ico</b>: <i>momento → moment<b>ico</b>, gato → gat<b>ico</b>, chiquito → chiquit<b>ico</b>, corto → cort<b>ico</b></i>. Daarom heten Costa Ricanen <b>ticos</b>: ze zeggen zo vaak <i>-tico</i>.</p>
<p>📌 <b>Ahorita</b> is het verkleinwoord van <i>ahora</i>, maar de betekenis verschilt: in Costa Rica en Colombia is het meestal «nu, in deze periode» of «zo meteen», in Mexico «straks» (en dat kan lang duren), in het Caribisch gebied «over een tijdje». Twijfel je, vraag dan: <i>¿Ahorita ahorita, o más tarde?</i></p>
<p>📌 Een verkleinwoord kan dubbel: <i>chiquito → chiquit<b>ito</b></i>, <i>ahorita → ahorit<b>ita</b></i>. Hoe meer lettergrepen, hoe kleiner of hoe eerder.</p>
<p>⚠️ <b>Uitzondering:</b> niet elk woord op <i>-ito</i> of <i>-illo</i> is een verkleinwoord. <i>La mantequilla</i> (boter), <i>el bolsillo</i> (broekzak), <i>la ventanilla</i> (loket) en <i>el bocadillo</i> zijn eigen woorden geworden. <b>Waarom?</b> Ze begonnen ooit als verkleinwoord (<i>bolso → bolsillo</i>), maar kregen een vaste, eigen betekenis.</p>`,
        table: [['standaard', 'Costa Rica, Colombia, Caribisch'], ['un momentito', 'un momentico'], ['el gatito', 'el gatico'], ['chiquitito', 'chiquitico'], ['un ratito', 'un ratico']],
        ex: [['Espéreme un momentico y le enseño los granos.', 'Wacht u een momentje, dan laat ik u de bonen zien.'], ['Lo tostamos en un horno chiquitico.', 'We branden hem in een piepklein oventje.']],
        sum: 'En Costa Rica, Colombia y el Caribe: momentico, chiquitico. «Ahorita» cambia de significado según el país.' },
      { t: 'Versterken: -ísimo, -azo, -ote', es: 'El superlativo y los aumentativos',
        html: `<p>📌 <b>-ísimo / -ísima</b> = «heel erg, super-»: <i>rico → riqu<b>ísimo</b>, duro → dur<b>ísimo</b>, caro → car<b>ísimo</b>, largo → largu<b>ísimo</b></i>. Het richt zich naar het zelfstandig naamwoord: <i>una comida riquísim<b>a</b></i>. Let op de spelling: <i>c → qu, g → gu, z → c</i> (<i>feliz → felicísimo</i>).</p>
<p>📌 <b>-azo</b> maakt iets groot of geweldig: <i>un gol<b>azo</b></i> (wereldgoal), <i>un trabaj<b>azo</b></i> (enorme klus). Het betekent ook «klap met»: <i>un port<b>azo</b></i> (klap met de deur), <i>un cod<b>azo</b></i> (elleboogstoot).</p>
<p>📌 <b>-ote / -ota</b> en <b>-ón / -ona</b> maken groot, soms plagerig: <i>grand<b>ote</b>, amig<b>ote</b>, comil<b>ón</b>, cabez<b>ón</b></i> (koppig).</p>
<p>📌 In de spreektaal versterk je ook met <b>bien</b> (<i>bien rico</i>), <b>súper</b> en in Argentinië <b>re-</b> (<i>re lindo</i>).</p>
<p>⚠️ <b>Uitzondering:</b> bijvoeglijke naamwoorden op <b>-ble</b> krijgen <b>-bilísimo</b>: <i>amable → ama<b>bilísimo</b></i>, niet <s>amablísimo</s>. <b>Waarom?</b> De vorm gaat terug op het Latijnse <i>amabilis</i>. En na <i>-ísimo</i> zet je nooit nog <i>muy</i>: niet <s>muy riquísimo</s>, want <i>-ísimo</i> betekent al «heel erg».</p>`,
        table: [['woord', 'versterkt', 'betekenis'], ['rico', 'riquísimo', 'superlekker'], ['largo', 'larguísimo', 'ellenlang'], ['gol', 'golazo', 'wereldgoal'], ['puerta', 'portazo', 'klap met de deur'], ['grande', 'grandote', 'joekel']],
        ex: [['¡Está riquísimo! ¿Es de aquí?', 'Hij is heerlijk! Komt hij hiervandaan?'], ['Mire ese canasto grandote.', 'Kijk eens naar die joekel van een mand.']],
        sum: 'Superlativo: riquísimo, carísimo, larguísimo. Aumentativos: golazo, portazo, grandote, comilón. Nunca «muy riquísimo».' }
    ],
    verbs: ['servir', 'llegar', 'esperar', 'tomar', 'traer'], tenses: ['pres', 'imper'],
    dialogue: {
      t: 'En la finca de doña Flor', place: 'Valle de Orosi 🇨🇷',
      lines: [
        ['Mark', '¡Upe! ¿Doña Flor?', 'Volk! Doña Flor?'],
        ['Doña Flor', '¡Pase, pase, Mark! Llegó tempranito. ¿Le sirvo un cafecito?', 'Kom binnen, Mark! U bent lekker vroeg. Zal ik een kopje koffie voor u inschenken?'],
        ['Mark', 'Con mucho gusto. Mmm, ¡está riquísimo! ¿Es de aquí?', 'Heel graag. Mmm, hij is heerlijk! Komt hij hiervandaan?'],
        ['Doña Flor', 'De aquí cerquita, de esas matas de la ladera. Lo tostamos nosotros, despacito, en un horno chiquitico.', 'Van hier vlakbij, van die struiken op de helling. We branden hem zelf, heel rustig, in een piepklein oventje.'],
        ['Mark', '¿Y cuándo es la cosecha?', 'En wanneer is de oogst?'],
        ['Doña Flor', 'Ahorita, de noviembre a febrero. Espéreme un momentico y le enseño los granos maduros.', 'Nu, van november tot februari. Wacht u een momentje, dan laat ik u de rijpe bonen zien.'],
        ['Mark', '¡Son rojos, como cerecitas! Yo pensaba que el café era café desde el principio.', 'Ze zijn rood, net kersjes! Ik dacht dat koffie van het begin af aan bruin was.'],
        ['Doña Flor', 'Ja, ja, eso dicen todos. Mire ese canasto grandote: un buen recolector lo llena en una hora.', 'Haha, dat zegt iedereen. Kijk eens naar die joekel van een mand: een goede plukker vult hem in een uur.'],
        ['Mark', '¡Qué trabajazo! Y yo que me quejo de mi escritorio.', 'Wat een klus! En ik maar klagen over mijn bureau.'],
        ['Doña Flor', 'Es durísimo, pero aquí nadie pone mala cara. ¿Le regalo otro poquito?', 'Het is loodzwaar, maar hier trekt niemand een zuur gezicht. Zal ik u nog een beetje geven?'],
        ['Mark', 'Solo un chorrito, gracias. ¡Pura vida, doña Flor!', 'Alleen een scheutje, dank u. Pura vida, doña Flor!']
      ],
      q: [
        { t: 'mc', q: '¿De dónde es el café de doña Flor?', o: ['De las matas de la ladera, cerquita', 'De una tienda de San José', 'De Nicaragua'] },
        { t: 'mc', q: '¿De qué color son los granos maduros?', o: ['Rojos', 'De color café', 'Verdes'] },
        { t: 'mc', q: '¿Qué dice doña Flor del trabajo de los recolectores?', o: ['Que es durísimo', 'Que es muy fácil', 'Que solo dura una hora al día'] }
      ]
    },
    culture: { t: 'Costa Rica: ticos, usted en de gouden korrel', html: `<p>🇨🇷 Costa Ricanen noemen zichzelf <b>ticos</b> en <b>ticas</b>. Die bijnaam komt van hun verkleinwoord: waar anderen <i>momentito</i> zeggen, zeggen zij <i>momentico</i>, en iets heel kleins is <i>chiquitico</i>.</p>
<p>🙋 In Costa Rica zegt bijna iedereen <b>usted</b> tegen iedereen: tegen vrienden, kinderen en zelfs de hond. Dat is niet afstandelijk, maar gewoon en warm. Bij een huis roep je <b>¡upe!</b> in plaats van te kloppen, en op «gracias» antwoord je <b>con mucho gusto</b>, niet <i>de nada</i>.</p>
<p>☕ Koffie heet er <b>el grano de oro</b>, de gouden korrel: het maakte het land in de negentiende eeuw welvarend. Thuis wordt hij gezet met een <b>chorreador</b>, een stoffen zakje aan een houten standaard waar je heet water doorheen giet.</p>
<p>🕊️ Costa Rica schafte in 1948 zijn leger af en stak het geld in scholen en zorg. En <b>pura vida</b> betekent alles tegelijk: hoi, dag, bedankt, het gaat goed, geen zorgen.</p>` },
    ex: [
      { t: 'cloze', s: '¿Le sirvo un ___?', h: 'café → verkleinwoord', a: ['cafecito'], nl: 'Zal ik een kopje koffie voor u inschenken?', x: 'Na -e: -cito.', tag: 'diminutive' },
      { t: 'cloze', s: 'Vivo aquí ___, a dos casas.', h: 'cerca → verkleinwoord', a: ['cerquita'], nl: 'Ik woon hier vlakbij, twee huizen verder.', x: 'c → qu om de k-klank te bewaren.', tag: 'diminutive' },
      { t: 'cloze', s: 'Es mi ___ del colegio.', h: 'amigo → verkleinwoord', a: ['amiguito'], nl: 'Het is mijn vriendje van school.', x: 'g → gu om de g-klank te bewaren.', tag: 'diminutive' },
      { t: 'cloze', s: '¿Me hace un ___, por favor?', h: 'favor → verkleinwoord', a: ['favorcito'], nl: 'Wilt u me een kleine gunst bewijzen, alstublieft?', x: 'Na -r: -cito.', tag: 'diminutive' },
      { t: 'cloze', s: 'Tengo un ___ con el carro.', h: 'problema → verkleinwoord', a: ['problemita'], nl: 'Ik heb een probleempje met de auto.', x: 'El problema → el problemita.', uitz: 'Mannelijke woorden op <b>-a</b> houden hun a: <i>el problema → el problemita</i>, niet <s>problemito</s>. <b>Waarom?</b> Het verkleinwoord bewaart de laatste klinker van het woord, niet het geslacht. Het lidwoord blijft <i>el</i>.', tag: 'diminutive' },
      { t: 'cloze', s: 'El café de doña Flor está ___.', h: 'rico → -ísimo', a: ['riquísimo'], nl: 'De koffie van doña Flor is heerlijk.', x: 'c → qu.', tag: 'diminutive' },
      { t: 'cloze', s: 'El viaje en bus fue ___.', h: 'largo → -ísimo', a: ['larguísimo'], nl: 'De busreis was ellenlang.', x: 'g → gu.', tag: 'diminutive' },
      { t: 'cloze', s: 'Mi equipo metió un ___ en el último minuto.', a: ['golazo'], o: ['golazo', 'golito', 'golísimo'], nl: 'Mijn team maakte een wereldgoal in de laatste minuut.', x: '-azo = groot, geweldig.', tag: 'diminutive' },
      { t: 'cloze', s: 'Salió enojado y dio un ___.', a: ['portazo'], o: ['portazo', 'portito', 'portísimo'], nl: 'Hij ging boos weg en sloeg met de deur.', x: '-azo = klap met.', tag: 'diminutive' },
      { t: 'mc', q: 'In welk land zeggen ze «un momentico» en «chiquitico»?', o: ['Costa Rica', 'Argentinië', 'Chili'], tag: 'diminutive' },
      { t: 'mc', q: 'Waarom zegt iemand «¿Me hace un favorcito?»', o: ['Om het verzoek vriendelijker te maken', 'Omdat het maar een halve gunst is', 'Om boos te klinken'], tag: 'diminutive' },
      { t: 'mc', q: 'Welke spelling is goed?', o: ['poquito', 'pocito', 'pocuito'], tag: 'diminutive' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['La comida está riquísima.', 'La comida está muy riquísima.', 'La comida está riquísimo.'], x: 'Na -ísimo nooit muy; en de uitgang richt zich naar la comida.', tag: 'diminutive' },
      { t: 'mc', q: 'Wat betekent «grandote»?', o: ['heel groot, een joekel', 'een beetje groot', 'niet zo groot'], tag: 'diminutive' },
      { t: 'mc', q: '«¡Upe!» roep je in Costa Rica:', o: ['als je bij iemand aan de deur komt', 'als je proost', 'als je afscheid neemt'], tag: 'vocab' },
      { t: 'order', s: 'Espéreme un momentico y le sirvo otro cafecito.', nl: 'Wacht u een momentje, dan schenk ik nog een kopje koffie voor u in.', tag: 'diminutive' },
      { t: 'tr', nl: 'Wacht een momentje.', a: ['Espera un momentito.', 'Espere un momentito.', 'Espera un momentico.', 'Espere un momentico.', 'Esperá un momentito.', 'Espérame un momentito.', 'Espéreme un momentito.', 'Espéreme un momentico.', 'Espérame un momentico.', 'Un momentito.', 'Un momentico.'], tag: 'diminutive' },
      { t: 'tr', nl: 'Het eten is superlekker.', a: ['La comida está riquísima.', 'La comida está buenísima.', 'La comida está deliciosa.'], tag: 'diminutive' },
      { t: 'match', p: [['cerquita', 'heel dichtbij'], ['despacito', 'heel rustig'], ['tempranito', 'lekker vroeg'], ['carísimo', 'peperduur'], ['el portazo', 'de klap met de deur']], tag: 'vocab' }
    ],
    say: [['¿Le sirvo un cafecito?', 'Zal ik een kopje koffie voor u inschenken?'], ['Espéreme un momentico, por favor.', 'Wacht u een momentje, alstublieft.'], ['¡Está riquísimo!', 'Het is heerlijk!'], ['Vivo aquí cerquita.', 'Ik woon hier vlakbij.']],
    task: { nl: 'Beschrijf een bezoek aan iemand die je gastvrij ontving (6 tot 8 zinnen). Gebruik minstens vier verkleinwoorden (cafecito, ratito, casita, poquito, cerquita…) en drie versterkers (-ísimo, -azo, -ote).', model: 'El domingo visité a mi abuelita. Vive cerquita, en una casita con un jardín grandote. Llegué tempranito y me sirvió un cafecito con un pedacito de pastel riquísimo. Hablamos un ratito de la familia y me enseñó unas fotos viejísimas. Después cocinó una sopa buenísima; yo, que soy un comilón, repetí dos veces. Antes de irme me pidió un favorcito: arreglar su radio. Fue un trabajazo, pero valió la pena.' },
    scenario: { nl: 'Doña Flor ontvangt je op haar koffiefinca in Costa Rica. Ze laat je proeven en vertelt hoe de koffie gemaakt wordt.', role: 'Eres doña Flor, una costarricense de 62 años, dueña de una pequeña finca de café en el Valle de Orosi. Eres cariñosa, hospitalaria y hablas siempre de «usted», como es costumbre en Costa Rica. Usas muchísimos diminutivos («cafecito», «momentico», «chiquitico», «cerquita», «despacito») y superlativos («riquísimo», «durísimo»), además de expresiones ticas como «¡upe!», «con mucho gusto» y «pura vida». Le ofreces café al estudiante, le explicas la cosecha y le preguntas por su casa, su familia y lo que toma en su país.', goal: 'Bedank beleefd, vraag naar de koffie en gebruik zelf minstens drie verkleinwoorden of -ísimo-vormen.' },
    reading: {
      t: 'El viaje de un granito de café', type: 'Artikel',
      p: [
        ['Todo empieza con una florecita blanca que huele a jazmín. Unos meses después, en las laderas de Costa Rica, aparecen unas frutitas rojas del tamaño de una cereza. Adentro de cada una duermen dos granitos de café.',
          'Alles begint met een wit bloemetje dat naar jasmijn ruikt. Een paar maanden later verschijnen op de hellingen van Costa Rica rode vruchtjes zo groot als een kers. In elk ervan slapen twee koffieboontjes.'],
        ['Entre noviembre y febrero llegan los recolectores, muchos de ellos de Nicaragua y Panamá. El trabajo es durísimo: hay que recoger solo las frutas maduras, una por una, y llenar canastos grandotes bajo el sol.',
          'Tussen november en februari komen de plukkers, van wie velen uit Nicaragua en Panama. Het werk is loodzwaar: je moet alleen de rijpe vruchten plukken, een voor een, en joekels van manden vullen in de zon.'],
        ['Después, los granos se lavan y se secan al sol durante varios días. Cuando están sequitos, se tuestan despacito. Un tostado larguísimo da un café amargo; uno cortico, un café más suave.',
          'Daarna worden de bonen gewassen en dagenlang in de zon gedroogd. Als ze goed droog zijn, worden ze heel rustig gebrand. Een ellenlange branding geeft bittere koffie; een korte een zachtere koffie.'],
        ['Al final, en la cocina, el agua caliente pasa por el chorreador, una bolsita de tela que cuelga de un soporte de madera. El resultado es un cafecito riquísimo. Los ticos lo toman a media tarde, con un pedacito de pan dulce y una buena conversación.',
          'Ten slotte gaat in de keuken het hete water door de chorreador, een stoffen zakje dat aan een houten standaard hangt. Het resultaat is een heerlijk kopje koffie. De ticos drinken het halverwege de middag, met een stukje zoet brood en een goed gesprek.']
      ],
      gl: [['oler a (ue)', 'ruiken naar'], ['el tamaño', 'de grootte'], ['secar', 'drogen'], ['amargo', 'bitter'], ['colgar (ue)', 'hangen']],
      q: [
        { t: 'mc', q: '¿Cómo empieza el viaje del café?', o: ['Con una florecita blanca', 'Con un granito tostado', 'Con una taza caliente'] },
        { t: 'mc', q: '¿Por qué es durísimo el trabajo de los recolectores?', o: ['Porque recogen las frutas maduras una por una', 'Porque trabajan de noche', 'Porque los canastos son chiquiticos'] },
        { t: 'mc', q: '¿Qué café da un tostado larguísimo?', o: ['Un café amargo', 'Un café suave', 'Un café dulce'] },
        { t: 'mc', q: '¿Qué es un chorreador?', o: ['Una bolsita de tela para preparar el café', 'Un canasto para recoger el café', 'Un horno para tostar'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 19 ───────────────────────── */
  U({
    id: 'b2-19', level: 'B2', icon: '🛶', title: 'Lo bueno es que…', nl: 'Het onzijdige lo: lo bueno, lo de ayer, lo cansado que estoy, en vaste uitdrukkingen',
    goals: ['Een oordeel geven met lo + bijvoeglijk naamwoord: lo bueno es que…, lo mejor de…', 'Verwijzen naar iets wat jullie allebei kennen met lo de…, en zeggen «hoe … iets is» met lo + adjetivo + que', 'Veelgebruikte uitdrukkingen begrijpen: meter la pata, tomar el pelo, costar un ojo de la cara'],
    vocab: [
      ['lo bueno', 'het goede (eraan)'], ['lo malo', 'het vervelende (eraan)'], ['lo mejor', 'het beste'], ['lo peor', 'het ergste'], ['lo importante', 'het belangrijkste'],
      ['lo de siempre', 'hetzelfde als altijd'], ['lo mío', 'mijn ding; wat van mij is'], ['a lo mejor', 'misschien'], ['por lo menos', 'tenminste, op zijn minst'], ['por lo general', 'over het algemeen'],
      ['lo antes posible', 'zo snel mogelijk'], ['meter la pata', 'een blunder begaan'], ['tomar el pelo', 'voor de gek houden'], ['costar un ojo de la cara (ue)', 'een vermogen kosten'], ['quedarse de piedra', 'met stomheid geslagen zijn'],
      ['estar en las nubes', 'met je hoofd in de wolken zijn'], ['ser pan comido', 'een makkie zijn'], ['no tener pelos en la lengua', 'geen blad voor de mond nemen'], ['dar en el clavo', 'de spijker op zijn kop slaan'], ['ponerse las pilas', 'er flink tegenaan gaan, wakker worden', 'LatAm (informeel)'],
      ['el alivio', 'de opluchting'], ['el chiste', 'de grap'], ['el tejido', 'het weefsel, de geweven stof'], ['tejer', 'weven; breien'], ['el telar', 'het weefgetouw'],
      ['el hilo', 'de draad'], ['teñir (i)', 'verven (stof, haar)'], ['la neblina', 'de mist, de nevel'], ['bravo', 'woest, wild (water); boos'], ['marearse', 'misselijk of duizelig worden'],
      ['el huipil', 'de geborduurde Maya-blouse', 'GT · MX'], ['el xocomil', 'de harde middagwind op het meer van Atitlán', 'GT'], ['chapín / chapina', 'Guatemalteeks; Guatemalteek', 'GT (informeel)'], ['fíjate que…', 'weet je…, nou…', 'GT · MX · SV: zo begin je een uitleg of een nieuwtje']
    ],
    grammar: [
      { t: 'Lo + bijvoeglijk naamwoord: het goede, het ergste', es: 'Lo + adjetivo',
        html: `<p>Het Spaans heeft geen onzijdige zelfstandige naamwoorden, maar wel het onzijdige lidwoord <b>lo</b>. Met <b>lo + bijvoeglijk naamwoord</b> maak je van een eigenschap een begrip: «het … (eraan)».</p>
<p>📌 <i><b>Lo bueno</b> es que hay otra lancha.</i> = Het goede is dat er nog een boot is. · <i><b>Lo malo</b> es el viento.</i> · <i><b>Lo importante</b> es cruzar temprano.</i></p>
<p>📌 Met <b>de</b> zeg je waarvan: <i><b>lo mejor del</b> viaje</i> (het beste van de reis), <i><b>lo peor de</b> todo</i>.</p>
<p>📌 Met <b>más</b>: <i>lo más importante, lo más bonito, lo más raro</i>. En met een rangtelwoord: <i>lo primero, lo último, lo único</i> (het enige).</p>
<p>⚠️ <b>Uitzondering:</b> <i>lo</i> verandert <b>nooit</b>: geen meervoud, geen vrouwelijke vorm, en het bijvoeglijk naamwoord blijft mannelijk enkelvoud: <i>lo bueno</i>, nooit <s>los buenos</s> in deze betekenis. <b>Waarom?</b> <i>Lo</i> verwijst niet naar een ding of persoon, maar naar een idee. Vergelijk: <i><b>el</b> bueno</i> = de goede (de held van de film), <i><b>lo</b> bueno</i> = het goede (eraan).</p>`,
        table: [['Spaans', 'Nederlands'], ['lo bueno', 'het goede (eraan)'], ['lo mejor del viaje', 'het beste van de reis'], ['lo más importante', 'het allerbelangrijkste'], ['lo único', 'het enige'], ['lo primero', 'het eerste']],
        ex: [['Lo malo es que perdimos la lancha de las ocho.', 'Het vervelende is dat we de boot van acht uur gemist hebben.'], ['Lo mejor: nos da tiempo de desayunar.', 'Het beste: we hebben tijd om te ontbijten.']],
        sum: 'Lo + adjetivo: lo bueno, lo malo, lo mejor de…, lo más importante. «Lo» nunca cambia.' },
      { t: 'Lo de…: dat van gisteren', es: 'Lo de · Lo mío · Lo que',
        html: `<p>📌 <b>Lo de</b> + iets of iemand = «dat gedoe met, de kwestie van, dat van». Je gebruikt het als jullie allebei weten waar het over gaat: <i>Perdón por <b>lo de anoche</b>.</i> = Sorry voor gisteravond. · <i>¿Supiste <b>lo de Rodrigo</b>?</i> = Heb je dat van Rodrigo gehoord? · <i>Te enseño <b>lo de los tejidos</b>.</i></p>
<p>📌 <b>Lo de siempre</b> = hetzelfde als altijd (bijvoorbeeld als je bestelt).</p>
<p>📌 <b>Lo + bezittelijk</b>: <i><b>lo mío</b>, lo tuyo, lo nuestro</i> = wat van mij is, mijn zaak, of «mijn ding»: <i><b>Lo mío</b> es regatear.</i> = Afdingen is echt mijn ding.</p>
<p>📌 <b>Lo que</b> ken je al: «wat, datgene wat»: <i><b>Lo que</b> nadie te cuenta…</i></p>`,
        table: [['Spaans', 'Nederlands'], ['lo de ayer', 'dat van gisteren'], ['lo de tu jefe', 'dat gedoe met je baas'], ['lo de siempre', 'hetzelfde als altijd'], ['lo mío', 'mijn ding; het mijne'], ['lo que dices', 'wat je zegt']],
        ex: [['¿Lo del chiste? ¡Para nada! Le encantó.', 'Dat van die grap? Helemaal niet! Hij vond hem geweldig.'], ['Lo mío es regatear: déjamelo a mí.', 'Afdingen is mijn ding: laat het maar aan mij over.']],
        sum: 'Lo de + tema: lo de ayer, lo de Rodrigo. Lo mío, lo tuyo. Lo de siempre.' },
      { t: 'Lo + adjetivo + que: hoe moe ik ben', es: 'Lo + adjetivo / adverbio + que',
        html: `<p>Met <b>lo + bijvoeglijk naamwoord + que</b> benadruk je <b>hoe erg</b> iets is. In het Nederlands zeg je «hoe … »:</p>
<p>📌 <i>No sabes <b>lo nervioso que</b> estaba.</i> = Je weet niet hoe zenuwachtig ik was. · <i>¿Ves <b>lo tranquilo que</b> está el lago?</i></p>
<p>📌 Het werkt ook met een <b>bijwoord</b>: <i>Mira <b>lo bien que</b> teje.</i> = Kijk hoe goed ze weeft. · <i>Me sorprende <b>lo temprano que</b> hay que levantarse.</i></p>
<p>⚠️ <b>Uitzondering:</b> hier past het bijvoeglijk naamwoord zich <b>wél</b> aan, terwijl <i>lo</i> gelijk blijft: <i>No sabes <b>lo</b> cansad<b>as</b> que están mis hermanas.</i> · <i>lo car<b>as</b> que son las entradas</i>. <b>Waarom?</b> Het bijvoeglijk naamwoord hoort hier bij een echt zelfstandig naamwoord (<i>mis hermanas, las entradas</i>) en richt zich daarnaar. Bij <i>lo bueno</i> is er geen zelfstandig naamwoord, dus daar blijft het neutraal.</p>
<p>⚠️ <b>Uitzondering:</b> <b>a lo mejor</b> betekent «misschien», maar krijgt de <b>indicativo</b>: <i>A lo mejor <b>llueve</b>.</i> Na <i>quizás</i> en <i>tal vez</i> mag de subjuntivo. <b>Waarom?</b> <i>A lo mejor</i> is een vaste uitdrukking uit de spreektaal waarmee je iets als een reële kans brengt.</p>
<p>Meer vaste combinaties met <i>lo</i>: <b>por lo menos</b> (tenminste), <b>por lo general</b> (meestal), <b>por lo visto</b> (blijkbaar), <b>lo antes posible</b> (zo snel mogelijk).</p>`,
        table: [['Spaans', 'Nederlands'], ['lo cansado que estoy', 'hoe moe ik ben'], ['lo cansadas que están', 'hoe moe ze (v.) zijn'], ['lo bien que cocina', 'hoe goed hij kookt'], ['a lo mejor llueve', 'misschien regent het'], ['lo antes posible', 'zo snel mogelijk']],
        ex: [['No te imaginas lo bravo que se pone el lago.', 'Je kunt je niet voorstellen hoe woest het meer wordt.'], ['A lo mejor terminas pagando la mitad.', 'Misschien betaal je uiteindelijk de helft.']],
        sum: 'Lo + adjetivo + que: no sabes lo cansada que estoy. A lo mejor + indicativo. Por lo menos, por lo general, lo antes posible.' }
    ],
    verbs: ['ser', 'estar', 'saber', 'perder', 'costar', 'ver', 'cruzar'], tenses: ['pres', 'pret', 'imp'],
    dialogue: {
      t: 'Lo de la lancha', place: 'Panajachel, lago de Atitlán 🇬🇹',
      lines: [
        ['Ana Lucía', 'Mark, fíjate que tengo una mala noticia y una buena. Lo malo es que perdimos la lancha de las ocho.', 'Mark, weet je, ik heb slecht nieuws en goed nieuws. Het vervelende is dat we de boot van acht uur gemist hebben.'],
        ['Mark', '¿En serio? ¿Y lo bueno?', 'Echt? En het goede?'],
        ['Ana Lucía', 'Lo bueno es que hay otra en media hora. Y lo mejor: nos da tiempo de desayunar.', 'Het goede is dat er over een halfuur nog een gaat. En het beste: we hebben tijd om te ontbijten.'],
        ['Mark', 'Menos mal. Oye, perdón por lo de anoche. Metí la pata con tu jefe, ¿verdad?', 'Gelukkig maar. Zeg, sorry voor gisteravond. Ik heb een blunder begaan bij je baas, hè?'],
        ['Ana Lucía', '¿Lo del chiste? ¡Para nada! Le encantó. Él tampoco tiene pelos en la lengua.', 'Dat van die grap? Helemaal niet! Hij vond hem geweldig. Hij neemt ook geen blad voor de mond.'],
        ['Mark', 'Uf, qué alivio. No sabes lo nervioso que estaba.', 'Oef, wat een opluchting. Je weet niet hoe zenuwachtig ik was.'],
        ['Ana Lucía', 'Lo noté, ja, ja. Mira el lago: ¿ves lo tranquilo que está ahora? Por la tarde llega el xocomil y se pone bravísimo.', 'Dat merkte ik, haha. Kijk naar het meer: zie je hoe rustig het nu is? In de middag komt de xocomil en dan wordt het heel woest.'],
        ['Mark', 'Entonces lo importante es cruzar temprano.', 'Dan is het belangrijkste dat we vroeg oversteken.'],
        ['Ana Lucía', '¡Cabal! Y en San Juan te enseño lo de los tejidos: las señoras tiñen el hilo con plantas.', 'Precies! En in San Juan laat ik je dat van de weefsels zien: de vrouwen verven de draad met planten.'],
        ['Mark', '¿Y son caros? No quiero que me cuesten un ojo de la cara.', 'En zijn ze duur? Ik wil niet dat ze me een vermogen kosten.'],
        ['Ana Lucía', 'Tú tranquilo. Lo mío es regatear: déjamelo a mí.', 'Maak je geen zorgen. Afdingen is mijn ding: laat het maar aan mij over.']
      ],
      q: [
        { t: 'mc', q: '¿Qué es lo malo, según Ana Lucía?', o: ['Que perdieron la lancha de las ocho', 'Que no hay más lanchas hoy', 'Que el lago está bravo'] },
        { t: 'mc', q: '¿Por qué estaba nervioso Mark?', o: ['Por lo del chiste con el jefe', 'Por lo de los precios', 'Por el viento del lago'] },
        { t: 'mc', q: '¿Por qué es importante cruzar temprano?', o: ['Porque por la tarde llega el xocomil', 'Porque los tejidos se venden rápido', 'Porque la lancha es más barata'] }
      ]
    },
    culture: { t: 'Atitlán, het meer tussen drie vulkanen', html: `<p>🌋 Het <b>lago de Atitlán</b> ligt op ruim 1.500 meter hoogte in de krater van een oeroude supervulkaan, omringd door drie vulkanen: <b>San Pedro</b>, <b>Tolimán</b> en <b>Atitlán</b>. De schrijver Aldous Huxley vergeleek het met het Comomeer, maar dan met vulkanen erbij.</p>
<p>💨 Elke middag steekt de <b>xocomil</b> op, een harde wind die het gladde water in korte tijd woest maakt. De naam komt uit het Kaqchikel. De bootjes (<i>lanchas</i>) tussen de dorpen varen daarom vooral 's ochtends.</p>
<p>🧵 Rond het meer wonen vooral <b>Maya's</b> die Tz'utujil en Kaqchikel spreken; Guatemala telt meer dan twintig Mayatalen. In <b>San Juan La Laguna</b> verven vrouwencoöperaties katoen met planten, schors en insecten en weven ze op een heupweefgetouw. Aan het patroon van een <b>huipil</b> zie je uit welk dorp iemand komt.</p>
<p>🗣️ Guatemalteken noemen zichzelf <b>chapines</b>. Een verhaal begint er vaak met <b>fíjate que…</b>, en als iets klopt zeg je <b>¡cabal!</b> Afdingen op de markt hoort erbij, maar bij de coöperaties liggen de prijzen vast.</p>` },
    ex: [
      { t: 'cloze', s: '___ bueno es que hay otra lancha en media hora.', a: ['Lo'], o: ['Lo', 'El', 'La'], nl: 'Het goede is dat er over een halfuur nog een boot gaat.', x: 'Een idee, geen ding: lo.', tag: 'lo-neutro' },
      { t: 'cloze', s: 'Perdón por lo ___ anoche.', a: ['de'], o: ['de', 'que', 'del'], nl: 'Sorry voor gisteravond.', x: 'Lo de + onderwerp.', tag: 'lo-neutro' },
      { t: 'cloze', s: 'No sabes lo ___ que están mis hermanas.', h: 'cansado', a: ['cansadas'], nl: 'Je weet niet hoe moe mijn zussen zijn.', x: 'Lo blijft, cansadas richt zich naar mis hermanas.', uitz: 'In <i>lo + adjetivo + que</i> past het bijvoeglijk naamwoord zich <b>wél</b> aan: <i>lo cansad<b>as</b> que están</i>. <b>Waarom?</b> Het hoort bij een echt zelfstandig naamwoord (<i>mis hermanas</i>). <i>Lo</i> zelf verandert nooit.', tag: 'lo-neutro' },
      { t: 'cloze', s: 'Mira lo ___ que teje esa señora.', a: ['bien'], o: ['bien', 'buena', 'bueno'], nl: 'Kijk hoe goed die mevrouw weeft.', x: 'Bij een werkwoord hoort een bijwoord: bien.', tag: 'lo-neutro' },
      { t: 'cloze', s: 'Lo ___ del viaje fue el amanecer en el lago.', a: ['mejor'], o: ['mejor', 'más bueno', 'bien'], nl: 'Het beste van de reis was de zonsopgang op het meer.', tag: 'lo-neutro' },
      { t: 'cloze', s: 'A lo mejor ___ por la tarde.', a: ['llueve'], o: ['llueve', 'llueva', 'lloviera'], nl: 'Misschien regent het vanmiddag.', x: 'A lo mejor + indicativo.', uitz: '<b>A lo mejor</b> betekent «misschien», maar krijgt de <b>indicativo</b>. <b>Waarom?</b> Het is een vaste uitdrukking uit de spreektaal waarmee je iets als een reële kans brengt. Na <i>quizás</i> en <i>tal vez</i> mag de subjuntivo wel.', tag: 'lo-neutro' },
      { t: 'cloze', s: 'Llámame lo ___ posible.', a: ['antes'], o: ['antes', 'primero', 'temprano'], nl: 'Bel me zo snel mogelijk.', tag: 'lo-neutro' },
      { t: 'cloze', s: 'Regatear es lo ___: déjamelo a mí.', a: ['mío'], o: ['mío', 'mi', 'me'], nl: 'Afdingen is mijn ding: laat het maar aan mij over.', tag: 'lo-neutro' },
      { t: 'mc', q: '«Lo bueno de la película» betekent:', o: ['het goede aan de film', 'de held van de film', 'de film is goed'], x: 'El bueno = de goede (persoon); lo bueno = het goede (eraan).', tag: 'lo-neutro' },
      { t: 'mc', q: 'Welke zin is goed?', o: ['No sabes lo caras que son las entradas.', 'No sabes las caras que son las entradas.', 'No sabes lo caro que son las entradas.'], tag: 'lo-neutro' },
      { t: 'mc', q: '«Metí la pata.» betekent:', o: ['Ik heb een blunder begaan.', 'Ik heb mijn been bezeerd.', 'Ik ben hard weggerend.'], tag: 'vocab' },
      { t: 'mc', q: '«Me costó un ojo de la cara.» betekent:', o: ['Het kostte me een vermogen.', 'Ik heb mijn oog bezeerd.', 'Ik kon het niet goed zien.'], tag: 'vocab' },
      { t: 'mc', q: '«¿Me estás tomando el pelo?» betekent:', o: ['Hou je me voor de gek?', 'Knip je mijn haar?', 'Help je me even?'], tag: 'vocab' },
      { t: 'mc', q: '«El examen fue pan comido.» betekent:', o: ['Het examen was een makkie.', 'Het examen was na het eten.', 'Het examen was heel zwaar.'], tag: 'vocab' },
      { t: 'order', s: 'Lo importante es cruzar el lago temprano.', nl: 'Het belangrijkste is het meer vroeg over te steken.', tag: 'lo-neutro' },
      { t: 'tr', nl: 'Het ergste is dat we de boot gemist hebben.', a: ['Lo peor es que perdimos la lancha.', 'Lo peor es que hemos perdido la lancha.', 'Lo peor es que perdimos el barco.', 'Lo peor es que hemos perdido el barco.', 'Lo peor es que perdimos el bote.', 'Lo peor es que hemos perdido el bote.'], tag: 'lo-neutro' },
      { t: 'tr', nl: 'Je weet niet hoe moe ik ben.', a: ['No sabes lo cansado que estoy.', 'No sabes lo cansada que estoy.', 'No sabe lo cansado que estoy.', 'No sabe lo cansada que estoy.', 'No sabés lo cansado que estoy.', 'No sabés lo cansada que estoy.'], tag: 'lo-neutro' },
      { t: 'match', p: [['meter la pata', 'een blunder begaan'], ['tomar el pelo', 'voor de gek houden'], ['echar una mano', 'een handje helpen'], ['estar en las nubes', 'met je hoofd in de wolken zijn'], ['ponerse las pilas', 'er flink tegenaan gaan']], tag: 'vocab' }
    ],
    say: [['Lo bueno es que hay otra lancha.', 'Het goede is dat er nog een boot gaat.'], ['Perdón por lo de ayer.', 'Sorry voor gisteren.'], ['No sabes lo cansado que estoy.', 'Je weet niet hoe moe ik ben.'], ['A lo mejor llegamos tarde.', 'Misschien komen we te laat.']],
    task: { nl: 'Schrijf een eerlijke recensie van een plek waar je geweest bent (stad, hotel, restaurant; 6 tot 8 zinnen). Gebruik lo bueno, lo malo, lo mejor of lo peor, één keer lo de…, één keer lo + adjetivo + que en één uitdrukking (costar un ojo de la cara, ser pan comido, meter la pata…).', model: 'El mes pasado estuve en un hotel pequeño junto al lago. Lo bueno es que la vista era increíble. Lo malo fue lo del desayuno: empezaba a las nueve y yo tenía una lancha a las ocho. No se imaginan lo fría que estaba el agua de la ducha. Por lo menos, la dueña era amabilísima y siempre nos echaba una mano. Lo mejor de todo fue el precio: no nos costó un ojo de la cara. A lo mejor vuelvo el año que viene, pero con un suéter.' },
    scenario: { nl: 'Ana Lucía neemt je een weekend mee naar het meer van Atitlán. Ze vraagt wat je van alles vindt: het goede, het vervelende en het mooiste.', role: 'Eres Ana Lucía, una guatemalteca de 32 años que trabaja en una oficina en la capital y pasa el fin de semana en el lago de Atitlán con el estudiante, su compañero de trabajo. Eres habladora, graciosa y siempre sabes todos los chismes. Usas mucho «lo»: «lo bueno es que…», «lo malo…», «lo de ayer», «no sabes lo… que…», «a lo mejor». Usas modismos («meter la pata», «tomar el pelo», «costar un ojo de la cara», «ponerse las pilas») y expresiones chapinas como «fíjate que…», «¡cabal!» y «¡qué chilero!». Tuteas al estudiante. Le preguntas qué es lo mejor y lo peor de su viaje y de su trabajo.', goal: 'Vertel wat het beste en het vervelendste van je reis is en gebruik één keer lo de… en één uitdrukking.' },
    reading: {
      t: 'Lo que nadie te cuenta del lago de Atitlán', type: 'Reisblog',
      p: [
        ['Todo el mundo te dice que Atitlán es el lago más bonito del mundo. Lo que nadie te cuenta es lo temprano que hay que levantarse para verlo bien. Lo mejor del día pasa antes de las siete, cuando la neblina se levanta y aparecen los tres volcanes.',
          'Iedereen zegt je dat Atitlán het mooiste meer ter wereld is. Wat niemand je vertelt, is hoe vroeg je moet opstaan om het goed te zien. Het beste van de dag gebeurt voor zevenen, wanneer de nevel optrekt en de drie vulkanen tevoorschijn komen.'],
        ['Lo malo es el xocomil, el viento que llega después del mediodía. No te imaginas lo bravo que se pone el lago. Por lo general, las lanchas cruzan sin problema, pero si te mareas fácil, cruza lo antes posible.',
          'Het vervelende is de xocomil, de wind die na het middaguur opsteekt. Je kunt je niet voorstellen hoe woest het meer wordt. Over het algemeen steken de boten zonder problemen over, maar als je snel misselijk wordt, steek dan zo vroeg mogelijk over.'],
        ['Lo de los precios también hay que saberlo: en Panajachel, lo primero que te ofrecen cuesta un ojo de la cara. No es que te quieran tomar el pelo; es que regatear es parte del juego. A lo mejor terminas pagando la mitad.',
          'Dat van de prijzen moet je ook weten: in Panajachel kost het eerste wat ze je aanbieden een vermogen. Het is niet dat ze je voor de gek willen houden; afdingen hoort gewoon bij het spel. Misschien betaal je uiteindelijk de helft.'],
        ['Y lo más importante: no vayas con prisa. En San Juan, las tejedoras te explican con paciencia lo difícil que es teñir el hilo con plantas. Lo bueno de Atitlán no es solo el paisaje, sino la gente que vive a su orilla.',
          'En het allerbelangrijkste: ga niet gehaast. In San Juan leggen de weefsters je geduldig uit hoe moeilijk het is om de draad met planten te verven. Het mooie van Atitlán is niet alleen het landschap, maar ook de mensen die aan de oever wonen.']
      ],
      gl: [['levantarse', 'opstaan; optrekken (mist)'], ['imaginarse', 'zich voorstellen'], ['la prisa', 'de haast'], ['la tejedora', 'de weefster'], ['el paisaje', 'het landschap']],
      q: [
        { t: 'mc', q: '¿Qué es lo que nadie te cuenta?', o: ['Lo temprano que hay que levantarse', 'Lo caro que es el desayuno', 'Lo lejos que está el lago'] },
        { t: 'mc', q: '¿Qué es lo malo del lago?', o: ['El viento de la tarde', 'La neblina de la mañana', 'Las lanchas viejas'] },
        { t: 'mc', q: '¿Por qué son altos los primeros precios?', o: ['Porque regatear es parte del juego', 'Porque quieren tomarte el pelo', 'Porque todo es importado'] },
        { t: 'mc', q: 'Según el texto, ¿qué es lo bueno de Atitlán?', o: ['El paisaje y también la gente', 'Solo los volcanes', 'Los precios bajos'] }
      ]
    }
  });

  /* ───────────────────────── B2 · 20 ───────────────────────── */
  U({
    id: 'b2-20', level: 'B2', icon: '🎉', title: '¡No me digas!', nl: 'Een anekdote vertellen en meeleven: resulta que, por poco, total que, menos mal que',
    goals: ['Een verhaal opbouwen met resulta que, de pronto, en eso, total que en al final, en de verleden tijden goed mengen', 'Spanning maken met al + infinitivo, estar a punto de… cuando en por poco + presente', 'Reageren als een goede luisteraar: ¡No me digas!, ¿Y entonces?, ¡Qué historia tan buena!, ¡Menos mal!'],
    vocab: [
      ['resulta que', 'wat blijkt, het zit zo'], ['total que', 'kortom, om een lang verhaal kort te maken'], ['en eso', 'op dat moment, toen ineens'], ['de pronto', 'plotseling'], ['menos mal que', 'gelukkig maar dat'],
      ['por poco', 'bijna, op een haar na'], ['el otro día', 'laatst, pas geleden'], ['la anécdota', 'de anekdote'], ['el susto', 'de schrik'], ['pegar un grito', 'een gil geven'],
      ['el enredo', 'de verwarring, het gedoe'], ['de milagro', 'op het nippertje, wonder boven wonder'], ['por casualidad', 'toevallig'], ['tropezar (ie)', 'struikelen'], ['resbalarse', 'uitglijden'],
      ['arrastrar', '(mee)slepen'], ['equivocarse de', 'zich vergissen in'], ['el despiste', 'de vergissing uit verstrooidheid'], ['la carcajada', 'de schaterlach'], ['morirse de risa (ue)', 'je doodlachen'],
      ['brindar por', 'proosten op'], ['echarse a reír', 'in lachen uitbarsten'], ['la despedida', 'het afscheid'], ['sano y salvo', 'heelhuids, veilig en wel'], ['¡No me digas!', 'Je meent het!, Nee toch!'],
      ['¡Qué susto!', 'Wat een schrik!'], ['¿Y entonces?', 'En toen?'], ['¡Híjole!', 'jeetje!, tjonge!', 'MX (informeel)'], ['cada quien', 'ieder, iedereen', 'LatAm: in Spanje cada uno'],
      ['el cenote', 'de natuurlijke put met helder water', 'MX'], ['la hamaca', 'de hangmat'], ['el coatí', 'de neusbeer'], ['la marquesita', 'de krokante opgerolde wafel met kaas', 'MX'], ['el sorbete', 'het sorbetijs']
    ],
    grammar: [
      { t: 'Een anekdote opbouwen', es: 'La estructura de una anécdota',
        html: `<p>Een goed verhaal heeft vaste bouwstenen. Met de juiste woorden weet je luisteraar steeds waar hij is:</p>
<p>📌 <b>Begin</b>: <i><b>El otro día</b>…, <b>Una vez</b>…, <b>Resulta que</b>…</i> (het zit zo, wat blijkt).</p>
<p>📌 <b>Achtergrond</b> in de <b>imperfecto</b>: <i>Era de noche, hacía calor y yo caminaba mirando el mapa.</i></p>
<p>📌 <b>Wat er gebeurde</b> in de <b>indefinido</b>, vaak na <i><b>de pronto</b>, <b>de repente</b></i> of <i><b>en eso</b></i> (op dat moment): <i>En eso <b>pasó</b> una señora.</i></p>
<p>📌 <b>Wat daarvoor al gebeurd was</b> in de <b>pluscuamperfecto</b>: <i>Me <b>había quedado</b> sin batería.</i></p>
<p>📌 <b>Afloop</b>: <i><b>Total que</b>…</i> (kortom, het eind van het liedje), <i><b>Al final</b>…</i></p>
<p>⚠️ <b>Uitzondering:</b> <b>menos mal que</b> (gelukkig maar dat) drukt een gevoel uit, maar krijgt de <b>indicativo</b>: <i>Menos mal que <b>llevabas</b> fruta.</i> Vergelijk <i>Me alegra que <b>lleves</b> fruta</i> (subjuntivo). <b>Waarom?</b> Met <i>menos mal que</i> deel je vooral een feit mee waar je blij om bent. Er staat geen werkwoord van gevoel in dat de subjuntivo oproept.</p>`,
        table: [['bouwsteen', 'woorden', 'tijd'], ['begin', 'el otro día · resulta que', ''], ['achtergrond', 'era · hacía · estaba', 'imperfecto'], ['gebeurtenis', 'de pronto · en eso', 'indefinido'], ['daarvoor', 'ya había…', 'pluscuamperfecto'], ['afloop', 'total que · al final', 'indefinido']],
        ex: [['Resulta que dejé la mochila en una piedra y desapareció.', 'Het zit zo: ik liet mijn rugzak op een steen liggen en hij verdween.'], ['Total que le cambié la mochila por un plátano.', 'Kortom, ik ruilde de rugzak met hem voor een banaan.']],
        sum: 'Anécdota: resulta que… (inicio), imperfecto (fondo), de pronto / en eso + indefinido (acción), total que… (final). Menos mal que + indicativo.' },
      { t: 'Spanning: al salir, por poco me caigo', es: 'Al + infinitivo · Por poco + presente',
        html: `<p>📌 <b>Al + infinitivo</b> = «toen ik…, bij het…»: <i><b>Al salir</b> del agua, la mochila ya no estaba.</i> = Toen ik uit het water kwam, was de rugzak weg. Kort en vlot, ideaal in een verhaal.</p>
<p>📌 <b>Estar a punto de + infinitivo… cuando</b> = op het punt staan… toen: <i><b>Estaba a punto de</b> llamar a la policía <b>cuando</b> vi al coatí.</i></p>
<p>📌 <b>Sin querer</b> (per ongeluk) en <b>por casualidad</b> (toevallig) geven aan dat het niet de bedoeling was.</p>
<p>⚠️ <b>Uitzondering:</b> na <b>por poco</b> en vaak ook na <b>casi</b> gebruik je de <b>presente</b>, ook al speelt het verhaal in het verleden: <i>Por poco me <b>caigo</b>.</i> = Ik viel bijna. · <i>Casi me <b>muero</b> del susto.</i> <b>Waarom?</b> Het is uiteindelijk niet gebeurd, en met de presente breng je het levendig, alsof je het weer voor je ziet. <i>Casi me caí</i> hoor je ook; <i>por poco me caigo</i> is de vaste vorm.</p>`,
        table: [['Spaans', 'Nederlands'], ['Al llegar, vi que…', 'Toen ik aankwam, zag ik dat…'], ['Estaba a punto de salir cuando…', 'Ik stond op het punt te vertrekken toen…'], ['Por poco me caigo.', 'Ik viel bijna.'], ['Casi me muero de la risa.', 'Ik lachte me bijna dood.']],
        ex: [['Corrí detrás de él y por poco me caigo al agua.', 'Ik rende achter hem aan en viel bijna in het water.'], ['Al doblar la esquina, por poco choco con un señor.', 'Toen ik de hoek om ging, botste ik bijna tegen een man op.']],
        sum: 'Al + infinitivo = cuando… Estaba a punto de… cuando… Por poco / casi + presente: por poco me caigo.' },
      { t: 'Meeleven als luisteraar', es: 'Reaccionar a una historia',
        html: `<p>In het Spaans luister je niet stil. Een goede luisteraar reageert voortdurend, anders denkt de verteller dat het verhaal je niet boeit:</p>
<p>📌 <b>Verbazing</b>: <i><b>¡No me digas!</b></i> (je meent het!), <i><b>¿En serio?</b></i>, <i><b>¡No puede ser!</b></i>, en in Mexico <i><b>¡Híjole!</b></i> en <i>¡No manches!</i></p>
<p>📌 <b>Doorvragen</b>: <i><b>¿Y entonces?</b></i> (en toen?), <i><b>¿Y qué hiciste?</b></i>, <i>¿Y qué pasó?</i></p>
<p>📌 <b>Meevoelen</b>: <i><b>¡Qué susto!</b></i>, <i><b>¡Qué vergüenza!</b></i>, <i>¡Qué suerte!</i>, <i><b>¡Menos mal!</b></i> (gelukkig maar!).</p>
<p>📌 <b>Een oordeel</b> met <b>¡Qué + zelfstandig naamwoord + tan / más + bijvoeglijk naamwoord!</b>: <i>¡Qué historia <b>tan</b> buena!</i> · <i>¡Qué señor <b>más</b> amable!</i></p>
<p>📌 En met <b>¡Vaya…!</b>: <i>¡Vaya sorpresa!</i> (wat een verrassing!), <i>¡Vaya día!</i></p>`,
        table: [['je wilt…', 'je zegt…'], ['verbazing tonen', '¡No me digas! · ¿En serio?'], ['doorvragen', '¿Y entonces? · ¿Y qué hiciste?'], ['meevoelen', '¡Qué susto! · ¡Menos mal!'], ['een oordeel geven', '¡Qué historia tan buena!']],
        ex: [['¡No me digas! ¿Te la robaron?', 'Je meent het! Hebben ze hem gestolen?'], ['¡Qué historia tan buena! Menos mal que llevabas fruta.', 'Wat een goed verhaal! Gelukkig maar dat je fruit bij je had.']],
        sum: '¡No me digas! · ¿Y entonces? · ¡Qué susto! · ¡Menos mal! · ¡Qué historia tan buena!' }
    ],
    verbs: ['caerse', 'morirse', 'dejar', 'ver', 'pedir', 'correr', 'contar', 'perderse', 'conocer'], tenses: ['pret', 'imp', 'plus'],
    dialogue: {
      t: 'La última noche', place: 'Mérida 🇲🇽',
      lines: [
        ['Sofía', '¡Salud, amigos! Antes de que Mark se vaya, cada quien cuenta su mejor anécdota del viaje.', 'Proost, vrienden! Voordat Mark vertrekt, vertelt ieder zijn beste anekdote van de reis.'],
        ['Mateo', 'Empiezo yo. Resulta que en el cenote dejé la mochila en una piedra y, al salir del agua, ya no estaba.', 'Ik begin. Het zit zo: bij de cenote liet ik mijn rugzak op een steen liggen, en toen ik uit het water kwam, was hij weg.'],
        ['Mark', '¡No me digas! ¿Te la robaron?', 'Je meent het! Hebben ze hem gestolen?'],
        ['Mateo', 'Eso pensé. Estaba a punto de llamar a la policía cuando vi a un coatí arrastrándola hacia los árboles.', 'Dat dacht ik. Ik stond op het punt de politie te bellen toen ik een neusbeer zag die hem naar de bomen sleepte.'],
        ['Sofía', '¡Híjole! ¿Y qué hiciste?', 'Jeetje! En wat deed je?'],
        ['Mateo', 'Corrí detrás de él y por poco me caigo al agua otra vez. Total que le cambié la mochila por un plátano.', 'Ik rende achter hem aan en viel bijna weer in het water. Kortom, ik ruilde de rugzak met hem voor een banaan.'],
        ['Mark', '¡Qué historia tan buena! Menos mal que llevabas fruta.', 'Wat een goed verhaal! Gelukkig maar dat je fruit bij je had.'],
        ['Sofía', 'Pues la mía es de Mark. El otro día, en la heladería, pidió «un cenote de limón» en vez de un sorbete.', 'Nou, die van mij gaat over Mark. Laatst bestelde hij in de ijssalon «een cenote met citroen» in plaats van een sorbet.'],
        ['Mark', '¡Ay, qué vergüenza! Y el señor, muy serio, me contestó: «Aquí los cenotes son más grandes, joven».', 'O, wat gênant! En de man antwoordde heel serieus: «Hier zijn de cenotes groter, jongeman».'],
        ['Mateo', 'Ja, ja, ¡casi me muero de la risa!', 'Haha, ik lachte me bijna dood!'],
        ['Sofía', 'Al final, lo mejor del viaje no fueron los lugares, sino las historias. ¡Por Mark, que ya habla como uno de nosotros!', 'Uiteindelijk waren niet de plekken het mooiste van de reis, maar de verhalen. Op Mark, die al praat als een van ons!'],
        ['Mark', '¡Y por ustedes! Si no los hubiera conocido, no habría aprendido ni la mitad.', 'En op jullie! Als ik jullie niet had leren kennen, had ik nog niet de helft geleerd.']
      ],
      q: [
        { t: 'mc', q: '¿Quién se llevó la mochila de Mateo?', o: ['Un coatí', 'Un ladrón', 'Sofía'] },
        { t: 'mc', q: '¿Cómo recuperó Mateo la mochila?', o: ['La cambió por un plátano', 'Llamó a la policía', 'Se metió otra vez al agua'] },
        { t: 'mc', q: '¿Qué pidió Mark en la heladería?', o: ['Un «cenote» de limón', 'Una marquesita', 'Un plátano'] }
      ]
    },
    culture: { t: 'Mérida, de witte stad van Yucatán', html: `<p>🏛️ <b>Mérida</b>, de hoofdstad van de Mexicaanse deelstaat Yucatán, heet <i>la ciudad blanca</i>. In het centrum hebben de straten geen namen maar <b>nummers</b>: even nummers lopen van noord naar zuid, oneven van oost naar west. Verdwalen hoort erbij.</p>
<p>💧 Het schiereiland heeft bijna geen rivieren. Het water stroomt ondergronds en komt boven in duizenden <b>cenotes</b>, natuurlijke putten met helder, koel water. Voor de Maya's waren het heilige plekken; nu zwem je erin.</p>
<p>🛏️ Veel Yucateken slapen in een <b>hamaca</b>, ook als ze een bed hebben: het is koeler. En het <b>Maya</b> is hier een levende taal, die je op de markt en op de radio hoort.</p>
<p>🧀 's Avonds eet je op het plein een <b>marquesita</b>: een krokante opgerolde wafel, traditioneel gevuld met <i>queso de bola</i>. Dat is Nederlandse Edammer, die hier al meer dan een eeuw geliefd is. Een stukje thuis aan de andere kant van de oceaan.</p>
<p>🎓 Met deze les heb je <b>B2</b> afgerond. Je kunt nu dromen, twijfelen, debatteren, doorvertellen en een heel verhaal vertellen in het Spaans van Mexico tot Vuurland. <i>¡Felicidades!</i></p>` },
    ex: [
      { t: 'cloze', s: '___ que dejé la mochila en una piedra y desapareció.', a: ['Resulta'], o: ['Resulta', 'Total', 'Menos mal'], nl: 'Het zit zo: ik liet mijn rugzak op een steen liggen en hij verdween.', x: 'Zo begin je een verhaal.', tag: 'anecdote' },
      { t: 'cloze', s: '___ salir del agua, la mochila ya no estaba.', a: ['Al'], o: ['Al', 'En', 'De'], nl: 'Toen ik uit het water kwam, was de rugzak weg.', x: 'Al + infinitivo = toen ik…', tag: 'anecdote' },
      { t: 'cloze', s: 'Corrí detrás de él y por poco me ___ al agua.', h: 'caerse (yo)', a: ['caigo'], nl: 'Ik rende achter hem aan en viel bijna in het water.', x: 'Por poco + presente.', uitz: 'Na <b>por poco</b> gebruik je de <b>presente</b>, ook in een verhaal over vroeger: <i>por poco me caigo</i> = ik viel bijna. <b>Waarom?</b> Het is uiteindelijk niet gebeurd, en de presente maakt het levendig, alsof je het weer voor je ziet.', tag: 'anecdote' },
      { t: 'cloze', s: 'Estaba a punto de ___ a la policía cuando vi al coatí.', h: 'llamar', a: ['llamar'], nl: 'Ik stond op het punt de politie te bellen toen ik de neusbeer zag.', x: 'Estar a punto de + infinitivo.', tag: 'anecdote' },
      { t: 'cloze', s: 'Menos mal que ___ fruta en la mochila.', a: ['llevabas'], o: ['llevabas', 'llevaras', 'lleves'], nl: 'Gelukkig maar dat je fruit in je rugzak had.', x: 'Menos mal que + indicativo.', uitz: '<b>Menos mal que</b> drukt een gevoel uit, maar krijgt de <b>indicativo</b>. <b>Waarom?</b> Je deelt vooral een feit mee waar je blij om bent; er staat geen werkwoord van gevoel in. Vergelijk: <i>me alegra que lleves fruta</i>.', tag: 'anecdote' },
      { t: 'cloze', s: 'Caminábamos tranquilos y, ___, empezó a llover.', a: ['de pronto'], o: ['de pronto', 'total que', 'por lo menos'], nl: 'We liepen rustig en plotseling begon het te regenen.', tag: 'anecdote' },
      { t: 'cloze', s: 'Perdimos el bus y el taxi no llegó. ___ llegamos a medianoche.', a: ['Total que'], o: ['Total que', 'Por poco', 'Por casualidad'], nl: 'We misten de bus en de taxi kwam niet. Kortom, we kwamen om middernacht aan.', x: 'Total que rondt het verhaal af.', tag: 'anecdote' },
      { t: 'cloze', s: 'Cuando llegamos a la plaza, la fiesta ya ___.', h: 'terminar', a: ['había terminado'], nl: 'Toen we op het plein aankwamen, was het feest al afgelopen.', x: 'Wat daarvoor al gebeurd was: pluscuamperfecto.', tag: 'pluperfect' },
      { t: 'cloze', s: '¡Qué historia ___ buena!', a: ['tan', 'más'], o: ['tan', 'tanto', 'muy'], nl: 'Wat een goed verhaal!', x: '¡Qué + naamwoord + tan / más + bijvoeglijk naamwoord!', tag: 'anecdote' },
      { t: 'mc', q: 'Je vriend vertelt: «Y en eso, se fue la luz.» Wat zeg jij?', o: ['¿Y entonces?', 'De nada.', 'Igualmente.'], tag: 'anecdote' },
      { t: 'mc', q: '«Casi me muero del susto.» betekent:', o: ['Ik schrok me bijna dood.', 'Ik ga bijna dood.', 'Ik ben bijna nooit bang.'], tag: 'anecdote' },
      { t: 'mc', q: 'Welke zin geeft de achtergrond van het verhaal?', o: ['Hacía mucho calor y no había nadie.', 'De pronto sonó el teléfono.', 'Total que nos fuimos.'], x: 'Achtergrond staat in de imperfecto.', tag: 'pret-imp' },
      { t: 'mc', q: '«Total que…» gebruik je om:', o: ['het verhaal af te ronden', 'het verhaal te beginnen', 'te zeggen dat je iets niet gelooft'], tag: 'anecdote' },
      { t: 'mc', q: 'Het verhaal loopt goed af. Wat zeg je?', o: ['¡Menos mal!', '¡Qué horror!', '¡Qué vergüenza!'], tag: 'anecdote' },
      { t: 'mc', q: 'Wat is een «cenote»?', o: ['een natuurlijke put met helder water', 'een hangmat', 'een Maya-tempel'], tag: 'vocab' },
      { t: 'order', s: 'Estaba a punto de salir cuando sonó el teléfono.', nl: 'Ik stond op het punt te vertrekken toen de telefoon ging.', tag: 'anecdote' },
      { t: 'tr', nl: 'Ik viel bijna.', a: ['Por poco me caigo.', 'Casi me caigo.', 'Casi me caí.', 'Por poco me caí.'], tag: 'anecdote' },
      { t: 'tr', nl: 'Gelukkig maar dat je gekomen bent.', a: ['Menos mal que viniste.', 'Menos mal que has venido.', 'Menos mal que vino.', 'Menos mal que ha venido.'], tag: 'anecdote' },
      { t: 'match', p: [['resulta que', 'wat blijkt'], ['en eso', 'op dat moment'], ['total que', 'kortom'], ['por poco', 'bijna'], ['menos mal que', 'gelukkig maar dat']], tag: 'vocab' }
    ],
    say: [['Resulta que perdí el celular en el bus.', 'Het zit zo: ik ben mijn mobiel in de bus kwijtgeraakt.'], ['Por poco me caigo al agua.', 'Ik viel bijna in het water.'], ['¡No me digas! ¿Y entonces?', 'Je meent het! En toen?'], ['Menos mal que llegaste a tiempo.', 'Gelukkig maar dat je op tijd kwam.']],
    task: { nl: 'Vertel een anekdote van een reis of uit je dagelijks leven (8 tot 10 zinnen). Begin met El otro día… of Resulta que…, beschrijf de achtergrond in de imperfecto, gebruik de pronto of en eso, één keer por poco of estar a punto de… cuando, en sluit af met Total que… en Menos mal que…', model: 'El otro día me pasó algo muy gracioso. Resulta que tenía una reunión importante y, como siempre, iba tarde. Llovía mucho y no había taxis. De pronto vi uno libre y corrí hacia él; por poco me caigo en un charco. Al subir, le di la dirección al conductor y me puse a leer mis notas. En eso, el señor me dijo: «Joven, yo no soy taxista, estoy esperando a mi esposa». Me había equivocado de carro. Estaba a punto de bajarme cuando llegó la esposa y los dos se rieron a carcajadas. Total que me llevaron ellos a la reunión. Menos mal que todavía hay gente amable.' },
    scenario: { nl: 'Laatste avond in Mérida. Sofía wil jouw beste verhaal van de reis horen en vertelt er zelf ook een.', role: 'Eres Sofía, una mexicana de 27 años, la mejor amiga del estudiante en este viaje. Es la última noche en Mérida, Yucatán, y están cenando en una plaza. Eres alegre, curiosa y una excelente oyente: reaccionas todo el tiempo con «¡No me digas!», «¿Y entonces?», «¡Híjole!», «¡Qué susto!», «¡Menos mal!» y «¡Qué historia tan buena!». Le pides al estudiante que cuente una anécdota de su viaje o de su vida y haces preguntas para que dé más detalles. Después cuentas tú una anécdota corta usando «resulta que», «de pronto», «por poco» y «total que». Al final, brindas por él y lo felicitas por su español.', goal: 'Vertel een anekdote met begin, wending en afloop, en reageer minstens twee keer op het verhaal van Sofía.' },
    reading: {
      t: 'La vez que me perdí en Mérida', type: 'Verhaal',
      p: [
        ['El otro día me pasó algo que todavía me da risa. Era mi segunda noche en Mérida, hacía un calor terrible y yo había salido a buscar una marquesita. Como no conocía la ciudad, caminaba mirando el mapa del celular.',
          'Laatst overkwam me iets waar ik nog steeds om moet lachen. Het was mijn tweede avond in Mérida, het was vreselijk warm en ik was de deur uit gegaan om een marquesita te zoeken. Omdat ik de stad niet kende, liep ik met mijn ogen op de kaart op mijn mobiel.'],
        ['De pronto, el celular se apagó: me había quedado sin batería. Resulta que en el centro de Mérida las calles no tienen nombre, sino número, y todas me parecían igualitas. Al doblar una esquina, por poco choco con un señor que vendía hamacas.',
          'Plotseling viel mijn mobiel uit: de batterij was leeg. Wat blijkt: in het centrum van Mérida hebben de straten geen naam maar een nummer, en ze leken me allemaal precies hetzelfde. Toen ik een hoek om ging, botste ik bijna tegen een man op die hangmatten verkocht.'],
        ['Le pregunté por mi hotel, pero me equivoqué de nombre y le dije el de otro. El señor, muy amable, me acompañó quince cuadras… en la dirección contraria. En eso pasó una señora y nos dijo: «Ese hotel cerró hace diez años».',
          'Ik vroeg hem naar mijn hotel, maar ik vergiste me in de naam en noemde die van een ander. De man liep heel vriendelijk vijftien straten met me mee… in de verkeerde richting. Op dat moment kwam er een vrouw langs die zei: «Dat hotel is tien jaar geleden gesloten».'],
        ['Total que terminamos los tres riéndonos a carcajadas en una plaza. El señor llamó a su sobrino, que me llevó en moto hasta mi hotel de verdad. Menos mal que la gente de Mérida tiene tanta paciencia. Y sí: al final me comí la marquesita.',
          'Kortom, we stonden uiteindelijk met zijn drieën te schateren op een plein. De man belde zijn neef, die me op de motor naar mijn echte hotel bracht. Gelukkig maar dat de mensen in Mérida zo veel geduld hebben. En ja: uiteindelijk heb ik die marquesita gegeten.']
      ],
      gl: [['dar risa', 'aan het lachen maken'], ['apagarse', 'uitvallen, uitgaan'], ['doblar una esquina', 'een hoek omgaan'], ['chocar con', 'botsen tegen'], ['el sobrino', 'de neef (oomzegger)']],
      q: [
        { t: 'mc', q: '¿Por qué se perdió el narrador?', o: ['Porque se quedó sin batería y no conocía la ciudad', 'Porque llovía mucho', 'Porque el hotel había cerrado'] },
        { t: 'mc', q: '¿Qué tienen de especial las calles del centro de Mérida?', o: ['Tienen número en vez de nombre', 'No tienen luz', 'Todas llevan a la misma plaza'] },
        { t: 'mc', q: '¿Por qué caminaron en la dirección contraria?', o: ['Porque él se equivocó de nombre de hotel', 'Porque el señor no conocía la ciudad', 'Porque buscaban una marquesita'] },
        { t: 'mc', q: '¿Cómo llegó por fin a su hotel?', o: ['En la moto del sobrino del señor', 'Caminando quince cuadras', 'En el carro de la señora'] }
      ]
    }
  });

})(window.SPT);
