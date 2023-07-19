// updating the the selected character's image in this page
function updateCharacterInGame() {
    var characterContainer = document.querySelector("#selected-character-image");
    // get back the selected character's image from the localStorage
    var selectedCharacterIndex = localStorage.getItem("selectedCharacterIndex");
    try {
        if (selectedCharacterIndex !== null) {
            var index = Number(selectedCharacterIndex);
            if (index >= 0 && index < characters.length) {
                var selectedCharacter = characters[index];
                characterContainer.src = selectedCharacter.imageProfile;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
// Triggers the function above and ensuring that the seleceted image is updated at the time the page is loaded
window.addEventListener("DOMContentLoaded", updateCharacterInGame);
document.addEventListener('keydown', handleKeyDown);
var character = document.querySelector('.container__character');
var trackContainer = document.querySelector('.container__trackContainer');
var trackImages = Array.from(document.querySelectorAll('.container__trackContainer__track'));
var obstacle = document.querySelector('.container__obstacle');
var obstacleTrain = document.querySelector('.container__obstacleTrain');
var endGameButton = document.getElementById('endGameBtn');
var endGameDiv = document.querySelector('.container__endGame');
var coinsContainer = document.querySelector('.container__coins');
var coinsValue = document.querySelector('#coinsValue');
var trackWidth = trackImages[0].offsetWidth;
var characterWidth = character.offsetWidth;
var stepSize = trackWidth;
var currentPosition = 0;
var initialPosition = -stepSize;
character.style.transform = "translateX(" + initialPosition + "px)";
var coinsCount = 0;
function handleCoinsTouch() {
    coinsCount++;
    updateCoinsValue(coinsCount);
    coinsContainer.style.visibility = 'hidden';
    setTimeout(function () {
        coinsContainer.style.visibility = 'visible';
    }, 1000);
}
coinsContainer.addEventListener('click', handleCoinsTouch);
function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
        if (currentPosition === 0) {
            currentPosition -= stepSize;
        }
        else if (currentPosition === stepSize) {
            currentPosition = 0;
        }
    }
    else if (event.key === 'ArrowRight') {
        if (currentPosition === 0) {
            currentPosition += stepSize;
        }
        else if (currentPosition === -stepSize) {
            currentPosition = 0;
        }
    }
    currentPosition = Math.max(currentPosition, -stepSize);
    currentPosition = Math.min(currentPosition, stepSize);
    var translateValue = currentPosition;
    character.style.transform = "translateX(" + translateValue + "px)";
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
    var trackStyle = getComputedStyle(trackContainer);
    var trackWidth = trackContainer.offsetWidth;
    var trackGap = parseFloat(trackStyle.gap);
    return trackWidth + trackGap;
}
function checkCollision() {
    var characterRect = character.getBoundingClientRect();
    var obstacleRect = obstacle.getBoundingClientRect();
    var obstacleTrainRect = obstacleTrain.getBoundingClientRect();
    var coinsRect = coinsContainer.getBoundingClientRect();
    var isCollidingWithObstacle = (characterRect.top + characterRect.height >= obstacleRect.top &&
        characterRect.top <= obstacleRect.top + obstacleRect.height &&
        characterRect.left + characterRect.width >= obstacleRect.left &&
        characterRect.left <= obstacleRect.left + obstacleRect.width);
    var isCollidingWithObstacleTrain = (characterRect.top + characterRect.height >= obstacleTrainRect.top &&
        characterRect.top <= obstacleTrainRect.top + obstacleTrainRect.height &&
        characterRect.left + characterRect.width >= obstacleTrainRect.left &&
        characterRect.left <= obstacleTrainRect.left + obstacleTrainRect.width);
    var isCollidingWithCoins = (characterRect.top + characterRect.height >= coinsRect.top &&
        characterRect.top <= coinsRect.top + coinsRect.height &&
        characterRect.left + characterRect.width >= coinsRect.left &&
        characterRect.left <= coinsRect.left + coinsRect.width);
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
