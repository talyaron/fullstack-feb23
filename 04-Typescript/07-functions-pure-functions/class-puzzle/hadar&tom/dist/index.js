var num1 = prompt("give me a number");
var sign = prompt("give a sign");
var num2 = prompt("give me a number");
function tom(a, b, c) {
    try {
        if (isNaN(a) || isNaN(c))
            throw new Error("input is not a number");
        if (b != "/" && b != "*")
            throw new Error("input is not good");
        if (b === "/") {
            return a / c;
        }
        else {
            return a * c;
        }
    }
    catch (error) {
        console.error(error);
    }
}
console.log(tom(num1, sign, num2));
