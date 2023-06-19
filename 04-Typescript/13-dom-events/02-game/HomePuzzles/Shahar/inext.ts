const pawn = document.querySelector("#pawn") as HTMLDivElement;

document.addEventListener("keyup", (event: KeyboardEvent) => {
  //if arrow up go up. if arrow down go down...
  console.log(event);
  switch (event.key) {
    case "ArrowUp":
      pawn.style.top = `${pawn.offsetTop - 10}px`;

      break;
    case "ArrowDown":
      pawn.style.top = `${pawn.offsetTop + 10}px`;

      break;
    case "ArrowLeft":
      pawn.style.left = `${pawn.offsetLeft - 10}px`;
      break;
    case "ArrowRight":
      pawn.style.left = `${pawn.offsetLeft + 10}px`;

      break;
    case " ":
      const urlMonster = 'url("https://cdn3.iconfinder.com/data/icons/chess-2/512/640619-pawn_chess_piece-512.png")';
      const urlPackman = 'url("https://cdn3.iconfinder.com/data/icons/chess-2/512/640619-pawn_chess_piece-512.png")';

      if (pawn.style.backgroundImage === urlMonster) {
        pawn.style.backgroundImage = urlPackman;
      } else {
        pawn.style.backgroundImage = urlMonster;
      }

      break;
  }
});
