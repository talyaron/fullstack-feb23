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
        currentPlayer.doingTurn(activePlayers, currentPlayerIndex);
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
    var lastPlyersRiseIndex = activePlayers.findIndex(function (p) { return p.movesInRound[length - 1] === PlayerMovesOption.call; });
    if (lastPlyersRiseIndex === -1 || lastPlyersRiseIndex == thisIndex) {
        return [
            PlayerMovesOption.rise,
            PlayerMovesOption.call,
            PlayerMovesOption.check,
        ];
    }
    else {
        return [
            PlayerMovesOption.rise,
            PlayerMovesOption.call,
            PlayerMovesOption.fold,
        ];
    }
}
function getChanceToBet(thisPlayer) {
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
function riseMove(players, currentPlayerIndex) {
    var currentPlayer = players[currentPlayerIndex];
    currentPlayer.movesInRound.push(PlayerMovesOption.rise);
    localStorage.setItem("players", JSON.stringify(players));
    //התור יעבור לבא אחריו
}
function callMove(players, currentPlayerIndex) {
    if (currentPlayerIndex != 0 && players[currentPlayerIndex - 1].lastBet > 0) {
        riseBetSizeInThisRound(players, currentPlayerIndex) > 0;
        var currentPlayer = players[currentPlayerIndex];
        currentPlayer.movesInRound.push(PlayerMovesOption.call);
        var betToCall = players[currentPlayerIndex - 1].lastBet;
        currentPlayer.lastBet = betToCall;
        localStorage.setItem("players", JSON.stringify(players));
    }
    //התור יעבור לבא אחריו
}
function foldMove(players, currentPlayerIndex) {
    var currentPlayer = players[currentPlayerIndex];
    currentPlayer.movesInRound.push(PlayerMovesOption.fold);
    currentPlayer.lastBet = 0;
    currentPlayer.isActive = false;
    localStorage.setItem("players", JSON.stringify(players));
    //התור יעבור לבא אחריו
}
function checkMove(players, currentPlayerIndex) {
    var currentPlayer = players[currentPlayerIndex];
    if (currentPlayerIndex == 0 ||
        players[currentPlayerIndex - 1].movesInRound[length - 1] ==
            PlayerMovesOption.check) {
        currentPlayer.movesInRound.push(PlayerMovesOption.check);
        currentPlayer.lastBet = 0;
    }
    localStorage.setItem("players", JSON.stringify(players));
    //התור יעבור לבא אחריו
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
