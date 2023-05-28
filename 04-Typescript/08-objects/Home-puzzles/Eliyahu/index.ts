// interface Stusents {
//     name: string,
//     gender: string,
//     mathMidTermGrade: number,
//     historyMidTermGrade: number,
//     mathFinalTermGrade: number,
//     historyFinalTermGrade: number
//     avgGrade: Function
// }

// const std1: Stusents = {
//     name: 'eli',
//     gender: 'mail',
//     mathMidTermGrade: 78,
//     historyMidTermGrade: 90,
//     mathFinalTermGrade: 45,
//     historyFinalTermGrade: 87,
//     avgGrade: function () {
//         return (this.mathFinalTermGrade + this.mathMidTermGrade + this.historyFinalTermGrade + this.historyMidTermGrade) / 4
//     }
// }

// const std2: Stusents = {
//     name: 'may',
//     gender: 'female',
//     mathMidTermGrade: 84,
//     historyMidTermGrade: 95,
//     mathFinalTermGrade: 65,
//     historyFinalTermGrade: 81,
//     avgGrade: function () {
//         return (this.mathFinalTermGrade + this.mathMidTermGrade + this.historyFinalTermGrade + this.historyMidTermGrade) / 4
//     }
// }


// console.log(`${std1.name}, your average is ${std1.avgGrade()}`)
// console.log(`${std2.name}, your average is ${std2.avgGrade()}`)



interface Grade {
    course: string,
    grade: number
}

const g1: Grade = {
    course: 'math',
    grade: 90
}
const g2: Grade = {
    course: 'english',
    grade: 95
}
const g3: Grade = {
    course: 'math',
    grade: 68
}
const g4: Grade = {
    course: 'english',
    grade: 89
}

const g5: Grade = {
    course: 'english',
    grade: 70
}

const grades = [g1, g2, g3, g4, g5]
function allAvg(unit: Grade[]): string | undefined {
    try {
        let sum = 0
        for (let i = 0; i < unit.length; i++) {
            sum = sum + unit[i].grade
        }
        return `The average of all grades is ${sum / unit.length}`
    } catch (error) {
        console.error(error)
        return
    }
}


const spcCourse = prompt('For which course you want get the average?')

function courseAvg(course: string|null, unit: Grade[]): string | undefined {
    try {
        if (!course) throw new Error ('Name of course is not input')
        let sum = 0
        let j = 0
        for (let i = 0; i < unit.length; i++) {
            if (course === unit[i].course) {
                sum = sum + unit[i].grade
                j++
            }
            
        }
        return `The average of ${spcCourse} grades is ${sum / j}`
    } catch (error) {
        console.error(error)
        return
    }
}
console.log(allAvg(grades))
console.log(courseAvg(spcCourse,grades))


