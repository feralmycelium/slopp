#!/usr/bin/env python3
import json, sys
from pathlib import Path
import numpy as np, soundfile as sf, librosa

STEMS = Path.home() / "Music/ambient-eight/stems"
CORE = {0, 2, 4, 7, 9}
COLOUR = {"flow": 10, "fold": 5, "soft": 6, "print": 5, "echo": 11, "hush": 6}
PC = {n: i for i, n in enumerate(["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"])}
HARMONIC = (0, 4, 7, 10)
A_DEFAULT = {
    "flow": {"fine": "Bells Glass", "broad": "Light Frost", "held": "Wave Pad", "rest": "Rising Fog Pad"},
    "fold": {"fine": "Vibes Mellow", "broad": "Bloom Pad", "held": "Slow Pad", "rest": "Drivetime Sine"},
    "soft": {"fine": "Bell Airy", "broad": "Sweet Tooth", "held": "Sines By The Sea", "rest": "Light Frost"},
    "print": {"fine": "Clav Celesta", "broad": "Cracked Piano", "held": "Moving String Pad", "rest": "Noisy Pad"},
    "echo": {"fine": "Echo Bells", "broad": "Glass High Strings Pad", "held": "Bloom Pad", "rest": "Scape Shape Pad"},
    "hush": {"fine": "Bell Plate Long", "broad": "Bells Deep", "held": "Wave Pad", "rest": "High Pad"},
}
B_SOURCES = {
    "flow": {"fine": ["meridian-bells"], "broad": ["deepwater-chords"], "held": ["deepwater-chords"], "rest": ["deepwater-hiss", "meridian-air"]},
    "fold": {"fine": ["meridian-bells"], "broad": ["undertow-chords"], "held": ["undertow-chords"], "rest": ["undertow-reverb"]},
    "soft": {"fine": ["haze-lead"], "broad": ["meridian-pad"], "held": ["meridian-pad"], "rest": ["meridian-air"]},
    "print": {"fine": ["haze-lead"], "broad": ["undertow-chords"], "held": ["undertow-chords"], "rest": ["undertow-hiss", "haze-tex"]},
    "echo": {"fine": ["meridian-bells"], "broad": ["haze-pad"], "held": ["haze-pad"], "rest": ["meridian-delay", "deepwater-delay"]},
    "hush": {"fine": ["meridian-bells"], "broad": ["meridian-pad"], "held": ["undertow-sub", "meridian-pad"], "rest": ["undertow-hiss", "deepwater-sub"]},
}
FALLBACK = {
    "broad": ["deepwater-chords", "undertow-chords", "meridian-pad", "haze-pad"],
    "held": ["deepwater-chords", "undertow-chords", "meridian-pad", "haze-pad", "undertow-sub", "deepwater-sub"],
    "rest": ["meridian-air", "deepwater-hiss", "undertow-hiss", "deepwater-tex", "meridian-tex", "undertow-reverb", "deepwater-delay", "deepwater-sub", "undertow-sub"],
}
LEN = {"broad": 6.0, "held": 12.0, "rest": 18.0}
COUNT = {"broad": 6, "held": 3, "rest": 3}


def allowed(pal):
    return CORE | {COLOUR[pal]}


HOME = {"flow": 2, "fold": 9, "soft": 4, "print": 7, "echo": 2, "hush": 9}


def requested(pal):
    scale, home = allowed(pal), HOME[pal]
    up = next(home + i for i in (7, 5, 3) if (home + i) % 12 in scale)
    broad, midi = [], 48 + home - 12
    while len(broad) < 6:
        if midi % 12 in scale:
            broad.append(midi)
        midi += 1
    low = 36 + home
    return {"broad": {n % 12 for n in broad}, "held": {home % 12, up % 12}, "rest": {low % 12, (low + 7) % 12 if (low + 7) % 12 in scale else low % 12}}


def missing(picked, need, unit, ok=None):
    if unit == "rest" and any(not p["pcs"] for p in picked):
        return set()
    def holds(pcs, c):
        return c in pcs and (c not in CORE or set(pcs) <= CORE)
    def moved(pcs, c):
        return ok is not None and pcs and any(holds({(q + s) % 12 for q in pcs}, c) and {(q + s) % 12 for q in pcs} <= ok for s in (-2, -1, 1, 2))
    return {c for c in need if not any(holds(set(p["pcs"]), c) or moved(p["pcs"], c) for p in picked)}


