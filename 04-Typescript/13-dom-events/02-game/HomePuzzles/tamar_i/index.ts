//2
//css- put a bord pic 
//css- put on the bord a pawn pic
//catch the pawn using queryselector
//move the pawn using keyboardevent

const pawn = document.querySelector("#pawn") as HTMLDivElement;
let x: number = 70; //store the start x point on the bord
let y:number = 70; //stor the start y point on the bord
const xMove: number = 90; //the jump move in x axis
const yMove:number = 90; //the jump move in y axis
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
console.log(windowHeight, windowWidth);

document.addEventListener('keyup', (event: KeyboardEvent)=>{
    console.log(event);
    switch (event.key){
        case 'ArrowLeft': //move left
            if(x>70){ 
            pawn.style.left = `${pawn.offsetLeft - xMove}px`;
            x-=xMove
            console.log(x);
            }    
            break;
        case 'ArrowUp': //move up
            if(y>70){
            pawn.style.top = `${pawn.offsetTop - yMove}px`;          
            console.log(y);
            }
            break;
        case 'ArrowRight': //move right
            if(x<windowWidth){
            pawn.style.left = `${pawn.offsetLeft + xMove}px`;
            x+=xMove;
            console.log(x);
            }
            break;
        case 'ArrowDown': //move down
            if(y<windowHeight){
            pawn.style.top = `${pawn.offsetTop + yMove}px`;
            y+=yMove;
            console.log(y);
            }
            break;
    }
})

// let isMoved: boolean = false;

//make function that mouse catch the pawn (initial click)
// if (pawn) {
//     pawn.addEventListener("click", moveByKeybourd); 

// }

// //bild the chatch and release by mouse function

// function isClicked (pawn: any){
//     console.log(pawn); 
//     if (isMoved){
//         pawn.removeEventListener("click", moveByKeybourd);
//         isMoved = !isMoved;
//         return;
//       }
      
//       isMoved = !isMoved;
//       pawn = this;
    
//       pawn.addEventListener("click", moveByKeybourd, false);    
// }

//bild the moveByKeybourd function 

// function moveByKeybourd(ev: any) {
//     console.log(ev);
//     document.addEventListener('keyup', ev: KeyboardEvent) => {
//         switch (ev.key) {
//             case 'ArrowUp':
//                 pawn.style.top = `${pawn.offsetTop - 92}px`;
//                 break;
//             case 'ArrowDown':
//                 pawn.style.top = `${pawn.offsetTop + 92}px`;
//                 break;
//             case 'ArrowLeft':
//                 pawn.style.left = `${pawn.offsetLeft - 93}px`;
//                 break;
//             case 'ArrowRight':
//                 pawn.style.left = `${pawn.offsetLeft + 93}px`;
//                 break;
//         }
// }}
