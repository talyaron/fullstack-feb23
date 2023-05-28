class Pawn {
  positionX: number;
  positionY: number;
  constructor(positionX: number, positionY: number) {
    this.positionX = positionX;
    this.positionY = positionY;
  }

  moveRight() {
    if (this.positionX <= 6 && this.positionX >= 0) {
      try {
        this.positionX = this.positionX + 1;
        return [this.positionX, this.positionY];
      } catch (error) {
        console.error(error);
      }
    }
  }
  moveLeft() {
    if (this.positionX <= 7 && this.positionX >= 1) {
      try {
        this.positionX = this.positionX - 1;
        return [this.positionX, this.positionY];
      } catch (error) {
        console.error(error);
      }
    }
  }
  moveTop() {
    if (this.positionY <= 7 && this.positionY >= 1) {
      try {
        this.positionY = this.positionY - 1;
        return [this.positionX, this.positionY];
      } catch (error) {
        console.error(error);
      }
    }
  }
  moveButtom() {
    try {
      if (this.positionY >= 7)
        throw new Error("number is to high");
    if (this.positionY <= 0)
    throw new Error("number is to low");
      this.positionY = this.positionY + 1;
      return [this.positionX, this.positionY];
    } catch (error) {
      console.error(error);
      return undefined
    }
  }
}

// getPosition(){
//     return this.positionX , this.positionY;
// }

// getLocation
// debugger
const position = new Pawn(0, 7);
console.log(`this is position = ${position.moveButtom()}`);
