# -*- coding: utf-8 -*-
"""
Translate Romanian lang/*.js register blocks to Russian using Google web UI
with SSL verify disabled (for environments with intercepting proxies).
Caches to .ru_translate_cache.json in lang/.
"""
import json
import os
import re
import ssl
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LANG = ROOT / "lang"
CACHE_PATH = LANG / ".ru_translate_cache.json"
CTX = ssl.create_default_context()
CTX.check_hostname = False
CTX.verify_mode = ssl.CERT_NONE
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"


def load_cache():
    if CACHE_PATH.exists():
        try:
            return json.loads(CACHE_PATH.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}


def save_cache(c):
    CACHE_PATH.write_text(json.dumps(c, ensure_ascii=False, indent=0), encoding="utf-8")


def translate_google(s: str, cache: dict) -> str:
    s = s.strip()
    if not s:
        return s
    key = "ro|ru|" + s
    if key in cache:
        return cache[key]
    if re.fullmatch(r"[\d\s.,$+\-*/=°²³⁴⁵⁶⁷⁸⁹⁰]+", s):
        cache[key] = s
        return s
    # Do not translate symbol / emoji-only strings (options must stay exact)
    if not re.search(r"[a-zA-ZăâîșțĂÂÎȘȚа-яА-ЯёЁ]", s):
        cache[key] = s
        return s
    if len(s) <= 2 and not re.search(r"[a-zA-ZăâîșțĂÂÎȘȚ]", s):
        cache[key] = s
        return s
    q = urllib.parse.quote(s[:4500])
    url = f"https://translate.google.com/m?sl=ro&tl=ru&q={q}"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, context=CTX, timeout=45) as resp:
                html = resp.read().decode("utf-8", errors="replace")
            m = re.search(r'class="result-container">([^<]*)</div>', html)
            if m:
                out = m.group(1).strip()
                if out:
                    time.sleep(0.12)
                    cache[key] = out
                    return out
        except Exception as e:
            print("attempt", attempt, e, file=sys.stderr)
            time.sleep(1.5 * (attempt + 1))
    cache[key] = s
    return s


def translate_val(obj, cache):
    if isinstance(obj, str):
        return translate_google(obj, cache)
    if isinstance(obj, list):
        return [translate_val(x, cache) for x in obj]
    return obj


def process_train_file(ro_name: str, ru_name: str, cache: dict):
    text = (LANG / ro_name).read_text(encoding="utf-8")
    tl = os.environ.get("TRAIN_LIMIT")
    limit = int(tl) if tl and tl.isdigit() else None
    if re.search(r"\btips\s*:\s*\{", text[:15000]):
        return process_train_with_tips(text, ru_name, cache, limit)
    return process_q_only(text, ru_name, cache, limit)


def process_q_only(text: str, ru_name: str, cache: dict, limit: int | None = None):
    m = re.search(r'I18N\.register\s*\(\s*["\']ro["\']\s*,\s*\{', text)
    if not m:
        raise ValueError("no register")
    depth = 0
    i = m.end() - 1
    while i < len(text):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                inner_end = i
                break
        i += 1
    inner = text[m.end() : inner_end]
    qm = re.search(r"\bq\s*:\s*\{", inner)
    if not qm:
        raise ValueError("no q")
    qstart = qm.end() - 1
    depth = 0
    j = qstart
    while j < len(inner):
        if inner[j] == "{":
            depth += 1
        elif inner[j] == "}":
            depth -= 1
            if depth == 0:
                qbody = inner[qstart + 1 : j]
                break
        j += 1
    else:
        raise ValueError("unclosed q")

    out_lines = ['I18N.register("ru", {', "  q: {"]
    key_pat = re.compile(r'"([^"]+)"\s*:\s*\[')
    pos = 0
    nq = 0
    while True:
        mk = key_pat.search(qbody, pos)
        if not mk:
            break
        k = mk.group(1)
        lb = mk.end() - 1
        depth = 0
        jj = lb
        while jj < len(qbody):
            c = qbody[jj]
            if c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    lst = qbody[lb : jj + 1]
                    import ast

                    data = ast.literal_eval(lst)
                    tr = translate_val(data, cache)
                    out_lines.append(f'    "{k}": {json.dumps(tr, ensure_ascii=False)},')
                    nq += 1
                    if limit is not None and nq >= limit:
                        break
                    pos = jj + 1
                    break
            jj += 1
        else:
            break
        if limit is not None and nq >= limit:
            break

    out_lines.append("  }")
    out_lines.append("});")
    out_lines.append("")
    (LANG / ru_name).write_text("\n".join(out_lines), encoding="utf-8")
    print("Wrote", ru_name, "keys", nq, flush=True)


