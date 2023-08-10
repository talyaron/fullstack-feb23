var cards = [
    { id: 1, value: 'A', isFlipped: false },
    { id: 2, value: 'A', isFlipped: false },
    { id: 3, value: 'B', isFlipped: false },
    { id: 4, value: 'B', isFlipped: false },
    { id: 5, value: 'C', isFlipped: false },
    { id: 6, value: 'C', isFlipped: false },
    { id: 7, value: 'D', isFlipped: false },
    { id: 8, value: 'D', isFlipped: false },
];
function shuffleCards(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
}
function createCards() {
    var shuffledCards = shuffleCards(cards);
    var memoryGameElement = document.querySelector('.memory-game');
    if (memoryGameElement) {
        shuffledCards.forEach(function (card) {
            var cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.id = card.id.toString();
            cardElement.dataset.value = card.value;
            memoryGameElement.appendChild(cardElement);
        });
    }
}
function flipCard(cardElement) {
    var cardId = cardElement.dataset.id;
    var card = cards.find(function (c) { return c.id.toString() === cardId; });
    if (card) {
        card.isFlipped = !card.isFlipped;
        cardElement.innerText = card.isFlipped ? card.value : '';
        cardElement.classList.toggle('flipped', card.isFlipped);
        checkForMatch();
    }
}
function checkForMatch() {
    var flippedCards = cards.filter(function (card) { return card.isFlipped; });
    if (flippedCards.length === 2) {
        if (flippedCards[0].value === flippedCards[1].value) {
            setTimeout(function () {
                flippedCards.forEach(function (card) { return (card.isFlipped = false); });
                var flippedElements = document.querySelectorAll('.card.flipped');
                flippedElements.forEach(function (element) { return element.classList.remove('flipped'); });
                if (cards.every(function (card) { return !card.isFlipped; })) {
                    showWinMessage();
                }
            }, 1000);
        }
        else {
            setTimeout(function () {
                flippedCards.forEach(function (card) { return (card.isFlipped = false); });
                var flippedElements = document.querySelectorAll('.card.flipped');
                flippedElements.forEach(function (element) { return element.classList.remove('flipped'); });
            }, 1000);
        }
    }
}
function showWinMessage() {
    var winMessage = document.querySelector('.win-message');
    var restartButton = document.querySelector('.restart-button');
    if (winMessage && restartButton) {
        winMessage.style.display = 'block';
        restartButton.style.display = 'block';
        restartButton.addEventListener('click', resetGame);
    }
}
function resetGame() {
    var memoryGameElement = document.querySelector('.memory-game');
    var winMessage = document.querySelector('.win-message');
    var restartButton = document.querySelector('.restart-button');
    if (memoryGameElement && winMessage && restartButton) {
        memoryGameElement.innerHTML = '';
        winMessage.style.display = 'none';
        restartButton.style.display = 'none';
        cards.forEach(function (card) { return (card.isFlipped = false); });
        createCards();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    createCards();
    var memoryGameElement = document.querySelector('.memory-game');
    if (memoryGameElement) {
        memoryGameElement.addEventListener('click', function (event) {
            var clickedElement = event.target;
            if (clickedElement.classList.contains('card') && !clickedElement.classList.contains('flipped')) {
                flipCard(clickedElement);
            }
        });
    }
});
