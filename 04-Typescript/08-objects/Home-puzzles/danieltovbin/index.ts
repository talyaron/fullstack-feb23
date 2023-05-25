// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.
// task one
interface Student {
    name: string
    gender: string
    mathMidTermGrade: number
    historyMidTermGrade: number
    mathFinalTermGrade: number
    historyFinalTermGrade: number
    sum: Function 
}

const maria :Student= {
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

const ilya :Student= {
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

const nina :Student = {
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

const tony :Student = {
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
// 2) Implement a method within the object that calculates the average grade of the student by utilizing the available grades (make use of the 'this' keyword).


console.log(tony.sum())

// 3) Additionally, create a list of grades for multiple courses and include a method that calculates the average grade across all courses. You can utilize arrays and arrays of grades for this purpose. Also, implement a method that provides the grade for a specific subject based on the provided information (consider using arrays and indexing).