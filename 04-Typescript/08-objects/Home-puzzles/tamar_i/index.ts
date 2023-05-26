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
    averageGrade: function (): number | undefined {
        try {
            return ((this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4);
        } catch (error) {
            console.log(error)
            return undefined
        }

    }
}

console.log(`${studentA.name} average grade is ${studentA.averageGrade()}`)

//3

interface CourseGrades {
    courseName: string,
    firstgrade: number,
    secoundgrade: number,
    midgrade: number,
    finalgrade: number,
    courseAvargeGrade: Function,
}

interface StudentCourses {
    firstcours: CourseGrades,
    secoundcours: CourseGrades,
    averageAllGrades: Function,
}

const firstcours: CourseGrades = {
    courseName: "physics",
    firstgrade: 70,
    secoundgrade: 80,
    midgrade: 75,
    finalgrade: 96,
    courseAvargeGrade: function (): number | undefined {
        try {
            return (this.firstgrade + this.secoundgrade + this.midgrade + this.finalgrade / 4);
        } catch (error) {
            console.log(error)
            return undefined
        }
    }
}

const secoundcours:CourseGrades = {
    courseName: "english",
    firstgrade:90,
    secoundgrade: 62,
    midgrade:75,
    finalgrade: 82,
    courseAvargeGrade:  function (): number|undefined {
        try {
            return (this.firstgrade + this.secoundgrade + this.midgrade + this.finalgrade / 4);
        } catch (error) {
            console.log(error)
            return undefined
        }
    }
}

const StudentAllCourses: StudentCourses = {
    firstcours: firstcours,
    secoundcours: secoundcours,
    averageAllGrades: function (): number|undefined {
        try {
            return (this.first + this.secound / 2);
        } catch (error) {
            console.log(error)
            return undefined
        }
    } 
}


