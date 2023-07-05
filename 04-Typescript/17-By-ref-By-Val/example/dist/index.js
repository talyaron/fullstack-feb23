var x = 45;
var y = x;
console.log(x, y); // 45 45
x = 100;
console.log(x, y);
var a = { x: 45 };
var b = a;
console.log(a.x, b.x);
a.x = 100;
console.log(a.x, b.x);
var students = [
    { name: "Yevgeny", year: 2023 },
    { name: "Shalom", year: 2022 },
    { name: "Gili", year: 2021 }
];
var student2021 = students.find(function (student) { return student.year === 2021; });
console.log(student2021);
students[2].year = 2024;
var studentGili = students[2];
// if (student2021)
//     student2021.year = 2022;
studentGili.year = 2025;
console.log(student2021);
console.log(students);
