"use strict";

var cardObjectDefinitions = [{
  id: 1,
  imagePath: './images/card-KingHearts.png'
}, {
  id: 2,
  imagePath: './images/card-JackClubs.png'
}, {
  id: 3,
  imagePath: './images/card-QueenDiamonds.png'
}, {
  id: 4,
  imagePath: './images/card-AceSpades.png'
}];
var aceId = 4;
var cardBackImgPath = '/images/card-back-blue.png';
var cards = [];
var playGameButtonElem = document.getElementById('playGame');
var cardContainerElem = document.querySelector('.card-container');
var collapsedGridAreaTemplate = '"a a" "a a"';
var cardCollectionCellClass = ".card-pos-a";
var numCards = cardObjectDefinitions.length;
var cardPositions = [];
var gameInProgress = false;
var shufflingInProgress = false;
var cardsRevealed = false;
var currentGameStatusElem = document.querySelector('.current-status');
var scoreContainerElem = document.querySelector('.header-score-container');
var scoreElem = document.querySelector('.score');
var roundContainerElem = document.querySelector('.header-round-container');
var roundElem = document.querySelector('.round');
var winColor = "green";
var loseColor = "red";
var primaryColor = "black";
var roundNum = 0;
var maxRounds = 4;
var score = 0;
var gameObj = {};
var localStorageGameKey = "HTA";
loadGame();

function gameOver() {
  updateStatusElement(scoreContainerElem, "none");
  updateStatusElement(roundContainerElem, "none");
  var gameOverMessage = "Game Over! Final Score - <span class = 'badge'>".concat(score, "</span> Click 'Play Game' button to play again");
  updateStatusElement(currentGameStatusElem, "block", primaryColor, gameOverMessage);
  gameInProgress = false;
  playGameButtonElem.disabled = false;
}

function endRound() {
  setTimeout(function () {
    if (roundNum == maxRounds) {
      gameOver();
      return;
    } else {
      startRound();
    }
  }, 3000);
}

function chooseCard(card) {
  if (canChooseCard()) {
    evaluateCardChoice(card);
    saveGameObjectToLocalStorage(score, roundNum);
    flipCard(card, false);
    setTimeout(function () {
      flipCards(false);
      updateStatusElement(currentGameStatusElem, "block", primaryColor, "Card positions revealed");
      endRound();
    }, 3000);
    cardsRevealed = true;
  }
}

function calculateScoreToAdd(roundNum) {
  if (roundNum == 1) {
    return 100;
  } else if (roundNum == 2) {
    return 50;
  } else if (roundNum == 3) {
    return 25;
  } else {
    return 10;
  }
}

function calculateScore() {
  var scoreToAdd = calculateScoreToAdd(roundNum);
  score = score + scoreToAdd;
}

function updateScore() {
  calculateScore();
  updateStatusElement(scoreElem, "block", primaryColor, "Score <span class='badge'>".concat(score, "</span>"));
}

function updateStatusElement(elem, display, color, innerHTML) {
  elem.style.display = display;

  if (arguments.length > 2) {
    elem.style.color = color;
    elem.innerHTML = innerHTML;
  }
}

function outputChoiceFeedBack(hit) {
  if (hit) {
    updateStatusElement(currentGameStatusElem, "block", winColor, "Hit!! - Well Done!! :)");
  } else {
    updateStatusElement(currentGameStatusElem, "block", loseColor, "Missed!! :(");
  }
}

function evaluateCardChoice(card) {
  if (card.id == aceId) {
    updateScore();
    outputChoiceFeedBack(true);
  } else {
    outputChoiceFeedBack(false);
  }
}

function canChooseCard() {
  return gameInProgress == true && !shufflingInProgress && !cardsRevealed;
}

function loadGame() {
  createCards();
  cards = document.querySelectorAll('.card');
  cardFlyInEffect();
  playGameButtonElem.addEventListener('click', function () {
    return startGame();
  });
  updateStatusElement(scoreContainerElem, "none");
  updateStatusElement(roundContainerElem, "none");
}

function checkForIncompleteGame() {
  var serializedGameObj = getLocalStorageItemValue(localStorageGameKey);

  if (serializedGameObj) {
    gameObj = getObjectFromJSON(serializedGameObj);

    if (gameObj.round >= maxRounds) {
      removeLocalStorageItem(localStorageGameKey);
    } else {
      if (confirm('Would you like to continue with your last game?')) {
        score = gameObj.score;
        roundNum = gameObj.round;
      }
    }
  }
}

