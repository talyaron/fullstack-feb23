
class Player{
    playerName: string;

    constructor(playerName: string){
        this.playerName = playerName;
    }
    hendleSubmit(ev:any){
        try {
            ev.preventDefault();
            const playerName = ev.target.player.value;
            console.log(playerName);
        } catch (error) {
            console.error(error);
        }
    }

    getName(){
        return this.playerName;
    }
    delete(){
        this.playerName = "";
    }
}

function handleInput(event:any){
    event.preventDefault();
    const playerName:Player = new Player (event.target.player.value);
    console.log(playerName);
    const root: HTMLElement | null = document.querySelector(".root");

    if (root){
        root.innerHTML = event.target.value;
    }
}




