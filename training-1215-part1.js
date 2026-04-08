const TRAINING_PR_12_15 = {
  tips: [
    {
      title: "Look for Multiple Rules Simultaneously",
      content: "In complex grids and matrices, rows and columns often follow different rules. Check each direction independently — a row might use addition while a column uses multiplication. Finding both rules is the key to solving the puzzle."
    },
    {
      title: "Test Your Pattern with All Data Points",
      content: "Once you think you've found a pattern, verify it against every number in the sequence or grid. A rule that works for the first three terms but fails on the fourth is not the right rule. Rigorous testing separates guessing from reasoning."
    },
    {
      title: "Recognize Common Mathematical Sequences",
      content: "Many patterns are built from well-known sequences: perfect squares (1, 4, 9, 16…), cubes (1, 8, 27, 64…), primes (2, 3, 5, 7…), Fibonacci (1, 1, 2, 3, 5…), and factorials (1, 2, 6, 24…). Memorizing these gives you a toolkit of building blocks."
    },
    {
      title: "Break Complex Patterns into Layers",
      content: "When a pattern seems chaotic, try computing the differences between consecutive terms, or the ratios. If first differences aren't constant, look at second differences. Many advanced patterns reveal themselves only after peeling away one or two layers."
    }
  ],
  levels: [
    {
      level: 1,
      name: "Foundation",
      description: "Perfect squares grids, prime sequences, and simple multiplication grids to build core pattern recognition skills.",
      exercises: [
        {
          id: "TPR1215_1_01",
          question: "What number completes this grid?\n\n| 1  | 4  | 9  |\n| 16 | 25 | ?  |",
          hint: "Each cell contains a perfect square: 1², 2², 3², 4², 5², …",
          options: ["30", "36", "42", "49"],
          correct: 1,
          explanation: "The grid lists perfect squares in order: 1, 4, 9, 16, 25, 36. The missing value is 6² = 36."
        },
        {
          id: "TPR1215_1_02",
          question: "What number completes this grid?\n\n| 4   | 9   | 16  |\n| 25  | 36  | ?   |",
          hint: "These are consecutive perfect squares starting from 2².",
          options: ["42", "48", "49", "50"],
          correct: 2,
          explanation: "The sequence is 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49."
        },
        {
          id: "TPR1215_1_03",
          question: "Which number comes next in this prime sequence?\n2, 3, 5, 7, 11, ?",
          hint: "Each number is divisible only by 1 and itself.",
          options: ["12", "13", "14", "15"],
          correct: 1,
          explanation: "These are prime numbers. The next prime after 11 is 13."
        },
        {
          id: "TPR1215_1_04",
          question: "Which number comes next in this prime sequence?\n11, 13, 17, 19, 23, ?",
          hint: "Continue listing numbers that have no factors other than 1 and themselves.",
          options: ["25", "27", "29", "31"],
          correct: 2,
          explanation: "These are consecutive primes. After 23, the next prime is 29."
        },
        {
          id: "TPR1215_1_05",
          question: "Complete the multiplication grid:\n\n| ×  | 2 | 3 |\n| 4  | 8 | 12|\n| 5  | 10| ? |",
          hint: "Each cell equals the row header multiplied by the column header.",
          options: ["12", "15", "18", "20"],
          correct: 1,
          explanation: "Row header 5 × column header 3 = 15."
        },
        {
          id: "TPR1215_1_06",
          question: "Complete the multiplication grid:\n\n| ×  | 3 | 5 |\n| 2  | 6 | 10|\n| 7  | ? | 35|",
          hint: "Multiply the row header by the column header.",
          options: ["14", "18", "21", "24"],
          correct: 2,
          explanation: "Row header 7 × column header 3 = 21."
        },
        {
          id: "TPR1215_1_07",
          question: "What number completes this grid of perfect squares?\n\n| 1  | 4  |\n| 9  | ?  |\n| 25 | 36 |",
          hint: "Reading left to right, top to bottom gives consecutive perfect squares.",
          options: ["12", "15", "16", "20"],
          correct: 2,
          explanation: "The grid reads 1, 4, 9, ?, 25, 36 — i.e., 1², 2², 3², 4², 5², 6². Missing value is 4² = 16."
        },
        {
          id: "TPR1215_1_08",
          question: "What is the next number in this sequence?\n2, 3, 5, 7, 11, 13, 17, ?",
          hint: "These are prime numbers.",
          options: ["18", "19", "20", "21"],
          correct: 1,
          explanation: "The sequence lists primes. After 17, the next prime is 19."
        },
        {
          id: "TPR1215_1_09",
          question: "Complete the multiplication grid:\n\n| ×  | 4  | 6  |\n| 3  | 12 | 18 |\n| 5  | ?  | 30 |",
          hint: "Row × Column.",
          options: ["15", "20", "24", "25"],
          correct: 1,
          explanation: "Row header 5 × column header 4 = 20."
        },
        {
          id: "TPR1215_1_10",
          question: "What number completes this grid?\n\n| 9   | 16  | 25  |\n| 36  | ?   | 64  |",
          hint: "These are consecutive perfect squares starting from 3².",
          options: ["42", "48", "49", "50"],
          correct: 2,
          explanation: "3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64. The missing value is 7² = 49."
        },
        {
          id: "TPR1215_1_11",
          question: "Complete this multiplication grid:\n\n| ×  | 2  | 4  | 6  |\n| 3  | 6  | 12 | ?  |",
          hint: "Multiply the row header by each column header.",
          options: ["14", "16", "18", "20"],
          correct: 2,
          explanation: "3 × 6 = 18."
        },
        {
          id: "TPR1215_1_12",
          question: "What is the missing prime in this sequence?\n29, 31, 37, 41, ?",
          hint: "All values are prime numbers.",
          options: ["42", "43", "45", "47"],
          correct: 1,
          explanation: "The primes after 41 are 43 and 47. The next prime in this consecutive list is 43."
        },
        {
          id: "TPR1215_1_13",
          question: "What number completes this grid?\n\n| 1  | 4  | 9  |\n| 16 | 25 | 36 |\n| 49 | 64 | ?  |",
          hint: "Perfect squares reading left to right, top to bottom.",
          options: ["72", "80", "81", "100"],
          correct: 2,
          explanation: "The sequence is 1², 2², …, 8², 9². Missing value is 9² = 81."
        },
        {
          id: "TPR1215_1_14",
          question: "Complete the multiplication grid:\n\n| ×  | 7  | 8  |\n| 3  | 21 | 24 |\n| 6  | ?  | 48 |",
          hint: "Row header × column header.",
          options: ["36", "42", "45", "48"],
          correct: 1,
          explanation: "6 × 7 = 42."
        },
        {
          id: "TPR1215_1_15",
          question: "Which number comes next?\n3, 5, 7, 11, 13, 17, 19, ?",
          hint: "These are all prime numbers (note: 9 and 15 are skipped because they aren't prime).",
          options: ["20", "21", "23", "25"],
          correct: 2,
          explanation: "The next prime after 19 is 23."
        },
        {
          id: "TPR1215_1_16",
          question: "What number completes this grid?\n\n| 100 | 81 | 64 |\n| 49  | 36 | ?  |",
          hint: "Perfect squares in descending order: 10², 9², 8², …",
          options: ["25", "28", "30", "32"],
          correct: 0,
          explanation: "10²=100, 9²=81, 8²=64, 7²=49, 6²=36, 5²=25."
        },
        {
          id: "TPR1215_1_17",
          question: "Complete the multiplication grid:\n\n| ×  | 5 | 9  |\n| 4  | 20| 36 |\n| 8  | ? | 72 |",
          hint: "Row × Column.",
          options: ["35", "40", "45", "48"],
          correct: 1,
          explanation: "8 × 5 = 40."
        },
        {
          id: "TPR1215_1_18",
          question: "What is the missing number in the sequence of perfect squares?\n4, 16, 36, 64, ?",
          hint: "These are squares of even numbers: 2², 4², 6², 8², …",
          options: ["81", "90", "100", "121"],
          correct: 2,
          explanation: "Squares of even numbers: 2²=4, 4²=16, 6²=36, 8²=64, 10²=100."
        },
        {
          id: "TPR1215_1_19",
          question: "What number completes this grid?\n\n| 1   | 9   | 25  |\n| 49  | 81  | ?   |",
          hint: "These are squares of odd numbers: 1², 3², 5², 7², 9², …",
          options: ["100", "110", "121", "144"],
          correct: 2,
          explanation: "Odd-number squares: 1²=1, 3²=9, 5²=25, 7²=49, 9²=81, 11²=121."
        },
        {
          id: "TPR1215_1_20",
          question: "Complete the multiplication grid:\n\n| ×  | 6  | 9  | 12 |\n| 5  | 30 | 45 | ?  |",
          hint: "Multiply the row header by each column header.",
          options: ["50", "55", "60", "65"],
          correct: 2,
          explanation: "5 × 12 = 60."
        }
      ]
    },
    {
      level: 2,
      name: "Developing",
      description: "Power patterns, two-rule column grids, and Fibonacci-like grids that require deeper analysis.",
      exercises: [
        {
          id: "TPR1215_2_01",
          question: "What comes next in this power pattern?\n2¹=2, 2²=4, 2³=8, 2⁴=?",
          hint: "Each term raises 2 to an increasing power.",
          options: ["10", "12", "14", "16"],
          correct: 3,
          explanation: "2⁴ = 16."
        },
        {
          id: "TPR1215_2_02",
          question: "Find the pattern: 3¹=3, 3²=9, 3³=27, 3⁴=?",
          hint: "Powers of 3.",
          options: ["54", "72", "81", "90"],
          correct: 2,
          explanation: "3⁴ = 81."
        },
        {
          id: "TPR1215_2_03",
          question: "In this grid, column A adds 3 and column B multiplies by 2. Find ?.\n\n| A  | B  |\n| 2  | 3  |\n| 5  | 6  |\n| 8  | 12 |\n| 11 | ?  |",
          hint: "Column A: +3 each row. Column B: ×2 each row.",
          options: ["15", "22", "24", "33"],
          correct: 2,
          explanation: "Column B: 3, 6, 12, 24 (each ×2). So ? = 24."
        },
        {
          id: "TPR1215_2_04",
          question: "What number completes this Fibonacci-like grid?\n\n| 1 | 1 | 2 |\n| 3 | 5 | 8 |\n| 13| 21| ? |",
          hint: "Each number is the sum of the two preceding numbers (reading left to right, row by row).",
          options: ["29", "32", "34", "42"],
          correct: 2,
          explanation: "Fibonacci sequence: 1,1,2,3,5,8,13,21,34. The missing value is 34."
        },
        {
          id: "TPR1215_2_05",
          question: "What comes next? 5¹=5, 5²=25, 5³=125, 5⁴=?",
          hint: "Powers of 5.",
          options: ["225", "525", "625", "725"],
          correct: 2,
          explanation: "5⁴ = 625."
        },
        {
          id: "TPR1215_2_06",
          question: "In this grid, column A multiplies by 3 and column B adds 5. Find ?.\n\n| A  | B  |\n| 2  | 4  |\n| 6  | 9  |\n| 18 | 14 |\n| 54 | ?  |",
          hint: "Column A: ×3. Column B: +5.",
          options: ["17", "19", "21", "59"],
          correct: 1,
          explanation: "Column B: 4, 9, 14, 19 (each +5). So ? = 19."
        },
        {
          id: "TPR1215_2_07",
          question: "Complete this Fibonacci-like sequence where each term is the sum of the previous two:\n2, 5, 7, 12, 19, ?",
          hint: "Add the last two numbers to get the next.",
          options: ["24", "26", "31", "38"],
          correct: 2,
          explanation: "19 + 12 = 31."
        },
        {
          id: "TPR1215_2_08",
          question: "What comes next? 4¹=4, 4²=16, 4³=64, 4⁴=?",
          hint: "Powers of 4.",
          options: ["128", "192", "256", "320"],
          correct: 2,
          explanation: "4⁴ = 256."
        },
        {
          id: "TPR1215_2_09",
          question: "In this grid, column A adds 7 and column B subtracts 4. Find ?.\n\n| A  | B  |\n| 3  | 40 |\n| 10 | 36 |\n| 17 | 32 |\n| ?  | 28 |",
          hint: "Column A: +7 each row. Column B: −4 each row.",
          options: ["21", "24", "27", "31"],
          correct: 1,
          explanation: "Column A: 3, 10, 17, 24 (each +7). So ? = 24."
        },
        {
          id: "TPR1215_2_10",
          question: "Complete this Fibonacci-like grid:\n\n| 1 | 3 | 4 |\n| 7 | 11| 18|\n| 29| ?  |   |",
          hint: "Each number = sum of the two preceding numbers.",
          options: ["40", "43", "47", "52"],
          correct: 2,
          explanation: "Sequence: 1, 3, 4, 7, 11, 18, 29, 47. So ? = 47."
        },
        {
          id: "TPR1215_2_11",
          question: "What comes next? 1¹=1, 2²=4, 3³=27, 4⁴=?",
          hint: "Each base and exponent are the same: nⁿ.",
          options: ["64", "128", "256", "512"],
          correct: 2,
          explanation: "4⁴ = 256."
        },
        {
          id: "TPR1215_2_12",
          question: "In this grid, column A squares each row number and column B cubes it. Find ?.\n\nRow 1: A=1, B=1\nRow 2: A=4, B=8\nRow 3: A=9, B=27\nRow 4: A=16, B=?",
          hint: "Column A = n². Column B = n³.",
          options: ["32", "48", "64", "80"],
          correct: 2,
          explanation: "Row 4: B = 4³ = 64."
        },
        {
          id: "TPR1215_2_13",
          question: "Complete this Fibonacci-like sequence:\n3, 4, 7, 11, 18, 29, ?",
          hint: "Each term = sum of the two preceding terms.",
          options: ["40", "43", "47", "51"],
          correct: 2,
          explanation: "29 + 18 = 47."
        },
        {
          id: "TPR1215_2_14",
          question: "What comes next? 6¹=6, 6²=36, 6³=?",
          hint: "Multiply the previous result by 6.",
          options: ["180", "196", "216", "256"],
          correct: 2,
          explanation: "6³ = 216."
        },
        {
          id: "TPR1215_2_15",
          question: "In this grid, column A doubles and column B adds 10. Find ?.\n\n| A  | B  |\n| 5  | 10 |\n| 10 | 20 |\n| 20 | 30 |\n| ?  | 40 |",
          hint: "Column A: ×2. Column B: +10.",
          options: ["25", "30", "40", "50"],
          correct: 2,
          explanation: "Column A: 5, 10, 20, 40 (each ×2). So ? = 40."
        },
        {
          id: "TPR1215_2_16",
          question: "Complete the Fibonacci-like grid:\n\n| 2 | 2 | 4 |\n| 6 | 10| 16|\n| 26| 42| ? |",
          hint: "Each number = sum of the previous two (reading row by row).",
          options: ["52", "62", "68", "84"],
          correct: 2,
          explanation: "Sequence: 2,2,4,6,10,16,26,42,68. Each = sum of two preceding. 42+26=68."
        },
        {
          id: "TPR1215_2_17",
          question: "What comes next? 10¹=10, 10²=100, 10³=?",
          hint: "Powers of 10.",
          options: ["300", "1000", "10000", "1030"],
          correct: 1,
          explanation: "10³ = 1000."
        },
        {
          id: "TPR1215_2_18",
          question: "In this grid, column A adds 4 and column B multiplies by 3. Find ?.\n\n| A  | B  |\n| 1  | 2  |\n| 5  | 6  |\n| 9  | 18 |\n| 13 | ?  |",
          hint: "Column A: +4 each row. Column B: ×3 each row.",
          options: ["36", "42", "54", "72"],
          correct: 2,
          explanation: "Column B: 2, 6, 18, 54 (each ×3). So ? = 54."
        },
        {
          id: "TPR1215_2_19",
          question: "What comes next? 1, 2, 4, 7, 11, 16, ?",
          hint: "Look at the differences between consecutive terms: they increase by 1 each time.",
          options: ["20", "22", "23", "25"],
          correct: 1,
          explanation: "Differences: 1,2,3,4,5 → next difference is 6. 16 + 6 = 22."
        },
        {
          id: "TPR1215_2_20",
          question: "Complete the Fibonacci-like sequence:\n5, 8, 13, 21, 34, ?",
          hint: "Each term = sum of the two before it.",
          options: ["47", "50", "55", "68"],
          correct: 2,
          explanation: "34 + 21 = 55."
        }
      ]
    },
    {
      level: 3,
      name: "Advanced",
      description: "Factorial patterns, sum-of-squares rules, and complex row rules that demand higher-order reasoning.",
      exercises: [
        {
          id: "TPR1215_3_01",
          question: "What comes next in this factorial sequence?\n1, 2, 6, 24, 120, ?",
          hint: "Each term = previous term × next counting number (1!, 2!, 3!, 4!, 5!, …).",
          options: ["240", "480", "600", "720"],
          correct: 3,
          explanation: "6! = 720. Sequence: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720."
        },
        {
          id: "TPR1215_3_02",
          question: "In this grid, each row follows the rule: C = A² + B². Find ?.\n\n| A | B | C  |\n| 3 | 4 | 25 |\n| 5 | 12| 169|\n| 6 | 8 | ?  |",
          hint: "C = A² + B².",
          options: ["96", "100", "104", "110"],
          correct: 1,
          explanation: "6² + 8² = 36 + 64 = 100."
        },
        {
          id: "TPR1215_3_03",
          question: "What comes next? 1, 5, 14, 30, 55, ?",
          hint: "These are cumulative sums of perfect squares: 1, 1+4, 1+4+9, 1+4+9+16, …",
          options: ["78", "85", "91", "105"],
          correct: 2,
          explanation: "Sum of squares: 1²+2²+3²+4²+5²=55. Add 6²=36: 55+36=91."
        },
        {
          id: "TPR1215_3_04",
          question: "In this grid, the row rule is: D = A × B + C. Find ?.\n\n| A | B | C | D  |\n| 2 | 3 | 5 | 11 |\n| 4 | 5 | 3 | 23 |\n| 6 | 7 | 2 | ?  |",
          hint: "D = A × B + C.",
          options: ["40", "42", "44", "48"],
          correct: 2,
          explanation: "6 × 7 + 2 = 42 + 2 = 44."
        },
        {
          id: "TPR1215_3_05",
          question: "What comes next in this sequence?\n1, 1, 2, 6, 24, 120, 720, ?",
          hint: "0!=1, 1!=1, 2!=2, 3!=6, … These are factorials.",
          options: ["1440", "2520", "5040", "7200"],
          correct: 2,
          explanation: "7! = 5040."
        },
        {
          id: "TPR1215_3_06",
          question: "Each row follows: C = A² − B². Find ?.\n\n| A  | B | C  |\n| 5  | 3 | 16 |\n| 10 | 6 | 64 |\n| 13 | 5 | ?  |",
          hint: "C = A² − B².",
          options: ["134", "144", "156", "169"],
          correct: 1,
          explanation: "13² − 5² = 169 − 25 = 144."
        },
        {
          id: "TPR1215_3_07",
          question: "What is the next term in the cumulative sum-of-cubes?\n1, 9, 36, 100, ?",
          hint: "These are (1+2+…+n)²: (1)²=1, (1+2)²=9, (1+2+3)²=36, (1+2+3+4)²=100, …",
          options: ["150", "196", "225", "256"],
          correct: 2,
          explanation: "(1+2+3+4+5)² = 15² = 225."
        },
        {
          id: "TPR1215_3_08",
          question: "Row rule: D = (A + B) × C. Find ?.\n\n| A | B | C | D  |\n| 2 | 3 | 4 | 20 |\n| 5 | 1 | 3 | 18 |\n| 4 | 6 | 5 | ?  |",
          hint: "Add A and B, then multiply by C.",
          options: ["40", "45", "50", "55"],
          correct: 2,
          explanation: "(4 + 6) × 5 = 10 × 5 = 50."
        },
        {
          id: "TPR1215_3_09",
          question: "What comes next? 2, 6, 24, 120, 720, ?",
          hint: "These are n! starting from 2!.",
          options: ["1440", "4320", "5040", "7200"],
          correct: 2,
          explanation: "2!=2, 3!=6, 4!=24, 5!=120, 6!=720, 7!=5040."
        },
        {
          id: "TPR1215_3_10",
          question: "In this grid, each cell = sum of squares of its row and column indices. Row 3, Col 4 = ?\n(Indices start at 1.)",
          hint: "Cell(r,c) = r² + c².",
          options: ["20", "25", "30", "49"],
          correct: 1,
          explanation: "3² + 4² = 9 + 16 = 25."
        },
        {
          id: "TPR1215_3_11",
          question: "Row rule: C = A³ − B³. Find ? when A=5, B=3.\n\n| A | B | C   |\n| 3 | 1 | 26  |\n| 4 | 2 | 56  |\n| 5 | 3 | ?   |",
          hint: "Cube each, then subtract.",
          options: ["88", "96", "98", "108"],
          correct: 2,
          explanation: "5³ − 3³ = 125 − 27 = 98."
        },
        {
          id: "TPR1215_3_12",
          question: "What number completes this sum-of-squares sequence?\n1, 5, 14, 30, 55, 91, ?",
          hint: "Cumulative sums of 1²+2²+…+n².",
          options: ["119", "130", "140", "154"],
          correct: 2,
          explanation: "91 + 7² = 91 + 49 = 140."
        },
        {
          id: "TPR1215_3_13",
          question: "Row rule: D = A² + B + C. Find ?.\n\n| A | B | C | D  |\n| 3 | 2 | 1 | 12 |\n| 5 | 3 | 2 | 30 |\n| 7 | 4 | 3 | ?  |",
          hint: "Square A, then add B and C.",
          options: ["52", "54", "56", "58"],
          correct: 2,
          explanation: "7² + 4 + 3 = 49 + 7 = 56."
        },
        {
          id: "TPR1215_3_14",
          question: "What comes next? 1, 3, 6, 10, 15, 21, 28, ?",
          hint: "These are triangular numbers: n(n+1)/2.",
          options: ["32", "34", "36", "40"],
          correct: 2,
          explanation: "Triangular numbers: 8×9/2 = 36."
        },
        {
          id: "TPR1215_3_15",
          question: "In this grid, C = A × B − A. Find ?.\n\n| A | B | C  |\n| 4 | 5 | 16 |\n| 6 | 8 | 42 |\n| 9 | 7 | ?  |",
          hint: "C = A(B − 1).",
          options: ["48", "54", "56", "63"],
          correct: 1,
          explanation: "9 × (7 − 1) = 9 × 6 = 54."
        },
        {
          id: "TPR1215_3_16",
          question: "What is the 8th factorial? (i.e., 8! = ?)",
          hint: "8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1.",
          options: ["5040", "20160", "40320", "362880"],
          correct: 2,
          explanation: "8! = 40320."
        },
        {
          id: "TPR1215_3_17",
          question: "Row rule: D = (A − B)² + C. Find ?.\n\n| A  | B | C | D  |\n| 10 | 3 | 5 | 54 |\n| 8  | 2 | 4 | 40 |\n| 12 | 5 | 6 | ?  |",
          hint: "Subtract B from A, square the result, then add C.",
          options: ["49", "51", "55", "61"],
          correct: 2,
          explanation: "(12 − 5)² + 6 = 49 + 6 = 55."
        },
        {
          id: "TPR1215_3_18",
          question: "What comes next in the sum-of-squares pattern?\n0, 1, 5, 14, 30, ?",
          hint: "Cumulative sum of 0² + 1² + 2² + 3² + …",
          options: ["50", "55", "60", "65"],
          correct: 1,
          explanation: "0+1+4+9+16+25 = 55. So the sequence is 0, 1, 5, 14, 30, 55."
        },
        {
          id: "TPR1215_3_19",
          question: "Row rule: C = (A + B)². Find ?.\n\n| A | B | C   |\n| 2 | 3 | 25  |\n| 4 | 5 | 81  |\n| 6 | 7 | ?   |",
          hint: "Add A and B, then square.",
          options: ["144", "156", "169", "196"],
          correct: 2,
          explanation: "(6 + 7)² = 13² = 169."
        },
        {
          id: "TPR1215_3_20",
          question: "What is the next value? 1, 4, 9, 16, 25, 36, 49, 64, 81, ?",
          hint: "Perfect squares.",
          options: ["90", "96", "100", "121"],
          correct: 2,
          explanation: "10² = 100."
        }
      ]
    },
    {
      level: 4,
      name: "Expert",
      description: "Multi-step operations, diagonal patterns, and combined add+multiply rules for peak analytical challenge.",
      exercises: [
        {
          id: "TPR1215_4_01",
          question: "In this 3×3 grid, each cell = row × col + (row + col). Find cell (3,3).\n(Rows and columns indexed 1–3.)",
          hint: "Cell(r,c) = r×c + r + c.",
          options: ["12", "14", "15", "18"],
          correct: 2,
          explanation: "3×3 + 3 + 3 = 9 + 6 = 15."
        },
        {
          id: "TPR1215_4_02",
          question: "The main diagonal of a 4×4 grid follows n² + n. What is the 4th diagonal value?",
          hint: "Diagonal(n) = n² + n for n = 1, 2, 3, 4.",
          options: ["12", "16", "20", "24"],
          correct: 2,
          explanation: "4² + 4 = 16 + 4 = 20."
        },
        {
          id: "TPR1215_4_03",
          question: "Row rule: E = (A × B) + (C × D). Find ?.\n\n| A | B | C | D | E  |\n| 2 | 3 | 4 | 5 | 26 |\n| 3 | 4 | 2 | 6 | 24 |\n| 5 | 2 | 3 | 7 | ?  |",
          hint: "Multiply A×B, multiply C×D, then add.",
          options: ["29", "31", "34", "37"],
          correct: 1,
          explanation: "(5×2) + (3×7) = 10 + 21 = 31."
        },
        {
          id: "TPR1215_4_04",
          question: "In a grid, the anti-diagonal values follow 2ⁿ + n. What is the value when n=5?",
          hint: "Plug n=5 into 2ⁿ + n.",
          options: ["33", "37", "42", "48"],
          correct: 1,
          explanation: "2⁵ + 5 = 32 + 5 = 37."
        },
        {
          id: "TPR1215_4_05",
          question: "Each row follows: D = A² + B² + C². Find ?.\n\n| A | B | C | D   |\n| 1 | 2 | 3 | 14  |\n| 2 | 3 | 4 | 29  |\n| 3 | 4 | 5 | ?   |",
          hint: "Square each of A, B, C and add them.",
          options: ["45", "48", "50", "52"],
          correct: 2,
          explanation: "3² + 4² + 5² = 9 + 16 + 25 = 50."
        },
        {
          id: "TPR1215_4_06",
          question: "In a 5×5 grid, Cell(r,c) = r² × c. Find Cell(4,3).",
          hint: "Square the row number, then multiply by the column number.",
          options: ["36", "48", "64", "80"],
          correct: 1,
          explanation: "4² × 3 = 16 × 3 = 48."
        },
        {
          id: "TPR1215_4_07",
          question: "Row rule: E = A × (B + C) − D. Find ?.\n\n| A | B | C | D  | E  |\n| 3 | 4 | 5 | 7  | 20 |\n| 2 | 6 | 3 | 5  | 13 |\n| 4 | 3 | 7 | 10 | ?  |",
          hint: "Multiply A by (B+C), then subtract D.",
          options: ["28", "30", "32", "34"],
          correct: 1,
          explanation: "4 × (3+7) − 10 = 40 − 10 = 30."
        },
        {
          id: "TPR1215_4_08",
          question: "The diagonal of a grid follows n³ − n. What is the value at position n=5?",
          hint: "5³ − 5.",
          options: ["110", "115", "120", "125"],
          correct: 2,
          explanation: "5³ − 5 = 125 − 5 = 120."
        },
        {
          id: "TPR1215_4_09",
          question: "In this grid, Cell(r,c) = (r + c)² − r × c. Find Cell(3,4).",
          hint: "Compute (3+4)², then subtract 3×4.",
          options: ["37", "39", "41", "43"],
          correct: 0,
          explanation: "(3+4)² − 3×4 = 49 − 12 = 37."
        },
        {
          id: "TPR1215_4_10",
          question: "Row rule: D = (A + B)² − C². Find ?.\n\n| A | B | C | D  |\n| 3 | 4 | 5 | 24 |\n| 5 | 3 | 2 | 60 |\n| 6 | 2 | 3 | ?  |",
          hint: "Add A+B, square, subtract C².",
          options: ["48", "52", "55", "60"],
          correct: 2,
          explanation: "(6+2)² − 3² = 64 − 9 = 55."
        },
        {
          id: "TPR1215_4_11",
          question: "Cell(r,c) = r! + c. What is Cell(4,5)?",
          hint: "4! = 24. Then add c.",
          options: ["25", "27", "29", "120"],
          correct: 2,
          explanation: "4! + 5 = 24 + 5 = 29."
        },
        {
          id: "TPR1215_4_12",
          question: "Row rule: E = A × B + C × D − A. Find ?.\n\n| A | B | C | D | E  |\n| 3 | 5 | 2 | 4 | 20 |\n| 4 | 3 | 5 | 2 | 18 |\n| 5 | 6 | 3 | 4 | ?  |",
          hint: "A×B + C×D − A.",
          options: ["32", "37", "42", "47"],
          correct: 1,
          explanation: "5×6 + 3×4 − 5 = 30 + 12 − 5 = 37."
        },
        {
          id: "TPR1215_4_13",
          question: "The diagonal follows 2n² + 3n + 1. What is the value at n=4?",
          hint: "Substitute n=4 into 2n² + 3n + 1.",
          options: ["41", "43", "45", "47"],
          correct: 2,
          explanation: "2(16) + 3(4) + 1 = 32 + 12 + 1 = 45."
        },
        {
          id: "TPR1215_4_14",
          question: "Cell(r,c) = r × c + r² + c². Find Cell(3,5).",
          hint: "3×5 + 3² + 5² = 15 + 9 + 25.",
          options: ["44", "47", "49", "52"],
          correct: 2,
          explanation: "3×5 + 9 + 25 = 15 + 34 = 49."
        },
        {
          id: "TPR1215_4_15",
          question: "Row rule: D = (A × B) ÷ C + A + B. Find ? (A=6, B=8, C=4).\n\n| A | B | C | D  |\n| 4 | 6 | 3 | 18 |\n| 6 | 8 | 4 | ?  |",
          hint: "Divide A×B by C, then add A and B.",
          options: ["22", "24", "26", "28"],
          correct: 2,
          explanation: "(6×8)÷4 + 6 + 8 = 12 + 14 = 26."
        },
        {
          id: "TPR1215_4_16",
          question: "The anti-diagonal follows n² + 2n − 1. What is the value at n=6?",
          hint: "Substitute n=6.",
          options: ["43", "45", "47", "49"],
          correct: 2,
          explanation: "36 + 12 − 1 = 47."
        },
        {
          id: "TPR1215_4_17",
          question: "Cell(r,c) = (r+c)! ÷ (r!×c!). Find Cell(3,2). (This is 'r+c choose r'.)",
          hint: "5! ÷ (3! × 2!) = 120 ÷ 12.",
          options: ["5", "10", "15", "20"],
          correct: 1,
          explanation: "C(5,3) = 5!/(3!×2!) = 120/12 = 10."
        },
        {
          id: "TPR1215_4_18",
          question: "Row rule: E = A³ + B − C × D. Find ?.\n\n| A | B | C | D | E   |\n| 2 | 5 | 3 | 1 | 10  |\n| 3 | 4 | 2 | 5 | 21  |\n| 4 | 3 | 5 | 2 | ?   |",
          hint: "Cube A, add B, subtract C×D.",
          options: ["55", "57", "59", "61"],
          correct: 1,
          explanation: "4³ + 3 − 5×2 = 64 + 3 − 10 = 57."
        },
        {
          id: "TPR1215_4_19",
          question: "The diagonal of a grid follows n(n+1)(n+2)/6. What is the value at n=6?",
          hint: "6×7×8 ÷ 6.",
          options: ["28", "42", "56", "70"],
          correct: 2,
          explanation: "6×7×8/6 = 336/6 = 56."
        },
        {
          id: "TPR1215_4_20",
          question: "Cell(r,c) = r² × c² − (r + c). Find Cell(3,4).",
          hint: "3²×4² = 9×16, then subtract (3+4).",
          options: ["130", "134", "137", "144"],
          correct: 2,
          explanation: "9×16 − 7 = 144 − 7 = 137."
        }
      ]
    }
  ]
};

