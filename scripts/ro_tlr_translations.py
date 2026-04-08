# -*- coding: utf-8 -*-
"""Romanian TLR strings for ro-train-adult.js (from fr-train-adult meaning)."""
from __future__ import annotations

TLR: dict[str, list] = {}


def add(sec: int, n: int, q: str, h: str, opts: list[str], exp: str) -> None:
    TLR[f"TLR{sec}_{n:02d}"] = [q, h, opts, exp]


# --- TLR1 syllogisms ---
add(1, 1, "Toți medicii sunt profesioniști. Dr. Adams este medic. Ce puteți concluziona?",
    "Dacă toți X sunt Y și Z este X, atunci Z trebuie să fie Y.",
    ["Dr. Adams este profesionist", "Dr. Adams nu este profesionist", "Unii profesioniști nu sunt medici", "Toți profesioniștii sunt medici"],
    "Toți medicii sunt profesioniști, iar Dr. Adams este medic, deci Dr. Adams este profesionist. Silogism afirmativ universal direct.")

add(1, 2, "Toți leii sunt animale. Simba este leu. Ce puteți concluziona?",
    "Dacă fiecare membru al grupei X aparține grupei Y, iar Simba este în X…",
    ["Simba este animal", "Toate animalele sunt lei", "Simba nu este animal", "Unele animale nu sunt lei"],
    "Toți leii sunt animale, iar Simba este leu, deci Simba este animal.")

add(1, 3, "Toate portocalele sunt fructe. Obiectul acesta este portocală. Ce puteți concluziona?",
    "Dacă fiecare portocală este fruct și obiectul este portocală…",
    ["Obiectul este fruct", "Toate fructele sunt portocale", "Obiectul este legumă", "Obiectul poate să nu fie fruct"],
    "Toate portocalele sunt fructe, iar obiectul este portocală, deci este fruct.")

add(1, 4, "Toate mașinile sunt vehicule. O BMW este mașină. Ce puteți concluziona?",
    "Mașinile sunt o submulțime a vehiculelor. Unde se plasează BMW?",
    ["BMW este vehicul", "Toate vehiculele sunt mașini", "BMW nu este vehicul", "Unele vehicule nu sunt mașini"],
    "Toate mașinile sunt vehicule. BMW este mașină, deci BMW este vehicul.")

add(1, 5, "Nicio pasăre nu este insectă. O mierlă este pasăre. Ce puteți concluziona?",
    "Dacă niciun membru al X nu este în Y, iar mierla este în X…",
    ["Mierla nu este insectă", "Mierla este insectă", "Unele insecte sunt păsări", "Toate mierlele sunt insecte"],
    "Nicio pasăre nu este insectă. Mierla este pasăre, deci nu poate fi insectă.")

add(1, 6, "Toată gheața este rece. Cubul de pe masă este din gheață. Ce puteți concluziona?",
    "Dacă tot ce este gheață este rece, iar cubul este gheață…",
    ["Cubul este rece", "Cubul este cald", "Nu totă gheața este rece", "Masa este rece"],
    "Toată gheața este rece, iar cubul este gheață, deci cubul este rece.")

add(1, 7, "Toate viorile sunt instrumente. Un Stradivarius este vioară. Ce puteți concluziona?",
    "Viorile fac parte din mulțimea instrumentelor. Un Stradivarius aparține…",
    ["Stradivarius este instrument", "Toate instrumentele sunt viori", "Stradivarius nu este instrument", "Unele instrumente nu pot fi cântate"],
    "Toate viorile sunt instrumente, iar Stradivarius este vioară, deci este instrument.")

add(1, 8, "Toți trandafirii sunt plante. Exemplarul acesta este trandafir. Ce puteți concluziona?",
    "Trandafirii sunt submulțime a plantelor. Exemplarul este trandafir, deci…",
    ["Exemplarul este plantă", "Toate plantele sunt trandafiri", "Exemplarul nu este plantă", "Trandafirii nu sunt plante"],
    "Toți trandafirii sunt plante, iar exemplarul este trandafir, deci este plantă.")

add(1, 9, "Tot aurul este metalic. Inelul acesta este din aur. Ce puteți concluziona?",
    "Aurul este întotdeauna metalic. Inelul este din aur, deci…",
    ["Inelul este metalic", "Tot ce este metalic este din aur", "Inelul nu este metalic", "Aurul este uneori nemetalic"],
    "Tot aurul este metalic, iar inelul este din aur, deci inelul este metalic.")

add(1, 10, "Toate râurile conțin apă curgătoare. Amazonul este râu. Ce puteți concluziona?",
    "Dacă fiecare râu are apă curgătoare, iar Amazonul este râu…",
    ["Amazonul conține apă curgătoare", "Toată apa curgătoare este râu", "Amazonul nu conține apă", "Unele râuri sunt secate"],
    "Toate râurile conțin apă curgătoare, iar Amazonul este râu, deci Amazonul conține apă curgătoare.")

add(1, 11, "Toate romanele sunt cărți. Toate cărțile au pagini. Ce puteți concluziona?",
    "Leagă relațiile: romane → cărți → pagini.",
    ["Toate romanele au pagini", "Toate paginile sunt exclusive în romane", "Unele cărți nu sunt romane", "Romanele nu au pagini"],
    "Toate romanele sunt cărți, toate cărțile au pagini, deci prin tranzitivitate toate romanele au pagini.")

