var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    // Get the board container element 
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
    //set all the cells in the board  
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
    // set Good surprises
    setGoodSurprises();
    // set bad surprises
    setBadSurprises();
    // set random suprise btn 
    setBadBtnForRandom(currentGame.badThings);
    setGoodBtnForRandom(currentGame.goodThings);
    putCubeOnBoard();
    renderOptionsBtns(gamesBoardsAGpage);
}
function setGoodSurprises() {
    try {
        //create button for each cell
        var goodS1 = document.createElement('button');
        goodS1.classList.add('goodS');
        goodS1.id = 'goodS1';
        var goodS2 = document.createElement('button');
        goodS2.classList.add('goodS');
        goodS2.id = 'goodS2';
        var goodS3 = document.createElement('button');
        goodS3.classList.add('goodS');
        goodS3.id = 'goodS3';
        var goodS4 = document.createElement('button');
        goodS4.classList.add('goodS');
        goodS4.id = 'goodS4';
        var cell1 = document.getElementById('cell33');
        if (!cell1)
            throw new Error("cant find cell33");
        cell1.appendChild(goodS1);
        var cell2 = document.getElementById('cell24');
        if (!cell2)
            throw new Error("cant find cell24");
        cell2.appendChild(goodS2);
        var cell3 = document.getElementById('cell15');
        if (!cell3)
            throw new Error("cant find cell15");
        cell3.appendChild(goodS3);
        var cell4 = document.getElementById('cell6');
        if (!cell4)
            throw new Error("cant find cell6");
        cell4.appendChild(goodS4);
    }
    catch (error) {
        console.error(error);
    }
}
function setBadSurprises() {
    try {
        //create button for each cell
        var BadS1 = document.createElement('button');
        BadS1.classList.add('BadS');
        BadS1.id = 'BadS1';
        var BadS2 = document.createElement('button');
        BadS2.classList.add('BadS');
        BadS2.id = 'BadS2';
        var BadS3 = document.createElement('button');
        BadS3.classList.add('BadS');
        BadS3.id = 'BadS1';
        var cell1 = document.getElementById('cell32');
        if (!cell1)
            throw new Error("cant find cell32");
        cell1.appendChild(BadS1);
        var cell2 = document.getElementById('cell23');
        if (!cell2)
            throw new Error("cant find cell23");
        cell2.appendChild(BadS2);
        var cell3 = document.getElementById('cell14');
        if (!cell3)
            throw new Error("cant find cell14");
        cell3.appendChild(BadS3);
    }
    catch (error) {
        console.error(error);
    }
}
function setBadBtnForRandom(badThings) {
    //on click btn will render random suprise
    try {
        var bads = document.getElementById('2-7');
        if (!bads)
            throw new Error("canf find cell 2-7");
        var BadThings = document.createElement('button');
        BadThings.classList.add('BadThings');
        BadThings.disabled = true;
        BadThings.addEventListener('click', function () { RandomBadSuprise(badThings); });
        bads.appendChild(BadThings);
    }
    catch (error) {
        console.error(error);
    }
}
function RandomBadSuprise(badThings) {
    // Get a random bad thing from the array
    var randomBadThing = badThings[Math.floor(Math.random() * badThings.length)];
    // Create a dialog element
    var dialog = document.createElement('dialog');
    dialog.classList.add('dialog-card');
    // Create title element
    var title = document.createElement('h3');
    title.innerText = randomBadThing.badThingsTitel;
    dialog.appendChild(title);
    // Create description element
    var description = document.createElement('p');
    description.innerText = randomBadThing.badThingsDescription;
    dialog.appendChild(description);
    // Create purchase price element
    var purchasePrice = document.createElement('p');
    purchasePrice.innerText = 'Purchase Price: ' + randomBadThing.purchasePrice.toString();
    dialog.appendChild(purchasePrice);
    // Create close button
    var closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.addEventListener('click', function () {
        // Close the dialog when the close button is clicked
        dialog.close();
    });
    dialog.appendChild(closeButton);
    // Append the dialog to the document body
    document.body.appendChild(dialog);
    // Show the dialog
    dialog.showModal();
}
function setGoodBtnForRandom(goodThings) {
    //on click btn will render random suprise
    try {
        var goods = document.getElementById('2-2');
        if (!goods)
            throw new Error("canf find cell 2-2");
        var GoodThings = document.createElement('button');
        GoodThings.classList.add('GoodThings');
        GoodThings.id = 'GoodThingsBt';
        GoodThings.disabled = true;
        GoodThings.addEventListener('click', function () { RandomGoodSuprise(goodThings); });
        goods.appendChild(GoodThings);
    }
    catch (error) {
        console.error(error);
    }
}
function RandomGoodSuprise(goodThings) {
    try {
        // Get a random bad thing from the array  
        var randomGoodThing = goodThings[Math.floor(Math.random() * goodThings.length)];
        // Create a dialog element  
        var dialog_1 = document.createElement('dialog');
        dialog_1.classList.add('dialog-card');
        // Create title element 
        var title = document.createElement('h3');
        title.innerText = randomGoodThing.goodThingsTitel;
        dialog_1.appendChild(title);
        // Create description element 
        var description = document.createElement('p');
        description.innerText = randomGoodThing.goodThingsDescription;
        dialog_1.appendChild(description);
        // Create purchase price element
        var winPrice = document.createElement('p');
        winPrice.innerText = 'Purchase Price: ' + randomGoodThing.winningPrice.toString();
        dialog_1.appendChild(winPrice);
        // Create close button
        var closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.addEventListener('click', function () {
            // Close the dialog when the close button is clicked
            dialog_1.close();
        });
        dialog_1.appendChild(closeButton);
        // Append the dialog to the document body 
        document.body.appendChild(dialog_1);
        // Show the dialog
        dialog_1.showModal();
    }
    catch (error) {
        Error(error);
    }
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
    if (!cell)
        throw new Error("cant find cell");
    var jailBtn = document.createElement('bottun');
    jailBtn.classList.add('jailBtn');
    jailBtn.id = "jail" + jail.jailId;
    jailBtn.style.backgroundImage = "url('" + jail.jailImg + "')";
    cell.appendChild(jailBtn);
}
function putCityOnBoard(city, cityIndex) {
    try {
        var cell1 = void 0;
        var cell2 = void 0;
        var cell3 = void 0;
        var cityBtn1 = void 0;
        var cityBtn2 = void 0;
        var cityBtn3 = void 0;
        switch (cityIndex) { // set cities in the corners of the board
            case 0: //ROVA A - get 3 matrix cell to fill the city
                cell1 = document.getElementById('cell36');
                cell2 = document.getElementById('cell35');
                cell3 = document.getElementById('cell34');
                if (!cell1 || !cell2 || !cell3)
                    throw new Error("cant find cells");
                cityBtn1 = document.createElement('bottun');
                cityBtn1.id = "city" + city.cityId;
                cityBtn1.classList.add('RovaA');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "city" + city.cityId;
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
                cityBtn1.id = "city" + city.cityId;
                cityBtn1.classList.add('RovaBet');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "city" + city.cityId;
                cityBtn2.classList.add('RovaBet');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "city" + city.cityId;
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
                cityBtn1.id = "city" + city.cityId;
                cityBtn1.classList.add('RovaGimel');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "city" + city.cityId;
                cityBtn2.classList.add('RovaGimel');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "city" + city.cityId;
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
                cityBtn1.id = "city" + city.cityId;
                cityBtn1.classList.add('RovaDaled');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "city" + city.cityId;
                cityBtn2.classList.add('RovaDaled');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "city" + city.cityId;
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
                cityBtn1.id = "city" + city.cityId;
                cityBtn1.classList.add('RovaCITY');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "city" + city.cityId;
                cityBtn2.classList.add('RovaCITY');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "city" + city.cityId;
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
                cityBtn1.id = "city" + city.cityId;
                cityBtn1.classList.add('RovaTetVav');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "city" + city.cityId;
                cityBtn2.classList.add('RovaTetVav');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "city" + city.cityId;
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
                cityBtn1.id = "city" + city.cityId;
                cityBtn1.classList.add('RovaYudBet');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "city" + city.cityId;
                cityBtn2.classList.add('RovaYudBet');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "city" + city.cityId;
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
                cityBtn1.id = "city" + city.cityId;
                cityBtn1.classList.add('RovaYudAlef');
                cell1.appendChild(cityBtn1);
                cityBtn2 = document.createElement('bottun');
                cityBtn2.id = "city" + city.cityId;
                cityBtn2.classList.add('RovaYudAlef');
                cell2.appendChild(cityBtn2);
                cityBtn3 = document.createElement('bottun');
                cityBtn3.id = "city" + city.cityId;
                cityBtn3.classList.add('RovaYudAlef');
                cell3.appendChild(cityBtn3);
                break;
        }
        //add event on click to render city card
        cityBtn1.addEventListener('click', function () { renderCityCard(city.cityId); });
        cityBtn2.addEventListener('click', function () { renderCityCard(city.cityId); });
        cityBtn3.addEventListener('click', function () { renderCityCard(city.cityId); });
    }
    catch (error) {
        console.error(error);
    }
}
function putPlayerOnBoard(player) {
    try {
        var cell = document.getElementById("" + player.cellId);
        if (!cell)
            throw new Error("cant find cell");
        cell.style.display = "flex"; // Set the display property to "flex"
        cell.style.flexWrap = "wrap"; // Set the flex-wrap property to "wrap"
        var playerHtml = document.createElement('div');
        playerHtml.classList.add('player');
        playerHtml.id = "player" + player.playerId;
        playerHtml.style.backgroundImage = "url(\"./dist/" + player.playerId + ".png\")";
        playerHtml.style.zIndex = "999";
        cell.appendChild(playerHtml);
        //playerStep(player.playerId)
    }
    catch (error) {
        console.error(error);
    }
}
function putCubeOnBoard() {
    try {
        var cell = document.getElementById('3-4');
        if (!cell)
            throw new Error("Can't find cell '3-4'");
        // Get the cube button element
        var cubeButton = document.getElementById('cubeButton');
        if (!cubeButton)
            throw new Error("Can't find cube button");
        // Remove the cube button from its current parent
        var currentParent = cubeButton.parentElement;
        if (currentParent)
            currentParent.removeChild(cubeButton);
        // Append the cube button to the desired cell
        cell.appendChild(cubeButton);
        // Show the cube button
        cubeButton.style.display = 'block';
    }
    catch (error) {
        console.error(error);
    }
}
function renderOptionsBtns(gamesBoardsAGpage) {
    try {
        var currentGame_1 = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (board) { return board.gameStatus === true; });
        var htmlOptionsBtns = document.getElementById('4-7');
        if (!htmlOptionsBtns)
            throw new Error("Cant find optionsBtns");
        var html = "<form>\n    <input type=\"button\" id='IDplay' onclick=\"play()\" class=\"optionsBtns__Button\" value=\"Start Game\">\n    <input type=\"button\" onclick=\"gameOver()\" class=\"optionsBtns__Button\" value=\"End game\">\n    <input type=\"button\" onclick=\"backHome()\" class=\"optionsBtns__Button\" value=\"Back\">\n </form>";
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
        var currentGame_2 = gamesBoardsAGpage.find(function (board) { return board.gameStatus === true; });
        if (!currentGame_2)
            throw new Error("cant find currentGame");
        currentGame_2.gameStatus = false;
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
function playerStep(playerId, hasLandedOnCity) {
    var _a;
    try {
        if (!currentGame)
            throw new Error("cant find currentGame");
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
        var nextCellId = Number(currentCellId[0]) + 1;
        if (nextCellId === 36)
            nextCellId = 1;
        var nextCell = document.getElementById("cell" + Number(nextCellId));
        if (!nextCell)
            throw new Error("cant find nextCell");
        nextCell.appendChild(playerDiv); // Move the player to the next cell
        if (hasLandedOnCity) {
            var cellId_1 = getCityIdFromPosition(nextCell);
            var cellName = (_a = nextCell.firstChild) === null || _a === void 0 ? void 0 : _a.id.replace(/\d+/g, ''); // Replace with your logic to get the cityId
            if (!cellName)
                throw new Error("cant find cellName");
            // if have class list RovaA| rovaBet| rovaGimel| rovaDaled| rovaCITY| rovaTetVav| rovaYudBet| rovaYudAlef 
            if (cellName === 'city') {
                rendercityCardRentOrBuy(cellId_1, playerId);
            }
            else if (cellName === 'jail') {
                // if user in jail he cant play for one turn
                //find the jail
                var jail = currentGame.jails.find(function (jail) { return jail.jailId === cellId_1; });
                if (!jail)
                    throw new Error("cant find jail");
                //find the player
                var player = currentGame.players.find(function (player) { return player.playerId === playerId; });
                if (!player)
                    throw new Error("cant find player");
                //check if player have jail card
                if (player.isJail === true) {
                    player.isJail = false;
                    return;
                }
                else {
                    player.isJail = true;
                    renderJailCard(jail, playerId);
                }
            }
            else if (cellName === 'goodS') {
                var goodS_1 = document.getElementById('GoodThingsBt');
                if (!goodS_1)
                    throw new Error("cant find GoodThingsBtn");
                goodS_1.classList.add('enlarge-animation');
                setTimeout(function () {
                    goodS_1.classList.remove('enlarge-animation');
                }, 3000);
                if (!currentGame)
                    throw new Error("cant find currentGame");
                var goodsId = Math.floor(Math.random() * (currentGame.goodThings.length - 1)) + 1;
                rendergoodsCard(goodsId, playerId);
            }
            else if (cellName === 'BadS') {
                var badsId = Math.floor(Math.random() * (currentGame.badThings.length - 1)) + 1;
                renderBadsCard(badsId, playerId);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderJailCard(jail, playerID) {
    try {
        if (!currentGame)
            throw new Error("cant find currentGame");
        if (!jail)
            throw new Error("cant find jail");
        var dialog_2 = document.createElement('dialog'); // Create a dialog element 
        dialog_2.classList.add('dialog-card'); // Add a custom CSS class for styling
        var spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.addEventListener('click', closePopup);
        spanClose.innerHTML = 'stay in jail for one turn';
        dialog_2.appendChild(spanClose);
        var title = document.createElement('h3');
        title.innerText = jail.jailName;
        dialog_2.appendChild(title);
        var description = document.createElement('p');
        var purchasePrice = document.createElement('p');
        purchasePrice.innerText = 'Purchase Price: ' + jail.earlyReleaseCost.toString();
        dialog_2.appendChild(purchasePrice);
        //add btn to pay for early release  
        var payBtn = document.createElement('button');
        payBtn.innerText = 'Pay';
        payBtn.addEventListener('click', function () {
            // Close the dialog when the close button is clicked  
            dialog_2.close();
            //remove player from jail 
            var player = currentGame.players.find(function (player) { return player.playerId === playerID; });
            if (!player)
                throw new Error("cant find player");
            player.isJail = false;
            player.Pbank -= jail.earlyReleaseCost;
            alert("you paid " + jail.earlyReleaseCost + " to get out of jail");
            //if player bank is less then 0 he lost the game
            playerIfLose(playerID);
        });
        dialog_2.appendChild(payBtn);
        document.body.appendChild(dialog_2);
        dialog_2.showModal();
    }
    catch (error) {
        console.error(error);
    }
}
function checkPlayerPbank(playerID) {
    if (!currentGame)
        throw new Error("cant find currentGame");
    var player = currentGame.players.find(function (player) { return player.playerId === playerID; });
    if (!player)
        throw new Error("cant find player");
    if (player.Pbank <= 0)
        return false;
    else
        return true;
}
function playerIfLose(playerID) {
    debugger;
    try {
        if (!currentGame)
            throw new Error("cant find currentGame");
        var isPlayerLose = checkPlayerPbank(playerID);
        if (!isPlayerLose) {
            var playerDiv = document.getElementById("player" + playerID);
            if (!playerDiv)
                throw new Error("cant find playerDiv");
            playerDiv.style.display = "none"; // Set the display property to "flex"
            playerDiv.style.flexWrap = "wrap"; // Set the flex-wrap property to "wrap"
            //remove player from players list
            var player = currentGame.players.find(function (player) { return player.playerId === playerID; });
            if (!player)
                throw new Error("cant find player");
            player.status = false;
            //check if there is only one player left
            var players = currentGame.players.filter(function (player) { return player.status === true; });
            if (players.length === 1) {
                //end game
                alert("Game Over, the winner is player " + players[0].playerId + " : " + players[0].userName);
                gameOver();
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function getCityIdFromPosition(nextCell) {
    try {
        if (!nextCell.firstChild)
            throw new Error("cant find nextCell.firstChild");
        var nextCellId = nextCell.firstChild.id.match(/\d+/);
        // Get the city ID from the cell's first child ID 
        if (!nextCellId)
            throw new Error("cant find cityId");
        return Number(nextCellId[0]);
    }
    catch (error) {
        console.error(error);
    }
}
function dropCube() {
    try {
        var cube_1 = document.getElementById("cubeButton");
        if (!cube_1)
            throw new Error("Can't find cube.");
        cube_1.classList.add("rotate-animation");
        showPopup();
        saveLuckeyCube();
        setTimeout(function () {
            cube_1.classList.remove("rotate-animation");
        }, 2000);
    }
    catch (error) {
        console.error(error);
    }
}
function saveLuckeyCube() {
    try {
        if (!gamesBoardsAGpage)
            throw new Error("cant find gamesBoardsAGpage");
        var currentGame_3 = gamesBoardsAGpage.find(function (board) { return board.gameStatus === true; });
        if (!currentGame_3)
            throw new Error("cant find currentGame");
        var luckeyCube = document.getElementById("randomNumber");
        if (!luckeyCube)
            throw new Error("Can't find luckeyCube.");
        currentGame_3.luckyCube = Number(luckeyCube.textContent);
        console.log(currentGame_3.luckyCube);
    }
    catch (error) {
        console.error(error);
    }
}
function showPopup() {
    try {
        var dialog = document.createElement('dialog'); // Create a dialog element
        dialog.classList.add('dialog-card'); // Add a custom CSS class for styling
        var spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.addEventListener('click', closePopup);
        spanClose.innerHTML = 'X';
        dialog.appendChild(spanClose);
        var randNumber = getRandomNumber(1, 6);
        var numDiv = document.createElement('div');
        numDiv.id = "randomNumber";
        numDiv.classList.add('randomNumber');
        numDiv.textContent = randNumber.toString();
        dialog.appendChild(numDiv);
        document.body.appendChild(dialog); // Append the dialog to the document body
        dialog.showModal(); // Display the dialog as a modal
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
function renderIBeginCell() {
    var beginCell = document.getElementById("4-1");
    var beginDiv = document.createElement('div');
    beginDiv.classList.add('begin');
    beginCell === null || beginCell === void 0 ? void 0 : beginCell.appendChild(beginDiv);
}
function play() {
    try {
        // hide play btn 
        var playBtn = document.getElementById('IDplay');
        if (!playBtn)
            throw new Error("Can't find playBtn.");
        playBtn.style.display = 'none';
        // show cube btn 
        var cube = document.getElementById('cubeButton');
        if (!cube)
            throw new Error("Can't find cube.");
        cube.style.display = 'block';
        if (!gamesBoardsAGpage)
            throw new Error("Can't find gamesBoardsAGpage");
        var currentGame_4 = gamesBoardsAGpage.find(function (board) { return board.gameStatus === true; });
        if (!currentGame_4)
            throw new Error("Can't find currentGame");
        var players_1 = currentGame_4.players.filter(function (player) { return player.status === true; });
        //get current players status game
        renderPlayersStatusGame();
        // Define a function to wrap the player's turn logic in a Promise
        function playPlayerTurn(player) {
            return new Promise(function (resolve, reject) {
                var cube = document.getElementById('cubeButton');
                if (!cube)
                    throw new Error("Can't find cube");
                cube.disabled = false;
                cube.style.display = 'block';
                cube.style.border = '2px solid green';
                cube.innerHTML = 'Press Me';
                cube.value = 'Drop the cube';
                var playerDiv = document.getElementById("player" + player.playerId);
                if (!playerDiv)
                    throw new Error("Can't find playerDiv");
                playerDiv.classList.add('currentPlayer');
                // Resolve the Promise when the player drops the cube (e.g., on a button click event)
                cube.addEventListener('click', function () {
                    cube.disabled = true;
                    cube.style.display = 'none';
                    cube.style.border = 'none';
                    playerDiv.classList.remove('currentPlayer');
                    resolve(void 0);
                });
            });
        }
        // Define an async function to iterate over the players and wait for each turn to finish
        function iteratePlayers() {
            return __awaiter(this, void 0, void 0, function () {
                var _i, players_2, currentPlayer, index, newCell, parentCell, cellButton, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(players_1.length > 1)) return [3 /*break*/, 7];
                            _i = 0, players_2 = players_1;
                            _a.label = 1;
                        case 1:
                            if (!(_i < players_2.length)) return [3 /*break*/, 6];
                            currentPlayer = players_2[_i];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            console.log("Player: " + currentPlayer.playerId);
                            return [4 /*yield*/, playPlayerTurn(currentPlayer)];
                        case 3:
                            _a.sent();
                            if (!currentGame_4)
                                throw new Error("Can't find currentGame");
                            // Continue with the remaining logic for the player's turn
                            if (currentGame_4.luckyCube !== 0) {
                                console.log("Player " + currentPlayer.playerId + " is playing");
                                for (index = 1; index <= currentGame_4.luckyCube; index++) {
                                    if (index === currentGame_4.luckyCube)
                                        playerStep(currentPlayer.playerId, true);
                                    else
                                        playerStep(currentPlayer.playerId, false);
                                }
                                newCell = document.getElementById("player" + currentPlayer.playerId);
                                if (!newCell)
                                    throw new Error("Can't find newCell");
                                parentCell = newCell.parentNode;
                                if (!parentCell)
                                    throw new Error("Can't find parentCell");
                                currentPlayer.cellId = parentCell.id;
                                currentGame_4.luckyCube = 0;
                                cellButton = parentCell.firstChild;
                                if (!cellButton)
                                    throw new Error("Can't find cellButton");
                            }
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _a.sent();
                            console.error(error_1);
                            return [3 /*break*/, 5];
                        case 5:
                            _i++;
                            return [3 /*break*/, 1];
                        case 6:
                            players_1 = players_1.filter(function (player) { return player.status === true; });
                            return [3 /*break*/, 0];
                        case 7:
                            if (players_1.length === 1) {
                                console.log("Player " + players_1[0].playerId + " is the winner!");
                            }
                            else {
                                console.log("The game has ended with no winner.");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        // Call the async function to start the iteration over players
        iteratePlayers()["catch"](function (error) { return console.error(error); });
    }
    catch (error) {
        console.error(error);
    }
}
function buyCity(cityId, playerId) {
    if (!gamesBoardsAGpage)
        throw new Error("Can't find gamesBoardsAGpage");
    var currentGame = gamesBoardsAGpage.find(function (board) { return board.gameStatus === true; });
    if (!currentGame)
        throw new Error("Can't find currentGame");
    var city = currentGame.cities.find(function (city) { return city.cityId === cityId; });
    if (!city)
        throw new Error("Can't find city");
    var player = currentGame.players.find(function (player) { return player.playerId === playerId; });
    if (!player)
        throw new Error("Can't find player");
    player.Pbank -= city.monetaryValue;
    playerIfLose(player.playerId);
    if (checkPlayerPbank(player.playerId)) {
        city.cityOwner = player;
        console.log("player " + city.cityOwner.playerId + ": pBank " + player.Pbank);
        console.log(currentGame);
        alert("Congratulations! You are now the owner of " + city.cityName + ". Your Pbank balance is " + player.Pbank + ".");
    }
    // border color to city have owner
    debugger;
    var cityBtn = document.getElementById("city" + cityId);
    if (!cityBtn)
        throw new Error("Can't find cityBtn");
    // find class
    var cityClass = cityBtn.classList[0];
    // add border color to city have owner
    var cityBtns = document.querySelectorAll("." + cityClass);
    cityBtns.forEach(function (cityBtn) {
        cityBtn.classList.add('cityOwner');
    });
    renderPlayersStatusGame();
}
function payRent(cityId, playerId) {
    var _a, _b;
    if (!gamesBoardsAGpage)
        throw new Error("Can't find gamesBoardsAGpage");
    var currentGame = gamesBoardsAGpage.find(function (board) { return board.gameStatus === true; });
    if (!currentGame)
        throw new Error("Can't find currentGame");
    var city = currentGame.cities.find(function (city) { return city.cityId === cityId; });
    if (!city)
        throw new Error("Can't find city");
    var player = currentGame.players.find(function (player) { return player.playerId === playerId; });
    if (!player)
        throw new Error("Can't find player");
    if (player.Pbank < city.rentValue)
        throw new Error("Player doesn't have enough money");
    player.Pbank -= city.rentValue;
    playerIfLose(player.playerId);
    if (!city.cityOwner)
        throw new Error("Can't find cityOwner");
    city.cityOwner.Pbank += city.rentValue;
    console.log("player pay " + player.playerId + ":" + player.Pbank);
    console.log("player get " + ((_a = city.cityOwner) === null || _a === void 0 ? void 0 : _a.playerId) + " :" + ((_b = city.cityOwner) === null || _b === void 0 ? void 0 : _b.Pbank));
    renderPlayersStatusGame();
}
function renderCityCard(cityId) {
    var _a;
    try {
        var dialog = document.createElement('dialog'); // Create a dialog element
        dialog.classList.add('dialog-card'); // Add a custom CSS class for styling
        var diaylogForm = document.createElement('form');
        diaylogForm.id = "cityCard" + cityId;
        var btnClose = document.createElement('button');
        btnClose.innerHTML = 'close';
        btnClose.addEventListener('click', closePopup);
        diaylogForm.appendChild(btnClose);
        var cityName = document.createElement('h1');
        var cityBuyPrice = document.createElement('h2');
        var cityRentPrice = document.createElement('h2');
        var owner = document.createElement('h2');
        if (!currentGame)
            throw new Error("cant find currentGame");
        var city = currentGame.cities.find(function (city) { return city.cityId === cityId; });
        if (!city)
            throw new Error("cant find city");
        cityName.innerHTML = "" + city.cityName;
        cityBuyPrice.innerHTML = "Buy Price : " + city.monetaryValue;
        cityRentPrice.innerHTML = "Rent Price : " + city.rentValue;
        var ownerName = (_a = city.cityOwner) === null || _a === void 0 ? void 0 : _a.userName;
        owner.innerHTML = "Owner : " + (ownerName || "No Owner");
        diaylogForm.appendChild(cityName);
        diaylogForm.appendChild(cityBuyPrice);
        diaylogForm.appendChild(cityRentPrice);
        diaylogForm.appendChild(owner);
        dialog.appendChild(diaylogForm);
        document.body.appendChild(dialog); // Append the dialog to the document body
        dialog.showModal(); // Display the dialog as a modal
    }
    catch (error) {
        console.error(error);
    }
}
function rendercityCardRentOrBuy(cityId, playerId) {
    var _a;
    try {
        if (!currentGame)
            throw new Error("Can't find currentGame");
        // If the city has an owner, render pay rent; else, render buy city or pick a good gift
        var city = currentGame.cities.find(function (city) { return city.cityId === cityId; });
        if (!city)
            throw new Error("Can't find city");
        var dialog_3 = document.createElement('dialog');
        dialog_3.classList.add('dialog-card');
        var dialogForm = document.createElement('form');
        dialogForm.id = "cityCard" + cityId;
        // Prevent form submission
        dialogForm.addEventListener('submit', function (e) {
            e.preventDefault();
        });
        var cityName = document.createElement('h1');
        cityName.innerHTML = "" + city.cityName;
        dialogForm.appendChild(cityName);
        var cityBuyPrice = document.createElement('h2');
        cityBuyPrice.innerHTML = "Buy Price: " + city.monetaryValue;
        dialogForm.appendChild(cityBuyPrice);
        var cityRentPrice = document.createElement('h2');
        cityRentPrice.innerHTML = "Rent Price: " + city.rentValue;
        dialogForm.appendChild(cityRentPrice);
        var owner = document.createElement('h2');
        owner.innerHTML = "Owner: " + (((_a = city.cityOwner) === null || _a === void 0 ? void 0 : _a.userName) || 'No Owner');
        dialogForm.appendChild(owner);
        if (city.cityOwner) {
            var payBtn = document.createElement('button');
            payBtn.classList.add('payBtn');
            payBtn.innerHTML = "Pay";
            payBtn.addEventListener('click', function () {
                payRent(cityId, playerId);
                dialog_3.close();
            });
            dialogForm.appendChild(payBtn);
        }
        else {
            var buyBtn = document.createElement('button');
            buyBtn.classList.add('buyBtn');
            buyBtn.innerHTML = "Buy";
            buyBtn.addEventListener('click', function () {
                buyCity(cityId, playerId);
                dialog_3.close();
            });
            dialogForm.appendChild(buyBtn);
            // Render choose present button
            // pic random present from goodThings
            var goodsId_1 = Math.floor(Math.random() * (currentGame.goodThings.length - 1)) + 1;
            var choosePresentBtn = document.createElement('button');
            choosePresentBtn.classList.add('choosePresentBtn');
            choosePresentBtn.innerHTML = "Choose Present";
            choosePresentBtn.addEventListener('click', function () {
                rendergoodsCard(goodsId_1, playerId);
                dialog_3.close();
            });
            dialogForm.appendChild(choosePresentBtn);
        }
        dialog_3.appendChild(dialogForm);
        document.body.appendChild(dialog_3);
        dialog_3.showModal();
    }
    catch (error) {
        console.error(error);
    }
}
function rendergoodsCard(goodsId, playerId) {
    try {
        if (!currentGame)
            throw new Error("Can't find gamesBoardsAGpage");
        var goods = currentGame.goodThings.find(function (good) { return good.goodThingsId === goodsId; });
        if (!goods)
            throw new Error("Can't find goods");
        var dialog_4 = document.createElement('dialog');
        dialog_4.classList.add('dialog-card');
        // Create title element 
        var title = document.createElement('h3');
        title.innerText = goods.goodThingsTitel;
        dialog_4.appendChild(title);
        // Create description element
        var description = document.createElement('p');
        description.innerText = goods.goodThingsDescription;
        dialog_4.appendChild(description);
        // Create purchase price element  
        var winPrice = document.createElement('p');
        winPrice.innerText = 'Purchase Price: ' + goods.winningPrice.toString();
        dialog_4.appendChild(winPrice);
        // Create close button  
        var closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.addEventListener('click', function () {
            // Close the dialog when the close button is clicked  
            dialog_4.close();
        });
        dialog_4.appendChild(closeButton);
        // Append the dialog to the document body 
        document.body.appendChild(dialog_4);
        // Show the dialog  
        dialog_4.showModal();
        var player = currentGame.players.find(function (player) { return player.playerId === playerId; });
        if (!player)
            throw new Error("Can't find player");
        player.Pbank += goods.winningPrice;
        console.log("player " + player.playerId + ": pBank " + player.Pbank);
        console.log(currentGame);
        renderPlayersStatusGame();
    }
    catch (error) {
        console.error(error);
    }
}
function renderBadsCard(BadsId, playerId) {
    try {
        if (!currentGame)
            throw new Error("Can't find gamesBoardsAGpage");
        var bads = currentGame.badThings.find(function (bad) { return bad.badThingsId === BadsId; });
        if (!bads)
            throw new Error("Can't find bads");
        var dialog_5 = document.createElement('dialog');
        dialog_5.classList.add('dialog-card');
        // Create title element 
        var title = document.createElement('h3');
        title.innerText = bads.badThingsTitel;
        dialog_5.appendChild(title);
        // Create description element
        var description = document.createElement('p');
        description.innerText = bads.badThingsDescription;
        dialog_5.appendChild(description);
        // Create purchase price element  
        var finePrice = document.createElement('p');
        finePrice.innerText = 'fine Price: ' + bads.purchasePrice.toString();
        dialog_5.appendChild(finePrice);
        // Create close button  
        var closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.addEventListener('click', function () {
            // Close the dialog when the close button is clicked  
            dialog_5.close();
        });
        dialog_5.appendChild(closeButton);
        // Append the dialog to the document body 
        document.body.appendChild(dialog_5);
        // Show the dialog  
        dialog_5.showModal();
        var player = currentGame.players.find(function (player) { return player.playerId === playerId; });
        if (!player)
            throw new Error("Can't find player");
        player.Pbank -= bads.purchasePrice;
        playerIfLose(player.playerId);
        console.log(" \u05D0\u05D7\u05E8\u05D9 \u05E7\u05E0\u05E1player " + player.playerId + ": pBank " + player.Pbank);
        console.log(currentGame);
        renderPlayersStatusGame();
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayersStatusGame() {
    try {
        var htmlPlayersStatusGame_1 = document.getElementById('7-4');
        if (!htmlPlayersStatusGame_1)
            throw new Error("cant find playersStatus");
        htmlPlayersStatusGame_1.innerHTML = "";
        var players = currentGame === null || currentGame === void 0 ? void 0 : currentGame.players.filter(function (player) { return player.status === true; });
        if (!players)
            throw new Error("Cant find players");
        players.forEach(function (player) {
            var html = "<div class=\"playersStatus__player\"> \n    <div class=\"playersStatus__player__id\">Player " + player.playerId + "</div>  \n    <div class=\"playersStatus__player__name\">Player " + player.userName + "</div>  \n    <div class=\"playersStatus__player__bank\">Bank: " + player.Pbank + "</div>  \n    <div class=\"playersStatus__player__cell\">Cell: " + player.cellId + "</div> \n    </div>";
            htmlPlayersStatusGame_1.innerHTML += html;
        });
    }
    catch (error) {
        console.error(error);
    }
}
var gamesBoardsAGpage = loadBoardsAGpage();
var currentGame = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (game) { return game.gameStatus === true; });
//shape of the board
renderBoard(currentGame);
renderIBeginCell();
