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
function logIn() {
    try {

        const html = ` <div class="log"><label for="worker-name">enter your Name:</label> <br>
        <input type="text" name="name" value=""> <br>  <button>ok</button> </div>`;
        if (!root) throw new Error("no root element");

        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

logIn()