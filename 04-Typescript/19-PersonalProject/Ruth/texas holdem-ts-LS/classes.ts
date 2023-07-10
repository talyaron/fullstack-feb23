//---------------------------Card--------------------
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

  renderCard(root = document.body.querySelector(".cards")) {
    root!.innerHTML += `<div class="card" name="${
      this.cardNumber + this.cardSign
    }">
              <h3 class="cardN">${this.cardNumber}</h3>
              <img class="cardS" src="${this.srcImgCard}"  alt="">
              </div>`;
  }
}
//---------------------------Player--------------------
class Player {
  constructor(
    public userName: string,
    public chips: number = 100000,
    public isActive: boolean = true,
    public pCards: Card[] = get2RandomCards(),
  ) {
    this.pCards = this.pCards.map((c) => new Card(c.cardNumber, c.cardSign));

  }

  setToUnActive() {
    this.isActive = false;
  }

  renderMyPanel() {
    try {
      this.pCards!.forEach((c) =>
        c.renderCard(document.querySelector(".myPanel__cards") as HTMLElement),
      );
      document.querySelector(".myPanel__chips")!.innerHTML = this.chips.toString();
    } catch (error) {
      console.error(error);
    }
  }
}

//------------------Dealer------------------------------
class Dealer{
  constructor(public sum:number){}
}
