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
  setDeckCardsInLs()
  return [randomCard1, randomCard2];
}

function getRandomCard() {
  const randomNumCard1 = Math.round(Math.random() * decksCards.length);
  const randomCard1: Card = decksCards[randomNumCard1];
  decksCards.splice(randomNumCard1, 1);
  setDeckCardsInLs()
  return randomCard1;
}



function setDeckCardsInLs() {
  localStorage.setItem("deckCards", JSON.stringify(decksCards));
}
function getDeckCardsFromLs(){
  let decksCardsStr = JSON.parse(localStorage.getItem("deckCards")!) 
  decksCards= decksCardsStr.forEach(c=>{
    new Card(c.cardNumber, c.cardSign)
  })
}

get2RandomCards();
renderAllCards();

const players:Player[] = [
  new Player("ruttur66")
]

localStorage.setItem("players", JSON.stringify(players))

function 