//model (classes)
var User = /** @class */ (function () {
    function User(userName) {
        this.userName = userName;
        this.level = 0;
    }
    return User;
}());
var users = [];
var Word = /** @class */ (function () {
    function Word(enWord, heWord) {
        this.enWord = enWord;
        this.heWord = heWord;
    }
    return Word;
}());
var words = [
    new Word('book', 'סֵפֶר'),
    new Word('adventure', 'הַרפַּתקָה'),
    new Word('center', 'מֶרְכָּז'),
    new Word('earth', 'כַּדוּר הָאָרֶץ'),
    new Word('volcano', 'הַר גַעַשׁ'),
    new Word('Mountain', 'הַר'),
];
//---------------------handel----------------
//login form
//save the usermane, send it to the local storage and open the game page
function handelSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var userName = ev.target.elements.name.value; //colect the user name
        if (!userName)
            throw new Error('user name is missing');
        console.log(userName);
        var newUser = new User(userName);
        users.push(newUser); //save the user name in users array
        console.log(users);
        localStorage.setItem('users', JSON.stringify(users)); //sent the array to local storage as string
        window.location.replace("./index.html"); // its work!!!
    }
    catch (error) {
        console.error(error);
    }
}
function handelSignUp(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var newUserName = ev.target.elements.newname.value; //colect the user name
        if (!newUserName)
            throw new Error('user name is missing');
        console.log(newUserName);
        var newUser = new User(newUserName);
        users.push(newUser); //save the user name in users array
        console.log(users);
        localStorage.setItem('users', JSON.stringify(users)); //sent the array to local storage as string
        window.location.replace("./index.html"); // its work!!!
    }
    catch (error) {
        console.error(error);
    }
}
function hendelAddWordsubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var enWord_1 = ev.target.newEnWord.value;
        var inter_1 = ev.target.interpretation.value;
        if (!enWord_1 || !inter_1)
            throw new Error("missing element");
        console.log(enWord_1, inter_1);
        var newWord = new Word(enWord_1, inter_1);
        //need to check that the newWord dont alredy in the array
        var exist = words.find(function (word) { return (enWord_1 === word.enWord) && (inter_1 === word.heWord); });
        console.log(exist);
        if (exist === undefined) { //if there no word lick this in the array push it in
            words.push(newWord);
            console.log(words);
            localStorage.setItem('words', JSON.stringify(words)); //sent the array to local storage as string
        }
        var form = document.querySelector('form');
        form.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function heandelDelWord(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var wrongEnWord_1 = ev.target.wrongEnWord.value;
        var wrongInter_1 = ev.target.wronginterpretation.value;
        console.log(wrongEnWord_1, wrongInter_1);
        //need to check if the word and interpetaion are in the array
        var exist = words.findIndex(function (word) { return (wrongEnWord_1 === word.enWord) && (wrongInter_1 === word.heWord); });
        console.log(exist);
        if (exist !== -1) { //if faund the mistack
            words.splice(exist, 1);
            console.log(words);
            localStorage.setItem('words', JSON.stringify(words)); //sent theuppdate array to local storage as string
        }
        var form = document.querySelector('form');
        form.reset();
    }
    catch (error) {
        console.error(error);
    }
}
//-----------------reander--------------------------------
//render the user name to the game page
//get the user name from local storage as string
var h1username = localStorage.getItem('users');
if (h1username) {
    //convert it back to array
    var usernameArray = JSON.parse(h1username);
    console.log(usernameArray);
    usernameArray.forEach(function (user) { return users.push(new User(user.userName)); });
    console.log(users);
    renderUserName();
}
function renderUserName() {
    var username = document.querySelector('#h1');
    if (!username)
        throw new Error('element not faound');
    var length = users.length;
    username.innerHTML = "<h1> Hellow " + users[length - 1].userName + "</h1>";
}
//the Add form
function renderAdd() {
    var htmlroot = document.querySelector('#root');
    if (!htmlroot)
        throw new Error("no root element");
    var toHtml = "<form id=\"form\" onsubmit=\"hendelAddWordsubmit(event)\">\n                        <input type=\"text\" name=\"newEnWord\" placeholder=\"Please Insert a New English Word\" required>\n                        <input type=\"text\" name=\"interpretation\" placeholder=\"Please provide the meaning of the word\" required>\n                        <button type=\"submit\">Submit</button>\n                    </form>\n                    <br>\n                    <form onsubmit=\"heandelDelWord(event)\">\n                    <input type=\"text\" name=\"wrongEnWord\" placeholder=\"Please Insert a English Word or\">\n                    <input type=\"text\" name=\"wronginterpretation\" placeholder=\"Please provide the meaning of the word\">\n                    <button type=\"submit\">Delet</button>\n                    <br>\n                    <button onclick=\"renderBack()\">Back</button>\n                    ";
    htmlroot.innerHTML = toHtml;
}
function renderBack() {
    window.location.replace("./index.html");
}
//move to game
function renderPlay() {
    window.location.replace("./game.html"); //move to game page
    var h1Instructions = document.querySelector('#instruction');
    var instractions = "Match the word with its meaning \n                        <div id=\"score\">your scor:" +  + "</div>"; //show the score of the user un this game
    h1Instructions.innerHTML = instractions;
    //call the random word function
    var ranArr = randomWord();
    var htmlroot = document.querySelector('#cards');
    if (!htmlroot)
        throw new Error("no root element");
    var toHtml = "\n                <div class=\"wrapper\">\n                    <div class=\"cards\">\n                        <div id=\"c1\" class=\"card c1\">" + ranArr[Math.floor(Math.random() * 3)].enWord + "</div>\n                        <div id=\"c2\" class=\"card c2\">" + ranArr[Math.floor(Math.random() * 3)].heWord + "</div>\n                        <div id=\"c3\" class=\"card c3\">" + ranArr[Math.floor(Math.random() * 3)].heWord + "</div>\n                        <div id=\"c4\" class=\"card c4\">" + ranArr[Math.floor(Math.random() * 3)].heWord + "</div>                        \n                    </div>\n                    <button id=\"finish\" class=\"btnF\" onclick=\"renderFinish()\">Finish</button>\n                </div>\n                 ";
    htmlroot.innerHTML = toHtml;
}
//finish the game
function renderFinish() {
}
//contrilers
//make the random select words
function randomWord() {
    var length = words.length;
    var randomWordArr = [];
    var i;
    var randomArr = [];
    var _loop_1 = function () {
        var random = Math.floor(Math.random() * length);
        console.log(random);
        if (!(randomArr.find(function (e) { return e === random; }))) {
            randomWordArr[i] = words[random];
        }
    };
    for (i = 0; i < 3; i++) {
        _loop_1();
    }
    console.log(randomWordArr);
    return randomWordArr;
}
