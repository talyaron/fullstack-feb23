// MVC: Mdel (data, class), View (DOM), Controlers
// 2) Design View
// 3) build control-view (DOM + controls), for all pages ( split the jobs between the team-members)
// 4) pass data bewtween pages
// 5) make it work
// 6) make beutifull SCSS with BEM
// 1) Design the data entities (class Modle). Tables, Order, Dishes, including the methods
// Objective: Create a web application for a restaurant that allows customers to view the menu, place orders, and manage tables.
// The number of tables in the restaurant
var Tables = /** @class */ (function () {
    function Tables(numberOfTable, placeAvailable) {
        this.numberOfTable = numberOfTable;
        this.placeAvailable = placeAvailable;
    }
    return Tables;
}());
var dishes = [];
// Variety of dishes in the restaurant
var Dishes = /** @class */ (function () {
    function Dishes(dishName, numberOfDishes, price) {
        this.dishName = dishName;
        this.numberOfDishes = numberOfDishes;
        this.price = price;
    }
    // method to calculate the price of dishes selected
    Dishes.prototype.calculation = function () {
        var numberOfDishesPrice = this.numberOfDishes * this.price;
        return numberOfDishesPrice;
    };
    return Dishes;
}());
//  The number of people in a table
var Orders = /** @class */ (function () {
    function Orders(dish, totalprice, tables) {
        this.dish = dish;
        this.totalprice = totalprice;
        this.tables = tables;
        totalprice = this.dish.calculation();
    }
    return Orders;
}());
function tableStatus(tableId) {
    var table = document.querySelector(tableId);
    var isOcuupied = table.classList.toggle('occupied');
    if (isOcuupied) {
        table.style.backgroundColor = 'red';
    }
    else {
        table.style.backgroundColor = 'green';
    }
}