add(1, 12, "Toți bucătarii știu să gătească. Pierre este bucătar. Ce puteți concluziona?",
    "Dacă fiecare bucătar știe să gătească, iar Pierre este bucătar…",
    ["Pierre știe să gătească", "Oricine știe să gătească este bucătar", "Pierre nu știe să gătească", "Unii bucătari nu știu să gătească"],
    "Toți bucătarii știu să gătească, iar Pierre este bucătar, deci Pierre știe să gătească.")

add(1, 13, "Toți vulturii sunt păsări. Toate păsările au pene. Ce puteți concluziona?",
    "Leagă mulțimile: vulturi ⊂ păsări ⊂ creaturi cu pene.",
    ["Toți vulturii au pene", "Toate creaturile cu pene sunt vulturi", "Vulturii nu au pene", "Unele păsări nu sunt vulturi"],
    "Toți vulturii sunt păsări, toate păsările au pene, deci toți vulturii au pene.")

add(1, 14, "Toate planetele orbitează o stea. Saturn este planetă. Ce puteți concluziona?",
    "Planetele orbitează stele. Saturn este planetă, deci…",
    ["Saturn orbitează o stea", "Tot ce orbitează o stea este planetă", "Saturn nu orbitează o stea", "Steaua orbitează Saturnul"],
    "Toate planetele orbitează o stea, Saturn este planetă, deci Saturn orbitează o stea.")

add(1, 15, "Toate balenele sunt mamifere. Balena albastră este balenă. Ce puteți concluziona?",
    "Balenele sunt submulțime a mamiferelor. Balena albastră este balenă, deci…",
    ["Balena albastră este mamifer", "Toate mamiferele sunt balene", "Balena albastră este pește", "Unele balene nu sunt mamifere"],
    "Toate balenele sunt mamifere, balena albastră este balenă, deci este mamifer.")

add(1, 16, "Niciun ierbivor nu mănâncă carne. Iepurele este ierbivor. Ce puteți concluziona?",
    "Dacă niciun ierbivor nu mănâncă carne, iar iepurele este ierbivor…",
    ["Iepurele nu mănâncă carne", "Iepurele mănâncă carne", "Unii ierbivori mănâncă carne", "Toți carnivorii sunt iepuri"],
    "Ierbivorii nu mănâncă carne, iepurele este ierbivor, deci nu mănâncă carne.")

add(1, 17, "Toți cățeii sunt câini. Toți câinii sunt canide. Ce puteți concluziona?",
    "Lanț: căței ⊂ câini ⊂ canide.",
    ["Toți cățeii sunt canizi", "Toți canizii sunt căței", "Cățeii nu sunt canizi", "Unii câini nu sunt canide"],
    "Toți cățeii sunt câini, toți câinii sunt canide, deci toți cățeii sunt canizi.")

add(1, 18, "Toți profesorii lucrează în educație. Domnul Brown este profesor. Ce puteți concluziona?",
    "Dacă fiecare profesor lucrează în educație, iar domnul Brown este profesor…",
    ["Domnul Brown lucrează în educație", "Toți din educație sunt profesori", "Domnul Brown nu lucrează în educație", "Unii profesori nu lucrează în educație"],
    "Toți profesorii lucrează în educație, domnul Brown este profesor, deci lucrează în educație.")

add(1, 19, "Toate diamantele sunt pietre prețioase. Toate pietrele prețioase sunt valoroase. Ce puteți concluziona?",
    "Lanț: diamante ⊂ pietre prețioase ⊂ obiecte valoroase.",
    ["Toate diamantele sunt valoroase", "Toate lucrurile valoroase sunt diamante", "Diamantele nu au valoare", "Unele pietre prețioase nu valorează nimic"],
    "Toate diamantele sunt pietre prețioase, toate pietrele prețioase sunt valoroase, deci toate diamantele sunt valoroase.")

add(1, 20, "Toate zilele de vară sunt calde. Astăzi este o zi de vară. Ce puteți concluziona?",
    "Dacă fiecare zi de vară este caldă, iar astăzi este zi de vară…",
    ["Astăzi e cald", "Toate zilele calde sunt de vară", "Astăzi e frig", "Zilele de vară nu sunt mereu calde"],
    "Toate zilele de vară sunt calde, astăzi este zi de vară, deci astăzi este cald.")

# --- TLR2 conditionals ---
add(2, 1, "Dacă ninge, temperatura este sub zero. Ninge. Ce puteți concluziona?",
    "Modus ponens: dacă P→Q și P este adevărat, atunci Q este adevărat.",
    ["Temperatura este sub zero", "Temperatura este peste zero", "Nu ninge", "Nu se poate trage o concluzie"],
    "Modus ponens: P→Q (ninsoare → sub zero). P este adevărat, deci Q este adevărat.")

add(2, 2, "Dacă studiezi regulat, notele se îmbunătățesc. Notele tale nu s-au îmbunătățit. Ce puteți concluziona?",
    "Modus tollens: dacă P→Q și Q este fals, atunci P este fals.",
    ["Nu ai studiat regulat", "Ai studiat regulat", "Notele s-au îmbunătățit", "Studiul nu influențează notele"],
    "Modus tollens: P→Q (studiu regulat → note mai bune). Q este fals, deci P este fals.")

