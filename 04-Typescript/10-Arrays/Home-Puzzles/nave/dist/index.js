// Exercise 3: Create an array called "fruits" with five
// different fruit names. Remove the third fruit from the array.
// Print the updated array.
var Fruits = ["banana", "melon", "apple", "watermelon"];
Fruits.splice(2, 1);
console.log(Fruits);
// Exercise 4: Create an array called "ages" with five different
// ages. Sort the array in ascending order.
// Print the sorted array.
var Ages = [85, 37, 22, 35, 45];
Ages.sort(function (a, b) { return a - b; });
console.log(Ages);
function SetStudentsNames(students) {
    return students.map(function (student) { return student.name; });
}
var students = [
    { name: 'Tom', age: 25, grade: 90 },
    { name: 'Lee', age: 30, grade: 95 },
    { name: 'Nave', age: 25, grade: 100 },
    { name: 'Bar', age: 20, grade: 92 },
    { name: 'Daniel', age: 21, grade: 98 },
];
var StudentsNames = SetStudentsNames(students);
console.log(StudentsNames);
//   Create an array called "numbers" with ten random
//   numbers. Write a function that takes the "numbers" array as
//   input and returns a new array with only the even numbers from
//   the original array.
