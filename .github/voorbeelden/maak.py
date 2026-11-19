"""Stemvoorbeelden (proef, niet voor de app): spreekt de dialoog 'Las fotos de la familia' in op een paar manieren.
Schrijft voorbeelden/<variant>/<nn>.mp3 en voorbeelden/stemmen.txt (lijst Spaanse + meertalige Edge-stemmen)."""
import asyncio, json, os, sys
import edge_tts

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..', '..')
OUT = os.path.join(ROOT, 'voorbeelden')
lines = json.load(open(os.path.join(HERE, 'dialoog.json'), encoding='utf8'))


def mood(es):
    """Kleine variatie per zin: uitroep levendiger en iets hoger, vraag iets hoger, rest rustig."""
    if '¡' in es or '!' in es:
        return '+10%', '+6Hz'
    if '¿' in es:
        return '+4%', '+3Hz'
    return '+0%', '+0Hz'


VARIANTS = {
    # 2: juiste stem bij de juiste persoon (Mateo = man, Mark = andere man) + kleine prosodie per zin
    'b-gratis-verbeterd': lambda w, es: (('es-CO-GonzaloNeural' if w == 'Mateo' else 'es-MX-JorgeNeural'),) + mood(es),
    # 3: Edge-'Multilingual'-stemmen: levendiger, maar geen duidelijk Colombiaans accent
    'c-meertalig': lambda w, es: (('en-US-AndrewMultilingualNeural' if w == 'Mateo' else 'en-US-BrianMultilingualNeural'), '+0%', '+0Hz'),
    'd-meertalig-vrouw': lambda w, es: (('es-ES-XimenaMultilingualNeural' if w == 'Mateo' else 'en-US-AndrewMultilingualNeural'), '+0%', '+0Hz'),
}


async def say(text, voice, rate, pitch, path):
    for attempt in range(3):
        try:
            await edge_tts.Communicate(text, voice, rate=rate, pitch=pitch).save(path)
            if os.path.getsize(path) > 500:
                return True
        except Exception as e:
            print('fout', voice, e, flush=True)
        await asyncio.sleep(2)
    return False


async def main():
    voices = await edge_tts.list_voices()
    keep = [v for v in voices if v['ShortName'].startswith('es-') or 'Multilingual' in v['ShortName']]
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, 'stemmen.txt'), 'w', encoding='utf8') as fh:
        for v in keep:
            fh.write(f"{v['ShortName']}\t{v.get('Gender')}\t{','.join(v.get('VoiceTag', {}).get('VoicePersonalities', []))}\n")
    names = {v['ShortName'] for v in voices}
    for name, pick in VARIANTS.items():
        os.makedirs(os.path.join(OUT, name), exist_ok=True)
        for i, l in enumerate(lines):
            voice, rate, pitch = pick(l['w'], l['es'])
            if voice not in names:
                print('stem bestaat niet:', voice, flush=True)
                continue
            ok = await say(l['es'], voice, rate, pitch, os.path.join(OUT, name, f'{i:02d}.mp3'))
            print(name, i, voice, rate, pitch, 'ok' if ok else 'MISLUKT', flush=True)


asyncio.run(main())
