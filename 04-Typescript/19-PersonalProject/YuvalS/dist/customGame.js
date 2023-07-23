var Word = /** @class */ (function () {
    function Word(word) {
        this.word = word;
    }
    return Word;
}());
var Words = getWordFromLS();
function renderinputs(htmlElement) {
    try {
        htmlElement = document.querySelector("#forms");
        if (!htmlElement)
            throw new Error("No element");
        var html = "<div class=\"input\">\n<form onsubmit=\"handleAddWord(event)\">\n    <label for=\"words\">Insert words</label>\n    <input type=\"text\" name=\"word\" placeholder=\"Word\" required>\n    <input type=\"submit\" value=\"ADD\">\n    </form>\n    <form onsubmit=\"handleStartGame(event)\">\n    <input type=\"submit\" value=\"START GAME\">\n</form>\n</div>";
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderinputs(document.querySelector("#forms"));
function handleAddWord(ev) {
    try {
        ev.preventDefault();
        var inputWord = ev.target.word.value;
        if (inputWord.length !== 5) {
            alert("Must be 5 letters");
            return;
        }
        var newWord = new Word(inputWord);
        Words.push(newWord);
        saveWordToLS(Words);
        console.log(Words);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function handleStartGame(ev) {
    makeBoard();
    handleInputFromUserGame();
}
function saveWordToLS(words) {
    localStorage.setItem('words', JSON.stringify(words));
}
function getWordFromLS() {
    try {
        var WordsStorage = localStorage.getItem('words');
        if (!WordsStorage)
            return [];
        var wordsArr = JSON.parse(WordsStorage);
        var Words_1 = wordsArr.map(function (word) { return new Word(word.word); });
        return Words_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
console.log(Words);
var height = 6;
// let myword = Words[Math.floor(Math.random() * Words.length)].toUpperCase()
var width = 5;
var row = 0; //current guess atempt
var col = 0; // current letter for that attempt
var gameOver = false;
var wordObj = Words[Math.floor(Math.random() * Words.length)];
var myword = wordObj.word.toLocaleUpperCase();
console.log(myword);
// window.onload = function () {
//     makeBoard();
// }
// create game board
function makeBoard() {
    var _a;
    try {
        for (var r = 0; r < height; r++) {
            for (var c = 0; c < width; c++) {
                //<span id = "0-0" class = "tile"></span> for all the tiles
                var tile = document.createElement("span");
                tile.id = r.toString() + "-" + c.toString();
                tile.classList.add("tile");
                tile.innerText = "";
                var forms = document.querySelector("#forms");
                forms === null || forms === void 0 ? void 0 : forms.remove();
                (_a = document.querySelector("#board")) === null || _a === void 0 ? void 0 : _a.appendChild(tile);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
//create key-board
var keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
];
for (var i = 0; i < keyboard.length; i++) {
    var currRow = keyboard[i];
    var keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");
    for (var j = 0; j < currRow.length; j++) {
        var keyTile = document.createElement("div");
        var key = currRow[j];
        keyTile.innerText = key;
        if (key === "Enter") {
            keyTile.id = "Enter";
        }
        else if (key === "⌫") {
            keyTile.id = "Backspace";
        }
        else if ("A" <= key && key <= "Z") {
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
function handleInputFromUserGame() {
    document.addEventListener("keyup", function (ev) {
        handleInput(ev);
    });
}
function processKey() {
    var ev = { "code": this.id };
    handleInput(ev);
}
function handleInput(ev) {
    if (gameOver)
        return;
    if ("KeyA" <= ev.code && ev.code <= "KeyZ") {
        if (col < width) {
            var currentTile = document.getElementById(row.toString() + "-" + col.toString());
            if (!currentTile)
                throw new Error("couldnt find Tile");
            if (currentTile.innerText == "") {
                currentTile.innerText = ev.code[3];
                col += 1;
            }
        }
    }
    else if (ev.code === "Backspace") {
        if (0 < col && col <= width) {
            col -= 1;
        }
        var currentTile = document.getElementById(row.toString() + "-" + col.toString());
        if (!currentTile)
            throw new Error("couldnt find Tile");
        currentTile.innerText = "";
    }
    else if (ev.code === "Enter") {
        update();
    }
    if (!gameOver && row === height) {
        gameOver = true;
        var answer = document.querySelector("#answer");
        var html = "<h1 class = \"loser\"> Darn it! the correct answer is:\"" + myword.toUpperCase() + "\". Better luck next time!</h1>";
        if (answer)
            answer.innerHTML = html;
    }
    function update() {
        var guess = "";
        //string the guess word
        for (var c = 0; c < width; c++) {
            var currentTile = document.getElementById(row.toString() + "-" + c.toString());
            if (!currentTile)
                throw new Error("couldnt find Tile");
            var letter = currentTile.innerText;
            guess += letter;
        }
        guess = guess.toLocaleLowerCase();
        if (guess.length < width) {
            var answer = document.querySelector("#answer");
            var html = "<h1 class = \"loser\"> NOT Enough Letters</h1>";
            if (answer)
                answer.innerHTML = html;
            return;
        }
        // if (!wordList.includes(guess)) {
        //     const answer = document.querySelector("#answer")
        // const html = `<h1 class = "loser"> "${guess.toUpperCase()}" is NOT a Word</h1>`
        // if (answer) answer.innerHTML = html;
        // return;
        // }
        var correct = 0;
        var letterCount = {};
        for (var i = 0; i < myword.length; i++) {
            var letter = myword[i];
            if (letterCount[letter]) {
                letterCount[letter] += 1;
            }
            else {
                letterCount[letter] = 1;
            }
        }
        //first iteration, checck the correct letters
        for (var c = 0; c < width; c++) {
            var currentTile = document.getElementById(row.toString() + "-" + c.toString());
            if (!currentTile)
                throw new Error("couldnt find Tile");
            var letter = currentTile.innerText;
            //is it in the correct position?
            if (myword[c] === letter) {
                currentTile.classList.add("correct");
                var keyTile = document.getElementById("Key" + letter);
                if (!keyTile)
                    throw new Error("no key-tile");
                keyTile.classList.remove("present");
                keyTile.classList.add("correct");
                correct += 1;
                letterCount[letter] -= 1;
            }
            if (correct === width) {
                gameOver === true;
                var answer = document.querySelector("#answer");
                var html = "<h1 class = \"loser\"> \"" + guess.toUpperCase() + "\" is The Word, GOOD JOB!</h1>";
                if (answer)
                    answer.innerHTML = html;
                return;
            }
        }
        //second it is it the correct position
        for (var c = 0; c < width; c++) {
            var currentTile = document.getElementById(row.toString() + "-" + c.toString());
            if (!currentTile)
                throw new Error("couldnt find Tile");
            var letter = currentTile.innerText;
            if (!currentTile.classList.contains("correct")) {
                // is it in the word?
                if (myword.includes(letter) && letterCount[letter] > 0) {
                    currentTile.classList.add("present");
                    var keyTile = document.getElementById("Key" + letter);
                    if (!keyTile)
                        throw new Error("no key-tile");
                    if (!keyTile.classList.contains("correct")) {
                        keyTile.classList.add("present");
                    }
                    letterCount[letter] -= 1;
                }
                //not in the word
                else {
                    currentTile.classList.add("absent");
                    var keyTile = document.getElementById("Key" + letter);
                    if (!keyTile)
                        throw new Error("no key-tile");
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