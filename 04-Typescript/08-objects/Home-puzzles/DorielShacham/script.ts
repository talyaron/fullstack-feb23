// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.
interface Student {
    name: string,
    gender: string,
    mathMidTermGrade: number,
    historyMidTermGrade: number,
    mathFinalTermGrade: number,
    historyFinalTermGrade: number
    avgMath: Function,
    avgHistory: Function
}
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

const studentOne = {
    name: "Doriel",
    gender: "Male",
    mathMidTermGrade: [56, 55, 61],
    historyMidTermGrade: [100, 90, 95],
    mathFinalTermGrade: [65, 42, 0],
    historyFinalTermGrade: [60, 85, 98],
    avgMath: function():void | null {
        const sum = this.mathMidTermGrade.reduce((total, grade) => total + grade, 0);
        const averageMidMath = sum / this.mathMidTermGrade.length;
        const summ = this.mathFinalTermGrade.reduce((totalF, gradeF) => totalF + gradeF, 0);
        const averageFinMath = summ / this.mathFinalTermGrade.length;
        const avgAllMath = (averageMidMath + averageFinMath) / 2
        console.log("averageMidMath Math Grade:", averageMidMath);
        document.querySelector('.math').textContent = averageMidMath.toFixed(2);
        console.log("Avg mid + final " + avgAllMath)
        document.querySelector('.history').textContent = avgAllMath.toFixed(2);
    },
    avgHistory: function() {
        const sum = this.historyMidTermGrade.reduce((total, grade) => total + grade, 0);
        const averageMidHistory = sum / this.historyMidTermGrade.length;
        const summ = this.historyFinalTermGrade.reduce((totalF, gradeF) => totalF + gradeF, 0);
        const averageFinHistory = summ / this.historyFinalTermGrade.length;
        const avgAllHistory = (averageMidHistory + averageFinHistory) / 2
        console.log("Average History Grade:", averageMidHistory);
        document.querySelector('.history').textContent = averageMidHistory.toFixed(2);
        console.log("Avg mid + final " + avgAllHistory)
        document.querySelector('.history').textContent = avgAllHistory.toFixed(2);
    }
};
console.log(studentOne.avgMath())
console.log(studentOne.avgHistory())


const h: HTMLElement | null = document.querySelector("body > main > table > tbody > tr > td.history");
h?.addEventListener('click', e => {
    h.style.transition = '0.5s';
    h.style.border = '3px solid lime'
    h.style.backgroundColor = 'aliceblue'
})

const m: HTMLElement | null = document.querySelector("body > main > table > tbody > tr > td.math");
m?.addEventListener('click', e => {
    m.style.transition = '0.5s';
    m.style.border = '3px solid red'
    m.style.backgroundColor = 'aliceblue'
})