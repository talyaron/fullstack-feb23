var ziv = {
    name: "ziv",
    grades: [100, 90, 76],
    // Number(prompt(`please insert your grades`)),
    averageGrades: function () {
        var result = this.grades.reduce(function (a, b) { return a + b; }, 0) /
            this.grades.length;
        return result;
    }
};
var dana = {
    name: "dana",
    grades: [100, 90, 80, 70, 60, 50],
    // Number(prompt(`please insert your grades`)),
    averageGrades: averageGrades
};
function averageGrades(grade) {
    try {
        var result = this.grades.reduce(function (a, b) { return a + b; }, 0) /
            this.grades.length;
        return result;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log("hello " + ziv.name + ", your average grades is: " + ziv.averageGrades());
console.log("hello " + dana.name + ", your average grades is: " + dana.averageGrades(dana.grades));
