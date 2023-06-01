var userNmae = "Bar";
var Student = /** @class */ (function () {
    function Student(name, last, average) {
        this.name = name;
        this.last = last;
        this.average = average;
    }
    return Student;
}());
var bar = new Student("Bar", "Yaron", 98);
var roman = new Student("Roman", "R", 100);
console.log(bar);
var students = [bar, roman];
students.forEach(function (student) {
    console.log(student.name, student.average);
});
var topStudents = students.filter(function (student) {
    return student.average >= 99;
});
console.log(topStudents);
