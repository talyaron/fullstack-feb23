// Create a function that calculates as follows:
// Get two numbers (a, b), and divide ("/") or multiply("*") according to the sign given to her.
function num(a, b, sign) {
    try {
        if (isNaN(a || b))
            throw new Error("failed");
        if ("*" === sign) {
            return a * b;
        }
        if ("/" === sign) {
            if (b === 0)
                throw new Error("you cannot devide by 0");
            return a / b;
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var a = Number(prompt("enter number one"));
var c = prompt("enter / or *");
var b = Number(prompt("enter number two"));
console.log(num(a, b, c));
