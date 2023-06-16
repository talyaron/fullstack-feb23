//1
//css- put a bord pic 
//css- put on the bord a pawn pic
//catch the pawn using queryselector

const pawn = document.querySelector("#pawn") as HTMLDivElement;

//make function that mouse catch the pawn (initial click)
document.addEventListener("click", (ev: KeyboardEvent) => {
console.log(ev);
switch (ev.key) {
    case 'ArrowUp':
        pawn.style.top = `${pawn.offsetTop - 10}px`;
        break;
    case 'ArrowDown':
        box.style.top = `${box.offsetTop + 10}px`;
        break;
    case 'ArrowLeft':
        box.style.left = `${box.offsetLeft - 10}px`;
        break;
    case 'ArrowRight':

        box.style.left = `${box.offsetLeft + 10}px`;
        break;
    case " ":
        const urlMonster = 'url("./dist/packman-monster.png")'
        const urlPackman = 'url("./dist/packman.png")'

        if (box.style.backgroundImage === urlMonster) {
            box.style.backgroundImage = urlPackman;
        } else {
            box.style.backgroundImage = urlMonster;
        }

        break;



}F
})



//make function that nove the pawn using keybourd


