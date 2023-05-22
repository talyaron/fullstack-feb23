var x = Number(prompt("give me a number "));
var y = Number(prompt("give me a number "));
var result = add(x, y);
console.log(result);
function add(number1, number2) {
    try {
        if (isNaN(number1) || isNaN(number2))
            throw new Error("input1 is NaN");
        return number1 + number2;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
