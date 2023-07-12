// Create an app which store vegtebels in a fridge.

// create model for vegtabel, 

// add vegtabel and amount, and an image

// add a button to remove one item from a vegtabel (eg: you had 5 tomatos, and when you press the button "I ATE ONE", you will be left with 4 tomatos )

// add a button to add vegtabel

// all the data must be saved to localstorage

// add edit mode, to change quantity vegetables, and name of vegtable

// add remove button, which will remove tomatos or other tomato

// Use the MVC model
//model 
class Vegetable {
    itemId: string;
    constructor(public name: string, public img: string, public amount: number) {
        this.itemId = `id-${new Date().getTime()}-${Math.random()}`;
    }
}
const vegetables: Vegetable[] = [] // [Vegtable{itemId:"...", name:"apple", img:"", amount:5}]

//controlerToForm

function handleAddVegetables(ev) {
    try {
        ev.preventDefault()

        const name = ev.target.elements.name.value
        const image = ev.target.elements.image.value
        const amount = ev.target.elements.amount.value
        const vegtabel = new Vegetable(name, image, amount)

        vegetables.push(vegtabel)

        renderVegetables(vegetables)
    } catch (error) {
        console.log(error);

    }
}

//view
function renderVegetables(vegetables: Vegetable[]) {
    try {
        let html = ''
        if (vegetables.length == 0) {
            html = 'No vegetables here. To add new vegetable feel the form'
        } else {
            html = vegetables.map((veg) => renderCard(veg) ).join(" ")
        }

        const root = document.querySelector("#root")

        if (root) root.innerHTML = html
    } catch (error) {
        console.log(error);
    }
}


function renderCard(vegetable) {
    try {
        return `
            <div>
                <p>${vegetable.name}</p>
            </div>
        `
    } catch (error) {
        console.log(error);
    }
}


/*
    REGULAR
    function nameOFFunction(x,y) {

    }
    
    ANONIMIT 
    () => {

    }

    ARROW

    const fun2 = () =>{

    }
*/

