var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var users = [
    new Player("ruth300290!", "https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"),
    new Player("ruth0908", "https://cdn.pixabay.com/photo/2014/04/05/11/40/chess-316658_1280.jpg"),
    new Player("ruth765", "https://cdn.pixabay.com/photo/2015/11/21/04/17/grandparents-1054311_1280.jpg"),
    new Player("ruth5645", "https://cdn.pixabay.com/photo/2023/06/22/02/25/motocross-8080377_1280.jpg"),
];
var firstPlayers = [new Player("ruth1")].concat(users);
var players = getPlayerFromLs();
function getPlayerFromLs() {
    try {
        var playersStr = localStorage.getItem("players");
        if (!playersStr) {
            console.log(firstPlayers);
            localStorage.setItem("players", JSON.stringify(firstPlayers));
            return firstPlayers;
        }
        else {
            var playersOnArrayObjs = JSON.parse(playersStr);
            var players_1 = playersOnArrayObjs.map(function (p) {
                return new Player(p.userName, p.imgSrc, p.chips, p.isActive, p.isTurn, p.pCards, p.allCards);
            });
            console.log(players_1);
            return players_1;
        }
    }
    catch (error) {
        console.error(error);
    }
}
players[0].renderMyPanel();
//---------------------------------------------render players-------------------------------------
function renderPlayersPanel(players) {
    try {
        var playersElement_1 = document.querySelectorAll(".playerPanel");
        players.forEach(function (p, i) {
            // p.pCards.forEach((c) =>
            //   c.renderCard(document.querySelector(`#player${i+1}Cards`) as HTMLElement),
            // );
            playersElement_1[i].querySelector(".playerPanel__img img").src = p.imgSrc;
            playersElement_1[i].querySelector(".playerPanel__inform__chips").innerHTML = p.chips.toString();
            playersElement_1[i].querySelector(".playerPanel__inform__userName").textContent = p.userName;
        });
    }
    catch (error) {
        console.error(error);
    }
}
renderPlayersPanel(users);
function addCardToStage() {
    var root = document.querySelector(".stage");
    if (root.children.length < 6) {
        if (root.children.length > 3) {
            var newCard_1 = getRandomCard();
            players.forEach(function (p) { return p.addCardToPlayer(newCard_1); });
            localStorage.setItem("players", JSON.stringify(players));
            newCard_1.renderCard(root);
        }
        else {
            var _loop_1 = function (i) {
                var newCard = getRandomCard();
                players.forEach(function (p) { return p.addCardToPlayer(newCard); });
                localStorage.setItem("players", JSON.stringify(players));
                newCard.renderCard(root);
            };
            for (var i = 0; i < 3; i++) {
                _loop_1(i);
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
    var _loop_2 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 1) {
            return { value: true };
        }
    };
    for (var i = 0; i < copiedCards.length; i++) {
        var state_1 = _loop_2(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return false;
}
function checkThreeOfAKind(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_3 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 2) {
            return { value: true };
        }
    };
    for (var i = 0; i < copiedCards.length; i++) {
        var state_2 = _loop_3(i);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    return false;
}
function checkFourOfAKind(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_4 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 3) {
            return { value: true };
        }
    };
    for (var i = 0; i < copiedCards.length; i++) {
        var state_3 = _loop_4(i);
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
function checkHighCard(cards) {
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
function checkStraight(cards) {
    var cardNumbers = cards.map(function (card) { return card.cardNumber; });
    var uniqueCardNumbers = __spreadArrays(new Set(cardNumbers)); // מסננת ערכים ייחודיים
    uniqueCardNumbers.sort(function (a, b) { return Number(a) - Number(b); }); // מיון ערכים בסדר עולה
    var count = 0;
    for (var i = 0; i < uniqueCardNumbers.length - 1; i++) {
        if (Number(uniqueCardNumbers[i + 1]) - Number(uniqueCardNumbers[i]) === 1) {
            count++;
            if (count === 4) {
                return true;
            }
        }
        else {
            count = 0;
        }
    }
    return false;
}
var cards = [
    new Card("2", "heart"),
    new Card("3", "heart"),
    new Card("4", "spade"),
    new Card("10", "club"),
    new Card("5", "club"),
    new Card("6", "diamond"),
];
console.log("hi-----" + checkStraight(cards));
// function playPokerRound() {
//   let round = new Round();
//   function loop() {
//     for (let i = 0; i < round.activePlayers.length; i++) {
//       let currentPlayer = round.activePlayers[i];
//       round.activePlayers.forEach((p) => (p.isActive = false));
//       currentPlayer.isActive = true;
//       setTimeout(currentPlayer.doingTurn, 3000);
//     }
//   }
// }
