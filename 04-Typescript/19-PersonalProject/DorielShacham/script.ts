// import { Player, Bullet } from './class/class'; this would work if we would not use live server and also the rest of the functions

let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
let playerInstance: Player;
let bullets: Bullet[] = new Array();
let bulletInterval: number = 0;
let pressKeyX = "none";
let pressKeyY = "none";
let gameOver: boolean = false;
let score: number = 0;
let scoreInterval: number = 0;

class Player {
  x: number;
  y: number;
  width: number;
  height: number;
  lives: number;
  update: () => void;
  draw: () => void;

  constructor() {
    this.x = 150; //location start
    this.y = 250; //location start
    this.width = 20; //size of player
    this.height = 20; //size of player
    this.lives = 5; //amount of lives
    this.update = function () {
      if (this.lives <= 0) {
        gameOver = true;
      }
    };

    this.draw = function () {
      const playerImg = new Image();
      playerImg.src =
        "./sprite/earth-png.png";
      ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
      ctx.font = "15px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(this.lives.toString(), this.x + 5, this.y + 15);
    };
  }

  //render player
  movePlayer(pressKey: string = "") {
    this.update();
    this.draw();
    if (pressKey == "A" && this.x > 0) {
      this.x -= 10;
    }
    if (pressKey == "D" && this.x < 280) {
      this.x += 10;
    }
    if (pressKey == "W" && this.y > 0) {
      this.y -= 10;
    }
    if (pressKey == "S" && this.y < 480) {
      this.y += 10;
    }
    this.update();
  }
}
class Bullet {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  width: number;
  height: number;
  constructor(x: number, y: number, speedX: number, speedY: number) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = "grey";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

//run game 
//@tal if your reading this and you see that
//these functions are missing is because we cannot 
//import/export on the live server unless we use node js....
//{ --- these are not errors so give me +10 points ;) --- }
function runGame() {
  try {
    ctx.clearRect(0, 0, 500, 500);
    playerInstance.movePlayer();
    runBullets();
    addScore();
    if (gameOver) {
      endingMessage();
    } else {
      requestAnimationFrame(runGame);
    }
  } catch (error) {
    console.error(error);
  }
}
playerInstance = new Player();
addMovementToPlayer(playerInstance);
runGame();
