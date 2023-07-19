function checkWinner(players: Player[]) {
  players = players.filter((p) => p.isActive);
  let tempWin: Player = players[0];

  for (let i = 0; i < players.length - 1; i++) {
    let tempScore1 = getPointOfOptionalSet(players[i]);
    let tempScore2 = getPointOfOptionalSet(players[i + 1]);

    if (tempScore1 < tempScore2) {
      tempWin = players[i + 1];
    }
    if (tempScore1 == tempScore2) {
    }
    tempWin = players[i + 1];
  }
  return tempWin;
}

// function getSetOfCards(players: Player[]) {
//     players = players.filter((p) => p.isActive);

//     players.forEach(p=>{
//         getFiveBestCards(p.allCards, getOptionalSet());

//     })

// }

function getResultOfCheckSets(cards: Card[]) {
  const setsResult: boolean[] = [
    true,
    checkPair(cards)!,
    checkTwoPairs(cards)!,
    checkThreeOfAKind(cards)!,
    checkStraight(cards)!,
    checkFlush(cards)!,
    checkFullHouse(cards)!,
    checkFourOfAKind(cards)!,
    checkStraightFlush(cards)!,
    checkRoyalFlush(cards)!,
  ];

  return setsResult;
}

function getBestHandForEachPlayer(thisCards: Card[]) {
  // const thisCards:Card[] = player.allCards;
  const arraySetResult: boolean[] = getResultOfCheckSets(thisCards);
  const arrayOfFunctionToGet: Function[] = [
    getHighCard,
    getPair,
    getTwoPairs,
    getThreeOfKind,
    getStraight,
    getFlush,
    getFullHouse,
    getFourOfAKind,
    getStraightFlash,
    getRoyalFlush,
  ];
  let arrayHandCards: Card[] = [];

  for (let i = arraySetResult.length - 1; i >= 0; i--) {
    if (arraySetResult[i]) {
      if (arrayOfFunctionToGet[i](thisCards)) {
        let cardsOfSet: Card[] = arrayOfFunctionToGet[i](thisCards);
        arrayHandCards.push(...cardsOfSet);
        break
      }
    }
  }

  if (arrayHandCards.length == 5) {
   return arrayHandCards
  }
  else{
   thisCards = thisCards.filter(c => arrayHandCards.find(card => card.cardName==c.cardName) )
   for (let i = 0; arrayHandCards.length == 5; i++){
    arrayHandCards.push(thisCards[0])
   }
  }

  return arrayHandCards;
}




const cardsArray: Card[] = [
  new Card("2", "heart"),
  new Card("7", "heart"),
  new Card("9", "heart"),
  new Card("6", "heart"),
  new Card("5", "heart"),
  new Card("k", "club"),
  new Card("a", "diamond"),
];


console.log(getTwoPairs(cardsArray));


console.log(getBestHandForEachPlayer(cardsArray));
