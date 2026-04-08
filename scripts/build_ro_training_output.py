# -*- coding: utf-8 -*-
"""Generate lang/ro-train-8-11.js and lang/ro-train-adult.js from extracted JSON."""
import importlib.util
import json
import re
from pathlib import Path


def _load_tlr811_ro():
    p = Path(__file__).resolve().parent / "tlr811_ro.py"
    spec = importlib.util.spec_from_file_location("tlr811_ro", p)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.TLR811_RO


def _load_tmp811_ro():
    p = Path(__file__).resolve().parent / "tmp811_ro.py"
    spec = importlib.util.spec_from_file_location("tmp811_ro", p)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.TMP811_RO

ROOT = Path(__file__).resolve().parent.parent
SCRIPTS = Path(__file__).resolve().parent

TIPS_8_11 = {
    "Look at Rows and Columns Separately": (
        "Uită-te la rânduri și coloane separat",
        "Într-o grilă cu numere, verifică mai întâi fiecare rând, apoi fiecare coloană. Adesea o direcție urmează o regulă simplă: numără din 2 în 2 sau din 3 în 3.",
    ),
    "Find the Rule Between Numbers": (
        "Găsește regula dintre numere",
        "Întreabă-te: ce adun, scad, înmulțesc sau împart ca să trec de la un număr la următorul? Încearcă fiecare operație până găsești una care merge la fiecare pas.",
    ),
    "Watch for Repeating Groups": (
        "Fii atent la grupuri care se repetă",
        "Uneori un grup de forme sau simboli se repetă la nesfârșit. Numără câte elemente are grupul, apoi vezi unde ești în ciclu.",
    ),
    "Use Elimination": (
        "Folosește eliminarea",
        "Dacă nu ești sigur, încearcă fiecare variantă de răspuns: pune-o în tipar și vezi dacă regula încă funcționează. Elimină orice răspuns care strică tiparul.",
    ),
    "Find the Difference": (
        "Caută diferența",
        "Scade fiecare număr din cel de dinaintea lui. Dacă diferența e mereu aceeași, regula e o adunare sau o scădere simplă.",
    ),
    "Try Multiplying or Dividing": (
        "Încearcă să înmulțești sau să împarți",
        "Împarte fiecare număr la cel dinainte. Dacă obții același rezultat de fiecare dată, șirul se înmulțește sau se împarte cu același factor.",
    ),
    "Check for Two-Step Rules": (
        "Verifică reguli în doi pași",
        "Uneori regula combină două operații (de ex. întâi +2, apoi ×2). Scrie pașii pe ciornă și urmărește-i în ordine.",
    ),
    "Write It Down": (
        "Notează pe hârtie",
        "Scrie numerele și diferențele sau rapoartele sub ele. Pe hârtie vezi mai ușor tiparul decât doar din ochi.",
    ),
    "Read Every Word Carefully": (
        "Citește fiecare cuvânt cu atenție",
        "La logică, detaliile contează: cuvinte mici ca «toți», «unii», «niciun», «sigur» schimbă sensul. Citește întrebarea de două ori înainte să alegi.",
    ),
    "Draw a Picture or List": (
        "Desenează sau fă o listă",
        "Schitează persoanele, zilele sau relațiile din problemă. O listă sau un desen simplu arată clar cine e mai mare, cine vine înainte etc.",
    ),
    "Watch Out for Traps": (
        "Fii atent la capcane",
        "Din «toți câinii sunt animale» nu rezultă «toate animalele sunt câini». Nu inversa regula din greșeală.",
    ),
    "Use 'If... Then...' Thinking": (
        "Gândește în modul «dacă… atunci…»",
        "Reformulează afirmațiile ca «dacă A, atunci B». Urmărește lanțul: dacă A e adevărat, ce trebuie să fie adevărat mai departe?",
    ),
    "Picture It in Your Mind": (
        "Imaginează-ți în minte",
        "Pentru forme și cuburi, încearcă să «vezi» rotirea sau plierea. Poți desena pe ciornă o schiță rapidă.",
    ),
    "Know the Basics of Common Shapes": (
        "Știe bazele formelor uzuale",
        "Cubul are 6 fețe, 12 muchii, 8 vârfuri. Prisma triunghiulară are 5 fețe. Repetă aceste fapte și devin automate.",
    ),
    "Count What You Cannot See": (
        "Numără și ce nu se vede",
        "La cuburi lipite, fețele ascunse unde se ating nu se numără la fețe vizibile. Scade fețele «lipite» din total.",
    ),
    "Use Nets to Understand Folding": (
        "Folosește desfășurata ca să înțelegi plierea",
        "Desfășurata («pătratul» tăiat care se pliază în cub) arată care fețe sunt vecine. Urmărește o față și vezi cu care se lipește.",
    ),
    "Read the Problem Twice": (
        "Citește problema de două ori",
        "Multe probleme capcană se bazează pe grăbitură. A doua citire prinde formulări ca «toate în afară de…» sau «rămân».",
    ),
    "Look for Trick Words": (
        "Caută cuvinte-cheie capcană",
        "Expresii ca «toate în afară de», «rămân», «în total», «fiecare» schimbă socoteala. Sublinează-le.",
    ),
    "Break It Into Steps": (
        "Împarte în pași",
        "Rezolvă pe rând: întâi ce știi sigur, apoi adună sau scade conform problemei. Nu încerca totul dintr-o dată.",
    ),
    "Check Your Answer": (
        "Verifică răspunsul",
        "După ce calculezi, întoarce-te la întrebare: răspunsul are sens în poveste? Refă calculul încă o dată dacă e nevoie.",
    ),
}

# Applied first (longest / most specific)
PHRASES_EXTRA: list[tuple[str, str]] = [
    ("All apples are fruits. All fruits are food. Are all apples food?", "Toate merele sunt fructe. Toate fructele sunt mâncare. Rezultă că toate merele sunt mâncare?",),
    ("All apples are fruits. All fruits are food.", "Toate merele sunt fructe. Toate fructele sunt mâncare.",),
    ("Urmează lanțul: apples → fruits → food.", "Urmează lanțul: mere → fructe → mâncare.",),
    ("Apples are fruits, and fruits are food. So all apples are food.", "Merele sunt fructe, iar fructele sunt mâncare. Deci toate merele sunt mâncare.",),
    ("These are multiples of a number.", "Numerele sunt multiplii aceluiași număr de bază.",),
    ("Think about the 3-times table.", "Gândește-te la înmulțirea cu 3 (tabla cu 3).",),
    ("Think about the 7-times table.", "Gândește-te la înmulțirea cu 7 (tabla cu 7).",),
    ("Count by 2s.", "Numără din 2 în 2.",),
    ("Count by 3s.", "Numără din 3 în 3.",),
    ("Count by 4s.", "Numără din 4 în 4.",),
    ("Count by 5s.", "Numără din 5 în 5.",),
    ("Count by 6s.", "Numără din 6 în 6.",),
    ("Count by 8s.", "Numără din 8 în 8.",),
    ("Count by 9s.", "Numără din 9 în 9.",),
    ("Count by 10s.", "Numără din 10 în 10.",),
    ("What comes next in the symbol pattern?", "Ce urmează în șirul de simboluri?",),
    ("Find the repeating group of symbols.", "Găsește grupul de simboluri care se repetă.",),
    ("Find the repeating group of 3.", "Găsește grupul de 3 care se repetă.",),
    ("Find the repeating group of 4 symbols.", "Găsește grupul de 4 simboluri care se repetă.",),
    ("Find the repeating group.", "Găsește grupul care se repetă.",),
    ("Each row lists multiples of its first number.", "Fiecare rând conține multiplii primului număr din acel rând.",),
    ("Each row multiplies the top row by the row number.", "Fiecare rând înmulțește primul rând cu numărul rândului.",),
    ("Multiply by the same number each time.", "Înmulțește de fiecare dată cu același număr.",),
    ("Each number doubles.", "Fiecare număr se dublează.",),
    ("Each number is multiplied by 3:", "Fiecare număr se înmulțește cu 3:",),
    ("Each number is multiplied by 2:", "Fiecare număr se înmulțește cu 2:",),
    ("Each number is multiplied by 5:", "Fiecare număr se înmulțește cu 5:",),
    ("Each number is multiplied by the same amount.", "Fiecare număr se înmulțește cu același factor.",),
    ("Add the previous two numbers together.", "Adună cele două numere anterioare.",),
    ("Each number is the sum of the two before it:", "Fiecare număr este suma celor două dinaintea lui:",),
    ("This is called the Fibonacci sequence.", "Acesta este șirul lui Fibonacci.",),
    ("These are called triangle numbers.", "Acestea sunt numere triunghiulare.",),
    ("Look at the differences: +2, +3, +4...", "Uită-te la diferențe: +2, +3, +4…",),
    ("Differences increase by 1 each time:", "Diferența crește cu 1 la fiecare pas:",),
    ("Differences are odd numbers:", "Diferențele sunt numere impare:",),
    ("Differences double:", "Diferențele se dublează:",),
    ("Multiply by increasing numbers:", "Înmulțește cu numere din ce în ce mai mari:",),
    ("If Spot is a dog, and all dogs are animals...", "Dacă Spot este un câine, iar toți câinii sunt animale…",),
    ("All dogs are animals. Spot is a dog. So Spot is an animal.", "Toți câinii sunt animale. Spot este un câine. Deci Spot este un animal.",),
    ("All cats have tails. Whiskers is a cat. So Whiskers has a tail.", "Toate pisicile au coadă. Mustăți este o pisică. Deci Mustăți are coadă.",),
    ("If all cats have tails, and Whiskers is a cat...", "Dacă toate pisicile au coadă, iar Mustăți este o pisică…",),
    ("Put them in order of height.", "Pune-i în ordinea înălțimii.",),
    ("Put them in order from oldest to youngest.", "Pune-i de la cel mai bătrân la cel mai tânăr.",),
    ("Tom is taller than Sam. Sam is taller than Ben. Who is the tallest?", "Tom este mai înalt decât Sam. Sam este mai înalt decât Ben. Cine este cel mai înalt?",),
    ("Tom > Sam > Ben. Tom is the tallest.", "Tom > Sam > Ben. Tom este cel mai înalt.",),
    ("Ana is older than Ben. Ben is older than Cara. Who is the youngest?", "Ana este mai în vârstă decât Ben. Ben este mai în vârstă decât Cara. Cine este cel mai tânăr?",),
    ("Ana > Ben > Cara in age. Cara is the youngest.", "Ana > Ben > Cara ca vârstă. Cara este cea mai tânără.",),
    ("Red > Blue > Green. Green is the smallest.", "Roșu > Albastru > Verde. Verde este cel mai mic.",),
    ("All fish live in water. A goldfish is a fish. So a goldfish lives in water.", "Toți peștii trăiesc în apă. Un pește-auriu este pește. Deci trăiește în apă.",),
    ("Where does a goldfish live?", "Unde trăiește un pește-auriu?",),
    ("On land", "Pe uscat",),
    ("In trees", "În copaci",),
    ("In water", "În apă",),
    ("In the sky", "În cer",),
    ("A plant", "O plantă",),
    ("An animal", "Un animal",),
    ("A bird", "O pasăre",),
    ("A fish", "Un pește",),
    ("Only some", "Doar unele",),
    ("They are the same", "Sunt la fel",),
    ("They are the same age", "Au aceeași vârstă",),
    ("They are equal", "Sunt egale ca mărime",),
    ("Order them by size.", "Ordonează-le după mărime.",),
    ("Does Whiskers have a tail?", "Are Mustăți coadă?",),
    ("Whiskers has a tail", "Mustăți are coadă",),
    ("If all fish swim, and this thing cannot swim...", "Dacă toți peștii înoată, iar acest lucru nu poate înota…",),
    ("What is Spot?", "Ce este Spot?",),
]

