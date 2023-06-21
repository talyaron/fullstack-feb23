var gameboard = document.querySelector(".gameboard");
function readyBoard() {
    for (var i = 0; i < 64; i++) {
        // gameboard.innerHTML+=`<div id="box${i}" class="gameboard__box"></div>`;
        var box = document.createElement('div');
        box.id = "box" + i;
        box.className = 'gameboard__box';
        gameboard.appendChild(box);
        box.innerHTML = "" + i;
        if (i == 16 || i == 18) {
            box.innerHTML += "<div class=\"gameboard__box__pawn\" id=" + i + " onkeypress=\"pawnMove(" + box + ")\"></div>";
        }
    }
}
function pawnMove(box) {
    console.log(box.key);
    // switch (box.key) {
    //   case 'ArrowUp':
    //       box.style.top = `${box.offsetTop - 10}px`;
    //       break;
    //   case 'ArrowDown':
    //       box.style.top = `${box.offsetTop + 10}px`;
    //       break;
    //   case 'ArrowLeft':
    //       box.style.left = `${box.offsetLeft - 10}px`;
    //       break;
    //   case 'ArrowRight':
    //       box.style.left = `${box.offsetLeft + 10}px`;
    //       break;
    //     }
    console.log(box.id);
    try {
    }
    catch (error) {
        console.error(error);
    }
}
