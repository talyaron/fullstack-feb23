var Dish = /** @class */ (function () {
    function Dish(name, price, img, description) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.description = description;
    }
    Dish.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Dish;
}());
var discountList = ["05408", "657678"];
var w1 = new Dish("Pasta", 22, "feerwe", "g");
var w2 = new Dish("Pizza", 34, "feerwe", "g");
var w3 = new Dish("Steak", 52, "feerwe", "g");
var w4 = new Dish("Rice", 62, "feerwe", "g");
var w5 = new Dish("Bagel", 53, "feerwe", "g");
var w6 = new Dish("Salad", 39, "feerwe", "g");
var dishes = [w1, w2, w3, w4, w5, w6];
var tableNum = 1;
var Order = /** @class */ (function () {
    function Order(tableOrder, phoneNum) {
        this.tableOrder = tableOrder;
        this.phoneNum = phoneNum;
        this.totalPayment = 0;
        this.orderStatus = "In process";
        this.discount = false;
        this.id = Math.floor(Math.random() * 10000);
        this.calculatePayment();
    }
    Order.prototype.calculatePayment = function () {
        var _this = this;
        try {
            console.log(this);
            if (this.tableOrder === null)
                throw new Error();
            this.totalPayment = 0;
            this.tableOrder.forEach(function (dish) {
                _this.totalPayment += dish.price;
            });
            if (discountList.find(function (pNum) { return pNum == _this.phoneNum; })) {
                this.totalPayment *= 0.95;
                this.discount = true;
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    Order.prototype.setServe = function (status) {
        try {
            if (!status)
                throw new Error("Wrong status");
            if (status == "In process")
                this.orderStatus = status;
            else
                this.orderStatus = "Served";
        }
        catch (error) {
            console.error(error);
        }
    };
    return Order;
}());
var orders = [
    new Order([w1, w2, w3], "05408"),
    new Order([w5, w3, w3, w2, w3], "54325432"),
    new Order([w6, w4, w3], "4532"),
    new Order([w2, w3], "657678"),
    new Order([w1, w6, w5], "25"),
    new Order([w3, w1, w6, w5], "25"),
    new Order([w1, w6, w2, w5], "25"),
];
var Table = /** @class */ (function () {
    function Table(order) {
        this.order = order;
        this.occupide = false;
        this.id = tableNum++;
        if (order)
            this.setOccupide();
    }
    Table.prototype.setOccupide = function () {
        this.occupide = !this.occupide;
    };
    return Table;
}());
var tablesList = [];
var numOfTables = 15;
for (var i = 0; i < numOfTables; i++) {
    tablesList.push(new Table(null));
}
var _loop_1 = function (i) {
    var num = Math.floor(Math.random() * numOfTables + 1);
    if (tablesList.find(function (table) { return table.id == num && !table.occupide; }))
        tablesList[num - 1].occupide = true;
    tablesList[num - 1].order = orders[i];
};
for (var i = 0; i < orders.length; i++) {
    _loop_1(i);
}
// //get tablesList from localstorage
// const tablesString = localStorage.getItem('tablesList');
// console.log(tablesString);
// const tableList:Table[] = [];
// if (tablesString) {
//     //convert string to array;
//     const tablesArray = JSON.parse(tablesString);
//     console.log(tablesArray);
//     tablesArray.forEach(t => tableList.push(new Table(t.order)));
//     debugger;
//     renderTables(document.querySelector("#tablesMap"));
// }
var activeTableId;
function renderOpen(rootElement) {
    try {
        var html = "<h2><p>Open Orders</P>" + new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear() + "</h2>\n        <form onclick=\"handleBack(event)\">\n        <input type=\"button\" id=\"back\" value=\"Back\">\n        </form>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderTables(rootElement) {
    try {
        var html_1 = "<form onclick=\"handleOpenTableOrder(event)\">";
        console.log(tablesList);
        tablesList.forEach(function (singleTable) {
            if (singleTable.occupide) {
                html_1 += "<input type=\"button\" id=\"table" + singleTable.id + "\" class=\"red\" value=\"" + singleTable.id + "\">";
            }
            else {
                html_1 += "<input type=\"button\" id=\"table" + singleTable.id + "\" class=\"green\" value=\"" + singleTable.id + "\">";
            }
        });
        // <input type="button" id="back" value="Back">
        // </form>`;
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function handleBack(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        location.href = "index.html";
    }
    catch (error) {
        console.error(error);
    }
}
function handleOpenTableOrder(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        console.dir(tablesList);
        var tableID_1 = ev.target.value;
        activeTableId = Number(tableID_1);
        renderBill(document.querySelector("#bill"), tablesList.find(function (elem) { return elem.id.toString() == tableID_1; }));
    }
    catch (error) {
        console.error(error);
    }
}
function handleBillEvent(ev) {
    var _a, _b, _c, _d;
    try {
        ev.preventDefault();
        console.dir(ev);
        var action = ev.target.id;
        var table = tablesList.find(function (t) { return t.id == activeTableId; });
        if (action === "orederServed") {
            if (!table || !table.order)
                throw new Error("NO open Bill");
            table.order.setServe("Served");
            renderBill(document.querySelector("#bill"), table);
        }
        else if (action === "close") {
            if (!table || !table.order)
                throw new Error("NO open Bill");
            var res = closeBill((_a = table === null || table === void 0 ? void 0 : table.order) === null || _a === void 0 ? void 0 : _a.totalPayment, Number(prompt("Enter Amount")));
            if (res) {
                table.setOccupide();
                table.order = null;
                alert("Bill is closed, Table is free");
                renderBill(document.querySelector("#bill"), undefined);
            }
        }
        else {
            var addDish_1 = prompt("Enter Dish name:");
            var dishToAdd = dishes.find(function (dish) { return dish.name == addDish_1; });
            if (dishToAdd) {
                (_b = table === null || table === void 0 ? void 0 : table.order) === null || _b === void 0 ? void 0 : _b.tableOrder.push(dishToAdd);
                alert("Dish added to table order");
                (_c = table === null || table === void 0 ? void 0 : table.order) === null || _c === void 0 ? void 0 : _c.calculatePayment();
                (_d = table === null || table === void 0 ? void 0 : table.order) === null || _d === void 0 ? void 0 : _d.setServe("In process");
                renderBill(document.querySelector("#bill"), table);
            }
            else {
                alert("No such dish");
            }
        }
        saveToLocalStorage(tablesList);
        renderTables(document.querySelector("#tablesMap"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderBill(rootElement, table) {
    try {
        if (!rootElement)
            throw new Error("No element");
        var html_2 = '';
        if (table !== undefined && table) {
            var tableId = table.id;
            html_2 = "<h3>Table " + tableId + " Order</h3>\n            <table style=\"width:100%\">\n            <tr>\n            <th>Dish name</th>\n            <th>Price</th>\n            </tr>";
            if (!table.order)
                throw new Error("No dishes");
            table.order.tableOrder.forEach(function (dish) {
                html_2 += "<tr>\n            <td>" + dish.name + "</td>\n            <td>" + dish.price + "</td>\n            </tr>";
            });
            if (table.order.discount) {
                html_2 += "<tr>\n                <td>Membership Discount</td>\n                <td>5%</td>\n                </tr>";
            }
            console.log(table.order);
            html_2 += "</table>\n            <h4>Total: " + table.order.totalPayment + "$</h4>\n            <h4>Order Status: " + table.order.orderStatus + "</h4>\n            <form onclick=\"handleBillEvent(event)\">\n            <div class=\"buttons\">\n            <input type=\"button\" id=\"close\" value=\"Pay Bill\">\n            <input type=\"button\" id=\"orederServed\" value=\"Order Served\">\n            <input type=\"button\" id=\"updateOrder\" value=\"Update Order\">\n            </div>\n            </form>";
        }
        rootElement.innerHTML = html_2;
    }
    catch (error) {
        console.error(error);
    }
}
function closeBill(total, payment) {
    try {
        if (total == undefined || payment == undefined)
            throw new Error("Missing amount");
        if (total - payment > 0)
            alert("Missing " + (total - payment) + "$ ");
        else {
            alert("Change is " + (payment - total) + "$");
            return true;
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function saveToLocalStorage(tablesList) {
    var tablesListJson = JSON.stringify(tablesList);
    localStorage.setItem('tablesList', tablesListJson);
}
renderOpen(document.querySelector("#mainOpen"));
renderTables(document.querySelector("#tablesMap"));
