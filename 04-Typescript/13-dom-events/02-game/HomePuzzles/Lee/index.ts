const gameboard = document.querySelector(".board")
const numbers = document.querySelector(".numbers")
const letters = document.querySelector(".letters")

let light = true
let letter = "ABCDEFGH"

for (let i = 1; i <= 64; i++) {
    let square = document.createElement("div")
    square.classList.add("square")
    if (!light) {
        square.classList.add("dark")
    }
    light = !light
    if (i % 8 === 0) {
        light = !light
    }
    gameboard.appendChild(square)
}

for (i = 1; i <= 8; i++) {
    let numberli = document.createElement("li")
    numberli.textContent = i
    numbers?.appendChild(numberli)
    let letterli = document.createElement("li")
    letterli.textContent = letter[i - 1]
    letters?.appendChild(letterli)
}


const pawn = document.querySelector('#pawn') as HTMLDivElement;

document.addEventListener('keyup', (event: KeyboardEvent) => {
    console.log(event);
    switch (event.key) {
        case 'ArrowUp':
            pawn.style.top = `${pawn.offsetTop - 155}px`;
            break;
        case 'ArrowDown':
            pawn.style.top = `${pawn.offsetTop + 7}px`;
            break;
        case 'ArrowLeft':
            pawn.style.left = `${pawn.offsetLeft - 400}px`;
            break;
        case 'ArrowRight':
            pawn.style.left = `${pawn.offsetLeft -237}px`;
            break;
    }
});

