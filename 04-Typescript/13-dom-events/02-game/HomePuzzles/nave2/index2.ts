const Pawns = document.querySelectorAll(`.pawn`);
Pawns.forEach((pawn: HTMLDivElement) => {
  pawn.addEventListener(`click`, (event) => {
    addingClassByClick(pawn);
  });
});
Pawns.forEach((pawn) => {
  pawn.onclick = (ev) => {
    console.dir(ev);
    document.addEventListener("keyup", (event: KeyboardEvent) => {
      for (let i = 0; i < Pawns.length; i++) {
        if (Pawns[i].classList[2] === `clicked`) {
          switch (event.key) {
            case "ArrowUp":
              Pawns[i].style.top = `${Pawns[i].offsetTop - 100}px`;
              event.stopImmediatePropagation();

              break;
            case "ArrowDown":
              Pawns[i].style.top = `${Pawns[i].offsetTop + 112.5}px`;
              event.stopImmediatePropagation();

              break;
            case "ArrowLeft":
              Pawns[i].style.left = `${Pawns[i].offsetLeft - 112.5}px`;
              event.stopImmediatePropagation();

              break;
            case "ArrowRight":
              Pawns[i].style.left = `${Pawns[i].offsetLeft + 112.5}px`;
              event.stopImmediatePropagation();

              break;
          }
        }
      }
    });
  };
})

function addingClassByClick(pawn: HTMLDivElement) {
  try {
    pawn.classList.add(`clicked`);
    for (let i = 0; i < Pawns.length; i++) {
      for (let n = 0; n < Pawns[i].classList.length; n++)
        if (Pawns[i].classList[n] === `clicked`) {
          Pawns[i].classList.remove(`clicked`);
        }
      pawn.classList.add(`clicked`);
    }
    return pawn;
  } catch (error) {
    console.error(error);
    return;
  }
}