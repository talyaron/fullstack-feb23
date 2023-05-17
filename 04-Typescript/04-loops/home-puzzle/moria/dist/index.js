var number = 5;
var j = 3;
var sum = 0;
for (var n = 0; n < number; n++) {
    console.log(sum + " = " + number + " + " + n);
    sum = number + n;
    while (n < number) {
        console.log("* " + j);
    }
}
