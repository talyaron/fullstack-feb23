var num1 = Number(prompt("תכניס בבקשה מספר 1")) || 0;
var num2 = Number(prompt("תכניס בבקשה מספר 2")) || 0;
var x = 0;
var y = 0;
var multiply1 = 0;
var result = Multiply(num1, num2);
console.log(result);
var num3 = Number(prompt("תכניס בבקשה מספר 2")) || 0;
var num4 = Number(prompt("תכניס בבקשה מספר 2")) || 0;
var result1 = Multiply(num3, num4);
console.log(result1);
function Multiply(y, x) {
    multiply1 = y * x;
    return multiply1;
}
