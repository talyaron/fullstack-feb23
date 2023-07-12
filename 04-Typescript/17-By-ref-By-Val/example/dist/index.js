var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
// copying objects by value
//shalow copy (spread operator)
var c = __assign(__assign({}, a), { y: "test" });
console.log(c);
c.x = 400;
console.log(c);
console.log(a);
//array;
var myArray = [{ name: "Tal" }, 45];
var myArray2 = __spreadArrays(myArray);
// const myArray2 = JSON.parse(JSON.stringify(myArray));
myArray2[1] = 100;
myArray2[0].name = "Moshe";
console.log(myArray);
//sholow copy to objects in array;
var students2 = students.map(function (s) {
    return __assign({}, s);
});
console.log(students2);
students2[2].year = 2040;
console.log(students);
