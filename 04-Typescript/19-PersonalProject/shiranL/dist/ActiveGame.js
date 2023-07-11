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
            matrix[i][j].classList.add('board__cell');
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
        // matrix[i][matrixSize-1].value = counter;
        matrix[i][0].id = "cell" + counter; // Set the cell content to the counter value
        counter++; // Increment the counter
    }
    // X = matrixSize-1
    for (var i = 1; i < matrixSize - 1; i++) {
        //  matrix[i][matrixSize-1].value = counter;
        matrix[matrixSize - 1][i].id = "cell" + counter; // Set the cell content to the counter value
        counter++; // Increment the counter
    }
    //Y=matrixSize-1
    for (var i = matrixSize - 1; i > 0; i--) {
        //  matrix[i][matrixSize-1].value = counter;
        matrix[i][matrixSize - 1].id = "cell" + counter; // Set the cell content to the counter value
        counter++; // Increment the counter
    }
    //x=0
    for (var i = matrixSize - 1; i > 0; i--) {
        //  matrix[0][i].value = counter;
        matrix[0][i].id = "cell" + counter; // Set the cell content to the counter value
        counter++; // Increment the counter
    }
    // set jails
    var jails = currentGame.jails;
    var JailIndex = 0;
    jails.forEach(function (jail) {
        putJailOnBoard(jail, JailIndex);
        JailIndex++;
    });
    // set cities
    var cityIndex = 0;
    var cities = currentGame.cities;
    cities.forEach(function (city) {
        putCityOnBoard(city, cityIndex);
        cityIndex++;
    });
}
function putJailOnBoard(jail, JailIndex) {
    var cell;
    switch (JailIndex) { // set jails in the corners of the board
        case 0:
            cell = document.getElementById('cell1');
            break;
        case 1:
            cell = document.getElementById('cell28');
            break;
        case 2:
            cell = document.getElementById('cell19');
            break;
        case 3:
            debugger;
            cell = document.getElementById('cell10');
            break;
    }
    // create elements for jail
    var jailBtn = document.createElement('bottun');
    jailBtn.classList.add('jailBtn');
    jailBtn.id = "" + jail.jailId;
    //jailBtn.innerHTML=jail.jailName
    var jailimg = document.createElement('img');
    jailimg.src = jail.jailImg;
    jailBtn.appendChild(jailimg);
    cell === null || cell === void 0 ? void 0 : cell.appendChild(jailBtn);
    // cell.name="jail"
}
function putCityOnBoard(city, cityIndex) {
    try {
        var cell1 = void 0;
        var cell2 = void 0;
        var cell3 = void 0;
        switch (cityIndex) { // set jails in the corners of the board
            case 0: //ROVA A - get tree matrix cell to fill the city
                cell1 = document.getElementById('cell36');
                cell2 = document.getElementById('cell35');
                cell3 = document.getElementById('cell34');
                if (!cell1 || !cell2 || !cell3)
                    throw new Error("cant find cells");
                var cityBtn1 = document.createElement('bottun');
                cityBtn1.id = "" + city.cityId;
                cityBtn1.classList.add('RovaA');
                cell1.appendChild(cityBtn1);
                var cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "" + city.cityId;
                cityBtn2.classList.add('RovaA');
                cell2.appendChild(cityBtn2);
                var cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "" + city.cityId;
                cityBtn3.classList.add('RovaA');
                cell3.appendChild(cityBtn3);
                break;
            case 1:
            case 2:
            case 3:
        }
        // create elements for city
        //   // cell2?.appendChild(cityBtn);
        //   // cell3?.appendChild(cityBtn);
        //  // cell.name="jail"
    }
    catch (error) {
        console.error(error);
    }
}
function renderOptionsBtns(gamesBoardsAGpage) {
    try {
        var htmlOptionsBtns = document.querySelector("#optionsBtns");
        if (!htmlOptionsBtns)
            throw new Error("Cant find optionsBtns");
        var html = "<form>\n    <input type=\"button\" onclick=\"gameOver()\" class=\"optionsBtns__Button\" value=\"End game\">\n    <input type=\"button\" onclick=\"backHome()\" class=\"optionsBtns__Button\" value=\"Back\">\n </form>";
        htmlOptionsBtns.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function backHome() {
    if (!gamesBoardsAGpage)
        throw new Error("cant find gamesBoardsAGpage");
    saveBoardsForOpenGame(gamesBoardsAGpage);
    console.log("Game started!");
    window.location.href = "./HomePage.html";
}
function gameOver() {
    try {
        debugger;
        if (!gamesBoardsAGpage)
            throw new Error("cant find gamesBoardsAGpage");
        var currentGame_1 = gamesBoardsAGpage.find(function (board) { return board.gameStatus === true; });
        if (!currentGame_1)
            throw new Error("cant find currentGame");
        currentGame_1.gameStatus = false;
        backHome();
    }
    catch (error) {
        console.error(error);
    }
}
function saveBoardsForOpenGame(boards) {
    try {
        if (!boards)
            throw new Error("Cant find boards");
        // Save the updated list of boards to local storage
        var boardsJson = JSON.stringify(boards);
        localStorage.setItem('gamesBoards', boardsJson);
    }
    catch (error) {
        console.error(error);
    }
}
var gamesBoardsAGpage = loadBoardsAGpage();
var currentGame = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (game) { return game.gameStatus === true; });
//shape of the board
renderBoard(currentGame);
renderOptionsBtns(gamesBoardsAGpage);
console.log(gamesBoardsAGpage);
