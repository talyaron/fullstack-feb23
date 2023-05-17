"use strict";

var triangular = Number(prompt("הכנס מספר טריאנגולרי")) || 0;
var multiply = Number(prompt("הכנס.י מכפלה")) || 0; //multply triangular
//invokation

var result1 = multiplyTriangular(triangular, multiply);
console.log(result1);
var triangular2 = Number(prompt("הכנס מספר טריאנגולרי")) || 0;
var multiply2 = Number(prompt("הכנס.י מכפלה")) || 0;
var result2 = multiplyTriangular(triangular2, multiply2); //define the function

function multiplyTriangular(t, m) {
  var sum = 0;

  for (var j = 1; j <= m; j++) {
    for (var i = 1; i <= t; i++) {
      sum = sum + i;
    }
  }

  return sum;
}