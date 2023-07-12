var Dish = /** @class */ (function () {
    function Dish(name, price) {
        this.name = name;
        this.price = price;
    }
    return Dish;
}());
var Order = /** @class */ (function () {
    function Order(tableNumber) {
        this.tableNumber = tableNumber;
        this.items = [];
    }
    Order.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Order.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    Order.prototype.getSum = function () {
        var sum = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            sum += item.price;
        }
        return sum;
    };
    return Order;
}());
var Table = /** @class */ (function () {
    function Table(tableNumber, capacity) {
        this.tableNumber = tableNumber;
        this.capacity = capacity;
        this.order = null;
    }
    Table.prototype.isAvailable = function () {
        return !this.order || this.order.items.length === 0;
    };
    Table.prototype.isFull = function () {
        return this.order && this.order.items.length === this.capacity;
    };
    Table.prototype.createOrder = function () {
        if (this.isAvailable()) {
            this.order = new Order(this.tableNumber);
        }
    };
    Table.prototype.addItemToOrder = function (item) {
        if (this.order && !this.isFull()) {
            this.order.addItem(item);
        }
    };
    Table.prototype.removeItemFromOrder = function (item) {
        if (this.order) {
            this.order.removeItem(item);
        }
    };
    Table.prototype.getOrderSummary = function () {
        if (this.order) {
            var summary = "Table " + this.tableNumber + " - Order Summary:\n";
            for (var _i = 0, _a = this.order.items; _i < _a.length; _i++) {
                var item = _a[_i];
                summary += item.name + " - $" + item.price + "\n";
            }
            summary += "Total: $" + this.order.getSum();
            return summary;
        }
        return "Table " + this.tableNumber + " - No order yet.";
    };
    return Table;
}());
var table1 = new Table(1, 4);
var table2 = new Table(2, 2);
var table3 = new Table(3, 6);
var table4 = new Table(4, 3);
var table5 = new Table(5, 5);
var table6 = new Table(6, 4);
//objects
var burger = new Dish("Burger", 10);
var salad = new Dish("Salad", 5);
var drink = new Dish("Drink", 3);
//ADD
table1.createOrder();
table1.addItemToOrder(burger);
table1.addItemToOrder(salad);
// Handle button click event to add selected items to the order summary and calculate the sum
var addButton = document.querySelector('#add-button');
addButton.addEventListener('click', calculateOrderSum);
function calculateOrderSum() {
    var menuItems = document.querySelectorAll('#menu input[type="checkbox"]:checked');
    var orderSummary = document.querySelector('#');
    var sumElement = document.querySelector('#sum');
    if (menuItems.length > 0) {
        var sum_1 = 0;
        orderSummary.innerHTML = '<ul>';
        menuItems.forEach(function (item) {
            var price = parseFloat(item.getAttribute('data-price'));
            if (!isNaN(price)) {
                sum_1 += price;
                orderSummary.innerHTML += "<li>" + item.value + "</li>";
            }
        });
        orderSummary.innerHTML += '</ul>';
        sumElement.textContent = "$" + sum_1.toFixed(2);
    }
}
