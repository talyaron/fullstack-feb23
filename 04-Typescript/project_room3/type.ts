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

//Items array
const items = [
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

// Pick 8 random object from the items array

function generateRandom(){
    let size= 4;
    let tempArray=[...items];
    let cardValues= []
    size=(size*size)/2;
    for(let i=0;i<size; i++){
        const randomIndex= Math.floor(Math.random()*tempArray.length) 
        cardValues.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex,1);

    }
    return cardValues;
}

function matrixGenerator(cardValues){
    let size= 4
    gameContainer?.innerHTML= "";
    cardValues= [...cardValues,...cardValues]
    cardValues.sort(() => Math.random()-0.5);
    for(let i=0; i<size*size; i++){
        gameContainer?.innerHTML+=`
        <div class="cardcontainer" data-card-value="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after"><img scr="${cardValues[i].image}" class="image"/></div>
        </div>
        `
    }
    gameContainer.style.gridTemplateColumns= `repeat(${size},auto)`;
}

function initializer(){
    result?.innerHTML= "";
    winCount = 0
    let cardValues= generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
}

initializer()