
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
  static playerCount = 0;

  constructor(
    public userName: string,
    public imgSrc: string = "",
    public chips: number = 100000,
    public isActive: boolean = true,
    public isTurn: boolean = false,
    public pCards: Card[] = get2RandomCards(),
    public allCards: Card[] = pCards,
    public movesInRound: PlayerMovesOption[] = [],
    public lastBet: number = 0,
    public roundNumber = movesInRound.length - 1,
    public turnNumber: number = Player.playerCount ++
  ) {
    this.pCards = this.pCards.map((c) => new Card(c.cardNumber, c.cardSign));
  }

  setActive() {
    this.isActive = !this.isActive;
  }

  setTurn() {
    this.isTurn = !this.isTurn;
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
    this.allCards.push(card);
  }

  doingTurn(activePlayers: Player[], thisIndex: number) {
    console.log(`${this.userName} is doing somethig......`);

    let movesOptions = getMoveOption(activePlayers, thisIndex);
    let pointOfOptionalSet = getPointOfOptionalSet(this)
    let sizeOfBet = getSizeOfBet(pointOfOptionalSet, this.chips)

    chooseMove(activePlayers, movesOptions, sizeOfBet, pointOfOptionalSet, this)
}

  checkMove(players: Player[]) {
     {
      this.movesInRound.push(PlayerMovesOption.check);
      this.lastBet = 0;
    }
    localStorage.setItem("players", JSON.stringify(players));
    //התור יעבור לבא אחריו
  }

  foldMove(players: Player[]) {
    this.movesInRound.push(PlayerMovesOption.fold);
    this.lastBet = 0;
    this.isActive = false;
  
    localStorage.setItem("players", JSON.stringify(players));
    //התור יעבור לבא אחריו
  }

  callMove(players: Player[], currentPlayerIndex: number) {
      this.movesInRound.push(PlayerMovesOption.call);
      const betToCall = riseBetSizeInThisRound(players, currentPlayerIndex);

      this.lastBet = betToCall;
      dealerMoney += betToCall;
      this.chips = this.chips - betToCall;
  
      localStorage.setItem("players", JSON.stringify(players));
      localStorage.setItem("dealerMoney", JSON.stringify(dealerMoney));
  }

  riseMove(players: Player[], currentPlayerIndex: number, sizeOfBet: number) {
    const currentPlayer = players[currentPlayerIndex];
    this.movesInRound.push(PlayerMovesOption.rise);

    this.lastBet = sizeOfBet;
    dealerMoney += sizeOfBet;
    this.chips -=  sizeOfBet;
  
    localStorage.setItem("players", JSON.stringify(players));
    localStorage.setItem("dealerMoney", JSON.stringify(dealerMoney));

    //התור יעבור לבא אחריו
  }
}

enum PlayerMovesOption {
  fold = "fold",
  check = "check",
  rise = "rise",
  call = "call",
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
