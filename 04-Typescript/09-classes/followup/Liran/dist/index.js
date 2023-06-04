var Pawn = /** @class */ (function () {
    function Pawn(x, y) {
        try {
            if (x < 0 || x > 7 || y < 0 || y > 7)
                throw new Error("Out of limit");
            this.x = x;
            this.y = y;
        }
        catch (error) {
            console.error(error);
            this.x = 0;
            this.y = 0;
        }
    }
    Pawn.prototype.goLeft = function () {
        try {
            if (this.x == 0)
                throw new Error("Out of limit");
            this.x--;
            this.getLocation();
        }
        catch (error) {
            console.error(error);
        }
    };
    Pawn.prototype.goRight = function () {
        try {
            if (this.x == 7)
                throw new Error("Out of limit");
            this.x++;
            this.getLocation();
        }
        catch (error) {
            console.error(error);
        }
    };
    Pawn.prototype.goUp = function () {
        try {
            if (this.y == 0)
                throw new Error("Out of limit");
            this.y--;
            this.getLocation();
        }
        catch (error) {
            console.error(error);
        }
    };
    Pawn.prototype.goDown = function () {
        try {
            if (this.y == 7)
                throw new Error("Out of limit");
            this.y++;
            this.getLocation();
        }
        catch (error) {
            console.error(error);
        }
    };
    Pawn.prototype.getLocation = function () {
        console.log("{ x:" + this.x + " , y:" + this.y + " }");
        return { x: this.x, y: this.y };
    };
    return Pawn;
}());
var p1 = new Pawn(0, 0);
p1.getLocation();
p1.goUp();
p1.getLocation();
p1.goLeft();