# Longest-first phrase replacements (question / hint / explanation text)
PHRASES: list[tuple[str, str]] = [
    ("What comes next in the pattern?", "Ce urmează în șir?"),
    ("What is the maximum number of sides", "Care este numărul maxim de laturi"),
    ("What comes next?", "Ce urmează?"),
    ("What is the missing number?", "Care este numărul lipsă?"),
    ("What is half of", "Cât este jumătate din"),
    ("What is triple", "Cât este triplul lui"),
    ("What is double", "Cât este dublul lui"),
    ("What is the value of", "Care este valoarea lui"),
    ("What is the answer?", "Care este răspunsul?"),
    ("What is ", "Cât este "),
    ("What fraction", "Ce fracție"),
    ("What percent", "Ce procent"),
    ("How many", "Câte"),
    ("Which is the biggest?", "Care este cel mai mare?"),
    ("Which is the smallest?", "Care este cel mai mic?"),
    ("Which of the following", "Care dintre următoarele"),
    ("Which statement", "Care afirmație"),
    ("Which conclusion", "Care concluzie"),
    ("Which option", "Care variantă"),
    ("Which day", "Ce zi"),
    ("Which figure", "Care figură"),
    ("Which piece", "Care piesă"),
    ("Which net", "Care desfășurată"),
    ("Which shape", "Care formă"),
    ("Which cube", "Care cub"),
    ("Which letter", "Care literă"),
    ("Which number", "Care număr"),
    ("Which ", "Care "),
    ("Who is the tallest?", "Cine este cel mai înalt?"),
    ("Who is the shortest?", "Cine este cel mai scund?"),
    ("Who is telling the truth?", "Cine spune adevărul?"),
    ("Who is lying?", "Cine minte?"),
    ("Who ate", "Cine a mâncat"),
    ("Who is", "Cine este"),
    ("Complete the grid:", "Completează grila:"),
    ("Grid columns:", "Coloanele grilei:"),
    ("Grid: Row", "Grilă: rândul"),
    ("Grid:", "Grilă:"),
    ("Row 1 is", "rândul 1 este"),
    ("Row 2 is", "rândul 2 este"),
    ("Row 3 is", "rândul 3 este"),
    ("Col 1 is", "coloana 1 este"),
    ("Col 2 is", "coloana 2 este"),
    ("Col 3 is", "coloana 3 este"),
    ("Pattern:", "Șir:"),
    ("The rule alternates:", "Regula alternează:"),
    ("The pattern alternates:", "Tiparul alternează:"),
    (" then ", " apoi "),
    (" then.", " apoi."),
    ("What comes next", "Ce urmează"),
    ("What operation comes next?", "Ce operație urmează?"),
    ("Today is", "Astăzi este"),
    ("Yesterday was", "Ieri a fost"),
    ("Tomorrow will be", "Mâine va fi"),
    ("In a class of", "Într-o clasă de"),
    ("In a row of", "Într-un rând de"),
    ("In a group of", "Într-un grup de"),
    ("In a family of", "Într-o familie de"),
    ("In a yard there are", "Într-o curte sunt"),
    ("In a pet shop", "Într-un magazin de animale"),
    ("In a race,", "Într-o cursă,"),
    ("In a certain language", "Într-o limbă imaginară"),
    ("In a stack of", "Într-o stivă de"),
    ("In the figure", "În figură"),
    ("In the sequence", "În șir"),
    ("In the grid", "În grilă"),
    ("If you rearrange the letters", "Dacă rearanjezi literele"),
    ("If you fold", "Dacă pliezi"),
    ("If you rotate", "Dacă rotești"),
    ("If you reflect", "Dacă oglindești"),
    ("If you", "Dacă "),
    ("If A is true", "Dacă A este adevărat"),
    ("If it is false that", "Dacă este fals că"),
    ("If every", "Dacă fiecare"),
    ("If all", "Dacă toți"),
    ("If no", "Dacă niciun"),
    ("If some", "Dacă unii"),
    ("If exactly one", "Dacă exact una"),
    ("If at least", "Dacă cel puțin"),
    ("If nobody", "Dacă nimeni"),
    ("If someone", "Dacă cineva"),
    ("Is it possible that", "Este posibil ca"),
    ("Is it true that", "Este adevărat că"),
    ("Is the following", "Este următoarea"),
    ("Must it be true", "Trebuie să fie adevărat"),
    ("Can we conclude", "Putem concluziona"),
    ("Can you determine", "Poți determina"),
    ("All cats are", "Toate pisicile sunt"),
    ("All dogs are", "Toți câinii sunt"),
    ("All birds have", "Toate păsările au"),
    ("All roses are", "Toți trandafirii sunt"),
    ("All squares are", "Toate pătratele sunt"),
    ("All fish", "Toți peștii"),
    ("All students", "Toți elevii"),
    ("All teachers", "Toți profesorii"),
    ("All members", "Toți membrii"),
    ("All widgets are", "Toate piesele sunt"),
    ("All bloops are", "Toate bloop-urile sunt"),
    ("All zorgs are", "Toate zorg-urile sunt"),
    ("All glorks are", "Toate glork-urile sunt"),
    ("All snarks are", "Toate snark-urile sunt"),
    ("All borgs are", "Toate borg-urile sunt"),
    ("All krents are", "Toate krent-urile sunt"),
    ("All plorks are", "Toate plork-urile sunt"),
    ("All smeeps are", "Toate smeep-urile sunt"),
    ("All torks are", "Toate tork-urile sunt"),
    ("All vrells are", "Toate vrell-urile sunt"),
    ("All wumpuses are", "Toate wumpus-urile sunt"),
    ("All zibbles are", "Toate zibble-urile sunt"),
    ("Every cat is", "Fiecare pisică este"),
    ("Every dog is", "Fiecare câine este"),
    ("Every bird", "Fiecare pasăre"),
    ("Every student", "Fiecare elev"),
    ("Every bloop is", "Fiecare bloop este"),
    ("Every glork is", "Fiecare glork este"),
    ("Every zorg is", "Fiecare zorg este"),
    ("Every snark is", "Fiecare snark este"),
    ("Every borg is", "Fiecare borg este"),
    ("Every krent is", "Fiecare krent este"),
    ("Every plork is", "Fiecare plork este"),
    ("Every smeep is", "Fiecare smeep este"),
    ("Every tork is", "Fiecare tork este"),
    ("Every vrell is", "Fiecare vrell este"),
    ("Every wumpus is", "Fiecare wumpus este"),
    ("Every zibble is", "Fiecare zibble este"),
    ("Every furry thing is soft", "Orice lucru păros este moale"),
    ("Every soft thing is nice to hug", "Orice lucru moale e plăcut de îmbrățișat"),
    ("Whiskers is a cat", "Mustăți este o pisică"),
    ("Is Whiskers nice to hug?", "Este Mustăți plăcut de îmbrățișat?"),
    ("Only kittens", "Doar pisoii"),
    ("Something cannot swim", "Ceva nu poate înota"),
    ("Is it a fish?", "Este un pește?"),
    ("No bloops are", "Niciun bloop nu este"),
    ("No zorgs are", "Niciun zorg nu este"),
    ("No glorks are", "Niciun glork nu este"),
    ("No snarks are", "Niciun snark nu este"),
    ("No borgs are", "Niciun borg nu este"),
    ("No krents are", "Niciun krent nu este"),
    ("No plorks are", "Niciun plork nu este"),
    ("No smeeps are", "Niciun smeep nu este"),
    ("No torks are", "Niciun tork nu este"),
    ("No vrells are", "Niciun vrell nu este"),
    ("No wumpuses are", "Niciun wumpus nu este"),
    ("No zibbles are", "Niciun zibble nu este"),
    ("Some dogs are", "Unii câini sunt"),
    ("Some cats are", "Unele pisici sunt"),
    ("Some birds", "Unele păsări"),
    ("Some students", "Unii elevi"),
    ("Some roses are", "Unii trandafiri sunt"),
    ("Some flowers", "Unele flori"),
    ("Some bloops are", "Unele bloop-uri sunt"),
    ("Some zorgs are", "Unele zorg-uri sunt"),
    ("Some glorks are", "Unele glork-uri sunt"),
    ("Some snarks are", "Unele snark-uri sunt"),
    ("Some borgs are", "Unele borg-uri sunt"),
    ("Some krents are", "Unele krent-uri sunt"),
    ("Some plorks are", "Unele plork-uri sunt"),
    ("Some smeeps are", "Unele smeep-uri sunt"),
    ("Some torks are", "Unele tork-uri sunt"),
    ("Some vrells are", "Unele vrell-uri sunt"),
    ("Some wumpuses are", "Unele wumpus-uri sunt"),
    ("Some zibbles are", "Unele zibble-uri sunt"),
    ("Nobody in the room is both", "Nimeni din cameră nu este în același timp"),
    ("Nobody is both", "Nimeni nu este în același timp"),
    ("Exactly one person is lying", "Exact o persoană minte"),
    ("Exactly one statement is true", "Exact o afirmație este adevărată"),
    ("At least one is lying", "Cel puțin unul minte"),
    ("At least one is telling the truth", "Cel puțin unul spune adevărul"),
    ("Each person says", "Fiecare persoană spune"),
    ("Each makes one statement", "Fiecare face o afirmație"),
    ("You have", "Ai"),
    ("You buy", "Cumperi"),
    ("You earn", "Câștigi"),
    ("You pay", "Plătești"),
    ("You save", "Economisești"),
    ("You pour", "Turni"),
    ("You read", "Citești"),
    ("You walk", "Mergeți"),
    ("You need", "Ai nevoie de"),
    ("You want", "Vrei"),
    ("You start with", "Începi cu"),
    ("You roll", "Arunci"),
    ("A train", "Un tren"),
    ("A baker", "Un brutar"),
    ("A farmer has", "Un fermier are"),
    ("A shop sells", "Un magazin vinde"),
    ("A recipe needs", "O rețetă necesită"),
    ("A box contains", "O cutie conține"),
    ("A bag has", "O pungă are"),
    ("A rope burns", "O frânghie arde"),
    ("A snail", "Un melc"),
    ("A lily pad", "Un nufăr"),
    ("A clock shows", "Un ceas arată"),
    ("A cube is painted", "Un cub este vopsit"),
    ("A cube's net", "Desfășurata unui cub"),
    ("A rectangular box (cuboid)", "O cutie dreptunghică (cuboid)"),
    ("A triangular prism", "O prismă triunghiulară"),
    ("A square pyramid", "O piramidă cu baza pătrată"),
    ("A regular tetrahedron", "Un tetraedru regulat"),
    ("A sphere", "O sferă"),
    ("A circle", "Un cerc"),
    ("A cylinder", "Un cilindru"),
    ("A cone", "Un con"),
    ("A pentagon", "Un pentagon"),
    ("A hexagon", "Un hexagon"),
    ("A triangle", "Un triunghi"),
    ("A right triangle", "Un triunghi dreptunghic"),
    ("A piece is removed", "Se scoate o piesă"),
    ("Solve:", "Rezolvă:"),
    ("Calculate", "Calculează"),
    ("Determine", "Determină"),
    ("Find the missing", "Găsește valoarea lipsă"),
    ("Find the value", "Găsește valoarea"),
    ("Find ", "Găsește "),
    ("Imagine", "Imaginează-ți"),
    ("Given that", "Știind că"),
    ("Given ", "Fiind dat "),
    ("Letters ", "Literele "),
    ("Digits ", "Cifrele "),
    ("Digits A", "Cifra A"),
    ("Digits B", "Cifra B"),
    ("Each letter", "Fiecare literă"),
    ("Each digit", "Fiecare cifră"),
    ("Each step adds", "La fiecare pas se adaugă"),
    ("Each step removes", "La fiecare pas se scoate"),
    ("Each number increases by", "Fiecare număr crește cu"),
    ("Each number decreases by", "Fiecare număr scade cu"),
    ("Each number is halved", "Fiecare număr se înjumătățește"),
    ("Each number is divided by", "Fiecare număr se împarte la"),
    ("Each number is", "Fiecare număr este"),
    ("Each term is", "Fiecare termen este"),
    ("Each face", "Fiecare față"),
    ("Each child", "Fiecare copil"),
    ("Each person", "Fiecare persoană"),
    ("Each day", "În fiecare zi"),
    ("Each hour", "În fiecare oră"),
    ("Each minute", "În fiecare minut"),
    ("Each gets", "Fiecare primește"),
    ("Each cuts", "Fiecare taie"),
    ("The pattern counts up by", "Șirul crește din"),
    ("The pattern counts by", "Șirul merge din"),
    ("The pattern is", "Tiparul este"),
    ("The next number is", "Următorul număr este"),
    ("The missing number is", "Numărul lipsă este"),
    ("The answer is", "Răspunsul este"),
    ("The rule is", "Regula este"),
    ("The largest is", "Cel mai mare este"),
    ("The smallest is", "Cel mai mic este"),
    ("Therefore,", "Prin urmare,"),
    ("So the next", "Deci următorul"),
    ("So after", "Deci după"),
    ("Tom is", "Tom este"),
    ("Tom says", "Tom spune"),
    ("Sam is", "Sam este"),
    ("Alex is", "Alex este"),
    ("Ben is", "Ben este"),
    ("Amy is", "Amy este"),
    ("Sara is", "Sara este"),
    ("Emma is", "Emma este"),
    ("Maria is", "Maria este"),
    ("John is", "Ion este"),
    ("Chris is", "Chris este"),
    ("Pat is", "Pat este"),
    ("Max is", "Max este"),
    ("Leo is", "Leo este"),
    ("Kim is", "Kim este"),
    ("Zoe is", "Zoe este"),
    ("is bigger than", "este mai mare decât"),
    ("is smaller than", "este mai mic decât"),
    ("is taller than", "este mai înalt decât"),
    ("is shorter than", "este mai scund decât"),
    ("is older than", "este mai în vârstă decât"),
    ("is younger than", "este mai tânăr decât"),
    ("is faster than", "este mai rapid decât"),
    ("is slower than", "este mai lent decât"),
    ("is heavier than", "este mai greu decât"),
    ("is lighter than", "este mai ușor decât"),
    ("is to the left of", "este la stânga lui"),
    ("is to the right of", "este la dreapta lui"),
    ("is in front of", "este în fața lui"),
    ("is behind", "este în spatele"),
    (" sits in seat ", " stă pe locul "),
    (" sits on the left", " stă la stânga"),
    (" sits on the right", " stă la dreapta"),
    (" sits between", " stă între"),
    (" sits next to", " stă lângă"),
    ("Red is bigger than Blue", "Roșu este mai mare decât Albastru"),
    ("Blue is bigger than Green", "Albastru este mai mare decât Verde"),
    ("Green is bigger than Yellow", "Verde este mai mare decât Galben"),
    ("Yellow is the smallest", "Galben este cel mai mic"),
    ("Count by", "Numără din"),
    ("Count the", "Numără"),
    ("Think about the", "Gândește-te la"),
    ("Think of", "Gândește-te la"),
    ("These are multiples of", "Sunt multiplii lui"),
    ("These are all odd numbers", "Sunt numere impare"),
    ("These are all even numbers", "Sunt numere pare"),
    ("These are consecutive", "Sunt consecutive"),
    ("These are odd numbers", "Sunt numere impare"),
    ("These are even numbers", "Sunt numere pare"),
    ("These are perfect squares", "Sunt pătrate perfecte"),
    ("These are perfect cubes", "Sunt cuburi perfecte"),
    ("These are prime numbers", "Sunt numere prime"),
    ("These are Fibonacci", "Sunt din șirul lui Fibonacci"),
    ("How much is added each time?", "Cu cât se adună de fiecare dată?"),
    ("How much is subtracted", "Cu cât se scade"),
    ("The shapes take turns", "Formele se alternează"),
    ("The letters take turns", "Literele se alternează"),
    ("Two symbols take turns", "Două simboluri se alternează"),
    ("Circle and square alternate", "Cercul și pătratul se alternează"),
    ("The alphabet is going in reverse", "Alfabetul merge invers"),
    ("Notice the alternating pattern", "Observă tiparul care alternează"),
    ("Look at the difference between consecutive numbers", "Uită-te la diferența dintre numerele consecutive"),
    ("Look for a repeating group", "Caută un grup care se repetă"),
    ("Look for two rules", "Caută două reguli"),
    ("Double the previous, then add", "Dublează precedentul, apoi adună"),
    ("Triple the previous, then subtract", "Triplă precedentul, apoi scade"),
    ("Add 1, then multiply by", "Adună 1, apoi înmulțește cu"),
    ("Multiply by", "Înmulțește cu"),
    ("Subtract", "Scade"),
    ("Add ", "Adună "),
    ("Divide by", "Împarte la"),
    ("Half means", "Jumătate înseamnă"),
    ("Triple means", "Triplu înseamnă"),
    ("Double means", "Dublu înseamnă"),
    (" came from doubling", " provine din dublare"),
    (" came from subtracting", " provine din scădere"),
    (" came from adding", " provine din adunare"),
    ("Work backwards:", "Lucrează invers:"),
    ("Work backwards ", "Lucrează invers "),
    ("Who is at the top of the chain?", "Cine e în vârful lanțului?"),
    ("Follow the chain:", "Urmează lanțul:"),
    ("If all fish swim", "Dacă toți peștii înoată"),
    ("If it cannot swim", "Dacă nu poate înota"),
    ("it is not a fish", "nu este pește"),
    ("All fish can swim", "Toți peștii pot înota"),
    ("An edge is where two faces meet", "O muchie e unde se întâlnesc două fețe"),
    ("A vertex is a point where edges meet", "Un vârf e punctul unde se întâlnesc muchiile"),
    ("Think of a dice", "Gândește-te la un zar"),
    ("Think of a shoebox", "Gândește-te la o cutie de pantofi"),
    ("All faces of a cube are the same shape", "Toate fețele cubului au aceeași formă"),
    ("Each face of a cube is a square", "Fiecare față a cubului este un pătrat"),
    ("A cube has", "Un cub are"),
    ("flat faces", "fețe plane"),
    ("flat sides", "fețe plane"),
    ("vertices (corners)", "vârfuri (colțuri)"),
    ("vertices", "vârfuri"),
    ("edges", "muchii"),
    ("faces", "fețe"),
    ("unfolded flat version", "versiunea desfășurată"),
    ("is made of how many squares?", "este format din câte pătrate?"),
    ("What shape is each face", "Ce formă are fiecare față"),
    ("What shape do you get", "Ce formă obții"),
    ("when you fold", "când pliezi"),
    ("when you look", "când privești"),
    ("from any direction", "din orice direcție"),
    ("from above", "de sus"),
    ("from the front", "din față"),
    ("After folding", "După pliere"),
    ("After rotating", "După rotire"),
    ("After reflecting", "După oglindire"),
    ("degrees clockwise", "grade în sensul acelor de ceasornic"),
    ("degrees counterclockwise", "grade în sens invers acelor de ceasornic"),
    ("° clockwise", "° în sensul acelor de ceasornic"),
    ("° counterclockwise", "° în sens invers acelor de ceasornic"),
    ("is NOT true", "NU este adevărat"),
    ("is not true", "nu este adevărat"),
    ("must be true", "trebuie să fie adevărat"),
    ("must be false", "trebuie să fie fals"),
    ("Could all statements be false", "Pot fi toate afirmațiile false"),
    ("Could all be true", "Pot fi toate adevărate"),
    ("How many statements are true", "Câte afirmații sunt adevărate"),
    ("days from now", "zile de acum înainte"),
    ("days ago", "zile în urmă"),
    ("weeks and", "săptămâni și"),
    (" extra days", " zile în plus"),
    (" extra day", " zi în plus"),
    ("people in the row", "persoane în rând"),
    ("people are in the row", "persoane sunt în rând"),
    ("students in a class", "elevi într-o clasă"),
    ("students play", "elevi joacă"),
    ("play soccer", "joacă fotbal"),
    ("play basketball", "joacă baschet"),
    ("play football", "joacă fotbal"),
    ("like apples", "le plac merele"),
    ("like bananas", "le plac bananele"),
    ("like pizza", "le place pizza"),
    ("like math", "le place matematica"),
    ("like music", "le place muzica"),
    ("speak English", "vorbesc engleza"),
    ("speak French", "vorbesc franceza"),
    ("speak Spanish", "vorbesc spaniola"),
    ("If everyone likes at least one", "Dacă fiecăruia îi place cel puțin unul"),
    ("If each likes at least one", "Dacă fiecăruia îi place cel puțin unul"),
    ("how many like both", "câți le plac ambele"),
    ("how many play both", "câți joacă ambele"),
    ("how many speak both", "câți vorbesc ambele"),
    ("If there are", "Dacă sunt"),
    ("If there is", "Dacă este"),
    ("more than", "mai mult decât"),
    ("less than", "mai puțin decât"),
    ("at least", "cel puțin"),
    ("at most", "cel mult"),
    ("exactly", "exact"),
    ("between", "între"),
    ("except", "cu excepția"),
    ("remaining", "rămase"),
    ("run away", "fug"),
    ("ran away", "au fugit"),
    ("stay", "rămân"),
    ("stayed", "au rămas"),
    ("costs", "costă"),
    ("cost ", "costă "),
    ("off. What", " reducere. Cât"),
    ("discount", "reducere"),
    ("off the price", "din preț"),
    ("per meter", "pe metru"),
    ("per hour", "pe oră"),
    ("per minute", "pe minut"),
    ("per day", "pe zi"),
    ("per week", "pe săptămână"),
    ("minutes to", "minute până la"),
    ("hours to", "ore până la"),
    ("miles per hour", "mile pe oră"),
    ("km per hour", "km pe oră"),
    ("meters per second", "metri pe secundă"),
    ("years old", "ani"),
    ("minutes early", "minute mai devreme"),
    ("minutes late", "minute mai târziu"),
    ("years apart", "ani diferență"),
    ("minutes apart", "minute diferență"),
    (" o'clock", " fix"),
    ("p.m.", "p.m."),
    ("a.m.", "a.m."),
    ("Monday", "luni"),
    ("Tuesday", "marți"),
    ("Wednesday", "miercuri"),
    ("Thursday", "joi"),
    ("Friday", "vineri"),
    ("Saturday", "sâmbătă"),
    ("Sunday", "duminică"),
    ("January", "ianuarie"),
    ("February", "februarie"),
    ("March", "martie"),
    ("April", "aprilie"),
    ("May", "mai"),
    ("June", "iunie"),
    ("July", "iulie"),
    ("August", "august"),
    ("September", "septembrie"),
    ("October", "octombrie"),
    ("November", "noiembrie"),
    ("December", "decembrie"),
    ("Triangle", "Triunghi"),
    ("Square", "Pătrat"),
    ("Rectangle", "Dreptunghi"),
    ("Circle", "Cerc"),
    ("Pentagon", "Pentagon"),
    ("Hexagon", "Hexagon"),
    ("Octagon", "Octogon"),
    ("Star", "Stea"),
    ("Diamond", "Romb"),
    ("Heart", "Inimă"),
    ("Yes", "Da"),
    ("No", "Nu"),
    ("Maybe", "Poate"),
    ("True", "Adevărat"),
    ("False", "Fals"),
    ("Cannot tell", "Nu se poate spune"),
    ("We cannot tell", "Nu putem ști"),
    ("We don't know", "Nu știm"),
    ("Only sometimes", "Doar uneori"),
    ("Only if", "Doar dacă"),
    ("Never", "Niciodată"),
    ("Always", "Mereu"),
    ("Sometimes", "Uneori"),
    ("None of the above", "Niciuna de mai sus"),
    ("All of the above", "Toate de mai sus"),
    ("Both could be true", "Ambele ar putea fi adevărate"),
    ("Both must be true", "Ambele trebuie să fie adevărate"),
    ("Neither is true", "Niciuna nu e adevărată"),
    ("One is lying", "Unul minte"),
    ("Two are lying", "Doi mint"),
    ("Three are lying", "Trei mint"),
    ("Everyone is lying", "Toți mint"),
    ("Everyone tells the truth", "Toți spun adevărul"),
    ("I am lying", "Mint"),
    ("I am telling the truth", "Spun adevărul"),
    (" says: ", " spune: "),
    (" says ", " spune "),
    (" says,", " spune,"),
    ("Circle", "Cerc"),
    ("Square", "Pătrat"),
    ("Count the diamonds in each step", "Numără romburile la fiecare pas"),
    ("Count the squares at each step", "Numără pătratele la fiecare pas"),
    ("Count the circles", "Numără cercurile"),
    ("Count the triangles", "Numără triunghiurile"),
    ("consecutive letters of the alphabet", "litere consecutive din alfabet"),
    ("letters go backwards through the alphabet", "literele merg invers în alfabet"),
    ("The pattern alternates", "Tiparul alternează"),
    ("repeatedly, so after", "încontinuu, deci după"),
    (" comes ", " urmează "),
    ("the next letter is", "următoarea literă este"),
    ("the next even number is", "următorul număr par este"),
    ("the next odd number is", "următorul număr impar este"),
    ("the next prime is", "următorul număr prim este"),
    ("the next number is", "următorul număr este"),
    ("the next term is", "următorul termen este"),
    ("Alternates ", "Alternanță: "),
    ("After ", "După "),
    (" we add ", " adunăm "),
    (" we subtract ", " scădem "),
    (" we multiply ", " înmulțim cu "),
    (" we divide ", " împărțim la "),
    ("adding 1:", "adunând 1:"),
    ("subtracting 5:", "scăzând 5:"),
    ("doubling:", "dublând:"),
    ("X is bigger than Y", "X este mai mare decât Y"),
    ("Y is bigger than Z", "Y este mai mare decât Z"),
    ("Z is bigger than W", "Z este mai mare decât W"),
    ("W is bigger than V", "W este mai mare decât V"),
    ("X is the biggest", "X este cel mai mare"),
    ("X > Y > Z > W > V", "X > Y > Z > W > V"),
    ("X > Y > Z", "X > Y > Z"),
    ("P > Q > S > R", "P > Q > S > R"),
    ("P > M > N > O", "P > M > N > O"),
    ("D > A > B > C", "D > A > B > C"),
    ("A > B > C", "A > B > C"),
    ("If A → B → C", "Dacă A → B → C"),
    ("C is false", "C este fals"),
    ("so B is false", "atunci B este fals"),
    ("so A is false", "atunci A este fals"),
    ("C is NOT true", "C NU este adevărat"),
    ("Is A true?", "Este A adevărat?"),
    ("Cat → furry → soft → nice to hug", "Pisică → păros → moale → plăcut de îmbrățișat"),
    (" is nice to hug", " e plăcut de îmbrățișat"),
    (" is a cat", " este o pisică"),
    ("Only small fish", "Doar peștii mici"),
]

