
//----------------------class & object------------------
//login form

class User {
    //id: number;
    constructor(public userName: string) {
        //this.id = Math.floor(Math.random() * 10000);
    }
}

class Point{
    constructor(public point:number){}
}

class UserPoint{
    constructor(public user:User, public points:Point){}
}

class Ball {
    constructor(){}
}

class brick{
    constructor(){}
}

class Errow{
    constructor(){}
}

class Nomb{
    constructor(){}
}

class Shelve{
    constructor(){}
}

class Coin{
    constructor(){}
}

const users: User[] = [];
const points: Point[] = [];
const userPoints: UserPoint[] = [];

//---------------------handel----------------
//save the usermane, send it to the local storage and open the game page
function handelSubmit(ev: any) {
    try {
        ev.preventDefault()
        console.dir(ev)

        const userName = ev.target.elements.username.value;  //colect the user name
        if (!userName) throw new Error('user name is missing')
        console.log(userName)

        const newUser = new User(userName)
        users.push(newUser)  //save the user name in users array
        console.log(users)

        localStorage.setItem('users', JSON.stringify(users)) //sent the array to local storage as string

        window.location.replace("../index.html")  // its work!!!

    } catch (error) {
        console.error(error);
    }
}


//-----------------reander--------------------------------
//render the user name to the game page

//get the user name from local storage as string
const h1username = localStorage.getItem('users')

if (h1username) {
    //convert it back to array
    const usernameArray = JSON.parse(h1username)
    console.log(usernameArray)
    usernameArray.forEach(user => users.push(new User(user.userName)))
    console.log(users)
    renderUserName()
}

function renderUserName() {
    const username = document.querySelector('#h1')
    if (!username) throw new Error('element not faound')
    const length: number = users.length
    username.innerHTML = `<h1> Hellow ${users[length - 1].userName}</h1>`
}

//---------------controllers---------------------------------


//the red ball function to put the ball on the screen
let redBallPiece;

//The components have properties and methods to control their appearances and movements
function component(width:number, height:number, color:string, x:number, y:number){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.item = this.item.getContext("2d");
    this.item.fillStyle = color;
    this.item.fillRrct(this.x, this.y, this.width, this.height);
}

function redBall(xPosition:number, yPositin: number) {
    const canvas = document.querySelector('#canvas')
    if (!canvas) throw new Error("not element catch");
    
    if (canvas.getContext !== null) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath()
        ctx.arc(xPosition, yPositin, 50, 0, Math.PI * 2, true) //outer citcle
        ctx.stroke()
    }
}