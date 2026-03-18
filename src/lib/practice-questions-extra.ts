// Additional TCS NQT Level Practice Questions

export const additionalNumericalQuestions = {
  simpleInterest: [
    {
      id: 1,
      question: "A sum of money becomes Rs. 2000 in 3 years and Rs. 2400 in 5 years at simple interest. Find the principal.",
      type: "text",
      answer: "1400",
      hint: "Interest for 2 years = 2400 - 2000 = Rs. 400. Find yearly interest, then calculate.",
      solution: [
        "Step 1: Amount after 3 years = Rs. 2000",
        "Step 2: Amount after 5 years = Rs. 2400",
        "Step 3: Interest for 2 years = 2400 - 2000 = Rs. 400",
        "Step 4: Interest per year = 400/2 = Rs. 200",
        "Step 5: Interest for 3 years = 200 × 3 = Rs. 600",
        "Step 6: Principal = Amount - Interest = 2000 - 600 = Rs. 1400",
        "Answer: Principal is Rs. 1400"
      ]
    },
    {
      id: 2,
      question: "At what rate percent per annum will a sum double itself in 8 years?",
      type: "text",
      answer: "12.5",
      hint: "If sum doubles, Interest = Principal. Use SI = P×R×T/100 where SI = P.",
      solution: [
        "Step 1: Let Principal = P",
        "Step 2: If sum doubles, Amount = 2P, so Interest = P",
        "Step 3: SI = P×R×T/100, so P = P×R×8/100",
        "Step 4: Cancel P from both sides: 1 = 8R/100",
        "Step 5: R = 100/8 = 12.5%",
        "Answer: Rate is 12.5% per annum"
      ]
    },
    {
      id: 3,
      question: "The simple interest on Rs. 5000 at 8% per annum for 2 years is same as the simple interest on Rs. 4000 at 10% per annum for how many years?",
      type: "text",
      answer: "2",
      hint: "Calculate SI for first case, then equate to second case and solve for time.",
      solution: [
        "Step 1: SI on Rs. 5000 at 8% for 2 years",
        "Step 2: SI₁ = (5000 × 8 × 2) / 100 = Rs. 800",
        "Step 3: SI on Rs. 4000 at 10% for T years = 800",
        "Step 4: (4000 × 10 × T) / 100 = 800",
        "Step 5: 400T = 800, T = 2 years",
        "Answer: 2 years"
      ]
    }
  ],
  compoundInterest: [
    {
      id: 1,
      question: "Find the compound interest on Rs. 16000 at 20% per annum for 9 months, compounded quarterly.",
      type: "text",
      answer: "2522",
      hint: "9 months = 3 quarters. Rate per quarter = 20/4 = 5%. Use A = P(1 + R/100)ⁿ",
      solution: [
        "Step 1: Principal = Rs. 16000, Annual rate = 20%",
        "Step 2: Time = 9 months = 3 quarters",
        "Step 3: Rate per quarter = 20/4 = 5%",
        "Step 4: A = 16000(1 + 5/100)³ = 16000 × (1.05)³",
        "Step 5: A = 16000 × 1.157625 = Rs. 18522",
        "Step 6: CI = A - P = 18522 - 16000 = Rs. 2522",
        "Answer: Compound Interest is Rs. 2522"
      ]
    },
    {
      id: 2,
      question: "The difference between compound interest and simple interest on a sum for 2 years at 10% per annum is Rs. 50. Find the sum.",
      type: "text",
      answer: "5000",
      hint: "Difference (CI - SI) for 2 years = P(R/100)²",
      solution: [
        "Step 1: Difference between CI and SI for 2 years = P(R/100)²",
        "Step 2: Given: Difference = Rs. 50, Rate = 10%",
        "Step 3: 50 = P(10/100)²",
        "Step 4: 50 = P(0.01)",
        "Step 5: P = 50/0.01 = Rs. 5000",
        "Answer: The sum is Rs. 5000"
      ]
    },
    {
      id: 3,
      question: "A sum of money amounts to Rs. 9680 in 2 years and Rs. 10648 in 3 years at compound interest. Find the rate percent.",
      type: "text",
      answer: "10",
      hint: "The difference gives interest for 1 year on the amount after 2 years.",
      solution: [
        "Step 1: Amount after 2 years = Rs. 9680",
        "Step 2: Amount after 3 years = Rs. 10648",
        "Step 3: Interest for 3rd year = 10648 - 9680 = Rs. 968",
        "Step 4: This interest is on Rs. 9680 (principal for 3rd year)",
        "Step 5: Rate = (Interest × 100) / Principal = (968 × 100) / 9680",
        "Step 6: Rate = 10%",
        "Answer: Rate is 10% per annum"
      ]
    }
  ],
  ratioProportion: [
    {
      id: 1,
      question: "If A:B = 3:4 and B:C = 5:6, find A:B:C.",
      type: "text",
      answer: "15:20:24",
      hint: "Make B equal in both ratios. LCM of 4 and 5 = 20. Multiply first ratio by 5, second by 4.",
      solution: [
        "Step 1: A:B = 3:4 = 15:20 (multiplied by 5)",
        "Step 2: B:C = 5:6 = 20:24 (multiplied by 4)",
        "Step 3: Now B is same in both: 20",
        "Step 4: Combined ratio A:B:C = 15:20:24",
        "Answer: A:B:C = 15:20:24"
      ]
    },
    {
      id: 2,
      question: "Two numbers are in ratio 5:7. If each number is increased by 10, the ratio becomes 7:9. Find the numbers.",
      type: "text",
      answer: "25, 35",
      hint: "Let numbers be 5x and 7x. After adding 10: (5x+10)/(7x+10) = 7/9",
      solution: [
        "Step 1: Let the numbers be 5x and 7x",
        "Step 2: After adding 10: (5x+10)/(7x+10) = 7/9",
        "Step 3: Cross multiply: 9(5x+10) = 7(7x+10)",
        "Step 4: 45x + 90 = 49x + 70",
        "Step 5: 20 = 4x, x = 5",
        "Step 6: Numbers are 5×5 = 25 and 7×5 = 35",
        "Answer: The numbers are 25 and 35"
      ]
    },
    {
      id: 3,
      question: "A bag contains 50p, 25p and 10p coins in the ratio 5:9:4, amounting to Rs. 206. Find the number of coins of each type.",
      type: "text",
      answer: "200, 360, 160",
      hint: "Let number of coins be 5x, 9x, 4x. Total value = 5x(0.50) + 9x(0.25) + 4x(0.10) = 206",
      solution: [
        "Step 1: Let coins be 5x, 9x, 4x for 50p, 25p, 10p respectively",
        "Step 2: Value = 5x(0.50) + 9x(0.25) + 4x(0.10) = 2.5x + 2.25x + 0.4x = 5.15x",
        "Step 3: 5.15x = 206",
        "Step 4: x = 40",
        "Step 5: 50p coins = 5×40 = 200, 25p coins = 9×40 = 360, 10p coins = 4×40 = 160",
        "Answer: 200, 360, 160 coins respectively"
      ]
    }
  ],
  trains: [
    {
      id: 1,
      question: "A train 300m long is running at 90 km/hr. How long will it take to cross a 200m long platform?",
      type: "text",
      answer: "20",
      hint: "Total distance = train length + platform length. Convert speed to m/s.",
      solution: [
        "Step 1: Train length = 300m, Platform length = 200m",
        "Step 2: Total distance = 300 + 200 = 500m",
        "Step 3: Speed = 90 km/hr = 90 × (5/18) = 25 m/s",
        "Step 4: Time = Distance ÷ Speed = 500 ÷ 25 = 20 seconds",
        "Answer: 20 seconds"
      ]
    },
    {
      id: 2,
      question: "Two trains of lengths 150m and 200m are running at 72 km/hr and 54 km/hr respectively in opposite directions. In how many seconds will they cross each other?",
      type: "text",
      answer: "10",
      hint: "Relative speed = sum of speeds (opposite direction). Total distance = sum of lengths.",
      solution: [
        "Step 1: Lengths: Train 1 = 150m, Train 2 = 200m",
        "Step 2: Total distance = 150 + 200 = 350m",
        "Step 3: Speed 1 = 72 km/hr = 20 m/s, Speed 2 = 54 km/hr = 15 m/s",
        "Step 4: Relative speed (opposite) = 20 + 15 = 35 m/s",
        "Step 5: Time = 350 ÷ 35 = 10 seconds",
        "Answer: 10 seconds"
      ]
    },
    {
      id: 3,
      question: "A train passes a man standing on the platform in 8 seconds and passes the platform in 20 seconds. If the platform is 180m long, find the length of the train.",
      type: "text",
      answer: "120",
      hint: "In 8 seconds, train covers its own length. In 20 seconds, it covers train + platform.",
      solution: [
        "Step 1: Time to cross man = 8 sec (covers train length L)",
        "Step 2: Time to cross platform = 20 sec (covers L + 180)",
        "Step 3: Extra distance = 180m, Extra time = 20 - 8 = 12 sec",
        "Step 4: Speed = 180 ÷ 12 = 15 m/s",
        "Step 5: Train length = Speed × Time to cross man = 15 × 8 = 120m",
        "Answer: Train length is 120m"
      ]
    }
  ],
  pipesCisterns: [
    {
      id: 1,
      question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. Both are opened together, but after 5 minutes, A is turned off. How much more time will B take to fill the tank?",
      type: "text",
      answer: "17.5",
      hint: "Find work done in 5 minutes by both. Remaining work is done by B alone.",
      solution: [
        "Step 1: A's rate = 1/20 tank per minute, B's rate = 1/30 tank per minute",
        "Step 2: Combined rate = 1/20 + 1/30 = 5/60 = 1/12 per minute",
        "Step 3: In 5 minutes, work done = 5 × (1/12) = 5/12 of tank",
        "Step 4: Remaining work = 1 - 5/12 = 7/12 of tank",
        "Step 5: Time for B to fill remaining = (7/12) ÷ (1/30) = (7/12) × 30",
        "Step 6: = 210/12 = 17.5 minutes",
        "Answer: B will take 17.5 more minutes"
      ]
    },
    {
      id: 2,
      question: "A pipe can fill a tank in 15 hours. Due to a leak, it takes 3 hours more. If the tank is full, how long will the leak take to empty it?",
      type: "text",
      answer: "90",
      hint: "Find the leak's emptying rate: (1/15) - (1/18).",
      solution: [
        "Step 1: Pipe fills in 15 hours, rate = 1/15 per hour",
        "Step 2: With leak, fills in 18 hours, rate = 1/18 per hour",
        "Step 3: Leak's rate = 1/15 - 1/18 = (6-5)/90 = 1/90 per hour",
        "Step 4: Leak empties 1/90 of tank per hour",
        "Step 5: Time to empty full tank = 90 hours",
        "Answer: The leak will take 90 hours to empty the tank"
      ]
    }
  ],
  mixtures: [
    {
      id: 1,
      question: "In what ratio must water be mixed with milk to gain 20% by selling the mixture at cost price?",
      type: "text",
      answer: "1:5",
      hint: "If profit is 20%, then 120% of mixture = 100% of milk. Use alligation method.",
      solution: [
        "Step 1: Let CP of milk = Rs. 100 per litre",
        "Step 2: Mixture is sold at cost price = Rs. 100",
        "Step 3: Profit = 20%, so CP of mixture = 100/1.2 = Rs. 83.33",
        "Step 4: Water is free (CP = 0), Milk CP = Rs. 100",
        "Step 5: Using alligation: (100-83.33):(83.33-0) = 16.67:83.33 = 1:5",
        "Answer: Water and Milk should be mixed in ratio 1:5"
      ]
    },
    {
      id: 2,
      question: "A container has 60 litres of milk. 6 litres are drawn and replaced with water. This is done twice more. How much milk is left?",
      type: "text",
      answer: "43.74",
      hint: "After n operations: Remaining = Initial × (1 - drawn/total)ⁿ",
      solution: [
        "Step 1: Initial milk = 60 litres",
        "Step 2: Each time, 6/60 = 1/10 of mixture is removed",
        "Step 3: After each operation, remaining milk = 9/10 of previous",
        "Step 4: Operation is done 3 times",
        "Step 5: Remaining milk = 60 × (9/10)³",
        "Step 6: = 60 × (729/1000) = 60 × 0.729 = 43.74 litres",
        "Answer: 43.74 litres of milk remain"
      ]
    }
  ],
  probabilityExtra: [
    {
      id: 1,
      question: "A coin is tossed 3 times. What is the probability of getting exactly 2 heads?",
      type: "text",
      answer: "3/8",
      hint: "Total outcomes = 2³ = 8. Find outcomes with exactly 2 heads: HHT, HTH, THH",
      solution: [
        "Step 1: Total outcomes when coin tossed 3 times = 2³ = 8",
        "Step 2: Outcomes with exactly 2 heads: HHT, HTH, THH = 3 outcomes",
        "Step 3: P(exactly 2 heads) = 3/8",
        "Answer: Probability is 3/8"
      ]
    },
    {
      id: 2,
      question: "From a group of 6 men and 4 women, in how many ways can a committee of 5 be formed with at least 3 women?",
      type: "text",
      answer: "66",
      hint: "Cases: (3 women + 2 men) OR (4 women + 1 man). Use combination formula.",
      solution: [
        "Step 1: Case 1 - 3 women and 2 men: ⁴C₃ × ⁶C₂ = 4 × 15 = 60",
        "Step 2: Case 2 - 4 women and 1 man: ⁴C₄ × ⁶C₁ = 1 × 6 = 6",
        "Step 3: Total ways = 60 + 6 = 66",
        "Answer: 66 ways"
      ]
    },
    {
      id: 3,
      question: "What is the probability that a leap year has 53 Sundays?",
      type: "text",
      answer: "2/7",
      hint: "A leap year has 366 days = 52 weeks + 2 extra days.",
      solution: [
        "Step 1: A leap year has 366 days = 52 weeks + 2 extra days",
        "Step 2: 52 weeks give exactly 52 Sundays",
        "Step 3: The 2 extra days can be any consecutive pair",
        "Step 4: Out of 7 possibilities, 2 have Sunday: (Sun,Mon) and (Sat,Sun)",
        "Step 5: P(53 Sundays) = 2/7",
        "Answer: 2/7"
      ]
    }
  ]
};

