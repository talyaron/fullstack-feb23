class Player {
    id: string
    constructor(public playerImg: string, public rope: string, id?: string | null) {
        this.id = `id-${new Date().getTime() - Math.random()}`
    }
}
class Point {
    id: string
    constructor(public name: string, public amount: number, id?: string | null) {
        this.id = `id-${new Date().getTime() - Math.random()}`
    }
}
const root = document.querySelector(`#root`) as HTMLElement;

const players: Player[] = []
const points: Point[] = []
console.log(root);
logIn()
function logIn() {
    try {

        const html = ` <div class="log"> <form onsubmit="handleAdd(event)"><label for="worker-name">enter your Name:</label> <br>
        <input required type="text" name="name" value=""> <br> <br> <button type="submit">ok</button> </form> </div>`;
        if (!root) throw new Error("no root element");

        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}



function handleAdd(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;

        const newName = new Point(name, 0);
        points.push(newName);


        localStorage.setItem("points", JSON.stringify(points))
        ev.target.reset();
        const log = document.querySelector(`.log`) as HTMLElement;
        log.classList.add("none")

    } catch (error) {
        console.error(error)
    }
}
function addHomer(event) {
    try {
        // const player =
        console.log(event)

    } catch (error) {
        console.error(error)
    }
}

function addBart(event) {
    try {
        console.log(event)

    } catch (error) {
        console.error(error)
    }
}

function addLisa(event) {
    try {


    } catch (error) {
        console.error(error)
    }
}