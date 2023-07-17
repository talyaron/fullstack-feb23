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

let decksCards: Card[] = [];

cardSign.forEach((cardS) => {
  cardsNumber.forEach((cardN) => {
    decksCards.push(new Card(cardN, cardS));
  });
});

localStorage.setItem("deckCards", JSON.stringify(decksCards));

function renderAllCards() {
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
  const randomNumCard1 = Math.round(Math.random() * decksCards.length);
  const randomCard1: Card = decksCards[randomNumCard1];
  decksCards.splice(randomNumCard1, 1);
  const randomNumCard2 = Math.round(Math.random() * decksCards.length);
  const randomCard2: Card = decksCards[randomNumCard2];
  decksCards.splice(randomNumCard2, 1);
  setDeckCardsInLs();
  return [
    new Card(randomCard1.cardNumber, randomCard1.cardSign),
    new Card(randomCard2.cardNumber, randomCard2.cardSign),
  ];
}

function getRandomCard() {
  const randomNumCard1 = Math.round(Math.random() * decksCards.length);
  const randomCard1: Card = decksCards[randomNumCard1];
  decksCards.splice(randomNumCard1, 1);
  setDeckCardsInLs();
  return randomCard1;
}

function setDeckCardsInLs() {
  localStorage.setItem("deckCards", JSON.stringify(decksCards));
}
function getDeckCardsFromLs() {
  let decksCardsStr = JSON.parse(localStorage.getItem("deckCards")!);
  decksCards = decksCardsStr.map(
    (c: any) => new Card(c.cardNumber, c.cardSign),
  );
}

const myPlayer: Player = new Player("ruth1", "#", "myPlayer");

const users: Player[] = [
  new Player(
    "ruth765",
    "https://cdn.pixabay.com/photo/2015/11/21/04/17/grandparents-1054311_1280.jpg",
  ),
  new Player(
    "ruth0908",
    "https://cdn.pixabay.com/photo/2014/04/05/11/40/chess-316658_1280.jpg",
  ),
  new Player(
    "ruth765",
    "https://cdn.pixabay.com/photo/2015/11/21/04/17/grandparents-1054311_1280.jpg",
  ),
  new Player(
    "ruth5645",
    "https://cdn.pixabay.com/photo/2023/06/22/02/25/motocross-8080377_1280.jpg",
  ),
];

// users.unshift(myPlayer);
const firstPlayers: Player[] = [myPlayer].concat(users);

const players: Player[] = getPlayerFromLs();

function getPlayerFromLs() {
  try {
    const playersStr = localStorage.getItem("players");
    if (!playersStr) {
      console.log(firstPlayers);

      localStorage.setItem("players", JSON.stringify(firstPlayers));

      return firstPlayers;
    } else {
      const playersOnArrayObjs = JSON.parse(playersStr);
      const players = playersOnArrayObjs.map(
        (p: any) =>
          new Player(
            p.userName,
            p.imgSrc,
            p.id,
            p.chips,
            p.isActive,
            p.isTurn,
            p.pCards,
            p.allCards,
            p.movesInRound,
            p.lastBet,
            p.roundNumber,
            p.turnNumber,
          ),
      );

      return players;
    }
  } catch (error) {
    console.error(error);
  }
}

players[0].renderMyPanel();

//---------------------------------------------render players-------------------------------------

function renderPlayersPanel(players: Player[]) {
  try {
    const playersElement: NodeListOf<HTMLElement> =
      document.querySelectorAll(".playerPanel");
    players.forEach((p, i) => {
      // p.pCards.forEach((c) =>
      //   c.renderCard(document.querySelector(`#player${i+1}Cards`) as HTMLElement),
      // );
      (
        playersElement[i].querySelector(
          `.playerPanel__img img`,
        ) as HTMLImageElement
      ).src = p.imgSrc;
      playersElement[i].querySelector(
        `.playerPanel__inform__chips`,
      )!.innerHTML = p.chips.toString();
      playersElement[i].querySelector(
        `.playerPanel__inform__userName`,
      )!.textContent = p.userName;
    });
  } catch (error) {
    console.error(error);
  }
}

