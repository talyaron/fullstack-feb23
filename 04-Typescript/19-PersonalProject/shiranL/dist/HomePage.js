//home page.ts
// contorolers 
function loadCharacters() {
    try {
        var characters_1 = [];
        var charactersString = localStorage.getItem('characters');
        if (!charactersString) { // if there is not characters on json , create new []
            characters_1.push(new Character("Yechiel Lasry", "./dist/1.png"));
            characters_1.push(new Character("Elen Gelber", "./dist/2.png"));
            characters_1.push(new Character("Barak Sery", "./dist/3.png"));
            characters_1.push(new Character("Eli Nacht", "./dist/4.png"));
            characters_1.push(new Character("Eli Lachmani", "./dist/5.png"));
            characters_1.push(new Character("zvi zilker", "./dist/5.png"));
            //save to local storage
            var charactersJson = JSON.stringify(characters_1);
            localStorage.setItem('characters', charactersJson);
            return characters_1;
        }
        else {
            //get characters from localstorage
            var charactersArray = JSON.parse(charactersString);
            charactersArray.forEach(function (character) {
                characters_1.push(new Character(character.characterName, character.characterImgPath, character.characterId.valueAsNumber));
            });
        }
        return characters_1;
    }
    catch (error) {
        console.error(error);
    }
}
function loadCities() {
    try {
        var cities_1 = [];
        var citiesString = localStorage.getItem('cities');
        if (!citiesString) { // if there is not characters on json , create new []
            var hotels = [];
            cities_1.push(new City("Rova Alef", hotels, "./dist/rovaA1.jpg", 1));
            cities_1.push(new City("Rova Bet", hotels, "./dist/ashdod.jpg", 2));
            cities_1.push(new City("Rova Gimel", hotels, "./dist/Jerusalem.jpg", 3));
            cities_1.push(new City("Rova Daled", hotels, "./dist/telAviv.jpg", 4));
            // cities.push(new City("Rova Hey",hotels,"./dist/Dubai.jpg",5))
            cities_1.push(new City("Rova CITY", hotels, "./dist/eilat.jpg", 6));
            cities_1.push(new City("Rova TetVav", hotels, "./dist/roshPina.jpg", 7));
            cities_1.push(new City("Rova YudBet", hotels, "./dist/roshPina.jpg", 8));
            cities_1.push(new City("Rova YudAlef", hotels, "./dist/roshPina.jpg", 9));
            loadHotels(hotels);
            loadHotelsToCities(cities_1, hotels);
            //save to local storage
            var citiesJson = JSON.stringify(cities_1);
            localStorage.setItem('cities', citiesJson);
            return cities_1;
        }
        else {
            //get characters from localstorage
            var citiesArray = JSON.parse(citiesString);
            citiesArray.forEach(function (city) {
                cities_1.push(new City(city.cityName, city.cityHotels, city.cityId));
            });
        }
        return cities_1;
    }
    catch (error) {
        console.error(error);
    }
}
function loadHotels(hotels) {
    try {
        if (!hotels)
            throw new Error("Cant Find Hotels Array");
        var hotelsString = localStorage.getItem('hotels');
        if (!hotelsString) { // if there is not characters on json , create new []
            var cityId = 1;
            hotels.push(new Hotel("Gan Elisheva", cityId, "./dist/" + cityId + "hotel.jpg"));
            hotels.push(new Hotel("WEST HOTEL", cityId, "./dist/" + cityId + "hotel.jpg"));
            cityId = 2;
            hotels.push(new Hotel("Street market", cityId, "./dist/" + cityId + "hotel.jpg"));
            hotels.push(new Hotel("Revivo complex", cityId, "./dist/" + cityId + "hotel.jpg"));
            cityId = 3;
            hotels.push(new Hotel("The Great Synagogue", cityId, "./dist/" + cityId + "hotel.jpg"));
            hotels.push(new Hotel("Mikveh", cityId, "./dist/" + cityId + "hotel.jpg"));
            cityId = 4;
            hotels.push(new Hotel("Dehri bakery", cityId, "./dist/" + cityId + "hotel.jpg"));
            hotels.push(new Hotel("Dehri bakery", cityId, "./dist/" + cityId + "hotel.jpg"));
            // cityId=5;
            // hotels.push(new Hotel("Lev Ashdod Mall",cityId,`./dist/${cityId}hotel.jpg`))
            // hotels.push(new Hotel("Doctors House",cityId,`./dist/${cityId}hotel.jpg`))
            cityId = 6;
            hotels.push(new Hotel("Ashdod Municipality", cityId, "./dist/" + cityId + "hotel.jpg"));
            hotels.push(new Hotel("City garden", cityId, "./dist/" + cityId + "hotel.jpg"));
            hotels.push(new Hotel("Simul Mall", cityId, "./dist/" + cityId + "hotel.jpg"));
            cityId = 7;
            hotels.push(new Hotel("Beer Sheva beach", cityId, "./dist/" + cityId + "hotel.jpg"));
            hotels.push(new Hotel("Sun Square", cityId, "./dist/" + cityId + "hotel.jpg"));
            cityId = 8;
            hotels.push(new Hotel("Magic center", cityId, "./dist/" + cityId + "hotel.jpg"));
            hotels.push(new Hotel("Carrefour supermarket", cityId, "./dist/" + cityId + "hotel.jpg"));
            cityId = 9;
            hotels.push(new Hotel("Israel Brotherhood Synagogue", cityId, "./dist/" + cityId + "hotel.jpg"));
            hotels.push(new Hotel("The beach promenade", cityId, "./dist/" + cityId + "hotel.jpg"));
            //save to local storage
            var hotelsJson = JSON.stringify(hotels);
            localStorage.setItem('hotels', hotelsJson);
        }
        else {
            //get characters from localstorage
            var hotelsArray = JSON.parse(hotelsString);
            hotelsArray.forEach(function (hotel) {
                hotels.push(new Hotel(hotel.hotelName, hotel.cityId, hotel.hotelImg, hotel.hotelId));
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
function loadHotelsToCities(cities, hotels) {
    try {
        if (!cities || !hotels)
            throw new Error("Cant Find cities or hotels array ;( ");
        cities.forEach(function (city) {
            var cityHotels = hotels.filter(function (hotel) { return hotel.cityId === city.cityId; });
            city.cityHotels = cityHotels;
        });
    }
    catch (error) {
        console.error(error);
    }
}
function loadJails() {
    try {
        var jails_1 = [];
        var jailsString = localStorage.getItem('jails');
        if (!jailsString) { // if there is not characters on json , create new []
            jails_1.push(new Jail("Neve Tirza", "./dist/jail.jpg"));
            jails_1.push(new Jail("Ofek", "./dist/jail.jpg"));
            jails_1.push(new Jail("400", "./dist/jail2.jpg"));
            jails_1.push(new Jail("Dekel", "./dist/jail.jpg"));
            //save to local storage
            var jailsJson = JSON.stringify(jails_1);
            localStorage.setItem('jails', jailsJson);
            return jails_1;
        }
        else {
            //get characters from localstorage
            var jailsArray = JSON.parse(jailsString);
            jailsArray.forEach(function (jail) {
                jails_1.push(new Jail(jail.jailName, jail.jailImg, jail.jailId));
            });
        }
        return jails_1;
    }
    catch (error) {
        console.error(error);
    }
}
function loadQuestionGoodThings() {
    try {
        var goodThings_1 = [];
        var goodThingsString = localStorage.getItem('goodThings');
        if (!goodThingsString) { // if there is not characters on json , create new []
            goodThings_1.push(new QuestionGoodThings("Kol Kore", "Kol Kore for recycling on the beaches was successful Everyone wins at Bibi house, you deserve a gift!", getRandomNumber(500, 700)));
            goodThings_1.push(new QuestionGoodThings("Surprise", "A large contractor decided to donate a hotel, take the money and use it wisely", getRandomNumber(1500, 1700)));
            goodThings_1.push(new QuestionGoodThings("Dog Gift", "Congratulations you won a pet dog", getRandomNumber(50, 100)));
            goodThings_1.push(new QuestionGoodThings("Thank U", "I see your effort to do for the residents of the city, get reinforcement for continued fruitful work", getRandomNumber(550, 550)));
            goodThings_1.push(new QuestionGoodThings("Wow!", "Run for mayor! The city needs a mayor like you,Here is help with the propaganda budget", getRandomNumber(550, 1000)));
            goodThings_1.push(new QuestionGoodThings("A proud citizen", "You helped an elderly man cross the road safely. Get an assessment!", getRandomNumber(750, 1000)));
            //save to local storage
            var goodThingsJson = JSON.stringify(goodThings_1);
            localStorage.setItem('goodThings', goodThingsJson);
            return goodThings_1;
        }
        else {
            //get characters from localstorage
            var goodThingsArray = JSON.parse(goodThingsString);
            goodThingsArray.forEach(function (good) {
                goodThings_1.push(new QuestionGoodThings(good.goodThingsTitel, good.goodThingsDescription, good.winningPrice, good.goodThingsId));
            });
        }
        return goodThings_1;
    }
    catch (error) {
        console.error(error);
    }
}
function loadQuestionBadThings() {
    try {
        var badThings_1 = [];
        var badThingsString = localStorage.getItem('badThings');
        if (!badThingsString) { // if there is not characters on json , create new []
            badThings_1.push(new QuestionBadThings("Shit on your face", "really not nice to shit like that in public", getRandomNumber(500, 700)));
            badThings_1.push(new QuestionBadThings("Stinky fish", "There is an overflow from the stream, full of dead fish. The loss is on you this timec", getRandomNumber(800, 1000)));
            badThings_1.push(new QuestionBadThings("It stinks here", "Received too many calls about trash removal this morning, Help a little with the evacuation budget", getRandomNumber(800, 1000)));
            badThings_1.push(new QuestionBadThings("A proud citizen", "Your contribution to the city is welcomed", getRandomNumber(800, 1000)));
            badThings_1.push(new QuestionBadThings("shame", "That's how it is in a democracy.. everyone pays taxes", getRandomNumber(1000, 1200)));
            //save to local storage
            var badThingsJson = JSON.stringify(badThings_1);
            localStorage.setItem('badThings', badThingsJson);
            return badThings_1;
        }
        else {
            //get characters from localstorage
            var badThingsArray = JSON.parse(badThingsString);
            badThingsArray.forEach(function (bad) {
                badThings_1.push(new QuestionBadThings(bad.badThingsTitel, bad.badThingsDescription, bad.purchasePrice, bad.badThingsId));
            });
        }
        return badThings_1;
    }
    catch (error) {
        console.error(error);
    }
}
function loadBoards() {
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
function startNewGame(boards) {
    try {
        if (!boards)
            throw new Error("Cant Find Boards Array");
        // Create a new board
        var newBoard = new Board();
        // Set the game status to true
        newBoard.gameStatus = true;
        // Add the new board to the list of boards
        boards.push(newBoard);
        console.log('New game started!');
    }
    catch (error) {
        console.error('Error starting a new game:', error);
    }
}
function saveBoards(boards) {
    // Save the updated list of boards to local storage
    var boardsJson = JSON.stringify(boards);
    localStorage.setItem('gamesBoards', boardsJson);
}
function loadDataToBoard(board) {
    try {
        if (!board)
            throw new Error("Cant find Board");
        // Load characters and add them to the board
        var characters_2 = loadCharacters();
        var players = [];
        if (players) {
            board.players = players;
        }
        // Load cities and add them to the board
        var cities = loadCities();
        if (cities) {
            board.cities = cities;
        }
        // Load jails and add them to the board
        var jails = loadJails();
        if (jails) {
            board.jails = jails;
        }
        // Load good things and add them to the board
        var goodThings = loadQuestionGoodThings();
        if (goodThings) {
            board.goodThings = goodThings;
        }
        // Load bad things and add them to the board
        var badThings = loadQuestionBadThings();
        if (badThings) {
            debugger;
            board.badThings = badThings;
        }
        console.log('Data loaded to the board successfully!');
    }
    catch (error) {
        console.error('Error loading data to the board:', error);
    }
}
function renderHomePage(gamesBoards, characters) {
    try {
        var startNewGameHtml = document.querySelector("#chooseNumberOfPlayers");
        if (!startNewGameHtml)
            throw new Error("Cannot find startNewGame HTML element");
        if (!gamesBoards)
            throw new Error("Cannot find startNewGame HTML element");
        // Create the form element
        var form = document.createElement("form");
        form.classList.add("StartNewGame__numOfPlayers");
        // Create the label for the number of players input
        var label = document.createElement("label");
        label.textContent = "Enter number of players: ";
        // Create the input element for choosing the number of players
        var input_1 = document.createElement("input");
        input_1.type = "number";
        input_1.min = "2";
        input_1.max = "6";
        // Create the "Start Game" button
        var startButton = document.createElement("button");
        startButton.textContent = "Start Game";
        startButton.type = "submit";
        // Add an event listener to the form's submit event
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from submitting and refreshing the page
            var numPlayers = parseInt(input_1.value, 10);
            var selectedCharacters = getSelectedCharacters(numPlayers, characters);
            if (!selectedCharacters)
                alert("Must Enter numbers of players");
            else
                handelStartGame(numPlayers, gamesBoards, selectedCharacters);
        });
        // Append the button to the form
        form.appendChild(label);
        form.appendChild(input_1);
        form.appendChild(startButton);
        // Add dropdowns for choosing characters
        input_1.addEventListener("change", function (event) {
            var numPlayers = parseInt(input_1.value, 10);
            renderCharacterDropdowns(numPlayers, characters);
        });
        // Check if there is an open game board
        var openGameBoard = gamesBoards.find(function (board) { return board.gameStatus === true; });
        if (openGameBoard) {
            // Create the "Open Active Game" button
            var openActiveGameButton = document.createElement("button");
            openActiveGameButton.textContent = "Open Active Game";
            startNewGameHtml.appendChild(openActiveGameButton);
            openActiveGameButton.addEventListener("click", function () {
                // Handle opening the active game
                window.location.href = "./ActiveGame.html";
            });
        }
        // Append the form to the startNewGame HTML element  
        else
            startNewGameHtml.appendChild(form);
    }
    catch (error) {
        console.error(error);
    }
}
function getSelectedCharacters(numPlayers, characters) {
    var selectedCharacters = [];
    try {
        var _loop_1 = function (i) {
            var dropdown = document.querySelector("#player" + i + "Character");
            if (!dropdown)
                throw new Error("Cant find dropdown");
            var selectedCharacterId = dropdown.value;
            var selectedCharacter = characters === null || characters === void 0 ? void 0 : characters.find(function (character) { return character.characterId.toString() === selectedCharacterId; });
            if (selectedCharacter) {
                selectedCharacters.push(selectedCharacter);
            }
        };
        for (var i = 1; i <= numPlayers; i++) {
            _loop_1(i);
        }
    }
    catch (error) {
        console.error(error);
    }
    return selectedCharacters;
}
function renderCharacterDropdowns(numPlayers, characters) {
    try {
        var characterSelectionHtml = document.querySelector("#characterSelection");
        if (!characterSelectionHtml)
            throw new Error("Cannot find characterSelection HTML element");
        characterSelectionHtml.innerHTML = "";
        // Create an array to keep track of selected character IDs for each player
        var selectedCharacters_1 = [];
        var ChractersForm = document.createElement("form");
        ChractersForm.id = "ChractersForm";
        var _loop_2 = function (i) {
            var dropdownLabel = document.createElement("label");
            dropdownLabel.textContent = "Player " + i + " Character: ";
            var dropdown = document.createElement("select");
            dropdown.id = "player" + i + "Character";
            // Add an event listener to the dropdown
            dropdown.addEventListener("change", function (event) {
                var selectedCharacterId = parseInt(event.target.value);
                // Remove the selected character from other dropdowns' options
                for (var j = 1; j <= numPlayers; j++) {
                    if (j !== i) {
                        var otherDropdown = document.querySelector("#player" + j + "Character");
                        var optionToRemove = otherDropdown.querySelector("option[value=\"" + selectedCharacterId + "\"]");
                        if (optionToRemove) {
                            otherDropdown.removeChild(optionToRemove);
                        }
                    }
                }
                // Update the selected character for the current player
                selectedCharacters_1[i - 1] = selectedCharacterId;
            });
            // Add an empty option as the default selection
            var emptyOption = document.createElement("option");
            emptyOption.value = "";
            emptyOption.text = "Select a character";
            dropdown.appendChild(emptyOption);
            // Add options for each character
            if (characters) {
                characters.forEach(function (character) {
                    var option = document.createElement("option");
                    option.value = character.characterId.toString();
                    option.text = character.characterName;
                    dropdown.appendChild(option);
                });
            }
            ChractersForm.appendChild(dropdownLabel);
            ChractersForm.appendChild(dropdown);
            characterSelectionHtml.appendChild(ChractersForm);
        };
        // Create a dropdown for each player
        for (var i = 1; i <= numPlayers; i++) {
            _loop_2(i);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handelStartGame(numPlayers, gamesBoards, selectedCharacters) {
    try {
        var ChractersForm = document.querySelector("#ChractersForm");
        if (!ChractersForm) {
            throw new Error("Cannot find ChractersForm");
        }
        if (!gamesBoards)
            throw new Error("Cannot find game board");
        //check if there is open game befor open new one
        var openGame = gamesBoards.find(function (board) { return board.gameStatus === true; });
        if (openGame) {
            // dialog alert
            alert("There is an open game already");
        }
        else {
            var allCharactersSelected = selectedCharacters.length === numPlayers;
            if (!allCharactersSelected) {
                var dialog_1 = document.createElement('dialog');
                dialog_1.id = 'dialog';
                dialog_1.innerHTML = 'Must select characters for all players';
                dialog_1.addEventListener('click', function () { return dialog_1.close(); });
                document.body.appendChild(dialog_1);
                dialog_1.showModal();
                return; // Stop execution if not all characters are selected
            }
            startNewGame(gamesBoards);
            var currentGame = gamesBoards === null || gamesBoards === void 0 ? void 0 : gamesBoards.find(function (game) { return game.gameStatus === true; });
            if (!currentGame)
                throw new Error("Cannot find Activ Game");
            loadDataToBoard(currentGame);
            // Create the players
            for (var i = 1; i <= numPlayers; i++) {
                var character = selectedCharacters[i - 1]; // Get the corresponding selected character
                var playerName = "" + character.characterName;
                var player = new Player(playerName, false, true, undefined, undefined, character);
                currentGame.players.push(player);
            }
            // Navigate to the game page
            saveBoards(gamesBoards);
            console.log("Game started!");
            window.location.href = "./ActiveGame.html";
        }
    }
    catch (error) {
        console.error("Error starting the game:", error);
    }
}
// get data for new game
var characters = loadCharacters();
var gamesBoards = loadBoards();
// render new game,  will render the from to choose character the btn to start game
renderHomePage(gamesBoards, characters);