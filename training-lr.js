const TRAINING_LR = {
  tips: [
    { title: "Diagram the Relationships", content: "For syllogisms, draw Venn diagrams. 'All A are B' means A is inside B. 'Some A are B' means overlap." },
    { title: "Use Modus Tollens and Modus Ponens", content: "If P→Q: P true → Q true (ponens). Q false → P false (tollens). Q true or P false tells you nothing new." },
    { title: "Order Items on a Line", content: "For ranking problems, write inequalities: A>B, C<B → chain into A>B>C. The answer falls out." },
    { title: "Test Each Answer Against Premises", content: "Plug each answer choice in and check for contradictions. The correct answer creates no contradiction." }
  ],
  levels: [
    // ═══════════════════════════════════════════════════════════════
    //  LEVEL 1 — Simple syllogisms and transitive logic
    // ═══════════════════════════════════════════════════════════════
    {
      level: 1,
      name: "Beginner",
      description: "Simple syllogisms and transitive logic",
      exercises: [
        {
          id: "TLR1_01",
          question: "All doctors are professionals. Dr. Adams is a doctor. What can you conclude?",
          hint: "If all X are Y, and Z is an X, then Z must be a Y.",
          options: [
            "Dr. Adams is a professional",
            "Dr. Adams is not a professional",
            "Some professionals are not doctors",
            "All professionals are doctors"
          ],
          correct: 0,
          explanation: "Since all doctors are professionals and Dr. Adams is a doctor, Dr. Adams must be a professional. This is a direct application of the universal affirmative syllogism."
        },
        {
          id: "TLR1_02",
          question: "All lions are animals. Simba is a lion. What can you conclude?",
          hint: "Apply the rule: if every member of group X belongs to group Y, and Simba is in group X…",
          options: [
            "Simba is an animal",
            "All animals are lions",
            "Simba is not an animal",
            "Some animals are not lions"
          ],
          correct: 0,
          explanation: "All lions are animals and Simba is a lion, so Simba is an animal."
        },
        {
          id: "TLR1_03",
          question: "All oranges are fruits. This item is an orange. What can you conclude?",
          hint: "If every orange is a fruit, and this item is an orange…",
          options: [
            "This item is a fruit",
            "All fruits are oranges",
            "This item is a vegetable",
            "This item might not be a fruit"
          ],
          correct: 0,
          explanation: "Since all oranges are fruits and this item is an orange, this item must be a fruit."
        },
        {
          id: "TLR1_04",
          question: "All cars are vehicles. A BMW is a car. What can you conclude?",
          hint: "Cars are a subset of vehicles. Where does a BMW fall?",
          options: [
            "A BMW is a vehicle",
            "All vehicles are cars",
            "A BMW is not a vehicle",
            "Some vehicles are not cars"
          ],
          correct: 0,
          explanation: "All cars are vehicles. A BMW is a car, therefore a BMW is a vehicle."
        },
        {
          id: "TLR1_05",
          question: "No birds are insects. A robin is a bird. What can you conclude?",
          hint: "If no member of group X is in group Y, and a robin is in group X…",
          options: [
            "A robin is not an insect",
            "A robin is an insect",
            "Some insects are birds",
            "All robins are insects"
          ],
          correct: 0,
          explanation: "No birds are insects. Since a robin is a bird, a robin cannot be an insect."
        },
        {
          id: "TLR1_06",
          question: "All ice is cold. The cube on the table is made of ice. What can you conclude?",
          hint: "If everything that is ice is cold, and the cube is ice…",
          options: [
            "The cube is cold",
            "The cube is warm",
            "Not all ice is cold",
            "The table is cold"
          ],
          correct: 0,
          explanation: "All ice is cold and the cube is ice, so the cube is cold."
        },
        {
          id: "TLR1_07",
          question: "All violins are instruments. A Stradivarius is a violin. What can you conclude?",
          hint: "Violins belong to the set of instruments. A Stradivarius belongs to…",
          options: [
            "A Stradivarius is an instrument",
            "All instruments are violins",
            "A Stradivarius is not an instrument",
            "Some instruments cannot be played"
          ],
          correct: 0,
          explanation: "All violins are instruments, and a Stradivarius is a violin, so it is an instrument."
        },
        {
          id: "TLR1_08",
          question: "All roses are plants. This specimen is a rose. What can you conclude?",
          hint: "Roses are a subset of plants. This specimen is a rose, so…",
          options: [
            "This specimen is a plant",
            "All plants are roses",
            "This specimen is not a plant",
            "Roses are not plants"
          ],
          correct: 0,
          explanation: "All roses are plants. This specimen is a rose, therefore it is a plant."
        },
        {
          id: "TLR1_09",
          question: "All gold is metallic. This ring is made of gold. What can you conclude?",
          hint: "Gold is always metallic. The ring is gold, so…",
          options: [
            "This ring is metallic",
            "All metallic things are gold",
            "This ring is not metallic",
            "Gold is sometimes non-metallic"
          ],
          correct: 0,
          explanation: "All gold is metallic. The ring is gold, so the ring is metallic."
        },
        {
          id: "TLR1_10",
          question: "All rivers contain flowing water. The Amazon is a river. What can you conclude?",
          hint: "If every river contains flowing water, and the Amazon is a river…",
          options: [
            "The Amazon contains flowing water",
            "All flowing water is a river",
            "The Amazon does not contain water",
            "Some rivers are dry"
          ],
          correct: 0,
          explanation: "All rivers contain flowing water. The Amazon is a river, so it contains flowing water."
        },
        {
          id: "TLR1_11",
          question: "All novels are books. All books contain pages. What can you conclude?",
          hint: "Chain the two relationships: novels → books → pages.",
          options: [
            "All novels contain pages",
            "All pages are in novels",
            "Some books are not novels",
            "Novels do not contain pages"
          ],
          correct: 0,
          explanation: "All novels are books, and all books contain pages, so by transitivity all novels contain pages."
        },
        {
          id: "TLR1_12",
          question: "All chefs can cook. Pierre is a chef. What can you conclude?",
          hint: "If every chef can cook, and Pierre is a chef…",
          options: [
            "Pierre can cook",
            "Everyone who can cook is a chef",
            "Pierre cannot cook",
            "Some chefs cannot cook"
          ],
          correct: 0,
          explanation: "All chefs can cook. Pierre is a chef, so Pierre can cook."
        },
        {
          id: "TLR1_13",
          question: "All eagles are birds. All birds have feathers. What can you conclude?",
          hint: "Chain the sets: eagles ⊂ birds ⊂ feathered creatures.",
          options: [
            "All eagles have feathers",
            "All feathered creatures are eagles",
            "Eagles do not have feathers",
            "Some birds are not eagles"
          ],
          correct: 0,
          explanation: "All eagles are birds and all birds have feathers, so all eagles have feathers."
        },
        {
          id: "TLR1_14",
          question: "All planets orbit a star. Saturn is a planet. What can you conclude?",
          hint: "Planets orbit stars. Saturn is a planet, so…",
          options: [
            "Saturn orbits a star",
            "All things that orbit a star are planets",
            "Saturn does not orbit a star",
            "Stars orbit Saturn"
          ],
          correct: 0,
          explanation: "All planets orbit a star. Saturn is a planet, therefore Saturn orbits a star."
        },
        {
          id: "TLR1_15",
          question: "All whales are mammals. A blue whale is a whale. What can you conclude?",
          hint: "Whales are a subset of mammals. A blue whale is a whale, so…",
          options: [
            "A blue whale is a mammal",
            "All mammals are whales",
            "A blue whale is a fish",
            "Some whales are not mammals"
          ],
          correct: 0,
          explanation: "All whales are mammals. A blue whale is a whale, so a blue whale is a mammal."
        },
        {
          id: "TLR1_16",
          question: "No herbivores eat meat. A rabbit is a herbivore. What can you conclude?",
          hint: "If no herbivore eats meat, and a rabbit is a herbivore…",
          options: [
            "A rabbit does not eat meat",
            "A rabbit eats meat",
            "Some herbivores eat meat",
            "All meat-eaters are rabbits"
          ],
          correct: 0,
          explanation: "No herbivores eat meat. A rabbit is a herbivore, so a rabbit does not eat meat."
        },
        {
          id: "TLR1_17",
          question: "All puppies are dogs. All dogs are canines. What can you conclude?",
          hint: "Chain: puppies ⊂ dogs ⊂ canines.",
          options: [
            "All puppies are canines",
            "All canines are puppies",
            "Puppies are not canines",
            "Some dogs are not canines"
          ],
          correct: 0,
          explanation: "All puppies are dogs and all dogs are canines, so by transitivity all puppies are canines."
        },
        {
          id: "TLR1_18",
          question: "All teachers work in education. Mr. Brown is a teacher. What can you conclude?",
          hint: "If every teacher works in education, and Mr. Brown is a teacher…",
          options: [
            "Mr. Brown works in education",
            "Everyone in education is a teacher",
            "Mr. Brown does not work in education",
            "Some teachers do not work in education"
          ],
          correct: 0,
          explanation: "All teachers work in education. Mr. Brown is a teacher, so he works in education."
        },
        {
          id: "TLR1_19",
          question: "All diamonds are gems. All gems are valuable. What can you conclude?",
          hint: "Chain: diamonds ⊂ gems ⊂ valuable things.",
          options: [
            "All diamonds are valuable",
            "All valuable things are diamonds",
            "Diamonds are not valuable",
            "Some gems are not valuable"
          ],
          correct: 0,
          explanation: "All diamonds are gems and all gems are valuable, so all diamonds are valuable."
        },
        {
          id: "TLR1_20",
          question: "All summer days are warm. Today is a summer day. What can you conclude?",
          hint: "If every summer day is warm, and today is a summer day…",
          options: [
            "Today is warm",
            "All warm days are summer days",
            "Today is cold",
            "Summer days are not always warm"
          ],
          correct: 0,
          explanation: "All summer days are warm. Today is a summer day, so today is warm."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    //  LEVEL 2 — Modus tollens, ponens, and categorical reasoning
    // ═══════════════════════════════════════════════════════════════
    {
      level: 2,
      name: "Elementary",
      description: "Modus tollens, ponens, and categorical reasoning",
      exercises: [
        {
          id: "TLR2_01",
          question: "If it snows, the temperature is below freezing. It is snowing. What can you conclude?",
          hint: "Modus Ponens: If P→Q and P is true, then Q must be true.",
          options: [
            "The temperature is below freezing",
            "The temperature is above freezing",
            "It is not snowing",
            "Nothing can be concluded"
          ],
          correct: 0,
          explanation: "Modus Ponens: P→Q (snow → below freezing). P is true (snowing), so Q is true (below freezing)."
        },
        {
          id: "TLR2_02",
          question: "If you study regularly, your grades improve. Your grades did not improve. What can you conclude?",
          hint: "Modus Tollens: If P→Q and Q is false, then P must be false.",
          options: [
            "You did not study regularly",
            "You studied regularly",
            "Your grades improved",
            "Studying has no effect on grades"
          ],
          correct: 0,
          explanation: "Modus Tollens: P→Q (study → grades improve). Q is false (grades didn't improve), so P is false (didn't study regularly)."
        },
        {
          id: "TLR2_03",
          question: "If a phone is fully charged, it lasts all day. Your phone is fully charged. What can you conclude?",
          hint: "The antecedent is true. Apply Modus Ponens.",
          options: [
            "Your phone will last all day",
            "Your phone will not last all day",
            "Your phone is not charged",
            "Nothing can be concluded"
          ],
          correct: 0,
          explanation: "Modus Ponens: P→Q (charged → lasts all day). P is true (fully charged), so Q is true (lasts all day)."
        },
        {
          id: "TLR2_04",
          question: "If the alarm is set, it rings at 7 AM. The alarm did not ring at 7 AM. What can you conclude?",
          hint: "The consequent is false. Apply Modus Tollens.",
          options: [
            "The alarm was not set",
            "The alarm was set",
            "The alarm rang at 7 AM",
            "The alarm is broken"
          ],
          correct: 0,
          explanation: "Modus Tollens: P→Q (alarm set → rings at 7). Q is false (didn't ring), so P is false (not set)."
        },
        {
          id: "TLR2_05",
          question: "If you have the correct key, the lock opens. You have the correct key. What can you conclude?",
          hint: "The antecedent is true. Apply Modus Ponens.",
          options: [
            "The lock opens",
            "The lock does not open",
            "You do not have the correct key",
            "The lock is jammed"
          ],
          correct: 0,
          explanation: "Modus Ponens: P→Q (correct key → lock opens). P is true (have key), so Q is true (lock opens)."
        },
        {
          id: "TLR2_06",
          question: "If the electricity is on, the refrigerator runs. The refrigerator is not running. What can you conclude?",
          hint: "The consequent is false. Apply Modus Tollens.",
          options: [
            "The electricity is not on",
            "The electricity is on",
            "The refrigerator is running",
            "Nothing can be concluded"
          ],
          correct: 0,
          explanation: "Modus Tollens: P→Q (electricity → fridge runs). Q is false (not running), so P is false (electricity off)."
        },
        {
          id: "TLR2_07",
          question: "If you water plants daily, they stay green. You water your plants daily. What can you conclude?",
          hint: "The condition (antecedent) is met. What follows?",
          options: [
            "Your plants stay green",
            "Your plants will wilt",
            "You do not water them",
            "Watering has no effect"
          ],
          correct: 0,
          explanation: "Modus Ponens: P→Q (water daily → stay green). P is true (you water daily), so Q is true (they stay green)."
        },
        {
          id: "TLR2_08",
          question: "If a car has fuel, the engine can start. The engine cannot start. What can you conclude?",
          hint: "The result (consequent) did not happen. Apply Modus Tollens.",
          options: [
            "The car does not have fuel",
            "The car has fuel",
            "The engine started",
            "Nothing can be concluded"
          ],
          correct: 0,
          explanation: "Modus Tollens: P→Q (fuel → engine starts). Q is false (engine won't start), so P is false (no fuel)."
        },
        {
          id: "TLR2_09",
          question: "If you buy a ticket, you can board the train. You bought a ticket. What can you conclude?",
          hint: "You satisfied the condition. What must follow?",
          options: [
            "You can board the train",
            "You cannot board the train",
            "You did not buy a ticket",
            "The train is cancelled"
          ],
          correct: 0,
          explanation: "Modus Ponens: P→Q (ticket → board train). P is true (bought ticket), so Q is true (can board)."
        },
        {
          id: "TLR2_10",
          question: "If you have a valid passport, you can cross the border. You cannot cross the border. What can you conclude?",
          hint: "You could not do Q. If P→Q, what does ¬Q tell you about P?",
          options: [
            "You do not have a valid passport",
            "You have a valid passport",
            "You crossed the border",
            "Passports are not required"
          ],
          correct: 0,
          explanation: "Modus Tollens: P→Q (passport → cross border). Q is false (can't cross), so P is false (no valid passport)."
        },
        {
          id: "TLR2_11",
          question: "If an animal is a horse, it has four legs. This animal has four legs. What can you conclude?",
          hint: "Knowing the consequent is true does NOT prove the antecedent. Many animals have four legs.",
          options: [
            "We cannot conclude it is a horse",
            "It is definitely a horse",
            "It has two legs",
            "It is not an animal"
          ],
          correct: 0,
          explanation: "Affirming the consequent is a fallacy. P→Q (horse → four legs) and Q is true does NOT mean P is true. Many non-horse animals have four legs."
        },
        {
          id: "TLR2_12",
          question: "If a person is a lawyer, they studied law. Sam studied law. What can you conclude?",
          hint: "Just because the result (Q) is true, can you be sure the condition (P) is true?",
          options: [
            "We cannot conclude Sam is a lawyer",
            "Sam is definitely a lawyer",
            "Sam did not study law",
            "All law students are lawyers"
          ],
          correct: 0,
          explanation: "Affirming the consequent is a fallacy. P→Q (lawyer → studied law) and Q true (studied law) does NOT prove P (is a lawyer). Many people study law without becoming lawyers."
        },
        {
          id: "TLR2_13",
          question: "If the oven is on, the kitchen gets warm. The kitchen is not warm. What can you conclude?",
          hint: "The consequent is false. What does Modus Tollens say?",
          options: [
            "The oven is not on",
            "The oven is on",
            "The kitchen is warm",
            "Nothing can be concluded"
          ],
          correct: 0,
          explanation: "Modus Tollens: P→Q (oven on → kitchen warm). Q is false (not warm), so P is false (oven not on)."
        },
        {
          id: "TLR2_14",
          question: "If you press the brake, the car slows down. You pressed the brake. What can you conclude?",
          hint: "The antecedent is true. Apply Modus Ponens.",
          options: [
            "The car slows down",
            "The car speeds up",
            "You did not press the brake",
            "Nothing happens"
          ],
          correct: 0,
          explanation: "Modus Ponens: P→Q (press brake → car slows). P is true (pressed brake), so Q is true (car slows)."
        },
        {
          id: "TLR2_15",
          question: "If it is snowing, the sky is cloudy. The sky is cloudy. What can you conclude?",
          hint: "Cloudy skies can exist without snow. Is this affirming the consequent?",
          options: [
            "We cannot conclude it is snowing",
            "It is definitely snowing",
            "The sky is clear",
            "It never snows when cloudy"
          ],
          correct: 0,
          explanation: "Affirming the consequent is a fallacy. P→Q (snow → cloudy) and Q true (cloudy) does NOT mean P is true. Skies can be cloudy without snow."
        },
        {
          id: "TLR2_16",
          question: "If the battery is charged, the flashlight works. The flashlight does not work. What can you conclude?",
          hint: "The flashlight fails (Q false). What does that tell you about the battery (P)?",
          options: [
            "The battery is not charged",
            "The battery is charged",
            "The flashlight works",
            "Nothing can be concluded"
          ],
          correct: 0,
          explanation: "Modus Tollens: P→Q (charged → flashlight works). Q is false (doesn't work), so P is false (not charged)."
        },
        {
          id: "TLR2_17",
          question: "If you add sugar to tea, the tea becomes sweet. You added sugar to the tea. What can you conclude?",
          hint: "The condition is met. Apply Modus Ponens.",
          options: [
            "The tea becomes sweet",
            "The tea stays bitter",
            "You did not add sugar",
            "Sugar has no effect"
          ],
          correct: 0,
          explanation: "Modus Ponens: P→Q (add sugar → tea sweet). P is true (added sugar), so Q is true (tea is sweet)."
        },
        {
          id: "TLR2_18",
          question: "If the Wi-Fi router is on, devices can connect to the internet. Devices cannot connect to the internet. What can you conclude?",
          hint: "Devices can't connect (Q false). Use Modus Tollens.",
          options: [
            "The Wi-Fi router is not on",
            "The Wi-Fi router is on",
            "Devices can connect",
            "The internet does not exist"
          ],
          correct: 0,
          explanation: "Modus Tollens: P→Q (router on → devices connect). Q is false (can't connect), so P is false (router not on)."
        },
        {
          id: "TLR2_19",
          question: "If a student enrolls in a course, they receive a syllabus. Emma enrolled in the course. What can you conclude?",
          hint: "Emma satisfied the antecedent. What must follow?",
          options: [
            "Emma receives a syllabus",
            "Emma does not receive a syllabus",
            "Emma did not enroll",
            "The course has no syllabus"
          ],
          correct: 0,
          explanation: "Modus Ponens: P→Q (enroll → receive syllabus). P is true (Emma enrolled), so Q is true (Emma receives a syllabus)."
        },
        {
          id: "TLR2_20",
          question: "If it is Sunday, the shop is closed. It is not Sunday. What can you conclude?",
          hint: "The antecedent is false. Does that tell you whether Q is true or false? Think about the denying-the-antecedent fallacy.",
          options: [
            "We cannot conclude whether the shop is open or closed",
            "The shop is definitely open",
            "The shop is definitely closed",
            "It must be Saturday"
          ],
          correct: 0,
          explanation: "Denying the antecedent is a fallacy. P→Q (Sunday → closed). P false (not Sunday) does NOT tell us Q. The shop might be closed for other reasons."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    //  LEVEL 3 — Ordering, ranking, and basic set problems
    // ═══════════════════════════════════════════════════════════════
    {
      level: 3,
      name: "Intermediate",
      description: "Ordering, ranking, and basic set problems",
      exercises: [
        {
          id: "TLR3_01",
          question: "Anna is taller than Dana. Dana is taller than Ben. Ben is taller than Carl. Who is the shortest?",
          hint: "Write out the chain of inequalities and find the bottom.",
          options: [
            "Carl",
            "Ben",
            "Dana",
            "Anna"
          ],
          correct: 0,
          explanation: "Anna > Dana > Ben > Carl. Carl is at the bottom, so Carl is the shortest."
        },
        {
          id: "TLR3_02",
          question: "Felix is lighter than George. Harry is heavier than George. Ivan is lighter than Felix. Who is the heaviest?",
          hint: "Order each pair: H>G, G>F, F>I. Chain them.",
          options: [
            "Harry",
            "George",
            "Felix",
            "Ivan"
          ],
          correct: 0,
          explanation: "Harry > George > Felix > Ivan. Harry is the heaviest."
        },
        {
          id: "TLR3_03",
          question: "Mia is younger than Nina. Oscar is older than Nina. Pam is younger than Mia. Who is the oldest?",
          hint: "Write inequalities: O>N>M>P. Who is at the top?",
          options: [
            "Oscar",
            "Nina",
            "Mia",
            "Pam"
          ],
          correct: 0,
          explanation: "Oscar > Nina > Mia > Pam. Oscar is the oldest."
        },
        {
          id: "TLR3_04",
          question: "In a race, Raj finished after Sam. Tina finished before Sam. Uma finished after Raj. Who finished first?",
          hint: "Before = faster. Chain finishing positions: Tina before Sam before Raj before Uma.",
          options: [
            "Tina",
            "Sam",
            "Raj",
            "Uma"
          ],
          correct: 0,
          explanation: "Order of finish: Tina → Sam → Raj → Uma. Tina finished first."
        },
        {
          id: "TLR3_05",
          question: "Victor earns less than Wendy. Wendy earns less than Xavier. Yara earns more than Xavier. Who earns the most?",
          hint: "Chain: V<W<X<Y. Who is at the top?",
          options: [
            "Yara",
            "Xavier",
            "Wendy",
            "Victor"
          ],
          correct: 0,
          explanation: "Yara > Xavier > Wendy > Victor. Yara earns the most."
        },
        {
          id: "TLR3_06",
          question: "Eve scored higher than Frank. Grace scored lower than Frank. Dave scored higher than Eve. Who scored the lowest?",
          hint: "D>E>F>G. Who is at the bottom?",
          options: [
            "Grace",
            "Frank",
            "Eve",
            "Dave"
          ],
          correct: 0,
          explanation: "Dave > Eve > Frank > Grace. Grace scored the lowest."
        },
        {
          id: "TLR3_07",
          question: "Lily swims faster than Max. Olivia swims faster than Lily. Noah swims slower than Max. Who is the slowest?",
          hint: "O>L>M>N. Who is at the bottom?",
          options: [
            "Noah",
            "Max",
            "Lily",
            "Olivia"
          ],
          correct: 0,
          explanation: "Olivia > Lily > Max > Noah (speed). Noah is the slowest."
        },
        {
          id: "TLR3_08",
          question: "Quinn is shorter than Ruth. Steve is taller than Tom. Tom is taller than Ruth. Who is the tallest?",
          hint: "Chain: S>T>R>Q. Who is at the top?",
          options: [
            "Steve",
            "Tom",
            "Ruth",
            "Quinn"
          ],
          correct: 0,
          explanation: "Steve > Tom > Ruth > Quinn. Steve is the tallest."
        },
        {
          id: "TLR3_09",
          question: "Amy weighs less than Brian. Clara weighs more than Dan. Dan weighs more than Brian. Who is the lightest?",
          hint: "C>D>B>A. Who is at the bottom?",
          options: [
            "Amy",
            "Brian",
            "Dan",
            "Clara"
          ],
          correct: 0,
          explanation: "Clara > Dan > Brian > Amy. Amy is the lightest."
        },
        {
          id: "TLR3_10",
          question: "Jake runs slower than Kim. Leo runs faster than Mona. Mona runs faster than Kim. Who is the second fastest?",
          hint: "L>M>K>J. Who comes second?",
          options: [
            "Mona",
            "Kim",
            "Leo",
            "Jake"
          ],
          correct: 0,
          explanation: "Leo > Mona > Kim > Jake. Mona is the second fastest."
        },
        {
          id: "TLR3_11",
          question: "In a group of 20 students, 12 play tennis and 10 play soccer. Every student plays at least one of these sports. How many play both?",
          hint: "Use: Both = A + B − Total (when everyone does at least one).",
          options: [
            "2",
            "4",
            "8",
            "10"
          ],
          correct: 0,
          explanation: "Both = 12 + 10 − 20 = 2. Two students play both sports."
        },
        {
          id: "TLR3_12",
          question: "In a group of 25 people, 18 like coffee and 13 like tea. Everyone likes at least one. How many like both?",
          hint: "Both = coffee + tea − total.",
          options: [
            "6",
            "5",
            "7",
            "8"
          ],
          correct: 0,
          explanation: "Both = 18 + 13 − 25 = 6. Six people like both."
        },
        {
          id: "TLR3_13",
          question: "In a company of 35 employees, 20 speak French and 22 speak German. Every employee speaks at least one of these languages. How many speak both?",
          hint: "Both = French + German − Total.",
          options: [
            "7",
            "5",
            "8",
            "13"
          ],
          correct: 0,
          explanation: "Both = 20 + 22 − 35 = 7. Seven employees speak both."
        },
        {
          id: "TLR3_14",
          question: "In a group of 40 tourists, 28 visited the museum and 18 visited the park. Every tourist visited at least one place. How many visited both?",
          hint: "Both = museum + park − total.",
          options: [
            "6",
            "10",
            "8",
            "4"
          ],
          correct: 0,
          explanation: "Both = 28 + 18 − 40 = 6. Six tourists visited both."
        },
        {
          id: "TLR3_15",
          question: "In a group of 30 readers, 16 read fiction and 20 read non-fiction. Every reader reads at least one type. How many read both?",
          hint: "Both = fiction + non-fiction − total.",
          options: [
            "6",
            "4",
            "10",
            "14"
          ],
          correct: 0,
          explanation: "Both = 16 + 20 − 30 = 6. Six readers read both."
        },
        {
          id: "TLR3_16",
          question: "In a row of people, Alice is 3rd from the left and 5th from the right. How many people are in the row?",
          hint: "Total = left position + right position − 1.",
          options: [
            "7",
            "8",
            "6",
            "9"
          ],
          correct: 0,
          explanation: "Total = 3 + 5 − 1 = 7. There are 7 people in the row."
        },
        {
          id: "TLR3_17",
          question: "In a row, Bob is 7th from the left and 4th from the right. How many people are in the row?",
          hint: "Total = left position + right position − 1.",
          options: [
            "10",
            "11",
            "9",
            "12"
          ],
          correct: 0,
          explanation: "Total = 7 + 4 − 1 = 10. There are 10 people in the row."
        },
        {
          id: "TLR3_18",
          question: "In a queue, Carol is 5th from the front and 9th from the back. How many people are in the queue?",
          hint: "Total = front position + back position − 1.",
          options: [
            "13",
            "14",
            "12",
            "15"
          ],
          correct: 0,
          explanation: "Total = 5 + 9 − 1 = 13. There are 13 people in the queue."
        },
        {
          id: "TLR3_19",
          question: "In a line, David is 9th from the front and 3rd from the back. How many people are in the line?",
          hint: "Total = front position + back position − 1.",
          options: [
            "11",
            "12",
            "10",
            "13"
          ],
          correct: 0,
          explanation: "Total = 9 + 3 − 1 = 11. There are 11 people in the line."
        },
        {
          id: "TLR3_20",
          question: "In a row, Emily is 6th from the left and 6th from the right. How many people are in the row?",
          hint: "Total = left position + right position − 1.",
          options: [
            "11",
            "12",
            "10",
            "13"
          ],
          correct: 0,
          explanation: "Total = 6 + 6 − 1 = 11. There are 11 people in the row."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    //  LEVEL 4 — Inclusion-exclusion, position problems, multi-step
    // ═══════════════════════════════════════════════════════════════
    {
      level: 4,
      name: "Advanced",
      description: "Inclusion-exclusion, position problems, and multi-step deductions",
      exercises: [
        {
          id: "TLR4_01",
          question: "Five people are compared by weight. E is heavier than A. A is heavier than B. C is heavier than D. D is heavier than B. A is heavier than C. Rank from heaviest to lightest.",
          hint: "List each pair: E>A, A>B, C>D>B, A>C. Combine into one chain.",
          options: [
            "E, A, C, D, B",
            "E, A, D, C, B",
            "A, E, C, D, B",
            "E, C, A, D, B"
          ],
          correct: 0,
          explanation: "E > A > C > D > B. E is heaviest, then A, C, D, and B is lightest."
        },
        {
          id: "TLR4_02",
          question: "Five runners finish a race. Sam finishes before Priya. Priya finishes before Quinn. Quinn finishes before Tara. Tara finishes before Rosa. Who finishes third?",
          hint: "Chain the finish order: Sam → Priya → Quinn → Tara → Rosa.",
          options: [
            "Quinn",
            "Priya",
            "Tara",
            "Sam"
          ],
          correct: 0,
          explanation: "Finish order: Sam, Priya, Quinn, Tara, Rosa. Quinn finishes third."
        },
        {
          id: "TLR4_03",
          question: "Five students scored differently on a test. Jack scored higher than Fred. Fred scored higher than Gina. Gina scored higher than Iris. Iris scored higher than Hank. Who scored second lowest?",
          hint: "Chain: J>F>G>I>H. Count from the bottom.",
          options: [
            "Iris",
            "Gina",
            "Hank",
            "Fred"
          ],
          correct: 0,
          explanation: "Jack > Fred > Gina > Iris > Hank. Second lowest (second from bottom) is Iris."
        },
        {
          id: "TLR4_04",
          question: "Six athletes ranked by speed: Diana is faster than Ava. Ava is faster than Bella. Bella is faster than Chloe. Elena is faster than Diana. Fiona is slower than Chloe. Rank from fastest to slowest.",
          hint: "E>D>A>B>C>F. Build the chain step by step.",
          options: [
            "Elena, Diana, Ava, Bella, Chloe, Fiona",
            "Diana, Elena, Ava, Bella, Chloe, Fiona",
            "Elena, Ava, Diana, Bella, Chloe, Fiona",
            "Elena, Diana, Bella, Ava, Chloe, Fiona"
          ],
          correct: 0,
          explanation: "Elena > Diana > Ava > Bella > Chloe > Fiona."
        },
        {
          id: "TLR4_05",
          question: "Five cities ranked by population: Penny has more people than Liam. Liam has more than Mason. Noah has fewer than Oliver. Oliver has fewer than Mason. Rank from most to least populated.",
          hint: "P>L>M>O>N. Combine the relationships.",
          options: [
            "Penny, Liam, Mason, Oliver, Noah",
            "Liam, Penny, Mason, Oliver, Noah",
            "Penny, Mason, Liam, Oliver, Noah",
            "Penny, Liam, Oliver, Mason, Noah"
          ],
          correct: 0,
          explanation: "Penny > Liam > Mason > Oliver > Noah."
        },
        {
          id: "TLR4_06",
          question: "In a company of 60 employees, 38 use Windows and 30 use Mac. Every employee uses at least one operating system. How many use both?",
          hint: "Both = Windows + Mac − Total.",
          options: [
            "8",
            "10",
            "12",
            "6"
          ],
          correct: 0,
          explanation: "Both = 38 + 30 − 60 = 8."
        },
        {
          id: "TLR4_07",
          question: "In a school of 80 students, 55 study Mathematics and 42 study Science. Every student studies at least one subject. How many study both?",
          hint: "Both = Math + Science − Total.",
          options: [
            "17",
            "15",
            "20",
            "23"
          ],
          correct: 0,
          explanation: "Both = 55 + 42 − 80 = 17."
        },
        {
          id: "TLR4_08",
          question: "In a club of 75 members, 50 play chess and 40 play checkers. Every member plays at least one game. How many play both?",
          hint: "Both = chess + checkers − total.",
          options: [
            "15",
            "10",
            "20",
            "25"
          ],
          correct: 0,
          explanation: "Both = 50 + 40 − 75 = 15."
        },
        {
          id: "TLR4_09",
          question: "In a survey of 90 people, 60 like chocolate and 52 like vanilla. Everyone likes at least one flavor. How many like both?",
          hint: "Both = chocolate + vanilla − total.",
          options: [
            "22",
            "18",
            "30",
            "12"
          ],
          correct: 0,
          explanation: "Both = 60 + 52 − 90 = 22."
        },
        {
          id: "TLR4_10",
          question: "In a group of 100 voters, 72 support Proposal A and 65 support Proposal B. Every voter supports at least one proposal. How many support both?",
          hint: "Both = A + B − Total.",
          options: [
            "37",
            "35",
            "40",
            "28"
          ],
          correct: 0,
          explanation: "Both = 72 + 65 − 100 = 37."
        },
        {
          id: "TLR4_11",
          question: "In a survey of 50 people, 30 own a car, 25 own a bicycle, and 10 own both. How many own neither?",
          hint: "At-least-one = car + bicycle − both. Neither = total − at-least-one.",
          options: [
            "5",
            "10",
            "15",
            "0"
          ],
          correct: 0,
          explanation: "At least one = 30 + 25 − 10 = 45. Neither = 50 − 45 = 5."
        },
        {
          id: "TLR4_12",
          question: "In a class of 45 students, 28 passed math, 20 passed science, and 8 passed both. How many passed exactly one subject?",
          hint: "Exactly one = (math only) + (science only) = (28−8) + (20−8).",
          options: [
            "32",
            "40",
            "28",
            "20"
          ],
          correct: 0,
          explanation: "Math only = 28 − 8 = 20. Science only = 20 − 8 = 12. Exactly one = 20 + 12 = 32."
        },
        {
          id: "TLR4_13",
          question: "In a group of 60 people, 40 play guitar, 30 play piano, and everyone plays at least one instrument. How many play exactly one instrument?",
          hint: "First find Both = guitar + piano − total. Then exactly one = total − both.",
          options: [
            "50",
            "60",
            "40",
            "30"
          ],
          correct: 0,
          explanation: "Both = 40 + 30 − 60 = 10. Exactly one = 60 − 10 = 50 (or equivalently (40−10) + (30−10) = 30 + 20 = 50)."
        },
        {
          id: "TLR4_14",
          question: "In a school of 55 students, 32 joined the art club, 28 joined the music club, and 12 joined both. How many joined neither club?",
          hint: "At-least-one = art + music − both. Neither = total − at-least-one.",
          options: [
            "7",
            "5",
            "10",
            "3"
          ],
          correct: 0,
          explanation: "At least one = 32 + 28 − 12 = 48. Neither = 55 − 48 = 7."
        },
        {
          id: "TLR4_15",
          question: "In a survey of 70 people, 45 read newspapers, 38 read magazines, and 20 read both. How many read exactly one type of publication?",
          hint: "Exactly one = (newspaper only) + (magazine only).",
          options: [
            "43",
            "63",
            "50",
            "33"
          ],
          correct: 0,
          explanation: "Newspaper only = 45 − 20 = 25. Magazine only = 38 − 20 = 18. Exactly one = 25 + 18 = 43."
        },
        {
          id: "TLR4_16",
          question: "If it is cold, Tom wears a jacket. If Tom wears a jacket, he brings an umbrella. It is cold. What does Tom bring?",
          hint: "Chain the conditionals: cold → jacket → umbrella. Apply Modus Ponens twice.",
          options: [
            "An umbrella",
            "A hat",
            "Nothing",
            "Only a jacket"
          ],
          correct: 0,
          explanation: "Cold → jacket → umbrella. It is cold, so Tom wears a jacket, and therefore brings an umbrella."
        },
        {
          id: "TLR4_17",
          question: "If Alice studies, she passes the exam. If she passes the exam, she graduates. If she graduates, she gets a job offer. Alice studies. What is the final outcome?",
          hint: "Chain: study → pass → graduate → job offer. Apply Modus Ponens step by step.",
          options: [
            "Alice gets a job offer",
            "Alice only passes the exam",
            "Alice only graduates",
            "Nothing can be concluded"
          ],
          correct: 0,
          explanation: "Study → pass → graduate → job offer. Alice studies, so she passes, graduates, and gets a job offer."
        },
        {
          id: "TLR4_18",
          question: "If the power goes out, the computer shuts down. If the computer shuts down, unsaved work is lost. The unsaved work was not lost. What can you conclude?",
          hint: "Chain Modus Tollens backwards: work not lost → computer didn't shut down → power didn't go out.",
          options: [
            "The power did not go out",
            "The power went out",
            "The computer shut down",
            "The work was lost"
          ],
          correct: 0,
          explanation: "Work not lost → computer didn't shut down → power didn't go out (Modus Tollens applied twice)."
        },
        {
          id: "TLR4_19",
          question: "If it rains, the match is cancelled. If the match is cancelled, tickets are refunded. Tickets were not refunded. What can you conclude?",
          hint: "Tollens chain: not refunded → not cancelled → no rain.",
          options: [
            "It did not rain",
            "It rained",
            "The match was cancelled",
            "Tickets were refunded"
          ],
          correct: 0,
          explanation: "Not refunded → match not cancelled → it did not rain (double Modus Tollens)."
        },
        {
          id: "TLR4_20",
          question: "If you eat too much sugar, you gain weight. If you gain weight, you need more exercise. If you need more exercise, you join a gym. You did not join a gym. What can you conclude?",
          hint: "Chain Modus Tollens: no gym → no need for exercise → no weight gain → no excess sugar.",
          options: [
            "You did not eat too much sugar",
            "You ate too much sugar",
            "You gained weight",
            "You joined a gym"
          ],
          correct: 0,
          explanation: "Didn't join gym → don't need exercise → didn't gain weight → didn't eat too much sugar (triple Modus Tollens)."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    //  LEVEL 5 — Liar puzzles, day calculations, complex logic
    // ═══════════════════════════════════════════════════════════════
    {
      level: 5,
      name: "Expert",
      description: "Liar puzzles, day calculations, and complex logic chains",
      exercises: [
        {
          id: "TLR5_01",
          question: "Three people: A, B, and C. Exactly one tells the truth. A says 'B and C are both liars.' B says 'A is a liar.' C says 'A is telling the truth.' Who tells the truth?",
          hint: "Test each person as the sole truth-teller. Only one assumption avoids all contradictions.",
          options: [
            "B",
            "A",
            "C",
            "None of them"
          ],
          correct: 0,
          explanation: "If B is the truth-teller: A lies → it's false that B and C are both liars (at least one isn't) → B isn't a liar ✓. C lies → 'A is telling truth' is false → A is a liar ✓. Only B tells truth — consistent. Testing A or C as truth-teller leads to contradictions."
        },
        {
          id: "TLR5_02",
          question: "Three people: D, E, and F. Exactly one tells the truth. D says 'E is a liar.' E says 'F is a liar.' F says 'D and E are both liars.' Who tells the truth?",
          hint: "Assume each person is the truth-teller and check for contradictions.",
          options: [
            "E",
            "D",
            "F",
            "None of them"
          ],
          correct: 0,
          explanation: "If E tells truth: F is a liar ✓. D says 'E is a liar' — D lies → E is NOT a liar ✓. F says 'D and E both liars' — F lies → at least one of D, E tells truth → E does ✓. Only E is the truth-teller — consistent."
        },
        {
          id: "TLR5_03",
          question: "G, H, and I are suspects in a case. Exactly one is guilty. The guilty person always lies; the innocent always tell the truth. G says 'H is guilty.' H says 'I am not guilty.' I says 'G is guilty.' Who is guilty?",
          hint: "Assume each person is guilty (and therefore lies). Check if the others' truthful statements are consistent.",
          options: [
            "G",
            "H",
            "I",
            "Cannot be determined"
          ],
          correct: 0,
          explanation: "If G is guilty: G lies → H is NOT guilty ✓. H (innocent, truthful) says 'I am not guilty' → H is not guilty ✓. I (innocent, truthful) says 'G is guilty' → G is guilty ✓. All consistent. Testing H or I as guilty leads to contradictions."
        },
        {
          id: "TLR5_04",
          question: "J, K, and L each make a statement. Exactly one tells the truth. J says 'I tell the truth.' K says 'J tells the truth.' L says 'J is a liar.' Who tells the truth?",
          hint: "If J tells truth, what must K's statement mean? Test each carefully.",
          options: [
            "L",
            "J",
            "K",
            "None of them"
          ],
          correct: 0,
          explanation: "If L tells truth: J is a liar ✓. J lies → 'I tell the truth' is false → J is a liar ✓. K lies → 'J tells truth' is false → J doesn't tell truth ✓. Only L is truth-teller — consistent. Testing J or K leads to two truth-tellers (contradiction)."
        },
        {
          id: "TLR5_05",
          question: "M, N, and O each make a statement. Exactly one tells the truth. M says 'N and O both tell the truth.' N says 'M is a liar.' O says 'N is a liar.' Who tells the truth?",
          hint: "If M tells truth, then N and O both tell truth — but only one can. Try the others.",
          options: [
            "N",
            "M",
            "O",
            "None of them"
          ],
          correct: 0,
          explanation: "If N tells truth: M is a liar ✓. M lies → 'N and O both tell truth' is false → at least one of N, O lies → O lies ✓ (only N is truthful). O lies → 'N is a liar' is false → N is NOT a liar ✓. Only N — consistent."
        },
        {
          id: "TLR5_06",
          question: "If three days from now is Wednesday, what day is today?",
          hint: "Count backwards three days from Wednesday.",
          options: [
            "Sunday",
            "Monday",
            "Saturday",
            "Tuesday"
          ],
          correct: 0,
          explanation: "Today + 3 = Wednesday. Counting back: Wednesday − 1 = Tuesday, − 2 = Monday, − 3 = Sunday. Today is Sunday."
        },
        {
          id: "TLR5_07",
          question: "If yesterday was Friday, what day is the day after tomorrow?",
          hint: "Find today first, then count forward two days.",
          options: [
            "Monday",
            "Sunday",
            "Tuesday",
            "Saturday"
          ],
          correct: 0,
          explanation: "Yesterday = Friday → today = Saturday → tomorrow = Sunday → day after tomorrow = Monday."
        },
        {
          id: "TLR5_08",
          question: "If two days ago was Monday, what day will it be in three days?",
          hint: "Find today from 'two days ago,' then add three days.",
          options: [
            "Saturday",
            "Friday",
            "Sunday",
            "Thursday"
          ],
          correct: 0,
          explanation: "Two days ago = Monday → today = Wednesday → in three days = Saturday."
        },
        {
          id: "TLR5_09",
          question: "If the day before yesterday was Thursday, what day is tomorrow?",
          hint: "Day before yesterday = two days ago. Find today, then add one.",
          options: [
            "Sunday",
            "Saturday",
            "Monday",
            "Friday"
          ],
          correct: 0,
          explanation: "Day before yesterday = Thursday → yesterday = Friday → today = Saturday → tomorrow = Sunday."
        },
        {
          id: "TLR5_10",
          question: "If four days from now is Tuesday, what day was yesterday?",
          hint: "Find today by subtracting 4 from Tuesday, then subtract 1 more for yesterday.",
          options: [
            "Thursday",
            "Friday",
            "Wednesday",
            "Saturday"
          ],
          correct: 0,
          explanation: "Today + 4 = Tuesday → today = Tuesday − 4 = Friday. Yesterday = Thursday."
        },
        {
          id: "TLR5_11",
          question: "Six students are ranked by test scores. Fay scored higher than Diana. Diana scored higher than Abby. Abby scored higher than Brian. Brian scored higher than Carl. Carl scored higher than Elena. Who scored third highest?",
          hint: "Build the full chain from highest to lowest and count to position 3.",
          options: [
            "Abby",
            "Diana",
            "Brian",
            "Fay"
          ],
          correct: 0,
          explanation: "Fay > Diana > Abby > Brian > Carl > Elena. Third highest is Abby."
        },
        {
          id: "TLR5_12",
          question: "Five jars have different weights. Jar 5 is heavier than Jar 1. Jar 1 is heavier than Jar 2. Jar 2 is heavier than Jar 4. Jar 4 is heavier than Jar 3. Which jar is in the middle (3rd out of 5)?",
          hint: "Chain: 5>1>2>4>3. The middle is position 3.",
          options: [
            "Jar 2",
            "Jar 1",
            "Jar 4",
            "Jar 3"
          ],
          correct: 0,
          explanation: "Jar 5 > Jar 1 > Jar 2 > Jar 4 > Jar 3. The middle (3rd) jar is Jar 2."
        },
        {
          id: "TLR5_13",
          question: "Seven people are ranked by age: T is older than U. U is older than V. V is older than W. W is older than X. X is older than Y. Y is older than Z. Who is the fourth oldest?",
          hint: "Write the full chain T>U>V>W>X>Y>Z and count to position 4.",
          options: [
            "W",
            "V",
            "X",
            "U"
          ],
          correct: 0,
          explanation: "T > U > V > W > X > Y > Z. The fourth oldest is W."
        },
        {
          id: "TLR5_14",
          question: "Five cities ranked by population: City E has more people than City A. City A has more than City B. City B has more than City D. City D has more than City C. Which city is the least populated?",
          hint: "Build the chain E>A>B>D>C.",
          options: [
            "City C",
            "City D",
            "City B",
            "City A"
          ],
          correct: 0,
          explanation: "City E > City A > City B > City D > City C. City C is the least populated."
        },
        {
          id: "TLR5_15",
          question: "Six books ranked by page count: Book T has more pages than Book P. Book P has more than Book Q. Book Q has more than Book U. Book U has more than Book R. Book R has more than Book S. Which book has the second fewest pages?",
          hint: "T>P>Q>U>R>S. Second fewest = second from the bottom.",
          options: [
            "Book R",
            "Book S",
            "Book U",
            "Book Q"
          ],
          correct: 0,
          explanation: "T > P > Q > U > R > S. Second fewest pages is Book R."
        },
        {
          id: "TLR5_16",
          question: "Three boxes are labeled 'Apples,' 'Oranges,' and 'Mixed.' Every label is wrong. You draw one fruit from the box labeled 'Mixed' and it is an apple. What does the box labeled 'Apples' actually contain?",
          hint: "The 'Mixed' label is wrong, so that box is pure. You drew an apple, so it's the Apples box. Now assign the remaining contents.",
          options: [
            "Oranges",
            "Apples",
            "Mixed",
            "Cannot be determined"
          ],
          correct: 0,
          explanation: "Box labeled 'Mixed' is not mixed (all labels wrong). Drawing an apple means it's the pure Apples box. Remaining contents: Oranges and Mixed. Box labeled 'Oranges' ≠ oranges → it's Mixed. Box labeled 'Apples' ≠ apples → it's Oranges."
        },
        {
          id: "TLR5_17",
          question: "Alice, Bob, and Carol each work on a different day: Monday, Tuesday, or Wednesday. Alice does not work on Monday. Bob does not work on Tuesday or Wednesday. Carol does not work on Wednesday. What day does Carol work?",
          hint: "Start with the most constrained person. Bob can only work one day.",
          options: [
            "Tuesday",
            "Monday",
            "Wednesday",
            "Cannot be determined"
          ],
          correct: 0,
          explanation: "Bob can't work Tue or Wed → Bob works Monday. Alice can't work Monday → Alice works Tue or Wed. Carol can't work Wednesday → Carol works Tuesday. Alice works Wednesday."
        },
        {
          id: "TLR5_18",
          question: "If P is true, then Q is true. If Q is true, then R is false. If R is false, then S is true. P is true. What is the truth value of S?",
          hint: "Follow the chain step by step: P → Q → ¬R → S.",
          options: [
            "S is true",
            "S is false",
            "S is unknown",
            "S depends on R"
          ],
          correct: 0,
          explanation: "P true → Q true → R false → S true. Therefore S is true."
        },
        {
          id: "TLR5_19",
          question: "Five friends have different ages. Alex is older than Drew. Drew is older than Blake. Blake is older than Casey. Casey is older than Ellie. Who is the middle (3rd oldest)?",
          hint: "Write the full chain: A>D>B>C>E. The middle of 5 is position 3.",
          options: [
            "Blake",
            "Drew",
            "Casey",
            "Alex"
          ],
          correct: 0,
          explanation: "Alex > Drew > Blake > Casey > Ellie. The 3rd oldest (middle) is Blake."
        },
        {
          id: "TLR5_20",
          question: "In a logic tournament, five contestants (V, W, X, Y, Z) are ranked 1st to 5th. V finishes ahead of W. X finishes directly after Y. Z finishes in 3rd place. W finishes in 5th place. Y finishes ahead of Z. What is V's finishing position?",
          hint: "Place the known positions first (Z=3rd, W=5th). Y is ahead of Z, and X is directly after Y. Then place V.",
          options: [
            "4th",
            "1st",
            "2nd",
            "3rd"
          ],
          correct: 0,
          explanation: "Z = 3rd, W = 5th. Y is ahead of Z (position 1 or 2). X is directly after Y → if Y=1 then X=2; if Y=2 then X=3, but Z=3 (conflict). So Y=1, X=2, Z=3. Remaining: V and W for 4th and 5th. W=5th → V=4th."
        }
      ]
    }
  ]
};
