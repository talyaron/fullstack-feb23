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
   // Get the board container element 
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
//set all the cells in the board  
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
  function setGoodSurprises(){ 
    try {

      //create button for each cell
      const goodS1=document.createElement('button')
      goodS1.classList.add('goodS')
      goodS1.id='goodS1'
      const goodS2=document.createElement('button')
      goodS2.classList.add('goodS')
      goodS2.id='goodS2'
      const goodS3=document.createElement('button')
      goodS3.classList.add('goodS')
      goodS3.id='goodS3'
      const goodS4=document.createElement('button')
      goodS4.classList.add('goodS')
      goodS4.id='goodS4'

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
      BadS1.id='BadS1'
      const BadS2=document.createElement('button')
      BadS2.classList.add('BadS')
      BadS2.id='BadS2'
      const BadS3=document.createElement('button')
      BadS3.classList.add('BadS')
      BadS3.id='BadS1'
    

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
function setBadBtnForRandom(badThings:QuestionBadThings[]){
//on click btn will render random suprise
try {
  const bads= document.getElementById('2-7');
  if(!bads) throw new Error("canf find cell 2-7")
  const BadThings=document.createElement('button')
  BadThings.classList.add('BadThings')
  BadThings.disabled= true ;
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
function setGoodBtnForRandom(goodThings:QuestionGoodThings[]){
  //on click btn will render random suprise
  try {
    const goods= document.getElementById('2-2');
    if(!goods) throw new Error("canf find cell 2-2");
    const GoodThings=document.createElement('button')
    GoodThings.classList.add('GoodThings') 
    GoodThings.id='GoodThingsBt'

    GoodThings.disabled=true;  
    GoodThings.addEventListener('click',()=>{RandomGoodSuprise(goodThings)})
    goods.appendChild(GoodThings);

  } catch (error) {
    console.error(error);
  }
  }
function RandomGoodSuprise(goodThings: QuestionGoodThings[]) {  
    try {
      // Get a random bad thing from the array  
      const randomGoodThing = goodThings[Math.floor(Math.random() * goodThings.length)];  
      // Create a dialog element  
      const dialog = document.createElement('dialog');  
      dialog.classList.add('dialog-card');  
      // Create title element 
      const title = document.createElement('h3'); 
      title.innerText = randomGoodThing.goodThingsTitel; 
      dialog.appendChild(title);  
      // Create description element 
      const description = document.createElement('p');  
      description.innerText = randomGoodThing.goodThingsDescription; 
      dialog.appendChild(description);
      // Create purchase price element
      const winPrice = document.createElement('p');
      winPrice.innerText = 'Purchase Price: ' + randomGoodThing.winningPrice.toString();  
      dialog.appendChild(winPrice);
      // Create close button
      const closeButton = document.createElement('button');
      closeButton.innerText = 'Close';
      closeButton.addEventListener('click', () => { 
        // Close the dialog when the close button is clicked
        dialog.close(); 
       })
      dialog.appendChild(closeButton);  
      // Append the dialog to the document body 
      document.body.appendChild(dialog);  
      // Show the dialog
      dialog.showModal();

      

      
    } catch (error) {
      Error(error);
    }
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

if(!cell) throw new Error("cant find cell");  
     
    const  jailBtn= document.createElement('bottun')
      jailBtn.classList.add('jailBtn')
      jailBtn.id=`jail${jail.jailId}`;
      jailBtn.style.backgroundImage = `url('${jail.jailImg}')`;
      cell.appendChild(jailBtn);
     
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
          cityBtn1.id=`city${city.cityId}`;
          cityBtn1.classList.add('RovaA')
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`city${city.cityId}`;
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
        cityBtn1.id=`city${city.cityId}`;
        cityBtn1.classList.add('RovaBet')
       
        cell1.appendChild(cityBtn1);
        cityBtn2= document.createElement('bottun')
        cityBtn2.id=`city${city.cityId}`;
        cityBtn2.classList.add('RovaBet')
        cell2.appendChild(cityBtn2);
        cityBtn3= document.createElement('bottun')
        cityBtn3.id=`city${city.cityId}`;
        cityBtn3.classList.add('RovaBet')
        cell3.appendChild(cityBtn3);
          break;
        case 2://Rova Gimel
          cell1 = document.getElementById('cell25');
          cell2 = document.getElementById('cell26');
          cell3 = document.getElementById('cell27');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`city${city.cityId}`;
          cityBtn1.classList.add('RovaGimel')
         
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`city${city.cityId}`;
          cityBtn2.classList.add('RovaGimel')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`city${city.cityId}`;
          cityBtn3.classList.add('RovaGimel')
          cell3.appendChild(cityBtn3);
            break;
        case 3://Rova Daled
        cell1 = document.getElementById('cell20');
        cell2 = document.getElementById('cell21');
        cell3 = document.getElementById('cell22');
        
        if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
        cityBtn1= document.createElement('bottun')
        cityBtn1.id=`city${city.cityId}`;
        cityBtn1.classList.add('RovaDaled')
        cell1.appendChild(cityBtn1);
        cityBtn2= document.createElement('bottun')
        cityBtn2.id=`city${city.cityId}`;
        cityBtn2.classList.add('RovaDaled')
        cell2.appendChild(cityBtn2);
        cityBtn3= document.createElement('bottun')
        cityBtn3.id=`city${city.cityId}`;
        cityBtn3.classList.add('RovaDaled')
        cell3.appendChild(cityBtn3);
          break;
        case 4://Rova CITY
          cell1 = document.getElementById('cell16');
          cell2 = document.getElementById('cell17');
          cell3 = document.getElementById('cell18');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`city${city.cityId}`;
          cityBtn1.classList.add('RovaCITY')
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`city${city.cityId}`;
          cityBtn2.classList.add('RovaCITY')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`city${city.cityId}`;
          cityBtn3.classList.add('RovaCITY')
          cell3.appendChild(cityBtn3);
            break;
        case 5://Rova TetVav
          cell1 = document.getElementById('cell11');
          cell2 = document.getElementById('cell12');
          cell3 = document.getElementById('cell13');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`city${city.cityId}`;
          cityBtn1.classList.add('RovaTetVav')
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`city${city.cityId}`;
          cityBtn2.classList.add('RovaTetVav')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`city${city.cityId}`;
          cityBtn3.classList.add('RovaTetVav')
          cell3.appendChild(cityBtn3);
            break;
        case 6://Rova YudBet
          cell1 = document.getElementById('cell7');
          cell2 = document.getElementById('cell8');
          cell3 = document.getElementById('cell9');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`city${city.cityId}`;
          cityBtn1.classList.add('RovaYudBet')
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`city${city.cityId}`;
          cityBtn2.classList.add('RovaYudBet')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`city${city.cityId}`;
          cityBtn3.classList.add('RovaYudBet')
          cell3.appendChild(cityBtn3);
          break;   
        case 7://Rova YudAlef
          cell1 = document.getElementById('cell2');
          cell2 = document.getElementById('cell3');
          cell3 = document.getElementById('cell4');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
          cityBtn1= document.createElement('bottun')
          cityBtn1.id=`city${city.cityId}`;
          cityBtn1.classList.add('RovaYudAlef')
          cell1.appendChild(cityBtn1);
          cityBtn2= document.createElement('bottun')
          cityBtn2.id=`city${city.cityId}`;
          cityBtn2.classList.add('RovaYudAlef')
          cell2.appendChild(cityBtn2);
          cityBtn3= document.createElement('bottun')
          cityBtn3.id=`city${city.cityId}`;
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
function putPlayerOnBoard(player:Player){
  try {
         const cell = document.getElementById( `${player.cellId}`);
         
         if (!cell) throw new Error("cant find cell");
         cell.style.display = "flex"; // Set the display property to "flex"
         cell.style.flexWrap = "wrap"; // Set the flex-wrap property to "wrap"

          const playerHtml=document.createElement('div')
          playerHtml.classList.add('player')
          playerHtml.id=`player${player.playerId}`
          playerHtml.style.backgroundImage=`url("./dist/${player.playerId}.png")`;
          playerHtml.style.zIndex = "999";
          cell.appendChild(playerHtml)

         
      //playerStep(player.playerId)
      
    } catch (error) {
      console.error(error);
    }
}
function putCubeOnBoard() {
  try {
    const cell = document.getElementById('3-4');
    if (!cell) throw new Error("Can't find cell '3-4'");

    // Get the cube button element
    const cubeButton = document.getElementById('cubeButton');
    if (!cubeButton) throw new Error("Can't find cube button");

    // Remove the cube button from its current parent
    const currentParent = cubeButton.parentElement;
    if (currentParent) currentParent.removeChild(cubeButton);

    // Append the cube button to the desired cell
    cell.appendChild(cubeButton);

    // Show the cube button
    cubeButton.style.display = 'block';
  } catch (error) {
    console.error(error);
  }
}

function renderOptionsBtns(gamesBoardsAGpage : Board[]| undefined){
  try {
   const currentGame= gamesBoardsAGpage?.find(board=>board.gameStatus===true);
    const htmlOptionsBtns= document.getElementById('4-7')
    if(!htmlOptionsBtns) throw new Error("Cant find optionsBtns");
    const html = `<form>
    <input type="button" id='IDplay' onclick="play()" class="optionsBtns__Button" value="Start Game">
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
function playerStep(playerId:number,hasLandedOnCity:boolean){
  try {
  if(!currentGame) throw new Error("cant find currentGame");  
  const playerDiv = document.getElementById(`player${playerId}`);
  if (!playerDiv) throw new Error("cant find playerDiv");
  
  const currentCell = playerDiv.parentElement; // Get the current cell of the player
  if (!currentCell) throw new Error("cant find currentCell");
 
    //   // Get the next cell based on the current cell's ID
    const currentCellId = currentCell.id.match(/\d+/)
    //   const nextCellId = [currentCellId[0] - 1, currentCellId[1]]; // Move one cell up
    if (!currentCellId) throw new Error("cant find currentCellId");

let nextCellId=Number(currentCellId[0])+1;
if(nextCellId===36)
nextCellId=1;
  const nextCell = document.getElementById(`cell${Number(nextCellId)}`);
  if (!nextCell) throw new Error("cant find nextCell");
 
  
   nextCell.appendChild(playerDiv); // Move the player to the next cell
   if (hasLandedOnCity){
   
    const cellId = getCityIdFromPosition(nextCell);
    const cellName =nextCell.firstChild?.id.replace(/\d+/g, ''); // Replace with your logic to get the cityId
    if (!cellName) throw new Error("cant find cellName"); 
    // if have class list RovaA| rovaBet| rovaGimel| rovaDaled| rovaCITY| rovaTetVav| rovaYudBet| rovaYudAlef 
    if (cellName==='city') {
      rendercityCardRentOrBuy(cellId, playerId);
    }
    else if(cellName==='jail'){ 
      // if user in jail he cant play for one turn

      //find the jail
      const jail = currentGame.jails.find((jail) => jail.jailId === cellId);
      if (!jail) throw new Error("cant find jail"); 
      //find the player
      const player = currentGame.players.find((player) => player.playerId === playerId);
      if (!player) throw new Error("cant find player"); 
      
      player.isJail=true;
      renderJailCard(jail,playerId);
      
      
    }
    else if(cellName==='goodS'){
      
      const goodS=document.getElementById('GoodThingsBt');
      if(!goodS) throw new Error("cant find GoodThingsBtn");  
      goodS.classList.add('enlarge-animation');

        setTimeout(() => {
          goodS.classList.remove('enlarge-animation');
        }, 3000);
        if(!currentGame) throw new Error("cant find currentGame");  
        const goodsId = Math.floor(Math.random() * (currentGame.goodThings.length - 1)) + 1;
        rendergoodsCard(goodsId, playerId);
    }
    else if(cellName==='BadS'){
      const badsId = Math.floor(Math.random() * (currentGame.badThings.length - 1)) + 1;
      renderBadsCard(badsId, playerId);
    }
   }
  } catch (error) {
    console.error(error);
    
  }
}
function renderJailCard(jail:Jail,playerID){
try {
  if(!currentGame) throw new Error("cant find currentGame");
  if(!jail) throw new Error("cant find jail");  
  const dialog = document.createElement('dialog'); // Create a dialog element 
  dialog.classList.add('dialog-card'); // Add a custom CSS class for styling
  const spanClose = document.createElement('span');
  spanClose.classList.add('close'); 
  spanClose.addEventListener('click', () =>  {
    // Close the dialog when the close button is clicked
    dialog.close();
    renderPlayersStatusGame();
  });  
  spanClose.innerHTML = 'stay in jail for one turn';  
  dialog.appendChild(spanClose);  
  const title = document.createElement('h3'); 
  title.innerText = jail.jailName; 
  dialog.appendChild(title);  
  const description = document.createElement('p');  
   
  const purchasePrice = document.createElement('p');  
  purchasePrice.innerText = 'Purchase Price: ' + jail.earlyReleaseCost.toString(); 
  dialog.appendChild(purchasePrice);  
  //add btn to pay for early release  
  const payBtn = document.createElement('button');  
  payBtn.innerText = 'Pay'; 
  payBtn.addEventListener('click', () => {  
    // Close the dialog when the close button is clicked  
    
    //remove player from jail 
    const player = currentGame.players.find((player) => player.playerId === playerID); 
    debugger 
    if (!player) throw new Error("cant find player"); 
    player.isJail=false;  
    player.Pbank-=jail.earlyReleaseCost;
    alert(`you paid ${jail.earlyReleaseCost} to get out of jail`); 
    dialog.close(); 
    //if player bank is less then 0 he lost the game
    playerIfLose(playerID);
    renderPlayersStatusGame();
   
  });
  dialog.appendChild(payBtn); 
  document.body.appendChild(dialog);  
  dialog.showModal(); 


} catch (error) {
  console.error(error);  
}

}
function checkPlayerPbank(playerID:number){
  if(!currentGame) throw new Error("cant find currentGame");  
  const player=currentGame.players.find(player=>player.playerId===playerID);  
  if(!player) throw new Error("cant find player");  
  if(player.Pbank<=0)
    return false
  else
    return true
}
function playerIfLose(playerID:number){
  try {
    debugger
    if(!currentGame) throw new Error("cant find currentGame");
    const isPlayerLose=checkPlayerPbank(playerID);
    if(!isPlayerLose){
      const playerDiv = document.getElementById(`player${playerID}`);
      if (!playerDiv) throw new Error("cant find playerDiv");
      playerDiv.style.display = "none"; // Set the display property to "flex"
      playerDiv.style.flexWrap = "wrap"; // Set the flex-wrap property to "wrap"
      //remove player from players list
      const player = currentGame.players.find((player) => player.playerId === playerID);
      if (!player) throw new Error("cant find player"); 
      player.status=false;
      //check if there is only one player left
      const players = currentGame.players.filter((player) => player.status === true);
      if(players.length===1){
        //end game
        alert(`Game Over, the winner is player ${players[0].playerId} : ${players[0].userName}`);
        gameOver();
      }
    } 


  } catch (error) {
    console.error(error);
  }
}
 
function getCityIdFromPosition( nextCell: HTMLElement){
  try {
   if(!nextCell.firstChild) throw new Error("cant find nextCell.firstChild");
   
    const nextCellId = nextCell.firstChild.id.match(/\d+/); 
   
    // Get the city ID from the cell's first child ID 
    if (!nextCellId) throw new Error("cant find cityId");
    return Number(nextCellId[0]);
  } catch (error) {
    console.error(error);
  }
}
function dropCube() {
  try {
    const cube = document.getElementById("cubeButton");
    if (!cube) throw new Error("Can't find cube.");
    cube.classList.add("rotate-animation");
    showPopup();
    saveLuckeyCube();
    setTimeout(() => {
    cube.classList.remove("rotate-animation");
    
    }, 2000);
    
  } catch (error) {
    console.error(error);
  }
}
function saveLuckeyCube(){
  try {
    if(!gamesBoardsAGpage) throw new Error("cant find gamesBoardsAGpage");
    const currentGame= gamesBoardsAGpage.find(board=>board.gameStatus===true)
    if(!currentGame) throw new Error("cant find currentGame");
    const luckeyCube = document.getElementById("randomNumber");
    if (!luckeyCube) throw new Error("Can't find luckeyCube.");
    currentGame.luckyCube=Number(luckeyCube.textContent);
    console.log(currentGame.luckyCube);
  } catch (error) {
    console.error(error);
  }
}
function showPopup() {
  try {
    const dialog = document.createElement('dialog'); // Create a dialog element
    dialog.classList.add('dialog-card'); // Add a custom CSS class for styling
   dialog.id='cubeDialog'
   dialog.style.position = 'absolute'; // Set the position to absolute
dialog.style.top = '-400px'; // Set the top position to 50px
dialog.style.left = '60px'; // Set the left position to 50px
    const spanClose = document.createElement('span');
    spanClose.classList.add('close');
    spanClose.addEventListener('click', closePopup);
    spanClose.innerHTML = 'X';
    dialog.appendChild(spanClose);
    const randNumber=getRandomNumber(1,6);

    const numDiv = document.createElement('div');
    numDiv.id = "randomNumber";
    numDiv.classList.add('randomNumber');
    numDiv.textContent = randNumber.toString();
    dialog.appendChild(numDiv);

    document.body.appendChild(dialog); // Append the dialog to the document body

    dialog.showModal(); // Display the dialog as a modal


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

function renderIBeginCell(){
const beginCell=document.getElementById("4-1");
const  beginDiv = document.createElement('div')
beginDiv.classList.add('begin')
beginCell?.appendChild(beginDiv);
}

function play() {
  try {
  
    // hide play btn 
    const playBtn = document.getElementById('IDplay');  
    if (!playBtn) throw new Error("Can't find playBtn."); 
    playBtn.style.display = 'none'; 

 // show cube btn 
  const cube = document.getElementById('cubeButton') as HTMLButtonElement;
  if (!cube) throw new Error("Can't find cube."); 
  cube.style.display = 'block';
    

    if (!gamesBoardsAGpage) throw new Error("Can't find gamesBoardsAGpage");
    const currentGame = gamesBoardsAGpage.find((board) => board.gameStatus === true);
    if (!currentGame) throw new Error("Can't find currentGame");

    let players = currentGame.players.filter((player) => player.status === true);
      //get current players status game
      renderPlayersStatusGame();

    // Define a function to wrap the player's turn logic in a Promise
    function playPlayerTurn(player) {
      return new Promise((resolve, reject) => {
        const cube = document.getElementById('cubeButton') as HTMLButtonElement;
        if (!cube) throw new Error("Can't find cube");

        cube.disabled = false;
        cube.style.display = 'block';
        cube.style.border = '2px solid green';
        cube.innerHTML = 'Press Me';
        cube.value = 'Drop the cube';
       

        const playerDiv = document.getElementById(`player${player.playerId}`);
        if (!playerDiv) throw new Error("Can't find playerDiv");

        playerDiv.classList.add('currentPlayer');

        // Resolve the Promise when the player drops the cube (e.g., on a button click event)
        cube.addEventListener('click', () => {
          cube.disabled = true; 
          cube.style.display = 'none'; 
          cube.style.border = 'none';
          playerDiv.classList.remove('currentPlayer');
          resolve(void 0);
        });
      });
    }

    // Define an async function to iterate over the players and wait for each turn to finish
    async function iteratePlayers() {
      while (players.length > 1) {
        for (const currentPlayer of players) {
          try {
            if (currentPlayer.isJail===true){
              currentPlayer.isJail=false;
              continue;
            }else{
            console.log(`Player: ${currentPlayer.playerId}`);
            await playPlayerTurn(currentPlayer);
            if (!currentGame) throw new Error("Can't find currentGame");
          // Continue with the remaining logic for the player's turn
          if (currentGame.luckyCube !== 0) {
            console.log(`Player ${currentPlayer.playerId} is playing`);
            
            for (let index = 1; index <= currentGame.luckyCube; index++) {
              if(index===currentGame.luckyCube)
              playerStep(currentPlayer.playerId,true);
              else
              playerStep(currentPlayer.playerId,false);
            }
           
            const newCell = document.getElementById(`player${currentPlayer.playerId}`);
            if (!newCell) throw new Error("Can't find newCell");
            const parentCell = newCell.parentNode as HTMLDivElement;
            if (!parentCell) throw new Error("Can't find parentCell");

            currentPlayer.cellId = parentCell.id;
            currentGame.luckyCube = 0;

            const cellButton = parentCell.firstChild as HTMLButtonElement;
            if (!cellButton) throw new Error("Can't find cellButton");

          }
        }
          } catch (error) {
            console.error(error);
          }
        }
        players = players.filter((player) => player.status === true);
      }
      
      if (players.length === 1) {
        console.log(`Player ${players[0].playerId} is the winner!`);
      } else {
        console.log("The game has ended with no winner.");
      }
    }

    // Call the async function to start the iteration over players
    iteratePlayers().catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
}

function buyCity(cityId: number, playerId: number) {
  if (!gamesBoardsAGpage) throw new Error("Can't find gamesBoardsAGpage");
  const currentGame = gamesBoardsAGpage.find((board) => board.gameStatus === true);
  if (!currentGame) throw new Error("Can't find currentGame");

  const city = currentGame.cities.find((city) => city.cityId === cityId);
  if (!city) throw new Error("Can't find city");

  const player = currentGame.players.find((player) => player.playerId === playerId);
  if (!player) throw new Error("Can't find player");

  player.Pbank -= city.monetaryValue;
  playerIfLose(player.playerId);
  if (checkPlayerPbank(player.playerId)){
    city.cityOwner = player; 
    console.log(`player ${city.cityOwner.playerId}: pBank ${player.Pbank}`);
    console.log(currentGame);
    alert(`Congratulations! You are now the owner of ${city.cityName}. Your Pbank balance is ${player.Pbank}.`);
  }
  
// border color to city have owner

  const cityBtn = document.getElementById(`city${cityId}`);
  if (!cityBtn) throw new Error("Can't find cityBtn"); 
  // find class
  const cityClass = cityBtn.classList[0];
  // add border color to city have owner
  const cityBtns = document.querySelectorAll(`.${cityClass}`);
  cityBtns.forEach((cityBtn) => {
    cityBtn.classList.add('cityOwner');
  });
  renderPlayersStatusGame();
}

function payRent(cityId: number, playerId: number) {
  if (!gamesBoardsAGpage) throw new Error("Can't find gamesBoardsAGpage");
  const currentGame = gamesBoardsAGpage.find((board) => board.gameStatus === true);
  if (!currentGame) throw new Error("Can't find currentGame");

  const city = currentGame.cities.find((city) => city.cityId === cityId);
  if (!city) throw new Error("Can't find city");

  const player = currentGame.players.find((player) => player.playerId === playerId);
  if (!player) throw new Error("Can't find player");

  player.Pbank -= city.rentValue;
  playerIfLose(player.playerId);
  if (!city.cityOwner) throw new Error("Can't find cityOwner");
  city.cityOwner.Pbank += city.rentValue;

  console.log(`player pay ${player.playerId}:${player.Pbank}`);
  console.log(`player get ${city.cityOwner?.playerId} :${city.cityOwner?.Pbank}`);


  renderPlayersStatusGame();
}
function  renderCityCard(cityId:number){
  try {
    
    const dialog = document.createElement('dialog'); // Create a dialog element
    dialog.classList.add('dialog-card'); // Add a custom CSS class for styling
    const diaylogForm = document.createElement('form');
    diaylogForm.id=`cityCard${cityId}`;
    const btnClose = document.createElement('button');
   
    btnClose.innerHTML='close'
    btnClose.addEventListener('click', closePopup);
    diaylogForm.appendChild(btnClose);

    const cityName=document.createElement('h1');
    const cityBuyPrice=document.createElement('h2');  
    const cityRentPrice=document.createElement('h2');
    const owner=document.createElement('h2');
    if (!currentGame) throw new Error("cant find currentGame");
    const city=currentGame.cities.find(city=>city.cityId===cityId);  
    if(!city) throw new Error("cant find city");  
    cityName.innerHTML=`${city.cityName}`; 
    cityBuyPrice.innerHTML=`Buy Price : ${city.monetaryValue}`; 
    cityRentPrice.innerHTML=`Rent Price : ${city.rentValue}`; 
  
    const ownerName=city.cityOwner?.userName;
    owner.innerHTML=`Owner : ${ownerName || "No Owner" }`;
    
    diaylogForm.appendChild(cityName);
    diaylogForm.appendChild(cityBuyPrice);
    diaylogForm.appendChild(cityRentPrice);
    diaylogForm.appendChild(owner);
    dialog.appendChild(diaylogForm);  

    document.body.appendChild(dialog); // Append the dialog to the document body

    dialog.showModal(); // Display the dialog as a modal

}
catch(error)
{
  console.error(error);
}
}

function rendercityCardRentOrBuy(cityId, playerId) {
  try {
    if(!currentGame) throw new Error("Can't find currentGame"); 

    // If the city has an owner, render pay rent; else, render buy city or pick a good gift
    const city = currentGame.cities.find((city) => city.cityId === cityId);

    if (!city) throw new Error("Can't find city");

    const dialog = document.createElement('dialog');
    dialog.classList.add('dialog-card');

    const dialogForm = document.createElement('form');
   
    dialogForm.id = `cityCard${cityId}`;

    // Prevent form submission
    dialogForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });


    const cityName = document.createElement('h1');
    cityName.innerHTML = `${city.cityName}`;
    dialogForm.appendChild(cityName);

    const cityBuyPrice = document.createElement('h2');
    cityBuyPrice.innerHTML = `Buy Price: ${city.monetaryValue}`;
    dialogForm.appendChild(cityBuyPrice);

    const cityRentPrice = document.createElement('h2');
    cityRentPrice.innerHTML = `Rent Price: ${city.rentValue}`;
    dialogForm.appendChild(cityRentPrice);

    const owner = document.createElement('h2');
    owner.innerHTML = `Owner: ${city.cityOwner?.userName || 'No Owner'}`;
    dialogForm.appendChild(owner);

    if (city.cityOwner) {
      
      if (city.cityOwner.playerId === playerId) {
        debugger
        //render good things card
        const goodsId = Math.floor(Math.random() * (currentGame.goodThings.length - 1)) + 1;
        dialog.close();
        rendergoodsCard(goodsId, playerId);
        
      }
      else {
      const payBtn = document.createElement('button');
      payBtn.classList.add('payBtn');
      payBtn.innerHTML = `Pay`;
      payBtn.addEventListener('click', () => {
        payRent(cityId, playerId);
        dialog.close();
      });
      dialogForm.appendChild(payBtn);
    }
    } else {
      const buyBtn = document.createElement('button');
      buyBtn.classList.add('buyBtn');
      buyBtn.innerHTML = `Buy`;
      buyBtn.addEventListener('click', () => {
        buyCity(cityId, playerId);
        dialog.close();
      });
      dialogForm.appendChild(buyBtn);
        // Render choose present button
        // pic random present from goodThings
        const goodsId = Math.floor(Math.random() * (currentGame.goodThings.length - 1)) + 1;
        const choosePresentBtn = document.createElement('button');
        choosePresentBtn.classList.add('choosePresentBtn');
        choosePresentBtn.innerHTML = `Choose Present`;
        choosePresentBtn.addEventListener('click', () => {
        rendergoodsCard(goodsId,playerId)
          
          dialog.close();
        });
        dialogForm.appendChild(choosePresentBtn);
    }

    dialog.appendChild(dialogForm);
    document.body.appendChild(dialog);

    dialog.showModal();
  } catch (error) {
    console.error(error);
  }
}

function rendergoodsCard(goodsId,playerId){
try {

  if(!currentGame) throw new Error("Can't find gamesBoardsAGpage"); 

  const goods = currentGame.goodThings.find((good) => good.goodThingsId === goodsId); 
  if (!goods) throw new Error("Can't find goods");

  const dialog = document.createElement('dialog');  
  dialog.classList.add('dialog-card');  
  // Create title element 
  const title = document.createElement('h3'); 
  title.innerText = goods.goodThingsTitel;  
  dialog.appendChild(title);  
  // Create description element
  const description = document.createElement('p');  
  description.innerText = goods.goodThingsDescription;  
  dialog.appendChild(description);  
  // Create purchase price element  
  const winPrice = document.createElement('p'); 
  winPrice.innerText = 'Purchase Price: ' + goods.winningPrice.toString();  
  dialog.appendChild(winPrice); 
  // Create close button  
  const closeButton = document.createElement('button'); 
  closeButton.innerText = 'Close';  
  closeButton.addEventListener('click', () => { 
    // Close the dialog when the close button is clicked  
    dialog.close(); 
    })  
  dialog.appendChild(closeButton);  
  // Append the dialog to the document body 
  document.body.appendChild(dialog);  
  // Show the dialog  
  dialog.showModal(); 

  const player = currentGame.players.find((player) => player.playerId === playerId); 
  if (!player) throw new Error("Can't find player");  
  player.Pbank += goods.winningPrice; 
  console.log(`player ${player.playerId}: pBank ${player.Pbank}`);  
  console.log(currentGame); 
  renderPlayersStatusGame();

  
} catch (error) {
  console.error(error);
  
}


}
function renderBadsCard(BadsId,playerId){
  try {
    debugger
    if(!currentGame) throw new Error("Can't find gamesBoardsAGpage"); 
  
    const bads = currentGame.badThings.find((bad) => bad.badThingsId === BadsId); 
    if (!bads) throw new Error("Can't find bads");
  
    const dialog = document.createElement('dialog');  
    dialog.classList.add('dialog-card');  
    // Create title element 
    const title = document.createElement('h3'); 
    title.innerText = bads.badThingsTitel;  
    dialog.appendChild(title);  
    // Create description element
    const description = document.createElement('p');  
    description.innerText = bads.badThingsDescription;  
    dialog.appendChild(description);  
    // Create purchase price element  
    const finePrice = document.createElement('p'); 
    finePrice.innerText = 'fine Price: ' + bads.purchasePrice.toString();  
    dialog.appendChild(finePrice); 
    // Create close button  
    const closeButton = document.createElement('button'); 
    closeButton.innerText = 'Close';  
    closeButton.addEventListener('click', () => { 
      // Close the dialog when the close button is clicked  
      dialog.close(); 
      })  
    dialog.appendChild(closeButton);  
    // Append the dialog to the document body 
    document.body.appendChild(dialog);  
    // Show the dialog  
    dialog.showModal(); 
  
    const player = currentGame.players.find((player) => player.playerId === playerId); 
    if (!player) throw new Error("Can't find player");  
    player.Pbank -= bads.purchasePrice; 
    playerIfLose(player.playerId);
    console.log(` אחרי קנסplayer ${player.playerId}: pBank ${player.Pbank}`);  
    console.log(currentGame); 
    renderPlayersStatusGame()
  
    
  } catch (error) {
    console.error(error);
    
  }
  
  
  }

function renderPlayersStatusGame(){
try {
  
  const htmlPlayersStatusGame= document.getElementById('7-4') ;

  if(!htmlPlayersStatusGame) throw new Error("cant find playersStatus");  
  htmlPlayersStatusGame.innerHTML = "";

  const players = currentGame?.players.filter(player=>player.status===true);
  if(!players) throw new Error("Cant find players");  
  players.forEach(player => {
    const html = `<div class="playersStatus__player"> 
    <div class="playersStatus__player__id">Player ${player.playerId}</div>  
    <div class="playersStatus__player__name">Player ${player.userName}</div>  
    <div class="playersStatus__player__bank">Bank: ${player.Pbank}</div>  
    <div class="playersStatus__player__cell">Cell: ${player.cellId}</div> 
    <div class="playersStatus__player__isJail">Jail?: ${player.isJail}</div> 
    </div>`;  
    htmlPlayersStatusGame.innerHTML += html;  
  });

  
} catch (error) {
  console.error(error);
  
}

}

const gamesBoardsAGpage : Board[]| undefined = loadBoardsAGpage();
const currentGame= gamesBoardsAGpage?.find(game=> game.gameStatus===true)

//shape of the board

renderBoard(currentGame);

renderIBeginCell();



