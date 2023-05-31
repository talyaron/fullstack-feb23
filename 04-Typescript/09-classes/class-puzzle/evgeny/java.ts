

// const user= prompt("enter")



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
            
        } catch (error) {
            console.error(error)
            return "invalid move"
        }
    }
    getLocation(){
        console.log(`the position of the pawn on the number line is ${this.numberline} and on the letterline${this.letterline}.`)
    }
    
}


let p1= new pawn(7,1)
let p2= new pawn(9,1)
console.log(p2.goUp())