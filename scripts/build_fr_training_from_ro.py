# -*- coding: utf-8 -*-
"""
Generate localized training JS from Romanian sources (I18N.register).
Translates only user-facing strings (preserves English tip keys and question IDs).
Uses RO→target language. Targets: fr, de, es, pt, zh, hi, ar (zh uses Google tl=zh-CN, output I18N.register(\"zh\")).

  python build_fr_training_from_ro.py [5-7|8-11|12-15|adult|all]           # default --target fr
  python build_fr_training_from_ro.py --target pt all
  python build_fr_training_from_ro.py --target zh all
  python build_fr_training_from_ro.py --target hi all
  python build_fr_training_from_ro.py --target ar all
"""
from __future__ import annotations

import re
import sys
import time
import warnings
from pathlib import Path

import requests
import urllib3
from bs4 import BeautifulSoup

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

ROOT = Path(__file__).resolve().parents[1]
LANG = ROOT / "lang"
_cache: dict[str, str] = {}
_line_blob_cache: dict[str, list[str]] = {}
_last_call = 0.0
# Set in main(): Google Translate target code and I18N.register code
TARGET_TL: str = "fr"
REGISTER_LANG: str = "fr"
OUT_PREFIX: str = "fr-train"


def translate_lines(parts: list[str]) -> list[str]:
    """Translate N short RO strings in one HTTP request (newline-separated)."""
    if not parts:
        return []
    if any("\n" in p or "\r" in p for p in parts):
        return [translate_str(p) for p in parts]
    blob = "\n".join(parts)
    cache_key = TARGET_TL + "\n" + blob
    if cache_key in _line_blob_cache:
        return _line_blob_cache[cache_key]
    global _last_call
    time.sleep(max(0, 0.08 - (time.time() - _last_call)))
    _last_call = time.time()
    try:
        with warnings.catch_warnings():
            warnings.simplefilter("ignore", urllib3.exceptions.InsecureRequestWarning)
            r = requests.get(
                "https://translate.google.com/m",
                params={"tl": TARGET_TL, "sl": "ro", "q": blob},
                verify=False,
                timeout=60,
            )
        r.raise_for_status()
        soup = BeautifulSoup(r.text, "html.parser")
        el = soup.find("div", class_="t0") or soup.find("div", class_="result-container")
        if not el:
            raise ValueError("no translation node")
        text = el.get_text(separator="\n", strip=False).strip()
        lines = text.split("\n") if text else []
        if len(lines) != len(parts):
            raise ValueError("line count mismatch %d vs %d" % (len(lines), len(parts)))
    except Exception as e:
        print("batch translate fail:", e, "| n=", len(parts), file=sys.stderr, flush=True)
        lines = []
        for p in parts:
            lines.append(translate_str(p))
    _line_blob_cache[cache_key] = lines
    for p, t in zip(parts, lines):
        _cache[(TARGET_TL, p)] = t
    return lines


def translate_str(s: str) -> str:
    """RO→TARGET_TL via Google web endpoint; verify=False for broken corporate CA chains."""
    s = s.strip()
    if not s:
        return s
    ck = (TARGET_TL, s)
    if ck in _cache:
        return _cache[ck]
    global _last_call
    time.sleep(max(0, 0.1 - (time.time() - _last_call)))
    _last_call = time.time()
    try:
        with warnings.catch_warnings():
            warnings.simplefilter("ignore", urllib3.exceptions.InsecureRequestWarning)
            r = requests.get(
                "https://translate.google.com/m",
                params={"tl": TARGET_TL, "sl": "ro", "q": s},
                verify=False,
                timeout=45,
            )
        r.raise_for_status()
        soup = BeautifulSoup(r.text, "html.parser")
        el = soup.find("div", class_="t0") or soup.find("div", class_="result-container")
        if not el:
            raise ValueError("no translation node")
        out = el.get_text(strip=True)
    except Exception as e:
        print("translate fail:", e, "|", s[:60], file=sys.stderr)
        out = s
    _cache[ck] = out
    return out