OPT_SINGLE: dict[str, str] = {
    "Yes": "Da",
    "No": "Nu",
    "Maybe": "Poate",
    "True": "Adevărat",
    "False": "Fals",
    "Monday": "Luni",
    "Tuesday": "Marți",
    "Wednesday": "Miercuri",
    "Thursday": "Joi",
    "Friday": "Vineri",
    "Saturday": "Sâmbătă",
    "Sunday": "Duminică",
    "January": "Ianuarie",
    "February": "Februarie",
    "March": "Martie",
    "April": "Aprilie",
    "May": "Mai",
    "June": "Iunie",
    "July": "Iulie",
    "August": "August",
    "September": "Septembrie",
    "October": "Octombrie",
    "November": "Noiembrie",
    "December": "Decembrie",
    "Triangle": "Triunghi",
    "Square": "Pătrat",
    "Rectangle": "Dreptunghi",
    "Circle": "Cerc",
    "Pentagon": "Pentagon",
    "Hexagon": "Hexagon",
    "Octagon": "Octogon",
    "Cannot tell": "Nu se poate spune",
    "We cannot tell": "Nu putem ști",
    "We don't know": "Nu știm",
    "Only sometimes": "Doar uneori",
    "None of the above": "Niciuna de mai sus",
    "All of the above": "Toate de mai sus",
    "Forma A": "Forma A",
    "Forma B": "Forma B",
    "Forma C": "Forma C",
    "Forma D": "Forma D",
    "Feathers": "Pene",
    "Rocks": "Pietre",
    "They weigh the same": "Cântăresc la fel",
    "It depends": "Depinde",
    "Face A": "Fața A",
    "Face B": "Fața B",
    "Face C": "Fața C",
    "Face D": "Fața D",
    "Face E": "Fața E",
    "Face F": "Fața F",
    "Piece A": "Piesa A",
    "Piece B": "Piesa B",
    "Piece C": "Piesa C",
    "Piece D": "Piesa D",
    "Net A": "Desfășurata A",
    "Net B": "Desfășurata B",
    "Net C": "Desfășurata C",
    "Net D": "Desfășurata D",
    "Rotation 90°": "Rotație 90°",
    "Rotation 180°": "Rotație 180°",
    "Rotation 270°": "Rotație 270°",
    "Reflection horizontal": "Reflexie orizontală",
    "Reflection vertical": "Reflexie verticală",
}


