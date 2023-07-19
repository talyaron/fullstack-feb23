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
//------------------------------------Table----------------------------------------
var Table = /** @class */ (function () {
    function Table(numOfTable, numOfDiners) {
        if (numOfDiners === void 0) { numOfDiners = 1; }
        this.numOfTable = numOfTable;
        this.numOfDiners = numOfDiners;
    }
    return Table;
}());
var tables = [];
for (var i = 0; i < 11; i++) {
    var newTable = new Table(i, 1);
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
//-----------------------------------------function------------------------------------
function onLoad() {
}
function renderTables() {
    var tablesDiv = document.querySelector("#tablesDiv");
    tables.forEach(function (table) {
        tablesDiv.innerHTML += "\n        <div table=" + table.numOfTable + " class=\"table\">\n        <button onclick=\"addDiner\">+</button>\n        <h3 class=\"numberOfDiner\">" + table.numOfDiners + "</h3>\n        <button onclick=\"reduceDiner\">-</button>\n      </div>\n        ";
    });
}
renderTables();
