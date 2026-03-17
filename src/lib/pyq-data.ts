// ==========================================
// PREVIOUS YEAR QUESTIONS (PYQ) - 2025
// ==========================================

export interface PYQQuestion {
  id: number;
  year: string;
  category: string;
  question: string;
  type: "mcq" | "text" | "code";
  options?: string[];
  answer: string;
  solution: string[];
  code?: string;
}

export const pyqQuestions: Record<string, PYQQuestion[]> = {
  "2025": [
    // NUMERICAL ABILITY - 2025
    {
      id: 1,
      year: "2025",
      category: "Numerical",
      question: "A shopkeeper offers a discount of 15% on the marked price. If the selling price is Rs. 680, what is the marked price?",
      type: "mcq",
      options: ["Rs. 750", "Rs. 800", "Rs. 850", "Rs. 900"],
      answer: "Rs. 800",
      solution: [
        "Step 1: Let Marked Price (MP) = x",
        "Step 2: After 15% discount, Selling Price = MP × (100 - 15)% = 0.85x",
        "Step 3: Given: 0.85x = 680",
        "Step 4: x = 680 ÷ 0.85 = 800",
        "Answer: Marked Price = Rs. 800"
      ]
    },
    {
      id: 2,
      year: "2025",
      category: "Numerical",
      question: "The average of 8 numbers is 20. If each number is multiplied by 3, what is the new average?",
      type: "mcq",
      options: ["40", "60", "80", "100"],
      answer: "60",
      solution: [
        "Step 1: Original average = 20",
        "Step 2: Each number is multiplied by 3",
        "Step 3: When all numbers are multiplied by a constant, average is also multiplied by that constant",
        "Step 4: New average = 20 × 3 = 60",
        "Answer: New average is 60"
      ]
    },
    {
      id: 3,
      year: "2025",
      category: "Numerical",
      question: "A train 150m long passes a pole in 15 seconds. What is the speed of the train in km/hr?",
      type: "mcq",
      options: ["36 km/hr", "45 km/hr", "54 km/hr", "60 km/hr"],
      answer: "36 km/hr",
      solution: [
        "Step 1: Distance = Length of train = 150 m",
        "Step 2: Time = 15 seconds",
        "Step 3: Speed = Distance ÷ Time = 150 ÷ 15 = 10 m/s",
        "Step 4: Convert to km/hr: 10 × (18/5) = 36 km/hr",
        "Answer: Speed is 36 km/hr"
      ]
    },
    {
      id: 4,
      year: "2025",
      category: "Numerical",
      question: "If A can complete a work in 10 days and B can complete the same work in 15 days, in how many days can they complete the work together?",
      type: "mcq",
      options: ["5 days", "6 days", "7 days", "8 days"],
      answer: "6 days",
      solution: [
        "Step 1: A's work per day = 1/10",
        "Step 2: B's work per day = 1/15",
        "Step 3: Together per day = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6",
        "Step 4: Days to complete = 1 ÷ (1/6) = 6 days",
        "Answer: They can complete the work in 6 days"
      ]
    },
    {
      id: 5,
      year: "2025",
      category: "Numerical",
      question: "The ratio of two numbers is 5:8. If their sum is 156, find the larger number.",
      type: "mcq",
      options: ["84", "96", "108", "120"],
      answer: "96",
      solution: [
        "Step 1: Let the numbers be 5x and 8x",
        "Step 2: Sum = 5x + 8x = 13x = 156",
        "Step 3: x = 156 ÷ 13 = 12",
        "Step 4: Larger number = 8x = 8 × 12 = 96",
        "Answer: The larger number is 96"
      ]
    },
    {
      id: 6,
      year: "2025",
      category: "Numerical",
      question: "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?",
      type: "mcq",
      options: ["10%", "12.5%", "15%", "20%"],
      answer: "12.5%",
      solution: [
        "Step 1: If Principal = P, Amount = 2P, so Interest = 2P - P = P",
        "Step 2: SI = (P × R × T) / 100",
        "Step 3: P = (P × R × 8) / 100",
        "Step 4: 1 = 8R/100, so R = 100/8 = 12.5%",
        "Answer: Rate of interest is 12.5% per annum"
      ]
    },
    {
      id: 7,
      year: "2025",
      category: "Numerical",
      question: "A bag contains 5 red balls, 3 green balls, and 2 blue balls. What is the probability of drawing a green ball?",
      type: "mcq",
      options: ["1/5", "3/10", "1/2", "2/5"],
      answer: "3/10",
      solution: [
        "Step 1: Total balls = 5 + 3 + 2 = 10",
        "Step 2: Green balls = 3",
        "Step 3: P(Green) = Green balls / Total balls = 3/10",
        "Answer: Probability is 3/10"
      ]
    },
    {
      id: 8,
      year: "2025",
      category: "Numerical",
      question: "Two cars start from the same point and travel in opposite directions. One car travels at 60 km/hr and the other at 80 km/hr. In how many hours will they be 280 km apart?",
      type: "mcq",
      options: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"],
      answer: "2 hours",
      solution: [
        "Step 1: When moving in opposite directions, relative speed = 60 + 80 = 140 km/hr",
        "Step 2: Distance to cover = 280 km",
        "Step 3: Time = Distance ÷ Relative Speed = 280 ÷ 140 = 2 hours",
        "Answer: They will be 280 km apart in 2 hours"
      ]
    },
    {
      id: 9,
      year: "2025",
      category: "Numerical",
      question: "The compound interest on Rs. 10000 at 10% per annum for 2 years is:",
      type: "mcq",
      options: ["Rs. 2000", "Rs. 2100", "Rs. 2200", "Rs. 2210"],
      answer: "Rs. 2100",
      solution: [
        "Step 1: Principal = Rs. 10000, Rate = 10%, Time = 2 years",
        "Step 2: Amount = P(1 + R/100)^T = 10000(1.1)^2",
        "Step 3: Amount = 10000 × 1.21 = 12100",
        "Step 4: Compound Interest = 12100 - 10000 = Rs. 2100",
        "Answer: Compound Interest is Rs. 2100"
      ]
    },
    {
      id: 10,
      year: "2025",
      category: "Numerical",
      question: "If the price of an article is increased by 25% and then decreased by 20%, what is the net percentage change?",
      type: "mcq",
      options: ["No change", "5% increase", "5% decrease", "10% decrease"],
      answer: "No change",
      solution: [
        "Step 1: Let original price = 100",
        "Step 2: After 25% increase = 100 × 1.25 = 125",
        "Step 3: After 20% decrease = 125 × 0.80 = 100",
        "Step 4: Net change = 100 - 100 = 0%",
        "Answer: There is no change in price"
      ]
    },
    {
      id: 11,
      year: "2025",
      category: "Numerical",
      question: "A and B invested Rs. 50000 and Rs. 75000 respectively in a business. If the profit is Rs. 25000, find B's share.",
      type: "mcq",
      options: ["Rs. 10000", "Rs. 12000", "Rs. 15000", "Rs. 17500"],
      answer: "Rs. 15000",
      solution: [
        "Step 1: Ratio of investments A:B = 50000:75000 = 2:3",
        "Step 2: Profit is divided in the ratio of investments",
        "Step 3: Total parts = 2 + 3 = 5",
        "Step 4: B's share = (3/5) × 25000 = 15000",
        "Answer: B's share is Rs. 15000"
      ]
    },
    {
      id: 12,
      year: "2025",
      category: "Numerical",
      question: "A pipe can fill a tank in 6 hours, and another pipe can empty it in 8 hours. If both pipes are opened, how long will it take to fill the tank?",
      type: "mcq",
      options: ["20 hours", "24 hours", "28 hours", "32 hours"],
      answer: "24 hours",
      solution: [
        "Step 1: First pipe fills 1/6 of tank per hour",
        "Step 2: Second pipe empties 1/8 of tank per hour",
        "Step 3: Net filling per hour = 1/6 - 1/8 = 4/24 - 3/24 = 1/24",
        "Step 4: Time to fill = 24 hours",
        "Answer: 24 hours"
      ]
    },
    
    // REASONING ABILITY - 2025
    {
      id: 13,
      year: "2025",
      category: "Reasoning",
      question: "Find the next number in the series: 2, 6, 12, 20, 30, ?",
      type: "mcq",
      options: ["40", "42", "44", "46"],
      answer: "42",
      solution: [
        "Step 1: Find differences: 6-2=4, 12-6=6, 20-12=8, 30-20=10",
        "Step 2: Differences are: 4, 6, 8, 10 (increasing by 2)",
        "Step 3: Next difference = 12",
        "Step 4: Next number = 30 + 12 = 42",
        "Answer: 42"
      ]
    },
    {
      id: 14,
      year: "2025",
      category: "Reasoning",
      question: "If 'APPLE' is coded as 'BQQMF', how is 'GRAPE' coded?",
      type: "mcq",
      options: ["HSBQF", "NBOGP", "NCPHQ", "HSBPF"],
      answer: "HSBQF",
      solution: [
        "Step 1: Compare APPLE and BQQMF",
        "Step 2: A→B (+1), P→Q (+1), P→Q (+1), L→M (+1), E→F (+1)",
        "Step 3: Rule: Each letter moves 1 position forward in alphabet",
        "Step 4: Apply to GRAPE: G→H, R→S, A→B, P→Q, E→F",
        "Answer: HSBQF"
      ]
    },
    {
      id: 15,
      year: "2025",
      category: "Reasoning",
      question: "A man is facing West. He turns 90° clockwise and then 180° anticlockwise. Which direction is he facing now?",
      type: "mcq",
      options: ["North", "South", "East", "West"],
      answer: "South",
      solution: [
        "Step 1: Start facing West",
        "Step 2: Turn 90° clockwise from West → Now facing North",
        "Step 3: Turn 180° anticlockwise from North → Now facing South",
        "Answer: He is facing South"
      ]
    },
    {
      id: 16,
      year: "2025",
      category: "Reasoning",
      question: "Pointing to a woman, a man said, 'Her mother is the only daughter of my mother.' How is the man related to the woman?",
      type: "mcq",
      options: ["Father", "Uncle", "Brother", "Grandfather"],
      answer: "Uncle",
      solution: [
        "Step 1: 'Only daughter of my mother' = the man's sister",
        "Step 2: Her mother is the man's sister",
        "Step 3: Therefore, the man is the woman's uncle",
        "Answer: Uncle"
      ]
    },
    {
      id: 17,
      year: "2025",
      category: "Reasoning",
      question: "Find the odd one out: 16, 25, 36, 48, 64",
      type: "mcq",
      options: ["16", "25", "48", "64"],
      answer: "48",
      solution: [
        "Step 1: Check each number",
        "Step 2: 16 = 4², 25 = 5², 36 = 6², 64 = 8²",
        "Step 3: All are perfect squares except 48",
        "Step 4: 48 is not a perfect square",
        "Answer: 48"
      ]
    },
    {
      id: 18,
      year: "2025",
      category: "Reasoning",
      question: "If Monday was 3 days before yesterday, what day is today?",
      type: "mcq",
      options: ["Thursday", "Friday", "Saturday", "Sunday"],
      answer: "Friday",
      solution: [
        "Step 1: Let yesterday = Y",
        "Step 2: 3 days before yesterday = Y - 3 = Monday",
        "Step 3: Y = Thursday",
        "Step 4: Today = Friday",
        "Answer: Friday"
      ]
    },
    {
      id: 19,
      year: "2025",
      category: "Reasoning",
      question: "All roses are flowers. All flowers are beautiful. Which conclusion follows?",
      type: "mcq",
      options: ["All beautiful are roses", "All roses are beautiful", "Some flowers are not roses", "No flower is beautiful"],
      answer: "All roses are beautiful",
      solution: [
        "Step 1: Draw Venn diagram",
        "Step 2: Roses ⊂ Flowers ⊂ Beautiful",
        "Step 3: Since all roses are flowers, and all flowers are beautiful...",
        "Step 4: All roses must be beautiful",
        "Answer: All roses are beautiful"
      ]
    },
    {
      id: 20,
      year: "2025",
      category: "Reasoning",
      question: "Find the missing letter: A, C, F, J, ?",
      type: "mcq",
      options: ["M", "N", "O", "P"],
      answer: "O",
      solution: [
        "Step 1: Find differences between letters",
        "Step 2: A→C = +2, C→F = +3, F→J = +4",
        "Step 3: Pattern: differences increase by 1",
        "Step 4: Next difference = +5, J + 5 = O",
        "Answer: O"
      ]
    },
    {
      id: 21,
      year: "2025",
      category: "Reasoning",
      question: "In a row of students, A is 10th from left and 15th from right. How many students are there in the row?",
      type: "mcq",
      options: ["24", "25", "26", "27"],
      answer: "24",
      solution: [
        "Step 1: A's position from left = 10",
        "Step 2: A's position from right = 15",
        "Step 3: Total = (Position from left) + (Position from right) - 1",
        "Step 4: Total = 10 + 15 - 1 = 24",
        "Answer: 24 students"
      ]
    },
    {
      id: 22,
      year: "2025",
      category: "Reasoning",
      question: "Arrange: 1. Travel 2. Booking 3. Planning 4. Destination 5. Enjoyment",
      type: "mcq",
      options: ["3-4-2-1-5", "4-3-2-1-5", "3-2-4-1-5", "4-2-3-1-5"],
      answer: "3-4-2-1-5",
      solution: [
        "Step 1: Logical sequence of a trip",
        "Step 2: First plan (3), then decide destination (4)",
        "Step 3: Then book (2), then travel (1), finally enjoy (5)",
        "Answer: 3-4-2-1-5"
      ]
    },
    
    // VERBAL ABILITY - 2025
    {
      id: 23,
      year: "2025",
      category: "Verbal",
      question: "Choose the correct form: 'Neither the students nor the teacher ___ aware of the schedule change.'",
      type: "mcq",
      options: ["was", "were", "are", "have been"],
      answer: "was",
      solution: [
        "Step 1: With 'neither...nor', the verb agrees with the nearer subject",
        "Step 2: The nearer subject is 'teacher' (singular)",
        "Step 3: Therefore, we need a singular verb",
        "Step 4: 'was' is the singular past tense verb",
        "Answer: was"
      ]
    },
    {
      id: 24,
      year: "2025",
      category: "Verbal",
      question: "Choose the correct article: 'She is ___ MBA graduate from Harvard.'",
      type: "mcq",
      options: ["a", "an", "the", "no article"],
      answer: "an",
      solution: [
        "Step 1: MBA sounds like 'em-bee-ay' (starts with vowel sound 'e')",
        "Step 2: Use 'an' before words starting with a vowel SOUND",
        "Step 3: The sound matters, not the spelling",
        "Answer: an"
      ]
    },
    {
      id: 25,
      year: "2025",
      category: "Verbal",
      question: "Choose the synonym of 'Meticulous':",
      type: "mcq",
      options: ["Careless", "Thorough", "Hasty", "Vague"],
      answer: "Thorough",
      solution: [
        "Step 1: 'Meticulous' means showing great attention to detail",
        "Step 2: 'Thorough' means complete with attention to detail",
        "Step 3: Other options mean the opposite",
        "Answer: Thorough"
      ]
    },
    {
      id: 26,
      year: "2025",
      category: "Verbal",
      question: "Choose the antonym of 'Obsolete':",
      type: "mcq",
      options: ["Outdated", "Modern", "Ancient", "Archaic"],
      answer: "Modern",
      solution: [
        "Step 1: 'Obsolete' means no longer in use, outdated",
        "Step 2: 'Modern' means current, up-to-date",
        "Step 3: Modern is the opposite of obsolete",
        "Answer: Modern"
      ]
    },
    {
      id: 27,
      year: "2025",
      category: "Verbal",
      question: "Choose the correct meaning of the idiom 'To burn the midnight oil':",
      type: "mcq",
      options: ["To waste oil", "To work late into the night", "To start a fire", "To waste time"],
      answer: "To work late into the night",
      solution: [
        "Step 1: 'Burning midnight oil' refers to working by lamplight late at night",
        "Step 2: It means to work or study until very late",
        "Answer: To work late into the night"
      ]
    },
    {
      id: 28,
      year: "2025",
      category: "Verbal",
      question: "Fill in the blank: 'The company decided to ___ its operations to new markets.'",
      type: "mcq",
      options: ["contract", "expand", "reduce", "limit"],
      answer: "expand",
      solution: [
        "Step 1: 'To new markets' indicates growth",
        "Step 2: 'Expand' means to grow or increase",
        "Step 3: Other options indicate reduction or limitation",
        "Answer: expand"
      ]
    },
    {
      id: 29,
      year: "2025",
      category: "Verbal",
      question: "Choose the correct preposition: 'He agreed ___ my proposal.'",
      type: "mcq",
      options: ["to", "with", "on", "for"],
      answer: "to",
      solution: [
        "Step 1: 'Agree to' is used for proposals, plans, suggestions",
        "Step 2: 'Agree with' is used for people",
        "Answer: to"
      ]
    },
    {
      id: 30,
      year: "2025",
      category: "Verbal",
      question: "Identify the error: 'The team are working on their project since morning.'",
      type: "mcq",
      options: ["The team", "are working", "on their project", "since morning"],
      answer: "are working",
      solution: [
        "Step 1: 'Since morning' indicates present perfect continuous tense",
        "Step 2: Should be 'has been working' for duration from past to present",
        "Step 3: Error is in 'are working' - should be 'has been working'",
        "Answer: are working"
      ]
    },
    {
      id: 31,
      year: "2025",
      category: "Verbal",
      question: "Choose the correctly spelled word:",
      type: "mcq",
      options: ["Occurence", "Occurrence", "Occurrance", "Ocurrence"],
      answer: "Occurrence",
      solution: [
        "Step 1: The correct spelling has double 'c' and double 'r'",
        "Step 2: Oc-cur-rence",
        "Answer: Occurrence"
      ]
    },
    {
      id: 32,
      year: "2025",
      category: "Verbal",
      question: "One word for 'A person who loves books':",
      type: "mcq",
      options: ["Bibliophile", "Philatelist", "Numismatist", "Lexicographer"],
      answer: "Bibliophile",
      solution: [
        "Step 1: 'Biblio' means book, 'phile' means lover",
        "Step 2: Bibliophile = book lover",
        "Answer: Bibliophile"
      ]
    },
    
    // CODING - 2025
    {
      id: 33,
      year: "2025",
      category: "Coding",
      question: "Write a C++ program to find the factorial of a number N.\n\nInput: An integer N (N ≤ 10)\nOutput: Factorial of N",
      type: "code",
      code: `#include <iostream>
using namespace std;

int main() {
    int n;  // variable to store input number
    cin >> n;  // read the number from user
    
    long long factorial = 1;  // use long long for large values
    
    // multiply from 1 to n
    for (int i = 1; i <= n; i++) {
        factorial = factorial * i;  // multiply current factorial by i
    }
    
    cout << factorial;  // print the result
    return 0;
}`,
      solution: [
        "Step 1: Read the number N from user",
        "Step 2: Initialize factorial = 1",
        "Step 3: Use a loop from 1 to N",
        "Step 4: In each iteration, multiply factorial by current number",
        "Step 5: After loop, factorial contains N!",
        "Step 6: Print the result"
      ]
    },
    {
      id: 34,
      year: "2025",
      category: "Coding",
      question: "Write a C++ program to check if a given number is prime.\n\nInput: An integer N\nOutput: 'Prime' or 'Not Prime'",
      type: "code",
      code: `#include <iostream>
using namespace std;

int main() {
    int n;  // number to check
    cin >> n;  // read input
    
    bool isPrime = true;  // assume prime initially
    
    if (n <= 1) {  // 0 and 1 are not prime
        isPrime = false;
    } else {
        // check divisibility from 2 to n-1
        for (int i = 2; i < n; i++) {
            if (n % i == 0) {  // if divisible
                isPrime = false;  // not prime
                break;  // exit loop
            }
        }
    }
    
    if (isPrime) {
        cout << "Prime";
    } else {
        cout << "Not Prime";
    }
    
    return 0;
}`,
      solution: [
        "Step 1: Read the number N",
        "Step 2: If N ≤ 1, it's not prime",
        "Step 3: Check if N is divisible by any number from 2 to N-1",
        "Step 4: If divisible, it's not prime",
        "Step 5: If no divisor found, it's prime",
        "Step 6: Print the result"
      ]
    },
    {
      id: 35,
      year: "2025",
      category: "Coding",
      question: "Write a C++ program to find the sum of digits of a number.\n\nInput: An integer N\nOutput: Sum of its digits",
      type: "code",
      code: `#include <iostream>
using namespace std;

int main() {
    int n;  // input number
    cin >> n;  // read number
    
    int sum = 0;  // initialize sum to 0
    
    while (n > 0) {  // continue until n becomes 0
        int digit = n % 10;  // get last digit
        sum = sum + digit;  // add digit to sum
        n = n / 10;  // remove last digit
    }
    
    cout << sum;  // print sum of digits
    return 0;
}`,
      solution: [
        "Step 1: Read the number N",
        "Step 2: Initialize sum = 0",
        "Step 3: While N > 0:",
        "Step 4:   Get last digit using N % 10",
        "Step 5:   Add digit to sum",
        "Step 6:   Remove last digit using N / 10",
        "Step 7: Print sum"
      ]
    },
    {
      id: 36,
      year: "2025",
      category: "Coding",
      question: "Write a C++ program to reverse a string.\n\nInput: A string\nOutput: Reversed string",
      type: "code",
      code: `#include <iostream>
#include <string>  // for string
using namespace std;

int main() {
    string s;  // input string
    cin >> s;  // read string
    
    int n = s.length();  // get length of string
    
    // swap characters from both ends
    for (int i = 0; i < n / 2; i++) {
        char temp = s[i];  // store current character
        s[i] = s[n - 1 - i];  // swap with character from end
        s[n - 1 - i] = temp;  // complete the swap
    }
    
    cout << s;  // print reversed string
    return 0;
}`,
      solution: [
        "Step 1: Read the string",
        "Step 2: Get the length of string",
        "Step 3: Loop from 0 to length/2",
        "Step 4: Swap character at position i with character at position (length-1-i)",
        "Step 5: Print the reversed string"
      ]
    },
    {
      id: 37,
      year: "2025",
      category: "Coding",
      question: "Write a C++ program to count even and odd numbers in an array.\n\nInput: First line contains N, second line contains N integers\nOutput: Count of even and odd numbers",
      type: "code",
      code: `#include <iostream>
using namespace std;

int main() {
    int n;  // size of array
    cin >> n;  // read size
    
    int arr[100];  // declare array
    int evenCount = 0;  // counter for even
    int oddCount = 0;  // counter for odd
    
    // read array elements
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    // count even and odd
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {  // if divisible by 2
            evenCount++;  // even number
        } else {
            oddCount++;  // odd number
        }
    }
    
    cout << "Even: " << evenCount << ", Odd: " << oddCount;
    return 0;
}`,
      solution: [
        "Step 1: Read the size N and array elements",
        "Step 2: Initialize evenCount = 0, oddCount = 0",
        "Step 3: Loop through each element",
        "Step 4: If element % 2 == 0, it's even, increment evenCount",
        "Step 5: Otherwise, it's odd, increment oddCount",
        "Step 6: Print both counts"
      ]
    },
    {
      id: 38,
      year: "2025",
      category: "Coding",
      question: "Write a C++ program to find the largest element in an array.\n\nInput: First line contains N, second line contains N integers\nOutput: The largest element",
      type: "code",
      code: `#include <iostream>
using namespace std;

int main() {
    int n;  // size of array
    cin >> n;  // read size
    
    int arr[100];  // declare array
    
    // read array elements
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int largest = arr[0];  // assume first is largest
    
    // compare with all others
    for (int i = 1; i < n; i++) {
        if (arr[i] > largest) {  // if current is larger
            largest = arr[i];  // update largest
        }
    }
    
    cout << largest;
    return 0;
}`,
      solution: [
        "Step 1: Read size N and array elements",
        "Step 2: Assume first element is largest",
        "Step 3: Loop through remaining elements",
        "Step 4: If current > largest, update largest",
        "Step 5: Print largest"
      ]
    },
    {
      id: 39,
      year: "2025",
      category: "Coding",
      question: "Write a C++ program to check if a number is palindrome.\n\nInput: An integer N\nOutput: 'Palindrome' or 'Not Palindrome'",
      type: "code",
      code: `#include <iostream>
using namespace std;

int main() {
    int n;  // input number
    cin >> n;
    
    int original = n;  // store original
    int reversed = 0;  // reversed number
    
    // reverse the number
    while (n > 0) {
        int digit = n % 10;  // get last digit
        reversed = reversed * 10 + digit;  // build reversed
        n = n / 10;  // remove last digit
    }
    
    if (original == reversed) {
        cout << "Palindrome";
    } else {
        cout << "Not Palindrome";
    }
    
    return 0;
}`,
      solution: [
        "Step 1: Read number N and store original",
        "Step 2: Reverse the number using modulo and division",
        "Step 3: Compare original with reversed",
        "Step 4: If equal, it's palindrome; otherwise not"
      ]
    },
    {
      id: 40,
      year: "2025",
      category: "Coding",
      question: "Write a C++ program to generate Fibonacci series up to N terms.\n\nInput: Number of terms N\nOutput: Fibonacci series",
      type: "code",
      code: `#include <iostream>
using namespace std;

int main() {
    int n;  // number of terms
    cin >> n;
    
    int first = 0;  // first term
    int second = 1;  // second term
    
    cout << first << " " << second << " ";
    
    for (int i = 2; i < n; i++) {
        int next = first + second;  // next term
        cout << next << " ";
        first = second;  // update first
        second = next;  // update second
    }
    
    return 0;
}`,
      solution: [
        "Step 1: Read number of terms N",
        "Step 2: Initialize first = 0, second = 1",
        "Step 3: Print first two terms",
        "Step 4: Loop N-2 times",
        "Step 5: Calculate next = first + second",
        "Step 6: Print next, update first and second"
      ]
    }
  ]
};
