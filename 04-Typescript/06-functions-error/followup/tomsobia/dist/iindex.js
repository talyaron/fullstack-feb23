var x = prompt("give me number?");
var y = prompt("give me a second number");
function number(x, y) {
    try {
        if (isNaN(x) || isNaN(y))
            throw new Error("not a number");
        return (x + "," + y);
    }
    catch (error) {
        console.error(error);
    }
}
console.log(number(x, y));