export const additionalReasoningQuestions = {
  syllogism: [
    {
      id: 1,
      question: "Statements: All dogs are animals. Some animals are cats. Conclusion: Some dogs are cats.",
      type: "mcq",
      options: ["True", "False", "Cannot determine", "Partially true"],
      answer: "Cannot determine",
      hint: "Draw Venn diagrams. The two circles may or may not overlap.",
      solution: [
        "Step 1: Draw Venn diagram for 'All dogs are animals' - dogs circle inside animals",
        "Step 2: Draw 'Some animals are cats' - animals and cats overlap",
        "Step 3: Dogs circle is inside animals, but may or may not overlap with cats",
        "Step 4: We cannot definitively say if some dogs are cats",
        "Answer: Cannot determine"
      ]
    },
    {
      id: 2,
      question: "Statements: All teachers are educated. Some educated are rich. Conclusions: I. Some teachers are rich. II. Some rich are educated.",
      type: "mcq",
      options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
      answer: "Only II follows",
      hint: "For I, teachers and rich circles may not overlap. For II, it's direct conversion.",
      solution: [
        "Step 1: For conclusion I - Teachers may or may not overlap with Rich",
        "Step 2: Conclusion I does not definitely follow",
        "Step 3: For conclusion II - 'Some educated are rich' = 'Some rich are educated'",
        "Step 4: Conclusion II follows",
        "Answer: Only II follows"
      ]
    },
    {
      id: 3,
      question: "Statements: No pen is pencil. All pencils are erasers. Conclusion: No pen is eraser.",
      type: "mcq",
      options: ["True", "False", "Cannot determine", "Partially true"],
      answer: "Cannot determine",
      hint: "Some erasers are pencils, but erasers can include other things too.",
      solution: [
        "Step 1: No pen is pencil - pen and pencil circles don't overlap",
        "Step 2: All pencils are erasers - pencil circle inside eraser circle",
        "Step 3: Pen may or may not overlap with erasers that are NOT pencils",
        "Step 4: We cannot conclude 'No pen is eraser' definitively",
        "Answer: Cannot determine"
      ]
    }
  ],
  clocksCalendar: [
    {
      id: 1,
      question: "At what time between 3 and 4 o'clock will the hands of a clock coincide?",
      type: "text",
      answer: "16 4/11 min past 3",
      hint: "At 3:00, hour hand is at 15 min space. Formula: 60/11 × hours after",
      solution: [
        "Step 1: At 3:00, hour hand is 15 minute spaces ahead of minute hand",
        "Step 2: Minute hand gains 5.5 minute spaces per minute on hour hand",
        "Step 3: Time to coincide = 15 ÷ (11/2) = 30/11 = 16 4/11 minutes",
        "Answer: 16 4/11 minutes past 3"
      ]
    },
    {
      id: 2,
      question: "If January 1, 2004 was a Thursday, what day was January 1, 2005?",
      type: "mcq",
      options: ["Thursday", "Friday", "Saturday", "Sunday"],
      answer: "Saturday",
      hint: "2004 is a leap year. Leap year has 366 days = 52 weeks + 2 odd days.",
      solution: [
        "Step 1: 2004 is a leap year (divisible by 4)",
        "Step 2: A leap year has 366 days = 52 weeks + 2 odd days",
        "Step 3: Day advances by 2 in a leap year",
        "Step 4: Thursday + 2 = Saturday",
        "Answer: Saturday"
      ]
    },
    {
      id: 3,
      question: "What is the angle between the hands of a clock at 6:30?",
      type: "text",
      answer: "15",
      hint: "At 6:30, minute hand at 180°, hour hand moved past 6 by 15°",
      solution: [
        "Step 1: At 6:30, minute hand is at 6 (180° from 12)",
        "Step 2: Hour hand at 6 plus movement for 30 minutes",
        "Step 3: Hour hand movement = 30 × 0.5° = 15° past the 6",
        "Step 4: Hour hand position = 180° + 15° = 195°",
        "Step 5: Angle = |195° - 180°| = 15°",
        "Answer: 15°"
      ]
    }
  ],
  dataSufficiency: [
    {
      id: 1,
      question: "What is the value of x? Statement I: x² = 16. Statement II: x > 0.",
      type: "mcq",
      options: ["I alone sufficient", "II alone sufficient", "Both needed", "Neither sufficient"],
      answer: "Both needed",
      hint: "x² = 16 gives x = 4 or x = -4. Need II to pick positive.",
      solution: [
        "Step 1: From Statement I: x² = 16, so x = 4 or x = -4",
        "Step 2: Statement I alone gives two values - NOT sufficient",
        "Step 3: From Statement II: x > 0, but no specific value",
        "Step 4: Combined: x = 4 (positive solution)",
        "Answer: Both needed"
      ]
    },
    {
      id: 2,
      question: "Is A the father of B? Statement I: A is married to B's mother. Statement II: B is the son of A's wife.",
      type: "mcq",
      options: ["I alone sufficient", "II alone sufficient", "Both needed", "Neither sufficient"],
      answer: "Both needed",
      hint: "Statement I: A could be stepfather. Statement II: B could be from previous marriage.",
      solution: [
        "Step 1: From Statement I - A could be B's father or stepfather",
        "Step 2: Statement I alone is NOT sufficient",
        "Step 3: From Statement II - B could be from A's wife's previous marriage",
        "Step 4: Combined: A married to B's mother AND B is her son = A is father",
        "Answer: Both needed"
      ]
    }
  ],
  analogy: [
    {
      id: 1,
      question: "Doctor : Hospital :: Teacher : ?",
      type: "mcq",
      options: ["Office", "School", "Student", "Education"],
      answer: "School",
      hint: "Doctor works in Hospital. Teacher works in ?",
      solution: [
        "Step 1: Relationship is 'Person : Workplace'",
        "Step 2: Doctor works in Hospital",
        "Step 3: Teacher works in School",
        "Answer: School"
      ]
    },
    {
      id: 2,
      question: "Book : Pages :: Tree : ?",
      type: "mcq",
      options: ["Branches", "Leaves", "Roots", "Trunk"],
      answer: "Leaves",
      hint: "A book has many pages. A tree has many ?",
      solution: [
        "Step 1: Relationship is 'Whole : Multiple parts'",
        "Step 2: A book contains many pages",
        "Step 3: A tree has many leaves",
        "Answer: Leaves"
      ]
    }
  ]
};