renderPlayersPanel(users);

function addCardToStage() {
  const root = document.querySelector(".stage") as HTMLDivElement;
  if (root.children.length < 6) {
    if (root.children.length > 3) {
      let newCard = getRandomCard();
      players.forEach((p) => p.addCardToPlayer(newCard));
      localStorage.setItem("players", JSON.stringify(players));
      newCard.renderCard(root)!;
    } else {
      for (let i = 0; i < 3; i++) {
        let newCard = getRandomCard();
        players.forEach((p) => p.addCardToPlayer(newCard));
        localStorage.setItem("players", JSON.stringify(players));
        newCard.renderCard(root);
      }
    }
  } else alert("game stopped!");
}

function createID() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}











////----------------------------------------------------turns----------------------------------------------------------------------------


let dealerMoney = 0;


function getMoveOption(activePlayers: Player[], thisIndex: number) {
  const thisPlayer = activePlayers[thisIndex];

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

function getPointOfOptionalSet(thisPlayer: Player) {
  const thisPCards = thisPlayer.allCards;
  const setsResult: boolean[] = [
    checkPair(thisPCards)!,
    checkTwoPairs(thisPCards)!,
    checkThreeOfAKind(thisPCards)!,
    checkStraight(thisPCards)!,
    checkFlush(thisPCards)!,
    checkFullHouse(thisPCards)!,
    checkFourOfAKind(thisPCards)!,
    checkStraightFlush(thisPCards)!,
    checkRoyalFlush(thisPCards)!,
  ];

  let maxPointsSet: number = 0;
  setsResult.forEach((res, i) => {
    if (res === true) maxPointsSet += i + 1;
  });
  return maxPointsSet;
}

function riseBetSizeInThisRound(players: Player[], currentPlayerIndex: number) {
  const PlayerRiseInThisRound: Player | undefined = getLastRisePLayer(
    players,
    currentPlayerIndex,
  );
  if (PlayerRiseInThisRound) {
    return PlayerRiseInThisRound.lastBet;
  }
  return 0;
}

function getLastRisePLayer(players: Player[], currentPlayerIndex: number) {
  const currentPlayer = players[currentPlayerIndex];
  const round = currentPlayer.movesInRound.length;
  let playerRiseLastInThisRound;
  players.forEach((p) => {
    if (p.movesInRound[round - 1] == PlayerMovesOption.rise) {
      playerRiseLastInThisRound = p;
    }
  });
  return playerRiseLastInThisRound;
}

function chooseMove(
  players: Player[],
  movesOptions: string[],
  sizeOfBet: number,
  pointOfOptionalSet: number,
  player: Player,
) {
  const movesOptionsLength = movesOptions.length;
  if (movesOptionsLength === 2) {
    //check or rise

    let randomNumToMove = Math.round(Math.random() * 1);
    let randomMove = movesOptions[randomNumToMove];

    if (pointOfOptionalSet < 2) player.checkMove(players);

    if (pointOfOptionalSet == 2) {
      if (randomMove === "rise") {
        player.riseMove(players, sizeOfBet);
      } else {
        player.checkMove(players);
      }
    }

    if (pointOfOptionalSet >= 3) {
      player.riseMove(players, sizeOfBet);
    }
  }

  if (movesOptionsLength == 3) {
    //rise or call or fold

    let randomNumToMove = Math.round(Math.random() * 2);
    let randomMove = movesOptions[randomNumToMove];
    let lastBetSize = riseBetSizeInThisRound(players, player.turnNumber);

    if (pointOfOptionalSet < 2)
      if (randomMove == "call" && lastBetSize <= sizeOfBet) {
        player.callMove(players, lastBetSize);
      } else {
        player.foldMove(players);
      }

    if (pointOfOptionalSet == 2) {
      if (randomMove == "call" && lastBetSize <= sizeOfBet) {
        player.callMove(players, lastBetSize);
      }
      if (randomMove == "rise" && lastBetSize <= sizeOfBet) {
        player.riseMove(players, sizeOfBet);
      } else {
        player.foldMove(players);
      }
    }

    if (pointOfOptionalSet >= 3) {
      if (randomMove == "call") {
        player.callMove(players, player.turnNumber);
      } else player.riseMove(players, sizeOfBet);
    }
  }
}

function getSizeOfBet(pointOfOptionalSet: number, playerChips: number) {
  let randomNum = 0;
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

let counterTurn = 0;
let indexInArray = 0;
function turnOrder(activePlayers: Player[]) {
  /////----------------------------הוא מדלג על השחקן השני קבוע!!------------------------------------------------------
  let players = activePlayers.filter((p) => p.isActive === true);
  console.log(players);
  console.log(indexInArray);

  if (players[indexInArray].id == "myPlayer") {
    indexInArray++;
    counterTurn++;
    myTurn(players);
  } else {
    indexInArray++;
    counterTurn++;

    document.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });

    if (counterTurn < 5 && indexInArray < players.length) {
      players[indexInArray].doingTurn(players, indexInArray);
      if (players[indexInArray].lastBet > 0) {
        counterTurn = 0;
      }
    } else if (counterTurn < 5) {
      addCardToStage();
      counterTurn = 0;
      indexInArray = 0;
    } else {
      indexInArray = 0;
    }
  }
}

