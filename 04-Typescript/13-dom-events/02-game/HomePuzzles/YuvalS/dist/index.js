var pawn = document.querySelector('.pawn');
// const onClick = (event) => {
//     console.log(pawn = document.querySelector(`#${event.srcElement.id}`)!);
// }
// window.addEventListener('click', onClick);
var pawns = document.querySelectorAll('.pawn');
pawns.forEach(function (pl) {
    pl.addEventListener('click', function (ev) {
        pawn = ev.target;
    });
});
// function onClick(){
// let pawn = document.querySelector('.pawn') as HTMLDivElement;
document.addEventListener('keydown', function (event) {
    console.log(event);
    switch (event.key) {
        case 'ArrowUp':
            pawn.style.top = pawn.offsetTop - 50 + "px";
            break;
        case 'ArrowDown':
            pawn.style.top = pawn.offsetTop + 50 + "px";
            break;
        case 'ArrowLeft':
            pawn.style.left = pawn.offsetLeft - 50 + "px";
            break;
        case 'ArrowRight':
            pawn.style.left = pawn.offsetLeft + 50 + "px";
            break;
    }
});
// }
