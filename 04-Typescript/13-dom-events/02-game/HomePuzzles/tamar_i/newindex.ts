//define the bord max width and hight

const maxwidth: number = 400;
const maxhight: number = 400;

//insert the pawn from HTML to JS

const pawn = document.querySelector("#pawn") as HTMLDivElement;

//move the pawn using keybourd in the bord area

let x: number = 15; //store the x position of the pawn on the bord
let y: number = 15; //stor the start y position of the pawn on the bord
const xMove: number = 15; //the jump move in x axis
const yMove: number = 15; //the jump move in y axis

document.addEventListener('keyup', (event: KeyboardEvent) => {
    console.log(event);
    switch (event.key) {
        case 'ArrowLeft': //move left
            if (x > 15) {
                pawn.style.left = `${pawn.offsetLeft - xMove}px`;
                x -= xMove
                console.log(x);
            }
            break;
        case 'ArrowRight': //move right
            if (x < maxwidth) {
                pawn.style.left = `${pawn.offsetLeft + xMove}px`;
                x += xMove;
                console.log(x);
            }
            break;
        case 'ArrowUp': //move up
            if (y > 15) {
                pawn.style.top = `${pawn.offsetTop - yMove}px`;
                console.log(y);
            }
            break;

        case 'ArrowDown': //move down
            if (y < maxhight) {
                pawn.style.top = `${pawn.offsetTop + yMove}px`;
                y += yMove;
                console.log(y);
            }
            break;
    }
})

