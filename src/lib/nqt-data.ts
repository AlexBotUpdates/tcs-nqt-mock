// TCS NQT Prep - Data Store

// ==========================================
// STUDY MATERIAL DATA
// ==========================================

export const studyMaterial = {
  numerical: [
    {
      title: "Number System",
      icon: "#",
      explanation: "Number System is the foundation of mathematics. Natural numbers (1, 2, 3...), Whole numbers (0, 1, 2, 3...), Integers (...-2, -1, 0, 1, 2...), Rational numbers (fractions like 3/4), and Real numbers (all numbers on number line). Important concepts: divisibility rules, factors, multiples, prime numbers, and HCF/LCM.",
      examples: [
        {
          title: "Example 1: Find HCF of 24 and 36",
          steps: [
            "Step 1: Find factors of 24: 1, 2, 3, 4, 6, 8, 12, 24",
            "Step 2: Find factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36",
            "Step 3: Common factors: 1, 2, 3, 4, 6, 12",
            "Step 4: Highest common factor = 12",
            "Answer: HCF = 12"
          ]
        },
        {
          title: "Example 2: Find LCM of 12 and 18",
          steps: [
            "Step 1: Multiples of 12: 12, 24, 36, 48, 60...",
            "Step 2: Multiples of 18: 18, 36, 54, 72...",
            "Step 3: First common multiple = 36",
            "Answer: LCM = 36"
          ]
        }
      ]
    },
    {
      title: "Simplification",
      icon: "≡",
      explanation: "Simplification uses BODMAS rule: Brackets, Orders (powers), Division, Multiplication, Addition, Subtraction. Always solve brackets first (innermost to outermost), then powers, then ÷ and × (left to right), finally + and - (left to right). Common brackets: () parentheses, {} braces, [] square brackets.",
      examples: [
        {
          title: "Example 1: Simplify 8 + 4 × 2 - 6 ÷ 2",
          steps: [
            "Step 1: Division first: 6 ÷ 2 = 3",
            "Step 2: Then multiplication: 4 × 2 = 8",
            "Step 3: Expression becomes: 8 + 8 - 3",
            "Step 4: Addition: 8 + 8 = 16",
            "Step 5: Subtraction: 16 - 3 = 13",
            "Answer: 13"
          ]
        },
        {
          title: "Example 2: Simplify [15 + {3 × (6 - 2)}]",
          steps: [
            "Step 1: Innermost bracket (6 - 2) = 4",
            "Step 2: Next: {3 × 4} = 12",
            "Step 3: Outermost: [15 + 12] = 27",
            "Answer: 27"
          ]
        }
      ]
    },
    {
      title: "Problems on Ages",
      icon: "👤",
      explanation: "Age problems involve finding ages using relationships given in the problem. Key trick: If A is x years older than B, this difference remains CONSTANT. If A was twice as old as B 5 years ago, use (A-5) = 2(B-5). Always use present age as variable, then express past/future ages by subtracting/adding years.",
      examples: [
        {
          title: "Example 1: A is 5 years older than B. After 5 years, A will be twice as old as B. Find present ages.",
          steps: [
            "Step 1: Let B's present age = x, then A = x + 5",
            "Step 2: After 5 years: B = x + 5, A = x + 10",
            "Step 3: Given: A = 2B after 5 years",
            "Step 4: x + 10 = 2(x + 5)",
            "Step 5: x + 10 = 2x + 10, so x = 0",
            "Step 6: B = 0, A = 5 (Check: After 5 years, A=10, B=5, A=2B ✓)",
            "Answer: A is 5 years, B is 0 years (newborn)"
          ]
        },
        {
          title: "Example 2: Father is 3 times as old as son. After 15 years, he will be twice as old. Find present ages.",
          steps: [
            "Step 1: Let son's age = x, father = 3x",
            "Step 2: After 15 years: son = x + 15, father = 3x + 15",
            "Step 3: 3x + 15 = 2(x + 15)",
            "Step 4: 3x + 15 = 2x + 30",
            "Step 5: x = 15, so son = 15, father = 45",
            "Answer: Son is 15 years, Father is 45 years"
          ]
        }
      ]
    },
    {
      title: "Percentages",
      icon: "%",
      explanation: "Percentage means 'out of 100'. When we say 50%, it means 50 out of 100 parts. Think of a pizza cut into 100 slices - if you eat 25 slices, you ate 25%! To convert a fraction to percentage, multiply by 100. To find percentage of a number, divide by 100 and multiply.",
      examples: [
        {
          title: "Example 1: Find 20% of 500",
          steps: [
            "Step 1: 20% means 20 out of 100, written as 20/100 = 0.20",
            "Step 2: To find 20% of 500, multiply: 0.20 × 500",
            "Step 3: 0.20 × 500 = 100",
            "Answer: 20% of 500 is 100"
          ]
        },
        {
          title: "Example 2: If a shirt costs Rs. 800 and has 25% discount, find the discount amount",
          steps: [
            "Step 1: Discount = 25% of 800",
            "Step 2: 25% = 25/100 = 0.25",
            "Step 3: Discount = 0.25 × 800 = 200",
            "Answer: Discount is Rs. 200"
          ]
        }
      ]
    },
    {
      title: "Ratio & Proportion",
      icon: "÷",
      explanation: "Ratio compares two quantities. If you have 3 apples and 6 oranges, the ratio is 3:6 or 1:2 (simplified). Proportion says two ratios are equal. If 2 pencils cost Rs. 10, then 4 pencils cost Rs. 20 (same proportion). Use cross multiplication to solve proportion problems.",
      examples: [
        {
          title: "Example 1: If 5 books cost Rs. 250, find cost of 8 books",
          steps: [
            "Step 1: Set up proportion: 5 books = Rs. 250, 8 books = ?",
            "Step 2: Cost per book = 250 ÷ 5 = Rs. 50",
            "Step 3: Cost of 8 books = 8 × 50 = Rs. 400",
            "Answer: 8 books cost Rs. 400"
          ]
        }
      ]
    },
    {
      title: "Averages",
      icon: "μ",
      explanation: "Average is the 'middle value' of a group of numbers. To find average: add all numbers, then divide by how many numbers there are. Think of it as sharing equally. If you scored 80, 90, 70 in 3 tests, your average is (80+90+70) ÷ 3 = 80.",
      examples: [
        {
          title: "Example 1: Find average of 12, 15, 18, 21, 24",
          steps: [
            "Step 1: Add all numbers: 12 + 15 + 18 + 21 + 24 = 90",
            "Step 2: Count how many numbers: 5 numbers",
            "Step 3: Divide total by count: 90 ÷ 5 = 18",
            "Answer: Average is 18"
          ]
        },
        {
          title: "Example 2: Average of 4 numbers is 20. If 3 numbers are 15, 20, 25, find the 4th number",
          steps: [
            "Step 1: Total of 4 numbers = Average × Count = 20 × 4 = 80",
            "Step 2: Sum of 3 known numbers = 15 + 20 + 25 = 60",
            "Step 3: 4th number = Total - Sum of 3 = 80 - 60 = 20",
            "Answer: The 4th number is 20"
          ]
        }
      ]
    },
    {
      title: "Profit & Loss",
      icon: "₹",
      explanation: "Profit means you sold something for more than you bought it. Loss means you sold for less. Profit = Selling Price - Cost Price. Loss = Cost Price - Selling Price. Profit% = (Profit ÷ Cost Price) × 100. Loss% = (Loss ÷ Cost Price) × 100.",
      examples: [
        {
          title: "Example 1: A pen bought for Rs. 50 is sold for Rs. 65. Find profit %",
          steps: [
            "Step 1: Cost Price (CP) = Rs. 50, Selling Price (SP) = Rs. 65",
            "Step 2: Profit = SP - CP = 65 - 50 = Rs. 15",
            "Step 3: Profit% = (Profit ÷ CP) × 100 = (15 ÷ 50) × 100",
            "Step 4: (15 ÷ 50) × 100 = 0.3 × 100 = 30%",
            "Answer: Profit is 30%"
          ]
        }
      ]
    },
    {
      title: "Simple Interest",
      icon: "SI",
      explanation: "Simple Interest is extra money you pay when borrowing or earn when saving. Formula: SI = (P × R × T) / 100. P = Principal (original amount), R = Rate (% per year), T = Time (years). Total Amount = Principal + Simple Interest.",
      examples: [
        {
          title: "Example 1: Find simple interest on Rs. 1000 at 5% per year for 3 years",
          steps: [
            "Step 1: Principal (P) = Rs. 1000, Rate (R) = 5%, Time (T) = 3 years",
            "Step 2: SI = (P × R × T) / 100",
            "Step 3: SI = (1000 × 5 × 3) / 100 = 15000 / 100 = Rs. 150",
            "Step 4: Total Amount = 1000 + 150 = Rs. 1150",
            "Answer: Simple Interest is Rs. 150"
          ]
        }
      ]
    },
    {
      title: "Compound Interest",
      icon: "CI",
      explanation: "Compound Interest is interest on interest! After each year, interest is added to your money, and next year you earn interest on the new total. Formula: A = P(1 + R/100)^T. The total grows faster than simple interest.",
      examples: [
        {
          title: "Example 1: Find compound interest on Rs. 1000 at 10% for 2 years",
          steps: [
            "Step 1: P = Rs. 1000, R = 10%, T = 2 years",
            "Step 2: A = P(1 + R/100)^T",
            "Step 3: A = 1000 × (1 + 10/100)^2 = 1000 × (1.1)^2",
            "Step 4: A = 1000 × 1.21 = Rs. 1210",
            "Step 5: Compound Interest = A - P = 1210 - 1000 = Rs. 210",
            "Answer: Compound Interest is Rs. 210"
          ]
        }
      ]
    },
    {
      title: "Time, Speed & Distance",
      icon: "🚗",
      explanation: "These three are connected! Speed = Distance ÷ Time. Distance = Speed × Time. Time = Distance ÷ Speed. Remember: if speed is in km/hour and time in minutes, convert time to hours first! Distance stays the same unit as speed.",
      examples: [
        {
          title: "Example 1: A car travels 150 km in 3 hours. Find its speed",
          steps: [
            "Step 1: Distance = 150 km, Time = 3 hours",
            "Step 2: Speed = Distance ÷ Time",
            "Step 3: Speed = 150 ÷ 3 = 50 km/hour",
            "Answer: Speed is 50 km/hour"
          ]
        },
        {
          title: "Example 2: How long to travel 200 km at 40 km/hour?",
          steps: [
            "Step 1: Distance = 200 km, Speed = 40 km/hour",
            "Step 2: Time = Distance ÷ Speed",
            "Step 3: Time = 200 ÷ 40 = 5 hours",
            "Answer: Time taken is 5 hours"
          ]
        }
      ]
    },
    {
      title: "Time & Work",
      icon: "⏰",
      explanation: "If A can do a work in 10 days, A does 1/10 work per day. If B can do it in 15 days, B does 1/15 work per day. Together they do (1/10 + 1/15) work per day. Total time = 1 ÷ (work per day). More people = less time!",
      examples: [
        {
          title: "Example 1: A can do work in 6 days, B in 12 days. How long together?",
          steps: [
            "Step 1: A's work per day = 1/6, B's work per day = 1/12",
            "Step 2: Together per day = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4",
            "Step 3: Together they complete 1/4 work per day",
            "Step 4: Total days = 1 ÷ (1/4) = 4 days",
            "Answer: Together they finish in 4 days"
          ]
        }
      ]
    },
    {
      title: "Permutations & Combinations",
      icon: "P&C",
      explanation: "Permutation = arrangement where ORDER matters. ABC is different from CBA. Combination = selection where order doesn't matter. Picking 2 friends from 5 is combination (order doesn't matter). Seating them in a row is permutation (order matters).",
      examples: [
        {
          title: "Example 1: How many ways to arrange 3 letters A, B, C?",
          steps: [
            "Step 1: We have 3 positions to fill",
            "Step 2: First position: 3 choices (A, B, or C)",
            "Step 3: Second position: 2 choices remaining",
            "Step 4: Third position: 1 choice remaining",
            "Step 5: Total ways = 3 × 2 × 1 = 6 ways",
            "Answer: 6 ways (ABC, ACB, BAC, BCA, CAB, CBA)"
          ]
        },
        {
          title: "Example 2: How many ways to choose 2 students from 4?",
          steps: [
            "Step 1: We need to select 2 from 4, order doesn't matter",
            "Step 2: Using formula: nCr = n! / (r! × (n-r)!)",
            "Step 3: 4C2 = 4! / (2! × 2!) = 24 / (2 × 2) = 6",
            "Answer: 6 ways to choose 2 students"
          ]
        }
      ]
    },
    {
      title: "Probability",
      icon: "🎲",
      explanation: "Probability tells how likely something is to happen. P(event) = (favorable outcomes) ÷ (total possible outcomes). Probability is always between 0 (impossible) and 1 (certain). A fair coin has P(heads) = 1/2 or 0.5 or 50%.",
      examples: [
        {
          title: "Example 1: What is probability of getting an even number when rolling a die?",
          steps: [
            "Step 1: A die has numbers 1, 2, 3, 4, 5, 6 - total 6 outcomes",
            "Step 2: Even numbers are: 2, 4, 6 - that's 3 favorable outcomes",
            "Step 3: P(even) = favorable / total = 3/6 = 1/2",
            "Answer: Probability is 1/2 or 0.5 or 50%"
          ]
        },
        {
          title: "Example 2: A bag has 3 red and 2 blue balls. Find P(drawing a red ball)",
          steps: [
            "Step 1: Total balls = 3 red + 2 blue = 5 balls",
            "Step 2: Red balls (favorable) = 3",
            "Step 3: P(red) = 3/5",
            "Answer: Probability of red ball is 3/5 or 60%"
          ]
        }
      ]
    }
  ],
  reasoning: [
    {
      title: "Number Series",
      icon: "🔢",
      explanation: "Number series are patterns! Look for: adding/subtracting same number (2, 4, 6, 8...), multiplying/dividing (2, 4, 8, 16...), squares (1, 4, 9, 16, 25...), or two alternating patterns. Find the rule, then predict the next number.",
      examples: [
        {
          title: "Example 1: Find the next number: 3, 6, 12, 24, ?",
          steps: [
            "Step 1: Look at differences: 6-3=3, 12-6=6, 24-12=12",
            "Step 2: Pattern: each number is multiplied by 2",
            "Step 3: Check: 3×2=6 ✓, 6×2=12 ✓, 12×2=24 ✓",
            "Step 4: Next number = 24 × 2 = 48",
            "Answer: 48"
          ]
        },
        {
          title: "Example 2: Find the next number: 2, 5, 10, 17, ?",
          steps: [
            "Step 1: Look at differences: 5-2=3, 10-5=5, 17-10=7",
            "Step 2: Differences are odd numbers: 3, 5, 7...",
            "Step 3: Next difference should be 9",
            "Step 4: Next number = 17 + 9 = 26",
            "Answer: 26"
          ]
        }
      ]
    },
    {
      title: "Letter Series",
      icon: "🔤",
      explanation: "Letters follow patterns too! A=1, B=2, ... Z=26. Look for: skipping letters (A, C, E, G... skip 1), moving forward/backward, or position patterns. Write the alphabet and mark positions to find the rule.",
      examples: [
        {
          title: "Example 1: Find the next letter: B, D, F, H, ?",
          steps: [
            "Step 1: Write positions: B=2, D=4, F=6, H=8",
            "Step 2: Pattern: positions go 2, 4, 6, 8 (even numbers)",
            "Step 3: Next position should be 10",
            "Step 4: 10th letter is J",
            "Answer: J"
          ]
        }
      ]
    },
    {
      title: "Coding-Decoding",
      icon: "🔐",
      explanation: "In coding, letters are changed using a rule. Common patterns: each letter moves forward (+1, +2...), moves backward (-1, -2...), or swaps positions. For example, if CAT becomes DBU, each letter moves +1 (C→D, A→B, T→U).",
      examples: [
        {
          title: "Example 1: If APPLE is coded as BQQMF, how is GRAPE coded?",
          steps: [
            "Step 1: Compare APPLE and BQQMF",
            "Step 2: A→B (+1), P→Q (+1), P→Q (+1), L→M (+1), E→F (+1)",
            "Step 3: Rule: Each letter moves 1 position forward",
            "Step 4: Apply to GRAPE: G→H, R→S, A→B, P→Q, E→F",
            "Answer: HSBQF"
          ]
        }
      ]
    },
    {
      title: "Directions",
      icon: "🧭",
      explanation: "Remember: North is up, South is down, East is right, West is left. When you turn RIGHT, you go 90° clockwise. Turn LEFT = 90° anti-clockwise. After moves, track your final direction and position from start. Draw it on paper!",
      examples: [
        {
          title: "Example 1: A person walks 3km North, then turns right and walks 4km. How far from start?",
          steps: [
            "Step 1: Draw: Start → 3km North (up)",
            "Step 2: Turn right from North = facing East",
            "Step 3: Walk 4km East (right)",
            "Step 4: This makes a right angle triangle",
            "Step 5: Distance from start = √(3² + 4²) = √(9+16) = √25 = 5km",
            "Answer: 5 km from starting point"
          ]
        }
      ]
    },
    {
      title: "Blood Relations",
      icon: "👨‍👩‍👧",
      explanation: "Break down family tree step by step. Mother's brother = Uncle. Father's sister = Aunt. Brother's son = Nephew. Sister's daughter = Niece. Use symbols: ♂ for male, ♀ for female, = for married, — for siblings. Draw family trees!",
      examples: [
        {
          title: "Example 1: A is B's brother. B is C's father. How is A related to C?",
          steps: [
            "Step 1: A is B's brother → A and B are siblings",
            "Step 2: B is C's father → C is B's child",
            "Step 3: Father's brother = Uncle",
            "Answer: A is C's uncle"
          ]
        },
        {
          title: "Example 2: Pointing to a photo, a man says 'She is the daughter of my father's only son'. How is he related to the girl?",
          steps: [
            "Step 1: 'My father's only son' = the man himself",
            "Step 2: 'Daughter of' the man = his daughter",
            "Answer: The man is the girl's father"
          ]
        }
      ]
    },
    {
      title: "Seating Arrangement",
      icon: "🪑",
      explanation: "Draw a circle for circular arrangement or a line for linear. Mark positions as 1, 2, 3... or use letters for people. Read clues one by one and fill positions. 'A sits opposite B' means 2 people across. 'Between X and Y' means X and Y are not adjacent.",
      examples: [
        {
          title: "Example 1: A, B, C, D sit in a line. A is at one end. B is next to A. D is not next to C. Who sits at the other end?",
          steps: [
            "Step 1: Draw 4 positions: _ _ _ _",
            "Step 2: A is at one end: A _ _ _",
            "Step 3: B is next to A: A B _ _",
            "Step 4: D is not next to C, so D must be at position 3",
            "Step 5: A B D C",
            "Answer: C sits at the other end"
          ]
        }
      ]
    },
    {
      title: "Puzzles",
      icon: "🧩",
      explanation: "Puzzles need logical thinking! Read all clues first. Make a table or grid. Start with the most definite clues. Cross out impossible options. Use process of elimination. Sometimes work backwards from what's asked.",
      examples: [
        {
          title: "Example 1: Among 4 friends, Ram is taller than Shyam but shorter than Mohan. Rohan is shorter than Shyam. Who is tallest?",
          steps: [
            "Step 1: Ram > Shyam (Ram is taller than Shyam)",
            "Step 2: Mohan > Ram (Ram is shorter than Mohan)",
            "Step 3: From steps 1 & 2: Mohan > Ram > Shyam",
            "Step 4: Shyam > Rohan (Rohan is shorter than Shyam)",
            "Step 5: Complete order: Mohan > Ram > Shyam > Rohan",
            "Answer: Mohan is tallest"
          ]
        }
      ]
    },
    {
      title: "Syllogisms",
      icon: "📝",
      explanation: "Syllogisms have statements and conclusions. Draw Venn diagrams to check. 'All A are B' means A circle inside B. 'Some A are B' means circles overlap. 'No A is B' means circles don't touch. A conclusion is true only if it MUST follow from statements.",
      examples: [
        {
          title: "Example 1: All cats are animals. All animals need food. Conclusion: All cats need food. True or False?",
          steps: [
            "Step 1: Draw Venn diagram",
            "Step 2: Cats circle inside Animals circle",
            "Step 3: Animals circle inside 'Need food' circle",
            "Step 4: Since Cats are inside Animals, and Animals need food...",
            "Answer: TRUE - All cats need food"
          ]
        }
      ]
    }
  ],
  verbal: [
    {
      title: "Reading Comprehension Tips",
      icon: "📖",
      explanation: "Read the passage once quickly for the main idea. Then read questions and go back to find specific answers. Look for keywords from questions in the passage. The answer is usually near the keyword. Don't use outside knowledge - answer based ONLY on what's written.",
      examples: [
        {
          title: "Strategy for RC",
          steps: [
            "Step 1: Skim the passage in 30 seconds for the main topic",
            "Step 2: Read the first question carefully",
            "Step 3: Find keywords from question in the passage",
            "Step 4: Read 2-3 sentences around the keyword",
            "Step 5: Choose the answer that matches the passage exactly",
            "Tip: If confused between 2 options, pick the one closer to the text"
          ]
        }
      ]
    },
    {
      title: "Tenses",
      icon: "⏱️",
      explanation: "Tenses show WHEN something happens. Past = happened before (walked, ate). Present = happening now (walks, eats). Future = will happen (will walk, will eat). Simple = done. Continuous = ongoing (walking). Perfect = completed (have walked).",
      examples: [
        {
          title: "Example: Identify the tense",
          steps: [
            "1. 'She plays cricket' - Simple Present (regular action)",
            "2. 'She is playing cricket' - Present Continuous (happening now)",
            "3. 'She played cricket' - Simple Past (completed earlier)",
            "4. 'She will play cricket' - Simple Future (will happen)",
            "5. 'She has played cricket' - Present Perfect (just completed)"
          ]
        }
      ]
    },
    {
      title: "Subject-Verb Agreement",
      icon: "✍️",
      explanation: "Singular subject needs singular verb. Plural subject needs plural verb. He walks (singular), They walk (plural). Watch out for tricky subjects! 'The list of items IS' (list is singular). 'Neither Tom nor his friends ARE' (closest subject rules).",
      examples: [
        {
          title: "Example: Choose correct verb",
          steps: [
            "1. 'The group of students ___ going' → IS (group is singular)",
            "2. 'Neither the teacher nor the students ___ present' → ARE (students is closer)",
            "3. 'Everyone ___ his own book' → HAS (everyone is singular)",
            "4. 'Mathematics ___ my favorite subject' → IS (subject name is singular)",
            "Remember: Collective nouns (team, group, family) are usually singular"
          ]
        }
      ]
    },
    {
      title: "Articles (A, An, The)",
      icon: "📄",
      explanation: "A/An = indefinite (any one thing). 'A cat' means any cat. Use 'A' before consonant sounds (a book, a university). Use 'An' before vowel sounds (an apple, an hour). 'The' = definite (specific thing). 'The cat' means a particular cat.",
      examples: [
        {
          title: "Example: Fill in correct article",
          steps: [
            "1. 'I saw ___ elephant' → AN (elephant starts with vowel sound)",
            "2. 'He is ___ honest man' → AN (honest sounds like 'onest')",
            "3. 'She is ___ university student' → A (university sounds like 'yooniversity')",
            "4. '___ Sun rises in the east' → THE (unique things take 'the')",
            "Remember: Sound matters, not spelling!"
          ]
        }
      ]
    },
    {
      title: "Prepositions",
      icon: "📍",
      explanation: "Prepositions show position or relationship: in, on, at, by, for, with, to, from, etc. Common rules: 'IN' for big areas (in Delhi, in May, in the morning). 'ON' for surfaces and days (on the table, on Monday). 'AT' for specific places/times (at the door, at 5pm).",
      examples: [
        {
          title: "Example: Choose correct preposition",
          steps: [
            "1. 'I live ___ Mumbai' → IN (big city)",
            "2. 'The book is ___ the table' → ON (surface)",
            "3. 'Meet me ___ 5 o'clock' → AT (specific time)",
            "4. 'She arrived ___ Monday' → ON (day)",
            "5. 'He was born ___ 1990' → IN (year)",
            "Tip: Learn common preposition phrases by heart"
          ]
        }
      ]
    },
    {
      title: "Sentence Completion",
      icon: "✏️",
      explanation: "Read the whole sentence first. Look for clues about meaning (positive/negative, cause/effect). Try your own word before looking at options. Check if your choice fits grammatically. The answer should make the sentence logical and complete.",
      examples: [
        {
          title: "Example: The movie was so ___ that everyone fell asleep.",
          steps: [
            "Step 1: What makes people fall asleep? Boredom!",
            "Step 2: We need a word meaning 'boring'",
            "Step 3: Options: interesting, boring, exciting, funny",
            "Step 4: 'Boring' fits - boring movies make people sleepy",
            "Answer: boring"
          ]
        }
      ]
    },
    {
      title: "Error Spotting",
      icon: "🔍",
      explanation: "Look for common errors: wrong tense, subject-verb disagreement, wrong preposition, article errors, singular/plural mistakes. Read each part separately. Check if replacing or removing a word fixes the sentence. The error is usually in one specific part.",
      examples: [
        {
          title: "Example: Find the error",
          steps: [
            "Sentence: 'Each of the students have submitted their assignment.'",
            "Step 1: Check 'Each of the students' - subject is 'Each' (singular)",
            "Step 2: 'have' is plural verb - ERROR!",
            "Step 3: 'Each' requires singular verb 'has'",
            "Answer: Error is 'have' - should be 'has'"
          ]
        }
      ]
    }
  ],
  coding: [
    {
      title: "Input and Output in C++",
      icon: "💻",
      explanation: "cin is used to take INPUT from user. cout is used to show OUTPUT to user. The >> operator goes with cin (like pulling data in). The << operator goes with cout (like pushing data out). Include <iostream> at the top and use 'using namespace std;'",
      examples: [
        {
          title: "Example: Take a number and print it",
          code: `#include <iostream>
using namespace std;

int main() {
    int n;  // We create a box to store a number
    cout << "Enter a number: ";  // We ask the user
    cin >> n;  // We take the number from user
    cout << "You entered: " << n;  // We show what the user entered
    return 0;  // Program ends successfully
}`
        }
      ]
    },
    {
      title: "Data Types",
      icon: "📊",
      explanation: "Data types tell what kind of data we store. int stores whole numbers (5, -10, 100). float stores decimal numbers (3.14, -2.5). char stores single characters ('A', 'b', '5'). string stores text (\"Hello\"). bool stores true/false. Choose based on what you need!",
      examples: [
        {
          title: "Example: Different data types",
          code: `#include <iostream>
using namespace std;

int main() {
    int age = 20;  // whole number for age
    float height = 5.9;  // decimal for height
    char grade = 'A';  // single character in single quotes
    string name = "Rahul";  // text in double quotes
    bool isPass = true;  // true or false only
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    return 0;
}`
        }
      ]
    },
    {
      title: "If-Else Statements",
      icon: "🔀",
      explanation: "If-else helps make decisions. IF a condition is true, do something. ELSE do something else. You can also use 'else if' for multiple conditions. Conditions use comparison: == (equal), != (not equal), > (greater), < (less), >= (greater or equal), <= (less or equal).",
      examples: [
        {
          title: "Example: Check if number is positive, negative, or zero",
          code: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    if (n > 0) {
        cout << n << " is positive";
    }
    else if (n < 0) {
        cout << n << " is negative";
    }
    else {
        cout << n << " is zero";
    }
    return 0;
}`
        }
      ]
    },
    {
      title: "Loops (For, While)",
      icon: "🔄",
      explanation: "Loops repeat code. FOR loop: when you know how many times. WHILE loop: when you don't know exactly. FOR has 3 parts: start, condition, update (for(int i=0; i<5; i++)). WHILE keeps running while condition is true. Use loops to process arrays, print patterns, or calculate sums.",
      examples: [
        {
          title: "Example 1: Print numbers 1 to 5 using for loop",
          code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";  // print current number
    }
    return 0;
}
// Output: 1 2 3 4 5`
        },
        {
          title: "Example 2: Print numbers 1 to 5 using while loop",
          code: `#include <iostream>
using namespace std;

int main() {
    int i = 1;  // start from 1
    while (i <= 5) {  // keep going while i is 5 or less
        cout << i << " ";  // print current number
        i++;  // increase i by 1
    }
    return 0;
}`
        }
      ]
    },
    {
      title: "Arrays",
      icon: "📋",
      explanation: "Array stores multiple values of same type in one variable. Declare with size: int arr[5]; Store values: arr[0] = 10; Index starts from 0! So arr[5] has positions 0,1,2,3,4 (not 5). Access using index: cout << arr[0]; Loops are perfect for arrays!",
      examples: [
        {
          title: "Example: Store and print 5 numbers",
          code: `#include <iostream>
using namespace std;

int main() {
    int arr[5];  // create array of size 5
    
    // Take 5 numbers from user
    for (int i = 0; i < 5; i++) {
        cin >> arr[i];  // store in position i
    }
    
    // Print all 5 numbers
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`
        }
      ]
    },
    {
      title: "Strings",
      icon: "📝",
      explanation: "String is a sequence of characters. Declare: string s = \"Hello\"; Access characters: s[0] is 'H', s[1] is 'e'. Length: s.length() gives 5. You can read words with cin >> s, but for full sentences use getline(cin, s). Strings can be concatenated with +.",
      examples: [
        {
          title: "Example: Work with strings",
          code: `#include <iostream>
#include <string>  // needed for string
using namespace std;

int main() {
    string s = "Hello";  // create a string
    cout << s << endl;  // print whole string
    cout << s[0] << endl;  // print first character 'H'
    cout << s.length() << endl;  // print length 5
    
    string s2 = "World";
    string combined = s + " " + s2;  // join strings
    cout << combined;  // prints: Hello World
    return 0;
}`
        }
      ]
    },
    {
      title: "Functions",
      icon: "⚙️",
      explanation: "Functions are reusable code blocks. They take inputs (parameters), do some work, and return output. returnType functionName(parameters) { code; return value; }. Call function by its name with arguments. Functions help organize code and avoid repetition.",
      examples: [
        {
          title: "Example: Function to add two numbers",
          code: `#include <iostream>
using namespace std;

// Function to add two numbers
int add(int a, int b) {
    int sum = a + b;  // add the two numbers
    return sum;  // return the result
}

int main() {
    int x = 5, y = 3;
    int result = add(x, y);  // call function with x and y
    cout << "Sum = " << result;  // prints: Sum = 8
    return 0;
}`
        }
      ]
    }
  ]
};

