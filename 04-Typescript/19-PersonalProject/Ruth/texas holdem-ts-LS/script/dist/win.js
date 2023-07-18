function checkWinner(players) {
    players = players.filter(function (p) { return p.isActive; });
    var tempWin = players[0];
    for (var i = 0; i < players.length - 1; i++) {
        var tempScore1 = getPointOfOptionalSet(players[i]);
        var tempScore2 = getPointOfOptionalSet(players[i + 1]);
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
function getResultOfCheckSets(cards) {
    var setsResult = [
        true,
        checkPair(cards),
        checkTwoPairs(cards),
        checkThreeOfAKind(cards),
        checkStraight(cards),
        checkFlush(cards),
        checkFullHouse(cards),
        checkFourOfAKind(cards),
        checkStraightFlush(cards),
        checkRoyalFlush(cards),
    ];
    return setsResult;
}
function getBestHandForEachPlayer(thisCards) {
    // const thisCards:Card[] = player.allCards;
    var arraySetResult = getResultOfCheckSets(thisCards);
    var arrayOfFunctionToGet = [
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
    var arrayHandCards = [];
    for (var i = arraySetResult.length - 1; i >= 0; i--) {
        if (arraySetResult[i]) {
            if (arrayOfFunctionToGet[i](thisCards)) {
                var cardsOfSet = arrayOfFunctionToGet[i](thisCards);
                arrayHandCards.push.apply(arrayHandCards, cardsOfSet);
                break;
            }
        }
    }
    if (arrayHandCards.length == 5) {
        return arrayHandCards;
    }
    else {
        thisCards = thisCards.filter(function (c) { return arrayHandCards.find(function (card) { return card.cardName == c.cardName; }); });
        for (var i = 0; arrayHandCards.length == 5; i++) {
            arrayHandCards.push(thisCards[0]);
        }
    }
    return arrayHandCards;
}
var cardsArray = [
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
