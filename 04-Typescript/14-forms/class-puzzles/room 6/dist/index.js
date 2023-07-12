// function handleInput(event) {
//     console.dir(event)
//     console.log(event.target.value);
//     const root = document.querySelector('#root');
//     if(root) {
//         root.innerHTML = event.target.value;
//     }
// }
// const arrPlayers : {username: string; imageUrl: string; age: number; color: number}[]=[];
var Player = /** @class */ (function () {
    function Player(username, imageUrl, age, color) {
        this.username = username;
        this.imageUrl = imageUrl;
        this.age = age;
        this.color = color;
        this.id = "id-" + Math.random();
    }
    return Player;
}());
var arrPlayers = [];
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var username = ev.target.username.value;
        var imageUrl = ev.target.imageUrl.value;
        var yearOfBirth = ev.target.yearOfBirth.valueAsNumber;
        var age = new Date().getFullYear() - yearOfBirth;
        var color = ev.target.color.value;
        var player = new Player(username, imageUrl, age, color);
        console.log(player);
        arrPlayers.push(player);
        renderPlayers(arrPlayers, document.querySelector("#root"));
    }
    catch (error) {
        console.error(error);
    }
}
// const root = document.querySelectorAll('.root') as NodeListOf<HTMLDivElement> ;
// class Player {
//     constructor(public username: string, public imageUrl: string, public age: number, public color: string) {
//     }
// }
function renderPlayers(players, element) {
    try {
        if (!element)
            throw new Error("element is not defined");
        var html = players.map(function (player) { return renderPlayer(player); }).join(" "); //users.map go all over the array, and randerCard is go unside every cell to render it
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayer(player) {
    try {
        var html = "<div id=\"" + player.id + "\" class=\"roots\" style=\"background-color:" + player.color + "\">\n            <div class=\"userName\">Name: " + player.username + "</div>\n            <div class=\"age\">Age: " + player.age + "</div>\n            <img class=\"image\" src=\"" + player.imageUrl + "\"\n        </div> ";
        return html;
    }
    catch (error) {
        console.error(error);
    }
}
// function handleInput(event) {
//     console.dir(event)
//     console.log(event.target.value);
//     const root = document.querySelector('#root');
//     if(root) {
//         root.innerHTML = event.target.value;
//     }
// }
// class Player {
//     constructor(public username: string, public imageUrl: string, public age: number, public color: string) {
//     }
// renderPlyer(root: HTMLElement | null) {
//     try {
//         if (!root) throw new Error("missing root element")
//         const html: string = `<div class='card' onclick="handleHideCard('${this.username}')" <img src="${this.imageUrl}"> id="${this.age}"><h4>${this.color}</h4></div>`;
//         root.innerHTML += html;
//     } catch (error) {
//         console.error(error)
//     }
// }
// }
// const arrPlayers:Player[] =[];
// function handleSubmit(ev:any){
//     try {
//         ev.preventDefault();
//         console.dir(ev);
//         const username:string = ev.target.username.value;
//         const imageUrl:string = ev.target.imageUrl.value;
//         const yearOfBirth = ev.target.yearOfBirth.valueAsNumber;
//         const age:number = new Date().getFullYear() - yearOfBirth;
//         const color:string = ev.target.color.value;
//         const result = new Player(username, imageUrl, age, color);
//         console.log(result);
//         arrPlayers.push(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// const root = document.querySelectorAll('.root') as NodeListOf<HTMLDivElement> ;
