"use strict";

// 1) Create a student object with the following
//  properties: name, gender, mathMidTermGrade,
// historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.
var student = {
  name: 'John Doe',
  gender: 'Male',
  allGrades: {
    mathMidTermGrade: 90,
    historyMidTermGrade: 80,
    mathFinalTermGrade: 95,
    historyFinalTermGrade: 85
  }
};

student.getAverageGrade = function () {
  var mathGrade = this.allGrades.mathMidTermGrade + this.allGrades.mathFinalTermGrade;
  var historyGrade = this.allGrades.historyMidTermGrade + this.allGrades.historyFinalTermGrade;
  return (mathGrade + historyGrade) / 2;
};

console.log(student.getAverageGrade()); // 87.5
// 3) Additionally, create a list of grades for multiple courses and include a method that calculates the average grade across all courses. You can utilize arrays and arrays of grades for this purpose. Also, implement a method that provides the grade for a specific subject based on the provided information (consider using arrays and indexing).