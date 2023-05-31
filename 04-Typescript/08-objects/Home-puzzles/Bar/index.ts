// 1) Create a student object with the following properties: name, gender,
// mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.


interface student {
    name: string,
    gender: string,
    mathMidTermGrade: number,
    historyMidTermGrade: number,
    mathFinalTermGrade: number,
    historyFinalTermGradef: number,
    averageGrade: Function
}

// 2) Implement a method within the object that calculates
// the average grade of the student by utilizing the available grades
// (make use of the 'this' keyword).

const barStudent: student = {
    name: "bar",
    gender: "women",
    mathMidTermGrade: 80,
    historyMidTermGrade: 85,
    mathFinalTermGrade: 95,
    historyFinalTermGradef: 70,
    averageGrade: function () {
        return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGradef) / 4;
    }
}

console.log(barStudent.averageGrade())


// 3) Additionally, create a list of grades for multiple courses and include a method
// that calculates the average grade across all courses.
// You can utilize arrays and arrays of grades for this purpose.
// Also, implement a method that provides the grade for a specific subject based on the provided information
// (consider using arrays and indexing).


