//1
//css- put a bord pic 
//css- put on the bord a pawn pic
//catch the pawn using queryselector
//catch the pawn using mousedown
//chack if the pawn move, if not - move it, if yes - release it by mouseup
var pawn = document.querySelector("#pawn");
document.addEventListener('keyup', function (event) {
    console.log(event);
    switch (event.key) {
        case 'ArrowUp':
            pawn.style.top = pawn.offsetTop - 90 + "px";
            break;
        case 'ArrowDown':
            pawn.style.top = pawn.offsetTop + 90 + "px";
            break;
        case 'ArrowLeft':
            pawn.style.left = pawn.offsetLeft - 90 + "px";
            break;
        case 'ArrowRight':
            pawn.style.left = pawn.offsetLeft + 90 + "px";
            break;
    }
});
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