function startGame() {
  initializeNewGame();
  startRound();
}

function initializeNewGame() {
  score = 0;
  roundNum = 0;
  checkForIncompleteGame();
  shufflingInProgress = false;
  updateStatusElement(scoreContainerElem, "flex");
  updateStatusElement(roundContainerElem, "flex");
  updateStatusElement(scoreElem, "block", primaryColor, "Score <span class='badge'>".concat(score, "</span>"));
  updateStatusElement(roundElem, "block", primaryColor, "Round <span class='badge'>".concat(roundNum, "</span>"));
}

function startRound() {
  initializeNewRound();
  collectCards();
  flipCards(true);
  shuffleCards();
}

function initializeNewRound() {
  roundNum++;
  playGameButtonElem.disabled = true;
  gameInProgress = true;
  shufflingInProgress = true;
  cardsRevealed = false;
  updateStatusElement(currentGameStatusElem, "block", primaryColor, "Shuffling...");
  updateStatusElement(roundElem, "block", primaryColor, "Round <span class='badge'>".concat(roundNum, "</span>"));
}

function collectCards() {
  transformGridArea(collapsedGridAreaTemplate);
  addCardsToGridAreaCell(cardCollectionCellClass);
}

function transformGridArea(areas) {
  cardContainerElem.style.gridTemplateAreas = areas;
}

function addCardsToGridAreaCell(cellPositionClassName) {
  var cellPositionElem = document.querySelector(cellPositionClassName);
  cards.forEach(function (card, index) {
    addChildElement(cellPositionElem, card);
  });
}

function flipCard(card, flipToBack) {
  var innerCardElem = card.firstChild;

  if (flipToBack && !innerCardElem.classList.contains('flip-it')) {
    innerCardElem.classList.add('flip-it');
  } else if (innerCardElem.classList.contains('flip-it')) {
    innerCardElem.classList.remove('flip-it');
  }
}

function flipCards(flipToBack) {
  cards.forEach(function (card, index) {
    setTimeout(function () {
      flipCard(card, flipToBack);
    }, index * 100);
  });
}

function cardFlyInEffect() {
  var id = setInterval(flyIn, 5);
  var cardCount = 0;
  var count = 0;

  function flyIn() {
    count++;

    if (cardCount == numCards) {
      clearInterval(id);
      playGameButtonElem.style.display = "inline-block";
    }

    if (count == 1 || count == 250 || count == 500 || count == 750) {
      cardCount++;
      var card = document.getElementById(cardCount);
      card.classList.remove("fly-in");
    }
  }
}

function removeShuffleClasses() {
  cards.forEach(function (card) {
    card.classList.remove("shuffle-left");
    card.classList.remove("shuffle-right");
  });
}

function animateShuffle(shuffleCount) {
  var random1 = Math.floor(Math.random() * numCards) + 1;
  var random2 = Math.floor(Math.random() * numCards) + 1;
  var card1 = document.getElementById(random1);
  var card2 = document.getElementById(random2);

  if (shuffleCount % 4 == 0) {
    card1.classList.toggle("shuffle-left");
    card1.style.zIndex = 100;
  }

  if (shuffleCount % 10 == 0) {
    card2.classList.toggle("shuffle-right");
    card2.style.zIndex = 200;
  }
}

function shuffleCards() {
  var shuffleCount = 0;
  var id = setInterval(shuffle, 12);

  function shuffle() {
    randomizeCardPositions();
    animateShuffle(shuffleCount);

    if (shuffleCount == 500) {
      clearInterval(id);
      shufflingInProgress = false;
      removeShuffleClasses();
      dealCards();
      updateStatusElement(currentGameStatusElem, "block", primaryColor, "Please click the card that you think is the Ace of Spades...");
    } else {
      shuffleCount++;
    }
  }
}

function randomizeCardPositions() {
  var random1 = Math.floor(Math.random() * numCards) + 1;
  var random2 = Math.floor(Math.random() * numCards) + 1;
  var temp = cardPositions[random1 - 1];
  cardPositions[random1 - 1] = cardPositions[random2 - 1];
  cardPositions[random2 - 1] = temp;
}

function dealCards() {
  addCardsToAppropriateCell();
  var areasTemplate = returnGridAreasMappedToCardPos();
  transformGridArea(areasTemplate);
}

