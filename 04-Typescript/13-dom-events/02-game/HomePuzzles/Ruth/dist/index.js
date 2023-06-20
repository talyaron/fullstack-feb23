var Pawn = /** @class */ (function () {
    function Pawn(color, xPos, yPos) {
        this.color = color;
        this.xPos = xPos;
        this.yPos = yPos;
    }
    return Pawn;
}());
var blacksPawns = [];
var whitesPawns = [];
function createBlacksPawns() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            if (i % 2 == 0) {
                var pawn = new Pawn("black", (j * 2) + 1, i);
            }
            else {
                var pawn = new Pawn("black", (j) * 2, i);
            }
            blacksPawns.push(pawn);
        }
    }
}
createBlacksPawns();
console.log(blacksPawns);
function createWhitesPawns() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            var pawn = new Pawn("white", j, 8 - i);
            whitesPawns.push(pawn);
        }
    }
}
createWhitesPawns();
console.log(whitesPawns);
if (Math.round(Math.random() * 2) == 1) {
    console.log("chocolate cake");
}
else
    (console.log("apple cake"));
