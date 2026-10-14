#!/usr/bin/env python3
import importlib.util, json, shutil, sys
from pathlib import Path
import numpy as np, soundfile as sf

HERE = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("kits", HERE / "build-kits.py")
kits = importlib.util.module_from_spec(spec)
spec.loader.exec_module(kits)

EXTRA = {"undertow-delay": "03-undertow-stems/Undertow B-Delay.wav", "haze-piano": "04-haze-stems/Haze L2-Piano.wav", "meridian-delay": "05-meridian-stems/Meridian B-Delay.wav"}
SPEC = {
    "flow": {"voice": (["meridian-pad", "undertow-chords"], 14.0, 4)},
    "fold": {"voice": (["undertow-chords", "meridian-pad"], 14.0, 4), "stab": (["undertow-chords", "meridian-pad"], 1.2, 6)},
    "soft": {"breath": (["meridian-air", "deepwater-hiss", "meridian-tex"], 14.0, 3)},
    "print": {"voice": (["haze-tex", "meridian-tex", "deepwater-tex"], 14.0, 3), "grain": (["haze-piano", "haze-tex", "meridian-tex"], 1.5, 6)},
    "echo": {"voice": (["haze-pad", "deepwater-delay", "meridian-delay", "meridian-pad"], 14.0, 4)},
    "hush": {"voice": (["deepwater-tex", "meridian-tex", "meridian-pad"], 14.0, 3), "breath": (["deepwater-hiss", "undertow-hiss", "deepwater-tex"], 14.0, 3),
             "sub": (["undertow-sub", "deepwater-sub"], 14.0, 3)},
}
NEED = {"stab": "broad", "grain": "broad"}
NOISE_OK = {"voice", "breath", "grain", "sub"}


def windows(scan, source, length):
    found = [w for w in scan["beds"] + scan["textures"] if w["source"] == source]
    if found:
        return [{"source": source, "file": w["file"], "start": w["start"], "level_db": w["level_db"]} for w in found]
    rel = EXTRA.get(source)
    if rel is None:
        return []
    y, sr = sf.read(kits.STEMS / rel, always_2d=True)
    mono, out, step = y.mean(axis=1), [], max(length / 2, 0.5)
    for start in np.arange(0, len(mono) / sr - length, step):
        seg = mono[int(start * sr):int((start + length) * sr)]
        level = 20 * np.log10(np.sqrt(np.mean(seg ** 2)) + 1e-12)
        if level > -50:
            out.append({"source": source, "file": rel, "start": round(float(start), 2), "level_db": round(float(level), 1)})
    return out


def borrow_fine(out, manifest, src_pal="print", dst_pal="fold"):
    keep = [u for u in manifest if not (u["palette"] == dst_pal and u["unit"] == "fine")]
    for u in [u for u in manifest if u["palette"] == src_pal and u["unit"] == "fine"]:
        name = f"{dst_pal}-fine-{u['note']}.wav"
        shutil.copy2(out / u["file"], out / name)
        keep.append({**u, "file": name, "palette": dst_pal, "shared_with": src_pal})
    return keep


def main(root, scan_path, log_path, name="kit-b3"):
    old, out = root / "kit-b", root / name
    out.mkdir(parents=True, exist_ok=True)
    scan = json.loads(Path(scan_path).read_text())
    manifest = [u for u in json.loads((old / "manifest.json").read_text())["units"]]
    for u in manifest:
        shutil.copy2(old / u["file"], out / u["file"])
    manifest = borrow_fine(out, manifest)
    cache, gaps, log = {}, [], []

    def audio(rel):
        if rel not in cache:
            cache[rel] = sf.read(kits.STEMS / rel, always_2d=True)
        return cache[rel]

    for pal, roles in SPEC.items():
        ok = kits.allowed(pal)
        for unit, (sources, length, count) in roles.items():
            need = kits.requested(pal)[NEED[unit]] if unit in NEED else set()
            pool = []
            for src in sources:
                pool += sorted(windows(scan, src, length), key=lambda w: -w["level_db"])
            picked, tried = [], 0
            core = lambda ps: any(set(q["pcs"]) <= kits.CORE for q in ps)
            for w in pool:
                if len(picked) >= count and core(picked) and not kits.missing(picked, need, "rest" if unit in NOISE_OK else unit, ok):
                    break
                if tried >= 500 or len(picked) >= count + 4:
                    break
                if any(p["source"] == w["source"] and abs(p["start"] - w["start"]) < max(length, 4) for p in picked):
                    continue
                y, sr = audio(w["file"])
                seg = y[int(w["start"] * sr):int((w["start"] + length) * sr)]
                if len(seg) < length * sr * 0.9:
                    continue
                tried += 1
                check = kits.pitch_set(seg, sr, win=min(3.0, length / 2))
                fits = set(check["pcs"]) <= ok and (check["pcs"] or unit in NOISE_OK)
                log.append({"palette": pal, "unit": unit, "source": w["source"], "start": w["start"], "fits": bool(fits), **check})
                if not fits:
                    continue
                cand = {"pcs": check["pcs"]}
                adds_core = not core(picked) and core([cand])
                if len(picked) >= count and not adds_core and kits.missing(picked + [cand], need, "rest" if unit in NOISE_OK else unit, ok) == kits.missing(picked, need, "rest" if unit in NOISE_OK else unit, ok):
                    continue
                picked.append({**w, "pcs": check["pcs"], "seg": seg, "sr": sr, "check": check})
            if not picked:
                gaps.append(f"{pal}: no compatible {unit} region")
            elif not core(picked):
                gaps.append(f"{pal}: no core-only {unit} region")
            for c in sorted(kits.missing(picked, need, "rest" if unit in NOISE_OK else unit, ok)):
                gaps.append(f"{pal}: {unit} lacks a playable unit holding pitch class {c}")
            for k, w in enumerate(picked):
                fin, fout = (0.004, 0.08) if unit in ("stab", "grain") else (0.3, 1.5)
                rec = kits.write(out, f"{pal}-{unit}-{k}.wav", kits.fade(w["seg"].copy(), w["sr"], fin=fin, fout=fout), w["sr"])
                rec.update(palette=pal, unit=unit, note=None, pc=None, pcs=w["pcs"], isolated=False, source=w["source"], rank=sources.index(w["source"]), file_source=w["file"], start=w["start"],
                           pitch_check={"pitched_windows": w["check"]["pitched_windows"]})
                manifest.append(rec)
    Path(log_path).write_text(json.dumps(log))
    used = sorted({m["source"].split("-")[0] for m in manifest})
    (out / "manifest.json").write_text(json.dumps({"version": "B3", "title": "B · your stems", "units": manifest, "tracks_used": used, "gaps": gaps}, indent=1))
    by = {}
    for u in manifest:
        by.setdefault((u["palette"], u["unit"]), set()).add(u["source"])
    for (p, u), s in sorted(by.items()):
        print(p, u, sum(1 for m in manifest if m["palette"] == p and m["unit"] == u), sorted(s))
    print("gaps", gaps, "tracks", used, "units", len(manifest))


if __name__ == "__main__":
    main(Path(sys.argv[1]), sys.argv[2], sys.argv[3], *sys.argv[4:5])

