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

function renderBoard(currentGame:Board |undefined) {
   
    const boardContainer = document.getElementById('Board');
    if (!boardContainer) { console.error('Board container not found'); return; }
    if (!currentGame) { console.error('currentGame not found'); return;}

  
    // Clear previous board
    boardContainer.innerHTML = '';
    // const hotels=currentGame.hotels;
    
    let counter = 1; // Initialize counter
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
        matrix[i][j].classList.add('board__cell');
        matrix[i][j].id=`${i}-${j}`
        // Check if it's an outer frame cell
      // Check if it's an outer frame cell
      
      if (i === 0 || i === matrixSize - 1 || j === 0 || j === matrixSize - 1) {
        matrix[i][j].style.border = '1px solid pink';
        matrix[i][j].style.cursor = 'pointer';
       }
       
        boardContainer.appendChild( matrix[i][j]);
      }
    }
  // set the frame of the board
//Y=o
    for (let i = 0; i < matrixSize; i++) {
     // matrix[i][matrixSize-1].value = counter;
      matrix[i][0].id = `cell${counter}`; // Set the cell content to the counter value
      counter++; // Increment the counter
    }
// X = matrixSize-1
    for (let i = 1; i < matrixSize-1; i++) {
    //  matrix[i][matrixSize-1].value = counter;
      matrix[matrixSize-1][i].id = `cell${counter}`; // Set the cell content to the counter value
      counter++; // Increment the counter
    }
  //Y=matrixSize-1
  for (let i = matrixSize-1; i > 0; i--) {
  //  matrix[i][matrixSize-1].value = counter;
    matrix[i][matrixSize-1].id = `cell${counter}`; // Set the cell content to the counter value
    counter++; // Increment the counter
  }
  //x=0
  for (let i = matrixSize-1; i > 0; i--) {
  //  matrix[0][i].value = counter;
    matrix[0][i].id = `cell${counter}`; // Set the cell content to the counter value
    counter++; // Increment the counter
  }

  // set jails
  const jails=currentGame.jails;
  let JailIndex=0
  jails.forEach(jail=>{putJailOnBoard(jail,JailIndex);
    JailIndex++;  })


     // set cities
  let cityIndex=0
  const cities=currentGame.cities;
  cities.forEach(city=>{putCityOnBoard(city,cityIndex);
    cityIndex++;  })

        // set cities
  const players=currentGame.players;
  players.forEach(player=>{putPlayerOnBoard(player);
     })
     debugger
     // set Good surprises
     setGoodSurprises();
      // set bad surprises
      setBadSurprises();

      setBadBTNForRandom(currentGame.badThings)
   
  }
  function setGoodSurprises(){ 
    try {

      //create button for each cell
      const goodS1=document.createElement('button')
      goodS1.classList.add('goodS')
      const goodS2=document.createElement('button')
      goodS2.classList.add('goodS')
      const goodS3=document.createElement('button')
      goodS3.classList.add('goodS')
      const goodS4=document.createElement('button')
      goodS4.classList.add('goodS')

    const cell1 = document.getElementById('cell33');
    if(!cell1) throw new Error("cant find cell33");
    cell1.appendChild(goodS1)

    const cell2 = document.getElementById('cell24');
    if(!cell2) throw new Error("cant find cell24");
    cell2.appendChild(goodS2)

    const cell3 = document.getElementById('cell15');
    if(!cell3) throw new Error("cant find cell15");
    cell3.appendChild(goodS3)

    const cell4 = document.getElementById('cell6');
    if(!cell4) throw new Error("cant find cell6");
    cell4.appendChild(goodS4)
      
    } catch (error) {
      console.error(error);
      
    }
    

  }
  function setBadSurprises(){
    try {

      //create button for each cell
      const BadS1=document.createElement('button')
      BadS1.classList.add('BadS')
      const BadS2=document.createElement('button')
      BadS2.classList.add('BadS')
      const BadS3=document.createElement('button')
      BadS3.classList.add('BadS')
    

    const cell1 = document.getElementById('cell32');
    if(!cell1) throw new Error("cant find cell32");
    cell1.appendChild(BadS1)

    const cell2 = document.getElementById('cell23');
    if(!cell2) throw new Error("cant find cell23");
    cell2.appendChild(BadS2)

    const cell3 = document.getElementById('cell14');
    if(!cell3) throw new Error("cant find cell14");
    cell3.appendChild(BadS3)
    
      
    } catch (error) {
      console.error(error);
      
    }
    
  }

  
