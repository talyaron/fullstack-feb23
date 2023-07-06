class Card {
  public cardName: string;
  public srcImgCard: string;
  constructor(public cardNumber: string, public cardSign: string) {
    this.cardName = `${this.cardNumber}-${cardSign}`;
    this.srcImgCard = this.getSignCardSrc() as string;
  }
  getSignCardSrc() {
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
  }

  renderCard() {
    const root = document.body.querySelector(".cards") as HTMLDivElement;
    root.innerHTML += `<div class="card" name="${this.cardNumber + this.cardSign}">
          <h3 class="cardN">${this.cardNumber}</h3>
          <img class="cardS" src="${this.srcImgCard}"  alt="">
          </div>`;
  }
}

const cardsNumber = [
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
const cardSign = ["heart", "diamond", "club", "spade"];

const decksCards: Card[] = [];

cardSign.forEach((cardS) => {
  cardsNumber.forEach((cardN) => {
    decksCards.push(new Card(cardN, cardS));
  });
});

function renderCards() {
  const root = document.body.querySelector(".cards") as HTMLDivElement;
  const html = decksCards
    .map((c) => {
      return `<div class="card" name="${c.cardNumber + c.cardSign}">
        <h3 class="cardN">${c.cardNumber}</h3>
        <img class="cardS" src="${c.srcImgCard}"  alt="">
        </div>`;
    })
    .join(" ");
  root.innerHTML += html;
}

function get2RandomCards() {
  const randomNumCard1 = Math.round(Math.random() * 51);
  const randomCard1:Card =decksCards[randomNumCard1]
  decksCards.splice(randomNumCard1, 1);
  randomCard1.renderCard()
  const randomNumCard2 = Math.round(Math.random() * 51);
  const randomCard2:Card =decksCards[randomNumCard2]
  decksCards.splice(randomNumCard2, 1);
  randomCard2.renderCard()
return {card1: randomCard1, card2:randomCard2}
}

get2RandomCards();
renderCards();
