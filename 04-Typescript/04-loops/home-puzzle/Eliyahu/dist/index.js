var n = prompt("הכנס מספר סכום");
var m = prompt("הכנס מספר כפל");
var sum = Number(n);
var multiply = Number(m);
var x = 0;
var y = 0;
for (var j = 1; j <= multiply; j++) {
    for (var i = 1; i <= sum; i++) {
        x = x + i;
    }
    y = y + x;
    x = 0;
    if (j === multiply) {
        document.write("(1+2+...+ " + sum + ")x" + multiply + "=" + y);
    }
}
