//Active Game ts .......
function loadBoardsAGpage(): Board[]|undefined{
    try {
        // Load existing game boards from storage or return an empty array if none exist
        const boardsString = localStorage.getItem('gamesBoards');
        if (boardsString) {
          return JSON.parse(boardsString);
        } else {
          return [];
        }
      } catch (error) {
        console.error("Error loading game board:", error);
        return [];
      }
}

function renderBoard(board: Board) {
    debugger
    const boardContainer = document.getElementById('Board');
    if (!boardContainer) {
      console.error('Board container not found');
      return;
    }
  
    // Clear previous board
    boardContainer.innerHTML = '';
  
    // Create a 2D matrix for rendering the board cells
    const matrixSize =10; // Assuming an 11x11 matrix for demonstration
    const matrix = new Array(matrixSize);
    for (let i = 0; i < matrixSize; i++) {
      matrix[i] = new Array(matrixSize);
    }
  
    // Fill the matrix with empty cells
    for (let i = 0; i < matrixSize; i++) {
      for (let j = 0; j < matrixSize; j++) {
        matrix[i][j] = document.createElement('div');
        matrix[i][j].classList.add('board-cell');
        matrix[i][j].id=`${i}-${j}`
         if (i === 0 || i === matrixSize - 1 || j === 0 || j === matrixSize - 1)
        matrix[i][j].style.border = '1px solid pink';
       
        boardContainer.appendChild( matrix[i][j]);
      }
    }
  
   
  }
  
  
  
const gamesBoardsAGpage : Board[]| undefined = loadBoardsAGpage();
const currentGame= gamesBoardsAGpage?.find(game=> game.gameStatus===true)
        if (!currentGame) throw new Error("Cannot find game Activ Game");
renderBoard(currentGame)
console.log(gamesBoardsAGpage);
