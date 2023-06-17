//1
//css- put a bord pic 
//css- put on the bord a pawn pic
//catch the pawn using queryselector
var pawn = document.querySelector("#pawn");
//make function that mouse catch the pawn (initial click)
if (pawn) {
    document.addEventListener("click", initiaAtMouselClick);
}
function initiaAtMouselClick(ev) {
    console.log(ev);
    if ()
        switch (ev.key) {
            case 'ArrowUp':
                pawn.style.top = pawn.offsetTop - 92 + "px";
                break;
            case 'ArrowDown':
                pawn.style.top = pawn.offsetTop + 92 + "px";
                break;
            case 'ArrowLeft':
                pawn.style.left = pawn.offsetLeft - 93 + "px";
                break;
            case 'ArrowRight':
                pawn.style.left = pawn.offsetLeft + 93 + "px";
                break;
        }
}
//make function that nove the pawn using keybourd
