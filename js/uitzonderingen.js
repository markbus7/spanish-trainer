/* ⚠️ Uitzonderingen altijd duidelijk benoemen (Mark, 2026-11-25).
   Komt in een zin, antwoord of nieuw woord een bekende uitzondering voor (el tema, la mano, el agua,
   ¿dónde es la fiesta?, tengo, went, het meisje …), dan toont de app een herkenbaar blok
   «⚠️ Uitzondering» met de reden. Werkt voor elke cursus, ook voor nieuwe lesstof: de regels
   herkennen patronen, onregelmatige werkwoordsvormen komen automatisch uit de vervoegingsmachine.

   Regel: { p: patroon (reguliere expressie op de zin in kleine letters, woorden met één spatie,
            zonder leestekens), t: korte titel, html: uitleg mét de reden,
            soft: true → alleen tonen als het woord zelf gevraagd werd (invulgat, woordkaart, fout woord),
            verb: true → werkwoordsvorm (zelfde regel als soft) }
   Wil je een uitzondering direct in de lesstof zetten? Geef de oefening uitz: 'uitleg met reden'.
   Grammatica: een alinea die met «Uitzondering» begint, krijgt vanzelf de uitzonderingsstijl;
   extra uitzonderingen per grammaticaonderdeel staan in GRAMMAR hieronder (sleutel = titel). */
