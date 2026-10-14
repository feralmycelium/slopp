#!/usr/bin/env python3
import json, subprocess, sys, time
from pathlib import Path

COPILOT = Path.home() / "code/ableton-copilot"
CORE = [0, 2, 4, 7, 9]
PALETTES = {
    "flow":  {"home": 2, "colour": 10, "fine": ["Bells Glass", "Music Box Beam"], "broad": ["Light Frost", "Sines By The Sea"], "held": ["Morning Chorus Pad", "Wave Pad"], "rest": "Rising Fog Pad"},
    "fold":  {"home": 9, "colour": 5, "fine": ["Marimba Glassy", "Vibes Mellow"], "broad": ["Shining Light", "Bloom Pad"], "held": ["Tiran Sines", "Slow Pad"], "rest": "Drivetime Sine"},
    "soft":  {"home": 4, "colour": 6, "fine": ["Flutish", "Bell Airy"], "broad": ["Foglie Pad", "Sweet Tooth"], "held": ["Cosmic Summer", "Sines By The Sea"], "rest": "Light Frost"},
    "print": {"home": 7, "colour": 5, "fine": ["Prepared Piano Harmonics", "Clav Celesta"], "broad": ["Cracked Piano", "Prepared Piano Ambient"], "held": ["Slow String Pad", "Moving String Pad"], "rest": "Noisy Pad"},
    "echo":  {"home": 2, "colour": 11, "fine": ["Echo Bells", "Vibes Bright"], "broad": ["Glass High Strings Pad", "Fifth Pad"], "held": ["Bloom Pad", "Morning Chorus Pad"], "rest": "Scape Shape Pad"},
    "hush":  {"home": 9, "colour": 6, "fine": ["Bell Plate Long", "Glockenspiel Detuned"], "broad": ["Bells Deep", "Slow Pad"], "held": ["Tiran Sines", "Wave Pad"], "rest": "High Pad"},
}
LENGTH = 72


def scale(p):
    return sorted(set(CORE + [p["colour"]]))


def ascending(p, base_octave, count):
    pcs, out, midi = scale(p), [], 12 * (base_octave + 1) + p["home"]
    while len(out) < count:
        if midi % 12 in pcs:
            out.append(midi)
        midi += 1
    return out


def held_pitches(p):
    pcs, home = scale(p), 12 * 4 + p["home"]
    up = next(home + i for i in (7, 5, 3) if (home + i) % 12 in pcs)
    return [home, up, home + 12]


def layout(voice, p):
    if voice == "fine":
        notes = ascending(p, 4, 8)
        return [[n, i * 4, 0.5, 92] for i, n in enumerate(notes)] + [[n, 32 + i * 4, 0.5, 58] for i, n in enumerate(notes)]
    if voice == "broad":
        return [[n, i * 6, 2.5, 82] for i, n in enumerate(ascending(p, 3, 6))]
    if voice == "held":
        return [[n, i * 16, 12, 76] for i, n in enumerate(held_pitches(p))]
    home = 12 * 3 + p["home"]
    return [[home, 0, 20, 70], [home + 7 if (home + 7) % 12 in scale(p) else home + 12, 26, 20, 70]]


def ableton(*args):
    out = subprocess.run([str(COPILOT / "bin/ableton"), *map(str, args)], capture_output=True, text=True, cwd=COPILOT)
    try:
        return json.loads(out.stdout)
    except ValueError:
        return {"raw": out.stdout[-400:], "err": out.stderr[-400:]}


def main():
    manifest_path = Path(sys.argv[1])
    plan = []
    for pal, p in PALETTES.items():
        for voice in ("fine", "broad", "held"):
            for k, preset in enumerate(p[voice], 1):
                plan.append((pal, voice, k, preset))
        plan.append((pal, "rest", 1, p["rest"]))
    done = json.loads(manifest_path.read_text()) if manifest_path.exists() else {"tracks": []}
    have = {t["name"] for t in done["tracks"] if t.get("ok")}
    for pal, voice, k, preset in plan:
        name = f"{pal}-{voice}-{k}"
        if name in have:
            continue
        ableton("create-midi-track", -1, "--yes")
        index = ableton("get-num-tracks")["num_tracks"] - 1
        ableton("set-name", index, name, "--yes")
        r2 = ableton("load-device", index, "sound", preset, "--yes")
        ableton("create-arrangement-clip", index, 0, LENGTH, "--yes")
        notes = layout(voice, PALETTES[pal])
        tmp = Path(f"/tmp/slopp-kit-{name}.json"); tmp.write_text(json.dumps(notes))
        r3 = ableton("arrangement-add-notes", index, 0, tmp, "--yes")
        ok = bool(r2.get("landed")) and r2.get("devices") and r3.get("verified")
        entry = {"name": name, "track": index, "palette": pal, "voice": voice, "candidate": k, "preset": preset,
                 "loaded_device": r2.get("devices"), "notes": notes, "ok": bool(ok)}
        done["tracks"] = [t for t in done["tracks"] if t["name"] != name] + [entry]
        manifest_path.write_text(json.dumps(done, indent=1))
        print(name, preset, "OK" if ok else f"FAIL {r2} {r3.get('status')}", flush=True)


if __name__ == "__main__":
    main()

