// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, 
//    mathFinalTermGrade, and historyFinalTermGrade.

// 2) Implement a method within the object that calculates the average grade of the student by utilizing the available grades 
// (make use of the 'this' keyword).

// 3) Additionally, create a list of grades for multiple courses and include a method that calculates the average grade across all courses.
//  You can utilize arrays and arrays of grades for this purpose. Also, implement a method that provides the grade for a specific subject based on the provided information
//  (consider using arrays and indexing)

interface Grades {
    name: string, 
    gender: string,
    mathMidTermGrade: number,
    historyMidTermGrade: number, 
    mathFinalTermGrade : number,
    historyFinalTermGrade: number,
    avarge: Function
}


const RanGrade: Grades = {
    name: "Ran Yamin", 
    gender: "male",
    mathMidTermGrade: 86,
    historyMidTermGrade: 92, 
    mathFinalTermGrade : 95,
    historyFinalTermGrade: 90,
    avarge: function () {
        return (this.historyFinalTermGrade + this.mathFinalTermGrade)/2
    }

}

console.log(RanGrade.avarge())