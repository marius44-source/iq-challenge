const TRAINING_MP = {
  tips: [
    {
      title: "Read the Question Twice",
      description: "Many puzzles exploit assumptions. Re-read carefully before answering — the trick is often hidden in the wording."
    },
    {
      title: "Work Backwards from the Answer",
      description: "Assume an answer is correct and check whether all conditions hold. This reveals wrong assumptions quickly."
    },
    {
      title: "Look for Hidden Operations",
      description: "Coded arithmetic and trick questions use non-standard operations. Don't assume +, -, ×, ÷ work the way you expect."
    },
    {
      title: "Use Real-World Reasoning",
      description: "Identify whether tasks scale linearly. Doubling workers doesn't always halve the time — think about dependencies."
    }
  ],
  levels: [
    {
      level: 1,
      title: "Beginner",
      description: "Trick questions and simple word problems",
      exercises: [
        {
          id: "TMP1_1",
          question: "A farmer has 12 sheep. All but 5 die. How many sheep are left?",
          hint: "Focus on the phrase 'all but 5'.",
          options: ["5", "7", "12", "0"],
          correct: 0,
          explanation: "'All but 5 die' means 5 survive. The answer is 5, not 12 minus 5."
        },
        {
          id: "TMP1_2",
          question: "You pass the person in 3rd place in a race. What place are you in now?",
          hint: "Think about what happens when you overtake someone — whose position do you take?",
          options: ["3rd", "2nd", "4th", "1st"],
          correct: 0,
          explanation: "When you pass the person in 3rd place, you take their position and become 3rd — not 2nd."
        },
        {
          id: "TMP1_3",
          question: "How many birthdays does the average person have?",
          hint: "You are born only once.",
          options: ["1", "About 75", "365", "It depends on age"],
          correct: 0,
          explanation: "Everyone has exactly one birthday — the day they were born. The rest are anniversaries of that day."
        },
        {
          id: "TMP1_4",
          question: "If you have 5 oranges and take away 2, how many do YOU have?",
          hint: "Who took the oranges?",
          options: ["2", "3", "5", "0"],
          correct: 0,
          explanation: "You took 2 oranges, so you have 2. The question asks how many you have, not how many are left."
        },
        {
          id: "TMP1_5",
          question: "A is the father of B, but B is not A's son. How is that possible?",
          hint: "Consider all possible genders for B.",
          options: ["B is A's daughter", "A is not really B's father", "B is adopted", "They are step-relatives"],
          correct: 0,
          explanation: "B is female — she is A's daughter. Not every child is a son."
        },
        {
          id: "TMP1_6",
          question: "How many times can you subtract 10 from 100?",
          hint: "After the first subtraction, is it still 100?",
          options: ["1", "10", "9", "Infinite"],
          correct: 0,
          explanation: "Only once — after the first subtraction you have 90, so you're subtracting 10 from 90, not from 100."
        },
        {
          id: "TMP1_7",
          question: "If a rooster lays an egg on the peak of a roof, which way does it roll?",
          hint: "Think about what a rooster actually is.",
          options: ["Roosters don't lay eggs", "Left", "Right", "It stays on top"],
          correct: 0,
          explanation: "Roosters are male chickens and cannot lay eggs. The premise is impossible."
        },
        {
          id: "TMP1_8",
          question: "What weighs more: a pound of feathers or a pound of bricks?",
          hint: "Pay close attention to the unit of measurement.",
          options: ["They weigh the same", "Bricks", "Feathers", "It depends on the type"],
          correct: 0,
          explanation: "A pound is a pound regardless of material. Both weigh exactly one pound."
        },
        {
          id: "TMP1_9",
          question: "A shirt originally costs $50 and is on sale at 50% off. What do you pay?",
          hint: "Calculate 50% of the original price.",
          options: ["$25", "$50", "$30", "$15"],
          correct: 0,
          explanation: "50% of $50 = $25. You pay $25."
        },
        {
          id: "TMP1_10",
          question: "You're in a dark room with a candle, an oil lamp, and a fireplace. You have one match. What do you light first?",
          hint: "You need to light something before anything else can work.",
          options: ["The match", "The candle", "The oil lamp", "The fireplace"],
          correct: 0,
          explanation: "You must light the match first before you can use it to light anything else."
        },
        {
          id: "TMP1_11",
          question: "A plane crashes exactly on the border of two countries. Where do you bury the survivors?",
          hint: "Read the question carefully — who exactly are we burying?",
          options: ["You don't bury survivors", "In the country of departure", "In the country of destination", "On the border"],
          correct: 0,
          explanation: "Survivors are alive — you don't bury living people."
        },
        {
          id: "TMP1_12",
          question: "How many animals of each kind did Moses take on the ark?",
          hint: "Check the name in the question very carefully.",
          options: ["None — it was Noah, not Moses", "2", "7", "1"],
          correct: 0,
          explanation: "Moses didn't have an ark — it was Noah. The question uses the wrong name to trick you."
        },
        {
          id: "TMP1_13",
          question: "There are 10 birds sitting on a fence. You shoot one. How many remain on the fence?",
          hint: "Think about how the other birds would react to a gunshot.",
          options: ["0", "9", "10", "1"],
          correct: 0,
          explanation: "The gunshot scares the rest away. No birds remain on the fence."
        },
        {
          id: "TMP1_14",
          question: "A farmer has 20 cows. All but 12 die. How many are left?",
          hint: "Focus on the phrase 'all but 12'.",
          options: ["12", "8", "20", "0"],
          correct: 0,
          explanation: "'All but 12 die' means 12 survive."
        },
        {
          id: "TMP1_15",
          question: "What goes up but never comes down?",
          hint: "Think about something that only increases over time.",
          options: ["Your age", "A balloon", "The sun", "Temperature"],
          correct: 0,
          explanation: "Your age only increases and never decreases."
        },
        {
          id: "TMP1_16",
          question: "A girl kicks a soccer ball 10 feet away. It comes back to her with no wall, no other person, and no spin. How?",
          hint: "Think about the direction she kicked it.",
          options: ["She kicked it straight up", "The wind blew it back", "It bounced off a tree", "The ground was sloped"],
          correct: 0,
          explanation: "She kicked the ball straight up into the air, and gravity brought it back down to her."
        },
        {
          id: "TMP1_17",
          question: "What has a head and a tail but no body?",
          hint: "Think about everyday objects, not animals.",
          options: ["A coin", "A snake", "A pin", "A comet"],
          correct: 0,
          explanation: "A coin has a 'heads' side and a 'tails' side but no body."
        },
        {
          id: "TMP1_18",
          question: "A doctor gives you 5 pills and tells you to take one every hour. How long do the pills last?",
          hint: "When do you take the very first pill?",
          options: ["4 hours", "5 hours", "6 hours", "3 hours"],
          correct: 0,
          explanation: "Take the 1st at hour 0, 2nd at hour 1, 3rd at hour 2, 4th at hour 3, 5th at hour 4. Total: 4 hours."
        },
        {
          id: "TMP1_19",
          question: "If you have a bowl with 6 eggs and you take out 2, how many do you have?",
          hint: "Who has the eggs you took?",
          options: ["2", "4", "6", "0"],
          correct: 0,
          explanation: "You took 2 eggs, so you have 2. The bowl still has 4, but the question asks how many you have."
        },
        {
          id: "TMP1_20",
          question: "A boy is 4 years old, and his sister is half his age. When the boy is 100, how old will his sister be?",
          hint: "What is the constant age difference between them?",
          options: ["98", "50", "100", "96"],
          correct: 0,
          explanation: "The sister is 2 years younger (4 ÷ 2 = 2). The age gap stays the same: 100 − 2 = 98."
        }
      ]
    },
    {
      level: 2,
      title: "Elementary",
      description: "Classic puzzles and basic rates",
      exercises: [
        {
          id: "TMP2_1",
          question: "A pen and a notebook together cost $1.10. The notebook costs $1.00 more than the pen. How much does the pen cost?",
          hint: "If the pen costs X, the notebook costs X + $1.00. Set up the equation.",
          options: ["$0.05", "$0.10", "$1.00", "$0.50"],
          correct: 0,
          explanation: "Let pen = x. Then notebook = x + 1. So x + (x + 1) = 1.10 → 2x = 0.10 → x = $0.05."
        },
        {
          id: "TMP2_2",
          question: "A doctor gives you 3 pills and says to take one every 45 minutes. How long do the pills last?",
          hint: "When do you take the first pill?",
          options: ["90 minutes", "135 minutes", "45 minutes", "120 minutes"],
          correct: 0,
          explanation: "Take 1st at 0 min, 2nd at 45 min, 3rd at 90 min. Total elapsed: 90 minutes."
        },
        {
          id: "TMP2_3",
          question: "If 5 workers can build 5 walls in 5 days, how long would it take 10 workers to build 10 walls?",
          hint: "How long does one worker take to build one wall?",
          options: ["5 days", "10 days", "2.5 days", "1 day"],
          correct: 0,
          explanation: "Each worker builds 1 wall in 5 days. With 10 workers building 10 walls, each still takes 5 days."
        },
        {
          id: "TMP2_4",
          question: "Two coins add up to 30 cents. One of them is not a nickel. What are the two coins?",
          hint: "The statement says ONE of them is not a nickel — what about the other one?",
          options: ["A quarter and a nickel", "Two dimes", "A half-dollar", "A dime and a nickel"],
          correct: 0,
          explanation: "'One of them is not a nickel' — that's the quarter (25¢). The other one IS a nickel (5¢). Total: 30¢."
        },
        {
          id: "TMP2_5",
          question: "Multiply all the digits on a telephone keypad (0 through 9). What is the product?",
          hint: "Consider what happens when you multiply by one particular digit.",
          options: ["0", "3,628,800", "362,880", "45"],
          correct: 0,
          explanation: "The digits include 0. Any number multiplied by 0 equals 0."
        },
        {
          id: "TMP2_6",
          question: "A family has 4 boys and 3 girls. Each boy has as many sisters as brothers. Each girl has twice as many brothers as sisters. How many children are there?",
          hint: "Count brothers and sisters from each child's perspective.",
          options: ["7", "8", "6", "10"],
          correct: 0,
          explanation: "Each boy has 3 brothers and 3 sisters ✓. Each girl has 4 brothers and 2 sisters (4 = 2 × 2) ✓. Total: 4 + 3 = 7."
        },
        {
          id: "TMP2_7",
          question: "An electric train is heading north. The wind is blowing west. Which direction does the smoke go?",
          hint: "What kind of power does this train use?",
          options: ["There is no smoke", "West", "North", "East"],
          correct: 0,
          explanation: "Electric trains don't burn fuel and produce no smoke."
        },
        {
          id: "TMP2_8",
          question: "If 8 people can build a wall in 10 hours, how long would it take 4 people to build the same wall?",
          hint: "Halving the workers doubles the time.",
          options: ["20 hours", "5 hours", "40 hours", "10 hours"],
          correct: 0,
          explanation: "Half the workers = double the time. 10 × 2 = 20 hours."
        },
        {
          id: "TMP2_9",
          question: "How many months of the year have 30 days?",
          hint: "Think carefully — do some months have MORE than 30 days?",
          options: ["11", "4", "6", "7"],
          correct: 0,
          explanation: "All months have at least 30 days except February (28 or 29). So 11 months have 30 days."
        },
        {
          id: "TMP2_10",
          question: "You dig 6 holes: 3 big ones and 3 small ones. How many holes do you have?",
          hint: "Does the size of a hole change what it is?",
          options: ["6", "3", "9", "0"],
          correct: 0,
          explanation: "A hole is a hole regardless of size. You dug 6 holes, so you have 6 holes."
        },
        {
          id: "TMP2_11",
          question: "Can you name three consecutive days without using Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday?",
          hint: "Think of relative terms for days rather than proper names.",
          options: ["Yesterday, today, and tomorrow", "Day 1, Day 2, Day 3", "This is impossible", "Morning, afternoon, evening"],
          correct: 0,
          explanation: "Yesterday, today, and tomorrow are always three consecutive days."
        },
        {
          id: "TMP2_12",
          question: "What is 1/2 of 2/3 of 3/4 of 4/5 of 100?",
          hint: "Try simplifying the fractions step by step before multiplying.",
          options: ["20", "10", "50", "25"],
          correct: 0,
          explanation: "The fractions simplify: 1/2 × 2/3 × 3/4 × 4/5 = 1/5. Then 1/5 × 100 = 20."
        },
        {
          id: "TMP2_13",
          question: "A lily pad doubles in size every day. If it completely fills a pond on day 20, on what day was it exactly 25% of the pond?",
          hint: "Work backwards — if it doubles each day, halve it going back.",
          options: ["Day 18", "Day 5", "Day 15", "Day 10"],
          correct: 0,
          explanation: "Day 20: 100%. Day 19: 50%. Day 18: 25%. Two doublings back from full."
        },
        {
          id: "TMP2_14",
          question: "A brick weighs 1 kg plus half a brick. How heavy is the brick?",
          hint: "Set up an equation: let b = weight of the brick.",
          options: ["2 kg", "1.5 kg", "3 kg", "1 kg"],
          correct: 0,
          explanation: "b = 1 + b/2 → b/2 = 1 → b = 2 kg."
        },
        {
          id: "TMP2_15",
          question: "If it takes 6 people 6 hours to dig 6 holes, how long does it take 3 people to dig 3 holes?",
          hint: "How long does one person take to dig one hole?",
          options: ["6 hours", "3 hours", "12 hours", "9 hours"],
          correct: 0,
          explanation: "Each person digs 1 hole in 6 hours. 3 people each dig 1 hole — still 6 hours."
        },
        {
          id: "TMP2_16",
          question: "What is the next letter in the sequence: O, T, T, F, F, S, S, ?",
          hint: "Think about the first letter of each counting number in English.",
          options: ["E", "N", "T", "H"],
          correct: 0,
          explanation: "One, Two, Three, Four, Five, Six, Seven, Eight — the first letters spell O, T, T, F, F, S, S, E."
        },
        {
          id: "TMP2_17",
          question: "You have 8 balls. Seven weigh the same and one is heavier. Using a balance scale, what is the minimum number of weighings to find the heavy one?",
          hint: "Divide the balls into three groups, not two.",
          options: ["2", "3", "1", "4"],
          correct: 0,
          explanation: "Weigh 3 vs 3. If equal, weigh the remaining 2. If unequal, take the heavier group and weigh 1 vs 1. Always 2 weighings."
        },
        {
          id: "TMP2_18",
          question: "In a race, you pass the person in last place. What position are you in now?",
          hint: "Think about who is behind the person in last place.",
          options: ["It's impossible", "Last place", "Second to last", "First place"],
          correct: 0,
          explanation: "No one is behind the last-place person. If you were behind them, you would be in last place — so you can't pass them."
        },
        {
          id: "TMP2_19",
          question: "If 3 cats catch 3 mice in 3 minutes, how long does it take 100 cats to catch 100 mice?",
          hint: "Each cat catches one mouse in how many minutes?",
          options: ["3 minutes", "100 minutes", "33 minutes", "1 minute"],
          correct: 0,
          explanation: "Each cat catches 1 mouse in 3 minutes. 100 cats catch 100 mice in parallel — still 3 minutes."
        },
        {
          id: "TMP2_20",
          question: "What fraction of a day is 6 hours?",
          hint: "How many hours are in a full day?",
          options: ["1/4", "1/6", "1/3", "1/2"],
          correct: 0,
          explanation: "A day has 24 hours. 6 ÷ 24 = 1/4."
        }
      ]
    },
    {
      level: 3,
      title: "Intermediate",
      description: "Multi-step problems, rates, and grids",
      exercises: [
        {
          id: "TMP3_1",
          question: "If 6 machines make 6 toys in 6 minutes, how long does it take 12 machines to make 12 toys?",
          hint: "Each machine makes one toy in how many minutes?",
          options: ["6 minutes", "12 minutes", "3 minutes", "1 minute"],
          correct: 0,
          explanation: "Each machine makes 1 toy in 6 minutes. 12 machines each make 1 toy in 6 minutes — still 6 minutes total."
        },
        {
          id: "TMP3_2",
          question: "A clock shows 6:00. What is the angle between the hour and minute hands?",
          hint: "Where are the hands pointing at exactly 6:00?",
          options: ["180°", "90°", "120°", "360°"],
          correct: 0,
          explanation: "At 6:00, the minute hand points to 12 and the hour hand points to 6 — a straight line of 180°."
        },
        {
          id: "TMP3_3",
          question: "A clock shows 9:00. What is the angle between the hour and minute hands?",
          hint: "Where are the hands pointing at exactly 9:00?",
          options: ["90°", "180°", "270°", "45°"],
          correct: 0,
          explanation: "At 9:00, the minute hand points to 12 and the hour hand points to 9 — a right angle of 90°."
        },
        {
          id: "TMP3_4",
          question: "In a number grid, the rule is: column 1 + column 2 = column 3. Rows: [3, 5, 8], [7, 2, 9], [4, 6, ?]. Find the missing number.",
          hint: "Apply the same addition rule to the third row.",
          options: ["10", "8", "12", "6"],
          correct: 0,
          explanation: "Following the rule: 4 + 6 = 10."
        },
        {
          id: "TMP3_5",
          question: "In a number grid, the rule is: column 1 × column 2 = column 3. Rows: [2, 5, 10], [3, 4, 12], [6, 3, ?]. Find the missing number.",
          hint: "Multiply the first two columns of the third row.",
          options: ["18", "9", "15", "21"],
          correct: 0,
          explanation: "Following the rule: 6 × 3 = 18."
        },
        {
          id: "TMP3_6",
          question: "A snail climbs 4 meters during the day and slides back 2 meters at night. The wall is 12 meters tall. How many days does it take to reach the top?",
          hint: "On the final day, the snail reaches the top and doesn't slide back.",
          options: ["5 days", "6 days", "4 days", "10 days"],
          correct: 0,
          explanation: "Each full day-night cycle: net +2m. After 4 days: 8m. On day 5, the snail climbs 8 + 4 = 12m — it reaches the top before nightfall."
        },
        {
          id: "TMP3_7",
          question: "If 2 people can paint 2 rooms in 2 hours, how long would it take 4 people to paint 4 rooms?",
          hint: "Each person paints one room in how many hours?",
          options: ["2 hours", "4 hours", "1 hour", "8 hours"],
          correct: 0,
          explanation: "Each person paints 1 room in 2 hours. 4 people paint 4 rooms in parallel — still 2 hours."
        },
        {
          id: "TMP3_8",
          question: "You buy an item for $3 and sell it for $5. Then you buy another item for $6 and sell it for $9. What is your total profit?",
          hint: "Calculate the profit from each transaction separately.",
          options: ["$5", "$3", "$2", "$6"],
          correct: 0,
          explanation: "First deal: $5 − $3 = $2 profit. Second deal: $9 − $6 = $3 profit. Total: $2 + $3 = $5."
        },
        {
          id: "TMP3_9",
          question: "A frog jumps 3 meters forward and then slides 1 meter back each cycle. How many jumps does it need to travel past 10 meters?",
          hint: "On the final jump, the frog passes the target without sliding back.",
          options: ["5 jumps", "4 jumps", "6 jumps", "10 jumps"],
          correct: 0,
          explanation: "After 4 cycles: 4 × 2 = 8m. On jump 5: 8 + 3 = 11m, which is past 10m. So 5 jumps."
        },
        {
          id: "TMP3_10",
          question: "Tom is 3 times as old as Jim. In 10 years, Tom will be twice Jim's age. How old is Jim now?",
          hint: "Set up two equations: T = 3J and T + 10 = 2(J + 10).",
          options: ["10", "5", "15", "20"],
          correct: 0,
          explanation: "T = 3J. In 10 years: 3J + 10 = 2(J + 10) → 3J + 10 = 2J + 20 → J = 10."
        },
        {
          id: "TMP3_11",
          question: "You buy a horse for $60, sell it for $70, buy it back for $80, and sell it again for $90. What is your total profit?",
          hint: "Track each transaction's gain or loss separately.",
          options: ["$20", "$10", "$30", "$0"],
          correct: 0,
          explanation: "First trade: $70 − $60 = +$10. Second trade: $90 − $80 = +$10. Total profit: $20."
        },
        {
          id: "TMP3_12",
          question: "If you fold a piece of paper in half 7 times, how many layers does it have?",
          hint: "Each fold doubles the number of layers.",
          options: ["128", "64", "14", "256"],
          correct: 0,
          explanation: "Each fold doubles the layers: 2⁷ = 128."
        },
        {
          id: "TMP3_13",
          question: "A prime number multiplied by itself equals 169. What is the prime number?",
          hint: "Find the square root of 169.",
          options: ["13", "11", "17", "7"],
          correct: 0,
          explanation: "√169 = 13, and 13 is indeed a prime number."
        },
        {
          id: "TMP3_14",
          question: "Two trains are 100 miles apart, each traveling at 50 mph toward each other. A fly at 75 mph bounces between them. How far does the fly travel before the trains meet?",
          hint: "First figure out how long until the trains meet.",
          options: ["75 miles", "100 miles", "50 miles", "150 miles"],
          correct: 0,
          explanation: "Combined speed: 100 mph. They meet in 1 hour. Fly travels 75 mph × 1 hour = 75 miles."
        },
        {
          id: "TMP3_15",
          question: "What is the smallest number that is evenly divisible by every integer from 1 through 6?",
          hint: "Find the least common multiple (LCM) of 1, 2, 3, 4, 5, and 6.",
          options: ["60", "30", "120", "720"],
          correct: 0,
          explanation: "LCM(1,2,3,4,5,6) = 60. Check: 60 ÷ 1, 2, 3, 4, 5, 6 all yield whole numbers."
        },
        {
          id: "TMP3_16",
          question: "If you count from 1 to 100, how many times does the digit 7 appear?",
          hint: "Count appearances in the units place and tens place separately.",
          options: ["20", "10", "11", "19"],
          correct: 0,
          explanation: "Units place: 7, 17, 27, ..., 97 = 10 times. Tens place: 70, 71, ..., 79 = 10 times. Total: 20."
        },
        {
          id: "TMP3_17",
          question: "A number increased by 20% becomes 60. What was the original number?",
          hint: "If the number is x, then 1.2x = 60.",
          options: ["50", "48", "72", "40"],
          correct: 0,
          explanation: "1.2x = 60 → x = 60 ÷ 1.2 = 50."
        },
        {
          id: "TMP3_18",
          question: "If you fold a piece of paper in half 10 times, how many layers does it have?",
          hint: "Each fold doubles the number of layers.",
          options: ["1024", "100", "512", "2048"],
          correct: 0,
          explanation: "2¹⁰ = 1024 layers."
        },
        {
          id: "TMP3_19",
          question: "The product of two consecutive positive integers is 156. What are the two integers?",
          hint: "Find two neighboring whole numbers that multiply to 156.",
          options: ["12 and 13", "11 and 12", "13 and 14", "10 and 15"],
          correct: 0,
          explanation: "12 × 13 = 156. They are consecutive integers."
        },
        {
          id: "TMP3_20",
          question: "In a 3×3 magic square where every row, column, and diagonal sums to 15: top row is [2, 7, 6], middle row is [9, 5, 1]. What is the first number in the bottom row?",
          hint: "The first column must also sum to 15.",
          options: ["4", "3", "6", "8"],
          correct: 0,
          explanation: "First column: 2 + 9 + ? = 15 → ? = 4."
        }
      ]
    },
    {
      level: 4,
      title: "Advanced",
      description: "Complex rates, optimization, and algebra",
      exercises: [
        {
          id: "TMP4_1",
          question: "A bacterial colony doubles every hour and completely fills a jar at noon. At what time was the jar one-quarter full?",
          hint: "Work backwards — if it doubles hourly, halve it each step back.",
          options: ["10:00 AM", "11:00 AM", "9:00 AM", "6:00 AM"],
          correct: 0,
          explanation: "Noon: 100%. 11 AM: 50%. 10 AM: 25%. Two hours before noon."
        },
        {
          id: "TMP4_2",
          question: "You have 24 coins. One is fake and lighter than the rest. What is the minimum number of weighings on a balance scale to guarantee finding it?",
          hint: "Divide the coins into three groups each time.",
          options: ["3", "4", "5", "2"],
          correct: 0,
          explanation: "Split 24 into groups of 8. Weigh 8 vs 8 (identify the lighter group). Then 3 vs 3 within that group. Then 1 vs 1. Three weighings."
        },
        {
          id: "TMP4_3",
          question: "A rope is cut into 3 pieces. Each piece is then cut into 3 smaller pieces. How many total pieces are there?",
          hint: "Each of the 3 original pieces becomes 3 pieces.",
          options: ["9", "6", "12", "27"],
          correct: 0,
          explanation: "3 original pieces × 3 sub-pieces each = 9 total pieces."
        },
        {
          id: "TMP4_4",
          question: "A worm is at the bottom of a 30-meter well. It climbs 5 meters during the day and slides back 4 meters at night. How many days to reach the top?",
          hint: "On the final day, the worm exits the well and doesn't slide back.",
          options: ["26 days", "30 days", "25 days", "27 days"],
          correct: 0,
          explanation: "Net gain: 1m per day-night cycle. After 25 days: 25m. Day 26: 25 + 5 = 30m — top reached before night."
        },
        {
          id: "TMP4_5",
          question: "If 8 men can build a wall in 10 days, how many days will it take 5 men to build the same wall?",
          hint: "Total work = number of men × number of days.",
          options: ["16 days", "12 days", "20 days", "8 days"],
          correct: 0,
          explanation: "Total work: 8 × 10 = 80 man-days. For 5 men: 80 ÷ 5 = 16 days."
        },
        {
          id: "TMP4_6",
          question: "Pipe A fills a tank in 6 hours. Pipe B fills it in 3 hours. How long does it take to fill the tank with both pipes open?",
          hint: "Add the rates: 1/6 + 1/3 per hour.",
          options: ["2 hours", "4.5 hours", "3 hours", "1.5 hours"],
          correct: 0,
          explanation: "Combined rate: 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 per hour. Time: 2 hours."
        },
        {
          id: "TMP4_7",
          question: "A rectangle is 3 times as long as it is wide. Its perimeter is 48 meters. What is its area?",
          hint: "Let width = w, so length = 3w. Perimeter = 2(w + 3w).",
          options: ["108 m²", "96 m²", "144 m²", "48 m²"],
          correct: 0,
          explanation: "2(w + 3w) = 48 → 8w = 48 → w = 6. Length = 18. Area = 6 × 18 = 108 m²."
        },
        {
          id: "TMP4_8",
          question: "A number is increased by 20% and then decreased by 20%. What is the net percentage change from the original?",
          hint: "Start with 100 and apply both percentage changes sequentially.",
          options: ["4% decrease", "0% (no change)", "4% increase", "2% decrease"],
          correct: 0,
          explanation: "100 → +20% → 120 → −20% → 96. Net change: 96 − 100 = −4, which is a 4% decrease."
        },
        {
          id: "TMP4_9",
          question: "A store raises all prices by 25%, then offers a 20% discount. What is the net price change from the original?",
          hint: "Apply both percentage changes to a starting price of $100.",
          options: ["0% (no change)", "5% increase", "5% decrease", "45% increase"],
          correct: 0,
          explanation: "1.25 × 0.80 = 1.00. The price returns to exactly the original — 0% net change."
        },
        {
          id: "TMP4_10",
          question: "What is the sum of the first 20 positive integers?",
          hint: "Use the formula: n(n + 1) / 2.",
          options: ["210", "200", "190", "220"],
          correct: 0,
          explanation: "Sum = 20 × 21 / 2 = 210."
        },
        {
          id: "TMP4_11",
          question: "What is the angle between the hour and minute hands of a clock at 4:30?",
          hint: "At 4:30, the hour hand has moved halfway between the 4 and the 5.",
          options: ["45°", "90°", "60°", "30°"],
          correct: 0,
          explanation: "Minute hand at 180° (pointing to 6). Hour hand at 135° (4 × 30° + 0.5 × 30°). Difference: 180° − 135° = 45°."
        },
        {
          id: "TMP4_12",
          question: "A car drives 60 km at 30 km/h, then 60 km at 60 km/h. What is the average speed for the entire trip?",
          hint: "Average speed = total distance ÷ total time (not the average of the two speeds).",
          options: ["40 km/h", "45 km/h", "50 km/h", "35 km/h"],
          correct: 0,
          explanation: "Time 1: 60/30 = 2 hours. Time 2: 60/60 = 1 hour. Average: 120 km / 3 hours = 40 km/h."
        },
        {
          id: "TMP4_13",
          question: "If 2^10 = 1024, what is 2^12?",
          hint: "2^12 = 2^10 × 2^2.",
          options: ["4096", "2048", "8192", "1248"],
          correct: 0,
          explanation: "2^12 = 1024 × 4 = 4096."
        },
        {
          id: "TMP4_14",
          question: "A tap fills a pool in 4 hours. A drain empties it in 8 hours. With both open, how long to fill the pool?",
          hint: "Net fill rate = fill rate minus drain rate.",
          options: ["8 hours", "6 hours", "12 hours", "4 hours"],
          correct: 0,
          explanation: "Fill rate: 1/4 per hour. Drain rate: 1/8 per hour. Net: 1/4 − 1/8 = 1/8 per hour. Time: 8 hours."
        },
        {
          id: "TMP4_15",
          question: "A price drops by 10%, then drops by another 10%. What is the total percentage drop from the original price?",
          hint: "The second 10% discount is applied to the already-reduced price.",
          options: ["19%", "20%", "18%", "21%"],
          correct: 0,
          explanation: "0.90 × 0.90 = 0.81. Total drop: 1 − 0.81 = 0.19 = 19%."
        },
        {
          id: "TMP4_16",
          question: "Find x: 3x + 7 = 22.",
          hint: "Isolate x by undoing operations step by step.",
          options: ["5", "7", "3", "10"],
          correct: 0,
          explanation: "3x = 22 − 7 = 15. x = 15 ÷ 3 = 5."
        },
        {
          id: "TMP4_17",
          question: "A train 100 meters long travels at 50 m/s. How long does it take to completely pass a pole?",
          hint: "The entire train must pass the pole — it needs to cover its own length.",
          options: ["2 seconds", "1 second", "4 seconds", "0.5 seconds"],
          correct: 0,
          explanation: "Time = distance / speed = 100m / 50 m/s = 2 seconds."
        },
        {
          id: "TMP4_18",
          question: "Two workers together finish a job in 12 days. One of them alone takes 20 days. How long does the other one take alone?",
          hint: "Combined rate minus one worker's rate gives the other's rate.",
          options: ["30 days", "24 days", "15 days", "40 days"],
          correct: 0,
          explanation: "1/12 − 1/20 = 5/60 − 3/60 = 2/60 = 1/30. The other worker takes 30 days alone."
        },
        {
          id: "TMP4_19",
          question: "You invest $1000 at 5% simple interest per year for 3 years. How much total interest do you earn?",
          hint: "Simple interest = principal × rate × time.",
          options: ["$150", "$1150", "$50", "$300"],
          correct: 0,
          explanation: "Interest = $1000 × 0.05 × 3 = $150."
        },
        {
          id: "TMP4_20",
          question: "A farmer has chickens and cows. There are 20 heads and 56 legs in total. How many chickens are there?",
          hint: "Set up two equations: one for heads, one for legs.",
          options: ["12", "8", "14", "10"],
          correct: 0,
          explanation: "c + w = 20 and 2c + 4w = 56. Solving: w = 8, c = 12. There are 12 chickens."
        }
      ]
    },
    {
      level: 5,
      title: "Expert",
      description: "Advanced brain teasers and mathematical puzzles",
      exercises: [
        {
          id: "TMP5_1",
          question: "You have two ropes. Each takes exactly 1 hour to burn completely, but they burn unevenly. How do you measure exactly 45 minutes?",
          hint: "What happens if you light a rope from both ends at once?",
          options: [
            "Light rope 1 at both ends and rope 2 at one end simultaneously",
            "Light both ropes at one end at the same time",
            "Cut one rope into quarters and light one piece",
            "Light one rope and wait for it to finish, then light the other"
          ],
          correct: 0,
          explanation: "Rope 1 (both ends) burns out in 30 min. At that moment, light rope 2's other end — it finishes in 15 more min. Total: 45 min."
        },
        {
          id: "TMP5_2",
          question: "Two fathers and two sons sit down to eat. They eat exactly 3 eggs, with each person eating exactly 1 egg. How is this possible?",
          hint: "Can one person fill two roles at the same time?",
          options: [
            "They are a grandfather, a father, and a son (3 people)",
            "One person didn't actually eat",
            "There were 4 people but one shared",
            "Someone ate two eggs"
          ],
          correct: 0,
          explanation: "Three generations: grandfather (a father), father (both a son and a father), and son. Two fathers + two sons = 3 people."
        },
        {
          id: "TMP5_3",
          question: "100 lockers are in a row, all closed. 100 students walk by in sequence: student k toggles every k-th locker. How many lockers are open at the end?",
          hint: "A locker ends up open only if it is toggled an odd number of times. Which numbers have an odd number of divisors?",
          options: ["10", "50", "25", "0"],
          correct: 0,
          explanation: "Only perfect squares have an odd number of divisors: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. That's 10 lockers."
        },
        {
          id: "TMP5_4",
          question: "Three switches outside a closed room control three light bulbs inside. You may only enter the room once. How do you determine which switch controls which bulb?",
          hint: "A light bulb that was on for a while will feel warm even after being turned off.",
          options: [
            "Turn switch 1 on and wait, turn it off, turn switch 2 on, then enter: warm off = 1, on = 2, cold off = 3",
            "Flip each switch one at a time and check each time",
            "Turn all three on and off quickly, then enter",
            "Look through the keyhole after each switch"
          ],
          correct: 0,
          explanation: "Turn switch 1 on for a few minutes, turn it off, turn switch 2 on, enter. Warm but off = switch 1. On = switch 2. Cold and off = switch 3."
        },
        {
          id: "TMP5_5",
          question: "Three boxes are labeled 'Apples', 'Oranges', and 'Mixed'. ALL labels are wrong. You can pick one fruit from one box. Which box should you pick from to determine all labels?",
          hint: "Since all labels are wrong, the 'Mixed' box cannot actually contain mixed fruit.",
          options: [
            "The box labeled 'Mixed'",
            "The box labeled 'Apples'",
            "The box labeled 'Oranges'",
            "Any box — it doesn't matter"
          ],
          correct: 0,
          explanation: "Pick from 'Mixed' (which isn't mixed). If you get an apple, it's the Apples box. Then 'Apples' (mislabeled) must be Oranges, and 'Oranges' must be Mixed."
        },
        {
          id: "TMP5_6",
          question: "A man has three daughters. The product of their ages is 36. The sum of their ages equals the house number next door (which is ambiguous). The oldest plays piano. What are their ages?",
          hint: "Two different sets of factors of 36 share the same sum. The word 'oldest' eliminates one set.",
          options: ["2, 2, and 9", "1, 6, and 6", "3, 3, and 4", "1, 4, and 9"],
          correct: 0,
          explanation: "Factor sets of 36 summing to 13: {1,6,6} and {2,2,9}. Since there's an 'oldest' (unique), it must be {2, 2, 9}."
        },
        {
          id: "TMP5_7",
          question: "Monty Hall problem: you pick door 1 of 3 (one has a car, two have goats). The host opens door 3 to reveal a goat. Should you switch to door 2?",
          hint: "What was the probability the car was behind your original door?",
          options: [
            "Yes — switching wins 2/3 of the time",
            "No — it's 50/50 either way",
            "It doesn't matter",
            "No — your first choice is usually right"
          ],
          correct: 0,
          explanation: "Your initial pick had a 1/3 chance. The remaining door now carries the other 2/3. Switching doubles your odds."
        },
        {
          id: "TMP5_8",
          question: "How many squares of all sizes are there on a standard 8×8 chessboard?",
          hint: "Count 1×1, 2×2, 3×3, ... up to 8×8 squares separately.",
          options: ["204", "64", "256", "100"],
          correct: 0,
          explanation: "Sum of squares: 8² + 7² + 6² + 5² + 4² + 3² + 2² + 1² = 64 + 49 + 36 + 25 + 16 + 9 + 4 + 1 = 204."
        },
        {
          id: "TMP5_9",
          question: "What is the sum of all integers from 1 to 100?",
          hint: "Use Gauss's formula: n(n + 1) / 2.",
          options: ["5050", "5000", "10000", "10100"],
          correct: 0,
          explanation: "100 × 101 / 2 = 5050."
        },
        {
          id: "TMP5_10",
          question: "How many trailing zeros are in 100! (100 factorial)?",
          hint: "Trailing zeros come from factors of 10 = 2 × 5. Count the factors of 5.",
          options: ["24", "20", "25", "10"],
          correct: 0,
          explanation: "⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24 trailing zeros."
        },
        {
          id: "TMP5_11",
          question: "A farmer must cross a river with a wolf, a goat, and a cabbage. The boat holds the farmer plus one item. The wolf eats the goat if left alone; the goat eats the cabbage. What should the farmer take first?",
          hint: "Which pair of items is safe to leave alone on either bank?",
          options: ["The goat", "The wolf", "The cabbage", "It doesn't matter"],
          correct: 0,
          explanation: "Take the goat first. The wolf and cabbage are safe together. Then shuttle the others with return trips."
        },
        {
          id: "TMP5_12",
          question: "Starting with 1 pair of rabbits, they mature in 1 month and produce 1 new pair each month after maturing. How many pairs are there after 6 months?",
          hint: "This follows the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ...",
          options: ["8", "13", "6", "10"],
          correct: 0,
          explanation: "Fibonacci sequence: month 1 = 1, month 2 = 1, month 3 = 2, month 4 = 3, month 5 = 5, month 6 = 8 pairs."
        },
        {
          id: "TMP5_13",
          question: "What is the minimum number of moves to solve the Tower of Hanoi puzzle with 5 disks?",
          hint: "The formula is 2ⁿ − 1 where n is the number of disks.",
          options: ["31", "32", "63", "15"],
          correct: 0,
          explanation: "2⁵ − 1 = 32 − 1 = 31 moves."
        },
        {
          id: "TMP5_14",
          question: "What is the minimum number of people needed in a room for there to be a greater than 50% chance that two of them share a birthday?",
          hint: "This is the famous birthday paradox — the answer is much smaller than you'd expect.",
          options: ["23", "50", "183", "365"],
          correct: 0,
          explanation: "With just 23 people, the probability that at least two share a birthday exceeds 50%."
        },
        {
          id: "TMP5_15",
          question: "In a room of 23 people, what is the approximate probability that at least two of them share a birthday?",
          hint: "This is the birthday paradox result.",
          options: ["About 50%", "About 6%", "About 25%", "About 75%"],
          correct: 0,
          explanation: "With 23 people, the probability is approximately 50.7% — counterintuitively high."
        },
        {
          id: "TMP5_16",
          question: "On an island, knights always tell the truth and knaves always lie. Person A says: 'We are both knaves.' What is A?",
          hint: "If A were a knight (truth-teller), could that statement be true?",
          options: ["A knave", "A knight", "Cannot be determined", "Neither"],
          correct: 0,
          explanation: "A knight couldn't say 'we are both knaves' (it would be a lie). So A is a knave, meaning the statement is false — they aren't both knaves, so the other person is a knight."
        },
        {
          id: "TMP5_17",
          question: "What is the sum of the interior angles of a heptagon (7-sided polygon)?",
          hint: "Use the formula (n − 2) × 180°.",
          options: ["900°", "720°", "1080°", "1260°"],
          correct: 0,
          explanation: "(7 − 2) × 180° = 5 × 180° = 900°."
        },
        {
          id: "TMP5_18",
          question: "How many squares of all sizes exist in a 4×4 grid?",
          hint: "Count 1×1, 2×2, 3×3, and 4×4 squares.",
          options: ["30", "16", "20", "25"],
          correct: 0,
          explanation: "4² + 3² + 2² + 1² = 16 + 9 + 4 + 1 = 30."
        },
        {
          id: "TMP5_19",
          question: "If you flip a fair coin 3 times, what is the probability of getting at least one head?",
          hint: "It's easier to calculate the complement: the probability of getting NO heads at all.",
          options: ["7/8", "3/4", "1/2", "1/8"],
          correct: 0,
          explanation: "P(no heads) = (1/2)³ = 1/8. P(at least one head) = 1 − 1/8 = 7/8."
        },
        {
          id: "TMP5_20",
          question: "How many rectangles can be formed using the lines of a 3×3 grid (4 horizontal and 4 vertical lines)?",
          hint: "A rectangle is defined by choosing 2 horizontal and 2 vertical lines.",
          options: ["36", "18", "24", "9"],
          correct: 0,
          explanation: "C(4,2) × C(4,2) = 6 × 6 = 36 rectangles."
        }
      ]
    }
  ]
};
