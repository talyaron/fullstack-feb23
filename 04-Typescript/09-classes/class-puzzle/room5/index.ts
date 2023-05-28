// 1) Set a class called "Pawn".
// 2) Assign its initial position on the board with coordinates (x=0 to 7, y=0 to 1) (p1 = new Pawn(7,1)).
// 3) Enable the Pawn to move to a new location by using methods like "goRight," "goLeft," "goUp," and "goDown," allowing for a single step in any direction.
// 4) Restrict the Pawn from going beyond the boundaries of (0,0 -> 7,7) in terms of (x,y) coordinates.
// 5) Implement a method called "getLocation" that allows the Pawn to report its current position, for example, {x:3,y:7}
// 6) At the end of each move, record the Pawn's location using the "getLocation" function.

// p1.goLeft() -> {x:2,y:7}
// p1.goUp() -> {x:2, y:6}
class Pawn {
    x: number;
    y: number;
    constructor(
        x: number,
        y: number,
    ) {
        this.x = x
        this.y = y
    }
    goRight() {
        try {
            if (this.x < 0 || this.x > 7 || this.y < 0 || this.y > 1) throw new Error("not in a range");
             this.x++
            return this.x;
        } catch (error) {
            console.error(error);

        }

    }
    goLeft() {
        try {
            if (this.x < 0 || this.x > 7 || this.y < 0 || this.y > 1) throw new Error("not in a range");
             this.x--
            return this.x;
        } catch (error) {
            console.error(error);

        }

    }
    goUp() {
        try {
            if (this.x < 0 || this.x > 7 || this.y < 0 || this.y > 1) throw new Error("not in a range");
             this.y--
            return this.y;
        } catch (error) {
            console.error(error);

        }

    }
    goDown() {
        try {
            if (this.x < 0 || this.x > 7 || this.y < 0 || this.y > 1) throw new Error("not in a range");
             this.y++
            return this.y;
        } catch (error) {
            console.error(error);

        }

    }
    getLocation() {
        try {
return `${this.x},${this.y}`
        } catch (error) {
        console.error(error);

        }
    }

}
const p1 = new Pawn(5, 1);
console.log(p1.goRight());


console.log(p1.getLocation());




