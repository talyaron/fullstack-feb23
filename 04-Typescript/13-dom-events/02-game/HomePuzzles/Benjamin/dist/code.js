var root = document.querySelector("#root");
for (var i = 0; i < 8; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for (var j = 0; j < 8; j++) {
        var box = document.createElement("div");
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
var pawn = document.querySelector('#pawn');
pawn.addEventListener("click", function (ev) {
    document.addEventListener('keyup', function (event) {
        console.log(event);
        switch (event.key) {
            case 'ArrowUp':
                pawn.style.top = pawn.offsetTop - 105 + "px";
                break;
            case 'ArrowDown':
                pawn.style.top = pawn.offsetTop + 105 + "px";
                break;
            case 'ArrowLeft':
                pawn.style.left = pawn.offsetLeft - 120 + "px";
                break;
            case 'ArrowRight':
                pawn.style.left = pawn.offsetLeft + 120 + "px";
                break;
            case " ":
        }
    });
});
