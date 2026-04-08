const TRAINING_MP_12_15 = {
  tips: [
    {
      title: "Read Carefully for Traps",
      content: "Many math puzzles include intuitive traps. For example, 'a bat and ball cost $1.10, the bat costs $1.00 more than the ball' tricks people into answering $0.10. Always set up an equation to verify your first instinct."
    },
    {
      title: "Use the Clock Angle Formula",
      content: "To find the angle between clock hands, use |30H − 5.5M| degrees, where H is the hour and M is the minutes. If the result exceeds 180°, subtract from 360° to get the smaller angle."
    },
    {
      title: "Work Backwards from Answers",
      content: "When stuck on a multiple-choice problem, try plugging each answer back into the question. This 'backsolving' technique can save time and help verify your algebraic solution."
    },
    {
      title: "Break Complex Problems into Parts",
      content: "For rate and distance problems, identify the key variables (speed, time, distance) and write them out. Use the formula Distance = Speed × Time, and set up equations before solving."
    }
  ],
  levels: [
    {
      level: 1,
      name: "Foundation",
      description: "Bat-and-ball variants, lily-pad doubling puzzles, simple rate problems, classic trick questions, and 'all but N' problems.",
      exercises: [
        {
          id: "TMP1215_1_01",
          question: "A bat and a ball cost $1.10 together. The bat costs $1.00 more than the ball. How much does the ball cost?",
          hint: "Let ball = x. Then bat = x + 1.00. Set up the equation x + (x + 1.00) = 1.10.",
          options: ["$0.05", "$0.10", "$0.15", "$1.00"],
          correct: 0,
          explanation: "Let ball = x, bat = x + 1.00. Then x + (x + 1.00) = 1.10, so 2x = 0.10, x = $0.05."
        },
        {
          id: "TMP1215_1_02",
          question: "A pen and a notebook cost $2.10 together. The notebook costs $2.00 more than the pen. How much does the pen cost?",
          hint: "Let pen = x. Then notebook = x + 2.00. Solve x + (x + 2.00) = 2.10.",
          options: ["$0.05", "$0.10", "$0.15", "$0.20"],
          correct: 0,
          explanation: "Let pen = x, notebook = x + 2.00. Then x + (x + 2.00) = 2.10, so 2x = 0.10, x = $0.05."
        },
        {
          id: "TMP1215_1_03",
          question: "A shirt and a tie cost $110 together. The shirt costs $100 more than the tie. How much is the tie?",
          hint: "Let tie = x. Then shirt = x + 100. Solve x + (x + 100) = 110.",
          options: ["$5", "$10", "$15", "$55"],
          correct: 0,
          explanation: "Let tie = x, shirt = x + 100. Then x + (x + 100) = 110, so 2x = 10, x = $5."
        },
        {
          id: "TMP1215_1_04",
          question: "A book and a bookmark cost $5.50 together. The book costs $5.00 more than the bookmark. How much is the bookmark?",
          hint: "Let bookmark = x. Then book = x + 5.00. Solve x + (x + 5.00) = 5.50.",
          options: ["$0.25", "$0.50", "$0.75", "$1.00"],
          correct: 0,
          explanation: "Let bookmark = x, book = x + 5.00. Then x + (x + 5.00) = 5.50, so 2x = 0.50, x = $0.25."
        },
        {
          id: "TMP1215_1_05",
          question: "A lily pad doubles in size every day. If it takes 48 days to cover the entire lake, how many days does it take to cover half the lake?",
          hint: "If it doubles every day, what was it the day before it was full?",
          options: ["24", "36", "47", "46"],
          correct: 2,
          explanation: "Since it doubles each day, on day 47 it was half the lake, and on day 48 it doubled to cover the whole lake."
        },
        {
          id: "TMP1215_1_06",
          question: "A colony of bacteria doubles every hour. If it fills a jar in 12 hours, when is the jar half full?",
          hint: "Think backwards: if it doubles to fill the jar, when was it half full?",
          options: ["6 hours", "9 hours", "10 hours", "11 hours"],
          correct: 3,
          explanation: "At hour 11 the jar is half full. It doubles in the next hour to become completely full at hour 12."
        },
        {
          id: "TMP1215_1_07",
          question: "A population of algae doubles every day. If it covers the pond completely in 30 days, on what day does it cover exactly one-quarter of the pond?",
          hint: "Work backwards: full on day 30, half on day 29, quarter on day...?",
          options: ["7", "15", "28", "29"],
          correct: 2,
          explanation: "Day 30 = full, day 29 = half, day 28 = one-quarter. Each day backwards is half the coverage."
        },
        {
          id: "TMP1215_1_08",
          question: "A vine doubles its length every week. If it reaches 64 meters after 6 weeks, how long was it at the start?",
          hint: "After 6 doublings the vine is 64 m. Divide 64 by 2⁶.",
          options: ["1 meter", "2 meters", "4 meters", "8 meters"],
          correct: 0,
          explanation: "Starting length × 2⁶ = 64. Since 2⁶ = 64, the starting length = 64 ÷ 64 = 1 meter."
        },
        {
          id: "TMP1215_1_09",
          question: "If 5 cats can catch 5 mice in 5 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
          hint: "First find how many mice one cat catches in 5 minutes, then scale to 100 minutes.",
          options: ["5", "10", "20", "100"],
          correct: 0,
          explanation: "Each cat catches 1 mouse in 5 minutes. In 100 minutes, each cat catches 20 mice. To catch 100 mice: 100 ÷ 20 = 5 cats."
        },
        {
          id: "TMP1215_1_10",
          question: "If 3 printers can print 3 pages in 3 minutes, how many pages can 9 printers print in 9 minutes?",
          hint: "Find the rate per printer, then scale up both printers and time.",
          options: ["9", "18", "27", "81"],
          correct: 2,
          explanation: "Each printer prints 1 page in 3 minutes. In 9 minutes each printer prints 3 pages. With 9 printers: 9 × 3 = 27 pages."
        },
        {
          id: "TMP1215_1_11",
          question: "If 6 workers can build 6 walls in 6 hours, how long does it take 1 worker to build 1 wall?",
          hint: "Each worker builds 1 wall in the given time. What is that time?",
          options: ["1 hour", "3 hours", "6 hours", "36 hours"],
          correct: 2,
          explanation: "6 workers build 6 walls in 6 hours means each worker builds 1 wall in 6 hours. So 1 worker builds 1 wall in 6 hours."
        },
        {
          id: "TMP1215_1_12",
          question: "Two fathers and two sons go fishing. They each catch exactly one fish, and the total catch is 3 fish. How many people went fishing?",
          hint: "Can one person be both a father and a son at the same time?",
          options: ["2", "3", "4", "6"],
          correct: 1,
          explanation: "There are 3 people: a grandfather, his son (who is also a father), and his grandson. That gives two fathers and two sons."
        },
        {
          id: "TMP1215_1_13",
          question: "A farmer has 17 sheep. All but 9 die. How many sheep are still alive?",
          hint: "Read carefully: 'all but 9' means 9 are the exception.",
          options: ["8", "9", "17", "0"],
          correct: 1,
          explanation: "'All but 9 die' means 9 survive. The answer is 9."
        },
        {
          id: "TMP1215_1_14",
          question: "You have 20 apples. All but 7 are eaten. How many apples remain?",
          hint: "'All but 7' means 7 are left untouched.",
          options: ["7", "13", "14", "20"],
          correct: 0,
          explanation: "'All but 7 are eaten' means 7 remain uneaten. The answer is 7."
        },
        {
          id: "TMP1215_1_15",
          question: "A store has 50 items in stock. All but 12 are sold. How many items remain?",
          hint: "'All but 12' tells you exactly how many are left.",
          options: ["12", "38", "42", "50"],
          correct: 0,
          explanation: "'All but 12 are sold' means 12 remain unsold. The answer is 12."
        },
        {
          id: "TMP1215_1_16",
          question: "A phone and a case cost $330 together. The phone costs $300 more than the case. How much is the case?",
          hint: "Let case = x. Then phone = x + 300. Solve x + (x + 300) = 330.",
          options: ["$15", "$30", "$33", "$165"],
          correct: 0,
          explanation: "Let case = x, phone = x + 300. Then x + (x + 300) = 330, so 2x = 30, x = $15."
        },
        {
          id: "TMP1215_1_17",
          question: "If it takes 10 machines 10 minutes to make 10 widgets, how many minutes would it take 100 machines to make 100 widgets?",
          hint: "Each machine makes 1 widget in 10 minutes. With 100 machines, each still takes 10 minutes for 1 widget.",
          options: ["1", "10", "100", "1000"],
          correct: 1,
          explanation: "Each machine makes 1 widget in 10 minutes. 100 machines each make 1 widget in 10 minutes, producing 100 widgets total in 10 minutes."
        },
        {
          id: "TMP1215_1_18",
          question: "You fold a piece of paper in half 10 times. How many layers does it have?",
          hint: "Each fold doubles the number of layers. Start with 1 layer.",
          options: ["20", "100", "512", "1024"],
          correct: 3,
          explanation: "Each fold doubles the layers: 1 → 2 → 4 → 8 → ... After 10 folds: 2¹⁰ = 1024 layers."
        },
        {
          id: "TMP1215_1_19",
          question: "A snail climbs a 10-meter pole. Each day it climbs 3 meters, but each night it slips back 2 meters. How many days does it take to reach the top?",
          hint: "Net progress is 1 m/day, but on the final day the snail reaches the top before slipping.",
          options: ["7", "8", "9", "10"],
          correct: 1,
          explanation: "Each day net gain is 1 meter. After 7 days: 7 meters. On day 8, it climbs 3 more to reach 10 meters before night, so it's done in 8 days."
        },
        {
          id: "TMP1215_1_20",
          question: "How many months of the year have 28 days?",
          hint: "The question asks which months have 28 days — not which have exactly 28.",
          options: ["1", "2", "6", "12"],
          correct: 3,
          explanation: "All 12 months have at least 28 days. The trick is that the question doesn't say 'only' or 'exactly' 28 days."
        }
      ]
    },
    {
      level: 2,
      name: "Developing",
      description: "Clock angle problems, work-rate puzzles, algebraic word problems, and pill-interval reasoning.",
      exercises: [
        {
          id: "TMP1215_2_01",
          question: "What is the angle between the hour and minute hands of a clock at 3:00?",
          hint: "Use the formula |30H − 5.5M|. At 3:00, H = 3, M = 0.",
          options: ["60°", "75°", "90°", "120°"],
          correct: 2,
          explanation: "|30(3) − 5.5(0)| = |90 − 0| = 90°."
        },
        {
          id: "TMP1215_2_02",
          question: "What is the angle between the hour and minute hands of a clock at 3:15?",
          hint: "Use |30H − 5.5M|. At 3:15, H = 3, M = 15.",
          options: ["0°", "7.5°", "15°", "22.5°"],
          correct: 1,
          explanation: "|30(3) − 5.5(15)| = |90 − 82.5| = 7.5°."
        },
        {
          id: "TMP1215_2_03",
          question: "What is the angle between the hour and minute hands of a clock at 4:30?",
          hint: "Use |30H − 5.5M|. At 4:30, H = 4, M = 30.",
          options: ["30°", "45°", "60°", "75°"],
          correct: 1,
          explanation: "|30(4) − 5.5(30)| = |120 − 165| = 45°."
        },
        {
          id: "TMP1215_2_04",
          question: "What is the angle between the hour and minute hands of a clock at 6:00?",
          hint: "Use |30H − 5.5M|. At 6:00, H = 6, M = 0.",
          options: ["90°", "120°", "150°", "180°"],
          correct: 3,
          explanation: "|30(6) − 5.5(0)| = |180 − 0| = 180°."
        },
        {
          id: "TMP1215_2_05",
          question: "What is the smaller angle between the hour and minute hands at 9:15?",
          hint: "Use |30H − 5.5M|. If the result is over 180°, subtract from 360°.",
          options: ["172.5°", "175°", "177.5°", "180°"],
          correct: 0,
          explanation: "|30(9) − 5.5(15)| = |270 − 82.5| = 187.5°. Since this exceeds 180°, the smaller angle is 360° − 187.5° = 172.5°."
        },
        {
          id: "TMP1215_2_06",
          question: "If 3 workers can paint a house in 6 hours, how long would 6 workers take?",
          hint: "Workers × time = constant. If you double the workers, what happens to the time?",
          options: ["2 hours", "3 hours", "4 hours", "12 hours"],
          correct: 1,
          explanation: "Work = workers × time. 3 × 6 = 18 worker-hours. For 6 workers: 18 ÷ 6 = 3 hours."
        },
        {
          id: "TMP1215_2_07",
          question: "Worker A finishes a job in 4 hours. Worker B finishes it in 6 hours. How long to finish working together?",
          hint: "Add their rates: 1/4 + 1/6 jobs per hour. Then take the reciprocal.",
          options: ["2 hours", "2 hours 24 minutes", "3 hours", "5 hours"],
          correct: 1,
          explanation: "Rate A = 1/4, rate B = 1/6. Combined rate = 3/12 + 2/12 = 5/12 per hour. Time = 12/5 = 2.4 hours = 2 hours 24 minutes."
        },
        {
          id: "TMP1215_2_08",
          question: "If 8 builders can finish a project in 15 days, how many days would 12 builders take?",
          hint: "Builders × days = constant total work. Solve for the new number of days.",
          options: ["8 days", "10 days", "12 days", "20 days"],
          correct: 1,
          explanation: "Total work = 8 × 15 = 120 builder-days. For 12 builders: 120 ÷ 12 = 10 days."
        },
        {
          id: "TMP1215_2_09",
          question: "A doctor gives you 3 pills and says to take one every 30 minutes. How many minutes until all pills are taken?",
          hint: "You take the first pill immediately. Count the gaps between pills, not the pills themselves.",
          options: ["30 minutes", "60 minutes", "90 minutes", "120 minutes"],
          correct: 1,
          explanation: "Pill 1 at 0 min, pill 2 at 30 min, pill 3 at 60 min. There are 2 gaps of 30 minutes, so total = 60 minutes."
        },
        {
          id: "TMP1215_2_10",
          question: "The sum of two numbers is 50 and their difference is 14. What is the larger number?",
          hint: "Let the numbers be x and y. Set up: x + y = 50 and x − y = 14. Add the equations.",
          options: ["18", "25", "32", "36"],
          correct: 2,
          explanation: "x + y = 50 and x − y = 14. Adding: 2x = 64, so x = 32. The larger number is 32."
        },
        {
          id: "TMP1215_2_11",
          question: "Three consecutive integers add up to 72. What is the middle number?",
          hint: "Let the middle number be n. The three numbers are n−1, n, n+1.",
          options: ["22", "23", "24", "25"],
          correct: 2,
          explanation: "(n−1) + n + (n+1) = 72. This simplifies to 3n = 72, so n = 24."
        },
        {
          id: "TMP1215_2_12",
          question: "A number is doubled and then increased by 7, giving 31. What is the number?",
          hint: "Set up the equation 2x + 7 = 31 and solve for x.",
          options: ["10", "11", "12", "14"],
          correct: 2,
          explanation: "2x + 7 = 31 → 2x = 24 → x = 12."
        },
        {
          id: "TMP1215_2_13",
          question: "What is the smaller angle between the hour and minute hands at 10:10?",
          hint: "Use |30H − 5.5M|. If the result exceeds 180°, subtract from 360°.",
          options: ["105°", "110°", "115°", "120°"],
          correct: 2,
          explanation: "|30(10) − 5.5(10)| = |300 − 55| = 245°. Since this exceeds 180°, the smaller angle is 360° − 245° = 115°."
        },
        {
          id: "TMP1215_2_14",
          question: "A pipe fills a tank in 8 hours. A drain empties it in 12 hours. With both open, how long to fill the tank?",
          hint: "Net rate = fill rate − drain rate = 1/8 − 1/12 per hour.",
          options: ["16 hours", "20 hours", "24 hours", "48 hours"],
          correct: 2,
          explanation: "Fill rate = 1/8, drain rate = 1/12. Net rate = 3/24 − 2/24 = 1/24 per hour. Time = 24 hours."
        },
        {
          id: "TMP1215_2_15",
          question: "Five years ago, Alice was 3 times as old as Bob. Now she is twice as old as Bob. How old is Alice now?",
          hint: "Let Bob's current age = B. Then Alice = 2B. Five years ago: 2B − 5 = 3(B − 5).",
          options: ["15", "18", "20", "25"],
          correct: 2,
          explanation: "Alice = 2B. Five years ago: 2B − 5 = 3(B − 5) → 2B − 5 = 3B − 15 → B = 10. Alice = 2 × 10 = 20."
        },
        {
          id: "TMP1215_2_16",
          question: "A doctor prescribes 5 pills to be taken one every 15 minutes. How many minutes from the first pill to the last?",
          hint: "Count the intervals between pills, not the number of pills.",
          options: ["45 minutes", "60 minutes", "75 minutes", "90 minutes"],
          correct: 1,
          explanation: "5 pills have 4 intervals of 15 minutes each: 4 × 15 = 60 minutes."
        },
        {
          id: "TMP1215_2_17",
          question: "The product of two consecutive even numbers is 168. What is the smaller number?",
          hint: "Let the numbers be n and n + 2. Solve n(n + 2) = 168.",
          options: ["10", "12", "14", "16"],
          correct: 1,
          explanation: "n(n + 2) = 168 → n² + 2n − 168 = 0 → (n + 14)(n − 12) = 0 → n = 12. Check: 12 × 14 = 168."
        },
        {
          id: "TMP1215_2_18",
          question: "What is the angle between the hour and minute hands of a clock at 7:20?",
          hint: "Use |30H − 5.5M|. At 7:20, H = 7, M = 20.",
          options: ["80°", "90°", "100°", "110°"],
          correct: 2,
          explanation: "|30(7) − 5.5(20)| = |210 − 110| = 100°."
        },
        {
          id: "TMP1215_2_19",
          question: "Tap A fills a pool in 10 hours. Tap B fills it in 15 hours. How long to fill the pool with both taps open?",
          hint: "Combined rate = 1/10 + 1/15 per hour. Find the reciprocal.",
          options: ["5 hours", "6 hours", "7 hours", "12.5 hours"],
          correct: 1,
          explanation: "Combined rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 per hour. Time = 6 hours."
        },
        {
          id: "TMP1215_2_20",
          question: "A father is 4 times as old as his son. In 20 years he will be twice as old. How old is the son now?",
          hint: "Let son = S, father = 4S. In 20 years: 4S + 20 = 2(S + 20). Solve for S.",
          options: ["8", "10", "12", "15"],
          correct: 1,
          explanation: "Father = 4S. In 20 years: 4S + 20 = 2(S + 20) → 4S + 20 = 2S + 40 → 2S = 20 → S = 10."
        }
      ]
    },
    {
      level: 3,
      name: "Advanced",
      description: "Number grid rule puzzles, probability reasoning with cards and dice, and percentage problems.",
      exercises: [
        {
          id: "TMP1215_3_01",
          question: "In a number grid, the rule is: column 3 = column 1 × column 2 × 2. Row 1 is [3, 4, 24] and row 2 is [5, 2, 20]. What is column 3 when columns 1 and 2 are [6, 3]?",
          hint: "Apply the rule: multiply column 1 by column 2, then multiply by 2.",
          options: ["18", "30", "36", "42"],
          correct: 2,
          explanation: "Column 3 = 6 × 3 × 2 = 36."
        },
        {
          id: "TMP1215_3_02",
          question: "In a grid, column 3 = column 1² + column 2². Row 1 is [3, 4, 25]. Row 2 is [5, 12, 169]. What is column 3 when columns 1 and 2 are [6, 8]?",
          hint: "Square each value and add: 6² + 8².",
          options: ["48", "72", "100", "144"],
          correct: 2,
          explanation: "Column 3 = 6² + 8² = 36 + 64 = 100."
        },
        {
          id: "TMP1215_3_03",
          question: "What is the probability of drawing a heart from a standard 52-card deck?",
          hint: "There are 13 hearts in a deck of 52 cards.",
          options: ["20%", "25%", "30%", "50%"],
          correct: 1,
          explanation: "P(heart) = 13/52 = 1/4 = 25%."
        },
        {
          id: "TMP1215_3_04",
          question: "What is the probability of rolling a sum of 7 with two standard dice?",
          hint: "List the combinations: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Count them out of 36 total outcomes.",
          options: ["1/9", "1/6", "1/4", "1/3"],
          correct: 1,
          explanation: "There are 6 ways to roll a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Probability = 6/36 = 1/6."
        },
        {
          id: "TMP1215_3_05",
          question: "A store increases all prices by 20%, then offers a 20% discount on the new prices. What is the net effect on the original price?",
          hint: "Multiply the factors: 1.20 × 0.80. Is the result more or less than 1?",
          options: ["No change", "4% decrease", "4% increase", "2% decrease"],
          correct: 1,
          explanation: "1.20 × 0.80 = 0.96, which is a 4% decrease from the original price."
        },
        {
          id: "TMP1215_3_06",
          question: "Each row in a grid follows the rule: (a + b) × c = d. Row 1 is [2, 3, 4, 20]. Row 2 is [1, 5, 3, 18]. What is d when [a, b, c] = [4, 6, 2]?",
          hint: "Add a and b, then multiply by c.",
          options: ["12", "16", "20", "24"],
          correct: 2,
          explanation: "d = (4 + 6) × 2 = 10 × 2 = 20."
        },
        {
          id: "TMP1215_3_07",
          question: "What is the probability of drawing either a king or a queen from a standard 52-card deck?",
          hint: "Count the kings (4) and queens (4). Add them and divide by 52.",
          options: ["1/13", "2/13", "1/6", "4/13"],
          correct: 1,
          explanation: "4 kings + 4 queens = 8 favorable cards. P = 8/52 = 2/13."
        },
        {
          id: "TMP1215_3_08",
          question: "An item costs $80. After a 15% discount, what is the sale price?",
          hint: "Sale price = original × (1 − 0.15) = original × 0.85.",
          options: ["$65", "$66", "$68", "$72"],
          correct: 2,
          explanation: "Sale price = $80 × 0.85 = $68."
        },
        {
          id: "TMP1215_3_09",
          question: "A town's population increases from 500 to 650. What is the percentage increase?",
          hint: "Percentage increase = (change ÷ original) × 100.",
          options: ["13%", "23%", "30%", "35%"],
          correct: 2,
          explanation: "Change = 650 − 500 = 150. Percentage = (150 ÷ 500) × 100 = 30%."
        },
        {
          id: "TMP1215_3_10",
          question: "Two dice are rolled. What is the probability that both show the same number (doubles)?",
          hint: "List the doubles: (1,1), (2,2), ..., (6,6). Count them out of 36.",
          options: ["1/12", "1/6", "1/4", "1/3"],
          correct: 1,
          explanation: "There are 6 doubles out of 36 outcomes: 6/36 = 1/6."
        },
        {
          id: "TMP1215_3_11",
          question: "Each row follows the rule: a² − b = c. Row 1 is [5, 3, 22]. Row 2 is [7, 10, 39]. What is c when [a, b] = [9, 5]?",
          hint: "Square a, then subtract b.",
          options: ["72", "74", "76", "81"],
          correct: 2,
          explanation: "c = 9² − 5 = 81 − 5 = 76."
        },
        {
          id: "TMP1215_3_12",
          question: "You invest $2,000 at 5% annual simple interest. How much total do you have after 3 years?",
          hint: "Simple interest: I = P × r × t. Add the interest to the principal.",
          options: ["$2,150", "$2,300", "$2,315.25", "$2,500"],
          correct: 1,
          explanation: "Interest = $2,000 × 0.05 × 3 = $300. Total = $2,000 + $300 = $2,300."
        },
        {
          id: "TMP1215_3_13",
          question: "From a standard 52-card deck, what is the probability of drawing a red face card?",
          hint: "Red suits are hearts and diamonds. Face cards are Jack, Queen, King. Count red face cards.",
          options: ["1/13", "3/26", "3/13", "1/4"],
          correct: 1,
          explanation: "Red face cards: J, Q, K of hearts and J, Q, K of diamonds = 6 cards. P = 6/52 = 3/26."
        },
        {
          id: "TMP1215_3_14",
          question: "In a grid, column 3 = (column 1 + column 2)². Row 1 is [1, 2, 9]. Row 2 is [3, 2, 25]. What is column 3 when columns 1 and 2 are [2, 3]?",
          hint: "Add the two columns, then square the result.",
          options: ["13", "20", "25", "36"],
          correct: 2,
          explanation: "Column 3 = (2 + 3)² = 5² = 25."
        },
        {
          id: "TMP1215_3_15",
          question: "A shirt is marked at $60. After a 25% discount, a 10% sales tax is applied to the discounted price. What do you pay?",
          hint: "First apply the discount: $60 × 0.75. Then apply tax to that result: × 1.10.",
          options: ["$45.00", "$47.25", "$49.50", "$51.00"],
          correct: 2,
          explanation: "Discounted price = $60 × 0.75 = $45. After tax = $45 × 1.10 = $49.50."
        },
        {
          id: "TMP1215_3_16",
          question: "A bag has 5 red, 3 blue, and 2 green marbles. What is the probability of drawing a blue marble?",
          hint: "Total marbles = 5 + 3 + 2 = 10. Probability = blue ÷ total.",
          options: ["20%", "25%", "30%", "33%"],
          correct: 2,
          explanation: "P(blue) = 3/10 = 30%."
        },
        {
          id: "TMP1215_3_17",
          question: "If 60% of students passed an exam and there are 45 students total, how many students passed?",
          hint: "Multiply the total by the percentage: 45 × 0.60.",
          options: ["24", "25", "27", "30"],
          correct: 2,
          explanation: "45 × 0.60 = 27 students passed."
        },
        {
          id: "TMP1215_3_18",
          question: "What is the probability of rolling a number greater than 4 on a single standard die?",
          hint: "Numbers greater than 4 are 5 and 6. That's 2 outcomes out of 6.",
          options: ["1/6", "1/4", "1/3", "1/2"],
          correct: 2,
          explanation: "Favorable outcomes: 5, 6 → 2 out of 6. P = 2/6 = 1/3."
        },
        {
          id: "TMP1215_3_19",
          question: "In a proportion grid, the rule is a/b = c/d. Given a = ?, b = 6, c = 4, d = 12, what is a?",
          hint: "Cross-multiply: a × 12 = 6 × 4. Solve for a.",
          options: ["2", "3", "4", "8"],
          correct: 0,
          explanation: "a/6 = 4/12 → 12a = 24 → a = 2."
        },
        {
          id: "TMP1215_3_20",
          question: "A car depreciates by 10% each year. If it costs $20,000 now, what is its value after 2 years?",
          hint: "After each year, the value is 90% of the previous year. Multiply by 0.90 twice.",
          options: ["$16,000", "$16,200", "$16,500", "$18,000"],
          correct: 1,
          explanation: "After 1 year: $20,000 × 0.90 = $18,000. After 2 years: $18,000 × 0.90 = $16,200."
        }
      ]
    },
    {
      level: 4,
      name: "Expert",
      description: "Advanced rate/distance problems, compound interest, optimization, and number theory.",
      exercises: [
        {
          id: "TMP1215_4_01",
          question: "Two trains start 300 km apart and head toward each other. Train A travels at 60 km/h and Train B at 40 km/h. How long until they meet?",
          hint: "Combined closing speed = 60 + 40 = 100 km/h. Time = distance ÷ speed.",
          options: ["2 hours", "2.5 hours", "3 hours", "5 hours"],
          correct: 2,
          explanation: "Combined speed = 60 + 40 = 100 km/h. Time = 300 ÷ 100 = 3 hours."
        },
        {
          id: "TMP1215_4_02",
          question: "You invest $1,000 at 10% annual compound interest for 3 years. What is the total amount?",
          hint: "A = P × (1 + r)ⁿ = 1000 × 1.10³.",
          options: ["$1,300", "$1,310", "$1,331", "$1,333"],
          correct: 2,
          explanation: "A = $1,000 × 1.10³ = $1,000 × 1.331 = $1,331."
        },
        {
          id: "TMP1215_4_03",
          question: "A farmer has 100 meters of fencing to enclose a rectangular pen. What is the maximum possible area?",
          hint: "Perimeter = 2(l + w) = 100, so l + w = 50. Area is maximized when l = w.",
          options: ["500 m²", "600 m²", "625 m²", "650 m²"],
          correct: 2,
          explanation: "l + w = 50. Maximum area when l = w = 25. Area = 25 × 25 = 625 m²."
        },
        {
          id: "TMP1215_4_04",
          question: "What is the remainder when 2¹⁰ is divided by 7?",
          hint: "Find the pattern: 2¹ = 2, 2² = 4, 2³ = 8 ≡ 1 (mod 7). The cycle repeats every 3 powers.",
          options: ["1", "2", "3", "4"],
          correct: 1,
          explanation: "2³ ≡ 1 (mod 7). So 2¹⁰ = 2⁹ × 2¹ = (2³)³ × 2 ≡ 1³ × 2 = 2 (mod 7). Remainder is 2."
        },
        {
          id: "TMP1215_4_05",
          question: "A boat goes 20 km upstream in 5 hours and 20 km downstream in 2 hours. What is the speed of the current?",
          hint: "Upstream speed = 20/5, downstream speed = 20/2. Current = (downstream − upstream) ÷ 2.",
          options: ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
          correct: 1,
          explanation: "Upstream speed = 4 km/h, downstream speed = 10 km/h. Current = (10 − 4) ÷ 2 = 3 km/h."
        },
        {
          id: "TMP1215_4_06",
          question: "$5,000 is invested at 8% annual compound interest for 2 years. How much interest is earned?",
          hint: "A = 5000 × 1.08². Interest = A − 5000.",
          options: ["$800", "$816", "$832", "$850"],
          correct: 2,
          explanation: "A = $5,000 × 1.08² = $5,000 × 1.1664 = $5,832. Interest = $5,832 − $5,000 = $832."
        },
        {
          id: "TMP1215_4_07",
          question: "What is the largest prime factor of 84?",
          hint: "Break 84 into prime factors: 84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7.",
          options: ["3", "5", "7", "11"],
          correct: 2,
          explanation: "84 = 2² × 3 × 7. The largest prime factor is 7."
        },
        {
          id: "TMP1215_4_08",
          question: "A train 200 m long passes a pole in 10 seconds. How long does it take to pass a platform that is 300 m long?",
          hint: "Speed = 200/10 = 20 m/s. To pass the platform, the train must cover its own length plus the platform length.",
          options: ["15 seconds", "20 seconds", "25 seconds", "30 seconds"],
          correct: 2,
          explanation: "Speed = 200 ÷ 10 = 20 m/s. Total distance = 200 + 300 = 500 m. Time = 500 ÷ 20 = 25 seconds."
        },
        {
          id: "TMP1215_4_09",
          question: "An open-top box with a square base has a surface area of 108 cm². What is the maximum volume?",
          hint: "SA = s² + 4sh = 108. Express h in terms of s, substitute into V = s²h, and find the maximum.",
          options: ["96 cm³", "100 cm³", "108 cm³", "120 cm³"],
          correct: 2,
          explanation: "V = s²h, with h = (108 − s²)/(4s). V = s(108 − s²)/4. Setting dV/ds = 0 gives s = 6, h = 3. Max volume = 36 × 3 = 108 cm³."
        },
        {
          id: "TMP1215_4_10",
          question: "What is the remainder when 123,456 is divided by 9?",
          hint: "A number's remainder when divided by 9 equals the remainder of its digit sum divided by 9.",
          options: ["0", "1", "3", "6"],
          correct: 2,
          explanation: "Digit sum = 1 + 2 + 3 + 4 + 5 + 6 = 21. Then 2 + 1 = 3. Remainder is 3."
        },
        {
          id: "TMP1215_4_11",
          question: "Two trains leave the same station in opposite directions at 80 km/h and 60 km/h. After how many hours are they 490 km apart?",
          hint: "Combined separation speed = 80 + 60 = 140 km/h. Time = distance ÷ speed.",
          options: ["3 hours", "3.5 hours", "4 hours", "4.5 hours"],
          correct: 1,
          explanation: "Combined speed = 80 + 60 = 140 km/h. Time = 490 ÷ 140 = 3.5 hours."
        },
        {
          id: "TMP1215_4_12",
          question: "Using the Rule of 72, approximately how many years will it take to double $1,000 at 10% annual compound interest?",
          hint: "The Rule of 72: divide 72 by the interest rate percentage.",
          options: ["5.2 years", "7.2 years", "10 years", "14.4 years"],
          correct: 1,
          explanation: "Rule of 72: 72 ÷ 10 = 7.2 years. (The exact answer is about 7.27 years.)"
        },
        {
          id: "TMP1215_4_13",
          question: "How many positive factors does 60 have?",
          hint: "Prime factorize: 60 = 2² × 3 × 5. Use (e₁+1)(e₂+1)(e₃+1) for factor count.",
          options: ["8", "10", "12", "15"],
          correct: 2,
          explanation: "60 = 2² × 3¹ × 5¹. Number of factors = (2+1)(1+1)(1+1) = 3 × 2 × 2 = 12."
        },
        {
          id: "TMP1215_4_14",
          question: "A car travels from A to B at 40 km/h and returns at 60 km/h. What is the average speed for the round trip?",
          hint: "Average speed for a round trip = 2 × s₁ × s₂ ÷ (s₁ + s₂), not the simple average.",
          options: ["48 km/h", "50 km/h", "52 km/h", "55 km/h"],
          correct: 0,
          explanation: "Average speed = 2 × 40 × 60 ÷ (40 + 60) = 4,800 ÷ 100 = 48 km/h."
        },
        {
          id: "TMP1215_4_15",
          question: "The sum of two positive numbers is 20. What is the maximum value of their product?",
          hint: "By the AM-GM inequality, the product is maximized when both numbers are equal.",
          options: ["96", "99", "100", "110"],
          correct: 2,
          explanation: "x + y = 20. Product xy is maximized when x = y = 10. Maximum product = 10 × 10 = 100."
        },
        {
          id: "TMP1215_4_16",
          question: "A number leaves a remainder of 3 when divided by 5, and a remainder of 2 when divided by 3. What is the smallest such positive number?",
          hint: "List multiples: x = 3, 8, 13, 18, ... (mod 5) and x = 2, 5, 8, 11, ... (mod 3). Find the first match.",
          options: ["7", "8", "11", "13"],
          correct: 1,
          explanation: "x ≡ 3 (mod 5): 3, 8, 13, 18, ... and x ≡ 2 (mod 3): 2, 5, 8, 11, ... The smallest common value is 8."
        },
        {
          id: "TMP1215_4_17",
          question: "A and B start at the same point and walk in opposite directions at 5 km/h and 3 km/h. After 2 hours, A turns around and walks toward B at 5 km/h. How long after turning does A catch B?",
          hint: "After 2 hours they are 16 km apart. A now closes the gap at 5 − (−3) = effectively 5 + 3 = ... wait, check directions carefully.",
          options: ["4 hours", "6 hours", "8 hours", "10 hours"],
          correct: 2,
          explanation: "After 2 h: A is 10 km away, B is 6 km in the opposite direction → 16 km apart. A now moves toward B at 5 km/h; B continues away at 3 km/h. A closes the gap at 5 − 3 = 2 km/h. Time = 16 ÷ 2 = 8 hours."
        },
        {
          id: "TMP1215_4_18",
          question: "$2,000 is invested at 5% compound interest, compounded annually. What is the total amount after 4 years?",
          hint: "A = P(1 + r)ⁿ = 2000 × 1.05⁴.",
          options: ["$2,400.00", "$2,420.50", "$2,431.01", "$2,500.00"],
          correct: 2,
          explanation: "A = $2,000 × 1.05⁴ = $2,000 × 1.21550625 = $2,431.01."
        },
        {
          id: "TMP1215_4_19",
          question: "What is the greatest common divisor (GCD) of 84 and 120?",
          hint: "Prime factorize both: 84 = 2² × 3 × 7, 120 = 2³ × 3 × 5. GCD uses the lowest powers of shared primes.",
          options: ["6", "8", "12", "24"],
          correct: 2,
          explanation: "84 = 2² × 3 × 7, 120 = 2³ × 3 × 5. Shared primes at lowest power: 2² × 3 = 12."
        },
        {
          id: "TMP1215_4_20",
          question: "The product of two positive integers is 96. What is the minimum possible sum of these two integers?",
          hint: "List factor pairs and find the pair closest to √96 ≈ 9.8. Closer factors give a smaller sum.",
          options: ["18", "20", "22", "28"],
          correct: 1,
          explanation: "Factor pairs of 96: (1,96), (2,48), (3,32), (4,24), (6,16), (8,12). The pair (8,12) has the smallest sum: 8 + 12 = 20."
        }
      ]
    }
  ]
};
