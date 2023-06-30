//entities:
//Tables, Order, Dishes
//return a random complex number as string
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
//table number with number of people sitting on it
var Table = /** @class */ (function () {
    function Table(tableNumbe, capacity, catched) {
        this.tableNumbe = tableNumbe;
        this.capacity = capacity;
        this.catched = catched;
    }
    return Table;
}());
var Dish = /** @class */ (function () {
    function Dish(dishName, img, price, status, description) {
        this.dishName = dishName;
        this.img = img;
        this.price = price;
        this.status = status;
        this.description = description;
    }
    return Dish;
}());
var dishes = [];
var order = [];
//all the dishes for one table
var Order = /** @class */ (function () {
    function Order(table, dishes, status) {
        this.table = table;
        this.dishes = dishes;
        this.status = status;
        this.uidOrder = Number(uid());
    }
    Order.prototype.openTable = function () {
        //the function return that the table is catched (=true)
        try {
            if (!this.table.tableNumbe)
                throw new Error("no table catched");
            //3 btns -> add, del, close
            return (this.table.catched = true);
        }
        catch (error) {
            console.error(error);
        }
    };
    Order.prototype.addDish = function (table, dish, order) {
        //add dish to order array
        //need to get the table num and to find in it the uid of the order to 
        try {
            if (!table.catched)
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
        //close the order and return the calcolat of all dises price in the order (sum of the order)
        this.status = false;
    };
    return Order;
}());