(function (S) {
  'use strict';

  /* ================= Spaans (uitleg in het Nederlands) ================= */
  const ART_M = '(?:el|un|los|unos|este|ese|aquel|estos|esos|aquellos|del|al|otro|otros|mismo|primer|buen|mal|gran|nuevo|nuevos|nuestro|nuestros|ningún|algún|cada|qué|cuál|todo el|todos los|mucho|muchos|poco|pocos)';
  const ES = [
    { p: ART_M + '? ?(?:problemas?|temas?|idiomas?|sistemas?|programas?|climas?|dramas?|poemas?|dilemas?|esquemas?|crucigramas?|diplomas?|panoramas?|síntomas?|enigmas?|fantasmas?|pijamas?|piyamas?|carismas?|traumas?|aromas?|telegramas?)(?: (?:muy |tan |más )?\\p{L}+os?(?!\\p{L}))?',
      t: 'el problema, el tema, el idioma … (mannelijk op -ma)',
      html: 'Deze woorden eindigen op <b>-a</b>, maar zijn <b>mannelijk</b>: <i>el problema, el tema, el idioma, el sistema, el programa, el clima</i>. <b>Waarom?</b> Ze komen uit het Grieks, waar woorden op <b>-ma</b> onzijdig waren; het Spaans maakte ze mannelijk. Dus ook: <i>un problema grave, un idioma bonito</i>.' },
    { p: ART_M + '? ?(?:mapas?|planetas?|sofás?|tranvías?)(?: (?:muy |tan |más )?\\p{L}+os?(?!\\p{L}))?',
      t: 'el mapa, el planeta, el sofá (mannelijk op -a)',
      html: '<b>El mapa, el planeta, el sofá, el tranvía</b> eindigen op <b>-a</b> maar zijn <b>mannelijk</b>. <b>Waarom?</b> Het zijn oude leenwoorden (uit het Latijn, Grieks en Frans) die hun mannelijke geslacht hielden. Je leert ze gewoon met <i>el</i> erbij.' },
    { p: '(?:el|un|los|unos|este|ese|estos|esos|cada|todo el|todos los|qué|buen|mal|primer|otro|otros|mismo) días?', soft: true,
      t: 'el día (mannelijk op -a)',
      html: '<b>El día</b> eindigt op <b>-a</b>, maar is <b>mannelijk</b>: <i>buenos días, todos los días, un día largo</i>. <b>Waarom?</b> Het komt van het Latijnse <i>dies</i>, dat mannelijk was; de -a kwam er later bij.' },
    { p: '(?:(?:la|una|las|unas|esta|esa|estas|esas|mi|tu|su|mis|tus|sus|otra|otras|cada|toda la) )?manos?(?: (?:muy |tan )?\\p{L}+as?(?!\\p{L}))?',
      t: 'la mano (vrouwelijk op -o)',
      html: '<b>La mano</b> eindigt op <b>-o</b>, maar is <b>vrouwelijk</b>: <i>la mano derecha, las manos frías</i>. <b>Waarom?</b> Het Latijnse <i>manus</i> was al vrouwelijk, en dat bleef zo. Het is een van de weinige vrouwelijke woorden op -o.' },
    { p: '(?:(?:la|una|las|unas|esta|esa|estas|esas|mi|tu|su|mis|tus|sus|otra|nueva|primera) )?(?:fotos?|motos?)(?: (?:muy |tan )?\\p{L}+as?(?!\\p{L}))?',
      t: 'la foto, la moto (vrouwelijk op -o)',
      html: '<b>La foto</b> en <b>la moto</b> eindigen op <b>-o</b>, maar zijn <b>vrouwelijk</b>. <b>Waarom?</b> Het zijn afkortingen van <i>la fotografía</i> en <i>la motocicleta</i>; ze houden het geslacht van het lange woord.' },
    { p: '(?:la|una|el|un|esta|este|mi|tu|su) radio',
      t: 'la radio / el radio',
      html: '<b>Radio</b> eindigt op -o, maar <b>la radio</b> (de omroep, het programma) is <b>vrouwelijk</b>, want het is kort voor <i>la radiodifusión</i>. Het <b>toestel</b> heet in 🇲🇽 Mexico, Midden-Amerika en 🇨🇴 Colombia vaak <i>el radio</i>.' },
    { p: '(?:el|un|del|al|mucha|poca|esta|esa|las|unas|toda el|tanta) (?:agua|aguas|águila|águilas|hambre|arma|armas|área|áreas|alma|almas|aula|aulas|hacha|ave|aves|habla)(?: (?:muy |tan |más )?\\p{L}+as?(?!\\p{L}))?',
      t: 'el agua, el hambre, el aula (vrouwelijk mét el)',
      html: '<b>El agua</b>, <b>el hambre</b>, <b>el aula</b>, <b>el área</b>, <b>el alma</b> zijn <b>vrouwelijke</b> woorden, toch zeg je <b>el</b> (en <i>un</i>). <b>Waarom?</b> Ze beginnen met een beklemtoonde <b>a-</b>; <i>la agua</i> klinkt als één lange a, dus het lidwoord wordt <i>el</i>. De rest blijft vrouwelijk: <i>el agua fría</i>, <i>las aguas</i>, <i>mucha hambre</i>.' },
    { p: 'la gente',
      t: 'la gente (enkelvoud)',
      html: '<b>La gente</b> (de mensen) is in het Spaans <b>enkelvoud</b> en <b>vrouwelijk</b>: <i>la gente es amable</i>, niet <s>la gente son</s>. <b>Waarom?</b> Het is een verzamelwoord, zoals ons «het volk». Voor meerdere personen zeg je <i>las personas son…</i>' },
    { p: '(?:(?:el|un|los|unos|del|al|este|ese) )?(?:avión|aviones|camión|camiones)',
      t: 'el avión, el camión (mannelijk op -ión)',
      html: 'Woorden op <b>-ión</b> zijn bijna altijd vrouwelijk (<i>la canción, la estación</i>), maar <b>el avión</b> en <b>el camión</b> zijn <b>mannelijk</b>. <b>Waarom?</b> Hier is <i>-ión</i> geen achtervoegsel (zoals in <i>la acción</i>); het woord zelf eindigt toevallig zo.' },
    { p: '(?:el|un|los|unos|este|ese|del|al|nuestro|otro) (?:turistas?|artistas?|dentistas?|periodistas?|taxistas?|futbolistas?|recepcionistas?|guitarristas?|pianistas?|electricistas?|economistas?|deportistas?|guías?|policías?|atletas?|astronautas?|colegas?|psiquiatras?|pilotos?)',
      t: 'el turista, el periodista (man op -a)',
      html: 'Beroepen op <b>-ista</b> (en <i>guía, policía, atleta, colega</i>) eindigen op <b>-a</b>, ook voor een <b>man</b>: <i>el turista, el periodista, el policía</i>. <b>Waarom?</b> De vorm verandert niet; alleen het lidwoord laat zien of het een man of vrouw is (<i>la turista</i>).' },
    { p: '(?:la|una|las|unas) (?:personas?|víctimas?)',
      t: 'la persona (altijd vrouwelijk)',
      html: '<b>La persona</b> en <b>la víctima</b> zijn <b>altijd vrouwelijk</b>, ook als het om een man gaat: <i>Mateo es una persona muy simpática</i>. <b>Waarom?</b> Het geslacht hoort bij het woord, niet bij de persoon.' },
    { p: '(?:a|de) (?:el salvador|el cairo)',
      t: 'a El Salvador (geen al/del)',
      html: 'Normaal wordt <i>a + el = al</i> en <i>de + el = del</i>. <b>Uitzondering:</b> bij een <b>naam</b> waar <i>El</i> bij hoort, trek je niet samen: <i>Voy a El Salvador</i>, <i>soy de El Salvador</i>. <b>Waarom?</b> <i>El</i> is daar een deel van de naam.' },
    { p: '(?:a|de) él', soft: true,
      t: 'a él, de él (geen al/del)',
      html: '<i>a + el = al</i> en <i>de + el = del</i> geldt alleen voor het lidwoord <i>el</i>. Bij <b>él</b> (hij, met accent) trek je niet samen: <i>le doy el libro a él</i>, <i>hablamos de él</i>.' },
    { p: '(?:dónde|donde) (?:es|fue|será|son|fueron) (?:la|el|las|los) \\p{L}+|(?:fiesta|fiestas|concierto|conciertos|reunión|boda|cena|partido|evento|examen|ceremonia|conferencia|exposición|desfile|carnaval|festival|clase|entrevista|cita)(?: \\p{L}+){0,3}? (?:es|fue|será|son|va a ser) en',
      t: '¿Dónde es la fiesta? (ser voor een plek)',
      html: 'Voor een <b>plek</b> gebruik je normaal <b>estar</b> (<i>el banco está en la plaza</i>). <b>Uitzondering:</b> bij een <b>evenement</b> (feest, concert, vergadering, les, examen) gebruik je <b>ser</b>: <i>¿Dónde es la fiesta? La fiesta es en mi casa.</i> <b>Waarom?</b> <i>Ser</i> betekent hier «plaatsvinden»: je zegt waar iets <i>gebeurt</i>, niet waar een ding <i>staat</i>.' },
    { p: '(?:está|están|estaba|estaban|estar|esté|estuvo) muert[oa]s?',
      t: 'está muerto (estar, niet ser)',
      html: 'Dood zijn is blijvend, toch zeg je <b>estar muerto</b>: <i>el abuelo está muerto</i>. <b>Waarom?</b> Het Spaans ziet «dood» als de <b>toestand</b> na het sterven (zoals <i>está roto</i>), en een toestand gaat met <i>estar</i>.' },
    { p: 'hay', verb: true,
      t: 'hay (er is / er zijn)',
      html: '<b>Hay</b> is een speciale vorm van <i>haber</i>: «er is» én «er zijn». Hij blijft <b>altijd enkelvoud</b>: <i>hay un banco, hay dos bancos</i>, nooit <s>han</s>. <b>Waarom?</b> <i>Hay</i> heeft geen onderwerp; wat erachter staat is het lijdend voorwerp, dus het werkwoord telt niet mee.' },
    { p: 'conmigo|contigo',
      t: 'conmigo, contigo',
      html: 'Na een voorzetsel zeg je <i>mí</i> en <i>ti</i> (<i>para mí, sin ti</i>). <b>Uitzondering:</b> met <b>con</b> worden het één woord: <b>conmigo</b>, <b>contigo</b> (niet <s>con mí</s>). <b>Waarom?</b> Een oude Latijnse vorm (<i>mecum</i>) is blijven hangen.' },
    { p: '(?:para|a|de|por|sin|en|sobre|hacia) ti', soft: true,
      t: 'ti zonder accent',
      html: '<b>Mí</b> krijgt een accent (om het te onderscheiden van <i>mi</i> = mijn), maar <b>ti</b> nooit: <i>para ti</i>. <b>Waarom?</b> Er bestaat geen ander woord <i>ti</i>, dus een accent is niet nodig.' },
    { p: 'se (?:lo|la|los|las)(?= (?:\\p{L}+(?:o|e|es|a|as|amos|emos|imos|an|en|é|ó|í)|voy|vas|va|vamos|van|doy|das|da|damos|dan))', soft: true,
      t: 'se lo (niet le lo)',
      html: 'Twee voornaamwoorden: <i>le</i> of <i>les</i> wordt <b>se</b> vóór <i>lo, la, los, las</i>: <i>se lo doy</i> (ik geef het hem), niet <s>le lo doy</s>. <b>Waarom?</b> <i>le lo</i> klinkt lelijk; daarom werd het <i>se</i>.' },
    { p: '(?:buen|mal|primer|tercer|algún|ningún) \\p{L}+|gran (?!parte)\\p{L}+',
      t: 'buen, primer, gran (verkorte vorm)',
      html: '<b>Bueno, malo, primero, tercero, alguno, ninguno</b> verliezen hun <b>-o</b> vóór een mannelijk enkelvoudig woord: <i>un buen día, el primer piso, ningún problema</i>. <b>Grande</b> wordt <b>gran</b> vóór elk enkelvoudig woord, en betekent dan «geweldig»: <i>una gran ciudad</i>. <b>Waarom?</b> Zo spreekt het vlotter.' },
    { p: 'cien|ciento',
      t: 'cien of ciento',
      html: '<b>Cien</b> = precies 100, en vóór een woord: <i>cien pesos, cien mil</i>. Vanaf 101 zeg je <b>ciento</b>: <i>ciento veinte</i>. <b>Waarom?</b> <i>Ciento</i> wordt ingekort zodra er niets meer achteraan komt behalve een zelfstandig naamwoord of <i>mil</i>.' },
    { p: 'quinient[oa]s|setecient[oa]s|novecient[oa]s',
      t: 'quinientos, setecientos, novecientos',
      html: 'Honderdtallen maak je meestal met <i>-cientos</i>: <i>doscientos, trescientos</i>. <b>Uitzondering:</b> <b>quinientos</b> (500), <b>setecientos</b> (700) en <b>novecientos</b> (900). <b>Waarom?</b> Ze komen van oudere vormen; niet <s>cincocientos, sietecientos, nuevecientos</s>.' },
    { p: '(?<!(?:te|se|me|nos|lo|la|le) )(?:mejor|mejores|peor|peores)',
      t: 'mejor, peor',
      html: 'Vergelijken gaat meestal met <i>más</i>: <i>más alto</i>. <b>Uitzondering:</b> <i>bueno</i> → <b>mejor</b> en <i>malo</i> → <b>peor</b>, niet <s>más bueno</s>, <s>más malo</s>. <b>Waarom?</b> Ze komen rechtstreeks uit het Latijn (<i>melior, peior</i>), net als ons «beter».' },
    { p: '(?:los|unos|el|un|esos|estos) (?:lunes|martes|miércoles|jueves|viernes|cumpleaños|paraguas|crisis|análisis|virus|tesis)', soft: true,
      t: 'el lunes → los lunes (zelfde meervoud)',
      html: '<b>Lunes</b> t/m <b>viernes</b>, <i>el cumpleaños, el paraguas, la crisis</i>: het meervoud is <b>hetzelfde</b> (<i>los lunes</i>). Alleen het lidwoord verandert. <b>Waarom?</b> Ze eindigen al op een onbeklemtoonde <i>-s</i>; er kan geen -es meer achter.' },
    { p: 'jóvenes|exámenes|imágenes|órdenes|orígenes|crímenes|volúmenes', soft: true,
      t: 'joven → jóvenes (accent erbij)',
      html: 'In het meervoud krijgt dit woord <b>een accent erbij</b>: <i>joven → jóvenes</i>, <i>examen → exámenes</i>. <b>Waarom?</b> De klemtoon blijft op dezelfde lettergreep, maar die is nu de derde van achteren; dan is een accent verplicht.' },
    { p: '\\p{L}+iones|ingleses|franceses|holandeses|japoneses|portugueses|irlandeses|alemanes|autobuses|intereses', soft: true,
      t: 'canción → canciones (accent weg)',
      html: 'In het meervoud <b>verdwijnt het accent</b>: <i>canción → canciones</i>, <i>inglés → ingleses</i>, <i>alemán → alemanes</i>. <b>Waarom?</b> Door de extra lettergreep valt de klemtoon vanzelf goed; het accent is dan niet meer nodig.' },
    { p: 'lápices|veces|luces|peces|voces|nueces|actrices|cruces|raíces|felices|capaces|narices|lombrices', soft: true,
      t: 'lápiz → lápices (z wordt c)',
      html: 'Woorden op <b>-z</b> krijgen in het meervoud <b>-ces</b>: <i>lápiz → lápices, vez → veces, luz → luces, feliz → felices</i>. <b>Waarom?</b> Spaanse spelling schrijft vóór e en i een <i>c</i> in plaats van <i>z</i>.' }
  ];

  /* ---------- Engels (uitleg in het Nederlands of in het Spaans) ---------- */
  // [hele werkwoord, verleden tijd, voltooid deelwoord, nl, es]
  const EN_VERBS = `be was/were been zijn ser
become became become worden volverse
begin began begun beginnen empezar
break broke broken breken romper
bring brought brought brengen traer
build built built bouwen construir
buy bought bought kopen comprar
catch caught caught vangen atrapar
choose chose chosen kiezen elegir
come came come komen venir
do did done doen hacer
draw drew drawn tekenen dibujar
drink drank drunk drinken beber
drive drove driven rijden manejar
eat ate eaten eten comer
fall fell fallen vallen caer
feel felt felt voelen sentir
fight fought fought vechten pelear
find found found vinden encontrar
fly flew flown vliegen volar
forget forgot forgotten vergeten olvidar
forgive forgave forgiven vergeven perdonar
freeze froze frozen bevriezen congelar
get got gotten krijgen conseguir
give gave given geven dar
go went gone gaan ir
grow grew grown groeien crecer
have had had hebben tener
hear heard heard horen oír
hide hid hidden verstoppen esconder
hold held held vasthouden sostener
keep kept kept houden guardar
know knew known weten conocer
lead led led leiden liderar
leave left left vertrekken salir
lend lent lent uitlenen prestar
lose lost lost verliezen perder
make made made maken hacer
mean meant meant betekenen significar
meet met met ontmoeten conocer
pay paid paid betalen pagar
ride rode ridden rijden montar
ring rang rung bellen sonar
rise rose risen stijgen subir
run ran run rennen correr
say said said zeggen decir
see saw seen zien ver
sell sold sold verkopen vender
send sent sent sturen enviar
shake shook shaken schudden sacudir
shine shone shone schijnen brillar
shoot shot shot schieten disparar
show showed shown laten zien mostrar
sing sang sung zingen cantar
sink sank sunk zinken hundirse
sit sat sat zitten sentarse
sleep slept slept slapen dormir
speak spoke spoken spreken hablar
spend spent spent uitgeven gastar
stand stood stood staan estar de pie
steal stole stolen stelen robar
swim swam swum zwemmen nadar
take took taken nemen tomar
teach taught taught lesgeven enseñar
tear tore torn scheuren romper
tell told told vertellen contar
think thought thought denken pensar
throw threw thrown gooien lanzar
understand understood understood begrijpen entender
wake woke woken wakker worden despertarse
wear wore worn dragen llevar puesto
win won won winnen ganar
write wrote written schrijven escribir`.split('\n').map(l => { const m = l.split(' '); return { base: m[0], past: m[1].split('/'), pp: m[2], nl: m[3], es: m.slice(4).join(' ') }; });
  // vormen die ook een gewoon ander woord zijn: niet automatisch markeren
  const EN_SKIP = new Set(['left', 'saw', 'rose', 'found', 'lead', 'led', 'felt', 'shot', 'tore', 'run', 'come', 'become', 'won', 'ground', 'drew', 'wound', 'lay']);
  const EN = [
    { p: 'children|men|women|people|mice|feet|teeth|geese|sheep|knives|wives|halves|shelves|wolves|potatoes|tomatoes|heroes|crises|phenomena|criteria',
      t: { nl: 'onregelmatig meervoud', es: 'plural irregular' },
      html: { nl: 'Dit meervoud is <b>onregelmatig</b>: <i>child → children, man → men, woman → women, person → people, mouse → mice, foot → feet, tooth → teeth, knife → knives, potato → potatoes, sheep → sheep</i>. <b>Waarom?</b> Het zijn oude Germaanse of Griekse vormen die bleven bestaan; leer ze als setje.',
              es: 'Este plural es <b>irregular</b>: <i>child → children, man → men, woman → women, person → people, mouse → mice, foot → feet, tooth → teeth, knife → knives, potato → potatoes, sheep → sheep</i>. <b>¿Por qué?</b> Son formas antiguas que se conservaron; apréndelas en grupo.' } },
    { p: 'an (?:hour|hours|honest|honor|honour|heir|mba|fbi|sms|mp|x ray|fyi)|a (?:university|uniform|unit|user|european|euro|one|useful|unique|union|us|usual|unicorn)',
      t: { nl: 'a of an: het gaat om de klank', es: 'a o an: cuenta el sonido' },
      html: { nl: 'Normaal: <i>an</i> vóór een klinker, <i>a</i> vóór een medeklinker. <b>Uitzondering:</b> het gaat om de <b>klank</b>, niet de letter: <i>an hour</i> (de h is stom), <i>a university</i> (klinkt als «joe»), <i>a one-way ticket</i> («wun»).',
              es: 'Normalmente: <i>an</i> antes de vocal, <i>a</i> antes de consonante. <b>Excepción:</b> cuenta el <b>sonido</b>, no la letra: <i>an hour</i> (la h no suena), <i>a university</i> (suena «yu»), <i>a one-way ticket</i> («wan»).' } },
    { p: 'informations?|advices?|furniture|luggage|baggage|equipment|homework|knowledge|evidence|news',
      t: { nl: 'ontelbaar in het Engels', es: 'incontable en inglés' },
      html: { nl: '<i>Information, advice, news, furniture, luggage, homework, equipment</i> zijn in het Engels <b>ontelbaar</b>: geen meervoud en geen <i>a/an</i>. Dus <i>some advice, a piece of advice</i>, en <i>the news <b>is</b></i>. <b>Waarom?</b> Het Engels ziet ze als een massa, zoals «water»; in het Nederlands tellen we ze wél («adviezen»).',
              es: '<i>Information, advice, news, furniture, luggage, homework, equipment</i> son <b>incontables</b> en inglés: sin plural y sin <i>a/an</i>. Di <i>some advice, a piece of advice</i>, y <i>the news <b>is</b></i>. <b>¿Por qué?</b> El inglés los ve como una masa, igual que «water»; en español sí se cuentan («consejos», «muebles»).' } },
    { p: 'better|best|worse|worst|further|farther|less|least',
      t: { nl: 'good → better → best', es: 'good → better → best' },
      html: { nl: 'Vergelijken gaat meestal met <i>-er/-est</i> of <i>more/most</i>. <b>Uitzondering:</b> <i>good → <b>better</b> → <b>best</b></i>, <i>bad → <b>worse</b> → <b>worst</b></i>, <i>far → <b>further/farther</b></i>, <i>little → <b>less</b> → <b>least</b></i>. Niet <s>gooder</s>, <s>badder</s>.',
              es: 'Para comparar se usa <i>-er/-est</i> o <i>more/most</i>. <b>Excepción:</b> <i>good → <b>better</b> → <b>best</b></i>, <i>bad → <b>worse</b> → <b>worst</b></i>, <i>far → <b>further/farther</b></i>, <i>little → <b>less</b> → <b>least</b></i>. Nunca <s>gooder</s>, <s>badder</s>.' } },
    { p: '(?:he|she|it) has|(?:he|she|it) (?:can|must|should|will|may|might|could|would)', soft: true,
      t: { nl: 'he has, she can (geen -s-regel)', es: 'he has, she can' },
      html: { nl: 'Bij <i>he/she/it</i> komt er normaal een <b>-s</b> achter het werkwoord. <b>Uitzonderingen:</b> <i>have</i> wordt <b>has</b> (niet <s>haves</s>), en hulpwerkwoorden als <i>can, must, will, should</i> krijgen <b>nooit</b> een -s: <i>she can swim</i>.',
              es: 'Con <i>he/she/it</i> el verbo suele llevar <b>-s</b>. <b>Excepciones:</b> <i>have</i> se vuelve <b>has</b> (no <s>haves</s>), y los verbos modales <i>can, must, will, should</i> <b>nunca</b> llevan -s: <i>she can swim</i>.' } },
    { p: "aren t i|am i not",
      t: { nl: "aren't I?", es: "aren't I?" },
      html: { nl: "Een vraagstaartje bij <i>I am</i> is <b>aren't I?</b> (<i>I'm late, aren't I?</i>), hoewel <s>I are</s> nooit kan. <b>Waarom?</b> <i>Amn't</i> spreekt lastig; daarom werd het <i>aren't</i>.", es: "La coletilla de <i>I am</i> es <b>aren't I?</b> (<i>I'm late, aren't I?</i>), aunque <s>I are</s> no existe. <b>¿Por qué?</b> <i>Amn't</i> es difícil de pronunciar." } },
    { p: 'the police (?:are|were|have)',
      t: { nl: 'the police are', es: 'the police are' },
      html: { nl: '<b>The police</b> is in het Engels altijd <b>meervoud</b>: <i>the police are coming</i>. <b>Waarom?</b> Het Engels denkt aan de agenten samen, niet aan één organisatie.', es: '<b>The police</b> va siempre en <b>plural</b> en inglés: <i>the police are coming</i>. <b>¿Por qué?</b> Se piensa en los agentes, no en una sola organización.' } }
  ];

  /* ---------- Nederlands (uitleg in het Spaans) ---------- */
  // [infinitief, verleden tijd enkelvoud/meervoud, voltooid deelwoord, es]
  const NL_VERBS = `zijn was/waren geweest ser/estar
hebben had/hadden gehad tener
gaan ging/gingen gegaan ir
doen deed/deden gedaan hacer
zien zag/zagen gezien ver
komen kwam/kwamen gekomen venir
eten at/aten gegeten comer
drinken dronk/dronken gedronken beber
lezen las/lazen gelezen leer
schrijven schreef/schreven geschreven escribir
kopen kocht/kochten gekocht comprar
zoeken zocht/zochten gezocht buscar
denken dacht/dachten gedacht pensar
brengen bracht/brachten gebracht traer
kunnen kon/konden gekund poder
willen wilde/wilden gewild querer
mogen mocht/mochten gemogen poder (permiso)
zullen zou/zouden - ir a / futuro
slapen sliep/sliepen geslapen dormir
lopen liep/liepen gelopen caminar
vinden vond/vonden gevonden encontrar
nemen nam/namen genomen tomar
geven gaf/gaven gegeven dar
spreken sprak/spraken gesproken hablar
helpen hielp/hielpen geholpen ayudar
beginnen begon/begonnen begonnen empezar
blijven bleef/bleven gebleven quedarse
staan stond/stonden gestaan estar de pie
zitten zat/zaten gezeten estar sentado
liggen lag/lagen gelegen estar acostado
weten wist/wisten geweten saber
krijgen kreeg/kregen gekregen recibir
rijden reed/reden gereden manejar
vragen vroeg/vroegen gevraagd preguntar
zeggen zei/zeiden gezegd decir
worden werd/werden geworden volverse
vallen viel/vielen gevallen caer
houden hield/hielden gehouden mantener; gustar (houden van)
laten liet/lieten gelaten dejar
dragen droeg/droegen gedragen llevar
vergeten vergat/vergaten vergeten olvidar
winnen won/wonnen gewonnen ganar
zwemmen zwom/zwommen gezwommen nadar
zingen zong/zongen gezongen cantar
sterven stierf/stierven gestorven morir
vliegen vloog/vlogen gevlogen volar
kiezen koos/kozen gekozen elegir
verliezen verloor/verloren verloren perder`.split('\n').map(l => { const m = l.split(' '); return { base: m[0], past: m[1].split('/'), pp: m[2] === '-' ? null : m[2], es: m.slice(3).join(' ') }; });
  const NL_PRES = { ben: 'zijn', bent: 'zijn', is: 'zijn', heb: 'hebben', hebt: 'hebben', heeft: 'hebben', kan: 'kunnen', kun: 'kunnen', kunt: 'kunnen', wil: 'willen', wilt: 'willen', mag: 'mogen', zal: 'zullen', zult: 'zullen' };
  const NL_SKIP = new Set(['las', 'zat', 'reden', 'lag', 'won', 'vroeg']); // ook een ander woord: las, zat (dronken), reden (motivo), lag, won, vroeg (temprano)
  const NL = [
    { p: '(?:het|een|dat|dit|dit|ons|mijn|jouw|haar|zijn) meisje|meisjes|(?:het|dat|dit) \\p{L}+(?:tje|pje|kje|etje)',
      t: 'het meisje: verkleinwoorden zijn altijd het',
      html: 'Los diminutivos (<i>-je, -tje, -pje</i>) son <b>siempre de het</b>, aunque se refieran a una persona: <b>het meisje</b> (la chica), <i>het hondje</i>. <b>¿Por qué?</b> La terminación -je decide el género, no el significado.' },
    { p: 'kinderen|eieren|bladeren|liederen|runderen',
      t: 'kind → kinderen',
      html: 'Algunas palabras forman el plural con <b>-eren</b>: <i>kind → kinderen, ei → eieren, blad → bladeren, lied → liederen</i>. <b>¿Por qué?</b> Es un plural antiguo del neerlandés que solo se conservó en estas palabras.' },
    { p: 'steden|schepen|dagen|wegen|paden|gaten|vaten|glazen|hoven',
      t: 'stad → steden, dag → dagen',
      html: 'Normalmente una vocal corta sigue corta en el plural (<i>bal → ballen</i>). <b>Excepción:</b> <i>dag → <b>dagen</b>, weg → <b>wegen</b>, glas → <b>glazen</b></i> tienen vocal <b>larga</b>, y <i>stad → <b>steden</b>, schip → <b>schepen</b></i> cambian de vocal. Hay que aprenderlas de memoria.' }
  ];

  /* ---------- extra uitzonderingen per grammaticaonderdeel (sleutel = titel) ---------- */
  const GRAMMAR = {
    'Lidwoorden en geslacht': ['<b>Uitzondering:</b> mannelijk op -a: <i>el día, el mapa, el problema, el tema, el idioma, el sistema</i>. <b>Waarom?</b> Woorden op <b>-ma</b> komen uit het Grieks (daar onzijdig, in het Spaans mannelijk). Vrouwelijk op -o: <i>la mano</i> (al vrouwelijk in het Latijn), <i>la foto, la moto</i> (kort voor <i>la fotografía, la motocicleta</i>).',
      '<b>Uitzondering:</b> <i>el agua, el aula, el hambre</i> zijn vrouwelijk, maar krijgen <b>el</b>. <b>Waarom?</b> Ze beginnen met een beklemtoonde <b>a-</b>, en <i>la agua</i> klinkt als één lange a. Het bijvoeglijk naamwoord blijft vrouwelijk: <i>el agua fría</i>.'],
    'Meervoud': ['<b>Uitzondering:</b> woorden op een onbeklemtoonde <b>-s</b> blijven gelijk: <i>el lunes → los lunes, la crisis → las crisis</i>. En het accent kan verschuiven: <i>joven → jóvenes</i> (accent erbij), <i>canción → canciones</i> (accent weg). <b>Waarom?</b> De klemtoon blijft op dezelfde lettergreep; het accent volgt de spellingsregels.'],
    'Hay of estar?': ['<b>Uitzondering:</b> bij een <b>evenement</b> gebruik je <b>ser</b> voor de plek: <i>¿Dónde es la fiesta? La fiesta es en mi casa.</i> <b>Waarom?</b> <i>Ser</i> betekent hier «plaatsvinden».'],
    'Het werkwoord estar': ['<b>Uitzondering:</b> waar een <b>evenement</b> is, zeg je met <b>ser</b>: <i>el concierto es en el parque</i>. En «dood» gaat met estar: <i>está muerto</i>, omdat het als toestand wordt gezien.'],
    'Plaatsaanduidingen en al / del': ['<b>Uitzondering:</b> geen <i>al/del</i> bij een naam met <i>El</i>: <i>voy a El Salvador</i>, en niet bij <i>él</i> (hij): <i>hablo de él</i>.'],
    'Het werkwoord tener (hebben)': ['<b>Uitzondering:</b> <i>tener</i> is onregelmatig: <b>tengo</b> (niet <s>teno</s>) en de stam wordt <b>tien-</b> in <i>tienes, tiene, tienen</i>. <i>Tenemos</i> blijft regelmatig, omdat de klemtoon daar niet op de stam valt.'],
    'Gustar': ['Anders dan de gewone zinsbouw: bij <i>gustar</i> is wat je leuk vindt het onderwerp. Daarom <i>me gust<b>an</b> los perros</i> (meervoud), ook al ben jij maar één persoon.'],
    'Onregelmatige vormen': ['<b>Uitzondering:</b> <i>bueno → mejor</i> en <i>malo → peor</i>, nooit <s>más bueno</s>. <i>Grande → mayor</i> en <i>pequeño → menor</i> gebruik je vooral voor leeftijd.'],
    'Para mí, conmigo en «van wie is het?»': ['<b>Uitzondering:</b> <i>con + mí = <b>conmigo</b></i>, <i>con + ti = <b>contigo</b></i>. En <i>mí</i> heeft een accent, <i>ti</i> niet.'],
    'Twee voornaamwoorden: se lo': ['<b>Uitzondering:</b> <i>le/les</i> wordt <b>se</b> vóór <i>lo, la, los, las</i>: <i>se lo doy</i>, nooit <s>le lo doy</s>.'],
    'Getallen vanaf 100': ['<b>Uitzondering:</b> <b>quinientos</b> (500), <b>setecientos</b> (700) en <b>novecientos</b> (900). En <b>cien</b> = precies 100, <b>ciento</b> vanaf 101.']
  };

  /* ================= zoeken ================= */
  const words = s => String(s || '').toLowerCase().normalize('NFC').replace(/[’']/g, ' ').match(/[\p{L}\d]+/gu) || [];
  const compile = list => list.map(r => Object.assign({}, r, { re: new RegExp('(?<![\\p{L}\\d])(?:' + r.p + ')(?![\\p{L}\\d])', 'gu') }));
  const UI = () => (S.course && S.course.ui) || 'nl';
  const TGT = () => (S.course && S.course.target) || 'es';
  const loc = v => (v && typeof v === 'object') ? (v[UI()] || v.nl) : v;

  /* Regels en werkwoordnotities per doeltaal. Nieuwe doeltaal: een lijst zoals EN/NL maken en hier een rij toevoegen. */
  const RULES = { es: ES, en: EN, nl: NL };
  const VERB_NOTES = { es: (t, f) => verbNotesEs(t, f), en: (t, f) => verbNotesEn(t, f), nl: (t, f) => verbNotesNl(t, f) };
  let cache = null;
  function rules() {
    const k = TGT() + '|' + UI();
    if (cache && cache.k === k) return cache.r;
    const r = compile(RULES[TGT()] || []);
    cache = { k, r };
    return r;
  }

  /* ---------- onregelmatige werkwoordsvormen ---------- */
  const TENSE_NL = { pres: 'tegenwoordige tijd', pret: 'verleden tijd (indefinido)', imp: 'imperfecto', fut: 'toekomende tijd', cond: 'condicional', subj: 'subjuntivo', imper: 'gebiedende wijs', impsubj: 'imperfecto de subjuntivo', ger: 'gerundio', part: 'voltooid deelwoord' };
  const PERS_NL = ['ik', 'jij', 'hij/zij/u', 'wij', 'zij/jullie'];
  let vIndex = null;
  const NOREG = ['ser', 'ir']; // geen zinnige «regelmatige» vorm (s-/geen stam)
  function whyEs(inf, tense, p, form, reg, d) {
    const v = S.conj.VERBS[inf] || {};
    const full = ['ser', 'ir', 'estar', 'haber'].includes(inf);
    if (tense === 'part') return 'Het voltooid deelwoord is onregelmatig: <b>' + form + '</b> in plaats van <s>' + reg + '</s>. Dat geldt ook in <i>he ' + form + ', había ' + form + '</i>.';
    if (tense === 'ger') return 'Het gerundio is onregelmatig: <b>' + form + '</b> in plaats van <s>' + reg + '</s>' + (/yendo$/.test(form) ? ' (de <i>i</i> wordt een <i>y</i> tussen twee klinkers).' : '.');
    // ser en ir: zonder -er/-ir blijft er (bijna) niets over, dus een «regelmatige» vorm vergelijken heeft geen zin
    if (NOREG.includes(inf)) return '<b>' + inf + '</b> is een van de helemaal onregelmatige werkwoorden. Er bestaat niet eens een regelmatige vorm om mee te vergelijken: haal je <i>-' + inf.slice(-2) + '</i> eraf, dan blijft ' + (inf === 'ir' ? 'er niets over' : 'alleen <i>' + inf.slice(0, -2) + '-</i> over') + '. Daarom leer je deze vormen uit je hoofd.';
    if (full) return '<b>' + inf + '</b> is een van de helemaal onregelmatige werkwoorden: deze vormen leer je uit je hoofd.';
    if ((tense === 'fut' || tense === 'cond') && v.fs) return 'In de ' + TENSE_NL[tense] + ' heeft <i>' + inf + '</i> een <b>eigen stam: ' + v.fs + '-</b> (in plaats van ' + inf + '-). De uitgangen zijn wel gewoon.';
    if (tense === 'imper' && p === 1 && v.tu) return 'De gebiedende wijs voor <i>tú</i> is kort en onregelmatig: <b>' + form + '</b>. Er zijn er acht: <i>di, haz, ve, pon, sal, sé, ten, ven</i>.';
    if (tense === 'pres' && p === 0 && v.yo && form === v.yo) return 'Alleen de <b>ik-vorm</b> is onregelmatig: <b>' + form + '</b>. ' + (v.stem ? 'De andere vormen hebben een stamwisseling.' : 'De andere vormen zijn gewoon regelmatig.') + ' Deze ik-vorm komt terug in de subjuntivo.';
    if (tense === 'subj' && v.yo && !v.subj) return 'De subjuntivo komt van de onregelmatige ik-vorm: <i>' + v.yo + '</i> → <b>' + form + '</b>.';
    if (tense === 'pret' && v.pret) {
      if (/y[óe]/.test(form)) return 'De <i>i</i> wordt een <b>y</b> tussen twee klinkers: <b>' + form + '</b> in plaats van <s>' + reg + '</s>.';
      if (/[eo]$/.test(v.pret[0]) && v.pret[0].length > 3) return 'Een <b>sterke verleden tijd</b>: nieuwe stam <b>' + v.pret[0].slice(0, -1) + '-</b>' + (inf === 'hacer' ? ' (<i>hizo</i> met een z, zodat de klank blijft)' : '') + ' en uitgangen <b>zonder accent</b> (-e, -iste, -o, -imos, -' + (/j$/.test(v.pret[0].slice(0, -1)) ? 'eron' : 'ieron') + ').';
      return 'De verleden tijd van <i>' + inf + '</i> is helemaal onregelmatig: <i>' + v.pret.join(', ') + '</i>.';
    }
    if (tense === 'impsubj' && (v.pret || v.stem)) return 'Deze vorm komt van de onregelmatige verleden tijd: <i>' + S.conj.table(inf, 'pret')[4] + '</i> → <b>' + form + '</b>.';
    if (tense === 'pret' && v.stem && (p === 2 || p === 4)) return '<i>-ir</i>-werkwoorden met stamwisseling veranderen in de verleden tijd bij hij/zij en zij/jullie: <b>' + form + '</b>.';
    if (v.stem) {
      const ch = { ie: 'e → ie', ue: 'o → ue', i: 'e → i', uue: 'u → ue' }[v.stem];
      return '<i>' + inf + '</i> is een <b>stamwisselaar (' + ch + ')</b>: als de klemtoon op de stam valt, verandert de klinker. Bij <i>nosotros</i> niet' + (tense === 'pres' ? ' (<i>' + S.conj.table(inf, 'pres')[3] + '</i>)' : '') + '.';
    }
    if (v.pres || v.subj || v.imp) return 'Deze vorm van <i>' + inf + '</i> is onregelmatig; leer hem uit je hoofd.';
    return 'Deze vorm van <i>' + inf + '</i> is onregelmatig.';
  }
  function buildIndexEs() {
    const C = S.conj, idx = new Map(), regular = new Set();
    if (!C || !C.VERBS || !C.plainTable) return idx;
    const tenses = ['pres', 'pret', 'imp', 'fut', 'cond', 'subj', 'imper', 'impsubj', 'ger', 'part'];
    const get = (inf, t, plain) => t === 'ger' ? [plain ? C.plainGerundio(inf) : C.gerundio(inf)] : t === 'part' ? [plain ? C.plainParticipio(inf) : C.participio(inf)] : (plain ? C.plainTable(inf, t) : C.table(inf, t));
    Object.keys(C.VERBS).forEach(inf => {
      if (/se$/.test(inf) && C.VERBS[inf.slice(0, -2)]) return; // wederkerend: de gewone vorm telt al
      if (/se$/.test(inf)) return;
      tenses.forEach(t => {
        const real = get(inf, t, false), reg = get(inf, t, true);
        if (!real || !reg) return;
        real.forEach((f, p) => {
          if (!f || f.includes(' ')) return;
          if (f === reg[p]) { regular.add(f); return; }
          const e = { inf, t, p: t === 'ger' || t === 'part' ? null : p, form: f, reg: reg[p] };
          if (!idx.has(f)) idx.set(f, []);
          const l = idx.get(f);
          if (!l.some(x => x.inf === inf)) l.push(e);
        });
      });
    });
    // vormen die ook een gewone (regelmatige) vorm zijn, of een ander woord: niet markeren
    regular.forEach(f => idx.delete(f));
    ['sal', 'vino', 'fe', 'di', 'frío', 'fría', 'fríos', 'frías'].forEach(f => idx.delete(f)); // ook een zelfstandig naamwoord of bijvoeglijk naamwoord
    return idx;
  }
  function verbNotesEs(tokens, inFocus) {
    if (!vIndex) vIndex = buildIndexEs();
    const out = [], seen = new Set();
    tokens.forEach((w, i) => {
      if (!inFocus(i, i)) return;
      if (i > 0 && /^(?:el|la|los|las|un|una|unos|unas|mi|tu|su|mis|tus|sus|este|esta|ese|esa|del|al)$/.test(tokens[i - 1])) return; // el puesto, la cuenta: zelfstandig naamwoord
      const l = vIndex.get(w);
      if (!l || seen.has(w)) return;
      seen.add(w);
      const e = l[0];
      const who = l.length > 1 ? l.map(x => x.inf).join(' / ') : e.inf;
      const when = e.p != null ? ' (' + PERS_NL[e.p] + ', ' + TENSE_NL[e.t] + ')' : ' (' + TENSE_NL[e.t] + ')';
      const html = (l.length > 1 ? '<b>' + w + '</b> is een vorm van <i>' + l.map(x => x.inf).join('</i> én van <i>') + '</i>. ' : '<b>' + w + '</b> is een onregelmatige vorm van <i>' + e.inf + '</i>' + when + '. ') +
        (e.reg && l.length === 1 && !(NOREG.includes(e.inf) && e.t !== 'ger' && e.t !== 'part') ? 'Regelmatig zou het <s>' + e.reg + '</s> zijn. ' : '') + whyEs(e.inf, e.t, e.p, w, e.reg);
      out.push({ k: 'v:' + w, t: w + ' · ' + who, html, verb: true });
    });
    return out;
  }
  function enRegular(b) {
    if (/e$/.test(b)) return b + 'd';
    if (/[^aeiou]y$/.test(b)) return b.slice(0, -1) + 'ied';
    return b + 'ed';
  }
  let enIdx = null, nlIdx = null;
  function verbNotesEn(tokens, inFocus) {
    if (!enIdx) { enIdx = new Map(); EN_VERBS.forEach(v => [...v.past, v.pp].forEach(f => { if (f !== v.base && !EN_SKIP.has(f) && !enIdx.has(f)) enIdx.set(f, v); })); ['am', 'is', 'are'].forEach(f => enIdx.set(f, EN_VERBS[0])); }
    const out = [], seen = new Set();
    tokens.forEach((w, i) => {
      const v = inFocus(i, i) && enIdx.get(w);
      if (!v || seen.has(v.base)) return;
      seen.add(v.base);
      const forms = v.base + ' – ' + v.past.join('/') + ' – ' + v.pp;
      const html = UI() === 'es'
        ? '<b>' + v.base + '</b> (' + v.es + ') es un <b>verbo irregular</b>: <b>' + forms + '</b>' + (v.base === 'be' ? '. Es el verbo más irregular del inglés (I am, you are, he is).' : ', no <s>' + enRegular(v.base) + '</s>. Hay que aprender las tres formas de memoria.') + (v.base === 'get' ? ' En Estados Unidos: <i>gotten</i>; en el Reino Unido: <i>got</i>.' : '')
        : '<b>' + v.base + '</b> (' + v.nl + ') is een <b>onregelmatig werkwoord</b>: <b>' + forms + '</b>' + (v.base === 'be' ? '. Het meest onregelmatige werkwoord van het Engels (I am, you are, he is).' : ', niet <s>' + enRegular(v.base) + '</s>. Deze drie vormen leer je uit je hoofd.') + (v.base === 'get' ? ' Amerikaans: <i>gotten</i>; Brits: <i>got</i>.' : '');
      out.push({ k: 'v:' + v.base, t: w + ' · ' + v.base, html, verb: true });
    });
    return out;
  }
  function verbNotesNl(tokens, inFocus) {
    if (!nlIdx) { nlIdx = new Map(); NL_VERBS.forEach(v => [...v.past, v.pp].forEach(f => { if (f && !NL_SKIP.has(f) && !nlIdx.has(f)) nlIdx.set(f, v); })); Object.entries(NL_PRES).forEach(([f, b]) => nlIdx.set(f, NL_VERBS.find(v => v.base === b))); }
    const out = [], seen = new Set();
    tokens.forEach((w, i) => {
      const v = inFocus(i, i) && nlIdx.get(w);
      if (!v || seen.has(v.base)) return;
      seen.add(v.base);
      const forms = v.base + ' – ' + v.past.join('/') + (v.pp ? ' – ' + v.pp : '');
      out.push({ k: 'v:' + v.base, t: w + ' · ' + v.base, html: '<b>' + v.base + '</b> (' + v.es + ') es un <b>verbo irregular</b> (sterk werkwoord): <b>' + forms + '</b>. No sigue la regla de <i>-de/-te</i> (\'t kofschip); hay que aprender estas formas de memoria.', verb: true });
    });
    return out;
  }

  /** Uitzonderingen in een tekst.
      opt.focus: [start, eind) woordindexen die gevraagd werden (bv. het invulgat); leeg = hele tekst.
      opt.wrong: Set met fout getypte woorden (dan alleen die).
      opt.sentence: true = hele zin was het antwoord (zachte regels en werkwoorden alleen bij fout woord).
      opt.verbs: false = geen werkwoordsvormen. opt.max: maximaal aantal (standaard 2). */
  function find(text, opt = {}) {
    const tokens = words(text);
    if (!tokens.length) return [];
    const joined = tokens.join(' ');
    // tekenpositie → woordindex
    const starts = []; let pos = 0; tokens.forEach(t => { starts.push(pos); pos += t.length + 1; });
    const tokAt = c => { let i = 0; while (i + 1 < starts.length && starts[i + 1] <= c) i++; return i; };
    const f = opt.focus;
    const wrong = opt.wrong && opt.wrong.size ? opt.wrong : null;
    const hit = (a, b) => {
      for (let i = a; i <= b; i++) {
        if (wrong) { if (wrong.has(tokens[i])) return true; continue; }
        if (!f || (i >= f[0] && i < f[1])) return true;
      }
      return false;
    };
    const strict = !!(wrong || f);
    const out = [];
    for (const r of rules()) {
      if (r.verb && opt.verbs === false) continue;
      if ((r.soft || r.verb) && opt.sentence && !wrong) continue;
      r.re.lastIndex = 0;
      let m;
      while ((m = r.re.exec(joined))) {
        if (!m[0]) { r.re.lastIndex++; continue; }
        const a = tokAt(m.index), b = tokAt(m.index + m[0].length - 1);
        if (!strict || hit(a, b)) { out.push({ k: r.p, t: loc(r.t), html: loc(r.html), verb: !!r.verb }); break; }
      }
    }
    if (opt.verbs !== false && !(opt.sentence && !wrong)) {
      const inF = (a, b) => !strict || hit(a, b);
      const vs = (VERB_NOTES[TGT()] || (() => []))(tokens, inF);
      vs.forEach(v => { if (!out.some(o => o.k === v.k)) out.push(v); });
    }
    // eerst woorden/constructies, dan werkwoorden
    out.sort((x, y) => (x.verb ? 1 : 0) - (y.verb ? 1 : 0));
    return out.slice(0, opt.max || 2);
  }

  /** Uitzonderingen bij een oefening en het antwoord (feedback in de les). */
  function forItem(it, r) {
    r = r || {};
    const list = [];
    const own = it.uitz || (it.orig && it.orig.uitz);
    if (own) list.push({ k: 'own', t: '', html: own });
    if (it.kind === 'match' || it.kind === 'write') return list;
    const exp = r.expected || it.answer || (it.answers && it.answers[0]) || '';
    let found = [];
    if (it.conj) {
      found = find(exp, { max: 2 });
    } else if (it.word) {
      found = find(it.word.es, { max: 2 });
    } else {
      const gapText = it.sentence || (it.q && it.q.includes('___') ? it.q : null);
      if (gapText) {
        const pre = words(gapText.split('___')[0]).length;
        const n = Math.max(1, words(exp).length);
        found = find(gapText.replace('___', exp), { focus: [pre, pre + n], max: 2 });
      } else if (it.kind === 'mc' && exp && words(exp).length <= 3) {
        found = find(exp, { max: 2 });
      } else {
        const text = it.target || it.text || (it.translate ? exp : '') || (it.kind === 'mc' ? exp : '');
        if (text) {
          let wrong = null;
          if (!r.ok && r.parts && r.parts.st) {
            const ws = S.check.words(r.parts.a).filter((_, i) => i % 2 === 1);
            wrong = new Set(ws.map(w => (words(w)[0] || '')).filter((w, i) => r.parts.st[i] && r.parts.st[i] !== 'ok'));
          }
          found = find(text, { sentence: true, wrong, max: 2 });
        }
      }
    }
    found.forEach(x => { if (!list.some(y => y.k === x.k) && !(own && x.k === 'own')) list.push(x); });
    return list.slice(0, own ? 3 : 2);
  }

  const forWord = es => find(es, { max: 2 });
  /** Voor ⓘ-uitleg bij dialogen, teksten en voorbeeldzinnen: alleen woorden en constructies, geen werkwoordsvormen. */
  const forText = (text, seen) => find(text, { verbs: false, sentence: true, max: 2 }).filter(x => { if (!seen) return true; if (seen.has('uz:' + x.k)) return false; seen.add('uz:' + x.k); return true; });
  const grammar = g => ((g && (g.uitz || GRAMMAR[g.t])) || []).map(x => x.replace(/^<b>Uitzondering(?: op [^<]*)?:<\/b>\s*/, ''));
  const label = () => UI() === 'es' ? '⚠️ Excepción' : '⚠️ Uitzondering';

  S.Uitz = { find, forItem, forWord, forText, grammar, label, words, RULES, VERB_NOTES, ES, EN, NL, GRAMMAR, EN_VERBS, NL_VERBS, _rules: rules, _reset: () => { cache = null; vIndex = null; enIdx = null; nlIdx = null; } };
})(window.SPT);
