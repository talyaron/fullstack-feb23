//----------------------class & object------------------
//login form
var User = /** @class */ (function () {
    //id: number;
    function User(userName) {
        this.userName = userName;
        //this.id = Math.floor(Math.random() * 10000);
    }
    return User;
}());
var Ball = /** @class */ (function () {
    function Ball() {
    }
    return Ball;
}());
var brick = /** @class */ (function () {
    function brick() {
    }
    return brick;
}());
var Errow = /** @class */ (function () {
    function Errow() {
    }
    return Errow;
}());
var Nomb = /** @class */ (function () {
    function Nomb() {
    }
    return Nomb;
}());
var Shelve = /** @class */ (function () {
    function Shelve() {
    }
    return Shelve;
}());
var Coin = /** @class */ (function () {
    function Coin() {
    }
    return Coin;
}());
var users = [];
//---------------------handel----------------
//save the usermane, send it to the local storage and open the game page
function handelSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var userName = ev.target.elements.username.value; //colect the user name
        if (!userName)
            throw new Error('user name is missing');
        console.log(userName);
        var newUser = new User(userName);
        users.push(newUser); //save the user name in users array
        console.log(users);
        localStorage.setItem('users', JSON.stringify(users)); //sent the array to local storage as string
        window.location.replace("../index.html"); // its work!!!
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
//---------------controllers---------------------------------
