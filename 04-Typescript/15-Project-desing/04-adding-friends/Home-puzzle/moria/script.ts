
class Vegetable {
    id: string
    isEdit: boolean = false;
    constructor(public name: string, public image: string, public amount: number) {
        this.id = `id-${new Date().getTime() - Math.random()}`
    }
    deleteOne() {
        this.amount--
    }
    addOne() {
        this.amount++
    }
    setEdit(set: boolean) {
        this.isEdit = set;
    }
}

const vegetables: Vegetable[] = getVegetablesFromStorage();
const rootVegetables = document.querySelector(`#rootVegetables`) as HTMLElement;

renderAllVegetables(vegetables, rootVegetables);

function getVegetablesFromStorage(): Vegetable[] {

    try {

        const vegetablesString = localStorage.getItem("Vegetables");
        if (!vegetablesString) return [];

        const vegetablesArray = JSON.parse(vegetablesString);

        const vegetables: Vegetable[] = vegetablesArray.map((vegetable: Vegetable) => {
            return new Vegetable(vegetable.name, vegetable.image, vegetable.amount, vegetable.id);
        })

        return vegetables

    } catch (error) {
        console.error(error)
        return []
    }

};


function handleAdd(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const image = ev.target.elements.image.value;
        const amount = ev.target.elements.amount.valueAsNumber;

        const newVegetable = new Vegetable(name, image, amount);
        vegetables.push(newVegetable);
        renderAllVegetables(vegetables, rootVegetables)


        localStorage.setItem("vegetables", JSON.stringify(vegetables))
        ev.target.reset();

    } catch (error) {
        console.error(error)
    }
}

function renderAllVegetables(vegetables: Vegetable[], htmlElement: HTMLElement | null) {
    try {
        if (!htmlElement) throw new Error("No element");
        const html = vegetables.map(vegetable => renderVegetablesCard(vegetable)).join(' ')

        htmlElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}


function renderVegetablesCard(vegetable: Vegetable) {
    try {
        if (vegetable.isEdit) {
            return `<div class="card">
                    <img src="${vegetable.image}">
                    <form onsubmit="handleSetEditVegetable(event)" id="${vegetable.id}">
                        <input type="text" name="name" value="${vegetable.name}">
                        <br>
                        <button onclick="handleDeleteVegetable('${vegetable.id}')">Delete</button>
                        <input type="submit" value="SET">
                    </form>
                </div>
                `
        } else {
            return `<div class="card">
        <img src="${vegetable.image}">
        <p>${vegetable.name}</p>
        <p>${vegetable.amount}</p>
        <button onclick="handleAddOneVegetable('${vegetable.id}')">+</button>
        <button onclick="handleDeleteOneVegetable('${vegetable.id}')">-</button>
        <br>
        <button onclick="handleDeleteVegetable('${vegetable.id}')">Delete</button>
        <button onclick="handleEdit('${vegetable.id}')">Edit</button>
    </div>
`
        }


    } catch (error) {
        console.error(error);
        return ''
    }
}


function handleDeleteVegetable(vegetableId: string) {
    try {
        const index = vegetables.findIndex(vegetable => vegetable.id === vegetableId);
        if (index === -1) throw new Error("Could not find vegetables");

        vegetables.splice(index, 1);
        localStorage.setItem("vegetables", JSON.stringify(vegetables))

        renderAllVegetables(vegetables, rootVegetables)

    } catch (error) {
        console.error(error);
    }
}



function handleEdit(vegetableId: string) {
    try {
        const vegetable = vegetables.find(vegetable => vegetable.id === vegetableId)
        if (!vegetable) throw new Error("couldnt find friend")

        vegetable.setEdit(true);
        renderAllVegetables(vegetables, rootVegetables)
    } catch (error) {
        console.error(error);
    }
}

function handleSetEditVegetable(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const vegetableId: string = ev.target.id;

        const vegetable: Vegetable | undefined = vegetables.find(vegetable => vegetable.id === vegetableId)
        if (!vegetable) throw new Error("couldnt find vegetables")
        vegetable.name = name;
        vegetable.setEdit(false)
        console.log(vegetables)
        localStorage.setItem("vegetables", JSON.stringify(vegetables))
        renderAllVegetables(vegetables, rootVegetables);


    } catch (error) {
        console.error(error);
    }
}

function handleAddOneVegetable(vegetableId: string) {
    try {
        const vegetable = vegetables.find(vegetable => vegetable.id === vegetableId)
        if (!vegetable) throw new Error("can't find vegetable")

        vegetable.addOne()
        localStorage.setItem("vegetables", JSON.stringify(vegetables))

        renderAllVegetables(vegetables, rootVegetables)
    } catch (error) {
        console.error(error);
    }
}

function handleDeleteOneVegetable(vegetableId: string) {
    try {
        const vegetable = vegetables.find(vegetable => vegetable.id === vegetableId)
        if (!vegetable) throw new Error("can't find vegetable")
        if (vegetable.amount !== 0) {
            vegetable.deleteOne()
        }
        localStorage.setItem("vegetables", JSON.stringify(vegetables))
        renderAllVegetables(vegetables, rootVegetables)
    } catch (error) {
        console.error(error);
    }
}