function setBadBTNForRandom(badThings:QuestionBadThings[]){
//on click btn will render random suprise
try {
  const bads= document.getElementById('2-6');
  if(!bads) throw new Error("canf find cell 2-6")
  const BadThings=document.createElement('button')
  BadThings.classList.add('BadThings')
  BadThings.addEventListener('click',()=>{RandomBadSuprise(badThings)})
  bads.appendChild(BadThings);
} catch (error) {
  console.error(error);
}
}
function RandomBadSuprise(badThings: QuestionBadThings[]) {
  // Get a random bad thing from the array
  const randomBadThing = badThings[Math.floor(Math.random() * badThings.length)];

  // Create a dialog element
  const dialog = document.createElement('dialog');
  dialog.classList.add('dialog-card');

  // Create title element
  debugger;
  const title = document.createElement('h3');
  title.innerText = randomBadThing.badThingsTitel;
  dialog.appendChild(title);

  // Create description element
  const description = document.createElement('p');
  description.innerText = randomBadThing.badThingsDescription;
  dialog.appendChild(description);

  // Create purchase price element
  const purchasePrice = document.createElement('p');
  purchasePrice.innerText = 'Purchase Price: ' + randomBadThing.purchasePrice.toString();
  dialog.appendChild(purchasePrice);

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => {
    // Close the dialog when the close button is clicked
    dialog.close();
  });
  dialog.appendChild(closeButton);

  // Append the dialog to the document body
  document.body.appendChild(dialog);

  // Show the dialog
  dialog.showModal();
}

function putJailOnBoard(jail:Jail,JailIndex:number){
      let cell
     
      switch (JailIndex) { // set jails in the corners of the board
        case 0:
          cell = document.getElementById('cell1')
         
          break;
        case 1:
            cell = document.getElementById('cell28')
        
            break;
        case 2:
            cell = document.getElementById('cell19')
           
            break;
        case 3:
          
              cell = document.getElementById('cell10')
            
              break;
      }
// create elements for jail
     
    const  jailBtn= document.createElement('bottun')
      jailBtn.classList.add('jailBtn')
      jailBtn.id=`${jail.jailId}`;
     const jailimg= document.createElement('img')
      jailimg.src=jail.jailImg
  
      jailBtn.appendChild(jailimg)
      cell?.appendChild(jailBtn);
     // cell.name="jail"
  }
