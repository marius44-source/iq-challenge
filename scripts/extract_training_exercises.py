"""Extract training exercises from iq-test JS files (no Node required)."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def parse_string_field(block: str, field: str) -> str:
    prefix = f'{field}: "'
    i = block.find(prefix)
    if i < 0:
        raise ValueError(f"missing {field}")
    i += len(prefix)
    out = []
    while i < len(block):
        c = block[i]
        if c == "\\":
            out.append(block[i : i + 2])
            i += 2
            continue
        if c == '"':
            return "".join(out)
        out.append(c)
        i += 1
    raise ValueError(f"unterminated string in {field}")


def parse_options_array(block: str) -> list[str]:
    m = re.search(r"options:\s*(\[[\s\S]*?\])\s*,\s*correct:", block)
    if not m:
        raise ValueError("options not found")
    raw = m.group(1)
    opts = re.findall(r'"((?:[^"\\]|\\.)*)"', raw)
    return opts


def split_exercise_blocks(section: str) -> list[str]:
    parts = re.split(r"\n\s*\{\s*\n\s*id:\s*\"", section)
    blocks = []
    for p in parts[1:]:
        blocks.append(p)
    return blocks


def extract_from_file(path: Path, object_names: list[str]) -> list[dict]:
    text = path.read_text(encoding="utf-8")
    exercises = []
    for name in object_names:
        m = re.search(rf"const\s+{re.escape(name)}\s*=\s*\{{", text)
        if not m:
            raise SystemExit(f"object {name} not found")
        start = m.end() - 1
        depth = 0
        i = start
        while i < len(text):
            if text[i] == "{":
                depth += 1
            elif text[i] == "}":
                depth -= 1
                if depth == 0:
                    obj_text = text[start : i + 1]
                    break
            i += 1
        else:
            raise SystemExit(f"unclosed object {name}")
        ex_blocks = split_exercise_blocks(obj_text)
        for b in ex_blocks:
            id_end = b.find('",')
            if id_end < 0:
                continue
            eid = b[:id_end]
            rest = b[id_end + 2 :]
            try:
                q = parse_string_field(rest, "question")
                hint = parse_string_field(rest, "hint")
                expl = parse_string_field(rest, "explanation")
                opts = parse_options_array(rest)
            except ValueError:
                continue
            exercises.append(
                {
                    "id": eid,
                    "question": q,
                    "hint": hint,
                    "options": opts,
                    "explanation": expl,
                }
            )
    return exercises


def main():
    if len(sys.argv) < 2:
        print("usage: extract_training_exercises.py 8-11|adult|dump-811-json|dump-adult-json")
        sys.exit(1)
    mode = sys.argv[1]
    if mode == "dump-811-json":
        import json

        p = ROOT / "training-children-8-11.js"
        names = [
            "TRAINING_PR_8_11",
            "TRAINING_NR_8_11",
            "TRAINING_LR_8_11",
            "TRAINING_SR_8_11",
            "TRAINING_MP_8_11",
        ]
        ex = extract_from_file(p, names)
        out = ROOT / "scripts" / "extracted-811.json"
        out.write_text(json.dumps(ex, ensure_ascii=False, indent=2), encoding="utf-8")
        print("wrote", out, len(ex))
        return
    if mode == "dump-adult-json":
        import json

        files = [
            ("training-pr.js", "TRAINING_PR"),
            ("training-nr.js", "TRAINING_NR"),
            ("training-lr.js", "TRAINING_LR"),
            ("training-sr.js", "TRAINING_SR"),
            ("training-mp.js", "TRAINING_MP"),
        ]
        all_ex = []
        for fn, oname in files:
            all_ex.extend(extract_from_file(ROOT / fn, [oname]))
        out = ROOT / "scripts" / "extracted-adult.json"
        out.write_text(json.dumps(all_ex, ensure_ascii=False, indent=2), encoding="utf-8")
        print("wrote", out, len(all_ex))
        return
    if mode == "8-11":
        p = ROOT / "training-children-8-11.js"
        names = [
            "TRAINING_PR_8_11",
            "TRAINING_NR_8_11",
            "TRAINING_LR_8_11",
            "TRAINING_SR_8_11",
            "TRAINING_MP_8_11",
        ]
        ex = extract_from_file(p, names)
        print(len(ex), "exercises")
        for e in ex[:2]:
            print(e["id"], e["question"][:50])
    elif mode == "adult":
        files = [
            ("training-pr.js", "TRAINING_PR"),
            ("training-nr.js", "TRAINING_NR"),
            ("training-lr.js", "TRAINING_LR"),
            ("training-sr.js", "TRAINING_SR"),
            ("training-mp.js", "TRAINING_MP"),
        ]
        all_ex = []
        for fn, oname in files:
            ex = extract_from_file(ROOT / fn, [oname])
            print(fn, len(ex))
            all_ex.extend(ex)
        print("total", len(all_ex))
    else:
        sys.exit("unknown mode")


if __name__ == "__main__":
    main()
