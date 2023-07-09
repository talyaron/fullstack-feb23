//main ts
function RenderHomePage() {
    try {
        var container_1 = document.getElementById("tablesContainer");
        if (!container_1)
            throw new Error("can not find tableContainer html elment");
        MainTables.forEach(function (table) {
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
function getTablesForMainPage() {
    try {
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
function getOrdersForMainPage() {
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
function GoTablePage(idTable) {
    var tableIDJson = JSON.stringify(idTable);
    localStorage.setItem('tableID', tableIDJson);
    window.location.href = './Table.html';
}
function colorByTableOrderStatus() {
    try {
        var tableButtons = document.querySelectorAll(".table-button");
        if (MainOrders) {
            // Iterate through each table button
            tableButtons.forEach(function (button) {
                var tableId = parseInt(button.innerText.split(" ")[1]); // Extract the table ID from the button text
                button.style.ba = "6px solid red";
                // Find the corresponding order for the table
                var order = MainOrders.find(function (order) { var _a; return ((_a = order.table) === null || _a === void 0 ? void 0 : _a.idTable) === tableId && order.status == true; });
                if (order) {
                    // Table has an order, set button color to red
                    button.style.border = "6px solid red";
                }
                else {
                    // Table is available, set button color to green
                    button.style.border = "6px solid green";
                }
            });
        }
        else
            button.style.border = "6px solid red";
    }
    catch (error) {
        console.error(error);
    }
}
function hendleShowTotalByDate() {
    window.location.href = './TotalByDate.html';
}
function hendleEditMenu() {
    window.location.href = './EditMenu.html';
}
var MainOrders = getOrdersForMainPage();
var MainTables = getTablesForMainPage();
RenderHomePage();
colorByTableOrderStatus();
