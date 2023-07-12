var num = 3409078;
function reverseNumber(number) {
    try {
        if (isNaN(number)) {
            throw new Error("input isn't a number");
        }
        var newNumberStr = "";
        var temp = void 0;
        for (var i = 0; number > 0; i++) {
            temp = number % 10;
            newNumberStr += temp.toString();
            number = Math.floor(number / 10);
        }
        return newNumberStr;
    }
    catch (error) {
        console.error(error);
    }
    3;
}
console.log(reverseNumber(num));
