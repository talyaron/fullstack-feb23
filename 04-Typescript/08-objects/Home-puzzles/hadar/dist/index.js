var hadar = {
    name: "hadar",
    gender: "female",
    mathMidTermGrade: 90,
    historyMidTermGrade: 80,
    mathFinalTermGrade: 70,
    historyFinalTermGrade: 60,
    average: function () {
        return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4;
    }
};
console.log(hadar.average());
