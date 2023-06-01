var userNmae = "Bar";
var Student = /** @class */ (function () {
    function Student(name, last, average) {
        this.name = name;
        this.last = last;
        this.average = average;
    }
    return Student;
}());
var bar = new Student("Bar", "Yaron", 99);
var roman = new Student("Roman", "R", 98);
console.log(bar);
var students = [bar, roman];
console.log(students);
students.forEach(function (student) {
    console.log(student.name, student.average);
});
var topStudents = students.filter(function (student) {
    return student.average >= 99;
});
console.log(topStudents);