add(2, 3, "Dacă telefonul este complet încărcat, ține toată ziua. Telefonul tău este complet încărcat. Ce puteți concluziona?",
    "Antecedentul este adevărat — se aplică modus ponens.",
    ["Telefonul va ține toată ziua", "Telefonul nu va ține toată ziua", "Telefonul nu este încărcat", "Nu se poate trage o concluzie"],
    "Modus ponens: P→Q (încărcat → ține ziua întreagă). P este adevărat, deci Q este adevărat.")

add(2, 4, "Dacă alarma este setată, sună la 7 dimineața. Alarma nu a sunat la 7. Ce puteți concluziona?",
    "Consecința este falsă — aplică modus tollens.",
    ["Alarma nu era setată", "Alarma era setată", "Alarma a sunat la 7", "Alarma este stricată"],
    "Modus tollens: P→Q (alarmă setată → sună la 7). Q este fals, deci P este fals.")

add(2, 5, "Dacă ai cheia corectă, încuietoarea se deschide. Ai cheia corectă. Ce puteți concluziona?",
    "Antecedentul este îndeplinit — modus ponens.",
    ["Încuietoarea se deschide", "Încuietoarea nu se deschide", "Nu ai cheia corectă", "Încuietoarea este blocată"],
    "Modus ponens: P→Q (cheie corectă → deschidere). P este adevărat, deci Q este adevărat.")

add(2, 6, "Dacă curentul este pus, frigiderul funcționează. Frigiderul nu funcționează. Ce puteți concluziona?",
    "Consecința este falsă — modus tollens.",
    ["Curentul nu este pus", "Curentul este pus", "Frigiderul funcționează", "Nu se poate trage o concluzie"],
    "Modus tollens: P→Q (curent pornit → frigiderul merge). Q este fals, deci P este fals.")

add(2, 7, "Dacă uzi plantele zilnic, rămân verzi. Le uzi zilnic. Ce puteți concluziona?",
    "Condiția este îndeplinită — ce urmează?",
    ["Plantele tale rămân verzi", "Plantele se ofilesc", "Nu le uzi", "Udarea nu are efect"],
    "Modus ponens: P→Q (udat zilnic → rămân verzi). P este adevărat, deci Q este adevărat.")

add(2, 8, "Dacă mașina are combustibil, motorul poate porni. Motorul nu pornește. Ce puteți concluziona?",
    "Rezultatul nu s-a produs — aplică modus tollens.",
    ["Mașina nu are combustibil", "Mașina are combustibil", "Motorul a pornit", "Nu se poate trage o concluzie"],
    "Modus tollens: P→Q (combustibil → motorul pornește). Q este fals, deci P este fals.")

add(2, 9, "Dacă cumperi bilet, poți urca în tren. Ai cumpărat bilet. Ce puteți concluziona?",
    "Ai îndeplinit condiția — care este pasul următor?",
    ["Poți urca în tren", "Nu poți urca în tren", "Nu ai cumpărat bilet", "Trenul este anulat"],
    "Modus ponens: P→Q (bilet → urci în tren). P este adevărat, deci Q este adevărat.")

add(2, 10, "Dacă ai pașaport valabil, poți traversa frontiera. Nu poți traversa frontiera. Ce puteți concluziona?",
    "Dacă P→Q și Q este fals, ce înseamnă pentru P?",
    ["Nu ai pașaport valabil", "Ai pașaport valabil", "Ai traversat frontiera", "Nu e nevoie de pașaport"],
    "Modus tollens: P→Q (pașaport → traversezi). Q este fals, deci P este fals.")

add(2, 11, "Dacă un animal este cal, are patru picioare. Acest animal are patru picioare. Ce puteți concluziona?",
    "Adevărul consecinței nu dovedește antecedentul. Multe animale au patru picioare.",
    ["Nu putem concluziona că e cal", "Sigur este cal", "Are două picioare", "Nu este animal"],
    "Eroarea afirmării consecinței: P→Q (cal → patru picioare) și Q adevărat nu implică P. Multe animale care nu sunt cai au patru picioare.")

add(2, 12, "Dacă cineva este avocat, a studiat dreptul. Sam a studiat dreptul. Ce puteți concluziona?",
    "Numai pentru că Q este adevărat nu înseamnă că P este adevărat.",
    ["Nu putem concluziona că Sam este avocat", "Sam este cu siguranță avocat", "Sam nu a studiat dreptul", "Toți cei care au studiat dreptul sunt avocați"],
    "Afirmarea consecinței: P→Q (avocat → a studiat drept) și Q adevărat nu dovedește că Sam este avocat.")

add(2, 13, "Dacă cuptorul este pornit, bucătăria se încălzește. Bucătăria nu este caldă. Ce puteți concluziona?",
    "Consecința este falsă — modus tollens.",
    ["Cuptorul nu este pornit", "Cuptorul este pornit", "Bucătăria este caldă", "Nu se poate trage o concluzie"],
    "Modus tollens: P→Q (cuptor pornit → bucătăria se încălzește). Q este fals, deci P este fals.")

add(2, 14, "Dacă apeși frâna, mașina încetinește. Ai apăsat frâna. Ce puteți concluziona?",
    "Antecedentul este adevărat — modus ponens.",
    ["Mașina încetinește", "Mașina accelerează", "Nu ai apăsat frâna", "Nu se întâmplă nimic"],
    "Modus ponens: P→Q (frână → încetinire). P este adevărat, deci Q este adevărat.")

