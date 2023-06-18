function handleInput(event) {
    console.dir(event)
    console.log(event.target.value);
    const root = document.querySelector('#root');
    if(root) {
        root.innerHTML = event.target.value;
    }
}

// const arrPlayers : {username: string; imageUrl: string; age: number; color: number}[]=[];

function handleSubmit(ev:any){
    try {
        ev.preventDefault();
        console.dir(ev);
        const username:string = ev.target.username.value;
        const imageUrl:string = ev.target.imageUrl.value;
        const yearOfBirth = ev.target.yearOfBirth.valueAsNumber;
        const age:number = new Date().getFullYear() - yearOfBirth;
        const color:number = ev.target.color.value;
        class Player {
            constructor(public username: string, public imageUrl: string, public age: number, public color: any) {
            }
        }
        const player = new Player(username, imageUrl, age, color);
        console.log(player);
        const arrPlayers :any[] =[];
        arrPlayers.push(player);
    } catch (error) {
        console.error(error);
    }
}


const root = document.querySelectorAll('.root') as NodeListOf<HTMLDivElement> ;

// class Player {
//     constructor(public username: string, public imageUrl: string, public age: number, public color: string) {
//     }
// }

 function renderPlayer(root: HTMLElement | null) {
    try {
        if (!root) throw new Error("missing root element")
        const html: string = `<div class='root' <h1>"${this.username}"></h1><img src="${this.imageUrl}"><h4>${this.age}</h4></div>`;
        return root.innerHTML += html;
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
