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
                return "./images/heart-sign1.png";
            }
            case "diamond": {
                return "./images/diamond-sign1.png";
            }
            case "club": {
                return "./images/club-sign1.png";
            }
            case "spade": {
                return "./images/spade-sign1.png";
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
<<<<<<< HEAD
    function Player(userName, chips, isActive, pCards) {
        if (chips === void 0) { chips = 100000; }
        if (isActive === void 0) { isActive = true; }
        if (pCards === void 0) { pCards = get2RandomCards(); }
        this.userName = userName;
=======
    function Player(userName, imgSrc, chips, isActive, pCards) {
        if (imgSrc === void 0) { imgSrc = ""; }
        if (chips === void 0) { chips = 100000; }
        if (isActive === void 0) { isActive = false; }
        if (pCards === void 0) { pCards = get2RandomCards(); }
        this.userName = userName;
        this.imgSrc = imgSrc;
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
        this.chips = chips;
        this.isActive = isActive;
        this.pCards = pCards;
        this.pCards = this.pCards.map(function (c) { return new Card(c.cardNumber, c.cardSign); });
    }
<<<<<<< HEAD
    Player.prototype.setToUnActive = function () {
        this.isActive = false;
=======
    Player.prototype.setActive = function () {
        this.isActive = !this.isActive;
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
    };
    Player.prototype.renderMyPanel = function () {
        try {
            this.pCards.forEach(function (c) {
                return c.renderCard(document.querySelector(".myPanel__cards"));
            });
<<<<<<< HEAD
            document.querySelector(".myPanel__chips").innerHTML = this.chips.toString();
=======
            document.querySelector(".myPanel__chips").innerHTML =
                this.chips.toString();
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
        }
        catch (error) {
            console.error(error);
        }
    };
    return Player;
}());
//------------------Dealer------------------------------
var Dealer = /** @class */ (function () {
    function Dealer(sum) {
        this.sum = sum;
    }
    return Dealer;
}());
