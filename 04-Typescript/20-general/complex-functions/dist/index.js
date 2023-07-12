var Player = /** @class */ (function () {
    function Player(userName, imgSrc, chips, isActive, isTurn, pCards, allCard) {
        if (imgSrc === void 0) { imgSrc = ""; }
        if (chips === void 0) { chips = 100000; }
        if (isActive === void 0) { isActive = false; }
        if (isTurn === void 0) { isTurn = false; }
        if (pCards === void 0) { pCards = get2RandomCards(); }
        if (allCard === void 0) { allCard = pCards; }
        this.userName = userName;
        this.imgSrc = imgSrc;
        this.chips = chips;
        this.isActive = isActive;
        this.isTurn = isTurn;
        this.pCards = pCards;
        this.allCard = allCard;
        this.pCards = this.pCards.map(function (c) { return new Card(c.cardNumber, c.cardSign); });
    }
    Player.prototype.setActive = function () {
        this.isActive = !this.isActive;
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
        this.allCard.push(card);
    };
    Player.prototype.doingTurn = function () {
        console.log(this.userName + " is doing somethig......");
    };
    return Player;
}());
function turnsOrder(players) {
    var stageElement = document.querySelector(".stage");
    var currentPlayerIndex = 0; // מספר השחקן הנוכחי בתור
    currentPlayerIndex = performTurn(stageElement, currentPlayerIndex, players); // הפעלת התור הראשון
    // game over
}
var players = [];
turnsOrder(players);
function performTurn(stage, currentPlayerIndex, players) {
    var currentPlayer = players[currentPlayerIndex];
    setActivePlayer(players, currentPlayer);
    currentPlayerIndex++;
    addCardToStage();
    setTimeout(performTurn, 500); // השהייה של 4 שניות לפני תור השחקן הבא
    return currentPlayerIndex;
    function addCardToStage() {
        if (currentPlayerIndex >= players.length && stage.children.length < 6) {
            currentPlayerIndex = 0;
            if (stage.children.length < 6) {
                addCardToStage();
            }
        }
    }
}
function setActivePlayer(players, currentPlayer) {
    players.map(function (p) { return (p.isActive = false); });
    currentPlayer.setActive();
    currentPlayer.doingTurn();
}