add(2, 15, "Dacă ninge, cerul este înnorat. Cerul este înnorat. Ce puteți concluziona?",
    "Cerul poate fi innorat fără ninsoare — este oare afirmarea consecinței?",
    ["Nu putem concluziona că ningă", "Cu siguranță ningă", "Cerul este senin", "Nu ningă niciodată când e innorat"],
    "Afirmarea consecinței: P→Q și Q nu implică P. Cerul poate fi acoperit fără ninsoare.")

add(2, 16, "Dacă bateria este încărcată, lanterna funcționează. Lanterna nu funcționează. Ce puteți concluziona?",
    "Q este fals — ce spune asta despre P?",
    ["Bateria nu este încărcată", "Bateria este încărcată", "Lanterna funcționează", "Nu se poate trage o concluzie"],
    "Modus tollens: P→Q (încărcat → funcționează). Q este fals, deci P este fals.")

add(2, 17, "Dacă pui zahăr în ceai, ceaiul devine dulce. Ai pus zahăr în ceai. Ce puteți concluziona?",
    "Condiția este îndeplinită — modus ponens.",
    ["Ceaiul devine dulce", "Ceaiul rămâne amar", "Nu ai pus zahăr", "Zahărul nu are efect"],
    "Modus ponens: P→Q (zahăr → dulce). P este adevărat, deci Q este adevărat.")

add(2, 18, "Dacă ruterul Wi-Fi este pornit, dispozitivele se pot conecta la internet. Dispozitivele nu se pot conecta. Ce puteți concluziona?",
    "Q este fals — modus tollens.",
    ["Ruterul Wi-Fi nu este pornit", "Ruterul Wi-Fi este pornit", "Dispozitivele se pot conecta", "Internetul nu există"],
    "Modus tollens: P→Q (ruter pornit → conexiune). Q este fals, deci P este fals.")

add(2, 19, "Dacă un student se înscrie la curs, primește programa. Emma s-a înscris la curs. Ce puteți concluziona?",
    "Emma a îndeplinit condiția — care este pasul următor?",
    ["Emma primește programa", "Emma nu primește programa", "Emma nu s-a înscris", "Cursul nu are orar"],
    "Modus ponens: P→Q (înscris → primește programa). P este adevărat pentru Emma, deci Q este adevărat.")

add(2, 20, "Dacă este duminică, magazinul este închis. Nu este duminică. Ce puteți concluziona?",
    "Antecedentul este fals — nu îți spune dacă Q este adevărat sau fals (negarea antecedentului).",
    ["Nu putem stabili dacă magazinul este deschis sau închis", "Magazinul este cu siguranță deschis", "Magazinul este cu siguranță închis", "Trebuie să fie sâmbătă"],
    "Negarea antecedentului este o eroare: din P→Q și P fals nu rezultă nimic sigur despre Q.")

# --- TLR3 orderings & sets ---
add(3, 1, "Anna este mai înaltă decât Dana. Dana este mai înaltă decât Ben. Ben este mai înalt decât Carl. Cine este cel mai scund?",
    "Scrie lanțul inegalităților și găsește „baza”.",
    ["Carl", "Ben", "Dana", "Anna"],
    "Anna > Dana > Ben > Carl. Carl este cel mai scund.")

add(3, 2, "Felix este mai ușor decât George. Harry este mai greu decât George. Ivan este mai ușor decât Felix. Cine este cel mai greu?",
    "Ordine: Harry > George > Felix > Ivan.",
    ["Harry", "George", "Felix", "Ivan"],
    "Harry > George > Felix > Ivan. Cel mai greu este Harry.")

add(3, 3, "Mia este mai tânără decât Nina. Oscar este mai în vârstă decât Nina. Pam este mai tânără decât Mia. Cine este cel mai în vârstă?",
    "Clasament: Oscar > Nina > Mia > Pam.",
    ["Oscar", "Nina", "Mia", "Pam"],
    "Oscar > Nina > Mia > Pam. Cel mai în vârstă este Oscar.")

add(3, 4, "Într-o cursă, Raj termină după Sam. Tina termină înaintea lui Sam. Uma termină după Raj. Cine termină primul?",
    "Înainte = mai rapid. Lanț: Tina → Sam → Raj → Uma.",
    ["Tina", "Sam", "Raj", "Uma"],
    "Ordinea sosirii: Tina, Sam, Raj, Uma. Prima este Tina.")

add(3, 5, "Victor câștigă mai puțin decât Wendy. Wendy câștigă mai puțin decât Xavier. Yara câștigă mai mult decât Xavier. Cine câștigă cel mai mult?",
    "Lanț: Victor < Wendy < Xavier < Yara.",
    ["Yara", "Xavier", "Wendy", "Victor"],
    "Yara > Xavier > Wendy > Victor. Cel mai mult câștigă Yara.")

add(3, 6, "Eve are scor mai mare decât Frank. Grace are scor mai mic decât Frank. Dave are scor mai mare decât Eve. Cine are cel mai mic scor?",
    "Dave > Eve > Frank > Grace. Cine este jos?",
    ["Grace", "Frank", "Eve", "Dave"],
    "Dave > Eve > Frank > Grace. Cel mai mic scor îl are Grace.")

