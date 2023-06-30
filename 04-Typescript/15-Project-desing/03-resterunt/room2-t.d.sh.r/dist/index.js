//entities:
//Tables, Order, Dishes
//no need for unic ids!!
// the table class will contain the order class
//the table class will have the option to add or delet an order
//the table class will have the option to open or closed the table (t-open, f-closed) 
var Table = /** @class */ (function () {
    function Table(tableNumber, catched, order) {
        this.tableNumber = tableNumber;
        this.catched = catched;
    }
    Table.prototype.openTable = function () {
        //the function return that the table is catched (=true)
        try {
            if (!this.tableNumber)
                throw new Error("no table catched");
            //3 btns -> add, del, close
            this.catched = true; // the table is now open
        }
        catch (error) {
            console.error(error);
        }
    };
    //to add dish to an order, we need the specific order and the dish to add
    Table.prototype.addDish = function (dish, order) {
        //add dish to order array
        try {
            if (!order)
                throw new Error("no order picked");
            if (!dish)
                throw new Error("not a dish");
            order.push(dish);
        }
        catch (error) {
            console.error(error);
        }
    };
    Table.prototype.deletDish = function () {
        //delet dish from order array
    };
    Table.prototype.closeOrder = function () {
        //close the order and return the calcolat of all dises price in the order (sum of the order)
        this.status = false;
    };
    return Table;
}());
//the order class will contain the dish class
var Order = /** @class */ (function () {
    function Order(dishes) {
        this.dishes = dishes;
    }
    return Order;
}());
var ordersArray = []; //contain all the dishes in a spesific order
//the Dish class will contain the info of the dish
var Dish = /** @class */ (function () {
    function Dish(dishName, img, price, description) {
        this.dishName = dishName;
        this.img = img;
        this.price = price;
        this.description = description;
    }
    return Dish;
}());
//creat some dished
var pastaRed = new Dish("pastaRed", "https://foodhub.scene7.com/is/image/woolworthsltdprod/Easy-chicken-and-bacon-pasta:Desktop-1300x658", 26, "red pasta with bazil");
var pastaMilk = new Dish("pastaMilk", "https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-RECIPE-CARD2.jpg", 26, "pasta with milk");
var pizzaOnion = new Dish("pizzaOnion", "https://pizzatoday.com/wp-content/uploads/2020/05/OnionPizza-1.jpg", 35, "pizza with onions");
var pizzaOliv = new Dish("pizzaOliv", "https://images.squarespace-cdn.com/content/v1/55370317e4b047f1053ee431/1546891998774-XFFPMCUA4MAQ5251Y5TA/ke17ZwdGBToddI8pDm48kEKeeVwguwXFnn1ZDuv86ikUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2sPGQHE4gTOo1QfbaGNmWRT3ltfHJNtU0FQBDPzwxb0xkOpdljO7Z-5qh0zg85Jnj/Loaded+Olive+Pizza?format=original", 30, "pizza with olives");
var dishes = [pastaRed, pastaMilk, pizzaOliv, pizzaOnion]; //contain the information about all dishes
