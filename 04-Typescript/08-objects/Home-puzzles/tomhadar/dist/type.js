// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.
var tomcar = {
    name: "cx5",
    company: "mazda",
    year: 2014,
    color: "red",
    mil: 100000,
    carage: function () {
        return new Date().getFullYear() - this.year;
    }
};
console.log(tomcar);
console.log(tomcar.carage());
