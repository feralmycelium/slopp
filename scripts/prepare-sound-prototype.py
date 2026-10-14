#!/usr/bin/env python3
import argparse, json, subprocess
from pathlib import Path
import numpy as np
import soundfile as sf

RATE = 48000
LAYERS = {"pad": "L2-SawPad", "melody": "L2-Piano", "lead": "L2-Lead", "texture": "S-Tex", "air": "Air-Bus", "reverb": "A-Reverb", "delay": "B-Delay"}


def decode(path, start, seconds):
    raw = subprocess.check_output(["ffmpeg", "-v", "error", "-ss", f"{start:.6f}", "-t", f"{seconds:.6f}", "-i", str(path),
                                   "-ar", str(RATE), "-ac", "2", "-f", "f32le", "-"])
    return np.frombuffer(raw, dtype=np.float32).reshape(-1, 2).copy()


def master_offset(mix, master, start, guess):
    span, search = 20.0, 0.03
    ref = decode(mix, start, span).mean(axis=1)
    seg = decode(master, start - guess - search, span + 2 * search).mean(axis=1)
    lags = range(0, len(seg) - len(ref))
    best = max(lags, key=lambda lag: float(np.dot(ref, seg[lag:lag + len(ref)])))
    return guess + search - best / RATE


def loop(audio, fade, length):
    out = audio[fade:fade + length].copy()
    t = np.linspace(0, np.pi / 2, fade, endpoint=False)[:, None]
    out[length - fade:] = out[length - fade:] * np.cos(t) + audio[:fade] * np.sin(t)
    return out


def main():
    ap = argparse.ArgumentParser(description="Cut one matched loop from a master and its stems for the A/B sound prototype.")
    ap.add_argument("--stems", required=True, type=Path, help="folder holding '<Name> <Track>.wav' stems and '<Name>.wav'")
    ap.add_argument("--name", required=True)
    ap.add_argument("--master", required=True, type=Path)
    ap.add_argument("--start", required=True, type=float, help="loop start in stem time, seconds")
    ap.add_argument("--bars", required=True, type=int)
    ap.add_argument("--bpm", type=float, default=66)
    ap.add_argument("--fade", type=float, default=2.0)
    ap.add_argument("--offset-guess", type=float, default=0.1)
    ap.add_argument("--out", required=True, type=Path)
    a = ap.parse_args()
    seconds = a.bars * 4 * 60 / a.bpm
    length, fade = round(seconds * RATE), round(a.fade * RATE)
    mix = a.stems / f"{a.name}.wav"
    offset = master_offset(mix, a.master, a.start, a.offset_guess)
    a.out.mkdir(parents=True, exist_ok=True)
    files, levels, total = {}, {}, None

    def write(key, source, start):
        nonlocal total
        audio = decode(source, start - a.fade, seconds + a.fade + 0.05)[:length + fade]
        looped = loop(audio, fade, length)
        sf.write(a.out / f"{key}.wav", looped, RATE, subtype="PCM_16")
        files[key] = f"{key}.wav"
        levels[key] = round(float(20 * np.log10(np.sqrt(np.mean(looped ** 2)) + 1e-12)), 2)
        return looped

    write("master", a.master, a.start - offset)
    mixed = write("mix", mix, a.start)
    for key, track in LAYERS.items():
        part = write(key, a.stems / f"{a.name} {track}.wav", a.start)
        total = part if total is None else total + part
    residual = float(20 * np.log10(np.sqrt(np.mean((total - mixed) ** 2)) + 1e-12) - levels["mix"])
    manifest = {"name": a.name, "sampleRate": RATE, "loopSeconds": length / RATE, "bars": a.bars, "bpm": a.bpm,
                "stemStart": a.start, "masterOffsetSeconds": round(offset, 5), "crossfadeSeconds": a.fade,
                "files": files, "rmsDb": levels, "stemSumResidualDb": round(residual, 1),
                "trimDb": {"a": 0, "b": 0}}
    (a.out / "manifest.json").write_text(json.dumps(manifest, indent=1))
    print(json.dumps(manifest, indent=1))


if __name__ == "__main__":
    main()

