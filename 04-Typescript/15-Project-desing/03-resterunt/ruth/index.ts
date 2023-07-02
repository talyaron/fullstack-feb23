//------------------------------------Dish----------------------------------------

class Dish {
  constructor(
    public dishName: string,
    public price: number,
    public dishImg: string,
    public dishNumber: number = 1,
  ) {}

}

const dishesArray: Dish[] = [
  new Dish(
    "pasta",
    42,
    "https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_1280.jpg",
  ),
  new Dish(
    "sushi",
    48,
    "https://cdn.pixabay.com/photo/2017/10/16/09/00/sushi-2856544_1280.jpg",
  ),
  new Dish(
    "salad-Japanese",
    55,
    "https://cdn.pixabay.com/photo/2014/10/03/15/41/salad-471861_1280.jpg",
    4,
  ),
  new Dish(
    "ramen",
    65,
    "https://cdn.pixabay.com/photo/2017/04/04/00/36/ramen-2199962_1280.jpg",
    4,
  ),
  new Dish(
    "bread",
    22,
    "https://cdn.pixabay.com/photo/2019/05/06/14/24/bread-4183225_1280.jpg",
    4,
  ),
];
const emptyDishArray: Dish[] = [];

function addDishToOrder(dishName:string, dishNumber:number) :Dish{
        const newOrderDish = dishesArray.find(dish => dish.dishName==dishName)
        if(newOrderDish)
        newOrderDish.dishNumber = dishNumber
        return newOrderDish!;
}
  

//------------------------------------Table----------------------------------------
class Table {
  constructor(public numOfTable: number, public numOfDiners: number = 0) {}
}

const tables: Table[] = [];
for (let i = 1; i < 11; i++) {
  const newTable = new Table(i);
  tables.push(newTable);
}
//---------------------------------Table Order Handler-------------------------------
class TableOrderHandler {
  constructor(
    public table: Table,
    public dishesOrdered: Dish[] = emptyDishArray,
  ) {}
}

const tablesOrder: TableOrderHandler[] = [];

tables.forEach((tbl) => {
  const newOrder = new TableOrderHandler(tbl, emptyDishArray);
  tablesOrder.push(newOrder);
});

//-----------------------------------------function------------------------------------

function renderTables() {
  const tablesDiv = document.querySelector("#tablesDiv") as HTMLDivElement;
  tables.forEach((table) => {
    tablesDiv.innerHTML += `
        <div table=${table.numOfTable} class="table" onclick="openMenu(event)" >
        <h3 class="numOfTable">${table.numOfTable}</h3>
        <button onclick="addDiner(event)">+</button>
        <h3 class="numberOfDiner">${table.numOfDiners}</h3>
        <button onclick="reduceDiner(event)">-</button>
      </div>
        `;
  });
}

function addDiner(event: any) {
  const numOfTable = event.target.parentNode.attributes.table.value;
  const numOfDiners = event.target.parentNode.querySelector(".numberOfDiner");
  numOfDiners.innerHTML++;
  tablesOrder.find((table) => table.table.numOfTable == numOfTable)!.table
    .numOfDiners++;
}
function reduceDiner(event: any) {
  const numOfTable = event.target.parentNode.attributes.table.value;
  const numOfDiners = event.target.parentNode.querySelector(".numberOfDiner");
  if (numOfDiners.innerHTML == 0) return;
  else numOfDiners.innerHTML--;
  tablesOrder.find((table) => table.table.numOfTable == numOfTable)!.table
    .numOfDiners--;
}

//onclick table
function openMenu(event) {
  const numChosenTable = event.target.attributes.table.value;
  console.log(numChosenTable);

  const chosenTable = tablesOrder.find(
    (tbl) => tbl.table.numOfTable == numChosenTable,
  );
  console.log(chosenTable);

  const chosenTableString = JSON.stringify(chosenTable);
  localStorage.setItem("chosenTable", chosenTableString);
  window.location.href = "./pages/menu.html";
}

function renderMenu() {
  const menuDiv = document.querySelector("#menu") as HTMLDivElement;

  dishesArray.forEach((dish) => {
    menuDiv.innerHTML += `
          <div class ="dish" name = ${dish.dishName}> 
          <img src=${dish.dishImg} alt="">
          <h3 class="dishName"> ${dish.dishName} </h3>
          <h3> ${dish.price}$ </h3>
        <button onclick="addDishToOrderList(event)"><span class="material-symbols-outlined"> add_box </span></button>
          </div>
  `;
  });
}

function addDishToOrderList(event: any) {
  const dishName = event.target.parentNode.parentNode.attributes.name.value;
  const orderList = document.querySelector(".orderList") as HTMLDivElement;
  const chosenDish = dishesArray.find((dish) => dish.dishName == dishName)!;
  orderList.innerHTML += `
    <div class = "orderListItem" name = ${chosenDish.dishName}>
        <img src=${chosenDish.dishImg} alt="">
        <h3 class="dishName"> ${chosenDish.dishName} </h3>
        <input type="number" value="1" min="1" placeholder="amount"> </input>
        <h3> ${chosenDish.price}$ </h3>
        <button onclick="removeDishToOrderList(event)"><span class="material-symbols-outlined"> delete </span></button>
    </div>
    `;
}

function removeDishToOrderList(event) {
  const chosenDish = event.target.parentNode.parentNode;
  chosenDish.remove();
}

function addOrderToList() {
    const ordersDiv = document.querySelector("#orderList")?.querySelectorAll(".orderListItem")
    ordersDiv?.forEach(item => {
       const dishOrder :Dish = addDishToOrder(item.attributes.name.value , item.querySelector("input")?.valueAsNumber! ) 
       const chosenTable :TableOrderHandler =  JSON.parse(localStorage.getItem("chosenTable")!)
       chosenTable.dishesOrdered.push(dishOrder)
    })
    window.location.href = "../home.html";
}