turnOrder(players);

function myTurn(players: Player[]) {
  const myPlayer = players.find((p) => p.id == "myPlayer");
  const myPlayerIndex = players.findIndex((p) => p.id == "myPlayer");

  const myOption = getMoveOption(players, myPlayerIndex);

  console.log(`${myPlayer?.userName} is doing somethig......`);
  console.log(myOption);

  playTheButton(myOption!);
}





///-----------------------myPlayerMoves------------------------------------------------------------------------------------------------

function playTheButton(myOption: string[]) {
  document.querySelectorAll("button").forEach((button) => {
    button.disabled = false;
  });
  if (myOption.length == 2) {
    //check or rise{
    (
      document.querySelector(".operations__btn--call") as HTMLButtonElement
    ).disabled = true;
    (
      document.querySelector(".operations__btn--fold") as HTMLButtonElement
    ).disabled = true;
    (
      document.querySelector(".operations__btn--rise") as HTMLButtonElement
    ).disabled = false;
    (
      document.querySelector(".operations__btn--check") as HTMLButtonElement
    ).disabled = false;
  } else {
    //call or rise or fold
    (
      document.querySelector(".operations__btn--call") as HTMLButtonElement
    ).disabled = false;
    (
      document.querySelector(".operations__btn--fold") as HTMLButtonElement
    ).disabled = false;
    (
      document.querySelector(".operations__btn--rise") as HTMLButtonElement
    ).disabled = false;
    (
      document.querySelector(".operations__btn--check") as HTMLButtonElement
    ).disabled = true;
  }
}

function myPlayerHandleCheck() {
  const myPlayer = players.find((p) => p.id == "myPlayer");
  myPlayer?.checkMove(players);

  turnOrder(players);
}
function myPlayerHandleFold() {
  const myPlayer = players.find((p) => p.id == "myPlayer");
  myPlayer?.foldMove(players);

  turnOrder(players);
}

function myPlayerHandleRise() {
  const myPlayer = players.find((p) => p.id == "myPlayer");
  let inputSizeToBet: number = Number(prompt("Enter your bet here:"));
  while (isNaN(inputSizeToBet)) {
    inputSizeToBet = Number(prompt("Enter again your bet here in number:"));
  }
  myPlayer?.riseMove(players, inputSizeToBet);

  turnOrder(players);
}

function myPlayerHandleCall() {
  const myPlayer = players.find((p) => p.id == "myPlayer");
  const myPlayerIndex = players.findIndex((p) => p.id == "myPlayer");
  myPlayer?.callMove(players, myPlayerIndex);

  turnOrder(players);
}

