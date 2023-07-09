import {Player} from "./player"
const canvas = document.querySelector("#game") as HTMLCanvasElement;
const ctx: any = canvas.getContext("2d") ; //print

canvas.width = 550;//screen size of the game
canvas.height = 600;//screen size of the game

const player = new Player(canvas.width / 2.2, canvas.height / 1.3);


function gameLoop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx)
}

setInterval(gameLoop, 1000 / 60); //speed of game