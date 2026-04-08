// ============================================================================
// IQ Test — Age 5–7 Questions
// 130 questions total: 26 per category × 5 categories
// All difficulty: 1 (age-appropriate for 5–7 year olds)
//
// Categories:
//   1. Pattern Recognition    (Y1PR1–Y1PR26)
//   2. Numerical Reasoning    (Y1NR1–Y1NR26)
//   3. Logical Reasoning      (Y1LR1–Y1LR26)
//   4. Spatial Reasoning      (Y1SR1–Y1SR26)
//   5. Mathematical Puzzles   (Y1MP1–Y1MP26)
// ============================================================================

const QUESTIONS_AGE_5_7 = [

  // ==========================================================================
  // PATTERN RECOGNITION (26 questions)
  // ==========================================================================

  { id: "Y1PR1", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? Red, Blue, Red, Blue, Red, ?",
    visual: "text",
    options: ["Blue", "Red", "Green", "Yellow"], correct: 0,
    explanation: "The colors alternate: Red, Blue, Red, Blue. After Red comes Blue." },

  { id: "Y1PR2", category: "Pattern Recognition", difficulty: 1,
    question: "Which figure completes the pattern?",
    visual: "sequence", sequence: ["●", "●●", "●●●", "?"],
    options: ["●●●●", "●●●", "●●", "●●●●●"], correct: 0,
    explanation: "Each step adds one circle. After 3 circles comes 4." },

  { id: "Y1PR3", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["▲", "▲▲", "▲▲▲", "?"],
    options: ["▲▲▲▲", "▲▲", "▲▲▲▲▲", "▲▲▲"], correct: 0,
    explanation: "Each step adds one triangle. After 3 triangles comes 4." },

  { id: "Y1PR4", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? 🔴🔵🔴🔵🔴?",
    visual: "text",
    options: ["🔵", "🔴", "🟢", "🟡"], correct: 0,
    explanation: "The pattern alternates red and blue. After red comes blue." },

  { id: "Y1PR5", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["■", "■■", "■■■", "?"],
    options: ["■■■■", "■■", "■■■■■", "■■■"], correct: 0,
    explanation: "Each step adds one square. After 3 squares comes 4." },

  { id: "Y1PR6", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? Big, Small, Big, Small, Big, ?",
    visual: "text",
    options: ["Small", "Big", "Medium", "Tiny"], correct: 0,
    explanation: "The pattern alternates Big and Small. After Big comes Small." },

  { id: "Y1PR7", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["★", "★★", "★★★", "?"],
    options: ["★★★★", "★★", "★★★", "★"], correct: 0,
    explanation: "Each step adds one star. After 3 stars comes 4." },

  { id: "Y1PR8", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? Cat, Dog, Cat, Dog, Cat, ?",
    visual: "text",
    options: ["Dog", "Cat", "Bird", "Fish"], correct: 0,
    explanation: "The pattern alternates Cat and Dog. After Cat comes Dog." },

  { id: "Y1PR9", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["♥", "♥♥", "♥♥♥", "?"],
    options: ["♥♥♥♥", "♥♥", "♥♥♥♥♥", "♥♥♥"], correct: 0,
    explanation: "Each step adds one heart. After 3 hearts comes 4." },

  { id: "Y1PR10", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? Happy, Sad, Happy, Sad, Happy, ?",
    visual: "text",
    options: ["Sad", "Happy", "Angry", "Sleepy"], correct: 0,
    explanation: "The pattern alternates Happy and Sad. After Happy comes Sad." },

  { id: "Y1PR11", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? 🟢🟡🟢🟡🟢?",
    visual: "text",
    options: ["🟡", "🟢", "🔴", "🔵"], correct: 0,
    explanation: "The pattern alternates green and yellow. After green comes yellow." },

  { id: "Y1PR12", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["◆", "◆◆", "◆◆◆", "?"],
    options: ["◆◆◆◆", "◆◆◆", "◆◆", "◆"], correct: 0,
    explanation: "Each step adds one diamond. After 3 diamonds comes 4." },

  { id: "Y1PR13", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? Circle, Square, Circle, Square, Circle, ?",
    visual: "text",
    options: ["Square", "Circle", "Triangle", "Star"], correct: 0,
    explanation: "The pattern alternates Circle and Square. After Circle comes Square." },

  { id: "Y1PR14", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? Up, Down, Up, Down, Up, ?",
    visual: "text",
    options: ["Down", "Up", "Left", "Right"], correct: 0,
    explanation: "The pattern alternates Up and Down. After Up comes Down." },

  { id: "Y1PR15", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? 🔴🔴🔵🔴🔴🔵🔴🔴?",
    visual: "text",
    options: ["🔵", "🔴", "🟢", "🟡"], correct: 0,
    explanation: "The pattern repeats: Red, Red, Blue. After two reds comes blue." },

  { id: "Y1PR16", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["●", "■", "●", "■", "?"],
    options: ["●", "■", "▲", "★"], correct: 0,
    explanation: "The shapes alternate: circle, square, circle, square. Next is a circle." },

  { id: "Y1PR17", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? Apple, Banana, Apple, Banana, Apple, ?",
    visual: "text",
    options: ["Banana", "Apple", "Orange", "Grape"], correct: 0,
    explanation: "The pattern alternates Apple and Banana. After Apple comes Banana." },

  { id: "Y1PR18", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["▲", "■", "▲", "■", "▲", "?"],
    options: ["■", "▲", "●", "★"], correct: 0,
    explanation: "The shapes alternate: triangle, square, triangle, square. After triangle comes square." },

  { id: "Y1PR19", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? 🟡🟡🔵🟡🟡🔵🟡🟡?",
    visual: "text",
    options: ["🔵", "🟡", "🔴", "🟢"], correct: 0,
    explanation: "The pattern repeats: Yellow, Yellow, Blue. After two yellows comes blue." },

  { id: "Y1PR20", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["●", "●", "■", "●", "●", "■", "?"],
    options: ["●", "■", "▲", "★"], correct: 0,
    explanation: "The pattern repeats: circle, circle, square. After the square, the group starts again with circle." },

  { id: "Y1PR21", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? 🔵🔵🔴🔵🔵🔴🔵🔵?",
    visual: "text",
    options: ["🔴", "🔵", "🟢", "🟡"], correct: 0,
    explanation: "The pattern repeats: Blue, Blue, Red. After two blues comes red." },

  { id: "Y1PR22", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["★", "●", "★", "●", "★", "?"],
    options: ["●", "★", "■", "▲"], correct: 0,
    explanation: "The shapes alternate: star, circle, star, circle. After a star comes a circle." },

  { id: "Y1PR23", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? 🔴🔵🟢🔴🔵🟢🔴🔵?",
    visual: "text",
    options: ["🟢", "🔴", "🔵", "🟡"], correct: 0,
    explanation: "The pattern repeats: Red, Blue, Green. After Blue comes Green." },

  { id: "Y1PR24", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next? Tall, Short, Tall, Short, Tall, Short, Tall, ?",
    visual: "text",
    options: ["Short", "Tall", "Medium", "Wide"], correct: 0,
    explanation: "The pattern alternates Tall and Short. After Tall comes Short." },

  { id: "Y1PR25", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["♥", "♥", "★", "♥", "♥", "★", "♥", "♥", "?"],
    options: ["★", "♥", "■", "●"], correct: 0,
    explanation: "The pattern repeats: heart, heart, star. After two hearts comes a star." },

  { id: "Y1PR26", category: "Pattern Recognition", difficulty: 1,
    question: "What comes next?",
    visual: "sequence", sequence: ["▲", "●", "■", "▲", "●", "?"],
    options: ["■", "▲", "●", "★"], correct: 0,
    explanation: "The pattern repeats: triangle, circle, square. After circle comes square." },

  // ==========================================================================
  // NUMERICAL REASONING (26 questions)
  // ==========================================================================

  { id: "Y1NR1", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 2, 3, 4, 5, "?"],
    options: ["6", "7", "5", "8"], correct: 0,
    explanation: "We are counting by 1. After 5 comes 6." },

  { id: "Y1NR2", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [2, 4, 6, 8, "?"],
    options: ["10", "9", "12", "11"], correct: 0,
    explanation: "We are counting by 2. After 8 comes 10." },

  { id: "Y1NR3", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [10, 20, 30, 40, "?"],
    options: ["50", "45", "60", "55"], correct: 0,
    explanation: "Each number increases by 10. After 40 comes 50." },

  { id: "Y1NR4", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [5, 10, 15, 20, "?"],
    options: ["25", "30", "22", "24"], correct: 0,
    explanation: "Each number increases by 5. After 20 comes 25." },

  { id: "Y1NR5", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 3, 5, 7, "?"],
    options: ["9", "8", "10", "6"], correct: 0,
    explanation: "We are counting odd numbers, adding 2 each time. 7 + 2 = 9." },

  { id: "Y1NR6", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [10, 9, 8, 7, "?"],
    options: ["6", "5", "8", "10"], correct: 0,
    explanation: "We are counting down by 1. After 7 comes 6." },

  { id: "Y1NR7", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [3, 6, 9, 12, "?"],
    options: ["15", "14", "13", "18"], correct: 0,
    explanation: "We are counting by 3. After 12 comes 15." },

  { id: "Y1NR8", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [5, 4, 3, 2, "?"],
    options: ["1", "0", "3", "5"], correct: 0,
    explanation: "We are counting down by 1. After 2 comes 1." },

  { id: "Y1NR9", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [2, 4, 6, 8, 10, "?"],
    options: ["12", "11", "14", "13"], correct: 0,
    explanation: "We are counting by 2. After 10 comes 12." },

  { id: "Y1NR10", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [6, 7, 8, 9, "?"],
    options: ["10", "11", "8", "12"], correct: 0,
    explanation: "We are counting by 1. After 9 comes 10." },

  { id: "Y1NR11", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [20, 18, 16, 14, "?"],
    options: ["12", "13", "10", "15"], correct: 0,
    explanation: "We are counting down by 2. After 14 comes 12." },

  { id: "Y1NR12", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [11, 12, 13, 14, "?"],
    options: ["15", "16", "13", "17"], correct: 0,
    explanation: "We are counting by 1. After 14 comes 15." },

  { id: "Y1NR13", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 2, 3, 4, 5, 6, "?"],
    options: ["7", "8", "6", "9"], correct: 0,
    explanation: "We are counting by 1. After 6 comes 7." },

  { id: "Y1NR14", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [10, 8, 6, 4, "?"],
    options: ["2", "3", "1", "0"], correct: 0,
    explanation: "We are counting down by 2. After 4 comes 2." },

  { id: "Y1NR15", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [4, 8, 12, 16, "?"],
    options: ["20", "18", "24", "22"], correct: 0,
    explanation: "We are counting by 4. After 16 comes 20." },

  { id: "Y1NR16", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [15, 14, 13, 12, "?"],
    options: ["11", "10", "13", "16"], correct: 0,
    explanation: "We are counting down by 1. After 12 comes 11." },

  { id: "Y1NR17", category: "Numerical Reasoning", difficulty: 1,
    question: "What number is missing?",
    visual: "num-sequence", sequence: [1, 2, "?", 4, 5],
    options: ["3", "6", "0", "7"], correct: 0,
    explanation: "We are counting by 1. The missing number between 2 and 4 is 3." },

  { id: "Y1NR18", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [2, 5, 8, 11, "?"],
    options: ["14", "12", "13", "15"], correct: 0,
    explanation: "We are adding 3 each time. 11 + 3 = 14." },

  { id: "Y1NR19", category: "Numerical Reasoning", difficulty: 1,
    question: "What number is missing?",
    visual: "num-sequence", sequence: [2, 4, "?", 8, 10],
    options: ["6", "5", "7", "9"], correct: 0,
    explanation: "We are counting by 2. The missing number between 4 and 8 is 6." },

  { id: "Y1NR20", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [20, 15, 10, 5, "?"],
    options: ["0", "1", "3", "2"], correct: 0,
    explanation: "We are counting down by 5. After 5 comes 0." },

  { id: "Y1NR21", category: "Numerical Reasoning", difficulty: 1,
    question: "What number is missing?",
    visual: "num-sequence", sequence: [5, 10, "?", 20],
    options: ["15", "12", "18", "13"], correct: 0,
    explanation: "We are counting by 5. The missing number between 10 and 20 is 15." },

  { id: "Y1NR22", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [16, 17, 18, 19, "?"],
    options: ["20", "21", "18", "15"], correct: 0,
    explanation: "We are counting by 1. After 19 comes 20." },

  { id: "Y1NR23", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [9, 8, 7, 6, 5, "?"],
    options: ["4", "3", "6", "2"], correct: 0,
    explanation: "We are counting down by 1. After 5 comes 4." },

  { id: "Y1NR24", category: "Numerical Reasoning", difficulty: 1,
    question: "What number is missing?",
    visual: "num-sequence", sequence: [10, "?", 30, 40],
    options: ["20", "15", "25", "35"], correct: 0,
    explanation: "We are counting by 10. The missing number between 10 and 30 is 20." },

  { id: "Y1NR25", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [1, 4, 7, 10, "?"],
    options: ["13", "11", "12", "14"], correct: 0,
    explanation: "We are adding 3 each time. 10 + 3 = 13." },

  { id: "Y1NR26", category: "Numerical Reasoning", difficulty: 1,
    question: "What number comes next?",
    visual: "num-sequence", sequence: [12, 10, 8, 6, "?"],
    options: ["4", "5", "3", "2"], correct: 0,
    explanation: "We are counting down by 2. After 6 comes 4." },

  // ==========================================================================
  // LOGICAL REASONING (26 questions)
  // ==========================================================================

  { id: "Y1LR1", category: "Logical Reasoning", difficulty: 1,
    question: "All apples are fruits. Is it true that apples are fruits?",
    visual: "text",
    options: ["Yes", "No", "Maybe", "We can't know"], correct: 0,
    explanation: "We are told all apples are fruits, so yes, apples are fruits." },

  { id: "Y1LR2", category: "Logical Reasoning", difficulty: 1,
    question: "Tom is taller than Sam. Sam is taller than Max. Who is the shortest?",
    visual: "text",
    options: ["Max", "Sam", "Tom", "They are equal"], correct: 0,
    explanation: "Tom > Sam > Max. Max is the shortest." },

  { id: "Y1LR3", category: "Logical Reasoning", difficulty: 1,
    question: "All birds have feathers. A robin is a bird. What can you conclude?",
    visual: "text",
    options: ["A robin has feathers", "A robin can fly", "All feathered animals are birds", "Robins are not birds"], correct: 0,
    explanation: "If all birds have feathers and a robin is a bird, then a robin has feathers." },

  { id: "Y1LR4", category: "Logical Reasoning", difficulty: 1,
    question: "Monday comes before Tuesday. What comes before Monday?",
    visual: "text",
    options: ["Sunday", "Saturday", "Wednesday", "Friday"], correct: 0,
    explanation: "In the week, Sunday comes before Monday." },

  { id: "Y1LR5", category: "Logical Reasoning", difficulty: 1,
    question: "A cat is bigger than a mouse. A dog is bigger than a cat. Which is the biggest?",
    visual: "text",
    options: ["Dog", "Cat", "Mouse", "They are the same"], correct: 0,
    explanation: "Dog > Cat > Mouse. The dog is the biggest." },

  { id: "Y1LR6", category: "Logical Reasoning", difficulty: 1,
    question: "If all fish live in water and Nemo is a fish, where does Nemo live?",
    visual: "text",
    options: ["In water", "On land", "In a tree", "In the sky"], correct: 0,
    explanation: "All fish live in water. Nemo is a fish, so Nemo lives in water." },

  { id: "Y1LR7", category: "Logical Reasoning", difficulty: 1,
    question: "Which one does NOT belong? Dog, Cat, Rabbit, Car",
    visual: "text",
    options: ["Car", "Dog", "Cat", "Rabbit"], correct: 0,
    explanation: "Dog, Cat, and Rabbit are all animals. Car is not an animal." },

  { id: "Y1LR8", category: "Logical Reasoning", difficulty: 1,
    question: "What day comes after Wednesday?",
    visual: "text",
    options: ["Thursday", "Tuesday", "Friday", "Monday"], correct: 0,
    explanation: "In the days of the week, Thursday comes right after Wednesday." },

  { id: "Y1LR9", category: "Logical Reasoning", difficulty: 1,
    question: "Which one does NOT belong? Apple, Banana, Orange, Chair",
    visual: "text",
    options: ["Chair", "Apple", "Banana", "Orange"], correct: 0,
    explanation: "Apple, Banana, and Orange are all fruits. Chair is not a fruit." },

  { id: "Y1LR10", category: "Logical Reasoning", difficulty: 1,
    question: "All dogs bark. Rex is a dog. What does Rex do?",
    visual: "text",
    options: ["Rex barks", "Rex meows", "Rex flies", "Rex swims"], correct: 0,
    explanation: "All dogs bark. Rex is a dog, so Rex barks." },

  { id: "Y1LR11", category: "Logical Reasoning", difficulty: 1,
    question: "A ball is bigger than a marble. A watermelon is bigger than a ball. Which is the smallest?",
    visual: "text",
    options: ["Marble", "Ball", "Watermelon", "They are equal"], correct: 0,
    explanation: "Watermelon > Ball > Marble. The marble is the smallest." },

  { id: "Y1LR12", category: "Logical Reasoning", difficulty: 1,
    question: "Which one does NOT belong? Red, Blue, Green, Pizza",
    visual: "text",
    options: ["Pizza", "Red", "Blue", "Green"], correct: 0,
    explanation: "Red, Blue, and Green are all colors. Pizza is not a color." },

  { id: "Y1LR13", category: "Logical Reasoning", difficulty: 1,
    question: "What comes after March?",
    visual: "text",
    options: ["April", "February", "May", "January"], correct: 0,
    explanation: "In the months of the year, April comes right after March." },

  { id: "Y1LR14", category: "Logical Reasoning", difficulty: 1,
    question: "All flowers need sunlight. A rose is a flower. What does a rose need?",
    visual: "text",
    options: ["Sunlight", "Snow", "Darkness", "Ice"], correct: 0,
    explanation: "All flowers need sunlight. A rose is a flower, so a rose needs sunlight." },

  { id: "Y1LR15", category: "Logical Reasoning", difficulty: 1,
    question: "Sara is older than Mia. Mia is older than Lily. Who is the youngest?",
    visual: "text",
    options: ["Lily", "Mia", "Sara", "They are the same age"], correct: 0,
    explanation: "Sara > Mia > Lily. Lily is the youngest." },

  { id: "Y1LR16", category: "Logical Reasoning", difficulty: 1,
    question: "Which one does NOT belong? Shirt, Pants, Hat, Banana",
    visual: "text",
    options: ["Banana", "Shirt", "Pants", "Hat"], correct: 0,
    explanation: "Shirt, Pants, and Hat are all clothes. Banana is not clothing." },

  { id: "Y1LR17", category: "Logical Reasoning", difficulty: 1,
    question: "What day comes before Saturday?",
    visual: "text",
    options: ["Friday", "Sunday", "Thursday", "Monday"], correct: 0,
    explanation: "In the days of the week, Friday comes right before Saturday." },

  { id: "Y1LR18", category: "Logical Reasoning", difficulty: 1,
    question: "All kittens are young cats. Fluffy is a kitten. What is Fluffy?",
    visual: "text",
    options: ["A young cat", "A dog", "A fish", "A bird"], correct: 0,
    explanation: "All kittens are young cats. Fluffy is a kitten, so Fluffy is a young cat." },

  { id: "Y1LR19", category: "Logical Reasoning", difficulty: 1,
    question: "Which one does NOT belong? Car, Bus, Train, Banana",
    visual: "text",
    options: ["Banana", "Car", "Bus", "Train"], correct: 0,
    explanation: "Car, Bus, and Train are all vehicles. Banana is not a vehicle." },

  { id: "Y1LR20", category: "Logical Reasoning", difficulty: 1,
    question: "An elephant is heavier than a lion. A lion is heavier than a rabbit. Which is the heaviest?",
    visual: "text",
    options: ["Elephant", "Lion", "Rabbit", "They all weigh the same"], correct: 0,
    explanation: "Elephant > Lion > Rabbit. The elephant is the heaviest." },

  { id: "Y1LR21", category: "Logical Reasoning", difficulty: 1,
    question: "What comes after January?",
    visual: "text",
    options: ["February", "March", "December", "April"], correct: 0,
    explanation: "In the months of the year, February comes right after January." },

  { id: "Y1LR22", category: "Logical Reasoning", difficulty: 1,
    question: "Which one does NOT belong? Lion, Tiger, Bear, Table",
    visual: "text",
    options: ["Table", "Lion", "Tiger", "Bear"], correct: 0,
    explanation: "Lion, Tiger, and Bear are all animals. Table is not an animal." },

  { id: "Y1LR23", category: "Logical Reasoning", difficulty: 1,
    question: "All puppies are baby dogs. Buddy is a puppy. What is Buddy?",
    visual: "text",
    options: ["A baby dog", "A cat", "A bird", "A fish"], correct: 0,
    explanation: "All puppies are baby dogs. Buddy is a puppy, so Buddy is a baby dog." },

  { id: "Y1LR24", category: "Logical Reasoning", difficulty: 1,
    question: "A tree is taller than a bush. A building is taller than a tree. Which is the tallest?",
    visual: "text",
    options: ["Building", "Tree", "Bush", "They are equal"], correct: 0,
    explanation: "Building > Tree > Bush. The building is the tallest." },

  { id: "Y1LR25", category: "Logical Reasoning", difficulty: 1,
    question: "Which one does NOT belong? Fork, Spoon, Knife, Book",
    visual: "text",
    options: ["Book", "Fork", "Spoon", "Knife"], correct: 0,
    explanation: "Fork, Spoon, and Knife are all things we eat with. Book is not." },

  { id: "Y1LR26", category: "Logical Reasoning", difficulty: 1,
    question: "What day comes after Sunday?",
    visual: "text",
    options: ["Monday", "Saturday", "Tuesday", "Friday"], correct: 0,
    explanation: "In the days of the week, Monday comes right after Sunday." },

  // ==========================================================================
  // SPATIAL REASONING (26 questions)
  // ==========================================================================

  { id: "Y1SR1", category: "Spatial Reasoning", difficulty: 1,
    question: "How many sides does a triangle have?",
    visual: "text",
    options: ["3", "4", "5", "6"], correct: 0,
    explanation: "A triangle has 3 sides — that's why it's called a 'tri'-angle." },

  { id: "Y1SR2", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape has 4 equal sides and 4 right angles?",
    visual: "text",
    options: ["Square", "Triangle", "Circle", "Pentagon"], correct: 0,
    explanation: "A square has 4 equal sides and 4 right angles (90°)." },

  { id: "Y1SR3", category: "Spatial Reasoning", difficulty: 1,
    question: "How many corners does a rectangle have?",
    visual: "text",
    options: ["4", "3", "5", "6"], correct: 0,
    explanation: "A rectangle has 4 corners (vertices)." },

  { id: "Y1SR4", category: "Spatial Reasoning", difficulty: 1,
    question: "Which shape is round with no corners?",
    visual: "text",
    options: ["Circle", "Square", "Triangle", "Rectangle"], correct: 0,
    explanation: "A circle is perfectly round and has no corners or straight sides." },

  { id: "Y1SR5", category: "Spatial Reasoning", difficulty: 1,
    question: "How many sides does a square have?",
    visual: "text",
    options: ["4", "3", "5", "6"], correct: 0,
    explanation: "A square has exactly 4 sides, all the same length." },

  { id: "Y1SR6", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape does a ball look like from any direction?",
    visual: "text",
    options: ["Circle", "Square", "Oval", "Triangle"], correct: 0,
    explanation: "A ball (sphere) always looks like a circle from every angle." },

  { id: "Y1SR7", category: "Spatial Reasoning", difficulty: 1,
    question: "How many sides does a rectangle have?",
    visual: "text",
    options: ["4", "3", "5", "6"], correct: 0,
    explanation: "A rectangle has 4 sides — two long ones and two short ones." },

  { id: "Y1SR8", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape has 3 corners?",
    visual: "text",
    options: ["Triangle", "Square", "Circle", "Rectangle"], correct: 0,
    explanation: "A triangle has 3 corners (and 3 sides)." },

  { id: "Y1SR9", category: "Spatial Reasoning", difficulty: 1,
    question: "If you stand facing the sun in the morning, which hand points North?",
    visual: "text",
    options: ["Left hand", "Right hand", "Both hands", "Neither hand"], correct: 0,
    explanation: "The sun rises in the East. If you face East, your left hand points North." },

  { id: "Y1SR10", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape is a door usually?",
    visual: "text",
    options: ["Rectangle", "Circle", "Triangle", "Star"], correct: 0,
    explanation: "Most doors are shaped like a rectangle — taller than they are wide." },

  { id: "Y1SR11", category: "Spatial Reasoning", difficulty: 1,
    question: "How many corners does a circle have?",
    visual: "text",
    options: ["0", "1", "2", "4"], correct: 0,
    explanation: "A circle has no corners at all. It is perfectly round." },

  { id: "Y1SR12", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape is a pizza slice?",
    visual: "text",
    options: ["Triangle", "Square", "Circle", "Rectangle"], correct: 0,
    explanation: "A pizza slice is shaped like a triangle (with a rounded edge)." },

  { id: "Y1SR13", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape is a clock face?",
    visual: "text",
    options: ["Circle", "Square", "Triangle", "Rectangle"], correct: 0,
    explanation: "Most clock faces are shaped like a circle." },

  { id: "Y1SR14", category: "Spatial Reasoning", difficulty: 1,
    question: "How many sides does a circle have?",
    visual: "text",
    options: ["0", "1", "2", "4"], correct: 0,
    explanation: "A circle has no straight sides. It is a curved shape." },

  { id: "Y1SR15", category: "Spatial Reasoning", difficulty: 1,
    question: "Which shape has more sides: a triangle or a square?",
    visual: "text",
    options: ["Square", "Triangle", "They have the same", "Neither has sides"], correct: 0,
    explanation: "A square has 4 sides and a triangle has 3. The square has more." },

  { id: "Y1SR16", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape is a window usually?",
    visual: "text",
    options: ["Square or Rectangle", "Circle", "Triangle", "Star"], correct: 0,
    explanation: "Most windows are square or rectangle shaped." },

  { id: "Y1SR17", category: "Spatial Reasoning", difficulty: 1,
    question: "If you look at a box from the top, what shape do you see?",
    visual: "text",
    options: ["Rectangle", "Triangle", "Circle", "Star"], correct: 0,
    explanation: "Looking at a box from above, you see its top face which is a rectangle (or square)." },

  { id: "Y1SR18", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape is a coin?",
    visual: "text",
    options: ["Circle", "Square", "Triangle", "Rectangle"], correct: 0,
    explanation: "Coins are round, so they look like a circle." },

  { id: "Y1SR19", category: "Spatial Reasoning", difficulty: 1,
    question: "Which is bigger: a shape with 3 dots or a shape with 5 dots?",
    visual: "text",
    options: ["The shape with 5 dots", "The shape with 3 dots", "They are the same", "We can't tell"], correct: 0,
    explanation: "5 is more than 3, so the shape with 5 dots has more." },

  { id: "Y1SR20", category: "Spatial Reasoning", difficulty: 1,
    question: "If you fold a piece of paper in half, how many layers do you have?",
    visual: "text",
    options: ["2", "1", "3", "4"], correct: 0,
    explanation: "Folding paper in half gives you 2 layers stacked on top of each other." },

  { id: "Y1SR21", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape is a sandwich cut corner to corner?",
    visual: "text",
    options: ["Two triangles", "Two squares", "Two circles", "Two rectangles"], correct: 0,
    explanation: "Cutting a square sandwich from corner to corner makes two triangles." },

  { id: "Y1SR22", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape is the face of a die (dice)?",
    visual: "text",
    options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 0,
    explanation: "Each face of a die is a square." },

  { id: "Y1SR23", category: "Spatial Reasoning", difficulty: 1,
    question: "How many corners does a triangle have?",
    visual: "text",
    options: ["3", "4", "2", "5"], correct: 0,
    explanation: "A triangle has 3 corners, one at each point." },

  { id: "Y1SR24", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape is a stop sign?",
    visual: "text",
    options: ["Octagon", "Circle", "Square", "Triangle"], correct: 0,
    explanation: "A stop sign is an octagon — it has 8 sides." },

  { id: "Y1SR25", category: "Spatial Reasoning", difficulty: 1,
    question: "If a butterfly spreads its wings, both sides look the same. This is called:",
    visual: "text",
    options: ["Symmetry", "Counting", "Addition", "Subtraction"], correct: 0,
    explanation: "When both sides look the same, we call it symmetry." },

  { id: "Y1SR26", category: "Spatial Reasoning", difficulty: 1,
    question: "What shape is an egg?",
    visual: "text",
    options: ["Oval", "Circle", "Square", "Triangle"], correct: 0,
    explanation: "An egg is shaped like an oval — it is round but longer in one direction." },

  // ==========================================================================
  // MATHEMATICAL PUZZLES (26 questions)
  // ==========================================================================

  { id: "Y1MP1", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 5 candies. Your friend gives you 3 more. How many do you have?",
    visual: "text",
    options: ["8", "3", "5", "15"], correct: 0,
    explanation: "5 + 3 = 8 candies." },

  { id: "Y1MP2", category: "Mathematical Puzzles", difficulty: 1,
    question: "A spider has 8 legs. How many legs do 2 spiders have?",
    visual: "text",
    options: ["16", "10", "8", "12"], correct: 0,
    explanation: "2 spiders × 8 legs = 16 legs." },

  { id: "Y1MP3", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 10 cookies and eat 4. How many are left?",
    visual: "text",
    options: ["6", "4", "14", "10"], correct: 0,
    explanation: "10 − 4 = 6 cookies left." },

  { id: "Y1MP4", category: "Mathematical Puzzles", difficulty: 1,
    question: "How many wheels do 3 bicycles have?",
    visual: "text",
    options: ["6", "3", "9", "4"], correct: 0,
    explanation: "Each bicycle has 2 wheels. 3 × 2 = 6 wheels." },

  { id: "Y1MP5", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 3 red apples and 2 green apples. How many apples do you have?",
    visual: "text",
    options: ["5", "3", "6", "1"], correct: 0,
    explanation: "3 + 2 = 5 apples in total." },

  { id: "Y1MP6", category: "Mathematical Puzzles", difficulty: 1,
    question: "There are 4 birds on a branch. 1 flies away. How many are left?",
    visual: "text",
    options: ["3", "4", "5", "2"], correct: 0,
    explanation: "4 − 1 = 3 birds left on the branch." },

  { id: "Y1MP7", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 6 candies and your friend gives you 2 more. How many do you have now?",
    visual: "text",
    options: ["8", "4", "6", "10"], correct: 0,
    explanation: "6 + 2 = 8 candies." },

  { id: "Y1MP8", category: "Mathematical Puzzles", difficulty: 1,
    question: "There are 7 fish in a pond. 3 swim away. How many are left?",
    visual: "text",
    options: ["4", "3", "7", "10"], correct: 0,
    explanation: "7 − 3 = 4 fish left in the pond." },

  { id: "Y1MP9", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 8 crayons. You share them equally with your friend. How many does each person get?",
    visual: "text",
    options: ["4", "8", "2", "6"], correct: 0,
    explanation: "8 ÷ 2 = 4 crayons for each person." },

  { id: "Y1MP10", category: "Mathematical Puzzles", difficulty: 1,
    question: "A dog has 4 legs. How many legs do 3 dogs have?",
    visual: "text",
    options: ["12", "7", "8", "16"], correct: 0,
    explanation: "3 dogs × 4 legs = 12 legs." },

  { id: "Y1MP11", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 2 toy cars. Your mom gives you 2 more. How many toy cars do you have?",
    visual: "text",
    options: ["4", "2", "6", "3"], correct: 0,
    explanation: "2 + 2 = 4 toy cars." },

  { id: "Y1MP12", category: "Mathematical Puzzles", difficulty: 1,
    question: "There are 9 balloons. 5 pop. How many are left?",
    visual: "text",
    options: ["4", "5", "9", "14"], correct: 0,
    explanation: "9 − 5 = 4 balloons left." },

  { id: "Y1MP13", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 3 stickers. You get double that amount. How many do you have now?",
    visual: "text",
    options: ["6", "3", "9", "5"], correct: 0,
    explanation: "Double of 3 is 3 + 3 = 6 stickers." },

  { id: "Y1MP14", category: "Mathematical Puzzles", difficulty: 1,
    question: "There are 6 ducks in a lake. 2 more come. How many ducks are there now?",
    visual: "text",
    options: ["8", "4", "6", "10"], correct: 0,
    explanation: "6 + 2 = 8 ducks." },

  { id: "Y1MP15", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 10 grapes. You share them equally with your friend. How many does each person get?",
    visual: "text",
    options: ["5", "10", "3", "2"], correct: 0,
    explanation: "10 ÷ 2 = 5 grapes for each person." },

  { id: "Y1MP16", category: "Mathematical Puzzles", difficulty: 1,
    question: "A cat has 4 legs. How many legs do 2 cats have?",
    visual: "text",
    options: ["8", "4", "6", "10"], correct: 0,
    explanation: "2 cats × 4 legs = 8 legs." },

  { id: "Y1MP17", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 4 cookies. Your sister gives you 5 more. How many do you have?",
    visual: "text",
    options: ["9", "4", "5", "1"], correct: 0,
    explanation: "4 + 5 = 9 cookies." },

  { id: "Y1MP18", category: "Mathematical Puzzles", difficulty: 1,
    question: "There are 8 candles on a cake. You blow out 3. How many are still lit?",
    visual: "text",
    options: ["5", "3", "8", "11"], correct: 0,
    explanation: "8 − 3 = 5 candles still lit." },

  { id: "Y1MP19", category: "Mathematical Puzzles", difficulty: 1,
    question: "What is double of 4?",
    visual: "text",
    options: ["8", "4", "6", "2"], correct: 0,
    explanation: "Double of 4 means 4 + 4 = 8." },

  { id: "Y1MP20", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 6 toy blocks. You share them equally among 3 friends. How many does each friend get?",
    visual: "text",
    options: ["2", "3", "6", "1"], correct: 0,
    explanation: "6 ÷ 3 = 2 blocks for each friend." },

  { id: "Y1MP21", category: "Mathematical Puzzles", difficulty: 1,
    question: "There are 5 flowers in a garden. Someone plants 4 more. How many flowers are there?",
    visual: "text",
    options: ["9", "5", "4", "1"], correct: 0,
    explanation: "5 + 4 = 9 flowers." },

  { id: "Y1MP22", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 7 marbles. You lose 2. How many do you have left?",
    visual: "text",
    options: ["5", "7", "9", "2"], correct: 0,
    explanation: "7 − 2 = 5 marbles left." },

  { id: "Y1MP23", category: "Mathematical Puzzles", difficulty: 1,
    question: "A bird has 2 wings. How many wings do 5 birds have?",
    visual: "text",
    options: ["10", "5", "7", "15"], correct: 0,
    explanation: "5 birds × 2 wings = 10 wings." },

  { id: "Y1MP24", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 12 candies. You share them equally among 3 friends. How many does each friend get?",
    visual: "text",
    options: ["4", "3", "6", "12"], correct: 0,
    explanation: "12 ÷ 3 = 4 candies for each friend." },

  { id: "Y1MP25", category: "Mathematical Puzzles", difficulty: 1,
    question: "There are 3 kittens. Each kitten has 4 legs. How many legs are there?",
    visual: "text",
    options: ["12", "7", "8", "6"], correct: 0,
    explanation: "3 kittens × 4 legs = 12 legs." },

  { id: "Y1MP26", category: "Mathematical Puzzles", difficulty: 1,
    question: "You have 1 teddy bear. Your grandma gives you 1 more. How many teddy bears do you have?",
    visual: "text",
    options: ["2", "1", "3", "0"], correct: 0,
    explanation: "1 + 1 = 2 teddy bears." }

];
