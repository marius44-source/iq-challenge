# -*- coding: utf-8 -*-
"""
Replace TSR* and TMP* entries in ro-train-adult.js with Romanian text translated
from fr-train-adult.js (same keys / option order). Uses MyMemory API with
SSL verify disabled for corporate proxies; caches results to fr_ro_mymemory_cache.json.
"""
from __future__ import annotations

import json
import re
import ssl
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FR = ROOT / "lang" / "fr-train-adult.js"
RO = ROOT / "lang" / "ro-train-adult.js"
CACHE = Path(__file__).resolve().parent / "fr_ro_mymemory_cache.json"
MAX_Q = 450
SLEEP = 1.0

# Touch-ups after MT (French fragments / wrong cognates)
POST_REPL = [
    (r"\bcotes\b", "laturi"),
    (r"\bcôtés\b", "laturi"),
    (r"\bCote\b", "Latură"),
    (r"\bcôté\b", "latură"),
    (r"\bvisages\b", "fețe"),
    (r"\bvisage\b", "față"),
    (r"\bvisages peints\b", "fețe vopsite"),
]

CTX = ssl.create_default_context()
CTX.check_hostname = False
CTX.verify_mode = ssl.CERT_NONE


def load_cache() -> dict[str, str]:
    if CACHE.is_file():
        return json.loads(CACHE.read_text(encoding="utf-8"))
    return {}


def save_cache(c: dict[str, str]) -> None:
    CACHE.write_text(json.dumps(c, ensure_ascii=False, indent=0), encoding="utf-8")


def translate_one(text: str, cache: dict[str, str]) -> str:
    t = text.strip()
    if not t:
        return text
    if t in cache:
        return cache[t]
    # No need to hit the API for numeric-only options / formulas
    if re.fullmatch(r"[\d\s\.\,\$\€\/\-\+\(\)=²³!×]+", t) and len(t) < 48:
        cache[t] = t
        return t
    q = t[:MAX_Q]
    url = (
        "https://api.mymemory.translated.net/get?"
        + urllib.parse.urlencode({"q": q, "langpair": "fr|ro"})
    )
    req = urllib.request.Request(url, headers={"User-Agent": "iq-test-ro-patch/1"})
    last_err: Exception | None = None
    for attempt in range(12):
        try:
            with urllib.request.urlopen(req, context=CTX, timeout=45) as r:
                data = json.loads(r.read().decode("utf-8"))
            break
        except urllib.error.HTTPError as e:
            last_err = e
            if e.code == 429:
                wait = min(180, 15 + 20 * attempt)
                print("429 rate limit, sleeping", wait, "s")
                time.sleep(wait)
                continue
            raise
    else:
        raise last_err  # type: ignore[misc]
    out = (data.get("responseData") or {}).get("translatedText") or t
    for pat, rep in POST_REPL:
        out = re.sub(pat, rep, out, flags=re.IGNORECASE)
    cache[t] = out
    time.sleep(SLEEP)
    return out


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


def translate_array(arr: list, cache: dict[str, str], memo: dict[str, str]) -> list:
    result = []
    for i, x in enumerate(arr):
        if isinstance(x, list):
            if i == 2:
                result.append(list(x))
            else:
                result.append([memo[s] for s in x])
        else:
            result.append(memo[x])
    return result


def format_line(key: str, arr: list) -> str:
    body = json.dumps(arr, ensure_ascii=False)
    return f'    "{key}": {body},'


def main() -> None:
    fr_data = parse_tsr_tmp(FR)
    cache = load_cache()
    uniques: list[str] = []
    seen: set[str] = set()
    for key in sorted(fr_data.keys()):
        for s in iter_strings(fr_data[key]):
            if s not in seen:
                seen.add(s)
                uniques.append(s)
    print("unique strings to translate:", len(uniques))
    for i, s in enumerate(uniques):
        translate_one(s, cache)
        if (i + 1) % 50 == 0:
            save_cache(cache)
            print("translated", i + 1, "/", len(uniques))
    save_cache(cache)
    memo = {s: cache.get(s, s) for s in seen}
    ro_translated: dict[str, list] = {
        k: translate_array(fr_data[k], cache, memo) for k in fr_data
    }

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
    print("updated", RO, "keys", len(ro_translated))


if __name__ == "__main__":
    main()
