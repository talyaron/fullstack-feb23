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

const firstPlayers = [new Player("ruth1")];

const players: Player[] = getPlayerFromLs() || firstPlayers;

function getPlayerFromLs() {
  try {
    const playersStr = localStorage.getItem("players");
    if (!playersStr) return firstPlayers;
    else {
      const playersOnArrayObjs = JSON.parse(playersStr);
      const players = playersOnArrayObjs.map(
        (p: any) => new Player(p.userName, p.chips, p.isActive, p.pCards),
      );

      return players;
    }
  } catch (error) {
    console.error(error);
  }
}

// const players:Player[] =
localStorage.setItem("players", JSON.stringify(players));
players[0].renderMyPanel();
console.log(players);

function addCardToStage(ev: any) {
  const root = document.querySelector(".stage");
  console.log(ev.target.parentNode.children.length);
  if (ev.target.parentNode.children.length < 6) {
    if (ev.target.parentNode.children.length > 3) {
      let newCard = getRandomCard();
      newCard.renderCard(root);
    } else {
      for (let i = 0; i < 3; i++) {
        let newCard = getRandomCard();
        newCard.renderCard(root);
      }
    }
  } else alert("game stopped!");
}
