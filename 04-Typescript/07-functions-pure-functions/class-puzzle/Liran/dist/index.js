function calculate(num1, op, num2) {
    try {
        if (isNaN(num1) || isNaN(num2))
            throw new Error("Not a number");
        if (op !== "/" && op !== "*" && op !== "+" && op !== "-")
            throw new Error("Not one of the calculate operations");
        switch (op) {
            case "/":
                if (num2 == 0)
                    throw new Error("Can't divide 0");
                {
                }
                return num1 / num2;
            case "*": return num1 * num2;
            case "+": return num1 + num2;
            case "-": return num1 - num2;
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var a = Number(prompt("Insert first number:"));
var operation = prompt("Insert mathmatical opertation:");
var b = Number(prompt("Insert second number:"));
var res = calculate(a, operation, b);
document.write(a + " " + operation + " " + b + " = " + res);
