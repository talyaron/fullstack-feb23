var x = Number(prompt("give me a number"));
var y = Number(prompt("give me a number"));
function numbers(x, y) {
    try {
        if (isNaN(x) || isNaN(y))
            throw new Error("input is not a number");
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
