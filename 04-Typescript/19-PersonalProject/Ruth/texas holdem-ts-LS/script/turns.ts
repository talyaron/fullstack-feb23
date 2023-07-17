let dealerMoney = 0;
// function turnOrder(players) {
//   const stage = document.querySelector(".stage") as HTMLDivElement;
//   let currentPlayerIndex = 0;

//   performTurn(players, stage, currentPlayerIndex);
// }

// function performTurn(
//   players: Player[],
//   stage: HTMLElement,
//   currentPlayerIndex: number,
// ) {
//   try {
//     const currentPlayer = players[currentPlayerIndex];
//     let activePlayers = players.filter((p) => p.isActive === true);

//     activePlayers.map((p) => (p.isTurn = false));
//     currentPlayer.setActive();
//     currentPlayer.isTurn = true;
//     currentPlayer.doingTurn(activePlayers, currentPlayerIndex); ///התור

//     currentPlayerIndex++;

//     if (currentPlayerIndex >= players.length && stage.children.length < 6) {
//       currentPlayerIndex = 0;
//       if (stage.children.length < 6) {
//         addCardToStage();
//       }
//     }

//     setTimeout(() => performTurn(players, stage, currentPlayerIndex), 500);
//   } catch (error) {
//     console.error(error);
//   }
// }

// turnOrder(players);

function getMoveOption(activePlayers: Player[], thisIndex: number) {
  const thisPlayer = activePlayers[thisIndex];


  // let lastPlyersRiseIndex = activePlayers.findIndex(
  //   (p) => p.movesInRound[length - 1] === PlayerMovesOption.call,
  // );
  // if (lastPlyersRiseIndex === -1 || lastPlyersRiseIndex == thisIndex) {
  //   return ["rise", "check"];
  // } else {
  //   return ["fold", "rise", "call"];
  // }

  for (let i = thisIndex ; i >= 0 ; i--){
    if(activePlayers[i].movesInRound[length - 1] === PlayerMovesOption.rise){
      return ["fold", "rise", "call"];
    }
    if (i == 0 ) i= activePlayers.length
    if (i== thisIndex) return ["rise", "check"];
  }
}

function getPointOfOptionalSet(thisPlayer: Player) {
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

function riseBetSizeInThisRound(players: Player[], currentPlayerIndex: number) {
  const PlayerRiseInThisRound: Player | undefined = getLastRisePLayer(
    players,
    currentPlayerIndex,
  );
  if (PlayerRiseInThisRound) {
    return PlayerRiseInThisRound.lastBet;
  }
  return 0;
}

function getLastRisePLayer(players: Player[], currentPlayerIndex: number) {
  const currentPlayer = players[currentPlayerIndex];
  const round = currentPlayer.movesInRound.length;
  let playerRiseLastInThisRound;
  players.forEach((p) => {
    if (p.movesInRound[round -1] == PlayerMovesOption.rise) {
      playerRiseLastInThisRound = p;
    }
  });
  return playerRiseLastInThisRound;
}

function chooseMove(
  players: Player[],
  movesOptions: string[],
  sizeOfBet: number,
  pointOfOptionalSet: number,
  player: Player,
) {
  const movesOptionsLength = movesOptions.length;

  if (movesOptionsLength === 2) {
    //check or rise

    let randomNumToMove = Math.round(Math.random() * 1);
    let randomMove = movesOptions[randomNumToMove];

    if (pointOfOptionalSet < 2) player.checkMove(players);

    if (pointOfOptionalSet == 2) {
      if (randomMove === "rise") {
        player.riseMove(players, sizeOfBet);
      } else {
        player.checkMove(players);
      }
    }

    if (pointOfOptionalSet >= 3) {
      player.riseMove(players, sizeOfBet);
    }
  }

  if (movesOptionsLength == 3) {
    //rise or call or fold

    let randomNumToMove = Math.round(Math.random() * 2);
    let randomMove = movesOptions[randomNumToMove];
    let lastBetSize = riseBetSizeInThisRound(players, player.turnNumber);

    if (pointOfOptionalSet < 2)
      if (randomMove == "call" && lastBetSize <= sizeOfBet) {
        player.callMove(players, lastBetSize);
      } else {
        player.foldMove(players);
      }

    if (pointOfOptionalSet == 2) {
      if (randomMove == "call" && lastBetSize <= sizeOfBet) {
        player.callMove(players, lastBetSize);
      }
      if (randomMove == "rise" && lastBetSize <= sizeOfBet) {
        player.riseMove(players, sizeOfBet);
      } else {
        player.foldMove(players);
      }
    }

    if (pointOfOptionalSet >= 3) {
      if (randomMove == "call") {
        player.callMove(players, player.turnNumber);
      } else player.riseMove(players, sizeOfBet);
    }
  }
}

function getSizeOfBet(pointOfOptionalSet: number, playerChips: number) {
  let randomNum = 0;
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

let counterTurn = 0;
let indexInArray = 0;
function turnOrder(activePlayers: Player[]) {/////----------------------------הוא מדלג על השחקן השני קבוע!!------------------------------------------------------
  let players = activePlayers.filter((p) => p.isActive === true);
  players.forEach(p=> {console.log(p.movesInRound);
  })
  
  if (players[indexInArray].id == "myPlayer") {
    indexInArray++;
    counterTurn++;
    myTurn(players)
    
    
  } else {
    indexInArray++;
    counterTurn++;
    document.querySelectorAll("button").forEach((button) => {button.disabled = true})

    if (counterTurn < 4 || indexInArray < players.length) {
      players[indexInArray].doingTurn(players, indexInArray);
      
      if (players[indexInArray].lastBet > 0) {
        counterTurn = 0;
      }

    } else {
      addCardToStage()
      counterTurn = 0;
      indexInArray = 0;
    }
  }
}

turnOrder(players);


function myTurn(players: Player[]) {
  const myPlayer = players.find((p) => p.id == "myPlayer");
  const myPlayerIndex = players.findIndex((p) => p.id == "myPlayer");
  const myOption = getMoveOption(players, myPlayerIndex);

console.log(`${myPlayer?.userName} is doing somethig......`);
playTheButton(myOption)

}






