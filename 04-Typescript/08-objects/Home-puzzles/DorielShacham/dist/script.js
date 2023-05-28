// 2) Implement a method within the object that calculates the average grade of the student by utilizing the available grades (make use of the 'this' keyword).
// const studentTwo = {
//     name: "Daniel",
//     gender: "Female",
//     mathMidTermGrade: 80,
//     historyMidTermGrade: 80,
//     mathFinalTermGrade: 100,
//     historyFinalTermGrade: 100,
//     avgMath: function(){
//         return (this.historyMidTermGrade + this.historyFinalTermGrade) / 2;
//     },
//     avgHistory: function(){
//         return (this.mathMidTermGrade + this.mathFinalTermGrade) / 2;
//     }
// }
// console.log(studentTwo.avgMath());
// console.log(studentTwo.avgHistory());
// 3) Additionally, create a list of grades for multiple courses and include a method that calculates the average grade across all courses. You can utilize arrays and arrays of grades for this purpose. Also, implement a method that provides the grade for a specific subject based on the provided information (consider using arrays and indexing).
var studentOne = {
    name: "Doriel",
    gender: "Male",
    mathMidTermGrade: [64, 55, 70],
    historyMidTermGrade: [100, 90, 95],
    mathFinalTermGrade: [100, 86, 100],
    historyFinalTermGrade: [60, 85, 98],
    avgMath: function () {
        var sum = this.mathMidTermGrade.reduce(function (total, grade) { return total + grade; }, 0);
        var average = sum / this.mathMidTermGrade.length;
        console.log("Average Math Grade:", average);
    },
    avgHistory: function () {
        var sum = this.historyMidTermGrade.reduce(function (total, grade) { return total + grade; }, 0);
        var average = sum / this.historyMidTermGrade.length;
        console.log("Average History Grade:", average);
    }
};
console.log(studentOne.avgMath());
console.log(studentOne.avgHistory());