def pitch_set(seg, sr, note=None, win=3.0):
    y = librosa.resample(seg.mean(axis=1).astype(np.float32), orig_sr=sr, target_sr=22050)
    chroma = librosa.feature.chroma_cqt(y=y, sr=22050, hop_length=512, tuning=0.0)
    rms = librosa.feature.rms(y=y, frame_length=2048, hop_length=512)[0][:chroma.shape[1]]
    step, floor = max(1, int(win * 22050 / 512)), rms.max() * 10 ** (-30 / 20)
    strong, windows = set(), 0
    for i in range(0, chroma.shape[1], step):
        if rms[i:i + step].mean() < floor:
            continue
        c = chroma[:, i:i + step].mean(axis=1)
        c = c / (c.sum() + 1e-12)
        if c.max() / c.mean() < 2.2:
            continue
        d = c.copy()
        if note is None:
            for r in np.argsort(c)[::-1][:3]:
                d[(r + 7) % 12] -= 0.25 * c[r]
                d[(r + 4) % 12] -= 0.12 * c[r]
        windows += 1
        strong |= {int(k) for k in np.where(d >= 0.3 * d.max())[0]}
    if note is None:
        return {"pcs": sorted(strong), "pitched_windows": windows}
    series = {(note + h) % 12 for h in HARMONIC}
    return {"pcs": [note % 12], "pitched_windows": windows, "measured": sorted(strong), "extras": sorted(strong - series),
            "ok": windows > 0 and note % 12 in strong and not (strong - series)}


def fade(seg, sr, fin=0.004, fout=0.4):
    a, b = int(fin * sr), int(fout * sr)
    seg[:a] *= np.linspace(0, 1, a)[:, None]
    seg[-b:] *= np.linspace(1, 0, b)[:, None]
    return seg


def peak_db(x):
    return float(20 * np.log10(np.max(np.abs(x)) + 1e-12))


def write(out, name, seg, sr):
    sf.write(out / name, seg.astype(np.float32), sr, subtype="PCM_16")
    return {"file": name, "seconds": round(len(seg) / sr, 2), "peak_dbfs": round(peak_db(seg), 1), "norm_db": round(-6 - peak_db(seg), 1)}


def kit_a(units_path, src_dir, out):
    out.mkdir(parents=True, exist_ok=True)
    units = json.loads(Path(units_path).read_text())
    for u in units:
        y, sr = sf.read(src_dir / u["file"], always_2d=True)
        keep = int(min(len(y), (max(1.0, u["audible_s"]) + 0.6) * sr)) if u["voice"] in ("fine", "broad") else len(y)
        u["seg"], u["sr"] = y[:keep], sr
        u["check"] = pitch_set(y[:keep], sr, note=u["note"], win=0.5 if u["voice"] == "fine" else 3.0)

    def rows(pal, voice, preset):
        r = [u for u in units if u["palette"] == pal and u["voice"] == voice and u["preset"] == preset]
        return [u for u in r if u["velocity"] >= 90] if voice == "fine" else r

    manifest, choices = [], []
    for pal, voices in A_DEFAULT.items():
        for voice, default in voices.items():
            notes = sorted({u["note"] for u in rows(pal, voice, default)})
            options = [(pal, default)] + [(pal, p) for p in sorted({u["preset"] for u in units if u["palette"] == pal and u["voice"] == voice} - {default})]
            options += [(q, p) for q, p in sorted({(u["palette"], u["preset"]) for u in units if u["voice"] == voice and u["palette"] != pal})]
            chosen = None
            for src_pal, preset in options:
                r = rows(src_pal, voice, preset)
                if sorted({u["note"] for u in r}) == notes and all(u["check"]["ok"] for u in r):
                    chosen = (src_pal, preset, r)
                    break
            if not chosen:
                r = [u for u in rows(pal, voice, default) if u["check"]["ok"]]
                chosen = (pal, default, r)
            src_pal, preset, r = chosen
            failed = {u["file"]: u["check"] for u in rows(pal, voice, default) if not u["check"]["ok"]}
            choices.append({"palette": pal, "unit": voice, "default": default, "used": preset, "from_palette": src_pal, "default_failures": failed})
            for u in r:
                seg = fade(u["seg"].copy(), u["sr"], fin=0.001)
                rec = write(out, f"{pal}-{voice}-{u['note']}.wav", seg, u["sr"])
                rec.update(palette=pal, unit=voice, note=u["note"], pc=u["note"] % 12, pcs=[u["note"] % 12], isolated=True, preset=preset,
                           pitch_check={k: v for k, v in u["check"].items() if k != "pcs"},
                           provenance=f"Ableton Live 12 Beta stock preset '{preset}', new MIDI note {u['note']}, slopp-kit-a.als track {src_pal}-{voice}")
                manifest.append(rec)
    alternates = sorted({(u["palette"], u["voice"], u["preset"]) for u in units} - {(c["palette"], c["unit"], c["used"]) for c in choices})
    (out / "manifest.json").write_text(json.dumps({"version": "A", "title": "A · original", "units": manifest, "choices": choices,
        "alternates_on_disk": [dict(palette=p, unit=v, preset=s) for p, v, s in alternates]}, indent=1))
    return manifest, choices


