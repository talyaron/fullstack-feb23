//1
//2
var student1 = {
    name: "bob",
    gender: "mail",
    mathMidTermGrade: 85,
    historyMidTermGrade: 90,
    mathFinalTermGrade: 75,
    historyFinalTermGrade: 90,
    averageGrade: function () {
        return (this.mathMidTermGradw + this.mathFinalTermGrade
            + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
    }
};
console.log(student1.name + " average grade is " + student1.averageGrade());
