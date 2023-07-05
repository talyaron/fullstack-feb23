// MVC: Mdel (data, class), View (DOM), Controlers
// Objective: Create a web application for a restaurant that allows customers to view the menu, place orders, and manage tables.
// 1) Design the data entities (class Modle). Tables, Order, Dishes, including the methods
var id = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Tables = /** @class */ (function () {
    function Tables(numberTable, order) {
        this.numberTable = numberTable;
        this.order = order;
        this.id = id();
    }
    return Tables;
}());
var Dish = /** @class */ (function () {
    function Dish(dishName, notes) {
        this.dishName = dishName;
        this.notes = notes;
    }
    return Dish;
}());
var Orders = /** @class */ (function () {
    function Orders(table, dish) {
        this.table = table;
        this.dish = dish;
    }
    return Orders;
}());
