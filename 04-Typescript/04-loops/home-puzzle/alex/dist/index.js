//calculate with loop inside a loop, how much is (1+2+3+...+n) multply by j
var n = 5;
var sum = 0;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        sum += j;
        console.log("the var i  is: " + i);
        console.log("the var j  is: " + j);
        console.log("the var sum  is: " + sum);
    }
}
console.log("The sum of numbers from 1 to " + n + " is: " + sum);