def js_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def apply_phrases(s: str) -> str:
    t = s
    for en, ro in PHRASES_EXTRA + PHRASES:
        if en in t:
            t = t.replace(en, ro)
    return t


def cleanup_mixed_ro_en(t: str) -> str:
    t = re.sub(r" each time([:.])", r" la fiecare pas\1", t)
    t = re.sub(r"(\d+) mai mult decât the last([:.])", r"cu \1 mai mare decât precedentul\2", t)
    t = t.replace("than the last:", "decât precedentul:")
    t = t.replace("than the last.", "decât precedentul.")
    t = re.sub(r"\bThe numbers\b", "Numerele", t)
    t = re.sub(r"\bThe pattern\b", "Tiparul", t)
    t = re.sub(r"\bThese are\b", "Acestea sunt", t)
    t = re.sub(r"\bRow (\d+)\b", r"Rândul \1", t)
    t = re.sub(r"rândul (\d+) is", r"Rândul \1 este", t)
    t = t.replace("Găsește the repeating group", "Găsește grupul care se repetă")
    t = re.sub(r" multiplied by", " înmulțit cu", t)
    t = t.replace("Înmulțește cu the same number each time", "Înmulțește mereu cu același număr")
    t = t.replace("Ce urmează in the symbol pattern", "Ce urmează în șirul de simboluri")
    t = t.replace("going up by 2", "care cresc din 2 în 2")
    t = t.replace("over și over", "mereu la fel")
    t = t.replace("over and over", "mereu la fel")
    t = t.replace("După circle", "După cerc")
    t = t.replace("după circle", "după cerc")
    t = t.replace(" urmează square", " urmează pătratul")
    t = re.sub(r"\bEach row\b", "Fiecare rând", t)
    t = re.sub(r"\bApply the rule\b", "Aplică regula", t)
    t = re.sub(r"\bLook at the differences\b", "Uită-te la diferențe", t)
    t = t.replace("între numbers", "între numere")
    t = re.sub(r"\bincreasing numbers\b", "numere din ce în ce mai mari", t)
    t = t.replace("rândul 3 este multiples", "Rândul 3 conține multiplii")
    t = t.replace("Toți câinii sunt animals", "Toți câinii sunt animale")
    t = t.replace("Spot is a dog", "Spot este un câine")
    t = t.replace("So Spot is an animal", "Deci Spot este un animal")
    t = t.replace("all apples are food", "toate merele sunt mâncare")
    t = t.replace("All cats have tails", "Toate pisicile au coadă")
    t = t.replace("Mustăți este o pisică. Deci Whiskers has a tail", "Mustăți este o pisică. Deci Mustăți are coadă")
    t = t.replace("Whiskers has a tail", "Mustăți are coadă")
    t = t.replace("Toți peștii live in water", "Toți peștii trăiesc în apă")
    t = t.replace("A goldfish is a fish", "Un pește-auriu este un pește")
    t = t.replace("a goldfish lives in water", "un pește-auriu trăiește în apă")
    t = t.replace("Toți peștii live in water", "Toți peștii trăiesc în apă")
    t = t.replace("Ben este older than Cara", "Ben este mai în vârstă decât Cara")
    t = t.replace("Tom este taller than Sam", "Tom este mai înalt decât Sam")
    t = t.replace("Sam este taller than Ben", "Sam este mai înalt decât Ben")
    t = t.replace("Who is the youngest?", "Cine este cel mai tânăr?")
    t = t.replace("Who is the tallest?", "Cine este cel mai înalt?")
    t = t.replace("Cine este the youngest?", "Cine este cel mai tânăr?")
    t = t.replace("Tom este the tallest.", "Tom este cel mai înalt.")
    t = t.replace("Green is the smallest.", "Verde este cel mai mic.")
    t = re.sub(r"\bPosition (\d+) is\b", r"Poziția \1 este", t)
    t = re.sub(r"\bPosition (\d+) starts\b", r"Poziția \1 începe", t)
    t = t.replace("The difference is", "Diferența este")
    t = t.replace("The rule between rows", "Regula între rânduri")
    t = t.replace("look at the first two numbers", "uită-te la primele două numere")
    t = t.replace("Row 1 adds", "Rândul 1 adună")
    t = t.replace("Row 2 adds", "Rândul 2 adună")
    t = t.replace("Row 3 adds", "Rândul 3 adună")
    t = re.sub(r"\bIn a grid,\b", "Într-o grilă,", t)
    t = t.replace("Cât este 3 × 4?", "Cât face 3 × 4?")
    t = t.replace("Cât este 5 × 6?", "Cât face 5 × 6?")
    t = re.sub(r"\b and \b", " și ", t)
    t = re.sub(r"\b or \b", " sau ", t)
    # Spatial / geometry (after „How many” → „Câte …”)
    t = re.sub(r"\bdoes a cube have\?", "are un cub?", t)
    t = re.sub(r"\bdoes a cuboid have\?", "are un cuboid?", t)
    t = re.sub(r"\bdoes a cylinder have\?", "are un cilindru?", t)
    t = re.sub(r"\bdoes a cone have\?", "are un con?", t)
    t = re.sub(r"\bdoes a sphere have\?", "are o sferă?", t)
    t = re.sub(r"\bdoes a square-based pyramid have\?", "are o piramidă cu baza pătrată?", t)
    t = re.sub(r"\bdoes a pentagonal pyramid have\?", "are o piramidă cu baza pentagonală?", t)
    t = re.sub(r"\bdoes a triangular prism have\?", "are o prismă triunghiulară?", t)
    t = re.sub(r"\bGândește-te la a dice\b", "Gândește-te la un zar", t)
    t = re.sub(r"\b— count the fețe plane\b", "— numără fețele plane", t)
    t = re.sub(r"\bCount all the lines\.", "Numără toate muchiile.", t)
    t = re.sub(r"\bCount all the corners\b", "Numără toate colțurile", t)
    t = re.sub(r"\bWhat flat parts does it have\?", "Ce părți plate are?", t)
    t = re.sub(r"\bWhat shape do you see\?", "ce formă vezi?", t)
    t = re.sub(r"\bwhat shape do you see\?", "ce formă vezi?", t)
    t = re.sub(r"\bDacă\s+look at a cube from directly in front, what shape do you see\?", "Dacă te uiți la un cub din față, perpendicular, ce formă vezi?", t)
    t = re.sub(r"\bDacă\s+stack 2 cubes on top of each other, the combined shape most looks like a\.\.\.", "Dacă suprapui 2 cuburi unul peste altul, forma combinată seamănă cel mai mult cu un…", t)
    t = re.sub(r"\bDacă\s+cut a cube exact in half, parallel to one of its fețe, what shape is the cross-section\?", "Dacă tai un cub exact pe jumătate, paralel cu una dintre fețe, ce formă are secțiunea?", t)
    t = re.sub(r"\bDacă\s+cut a cylinder across the middle \(perpendicular to its height\), what shape is the cross-section\?", "Dacă tai un cilindru la mijloc (perpendicular pe înălțime), ce formă are secțiunea?", t)
    t = re.sub(r"\bDacă\s+slice a cube from one edge straight across to the opposite edge \(diagonally through the middle\), the cross-section is a\.\.\.", "Dacă tai un cub de la o muchie la muchia opusă (diagonal prin mijloc), secțiunea este un…", t)
    t = re.sub(r"\bUn cilindru has 2 fețe plane \(the top circle și the bottom circle\)\.", "Un cilindru are 2 fețe plane (cercul de sus și cercul de jos).", t)
    t = re.sub(r"\bAll fețe are identical squares\.", "Toate fețele sunt pătrate identice.", t)
    t = re.sub(r"\bYou see one face of the cube head-on\.", "Vezi o față a cubului frontal.", t)
    t = re.sub(r"\bThe flat bottom of a cone is\.\.\.", "Baza plată a unui con este…", t)
    t = re.sub(r"\bWhat shape is the base of a cone\?", "Ce formă are baza unui con?", t)
    t = re.sub(r"\bFiecare față of the cube becomes one square in the net\.", "Fiecare față a cubului devine un pătrat în desfășurată.", t)
    t = re.sub(r"\bUn cub are 6 fețe, so its net has 6 squares\.", "Un cub are 6 fețe, deci desfășurata are 6 pătrate.", t)
    t = re.sub(r"\bNune are hidden\.", "Niciunul nu e ascuns.", t)
    t = re.sub(r"\bA cuboid has 8 vârfuri, same as a cube\.", "Un cuboid are 8 vârfuri, la fel ca un cub.", t)
    t = re.sub(
        r"Fiecare rând follows the same adding rule, and column 1 goes 1, 3, 5\.",
        "Fiecare rând urmează aceeași regulă de adunare, iar coloana 1 are valorile 1, 3, 5.",
        t,
    )
    t = re.sub(r"\bRândul 1 adds\b", "Rândul 1 adună", t)
    t = re.sub(r"\bRândul 2 adds\b", "Rândul 2 adună", t)
    t = re.sub(r"\bRândul 3 adds\b", "Rândul 3 adună", t)
    t = re.sub(r"\bApply the rule to each number in Rândul 2\.", "Aplică regula fiecărui număr din rândul 2.", t)
    t = re.sub(r"\beach time \(5\+11=16, 16\+11=27\)", "la fiecare pas (5+11=16, 16+11=27)", t)
    t = re.sub(r"\bTry multiplying by 2 and apoi adding 1\.", "Încearcă să înmulțești cu 2 apoi să aduni 1.", t)
    t = re.sub(r"\bTiparul repeats\b", "Tiparul se repetă", t)
    t = re.sub(r"\ba new group with A\.", "un grup nou care începe cu A.", t)
    t = re.sub(r"\bA and B alternate:\b", "A și B se alternează:", t)
    t = re.sub(r"\bStea and heart alternate:\b", "Stea și inima se alternează:", t)
    t = re.sub(r"\bNumerele repeat mereu la fel\.", "Numerele se repetă mereu la fel.", t)
    t = re.sub(r"\b9 is after a subtract step\.", "9 vine după un pas de scădere.", t)
    t = re.sub(r"\b14 provine din scădere 1\.", "14 vine după ce ai scăzut 1.", t)
    t = re.sub(r"\b22 provine din dublare\.", "22 vine după dublare.", t)
    t = re.sub(r"\b70 provine din scădere 5\.", "70 vine după ce ai scăzut 5.", t)
    t = re.sub(r"\bTiparul alternează ×2 and −1\.", "Tiparul alternează ×2 și −1.", t)
    t = re.sub(r"\bTiparul alternează ×3 and −1\.", "Tiparul alternează ×3 și −1.", t)
    t = re.sub(r"\bTiparul alternează ×3 and −5\.", "Tiparul alternează ×3 și −5.", t)
    t = re.sub(r"\bAlternanță: ×2 and −1\.", "Alternanță: ×2 și −1.", t)
    t = re.sub(r"\bAlternanță: ×3 and −1\.", "Alternanță: ×3 și −1.", t)
    t = re.sub(r"\bAlternanță: ×3 and −5\.", "Alternanță: ×3 și −5.", t)
    t = re.sub(r"\bAlternanță: \+1 and ×2\.", "Alternanță: +1 și ×2.", t)
    t = re.sub(r"\bDupă 9 we double:\b", "După 9 dublăm:", t)
    t = re.sub(r"\bDupă 14 we multiply:\b", "După 14 înmulțim:", t)
    t = re.sub(r"\bDupă 70 we multiply:\b", "După 70 înmulțim:", t)
    t = re.sub(r"\bcount the fețe plane\b", "numără fețele plane", t, flags=re.I)
    for eng, ro in (
        ("does a rectangular box (cuboid) have?", "are o cutie dreptunghică (cuboid)?"),
        ("does a triangular pyramid (tetrahedron) have?", "are o piramidă triunghiulară (tetraedru)?"),
        ("does a hexagonal prism have?", "are o prismă hexagonală?"),
        ("does a pentagonal prism have?", "are o prismă pentagonală?"),
        ("does a hexagonal pyramid have?", "are o piramidă hexagonală?"),
        ("does an octagonal prism have?", "are o prismă octogonală?"),
    ):
        t = t.replace(eng, ro)
    t = re.sub(
        r"\bCare 3D shape has 6 square fețe that are all the same size\?",
        "Ce formă 3D are 6 fețe pătrate, toate la fel?",
        t,
    )
    t = re.sub(r"\bUn cub are 6 identical square fețe\.", "Un cub are 6 fețe pătrate identice.", t)
    t = re.sub(r"\bA cuboid \(rectangular box\) has 6 fețe\.", "Un cuboid (cutie dreptunghică) are 6 fețe.", t)
    t = re.sub(
        r"\bIt has 4 triangular fețe\. Count where those triangles meet\.",
        "Are 4 fețe triunghiulare. Numără unde se întâlnesc triunghiurile.",
        t,
    )
    t = re.sub(r"\bA triangular pyramid \(tetrahedron\) has 6 muchii\.", "O piramidă triunghiulară (tetraedru) are 6 muchii.", t)
    t = re.sub(r"\bNumără pointy corners\.", "Numără colțurile ascuțite.", t)
    t = re.sub(r"\bA triangular pyramid has 4 vârfuri\.", "O piramidă triunghiulară are 4 vârfuri.", t)
    t = re.sub(
        r"\bIt has 2 hexagonal ends și rectangular sides\. Un hexagon has 6 sides\.",
        "Are 2 capete hexagonale și fețe dreptunghiulare laterale. Hexagonul are 6 laturi.",
        t,
    )
    t = re.sub(
        r"\bUn hexagonal prism has 8 fețe: 2 hexagons \+ 6 rectangles\.",
        "O prismă hexagonală are 8 fețe: 2 hexagoane + 6 dreptunghiuri.",
        t,
    )
    t = re.sub(
        r"\bYou are slicing straight across, like slicing bread\.",
        "Tai drept, ca și cum ai tăia pâinea.",
        t,
    )
    t = re.sub(
        r"\bCutting a cube parallel to a face gives a square cross-section\.",
        "Tăind cubul paralel cu o față obții o secțiune în formă de pătrat.",
        t,
    )
    t = re.sub(
        r"\b8 small cubes are arranged in a 2×2×2 cube\. Câte small cubes are completely hidden \(no face showing at all\)\?",
        "8 cuburi mici formează un cub 2×2×2. Câte cuburi mici sunt complet ascunse (fără nicio față la vedere)?",
        t,
    )
    t = re.sub(
        r"\bIn a 2×2×2 arrangement, every cube is on the outside\.",
        "În aranjamentul 2×2×2, fiecare cub este la exterior.",
        t,
    )
    t = re.sub(
        r"\bIn a 2×2×2 cube, every small cube is a corner cube with fețe showing\. Niciunul nu e ascuns\.",
        "În cubul 2×2×2, fiecare cub mic este la colț, cu fețe vizibile. Niciunul nu e ascuns.",
        t,
    )
    t = re.sub(
        r"\bYou line up 3 cubes in a row, touching face to face\. Câte small cube fețe are hidden \(touching another cube\)\?",
        "Aliniezi 3 cuburi unul după altul, față în față. Câte fețe ale cuburilor mici sunt ascunse (ating un alt cub)?",
        t,
    )
    t = re.sub(
        r"\bWhere cubes touch, 2 fețe are hidden at each join\.",
        "Unde se ating cuburile, 2 fețe sunt ascunse la fiecare îmbinare.",
        t,
    )
    t = re.sub(
        r"\bThere are 2 joins\. Each join hides 2 fețe\. Total hidden fețe: 2 × 2 = 4\.",
        "Sunt 2 îmbinări. Fiecare ascunde 2 fețe. Total fețe ascunse: 2 × 2 = 4.",
        t,
    )
    t = re.sub(r"\b4 muchii around the base \+ 4 going up to the top point\.", "4 muchii la bază + 4 spre vârf.", t)
    t = re.sub(
        r"\bA square-based pyramid has 8 muchii: 4 base \+ 4 lateral\.",
        "O piramidă cu baza pătrată are 8 muchii: 4 la bază + 4 laterale.",
        t,
    )
    t = re.sub(
        r"\bYou are slicing it like cutting a log straight across\.",
        "Tai ca pe un butuc, perpendicular pe axă.",
        t,
    )
    t = re.sub(
        r"\bCutting a cylinder straight across gives a circle\.",
        "Tăind cilindrul perpendicular pe înălțime obții un cerc.",
        t,
    )
    t = re.sub(
        r"\b27 small cubes make a 3×3×3 cube\. Câte small cubes have cel puțin one face showing on the outside\?",
        "27 cuburi mici formează un cub 3×3×3. Câte cuburi mici au cel puțin o față vizibilă la exterior?",
        t,
    )
    t = re.sub(
        r"\bOnly the cube in the very centre is fully hidden\.",
        "Doar cubul din centrul exact este complet ascuns.",
        t,
    )
    t = re.sub(
        r"\bOnly 1 cube \(the centre\) is hidden\. 27 − 1 = 26 cubes have cel puțin one face showing\.",
        "Doar 1 cub (cel din centru) e ascuns. 27 − 1 = 26 cuburi au cel puțin o față vizibilă.",
        t,
    )
    t = re.sub(
        r"\b2 pentagon ends \+ rectangular sides\. Un pentagon has 5 sides\.",
        "2 capete pentagonale + fețe dreptunghiulare. Pentagonul are 5 laturi.",
        t,
    )
    t = re.sub(
        r"\bUn pentagonal prism has 7 fețe: 2 pentagons \+ 5 rectangles\.",
        "O prismă pentagonală are 7 fețe: 2 pentagoane + 5 dreptunghiuri.",
        t,
    )
    t = re.sub(
        r"\bA square-based pyramid has 5 vârfuri: 4 at the base \+ 1 apex\.",
        "O piramidă cu baza pătrată are 5 vârfuri: 4 la bază + 1 vârf.",
        t,
    )
    t = re.sub(
        r"\b4 cubes are arranged in a 2×2 flat square \(one layer\)\. Câte fețe are visible on the top\?",
        "4 cuburi sunt așezate într-un pătrat 2×2, un singur strat. Câte fețe se văd de sus?",
        t,
    )
    t = re.sub(r"\bEach cube shows 1 face on top\.", "Fiecare cub arată 1 față în sus.", t)
    t = re.sub(r"\bEach of the 4 cubes shows 1 top face\. Total = 4 top fețe\.", "Fiecare din cele 4 cuburi arată 1 față sus. Total = 4 fețe sus.", t)
    t = re.sub(
        r"\b1 hexagonal base \+ triangular sides\. Un hexagon has 6 sides\.",
        "1 bază hexagonală + fețe triunghiulare laterale. Hexagonul are 6 laturi.",
        t,
    )
    t = re.sub(
        r"\bUn hexagonal pyramid has 7 fețe: 1 hexagon \+ 6 triangles\.",
        "O piramidă hexagonală are 7 fețe: 1 hexagon + 6 triunghiuri.",
        t,
    )
    t = re.sub(r"\bThe cut goes diagonally but rămâns flat\.", "Tăietura e diagonală dar rămâne plană.", t)
    t = re.sub(
        r"\bSlicing from one edge to the opposite edge gives a rectangular cross-section\.",
        "Tăind de la o muchie la cea opusă obții o secțiune dreptunghiulară.",
        t,
    )
    t = re.sub(r"\bAll of its fețe are triangles\.", "Toate fețele sale sunt triunghiuri.", t)
    t = re.sub(r"\bA triangular pyramid has 4 triangular fețe\.", "O piramidă triunghiulară are 4 fețe triunghiulare.", t)
    t = re.sub(
        r"\b8 cubes are arranged in a 2×2×2 cube\. Câte small cube fețe are visible from the outside of the big cube\?",
        "8 cuburi formează un cub 2×2×2. Câte fețe ale cuburilor mici se văd la exteriorul cubului mare?",
        t,
    )
    t = re.sub(
        r"\bThe big cube has 6 fețe, each made of 4 small fețe\.",
        "Cubul mare are 6 fețe, fiecare formată din 4 fețe mici.",
        t,
    )
    t = re.sub(
        r"\b6 big fețe × 4 small fețe each = 24 visible small fețe\.",
        "6 fețe mari × 4 fețe mici fiecare = 24 fețe mici vizibile.",
        t,
    )
    t = re.sub(
        r"\bUn pentagonal pyramid has 6 vârfuri: 5 base \+ 1 apex\.",
        "O piramidă pentagonală are 6 vârfuri: 5 la bază + 1 vârf.",
        t,
    )
    t = re.sub(r"\b6 on top \+ 6 on bottom \+ 6 connecting them\.", "6 sus + 6 jos + 6 care le leagă.", t)
    t = re.sub(
        r"\bUn hexagonal prism has 18 muchii: 6 \+ 6 \+ 6\.",
        "O prismă hexagonală are 18 muchii: 6 + 6 + 6.",
        t,
    )
    t = re.sub(
        r"\bYou remove one corner cube from a 2×2×2 arrangement\. Câte small cubes remain\?",
        "Scoți un cub de la colț dintr-un aranjament 2×2×2. Câte cuburi mici rămân?",
        t,
    )
    t = re.sub(r"\bSteat with 8 small cubes și take 1 away\.", "Ai 8 cuburi mici și scoți 1.", t)
    t = re.sub(r"\b8 − 1 = 7 cubes remain\.", "8 − 1 = 7 cuburi rămase.", t)
    t = re.sub(
        r"\b2 octagon ends \+ rectangular sides\. An octagon has 8 sides\.",
        "2 capete octogonale + fețe dreptunghiulare. Octogonul are 8 laturi.",
        t,
    )
    t = re.sub(
        r"\bAn octagonal prism has 10 fețe: 2 octagons \+ 8 rectangles\.",
        "O prismă octogonală are 10 fețe: 2 octogoane + 8 dreptunghiuri.",
        t,
    )
    t = re.sub(r"\bO sferă is like a ball\.", "O sferă e ca o minge.", t)
    t = re.sub(r"\bO sferă has 0 fețe plane\. It is entirely curved\.", "O sferă are 0 fețe plane. E complet rotunjită.", t)
    t = re.sub(r"\bGândește-te la an ice cream cone\. It has one flat base\.", "Gândește-te la un cornet de înghețată. Are o singură bază plată.", t)
    t = re.sub(
        r"\bUn con has 1 flat face \(its circular base\)\.",
        "Un con are 1 față plată (baza circulară).",
        t,
    )
    t = re.sub(r"\bA cuboid is like a cube but with rectangular fețe\. Numără lines\.", "Un cuboid e ca un cub, dar cu fețe dreptunghiulare. Numără muchiile.", t)
    t = re.sub(r"\bA cuboid has 12 muchii, same as a cube\.", "Un cuboid are 12 muchii, la fel ca un cub.", t)
    t = re.sub(r"\bIt has a square base și triangular sides\.", "Are bază pătrată și fețe triunghiulare laterale.", t)
    t = re.sub(
        r"\bA square-based pyramid has 5 fețe: 1 square base și 4 triangles\.",
        "O piramidă cu baza pătrată are 5 fețe: 1 bază pătrată și 4 triunghiuri.",
        t,
    )
    t = re.sub(
        r"\bIn a 3×3×3 cube made of 27 small cubes, how many small cubes are completely hidden \(no face showing\)\?",
        "Într-un cub 3×3×3 din 27 cuburi mici, câte cuburi sunt complet ascunse (fără față la vedere)?",
        t,
    )
    t = re.sub(r"\bOnly the very centre cube has no face on the outside\.", "Doar cubul din centrul exact nu are față spre exterior.", t)
    t = re.sub(r"\bOnly the 1 cube in the exact centre is completely hidden\.", "Doar 1 cub, cel din centrul exact, e complet ascuns.", t)
    t = re.sub(
        r"\bIn a 3×3×3 cube, how many small cubes have exact 3 fețe showing\?",
        "Într-un cub 3×3×3, câte cuburi mici au exact 3 fețe vizibile?",
        t,
    )
    t = re.sub(
        r"\bCorner cubes have 3 fețe showing\. Câte corners are un cub\?",
        "Cuburile de la colț au 3 fețe vizibile. Câte colțuri are un cub?",
        t,
    )
    t = re.sub(r"\bUn cub are 8 corners\. Each corner cube has exact 3 fețe showing\.", "Un cub are 8 colțuri. Fiecare cub de colț are exact 3 fețe vizibile.", t)
    t = re.sub(
        r"\bDacă\s+glue 2 cubes together on one face, how many total fețe does the new shape have\?",
        "Dacă lipești 2 cuburi pe o față, câte fețe are forma nouă în total?",
        t,
    )
    t = re.sub(
        r"\bEach cube has 6 fețe, but 2 fețe are hidden where they are glued\.",
        "Fiecare cub are 6 fețe, dar 2 sunt ascunse unde sunt lipite.",
        t,
    )
    t = re.sub(
        r"\bIn a 3×3×3 cube, how many small cubes have exact 2 fețe showing\?",
        "Într-un cub 3×3×3, câte cuburi mici au exact 2 fețe vizibile?",
        t,
    )
    t = re.sub(
        r"\bEdge cubes \(not corners\) have 2 fețe showing\. Câte muchii are un cub\?",
        "Cuburile de pe muchii (nu colțurile) au 2 fețe vizibile. Câte muchii are un cub?",
        t,
    )
    t = re.sub(
        r"\bUn cub are 12 muchii\. Each edge has 1 non-corner cube\. 12 × 1 = 12 cubes with 2 fețe\.",
        "Un cub are 12 muchii. Pe fiecare muchie e 1 cub care nu e colț. 12 × 1 = 12 cuburi cu 2 fețe.",
        t,
    )
    t = re.sub(
        r"\bIn a 3×3×3 cube, how many small cubes have exact 1 face showing\?",
        "Într-un cub 3×3×3, câte cuburi mici au exact 1 față vizibilă?",
        t,
    )
    t = re.sub(
        r"\bCentre-of-face cubes have 1 face showing\. Un cub are 6 fețe\.",
        "Cuburile din centrul fiecărei fețe au 1 față vizibilă. Un cub are 6 fețe.",
        t,
    )
    t = re.sub(
        r"\bEach of the 6 fețe has 1 centre cube\. 6 × 1 = 6 cubes with exact 1 face\.",
        "Pe fiecare din cele 6 fețe e 1 cub central. 6 × 1 = 6 cuburi cu exact 1 față.",
        t,
    )
    t = re.sub(
        r"\bDacă\s+glue 3 cubes in a row \(face-to-face\), how many fețe does the new shape have\?",
        "Dacă lipești 3 cuburi în șir (față în față), câte fețe are forma nouă?",
        t,
    )
    t = re.sub(
        r"\b3 cubes = 18 total fețe\. There are 2 joins, each hiding 2 fețe\.",
        "3 cuburi = 18 fețe în total. Sunt 2 îmbinări, fiecare ascunde 2 fețe.",
        t,
    )
    t = re.sub(
        r"\b3 × 6 = 18 fețe\. 2 joins × 2 hidden fețe = 4 hidden\. 18 − 4 = 14\.",
        "3 × 6 = 18 fețe. 2 îmbinări × 2 fețe ascunse = 4 ascunse. 18 − 4 = 14.",
        t,
    )
    t = re.sub(
        r"\bDacă\s+paint a 3×3×3 cube și take it apart, how many small cubes have NO paint at all\?",
        "Dacă vopsești un cub 3×3×3 și îl desfaci în cuburi mici, câte nu au deloc vopsea?",
        t,
    )
    t = re.sub(
        r"\bOnly the cube in the very centre has no painted face\.",
        "Doar cubul din centrul exact nu are față vopsită.",
        t,
    )
    t = re.sub(
        r"\bOnly the 1 centre cube is not touching the outside, so it has no paint\.",
        "Doar cubul din centru nu atinge exteriorul, deci nu are vopsea.",
        t,
    )
    t = re.sub(
        r"\bDacă\s+glue 2 cubes side by side și apoi put a third cube on top of one of them \(L-shape\), how many fețe does the shape have\?",
        "Dacă lipești 2 cuburi alături și pui al treilea deasupra unuia (formă de L), câte fețe are forma?",
        t,
    )
    t = re.sub(
        r"\bSteat: 2 cubes glued = 10 fețe\. Adding a third on top hides 2 more fețe\.",
        "2 cuburi lipite = 10 fețe. Al treilea deasupra ascunde încă 2 fețe.",
        t,
    )
    t = re.sub(
        r"\b2 cubes glued = 10 fețe\. Adding the 3rd cube: 10 \+ 6 − 2 = 14 fețe\.",
        "2 cuburi lipite = 10 fețe. Al treilea cub: 10 + 6 − 2 = 14 fețe.",
        t,
    )
    t = re.sub(
        r"\bDacă\s+glue 6 cubes together in a 2×3×1 flat rectangle, how many fețe does the shape have\?",
        "Dacă lipești 6 cuburi într-un dreptunghi plat 2×3×1, câte fețe are forma?",
        t,
    )
    t = re.sub(
        r"\b6 cubes = 36 fețe\. Numără internal joins that hide fețe\.",
        "6 cuburi = 36 fețe. Numără îmbinările din interior care ascund fețe.",
        t,
    )
    t = re.sub(
        r"\b6 × 6 = 36 fețe\. There are 7 internal joins \(4 horizontal \+ 3 vertical\), each hiding 2 fețe: 36 − 14 = 22\.",
        "6 × 6 = 36 fețe. Sunt 7 îmbinări interioare (4 orizontale + 3 verticale), fiecare ascunde 2 fețe: 36 − 14 = 22.",
        t,
    )
    t = re.sub(r"\bCâte does each friend get\?", "Câte primește fiecare prieten?", t)
    t = re.sub(r"\bCâte does each child get\?", "Câte primește fiecare copil?", t)
    t = re.sub(r"\bCâte does he have now\?", "Câte are acum?", t)
    t = re.sub(r"\bÎntr-o cursă, you overtake the person in 2nd place\. What place are you now in\?", "Într-o cursă, îl depășești pe cel de pe locul 2. Pe ce loc ești acum?", t)
    t = re.sub(r"\bDacă\s+pass the person in 2nd, you take their position\.", "Dacă îl depășești pe cel de pe locul 2, îi iei locul.", t)
    t = re.sub(r"\bYou take 2nd place\. You passed the 2nd-place runner, not the 1st\.", "Ești pe locul 2. L-ai depășit pe cel de pe 2, nu pe primul.", t)
    t = re.sub(r"\bCare weighs more: 1 kg of feathers sau 1 kg of rocks\?", "Ce cântărește mai mult: 1 kg de pene sau 1 kg de pietre?", t)
    t = re.sub(r"\bLook at the weight — both are 1 kg\.", "Uită-te la greutate — ambele sunt 1 kg.", t)
    t = re.sub(r"\bThey weigh the same", "Cântăresc la fel", t)
    t = re.sub(r"\bIt depends", "Depinde", t)
    t = re.sub(r"\bBoth weigh 1 kg, so they weigh the same!", "Ambele cântăresc 1 kg, deci la fel!", t)
    t = re.sub(r"\bCâte sides does a circle have\?", "Câte laturi are un cerc?", t)
    t = re.sub(r"\bA side is a straight edge\. Does a circle have any straight muchii\?", "O latură e muchie dreaptă. Are cercul muchii drepte?", t)
    t = re.sub(r"\bUn cerc has 0 straight sides\.", "Un cerc are 0 laturi drepte.", t)
    t = re.sub(r"\bThere are 7 days in a week\. Câte days are in 3 weeks\?", "O săptămână are 7 zile. Câte zile sunt în 3 săptămâni?", t)
    t = re.sub(r"\bMultiply days pe săptămână by weeks\.", "Înmulțește zilele pe săptămână cu numărul de săptămâni.", t)
    t = re.sub(r"\b3 × 7 = 21 days\.", "3 × 7 = 21 zile.", t)
    t = re.sub(r"\bUn melc moves 3 cm pe minut\. How far does it go in 10 minutes\?", "Un melc merge 3 cm pe minut. Cât parcurge în 10 minute?", t)
    t = re.sub(r"\bMultiply speed by time\.", "Înmulțește viteza cu timpul.", t)
    t = re.sub(r"\b3 × 10 = 30 cm\.", "3 × 10 = 30 cm.", t)
    t = re.sub(r"\b12 ÷ 3 = 4 cookies each\.", "12 ÷ 3 = 4 fursecuri fiecăruia.", t)
    t = re.sub(r"\bAdună the new toys to what he had\.", "Adună jucăriile noi la ce avea.", t)
    t = re.sub(r"\b8 \+ 3 = 11 toys\.", "8 + 3 = 11 jucării.", t)
    t = re.sub(r"\b24 ÷ 6 = 4 sweets each\.", "24 ÷ 6 = 4 bomboane fiecăruia.", t)
    t = re.sub(r"\b1st\b", "locul 1", t)
    t = re.sub(r"\b2nd\b", "locul 2", t)
    t = re.sub(r"\b3rd\b", "locul 3", t)
    t = re.sub(r"\b4th\b", "locul 4", t)
    t = re.sub(r"4 corners on the base \+ 1 point at the top\.", "4 colțuri la bază + 1 punct în vârf.", t)
    t = re.sub(r"5 corners on the base \+ 1 point at the top\.", "5 colțuri la bază + 1 punct în vârf.", t)
    t = re.sub(r"\bDacă\s+paint\b", "Dacă vopsești", t)
    t = re.sub(r"\bDacă\s+cut\b", "Dacă tai", t)
    t = re.sub(r"\bDacă\s+glue\b", "Dacă lipești", t)
    t = re.sub(
        r"\ball fețe of a 2×2×2 cube și take it apart, how many small cubes have exact 3 painted fețe\?",
        "toate fețele unui cub 2×2×2 și îl desfaci, câte cuburi mici au exact 3 fețe vopsite?",
        t,
    )
    t = re.sub(r"\bIn a 2×2×2 cube, every small cube is in a corner\.", "În cubul 2×2×2, fiecare cub mic e la colț.", t)
    t = re.sub(
        r"\bAll 8 cubes in a 2×2×2 are corner cubes, so all 8 have exact 3 painted fețe\.",
        "Toate cele 8 cuburi din 2×2×2 sunt la colț, deci toate 8 au exact 3 fețe vopsite.",
        t,
    )
    t = re.sub(
        r"\bWhen you fold a cross-shaped net \(like a plus sign made of 6 squares\), what 3D shape do you get\?",
        "Când pliezi o desfășurată în cruce (ca un plus din 6 pătrate), ce formă 3D obții?",
        t,
    )
    t = re.sub(
        r"\bThe cross-shaped net is one of the most common nets for a very familiar shape\.",
        "Desfășurata în cruce e una dintre cele mai uzuale pentru o formă foarte cunoscută.",
        t,
    )
    t = re.sub(r"\bA cross-shaped net of 6 squares folds into a cube\.", "O desfășurată în cruce din 6 pătrate se pliază într-un cub.", t)
    t = re.sub(
        r"\ba cube with one straight cut, what is the maximum number of pieces you get\?",
        "un cub cu o singură tăietură dreaptă, câte piese maxim obții?",
        t,
    )
    t = re.sub(r"\bOne cut can only split something into 2 parts\.", "O singură tăietură împarte în cel mult 2 părți.", t)
    t = re.sub(
        r"\bOne straight cut through any shape makes cel mult 2 pieces\.",
        "O tăietură dreaptă prin orice formă dă cel mult 2 piese.",
        t,
    )
    t = re.sub(
        r"\bA net for a square-based pyramid is made of how many shapes\?",
        "O desfășurată pentru o piramidă cu baza pătrată e formată din câte forme?",
        t,
    )
    t = re.sub(r"\bNumără base și the triangular sides\.", "Numără baza și fețele triunghiulare.", t)
    t = re.sub(
        r"\bThe net has 5 shapes: 1 square \(base\) \+ 4 triangles \(sides\)\.",
        "Desfășurata are 5 forme: 1 pătrat (bază) + 4 triunghiuri (laturi).",
        t,
    )
    t = re.sub(
        r"\bIn a 4×4×4 cube \(64 small cubes\), how many small cubes are on the very outside\?",
        "Într-un cub 4×4×4 (64 cuburi mici), câte cuburi mici sunt la suprafață?",
        t,
    )
    t = re.sub(
        r"\bTotal cubes minus the hidden interior cubes\. The interior is 2×2×2\.",
        "Total cuburi minus cele din interior. Interiorul e 2×2×2.",
        t,
    )
    t = re.sub(
        r"\bInterior = 2×2×2 = 8 cubes\. Outside = 64 − 8 = 56\.",
        "Interior = 2×2×2 = 8 cuburi. Exterior = 64 − 8 = 56.",
        t,
    )
    t = re.sub(
        r"\ba 2×2×2 cube și break it into 8 small cubes, how many have exact 3 painted fețe\?",
        "un cub 2×2×2 și îl împarți în 8 cuburi mici, câte au exact 3 fețe vopsite?",
        t,
    )
    t = re.sub(r"\bEvery cube in a 2×2×2 is a corner cube\.", "În 2×2×2, fiecare cub e la colț.", t)
    t = re.sub(
        r"\bAll 8 are corner cubes, so all 8 have exact 3 painted fețe\.",
        "Toate 8 sunt la colț, deci toate au exact 3 fețe vopsite.",
        t,
    )
    t = re.sub(
        r"\bLooking at a cube from one corner, cel mult how many fețe can you see at the same time\?",
        "Privind un cub dinspre un colț, câte fețe vezi cel mult în același timp?",
        t,
    )
    t = re.sub(
        r"\bLooking at a corner, you can see the fețe that meet at that corner\.",
        "Dinspre un colț vezi fețele care se întâlnesc acolo.",
        t,
    )
    t = re.sub(
        r"\bFrom one corner of a cube you can see cel mult 3 fețe\.",
        "Dintr-un colț al cubului vezi cel mult 3 fețe.",
        t,
    )
    t = re.sub(
        r"\bIn a 3×3×3 cube, the total number of small cube fețe visible from the outside is\.\.\.\?",
        "Într-un cub 3×3×3, numărul total de fețe mici vizibile la exterior este…?",
        t,
    )
    t = re.sub(
        r"\bThe big cube has 6 fețe, each made up of 9 small fețe\.",
        "Cubul mare are 6 fețe, fiecare din 9 fețe mici.",
        t,
    )
    t = re.sub(
        r"\b6 large fețe × 9 small fețe each = 54 visible small fețe\.",
        "6 fețe mari × 9 fețe mici = 54 fețe mici vizibile.",
        t,
    )
    t = re.sub(
        r"\bIn a 3×3×3 cube, how many small cubes share a face with the centre cube\?",
        "Într-un cub 3×3×3, câte cuburi mici au o față comună cu cubul din centru?",
        t,
    )
    t = re.sub(
        r"\bThe centre cube is touched by cubes above, below, left, right, front, and back\.",
        "Cubul central e atins de cuburi sus, jos, stânga, dreapta, față, spate.",
        t,
    )
    t = re.sub(
        r"\bThe centre cube is touched on 6 sides: up, down, left, right, front, back\.",
        "Cubul central e atins din 6 direcții: sus, jos, stânga, dreapta, față, spate.",
        t,
    )
    t = re.sub(
        r"\bUn magazin vinde apples for £2 each\. How much do 5 apples cost\?",
        "Un magazin vinde mere cu £2 bucata. Cât costă 5 mere?",
        t,
    )
    t = re.sub(r"\bMultiply the price by the number of apples\.", "Înmulțește prețul cu numărul de mere.", t)
    t = re.sub(r"\bCâte months of the year have 28 days\?", "Câte luni din an au 28 de zile?", t)
    t = re.sub(
        r"\bThink carefully — do only some months reach 28 days\?",
        "Gândește-te bine — doar unele luni au fix 28 de zile?",
        t,
    )
    t = re.sub(
        r"\bAll 12 months have cel puțin 28 days!",
        "Toate cele 12 luni au cel puțin 28 de zile!",
        t,
    )
    t = re.sub(r"\bBoth weigh 1 kg, so they weigh the same!", "Ambele cântăresc 1 kg, deci la fel!", t)
    t = re.sub(
        r"\bAi £5\.00 și spend £1\.50\. How much do you have left\?",
        "Ai £5,00 și cheltuiești £1,50. Cât îți rămâne?",
        t,
    )
    t = re.sub(r"\bScade what you spent\.", "Scade ce ai cheltuit.", t)
    t = re.sub(
        r"\bA bike travels 12 km pe oră\. How far does it go in 3 hours\?",
        "O bicicletă merge 12 km pe oră. Cât parcurge în 3 ore?",
        t,
    )
    t = re.sub(r"\b12 × 3 = 36 km\.", "12 × 3 = 36 km.", t)
    t = re.sub(
        r"\b3 friends find £30\. They share it equally\. How much does each get\?",
        "3 prieteni găsesc £30. Îi împart egal. Cât primește fiecare?",
        t,
    )
    t = re.sub(r"\bDivide £30 by 3\.", "Împarte £30 la 3.", t)
    t = re.sub(r"\b£30 ÷ 3 = £10 each\.", "£30 ÷ 3 = £10 fiecare.", t)
    t = re.sub(
        r"\bCumperi 3 items at £4\.50 each\. How much do you spend in total\?",
        "Cumperi 3 produse la £4,50 bucata. Cât plătești în total?",
        t,
    )
    t = re.sub(r"\bMultiply price by quantity\.", "Înmulțește prețul cu cantitatea.", t)
    return t


