var Pawn = /** @class */ (function () {
    function Pawn(x, y) {
        try {
            if (x > 7 || x < 0)
                throw new Error('Out of range');
            if (y > 1 || y < 0)
                throw new Error('Out of range');
            this.x = x;
            this.y = y;
        }
        catch (error) {
            console.error(error);
            return;
        }
    }
    Pawn.prototype.goRight = function () {
        try {
            if (this.x > 6)
                throw new Error('no more moves');
            this.x++;
        }
        catch (error) {
            console.error(error);
            return;
        }
    };
    Pawn.prototype.goLeft = function () {
        try {
            if (this.x < 1)
                throw new Error('no more moves');
            this.x--;
        }
        catch (error) {
            console.error(error);
            return;
        }
    };
    Pawn.prototype.goUp = function () {
        try {
            if (this.y < 1)
                throw new Error('no more moves');
            this.y--;
        }
        catch (error) {
            console.error(error);
            return;
        }
    };
    Pawn.prototype.goDown = function () {
        try {
            if (this.y > 6)
                throw new Error('no more moves');
            this.y++;
        }
        catch (error) {
            console.error(error);
            return;
        }
    };
    Pawn.prototype.getLocation = function () {
        return this.x + ", " + this.y;
    };
    return Pawn;
}());
var p1 = new Pawn(5, 1);
p1.goRight();
console.log(p1.getLocation());
p1.goRight();
console.log(p1.getLocation());
p1.goDown();
console.log(p1.getLocation());
p1.goDown();
console.log(p1.getLocation());
p1.goDown();
console.log(p1.getLocation());
p1.goDown();
console.log(p1.getLocation());
p1.goDown();
console.log(p1.getLocation());
p1.goDown();
console.log(p1.getLocation());
p1.goDown();
console.log(p1.getLocation());
