const moves = document.querySelector("#moves-count");
const timeValue = document.querySelector("#time");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const gameContainer = document.querySelector(".game-container");
const result = document.querySelector("#result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//Items array
const items = [
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
let seconds = 0;
let minutes = 0;

//moves and win count
let movesCount = 0;
let winCount = 0;

//Timer
function Timer() {
  seconds += 1;
  if ((seconds = 60)) {
    minutes += 1;
    seconds = 0;
  }
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = seconds < 10 ? `0${minutes}` : minutes;
  timeValue?.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
}

// Calculating moves
function movesCounter(){
    movesCount+=1;
    moves?.innerHTML= `<span>Moves</span>${movesCount}`;

}
