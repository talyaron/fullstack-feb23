//Creating a vegetables inventory management program - How many vegetables of each kind do I have?
//vegetables class
//quantity of every kind of vegetable

class Vegetable {
    id: string;
    constructor(public kind: string, public image: string, public quantity: number, id?: string | null) {
        if (id) {
            this.id = id;
        } else {
            this.id = `id-${new Date().getTime()}-${Math.random()}`;
        }
    }
}


const vegetables: Vegetable[] = getVegetablesFromStorage();

renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));

function getVegetablesFromStorage():Vegetable[] {
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

function renderAllVegetables(vegetables:Vegetable[], htmlElement:HTMLElement | null){
    try {
        if(!htmlElement) throw new Error ("no element");
        const html = vegetables.map(vegetable =>{
            return`<p>${vegetable.kind}</p>`;
        }).join(' ')

        htmlElement.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}
