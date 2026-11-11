# 🌎 Español Latino

Een complete leerapp voor **Latijns-Amerikaans Spaans**, gebouwd voor Nederlandstaligen. Je leert stap voor stap van **A1 tot en met B1**, en daarna verder tot **C2**.

## Hoe gebruik je het?

**Online (aanbevolen):** zet GitHub Pages aan voor deze repository (*Settings → Pages → Deploy from branch → `main` / root*). Open daarna de link op je telefoon en kies *Zet op beginscherm*. De app werkt dan als een gewone app, ook offline.

**Lokaal:** open `index.html` in je browser, of start een kleine server:

```bash
npm start            # = python3 -m http.server 8080 → http://localhost:8080
```

## Wat zit erin?

| Onderdeel | Inhoud |
|---|---|
| **Curriculum** | 36 units (10 × A1, 12 × A2, 10 × B1, en de eerste 4 van B2), elk met 7 stappen: *Woorden 1 · Woorden 2 · Grammatica · Dialoog · Lezen · Toepassen · Unittoets* |
| **Lesstof** | ±1.500 woorden, ±800 oefeningen, 36 dialogen en 36 leesteksten uit 15 landen, uitleg in het Nederlands (vanaf B1 met Spaanse samenvatting) |
| **Plaatsingstoets** | Adaptief (A1 → B2). Bepaalt je startpunt. |
| **Herhaalsysteem** | Spaced repetition voor woorden, grammatica én werkwoorden. Wat je fout doet, komt sneller terug. |
| **Oefenvormen** | meerkeuze, invullen, vertalen, zinnen bouwen, paren koppelen, dictee, uitspraak (spraakherkenning), schrijfopdrachten |
| **Luisteren & spreken** | Dialogen eerst zonder tekst beluisteren, daarna begripsvragen. *Speel een rol*: de app speelt de anderen, jij spreekt jouw zinnen in en krijgt een score (spraakherkenning, geen AI nodig). Leesteksten laten voorlezen |
| **Woordenboek** | Zoeken in alle woorden (Spaans of Nederlands), woorden in je herhaling zetten en eigen woorden toevoegen |
| **Woordspellen** | *Sopa de letras* (woordzoeker), *Crucigrama* (kruiswoord), *Revoltijo* (letterhusselaar), *El volcán* (raad het woord) en *Parejas* (memory). Woorden uit je eigen units, een heel niveau of één unit; wat in de herhaling klaarstaat komt eerst, en elk woord telt mee in de herhaling |
| **Werkwoordtrainer** | Vervoegingsmachine voor 170+ werkwoorden in 15 tijden (nu ook imperfecto de subjuntivo, condicional compuesto en pluscuamperfecto de subjuntivo), plus naslagtabellen |
| **Regio’s** | Mexico, Colombia, Argentinië/Uruguay, Chili, Andes, Caribisch gebied, Midden-Amerika: kenmerken en typische woorden |
| **AI-docent** *(optioneel)* | Rollenspellen met correcties, grammaticavragen en tekstcorrectie via de Claude API (eigen sleutel) |
| **Voortgang** | Dagdoel, streak, XP, badges, vaardigheden, zwakke punten, activiteitenkaart, back-up/herstel |

### Latijns-Amerikaans vanaf dag 1
*ustedes* in plaats van *vosotros*, *carro / celular / jugo / manejar*, de indefinido waar Spanje de perfecto gebruikt, en bij woorden die per land verschillen staat de variant erbij (🇲🇽 🇨🇴 🇦🇷 🇨🇱 🇵🇪 …).

### Uitleg in jouw taal, steeds meer Spaans
De instelling *Automatisch* geeft uitleg in het Nederlands tot en met A2. Vanaf B1 schakelt de app steeds meer over op Spaans. Je kunt dit zelf aanpassen bij Instellingen.

## Stemmen
Alle vaste lesstof is ingesproken met natuurlijke neurale stemmen uit Latijns-Amerika: woorden, voorbeeldzinnen, dialogen, leesteksten en vervoegingen. Elke dialoog gebruikt een stem uit het land waar hij zich afspeelt. De opnames staan in `audio/`. Wat niet is ingesproken, zoals de antwoorden van de AI-docent, leest je apparaat zelf voor.

De opnames maakt de GitHub-actie **Stemmen maken** met de gratis voorleesstemmen van Microsoft Edge (`edge-tts`, geen sleutel nodig). Hij draait vanzelf als de lesstof op `main` verandert. Je kunt hem ook zelf starten via *Actions → Stemmen maken → Run workflow*. Hij spreekt alleen nieuwe teksten in en ruimt opnames op die niet meer gebruikt worden. Let op: dit is geen officiële dienst van Microsoft. Als hij ooit stopt, blijven de bestaande opnames gewoon werken.

