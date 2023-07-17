
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

const myPlayer: Player = new Player("ruth1","#", "myPlayer")

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
    "https://cdn.pixabay.com/photo/2023/06/22/02/25/motocross-8080377_1280.jpg",
  ),
];

// users.unshift(myPlayer);
const firstPlayers:Player[] = [myPlayer].concat(users);

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
      console.log(players);

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