const TRAINING_NR_12_15 = {
  tips: [
    {
      title: "Compute Successive Differences",
      content: "When a sequence's rule isn't obvious, write out the differences between consecutive terms. If those differences aren't constant, compute the differences of the differences (second differences). Constant second differences indicate a quadratic rule; constant third differences indicate cubic, and so on."
    },
    {
      title: "Watch for Alternating or Interleaved Sequences",
      content: "Some sequences actually contain two independent sub-sequences woven together — odd-positioned terms follow one rule and even-positioned terms follow another. If a single rule doesn't fit, try splitting the sequence into two and analyzing each half separately."
    },
    {
      title: "Identify the Growth Rate",
      content: "Determine whether a sequence grows linearly (+constant), quadratically (differences grow linearly), exponentially (×constant), or factorially (multiply by increasing integers). Recognizing the growth type quickly narrows down the possible rules."
    },
    {
      title: "Test Recursive Relationships",
      content: "Many advanced sequences define each term based on previous terms — like Fibonacci (aₙ = aₙ₋₁ + aₙ₋₂) or custom recursions (aₙ = 2aₙ₋₁ + 3). When standard arithmetic patterns fail, try expressing each term as a function of the one or two terms before it."
    }
  ],
  levels: [
    {
      level: 1,
      name: "Foundation",
      description: "Fibonacci sequences, perfect squares, triangular numbers, and simple geometric series (×2) to build numerical reasoning foundations.",
      exercises: [
        {
          id: "TNR1215_1_01",
          question: "What comes next? 1, 1, 2, 3, 5, 8, 13, ?",
          hint: "Each number = sum of the two before it (Fibonacci).",
          options: ["18", "20", "21", "24"],
          correct: 2,
          explanation: "13 + 8 = 21."
        },
        {
          id: "TNR1215_1_02",
          question: "What comes next? 1, 4, 9, 16, 25, ?",
          hint: "Perfect squares: 1², 2², 3², …",
          options: ["30", "36", "42", "49"],
          correct: 1,
          explanation: "6² = 36."
        },
        {
          id: "TNR1215_1_03",
          question: "What comes next? 1, 3, 6, 10, 15, ?",
          hint: "Triangular numbers: each term adds the next integer (1, +2, +3, +4, +5, …).",
          options: ["18", "20", "21", "24"],
          correct: 2,
          explanation: "15 + 6 = 21. Triangular: n(n+1)/2 → 6×7/2 = 21."
        },
        {
          id: "TNR1215_1_04",
          question: "What comes next? 3, 6, 12, 24, 48, ?",
          hint: "Each term is doubled (×2).",
          options: ["60", "72", "84", "96"],
          correct: 3,
          explanation: "48 × 2 = 96."
        },
        {
          id: "TNR1215_1_05",
          question: "What comes next in this Fibonacci-like sequence? 2, 2, 4, 6, 10, 16, ?",
          hint: "Each term = sum of the two before it.",
          options: ["22", "24", "26", "28"],
          correct: 2,
          explanation: "16 + 10 = 26."
        },
        {
          id: "TNR1215_1_06",
          question: "What comes next? 0, 1, 4, 9, 16, 25, 36, ?",
          hint: "Perfect squares starting from 0².",
          options: ["42", "48", "49", "56"],
          correct: 2,
          explanation: "7² = 49."
        },
        {
          id: "TNR1215_1_07",
          question: "What comes next? 1, 3, 6, 10, 15, 21, 28, ?",
          hint: "Triangular numbers. Differences increase by 1 each time.",
          options: ["32", "35", "36", "40"],
          correct: 2,
          explanation: "8th triangular number = 8×9/2 = 36."
        },
        {
          id: "TNR1215_1_08",
          question: "What comes next? 5, 10, 20, 40, 80, ?",
          hint: "Each term ×2.",
          options: ["100", "120", "140", "160"],
          correct: 3,
          explanation: "80 × 2 = 160."
        },
        {
          id: "TNR1215_1_09",
          question: "What comes next? 1, 1, 2, 3, 5, 8, 13, 21, 34, ?",
          hint: "Fibonacci sequence.",
          options: ["42", "47", "55", "68"],
          correct: 2,
          explanation: "34 + 21 = 55."
        },
        {
          id: "TNR1215_1_10",
          question: "What comes next? 4, 16, 36, 64, 100, ?",
          hint: "Squares of even numbers: 2², 4², 6², 8², 10², …",
          options: ["121", "132", "144", "169"],
          correct: 2,
          explanation: "12² = 144."
        },
        {
          id: "TNR1215_1_11",
          question: "What comes next? 0, 1, 3, 6, 10, 15, 21, ?",
          hint: "Triangular numbers starting from T(0)=0.",
          options: ["25", "27", "28", "30"],
          correct: 2,
          explanation: "7th triangular number = 7×8/2 = 28."
        },
        {
          id: "TNR1215_1_12",
          question: "What comes next? 7, 14, 28, 56, 112, ?",
          hint: "Each term ×2.",
          options: ["168", "196", "224", "256"],
          correct: 2,
          explanation: "112 × 2 = 224."
        },
        {
          id: "TNR1215_1_13",
          question: "What comes next in this Fibonacci variant? 3, 5, 8, 13, 21, 34, ?",
          hint: "Each term = sum of the two preceding terms.",
          options: ["47", "52", "55", "68"],
          correct: 2,
          explanation: "34 + 21 = 55."
        },
        {
          id: "TNR1215_1_14",
          question: "What comes next? 1, 9, 25, 49, 81, ?",
          hint: "Squares of odd numbers: 1², 3², 5², 7², 9², …",
          options: ["100", "110", "121", "144"],
          correct: 2,
          explanation: "11² = 121."
        },
        {
          id: "TNR1215_1_15",
          question: "What comes next? 1, 3, 6, 10, 15, 21, 28, 36, 45, ?",
          hint: "Triangular numbers.",
          options: ["50", "54", "55", "60"],
          correct: 2,
          explanation: "10th triangular number = 10×11/2 = 55."
        },
        {
          id: "TNR1215_1_16",
          question: "What comes next? 1, 2, 4, 8, 16, 32, ?",
          hint: "Powers of 2.",
          options: ["48", "56", "64", "128"],
          correct: 2,
          explanation: "32 × 2 = 64."
        },
        {
          id: "TNR1215_1_17",
          question: "What comes next? 0, 1, 1, 2, 3, 5, 8, 13, ?",
          hint: "Fibonacci starting from 0.",
          options: ["15", "18", "21", "26"],
          correct: 2,
          explanation: "13 + 8 = 21."
        },
        {
          id: "TNR1215_1_18",
          question: "What comes next? 100, 81, 64, 49, 36, ?",
          hint: "Perfect squares in descending order: 10², 9², 8², …",
          options: ["16", "20", "25", "30"],
          correct: 2,
          explanation: "5² = 25."
        },
        {
          id: "TNR1215_1_19",
          question: "What comes next? 6, 12, 24, 48, 96, ?",
          hint: "×2 geometric sequence.",
          options: ["144", "168", "192", "200"],
          correct: 2,
          explanation: "96 × 2 = 192."
        },
        {
          id: "TNR1215_1_20",
          question: "What comes next? 1, 6, 15, 28, 45, ?",
          hint: "Differences: 5, 9, 13, 17 — increasing by 4 each time.",
          options: ["55", "62", "66", "72"],
          correct: 2,
          explanation: "Next difference = 21. 45 + 21 = 66."
        }
      ]
    },
    {
      level: 2,
      name: "Developing",
      description: "Perfect cubes, prime sequences, geometric ×3 series, and mixed add/subtract patterns requiring deeper analysis.",
      exercises: [
        {
          id: "TNR1215_2_01",
          question: "What comes next? 1, 8, 27, 64, 125, ?",
          hint: "Perfect cubes: 1³, 2³, 3³, …",
          options: ["150", "196", "216", "256"],
          correct: 2,
          explanation: "6³ = 216."
        },
        {
          id: "TNR1215_2_02",
          question: "What comes next? 2, 3, 5, 7, 11, 13, 17, 19, ?",
          hint: "Prime numbers in order.",
          options: ["21", "23", "25", "27"],
          correct: 1,
          explanation: "The next prime after 19 is 23."
        },
        {
          id: "TNR1215_2_03",
          question: "What comes next? 2, 6, 18, 54, 162, ?",
          hint: "Each term ×3.",
          options: ["324", "432", "486", "648"],
          correct: 2,
          explanation: "162 × 3 = 486."
        },
        {
          id: "TNR1215_2_04",
          question: "What comes next? 5, 8, 6, 9, 7, 10, 8, ?",
          hint: "Pattern alternates: +3, −2, +3, −2, …",
          options: ["9", "10", "11", "12"],
          correct: 2,
          explanation: "+3: 5→8, 6→9, 7→10, 8→11. −2: 8→6, 9→7, 10→8. Next: 8+3 = 11."
        },
        {
          id: "TNR1215_2_05",
          question: "What comes next? 8, 27, 64, 125, 216, ?",
          hint: "Cubes starting from 2³.",
          options: ["294", "312", "343", "400"],
          correct: 2,
          explanation: "7³ = 343."
        },
        {
          id: "TNR1215_2_06",
          question: "What comes next? 23, 29, 31, 37, 41, ?",
          hint: "These are consecutive primes.",
          options: ["42", "43", "45", "47"],
          correct: 1,
          explanation: "Next prime after 41 is 43."
        },
        {
          id: "TNR1215_2_07",
          question: "What comes next? 4, 12, 36, 108, ?",
          hint: "×3 geometric.",
          options: ["216", "252", "324", "432"],
          correct: 2,
          explanation: "108 × 3 = 324."
        },
        {
          id: "TNR1215_2_08",
          question: "What comes next? 10, 15, 12, 17, 14, 19, 16, ?",
          hint: "Alternating +5, −3.",
          options: ["18", "19", "21", "23"],
          correct: 2,
          explanation: "+5: 10→15, 12→17, 14→19, 16→21. −3: 15→12, 17→14, 19→16. Next: 16+5=21."
        },
        {
          id: "TNR1215_2_09",
          question: "What comes next? 1, 8, 27, 64, 125, 216, 343, ?",
          hint: "Perfect cubes.",
          options: ["400", "441", "500", "512"],
          correct: 3,
          explanation: "8³ = 512."
        },
        {
          id: "TNR1215_2_10",
          question: "What comes next? 47, 53, 59, 61, 67, ?",
          hint: "Consecutive primes.",
          options: ["69", "71", "73", "77"],
          correct: 1,
          explanation: "Next prime after 67 is 71."
        },
        {
          id: "TNR1215_2_11",
          question: "What comes next? 5, 15, 45, 135, ?",
          hint: "×3 each time.",
          options: ["270", "375", "405", "505"],
          correct: 2,
          explanation: "135 × 3 = 405."
        },
        {
          id: "TNR1215_2_12",
          question: "What comes next? 3, 7, 5, 9, 7, 11, 9, ?",
          hint: "Alternating +4, −2.",
          options: ["10", "11", "13", "15"],
          correct: 2,
          explanation: "+4: 3→7, 5→9, 7→11, 9→13. −2: 7→5, 9→7, 11→9. Next: 9+4=13."
        },
        {
          id: "TNR1215_2_13",
          question: "What comes next? 0, 1, 8, 27, 64, 125, ?",
          hint: "Cubes from 0³ onward.",
          options: ["150", "196", "216", "256"],
          correct: 2,
          explanation: "6³ = 216."
        },
        {
          id: "TNR1215_2_14",
          question: "What comes next? 71, 73, 79, 83, 89, ?",
          hint: "Consecutive primes.",
          options: ["91", "93", "95", "97"],
          correct: 3,
          explanation: "Next prime after 89 is 97."
        },
        {
          id: "TNR1215_2_15",
          question: "What comes next? 1, 3, 9, 27, 81, ?",
          hint: "Powers of 3.",
          options: ["162", "189", "243", "324"],
          correct: 2,
          explanation: "3⁵ = 243."
        },
        {
          id: "TNR1215_2_16",
          question: "What comes next? 20, 24, 21, 25, 22, 26, 23, ?",
          hint: "Alternating +4, −3.",
          options: ["24", "25", "27", "29"],
          correct: 2,
          explanation: "+4: 20→24, 21→25, 22→26, 23→27. Next: 23+4=27."
        },
        {
          id: "TNR1215_2_17",
          question: "What comes next? 27, 64, 125, 216, 343, 512, ?",
          hint: "Cubes: 3³, 4³, 5³, 6³, 7³, 8³, …",
          options: ["625", "700", "729", "800"],
          correct: 2,
          explanation: "9³ = 729."
        },
        {
          id: "TNR1215_2_18",
          question: "What comes next? 101, 103, 107, 109, 113, ?",
          hint: "Consecutive primes above 100.",
          options: ["117", "119", "121", "127"],
          correct: 3,
          explanation: "Next prime after 113 is 127."
        },
        {
          id: "TNR1215_2_19",
          question: "What comes next? 7, 21, 63, 189, ?",
          hint: "×3 each time.",
          options: ["378", "441", "567", "756"],
          correct: 2,
          explanation: "189 × 3 = 567."
        },
        {
          id: "TNR1215_2_20",
          question: "What comes next? 1, 5, 2, 6, 3, 7, 4, ?",
          hint: "Two interleaved sequences: 1,2,3,4,… and 5,6,7,…",
          options: ["5", "8", "9", "10"],
          correct: 1,
          explanation: "Odd positions: 1,2,3,4,5. Even positions: 5,6,7. Next (even): 8."
        }
      ]
    },
    {
      level: 3,
      name: "Advanced",
      description: "Difference-of-differences, alternating operations (×2 then +1), and complex growth patterns requiring layered analysis.",
      exercises: [
        {
          id: "TNR1215_3_01",
          question: "What comes next? 2, 5, 10, 17, 26, ?",
          hint: "Differences: 3, 5, 7, 9 — second differences are constant at 2.",
          options: ["33", "35", "37", "40"],
          correct: 2,
          explanation: "Differences increase by 2: next diff = 11. 26 + 11 = 37."
        },
        {
          id: "TNR1215_3_02",
          question: "What comes next? 1, 2, 5, 11, 23, ?",
          hint: "Pattern: ×2 then +1, alternating. Or each term ≈ 2 × previous + 1.",
          options: ["35", "40", "47", "48"],
          correct: 2,
          explanation: "Rule: aₙ = 2aₙ₋₁ + 1. 2×23 + 1 = 47."
        },
        {
          id: "TNR1215_3_03",
          question: "What comes next? 3, 4, 7, 12, 19, 28, ?",
          hint: "Differences: 1, 3, 5, 7, 9 — odd numbers. Second differences = 2.",
          options: ["37", "39", "41", "43"],
          correct: 1,
          explanation: "Next diff = 11. 28 + 11 = 39."
        },
        {
          id: "TNR1215_3_04",
          question: "What comes next? 1, 3, 7, 15, 31, ?",
          hint: "Each term = 2 × previous + 1.",
          options: ["47", "55", "62", "63"],
          correct: 3,
          explanation: "2 × 31 + 1 = 63."
        },
        {
          id: "TNR1215_3_05",
          question: "What comes next? 1, 4, 10, 20, 35, ?",
          hint: "Differences: 3,6,10,15 — these are triangular numbers. Second differences: 3,4,5.",
          options: ["50", "52", "56", "65"],
          correct: 2,
          explanation: "Next diff = 21 (next triangular). 35 + 21 = 56."
        },
        {
          id: "TNR1215_3_06",
          question: "What comes next? 2, 3, 6, 7, 14, 15, 30, ?",
          hint: "Alternating: ×2, +1, ×2, +1, … Wait — check: +1, ×2, +1, ×2, +1, ×2, …",
          options: ["31", "45", "60", "62"],
          correct: 0,
          explanation: "Pattern: +1, ×2 repeating. 2→3(+1)→6(×2)→7(+1)→14(×2)→15(+1)→30(×2)→31(+1)."
        },
        {
          id: "TNR1215_3_07",
          question: "What comes next? 0, 1, 3, 7, 15, 31, ?",
          hint: "Each term = 2 × previous + 1. (Also 2ⁿ − 1.)",
          options: ["47", "55", "62", "63"],
          correct: 3,
          explanation: "2 × 31 + 1 = 63. (Or 2⁶ − 1 = 63.)"
        },
        {
          id: "TNR1215_3_08",
          question: "What comes next? 5, 6, 8, 12, 20, ?",
          hint: "Differences: 1, 2, 4, 8 — doubling differences.",
          options: ["28", "32", "36", "40"],
          correct: 2,
          explanation: "Next diff = 16. 20 + 16 = 36."
        },
        {
          id: "TNR1215_3_09",
          question: "What comes next? 2, 6, 12, 20, 30, ?",
          hint: "These are n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, …",
          options: ["40", "42", "44", "48"],
          correct: 1,
          explanation: "6 × 7 = 42."
        },
        {
          id: "TNR1215_3_10",
          question: "What comes next? 1, 2, 5, 10, 17, 26, 37, ?",
          hint: "Differences: 1, 3, 5, 7, 9, 11 — consecutive odd numbers.",
          options: ["46", "48", "50", "52"],
          correct: 2,
          explanation: "Next diff = 13. 37 + 13 = 50."
        },
        {
          id: "TNR1215_3_11",
          question: "What comes next? 1, 4, 13, 40, ?",
          hint: "Each term = 3 × previous + 1.",
          options: ["80", "100", "121", "160"],
          correct: 2,
          explanation: "3 × 40 + 1 = 121."
        },
        {
          id: "TNR1215_3_12",
          question: "What comes next? 1, 3, 9, 27, 81, 243, ?",
          hint: "Powers of 3 — but confirm the growth factor.",
          options: ["486", "512", "729", "1024"],
          correct: 2,
          explanation: "243 × 3 = 729."
        },
        {
          id: "TNR1215_3_13",
          question: "What comes next? 4, 5, 10, 11, 22, 23, ?",
          hint: "Alternating +1 and ×2.",
          options: ["24", "44", "46", "48"],
          correct: 2,
          explanation: "+1, ×2 repeating. 4→5(+1)→10(×2)→11(+1)→22(×2)→23(+1)→46(×2)."
        },
        {
          id: "TNR1215_3_14",
          question: "What comes next? 2, 3, 5, 9, 17, ?",
          hint: "Differences: 1, 2, 4, 8 — powers of 2.",
          options: ["25", "29", "33", "41"],
          correct: 2,
          explanation: "Next diff = 16. 17 + 16 = 33."
        },
        {
          id: "TNR1215_3_15",
          question: "What comes next? 6, 11, 21, 41, 81, ?",
          hint: "Each term ≈ 2 × previous − 1.",
          options: ["121", "151", "161", "162"],
          correct: 2,
          explanation: "2 × 81 − 1 = 161."
        },
        {
          id: "TNR1215_3_16",
          question: "What comes next? 1, 2, 6, 24, 120, ?",
          hint: "Factorials: 1!, 2!, 3!, 4!, 5!, …",
          options: ["240", "480", "600", "720"],
          correct: 3,
          explanation: "6! = 720."
        },
        {
          id: "TNR1215_3_17",
          question: "What comes next? 3, 7, 15, 31, 63, ?",
          hint: "Each = 2 × previous + 1.",
          options: ["95", "126", "127", "255"],
          correct: 2,
          explanation: "2 × 63 + 1 = 127."
        },
        {
          id: "TNR1215_3_18",
          question: "What comes next? 2, 5, 11, 23, 47, ?",
          hint: "Each = 2 × previous + 1.",
          options: ["71", "85", "94", "95"],
          correct: 3,
          explanation: "2 × 47 + 1 = 95."
        },
        {
          id: "TNR1215_3_19",
          question: "What comes next? 10, 11, 13, 17, 25, ?",
          hint: "Differences: 1, 2, 4, 8 — doubling.",
          options: ["33", "37", "41", "49"],
          correct: 2,
          explanation: "Next diff = 16. 25 + 16 = 41."
        },
        {
          id: "TNR1215_3_20",
          question: "What comes next? 1, 3, 7, 13, 21, 31, ?",
          hint: "Differences: 2, 4, 6, 8, 10 — increasing by 2.",
          options: ["39", "41", "43", "45"],
          correct: 2,
          explanation: "Next diff = 12. 31 + 12 = 43."
        }
      ]
    },
    {
      level: 4,
      name: "Expert",
      description: "Recursive formulas (prev×2+3), interleaved sequences, factorial sequences, and n²+n patterns for peak numerical reasoning.",
      exercises: [
        {
          id: "TNR1215_4_01",
          question: "What comes next? 1, 5, 13, 29, 61, ?",
          hint: "Each term = 2 × previous + 3.",
          options: ["91", "113", "122", "125"],
          correct: 3,
          explanation: "2 × 61 + 3 = 125."
        },
        {
          id: "TNR1215_4_02",
          question: "What comes next? 2, 5, 3, 8, 4, 11, 5, ?",
          hint: "Two interleaved sequences: odd positions +1 (2,3,4,5,…), even positions +3 (5,8,11,…).",
          options: ["6", "12", "14", "16"],
          correct: 2,
          explanation: "Even positions: 5, 8, 11, 14. Next even-position value = 14."
        },
        {
          id: "TNR1215_4_03",
          question: "What comes next? 1, 1, 2, 6, 24, 120, ?",
          hint: "Factorials: 0!, 1!, 2!, 3!, 4!, 5!, …",
          options: ["240", "480", "600", "720"],
          correct: 3,
          explanation: "6! = 720."
        },
        {
          id: "TNR1215_4_04",
          question: "The sequence follows n² + n. What is the 7th term (n=7)?",
          hint: "7² + 7.",
          options: ["49", "52", "56", "63"],
          correct: 2,
          explanation: "49 + 7 = 56."
        },
        {
          id: "TNR1215_4_05",
          question: "What comes next? 3, 9, 21, 45, 93, ?",
          hint: "Each term = 2 × previous + 3.",
          options: ["141", "165", "186", "189"],
          correct: 3,
          explanation: "2 × 93 + 3 = 189."
        },
        {
          id: "TNR1215_4_06",
          question: "What comes next? 1, 4, 2, 7, 3, 10, 4, ?",
          hint: "Odd positions: 1,2,3,4,… (+1). Even positions: 4,7,10,… (+3).",
          options: ["5", "11", "13", "15"],
          correct: 2,
          explanation: "Even positions: 4, 7, 10, 13. Next = 13."
        },
        {
          id: "TNR1215_4_07",
          question: "What comes next? 1, 2, 6, 24, 120, 720, 5040, ?",
          hint: "Factorials.",
          options: ["10080", "20160", "40320", "50400"],
          correct: 2,
          explanation: "8! = 40320."
        },
        {
          id: "TNR1215_4_08",
          question: "The sequence is n² + n: 2, 6, 12, 20, 30, ?",
          hint: "n² + n for n = 1,2,3,4,5,6.",
          options: ["36", "40", "42", "48"],
          correct: 2,
          explanation: "6² + 6 = 42."
        },
        {
          id: "TNR1215_4_09",
          question: "What comes next? 2, 7, 17, 37, 77, ?",
          hint: "Each = 2 × previous + 3.",
          options: ["117", "147", "154", "157"],
          correct: 3,
          explanation: "2 × 77 + 3 = 157."
        },
        {
          id: "TNR1215_4_10",
          question: "What comes next? 3, 1, 9, 2, 27, 3, 81, ?",
          hint: "Two interleaved sequences: powers of 3 (3,9,27,81,…) and counting (1,2,3,…).",
          options: ["4", "108", "162", "243"],
          correct: 0,
          explanation: "Odd positions: 3,9,27,81 (×3). Even positions: 1,2,3,4. Next even = 4."
        },
        {
          id: "TNR1215_4_11",
          question: "What comes next? 1, 2, 6, 24, 120, 720, ?",
          hint: "Factorials from 1!.",
          options: ["1440", "2520", "5040", "7200"],
          correct: 2,
          explanation: "7! = 5040."
        },
        {
          id: "TNR1215_4_12",
          question: "The sequence is n² + n for n=1,2,…,8. What is the 8th term?",
          hint: "8² + 8.",
          options: ["56", "64", "72", "80"],
          correct: 2,
          explanation: "64 + 8 = 72."
        },
        {
          id: "TNR1215_4_13",
          question: "What comes next? 5, 13, 29, 61, ?",
          hint: "Each = 2 × previous + 3.",
          options: ["100", "122", "125", "128"],
          correct: 2,
          explanation: "2 × 61 + 3 = 125."
        },
        {
          id: "TNR1215_4_14",
          question: "What comes next? 2, 3, 4, 9, 8, 27, 16, ?",
          hint: "Two interleaved: powers of 2 (2,4,8,16,…) and powers of 3 (3,9,27,…).",
          options: ["32", "54", "64", "81"],
          correct: 3,
          explanation: "Even positions: 3, 9, 27, 81 (×3). Next even = 81."
        },
        {
          id: "TNR1215_4_15",
          question: "What comes next? 2, 6, 24, 120, 720, 5040, ?",
          hint: "Factorials from 2!.",
          options: ["10080", "20160", "40320", "50400"],
          correct: 2,
          explanation: "8! = 40320."
        },
        {
          id: "TNR1215_4_16",
          question: "The formula is n² + n + 1. What is the value for n=9?",
          hint: "81 + 9 + 1.",
          options: ["82", "89", "91", "100"],
          correct: 2,
          explanation: "81 + 9 + 1 = 91."
        },
        {
          id: "TNR1215_4_17",
          question: "What comes next? 1, 5, 13, 29, 61, 125, ?",
          hint: "Each = 2 × previous + 3.",
          options: ["189", "221", "250", "253"],
          correct: 3,
          explanation: "2 × 125 + 3 = 253."
        },
        {
          id: "TNR1215_4_18",
          question: "What comes next? 1, 2, 1, 4, 1, 8, 1, ?",
          hint: "Odd positions are all 1. Even positions: 2, 4, 8 (×2).",
          options: ["1", "2", "16", "32"],
          correct: 2,
          explanation: "Even positions: 2, 4, 8, 16 (×2). Next even = 16."
        },
        {
          id: "TNR1215_4_19",
          question: "What comes next? 2, 6, 12, 20, 30, 42, 56, ?",
          hint: "n(n+1): 1×2, 2×3, 3×4, …, 7×8, 8×9.",
          options: ["64", "70", "72", "80"],
          correct: 2,
          explanation: "8 × 9 = 72."
        },
        {
          id: "TNR1215_4_20",
          question: "What comes next? 0, 3, 10, 21, 36, 55, ?",
          hint: "These are n² + 2n for n = 0,1,2,3,4,5,6. Or equivalently (n+1)² − 1.",
          options: ["72", "78", "80", "91"],
          correct: 1,
          explanation: "Differences: 3, 7, 11, 15, 19 — increasing by 4 each time. Next difference = 23. So 55 + 23 = 78."
        }
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { TRAINING_PR_12_15, TRAINING_NR_12_15 };
}
