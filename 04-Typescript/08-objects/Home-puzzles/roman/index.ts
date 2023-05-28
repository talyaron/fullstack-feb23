// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, 
// historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.


interface Student {
    name: string,
    gender: string,
    mathMidTermGrade: number,
    historyMidTermGrade: number,
    mathFinalTermGrade: number,
    historyFinalTermGrade: number,
    averageGrade: Function,
    mathAll: number[],
    averageAllGrade: Function
}
const average = "";

const student: Student = {
    name: "Moshe",
    gender: "male",
    mathMidTermGrade: 90,
    historyMidTermGrade: 95,
    mathFinalTermGrade: 88,
    historyFinalTermGrade: 75,
    averageGrade: averageAllGrades,
    mathAll: [1, 2, 3, 4, 5, 6],
    // averageAllGrade: averageGrade
}
const student2: Student = {
    name: 'Hanna',
    gender: "female",
    mathMidTermGrade: 90,
    historyMidTermGrade: 85,
    mathFinalTermGrade: 90,
    historyFinalTermGrade: 80,
    averageGrade: averageAllGrades,
    // averageAllGrade: averageGrade,
    mathAll: [1, 2, 3, 4, 5, 6],

}


//methods (funcrtions in objects)

function averageAllGrades(student: any) {
    try {


        sum = 0;
        var math = this.mathAll;
        var lenght = Object.keys(this).length
        for (const key in this) {
            console.log(lenght)

            if (Number(this[key])) {
               
                var sum = sum += this[key]
             
                //     var str = student[i];

            }


        }

        return `The ${this.name} average of all grades is: ${sum/lenght};`
    } catch (error) {
        console.error(error)
        return undefined;
    }
}
// function averageGrade(student: any) {
//     try {

//         var subject = "mathAll";
//         var allGrades = this.mathAll;

//         // console.log(allGrades)

//         sum = 0;
//         for (const key in allGrades) {
//             if (Number(allGrades[key])) {

//                 var sum = sum += allGrades[key]
//                 //     var str = student[i];

//             }


//         }

//         // return `The average of all math grade is: ${allGrades.lenght};`
//         return 
//     } catch (error) {
//         console.error(error)
//         return undefined;
//     }

// }
// console.log(student.mathAll);
console.log(student.averageGrade());
console.log(student2.averageGrade());

