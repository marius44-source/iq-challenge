const TRAINING_LR_12_15 = {
  tips: [
    {
      title: "Break Down Complex Statements",
      content: "When faced with a complex logical statement, split it into smaller parts. Identify the given facts, the relationships between them, and what the question is actually asking. Write each condition separately and work through them one at a time."
    },
    {
      title: "Use the Contrapositive",
      content: "If a statement says 'If P then Q,' the contrapositive 'If not Q then not P' is always equally true. For example, 'If it rains, the ground is wet' also means 'If the ground is not wet, it did not rain.' This technique is powerful for drawing conclusions from negative information."
    },
    {
      title: "Draw Diagrams and Tables",
      content: "Venn diagrams, number lines, and ordered lists are your best friends in logical reasoning. For set problems use overlapping circles, for ordering problems write items in a line, and for scheduling problems use a timeline. A quick sketch often reveals the answer faster than pure mental reasoning."
    },
    {
      title: "Eliminate Wrong Answers",
      content: "When stuck, work backwards by testing each answer option. Plug each choice into the conditions given in the problem and see which one does not create a contradiction. Often you can rule out two or three options quickly, leaving only the correct answer."
    }
  ],
  levels: [
    {
      level: 1,
      name: "Foundation",
      description: "Build core skills with position-from-both-ends problems and simple two-set inclusion-exclusion counting.",
      exercises: [
        {
          id: "TLR1215_1_01",
          question: "In a row of students, Emma is 4th from the left and 5th from the right. How many students are in the row?",
          hint: "Add the two positions and subtract 1, because Emma is counted in both.",
          options: ["8", "9", "7", "10"],
          correct: 0,
          explanation: "4 + 5 − 1 = 8 students."
        },
        {
          id: "TLR1215_1_02",
          question: "In a line, Tom is 6th from the left and 3rd from the right. How many people are in the line?",
          hint: "Add his positions from both ends and subtract 1.",
          options: ["7", "8", "9", "6"],
          correct: 1,
          explanation: "6 + 3 − 1 = 8 people."
        },
        {
          id: "TLR1215_1_03",
          question: "Sarah is 5th from the front and 7th from the back in a queue. How many people are in the queue?",
          hint: "Total = position from front + position from back − 1.",
          options: ["12", "10", "11", "13"],
          correct: 2,
          explanation: "5 + 7 − 1 = 11 people."
        },
        {
          id: "TLR1215_1_04",
          question: "Jake stands 3rd from the left end and 8th from the right end of a row. How many people are in the row?",
          hint: "Add both positions, then subtract 1 to avoid double-counting Jake.",
          options: ["10", "9", "11", "8"],
          correct: 0,
          explanation: "3 + 8 − 1 = 10 people."
        },
        {
          id: "TLR1215_1_05",
          question: "Lily is 7th from the left and 4th from the right in a row of children. How many children are there?",
          hint: "Use the formula: left position + right position − 1.",
          options: ["11", "10", "9", "12"],
          correct: 1,
          explanation: "7 + 4 − 1 = 10 children."
        },
        {
          id: "TLR1215_1_06",
          question: "Ben is 9th from the left and 2nd from the right. How many people are standing in the row?",
          hint: "Add the two positions and subtract 1.",
          options: ["9", "11", "10", "12"],
          correct: 2,
          explanation: "9 + 2 − 1 = 10 people."
        },
        {
          id: "TLR1215_1_07",
          question: "Maya is 2nd from the left and 6th from the right in a line. How many people are in the line?",
          hint: "Total = left position + right position − 1.",
          options: ["8", "6", "9", "7"],
          correct: 3,
          explanation: "2 + 6 − 1 = 7 people."
        },
        {
          id: "TLR1215_1_08",
          question: "Chris is exactly in the middle of a row. He is 5th from the left and 5th from the right. How many people are in the row?",
          hint: "Even when someone is in the middle, the same formula applies.",
          options: ["10", "8", "9", "11"],
          correct: 2,
          explanation: "5 + 5 − 1 = 9 people."
        },
        {
          id: "TLR1215_1_09",
          question: "Anna is 8th from the left and 6th from the right in a row. How many people are in the row?",
          hint: "Add the two positions and subtract 1.",
          options: ["14", "12", "15", "13"],
          correct: 3,
          explanation: "8 + 6 − 1 = 13 people."
        },
        {
          id: "TLR1215_1_10",
          question: "David is 10th from the left and 3rd from the right. How many people are in the row?",
          hint: "Total = left position + right position − 1.",
          options: ["12", "11", "13", "10"],
          correct: 0,
          explanation: "10 + 3 − 1 = 12 people."
        },
        {
          id: "TLR1215_1_11",
          question: "In a class of 20 students, 12 like soccer and 10 like basketball. If every student likes at least one of the two sports, how many like both?",
          hint: "Use inclusion-exclusion: Both = A + B − Total.",
          options: ["2", "3", "4", "1"],
          correct: 0,
          explanation: "12 + 10 − 20 = 2 students like both."
        },
        {
          id: "TLR1215_1_12",
          question: "Out of 30 students, 18 like math and 20 like science. Every student likes at least one subject. How many like both?",
          hint: "Both = number who like math + number who like science − total students.",
          options: ["10", "6", "8", "12"],
          correct: 2,
          explanation: "18 + 20 − 30 = 8 students like both."
        },
        {
          id: "TLR1215_1_13",
          question: "In a group of 25 students, 15 enjoy reading and 16 enjoy writing. Everyone enjoys at least one activity. How many enjoy both?",
          hint: "Apply inclusion-exclusion: Both = A + B − Total.",
          options: ["5", "7", "6", "8"],
          correct: 2,
          explanation: "15 + 16 − 25 = 6 enjoy both."
        },
        {
          id: "TLR1215_1_14",
          question: "In a music school of 40 students, 25 play piano and 22 play guitar. Every student plays at least one instrument. How many play both?",
          hint: "Both = piano players + guitar players − total students.",
          options: ["5", "8", "9", "7"],
          correct: 3,
          explanation: "25 + 22 − 40 = 7 play both."
        },
        {
          id: "TLR1215_1_15",
          question: "A survey of 35 students shows 20 like cats and 23 like dogs. Every student likes at least one. How many like both cats and dogs?",
          hint: "Use the formula: Both = A + B − Total.",
          options: ["8", "7", "9", "6"],
          correct: 0,
          explanation: "20 + 23 − 35 = 8 like both."
        },
        {
          id: "TLR1215_1_16",
          question: "50 people were surveyed: 30 like apples and 35 like oranges. Everyone likes at least one fruit. How many like both?",
          hint: "Both = apples + oranges − total people.",
          options: ["10", "20", "12", "15"],
          correct: 3,
          explanation: "30 + 35 − 50 = 15 like both."
        },
        {
          id: "TLR1215_1_17",
          question: "28 students participate in sports: 18 swim and 15 run. Every student does at least one sport. How many do both?",
          hint: "Both = swimmers + runners − total.",
          options: ["3", "5", "4", "7"],
          correct: 1,
          explanation: "18 + 15 − 28 = 5 do both."
        },
        {
          id: "TLR1215_1_18",
          question: "22 students signed up for clubs: 14 joined the art club and 13 joined the music club. Everyone is in at least one club. How many are in both?",
          hint: "Both = art + music − total.",
          options: ["6", "5", "4", "7"],
          correct: 1,
          explanation: "14 + 13 − 22 = 5 are in both clubs."
        },
        {
          id: "TLR1215_1_19",
          question: "In a class of 45 students, 28 like history and 30 like geography. Every student likes at least one. How many like both subjects?",
          hint: "Both = history + geography − total.",
          options: ["15", "12", "14", "13"],
          correct: 3,
          explanation: "28 + 30 − 45 = 13 like both."
        },
        {
          id: "TLR1215_1_20",
          question: "32 students play racket sports: 20 play tennis and 18 play badminton. Every student plays at least one. How many play both?",
          hint: "Both = tennis + badminton − total.",
          options: ["8", "4", "6", "5"],
          correct: 2,
          explanation: "20 + 18 − 32 = 6 play both."
        }
      ]
    },
    {
      level: 2,
      name: "Developing",
      description: "Strengthen reasoning with multi-step ordering of four or more items and day-of-the-week calculations.",
      exercises: [
        {
          id: "TLR1215_2_01",
          question: "Five runners finish a race. A finishes before B but after C. D finishes before C. E finishes after B. Who finishes third?",
          hint: "Chain the clues: D before C, C before A, A before B, B before E.",
          options: ["B", "C", "A", "D"],
          correct: 2,
          explanation: "Order: D, C, A, B, E. Third place is A."
        },
        {
          id: "TLR1215_2_02",
          question: "Five friends are ranked by height. Felix is taller than Grace. Harry is taller than Felix. Ivy is shorter than Grace. Jack is the tallest. Who is in the middle?",
          hint: "Order them from tallest to shortest and pick the 3rd.",
          options: ["Felix", "Grace", "Harry", "Ivy"],
          correct: 0,
          explanation: "Order: Jack, Harry, Felix, Grace, Ivy. The middle (3rd) is Felix."
        },
        {
          id: "TLR1215_2_03",
          question: "Five cars are ranked by speed. P is faster than Q. R is faster than P. S is slower than Q. T is between P and R. Who is second fastest?",
          hint: "Build the chain from fastest to slowest.",
          options: ["P", "T", "Q", "S"],
          correct: 1,
          explanation: "Order: R, T, P, Q, S. Second fastest is T."
        },
        {
          id: "TLR1215_2_04",
          question: "Five fruits are ranked by price. Apple costs more than Banana. Cherry costs less than Banana. Date costs more than Apple. Elderberry costs less than Cherry. Which is cheapest?",
          hint: "Arrange from most expensive to least expensive.",
          options: ["Apple", "Banana", "Cherry", "Elderberry"],
          correct: 3,
          explanation: "Order: Date, Apple, Banana, Cherry, Elderberry. Elderberry is cheapest."
        },
        {
          id: "TLR1215_2_05",
          question: "Five boxes are ranked by weight. Box A is heavier than B. C is heavier than A. D is lighter than B. E is between A and C. Which box is 4th heaviest?",
          hint: "Build the order from heaviest to lightest.",
          options: ["A", "B", "C", "D"],
          correct: 1,
          explanation: "Order: C, E, A, B, D. The 4th heaviest is B."
        },
        {
          id: "TLR1215_2_06",
          question: "Five students took a test. Mia scored higher than Noah. Olivia scored higher than Mia. Pete scored lower than Noah. Quinn scored higher than Olivia. Who scored third highest?",
          hint: "Chain: Quinn > Olivia > Mia > Noah > Pete.",
          options: ["Mia", "Noah", "Olivia", "Pete"],
          correct: 0,
          explanation: "Order: Quinn, Olivia, Mia, Noah, Pete. Third highest is Mia."
        },
        {
          id: "TLR1215_2_07",
          question: "Five trees are compared by height. Oak is taller than Pine. Maple is taller than Oak. Birch is shorter than Pine. Elm is taller than Maple. Which tree is second tallest?",
          hint: "Build the ranking from tallest to shortest.",
          options: ["Oak", "Birch", "Elm", "Maple"],
          correct: 3,
          explanation: "Order: Elm, Maple, Oak, Pine, Birch. Second tallest is Maple."
        },
        {
          id: "TLR1215_2_08",
          question: "Four cities are compared by temperature. W is warmer than X. Y is cooler than X. Z is warmer than W. How many cities are warmer than X?",
          hint: "Rank from warmest to coolest and count those above X.",
          options: ["1", "3", "2", "4"],
          correct: 2,
          explanation: "Order: Z, W, X, Y. Two cities (Z and W) are warmer than X."
        },
        {
          id: "TLR1215_2_09",
          question: "Five rivers are ranked by length. River A is longer than B. C is longer than A. D is shorter than B. E is longer than C. Which river is in the middle?",
          hint: "Build the full ranking from longest to shortest.",
          options: ["A", "B", "C", "D"],
          correct: 0,
          explanation: "Order: E, C, A, B, D. The middle (3rd) river is A."
        },
        {
          id: "TLR1215_2_10",
          question: "Five students are compared by age. Carl is older than Amy. Ed is between Amy and Carl. Amy is older than Ben. Diana is younger than Ben. Who is 3rd oldest?",
          hint: "Chain all the comparisons to form a complete ranking.",
          options: ["Ben", "Diana", "Carl", "Amy"],
          correct: 3,
          explanation: "Order: Carl, Ed, Amy, Ben, Diana. The 3rd oldest is Amy."
        },
        {
          id: "TLR1215_2_11",
          question: "Today is Monday. What day of the week will it be 10 days from now?",
          hint: "Divide 10 by 7 and add the remainder to Monday.",
          options: ["Wednesday", "Thursday", "Friday", "Saturday"],
          correct: 1,
          explanation: "10 ÷ 7 = 1 remainder 3. Monday + 3 days = Thursday."
        },
        {
          id: "TLR1215_2_12",
          question: "If the day after tomorrow is Friday, what day is today?",
          hint: "Work backwards: if day after tomorrow is Friday, then tomorrow is Thursday…",
          options: ["Wednesday", "Monday", "Tuesday", "Thursday"],
          correct: 0,
          explanation: "Day after tomorrow = Friday → tomorrow = Thursday → today = Wednesday."
        },
        {
          id: "TLR1215_2_13",
          question: "If yesterday was Sunday, what day will it be 5 days from now?",
          hint: "First find today, then count forward 5 days.",
          options: ["Friday", "Thursday", "Saturday", "Sunday"],
          correct: 2,
          explanation: "Yesterday = Sunday → today = Monday. Monday + 5 = Saturday."
        },
        {
          id: "TLR1215_2_14",
          question: "Today is Wednesday. What day of the week was it 15 days ago?",
          hint: "Divide 15 by 7 to find how many full weeks plus extra days to go back.",
          options: ["Monday", "Thursday", "Wednesday", "Tuesday"],
          correct: 3,
          explanation: "15 ÷ 7 = 2 remainder 1. Wednesday − 1 day = Tuesday."
        },
        {
          id: "TLR1215_2_15",
          question: "If tomorrow is Saturday, what day was it 3 days ago?",
          hint: "First find today, then count back 3 days.",
          options: ["Tuesday", "Monday", "Wednesday", "Thursday"],
          correct: 0,
          explanation: "Tomorrow = Saturday → today = Friday. Friday − 3 days = Tuesday."
        },
        {
          id: "TLR1215_2_16",
          question: "Today is Thursday. What day of the week will it be in 23 days?",
          hint: "23 mod 7 gives the number of extra days beyond full weeks.",
          options: ["Sunday", "Friday", "Saturday", "Monday"],
          correct: 2,
          explanation: "23 ÷ 7 = 3 remainder 2. Thursday + 2 = Saturday."
        },
        {
          id: "TLR1215_2_17",
          question: "If 2 days ago was Tuesday, what day will it be in 4 days?",
          hint: "Find today first, then add 4.",
          options: ["Sunday", "Wednesday", "Tuesday", "Monday"],
          correct: 3,
          explanation: "2 days ago = Tuesday → today = Thursday. Thursday + 4 = Monday."
        },
        {
          id: "TLR1215_2_18",
          question: "Today is Sunday. Maria's birthday is in 30 days. What day of the week is her birthday?",
          hint: "30 mod 7 tells you how many days past full weeks.",
          options: ["Thursday", "Tuesday", "Monday", "Wednesday"],
          correct: 1,
          explanation: "30 ÷ 7 = 4 remainder 2. Sunday + 2 = Tuesday."
        },
        {
          id: "TLR1215_2_19",
          question: "If the day before yesterday was Friday, what day will it be the day after tomorrow?",
          hint: "Work from 'day before yesterday' to find today, then go forward.",
          options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
          correct: 2,
          explanation: "Day before yesterday = Friday → yesterday = Saturday → today = Sunday. Day after tomorrow = Tuesday."
        },
        {
          id: "TLR1215_2_20",
          question: "Today is Saturday. A school project is due in 45 days. On what day of the week is the deadline?",
          hint: "Find 45 mod 7, then count forward from Saturday.",
          options: ["Wednesday", "Monday", "Thursday", "Tuesday"],
          correct: 3,
          explanation: "45 ÷ 7 = 6 remainder 3. Saturday + 3 = Tuesday."
        }
      ]
    },
    {
      level: 3,
      name: "Advanced",
      description: "Tackle inclusion-exclusion with a 'neither' group, contrapositive reasoning, and negation of logical statements.",
      exercises: [
        {
          id: "TLR1215_3_01",
          question: "In a club of 50 students, 30 play chess, 25 play checkers, and 10 play both. How many play neither?",
          hint: "First find how many play at least one: A + B − Both. Then subtract from total.",
          options: ["5", "10", "15", "0"],
          correct: 0,
          explanation: "At least one = 30 + 25 − 10 = 45. Neither = 50 − 45 = 5."
        },
        {
          id: "TLR1215_3_02",
          question: "40 people were surveyed: 22 drink coffee, 18 drink tea, and 8 drink both. How many drink neither?",
          hint: "Use inclusion-exclusion to find those who drink at least one, then subtract from 40.",
          options: ["10", "6", "8", "12"],
          correct: 2,
          explanation: "At least one = 22 + 18 − 8 = 32. Neither = 40 − 32 = 8."
        },
        {
          id: "TLR1215_3_03",
          question: "60 students were asked about sports: 35 play soccer, 28 play cricket, and 12 play both. How many play neither sport?",
          hint: "Neither = Total − (Soccer + Cricket − Both).",
          options: ["7", "11", "5", "9"],
          correct: 3,
          explanation: "At least one = 35 + 28 − 12 = 51. Neither = 60 − 51 = 9."
        },
        {
          id: "TLR1215_3_04",
          question: "100 people were surveyed about desserts: 55 like chocolate, 45 like vanilla, and 20 like both. How many like neither?",
          hint: "Subtract the union from the total.",
          options: ["20", "15", "25", "30"],
          correct: 0,
          explanation: "At least one = 55 + 45 − 20 = 80. Neither = 100 − 80 = 20."
        },
        {
          id: "TLR1215_3_05",
          question: "80 students study languages: 45 study French, 40 study Spanish, and 15 study both. How many study neither language?",
          hint: "Find the union first, then subtract from 80.",
          options: ["5", "10", "15", "20"],
          correct: 1,
          explanation: "At least one = 45 + 40 − 15 = 70. Neither = 80 − 70 = 10."
        },
        {
          id: "TLR1215_3_06",
          question: "36 students were asked about pets: 20 have a cat, 18 have a dog, and 7 have both. How many have neither pet?",
          hint: "Neither = Total − (Cat + Dog − Both).",
          options: ["3", "7", "4", "5"],
          correct: 3,
          explanation: "At least one = 20 + 18 − 7 = 31. Neither = 36 − 31 = 5."
        },
        {
          id: "TLR1215_3_07",
          question: "75 people were asked about reading: 40 read fiction, 30 read non-fiction, and 10 read both. How many read neither?",
          hint: "Compute the union, then subtract from 75.",
          options: ["15", "10", "20", "5"],
          correct: 0,
          explanation: "At least one = 40 + 30 − 10 = 60. Neither = 75 − 60 = 15."
        },
        {
          id: "TLR1215_3_08",
          question: "Given: 'If it rains, then the ground is wet.' You observe that the ground is NOT wet. What can you conclude?",
          hint: "Use the contrapositive: if not Q then not P.",
          options: ["It did not rain", "It rained", "The ground is wet", "Nothing can be concluded"],
          correct: 0,
          explanation: "Contrapositive of 'If rain → wet ground' is 'If ground not wet → no rain.' So it did not rain."
        },
        {
          id: "TLR1215_3_09",
          question: "Given: 'If a number is divisible by 6, then it is divisible by 3.' A number is NOT divisible by 3. What can you conclude?",
          hint: "Apply the contrapositive: not divisible by 3 → not divisible by 6.",
          options: ["It is not divisible by 6", "It might be divisible by 6", "It is divisible by 6", "It is divisible by 3"],
          correct: 0,
          explanation: "Contrapositive: not divisible by 3 → not divisible by 6."
        },
        {
          id: "TLR1215_3_10",
          question: "Given: 'If an animal is a dog, then it has four legs.' An animal does NOT have four legs. What follows?",
          hint: "Contrapositive: not four legs → not a dog.",
          options: ["It is a dog", "It might be a dog", "It has four legs", "It is not a dog"],
          correct: 3,
          explanation: "Contrapositive of 'dog → four legs' is 'not four legs → not a dog.'"
        },
        {
          id: "TLR1215_3_11",
          question: "Given: 'If Sarah passes the exam, she will get a certificate.' Sarah did NOT get a certificate. What can you conclude?",
          hint: "Use the contrapositive: no certificate → did not pass.",
          options: ["She passed the exam", "She got a certificate", "She might have passed", "She did not pass the exam"],
          correct: 3,
          explanation: "Contrapositive: no certificate → did not pass the exam."
        },
        {
          id: "TLR1215_3_12",
          question: "Given: 'If a shape is a square, then it has four equal sides.' A shape does NOT have four equal sides. What follows?",
          hint: "Contrapositive: not four equal sides → not a square.",
          options: ["It is a square", "It is not a square", "It has four equal sides", "Nothing follows"],
          correct: 1,
          explanation: "Contrapositive: not four equal sides → not a square."
        },
        {
          id: "TLR1215_3_13",
          question: "Given: 'If you are in Paris, then you are in France.' You are NOT in France. What can you conclude?",
          hint: "Apply the contrapositive to the given statement.",
          options: ["You might be in Paris", "You are in Paris", "You are in France", "You are not in Paris"],
          correct: 3,
          explanation: "Contrapositive: not in France → not in Paris."
        },
        {
          id: "TLR1215_3_14",
          question: "Given: 'If a student studies hard, they will pass.' A student did NOT pass. What follows?",
          hint: "Contrapositive: did not pass → did not study hard.",
          options: ["The student did not study hard", "The student studied hard", "Nothing follows", "The student might have studied"],
          correct: 0,
          explanation: "Contrapositive: did not pass → did not study hard."
        },
        {
          id: "TLR1215_3_15",
          question: "The statement 'All cats are mammals' is true. Which of the following must also be true?",
          hint: "Think about what logically follows from 'All A are B.'",
          options: ["All mammals are cats", "If something is a cat, it is a mammal", "Some mammals are cats", "No mammals are cats"],
          correct: 1,
          explanation: "'All cats are mammals' is equivalent to 'If something is a cat, it is a mammal.'"
        },
        {
          id: "TLR1215_3_16",
          question: "Someone claims 'No fish can fly.' Which observation would disprove this claim?",
          hint: "To disprove 'no X can Y,' find even one X that can Y.",
          options: ["Eagles can fly", "Flying fish exist", "Sharks swim fast", "All birds have feathers"],
          correct: 1,
          explanation: "Finding even one fish that can fly (flying fish) disproves 'No fish can fly.'"
        },
        {
          id: "TLR1215_3_17",
          question: "What is the logical negation of 'All students passed the exam'?",
          hint: "The negation of 'All A are B' is 'There exists an A that is not B.'",
          options: ["No students passed", "All students failed", "At least one student did not pass", "Some students passed"],
          correct: 2,
          explanation: "The negation of 'All students passed' is 'At least one student did not pass.'"
        },
        {
          id: "TLR1215_3_18",
          question: "The statement 'Some dogs are large' is true. Which of the following MUST also be true?",
          hint: "'Some A are B' guarantees at least one A is B.",
          options: ["At least one dog is large", "No dogs are large", "All dogs are large", "All large animals are dogs"],
          correct: 0,
          explanation: "'Some dogs are large' means at least one dog is large."
        },
        {
          id: "TLR1215_3_19",
          question: "If the statement 'Not all birds can fly' is true, which of the following is also true?",
          hint: "'Not all A can B' means there exists at least one A that cannot B.",
          options: ["No birds can fly", "All birds can fly", "At least one bird cannot fly", "Every bird can fly"],
          correct: 2,
          explanation: "'Not all birds can fly' means at least one bird cannot fly."
        },
        {
          id: "TLR1215_3_20",
          question: "What is the logical negation of 'There exists a number greater than 100'?",
          hint: "The negation of 'there exists an A with property P' is 'no A has property P.'",
          options: ["All numbers are greater than 100", "No number is greater than 100", "Some numbers are greater than 100", "At least one number equals 100"],
          correct: 1,
          explanation: "The negation of 'there exists a number > 100' is 'no number is greater than 100.'"
        }
      ]
    },
    {
      level: 4,
      name: "Expert",
      description: "Master complex deduction chains, three-set Venn diagrams, truth-teller/liar puzzles, and biconditional (if-and-only-if) logic.",
      exercises: [
        {
          id: "TLR1215_4_01",
          question: "Six people (A–F) are ranked from highest to lowest. A is ranked higher than B. C is ranked higher than D. E is ranked higher than A. B is ranked higher than C. F is ranked higher than E. Who is ranked 4th?",
          hint: "Build the chain step by step: F > E > A > B > C > D.",
          options: ["A", "B", "C", "D"],
          correct: 1,
          explanation: "Full order: F, E, A, B, C, D. The 4th ranked is B."
        },
        {
          id: "TLR1215_4_02",
          question: "Seven items are ranked by weight. A is heavier than B. B is heavier than C. D is heavier than A. C is heavier than E. F is heavier than D. E is heavier than G. Which item is 5th heaviest?",
          hint: "Chain all comparisons: F > D > A > B > C > E > G.",
          options: ["B", "D", "C", "E"],
          correct: 2,
          explanation: "Full order: F, D, A, B, C, E, G. The 5th heaviest is C."
        },
        {
          id: "TLR1215_4_03",
          question: "Six cities are ranked by population. City A has more people than B. C has fewer people than D. D has fewer than A. E has more people than A. B has fewer people than D but more than C. F has fewer people than C. Which city has the 3rd largest population?",
          hint: "Build: E > A > D > B > C > F.",
          options: ["A", "B", "C", "D"],
          correct: 3,
          explanation: "Full order: E, A, D, B, C, F. The 3rd largest is D."
        },
        {
          id: "TLR1215_4_04",
          question: "Five athletes are ranked by speed. Ana is faster than Ben. Ben is faster than Carlos. Diana is faster than Ana. Eric is slower than Carlos. Who is 3rd fastest?",
          hint: "Chain: Diana > Ana > Ben > Carlos > Eric.",
          options: ["Ana", "Ben", "Carlos", "Diana"],
          correct: 1,
          explanation: "Full order: Diana, Ana, Ben, Carlos, Eric. The 3rd fastest is Ben."
        },
        {
          id: "TLR1215_4_05",
          question: "Six people (A–F) are ranked 1st to 6th. A is ranked higher than B. C is ranked exactly two places above D. E is ranked immediately below A. B is ranked 5th. F is ranked higher than A. Who is ranked 4th?",
          hint: "Start from B = 5th. F > A and E is right below A. Try placements systematically.",
          options: ["D", "B", "A", "C"],
          correct: 3,
          explanation: "B = 5th. F > A, E right below A. If A = 2nd, then F = 1st, E = 3rd. C two above D: C = 4th, D = 6th. Order: F, A, E, C, B, D. 4th is C."
        },
        {
          id: "TLR1215_4_06",
          question: "100 students were surveyed: 40 take Math, 35 take Science, 30 take English, 15 take Math and Science, 10 take Math and English, 12 take Science and English, and 5 take all three. How many take at least one subject?",
          hint: "Use three-set inclusion-exclusion: |A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|.",
          options: ["73", "78", "68", "80"],
          correct: 0,
          explanation: "40 + 35 + 30 − 15 − 10 − 12 + 5 = 73."
        },
        {
          id: "TLR1215_4_07",
          question: "Using the same data: 100 students, 40 Math, 35 Science, 30 English, 15 M∩S, 10 M∩E, 12 S∩E, 5 all three. How many take NONE of the three subjects?",
          hint: "None = Total − at least one.",
          options: ["22", "32", "27", "17"],
          correct: 2,
          explanation: "At least one = 73 (from inclusion-exclusion). None = 100 − 73 = 27."
        },
        {
          id: "TLR1215_4_08",
          question: "80 people were asked about pets: 35 have dogs, 30 have cats, 20 have fish, 10 have dogs and cats, 8 have dogs and fish, 6 have cats and fish, 3 have all three. How many have NO pet?",
          hint: "Use three-set inclusion-exclusion, then subtract from 80.",
          options: ["14", "20", "18", "16"],
          correct: 3,
          explanation: "At least one = 35 + 30 + 20 − 10 − 8 − 6 + 3 = 64. No pet = 80 − 64 = 16."
        },
        {
          id: "TLR1215_4_09",
          question: "120 students play sports: 60 football, 50 basketball, 45 volleyball, 20 football & basketball, 15 football & volleyball, 18 basketball & volleyball, 8 all three. How many play exactly ONE sport?",
          hint: "Only A = |A| − |A∩B| − |A∩C| + |A∩B∩C|. Sum for all three sports.",
          options: ["73", "65", "80", "70"],
          correct: 0,
          explanation: "Only football = 60 − 20 − 15 + 8 = 33. Only basketball = 50 − 20 − 18 + 8 = 20. Only volleyball = 45 − 15 − 18 + 8 = 20. Total = 33 + 20 + 20 = 73."
        },
        {
          id: "TLR1215_4_10",
          question: "90 people were surveyed about music: 50 like rock, 40 like pop, 35 like jazz, 20 like rock & pop, 15 like rock & jazz, 10 like pop & jazz, 5 like all three. How many like ONLY rock?",
          hint: "Only rock = Rock − (Rock∩Pop) − (Rock∩Jazz) + (All three).",
          options: ["15", "25", "20", "10"],
          correct: 2,
          explanation: "Only rock = 50 − 20 − 15 + 5 = 20."
        },
        {
          id: "TLR1215_4_11",
          question: "On a logic island, knights always tell the truth and knaves always lie. You meet Alex and Beth. Alex says: 'We are both knaves.' What are Alex and Beth?",
          hint: "If Alex were a knight, his statement would be true — but then he'd be a knave. Contradiction!",
          options: ["Both are knights", "Alex is a knight, Beth is a knave", "Alex is a knave, Beth is a knight", "Both are knaves"],
          correct: 2,
          explanation: "If Alex is a knight, 'both knaves' is true — contradiction. So Alex is a knave, meaning his statement is false. Since Alex IS a knave, Beth must NOT be a knave. Beth is a knight."
        },
        {
          id: "TLR1215_4_12",
          question: "Knights always tell truth, knaves always lie. You meet X and Y. X says: 'At least one of us is a knave.' What are X and Y?",
          hint: "Test both cases: X as knight and X as knave.",
          options: ["X is a knight, Y is a knave", "X is a knave, Y is a knight", "Both are knights", "Both are knaves"],
          correct: 0,
          explanation: "If X is a knight, the statement is true → at least one knave → Y is a knave. If X is a knave, the statement is false → neither is a knave → X is a knight — contradiction. So X is a knight and Y is a knave."
        },
        {
          id: "TLR1215_4_13",
          question: "Knights always tell truth, knaves always lie. A says: 'B is a knight.' B says: 'We are different types.' What are A and B?",
          hint: "Test case 1: A is a knight → B is a knight → B says 'different types' (lie) → contradiction.",
          options: ["Both are knights", "A is a knight, B is a knave", "A is a knave, B is a knight", "Both are knaves"],
          correct: 3,
          explanation: "If A is knight → B is knight → B's claim 'different types' is false → B lies → contradiction. So A is a knave → 'B is knight' is false → B is a knave. B says 'different types' — both are knaves (same type), so the statement is false, consistent with B being a knave."
        },
        {
          id: "TLR1215_4_14",
          question: "Knights always tell truth, knaves always lie. Three people: A says 'Exactly one of us is a knave.' B says 'Exactly two of us are knaves.' C says nothing. If A is a knight, how many knaves are there among the three?",
          hint: "A is a knight → his statement is true → exactly one knave. Check if B's statement is consistent.",
          options: ["0", "1", "2", "3"],
          correct: 1,
          explanation: "A is a knight → 'exactly one knave' is true. B says 'exactly two' → false → B is the knave. C must be a knight. Exactly 1 knave (B)."
        },
        {
          id: "TLR1215_4_15",
          question: "Knights always tell truth, knaves always lie. A says: 'B and I are both knights.' B says: 'A is a knave.' What are A and B?",
          hint: "If A is a knight, then B is also a knight — but then B's statement 'A is a knave' would be a lie.",
          options: ["Both are knights", "A is a knight, B is a knave", "A is a knave, B is a knight", "Both are knaves"],
          correct: 2,
          explanation: "If A is knight → B is knight → B says 'A is knave' (lie) → contradiction. So A is a knave → 'both knights' is false (correct, A is knave). B says 'A is knave' → true → B is a knight."
        },
        {
          id: "TLR1215_4_16",
          question: "A rule states: 'A person can vote if and only if they are 18 or older.' Tom is 17. Can Tom vote?",
          hint: "'If and only if' means the condition is both necessary and sufficient.",
          options: ["Yes", "No", "Only with permission", "Sometimes"],
          correct: 1,
          explanation: "The biconditional means you can vote ↔ age ≥ 18. Tom is 17, so he cannot vote."
        },
        {
          id: "TLR1215_4_17",
          question: "A rule states: 'The alarm rings if and only if it is 7 AM.' The alarm is NOT ringing. What can you conclude?",
          hint: "Biconditional: alarm ↔ 7 AM. No alarm → not 7 AM.",
          options: ["It could be any time", "It is 7 AM", "It is not 7 AM", "Cannot determine"],
          correct: 2,
          explanation: "Biconditional: alarm ↔ 7 AM. The alarm is not ringing, so it is not 7 AM."
        },
        {
          id: "TLR1215_4_18",
          question: "A theorem states: 'A triangle is equilateral if and only if all its angles are 60°.' A triangle has three 60° angles. Is it equilateral?",
          hint: "The biconditional goes both ways: 60° angles ↔ equilateral.",
          options: ["Yes", "No", "Not enough information", "Only if its sides are also equal"],
          correct: 0,
          explanation: "Biconditional: equilateral ↔ all angles 60°. All angles are 60°, so it is equilateral."
        },
        {
          id: "TLR1215_4_19",
          question: "A rule states: 'You get a trophy if and only if you win first place.' You did NOT get a trophy. What can you conclude?",
          hint: "No trophy → did not win first place (by the biconditional).",
          options: ["You did not win first place", "You won first place", "You might have won", "Cannot determine"],
          correct: 0,
          explanation: "Biconditional: trophy ↔ first place. No trophy → did not win first place."
        },
        {
          id: "TLR1215_4_20",
          question: "A definition states: 'A number is even if and only if it is divisible by 2.' The number 15 is not divisible by 2. What follows?",
          hint: "Apply the biconditional: not divisible by 2 → not even.",
          options: ["15 might be even", "15 is even", "Cannot determine", "15 is not even"],
          correct: 3,
          explanation: "Biconditional: even ↔ divisible by 2. 15 is not divisible by 2, so 15 is not even."
        }
      ]
    }
  ]
};
