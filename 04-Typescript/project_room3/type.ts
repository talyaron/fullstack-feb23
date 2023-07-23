<<<<<<< HEAD
// index.ts

// Import the required DOM elements
const moves = document.querySelector("#movesCount") as HTMLElement;
const timeValue = document.querySelector("#time") as HTMLElement;
const startButton = document.querySelector("#start") as HTMLButtonElement;
const stopButton = document.querySelector("#stop") as HTMLButtonElement;
const gameContainer = document.querySelector(".game_Container") as HTMLElement;
const result = document.querySelector("#result") as HTMLElement;
const controls = document.querySelector(".controls_Container") as HTMLElement;
let cards: NodeListOf<HTMLDivElement>;
let interval: NodeJS.Timeout;
let firstCard: HTMLDivElement | false = false;
let secondCard: HTMLDivElement | false = false;
let stopGame: (() => void) | undefined;
let time: number;
let firstCardValue;
let cardValues: Item[];
=======
const moves = document.querySelector("#movesCount");
const timeValue = document.querySelector("#time");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const gameContainer = document.querySelector(".gameContainer");
const result = document.querySelector("#result");
const controls = document.querySelector(".controlsContainer");
let cards;
let interval;
let firstCard = false;
let secondCard = false;
>>>>>>> aec3b195daeea45be61570bc0c9b17f346844787

class Item {
  constructor(public name: string, public image) {}
}

//Items array
const items = [
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
function movesCounter() {
  movesCount += 1;
  moves?.innerHTML = `<span>Moves</span>${movesCount}`;
}

// Pick 8 random object from the items array

function generateRandom() {
  let size = 4;
  let tempArray = [...items];
  let cardValues = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
}

function matrixGenerator(cardValues) {
  let size = 4;
  gameContainer?.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    gameContainer?.innerHTML += `
        <div class="cardcontainer" data-card-value="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after"><img src="${cardValues[i].image}" class="image"/></div>
        </div>
        `;
  }
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;
}

<<<<<<< HEAD
// Start game
startButton.addEventListener("click", () => {
  movesCount = 0;
  time = 0;
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");

  interval = setInterval(Timer, 1000);
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;

  initializer();
});

// Stop game
stopButton.addEventListener("click", () => {
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
  result?.innerHTML = "";
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  matrixGenerator(cardValues);
}

initializer();