## Offline luisteren
Opnames die je een keer gehoord hebt, blijven op je apparaat staan, ook na een update. Wil je zonder internet oefenen? Ga naar ⚙️ **Instellingen › Offline luisteren** en download een heel niveau (A1 ±27 MB, A2 ±40 MB, B1 ±46 MB).

## AI-docent instellen (optioneel)
1. Maak een API-sleutel aan op [console.anthropic.com](https://console.anthropic.com). Je betaalt per gebruik.
2. Ga in de app naar ⚙️ **Instellingen → AI-docent** en plak je sleutel.

Standaard gebruikt de docent **Claude Sonnet 5.5**: ruim goed genoeg voor A1–B1 en een stuk goedkoper dan Opus. Je kunt het model wijzigen bij Instellingen.

De sleutel wordt alleen in je eigen browser bewaard en gaat rechtstreeks naar Anthropic. Hij komt nooit in een back-up terecht.

## Voortgang synchroniseren tussen apparaten (optioneel)
Wil je op iPad, telefoon en computer met dezelfde voortgang verder? Koppel dan een GitHub-token. De app bewaart je voortgang in een **geheime gist** op je eigen GitHub-account.

1. Maak een [fine-grained token](https://github.com/settings/personal-access-tokens/new?name=Espa%C3%B1ol%20Latino%20sync&description=Voortgang%20synchroniseren%20(alleen%20gists)&expires_in=366&gists=write) aan (naam, vervaldatum en recht staan al ingevuld). Zet bij *Account permissions* alleen **Gists** op *Read and write*. Een klassiek token met de scope `gist` werkt ook.
2. Ga in de app naar ⚙️ **Instellingen → Synchroniseren** en plak het token. Doe dit op elk apparaat.

De app haalt je voortgang op als je hem opent en uploadt hem kort na het oefenen. Heb je op twee apparaten geoefend, dan worden woorden, units en statistieken samengevoegd. Het token blijft alleen in de browser van dat apparaat. Het komt nooit in de voortgang, in back-ups of in de gist. Je AI-sleutel wordt niet gesynchroniseerd.

## Routekaart
- ✅ **Fase 1:** basis, plaatsingstoets, herhaalsysteem, A1 + A2 compleet, AI-docent
- ✅ **Fase 2:** A1/A2 aangevuld (leesteksten, ±1.000 woorden) en B1 compleet (subjuntivo, condicional, pluscuamperfecto, indirecte rede, argumenteren)
- 🚧 **Fase 3:** B2. Klaar: *Si tuviera tiempo…* (imperfecto de subjuntivo), *Me pidió que viniera* (subjuntivo in het verleden), *¿Vos sabés…?* (voseo, Río de la Plata), *Si lo hubiera sabido…* (onwerkelijk verleden). Nog te doen: o.a. Caribisch Spaans, passief en registers, nuance in connectoren, langere schrijfopdrachten
- ⏳ **Fase 4:** C1–C2 (register, idiomen, authentieke teksten, essays en presentaties)

## Voor ontwikkelaars
Gewone HTML, CSS en JavaScript. Er is geen build-stap en er zijn geen dependencies.

```
index.html          app-shell
js/version.js       versienummer (zie hieronder)
css/app.css         ontwerp (licht/donker)
js/core.js          opslag, herhaalsysteem, antwoordcontrole, spraak
js/conjugate.js     vervoegingsmachine
js/curriculum.js    niveaus en register
js/gen.js           oefeningen en sessies samenstellen
js/games.js         woordspellen (puzzelmakers + spelschermen, route #/juegos)
js/lesson.js        lesmotor (alle oefenvormen)
js/ai.js            AI-docent (Claude API)
js/app.js           schermen en navigatie
content/a1.js       lesstof A1 · content/a2.js lesstof A2 · content/extra.js toets, regio’s, rollenspellen
content/*-plus.js   aanvullingen per unit (extra woorden, oefeningen, leesteksten)
tools/tts-*.{js,py} teksten verzamelen en inspreken (zie .github/workflows/stemmen.yml)
audio/              ingesproken opnames (audio/<sleutel>.mp3 + index.json)
```

Een nieuw niveau voeg je toe door een bestand `content/b1.js` aan te maken in hetzelfde formaat en het in `index.html` en `sw.js` op te nemen.

Wil je een bestaande unit aanvullen, gebruik dan `S.extendUnit(id, { vocab, ex, reading })` (zie `content/a1-plus.js`). Woorden en oefeningen komen dan altijd achteraan. Voeg ze nooit in het midden toe: de herhaling onthoudt ze op volgnummer.

**Versienummer.** Verhoog bij elke wijziging die live gaat het nummer en de datum in `js/version.js`, en het nummer in `package.json` (de test controleert dat ze gelijk zijn). Het nummer staat in ⚙️ Instellingen › Over de app, met een knop *Controleren op updates*. De service worker gebruikt het als cachenaam, dus een nieuw nummer ruimt de oude offline-cache op.

```bash
npm test             # controleert alle lesstof, vervoegingen en de antwoordcontrole
```
