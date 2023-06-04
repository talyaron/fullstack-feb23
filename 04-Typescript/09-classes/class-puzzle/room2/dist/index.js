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
            if (x < 0 || y < 0 || x > 7 || y > 7)
                throw new Error("you are off the board");
            this.x = x;
            this.y = y;
        }
        catch (error) {
            console.error(error);
            this.x = 0;
            this.y = 0;
        }
    }
    Pawn.prototype.go = function (direction) {
        try {
            switch (direction) {
                case "Up":
                    if (this.y === 0)
                        throw new Error("end of the board");
                    this.y--;
                    break;
                case "Down":
                    if (this.y === 7)
                        throw new Error("end of the board");
                    this.y++;
                    break;
                case "Right":
                    if (this.x === 7)
                        throw new Error("end of the board");
                    this.x++;
                    break;
                case "Left":
                    if (this.x === 0)
                        throw new Error("end of the board");
                    this.x--;
                    break;
            }
            return this.getLocation();
        }
        catch (error) {
            console.error(error);
            return this.getLocation();
        }
    };
    //DRY dont repeat yourself
    // goLeft() {
    //   try {
    //     if (this.x === 0) throw new Error("end of the board");
    //     this.x--;
    //     return this.getLocation();
    //   } catch (error) {
    //     console.error(error);
    //     return this.getLocation();
    //   }
    // }
    // goDown() {
    //   try {
    //     if (this.y === 7) throw new Error("end of the board");
    //     this.y++;
    //     return this.getLocation();
    //   } catch (error) {
    //     console.error(error);
    //     return this.getLocation();
    //   }
    // }
    // goUp() {
    //   try {
    //     if (this.y === 0) throw new Error("end of the board");
    //     this.y--;
    //     return this.getLocation();
    //   } catch (error) {
    //     console.error(error);
    //     return this.getLocation();
    //   }
    // }
    Pawn.prototype.getLocation = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    return Pawn;
}());
var p1 = new Pawn(2, 6);
console.log(p1.getLocation());
console.log(p1.go("Left"));
console.log(p1.go("Left"));
console.log(p1.go("Down"));
console.log(p1.go("Down"));
