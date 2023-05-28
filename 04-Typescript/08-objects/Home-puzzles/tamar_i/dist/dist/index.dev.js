"use strict";

//1
//2
var studentA = {
  name: "bob",
  gender: "mail",
  mathMidTermGrade: 85,
  historyMidTermGrade: 90,
  mathFinalTermGrade: 75,
  historyFinalTermGrade: 90,
  averageGrade: function averageGrade() {
    try {
      return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
};
console.log(studentA.name + " average grade is " + studentA.averageGrade());