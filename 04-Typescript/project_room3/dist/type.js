// index.ts
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Import the required DOM elements
var moves = document.querySelector("#movesCount");
var timeValue = document.querySelector("#time");
var startButton = document.querySelector("#start");
var stopButton = document.querySelector("#stop");
var gameContainer = document.querySelector(".game_Container");
var result = document.querySelector("#result");
var controls = document.querySelector(".controls_Container");
var cards;
var interval;
var firstCard = false;
var secondCard = false;
var stopGame;
var time;
var firstCardValue;
var Item = /** @class */ (function () {
    function Item(name, image) {
        this.name = name;
        this.image = image;
    }
    return Item;
}());
// Items array
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
// Time
var seconds = 0;
var minutes = 0;
// Moves and win count
var movesCount = 0;
var winCount = 0;
// Timer
function Timer() {
    seconds += 1;
    if (seconds === 60) {
        minutes += 1;
        seconds = 0;
    }
    var secondsValue = seconds < 10 ? "0" + seconds : seconds;
    var minutesValue = minutes < 10 ? "0" + minutes : minutes;
    timeValue.innerHTML = "<span>Time:</span>" + minutesValue + ":" + secondsValue;
}
// Calculating moves
function movesCounter() {
    movesCount += 1;
    moves.innerHTML = "<span>Moves:</span>" + movesCount;
}
// Pick 8 random objects from the items array
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
    gameContainer.innerHTML = "";
    cardValues = __spreadArrays(cardValues, cardValues);
    cardValues.sort(function () { return Math.random() - 0.5; });
    for (var i = 0; i < size * size; i++) {
        gameContainer.innerHTML += "\n      <div class=\"card_container\" data-card-value=\"" + cardValues[i].name + "\">\n        <div class=\"card_before\">?</div>\n        <div class=\"card_after\"><img src=\"" + cardValues[i].image + "\" class=\"image\"/></div>\n      </div>\n    ";
    }
    gameContainer.style.gridTemplateColumns = "repeat(" + size + ", auto)";
    cards = document.querySelectorAll(".card_container");
    firstCard = false;
    secondCard = false;
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            if (!card.classList.contains("matched") && !secondCard) {
                card.classList.add("flipped");
                if (!firstCard) {
                    firstCard = card;
                    firstCardValue = card.getAttribute("data-card-value");
                }
                else {
                    movesCounter();
                    secondCard = card;
                    var secondCardValue = card.getAttribute("data-card-value");
                    if (firstCardValue == secondCardValue) {
                        firstCard.classList.add("matched");
                        secondCard.classList.add("matched");
                        firstCard = false;
                        secondCard = false;
                        winCount += 1;
                        if (winCount == Math.floor(cardValues.length / 2)) {
                            result.innerHTML = "<h2>You Won!</h2><h4>Moves: " + movesCount + "</h4>";
                            stopGame === null || stopGame === void 0 ? void 0 : stopGame();
                        }
                    }
                    else {
                        var _a = [firstCard, secondCard], tempFirst_1 = _a[0], tempSecond_1 = _a[1];
                        setTimeout(function () {
                            tempFirst_1.classList.remove("flipped");
                            tempSecond_1.classList.remove("flipped");
                            firstCard = false;
                            secondCard = false;
                        }, 900);
                    }
                }
            }
        });
    });
}
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
});
function initializer() {
    result.innerHTML = "";
    winCount = 0;
    var cardValues = generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
}
