var num1 = 16;
var num2 = 4;
var sing = "*";
var res = calculate(num1, sing, num2);
document.body.innerText = num1 + " " + sing + " " + num2 + " = " + res;
function calculate(x, operator, y) {
    try {
        if (isNaN(x) || isNaN(y) || (operator != "/" && operator != "*"))
            throw new Error("input is not available");
        if (operator === "/" && y != 0) {
            return x / y;
        }
        return x * y;
    }
    catch (error) {
        console.error(error);
        return;
    }
}
