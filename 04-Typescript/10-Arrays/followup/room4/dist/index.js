// Exercise 3: Create an array called "fruits" with five different fruit names. Remove the third fruit from the array. Print the updated array.
var fruits = ['apple', 'banana', 'cherry', 'grapes', 'peach'];
fruits.splice(2, 1);
console.log(fruits);
// <p>When the slice() method is given two arguments, it selects array elements from the start argument, and up to (but not included) the end argument:</p>
var fruits1 = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function (element) { return element > 50; });
console.log(found);
var numbers = [5, 15, 8, 20, 12];
var numbersBiggerThan10 = numbers.filter(function (num) { return num > 10; });
console.log(numbersBiggerThan10);
