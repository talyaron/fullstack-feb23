// // 1) write a prompt that ask the user if he is male or female. if the answer is "male" return "hello sir" if it is "female" return "hello Miss". If the user write another answer, it should return "hello".
// function EVN() {
//     const gender: string | null= prompt("Are you male or female?");
//     if(gender === null) {
//         return document.write("You canceled the prompt");
//     }
// const lowercaseGender: string = gender.toLowerCase();
//     if (lowercaseGender === "male") {
//         return document.write("Hello sir");
//     } else if (lowercaseGender === "female") {
//         return document.write("Hello Miss");
//     } else {
//         return document.write("Please enter 'male' or 'female'");
//     }
// }
// const greeting: string | void = EVN();
// console.log(greeting);
// 2) write a function that gets 2 numbers, and return the bigger. (max)
var num1 = 5;
var num2 = 10;
function biggerNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
var bigger = biggerNum(num1, num2);
document.write(bigger.toString());
// 3) write a function that gets an array of numbers, and return the number ordered from the smallest to the largest. dont use .sort. dont use chatGPT. you can only search of array in javascript. ([9,4,5,7] ->[4,5,7,9] )
var arr = [5, 2, 3, 4, 1];
console.log("[" + arr, ']', 'this is the first array');
var OOO = arr.splice(1, 4);
console.log("" + OOO, 'using .splice to remove the first(0) number');
OOO.unshift(0, 1);
console.log("" + OOO, 'Using .unshift to add values(0, 1) to the start of the array');
var newNewOOO = OOO.splice(0, 5);
console.log("" + newNewOOO, 'Using .splice again to cut the last number of the array(1)');
newNewOOO.push(5);
console.log("" + newNewOOO, 'Using .push to add the number (5) to the end of the array');
