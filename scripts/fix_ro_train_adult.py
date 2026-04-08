# -*- coding: utf-8 -*-
"""Mechanical cleanup of mixed English/Romanian strings in lang/ro-train-adult.js."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
path = ROOT / "lang" / "ro-train-adult.js"
text = path.read_text(encoding="utf-8")

# Order: longer / more specific first
REPL = [
    (r"Ce urmează in the prime sequence\?", "Ce urmează în șirul numerelor prime?"),
    (r"Ce urmează in the sequence:", "Ce urmează în șirul:"),
    (r"Look at the second differences — they increase by 1\.", "Uită-te la diferențele de ordinul al doilea — cresc cu 1."),
    (r"Look at the ratio între consecutive terms\.", "Uită-te la raportul dintre termenii consecutivi."),
    (r"Look at the difference între each pair of consecutive terms\.", "Uită-te la diferența dintre fiecare pereche de termeni consecutivi."),
    (r"Look at the gap între any two consecutive terms\.", "Uită-te la intervalul dintre oricare doi termeni consecutivi."),
    (r"Găsește the constant difference între consecutive terms\.", "Găsește diferența constantă dintre termenii consecutivi."),
    (r"Găsește the constant difference între terms\.", "Găsește diferența constantă dintre termeni."),
    (r"Găsește the common difference între terms\.", "Găsește diferența comună dintre termeni."),
    (r"Găsește the constant that is added to each term\.", "Găsește constanta adăugată la fiecare termen."),
    (r"Găsește the amount subtracted între consecutive terms\.", "Găsește măsura scăzută între termenii consecutivi."),
    (r"Găsește the fixed amount added între terms\.", "Găsește pasul fix adăugat între termeni."),
    (r"Găsește the differences între terms, apoi look for a pattern in those differences\.", "Găsește diferențele dintre termeni, apoi caută un tipar în aceste diferențe."),
    (r"Găsește the differences între terms\. Do those differences form a pattern\?", "Găsește diferențele dintre termeni. Aceste diferențe formează un tipar?"),
    (r"Găsește the differences, apoi look at the differences of those differences\.", "Găsește diferențele, apoi diferențele acelor diferențe."),
    (r"Găsește the differences între terms\. Are those differences themselves a well-known sequence\?", "Găsește diferențele dintre termeni. Sunt aceste diferențe un șir cunoscut?"),
    (r"Găsește the differences între terms\. Do those differences remind you of a famous sequence\?", "Găsește diferențele dintre termeni. Îți amintesc de un șir faimos?"),
    (r"Găsește the multiplier by dividing any term by the previous one\.", "Găsește multiplicatorul împărțind orice termen la cel anterior."),
    (r"Găsește the square root of 169\.", "Găsește rădăcina pătrată din 169."),
    (r"Găsește the least common multiple \(LCM\) of 1, 2, 3, 4, 5, and 6\.", "Găsește cel mai mic multiplu comun (CMMMC) al lui 1, 2, 3, 4, 5 și 6."),
    (r"Găsește two neighboring whole numbers that multiply to 156\.", "Găsește două numere întregi alăturate al căror produs este 156."),
    (r"Gândește-te la order of the alphabet\.", "Gândește-te la ordinea literelor din alfabet."),
    (r"Fiecare număr crește cu the same amount\.", "Fiecare număr crește cu același pas."),
    (r"Fiecare termen este înmulțit cu the same number\.", "Fiecare termen se înmulțește cu același număr."),
    (r"Fiecare termen este înmulțit cu the next prime number\.", "Fiecare termen se înmulțește cu următorul număr prim."),
    (r"Fiecare termen este the sum of the two preceding terms\.", "Fiecare termen este suma celor doi termeni anteriori."),
    (r"Fiecare termen este the sum of the previous three terms\.", "Fiecare termen este suma celor trei termeni anteriori."),
    (r"Fiecare termen este the sum of the previous two terms\.", "Fiecare termen este suma celor doi termeni anteriori."),
    (r"Fiecare termen este the square of the previous term\.", "Fiecare termen este pătratul termenului anterior."),
    (r"Fiecare termen este a perfect square — which squares are these\?", "Fiecare termen este un pătrat perfect — care pătrate sunt acestea?"),
    (r"Fiecare termen este a fourth power\.", "Fiecare termen este o putere a patra."),
    (r"Fiecare termen este a perfect square\. What are they squares of\?", "Fiecare termen este un pătrat perfect. La ce numere sunt ridicate?"),
    (r"Fiecare termen este a cube — but of which numbers\?", "Fiecare termen este un cub — ale căror numere?"),
    (r"Fiecare termen este halved\.", "Fiecare termen se înjumătățește."),
    (r"Fiecare termen este divided by 2\.", "Fiecare termen se împarte la 2."),
    (r"Fiecare termen este divided by 3\.", "Fiecare termen se împarte la 3."),
    (r"Fiecare rând multiplies the first number by 1, 2, 3\.", "Fiecare rând înmulțește primul număr cu 1, 2, 3."),
    (r"Fiecare rând multiplies the first number by 1, 2, and 3\.", "Fiecare rând înmulțește primul număr cu 1, 2 și 3."),
    (r"Fiecare rând uses powers of the first number\.", "Fiecare rând folosește puteri ale primului număr."),
    (r"Fiecare rând shows powers of the first number\.", "Fiecare rând arată puteri ale primului număr."),
    (r"Fiecare rând shows n, n², n³\.", "Fiecare rând arată n, n², n³."),
    (r"Fiecare rând lists three numbers increasing by 2\.", "Fiecare rând listează trei numere care cresc cu 2."),
    (r"Fiecare rând starts one higher și adds the same amount\.", "Fiecare rând începe cu un număr mai mare și adaugă același pas."),
    (r"Adună the first two columns in each row\.", "Adună primele două coloane din fiecare rând."),
    (r"Numără diamonds in each step\.", "Numără romburii la fiecare pas."),
    (r"Numără squares at each step\.", "Numără pătratele la fiecare pas."),
    (r"Numără stars in each step\.", "Numără stelele la fiecare pas."),
    (r"Numără spades at each step\.", "Numără simbolurile de treflă la fiecare pas."),
    (r"The literele merg invers", "Literele merg invers"),
    (r"so următoarea literă este", "deci următoarea literă este"),
    (r", so after 5 urmează", ", deci după 5 urmează"),
    (r"so after 5 urmează", "deci după 5 urmează"),
    (r"The grid lists consecutive odd numbers:", "Grila listează numere impare consecutive:"),
    (r"The grid lists consecutive even numbers:", "Grila listează numere pare consecutive:"),
    (r"The sequence lists consecutive odd numbers\.", "Șirul listează numere impare consecutive."),
    (r"The sequence lists consecutive primes\.", "Șirul listează numere prime consecutive."),
    (r"The sequence lists consecutive primes in reverse\.", "Șirul listează numere prime consecutive în ordine descrescătoare."),
    (r"The sequence is 7², 6²", "Șirul este 7², 6²"),
    (r"The sequence is 1⁴, 2⁴", "Șirul este 1⁴, 2⁴"),
    (r"List the odd numbers in order, row by row\.", "Listează numerele impare în ordine, rând cu rând."),
    (r"List the even numbers row by row\.", "Listează numerele pare rând cu rând."),
    (r"List the prime numbers after 41\.", "Listează numerele prime după 41."),
    (r"Does the value ever change\?", "Se schimbă vreodată valoarea?"),
    (r"Every term is 1 — the pattern is constant, so the next value is 1\.", "Fiecare termen este 1 — tiparul e constant, deci următoarea valoare este 1."),
    (r"What number is added each step\?", "Ce număr se adaugă la fiecare pas?"),
    (r"How much does each term grow compared to the previous one\?", "Cu cât crește fiecare termen față de cel anterior?"),
    (r"The sequence is going down\. By how much each time\?", "Șirul scade. Cu cât la fiecare pas?"),
    (r"The sequence is decreasing\.", "Șirul scade."),
    (r"Cât este being added each time\?", "Ce se adaugă de fiecare dată?"),
    (r"Cât este being subtracted\?", "Ce se scade de fiecare dată?"),
    (r"Cât este the constant added each step\?", "Care este constanta adăugată la fiecare pas?"),
    (r"Try dividing each term by the previous one\.", "Încearcă să împarți fiecare termen la cel anterior."),
    (r"Try dividing each term by the next one\.", "Încearcă să împarți fiecare termen la următorul."),
    (r"Divide each term by the previous one to find a constant ratio\.", "Împarte fiecare termen la cel anterior pentru a găsi un raport constant."),
    (r"Divide consecutive terms to find the constant multiplier\.", "Împarte termenii consecutivi pentru a găsi multiplicatorul constant."),
    (r"Divide the second term by the first to find the multiplier\.", "Împarte al doilea termen la primul pentru a găsi multiplicatorul."),
    (r"What happens when you divide each term by the one before it\?", "Ce se întâmplă când împarți fiecare termen la cel dinaintea lui?"),
    (r"The sequence is halving\. What operation is applied each time\?", "Șirul se înjumătățește. Ce operație se aplică la fiecare pas?"),
    (r"Look at how each term relates to the two terms before it\.", "Uită-te cum se leagă fiecare termen de cei doi dinaintea lui."),
    (r"Try adding two consecutive terms together\.", "Încearcă să aduni doi termeni consecutivi."),
    (r"Check whether each term equals the sum of the two before it\.", "Verifică dacă fiecare termen e suma celor doi dinaintea lui."),
    (r"See if adding two consecutive terms gives the next one\.", "Vezi dacă suma a doi termeni consecutivi dă următorul."),
    (r"Try taking the square root of each term\.", "Încearcă rădăcina pătrată a fiecărui termen."),
    (r"Try taking the cube root of each term\.", "Încearcă rădăcina cubică a fiecărui termen."),
    (r"Take the square root of each term\. What do those numbers have in common\?", "Extrage rădăcina pătrată din fiecare termen. Ce au în comun aceste numere?"),
    (r"Take the square root of each term\. What type of numbers are they\?", "Extrage rădăcina pătrată din fiecare termen. Ce tip de numere sunt?"),
    (r"Are these numbers divisible only by 1 și themselves\?", "Sunt aceste numere divizibile doar cu 1 și cu ele însele?"),
    (r"Think about numbers that have exact two divisors\.", "Gândește-te la numere care au exact doi divizori."),
    (r"Nuthing can be concluded", "Nu se poate trage o concluzie"),
    (r"Nut every child is a son\.", "Nu orice copil este băiat."),
    (r"Nut refunded", "Nu s-au returnat"),
    (r"Nu birds are insects", "Nici o pasăre nu este insectă"),
    (r"Nu herbivores eat meat", "Niciun ierbivor nu mănâncă carne"),
    (r"Nuvels do not contain pages", "Nuvelele nu conțin pagini"),
    (r"Nut all ice is cold", "Nu tot gheața e rece"),
    (r"Steas orbit Saturn", "Steaua orbitează Saturn"),
    (r"Unele păsări are not eagles", "Unele păsări nu sunt vulturi"),
    (r"Unii câini sunt not canines", "Unii câini nu sunt canide"),
    (r"Rombs are not valuable", "Diamantele nu sunt toate valoroase"),
    (r"Daterday", "Ieri"),
    (r"Nuon:", "Amiază:"),
    (r"Nune — it was Nuah", "Niciunul — a fost Noe"),
    (r"Nuah's Ark", "arca lui Noe"),
    (r"Nuah swims", "Noe înoată"),
    (r"Nune of them", "Niciunul dintre ei"),
    (r"Nuw assign", "Acum atribuie"),
    (r"Steat with", "Începe cu"),
    (r"Steat with the total", "Începe cu totalul"),
    (r"Steat with 100", "Începe cu 100"),
]

for pat, repl in REPL:
    text = re.sub(pat, repl, text)

# Each term increases/decreases by N. The next term is ...
def fix_each_term(m):
    verb = m.group(1)
    n = m.group(2)
    rest = m.group(3).rstrip()
    if verb == "increases":
        return f"Fiecare termen crește cu {n}. Următorul termen este {rest}"
    return f"Fiecare termen scade cu {n}. Următorul termen este {rest}"

text = re.sub(
    r"Each term (increases|decreases) by ([^.]+)\. The next term is ([^\"]+)",
    fix_each_term,
    text,
)

# Fiecare termen este înmulțit cu X. The next term is -> Următorul termen este
text = re.sub(
    r"Fiecare termen este înmulțit cu (\d+)\. The next term is (.+?)(?=\")",
    r"Fiecare termen se înmulțește cu \1. Următorul termen este \2",
    text,
)
text = re.sub(
    r"Fiecare termen este divided by (\d+)\. The next term is (.+?)(?=\")",
    r"Fiecare termen se împarte la \1. Următorul termen este \2",
    text,
)

# După N, the next ... -> După N, următorul/următoarea
text = re.sub(r"După (\d+), the next is (\d+)", r"După \1, următorul termen este \2", text)
text = re.sub(
    r"După ([^,]+), the next multiple of (\d+) is (\d+)",
    r"După \1, următorul multiplu de \2 este \3",
    text,
)
text = re.sub(
    r"După ([^,]+), the next value is (\d+)",
    r"După \1, următoarea valoare este \2",
    text,
)
text = re.sub(
    r"După ([^,]+), the next smaller prime is (\d+)",
    r"După \1, următorul număr prim mai mic este \2",
    text,
)

path.write_text(text, encoding="utf-8")
print("Updated", path)
