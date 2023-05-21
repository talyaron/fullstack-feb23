var x = Number(prompt("give me a number 1"));
var y = Number(prompt("give me a number 2"));
var ans = checkIfNumber(x, y);
if (ans)
    console.log(x + ", " + y + " are a Numbers");
else
    console.log("inupt is NOT a Numbers");
function checkIfNumber(num1, num2) {
    debugger;
    try {
        if (isNaN(num1) || isNaN(num2))
            throw new Error("input is NaN");
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
