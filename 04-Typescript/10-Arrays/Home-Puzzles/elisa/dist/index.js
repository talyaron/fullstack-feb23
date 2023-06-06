// Easy:
// Exercise 1: Create an array called "colors" with three different color names. Print the second element of the array.
var colors = ['red', 'green', 'blue'];
console.log(colors[1]); // green
// Exercise 2: Create an array called "numbers" with five random numbers. Add two more numbers to the end of the array. Print the updated array.
var numbers1 = [];
for (var i = 0; i < 5; i++) {
    numbers1.push(Math.floor(Math.random() * 100));
}
numbers1.push(10, 20);
console.log(numbers1);
// Medium:
// Exercise 3: Create an array called "fruits" with five different fruit names. Remove the third fruit from the array. Print the updated array.
var fruits = ['apple', 'banana', 'cherry', 'grapes', 'peach'];
fruits.splice(2, 1);
console.log(fruits);
// Exercise 4: Create an array called "ages" with five different ages. Sort the array in ascending order. Print the sorted array.
var ages = [25, 42, 18, 37, 51];
ages.sort(function (a, b) { return a - b; });
console.log(ages);
function getStudentsNames(students) {
    return students.map(function (student) { return student.name; });
}
var students = [
    { name: 'Tom', age: 25, grade: 90 },
    { name: 'Lee', age: 30, grade: 95 },
    { name: 'Nave', age: 25, grade: 100 },
    { name: 'Bar', age: 20, grade: 92 },
    { name: 'Daniel', age: 21, grade: 98 },
];
var studentsNames = getStudentsNames(students);
console.log(studentsNames);
// Exercise 6: Create an array called "numbers" with ten random numbers. Write a function that takes the "numbers" array as
// input and returns a new array with only the even numbers from the original array.
function getEvenNumbers(numbers) {
    var evenNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
var numbers = [];
for (var i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log('Original array:', numbers);
var evenNumbers = getEvenNumbers(numbers);
console.log('Even numbers:', evenNumbers);
// Challenge:
// Exercise 7: Create an array called "words" with five different
// words. Write a function that takes the "words" array as input
// and returns a new array with the words sorted in alphabetical
// order, regardless of the case (uppercase or lowercase).
// Exercise 8: Create an array called "matrix" with three
// sub-arrays, each containing four numbers. Write a function
// that takes the "matrix" array as input and returns the sum
// of all the numbers in the matrix.
// easy
// 1. create a function that gets a number and prints the element in a given array. if not exist - print error
// 2. print every item in a given array
// 3. print every odd item in a given array
function getArrayElement(array, number) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            console.log(array[i]);
            return;
        }
    }
    console.error("The number " + number + " does not exist in the array.");
}
function printEveryItemInArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
function printEveryOddItemInArray(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
}
var array = [1, 2, 3, 4, 5];
getArrayElement(array, 3); // Prints 3
getArrayElement(array, 6); // Prints Error: The number 6 does not exist in the array.
printEveryItemInArray(array); // Prints 1, 2, 3, 4, 5
printEveryOddItemInArray(array); // Prints 1, 3, 5
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
