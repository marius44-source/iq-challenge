const TRAINING_NR_12_15 = {
  tips: [
    {
      title: "Look for Common Patterns",
      content: "Many number sequences follow well-known patterns like Fibonacci (each term is the sum of the two before it), perfect squares (1, 4, 9, 16, 25...), or triangular numbers (1, 3, 6, 10, 15...). Recognizing these families quickly gives you a head start."
    },
    {
      title: "Calculate the Differences",
      content: "When a sequence is not immediately obvious, write out the differences between consecutive terms. If those differences form their own pattern (constant, increasing, doubling), you have found the rule. Sometimes you need second differences — the differences of the differences."
    },
    {
      title: "Check for Alternating or Interleaved Rules",
      content: "Some sequences apply two operations in turn (e.g., ×2 then +1) or weave two separate sequences together in odd and even positions. If a single rule does not fit, try splitting the sequence into two sub-sequences and analyze each one separately."
    },
    {
      title: "Test Recursive Relationships",
      content: "Advanced sequences may define each term using a formula involving previous terms — for example, each term equals the previous term times 2 plus 3. When simple patterns fail, try expressing the next term as a function of one or two preceding terms."
    }
  ],
  levels: [
    {
      level: 1,
      name: "Foundation",
      description: "Fibonacci-type sequences, perfect squares, and triangular numbers — the building blocks of numerical reasoning.",
      exercises: [
        {
          id: "TNR1215_1_01",
          question: "What comes next? 1, 1, 2, 3, 5, ?",
          hint: "Each number is the sum of the two numbers before it.",
          options: ["8", "7", "9", "6"],
          correct: 0,
          explanation: "Fibonacci sequence: each term equals the sum of the previous two. 3 + 5 = 8."
        },
        {
          id: "TNR1215_1_02",
          question: "What comes next? 2, 3, 5, 8, 13, ?",
          hint: "Add the last two numbers together.",
          options: ["21", "18", "20", "23"],
          correct: 0,
          explanation: "Fibonacci-type sequence: 8 + 13 = 21."
        },
        {
          id: "TNR1215_1_03",
          question: "What comes next? 5, 8, 13, 21, 34, ?",
          hint: "Sum the two most recent terms.",
          options: ["55", "50", "48", "60"],
          correct: 0,
          explanation: "Fibonacci continuation: 21 + 34 = 55."
        },
        {
          id: "TNR1215_1_04",
          question: "What comes next? 1, 3, 4, 7, 11, ?",
          hint: "This is a Lucas-like sequence — each term is the sum of the two before it.",
          options: ["18", "15", "22", "16"],
          correct: 0,
          explanation: "Each term = sum of the previous two: 7 + 11 = 18."
        },
        {
          id: "TNR1215_1_05",
          question: "What comes next? 3, 5, 8, 13, 21, ?",
          hint: "Add the two preceding numbers.",
          options: ["34", "30", "32", "36"],
          correct: 0,
          explanation: "Fibonacci-type: 13 + 21 = 34."
        },
        {
          id: "TNR1215_1_06",
          question: "What comes next? 1, 4, 5, 9, 14, ?",
          hint: "Each number equals the sum of the two before it.",
          options: ["23", "20", "25", "19"],
          correct: 0,
          explanation: "Sum of previous two: 9 + 14 = 23."
        },
        {
          id: "TNR1215_1_07",
          question: "What comes next? 2, 2, 4, 6, 10, ?",
          hint: "Another Fibonacci variant — add the last two terms.",
          options: ["16", "14", "12", "18"],
          correct: 0,
          explanation: "Each term = sum of previous two: 6 + 10 = 16."
        },
        {
          id: "TNR1215_1_08",
          question: "What comes next? 1, 4, 9, 16, 25, ?",
          hint: "Think about squaring whole numbers.",
          options: ["36", "30", "35", "49"],
          correct: 0,
          explanation: "Perfect squares: 1², 2², 3², 4², 5², 6² = 36."
        },
        {
          id: "TNR1215_1_09",
          question: "What comes next? 4, 9, 16, 25, 36, ?",
          hint: "These are squares of consecutive integers.",
          options: ["49", "42", "45", "64"],
          correct: 0,
          explanation: "Perfect squares: 2², 3², 4², 5², 6², 7² = 49."
        },
        {
          id: "TNR1215_1_10",
          question: "What comes next? 9, 16, 25, 36, 49, ?",
          hint: "What integers are being squared here?",
          options: ["64", "56", "60", "81"],
          correct: 0,
          explanation: "Perfect squares: 3², 4², 5², 6², 7², 8² = 64."
        },
        {
          id: "TNR1215_1_11",
          question: "What comes next? 16, 25, 36, 49, 64, ?",
          hint: "Square numbers starting from 4².",
          options: ["81", "72", "100", "75"],
          correct: 0,
          explanation: "Perfect squares: 4², 5², 6², 7², 8², 9² = 81."
        },
        {
          id: "TNR1215_1_12",
          question: "What comes next? 25, 36, 49, 64, 81, ?",
          hint: "Consecutive perfect squares.",
          options: ["100", "90", "121", "96"],
          correct: 0,
          explanation: "Perfect squares: 5², 6², 7², 8², 9², 10² = 100."
        },
        {
          id: "TNR1215_1_13",
          question: "What comes next? 1, 4, 9, 16, ?",
          hint: "These are 1², 2², 3², 4², …",
          options: ["25", "20", "32", "22"],
          correct: 0,
          explanation: "Perfect squares: the next is 5² = 25."
        },
        {
          id: "TNR1215_1_14",
          question: "What comes next? 1, 3, 6, 10, 15, ?",
          hint: "The differences between terms increase by 1 each time.",
          options: ["21", "18", "20", "25"],
          correct: 0,
          explanation: "Triangular numbers: differences are +2, +3, +4, +5, +6. So 15 + 6 = 21."
        },
        {
          id: "TNR1215_1_15",
          question: "What comes next? 3, 6, 10, 15, 21, ?",
          hint: "Look at how much is added each step: +3, +4, +5, +6, …",
          options: ["28", "24", "30", "27"],
          correct: 0,
          explanation: "Triangular numbers: differences are +3, +4, +5, +6, +7. So 21 + 7 = 28."
        },
        {
          id: "TNR1215_1_16",
          question: "What comes next? 6, 10, 15, 21, 28, ?",
          hint: "The gap between consecutive terms grows by 1 each time.",
          options: ["36", "32", "35", "40"],
          correct: 0,
          explanation: "Differences: +4, +5, +6, +7, +8. So 28 + 8 = 36."
        },
        {
          id: "TNR1215_1_17",
          question: "What comes next? 10, 15, 21, 28, 36, ?",
          hint: "Each step adds one more than the previous step.",
          options: ["45", "40", "42", "50"],
          correct: 0,
          explanation: "Differences: +5, +6, +7, +8, +9. So 36 + 9 = 45."
        },
        {
          id: "TNR1215_1_18",
          question: "What comes next? 15, 21, 28, 36, 45, ?",
          hint: "Add 6, then 7, then 8, then 9, then …",
          options: ["55", "50", "54", "60"],
          correct: 0,
          explanation: "Differences: +6, +7, +8, +9, +10. So 45 + 10 = 55."
        },
        {
          id: "TNR1215_1_19",
          question: "What comes next? 1, 3, 6, 10, ?",
          hint: "These are triangular numbers. The differences increase by 1.",
          options: ["15", "12", "14", "16"],
          correct: 0,
          explanation: "Triangular numbers: +2, +3, +4, +5. So 10 + 5 = 15."
        },
        {
          id: "TNR1215_1_20",
          question: "What comes next? 100, 81, 64, 49, 36, ?",
          hint: "These are perfect squares in descending order.",
          options: ["25", "16", "20", "30"],
          correct: 0,
          explanation: "Descending squares: 10², 9², 8², 7², 6², 5² = 25."
        }
      ]
    },
    {
      level: 2,
      name: "Developing",
      description: "Perfect cubes, prime number sequences, and geometric progressions — expanding your pattern toolkit.",
      exercises: [
        {
          id: "TNR1215_2_01",
          question: "What comes next? 1, 8, 27, 64, ?",
          hint: "Think about cubing whole numbers: 1³, 2³, 3³, …",
          options: ["125", "100", "81", "216"],
          correct: 0,
          explanation: "Perfect cubes: 1³, 2³, 3³, 4³, 5³ = 125."
        },
        {
          id: "TNR1215_2_02",
          question: "What comes next? 8, 27, 64, 125, ?",
          hint: "Cubes of consecutive integers starting from 2.",
          options: ["216", "150", "196", "256"],
          correct: 0,
          explanation: "Perfect cubes: 2³, 3³, 4³, 5³, 6³ = 216."
        },
        {
          id: "TNR1215_2_03",
          question: "What comes next? 27, 64, 125, 216, ?",
          hint: "3³, 4³, 5³, 6³, …",
          options: ["343", "250", "300", "512"],
          correct: 0,
          explanation: "Perfect cubes: 3³, 4³, 5³, 6³, 7³ = 343."
        },
        {
          id: "TNR1215_2_04",
          question: "What comes next? 64, 125, 216, 343, ?",
          hint: "These are cubes: 4³, 5³, 6³, 7³, …",
          options: ["512", "400", "500", "729"],
          correct: 0,
          explanation: "Perfect cubes: 4³, 5³, 6³, 7³, 8³ = 512."
        },
        {
          id: "TNR1215_2_05",
          question: "What comes next? 1, 8, 27, 64, 125, ?",
          hint: "The sixth perfect cube.",
          options: ["216", "150", "200", "256"],
          correct: 0,
          explanation: "Perfect cubes: 1³, 2³, 3³, 4³, 5³, 6³ = 216."
        },
        {
          id: "TNR1215_2_06",
          question: "What comes next? 2, 3, 5, 7, 11, ?",
          hint: "These are prime numbers — numbers divisible only by 1 and themselves.",
          options: ["13", "12", "14", "15"],
          correct: 0,
          explanation: "Consecutive primes. The next prime after 11 is 13."
        },
        {
          id: "TNR1215_2_07",
          question: "What comes next? 3, 5, 7, 11, 13, ?",
          hint: "Skip composite numbers and list only primes.",
          options: ["17", "15", "19", "14"],
          correct: 0,
          explanation: "Consecutive primes. The next prime after 13 is 17."
        },
        {
          id: "TNR1215_2_08",
          question: "What comes next? 5, 7, 11, 13, 17, ?",
          hint: "Continue the list of prime numbers.",
          options: ["19", "18", "21", "23"],
          correct: 0,
          explanation: "Consecutive primes. The next prime after 17 is 19."
        },
        {
          id: "TNR1215_2_09",
          question: "What comes next? 7, 11, 13, 17, 19, ?",
          hint: "What is the next number that has no divisors other than 1 and itself?",
          options: ["23", "20", "21", "25"],
          correct: 0,
          explanation: "Consecutive primes. The next prime after 19 is 23."
        },
        {
          id: "TNR1215_2_10",
          question: "What comes next? 11, 13, 17, 19, 23, ?",
          hint: "The next prime after 23.",
          options: ["29", "25", "27", "31"],
          correct: 0,
          explanation: "Consecutive primes. The next prime after 23 is 29."
        },
        {
          id: "TNR1215_2_11",
          question: "What comes next? 3, 6, 12, 24, 48, ?",
          hint: "Each number is doubled.",
          options: ["96", "72", "84", "108"],
          correct: 0,
          explanation: "Geometric sequence ×2: 48 × 2 = 96."
        },
        {
          id: "TNR1215_2_12",
          question: "What comes next? 5, 10, 20, 40, 80, ?",
          hint: "Multiply by 2 each time.",
          options: ["160", "120", "140", "200"],
          correct: 0,
          explanation: "Geometric sequence ×2: 80 × 2 = 160."
        },
        {
          id: "TNR1215_2_13",
          question: "What comes next? 7, 14, 28, 56, 112, ?",
          hint: "Each term is twice the previous one.",
          options: ["224", "168", "196", "256"],
          correct: 0,
          explanation: "Geometric sequence ×2: 112 × 2 = 224."
        },
        {
          id: "TNR1215_2_14",
          question: "What comes next? 1, 2, 4, 8, 16, ?",
          hint: "Powers of 2.",
          options: ["32", "24", "20", "64"],
          correct: 0,
          explanation: "Geometric sequence ×2: 16 × 2 = 32."
        },
        {
          id: "TNR1215_2_15",
          question: "What comes next? 2, 6, 18, 54, ?",
          hint: "Each number is multiplied by 3.",
          options: ["162", "108", "72", "216"],
          correct: 0,
          explanation: "Geometric sequence ×3: 54 × 3 = 162."
        },
        {
          id: "TNR1215_2_16",
          question: "What comes next? 1, 3, 9, 27, 81, ?",
          hint: "Powers of 3.",
          options: ["243", "162", "100", "324"],
          correct: 0,
          explanation: "Geometric sequence ×3: 81 × 3 = 243."
        },
        {
          id: "TNR1215_2_17",
          question: "What comes next? 4, 12, 36, 108, ?",
          hint: "Multiply by 3 to get the next term.",
          options: ["324", "216", "144", "432"],
          correct: 0,
          explanation: "Geometric sequence ×3: 108 × 3 = 324."
        },
        {
          id: "TNR1215_2_18",
          question: "What comes next? 1, 4, 16, 64, ?",
          hint: "Each term is multiplied by 4.",
          options: ["256", "128", "192", "320"],
          correct: 0,
          explanation: "Geometric sequence ×4: 64 × 4 = 256."
        },
        {
          id: "TNR1215_2_19",
          question: "What comes next? 2, 10, 50, 250, ?",
          hint: "Each term is multiplied by 5.",
          options: ["1250", "500", "1000", "1500"],
          correct: 0,
          explanation: "Geometric sequence ×5: 250 × 5 = 1250."
        },
        {
          id: "TNR1215_2_20",
          question: "What comes next? 729, 512, 343, 216, 125, ?",
          hint: "Descending perfect cubes.",
          options: ["64", "100", "27", "81"],
          correct: 0,
          explanation: "Descending cubes: 9³, 8³, 7³, 6³, 5³, 4³ = 64."
        }
      ]
    },
    {
      level: 3,
      name: "Advanced",
      description: "Difference-of-differences patterns and alternating operations — mastering multi-step reasoning.",
      exercises: [
        {
          id: "TNR1215_3_01",
          question: "What comes next? 1, 2, 4, 7, 11, ?",
          hint: "Find the differences: they increase by 1 each time.",
          options: ["16", "14", "15", "18"],
          correct: 0,
          explanation: "Differences are 1, 2, 3, 4 — increasing by 1. Next difference is 5: 11 + 5 = 16."
        },
        {
          id: "TNR1215_3_02",
          question: "What comes next? 1, 3, 7, 13, 21, ?",
          hint: "The differences grow by 2 each step.",
          options: ["31", "27", "29", "33"],
          correct: 0,
          explanation: "Differences are 2, 4, 6, 8 — increasing by 2. Next difference is 10: 21 + 10 = 31."
        },
        {
          id: "TNR1215_3_03",
          question: "What comes next? 2, 5, 11, 20, 32, ?",
          hint: "The differences form a pattern: 3, 6, 9, 12, …",
          options: ["47", "42", "44", "50"],
          correct: 0,
          explanation: "Differences are 3, 6, 9, 12 — increasing by 3. Next difference is 15: 32 + 15 = 47."
        },
        {
          id: "TNR1215_3_04",
          question: "What comes next? 2, 3, 5, 9, 17, ?",
          hint: "The differences themselves double each time.",
          options: ["33", "25", "30", "35"],
          correct: 0,
          explanation: "Differences are 1, 2, 4, 8 — each doubles. Next difference is 16: 17 + 16 = 33."
        },
        {
          id: "TNR1215_3_05",
          question: "What comes next? 2, 3, 7, 16, 32, ?",
          hint: "The differences are perfect squares: 1, 4, 9, 16, …",
          options: ["57", "48", "52", "64"],
          correct: 0,
          explanation: "Differences are 1², 2², 3², 4². Next is 5² = 25: 32 + 25 = 57."
        },
        {
          id: "TNR1215_3_06",
          question: "What comes next? 1, 3, 6, 11, 18, ?",
          hint: "The differences are prime numbers.",
          options: ["29", "23", "25", "31"],
          correct: 0,
          explanation: "Differences are the primes 2, 3, 5, 7. Next prime is 11: 18 + 11 = 29."
        },
        {
          id: "TNR1215_3_07",
          question: "What comes next? 3, 5, 9, 15, 23, ?",
          hint: "Second differences are constant at 2.",
          options: ["33", "30", "35", "28"],
          correct: 0,
          explanation: "Differences are 2, 4, 6, 8 — increasing by 2. Next is 10: 23 + 10 = 33."
        },
        {
          id: "TNR1215_3_08",
          question: "What comes next? 1, 4, 10, 19, 31, ?",
          hint: "Second differences are constant at 3.",
          options: ["46", "40", "43", "50"],
          correct: 0,
          explanation: "Differences are 3, 6, 9, 12 — increasing by 3. Next is 15: 31 + 15 = 46."
        },
        {
          id: "TNR1215_3_09",
          question: "What comes next? 1, 2, 4, 8, 15, ?",
          hint: "Look at the second differences — they increase by 1.",
          options: ["26", "22", "30", "24"],
          correct: 0,
          explanation: "Differences: 1, 2, 4, 7. Second differences: 1, 2, 3 — next is 4. So next diff = 7 + 4 = 11: 15 + 11 = 26."
        },
        {
          id: "TNR1215_3_10",
          question: "What comes next? 1, 2, 5, 14, 41, ?",
          hint: "The differences triple each time.",
          options: ["122", "82", "100", "135"],
          correct: 0,
          explanation: "Differences are 1, 3, 9, 27 — each triples. Next is 81: 41 + 81 = 122."
        },
        {
          id: "TNR1215_3_11",
          question: "What comes next? 1, 2, 3, 6, 7, 14, ?",
          hint: "The pattern alternates between ×2 and +1.",
          options: ["15", "28", "16", "13"],
          correct: 0,
          explanation: "Alternating ×2 then +1: …×2 → 14, +1 → 15."
        },
        {
          id: "TNR1215_3_12",
          question: "What comes next? 1, 6, 12, 17, 34, ?",
          hint: "Two operations alternate: +5 then ×2.",
          options: ["39", "68", "44", "36"],
          correct: 0,
          explanation: "Alternating +5 then ×2: …×2 → 34, +5 → 39."
        },
        {
          id: "TNR1215_3_13",
          question: "What comes next? 2, 4, 3, 6, 5, 10, ?",
          hint: "The pattern alternates ×2 then −1.",
          options: ["9", "20", "11", "8"],
          correct: 0,
          explanation: "Alternating ×2 then −1: …×2 → 10, −1 → 9."
        },
        {
          id: "TNR1215_3_14",
          question: "What comes next? 1, 3, 9, 11, 33, ?",
          hint: "Two operations take turns: +2 then ×3.",
          options: ["35", "99", "36", "30"],
          correct: 0,
          explanation: "Alternating +2 then ×3: …×3 → 33, +2 → 35."
        },
        {
          id: "TNR1215_3_15",
          question: "What comes next? 2, 6, 4, 12, 10, 30, ?",
          hint: "Alternating operations: ×3 then −2.",
          options: ["28", "90", "32", "26"],
          correct: 0,
          explanation: "Alternating ×3 then −2: …×3 → 30, −2 → 28."
        },
        {
          id: "TNR1215_3_16",
          question: "What comes next? 3, 4, 8, 9, 18, ?",
          hint: "The operations alternate: +1 then ×2.",
          options: ["19", "36", "20", "17"],
          correct: 0,
          explanation: "Alternating +1 then ×2: …×2 → 18, +1 → 19."
        },
        {
          id: "TNR1215_3_17",
          question: "What comes next? 2, 4, 7, 14, 17, 34, ?",
          hint: "Two alternating rules: ×2 then +3.",
          options: ["37", "68", "40", "31"],
          correct: 0,
          explanation: "Alternating ×2 then +3: …×2 → 34, +3 → 37."
        },
        {
          id: "TNR1215_3_18",
          question: "What comes next? 10, 9, 18, 17, 34, ?",
          hint: "The pattern alternates −1 then ×2.",
          options: ["33", "68", "35", "30"],
          correct: 0,
          explanation: "Alternating −1 then ×2: …×2 → 34, −1 → 33."
        },
        {
          id: "TNR1215_3_19",
          question: "What comes next? 1, 5, 10, 14, 28, ?",
          hint: "Two operations alternate: +4 then ×2.",
          options: ["32", "56", "36", "24"],
          correct: 0,
          explanation: "Alternating +4 then ×2: …×2 → 28, +4 → 32."
        },
        {
          id: "TNR1215_3_20",
          question: "What comes next? 3, 6, 11, 22, 27, 54, ?",
          hint: "Alternating ×2 then +5.",
          options: ["59", "108", "64", "49"],
          correct: 0,
          explanation: "Alternating ×2 then +5: …×2 → 54, +5 → 59."
        }
      ]
    },
    {
      level: 4,
      name: "Expert",
      description: "Complex recursive formulas, interleaved sequences, and factorial patterns — the ultimate numerical reasoning challenge.",
      exercises: [
        {
          id: "TNR1215_4_01",
          question: "What comes next? 1, 5, 13, 29, ?",
          hint: "Each term = previous × 2 + 3.",
          options: ["61", "55", "58", "65"],
          correct: 0,
          explanation: "Recursive rule: each term = previous × 2 + 3. So 29 × 2 + 3 = 61."
        },
        {
          id: "TNR1215_4_02",
          question: "What comes next? 1, 3, 7, 15, 31, ?",
          hint: "Each term = previous × 2 + 1.",
          options: ["63", "47", "55", "70"],
          correct: 0,
          explanation: "Recursive rule: each term = previous × 2 + 1. So 31 × 2 + 1 = 63."
        },
        {
          id: "TNR1215_4_03",
          question: "What comes next? 2, 5, 14, 41, ?",
          hint: "Each term = previous × 3 − 1.",
          options: ["122", "82", "100", "130"],
          correct: 0,
          explanation: "Recursive rule: each term = previous × 3 − 1. So 41 × 3 − 1 = 122."
        },
        {
          id: "TNR1215_4_04",
          question: "What comes next? 3, 5, 9, 17, 33, ?",
          hint: "Each term = previous × 2 − 1.",
          options: ["65", "49", "57", "68"],
          correct: 0,
          explanation: "Recursive rule: each term = previous × 2 − 1. So 33 × 2 − 1 = 65."
        },
        {
          id: "TNR1215_4_05",
          question: "What comes next? 1, 5, 17, 53, ?",
          hint: "Each term = previous × 3 + 2.",
          options: ["161", "106", "155", "170"],
          correct: 0,
          explanation: "Recursive rule: each term = previous × 3 + 2. So 53 × 3 + 2 = 161."
        },
        {
          id: "TNR1215_4_06",
          question: "What comes next? 1, 2, 6, 24, 120, ?",
          hint: "These are factorial values: 1!, 2!, 3!, 4!, 5!, …",
          options: ["720", "240", "600", "840"],
          correct: 0,
          explanation: "Factorials: 1!, 2!, 3!, 4!, 5!, 6! = 720."
        },
        {
          id: "TNR1215_4_07",
          question: "What comes next? 1, 1, 2, 6, 24, 120, ?",
          hint: "Factorials starting from 0!.",
          options: ["720", "240", "600", "840"],
          correct: 0,
          explanation: "Factorials: 0!, 1!, 2!, 3!, 4!, 5!, 6! = 720."
        },
        {
          id: "TNR1215_4_08",
          question: "What comes next? 720, 120, 24, 6, 2, ?",
          hint: "Factorials in descending order.",
          options: ["1", "4", "3", "0"],
          correct: 0,
          explanation: "Descending factorials: 6!, 5!, 4!, 3!, 2!, 1! = 1."
        },
        {
          id: "TNR1215_4_09",
          question: "What comes next? 1, 2, 6, 24, 120, 720, ?",
          hint: "Multiply by the next integer each time: ×2, ×3, ×4, ×5, ×6, …",
          options: ["5040", "1440", "3600", "4320"],
          correct: 0,
          explanation: "Factorials: each term = previous × next integer. 720 × 7 = 5040 (which is 7!)."
        },
        {
          id: "TNR1215_4_10",
          question: "What comes next? 1, 3, 15, 105, ?",
          hint: "Multiply by successive odd numbers: ×3, ×5, ×7, ×9.",
          options: ["945", "735", "840", "1050"],
          correct: 0,
          explanation: "Double factorial (odd): 1×3=3, 3×5=15, 15×7=105, 105×9 = 945."
        },
        {
          id: "TNR1215_4_11",
          question: "What comes next? 2, 3, 4, 9, 8, 27, ?",
          hint: "Separate odd and even positions into two sequences.",
          options: ["16", "54", "12", "32"],
          correct: 0,
          explanation: "Two interleaved sequences: (2, 4, 8, ?) doubling and (3, 9, 27) tripling. Next in first: 8 × 2 = 16."
        },
        {
          id: "TNR1215_4_12",
          question: "What comes next? 1, 100, 4, 80, 9, 60, ?",
          hint: "Odd positions are perfect squares; even positions decrease by 20.",
          options: ["16", "40", "25", "12"],
          correct: 0,
          explanation: "Interleaved: (1, 4, 9, ?) are squares and (100, 80, 60) subtract 20. Next square: 4² = 16."
        },
        {
          id: "TNR1215_4_13",
          question: "What comes next? 5, 2, 10, 4, 20, 8, ?",
          hint: "Two doubling sequences woven together.",
          options: ["40", "16", "32", "24"],
          correct: 0,
          explanation: "Interleaved: (5, 10, 20, ?) and (2, 4, 8), both ×2. Next: 20 × 2 = 40."
        },
        {
          id: "TNR1215_4_14",
          question: "What comes next? 1, 1, 2, 4, 6, 16, 24, ?",
          hint: "One sub-sequence is factorials, the other is powers of 4.",
          options: ["64", "48", "120", "32"],
          correct: 0,
          explanation: "Interleaved: (1, 2, 6, 24) are factorials and (1, 4, 16, ?) are powers of 4. Next: 4³ = 64."
        },
        {
          id: "TNR1215_4_15",
          question: "What comes next? 3, 1, 9, 4, 27, 9, ?",
          hint: "Odd positions triple; even positions are perfect squares.",
          options: ["81", "16", "36", "54"],
          correct: 0,
          explanation: "Interleaved: (3, 9, 27, ?) tripling and (1, 4, 9) are squares. Next: 27 × 3 = 81."
        },
        {
          id: "TNR1215_4_16",
          question: "What comes next? 1, 1, 1, 3, 5, 9, 17, ?",
          hint: "Each term is the sum of the three terms before it (Tribonacci).",
          options: ["31", "26", "33", "27"],
          correct: 0,
          explanation: "Tribonacci: each term = sum of previous three. 5 + 9 + 17 = 31."
        },
        {
          id: "TNR1215_4_17",
          question: "What comes next? 1, 1, 3, 7, 17, 41, ?",
          hint: "Each term = 2 × previous + the one before that.",
          options: ["99", "82", "89", "105"],
          correct: 0,
          explanation: "Recursive: a(n) = 2 × a(n−1) + a(n−2). So 2 × 41 + 17 = 99."
        },
        {
          id: "TNR1215_4_18",
          question: "What comes next? 1, 7, 19, 43, 91, ?",
          hint: "Each term = previous × 2 + 5.",
          options: ["187", "137", "182", "193"],
          correct: 0,
          explanation: "Recursive rule: each term = previous × 2 + 5. So 91 × 2 + 5 = 187."
        },
        {
          id: "TNR1215_4_19",
          question: "What comes next? 2, 3, 7, 13, 27, ?",
          hint: "Each term = previous + 2 × the one before that.",
          options: ["53", "40", "47", "60"],
          correct: 0,
          explanation: "Recursive: a(n) = a(n−1) + 2 × a(n−2). So 27 + 2 × 13 = 53."
        },
        {
          id: "TNR1215_4_20",
          question: "What comes next? 2, 5, 11, 23, 47, ?",
          hint: "Each term = previous × 2 + 1.",
          options: ["95", "70", "85", "94"],
          correct: 0,
          explanation: "Recursive rule: each term = previous × 2 + 1. So 47 × 2 + 1 = 95."
        }
      ]
    }
  ]
};
