"use strict";

// # Level 1
// var num = Number(prompt("Enter number"));
// function negative(num:number){
//     num = -Math.abs(num);
//     return num;
// }
// console.log(negative(num))
// # Level 2
// 1. Create a function that gets the gender of the user and height of the user.
//    The function returns the height of the user relative to his gender. For example, the user's height is 170cm, and the gender is male.
//    The average height of males is 174cm, and the function return -4
var manAverage = 174;
var womanAverage = 162;
var userGender = prompt("Enter your gender");
var userHeight = Number(prompt("Enter your height in cm"));
console.log(gender(userGender));

function gender(gender) {
  try {
    if (gender === "male") {
      var result = userHeight - manAverage;
      return result;
    } else if (gender === "female") {
      var _result = userHeight - womanAverage;

      return _result;
    } else {
      console.log('error');
    }
  } catch (error) {}
}