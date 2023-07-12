// import ts files -> https://www.educative.io/answers/how-to-import-another-typescript-file
//import redBall from '/red_ball';
//import '../ts/dist/bricks';
//import '../ts/dist/errow';
//import '../ts/dist/bombs';
//import '../ts/dist/shelves';
//import '../ts/dist/coins';
//import '../ts/dist/color_balls';
//----------------------------------------
//login form
var User = /** @class */ (function () {
    //id: number;
    function User(userName) {
        this.userName = userName;
        //this.id = Math.floor(Math.random() * 10000);
    }
    return User;
}());
var users = [];
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
        window.location.replace("../index.html"); //not sure its work!!!
    }
    catch (error) {
        console.error(error);
    }
}
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
    username.innerHTML = users.map(function (p) { return "<h1> Hellow " + p.userName + "</h1>"; }).join(' ');
}
//the game start when the page load
function startGame() {
    myGameArea.start(); //defaine the game area
    redball = new component(); //difain the ball element
}
//the game area function
var myGameArea = {
    canvas: document.querySelector("#canvas"),
    start: function () {
        //this.canvas.width = 270;
        //this.canvas.hight = 480;
        this.context = this.canvas.getContext("2d");
        var h1Div = document.querySelector('#h1');
        if (!h1Div)
            throw new Error('no element chatch');
        h1Div.insertAdjacentElement("afterend", this.canvas);
    }
};
