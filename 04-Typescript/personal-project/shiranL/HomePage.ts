function addPlayer(players: Player[],userName:string){

    players.push(new Player(userName))   
}
function renderPlayers(players:Player[],playersDiv:HTMLElement|null) {
    try {
        // Clear the existing content inside the players div
        if(!players || !playersDiv) throw new Error("cant find players || !playersDiv ")
        playersDiv.innerHTML = '';

        // Loop through each player and create a player element
        players.forEach(player => {
        // Create a new div element for the player
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('players__player');
        playerDiv.style.backgroundColor = player.color;
        
        // Create a span element to display the player's username
        const usernameSpan = document.createElement('span');
        usernameSpan.textContent = player.userName;

        // Append the username span to the player div
        playerDiv.appendChild(usernameSpan);

        // Append the player div to the players div
        playersDiv.appendChild(playerDiv);
  });
    } catch (error) {
        console.error(error);
        
    }
 
}
function loadPlayers(){
    const playersString = localStorage.getItem('players');
            
    if (!playersString) {
        addPlayer(players,"shiranLevy")
        addPlayer(players,"Ohad")
        addPlayer(players,"Nadav")
        addPlayer(players,"Mirit")
        //save to local storage
        const plyersJson = JSON.stringify(players);
        localStorage.setItem('players', plyersJson);
        
    }else{
        const playersArray = JSON.parse(playersString);
        playersArray.forEach((player: any) => {
          players.push(player);
        });
    } 
      
      
}
debugger
const players:Player[]=[];
const playersDiv:HTMLElement|null = document.querySelector('.players');
console.log(players);

loadPlayers();
console.log(players);

// Get the players div element


// Function to render players

// Call the renderPlayers function with the players array
renderPlayers(players,playersDiv);
