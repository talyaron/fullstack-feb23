// 2) create checkers board (דמקה).
// create a pawn that moves accross the board. (using the keyboard).
// 3) create many pawns that can move (press one of them and move it using the keyboard)

let pawns = document.querySelector('.pawns') as HTMLDivElement;

const onClick = (ev) =>{
    console.log(pawns = document.querySelector(`#${ev.srcElement.id}`)!);
}

window.addEventListener('click', onClick);

document.addEventListener('keyup', (event: KeyboardEvent) => {
    // console.log(event);
    switch (event.key) {
        case 'ArrowUp':
            pawns.style.top = `${pawns.offsetTop - 123}px`;
            break;
        case 'ArrowDown':
            pawns.style.top = `${pawns.offsetTop + 123}px`;
            break;
        case 'ArrowLeft':
            pawns.style.left = `${pawns.offsetLeft - 123}px`;
            break;
        case 'ArrowRight':
            pawns.style.left = `${pawns.offsetLeft + 123}px`;
            break;
    }
});