# -*- coding: utf-8 -*-
"""TSR/TMP: use fr-train-adult.js strings; replace with Romanian where fr_ro_mymemory_cache.json has a hit."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FR = ROOT / "lang" / "fr-train-adult.js"
RO = ROOT / "lang" / "ro-train-adult.js"
CACHE = Path(__file__).resolve().parent / "fr_ro_mymemory_cache.json"


def parse_tsr_tmp(path: Path) -> dict[str, list]:
    text = path.read_text(encoding="utf-8")
    out: dict[str, list] = {}
    for line in text.splitlines():
        m = re.match(r'\s*"(TSR\d+_\d+|TMP\d+_\d+)":\s*(\[.*\]),\s*$', line)
        if not m:
            continue
        out[m.group(1)] = json.loads(m.group(2))
    return out


def map_arr(arr: list, cache: dict[str, str]) -> list:
    """Apply cache only to question, hint, explanation — never translate option lists (avoids 3→ND, etc.)."""
    out: list = []
    for i, x in enumerate(arr):
        if isinstance(x, list):
            if i == 2:
                out.append(list(x))
            else:
                out.append([cache.get(s, s) for s in x])
        else:
            out.append(cache.get(x, x))
    return out


def format_line(key: str, arr: list) -> str:
    return f'    "{key}": {json.dumps(arr, ensure_ascii=False)},'


def main() -> None:
    fr_data = parse_tsr_tmp(FR)
    cache = json.loads(CACHE.read_text(encoding="utf-8")) if CACHE.is_file() else {}
    ro_mapped = {k: map_arr(fr_data[k], cache) for k in fr_data}

    ro_text = RO.read_text(encoding="utf-8")
    lines = ro_text.splitlines()
    new_lines: list[str] = []
    for line in lines:
        m = re.match(r'\s*"(TSR\d+_\d+|TMP\d+_\d+)":\s*', line)
        if m and m.group(1) in ro_mapped:
            new_lines.append(format_line(m.group(1), ro_mapped[m.group(1)]))
        else:
            new_lines.append(line)
    RO.write_text("\n".join(new_lines) + "\n", encoding="utf-8")
    print("wrote", RO, "cache hits used:", len(cache))


if __name__ == "__main__":
    main()