def escape_js(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def parse_string(s: str, i: int) -> tuple[str, int]:
    if i >= len(s) or s[i] != '"':
        raise ValueError("expected string at %d" % i)
    i += 1
    out: list[str] = []
    while i < len(s):
        c = s[i]
        if c == "\\":
            if i + 1 < len(s):
                out.append(s[i : i + 2])
                i += 2
            else:
                out.append(c)
                i += 1
        elif c == '"':
            return "".join(out), i + 1
        else:
            out.append(c)
            i += 1
    raise ValueError("unterminated string")


def skip_ws(s: str, i: int) -> int:
    while i < len(s) and s[i] in " \t\n\r":
        i += 1
    return i


def parse_values(s: str, i: int, end_char: str | None) -> tuple[list[tuple[str, list | str]], int]:
    """Returns list of ('str', text) or ('arr', nested list of same)."""
    vals: list[tuple[str, list | str]] = []
    while True:
        i = skip_ws(s, i)
        if end_char is not None and i < len(s) and s[i] == end_char:
            break
        if i >= len(s):
            break
        if s[i] == '"':
            text, i = parse_string(s, i)
            vals.append(("str", text))
        elif s[i] == "[":
            i += 1
            nested, i = parse_values(s, i, "]")
            i = skip_ws(s, i)
            if i >= len(s) or s[i] != "]":
                raise ValueError("expected ]")
            i += 1
            vals.append(("arr", nested))
        else:
            raise ValueError("unexpected %r at %d in %r" % (s[i], i, s[:80]))
        i = skip_ws(s, i)
        if i < len(s) and s[i] == ",":
            i += 1
            continue
        i = skip_ws(s, i)
        if end_char is not None and i < len(s) and s[i] == end_char:
            break
        if end_char is not None and i < len(s):
            raise ValueError("expected , or %r at %d" % (end_char, i))
    return vals, i


def emit_values(vals: list[tuple[str, list | str]], do_translate: bool) -> list[str]:
    parts: list[str] = []
    for kind, v in vals:
        if kind == "str":
            t = translate_str(v) if do_translate else v
            parts.append('"' + escape_js(t) + '"')
        else:
            inner = emit_values(v, do_translate)  # type: ignore
            parts.append("[" + ", ".join(inner) + "]")
    return parts


def flatten_leaf_strings(vals: list[tuple[str, list | str]]) -> list[str]:
    out: list[str] = []
    for kind, v in vals:
        if kind == "str":
            out.append(v)
        else:
            out.extend(flatten_leaf_strings(v))  # type: ignore
    return out


def reinject_strings(
    vals: list[tuple[str, list | str]], translated: list[str]
) -> list[tuple[str, list | str]]:
    it = iter(translated)

    def walk(
        node: list[tuple[str, list | str]],
    ) -> list[tuple[str, list | str]]:
        new: list[tuple[str, list | str]] = []
        for kind, v in node:
            if kind == "str":
                new.append(("str", next(it)))
            else:
                new.append(("arr", walk(v)))  # type: ignore
        return new

    return walk(vals)


def split_key_and_array_line(line: str) -> tuple[str, str] | None:
    lc = line.rstrip()
    if lc.endswith(","):
        lc = lc[:-1]
    lc = lc.rstrip()
    for sep in ('": [', '":['):
        j = lc.find(sep)
        if j != -1:
            key_prefix = lc[: j + 1]
            # sep ends with '[' — include it in arr_str (was wrongly j+len(sep) which skipped '[')
            arr_str = lc[j + len(sep) - 1 :]
            if not arr_str.startswith("["):
                return None
            return key_prefix, arr_str
    return None


def matching_bracket_end(s: str) -> int:
    """s starts with '['; return index of matching ']'"""
    if not s.startswith("["):
        raise ValueError("array must start with [")
    level = 0
    i = 0
    in_str = False
    esc = False
    while i < len(s):
        c = s[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
            i += 1
            continue
        if c == '"':
            in_str = True
            i += 1
            continue
        if c == "[":
            level += 1
        elif c == "]":
            level -= 1
            if level == 0:
                return i
        i += 1
    raise ValueError("no matching ]")


def process_array_line(indent_and_key: str, arr_full: str, do_translate: bool) -> str:
    end = matching_bracket_end(arr_full)
    inner = arr_full[1:end]
    vals, _ = parse_values(inner, 0, None)
    if do_translate:
        flat = flatten_leaf_strings(vals)
        fr = translate_lines(flat)
        vals = reinject_strings(vals, fr)
        emitted = emit_values(vals, False)
    else:
        emitted = emit_values(vals, False)
    return indent_and_key + ': [' + ", ".join(emitted) + "],"


def process_file(ro_name: str, out_name: str) -> None:
    text = (LANG / ro_name).read_text(encoding="utf-8")
    text = text.replace('I18N.register("ro"', f'I18N.register("{REGISTER_LANG}"', 1)
    lines = text.splitlines()
    out: list[str] = []
    state = "ROOT"  # ROOT | TIPS | Q

    for line in lines:
        if re.search(r"\btips\s*:\s*\{", line):
            state = "TIPS"
            out.append(line)
            continue
        if re.search(r"\bq\s*:\s*\{", line):
            state = "Q"
            out.append(line)
            continue

        if state == "TIPS":
            sp = split_key_and_array_line(line)
            if sp:
                ik, arr = sp
                try:
                    if arr.strip().startswith("["):
                        out.append(process_array_line(ik, arr.strip(), True))
                        continue
                except Exception as e:
                    print("skip tips line:", e, line[:70], file=sys.stderr)
            out.append(line)
            continue

        if state == "Q":
            sp = split_key_and_array_line(line)
            if sp and re.match(r'^\s*"[A-Z0-9_]+"', line):
                ik, arr = sp
                try:
                    out.append(process_array_line(ik, arr.strip(), True))
                    continue
                except Exception as e:
                    print("skip q line:", e, line[:80], file=sys.stderr)
            out.append(line)
            continue

        out.append(line)

    (LANG / out_name).write_text("\n".join(out) + "\n", encoding="utf-8")
    print("Wrote", out_name, "cache size", len(_cache), flush=True)


def main() -> None:
    global _cache, TARGET_TL, REGISTER_LANG, OUT_PREFIX
    import argparse

    p = argparse.ArgumentParser()
    p.add_argument(
        "--target",
        choices=("fr", "de", "es", "pt", "zh", "hi", "ar"),
        default="fr",
        help="Output locale: fr, de, es, pt, zh, hi, or ar (default: fr; zh → Simplified Chinese)",
    )
    p.add_argument(
        "only",
        nargs="?",
        choices=("5-7", "8-11", "12-15", "adult", "all"),
        default="all",
        help="Build a single age band (default: all)",
    )
    args = p.parse_args()
    # Google Translate code may differ from I18N locale (e.g. zh-CN vs zh)
    if args.target == "zh":
        TARGET_TL = "zh-CN"
        REGISTER_LANG = "zh"
    else:
        TARGET_TL = args.target
        REGISTER_LANG = args.target
    OUT_PREFIX = f"{REGISTER_LANG}-train"
    jobs = [
        ("ro-train-5-7.js", f"{OUT_PREFIX}-5-7.js", "5-7"),
        ("ro-train-8-11.js", f"{OUT_PREFIX}-8-11.js", "8-11"),
        ("ro-train-12-15.js", f"{OUT_PREFIX}-12-15.js", "12-15"),
        ("ro-train-adult.js", f"{OUT_PREFIX}-adult.js", "adult"),
    ]
    _cache.clear()
    _line_blob_cache.clear()
    for ro, out_js, tag in jobs:
        if args.only != "all" and args.only != tag:
            continue
        process_file(ro, out_js)


if __name__ == "__main__":
    main()
