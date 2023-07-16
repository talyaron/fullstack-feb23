//home page.ts
// contorolers 
function loadCharacters():Character[]|undefined{
    try {
        const characters: Character []  = [];
        const charactersString = localStorage.getItem('characters');
      if (!charactersString){ // if there is not characters on json , create new []
         
        characters.push(new Character("Yechiel Lasry","./dist/1.png"))
        characters.push(new Character("Elen Gelber","./dist/2.png"))
        characters.push(new Character("Barak Sery","./dist/3.png"))
        characters.push(new Character("Eli Nacht","./dist/4.png"))
        characters.push(new Character("Eli Lachmani","./dist/5.png"))
        characters.push(new Character("zvi zilker","./dist/5.png"))
        //save to local storage
        const charactersJson = JSON.stringify(characters);
        localStorage.setItem('characters', charactersJson);
        return characters;

       }else{
          //get characters from localstorage
          const charactersArray = JSON.parse(charactersString);
          charactersArray.forEach((character) => {
            characters.push(new Character(character.characterName, character.characterImgPath,character.characterId.valueAsNumber));
              });}
   return characters;          
        
    } catch (error) {
      console.error(error);  
    }
}
function loadCities():City[]|undefined{
    try {
        const cities: City []  = [];
        const citiesString = localStorage.getItem('cities');
      if (!citiesString){ // if there is not characters on json , create new []
        const hotels : Hotel[] | undefined = [];
        
        cities.push(new City("Rova Alef",hotels,"./dist/rovaA1.jpg",1))
        cities.push(new City("Rova Bet",hotels,"./dist/ashdod.jpg",2))
        cities.push(new City("Rova Gimel",hotels,"./dist/Jerusalem.jpg",3))
        cities.push(new City("Rova Daled",hotels,"./dist/telAviv.jpg",4))
        // cities.push(new City("Rova Hey",hotels,"./dist/Dubai.jpg",5))
        cities.push(new City("Rova CITY",hotels,"./dist/eilat.jpg",6))
        cities.push(new City("Rova TetVav",hotels,"./dist/roshPina.jpg",7))
        cities.push(new City("Rova YudBet",hotels,"./dist/roshPina.jpg",8))
        cities.push(new City("Rova YudAlef",hotels,"./dist/roshPina.jpg",9))
        loadHotels(hotels);
        loadHotelsToCities(cities,hotels);
        //save to local storage
        const citiesJson = JSON.stringify(cities);
        localStorage.setItem('cities', citiesJson);
        return cities;

       }else{
          //get characters from localstorage
          const citiesArray = JSON.parse(citiesString);
          citiesArray.forEach((city) => {
            cities.push(new City(city.cityName,city.cityHotels,city.cityId));
              });}
   return cities;          
        
    } catch (error) {
      console.error(error);  
    }
}
function loadHotels(hotels: Hotel[] | undefined){
    try {
       if(!hotels) throw new Error("Cant Find Hotels Array");
       
        const hotelsString = localStorage.getItem('hotels');
      if (!hotelsString){ // if there is not characters on json , create new []
        let cityId:number=1; 
        hotels.push(new Hotel("Gan Elisheva",cityId,`./dist/${cityId}hotel.jpg`))
        hotels.push(new Hotel("WEST HOTEL",cityId,`./dist/${cityId}hotel.jpg`))

        cityId=2;
        hotels.push(new Hotel("Street market",cityId,`./dist/${cityId}hotel.jpg`))
        hotels.push(new Hotel("Revivo complex",cityId,`./dist/${cityId}hotel.jpg`))

        cityId=3;
        hotels.push(new Hotel("The Great Synagogue",cityId,`./dist/${cityId}hotel.jpg`))
        hotels.push(new Hotel("Mikveh",cityId,`./dist/${cityId}hotel.jpg`))

        cityId=4;
        hotels.push(new Hotel("Dehri bakery",cityId,`./dist/${cityId}hotel.jpg`))
        hotels.push(new Hotel("Dehri bakery",cityId,`./dist/${cityId}hotel.jpg`))

        // cityId=5;
        // hotels.push(new Hotel("Lev Ashdod Mall",cityId,`./dist/${cityId}hotel.jpg`))
        // hotels.push(new Hotel("Doctors House",cityId,`./dist/${cityId}hotel.jpg`))

        cityId=6;
        hotels.push(new Hotel("Ashdod Municipality",cityId,`./dist/${cityId}hotel.jpg`))
        hotels.push(new Hotel("City garden",cityId,`./dist/${cityId}hotel.jpg`))
        hotels.push(new Hotel("Simul Mall",cityId,`./dist/${cityId}hotel.jpg`))

        cityId=7;
        hotels.push(new Hotel("Beer Sheva beach",cityId,`./dist/${cityId}hotel.jpg`))
        hotels.push(new Hotel("Sun Square",cityId,`./dist/${cityId}hotel.jpg`))
        cityId=8;
        hotels.push(new Hotel("Magic center",cityId,`./dist/${cityId}hotel.jpg`))
        hotels.push(new Hotel("Carrefour supermarket",cityId,`./dist/${cityId}hotel.jpg`))
        cityId=9;
        hotels.push(new Hotel("Israel Brotherhood Synagogue",cityId,`./dist/${cityId}hotel.jpg`))
        hotels.push(new Hotel("The beach promenade",cityId,`./dist/${cityId}hotel.jpg`))

        //save to local storage
        const hotelsJson = JSON.stringify(hotels);
        localStorage.setItem('hotels', hotelsJson);
       
       }else{
          //get characters from localstorage
          const hotelsArray = JSON.parse(hotelsString);
          hotelsArray.forEach((hotel) => {
            hotels.push(new Hotel(hotel.hotelName,hotel.cityId,hotel.hotelImg,hotel.hotelId));
              });
            }
        
    } catch (error) {
      console.error(error);  
    }
}
function loadHotelsToCities(cities : City[] |undefined , hotels : Hotel[] | undefined){
try {
    if(!cities || !hotels) throw new Error("Cant Find cities or hotels array ;( ")
    cities.forEach(city => {
        const cityHotels = hotels.filter(hotel => hotel.cityId === city.cityId);
        city.cityHotels = cityHotels;
    });
    
} catch (error) {
    console.error(error);
    
}
}
function loadJails(): Jail[] | undefined {
    try {
        const jails: Jail []  = [];
        const jailsString = localStorage.getItem('jails');
      if (!jailsString){ // if there is not characters on json , create new []
         
        jails.push(new Jail("Neve Tirza","./dist/jail.jpg"))
        jails.push(new Jail("Ofek","./dist/jail.jpg"))
        jails.push(new Jail("400","./dist/jail2.jpg"))
        jails.push(new Jail("Dekel","./dist/jail.jpg"))
       
        //save to local storage
        const jailsJson = JSON.stringify(jails);
        localStorage.setItem('jails',jailsJson);
        return jails;

       }else{
          //get characters from localstorage
          const jailsArray = JSON.parse(jailsString);
          jailsArray.forEach((jail) => {
            jails.push(new Jail(jail.jailName, jail.jailImg, jail.jailId));
              });}
   return jails;          
        
    } catch (error) {
      console.error(error);  
    }
}
function loadQuestionGoodThings (): QuestionGoodThings[] | undefined {
    try {
        const goodThings: QuestionGoodThings []  = [];
        const goodThingsString = localStorage.getItem('goodThings');
      if (!goodThingsString){ // if there is not characters on json , create new []
         
        goodThings.push(new QuestionGoodThings("Kol Kore","Kol Kore for recycling on the beaches was successful Everyone wins at Bibi house, you deserve a gift!",getRandomNumber(500,700)))
        goodThings.push(new QuestionGoodThings("Surprise","A large contractor decided to donate a hotel, take the money and use it wisely",getRandomNumber(1500,1700)))
        goodThings.push(new QuestionGoodThings("Dog Gift","Congratulations you won a pet dog",getRandomNumber(50,100)))
        goodThings.push(new QuestionGoodThings("Thank U","I see your effort to do for the residents of the city, get reinforcement for continued fruitful work",getRandomNumber(550,550)))
       
        //save to local storage
        const goodThingsJson = JSON.stringify(goodThings);
        localStorage.setItem('goodThings',goodThingsJson);
        return goodThings;

       }else{
          //get characters from localstorage
          const goodThingsArray = JSON.parse(goodThingsString);
          goodThingsArray.forEach((good) => {
            goodThings.push(new QuestionGoodThings(good.goodThingsTitel,good.goodThingsDescription,good.winningPrice,good.goodThingsId));
              });}
   return goodThings;          
        
    } catch (error) {
      console.error(error);  
    }
}
function loadQuestionBadThings (): QuestionBadThings[] | undefined {
    try {
      
        const badThings: QuestionBadThings []  = [];
        const badThingsString = localStorage.getItem('badThings');
      if (!badThingsString){ // if there is not characters on json , create new []
         
        badThings.push(new QuestionBadThings("Shit on your face","really not nice to shit like that in public",getRandomNumber(500,700)))
        badThings.push(new QuestionBadThings("Stinky fish","There is an overflow from the stream, full of dead fish. The loss is on you this timec",getRandomNumber(800,1000)))
        badThings.push(new QuestionBadThings("It stinks here","Received too many calls about trash removal this morning, Help a little with the evacuation budget",getRandomNumber(800,1000)))
        badThings.push(new QuestionBadThings("A proud citizen","Your contribution to the city is welcomed",getRandomNumber(800,1000)))
        
        //save to local storage
        const badThingsJson = JSON.stringify(badThings);
        localStorage.setItem('badThings',badThingsJson);
        return badThings;

       }else{
          //get characters from localstorage
          const badThingsArray = JSON.parse(badThingsString);
          badThingsArray.forEach((bad) => {
            badThings.push(new QuestionBadThings(bad.bdThingsTitel,bad.badThingsDescription,bad.purchasePrice,bad.badThingsId));
              });}
   return badThings;          
        
    } catch (error) {
      console.error(error);  
    }
}
function loadBoards(): Board[]|undefined{
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
function startNewGame(boards: Board[]|undefined): void {
    try {
      
        if(!boards) throw new Error("Cant Find Boards Array");
       
          // Create a new board
          const newBoard = new Board();
      
      // Set the game status to true
      newBoard.gameStatus = true;
      
      // Add the new board to the list of boards
      boards.push(newBoard);
      
      console.log('New game started!');

        
     
    } catch (error) {
      console.error('Error starting a new game:', error);
    }
}
function saveBoards (boards: Board[]){
    // Save the updated list of boards to local storage
    const boardsJson = JSON.stringify(boards);
    localStorage.setItem('gamesBoards', boardsJson);
}
function loadDataToBoard(board: Board|undefined): void {
    try {
        if (!board) throw new Error("Cant find Board");
        
      // Load characters and add them to the board
      const characters: Character[] | undefined = loadCharacters();
      
      const players: Player[] | undefined = []
      if (players) {
        board.players = players;
      }
      // Load cities and add them to the board
      const cities: City[] | undefined = loadCities();
      if (cities) {
        board.cities = cities;
      }
      
      // Load jails and add them to the board
      const jails: Jail[] | undefined = loadJails();
      if (jails) {
        board.jails = jails;
      }
      
      // Load good things and add them to the board
      const goodThings: QuestionGoodThings[] | undefined = loadQuestionGoodThings();
      if (goodThings) {
        board.goodThings = goodThings;
      }
      
      // Load bad things and add them to the board
      const badThings: QuestionBadThings[] | undefined = loadQuestionBadThings();
      if (badThings) {
        board.badThings = badThings;
      }
      
      console.log('Data loaded to the board successfully!');
    } catch (error) {
      console.error('Error loading data to the board:', error);
    }
}
function renderHomePage(gamesBoards: Board [] | undefined, characters : Character[] | undefined) {
    try {
      const startNewGameHtml = document.querySelector("#chooseNumberOfPlayers");
      if (!startNewGameHtml) throw new Error("Cannot find startNewGame HTML element");
      if (!gamesBoards) throw new Error("Cannot find startNewGame HTML element");
      // Create the form element
      const form = document.createElement("form");
      form.classList.add("StartNewGame__numOfPlayers");
  
      // Create the label for the number of players input
      const label = document.createElement("label");
      label.textContent = "Enter number of players: ";
  
      // Create the input element for choosing the number of players
      const input = document.createElement("input");
      input.type = "number";
      input.min = "2";
      input.max = "6";
  
      // Create the "Start Game" button
      const startButton = document.createElement("button");
      startButton.textContent = "Start Game";
      startButton.type = "submit";
  
      // Add an event listener to the form's submit event
      form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        const numPlayers = parseInt(input.value, 10);
        const selectedCharacters = getSelectedCharacters(numPlayers,characters);
        if (!selectedCharacters) alert("Must Enter numbers of players")
         else handelStartGame(numPlayers, gamesBoards,selectedCharacters);
      });
  
      // Append the button to the form
      form.appendChild(label);
      form.appendChild(input);
      form.appendChild(startButton);
      // Add dropdowns for choosing characters
      input.addEventListener("change", (event) => {
       const numPlayers = parseInt(input.value, 10);
      renderCharacterDropdowns(numPlayers, characters);
});
    // Check if there is an open game board
    const openGameBoard = gamesBoards.find((board) => board.gameStatus === true);

    if (openGameBoard) {
      // Create the "Open Active Game" button
      const openActiveGameButton = document.createElement("button");
      openActiveGameButton.textContent = "Open Active Game";
      startNewGameHtml.appendChild(openActiveGameButton);
      openActiveGameButton.addEventListener("click", () => {
        // Handle opening the active game
        window.location.href = "./ActiveGame.html";
      });
    }
   // Append the form to the startNewGame HTML element  
    else startNewGameHtml.appendChild(form);
    
    } catch (error) {
      console.error(error);
    }
  }
