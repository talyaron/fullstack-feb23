class Vegetable {
    id: string
    isEdit: boolean = false
    constructor(public name: string, public image: string, public amount: number, id?: string | null) {
        if (id) {
            this.id = id;
        } else {
            this.id = `id-${new Date().getTime() - Math.random()}`
        }
    }
    ateOne() {
        this.amount--
    }
    buyOne() {
        this.amount++
    }
}

const vegetables: Vegetable[] = getVegetablesFromStorage()

function getVegetablesFromStorage() {
    try {

        const vegetablesString = localStorage.getItem("vegetables")
        if (!vegetablesString) return [];
        const vegetablesArray = JSON.parse(vegetablesString);
        const vegetables: Vegetable[] = vegetablesArray.map(vegetable => {
            return new Vegetable(vegetable.name, vegetable.image, vegetable.amount)
        })
        return vegetables
    } catch (error) {
        console.error(error)
        return []
    }
}

function renderAddVegetable(rootElement: HTMLElement | null) {
    try {
        const html = `<form onsubmit="handleAddVegetable(event)">
        <input type="text" name="name" placeholder="Name" required>
        <input type="url" name="image" placeholder="Image url">
        <input type="number" name="amount" placeholder="Insert amount" required>
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
        if (vegetable.isEdit === false) {
            if (vegetable.image === '') {
                vegetable.image = "https://t3.ftcdn.net/jpg/03/11/87/52/360_F_311875255_d57wDCwlZxdtOEwsnmXLHkV1r29i1R2U.jpg"
            }
            let amount = ``
            if (vegetable.amount != 0) {
                amount = `<p> ${vegetable.amount} unit  </p>`
            } else {
                amount = `<p class="att"> You are left without a ${vegetable.name} &#128561; </br>
Hurry up and buy some </p>`
            }
            return `<div class="card">
        <img src="${vegetable.image}">
        <h3>${vegetable.name}</h3>
        ${amount}
        <button onclick="handleRemoveVegetableUnit('${vegetable.id}')">I ATE ONE</button>
        <button onclick="handleAddVegetableUnit('${vegetable.id}')">I BUY ONE</button>
        <button onclick="handleEditVegetable('${vegetable.id}')">Edit</button>
        <button onclick="handleDeleteVegetable('${vegetable.id}')">Remove</button>
    </div>`
        } else {
            return `<div class="card">
<img src="${vegetable.image}">
<form onsubmit="handleSetEditVegetable(event)" id="${vegetable.id}">
<input type="text" name="name" placeholder="${vegetable.name}" required>
<input type="number" name="amount" placeholder="${vegetable.amount} unit" required>
<input type="submit" value="SET">
</form>
</div>`
        }
    } catch (error) {
        console.error(error)
    }
}

function renderAllVegetables(vegetables: Vegetable[], rootElement: HTMLElement | null) {
    try {
        if (!rootElement) throw new Error("can't find rootElement")
        const html = `<div class="cards">
        ${vegetables.map(vegetable => renderVegetableCard(vegetable)).join(' ')} </div>`
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
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"))
        localStorage.setItem("vegetables", JSON.stringify(vegetables))
        ev.target.reset()
    } catch (error) {
        console.error(error)

    }
}
function handleRemoveVegetableUnit(vegetableId: string) {
    try {
        const vegetable = vegetables.find(vegetable => vegetable.id === vegetableId)
        if (!vegetable) throw new Error("can't find vegetable")
        if (vegetable.amount !== 0) {
            vegetable.ateOne()
        }
        localStorage.setItem("vegetables", JSON.stringify(vegetables))
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"))

    } catch (error) {
        console.error(error)

    }
}
function handleAddVegetableUnit(vegetableId: string) {
    try {
        const vegetable = vegetables.find(vegetable => vegetable.id === vegetableId)
        if (!vegetable) throw new Error("can't find vegetable")

        vegetable.buyOne()
        localStorage.setItem("vegetables", JSON.stringify(vegetables))
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"))

    } catch (error) {
        console.error(error)

    }
}

function handleDeleteVegetable(vegetableId: string) {
    try {
        const index = vegetables.findIndex(vegetable => vegetable.id === vegetableId)
        if (index === -1) throw new Error("can't find vegetable")
        vegetables.splice(index, 1)
        localStorage.setItem("vegetables", JSON.stringify(vegetables))
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"))

    } catch (error) {
        console.error(error)

    }
}

function handleEditVegetable(vegetableId: string) {
    try {
        const vegetable = vegetables.find(vegetable => vegetable.id === vegetableId)
        if (!vegetable) throw new Error("can't find vegetable")
        vegetable.isEdit = true
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"))

    } catch (error) {
        console.error(error)

    }
}
function handleSetEditVegetable(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const amount = ev.target.amount.valueAsNumber;
        const vegetableId: string = ev.target.id;
        const vegetable = vegetables.find(vegetable => vegetable.id === vegetableId)
        if (!vegetable) throw new Error("can't find vegetable")
        vegetable.name = name;
        vegetable.amount = amount;
        vegetable.isEdit = false;
        console.log(vegetable);
        
        localStorage.setItem("vegetables", JSON.stringify(vegetables))
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"))

    } catch (error) {
        console.error(error)
    }
}
renderAddVegetable(document.querySelector("#main"))
renderAllVegetables(vegetables, document.querySelector("#rootVegetable"))