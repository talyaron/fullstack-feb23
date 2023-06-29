var Table = /** @class */ (function () {
    function Table(order) {
        this.order = order;
        this.occupide = false;
        this.id = Math.random() * 10;
    }
    Table.prototype.setOccupide = function () {
        this.occupide = !this.occupide;
    };
    return Table;
}());
var tables = [];
var Order = /** @class */ (function () {
    function Order(tableOrder, phoneNum) {
        this.tableOrder = tableOrder;
        this.phoneNum = phoneNum;
        this.totalPayment = 0;
        this.id = Math.random() * 10000;
    }
    Order.prototype.calculatePayment = function () {
        var _this = this;
        try {
            if (this.tableOrder === null)
                throw new Error();
            this.tableOrder.forEach(function (dish) {
                _this.totalPayment += dish.price;
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    return Order;
}());
var orders = [];
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
var dishes = [];
function renderMain(rootElement) {
    try {
        var html = "<h2>" + new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear() + "</h2>\n        <form onclick=\"handleFormSelect(event)\">\n        <input type=\"button\" id=\"newOrder\" value=\"New Order\">\n        <input type=\"button\" id=\"\"OpensOrders\" value=\"Opens Orders\">\n        <input type=\"button\" id=\"DishManaging\" value=\"Dish Managing\">\n        </form>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderMain(document.querySelector("#main"));
