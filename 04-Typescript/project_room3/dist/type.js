var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var moves = document.querySelector("#movesCount");
var timeValue = document.querySelector("#time");
var startButton = document.querySelector("#start");
var stopButton = document.querySelector("#stop");
var gameContainer = document.querySelector(".gameContainer");
var result = document.querySelector("#result");
var controls = document.querySelector(".controlsContainer");
var cards;
var interval;
var firstCard = false;
var secondCard = false;
<<<<<<< HEAD
var stopGame;
var time;
var firstCardValue;
var cardValues;
=======
>>>>>>> aec3b195daeea45be61570bc0c9b17f346844787
var Item = /** @class */ (function () {
    function Item(name, image) {
        this.name = name;
        this.image = image;
    }
    return Item;
}());
//Items array
var items = [
    new Item("java", "img/java.png"),
    new Item("c++", "img/C.png"),
    new Item("css", "img/css.webp"),
    new Item("html", "img/html.png"),
    new Item("js", "img/js.jpeg"),
    new Item("python", "img/Python.png"),
    new Item("react", "img/React.png"),
    new Item("android", "img/android.png"),
    new Item("git", "img/git.png"),
    new Item("ios", "img/ios.png"),
];
//Time
var seconds = 0;
var minutes = 0;
//moves and win count
var movesCount = 0;
var winCount = 0;
//Timer
function Timer() {
    seconds += 1;
    if ((seconds = 60)) {
        minutes += 1;
        seconds = 0;
    }
    var secondsValue = seconds < 10 ? "0" + seconds : seconds;
    var minutesValue = seconds < 10 ? "0" + minutes : minutes;
    timeValue === null || timeValue === void 0 ? void 0 : timeValue.innerHTML = "<span>Time:</span>" + minutesValue + ":" + secondsValue;
}
// Calculating moves
function movesCounter() {
    movesCount += 1;
    moves === null || moves === void 0 ? void 0 : moves.innerHTML = "<span>Moves</span>" + movesCount;
}
// Pick 8 random object from the items array
function generateRandom() {
    var size = 4;
    var tempArray = __spreadArrays(items);
    var cardValues = [];
    size = (size * size) / 2;
    for (var i = 0; i < size; i++) {
        var randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
}
function matrixGenerator(cardValues) {
    var size = 4;
    gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.innerHTML = "";
    cardValues = __spreadArrays(cardValues, cardValues);
    cardValues.sort(function () { return Math.random() - 0.5; });
    for (var i = 0; i < size * size; i++) {
        gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.innerHTML += "\n        <div class=\"cardcontainer\" data-card-value=\"" + cardValues[i].name + "\">\n        <div class=\"card-before\">?</div>\n        <div class=\"card-after\"><img src=\"" + cardValues[i].image + "\" class=\"image\"/></div>\n        </div>\n        ";
    }
    gameContainer.style.gridTemplateColumns = "repeat(" + size + ",auto)";
}
<<<<<<< HEAD
// Start game
startButton.addEventListener("click", function () {
    movesCount = 0;
    time = 0;
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");
    interval = setInterval(Timer, 1000);
    moves.innerHTML = "<span>Moves:</span>" + movesCount;
    initializer();
});
// Stop game
stopButton.addEventListener("click", function () {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
    if (interval) {
        showResult("Game Failed");
    }
});
=======
>>>>>>> aec3b195daeea45be61570bc0c9b17f346844787
function initializer() {
    result === null || result === void 0 ? void 0 : result.innerHTML = "";
    winCount = 0;
    var cardValues = generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
}
initializer();
