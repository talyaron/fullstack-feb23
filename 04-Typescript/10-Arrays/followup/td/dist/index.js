// slice method
var numbers = [134, 257, 788, 235, 123];
console.log(numbers.slice(1, 3));
console.log(numbers.slice(-3, -1));
// with method
var arr = [12, 13, 14, 15];
console.log(arr["with"](2, 5));
// some method
// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));
var array = [1, 7, 3, 5];
var even = function (element) { return element % 2 === 0; };
console.log(array.some(even));
