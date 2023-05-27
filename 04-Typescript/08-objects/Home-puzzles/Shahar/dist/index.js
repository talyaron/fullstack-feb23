// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.
// 2) Implement a method within the object that calculates the average grade of the student by utilizing the available grades (make use of the 'this' keyword).
// let x = Number (prompt ("What is your mid history grade"));
// const y = Number (prompt ("What is your mid math grade"));
// const z = Number (prompt ("What is your history final grade"));
// const f = Number (prompt ("What is your math finalgrade"));
var Shay = {
    userName: "Shay",
    gender: "Female",
    mathMidTermGrade: 98,
    historyMidTermGrade: 89,
    mathFinalTermGrade: 82,
    hisoryFinalTermGrade: 95,
    avgMath: function () {
        return (this.historyMidTermGrade + this.hisoryFinalTermGrade) / 2;
    },
    avgHistory: function () {
        return (this.mathMidTermGrade + this.mathFinalTermGrade) / 2;
    }
};
console.log(Shay.avgMath());
console.log(Shay.avgHistory());
// 3) Additionally, create a list of grades for multiple courses and include a method that calculates the average grade across all courses. You can utilize arrays and arrays of grades for this purpose. Also, implement a method that provides the grade for a specific subject based on the provided information (consider using arrays and indexing).
