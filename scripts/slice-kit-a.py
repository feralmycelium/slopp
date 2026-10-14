#!/usr/bin/env python3
import json, sys
from pathlib import Path
import numpy as np, soundfile as sf, librosa

SLOT = {"fine": 3.8, "broad": 5.8, "held": 15.5, "rest": 22.0}


def db(x):
    return float(20 * np.log10(np.max(np.abs(x)) + 1e-12))


def main():
    build, render, out = Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3])
    out.mkdir(parents=True, exist_ok=True)
    tracks = json.loads(build.read_text())["tracks"]
    units, report = [], []
    for tr in tracks:
        y, sr = sf.read(render / f"kit {tr['name']}.wav", always_2d=True)
        for i, (pitch, start, dur, vel) in enumerate(tr["notes"]):
            a, b = int(start * sr), int(min(len(y), (start + SLOT[tr["voice"]]) * sr))
            seg = y[a:b].copy()
            mono = seg.mean(axis=1)
            peak = db(mono)
            above = np.nonzero(np.abs(mono) > 10 ** ((peak - 30) / 20))[0]
            onset_ms = float(above[0] / sr * 1000) if len(above) else None
            lead = max(0, int(above[0]) - int(0.002 * sr)) if len(above) else 0
            seg = seg[lead:]
            fade = int(0.25 * sr)
            seg[-fade:] *= np.linspace(1, 0, fade)[:, None]
            env = librosa.feature.rms(y=seg.mean(axis=1), frame_length=2048, hop_length=512)[0]
            tail = np.nonzero(20 * np.log10(env + 1e-12) > peak - 40)[0]
            f0, voiced, _ = librosa.pyin(seg.mean(axis=1)[: int(1.5 * sr)], fmin=50, fmax=2500, sr=sr, frame_length=4096)
            f0 = f0[voiced] if voiced is not None else []
            sounding = float(np.median(librosa.hz_to_midi(f0))) if len(f0) > 5 else None
            fname = f"{tr['name']}-{pitch}-v{vel}.wav"
            sf.write(out / fname, seg.astype(np.float32), sr, subtype="PCM_16")
            rec = {"file": fname, "palette": tr["palette"], "voice": tr["voice"], "candidate": tr["candidate"], "preset": tr["preset"],
                   "note": pitch, "velocity": vel, "peak_dbfs": round(peak, 1), "onset_ms": round(onset_ms, 1) if onset_ms is not None else None,
                   "lead_trim_ms": round(lead / sr * 1000, 1), "audible_s": round(float(tail[-1] * 512 / sr), 2) if len(tail) else 0,
                   "sounding_midi": round(sounding, 2) if sounding else None, "silent": peak < -60}
            units.append(rec)
    (out / "units.json").write_text(json.dumps(units, indent=1))
    by = {}
    for u in units:
        k = (u["palette"], u["voice"], u["candidate"], u["preset"])
        by.setdefault(k, []).append(u)
    for k, us in sorted(by.items()):
        offs = [abs(u["sounding_midi"] - u["note"]) % 12 for u in us if u["sounding_midi"]]
        offs = [min(o, 12 - o) for o in offs]
        print(*k, "n", len(us), "silent", sum(u["silent"] for u in us), "peak", max(u["peak_dbfs"] for u in us),
              "onset_ms", max((u["onset_ms"] or 0) for u in us), "audible", round(np.mean([u["audible_s"] for u in us]), 1),
              "pitch_off_st", round(float(np.median(offs)), 2) if offs else None, flush=True)


if __name__ == "__main__":
    main()

