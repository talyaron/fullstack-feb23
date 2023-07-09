var cardsNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
];
var cardSign = ["heart", "diamond", "club", "spade"];
var decksCards = [];
cardSign.forEach(function (cardS) {
    cardsNumber.forEach(function (cardN) {
        decksCards.push(new Card(cardN, cardS));
    });
});
localStorage.setItem("deckCards", JSON.stringify(decksCards));
function renderAllCards() {
    var root = document.body.querySelector(".cards");
    var html = decksCards
        .map(function (c) {
        return "<div class=\"card\" name=\"" + (c.cardNumber + c.cardSign) + "\">\n        <h3 class=\"cardN\">" + c.cardNumber + "</h3>\n        <img class=\"cardS\" src=\"" + c.srcImgCard + "\"  alt=\"\">\n        </div>";
    })
        .join(" ");
    root.innerHTML += html;
}
function get2RandomCards() {
    var randomNumCard1 = Math.round(Math.random() * decksCards.length);
    var randomCard1 = decksCards[randomNumCard1];
    decksCards.splice(randomNumCard1, 1);
    var randomNumCard2 = Math.round(Math.random() * decksCards.length);
    var randomCard2 = decksCards[randomNumCard2];
    decksCards.splice(randomNumCard2, 1);
    setDeckCardsInLs();
    return [
        new Card(randomCard1.cardNumber, randomCard1.cardSign),
        new Card(randomCard2.cardNumber, randomCard2.cardSign),
    ];
}
function getRandomCard() {
    var randomNumCard1 = Math.round(Math.random() * decksCards.length);
    var randomCard1 = decksCards[randomNumCard1];
    decksCards.splice(randomNumCard1, 1);
    setDeckCardsInLs();
    return randomCard1;
}
function setDeckCardsInLs() {
    localStorage.setItem("deckCards", JSON.stringify(decksCards));
}
function getDeckCardsFromLs() {
    var decksCardsStr = JSON.parse(localStorage.getItem("deckCards"));
    decksCards = decksCardsStr.map(function (c) { return new Card(c.cardNumber, c.cardSign); });
}
var firstPlayers = [new Player("ruth1")];
var players = getPlayerFromLs() || firstPlayers;
function getPlayerFromLs() {
    try {
        var playersStr = localStorage.getItem("players");
        if (!playersStr)
            return firstPlayers;
        else {
            var playersOnArrayObjs = JSON.parse(playersStr);
            var players_1 = playersOnArrayObjs.map(function (p) { return new Player(p.userName, p.chips, p.isActive, p.pCards); });
            return players_1;
        }
    }
    catch (error) {
        console.error(error);
    }
}
// const players:Player[] =
localStorage.setItem("players", JSON.stringify(players));
players[0].renderMyPanel();
console.log(players);
function addCardToStage(ev) {
    var root = document.querySelector(".stage");
    console.log(ev.target.parentNode.children.length);
    if (ev.target.parentNode.children.length < 6) {
        if (ev.target.parentNode.children.length > 3) {
            var newCard = getRandomCard();
            newCard.renderCard(root);
        }
        else {
            for (var i = 0; i < 3; i++) {
                var newCard = getRandomCard();
                newCard.renderCard(root);
            }
        }
    }
    else
        alert("game stopped!");
}
