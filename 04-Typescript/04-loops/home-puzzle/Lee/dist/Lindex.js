// Trying Task No. 3
var number = parseInt(prompt('Enter a number: '));
var secondNumber = parseInt(prompt('Enter another number: '));
var sum = 0;
for (var i = 1; i <= number; i++) {
    sum += i;
}
console.log('The sum of natural numbers:', sum * secondNumber);