add(3, 7, "Lily înoată mai repede decât Max. Olivia înoată mai repede decât Lily. Noah înoată mai lent decât Max. Cine înoată cel mai lent?",
    "După viteză: Olivia > Lily > Max > Noah.",
    ["Noah", "Max", "Lily", "Olivia"],
    "Olivia > Lily > Max > Noah. Cel mai lent este Noah.")

add(3, 8, "Quinn este mai scundă decât Ruth. Steve este mai înalt decât Tom. Tom este mai înalt decât Ruth. Cine este cel mai înalt?",
    "Lanț: Steve > Tom > Ruth > Quinn.",
    ["Steve", "Tom", "Ruth", "Quinn"],
    "Steve > Tom > Ruth > Quinn. Cel mai înalt este Steve.")

add(3, 9, "Amy cântărește mai puțin decât Brian. Clara cântărește mai mult decât Dan. Dan cântărește mai mult decât Brian. Cine este cea mai ușoară?",
    "Clara > Dan > Brian > Amy.",
    ["Amy", "Brian", "Dan", "Clara"],
    "Clara > Dan > Brian > Amy. Cea mai ușoară este Amy.")

add(3, 10, "Jake aleargă mai lent decât Kim. Leo aleargă mai repede decât Mona. Mona aleargă mai repede decât Kim. Cine este al doilea ca viteză?",
    "Leo > Mona > Kim > Jake. Al doilea?",
    ["Mona", "Kim", "Leo", "Jake"],
    "Leo > Mona > Kim > Jake. A doua ca viteză este Mona.")

add(3, 11, "Într-un grup de 20 elevi, 12 joacă tenis și 10 joacă fotbal. Fiecare practică cel puțin un sport. Câți practică ambele?",
    "Ambele = A + B − total (când fiecare face cel puțin unul).",
    ["2", "4", "8", "10"],
    "12 + 10 − 20 = 2. Doi elevi practică ambele sporturi.")

add(3, 12, "Într-un grup de 25 persoane, 18 plac cafeaua și 13 ceaiul. Fiecare place cel puțin una. Câte persoane plac ambele?",
    "Ambele = cafea + ceai − total.",
    ["6", "5", "7", "8"],
    "18 + 13 − 25 = 6. Șase persoane plac ambele.")

add(3, 13, "Într-o firmă cu 35 angajați, 20 vorbesc franceza și 22 germana. Fiecare vorbește cel puțin una dintre limbi. Câți vorbesc ambele?",
    "Ambele = franceză + germană − total.",
    ["7", "5", "8", "13"],
    "20 + 22 − 35 = 7. Șapte angajați vorbesc ambele limbi.")

add(3, 14, "Într-un grup de 40 turiști, 28 au vizitat muzeul și 18 parcul. Fiecare a vizitat cel puțin un loc. Câți au vizitat ambele?",
    "Ambele = muzeu + parc − total.",
    ["6", "10", "8", "4"],
    "28 + 18 − 40 = 6. Șase turiști au vizitat ambele.")

add(3, 15, "Într-un grup de 30 cititori, 16 citesc ficțiune și 20 non-ficțiune. Fiecare citește cel puțin un tip. Câți citesc ambele?",
    "Ambele = ficțiune + non-ficțiune − total.",
    ["6", "4", "10", "14"],
    "16 + 20 − 30 = 6. Șase cititori citesc ambele tipuri.")

add(3, 16, "Într-un rând de persoane, Alice este a 3-a de la stânga și a 5-a de la dreapta. Câte persoane sunt în rând?",
    "Total = poziția stânga + poziția dreapta − 1.",
    ["7", "8", "6", "9"],
    "3 + 5 − 1 = 7. Sunt 7 persoane în rând.")

add(3, 17, "Într-un rând, Bob este al 7-lea de la stânga și al 4-lea de la dreapta. Câte persoane sunt în rând?",
    "Total = stânga + dreapta − 1.",
    ["10", "11", "9", "12"],
    "7 + 4 − 1 = 10. Sunt 10 persoane în rând.")

add(3, 18, "La coadă, Carol este a 5-a din față și a 9-a din spate. Câte persoane sunt la coadă?",
    "Total = față + spate − 1.",
    ["13", "14", "12", "15"],
    "5 + 9 − 1 = 13. Sunt 13 persoane la coadă.")

add(3, 19, "La coadă, David este al 9-lea din față și al 3-lea din spate. Câte persoane sunt la coadă?",
    "Total = față + spate − 1.",
    ["11", "12", "10", "13"],
    "9 + 3 − 1 = 11. Sunt 11 persoane la coadă.")

add(3, 20, "Într-un rând, Emily este a 6-a de la stânga și a 6-a de la dreapta. Câte persoane sunt în rând?",
    "Total = stânga + dreapta − 1.",
    ["11", "12", "10", "13"],
    "6 + 6 − 1 = 11. Sunt 11 persoane în rând.")

# --- TLR4 ---
add(4, 1, "Cinci persoane sunt comparate după greutate. E e mai greu decât A, A decât B, C decât D, D decât B, A decât C. Clasează de la cel mai greu la cel mai ușor.",
    "Construiește lanțul: E > A > C > D > B.",
    ["E, A, C, D, B", "E, A, D, C, B", "A, E, C, D, B", "E, C, A, D, B"],
    "E > A > C > D > B. Cel mai greu este E, cel mai ușor B.")

