//input: phone number
//צג מחיר
//button: send order

//menu - class
class Dishe {
    constructor(public name: string, public price: number, public image: string, public description: string) {
    }
}
const dishes: Dishe[] = [];

// Create sushi dishes and add them to the menu
const sushi1 = new Dishe(
    'California Roll',
    12.99,
    './dist/image/sushi.webp',
    'Fresh crab, avocado, and cucumber rolled in rice and seaweed.'
);
dishes.push(sushi1);

const sushi2 = new Dishe(
    'Spicy Tuna Roll',
    10.99,
    './dist/image/sushi.webp',
    'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.'
);
dishes.push(sushi2);

const sushi3 = new Dishe(
    'Salmon Nigiri',
    6.99,
    './dist/image/sushi.webp',
    'Fresh salmon slices served on a bed of rice.'
);
dishes.push(sushi3);

const sushi4 = new Dishe(
    'California Roll',
    12.99,
    './dist/image/sushi.webp',
    'Fresh crab, avocado, and cucumber rolled in rice and seaweed.'
);
dishes.push(sushi4);

const sushi5 = new Dishe(
    'Spicy Tuna Roll',
    10.99,
    './dist/image/sushi.webp',
    'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.'
);
dishes.push(sushi5);

const sushi6 = new Dishe(
    'Salmon Nigiri',
    6.99,
    './dist/image/sushi.webp',
    'Fresh salmon slices served on a bed of rice.'
);
dishes.push(sushi6);

const sushi7 = new Dishe(
    'California Roll',
    12.99,
    './dist/image/sushi.webp',
    'Fresh crab, avocado, and cucumber rolled in rice and seaweed.'
);
dishes.push(sushi7);

const sushi8 = new Dishe(
    'Spicy Tuna Roll',
    10.99,
    './dist/image/sushi.webp',
    'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.'
);
dishes.push(sushi8);

const sushi9 = new Dishe(
    'Salmon Nigiri',
    6.99,
    './dist/image/sushi.webp',
    'Fresh salmon slices served on a bed of rice.'
);
dishes.push(sushi9);


console.log(dishes);

//order - class
class Order {
    id: string;
    totalPayment: number = 0;
    constructor(public tableOrder: Dishe[], public phoneNum: string) {
        this.id = Math.random().toString(36).substr(2, 9);
    }
    //חישוב מחיר ההזמנה
    calculatePayment() {
        try {
            if (this.tableOrder === null) throw new Error();
            this.tableOrder.forEach(dishe => {
                this.totalPayment += dishe.price;
            })

        } catch (error) {
            console.error(error)
        }
    }
}
const orders: Order[] = [];


//select teble - class
class Table {
    id: string;
    occupide: boolean = false;
    constructor(public order: Order) {
        this.id = Math.random().toString(36).substr(2, 9);
    }

    setOccupide() {
        this.occupide = !this.occupide;
    }
}
const tables: Table[] = [];

renderregisterControlers(document.querySelector("#register"));

function renderregisterControlers(rootElement: HTMLElement | null) {
    try {
        const html =
            `<form onsubmit="handleRegisterOrder(event)">
            <input type="string" name="phoneNum" placeholder="phone number" required>
          <select name="Table" id="Table" required>
             <option value="string">Table 1</option>
             <option value="string">Table 2</option>
             <option value="string">Table 3</option>
             <option value="string">Table 4</option>
             <option value="string">Table 5</option>
             <option value="string">Table 6</option>
          </select>
          <button type="submit">send order</button>
         </form>`;

        if (!rootElement) throw new Error("no root element");

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function renderMain(
    dishes: Dishe[],
    rootElement: HTMLElement | null) {
    try {
        const html =
            `<div class="main">
         <form onsubmit="hendelOrder(event)">
          <div class="dish">
           ${dishes.map(dishe => {
                return `<div class="dish">
                      <img src="${dishe.image}" alt="${dishe.name}">
                    <div class="dish-text">  
                      <h3>${dishe.name}</h3>
                      <p>${dishe.description}</p>
                      <p>${dishe.price}</p>
                    </div>
                   </div>`
            })};
          </div> 
             <button type="submit">send order</button>
         </form>
       </div>`;
        if (!rootElement) throw new Error("no root element");

        rootElement.innerHTML += html;
    } catch (error) {
        console.error(error);
    }
}

function handleRegisterOrder(event: any) {
    try {
        event.preventDefault();
        const phoneNum = event.target.elements.phoneNum.value;
        const table = event.target.elements.Table.value;

        const order = new Order(table, phoneNum);
        orders.push(order);

        renderMain(dishes, document.querySelector("#main"));

    } catch (error) {
        console.error(error);
    }
}

function hendelOrder(event: any) {
    try {
        event.preventDefault();
        const image = event.target.elements.image.value;
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.valueAsNumber;

        const dishe = new Dishe(name, price, image, description);
        dishes.push(dishe);

        renderMain(dishes, document.querySelector("#main"));

    } catch (error) {
        console.error(error);
    }
}