//------------------------






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
    public id: string = createID(),
    public chips: number = 100000,
    public isActive: boolean = true,
    public isTurn: boolean = false,
    public pCards: Card[] = get2RandomCards(),
    public allCards: Card[] = pCards,
    public movesInRound: PlayerMovesOption[] = [],
    public lastBet: number = 0,
    public roundNumber = movesInRound.length - 1,
    public turnNumber: number = Player.playerCount++,
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

  renderTurn() {
    const divID = this.turnNumber;
    console.log(divID);

    const root = document.getElementById(
      `player${divID}Panel`,
    ) as HTMLDivElement;
    console.log(root);

    const input =
      this.lastBet > 0
        ? this.lastBet.toString()
        : this.movesInRound[this.movesInRound.length - 1];

    root.querySelector(".playerPanel__inputChips")!.innerHTML = ` 
  <img src="../images/casino-chip.png" alt="" />
  <h4>${input}</h4>
  `;
  }

  addCardToPlayer(card: Card) {
    this.allCards.push(card);
  }

  doingTurn(activePlayers: Player[], thisIndex: number) {
    console.log(`${this.userName} is doing somethig......`);
    let movesOptions = getMoveOption(activePlayers, thisIndex);
    console.log(movesOptions);
    let pointOfOptionalSet = getPointOfOptionalSet(this);
    let sizeOfBet = getSizeOfBet(pointOfOptionalSet, this.chips);

    chooseMove(
      activePlayers,
      movesOptions!,
      sizeOfBet,
      pointOfOptionalSet,
      this,
    );
  }

  checkMove(players: Player[]) {
    {
      this.movesInRound.push(PlayerMovesOption.check);
      this.lastBet = 0;
    }
    localStorage.setItem("players", JSON.stringify(players));
    this.renderTurn();

    turnOrder(players);
  }

  foldMove(players: Player[]) {
    this.movesInRound.push(PlayerMovesOption.fold);
    this.lastBet = 0;
    this.isActive = false;

    localStorage.setItem("players", JSON.stringify(players));
    this.renderTurn();

    turnOrder(players);
  }

  callMove(players: Player[], currentPlayerIndex: number) {
    this.movesInRound.push(PlayerMovesOption.call);
    const betToCall = riseBetSizeInThisRound(players, currentPlayerIndex);

    this.lastBet = betToCall;
    dealerMoney += betToCall;
    this.chips = this.chips - betToCall;

    localStorage.setItem("players", JSON.stringify(players));
    localStorage.setItem("dealerMoney", JSON.stringify(dealerMoney));
    this.renderTurn();

    turnOrder(players);
  }

  riseMove(players: Player[], sizeOfBet: number) {
    this.movesInRound.push(PlayerMovesOption.rise);

    this.lastBet = sizeOfBet;
    dealerMoney += sizeOfBet;
    this.chips -= sizeOfBet;

    localStorage.setItem("players", JSON.stringify(players));
    localStorage.setItem("dealerMoney", JSON.stringify(dealerMoney));
    this.renderTurn();

    turnOrder(players);
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




//----------------------------------------poker Set-----------------------------------------------------------------------------------


//royal flush
function checkRoyalFlush(cards: Card[]) {
  try {
    if (checkFlush(cards) && checkRoyalStraight(cards)) return true;
    return false;
  } catch (error) {
    console.error(error);
  }
}

//straight flush
function checkStraightFlush(cards: Card[]) {
  try {
    if (checkStraight(cards) && checkRoyalStraight(cards)) return true;
    return false;
  } catch (error) {
    console.error(error);
  }
}

//four of a kind
function checkFourOfAKind(cards: Card[]) {
  const copiedCards = [...cards];

  for (let i = 0; i < copiedCards.length; i++) {
    const tempArray = copiedCards.slice(i + 1);
    const sameNumberCards = tempArray.filter(
      (card) => card.cardNumber === copiedCards[i].cardNumber,
    );
    if (sameNumberCards.length == 3) {
      return true;
    }
  }

  return false;
}

//full house
function checkFullHouse(cards: Card[]) {
  const pairs = {};

  cards.forEach((card) => {
    if (!pairs[card.cardNumber]) {
      pairs[card.cardNumber] = 1;
    } else {
      pairs[card.cardNumber]++;
    }
  });

  const pairValues = Object.values(pairs);
  const pairCounts =
    pairValues.filter((count) => count === 2).length > 0 ? true : false;
  const threeOfKindCounts =
    pairValues.filter((count) => count === 3).length > 0 ? true : false;
  return pairCounts && threeOfKindCounts;
}

//flush
function checkFlush(cards: Card[]) {
  try {
    for (let i = 0; i < cards.length - 4; i++) {
      const tempCardsSign = cards.filter(
        (c) => c.cardSign == cards[i].cardSign,
      );
      if (tempCardsSign.length >= 5) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(error);
  }
}

//straight

function checkStraight(cards: Card[]) {
  try {
    const cardsNumbers = cards.map((card) =>
      getCardNumberValue(card.cardNumber),
    );
    const sortedCardsNumbers = cardsNumbers.sort();

    let count = 0;
    for (let i = 0; i < sortedCardsNumbers.length - 1; i++) {
      if (sortedCardsNumbers[i + 1] - sortedCardsNumbers[i] === 1) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    if (checkRoyalStraight(cards)) {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
  }
}

function checkRoyalStraight(cards: Card[]) {
  const cardsNumbers = cards.map((card) => getCardNumberValue(card.cardNumber));
  const sortedCardsNumbers = cardsNumbers.sort();
  if (
    sortedCardsNumbers.includes(10) &&
    sortedCardsNumbers.includes(11) &&
    sortedCardsNumbers.includes(12) &&
    sortedCardsNumbers.includes(13) &&
    sortedCardsNumbers.includes(1)
  ) {
    return true;
  }
  return false;
}

//three of a kind
function checkThreeOfAKind(cards: Card[]) {
  const copiedCards = [...cards];

  for (let i = 0; i < copiedCards.length; i++) {
    const tempArray = copiedCards.slice(i + 1);
    const sameNumberCards = tempArray.filter(
      (card) => card.cardNumber === copiedCards[i].cardNumber,
    );
    if (sameNumberCards.length == 2) {
      return true;
    }
  }

  return false;
}

//two pairs
function checkTwoPairs(cards: Card[]) {
  const pairs = {};

  cards.forEach((card) => {
    if (!pairs[card.cardNumber]) {
      pairs[card.cardNumber] = 1;
    } else {
      pairs[card.cardNumber]++;
    }
  });

  const pairValues = Object.values(pairs);
  const pairCounts = pairValues.filter((count) => count === 2);

  return pairCounts.length >= 2;
}

//one pair
function checkPair(cards: Card[]) {
  const copiedCards = [...cards];

  for (let i = 0; i < copiedCards.length; i++) {
    const tempArray = copiedCards.slice(i + 1);
    const sameNumberCards = tempArray.filter(
      (card) => card.cardNumber === copiedCards[i].cardNumber,
    );

    if (sameNumberCards.length == 1) {
      return true;
    }
  }

  return false;
}

//high card
function getHighCard(cards: Card[]) {
  const cardValues = {
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
    K: 13,
  };

  let temp = cards[0];
  cards.forEach((card) => {
    if (cardValues[card.cardNumber] > cardValues[temp.cardNumber]) {
      temp = card;
    }
  });

  return temp;
}

/////////------------------------

function getCardNumberValue(cardNumber: string): number {
  try {
    if (cardNumber === "A") return 1;
    if (cardNumber === "J") return 11;
    if (cardNumber === "Q") return 12;
    if (cardNumber === "K") return 13;
    return parseInt(cardNumber);
  } catch (error) {
    console.error(error);
    return -1;
  }
}