def translate_option(o: str) -> str:
    o = o.strip()
    if o in OPT_SINGLE:
        return OPT_SINGLE[o]
    if re.fullmatch(r"[\d\s.,$€£+\-×÷=]+", o):
        return o
    if all(c in "◇□○△▲▼■●◆♠♦♥★☆♣ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" for c in o):
        return o
    t = apply_phrases(o)
    if t != o:
        return t
    return o


def translate_block(s: str) -> str:
    return cleanup_mixed_ro_en(apply_phrases(s))


def emit_register(
    path: Path,
    tips: dict | None,
    exercises: list[dict],
    manual_by_id: dict | None = None,
) -> None:
    lines = ['I18N.register("ro", {']
    if tips:
        lines.append("  tips: {")
        for title, (ro_title, ro_body) in tips.items():
            lines.append(
                f'    {json.dumps(title, ensure_ascii=False)}: {json.dumps([ro_title, ro_body], ensure_ascii=False)},'
            )
        lines.append("  },")
    lines.append("  q: {")
    for e in exercises:
        if manual_by_id and e["id"] in manual_by_id:
            q, h, opts, expl = manual_by_id[e["id"]]
        else:
            q = translate_block(e["question"])
            h = translate_block(e["hint"])
            expl = translate_block(e["explanation"])
            opts = [translate_option(x) for x in e["options"]]
        entry = json.dumps([q, h, opts, expl], ensure_ascii=False)
        lines.append(f'    {json.dumps(e["id"], ensure_ascii=False)}: {entry},')
    lines.append("  }")
    lines.append("});")
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    ex811 = json.loads((SCRIPTS / "extracted-811.json").read_text(encoding="utf-8"))
    manual_811 = {**_load_tlr811_ro(), **_load_tmp811_ro()}
    emit_register(ROOT / "lang" / "ro-train-8-11.js", TIPS_8_11, ex811, manual_by_id=manual_811)
    print("Wrote ro-train-8-11.js", len(ex811))

    ex_adult = json.loads((SCRIPTS / "extracted-adult.json").read_text(encoding="utf-8"))
    emit_register(ROOT / "lang" / "ro-train-adult.js", None, ex_adult)
    print("Wrote ro-train-adult.js", len(ex_adult))


if __name__ == "__main__":
    main()
