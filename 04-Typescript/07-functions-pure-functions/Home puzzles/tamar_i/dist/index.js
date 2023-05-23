function reverse(num, digitlength) {
    console.log(num);
    var newnum = 0;
    try {
        if (isNaN(num) || isNaN(digitlength))
            throw new Error("num expected to be a number");
        for (var i = 0; i < (digitlength - 1); i++) {
            newnum = newnum * 10 + (num % 10);
            num = (num - (num % 10)) / 10;
        }
        newnum = newnum * 10 + num;
        return newnum;
    }
    catch (error) {
        console.error(error);
        return;
    }
}
var x = Number(prompt("please enter a number"));
var digitlength = Number(prompt("plese enter how many digit have in the number you entered"));
console.log(reverse(x, digitlength));
