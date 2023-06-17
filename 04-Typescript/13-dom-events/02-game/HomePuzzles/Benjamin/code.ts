const root = document.querySelector("#root");

for (let i = 0; i < 8; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 8; j++) {
        const box = document.createElement("div");
        box.classList.add("box");

        // Set position data attributes
        box.dataset.row = i.toString();
        box.dataset.column = j.toString();
        row.appendChild(box);
    }

    if (root) {
        root.appendChild(row);
    }
}

const pawn = document.querySelector('#pawn') as HTMLDivElement;








pawn.addEventListener("click", (ev:any)=>{
    document.addEventListener('keyup', (event: KeyboardEvent) => {
        console.log(event);
    
        switch (event.key) {
            case 'ArrowUp':
                pawn.style.top = `${pawn.offsetTop - 105}px`;
                break;
            case 'ArrowDown':
                pawn.style.top = `${pawn.offsetTop + 105}px`;
                break;
            case 'ArrowLeft':
                pawn.style.left = `${pawn.offsetLeft - 120}px`;
                break;
            case 'ArrowRight':
    
            pawn.style.left = `${pawn.offsetLeft + 120}px`;
                break;
            case " ":
               
        }
    });
})
