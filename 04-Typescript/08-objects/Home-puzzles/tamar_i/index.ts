//1

interface Student {
    name: string, 
    gender: string, 
    mathMidTermGrade: number, 
    historyMidTermGrade:number, 
    mathFinalTermGrade:number, 
    historyFinalTermGrade:number
    averageGrade:Function,
}

//2
const student1:Student = {
    name: "bob", 
    gender: "mail", 
    mathMidTermGrade: 85, 
    historyMidTermGrade:90, 
    mathFinalTermGrade:75, 
    historyFinalTermGrade:90,
    averageGrade:function():number{
        return (this.mathMidTermGradw+this.mathFinalTermGrade
            +this.mathFinalTermGrade+this.historyFinalTermGrade)/4
    }
}

console.log (`${student1.name} average grade is ${student1.averageGrade()}`)


