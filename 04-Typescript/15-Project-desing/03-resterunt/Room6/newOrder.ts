//input: phone number
//צג מחיר
//button: send order

//menu - class
class Dishe {
  id: string;
  constructor(public name: string, public price: number, public image: string, public description: string) {
  }
  this.id = Math.random().toString(36).substr(2, 9);
}

const dishes: Dishe[] = [];

// Create sushi dishes and add them to the menu
const sushi1 = new Dishe('California Roll', 32.99, './dist/image/sushi3.webp', 'Fresh crab, avocado, and cucumber rolled in rice and seaweed.');

const sushi2 = new Dishe('Spicy Tuna Roll', 100.99, './dist/image/sushi.webp', 'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.');

const sushi3 = new Dishe('Salmon Nigiri', 60.99, './dist/image/sushi2.jpg', 'Fresh salmon slices served on a bed of rice.');

const sushi4 = new Dishe('California Roll', 62.99, './dist/image/sushi3.webp', 'Fresh crab, avocado, and cucumber rolled in rice and seaweed.');

const sushi5 = new Dishe('Spicy Tuna Roll', 80.99, './dist/image/sushi.webp', 'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.');

const sushi6 = new Dishe('Salmon Nigiri', 60.99, './dist/image/sushi2.jpg', 'Fresh salmon slices served on a bed of rice.');

const sushi7 = new Dishe('California Roll', 92.99, './dist/image/sushi3.webp', 'Fresh crab, avocado, and cucumber rolled in rice and seaweed.');

const sushi8 = new Dishe('Spicy Tuna Roll', 70.99, './dist/image/sushi.webp', 'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.');

const sushi9 = new Dishe('Salmon Nigiri', 60.99, './dist/image/sushi2.jpg', 'Fresh salmon slices served on a bed of rice.');
dishes.push(sushi1, sushi2, sushi3, sushi4, sushi5, sushi6, sushi7, sushi8, sushi9);

console.log(dishes);

//order - class
class Order {
  id: string;
  totalPayment: number = 0;
  constructor(public dishs: Dishe[], public phoneNum: string) {
    this.id = Math.random().toString(36).substr(2, 9);
  }

  // calculatePayment() {
  //   try {
  //     if (this.tableOrder === null) throw new Error();
  //     this.tableOrder.forEach(dishe => {
  //       this.totalPayment += dishe.price;
  //     })

  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
}
const orders: Order[] = [];


//select teble - class
class Table {
  id: string;
  occupide: boolean = false;
  constructor(public tableNum: string, public orders: Order[],) {
    this.id = Math.random().toString(36).substr(2, 9);
  }

  setOccupide() {
    this.occupide = !this.occupide;
  }
}
const tables: Table[] = [];
const table1 = new Table('table 1', []);
const table2 = new Table('table 2', []);
const table3 = new Table('table 3', []);
const table4 = new Table('table 4', []);
const table5 = new Table('table 5', []);
const table6 = new Table('table 6', []);
tables.push(table1, table2, table3, table4, table5, table6);

renderregisterControlers(document.querySelector("#register"));

function renderregisterControlers(rootElement: HTMLElement | null) {
  try {
    const html =
      `<form onsubmit="handleRegisterOrder(event)">
               <input type="string" name="phoneNum" placeholder="phone number" required>
          <select name="Table" id="Table" required> 
            <option value="string">table 1</option>
            <option value="string">table 2</option>
            <option value="string">table 3</option>
            <option value="string">table 4</option>
            <option value="string">table 5</option>
            <option value="string">table 6</option> 
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
          <div class="dish">
           ${dishes.map(dishe => {
        return `<div class="dish">
            <img src="${dishe.image}" alt="${dishe.name}">
            <div class="dish-text">  
              <h3>${dishe.name}</h3>
              <p>${dishe.description}</p>
              <p>${dishe.price}</p>
           </div>
           <button onclick="handleAddToOrder(event)">add to order</button>
       </div>`
      })};
          </div> 
       </div>`;
    if (!rootElement) throw new Error("no root element");

    rootElement.innerHTML += html;
  } catch (error) {
    console.error(error);
  }
}

function handleAddToOrder(event: any) {
  try {
    event.preventDefault();
    const dish = event.target.elements.dish.value;

    orders.push(dish);
  } catch (error) {
    console.error(error);
  }
};

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
};
