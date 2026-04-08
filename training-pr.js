const TRAINING_PR = {
  tips: [
    {
      title: "Scan Rows, Columns, and Diagonals",
      content: "When facing a pattern, systematically examine each row, column, and diagonal. Identify what changes between cells and what stays the same — this often reveals the underlying rule."
    },
    {
      title: "Count Elements Systematically",
      content: "Track the quantity of shapes, lines, or dots in each cell. Many patterns rely on counts that increase, decrease, or follow arithmetic rules across rows or columns."
    },
    {
      title: "Watch for Transformations",
      content: "Look for geometric transformations such as rotation, reflection (flip), size change, or fill toggling (filled vs. empty). A single transformation applied repeatedly can define the entire pattern."
    },
    {
      title: "Eliminate Wrong Answers",
      content: "Once you identify a possible rule, test each answer option against it. Eliminating options that violate even one discovered rule quickly narrows down the correct answer."
    }
  ],

  levels: [
    // ========================= LEVEL 1 — Beginner =========================
    {
      level: 1,
      name: "Beginner",
      description: "Simple counting, basic repetition, and straightforward sequential patterns",
      exercises: [
        {
          id: "TPR1_01",
          question: "What comes next? ◇, ◇◇, ◇◇◇, ◇◇◇◇, ?",
          hint: "Count the diamonds in each step.",
          options: ["◇◇◇◇◇", "◇◇◇", "◇◇◇◇", "◇◇"],
          correct: 0,
          explanation: "Each step adds one diamond: 1, 2, 3, 4, so next is 5 diamonds."
        },
        {
          id: "TPR1_02",
          question: "What comes next? A, B, C, D, E, ?",
          hint: "Think about the order of the alphabet.",
          options: ["F", "G", "D", "A"],
          correct: 0,
          explanation: "These are consecutive letters of the alphabet, so the next letter is F."
        },
        {
          id: "TPR1_03",
          question: "What comes next? 1, 2, 3, 4, 5, ?",
          hint: "Each number increases by the same amount.",
          options: ["6", "7", "5", "8"],
          correct: 0,
          explanation: "Each number increases by 1, so after 5 comes 6."
        },
        {
          id: "TPR1_04",
          question: "What comes next? 2, 4, 6, 8, ?",
          hint: "Look at the difference between consecutive numbers.",
          options: ["10", "12", "9", "11"],
          correct: 0,
          explanation: "The pattern counts by 2s. After 8, the next even number is 10."
        },
        {
          id: "TPR1_05",
          question: "What comes next? A, B, A, B, A, ?",
          hint: "Notice the alternating pattern.",
          options: ["B", "A", "C", "D"],
          correct: 0,
          explanation: "The pattern alternates A, B repeatedly, so after A comes B."
        },
        {
          id: "TPR1_06",
          question: "What comes next? □, □□, □□□, ?",
          hint: "Count the squares at each step.",
          options: ["□□□□", "□□", "□□□□□", "□□□"],
          correct: 0,
          explanation: "Each step adds one square: 1, 2, 3, so next is 4 squares."
        },
        {
          id: "TPR1_07",
          question: "What comes next? Z, Y, X, W, ?",
          hint: "The alphabet is going in reverse.",
          options: ["V", "U", "X", "T"],
          correct: 0,
          explanation: "The letters go backwards through the alphabet: Z, Y, X, W, V."
        },
        {
          id: "TPR1_08",
          question: "What comes next? 10, 20, 30, 40, ?",
          hint: "Each number increases by the same amount.",
          options: ["50", "45", "60", "55"],
          correct: 0,
          explanation: "The pattern counts by 10s. After 40, the next is 50."
        },
        {
          id: "TPR1_09",
          question: "What comes next? 3, 6, 9, 12, ?",
          hint: "Each number increases by the same amount.",
          options: ["15", "14", "18", "13"],
          correct: 0,
          explanation: "The pattern counts by 3s. After 12, the next multiple of 3 is 15."
        },
        {
          id: "TPR1_10",
          question: "Complete the grid: 1, 3, 5 / 7, 9, 11 / 13, 15, ?",
          hint: "List the odd numbers in order, row by row.",
          options: ["17", "16", "19", "18"],
          correct: 0,
          explanation: "The grid lists consecutive odd numbers: 1, 3, 5, 7, …, 15, 17."
        },
        {
          id: "TPR1_11",
          question: "What comes next? ★, ★★, ★★★, ★★★★, ?",
          hint: "Count the stars in each step.",
          options: ["★★★★★", "★★★★", "★★★", "★★★★★★"],
          correct: 0,
          explanation: "Each step adds one star: 1, 2, 3, 4, so next is 5 stars."
        },
        {
          id: "TPR1_12",
          question: "What comes next? 6, 12, 18, 24, ?",
          hint: "What is each number a multiple of?",
          options: ["30", "28", "36", "32"],
          correct: 0,
          explanation: "The pattern counts by 6s. After 24, the next multiple of 6 is 30."
        },
        {
          id: "TPR1_13",
          question: "What comes next? M, N, O, P, ?",
          hint: "These are consecutive letters in the alphabet.",
          options: ["Q", "R", "N", "S"],
          correct: 0,
          explanation: "The letters continue sequentially through the alphabet: M, N, O, P, Q."
        },
        {
          id: "TPR1_14",
          question: "What comes next? 1, 1, 1, 1, ?",
          hint: "Does the value ever change?",
          options: ["1", "2", "0", "3"],
          correct: 0,
          explanation: "Every term is 1 — the pattern is constant, so the next value is 1."
        },
        {
          id: "TPR1_15",
          question: "What comes next? ♥, ♦, ♥, ♦, ♥, ?",
          hint: "Two symbols take turns.",
          options: ["♦", "♥", "♣", "♠"],
          correct: 0,
          explanation: "The pattern alternates heart, diamond. After heart comes diamond."
        },
        {
          id: "TPR1_16",
          question: "What comes next? 8, 16, 24, 32, ?",
          hint: "Look at the difference between consecutive numbers.",
          options: ["40", "36", "48", "38"],
          correct: 0,
          explanation: "The pattern counts by 8s. After 32, the next multiple of 8 is 40."
        },
        {
          id: "TPR1_17",
          question: "What comes next? ♠, ♠♠, ♠♠♠, ?",
          hint: "Count the spades at each step.",
          options: ["♠♠♠♠", "♠♠", "♠♠♠", "♠♠♠♠♠"],
          correct: 0,
          explanation: "Each step adds one spade: 1, 2, 3, so next is 4 spades."
        },
        {
          id: "TPR1_18",
          question: "What comes next? 30, 27, 24, 21, ?",
          hint: "The numbers are decreasing by a fixed amount.",
          options: ["18", "20", "15", "19"],
          correct: 0,
          explanation: "Each number decreases by 3. After 21, the next value is 18."
        },
        {
          id: "TPR1_19",
          question: "What comes next? 7, 14, 21, 28, ?",
          hint: "Each number is a multiple of a single digit.",
          options: ["35", "36", "32", "42"],
          correct: 0,
          explanation: "The pattern counts by 7s. After 28, the next multiple of 7 is 35."
        },
        {
          id: "TPR1_20",
          question: "Complete the grid: 2, 4, 6 / 8, 10, 12 / 14, 16, ?",
          hint: "List the even numbers row by row.",
          options: ["18", "20", "17", "19"],
          correct: 0,
          explanation: "The grid lists consecutive even numbers: 2, 4, 6, 8, …, 16, 18."
        }
      ]
    },

    // ========================= LEVEL 2 — Elementary =========================
    {
      level: 2,
      name: "Elementary",
      description: "Growing alternation, simple grids, paired sequences, and two-element patterns",
      exercises: [
        {
          id: "TPR2_01",
          question: "What comes next? X, XY, XYX, XYXY, ?",
          hint: "Each step adds one more character, alternating X and Y.",
          options: ["XYXYX", "XYXYY", "YXYXY", "XYXY"],
          correct: 0,
          explanation: "The pattern grows by appending alternating characters. The 5th term has 5 characters: XYXYX."
        },
        {
          id: "TPR2_02",
          question: "Grid: 3, 6, 9 / 5, 10, 15 / 8, 16, ?",
          hint: "Look at how each row relates to its first number.",
          options: ["24", "20", "18", "32"],
          correct: 0,
          explanation: "Each row multiplies the first number by 1, 2, 3. Row 3: 8×1=8, 8×2=16, 8×3=24."
        },
        {
          id: "TPR2_03",
          question: "What comes next? AA, BB, CC, DD, ?",
          hint: "Each pair uses the next letter of the alphabet.",
          options: ["EE", "FF", "DE", "AB"],
          correct: 0,
          explanation: "Each term is a doubled consecutive letter: A, B, C, D, E → EE."
        },
        {
          id: "TPR2_04",
          question: "What comes next? 1, 3, 5, 7, 9, ?",
          hint: "These are all odd numbers.",
          options: ["11", "10", "13", "12"],
          correct: 0,
          explanation: "The sequence lists consecutive odd numbers. After 9, the next odd number is 11."
        },
        {
          id: "TPR2_05",
          question: "What comes next? ○●, ○●○, ○●○●, ○●○●○, ?",
          hint: "Each step adds one more alternating shape.",
          options: ["○●○●○●", "○●○●○○", "●○●○●○", "○●○●●○"],
          correct: 0,
          explanation: "The pattern grows by one shape each time, alternating ○ and ●. The next has 6 shapes: ○●○●○●."
        },
        {
          id: "TPR2_06",
          question: "What comes next? 2, 6, 10, 14, ?",
          hint: "Find the constant difference between terms.",
          options: ["18", "16", "20", "15"],
          correct: 0,
          explanation: "Each number increases by 4. After 14, the next value is 18."
        },
        {
          id: "TPR2_07",
          question: "What comes next? AB, CD, EF, GH, ?",
          hint: "Each pair uses the next two consecutive letters.",
          options: ["IJ", "JK", "HI", "KL"],
          correct: 0,
          explanation: "The pairs step through the alphabet two letters at a time: AB, CD, EF, GH, IJ."
        },
        {
          id: "TPR2_08",
          question: "Grid: 1, 3, 5 / 2, 4, 6 / 3, 5, ?",
          hint: "Each row starts one higher and adds the same amount.",
          options: ["7", "8", "6", "9"],
          correct: 0,
          explanation: "Each row lists three numbers increasing by 2. Row 3 starts at 3: 3, 5, 7."
        },
        {
          id: "TPR2_09",
          question: "What comes next? ○, ■, ○, ■, ○, ■, ?",
          hint: "Two shapes repeat in a cycle.",
          options: ["○", "■", "△", "◇"],
          correct: 0,
          explanation: "The pattern alternates ○ and ■. After ■, the next shape is ○."
        },
        {
          id: "TPR2_10",
          question: "What comes next? 20, 17, 14, 11, ?",
          hint: "The numbers decrease by a fixed amount.",
          options: ["8", "9", "7", "10"],
          correct: 0,
          explanation: "Each number decreases by 3. After 11, the next value is 8."
        },
        {
          id: "TPR2_11",
          question: "What comes next? ABA, BCB, CDC, DED, ?",
          hint: "Look at how the three letters in each group shift.",
          options: ["EFE", "FGF", "DEF", "EEE"],
          correct: 0,
          explanation: "Each group follows the pattern: letter, next letter, same first letter — shifted by one each time. After DED comes EFE."
        },
        {
          id: "TPR2_12",
          question: "Grid: 5, 10, 15 / 6, 12, 18 / 7, 14, ?",
          hint: "Each row multiplies the first number by 1, 2, and 3.",
          options: ["21", "20", "24", "28"],
          correct: 0,
          explanation: "Row 3: 7×1=7, 7×2=14, 7×3=21."
        },
        {
          id: "TPR2_13",
          question: "What comes next? 0, 2, 4, 6, 8, ?",
          hint: "These are consecutive even numbers starting from 0.",
          options: ["10", "12", "9", "11"],
          correct: 0,
          explanation: "The sequence lists even numbers: 0, 2, 4, 6, 8, 10."
        },
        {
          id: "TPR2_14",
          question: "What comes next? ○○, ■■, ○○, ■■, ?",
          hint: "Pairs of shapes alternate.",
          options: ["○○", "■■", "○■", "■○"],
          correct: 0,
          explanation: "The pattern alternates pairs: ○○, ■■, ○○, ■■, ○○."
        },
        {
          id: "TPR2_15",
          question: "What comes next? 3, 7, 11, 15, 19, ?",
          hint: "Find the common difference between terms.",
          options: ["23", "22", "21", "24"],
          correct: 0,
          explanation: "Each number increases by 4. After 19, the next value is 23."
        },
        {
          id: "TPR2_16",
          question: "Grid: 1, 2, 3 / 2, 4, 6 / 3, 6, ?",
          hint: "Compare each row to the row above it.",
          options: ["9", "8", "10", "12"],
          correct: 0,
          explanation: "Row n multiplies 1, 2, 3 by n. Row 3: 3×1=3, 3×2=6, 3×3=9."
        },
        {
          id: "TPR2_17",
          question: "What comes next? XY, WX, VW, UV, ?",
          hint: "Each pair shifts one letter back in the alphabet.",
          options: ["TU", "ST", "RS", "SU"],
          correct: 0,
          explanation: "Each pair moves one letter back: XY → WX → VW → UV → TU."
        },
        {
          id: "TPR2_18",
          question: "What comes next? 40, 36, 32, 28, ?",
          hint: "The numbers decrease by a constant.",
          options: ["24", "25", "22", "20"],
          correct: 0,
          explanation: "Each number decreases by 4. After 28, the next value is 24."
        },
        {
          id: "TPR2_19",
          question: "What comes next? ○, ○○, ■, ■■, ○, ?",
          hint: "A single shape is followed by a double of the same, then the next shape.",
          options: ["○○", "■", "○", "■■"],
          correct: 0,
          explanation: "The cycle is: single ○, double ○○, single ■, double ■■, then repeats. After ○ comes ○○."
        },
        {
          id: "TPR2_20",
          question: "Grid: 10, 20, 30 / 11, 22, 33 / 12, 24, ?",
          hint: "Each row multiplies the first number by 1, 2, and 3.",
          options: ["36", "34", "38", "48"],
          correct: 0,
          explanation: "Row 3: 12×1=12, 12×2=24, 12×3=36."
        }
      ]
    },

    // ========================= LEVEL 3 — Intermediate =========================
    {
      level: 3,
      name: "Intermediate",
      description: "Number grids with operations, multi-step sequences, and increasing-difference patterns",
      exercises: [
        {
          id: "TPR3_01",
          question: "What comes next? 2, 3, 5, 8, 12, ?",
          hint: "Look at the differences between consecutive terms — they grow by 1.",
          options: ["17", "15", "16", "18"],
          correct: 0,
          explanation: "Differences are 1, 2, 3, 4, so the next difference is 5: 12 + 5 = 17."
        },
        {
          id: "TPR3_02",
          question: "Grid: 3, 5, 15 / 4, 6, 24 / 7, 3, ?",
          hint: "How do the first two columns relate to the third?",
          options: ["21", "10", "24", "30"],
          correct: 0,
          explanation: "Column 1 × Column 2 = Column 3. Row 3: 7 × 3 = 21."
        },
        {
          id: "TPR3_03",
          question: "What comes next? 49, 36, 25, 16, 9, ?",
          hint: "Each term is a perfect square — which squares are these?",
          options: ["4", "1", "6", "3"],
          correct: 0,
          explanation: "The sequence is 7², 6², 5², 4², 3², so next is 2² = 4."
        },
        {
          id: "TPR3_04",
          question: "What comes next? 20, 18, 15, 11, 6, ?",
          hint: "The amount subtracted increases by 1 each step.",
          options: ["0", "1", "2", "−1"],
          correct: 0,
          explanation: "Differences are −2, −3, −4, −5, so next difference is −6: 6 − 6 = 0."
        },
        {
          id: "TPR3_05",
          question: "Grid: 3, 9, 27 / 4, 16, 64 / 6, 36, ?",
          hint: "Each row uses powers of the first number.",
          options: ["216", "180", "108", "72"],
          correct: 0,
          explanation: "Row pattern is n¹, n², n³. Row 3: 6, 36, 216."
        },
        {
          id: "TPR3_06",
          question: "What comes next? 3, 5, 9, 15, 23, ?",
          hint: "Compute the differences — they form their own pattern.",
          options: ["33", "31", "35", "29"],
          correct: 0,
          explanation: "Differences are 2, 4, 6, 8, so the next difference is 10: 23 + 10 = 33."
        },
        {
          id: "TPR3_07",
          question: "Grid: 1, 5, 6 / 2, 8, 10 / 3, 11, ?",
          hint: "Add the first two columns in each row.",
          options: ["14", "13", "15", "33"],
          correct: 0,
          explanation: "Column 1 + Column 2 = Column 3. Row 3: 3 + 11 = 14."
        },
        {
          id: "TPR3_08",
          question: "What comes next? 1, 6, 15, 28, 45, ?",
          hint: "Look at the differences, then the differences of the differences.",
          options: ["66", "60", "56", "72"],
          correct: 0,
          explanation: "Differences are 5, 9, 13, 17 (increasing by 4). Next difference is 21: 45 + 21 = 66."
        },
        {
          id: "TPR3_09",
          question: "What comes next? 100, 95, 85, 70, 50, ?",
          hint: "How much is subtracted each step? That amount grows.",
          options: ["25", "30", "20", "35"],
          correct: 0,
          explanation: "Differences are −5, −10, −15, −20, so next is −25: 50 − 25 = 25."
        },
        {
          id: "TPR3_10",
          question: "Grid: 3, 4, 12 / 5, 6, 30 / 7, 8, ?",
          hint: "How does column 3 relate to columns 1 and 2?",
          options: ["56", "15", "48", "60"],
          correct: 0,
          explanation: "Column 1 × Column 2 = Column 3. Row 3: 7 × 8 = 56."
        },
        {
          id: "TPR3_11",
          question: "What comes next? 3, 8, 15, 24, 35, ?",
          hint: "Try expressing each term as n² minus something.",
          options: ["48", "44", "50", "42"],
          correct: 0,
          explanation: "Each term is n² − 1: 2²−1=3, 3²−1=8, 4²−1=15, 5²−1=24, 6²−1=35, 7²−1=48."
        },
        {
          id: "TPR3_12",
          question: "Grid: 2, 10, 5 / 3, 18, 6 / 4, 28, ?",
          hint: "How does column 3 relate to the other columns?",
          options: ["7", "8", "12", "32"],
          correct: 0,
          explanation: "Column 2 ÷ Column 1 = Column 3. Row 3: 28 ÷ 4 = 7."
        },
        {
          id: "TPR3_13",
          question: "What comes next? 5, 6, 8, 11, 15, 20, ?",
          hint: "The differences between terms increase by 1 each time.",
          options: ["26", "25", "27", "24"],
          correct: 0,
          explanation: "Differences are 1, 2, 3, 4, 5, so next difference is 6: 20 + 6 = 26."
        },
        {
          id: "TPR3_14",
          question: "What comes next? 2, 5, 10, 17, 26, ?",
          hint: "Try the formula n² + 1 for consecutive values of n.",
          options: ["37", "35", "38", "36"],
          correct: 0,
          explanation: "Each term is n² + 1: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, 6²+1=37."
        },
        {
          id: "TPR3_15",
          question: "Grid: 2, 5, 7 / 3, 4, 7 / 8, 3, ?",
          hint: "Add the first two columns in each row.",
          options: ["11", "24", "5", "10"],
          correct: 0,
          explanation: "Column 1 + Column 2 = Column 3. Row 3: 8 + 3 = 11."
        },
        {
          id: "TPR3_16",
          question: "Grid: 6, 2, 3 / 15, 3, 5 / 24, 4, ?",
          hint: "Divide column 1 by column 2.",
          options: ["6", "8", "7", "28"],
          correct: 0,
          explanation: "Column 1 ÷ Column 2 = Column 3. Row 3: 24 ÷ 4 = 6."
        },
        {
          id: "TPR3_17",
          question: "What comes next? 2, 8, 32, 128, ?",
          hint: "Each term is multiplied by the same number.",
          options: ["512", "256", "384", "640"],
          correct: 0,
          explanation: "Each term is multiplied by 4. After 128, the next is 128 × 4 = 512."
        },
        {
          id: "TPR3_18",
          question: "What comes next? 10, 12, 16, 22, 30, ?",
          hint: "Check how the gap between terms changes.",
          options: ["40", "38", "42", "36"],
          correct: 0,
          explanation: "Differences are 2, 4, 6, 8, so next difference is 10: 30 + 10 = 40."
        },
        {
          id: "TPR3_19",
          question: "What comes next? 4, 7, 12, 19, 28, ?",
          hint: "The differences between terms grow by 2 each time.",
          options: ["39", "37", "41", "35"],
          correct: 0,
          explanation: "Differences are 3, 5, 7, 9, so next difference is 11: 28 + 11 = 39."
        },
        {
          id: "TPR3_20",
          question: "Grid: 4, 2, 8 / 9, 3, 27 / 16, 4, ?",
          hint: "Column 1 is a perfect square. What are the cube values?",
          options: ["64", "48", "32", "20"],
          correct: 0,
          explanation: "Column 1 = n², Column 2 = n, Column 3 = n³. Row 3: 4² = 16, 4, 4³ = 64."
        }
      ]
    },

    // ========================= LEVEL 4 — Advanced =========================
    {
      level: 4,
      name: "Advanced",
      description: "Power patterns, complex grids, second-difference sequences, and alternating operations",
      exercises: [
        {
          id: "TPR4_01",
          question: "What comes next? 1, 16, 81, 256, ?",
          hint: "Each term is a fourth power.",
          options: ["625", "512", "500", "1024"],
          correct: 0,
          explanation: "The sequence is 1⁴, 2⁴, 3⁴, 4⁴, so next is 5⁴ = 625."
        },
        {
          id: "TPR4_02",
          question: "Grid: 5, 25, 125 / 6, 36, 216 / 7, 49, ?",
          hint: "Each row shows n, n², n³.",
          options: ["343", "294", "350", "336"],
          correct: 0,
          explanation: "Row 3: 7¹ = 7, 7² = 49, 7³ = 343."
        },
        {
          id: "TPR4_03",
          question: "What comes next? 2, 8, 26, 80, 242, ?",
          hint: "Try expressing each term as a power of 3 minus 1.",
          options: ["728", "486", "720", "500"],
          correct: 0,
          explanation: "Each term is 3ⁿ − 1: 3¹−1=2, 3²−1=8, 3³−1=26, 3⁴−1=80, 3⁵−1=242, 3⁶−1=728."
        },
        {
          id: "TPR4_04",
          question: "What comes next? 1, 4, 13, 40, 121, ?",
          hint: "Each term is tripled and then increased by 1.",
          options: ["364", "242", "360", "400"],
          correct: 0,
          explanation: "Each term = previous × 3 + 1: 1→4, 4→13, 13→40, 40→121, 121→364."
        },
        {
          id: "TPR4_05",
          question: "What comes next? 2, 3, 5, 8, 13, ?",
          hint: "Look at the differences — they follow a familiar pattern.",
          options: ["21", "18", "20", "16"],
          correct: 0,
          explanation: "Differences are 1, 2, 3, 5, 8 — each difference equals the sum of the two before it. Next difference is 8, so 13 + 8 = 21."
        },
        {
          id: "TPR4_06",
          question: "What comes next? 1, 4, 10, 20, 35, ?",
          hint: "Look at the second differences — they increase by 1.",
          options: ["56", "50", "48", "55"],
          correct: 0,
          explanation: "First differences: 3, 6, 10, 15. Second differences: 3, 4, 5 → next is 6. Next first difference: 21. Answer: 35 + 21 = 56."
        },
        {
          id: "TPR4_07",
          question: "What comes next? 1, 3, 2, 6, 4, 12, 8, ?",
          hint: "Split the sequence into odd-positioned and even-positioned terms.",
          options: ["24", "16", "10", "20"],
          correct: 0,
          explanation: "Odd positions: 1, 2, 4, 8 (×2). Even positions: 3, 6, 12, 24 (×2). The next even-position term is 24."
        },
        {
          id: "TPR4_08",
          question: "Grid: 2, 3, 11 / 4, 5, 29 / 6, 7, ?",
          hint: "Try multiplying (Col1 + 1) by (Col2 + 1) and adjusting.",
          options: ["55", "42", "48", "53"],
          correct: 0,
          explanation: "Column 3 = (Column 1 + 1) × (Column 2 + 1) − 1. Row 3: 7 × 8 − 1 = 55."
        },
        {
          id: "TPR4_09",
          question: "What comes next? 256, 128, 64, 32, 16, ?",
          hint: "Each term is halved.",
          options: ["8", "4", "12", "10"],
          correct: 0,
          explanation: "Each term is divided by 2. After 16, the next is 16 ÷ 2 = 8."
        },
        {
          id: "TPR4_10",
          question: "Grid: 1, 2, 3, 6 / 2, 3, 5, 30 / 3, 4, 7, ?",
          hint: "How does the last column relate to the first three?",
          options: ["84", "14", "21", "72"],
          correct: 0,
          explanation: "Column 4 = Column 1 × Column 2 × Column 3. Row 3: 3 × 4 × 7 = 84."
        },
        {
          id: "TPR4_11",
          question: "What comes next? 2, 6, 18, 54, ?",
          hint: "Each term is multiplied by the same number.",
          options: ["162", "108", "144", "216"],
          correct: 0,
          explanation: "Each term is multiplied by 3. After 54, the next is 54 × 3 = 162."
        },
        {
          id: "TPR4_12",
          question: "What comes next? 1, 5, 14, 30, 55, ?",
          hint: "The differences between terms are perfect squares.",
          options: ["91", "80", "85", "90"],
          correct: 0,
          explanation: "Differences are 4, 9, 16, 25 (which are 2², 3², 4², 5²). Next difference is 6² = 36: 55 + 36 = 91."
        },
        {
          id: "TPR4_13",
          question: "What comes next? 1000, 500, 250, 125, ?",
          hint: "Each term is halved.",
          options: ["62.5", "60", "75", "100"],
          correct: 0,
          explanation: "Each term is divided by 2. After 125, the next is 125 ÷ 2 = 62.5."
        },
        {
          id: "TPR4_14",
          question: "Grid: 10, 3, 7 / 20, 8, 12 / 30, 11, ?",
          hint: "How do the columns relate arithmetically?",
          options: ["19", "20", "21", "41"],
          correct: 0,
          explanation: "Column 1 − Column 2 = Column 3. Row 3: 30 − 11 = 19."
        },
        {
          id: "TPR4_15",
          question: "What comes next? 4, 5, 9, 14, 23, 37, ?",
          hint: "Each term is the sum of the two preceding terms.",
          options: ["60", "51", "56", "74"],
          correct: 0,
          explanation: "Like Fibonacci: each term = sum of previous two. 23 + 37 = 60."
        },
        {
          id: "TPR4_16",
          question: "Grid: 2, 8, 3 / 3, 27, 8 / 4, 64, ?",
          hint: "Column 2 is a power of Column 1. What pattern does Column 3 follow?",
          options: ["15", "16", "12", "20"],
          correct: 0,
          explanation: "Column 2 = Column 1³. Column 3 = Column 1² − 1: 2²−1=3, 3²−1=8, 4²−1=15."
        },
        {
          id: "TPR4_17",
          question: "What comes next? 1, 5, 21, 85, ?",
          hint: "Try multiplying each term by 4 and adding 1.",
          options: ["341", "256", "340", "345"],
          correct: 0,
          explanation: "Each term = previous × 4 + 1: 1→5, 5→21, 21→85, 85→341."
        },
        {
          id: "TPR4_18",
          question: "What comes next? 1, 2, 5, 12, 29, ?",
          hint: "Each term uses the two previous terms with a multiplier.",
          options: ["70", "58", "65", "72"],
          correct: 0,
          explanation: "Rule: a(n) = 2×a(n−1) + a(n−2). Check: 2×2+1=5, 2×5+2=12, 2×12+5=29, 2×29+12=70."
        },
        {
          id: "TPR4_19",
          question: "Grid: 3, 2, 11 / 4, 3, 19 / 5, 4, ?",
          hint: "Try squaring Column 1 and adding Column 2.",
          options: ["29", "20", "25", "30"],
          correct: 0,
          explanation: "Column 3 = Column 1² + Column 2. Row 3: 5² + 4 = 25 + 4 = 29."
        },
        {
          id: "TPR4_20",
          question: "Grid: 4, 3, 13 / 5, 2, 23 / 6, 1, ?",
          hint: "Try squaring Column 1 and subtracting Column 2.",
          options: ["35", "30", "36", "42"],
          correct: 0,
          explanation: "Column 3 = Column 1² − Column 2. Row 3: 6² − 1 = 36 − 1 = 35."
        }
      ]
    },

    // ========================= LEVEL 5 — Expert =========================
    {
      level: 5,
      name: "Expert",
      description: "Primes, Fibonacci variations, complex power grids, and multi-rule patterns",
      exercises: [
        {
          id: "TPR5_01",
          question: "What comes next in the prime sequence? 23, 29, 31, 37, 41, ?",
          hint: "List the prime numbers after 41.",
          options: ["43", "42", "45", "47"],
          correct: 0,
          explanation: "The sequence lists consecutive primes. After 41, the next prime is 43."
        },
        {
          id: "TPR5_02",
          question: "What comes next? 2, 1, 3, 4, 7, 11, 18, ?",
          hint: "Each term is the sum of the previous two terms.",
          options: ["29", "25", "27", "36"],
          correct: 0,
          explanation: "This is a Lucas-like sequence: each term = sum of the two before it. 11 + 18 = 29."
        },
        {
          id: "TPR5_03",
          question: "Grid: 2, 8, 32 / 3, 27, 243 / 5, 125, ?",
          hint: "Each column uses an odd power of the first number.",
          options: ["3125", "625", "1250", "1500"],
          correct: 0,
          explanation: "Row pattern is n¹, n³, n⁵. Row 3: 5¹=5, 5³=125, 5⁵=3125."
        },
        {
          id: "TPR5_04",
          question: "What comes next? 4, 6, 10, 14, 22, 26, ?",
          hint: "Each term is twice a prime number. Which primes?",
          options: ["34", "30", "32", "38"],
          correct: 0,
          explanation: "Each term is 2 × a consecutive prime: 2×2=4, 2×3=6, 2×5=10, 2×7=14, 2×11=22, 2×13=26, 2×17=34."
        },
        {
          id: "TPR5_05",
          question: "What comes next? 0, 0, 1, 1, 2, 4, 7, 13, ?",
          hint: "Each term is the sum of the previous three terms.",
          options: ["24", "20", "26", "19"],
          correct: 0,
          explanation: "This is the Tribonacci sequence: each term = sum of the three before it. 4 + 7 + 13 = 24."
        },
        {
          id: "TPR5_06",
          question: "What comes next? 2, 12, 36, 80, 150, ?",
          hint: "Try expressing each term as n²(n + 1).",
          options: ["252", "210", "240", "260"],
          correct: 0,
          explanation: "Each term is n²(n+1): 1²×2=2, 2²×3=12, 3²×4=36, 4²×5=80, 5²×6=150, 6²×7=252."
        },
        {
          id: "TPR5_07",
          question: "Grid: 1, 2, 5 / 2, 3, 13 / 4, 5, ?",
          hint: "Try squaring each of the first two columns and adding.",
          options: ["41", "20", "45", "36"],
          correct: 0,
          explanation: "Column 3 = Column 1² + Column 2². Row 3: 4² + 5² = 16 + 25 = 41."
        },
        {
          id: "TPR5_08",
          question: "What comes next? 2, 8, 18, 32, 50, ?",
          hint: "Try expressing each term as 2n² for consecutive values of n.",
          options: ["72", "60", "68", "80"],
          correct: 0,
          explanation: "Each term is 2n²: 2(1²)=2, 2(2²)=8, 2(3²)=18, 2(4²)=32, 2(5²)=50, 2(6²)=72."
        },
        {
          id: "TPR5_09",
          question: "What comes next? 2, 4, 16, 256, ?",
          hint: "Each term is the square of the previous term.",
          options: ["65536", "512", "1024", "4096"],
          correct: 0,
          explanation: "Each term = previous². 2²=4, 4²=16, 16²=256, 256²=65536."
        },
        {
          id: "TPR5_10",
          question: "What comes next? 47, 43, 41, 37, 31, 29, ?",
          hint: "These are prime numbers in descending order.",
          options: ["23", "27", "25", "19"],
          correct: 0,
          explanation: "The sequence lists consecutive primes in reverse. After 29, the next smaller prime is 23."
        },
        {
          id: "TPR5_11",
          question: "Grid: 2, 3, 7 / 4, 5, 21 / 6, 7, ?",
          hint: "Multiply the first two columns and adjust by 1.",
          options: ["43", "42", "44", "40"],
          correct: 0,
          explanation: "Column 3 = Column 1 × Column 2 + 1. Row 3: 6 × 7 + 1 = 43."
        },
        {
          id: "TPR5_12",
          question: "What comes next? 1, 5, 12, 22, 35, ?",
          hint: "These are pentagonal numbers: n(3n − 1)/2.",
          options: ["51", "48", "50", "55"],
          correct: 0,
          explanation: "Pentagonal numbers: n(3n−1)/2. For n=6: 6×17/2 = 51."
        },
        {
          id: "TPR5_13",
          question: "What comes next? 2, 6, 30, 210, ?",
          hint: "Each term is multiplied by the next prime number.",
          options: ["2310", "1470", "1260", "1890"],
          correct: 0,
          explanation: "2×3=6, 6×5=30, 30×7=210, 210×11=2310. Each step multiplies by the next prime."
        },
        {
          id: "TPR5_14",
          question: "Grid: 4, 16, 64 / 6, 36, 216 / 8, 64, ?",
          hint: "Each row shows powers of the first number.",
          options: ["512", "256", "480", "128"],
          correct: 0,
          explanation: "Row pattern is n¹, n², n³. Row 3: 8, 64, 512."
        },
        {
          id: "TPR5_15",
          question: "What comes next? 1, 3, 11, 43, ?",
          hint: "Each term is multiplied by 4 and decreased by 1.",
          options: ["171", "170", "172", "160"],
          correct: 0,
          explanation: "Each term = previous × 4 − 1: 1→3, 3→11, 11→43, 43→171."
        },
        {
          id: "TPR5_16",
          question: "What comes next? 59, 53, 47, 43, 41, 37, ?",
          hint: "These are primes listed in descending order.",
          options: ["31", "33", "29", "35"],
          correct: 0,
          explanation: "The sequence lists consecutive primes in reverse order. After 37, the next smaller prime is 31."
        },
        {
          id: "TPR5_17",
          question: "What comes next? 27, 125, 343, 729, ?",
          hint: "Each term is a cube — but of which numbers?",
          options: ["1331", "1000", "1200", "1500"],
          correct: 0,
          explanation: "These are cubes of consecutive odd numbers: 3³=27, 5³=125, 7³=343, 9³=729, 11³=1331."
        },
        {
          id: "TPR5_18",
          question: "Grid: 3, 2, 18 / 4, 3, 48 / 5, 4, ?",
          hint: "Try squaring Column 1 and multiplying by Column 2.",
          options: ["100", "80", "60", "125"],
          correct: 0,
          explanation: "Column 3 = Column 1² × Column 2. Row 3: 5² × 4 = 25 × 4 = 100."
        },
        {
          id: "TPR5_19",
          question: "What comes next? 2, 3, 6, 7, 14, 15, ?",
          hint: "The sequence alternates between two operations.",
          options: ["30", "16", "28", "22"],
          correct: 0,
          explanation: "The pattern alternates +1 and ×2: 2+1=3, 3×2=6, 6+1=7, 7×2=14, 14+1=15, 15×2=30."
        },
        {
          id: "TPR5_20",
          question: "What comes next? 1, 9, 36, 100, 225, ?",
          hint: "Each term is a perfect square. What are they squares of?",
          options: ["441", "400", "484", "500"],
          correct: 0,
          explanation: "These are squares of cumulative sums: (1)²=1, (1+2)²=9, (1+2+3)²=36, (1+2+3+4)²=100, (1+2+3+4+5)²=225, (1+2+3+4+5+6)²=441."
        }
      ]
    }
  ]
};

