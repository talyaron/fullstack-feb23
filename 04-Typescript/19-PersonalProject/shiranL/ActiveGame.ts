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
          debugger
              cell = document.getElementById('cell10')
            
              break;
      }
// create elements for jail
     
    const  jailBtn= document.createElement('bottun')
      jailBtn.classList.add('jailBtn')
      jailBtn.id=`${jail.jailId}`;
      //jailBtn.innerHTML=jail.jailName
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
     
      switch (cityIndex) { // set jails in the corners of the board
        case 0://ROVA A - get tree matrix cell to fill the city
           cell1 = document.getElementById('cell36');
           cell2 = document.getElementById('cell35');
           cell3 = document.getElementById('cell34');
          if(!cell1 || !cell2 || !cell3) throw new Error("cant find cells");
         
          const  cityBtn1= document.createElement('bottun')
          cityBtn1.id=`${city.cityId}`;
          cityBtn1.classList.add('RovaA')
          cell1.appendChild(cityBtn1);
          const  cityBtn2= document.createElement('bottun')
          cityBtn2.id=`${city.cityId}`;
          cityBtn2.classList.add('RovaA')
          cell2.appendChild(cityBtn2);
          const  cityBtn3= document.createElement('bottun')
          cityBtn3.id=`${city.cityId}`;
          cityBtn3.classList.add('RovaA')
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
debugger
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
const gamesBoardsAGpage : Board[]| undefined = loadBoardsAGpage();
const currentGame= gamesBoardsAGpage?.find(game=> game.gameStatus===true)

//shape of the board
renderBoard(currentGame);
renderOptionsBtns(gamesBoardsAGpage);

console.log(gamesBoardsAGpage);

