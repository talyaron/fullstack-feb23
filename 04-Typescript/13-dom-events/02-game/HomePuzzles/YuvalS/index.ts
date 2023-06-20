let pawn = document.querySelector('.pawn') as HTMLDivElement;



// const onClick = (event) => {
//     console.log(pawn = document.querySelector(`#${event.srcElement.id}`)!);

// }

// window.addEventListener('click', onClick);
const pawns = document.querySelectorAll('.pawn') as NodeListOf<HTMLDivElement>;
pawns.forEach(pl => {
    pl.addEventListener('click', (ev) => {
        pawn = ev.target as HTMLDivElement;
       
    });
});

// function onClick(){
    // let pawn = document.querySelector('.pawn') as HTMLDivElement;
document.addEventListener('keydown', (event: KeyboardEvent) => {
    console.log(event);
    
    switch (event.key) {
        case 'ArrowUp':
            pawn.style.top = `${pawn.offsetTop - 50}px`;
            break;
        case 'ArrowDown':
            pawn.style.top = `${pawn.offsetTop + 50}px`;
            break;
        case 'ArrowLeft':
            pawn.style.left = `${pawn.offsetLeft - 50}px`;
            break;
        case 'ArrowRight':

            pawn.style.left = `${pawn.offsetLeft + 50}px`;
            break;
}
})
// }

