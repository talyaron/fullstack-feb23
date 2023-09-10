
class Player {
    id: string
    constructor(public name: string, public points: number) {
    }
}


function renderMain(rootElement: HTMLElement | null) {
    try {
        if (!rootElement) throw new Error("can not find root elemnt")
        const html = `
       
        <button onclick="handleRenderInstructions()">HOW TO PLAY</button>
        <form onsubmit="handleStartGame(event)">
        <input type="text" name="name" placeholder="Enter your name" required>
        <input type="submit" value="START">
    </form>
        `
        rootElement.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}

function handleRenderInstructions() {
    try {
        const root = document.querySelector("#main")
        if (!root) throw new Error("can not find root elemnt")
        const html = `
        <h3>
        You have to make ice cream cones for the customers who come to your ice cream van. <br>
        Use the arrows right or left to select the desired flavor. <br>
        Press arrow up to add an ice cream scoop to the cone. <br>
        Press arrow down to remove all ice cream balls from the cone.<br>
        To give ice cream to the customer, press enter <br>
    Be careful! <br>
    Customers aren't very patient!<br>
        Work quickly and accurately! </h3>
    <button onclick="handleRenderMain()">BACK</button>
        `
        root.innerHTML = html
    } catch (error) {
        console.error(error)
    }

}

function handleRenderMain(){
renderMain(document.querySelector("#main"))

}

function handleStartGame(ev:any){
 try {
    ev.preventDefault()
    const name = ev.target.name.value
    const player = new Player (name,0)
    const playerToString = JSON.stringify(player)
    localStorage.setItem("player", playerToString);
    window.open("../Ice_Cream_Truck/pages/TheGame.html", "_self")
 } catch (error) {
    console.error(error)
 }
}

renderMain(document.querySelector("#main"))