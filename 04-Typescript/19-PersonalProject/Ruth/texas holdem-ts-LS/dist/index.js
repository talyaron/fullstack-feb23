"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var player_1 = require("./../../DorielShacham/player");
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
var firstPlayers = [new player_1.Player("ruth1")];
var players = getPlayerFromLs() || firstPlayers;
function getPlayerFromLs() {
    try {
        var playersStr = localStorage.getItem("players");
        if (!playersStr)
            return firstPlayers;
        else {
            var playersOnArrayObjs = JSON.parse(playersStr);
            var players_1 = playersOnArrayObjs.map(function (p) {
                return new player_1.Player(p.userName, p.imgSrc, p.chips, p.isActive, p.pCards);
            });
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
function addCardToStage() {
    var root = document.querySelector(".stage");
    if (root.children.length < 6) {
        if (root.children.length > 3) {
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
function checkStatus(cards) {
    checkTwoOfAKind(cards);
}
function checkTwoOfAKind(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_1 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 1) {
            return { value: true };
        }
    };
    for (var i = 0; i < copiedCards.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return false;
}
function checkThreeOfAKind(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_2 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 2) {
            return { value: true };
        }
    };
    for (var i = 0; i < copiedCards.length; i++) {
        var state_2 = _loop_2(i);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    return false;
}
function checkFourOfAKind(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_3 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 3) {
            return { value: true };
        }
    };
    for (var i = 0; i < copiedCards.length; i++) {
        var state_3 = _loop_3(i);
        if (typeof state_3 === "object")
            return state_3.value;
    }
    return false;
}
function checkTwoPairs(cards) {
    var pairs = {};
    cards.forEach(function (card) {
        if (!pairs[card.cardNumber]) {
            pairs[card.cardNumber] = 1;
        }
        else {
            pairs[card.cardNumber]++;
        }
    });
    var pairValues = Object.values(pairs);
    var pairCounts = pairValues.filter(function (count) { return count === 2; });
    return pairCounts.length >= 2;
}
function checkFullHouse(cards) {
    var pairs = {};
    cards.forEach(function (card) {
        if (!pairs[card.cardNumber]) {
            pairs[card.cardNumber] = 1;
        }
        else {
            pairs[card.cardNumber]++;
        }
    });
    var pairValues = Object.values(pairs);
    var pairCounts = pairValues.filter(function (count) { return count === 2; }).length > 0 ? true : false;
    var threeOfKindCounts = pairValues.filter(function (count) { return count === 3; }).length > 0 ? true : false;
    return pairCounts && threeOfKindCounts;
}
function highCard(cards) {
    var cardValues = {
        A: 14,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        J: 11,
        Q: 12,
        K: 13
    };
    var temp = cards[0];
    cards.forEach(function (card) {
        if (cardValues[card.cardNumber] > cardValues[temp.cardNumber]) {
            temp = card;
        }
    });
    return temp;
}
var cards = [
    new Card("2", "heart"),
    new Card("3", "heart"),
    new Card("1", "spade"),
    new Card("10", "club"),
    new Card("5", "club"),
    new Card("8", "diamond"),
];
// console.log(checkTwoOfAKind(cards));
// console.log(checkThreeOfAKind(cards));
// console.log(checkTwoPairs(cards));
// console.log(checkFullHouse(cards));
console.log(highCard(cards));
//---------------------------------------------turn-------------------------------------
function turnOrder(players) {
    var stage = document.querySelector(".stage");
    for (var i = 0; i < players.length; i++) {
        players.map(function (p) { return (p.isActive = false); });
        players[i].setActive();
        addCardToStage();
        players.forEach(function (p, i) {
            return console.log("player in " + i + " index isActive =  " + p.isActive);
        });
        if (i == players.length - 1 && stage.children.length == 7)
            i = 0;
    }
}
var users = [
    new player_1.Player("ruth1!", "https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"),
    new player_1.Player("ruth0908", "https://cdn.pixabay.com/photo/2014/04/05/11/40/chess-316658_1280.jpg"),
    new player_1.Player("ruth765", "https://cdn.pixabay.com/photo/2015/11/21/04/17/grandparents-1054311_1280.jpg"),
];
console.log(users);
turnOrder(users);
function renderPlayersPanel(players) {
    try {
        var playersElement_1 = document.querySelectorAll(".playerPanel");
        players.forEach(function (p, i) {
            p.pCards.forEach(function (c) {
                return c.renderCard(document.querySelector("#player" + i + "Cards"));
            });
            playersElement_1[i].innerHTML = p.chips.toString();
        });
    }
    catch (error) {
        console.error(error);
    }
}
