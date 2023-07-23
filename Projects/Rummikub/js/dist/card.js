var Card = /** @class */ (function () {
    function Card(value, color, imgUrl) {
        this.value = value;
        this.color = color;
        this.imgUrl = imgUrl;
    }
    return Card;
}());
var pool = [
    new Card(1, 'yellow', '???'),
    new Card(2, 'yellow', '???'),
    new Card(3, 'yellow', '???'),
    new Card(4, 'yellow', '???'),
    new Card(5, 'yellow', '???'),
    new Card(6, 'yellow', '???'),
    new Card(7, 'yellow', '???'),
    new Card(8, 'yellow', '???'),
    new Card(9, 'yellow', '???'),
    new Card(10, 'yellow', '???'),
    new Card(11, 'yellow', '???'),
    new Card(12, 'yellow', '???'),
    new Card(13, 'yellow', '???'),
    new Card(1, 'black', '???'),
    new Card(2, 'black', '???'),
    new Card(3, 'black', '???'),
    new Card(4, 'black', '???'),
    new Card(5, 'black', '???'),
    new Card(6, 'black', '???'),
    new Card(7, 'black', '???'),
    new Card(8, 'black', '???'),
    new Card(9, 'black', '???'),
    new Card(10, 'black', '???'),
    new Card(11, 'black', '???'),
    new Card(12, 'black', '???'),
    new Card(13, 'black', '???'),
    new Card(1, 'red', '???'),
    new Card(2, 'red', '???'),
    new Card(3, 'red', '???'),
    new Card(4, 'red', '???'),
    new Card(5, 'red', '???'),
    new Card(6, 'red', '???'),
    new Card(7, 'red', '???'),
    new Card(8, 'red', '???'),
    new Card(9, 'red', '???'),
    new Card(10, 'red', '???'),
    new Card(11, 'red', '???'),
    new Card(12, 'red', '???'),
    new Card(13, 'red', '???'),
    new Card(1, 'blue', '???'),
    new Card(2, 'blue', '???'),
    new Card(3, 'blue', '???'),
    new Card(4, 'blue', '???'),
    new Card(5, 'blue', '???'),
    new Card(6, 'blue', '???'),
    new Card(7, 'blue', '???'),
    new Card(8, 'blue', '???'),
    new Card(9, 'blue', '???'),
    new Card(10, 'blue', '???'),
    new Card(11, 'blue', '???'),
    new Card(12, 'blue', '???'),
    new Card(13, 'blue', '???'),
    new Card(1, 'yellow', '???'),
    new Card(2, 'yellow', '???'),
    new Card(3, 'yellow', '???'),
    new Card(4, 'yellow', '???'),
    new Card(5, 'yellow', '???'),
    new Card(6, 'yellow', '???'),
    new Card(7, 'yellow', '???'),
    new Card(8, 'yellow', '???'),
    new Card(9, 'yellow', '???'),
    new Card(10, 'yellow', '???'),
    new Card(11, 'yellow', '???'),
    new Card(12, 'yellow', '???'),
    new Card(13, 'yellow', '???'),
    new Card(1, 'black', '???'),
    new Card(2, 'black', '???'),
    new Card(3, 'black', '???'),
    new Card(4, 'black', '???'),
    new Card(5, 'black', '???'),
    new Card(6, 'black', '???'),
    new Card(7, 'black', '???'),
    new Card(8, 'black', '???'),
    new Card(9, 'black', '???'),
    new Card(10, 'black', '???'),
    new Card(11, 'black', '???'),
    new Card(12, 'black', '???'),
    new Card(13, 'black', '???'),
    new Card(1, 'red', '???'),
    new Card(2, 'red', '???'),
    new Card(3, 'red', '???'),
    new Card(4, 'red', '???'),
    new Card(5, 'red', '???'),
    new Card(6, 'red', '???'),
    new Card(7, 'red', '???'),
    new Card(8, 'red', '???'),
    new Card(9, 'red', '???'),
    new Card(10, 'red', '???'),
    new Card(11, 'red', '???'),
    new Card(12, 'red', '???'),
    new Card(13, 'red', '???'),
    new Card(1, 'blue', '???'),
    new Card(2, 'blue', '???'),
    new Card(3, 'blue', '???'),
    new Card(4, 'blue', '???'),
    new Card(5, 'blue', '???'),
    new Card(6, 'blue', '???'),
    new Card(7, 'blue', '???'),
    new Card(8, 'blue', '???'),
    new Card(9, 'blue', '???'),
    new Card(10, 'blue', '???'),
    new Card(11, 'blue', '???'),
    new Card(12, 'blue', '???'),
    new Card(13, 'blue', '???'),
    new Card('joker', 'black', '???'),
    new Card('joker', 'red', '???'),
];
var players = ['k', 'l'];
var playerCards = [];
function dealCardsToPlayers() {
    try {
        players.forEach(function (player) {
            var dealCardToPlayers = setInterval(function () {
                var indexCardToDeal = Math.floor(Math.random() * (pool.length - 1));
                var cardToDeal = pool[indexCardToDeal];
                playerCards.push(cardToDeal);
                pool.splice(indexCardToDeal, 1);
                if (pool.length < 106 - (13 * (players.length))) {
                    clearInterval(dealCardToPlayers);
                }
            }, 10);
        });
    }
    catch (error) {
        console.error(error);
    }
}
dealCardsToPlayers();
setTimeout(function () {
    sortByColor();
}, 1000);
function sortByColor() {
    try {
        playerCards.sort(function (a, b) {
            if (a.color < b.color) {
                return -1;
            }
            if (a.color > b.color) {
                return 1;
            }
            return 0;
        });
    }
    catch (error) {
        console.error(error);
    }
}
function sortByNumber() {
    try {
        playerCards.sort(function (a, b) {
            if (a.value < b.value) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            return 0;
        });
        console.log(playerCards);
    }
    catch (error) {
        console.error(error);
    }
}
