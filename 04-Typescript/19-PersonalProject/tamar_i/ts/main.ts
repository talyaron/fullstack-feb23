// import ts files -> https://www.educative.io/answers/how-to-import-another-typescript-file
//import redBall from '../ts/dist/red_ball';
//import '../ts/dist/bricks';
//import '../ts/dist/errow';
//import '../ts/dist/bombs';
//import '../ts/dist/shelves';
//import '../ts/dist/coins';
//import '../ts/dist/color_balls';


//login form

class Users {
    id: number;
    constructor(public userName: string){
        this.id = Math.floor(Math.random()*10000);
    }


}

function handelSubmit(ev: string) {
    try {
       // ev.preventDefault();
        console.dir(ev);
    } catch (error) {
        console.error(error);
    }
}


