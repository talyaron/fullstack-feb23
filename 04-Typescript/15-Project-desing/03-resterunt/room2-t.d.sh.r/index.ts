//entities:
//Tables, Order, Dishes

//no need for unic ids!!

//the table class will contain the order class
//the table class will have the option to add or delet an order
//the table class will have the option to open or closed the table (t-open, f-closed)
class Table {
  constructor(
    public tableNumber: number,
    public catched: boolean,
    order?: Order
  ) {}

  openTable() {
    //the function return that the table is catched (=true)
    try {
      if (!this.tableNumber) throw new Error("no table catched");
      this.catched = true; // the table is now open
      // render 3 btns -> add, del, close
    } catch (error) {
      console.error(error);
    }
  }

  //to add dish to an order, we need the specific order and the dish to add
  addDish(order: Dish[], dish: Dish) {
    //add dish to order array

    try {
      if (!order) throw new Error("no order");
      if (!dish) throw new Error("not a dish");

      order.push(dish);
    } catch (error) {
      console.error(error);
    }
  }

  deletDish(order, dish) {
    try {
      if (!order) throw new Error("Cannot find order");
      if (!dish) throw new Error("Cannot find dish");

      const index = order.findIndex((item) => item === dish);
      if (index !== -1) {
        order.splice(index, 1);
      }
    } catch (error) {
      console.error(error);
    }
  }
  closeTable() {
    //close the table and the order and return the calcolat of all dises price in the order (sum of the order)
    this.catched = true;
  }
}
const tables: Table[] = [
  new Table(1, false),
  new Table(2, false),
  new Table(3, false),
  new Table(4, true),
];

//the order class will contain the dish class
class Order {
  constructor(public dishes: Dish[]) {}
}

const ordersArray: Order[] = []; //contain all the dishes in a spesific order

//the Dish class will contain the info of the dish
class Dish {
  constructor(
    public dishName: string,
    public img: string,
    public price: number,
    public description: string
  ) {}
}

//creat some dished
const pastaRed = new Dish(
  "pastaRed",
  "https://foodhub.scene7.com/is/image/woolworthsltdprod/Easy-chicken-and-bacon-pasta:Desktop-1300x658",
  26,
  "red pasta with bazil"
);
const pastaMilk = new Dish(
  "pastaMilk",
  "https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-RECIPE-CARD2.jpg",
  26,
  "pasta with milk"
);
const pizzaOnion = new Dish(
  "pizzaOnion",
  "https://pizzatoday.com/wp-content/uploads/2020/05/OnionPizza-1.jpg",
  35,
  "pizza with onions"
);
const pizzaOliv = new Dish(
  "pizzaOliv",
  "https://images.squarespace-cdn.com/content/v1/55370317e4b047f1053ee431/1546891998774-XFFPMCUA4MAQ5251Y5TA/ke17ZwdGBToddI8pDm48kEKeeVwguwXFnn1ZDuv86ikUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2sPGQHE4gTOo1QfbaGNmWRT3ltfHJNtU0FQBDPzwxb0xkOpdljO7Z-5qh0zg85Jnj/Loaded+Olive+Pizza?format=original",
  30,
  "pizza with olives"
);

const dishes: Dish[] = [pastaRed, pastaMilk, pizzaOliv, pizzaOnion]; //contain the information about all dishes

//------view------------------------
//renderTable --> at open screen
function renderTable(divName: any) {
  let html = tables.map((table) => {
      return `<button class="table ${table.catched ? "red-hover" : "green-hover"}"
       id="table${table.tableNumber}">${table.tableNumber}</button>`;
    })
    .join("");
  divName.innerHTML = html;
}

const tablesDiv = document.querySelector(".tables") as Element;

renderTable(tablesDiv);
//Table Event Listener
var thisTable: any;
const tableDiv = document.querySelectorAll(".table");
tableDiv.forEach(function (item, idx) {
  item.addEventListener("click", function () {
    const result: Table | undefined = tables.find(
      ({ tableNumber }) => tableNumber === idx + 1
    );
    if (!result?.catched) {
      result?.openTable();
    } else result?.closeTable();
    thisTable = result;
    renderMenu();
  });
});

//--------------------------- Summary - Price ---------------------------
function renderMenu() {
  console.log(thisTable);
  tablesDiv.innerHTML = `
      <div class="menu">
        <h2>Table number ${thisTable.tableNumber} Menu</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
          ${dishes.map((dish) => {
              return `
              <tr>
                <td>${dish.dishName}</td>
                <td><img class="dishImage" src="${dish.img}"></td>
                <td>${dish.price}</td>
                <td>${dish.description}</td>
                <td><button onclick="addToOrder(${dish.price})">Add</button></td>
              </tr>
              `;
            })
            .join("")}
        </table>
      </div>
      <div id="summary"></div>
    `;
}

function addToOrder(price:any) {
  if (thisTable) {
    const order = new Order([]);
    ordersArray.push(order);
    thisTable.addDish(order.dishes, price);
    updateSummary(price);
    const summaryElement = document.querySelector("#summary");
    if (summaryElement) {
      summaryElement.classList.add("added");
      setTimeout(() => {
        summaryElement.classList.remove("added");
      }, 500);
    }
  }
}

function updateSummary(price) {
  const summaryElement = document.querySelector("#summary");
  if (summaryElement) {
    const totalItems = ordersArray.length;
    const totalPrice = ordersArray.reduce(
      (sum, order) => sum + order.dishes.length * price,
      0
    );

    const dishList = ordersArray.flatMap((order) =>
      order.dishes.map((dish) => ({
        name: dish.dishName,
        price: dish.price,
        order,
      }))
    );

    const dishItems = dishList
      .map(
        (dish, index) => `
          <li>
            ${dish.name} - $${dish.price}
            <button onclick="removeDish(${index})">Remove</button>
          </li>
        `
      )
      .join("");

    summaryElement.innerHTML = `
      <p>Total Items: ${totalItems}, Total Price: ₪${totalPrice}</p>
      <ul>${dishItems}</ul>
    `;
  }
}

function removeDish(index) {
  const dishList = ordersArray.flatMap((order) =>
    order.dishes.map((dish) => ({
      name: dish.dishName,
      price: dish.price,
      order,
    }))
  );

  const dishItem = dishList[index];
  const { order, name, price } = dishItem;
  thisTable.deletDish(order.dishes, dishItem);
  updateSummary(price);
  alert(`Removed dish: ${name}`);

  const summaryElement = document.querySelector("#summary");
  if (summaryElement) {
    const dishListElement = summaryElement.querySelector("ul");
    if (dishListElement) {
      const dishItems = dishListElement.querySelectorAll("li");
      const itemToRemove = dishItems[index];
      if (itemToRemove) {
        dishListElement.removeChild(itemToRemove);
      }
    }
  }
}

//test to run back page
const backButton = document.querySelector("#backButton") as HTMLButtonElement;
backButton.addEventListener("click", backPage);

function backPage() {
  renderTable(tablesDiv);
}
