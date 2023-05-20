// Task No. 2
var number1 = parseInt(prompt('Enter a number: '));
var number2 = parseInt(prompt('Enter another one: '));
function max(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
document.write(max(number1, number2).toString());
