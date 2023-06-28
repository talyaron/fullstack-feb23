//Tables, Order, Dishes
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Table = /** @class */ (function () {
    function Table(capacity) {
        this.capacity = capacity;
        this.uidTable = Number(uid());
    }
    return Table;
}());
var Dishe = /** @class */ (function () {
    function Dishe(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.uidDishe = Number(uid());
    }
    return Dishe;
}());
var Order = /** @class */ (function () {
    function Order(table, dishe) {
        this.table = table;
        this.dishe = dishe;
        this.uidOrder = Number(uid());
    }
    return Order;
}());
