// ============================================================
// Training Exercises for Ages 12–15 — Part 2
// Categories: Logical Reasoning, Spatial Reasoning, Mathematical Puzzles
// 3 constants × 4 levels × 20 exercises = 240 total
// ============================================================

// ============================================================
// 1. LOGICAL REASONING  (TRAINING_LR_12_15)
// ============================================================
const TRAINING_LR_12_15 = {
  tips: [
    "When solving ordering problems, write down all given clues first, then build the sequence step by step.",
    "For inclusion-exclusion problems, draw a Venn diagram and fill in the overlapping regions before the non-overlapping ones.",
    "When encountering if-then statements, remember: the contrapositive ('if not B then not A') is always logically equivalent.",
    "In multi-constraint puzzles, start with the most restrictive clue — it eliminates the most possibilities."
  ],
  levels: [
    // ── LEVEL 1 — Foundation: Position-from-both-ends, simple 2-set inclusion-exclusion ──
    {
      level: 1,
      name: "Foundation",
      description: "Position-from-both-ends problems and simple 2-set inclusion-exclusion counting.",
      exercises: [
        {
          id: "TLR1215_1_01",
          question: "In a row of 30 students, Ravi is 12th from the left. What is his position from the right?",
          hint: "Position from right = Total − Position from left + 1.",
          options: ["18th", "19th", "20th", "17th"],
          correct: 1,
          explanation: "Position from right = 30 − 12 + 1 = 19th."
        },
        {
          id: "TLR1215_1_02",
          question: "In a queue of 45 people, Meera is 20th from the front. What is her position from the back?",
          hint: "Position from back = Total − Position from front + 1.",
          options: ["25th", "26th", "27th", "24th"],
          correct: 1,
          explanation: "Position from back = 45 − 20 + 1 = 26th."
        },
        {
          id: "TLR1215_1_03",
          question: "In a row of students, Anil is 15th from the left and 18th from the right. How many students are in the row?",
          hint: "Total = Left position + Right position − 1.",
          options: ["31", "32", "33", "30"],
          correct: 1,
          explanation: "Total = 15 + 18 − 1 = 32."
        },
        {
          id: "TLR1215_1_04",
          question: "In a row of 40 people, Sunita is 17th from the right. What is her position from the left?",
          hint: "Position from left = Total − Position from right + 1.",
          options: ["23rd", "24th", "25th", "22nd"],
          correct: 1,
          explanation: "Position from left = 40 − 17 + 1 = 24th."
        },
        {
          id: "TLR1215_1_05",
          question: "In a class of 50 students, 30 play football, 25 play cricket, and 10 play both. How many play neither?",
          hint: "Neither = Total − (Football + Cricket − Both).",
          options: ["3", "5", "10", "15"],
          correct: 1,
          explanation: "At least one sport = 30 + 25 − 10 = 45. Neither = 50 − 45 = 5."
        },
        {
          id: "TLR1215_1_06",
          question: "Out of 60 students, 35 like math, 30 like science, and 15 like both. How many like at least one subject?",
          hint: "At least one = A + B − Both.",
          options: ["45", "50", "55", "60"],
          correct: 1,
          explanation: "At least one = 35 + 30 − 15 = 50."
        },
        {
          id: "TLR1215_1_07",
          question: "In a row, Kabir is 9th from the left and 14th from the right. How many people are in the row?",
          hint: "Total = Left + Right − 1.",
          options: ["21", "22", "23", "20"],
          correct: 1,
          explanation: "Total = 9 + 14 − 1 = 22."
        },
        {
          id: "TLR1215_1_08",
          question: "Out of 40 students, 22 read fiction, 20 read non-fiction, and 8 read both. How many read neither?",
          hint: "Neither = Total − (A + B − Both).",
          options: ["4", "6", "8", "10"],
          correct: 1,
          explanation: "At least one = 22 + 20 − 8 = 34. Neither = 40 − 34 = 6."
        },
        {
          id: "TLR1215_1_09",
          question: "In a queue of 55 people, Tara is 23rd from the front and Kiran is 23rd from the back. How many people are between them?",
          hint: "Between = Total − Front position − Back position (if they are different people).",
          options: ["7", "9", "10", "11"],
          correct: 1,
          explanation: "People between = 55 − 23 − 23 = 9."
        },
        {
          id: "TLR1215_1_10",
          question: "In a row of 35 children, Nisha is exactly in the middle. What is her position from the left?",
          hint: "Middle position = (Total + 1) / 2.",
          options: ["17th", "18th", "19th", "16th"],
          correct: 1,
          explanation: "Middle = (35 + 1) / 2 = 18th from either end."
        },
        {
          id: "TLR1215_1_11",
          question: "In a class, 40 students study French, 35 study Spanish, and 12 study both. How many study only French?",
          hint: "Only French = French − Both.",
          options: ["25", "28", "30", "32"],
          correct: 1,
          explanation: "Only French = 40 − 12 = 28."
        },
        {
          id: "TLR1215_1_12",
          question: "Rohan is 25th from the left in a row of 48. If he moves 5 places to the right, what is his new position from the right?",
          hint: "New left position = 25 + 5 = 30. Then convert to from-right.",
          options: ["18th", "19th", "20th", "21st"],
          correct: 1,
          explanation: "New position from left = 30. From right = 48 − 30 + 1 = 19th."
        },
        {
          id: "TLR1215_1_13",
          question: "Out of 80 people, 50 drink tea, 40 drink coffee, and everyone drinks at least one. How many drink both?",
          hint: "Both = Tea + Coffee − Total (when everyone drinks at least one).",
          options: ["5", "10", "15", "20"],
          correct: 1,
          explanation: "Both = 50 + 40 − 80 = 10."
        },
        {
          id: "TLR1215_1_14",
          question: "In a line of 38 people, Dev is 16th from the left. How many people are to the right of Dev?",
          hint: "People to the right = Total − Position from left.",
          options: ["21", "22", "23", "20"],
          correct: 1,
          explanation: "People to the right = 38 − 16 = 22."
        },
        {
          id: "TLR1215_1_15",
          question: "Of 100 students, 60 passed English, 55 passed Math, and 30 passed both. How many failed both?",
          hint: "Failed both = Total − (English + Math − Both).",
          options: ["10", "15", "20", "25"],
          correct: 1,
          explanation: "Passed at least one = 60 + 55 − 30 = 85. Failed both = 100 − 85 = 15."
        },
        {
          id: "TLR1215_1_16",
          question: "In a row of students, Zara is 22nd from the left and 22nd from the right. How many students are in the row?",
          hint: "Total = Left + Right − 1.",
          options: ["42", "43", "44", "41"],
          correct: 1,
          explanation: "Total = 22 + 22 − 1 = 43."
        },
        {
          id: "TLR1215_1_17",
          question: "In a survey of 70 people, 45 like apples, 38 like bananas, and 20 like both. How many like only bananas?",
          hint: "Only bananas = Bananas − Both.",
          options: ["15", "18", "20", "25"],
          correct: 1,
          explanation: "Only bananas = 38 − 20 = 18."
        },
        {
          id: "TLR1215_1_18",
          question: "Priya is 13th from the left and 28th from the right in a row. How many students are in the row?",
          hint: "Total = Left + Right − 1.",
          options: ["39", "40", "41", "38"],
          correct: 1,
          explanation: "Total = 13 + 28 − 1 = 40."
        },
        {
          id: "TLR1215_1_19",
          question: "In a group of 50, 28 play chess, 25 play checkers, and 50 − 3 = 47 play at least one. How many play both?",
          hint: "Both = Chess + Checkers − At least one.",
          options: ["3", "6", "8", "10"],
          correct: 1,
          explanation: "Both = 28 + 25 − 47 = 6."
        },
        {
          id: "TLR1215_1_20",
          question: "In a queue of 62 people, Amit is 30th from the front. After 8 people leave from behind him, what is his new position from the back?",
          hint: "New total = 62 − 8 = 54. People behind originally = 62 − 30 = 32, now 32 − 8 = 24.",
          options: ["24th", "25th", "26th", "33rd"],
          correct: 1,
          explanation: "People behind Amit originally = 62 − 30 = 32. After 8 leave from behind: 32 − 8 = 24 behind. Position from back = 24 + 1 = 25th."
        }
      ]
    },
    // ── LEVEL 2 — Developing: Multi-step ordering, day-of-week, if-then reasoning ──
    {
      level: 2,
      name: "Developing",
      description: "Multi-step ordering with 4+ items, day-of-week calculations, and basic if-then reasoning.",
      exercises: [
        {
          id: "TLR1215_2_01",
          question: "Five friends A, B, C, D, E sit in a row. B is to the right of A. C is between A and B. E is at the far right. D is to the left of A. What is the seating order left to right?",
          hint: "Start with the clue about E being far right, then build from A, C, B.",
          options: ["D, A, C, B, E", "A, D, C, B, E", "D, C, A, B, E", "D, A, B, C, E"],
          correct: 0,
          explanation: "E is far right. B is right of A with C between them → A, C, B. D is left of A → D, A, C, B, E."
        },
        {
          id: "TLR1215_2_02",
          question: "Today is Wednesday. What day will it be 100 days from now?",
          hint: "100 ÷ 7 = 14 remainder 2. Count 2 days forward from Wednesday.",
          options: ["Thursday", "Friday", "Saturday", "Sunday"],
          correct: 1,
          explanation: "100 ÷ 7 = 14 weeks and 2 days. Wednesday + 2 days = Friday."
        },
        {
          id: "TLR1215_2_03",
          question: "If it rains, the match is cancelled. The match was not cancelled. What can you conclude?",
          hint: "Use the contrapositive: if not cancelled → not raining.",
          options: ["It rained", "It did not rain", "The match was postponed", "Nothing can be concluded"],
          correct: 1,
          explanation: "Contrapositive of 'If rain → cancelled' is 'If not cancelled → not rain'. Since the match was not cancelled, it did not rain."
        },
        {
          id: "TLR1215_2_04",
          question: "Six books P, Q, R, S, T, U are stacked. R is above P. S is between R and P. Q is on top. T is below P. U is at the bottom. Top to bottom order?",
          hint: "Q is on top. R is above P with S between → R, S, P. T is below P. U is at the bottom.",
          options: ["Q, R, S, P, T, U", "Q, S, R, P, T, U", "R, Q, S, P, T, U", "Q, R, P, S, T, U"],
          correct: 0,
          explanation: "Q on top. R above P with S between: R, S, P. T below P, U at bottom. Full order: Q, R, S, P, T, U."
        },
        {
          id: "TLR1215_2_05",
          question: "Today is Saturday. What day was it 250 days ago?",
          hint: "250 ÷ 7 = 35 remainder 5. Count 5 days backward from Saturday.",
          options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
          correct: 1,
          explanation: "250 ÷ 7 = 35 weeks and 5 days. Saturday − 5 days = Monday."
        },
        {
          id: "TLR1215_2_06",
          question: "If a student passes the exam, they get a certificate. Alex did not get a certificate. What follows?",
          hint: "Contrapositive: no certificate → did not pass.",
          options: ["Alex passed", "Alex did not pass", "Alex was absent", "Cannot determine"],
          correct: 1,
          explanation: "Contrapositive: If no certificate → did not pass. Alex didn't get a certificate, so Alex did not pass."
        },
        {
          id: "TLR1215_2_07",
          question: "Four runners finish a race. A finishes before B. C finishes after D but before A. Who finishes second?",
          hint: "Order: D before C before A before B.",
          options: ["A", "C", "D", "B"],
          correct: 1,
          explanation: "C after D → D, C. C before A → D, C, A. A before B → D, C, A, B. C finishes second."
        },
        {
          id: "TLR1215_2_08",
          question: "If today is Thursday, what day will it be 45 days from now?",
          hint: "45 ÷ 7 = 6 remainder 3.",
          options: ["Saturday", "Sunday", "Monday", "Tuesday"],
          correct: 1,
          explanation: "45 ÷ 7 = 6 weeks and 3 days. Thursday + 3 = Sunday."
        },
        {
          id: "TLR1215_2_09",
          question: "Five people P, Q, R, S, T are ranked by height. P > Q, R > S, Q > R, T > P. Who is the tallest?",
          hint: "Chain: T > P > Q > R > S.",
          options: ["P", "T", "Q", "R"],
          correct: 1,
          explanation: "T > P > Q > R > S. T is the tallest."
        },
        {
          id: "TLR1215_2_10",
          question: "All roses are flowers. Some flowers are red. Which statement MUST be true?",
          hint: "Think about what necessarily follows from the two premises.",
          options: [
            "All roses are red",
            "Some roses are red",
            "Some flowers are roses",
            "No roses are red"
          ],
          correct: 2,
          explanation: "'All roses are flowers' means the set of roses is inside the set of flowers, so some flowers are roses. We can't conclude anything about roses being red."
        },
        {
          id: "TLR1215_2_11",
          question: "If a number is divisible by 6, it is divisible by 3. The number 25 is not divisible by 3. What can you conclude about 25?",
          hint: "Contrapositive: not divisible by 3 → not divisible by 6.",
          options: [
            "25 is divisible by 6",
            "25 is not divisible by 6",
            "25 is divisible by 2",
            "Nothing can be concluded"
          ],
          correct: 1,
          explanation: "Contrapositive: If not divisible by 3, then not divisible by 6. Since 25 is not divisible by 3, it's not divisible by 6."
        },
        {
          id: "TLR1215_2_12",
          question: "Six athletes A–F compete. E beats A, A beats B, B beats C, C beats D, D beats F. Rank them 1st to 6th.",
          hint: "Build the chain by following each 'beats' relationship.",
          options: [
            "E, A, B, C, D, F",
            "A, E, B, C, D, F",
            "E, B, A, C, D, F",
            "E, A, C, B, D, F"
          ],
          correct: 0,
          explanation: "E > A > B > C > D > F. This is a single chain giving a unique ranking: E, A, B, C, D, F."
        },
        {
          id: "TLR1215_2_13",
          question: "A meeting is scheduled every 4 days starting on a Monday. On what day of the week is the 10th meeting?",
          hint: "The 10th meeting is (10−1) × 4 = 36 days after Monday.",
          options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          correct: 0,
          explanation: "9 gaps × 4 days = 36 days after Monday. 36 mod 7 = 1. Monday + 1 day = Tuesday."
        },
        {
          id: "TLR1215_2_14",
          question: "Today is Friday. What day was it 200 days ago?",
          hint: "200 ÷ 7 = 28 remainder 4. Go back 4 days from Friday.",
          options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
          correct: 1,
          explanation: "200 ÷ 7 = 28 weeks and 4 days. Friday − 4 days = Monday."
        },
        {
          id: "TLR1215_2_15",
          question: "If all cats are mammals and all mammals are warm-blooded, which must be true?",
          hint: "This is a transitive chain: Cats → Mammals → Warm-blooded.",
          options: [
            "All warm-blooded animals are cats",
            "All cats are warm-blooded",
            "Some mammals are not warm-blooded",
            "All warm-blooded animals are mammals"
          ],
          correct: 1,
          explanation: "By transitivity: All cats are mammals and all mammals are warm-blooded, so all cats are warm-blooded."
        },
        {
          id: "TLR1215_2_16",
          question: "Four friends sit in order around a table: clockwise from the door we have W, X, Y, Z. Who sits directly opposite W?",
          hint: "In 4 seats around a table, opposite is 2 seats away.",
          options: ["X", "Y", "Z", "Cannot tell"],
          correct: 1,
          explanation: "Clockwise: W, X, Y, Z. W's opposite is 2 seats away = Y."
        },
        {
          id: "TLR1215_2_17",
          question: "If you study hard, you will pass. If you pass, you will graduate. Sam graduated. What can you conclude?",
          hint: "Careful: Can you work backward through if-then chains?",
          options: [
            "Sam studied hard",
            "Sam passed",
            "Sam studied hard and passed",
            "Nothing definite"
          ],
          correct: 3,
          explanation: "We cannot affirm the antecedent from the consequent. Sam could have graduated through other means. This is the fallacy of affirming the consequent."
        },
        {
          id: "TLR1215_2_18",
          question: "Five subjects are scheduled Mon–Fri, one per day. Math is before Science. English is on Wednesday. History is the day after Science. Art is on Monday. When is History?",
          hint: "Art=Mon, English=Wed. Math before Science, and History is the day after Science.",
          options: ["Tuesday", "Thursday", "Friday", "Wednesday"],
          correct: 2,
          explanation: "Art=Mon, English=Wed. Math before Science, History = day after Science. Remaining days: Tue, Thu, Fri for Math, Science, History. Science must be followed by History → Science=Thu, History=Fri, Math=Tue. History is Friday."
        },
        {
          id: "TLR1215_2_19",
          question: "Today is Tuesday. A library book is due in 17 days. On what day is it due?",
          hint: "17 ÷ 7 = 2 remainder 3.",
          options: ["Thursday", "Friday", "Saturday", "Sunday"],
          correct: 1,
          explanation: "17 ÷ 7 = 2 weeks and 3 days. Tuesday + 3 = Friday."
        },
        {
          id: "TLR1215_2_20",
          question: "If it is a holiday, the office is closed. If the office is closed, no mail is delivered. Today mail was delivered. What can you conclude?",
          hint: "Work backward with contrapositives.",
          options: [
            "It is a holiday",
            "It is not a holiday",
            "The office is open",
            "Both B and C"
          ],
          correct: 3,
          explanation: "Mail delivered → office not closed (contrapositive of second statement). Office not closed → not a holiday (contrapositive of first). So it's not a holiday AND the office is open."
        }
      ]
    },
    // ── LEVEL 3 — Advanced: 3-set inclusion-exclusion, contrapositive, negation ──
    {
      level: 3,
      name: "Advanced",
      description: "Three-set inclusion-exclusion, contrapositive reasoning, and negation puzzles.",
      exercises: [
        {
          id: "TLR1215_3_01",
          question: "In a class of 100: 50 like Math, 40 like Science, 45 like English, 20 like Math & Science, 15 like Science & English, 25 like Math & English, 10 like all three. How many like at least one?",
          hint: "|A∪B∪C| = |A|+|B|+|C|−|A∩B|−|A∩C|−|B∩C|+|A∩B∩C|.",
          options: ["80", "85", "90", "75"],
          correct: 1,
          explanation: "|A∪B∪C| = 50+40+45−20−25−15+10 = 85."
        },
        {
          id: "TLR1215_3_02",
          question: "Using the same data as above (class of 100), how many like none of the three subjects?",
          hint: "None = Total − At least one.",
          options: ["10", "15", "20", "25"],
          correct: 1,
          explanation: "At least one = 85. None = 100 − 85 = 15."
        },
        {
          id: "TLR1215_3_03",
          question: "If 'All A are B' is true, which statement must be FALSE?",
          hint: "Think about what 'All A are B' tells you about members of A.",
          options: [
            "Some A are B",
            "Some B are A",
            "Some A are not B",
            "All B might be A"
          ],
          correct: 2,
          explanation: "If all A are B, then there is no A that is not B. So 'Some A are not B' must be false."
        },
        {
          id: "TLR1215_3_04",
          question: "In a survey of 200 people: 120 read newspaper A, 100 read B, 80 read C, 50 read A&B, 40 read A&C, 30 read B&C, 20 read all three. How many read exactly one newspaper?",
          hint: "Compute each 'only' region: Only X = |X| − |X∩Y| − |X∩Z| + |X∩Y∩Z|.",
          options: ["90", "100", "110", "120"],
          correct: 3,
          explanation: "Only A = 120−50−40+20 = 50. Only B = 100−50−30+20 = 40. Only C = 80−40−30+20 = 30. Exactly one = 50+40+30 = 120."
        },
        {
          id: "TLR1215_3_05",
          question: "The negation of 'All birds can fly' is:",
          hint: "The negation of 'All X are Y' is 'There exists an X that is not Y'.",
          options: [
            "No birds can fly",
            "Some birds cannot fly",
            "All birds cannot fly",
            "Most birds cannot fly"
          ],
          correct: 1,
          explanation: "The negation of 'All X are Y' is 'There exists at least one X that is not Y', i.e., 'Some birds cannot fly'."
        },
        {
          id: "TLR1215_3_06",
          question: "Statement: 'If it is raining, then the ground is wet.' Which is logically equivalent?",
          hint: "The contrapositive is logically equivalent to the original.",
          options: [
            "If the ground is wet, it is raining",
            "If it is not raining, the ground is not wet",
            "If the ground is not wet, it is not raining",
            "If the ground is wet, it might be raining"
          ],
          correct: 2,
          explanation: "The contrapositive 'If not Q then not P' is equivalent to 'If P then Q'. So 'If the ground is not wet, it is not raining' is equivalent."
        },
        {
          id: "TLR1215_3_07",
          question: "In a group of 60 students: 35 play football, 30 play basketball, 25 play cricket, 15 play football & basketball, 10 play basketball & cricket, 12 play football & cricket, 5 play all three. How many play at least one sport?",
          hint: "Use 3-set inclusion-exclusion.",
          options: ["48", "53", "58", "63"],
          correct: 2,
          explanation: "|F∪B∪C| = 35+30+25−15−10−12+5 = 58."
        },
        {
          id: "TLR1215_3_08",
          question: "From the previous question, how many play none of the three sports?",
          hint: "None = Total − At least one.",
          options: ["0", "2", "5", "7"],
          correct: 1,
          explanation: "None = 60 − 58 = 2."
        },
        {
          id: "TLR1215_3_09",
          question: "The negation of 'Some students passed the exam' is:",
          hint: "Negation of 'Some X are Y' is 'No X are Y'.",
          options: [
            "All students passed the exam",
            "No student passed the exam",
            "Some students did not pass",
            "Most students failed"
          ],
          correct: 1,
          explanation: "The negation of 'Some X are Y' (there exists) is 'No X are Y' (for all, not Y). So 'No student passed the exam'."
        },
        {
          id: "TLR1215_3_10",
          question: "Given: If P then Q. If Q then R. If not R, what can you conclude?",
          hint: "Chain contrapositives: not R → not Q → not P.",
          options: [
            "P and Q",
            "Not P and not Q",
            "P but not Q",
            "Not P but Q"
          ],
          correct: 1,
          explanation: "Not R → not Q (contrapositive of Q→R). Not Q → not P (contrapositive of P→Q). So not P and not Q."
        },
        {
          id: "TLR1215_3_11",
          question: "100 students: 70 passed test A, 65 passed test B, 60 passed test C, 45 passed A&B, 40 passed A&C, 35 passed B&C, 25 passed all three. How many passed exactly two tests?",
          hint: "Exactly two = (A∩B + A∩C + B∩C) − 3×(A∩B∩C).",
          options: ["35", "40", "45", "50"],
          correct: 2,
          explanation: "Exactly two = (45−25)+(40−25)+(35−25) = 20+15+10 = 45."
        },
        {
          id: "TLR1215_3_12",
          question: "Which statement is the contrapositive of 'If a number is even, then its square is even'?",
          hint: "Contrapositive: If not Q, then not P.",
          options: [
            "If a square is even, the number is even",
            "If a number is odd, its square is odd",
            "If a square is odd, the number is odd",
            "If a square is odd, the number is even"
          ],
          correct: 2,
          explanation: "Original: If even → square even. Contrapositive: If square not even (odd) → number not even (odd)."
        },
        {
          id: "TLR1215_3_13",
          question: "150 people: 80 like tea, 70 like coffee, 60 like juice, 30 like tea & coffee, 25 like tea & juice, 20 like coffee & juice, 10 like all three. How many like only tea?",
          hint: "Only tea = |T| − |T∩C_off| − |T∩J| + |T∩C_off∩J|.",
          options: ["25", "35", "45", "55"],
          correct: 1,
          explanation: "Only tea = 80 − 30 − 25 + 10 = 35."
        },
        {
          id: "TLR1215_3_14",
          question: "The negation of 'No student is absent' is:",
          hint: "Negation of 'No X is Y' is 'Some X is Y'.",
          options: [
            "All students are absent",
            "Some students are absent",
            "Most students are absent",
            "Every student is present"
          ],
          correct: 1,
          explanation: "The negation of 'No X is Y' is 'At least one X is Y', i.e., 'Some students are absent'."
        },
        {
          id: "TLR1215_3_15",
          question: "Given: No fish can fly. All eagles can fly. Which MUST be true?",
          hint: "If all eagles can fly but no fish can fly, can any fish be an eagle?",
          options: [
            "Some fish are eagles",
            "No fish is an eagle",
            "All flying things are eagles",
            "Some eagles cannot fly"
          ],
          correct: 1,
          explanation: "All eagles can fly, but no fish can fly. If a fish were an eagle, it would have to fly — but no fish can fly. So no fish can be an eagle."
        },
        {
          id: "TLR1215_3_16",
          question: "200 students: 110 study Physics, 95 study Chemistry, 85 study Biology, 45 study Physics & Chemistry, 40 study Physics & Biology, 35 study Chemistry & Biology, 15 study all three. How many study at least one subject?",
          hint: "Use inclusion-exclusion for three sets.",
          options: ["175", "180", "185", "190"],
          correct: 2,
          explanation: "|P∪C∪B| = 110+95+85−45−40−35+15 = 185."
        },
        {
          id: "TLR1215_3_17",
          question: "Statement: 'If you eat healthy, you won't get sick.' Which scenario would DISPROVE this?",
          hint: "To disprove 'If P then Q', find a case where P is true but Q is false.",
          options: [
            "Someone eats unhealthy and gets sick",
            "Someone eats healthy and doesn't get sick",
            "Someone eats healthy and gets sick",
            "Someone doesn't eat healthy and doesn't get sick"
          ],
          correct: 2,
          explanation: "To disprove 'If P then Q', we need P true and Q false: someone eats healthy (P true) and gets sick (Q false)."
        },
        {
          id: "TLR1215_3_18",
          question: "From Q16 (200 students, at least one = 185), how many study none of the three subjects?",
          hint: "None = Total − At least one.",
          options: ["10", "15", "20", "25"],
          correct: 1,
          explanation: "None = 200 − 185 = 15."
        },
        {
          id: "TLR1215_3_19",
          question: "The negation of 'If it snows, school is cancelled' is:",
          hint: "Negation of 'If P then Q' is 'P and not Q'.",
          options: [
            "If it doesn't snow, school isn't cancelled",
            "It snows and school is not cancelled",
            "It doesn't snow and school is cancelled",
            "If school isn't cancelled, it doesn't snow"
          ],
          correct: 1,
          explanation: "The negation of 'If P then Q' is 'P and not Q': 'It snows and school is not cancelled'."
        },
        {
          id: "TLR1215_3_20",
          question: "80 people surveyed: 50 own a car, 40 own a bike, 30 own a scooter, 20 own car & bike, 15 own car & scooter, 10 own bike & scooter, 5 own all three. How many own exactly one vehicle?",
          hint: "Only car = 50−20−15+5=20. Only bike = 40−20−10+5=15. Only scooter = 30−15−10+5=10.",
          options: ["35", "40", "45", "50"],
          correct: 2,
          explanation: "Only car = 50−20−15+5 = 20. Only bike = 40−20−10+5 = 15. Only scooter = 30−15−10+5 = 10. Total exactly one = 20+15+10 = 45."
        }
      ]
    },
    // ── LEVEL 4 — Expert: Complex deduction, probability reasoning, multi-constraint ──
    {
      level: 4,
      name: "Expert",
      description: "Complex deduction chains, probability reasoning, and multi-constraint puzzles.",
      exercises: [
        {
          id: "TLR1215_4_01",
          question: "Five people — A, B, C, D, E — sit in seats 1–5 (left to right). E sits in seat 1. C sits in seat 3. A sits in an even-numbered seat. B is immediately to the right of A. Who sits in seat 4?",
          hint: "E=1, C=3. A must be in seat 2 or 4. B is immediately right of A.",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "E=1, C=3. A is in an even seat (2 or 4). B is immediately right of A. If A=2, B=3, but C=3 — conflict. So A=4, B=5, and D takes seat 2. Seat 4 = A."
        },
        {
          id: "TLR1215_4_02",
          question: "A bag has 5 red balls and 3 blue balls. You draw 2 balls without replacement. What is the probability both are red?",
          hint: "P = (5/8) × (4/7).",
          options: ["5/14", "5/28", "10/28", "25/64"],
          correct: 0,
          explanation: "P(both red) = (5/8) × (4/7) = 20/56 = 5/14."
        },
        {
          id: "TLR1215_4_03",
          question: "On an island, people are either truth-tellers (always tell truth) or liars (always lie). You meet A and B. A says: 'We are both liars.' What can you determine?",
          hint: "Can a truth-teller say 'We are both liars'? That would be a lie.",
          options: [
            "Both are truth-tellers",
            "A is a liar and B is a truth-teller",
            "A is a truth-teller and B is a liar",
            "Both are liars"
          ],
          correct: 1,
          explanation: "If A is a truth-teller, 'We are both liars' must be true — but then A is a liar, contradiction. So A is a liar. Since A is a liar, 'We are both liars' is false. A IS a liar, so for the statement to be false, B must NOT be a liar. Therefore B is a truth-teller."
        },
        {
          id: "TLR1215_4_04",
          question: "You flip a fair coin 3 times. What is the probability of getting exactly 2 heads?",
          hint: "Use combinations: C(3,2) × (1/2)³.",
          options: ["1/4", "3/8", "1/2", "1/8"],
          correct: 1,
          explanation: "P(exactly 2 heads) = C(3,2)/2³ = 3/8."
        },
        {
          id: "TLR1215_4_05",
          question: "Four people (A, B, C, D) each have a different pet (cat, dog, fish, bird). A doesn't have the cat or dog. B has the bird. C doesn't have the cat. What pet does D have?",
          hint: "B=bird. A not cat, not dog → A has fish. C not cat → C has dog. D has cat.",
          options: ["Cat", "Dog", "Fish", "Bird"],
          correct: 0,
          explanation: "B has bird. A doesn't have cat or dog, so A has fish (only option left). C doesn't have cat, so C has dog. D gets the remaining pet: cat."
        },
        {
          id: "TLR1215_4_06",
          question: "A standard die is rolled twice. What is the probability the sum is 7?",
          hint: "Count favorable outcomes out of 36 total.",
          options: ["1/9", "1/6", "5/36", "7/36"],
          correct: 1,
          explanation: "Pairs summing to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 pairs. P = 6/36 = 1/6."
        },
        {
          id: "TLR1215_4_07",
          question: "Five people sit around a circular table. In how many distinct ways can they be arranged?",
          hint: "Circular permutations of n people = (n−1)!",
          options: ["120", "24", "60", "12"],
          correct: 1,
          explanation: "Circular permutations = (5−1)! = 4! = 24."
        },
        {
          id: "TLR1215_4_08",
          question: "In a class, 60% of students play sport A, 50% play sport B, and 30% play both. If a student is chosen at random, what is the probability they play neither sport?",
          hint: "P(A∪B) = P(A)+P(B)−P(A∩B). P(neither) = 1−P(A∪B).",
          options: ["10%", "20%", "30%", "40%"],
          correct: 1,
          explanation: "P(A∪B) = 60%+50%−30% = 80%. P(neither) = 100%−80% = 20%."
        },
        {
          id: "TLR1215_4_09",
          question: "A, B, C, D, E are ranked 1st-5th. B is ranked 1st. E is ranked 2nd. A is ranked immediately above C. D is ranked 5th. What is A's rank?",
          hint: "B=1st, E=2nd, D=5th. A is immediately above C. Remaining ranks: 3,4 for A and C.",
          options: ["3rd", "4th", "5th", "Cannot determine"],
          correct: 0,
          explanation: "B=1st, E=2nd, D=5th. Remaining ranks 3 and 4 for A and C. A is immediately above C → A=3rd, C=4th."
        },
        {
          id: "TLR1215_4_10",
          question: "A box contains 4 red, 3 green, and 2 blue marbles. If 3 marbles are drawn at random, what is the probability all three are the same color?",
          hint: "Only colors with at least 3 marbles can contribute: red (4) and green (3).",
          options: ["5/84", "4/84", "1/21", "1/28"],
          correct: 0,
          explanation: "C(4,3) = 4 (all red) + C(3,3) = 1 (all green) = 5 favorable. Total: C(9,3) = 84. P = 5/84."
        },
        {
          id: "TLR1215_4_11",
          question: "There are 3 boxes. One has gold, two are empty. You pick box 1. The host opens box 3 (empty). Should you switch to box 2?",
          hint: "This is the Monty Hall problem.",
          options: [
            "Doesn't matter — 50/50 either way",
            "Yes — switching gives 2/3 chance",
            "No — staying gives 2/3 chance",
            "Yes — switching gives 3/4 chance"
          ],
          correct: 1,
          explanation: "The Monty Hall problem: your initial pick has 1/3 chance. The other door has 2/3 chance. Switching wins 2/3 of the time."
        },
        {
          id: "TLR1215_4_12",
          question: "Six people must be seated in a row. Person X must sit next to person Y. How many valid arrangements exist?",
          hint: "Treat X and Y as one unit (2 internal arrangements), then arrange 5 units.",
          options: ["120", "240", "360", "720"],
          correct: 1,
          explanation: "Treat XY as one block: 5! arrangements × 2 (XY or YX) = 120 × 2 = 240."
        },
        {
          id: "TLR1215_4_13",
          question: "Two dice are rolled. What is the probability the product of the two numbers is even?",
          hint: "P(product even) = 1 − P(product odd). Product is odd only if both dice are odd.",
          options: ["1/2", "3/4", "2/3", "5/6"],
          correct: 1,
          explanation: "Product is odd only when both dice are odd: P(both odd) = (3/6)×(3/6) = 1/4. P(product even) = 1 − 1/4 = 3/4."
        },
        {
          id: "TLR1215_4_14",
          question: "A, B, C, D play a tournament. Each pair plays once. A beat B, C, and D. B beat C. D beat B and C. How many games did C win?",
          hint: "List all 6 games and their outcomes.",
          options: ["0", "1", "2", "3"],
          correct: 0,
          explanation: "Games: A>B, A>C, A>D, B>C, D>B, D>C. C lost to A, B, and D. C won 0 games."
        },
        {
          id: "TLR1215_4_15",
          question: "From a group of 4 boys and 3 girls, a committee of 3 is formed. What is the probability the committee has at least one girl?",
          hint: "P(at least one girl) = 1 − P(all boys).",
          options: ["31/35", "34/35", "6/7", "5/7"],
          correct: 0,
          explanation: "Total committees: C(7,3) = 35. All boys: C(4,3) = 4. P(at least one girl) = 1 − 4/35 = 31/35."
        },
        {
          id: "TLR1215_4_16",
          question: "In how many ways can the letters of the word 'APPLE' be arranged?",
          hint: "5 letters with P repeated twice: 5!/2!.",
          options: ["40", "60", "80", "120"],
          correct: 1,
          explanation: "5 letters, P appears twice. Arrangements = 5!/2! = 120/2 = 60."
        },
        {
          id: "TLR1215_4_17",
          question: "A bag has 6 red and 4 white balls. Two balls are drawn without replacement. What is the probability of getting one red and one white ball?",
          hint: "P = [C(6,1)×C(4,1)] / C(10,2). Or compute P(RW)+P(WR).",
          options: ["8/15", "6/15", "12/45", "24/90"],
          correct: 0,
          explanation: "P = C(6,1)×C(4,1)/C(10,2) = 24/45 = 8/15."
        },
        {
          id: "TLR1215_4_18",
          question: "In a truth-teller/liar puzzle: A says 'I am a liar.' What can you conclude?",
          hint: "Can a truth-teller say 'I am a liar'? Can a liar say 'I am a liar'?",
          options: [
            "A is a truth-teller",
            "A is a liar",
            "The statement is a paradox — A is neither",
            "A could be either"
          ],
          correct: 2,
          explanation: "If A is a truth-teller, the statement 'I am a liar' would be false — contradiction. If A is a liar, 'I am a liar' would be true — contradiction (liars can't make true statements). This is a classic paradox."
        },
        {
          id: "TLR1215_4_19",
          question: "You have 12 identical-looking coins. One is counterfeit and lighter. Using a balance scale, what is the minimum number of weighings needed to guarantee finding the counterfeit coin?",
          hint: "Each weighing has 3 outcomes: left heavy, balanced, right heavy. 3^n ≥ 12.",
          options: ["2", "3", "4", "5"],
          correct: 1,
          explanation: "Divide into 3 groups of 4. Weigh group 1 vs group 2. If balanced, counterfeit is in group 3. Then divide the suspect group of 4 into groups of 2, 1, 1. This always identifies the coin in 3 weighings. 3^3 = 27 ≥ 12, so 3 is sufficient."
        },
        {
          id: "TLR1215_4_20",
          question: "A 4-digit number ABCD is divisible by 11. A=2, B=5, D=3. What is C?",
          hint: "Divisibility by 11: (A+C) − (B+D) must be divisible by 11.",
          options: ["4", "6", "8", "0"],
          correct: 1,
          explanation: "Rule for 11: (A+C)−(B+D) is a multiple of 11. (2+C)−(5+3) = C−6. For this to be 0 or ±11: C−6=0 → C=6, or C−6=11 → C=17 (impossible), or C−6=−11 → C=−5 (impossible). So C=6."
        }
      ]
    }
  ]
};

