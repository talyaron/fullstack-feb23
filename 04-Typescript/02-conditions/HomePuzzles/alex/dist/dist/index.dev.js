"use strict";

// const age:number = 17.9
// if (age > 18){
//     console.log("Cheers!")
// }
// else {
//     console.log("Grow up some mustache first!")
// }
// const gender = prompt("What`s your gender?")
// const genderAsString = (gender)
// if (genderAsString === 'male'){
//     document.write("אתה")
// }
// else if(genderAsString === 'female') {
//     document.write("את")
// } else{
//     document.write("הזנת ערך שגוי")
// }
// const age = prompt("What`s your number?")
// const ageAsNumber = parseInt(age||"0")
// if (ageAsNumber >= 18){
//     document.write("Cheers!")
// }
// else if(isNaN(ageAsNumber)) {
//     document.write("NaN")
// } else{
//     document.write("Grow up some mustache first!")
// }
// 1. Check if userASge is greater than 18
var age = prompt("What`s your age?");
var ageAsNumber = parseInt(age || "0");

if (ageAsNumber >= 18) {
  document.writeln("Cheers!   ");
} else if (isNaN(ageAsNumber)) {
  document.writeln("NaN");
} else {
  document.writeln("Grow up some mustache first!");
} // const userASge = 20;
// if (userASge > 18) {
//     document.write("You can buy alcohol.");
// }
// 2. Ask for user's gender and use appropriate terms


var gender = prompt("What is your gender?");

if (gender === "male") {
  document.writeln("ברוך הבא אחי");
} else if (gender === "female") {
  document.writeln("ברוכה הבאה אחותי");
} else {
  document.writeln("Welcome!");
} // 3. Calculate BMI and print a text description


var height = parseFloat(prompt("Enter your height in meters:"));
var weight = parseFloat(prompt("Enter your weight in kilograms:"));
var bmi = weight / (height * height);

if (bmi < 18.5) {
  document.write("Underweight");
} else if (bmi < 25) {
  document.write("Normal weight");
} else if (bmi < 30) {
  document.write("Overweight");
} else {
  document.write("Obese");
}