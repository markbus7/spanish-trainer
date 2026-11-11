/* Extra grammatica-oefeningen voor A2 en B1 (november 2026), zodat oefenen en unittoetsen minder op elkaar lijken.
   Alles wordt achteraan de bestaande unit toegevoegd (zie S.extendUnit), zodat je voortgang blijft kloppen. */
(function (S) {
  'use strict';
  const X = S.extendUnit;

  /* ======================= A2 ======================= */
  X('a2-01', { ex: [
    { t: 'cloze', s: 'Anoche nosotros ___ tacos al pastor.', h: 'cenar', a: ['cenamos'], nl: 'Gisteravond aten we tacos al pastor.', tag: 'pret-regular' },
    { t: 'cloze', s: 'Yo ___ el partido a las nueve.', h: 'empezar', a: ['empecé'], nl: 'Ik begon om negen uur aan de wedstrijd.', x: 'Empezar → empecé: z wordt c voor e.', tag: 'pret-regular' },
    { t: 'cloze', s: '¿A qué hora ___ ustedes del trabajo?', h: 'salir', a: ['salieron'], nl: 'Hoe laat gingen jullie van je werk weg?', tag: 'pret-regular' },
    { t: 'mc', q: 'Mi hermana ___ un libro muy bueno. (leer)', o: ['leyó', 'leió', 'lió'], x: 'Tussen twee klinkers wordt i een y: leyó, leyeron.', tag: 'pret-regular' },
    { t: 'order', s: 'El lunes pasado compré un celular nuevo.', nl: 'Afgelopen maandag kocht ik een nieuwe mobiel.', tag: 'pret-regular' },
    { t: 'tr', nl: 'Wij hebben gisteren de hele dag gewerkt.', a: ['Ayer trabajamos todo el día.', 'Nosotros trabajamos todo el día ayer.', 'Trabajamos todo el día ayer.'], x: 'In Latijns-Amerika: indefinido, niet «hemos trabajado».', tag: 'pret-regular' }
  ] });
  X('a2-02', { ex: [
    { t: 'cloze', s: 'El año pasado mis papás ___ a Cartagena.', h: 'ir', a: ['fueron'], nl: 'Vorig jaar gingen mijn ouders naar Cartagena.', tag: 'pret-irregular' },
    { t: 'cloze', s: '¿Dónde ___ (tú) las llaves?', h: 'poner', a: ['pusiste'], nl: 'Waar heb je de sleutels gelegd?', tag: 'pret-irregular' },
    { t: 'cloze', s: 'Nosotros no ___ ir a la playa por la lluvia.', h: 'poder', a: ['pudimos'], nl: 'We konden niet naar het strand vanwege de regen.', tag: 'pret-irregular' },
    { t: 'mc', q: 'Ellos me ___ la verdad. (decir)', o: ['dijeron', 'dijieron', 'decieron'], x: 'Na j valt de i weg: dijeron, trajeron, condujeron.', tag: 'pret-irregular' },
    { t: 'mc', q: '«Fue» kan betekenen:', o: ['hij ging én hij was', 'alleen hij ging', 'alleen hij was'], x: 'Ser en ir hebben in de indefinido dezelfde vormen. De zin maakt duidelijk welke bedoeld is.', tag: 'pret-irregular' },
    { t: 'tr', nl: 'Ik moest vroeg opstaan.', a: ['Tuve que levantarme temprano.', 'Me tuve que levantar temprano.', 'Tuve que despertarme temprano.'], tag: 'pret-irregular' }
  ] });
  X('a2-03', { ex: [
    { t: 'cloze', s: 'De niño, yo ___ en un pueblo pequeño.', h: 'vivir', a: ['vivía'], nl: 'Als kind woonde ik in een klein dorp.', tag: 'imperfect' },
    { t: 'cloze', s: 'Mi abuela siempre nos ___ cuentos.', h: 'contar', a: ['contaba'], nl: 'Mijn oma vertelde ons altijd verhaaltjes.', tag: 'imperfect' },
    { t: 'cloze', s: 'Antes nosotros ___ al colegio en bus.', h: 'ir', a: ['íbamos'], nl: 'Vroeger gingen we met de bus naar school.', tag: 'imperfect' },
    { t: 'mc', q: 'Welke vorm is GEEN imperfecto?', o: ['comí', 'comía', 'comíamos'], tag: 'imperfect' },
    { t: 'order', s: 'Cuando era chico me gustaba jugar en la calle.', nl: 'Toen ik klein was speelde ik graag op straat.', tag: 'imperfect' },
    { t: 'tr', nl: 'Vroeger had mijn vader een rode auto.', a: ['Antes mi papá tenía un carro rojo.', 'Antes mi padre tenía un carro rojo.', 'Antes mi papá tenía un auto rojo.', 'Mi papá antes tenía un carro rojo.'], tag: 'imperfect' }
  ] });
  X('a2-04', { ex: [
    { t: 'cloze', s: 'Mientras yo ___, sonó el teléfono.', a: ['cocinaba'], o: ['cocinaba', 'cociné', 'cocino'], nl: 'Terwijl ik aan het koken was, ging de telefoon.', x: 'Decor (aan de gang) = imperfecto, de onderbreking = indefinido.', tag: 'pret-imp' },
    { t: 'cloze', s: 'Era tarde y ___ mucho frío.', a: ['hacía'], o: ['hacía', 'hizo', 'hace'], nl: 'Het was laat en erg koud.', tag: 'pret-imp' },
    { t: 'cloze', s: 'De repente ___ un ruido muy fuerte.', a: ['escuchamos'], o: ['escuchamos', 'escuchábamos', 'escuchar'], nl: 'Plotseling hoorden we een heel hard geluid.', x: '«De repente» kondigt een gebeurtenis aan: indefinido.', tag: 'pret-imp' },
    { t: 'mc', q: '«Ayer conocí a Lucía.» Wat betekent «conocí» hier?', o: ['ik heb leren kennen', 'ik kende al', 'ik wist'], x: 'Conocer in de indefinido = voor het eerst ontmoeten.', tag: 'pret-imp' },
    { t: 'mc', q: '«No quise ir.» betekent:', o: ['Ik weigerde te gaan.', 'Ik had geen zin om te gaan.', 'Ik wil niet gaan.'], tag: 'pret-imp' },
    { t: 'tr', nl: 'Het regende toen we aankwamen.', a: ['Llovía cuando llegamos.', 'Estaba lloviendo cuando llegamos.', 'Cuando llegamos llovía.', 'Cuando llegamos, llovía.', 'Cuando llegamos estaba lloviendo.'], tag: 'pret-imp' }
  ] });
  X('a2-05', { ex: [
    { t: 'cloze', s: '¿Alguna vez ___ (tú) mole poblano?', h: 'probar', a: ['has probado'], nl: 'Heb je ooit mole poblano geproefd?', tag: 'perfect' },
    { t: 'cloze', s: 'Nunca he ___ una novela en español.', h: 'escribir', a: ['escrito'], nl: 'Ik heb nooit een roman in het Spaans geschreven.', tag: 'perfect' },
    { t: 'cloze', s: 'Mis amigos todavía no han ___ de Perú.', h: 'volver', a: ['vuelto'], nl: 'Mijn vrienden zijn nog niet terug uit Peru.', tag: 'perfect' },
    { t: 'mc', q: 'Participio van «romper»:', o: ['roto', 'rompido', 'rompto'], tag: 'perfect' },
    { t: 'cloze', s: 'Acabo de ___ con mi jefe.', a: ['hablar'], o: ['hablar', 'hablado', 'hablo'], nl: 'Ik heb net met mijn baas gesproken.', tag: 'periphrasis' },
    { t: 'tr', nl: 'Ik ben nog nooit in Bolivia geweest.', a: ['Nunca he estado en Bolivia.', 'Todavía no he estado en Bolivia.', 'Nunca he ido a Bolivia.', 'No he estado nunca en Bolivia.'], tag: 'perfect' }
  ] });
  X('a2-06', { ex: [
    { t: 'cloze', s: 'A mi hijo le ___ los oídos.', a: ['duelen'], o: ['duelen', 'duele', 'duelo'], nl: 'Mijn zoon heeft oorpijn.', x: 'Meervoud (los oídos) → duelen.', tag: 'doler' },
    { t: 'cloze', s: '¿Te ___ la garganta?', a: ['duele'], o: ['duele', 'duelen', 'dueles'], nl: 'Heb je keelpijn?', tag: 'doler' },
    { t: 'cloze', s: 'Usted ___ tomar mucha agua.', a: ['debe'], o: ['debe', 'tiene', 'hay'], nl: 'U moet veel water drinken.', tag: 'obligation' },
    { t: 'mc', q: '«Hay que descansar.» betekent:', o: ['Je moet rusten (algemeen).', 'Er is rust.', 'Hij moet rusten.'], tag: 'obligation' },
    { t: 'order', s: 'Me duele mucho la cabeza desde ayer.', nl: 'Ik heb sinds gisteren erge hoofdpijn.', tag: 'doler' },
    { t: 'tr', nl: 'Ik heb buikpijn.', a: ['Me duele el estómago.', 'Me duele la panza.', 'Me duele la barriga.', 'Tengo dolor de estómago.'], x: 'In Mexico zeg je vaak «la panza».', tag: 'doler' }
  ] });
  X('a2-07', { ex: [
    { t: 'cloze', s: '¿Las flores? Yo ___ compré en el mercado.', a: ['las'], o: ['las', 'les', 'los'], nl: 'De bloemen? Die heb ik op de markt gekocht.', tag: 'object-pron' },
    { t: 'cloze', s: 'A mi mamá ___ regalé un perfume.', a: ['le'], o: ['le', 'la', 'lo'], nl: 'Ik gaf mijn moeder een parfum.', tag: 'object-pron' },
    { t: 'cloze', s: '¿El libro? Ya ___ di a Pedro.', a: ['se lo'], o: ['se lo', 'le lo', 'lo le'], nl: 'Het boek? Dat heb ik al aan Pedro gegeven.', x: 'Le + lo wordt se lo.', tag: 'object-pron' },
    { t: 'mc', q: '«Te lo explico.» betekent:', o: ['Ik leg het je uit.', 'Jij legt het mij uit.', 'Ik leg het hem uit.'], tag: 'object-pron' },
    { t: 'order', s: 'Mis amigos me la mandaron ayer.', nl: 'Mijn vrienden hebben hem (de foto) me gisteren gestuurd.', tag: 'object-pron' },
    { t: 'tr', nl: 'Kun je het mij lenen?', a: ['¿Me lo puedes prestar?', '¿Puedes prestármelo?', '¿Me la puedes prestar?', '¿Puedes prestármela?', '¿Me lo prestas?'], tag: 'object-pron' }
  ] });
  X('a2-08', { ex: [
    { t: 'cloze', s: 'Lima es ___ grande que Cusco.', a: ['más'], o: ['más', 'tan', 'muy'], nl: 'Lima is groter dan Cusco.', tag: 'comparatives' },
    { t: 'cloze', s: 'Mi barrio es tan tranquilo ___ el tuyo.', a: ['como'], o: ['como', 'que', 'de'], nl: 'Mijn wijk is net zo rustig als de jouwe.', tag: 'comparatives' },
    { t: 'cloze', s: 'Este café es ___ que el de ayer.', a: ['mejor'], o: ['mejor', 'más bueno', 'buenísimo'], nl: 'Deze koffie is beter dan die van gisteren.', tag: 'comparatives' },
    { t: 'mc', q: 'La comida aquí es ___. (heel lekker)', o: ['riquísima', 'muy riquísima', 'más rica'], tag: 'comparatives' },
    { t: 'mc', q: 'Medellín tiene más ___ dos millones de habitantes.', o: ['de', 'que', 'como'], x: 'Bij getallen: más de.', tag: 'comparatives' },
    { t: 'tr', nl: 'Bogotá is de grootste stad van Colombia.', a: ['Bogotá es la ciudad más grande de Colombia.'], tag: 'comparatives' }
  ] });
  X('a2-09', { ex: [
    { t: 'cloze', s: 'El próximo año ___ (yo) un trabajo nuevo.', h: 'tener', a: ['tendré'], nl: 'Volgend jaar heb ik een nieuwe baan.', tag: 'future' },
    { t: 'cloze', s: 'Mañana ___ calor en Monterrey.', h: 'hacer', a: ['hará'], nl: 'Morgen wordt het warm in Monterrey.', tag: 'future' },
    { t: 'cloze', s: '¿Qué ___ ustedes después de la universidad?', h: 'hacer', a: ['harán'], nl: 'Wat gaan jullie doen na de universiteit?', tag: 'future' },
    { t: 'cloze', s: 'Trabajo ___ ganar dinero.', a: ['para'], o: ['para', 'por'], nl: 'Ik werk om geld te verdienen.', tag: 'por-para' },
    { t: 'cloze', s: 'Gracias ___ tu ayuda.', a: ['por'], o: ['por', 'para'], nl: 'Bedankt voor je hulp.', tag: 'por-para' },
    { t: 'tr', nl: 'Ik zal je morgen bellen.', a: ['Te llamaré mañana.', 'Mañana te llamaré.', 'Te voy a llamar mañana.', 'Mañana te voy a llamar.'], tag: 'future' }
  ] });
  X('a2-10', { ex: [
    { t: 'cloze', s: '¡___ la puerta, por favor! (tú, cerrar)', a: ['Cierra'], nl: 'Doe de deur dicht, alsjeblieft!', tag: 'imperative' },
    { t: 'cloze', s: '___ aquí, señora. (sentarse, usted)', a: ['Siéntese'], nl: 'Gaat u hier zitten, mevrouw.', tag: 'imperative' },
    { t: 'cloze', s: '___ temprano, chicos. (venir, ustedes)', a: ['Vengan'], nl: 'Kom vroeg, jongens.', tag: 'imperative' },
    { t: 'mc', q: 'Imperativo van «hacer» voor tú:', o: ['haz', 'hace', 'haga'], tag: 'imperative' },
    { t: 'mc', q: '«Dímelo.» betekent:', o: ['Zeg het me.', 'Ik zeg het je.', 'Zeg het hem.'], tag: 'imperative' },
    { t: 'tr', nl: 'Neem de eerste straat rechts. (usted)', a: ['Tome la primera calle a la derecha.', 'Agarre la primera calle a la derecha.', 'Tome la primera a la derecha.'], tag: 'imperative' }
  ] });
  X('a2-11', { ex: [
    { t: 'cloze', s: 'No hay ___ en la oficina.', a: ['nadie'], o: ['nadie', 'alguien', 'nada'], nl: 'Er is niemand op kantoor.', tag: 'negation' },
    { t: 'cloze', s: 'No compré ___ en el mercado.', a: ['nada'], o: ['nada', 'algo', 'nunca'], nl: 'Ik heb niets op de markt gekocht.', tag: 'negation' },
    { t: 'cloze', s: '¿Tienes ___ libro de cocina?', a: ['algún'], o: ['algún', 'alguno', 'ningún'], nl: 'Heb je een kookboek?', x: 'Voor een mannelijk woord: algún, ningún.', tag: 'negation' },
    { t: 'cloze', s: '¿Quieres venir ___?', a: ['conmigo'], o: ['conmigo', 'con mí', 'con yo'], nl: 'Wil je met mij meekomen?', tag: 'prep-pron' },
    { t: 'mc', q: '«Tampoco» betekent:', o: ['ook niet', 'ook', 'nooit'], tag: 'negation' },
    { t: 'tr', nl: 'Ik heb nooit iemand gezien.', a: ['Nunca he visto a nadie.', 'Nunca vi a nadie.', 'No he visto nunca a nadie.', 'No vi nunca a nadie.'], tag: 'negation' }
  ] });
  X('a2-12', { ex: [
    { t: 'cloze', s: 'Este es el barrio ___ crecí.', a: ['donde'], o: ['donde', 'que', 'lo que'], nl: 'Dit is de wijk waar ik ben opgegroeid.', tag: 'relative' },
    { t: 'cloze', s: 'No entiendo ___ dices.', a: ['lo que'], o: ['lo que', 'que', 'qué'], nl: 'Ik begrijp niet wat je zegt.', tag: 'relative' },
    { t: 'cloze', s: 'En Chile ___ come mucho pan.', a: ['se'], o: ['se', 'le', 'uno se'], nl: 'In Chili eet men veel brood.', tag: 'se-impersonal' },
    { t: 'cloze', s: 'Me gusta la ciudad, ___ es un poco cara.', a: ['pero'], o: ['pero', 'porque', 'entonces'], nl: 'Ik vind de stad leuk, maar hij is wat duur.', tag: 'connectors' },
    { t: 'mc', q: 'No salí ___ estaba cansado.', o: ['porque', 'por eso', 'aunque'], tag: 'connectors' },
    { t: 'tr', nl: 'Hier spreekt men Spaans.', a: ['Aquí se habla español.', 'Acá se habla español.'], tag: 'se-impersonal' }
  ] });

  /* ======================= B1 ======================= */
  X('b1-01', { ex: [
    { t: 'cloze', s: 'Ojalá que ___ buen tiempo el sábado.', h: 'hacer', a: ['haga'], nl: 'Hopelijk is het zaterdag mooi weer.', tag: 'subj-wish' },
    { t: 'cloze', s: 'Mi jefa quiere que nosotros ___ más temprano.', h: 'empezar', a: ['empecemos'], nl: 'Mijn baas wil dat we eerder beginnen.', x: 'Empezar → empiece, maar nosotros: empecemos.', tag: 'subj-wish' },
    { t: 'cloze', s: 'Te recomiendo que ___ el ceviche.', h: 'probar', a: ['pruebes'], nl: 'Ik raad je aan de ceviche te proberen.', tag: 'subj-wish' },
    { t: 'mc', q: 'Subjuntivo van «estar» (yo):', o: ['esté', 'este', 'estoy'], x: 'Let op het accent: esté. «Este» is «deze».', tag: 'subj-wish' },
    { t: 'order', s: 'Espero que te vaya muy bien en el examen.', nl: 'Ik hoop dat je examen heel goed gaat.', tag: 'subj-wish' },
    { t: 'tr', nl: 'Ik wil dat je me helpt.', a: ['Quiero que me ayudes.', 'Necesito que me ayudes.'], tag: 'subj-wish' }
  ] });
  X('b1-02', { ex: [
    { t: 'cloze', s: 'No creo que Ana ___ razón.', h: 'tener', a: ['tenga'], nl: 'Ik denk niet dat Ana gelijk heeft.', tag: 'subj-opinion' },
    { t: 'cloze', s: 'Creo que Ana ___ razón.', h: 'tener', a: ['tiene'], nl: 'Ik denk dat Ana gelijk heeft.', x: 'Bevestigend creo que → indicativo.', tag: 'subj-opinion' },
    { t: 'cloze', s: 'Es importante que todos ___ a tiempo a la reunión.', h: 'llegar', a: ['lleguen'], nl: 'Het is belangrijk dat iedereen op tijd op de vergadering is.', tag: 'subj-opinion' },
    { t: 'cloze', s: 'Me alegra que ustedes ___ aquí.', h: 'estar', a: ['estén'], nl: 'Ik ben blij dat jullie hier zijn.', tag: 'subj-emotion' },
    { t: 'mc', q: 'Es verdad que el examen ___ difícil.', o: ['es', 'sea', 'ser'], x: 'Es verdad / es cierto / es obvio que → indicativo.', tag: 'subj-opinion' },
    { t: 'tr', nl: 'Het is mogelijk dat het morgen regent.', a: ['Es posible que llueva mañana.', 'Es posible que mañana llueva.', 'Puede que llueva mañana.', 'Puede ser que llueva mañana.'], tag: 'subj-opinion' }
  ] });
  X('b1-03', { ex: [
    { t: 'cloze', s: 'Cuando ___ a casa, te llamo.', h: 'llegar, yo', a: ['llegue'], nl: 'Als ik thuiskom, bel ik je.', tag: 'subj-time' },
    { t: 'cloze', s: 'Cuando ___ a casa, siempre te llamo.', h: 'llegar, yo', a: ['llego'], nl: 'Als ik thuiskom, bel ik je altijd.', x: 'Een gewoonte → indicativo.', tag: 'subj-time' },
    { t: 'cloze', s: 'Te lo explico para que lo ___.', h: 'entender', a: ['entiendas'], nl: 'Ik leg het je uit zodat je het begrijpt.', tag: 'subj-purpose' },
    { t: 'cloze', s: 'Salimos antes de que ___ a llover.', h: 'empezar', a: ['empiece'], nl: 'We gaan weg voordat het begint te regenen.', tag: 'subj-purpose' },
    { t: 'mc', q: 'En cuanto ___ el dinero, te pago.', o: ['tenga', 'tengo', 'tendré'], tag: 'subj-time' },
    { t: 'tr', nl: 'Bel me als je in Quito bent.', a: ['Llámame cuando estés en Quito.', 'Llámame cuando llegues a Quito.', 'Cuando estés en Quito, llámame.', 'Cuando llegues a Quito, llámame.'], tag: 'subj-time' }
  ] });
  X('b1-04', { ex: [
    { t: 'cloze', s: 'Yo que tú, ___ con ella.', h: 'hablar', a: ['hablaría'], nl: 'Als ik jou was, zou ik met haar praten.', tag: 'conditional' },
    { t: 'cloze', s: '¿___ (usted) cerrar la ventana, por favor?', h: 'poder', a: ['Podría'], nl: 'Zou u het raam dicht willen doen?', tag: 'conditional' },
    { t: 'cloze', s: 'Con más tiempo, nosotros ___ más.', h: 'viajar', a: ['viajaríamos'], nl: 'Met meer tijd zouden we meer reizen.', tag: 'conditional' },
    { t: 'mc', q: 'Condicional van «decir» (ellos):', o: ['dirían', 'decirían', 'dicerían'], tag: 'conditional' },
    { t: 'mc', q: '«Serían las diez cuando llegó.» betekent:', o: ['Het zal ongeveer tien uur geweest zijn toen hij kwam.', 'Het wordt tien uur als hij komt.', 'Het was precies tien uur.'], x: 'Condicional voor een vermoeden over het verleden.', tag: 'conditional' },
    { t: 'tr', nl: 'Ik zou graag een koffie willen.', a: ['Me gustaría un café.', 'Quisiera un café.', 'Me gustaría tomar un café.'], tag: 'conditional' }
  ] });
  X('b1-05', { ex: [
    { t: 'cloze', s: 'Cuando llegamos, la película ya ___.', h: 'empezar', a: ['había empezado'], nl: 'Toen we aankwamen, was de film al begonnen.', tag: 'pluperfect' },
    { t: 'cloze', s: 'Nunca ___ (yo) tanta nieve antes.', h: 'ver', a: ['había visto'], nl: 'Ik had nog nooit zoveel sneeuw gezien.', tag: 'pluperfect' },
    { t: 'cloze', s: 'Ellos ya se ___ cuando sonó la alarma.', h: 'despertar', a: ['habían despertado'], nl: 'Ze waren al wakker toen de wekker ging.', tag: 'pluperfect' },
    { t: 'mc', q: 'Pluscuamperfecto van «hacer» (tú):', o: ['habías hecho', 'habías hacido', 'hubiste hecho'], tag: 'pluperfect' },
    { t: 'order', s: 'Me dijo que ya había comido.', nl: 'Hij zei dat hij al had gegeten.', tag: 'pluperfect' },
    { t: 'tr', nl: 'Ze had haar paspoort thuis vergeten.', a: ['Había olvidado su pasaporte en casa.', 'Se le había olvidado el pasaporte en casa.', 'Ella había olvidado su pasaporte en casa.', 'Había dejado su pasaporte en casa.'], tag: 'pluperfect' }
  ] });
  X('b1-06', { ex: [
    { t: 'cloze', s: '¡No ___ tan rápido! (tú, manejar)', a: ['manejes'], nl: 'Rij niet zo hard!', tag: 'neg-imperative' },
    { t: 'cloze', s: 'No ___ nada a nadie. (tú, decir)', a: ['digas'], nl: 'Zeg niets tegen niemand.', tag: 'neg-imperative' },
    { t: 'cloze', s: 'Por favor, no ___ aquí. (ustedes, fumar)', a: ['fumen'], nl: 'Alstublieft niet roken hier.', tag: 'neg-imperative' },
    { t: 'mc', q: 'Ontkenning van «Dímelo»:', o: ['No me lo digas.', 'No dímelo.', 'No me lo dices.'], tag: 'neg-imperative' },
    { t: 'mc', q: '«No te vayas.» betekent:', o: ['Ga niet weg.', 'Je gaat niet weg.', 'Ga weg.'], tag: 'neg-imperative' },
    { t: 'tr', nl: 'Maak je geen zorgen, alles komt goed.', a: ['No te preocupes, todo va a salir bien.', 'No te preocupes, todo saldrá bien.', 'No te preocupes, todo va a estar bien.', 'Tranquilo, todo va a salir bien.'], tag: 'neg-imperative' }
  ] });
  X('b1-07', { ex: [
    { t: 'cloze', s: '«Estoy cansada.» → Ella dijo que ___ cansada.', a: ['estaba'], o: ['estaba', 'está', 'estuvo'], nl: 'Ze zei dat ze moe was.', tag: 'reported' },
    { t: 'cloze', s: '«Voy a llamar.» → Dijo que ___ a llamar.', a: ['iba'], o: ['iba', 'va', 'fue'], nl: 'Hij zei dat hij zou bellen.', tag: 'reported' },
    { t: 'cloze', s: '«Lo terminaré mañana.» → Dijo que lo ___ al día siguiente.', a: ['terminaría'], o: ['terminaría', 'terminará', 'terminaba'], nl: 'Hij zei dat hij het de volgende dag zou afmaken.', tag: 'reported' },
    { t: 'cloze', s: '«Ven a las ocho.» → Me pide que ___ a las ocho.', a: ['venga'], o: ['venga', 'vengo', 'ven'], nl: 'Ze vraagt me om acht uur te komen.', x: 'Een verzoek doorgeven: pedir que + subjuntivo.', tag: 'reported' },
    { t: 'mc', q: '«¿Tienes hambre?» → Me preguntó ___ tenía hambre.', o: ['si', 'que', 'qué'], tag: 'reported' },
    { t: 'tr', nl: 'Hij zegt dat hij morgen komt.', a: ['Dice que viene mañana.', 'Dice que vendrá mañana.', 'Dice que va a venir mañana.'], x: 'Dice que (heden) → geen tijdsverschuiving.', tag: 'reported' }
  ] });
  X('b1-08', { ex: [
    { t: 'cloze', s: 'Si ___ el bus, llegaremos tarde.', h: 'perder, nosotros', a: ['perdemos'], nl: 'Als we de bus missen, komen we te laat.', x: 'Si + presente, nooit si + futuro.', tag: 'si-clause' },
    { t: 'cloze', s: 'Si reciclamos más, ___ menos basura.', h: 'haber', a: ['habrá'], nl: 'Als we meer recyclen, zal er minder afval zijn.', tag: 'si-clause' },
    { t: 'cloze', s: 'Te presto el carro siempre que lo ___ con cuidado.', h: 'manejar', a: ['manejes'], nl: 'Ik leen je de auto, mits je voorzichtig rijdt.', tag: 'subj-opinion' },
    { t: 'mc', q: 'No iremos a menos que ___ buen tiempo.', o: ['haga', 'hace', 'hará'], tag: 'subj-opinion' },
    { t: 'order', s: 'Si apagas la luz, ahorras energía.', nl: 'Als je het licht uitdoet, bespaar je energie.', tag: 'si-clause' },
    { t: 'tr', nl: 'Als je wilt, kunnen we samen gaan.', a: ['Si quieres, podemos ir juntos.', 'Si quieres podemos ir juntos.', 'Si quieres, podemos ir juntas.', 'Podemos ir juntos si quieres.'], tag: 'si-clause' }
  ] });
  X('b1-09', { ex: [
    { t: 'cloze', s: 'Cuando vio el precio, se ___ pálido.', a: ['puso'], o: ['puso', 'volvió', 'hizo'], nl: 'Toen hij de prijs zag, werd hij bleek.', x: 'Ponerse = een tijdelijke verandering (kleur, stemming).', tag: 'become' },
    { t: 'cloze', s: 'Con los años, mi abuelo se ___ muy sabio.', a: ['volvió'], o: ['volvió', 'puso', 'quedó'], nl: 'Met de jaren werd mijn opa erg wijs.', tag: 'become' },
    { t: 'cloze', s: 'Después del accidente se ___ ciego.', a: ['quedó'], o: ['quedó', 'puso', 'hizo'], nl: 'Na het ongeluk werd hij blind.', tag: 'become' },
    { t: 'cloze', s: 'Ella se ___ médica después de muchos años de estudio.', a: ['hizo'], o: ['hizo', 'puso', 'quedó'], nl: 'Na jaren studie werd ze arts.', x: 'Hacerse = worden door eigen inzet.', tag: 'become' },
    { t: 'mc', q: '«Juan es listo» vs. «Juan está listo»:', o: ['slim vs. klaar', 'klaar vs. slim', 'allebei slim'], tag: 'ser-estar' },
    { t: 'tr', nl: 'Ik word nerveus als ik moet spreken.', a: ['Me pongo nervioso cuando tengo que hablar.', 'Me pongo nerviosa cuando tengo que hablar.', 'Me pongo nervioso cuando hablo.', 'Cuando tengo que hablar me pongo nervioso.'], tag: 'become' }
  ] });
  X('b1-10', { ex: [
    { t: 'cloze', s: 'Aunque ___ cansado, voy a ir. (ik ben het echt)', h: 'estar', a: ['estoy'], nl: 'Hoewel ik moe ben, ga ik.', x: 'Een feit → aunque + indicativo.', tag: 'argument' },
    { t: 'cloze', s: 'Aunque ___ mañana, iremos a la playa. (misschien)', h: 'llover', a: ['llueva'], nl: 'Zelfs als het morgen regent, gaan we naar het strand.', x: 'Onzeker → aunque + subjuntivo.', tag: 'argument' },
    { t: 'mc', q: 'Welk woord leidt een tegenargument in?', o: ['Sin embargo', 'Además', 'Por lo tanto'], tag: 'argument' },
    { t: 'mc', q: '«Por lo tanto» betekent:', o: ['daarom', 'bovendien', 'hoewel'], tag: 'argument' },
    { t: 'order', s: 'Por un lado es barato, pero por otro lado es lento.', nl: 'Aan de ene kant is het goedkoop, maar aan de andere kant is het traag.', tag: 'argument' },
    { t: 'tr', nl: 'Daar ben ik het niet mee eens.', a: ['No estoy de acuerdo con eso.', 'No estoy de acuerdo.', 'Con eso no estoy de acuerdo.'], tag: 'argument' }
  ] });
})(window.SPT);
