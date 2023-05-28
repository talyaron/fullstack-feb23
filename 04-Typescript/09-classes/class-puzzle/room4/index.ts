class Pawn {
    x: number;
    y: number;

    constructor(
        x: number,
        y: number,
    ) {
        try {
            if (x > 7 || x < 0) throw new Error('Out of range')
            if (y > 1 || y < 0) throw new Error('Out of range')
            this.x = x;
            this.y = y;
        } catch (error) {
            console.error(error)
            return
        }
    }
    goRight() {
        try {
            if (this.x > 6) throw new Error('no more moves')
            this.x++
        }
        catch (error) {
            console.error(error)
            return
        }
        console.log( this.getLocation())
    }
    goLeft() {
        try {
            if (this.x < 1) throw new Error('no more moves')
            this.x--
        } catch (error) {
            console.error(error)
            return
        }
        console.log(this.getLocation())
    }
    goUp() {
        try {
            if (this.y < 1) throw new Error('no more moves')
            this.y--
        }
        catch (error) {
            console.error(error)
            return
        }
        console.log(this.getLocation())
    }
    goDown() {
        try {
            if (this.y > 6) throw new Error('no more moves')
            this.y++
        } catch (error) {
            console.error(error)
            return
        }
        console.log(this.getLocation())
    }
    getLocation() {
        return `${this.x}, ${this.y}`
    }
}

const p1 = new Pawn(5, 1)
p1.goRight()
// con3sole.log(p1.getLocation())
p1.goRight()
// console.log(p1.getLocation())
p1.goDown()
// console.log(p1.getLocation())

