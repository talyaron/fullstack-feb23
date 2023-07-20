var moves = document.querySelector("#moves-count");
var timeValue = document.querySelector("#time");
var startButton = document.querySelector("#start");
var stopButton = document.querySelector("#stop");
var gameContainer = document.querySelector(".game-container");
var result = document.querySelector("#result");
var controls = document.querySelector(".controls-container");
var cards;
var interval;
var firstCard = false;
var secondCard = false;
//Items array
var items = [
    { name: "java", image: "java.png" },
    { name: "c++", image: "C++.png" },
    { name: "css", image: "css.webp" },
    { name: "html", image: "html.png" },
    { name: "js", image: "js.jpeg" },
    { name: "python", image: "Python.png" },
    { name: "react", image: "React.png" },
    { name: "git", image: "git.png" },
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
