// const Age = Number(prompt("Enter your age"))
// if (Age >= 18) {
//     document.write ("יכול לשתות")
// }
// else {
//     document.write ("לא יכול לשתות")
// }
// const gender = (prompt("what is your gender?"))
// if (gender === 'man') {
//     document.write ("hello man")
// }
// else {
//     document.write ("hello woman")
// }
function BMI(x, y) {
    return x / (y * y);
}
var weight = Number(prompt("Enter your weight"));
var height = Number(prompt("Enter your height"));
console.log(BMI(weight, height));
