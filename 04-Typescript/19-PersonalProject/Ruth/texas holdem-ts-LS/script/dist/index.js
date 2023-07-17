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
var myPlayer = new Player("ruth1", "#", "myPlayer");
var users = [
    new Player("ruth765", "https://cdn.pixabay.com/photo/2015/11/21/04/17/grandparents-1054311_1280.jpg"),
    new Player("ruth0908", "https://cdn.pixabay.com/photo/2014/04/05/11/40/chess-316658_1280.jpg"),
    new Player("ruth765", "https://cdn.pixabay.com/photo/2015/11/21/04/17/grandparents-1054311_1280.jpg"),
    new Player("ruth5645", "https://cdn.pixabay.com/photo/2023/06/22/02/25/motocross-8080377_1280.jpg"),
];
// users.unshift(myPlayer);
var firstPlayers = [myPlayer].concat(users);
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
                return new Player(p.userName, p.imgSrc, p.id, p.chips, p.isActive, p.isTurn, p.pCards, p.allCards, p.movesInRound, p.lastBet, p.roundNumber, p.turnNumber);
            });
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
function createID() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
////----------------------------------------------------turns----------------------------------------------------------------------------
var dealerMoney = 0;
function getMoveOption(activePlayers, thisIndex) {
    var thisPlayer = activePlayers[thisIndex];
    for (var j = thisIndex; j >= 0; j--) {
        if (activePlayers[j].movesInRound[length - 1] == PlayerMovesOption.rise) {
            return ["fold", "rise", "call"];
        }
    }
    for (var i = activePlayers.length - 1; i > thisIndex; i--) {
        if (activePlayers[i].movesInRound[length - 1] == PlayerMovesOption.rise) {
            return ["fold", "rise", "call"];
        }
    }
    return ["rise", "check"];
}
function getPointOfOptionalSet(thisPlayer) {
    var thisPCards = thisPlayer.allCards;
    var setsResult = [
        checkPair(thisPCards),
        checkTwoPairs(thisPCards),
        checkThreeOfAKind(thisPCards),
        checkStraight(thisPCards),
        checkFlush(thisPCards),
        checkFullHouse(thisPCards),
        checkFourOfAKind(thisPCards),
        checkStraightFlush(thisPCards),
        checkRoyalFlush(thisPCards),
    ];
    var maxPointsSet = 0;
    setsResult.forEach(function (res, i) {
        if (res === true)
            maxPointsSet += i + 1;
    });
    return maxPointsSet;
}
function riseBetSizeInThisRound(players, currentPlayerIndex) {
    var PlayerRiseInThisRound = getLastRisePLayer(players, currentPlayerIndex);
    if (PlayerRiseInThisRound) {
        return PlayerRiseInThisRound.lastBet;
    }
    return 0;
}
function getLastRisePLayer(players, currentPlayerIndex) {
    var currentPlayer = players[currentPlayerIndex];
    var round = currentPlayer.movesInRound.length;
    var playerRiseLastInThisRound;
    players.forEach(function (p) {
        if (p.movesInRound[round - 1] == PlayerMovesOption.rise) {
            playerRiseLastInThisRound = p;
        }
    });
    return playerRiseLastInThisRound;
}
function chooseMove(players, movesOptions, sizeOfBet, pointOfOptionalSet, player) {
    var movesOptionsLength = movesOptions.length;
    if (movesOptionsLength === 2) {
        //check or rise
        var randomNumToMove = Math.round(Math.random() * 1);
        var randomMove = movesOptions[randomNumToMove];
        if (pointOfOptionalSet < 2)
            player.checkMove(players);
        if (pointOfOptionalSet == 2) {
            if (randomMove === "rise") {
                player.riseMove(players, sizeOfBet);
            }
            else {
                player.checkMove(players);
            }
        }
        if (pointOfOptionalSet >= 3) {
            player.riseMove(players, sizeOfBet);
        }
    }
    if (movesOptionsLength == 3) {
        //rise or call or fold
        var randomNumToMove = Math.round(Math.random() * 2);
        var randomMove = movesOptions[randomNumToMove];
        var lastBetSize = riseBetSizeInThisRound(players, player.turnNumber);
        if (pointOfOptionalSet < 2)
            if (randomMove == "call" && lastBetSize <= sizeOfBet) {
                player.callMove(players, lastBetSize);
            }
            else {
                player.foldMove(players);
            }
        if (pointOfOptionalSet == 2) {
            if (randomMove == "call" && lastBetSize <= sizeOfBet) {
                player.callMove(players, lastBetSize);
            }
            if (randomMove == "rise" && lastBetSize <= sizeOfBet) {
                player.riseMove(players, sizeOfBet);
            }
            else {
                player.foldMove(players);
            }
        }
        if (pointOfOptionalSet >= 3) {
            if (randomMove == "call") {
                player.callMove(players, player.turnNumber);
            }
            else
                player.riseMove(players, sizeOfBet);
        }
    }
}
function getSizeOfBet(pointOfOptionalSet, playerChips) {
    var randomNum = 0;
    if (pointOfOptionalSet < 2) {
        randomNum = Math.round(Math.random() * (0.05 * playerChips));
    }
    if (pointOfOptionalSet == 2) {
        randomNum = Math.round(Math.random() * (0.2 * playerChips));
    }
    if (pointOfOptionalSet == 3) {
        randomNum = Math.round(Math.random() * (0.4 * playerChips));
    }
    if (pointOfOptionalSet >= 4) {
        randomNum = Math.round(Math.random() * (0.8 * playerChips));
    }
    return randomNum;
}
var counterTurn = 0;
var indexInArray = 0;
function turnOrder(activePlayers) {
    /////----------------------------הוא מדלג על השחקן השני קבוע!!------------------------------------------------------
    var players = activePlayers.filter(function (p) { return p.isActive === true; });
    console.log(players);
    console.log(indexInArray);
    if (players[indexInArray].id == "myPlayer") {
        indexInArray++;
        counterTurn++;
        myTurn(players);
    }
    else {
        indexInArray++;
        counterTurn++;
        document.querySelectorAll("button").forEach(function (button) {
            button.disabled = true;
        });
        if (counterTurn < 5 && indexInArray < players.length) {
            players[indexInArray].doingTurn(players, indexInArray);
            if (players[indexInArray].lastBet > 0) {
                counterTurn = 0;
            }
        }
        else if (counterTurn < 5) {
            addCardToStage();
            counterTurn = 0;
            indexInArray = 0;
        }
        else {
            indexInArray = 0;
        }
    }
}
turnOrder(players);
function myTurn(players) {
    var myPlayer = players.find(function (p) { return p.id == "myPlayer"; });
    var myPlayerIndex = players.findIndex(function (p) { return p.id == "myPlayer"; });
    var myOption = getMoveOption(players, myPlayerIndex);
    console.log((myPlayer === null || myPlayer === void 0 ? void 0 : myPlayer.userName) + " is doing somethig......");
    console.log(myOption);
    playTheButton(myOption);
}
///-----------------------myPlayerMoves------------------------------------------------------------------------------------------------
function playTheButton(myOption) {
    document.querySelectorAll("button").forEach(function (button) {
        button.disabled = false;
    });
    if (myOption.length == 2) {
        //check or rise{
        document.querySelector(".operations__btn--call").disabled = true;
        document.querySelector(".operations__btn--fold").disabled = true;
        document.querySelector(".operations__btn--rise").disabled = false;
        document.querySelector(".operations__btn--check").disabled = false;
    }
    else {
        //call or rise or fold
        document.querySelector(".operations__btn--call").disabled = false;
        document.querySelector(".operations__btn--fold").disabled = false;
        document.querySelector(".operations__btn--rise").disabled = false;
        document.querySelector(".operations__btn--check").disabled = true;
    }
}
function myPlayerHandleCheck() {
    var myPlayer = players.find(function (p) { return p.id == "myPlayer"; });
    myPlayer === null || myPlayer === void 0 ? void 0 : myPlayer.checkMove(players);
    turnOrder(players);
}
function myPlayerHandleFold() {
    var myPlayer = players.find(function (p) { return p.id == "myPlayer"; });
    myPlayer === null || myPlayer === void 0 ? void 0 : myPlayer.foldMove(players);
    turnOrder(players);
}
function myPlayerHandleRise() {
    var myPlayer = players.find(function (p) { return p.id == "myPlayer"; });
    var inputSizeToBet = Number(prompt("Enter your bet here:"));
    while (isNaN(inputSizeToBet)) {
        inputSizeToBet = Number(prompt("Enter again your bet here in number:"));
    }
    myPlayer === null || myPlayer === void 0 ? void 0 : myPlayer.riseMove(players, inputSizeToBet);
    turnOrder(players);
}
function myPlayerHandleCall() {
    var myPlayer = players.find(function (p) { return p.id == "myPlayer"; });
    var myPlayerIndex = players.findIndex(function (p) { return p.id == "myPlayer"; });
    myPlayer === null || myPlayer === void 0 ? void 0 : myPlayer.callMove(players, myPlayerIndex);
    turnOrder(players);
}
//------------------------
//---------------------------Card--------------------
var Card = /** @class */ (function () {
    function Card(cardNumber, cardSign) {
        this.cardNumber = cardNumber;
        this.cardSign = cardSign;
        this.cardName = this.cardNumber + "-" + cardSign;
        this.srcImgCard = this.getSignCardSrc();
    }
    Card.prototype.getSignCardSrc = function () {
        switch (this.cardSign) {
            case "heart": {
                return "../images/heart-sign1.png";
            }
            case "diamond": {
                return "../images/diamond-sign1.png";
            }
            case "club": {
                return "../images/club-sign1.png";
            }
            case "spade": {
                return "../images/spade-sign1.png";
            }
        }
    };
    Card.prototype.renderCard = function (root) {
        if (root === void 0) { root = document.body.querySelector(".cards"); }
        root.innerHTML += "<div class=\"card\" name=\"" + (this.cardNumber + this.cardSign) + "\">\n              <h3 class=\"cardN\">" + this.cardNumber + "</h3>\n              <img class=\"cardS\" src=\"" + this.srcImgCard + "\"  alt=\"\">\n              </div>";
    };
    return Card;
}());
//---------------------------Player--------------------
var Player = /** @class */ (function () {
    function Player(userName, imgSrc, id, chips, isActive, isTurn, pCards, allCards, movesInRound, lastBet, roundNumber, turnNumber) {
        if (imgSrc === void 0) { imgSrc = ""; }
        if (id === void 0) { id = createID(); }
        if (chips === void 0) { chips = 100000; }
        if (isActive === void 0) { isActive = true; }
        if (isTurn === void 0) { isTurn = false; }
        if (pCards === void 0) { pCards = get2RandomCards(); }
        if (allCards === void 0) { allCards = pCards; }
        if (movesInRound === void 0) { movesInRound = []; }
        if (lastBet === void 0) { lastBet = 0; }
        if (roundNumber === void 0) { roundNumber = movesInRound.length - 1; }
        if (turnNumber === void 0) { turnNumber = Player.playerCount++; }
        this.userName = userName;
        this.imgSrc = imgSrc;
        this.id = id;
        this.chips = chips;
        this.isActive = isActive;
        this.isTurn = isTurn;
        this.pCards = pCards;
        this.allCards = allCards;
        this.movesInRound = movesInRound;
        this.lastBet = lastBet;
        this.roundNumber = roundNumber;
        this.turnNumber = turnNumber;
        this.pCards = this.pCards.map(function (c) { return new Card(c.cardNumber, c.cardSign); });
    }
    Player.prototype.setActive = function () {
        this.isActive = !this.isActive;
    };
    Player.prototype.setTurn = function () {
        this.isTurn = !this.isTurn;
    };
    Player.prototype.renderMyPanel = function () {
        try {
            this.pCards.forEach(function (c) {
                return c.renderCard(document.querySelector(".myPanel__cards"));
            });
            document.querySelector(".myPanel__chips").innerHTML =
                this.chips.toString();
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.renderTurn = function () {
        var divID = this.turnNumber;
        console.log(divID);
        var root = document.getElementById("player" + divID + "Panel");
        console.log(root);
        var input = this.lastBet > 0
            ? this.lastBet.toString()
            : this.movesInRound[this.movesInRound.length - 1];
        root.querySelector(".playerPanel__inputChips").innerHTML = " \n  <img src=\"../images/casino-chip.png\" alt=\"\" />\n  <h4>" + input + "</h4>\n  ";
    };
    Player.prototype.addCardToPlayer = function (card) {
        this.allCards.push(card);
    };
    Player.prototype.doingTurn = function (activePlayers, thisIndex) {
        console.log(this.userName + " is doing somethig......");
        var movesOptions = getMoveOption(activePlayers, thisIndex);
        console.log(movesOptions);
        var pointOfOptionalSet = getPointOfOptionalSet(this);
        var sizeOfBet = getSizeOfBet(pointOfOptionalSet, this.chips);
        chooseMove(activePlayers, movesOptions, sizeOfBet, pointOfOptionalSet, this);
    };
    Player.prototype.checkMove = function (players) {
        {
            this.movesInRound.push(PlayerMovesOption.check);
            this.lastBet = 0;
        }
        localStorage.setItem("players", JSON.stringify(players));
        this.renderTurn();
        turnOrder(players);
    };
    Player.prototype.foldMove = function (players) {
        this.movesInRound.push(PlayerMovesOption.fold);
        this.lastBet = 0;
        this.isActive = false;
        localStorage.setItem("players", JSON.stringify(players));
        this.renderTurn();
        turnOrder(players);
    };
    Player.prototype.callMove = function (players, currentPlayerIndex) {
        this.movesInRound.push(PlayerMovesOption.call);
        var betToCall = riseBetSizeInThisRound(players, currentPlayerIndex);
        this.lastBet = betToCall;
        dealerMoney += betToCall;
        this.chips = this.chips - betToCall;
        localStorage.setItem("players", JSON.stringify(players));
        localStorage.setItem("dealerMoney", JSON.stringify(dealerMoney));
        this.renderTurn();
        turnOrder(players);
    };
    Player.prototype.riseMove = function (players, sizeOfBet) {
        this.movesInRound.push(PlayerMovesOption.rise);
        this.lastBet = sizeOfBet;
        dealerMoney += sizeOfBet;
        this.chips -= sizeOfBet;
        localStorage.setItem("players", JSON.stringify(players));
        localStorage.setItem("dealerMoney", JSON.stringify(dealerMoney));
        this.renderTurn();
        turnOrder(players);
    };
    Player.playerCount = 0;
    return Player;
}());
var PlayerMovesOption;
(function (PlayerMovesOption) {
    PlayerMovesOption["fold"] = "fold";
    PlayerMovesOption["check"] = "check";
    PlayerMovesOption["rise"] = "rise";
    PlayerMovesOption["call"] = "call";
})(PlayerMovesOption || (PlayerMovesOption = {}));
//------------------Dealer------------------------------
var Dealer = /** @class */ (function () {
    function Dealer(sum) {
        this.sum = sum;
    }
    return Dealer;
}());
//----------------Round--------------------------------
var Round = /** @class */ (function () {
    function Round(activePlayers, firstPlayer, chipsOnTable, roundNumber) {
        if (activePlayers === void 0) { activePlayers = players; }
        if (firstPlayer === void 0) { firstPlayer = activePlayers[0]; }
        if (chipsOnTable === void 0) { chipsOnTable = 0; }
        if (roundNumber === void 0) { roundNumber = 0; }
        this.activePlayers = activePlayers;
        this.firstPlayer = firstPlayer;
        this.chipsOnTable = chipsOnTable;
        this.roundNumber = roundNumber;
    }
    Round.prototype.setPlayers = function () {
        this.activePlayers = this.activePlayers.filter(function (p) { return p.isActive == true; });
    };
    return Round;
}());
//----------------------------------------poker Set-----------------------------------------------------------------------------------
//royal flush
function checkRoyalFlush(cards) {
    try {
        if (checkFlush(cards) && checkRoyalStraight(cards))
            return true;
        return false;
    }
    catch (error) {
        console.error(error);
    }
}
//straight flush
function checkStraightFlush(cards) {
    try {
        if (checkStraight(cards) && checkRoyalStraight(cards))
            return true;
        return false;
    }
    catch (error) {
        console.error(error);
    }
}
//four of a kind
function checkFourOfAKind(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_2 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 3) {
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
//full house
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
//flush
function checkFlush(cards) {
    try {
        var _loop_3 = function (i) {
            var tempCardsSign = cards.filter(function (c) { return c.cardSign == cards[i].cardSign; });
            if (tempCardsSign.length >= 5) {
                return { value: true };
            }
        };
        for (var i = 0; i < cards.length - 4; i++) {
            var state_2 = _loop_3(i);
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return false;
    }
    catch (error) {
        console.error(error);
    }
}
//straight
function checkStraight(cards) {
    try {
        var cardsNumbers = cards.map(function (card) {
            return getCardNumberValue(card.cardNumber);
        });
        var sortedCardsNumbers = cardsNumbers.sort();
        var count = 0;
        for (var i = 0; i < sortedCardsNumbers.length - 1; i++) {
            if (sortedCardsNumbers[i + 1] - sortedCardsNumbers[i] === 1) {
                count++;
                if (count === 4) {
                    return true;
                }
            }
            else {
                count = 0;
            }
        }
        if (checkRoyalStraight(cards)) {
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
    }
}
function checkRoyalStraight(cards) {
    var cardsNumbers = cards.map(function (card) { return getCardNumberValue(card.cardNumber); });
    var sortedCardsNumbers = cardsNumbers.sort();
    if (sortedCardsNumbers.includes(10) &&
        sortedCardsNumbers.includes(11) &&
        sortedCardsNumbers.includes(12) &&
        sortedCardsNumbers.includes(13) &&
        sortedCardsNumbers.includes(1)) {
        return true;
    }
    return false;
}
//three of a kind
function checkThreeOfAKind(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_4 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 2) {
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
//two pairs
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
//one pair
function checkPair(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_5 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 1) {
            return { value: true };
        }
    };
    for (var i = 0; i < copiedCards.length; i++) {
        var state_4 = _loop_5(i);
        if (typeof state_4 === "object")
            return state_4.value;
    }
    return false;
}
//high card
function getHighCard(cards) {
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
/////////------------------------
function getCardNumberValue(cardNumber) {
    try {
        if (cardNumber === "A")
            return 1;
        if (cardNumber === "J")
            return 11;
        if (cardNumber === "Q")
            return 12;
        if (cardNumber === "K")
            return 13;
        return parseInt(cardNumber);
    }
    catch (error) {
        console.error(error);
        return -1;
    }
}