export const additionalVerbalQuestions = {
  idiomsPhrases: [
    {
      id: 1,
      question: "What does 'To bite the bullet' mean?",
      type: "mcq",
      options: ["To eat quickly", "To face a difficult situation bravely", "To be aggressive", "To speak harshly"],
      answer: "To face a difficult situation bravely",
      hint: "Originates from soldiers biting bullets during surgery without anesthesia.",
      solution: [
        "Step 1: 'Bite the bullet' originates from soldiers biting bullets during painful procedures",
        "Step 2: It means to endure something painful or difficult with courage",
        "Answer: To face a difficult situation bravely"
      ]
    },
    {
      id: 2,
      question: "What does 'To burn the midnight oil' mean?",
      type: "mcq",
      options: ["To waste resources", "To work or study late into the night", "To start a fire", "To be careless"],
      answer: "To work or study late into the night",
      hint: "Before electricity, people used oil lamps for light at night.",
      solution: [
        "Step 1: Historically, people used oil lamps for light",
        "Step 2: Burning midnight oil means using the lamp late at night",
        "Answer: To work or study late into the night"
      ]
    },
    {
      id: 3,
      question: "What does 'Once in a blue moon' mean?",
      type: "mcq",
      options: ["During full moon", "Very rarely", "At night", "Every month"],
      answer: "Very rarely",
      hint: "A blue moon is a rare phenomenon.",
      solution: [
        "Step 1: A 'blue moon' is the second full moon in a calendar month",
        "Step 2: This phenomenon is rare - happens about once every 2-3 years",
        "Answer: Very rarely"
      ]
    }
  ],
  oneWordSubstitution: [
    {
      id: 1,
      question: "One who loves books:",
      type: "mcq",
      options: ["Philatelist", "Bibliophile", "Numismatist", "Lexicographer"],
      answer: "Bibliophile",
      hint: "'Biblio' relates to books, 'phile' means lover.",
      solution: [
        "Step 1: 'Biblio' = book, 'phile' = lover",
        "Step 2: Bibliophile = book lover",
        "Answer: Bibliophile"
      ]
    },
    {
      id: 2,
      question: "One who studies earthquakes:",
      type: "mcq",
      options: ["Seismologist", "Geologist", "Meteorologist", "Archaeologist"],
      answer: "Seismologist",
      hint: "'Seism' relates to earthquakes.",
      solution: [
        "Step 1: 'Seism' means earthquake or shake",
        "Step 2: A seismologist studies earthquakes",
        "Answer: Seismologist"
      ]
    },
    {
      id: 3,
      question: "A person who can speak multiple languages:",
      type: "mcq",
      options: ["Bilingual", "Polyglot", "Linguist", "Orator"],
      answer: "Polyglot",
      hint: "'Poly' means many, 'glot' relates to tongue/language.",
      solution: [
        "Step 1: 'Poly' = many, 'glot' = tongue/language",
        "Step 2: A polyglot knows or uses several languages",
        "Answer: Polyglot"
      ]
    }
  ],
  sentenceCompletionExtra: [
    {
      id: 1,
      question: "The manager's decision was so ___ that it pleased everyone.",
      type: "mcq",
      options: ["arbitrary", "diplomatic", "controversial", "hasty"],
      answer: "diplomatic",
      hint: "What kind of decision would please everyone?",
      solution: [
        "Step 1: The effect is 'pleased everyone'",
        "Step 2: 'Diplomatic' means tactful, considerate of all parties",
        "Answer: diplomatic"
      ]
    },
    {
      id: 2,
      question: "The scientist's theory was so ___ that only experts could understand it.",
      type: "mcq",
      options: ["simple", "complex", "basic", "elementary"],
      answer: "complex",
      hint: "What would make something hard for non-experts?",
      solution: [
        "Step 1: The effect is 'only experts could understand'",
        "Step 2: 'Complex' means having many parts, difficult to understand",
        "Answer: complex"
      ]
    }
  ]
};
