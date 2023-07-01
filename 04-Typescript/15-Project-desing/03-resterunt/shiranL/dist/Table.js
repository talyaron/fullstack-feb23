function getDishesForTablepage() {
    try {
        var disesString = localStorage.getItem('dises');
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
function getTablesForTablepage() {
    try {
        var tables_1 = [];
        var tablesString = localStorage.getItem('tables');
        if (!tablesString) { // if there is not table on json , create one
            for (var index = 0; index < 5; index++) {
                tables_1.push(new Table(index + 1, "Table " + (index + 1).toString(), 4));
            }
            var tablesJson = JSON.stringify(tables_1);
            localStorage.setItem('tables', tablesJson);
            console.log(tables_1);
        }
        else {
            //get tables from localstorage
            //convert string to array;
            var tablesArray = JSON.parse(tablesString);
            tablesArray.forEach(function (table) {
                tables_1.push(new Table(table.idTable, table.tableName, table.capacity));
            });
        }
        return tables_1;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
// get orders data from json
function getOrdersForTablepage() {
    try {
        var ordersString = localStorage.getItem('orders');
        if (!ordersString) {
            console.log("There are no orders");
            return [];
        }
        else {
            var ordersArray = JSON.parse(ordersString);
            var orders = ordersArray.map(function (order) { return new Order(order.table, order.dishes, order.status); });
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
        if (!CurrentTableIDString) // if there is not id on json , create one
            throw new Error("can not find tableContainer html elment");
        //get id from localstorage
        //convert string to array;
        var CurrentTableID_1 = JSON.parse(CurrentTableIDString);
        console.log(CurrentTableID_1);
        return Number(CurrentTableID_1);
    }
    catch (error) {
        console.error(error);
        return -1;
    }
}
// rendet curent table details
function renderTableDetails() {
    try {
        var currentTable_1 = tablesT === null || tablesT === void 0 ? void 0 : tablesT.find(function (table) { return (table === null || table === void 0 ? void 0 : table.idTable) === CurrentTableID; });
        if (currentTable_1) {
            // Assuming you have an HTML element with id "tableDetails" to display the details
            var tableDetailsElement = document.getElementById("tableDetailsContainer");
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
        debugger;
        var order = OrdersT === null || OrdersT === void 0 ? void 0 : OrdersT.find(function (order) { return (order === null || order === void 0 ? void 0 : order.status) == true && order.table === currentTable; });
        if (order)
            return true;
        else
            return false;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function renderCurrentOrder() {
    try {
        var currentOrder = OrdersT.find(function (order) { return order.table === currentTable && order.status === true; });
        // const menu = OrdersT.find(order => order.table === currentTable && order.status === true);
        if (currentOrder) {
            var openOrderContainer = document.getElementById("openOrderContainer");
            if (openOrderContainer) {
                openOrderContainer.innerHTML = ""; // Clear the container before rendering the current order
                var html = " <div class=\"openOrderDishes\">\n                        <form class=\"DishesForm\">\n                        " + currentOrder.dishes.map(function (dish) { return "\n                        <p> " + dish.name + " - price: " + dish.price + "</p>\n                         "; }).join("") + "\n                         <div class=\"openOrderToal\">\n                        <p>Total: </p> </div>\n                        <div class=\"optionBtnsOrderDish\">\n                        <form class=\"AddDishForm\">\n                        <button type=\"button\" onclick=\"handleAddDish()\">Add Dish</button>\n                        <button type=\"button\" onclick=\"handleDeleteDish()\">Delete Dish</button>\n                        <button type=\"button\" onclick=\"checkOut()\">Check Out</button>\n                        </form></div>\n                        </form></div>\n                        \n                         <div class=\"MenueDiv\">\n                        <form id=\"TableMenueForm\" class=\"MenuForm\" onsubmit=\"handleAddDishToOrder(event)\" style=\"display: none;\">\n                            " + MenuT.map(function (dish) { return "\n                            <div class=\"disheCard\">\n                                <input class=\"disheCardCheckbox\" type=\"checkbox\" name=\"dish\" id=\"" + dish.name + "\" value=\"" + dish.idDishe + "\">\n                                <div class=\"dishDetails\">\n                                    <p class=\"dishName\">" + dish.name + "</p>\n                                    <p class=\"dishPrice\">Price: " + dish.price + "</p>\n                                    <img class=\"dishImage\" src=\"" + dish.img + "\" alt=\"\">\n                                </div> \n                                </div> \n                                "; }).join("") + "\n                            <input type=\"submit\" value=\"Add Dishes\">\n                        </form>\n                    </div>  ";
                openOrderContainer.innerHTML = html;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddDishToOrder(event) {
    var _a;
    event.preventDefault(); // Prevent form submission
    // Get all the selected dish checkboxes
    var selectedDishCheckboxes = Array.from(event.target.elements.dish).filter(function (checkbox) { return checkbox.checked; });
    // Get the selected dish IDs
    var selectedDishIds = selectedDishCheckboxes.map(function (checkbox) { return checkbox.value; });
    // Use the dish IDs to add the dishes to the order or perform any other necessary actions
    console.log("Selected Dish IDs:", selectedDishIds);
    var newDishes = MenuT.filter(function (dish) { return selectedDishIds.includes(String(dish.idDishe)); });
    var openOrder = OrdersT.find(function (order) { var _a; return ((_a = order.table) === null || _a === void 0 ? void 0 : _a.idTable) === CurrentTableID && order.status === true; });
    if (openOrder) {
        (_a = openOrder.dishes).push.apply(_a, newDishes);
    }
    renderCurrentOrder();
    // Reset the form (optional)
    event.target.reset();
}
function handleDeleteDish() { }
function handleAddDish() {
    debugger;
    var TableMenueHtml = document.getElementById("TableMenueForm");
    if (TableMenueHtml)
        TableMenueHtml.style.display = 'block';
}
function handleAddOrder() {
    // Logic to create a new order
    debugger;
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
var tablesT = getTablesForTablepage();
var OrdersT = getOrdersForTablepage();
var MenuT = getDishesForTablepage(); // menu- All dishes
var CurrentTableID = getCurrentTableIDJason();
var currentTable = tablesT === null || tablesT === void 0 ? void 0 : tablesT.find(function (table) { return (table === null || table === void 0 ? void 0 : table.idTable) === CurrentTableID; });
var orderStatus = checkIfHaveOpenOrder();
if (orderStatus == false) {
    var addOrderContainer = document.getElementById("AddOrderContainer");
    if (addOrderContainer) {
        var html = "<button class=\"AddNewOrder\" type=\"button\" onclick=\"handleAddOrder()\">Add New Order</button>";
        addOrderContainer.innerHTML = html;
    }
}
renderTableDetails();
console.log(tablesT);
