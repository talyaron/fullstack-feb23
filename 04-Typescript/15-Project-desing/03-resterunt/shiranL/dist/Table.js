// get Menu data from json or create array
function getMenuForTablepage() {
    try {
        var disesString = localStorage.getItem('menuDises');
        if (!disesString) {
            console.log("There are no orders");
            return [];
        }
        else {
            var dishesArray = JSON.parse(disesString);
            var dises = dishesArray.map(function (dishe) { return new Dishe(dishe.category, dishe.name, dishe.img, dishe.price, dishe.description); });
            return dises;
        }
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
// get Tables data from json or create array
function getTablesForTablepage() {
    try {
        debugger;
        var tables_1 = [];
        var tablesString = localStorage.getItem('tables');
        if (!tablesString) { // if there is not table on json , create one
            for (var index = 0; index < 16; index++) {
                tables_1.push(new Table("Table " + (index + 1).toString(), 4, index + 1));
            }
            var tablesJson = JSON.stringify(tables_1); // save to local 
            localStorage.setItem('tables', tablesJson);
        }
        else {
            //get tables from localstorage
            var tablesArray = JSON.parse(tablesString);
            tablesArray.forEach(function (table) {
                tables_1.push(new Table(table.tableName, table.capacity, table.idTable));
            });
        }
        return tables_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
// get orders data from json or return empty array
function getOrdersForTablepage() {
    try {
        var ordersString = localStorage.getItem('Orders');
        if (!ordersString) {
            return [];
        }
        else {
            var ordersArray = JSON.parse(ordersString);
            var orders = ordersArray.map(function (order) { return new Order(order.table, order.dishes, order.status, new Date(order.OpenTime)); });
            return orders;
        }
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
//  get id of current table
function getCurrentTableIDJason() {
    try {
        var CurrentTableIDString = localStorage.getItem('tableID');
        if (!CurrentTableIDString) // if there is no id for current Table id on json 
            throw new Error("can not find tableContainer html elment");
        var CurrentTableID_1 = JSON.parse(CurrentTableIDString);
        return Number(CurrentTableID_1);
    }
    catch (error) {
        console.error(error);
        return -1;
    }
}
function CheckoutTableId() {
    try {
        var CurrentTableIDString = localStorage.getItem('tableID');
        if (!CurrentTableIDString) {
            throw new Error("Cannot find tableContainer HTML element");
        }
        var CurrentTableID_2 = JSON.parse(CurrentTableIDString);
        // Remove the current table ID from the JSON
        localStorage.removeItem('tableID');
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function CheckOutcurrentOrder() {
    try {
        if (OrdersT && OrdersT.length) {
            var order = OrdersT.find(function (order) {
                var _a;
                return order && order.status === true && ((_a = order.table) === null || _a === void 0 ? void 0 : _a.idTable) === (currentTable === null || currentTable === void 0 ? void 0 : currentTable.idTable);
            });
            if (order) {
                //set date and status
                order.CloseTime = new Date();
                order.calcTotal();
                order.status = false;
                return true;
            }
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function saveChengesToLocal() {
    // save orders,
    var ordersJson = JSON.stringify(OrdersT); // save to local 
    localStorage.setItem('Orders', ordersJson);
}
function BackToMain() {
    CheckoutTableId();
    saveChengesToLocal();
    window.location.href = './Main.html';
}
// rendet curent table details
function renderTableDetails() {
    try {
        debugger;
        var currentTable_1 = tablesT === null || tablesT === void 0 ? void 0 : tablesT.find(function (table) { return table.idTable === CurrentTableID; });
        if (currentTable_1) {
            // Assuming you have an HTML element with id "tableDetails" to display the details
            var tableDetailsElement = document.querySelector("#tableDetailsContainer");
            if (tableDetailsElement) {
                tableDetailsElement.innerHTML = "\n                    <h2>Table Details</h2>\n                    <p>Name: " + currentTable_1.tableName + "</p>\n                    <p>Capacity: " + currentTable_1.capacity + "</p>\n                ";
            }
        }
        else {
            throw new Error("Table not found.");
        }
    }
    catch (error) {
        console.error(error);
    }
}
// get order details if there is open order for the table
function checkIfHaveOpenOrder() {
    try {
        if (OrdersT && OrdersT.length) {
            var order = OrdersT.find(function (order) {
                var _a;
                return order && order.status === true && ((_a = order.table) === null || _a === void 0 ? void 0 : _a.idTable) === (currentTable === null || currentTable === void 0 ? void 0 : currentTable.idTable);
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
    var _a;
    try {
        var currentOrder = OrdersT.find(function (order) { var _a; return ((_a = order.table) === null || _a === void 0 ? void 0 : _a.idTable) === (currentTable === null || currentTable === void 0 ? void 0 : currentTable.idTable) && order.status === true; });
        if (currentOrder) {
            currentOrder.calcTotal();
            var openOrderContainer = document.getElementById("openOrderContainer");
            if (openOrderContainer) {
                openOrderContainer.innerHTML = ""; // Clear the container before rendering the current order
                var groupedDishes_1 = {}; // Object to store grouped dishes by name
                // Group the dishes by name and calculate the total quantity and price
                (_a = currentOrder.dishes) === null || _a === void 0 ? void 0 : _a.forEach(function (dish) {
                    if (groupedDishes_1[dish.name]) {
                        // Dish already exists in the group, update quantity and price
                        groupedDishes_1[dish.name].quantity++;
                        groupedDishes_1[dish.name].price += dish.price;
                    }
                    else {
                        // Add a new entry for the dish in the group
                        groupedDishes_1[dish.name] = {
                            dish: dish,
                            quantity: 1,
                            price: dish.price
                        };
                    }
                });
                var html = "\n          <div class=\"openOrderDishes\">\n            <form id=\"DishesForm\" class=\"DishesForm\">\n              " + Object.values(groupedDishes_1)
                    .map(function (groupedDish) { return "\n                    <p>" + (groupedDish === null || groupedDish === void 0 ? void 0 : groupedDish.dish.category.categoyName) + "</p>\n                    <p>" + (groupedDish === null || groupedDish === void 0 ? void 0 : groupedDish.dish.name) + " - price: " + (groupedDish === null || groupedDish === void 0 ? void 0 : groupedDish.dish.price) + " - quantity: " + (groupedDish === null || groupedDish === void 0 ? void 0 : groupedDish.quantity) + "</p>\n                  "; })
                    .join("") + "\n                </form>\n              <div class=\"openOrderToal\">\n                <p>Total: " + currentOrder.total + "</p>\n              </div>\n              <div class=\"optionBtnsOrderDish\">\n                <form class=\"AddDishForm\">\n                  <button type=\"button\" onclick=\"handleAddDishes()\">Add Dish</button>\n                  <button type=\"button\" onclick=\"handleDeleteDish()\">Delete Dish</button>\n                  <button type=\"button\" onclick=\"BackToMain()\">Back To Main</button>\n                  <button type=\"button\" onclick=\"checkOut()\">Check Out</button>\n                </form>\n              </div>\n            \n          </div>\n            <form id=\"TableMenueForm\" class=\"MenuForm\" onsubmit=\"handleAddDishesToOrder(event)\" style=\"display: none;\">\n              " + MenuT.map(function (dish) { return "\n                  <div class=\"disheCard\">\n                    <input class=\"disheCardCheckbox\" type=\"checkbox\" name=\"dishes\" id=\"" + dish.name + "\" value=\"" + dish.idDishe + "\">\n                    <div class=\"dishDetails\">\n                      <p class=\"dishName\">" + dish.name + "</p>\n                      <p class=\"dishPrice\">Price: " + dish.price + "</p>\n                      <img class=\"dishImage\" src=\"" + dish.img + "\" alt=\"\">\n                    </div>\n                  </div>\n                "; }).join("") + "\n              <input type=\"submit\" value=\"Add Dishes\">\n            </form>\n          \n        ";
                openOrderContainer.innerHTML = html;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function checkOut() {
    CheckOutcurrentOrder();
    BackToMain();
}
function handleAddDishesToOrder(event) {
    var _a;
    event.preventDefault(); // Prevent form submission
    // Get all the selected dish checkboxes
    var selectedDishCheckboxes = Array.from(event.target.elements.dishes).filter(function (checkbox) { return checkbox.checked; });
    // Get the selected dish IDs
    var selectedDishIds = selectedDishCheckboxes.map(function (checkbox) { return checkbox.value; });
    // Use the dish IDs to add the dishes to the order or perform any other necessary actions
    var newDishes = MenuT.filter(function (dish) { return selectedDishIds.includes(String(dish.idDishe)); });
    var openOrder = OrdersT.find(function (order) { var _a; return ((_a = order.table) === null || _a === void 0 ? void 0 : _a.idTable) === CurrentTableID && order.status === true; });
    if (openOrder && openOrder.dishes) {
        (_a = openOrder.dishes).push.apply(_a, newDishes);
        openOrder.calcTotal();
    }
    renderCurrentOrder();
    // Reset the form (optional)
    event.target.reset();
}
function handleDeleteDish() {
    try {
        var currentOrder = OrdersT.find(function (order) { var _a; return ((_a = order.table) === null || _a === void 0 ? void 0 : _a.idTable) === (currentTable === null || currentTable === void 0 ? void 0 : currentTable.idTable) && order.status === true; });
        if (!currentOrder) {
            throw new Error("Cant Find Current Order");
        }
        var orderDishes = currentOrder.dishes;
        var dishesForm_1 = document.getElementById("DishesForm");
        if (orderDishes && dishesForm_1) {
            dishesForm_1.innerHTML = "";
            orderDishes.forEach(function (dish) {
                var dishElement = document.createElement("div");
                dishElement.classList.add("dish-item");
                // Display dish information (name, price, description, etc.)
                dishElement.innerHTML = "\n            <div class=\"dish-name\">" + dish.name + "</div>\n            <div class=\"dish-price\">$" + dish.price.toFixed(2) + "</div>\n            <div class=\"dish-description\">" + dish.description + "</div>\n            <button class=\"delete-button\" onclick=\"deleteDish(" + dish.idDishe + ")\">Delete</button>\n          ";
                // Append the dish element to the dishesForm container
                dishesForm_1.appendChild(dishElement);
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
function deleteDish(dishId) {
    var _a, _b;
    var currentOrder = OrdersT.find(function (order) { var _a; return ((_a = order.table) === null || _a === void 0 ? void 0 : _a.idTable) === (currentTable === null || currentTable === void 0 ? void 0 : currentTable.idTable) && order.status === true; });
    if (!currentOrder) {
        throw new Error("Cant Find Current Order");
    }
    // Find the dish with the specified dishId in the currentOrder.dishes array
    var dishIndex = (_a = currentOrder.dishes) === null || _a === void 0 ? void 0 : _a.findIndex(function (dish) { return dish.idDishe === dishId; });
    if (dishIndex !== undefined && dishIndex !== -1) {
        // Remove the dish from the array
        (_b = currentOrder.dishes) === null || _b === void 0 ? void 0 : _b.splice(dishIndex, 1);
        // Recalculate the order total
        currentOrder.calcTotal();
        // Refresh the displayed dishes by calling handleDeleteDish again or updating the UI accordingly
        renderCurrentOrder();
    }
}
function handleAddDishes() {
    renderCurrentOrder(); // reset other options
    var TableMenueHtml = document.getElementById("TableMenueForm");
    if (TableMenueHtml)
        TableMenueHtml.style.display = 'block';
}
function handleAddOrder() {
    // Logic to create a new order
    var addOrderContainer = document.getElementById("AddOrderContainer");
    if (addOrderContainer)
        addOrderContainer.innerHTML = "";
    var table = currentTable; // Assuming you have a reference to the current table
    var dishes = [];
    var status = true; // Assuming a new order is always open
    // Create a new instance of the Order class
    var newOrder = new Order(table, dishes, status);
    // Push the new order to the orders array
    OrdersT.push(newOrder);
    // save to local storege
    var OrdersTJson = JSON.stringify(OrdersT);
    localStorage.setItem('Orders', OrdersTJson);
    console.log(localStorage.getItem('Orders'));
    // render new order with no dishes
    renderCurrentOrder();
}
function renderNewOrder() {
    var addOrderContainer = document.getElementById("AddOrderContainer");
    if (addOrderContainer) {
        var html = "<button class=\"AddNewOrder\" type=\"button\" onclick=\"handleAddOrder()\">Add New Order</button>\n        <button class=\"AddNewOrder\" type=\"button\" onclick=\"BackToMain()\">Back To Main</button>";
        addOrderContainer.innerHTML = html;
    }
}
var tablesT = getTablesForTablepage();
var OrdersT = getOrdersForTablepage();
var MenuT = getMenuForTablepage(); // menu- All dishes
var CurrentTableID = getCurrentTableIDJason();
var currentTable = tablesT === null || tablesT === void 0 ? void 0 : tablesT.find(function (table) { return (table === null || table === void 0 ? void 0 : table.idTable) === CurrentTableID; });
var orderStatus = checkIfHaveOpenOrder();
if (orderStatus == false) {
    renderNewOrder();
}
else {
    renderCurrentOrder();
}
renderTableDetails();
console.log(tablesT);
