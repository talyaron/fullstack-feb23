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
    const hotels=currentGame.hotels;
    const jails=currentGame.jails;
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
        matrix[i][j].classList.add('board-cell');
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
      matrix[i][matrixSize-1].value = counter;
      matrix[i][0].textContent = counter; // Set the cell content to the counter value
      counter++; // Increment the counter
    }
// X = matrixSize-1
    for (let i = 1; i < matrixSize-1; i++) {
      matrix[i][matrixSize-1].value = counter;
      matrix[matrixSize-1][i].textContent = counter; // Set the cell content to the counter value
      counter++; // Increment the counter
    }
  //Y=matrixSize-1
  for (let i = matrixSize-1; i > 0; i--) {
    matrix[i][matrixSize-1].value = counter;
    matrix[i][matrixSize-1].textContent = counter; // Set the cell content to the counter value
    counter++; // Increment the counter
  }
  //x=0
  for (let i = matrixSize-1; i > 0; i--) {
    matrix[0][i].value = counter;
    matrix[0][i].textContent = counter; // Set the cell content to the counter value
    counter++; // Increment the counter
  }

  // set jails
  let JailIndex=0
  jails.forEach(jail=>  {putJailOnBoard(jail,JailIndex);
    JailIndex++;  })
   
  }
  
  
  function putJailOnBoard(jail:Jail,JailIndex:number){

      let cell;
      let jailBtn;
      let jailimg;
      let jailId;
      switch (JailIndex) { // set jails in the corners of the board
        case 0:
          cell = document.getElementById('0-0')
          break;
        case 1:
            cell = document.getElementById('0-9')
            break;
        case 2:
            cell = document.getElementById('9-9')
            break;
        case 3:
              cell = document.getElementById('9-0')
              break;
      }

      jailBtn= document.createElement('bottun')
      jailBtn.classList.add('jailBtn')
      jailBtn.innerHTML=jail.jailName
      jailimg= document.createElement('img')
      jailimg.src=jail.jailImg
      jailId =document.createElement('p')
      jailId.innerHTML= `id:${jail.jailId}` 
      jailId.id= jail.jailId
      jailBtn.appendChild(jailimg)
      jailBtn.appendChild(jailId)
      cell?.appendChild(jailBtn);
      cell.style.backgroundColor = 'red';
  }
 
  
const gamesBoardsAGpage : Board[]| undefined = loadBoardsAGpage();
const currentGame= gamesBoardsAGpage?.find(game=> game.gameStatus===true)

//shape of the board
renderBoard(currentGame);


console.log(gamesBoardsAGpage);

