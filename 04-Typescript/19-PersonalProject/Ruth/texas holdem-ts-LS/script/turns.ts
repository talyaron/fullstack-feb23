function turnOrder(players) {
  const stage = document.querySelector(".stage") as HTMLDivElement;
  let currentPlayerIndex = 0;

  performTurn(players, stage, currentPlayerIndex);
}

function performTurn(
  players: Player[],
  stage: HTMLElement,
  currentPlayerIndex: number,
) {
    try{
        const currentPlayer = players[currentPlayerIndex];
        let activePlayers = players.filter((p) => p.isActive === true);
      
        activePlayers.map((p) => (p.isTurn = false));
        currentPlayer.setActive();
        currentPlayer.isTurn = true
        currentPlayer.doingTurn(activePlayers, currentPlayerIndex);
      
        currentPlayerIndex++;
      
        if (currentPlayerIndex >= players.length && stage.children.length < 6) {
          currentPlayerIndex = 0;
          if (stage.children.length < 6) {
            addCardToStage();
          }
        }
      
        setTimeout(() => performTurn(players, stage, currentPlayerIndex), 500);

    }
    catch(error){
        console.error(error)
    }
}

// turnOrder(players);

function getMoveOption(activePlayers: Player[], thisIndex: number) {
  let lastPlyersRiseIndex = activePlayers.findIndex(
    (p) => p.movesInRound[length - 1] === PlayerMovesOption.call,
  );
  if (lastPlyersRiseIndex === -1 || lastPlyersRiseIndex == thisIndex) {
    return [
      PlayerMovesOption.rise,
      PlayerMovesOption.call,
      PlayerMovesOption.check,
    ];
  } else {
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
