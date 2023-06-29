//entities:
//Tables, Order, Dishes
//return a random complex number as string
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
//table number with number of people sitting on it
var Table = /** @class */ (function () {
    function Table(tableNumbe, capacity, chatch) {
        this.tableNumbe = tableNumbe;
        this.capacity = capacity;
        this.chatch = chatch;
    }
    return Table;
}());
var Dish = /** @class */ (function () {
    function Dish(disgName, img, price, status, description) {
        this.disgName = disgName;
        this.img = img;
        this.price = price;
        this.status = status;
        this.description = description;
        this.uidDishe = Number(uid());
    }
    return Dish;
}());
//all the dishes for one table
var Order = /** @class */ (function () {
    function Order(table, dishes, status) {
        this.table = table;
        this.dishes = dishes;
        this.status = status;
        this.uidOrder = Number(uid());
    }
    Order.prototype.openTable = function () {
        //add new order
        try {
            if (!this.table.tableNumbe)
                throw new Error("no table catched");
            //3 btns -> add, del, close
            return (this.table.chatch = true);
        }
        catch (error) {
            console.error(error);
        }
    };
    Order.prototype.addDish = function (table, dish) {
        //add dish to order array
        try {
            if (!table.chatch)
                throw new Error("not an open table");
            order.push(dish);
        }
        catch (error) {
            console.error(error);
        }
    };
    Order.prototype.deletDish = function () {
        //delet dish from order array
    };
    Order.prototype.closeOrder = function () {
        // calc sum of dises price
        this.status = false;
    };
    return Order;
}());
