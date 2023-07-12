// get Menu data from json or create array
function getMenuForTablepage(): Dishe[]{
    try {
        const disesString = localStorage.getItem('menuDises');
        if (!disesString) {
          console.log("There are no orders");
          return [];
        } else {
          const dishesArray = JSON.parse(disesString);
          const dises = dishesArray.map(dishe => new Dishe(dishe.category,dishe.name,dishe.img,dishe.price,dishe.description));
          return dises;
        }
      } catch (error) {
        console.error(error);
        return [];
      }
    }
// get Tables data from json or create array
function getTablesForTablepage(): Table [] {
    try {
        const tables: Table []  = [];
        const tablesString = localStorage.getItem('tables');
        if (!tablesString){ // if there is not table on json , create one
            for (let index = 0; index < 5; index++) {
                tables.push(new Table(index+1,"Table "+(index+1).toString(),4))
         ;}
         const tablesJson = JSON.stringify(tables); // save to local 
            localStorage.setItem('tables', tablesJson);
        } else{
            //get tables from localstorage
            const tablesArray = JSON.parse(tablesString);
            tablesArray.forEach((table) => {
                    tables.push(new Table(table.idTable, table.tableName, table.capacity));
                });}
     return tables;          
     } catch (error) {
        console.error(error);
        return [];
    }
}
// get orders data from json or return empty array
function getOrdersForTablepage(): Order[] {
    try {
      
      const ordersString = localStorage.getItem('Orders');
      if (!ordersString) {
        return [];
      } else {
        const ordersArray = JSON.parse(ordersString);
        const orders = ordersArray.map(order => new Order(order.table, order.dishes, order.status,new Date (order.OpenTime)));
        return orders;
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }
//  get id of current table
function getCurrentTableIDJason():Number{
    try {
        const CurrentTableIDString = localStorage.getItem('tableID');
        if (!CurrentTableIDString) // if there is no id for current Table id on json 
            throw new Error("can not find tableContainer html elment")
         
         const CurrentTableID = JSON.parse(CurrentTableIDString);
         return Number(CurrentTableID);
         }
               
catch (error) {
        console.error(error);
        return -1;
    }

}
function CheckoutTableId() :boolean {
  try {
      const CurrentTableIDString = localStorage.getItem('tableID');
      if (!CurrentTableIDString) {
          throw new Error("Cannot find tableContainer HTML element");
      }
      const CurrentTableID = JSON.parse(CurrentTableIDString);
      
      // Remove the current table ID from the JSON
      localStorage.removeItem('tableID');
      
      return true;
  } catch (error) {
      console.error(error);
      return false;
  }
}
function CheckOutcurrentOrder() :boolean {
  try {
    if (OrdersT && OrdersT.length) {
      const order = OrdersT.find(function (order) {
          return order && order.status === true && order.table?.idTable === currentTable?.idTable;
      });

      if (order){
        //set date and status
        order.CloseTime=new Date();
        order.calcTotal();
        order.status=false;

        return true;
      }
          
  }
  return false;
  } catch (error) {
      console.error(error);
      return false;
  }
}
function saveChengesToLocal(){
  // save orders,
  const ordersJson = JSON.stringify(OrdersT); // save to local 
            localStorage.setItem('Orders', ordersJson);
  
}
function BackToMain(){
  
  CheckoutTableId();
  saveChengesToLocal();
  
  window.location.href = './Main.html';

}

// rendet curent table details
function renderTableDetails() {
    try {
        const currentTable: Table | undefined = tablesT?.find(table => table?.idTable === CurrentTableID);
        
        if (currentTable) {
            // Assuming you have an HTML element with id "tableDetails" to display the details
            const tableDetailsElement = document.querySelector("#tableDetailsContainer");
            
            if (tableDetailsElement) {
                tableDetailsElement.innerHTML = `
                    <h2>Table Details</h2>
                    <p>Name: ${currentTable.tableName}</p>
                    <p>Capacity: ${currentTable.capacity}</p>
                `;
            }
        } else {
            throw new Error("Table not found.");
        }
    } catch (error) {
        console.error(error);
    }
}
// get order details if there is open order for the table
function checkIfHaveOpenOrder ():boolean|undefined{
  try {
    if (OrdersT && OrdersT.length) {
        var order = OrdersT.find(function (order) {
            return order && order.status === true && order.table?.idTable === currentTable?.idTable;
        });
        if (order)
            return true;
    }
    return false;
}
catch (error) {
    console.error(error);
    return undefined;
}
}
function renderCurrentOrder() {
  try {
    const currentOrder = OrdersT.find(
      (order) =>
        order.table?.idTable === currentTable?.idTable && order.status === true
    );

    if (currentOrder) {
      currentOrder.calcTotal();
      const openOrderContainer = document.getElementById("openOrderContainer");

      if (openOrderContainer) {
        openOrderContainer.innerHTML = ""; // Clear the container before rendering the current order

        const groupedDishes = {}; // Object to store grouped dishes by name

        // Group the dishes by name and calculate the total quantity and price
        currentOrder.dishes?.forEach((dish) => {
          if (groupedDishes[dish.name]) {
            // Dish already exists in the group, update quantity and price
            groupedDishes[dish.name].quantity++;
            groupedDishes[dish.name].price += dish.price;
          } else {
            // Add a new entry for the dish in the group
            groupedDishes[dish.name] = {
              dish,
              quantity: 1,
              price: dish.price,
            };
          }
        });

        const html = `
          <div class="openOrderDishes">
            <form id="DishesForm" class="DishesForm">
              ${Object.values(groupedDishes)
                .map(
                  (groupedDish) => `
                    <p>${groupedDish?.dish.category.categoyName}</p>
                    <p>${groupedDish?.dish.name} - price: ${groupedDish?.dish.price} - quantity: ${groupedDish?.quantity}</p>
                  `
                )
                .join("")}
                </form>
              <div class="openOrderToal">
                <p>Total: ${currentOrder.total}</p>
              </div>
              <div class="optionBtnsOrderDish">
                <form class="AddDishForm">
                  <button type="button" onclick="handleAddDishes()">Add Dish</button>
                  <button type="button" onclick="handleDeleteDish()">Delete Dish</button>
                  <button type="button" onclick="BackToMain()">Back To Main</button>
                  <button type="button" onclick="checkOut()">Check Out</button>
                </form>
              </div>
            
          </div>
            <form id="TableMenueForm" class="MenuForm" onsubmit="handleAddDishesToOrder(event)" style="display: none;">
              ${MenuT.map(
                (dish) => `
                  <div class="disheCard">
                    <input class="disheCardCheckbox" type="checkbox" name="dishes" id="${dish.name}" value="${dish.idDishe}">
                    <div class="dishDetails">
                      <p class="dishName">${dish.name}</p>
                      <p class="dishPrice">Price: ${dish.price}</p>
                      <img class="dishImage" src="${dish.img}" alt="">
                    </div>
                  </div>
                `
              ).join("")}
              <input type="submit" value="Add Dishes">
            </form>
          
        `;

        openOrderContainer.innerHTML = html;
      }
    }
  } catch (error) {
    console.error(error);
  }
}
function checkOut(){
  CheckOutcurrentOrder();
  BackToMain();
}
function handleAddDishesToOrder(event) {

    event.preventDefault(); // Prevent form submission
    // Get all the selected dish checkboxes
    
    const selectedDishCheckboxes = Array.from(event.target.elements.dishes).filter((checkbox) => checkbox.checked);
  
    // Get the selected dish IDs
    const selectedDishIds = selectedDishCheckboxes.map((checkbox) => checkbox.value);
  
    // Use the dish IDs to add the dishes to the order or perform any other necessary actions
    
    const newDishes = MenuT.filter((dish) => selectedDishIds.includes(String(dish.idDishe)));
    const openOrder = OrdersT.find((order) => order.table?.idTable === CurrentTableID && order.status === true);
    if (openOrder && openOrder.dishes) {
      
      openOrder.dishes.push(...newDishes);
      openOrder.calcTotal();
    }
    renderCurrentOrder();
  
    // Reset the form (optional)
    event.target.reset();
  }
  function handleDeleteDish(){
   
    try {
      
      const currentOrder = OrdersT.find(
        (order) =>
          order.table?.idTable === currentTable?.idTable && order.status === true
      );
      if(!currentOrder){throw new Error("Cant Find Current Order");
      }
      const orderDishes = currentOrder.dishes;
      

      const dishesForm = document.getElementById("DishesForm");
      
      if (orderDishes && dishesForm) {
        dishesForm.innerHTML=``;
        orderDishes.forEach((dish) => {
          const dishElement = document.createElement("div");
          dishElement.classList.add("dish-item");
      
          // Display dish information (name, price, description, etc.)
          dishElement.innerHTML = `
            <div class="dish-name">${dish.name}</div>
            <div class="dish-price">$${dish.price.toFixed(2)}</div>
            <div class="dish-description">${dish.description}</div>
            <button class="delete-button" onclick="deleteDish(${dish.idDishe})">Delete</button>
          `;
      
          // Append the dish element to the dishesForm container
          dishesForm.appendChild(dishElement);
        });
      }
      
    } catch (error) {
      console.error(error);
    }
  }
  function deleteDish(dishId) {
   
    const currentOrder = OrdersT.find(
      (order) =>
        order.table?.idTable === currentTable?.idTable && order.status === true
    );
    if(!currentOrder){throw new Error("Cant Find Current Order");
      }
    // Find the dish with the specified dishId in the currentOrder.dishes array

    const dishIndex = currentOrder.dishes?.findIndex((dish) => dish.idDishe === dishId);

  
    if (dishIndex !== undefined && dishIndex !== -1) {
      // Remove the dish from the array
      currentOrder.dishes?.splice(dishIndex, 1);
  
      // Recalculate the order total
      currentOrder.calcTotal();
  
      // Refresh the displayed dishes by calling handleDeleteDish again or updating the UI accordingly
      renderCurrentOrder();
    }
  }
  
  function handleAddDishes (){
    renderCurrentOrder(); // reset other options
   
    const TableMenueHtml = document.getElementById("TableMenueForm");
    if(TableMenueHtml)
    TableMenueHtml.style.display='block';
  }
  function handleAddOrder() {
    // Logic to create a new order
    
    const addOrderContainer = document.getElementById("AddOrderContainer");
    if(addOrderContainer)  addOrderContainer.innerHTML = "";
    const table:Table|undefined = currentTable; // Assuming you have a reference to the current table
    const dishes:Dishe[] = []; 
    const status = true; // Assuming a new order is always open

    // Create a new instance of the Order class
    const newOrder = new Order(table, dishes, status);
  
    // Push the new order to the orders array
    OrdersT.push(newOrder);
    // save to local storege
    const OrdersTJson = JSON.stringify(OrdersT);
    localStorage.setItem('Orders', OrdersTJson);

    console.log(localStorage.getItem('Orders'));

    // render new order with no dishes
    renderCurrentOrder();



  }
  function renderNewOrder(){
    const addOrderContainer = document.getElementById("AddOrderContainer");
    if (addOrderContainer) {
        const html = `<button class="AddNewOrder" type="button" onclick="handleAddOrder()">Add New Order</button>`
        addOrderContainer.innerHTML = html;
    }
  }
const tablesT : Table [] = getTablesForTablepage(); 
const OrdersT : Order[] = getOrdersForTablepage(); 
const MenuT: Dishe[] = getMenuForTablepage(); // menu- All dishes
const CurrentTableID:Number = getCurrentTableIDJason();

const currentTable :Table | undefined = tablesT?.find(table=>table?.idTable === CurrentTableID)

const orderStatus : boolean|undefined= checkIfHaveOpenOrder();
if(orderStatus == false)
{
  renderNewOrder();
}
else{
  renderCurrentOrder();
}

renderTableDetails();

console.log(tablesT);

