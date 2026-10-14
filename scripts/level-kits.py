#!/usr/bin/env python3
import json, sys
from pathlib import Path
import numpy as np, soundfile as sf, pyloudnorm as pyln

WINDOW = {"fine": 0.4, "broad": 3.0, "held": 3.0, "rest": 3.0, "voice": 3.0, "stab": 0.4, "breath": 3.0, "sub": 3.0, "grain": 0.4}
LIFT = {"fine": 0.0, "broad": 0.0, "held": 0.0, "rest": 4.0}
GROUP = {"voice": "held", "stab": "broad", "breath": "rest", "sub": "held", "grain": "fine"}
group = lambda t: GROUP.get(t, t)


def peak_loudness(path, win):
    x, sr = sf.read(path, always_2d=True)
    meter, n, hop = pyln.Meter(sr, block_size=min(win, len(x) / sr * 0.99)), int(win * sr), int(0.1 * sr)
    if len(x) <= n:
        return meter.integrated_loudness(x)
    vals = [meter.integrated_loudness(x[i:i + n]) for i in range(0, len(x) - n, hop) if np.abs(x[i:i + n]).max() > 1e-5]
    return max(vals) if vals else -120.0


root = Path(sys.argv[1])
names = sys.argv[2:4] or ["kit-a", "kit-b"]
kits = {k: json.loads((root / k / "manifest.json").read_text()) for k in names}
measured = {}
for k, m in kits.items():
    for u in m["units"]:
        u.pop("level", None)
        measured[(k, u["file"])] = peak_loudness(root / k / u["file"], WINDOW[u["unit"]]) - 6 - u["peak_dbfs"]
kind = {(k, u["file"]): group(u["unit"]) for k, m in kits.items() for u in m["units"]}
own = {(k, u["file"]): u["unit"] for k, m in kits.items() for u in m["units"]}
target = {t: float(np.mean([v for key, v in measured.items() if own[key] == t])) + LIFT[t] for t in LIFT}
for k, m in kits.items():
    for u in m["units"]:
        before = measured[(k, u["file"])]
        base = -6 - u["peak_dbfs"]
        gain = min(target[group(u["unit"])] - before, -1 - (u["peak_dbfs"] + base))
        u["norm_db"] = round(base + gain, 1)
        u["level"] = {"loudness_window_s": WINDOW[u["unit"]], "target_lufs": round(target[group(u["unit"])], 1), "after_lufs": round(before + gain, 1)}
    m["levelling"] = {"targets": {t: round(v, 1) for t, v in target.items()}, "method": "per-unit peak loudness (400 ms fine/stab/grain, 3 s others) matched to shared A/B targets per role group (voice/sub->held, stab->broad, breath->rest, grain->fine), rest +4 dB, unit peak capped at -1 dBFS"}
    (root / k / "manifest.json").write_text(json.dumps(m, indent=1))
for k, m in kits.items():
    for t in WINDOW:
        v = [u["level"]["after_lufs"] for u in m["units"] if u["unit"] == t]
        if v:
            print(k, t, "n", len(v), "mean", round(float(np.mean(v)), 1), "min", min(v), "target", round(target[group(t)], 1))

