"""Maakt de opnames luider: elke opname krijgt dezelfde luidheid (TARGET LUFS, zoals podcasts en spraak-apps),
met een begrenzer zodat de luidste klanken niet kraken. De Edge-stemmen komen zacht binnen (±-19 LUFS), en een
<audio>-element kan niet harder dan volume 1, dus het moet in het bestand zelf.
Gebruik: python tools/tts-loud.py              (alle opnames in audio/)
         python tools/tts-loud.py a.mp3 b.mp3  (alleen deze)
Opnieuw draaien kan geen kwaad: een opname die al luid genoeg is, wordt overgeslagen."""
import os, re, subprocess, sys
from concurrent.futures import ThreadPoolExecutor

TARGET = -14.0    # LUFS
LIMIT = 0.891     # begrenzer op -1 dB
MAX_GAIN = 10.0   # nooit meer dan +10 dB (stilte of ruis niet opblazen)
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
AUDIO = os.path.join(ROOT, 'audio')


def measure(path):
    out = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', path, '-af', 'ebur128', '-f', 'null', '-'],
                         capture_output=True, text=True).stderr
    m = re.findall(r'I:\s+(-?[\d.]+) LUFS', out)
    return float(m[-1]) if m else None


def loud(path):
    """Geeft de toegepaste versterking in dB terug (0 = niets gedaan)."""
    i = measure(path)
    if i is None or i < -70:
        return 0.0
    gain = min(MAX_GAIN, TARGET - i)
    if gain < 1.0:
        return 0.0
    tmp = path + '.loud.mp3'
    r = subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', path,
                        '-af', f'volume={gain:.2f}dB,alimiter=limit={LIMIT}:attack=2:release=40:level=false',
                        '-map_metadata', '-1', '-ar', '24000', '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '48k', tmp],
                       capture_output=True)
    if r.returncode or not os.path.exists(tmp) or os.path.getsize(tmp) < 500:
        if os.path.exists(tmp):
            os.remove(tmp)
        return 0.0
    os.replace(tmp, path)
    return gain


def main(paths):
    with ThreadPoolExecutor(max_workers=os.cpu_count() or 4) as ex:
        gains = list(ex.map(loud, paths))
    done = [g for g in gains if g]
    avg = sum(done) / len(done) if done else 0
    print(f'Luider gemaakt: {len(done)} van {len(paths)} opnames (gemiddeld +{avg:.1f} dB)')


if __name__ == '__main__':
    files = sys.argv[1:] or [os.path.join(AUDIO, f) for f in sorted(os.listdir(AUDIO)) if f.endswith('.mp3')]
    main(files)
