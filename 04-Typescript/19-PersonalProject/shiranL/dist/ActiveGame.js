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
    // set cities
    var players = currentGame.players;
    players.forEach(function (player) {
        putPlayerOnBoard(player);
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
        var cityBtn1 = void 0;
        var cityBtn2 = void 0;
        var cityBtn3 = void 0;
        switch (cityIndex) { // set jails in the corners of the board
            case 0: //ROVA A - get tree matrix cell to fill the city
                cell1 = document.getElementById('cell36');
                cell2 = document.getElementById('cell35');
                cell3 = document.getElementById('cell34');
                if (!cell1 || !cell2 || !cell3)
                    throw new Error("cant find cells");
                cityBtn1 = document.createElement('bottun');
                cityBtn1.id = "" + city.cityId;
                cityBtn1.classList.add('RovaA');
                //add event on click to render city card
                debugger;
                cityBtn1.addEventListener('click', function () { renderCityCard(city.cityId); });
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "" + city.cityId;
                cityBtn2.classList.add('RovaA');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "" + city.cityId;
                cityBtn3.classList.add('RovaA');
                cell3.appendChild(cityBtn3);
                break;
            case 1: //Rova Bet
                cell1 = document.getElementById('cell29');
                cell2 = document.getElementById('cell30');
                cell3 = document.getElementById('cell31');
                if (!cell1 || !cell2 || !cell3)
                    throw new Error("cant find cells");
                cityBtn1 = document.createElement('bottun');
                cityBtn1.id = "" + city.cityId;
                cityBtn1.classList.add('RovaBet');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "" + city.cityId;
                cityBtn2.classList.add('RovaBet');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "" + city.cityId;
                cityBtn3.classList.add('RovaBet');
                cell3.appendChild(cityBtn3);
                break;
            case 2: //Rova Gimel
                cell1 = document.getElementById('cell25');
                cell2 = document.getElementById('cell26');
                cell3 = document.getElementById('cell27');
                if (!cell1 || !cell2 || !cell3)
                    throw new Error("cant find cells");
                cityBtn1 = document.createElement('bottun');
                cityBtn1.id = "" + city.cityId;
                cityBtn1.classList.add('RovaGimel');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "" + city.cityId;
                cityBtn2.classList.add('RovaGimel');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "" + city.cityId;
                cityBtn3.classList.add('RovaGimel');
                cell3.appendChild(cityBtn3);
                break;
            case 3: //Rova Daled
                cell1 = document.getElementById('cell20');
                cell2 = document.getElementById('cell21');
                cell3 = document.getElementById('cell22');
                if (!cell1 || !cell2 || !cell3)
                    throw new Error("cant find cells");
                cityBtn1 = document.createElement('bottun');
                cityBtn1.id = "" + city.cityId;
                cityBtn1.classList.add('RovaDaled');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "" + city.cityId;
                cityBtn2.classList.add('RovaDaled');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "" + city.cityId;
                cityBtn3.classList.add('RovaDaled');
                cell3.appendChild(cityBtn3);
                break;
            case 4: //Rova CITY
                cell1 = document.getElementById('cell16');
                cell2 = document.getElementById('cell17');
                cell3 = document.getElementById('cell18');
                if (!cell1 || !cell2 || !cell3)
                    throw new Error("cant find cells");
                cityBtn1 = document.createElement('bottun');
                cityBtn1.id = "" + city.cityId;
                cityBtn1.classList.add('RovaCITY');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "" + city.cityId;
                cityBtn2.classList.add('RovaCITY');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "" + city.cityId;
                cityBtn3.classList.add('RovaCITY');
                cell3.appendChild(cityBtn3);
                break;
            case 5: //Rova TetVav
                cell1 = document.getElementById('cell11');
                cell2 = document.getElementById('cell12');
                cell3 = document.getElementById('cell13');
                if (!cell1 || !cell2 || !cell3)
                    throw new Error("cant find cells");
                cityBtn1 = document.createElement('bottun');
                cityBtn1.id = "" + city.cityId;
                cityBtn1.classList.add('RovaTetVav');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "" + city.cityId;
                cityBtn2.classList.add('RovaTetVav');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "" + city.cityId;
                cityBtn3.classList.add('RovaTetVav');
                cell3.appendChild(cityBtn3);
                break;
            case 6: //Rova YudBet
                cell1 = document.getElementById('cell7');
                cell2 = document.getElementById('cell8');
                cell3 = document.getElementById('cell9');
                if (!cell1 || !cell2 || !cell3)
                    throw new Error("cant find cells");
                cityBtn1 = document.createElement('bottun');
                cityBtn1.id = "" + city.cityId;
                cityBtn1.classList.add('RovaYudBet');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "" + city.cityId;
                cityBtn2.classList.add('RovaYudBet');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "" + city.cityId;
                cityBtn3.classList.add('RovaYudBet');
                cell3.appendChild(cityBtn3);
                break;
            case 7: //Rova YudAlef
                cell1 = document.getElementById('cell2');
                cell2 = document.getElementById('cell3');
                cell3 = document.getElementById('cell4');
                if (!cell1 || !cell2 || !cell3)
                    throw new Error("cant find cells");
                cityBtn1 = document.createElement('bottun');
                cityBtn1.id = "" + city.cityId;
                cityBtn1.classList.add('RovaYudAlef');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "" + city.cityId;
                cityBtn2.classList.add('RovaYudAlef');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "" + city.cityId;
                cityBtn3.classList.add('RovaYudAlef');
                cell3.appendChild(cityBtn3);
                break;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderCityCard(cityId) {
    var _a, _b, _c;
    try {
        debugger;
        var dialog = document.createElement('dialog'); // Create a dialog element
        dialog.classList.add('city-dialog'); // Add a custom CSS class for styling
        var diaylogForm = document.createElement('form');
        var spanClose = document.createElement('button');
        spanClose.classList.add('close');
        spanClose.addEventListener('click', closePopup);
        diaylogForm.appendChild(spanClose);
        var cityCard = document.createElement('div');
        cityCard.id = "cityCard" + cityId;
        cityCard.classList.add('cityCard');
        var cityName = document.createElement('h1');
        var cityBuyPrice = document.createElement('h2');
        var cityRentPrice = document.createElement('h2');
        var owner = document.createElement('h2');
        var city_1 = (_a = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (board) { return board.cities.find(function (city) { return city.cityId === cityId; }); })) === null || _a === void 0 ? void 0 : _a.cities.find(function (city) { return city.cityId === cityId; });
        if (!city_1)
            throw new Error("cant find city");
        cityName.innerHTML = "" + city_1.cityName;
        cityBuyPrice.innerHTML = "Buy Price : " + city_1.monetaryValue;
        cityRentPrice.innerHTML = "Rent Price : " + city_1.rentValue;
        var ownerName = (_c = (_b = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (board) { return board.cities.find(function (city) { return city.cityId === cityId; }); })) === null || _b === void 0 ? void 0 : _b.players.find(function (player) { var _a; return player.playerId === ((_a = city_1.cityOwner) === null || _a === void 0 ? void 0 : _a.playerId); })) === null || _c === void 0 ? void 0 : _c.userName;
        owner.innerHTML = "Owner : " + (ownerName || "No Owner");
        if (!ownerName) {
            var buyBtn = document.createElement('button');
            buyBtn.classList.add('buyBtn');
            buyBtn.innerHTML = "Buy";
            cityCard.appendChild(buyBtn);
            // buyBtn.addEventListener('click',()=>{buyCity(cityId,city.monetaryValue)}); 
        }
        else {
            var payBtn = document.createElement('button');
            payBtn.classList.add('payBtn');
            payBtn.innerHTML = "Pay";
            cityCard.appendChild(payBtn);
            // payBtn.addEventListener('click',()=>{payRent(cityId,city.rentValue)});
        }
        cityCard.appendChild(cityName);
        cityCard.appendChild(cityBuyPrice);
        cityCard.appendChild(cityRentPrice);
        cityCard.appendChild(owner);
        diaylogForm.appendChild(cityCard);
        dialog.appendChild(diaylogForm);
        document.body.appendChild(dialog); // Append the dialog to the document body
        dialog.showModal(); // Display the dialog as a modal
        // Generate and display the random number
    }
    catch (error) {
        console.error(error);
    }
}
function putPlayerOnBoard(player) {
    try {
        var cell = document.getElementById('cell5');
        if (!cell)
            throw new Error("cant find cell");
        var playerHtml = document.createElement('div');
        playerHtml.classList.add('player');
        playerHtml.id = "" + player.playerId;
        playerHtml.style.backgroundImage = "url(\"./dist/" + player.playerId + ".png\")";
        cell.appendChild(playerHtml);
        cell.style.display = "flex"; // Set the display property to "flex"
        cell.style.flexWrap = "wrap"; // Set the flex-wrap property to "wrap"
        //playerStep(player.playerId)
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
function playerStep(playerId) {
    try {
        var playerDiv = document.getElementById("player" + playerId);
        if (!playerDiv)
            throw new Error("cant find playerDiv");
        var currentCell = playerDiv.parentElement; // Get the current cell of the player
        if (!currentCell)
            throw new Error("cant find currentCell");
        //   // Get the next cell based on the current cell's ID
        var currentCellId = currentCell.id.match(/\d+/);
        //   const nextCellId = [currentCellId[0] - 1, currentCellId[1]]; // Move one cell up
        if (!currentCellId)
            throw new Error("cant find currentCellId");
        var nextCell = document.getElementById("cell" + (Number(currentCellId[0]) + 1));
        if (!nextCell)
            throw new Error("cant find nextCell");
        nextCell.appendChild(playerDiv); // Move the player to the next cell
    }
    catch (error) {
        console.error(error);
    }
}
function dropCube() {
    try {
        var cube = document.getElementById("cubeButton");
        if (!cube)
            throw new Error("Can't find cube.");
        cube.style.display = "none"; // Hide the cube initially
        setTimeout(function () {
            if (!cube)
                throw new Error("Can't find cube.");
            cube.style.display = "block"; // Show the cube after a delay
            cube.classList.add("rotate-animation");
            setTimeout(function () {
                cube === null || cube === void 0 ? void 0 : cube.classList.remove("rotate-animation");
                showPopup();
                generateRandomNumber();
            }, 2000);
        }, 500);
    }
    catch (error) {
        console.error(error);
    }
}
function showPopup() {
    try {
        var dialog = document.createElement('dialog'); // Create a dialog element
        dialog.classList.add('popup-dialog'); // Add a custom CSS class for styling
        var spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.addEventListener('click', closePopup);
        spanClose.innerHTML = '&times;';
        dialog.appendChild(spanClose);
        var numDiv = document.createElement('div');
        numDiv.id = "randomNumber";
        numDiv.classList.add('randomNumber');
        dialog.appendChild(numDiv);
        document.body.appendChild(dialog); // Append the dialog to the document body
        dialog.showModal(); // Display the dialog as a modal
        generateRandomNumber();
        // Generate and display the random number
    }
    catch (error) {
        console.error(error);
    }
}
function closePopup() {
    try {
        var dialog = document.querySelector('dialog'); // Get the dialog element
        if (!dialog)
            throw new Error("Can't find dialog.");
        dialog.close(); // Close the dialog
        dialog.remove(); // Remove the dialog element from the DOM
    }
    catch (error) {
        console.error(error);
    }
}
function generateRandomNumber() {
    try {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        var randomNumberElement = document.getElementById("randomNumber");
        if (!randomNumberElement)
            throw new Error("cant find randomNumberElement ");
        randomNumberElement.textContent = randomNumber.toString();
        // save value to board game
        if (!currentGame)
            throw new Error("cant find current game");
        currentGame.luckyCube = randomNumber;
    }
    catch (error) {
        console.error(error);
    }
}
function renderInCells() {
    var beginCell = document.getElementById("4-1");
    var beginDiv = document.createElement('div');
    beginDiv.classList.add('begin');
    beginCell === null || beginCell === void 0 ? void 0 : beginCell.appendChild(beginDiv);
}
var gamesBoardsAGpage = loadBoardsAGpage();
var currentGame = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (game) { return game.gameStatus === true; });
//shape of the board
renderBoard(currentGame);
renderOptionsBtns(gamesBoardsAGpage);
renderInCells();
console.log(gamesBoardsAGpage);
