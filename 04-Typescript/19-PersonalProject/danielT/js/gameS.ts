// updating the the selected character's image in this page
function updateCharacterInGame():void{
    const characterContainer = document.querySelector("#selected-character-image") as HTMLImageElement;

    // get back the selected character's image from the localStorage
    const selectedCharacterIndex = localStorage.getItem("selectedCharacterIndex");

    try {
        if(selectedCharacterIndex !== null){
            const index = Number(selectedCharacterIndex);
            if(index >= 0 && index < characters.length){
                const selectedCharacter = characters[index];
                characterContainer.src = selectedCharacter.imageProfile;
            }
        }
    } catch (error) {
        console.error(error);
    }
}
// Triggers the function above and ensuring that the seleceted image is updated at the time the page is loaded
window.addEventListener("DOMContentLoaded", updateCharacterInGame);


document.addEventListener('keydown', handleKeyDown);

const character = document.querySelector('.container__character') as HTMLImageElement;
const trackContainer = document.querySelector('.container__trackContainer') as HTMLElement;
const trackImages = Array.from(document.querySelectorAll('.container__trackContainer__track')) as HTMLElement[];
const obstacle = document.querySelector('.container__obstacle') as HTMLElement;
const obstacleTrain = document.querySelector('.container__obstacleTrain') as HTMLElement;
const endGameButton = document.getElementById('endGameBtn') as HTMLButtonElement;
const endGameDiv = document.querySelector('.container__endGame') as HTMLDivElement;
const coinsContainer = document.querySelector('.container__coins') as HTMLElement;
const coinsValue = document.querySelector('#coinsValue') as HTMLElement;

const trackWidth = trackImages[0].offsetWidth;
const characterWidth = character.offsetWidth;
const stepSize = trackWidth;

let currentPosition = 0;
let initialPosition = -stepSize;

character.style.transform = `translateX(${initialPosition}px)`;

let coinsCount = 0;

function handleCoinsTouch() {
  coinsCount++;
  updateCoinsValue(coinsCount);
  coinsContainer.style.visibility = 'hidden';
  setTimeout(() => {
    coinsContainer.style.visibility = 'visible';
  }, 1000);
}

coinsContainer.addEventListener('click', handleCoinsTouch);

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft') {
    if (currentPosition === 0) {
      currentPosition -= stepSize;
    } else if (currentPosition === stepSize) {
      currentPosition = 0;
    }
  } else if (event.key === 'ArrowRight') {
    if (currentPosition === 0) {
      currentPosition += stepSize;
    } else if (currentPosition === -stepSize) {
      currentPosition = 0;
    }
  }

  currentPosition = Math.max(currentPosition, -stepSize);
  currentPosition = Math.min(currentPosition, stepSize);

  const translateValue = currentPosition;

  character.style.transform = `translateX(${translateValue}px)`;

  if (checkCollision()) {
    // Pause the obstacle animations
    obstacle.style.animationPlayState = 'paused';
    obstacleTrain.style.animationPlayState = 'paused';

    document.removeEventListener('keydown', handleKeyDown);
    coinsContainer.removeEventListener('click', handleCoinsTouch);

    // show the end game btn
    endGameDiv.style.display = 'block';
  }
}

function calculateTrackWidth() {
  const trackStyle = getComputedStyle(trackContainer);
  const trackWidth = trackContainer.offsetWidth;
  const trackGap = parseFloat(trackStyle.gap);

  return trackWidth + trackGap;
}

function checkCollision() {
  const characterRect = character.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();
  const obstacleTrainRect = obstacleTrain.getBoundingClientRect();
  const coinsRect = coinsContainer.getBoundingClientRect();

  const isCollidingWithObstacle = (
    characterRect.top + characterRect.height >= obstacleRect.top &&
    characterRect.top <= obstacleRect.top + obstacleRect.height &&
    characterRect.left + characterRect.width >= obstacleRect.left &&
    characterRect.left <= obstacleRect.left + obstacleRect.width
  );

  const isCollidingWithObstacleTrain = (
    characterRect.top + characterRect.height >= obstacleTrainRect.top &&
    characterRect.top <= obstacleTrainRect.top + obstacleTrainRect.height &&
    characterRect.left + characterRect.width >= obstacleTrainRect.left &&
    characterRect.left <= obstacleTrainRect.left + obstacleTrainRect.width
  );

  const isCollidingWithCoins = (
    characterRect.top + characterRect.height >= coinsRect.top &&
    characterRect.top <= coinsRect.top + coinsRect.height &&
    characterRect.left + characterRect.width >= coinsRect.left &&
    characterRect.left <= coinsRect.left + coinsRect.width
  );

  return isCollidingWithObstacle || isCollidingWithObstacleTrain || isCollidingWithCoins;
}

function goToGameE() {
  window.location.href = '../view/home.html';
}

endGameButton.addEventListener('click', goToGameE);


// const coinsContainer = document.querySelector('.container__coins') as HTMLElement;
// let coinsCount = 0;

// function handleCoinsTouch() {
//     // Increase the coin count by 1
//   coins.addCoins(1); 
//   // Update the "Coins" value on the home page
//   updateCoinsValue(coins.getCoinsValue());

//   coinsContainer.style.visibility = 'hidden'; // Hide the coins until the next come

//   setTimeout(() => {
//     // Show the coins after a delay (adjust this delay as needed)
//     coinsContainer.style.visibility = 'visible'; 
//   }, 1000); 
// }