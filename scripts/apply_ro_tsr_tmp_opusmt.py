# -*- coding: utf-8 -*-
"""
Fill missing FR→RO strings for TSR/TMP using Helsinki-NLP/opus-mt-fr-ro (local),
merge with fr_ro_mymemory_cache.json, then rewrite ro-train-adult.js lines.

Run once; re-run is safe (extends JSON cache).
"""
from __future__ import annotations

import json
import re
from pathlib import Path

import torch
from transformers import MarianMTModel, MarianTokenizer

ROOT = Path(__file__).resolve().parent.parent
FR = ROOT / "lang" / "fr-train-adult.js"
RO = ROOT / "lang" / "ro-train-adult.js"
CACHE = Path(__file__).resolve().parent / "fr_ro_mymemory_cache.json"
MODEL_NAME = "Helsinki-NLP/opus-mt-fr-ro"
BATCH = 12
MAX_LEN = 512


def parse_tsr_tmp(path: Path) -> dict[str, list]:
    text = path.read_text(encoding="utf-8")
    out: dict[str, list] = {}
    for line in text.splitlines():
        m = re.match(r'\s*"(TSR\d+_\d+|TMP\d+_\d+)":\s*(\[.*\]),\s*$', line)
        if not m:
            continue
        out[m.group(1)] = json.loads(m.group(2))
    return out


def iter_strings(arr: list):
    for i, x in enumerate(arr):
        if isinstance(x, list):
            if i == 2:
                continue
            for s in x:
                yield s
        else:
            yield x


def is_skip_translation(s: str) -> bool:
    t = s.strip()
    if not t:
        return True
    return bool(re.fullmatch(r"[\d\s\.\,\$\€\/\-\+\(\)=²³!×:]+", t) and len(t) < 48)


def format_line(key: str, arr: list) -> str:
    return f'    "{key}": {json.dumps(arr, ensure_ascii=False)},'


def main() -> None:
    fr_data = parse_tsr_tmp(FR)
    cache: dict[str, str] = {}
    if CACHE.is_file():
        cache = json.loads(CACHE.read_text(encoding="utf-8"))

    seen: list[str] = []
    uniq: set[str] = set()
    for k in sorted(fr_data.keys()):
        for s in iter_strings(fr_data[k]):
            if s not in uniq:
                uniq.add(s)
                seen.append(s)

    to_translate = [
        s
        for s in seen
        if not is_skip_translation(s) and s not in cache
    ]
    print("cached:", len(cache), "to_translate:", len(to_translate))

    if to_translate:
        tok = MarianTokenizer.from_pretrained(MODEL_NAME)
        mod = MarianMTModel.from_pretrained(MODEL_NAME)
        mod.eval()

        for i in range(0, len(to_translate), BATCH):
            batch = to_translate[i : i + BATCH]
            enc = tok(
                batch,
                return_tensors="pt",
                padding=True,
                truncation=True,
                max_length=MAX_LEN,
            )
            with torch.no_grad():
                gen = mod.generate(**enc, max_length=MAX_LEN)
            for j, src in enumerate(batch):
                out = tok.decode(gen[j], skip_special_tokens=True)
                cache[src] = out
            CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
            print("translated", min(i + BATCH, len(to_translate)), "/", len(to_translate))

    memo: dict[str, str] = {}
    for s in uniq:
        if is_skip_translation(s):
            memo[s] = s
        else:
            memo[s] = cache.get(s, s)

    ro_translated = {}
    for k, arr in fr_data.items():
        new_arr = []
        for i, x in enumerate(arr):
            if isinstance(x, list):
                if i == 2:
                    new_arr.append(list(x))
                else:
                    new_arr.append([memo[t] for t in x])
            else:
                new_arr.append(memo[x])
        ro_translated[k] = new_arr

    ro_text = RO.read_text(encoding="utf-8")
    lines = ro_text.splitlines()
    new_lines: list[str] = []
    for line in lines:
        m = re.match(r'\s*"(TSR\d+_\d+|TMP\d+_\d+)":\s*', line)
        if m and m.group(1) in ro_translated:
            new_lines.append(format_line(m.group(1), ro_translated[m.group(1)]))
        else:
            new_lines.append(line)
    RO.write_text("\n".join(new_lines) + "\n", encoding="utf-8")
    print("wrote", RO)


if __name__ == "__main__":
    main()