add(4, 2, "Cinci alergători termină o cursă. Sam termină înaintea lui Priya, Priya înaintea lui Quinn, Quinn înaintea lui Tara, Tara înaintea Rosei. Cine termină pe locul 3?",
    "Lanțul sosirilor: Sam → Priya → Quinn → Tara → Rosa.",
    ["Quinn", "Priya", "Tara", "Sam"],
    "Ordinea: Sam, Priya, Quinn, Tara, Rosa. Pe locul 3 este Quinn.")

add(4, 3, "Cinci elevi au scoruri diferite la un test. Jack > Fred > Gina > Iris > Hank. Cine are al doilea cel mai mic scor (penultimul loc)?",
    "Lanț: J > F > G > I > H. Numără de jos în sus.",
    ["Iris", "Gina", "Hank", "Fred"],
    "Al doilea de la coadă (după Hank) este Iris.")

add(4, 4, "Șase sportivi așezați după viteză: Elena > Diana > Ava > Bella > Chloe > Fiona. Sortează de la cel mai rapid la cel mai lent.",
    "Construiește pas cu pas.",
    ["Elena, Diana, Ava, Bella, Chloe, Fiona", "Diana, Elena, Ava, Bella, Chloe, Fiona", "Elena, Ava, Diana, Bella, Chloe, Fiona", "Elena, Diana, Bella, Ava, Chloe, Fiona"],
    "Elena > Diana > Ava > Bella > Chloe > Fiona.")

add(4, 5, "Cinci orașe după populație: Penny > Liam > Mason > Oliver > Noah. Sortează de la cel mai populat la cel mai puțin populat.",
    "Penny > Liam > Mason > Oliver > Noah.",
    ["Penny, Liam, Mason, Oliver, Noah", "Liam, Penny, Mason, Oliver, Noah", "Penny, Mason, Liam, Oliver, Noah", "Penny, Liam, Oliver, Mason, Noah"],
    "Penny > Liam > Mason > Oliver > Noah.")

add(4, 6, "Într-o firmă cu 60 angajați, 38 folosesc Windows și 30 Mac. Fiecare folosește cel puțin un sistem. Câți folosesc ambele?",
    "Ambele = Windows + Mac − total.",
    ["8", "10", "12", "6"],
    "38 + 30 − 60 = 8.")

add(4, 7, "Într-o școală cu 80 elevi, 55 studiază matematica și 42 științele. Fiecare studiază cel puțin o materie. Câți studiază ambele?",
    "Ambele = matematică + științe − total.",
    ["17", "15", "20", "23"],
    "55 + 42 − 80 = 17.")

add(4, 8, "Într-un club cu 75 membri, 50 joacă șah și 40 dame. Fiecare joacă cel puțin un joc. Câți joacă ambele?",
    "Ambele = șah + dame − total.",
    ["15", "10", "20", "25"],
    "50 + 40 − 75 = 15.")

add(4, 9, "Într-un sondaj cu 90 persoane, 60 preferă ciocolata și 52 vanilia. Fiecare place cel puțin un gust. Câte persoane plac ambele?",
    "Ambele = ciocolată + vanilie − total.",
    ["22", "18", "30", "12"],
    "60 + 52 − 90 = 22.")

add(4, 10, "Într-un grup de 100 alegători, 72 susțin propunerea A și 65 propunerea B. Fiecare susține cel puțin una. Câți susțin ambele?",
    "Ambele = A + B − total.",
    ["37", "35", "40", "28"],
    "72 + 65 − 100 = 37.")

add(4, 11, "Într-un sondaj, 50 persoane: 30 au mașină, 25 au bicicletă, 10 au ambele. Câte nu au niciuna?",
    "Cel puțin una = mașină + bicicletă − ambele. Niciuna = total − cel puțin una.",
    ["5", "10", "15", "0"],
    "30 + 25 − 10 = 45 au cel puțin una. 50 − 45 = 5 nu au niciuna.")

add(4, 12, "Într-o clasă de 45 elevi, 28 au trecut matematica, 20 științele, 8 pe ambele. Câți au trecut exact o materie?",
    "Exact una = (doar mate) + (doar științe).",
    ["32", "40", "28", "20"],
    "Doar mate: 28 − 8 = 20. Doar științe: 20 − 8 = 12. Total 32.")

add(4, 13, "Șaizeci de persoane: 40 cântă la chitară, 30 la pian; fiecare cântă la cel puțin un instrument. Câți cântă la un singur instrument?",
    "Ambele = chitară + pian − 60. Exact unul = cei cu un singur instrument.",
    ["50", "60", "40", "30"],
    "Ambele = 10. Exact un singur instrument = 50.")

add(4, 14, "55 studenți: 32 la cenaclul de artă, 28 la muzică, 12 la ambele. Câți nu fac parte din niciun cerc?",
    "Cel puțin unul = 32 + 28 − 12. Niciunul = 55 − aceasta.",
    ["7", "5", "10", "3"],
    "48 au cel puțin un cerc. 55 − 48 = 7.")

add(4, 15, "70 persoane: 45 citesc ziare, 38 reviste, 20 pe ambele. Câte citesc exact un singur tip de lectură?",
    "Exact unul = (doar ziar) + (doar revistă).",
    ["43", "63", "50", "33"],
    "Doar ziar: 45 − 20 = 25. Doar revistă: 38 − 20 = 18. Total 43.")

