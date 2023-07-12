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

const users: Player[] = [
  new Player(
    "ruth300290!",
    "https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg",
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
    "https://cdn.pixabay.com/photo/2015/11/21/04/17/grandparents-1054311_1280.jpg",
  ),
];

const firstPlayers = [new Player("ruth1")].concat(users);

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
            p.chips,
            p.isActive,
            p.isTurn,
            p.pCards,
            p.allCard,
          ),
      );
      console.log(players);

      return players;
    }
  } catch (error) {
    console.error(error);
  }
}

players[0].renderMyPanel();

function addCardToStage() {
  const root = document.querySelector(".stage") as HTMLDivElement;
  if (root.children.length < 6) {
    if (root.children.length > 3) {
      let newCard = getRandomCard();
      players.forEach((p) => p.addCardToPlayer(newCard));
      localStorage.setItem("players", JSON.stringify(players));
      newCard.renderCard(root);
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

function checkStatus(cards: Card[]) {
  checkTwoOfAKind(cards);
}

function checkTwoOfAKind(cards: Card[]) {
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

function highCard(cards: Card[]) {
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

let cards: Card[] = [
  new Card("2", "heart"),
  new Card("3", "heart"),
  new Card("1", "spade"),
  new Card("10", "club"),
  new Card("5", "club"),
  new Card("8", "diamond"),
];

// console.log(checkTwoOfAKind(cards));
// console.log(checkThreeOfAKind(cards));
// console.log(checkTwoPairs(cards));
// console.log(checkFullHouse(cards));

console.log(highCard(cards));

//---------------------------------------------turn-------------------------------------

function turnOrder(players:Player[]) {
  const stage = document.querySelector(".stage") as HTMLDivElement;
  let currentPlayerIndex = 0; // מספר השחקן הנוכחי בתור

  function performTurn() {
    const currentPlayer = players[currentPlayerIndex];
    players.map((p) => (p.isActive = false));
    currentPlayer.setActive();
    currentPlayer.doingTurn();

    currentPlayerIndex++;
    if (currentPlayerIndex >= players.length && stage.children.length < 6) {
      currentPlayerIndex = 0;
      if (stage.children.length < 6) {
        addCardToStage();
      }
    }

    setTimeout(performTurn, 500); // השהייה של 4 שניות לפני תור השחקן הבא
  }

  performTurn(); // הפעלת התור הראשון
  // game over
}
turnOrder(players)

function renderPlayersPanel(players: Player[]) {
  try {
    const playersElement: NodeListOf<HTMLElement> =
      document.querySelectorAll(".playerPanel");
    players.forEach((p, i) => {
      console.log(playersElement[i]);

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

function playPokerRound() {
  let round = new Round();

  function loop() {
    for (let i = 0; i < round.activePlayers.length; i++) {
      let currentPlayer = round.activePlayers[i];
      round.activePlayers.forEach((p) => (p.isActive = false));
      currentPlayer.isActive = true;
      setTimeout(currentPlayer.doingTurn, 3000);
    }
  }

}
