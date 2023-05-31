class Pawn{
    x:number
    y:number

    constructor(x:number,y:number){
        try {
            if(x < 0 || x > 7 || y < 0 || y > 7)throw new Error("Out of limit")
            this.x = x
            this.y = y
        } catch (error) {
            console.error(error)
            this.x = 0;
            this.y = 0;
        }
    }

    goLeft(){
        try {
            if(this.x == 0)throw new Error("Out of limit")
            this.x--
            this.getLocation()
        } catch (error) {
            console.error(error)
        }
    }

    goRight(){
        try {
            if(this.x == 7)throw new Error("Out of limit")
            this.x++
            this.getLocation()
        } catch (error) {
            console.error(error)
        }
    }

    goUp(){
        try {
            if(this.y == 0)throw new Error("Out of limit")
            this.y--
            this.getLocation()
        } catch (error) {
            console.error(error)
        }
    }

    goDown(){
        try {
            if(this.y == 7)throw new Error("Out of limit")
            this.y++
            this.getLocation()
        } catch (error) {
            console.error(error)
        }
    }

    getLocation(){
        console.log(`{ x:${this.x} , y:${this.y} }`)
        return {x:this.x,y:this.y}
    }
}

const p1 = new Pawn(0,0)
p1.getLocation();
p1.goUp();
p1.getLocation();
p1.goLeft();