function putCityOnBoard(city:City,cityIndex:number){
  try {
   
    let cell1
    let cell2
    let cell3
    let  cityBtn1
    let  cityBtn2
    let  cityBtn3
     
      switch (cityIndex) { // set cities in the corners of the board
        case 0://ROVA A - get 3 matrix cell to fill the city
           cell1 = document.getElementById('cell36');
           cell2 = document.getElementById('cell35');
           cell3 = document.getElementById('cell34');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`${city.cityId}`;
          cityBtn1.classList.add('RovaA')
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`${city.cityId}`;
          cityBtn2.classList.add('RovaA')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`${city.cityId}`;
          cityBtn3.classList.add('RovaA')
          cell3.appendChild(cityBtn3);
          break;
        case 1://Rova Bet
        cell1 = document.getElementById('cell29');
        cell2 = document.getElementById('cell30');
        cell3 = document.getElementById('cell31');
        if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
        cityBtn1= document.createElement('bottun')
        cityBtn1.id=`${city.cityId}`;
        cityBtn1.classList.add('RovaBet')
       
        cell1.appendChild(cityBtn1);
        cityBtn2= document.createElement('bottun')
        cityBtn2.id=`${city.cityId}`;
        cityBtn2.classList.add('RovaBet')
        cell2.appendChild(cityBtn2);
        cityBtn3= document.createElement('bottun')
        cityBtn3.id=`${city.cityId}`;
        cityBtn3.classList.add('RovaBet')
        cell3.appendChild(cityBtn3);
          break;
        case 2://Rova Gimel
          cell1 = document.getElementById('cell25');
          cell2 = document.getElementById('cell26');
          cell3 = document.getElementById('cell27');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`${city.cityId}`;
          cityBtn1.classList.add('RovaGimel')
         
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`${city.cityId}`;
          cityBtn2.classList.add('RovaGimel')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`${city.cityId}`;
          cityBtn3.classList.add('RovaGimel')
          cell3.appendChild(cityBtn3);
            break;
        case 3://Rova Daled
        cell1 = document.getElementById('cell20');
        cell2 = document.getElementById('cell21');
        cell3 = document.getElementById('cell22');
        if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
        cityBtn1= document.createElement('bottun')
        cityBtn1.id=`${city.cityId}`;
        cityBtn1.classList.add('RovaDaled')
        cell1.appendChild(cityBtn1);
        cityBtn2= document.createElement('bottun')
        cityBtn2.id=`${city.cityId}`;
        cityBtn2.classList.add('RovaDaled')
        cell2.appendChild(cityBtn2);
        cityBtn3= document.createElement('bottun')
        cityBtn3.id=`${city.cityId}`;
        cityBtn3.classList.add('RovaDaled')
        cell3.appendChild(cityBtn3);
          break;
        case 4://Rova CITY
          cell1 = document.getElementById('cell16');
          cell2 = document.getElementById('cell17');
          cell3 = document.getElementById('cell18');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`${city.cityId}`;
          cityBtn1.classList.add('RovaCITY')
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`${city.cityId}`;
          cityBtn2.classList.add('RovaCITY')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`${city.cityId}`;
          cityBtn3.classList.add('RovaCITY')
          cell3.appendChild(cityBtn3);
            break;
        case 5://Rova TetVav
          cell1 = document.getElementById('cell11');
          cell2 = document.getElementById('cell12');
          cell3 = document.getElementById('cell13');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`${city.cityId}`;
          cityBtn1.classList.add('RovaTetVav')
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`${city.cityId}`;
          cityBtn2.classList.add('RovaTetVav')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`${city.cityId}`;
          cityBtn3.classList.add('RovaTetVav')
          cell3.appendChild(cityBtn3);
            break;
        case 6://Rova YudBet
          cell1 = document.getElementById('cell7');
          cell2 = document.getElementById('cell8');
          cell3 = document.getElementById('cell9');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`${city.cityId}`;
          cityBtn1.classList.add('RovaYudBet')
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`${city.cityId}`;
          cityBtn2.classList.add('RovaYudBet')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`${city.cityId}`;
          cityBtn3.classList.add('RovaYudBet')
          cell3.appendChild(cityBtn3);
          break;   
        case 7://Rova YudAlef
          cell1 = document.getElementById('cell2');
          cell2 = document.getElementById('cell3');
          cell3 = document.getElementById('cell4');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`${city.cityId}`;
          cityBtn1.classList.add('RovaYudAlef')
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`${city.cityId}`;
          cityBtn2.classList.add('RovaYudAlef')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`${city.cityId}`;
          cityBtn3.classList.add('RovaYudAlef')
          cell3.appendChild(cityBtn3);
          break;
      }
 //add event on click to render city card
 
 cityBtn1.addEventListener('click',()=>{renderCityCard(city.cityId)}) ;
 cityBtn2.addEventListener('click',()=>{renderCityCard(city.cityId)}) ;
 cityBtn3.addEventListener('click',()=>{renderCityCard(city.cityId)}) ;
    } catch (error) {
      console.error(error);
    }
}
function  renderCityCard(cityId:number){
  try {
    
    const dialog = document.createElement('dialog'); // Create a dialog element
    dialog.classList.add('cityDialog'); // Add a custom CSS class for styling
    const diaylogForm = document.createElement('form');
    diaylogForm.classList.add('cityDialog__cityCardForm')
    diaylogForm.id=`cityCard${cityId}`;
    const btnClose = document.createElement('button');
    btnClose.classList.add('closeCityDialog');
    btnClose.innerHTML='X'
    btnClose.addEventListener('click', closePopup);
    diaylogForm.appendChild(btnClose);

    const cityName=document.createElement('h1');
    const cityBuyPrice=document.createElement('h2');  
    const cityRentPrice=document.createElement('h2');
    const owner=document.createElement('h2');
    const city=gamesBoardsAGpage?.find(board=>board.cities.find(city=>city.cityId===cityId))?.cities.find(city=>city.cityId===cityId);   
    if(!city) throw new Error("cant find city");  
    cityName.innerHTML=`${city.cityName}`; 
    cityBuyPrice.innerHTML=`Buy Price : ${city.monetaryValue}`; 
    cityRentPrice.innerHTML=`Rent Price : ${city.rentValue}`; 
    const ownerName=gamesBoardsAGpage?.find(board=>board.cities.find(city=>city.cityId===cityId))?.players.find(player=>player.playerId===city.cityOwner?.playerId)?.userName;
    owner.innerHTML=`Owner : ${ownerName || "No Owner" }`;
    
    diaylogForm.appendChild(cityName);
    diaylogForm.appendChild(cityBuyPrice);
    diaylogForm.appendChild(cityRentPrice);
    diaylogForm.appendChild(owner);
    if(!ownerName)
    {
      const buyBtn=document.createElement('button');
      buyBtn.classList.add('buyBtn');
      buyBtn.innerHTML=`Buy`;
      diaylogForm.appendChild(buyBtn);
      // buyBtn.addEventListener('click',()=>{buyCity(cityId,city.monetaryValue)}); 
    }
    else{
      const payBtn=document.createElement('button');
      payBtn.classList.add('payBtn');
      payBtn.innerHTML=`Pay`;
      diaylogForm.appendChild(payBtn);
      // payBtn.addEventListener('click',()=>{payRent(cityId,city.rentValue)});
    }
    dialog.appendChild(diaylogForm);  

    document.body.appendChild(dialog); // Append the dialog to the document body

    dialog.showModal(); // Display the dialog as a modal

    
   // Generate and display the random number
}
catch(error)
{
  console.error(error);
}
}
function putPlayerOnBoard(player:Player){
  try {
         const cell = document.getElementById('cell5');
         if (!cell) throw new Error("cant find cell");
         
          const playerHtml=document.createElement('div')
          playerHtml.classList.add('player')
          playerHtml.id=`${player.playerId}`
          playerHtml.style.backgroundImage=`url("./dist/${player.playerId}.png")`;
          cell.appendChild(playerHtml)
          cell.style.display = "flex"; // Set the display property to "flex"
          cell.style.flexWrap = "wrap"; // Set the flex-wrap property to "wrap"
      //playerStep(player.playerId)
      
    } catch (error) {
      console.error(error);
    }
}
function renderOptionsBtns(gamesBoardsAGpage : Board[]| undefined){
  try {
   
    const htmlOptionsBtns= document.querySelector("#optionsBtns")
    if(!htmlOptionsBtns) throw new Error("Cant find optionsBtns");
    const html = `<form>
    <input type="button" onclick="gameOver()" class="optionsBtns__Button" value="End game">
    <input type="button" onclick="backHome()" class="optionsBtns__Button" value="Back">
 </form>`
    
 htmlOptionsBtns.innerHTML=html;
  } catch (error) {
    console.error(error);
    
  }

}
function backHome(){
  if (!gamesBoardsAGpage) throw new Error("cant find gamesBoardsAGpage");
  saveBoardsForOpenGame(gamesBoardsAGpage)
  console.log("Game started!");
  window.location.href = "./HomePage.html";
}
function gameOver(){
  try {

    if(!gamesBoardsAGpage)throw new Error("cant find gamesBoardsAGpage");
    
    const currentGame= gamesBoardsAGpage.find(board=>board.gameStatus===true)
    if(!currentGame)throw new Error("cant find currentGame");
    currentGame.gameStatus=false;
    backHome();
    
  } catch (error) {
    console.error(error);
  }
}
function saveBoardsForOpenGame (boards: Board[] | undefined){
  try {
    if(!boards) throw new Error("Cant find boards");
    
    // Save the updated list of boards to local storage
      const boardsJson = JSON.stringify(boards);
      localStorage.setItem('gamesBoards', boardsJson);
    
  } catch (error) {
    console.error(error);
    
  }
 
}
function playerStep(playerId:number){
  try {
  const playerDiv = document.getElementById(`player${playerId}`);
  if (!playerDiv) throw new Error("cant find playerDiv");
  
  const currentCell = playerDiv.parentElement; // Get the current cell of the player
  if (!currentCell) throw new Error("cant find currentCell");
 
//   // Get the next cell based on the current cell's ID
const currentCellId = currentCell.id.match(/\d+/)
//   const nextCellId = [currentCellId[0] - 1, currentCellId[1]]; // Move one cell up
if (!currentCellId) throw new Error("cant find currentCellId");

  const nextCell = document.getElementById(`cell${Number(currentCellId[0])+1}`);
  if (!nextCell) throw new Error("cant find nextCell");
  
   nextCell.appendChild(playerDiv); // Move the player to the next cell
  
  } catch (error) {
    console.error(error);
    
  }
}
function dropCube() {
  try {
    var cube = document.getElementById("cubeButton");
    if (!cube) throw new Error("Can't find cube.");

    cube.style.display = "none"; // Hide the cube initially
    setTimeout(function () {
      if (!cube) throw new Error("Can't find cube.");
      cube.style.display = "block"; // Show the cube after a delay
      cube.classList.add("rotate-animation");
      setTimeout(function () {
        cube?.classList.remove("rotate-animation");
        showPopup();
        generateRandomNumber();
      }, 2000);
    }, 500);
  } catch (error) {
    console.error(error);
  }
}
function showPopup() {
  try {
    const dialog = document.createElement('dialog'); // Create a dialog element
    dialog.classList.add('popup-dialog'); // Add a custom CSS class for styling

    const spanClose = document.createElement('span');
    spanClose.classList.add('close');
    spanClose.addEventListener('click', closePopup);
    spanClose.innerHTML = '&times;';
    dialog.appendChild(spanClose);

    const numDiv = document.createElement('div');
    numDiv.id = "randomNumber";
    numDiv.classList.add('randomNumber');
    dialog.appendChild(numDiv);

    document.body.appendChild(dialog); // Append the dialog to the document body

    dialog.showModal(); // Display the dialog as a modal

    generateRandomNumber();
   // Generate and display the random number


  } catch (error) {
    console.error(error);
  }
}

function closePopup() {
  try {

    var dialog = document.querySelector('dialog'); // Get the dialog element
    if (!dialog) throw new Error("Can't find dialog.");
    dialog.close(); // Close the dialog
    dialog.remove(); // Remove the dialog element from the DOM
  } catch (error) {
    console.error(error);
  }
}
function generateRandomNumber() {
  try {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomNumberElement = document.getElementById("randomNumber");
    if(!randomNumberElement) throw new Error("cant find randomNumberElement ");
    randomNumberElement.textContent = randomNumber.toString();

    // save value to board game
    if(!currentGame) throw new Error("cant find current game");
    currentGame.luckyCube=randomNumber;
  } catch (error) {
    console.error(error);
  }
}
function renderInCell(){
const beginCell=document.getElementById("4-1");
const  beginDiv = document.createElement('div')
beginDiv.classList.add('begin')
ss
beginCell?.appendChild(beginDiv);
}
const gamesBoardsAGpage : Board[]| undefined = loadBoardsAGpage();
const currentGame= gamesBoardsAGpage?.find(game=> game.gameStatus===true)

//shape of the board
renderBoard(currentGame);
renderOptionsBtns(gamesBoardsAGpage);
renderInCell();
console.log(gamesBoardsAGpage);


