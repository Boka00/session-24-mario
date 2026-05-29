// Part 1 // — Grade Validator
//  1. 1 — isValidScore(score)
const isValidScore = (score) => {
  if (score === null || score === undefined || score === "") {
    return "Warning: no score provided. -> " + false;
  } else if (typeof score !== "number") {
    return false; // added this part from part 1.3 to handle string input
  }
  return score >= 0 && score <= 100;
};

console.log(isValidScore(85)); // true
console.log(isValidScore(101)); // false
console.log(isValidScore(-5)); // false
console.log(isValidScore(null)); // warning + false
console.log(isValidScore(0)); // true
console.log(isValidScore("85")); // true

// Part 1 //
// 1. 2 — getLetterGrade(score, passingScore = 50)
const getLetterGrade = (score, passingScore = 50) => {
  if (!isValidScore(score)) {
    return "Invalid";
  }
  if (score >= 90) {
    return "A";
  } else if (score >= 75) {
    return "B";
  } else if (score > 60) {
    return "C";
  } else if (score >= passingScore) {
    return "D";
  } else {
    return "F";
  }
};

console.log(getLetterGrade(92)); // "A"
console.log(getLetterGrade(58)); // "D"  (default passing = 50)
console.log(getLetterGrade(58, 60)); // "F"  (custom passing = 60)
console.log(getLetterGrade(110)); // "Invalid"

// Part 1 //
// 1. 3 — The == vs === trap
const formScore = "85";

// OPTION 1
// -----------------------------//
// const changedFormScore = Number(formScore);

// console.log(changedFormScore == 85); // true
// console.log(changedFormScore === 85); // false -> if using Number() -> true
// console.log(isValidScore(changedFormScore)); //true

console.log(formScore == 85); // ?
console.log(formScore === 85); // ?
console.log(isValidScore(formScore)); // does your function handle this correctly?

// Option 1: using Number() to convert string to number
// Option 2: modifying isValidScore to handle string input (e.g., by converting it inside the function)

// Part 2 //  — Score Calculators
// 2.1   calculateAverage
const calculateAverage = (s1, s2, s3, s4 = 0, count = 3) => {
  return (s1 + s2 + s3 + s4) / count;
};
console.log(calculateAverage(70, 80, 90)); // (70+80+90) / 3 = 80.00
console.log(calculateAverage(70, 80, 90, 100, 4)); // (70+80+90+100) / 4 = 85.00

// Part 2 //
// 2.2   calculateWeightedScore
const calculateWeightedScore = (exam, homework, bonus = 0) => {
  const examScore = 0.6 * exam; // 60% of the exam score
  const homeworkScore = 0.4 * homework; // 40% of the homework score
  const finalScore = examScore + homeworkScore + bonus; // total score with bonus
  return finalScore.toFixed(2); // round to 2 decimal places and return as string
};

console.log(calculateWeightedScore(80, 90)); // 0.6*80 + 0.4*90 + 0 = 84.00
console.log(calculateWeightedScore(80, 90, 5)); // 84 + 5 = 89.00
console.log(calculateWeightedScore(55, 70, 0)); // 0.6*55 + 0.4*70 = 61.00

// Part 2 //
// 2.3   isEligibleForRetake
const isEligibleForRetake = (score, attendance) => {
  return score < 60 && attendance >= 75;
};

console.log(isEligibleForRetake(45, 80)); // true   (failed, but attended enough)
console.log(isEligibleForRetake(45, 60)); // false  (failed, but too many absences)
console.log(isEligibleForRetake(75, 80)); // false  (passed — no retake needed)

// Part 3 // — Score Processor
// 3.1  processScore

const processScore = function (score, callback) {
  if (!isValidScore(score)) {
    console.error("Error: invalid score.");
    return null;
  }
  return callback(score);
};
console.log(processScore(78, getLetterGrade)); // "B"
console.log(processScore(78, (score) => (score >= 60 ? "Pass" : "Fail"))); // "Pass
console.log(processScore(78, (score) => Math.round(score * 1.1))); // 86
console.log(processScore(110, getLetterGrade)); // Error + null

// Part 3 //
// 3.2   applyToAll
function applyToAll(s1, s2, s3, callback) {
  console.log(`Score ${s1} : ${processScore(s1, callback)}`);
  console.log(`Score ${s2} : ${processScore(s2, callback)}`);
  console.log(`Score ${s3} : ${processScore(s3, callback)}`);
}

applyToAll(55, 72, 91, getLetterGrade);
// Score 55: D
// Score 72: C
// Score 91: A

applyToAll(55, 72, 91, (score) => (score >= 60 ? "Pass" : "Fail"));
// Score 55: Fail
// Score 72: Pass
// Score 91: Pass
// *************************************************

// Part 4 // — Score Tracker

function createTracker(subjectName, passingScore = 60) {
  let count = 0;
  let total = 0;
  let highest = 0;
  let lowest = 100;

  return function (score) {
    if (!isValidScore(score)) {
      console.log(`[${subjectName}] Error: invalid score, not recorded.`);
      return;
    }

    count++;
    total += score;

    if (score > highest) {
      highest = score;
    }

    if (score < lowest) {
      lowest = score;
    }

    const average = (total / count).toFixed(2);

    // Ternary operator for Pass / Fail label
    const result = score >= passingScore ? "Pass" : "Fail";

    console.log(
      `[${subjectName}] #${count} score: ${score} avg: ${average} high: ${highest} low: ${lowest} → ${result}`,
    );
  };
}

const mathTracker = createTracker("Mathematics"); // default passing score = 60 // you can also specify a custom passing score like createTracker("Mathematics", 70)
mathTracker(101); // invalid score, should not update stats
mathTracker(45);
mathTracker(92);

const englishTracker = createTracker("English", 55); // custom passing score = 55 // you can also use default passing score by createTracker("English")
englishTracker(60);
