
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
        You have to make ice cream cones for the customers who come to your ice cream truck. <br>
        Use the arrows to select the desired flavor. <br>
        Press enter to add an ice cream scoop to the cone. <br>
        To go to customer selection press the space bar, <br> select the appropriate customer
        and press enter to deliver the ice cream. <br>
    Be careful! <br>
    Customers are not so patient.<br>
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
    localStorage.setItem("player", playerToString)    
    window.open("../Ice_Cream_Truck/pages/TheGame.html", "_self")
 } catch (error) {
    console.error(error)
 }
}

renderMain(document.querySelector("#main"))