function getSelectedCharacters(numPlayers: number, characters: Character[] | undefined): Character[] {
    const selectedCharacters: Character[] = [];
    try {
      for (let i = 1; i <= numPlayers; i++) {
        const dropdown = document.querySelector(`#player${i}Character`) as HTMLSelectElement;
        if (!dropdown) throw new Error("Cant find dropdown");
        
        const selectedCharacterId = dropdown.value;
        const selectedCharacter = characters?.find((character) => character.characterId.toString() === selectedCharacterId);
        if (selectedCharacter) {
          selectedCharacters.push(selectedCharacter);
        }
      }
    } catch (error) {
      console.error(error);
    }
    return selectedCharacters;
  } 
  function renderCharacterDropdowns(numPlayers: number, characters: Character[] | undefined) {
    try {
      const characterSelectionHtml = document.querySelector("#characterSelection");
      if (!characterSelectionHtml) throw new Error("Cannot find characterSelection HTML element");
      characterSelectionHtml.innerHTML = "";
  
      // Create an array to keep track of selected character IDs for each player
      const selectedCharacters: number[] = [];
     const ChractersForm= document.createElement("form");
     ChractersForm.id="ChractersForm"; 
      // Create a dropdown for each player
      for (let i = 1; i <= numPlayers; i++) {
        const dropdownLabel = document.createElement("label");
        dropdownLabel.textContent = `Player ${i} Character: `;
  
        const dropdown = document.createElement("select");
        dropdown.id = `player${i}Character`;
  
        // Add an event listener to the dropdown
          dropdown.addEventListener("change", (event) => {
          const selectedCharacterId = parseInt((event.target as HTMLSelectElement).value);
  
          // Remove the selected character from other dropdowns' options
          for (let j = 1; j <= numPlayers; j++) {
            if (j !== i) {
              const otherDropdown = document.querySelector(`#player${j}Character`) as HTMLSelectElement;
              const optionToRemove = otherDropdown.querySelector(`option[value="${selectedCharacterId}"]`);
              if (optionToRemove) {
                otherDropdown.removeChild(optionToRemove);
              }
            }
          }
          // Update the selected character for the current player
          selectedCharacters[i - 1] = selectedCharacterId;
        });
  
        // Add an empty option as the default selection
        const emptyOption = document.createElement("option");
        emptyOption.value = "";
        emptyOption.text = "Select a character";
        dropdown.appendChild(emptyOption);
  
        // Add options for each character
        if (characters) {
          characters.forEach((character) => {
            const option = document.createElement("option");
            option.value = character.characterId.toString();
            option.text = character.characterName;
            dropdown.appendChild(option);
          });
        }
  
        ChractersForm.appendChild(dropdownLabel);
        ChractersForm.appendChild(dropdown);
        characterSelectionHtml.appendChild(ChractersForm)
      }
    } catch (error) {
      console.error(error);
    }
  }                                                                                    
