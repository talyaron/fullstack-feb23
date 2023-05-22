function calculate(a, sign, c) {
    try {
        if (isNaN(a) || isNaN(c))
            throw Error("one of the input is not a number");
        if (sign !== "/" && sign !== "*")
            throw Error("the sign is incorrect");
        if (sign === "/") {
            if ((a || c) === 0)
                throw Error("deviding by 0 is not allowed");
            return a / c;
        }
        return a * c;
    }
    catch (error) {
        console.error(error);
        return;
    }
}
console.log(calculate(2, "*", 9));
console.log(calculate(90, "/", 9));
console.log(calculate(2, "*", 9));
console.log(calculate(2, "a", 9));
console.log(calculate(2, "*", 0));
console.log(calculate(2, "*", "a"));