// ==========================================
// PRACTICE QUESTIONS DATA
// ==========================================

export const practiceQuestions = {
  numerical: {
    numberSystem: [
      {
        id: 1,
        question: "Find the HCF of 36 and 48.",
        type: "text",
        answer: "12",
        hint: "Find common factors of both numbers. HCF is the highest common factor.",
        solution: [
          "Step 1: Find factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36",
          "Step 2: Find factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48",
          "Step 3: Common factors: 1, 2, 3, 4, 6, 12",
          "Step 4: Highest common factor = 12",
          "Answer: HCF = 12"
        ]
      },
      {
        id: 2,
        question: "Find the LCM of 15 and 20.",
        type: "text",
        answer: "60",
        hint: "LCM is the smallest number that both numbers divide into evenly.",
        solution: [
          "Step 1: Multiples of 15: 15, 30, 45, 60, 75...",
          "Step 2: Multiples of 20: 20, 40, 60, 80...",
          "Step 3: First common multiple = 60",
          "Answer: LCM = 60"
        ]
      },
      {
        id: 3,
        question: "How many prime numbers are there between 1 and 20?",
        type: "text",
        answer: "8",
        hint: "Prime numbers are divisible only by 1 and themselves. List them: 2, 3, 5...",
        solution: [
          "Step 1: A prime number is divisible only by 1 and itself",
          "Step 2: Primes between 1 and 20: 2, 3, 5, 7, 11, 13, 17, 19",
          "Step 3: Count them: 8 primes",
          "Answer: 8 prime numbers"
        ]
      },
      {
        id: 4,
        question: "What is the unit digit of 7⁵⁹?",
        type: "text",
        answer: "3",
        hint: "The unit digits of powers of 7 repeat in a cycle: 7, 9, 3, 1...",
        solution: [
          "Step 1: Find the pattern of unit digits for powers of 7",
          "Step 2: 7¹=7, 7²=49(9), 7³=343(3), 7⁴=2401(1), 7⁵=...7",
          "Step 3: Cycle repeats every 4: 7, 9, 3, 1",
          "Step 4: 59 ÷ 4 = 14 remainder 3",
          "Step 5: Third in cycle is 3",
          "Answer: Unit digit is 3"
        ]
      },
      {
        id: 5,
        question: "If a number is divisible by both 6 and 8, what is the smallest such positive number?",
        type: "text",
        answer: "24",
        hint: "Find the LCM of 6 and 8.",
        solution: [
          "Step 1: Smallest number divisible by both = LCM(6, 8)",
          "Step 2: LCM of 6 and 8 = 24",
          "Answer: 24"
        ]
      }
    ],
    simplification: [
      {
        id: 1,
        question: "Simplify: 15 + 6 × 2 - 12 ÷ 4",
        type: "text",
        answer: "24",
        hint: "Use BODMAS: Division, Multiplication, Addition, Subtraction (left to right).",
        solution: [
          "Step 1: Division first: 12 ÷ 4 = 3",
          "Step 2: Then multiplication: 6 × 2 = 12",
          "Step 3: Now: 15 + 12 - 3",
          "Step 4: Addition: 15 + 12 = 27",
          "Step 5: Subtraction: 27 - 3 = 24",
          "Answer: 24"
        ]
      },
      {
        id: 2,
        question: "Simplify: [25 - {5 × (8 - 3)}]",
        type: "text",
        answer: "0",
        hint: "Solve brackets from innermost to outermost.",
        solution: [
          "Step 1: Innermost bracket: (8 - 3) = 5",
          "Step 2: Next: {5 × 5} = 25",
          "Step 3: Outermost: [25 - 25] = 0",
          "Answer: 0"
        ]
      },
      {
        id: 3,
        question: "Simplify: 100 ÷ 10 ÷ 2 × 5",
        type: "text",
        answer: "25",
        hint: "Division and multiplication have equal priority, solve left to right.",
        solution: [
          "Step 1: 100 ÷ 10 = 10",
          "Step 2: 10 ÷ 2 = 5",
          "Step 3: 5 × 5 = 25",
          "Answer: 25"
        ]
      },
      {
        id: 4,
        question: "What is 40% of 250 + 30% of 150?",
        type: "text",
        answer: "145",
        hint: "Calculate each percentage separately, then add.",
        solution: [
          "Step 1: 40% of 250 = 0.40 × 250 = 100",
          "Step 2: 30% of 150 = 0.30 × 150 = 45",
          "Step 3: Sum = 100 + 45 = 145",
          "Answer: 145"
        ]
      }
    ],
    ages: [
      {
        id: 1,
        question: "A father is 4 times as old as his son. After 20 years, he will be twice as old. Find present ages.",
        type: "text",
        answer: "40, 10",
        hint: "Let son's age = x, father = 4x. After 20 years: son = x+20, father = 4x+20",
        solution: [
          "Step 1: Let son's present age = x, father = 4x",
          "Step 2: After 20 years: son = x + 20, father = 4x + 20",
          "Step 3: Given: 4x + 20 = 2(x + 20)",
          "Step 4: 4x + 20 = 2x + 40",
          "Step 5: 2x = 20, x = 10",
          "Step 6: Son = 10 years, Father = 40 years",
          "Answer: Father 40 years, Son 10 years"
        ]
      },
      {
        id: 2,
        question: "The present ages of A and B are in ratio 4:5. After 5 years, their ages will be in ratio 5:6. Find A's present age.",
        type: "text",
        answer: "20",
        hint: "Let present ages be 4x and 5x. After 5 years: (4x+5)/(5x+5) = 5/6",
        solution: [
          "Step 1: Let present ages be 4x and 5x",
          "Step 2: After 5 years: ages = 4x+5 and 5x+5",
          "Step 3: (4x+5)/(5x+5) = 5/6",
          "Step 4: 6(4x+5) = 5(5x+5)",
          "Step 5: 24x + 30 = 25x + 25",
          "Step 6: x = 5, so A = 4×5 = 20 years",
          "Answer: A's present age is 20 years"
        ]
      },
      {
        id: 3,
        question: "10 years ago, A was half of B's age. If the ratio of their present ages is 3:4, what will be the total of their present ages?",
        type: "text",
        answer: "35",
        hint: "Let present ages be 3x and 4x. Ten years ago: (3x-10) = (1/2)(4x-10)",
        solution: [
          "Step 1: Let present ages be 3x and 4x",
          "Step 2: 10 years ago: A = 3x - 10, B = 4x - 10",
          "Step 3: Given: 3x - 10 = (1/2)(4x - 10)",
          "Step 4: 2(3x - 10) = 4x - 10 → 6x - 20 = 4x - 10",
          "Step 5: 2x = 10, x = 5",
          "Step 6: Present ages: 15 and 20 years",
          "Step 7: Verify: 10 years ago: 5 and 10. 5 = ½(10) ✓",
          "Answer: Total = 15 + 20 = 35 years"
        ]
      }
    ],
    percentages: [
      {
        id: 1,
        question: "What is 25% of 400?",
        type: "text",
        answer: "100",
        hint: "25% means 25 out of 100. Multiply 25/100 by 400.",
        solution: [
          "Step 1: 25% means 25 out of every 100, which equals 25/100 = 0.25",
          "Step 2: To find 25% of 400, we multiply: 0.25 × 400",
          "Step 3: 0.25 × 400 = (25/100) × 400 = 25 × 4 = 100",
          "Answer: 25% of 400 is 100"
        ]
      },
      {
        id: 2,
        question: "If a shirt costs Rs. 800 and is on 20% discount, what is the discount amount?",
        type: "text",
        answer: "160",
        hint: "Discount = Discount% × Original Price",
        solution: [
          "Step 1: Original price = Rs. 800, Discount percentage = 20%",
          "Step 2: Discount amount = 20% of 800 = (20/100) × 800",
          "Step 3: (20/100) × 800 = 0.20 × 800 = 160",
          "Answer: The discount amount is Rs. 160"
        ]
      },
      {
        id: 3,
        question: "A student scored 360 marks out of 500. What is his percentage?",
        type: "text",
        answer: "72",
        hint: "Percentage = (Obtained marks / Total marks) × 100",
        solution: [
          "Step 1: Obtained marks = 360, Total marks = 500",
          "Step 2: Percentage = (360 / 500) × 100",
          "Step 3: 360 / 500 = 0.72",
          "Step 4: 0.72 × 100 = 72%",
          "Answer: The student scored 72%"
        ]
      },
      {
        id: 4,
        question: "If the price of an item increases from Rs. 200 to Rs. 250, what is the percentage increase?",
        type: "text",
        answer: "25",
        hint: "Percentage increase = (Increase / Original) × 100",
        solution: [
          "Step 1: Original price = Rs. 200, New price = Rs. 250",
          "Step 2: Increase = New price - Original price = 250 - 200 = Rs. 50",
          "Step 3: Percentage increase = (50 / 200) × 100",
          "Step 4: 50 / 200 = 0.25, so 0.25 × 100 = 25%",
          "Answer: The price increased by 25%"
        ]
      },
      {
        id: 5,
        question: "In a class of 60 students, 40% are girls. How many boys are there?",
        type: "text",
        answer: "36",
        hint: "First find the number of girls, then subtract from total.",
        solution: [
          "Step 1: Total students = 60, Girls = 40% of 60",
          "Step 2: Number of girls = (40/100) × 60 = 0.40 × 60 = 24",
          "Step 3: Number of boys = Total - Girls = 60 - 24 = 36",
          "Answer: There are 36 boys in the class"
        ]
      }
    ],
    averages: [
      {
        id: 1,
        question: "Find the average of: 15, 25, 35, 45, 55",
        type: "text",
        answer: "35",
        hint: "Average = Sum of all numbers ÷ Count of numbers",
        solution: [
          "Step 1: Add all numbers: 15 + 25 + 35 + 45 + 55 = 175",
          "Step 2: Count how many numbers: 5 numbers",
          "Step 3: Average = Total ÷ Count = 175 ÷ 5 = 35",
          "Answer: The average is 35"
        ]
      },
      {
        id: 2,
        question: "The average of 5 numbers is 20. If four numbers are 15, 18, 22, and 25, find the fifth number.",
        type: "text",
        answer: "20",
        hint: "Total = Average × Count. Subtract the sum of four numbers from total.",
        solution: [
          "Step 1: Average of 5 numbers = 20, so Total = 20 × 5 = 100",
          "Step 2: Sum of four known numbers = 15 + 18 + 22 + 25 = 80",
          "Step 3: Fifth number = Total - Sum of four = 100 - 80 = 20",
          "Answer: The fifth number is 20"
        ]
      },
      {
        id: 3,
        question: "The average weight of 8 persons is 65 kg. If a new person joins and the average becomes 66 kg, what is the weight of the new person?",
        type: "text",
        answer: "74",
        hint: "Find the old total and new total. The difference is the new person's weight.",
        solution: [
          "Step 1: Old total weight = 8 × 65 = 520 kg",
          "Step 2: New total weight (9 persons) = 9 × 66 = 594 kg",
          "Step 3: Weight of new person = New total - Old total = 594 - 520 = 74 kg",
          "Answer: The new person weighs 74 kg"
        ]
      },
      {
        id: 4,
        question: "A student's average score in 3 tests is 80. If he scores 90 in the 4th test, what is his new average?",
        type: "text",
        answer: "82.5",
        hint: "Find old total, add new score, divide by 4.",
        solution: [
          "Step 1: Old total for 3 tests = 3 × 80 = 240",
          "Step 2: New total after 4th test = 240 + 90 = 330",
          "Step 3: New average = 330 ÷ 4 = 82.5",
          "Answer: The new average is 82.5"
        ]
      },
      {
        id: 5,
        question: "The average of 6 numbers is 15. If each number is multiplied by 3, what is the new average?",
        type: "text",
        answer: "45",
        hint: "If each number is multiplied by k, the average is also multiplied by k.",
        solution: [
          "Step 1: Original average = 15",
          "Step 2: Each number is multiplied by 3",
          "Step 3: New average = Original average × 3 = 15 × 3 = 45",
          "Answer: The new average is 45"
        ]
      }
    ],
    profitLoss: [
      {
        id: 1,
        question: "A product is bought for Rs. 500 and sold for Rs. 600. Find the profit percentage.",
        type: "text",
        answer: "20",
        hint: "Profit = SP - CP, Profit% = (Profit/CP) × 100",
        solution: [
          "Step 1: Cost Price (CP) = Rs. 500, Selling Price (SP) = Rs. 600",
          "Step 2: Profit = SP - CP = 600 - 500 = Rs. 100",
          "Step 3: Profit% = (Profit / CP) × 100 = (100/500) × 100",
          "Step 4: (100/500) × 100 = 0.20 × 100 = 20%",
          "Answer: Profit percentage is 20%"
        ]
      },
      {
        id: 2,
        question: "A shopkeeper sells an item at Rs. 450 making a loss of 10%. What was the cost price?",
        type: "text",
        answer: "500",
        hint: "SP = CP × (100 - Loss%)/100, so CP = SP × 100/(100 - Loss%)",
        solution: [
          "Step 1: Selling Price = Rs. 450, Loss = 10%",
          "Step 2: SP = 90% of CP (since 100% - 10% = 90%)",
          "Step 3: 450 = 0.90 × CP",
          "Step 4: CP = 450 / 0.90 = 500",
          "Answer: The cost price was Rs. 500"
        ]
      },
      {
        id: 3,
        question: "If a product is sold at Rs. 540, there is a loss of 10%. At what price should it be sold to gain 20%?",
        type: "text",
        answer: "720",
        hint: "First find CP from loss, then calculate new SP for 20% profit.",
        solution: [
          "Step 1: SP with 10% loss = Rs. 540",
          "Step 2: SP = 90% of CP, so 540 = 0.90 × CP",
          "Step 3: CP = 540 / 0.90 = Rs. 600",
          "Step 4: For 20% profit: SP = 120% of CP = 1.20 × 600",
          "Step 5: New SP = 720",
          "Answer: It should be sold at Rs. 720"
        ]
      },
      {
        id: 4,
        question: "A shopkeeper marks his goods 40% above cost price and allows 20% discount. Find his profit percentage.",
        type: "text",
        answer: "12",
        hint: "Let CP = 100. MP = 140. SP = 140 × 0.80. Find profit on CP = 100.",
        solution: [
          "Step 1: Let Cost Price = Rs. 100",
          "Step 2: Marked Price (40% above CP) = 100 + 40 = Rs. 140",
          "Step 3: Discount = 20%, so SP = 140 × (1 - 0.20) = 140 × 0.80 = Rs. 112",
          "Step 4: Profit = SP - CP = 112 - 100 = Rs. 12",
          "Step 5: Profit% = (12/100) × 100 = 12%",
          "Answer: Profit percentage is 12%"
        ]
      }
    ],
    timeSpeedDistance: [
      {
        id: 1,
        question: "A train covers 360 km in 6 hours. What is its speed in km/hr?",
        type: "text",
        answer: "60",
        hint: "Speed = Distance ÷ Time",
        solution: [
          "Step 1: Distance = 360 km, Time = 6 hours",
          "Step 2: Speed = Distance ÷ Time = 360 ÷ 6",
          "Step 3: Speed = 60 km/hr",
          "Answer: The speed is 60 km/hr"
        ]
      },
      {
        id: 2,
        question: "A car travels at 45 km/hr. How long will it take to travel 180 km?",
        type: "text",
        answer: "4",
        hint: "Time = Distance ÷ Speed",
        solution: [
          "Step 1: Distance = 180 km, Speed = 45 km/hr",
          "Step 2: Time = Distance ÷ Speed = 180 ÷ 45",
          "Step 3: Time = 4 hours",
          "Answer: It will take 4 hours"
        ]
      },
      {
        id: 3,
        question: "Two trains start from stations 400 km apart and travel towards each other at 60 km/hr and 40 km/hr. In how many hours will they meet?",
        type: "text",
        answer: "4",
        hint: "When moving towards each other, relative speed = sum of speeds.",
        solution: [
          "Step 1: Distance between trains = 400 km",
          "Step 2: Speed of first train = 60 km/hr, Second train = 40 km/hr",
          "Step 3: Since they move towards each other, relative speed = 60 + 40 = 100 km/hr",
          "Step 4: Time to meet = Distance ÷ Relative Speed = 400 ÷ 100 = 4 hours",
          "Answer: They will meet in 4 hours"
        ]
      },
      {
        id: 4,
        question: "A train 200m long running at 72 km/hr crosses a pole. How long does it take?",
        type: "text",
        answer: "10",
        hint: "Convert speed to m/s. Time = Length ÷ Speed.",
        solution: [
          "Step 1: Train length = 200 m, Speed = 72 km/hr",
          "Step 2: Convert speed to m/s: 72 km/hr = 72 × (1000/3600) = 20 m/s",
          "Step 3: Time to cross pole = Length ÷ Speed = 200 ÷ 20 = 10 seconds",
          "Answer: It takes 10 seconds"
        ]
      }
    ],
    timeWork: [
      {
        id: 1,
        question: "A can complete a work in 12 days. B can complete it in 18 days. How many days will they take working together?",
        type: "text",
        answer: "7.2",
        hint: "A's work per day = 1/12, B's work per day = 1/18. Together = sum.",
        solution: [
          "Step 1: A's work per day = 1/12",
          "Step 2: B's work per day = 1/18",
          "Step 3: Together per day = 1/12 + 1/18 = 3/36 + 2/36 = 5/36",
          "Step 4: Days to complete = 1 ÷ (5/36) = 36/5 = 7.2 days",
          "Answer: They will take 7.2 days (or 7 days 5 hours)"
        ]
      },
      {
        id: 2,
        question: "A and B together can do a work in 8 days. A alone can do it in 12 days. How long will B alone take?",
        type: "text",
        answer: "24",
        hint: "B's work per day = (A+B)'s work - A's work = 1/8 - 1/12",
        solution: [
          "Step 1: (A + B)'s work per day = 1/8",
          "Step 2: A's work per day = 1/12",
          "Step 3: B's work per day = 1/8 - 1/12 = 3/24 - 2/24 = 1/24",
          "Step 4: B alone will take = 1 ÷ (1/24) = 24 days",
          "Answer: B alone will take 24 days"
        ]
      },
      {
        id: 3,
        question: "10 workers can build a wall in 15 days. How many workers are needed to build it in 6 days?",
        type: "text",
        answer: "25",
        hint: "More workers = less days (inverse proportion). Workers × Days = constant.",
        solution: [
          "Step 1: Total work = Workers × Days = 10 × 15 = 150 worker-days",
          "Step 2: Required days = 6",
          "Step 3: Workers needed = Total work ÷ Days = 150 ÷ 6 = 25",
          "Answer: 25 workers are needed"
        ]
      }
    ],
    probability: [
      {
        id: 1,
        question: "A bag contains 4 red, 3 blue, and 5 green balls. What is the probability of drawing a red ball?",
        type: "text",
        answer: "1/3",
        hint: "P(red) = Red balls / Total balls",
        solution: [
          "Step 1: Count red balls = 4",
          "Step 2: Count total balls = 4 + 3 + 5 = 12",
          "Step 3: P(red) = 4/12 = 1/3",
          "Answer: Probability of red ball is 1/3"
        ]
      },
      {
        id: 2,
        question: "What is the probability of getting a sum of 7 when two dice are rolled?",
        type: "text",
        answer: "1/6",
        hint: "Find all pairs that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
        solution: [
          "Step 1: Total possible outcomes with two dice = 6 × 6 = 36",
          "Step 2: Pairs that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 pairs",
          "Step 3: P(sum = 7) = 6/36 = 1/6",
          "Answer: Probability is 1/6"
        ]
      },
      {
        id: 3,
        question: "In how many ways can 5 people be arranged in a row?",
        type: "text",
        answer: "120",
        hint: "This is a permutation. 5! = 5 × 4 × 3 × 2 × 1",
        solution: [
          "Step 1: First position: 5 choices",
          "Step 2: Second position: 4 choices remaining",
          "Step 3: Third position: 3 choices, Fourth: 2 choices, Fifth: 1 choice",
          "Step 4: Total arrangements = 5 × 4 × 3 × 2 × 1 = 120",
          "Answer: 120 ways"
        ]
      }
    ]
  },
  reasoning: {
    numberSeries: [
      {
        id: 1,
        question: "Find the next number: 5, 10, 20, 40, ?",
        type: "mcq",
        options: ["60", "70", "80", "90"],
        answer: "80",
        hint: "Each number is multiplied by 2 to get the next number.",
        solution: [
          "Step 1: Look at the pattern: 5 → 10 → 20 → 40",
          "Step 2: Check: 5 × 2 = 10 ✓, 10 × 2 = 20 ✓, 20 × 2 = 40 ✓",
          "Step 3: Pattern: Each number doubles (×2)",
          "Step 4: Next number = 40 × 2 = 80",
          "Answer: 80"
        ]
      },
      {
        id: 2,
        question: "Find the next number: 2, 6, 12, 20, ?",
        type: "mcq",
        options: ["28", "30", "32", "34"],
        answer: "30",
        hint: "Find the differences between consecutive numbers.",
        solution: [
          "Step 1: Find differences: 6-2=4, 12-6=6, 20-12=8",
          "Step 2: Differences are: 4, 6, 8 (increasing by 2)",
          "Step 3: Next difference should be 10",
          "Step 4: Next number = 20 + 10 = 30",
          "Answer: 30"
        ]
      },
      {
        id: 3,
        question: "Find the next number: 1, 4, 9, 16, 25, ?",
        type: "mcq",
        options: ["30", "35", "36", "49"],
        answer: "36",
        hint: "These are squares of natural numbers: 1², 2², 3²...",
        solution: [
          "Step 1: Look at each number",
          "Step 2: 1 = 1², 4 = 2², 9 = 3², 16 = 4², 25 = 5²",
          "Step 3: Pattern: Squares of 1, 2, 3, 4, 5...",
          "Step 4: Next is 6² = 36",
          "Answer: 36"
        ]
      },
      {
        id: 4,
        question: "Find the next number: 3, 8, 15, 24, 35, ?",
        type: "mcq",
        options: ["46", "48", "50", "52"],
        answer: "48",
        hint: "Look at the differences between consecutive numbers.",
        solution: [
          "Step 1: Find differences: 8-3=5, 15-8=7, 24-15=9, 35-24=11",
          "Step 2: Differences are: 5, 7, 9, 11 (odd numbers starting from 5)",
          "Step 3: Next difference should be 13",
          "Step 4: Next number = 35 + 13 = 48",
          "Answer: 48"
        ]
      }
    ],
    codingDecoding: [
      {
        id: 1,
        question: "If APPLE is coded as BQQMF, how is MANGO coded?",
        type: "mcq",
        options: ["NBOHP", "NBOGP", "NCPHQ", "NBPHO"],
        answer: "NBOHP",
        hint: "Each letter moves forward by 1 position in the alphabet.",
        solution: [
          "Step 1: Compare APPLE and BQQMF",
          "Step 2: A→B (+1), P→Q (+1), P→Q (+1), L→M (+1), E→F (+1)",
          "Step 3: Rule: Each letter moves 1 position forward",
          "Step 4: Apply to MANGO:",
          "Step 5: M→N, A→B, N→O, G→H, O→P",
          "Answer: NBOHP"
        ]
      },
      {
        id: 2,
        question: "If 'light' is called 'dark', 'dark' is called 'white', 'white' is called 'blue', 'blue' is called 'red', 'red' is called 'green', then what is the color of blood?",
        type: "mcq",
        options: ["dark", "white", "red", "green"],
        answer: "green",
        hint: "Blood is red. In the given code, what is 'red' called?",
        solution: [
          "Step 1: Blood is naturally RED in color",
          "Step 2: We need to find what 'red' is called in the code",
          "Step 3: According to the code: 'red' is called 'green'",
          "Answer: green"
        ]
      },
      {
        id: 3,
        question: "If TAP is coded as SZO, then how is FREEZE coded?",
        type: "mcq",
        options: ["EQDDYD", "EQDFYG", "ESDFYF", "EQDDYF"],
        answer: "EQDDYD",
        hint: "Each letter moves backward by 1 position.",
        solution: [
          "Step 1: Compare TAP and SZO",
          "Step 2: T→S (-1), A→Z (-1, wraps around), P→O (-1)",
          "Step 3: Rule: Each letter moves 1 position backward",
          "Step 4: Apply to FREEZE:",
          "Step 5: F→E, R→Q, E→D, E→D, Z→Y, E→D",
          "Answer: EQDDYD"
        ]
      }
    ],
    directions: [
      {
        id: 1,
        question: "Rahul walks 10 meters North, then turns right and walks 5 meters, then turns right again and walks 10 meters. In which direction is he facing now?",
        type: "mcq",
        options: ["North", "South", "East", "West"],
        answer: "South",
        hint: "Track each turn. Starting North, first right turn = East, second right turn = South.",
        solution: [
          "Step 1: Start facing North",
          "Step 2: Walk 10m North (facing North)",
          "Step 3: Turn right from North → Now facing East",
          "Step 4: Walk 5m East (facing East)",
          "Step 5: Turn right from East → Now facing South",
          "Step 6: Walk 10m South (facing South)",
          "Answer: He is facing South"
        ]
      },
      {
        id: 2,
        question: "A person walks 4 km East, then turns left and walks 3 km. How far is he from the starting point?",
        type: "text",
        answer: "5",
        hint: "This forms a right triangle. Use Pythagoras theorem.",
        solution: [
          "Step 1: Draw the path on paper",
          "Step 2: Start at point A, go 4 km East to point B",
          "Step 3: Turn left from East → Now facing North",
          "Step 4: Go 3 km North to point C",
          "Step 5: This forms a right triangle ABC with legs 4 and 3",
          "Step 6: Distance from start = √(4² + 3²) = √(16+9) = √25 = 5 km",
          "Answer: 5 km"
        ]
      },
      {
        id: 3,
        question: "A man is facing West. He turns 45° clockwise, then 180° anticlockwise. In which direction is he facing now?",
        type: "mcq",
        options: ["North-East", "North-West", "South-West", "South-East"],
        answer: "South-East",
        hint: "Start West, add 45° clockwise, then add 180° anticlockwise.",
        solution: [
          "Step 1: Start facing West (270° from North)",
          "Step 2: Turn 45° clockwise: 270° + 45° = 315° (North-West)",
          "Step 3: Turn 180° anticlockwise from North-West",
          "Step 4: 315° - 180° = 135° = South-East",
          "Answer: South-East"
        ]
      }
    ],
    bloodRelations: [
      {
        id: 1,
        question: "Pointing to a photograph, a man said, 'She is the daughter of my father's only son.' How is the man related to the girl in the photograph?",
        type: "mcq",
        options: ["Brother", "Uncle", "Father", "Grandfather"],
        answer: "Father",
        hint: "'My father's only son' refers to the man himself.",
        solution: [
          "Step 1: 'My father's only son' = the man himself (since he's the only son)",
          "Step 2: 'Daughter of' (my father's only son) = daughter of the man",
          "Step 3: The girl is the man's daughter",
          "Answer: Father"
        ]
      },
      {
        id: 2,
        question: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
        type: "mcq",
        options: ["Granddaughter", "Daughter", "Niece", "Grandmother"],
        answer: "Granddaughter",
        hint: "Build the family tree: D → C → B, and A is B's sister.",
        solution: [
          "Step 1: Draw the family tree",
          "Step 2: D is C's father, C is B's mother → D is B's grandfather",
          "Step 3: A is B's sister → A and B are siblings",
          "Step 4: Since D is B's grandfather, D is also A's grandfather",
          "Step 5: A is D's granddaughter",
          "Answer: Granddaughter"
        ]
      },
      {
        id: 3,
        question: "Introducing a boy, a girl said, 'He is the son of the daughter of the father of my uncle.' How is the boy related to the girl?",
        type: "mcq",
        options: ["Brother", "Cousin", "Nephew", "Son"],
        answer: "Cousin",
        hint: "Break it down: Father of uncle = Grandfather. Daughter of grandfather = Aunt.",
        solution: [
          "Step 1: 'Father of my uncle' = Girl's grandfather",
          "Step 2: 'Daughter of grandfather' = Girl's aunt (father's sister or mother)",
          "Step 3: 'Son of aunt' = Girl's cousin",
          "Answer: Cousin"
        ]
      }
    ],
    seatingArrangement: [
      {
        id: 1,
        question: "Five people A, B, C, D, E are sitting in a row facing North. A is to the immediate left of B. C is at one of the ends. D is between A and C. Who is sitting at the other end?",
        type: "mcq",
        options: ["A", "B", "D", "E"],
        answer: "E",
        hint: "Draw the arrangement. C at one end, D between A and C, A left of B.",
        solution: [
          "Step 1: C is at one end. Let's say C is at left end: C _ _ _ _",
          "Step 2: D is between A and C. So: C D A _ _",
          "Step 3: A is to the immediate left of B: C D A B _",
          "Step 4: E is at the other (right) end: C D A B E",
          "Answer: E"
        ]
      },
      {
        id: 2,
        question: "P, Q, R, S sit around a table. P is opposite R. Q is to the right of P. Who is to the left of R?",
        type: "mcq",
        options: ["P", "Q", "S", "Cannot determine"],
        answer: "S",
        hint: "Draw a circle. P opposite R, Q right of P.",
        solution: [
          "Step 1: P opposite R (positions 1 and 3 in a circle of 4)",
          "Step 2: Q is to the right of P",
          "Step 3: In a circle: P - Q - R - S (clockwise)",
          "Step 4: Left of R (anticlockwise from R) is S",
          "Answer: S"
        ]
      }
    ]
  },
  verbal: {
    readingComprehension: [
      {
        id: 1,
        question: "Read the passage and answer: 'Climate change is one of the biggest challenges facing humanity. Rising temperatures have led to melting glaciers, rising sea levels, and extreme weather events. Scientists agree that human activities, especially burning fossil fuels, are the main cause. If we don't act now, the consequences could be catastrophic for future generations.'\n\nWhat is the main cause of climate change according to the passage?",
        type: "mcq",
        options: ["Natural cycles", "Human activities", "Solar flares", "Volcanic eruptions"],
        answer: "Human activities",
        hint: "Look for what the passage explicitly states as the cause.",
        solution: [
          "Step 1: Read the passage carefully",
          "Step 2: Find the sentence about causes",
          "Step 3: 'Scientists agree that human activities, especially burning fossil fuels, are the main cause'",
          "Answer: Human activities"
        ]
      },
      {
        id: 2,
        question: "Based on the climate change passage, what is NOT mentioned as an effect of rising temperatures?",
        type: "mcq",
        options: ["Melting glaciers", "Rising sea levels", "Earthquakes", "Extreme weather events"],
        answer: "Earthquakes",
        hint: "List all effects mentioned in the passage.",
        solution: [
          "Step 1: List the effects mentioned: melting glaciers, rising sea levels, extreme weather events",
          "Step 2: Compare with options",
          "Step 3: Earthquakes are NOT mentioned",
          "Answer: Earthquakes"
        ]
      },
      {
        id: 3,
        question: "Read: 'Technology has transformed education. Online learning platforms allow students to access courses from anywhere. However, critics argue that face-to-face interaction is irreplaceable. A balanced approach combining both methods may be the best solution.'\n\nWhat does the passage suggest as the best solution?",
        type: "mcq",
        options: ["Only online learning", "Only traditional learning", "A balanced approach", "Neither method"],
        answer: "A balanced approach",
        hint: "Look for the concluding suggestion in the passage.",
        solution: [
          "Step 1: Read the last sentence carefully",
          "Step 2: 'A balanced approach combining both methods may be the best solution'",
          "Answer: A balanced approach"
        ]
      }
    ],
    grammar: [
      {
        id: 1,
        question: "Choose the correct form: 'Neither the teacher nor the students ___ present yesterday.'",
        type: "mcq",
        options: ["was", "were", "is", "are"],
        answer: "were",
        hint: "With 'neither...nor', the verb agrees with the subject closest to it.",
        solution: [
          "Step 1: Identify the subjects: 'teacher' (singular) and 'students' (plural)",
          "Step 2: Rule: With 'neither...nor', verb agrees with the nearer subject",
          "Step 3: 'Students' is closer to the verb, so use plural 'were'",
          "Step 4: Also, 'yesterday' indicates past tense",
          "Answer: were"
        ]
      },
      {
        id: 2,
        question: "Choose the correct article: 'He is ___ honest man.'",
        type: "mcq",
        options: ["a", "an", "the", "no article"],
        answer: "an",
        hint: "Use 'an' before words starting with a vowel SOUND.",
        solution: [
          "Step 1: The word 'honest' starts with 'h' but is silent",
          "Step 2: 'Honest' sounds like 'onest' (starts with vowel sound)",
          "Step 3: Use 'an' before vowel sounds",
          "Answer: an"
        ]
      },
      {
        id: 3,
        question: "Choose the correct preposition: 'She was born ___ 15th August 1990.'",
        type: "mcq",
        options: ["in", "on", "at", "by"],
        answer: "on",
        hint: "'On' is used for specific days and dates.",
        solution: [
          "Step 1: The sentence mentions a specific date: 15th August 1990",
          "Step 2: Rule: 'on' is used for specific days and dates",
          "Step 3: 'in' is for months/years, 'at' is for specific times",
          "Answer: on"
        ]
      },
      {
        id: 4,
        question: "Identify the error: 'Each of the boys have completed their work.'",
        type: "mcq",
        options: ["Each", "of the boys", "have", "their work"],
        answer: "have",
        hint: "'Each' is singular and requires a singular verb.",
        solution: [
          "Step 1: Subject is 'Each' (singular)",
          "Step 2: 'Each' requires singular verb 'has', not 'have'",
          "Step 3: Correct: 'Each of the boys has completed...'",
          "Answer: have (should be 'has')"
        ]
      },
      {
        id: 5,
        question: "Choose the synonym of 'Abundant':",
        type: "mcq",
        options: ["Scarce", "Plentiful", "Limited", "Rare"],
        answer: "Plentiful",
        hint: "Abundant means existing in large quantities.",
        solution: [
          "Step 1: 'Abundant' means existing in large quantities, plentiful",
          "Step 2: 'Scarce', 'Limited', 'Rare' all mean the opposite",
          "Answer: Plentiful"
        ]
      },
      {
        id: 6,
        question: "Choose the antonym of 'Benevolent':",
        type: "mcq",
        options: ["Kind", "Generous", "Malevolent", "Charitable"],
        answer: "Malevolent",
        hint: "Benevolent means kind and generous. What means the opposite?",
        solution: [
          "Step 1: 'Bene' means good, 'male' means bad",
          "Step 2: 'Benevolent' means kind, wishing good for others",
          "Step 3: 'Malevolent' means wishing evil, the opposite",
          "Answer: Malevolent"
        ]
      }
    ],
    sentenceCompletion: [
      {
        id: 1,
        question: "The professor's lecture was so ___ that many students fell asleep.",
        type: "mcq",
        options: ["interesting", "monotonous", "engaging", "enthusiastic"],
        answer: "monotonous",
        hint: "What would cause students to fall asleep?",
        solution: [
          "Step 1: The effect is 'students fell asleep'",
          "Step 2: We need a cause that leads to sleepiness",
          "Step 3: 'Monotonous' means boring, repetitive, dull",
          "Answer: monotonous"
        ]
      },
      {
        id: 2,
        question: "Despite the ___ weather, they continued their journey.",
        type: "mcq",
        options: ["pleasant", "favorable", "adverse", "mild"],
        answer: "adverse",
        hint: "'Despite' indicates contrast. What weather would make continuing difficult?",
        solution: [
          "Step 1: 'Despite' shows contrast - something negative but they continued",
          "Step 2: We need negative weather that would normally stop travel",
          "Step 3: 'Adverse' means unfavorable, hostile, difficult",
          "Answer: adverse"
        ]
      }
    ]
  },
  coding: {
    basics: [
      {
        id: 1,
        question: "Write a C++ program to find the sum of first N natural numbers.\n\nInput: An integer N\nOutput: Sum of first N natural numbers",
        type: "code",
        hint: "Sum = 1 + 2 + 3 + ... + N = N*(N+1)/2",
        solution: [
          "Step 1: Read the number N from user",
          "Step 2: Use the formula: Sum = N * (N + 1) / 2",
          "Step 3: Or use a loop to add numbers from 1 to N",
          "Step 4: Print the result"
        ],
        code: `#include <iostream>
using namespace std;

int main() {
    int n;  // variable to store the input number
    cin >> n;  // read the number from user
    
    // Using formula
    int sum = n * (n + 1) / 2;  // formula: sum = n*(n+1)/2
    
    cout << sum;  // print the sum
    return 0;  // end the program
}`
      },
      {
        id: 2,
        question: "Write a C++ program to find the maximum of three numbers.\n\nInput: Three integers\nOutput: The maximum number",
        type: "code",
        hint: "Compare first two, then compare result with third.",
        solution: [
          "Step 1: Read three numbers a, b, c",
          "Step 2: Assume a is maximum initially",
          "Step 3: If b > max, update max to b",
          "Step 4: If c > max, update max to c",
          "Step 5: Print max"
        ],
        code: `#include <iostream>
using namespace std;

int main() {
    int a, b, c;  // three variables for three numbers
    cin >> a >> b >> c;  // read all three numbers
    
    int max = a;  // assume a is the maximum initially
    
    if (b > max) {  // if b is greater than current max
        max = b;  // update max to b
    }
    
    if (c > max) {  // if c is greater than current max
        max = c;  // update max to c
    }
    
    cout << max;  // print the maximum number
    return 0;
}`
      },
      {
        id: 3,
        question: "Write a C++ program to check if a number is palindrome.\n\nInput: An integer\nOutput: 'Palindrome' or 'Not Palindrome'",
        type: "code",
        hint: "A palindrome number reads same forward and backward. Reverse and compare.",
        solution: [
          "Step 1: Store original number in a temporary variable",
          "Step 2: Reverse the number",
          "Step 3: Compare reversed number with original",
          "Step 4: If same, it's palindrome"
        ],
        code: `#include <iostream>
using namespace std;

int main() {
    int n;  // original number
    cin >> n;  // read the number
    
    int original = n;  // store original number for comparison
    int reversed = 0;  // variable for reversed number
    
    // reverse the number
    while (n > 0) {
        int digit = n % 10;  // get last digit
        reversed = reversed * 10 + digit;  // build reversed number
        n = n / 10;  // remove last digit
    }
    
    // compare original and reversed
    if (original == reversed) {
        cout << "Palindrome";  // same means palindrome
    } else {
        cout << "Not Palindrome";  // different means not palindrome
    }
    
    return 0;
}`
      },
      {
        id: 4,
        question: "Write a C++ program to find the largest element in an array.\n\nInput: First line contains N, second line contains N integers\nOutput: The largest element",
        type: "code",
        hint: "Assume first element is largest, then compare with all others.",
        solution: [
          "Step 1: Read the array size N",
          "Step 2: Read N elements into array",
          "Step 3: Assume arr[0] is largest",
          "Step 4: Loop from index 1 to N-1",
          "Step 5: If current element > largest, update largest",
          "Step 6: Print largest"
        ],
        code: `#include <iostream>
using namespace std;

int main() {
    int n;  // array size
    cin >> n;  // read size
    
    int arr[100];  // declare array
    
    // read array elements
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int largest = arr[0];  // assume first element is largest
    
    // compare with all other elements
    for (int i = 1; i < n; i++) {
        if (arr[i] > largest) {  // if current element is larger
            largest = arr[i];  // update largest
        }
    }
    
    cout << largest;  // print the largest element
    return 0;
}`
      },
      {
        id: 5,
        question: "Write a C++ program to check if a number is prime.\n\nInput: An integer N\nOutput: 'Prime' or 'Not Prime'",
        type: "code",
        hint: "A prime number is divisible only by 1 and itself. Check divisibility from 2 to sqrt(n).",
        solution: [
          "Step 1: Read the number N",
          "Step 2: If N <= 1, it's not prime",
          "Step 3: Check if N is divisible by any number from 2 to N-1",
          "Step 4: If divisible, not prime. If not divisible by any, prime."
        ],
        code: `#include <iostream>
using namespace std;

int main() {
    int n;  // the number to check
    cin >> n;  // read the number
    
    bool isPrime = true;  // assume it's prime initially
    
    if (n <= 1) {  // 0 and 1 are not prime
        isPrime = false;
    } else {
        // check divisibility from 2 to n-1
        for (int i = 2; i < n; i++) {
            if (n % i == 0) {  // if n is divisible by i
                isPrime = false;  // it's not prime
                break;  // exit the loop
            }
        }
    }
    
    if (isPrime) {
        cout << "Prime";
    } else {
        cout << "Not Prime";
    }
    
    return 0;
}`
      }
    ]
  }
};

