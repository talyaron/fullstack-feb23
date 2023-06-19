// function handleInput(event) {
//     console.dir(event)
//     console.log(event.target.value);
//     const root = document.querySelector('#root');
//     if(root) {
//         root.innerHTML = event.target.value;
//     }
// }

// const arrPlayers : {username: string; imageUrl: string; age: number; color: number}[]=[];
class Player {
    id: string;
    constructor(public username: string, public imageUrl: string, public age: number, public color: any) {
        this.id = `id-${Math.random()}`;
    }
}
const arrPlayers :any[] =[];

function handleSubmit(ev:any){
    try {
        ev.preventDefault();
        console.dir(ev);
        const username:string = ev.target.username.value;
        const imageUrl:string = ev.target.imageUrl.value;
        const yearOfBirth = ev.target.yearOfBirth.valueAsNumber;
        const age:number = new Date().getFullYear() - yearOfBirth;
        const color:number = ev.target.color.value;
       
        const player = new Player(username, imageUrl, age, color);
        console.log(player);
        
        arrPlayers.push(player);
        renderPlayers(arrPlayers, document.querySelector("#roots"));
    } catch (error) {
        console.error(error);
    }
}


// const root = document.querySelectorAll('.root') as NodeListOf<HTMLDivElement> ;

// class Player {
//     constructor(public username: string, public imageUrl: string, public age: number, public color: string) {
//     }
// }
function renderPlayers(players: Player [], element: HTMLElement | null) {
    try {
        if (!element) throw new Error("element is not defined");
        const html = players.map((player) => renderPlayer(player)).join(" "); //users.map go all over the array, and randerCard is go unside every cell to render it

        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}



 function renderPlayer(player: Player) {
    try {
        const html =
        `<div id="${player.id}" class="roots" style="background-color:${player.color}">
            <div class="userName">Name: ${player.username}</div>
            <div class="age">Age: ${player.age}</div>
            <img class="image" src="${player.imageUrl}"
        </div> `;
        return html
    } catch (error) {
        console.error(error)
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
