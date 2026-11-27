/* Turks voor Nederlandstaligen — niveau B1, units 5–6 (standaard-Turks van Turkije, uitleg in het Nederlands).
   Zie a1.js voor de velden. Uitzonderingen staan in de uitleg altijd als «⚠️ Uitzondering», met de reden erbij. */
(function (S) {
  'use strict';
  if (!S.isCourse || !S.isCourse('tr-nl')) return;
  const U = S.addUnit;

  /* ───────────────────────── B1 · 5 ───────────────────────── */
  U({
    id: 'tr-b1-05', level: 'B1', icon: '🌍', title: 'Böyle devam ederse…', nl: 'Natuur en milieu: als… dan',
    goals: ['Over natuur, klimaat en milieu praten', 'Een voorwaarde stellen met -se / -sa achter een tijd', 'Varsa, yoksa en değilse gebruiken', 'Gevolgen en waarschuwingen formuleren'],
    vocab: [
      ['çevre', 'milieu / omgeving'], ['doğa', 'natuur'], ['iklim', 'klimaat'], ['iklim değişikliği', 'klimaatverandering'], ['hava kirliliği', 'luchtvervuiling'], ['çöp', 'afval'], ['geri dönüşüm', 'recycling'],
      ['plastik', 'plastic'], ['enerji', 'energie'], ['güneş enerjisi', 'zonne-energie'], ['tasarruf etmek', 'besparen'], ['korumak', 'beschermen'], ['kirletmek', 'vervuilen'], ['azaltmak', 'verminderen'],
      ['artmak', 'toenemen'], ['ısınmak', 'opwarmen'], ['kuraklık', 'droogte'], ['sel', 'overstroming'], ['orman yangını', 'bosbrand'], ['deprem', 'aardbeving'], ['tehlike', 'gevaar'], ['önlem', 'maatregel'],
      ['çözüm', 'oplossing'], ['sorumluluk', 'verantwoordelijkheid'], ['gelecek', 'toekomst'], ['nesil', 'generatie'], ['toplu taşıma', 'openbaar vervoer'], ['israf', 'verspilling'], ['musluk', 'kraan'],
      ['aksi halde', 'anders / zo niet'], ['eğer', 'als / indien']
    ],
    grammar: [
      { t: 'Als…: -se / -sa achter een tijd', es: 'Şart kipi: gerçek koşul',
        html: `<p>Een echte, mogelijke voorwaarde maak je met <b>-se</b> (na e, i, ö, ü) of <b>-sa</b> (na a, ı, o, u) <b>achter de tijd</b>. Meestal is dat de brede tijd: <i>gel-ir-<b>se</b></i> (als hij komt), <i>yağ-ar-<b>sa</b></i> (als het regent), <i>oku-r-<b>sa</b></i>.</p>
<p><i>Yağmur yağ<b>arsa</b> evde kalırız.</i> (Als het regent, blijven we thuis.) De bijzin met -se staat <b>eerst</b>, het gevolg komt erna, meestal in de brede tijd of de toekomende tijd.</p>
<p>Je mag er <b>eğer</b> (als) voor zetten, maar het hoeft niet: de -se zegt het al. <i><b>Eğer</b> vaktin olursa beni ara.</i></p>
<p><b>Ontkenning:</b> na -mez: <i>gel<b>mezse</b></i> (als hij niet komt), <i>yağ<b>mazsa</b></i>.</p>
<p>Ook achter andere tijden: <i>gel<b>iyorsa</b></i> (als hij nu komt / onderweg is), <i>gel<b>diyse</b></i> (als hij gekomen is), <i>gel<b>ecekse</b></i> (als hij van plan is te komen).</p>
<p><b>⚠️ Uitzondering:</b> de persoonsuitgangen zijn <b>-m, -n, –, -k, -niz, -ler</b>: <i>gelirse<b>m</b></i>, <i>gelirse<b>n</b></i>, <i>gelirse<b>k</b></i>, niet <s>gelirseyim</s> of <s>gelirseyiz</s>. Dat zijn de uitgangen van <b>-di</b>, terwijl de brede tijd zelf <i>-im, -sin, -iz</i> heeft (<i>gelirim, geliriz</i>). <b>Waarom?</b> <i>-se</i> is een afgesleten los woord, <i>ise</i>, en dat is een oude vorm van «zijn» die net als <i>idi</i> (→ -di) de korte uitgangen kreeg. Je mag het nog los schrijven: <i>gelir isem</i>.</p>`,
        table: [['', 'als … komt', 'als … niet komt', 'als … gekomen is'], ['ben ⚠️', 'gelirsem', 'gelmezsem', 'geldiysem'], ['sen ⚠️', 'gelirsen', 'gelmezsen', 'geldiysen'], ['o', 'gelirse', 'gelmezse', 'geldiyse'],
          ['biz ⚠️', 'gelirsek', 'gelmezsek', 'geldiysek'], ['siz', 'gelirseniz', 'gelmezseniz', 'geldiyseniz'], ['onlar', 'gelirlerse', 'gelmezlerse', 'geldilerse']],
        sum: 'Gelirsem, gelirsen, gelirse, gelirsek.',
        ex: [['Yağmur yağarsa evde kalırız.', 'Als het regent, blijven we thuis.'], ['Erken gelirsen beraber yemek yeriz.', 'Als je vroeg komt, eten we samen.'], ['Böyle devam ederse su kalmayacak.', 'Als het zo doorgaat, blijft er geen water over.'], ['Işığı kapatmazsan çok enerji harcarsın.', 'Als je het licht niet uitdoet, verbruik je veel energie.']] },
      { t: 'Varsa, yoksa, değilse', es: 'İsim + -(y)se',
        html: `<p>Achter een naamwoord of bijvoeglijk naamwoord komt <b>-se</b> ook, na een klinker met <b>y</b>: <i>hasta<b>ysan</b></i> (als je ziek bent), <i>evde<b>yse</b></i> (als hij thuis is), <i>mümkün<b>se</b></i> (als het mogelijk is), <i>yorgun<b>san</b></i>.</p>
<p>Met <b>var</b>, <b>yok</b> en <b>değil</b>: <i>var<b>sa</b></i> (als er is), <i>yok<b>sa</b></i> (als er niet is), <i>değil<b>se</b></i> (als het niet zo is). Met bezit: <i>Vakt<b>in varsa</b> gel.</i> (Kom als je tijd hebt.) · <i>Para<b>m yoksa</b> gidemem.</i></p>
<p><b>Yoksa</b> heeft er twee betekenissen bij gekregen:<br>• <b>anders, zo niet</b>: <i>Acele et, <b>yoksa</b> geç kalırız.</i> (Schiet op, anders komen we te laat.)<br>• <b>of soms…?</b> in een vraag: <i>Hasta mısın, <b>yoksa</b> yorgun mu?</i> (Ben je ziek of moe?) · <i><b>Yoksa</b> unuttun mu?</i> (Of ben je het soms vergeten?)</p>
<p>Vaste combinaties: <i>mümkünse</i> (indien mogelijk), <i>isterseniz</i> (als u wilt), <i>bana sorarsan</i> (als je het mij vraagt), <i>öyleyse</i> (als dat zo is, dan), <i>neyse</i> (hoe dan ook, laat maar).</p>`,
        table: [['Turks', 'Nederlands'], ['vaktin varsa', 'als je tijd hebt'], ['paran yoksa', 'als je geen geld hebt'], ['mümkünse', 'indien mogelijk'], ['isterseniz', 'als u wilt'], ['yoksa', 'anders · of soms'], ['neyse', 'hoe dan ook']],
        sum: 'Varsa, yoksa, değilse, mümkünse.',
        ex: [['Mümkünse toplu taşıma kullanın.', 'Gebruik indien mogelijk het openbaar vervoer.'], ['Sorun varsa bana haber ver.', 'Laat het me weten als er een probleem is.'], ['Hemen önlem almalıyız, yoksa çok geç olacak.', 'We moeten meteen maatregelen nemen, anders is het te laat.']] },
      { t: 'Hoe meer… hoe meer, en gevolgen', es: 'Sonuç bildirme',
        html: `<p>Na een voorwaarde volgt het <b>gevolg</b>. De keuze van de tijd zegt hoe zeker je bent:<br>• brede tijd = algemene regel: <i>Çok su içersen kendini iyi hisse<b>dersin</b>.</i><br>• toekomende tijd = stellige voorspelling: <i>Ormanları korumazsak iklim daha da ısın<b>acak</b>.</i><br>• gebiedende wijs = advies: <i>Üşürsen ceketini <b>giy</b>.</i> (Trek je jas aan als je het koud krijgt.)</p>
<p><b>-dikçe</b> betekent «naarmate, hoe meer»: <i>Nüfus art<b>tıkça</b> çöp de artıyor.</i> (Naarmate de bevolking groeit, neemt ook het afval toe.) · <i>Türkçe konuş<b>tukça</b> daha kolay oluyor.</i> (Hoe meer je Turks spreekt, hoe makkelijker het wordt.)</p>
<p><b>-se bile</b> = zelfs als: <i>Yağmur yağ<b>sa bile</b> gideceğiz.</i> (Zelfs als het regent, gaan we.)</p>
<p><b>-se de</b> = ook al: <i>Küçük ol<b>sa da</b> her önlem önemli.</i> (Ook al is hij klein, elke maatregel is belangrijk.)</p>
<p>Redenen en gevolgen verbinden: <b>bu yüzden</b> / <b>bu nedenle</b> (daarom), <b>sonuç olarak</b> (als gevolg), <b>aksi halde</b> (zo niet), <b>böylece</b> (zodoende).</p>`,
        table: [['zin', 'betekenis'], ['-irse … -ir', 'als …, dan (regel)'], ['-irse … -ecek', 'als …, dan zal (voorspelling)'], ['-dikçe', 'naarmate / hoe meer'], ['-se bile', 'zelfs als'], ['yoksa / aksi halde', 'anders']],
        sum: 'Arttıkça, yağsa bile, aksi halde.',
        ex: [['Plastik kullanmazsak denizler temiz kalır.', 'Als we geen plastic gebruiken, blijven de zeeën schoon.'], ['Hava ısındıkça kuraklık artıyor.', 'Naarmate het warmer wordt, neemt de droogte toe.'], ['Zor olsa bile denemeliyiz.', 'Zelfs als het moeilijk is, moeten we het proberen.']] }
    ],
    dialogue: {
      t: 'Een hete zomer', place: 'Antalya 🇹🇷',
      lines: [
        ['Deniz', 'Bugün kırk beş derece! Böyle devam ederse yazın burada yaşayamayacağız.', 'Vandaag is het vijfenveertig graden! Als het zo doorgaat, kunnen we hier ’s zomers niet meer wonen.'],
        ['Ruben', 'Haberlerde yine orman yangını varmış. Rüzgâr durmazsa köylere ulaşacakmış.', 'Op het nieuws schijnt er weer een bosbrand te zijn. Als de wind niet gaat liggen, bereikt hij de dorpen.'],
        ['Deniz', 'Çok üzücü. Bence herkes bir şey yaparsa durum değişir.', 'Heel verdrietig. Volgens mij verandert de situatie als iedereen iets doet.'],
        ['Ruben', 'Örneğin? Ben arabamı satarsam iklim düzelecek mi?', 'Bijvoorbeeld? Wordt het klimaat beter als ik mijn auto verkoop?'],
        ['Deniz', 'Tek başına düzelmez tabii. Ama milyonlarca insan toplu taşıma kullanırsa fark eder.', 'In je eentje natuurlijk niet. Maar als miljoenen mensen het openbaar vervoer gebruiken, maakt het verschil.'],
        ['Ruben', 'Haklısın. Hollanda’da çöpü ayırmazsan ceza ödersin.', 'Je hebt gelijk. In Nederland betaal je een boete als je je afval niet scheidt.'],
        ['Deniz', 'Burada da geri dönüşüm kutuları var, ama kullanan az.', 'Hier zijn ook recyclingbakken, maar weinig mensen gebruiken ze.'],
        ['Ruben', 'İstersen bu akşam balkona güneş paneli bakalım. Elektrik faturası da azalır.', 'Als je wilt, kijken we vanavond naar een zonnepaneel voor het balkon. Dan gaat de stroomrekening ook omlaag.'],
        ['Deniz', 'Olur! Pahalı değilse hemen alalım.', 'Goed! Als het niet duur is, kopen we het meteen.'],
        ['Ruben', 'Önce klimayı kapat, yoksa panel bile yetmez!', 'Zet eerst de airco uit, anders is zelfs een paneel niet genoeg!']
      ],
      q: [
        { t: 'mc', q: 'Bugün hava kaç derece?', o: ['Kırk beş', 'Otuz beş', 'Yirmi beş'] },
        { t: 'mc', q: 'Hollanda’da çöpü ayırmazsan ne olur?', o: ['Ceza ödersin', 'Hiçbir şey olmaz', 'Çöpünü almazlar'] },
        { t: 'mc', q: 'Deniz hangi şartla panel almak istiyor?', o: ['Pahalı değilse', 'Büyükse', 'Ruben arabasını satarsa'] }
      ]
    },
    culture: { t: 'Aardbevingen, bosbranden en «imece»', html: `<p>Turkije ligt op een van de actiefste breuklijnen ter wereld. <b>Deprem</b> (aardbeving) is een woord dat iedereen met ernst uitspreekt: de bevingen van 1999 bij İzmit en van februari 2023 in het zuidoosten staan in het collectieve geheugen. Scholen oefenen het <i>çök, kapan, tutun</i> (buk, bescherm je, houd je vast), en in veel huizen staat een <b>deprem çantası</b> (noodtas) klaar.</p>
<p>In de zomer zijn <b>orman yangınları</b> (bosbranden) aan de Egeïsche en Middellandse Zeekust een terugkerende ramp. Na elke ramp komt er een golf van hulp op gang die Turken <b>imece</b> noemen: het oude dorpsgebruik om samen, zonder betaling, het werk van één gezin te doen.</p>
<p>🌳 Een geliefd spreekwoord daarbij: <i>Bir elin nesi var, iki elin sesi var.</i> (Wat heeft één hand? Twee handen maken geluid: samen sta je sterk.)</p>` },
    ex: [
      { t: 'cloze', s: 'Yağmur yağ___ evde kalırız.', h: 'als', a: ['arsa'], o: ['arsa', 'erse', 'ınca'], nl: 'Als het regent, blijven we thuis.', tag: 'tr-se' },
      { t: 'cloze', s: 'Erken gel___ beraber yemek yeriz.', h: 'als jij', a: ['irsen'], o: ['irsen', 'irsin', 'irseyin'], nl: 'Als je vroeg komt, eten we samen.', tag: 'tr-se' },
      { t: 'mc', q: 'Hoe zeg je «als ik kom»?', o: ['gelirsem', 'gelirseyim', 'gelirimse'], x: '⚠️ Uitzondering: na -se komen de korte uitgangen van -di (-m, -n, -k), omdat -se het afgesleten losse woord ise is.', tag: 'tr-se' },
      { t: 'mc', q: 'Hoe zeg je «als wij gaan»?', o: ['gidersek', 'gidersiz', 'giderizse'], x: '⚠️ Uitzondering: biz krijgt na -se een -k, net als bij gittik.', tag: 'tr-se' },
      { t: 'cloze', s: 'Işığı kapat___ çok enerji harcarsın.', h: 'als jij niet', a: ['mazsan'], o: ['mazsan', 'mezsen', 'marsan'], nl: 'Als je het licht niet uitdoet, verbruik je veel energie.', tag: 'tr-se' },
      { t: 'cloze', s: 'Vaktin ___ beni ara.', h: 'als er is', a: ['varsa'], o: ['varsa', 'yoksa', 'ise'], nl: 'Bel me als je tijd hebt.', tag: 'tr-se' },
      { t: 'cloze', s: 'Hasta___ evde kal.', h: 'als je bent', a: ['ysan'], o: ['ysan', 'san', 'ysen'], nl: 'Blijf thuis als je ziek bent.', x: 'Na een klinker komt er een y tussen: hastaysan.', tag: 'tr-se' },
      { t: 'cloze', s: 'Acele et, ___ geç kalırız.', h: 'anders', a: ['yoksa'], o: ['yoksa', 'varsa', 'eğer'], nl: 'Schiet op, anders komen we te laat.', tag: 'tr-se' },
      { t: 'mc', q: 'Wat betekent «mümkünse»?', o: ['indien mogelijk', 'zelfs als', 'hoe dan ook'], tag: 'tr-se' },
      { t: 'cloze', s: 'Hava ısın___ kuraklık artıyor.', h: 'naarmate', a: ['dıkça'], o: ['dıkça', 'ırsa', 'ınca'], nl: 'Naarmate het warmer wordt, neemt de droogte toe.', tag: 'tr-se' },
      { t: 'cloze', s: 'Yağmur yağsa ___ gideceğiz.', h: 'zelfs', a: ['bile'], o: ['bile', 'ki', 'ise'], nl: 'Zelfs als het regent, gaan we.', tag: 'tr-se' },
      { t: 'mc', q: 'Wat is «geri dönüşüm»?', o: ['recycling', 'klimaatverandering', 'verspilling'], tag: 'vocab' },
      { t: 'tr', nl: 'Als je wilt, gaan we samen.', a: ['İstersen beraber gideriz.', 'İstersen birlikte gideriz.', 'İstersen beraber gidelim.', 'İstersen birlikte gidelim.'], tag: 'tr-se' },
      { t: 'tr', nl: 'Als ik tijd heb, bel ik je.', a: ['Vaktim olursa seni ararım.', 'Vaktim varsa seni ararım.', 'Zamanım olursa seni ararım.', 'Zamanım varsa seni ararım.'], tag: 'tr-se' },
      { t: 'tr', nl: 'We moeten de natuur beschermen.', a: ['Doğayı korumalıyız.', 'Doğayı korumamız lazım.', 'Doğayı korumamız gerek.'], tag: 'tr-moeten' },
      { t: 'order', s: 'Herkes toplu taşıma kullanırsa hava kirliliği azalır.', nl: 'Als iedereen het openbaar vervoer gebruikt, neemt de luchtvervuiling af.', tag: 'tr-se' },
      { t: 'match', p: [['çevre', 'milieu'], ['doğa', 'natuur'], ['çöp', 'afval'], ['deprem', 'aardbeving'], ['çözüm', 'oplossing'], ['tehlike', 'gevaar']], tag: 'vocab' }
    ],
    reading: {
      t: 'Evde on küçük önlem', type: 'Folder van de gemeente',
      p: [
        ['İklim değişikliği hepimizin sorunu. Herkes evinde küçük önlemler alırsa büyük bir fark yaratabiliriz.', 'Klimaatverandering is ons aller probleem. Als iedereen thuis kleine maatregelen neemt, kunnen we een groot verschil maken.'],
        ['Dişlerinizi fırçalarken musluğu kapatırsanız günde on iki litre su tasarruf edersiniz. Odadan çıkarken ışığı kapatmayı unutmayın.', 'Als u de kraan dichtdoet terwijl u uw tanden poetst, bespaart u twaalf liter water per dag. Vergeet niet het licht uit te doen als u de kamer verlaat.'],
        ['Mümkünse arabanızı evde bırakın. İşe otobüsle ya da bisikletle giderseniz hem para kazanırsınız hem de hava daha temiz olur.', 'Laat indien mogelijk uw auto thuis. Als u met de bus of de fiets naar uw werk gaat, bespaart u geld en wordt de lucht schoner.'],
        ['Çöpünüzü ayırın: kâğıt, cam ve plastik için mavi kutular her mahallede var. Unutmayın: biz bir şey yapmazsak, çocuklarımız için çok geç olabilir.', 'Scheid uw afval: in elke wijk staan blauwe bakken voor papier, glas en plastic. Vergeet niet: als wij niets doen, kan het voor onze kinderen te laat zijn.']
      ],
      gl: [['fark yaratmak', 'een verschil maken'], ['bırakmak', 'laten / achterlaten'], ['kâğıt', 'papier'], ['cam', 'glas']],
      q: [
        { t: 'mc', q: 'Musluğu kapatırsanız günde kaç litre su tasarruf edersiniz?', o: ['On iki litre', 'İki litre', 'Yüz litre'] },
        { t: 'mc', q: 'İşe otobüsle giderseniz ne olur?', o: ['Hem para kazanırsınız hem de hava temiz olur', 'Geç kalırsınız', 'Ceza ödersiniz'] },
        { t: 'mc', q: 'Mavi kutular ne için?', o: ['Kâğıt, cam ve plastik için', 'Yemek için', 'Su için'] }
      ]
    },
    say: [['Yağmur yağarsa evde kalırız.', 'Als het regent, blijven we thuis.'], ['Vaktin varsa beni ara.', 'Bel me als je tijd hebt.'], ['Mümkünse toplu taşıma kullanın.', 'Gebruik indien mogelijk het openbaar vervoer.'], ['Acele et, yoksa geç kalırız.', 'Schiet op, anders komen we te laat.']],
    task: { nl: 'Schrijf 5 of 6 zinnen over wat er volgens jou moet gebeuren voor het milieu. Gebruik minstens drie zinnen met -irse / -mezse (als we… dan…), één met yoksa (anders) en één met varsa of mümkünse.', model: 'Bence herkes küçük bir şey yaparsa dünya değişir. Daha az et yersek çevreyi koruruz. Mümkünse işe bisikletle gitmeliyiz. Plastik kullanmazsak denizler temiz kalır. Hemen önlem almalıyız, yoksa çocuklarımız temiz su bulamayacak. Evinizde bahçe varsa bir ağaç dikin!' },
    scenario: { nl: 'Het is 45 graden in Antalya. Je vriendin Deniz maakt zich zorgen over het klimaat en wil weten hoe dat in Nederland gaat.', role: 'You are Deniz, an environmentally conscious friend in Antalya during a heatwave. Talk about climate and environment using real conditionals (Böyle devam ederse…, Herkes bir şey yaparsa…), ask what people do in the Netherlands (Hollanda’da çöpü ayırmazsan ne olur?), ask what the learner does at home, and make plans with -irse and yoksa. Use B1 Turkish.', goal: 'Vertel wat je zelf doet, wat er gebeurt als we niets doen, en stel iets voor.' }
  });

  /* ───────────────────────── B1 · 6 ───────────────────────── */
  U({
    id: 'tr-b1-06', level: 'B1', icon: '✨', title: 'Keşke…', nl: 'Dromen en spijt: als ik… dan zou ik',
    goals: ['Vertellen wat je zou doen als iets anders was', 'Een onwerkelijke voorwaarde maken met -se en -erdi', 'Wensen en spijt uitdrukken met keşke', 'Advies geven met «als ik jou was»'],
    vocab: [
      ['hayal', 'droom / fantasie'], ['hayal etmek', 'dromen van / zich voorstellen'], ['dilek', 'wens'], ['piyango', 'loterij'], ['ikramiye', 'prijs (in geld)'], ['zengin', 'rijk'], ['milyoner', 'miljonair'],
      ['harcamak', 'uitgeven'], ['biriktirmek', 'sparen'], ['bağışlamak', 'doneren / vergeven'], ['yatırım', 'investering'], ['dünya turu', 'wereldreis'], ['emekli olmak', 'met pensioen gaan'],
      ['kariyer', 'carrière'], ['fırsat', 'kans / gelegenheid'], ['pişman olmak', 'spijt hebben'], ['hata', 'fout'], ['karar vermek', 'beslissen'], ['seçmek', 'kiezen'], ['cesaret', 'moed'],
      ['risk almak', 'een risico nemen'], ['kader', 'lot'], ['keşke', 'had ik maar / was het maar'], ['mümkün', 'mogelijk'], ['imkânsız', 'onmogelijk'], ['gerçekleşmek', 'uitkomen / werkelijkheid worden'],
      ['vazgeçmek', 'opgeven / afzien van'], ['değmek', 'de moeite waard zijn'], ['yerinde olmak', 'in iemands plaats zijn'], ['başka', 'ander / anders'], ['hayat', 'leven']
    ],
    grammar: [
      { t: 'Als ik… zou zijn, dan zou ik…: -se … -erdi', es: 'Gerçek dışı koşul',
        html: `<p>In unit 5 stond -se <b>achter een tijd</b> (<i>gel<b>ir</b>se</i>): dat is een echte mogelijkheid. Zet je <b>-se direct achter de stam</b>, zonder tijd ertussen, dan wordt het <b>onwerkelijk</b>: <i>gel-<b>se</b></i> (als hij zou komen, maar dat doet hij niet).</p>
<p>Het gevolg staat in de <b>brede tijd + -di</b>: <b>-erdi / -ardı / -irdi</b> = «zou»: <i>gel<b>irdim</b></i> (ik zou komen), <i>al<b>ırdım</b></i> (ik zou kopen), <i>yap<b>ardık</b></i>.</p>
<p><i>Zengin ol<b>sam</b> dünyayı gez<b>erdim</b>.</i> (Als ik rijk was, zou ik de wereld rondreizen.) · <i>Vaktim ol<b>sa</b> sana yardım ed<b>erdim</b>.</i> (Als ik tijd had, zou ik je helpen.)</p>
<p>De persoonsuitgangen na -se zijn weer de korte: <i>gelse<b>m</b>, gelse<b>n</b>, gelse, gelse<b>k</b>, gelse<b>niz</b>, gelse<b>ler</b></i>. Ontkennend: <i>gel<b>me</b>sem</i> (als ik niet zou komen).</p>
<p><b>Vergelijk:</b> <i>Vaktim ol<b>ursa</b> gel<b>irim</b>.</i> (Als ik tijd heb, kom ik: het kan.) ↔ <i>Vaktim ol<b>sa</b> gel<b>irdim</b>.</i> (Als ik tijd had, zou ik komen: maar ik heb geen tijd.)</p>
<p>Je kent <b>-erdi</b> al als «placht te» (<i>Çocukken köye giderdik</i>, A2 unit 7). De vorm is dezelfde; na een bijzin met -se betekent het «zou», bij een tijdsbepaling als <i>çocukken</i> of <i>eskiden</i> betekent het «deed altijd».</p>`,
        table: [['', 'als … zou (-se)', 'dan zou … (-erdi)'], ['ben', 'gelsem', 'gelirdim'], ['sen', 'gelsen', 'gelirdin'], ['o', 'gelse', 'gelirdi'], ['biz', 'gelsek', 'gelirdik'], ['siz', 'gelseniz', 'gelirdiniz'], ['onlar', 'gelseler', 'gelirlerdi']],
        sum: 'Zengin olsam dünyayı gezerdim.',
        ex: [['Piyangoyu kazansam hemen emekli olurdum.', 'Als ik de loterij won, zou ik meteen met pensioen gaan.'], ['Daha genç olsam İstanbul’a taşınırdım.', 'Als ik jonger was, zou ik naar İstanbul verhuizen.'], ['Sen olsan ne yapardın?', 'Wat zou jij doen (als jij het was)?'], ['Param olsa bu evi alırdım.', 'Als ik geld had, zou ik dit huis kopen.']] },
      { t: 'Wensen en spijt: keşke', es: 'Keşke',
        html: `<p><b>Keşke</b> («was het maar», «had ik maar») zet je voor een zin met de <b>kale -se</b>:</p>
<p>• een wens over <b>nu of de toekomst</b>: <i><b>Keşke</b> burada ol<b>san</b>!</i> (Was je maar hier!) · <i><b>Keşke</b> daha çok vaktim ol<b>sa</b>.</i> (Had ik maar meer tijd.) · <i><b>Keşke</b> yağmur dur<b>sa</b>.</i> (Hield het maar op met regenen.)</p>
<p>• <b>spijt over het verleden</b>: -se + <b>-ydi</b>: <i><b>Keşke</b> gel<b>seydin</b>!</i> (Was je maar gekomen!) · <i><b>Keşke</b> o evi al<b>saydık</b>.</i> (Hadden we dat huis maar gekocht.) · <i><b>Keşke</b> söyle<b>meseydim</b>.</i> (Had ik het maar niet gezegd.)</p>
<p>Een hele zin over het verleden: <b>-seydi … -erdi</b>: <i>Erken kalk<b>saydım</b> otobüsü kaçır<b>mazdım</b>.</i> (Als ik vroeg was opgestaan, had ik de bus niet gemist.) · <i>Bil<b>seydim</b> gel<b>irdim</b>.</i> (Als ik het geweten had, was ik gekomen.)</p>
<p><b>⚠️ Uitzondering:</b> na <b>keşke</b> kan <b>nooit</b> de vorm met een tijd erin: <s>Keşke gelirse</s> is fout, het is <i>Keşke gel<b>se</b></i>. <b>Waarom?</b> <i>Gelirse</i> noemt een echte voorwaarde waar een gevolg op moet volgen («als hij komt, dan…»). Een wens heeft geen gevolg en is per definitie (nog) niet werkelijk; daarvoor dient alleen de kale -se. Daarom kan de kale -se ook zonder <i>keşke</i> een wens zijn: <i>Bir çay ol<b>sa</b>!</i> (Was er maar een thee!)</p>`,
        table: [['', 'wens (nu)', 'spijt (toen)'], ['ben', 'Keşke gitsem.', 'Keşke gitseydim.'], ['sen', 'Keşke gelsen.', 'Keşke gelseydin.'], ['o', 'Keşke bilse.', 'Keşke bilseydi.'], ['biz', 'Keşke kalsak.', 'Keşke kalsaydık.']],
        sum: 'Keşke burada olsan! Keşke gelseydin!',
        ex: [['Keşke Türkçeyi daha önce öğrenseydim.', 'Had ik maar eerder Turks geleerd.'], ['Keşke bugün pazar olsa.', 'Was het vandaag maar zondag.'], ['Bilseydim sana haber verirdim.', 'Als ik het geweten had, had ik het je laten weten.'], ['Keşke o kadar çok yemeseydim!', 'Had ik maar niet zoveel gegeten!']] },
      { t: 'Als ik jou was… en zal ik?', es: 'Öneri ve kararsızlık',
        html: `<p><b>Advies:</b> <i>Senin yerinde ol<b>sam</b>…</i> (als ik in jouw plaats was) of kort <i>Ben ol<b>sam</b>…</i>: <i>Senin yerinde olsam bu işi kabul ed<b>erdim</b>.</i> (Als ik jou was, zou ik deze baan aannemen.)</p>
<p>Zachter advies met <b>-sen iyi olur</b> of <b>-sene</b>: <i>Doktora git<b>sen iyi olur</b>.</i> (Je kunt maar beter naar de dokter gaan.) · <i>Biraz dinlen<b>sene</b>!</i> (Rust toch even uit!) De <i>-sene</i>-vorm is informeel en een beetje aandringend.</p>
<p><b>Twijfelen</b> met <b>-sem mi?</b>: <i>Git<b>sem mi</b>, kal<b>sam mı</b>?</i> (Zal ik gaan of blijven?) · <i>Ne yap<b>sam</b>?</i> (Wat zou ik eens doen?) · <i>Ona söyle<b>sek mi</b>?</i> (Zouden we het hem vertellen?)</p>
<p><b>Beleefd voorstellen:</b> <i>Yarın görüş<b>sek</b> olur mu?</i> (Is het goed als we elkaar morgen zien?)</p>
<p>En de vaste uitdrukking <b>-meye değer</b> (het is de moeite waard om): <i>Dene<b>meye değer</b>.</i> (Het is het proberen waard.) · <i>Gör<b>meye değer</b> bir film.</i></p>`,
        table: [['Turks', 'Nederlands'], ['Senin yerinde olsam…', 'Als ik jou was…'], ['Gitsen iyi olur.', 'Je kunt maar beter gaan.'], ['Dinlensene!', 'Rust toch even uit!'], ['Ne yapsam?', 'Wat zou ik eens doen?'], ['Denemeye değer.', 'Het is het proberen waard.']],
        sum: 'Senin yerinde olsam… Gitsem mi, kalsam mı?',
        ex: [['Senin yerinde olsam vazgeçmezdim.', 'Als ik jou was, zou ik niet opgeven.'], ['Ona gerçeği söylesen iyi olur.', 'Je kunt hem maar beter de waarheid vertellen.'], ['Bu akşam ne pişirsem?', 'Wat zal ik vanavond eens koken?']] }
    ],
    dialogue: {
      t: 'Een lot uit de loterij', place: 'İstanbul 🇹🇷',
      lines: [
        ['Emre', 'Yılbaşı piyangosu için bilet aldım. Büyük ikramiye yüz milyon lira!', 'Ik heb een lot gekocht voor de oudejaarsloterij. De hoofdprijs is honderd miljoen lira!'],
        ['Sophie', 'Vay! Kazansan ne yapardın?', 'Zo! Wat zou je doen als je won?'],
        ['Emre', 'Önce anneme deniz kenarında bir ev alırdım. Sonra işten ayrılırdım.', 'Eerst zou ik voor mijn moeder een huis aan zee kopen. Daarna zou ik ontslag nemen.'],
        ['Sophie', 'Çalışmasan sıkılmaz mıydın?', 'Zou je je niet vervelen als je niet werkte?'],
        ['Emre', 'Hiç sıkılmazdım! Bir yelkenli alıp dünyayı gezerdim. Sen olsan ne yapardın?', 'Helemaal niet! Ik zou een zeilboot kopen en de wereld rondvaren. Wat zou jij doen?'],
        ['Sophie', 'Ben yarısını bağışlardım. Geri kalanıyla küçük bir kitapçı açardım.', 'Ik zou de helft weggeven. Met de rest zou ik een kleine boekwinkel openen.'],
        ['Emre', 'Kitapçı mı? Zengin olsan bile çalışırdın yani!', 'Een boekwinkel? Dus zelfs als je rijk was, zou je werken!'],
        ['Sophie', 'Tabii. Keşke şimdi açabilsem, ama cesaretim yok.', 'Natuurlijk. Kon ik hem nu maar openen, maar ik heb de moed niet.'],
        ['Emre', 'Senin yerinde olsam denerdim. Denemeye değer.', 'Als ik jou was, zou ik het proberen. Het is het proberen waard.'],
        ['Sophie', 'Haklısın. Keşke ben de bir bilet alsaydım!', 'Je hebt gelijk. Had ik ook maar een lot gekocht!']
      ],
      q: [
        { t: 'mc', q: 'Emre kazansa önce ne yapardı?', o: ['Annesine bir ev alırdı', 'Dünyayı gezerdi', 'Bir kitapçı açardı'] },
        { t: 'mc', q: 'Sophie parayla ne açardı?', o: ['Küçük bir kitapçı', 'Bir restoran', 'Bir otel'] },
        { t: 'mc', q: 'Sophie neden şimdi açamıyor?', o: ['Çünkü cesareti yok', 'Çünkü vakti yok', 'Çünkü Emre istemiyor'] }
      ]
    },
    culture: { t: 'Kısmet, nazar en de oudejaarsloterij', html: `<p>De <b>Millî Piyango</b> van oudejaarsavond is een nationaal ritueel: weken van tevoren staan er rijen bij de kiosken, en iedereen droomt hardop over wat hij met de <i>büyük ikramiye</i> zou doen. Het bijbehorende gesprek begint altijd met <i>Kazansan ne yapardın?</i></p>
<p>Lukt iets niet, dan zegt men <b>Kısmet değilmiş</b> (het was niet voorbestemd) of <b>Kısmet!</b> (wie weet, als het zo moet zijn). <i>Kısmet</i> is het lot dat je toekomt. Het is geen berusting maar een manier om tegenslag draaglijk te maken; daarnaast geldt net zo hard <i>Önce tedbir, sonra tevekkül</i> (eerst voorzorg, dan vertrouwen).</p>
<p>🧿 Praat je enthousiast over een droom of geluk, dan zegt een Turk <b>Maşallah</b> of <b>Nazar değmesin</b> (moge het boze oog het niet raken) en klopt op hout: <i>tahtaya vur</i>.</p>` },
    ex: [
      { t: 'cloze', s: 'Zengin ol___ dünyayı gezerdim.', h: 'als ik', a: ['sam'], o: ['sam', 'ursam', 'sem'], nl: 'Als ik rijk was, zou ik de wereld rondreizen.', x: 'Onwerkelijk: -sa direct achter de stam.', tag: 'tr-keske' },
      { t: 'cloze', s: 'Param olsa bu evi al___.', h: 'ik zou', a: ['ırdım'], o: ['ırdım', 'ırım', 'acağım'], nl: 'Als ik geld had, zou ik dit huis kopen.', tag: 'tr-erdi' },
      { t: 'cloze', s: 'Sen olsan ne yap___?', h: 'jij zou', a: ['ardın'], o: ['ardın', 'arsın', 'tın'], nl: 'Wat zou jij doen?', tag: 'tr-erdi' },
      { t: 'mc', q: 'Welke zin betekent «Als ik tijd heb, kom ik» (het kan echt)?', o: ['Vaktim olursa gelirim.', 'Vaktim olsa gelirdim.', 'Vaktim olsaydı gelirdim.'], x: 'Echte voorwaarde: -se achter een tijd (olursa) en het gevolg zonder -di.', tag: 'tr-se' },
      { t: 'mc', q: 'Welke zin betekent «Als ik tijd had, zou ik komen» (maar ik heb geen tijd)?', o: ['Vaktim olsa gelirdim.', 'Vaktim olursa gelirim.', 'Vaktim varsa gelirim.'], tag: 'tr-erdi' },
      { t: 'mc', q: 'Welke zin is goed: «Kwam hij maar!»', o: ['Keşke gelse!', 'Keşke gelirse!', 'Keşke gelir!'], x: '⚠️ Uitzondering: na keşke nooit een tijd vóór -se. Gelirse is een echte voorwaarde met een gevolg; een wens krijgt de kale -se.', tag: 'tr-keske' },
      { t: 'cloze', s: 'Keşke burada ol___!', h: 'jij', a: ['san'], o: ['san', 'ursan', 'sen'], nl: 'Was je maar hier!', tag: 'tr-keske' },
      { t: 'cloze', s: 'Keşke gel___!', h: 'jij, toen', a: ['seydin'], o: ['seydin', 'sen', 'irdin'], nl: 'Was je maar gekomen!', x: 'Spijt over het verleden: -se + -ydi.', tag: 'tr-keske' },
      { t: 'cloze', s: 'Bilseydim gel___.', h: 'ik was', a: ['irdim'], o: ['irdim', 'dim', 'irim'], nl: 'Als ik het geweten had, was ik gekomen.', tag: 'tr-erdi' },
      { t: 'cloze', s: 'Keşke söyle___seydim.', h: 'niet', a: ['me'], o: ['me', 'ma', 'mi'], nl: 'Had ik het maar niet gezegd.', tag: 'tr-keske' },
      { t: 'cloze', s: 'Senin ___ olsam bu işi kabul ederdim.', a: ['yerinde'], o: ['yerinde', 'için', 'gibi'], nl: 'Als ik jou was, zou ik deze baan aannemen.', tag: 'tr-keske' },
      { t: 'mc', q: 'Wat betekent «Gitsem mi, kalsam mı?»', o: ['Zal ik gaan of blijven?', 'Ik ga, blijf jij?', 'Ging ik maar, bleef ik maar.'], tag: 'tr-keske' },
      { t: 'mc', q: 'Wat betekent «Denemeye değer»?', o: ['Het is het proberen waard.', 'Het is te duur om te proberen.', 'Ik heb het geprobeerd.'], tag: 'vocab' },
      { t: 'tr', nl: 'Had ik maar meer tijd.', a: ['Keşke daha çok vaktim olsa.', 'Keşke daha fazla vaktim olsa.', 'Keşke daha çok zamanım olsa.', 'Keşke daha fazla zamanım olsa.'], tag: 'tr-keske' },
      { t: 'tr', nl: 'Als ik jou was, zou ik gaan.', a: ['Senin yerinde olsam giderdim.', 'Ben olsam giderdim.', 'Yerinde olsam giderdim.'], tag: 'tr-erdi' },
      { t: 'tr', nl: 'Wat zou je doen als je won?', a: ['Kazansan ne yapardın?'], tag: 'tr-erdi' },
      { t: 'order', s: 'Piyangoyu kazansam anneme deniz kenarında bir ev alırdım.', nl: 'Als ik de loterij won, zou ik voor mijn moeder een huis aan zee kopen.', tag: 'tr-erdi' },
      { t: 'match', p: [['hayal', 'droom'], ['dilek', 'wens'], ['fırsat', 'kans'], ['hata', 'fout'], ['cesaret', 'moed'], ['kader', 'lot']], tag: 'vocab' }
    ],
    reading: {
      t: 'Yirmi yaşındaki bana mektup', type: 'Column',
      p: [
        ['Sevgili yirmi yaşındaki ben, şimdi kırk beş yaşındayım ve sana birkaç şey söylemek istiyorum.', 'Lieve ik van twintig, ik ben nu vijfenveertig en ik wil je een paar dingen zeggen.'],
        ['Keşke o kadar çok korkmasaydın. Yurt dışında okumak için bir fırsatın vardı, ama cesaret edemedin. Gitseydin belki bugün üç dil konuşurdun.', 'Was je maar niet zo bang geweest. Je had een kans om in het buitenland te studeren, maar je durfde niet. Als je was gegaan, sprak je vandaag misschien drie talen.'],
        ['Keşke annenle daha çok vakit geçirseydin. Ve keşke her ay biraz para biriktirseydin!', 'Had je maar meer tijd met je moeder doorgebracht. En had je maar elke maand een beetje geld gespaard!'],
        ['Ama pişman değilim. Farklı kararlar verseydim bugünkü arkadaşlarımı tanımazdım. Yine yirmi yaşında olsam belki aynı hataları yapardım. Hayat böyle güzel.', 'Maar ik heb geen spijt. Als ik andere beslissingen had genomen, zou ik mijn vrienden van nu niet kennen. Als ik weer twintig was, zou ik misschien dezelfde fouten maken. Zo is het leven mooi.']
      ],
      gl: [['yurt dışı', 'het buitenland'], ['cesaret etmek', 'durven'], ['vakit geçirmek', 'tijd doorbrengen'], ['bugünkü', 'van vandaag']],
      q: [
        { t: 'mc', q: 'Yazar yirmi yaşında neyi yapamadı?', o: ['Yurt dışında okumaya gidemedi', 'Para biriktiremedi, çünkü işi yoktu', 'Arkadaş bulamadı'] },
        { t: 'mc', q: 'Yazar kiminle daha çok vakit geçirmek isterdi?', o: ['Annesiyle', 'Arkadaşlarıyla', 'Öğretmeniyle'] },
        { t: 'mc', q: 'Yazar pişman mı?', o: ['Hayır, pişman değil', 'Evet, çok pişman', 'Bilmiyor'] }
      ]
    },
    say: [['Zengin olsam dünyayı gezerdim.', 'Als ik rijk was, zou ik de wereld rondreizen.'], ['Keşke burada olsan!', 'Was je maar hier!'], ['Keşke gelseydin!', 'Was je maar gekomen!'], ['Senin yerinde olsam denerdim.', 'Als ik jou was, zou ik het proberen.'], ['Sen olsan ne yapardın?', 'Wat zou jij doen?']],
    task: { nl: 'Schrijf 6 zinnen: drie over wat je zou doen als je de loterij won (-sam … -erdim), twee wensen of spijtbetuigingen met keşke (één over nu, één over vroeger met -seydim) en één advies met Senin yerinde olsam.', model: 'Piyangoyu kazansam önce aileme yardım ederdim. Sonra bir yıl Türkiye’de yaşardım. Çalışmak zorunda olmasam her gün denize girerdim. Keşke şimdi tatilde olsam! Keşke gençken gitar çalmayı öğrenseydim. Senin yerinde olsam ben de bir bilet alırdım.' },
    scenario: { nl: 'Emre heeft een lot gekocht voor de oudejaarsloterij en droomt hardop. Hij wil ook jouw dromen horen.', role: 'You are Emre, a daydreaming friend in İstanbul who just bought a lottery ticket. Ask what the learner would do if they won (Kazansan ne yapardın? Çalışmaya devam eder miydin?), tell your own dreams with -sem … -erdim, ask about a regret or a wish (Keşke ne yapsaydın?), and give advice with Senin yerinde olsam. Use B1 Turkish.', goal: 'Vertel wat je zou doen, noem een wens of spijt en geef hem advies.' }
  });
})(window.SPT);
