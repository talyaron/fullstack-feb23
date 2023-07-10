class Player {
    constructor(public playerImg: string, public rope: string, id?: string | null) {
        this.id = `id-${new Date().getTime() - Math.random()}`
    }
}
class Point {
    constructor(public name: string, public amount: number, id?: string | null) {
        this.id = `id-${new Date().getTime() - Math.random()}`
    }
}
const root = document.querySelector(`#root`) as HTMLElement;

const players: Player[] = []
const points: Point[] = []