// ============================================================
// 2. SPATIAL REASONING  (TRAINING_SR_12_15)
// ============================================================
const TRAINING_SR_12_15 = {
  tips: [
    "For painted-cube problems, remember: corners have 3 painted faces, edges have 2, face-centers have 1, and inner cubes have 0.",
    "When folding a net into a cube, opposite faces never share an edge in the net — use this to identify which face is opposite which.",
    "For cross-section problems, imagine slicing the shape with a flat plane and trace where the plane meets each face.",
    "When counting faces of glued cubes, subtract 2 faces for each connection point (one face from each cube is hidden)."
  ],
  levels: [
    // ── LEVEL 1 — Foundation: Cube face counting, basic painted-cube ──
    {
      level: 1,
      name: "Foundation",
      description: "Counting visible/hidden faces of glued cubes and basic 3×3×3 painted-cube problems.",
      exercises: [
        {
          id: "TSR1215_1_01",
          question: "A single cube has 6 faces. If two identical cubes are glued together face-to-face, how many faces are visible in total?",
          hint: "Each cube loses 1 face at the joint. Total visible = 2×6 − 2×1.",
          options: ["10", "11", "12", "8"],
          correct: 0,
          explanation: "2 cubes × 6 faces = 12. Gluing hides 1 face from each cube (2 faces total). Visible = 12 − 2 = 10."
        },
        {
          id: "TSR1215_1_02",
          question: "Three cubes are glued in a straight line (each sharing one face with its neighbor). How many faces are visible?",
          hint: "3 cubes × 6 faces = 18. 2 joints × 2 hidden faces per joint = 4 hidden.",
          options: ["12", "14", "16", "13"],
          correct: 1,
          explanation: "Total faces = 18. There are 2 joints, each hiding 2 faces. Visible = 18 − 4 = 14."
        },
        {
          id: "TSR1215_1_03",
          question: "A 3×3×3 cube is made of 27 unit cubes and the outside is painted. How many unit cubes have exactly 3 painted faces?",
          hint: "Which unit cubes have 3 faces on the outside? Only corner cubes.",
          options: ["4", "6", "8", "12"],
          correct: 2,
          explanation: "A cube has 8 corners. Each corner unit cube has 3 painted faces. Answer: 8."
        },
        {
          id: "TSR1215_1_04",
          question: "A 3×3×3 painted cube: how many unit cubes have exactly 2 painted faces?",
          hint: "Edge cubes (not corners) have 2 painted faces. Each edge has 1 such cube in a 3×3×3.",
          options: ["8", "10", "12", "6"],
          correct: 2,
          explanation: "A cube has 12 edges. In a 3×3×3, each edge has 3−2 = 1 middle cube with 2 painted faces. Total = 12 × 1 = 12."
        },
        {
          id: "TSR1215_1_05",
          question: "A 3×3×3 painted cube: how many unit cubes have exactly 1 painted face?",
          hint: "Face-center cubes have exactly 1 painted face. Each face has 1 center cube.",
          options: ["4", "6", "8", "12"],
          correct: 1,
          explanation: "Each of the 6 faces has 1 center cube (not on any edge or corner) with 1 painted face. Total = 6."
        },
        {
          id: "TSR1215_1_06",
          question: "A 3×3×3 painted cube: how many unit cubes have 0 painted faces?",
          hint: "Only the very center of the cube has no paint.",
          options: ["0", "1", "2", "4"],
          correct: 1,
          explanation: "Only the single center cube (layer 2, row 2, column 2) has no painted faces. Answer: 1."
        },
        {
          id: "TSR1215_1_07",
          question: "Four unit cubes are arranged in an L-shape on a table (3 in a row, 1 on top of one end). How many faces are visible (not touching the table or another cube)?",
          hint: "Count total faces, subtract hidden (table-touching + glue joints).",
          options: ["14", "15", "16", "17"],
          correct: 1,
          explanation: "4 cubes × 6 = 24 total faces. Table-touching: 3 bottom cubes × 1 = 3. Joints: row has 2 joints (4 hidden faces) + stacking joint (2 hidden faces) = 6. Total hidden = 3 + 6 = 9. Visible = 24 − 9 = 15."
        },
        {
          id: "TSR1215_1_08",
          question: "If you stack 5 unit cubes in a single tower, how many faces are visible (the tower sits on a table)?",
          hint: "5×6 = 30 total. 4 joints = 8 hidden. 1 face on table = 1 hidden.",
          options: ["20", "21", "22", "23"],
          correct: 1,
          explanation: "Total = 30 faces. Joints: 4 connections × 2 faces = 8. Table: bottom face = 1. Hidden = 8 + 1 = 9. Visible = 30 − 9 = 21."
        },
        {
          id: "TSR1215_1_09",
          question: "A 3×3×3 cube is painted. The cube is then disassembled. How many painted unit-cube faces are there in total?",
          hint: "The surface area of the 3×3×3 cube equals the total number of painted faces.",
          options: ["27", "48", "54", "36"],
          correct: 2,
          explanation: "Surface area of 3×3×3 cube = 6 × 3² = 6 × 9 = 54 painted unit faces."
        },
        {
          id: "TSR1215_1_10",
          question: "Two unit cubes are placed side by side on a table (sharing one face). How many faces are visible?",
          hint: "2×6=12 total. 1 joint = 2 hidden. 2 table faces = 2 hidden.",
          options: ["7", "8", "9", "10"],
          correct: 1,
          explanation: "Total = 12. Hidden: 2 (joint) + 2 (table) = 4. Visible = 12 − 4 = 8."
        },
        {
          id: "TSR1215_1_11",
          question: "A 3×3×3 painted cube: verify that 8 + 12 + 6 + 1 = ?",
          hint: "Sum the cubes with 3, 2, 1, and 0 painted faces.",
          options: ["26", "27", "28", "25"],
          correct: 1,
          explanation: "8 (corners) + 12 (edges) + 6 (face centers) + 1 (inner) = 27 = 3³. Correct!"
        },
        {
          id: "TSR1215_1_12",
          question: "Six unit cubes are arranged in a 2×3 flat rectangle on a table. How many faces are visible?",
          hint: "6×6=36 total. Count joints (7 adjacencies = 14 hidden) + 6 table faces.",
          options: ["14", "16", "18", "20"],
          correct: 1,
          explanation: "Total = 36. Adjacencies in a 2×3 grid: 4 horizontal + 3 vertical = 7, hiding 14 faces. Table = 6 hidden. Total hidden = 20. Visible = 36 − 20 = 16."
        },
        {
          id: "TSR1215_1_13",
          question: "A 2×2×2 cube is made of 8 unit cubes and painted. How many unit cubes have exactly 3 painted faces?",
          hint: "In a 2×2×2 cube, every unit cube is a corner cube.",
          options: ["4", "6", "8", "2"],
          correct: 2,
          explanation: "A 2×2×2 cube has 8 unit cubes, and ALL of them are corner cubes. Each has 3 painted faces. Answer: 8."
        },
        {
          id: "TSR1215_1_14",
          question: "A 2×2×2 painted cube: how many unit cubes have exactly 2 painted faces?",
          hint: "Edge cubes that are NOT corners. In a 2×2×2, every edge cube is also a corner.",
          options: ["0", "4", "8", "12"],
          correct: 0,
          explanation: "In a 2×2×2 cube, every unit cube is a corner (3 painted faces). There are no cubes with exactly 2 painted faces. Answer: 0."
        },
        {
          id: "TSR1215_1_15",
          question: "You glue 4 cubes into a 2×2 square on a table. How many faces are visible?",
          hint: "4×6=24 total. 4 adjacencies = 8 hidden joint faces. 4 table faces.",
          options: ["12", "14", "16", "18"],
          correct: 0,
          explanation: "Total = 24. In a 2×2 grid there are 4 adjacencies → 8 hidden faces. Table = 4 hidden. Total hidden = 12. Visible = 24 − 12 = 12."
        },
        {
          id: "TSR1215_1_16",
          question: "How many faces does a cube have?",
          hint: "Count the flat surfaces.",
          options: ["4", "6", "8", "12"],
          correct: 1,
          explanation: "A cube has 6 faces."
        },
        {
          id: "TSR1215_1_17",
          question: "How many edges does a cube have?",
          hint: "Count the line segments where two faces meet.",
          options: ["6", "8", "10", "12"],
          correct: 3,
          explanation: "A cube has 12 edges."
        },
        {
          id: "TSR1215_1_18",
          question: "How many vertices (corners) does a cube have?",
          hint: "Count the points where three edges meet.",
          options: ["4", "6", "8", "10"],
          correct: 2,
          explanation: "A cube has 8 vertices."
        },
        {
          id: "TSR1215_1_19",
          question: "For any convex polyhedron, Euler's formula states V − E + F = 2. For a cube (V=8, E=12, F=6), verify: 8 − 12 + 6 = ?",
          hint: "Just compute the arithmetic.",
          options: ["0", "1", "2", "3"],
          correct: 2,
          explanation: "8 − 12 + 6 = 2. Euler's formula confirmed."
        },
        {
          id: "TSR1215_1_20",
          question: "You glue 8 unit cubes into a 2×2×2 cube. How many faces are visible?",
          hint: "Total faces = 48. Count internal adjacencies.",
          options: ["20", "24", "28", "32"],
          correct: 1,
          explanation: "Total = 8×6 = 48. In a 2×2×2 cube there are 12 internal adjacencies (each hides 2 faces). Hidden = 12×2 = 24. Visible = 48−24 = 24. This also equals the surface area: 6×(2²) = 24."
        }
      ]
    },
    // ── LEVEL 2 — Developing: Edge/corner/face problems, net folding, cross-sections ──
    {
      level: 2,
      name: "Developing",
      description: "Edge, corner, and face analysis; net folding identification; cross-section shapes.",
      exercises: [
        {
          id: "TSR1215_2_01",
          question: "Which of the following CANNOT be a net of a cube?",
          hint: "A valid cube net has 6 squares. Four in a row with one on each side of different squares is valid; four in a row with both extras on the same side is not always valid.",
          options: [
            "A T-shape (4 in a column, 1 left of 2nd, 1 right of 2nd)",
            "A cross/plus shape (1-3-1-1 pattern)",
            "Four squares in a row with 2 squares on the same side of one square",
            "A straight line of 6 squares"
          ],
          correct: 3,
          explanation: "Six squares in a straight line cannot fold into a cube — the 4th and 1st squares would overlap. All other options are valid cube nets."
        },
        {
          id: "TSR1215_2_02",
          question: "If you slice a cube with a plane passing through the midpoints of three edges that share a common vertex, the cross-section is:",
          hint: "Three midpoints of edges meeting at one corner form what shape?",
          options: ["A square", "An equilateral triangle", "A rectangle", "A hexagon"],
          correct: 1,
          explanation: "Cutting through the midpoints of three edges meeting at one vertex creates an equilateral triangle."
        },
        {
          id: "TSR1215_2_03",
          question: "A tetrahedron has how many edges?",
          hint: "A tetrahedron has 4 triangular faces. Use Euler's formula or count directly.",
          options: ["4", "6", "8", "10"],
          correct: 1,
          explanation: "A tetrahedron has 4 vertices and each pair of vertices is connected. C(4,2) = 6 edges."
        },
        {
          id: "TSR1215_2_04",
          question: "A cube net is a cross shape (+). If the center square is the bottom face, which square becomes the top face?",
          hint: "In a cross net, the center is surrounded by 4 faces. The one NOT adjacent to the center in the net folds to be opposite.",
          options: [
            "The square directly above the center in the net",
            "The square two above the center in the net",
            "The square to the left of center",
            "The square to the right of center"
          ],
          correct: 1,
          explanation: "In a cross-shaped net with the center as bottom, the top face is the square two positions away (across from the center). It folds over to become the opposite face."
        },
        {
          id: "TSR1215_2_05",
          question: "If you cut a cylinder with a plane parallel to its base, the cross-section is:",
          hint: "Think about what shape the parallel slice creates.",
          options: ["An ellipse", "A circle", "A rectangle", "A triangle"],
          correct: 1,
          explanation: "A plane parallel to the base of a cylinder creates a circle (same shape as the base)."
        },
        {
          id: "TSR1215_2_06",
          question: "If you cut a cylinder with a plane perpendicular to its base (through the center), the cross-section is:",
          hint: "Imagine slicing the cylinder straight down the middle.",
          options: ["A circle", "An ellipse", "A rectangle", "A triangle"],
          correct: 2,
          explanation: "A vertical cut through the center of a cylinder produces a rectangle (width = diameter, height = cylinder height)."
        },
        {
          id: "TSR1215_2_07",
          question: "A triangular prism has how many faces?",
          hint: "Count the top, bottom, and side faces.",
          options: ["3", "4", "5", "6"],
          correct: 2,
          explanation: "A triangular prism has 2 triangular faces (top and bottom) + 3 rectangular side faces = 5 faces."
        },
        {
          id: "TSR1215_2_08",
          question: "A triangular prism has how many edges?",
          hint: "3 on top triangle + 3 on bottom triangle + 3 connecting them.",
          options: ["6", "8", "9", "12"],
          correct: 2,
          explanation: "3 edges on top + 3 on bottom + 3 vertical = 9 edges."
        },
        {
          id: "TSR1215_2_09",
          question: "If you slice a cone with a plane parallel to its base (not through the apex), the cross-section is:",
          hint: "Parallel to the circular base produces a similar shape.",
          options: ["A triangle", "An ellipse", "A circle", "A parabola"],
          correct: 2,
          explanation: "A horizontal cut through a cone (parallel to base) creates a circle."
        },
        {
          id: "TSR1215_2_10",
          question: "A right square pyramid (square base, apex above center) has how many edges?",
          hint: "4 base edges + 4 edges from base corners to apex.",
          options: ["6", "8", "10", "12"],
          correct: 1,
          explanation: "4 base edges + 4 lateral edges = 8 edges."
        },
        {
          id: "TSR1215_2_11",
          question: "If you slice a cube with a plane that passes through 4 edge midpoints forming a rectangle (not cutting through corners), the cross-section is:",
          hint: "The plane cuts parallel to two faces and through the midpoints of 4 edges.",
          options: ["A square", "A rectangle", "A triangle", "A hexagon"],
          correct: 1,
          explanation: "Such a cut produces a rectangle. If the cube has side length s and the cut goes through midpoints of 4 parallel edges, it creates a rectangle."
        },
        {
          id: "TSR1215_2_12",
          question: "How many different nets can a cube have (distinct configurations, not counting rotations/reflections)?",
          hint: "This is a well-known enumeration problem.",
          options: ["6", "8", "11", "15"],
          correct: 2,
          explanation: "A cube has exactly 11 distinct nets."
        },
        {
          id: "TSR1215_2_13",
          question: "A pentagonal prism has how many vertices?",
          hint: "Pentagon on top + pentagon on bottom.",
          options: ["5", "7", "10", "12"],
          correct: 2,
          explanation: "5 vertices on top + 5 on bottom = 10 vertices."
        },
        {
          id: "TSR1215_2_14",
          question: "A pentagonal prism has how many faces?",
          hint: "2 pentagonal faces + 5 rectangular side faces.",
          options: ["5", "7", "10", "12"],
          correct: 1,
          explanation: "2 pentagonal bases + 5 rectangular sides = 7 faces."
        },
        {
          id: "TSR1215_2_15",
          question: "If a cube with side length 4 is sliced exactly in half by a plane parallel to one face, what is the shape and area of the cross-section?",
          hint: "Parallel to a face means the cross-section is a square.",
          options: [
            "Square, area 8",
            "Square, area 16",
            "Rectangle, area 16",
            "Square, area 12"
          ],
          correct: 1,
          explanation: "A cut parallel to a face of a cube with side 4 produces a square of side 4. Area = 4² = 16."
        },
        {
          id: "TSR1215_2_16",
          question: "How many faces does an octahedron have?",
          hint: "Think of two square pyramids base-to-base.",
          options: ["6", "8", "10", "12"],
          correct: 1,
          explanation: "A regular octahedron has 8 equilateral triangular faces."
        },
        {
          id: "TSR1215_2_17",
          question: "For a regular octahedron, how many vertices does it have?",
          hint: "Picture the shape: points at top, bottom, and 4 around the middle.",
          options: ["4", "6", "8", "12"],
          correct: 1,
          explanation: "A regular octahedron has 6 vertices."
        },
        {
          id: "TSR1215_2_18",
          question: "For a regular octahedron, how many edges does it have?",
          hint: "Use Euler's formula: V − E + F = 2. We know V=6, F=8.",
          options: ["10", "12", "14", "16"],
          correct: 1,
          explanation: "Euler: 6 − E + 8 = 2 → E = 12."
        },
        {
          id: "TSR1215_2_19",
          question: "If you cut a sphere with any plane, the cross-section is always:",
          hint: "A sphere is perfectly symmetric in all directions.",
          options: ["An ellipse", "A circle", "An oval", "Depends on the angle"],
          correct: 1,
          explanation: "Any planar cross-section of a sphere is a circle."
        },
        {
          id: "TSR1215_2_20",
          question: "A hexagonal prism has how many edges?",
          hint: "6 top + 6 bottom + 6 vertical.",
          options: ["12", "14", "18", "24"],
          correct: 2,
          explanation: "6 top edges + 6 bottom edges + 6 connecting edges = 18 edges."
        }
      ]
    },
    // ── LEVEL 3 — Advanced: 4×4×4 painted cube, combined shapes surface area ──
    {
      level: 3,
      name: "Advanced",
      description: "4×4×4 painted cube problems and combined-shapes surface area.",
      exercises: [
        {
          id: "TSR1215_3_01",
          question: "A 4×4×4 cube is made of 64 unit cubes and painted. How many unit cubes have exactly 3 painted faces?",
          hint: "Only corner cubes have 3 painted faces. How many corners does a cube have?",
          options: ["4", "8", "12", "16"],
          correct: 1,
          explanation: "Any cube has 8 corners, regardless of size. Each corner unit cube has 3 painted faces. Answer: 8."
        },
        {
          id: "TSR1215_3_02",
          question: "A 4×4×4 painted cube: how many unit cubes have exactly 2 painted faces?",
          hint: "Edge cubes (excluding corners). Each edge of a 4×4×4 has (4−2) = 2 such cubes.",
          options: ["12", "24", "36", "48"],
          correct: 1,
          explanation: "12 edges × (4−2) cubes per edge = 12 × 2 = 24."
        },
        {
          id: "TSR1215_3_03",
          question: "A 4×4×4 painted cube: how many unit cubes have exactly 1 painted face?",
          hint: "Face-center cubes. Each face has (4−2)² = 4 such cubes.",
          options: ["6", "12", "24", "36"],
          correct: 2,
          explanation: "6 faces × (4−2)² = 6 × 4 = 24."
        },
        {
          id: "TSR1215_3_04",
          question: "A 4×4×4 painted cube: how many unit cubes have 0 painted faces?",
          hint: "Inner cubes form a (4−2)³ cube.",
          options: ["4", "8", "12", "16"],
          correct: 1,
          explanation: "Inner cubes: (4−2)³ = 2³ = 8."
        },
        {
          id: "TSR1215_3_05",
          question: "Verify: for a 4×4×4 cube, 8 + 24 + 24 + 8 = ?",
          hint: "Sum all categories of painted faces.",
          options: ["56", "60", "64", "72"],
          correct: 2,
          explanation: "8 + 24 + 24 + 8 = 64 = 4³. All unit cubes accounted for."
        },
        {
          id: "TSR1215_3_06",
          question: "A cube with side 5 cm has a smaller cube with side 2 cm glued on top (centered on the top face). What is the total surface area of the combined shape?",
          hint: "Large cube SA = 6×25. Small cube SA = 6×4. Subtract 2× the contact area (2×2).",
          options: ["166 cm²", "170 cm²", "174 cm²", "178 cm²"],
          correct: 0,
          explanation: "Large cube SA = 6×25 = 150. Small cube SA = 6×4 = 24. Contact area = 2² = 4 hidden on each cube. Total = 150 + 24 − 2×4 = 166 cm²."
        },
        {
          id: "TSR1215_3_07",
          question: "For an n×n×n painted cube, the formula for unit cubes with exactly 2 painted faces is 12(n−2). For n=5, how many?",
          hint: "Plug n=5 into the formula.",
          options: ["24", "36", "48", "60"],
          correct: 1,
          explanation: "12 × (5−2) = 12 × 3 = 36."
        },
        {
          id: "TSR1215_3_08",
          question: "For an n×n×n painted cube, unit cubes with exactly 1 painted face = 6(n−2)². For n=5?",
          hint: "Plug n=5 into 6(n−2)².",
          options: ["24", "36", "54", "96"],
          correct: 2,
          explanation: "6 × (5−2)² = 6 × 9 = 54."
        },
        {
          id: "TSR1215_3_09",
          question: "For an n×n×n painted cube, unit cubes with 0 painted faces = (n−2)³. For n=5?",
          hint: "Plug n=5 into (n−2)³.",
          options: ["8", "27", "64", "125"],
          correct: 1,
          explanation: "(5−2)³ = 3³ = 27."
        },
        {
          id: "TSR1215_3_10",
          question: "Two identical cubes of side 3 cm are glued together sharing an entire face. What is the surface area of the resulting rectangular prism?",
          hint: "The result is a 3×3×6 rectangular prism.",
          options: ["90 cm²", "108 cm²", "126 cm²", "72 cm²"],
          correct: 0,
          explanation: "Combined shape: 3×3×6 prism. SA = 2(3×3 + 3×6 + 3×6) = 2(9+18+18) = 2×45 = 90 cm²."
        },
        {
          id: "TSR1215_3_11",
          question: "A 4×4×4 cube is painted and then cut into 64 unit cubes. How many unit cubes have at least 1 painted face?",
          hint: "At least 1 = Total − 0 painted faces.",
          options: ["48", "52", "56", "60"],
          correct: 2,
          explanation: "0 painted faces = (4−2)³ = 8. At least 1 = 64 − 8 = 56."
        },
        {
          id: "TSR1215_3_12",
          question: "A cube of side 6 has a cube of side 2 removed from one corner. How many faces does the resulting solid have?",
          hint: "Removing a corner cube exposes 3 new faces but removes parts of 3 original faces.",
          options: ["6", "9", "12", "8"],
          correct: 1,
          explanation: "The original cube has 6 faces. Removing a corner cube exposes 3 new square faces (the inner cuts). The 3 original faces that had the corner are now L-shaped but still count as faces. Total distinct flat faces = 6 + 3 = 9."
        },
        {
          id: "TSR1215_3_13",
          question: "For an n×n×n painted cube, the total number of painted unit-cube-faces is:",
          hint: "It equals the surface area of the large cube.",
          options: ["6n²", "6n³", "6(n−1)²", "n³"],
          correct: 0,
          explanation: "The total painted faces = surface area = 6n²."
        },
        {
          id: "TSR1215_3_14",
          question: "A 5×5×5 cube is made of unit cubes and painted. How many unit cubes have exactly 3 painted faces?",
          hint: "Corner cubes always.",
          options: ["4", "8", "12", "20"],
          correct: 1,
          explanation: "Every cube has 8 corners. Answer: 8."
        },
        {
          id: "TSR1215_3_15",
          question: "A 10×10×10 cube is painted. How many unit cubes have exactly 0 painted faces?",
          hint: "(n−2)³ with n=10.",
          options: ["216", "343", "512", "729"],
          correct: 2,
          explanation: "(10−2)³ = 8³ = 512."
        },
        {
          id: "TSR1215_3_16",
          question: "A hemisphere of radius r has total surface area (curved + flat base) equal to:",
          hint: "Curved part = half a sphere = 2πr². Flat base = πr².",
          options: ["2πr²", "3πr²", "4πr²", "πr²"],
          correct: 1,
          explanation: "Hemisphere SA = curved (2πr²) + base (πr²) = 3πr²."
        },
        {
          id: "TSR1215_3_17",
          question: "A solid is formed by placing a cone (radius 3, height 4) on top of a cylinder (radius 3, height 5). What is the total surface area? (Use π ≈ 3.14, slant height of cone = 5)",
          hint: "SA = cylinder lateral + cylinder base + cone lateral. Top of cylinder is hidden, bottom of cone is hidden.",
          options: ["150.72", "169.56", "175.84", "188.40"],
          correct: 1,
          explanation: "Cylinder lateral = 2π(3)(5) = 30π. Cylinder bottom base = π(3²) = 9π. Cone lateral = π(3)(5) = 15π. (Cone base and cylinder top are internal and hidden.) Total = 30π + 9π + 15π = 54π ≈ 54 × 3.14 = 169.56."
        },
        {
          id: "TSR1215_3_18",
          question: "A cube of side 4 is painted red. If one face is repainted blue, how many unit cubes have both red and blue paint?",
          hint: "The repainted face's edge and corner cubes also touch red faces.",
          options: ["4", "8", "12", "16"],
          correct: 2,
          explanation: "The repainted face is 4×4 = 16 unit faces. Of these 16 unit cubes, only the edge/corner cubes of that face also touch other (red) faces. The border cubes of a 4×4 face: 4×4 − 2×2 = 12. These 12 cubes have blue on the repainted face and red on at least one other face."
        },
        {
          id: "TSR1215_3_19",
          question: "A rectangular prism is 3×4×5. What is its surface area?",
          hint: "SA = 2(lw + lh + wh).",
          options: ["84", "94", "104", "120"],
          correct: 1,
          explanation: "SA = 2(3×4 + 3×5 + 4×5) = 2(12 + 15 + 20) = 2(47) = 94."
        },
        {
          id: "TSR1215_3_20",
          question: "Two cylinders of radius 2 and height 3 are glued end-to-end (sharing a circular face). What is the total surface area? (Leave in terms of π)",
          hint: "Combined = cylinder of radius 2, height 6 = 2 bases + lateral area.",
          options: ["28π", "32π", "36π", "40π"],
          correct: 1,
          explanation: "Result is a cylinder with r=2, h=6. SA = 2πr² + 2πrh = 2π(4) + 2π(2)(6) = 8π + 24π = 32π."
        }
      ]
    },
    // ── LEVEL 4 — Expert: Polyhedra, complex 3D, unfolded cube reasoning ──
    {
      level: 4,
      name: "Expert",
      description: "Octahedron/dodecahedron properties, complex 3D problems, and unfolded-cube reasoning.",
      exercises: [
        {
          id: "TSR1215_4_01",
          question: "A regular dodecahedron has how many faces?",
          hint: "Dodeca = 12 in Greek.",
          options: ["10", "12", "14", "20"],
          correct: 1,
          explanation: "A regular dodecahedron has 12 pentagonal faces."
        },
        {
          id: "TSR1215_4_02",
          question: "A regular dodecahedron has how many vertices?",
          hint: "Each pentagonal face has 5 vertices, but each vertex is shared by 3 faces. V = 12×5/3.",
          options: ["12", "15", "20", "24"],
          correct: 2,
          explanation: "V = 12 × 5 / 3 = 20 vertices."
        },
        {
          id: "TSR1215_4_03",
          question: "A regular dodecahedron has how many edges?",
          hint: "Use Euler's formula: V − E + F = 2. V=20, F=12.",
          options: ["24", "28", "30", "36"],
          correct: 2,
          explanation: "Euler: 20 − E + 12 = 2 → E = 30."
        },
        {
          id: "TSR1215_4_04",
          question: "A regular icosahedron has how many faces?",
          hint: "Icosa = 20 in Greek.",
          options: ["12", "16", "20", "24"],
          correct: 2,
          explanation: "A regular icosahedron has 20 equilateral triangular faces."
        },
        {
          id: "TSR1215_4_05",
          question: "A regular icosahedron has how many edges?",
          hint: "Each triangular face has 3 edges, each edge shared by 2 faces. E = 20×3/2.",
          options: ["24", "28", "30", "36"],
          correct: 2,
          explanation: "E = 20 × 3 / 2 = 30 edges."
        },
        {
          id: "TSR1215_4_06",
          question: "A regular icosahedron has how many vertices?",
          hint: "Euler: V − 30 + 20 = 2.",
          options: ["8", "10", "12", "14"],
          correct: 2,
          explanation: "Euler: V − 30 + 20 = 2 → V = 12."
        },
        {
          id: "TSR1215_4_07",
          question: "A cube net has numbers on each square: 1(left), 2(bottom-left), 3(center), 4(top), 5(right), 6(far-right), arranged as a cross with 3 as center. If 3 is the bottom face when folded, what number is on the top face?",
          hint: "In a cross net, the face opposite the center is the one two steps away in the arm direction.",
          options: ["1", "4", "5", "6"],
          correct: 1,
          explanation: "In a cross net with 3 as center (bottom), the face opposite (top) is 4, which is the square directly opposite 3 in the net's arm."
        },
        {
          id: "TSR1215_4_08",
          question: "If you truncate a cube (cut off all 8 corners symmetrically), how many faces does the resulting truncated cube have?",
          hint: "Original 6 faces (now octagons) + 8 new faces (one triangle per cut corner).",
          options: ["12", "14", "16", "20"],
          correct: 1,
          explanation: "6 original faces (become octagons) + 8 new triangular faces = 14 faces."
        },
        {
          id: "TSR1215_4_09",
          question: "The dual of a cube is a(n):",
          hint: "The dual swaps vertices and faces.",
          options: ["Tetrahedron", "Octahedron", "Dodecahedron", "Icosahedron"],
          correct: 1,
          explanation: "The dual of a cube is an octahedron. Cube has 6 faces → octahedron has 6 vertices. Cube has 8 vertices → octahedron has 8 faces."
        },
        {
          id: "TSR1215_4_10",
          question: "A cube is inscribed in a sphere. If the sphere has radius r, the side length of the cube is:",
          hint: "The space diagonal of the cube equals the diameter. Space diagonal = s√3 = 2r.",
          options: ["r√3", "2r/√3", "r√2", "2r/√2"],
          correct: 1,
          explanation: "Space diagonal = s√3 = 2r, so s = 2r/√3."
        },
        {
          id: "TSR1215_4_11",
          question: "How many planes of symmetry does a cube have?",
          hint: "3 through opposite face centers + 6 through opposite edges.",
          options: ["6", "9", "12", "13"],
          correct: 1,
          explanation: "A cube has 9 planes of symmetry: 3 through pairs of opposite face centers, and 6 through pairs of opposite edges."
        },
        {
          id: "TSR1215_4_12",
          question: "A regular tetrahedron has how many planes of symmetry?",
          hint: "Each plane passes through one edge and the midpoint of the opposite edge.",
          options: ["3", "4", "6", "8"],
          correct: 2,
          explanation: "A regular tetrahedron has 6 planes of symmetry."
        },
        {
          id: "TSR1215_4_13",
          question: "If a regular octahedron has edge length a, its volume is:",
          hint: "Volume = (√2/3)a³.",
          options: ["(√2/3)a³", "(√3/2)a³", "a³/3", "(2√2/3)a³"],
          correct: 0,
          explanation: "The volume of a regular octahedron with edge a = (√2/3)a³."
        },
        {
          id: "TSR1215_4_14",
          question: "You fold a cube from a net. Two faces in the net that share an edge will, once folded, be:",
          hint: "Shared edges in the net remain shared in the cube.",
          options: ["Opposite faces", "Adjacent faces", "The same face", "Cannot determine"],
          correct: 1,
          explanation: "Faces that share an edge in the net will be adjacent (share an edge) on the cube."
        },
        {
          id: "TSR1215_4_15",
          question: "A sphere is inscribed inside a cube of side s. The radius of the sphere is:",
          hint: "The sphere touches the center of each face.",
          options: ["s/2", "s/√2", "s/√3", "s"],
          correct: 0,
          explanation: "The inscribed sphere has radius = s/2 (it touches the center of each face, so its diameter = s)."
        },
        {
          id: "TSR1215_4_16",
          question: "A 6×6×6 cube is painted and cut into unit cubes. How many have exactly 2 painted faces?",
          hint: "12(n−2) with n=6.",
          options: ["36", "48", "60", "72"],
          correct: 1,
          explanation: "12 × (6−2) = 12 × 4 = 48."
        },
        {
          id: "TSR1215_4_17",
          question: "The Platonic solids are: tetrahedron, cube, octahedron, dodecahedron, and icosahedron. How many are there in total?",
          hint: "Just count the listed solids.",
          options: ["4", "5", "6", "7"],
          correct: 1,
          explanation: "There are exactly 5 Platonic solids."
        },
        {
          id: "TSR1215_4_18",
          question: "A cone has a base radius of 5 and a slant height of 13. What is the height of the cone?",
          hint: "h² + r² = l² (Pythagorean theorem).",
          options: ["10", "12", "8", "11"],
          correct: 1,
          explanation: "h = √(13² − 5²) = √(169 − 25) = √144 = 12."
        },
        {
          id: "TSR1215_4_19",
          question: "Two cubes of side 1 and side 2 are glued together sharing one full face of the smaller cube. What is the total surface area?",
          hint: "Small cube: SA=6. Large cube: SA=24. Both lose 1×1 = 1 of hidden area per cube.",
          options: ["26", "28", "30", "32"],
          correct: 1,
          explanation: "Small cube SA = 6(1) = 6. Large cube SA = 6(4) = 24. Contact = 1×1 = 1 on each → 2 hidden. Total = 6 + 24 − 2 = 28."
        },
        {
          id: "TSR1215_4_20",
          question: "What is the maximum number of unit cubes that can be seen from a single viewpoint when looking at a 3×3×3 cube? (You see 3 faces at most from a corner viewpoint.)",
          hint: "From a corner, you see 3 faces. Each face has 9 unit cubes, but edge and corner cubes are shared between faces.",
          options: ["15", "19", "21", "27"],
          correct: 1,
          explanation: "From a corner view you see 3 faces: 3×9 = 27 unit-face views, but cubes on shared edges are counted once. 3 faces × 9 = 27, minus double-counted edge cubes: 3 edges × 3 = 9, plus triple-counted corner: 1. By inclusion-exclusion: 27 − 9 + 1 = 19 distinct unit cubes visible."
        }
      ]
    }
  ]
};

