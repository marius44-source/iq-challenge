const TRAINING_PR_12_15 = {
  tips: [
    {
      title: "Scan Rows and Columns Separately",
      content: "When facing a number grid, first examine each row for patterns (like multiplication or addition), then check each column. Often one direction reveals the rule more clearly than the other."
    },
    {
      title: "Look for Common Mathematical Sequences",
      content: "Many grid patterns use well-known sequences: perfect squares (1, 4, 9, 16…), primes (2, 3, 5, 7…), Fibonacci numbers (1, 1, 2, 3, 5…), or powers of a number. Recognizing these instantly saves valuable time."
    },
    {
      title: "Check Relationships Between Cells",
      content: "In complex grids, one cell's value often depends on other cells in the same row or column. Try checking if cell C equals cell A × cell B, or cell A + cell B, or other arithmetic combinations of neighboring cells."
    },
    {
      title: "Use Process of Elimination with Answer Options",
      content: "If you cannot spot the pattern immediately, test each answer option by plugging it in and checking whether it creates a consistent rule across all rows and columns. This systematic approach often reveals hidden patterns."
    }
  ],
  levels: [
    {
      level: 1,
      name: "Foundation",
      description: "Number grids with perfect squares, simple multiplication rules across rows, and prime number sequences.",
      exercises: [
        {
          id: "TPR1215_1_01",
          question: "What replaces ? in this number grid?\n1, 4, 9\n16, 25, 36\n49, 64, ?",
          hint: "Each number is a perfect square. What comes after 8²?",
          options: ["81", "72", "78", "85"],
          correct: 0,
          explanation: "The grid lists consecutive perfect squares: 1²=1, 2²=4, 3²=9, …, 8²=64, 9²=81."
        },
        {
          id: "TPR1215_1_02",
          question: "What replaces ? in this number grid?\n3, 6, 12\n5, 10, 20\n7, 14, ?",
          hint: "Look at how each row progresses from left to right.",
          options: ["24", "28", "26", "30"],
          correct: 1,
          explanation: "In each row, every number is doubled to get the next: 7 × 2 = 14, 14 × 2 = 28."
        },
        {
          id: "TPR1215_1_03",
          question: "What replaces ? in this number grid?\n2, 3, 5\n7, 11, 13\n17, 19, ?",
          hint: "These are special numbers that have exactly two factors.",
          options: ["21", "25", "23", "27"],
          correct: 2,
          explanation: "The grid lists consecutive prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23."
        },
        {
          id: "TPR1215_1_04",
          question: "What replaces ? in this number grid?\n4, 16, 36\n64, 100, 144\n196, 256, ?",
          hint: "Each number is the square of an even number.",
          options: ["300", "289", "361", "324"],
          correct: 3,
          explanation: "Squares of even numbers: 2²=4, 4²=16, 6²=36, 8²=64, 10²=100, 12²=144, 14²=196, 16²=256, 18²=324."
        },
        {
          id: "TPR1215_1_05",
          question: "What replaces ? in this number grid?\n2, 6, 18\n4, 12, 36\n5, 15, ?",
          hint: "Each row uses the same multiplier between consecutive cells.",
          options: ["45", "40", "42", "50"],
          correct: 0,
          explanation: "Each row multiplies by 3: 5 × 3 = 15, 15 × 3 = 45."
        },
        {
          id: "TPR1215_1_06",
          question: "What replaces ? in this number grid?\n100, 81, 64\n49, 36, 25\n16, 9, ?",
          hint: "Each number is a perfect square, but the sequence goes downward.",
          options: ["6", "4", "1", "8"],
          correct: 1,
          explanation: "Descending perfect squares: 10²=100, 9²=81, 8²=64, …, 3²=9, 2²=4."
        },
        {
          id: "TPR1215_1_07",
          question: "What replaces ? in this number grid?\n5, 10, 15\n8, 13, 18\n11, 16, ?",
          hint: "Check how much is added within each row and within each column.",
          options: ["19", "20", "21", "22"],
          correct: 2,
          explanation: "Each row adds 5 (16 + 5 = 21). Each column also adds 3 going down."
        },
        {
          id: "TPR1215_1_08",
          question: "What replaces ? in this number grid?\n6, 12, 18\n24, 30, 36\n42, 48, ?",
          hint: "All numbers share a common factor.",
          options: ["52", "56", "60", "54"],
          correct: 3,
          explanation: "The grid lists consecutive multiples of 6: 6, 12, 18, 24, 30, 36, 42, 48, 54."
        },
        {
          id: "TPR1215_1_09",
          question: "What replaces ? in this number grid?\n9, 16, 25\n36, 49, 64\n81, 100, ?",
          hint: "Each number is a perfect square starting from 3².",
          options: ["121", "110", "115", "125"],
          correct: 0,
          explanation: "Consecutive perfect squares: 3²=9, 4²=16, 5²=25, …, 10²=100, 11²=121."
        },
        {
          id: "TPR1215_1_10",
          question: "What replaces ? in this number grid?\n4, 8, 12\n7, 14, 21\n9, 18, ?",
          hint: "Compare each cell to the first cell in its row.",
          options: ["24", "27", "30", "36"],
          correct: 1,
          explanation: "In each row: column 2 = column 1 × 2, column 3 = column 1 × 3. So 9 × 3 = 27."
        },
        {
          id: "TPR1215_1_11",
          question: "What replaces ? in this number grid?\n4, 6, 8\n6, 9, 12\n8, 12, ?",
          hint: "Think of a multiplication table where row and column headers start at 2.",
          options: ["14", "15", "16", "18"],
          correct: 2,
          explanation: "Each cell equals (row+1) × (column+1). Row 3, column 3: 4 × 4 = 16. Equivalently, each row adds the same constant and each column adds the same constant."
        },
        {
          id: "TPR1215_1_12",
          question: "What replaces ? in this number grid?\n3, 5, 7\n11, 13, 17\n19, 23, ?",
          hint: "These are prime numbers, but only the odd ones.",
          options: ["27", "31", "37", "29"],
          correct: 3,
          explanation: "Consecutive odd prime numbers: 3, 5, 7, 11, 13, 17, 19, 23, 29."
        },
        {
          id: "TPR1215_1_13",
          question: "What replaces ? in this number grid?\n1, 4, 16\n2, 8, 32\n3, 12, ?",
          hint: "Each row multiplies by the same factor between consecutive cells.",
          options: ["48", "36", "42", "52"],
          correct: 0,
          explanation: "Each row multiplies by 4: 3 × 4 = 12, 12 × 4 = 48."
        },
        {
          id: "TPR1215_1_14",
          question: "What replaces ? in this number grid?\n9, 36, 81\n144, 225, 324\n441, 576, ?",
          hint: "Each number is the square of a multiple of 3.",
          options: ["625", "729", "676", "784"],
          correct: 1,
          explanation: "Squares of multiples of 3: 3²=9, 6²=36, 9²=81, 12²=144, 15²=225, 18²=324, 21²=441, 24²=576, 27²=729."
        },
        {
          id: "TPR1215_1_15",
          question: "What replaces ? in this number grid?\n10, 20, 30\n15, 25, 35\n20, 30, ?",
          hint: "Check the constant difference within each row and each column.",
          options: ["35", "38", "40", "45"],
          correct: 2,
          explanation: "Each row increases by 10 (30 + 10 = 40). Each column increases by 5 going down."
        },
        {
          id: "TPR1215_1_16",
          question: "What replaces ? in this number grid?\n2, 4, 6\n7, 9, 11\n12, 14, ?",
          hint: "Find the constant difference within rows and within columns.",
          options: ["15", "17", "18", "16"],
          correct: 3,
          explanation: "Each row adds 2 (14 + 2 = 16). Each column adds 5 going down."
        },
        {
          id: "TPR1215_1_17",
          question: "What replaces ? in this number grid?\n1, 5, 25\n2, 10, 50\n3, 15, ?",
          hint: "Each row uses the same multiplier between consecutive cells.",
          options: ["75", "60", "65", "80"],
          correct: 0,
          explanation: "Each row multiplies by 5: 3 × 5 = 15, 15 × 5 = 75."
        },
        {
          id: "TPR1215_1_18",
          question: "What replaces ? in this number grid?\n1, 4, 9, 16\n25, 36, 49, 64\n81, 100, 121, ?",
          hint: "The entire grid is a single well-known sequence.",
          options: ["132", "144", "140", "148"],
          correct: 1,
          explanation: "Consecutive perfect squares: 1²=1, 2²=4, 3²=9, …, 11²=121, 12²=144."
        },
        {
          id: "TPR1215_1_19",
          question: "What replaces ? in this number grid?\n1, 4, 7\n10, 13, 16\n19, 22, ?",
          hint: "Look at the difference between each consecutive number in the entire grid.",
          options: ["24", "26", "25", "27"],
          correct: 2,
          explanation: "The sequence increases by 3 each time: 1, 4, 7, 10, 13, 16, 19, 22, 25."
        },
        {
          id: "TPR1215_1_20",
          question: "What replaces ? in this number grid?\n3, 6, 12\n5, 10, 20\n8, 16, ?",
          hint: "Each row doubles between consecutive cells.",
          options: ["28", "30", "36", "32"],
          correct: 3,
          explanation: "Each row doubles: column 2 = column 1 × 2, column 3 = column 2 × 2. So 16 × 2 = 32."
        }
      ]
    },
    {
      level: 2,
      name: "Developing",
      description: "Two-rule grids, Fibonacci-like grids, and grids where each row doubles or triples.",
      exercises: [
        {
          id: "TPR1215_2_01",
          question: "What replaces ? in this number grid?\n2, 6, 10\n3, 9, 15\n5, 15, ?",
          hint: "Each row uses two different multipliers from the first column.",
          options: ["25", "20", "30", "35"],
          correct: 0,
          explanation: "Column 2 = column 1 × 3, and column 3 = column 1 × 5. So 5 × 5 = 25."
        },
        {
          id: "TPR1215_2_02",
          question: "What replaces ? in this number grid?\n1, 1, 2\n3, 5, 8\n13, 21, ?",
          hint: "Read the grid left to right, top to bottom as one long sequence.",
          options: ["29", "34", "32", "36"],
          correct: 1,
          explanation: "The Fibonacci sequence fills the grid: 1, 1, 2, 3, 5, 8, 13, 21, 34. Each number is the sum of the two before it."
        },
        {
          id: "TPR1215_2_03",
          question: "What replaces ? in this number grid?\n2, 8, 14\n4, 16, 28\n6, 24, ?",
          hint: "Compare each cell to the first cell in its row using two different multipliers.",
          options: ["36", "38", "42", "48"],
          correct: 2,
          explanation: "Column 2 = column 1 × 4, and column 3 = column 1 × 7. So 6 × 7 = 42."
        },
        {
          id: "TPR1215_2_04",
          question: "What replaces ? in this number grid?\n1, 2, 4\n2, 4, 8\n4, 8, ?",
          hint: "Check both the row pattern and the column pattern — they use the same rule.",
          options: ["12", "14", "18", "16"],
          correct: 3,
          explanation: "Each row doubles left to right, and each column doubles top to bottom. So 8 × 2 = 16."
        },
        {
          id: "TPR1215_2_05",
          question: "What replaces ? in this number grid?\n3, 12, 21\n5, 20, 35\n7, 28, ?",
          hint: "Each row uses two multipliers applied to the first column.",
          options: ["49", "42", "45", "56"],
          correct: 0,
          explanation: "Column 2 = column 1 × 4, and column 3 = column 1 × 7. So 7 × 7 = 49."
        },
        {
          id: "TPR1215_2_06",
          question: "What replaces ? in this number grid?\n2, 5, 7\n3, 8, 11\n4, 11, ?",
          hint: "Look at how the third column relates to the first two columns.",
          options: ["13", "15", "14", "16"],
          correct: 1,
          explanation: "Column 3 = column 1 + column 2. So 4 + 11 = 15."
        },
        {
          id: "TPR1215_2_07",
          question: "What replaces ? in this number grid?\n1, 3, 9\n2, 6, 18\n3, 9, ?",
          hint: "Each row multiplies by the same factor between consecutive cells.",
          options: ["21", "24", "27", "30"],
          correct: 2,
          explanation: "Each row triples: column 2 = column 1 × 3, column 3 = column 2 × 3. So 9 × 3 = 27."
        },
        {
          id: "TPR1215_2_08",
          question: "What replaces ? in this number grid?\n4, 8, 24\n5, 10, 30\n6, 12, ?",
          hint: "Each row uses two different multipliers from the first column.",
          options: ["30", "33", "42", "36"],
          correct: 3,
          explanation: "Column 2 = column 1 × 2, and column 3 = column 1 × 6. So 6 × 6 = 36."
        },
        {
          id: "TPR1215_2_09",
          question: "What replaces ? in this number grid?\n1, 2, 3\n2, 4, 6\n4, 8, ?",
          hint: "Compare each row to the row above it.",
          options: ["12", "10", "14", "16"],
          correct: 0,
          explanation: "Each row is double the previous row: Row 3 = Row 2 × 2. So 6 × 2 = 12."
        },
        {
          id: "TPR1215_2_10",
          question: "What replaces ? in this number grid?\n3, 9, 15\n6, 18, 30\n9, 27, ?",
          hint: "Compare each row to the first row, and check column multipliers.",
          options: ["39", "45", "42", "48"],
          correct: 1,
          explanation: "Row 2 = Row 1 × 2, Row 3 = Row 1 × 3. So 15 × 3 = 45. Also, column 2 = column 1 × 3 and column 3 = column 1 × 5."
        },
        {
          id: "TPR1215_2_11",
          question: "What replaces ? in this number grid?\n1, 3, 4\n2, 5, 7\n3, 8, ?",
          hint: "The third column combines the first two columns with a simple operation.",
          options: ["9", "10", "11", "13"],
          correct: 2,
          explanation: "Column 3 = column 1 + column 2. So 3 + 8 = 11."
        },
        {
          id: "TPR1215_2_12",
          question: "What replaces ? in this number grid?\n2, 6, 18\n3, 9, 27\n4, 12, ?",
          hint: "Each row applies the same multiplier twice.",
          options: ["32", "40", "48", "36"],
          correct: 3,
          explanation: "Each row triples: column 2 = column 1 × 3, column 3 = column 2 × 3. So 12 × 3 = 36."
        },
        {
          id: "TPR1215_2_13",
          question: "What replaces ? in this number grid?\n1, 3, 9\n3, 9, 27\n9, 27, ?",
          hint: "Notice how each row starts where the previous row had its middle value.",
          options: ["81", "54", "63", "72"],
          correct: 0,
          explanation: "Each row triples (×3). The rows overlap: each row starts at the previous row's second value. So 27 × 3 = 81."
        },
        {
          id: "TPR1215_2_14",
          question: "What replaces ? in this number grid?\n2, 4, 8\n3, 6, 12\n5, 10, ?",
          hint: "Each row doubles between consecutive cells.",
          options: ["15", "20", "18", "25"],
          correct: 1,
          explanation: "Each row doubles: column 2 = column 1 × 2, column 3 = column 2 × 2. So 10 × 2 = 20."
        },
        {
          id: "TPR1215_2_15",
          question: "What replaces ? in this number grid?\n1, 2, 3\n3, 6, 9\n9, 18, ?",
          hint: "Compare each row to the one above it — the multiplier changes.",
          options: ["24", "30", "27", "36"],
          correct: 2,
          explanation: "Each row is triple the previous row: Row 2 = Row 1 × 3, Row 3 = Row 2 × 3. So 9 × 3 = 27."
        },
        {
          id: "TPR1215_2_16",
          question: "What replaces ? in this number grid?\n2, 10, 18\n4, 20, 36\n6, 30, ?",
          hint: "Each row uses two different multipliers applied to the first column.",
          options: ["48", "50", "60", "54"],
          correct: 3,
          explanation: "Column 2 = column 1 × 5, and column 3 = column 1 × 9. So 6 × 9 = 54."
        },
        {
          id: "TPR1215_2_17",
          question: "What replaces ? in this number grid?\n1, 1, 2, 3\n5, 8, 13, 21\n34, 55, 89, ?",
          hint: "Read the entire grid as one continuous sequence where each term is the sum of the two before it.",
          options: ["144", "120", "133", "155"],
          correct: 0,
          explanation: "The Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144."
        },
        {
          id: "TPR1215_2_18",
          question: "What replaces ? in this number grid?\n5, 15, 45\n4, 12, 36\n6, 18, ?",
          hint: "Each row triples between consecutive cells.",
          options: ["48", "54", "60", "72"],
          correct: 1,
          explanation: "Each row triples: column 2 = column 1 × 3, column 3 = column 2 × 3. So 18 × 3 = 54."
        },
        {
          id: "TPR1215_2_19",
          question: "What replaces ? in this number grid?\n3, 6, 12\n9, 18, 36\n27, 54, ?",
          hint: "Each row doubles, and the first column triples between rows.",
          options: ["96", "100", "108", "112"],
          correct: 2,
          explanation: "Each row doubles: column 2 = column 1 × 2, column 3 = column 2 × 2. So 54 × 2 = 108. The first column also triples between rows (3, 9, 27)."
        },
        {
          id: "TPR1215_2_20",
          question: "What replaces ? in this number grid?\n2, 8, 32\n3, 12, 48\n5, 20, ?",
          hint: "Each row multiplies by the same factor between consecutive cells.",
          options: ["60", "70", "90", "80"],
          correct: 3,
          explanation: "Each row multiplies by 4: column 2 = column 1 × 4, column 3 = column 2 × 4. So 20 × 4 = 80."
        }
      ]
    },
    {
      level: 3,
      name: "Advanced",
      description: "Power grids (n, n², n³), grids with factorial patterns, and complex arithmetic rules.",
      exercises: [
        {
          id: "TPR1215_3_01",
          question: "What replaces ? in this number grid?\n2, 4, 8\n3, 9, 27\n4, 16, ?",
          hint: "Each row shows successive powers of the first number.",
          options: ["64", "48", "56", "72"],
          correct: 0,
          explanation: "Each row is n, n², n³. Row 3: 4¹=4, 4²=16, 4³=64."
        },
        {
          id: "TPR1215_3_02",
          question: "What replaces ? in this number grid?\n1, 2, 6\n24, 120, ?",
          hint: "Each number is the result of multiplying all integers from 1 up to some number.",
          options: ["620", "720", "680", "750"],
          correct: 1,
          explanation: "The grid lists consecutive factorials: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720."
        },
        {
          id: "TPR1215_3_03",
          question: "What replaces ? in this number grid?\n2, 3, 7\n3, 4, 13\n4, 5, ?",
          hint: "The third column uses the first two columns in a multiplication-plus-one pattern.",
          options: ["19", "20", "21", "22"],
          correct: 2,
          explanation: "Column 3 = column 1 × column 2 + 1. So 4 × 5 + 1 = 21."
        },
        {
          id: "TPR1215_3_04",
          question: "What replaces ? in this number grid?\n5, 25, 125\n3, 9, 27\n7, 49, ?",
          hint: "Each row shows successive powers of the first number.",
          options: ["294", "329", "350", "343"],
          correct: 3,
          explanation: "Each row is n, n², n³. Row 3: 7¹=7, 7²=49, 7³=343."
        },
        {
          id: "TPR1215_3_05",
          question: "What replaces ? in this number grid?\n2, 4, 16\n3, 9, 81\n4, 16, ?",
          hint: "The third column skips a power — it is the fourth power of the first number.",
          options: ["256", "196", "216", "288"],
          correct: 0,
          explanation: "Each row is n, n², n⁴. Row 3: 4¹=4, 4²=16, 4⁴=256."
        },
        {
          id: "TPR1215_3_06",
          question: "What replaces ? in this number grid?\n2, 5, 11\n3, 7, 22\n4, 9, ?",
          hint: "First figure out how column 2 relates to column 1, then how column 3 uses both.",
          options: ["33", "37", "35", "39"],
          correct: 1,
          explanation: "Column 2 = column 1 × 2 + 1. Column 3 = column 1 × column 2 + 1. So column 2: 4 × 2 + 1 = 9. Column 3: 4 × 9 + 1 = 37."
        },
        {
          id: "TPR1215_3_07",
          question: "What replaces ? in this number grid?\n1, 1, 1\n2, 4, 8\n3, 9, ?",
          hint: "Each row shows successive powers of the first number.",
          options: ["18", "21", "27", "36"],
          correct: 2,
          explanation: "Each row is n, n², n³. Row 3: 3¹=3, 3²=9, 3³=27."
        },
        {
          id: "TPR1215_3_08",
          question: "What replaces ? in this number grid?\n5, 6, 31\n3, 4, 13\n7, 8, ?",
          hint: "The third column uses a multiply-then-add pattern with the first two columns.",
          options: ["49", "55", "63", "57"],
          correct: 3,
          explanation: "Column 3 = column 1 × column 2 + 1. So 7 × 8 + 1 = 57."
        },
        {
          id: "TPR1215_3_09",
          question: "What replaces ? in this number grid?\n6, 36, 216\n4, 16, 64\n5, 25, ?",
          hint: "Each row shows successive powers of the first number.",
          options: ["125", "100", "115", "150"],
          correct: 0,
          explanation: "Each row is n, n², n³. Row 3: 5¹=5, 5²=25, 5³=125."
        },
        {
          id: "TPR1215_3_10",
          question: "What replaces ? in this number grid?\n2, 3, 7\n4, 5, 21\n6, 7, ?",
          hint: "The third column uses a multiply-then-add pattern with the first two columns.",
          options: ["39", "43", "41", "45"],
          correct: 1,
          explanation: "Column 3 = column 1 × column 2 + 1. So 6 × 7 + 1 = 43."
        },
        {
          id: "TPR1215_3_11",
          question: "What replaces ? in this number grid?\n1, 2, 6\n2, 6, 24\n6, 24, ?",
          hint: "Read the grid as overlapping groups of consecutive factorials.",
          options: ["100", "110", "120", "140"],
          correct: 2,
          explanation: "Each row contains three consecutive factorials: Row 1: 1!, 2!, 3!. Row 2: 2!, 3!, 4!. Row 3: 3!, 4!, 5!=120."
        },
        {
          id: "TPR1215_3_12",
          question: "What replaces ? in this number grid?\n3, 27, 243\n2, 8, 32\n4, 64, ?",
          hint: "The columns are odd powers of the first number: 1st, 3rd, and 5th.",
          options: ["512", "768", "1280", "1024"],
          correct: 3,
          explanation: "Each row is n¹, n³, n⁵. Row 3: 4¹=4, 4³=64, 4⁵=1024."
        },
        {
          id: "TPR1215_3_13",
          question: "What replaces ? in this number grid?\n3, 4, 13\n5, 6, 31\n2, 7, ?",
          hint: "The third column uses the square of the first column plus the second column.",
          options: ["11", "9", "13", "15"],
          correct: 0,
          explanation: "Column 3 = column 1² + column 2. So 2² + 7 = 4 + 7 = 11."
        },
        {
          id: "TPR1215_3_14",
          question: "What replaces ? in this number grid?\n10, 100, 1000\n5, 25, 125\n8, 64, ?",
          hint: "Each row shows successive powers of the first number.",
          options: ["480", "512", "500", "520"],
          correct: 1,
          explanation: "Each row is n, n², n³. Row 3: 8¹=8, 8²=64, 8³=512."
        },
        {
          id: "TPR1215_3_15",
          question: "What replaces ? in this number grid?\n3, 4, 25\n5, 12, 169\n6, 8, ?",
          hint: "The third column is the sum of the squares of the first two columns.",
          options: ["92", "96", "100", "104"],
          correct: 2,
          explanation: "Column 3 = column 1² + column 2². So 6² + 8² = 36 + 64 = 100."
        },
        {
          id: "TPR1215_3_16",
          question: "What replaces ? in this number grid?\n7, 49, 343\n9, 81, 729\n6, 36, ?",
          hint: "Each row shows successive powers of the first number.",
          options: ["180", "196", "252", "216"],
          correct: 3,
          explanation: "Each row is n, n², n³. Row 3: 6¹=6, 6²=36, 6³=216."
        },
        {
          id: "TPR1215_3_17",
          question: "What replaces ? in this number grid?\n3, 5, 16\n4, 7, 29\n5, 9, ?",
          hint: "The third column uses a multiply-then-add pattern with the first two columns.",
          options: ["46", "42", "44", "50"],
          correct: 0,
          explanation: "Column 3 = column 1 × column 2 + 1. So 5 × 9 + 1 = 46."
        },
        {
          id: "TPR1215_3_18",
          question: "What replaces ? in this number grid?\n2, 8, 64\n3, 27, 729\n4, 64, ?",
          hint: "The columns are the 1st, 3rd, and 6th powers of the first number.",
          options: ["2048", "4096", "3072", "8192"],
          correct: 1,
          explanation: "Each row is n¹, n³, n⁶. Row 3: 4¹=4, 4³=64, 4⁶=4096."
        },
        {
          id: "TPR1215_3_19",
          question: "What replaces ? in this number grid?\n6, 7, 43\n8, 3, 67\n5, 9, ?",
          hint: "The third column uses the square of the first column plus the second column.",
          options: ["30", "32", "34", "36"],
          correct: 2,
          explanation: "Column 3 = column 1² + column 2. So 5² + 9 = 25 + 9 = 34."
        },
        {
          id: "TPR1215_3_20",
          question: "What replaces ? in this number grid?\n1, 1, 2, 6, 24, 120, ?",
          hint: "Each number equals the product of all positive integers up to some value.",
          options: ["600", "680", "750", "720"],
          correct: 3,
          explanation: "Consecutive factorials: 0!=1, 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720."
        }
      ]
    },
    {
      level: 4,
      name: "Expert",
      description: "Multi-step combined operations, diagonal rule patterns, interleaved row rules, and grids combining addition with multiplication.",
      exercises: [
        {
          id: "TPR1215_4_01",
          question: "What replaces ? in this number grid?\n1, 2, 5\n2, 3, 11\n3, 4, ?",
          hint: "Try computing (column 1 + 1) × (column 2 + 1) and adjusting.",
          options: ["19", "17", "21", "23"],
          correct: 0,
          explanation: "Column 3 = column 1 × column 2 + column 1 + column 2, which equals (column 1 + 1)(column 2 + 1) − 1. So (3+1)(4+1) − 1 = 20 − 1 = 19."
        },
        {
          id: "TPR1215_4_02",
          question: "What replaces ? in this number grid?\nRow 1: 5, 10, 20\nRow 2: 4, 12, 36\nRow 3: 7, 14, 28\nRow 4: 6, 18, ?",
          hint: "Odd-numbered rows use one multiplier; even-numbered rows use a different one.",
          options: ["48", "54", "50", "60"],
          correct: 1,
          explanation: "Odd rows multiply by 2 (×2, ×2). Even rows multiply by 3 (×3, ×3). Row 4 is even: 6 × 3 = 18, 18 × 3 = 54."
        },
        {
          id: "TPR1215_4_03",
          question: "What replaces ? in this grid with four columns?\n2, 3, 5, 30\n4, 1, 5, 20\n3, 5, 8, ?",
          hint: "Column 3 combines columns 1 and 2 with addition. Column 4 combines all three with multiplication.",
          options: ["90", "105", "120", "135"],
          correct: 2,
          explanation: "Column 3 = column 1 + column 2 (3 + 5 = 8). Column 4 = column 1 × column 2 × column 3 (3 × 5 × 8 = 120)."
        },
        {
          id: "TPR1215_4_04",
          question: "What replaces ? in this number grid?\n1, 2, 3\n4, 6, 9\n7, 13, ?",
          hint: "Each interior cell is the sum of the cell above it and the cell to its left.",
          options: ["18", "20", "24", "22"],
          correct: 3,
          explanation: "Rule: each cell = cell above + cell to the left. Cell(3,3) = cell(2,3) + cell(3,2) = 9 + 13 = 22."
        },
        {
          id: "TPR1215_4_05",
          question: "What replaces ? in this number grid?\nRow 1: 3, 5, 8\nRow 2: 2, 7, 14\nRow 3: 6, 4, 10\nRow 4: 3, 8, ?",
          hint: "Odd rows use addition for column 3; even rows use multiplication.",
          options: ["24", "11", "18", "32"],
          correct: 0,
          explanation: "Odd rows: column 3 = column 1 + column 2. Even rows: column 3 = column 1 × column 2. Row 4 is even: 3 × 8 = 24."
        },
        {
          id: "TPR1215_4_06",
          question: "What replaces ? in this number grid?\n3, 4, 21\n5, 2, 35\n4, 6, ?",
          hint: "Column 3 uses column 1 multiplied by a sum involving both columns.",
          options: ["36", "40", "38", "44"],
          correct: 1,
          explanation: "Column 3 = column 1 × (column 1 + column 2). So 4 × (4 + 6) = 4 × 10 = 40."
        },
        {
          id: "TPR1215_4_07",
          question: "What replaces ? in this number grid?\n3, 2, 25\n4, 5, 59\n5, 6, ?",
          hint: "Column 3 involves cubing the first column and subtracting the second.",
          options: ["113", "117", "119", "125"],
          correct: 2,
          explanation: "Column 3 = column 1³ − column 2. So 5³ − 6 = 125 − 6 = 119."
        },
        {
          id: "TPR1215_4_08",
          question: "What replaces ? in this number grid?\n2, 7, 6\n9, 5, 1\n4, 3, ?",
          hint: "This is a special grid where every row, column, and diagonal has the same sum.",
          options: ["6", "7", "9", "8"],
          correct: 3,
          explanation: "This is a 3×3 magic square where every row, column, and diagonal sums to 15. Row 3: 4 + 3 + ? = 15, so ? = 8."
        },
        {
          id: "TPR1215_4_09",
          question: "What replaces ? in this number grid?\n2, 3, 10\n4, 5, 36\n3, 7, ?",
          hint: "Column 3 uses both multiplication and squaring of the first column.",
          options: ["30", "26", "28", "32"],
          correct: 0,
          explanation: "Column 3 = column 1 × column 2 + column 1². So 3 × 7 + 3² = 21 + 9 = 30."
        },
        {
          id: "TPR1215_4_10",
          question: "What replaces ? in this number grid?\n2, 3, 11\n5, 4, 29\n3, 6, ?",
          hint: "Column 3 equals the product of the first two columns plus both of them added individually.",
          options: ["24", "27", "25", "30"],
          correct: 1,
          explanation: "Column 3 = column 1 × column 2 + column 1 + column 2. So 3 × 6 + 3 + 6 = 18 + 9 = 27."
        },
        {
          id: "TPR1215_4_11",
          question: "What replaces ? in this number grid?\n2, 5, 10\n5, 8, 13\n10, 13, ?",
          hint: "The grid is symmetric. Think about what operation on the row and column indices produces each value.",
          options: ["16", "17", "18", "20"],
          correct: 2,
          explanation: "Each cell = row² + column² (rows and columns numbered 1–3). Cell(3,3) = 3² + 3² = 9 + 9 = 18. The grid is also symmetric across the main diagonal."
        },
        {
          id: "TPR1215_4_12",
          question: "What replaces ? in this number grid?\nRow 1: 8, 3, 11\nRow 2: 4, 6, 24\nRow 3: 9, 7, 16\nRow 4: 5, 5, ?",
          hint: "Odd rows use addition for column 3; even rows use multiplication.",
          options: ["10", "15", "30", "25"],
          correct: 3,
          explanation: "Odd rows: column 3 = column 1 + column 2. Even rows: column 3 = column 1 × column 2. Row 4 is even: 5 × 5 = 25."
        },
        {
          id: "TPR1215_4_13",
          question: "What replaces ? in this number grid?\n2, 3, 19\n4, 1, 21\n3, 5, ?",
          hint: "Column 3 involves squaring a sum and subtracting a product.",
          options: ["49", "41", "45", "55"],
          correct: 0,
          explanation: "Column 3 = (column 1 + column 2)² − column 1 × column 2. So (3 + 5)² − 3 × 5 = 64 − 15 = 49."
        },
        {
          id: "TPR1215_4_14",
          question: "What replaces ? in this number grid?\n2, 3, 5\n4, 9, 25\n8, 27, ?",
          hint: "Each column is a different base raised to the power of the row number.",
          options: ["100", "125", "115", "150"],
          correct: 1,
          explanation: "Cell = base^row. Column bases are 2, 3, 5. Row 3: 2³=8, 3³=27, 5³=125."
        },
        {
          id: "TPR1215_4_15",
          question: "What replaces ? in this number grid?\n5, 3, 27\n7, 4, 52\n6, 5, ?",
          hint: "Column 3 uses squaring, subtraction, and addition of the first two columns.",
          options: ["33", "35", "37", "41"],
          correct: 2,
          explanation: "Column 3 = column 1² − column 2 + column 1. So 6² − 5 + 6 = 36 − 5 + 6 = 37."
        },
        {
          id: "TPR1215_4_16",
          question: "What replaces ? in this number grid?\nRow 1: 3, 9, 12\nRow 2: 2, 8, 10\nRow 3: 5, 25, 30\nRow 4: 4, 64, ?",
          hint: "Odd rows square column 1 for column 2; even rows cube it. Column 3 always adds column 1 to column 2.",
          options: ["56", "64", "72", "68"],
          correct: 3,
          explanation: "Odd rows: column 2 = column 1². Even rows: column 2 = column 1³. Column 3 = column 2 + column 1. Row 4 (even): 4³ = 64, then 64 + 4 = 68."
        },
        {
          id: "TPR1215_4_17",
          question: "What replaces ? in this number grid?\n5, 3, 16\n7, 4, 33\n8, 5, ?",
          hint: "Column 3 uses the difference of the squares of the first two columns.",
          options: ["39", "35", "37", "41"],
          correct: 0,
          explanation: "Column 3 = column 1² − column 2². So 8² − 5² = 64 − 25 = 39."
        },
        {
          id: "TPR1215_4_18",
          question: "What replaces ? in this number grid?\n2, 3, 10\n3, 4, 33\n4, 5, ?",
          hint: "Column 3 uses the square of column 1 multiplied by column 2, then subtracts column 1.",
          options: ["68", "76", "72", "80"],
          correct: 1,
          explanation: "Column 3 = column 1² × column 2 − column 1. So 4² × 5 − 4 = 16 × 5 − 4 = 80 − 4 = 76."
        },
        {
          id: "TPR1215_4_19",
          question: "What replaces ? in this 4×4 number grid?\n16, 3, 2, 13\n5, 10, 11, 8\n9, 6, 7, 12\n4, 15, 14, ?",
          hint: "Every row, column, and diagonal in this grid adds up to the same number.",
          options: ["3", "5", "1", "11"],
          correct: 2,
          explanation: "This is a 4×4 magic square where every row, column, and diagonal sums to 34. Row 4: 4 + 15 + 14 + ? = 34, so ? = 1."
        },
        {
          id: "TPR1215_4_20",
          question: "What replaces ? in this grid with four columns?\n2, 3, 4, 29\n1, 5, 3, 35\n4, 2, 5, ?",
          hint: "Column 4 is the sum of the squares of the first three columns.",
          options: ["40", "43", "49", "45"],
          correct: 3,
          explanation: "Column 4 = column 1² + column 2² + column 3². So 4² + 2² + 5² = 16 + 4 + 25 = 45."
        }
      ]
    }
  ]
};
