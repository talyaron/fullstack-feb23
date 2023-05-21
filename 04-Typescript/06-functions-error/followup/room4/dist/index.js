function checkingNumber(number1, number2) {
    try {
        debugger;
        if (isNaN(number1) ||
            // number1 === typeof "string" ||
            isNaN(number2)
        // number2 === typeof "string"
        )
            throw new Error("your input is not a number");
        return "your input is numbers";
    }
    catch (error) {
        console.error(error);
        return;
    }
}
console.log(checkingNumber(2, "hey you"));
