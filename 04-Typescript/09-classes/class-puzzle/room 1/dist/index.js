// 1) Set a class called "Pawn".
// 2) Assign its initial position on the board with coordinates (x=0 to 7, y=0 to 1) (p1 = new Pawn(7,1)).
// 3) Enable the Pawn to move to a new location by using methods like "goRight," "goLeft," "goUp," and "goDown," allowing for a single step in any direction.
// 4) Restrict the Pawn from going beyond the boundaries of (0,0 -> 7,7) in terms of (x,y) coordinates.
// 5) Implement a method called "getLocation" that allows the Pawn to report its current position, for example, {x:3,y:7}
// 6) At the end of each move, record the Pawn's location using the "getLocation" function.
// p1.goLeft() -> {x:2,y:7}
// p1.goUp() -> {x:2, y:6}
var Pawn = /** @class */ (function () {
    function Pawn(x, y) {
        try {
            // debugger;
            if (x < 0 || x > 7 || y < 0 || y > 7)
                throw new Error("pawn is not in range");
            this.x = x;
            this.y = y;
        }
        catch (error) {
            console.error(error);
            this.x = 0;
            this.y = 0;
        }
    }
    Pawn.prototype.goRight = function () {
        try {
            if (this.x >= 7)
                throw Error("pawn is not in range");
            this.x++;
            this.getLocation();
        }
        catch (error) {
            console.error(error);
        }
    };
    Pawn.prototype.goLeft = function () {
        try {
            if (this.x < 0)
                throw Error("pawn is not in range");
            this.x--;
            this.getLocation();
        }
        catch (error) {
            console.error(error);
        }
    };
    Pawn.prototype.goUp = function () {
        try {
            if (this.y < 0)
                throw Error("pawn is not in range");
            this.y--;
            this.getLocation();
        }
        catch (error) {
            console.error(error);
        }
    };
    Pawn.prototype.goDown = function () {
        try {
            if (this.y >= 7)
                throw Error("pawn is not in range");
            this.y++;
            this.getLocation();
        }
        catch (error) {
            console.error(error);
        }
    };
    Pawn.prototype.getLocation = function () {
        console.log("your pown position is: " + this.x + ", " + this.y);
        return { x: this.x, y: this.y };
    };
    return Pawn;
}());
var newPawn = new Pawn(7, 7);
newPawn.goDown();
newPawn.goUp();
newPawn.goRight();
newPawn.goDown();
newPawn.goLeft();
// newPawn.getLocation();