def kit_b(scan_path, out, measured_log):
    out.mkdir(parents=True, exist_ok=True)
    scan = json.loads(Path(scan_path).read_text())
    cache, manifest, gaps, log = {}, [], [], []

    def audio(rel):
        if rel not in cache:
            cache[rel] = sf.read(STEMS / rel, always_2d=True)
        return cache[rel]

    regions = scan["beds"] + scan["textures"]
    for pal, roles in B_SOURCES.items():
        ok = allowed(pal)
        fine = [o for o in scan["onsets"] if o["source"] in roles["fine"] and o["pc_clarity"] > 1.5 and o["midi"] and PC[o["pc"]] in ok
                and abs(o["midi"] - round(o["midi"])) < 0.35 and round(o["midi"]) % 12 == PC[o["pc"]]]
        best = {}
        for o in sorted(fine, key=lambda o: -o["level_db"]):
            midi = round(o["midi"])
            if midi in best:
                continue
            y, sr = audio(o["file"])
            seg = y[int(o["start"] * sr):int(min(o["end"], o["start"] + 2.6) * sr)]
            check = pitch_set(seg, sr, note=midi, win=0.5)
            log.append({"palette": pal, "unit": "fine", "source": o["source"], "start": o["start"], **check})
            if check["ok"]:
                best[midi] = (o, seg, sr, check)
        if len(best) < 4:
            gaps.append(f"{pal}: only {len(best)} distinct fine notes")
        for midi, (o, seg, sr, check) in sorted(best.items())[:12]:
            rec = write(out, f"{pal}-fine-{midi}.wav", fade(seg.copy(), sr, fin=0.001), sr)
            rec.update(palette=pal, unit="fine", note=midi, pc=midi % 12, pcs=[midi % 12], isolated=True, source=o["source"], file_source=o["file"], start=o["start"],
                       pitch_check={k: v for k, v in check.items() if k != "pcs"})
            manifest.append(rec)
        for unit in ("broad", "held", "rest"):
            order = roles[unit] + [s for s in FALLBACK[unit] if s not in roles[unit]]
            pool = sorted([w for w in regions if w["source"] in order], key=lambda w: (order.index(w["source"]), -w["level_db"]))
            picked, tried, need = [], 0, requested(pal)[unit]
            for w in pool:
                if len(picked) >= COUNT[unit] and not missing(picked, need, unit):
                    break
                if tried >= 700 or len(picked) >= COUNT[unit] + 4:
                    break
                if any(abs(w["start"] - p["start"]) < LEN[unit] for p in picked if p["source"] == w["source"]):
                    continue
                y, sr = audio(w["file"])
                seg = y[int(w["start"] * sr):int((w["start"] + LEN[unit]) * sr)]
                if len(seg) < LEN[unit] * sr * 0.9:
                    continue
                tried += 1
                check = pitch_set(seg, sr)
                fits = set(check["pcs"]) <= ok and (check["pcs"] or unit == "rest")
                log.append({"palette": pal, "unit": unit, "source": w["source"], "start": w["start"], "fits": bool(fits), **check})
                if not fits:
                    continue
                if len(picked) >= COUNT[unit] and missing(picked + [{"pcs": check["pcs"]}], need, unit) == missing(picked, need, unit):
                    continue
                picked.append({**w, "pcs": check["pcs"], "seg": seg, "sr": sr, "check": check})
            if not picked:
                gaps.append(f"{pal}: no compatible {unit} region")
            for c in sorted(missing(picked, need, unit, ok)):
                gaps.append(f"{pal}: {unit} lacks a playable unit holding pitch class {c}")
            for k, w in enumerate(picked):
                seg = fade(w["seg"].copy(), w["sr"], fin=0.03 if unit == "broad" else 1.0, fout=1.5)
                rec = write(out, f"{pal}-{unit}-{k}.wav", seg, w["sr"])
                rec.update(palette=pal, unit=unit, note=None, pc=None, pcs=w["pcs"], isolated=False, source=w["source"], file_source=w["file"], start=w["start"],
                           pitch_check={"pitched_windows": w["check"]["pitched_windows"]})
                manifest.append(rec)
    Path(measured_log).write_text(json.dumps(log))
    used_tracks = sorted({m["source"].split("-")[0] for m in manifest})
    (out / "manifest.json").write_text(json.dumps({"version": "B", "title": "B · your stems", "units": manifest, "tracks_used": used_tracks, "gaps": gaps}, indent=1))
    return manifest, gaps, used_tracks


if __name__ == "__main__":
    root = Path(sys.argv[1])
    a, choices = kit_a(sys.argv[2], Path(sys.argv[3]), root / "kit-a")
    b, gaps, used = kit_b(sys.argv[4], root / "kit-b", sys.argv[5])
    for name, m in (("A", a), ("B", b)):
        by = {}
        for u in m:
            by.setdefault((u["palette"], u["unit"]), []).append(u)
        print(name, {f"{p}/{u}": len(v) for (p, u), v in sorted(by.items())})
    print("A swaps", [(c["palette"], c["unit"], c["default"], "->", c["used"], c["from_palette"]) for c in choices if c["used"] != c["default"] or c["from_palette"] != c["palette"]])
    print("B fine notes", {p: sorted({u["note"] for u in b if u["palette"] == p and u["unit"] == "fine"}) for p in COLOUR})
    print("B sources", {f"{u['palette']}/{u['unit']}": sorted({x["source"] for x in b if x["palette"] == u["palette"] and x["unit"] == u["unit"]}) for u in b if u["unit"] != "fine"})
    print("B gaps", gaps, "tracks", used)

