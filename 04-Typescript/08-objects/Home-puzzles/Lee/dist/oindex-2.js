// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.
// 2) Implement a method within the object that calculates the average grade of the student by utilizing the available grades (make use of the 'this' keyword).
var studentB = {
    name: "Linor Monir",
    gender: "female",
    mathMidTermGrade: 95,
    historyMidTermGrade: 75,
    mathFinalTermGrade: 90,
    historyFinalTermGrade: 82,
    calculateAverage: function () {
        return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
    }
};
console.log(studentB.calculateAverage());
// const studentC = {
//   name: "Inbar Budniatzky",
//   gender: "female",
//   mathMidTermGrade: 100,
//   historyMidTermGrade: 99,
//   mathFinalTermGrade: 97,
//   historyFinalTermGrade: 95,
//   calculateAverage: gradesAverage,
// };
// const student = {
//   name: "Lee Dekel",
//   gender: "female",
//   mathMidTermGrade: 65,
//   historyMidTermGrade: 95,
//   mathFinalTermGrade: 70,
//   historyFinalTermGrade: 92,
//   calculateAverage: gradesAverage,
// };
// function gradesAverage(midMath, finalMath, midHistory, finalHistory) {
//   try {
//     return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
//   } catch (error) {
//     console.error(error);
//     return undefined;
//   }
// }
