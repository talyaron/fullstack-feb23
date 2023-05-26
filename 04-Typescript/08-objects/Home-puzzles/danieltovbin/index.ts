// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.
// task one
// interface Student {
//     name: string
//     gender: string
//     mathMidTermGrade: number
//     historyMidTermGrade: number
//     mathFinalTermGrade: number
//     historyFinalTermGrade: number
//     sum: Function 
// }

// const maria :Student= {
//     name: "Maria",
//     gender: "woman",
//     mathMidTermGrade: 90,
//     historyMidTermGrade: 80,
//     mathFinalTermGrade: 100,
//     historyFinalTermGrade: 85,
//     sum: function() {
//         return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
//     }
// }

// const ilya :Student= {
//     name: "Ilya",
//     gender: "man",
//     mathMidTermGrade: 78,
//     historyMidTermGrade: 80,
//     mathFinalTermGrade: 68,
//     historyFinalTermGrade: 90,
//     sum: function(){
//         return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
//     }
// }

// const nina :Student = {
//     name: "Nina",
//     gender: "woman",
//     mathMidTermGrade: 60,
//     historyMidTermGrade: 58,
//     mathFinalTermGrade: 70,
//     historyFinalTermGrade: 80,
//     sum: function(){
//         return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
//     }
// }

// const tony :Student = {
//     name: "Tony",
//     gender: "man",
//     mathMidTermGrade: 68,
//     historyMidTermGrade: 70,
//     mathFinalTermGrade: 90,
//     historyFinalTermGrade: 100,
//     sum: function() {
//         return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
//     }
// }
// 2) Implement a method within the object that calculates the average grade of the student by utilizing the available grades (make use of the 'this' keyword).

// console.log(tony.sum())

// 3) Additionally, create a list of grades for multiple courses and include a method that calculates the average grade across all courses. You can utilize arrays and arrays of grades for this purpose. Also, implement a method that provides the grade for a specific subject based on the provided information (consider using arrays and indexing).

interface Student {
    name: string
    gender: string
    mathGrades: Function 
    historyGrades: Function 
    physicsGrades: Function
    sportGrades: Function
    sum: Function 
}

const maria :Student= {
    name: "Maria",
    gender: "woman",
    mathGrades: function (array :number[] = [90, 60, 80, 60]) { 
        let averageGrade :number = 0;
        for(let i = 0; i < array.length; i++) {
            averageGrade += array[i]
        }
        return averageGrade / array.length;
        // average = 72.5
    },
    historyGrades: function (array :number[] =[80, 99, 100, 70]) {
        let averageGrade :number = 0;
        for(let i = 0; i < array.length; i++){
            averageGrade += array[i]
        }
        return averageGrade / array.length;
        // average = 87.25
    },
    physicsGrades: function (array :number[] = [100, 100, 90, 80]){
        let averageGrade :number = 0;
        for(let i = 0; i< array.length; i++){
            averageGrade += array[i]
        }
        return averageGrade / array.length;
        // average = 92.5
    },
    sportGrades: function(array :number[] = [85, 60, 70, 80]){
        const oneGrade = 85;
        let averageGrade :number = 0;
        for(let i = 0; i < array.length; i++){
            averageGrade += array[i]
        }
        return averageGrade / array.length;
        // average = 73.75
        // return array.indexOf(oneGrade);
    },
    sum: function() {
        return (this.mathGrades() + this.historyGrades() + this.physicsGrades() + this.sportGrades()) / 4;
        // average of all = 81.5
    }
}
console.log(maria.sum());