function handelStartGame(numPlayers: number, gamesBoards: Board[] | undefined,selectedCharacters:Character[]) {
    try {
      
      const ChractersForm=document.querySelector("#ChractersForm")
      if (!ChractersForm){
        throw new Error("Cannot find ChractersForm");
      } 
        if (!gamesBoards) throw new Error("Cannot find game board");
        //check if there is open game befor open new one
        const openGame= gamesBoards.find(board=>board.gameStatus===true)
        if(openGame) 
         {
          // dialog alert

          alert("There is an open game already") }
        else{
          const allCharactersSelected = selectedCharacters.length === numPlayers;
          if (!allCharactersSelected) {
            const dialog = document.createElement('dialog'); 
            dialog.id = 'dialog'; 
            dialog.innerHTML = 'Must select characters for all players';
            dialog.addEventListener('click', () => dialog.close());
            document.body.appendChild(dialog);
            dialog.showModal();
            return; // Stop execution if not all characters are selected
          }
        
        startNewGame(gamesBoards);
        const currentGame= gamesBoards?.find(game=> game.gameStatus===true)
        if (!currentGame) throw new Error("Cannot find Activ Game");
        loadDataToBoard(currentGame);
      // Create the players
      for (let i = 1; i <= numPlayers; i++) {
       
        const character = selectedCharacters[i - 1]; // Get the corresponding selected character
        const playerName = `${character.characterName}`;
        const player = new Player(playerName, false, true, undefined, undefined, character);
        currentGame.players.push(player);
      }
      
      // Navigate to the game page
      saveBoards(gamesBoards)
      console.log("Game started!");
      window.location.href = "./ActiveGame.html";
    }
    } catch (error) {
      console.error("Error starting the game:", error);
    }
  }
  
  // get data for new game
  
  const characters : Character[] | undefined = loadCharacters();
  
  const gamesBoards : Board[]| undefined = loadBoards();
  

  // render new game,  will render the from to choose character the btn to start game
  renderHomePage(gamesBoards,characters);
  
  
  
