// create an object for students

// 1) it should have the following properties(name, gender, mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, historyFinalTermGrade).

// task one
interface Pupils {
    name: string
    gender: string
    mathMidTermGrade: number
    historyMidTermGrade: number
    mathFinalTermGrade: number
    historyFinalTermGrade: number
    sum: Function 
}

const maria :Pupils= {
    name: "Maria",
    gender: "woman",
    mathMidTermGrade: 90,
    historyMidTermGrade: 80,
    mathFinalTermGrade: 100,
    historyFinalTermGrade: 85,
    sum: function() {
        return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
    }
}

const ilya :Pupils= {
    name: "Ilya",
    gender: "man",
    mathMidTermGrade: 78,
    historyMidTermGrade: 80,
    mathFinalTermGrade: 68,
    historyFinalTermGrade: 90,
    sum: function(){
        return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
    }
}

const nina :Pupils = {
    name: "Nina",
    gender: "woman",
    mathMidTermGrade: 60,
    historyMidTermGrade: 58,
    mathFinalTermGrade: 70,
    historyFinalTermGrade: 80,
    sum: function(){
        return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
    }
}

const tony :Pupils = {
    name: "Tony",
    gender: "man",
    mathMidTermGrade: 68,
    historyMidTermGrade: 70,
    mathFinalTermGrade: 90,
    historyFinalTermGrade: 100,
    sum: function() {
        return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
    }
}
// 2) create a method, that calculate the avarge of studnet's grades. (use "this")


console.log(tony.sum())

// 4) create a list of grades, in many courses, and create a method, which give the avrage grade. and also a method, which give a grade in spesific subject. (tip: use arrays and arrays of grades)
