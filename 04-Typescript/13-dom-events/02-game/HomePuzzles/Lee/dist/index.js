var gameboard = document.querySelector(".board");
var numbers = document.querySelector(".numbers");
var letters = document.querySelector(".letters");
var light = true;
var letter = "ABCDEFGH";
for (var i = 1; i <= 64; i++) {
    var square = document.createElement("div");
    square.classList.add("square");
    if (!light) {
        square.classList.add("dark");
    }
    light = !light;
    if (i % 8 === 0) {
        light = !light;
    }
    gameboard.appendChild(square);
}
for (i = 1; i <= 8; i++) {
    var numberli = document.createElement("li");
    numberli.textContent = i;
    numbers === null || numbers === void 0 ? void 0 : numbers.appendChild(numberli);
    var letterli = document.createElement("li");
    letterli.textContent = letter[i - 1];
    letters === null || letters === void 0 ? void 0 : letters.appendChild(letterli);
}
var pawn = document.querySelector('#pawn');
document.addEventListener('keyup', function (event) {
});
