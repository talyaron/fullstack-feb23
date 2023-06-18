function add(num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2))
            throw new Error("error. not a number.");
        return (num1 + num2);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var num1 = Number(prompt("insert number one"));
var num2 = Number(prompt("insert number two"));
document.write("the add of your numbers is " + add(num1, num2));
