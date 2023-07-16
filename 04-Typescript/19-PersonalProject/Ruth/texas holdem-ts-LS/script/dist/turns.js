var dealerMoney = 0;
function turnOrder(players) {
    var stage = document.querySelector(".stage");
    var currentPlayerIndex = 0;
    performTurn(players, stage, currentPlayerIndex);
}
function performTurn(players, stage, currentPlayerIndex) {
    try {
        var currentPlayer = players[currentPlayerIndex];
        var activePlayers = players.filter(function (p) { return p.isActive === true; });
        activePlayers.map(function (p) { return (p.isTurn = false); });
        currentPlayer.setActive();
        currentPlayer.isTurn = true;
        currentPlayer.doingTurn(activePlayers, currentPlayerIndex); ///התור
        currentPlayerIndex++;
        if (currentPlayerIndex >= players.length && stage.children.length < 6) {
            currentPlayerIndex = 0;
            if (stage.children.length < 6) {
                addCardToStage();
            }
        }
        setTimeout(function () { return performTurn(players, stage, currentPlayerIndex); }, 500);
    }
    catch (error) {
        console.error(error);
    }
}
// turnOrder(players);
function getMoveOption(activePlayers, thisIndex) {
    var thisPlayer = activePlayers[thisIndex];
    var lastPlyersRiseIndex = activePlayers.findIndex(function (p) { return p.movesInRound[length - 1] === PlayerMovesOption.call; });
    if (lastPlyersRiseIndex === -1 || lastPlyersRiseIndex == thisIndex) {
        return ["rise", "check"];
    }
    else {
        return ["fold", "rise", "call"];
    }
}
function getPointOfOptionalSet(thisPlayer) {
    var thisPCards = thisPlayer.allCards;
    var setsResult = [
        checkPair(thisPCards),
        checkTwoPairs(thisPCards),
        checkThreeOfAKind(thisPCards),
        checkStraight(thisPCards),
        checkFlush(thisPCards),
        checkFullHouse(thisPCards),
        checkFourOfAKind(thisPCards),
        checkStraightFlush(thisPCards),
        checkRoyalFlush(thisPCards),
    ];
    console.log(setsResult);
    var maxPointsSet = 0;
    setsResult.forEach(function (res, i) {
        if (res === true)
            maxPointsSet += i + 1;
    });
    return maxPointsSet;
}
function riseBetSizeInThisRound(players, currentPlayerIndex) {
    var PlayerRiseInThisRound = getLastRisePLayer(players, currentPlayerIndex);
    if (PlayerRiseInThisRound) {
        return PlayerRiseInThisRound.lastBet;
    }
    return 0;
}
function getLastRisePLayer(players, currentPlayerIndex) {
    var currentPlayer = players[currentPlayerIndex];
    var round = currentPlayer.movesInRound.length;
    var playerRiseLastInThisRound;
    players.forEach(function (p) {
        if (p.movesInRound[round - 1] == PlayerMovesOption.rise) {
            playerRiseLastInThisRound = p;
        }
    });
    return playerRiseLastInThisRound;
}
function chooseMove(players, movesOptions, sizeOfBet, pointOfOptionalSet, player) {
    var movesOptionsLength = movesOptions.length;
    if (movesOptionsLength === 2) { //check or rise
        var randomNumToMove = Math.round(Math.random() * 1);
        var randomMove = movesOptions[randomNumToMove];
        if (pointOfOptionalSet < 2)
            player.checkMove(players);
        if (pointOfOptionalSet == 2) {
            if (randomMove === "rise") {
                player.riseMove(players, player.turnNumber, sizeOfBet);
            }
            else {
                player.checkMove(players);
            }
        }
        if (pointOfOptionalSet >= 3) {
            player.riseMove(players, player.turnNumber, sizeOfBet);
        }
    }
    if (movesOptionsLength == 3) { //rise or call or fold
        var randomNumToMove = Math.round(Math.random() * 2);
        var randomMove = movesOptions[randomNumToMove];
        var lastBetSize = riseBetSizeInThisRound(players, player.turnNumber);
        if (pointOfOptionalSet < 2)
            if (randomMove == "call" && lastBetSize <= sizeOfBet) {
                player.callMove(players, lastBetSize);
            }
            else {
                player.foldMove(players);
            }
        if (pointOfOptionalSet == 2) {
            if (randomMove == "call" && lastBetSize <= sizeOfBet) {
                player.callMove(players, lastBetSize);
            }
            if (randomMove == "rise" && lastBetSize <= sizeOfBet) {
                player.riseMove(players, player.turnNumber, sizeOfBet);
            }
            else {
                player.foldMove(players);
            }
        }
        if (pointOfOptionalSet >= 3) {
            if (randomMove == "call") {
                player.callMove(players, player.turnNumber);
            }
            else
                player.riseMove(players, player.turnNumber, sizeOfBet);
        }
    }
}
function getSizeOfBet(pointOfOptionalSet, playerChips) {
    var randomNum = 0;
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
// function realPlayerTurn(players:Player[]){
//  let moveOption  = getMoveOption(players, 0)
// //להפעיל כפתורים בהתאמה עם איוונטים
// }
var counterTurn = 0;
var indexInArray = 0;
function realPLayersOrderTurn(players) {
    if (indexInArray == 0) {
        players[0].checkMove(players);
        indexInArray++;
        counterTurn++;
    }
    else {
        if (counterTurn < 4 && indexInArray < players.length) {
            players[indexInArray].doingTurn(players, indexInArray);
            if (players[indexInArray].lastBet > 0) {
                counterTurn = 0;
            }
            indexInArray++;
            counterTurn++;
        }
        else
            counterTurn = 0;
    }
}
