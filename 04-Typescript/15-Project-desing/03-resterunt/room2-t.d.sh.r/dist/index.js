//entities:
//Tables, Order, Dishes
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Table = /** @class */ (function () {
    function Table(capacity) {
        this.capacity = capacity;
        this.uidTable = Number(uid());
    }
    Table.prototype.getTable = function () {
        return this.capacity;
    };
    return Table;
}());
var Dishe = /** @class */ (function () {
    function Dishe(name, img, price, status, description) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.status = status;
        this.description = description;
        this.uidDishe = Number(uid());
    }
    return Dishe;
}());
var Order = /** @class */ (function () {
    function Order(table, dishes, status) {
        this.table = table;
        this.dishes = dishes;
        this.status = status;
        this.uidOrder = Number(uid());
    }
    Order.prototype.addOrder = function () {
        //add new order
    };
    Order.prototype.editOrder = function (action, dishe) {
        //edit dishe
    };
    Order.prototype.closeOrder = function () {
        // calc sum of dises price
        this.status = false;
    };
    return Order;
}());
