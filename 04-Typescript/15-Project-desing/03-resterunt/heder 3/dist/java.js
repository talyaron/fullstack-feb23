// Design the data entities (class Modle). Tables, Order, Dishes, including the methods
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var dishes = /** @class */ (function () {
    function dishes(dish, id, price) {
        this.dish = dish;
        this.id = id;
        this.price = price;
        this.id = uid();
    }
    return dishes;
}());
var order = /** @class */ (function () {
    function order(typeOfDish, id) {
        this.typeOfDish = typeOfDish;
        this.id = id;
        this.id = uid();
    }
    return order;
}());
var table = /** @class */ (function () {
    function table(order, id) {
        this.order = order;
        this.id = id;
        this.id = uid();
    }
    return table;
}());
var wrapper = document.querySelector(".wrapper");
