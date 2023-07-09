//Active Game ts .......
function loadBoardsAGpage() {
    try {
        // Load existing game boards from storage or return an empty array if none exist
        var boardsString = localStorage.getItem('gamesBoards');
        if (boardsString) {
            return JSON.parse(boardsString);
        }
        else {
            return [];
        }
    }
    catch (error) {
        console.error("Error loading game board:", error);
        return [];
    }
}
function renderBoard(board) {
    debugger;
    var boardContainer = document.getElementById('Board');
    if (!boardContainer) {
        console.error('Board container not found');
        return;
    }
    // Clear previous board
    boardContainer.innerHTML = '';
    // Create a 2D matrix for rendering the board cells
    var matrixSize = 10; // Assuming an 11x11 matrix for demonstration
    var matrix = new Array(matrixSize);
    for (var i = 0; i < matrixSize; i++) {
        matrix[i] = new Array(matrixSize);
    }
    // Fill the matrix with empty cells
    for (var i = 0; i < matrixSize; i++) {
        for (var j = 0; j < matrixSize; j++) {
            matrix[i][j] = document.createElement('div');
            matrix[i][j].classList.add('board-cell');
            matrix[i][j].id = i + "-" + j;
            if (i === 0 || i === matrixSize - 1 || j === 0 || j === matrixSize - 1)
                matrix[i][j].style.border = '1px solid pink';
            boardContainer.appendChild(matrix[i][j]);
        }
    }
}
var gamesBoardsAGpage = loadBoardsAGpage();
var currentGame = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (game) { return game.gameStatus === true; });
if (!currentGame)
    throw new Error("Cannot find game Activ Game");
renderBoard(currentGame);
console.log(gamesBoardsAGpage);
