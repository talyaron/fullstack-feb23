// import ts files -> https://www.educative.io/answers/how-to-import-another-typescript-file
//import redBall from '../ts/dist/red_ball';
//import '../ts/dist/bricks';
//import '../ts/dist/errow';
//import '../ts/dist/bombs';
//import '../ts/dist/shelves';
//import '../ts/dist/coins';
//import '../ts/dist/color_balls';

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

        localStorage.setItem('users', 'newUser') //sent the array to local storage

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


}

renderUserName(){

}

