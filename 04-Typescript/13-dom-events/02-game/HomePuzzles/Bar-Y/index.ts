// 2) create checkers board (דמקה).
// create a pawn that moves accross the board. (using the keyboard).

const pawn = document.querySelector('#pawn') as HTMLDivElement;

document.addEventListener('keyup', (event: KeyboardEvent) => {
    console.log(event);
    switch (event.key) {
        case 'ArrowUp':
            pawn.style.top = `${pawn.offsetTop - 123}px`;
            break;
        case 'ArrowDown':
            pawn.style.top = `${pawn.offsetTop + 123}px`;
            break;
        case 'ArrowLeft':
            pawn.style.left = `${pawn.offsetLeft - 123}px`;
            break;
        case 'ArrowRight':
            pawn.style.left = `${pawn.offsetLeft + 123}px`;
            break;
    }
});


// 3) create many pawns that can move (press one of them and move it using the keyboard)