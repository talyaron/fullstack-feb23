var countX = prompt("X הכנס");
var countY = prompt("Y הכנס");
if (countX && countY) {
    debugger;
    var countXnumber = parseInt(countX);
    var countYnumber = parseInt(countY);
    console.log("the loop will run " + countYnumber + " times and calculate sum from 1 to " + countXnumber + " ");
    for (var y = 0; y < countYnumber; y++) {
        var calc = 0;
        var bigString = "";
        for (var x = 1; x <= countXnumber; x++) {
            if (countXnumber == x) {
                bigString += x;
            }
            else {
                bigString += x + "+";
            }
            calc += x;
        }
        console.log("" + bigString);
        console.log("sum : " + calc);
    }
}
