var a = Number(prompt("insert a number"));
var b = Number(prompt("insert a second number"));
function writeTheBigest(a, b) {
    if (a > b) {
        return a;
    }
    else if (a === b) {
        return a = b;
    }
    else {
        return b;
    }
}
console.log(writeTheBigest(a, b));
