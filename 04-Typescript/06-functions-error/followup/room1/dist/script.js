function num(a, b) {
    try {
        if (isNaN(num))
            throw new Error("input is NaN");
        return a + b;
    }
    catch (error) {
        console.error(error);
    }
}
console.log(num("a", 5));
