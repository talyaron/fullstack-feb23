// 1. write a prompt that ask the user if he is male or female. if the answer is "male" return "hello sir" if it is "female" return "hello Miss". If the user write another answer, it should return "hello".
// function userGender(): string {
//   const gender = prompt('Are you male or female?');
//   if (gender === 'male') {
//     return 'Hello sir';
//   } else if (gender === 'female') {
//     return 'Hello Miss';
//   } else {
//     return 'Hello';
//   }
// }
// const greetHello = userGender();
// console.log(greetHello);
// 2. write a function that gets 2 numbers, and return the bigger. (max)
var num1 = Number(prompt('Enter a number between  1-100'));
var num2 = Number(prompt('Enter another number between 1-100'));
function findMaxNumber(num1, num2) {
    return Math.max(num1, num2);
}
var maxNumber = findMaxNumber(num1, num2);
console.log("The bigger number is: " + maxNumber);
// 3.write a function that gets an array of numbers, and return the number ordered from the smallest to the largest. dont use .sort. dont use chatGPT. you can only search of array in javascript. ([9,4,5,7] ->[4,5,7,9] )