// Topic mapping for practice section
export const topicMapping = {
  numerical: [
    { id: 'numberSystem', name: 'Number System (HCF/LCM)', count: 5 },
    { id: 'simplification', name: 'Simplification (BODMAS)', count: 4 },
    { id: 'ages', name: 'Problems on Ages', count: 3 },
    { id: 'percentages', name: 'Percentages', count: 5 },
    { id: 'averages', name: 'Averages', count: 5 },
    { id: 'profitLoss', name: 'Profit & Loss', count: 4 },
    { id: 'timeSpeedDistance', name: 'Time, Speed & Distance', count: 4 },
    { id: 'timeWork', name: 'Time & Work', count: 3 },
    { id: 'probability', name: 'P&C / Probability', count: 3 }
  ],
  reasoning: [
    { id: 'numberSeries', name: 'Number Series', count: 4 },
    { id: 'codingDecoding', name: 'Coding-Decoding', count: 3 },
    { id: 'directions', name: 'Directions', count: 3 },
    { id: 'bloodRelations', name: 'Blood Relations', count: 3 },
    { id: 'seatingArrangement', name: 'Seating Arrangement', count: 2 }
  ],
  verbal: [
    { id: 'readingComprehension', name: 'Reading Comprehension', count: 3 },
    { id: 'grammar', name: 'Grammar', count: 6 },
    { id: 'sentenceCompletion', name: 'Sentence Completion', count: 2 }
  ],
  coding: [
    { id: 'basics', name: 'Basic Programs', count: 5 }
  ]
};

