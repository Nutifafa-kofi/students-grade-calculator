// Here we will calculate for the total score of the given subject marks
// We will do this by using a for loop inside our function and calculate the average with the total

let student = { name: "Ishmael", age: 23, scores: [90, 80, 70] };
let student2 = { name: "Ama", age: 22, scores: [75, 55, 60] };
let student3 = { name: "Kofi", age: 12, scores: [5, 5, 80] };
function calculateAverage(student) {
  let totalScore = 0;
  for (let i = 0; i < student.scores.length; i++) {
    totalScore += student.scores[i];
  }
  return totalScore / student.scores.length;
}
// console.log(calculateAverage(student));
// console.log(calculateAverage(student2));
// console.log(calculateAverage(student3));

let averageScore = calculateAverage(student3); //Variable to store the function that calculates the average

// After we find the average, we will now use it to assign a grade letter to the student
// So here the function calculateGrade(average) assign grade letter based on the average score of the student
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
let grade = calculateGrade(averageScore);

// console.log(calculateGrade(averageScore)); // Here we passed the value of average as an argument

// This function checks whether the student passed or fail
// And the pass mark starts from 60, if the students didn't meet this requirement then he/she failed
function passFail(average) {
  if (average >= 60) {
    return "Passed";
  } else {
    return "Fail";
  }
}

let remark = passFail(averageScore);

// console.log(passFail(averageScore));

// The function to display final message based on students performance
function finalMessage(name) {
  let result = `${name}'s average score is ${averageScore}. Grade: ${grade}.  Remark:${remark}`;
  return result;
}
console.log(finalMessage(student3.name));
