// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, 
//    mathFinalTermGrade, and historyFinalTermGrade.
var RanGrade = {
    name: "Ran Yamin",
    gender: "male",
    mathMidTermGrade: 86,
    historyMidTermGrade: 92,
    mathFinalTermGrade: 95,
    historyFinalTermGrade: 90,
    avarge: function () {
        return (this.historyFinalTermGrade + this.mathFinalTermGrade) / 2;
    }
};
console.log(RanGrade.avarge());