// ============================================================
// 3. MATHEMATICAL PUZZLES  (TRAINING_MP_12_15)
// ============================================================
const TRAINING_MP_12_15 = {
  tips: [
    "For 'trick' word problems (like bat-and-ball), set up an equation rather than jumping to the intuitive answer — the obvious answer is usually wrong.",
    "When working with rates, always express them as 'quantity per unit time' and combine them carefully: adding rates for parallel work, using reciprocals for time.",
    "For clock problems, the minute hand moves 6° per minute, the hour hand moves 0.5° per minute. The angle between them changes at 5.5° per minute.",
    "When solving number-theory problems, look for divisibility patterns and use modular arithmetic to simplify."
  ],
  levels: [
    // ── LEVEL 1 — Foundation: Bat-and-ball, lily-pad, simple rates ──
    {
      level: 1,
      name: "Foundation",
      description: "Classic brain-teasers: bat-and-ball type, lily-pad doubling, and simple rate puzzles.",
      exercises: [
        {
          id: "TMP1215_1_01",
          question: "A bat and a ball cost $1.10 together. The bat costs $1.00 more than the ball. How much does the ball cost?",
          hint: "Let ball = x. Then bat = x + 1.00. Solve x + (x+1.00) = 1.10.",
          options: ["$0.10", "$0.05", "$0.15", "$0.01"],
          correct: 1,
          explanation: "Let ball = x. Bat = x+1. So 2x+1 = 1.10, 2x = 0.10, x = $0.05. The ball costs 5 cents."
        },
        {
          id: "TMP1215_1_02",
          question: "A patch of lily pads doubles in size every day. If it takes 48 days to cover an entire lake, how many days does it take to cover half the lake?",
          hint: "If it doubles daily, the day before it's full it was half.",
          options: ["24", "36", "47", "46"],
          correct: 2,
          explanation: "On day 48 it's full. Since it doubles each day, on day 47 it was half. Answer: 47 days."
        },
        {
          id: "TMP1215_1_03",
          question: "5 machines take 5 minutes to make 5 widgets. How long would 100 machines take to make 100 widgets?",
          hint: "Each machine makes 1 widget in 5 minutes.",
          options: ["100 minutes", "5 minutes", "50 minutes", "1 minute"],
          correct: 1,
          explanation: "Each machine makes 1 widget in 5 minutes. So 100 machines make 100 widgets in 5 minutes."
        },
        {
          id: "TMP1215_1_04",
          question: "If 3 cats catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
          hint: "Each cat catches 1 mouse per 3 minutes.",
          options: ["100", "33", "3", "9"],
          correct: 2,
          explanation: "1 cat catches 1 mouse in 3 minutes, so in 100 minutes it catches 100/3 ≈ 33.3 mice. We need 100 mice: 100/(100/3) = 3 cats."
        },
        {
          id: "TMP1215_1_05",
          question: "A snail climbs 3 meters up a wall during the day and slides back 2 meters at night. The wall is 10 meters high. How many days to reach the top?",
          hint: "Net progress per full day = 1m. But on the final day, it reaches the top without sliding back.",
          options: ["7", "8", "9", "10"],
          correct: 1,
          explanation: "Each full day: net +1m. After 7 days: 7m. On day 8, it climbs 3m to reach 10m. It doesn't slide back. Answer: 8 days."
        },
        {
          id: "TMP1215_1_06",
          question: "A book and its cover cost $2.20. The book costs $2.00 more than the cover. How much does the cover cost?",
          hint: "Same structure as bat-and-ball. Let cover = x.",
          options: ["$0.20", "$0.10", "$0.15", "$0.05"],
          correct: 1,
          explanation: "Let cover = x. Book = x + 2. So 2x + 2 = 2.20, 2x = 0.20, x = $0.10."
        },
        {
          id: "TMP1215_1_07",
          question: "A bacteria colony doubles every hour. If a jar is full at noon, at what time was it 1/4 full?",
          hint: "Go backward: full at noon, half at 11 AM, quarter at ?",
          options: ["10:00 AM", "9:00 AM", "11:00 AM", "6:00 AM"],
          correct: 0,
          explanation: "Full at 12:00. Half at 11:00. Quarter at 10:00 AM."
        },
        {
          id: "TMP1215_1_08",
          question: "If it takes 10 workers 10 days to build 10 houses, how long does it take 5 workers to build 5 houses?",
          hint: "Each worker builds 1 house in 10 days.",
          options: ["5 days", "10 days", "20 days", "25 days"],
          correct: 1,
          explanation: "Each worker builds 1 house in 10 days. 5 workers build 5 houses in 10 days."
        },
        {
          id: "TMP1215_1_09",
          question: "You have a rope that burns in exactly 60 minutes, but it doesn't burn at a uniform rate. How can you measure 30 minutes?",
          hint: "Think about lighting both ends.",
          options: [
            "Cut it in half and burn one half",
            "Light both ends simultaneously",
            "Fold it in half and light one end",
            "It's impossible"
          ],
          correct: 1,
          explanation: "Light both ends at the same time. The rope will be completely burned in 30 minutes (the flames meet in the middle regardless of burn rate)."
        },
        {
          id: "TMP1215_1_10",
          question: "A train travels from A to B at 60 km/h and returns at 40 km/h. What is the average speed for the whole trip?",
          hint: "Average speed = 2×v₁×v₂ / (v₁+v₂) for equal distances.",
          options: ["50 km/h", "48 km/h", "45 km/h", "52 km/h"],
          correct: 1,
          explanation: "Average speed = 2×60×40/(60+40) = 4800/100 = 48 km/h."
        },
        {
          id: "TMP1215_1_11",
          question: "A pen and ink cost $1.50 together. The pen costs $1.00 more than the ink. How much does the pen cost?",
          hint: "Let ink = x. Pen = x + 1. Solve 2x + 1 = 1.50.",
          options: ["$1.00", "$1.25", "$1.10", "$0.75"],
          correct: 1,
          explanation: "ink = x, pen = x+1. 2x+1=1.50, x=0.25. Pen = $1.25."
        },
        {
          id: "TMP1215_1_12",
          question: "A virus doubles every minute. A test tube is full at 2:00 PM. When was it 1/8 full?",
          hint: "Full→half→quarter→eighth: go back 3 doublings (3 minutes).",
          options: ["1:52 PM", "1:57 PM", "1:55 PM", "1:50 PM"],
          correct: 1,
          explanation: "1/8 = 3 doublings before full. 2:00 PM − 3 min = 1:57 PM."
        },
        {
          id: "TMP1215_1_13",
          question: "8 printers take 8 minutes to print 8 pages. How many printers are needed to print 100 pages in 100 minutes?",
          hint: "Each printer prints 1 page in 8 minutes.",
          options: ["100", "64", "8", "800"],
          correct: 2,
          explanation: "1 printer → 1 page in 8 minutes → 12.5 pages in 100 minutes. 8 printers → 100 pages in 100 minutes."
        },
        {
          id: "TMP1215_1_14",
          question: "You row upstream at 4 km/h and downstream at 8 km/h. What is your average speed for a round trip of equal distances?",
          hint: "Harmonic mean: 2ab/(a+b).",
          options: ["6 km/h", "5.33 km/h", "5 km/h", "6.5 km/h"],
          correct: 1,
          explanation: "Average = 2×4×8/(4+8) = 64/12 = 5.33 km/h."
        },
        {
          id: "TMP1215_1_15",
          question: "A worm is at the bottom of a 30m well. Each day it climbs 5m and slides back 4m at night. On which day does it reach the top?",
          hint: "Net progress = 1m per day. On the last day it doesn't slide back.",
          options: ["25", "26", "27", "30"],
          correct: 1,
          explanation: "After 25 days: 25m. On day 26, it climbs 5m to 30m and escapes. Answer: day 26."
        },
        {
          id: "TMP1215_1_16",
          question: "A pizza and drink cost $11. The pizza costs $10 more than the drink. How much is the drink?",
          hint: "Let drink = x. x + (x+10) = 11.",
          options: ["$1.00", "$0.50", "$1.50", "$0.75"],
          correct: 1,
          explanation: "2x + 10 = 11, 2x = 1, x = $0.50."
        },
        {
          id: "TMP1215_1_17",
          question: "If 6 typists can type 6 pages in 6 minutes, how many pages can 12 typists type in 12 minutes?",
          hint: "Each typist types 1 page in 6 minutes.",
          options: ["12", "24", "36", "72"],
          correct: 1,
          explanation: "1 typist = 1 page per 6 min = 2 pages in 12 min. 12 typists × 2 pages = 24 pages."
        },
        {
          id: "TMP1215_1_18",
          question: "An amoeba splits into 2 every minute. A jar is full at 3:00 PM. At what time was it 1/16 full?",
          hint: "1/16 = 4 doublings before full.",
          options: ["2:54 PM", "2:56 PM", "2:44 PM", "2:50 PM"],
          correct: 1,
          explanation: "1/16 → 4 doublings to full. 3:00 PM − 4 min = 2:56 PM."
        },
        {
          id: "TMP1215_1_19",
          question: "A car travels 120 km at 60 km/h, then another 120 km at 120 km/h. What is the average speed?",
          hint: "Total distance / Total time.",
          options: ["80 km/h", "90 km/h", "100 km/h", "75 km/h"],
          correct: 0,
          explanation: "Time₁ = 120/60 = 2h. Time₂ = 120/120 = 1h. Total = 240km in 3h. Average = 80 km/h."
        },
        {
          id: "TMP1215_1_20",
          question: "3 hens lay 3 eggs in 3 days. How many eggs do 12 hens lay in 12 days?",
          hint: "1 hen lays 1 egg in 3 days.",
          options: ["12", "36", "48", "144"],
          correct: 2,
          explanation: "1 hen: 1 egg per 3 days = 4 eggs in 12 days. 12 hens: 12 × 4 = 48 eggs."
        }
      ]
    },
    // ── LEVEL 2 — Developing: Clock angles, work-rate, algebraic word problems ──
    {
      level: 2,
      name: "Developing",
      description: "Clock angle problems, work-rate problems, and algebraic word puzzles.",
      exercises: [
        {
          id: "TMP1215_2_01",
          question: "What is the angle between the hour and minute hands of a clock at 3:00?",
          hint: "At 3:00, the minute hand is at 12 and the hour hand is at 3.",
          options: ["60°", "75°", "90°", "120°"],
          correct: 2,
          explanation: "Each hour mark = 30°. At 3:00, the hour hand is at 3 → 3 × 30° = 90° from 12."
        },
        {
          id: "TMP1215_2_02",
          question: "What is the angle between the hands at 3:30?",
          hint: "At 3:30: minute hand at 6 (180°). Hour hand = 3×30 + 30×0.5 = 105°.",
          options: ["60°", "75°", "80°", "90°"],
          correct: 1,
          explanation: "Minute hand at 6 o'clock = 180°. Hour hand at 3:30 = 90° + 15° = 105°. Angle = 180° − 105° = 75°."
        },
        {
          id: "TMP1215_2_03",
          question: "Worker A can finish a job in 6 hours. Worker B can finish it in 12 hours. Working together, how long to finish?",
          hint: "Combined rate = 1/6 + 1/12.",
          options: ["3 hours", "4 hours", "5 hours", "6 hours"],
          correct: 1,
          explanation: "Rate A = 1/6, Rate B = 1/12. Combined = 1/6 + 1/12 = 3/12 = 1/4. Time = 4 hours."
        },
        {
          id: "TMP1215_2_04",
          question: "A is twice as old as B. In 5 years, A will be 1.5 times as old as B. How old is B now?",
          hint: "Let B = x, A = 2x. In 5 years: 2x+5 = 1.5(x+5).",
          options: ["5", "10", "15", "20"],
          correct: 0,
          explanation: "2x+5 = 1.5(x+5) → 2x+5 = 1.5x+7.5 → 0.5x = 2.5 → x = 5. B is 5 years old. Check: A=10, in 5 years A=15, B=10, 15/10=1.5 ✓."
        },
        {
          id: "TMP1215_2_05",
          question: "What is the angle between the clock hands at 6:00?",
          hint: "Hour hand at 6, minute hand at 12.",
          options: ["90°", "120°", "150°", "180°"],
          correct: 3,
          explanation: "At 6:00, the hands are diametrically opposite. Angle = 180°."
        },
        {
          id: "TMP1215_2_06",
          question: "Pipe A fills a tank in 10 hours. Pipe B empties it in 15 hours. If both are open, how long to fill the tank?",
          hint: "Net rate = 1/10 − 1/15.",
          options: ["20 hours", "25 hours", "30 hours", "35 hours"],
          correct: 2,
          explanation: "Net rate = 1/10 − 1/15 = 3/30 − 2/30 = 1/30. Time = 30 hours."
        },
        {
          id: "TMP1215_2_07",
          question: "The sum of two numbers is 50. Their difference is 14. What is the larger number?",
          hint: "Let the numbers be a and b. a+b=50, a−b=14.",
          options: ["28", "32", "30", "34"],
          correct: 1,
          explanation: "a+b=50, a−b=14. Adding: 2a=64, a=32. The larger number is 32."
        },
        {
          id: "TMP1215_2_08",
          question: "What is the angle between the clock hands at 9:15?",
          hint: "Minute hand at 3 (90°). Hour hand at 9:15 = 270° + 7.5° = 277.5°.",
          options: ["172.5°", "187.5°", "165°", "180°"],
          correct: 0,
          explanation: "Minute hand at 3 = 90°. Hour hand at 9:15 = 9×30 + 15×0.5 = 277.5°. Difference = 277.5 − 90 = 187.5°. Smaller angle = 360 − 187.5 = 172.5°."
        },
        {
          id: "TMP1215_2_09",
          question: "A can do a job in 10 days, B in 15 days, C in 20 days. All three work together. How many days to complete the job?",
          hint: "Combined rate = 1/10 + 1/15 + 1/20.",
          options: ["60/13 days", "4 days", "5 days", "6 days"],
          correct: 0,
          explanation: "LCM(10,15,20)=60. Rates: 6/60 + 4/60 + 3/60 = 13/60. Time = 60/13 ≈ 4.62 days."
        },
        {
          id: "TMP1215_2_10",
          question: "A number increased by 20% gives 60. What is the original number?",
          hint: "1.2 × original = 60.",
          options: ["45", "48", "50", "55"],
          correct: 2,
          explanation: "original × 1.2 = 60. Original = 60/1.2 = 50."
        },
        {
          id: "TMP1215_2_11",
          question: "At what time between 4 and 5 o'clock are the clock hands exactly overlapping?",
          hint: "At 4:00, the hour hand is at 120° and the minute hand at 0°. They close at 5.5° per minute.",
          options: ["4:21 and 9/11 min", "4:20", "4:22 and 8/11 min", "4:25"],
          correct: 0,
          explanation: "Gap at 4:00 = 120°. Rate of closing = 5.5°/min. Time = 120/5.5 = 240/11 = 21 and 9/11 minutes. So at 4:21 and 9/11 minutes."
        },
        {
          id: "TMP1215_2_12",
          question: "A store raises prices by 25%, then offers a 20% discount. Is the final price higher, lower, or the same as the original?",
          hint: "Multiply the factors: 1.25 × 0.80.",
          options: ["Same", "Higher by 5%", "Lower by 5%", "Lower by 1%"],
          correct: 0,
          explanation: "Final = original × 1.25 × 0.80 = original × 1.00. The final price is exactly the same."
        },
        {
          id: "TMP1215_2_13",
          question: "Worker A can do a job in 8 hours. After A works alone for 3 hours, B joins and they finish in 2 more hours. How fast can B do the job alone?",
          hint: "A does 3/8 alone, then A+B do 2 hours to finish. A does 2/8 more, so B does (1 − 5/8)/2 per hour.",
          options: ["10 hours", "16/3 hours", "12 hours", "6 hours"],
          correct: 1,
          explanation: "A does 3/8 in 3 hours. Remaining = 5/8. In the next 2 hours, A does 2×(1/8) = 2/8. B does 5/8 − 2/8 = 3/8 in 2 hours. B's rate = 3/16 per hour. B alone = 16/3 ≈ 5.33 hours."
        },
        {
          id: "TMP1215_2_14",
          question: "Three consecutive odd numbers sum to 75. What is the largest?",
          hint: "Let them be x, x+2, x+4. Sum = 3x+6 = 75.",
          options: ["23", "25", "27", "29"],
          correct: 2,
          explanation: "3x + 6 = 75 → 3x = 69 → x = 23. Numbers: 23, 25, 27. Largest = 27."
        },
        {
          id: "TMP1215_2_15",
          question: "What is the angle between clock hands at 7:20?",
          hint: "Minute hand at 4 (120°). Hour hand at 7:20 = 7×30 + 20×0.5 = 220°.",
          options: ["80°", "90°", "100°", "110°"],
          correct: 2,
          explanation: "Minute hand at 4 = 120°. Hour hand at 7:20 = 210 + 10 = 220°. Angle = 220 − 120 = 100°."
        },
        {
          id: "TMP1215_2_16",
          question: "A pool is filled by Tap A in 4 hours and Tap B in 6 hours. A drain empties it in 12 hours. With all three open, how long to fill?",
          hint: "Net rate = 1/4 + 1/6 − 1/12.",
          options: ["2 hours", "3 hours", "4 hours", "6 hours"],
          correct: 1,
          explanation: "Rate = 1/4 + 1/6 − 1/12 = 3/12 + 2/12 − 1/12 = 4/12 = 1/3. Time = 3 hours."
        },
        {
          id: "TMP1215_2_17",
          question: "If the price of an item is decreased by 10% and then increased by 10%, the final price is:",
          hint: "0.90 × 1.10 = ?",
          options: ["Same as original", "1% less", "1% more", "2% less"],
          correct: 1,
          explanation: "Final = original × 0.90 × 1.10 = original × 0.99. It's 1% less than the original."
        },
        {
          id: "TMP1215_2_18",
          question: "A father is 4 times as old as his son. In 20 years, he'll be twice as old. How old is the son now?",
          hint: "Let son = x. Father = 4x. In 20 years: 4x+20 = 2(x+20).",
          options: ["5", "10", "15", "20"],
          correct: 1,
          explanation: "4x+20 = 2x+40. 2x = 20. x = 10. Son is 10, father is 40."
        },
        {
          id: "TMP1215_2_19",
          question: "A and B together complete a job in 12 days. A alone takes 20 days. How long does B take alone?",
          hint: "1/20 + 1/B = 1/12.",
          options: ["25 days", "28 days", "30 days", "35 days"],
          correct: 2,
          explanation: "1/B = 1/12 − 1/20 = 5/60 − 3/60 = 2/60 = 1/30. B = 30 days."
        },
        {
          id: "TMP1215_2_20",
          question: "At what angle do the clock hands meet at 12:00?",
          hint: "Both hands point to 12.",
          options: ["0°", "30°", "90°", "360°"],
          correct: 0,
          explanation: "At 12:00, both hands overlap at the 12. Angle = 0°."
        }
      ]
    },
    // ── LEVEL 3 — Advanced: Grid-rule puzzles, probability basics ──
    {
      level: 3,
      name: "Advanced",
      description: "Grid-rule puzzles (find the rule), basic probability, and combinatorics.",
      exercises: [
        {
          id: "TMP1215_3_01",
          question: "In a grid: Row 1: (2, 3, 8). Row 2: (4, 5, 24). Row 3: (3, 7, ?). The rule is col1 × col2 + col1 = col3. What is '?'?",
          hint: "Apply the rule: 3 × 7 + 3 = ?",
          options: ["21", "24", "27", "30"],
          correct: 1,
          explanation: "Rule: col1 × col2 + col1 = col3. Check: 2×3+2=8 ✓, 4×5+4=24 ✓. So 3×7+3 = 21+3 = 24."
        },
        {
          id: "TMP1215_3_02",
          question: "Grid: Row 1: (5, 2, 12). Row 2: (3, 4, 16). Row 3: (6, 3, ?). Rule: col1 × col2 + col2 = col3. What is '?'?",
          hint: "Check: 5×2+2=12. Apply to row 3.",
          options: ["18", "20", "21", "24"],
          correct: 2,
          explanation: "Rule: col1 × col2 + col2. Check: 5×2+2=12 ✓, 3×4+4=16 ✓. Row 3: 6×3+3 = 18+3 = 21."
        },
        {
          id: "TMP1215_3_03",
          question: "A fair die is rolled. What is the probability of getting a prime number?",
          hint: "Primes on a die: 2, 3, 5.",
          options: ["1/3", "1/2", "2/3", "1/6"],
          correct: 1,
          explanation: "Primes: {2, 3, 5} = 3 outcomes out of 6. P = 3/6 = 1/2."
        },
        {
          id: "TMP1215_3_04",
          question: "Grid: Row 1: (3, 4, 25). Row 2: (5, 12, 169). Row 3: (8, 6, ?). The rule involves a famous formula. What is '?'?",
          hint: "Notice: 3²+4² = 9+16 = 25. 5²+12² = 25+144 = 169. The rule is (col1² + col2²) = col3.",
          options: ["48", "100", "64", "96"],
          correct: 1,
          explanation: "Rule: col1² + col2² = col3. Check: 3²+4²=25 ✓. 5²+12²=169 ✓. Row 3: 8²+6² = 64+36 = 100."
        },
        {
          id: "TMP1215_3_05",
          question: "Two dice are rolled. What is the probability the sum is greater than 9?",
          hint: "Count pairs: sum 10: (4,6)(5,5)(6,4)=3; sum 11: (5,6)(6,5)=2; sum 12: (6,6)=1. Total = 6.",
          options: ["1/12", "1/6", "5/36", "1/4"],
          correct: 1,
          explanation: "Favorable: sum≥10 → 3+2+1 = 6 outcomes. P = 6/36 = 1/6."
        },
        {
          id: "TMP1215_3_06",
          question: "Grid: Row 1: (2, 5, 29). Row 2: (3, 4, 25). Row 3: (4, 3, ?). Rule: col1² + col2² = col3. What is '?'?",
          hint: "4² + 3² = ?",
          options: ["20", "24", "25", "29"],
          correct: 2,
          explanation: "Rule: col1² + col2² = col3. Check: 4+25=29 ✓, 9+16=25 ✓. Row 3: 16+9 = 25."
        },
        {
          id: "TMP1215_3_07",
          question: "In how many ways can you choose 3 students from a group of 8?",
          hint: "C(8,3) = 8!/(3!×5!).",
          options: ["42", "56", "70", "84"],
          correct: 1,
          explanation: "C(8,3) = (8×7×6)/(3×2×1) = 336/6 = 56."
        },
        {
          id: "TMP1215_3_08",
          question: "Grid: Row 1: (2, 4, 12). Row 2: (3, 5, 24). Row 3: (4, 6, ?). The rule is col1 × col2 + col1² = col3. What is '?'?",
          hint: "Check: 2×4 + 2² = 8+4 = 12 ✓. 3×5 + 3² = 15+9 = 24 ✓.",
          options: ["36", "40", "44", "48"],
          correct: 1,
          explanation: "Rule: col1 × col2 + col1² = col3. Row 3: 4×6 + 4² = 24+16 = 40."
        },
        {
          id: "TMP1215_3_09",
          question: "A card is drawn from a standard 52-card deck. What is the probability it is a face card (J, Q, K)?",
          hint: "There are 12 face cards in a deck.",
          options: ["3/13", "1/4", "4/13", "1/13"],
          correct: 0,
          explanation: "Face cards: 4 Jacks + 4 Queens + 4 Kings = 12. P = 12/52 = 3/13."
        },
        {
          id: "TMP1215_3_10",
          question: "Grid: Row 1: (2, 3, 13). Row 2: (4, 1, 17). Row 3: (3, 5, ?). The rule is col1² + col2² = col3. What is '?'?",
          hint: "Verify: 2²+3²=4+9=13 ✓, 4²+1²=16+1=17 ✓.",
          options: ["25", "34", "40", "45"],
          correct: 1,
          explanation: "3² + 5² = 9 + 25 = 34."
        },
        {
          id: "TMP1215_3_11",
          question: "How many ways can the letters in 'MATH' be arranged?",
          hint: "4 distinct letters → 4!",
          options: ["12", "16", "24", "48"],
          correct: 2,
          explanation: "4! = 4×3×2×1 = 24."
        },
        {
          id: "TMP1215_3_12",
          question: "Grid: Row 1: (8, 2, 6). Row 2: (15, 3, 8). Row 3: (24, 4, ?). The rule is col1/col2 + col2 = col3. What is '?'?",
          hint: "Check: 8/2 + 2 = 4+2 = 6 ✓. 15/3 + 3 = 5+3 = 8 ✓.",
          options: ["8", "9", "10", "11"],
          correct: 2,
          explanation: "Rule: col1/col2 + col2 = col3. Row 3: 24/4 + 4 = 6 + 4 = 10."
        },
        {
          id: "TMP1215_3_13",
          question: "Two cards are drawn without replacement from a 52-card deck. What is the probability both are aces?",
          hint: "P = (4/52) × (3/51).",
          options: ["1/169", "1/221", "1/13", "2/52"],
          correct: 1,
          explanation: "P = (4/52) × (3/51) = 12/2652 = 1/221."
        },
        {
          id: "TMP1215_3_14",
          question: "Grid: Row 1: (1, 2, 5). Row 2: (2, 3, 13). Row 3: (3, 4, ?). The rule is col1² + col2² = col3. What is '?'?",
          hint: "1²+2²=1+4=5 ✓. 2²+3²=4+9=13 ✓.",
          options: ["20", "25", "7", "12"],
          correct: 1,
          explanation: "3² + 4² = 9 + 16 = 25."
        },
        {
          id: "TMP1215_3_15",
          question: "How many ways can you arrange the letters in 'LEVEL'?",
          hint: "5 letters with L×2, E×2, V×1. Formula: 5!/(2!×2!).",
          options: ["24", "30", "60", "120"],
          correct: 1,
          explanation: "5!/(2!×2!) = 120/4 = 30."
        },
        {
          id: "TMP1215_3_16",
          question: "A bag has 3 red, 4 blue, and 5 green balls. One ball is drawn at random. What is the probability it is NOT green?",
          hint: "Not green = red + blue = 7 out of 12.",
          options: ["5/12", "7/12", "1/2", "2/3"],
          correct: 1,
          explanation: "Not green = (3+4)/12 = 7/12."
        },
        {
          id: "TMP1215_3_17",
          question: "Grid: Row 1: (5, 3, 34). Row 2: (7, 1, 50). Row 3: (6, 2, ?). The rule is col1² + col2² = col3. What is '?'?",
          hint: "5²+3²=25+9=34 ✓. 7²+1²=49+1=50 ✓.",
          options: ["36", "38", "40", "44"],
          correct: 2,
          explanation: "6² + 2² = 36 + 4 = 40."
        },
        {
          id: "TMP1215_3_18",
          question: "In how many ways can 5 people be arranged in a line?",
          hint: "5! = ?",
          options: ["60", "100", "120", "150"],
          correct: 2,
          explanation: "5! = 5×4×3×2×1 = 120."
        },
        {
          id: "TMP1215_3_19",
          question: "You toss a coin 4 times. What is the probability of getting exactly 3 heads?",
          hint: "C(4,3) × (1/2)⁴.",
          options: ["1/8", "1/4", "3/8", "1/16"],
          correct: 1,
          explanation: "C(4,3)/2⁴ = 4/16 = 1/4."
        },
        {
          id: "TMP1215_3_20",
          question: "Grid: Row 1: (4, 3, 7, 84). Row 2: (2, 5, 7, 70). Row 3: (3, 6, 9, ?). Rule: col1 × col2 × col3 = col4. What is '?'?",
          hint: "4×3×7=84 ✓. 2×5×7=70 ✓.",
          options: ["108", "126", "162", "180"],
          correct: 2,
          explanation: "3 × 6 × 9 = 162."
        }
      ]
    },
    // ── LEVEL 4 — Expert: Advanced rates, optimization, number theory ──
    {
      level: 4,
      name: "Expert",
      description: "Advanced rate problems, optimization, and number theory (divisibility, remainders).",
      exercises: [
        {
          id: "TMP1215_4_01",
          question: "What is the remainder when 2^100 is divided by 3?",
          hint: "2 mod 3 = 2, 2² mod 3 = 1, 2³ mod 3 = 2... pattern repeats every 2.",
          options: ["0", "1", "2", "3"],
          correct: 1,
          explanation: "2^1 mod 3 = 2, 2^2 mod 3 = 1, cycle of length 2. 100 is even → same as 2^2 mod 3 = 1."
        },
        {
          id: "TMP1215_4_02",
          question: "A boat goes 30 km upstream in 5 hours and 30 km downstream in 3 hours. What is the speed of the current?",
          hint: "Upstream speed = 30/5 = 6. Downstream speed = 30/3 = 10. Current = (down − up)/2.",
          options: ["1 km/h", "2 km/h", "3 km/h", "4 km/h"],
          correct: 1,
          explanation: "Upstream = 6 km/h, Downstream = 10 km/h. Current = (10−6)/2 = 2 km/h."
        },
        {
          id: "TMP1215_4_03",
          question: "What is the largest number that divides both 252 and 180?",
          hint: "Find GCD(252, 180).",
          options: ["12", "18", "36", "90"],
          correct: 2,
          explanation: "252 = 2²×3²×7. 180 = 2²×3²×5. GCD = 2²×3² = 36."
        },
        {
          id: "TMP1215_4_04",
          question: "A cistern is filled by three pipes. A fills 1/2 in 1 hour, B fills 1/3 in 1 hour, C empties 1/6 in 1 hour. With all three open, how long to fill?",
          hint: "Net rate = 1/2 + 1/3 − 1/6.",
          options: ["1 hour", "3/2 hours", "2 hours", "5/3 hours"],
          correct: 1,
          explanation: "Net = 3/6 + 2/6 − 1/6 = 4/6 = 2/3 per hour. Time = 1/(2/3) = 3/2 hours."
        },
        {
          id: "TMP1215_4_05",
          question: "What is the remainder when 7^200 is divided by 5?",
          hint: "7 mod 5 = 2. 2^1=2, 2^2=4, 2^3=3, 2^4=1 (mod 5). Cycle = 4.",
          options: ["0", "1", "2", "4"],
          correct: 1,
          explanation: "7 mod 5 = 2. Powers of 2 mod 5 cycle: 2,4,3,1 (period 4). 200 mod 4 = 0 → same as 2^4 mod 5 = 1."
        },
        {
          id: "TMP1215_4_06",
          question: "You need to fence a rectangular garden with 60 meters of fencing. What dimensions maximize the area?",
          hint: "For a fixed perimeter, a square has the maximum area.",
          options: ["10×20", "15×15", "12×18", "14×16"],
          correct: 1,
          explanation: "Perimeter = 2(l+w) = 60, so l+w = 30. Area = l×w is maximized when l = w = 15. Max area = 225 m²."
        },
        {
          id: "TMP1215_4_07",
          question: "What is the smallest positive number that is divisible by both 12 and 18?",
          hint: "Find LCM(12, 18).",
          options: ["24", "36", "48", "72"],
          correct: 1,
          explanation: "12 = 2²×3. 18 = 2×3². LCM = 2²×3² = 36."
        },
        {
          id: "TMP1215_4_08",
          question: "A train 200m long crosses a 300m bridge in 25 seconds. What is the train's speed?",
          hint: "Total distance = train length + bridge length. Speed = distance/time.",
          options: ["18 m/s", "20 m/s", "25 m/s", "30 m/s"],
          correct: 1,
          explanation: "Distance = 200 + 300 = 500m. Speed = 500/25 = 20 m/s."
        },
        {
          id: "TMP1215_4_09",
          question: "What is the remainder when 123456789 is divided by 9?",
          hint: "A number mod 9 equals the sum of its digits mod 9.",
          options: ["0", "3", "6", "9"],
          correct: 0,
          explanation: "Sum of digits: 1+2+3+4+5+6+7+8+9 = 45. 45 mod 9 = 0. Remainder = 0."
        },
        {
          id: "TMP1215_4_10",
          question: "Two trains start 300 km apart moving toward each other at 60 km/h and 40 km/h. How long until they meet?",
          hint: "Relative speed = sum of speeds.",
          options: ["2 hours", "3 hours", "4 hours", "5 hours"],
          correct: 1,
          explanation: "Relative speed = 60+40 = 100 km/h. Time = 300/100 = 3 hours."
        },
        {
          id: "TMP1215_4_11",
          question: "Find the last digit of 3^2024.",
          hint: "Last digits of powers of 3: 3,9,7,1,3,9,7,1... cycle of 4.",
          options: ["1", "3", "7", "9"],
          correct: 0,
          explanation: "3^1=3, 3^2=9, 3^3=27, 3^4=81. Cycle: {3,9,7,1} length 4. 2024 mod 4 = 0 → last digit = 1 (same as 3^4)."
        },
        {
          id: "TMP1215_4_12",
          question: "A rectangle has area 144 cm² and perimeter 52 cm. What are its dimensions?",
          hint: "l × w = 144, 2(l+w) = 52 → l+w = 26. Solve the quadratic.",
          options: ["8 × 18", "9 × 16", "10 × 14", "12 × 12"],
          correct: 0,
          explanation: "l+w = 26, l×w = 144. Quadratic: x²−26x+144 = 0. Discriminant = 676−576 = 100. x = (26±10)/2 → 18 or 8. Dimensions: 8 × 18."
        },
        {
          id: "TMP1215_4_13",
          question: "What is the sum of all factors of 28?",
          hint: "28 = 2²×7. Factors: 1, 2, 4, 7, 14, 28.",
          options: ["28", "42", "56", "64"],
          correct: 2,
          explanation: "Factors: 1+2+4+7+14+28 = 56. (Note: 28 is a perfect number since 1+2+4+7+14=28.)"
        },
        {
          id: "TMP1215_4_14",
          question: "A plane flies 600 km with a tailwind in 2 hours, and returns against the wind in 3 hours. What is the wind speed?",
          hint: "With wind: 600/2=300 km/h. Against: 600/3=200 km/h. Wind = (300−200)/2.",
          options: ["25 km/h", "50 km/h", "75 km/h", "100 km/h"],
          correct: 1,
          explanation: "Speed with wind = 300. Against = 200. Plane speed = (300+200)/2 = 250. Wind = (300−200)/2 = 50 km/h."
        },
        {
          id: "TMP1215_4_15",
          question: "How many numbers between 1 and 100 (inclusive) are divisible by both 3 and 5?",
          hint: "Divisible by both 3 and 5 = divisible by LCM(3,5) = 15.",
          options: ["3", "5", "6", "10"],
          correct: 2,
          explanation: "Multiples of 15 up to 100: 15, 30, 45, 60, 75, 90. Count = 6."
        },
        {
          id: "TMP1215_4_16",
          question: "You have 100 meters of rope to enclose a semicircular garden (straight edge + curved part). What radius maximizes the area?",
          hint: "Perimeter = 2r + πr = r(2+π) = 100. Area = πr²/2.",
          options: ["100/(2+π)", "50/π", "100/π", "200/(2+π)"],
          correct: 0,
          explanation: "r(2+π) = 100 → r = 100/(2+π). Area = πr²/2 is maximized with r = 100/(2+π) ≈ 19.46 m."
        },
        {
          id: "TMP1215_4_17",
          question: "What is the remainder when 10^50 + 7 is divided by 9?",
          hint: "10 mod 9 = 1. So 10^50 mod 9 = 1.",
          options: ["0", "7", "8", "1"],
          correct: 2,
          explanation: "10 ≡ 1 (mod 9), so 10^50 ≡ 1 (mod 9). Then 10^50 + 7 ≡ 1 + 7 = 8 (mod 9)."
        },
        {
          id: "TMP1215_4_18",
          question: "Two workers A and B can build a wall in 12 days. After working together for 8 days, A leaves and B finishes in 12 more days. How many days would B take alone?",
          hint: "In 8 days together: 8/12 = 2/3 done. B does remaining 1/3 in 12 days.",
          options: ["24 days", "30 days", "36 days", "48 days"],
          correct: 2,
          explanation: "Together 8 days: 8/12 = 2/3 done. Remaining: 1/3. B does 1/3 in 12 days → B's rate = 1/36 per day. B alone = 36 days."
        },
        {
          id: "TMP1215_4_19",
          question: "How many zeros does 25! (25 factorial) end with?",
          hint: "Count factors of 5 in 25!: floor(25/5) + floor(25/25).",
          options: ["4", "5", "6", "7"],
          correct: 2,
          explanation: "Trailing zeros = factors of 5. floor(25/5) + floor(25/25) = 5 + 1 = 6."
        },
        {
          id: "TMP1215_4_20",
          question: "A merchant buys an item for $80 and wants 25% profit. He offers a 10% discount on the marked price. What should the marked price be?",
          hint: "Selling price = 80 × 1.25 = $100. Marked price × 0.9 = $100.",
          options: ["$100.00", "$105.56", "$111.11", "$120.00"],
          correct: 2,
          explanation: "Desired selling price = 80 × 1.25 = $100. After 10% discount: MP × 0.9 = 100 → MP = 100/0.9 = $111.11."
        }
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { TRAINING_LR_12_15, TRAINING_SR_12_15, TRAINING_MP_12_15 };
}