add(4, 16, "Dacă e frig, Tom poartă pelerină. Dacă poartă pelerină, ia umbrelă. E frig. Ce ia Tom?",
    "Lanț: frig → pelerină → umbrelă. Modus ponens de două ori.",
    ["O umbrelă", "O pălărie", "Nimic", "Doar pelerina"],
    "Frig → pelerină → umbrelă. Deci Tom ia o umbrelă.")

add(4, 17, "Dacă Alice învață, trece examenul. Dacă trece examenul, absolvește. Dacă absolvește, primește ofertă de muncă. Alice învață. Care este rezultatul final?",
    "Lanț: învățare → promovare → diplomă → ofertă.",
    ["Alice primește ofertă de muncă", "Alice promovează doar examenul", "Alice tocmai a absolvit", "Nu se poate trage o concluzie"],
    "Alice parcurge tot lanțul până la oferta de muncă.")

add(4, 18, "Dacă se ia curentul, calculatorul se oprește. Dacă se oprește, munca nesalvată se pierde. Munca nesalvată nu s-a pierdut. Ce concluzionați?",
    "Modus tollens în lanț: munca nu pierdută → calculatorul nu s-a oprit → curentul nu a dispărut.",
    ["Curentul nu a dispărut", "Curentul a dispărut", "Calculatorul s-a oprit", "Munca s-a pierdut"],
    "Munca nesalvată nu e pierdută → calculatorul nu s-a oprit → curentul nu a dispărut.")

add(4, 19, "Dacă plouă, meciul este anulat. Dacă e anulat, biletele se returnează. Biletele nu s-au returnat. Care concluzie?",
    "Lanț tollens: nu returnate → nu anulat → nu a plouat.",
    ["Nu a plouat", "A plouat", "Meciul a fost anulat", "Biletele s-au returnat"],
    "Dublă negare: bilete nereturnate → meci neanulat → nu a plouat.")

add(4, 20, "Dacă mănânci prea mult zahăr, iei în greutate. Dacă iei în greutate, ai nevoie de mai multă mișcare. Dacă ai această nevoie, te abonezi la sală. Nu te-ai abonat la sală. Ce concluzionați?",
    "Modus tollens în lanț: fără sală → fără nevoie sporită de mișcare → fără creștere în greutate → fără exces de zahăr.",
    ["Nu ai mâncat prea mult zahăr", "Ai mâncat prea mult zahăr", "Te-ai îngrășat", "Te-ai abonat la sală"],
    "Fără abonament → fără nevoie sporită de mișcare → fără creștere în greutate → fără exces de zahăr.")

# --- TLR5 ---
add(5, 1, "Trei persoane: A, B, C. Exact una spune adevărul. A spune: «B și C mint amândoi». B spune: «A minte». C spune: «A spune adevărul». Cine spune adevărul?",
    "Testează pe rând fiecare ca singura persoană sinceră.",
    ["B", "A", "C", "Niciuna"],
    "Dacă B e sincer: A și C mint — nu există contradicție cu „exact una spune adevărul”. Celelalte ipoteze duc la contradicții.")

add(5, 2, "Trei persoane: D, E, F. Exact una spune adevărul. D spune: «E minte». E spune: «F minte». F spune: «D și E mint amândoi». Cine spune adevărul?",
    "Presupune pe rând fiecare sincer și verifică contradicțiile.",
    ["E", "D", "F", "Niciuna"],
    "Dacă E e sincer: F minte; D spune că E minte — deci D minte; afirmația lui F e falsă, deci nu mint amândoi — consistent cu E sincer.")

add(5, 3, "G, H, I — suspecți. Un singur vinovat. Vinovatul minte mereu; nevinovații spun mereu adevărul. G: «H e vinovat». H: «Nu sunt vinovat». I: «G e vinovat». Cine e vinovat?",
    "Presupune pe rând fiecare vinovat și verifică declarațiile.",
    ["G", "H", "I", "Nu se poate determina"],
    "Dacă G e vinovat: G minte → H nevinovat; H zice adevărul; I zice adevărul. Singur vinovat, consistent.")

add(5, 4, "J, K, L. Exact una spune adevărul. J: «Spun adevărul». K: «J spune adevărul». L: «J este mincinos». Cine spune adevărul?",
    "Dacă J e sincer, și K ar fi sincer — imposibil.",
    ["L", "J", "K", "Niciuna"],
    "L sincer → J minte → «spun adevărul» e fals; K minte. Doar L funcționează.")

add(5, 5, "M, N, O. Exact una spune adevărul. M: «N și O spun amândoi adevărul». N: «M minte». O: «N minte». Cine spune adevărul?",
    "Dacă M ar fi sincer, N și O ar fi sinceri — contrazice „exact una”.",
    ["N", "M", "O", "Niciuna"],
    "N sincer → M minte; «N și O amândoi adevărul» e fals → O minte; O minte → «N minte» e fals → N sincer. Consistent.")

add(5, 6, "Peste trei zile va fi miercuri. Ce zi este astăzi?",
    "Numără înapoi trei zile de la miercuri.",
    ["Duminică", "Luni", "Sâmbătă", "Marți"],
    "Astămâna + 3 = miercuri. Astăzi este duminică.")

