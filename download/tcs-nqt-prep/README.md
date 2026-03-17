# TCS NQT Prep - Full Guide

A comprehensive single-page web application to help students prepare for the TCS National Qualifier Test (NQT).

## Features

### 1. Study Material Section
- **Numerical Ability**: Percentages, Ratio & Proportion, Averages, Profit & Loss, Simple/Compound Interest, Time-Speed-Distance, Time & Work, Permutations & Combinations, Probability
- **Reasoning Ability**: Number/Letter Series, Coding-Decoding, Directions, Blood Relations, Seating Arrangement, Puzzles, Syllogisms
- **Verbal Ability**: Reading Comprehension Tips, Grammar (Tenses, Subject-Verb Agreement, Articles, Prepositions), Sentence Completion, Error Spotting
- **Coding in C++**: Input/Output, Data Types, If-Else, Loops, Arrays, Strings, Functions

All topics include:
- Simple, beginner-friendly explanations (toddler-level language)
- Worked examples with step-by-step solutions

### 2. Practice by Topic Section
- Select category and topic to practice
- Questions with multiple choice or text input
- Hint button for guidance
- Step-by-step solutions with simple explanations
- Coding questions with fully annotated C++ code

### 3. Full Mock Test Section
- 65 questions in 75 minutes (TCS NQT pattern)
- Real-time countdown timer
- Question navigation grid
- Mark questions for review
- Auto-submit when time runs out
- Detailed results with:
  - Overall score and percentage
  - Topic-wise performance
  - Review all answers with solutions

## How to Run

### Method 1: Direct Browser Open
1. Download all three files to the same folder:
   - `index.html`
   - `style.css`
   - `script.js`
2. Double-click on `index.html` to open it in your web browser
3. The app will work offline - no internet required!

### Method 2: Using a Local Server (Optional)
If you have Python installed:
```bash
# Python 3
cd /path/to/tcs-nqt-prep
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

Or with Node.js:
```bash
npx serve /path/to/tcs-nqt-prep
```

## File Structure
```
tcs-nqt-prep/
├── index.html   # Main HTML structure
├── style.css    # All styles and responsive design
├── script.js    # App logic and question data
└── README.md    # This file
```

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (fully responsive)

## Adding More Questions

The questions are stored in the `script.js` file in JavaScript objects. To add more questions:

1. Open `script.js` in a text editor
2. Find the `practiceQuestions` object for practice questions
3. Find the `mockTestQuestions` array for mock test questions
4. Add new question objects following the existing format:

```javascript
{
    id: unique_number,
    question: "Your question text here?",
    type: "mcq", // or "text" for text input
    options: ["Option A", "Option B", "Option C", "Option D"], // for MCQ only
    answer: "Correct answer",
    hint: "Helpful hint",
    solution: [
        "Step 1: First step",
        "Step 2: Second step",
        "Answer: Final answer"
    ]
}
```

## Tips for Students

1. **Start with Study Material**: Read through each topic to understand the basics
2. **Practice Regularly**: Use the Practice section to master each topic
3. **Take Mock Tests**: Simulate real exam conditions
4. **Review Solutions**: Even correct answers - you might learn a faster method!

## Credits
Built with vanilla HTML, CSS, and JavaScript - no frameworks required.
Made for students preparing for TCS NQT.
