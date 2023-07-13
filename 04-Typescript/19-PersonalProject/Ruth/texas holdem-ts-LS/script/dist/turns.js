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
// function getChanceToBet(thisPlayer: Player) {
//     const thisPCards = thisPlayer.allCards
//     checkHighCard()
//     checkFullHouse()checkTwoPairs()checkFourOfAKind()checkThreeOfAKind()checkTwoOfAKind()
// }
