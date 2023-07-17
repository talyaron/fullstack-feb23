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
    var jailBtn = document.createElement('bottun');
    jailBtn.classList.add('jailBtn');
    jailBtn.id = "jail" + jail.jailId;
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
function renderCityCard(cityId) {
    var _a, _b, _c;
    try {
        var dialog = document.createElement('dialog'); // Create a dialog element
        dialog.classList.add('cityDialog'); // Add a custom CSS class for styling
        var diaylogForm = document.createElement('form');
        diaylogForm.classList.add('cityDialog__cityCardForm');
        diaylogForm.id = "cityCard" + cityId;
        var btnClose = document.createElement('button');
        btnClose.classList.add('closeCityDialog');
        btnClose.innerHTML = 'X';
        btnClose.addEventListener('click', closePopup);
        diaylogForm.appendChild(btnClose);
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
        diaylogForm.appendChild(cityName);
        diaylogForm.appendChild(cityBuyPrice);
        diaylogForm.appendChild(cityRentPrice);
        diaylogForm.appendChild(owner);
        // if(!ownerName)
        // {
        //   const buyBtn=document.createElement('button');
        //   buyBtn.classList.add('buyBtn');
        //   buyBtn.innerHTML=`Buy`;
        //   diaylogForm.appendChild(buyBtn);
        //   // buyBtn.addEventListener('click',()=>{buyCity(cityId,city.monetaryValue)}); 
        // }
        // else{
        //   const payBtn=document.createElement('button');
        //   payBtn.classList.add('payBtn');
        //   payBtn.innerHTML=`Pay`;
        //   diaylogForm.appendChild(payBtn);
        //   // payBtn.addEventListener('click',()=>{payRent(cityId,city.rentValue)});
        // }
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
function renderOptionsBtns(gamesBoardsAGpage) {
    try {
        var currentGame_1 = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (board) { return board.gameStatus === true; });
        var htmlOptionsBtns = document.querySelector("#optionsBtns");
        if (!htmlOptionsBtns)
            throw new Error("Cant find optionsBtns");
        var html = "<form>\n    <input type=\"button\" onclick=\"play()\" class=\"optionsBtns__Button\" value=\"Start Game\">\n    <input type=\"button\" onclick=\"gameOver()\" class=\"optionsBtns__Button\" value=\"End game\">\n    <input type=\"button\" onclick=\"backHome()\" class=\"optionsBtns__Button\" value=\"Back\">\n </form>";
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
        var nextCellId = Number(currentCellId[0]) + 1;
        if (nextCellId === 36)
            nextCellId = 1;
        var nextCell = document.getElementById("cell" + Number(nextCellId));
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
        dialog.classList.add('popup-dialog'); // Add a custom CSS class for styling
        var spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.addEventListener('click', closePopup);
        spanClose.innerHTML = '&times;';
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
// function play() {
//   try {
//     if (!gamesBoardsAGpage) throw new Error("Can't find gamesBoardsAGpage");
//     const currentGame = gamesBoardsAGpage.find((board) => board.gameStatus === true);
//     if (!currentGame) throw new Error("Can't find currentGame");
//     let players = currentGame.players.filter((player) => player.status === true);
//     // Define a function to wrap the player's turn logic in a Promise
//     function playPlayerTurn(player) {
//       return new Promise((resolve, reject) => {
//         const cube = document.getElementById('cubeButton') as HTMLButtonElement;
//         if (!cube) throw new Error("Can't find cube");
//         cube.disabled = false;
//         cube.style.border = '1px solid green';
//         // Resolve the Promise when the player drops the cube (e.g., on a button click event)
//         cube.addEventListener('click', () => {
//           cube.disabled = true;
//           cube.style.border = 'none';
//           // Rest of the turn logic...
//           if (!currentGame) throw new Error("Can't find currentGame");
//           // Continue with the remaining logic for the player's turn
//           if (currentGame.luckyCube !== 0) {
//             console.log(`Player ${player.playerId} is playing`);
//             for (let index = 1; index <= currentGame.luckyCube; index++) {
//               playerStep(player.playerId);
//             }
//             const newCell = document.getElementById(`player${player.playerId}`);
//             if (!newCell) throw new Error("Can't find newCell");
//             const parentCell = newCell.parentNode as HTMLDivElement;
//             if (!parentCell) throw new Error("Can't find parentCell");
//             player.cellId = parentCell.id;
//             currentGame.luckyCube = 0;
//             const cellButton = parentCell.firstChild as HTMLButtonElement;
//             if (!cellButton) throw new Error("Can't find cellButton");
//             // Check if arrived at a city
//             if (cellButton.classList.contains('RovaA') || cellButton.classList.contains('RovaBet') || cellButton.classList.contains('RovaGimel') || cellButton.classList.contains('RovaDaled') || cellButton.classList.contains('RovaCITY') || cellButton.classList.contains('RovaTetVav') || cellButton.classList.contains('RovaYudBet') || cellButton.classList.contains('RovaYudAlef')) {
//               rendercityCardRentOrBuy(Number(cellButton.id.match(/\d+/)), player.playerId);
//               console.log(player.Pbank);
//             }
//           }
//           resolve(void 0);
//         });
//       });
//     }
//     // Define an async function to iterate over the players and wait for each turn to finish
//     async function iteratePlayers() {
//       while (players.length > 1) {
//         for (const currentPlayer of players) {
//           try {
//             console.log(`Player: ${currentPlayer.playerId}`);
//             await playPlayerTurn(currentPlayer);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//         players = players.filter((player) => player.status === true);
//       }
//       if (players.length === 1) {
//         console.log(`Player ${players[0].playerId} is the winner!`);
//       } else {
//         console.log("The game has ended with no winner.");
//       }
//     }
//     // Call the async function to start the iteration over players
//     iteratePlayers().catch((error) => console.error(error));
//   } catch (error) {
//     console.error(error);
//   }
// }
function Play() {
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
    if (player.Pbank < city.monetaryValue)
        throw new Error("Player doesn't have enough money");
    player.Pbank -= city.monetaryValue;
    city.cityOwner = player;
    console.log(player.Pbank);
}
function payRent(cityId, playerId) {
    var _a;
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
    if (!city.cityOwner)
        throw new Error("Can't find cityOwner");
    city.cityOwner.Pbank += city.rentValue;
    console.log(player.Pbank);
    console.log((_a = city.cityOwner) === null || _a === void 0 ? void 0 : _a.Pbank);
}
function rendercityCardRentOrBuy(cityId, playerId) {
    var _a, _b;
    try {
        // If the city has an owner, render pay rent; else, render buy city or pick a good gift
        var city = (_a = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (board) { return board.cities.find(function (city) { return city.cityId === cityId; }); })) === null || _a === void 0 ? void 0 : _a.cities.find(function (city) { return city.cityId === cityId; });
        if (!city)
            throw new Error("Can't find city");
        var dialog_2 = document.createElement('dialog');
        dialog_2.classList.add('cityDialog');
        var dialogForm = document.createElement('form');
        dialogForm.classList.add('cityDialog__cityCardForm');
        dialogForm.id = "cityCard" + cityId;
        // Prevent form submission
        dialogForm.addEventListener('submit', function (e) {
            e.preventDefault();
        });
        var btnClose = document.createElement('button');
        btnClose.classList.add('closeCityDialog');
        btnClose.innerHTML = 'X';
        btnClose.addEventListener('click', function () {
            dialog_2.close();
        });
        dialogForm.appendChild(btnClose);
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
        owner.innerHTML = "Owner: " + (((_b = city.cityOwner) === null || _b === void 0 ? void 0 : _b.userName) || 'No Owner');
        dialogForm.appendChild(owner);
        if (city.cityOwner) {
            var payBtn = document.createElement('button');
            payBtn.classList.add('payBtn');
            payBtn.innerHTML = "Pay";
            payBtn.addEventListener('click', function () {
                payRent(cityId, playerId);
                dialog_2.close();
            });
            dialogForm.appendChild(payBtn);
        }
        else {
            var buyBtn = document.createElement('button');
            buyBtn.classList.add('buyBtn');
            buyBtn.innerHTML = "Buy";
            buyBtn.addEventListener('click', function () {
                buyCity(cityId, playerId);
                dialog_2.close();
            });
            dialogForm.appendChild(buyBtn);
        }
        dialog_2.appendChild(dialogForm);
        document.body.appendChild(dialog_2);
        dialog_2.showModal();
    }
    catch (error) {
        console.error(error);
    }
}
var gamesBoardsAGpage = loadBoardsAGpage();
var currentGame = gamesBoardsAGpage === null || gamesBoardsAGpage === void 0 ? void 0 : gamesBoardsAGpage.find(function (game) { return game.gameStatus === true; });
//shape of the board
renderOptionsBtns(gamesBoardsAGpage);
renderBoard(currentGame);
renderIBeginCell();
