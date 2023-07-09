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
                return "./images/heart-sign.jpg";
            }
            case "diamond": {
                return "./images/diamond-sign.jpg";
            }
            case "club": {
                return "./images/club-sign.jpg";
            }
            case "spade": {
                return "./images/sapad-sign.jpg";
            }
        }
    };
    Card.prototype.renderCard = function (root) {
        if (root === void 0) { root = document.body.querySelector(".cards"); }
        root.innerHTML += "<div class=\"card\" name=\"" + (this.cardNumber + this.cardSign) + "\">\n              <h3 class=\"cardN\">" + this.cardNumber + "</h3>\n              <img class=\"cardS\" src=\"" + this.srcImgCard + "\"  alt=\"\">\n              </div>";
    };
    return Card;
}());
var Player = /** @class */ (function () {
    function Player(userName, chips, isActive, pCards) {
        if (chips === void 0) { chips = 100000; }
        if (isActive === void 0) { isActive = true; }
        if (pCards === void 0) { pCards = get2RandomCards(); }
        this.userName = userName;
        this.chips = chips;
        this.isActive = isActive;
        this.pCards = pCards;
        this.pCards = this.pCards.map(function (c) { return new Card(c.cardNumber, c.cardSign); });
    }
    Player.prototype.setToUnActive = function () {
        this.isActive = false;
    };
    Player.prototype.renderMyPanel = function () {
        try {
            this.pCards.forEach(function (c) {
                return c.renderCard(document.querySelector(".myCards"));
            });
            document.querySelector(".myChips").innerHTML = this.chips.toString();
        }
        catch (error) {
            console.error(error);
        }
    };
    return Player;
}());
