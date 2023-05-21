var x = Number(prompt("give me first number"));
var y = Number(prompt("give me second number"));
function samTwoNumbers(x, y) {
    try {
        if (isNaN(x) || isNaN(y))
            throw new Error("input is NaN");
        if (typeof (x || y) !== number)
            throw new Error("input is not a number");
        return x + y;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
samTwoNumbers(x, y);
