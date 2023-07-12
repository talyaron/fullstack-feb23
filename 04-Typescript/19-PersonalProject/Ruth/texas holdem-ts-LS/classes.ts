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
    public imgSrc: string = "",
    public chips: number = 100000,
    public isActive: boolean = false,
    public isTurn: boolean =false,
    public pCards: Card[] = get2RandomCards(),
    public allCard: Card[] = pCards,
  ) {
    this.pCards = this.pCards.map((c) => new Card(c.cardNumber, c.cardSign));
  }

  setActive() {
    this.isActive = !this.isActive;
  }

  renderMyPanel() {
    try {
      this.pCards!.forEach((c) =>
        c.renderCard(document.querySelector(".myPanel__cards") as HTMLElement),
      );
      document.querySelector(".myPanel__chips")!.innerHTML =
        this.chips.toString();
    } catch (error) {
      console.error(error);
    }
  }
  addCardToPlayer(card: Card) {
    this.allCard.push(card);
  }

  doingTurn() {
    console.log(`${this.userName} is doing somethig......`);
  }
}

//------------------Dealer------------------------------
class Dealer {
  constructor(public sum: number) {}
}

//----------------Round--------------------------------
class Round {
  constructor(
    public activePlayers: Player[] = players,
    public firstPlayer: Player = activePlayers[0],
    public chipsOnTable: number = 0,
    public roundNumber: number = 0,
  ) {}

  setPlayers() {
    this.activePlayers = this.activePlayers.filter((p) => p.isActive == true);
  }
}
