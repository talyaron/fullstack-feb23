// import ts files -> https://www.educative.io/answers/how-to-import-another-typescript-file
//import redBall from '../ts/dist/red_ball';
//import '../ts/dist/bricks';
//import '../ts/dist/errow';
//import '../ts/dist/bombs';
//import '../ts/dist/shelves';
//import '../ts/dist/coins';
//import '../ts/dist/color_balls';
//login form
var Users = /** @class */ (function () {
    function Users(userName) {
        this.userName = userName;
        this.id = Math.floor(Math.random() * 10000);
    }
    return Users;
}());
function handelSubmit(ev) {
    try {
        // ev.preventDefault();
        console.dir(ev);
    }
    catch (error) {
        console.error(error);
    }
}
