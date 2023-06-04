// Exercise 3: Create an array called "fruits" with five different fruit names. Remove the third fruit from the array. Print the updated array.
let fruits: string[] = ['apple', 'banana', 'cherry', 'grapes', 'peach'];
fruits.splice(2, 1);
console.log(fruits);

// <p>When the slice() method is given two arguments, it selects array elements from the start argument, and up to (but not included) the end argument:</p>
const fruits1: string[] = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 3);

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 50);
console.log(found);

const numbers: number[] = [5, 15, 8, 20, 12];
const numbersBiggerThan10: number[] = numbers.filter((num) => num > 10);
console.log(numbersBiggerThan10);
