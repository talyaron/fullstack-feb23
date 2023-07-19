

const Words:String[] = ["yuval"];
function renderinputs(htmlElement: HTMLElement | null){
    try {
        htmlElement = document.querySelector("#forms");
        if (!htmlElement) throw new Error("No element");
const html =
     
`<div class="input">
<form onsubmit="handleAddWord(event)">
    <label for="words">Insert words</label>
    <input type="text" name="word" placeholder="Word" required>
    <input type="submit" value="ADD">
    </form>
    <form onsubmit="handleStartGame(event)">
    <input type="submit" value="START GAME">
</form>
</div>`;
htmlElement.innerHTML = html;

}
catch (error) {
    console.error(error)     
}
}

renderinputs(document.querySelector("#forms"))

function handleAddWord(ev:any){
try {
            ev.preventDefault();
            const myword = ev.target.word.value;
            if(myword.length !== 5) {alert("Must be 5 letters")
            return
            }

            Words.push(myword);
            console.log(Words)
            ev.target.reset();
            
    
    
    
        } catch (error) {
            console.error(error)
        }
}



function handleStartGame(ev:any){
    makeBoard()
    handleInputFromUserGame()
    
}


// function saveWordToLS(Words){
//     localStorage.setItem('Words', JSON.stringify(Words));
// }

// function getWordFromLS(){
//     try {
//         const WordsStorage = localStorage.getItem('Words');
//         if(!WordsStorage) return 
//         const Words = JSON.parse(WordsStorage);
//         return Words;
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }


console.log(Words)
let height = 6;
let myword = Words[Math.floor(Math.random() * Words.length)].toUpperCase()
let width = 5;
console.log(height);
console.log(myword);
console.log(width);
let row = 0; //current guess atempt
let col = 0; // current letter for that attempt
let gameOver = false;




// window.onload = function () {
//     makeBoard();
// }

// create game board
function makeBoard() {
    
    try {
         
    
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            //<span id = "0-0" class = "tile"></span> for all the tiles
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            const forms = document.querySelector("#forms")
            forms?.remove();
            document.querySelector("#board")?.appendChild(tile);
            
        
            
            
        }
    }
} 

    catch (error) {
        console.error(error);
    }

}


//create key-board
let keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
]

for (let i = 0; i < keyboard.length; i++) {
    let currRow = keyboard[i];
    let keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row")

    for (let j = 0; j < currRow.length; j++) {
        let keyTile = document.createElement("div");

        let key = currRow[j];
        keyTile.innerText = key;
        if (key === "Enter") {
            keyTile.id = "Enter"
        }
        else if (key === "⌫") {
        keyTile.id = "Backspace"
    }
    else if ("A" <= key && key <= "Z"){
        keyTile.id = "Key" + key; // "Key" + "A" like the keyboard
    }

    keyTile.addEventListener("click", processKey);
    if (key === "Enter") {
        keyTile.classList.add("enter-key-tile");
    }
    else {
        keyTile.classList.add("key-tile");
    }
    keyboardRow.appendChild(keyTile);
  }
  document.body.appendChild(keyboardRow);
}
//handle input from user
function handleInputFromUserGame(){
document.addEventListener("keyup", (ev) => {
    handleInput(ev);
})}


function processKey(){
    let ev = {"code" : this.id};
    handleInput(ev)
}
    
function handleInput(ev){

if (gameOver) return;

    if ("KeyA" <= ev.code && ev.code <= "KeyZ") {
        if (col < width) {
            let currentTile = document.getElementById(row.toString() + "-" + col.toString());
            if (!currentTile) throw new Error("couldnt find Tile");

            if (currentTile.innerText == "") {
                currentTile.innerText = ev.code[3];
                col += 1
            }
        }
    }

    else if (ev.code === "Backspace") {
        if (0 < col && col <= width) {
            col -= 1
        }
        let currentTile = document.getElementById(row.toString() + "-" + col.toString());
        if (!currentTile) throw new Error("couldnt find Tile");
        currentTile.innerText = "";
    }

    else if (ev.code === "Enter") {

        update()
        

    }

    if (!gameOver && row === height) {
        gameOver = true;
        const answer = document.querySelector("#answer")
        const html = `<h1 class = "loser"> Darn it! the correct answer is:"${myword.toUpperCase()}". Better luck next time!</h1>`
        if (answer) answer.innerHTML = html;

    }

    function update() {
        
        
        let guess = "";

        //string the guess word
        for (let c = 0; c < width; c++) {
            let currentTile = document.getElementById(row.toString() + "-" + c.toString());
            if (!currentTile) throw new Error("couldnt find Tile");
            let letter = currentTile.innerText;
            guess += letter;
        }

        guess = guess.toLocaleLowerCase();
        if (guess.length < width) {
            const answer = document.querySelector("#answer")
        const html = `<h1 class = "loser"> NOT Enough Letters</h1>`
        if (answer) answer.innerHTML = html;
        return;
        }
        
        
        // if (!wordList.includes(guess)) {
        //     const answer = document.querySelector("#answer")
        // const html = `<h1 class = "loser"> "${guess.toUpperCase()}" is NOT a Word</h1>`
        // if (answer) answer.innerHTML = html;
        // return;
        // }
        
    
      
       
        let correct = 0;
        let letterCount = {};
        for (let i = 0; i < myword.length; i++) {
         let letter = myword[i];
            if (letterCount[letter]) {
                letterCount[letter] += 1;
            }
            else {
                letterCount[letter] = 1;
            }
        }



        //first iteration, checck the correct letters
        for (let c = 0; c < width; c++) {
            let currentTile = document.getElementById(row.toString() + "-" + c.toString());
            if (!currentTile) throw new Error("couldnt find Tile");
            let letter = currentTile.innerText;

            //is it in the correct position?
            if (myword[c] === letter) {
                
                currentTile.classList.add("correct");
                let keyTile = document.getElementById("Key" + letter);
                if(!keyTile) throw new Error("no key-tile")
                keyTile.classList.remove("present");
                keyTile.classList.add("correct");
                correct += 1;
                letterCount[letter] -= 1;
            }


            if (correct === width) {
                gameOver === true;
                const answer = document.querySelector("#answer")
        const html = `<h1 class = "loser"> "${guess.toUpperCase()}" is The Word, GOOD JOB!</h1>`
        if (answer) answer.innerHTML = html;
       return
            }
        }
        //second it is it the correct position
        for (let c = 0; c < width; c++) {
            let currentTile = document.getElementById(row.toString() + "-" + c.toString());
            if (!currentTile) throw new Error("couldnt find Tile");
            let letter = currentTile.innerText;

            if (!currentTile.classList.contains("correct")) {
                // is it in the word?
                if (myword.includes(letter) && letterCount[letter] > 0) {
                    currentTile.classList.add("present");
                    let keyTile = document.getElementById("Key" + letter);
                if(!keyTile) throw new Error("no key-tile")
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                    letterCount[letter] -= 1;
                }
                //not in the word
                else {
                    currentTile.classList.add("absent");
                    let keyTile = document.getElementById("Key" + letter);
                if(!keyTile) throw new Error("no key-tile")
                if (!keyTile.classList.contains("present")) {
                    keyTile.classList.add("absent");
                }
                }
            }

           
        }
        row += 1; //next row
        col = 0; // left letter

    }
   
}
