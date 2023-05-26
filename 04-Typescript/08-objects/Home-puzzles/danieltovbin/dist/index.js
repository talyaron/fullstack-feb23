// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.
// task one
// interface Student {
//     name: string
//     gender: string
//     mathMidTermGrade: number
//     historyMidTermGrade: number
//     mathFinalTermGrade: number
//     historyFinalTermGrade: number
//     sum: Function 
// }
var maria = {
    name: "Maria",
    gender: "woman",
    mathGrades: function (array) {
        if (array === void 0) { array = [90, 60, 80, 60]; }
        // part one
        var averageGrade = 0;
        for (var i = 0; i < array.length; i++) {
            averageGrade += array[i];
        }
        return averageGrade / array.length;
        // average = 72.5
        // part two
        var sum = array;
        sum.reduce(function (currentValue) { return currentValue; });
        return sum;
    },
    historyGrades: function (array) {
        if (array === void 0) { array = [80, 99, 100, 70]; }
        // part one
        var averageGrade = 0;
        for (var i = 0; i < array.length; i++) {
            averageGrade += array[i];
        }
        return averageGrade / array.length;
        // average = 87.25
        // part two
        var sum = array;
        sum.reduce(function (currentValue) { return currentValue; });
        return sum;
    },
    physicsGrades: function (array) {
        if (array === void 0) { array = [100, 100, 90, 80]; }
        var averageGrade = 0;
        for (var i = 0; i < array.length; i++) {
            averageGrade += array[i];
        }
        return averageGrade / array.length;
        // average = 92.5
        // part two
        var sum = array;
        sum.reduce(function (currentValue) { return currentValue; });
        return sum;
    },
    sportGrades: function (array) {
        if (array === void 0) { array = [85, 60, 70, 80]; }
        // part one
        var averageGrade = 0;
        for (var i = 0; i < array.length; i++) {
            averageGrade += array[i];
        }
        return averageGrade / array.length;
        // average = 73.75
        // part two
        var sum = array;
        sum.reduce(function (currentValue) { return currentValue; });
        return sum;
    },
    sum: function (array) {
        return (this.mathGrades() + this.historyGrades() + this.physicsGrades() + this.sportGrades()) / 4;
        // average of all = 81.5
    }
};
console.log(maria.mathGrades());
