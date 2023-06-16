//1
//css- put a bord pic 
//css- put on the bord a pawn pic
//catch the pawn using queryselector

const pawn = document.querySelector("#pawn") as HTMLDivElement;

//make function that mouse catch the pawn (initial click)
if(pawn){
document.addEventListener("click",initiaAtMouselClick);
}
function initiaAtMouselClick(ev: any){
    console.log(ev);
    if()
switch (ev.key) {
    case 'ArrowUp':
        pawn.style.top = `${pawn.offsetTop - 92}px`;
        break;
    case 'ArrowDown':
        pawn.style.top = `${pawn.offsetTop + 92}px`;
        break;
    case 'ArrowLeft':
        pawn.style.left = `${pawn.offsetLeft - 93}px`;
        break;
    case 'ArrowRight':
        pawn.style.left = `${pawn.offsetLeft + 93}px`;
        break;
}}




//make function that nove the pawn using keybourd


