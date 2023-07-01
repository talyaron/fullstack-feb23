//main ts
function RenderHomePage() {
    try {
        var container_1 = document.getElementById("tablesContainer");
        if (!container_1)
            throw new Error("can not find tableContainer html elment");
        tables.forEach(function (table) {
            var button = document.createElement("button");
            button.classList.add("table-button"); // Add the "table-button" class to the button
            button.innerText = table.tableName;
            button.addEventListener("click", function () {
                GoTablePage(table.idTable);
            });
            container_1.appendChild(button);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function getDataTablesFromJason(tables) {
    try {
        var tablesString = localStorage.getItem('tables');
        if (!tablesString) { // if there is not table on json , create one
            for (var index = 0; index < 5; index++) {
                tables.push(new Table(index + 1, "Table " + (index + 1).toString(), 4));
            }
            var tablesJson = JSON.stringify(tables);
            localStorage.setItem('tables', tablesJson);
            console.log(tables);
        }
        else {
            //get tables from localstorage
            //convert string to array;
            var tablesArray = JSON.parse(tablesString);
            console.log(tablesArray);
            tablesArray.forEach(function (table) {
                tables.push(new Table(table.idTable, table.tableName, table.capacity));
            });
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function getDataOrdersFromJson(orders) {
    try {
        var ordersString = localStorage.getItem('orders');
        if (!ordersString) {
            // No orders in JSON
        }
        else {
            var ordersArray = JSON.parse(ordersString);
            ordersArray.forEach(function (orderData) {
                // Create a new instance of the Order class using the parsed data
                var order = new Order(orderData.table, orderData.dishes, orderData.status);
                // Push the order to the orders array
                orders.push(order);
                // Render the order in HTML
                renderOrder(order);
            });
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var tables = [];
var orders = [];
getDataTablesFromJason(tables);
getDataOrdersFromJson(orders);
console.log(tables);
console.log(orders);
RenderHomePage();