// Mock test questions
export const mockTestQuestions = [
  // NUMERICAL (Questions 1-20)
  { id: 1, category: "Numerical", question: "What is 15% of 600?", type: "mcq", options: ["75", "90", "100", "85"], answer: "90", solution: ["Step 1: 15% = 15/100 = 0.15", "Step 2: 15% of 600 = 0.15 × 600 = 90", "Answer: 90"] },
  { id: 2, category: "Numerical", question: "A number increased by 20% becomes 240. What was the original number?", type: "mcq", options: ["180", "200", "220", "192"], answer: "200", solution: ["Step 1: Let original = x", "Step 2: After 20% increase: 1.20x = 240", "Step 3: x = 240 ÷ 1.20 = 200", "Answer: 200"] },
  { id: 3, category: "Numerical", question: "The average of five numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?", type: "mcq", options: ["35", "37", "40", "45"], answer: "35", solution: ["Step 1: Total of 5 = 5 × 27 = 135", "Step 2: Total of 4 = 4 × 25 = 100", "Step 3: Excluded = 135 - 100 = 35", "Answer: 35"] },
  { id: 4, category: "Numerical", question: "A shopkeeper buys an item for Rs. 500 and sells at Rs. 625. What is the profit percentage?", type: "mcq", options: ["20%", "25%", "30%", "15%"], answer: "25%", solution: ["Step 1: CP = Rs. 500, SP = Rs. 625", "Step 2: Profit = 625 - 500 = Rs. 125", "Step 3: Profit% = (125/500) × 100 = 25%", "Answer: 25%"] },
  { id: 5, category: "Numerical", question: "Find the simple interest on Rs. 2000 at 5% per annum for 3 years.", type: "mcq", options: ["Rs. 200", "Rs. 300", "Rs. 250", "Rs. 350"], answer: "Rs. 300", solution: ["Step 1: P = Rs. 2000, R = 5%, T = 3 years", "Step 2: SI = (P × R × T) / 100", "Step 3: SI = (2000 × 5 × 3) / 100 = Rs. 300", "Answer: Rs. 300"] },
  { id: 6, category: "Numerical", question: "A train travels 300 km in 5 hours. What is its speed?", type: "mcq", options: ["50 km/hr", "60 km/hr", "55 km/hr", "65 km/hr"], answer: "60 km/hr", solution: ["Step 1: Distance = 300 km, Time = 5 hours", "Step 2: Speed = Distance ÷ Time = 300 ÷ 5 = 60 km/hr", "Answer: 60 km/hr"] },
  { id: 7, category: "Numerical", question: "A can do a work in 15 days, B in 20 days. How many days working together?", type: "mcq", options: ["8 days", "8.57 days", "9 days", "10 days"], answer: "8.57 days", solution: ["Step 1: A's work/day = 1/15, B's work/day = 1/20", "Step 2: Together = 1/15 + 1/20 = 7/60 per day", "Step 3: Days = 60/7 ≈ 8.57 days", "Answer: 8.57 days"] },
  { id: 8, category: "Numerical", question: "In how many ways can 4 people be arranged in a row?", type: "mcq", options: ["12", "16", "24", "48"], answer: "24", solution: ["Step 1: First position: 4 choices", "Step 2: Second: 3, Third: 2, Fourth: 1", "Step 3: Total = 4 × 3 × 2 × 1 = 24 ways", "Answer: 24"] },
  { id: 9, category: "Numerical", question: "A bag has 4 red and 6 blue balls. What is the probability of drawing a red ball?", type: "mcq", options: ["2/5", "3/5", "1/3", "4/9"], answer: "2/5", solution: ["Step 1: Red = 4, Total = 10", "Step 2: P(Red) = 4/10 = 2/5", "Answer: 2/5"] },
  { id: 10, category: "Numerical", question: "Find the next number: 3, 9, 27, 81, ?", type: "mcq", options: ["162", "243", "324", "216"], answer: "243", solution: ["Step 1: Pattern: Each number × 3", "Step 2: 81 × 3 = 243", "Answer: 243"] },
  { id: 11, category: "Numerical", question: "The ratio of two numbers is 3:5. If their sum is 64, find the larger number.", type: "mcq", options: ["24", "40", "36", "42"], answer: "40", solution: ["Step 1: Parts are 3x and 5x", "Step 2: 8x = 64, x = 8", "Step 3: Larger = 5x = 40", "Answer: 40"] },
  { id: 12, category: "Numerical", question: "A car covers a distance at 60 km/hr and returns at 40 km/hr. What is the average speed?", type: "mcq", options: ["48 km/hr", "50 km/hr", "52 km/hr", "45 km/hr"], answer: "48 km/hr", solution: ["Step 1: For equal distances, Avg = 2ab/(a+b)", "Step 2: = 2×60×40/(60+40) = 48 km/hr", "Answer: 48 km/hr"] },
  { id: 13, category: "Numerical", question: "What is the compound interest on Rs. 1000 at 10% for 2 years?", type: "mcq", options: ["Rs. 200", "Rs. 210", "Rs. 220", "Rs. 121"], answer: "Rs. 210", solution: ["Step 1: A = 1000(1.1)² = 1210", "Step 2: CI = 1210 - 1000 = Rs. 210", "Answer: Rs. 210"] },
  { id: 14, category: "Numerical", question: "If 40% of a number is 120, what is 60% of that number?", type: "mcq", options: ["160", "180", "200", "150"], answer: "180", solution: ["Step 1: 40% of x = 120, x = 300", "Step 2: 60% of 300 = 180", "Answer: 180"] },
  { id: 15, category: "Numerical", question: "What is the probability of getting a sum of 9 when two dice are rolled?", type: "mcq", options: ["1/9", "1/6", "1/12", "1/8"], answer: "1/9", solution: ["Step 1: Total = 36", "Step 2: Pairs summing to 9: 4", "Step 3: P = 4/36 = 1/9", "Answer: 1/9"] },
  { id: 16, category: "Numerical", question: "Two trains approach each other at 40 km/hr and 60 km/hr. They are 200 km apart. When will they meet?", type: "mcq", options: ["1 hour", "2 hours", "3 hours", "4 hours"], answer: "2 hours", solution: ["Step 1: Relative speed = 100 km/hr", "Step 2: Time = 200 ÷ 100 = 2 hours", "Answer: 2 hours"] },
  { id: 17, category: "Numerical", question: "An item is sold at Rs. 450 with 10% loss. What was the cost price?", type: "mcq", options: ["Rs. 400", "Rs. 500", "Rs. 495", "Rs. 480"], answer: "Rs. 500", solution: ["Step 1: SP = 90% of CP", "Step 2: 450 = 0.90 × CP", "Step 3: CP = 500", "Answer: Rs. 500"] },
  { id: 18, category: "Numerical", question: "The average weight of 8 persons is 65 kg. If a new person joins and average becomes 66 kg, what is the new person's weight?", type: "mcq", options: ["70 kg", "72 kg", "74 kg", "76 kg"], answer: "74 kg", solution: ["Step 1: Old total = 520 kg", "Step 2: New total = 594 kg", "Step 3: New person = 594 - 520 = 74 kg", "Answer: 74 kg"] },
  { id: 19, category: "Numerical", question: "A sum of money becomes Rs. 1800 in 2 years at 10% simple interest. Find the principal.", type: "mcq", options: ["Rs. 1500", "Rs. 1400", "Rs. 1600", "Rs. 1440"], answer: "Rs. 1500", solution: ["Step 1: Amount = P + SI", "Step 2: 1800 = P + 0.20P = 1.20P", "Step 3: P = 1500", "Answer: Rs. 1500"] },
  { id: 20, category: "Numerical", question: "10 workers can build a wall in 15 days. How many workers needed for 6 days?", type: "mcq", options: ["20", "25", "30", "35"], answer: "25", solution: ["Step 1: Work = 150 worker-days", "Step 2: Workers = 150 ÷ 6 = 25", "Answer: 25"] },
  
  // REASONING (Questions 21-40)
  { id: 21, category: "Reasoning", question: "Find the next number: 2, 5, 10, 17, 26, ?", type: "mcq", options: ["35", "37", "39", "41"], answer: "37", solution: ["Step 1: Differences: 3, 5, 7, 9 (odd numbers)", "Step 2: Next diff = 11", "Step 3: 26 + 11 = 37", "Answer: 37"] },
  { id: 22, category: "Reasoning", question: "Find the next letter: B, E, H, K, ?", type: "mcq", options: ["M", "N", "O", "L"], answer: "N", solution: ["Step 1: Positions: 2, 5, 8, 11", "Step 2: Pattern: +3", "Step 3: Next = 14 = N", "Answer: N"] },
  { id: 23, category: "Reasoning", question: "If HELLO is coded as IFMMP, how is WORLD coded?", type: "mcq", options: ["XPSME", "XPSMF", "XQSMF", "XQSME"], answer: "XPSME", solution: ["Step 1: Each letter +1", "Step 2: W→X, O→P, R→S, L→M, D→E", "Answer: XPSME"] },
  { id: 24, category: "Reasoning", question: "If 'cloud' is called 'white', 'white' is called 'rain', 'rain' is called 'green', what do we drink when thirsty?", type: "mcq", options: ["cloud", "white", "rain", "green"], answer: "green", solution: ["Step 1: We drink water", "Step 2: Water from rain, rain is called 'green'", "Answer: green"] },
  { id: 25, category: "Reasoning", question: "Rahul walks 5 km South, turns right and walks 3 km, then turns right and walks 5 km. How far from start?", type: "mcq", options: ["3 km", "5 km", "8 km", "13 km"], answer: "3 km", solution: ["Step 1: South 5km, East 3km, North 5km", "Step 2: Net: 3 km East", "Answer: 3 km"] },
  { id: 26, category: "Reasoning", question: "A man is facing East. He turns 90° left, then 180° right. Which direction now?", type: "mcq", options: ["North", "South", "East", "West"], answer: "South", solution: ["Step 1: East → Left (North)", "Step 2: North + 180° right = South", "Answer: South"] },
  { id: 27, category: "Reasoning", question: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?", type: "mcq", options: ["Mother", "Sister", "Aunt", "Grandmother"], answer: "Mother", solution: ["Step 1: Only daughter of my mother = woman herself", "Step 2: She is his mother", "Answer: Mother"] },
  { id: 28, category: "Reasoning", question: "A is B's brother. C is B's sister. D is A's father. How is C related to D?", type: "mcq", options: ["Son", "Daughter", "Sister", "Mother"], answer: "Daughter", solution: ["Step 1: A, B, C are siblings", "Step 2: D is their father", "Answer: Daughter"] },
  { id: 29, category: "Reasoning", question: "Five people A, B, C, D, E sit in a row. A is at one end. B is next to A. E is between B and C. Who is at the other end?", type: "mcq", options: ["C", "D", "E", "B"], answer: "D", solution: ["Step 1: A B E C _", "Step 2: D at other end", "Answer: D"] },
  { id: 30, category: "Reasoning", question: "Among 5 friends, A is taller than B but shorter than C. D is taller than C. E is shorter than B. Who is tallest?", type: "mcq", options: ["A", "C", "D", "B"], answer: "D", solution: ["Step 1: D > C > A > B > E", "Answer: D"] },
  { id: 31, category: "Reasoning", question: "If Monday is the first day of the week, what day will it be after 100 days?", type: "mcq", options: ["Wednesday", "Thursday", "Friday", "Saturday"], answer: "Wednesday", solution: ["Step 1: 100 ÷ 7 = 14 weeks + 2 days", "Step 2: Monday + 2 = Wednesday", "Answer: Wednesday"] },
  { id: 32, category: "Reasoning", question: "All cats are animals. All animals need food. Conclusion: All cats need food.", type: "mcq", options: ["True", "False", "Cannot determine", "Partially true"], answer: "True", solution: ["Step 1: Cats ⊂ Animals ⊂ Need food", "Answer: True"] },
  { id: 33, category: "Reasoning", question: "Find the odd one out: 8, 27, 64, 100, 125", type: "mcq", options: ["8", "27", "100", "125"], answer: "100", solution: ["Step 1: 8=2³, 27=3³, 64=4³, 125=5³", "Step 2: 100=10² is a square, not cube", "Answer: 100"] },
  { id: 34, category: "Reasoning", question: "In a row of students, A is 10th from left, B is 15th from right. If they interchange, A becomes 20th from left. How many students?", type: "mcq", options: ["30", "34", "35", "36"], answer: "34", solution: ["Step 1: B was at position 20", "Step 2: Total = 20 + 15 - 1 = 34", "Answer: 34"] },
  { id: 35, category: "Reasoning", question: "Find the wrong number: 1, 2, 6, 24, 96, 720", type: "mcq", options: ["6", "24", "96", "720"], answer: "96", solution: ["Step 1: Pattern: ×2, ×3, ×4, ×5", "Step 2: 24×5=120, not 96", "Answer: 96"] },
  { id: 36, category: "Reasoning", question: "Arrange: 1. Travel 2. Booking 3. Planning 4. Destination 5. Enjoyment", type: "mcq", options: ["3-4-2-1-5", "4-3-2-1-5", "3-2-4-1-5", "4-2-3-1-5"], answer: "3-4-2-1-5", solution: ["Step 1: Plan → Destination → Book → Travel → Enjoy", "Answer: 3-4-2-1-5"] },
  { id: 37, category: "Reasoning", question: "A clock shows 3:15. What is the angle between hour and minute hands?", type: "mcq", options: ["0°", "7.5°", "15°", "30°"], answer: "7.5°", solution: ["Step 1: Minute hand at 90°", "Step 2: Hour hand at 97.5°", "Step 3: Angle = 7.5°", "Answer: 7.5°"] },
  { id: 38, category: "Reasoning", question: "Some doctors are teachers. All teachers are honest. Which conclusion follows?", type: "mcq", options: ["All doctors are honest", "Some doctors are honest", "No doctor is honest", "All honest are doctors"], answer: "Some doctors are honest", solution: ["Step 1: Some doctors → teachers → honest", "Answer: Some doctors are honest"] },
  { id: 39, category: "Reasoning", question: "P, Q, R, S sit around a table. P is opposite R. Q is right of P. Who is left of R?", type: "mcq", options: ["P", "Q", "S", "Cannot determine"], answer: "S", solution: ["Step 1: P-Q-R-S clockwise", "Step 2: Left of R (anticlockwise) is S", "Answer: S"] },
  { id: 40, category: "Reasoning", question: "Find the next number: 1, 4, 9, 16, 25, ?", type: "mcq", options: ["30", "35", "36", "49"], answer: "36", solution: ["Step 1: Squares: 1², 2², 3², 4², 5²", "Step 2: Next = 6² = 36", "Answer: 36"] },
  
  // VERBAL (Questions 41-65)
  { id: 41, category: "Verbal", question: "Choose correct form: 'The committee ___ divided on this issue.'", type: "mcq", options: ["is", "are", "were", "have been"], answer: "is", solution: ["Step 1: Committee is collective noun (singular)", "Answer: is"] },
  { id: 42, category: "Verbal", question: "Choose the correct article: 'She is ___ M.A. in English.'", type: "mcq", options: ["a", "an", "the", "no article"], answer: "an", solution: ["Step 1: M.A. sounds like 'em ay'", "Step 2: Starts with vowel sound", "Answer: an"] },
  { id: 43, category: "Verbal", question: "Choose correct preposition: 'He agreed ___ my proposal.'", type: "mcq", options: ["to", "with", "on", "for"], answer: "to", solution: ["Step 1: Agree to + proposal/plan", "Answer: to"] },
  { id: 44, category: "Verbal", question: "Choose the correct sentence:", type: "mcq", options: ["He don't know nothing.", "He doesn't know anything.", "He don't know anything.", "He doesn't know nothing."], answer: "He doesn't know anything.", solution: ["Step 1: He + doesn't (singular)", "Step 2: No double negative", "Answer: He doesn't know anything."] },
  { id: 45, category: "Verbal", question: "Synonym of 'Abundant':", type: "mcq", options: ["Scarce", "Plentiful", "Limited", "Rare"], answer: "Plentiful", solution: ["Step 1: Abundant = plentiful, in large quantities", "Answer: Plentiful"] },
  { id: 46, category: "Verbal", question: "Antonym of 'Benevolent':", type: "mcq", options: ["Kind", "Generous", "Malevolent", "Charitable"], answer: "Malevolent", solution: ["Step 1: Benevolent = kind, good", "Step 2: Malevolent = evil, opposite", "Answer: Malevolent"] },
  { id: 47, category: "Verbal", question: "Meaning of 'To beat around the bush':", type: "mcq", options: ["To search thoroughly", "To avoid the main topic", "To hit bushes", "To work hard"], answer: "To avoid the main topic", solution: ["Step 1: Idiom meaning = avoid main point", "Answer: To avoid the main topic"] },
  { id: 48, category: "Verbal", question: "Choose the correctly spelled word:", type: "mcq", options: ["Occurence", "Occurrence", "Occurrance", "Ocurrence"], answer: "Occurrence", solution: ["Step 1: Double 'c' and double 'r'", "Answer: Occurrence"] },
  { id: 49, category: "Verbal", question: "One word for 'A person who loves books':", type: "mcq", options: ["Bibliophile", "Philatelist", "Numismatist", "Lexicographer"], answer: "Bibliophile", solution: ["Step 1: Biblio = book, phile = lover", "Answer: Bibliophile"] },
  { id: 50, category: "Verbal", question: "The movie was so ___ that everyone left early.", type: "mcq", options: ["engaging", "boring", "exciting", "thrilling"], answer: "boring", solution: ["Step 1: Left early = negative", "Answer: boring"] },
  { id: 51, category: "Verbal", question: "Despite ___ preparation, she passed the exam.", type: "mcq", options: ["good", "thorough", "inadequate", "excellent"], answer: "inadequate", solution: ["Step 1: Despite = contrast", "Answer: inadequate"] },
  { id: 52, category: "Verbal", question: "Read: 'Global warming is causing polar ice to melt at an alarming rate. This leads to rising sea levels, threatening coastal cities worldwide.' What is the main concern?", type: "mcq", options: ["Polar bears", "Rising sea levels threatening cities", "Scientific research", "Temperature changes"], answer: "Rising sea levels threatening cities", solution: ["Step 1: Main consequence = rising sea levels", "Answer: Rising sea levels threatening cities"] },
  { id: 53, category: "Verbal", question: "Choose correct form: 'I wish I ___ there yesterday.'", type: "mcq", options: ["was", "were", "had been", "am"], answer: "had been", solution: ["Step 1: Past wish uses past perfect", "Answer: had been"] },
  { id: 54, category: "Verbal", question: "Choose the correct passive voice: 'They are building a new bridge.'", type: "mcq", options: ["A new bridge is being built.", "A new bridge is built.", "A new bridge was being built.", "A new bridge has been built."], answer: "A new bridge is being built.", solution: ["Step 1: Present continuous → is being built", "Answer: A new bridge is being built."] },
  { id: 55, category: "Verbal", question: "Identify the figure of speech: 'Life is a journey.'", type: "mcq", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], answer: "Metaphor", solution: ["Step 1: Direct comparison (not 'like')", "Answer: Metaphor"] },
  { id: 56, category: "Verbal", question: "Choose correct sentence:", type: "mcq", options: ["Each of the students have a book.", "Each of the students has a book.", "Each of the student have a book.", "Each of student has a book."], answer: "Each of the students has a book.", solution: ["Step 1: Each = singular → has", "Answer: Each of the students has a book."] },
  { id: 57, category: "Verbal", question: "Antonym of 'Obsolete':", type: "mcq", options: ["Outdated", "Modern", "Ancient", "Rare"], answer: "Modern", solution: ["Step 1: Obsolete = outdated", "Answer: Modern"] },
  { id: 58, category: "Verbal", question: "Synonym of 'Eloquent':", type: "mcq", options: ["Inarticulate", "Fluent", "Silent", "Mumbling"], answer: "Fluent", solution: ["Step 1: Eloquent = fluent speaker", "Answer: Fluent"] },
  { id: 59, category: "Verbal", question: "Choose appropriate word: 'The doctor gave him a ___ for medicine.'", type: "mcq", options: ["subscription", "prescription", "description", "inscription"], answer: "prescription", solution: ["Step 1: Doctor gives prescription", "Answer: prescription"] },
  { id: 60, category: "Verbal", question: "Idiom meaning: 'To turn over a new leaf'", type: "mcq", options: ["Read a book", "Start fresh", "Change seasons", "Turn pages"], answer: "Start fresh", solution: ["Step 1: Means to change behavior, start fresh", "Answer: Start fresh"] },
  { id: 61, category: "Verbal", question: "Choose correct form: 'Neither Tom nor his friends ___ responsible.'", type: "mcq", options: ["is", "are", "was", "been"], answer: "are", solution: ["Step 1: Nearest subject = friends (plural)", "Answer: are"] },
  { id: 62, category: "Verbal", question: "Find the error: 'Each of the boys have completed their work.'", type: "mcq", options: ["Each", "of the boys", "have", "their work"], answer: "have", solution: ["Step 1: Each = singular → has", "Answer: have"] },
  { id: 63, category: "Verbal", question: "Choose correct tense: 'By this time tomorrow, I ___ my exam.'", type: "mcq", options: ["will finish", "will have finished", "finish", "finished"], answer: "will have finished", solution: ["Step 1: By tomorrow = future perfect", "Answer: will have finished"] },
  { id: 64, category: "Verbal", question: "The scientist's theory was ___ by new evidence.", type: "mcq", options: ["supported", "contradicted", "ignored", "both A and B possible"], answer: "both A and B possible", solution: ["Step 1: Context not specified", "Answer: both A and B possible"] },
  { id: 65, category: "Verbal", question: "Based on 'Global warming' passage, what does 'alarming rate' suggest?", type: "mcq", options: ["Slow and steady", "Fast and concerning", "Normal pace", "Unpredictable"], answer: "Fast and concerning", solution: ["Step 1: Alarming = concerning", "Answer: Fast and concerning"] }
];
