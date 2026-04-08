# -*- coding: utf-8 -*-
"""Splice ro_tlr_translations.TLR into lang/ro-train-adult.js."""
from __future__ import annotations

import json
import re
from pathlib import Path

from ro_tlr_translations import TLR

ROOT = Path(__file__).resolve().parent.parent / "lang"
RO_PATH = ROOT / "ro-train-adult.js"


def tlr_key_order(k: str) -> tuple[int, int]:
    m = re.match(r"TLR(\d+)_(\d+)", k)
    if not m:
        raise ValueError(k)
    return int(m.group(1)), int(m.group(2))


def main() -> None:
    text = RO_PATH.read_text(encoding="utf-8")
    lines = text.splitlines(keepends=True)
    start = next(i for i, ln in enumerate(lines) if '"TLR1_01"' in ln)
    end = next(i for i, ln in enumerate(lines) if '"TSR1_01"' in ln)
    keys = sorted(TLR.keys(), key=tlr_key_order)
    if len(keys) != 100:
        raise SystemExit(f"expected 100 TLR keys, got {len(keys)}")
    out = []
    for k in keys:
        line = f'    "{k}": {json.dumps(TLR[k], ensure_ascii=False)},\n'
        out.append(line)
    new_text = "".join(lines[:start] + out + lines[end:])
    RO_PATH.write_text(new_text, encoding="utf-8")
    print("patched", RO_PATH, "TLR entries:", len(keys))


if __name__ == "__main__":
    main()
