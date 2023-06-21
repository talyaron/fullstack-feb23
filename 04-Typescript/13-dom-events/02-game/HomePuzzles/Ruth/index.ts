class Pawn {
  constructor(public color: string, public xPos: number, public yPos: number) {}
}

let blacksPawns: Pawn[] = [];
let whitesPawns: Pawn[] = [];

function createBlacksPawns() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        if(i%2==0){
            let pawn = new Pawn("black", (j*2)+1, i);
        }
        else{
            let pawn = new Pawn("black", (j)*2, i);
        }
      blacksPawns.push(pawn);
    }
  }
}

createBlacksPawns()
console.log(blacksPawns);

function createWhitesPawns() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        let pawn = new Pawn("white",  j, 8-i);
        whitesPawns.push(pawn);
      }
    }
  }


  createWhitesPawns()
  console.log(whitesPawns);
  



    if(Math.round(Math.random()*2)==1){
        console.log("chocolate cake");
    }
    else(
        console.log("apple cake");  
    )
    }
  