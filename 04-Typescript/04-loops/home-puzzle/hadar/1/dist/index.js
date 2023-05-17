for (var x = 99; x > 0; x--) {
    var y = x - 1;
    console.log(x + " Bottles of Beer on the wall. take one down pass it around, and " + y + " bootle of beer on the wall");
}
var num = prompt("choose a number:");
var sum = 0;
for (var y = 0; y <= num; y++) {
    sum = sum + y;
}
console.log("1+2+3...+" + num + "=" + sum);
