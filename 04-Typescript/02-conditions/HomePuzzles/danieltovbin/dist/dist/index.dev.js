"use strict";

var age = prompt("what is your age?");
var ageAsNumber = parseInt(age || "0");

if (ageAsNumber >= 18) {
  console.log("you can buy alcohol.");
} else {
  console.log("go away, you're still young.");
} // console.log("what is your gender?")
// let gender = "female || male";
// if (gender === "female") {
//     console.log("you are a female")
// }
// else (gender === "male") {
//     console.log("you are a male")
// }
// import readlineSync from 'readline-sync';
// console.log("What is your gender?");
// const gender: string = "unknown"; // Default value
// while (gender === "unknown") {
//   const input: string = readlineSync.question("Please enter your gender: ");
//   if (input === "female") {
//     gender = "female";
//     console.log("You are a female.");
//   } else if (input === "male") {
//     gender = "male";
//     console.log("You are a male.");
//   } else {
//     console.log("Invalid input. Please enter 'male' or 'female'.");
//   }
// }
// console.log("What is your gender?");


var gender = prompt("Please enter your gender:");

if (gender === "female") {
  console.log("את אישה");
} else if (gender === "male") {
  console.log("אתה גבר");
}

var height = prompt("what is your height in cm?");
var weight = prompt("what is your weight in kg?");
var BMI = weight / (height / 100 * (height / 100));

if (BMI < 18.5) {
  console.log("you are within the underweight range");
} else if (BMI > 18.5 && BMI < 25) {
  console.log("you are within the healthy weight range");
} else if (BMI === 25 && BMI < 30) {
  console.log("you are within the obesity range");
} else if (BMI > 30) {
  console.log("you are within the obesity range");
}