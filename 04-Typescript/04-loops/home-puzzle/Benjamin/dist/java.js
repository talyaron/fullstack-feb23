var stopInput = prompt("Please define the number that you want to stop on:");
var multiplierInput = prompt("Please define your multiplier:");
if (stopInput !== null && multiplierInput !== null) {
    var stopNumber = parseInt(stopInput, 10);
    var multiplierNumber = parseInt(multiplierInput, 10);
    console.log("Stop Number:", stopNumber);
    console.log("Multiplier:", multiplierNumber);
    document.write("the adding will be from 0 to " + stopNumber);
    document.write("the multiply will be in " + multiplierNumber + "\n");
    var y = 0;
    for (var x = stopNumber; x > 0; x--) {
        y = y + x;
    }
    var m = y * multiplierNumber;
    console.log("rusult of adding", y);
    console.log("result of multiply", m);
    document.write("the result of your adding " + y + "\n");
    document.write("the result of your multiply " + m + "\n");
}
else {
    console.log("error.");
}
