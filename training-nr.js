const TRAINING_NR = {
  tips: [
    {
      title: "Calculate the Differences",
      content: "Find the differences between consecutive terms. If these differences are constant, the pattern is simple addition or subtraction. If not, compute the second differences (differences of differences). Constant second differences indicate a quadratic pattern."
    },
    {
      title: "Check for Multiplication or Division",
      content: "Divide each term by the previous one to see if there is a constant ratio. A constant ratio means the sequence is geometric (e.g., ×2, ×3). Also watch for division sequences where each term is divided by a constant."
    },
    {
      title: "Recognize Famous Sequences",
      content: "Memorize well-known sequences: perfect squares (1, 4, 9, 16…), cubes (1, 8, 27, 64…), Fibonacci (1, 1, 2, 3, 5…), primes (2, 3, 5, 7, 11…), triangular numbers (1, 3, 6, 10…), and factorials (1, 2, 6, 24…). Many test questions are variations of these."
    },
    {
      title: "Look for Combined Patterns",
      content: "Some sequences use alternating operations (e.g., ×2 then +3), position-dependent rules (e.g., add the position number), or interleaved subsequences. If simple differences and ratios don't work, consider whether two separate patterns are woven together."
    }
  ],
  levels: [
    {
      level: 1,
      name: "Beginner",
      description: "Constant addition and subtraction sequences",
      exercises: [
        {
          id: "TNR1_01",
          question: "What comes next in the sequence: 7, 8, 9, 10, 11, ?",
          hint: "Look at the difference between each pair of consecutive terms.",
          options: ["12", "13", "10", "14"],
          correct: 0,
          explanation: "Each term increases by 1. The next term is 11 + 1 = 12."
        },
        {
          id: "TNR1_02",
          question: "What comes next in the sequence: 3, 5, 7, 9, 11, ?",
          hint: "Subtract each term from the next one.",
          options: ["13", "12", "14", "15"],
          correct: 0,
          explanation: "Each term increases by 2. The next term is 11 + 2 = 13."
        },
        {
          id: "TNR1_03",
          question: "What comes next in the sequence: 10, 13, 16, 19, 22, ?",
          hint: "Find the constant difference between consecutive terms.",
          options: ["25", "24", "26", "23"],
          correct: 0,
          explanation: "Each term increases by 3. The next term is 22 + 3 = 25."
        },
        {
          id: "TNR1_04",
          question: "What comes next in the sequence: 1, 5, 9, 13, 17, ?",
          hint: "How much does each term grow compared to the previous one?",
          options: ["21", "20", "22", "19"],
          correct: 0,
          explanation: "Each term increases by 4. The next term is 17 + 4 = 21."
        },
        {
          id: "TNR1_05",
          question: "What comes next in the sequence: 2, 7, 12, 17, 22, ?",
          hint: "Calculate the step between consecutive terms.",
          options: ["27", "25", "28", "26"],
          correct: 0,
          explanation: "Each term increases by 5. The next term is 22 + 5 = 27."
        },
        {
          id: "TNR1_06",
          question: "What comes next in the sequence: 4, 10, 16, 22, 28, ?",
          hint: "What is being added each time?",
          options: ["34", "32", "36", "30"],
          correct: 0,
          explanation: "Each term increases by 6. The next term is 28 + 6 = 34."
        },
        {
          id: "TNR1_07",
          question: "What comes next in the sequence: 3, 10, 17, 24, 31, ?",
          hint: "Find the constant that is added to each term.",
          options: ["38", "35", "39", "37"],
          correct: 0,
          explanation: "Each term increases by 7. The next term is 31 + 7 = 38."
        },
        {
          id: "TNR1_08",
          question: "What comes next in the sequence: 5, 13, 21, 29, 37, ?",
          hint: "Subtract the first term from the second to find the step size.",
          options: ["45", "44", "46", "43"],
          correct: 0,
          explanation: "Each term increases by 8. The next term is 37 + 8 = 45."
        },
        {
          id: "TNR1_09",
          question: "What comes next in the sequence: 2, 11, 20, 29, 38, ?",
          hint: "What number is added each step?",
          options: ["47", "45", "48", "46"],
          correct: 0,
          explanation: "Each term increases by 9. The next term is 38 + 9 = 47."
        },
        {
          id: "TNR1_10",
          question: "What comes next in the sequence: 6, 16, 26, 36, 46, ?",
          hint: "Look at the gap between any two consecutive terms.",
          options: ["56", "54", "58", "52"],
          correct: 0,
          explanation: "Each term increases by 10. The next term is 46 + 10 = 56."
        },
        {
          id: "TNR1_11",
          question: "What comes next in the sequence: 20, 19, 18, 17, 16, ?",
          hint: "The sequence is going down. By how much each time?",
          options: ["15", "14", "17", "13"],
          correct: 0,
          explanation: "Each term decreases by 1. The next term is 16 − 1 = 15."
        },
        {
          id: "TNR1_12",
          question: "What comes next in the sequence: 30, 28, 26, 24, 22, ?",
          hint: "Subtract each term from the one before it.",
          options: ["20", "21", "18", "19"],
          correct: 0,
          explanation: "Each term decreases by 2. The next term is 22 − 2 = 20."
        },
        {
          id: "TNR1_13",
          question: "What comes next in the sequence: 40, 37, 34, 31, 28, ?",
          hint: "The sequence is decreasing. Find the constant step.",
          options: ["25", "26", "24", "27"],
          correct: 0,
          explanation: "Each term decreases by 3. The next term is 28 − 3 = 25."
        },
        {
          id: "TNR1_14",
          question: "What comes next in the sequence: 50, 46, 42, 38, 34, ?",
          hint: "How much is subtracted each time?",
          options: ["30", "32", "28", "31"],
          correct: 0,
          explanation: "Each term decreases by 4. The next term is 34 − 4 = 30."
        },
        {
          id: "TNR1_15",
          question: "What comes next in the sequence: 60, 55, 50, 45, 40, ?",
          hint: "Find the amount subtracted between consecutive terms.",
          options: ["35", "30", "38", "33"],
          correct: 0,
          explanation: "Each term decreases by 5. The next term is 40 − 5 = 35."
        },
        {
          id: "TNR1_16",
          question: "What comes next in the sequence: 5, 16, 27, 38, 49, ?",
          hint: "Compute the difference between the first two terms and check if it stays the same.",
          options: ["60", "58", "61", "55"],
          correct: 0,
          explanation: "Each term increases by 11. The next term is 49 + 11 = 60."
        },
        {
          id: "TNR1_17",
          question: "What comes next in the sequence: 3, 15, 27, 39, 51, ?",
          hint: "What is the constant added each step?",
          options: ["63", "60", "64", "62"],
          correct: 0,
          explanation: "Each term increases by 12. The next term is 51 + 12 = 63."
        },
        {
          id: "TNR1_18",
          question: "What comes next in the sequence: 10, 25, 40, 55, 70, ?",
          hint: "Find the fixed amount added between terms.",
          options: ["85", "80", "90", "75"],
          correct: 0,
          explanation: "Each term increases by 15. The next term is 70 + 15 = 85."
        },
        {
          id: "TNR1_19",
          question: "What comes next in the sequence: 5, 25, 45, 65, 85, ?",
          hint: "Calculate the step size from any term to the next.",
          options: ["105", "100", "110", "95"],
          correct: 0,
          explanation: "Each term increases by 20. The next term is 85 + 20 = 105."
        },
        {
          id: "TNR1_20",
          question: "What comes next in the sequence: 42, 36, 30, 24, 18, ?",
          hint: "The sequence is decreasing. What is being subtracted?",
          options: ["12", "14", "10", "16"],
          correct: 0,
          explanation: "Each term decreases by 6. The next term is 18 − 6 = 12."
        }
      ]
    },
    {
      level: 2,
      name: "Elementary",
      description: "Constant multiplication, division, and simple combined patterns",
      exercises: [
        {
          id: "TNR2_01",
          question: "What comes next in the sequence: 5, 10, 20, 40, 80, ?",
          hint: "Try dividing each term by the previous one.",
          options: ["160", "120", "140", "100"],
          correct: 0,
          explanation: "Each term is multiplied by 2. The next term is 80 × 2 = 160."
        },
        {
          id: "TNR2_02",
          question: "What comes next in the sequence: 2, 6, 18, 54, 162, ?",
          hint: "What is the ratio between consecutive terms?",
          options: ["486", "324", "480", "648"],
          correct: 0,
          explanation: "Each term is multiplied by 3. The next term is 162 × 3 = 486."
        },
        {
          id: "TNR2_03",
          question: "What comes next in the sequence: 1, 4, 16, 64, 256, ?",
          hint: "Divide the second term by the first to find the multiplier.",
          options: ["1024", "512", "768", "1280"],
          correct: 0,
          explanation: "Each term is multiplied by 4. The next term is 256 × 4 = 1024."
        },
        {
          id: "TNR2_04",
          question: "What comes next in the sequence: 2, 10, 50, 250, 1250, ?",
          hint: "Look at the ratio between consecutive terms.",
          options: ["6250", "5000", "6000", "7500"],
          correct: 0,
          explanation: "Each term is multiplied by 5. The next term is 1250 × 5 = 6250."
        },
        {
          id: "TNR2_05",
          question: "What comes next in the sequence: 3, 30, 300, 3000, 30000, ?",
          hint: "Each term gains an extra zero. What multiplier does that?",
          options: ["300000", "60000", "200000", "330000"],
          correct: 0,
          explanation: "Each term is multiplied by 10. The next term is 30000 × 10 = 300000."
        },
        {
          id: "TNR2_06",
          question: "What comes next in the sequence: 640, 320, 160, 80, 40, ?",
          hint: "The sequence is halving. What operation is applied each time?",
          options: ["20", "10", "30", "25"],
          correct: 0,
          explanation: "Each term is divided by 2. The next term is 40 ÷ 2 = 20."
        },
        {
          id: "TNR2_07",
          question: "What comes next in the sequence: 729, 243, 81, 27, 9, ?",
          hint: "Try dividing each term by the next one.",
          options: ["3", "6", "1", "4"],
          correct: 0,
          explanation: "Each term is divided by 3. The next term is 9 ÷ 3 = 3."
        },
        {
          id: "TNR2_08",
          question: "What comes next in the sequence: 192, 96, 48, 24, 12, ?",
          hint: "What fraction of the previous term gives the current term?",
          options: ["6", "4", "8", "3"],
          correct: 0,
          explanation: "Each term is divided by 2. The next term is 12 ÷ 2 = 6."
        },
        {
          id: "TNR2_09",
          question: "What comes next in the sequence: 3, 4, 7, 11, 18, ?",
          hint: "Try adding two consecutive terms together.",
          options: ["29", "25", "27", "30"],
          correct: 0,
          explanation: "Each term is the sum of the two preceding terms: 11 + 18 = 29."
        },
        {
          id: "TNR2_10",
          question: "What comes next in the sequence: 2, 5, 7, 12, 19, ?",
          hint: "Look at how each term relates to the two terms before it.",
          options: ["31", "26", "28", "33"],
          correct: 0,
          explanation: "Each term is the sum of the two preceding terms: 12 + 19 = 31."
        },
        {
          id: "TNR2_11",
          question: "What comes next in the sequence: 4, 9, 19, 39, 79, ?",
          hint: "Try doubling a term and then adjusting by a small number to get the next.",
          options: ["159", "158", "160", "149"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 2 + 1. The next term is 79 × 2 + 1 = 159."
        },
        {
          id: "TNR2_12",
          question: "What comes next in the sequence: 4, 12, 36, 108, 324, ?",
          hint: "Divide each term by the previous one to find a constant ratio.",
          options: ["972", "648", "1296", "900"],
          correct: 0,
          explanation: "Each term is multiplied by 3. The next term is 324 × 3 = 972."
        },
        {
          id: "TNR2_13",
          question: "What comes next in the sequence: 7, 14, 28, 56, 112, ?",
          hint: "What happens when you divide each term by the one before it?",
          options: ["224", "168", "220", "228"],
          correct: 0,
          explanation: "Each term is multiplied by 2. The next term is 112 × 2 = 224."
        },
        {
          id: "TNR2_14",
          question: "What comes next in the sequence: 1, 3, 4, 7, 11, ?",
          hint: "Check whether each term equals the sum of the two before it.",
          options: ["18", "15", "16", "20"],
          correct: 0,
          explanation: "Each term is the sum of the two preceding terms: 7 + 11 = 18."
        },
        {
          id: "TNR2_15",
          question: "What comes next in the sequence: 256, 128, 64, 32, 16, ?",
          hint: "These are all powers of 2. What divisor connects each pair?",
          options: ["8", "4", "12", "10"],
          correct: 0,
          explanation: "Each term is divided by 2. The next term is 16 ÷ 2 = 8."
        },
        {
          id: "TNR2_16",
          question: "What comes next in the sequence: 1, 5, 25, 125, 625, ?",
          hint: "Find the multiplier by dividing any term by the previous one.",
          options: ["3125", "1250", "3000", "3750"],
          correct: 0,
          explanation: "Each term is multiplied by 5. The next term is 625 × 5 = 3125."
        },
        {
          id: "TNR2_17",
          question: "What comes next in the sequence: 3, 8, 18, 38, 78, ?",
          hint: "Try doubling the previous term and adding a small constant.",
          options: ["158", "156", "160", "148"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 2 + 2. The next term is 78 × 2 + 2 = 158."
        },
        {
          id: "TNR2_18",
          question: "What comes next in the sequence: 1, 4, 5, 9, 14, ?",
          hint: "See if adding two consecutive terms gives the next one.",
          options: ["23", "19", "21", "25"],
          correct: 0,
          explanation: "Each term is the sum of the two preceding terms: 9 + 14 = 23."
        },
        {
          id: "TNR2_19",
          question: "What comes next in the sequence: 2187, 729, 243, 81, 27, ?",
          hint: "Each term is a fraction of the previous. What divisor is used?",
          options: ["9", "3", "18", "12"],
          correct: 0,
          explanation: "Each term is divided by 3. The next term is 27 ÷ 3 = 9."
        },
        {
          id: "TNR2_20",
          question: "What comes next in the sequence: 2, 8, 32, 128, 512, ?",
          hint: "Divide consecutive terms to find the constant multiplier.",
          options: ["2048", "1024", "2560", "1536"],
          correct: 0,
          explanation: "Each term is multiplied by 4. The next term is 512 × 4 = 2048."
        }
      ]
    },
    {
      level: 3,
      name: "Intermediate",
      description: "Perfect squares, cubes, increasing differences, and prime sequences",
      exercises: [
        {
          id: "TNR3_01",
          question: "What comes next in the sequence: 36, 49, 64, 81, 100, ?",
          hint: "Try taking the square root of each term.",
          options: ["121", "110", "120", "125"],
          correct: 0,
          explanation: "These are consecutive perfect squares: 6²=36, 7²=49, 8²=64, 9²=81, 10²=100, 11²=121."
        },
        {
          id: "TNR3_02",
          question: "What comes next in the sequence: 100, 121, 144, 169, 196, ?",
          hint: "Each term is a perfect square. Which squares are these?",
          options: ["225", "220", "230", "216"],
          correct: 0,
          explanation: "These are consecutive perfect squares: 10²=100, 11²=121, 12²=144, 13²=169, 14²=196, 15²=225."
        },
        {
          id: "TNR3_03",
          question: "What comes next in the sequence: 125, 216, 343, 512, 729, ?",
          hint: "Try taking the cube root of each term.",
          options: ["1000", "900", "1024", "972"],
          correct: 0,
          explanation: "These are consecutive perfect cubes: 5³=125, 6³=216, 7³=343, 8³=512, 9³=729, 10³=1000."
        },
        {
          id: "TNR3_04",
          question: "What comes next in the sequence: 343, 512, 729, 1000, 1331, ?",
          hint: "These are cubes of consecutive integers. Which integers?",
          options: ["1728", "1500", "1700", "2000"],
          correct: 0,
          explanation: "These are consecutive perfect cubes: 7³=343, 8³=512, 9³=729, 10³=1000, 11³=1331, 12³=1728."
        },
        {
          id: "TNR3_05",
          question: "What comes next in the sequence: 10, 12, 16, 22, 30, ?",
          hint: "Compute the differences between terms. Do those differences form a pattern?",
          options: ["40", "38", "42", "36"],
          correct: 0,
          explanation: "The differences are 2, 4, 6, 8 — increasing by 2 each time. The next difference is 10, so 30 + 10 = 40."
        },
        {
          id: "TNR3_06",
          question: "What comes next in the sequence: 7, 10, 16, 25, 37, ?",
          hint: "Find the differences between terms, then look for a pattern in those differences.",
          options: ["52", "49", "55", "46"],
          correct: 0,
          explanation: "The differences are 3, 6, 9, 12 — increasing by 3 each time. The next difference is 15, so 37 + 15 = 52."
        },
        {
          id: "TNR3_07",
          question: "What comes next in the sequence: 5, 6, 9, 14, 21, ?",
          hint: "The differences between terms are consecutive odd numbers.",
          options: ["30", "28", "32", "27"],
          correct: 0,
          explanation: "The differences are 1, 3, 5, 7 — consecutive odd numbers. The next difference is 9, so 21 + 9 = 30."
        },
        {
          id: "TNR3_08",
          question: "What comes next in the sequence: 5, 7, 11, 13, 17, ?",
          hint: "Think about numbers that have exactly two divisors.",
          options: ["19", "18", "21", "20"],
          correct: 0,
          explanation: "These are consecutive prime numbers starting from 5. The next prime after 17 is 19."
        },
        {
          id: "TNR3_09",
          question: "What comes next in the sequence: 11, 13, 17, 19, 23, ?",
          hint: "Are these numbers divisible only by 1 and themselves?",
          options: ["29", "27", "25", "31"],
          correct: 0,
          explanation: "These are consecutive prime numbers starting from 11. The next prime after 23 is 29."
        },
        {
          id: "TNR3_10",
          question: "What comes next in the sequence: 4, 16, 36, 64, 100, ?",
          hint: "Take the square root of each term. What do those numbers have in common?",
          options: ["144", "128", "136", "148"],
          correct: 0,
          explanation: "These are squares of consecutive even numbers: 2²=4, 4²=16, 6²=36, 8²=64, 10²=100, 12²=144."
        },
        {
          id: "TNR3_11",
          question: "What comes next in the sequence: 1, 9, 25, 49, 81, ?",
          hint: "Take the square root of each term. What type of numbers are they?",
          options: ["121", "100", "110", "125"],
          correct: 0,
          explanation: "These are squares of consecutive odd numbers: 1²=1, 3²=9, 5²=25, 7²=49, 9²=81, 11²=121."
        },
        {
          id: "TNR3_12",
          question: "What comes next in the sequence: 2, 5, 10, 17, 26, ?",
          hint: "Subtract 1 from each term. Do the results look familiar?",
          options: ["37", "35", "36", "39"],
          correct: 0,
          explanation: "Each term equals n² + 1: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, 6²+1=37."
        },
        {
          id: "TNR3_13",
          question: "What comes next in the sequence: 0, 3, 8, 15, 24, ?",
          hint: "Add 1 to each term. What well-known sequence do you get?",
          options: ["35", "33", "36", "30"],
          correct: 0,
          explanation: "Each term equals n² − 1: 1²−1=0, 2²−1=3, 3²−1=8, 4²−1=15, 5²−1=24, 6²−1=35."
        },
        {
          id: "TNR3_14",
          question: "What comes next in the sequence: 5, 9, 17, 29, 45, ?",
          hint: "Compute the differences, then check if those differences increase in a regular way.",
          options: ["65", "61", "69", "57"],
          correct: 0,
          explanation: "The differences are 4, 8, 12, 16 — increasing by 4 each time. The next difference is 20, so 45 + 20 = 65."
        },
        {
          id: "TNR3_15",
          question: "What comes next in the sequence: 2, 9, 28, 65, 126, ?",
          hint: "Subtract 1 from each term. What kind of numbers remain?",
          options: ["217", "215", "220", "210"],
          correct: 0,
          explanation: "Each term equals n³ + 1: 1³+1=2, 2³+1=9, 3³+1=28, 4³+1=65, 5³+1=126, 6³+1=217."
        },
        {
          id: "TNR3_16",
          question: "What comes next in the sequence: 3, 8, 15, 24, 35, ?",
          hint: "Try expressing each term as a product of two numbers close together.",
          options: ["48", "46", "50", "44"],
          correct: 0,
          explanation: "Each term equals n(n + 2): 1×3=3, 2×4=8, 3×5=15, 4×6=24, 5×7=35, 6×8=48."
        },
        {
          id: "TNR3_17",
          question: "What comes next in the sequence: 1, 5, 11, 19, 29, ?",
          hint: "The differences between terms increase by a constant. Find that constant.",
          options: ["41", "39", "43", "37"],
          correct: 0,
          explanation: "The differences are 4, 6, 8, 10 — increasing by 2 each time. The next difference is 12, so 29 + 12 = 41."
        },
        {
          id: "TNR3_18",
          question: "What comes next in the sequence: 2, 8, 18, 32, 50, ?",
          hint: "Try dividing each term by 2. Do the results look familiar?",
          options: ["72", "68", "74", "64"],
          correct: 0,
          explanation: "Each term equals 2n²: 2(1²)=2, 2(2²)=8, 2(3²)=18, 2(4²)=32, 2(5²)=50, 2(6²)=72."
        },
        {
          id: "TNR3_19",
          question: "What comes next in the sequence: 4, 7, 12, 19, 28, ?",
          hint: "Subtract 3 from each term. What sequence do you recognize?",
          options: ["39", "37", "41", "36"],
          correct: 0,
          explanation: "Each term equals n² + 3: 1²+3=4, 2²+3=7, 3²+3=12, 4²+3=19, 5²+3=28, 6²+3=39."
        },
        {
          id: "TNR3_20",
          question: "What comes next in the sequence: 4, 9, 19, 34, 54, ?",
          hint: "Find the differences, then look at the differences of those differences.",
          options: ["79", "74", "84", "69"],
          correct: 0,
          explanation: "The differences are 5, 10, 15, 20 — increasing by 5 each time. The next difference is 25, so 54 + 25 = 79."
        }
      ]
    },
    {
      level: 4,
      name: "Advanced",
      description: "Factorials, triangular numbers, two-step operations, and composite patterns",
      exercises: [
        {
          id: "TNR4_01",
          question: "What comes next in the sequence: 2, 3, 7, 25, 121, ?",
          hint: "Subtract 1 from each term and see if you recognize those numbers.",
          options: ["721", "720", "625", "719"],
          correct: 0,
          explanation: "Each term equals n! + 1: 1!+1=2, 2!+1=3, 3!+1=7, 4!+1=25, 5!+1=121, 6!+1=721."
        },
        {
          id: "TNR4_02",
          question: "What comes next in the sequence: 0, 1, 5, 23, 119, ?",
          hint: "Add 1 to each term. Do you recognize the resulting numbers?",
          options: ["719", "720", "600", "721"],
          correct: 0,
          explanation: "Each term equals n! − 1: 1!−1=0, 2!−1=1, 3!−1=5, 4!−1=23, 5!−1=119, 6!−1=719."
        },
        {
          id: "TNR4_03",
          question: "What comes next in the sequence: 15, 21, 28, 36, 45, ?",
          hint: "These are triangular numbers. The differences between terms increase by 1 each time.",
          options: ["55", "54", "56", "50"],
          correct: 0,
          explanation: "These are triangular numbers T(5) through T(10). Differences are 6, 7, 8, 9, so the next difference is 10: 45 + 10 = 55."
        },
        {
          id: "TNR4_04",
          question: "What comes next in the sequence: 36, 45, 55, 66, 78, ?",
          hint: "Compute the differences. They increase by 1 each time — a hallmark of triangular numbers.",
          options: ["91", "88", "90", "84"],
          correct: 0,
          explanation: "These are triangular numbers T(8) through T(13). Differences are 9, 10, 11, 12, so the next difference is 13: 78 + 13 = 91."
        },
        {
          id: "TNR4_05",
          question: "What comes next in the sequence: 1, 5, 13, 29, 61, ?",
          hint: "Try doubling the previous term and adding a small constant.",
          options: ["125", "122", "123", "127"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 2 + 3. The next term is 61 × 2 + 3 = 125."
        },
        {
          id: "TNR4_06",
          question: "What comes next in the sequence: 1, 2, 5, 14, 41, ?",
          hint: "Try multiplying the previous term by 3 and adjusting.",
          options: ["122", "120", "123", "82"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 3 − 1. The next term is 41 × 3 − 1 = 122."
        },
        {
          id: "TNR4_07",
          question: "What comes next in the sequence: 2, 9, 23, 51, 107, ?",
          hint: "Double the previous term and add a constant to get the next.",
          options: ["219", "214", "215", "221"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 2 + 5. The next term is 107 × 2 + 5 = 219."
        },
        {
          id: "TNR4_08",
          question: "What comes next in the sequence: 9, 25, 49, 121, 169, ?",
          hint: "Take the square root of each term, then think about what makes those numbers special.",
          options: ["289", "225", "256", "324"],
          correct: 0,
          explanation: "These are squares of consecutive primes: 3²=9, 5²=25, 7²=49, 11²=121, 13²=169, 17²=289."
        },
        {
          id: "TNR4_09",
          question: "What comes next in the sequence: 10, 11, 15, 24, 40, ?",
          hint: "Find the differences between terms. Are those differences themselves a well-known sequence?",
          options: ["65", "56", "64", "60"],
          correct: 0,
          explanation: "The differences are 1, 4, 9, 16 — perfect squares (1², 2², 3², 4²). The next difference is 5²=25, so 40 + 25 = 65."
        },
        {
          id: "TNR4_10",
          question: "What comes next in the sequence: 0, 1, 3, 9, 33, ?",
          hint: "Compute the differences between terms. Do those differences remind you of a famous sequence?",
          options: ["153", "129", "150", "57"],
          correct: 0,
          explanation: "The differences are 1, 2, 6, 24 — these are factorials (1!, 2!, 3!, 4!). The next difference is 5!=120, so 33 + 120 = 153."
        },
        {
          id: "TNR4_11",
          question: "What comes next in the sequence: 2, 7, 22, 67, 202, ?",
          hint: "Multiply the previous term by a number and add a constant.",
          options: ["607", "606", "605", "610"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 3 + 1. The next term is 202 × 3 + 1 = 607."
        },
        {
          id: "TNR4_12",
          question: "What comes next in the sequence: 20, 37, 71, 139, 275, ?",
          hint: "Try doubling the previous term and subtracting a small constant.",
          options: ["547", "550", "545", "553"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 2 − 3. The next term is 275 × 2 − 3 = 547."
        },
        {
          id: "TNR4_13",
          question: "What comes next in the sequence: 1, 5, 14, 30, 55, ?",
          hint: "The differences between terms are perfect squares. Sum up consecutive squares.",
          options: ["91", "85", "90", "80"],
          correct: 0,
          explanation: "These are cumulative sums of squares: 1, 1+4=5, 5+9=14, 14+16=30, 30+25=55, 55+36=91."
        },
        {
          id: "TNR4_14",
          question: "What comes next in the sequence: 2, 4, 12, 48, 240, ?",
          hint: "Try dividing each term by 2. Do the results look like factorials?",
          options: ["1440", "1200", "1680", "960"],
          correct: 0,
          explanation: "Each term equals 2 × n!: 2×1!=2, 2×2!=4, 2×3!=12, 2×4!=48, 2×5!=240, 2×6!=1440."
        },
        {
          id: "TNR4_15",
          question: "What comes next in the sequence: 6, 13, 27, 55, 111, ?",
          hint: "Double the previous term and add a constant each time.",
          options: ["223", "222", "220", "225"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 2 + 1. The next term is 111 × 2 + 1 = 223."
        },
        {
          id: "TNR4_16",
          question: "What comes next in the sequence: 10, 11, 14, 20, 30, ?",
          hint: "The differences between terms are triangular numbers: 1, 3, 6, 10, …",
          options: ["45", "40", "42", "50"],
          correct: 0,
          explanation: "The differences are 1, 3, 6, 10 — triangular numbers. The next triangular number is 15, so 30 + 15 = 45."
        },
        {
          id: "TNR4_17",
          question: "What comes next in the sequence: 12, 20, 30, 42, 56, ?",
          hint: "Try expressing each term as a product of two consecutive integers.",
          options: ["72", "68", "70", "64"],
          correct: 0,
          explanation: "These are oblong numbers n(n+1): 3×4=12, 4×5=20, 5×6=30, 6×7=42, 7×8=56, 8×9=72."
        },
        {
          id: "TNR4_18",
          question: "What comes next in the sequence: 1, 9, 36, 100, 225, ?",
          hint: "Each term is the square of a triangular number, or equivalently the cumulative sum of cubes.",
          options: ["441", "400", "440", "450"],
          correct: 0,
          explanation: "These are sums of consecutive cubes: 1³=1, 1+8=9, 9+27=36, 36+64=100, 100+125=225, 225+216=441."
        },
        {
          id: "TNR4_19",
          question: "What comes next in the sequence: 3, 7, 19, 55, 163, ?",
          hint: "Multiply the previous term by a number and subtract a constant.",
          options: ["487", "489", "485", "492"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 3 − 2. The next term is 163 × 3 − 2 = 487."
        },
        {
          id: "TNR4_20",
          question: "What comes next in the sequence: 12, 23, 45, 89, 177, ?",
          hint: "Double the previous term and make a small adjustment.",
          options: ["353", "354", "355", "350"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 2 − 1. The next term is 177 × 2 − 1 = 353."
        }
      ]
    },
    {
      level: 5,
      name: "Expert",
      description: "Complex recursive rules, interleaved patterns, and multi-layer sequences",
      exercises: [
        {
          id: "TNR5_01",
          question: "What comes next in the sequence: 1, 2, 9, 64, 625, ?",
          hint: "Think about what power each position's base is raised to.",
          options: ["7776", "7774", "7200", "3125"],
          correct: 0,
          explanation: "Each term is n raised to the power (n−1): 1⁰=1, 2¹=2, 3²=9, 4³=64, 5⁴=625, 6⁵=7776."
        },
        {
          id: "TNR5_02",
          question: "What comes next in the sequence: 2, 10, 30, 68, 130, ?",
          hint: "Try splitting each term into a cube part and a linear part.",
          options: ["222", "220", "218", "216"],
          correct: 0,
          explanation: "Each term equals n³ + n: 1+1=2, 8+2=10, 27+3=30, 64+4=68, 125+5=130, 216+6=222."
        },
        {
          id: "TNR5_03",
          question: "What comes next in the sequence: 1, 1, 2, 5, 14, ?",
          hint: "These are the Catalan numbers. Each C(n) = C(0)C(n−1) + C(1)C(n−2) + … + C(n−1)C(0).",
          options: ["42", "28", "35", "48"],
          correct: 0,
          explanation: "These are Catalan numbers: C(0)=1, C(1)=1, C(2)=2, C(3)=5, C(4)=14, C(5)=42."
        },
        {
          id: "TNR5_04",
          question: "What comes next in the sequence: 1, 5, 12, 22, 35, ?",
          hint: "The differences are 4, 7, 10, 13 — an arithmetic sequence with step 3.",
          options: ["51", "48", "50", "55"],
          correct: 0,
          explanation: "These are pentagonal numbers: n(3n−1)/2. For n=6: 6×17/2 = 51."
        },
        {
          id: "TNR5_05",
          question: "What comes next in the sequence: 2, 5, 13, 35, 97, ?",
          hint: "Try expressing each term as a sum of two exponential expressions.",
          options: ["275", "265", "270", "280"],
          correct: 0,
          explanation: "Each term equals 2ⁿ + 3ⁿ (starting from n=0): 1+1=2, 2+3=5, 4+9=13, 8+27=35, 16+81=97, 32+243=275."
        },
        {
          id: "TNR5_06",
          question: "What comes next in the sequence: 1, 5, 17, 53, 161, ?",
          hint: "Multiply the previous term by 3 and add a small constant.",
          options: ["485", "483", "322", "487"],
          correct: 0,
          explanation: "Each term follows the rule: previous × 3 + 2. The next term is 161 × 3 + 2 = 485."
        },
        {
          id: "TNR5_07",
          question: "What comes next in the sequence: 1, 2, 5, 12, 27, ?",
          hint: "Think about powers of 2, then subtract something that depends on the position.",
          options: ["58", "54", "56", "60"],
          correct: 0,
          explanation: "Each term equals 2ⁿ − n: 2¹−1=1, 2²−2=2, 2³−3=5, 2⁴−4=12, 2⁵−5=27, 2⁶−6=58."
        },
        {
          id: "TNR5_08",
          question: "What comes next in the sequence: 2, 12, 36, 80, 150, ?",
          hint: "Try factoring each term into n² times something.",
          options: ["252", "240", "250", "260"],
          correct: 0,
          explanation: "Each term equals n²(n+1): 1×2=2, 4×3=12, 9×4=36, 16×5=80, 25×6=150, 36×7=252."
        },
        {
          id: "TNR5_09",
          question: "What comes next in the sequence: 1, 6, 15, 28, 45, ?",
          hint: "The differences are 5, 9, 13, 17 — increasing by 4. These are hexagonal numbers.",
          options: ["66", "60", "63", "70"],
          correct: 0,
          explanation: "These are hexagonal numbers: n(2n−1). For n=6: 6×11 = 66."
        },
        {
          id: "TNR5_10",
          question: "What comes next in the sequence: 2, 6, 15, 40, 145, ?",
          hint: "Try splitting each term into a factorial part and a square part.",
          options: ["756", "750", "745", "760"],
          correct: 0,
          explanation: "Each term equals n! + n²: 1!+1=2, 2!+4=6, 3!+9=15, 4!+16=40, 5!+25=145, 6!+36=756."
        },
        {
          id: "TNR5_11",
          question: "What comes next in the sequence: 2, 4, 7, 14, 17, ?",
          hint: "The operations alternate between two different rules at odd and even steps.",
          options: ["34", "20", "31", "37"],
          correct: 0,
          explanation: "The pattern alternates: ×2, +3, ×2, +3, ×2. So 17 × 2 = 34."
        },
        {
          id: "TNR5_12",
          question: "What comes next in the sequence: 1, 5, 19, 65, 211, ?",
          hint: "Express each term as a difference of two exponential values.",
          options: ["665", "660", "633", "670"],
          correct: 0,
          explanation: "Each term equals 3ⁿ − 2ⁿ: 3−2=1, 9−4=5, 27−8=19, 81−16=65, 243−32=211, 729−64=665."
        },
        {
          id: "TNR5_13",
          question: "What comes next in the sequence: 1, 4, 11, 29, 76, ?",
          hint: "Each term depends on the two terms before it. Try a linear combination.",
          options: ["199", "197", "200", "228"],
          correct: 0,
          explanation: "The rule is a(n) = 3×a(n−1) − a(n−2): 3×29−11=76, 3×76−29=199."
        },
        {
          id: "TNR5_14",
          question: "What comes next in the sequence: 20, 22, 26, 34, 50, ?",
          hint: "The differences are 2, 4, 8, 16 — powers of 2.",
          options: ["82", "66", "80", "84"],
          correct: 0,
          explanation: "The differences are powers of 2: 2, 4, 8, 16. The next difference is 32, so 50 + 32 = 82."
        },
        {
          id: "TNR5_15",
          question: "What comes next in the sequence: 1, 4, 10, 20, 35, ?",
          hint: "These are tetrahedral numbers — sums of consecutive triangular numbers.",
          options: ["56", "50", "55", "60"],
          correct: 0,
          explanation: "Tetrahedral numbers: n(n+1)(n+2)/6. For n=6: 6×7×8/6 = 56."
        },
        {
          id: "TNR5_16",
          question: "What comes next in the sequence: 1, 13, 37, 73, 121, ?",
          hint: "The differences are 12, 24, 36, 48 — multiples of 12.",
          options: ["181", "169", "175", "193"],
          correct: 0,
          explanation: "These are star numbers: 6n(n−1)+1. For n=6: 6×30+1 = 181."
        },
        {
          id: "TNR5_17",
          question: "What comes next in the sequence: 1, 7, 19, 37, 61, ?",
          hint: "The differences are 6, 12, 18, 24 — multiples of 6.",
          options: ["91", "85", "90", "97"],
          correct: 0,
          explanation: "These are centered hexagonal numbers: 3n(n−1)+1. For n=6: 3×30+1 = 91."
        },
        {
          id: "TNR5_18",
          question: "What comes next in the sequence: 3, 8, 17, 32, 57, ?",
          hint: "Try expressing each term as the sum of a square and a power of 2.",
          options: ["100", "96", "98", "105"],
          correct: 0,
          explanation: "Each term equals n² + 2ⁿ: 1+2=3, 4+4=8, 9+8=17, 16+16=32, 25+32=57, 36+64=100."
        },
        {
          id: "TNR5_19",
          question: "What comes next in the sequence: 1, 4, 8, 11, 22, ?",
          hint: "Two different operations alternate. One adds, the other multiplies.",
          options: ["25", "44", "24", "26"],
          correct: 0,
          explanation: "The pattern alternates: +3, ×2, +3, ×2, +3. So 22 + 3 = 25."
        },
        {
          id: "TNR5_20",
          question: "What comes next in the sequence: 1, 1, 3, 5, 11, ?",
          hint: "Each term uses both of the two preceding terms with different weights.",
          options: ["21", "16", "22", "19"],
          correct: 0,
          explanation: "The rule is a(n) = a(n−1) + 2×a(n−2): 5 + 2×3 = 11, 11 + 2×5 = 21."
        }
      ]
    }
  ]
};
