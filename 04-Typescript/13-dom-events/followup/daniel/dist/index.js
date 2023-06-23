// Easy:
// Exercise 1: Create an array called "colors" with three
// different color names. Print the second element of the array.
var colors = ['orange', 'white', 'black'];
console.log(colors[1]);
// Exercise 2: Create an array called "numbers" with five
// random numbers. Add two more numbers to the end of the array.
// Print the updated array.
// const numbers :number[] = [];
// for(let i = 0; i < 5; i++){
//     const max :number = Math.floor(Math.random() * 50);
//     numbers.push(max);
// }
// numbers.push(5,20);
// console.log(numbers)
// Medium:
// Exercise 3: Create an array called "fruits" with five
// different fruit names. Remove the third fruit from the array.
// Print the updated array.
var fruits = ['strawberry', 'banana', 'kiwi', 'apple', 'orange'];
fruits.splice(2, 1);
console.log(fruits);
// Exercise 4: Create an array called "ages" with five different 
// ages. Sort the array in ascending order. 
// Print the sorted array.
function compareNumber(a, b) {
    return a - b;
}
var ages = [23, 45, 80, 4, 17];
ages.sort(compareNumber);
console.log(ages);
var students = [
    { name: 'Ariel', age: 12, grade: 80 },
    { name: 'Danna', age: 11, grade: 90 },
    { name: 'Diana', age: 13, grade: 95 },
    { name: 'Dan', age: 14, grade: 85 },
    { name: 'Mike', age: 11, grade: 100 },
];
function nameOfStudents() {
    var allNames = [];
    for (var i = 0; i < students.length; i++) {
        allNames.push(students[i].name);
    }
    return allNames;
}
;
console.log(nameOfStudents());
// Exercise 6: Create an array called "numbers" with ten random
// numbers. Write a function that takes the "numbers" array as
// input and returns a new array with only the even numbers from
// the original array.
var numbers = [];
for (var i = 0; i < 10; i++) {
    var randomNumbers = (Math.floor(Math.random() * 200));
    numbers.push(randomNumbers);
}
console.log(numbers);
function evenNumbers(num) {
    if (num === void 0) { num = []; }
    return num.filter(function (n) { return n % 2 === 0; });
}
console.log(evenNumbers(numbers));
// Challenge:
// Exercise 7: Create an array called "words" with five different
// words. Write a function that takes the "words" array as input
// and returns a new array with the words sorted in alphabetical
// order, regardless of the case (uppercase or lowercase).
// Exercise 8: Create an array called "matrix" with three
// sub-arrays, each containing four numbers. Write a function
// that takes the "matrix" array as input and returns the sum
// of all the numbers in the matrix.
// Feel free to modify or expand on these exercises as per your
// teaching requirements.
// easy
// 1. creat a function that gets a number and prints the element
//    in a given array.
//    if not exist - print error
function getNumber(array, element) {
    if (array === void 0) { array = [1, 5, 7, 4]; }
    var index = array.findIndex(function (item) { return item === element; });
    return index != -1 ? index : "error";
}
;
console.log(getNumber(undefined, 7));
// 2. print every item in a given array
// 3. print every odd item in a given array
// 4. Write a simple JavaScript program to join all elements of the following array into a string.
//    Sample array : myColor = ["Red", "Green", "White", "Black"];
// medium
// 1. Write a JavaScript program that accepts a number
//    as input and inserts dashes (-) between each even number. For
//    example if you accept 025468 the output should be 0-254-6-8.
// 2. Write a JavaScript program to find the most frequent
//    item in an array.
//    Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//    Sample Output : a ( 5 times )
// 3. We have the following arrays :
//    color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//    o = ["th","st","nd","rd"]
//    Write a JavaScript program to display the colors in
//    the following way :
//    "1st choice is Blue ."
//    "2nd choice is Green."
//    "3rd choice is Red."
// hard
// 1. write a JavaScript program that counts the
//    times an elements appears in an array. it takes into
//    considration that the given array is 10 elements, (0-9)
//    and returns an array with the numbers counted at the respected
//    indexes
//    example
//    [0,3,9,1,1,7,2,1,0,7]
//    returns
//    [2,3,1,1,0,0,0,2,0,1]
// 2. in a given matrix (squre array of arrays) calculate the
//    absuloute diffrence between the sum of the diagonals. example:
//    const arr = [
//    [0,2,3],
//    [3,-1,-5],
//    [4,0,-8]
//    ]
// sum1 = 0 + (-1) + -8 = -9
// sum2 = 4 + (-1) + 3 = 6
// finalSum = |(-9) - (6)| = 15
// 3. Given an array of integers, where all elements
//    but one occur twice, find the unique element.
// Example
// const arr = [1,2,3,4,3,2,1,5,5]
// The unique element is 4
// //methods
// push, shift, nestted array, foreach, map, filter,
// find, some(true, false), every, icludes
// // new methods - returns new array
// with(index, element)
// toSorted === sort
// //[...array].sort() <---old
// toRevesed === reverse
// toSpliced === splice(index, toIndex, addedElements)
// the new ones are not supprted yet. only a couple months
// //spread opreator
// reduce
//   function elementToFind(array :number[]=[], element:number =8) {
//     return array.includes(element)? element :"Not found";
//   }
//   console.log(elementToFind([5, 7, 8, 6]));
