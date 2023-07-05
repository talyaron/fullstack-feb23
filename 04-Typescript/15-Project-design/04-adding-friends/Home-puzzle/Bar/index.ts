// Create an app which store vegtebels in a fridge.

// create model for vegtabel, 

// add vegtabel and amount, and an image

// all the data must be saved to localstorage

// add edit mode, to change quantity vegetables, and name of vegtable

// add remove button, which will remove tomatos or other tomato

// Use the MVC model, and create a view which will show all the vegetables in the fridge

class Vegetable {
    id: string;
    constructor(public name: string, public amount: number, public image: string) {
        this.id = `${new Date().getTime()}-${Math.random()}`;
    }
};
const tomato = new Vegetable('tomato', 5, 'https://st1.foodsd.co.il/Images/Products/large/hagiSJ2GI3.jpg');
const cucumber = new Vegetable('cucumber', 2, 'https://cdn.speedsize.com/8a627104-1ce3-4d49-b4db-3ebf243dbc0a/https://freshuk.co.il/wp-content/uploads/2021/04/unnamed-file.h.jpg');
const onion = new Vegetable('onion', 3, 'https://www.ayelethasade.co.il/wp-content/uploads/2021/07/2601-scaled-1.jpg');
const lettuce = new Vegetable('lettuce', 7, 'https://cdn.cashcow.co.il/images/f4869ffc-f59e-4a5f-8f3e-18484a39802e_500.jpg');


const storedVegetables = localStorage.getItem('vegetables');
const vegetables: Vegetable[] = storedVegetables ? JSON.parse(storedVegetables) : [tomato, cucumber, onion, lettuce];

console.log(vegetables[1].name);



// create a view which will show all the vegetables in the fridge
const refrigerator = document.querySelector('#refrigerator');

function showVegetables(vegetable: Vegetable[], rootElement: HTMLElement | Element | null) {
    try {
        if (!rootElement) throw new Error('Root element is not found');
        const html =
            vegetable.map((vegetable) => {
                return `<div class="vegetable">
                    <img src="${vegetable.image}">
                   <div class="vegetable-ditels">
                      <h3>${vegetable.name}</h3>
                      <p>${vegetable.amount}</p>
                      <button onclick="handleRemoveVegetable('${vegetable.id}')" class="remove">Remove</button>
                      <button onclick="handleAddVegetable('${vegetable.id}')" class="add">Add</button>
                   </div>
                </div>`;
            }).join('');

        rootElement.innerHTML = html;

    } catch (error) {
        console.error(error);
        return error;
    }
}
showVegetables(vegetables, refrigerator);

// add a button to remove one item from a vegtabel
// (eg: you had 5 tomatos, and when you prfess the button "I ATE ONE", you will be left with 4 tomatos)
// and add a button to add one vegtabel
function handleRemoveVegetable(vegetableID: string) {
    try {
        const vegtable = vegetables.find((vegetable) => vegetable.id === vegetableID);
        if (!vegtable) throw new Error('Could not find vegetable');

        const amount = vegtable.amount;
        // if (amount === 0) throw new Error('There is no more vegetables');

        if (amount === 0) {
            vegetables.splice(vegetables.indexOf(vegtable), 1);
        }

        vegtable.amount = amount - 1;

        localStorage.setItem('vegetables', JSON.stringify(vegetables));
        showVegetables(vegetables, refrigerator);

    } catch (error) {
        console.error(error);
    }
}


function handleAddVegetable(vegetableID: string) {
    try {
        const vegtable = vegetables.find((vegetable) => vegetable.id === vegetableID);
        if (!vegtable) throw new Error('Could not find vegetable');

        const amount = vegtable.amount;

        vegtable.amount = amount + 1;

        localStorage.setItem('vegetables', JSON.stringify(vegetables));
        showVegetables(vegetables, refrigerator);

    } catch (error) {
        console.error(error);
    }
}

function handleNewVegetable(event: Event) {
    try {
        event.preventDefault();

        const nameInput = document.querySelector<HTMLInputElement>('input[name="name"]');
        const imageInput = document.querySelector<HTMLInputElement>('input[name="image"]');
        const amountInput = document.querySelector<HTMLInputElement>('input[name="amount"]');

        if (!nameInput || !imageInput || !amountInput) throw new Error('Form inputs are not found');

        const name = nameInput.value;
        const image = imageInput.value;
        const amount = parseInt(amountInput.value, 10);

        if (!name || !image || isNaN(amount)) throw new Error('Invalid form input values');

        const vegetabls = new Vegetable(name, amount, image);
        vegetables.push(vegetabls);

        localStorage.setItem('vegetables', JSON.stringify(vegetables));
        showVegetables(vegetables, refrigerator);

        nameInput.value = '';
        imageInput.value = '';
        amountInput.value = '';

    } catch (error) {
        console.error(error);
    }
}
