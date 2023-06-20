var gameboard = document.querySelector(".gameboard");
// function readyBoard(){
//     for(let i=0 ;i<64; i++){
//         gameboard?.innerHTML+=`<div id="box${i}" class="gameboard__box"></div>`;
//     }
// }
function readyBoard() {
    for (var j = 1; j <= 1; j++) {
        for (var i = 1; i <= 8; i++) {
            var box = document.createElement('div');
            box.id = "box" + i + " I";
            box.className = 'gameboard__box';
            if (i % 2 === 1) {
                box.style.backgroundColor = "black";
            }
            gameboard.appendChild(box);
        }
        for (var k = 9; k <= 16; k++) {
            var box = document.createElement('div');
            box.id = "box" + k + " K";
            box.className = 'gameboard__box';
            if (k % 2) {
                box.style.backgroundColor = "black";
            }
            gameboard.appendChild(box);
        }
    }
}
