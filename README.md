# 🌎 Español Latino

Een complete leerapp voor **Latijns-Amerikaans Spaans**, gebouwd voor Nederlandstaligen. Je leert stap voor stap van **A1 naar B1**, en daarna verder tot **C2**.

## Hoe gebruik je het?

**Online (aanbevolen):** zet GitHub Pages aan voor deze repository (*Settings → Pages → Deploy from branch → `main` / root*). Open daarna de link op je telefoon en kies *Zet op beginscherm*. De app werkt dan als een gewone app, ook offline.

**Lokaal:** open `index.html` in je browser, of start een kleine server:

```bash
npm start            # = python3 -m http.server 8080 → http://localhost:8080
```

## Wat zit erin?

| Onderdeel | Inhoud |
|---|---|
| **Curriculum** | 20 units (A1 en A2), elk met 6 stappen: *Woorden 1 · Woorden 2 · Grammatica · Dialoog · Toepassen · Unittoets* |
| **Lesstof** | ±580 woorden, ±300 oefeningen, 20 dialogen uit 10 landen, uitleg in het Nederlands |
| **Plaatsingstoets** | Adaptief (A1 → B2). Bepaalt je startpunt. |
| **Herhaalsysteem** | Spaced repetition voor woorden, grammatica én werkwoorden. Wat je fout doet, komt sneller terug. |
| **Oefenvormen** | meerkeuze, invullen, vertalen, zinnen bouwen, paren koppelen, dictee, uitspraak (spraakherkenning), schrijfopdrachten |
| **Werkwoordtrainer** | Vervoegingsmachine voor 140+ werkwoorden in 10 tijden, plus naslagtabellen |
| **Regio’s** | Mexico, Colombia, Argentinië/Uruguay, Chili, Andes, Caribisch gebied, Midden-Amerika: kenmerken en typische woorden |
| **AI-docent** *(optioneel)* | Rollenspellen met correcties, grammaticavragen en tekstcorrectie via de Claude API (eigen sleutel) |
| **Voortgang** | Dagdoel, streak, XP, badges, vaardigheden, zwakke punten, activiteitenkaart, back-up/herstel |

### Latijns-Amerikaans vanaf dag 1
*ustedes* in plaats van *vosotros*, *carro / celular / jugo / manejar*, de indefinido waar Spanje de perfecto gebruikt, en bij woorden die per land verschillen staat de variant erbij (🇲🇽 🇨🇴 🇦🇷 🇨🇱 🇵🇪 …).

### Uitleg in jouw taal, steeds meer Spaans
De instelling *Automatisch* geeft uitleg in het Nederlands tot en met A2. Vanaf B1 schakelt de app steeds meer over op Spaans. Je kunt dit zelf aanpassen bij Instellingen.

## AI-docent instellen (optioneel)
1. Maak een API-sleutel aan op [console.anthropic.com](https://console.anthropic.com). Je betaalt per gebruik.
2. Ga in de app naar ⚙️ **Instellingen → AI-docent** en plak je sleutel.

De sleutel wordt alleen in je eigen browser bewaard en gaat rechtstreeks naar Anthropic. Hij komt nooit in een back-up terecht.

## Voortgang synchroniseren tussen apparaten (optioneel)
Wil je op iPad, telefoon en computer met dezelfde voortgang verder? Koppel dan een GitHub-token. De app bewaart je voortgang in een **geheime gist** op je eigen GitHub-account.

1. Maak een [fine-grained token](https://github.com/settings/personal-access-tokens/new) aan. Zet bij *Account permissions* alleen **Gists** op *Read and write*. Een klassiek token met de scope `gist` werkt ook.
2. Ga in de app naar ⚙️ **Instellingen → Synchroniseren** en plak het token. Doe dit op elk apparaat.

De app haalt je voortgang op als je hem opent en uploadt hem kort na het oefenen. Heb je op twee apparaten geoefend, dan worden woorden, units en statistieken samengevoegd. Het token blijft alleen in de browser van dat apparaat. Het komt nooit in de voortgang, in back-ups of in de gist. Je AI-sleutel wordt niet gesynchroniseerd.

## Routekaart
- ✅ **Fase 1:** basis, plaatsingstoets, herhaalsysteem, A1 + A2 compleet, AI-docent
- ⏳ **Fase 2:** B1 (subjuntivo, condicional, meningen en argumenteren)
- ⏳ **Fase 3:** B2 (imperfecto de subjuntivo, voseo, regionale luistervaardigheid, schrijfopdrachten)
- ⏳ **Fase 4:** C1–C2 (register, idiomen, authentieke teksten, essays en presentaties)

## Voor ontwikkelaars
Gewone HTML, CSS en JavaScript. Er is geen build-stap en er zijn geen dependencies.

```
index.html          app-shell
css/app.css         ontwerp (licht/donker)
js/core.js          opslag, herhaalsysteem, antwoordcontrole, spraak
js/conjugate.js     vervoegingsmachine
js/curriculum.js    niveaus en register
js/gen.js           oefeningen en sessies samenstellen
js/lesson.js        lesmotor (alle oefenvormen)
js/ai.js            AI-docent (Claude API)
js/app.js           schermen en navigatie
content/a1.js       lesstof A1 · content/a2.js lesstof A2 · content/extra.js toets, regio’s, rollenspellen
```

Een nieuw niveau voeg je toe door een bestand `content/b1.js` aan te maken in hetzelfde formaat en het in `index.html` en `sw.js` op te nemen.

```bash
npm test             # controleert alle lesstof, vervoegingen en de antwoordcontrole
```
