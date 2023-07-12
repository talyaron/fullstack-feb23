// Exercise 1
for (var i = 99; i >= 1; i--) {
    console.log(i + " bottles of beer on the wall.Take one down, pass it around. " + (i - 1) + " bottles of beer on the wall.");
}
console.log("No more bottles of beer on the wall.");
// Exercise 2
var numberOne = 10;
var sumOne = 0;
for (var i = 1; i <= numberOne; i++) {
    sumOne += i;
}
console.log("The sum of numbers from 1 to " + numberOne + ", is " + sumOne);
// Exercise 3
var seconNnumber = 5;
var thirdNumber = 2;
var sumTwo = 0;
for (var i = 1; i <= thirdNumber; i++) {
    for (var k = 1; k <= i; k++) {
        sumTwo += k;
    }
}
var newSum = sumTwo * thirdNumber;
document.write(newSum);
