//----------------------class & object------------------
var User = /** @class */ (function () {
    //id: number;
    function User(userName) {
        this.userName = userName;
        //this.id = Math.floor(Math.random() * 10000);
    }
    return User;
}());
var Point = /** @class */ (function () {
    function Point(points) {
        this.points = points;
    } //caunt the points
    Point.prototype.addPoints = function (point) {
        return point++;
    };
    return Point;
}());
var UserPoint = /** @class */ (function () {
    function UserPoint(user, points) {
        this.user = user;
        this.points = points;
    }
    return UserPoint;
}());
//--------------------
var Ball = /** @class */ (function () {
    function Ball(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    } //whant to know it potiosin evry step so could move it
    return Ball;
}());
var daynamicElement = /** @class */ (function () {
    function daynamicElement(explow, positionX, positionY) {
        this.explow = explow;
        this.positionX = positionX;
        this.positionY = positionY;
    } //the item(bomb/errow) & its position so if the ball at the same position can exeute somthing
    return daynamicElement;
}());
var staticElement = /** @class */ (function () {
    function staticElement(name, positionX, positionY) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
    } //the item(brick/coin/shelve) & its position so if the ball at the same position can exeute somthing
    return staticElement;
}());
var users = [];
var points = [];
var userPoints = [];
var staticElementPositions = [];
var daynamicElementPositions = [];
//---------------------handel----------------
//login form
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
//render new static elemnt
function renderSolidBrick() {
    try {
        var el = document.querySelector('#bricks_solid');
        if (!el)
            throw new Error("no elmnt");
        var newElm = brick();
        el.setAttribute('style', 'left:newElm.positionX');
        el.setAttribute('style', 'top:newElm.positionY');
    }
    catch (error) {
        console.error(error);
    }
}
renderSolidBrick();
//---------------controllers---------------------------------
//creat static elements
function coin() {
    var positionX = Math.floor(Math.random() * 1000);
    console.log(positionX);
    var positionY = Math.floor(Math.random() * 1000);
    console.log(positionY);
    var newElm = new staticElement("coin", positionX, positionY);
    console.log(newElm);
    staticElementPositions.push(newElm);
    console.log(staticElementPositions);
}
function brick() {
    var positionX = Math.floor(Math.random() * 1000);
    var positionY = Math.floor(Math.random() * 1000);
    var newElm = new staticElement("brick", positionX, positionY);
    staticElementPositions.push(newElm);
    return newElm;
}
function shelve() {
    var positionX = Math.floor(Math.random() * 1000);
    var positionY = Math.floor(Math.random() * 1000);
    var newElm = new staticElement("shelve", positionX, positionY);
    staticElementPositions.push(newElm);
}
//when a new element appear it save its position
// function savePosition(name:string, x: number, y: number){
//     try {
//         if(!name || !x || !y) throw new Error('no element')
//         const newpos = 
//     } catch (error) {
//         console.error(error)
//     }
// }
var text = function coin() { };
console.log(text);
