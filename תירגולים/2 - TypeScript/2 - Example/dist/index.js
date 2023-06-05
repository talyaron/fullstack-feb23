/*
Create an array called "matrix" with three sub-arrays, each containing four numbers.
Write a function that takes the "matrix" array as input and
returns the sum of all the numbers in the matrix.
*/
// const matrix = [
//     [7, 5, 3, 6],
//     [1, 2, 3, 4],
//     [7, 8, 9, 2]
// ]
// const sumAll = (arr) => {
//     return arr.flat().reduce((a, b) => a + b, 0)
// }
// console.log(sumAll(matrix))
var matrix = [[5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3, 3]];
var a = matrix[0];
var b = matrix[1];
var result = 0;
matrix = matrix.flat().reduce(function (a, b) { return a + b; }, result);
console.log(matrix);
