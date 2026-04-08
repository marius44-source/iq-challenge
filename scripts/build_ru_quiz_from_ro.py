# -*- coding: utf-8 -*-
"""
Parse lang/ro-quiz-*.js entries and emit lang/ru-quiz-*.js with Russian strings.
Uses deep-translator (Google) ro -> ru. Preserves option order and math.
"""
import ast
import json
import re
import sys
import time
from pathlib import Path

try:
    from deep_translator import GoogleTranslator
except ImportError:
    print("pip install deep-translator", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
LANG = ROOT / "lang"
translator = GoogleTranslator(source="ro", target="ru")


def translate_text(s: str, cache: dict) -> str:
    s = s.strip()
    if not s:
        return s
    if s in cache:
        return cache[s]
    # Keep pure numbers, symbols, emoji-only, single letters
    if re.fullmatch(r"[\d\s.,$+\-*/=°²³⁴⁵⁶⁷⁸⁹⁰]+", s):
        cache[s] = s
        return s
    if len(s) <= 3 and not re.search(r"[a-zA-ZăâîșțĂÂÎȘȚ]", s):
        cache[s] = s
        return s
    for attempt in range(3):
        try:
            out = translator.translate(s)
            time.sleep(0.08)
            cache[s] = out
            return out
        except Exception as e:
            print("retry", attempt, e, file=sys.stderr)
            time.sleep(1.2 * (attempt + 1))
    cache[s] = s
    return s


def translate_list(arr, cache):
    out = []
    for item in arr:
        if isinstance(item, str):
            out.append(translate_text(item, cache))
        elif isinstance(item, list):
            out.append(translate_list(item, cache))
        else:
            out.append(item)
    return out


def js_string_escape(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def parse_q_object(text: str):
    """Extract I18N.register(\"ro\", { q: { ... } }); inner object as text."""
    m = re.search(r"I18N\.register\s*\(\s*[\"']ro[\"']\s*,\s*\{\s*q:\s*\{", text)
    if not m:
        raise ValueError("no register block")
    start = m.end()
    depth = 1
    i = start
    while i < len(text) and depth:
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
        i += 1
    body = text[start : i - 1]
    return body


def split_entries(body: str):
    """Yield (key, list_literal_str) from q body."""
    entries = []
    pos = 0
    key_pat = re.compile(r'"([Y][123][A-Z]{2}\d+)"\s*:\s*\[')
    while True:
        m = key_pat.search(body, pos)
        if not m:
            break
        key = m.group(1)
        lb = m.end() - 1
        depth = 0
        j = lb
        while j < len(body):
            c = body[j]
            if c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    list_str = body[lb : j + 1]
                    entries.append((key, list_str))
                    pos = j + 1
                    break
            j += 1
        else:
            break
    return entries


def list_to_js(arr) -> str:
    parts = []
    for x in arr:
        if isinstance(x, str):
            parts.append(js_string_escape(x))
        elif isinstance(x, list):
            parts.append("[" + ", ".join(js_string_escape(y) for y in x) + "]")
        else:
            parts.append(json.dumps(x))
    return "[" + ", ".join(parts) + "]"


def process_file(ro_name: str, ru_name: str, cache: dict):
    ro_path = LANG / ro_name
    text = ro_path.read_text(encoding="utf-8")
    body = parse_q_object(text)
    pairs = split_entries(body)
    if not pairs:
        raise SystemExit(f"no entries in {ro_name}")

    lines = ['I18N.register("ru", { q: {']
    for key, list_str in pairs:
        try:
            data = ast.literal_eval(list_str)
        except SyntaxError as e:
            print(f"ast fail {key}: {e}", file=sys.stderr)
            raise
        if not isinstance(data, list) or len(data) not in (3, 4):
            print(f"bad shape {key} len={len(data)}", file=sys.stderr)
            continue
        translated = translate_list(data, cache)
        lines.append(f'  "{key}": {list_to_js(translated)},')
    lines.append("}});")
    lines.append("")

    out = "\n".join(lines)
    (LANG / ru_name).write_text(out, encoding="utf-8")
    print("Wrote", LANG / ru_name, "entries", len(pairs))


def main():
    cache = {}
    for ro, ru in [
        ("ro-quiz-5-7.js", "ru-quiz-5-7.js"),
        ("ro-quiz-8-11.js", "ru-quiz-8-11.js"),
        ("ro-quiz-12-15.js", "ru-quiz-12-15.js"),
    ]:
        process_file(ro, ru, cache)
        print("  cached", len(cache), "strings")


if __name__ == "__main__":
    main()
