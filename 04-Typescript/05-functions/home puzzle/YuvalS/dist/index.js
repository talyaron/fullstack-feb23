var x = Number(prompt("Enter a number"));
var y = Number(prompt("Enter a second number"));
function whoIsBigger(x, y) {
    if (x > y) {
        return x;
    }
    else if (x === y) {
        return x = y;
    }
    else {
        return y;
    }
}
console.log(whoIsBigger(x, y));
