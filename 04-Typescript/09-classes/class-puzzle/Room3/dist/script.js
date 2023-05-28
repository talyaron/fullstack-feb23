var Pawn = /** @class */ (function () {
    function Pawn(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    }
    Pawn.prototype.moveRight = function () {
        if (this.positionX <= 6 && this.positionX >= 0) {
            try {
                this.positionX = this.positionX + 1;
                return [this.positionX, this.positionY];
            }
            catch (error) {
                console.error(error);
            }
        }
    };
    Pawn.prototype.moveLeft = function () {
        if (this.positionX <= 7 && this.positionX >= 1) {
            try {
                this.positionX = this.positionX - 1;
                return [this.positionX, this.positionY];
            }
            catch (error) {
                console.error(error);
            }
        }
    };
    Pawn.prototype.moveTop = function () {
        if (this.positionY <= 7 && this.positionY >= 1) {
            try {
                this.positionY = this.positionY - 1;
                return [this.positionX, this.positionY];
            }
            catch (error) {
                console.error(error);
            }
        }
    };
    Pawn.prototype.moveButtom = function () {
        try {
            if (this.positionY >= 7)
                throw new Error("number is to high");
            if (this.positionY <= 0)
                throw new Error("number is to low");
            this.positionY = this.positionY + 1;
            return [this.positionX, this.positionY];
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    };
    return Pawn;
}());
// getPosition(){
//     return this.positionX , this.positionY;
// }
// getLocation
// debugger
var position = new Pawn(0, 7);
console.log("this is position = " + position.moveButtom());
