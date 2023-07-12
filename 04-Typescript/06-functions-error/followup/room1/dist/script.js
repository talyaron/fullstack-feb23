function num(a, b) {
    try {
        if (isNaN(a) || isNaN(b))
            throw new Error("Input is NaN");
        return a + b;
    }
    catch (error) {
        console.error(error);
    }
}
var a = prompt("Enter the first number:");
var b = prompt("Enter the second number:");
if (a && b) {
    var result = num(Number(a), Number(b));
    console.log(result);
}
else {
    console.log("Invalid input.");
}
