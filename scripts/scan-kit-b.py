#!/usr/bin/env python3
import json, sys
from pathlib import Path
import numpy as np, librosa

STEMS = Path.home() / "Music/ambient-eight/stems"
SR = 22050
NOTES = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"]
ONSET_STEMS = {"meridian-bells": "05-meridian-stems/Meridian L1-Bells.wav", "haze-piano": "04-haze-stems/Haze L2-Piano.wav", "haze-lead": "04-haze-stems/Haze L2-Lead.wav"}
BED_STEMS = {"deepwater-chords": "07-deepwater-stems/Deepwater L3-Chords.wav", "undertow-chords": "03-undertow-stems/Undertow L3-Chords.wav",
             "meridian-pad": "05-meridian-stems/Meridian L1-Pad.wav", "haze-pad": "04-haze-stems/Haze L2-SawPad.wav",
             "undertow-sub": "03-undertow-stems/Undertow L3-Sub.wav", "deepwater-sub": "07-deepwater-stems/Deepwater L3-Sub.wav"}
TEXTURE_STEMS = {"haze-tex": "04-haze-stems/Haze S-Tex.wav", "deepwater-tex": "07-deepwater-stems/Deepwater S-Tex.wav", "meridian-tex": "05-meridian-stems/Meridian S-Tex.wav",
                 "undertow-hiss": "03-undertow-stems/Undertow L3-Hiss.wav", "deepwater-hiss": "07-deepwater-stems/Deepwater L3-Hiss.wav", "meridian-air": "05-meridian-stems/Meridian L1-Air.wav",
                 "meridian-delay": "05-meridian-stems/Meridian B-Delay.wav", "deepwater-delay": "07-deepwater-stems/Deepwater B-Delay.wav", "undertow-reverb": "03-undertow-stems/Undertow A-Reverb.wav"}


def db(x):
    return float(20 * np.log10(np.sqrt(np.mean(x ** 2)) + 1e-12))


def chroma_of(y):
    c = librosa.feature.chroma_cqt(y=y, sr=SR, hop_length=1024).mean(axis=1)
    return c / (c.sum() + 1e-12)


def onsets(name, rel):
    y, _ = librosa.load(STEMS / rel, sr=SR, mono=True)
    times = librosa.onset.onset_detect(y=y, sr=SR, units="time", backtrack=True, delta=0.12)
    out = []
    for i, t in enumerate(times):
        end = min(times[i + 1] if i + 1 < len(times) else t + 3, t + 3)
        if end - t < 0.6:
            continue
        seg = y[int(t * SR):int(end * SR)]
        head = seg[: int(0.8 * SR)]
        if db(head) < -40:
            continue
        f0, voiced, _ = librosa.pyin(head, fmin=80, fmax=2000, sr=SR, frame_length=2048)
        f0 = f0[voiced] if voiced is not None else np.array([])
        c = chroma_of(head)
        top = np.argsort(c)[::-1]
        midi = float(np.median(librosa.hz_to_midi(f0))) if len(f0) >= 3 else None
        clarity = float(c[top[0]] / (c[top[1]] + 1e-9))
        out.append({"source": name, "file": rel, "start": round(float(t), 3), "end": round(float(end), 3), "level_db": round(db(head), 1),
                    "pc": NOTES[top[0]], "pc_clarity": round(clarity, 2), "midi": round(midi, 2) if midi else None,
                    "voiced": round(len(f0) / max(1, int(0.8 * SR / 512)), 2), "chroma": [round(float(v), 3) for v in c]})
    return out


def windows(name, rel, span):
    y, _ = librosa.load(STEMS / rel, sr=SR, mono=True)
    out = []
    for t in np.arange(0, len(y) / SR - span, span / 2):
        seg = y[int(t * SR):int((t + span) * SR)]
        if db(seg) < -45:
            continue
        c = chroma_of(seg)
        out.append({"source": name, "file": rel, "start": round(float(t), 2), "end": round(float(t + span), 2), "level_db": round(db(seg), 1),
                    "pcs": [NOTES[i] for i in np.argsort(c)[::-1][:4]], "chroma": [round(float(v), 3) for v in c]})
    return out


if __name__ == "__main__":
    out = Path(sys.argv[1])
    result = {"onsets": [], "beds": [], "textures": []}
    for k, v in ONSET_STEMS.items():
        result["onsets"] += onsets(k, v); print(k, len(result["onsets"]), flush=True)
    for k, v in BED_STEMS.items():
        result["beds"] += windows(k, v, 6.0); print(k, flush=True)
    for k, v in TEXTURE_STEMS.items():
        result["textures"] += windows(k, v, 8.0); print(k, flush=True)
    out.write_text(json.dumps(result))
    print("onsets", len(result["onsets"]), "beds", len(result["beds"]), "textures", len(result["textures"]))

