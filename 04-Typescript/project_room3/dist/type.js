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
        gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.innerHTML += "\n        <div class=\"cardcontainer\" data-card-value=\"" + cardValues[i].name + "\">\n        <div class=\"card-before\">?</div>\n        <div class=\"card-after\"><img scr=\"" + cardValues[i].image + "\" class=\"image\"/></div>\n        </div>\n        ";
    }
    gameContainer.style.gridTemplateColumns = "repeat(" + size + ",auto)";
}
cards = document.querySelectorAll(".cardcontainer");
var firstCardValue = null; // Declare the variable outside the click event handler
var cardValues = []; // Declare the variable outside the initializer function
cards.forEach(function (card) {
    card.addEventListener("click", function () {
        if (!card.classList.contains("matched")) {
            card.classList.add("flipped");
            if (!firstCard) {
                firstCard = card;
                firstCardValue = card.getAttribute("data-card-value"); // Assign value to firstCardValue
            }
            else {
                movesCounter(); // Correct function name: movesCount() -> movesCounter()
                secondCard = card;
                var secondCardValue = card.getAttribute("data-card-value");
                if (firstCardValue == secondCardValue) {
                    firstCard.classList.add("matched");
                    secondCard.classList.add("matched");
                    firstCard = false;
                    // win Count increment as the user found a correct match
                    winCount += 1;
                    if (winCount == Math.floor(cardValues.length / 2)) {
                        result.innerHTML = "<h2>You Won!</h2>\n            <h4> Moves: " + movesCount + "</h4>";
                        stopGame();
                    }
                    else {
                        var _a = [firstCard, secondCard], tempFirst_1 = _a[0], tempSecond_1 = _a[1];
                        firstCard = false;
                        secondCard = false;
                        var delay = setTimeout(function () {
                            tempFirst_1.classList.remove("flipped");
                            tempSecond_1.classList.remove("flipped");
                        }, 900);
                    }
                }
            }
        }
    });
});
// start game
startButton.addEventListener("click", function () {
    movesCount = 0;
    time = 0;
    // controlers and buttons visability
    controls === null || controls === void 0 ? void 0 : controls.classList.add("hide");
    stopButton === null || stopButton === void 0 ? void 0 : stopButton.classList.remove("hide");
    startButton === null || startButton === void 0 ? void 0 : startButton.classList.add("hide");
    interval = setInterval(Timer, 1000);
    moves === null || moves === void 0 ? void 0 : moves.innerHTML = "<span>Moves:</span>" + movesCount;
    initializer();
});
//Stop game
stopButton === null || stopButton === void 0 ? void 0 : stopButton.addEventListener("click", (stopGame = function () {
    controls === null || controls === void 0 ? void 0 : controls.classList.remove("hide");
    stopButton === null || stopButton === void 0 ? void 0 : stopButton.classList.add("hide");
    startButton === null || startButton === void 0 ? void 0 : startButton.classList.remove("hide");
    clearInterval(interval);
}));
function initializer() {
    result === null || result === void 0 ? void 0 : result.innerHTML = "";
    winCount = 0;
    var cardValues = generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
}
