"""Spreekt de vaste lesstof in met de neurale voorleesstemmen van Microsoft Edge (edge-tts, geen sleutel nodig).
Gebruik: node tools/tts-texts.js > texts.json && python tools/tts-make.py texts.json
Maakt alleen ontbrekende bestanden, ruimt opnames op die niet meer in de lesstof staan en schrijft audio/index.json."""
import asyncio, json, os, sys

import edge_tts

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
AUDIO = os.path.join(ROOT, 'audio')
FALLBACK = 'es-MX-DaliaNeural'


async def make(item, sem, stats):
    path = os.path.join(AUDIO, item['k'] + '.mp3')
    async with sem:
        for voice in (item['voice'], FALLBACK):
            for attempt in range(3):
                try:
                    await edge_tts.Communicate(item['text'], voice).save(path + '.tmp')
                    if os.path.getsize(path + '.tmp') > 500:
                        os.replace(path + '.tmp', path)
                        stats['ok'] += 1
                        return
                except Exception as e:  # netwerk of onbekende stem: opnieuw, daarna de standaardstem
                    stats['last_error'] = f'{voice}: {e}'
                await asyncio.sleep(1 + attempt * 2)
            if voice == FALLBACK:
                break
        stats['fail'] += 1
        if os.path.exists(path + '.tmp'):
            os.remove(path + '.tmp')


async def main():
    items = json.load(open(sys.argv[1], encoding='utf8'))
    limit = int(os.environ.get('TTS_LIMIT', '0')) or None
    os.makedirs(AUDIO, exist_ok=True)
    want = {i['k'] for i in items}
    for f in os.listdir(AUDIO):
        if f.endswith('.mp3') and f[:-4] not in want:
            os.remove(os.path.join(AUDIO, f))
    todo = [i for i in items if not os.path.exists(os.path.join(AUDIO, i['k'] + '.mp3'))][:limit]
    print(f'{len(items)} teksten, {len(todo)} nieuw in te spreken', flush=True)
    stats = {'ok': 0, 'fail': 0, 'last_error': ''}
    sem = asyncio.Semaphore(8)
    tasks = [make(i, sem, stats) for i in todo]
    for n in range(0, len(tasks), 200):
        await asyncio.gather(*tasks[n:n + 200])
        print(f'  {min(n + 200, len(tasks))}/{len(tasks)} ({stats["fail"]} mislukt)', flush=True)
    have = sorted(f[:-4] for f in os.listdir(AUDIO) if f.endswith('.mp3'))
    with open(os.path.join(AUDIO, 'index.json'), 'w', encoding='utf8') as fh:
        json.dump({'clips': have}, fh, separators=(',', ':'))
    print(f'Klaar: {stats["ok"]} nieuw, {stats["fail"]} mislukt, {len(have)} opnames totaal')
    if stats['fail']:
        print('Laatste fout:', stats['last_error'])
    if todo and not stats['ok']:
        sys.exit('Geen enkele opname gelukt — de Edge-stemdienst is misschien niet bereikbaar.')


asyncio.run(main())
