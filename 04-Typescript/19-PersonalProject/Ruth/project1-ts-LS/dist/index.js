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
    Card.prototype.renderCard = function () {
        var root = document.body.querySelector(".cards");
        root.innerHTML += "<div class=\"card\" name=\"" + (this.cardNumber + this.cardSign) + "\">\n          <h3 class=\"cardN\">" + this.cardNumber + "</h3>\n          <img class=\"cardS\" src=\"" + this.srcImgCard + "\"  alt=\"\">\n          </div>";
    };
    return Card;
}());
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
function renderCards() {
    var root = document.body.querySelector(".cards");
    var html = decksCards
        .map(function (c) {
        return "<div class=\"card\" name=\"" + (c.cardNumber + c.cardSign) + "\">\n        <h3 class=\"cardN\">" + c.cardNumber + "</h3>\n        <img class=\"cardS\" src=\"" + c.srcImgCard + "\"  alt=\"\">\n        </div>";
    })
        .join(" ");
    root.innerHTML += html;
}
function get2RandomCards() {
    var randomNumCard1 = Math.round(Math.random() * 51);
    var randomCard1 = decksCards[randomNumCard1];
    decksCards.splice(randomNumCard1, 1);
    randomCard1.renderCard();
    var randomNumCard2 = Math.round(Math.random() * 51);
    var randomCard2 = decksCards[randomNumCard2];
    decksCards.splice(randomNumCard2, 1);
    randomCard2.renderCard();
    return { card1: randomCard1, card2: randomCard2 };
}
get2RandomCards();
renderCards();
