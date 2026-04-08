# -*- coding: utf-8 -*-
"""Plain-text repairs for English fragments left in lang/ro-train-adult.js after JSON rebuild."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
path = ROOT / "lang" / "ro-train-adult.js"
text = path.read_text(encoding="utf-8")

# Longer phrases first
SUBS: list[tuple[str, str]] = [
    ("La fiecare pas se adaugă one diamond: 1, 2, 3, 4, so next is 5 diamonds.", "La fiecare pas se adaugă un romb: 1, 2, 3, 4, deci urmează 5 romburi."),
    ("La fiecare pas se adaugă one square: 1, 2, 3, so next is 4 squares.", "La fiecare pas se adaugă un pătrat: 1, 2, 3, deci urmează 4 pătrate."),
    ("La fiecare pas se adaugă one star: 1, 2, 3, 4, so next is 5 stars.", "La fiecare pas se adaugă o stea: 1, 2, 3, 4, deci urmează 5 stele."),
    ("La fiecare pas se adaugă one spade: 1, 2, 3, so next is 4 spades.", "La fiecare pas se adaugă o treflă: 1, 2, 3, deci urmează 4 trefle."),
    ("Sunt consecutive letters in the alphabet.", "Sunt litere consecutive din alfabet."),
    ("The letters continue sequentially through the alphabet: ", "Literele continuă în ordine în alfabet: "),
    ("La fiecare pas se adaugă one more character, alternating X și Y.", "La fiecare pas se adaugă încă un caracter, alternând X și Y."),
    ("Tiparul grows by appending alternating characters. The 5th term has 5 characters: XYXYX.", "Tiparul crește prin adăugare alternativă: al 5-lea termen are 5 caractere: XYXYX."),
    ("Each pair uses the next letter of the alphabet.", "Fiecare pereche folosește următoarea literă din alfabet."),
    ("La fiecare pas se adaugă one more alternating shape.", "La fiecare pas se adaugă încă o formă, alternând ○ și ●."),
    ("Tiparul grows by one shape each time, alternating ○ and ●. The next has 6 shapes: ○●○●○●.", "Tiparul crește cu câte o formă la fiecare pas, alternând ○ și ●. Următorul are 6 forme: ○●○●○●."),
    ("Each pair uses the next two consecutive letters.", "Fiecare pereche folosește următoarele două litere consecutive."),
    ("The pairs step through the alphabet two letters at a time: AB, CD, EF, GH, IJ.", "Perechile parcurg alfabetul câte două litere: AB, CD, EF, GH, IJ."),
    ("Two shapes repeat in a cycle.", "Două forme se repetă în ciclu."),
    ("După ■, the next shape is ○.", "După ■ urmează ○."),
    ("Look at how the three letters in each group shift.", "Uită-te cum se deplasează cele trei litere din fiecare grup."),
    ("shifted by one la fiecare pas. După DED urmează EFE.", "deplasat cu un pas la fiecare grup. După DED urmează EFE."),
    ("Compare each row to the row above it.", "Compară fiecare rând cu rândul de deasupra."),
    ("Each pair shifts one letter back in the alphabet.", "Fiecare pereche se deplasează cu o literă înapoi în alfabet."),
    ("Each pair moves one letter back: XY → WX → VW → UV → TU.", "Fiecare pereche coboară o literă: XY → WX → VW → UV → TU."),
    ("A single shape is followed by a double of the same, apoi the next shape.", "O singură formă e urmată de dublul ei, apoi următoarea formă."),
    ("The cycle is: single ○, double ○○, single ■, double ■■, apoi repeats. După ○ urmează ○○.", "Ciclul este: ○ simplu, ○○ dublu, ■ simplu, ■■ dublu, apoi se repetă. După ○ urmează ○○."),
    ("Uită-te la diferențe între consecutive terms — they grow by 1.", "Uită-te la diferențele dintre termeni consecutivi — cresc cu 1."),
    ("Differences are 1, 2, 3, 4, so the next difference is 5: 12 + 5 = 17.", "Diferențele sunt 1, 2, 3, 4, deci următoarea diferență este 5: 12 + 5 = 17."),
    ("How do the first two columns relate to the third?", "Cum se leagă primele două coloane de a treia?"),
    ("Column 1 × Column 2 = Column 3. ", "Coloana 1 × coloana 2 = coloana 3. "),
    ("Compute the differences — they form their own pattern.", "Calculează diferențele — formează propriul tipar."),
    ("Differences are 2, 4, 6, 8, so the next difference is 10: 23 + 10 = 33.", "Diferențele sunt 2, 4, 6, 8, deci următoarea este 10: 23 + 10 = 33."),
    ("Uită-te la diferențe, apoi the differences of the differences.", "Uită-te la diferențe, apoi la diferențele acelor diferențe."),
    ("Differences are 5, 9, 13, 17 (increasing by 4). Next difference is 21: 45 + 21 = 66.", "Diferențele sunt 5, 9, 13, 17 (cresc cu 4). Următoarea diferență este 21: 45 + 21 = 66."),
    ("How does column 3 relate to the other columns?", "Cum se leagă coloana 3 de celelalte coloane?"),
    ("Column 2 ÷ Column 1 = Column 3. ", "Coloana 2 ÷ coloana 1 = coloana 3. "),
    ("Try the formula n² + 1 for consecutive values of n.", "Încearcă formula n² + 1 pentru valori consecutive ale lui n."),
    ("Check how the gap între terms changes.", "Vezi cum se schimbă intervalul dintre termeni."),
    ("Differences are 2, 4, 6, 8, so next difference is 10: 30 + 10 = 40.", "Diferențele sunt 2, 4, 6, 8, deci următoarea este 10: 30 + 10 = 40."),
    ("Column 1 is a perfect square. What are the cube values?", "Coloana 1 este un pătrat perfect. Care sunt valorile cubului?"),
    ("Column 1 = n², Column 2 = n, Column 3 = n³. ", "Coloana 1 = n², coloana 2 = n, coloana 3 = n³. "),
    ("Uită-te la diferențe — they follow a familiar pattern.", "Uită-te la diferențe — urmează un tipar cunoscut."),
    ("Differences are 1, 2, 3, 5, 8 — each difference equals the sum of the two before it. Next difference is 8, so 13 + 8 = 21.", "Diferențele sunt 1, 2, 3, 5, 8 — fiecare diferență e suma celor două dinaintea ei. Următoarea diferență e 8, deci 13 + 8 = 21."),
    ("Split the sequence into odd-positioned și even-positioned terms.", "Împarte șirul în termeni pe poziții impare și pare."),
    ("Odd positions: 1, 2, 4, 8 (×2). Even positions: 3, 6, 12, 24 (×2). The next even-position term is 24.", "Poziții impare: 1, 2, 4, 8 (×2). Poziții pare: 3, 6, 12, 24 (×2). Următorul termen pe poziție pară este 24."),
    ("How does the last column relate to the first three?", "Cum se leagă ultima coloană de primele trei?"),
    ("Column 4 = Column 1 × Column 2 × Column 3. ", "Coloana 4 = coloana 1 × coloana 2 × coloana 3. "),
    ("How do the columns relate arithmetically?", "Cum se leagă coloanele aritmetic?"),
    ("Column 1 − Column 2 = Column 3. ", "Coloana 1 − coloana 2 = coloana 3. "),
    ("Each term uses the two previous terms with a multiplier.", "Fiecare termen folosește cei doi anteriori cu un multiplicator."),
    ("Rule: a(n) = 2×a(n−1) + a(n−2). Check: ", "Regula: a(n) = 2×a(n−1) + a(n−2). Verificare: "),
    ("This is a Lucas-like sequence: each term = sum of the two before it. 11 + 18 = 29.", "Șir de tip Lucas: fiecare termen = suma celor doi dinaintea lui. 11 + 18 = 29."),
    ("Row pattern is n¹, n³, n⁵. ", "Tiparul rândului este n¹, n³, n⁵. "),
    ("This is the Tribonacci sequence: each term = sum of the three before it. 4 + 7 + 13 = 24.", "Este șirul Tribonacci: fiecare termen = suma celor trei dinaintea lui. 4 + 7 + 13 = 24."),
    ("Try squaring each of the first two columns și adding.", "Încearcă pătratele primelor două coloane adunate."),
    ("Column 3 = Column 1² + Column 2². ", "Coloana 3 = coloana 1² + coloana 2². "),
    ("Multiply the first two columns și adjust by 1.", "Înmulțește primele două coloane și ajustează cu 1."),
    ("Column 3 = Column 1 × Column 2 + 1. ", "Coloana 3 = coloana 1 × coloana 2 + 1. "),
    ("Each step multiplies by the next prime.", "La fiecare pas înmulțești cu următorul număr prim."),
    ("Scade each term from the next one.", "Scade fiecare termen din următorul."),
    ("Calculează the step între consecutive terms.", "Calculează pasul dintre termeni consecutivi."),
    ("Scade the first term from the second to find the step size.", "Scade primul termen din al doilea ca să găsești mărimea pasului."),
    ("Scade each term from the one before it.", "Scade fiecare termen din cel dinaintea lui."),
    ("Găsește the constant step.", "Găsește pasul constant."),
    ("Compute the difference între the first two terms și check if it rămâns the same.", "Calculează diferența dintre primii doi termeni și verifică dacă rămâne aceeași."),
    ("Calculează the step size from any term to the next.", "Calculează pasul de la un termen la următorul."),
    ("Row n multiplies 1, 2, 3 by n. ", "Rândul n înmulțește 1, 2, 3 cu n. "),
    ("Column 1 + Column 2 = Column 3. ", "Coloana 1 + coloana 2 = coloana 3. "),
    ("Divide column 1 by column 2.", "Împarte coloana 1 la coloana 2."),
    ("Column 1 ÷ Column 2 = Column 3. ", "Coloana 1 ÷ coloana 2 = coloana 3. "),
    ("Try multiplying (Col1 + 1) by (Col2 + 1) and adjusting.", "Încearcă (coloana 1 + 1) × (coloana 2 + 1) și ajustează."),
    ("Column 3 = (Column 1 + 1) × (Column 2 + 1) − 1. ", "Coloana 3 = (coloana 1 + 1) × (coloana 2 + 1) − 1. "),
    ("Column 2 is a power of Column 1. What pattern does Column 3 follow?", "Coloana 2 este o putere a coloanei 1. Ce tipar urmează coloana 3?"),
    ("Column 2 = Column 1³. Column 3 = Column 1² − 1: ", "Coloana 2 = coloana 1³. Coloana 3 = coloana 1² − 1: "),
    ("Try squaring Column 1 și adding Column 2.", "Încearcă coloana 1 la pătrat plus coloana 2."),
    ("Column 3 = Column 1² + Column 2. ", "Coloana 3 = coloana 1² + coloana 2. "),
    ("Try squaring Column 1 și subtracting Column 2.", "Încearcă coloana 1 la pătrat minus coloana 2."),
    ("Column 3 = Column 1² − Column 2. ", "Coloana 3 = coloana 1² − coloana 2. "),
    ("Try squaring Column 1 și multiplying by Column 2.", "Încearcă coloana 1 la pătrat înmulțită cu coloana 2."),
    ("Column 3 = Column 1² × Column 2. ", "Coloana 3 = coloana 1² × coloana 2. "),
]

old = text
for a, b in SUBS:
    text = text.replace(a, b)

if text == old:
    print("No changes (already clean?)")
else:
    path.write_text(text, encoding="utf-8")
    print("Updated", path.name, "replacements applied:", len(SUBS))
