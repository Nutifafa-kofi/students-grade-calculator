// Here we will calculate for the total score of the given subject marks
// We will do this by using a for loop inside our function and calculate the average with the total
let students = [
  { name: "Ishmael", age: 23, scores: [90, 80, 70] },
  { name: "Ama", age: 22, scores: [75, 55, 60] },
  { name: "Kofi", age: 12, scores: [5, 5, 80] },
];

function calculateAverage(scores) {
  let totalScore = 0;
  for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
  }
  return totalScore / scores.length;
}

// // After we find the average, we will now use it to assign a grade letter to the student
// // So here the function calculateGrade(average) assign grade letter based on the average score of the student

function calculateGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// This function checks whether the student passed or fail
// And the pass mark starts from 60, if the students didn't meet this requirement then he/she failed
function passFail(average) {
  if (average >= 60) {
    return "Passed";
  } else {
    return "Failed";
  }
}

function finalMessage(name, average, grade, remark) {
  return `${name}'s average score is ${average}. Grade:${grade} Remark:${remark}`;
}

for (let i = 0; i < students.length; i++) {
  let student = students[i];

  let avg = calculateAverage(student.scores);
  let grade = calculateGrade(avg);
  let remark = passFail(avg);
  console.log(finalMessage(student.name, avg, grade, remark));
}
