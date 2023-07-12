"use strict";

// # Level 1
// 1. Write a JavaScript function that returns the negative number of a number.
//    Example:
//    x = 32243;
//    Expected Output: -32243;
function makeNegative(number) {
  if (number > 0) {
    return number *= -1;
  }
}

console.log(makeNegative(565)); // 2. Write a function to convert Celsius to Fahrenheit
//JavaScript program to convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
} // convert temperature from Fahrenheit to Celsius


function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

var calc1 = celsiusToFahrenheit();
var calc2 = fahrenheitToCelsius(); // # Level 2
// 1. Create a function that gets the gender of the user and height of the user.
//    The function returns the height of the user relative to his gender. For example, the user's height is 170cm, and the gender is male.
//    The average height of males is 174cm, and the function return -4
// # Level 3
// 1. Write a function to reverse a number. For example, the function gets 123 and returns 321