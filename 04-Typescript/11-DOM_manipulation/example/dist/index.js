document.body.style.background = "blue";
var colors = ["red", "green", "yellow", "pink"];
var count = 0;
document.addEventListener("click", function () {
    if (count === colors.length)
        count = 0;
    console.log("click");
    document.body.style.background = colors[count];
    count++;
});
var Student = /** @class */ (function () {
    function Student(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    Student.prototype.getAge = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return Student;
}());
var students = [
    new Student("Itizk", 2000),
    new Student("Sara", 2004),
    new Student("Nave", 1998),
    new Student("Alex", 1991),
];
var root = document.querySelector("#root");
var studntsHTML = students
    .map(function (student) {
    return "<p>" + student.name + ", age: " + student.getAge() + "</p>";
})
    .join(" ");
console.log(studntsHTML);
if (root) {
    root.innerHTML = studntsHTML;
}
