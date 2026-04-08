const QUESTIONS = [

  // ==========================================================================
  // PATTERN RECOGNITION (30 questions)
  // ==========================================================================
  // --- Difficulty 1 ---
  {
    id: "PR1", category: "Pattern Recognition", difficulty: 1,
    question: "Which figure completes the pattern?",
    visual: "matrix",
    matrix: { grid: [["●", "●●", "●●●"], ["■", "■■", "■■■"], ["▲", "▲▲", "?"]] },
    options: ["▲▲▲", "▲▲", "■■■", "●●●"], correct: 0,
    explanation: "Each row follows the pattern: 1 shape, 2 shapes, 3 shapes. The missing cell needs 3 triangles."
  },
  {
    id: "PR2", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next in the sequence?",
    visual: "sequence", sequence: ["○", "○○", "○○○", "○○○○", "?"],
    options: ["○○○○○", "○○○", "○○○○○○", "○○○○"], correct: 0,
    explanation: "Each step adds one circle. After 4 circles comes 5."
  },
  {
    id: "PR3", category: "Pattern Recognition", difficulty: 1,
    question: "Which figure completes the pattern?",
    visual: "matrix",
    matrix: { grid: [["★", "★★", "★★★"], ["♦", "♦♦", "♦♦♦"], ["♠", "♠♠", "?"]] },
    options: ["♠♠♠", "♠♠", "♦♦♦", "★★★"], correct: 0,
    explanation: "Each row adds one symbol per column. Row 3 needs 3 spades."
  },
  {
    id: "PR30", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["▲", "▲▲", "▲▲▲", "▲▲▲▲", "?"],
    options: ["▲▲▲▲▲", "▲▲▲", "▲▲▲▲▲▲", "▲▲▲▲"], correct: 0,
    explanation: "Each step adds one triangle. After 4 comes 5."
  },
  {
    id: "PR17", category: "Pattern Recognition", difficulty: 1,
    question: "Which figure completes the pattern?",
    visual: "matrix",
    matrix: { grid: [["♥", "♥♥", "♥♥♥"], ["♣", "♣♣", "♣♣♣"], ["◆", "◆◆", "?"]] },
    options: ["◆◆◆", "◆◆", "♣♣♣", "♥♥♥"], correct: 0,
    explanation: "Each row goes 1, 2, 3 symbols. Row 3 needs 3 diamonds."
  },
  // --- Difficulty 2 ---
  {
    id: "PR4", category: "Pattern Recognition", difficulty: 2,
    question: "Which figure completes the 3x3 matrix?",
    visual: "svg-matrix",
    svgMatrix: { cells: [
      { shapes: [{ type: "circle", fill: true }] }, { shapes: [{ type: "circle", fill: false }] },
      { shapes: [{ type: "circle", fill: true }, { type: "circle", fill: false }] },
      { shapes: [{ type: "square", fill: true }] }, { shapes: [{ type: "square", fill: false }] },
      { shapes: [{ type: "square", fill: true }, { type: "square", fill: false }] },
      { shapes: [{ type: "triangle", fill: true }] }, { shapes: [{ type: "triangle", fill: false }] }, null
    ]},
    options: ["Filled triangle + empty triangle", "Two filled triangles", "Empty triangle", "Filled square + empty square"],
    optionSvgs: [
      [{ type: "triangle", fill: true }, { type: "triangle", fill: false }],
      [{ type: "triangle", fill: true }, { type: "triangle", fill: true }],
      [{ type: "triangle", fill: false }],
      [{ type: "square", fill: true }, { type: "square", fill: false }]
    ], correct: 0,
    explanation: "Row pattern: filled shape, then empty shape, then both combined. Row 3 needs filled + empty triangle."
  },
  {
    id: "PR5", category: "Pattern Recognition", difficulty: 2,
    question: "Which figure completes the 3x3 matrix?",
    visual: "svg-matrix",
    svgMatrix: { cells: [
      { shapes: [{ type: "circle", fill: true }] }, { shapes: [{ type: "square", fill: true }] },
      { shapes: [{ type: "triangle", fill: true }] },
      { shapes: [{ type: "circle", fill: false }] }, { shapes: [{ type: "square", fill: false }] },
      { shapes: [{ type: "triangle", fill: false }] },
      { shapes: [{ type: "circle", fill: true }, { type: "circle", fill: false }] },
      { shapes: [{ type: "square", fill: true }, { type: "square", fill: false }] }, null
    ]},
    options: ["Filled triangle + empty triangle", "Two empty triangles", "Two filled triangles", "Filled circle + empty circle"],
    optionSvgs: [
      [{ type: "triangle", fill: true }, { type: "triangle", fill: false }],
      [{ type: "triangle", fill: false }, { type: "triangle", fill: false }],
      [{ type: "triangle", fill: true }, { type: "triangle", fill: true }],
      [{ type: "circle", fill: true }, { type: "circle", fill: false }]
    ], correct: 0,
    explanation: "Column pattern: each column uses the same shape. Row pattern: filled, empty, then both. Missing cell needs filled + empty triangle."
  },
  {
    id: "PR6", category: "Pattern Recognition", difficulty: 2,
    question: "What comes next in this sequence?",
    visual: "sequence", sequence: ["□", "□■", "□■□", "?"],
    options: ["□■□■", "■□■□", "□□□□", "■■■■"], correct: 0,
    explanation: "Alternating □ and ■, adding one each step. The 4th item has 4 symbols starting with □: □■□■."
  },
  {
    id: "PR18", category: "Pattern Recognition", difficulty: 2,
    question: "Identify the rule and find the missing element.",
    visual: "number-grid", grid: [[1, 2, 3], [4, 5, 6], [7, 8, "?"]],
    options: ["9", "10", "11", "12"], correct: 0,
    explanation: "Simple counting from 1 to 9, left to right, top to bottom."
  },
  {
    id: "PR19", category: "Pattern Recognition", difficulty: 2,
    question: "What comes next in this sequence?",
    visual: "sequence", sequence: ["★", "★☆", "★☆★", "?"],
    options: ["★☆★☆", "☆★☆★", "★★★★", "☆☆☆☆"], correct: 0,
    explanation: "Alternating filled and empty stars, growing by one each step. Next: ★☆★☆."
  },
  // --- Difficulty 3 ---
  {
    id: "PR7", category: "Pattern Recognition", difficulty: 3,
    question: "What comes next in this sequence?",
    visual: "sequence", sequence: ["◇", "◇◆", "◇◆◇", "◇◆◇◆", "?"],
    options: ["◇◆◇◆◇", "◆◇◆◇◆", "◇◇◇◇◇", "◆◆◆◆◆"], correct: 0,
    explanation: "The sequence alternates ◇ and ◆, adding one symbol each time. Next is 5 symbols: ◇◆◇◆◇."
  },
  {
    id: "PR8", category: "Pattern Recognition", difficulty: 3,
    question: "Which figure completes the pattern?",
    visual: "rotation", rotationSteps: [0, 90, 180, "?"],
    options: ["270° rotation", "360° rotation", "180° rotation", "90° rotation"], correct: 0,
    explanation: "The arrow rotates 90° clockwise each step. After 0°, 90°, 180°, the next is 270°."
  },
  {
    id: "PR9", category: "Pattern Recognition", difficulty: 3,
    question: "What comes next in this sequence?",
    visual: "sequence", sequence: ["▲", "▲▼", "▲▼▲", "▲▼▲▼", "?"],
    options: ["▲▼▲▼▲", "▼▲▼▲▼", "▲▲▲▲▲", "▼▼▼▼▼"], correct: 0,
    explanation: "Alternating up and down triangles, growing by one each step. Next: ▲▼▲▼▲."
  },
  {
    id: "PR20", category: "Pattern Recognition", difficulty: 3,
    question: "Identify the rule and find the missing element.",
    visual: "number-grid", grid: [[2, 4, 6], [3, 6, 9], [5, 10, "?"]],
    options: ["15", "20", "12", "25"], correct: 0,
    explanation: "Each row is multiples of the first number: 5×1, 5×2, 5×3 = 15."
  },
  {
    id: "PR21", category: "Pattern Recognition", difficulty: 3,
    question: "Identify the rule and find the missing element.",
    visual: "number-grid", grid: [[1, 2, 4], [3, 6, 12], [5, 10, "?"]],
    options: ["20", "15", "25", "30"], correct: 0,
    explanation: "Each row: col2 = col1 × 2, col3 = col1 × 4. So 5 × 4 = 20."
  },
  // --- Difficulty 4 ---
  {
    id: "PR10", category: "Pattern Recognition", difficulty: 4,
    question: "Identify the rule and find the missing element in the grid.",
    visual: "number-grid", grid: [[2, 4, 8], [3, 9, 27], [4, 16, "?"]],
    options: ["64", "48", "32", "56"], correct: 0,
    explanation: "Row 1: 2^1, 2^2, 2^3. Row 2: 3^1, 3^2, 3^3. Row 3: 4^1, 4^2, 4^3 = 64."
  },
  {
    id: "PR11", category: "Pattern Recognition", difficulty: 4,
    question: "Identify the rule and find the missing element.",
    visual: "number-grid", grid: [[1, 3, 5], [2, 6, 10], [3, 9, "?"]],
    options: ["15", "12", "18", "21"], correct: 0,
    explanation: "Column 2 = col1 × 3. Column 3 = col1 × 5. So 3 × 5 = 15."
  },
  {
    id: "PR12", category: "Pattern Recognition", difficulty: 4,
    question: "What comes next?",
    visual: "sequence", sequence: ["■", "■□", "■□■", "■□■□", "?"],
    options: ["■□■□■", "□■□■□", "■■■■■", "□□□□□"], correct: 0,
    explanation: "Alternating filled and empty squares, growing by one. Next is 5: ■□■□■."
  },
  {
    id: "PR13", category: "Pattern Recognition", difficulty: 4,
    question: "Find the missing value in this grid.",
    visual: "number-grid", grid: [[1, 4, 9], [16, 25, 36], [49, 64, "?"]],
    options: ["81", "72", "100", "90"], correct: 0,
    explanation: "These are consecutive perfect squares: 1², 2², 3², ..., 8², 9² = 81."
  },
  {
    id: "PR22", category: "Pattern Recognition", difficulty: 4,
    question: "Find the missing value in this grid.",
    visual: "number-grid", grid: [[1, 1, 1], [2, 4, 8], [3, 9, "?"]],
    options: ["27", "18", "12", "36"], correct: 0,
    explanation: "Row pattern: n^1, n^2, n^3. Row 3: 3^1=3, 3^2=9, 3^3=27."
  },
  {
    id: "PR23", category: "Pattern Recognition", difficulty: 4,
    question: "Find the missing value.",
    visual: "number-grid", grid: [[10, 8, 6], [9, 6, 3], [8, 4, "?"]],
    options: ["0", "2", "1", "-2"], correct: 0,
    explanation: "Row 1: decreases by 2. Row 2: decreases by 3. Row 3: decreases by 4. So 8, 4, 0."
  },
  // --- Difficulty 5 ---
  {
    id: "PR14", category: "Pattern Recognition", difficulty: 5,
    question: "Find the missing value in this grid.",
    visual: "number-grid", grid: [[1, 8, 27], [64, 125, 216], [343, 512, "?"]],
    options: ["729", "625", "1000", "810"], correct: 0,
    explanation: "These are consecutive cubes: 1³, 2³, 3³, 4³, 5³, 6³, 7³, 8³, 9³ = 729."
  },
  {
    id: "PR15", category: "Pattern Recognition", difficulty: 5,
    question: "What comes next in this sequence?",
    visual: "sequence", sequence: ["●", "●○●", "●○●○●", "?"],
    options: ["●○●○●○●", "○●○●○●○", "●●●●●●●", "○○○○○○○"], correct: 0,
    explanation: "The pattern adds ○● to the end each time: 1, 3, 5 symbols. Next is 7: ●○●○●○●."
  },
  {
    id: "PR16", category: "Pattern Recognition", difficulty: 5,
    question: "Find the missing value in this grid.",
    visual: "number-grid", grid: [[2, 6, 18], [3, 12, 48], [5, 25, "?"]],
    options: ["125", "100", "75", "150"], correct: 0,
    explanation: "Row 1: ×3 each step. Row 2: ×4 each step. Row 3: ×5 each step. 25 × 5 = 125."
  },
  {
    id: "PR24", category: "Pattern Recognition", difficulty: 5,
    question: "Find the missing value in this grid.",
    visual: "number-grid", grid: [[2, 3, 5], [7, 11, 13], [17, 19, "?"]],
    options: ["23", "21", "25", "29"], correct: 0,
    explanation: "These are consecutive prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23."
  },
  {
    id: "PR25", category: "Pattern Recognition", difficulty: 5,
    question: "Find the missing value.",
    visual: "number-grid", grid: [[1, 1, 2], [3, 5, 8], [13, 21, "?"]],
    options: ["34", "29", "42", "55"], correct: 0,
    explanation: "Fibonacci sequence across the grid: 1,1,2,3,5,8,13,21,34."
  },

  // ==========================================================================
  // NUMERICAL REASONING (30 questions)
  // ==========================================================================
  // --- Difficulty 1 ---
  {
    id: "NR1", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next in the sequence?",
    visual: "num-sequence", sequence: [2, 5, 8, 11, 14, "?"],
    options: ["17", "16", "18", "15"], correct: 0,
    explanation: "Each number increases by 3. 14 + 3 = 17."
  },
  {
    id: "NR2", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [5, 10, 15, 20, 25, "?"],
    options: ["30", "35", "28", "32"], correct: 0,
    explanation: "Each number increases by 5. 25 + 5 = 30."
  },
  {
    id: "NR3", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [100, 90, 80, 70, 60, "?"],
    options: ["50", "55", "40", "45"], correct: 0,
    explanation: "Each number decreases by 10. 60 − 10 = 50."
  },
  {
    id: "NR17", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [4, 8, 12, 16, 20, "?"],
    options: ["24", "22", "28", "26"], correct: 0,
    explanation: "Each number increases by 4. 20 + 4 = 24."
  },
  {
    id: "NR18", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [50, 45, 40, 35, 30, "?"],
    options: ["25", "20", "28", "35"], correct: 0,
    explanation: "Each number decreases by 5. 30 − 5 = 25."
  },
  // --- Difficulty 2 ---
  {
    id: "NR4", category: "Numerical Reasoning", difficulty: 2,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 1, 2, 3, 5, 8, "?"],
    options: ["13", "11", "10", "12"], correct: 0,
    explanation: "Fibonacci sequence: each number is the sum of the two preceding ones. 5 + 8 = 13."
  },
  {
    id: "NR5", category: "Numerical Reasoning", difficulty: 2,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [2, 4, 8, 16, 32, "?"],
    options: ["64", "48", "56", "128"], correct: 0,
    explanation: "Each number is doubled. 32 × 2 = 64."
  },
  {
    id: "NR6", category: "Numerical Reasoning", difficulty: 2,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [3, 6, 12, 24, 48, "?"],
    options: ["96", "72", "84", "100"], correct: 0,
    explanation: "Each number is doubled. 48 × 2 = 96."
  },
  {
    id: "NR19", category: "Numerical Reasoning", difficulty: 2,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 3, 9, 27, 81, "?"],
    options: ["243", "162", "100", "200"], correct: 0,
    explanation: "Each number is tripled. 81 × 3 = 243."
  },
  {
    id: "NR20", category: "Numerical Reasoning", difficulty: 2,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 4, 7, 10, 13, "?"],
    options: ["16", "15", "17", "14"], correct: 0,
    explanation: "Each number increases by 3. 13 + 3 = 16."
  },
  // --- Difficulty 3 ---
  {
    id: "NR7", category: "Numerical Reasoning", difficulty: 3,
    question: "What is the missing number?",
    visual: "num-sequence", sequence: [3, 6, 11, 18, 27, "?"],
    options: ["38", "36", "35", "40"], correct: 0,
    explanation: "Differences increase by 2 each time: +3, +5, +7, +9, +11. So 27 + 11 = 38."
  },
  {
    id: "NR8", category: "Numerical Reasoning", difficulty: 3,
    question: "What comes next?",
    visual: "num-sequence", sequence: [1, 4, 9, 16, 25, "?"],
    options: ["36", "30", "49", "35"], correct: 0,
    explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6² = 36."
  },
  {
    id: "NR9", category: "Numerical Reasoning", difficulty: 3,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [2, 3, 5, 7, 11, 13, "?"],
    options: ["17", "15", "16", "19"], correct: 0,
    explanation: "These are consecutive prime numbers. The next prime after 13 is 17."
  },
  {
    id: "NR10", category: "Numerical Reasoning", difficulty: 3,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 8, 27, 64, 125, "?"],
    options: ["216", "196", "256", "200"], correct: 0,
    explanation: "These are perfect cubes: 1³, 2³, 3³, 4³, 5³, 6³ = 216."
  },
  {
    id: "NR21", category: "Numerical Reasoning", difficulty: 3,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [2, 6, 12, 20, 30, "?"],
    options: ["42", "40", "36", "44"], correct: 0,
    explanation: "Differences increase by 2: +4, +6, +8, +10, +12. So 30 + 12 = 42."
  },
  {
    id: "NR22", category: "Numerical Reasoning", difficulty: 3,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 2, 4, 7, 11, "?"],
    options: ["16", "15", "14", "17"], correct: 0,
    explanation: "Differences increase by 1: +1, +2, +3, +4, +5. So 11 + 5 = 16."
  },
  // --- Difficulty 4 ---
  {
    id: "NR11", category: "Numerical Reasoning", difficulty: 4,
    question: "Find the next number in the series.",
    visual: "num-sequence", sequence: [2, 6, 14, 30, 62, "?"],
    options: ["126", "124", "128", "130"], correct: 0,
    explanation: "Each number is (previous × 2) + 2. So 62 × 2 + 2 = 126."
  },
  {
    id: "NR12", category: "Numerical Reasoning", difficulty: 4,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 2, 6, 24, 120, "?"],
    options: ["720", "600", "240", "840"], correct: 0,
    explanation: "These are factorials: 1!, 2!, 3!, 4!, 5!, 6! = 720."
  },
  {
    id: "NR13", category: "Numerical Reasoning", difficulty: 4,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [0, 1, 1, 2, 3, 5, 8, 13, "?"],
    options: ["21", "18", "20", "24"], correct: 0,
    explanation: "Fibonacci sequence starting from 0. 8 + 13 = 21."
  },
  {
    id: "NR14", category: "Numerical Reasoning", difficulty: 4,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [2, 5, 11, 23, 47, "?"],
    options: ["95", "94", "96", "93"], correct: 0,
    explanation: "Each number is (previous × 2) + 1. So 47 × 2 + 1 = 95."
  },
  {
    id: "NR23", category: "Numerical Reasoning", difficulty: 4,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 3, 6, 10, 15, 21, "?"],
    options: ["28", "27", "26", "30"], correct: 0,
    explanation: "Triangular numbers: +2, +3, +4, +5, +6, +7. So 21 + 7 = 28."
  },
  {
    id: "NR24", category: "Numerical Reasoning", difficulty: 4,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [4, 9, 25, 49, 121, "?"],
    options: ["169", "144", "196", "225"], correct: 0,
    explanation: "Squares of primes: 2²=4, 3²=9, 5²=25, 7²=49, 11²=121, 13²=169."
  },
  // --- Difficulty 5 ---
  {
    id: "NR15", category: "Numerical Reasoning", difficulty: 5,
    question: "What number replaces the question mark?",
    visual: "num-sequence", sequence: [1, 4, 27, 256, "?"],
    options: ["3125", "1024", "625", "3025"], correct: 0,
    explanation: "The pattern is n^n: 1^1=1, 2^2=4, 3^3=27, 4^4=256, 5^5=3125."
  },
  {
    id: "NR16", category: "Numerical Reasoning", difficulty: 5,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 3, 7, 15, 31, "?"],
    options: ["63", "62", "64", "60"], correct: 0,
    explanation: "Each term is (2^n) − 1: 1, 3, 7, 15, 31, 63. Or equivalently: previous × 2 + 1."
  },
  {
    id: "NR25", category: "Numerical Reasoning", difficulty: 5,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [2, 3, 5, 9, 17, "?"],
    options: ["33", "31", "35", "34"], correct: 0,
    explanation: "Each difference doubles: +1, +2, +4, +8, +16. So 17 + 16 = 33."
  },
  {
    id: "NR26", category: "Numerical Reasoning", difficulty: 5,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 1, 2, 6, 24, 120, "?"],
    options: ["720", "600", "840", "480"], correct: 0,
    explanation: "These are factorials: 0!=1, 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720."
  },

  // ==========================================================================
  // LOGICAL REASONING (30 questions)
  // ==========================================================================
  // --- Difficulty 1 ---
  {
    id: "LR1", category: "Logical Reasoning", difficulty: 1,
    question: "All roses are flowers. Some flowers fade quickly. Which conclusion is valid?",
    visual: "text",
    options: ["Some roses may fade quickly", "All roses fade quickly", "No roses fade quickly", "All flowers are roses"],
    correct: 0, explanation: "Since all roses are flowers and some flowers fade quickly, it's possible (but not certain) that some roses are among those that fade quickly."
  },
  {
    id: "LR2", category: "Logical Reasoning", difficulty: 1,
    question: "All dogs are animals. All animals need water. Therefore:",
    visual: "text",
    options: ["All dogs need water", "All animals are dogs", "Some dogs don't need water", "Water needs dogs"],
    correct: 0, explanation: "By transitive logic: if all dogs are animals, and all animals need water, then all dogs need water."
  },
  {
    id: "LR3", category: "Logical Reasoning", difficulty: 1,
    question: "All squares are rectangles. All rectangles have four sides. Therefore:",
    visual: "text",
    options: ["All squares have four sides", "All rectangles are squares", "Some squares have five sides", "No squares are rectangles"],
    correct: 0, explanation: "By transitive reasoning: squares are rectangles, and rectangles have four sides, so all squares have four sides."
  },
  {
    id: "LR17", category: "Logical Reasoning", difficulty: 1,
    question: "All cats are mammals. All mammals are warm-blooded. Therefore:",
    visual: "text",
    options: ["All cats are warm-blooded", "All warm-blooded animals are cats", "Some cats are cold-blooded", "No mammals are cats"],
    correct: 0, explanation: "By transitive logic: cats are mammals, mammals are warm-blooded, so all cats are warm-blooded."
  },
  {
    id: "LR18", category: "Logical Reasoning", difficulty: 1,
    question: "No fish can fly. A salmon is a fish. Therefore:",
    visual: "text",
    options: ["A salmon cannot fly", "A salmon can swim", "All fish are salmon", "Some fish can fly"],
    correct: 0, explanation: "If no fish can fly and a salmon is a fish, then a salmon cannot fly."
  },
  // --- Difficulty 2 ---
  {
    id: "LR4", category: "Logical Reasoning", difficulty: 2,
    question: "If no cats are dogs, and some dogs are pets, which statement MUST be true?",
    visual: "text",
    options: ["Some pets are not cats", "All pets are dogs", "No cats are pets", "All dogs are pets"],
    correct: 0, explanation: "Since some dogs are pets and no cats are dogs, those pet-dogs are definitely not cats. So some pets are not cats."
  },
  {
    id: "LR5", category: "Logical Reasoning", difficulty: 2,
    question: "If it is raining, the ground is wet. The ground is not wet. What can you conclude?",
    visual: "text",
    options: ["It is not raining", "It might be raining", "The ground is dry because of the sun", "Nothing can be concluded"],
    correct: 0, explanation: "This is modus tollens: if P → Q, and ¬Q, then ¬P. Since the ground is not wet, it cannot be raining."
  },
  {
    id: "LR6", category: "Logical Reasoning", difficulty: 2,
    question: "All teachers at this school speak English. Maria is a teacher at this school. Therefore:",
    visual: "text",
    options: ["Maria speaks English", "Maria teaches English", "All English speakers are teachers", "Maria is the only teacher"],
    correct: 0, explanation: "If all teachers speak English and Maria is a teacher, then Maria speaks English."
  },
  {
    id: "LR19", category: "Logical Reasoning", difficulty: 2,
    question: "If all birds have wings and a penguin is a bird, which statement is true?",
    visual: "text",
    options: ["A penguin has wings", "A penguin can fly", "All winged animals are birds", "Penguins are not birds"],
    correct: 0, explanation: "If all birds have wings and a penguin is a bird, then a penguin has wings (even though it can't fly)."
  },
  {
    id: "LR20", category: "Logical Reasoning", difficulty: 2,
    question: "If every student passed the exam, and John is a student, what can you conclude?",
    visual: "text",
    options: ["John passed the exam", "John studied hard", "The exam was easy", "Everyone is a student"],
    correct: 0, explanation: "If every student passed and John is a student, then John passed the exam."
  },
  // --- Difficulty 3 ---
  {
    id: "LR7", category: "Logical Reasoning", difficulty: 3,
    question: "A is taller than B. C is shorter than B. D is taller than A. Who is the shortest?",
    visual: "text",
    options: ["C", "B", "A", "D"],
    correct: 0, explanation: "Order from tallest to shortest: D > A > B > C. C is the shortest."
  },
  {
    id: "LR8", category: "Logical Reasoning", difficulty: 3,
    question: "If you rearrange the letters 'CIFAIPC', you get the name of a(n):",
    visual: "text",
    options: ["Ocean", "Country", "City", "Animal"],
    correct: 0, explanation: "CIFAIPC rearranges to PACIFIC, which is an ocean."
  },
  {
    id: "LR9", category: "Logical Reasoning", difficulty: 3,
    question: "P is heavier than Q. R is lighter than S. S is lighter than Q. Who is the lightest?",
    visual: "text",
    options: ["R", "S", "Q", "P"],
    correct: 0, explanation: "P > Q > S > R. R is the lightest."
  },
  {
    id: "LR10", category: "Logical Reasoning", difficulty: 3,
    question: "If you rearrange the letters 'NALDENG', you get the name of a(n):",
    visual: "text",
    options: ["Country", "Ocean", "City", "River"],
    correct: 0, explanation: "NALDENG rearranges to ENGLAND, which is a country."
  },
  {
    id: "LR21", category: "Logical Reasoning", difficulty: 3,
    question: "M is faster than N. O is slower than N. P is faster than M. Who is the slowest?",
    visual: "text",
    options: ["O", "N", "M", "P"],
    correct: 0, explanation: "P > M > N > O. O is the slowest."
  },
  {
    id: "LR22", category: "Logical Reasoning", difficulty: 3,
    question: "If you rearrange the letters 'CHAIN', you get the name of a(n):",
    visual: "text",
    options: ["Country", "Animal", "Ocean", "City"],
    correct: 0, explanation: "CHAIN rearranges to CHINA, which is a country."
  },
  // --- Difficulty 4 ---
  {
    id: "LR11", category: "Logical Reasoning", difficulty: 4,
    question: "In a row of people, Tom is 5th from the left and 6th from the right. How many people are in the row?",
    visual: "text",
    options: ["10", "11", "9", "12"],
    correct: 0, explanation: "Position from left + position from right − 1 = total. 5 + 6 − 1 = 10."
  },
  {
    id: "LR12", category: "Logical Reasoning", difficulty: 4,
    question: "In a class of 30, 18 play football and 15 play basketball. If everyone plays at least one sport, how many play both?",
    visual: "text",
    options: ["3", "5", "12", "0"],
    correct: 0, explanation: "By inclusion-exclusion: 18 + 15 − 30 = 3. So 3 students play both sports."
  },
  {
    id: "LR13", category: "Logical Reasoning", difficulty: 4,
    question: "If you rearrange the letters 'MNYGARE', you get the name of a(n):",
    visual: "text",
    options: ["Country", "Ocean", "Animal", "City"],
    correct: 0, explanation: "MNYGARE rearranges to GERMANY, which is a country."
  },
  {
    id: "LR14", category: "Logical Reasoning", difficulty: 4,
    question: "X is older than Y. Z is younger than W. W is younger than Y. Who is the oldest?",
    visual: "text",
    options: ["X", "Y", "W", "Z"],
    correct: 0, explanation: "X > Y > W > Z. X is the oldest."
  },
  {
    id: "LR23", category: "Logical Reasoning", difficulty: 4,
    question: "In a row of people, Sara is 8th from the left and 5th from the right. How many people are in the row?",
    visual: "text",
    options: ["12", "13", "11", "14"],
    correct: 0, explanation: "Position from left + position from right − 1 = total. 8 + 5 − 1 = 12."
  },
  {
    id: "LR24", category: "Logical Reasoning", difficulty: 4,
    question: "In a group of 40 people, 25 speak French and 20 speak Spanish. If everyone speaks at least one language, how many speak both?",
    visual: "text",
    options: ["5", "10", "15", "0"],
    correct: 0, explanation: "By inclusion-exclusion: 25 + 20 − 40 = 5. So 5 people speak both."
  },
  // --- Difficulty 5 ---
  {
    id: "LR15", category: "Logical Reasoning", difficulty: 5,
    question: "If the day after tomorrow is two days before Thursday, what day is it today?",
    visual: "text",
    options: ["Sunday", "Monday", "Tuesday", "Saturday"],
    correct: 0, explanation: "Two days before Thursday is Tuesday. If the day after tomorrow is Tuesday, then today is Sunday."
  },
  {
    id: "LR16", category: "Logical Reasoning", difficulty: 5,
    question: "A says 'B is lying.' B says 'C is lying.' C says 'A and B are both lying.' If exactly one person is telling the truth, who is it?",
    visual: "text",
    options: ["B", "A", "C", "None of them"],
    correct: 0, explanation: "If B tells the truth, then C lies (consistent). A says B lies, so A lies (consistent). C says both A and B lie, but B is truthful, so C lies (consistent). Only B tells the truth."
  },
  {
    id: "LR25", category: "Logical Reasoning", difficulty: 5,
    question: "If two days ago was three days after Saturday, what day is it today?",
    visual: "text",
    options: ["Thursday", "Wednesday", "Tuesday", "Friday"],
    correct: 0, explanation: "Three days after Saturday is Tuesday. If two days ago was Tuesday, then today is Thursday."
  },

  // ==========================================================================
  // SPATIAL REASONING (30 questions)
  // ==========================================================================
  // --- Difficulty 1 ---
  {
    id: "SR1", category: "Spatial Reasoning", difficulty: 1,
    question: "How many sides does the shape formed by combining two identical right triangles along their longest side have?",
    visual: "text",
    options: ["4", "3", "5", "6"], correct: 0,
    explanation: "Two right triangles joined along their hypotenuse form a rectangle, which has 4 sides."
  },
  {
    id: "SR2", category: "Spatial Reasoning", difficulty: 1,
    question: "If you cut a square diagonally from corner to corner, what shapes do you get?",
    visual: "text",
    options: ["Two identical triangles", "Two rectangles", "A triangle and a trapezoid", "Two different triangles"],
    correct: 0, explanation: "Cutting a square along its diagonal produces two identical right-angled isosceles triangles."
  },
  {
    id: "SR3", category: "Spatial Reasoning", difficulty: 1,
    question: "How many edges does a cube have?",
    visual: "text",
    options: ["12", "8", "6", "10"], correct: 0,
    explanation: "A cube has 12 edges: 4 on top, 4 on bottom, and 4 connecting them vertically."
  },
  {
    id: "SR17", category: "Spatial Reasoning", difficulty: 1,
    question: "How many faces does a cube have?",
    visual: "text",
    options: ["6", "8", "4", "12"], correct: 0,
    explanation: "A cube has 6 faces: top, bottom, front, back, left, and right."
  },
  {
    id: "SR18", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape do you get when you look at a sphere from any direction?",
    visual: "text",
    options: ["Circle", "Square", "Oval", "Semicircle"], correct: 0,
    explanation: "A sphere looks like a circle from every viewing angle."
  },
  // --- Difficulty 2 ---
  {
    id: "SR4", category: "Spatial Reasoning", difficulty: 2,
    question: "If you fold this cross-shaped net into a cube, which face is opposite to face A?",
    visual: "cube-net", netLayout: "cross",
    options: ["Face F", "Face B", "Face C", "Face E"], correct: 0,
    explanation: "When the cross is folded, A becomes the front face. F folds to become the back face, directly opposite A."
  },
  {
    id: "SR5", category: "Spatial Reasoning", difficulty: 2,
    question: "Which piece completes the square?",
    visual: "jigsaw",
    options: ["Piece A", "Piece B", "Piece C", "Piece D"],
    optionPieces: [
      "M0,0 L90,0 L90,90 L0,90 Q40,90 40,40 Z",
      "M0,0 L90,0 L90,90 L0,90 Z",
      "M0,0 L90,0 L90,45 L45,45 L45,90 L0,90 Z",
      "M45,0 L90,0 L90,90 L0,90 L0,45 L45,45 Z"
    ], correct: 0,
    explanation: "Piece A has the matching curved edge that fits the concave cutout in the square."
  },
  {
    id: "SR6", category: "Spatial Reasoning", difficulty: 2,
    question: "How many vertices (corners) does a cube have?",
    visual: "text",
    options: ["8", "6", "12", "4"], correct: 0,
    explanation: "A cube has 8 vertices: 4 on the top face and 4 on the bottom face."
  },
  {
    id: "SR19", category: "Spatial Reasoning", difficulty: 2,
    question: "If you stack two cubes on top of each other, how many faces are visible from the outside?",
    visual: "text",
    options: ["10", "12", "8", "9"], correct: 0,
    explanation: "Two cubes have 12 faces total. 2 faces are hidden where they touch. 12 − 2 = 10 visible faces."
  },
  {
    id: "SR20", category: "Spatial Reasoning", difficulty: 2,
    question: "How many edges does a triangular pyramid (tetrahedron) have?",
    visual: "text",
    options: ["6", "4", "8", "3"], correct: 0,
    explanation: "A tetrahedron has 6 edges: 3 on the base triangle and 3 connecting the base to the apex."
  },
  // --- Difficulty 3 ---
  {
    id: "SR7", category: "Spatial Reasoning", difficulty: 3,
    question: "If two cubes are glued together face-to-face, how many exposed faces does the combined shape have?",
    visual: "text",
    options: ["10", "12", "8", "11"], correct: 0,
    explanation: "Each cube has 6 faces. Gluing them removes 1 face from each (2 total). 6 + 6 − 2 = 10 exposed faces."
  },
  {
    id: "SR8", category: "Spatial Reasoning", difficulty: 3,
    question: "A cube is painted red on all faces, then cut into 27 equal smaller cubes. How many small cubes have exactly one red face?",
    visual: "text",
    options: ["6", "8", "12", "1"], correct: 0,
    explanation: "In a 3×3×3 cube, the center of each face gives a small cube with exactly 1 painted face. There are 6 faces, so 6 such cubes."
  },
  {
    id: "SR9", category: "Spatial Reasoning", difficulty: 3,
    question: "How many faces does a triangular prism have?",
    visual: "text",
    options: ["5", "4", "6", "3"], correct: 0,
    explanation: "A triangular prism has 2 triangular faces (top and bottom) and 3 rectangular faces (sides) = 5 faces total."
  },
  {
    id: "SR10", category: "Spatial Reasoning", difficulty: 3,
    question: "How many faces does a regular tetrahedron have?",
    visual: "text",
    options: ["4", "3", "5", "6"], correct: 0,
    explanation: "A tetrahedron is a solid with 4 triangular faces."
  },
  {
    id: "SR21", category: "Spatial Reasoning", difficulty: 3,
    question: "A cube is painted blue on all faces, then cut into 27 equal smaller cubes. How many small cubes have exactly 3 blue faces?",
    visual: "text",
    options: ["8", "6", "12", "4"], correct: 0,
    explanation: "Only the corner cubes have 3 painted faces. A cube has 8 corners, so 8 cubes."
  },
  {
    id: "SR22", category: "Spatial Reasoning", difficulty: 3,
    question: "If three cubes are glued in a straight line, face-to-face, how many exposed faces does the combined shape have?",
    visual: "text",
    options: ["14", "18", "12", "16"], correct: 0,
    explanation: "3 cubes have 18 faces. 2 joints × 2 hidden faces = 4 hidden. 18 − 4 = 14."
  },
  // --- Difficulty 4 ---
  {
    id: "SR11", category: "Spatial Reasoning", difficulty: 4,
    question: "Which shape results from rotating figure X by 90° clockwise and then flipping it horizontally?",
    visual: "transform",
    options: ["Shape A", "Shape B", "Shape C", "Shape D"],
    optionShapes: [
      "80,80 80,50 50,50 50,20 20,20 20,80",
      "20,80 20,50 50,50 50,20 80,20 80,80",
      "80,20 50,20 50,50 20,50 20,80 80,80",
      "80,80 50,80 50,50 20,50 20,20 80,20"
    ], correct: 0,
    explanation: "Rotating the L-shape 90° clockwise and then flipping horizontally produces Shape A."
  },
  {
    id: "SR12", category: "Spatial Reasoning", difficulty: 4,
    question: "A cube is painted red on all faces, then cut into 27 equal smaller cubes. How many small cubes have NO red face at all?",
    visual: "text",
    options: ["1", "0", "6", "8"], correct: 0,
    explanation: "Only the very center cube of the 3×3×3 arrangement has no painted face at all. That's 1 cube."
  },
  {
    id: "SR13", category: "Spatial Reasoning", difficulty: 4,
    question: "A cube is painted red on all faces, then cut into 27 equal smaller cubes. How many small cubes have exactly 2 red faces?",
    visual: "text",
    options: ["12", "8", "6", "10"], correct: 0,
    explanation: "Edge cubes (not corners) have 2 painted faces. A cube has 12 edges, each with 1 such cube in a 3×3×3 cut = 12."
  },
  {
    id: "SR14", category: "Spatial Reasoning", difficulty: 4,
    question: "A cube is painted red on all faces, then cut into 64 equal smaller cubes (4×4×4). How many small cubes have exactly 1 red face?",
    visual: "text",
    options: ["24", "16", "12", "32"], correct: 0,
    explanation: "In a 4×4×4 cube, each face has a 2×2 center region = 4 cubes with 1 painted face. 6 faces × 4 = 24."
  },
  {
    id: "SR23", category: "Spatial Reasoning", difficulty: 4,
    question: "A cube is painted red on all faces, then cut into 64 equal smaller cubes (4×4×4). How many small cubes have NO red face?",
    visual: "text",
    options: ["8", "0", "4", "12"], correct: 0,
    explanation: "The interior of a 4×4×4 cube is a 2×2×2 block = 8 cubes with no painted face."
  },
  {
    id: "SR24", category: "Spatial Reasoning", difficulty: 4,
    question: "A cube is painted red on all faces, then cut into 64 equal smaller cubes (4×4×4). How many small cubes have exactly 2 red faces?",
    visual: "text",
    options: ["24", "12", "16", "32"], correct: 0,
    explanation: "Edge cubes (not corners) have 2 faces. Each edge has 2 middle cubes. 12 edges × 2 = 24."
  },
  // --- Difficulty 5 ---
  {
    id: "SR15", category: "Spatial Reasoning", difficulty: 5,
    question: "If you slice a cube with a single flat cut, which of these shapes can NOT be the cross-section?",
    visual: "text",
    options: ["Circle", "Triangle", "Rectangle", "Pentagon"], correct: 0,
    explanation: "A flat plane through a cube can produce a triangle, rectangle, square, pentagon, or hexagon — but never a circle, since all cube faces are flat."
  },
  {
    id: "SR16", category: "Spatial Reasoning", difficulty: 5,
    question: "A cube is painted red on all faces, then cut into 64 equal smaller cubes (4×4×4). How many small cubes have exactly 3 red faces?",
    visual: "text",
    options: ["8", "12", "6", "4"], correct: 0,
    explanation: "Only corner cubes have 3 painted faces. A cube has exactly 8 corners, so 8 cubes have 3 red faces."
  },
  {
    id: "SR25", category: "Spatial Reasoning", difficulty: 5,
    question: "A cube is painted on all faces, then cut into 125 equal smaller cubes (5×5×5). How many small cubes have NO painted face?",
    visual: "text",
    options: ["27", "8", "64", "12"], correct: 0,
    explanation: "The interior of a 5×5×5 cube is a 3×3×3 block = 27 cubes with no painted face."
  },
  {
    id: "SR26", category: "Spatial Reasoning", difficulty: 5,
    question: "A cube is painted on all faces, then cut into 125 equal smaller cubes (5×5×5). How many small cubes have exactly 1 painted face?",
    visual: "text",
    options: ["54", "48", "27", "36"], correct: 0,
    explanation: "Each face has a 3×3 center region = 9 cubes with 1 painted face. 6 faces × 9 = 54."
  },

  // ==========================================================================
  // MATHEMATICAL PUZZLES (30 questions)
  // ==========================================================================
  // --- Difficulty 1 ---
  {
    id: "MP1", category: "Mathematical Puzzles", difficulty: 1,
    question: "If a shirt costs $20 and is on sale for 25% off, what do you pay?",
    visual: "text",
    options: ["$15", "$16", "$5", "$18"], correct: 0,
    explanation: "25% of $20 is $5. $20 − $5 = $15."
  },
  {
    id: "MP2", category: "Mathematical Puzzles", difficulty: 1,
    question: "You are in a race and overtake the person in 2nd place. What place are you in now?",
    visual: "text",
    options: ["2nd place", "1st place", "3rd place", "It depends"], correct: 0,
    explanation: "If you overtake the person in 2nd place, you take their position — so you are now in 2nd place, not 1st."
  },
  {
    id: "MP3", category: "Mathematical Puzzles", difficulty: 1,
    question: "If 5 + 3 = 28, 9 + 1 = 810, and 7 + 3 = 410, then 6 + 2 = ?",
    visual: "text",
    options: ["48", "42", "38", "26"], correct: 0,
    explanation: "The pattern is: (a−b) concatenated with (a+b). 6−2=4 and 6+2=8, giving 48."
  },
  {
    id: "MP17", category: "Mathematical Puzzles", difficulty: 1,
    question: "A farmer has 17 sheep. All but 9 die. How many sheep are left?",
    visual: "text",
    options: ["9", "8", "17", "0"], correct: 0,
    explanation: "'All but 9 die' means 9 survive. So 9 sheep are left."
  },
  {
    id: "MP18", category: "Mathematical Puzzles", difficulty: 1,
    question: "How many months have 28 days?",
    visual: "text",
    options: ["All 12", "1", "2", "None"], correct: 0,
    explanation: "All 12 months have at least 28 days."
  },
  // --- Difficulty 2 ---
  {
    id: "MP4", category: "Mathematical Puzzles", difficulty: 2,
    question: "Find the missing number in the magic square where every row, column, and diagonal sums to 15.",
    visual: "number-grid", grid: [[8, 1, 6], [3, 5, 7], [4, "?", 2]],
    options: ["9", "8", "7", "6"], correct: 0,
    explanation: "Each row, column, and diagonal sums to 15. Bottom row: 4 + ? + 2 = 15, so ? = 9."
  },
  {
    id: "MP5", category: "Mathematical Puzzles", difficulty: 2,
    question: "A bat and a ball together cost $1.10. The bat costs $1.00 more than the ball. How much does the ball cost?",
    visual: "text",
    options: ["$0.05", "$0.10", "$0.15", "$0.01"], correct: 0,
    explanation: "Let ball = x. Bat = x + 1. So x + (x+1) = 1.10 → 2x = 0.10 → x = $0.05."
  },
  {
    id: "MP6", category: "Mathematical Puzzles", difficulty: 2,
    question: "If you have 3 apples and take away 2, how many do you have?",
    visual: "text",
    options: ["2", "1", "3", "0"], correct: 0,
    explanation: "You took away 2 apples, so you now have those 2 apples."
  },
  {
    id: "MP19", category: "Mathematical Puzzles", difficulty: 2,
    question: "A doctor gives you 3 pills and tells you to take one every 30 minutes. How long do the pills last?",
    visual: "text",
    options: ["60 minutes", "90 minutes", "30 minutes", "120 minutes"], correct: 0,
    explanation: "Take the 1st pill at 0 min, 2nd at 30 min, 3rd at 60 min. Total: 60 minutes."
  },
  {
    id: "MP20", category: "Mathematical Puzzles", difficulty: 2,
    question: "If there are 6 apples and you take away 4, how many do you have?",
    visual: "text",
    options: ["4", "2", "6", "0"], correct: 0,
    explanation: "You took 4 apples, so you have 4."
  },
  // --- Difficulty 3 ---
  {
    id: "MP7", category: "Mathematical Puzzles", difficulty: 3,
    question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    visual: "text",
    options: ["7.5°", "0°", "15°", "22.5°"], correct: 0,
    explanation: "At 3:15, the minute hand is at 90°. The hour hand moves 0.5° per minute, so at 3:15 it's at 90° + 7.5° = 97.5°. The angle between them is 7.5°."
  },
  {
    id: "MP8", category: "Mathematical Puzzles", difficulty: 3,
    question: "Three machines take 3 minutes to make 3 widgets. How long would it take 100 machines to make 100 widgets?",
    visual: "text",
    options: ["3 minutes", "100 minutes", "33 minutes", "1 minute"], correct: 0,
    explanation: "Each machine makes 1 widget in 3 minutes. So 100 machines, each making 1 widget, still take 3 minutes."
  },
  {
    id: "MP9", category: "Mathematical Puzzles", difficulty: 3,
    question: "Find the missing number in the grid where each row follows the same rule.",
    visual: "number-grid", grid: [[2, 3, 12], [4, 5, 40], [3, 7, "?"]],
    options: ["42", "21", "30", "63"], correct: 0,
    explanation: "The rule is: col1 × col2 × 2 = col3. So 3 × 7 × 2 = 42."
  },
  {
    id: "MP21", category: "Mathematical Puzzles", difficulty: 3,
    question: "If 5 cats catch 5 mice in 5 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
    visual: "text",
    options: ["5", "100", "20", "50"], correct: 0,
    explanation: "Each cat catches 1 mouse per 5 minutes. In 100 minutes, each cat catches 20 mice. To catch 100 mice: 100/20 = 5 cats."
  },
  {
    id: "MP22", category: "Mathematical Puzzles", difficulty: 3,
    question: "Find the missing number in the grid where each row follows the same rule.",
    visual: "number-grid", grid: [[3, 4, 25], [5, 12, 169], [8, 6, "?"]],
    options: ["100", "48", "64", "14"], correct: 0,
    explanation: "The rule is: col1² + col2² = col3. So 8² + 6² = 64 + 36 = 100."
  },
  // --- Difficulty 4 ---
  {
    id: "MP11", category: "Mathematical Puzzles", difficulty: 4,
    question: "Each letter represents a unique digit (0-9). If AB + BA = CBC, what is C?",
    visual: "text",
    options: ["1", "2", "3", "0"], correct: 0,
    explanation: "AB + BA = 11(A+B) = CBC. For this to work, C must be 1. Example: A=9, B=2, so 92 + 29 = 121 (CBC where C=1, B=2)."
  },
  {
    id: "MP12", category: "Mathematical Puzzles", difficulty: 4,
    question: "You have 12 coins. One is fake and lighter. Using a balance scale, what is the minimum number of weighings to guarantee finding it?",
    visual: "text",
    options: ["3", "4", "2", "6"], correct: 0,
    explanation: "Divide into 3 groups of 4. Weigh two groups to find the lighter group. Repeat with smaller groups. 3 weighings always suffice for 12 coins."
  },
  {
    id: "MP13", category: "Mathematical Puzzles", difficulty: 4,
    question: "A lily pad doubles in size each day. If it takes 48 days to cover the entire lake, on what day was it half-covered?",
    visual: "text",
    options: ["Day 47", "Day 24", "Day 36", "Day 46"], correct: 0,
    explanation: "Since it doubles daily, on day 47 it was half the size it is on day 48 — so it was half-covered on day 47."
  },
  {
    id: "MP14", category: "Mathematical Puzzles", difficulty: 4,
    question: "Find the missing number in the grid where each row follows the same rule.",
    visual: "number-grid", grid: [[5, 3, 34], [7, 1, 50], [4, 6, "?"]],
    options: ["52", "48", "24", "60"], correct: 0,
    explanation: "The rule is: col1² + col2² = col3. So 4² + 6² = 16 + 36 = 52."
  },
  {
    id: "MP23", category: "Mathematical Puzzles", difficulty: 4,
    question: "You have 8 coins. One is fake and heavier. Using a balance scale, what is the minimum number of weighings to guarantee finding it?",
    visual: "text",
    options: ["2", "3", "1", "4"], correct: 0,
    explanation: "Split into groups of 3, 3, and 2. Weigh 3 vs 3. If balanced, weigh the remaining 2. If not, the heavier side has it — weigh 1 vs 1 from that group. 2 weighings suffice."
  },
  {
    id: "MP24", category: "Mathematical Puzzles", difficulty: 4,
    question: "A snail climbs 3 meters up a wall during the day but slides back 2 meters at night. How many days to reach the top of a 10-meter wall?",
    visual: "text",
    options: ["8 days", "10 days", "7 days", "9 days"], correct: 0,
    explanation: "After 7 days, the snail is at 7 meters (net +1/day). On day 8, it climbs 3 more to reach 10 meters before nightfall. So 8 days."
  },
  // --- Difficulty 5 ---
  {
    id: "MP15", category: "Mathematical Puzzles", difficulty: 5,
    question: "What is the next number? 1, 11, 21, 1211, 111221, ?",
    visual: "num-sequence", sequence: ["1", "11", "21", "1211", "111221", "?"],
    options: ["312211", "122211", "212211", "112221"], correct: 0,
    explanation: "This is the 'look-and-say' sequence. Each term describes the previous: 111221 has three 1s, two 2s, one 1 → 312211."
  },
  {
    id: "MP16", category: "Mathematical Puzzles", difficulty: 5,
    question: "Two fathers and two sons go fishing. They each catch one fish. They bring home exactly 3 fish. How is this possible?",
    visual: "text",
    options: ["They are grandfather, father, and son", "One fish was thrown back", "Someone caught two fish", "It's not possible"],
    correct: 0, explanation: "There are only 3 people: a grandfather, his son (who is also a father), and his grandson. Two fathers (grandfather + father) and two sons (father + grandson) = 3 people."
  },
  {
    id: "MP25", category: "Mathematical Puzzles", difficulty: 5,
    question: "You have two ropes, each takes exactly 1 hour to burn, but they burn unevenly. How do you measure exactly 45 minutes?",
    visual: "text",
    options: [
      "Light rope 1 at both ends and rope 2 at one end simultaneously",
      "Light both ropes at one end simultaneously",
      "Cut one rope in half and burn it",
      "It's not possible with uneven burning"
    ], correct: 0,
    explanation: "Light rope 1 at both ends (burns in 30 min) and rope 2 at one end. When rope 1 finishes (30 min), light the other end of rope 2. It will burn for another 15 min. Total: 45 min."
  },
  {
    id: "MP26", category: "Mathematical Puzzles", difficulty: 5,
    question: "Three people check into a hotel room that costs $30. They each pay $10. The manager realizes the room costs $25 and gives $5 to the bellboy to return. The bellboy keeps $2 and returns $1 to each person. Each person paid $9 (total $27) plus the bellboy's $2 = $29. Where is the missing $1?",
    visual: "text",
    options: [
      "There is no missing dollar — the math is a trick",
      "The bellboy has it",
      "The manager has it",
      "It was lost"
    ], correct: 0,
    explanation: "The $27 paid already includes the bellboy's $2. The correct equation: $25 (room) + $2 (bellboy) = $27. Adding $2 to $27 is wrong because the $2 is part of the $27, not separate."
  }
];

const CATEGORY_INFO = {
  "Pattern Recognition": { icon: "🧩", color: "#6C63FF", description: "Ability to identify visual patterns and relationships" },
  "Numerical Reasoning": { icon: "🔢", color: "#FF6584", description: "Mathematical pattern detection and number logic" },
  "Logical Reasoning": { icon: "🧠", color: "#4D96FF", description: "Deductive reasoning and logical inference" },
  "Spatial Reasoning": { icon: "📐", color: "#6BCB77", description: "Mental manipulation of shapes and spatial relationships" },
  "Mathematical Puzzles": { icon: "🧮", color: "#FFA06B", description: "Creative problem-solving with numbers and operations" }
};

const IQ_RANGES = [
  { min: 0, max: 69, label: "Extremely Low", percentile: "2nd" },
  { min: 70, max: 84, label: "Below Average", percentile: "14th" },
  { min: 85, max: 99, label: "Low Average", percentile: "37th" },
  { min: 100, max: 114, label: "Average", percentile: "50th" },
  { min: 115, max: 129, label: "Above Average", percentile: "84th" },
  { min: 130, max: 144, label: "Gifted", percentile: "97th" },
  { min: 145, max: 200, label: "Genius", percentile: "99.9th" }
];