add(5, 7, "Ieri a fost vineri. Ce zi va fi poimâine?",
    "Află mai întâi ziua de azi, apoi +2 zile.",
    ["Luni", "Duminică", "Marți", "Sâmbătă"],
    "Ieri = vineri → azi = sâmbătă → mâine = duminică → poimâine = luni.")

add(5, 8, "Cu două zile în urmă era luni. Ce zi va fi peste trei zile?",
    "Află „azi” din „cu două zile în urmă”, apoi adună trei zile.",
    ["Sâmbătă", "Vineri", "Duminică", "Joi"],
    "Cu două zile în urmă = luni → azi = miercuri → peste trei zile = sâmbătă.")

add(5, 9, "Alaltăieri a fost joi. Ce zi va fi mâine?",
    "Alaltăieri = acum două zile. Află azi, apoi +1.",
    ["Duminică", "Sâmbătă", "Luni", "Vineri"],
    "Alaltăieri joi → ieri vineri → azi sâmbătă → mâine duminică.")

add(5, 10, "Peste patru zile va fi marți. Ce zi a fost ieri?",
    "Azi = marți − 4 zile; ieri = azi − 1.",
    ["Joi", "Vineri", "Miercuri", "Sâmbătă"],
    "Azi + 4 = marți → azi = vineri. Ieri = joi.")

add(5, 11, "Șase elevi sunt clasați la test: Fay > Diana > Abby > Brian > Carl > Elena. Cine are al treilea cel mai mare scor?",
    "Construiește lanțul și numără până la poziția 3.",
    ["Abby", "Diana", "Brian", "Fay"],
    "Fay > Diana > Abby > Brian > Carl > Elena. Al treilea este Abby.")

add(5, 12, "Cinci borcane au greutăți diferite. Borcanul 5 > 1 > 2 > 4 > 3. Care borcan e la mijloc (locul 3 din 5)?",
    "Lanț complet 5>1>2>4>3. Mijlocul e poziția 3.",
    ["Borcanul 2", "Borcanul 1", "Borcanul 4", "Borcanul 3"],
    "Al treilea în ordine e borcanul 2.")

add(5, 13, "Șapte persoane după vârstă: T>U>V>W>X>Y>Z. Cine e a patra ca vârstă?",
    "Poziția 4 în lanț.",
    ["W", "V", "X", "U"],
    "Al patrulea este W.")

add(5, 14, "Cinci orașe după populație: E>A>B>D>C. Care oraș e cel mai puțin populat?",
    "C e la coada lanțului.",
    ["Orașul C", "Orașul D", "Orașul B", "Orașul A"],
    "Cel mai mic este C.")

add(5, 15, "Șase cărți după numărul de pagini: T>P>Q>U>R>S. Care carte are a doua cele mai puține pagini?",
    "T>P>Q>U>R>S. A doua de jos = penultima.",
    ["Cartea R", "Cartea S", "Cartea U", "Cartea Q"],
    "A doua cele mai puține pagini: R.")

add(5, 16, "Trei cutii etichetate «Mere», «Portocale», «Amestec». Toate etichetele sunt greșite. Alegi un fruct din cutia „Amestec” și e măr. Ce conține de fapt cutia etichetată „Mere»?",
    "„Amestec” e fals — cutia e omogenă; ai scos măr → acolo sunt merele. Alocă restul.",
    ["Portocale", "Mere", "Amestec", "Nu se poate determina"],
    "Cutia „Amestec” nu e amestec; e mere. Cutia „Portocale” nu e portocale → e amestec. Cutia „Mere” nu e mere → e portocale.")

add(5, 17, "Alice, Bob și Carol lucrează în zile diferite: luni, marți, miercuri. Alice nu lucrează luni. Bob nu lucrează marți nici miercuri. Carol nu lucrează miercuri. În ce zi lucrează Carol?",
    "Începe cu cel mai constrâns: Bob are o singură zi posibilă.",
    ["Marți", "Luni", "Miercuri", "Nu se poate determina"],
    "Bob numai luni → Alice marți sau miercuri → Carol nu miercuri → Carol marți. Alice miercuri.")

add(5, 18, "Dacă P e adevărat, Q e adevărat. Dacă Q e adevărat, R e fals. Dacă R e fals, S e adevărat. P e adevărat. Care este valoarea de adevăr a lui S?",
    "Parcurge lanțul: P → Q → ¬R → S.",
    ["S e adevărat", "S e fals", "S e necunoscut", "S depinde de R"],
    "P adevărat → Q adevărat → R fals → S adevărat.")

add(5, 19, "Cinci prieteni după vârstă: Alex > Drew > Blake > Casey > Ellie. Cine e la mijloc (al treilea ca vârstă)?",
    "Șirul complet; mijlocul din 5 e poziția 3.",
    ["Blake", "Drew", "Casey", "Alex"],
    "Al treilea este Blake.")

add(5, 20, "Într-un turneu logic, cinci concurenți (V, W, X, Y, Z) sunt clasați 1–5. V înaintea lui W. X imediat după Y. Z pe locul 3. W pe locul 5. Y înaintea lui Z. Care este locul lui V?",
    "Z=3, W=5; Y înainte de Z; X imediat după Y.",
    ["Locul 4", "Locul 1", "Locul 2", "Locul 3"],
    "Y=1, X=2, Z=3, V=4, W=5. V este pe 4.")
