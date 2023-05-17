var triangular = Number(prompt("הכנס מספר טריאנגולרי")) || 0;
var multiply = Number(prompt("הכנס.י מכפלה")) || 0;
//multply triangular
//invokation
var result1 = multiplyTriangular(triangular, multiply);
console.log(result1);
// const triangular2 = Number(prompt("הכנס מספר טריאנגולרי")) || 0;
// const multiply2 = Number(prompt("הכנס.י מכפלה")) || 0;
// const result2 = multiplyTriangular(triangular2, multiply2);
// console.log(result2);
//define the function
function multiplyTriangular(t, m) {
    var resultTriangular = (Math.pow(t, 2) + t) / 2;
    //   let sum = 0;
    //   for (let j = 1; j <= m; j++) {
    //     for (let i = 1; i <= t; i++) {
    //       sum = sum + i;
    //     }
    //   }
    return resultTriangular * m;
}
console.log(multiplyTriangular);
