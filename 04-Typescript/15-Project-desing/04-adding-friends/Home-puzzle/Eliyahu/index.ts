class Vegetable {
    id: string
    constructor(public name: string, public image: string, public amount: number) {
        this.id = `id-${new Date().getTime() - Math.random()}`
    }
}

const vegetables: Vegetable[] = []

function renderAddVegetable(rootElement: HTMLElement | null) {
    try {
        const html = `<form onsubmit="handleAddVegetable(event)">
        <input type="text" name="name" placeholder="Name">
        <input type="url" name="image" placeholder="Image url">
        <input type="number" name="amount" placeholder="Insert amount">
        <input type="submit" value="ADD">
            </form>`
        if (!rootElement) throw new Error("can't find rootElement")
        rootElement.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}

function renderVegetableCard(vegetable: Vegetable) {
    try {
        return `<div class="card">
        <img src="${vegetable.image}">
        <h3>${vegetable.name}</h3>
        <p>${vegetable.amount} unit </p>
        <button onclick="handleRemoveVegetableUnit('${vegetable.id}')">I ATE ONE</button>
        <button onclick="handleAddVegetableUnit('${vegetable.id}')">I BUY ONE</button>
        <button onclick="handleEditVegetable('${vegetable.id}')">Edit</button>
        <button onclick="handleDeleteVegetable('${vegetable.id}')">Remove</button>
    </div>
`
    } catch (error) {
        console.error(error)
    }
}

function renderAllVegetables(vegetables: Vegetable[], rootElement: HTMLElement | null) {
    try {
        if (!rootElement) throw new Error("can't find rootElement")
        const html =`<div class="cd">
        ${ vegetables.map(vegetable => renderVegetableCard(vegetable)).join(' ')} </div>`
        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)

    }
}

function handleAddVegetable(ev: any) {
    try {
        ev.preventDefault()
        const name = ev.target.name.value;
        const image = ev.target.image.value;
        const amount = ev.target.amount.valueAsNumber
        const newVegetable = new Vegetable(name, image, amount)
        vegetables.push(newVegetable)
        console.log(vegetables);
        ev.target.reset()
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"))
    } catch (error) {
        console.error(error)

    }
}

renderAddVegetable(document.querySelector("#main"))
renderAllVegetables(vegetables, document.querySelector("#rootVegetable"))