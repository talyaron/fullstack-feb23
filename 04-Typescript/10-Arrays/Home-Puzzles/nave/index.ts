// Exercise 3: Create an array called "fruits" with five
// different fruit names. Remove the third fruit from the array.
// Print the updated array.
const Fruits = [`banana`, `melon`, `apple`, `watermelon`];
Fruits.splice(2,1);
console.log(Fruits);
// Exercise 4: Create an array called "ages" with five different
// ages. Sort the array in ascending order.
// Print the sorted array.
const Ages :number [] = [85, 37, 22, 35, 45];
Ages.sort((a,b) => a - b) ;
console.log(Ages);
// Exercise 5: Create an array called "students" with five
// student objects. Each object should have properties like
// "name", "age", and "grade". Write a function that takes the
// "students" array as input and returns an array with only the
// names of the students.

interface Student {
    name: string;
    age: number;
    grade: number;
  }
  function SetStudentsNames(students: Student[]): string[] {
    return students.map((student) => student.name);
  }
  const students: Student[] = [
    { name: 'Tom', age: 25, grade: 90 },
    { name: 'Lee', age: 30, grade: 95 },
    { name: 'Nave', age: 25, grade: 100 },
    { name: 'Bar', age: 20, grade: 92 },
    { name: 'Daniel', age: 21, grade: 98 },
  ];
  const StudentsNames: string[] = SetStudentsNames(students);
  console.log(StudentsNames);

//   Create an array called "numbers" with ten random
//   numbers. Write a function that takes the "numbers" array as
//   input and returns a new array with only the even numbers from
//   the original array.

  