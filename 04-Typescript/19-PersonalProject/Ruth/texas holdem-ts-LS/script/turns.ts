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
  try {
    const currentPlayer = players[currentPlayerIndex];
    let activePlayers = players.filter((p) => p.isActive === true);

    activePlayers.map((p) => (p.isTurn = false));
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

    setTimeout(() => performTurn(players, stage, currentPlayerIndex), 500);
  } catch (error) {
    console.error(error);
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

function getChanceToBet(thisPlayer: Player) {
  const thisPCards = thisPlayer.allCards;
  const setsResult: boolean[] = [
    checkPair(thisPCards)!,
    checkTwoPairs(thisPCards)!,
    checkThreeOfAKind(thisPCards)!,
    checkStraight(thisPCards)!,
    checkFlush(thisPCards)!,
    checkFullHouse(thisPCards)!,
    checkFourOfAKind(thisPCards)!,
    checkStraightFlush(thisPCards)!,
    checkRoyalFlush(thisPCards)!,
  ];
  console.log(setsResult);

  let maxPointsSet: number = 0;
  setsResult.forEach((res, i) => {
    if (res === true) maxPointsSet += i + 1;
  });
  return maxPointsSet;
}

function riseMove(players: Player[], currentPlayerIndex: number) {
  const currentPlayer = players[currentPlayerIndex];
  currentPlayer.movesInRound.push(PlayerMovesOption.rise);

  localStorage.setItem("players", JSON.stringify(players));
  //התור יעבור לבא אחריו
}

function callMove(players: Player[], currentPlayerIndex: number) {
  if (currentPlayerIndex != 0 && players[currentPlayerIndex - 1].lastBet > 0) {
    riseBetSizeInThisRound( players, currentPlayerIndex) > 0;

    const currentPlayer = players[currentPlayerIndex];
    currentPlayer.movesInRound.push(PlayerMovesOption.call);

    const betToCall = players[currentPlayerIndex - 1].lastBet;
    currentPlayer.lastBet = betToCall;

    localStorage.setItem("players", JSON.stringify(players));
  }
  //התור יעבור לבא אחריו
}

function foldMove(players: Player[], currentPlayerIndex: number) {
  const currentPlayer = players[currentPlayerIndex];
  currentPlayer.movesInRound.push(PlayerMovesOption.fold);
  currentPlayer.lastBet = 0;
  currentPlayer.isActive = false;

  localStorage.setItem("players", JSON.stringify(players));
  //התור יעבור לבא אחריו
}

function checkMove(players: Player[], currentPlayerIndex: number) {
  const currentPlayer = players[currentPlayerIndex];
  if (
    currentPlayerIndex == 0 ||
    players[currentPlayerIndex - 1].movesInRound[length - 1] ==
      PlayerMovesOption.check
  ) {
    currentPlayer.movesInRound.push(PlayerMovesOption.check);
    currentPlayer.lastBet = 0;
  }
  localStorage.setItem("players", JSON.stringify(players));
  //התור יעבור לבא אחריו
}

function riseBetSizeInThisRound(players: Player[], currentPlayerIndex: number) {
 const PlayerRiseInThisRound:Player|undefined = getLastRisePLayer(players, currentPlayerIndex)
 if(PlayerRiseInThisRound){
   return PlayerRiseInThisRound.lastBet
 }
 return 0
}

function getLastRisePLayer(players: Player[], currentPlayerIndex: number) {
  const currentPlayer = players[currentPlayerIndex];
  const round = currentPlayer.movesInRound.length;
  let playerRiseLastInThisRound 
 players.forEach((p) => {
    if (p.movesInRound[round - 1] == PlayerMovesOption.rise) {
      playerRiseLastInThisRound = p;
    }
  });
  return playerRiseLastInThisRound;
}
