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
    grades:Array<Grade>
}

interface Grade{
    grade:number,
course:string
}

const maria :Student= {
    name: "Maria",
    gender: "woman",
    grades:[{course:"Math",grade: 96},{course:"History",grade:100}],
    mathGrades: function (array :number[] = [90, 60, 80, 60]) { 
        // part one
        let averageGrade :number = 0;
        for(let i = 0; i < array.length; i++) {
            averageGrade += array[i]
        }
        return averageGrade / array.length;
        // average = 72.5

        // part two
        let sum = array;
        sum.reduce((acc, currentValue) => acc + currentValue);
        return sum;
    },
    historyGrades: function (array :number[] =[80, 99, 100, 70]) {
        // part one
        let averageGrade :number = 0;
        for(let i = 0; i < array.length; i++){
            averageGrade += array[i]
        }
        return averageGrade / array.length;
        // average = 87.25

        // part two
        let sum = array;
        sum.reduce((acc, currentValue) => acc + currentValue);
        return sum;
    },
    physicsGrades: function (array :number[] = [100, 100, 90, 80]){
        let averageGrade :number = 0;
        for(let i = 0; i< array.length; i++){
            averageGrade += array[i]
        }
        return averageGrade / array.length;
        // average = 92.5

        // part two
        let sum = array;
        sum.reduce((acc, currentValue) => acc + currentValue);
        return sum;
    },
    sportGrades: function(array :number[] = [85, 60, 70, 80]){
        // part one
        let averageGrade :number = 0;
        for(let i = 0; i < array.length; i++){
            averageGrade += array[i]
        }
        return averageGrade / array.length;
        // average = 73.75

        // part two
            let sum = array;
            sum.reduce((acc, currentValue) => acc + currentValue);
            return sum;

    },
    sum: function(array :number[]) {
        return (this.mathGrades() + this.historyGrades() + this.physicsGrades() + this.sportGrades()) / 4;
        // average of all = 81.5
    }
}
console.log(maria.sum());


// interface Courses {
//     nameSubject : string;
//     grades: number[];
//     averageGrade:  Function
// }

// const subject :Courses[] = [
//     {
//         nameSubject: "physics",
//         grades: [70, 80, 85, 90],
//         averageGrade: function() {
//             let sum = 0;
//             for(let i = 0; i < this.grades.length; i++) {
//                 sum += this.grades[i]
//             }
//             return sum / this.grades.length
//         }
//     },
//     {
//         nameSubject: "math",
//         grades: [100, 80, 95, 80],
//         averageGrade: function() {
//             let sum = 0;
//             for(let i = 0; i < this.grades.length; i++) {
//                 sum += this.grades[i]
//             }
//             return sum / this.grades.length
//         }
//     },
//     {
//         nameSubject: "chemistry",
//         grades: [75, 80, 95, 100],
//         averageGrade: function() {
//             let sum = 0;
//             for(let i = 0; i < this.grades.length; i++) {
//                 sum += this.grades[i]
//             }
//             return sum / this.grades.length
//         }
//     },
//     {
//         nameSubject: "sport",
//         grades: [100, 90, 95, 100],
//         averageGrade: function() {
//             let sum = 0;
//             for(let i = 0; i < this.grades.length; i++) {
//                 sum += this.grades[i]
//             }
//             return sum / this.grades.length
//         }
//     },

// ]



// console.log(subject.averageGradeAll())

// interface Ob {
//     name: string
//     legs: number
//     color: string
//     fun: Function
    
// }
// const dog :Ob= {
//     name:"dog",
//     legs:4,
//     color:"white",
//     fun: function animal(){
//         const legProperty = Object.keys(this)[1];
//         return 'this ' + this.color + ' ' + this.name + ' has ' + this.legs + ' ' + legProperty + ' ';
//       }
// }



//   console.log(dog.fun())