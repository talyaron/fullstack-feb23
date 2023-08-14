export class Player{
    x: any;
    y: any;
    width: number;
    height: number;
    speed: number;
<<<<<<< HEAD
=======
  pCards: any;
  chips: any;
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27

    contructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 4;
    }

    draw(ctx){
        ctx.strokesStyle = 'yellow';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    } //shows the Player location and size
}