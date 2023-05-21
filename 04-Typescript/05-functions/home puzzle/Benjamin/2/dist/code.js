var numone = prompt("isert your first number");
var numtwo = prompt("isert your second number");
var x = 0;
var y = 0;
if (numone !== null) {
    x = parseInt(numone);
}
if (numtwo !== null) {
    y = parseInt(numtwo);
}
function max(i, t) {
    if (i > t) {
        return (i);
    }
    else {
        return (t);
    }
}
console.log(max(x, y));
