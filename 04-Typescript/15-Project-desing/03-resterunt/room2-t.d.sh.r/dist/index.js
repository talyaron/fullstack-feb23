//entities:
//Tables, Order, Dishes
//no need for unic ids!!
//the table class will contain the order class
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
            this.catched = true; // the table is now open
            // render 3 btns -> add, del, close
        }
        catch (error) {
            console.error(error);
        }
    };
    //to add dish to an order, we need the specific order and the dish to add
    Table.prototype.addDish = function (order, dish) {
        //add dish to order array
        try {
            if (!order)
                throw new Error("no order");
            if (!dish)
                throw new Error("not a dish");
            order.push(dish);
        }
        catch (error) {
            console.error(error);
        }
    };
    Table.prototype.deletDish = function (order, dish) {
        //delet dish from order array
        try {
            if (!order)
                throw new Error('cant find order');
            if (!dish)
                throw new Error('cant find dish');
            order = order.filter(function (e) { return e !== dish; });
        }
        catch (error) {
            console.error(error);
        }
    };
    Table.prototype.closeTable = function () {
        //close the table and the order and return the calcolat of all dises price in the order (sum of the order)
        this.catched = false;
    };
    return Table;
}());
var tables = [
    new Table(1, false),
    new Table(2, false),
    new Table(3, false),
    new Table(4, false)
];
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
//------view------------------------
//renderTable --> at open screen
function renderTable(divName) {
    var html = "";
    html += tables.map(function (table) {
        return "<div class=\"table\" id=\"table" + table.tableNumber + "\">" + table.tableNumber + "</div>";
    }).join('');
    divName.innerHTML = html;
}
var tablesDiv = document.querySelector(".tables");
renderTable(tablesDiv);
///Table Event Listener
var thisTable;
var tableDiv = document.querySelectorAll(".table");
tableDiv.forEach(function (item, idx) {
    item.addEventListener('click', function () {
        var result = tables.find(function (_a) {
            var tableNumber = _a.tableNumber;
            return tableNumber === idx + 1;
        });
        if (!result.catched) {
            result.openTable();
        }
        else
            result.closeTable();
        thisTable = result;
        renderMenu();
    });
});
//renderMenu --> after chosing a table and click add-btn
//render the menu to screen and call the addDish to add a dish to the order
function renderMenu() {
    console.log(thisTable);
    tablesDiv.innerHTML = "\n<div class=\"menu\"><h2>Table number " + thisTable.tableNumber + " Menu</h2><table>\n<tr><th>Name</th><th>Image</th><th>Price</th><th>Description</th></tr>\n\n" + dishes.map(function (dish) {
        return "\n<tr><td>" + dish.dishName + " </td><td><img class=\"dishImage\" src=\"" + dish.img + " \"></td>\n    <td> " + dish.price + "</td><td> " + dish.description + "</td>\n    ";
    }).join('') + "\n</table>\n\n";
}
//renderDelet --> after chosing a table and click del-btn
