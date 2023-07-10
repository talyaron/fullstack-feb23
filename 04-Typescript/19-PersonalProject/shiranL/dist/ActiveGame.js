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
function renderBoard(currentGame) {
    var boardContainer = document.getElementById('Board');
    if (!boardContainer) {
        console.error('Board container not found');
        return;
    }
    if (!currentGame) {
        console.error('currentGame not found');
        return;
    }
    // Clear previous board
    boardContainer.innerHTML = '';
    // const hotels=currentGame.hotels;
    var jails = currentGame.jails;
    var counter = 1; // Initialize counter
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
            // Check if it's an outer frame cell
            // Check if it's an outer frame cell
            if (i === 0 || i === matrixSize - 1 || j === 0 || j === matrixSize - 1) {
                matrix[i][j].style.border = '1px solid pink';
                matrix[i][j].style.cursor = 'pointer';
            }
            boardContainer.appendChild(matrix[i][j]);
        }
    }
    // set the frame of the board
    //Y=o
    for (var i = 0; i < matrixSize; i++) {
        matrix[i][matrixSize - 1].value = counter;
        matrix[i][0].textContent = counter; // Set the cell content to the counter value
        counter++; // Increment the counter
    }
    // X = matrixSize-1
    for (var i = 1; i < matrixSize - 1; i++) {
        matrix[i][matrixSize - 1].value = counter;
        matrix[matrixSize - 1][i].textContent = counter; // Set the cell content to the counter value
        counter++; // Increment the counter
    }
    //Y=matrixSize-1
    for (var i = matrixSize - 1; i > 0; i--) {
        matrix[i][matrixSize - 1].value = counter;
        matrix[i][matrixSize - 1].textContent = counter; // Set the cell content to the counter value
        counter++; // Increment the counter
    }
    //x=0
    for (var i = matrixSize - 1; i > 0; i--) {
        matrix[0][i].value = counter;
        matrix[0][i].textContent = counter; // Set the cell content to the counter value
        counter++; // Increment the counter
    }
    // set jails
    var JailIndex = 0;
    jails.forEach(function (jail) {
        putJailOnBoard(jail, JailIndex);
        JailIndex++;
    });
}
function putJailOnBoard(jail, JailIndex) {
    var cell;
    var jailBtn;
    var jailimg;
    var jailId;
    switch (JailIndex) { // set jails in the corners of the board
        case 0:
            cell = document.getElementById('0-0');
            break;
        case 1:
            cell = document.getElementById('0-9');
            break;
        case 2:
            cell = document.getElementById('9-9');
            break;
        case 3:
            cell = document.getElementById('9-0');
            break;
    }
    jailBtn = document.createElement('bottun');
    jailBtn.classList.add('jailBtn');
    jailBtn.innerHTML = jail.jailName;
    jailimg = document.createElement('img');
    jailimg.src = jail.jailImg;
    jailId = document.createElement('p');
    jailId.innerHTML = "id:" + jail.jailId;
    jailId.id = jail.jailId;
    jailBtn.appendChild(jailimg);
    jailBtn.appendChild(jailId);
    cell === null || cell === void 0 ? void 0 : cell.appendChild(jailBtn);
    cell.name = "jail";
    cell.style.backgroundColor = 'red';
}
//   function putHotelOnBoard(hotel:Hotel,hotelIndex:number){
//     let cell;
//     let hotelBtn;
//     let hotelimg;
//     let hotellId;
//     switch (hotelIndex) { // set jails in the corners of the board
//       case 0:
//         cell = document.getElementById('0-1')
//         break;
//       case 1:
//           cell = document.getElementById('0-2')
//           break;
//       case 2:
//           cell = document.getElementById('0-3')
//           break;
//       case 3:
//             cell = document.getElementById('0-4')
//             break;
//     }
//     hotelBtn= document.createElement('bottun')
//     hotelBtn.classList.add('hotelBtn')
//     hotelBtn.innerHTML=hotel.hotelName.
//     cell.appendChild(hotelBtn)
// }
var gamesBoardsAGpage = loadBoardsAGpage();
var currentGame = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (game) { return game.gameStatus === true; });
//shape of the board
renderBoard(currentGame);
console.log(gamesBoardsAGpage);
