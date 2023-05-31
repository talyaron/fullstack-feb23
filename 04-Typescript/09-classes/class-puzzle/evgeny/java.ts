

// const user= prompt("enter")
// 1) Set a class called "Pawn".
// 2) Assign its initial position on the board with coordinates (x=0 to 7, y=0 to 1) (p1 = new Pawn(7,1)).
// 3) Enable the Pawn to move to a new location by using methods like "goRight," "goLeft," "goUp," and "goDown," allowing for a single step in any direction.
// 4) Restrict the Pawn from going beyond the boundaries of (0,0 -> 7,7) in terms of (x,y) coordinates.
// 5) Implement a method called "getLocation" that allows the Pawn to report its current position, for example, {x:3,y:7}
// 6) At the end of each move, record the Pawn's location using the "getLocation" function.

// p1.goLeft() -> {x:2,y:7}
// p1.goUp() -> {x:2, y:6}


class pawn{
    numberline:number;
    letterline:number;
    constructor(
        numberline:number,
        letterline:number,
    ){
        this.numberline=numberline
        this.letterline=letterline
    }
    goUp(){
        try {
            if(this.numberline>8||this.numberline<1) throw new Error("out of the board")
            this.numberline++
            return this.getLocation()
            
        } catch (error) {
            console.error(error)
            
        }
    }
    goDown(){
        try {
            if(this.numberline>8||this.numberline<1) throw new Error("out of the board")
            this.numberline--
            return this.getLocation()
        } catch (error) {
            console.error(error)
            
        }
    }
    goleft(){
        try {
            if(this.letterline>8||this.letterline<1) throw new Error("out of the board")
            this.letterline++
            return this.getLocation()
        } catch (error) {
            console.error(error)
            
        }
    }
    goright(){
        try {
            if(this.letterline>8||this.letterline<1) throw new Error("out of the board")
            this.letterline--
            return this.getLocation()
        } catch (error) {
            console.error(error)
            
        }
    }
    getLocation(){
        console.log(`the position of the pawn on the number line is ${this.numberline} and on the letterline${this.letterline}.`)
    }
    
}


const p1= new pawn(7,1)
let p2= new pawn(5,5)
console.log(p2.getLocation(),"current location")
console.log(p2.goUp())