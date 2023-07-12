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
    function Player(userName, imgSrc, chips, isActive, isTurn, pCards, allCards, movesInRound, roundNumber) {
        if (imgSrc === void 0) { imgSrc = ""; }
        if (chips === void 0) { chips = 100000; }
        if (isActive === void 0) { isActive = true; }
        if (isTurn === void 0) { isTurn = false; }
        if (pCards === void 0) { pCards = get2RandomCards(); }
        if (allCards === void 0) { allCards = pCards; }
        if (movesInRound === void 0) { movesInRound = []; }
        if (roundNumber === void 0) { roundNumber = movesInRound.length - 1; }
        this.userName = userName;
        this.imgSrc = imgSrc;
        this.chips = chips;
        this.isActive = isActive;
        this.isTurn = isTurn;
        this.pCards = pCards;
        this.allCards = allCards;
        this.movesInRound = movesInRound;
        this.roundNumber = roundNumber;
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
    Player.prototype.addCardToPlayer = function (card) {
        this.allCards.push(card);
    };
    Player.prototype.doingTurn = function (activePlayers, thisIndex) {
        console.log(this.userName + " is doing somethig......");
        var movesOptions = getMoveOption(activePlayers, thisIndex);
        // let ChanceToBet = getChanceToBet(this)
    };
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
