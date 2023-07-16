
//----------------------class & object------------------

class User {
    //id: number;
    constructor(public userName: string) {
        //this.id = Math.floor(Math.random() * 10000);
    }
}

class Point {
    constructor(public points: number) { } //caunt the points
    addPoints(point: number) {
        return point++
    }
}

class UserPoint {
    constructor(public user: User, public points: Point) { }
}
//--------------------
class Ball {
    constructor(public positionX: number, public positionY: number) { } //whant to know it potiosin evry step so could move it
}

class daynamicElement {
    constructor(public explow: boolean, public positionX: number, public positionY: number) { } //the item(bomb/errow) & its position so if the ball at the same position can exeute somthing
}

class staticElement {
    constructor(public name: string, public positionX: number, public positionY: number) { } //the item(brick/coin/shelve) & its position so if the ball at the same position can exeute somthing
}

const users: User[] = [];
const points: Point[] = [];
const userPoints: UserPoint[] = [];
const staticElementPositions: staticElement[] = [];
const daynamicElementPositions: daynamicElement[] = [];

//---------------------handel----------------
//login form
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

//render new static elemnt
function renderSolidBrick() {
    try {
        const el = document.querySelector('#bricks_solid')
        if (!el) throw new Error("no elmnt");
        const newElm = brick();
        el.setAttribute('style', 'left:newElm.positionX')
        el.setAttribute('style', 'top:newElm.positionY')

    } catch (error) {
        console.error(error)
    }
}

renderSolidBrick();


//---------------controllers---------------------------------

//creat static elements
function coin() {
    const positionX: number = Math.floor(Math.random() * 1000)
    console.log(positionX)
    const positionY: number = Math.floor(Math.random() * 1000)
    console.log(positionY)
    const newElm = new staticElement("coin", positionX, positionY)
    console.log(newElm)
    staticElementPositions.push(newElm)
    console.log(staticElementPositions)
}


function brick() {
    const positionX: number = Math.floor(Math.random() * 1000)
    const positionY: number = Math.floor(Math.random() * 1000)
    const newElm = new staticElement("brick", positionX, positionY)
    staticElementPositions.push(newElm)
    return newElm;
}

function shelve() {
    const positionX: number = Math.floor(Math.random() * 1000)
    const positionY: number = Math.floor(Math.random() * 1000)
    const newElm = new staticElement("shelve", positionX, positionY)
    staticElementPositions.push(newElm)
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


const text = function coin();
console.log(text);