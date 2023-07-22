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
//Items array
var items = [
    { name: "java", image: "img/java.png" },
    { name: "c++", image: "img/C++.png" },
    { name: "css", image: "img/css.webp" },
    { name: "html", image: "img/html.png" },
    { name: "js", image: "img/js.jpeg" },
    { name: "python", image: "img/Python.png" },
    { name: "react", image: "img/React.png" },
    { name: "git", image: "img/git.png" },
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
        gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.innerHTML += "\n        <div class=\"cardcontainer\" data-card-value=\"" + cardValues[i].name + "\">\n        <div class=\"card-before\">?</div>\n        <div class=\"card-after\"><img scr=\"" + cardValues[i].image + "\" class=\"image\"/></div>\n        </div>\n        ";
    }
    gameContainer.style.gridTemplateColumns = "repeat(" + size + ",auto)";
}
function initializer() {
    result === null || result === void 0 ? void 0 : result.innerHTML = "";
    winCount = 0;
    var cardValues = generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
}
initializer();
