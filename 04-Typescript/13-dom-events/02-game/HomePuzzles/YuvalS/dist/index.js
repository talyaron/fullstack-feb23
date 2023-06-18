var pawn = document.querySelector('.pawn');
var onClick = function (event) {
    console.log(pawn = document.querySelector("#" + event.srcElement.id));
};
window.addEventListener('click', onClick);
// function onClick(){
var pawn = document.querySelector('.pawn');
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
