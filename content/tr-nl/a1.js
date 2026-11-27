/* Turks voor Nederlandstaligen — niveau A1, units 1–5 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Velden: in vocab/zinnen is [0] de doeltaal (Turks) en [1] het Nederlands.
   Oefeningen: mc (eerste optie = juist), cloze (___ = gat; o = keuzes, eerste = juist), tr (NL→TR), order, match.
   Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;
  Object.assign(S.C.TAGS, {
    'tr-klank': 'alfabet en uitspraak (c, ç, ş, ğ, ı)', 'tr-harm': 'klinkerharmonie', 'tr-zijn': 'ik ben… (-im, -sin)', 'tr-mi': 'vragen met mi / mı / mu / mü',
    'tr-degil': 'ontkennen met değil', 'tr-li': 'waar vandaan en welke taal (-li, -ce)', 'tr-bezit': 'bezit (-im, -in, -i)', 'tr-var': 'var / yok (er is, ik heb)',
    'tr-meerv': 'meervoud (-ler / -lar)', 'tr-getal': 'getallen', 'tr-tijd': 'de tijd / klokkijken', 'tr-acc': 'lijdend voorwerp (-i / -ı / -u / -ü)',
    'tr-lisiz': 'met en zonder (-li / -siz)', 'tr-iyor': 'tegenwoordige tijd (-iyor)', 'tr-neg': 'ontkenning van werkwoorden (-mi-)', 'tr-loc': 'waar? (-de / -da)',
    'tr-dat': 'waarheen? (-e / -a)', 'tr-abl': 'waarvandaan? (-den / -dan)', 'tr-aanw': 'bu / şu / o', 'tr-mek': '-mek istiyorum / -meyi seviyorum',
    'tr-imp': 'gebiedende wijs', 'tr-di': 'verleden tijd (-di)', 'tr-ecek': 'toekomende tijd (-ecek / -acak)', 'tr-volg': 'woordvolgorde (werkwoord achteraan)',
    'tr-daha': 'vergelijken (daha, en)', 'tr-beleefd': 'beleefd en informeel (sen / siz)'
  });

  /* ───────────────────────── A1 · 1 ───────────────────────── */
  U({
    id: 'tr-a1-01', level: 'A1', icon: '👋', title: 'Merhaba! Memnun oldum', nl: 'Begroeten en jezelf voorstellen',
    goals: ['Iemand begroeten en afscheid nemen', 'Zeggen hoe je heet en vragen hoe het gaat', 'De Turkse letters c, ç, ş, ğ, ı, ö en ü uitspreken', '«Ik ben…» zeggen met een uitgang'],
    vocab: [
      ['merhaba', 'hallo'], ['selam', 'hoi'], ['günaydın', 'goedemorgen'], ['iyi günler', 'goedendag'], ['iyi akşamlar', 'goedenavond'],
      ['iyi geceler', 'goedenacht / welterusten'], ['hoşça kal', 'tot ziens (zegt wie weggaat)'], ['güle güle', 'tot ziens (zegt wie blijft)'], ['görüşürüz', 'tot ziens / tot kijk'],
      ['Nasılsın?', 'Hoe gaat het (met jou)?'], ['Nasılsınız?', 'Hoe gaat het met u?'], ['İyiyim, teşekkürler.', 'Goed, dank je.'], ['Sen nasılsın?', 'En hoe gaat het met jou?'],
      ['Adın ne?', 'Hoe heet je?'], ['Benim adım…', 'Ik heet…'], ['Memnun oldum.', 'Aangenaam.'], ['Ben de.', 'Ik ook.'], ['teşekkür ederim', 'dank je wel / dank u wel'],
      ['rica ederim', 'graag gedaan'], ['lütfen', 'alsjeblieft (bij een verzoek)'], ['evet', 'ja'], ['hayır', 'nee'], ['özür dilerim', 'sorry'], ['affedersiniz', 'pardon'],
      ['tamam', 'oké'], ['öğrenci', 'student / leerling'], ['öğretmen', 'leraar / lerares'], ['arkadaş', 'vriend / vriendin']
    ],
    grammar: [
      { t: 'Het Turkse alfabet: je leest wat er staat', es: 'Alfabe',
        html: `<p>Turks schrijf je met het Latijnse alfabet en bijna <b>elke letter heeft altijd dezelfde klank</b>. Dat is makkelijker dan Engels of Nederlands. Er zijn 29 letters; <b>q, w en x bestaan niet</b>.</p>
<p>Zeven letters zijn nieuw of klinken anders dan je verwacht: <b>c</b>, <b>ç</b>, <b>ş</b>, <b>ğ</b>, <b>ı</b>, <b>ö</b> en <b>ü</b>. Let ook op <b>u</b> (= <i>oe</i>) en <b>y</b> (= <i>j</i>).</p>
<p>Er zijn <b>twee i's</b>: met punt (<b>i</b>, hoofdletter <b>İ</b>) en zonder punt (<b>ı</b>, hoofdletter <b>I</b>). Het zijn verschillende letters: <i>kız</i> (meisje) en <i>kiz</i> bestaat niet. Daarom schrijf je <b>İstanbul</b> met een punt op de hoofdletter.</p>
<p>De klemtoon ligt meestal op de <b>laatste lettergreep</b>: <i>merhaBA</i>, <i>öğretMEN</i>.</p>
<p><b>⚠️ Uitzondering:</b> bij <b>plaatsnamen</b> ligt de klemtoon juist <b>niet</b> achteraan: <i>İsTANbul</i>, <i>ANkara</i>, <i>İZmir</i>, <i>HolLANda</i>. <b>Waarom?</b> Plaatsnamen (en een deel van de leenwoorden) hebben een eigen, ouder klemtoonpatroon. Daardoor hoor je meteen of iemand een naam bedoelt: <i>MIsır</i> is Egypte, <i>mıSIR</i> is maïs.</p>`,
        table: [['letter', 'klinkt als', 'voorbeeld'], ['c', 'dzj (als in «jeans»)', 'cam = glas'], ['ç', 'tsj (als in «tsjilpen»)', 'çay = thee'], ['ş', 'sj (als in «sjaal»)', 'şeker = suiker'],
          ['ğ', 'bijna stil: maakt de klinker ervoor langer', 'dağ = berg'], ['ı', 'doffe klank, ongeveer als de e in «de»', 'kız = meisje'], ['ö', 'eu (als in «deur»)', 'göz = oog'],
          ['ü', 'uu (als in «muur»)', 'gün = dag'], ['u', 'oe (als in «boek»)', 'su = water'], ['y', 'j (als in «ja»)', 'yok = er is niet'], ['j', 'zj (als in «garage»)', 'jilet = scheermesje']],
        sum: 'C, ç, ş, ğ, ı, ö, ü.',
        ex: [['Çay, lütfen.', 'Thee, alsjeblieft.'], ['Günaydın!', 'Goedemorgen!'], ['Teşekkür ederim.', 'Dank je wel.']] },
      { t: 'Klinkerharmonie: uitgangen passen zich aan', es: 'Ünlü uyumu',
        html: `<p>Turks plakt uitgangen achter een woord. De klinker van zo'n uitgang <b>past zich aan de laatste klinker van het woord aan</b>. Dat heet klinkerharmonie, en je komt het in elke les tegen.</p>
<p>Er zijn twee groepen klinkers: <b>voor in de mond</b> (e, i, ö, ü) en <b>achter in de mond</b> (a, ı, o, u).</p>
<p><b>Soort 1 (e of a):</b> na e, i, ö, ü komt <b>e</b>; na a, ı, o, u komt <b>a</b>. Zo werkt het meervoud: <i>ev<b>ler</b></i> (huizen), <i>araba<b>lar</b></i> (auto's).</p>
<p><b>Soort 2 (i, ı, ü of u):</b> na e/i komt <b>i</b>, na a/ı komt <b>ı</b>, na ö/ü komt <b>ü</b>, na o/u komt <b>u</b>. Zo werkt «ik ben»: <i>iyiy<b>im</b></i>, <i>Hollandalıy<b>ım</b></i>, <i>üzgün<b>üm</b></i>, <i>doktor<b>um</b></i>.</p>
<p>Je hoeft dit niet in één keer te kennen. Kijk steeds naar de <b>laatste klinker</b> van het woord, dan gaat het vanzelf goed klinken.</p>`,
        table: [['laatste klinker', 'soort 1', 'soort 2', 'voorbeeld'], ['e, i', 'e', 'i', 'evler · iyiyim'], ['ö, ü', 'e', 'ü', 'gözler · üzgünüm'], ['a, ı', 'a', 'ı', 'kızlar · Hollandalıyım'], ['o, u', 'a', 'u', 'okullar · doktorum']],
        sum: 'Evler, arabalar. İyiyim, doktorum.',
        ex: [['İyiyim.', 'Het gaat goed met me. (lett.: ik ben goed)'], ['Yorgunum.', 'Ik ben moe.']] },
      { t: '«Ik ben…»: zijn is een uitgang', es: 'Ben …-im',
        html: `<p>Het Turks heeft <b>geen los werkwoord «zijn»</b> in de tegenwoordige tijd. Je plakt een <b>persoonsuitgang</b> achter het woord: <i>öğrenci</i> (student) → <i>öğrenci<b>yim</b></i> (ik ben student).</p>
<p>Eindigt het woord op een klinker, dan komt er bij «ik» en «wij» een <b>y</b> tussen: <i>iyi<b>y</b>im</i>, <i>öğrenci<b>y</b>iz</i>. Zo botsen er geen twee klinkers.</p>
<p>Bij <b>o</b> (hij, zij, het) komt er <b>niets</b> achter: <i>O öğretmen.</i> = Hij/zij is leraar. Het Turks kent geen verschil tussen hij, zij en het: alles is <b>o</b>.</p>
<p>Het woordje <i>ben</i>, <i>sen</i>… mag je weglaten; de uitgang zegt al wie het is: <i>Öğrenciyim.</i> Je zegt het erbij als je nadruk wilt: <i><b>Ben</b> öğrenciyim.</i></p>`,
        table: [['', 'na e / i', 'na a / ı', 'na o / u', 'na ö / ü'], ['ben (ik)', '-(y)im', '-(y)ım', '-(y)um', '-(y)üm'], ['sen (jij)', '-sin', '-sın', '-sun', '-sün'], ['o (hij / zij / het)', '–', '–', '–', '–'],
          ['biz (wij)', '-(y)iz', '-(y)ız', '-(y)uz', '-(y)üz'], ['siz (u / jullie)', '-siniz', '-sınız', '-sunuz', '-sünüz'], ['onlar (zij)', '-(ler)', '-(lar)', '-(lar)', '-(ler)']],
        sum: 'Ben öğrenciyim. Sen öğretmensin. O doktor.',
        ex: [['Ben öğrenciyim.', 'Ik ben student.'], ['Sen öğretmensin.', 'Jij bent leraar.'], ['O arkadaşım.', 'Hij/zij is mijn vriend(in).'], ['Nasılsınız? — İyiyiz.', 'Hoe gaat het met jullie? — Goed.']] }
    ],
    dialogue: {
      t: 'Eerste dag op de taalcursus', place: 'İstanbul 🇹🇷',
      lines: [
        ['Sanne', 'Merhaba! Günaydın.', 'Hallo! Goedemorgen.'],
        ['Emre', 'Günaydın. Nasılsın?', 'Goedemorgen. Hoe gaat het?'],
        ['Sanne', 'İyiyim, teşekkürler. Sen nasılsın?', 'Goed, dank je. En met jou?'],
        ['Emre', 'Ben de iyiyim. Benim adım Emre. Senin adın ne?', 'Met mij gaat het ook goed. Ik heet Emre. Hoe heet jij?'],
        ['Sanne', 'Benim adım Sanne. Memnun oldum.', 'Ik heet Sanne. Aangenaam.'],
        ['Emre', 'Ben de memnun oldum. Sen öğrenci misin?', 'Insgelijks. Ben jij student?'],
        ['Sanne', 'Evet, öğrenciyim. Sen de öğrenci misin?', 'Ja, ik ben student. Ben jij ook student?'],
        ['Emre', 'Hayır, ben öğretmenim.', 'Nee, ik ben leraar.'],
        ['Sanne', 'Tamam! Görüşürüz, Emre.', 'Oké! Tot ziens, Emre.'],
        ['Emre', 'Görüşürüz. İyi günler!', 'Tot ziens. Fijne dag!']
      ],
      q: [
        { t: 'mc', q: 'Wat is Emre?', o: ['Leraar', 'Student', 'Een vriend van Sanne'] },
        { t: 'mc', q: 'Hoe gaat het met Sanne?', o: ['Goed', 'Ze is moe', 'Slecht'] },
        { t: 'mc', q: 'Wat betekent «Memnun oldum»?', o: ['Aangenaam', 'Tot ziens', 'Dank je wel'] }
      ]
    },
    culture: { t: 'Hoşça kal of güle güle?', html: `<p>Bij het afscheid zegt degene die <b>weggaat</b> <i>hoşça kal</i> (lett.: «blijf prettig»). Degene die <b>blijft</b> antwoordt <i>güle güle</i> (lett.: «lachend lachend», ga met een glimlach). Twijfel je? <i>Görüşürüz</i> (tot ziens) kan altijd.</p>
<p>Tegen onbekenden, ouderen en in winkels zeg je <b>siz</b> (u): <i>Nasılsınız?</i> Tegen vrienden, familie en kinderen zeg je <b>sen</b> (jij): <i>Nasılsın?</i></p>
<p>🤝 Bij een eerste ontmoeting geef je een hand. Goede bekenden geven vaak twee zoenen op de wang. Uit respect spreek je mensen aan met voornaam + <b>Bey</b> (meneer) of <b>Hanım</b> (mevrouw): <i>Emre Bey</i>, <i>Elif Hanım</i>.</p>` },
    ex: [
      { t: 'mc', q: 'Hoe spreek je de Turkse ç uit, zoals in «çay»?', o: ['tsj', 'k', 's'], tag: 'tr-klank' },
      { t: 'mc', q: 'Hoe spreek je de Turkse c uit, zoals in «cam»?', o: ['dzj', 'k', 's'], x: 'De c klinkt altijd als dzj, nooit als k of s.', tag: 'tr-klank' },
      { t: 'mc', q: 'Welke klank heeft de u in «su» (water)?', o: ['oe', 'uu', 'u als in «put»'], tag: 'tr-klank' },
      { t: 'cloze', s: 'Ben öğrenci___.', a: ['yim'], o: ['yim', 'sin', 'yız'], nl: 'Ik ben student.', tag: 'tr-zijn' },
      { t: 'cloze', s: 'Sen öğretmen___.', a: ['sin'], o: ['sin', 'im', 'sın'], nl: 'Jij bent leraar.', x: 'De laatste klinker van öğretmen is e, dus -sin.', tag: 'tr-zijn' },
      { t: 'cloze', s: 'Ben doktor___.', a: ['um'], o: ['um', 'im', 'yum'], nl: 'Ik ben dokter.', x: 'Na o komt u. Doktor eindigt op een medeklinker, dus zonder y.', tag: 'tr-harm' },
      { t: 'cloze', s: 'Nasıl___?', h: 'tegen een vriend', a: ['sın'], o: ['sın', 'sin', 'sınız'], nl: 'Hoe gaat het?', x: 'Na ı komt ı: nasılsın.', tag: 'tr-harm' },
      { t: 'cloze', s: 'İyi___, teşekkürler.', a: ['yim'], h: 'ik ben', nl: 'Goed, dank je.', tag: 'tr-zijn' },
      { t: 'mc', q: 'Je gaat weg bij een vriend. Wat zeg jij?', o: ['Hoşça kal.', 'Güle güle.', 'Günaydın.'], x: 'Wie weggaat zegt hoşça kal; wie blijft zegt güle güle.', tag: 'vocab' },
      { t: 'mc', q: 'Iemand zegt «Teşekkür ederim». Wat zeg je terug?', o: ['Rica ederim.', 'Memnun oldum.', 'Özür dilerim.'], tag: 'vocab' },
      { t: 'mc', q: 'Hoe vraag je beleefd (met u) hoe het gaat?', o: ['Nasılsınız?', 'Nasılsın?', 'Adın ne?'], tag: 'tr-beleefd' },
      { t: 'tr', nl: 'Ik heet Anna.', a: ['Benim adım Anna.', 'Adım Anna.', 'Ben Anna.'], tag: 'tr-zijn' },
      { t: 'tr', nl: 'Hoe heet je?', a: ['Adın ne?', 'Senin adın ne?'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik ben student.', a: ['(Ben) öğrenciyim.'], tag: 'tr-zijn' },
      { t: 'tr', nl: 'Goedemorgen! Hoe gaat het?', a: ['Günaydın! Nasılsın?', 'Günaydın! Nasılsınız?'], tag: 'vocab' },
      { t: 'order', s: 'Benim adım Sanne, memnun oldum.', nl: 'Ik heet Sanne, aangenaam.', tag: 'tr-volg' },
      { t: 'match', p: [['merhaba', 'hallo'], ['evet', 'ja'], ['hayır', 'nee'], ['lütfen', 'alsjeblieft'], ['tamam', 'oké']], tag: 'vocab' }
    ],
    reading: {
      t: 'Merhaba, ben Daan', type: 'Profiel in een taal-app',
      p: [
        ['Merhaba! Benim adım Daan. Ben öğrenciyim.', 'Hallo! Ik heet Daan. Ik ben student.'],
        ['Ben Hollandalıyım. Türkçe öğreniyorum.', 'Ik ben Nederlander. Ik leer Turks.'],
        ['Arkadaşım Emre öğretmen. O çok iyi bir öğretmen.', 'Mijn vriend Emre is leraar. Hij is een heel goede leraar.'],
        ['Sen nasılsın? Görüşürüz!', 'Hoe gaat het met jou? Tot ziens!']
      ],
      gl: [['Hollandalıyım', 'ik ben Nederlander'], ['Türkçe öğreniyorum', 'ik leer Turks'], ['çok iyi', 'heel goed'], ['bir', 'een']],
      q: [
        { t: 'mc', q: 'Wat is Daan?', o: ['Student', 'Leraar', 'Dokter'] },
        { t: 'mc', q: 'Wie is Emre?', o: ['Een vriend van Daan', 'De broer van Daan', 'Een student'] },
        { t: 'mc', q: 'Welke taal leert Daan?', o: ['Turks', 'Nederlands', 'Engels'] }
      ]
    },
    say: [['Merhaba, nasılsın?', 'Hallo, hoe gaat het?'], ['İyiyim, teşekkürler. Sen nasılsın?', 'Goed, dank je. En met jou?'], ['Benim adım Sanne. Memnun oldum.', 'Ik heet Sanne. Aangenaam.'], ['Görüşürüz, iyi günler!', 'Tot ziens, fijne dag!']],
    task: { nl: 'Stel jezelf voor in 3 of 4 zinnen: groet, zeg hoe je heet, zeg wat je bent (student, leraar…) en vraag hoe het met de ander gaat.', model: 'Merhaba! Benim adım Anna. Ben öğrenciyim. Sen nasılsın?' },
    scenario: { nl: 'Je ontmoet Zeynep, een nieuwe klasgenoot op je cursus Turks in İstanbul.', role: 'You are Zeynep, a friendly young woman from İstanbul who helps out at a Turkish language school. It is the first day of class. Use only very simple Turkish.', goal: 'Groet Zeynep, stel jezelf voor en vraag hoe het met haar gaat.' }
  });

  /* ───────────────────────── A1 · 2 ───────────────────────── */
  U({
    id: 'tr-a1-02', level: 'A1', icon: '🌍', title: 'Nerelisin?', nl: 'Landen, talen en beroepen',
    goals: ['Zeggen waar je vandaan komt en welke talen je spreekt', 'Vragen stellen met mi, mı, mu, mü', 'Ontkennen met değil', 'Je beroep noemen'],
    vocab: [
      ['Nerelisin?', 'Waar kom je vandaan?'], ['Hollanda', 'Nederland'], ['Hollandalı', 'Nederlander / Nederlands'], ['Türkiye', 'Turkije'], ['Türk', 'Turk / Turks'],
      ['Belçika', 'België'], ['Belçikalı', 'Belg / Belgisch'], ['Almanya', 'Duitsland'], ['Alman', 'Duitser / Duits'], ['İngiltere', 'Engeland'], ['İngiliz', 'Engelsman / Engels'],
      ['Türkçe', 'Turks (de taal)'], ['Hollandaca', 'Nederlands (de taal)'], ['İngilizce', 'Engels (de taal)'], ['Almanca', 'Duits (de taal)'], ['dil', 'taal'], ['ülke', 'land'], ['şehir', 'stad'],
      ['Türkçe biliyorum.', 'Ik spreek Turks. (lett.: ik ken Turks)'], ['biraz', 'een beetje'], ['çok', 'heel / veel'], ['ama', 'maar'], ['ve', 'en'], ['değil', 'niet / geen'],
      ['doktor', 'dokter'], ['mühendis', 'ingenieur'], ['hemşire', 'verpleegkundige'], ['garson', 'ober'], ['Ne iş yapıyorsun?', 'Wat voor werk doe je?'], ['iş', 'werk']
    ],
    grammar: [
      { t: 'Waar kom je vandaan? -li, -lı, -lu, -lü', es: 'Nerelisin?',
        html: `<p>Achter een land of stad zet je <b>-li</b> om te zeggen dat iemand daarvandaan komt: <i>Hollanda</i> → <i>Hollanda<b>lı</b></i> (Nederlander), <i>İstanbul</i> → <i>İstanbul<b>lu</b></i> (iemand uit İstanbul). De klinker volgt de klinkerharmonie (soort 2).</p>
<p>De vraag is <b>Nerelisin?</b> (lett.: «van-waar-ben-jij?»), beleefd <b>Nerelisiniz?</b></p>
<p>Een taal maak je met <b>-ce / -ca</b> (na p, ç, t, k, s, ş, h, f: <b>-çe / -ça</b>): <i>İngiliz<b>ce</b></i>, <i>Alman<b>ca</b></i>, <i>Türk<b>çe</b></i>. Nederlands is <i>Hollandaca</i>; officieel zeg je ook <i>Felemenkçe</i>.</p>
<p><b>⚠️ Uitzondering:</b> een paar volken hebben een <b>eigen woord zonder -li</b>: <i>Türk</i>, <i>Alman</i>, <i>İngiliz</i>, <i>Fransız</i>, <i>Rus</i>. <b>Waarom?</b> Dit zijn oude volksnamen; hier is het land juist van het volk afgeleid (<i>Alman</i> → <i>Alman<b>ya</b></i>, <i>Türk</i> → <i>Türk<b>iye</b></i>) en niet andersom. Dus niet <s>Almanyalı</s> maar <i>Alman</i>.</p>`,
        table: [['land', 'inwoner', 'taal'], ['Hollanda', 'Hollandalı', 'Hollandaca'], ['Belçika', 'Belçikalı', '–'], ['Türkiye', 'Türk ⚠️', 'Türkçe'], ['Almanya', 'Alman ⚠️', 'Almanca'], ['İngiltere', 'İngiliz ⚠️', 'İngilizce']],
        sum: 'Nerelisin? Hollandalıyım. Türkçe biliyorum.',
        ex: [['Nerelisin? — Hollandalıyım.', 'Waar kom je vandaan? — Ik ben Nederlander.'], ['Elif Türk, Tom İngiliz.', 'Elif is Turks, Tom is Engels.'], ['Biraz Türkçe biliyorum.', 'Ik spreek een beetje Turks.']] },
      { t: 'Vragen met mi, mı, mu, mü', es: 'Soru: mi?',
        html: `<p>Een ja/nee-vraag maak je met het vraagwoordje <b>mi</b>. Het staat <b>los</b> achter het woord waar je naar vraagt en volgt de klinkerharmonie: <b>mi</b>, <b>mı</b>, <b>mu</b>, <b>mü</b>.</p>
<p>De persoonsuitgang verhuist naar het vraagwoordje: <i>Öğrenci<b>sin</b>.</i> → <i>Öğrenci <b>misin</b>?</i> Bij <i>o</i> is er geen uitgang: <i>O doktor <b>mu</b>?</i></p>
<p>De woordvolgorde verandert <b>niet</b>, anders dan in het Nederlands. Bij vraagwoorden als <i>ne</i> (wat) en <i>nerede</i> (waar) gebruik je <b>geen</b> mi: <i>Adın ne?</i></p>
<p>Antwoord: <i>Evet, öğrenciyim.</i> / <i>Hayır, öğrenci değilim.</i></p>`,
        table: [['bevestigend', 'vraag', 'laatste klinker'], ['Öğrencisin.', 'Öğrenci misin?', 'i → mi'], ['Hollandalısın.', 'Hollandalı mısın?', 'ı → mı'], ['O doktor.', 'O doktor mu?', 'o → mu'], ['O Türk.', 'O Türk mü?', 'ü → mü']],
        sum: 'Öğrenci misin? O doktor mu?',
        ex: [['Sen Hollandalı mısın?', 'Ben jij Nederlander?'], ['O öğretmen mi?', 'Is hij/zij leraar?'], ['Türk müsünüz?', 'Bent u Turks?']] },
      { t: 'Niet zijn: değil', es: 'Değil',
        html: `<p>«Niet zijn» zeg je met <b>değil</b>. De persoonsuitgang komt nu achter <i>değil</i>: <i>Öğrenci <b>değilim</b>.</i> (Ik ben geen student.)</p>
<p><i>Değil</i> verandert zelf nooit; de uitgangen zijn altijd die van e/i: <b>değilim</b>, <b>değilsin</b>, <b>değil</b>, <b>değiliz</b>, <b>değilsiniz</b>, <b>değiller</b>.</p>
<p>Het Turks heeft <b>geen lidwoord</b> «de» of «het» en ook geen woord als «geen»: <i>Doktor değilim.</i> = Ik ben geen dokter. De ğ in <i>değil</i> hoor je bijna niet: zeg <i>dee-il</i>.</p>`,
        table: [['', 'niet zijn'], ['ben', 'değilim'], ['sen', 'değilsin'], ['o', 'değil'], ['biz', 'değiliz'], ['siz', 'değilsiniz'], ['onlar', 'değiller']],
        sum: 'Ben doktor değilim. O Türk değil.',
        ex: [['Ben öğretmen değilim, öğrenciyim.', 'Ik ben geen leraar, ik ben student.'], ['O Alman değil, Hollandalı.', 'Hij/zij is geen Duitser, maar Nederlander.'], ['Türk değil misin?', 'Ben je geen Turk?']] }
    ],
    dialogue: {
      t: 'In de pauze', place: 'İstanbul 🇹🇷',
      lines: [
        ['Zeynep', 'Merhaba Daan! Sen Alman mısın?', 'Hallo Daan! Ben jij Duitser?'],
        ['Daan', 'Hayır, Alman değilim. Hollandalıyım.', 'Nee, ik ben geen Duitser. Ik ben Nederlander.'],
        ['Zeynep', 'Aa, Hollanda! Amsterdamlı mısın?', 'O, Nederland! Kom je uit Amsterdam?'],
        ['Daan', 'Hayır, Rotterdamlıyım. Sen nerelisin?', 'Nee, ik kom uit Rotterdam. Waar kom jij vandaan?'],
        ['Zeynep', 'Ben İzmirliyim, ama İstanbul çok güzel bir şehir.', 'Ik kom uit İzmir, maar İstanbul is een heel mooie stad.'],
        ['Daan', 'Evet, çok güzel. Ne iş yapıyorsun?', 'Ja, heel mooi. Wat voor werk doe je?'],
        ['Zeynep', 'Hemşireyim. Sen de hemşire misin?', 'Ik ben verpleegkundige. Ben jij ook verpleegkundige?'],
        ['Daan', 'Hayır, mühendisim. Biraz Türkçe biliyorum.', 'Nee, ik ben ingenieur. Ik spreek een beetje Turks.'],
        ['Zeynep', 'Türkçen çok iyi!', 'Je Turks is heel goed!'],
        ['Daan', 'Teşekkür ederim!', 'Dank je wel!']
      ],
      q: [
        { t: 'mc', q: 'Waar komt Daan vandaan?', o: ['Uit Rotterdam', 'Uit Amsterdam', 'Uit Duitsland'] },
        { t: 'mc', q: 'Wat is het beroep van Zeynep?', o: ['Verpleegkundige', 'Ingenieur', 'Lerares'] },
        { t: 'mc', q: 'Waar komt Zeynep vandaan?', o: ['Uit İzmir', 'Uit İstanbul', 'Uit Ankara'] }
      ]
    },
    culture: { t: 'Nerelisin: een echte Turkse vraag', html: `<p><b>Nerelisin?</b> is in Turkije een van de eerste vragen in een gesprek, ook tussen Turken onderling. Men bedoelt dan: uit welke stad of streek komt je familie? Het antwoord (<i>Trabzonluyum</i>, <i>İzmirliyim</i>) zegt veel over keuken, accent en humor.</p>
<p>Als buitenlander die een paar woorden Turks spreekt, krijg je vrijwel altijd te horen: <i>Türkçen çok iyi!</i> (Je Turks is heel goed!). Zeg gewoon <i>Teşekkür ederim</i> en praat verder; mensen vinden het echt leuk dat je het probeert.</p>
<p>🇳🇱 In Nederland wonen ruim 400.000 mensen met een Turkse achtergrond. De kans is groot dat je je Turks dicht bij huis kunt oefenen.</p>` },
    ex: [
      { t: 'cloze', s: 'Sen Hollandalı ___?', a: ['mısın'], o: ['mısın', 'misin', 'musun'], nl: 'Ben jij Nederlander?', x: 'Laatste klinker ı → mı.', tag: 'tr-mi' },
      { t: 'cloze', s: 'O doktor ___?', a: ['mu'], o: ['mu', 'mi', 'mü'], nl: 'Is hij dokter?', x: 'Laatste klinker o → mu.', tag: 'tr-mi' },
      { t: 'cloze', s: 'Siz Türk ___?', a: ['müsünüz'], o: ['müsünüz', 'misiniz', 'musunuz'], nl: 'Bent u Turks?', x: 'Laatste klinker ü → mü.', tag: 'tr-mi' },
      { t: 'cloze', s: 'Sen öğretmen ___?', a: ['misin'], h: 'vraagwoordje + jij', nl: 'Ben jij leraar?', tag: 'tr-mi' },
      { t: 'cloze', s: 'Ben Alman ___, Hollandalıyım.', a: ['değilim'], o: ['değilim', 'değil', 'değilsin'], nl: 'Ik ben geen Duitser, ik ben Nederlander.', tag: 'tr-degil' },
      { t: 'cloze', s: 'O garson ___, öğrenci.', a: ['değil'], o: ['değil', 'değilim', 'yok'], nl: 'Hij is geen ober, maar student.', tag: 'tr-degil' },
      { t: 'cloze', s: 'Ben İstanbul___yum.', a: ['lu'], o: ['lu', 'lı', 'li'], nl: 'Ik kom uit İstanbul.', x: 'Laatste klinker u → -lu.', tag: 'tr-li' },
      { t: 'mc', q: 'Hoe zeg je «een Duitser»?', o: ['Alman', 'Almanyalı', 'Almanca'], x: '⚠️ Uitzondering: Alman is een oude volksnaam; het land (Almanya) is ervan afgeleid, niet andersom.', tag: 'tr-li' },
      { t: 'mc', q: 'Welke taal hoort bij «Türk»?', o: ['Türkçe', 'Türkce', 'Türkça'], x: 'Na k wordt -ce → -çe; de klinker ü vraagt om e.', tag: 'tr-li' },
      { t: 'mc', q: 'Wat betekent «Nerelisin?»', o: ['Waar kom je vandaan?', 'Hoe heet je?', 'Waar woon je?'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik ben Nederlander.', a: ['(Ben) Hollandalıyım.'], tag: 'tr-li' },
      { t: 'tr', nl: 'Ik ben geen leraar.', a: ['(Ben) öğretmen değilim.'], tag: 'tr-degil' },
      { t: 'tr', nl: 'Ben jij student?', a: ['(Sen) öğrenci misin?'], tag: 'tr-mi' },
      { t: 'tr', nl: 'Ik spreek een beetje Turks.', a: ['Biraz Türkçe biliyorum.', 'Ben biraz Türkçe biliyorum.', 'Biraz Türkçe konuşuyorum.'], tag: 'vocab' },
      { t: 'order', s: 'Ben Alman değilim, Hollandalıyım.', nl: 'Ik ben geen Duitser, ik ben Nederlander.', tag: 'tr-degil' },
      { t: 'match', p: [['Hollanda', 'Nederland'], ['Almanya', 'Duitsland'], ['İngiltere', 'Engeland'], ['Türkiye', 'Turkije'], ['Belçika', 'België']], tag: 'vocab' }
    ],
    reading: {
      t: 'Yeni arkadaşlar', type: 'Bericht in de klassengroep',
      p: [
        ['Merhaba! Ben Lotte. Hollandalıyım, Utrechtliyim.', 'Hallo! Ik ben Lotte. Ik ben Nederlander, ik kom uit Utrecht.'],
        ['Ben doktorum. Hollandaca, İngilizce ve biraz Türkçe biliyorum.', 'Ik ben dokter. Ik spreek Nederlands, Engels en een beetje Turks.'],
        ['Arkadaşım Tom İngiliz, ama Londralı değil. O mühendis.', 'Mijn vriend Tom is Engels, maar hij komt niet uit Londen. Hij is ingenieur.'],
        ['Öğretmenimiz Elif Hanım Türk. O Ankaralı.', 'Onze lerares, mevrouw Elif, is Turks. Ze komt uit Ankara.']
      ],
      gl: [['yeni', 'nieuw'], ['öğretmenimiz', 'onze leraar / lerares'], ['Hanım', 'mevrouw (na de voornaam)']],
      q: [
        { t: 'mc', q: 'Welk beroep heeft Lotte?', o: ['Dokter', 'Ingenieur', 'Lerares'] },
        { t: 'mc', q: 'Waar komt Tom vandaan?', o: ['Uit Engeland', 'Uit Nederland', 'Uit Turkije'] },
        { t: 'mc', q: 'Waar komt de lerares vandaan?', o: ['Uit Ankara', 'Uit Londen', 'Uit Utrecht'] }
      ]
    },
    say: [['Nerelisin?', 'Waar kom je vandaan?'], ['Hollandalıyım, Rotterdamlıyım.', 'Ik ben Nederlander, ik kom uit Rotterdam.'], ['Biraz Türkçe biliyorum.', 'Ik spreek een beetje Turks.'], ['Alman değilim.', 'Ik ben geen Duitser.']],
    task: { nl: 'Schrijf 3 of 4 zinnen: waar je vandaan komt, wat je beroep is (of dat je student bent) en welke talen je spreekt.', model: 'Ben Hollandalıyım, Utrechtliyim. Öğrenciyim. Hollandaca, İngilizce ve biraz Türkçe biliyorum.' },
    scenario: { nl: 'Je zit in een theehuis in İzmir en raakt in gesprek met Mehmet.', role: 'You are Mehmet, a curious and friendly man in his fifties sitting in a tea garden in İzmir. Ask the learner where they are from, what their job is and which languages they speak. Use only very simple Turkish.', goal: 'Vertel waar je vandaan komt en wat je doet, en vraag het ook aan Mehmet.' }
  });

  /* ───────────────────────── A1 · 3 ───────────────────────── */
  U({
    id: 'tr-a1-03', level: 'A1', icon: '👨‍👩‍👧', title: 'Ailem', nl: 'Familie: mijn, jouw en «ik heb»',
    goals: ['Over je familie praten', 'Mijn, jouw, zijn en haar zeggen met een uitgang', '«Ik heb» en «ik heb geen» zeggen met var en yok'],
    vocab: [
      ['aile', 'familie / gezin'], ['anne', 'moeder'], ['baba', 'vader'], ['kardeş', 'broer of zus'], ['abi', 'oudere broer'], ['abla', 'oudere zus'],
      ['erkek kardeş', 'broer (jonger)'], ['kız kardeş', 'zus (jonger)'], ['çocuk', 'kind'], ['oğul', 'zoon'], ['kız', 'dochter / meisje'], ['eş', 'echtgenoot / echtgenote'],
      ['dede', 'opa'], ['babaanne', 'oma (moeder van je vader)'], ['anneanne', 'oma (moeder van je moeder)'], ['amca', 'oom (broer van je vader)'], ['dayı', 'oom (broer van je moeder)'],
      ['hala', 'tante (zus van je vader)'], ['teyze', 'tante (zus van je moeder)'], ['kuzen', 'neef / nicht'], ['evli', 'getrouwd'], ['bekâr', 'vrijgezel'],
      ['var', 'er is / er zijn'], ['yok', 'er is niet / er zijn niet'], ['kim', 'wie'], ['kedi', 'kat'], ['köpek', 'hond'], ['ev', 'huis'], ['büyük', 'groot'], ['küçük', 'klein'], ['genç', 'jong'], ['yaşlı', 'oud (van mensen)']
    ],
    grammar: [
      { t: 'Mijn, jouw, zijn: bezit is een uitgang', es: 'İyelik ekleri',
        html: `<p>«Mijn», «jouw» en «zijn/haar» zijn in het Turks <b>uitgangen</b> achter het woord: <i>ev</i> (huis) → <i>ev<b>im</b></i> (mijn huis), <i>ev<b>in</b></i> (jouw huis), <i>ev<b>i</b></i> (zijn/haar huis). De klinker volgt de klinkerharmonie (soort 2).</p>
<p>Eindigt het woord op een <b>klinker</b>, dan valt de klinker van de uitgang weg: <i>anne<b>m</b></i>, <i>baba<b>n</b></i>. Bij «zijn/haar» komt er dan een <b>s</b> tussen: <i>anne<b>si</b></i>, <i>baba<b>sı</b></i>.</p>
<p>De woorden <b>benim</b> (van mij), <b>senin</b> (van jou), <b>onun</b> (van hem/haar) mag je ervoor zetten voor nadruk: <i><b>benim</b> annem</i>. De uitgang blijft altijd staan.</p>
<p><b>Verzachting:</b> een <b>k</b>, <b>p</b>, <b>ç</b> of <b>t</b> aan het eind van een langer woord wordt zacht vóór een klinker: k → <b>ğ</b>, p → <b>b</b>, ç → <b>c</b>, t → <b>d</b>. Dus <i>çocuk</i> → <i>çocu<b>ğ</b>um</i> (mijn kind), <i>köpek</i> → <i>köpe<b>ğ</b>i</i> (zijn hond).</p>
<p><b>⚠️ Uitzondering:</b> <i>oğul</i> (zoon) → <i>oğ<b>l</b>um</i>, niet <s>oğulum</s>. <b>Waarom?</b> Bij een klein groepje oude woorden valt de laatste klinker weg zodra er een uitgang met een klinker achter komt; dat spreekt makkelijker uit. Zo ook later: <i>isim</i> → <i>ismim</i> (mijn naam), <i>şehir</i> → <i>şehrim</i> (mijn stad).</p>`,
        table: [['', 'ev (huis)', 'anne (moeder)', 'okul (school)', 'çocuk (kind)'], ['mijn', 'evim', 'annem', 'okulum', 'çocuğum'], ['jouw', 'evin', 'annen', 'okulun', 'çocuğun'], ['zijn / haar', 'evi', 'annesi', 'okulu', 'çocuğu'],
          ['ons', 'evimiz', 'annemiz', 'okulumuz', 'çocuğumuz'], ['uw / jullie', 'eviniz', 'anneniz', 'okulunuz', 'çocuğunuz'], ['hun', 'evleri', 'anneleri', 'okulları', 'çocukları']],
        sum: 'Annem, baban, kardeşi, evimiz.',
        ex: [['Annem öğretmen.', 'Mijn moeder is lerares.'], ['Baban nerede?', 'Waar is je vader?'], ['Bu benim köpeğim.', 'Dit is mijn hond.'], ['Onun adı Can.', 'Hij heet Can. (lett.: zijn naam is Can)']] },
      { t: '«Ik heb»: var en yok', es: 'Var / yok',
        html: `<p>Het Turks heeft <b>geen werkwoord «hebben»</b>. Je zegt: «mijn … is er». Dat doe je met <b>var</b> (er is) en <b>yok</b> (er is niet).</p>
<p><i>Bir kardeş<b>im</b> var.</i> = Ik heb een broer of zus. (lett.: een broer-van-mij is er.)<br><i>Kedi<b>m</b> yok.</i> = Ik heb geen kat. (lett.: mijn kat is er niet.)</p>
<p>De bezitsuitgang zegt dus <b>wie</b> iets heeft: <i>Çocuğ<b>un</b> var mı?</i> = Heb <b>jij</b> kinderen? <i>İki çocuğ<b>u</b> var.</i> = <b>Hij/zij</b> heeft twee kinderen.</p>
<p>Zonder bezitsuitgang betekenen ze gewoon «er is» en «er is niet»: <i>Evde çay var mı? — Yok.</i> (Is er thee in huis? — Nee.)</p>
<p>Let op: <i>var</i> en <i>yok</i> staan <b>aan het eind</b> van de zin. De vraag maak je met <i>var <b>mı</b>?</i> en <i>yok <b>mu</b>?</i></p>`,
        table: [['Nederlands', 'Turks'], ['Ik heb een broer.', 'Bir erkek kardeşim var.'], ['Ik heb geen hond.', 'Köpeğim yok.'], ['Heb je kinderen?', 'Çocuğun var mı?'], ['Hij heeft een huis.', 'Bir evi var.']],
        sum: 'Bir kardeşim var. Kedim yok.',
        ex: [['İki kardeşim var.', 'Ik heb twee broers/zussen.'], ['Kardeşin var mı?', 'Heb je broers of zussen?'], ['Hayır, kardeşim yok.', 'Nee, ik heb geen broers of zussen.']] },
      { t: 'Familiewoorden: preciezer dan in het Nederlands', es: 'Akrabalar',
        html: `<p>Het Turks maakt onderscheid dat wij niet maken. <b>Abi</b> is je <b>oudere</b> broer en <b>abla</b> je <b>oudere</b> zus; een jongere broer of zus is gewoon <b>kardeş</b> (of preciezer: <i>erkek kardeş</i>, <i>kız kardeş</i>).</p>
<p>Ooms, tantes en oma's hebben een eigen woord per kant van de familie: via je <b>vader</b> <i>amca</i>, <i>hala</i>, <i>babaanne</i>; via je <b>moeder</b> <i>dayı</i>, <i>teyze</i>, <i>anneanne</i>.</p>
<p>Na een <b>getal</b> blijft het woord <b>enkelvoud</b>: <i>iki kardeş</i> (twee broers/zussen), niet <s>iki kardeşler</s>. Het getal zegt al dat het er meer zijn.</p>`,
        table: [['', 'kant van vader', 'kant van moeder'], ['oom', 'amca', 'dayı'], ['tante', 'hala', 'teyze'], ['oma', 'babaanne', 'anneanne']],
        ex: [['Ablam İzmir’de yaşıyor.', 'Mijn oudere zus woont in İzmir.'], ['Teyzem çok genç.', 'Mijn tante (zus van mijn moeder) is heel jong.']] }
    ],
    dialogue: {
      t: 'Foto’s kijken', place: 'Ankara 🇹🇷',
      lines: [
        ['Elif', 'Bu kim? Annen mi?', 'Wie is dit? Je moeder?'],
        ['Daan', 'Evet, bu annem. Adı Marja.', 'Ja, dit is mijn moeder. Ze heet Marja.'],
        ['Elif', 'Çok genç! Kardeşin var mı?', 'Heel jong! Heb je broers of zussen?'],
        ['Daan', 'Evet, bir ablam var. Adı Lotte. Erkek kardeşim yok.', 'Ja, ik heb een oudere zus. Ze heet Lotte. Ik heb geen broer.'],
        ['Elif', 'Ablan evli mi?', 'Is je zus getrouwd?'],
        ['Daan', 'Evet, evli. İki çocuğu var. Senin kardeşin var mı?', 'Ja, ze is getrouwd. Ze heeft twee kinderen. Heb jij broers of zussen?'],
        ['Elif', 'Benim üç kardeşim var: bir abim ve iki kız kardeşim.', 'Ik heb drie broers en zussen: een oudere broer en twee zusjes.'],
        ['Daan', 'Büyük bir aile! Kediniz var mı?', 'Een grote familie! Hebben jullie een kat?'],
        ['Elif', 'Kedimiz yok, ama küçük bir köpeğimiz var.', 'We hebben geen kat, maar we hebben een klein hondje.']
      ],
      q: [
        { t: 'mc', q: 'Wie is Lotte?', o: ['De oudere zus van Daan', 'De moeder van Daan', 'De zus van Elif'] },
        { t: 'mc', q: 'Hoeveel broers en zussen heeft Elif?', o: ['Drie', 'Twee', 'Eén'] },
        { t: 'mc', q: 'Welk huisdier heeft de familie van Elif?', o: ['Een hond', 'Een kat', 'Geen'] }
      ]
    },
    culture: { t: 'Abi, abla, teyze: iedereen is familie', html: `<p>Familiewoorden gebruik je in Turkije ook voor mensen die <b>geen familie</b> zijn. Een iets oudere man spreek je aan met <b>abi</b>, een iets oudere vrouw met <b>abla</b>: <i>Emre Abi</i>, <i>Elif Abla</i>. Dat is warm en respectvol tegelijk.</p>
<p>Een oudere buurvrouw is <b>teyze</b>, een oudere man <b>amca</b>. Kinderen zeggen het tegen alle volwassenen; je hoort het de hele dag op straat en in winkels.</p>
<p>👵 Respect voor ouderen is belangrijk. Op feestdagen kussen jongeren de hand van opa en oma en brengen die naar hun voorhoofd.</p>` },
    ex: [
      { t: 'cloze', s: 'Bu benim anne___.', a: ['m'], o: ['m', 'im', 'si'], nl: 'Dit is mijn moeder.', x: 'Anne eindigt op een klinker: alleen -m.', tag: 'tr-bezit' },
      { t: 'cloze', s: 'Senin ev___ çok büyük.', a: ['in'], o: ['in', 'im', 'i'], nl: 'Jouw huis is heel groot.', tag: 'tr-bezit' },
      { t: 'cloze', s: 'Onun baba___ doktor.', a: ['sı'], o: ['sı', 'si', 'ı'], nl: 'Zijn vader is dokter.', x: 'Na een klinker komt -s- ertussen; na a volgt ı.', tag: 'tr-bezit' },
      { t: 'cloze', s: 'Bizim okul___ küçük.', a: ['umuz'], o: ['umuz', 'imiz', 'ımız'], nl: 'Onze school is klein.', tag: 'tr-bezit' },
      { t: 'mc', q: 'Hoe zeg je «mijn kind»?', o: ['çocuğum', 'çocukum', 'çocuğim'], x: 'De k wordt ğ vóór een klinker; na u volgt u.', tag: 'tr-bezit' },
      { t: 'mc', q: 'Hoe zeg je «mijn zoon»?', o: ['oğlum', 'oğulum', 'oğlim'], x: '⚠️ Uitzondering: bij oğul valt de u weg zodra er een uitgang met een klinker achter komt, omdat dat makkelijker uitspreekt.', tag: 'tr-bezit' },
      { t: 'cloze', s: 'Bir kardeşim ___.', a: ['var'], o: ['var', 'yok', 'değil'], nl: 'Ik heb een broer of zus.', tag: 'tr-var' },
      { t: 'cloze', s: 'Hayır, kedim ___.', a: ['yok'], o: ['yok', 'var', 'değil'], nl: 'Nee, ik heb geen kat.', x: 'Niet hebben = yok. Değil gebruik je bij «niet zijn».', tag: 'tr-var' },
      { t: 'cloze', s: 'Köpeğin var ___?', a: ['mı'], o: ['mı', 'mi', 'mu'], nl: 'Heb je een hond?', tag: 'tr-mi' },
      { t: 'mc', q: 'Wie is je «teyze»?', o: ['De zus van je moeder', 'De zus van je vader', 'Je oma'], tag: 'vocab' },
      { t: 'mc', q: 'Hoe zeg je «twee broers/zussen»?', o: ['iki kardeş', 'iki kardeşler', 'ikiler kardeş'], x: 'Na een getal blijft het woord enkelvoud.', tag: 'tr-meerv' },
      { t: 'tr', nl: 'Ik heb een oudere zus.', a: ['Bir ablam var.', 'Benim bir ablam var.', 'Ablam var.'], tag: 'tr-var' },
      { t: 'tr', nl: 'Mijn vader is leraar.', a: ['Babam öğretmen.', 'Benim babam öğretmen.'], tag: 'tr-bezit' },
      { t: 'tr', nl: 'Heb je broers of zussen?', a: ['Kardeşin var mı?', 'Senin kardeşin var mı?', 'Kardeşlerin var mı?'], tag: 'tr-var' },
      { t: 'tr', nl: 'Ik heb geen hond.', a: ['Köpeğim yok.', 'Benim köpeğim yok.'], tag: 'tr-var' },
      { t: 'order', s: 'Benim iki kardeşim var.', nl: 'Ik heb twee broers/zussen.', tag: 'tr-volg' },
      { t: 'match', p: [['anne', 'moeder'], ['baba', 'vader'], ['abla', 'oudere zus'], ['abi', 'oudere broer'], ['dede', 'opa']], tag: 'vocab' }
    ],
    reading: {
      t: 'Benim ailem', type: 'Schoolopstel',
      p: [
        ['Benim adım Can. Ailem büyük değil.', 'Ik heet Can. Mijn familie is niet groot.'],
        ['Annemin adı Ayşe. O hemşire. Babamın adı Hakan. O garson.', 'Mijn moeder heet Ayşe. Ze is verpleegkundige. Mijn vader heet Hakan. Hij is ober.'],
        ['Bir ablam var. Adı Selin. Selin evli ve bir oğlu var.', 'Ik heb een oudere zus. Ze heet Selin. Selin is getrouwd en heeft een zoon.'],
        ['Erkek kardeşim yok. Ama bir kedim var. Kedimin adı Pamuk!', 'Ik heb geen broer. Maar ik heb een kat. Mijn kat heet Pamuk!']
      ],
      gl: [['annemin adı', 'de naam van mijn moeder'], ['babamın adı', 'de naam van mijn vader'], ['pamuk', 'katoen (een populaire naam voor een witte kat)']],
      q: [
        { t: 'mc', q: 'Wat is het beroep van de moeder van Can?', o: ['Verpleegkundige', 'Ober', 'Lerares'] },
        { t: 'mc', q: 'Wie heeft een zoon?', o: ['Selin', 'Can', 'Ayşe'] },
        { t: 'mc', q: 'Wat heeft Can niet?', o: ['Een broer', 'Een zus', 'Een kat'] }
      ]
    },
    say: [['Bir ablam var.', 'Ik heb een oudere zus.'], ['Kardeşin var mı?', 'Heb je broers of zussen?'], ['Annem öğretmen, babam doktor.', 'Mijn moeder is lerares, mijn vader is dokter.'], ['Köpeğim yok.', 'Ik heb geen hond.']],
    task: { nl: 'Beschrijf je familie in 4 zinnen: wie zijn er, hoe heten ze, wat doen ze? Gebruik var of yok.', model: 'Ailem küçük. Annemin adı Marja, babamın adı Peter. Bir ablam var, erkek kardeşim yok. Bir kedim var.' },
    scenario: { nl: 'Je bent op bezoek bij de familie van je Turkse vriend. Zijn oma Fatma wil alles over jouw familie weten.', role: 'You are Fatma Teyze, a warm and curious Turkish grandmother in Ankara. You ask the guest about their family: parents, brothers and sisters, whether they are married, children, pets. Use only very simple Turkish and react warmly.', goal: 'Vertel over je familie en vraag naar de hare.' }
  });

  /* ───────────────────────── A1 · 4 ───────────────────────── */
  U({
    id: 'tr-a1-04', level: 'A1', icon: '🔢', title: 'Sayılar ve saat', nl: 'Getallen, leeftijd en de klok',
    goals: ['Tellen tot duizend', 'Je leeftijd en telefoonnummer zeggen', 'Vragen en zeggen hoe laat het is', 'Het meervoud maken met -ler en -lar'],
    vocab: [
      ['sıfır', 'nul'], ['bir', 'één / een'], ['iki', 'twee'], ['üç', 'drie'], ['dört', 'vier'], ['beş', 'vijf'], ['altı', 'zes'], ['yedi', 'zeven'], ['sekiz', 'acht'], ['dokuz', 'negen'], ['on', 'tien'],
      ['yirmi', 'twintig'], ['otuz', 'dertig'], ['kırk', 'veertig'], ['elli', 'vijftig'], ['altmış', 'zestig'], ['yetmiş', 'zeventig'], ['seksen', 'tachtig'], ['doksan', 'negentig'], ['yüz', 'honderd'], ['bin', 'duizend'],
      ['kaç', 'hoeveel'], ['Kaç yaşındasın?', 'Hoe oud ben je?'], ['yaş', 'leeftijd'], ['Saat kaç?', 'Hoe laat is het?'], ['saat', 'uur / klok / horloge'], ['dakika', 'minuut'], ['buçuk', 'en een half'], ['çeyrek', 'kwart'],
      ['şimdi', 'nu'], ['bugün', 'vandaag'], ['yarın', 'morgen'], ['sabah', 'ochtend'], ['akşam', 'avond'], ['telefon numarası', 'telefoonnummer']
    ],
    grammar: [
      { t: 'Getallen: tiental eerst, zonder «en»', es: 'Sayılar',
        html: `<p>Turkse getallen zijn heel regelmatig. Je zegt eerst het <b>tiental</b> en dan de <b>eenheid</b>, zonder «en» ertussen: <i>on bir</i> (11, lett.: tien één), <i>yirmi beş</i> (25), <i>kırk iki</i> (42). Precies andersom dan in het Nederlands (vijf-en-twintig).</p>
<p>Honderdtallen en duizendtallen gaan net zo: <i>yüz elli</i> (150), <i>iki yüz</i> (200), <i>bin dokuz yüz doksan</i> (1990). Voor <i>yüz</i> en <i>bin</i> zeg je geen «bir»: <i>yüz</i> = honderd, <i>bin</i> = duizend.</p>
<p>Na een getal en na <b>kaç</b> (hoeveel) staat het woord in het <b>enkelvoud</b>: <i>üç kitap</i> (drie boeken), <i>Kaç kişi?</i> (Hoeveel personen?).</p>
<p><b>Leeftijd:</b> <i>Kaç yaşındasın?</i> — <i>Yirmi sekiz yaşındayım.</i> (lett.: ik ben in-zijn-28-leeftijd). Leer het als vaste zin.</p>`,
        table: [['11', 'on bir', '60', 'altmış'], ['12', 'on iki', '70', 'yetmiş'], ['20', 'yirmi', '80', 'seksen'], ['21', 'yirmi bir', '90', 'doksan'], ['30', 'otuz', '100', 'yüz'], ['40', 'kırk', '250', 'iki yüz elli'], ['50', 'elli', '1000', 'bin']],
        sum: 'On bir, yirmi beş, yüz elli.',
        ex: [['Yirmi sekiz yaşındayım.', 'Ik ben achtentwintig.'], ['Kaç yaşındasın?', 'Hoe oud ben je?'], ['Üç kardeşim var.', 'Ik heb drie broers/zussen.']] },
      { t: 'Meervoud: -ler of -lar', es: 'Çoğul: -ler / -lar',
        html: `<p>Het meervoud maak je met <b>-ler</b> (na e, i, ö, ü) of <b>-lar</b> (na a, ı, o, u): <i>ev<b>ler</b></i> (huizen), <i>gün<b>ler</b></i> (dagen), <i>kız<b>lar</b></i> (meisjes), <i>çocuk<b>lar</b></i> (kinderen).</p>
<p>Je gebruikt het meervoud <b>minder vaak</b> dan in het Nederlands. Na een getal of na <i>kaç</i>, <i>çok</i> (veel) en <i>birkaç</i> (een paar) blijft het woord enkelvoud: <i>beş gün</i>, <i>çok çocuk</i>.</p>
<p>Je herkent het in bekende groeten: <i>iyi gün<b>ler</b></i>, <i>iyi akşam<b>lar</b></i>, <i>teşekkür<b>ler</b></i>.</p>
<p><b>⚠️ Uitzondering:</b> <i>saat</i> (uur) → <i>saat<b>ler</b></i>, niet <s>saatlar</s>, ook al is de laatste klinker een a. <b>Waarom?</b> <i>Saat</i> komt uit het Arabisch en heeft daar een «lichte» a die voor in de mond wordt uitgesproken; het Turks behandelt die als een voorklinker. Hetzelfde geldt voor een paar andere leenwoorden, zoals <i>harf</i> → <i>harfler</i> (letters) en <i>alkol</i> → <i>alkoller</i>.</p>`,
        table: [['enkelvoud', 'meervoud', 'laatste klinker'], ['ev', 'evler', 'e'], ['göz', 'gözler', 'ö'], ['araba', 'arabalar', 'a'], ['okul', 'okullar', 'u'], ['saat ⚠️', 'saatler', 'a, maar toch -ler']],
        sum: 'Evler, arabalar, saatler.',
        ex: [['Çocuklar okulda.', 'De kinderen zijn op school.'], ['İki saat bekliyorum.', 'Ik wacht twee uur.'], ['İyi günler!', 'Fijne dag!']] },
      { t: 'Hoe laat is het?', es: 'Saat kaç?',
        html: `<p><b>Saat kaç?</b> = Hoe laat is het? Het antwoord begint met <i>saat</i>: <i>Saat üç.</i> (Het is drie uur.)</p>
<p><b>Let op, valse vriend:</b> <b>buçuk</b> betekent «en een half» en telt <b>op</b> bij het uur. <i>Saat üç buçuk</i> = <b>half vier</b> (drie-en-een-half), niet half drie!</p>
<p><b>Over</b> het uur: uur + <i>-i</i> + minuten + <b>geçiyor</b>: <i>üçü on geçiyor</i> (tien over drie), <i>üçü çeyrek geçiyor</i> (kwart over drie).<br><b>Voor</b> het uur: uur + <i>-e</i> + minuten + <b>var</b>: <i>dörde on var</i> (tien voor vier), <i>dörde çeyrek var</i> (kwart voor vier).</p>
<p><b>Om</b> hoe laat? Dan komt <b>-de / -da / -te / -ta</b> achter het getal: <i>Saat kaçta? — Saat beşte.</i> (Om vijf uur.) In dienstregelingen gebruikt men de 24-uursklok: <i>on yedi otuz</i> (17.30).</p>`,
        table: [['klok', 'Turks'], ['3.00', 'saat üç'], ['3.30', 'saat üç buçuk'], ['3.15', 'üçü çeyrek geçiyor'], ['3.45', 'dörde çeyrek var'], ['om 3 uur', 'saat üçte'], ['om half 4', 'saat üç buçukta']],
        sum: 'Saat kaç? Saat üç buçuk.',
        ex: [['Saat kaç? — Saat dokuz.', 'Hoe laat is het? — Het is negen uur.'], ['Saat yedi buçuk.', 'Het is half acht.'], ['Ders saat onda.', 'De les is om tien uur.']] }
    ],
    dialogue: {
      t: 'Een afspraak maken', place: 'İzmir 🇹🇷',
      lines: [
        ['Selin', 'Sanne, bugün kaç yaşındasın? Doğum günün mü?', 'Sanne, hoe oud ben je vandaag? Ben je jarig?'],
        ['Sanne', 'Evet! Bugün yirmi dokuz yaşındayım.', 'Ja! Vandaag ben ik negenentwintig.'],
        ['Selin', 'İyi ki doğdun! Akşam parti var mı?', 'Gefeliciteerd! Is er vanavond een feest?'],
        ['Sanne', 'Evet, evimde. Saat sekizde.', 'Ja, bij mij thuis. Om acht uur.'],
        ['Selin', 'Tamam. Şimdi saat kaç?', 'Oké. Hoe laat is het nu?'],
        ['Sanne', 'Saat dört buçuk.', 'Het is half vijf.'],
        ['Selin', 'Kaç kişi var?', 'Hoeveel mensen komen er?'],
        ['Sanne', 'On iki kişi. Telefon numaran ne?', 'Twaalf mensen. Wat is je telefoonnummer?'],
        ['Selin', 'Sıfır beş yüz otuz iki, kırk beş, altmış yedi.', 'Nul vijfhonderd tweeëndertig, vijfenveertig, zevenenzestig.'],
        ['Sanne', 'Teşekkürler. Akşam görüşürüz!', 'Dank je. Tot vanavond!']
      ],
      q: [
        { t: 'mc', q: 'Hoe oud wordt Sanne?', o: ['29', '19', '39'] },
        { t: 'mc', q: 'Hoe laat begint het feest?', o: ['Om acht uur', 'Om half vijf', 'Om twaalf uur'] },
        { t: 'mc', q: 'Hoe laat is het tijdens het gesprek?', o: ['Half vijf', 'Half vier', 'Vier uur'] }
      ]
    },
    culture: { t: 'Op tijd? En de afscheidsronde', html: `<p>Voor werk, school en vervoer geldt de klok gewoon. Maar bij een etentje thuis is een kwartier tot een half uur later komen heel normaal. Kom niet te vroeg: de gastvrouw is dan nog bezig.</p>
<p>Weggaan duurt lang. Na het eten komt er thee, dan fruit, dan nog eens thee. Wie opstaat om te gaan, hoort vaak: <i>Daha erken!</i> (Het is nog vroeg!)</p>
<p>📱 Turkse mobiele nummers beginnen met <b>05</b> en je spreekt ze uit in groepjes: <i>sıfır beş yüz otuz iki…</i> Bij verjaardagen zeg je <i>İyi ki doğdun!</i> (lett.: «gelukkig dat je geboren bent»).</p>` },
    ex: [
      { t: 'mc', q: 'Hoe zeg je 25?', o: ['yirmi beş', 'beş yirmi', 'beş ve yirmi'], x: 'Eerst het tiental, dan de eenheid, zonder «en».', tag: 'tr-getal' },
      { t: 'mc', q: 'Welk getal is «kırk üç»?', o: ['43', '34', '53'], tag: 'tr-getal' },
      { t: 'mc', q: 'Welk getal is «yüz elli»?', o: ['150', '105', '500'], tag: 'tr-getal' },
      { t: 'cloze', s: 'On, yirmi, otuz, ___, elli.', a: ['kırk'], o: ['kırk', 'altmış', 'dört'], nl: 'Tien, twintig, dertig, veertig, vijftig.', tag: 'tr-getal' },
      { t: 'mc', q: '«Saat üç buçuk.» Hoe laat is het?', o: ['Half vier', 'Half drie', 'Kwart over drie'], x: 'Buçuk telt een half op bij het uur: drie-en-een-half.', tag: 'tr-tijd' },
      { t: 'cloze', s: 'Ders saat on___.', a: ['da'], o: ['da', 'de', 'ta'], nl: 'De les is om tien uur.', x: 'Na o komt a: onda.', tag: 'tr-tijd' },
      { t: 'cloze', s: 'İki ___ var.', a: ['çocuk'], o: ['çocuk', 'çocuklar', 'çocuğu'], nl: 'Er zijn twee kinderen.', x: 'Na een getal blijft het woord enkelvoud.', tag: 'tr-meerv' },
      { t: 'cloze', s: 'Ev___ çok büyük.', a: ['ler'], o: ['ler', 'lar', 'lır'], nl: 'De huizen zijn heel groot.', tag: 'tr-meerv' },
      { t: 'cloze', s: 'Çocuk___ okulda.', a: ['lar'], o: ['lar', 'ler', 'lur'], nl: 'De kinderen zijn op school.', tag: 'tr-meerv' },
      { t: 'mc', q: 'Wat is het meervoud van «saat»?', o: ['saatler', 'saatlar', 'saatlır'], x: '⚠️ Uitzondering: saat komt uit het Arabisch en heeft een «lichte» a, die het Turks als voorklinker behandelt. Daarom -ler.', tag: 'tr-meerv' },
      { t: 'tr', nl: 'Hoe laat is het?', a: ['Saat kaç?'], tag: 'tr-tijd' },
      { t: 'tr', nl: 'Het is half negen.', a: ['Saat sekiz buçuk.', 'Sekiz buçuk.'], tag: 'tr-tijd' },
      { t: 'tr', nl: 'Ik ben dertig jaar.', a: ['Otuz yaşındayım.', 'Ben otuz yaşındayım.'], tag: 'tr-getal' },
      { t: 'tr', nl: 'Hoe oud ben je?', a: ['Kaç yaşındasın?', 'Sen kaç yaşındasın?'], tag: 'tr-getal' },
      { t: 'order', s: 'Parti akşam saat sekizde.', nl: 'Het feest is vanavond om acht uur.', tag: 'tr-volg' },
      { t: 'match', p: [['bir', 'één'], ['üç', 'drie'], ['beş', 'vijf'], ['yedi', 'zeven'], ['dokuz', 'negen'], ['on', 'tien']], tag: 'tr-getal' }
    ],
    reading: {
      t: 'Türkçe kursu', type: 'Aankondiging van de taalschool',
      p: [
        ['Türkçe kursu yarın başlıyor. Ders saat dokuz buçukta.', 'De cursus Turks begint morgen. De les is om half tien.'],
        ['Sınıfta on dört öğrenci var: sekiz kadın ve altı erkek.', 'In de klas zitten veertien cursisten: acht vrouwen en zes mannen.'],
        ['Kurs on iki hafta. Her hafta üç ders var.', 'De cursus duurt twaalf weken. Elke week zijn er drie lessen.'],
        ['Öğretmenin adı Elif. Telefon numarası: sıfır iki yüz on iki, elli beş, kırk.', 'De lerares heet Elif. Haar telefoonnummer: nul tweehonderd twaalf, vijfenvijftig, veertig.']
      ],
      gl: [['başlıyor', 'begint'], ['sınıfta', 'in de klas'], ['kadın', 'vrouw'], ['erkek', 'man'], ['hafta', 'week'], ['her', 'elke']],
      q: [
        { t: 'mc', q: 'Hoe laat begint de les?', o: ['Om half tien', 'Om half negen', 'Om negen uur'] },
        { t: 'mc', q: 'Hoeveel cursisten zijn er?', o: ['Veertien', 'Acht', 'Twaalf'] },
        { t: 'mc', q: 'Hoeveel lessen zijn er per week?', o: ['Drie', 'Twaalf', 'Zes'] }
      ]
    },
    say: [['Saat kaç?', 'Hoe laat is het?'], ['Saat yedi buçuk.', 'Het is half acht.'], ['Otuz iki yaşındayım.', 'Ik ben tweeëndertig.'], ['Bir, iki, üç, dört, beş.', 'Een, twee, drie, vier, vijf.']],
    task: { nl: 'Schrijf 3 of 4 zinnen: hoe oud je bent, hoeveel broers of zussen je hebt, hoe laat het nu is en hoe laat je les is.', model: 'Otuz dört yaşındayım. İki kardeşim var. Şimdi saat sekiz buçuk. Türkçe dersim saat dokuzda.' },
    scenario: { nl: 'Je belt de taalschool om je in te schrijven. De medewerker vraagt je gegevens.', role: 'You are Burak, a patient receptionist at a Turkish language school in İzmir. Ask for the learner’s name, age and phone number, and tell them the days and time of the class (e.g. saat dokuz buçukta). Use only very simple Turkish and repeat numbers slowly.', goal: 'Geef je naam, leeftijd en telefoonnummer en vraag hoe laat de les is.' }
  });

  /* ───────────────────────── A1 · 5 ───────────────────────── */
  U({
    id: 'tr-a1-05', level: 'A1', icon: '🍵', title: 'Bir çay, lütfen!', nl: 'Eten, drinken en bestellen',
    goals: ['Eten en drinken bestellen', 'Zeggen wat je wilt met istiyorum', 'Met en zonder zeggen: şekerli, şekersiz', 'Om de rekening vragen'],
    vocab: [
      ['su', 'water'], ['çay', 'thee'], ['kahve', 'koffie'], ['süt', 'melk'], ['meyve suyu', 'vruchtensap'], ['ekmek', 'brood'], ['peynir', 'kaas'], ['zeytin', 'olijf'],
      ['yumurta', 'ei'], ['çorba', 'soep'], ['et', 'vlees'], ['tavuk', 'kip'], ['balık', 'vis'], ['pilav', 'rijst (gekookt)'], ['salata', 'salade'], ['meyve', 'fruit'], ['sebze', 'groente'],
      ['tatlı', 'toetje / zoet'], ['şeker', 'suiker'], ['tuz', 'zout'], ['kahvaltı', 'ontbijt'], ['yemek', 'eten / maaltijd / gerecht'], ['hesap', 'rekening'], ['menü', 'menukaart'],
      ['istiyorum', 'ik wil'], ['Ne istersiniz?', 'Wat wilt u?'], ['Afiyet olsun!', 'Eet smakelijk!'], ['lezzetli', 'lekker'], ['sıcak', 'warm / heet'], ['soğuk', 'koud'], ['acıktım', 'ik heb honger'], ['bir şey', 'iets']
    ],
    grammar: [
      { t: 'Ik wil…: istiyorum, en geen lidwoord', es: 'İstiyorum',
        html: `<p><b>İstiyorum</b> betekent «ik wil». Het werkwoord staat in het Turks <b>aan het eind</b> van de zin: <i>Çay istiyorum.</i> (lett.: thee wil-ik.)</p>
<p>Het Turks heeft <b>geen «de» of «het»</b>. <b>Bir</b> betekent «één» en ook «een»: <i>Bir çay istiyorum.</i> = Ik wil een thee.</p>
<p>Bestellen kan ook zonder werkwoord, net als bij ons: <i>Bir çay, lütfen.</i> Of iets beleefder met een vaste zin: <i>Bir kahve <b>alabilir miyim</b>?</i> (Mag ik een koffie?)</p>
<p>Ontkenning: <b>istemiyorum</b> (ik wil niet). Vraag: <i>Çay <b>istiyor musun</b>?</i> (Wil je thee?) Hoe dat precies werkt, leer je in unit 6.</p>`,
        table: [['', 'willen'], ['ben', 'istiyorum'], ['sen', 'istiyorsun'], ['o', 'istiyor'], ['biz', 'istiyoruz'], ['siz', 'istiyorsunuz'], ['onlar', 'istiyorlar']],
        sum: 'Bir çay istiyorum. Bir kahve alabilir miyim?',
        ex: [['Bir çorba istiyorum.', 'Ik wil een soep.'], ['İki çay, lütfen.', 'Twee thee, alstublieft.'], ['Tatlı istemiyorum.', 'Ik wil geen toetje.'], ['Hesap, lütfen.', 'De rekening, alstublieft.']] },
      { t: 'Met en zonder: -li en -siz', es: '-li / -siz',
        html: `<p>«Met» iets erin of erop zeg je met <b>-li</b>; «zonder» met <b>-siz</b>. Allebei volgen ze de klinkerharmonie (soort 2): <b>-li, -lı, -lu, -lü</b> en <b>-siz, -sız, -suz, -süz</b>.</p>
<p><i>şeker<b>li</b> çay</i> (thee met suiker) · <i>şeker<b>siz</b> çay</i> (thee zonder suiker) · <i>süt<b>lü</b> kahve</i> (koffie met melk) · <i>tuz<b>suz</b></i> (zonder zout).</p>
<p>Het is dezelfde <i>-li</i> als in <i>Hollandalı</i>: «met Nederland», bij Nederland horend. Zo maak je van heel veel woorden een bijvoeglijk naamwoord: <i>lezzet</i> (smaak) → <i>lezzet<b>li</b></i> (lekker), <i>et</i> → <i>et<b>li</b></i> (met vlees), <i>et<b>siz</b></i> (zonder vlees, vegetarisch).</p>`,
        table: [['woord', 'met', 'zonder'], ['şeker', 'şekerli', 'şekersiz'], ['süt', 'sütlü', 'sütsüz'], ['tuz', 'tuzlu', 'tuzsuz'], ['et', 'etli', 'etsiz'], ['acı (scherp)', 'acılı', 'acısız']],
        sum: 'Şekerli çay, sütsüz kahve.',
        ex: [['Şekersiz bir çay, lütfen.', 'Een thee zonder suiker, alstublieft.'], ['Sütlü kahve istiyorum.', 'Ik wil koffie met melk.'], ['Etsiz yemek var mı?', 'Is er eten zonder vlees?']] },
      { t: 'Twee woorden samen: meyve suyu', es: 'İsim tamlaması',
        html: `<p>Twee zelfstandige naamwoorden die samen één ding vormen, krijgen in het Turks een <b>uitgang achter het tweede woord</b>: de uitgang van «zijn/haar» (<b>-i</b> of na een klinker <b>-si</b>).</p>
<p><i>Türk kahve<b>si</b></i> (Turkse koffie, lett.: Turk koffie-zijn) · <i>tavuk çorba<b>sı</b></i> (kippensoep) · <i>çay bardağ<b>ı</b></i> (theeglas) · <i>telefon numara<b>sı</b></i> (telefoonnummer).</p>
<p>Het hoofdwoord staat dus <b>achteraan</b>, net als in het Nederlands (kippen<b>soep</b>).</p>
<p><b>⚠️ Uitzondering:</b> <i>su</i> (water) → <i>su<b>yu</b></i>, niet <s>susu</s>: <i>meyve suyu</i> (vruchtensap), <i>portakal suyu</i> (sinaasappelsap). <b>Waarom?</b> <i>Su</i> eindigde vroeger op een medeklinker (<i>suv</i>); die is verdwenen, maar het woord gedraagt zich nog zo en krijgt daarom een <b>y</b> in plaats van een s. Ook <i>mijn water</i> is <i>su<b>yum</b></i>. Het is het enige gewone woord dat dit doet; alleen <i>ne</i> (wat) kent iets vergelijkbaars: <i>neyi</i>.</p>`,
        table: [['los', 'samen', 'betekenis'], ['tavuk + çorba', 'tavuk çorbası', 'kippensoep'], ['Türk + kahve', 'Türk kahvesi', 'Turkse koffie'], ['mercimek + çorba', 'mercimek çorbası', 'linzensoep'], ['meyve + su ⚠️', 'meyve suyu', 'vruchtensap']],
        ex: [['Bir Türk kahvesi, lütfen.', 'Een Turkse koffie, alstublieft.'], ['Portakal suyu var mı?', 'Is er sinaasappelsap?'], ['Mercimek çorbası çok lezzetli.', 'De linzensoep is heel lekker.']] }
    ],
    dialogue: {
      t: 'In het lokanta', place: 'İstanbul 🇹🇷',
      lines: [
        ['Garson', 'Hoş geldiniz! Ne istersiniz?', 'Welkom! Wat wilt u?'],
        ['Sanne', 'Merhaba. Menü var mı?', 'Hallo. Is er een menukaart?'],
        ['Garson', 'Tabii, buyurun. Bugün mercimek çorbası çok lezzetli.', 'Natuurlijk, alstublieft. Vandaag is de linzensoep heel lekker.'],
        ['Sanne', 'Tamam, bir mercimek çorbası istiyorum. Etsiz yemek var mı?', 'Oké, ik wil een linzensoep. Is er eten zonder vlees?'],
        ['Garson', 'Evet, sebze yemeği ve pilav var.', 'Ja, er is een groentegerecht en rijst.'],
        ['Sanne', 'Güzel. Sebze yemeği ve pilav, lütfen.', 'Mooi. Het groentegerecht en rijst, alstublieft.'],
        ['Garson', 'Ne içmek istersiniz?', 'Wat wilt u drinken?'],
        ['Sanne', 'Bir su ve şekersiz bir çay.', 'Een water en een thee zonder suiker.'],
        ['Garson', 'Hemen geliyor. Afiyet olsun!', 'Het komt er zo aan. Eet smakelijk!'],
        ['Sanne', 'Teşekkürler. Hesap da lütfen.', 'Dank u. En de rekening ook graag.']
      ],
      q: [
        { t: 'mc', q: 'Sanne ne istiyor?', o: ['Mercimek çorbası', 'Tavuk çorbası', 'Balık'] },
        { t: 'mc', q: 'Sanne ne içiyor?', o: ['Su ve çay', 'Kahve', 'Meyve suyu'] },
        { t: 'mc', q: 'Çay nasıl?', o: ['Şekersiz', 'Şekerli', 'Sütlü'] }
      ]
    },
    culture: { t: 'Çay, altijd en overal', html: `<p>Thee is de nationale drank. Je drinkt hem zwart, uit een klein <b>tulpvormig glaasje</b> (<i>ince belli bardak</i>), met of zonder suikerklontje maar <b>nooit met melk</b>. In winkels, bij de kapper en zelfs bij de bank krijg je er zomaar een aangeboden. Weigeren mag, maar één glaasje aannemen is beleefd.</p>
<p><b>Türk kahvesi</b> bestel je met de hoeveelheid suiker erbij, want die kookt mee: <i>sade</i> (zonder), <i>orta</i> (medium) of <i>şekerli</i> (zoet). Het drab onderin drink je niet op.</p>
<p>🍳 Een Turks ontbijt (<i>kahvaltı</i>, lett.: «vóór de koffie») is uitgebreid: brood, kaas, olijven, tomaat, komkommer, ei, honing en veel thee. Na het eten zeg je tegen de kok: <i>Elinize sağlık!</i> (lett.: gezondheid aan uw handen).</p>` },
    ex: [
      { t: 'cloze', s: 'Bir çay ___.', a: ['istiyorum'], o: ['istiyorum', 'var', 'değilim'], nl: 'Ik wil een thee.', tag: 'tr-iyor' },
      { t: 'cloze', s: 'Şeker___ bir kahve, lütfen.', h: 'zonder suiker', a: ['siz'], o: ['siz', 'li', 'sız'], nl: 'Een koffie zonder suiker, alstublieft.', tag: 'tr-lisiz' },
      { t: 'cloze', s: 'Süt___ kahve istiyorum.', h: 'met melk', a: ['lü'], o: ['lü', 'li', 'lu'], nl: 'Ik wil koffie met melk.', x: 'Na ü komt ü: sütlü.', tag: 'tr-lisiz' },
      { t: 'cloze', s: 'Tuz___ yemek istiyorum.', h: 'zonder zout', a: ['suz'], o: ['suz', 'siz', 'süz'], nl: 'Ik wil eten zonder zout.', x: 'Na u komt u: tuzsuz.', tag: 'tr-lisiz' },
      { t: 'mc', q: 'Hoe zeg je «vruchtensap»?', o: ['meyve suyu', 'meyve susu', 'meyve su'], x: '⚠️ Uitzondering: su eindigde vroeger op een medeklinker (suv) en krijgt daarom -yu in plaats van -su.', tag: 'tr-bezit' },
      { t: 'mc', q: 'Hoe zeg je «kippensoep»?', o: ['tavuk çorbası', 'tavuk çorba', 'çorba tavuğu'], x: 'Het tweede woord krijgt de uitgang -sı; het hoofdwoord staat achteraan.', tag: 'tr-bezit' },
      { t: 'mc', q: 'De ober zet het eten neer. Wat zegt hij?', o: ['Afiyet olsun!', 'Hesap, lütfen.', 'Acıktım.'], tag: 'vocab' },
      { t: 'mc', q: 'Wat betekent «etsiz»?', o: ['zonder vlees', 'met vlees', 'zonder zout'], tag: 'tr-lisiz' },
      { t: 'cloze', s: 'Etsiz yemek var ___?', a: ['mı'], o: ['mı', 'mi', 'mu'], nl: 'Is er eten zonder vlees?', tag: 'tr-mi' },
      { t: 'tr', nl: 'Een thee, alstublieft.', a: ['Bir çay, lütfen.', 'Bir çay lütfen.'], tag: 'vocab' },
      { t: 'tr', nl: 'Ik wil een koffie.', a: ['Bir kahve istiyorum.', 'Ben bir kahve istiyorum.', 'Kahve istiyorum.'], tag: 'tr-iyor' },
      { t: 'tr', nl: 'De rekening, alstublieft.', a: ['Hesap, lütfen.', 'Hesap lütfen.', 'Hesabı alabilir miyim?'], tag: 'vocab' },
      { t: 'tr', nl: 'Is er water?', a: ['Su var mı?'], tag: 'tr-var' },
      { t: 'tr', nl: 'Het eten is heel lekker.', a: ['Yemek çok lezzetli.', 'Yemek çok güzel.'], tag: 'vocab' },
      { t: 'order', s: 'Şekersiz bir çay istiyorum, lütfen.', nl: 'Ik wil een thee zonder suiker, alstublieft.', tag: 'tr-volg' },
      { t: 'match', p: [['su', 'water'], ['ekmek', 'brood'], ['peynir', 'kaas'], ['balık', 'vis'], ['tavuk', 'kip'], ['çorba', 'soep']], tag: 'vocab' }
    ],
    reading: {
      t: 'Türk kahvaltısı', type: 'Blog over eten',
      p: [
        ['Türk kahvaltısı çok büyük ve çok lezzetli.', 'Het Turkse ontbijt is heel groot en heel lekker.'],
        ['Masada ekmek, peynir, zeytin, yumurta ve meyve var.', 'Op tafel staan brood, kaas, olijven, ei en fruit.'],
        ['Kahve yok, ama çok çay var. Çay sıcak ve şekersiz.', 'Er is geen koffie, maar er is veel thee. De thee is heet en zonder suiker.'],
        ['Kahvaltı saat onda. Acıktım! Afiyet olsun!', 'Het ontbijt is om tien uur. Ik heb honger! Eet smakelijk!']
      ],
      gl: [['masada', 'op tafel'], ['Türk kahvaltısı', 'Turks ontbijt']],
      q: [
        { t: 'mc', q: 'Kahvaltıda ne yok?', o: ['Kahve', 'Çay', 'Ekmek'] },
        { t: 'mc', q: 'Çay nasıl?', o: ['Sıcak ve şekersiz', 'Soğuk ve şekerli', 'Sütlü'] },
        { t: 'mc', q: 'Kahvaltı saat kaçta?', o: ['Saat onda', 'Saat dokuzda', 'Saat on buçukta'] }
      ]
    },
    say: [['Bir çay, lütfen.', 'Een thee, alstublieft.'], ['Şekersiz bir kahve istiyorum.', 'Ik wil een koffie zonder suiker.'], ['Etsiz yemek var mı?', 'Is er eten zonder vlees?'], ['Hesap, lütfen.', 'De rekening, alstublieft.']],
    task: { nl: 'Je zit in een lokanta. Schrijf je bestelling in 3 of 4 zinnen: iets te eten, iets te drinken (met of zonder suiker of melk) en vraag om de rekening.', model: 'Merhaba. Bir tavuk çorbası ve salata istiyorum. Şekersiz bir çay, lütfen. Hesap, lütfen.' },
    scenario: { nl: 'Je gaat lunchen in een eenvoudig lokanta in İstanbul.', role: 'You are Hakan, a cheerful waiter in a small lokanta in İstanbul. Welcome the guest (Hoş geldiniz), tell them the dishes of the day (mercimek çorbası, tavuk, balık, pilav, salata), ask what they want to drink, and bring the bill when asked. Use only very simple Turkish.', goal: 'Bestel eten en drinken, vraag of iets zonder vlees of suiker kan en vraag om de rekening.' }
  });
})(window.SPT);
