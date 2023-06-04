// Easy:

// Exercise 1: Create an array called "colors" with three different color names. Print the second element of the array.
const colors = ['red', 'green', 'blue'];
console.log(colors[1]); // green

// Exercise 2: Create an array called "numbers" with five random numbers. Add two more numbers to the end of the array. Print the updated array.
let numbers: number[] = [];

for (let i = 0; i < 5; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}
numbers.push(10, 20);
console.log(numbers);

// Medium:
// Exercise 3: Create an array called "fruits" with five different fruit names. Remove the third fruit from the array. Print the updated array.
let fruits: string[] = ['apple', 'banana', 'cherry', 'grapes', 'peach'];
fruits.splice(2, 1);
console.log(fruits);

// Exercise 4: Create an array called "ages" with five different ages. Sort the array in ascending order. Print the sorted array.
let ages: number[] = [25, 42, 18, 37, 51];
ages.sort((a, b) => a - b);
console.log(ages);

// Hard:

// Exercise 5: Create an array called "students" with five student objects. Each object should have properties like
// "name", "age", and "grade". Write a function that takes the "students" array as input and returns an array with only the
// names of the students.
interface Student {
  name: string;
  age: number;
  grade: number;
}
function getStudentsNames(students: Student[]): string[] {
  return students.map((student) => student.name);
}
const students: Student[] = [
  { name: 'Tom', age: 25, grade: 90 },
  { name: 'Lee', age: 30, grade: 95 },
  { name: 'Nave', age: 25, grade: 100 },
  { name: 'Bar', age: 20, grade: 92 },
  { name: 'Daniel', age: 21, grade: 98 },
];
const studentsNames: string[] = getStudentsNames(students);
console.log(studentsNames);

// Exercise 6: Create an array called "numbers" with ten random
// numbers. Write a function that takes the "numbers" array as
// input and returns a new array with only the even numbers from
// the original array.

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
