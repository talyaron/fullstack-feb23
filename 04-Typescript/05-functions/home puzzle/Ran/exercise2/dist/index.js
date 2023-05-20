var num1 = Number(prompt("הכנס מספר בבקשה:"));
var num2 = Number(prompt("הכנס מספר בבקשה:"));
var x;
var y;
function bigger(x, y) {
    if (num1 > num2) {
        return ("the bigger number is: " + num1);
    }
    else if (num1 < num2) {
        return ("the bigger number is: " + num2);
    }
    else {
        return ("same same");
    }
}
var big = bigger(num1, num2);
console.log(big);
