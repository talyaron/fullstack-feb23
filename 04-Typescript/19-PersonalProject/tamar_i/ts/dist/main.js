// import ts files -> https://www.educative.io/answers/how-to-import-another-typescript-file
//import redBall from '../ts/dist/red_ball';
//import '../ts/dist/bricks';
//import '../ts/dist/errow';
//import '../ts/dist/bombs';
//import '../ts/dist/shelves';
//import '../ts/dist/coins';
//import '../ts/dist/color_balls';
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
        localStorage.getItem('users'); //sent the array to local storage
        window.location.replace("../index.html"); //not sure its work!!!
    }
    catch (error) {
        console.error(error);
    }
}