def process_train_with_tips(text: str, ru_name: str, cache: dict, limit: int | None = None):
    """ro-train-5-7 style: tips block then q block."""
    import ast

    lines_out = ['I18N.register("ru", {']
    n_done = [0]
    tips_m = re.search(r"tips\s*:\s*\{", text)
    q_m = re.search(r"\bq\s*:\s*\{", text)
    if tips_m and tips_m.start() < q_m.start():
        depth = 0
        i = tips_m.end() - 1
        while i < len(text):
            if text[i] == "{":
                depth += 1
            elif text[i] == "}":
                depth -= 1
                if depth == 0:
                    tips_body = text[tips_m.end() : i]
                    break
            i += 1
        lines_out.append("  tips: {")
        tip_key = re.compile(r'"([^"]+)"\s*:\s*\[')
        pos = 0
        while True:
            mk = tip_key.search(tips_body, pos)
            if not mk:
                break
            k = mk.group(1)
            lb = mk.end() - 1
            depth = 0
            jj = lb
            while jj < len(tips_body):
                c = tips_body[jj]
                if c == "[":
                    depth += 1
                elif c == "]":
                    depth -= 1
                    if depth == 0:
                        lst = tips_body[lb : jj + 1]
                        data = ast.literal_eval(lst)
                        tr = translate_val(data, cache)
                        lines_out.append(f'    {json.dumps(k, ensure_ascii=False)}: {json.dumps(tr, ensure_ascii=False)},')
                        pos = jj + 1
                        break
                jj += 1
            else:
                break
        lines_out.append("  },")

    q_m = re.search(r"\bq\s*:\s*\{", text)
    depth = 0
    i = q_m.end() - 1
    while i < len(text):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                qbody = text[q_m.end() : i]
                break
        i += 1

    lines_out.append("  q: {")
    key_pat = re.compile(r'"([^"]+)"\s*:\s*\[')
    pos = 0
    import ast

    while True:
        mk = key_pat.search(qbody, pos)
        if not mk:
            break
        k = mk.group(1)
        lb = mk.end() - 1
        depth = 0
        jj = lb
        while jj < len(qbody):
            c = qbody[jj]
            if c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    lst = qbody[lb : jj + 1]
                    data = ast.literal_eval(lst)
                    tr = translate_val(data, cache)
                    lines_out.append(f'    "{k}": {json.dumps(tr, ensure_ascii=False)},')
                    n_done[0] += 1
                    if limit is not None and n_done[0] >= limit:
                        break
                    pos = jj + 1
                    break
            jj += 1
        else:
            break
        if limit is not None and n_done[0] >= limit:
            break
    lines_out.append("  }")
    lines_out.append("});")
    lines_out.append("")
    (LANG / ru_name).write_text("\n".join(lines_out), encoding="utf-8")
    print("Wrote", ru_name, "exercises", n_done[0])


def main():
    import sys

    cache = load_cache()
    if len(sys.argv) > 1 and sys.argv[1] == "quiz":
        pairs = [
            ("ro-quiz-5-7.js", "ru-quiz-5-7.js"),
            ("ro-quiz-8-11.js", "ru-quiz-8-11.js"),
            ("ro-quiz-12-15.js", "ru-quiz-12-15.js"),
        ]
        for ro, ru in pairs:
            text = (LANG / ro).read_text(encoding="utf-8")
            process_q_only(text, ru, cache, None)
            save_cache(cache)
            print("quiz", ru, "cache", len(cache))
        save_cache(cache)
        return

    for ro, ru in [
        ("ro-train-5-7.js", "ru-train-5-7.js"),
        ("ro-train-8-11.js", "ru-train-8-11.js"),
        ("ro-train-12-15.js", "ru-train-12-15.js"),
        ("ro-train-adult.js", "ru-train-adult.js"),
    ]:
        process_train_file(ro, ru, cache)
        save_cache(cache)
        print("cache size", len(cache))
    save_cache(cache)


if __name__ == "__main__":
    main()
