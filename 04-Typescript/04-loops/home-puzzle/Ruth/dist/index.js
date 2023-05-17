//-----------1-----------
var getBottleNum = prompt("How much time you want annoying me with bottle?");
if (getBottleNum) {
    var bottleNum = parseInt(getBottleNum);
    var strBottles = "";
    if (!isNaN(bottleNum)) {
        for (bottleNum; bottleNum >= 0; bottleNum--) {
            if (bottleNum > 1) {
                strBottles += bottleNum + " Bottles of Beer on the wall.\n take one down pass it around, and ";
            }
            if (bottleNum == 1) {
                strBottles += bottleNum + " Bottles of Beer on the wall.\n  ";
            }
            if (bottleNum == 0) {
                strBottles += "no more Bottles of Beer on the wall!!";
            }
        }
        console.log(strBottles);
    }
    else {
        alert("you not enter a number, please refresh and enter correct params");
    }
}
//------------2------------
var getSumTo = prompt("Enter a number to get the sum up to it");
if (getSumTo) {
    var sumTo = parseInt(getSumTo);
    if (!isNaN(sumTo)) {
        var sum = 0;
        for (var i = 1; i <= sumTo; i++) {
            sum += i;
        }
        console.log(sum);
    }
    else {
        alert("you not enter a number ,please refresh and enter correct params");
    }
}
//----------3------------
var getX = prompt("enter number to first variable");
var getY = prompt("enter number to seconde variable");
if (getX && getY) {
    var x = parseInt(getX);
    var y = parseInt(getY);
    if (!isNaN(x) && !isNaN(y)) {
        var sum__2 = 0;
        for (var i = 1; i <= sum__2; i++) {
            sum__2 += i;
        }
        console.log(sum__2 * y);
    }
    else {
        alert("x or y is not numbers! please refresh and enter correct params");
    }
}