function returnGridAreasMappedToCardPos() {
  var firstPart = "";
  var secondPart = "";
  var areas = "";
  cards.forEach(function (card, index) {
    if (cardPositions[index] == 1) {
      areas = areas + "a ";
    } else if (cardPositions[index] == 2) {
      areas = areas + "b ";
    } else if (cardPositions[index] == 3) {
      areas = areas + "c ";
    } else if (cardPositions[index] == 4) {
      areas = areas + "d ";
    }

    if (index == 1) {
      firstPart = areas.substring(0, areas.length - 1);
      areas = "";
    } else if (index == 3) {
      secondPart = areas.substring(0, areas.length - 1);
    }
  });
  return "\"".concat(firstPart, "\" \"").concat(secondPart, "\"");
}

function addCardsToAppropriateCell() {
  cards.forEach(function (card) {
    addCardToGridCell(card);
  });
}

function createCards() {
  cardObjectDefinitions.forEach(function (cardItem) {
    createCard(cardItem);
  });
}

function createCard(cardItem) {
  //create div elements that make up a card
  var cardElem = createElement('div');
  var cardInnerElem = createElement('div');
  var cardFrontElem = createElement('div');
  var cardBackElem = createElement('div'); //create front and back image elements for a card

  var cardFrontImg = createElement('img');
  var cardBackImg = createElement('img'); //add class and id to card element

  addClassToElement(cardElem, 'card');
  addClassToElement(cardElem, 'fly-in');
  addIdToElement(cardElem, cardItem.id); //add class to inner card element

  addClassToElement(cardInnerElem, 'card-inner'); //add class to front card element

  addClassToElement(cardFrontElem, 'card-front'); //add class to back card element

  addClassToElement(cardBackElem, 'card-back'); //add src attribute and appropriate value to img element - back of card

  addSrcToImageElem(cardBackImg, cardBackImgPath); //add src attribute and appropriate value to img element - front of card

  addSrcToImageElem(cardFrontImg, cardItem.imagePath); //assign class to back image element of back of card

  addClassToElement(cardBackImg, 'card-img'); //assign class to front image element of front of card

  addClassToElement(cardFrontImg, 'card-img'); //add front image element as child element to front card element

  addChildElement(cardFrontElem, cardFrontImg); //add back image element as child element to back card element

  addChildElement(cardBackElem, cardBackImg); //add front card element as child element to inner card element

  addChildElement(cardInnerElem, cardFrontElem); //add back card element as child element to inner card element

  addChildElement(cardInnerElem, cardBackElem); //add inner card element as child element to card element

  addChildElement(cardElem, cardInnerElem); //add card element as child element to appropriate grid cell

  addCardToGridCell(cardElem);
  initializeCardPositions(cardElem);
  attatchClickEventHandlerToCard(cardElem);
}

function attatchClickEventHandlerToCard(card) {
  card.addEventListener('click', function () {
    return chooseCard(card);
  });
}

function initializeCardPositions(card) {
  cardPositions.push(card.id);
}

function createElement(elemType) {
  return document.createElement(elemType);
}

function addClassToElement(elem, className) {
  elem.classList.add(className);
}

function addIdToElement(elem, id) {
  elem.id = id;
}

function addSrcToImageElem(imgElem, src) {
  imgElem.src = src;
}

function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem);
}

function addCardToGridCell(card) {
  var cardPositionClassName = mapCardIdToGridCell(card);
  var cardPosElem = document.querySelector(cardPositionClassName);
  addChildElement(cardPosElem, card);
}

function mapCardIdToGridCell(card) {
  if (card.id == 1) {
    return '.card-pos-a';
  } else if (card.id == 2) {
    return '.card-pos-b';
  } else if (card.id == 3) {
    return '.card-pos-c';
  } else if (card.id == 4) {
    return '.card-pos-d';
  }
} //local storage functions


function getSerializedObjectAsJSON(obj) {
  return JSON.stringify(obj);
}

function getObjectFromJSON(json) {
  return JSON.parse(json);
}

function updateLocalStorageItem(key, value) {
  localStorage.setItem(key, value);
}

function removeLocalStorageItem(key) {
  localStorage.removeItem(key);
}

function getLocalStorageItemValue(key) {
  return localStorage.getItem(key);
}

function updateGameObject(score, round) {
  gameObj.score = score;
  gameObj.round = round;
}

function saveGameObjectToLocalStorage(score, round) {
  updateGameObject(score, round);
  updateLocalStorageItem(localStorageGameKey, getSerializedObjectAsJSON(gameObj));
}