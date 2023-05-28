//1

interface Student {
    name: string,
    gender: string,
    mathMidTermGrade: number,
    historyMidTermGrade: number,
    mathFinalTermGrade: number,
    historyFinalTermGrade: number
    averageGrade: Function,
}

//2
const studentA: Student = {
    name: "bob",
    gender: "mail",
    mathMidTermGrade: 85,
    historyMidTermGrade: 90,
    mathFinalTermGrade: 75,
    historyFinalTermGrade: 90,
    averageGrade: function (): number|undefined {
        try {
            debugger;
            console.log(this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade / 4);
            return ((this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4);
        } catch (error) {
            console.log(error)
            return undefined
        }

    }
}

console.log(`${studentA.name} average grade is ${studentA.averageGrade()}`)

//3

interface CourseGrade {
    courseName: string,
    courseGrade: number,
}

let listofgrade: CourseGrade[] = [
    {
        courseName: "phizics",
        courseGrade: 85,
    },
    {
        courseName: "math",
        courseGrade: 80,
    },
    {
        courseName: "englsh",
        courseGrade: 96,
    },
    {
        courseName: "sport",
        courseGrade: 70,
    },
]
