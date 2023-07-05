//Creating a vegetables inventory management program - How many vegetables of each kind do I have?
//vegetables class
//quantity of every kind of vegetable

class Vegetable {
    id: string;
    isEdit: boolean = false;
    constructor(public kind: string, public image: string, public quantity: number, id?: string | null) {
        if (id) {
            this.id = id;
        } else {
            this.id = `id-${new Date().getTime()}-${Math.random()}`;
        }
    }

    setEdit(set: boolean) {
        this.isEdit = set;
    }
}


const vegetables: Vegetable[] = getVegetablesFromStorage();

if (vegetables.length > 0) {
    renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
}


function getVegetablesFromStorage(): Vegetable[] {
    try {
        const vegetableString = localStorage.getItem("vegetables");
        if (!vegetableString) return [];

        const vegetablesArray = JSON.parse(vegetableString);

        const vegetables: Vegetable[] = vegetablesArray.map((vegetable: Vegetable) => {
            return new Vegetable(vegetable.kind, vegetable.image, vegetable.quantity, vegetable.id);
        })

        return vegetables

    } catch (error) {
        console.error(error)
        return []
    }
};


function handleQuantity(ev: any) {
    try {
        ev.preventDefault();
        const kind = ev.target.elements.kind.value;
        const image = ev.target.elements.image.value;
        const quantity = ev.target.elements.quantity.value;

        const newVegetable = new Vegetable(kind, image, quantity);
        vegetables.push(newVegetable);
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"))

        localStorage.setItem("vegetables", JSON.stringify(vegetables))
        ev.target.reset();


    } catch (error) {
        console.error(error)
    }
}

function renderAllVegetables(vegetables: Vegetable[], htmlElement: HTMLElement | null) {
    try {
        if (!htmlElement) throw new Error("no element");
        const html = vegetables.map(vegetable => renderVegCard(vegetable)).join(' ')

        htmlElement.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}

function renderVegCard(vegetable: Vegetable) {

    try {
        debugger
        if (vegetable.isEdit) {
            return  `<form  class="card" onsubmit="handleSet(event)" id="${vegetable.id}">
        <img src="${vegetable.image}">
        <input type="text" name="kind" value="${vegetable.kind}">
        <input type="text" name="quantity" value="${vegetable.quantity}">
        
        <button onclick="handleDeleteVeg('${vegetable.id}')">Delete</button>
        <input type="submit" value="SET">
    </form>`


        } else {
            return `<form  class="card" id="${vegetable.id}">
            <img src="${vegetable.image}">
            <p>${vegetable.kind}</p>
            <p>${vegetable.quantity}</p>
        
        <button onclick="handleDeleteVeg('${vegetable.id}')">Delete</button>
        <button onclick="handleEdit('${vegetable.id}')">Edit</button>
       
    </form>`
        }


    } catch (error) {
        console.error(error)
        return ''
    }

}
function handleSet(ev:any){
    try {
        debugger
    ev.preventDefault();
    const quantity = ev.target.quantity.value;
    const kind = ev.target.kind.value;
    const vegId: string = ev.target.id;

    const vegi: Vegetable | undefined = vegetables.find(
      (vegi) => vegi.id === vegId
    );
    if (!vegi) throw new Error("couldnt find friend");
    vegi.kind = kind;
    vegi.quantity = quantity;
    vegi.setEdit(false);
    console.log(vegi);
    localStorage.setItem("vegetables", JSON.stringify(vegetables));
    renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
       


    } catch (error) {
        console.error(error);
        
    }
}

function handleDeleteVeg(vegId: string) {
    try {
        const index = vegetables.findIndex(vegetable => vegetable.id === vegId);
        if (index === -1) throw new Error("Could not find vegetable");

        vegetables.splice(index, 1);
        localStorage.setItem("vegetables", JSON.stringify(vegetables))

        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"))

    } catch (error) {
        console.error(error)

    }
}

function handleEdit(vegetableId:string){
    try {
        debugger
        const vegetable = vegetables.find(vegetable => vegetable.id === vegetableId)
        if(!vegetable) throw new Error ("Could not find vegetable")
       

        vegetable.setEdit(true);
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"))
    } catch (error) {
        console.error(error)
        
    }
}