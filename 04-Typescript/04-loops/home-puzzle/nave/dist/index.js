var n = parseInt(prompt("Enter a value for n:"));
var j = parseInt(prompt("Enter a value for j:"));
var start = Math.min(n, j);
var end = Math.max(n, j);
var sum = 0;
for (var i = start; i <= end; i++) {
    sum += i;
}
var result = sum * (n * j);
console.log("The result of (" + start + "+" + (start + 1) + "+...+" + end + ") * (" + n + " * " + j + ") is " + result);
