// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.

interface Student {
    userName: string;
    gender: string, 
    mathMidTermGrade: number,
    historyMidTermGrade: number,
    mathFinalTermGrade:number, 
    hisoryFinalTermGrade:number,
    avgMath: Function,
    avgHistory: Function,
}
// 2) Implement a method within the object that calculates the average grade of the student by utilizing the available grades (make use of the 'this' keyword).

// let x = Number (prompt ("What is your mid history grade"));
// const y = Number (prompt ("What is your mid math grade"));
// const z = Number (prompt ("What is your history final grade"));
// const f = Number (prompt ("What is your math finalgrade"));

const Shay = {
    userName: "Shay",
    gender: "Female",
    mathMidTermGrade: 100,
    historyMidTermGrade:75,
    mathFinalTermGrade:50,
    hisoryFinalTermGrade:25,
    avgMath: function(){
        try {
            return (this.historyMidTermGrade + this.hisoryFinalTermGrade) / 2;
        } catch (error) {
            console.error(Error)
            return undefined
        }
            },
            avgHistory: function(){
                try {
                    
                    return (this.mathMidTermGrade + this.mathFinalTermGrade) / 2;
                } catch (error) {
                    console.error(Error)
                return undefined
                }
            }
}

console.log(Shay.avgMath())
console.log(Shay.avgHistory())

// 3) Additionally, create a list of grades for multiple courses and include a method that calculates the average grade across all courses. You can utilize arrays and arrays of grades for this purpose. Also, implement a method that provides the grade for a specific subject based on the provided information (consider using arrays and indexing).




