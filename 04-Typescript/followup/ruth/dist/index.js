//------------------------------------Dish----------------------------------------
var Dish = /** @class */ (function () {
    function Dish(dishName, price, dishImg, dishNumber) {
        if (dishNumber === void 0) { dishNumber = 1; }
        this.dishName = dishName;
        this.price = price;
        this.dishImg = dishImg;
        this.dishNumber = dishNumber;
    }
    return Dish;
}());
var dishesArray = [
    new Dish("pasta", 42, "https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_1280.jpg"),
    new Dish("sushi", 48, "https://cdn.pixabay.com/photo/2017/10/16/09/00/sushi-2856544_1280.jpg"),
    new Dish("salad-Japanese", 55, "https://cdn.pixabay.com/photo/2014/10/03/15/41/salad-471861_1280.jpg", 4),
    new Dish("ramen", 65, "https://cdn.pixabay.com/photo/2017/04/04/00/36/ramen-2199962_1280.jpg", 4),
    new Dish("bread", 22, "https://cdn.pixabay.com/photo/2019/05/06/14/24/bread-4183225_1280.jpg", 4),
];
var emptyDishArray = [];
function addDishToOrder(dishName, dishNumber) {
    var newOrderDish = dishesArray.find(function (dish) { return dish.dishName == dishName; });
    if (newOrderDish)
        newOrderDish.dishNumber = dishNumber;
    return newOrderDish;
}
//------------------------------------Table----------------------------------------
var Table = /** @class */ (function () {
    function Table(numOfTable, numOfDiners) {
        if (numOfDiners === void 0) { numOfDiners = 0; }
        this.numOfTable = numOfTable;
        this.numOfDiners = numOfDiners;
    }
    return Table;
}());
var tables = [];
for (var i = 1; i < 11; i++) {
    var newTable = new Table(i);
    tables.push(newTable);
}
//---------------------------------Table Order Handler-------------------------------
var TableOrderHandler = /** @class */ (function () {
    function TableOrderHandler(table, dishesOrdered) {
        if (dishesOrdered === void 0) { dishesOrdered = emptyDishArray; }
        this.table = table;
        this.dishesOrdered = dishesOrdered;
    }
    return TableOrderHandler;
}());
var tablesOrder = [];
tables.forEach(function (tbl) {
    var newOrder = new TableOrderHandler(tbl, emptyDishArray);
    tablesOrder.push(newOrder);
});
//-----------------------------------------function------------------------------------
function renderTables() {
    var tablesDiv = document.querySelector("#tablesDiv");
    tables.forEach(function (table) {
        tablesDiv.innerHTML += "\n        <div table=" + table.numOfTable + " class=\"table\" onclick=\"openMenu(event)\" >\n        <h3 class=\"numOfTable\">" + table.numOfTable + "</h3>\n        <button onclick=\"addDiner(event)\">+</button>\n        <h3 class=\"numberOfDiner\">" + table.numOfDiners + "</h3>\n        <button onclick=\"reduceDiner(event)\">-</button>\n      </div>\n        ";
    });
}
function addDiner(event) {
    var numOfTable = event.target.parentNode.attributes.table.value;
    var numOfDiners = event.target.parentNode.querySelector(".numberOfDiner");
    numOfDiners.innerHTML++;
    tablesOrder.find(function (table) { return table.table.numOfTable == numOfTable; }).table
        .numOfDiners++;
}
function reduceDiner(event) {
    var numOfTable = event.target.parentNode.attributes.table.value;
    var numOfDiners = event.target.parentNode.querySelector(".numberOfDiner");
    if (numOfDiners.innerHTML == 0)
        return;
    else
        numOfDiners.innerHTML--;
    tablesOrder.find(function (table) { return table.table.numOfTable == numOfTable; }).table
        .numOfDiners--;
}
//onclick table
function openMenu(event) {
    var numChosenTable = event.target.attributes.table.value;
    console.log(numChosenTable);
    var chosenTable = tablesOrder.find(function (tbl) { return tbl.table.numOfTable == numChosenTable; });
    console.log(chosenTable);
    var chosenTableString = JSON.stringify(chosenTable);
    localStorage.setItem("chosenTable", chosenTableString);
    window.location.href = "./pages/menu.html";
}
function renderMenu() {
    var menuDiv = document.querySelector("#menu");
    dishesArray.forEach(function (dish) {
        menuDiv.innerHTML += "\n          <div class =\"dish\" name = " + dish.dishName + "> \n          <img src=" + dish.dishImg + " alt=\"\">\n          <h3 class=\"dishName\"> " + dish.dishName + " </h3>\n          <h3> " + dish.price + "$ </h3>\n        <button onclick=\"addDishToOrderList(event)\"><span class=\"material-symbols-outlined\"> add_box </span></button>\n          </div>\n  ";
    });
}
function addDishToOrderList(event) {
    var dishName = event.target.parentNode.parentNode.attributes.name.value;
    var orderList = document.querySelector(".orderList");
    var chosenDish = dishesArray.find(function (dish) { return dish.dishName == dishName; });
    orderList.innerHTML += "\n    <div class = \"orderListItem\" name = " + chosenDish.dishName + ">\n        <img src=" + chosenDish.dishImg + " alt=\"\">\n        <h3 class=\"dishName\"> " + chosenDish.dishName + " </h3>\n        <input type=\"number\" value=\"1\" min=\"1\" placeholder=\"amount\"> </input>\n        <h3> " + chosenDish.price + "$ </h3>\n        <button onclick=\"removeDishToOrderList(event)\"><span class=\"material-symbols-outlined\"> delete </span></button>\n    </div>\n    ";
}
function removeDishToOrderList(event) {
    var chosenDish = event.target.parentNode.parentNode;
    chosenDish.remove();
}
function addOrderToList() {
    var _a;
    var ordersDiv = (_a = document.querySelector("#orderList")) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".orderListItem");
    ordersDiv === null || ordersDiv === void 0 ? void 0 : ordersDiv.forEach(function (item) {
        var _a;
        var dishOrder = addDishToOrder(item.attributes.name.value, (_a = item.querySelector("input")) === null || _a === void 0 ? void 0 : _a.valueAsNumber);
        var chosenTable = JSON.parse(localStorage.getItem("chosenTable"));
        chosenTable.dishesOrdered.push(dishOrder);
    });
    window.location.href = "../home.html";
}
