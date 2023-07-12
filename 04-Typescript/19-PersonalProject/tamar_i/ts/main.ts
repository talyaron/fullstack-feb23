// import ts files -> https://www.educative.io/answers/how-to-import-another-typescript-file
//import {redBall} from "./dist/red_ball";


//login form

class User {
    //id: number;
    constructor(public userName: string) {
        //this.id = Math.floor(Math.random() * 10000);
    }
}

const users: User[] = [];

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

        localStorage.setItem('users',JSON.stringify(users)) //sent the array to local storage as string

        window.location.replace("../index.html")  //not sure its work!!!

    } catch (error) {
        console.error(error);
    }
}

//render the user name to the game page

//get the user name from local storage as string
const h1username = localStorage.getItem('users')

if (h1username){
    //convert it back to array
    const usernameArray = JSON.parse(h1username)
    console.log(usernameArray)
    usernameArray.forEach(user => users.push(new User(user.userName)))
    console.log(users)
    renderUserName()
}

function renderUserName(){
    const username = document.querySelector('#h1')
    if (!username) throw new Error('element not faound')
    const length:number = users.length
    console.log(length)

    username.innerHTML = `<h1> Hellow ${users[length-1].userName}</h1>`;
}


//the game start when the page load
function startGame(){
    myGameArea.start()  //defaine the game area
   // redBall(75, 75)  //difain the ball element and its position
   redBallPiece = new component(30, 30, "red", 10, 120)
}

//the game area object contain the method start that bild the game area
let myGameArea = {
    canvas : document.querySelector("#canvas"),
    start: function (){
        //this.canvas.width = 270;
        //this.canvas.hight = 480;
        this.context = this.canvas.getContext("2d");
        const h1Div = document.querySelector('#h1')
        if(!h1Div) throw new Error('no element chatch')
        h1Div.insertAdjacentElement("afterend", this.canvas);
    }
}


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