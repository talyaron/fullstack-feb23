// 3. calculate with loop inside a loop, how much is (1+2+3+...+n) multply by j
var x = prompt("please insert a number between 100-1000");
var AgeAsNumber = parseInt(x || "0");
if (AgeAsNumber > 1000) {
    console.log("please pick a number that smaller than 1000");
}
else if (AgeAsNumber < 100) {
    console.log("please pick a number that greater than 100");
}
else {
    var sum = 0;
    for (var i = 0; i <= AgeAsNumber; i++) {
        sum = sum + i;
        // console.log((AgeAsNumber * (AgeAsNumber + 1)) / 2);
    }
    var z = prompt("please choose a multiple number");
    var MultipleNumber = parseInt(x || "0");
    console.log("the sum of your number is " + sum * MultipleNumber);
}
