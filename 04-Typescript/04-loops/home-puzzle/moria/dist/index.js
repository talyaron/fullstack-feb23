var number = 5;
var j = 3;
var sum = 0;
var s = 1;
for (var n = 0; n < number; n++) {
    sum = number + n;
    s--;
    while (s < 1) {
        sum = (number + n) * j;
        console.log(sum + " = " + number + " + " + n + " * " + j);
        s++;
    }
}