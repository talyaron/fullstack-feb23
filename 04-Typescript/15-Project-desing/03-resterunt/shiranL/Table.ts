
function getDishesForTablepage(): Dishe[]{
    try {
        
        const disesString = localStorage.getItem('dises');
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


function getTablesForTablepage(): (Table | undefined)[]  |undefined{
    try {
        
        const tables: (Table | undefined)[]  |undefined = [];
        const tablesString = localStorage.getItem('tables');
        if (!tablesString){ // if there is not table on json , create one
            for (let index = 0; index < 5; index++) {
                tables.push(new Table(index+1,"Table "+(index+1).toString(),4))
         ;}
         const tablesJson = JSON.stringify(tables);
            localStorage.setItem('tables', tablesJson);
            console.log(tables);
        } else{
            //get tables from localstorage
                //convert string to array;
                const tablesArray = JSON.parse(tablesString);
                tablesArray.forEach((table) => {
                    tables.push(new Table(table.idTable, table.tableName, table.capacity));
                });}
     return tables;          
} catch (error) {
        console.error(error);
        return undefined;
    }

}
// get orders data from json
function getOrdersForTablepage(): Order[] {
    try {
        
      const ordersString = localStorage.getItem('orders');
      if (!ordersString) {
        console.log("There are no orders");
        return [];
      } else {
        const ordersArray = JSON.parse(ordersString);
        const orders = ordersArray.map(order => new Order(order.table, order.dishes, order.status));
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
        if (!CurrentTableIDString) // if there is not id on json , create one
            throw new Error("can not find tableContainer html elment")
         
        //get id from localstorage
       //convert string to array;
         const CurrentTableID = JSON.parse(CurrentTableIDString);
         console.log(CurrentTableID);
         return Number(CurrentTableID);
         }
               
catch (error) {
        console.error(error);
        return -1;
    }

}
// rendet curent table details
function renderTableDetails() {
    try {
        const currentTable: Table | undefined = tablesT?.find(table => table?.idTable === CurrentTableID);
        
        if (currentTable) {
            // Assuming you have an HTML element with id "tableDetails" to display the details
            const tableDetailsElement = document.getElementById("tableDetailsContainer");
            
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
        debugger;
        const order = OrdersT?.find(order=>order?.status==true && order.table=== currentTable)
        if(order) return true
        else return false;

        
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

  function renderCurrentOrder(){
    try {
        const currentOrder = OrdersT.find(order => order.table === currentTable && order.status === true);
        // const menu = OrdersT.find(order => order.table === currentTable && order.status === true);
        if (currentOrder) {

        const openOrderContainer = document.getElementById("openOrderContainer");
        if (openOrderContainer) {  
          openOrderContainer.innerHTML = ""; // Clear the container before rendering the current order
          const html=` <div class="openOrderDishes">
                        <form class="DishesForm">
                        ${currentOrder.dishes.map((dish) => `
                        <p> ${dish.name} - price: ${dish.price}</p>
                         `).join("")}
                         <div class="openOrderToal">
                        <p>Total: </p> </div>
                        <div class="optionBtnsOrderDish">
                        <form class="AddDishForm">
                        <button type="button" onclick="handleAddDish()">Add Dish</button>
                        <button type="button" onclick="handleDeleteDish()">Delete Dish</button>
                        <button type="button" onclick="checkOut()">Check Out</button>
                        </form></div>
                        </form></div>
                        
                         <div class="MenueDiv">
                        <form id="TableMenueForm" class="MenuForm" onsubmit="handleAddDishToOrder(event)" style="display: none;">
                            ${MenuT.map((dish) => `
                            <div class="disheCard">
                                <input class="disheCardCheckbox" type="checkbox" name="dish" id="${dish.name}" value="${dish.idDishe}">
                                <div class="dishDetails">
                                    <p class="dishName">${dish.name}</p>
                                    <p class="dishPrice">Price: ${dish.price}</p>
                                    <img class="dishImage" src="${dish.img}" alt="">
                                </div> 
                                </div> 
                                `).join("")}
                            <input type="submit" value="Add Dishes">
                        </form>
                    </div>  `
        openOrderContainer.innerHTML=html
        }
        

    }
        
    } catch (error) {
        console.error(error);
    }
  }
  function handleAddDishToOrder(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get all the selected dish checkboxes
    const selectedDishCheckboxes = Array.from(event.target.elements.dish).filter((checkbox) => checkbox.checked);
  
    // Get the selected dish IDs
    const selectedDishIds = selectedDishCheckboxes.map((checkbox) => checkbox.value);
  
    // Use the dish IDs to add the dishes to the order or perform any other necessary actions
    console.log("Selected Dish IDs:", selectedDishIds);
    const newDishes = MenuT.filter((dish) => selectedDishIds.includes(String(dish.idDishe)));
    const openOrder = OrdersT.find((order) => order.table?.idTable === CurrentTableID && order.status === true);
    if (openOrder) {
      openOrder.dishes.push(...newDishes);
    }
    renderCurrentOrder();
  
    // Reset the form (optional)
    event.target.reset();
  }
  
  
  function handleDeleteDish(){}
  function handleAddDish (){
    debugger
    const TableMenueHtml = document.getElementById("TableMenueForm");
    if(TableMenueHtml)
    TableMenueHtml.style.display='block';

  }
  function handleAddOrder() {
    // Logic to create a new order
    debugger
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
  



const tablesT : (Table | undefined)[] |undefined =getTablesForTablepage(); 
const OrdersT : Order[] =getOrdersForTablepage(); 
const MenuT: Dishe[] = getDishesForTablepage(); // menu- All dishes
const CurrentTableID:Number = getCurrentTableIDJason();

const currentTable :Table | undefined = tablesT?.find(table=>table?.idTable === CurrentTableID)
const orderStatus : boolean|undefined= checkIfHaveOpenOrder();
if(orderStatus == false)
{
    const addOrderContainer = document.getElementById("AddOrderContainer");
    if (addOrderContainer) {
        const html = `<button class="AddNewOrder" type="button" onclick="handleAddOrder()">Add New Order</button>`
        addOrderContainer.innerHTML = html;
    }
}

renderTableDetails();

console.log(tablesT);

