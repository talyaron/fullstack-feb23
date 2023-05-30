// const user= prompt("enter")
var pawn = /** @class */ (function () {
    function pawn(numberline, letterline) {
        this.numberline = numberline;
        this.letterline = letterline;
    }
    pawn.prototype.goUp = function () {
        try {
            if (this.numberline > 8 || this.numberline < 1)
                throw new Error("out of the board");
            this.numberline++;
            return this.getLocation();
        }
        catch (error) {
            console.error(error);
        }
    };
    pawn.prototype.goDown = function () {
        try {
        }
        catch (error) {
            console.error(error);
            return "invalid move";
        }
    };
    pawn.prototype.getLocation = function () {
        console.log("the position of the pawn on the number line is " + this.numberline + " and on the letterline" + this.letterline + ".");
    };
    return pawn;
}());
var p1 = new pawn(7, 1);
var p2 = new pawn(9, 1);
console.log(p2.goUp());
