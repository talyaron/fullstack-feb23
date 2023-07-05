//menu - class
var Dishe = /** @class */ (function () {
    function Dishe(name, price, image, description) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return Dishe;
}());
;
var dishes = [];
// Create sushi dishes and add them to the menu
var sushi1 = new Dishe('California Roll', 32.99, './dist/image/sushi3.webp', 'Fresh crab, avocado, and cucumber rolled in rice and seaweed.');
var sushi2 = new Dishe('Spicy Tuna Roll', 100.99, './dist/image/sushi.webp', 'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.');
var sushi3 = new Dishe('Salmon Nigiri', 60.99, './dist/image/sushi2.jpg', 'Fresh salmon slices served on a bed of rice.');
var sushi4 = new Dishe('California Roll', 62.99, './dist/image/sushi3.webp', 'Fresh crab, avocado, and cucumber rolled in rice and seaweed.');
var sushi5 = new Dishe('Spicy Tuna Roll', 80.99, './dist/image/sushi.webp', 'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.');
var sushi6 = new Dishe('Salmon Nigiri', 60.99, './dist/image/sushi2.jpg', 'Fresh salmon slices served on a bed of rice.');
var sushi7 = new Dishe('California Roll', 92.99, './dist/image/sushi3.webp', 'Fresh crab, avocado, and cucumber rolled in rice and seaweed.');
var sushi8 = new Dishe('Spicy Tuna Roll', 70.99, './dist/image/sushi.webp', 'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.');
var sushi9 = new Dishe('Salmon Nigiri', 60.99, './dist/image/sushi2.jpg', 'Fresh salmon slices served on a bed of rice.');
dishes.push(sushi1, sushi2, sushi3, sushi4, sushi5, sushi6, sushi7, sushi8, sushi9);
console.log(dishes);
//order - class
var Order = /** @class */ (function () {
    function Order(dishs, phoneNum) {
        this.dishs = dishs;
        this.phoneNum = phoneNum;
        this.totalPayment = 0;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return Order;
}());
;
var orders = [];
//select teble - class
var Table = /** @class */ (function () {
    function Table(tableNum, orders) {
        this.tableNum = tableNum;
        this.orders = orders;
        this.occupide = false;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    Table.prototype.setOccupide = function () {
        this.occupide = !this.occupide;
    };
    return Table;
}());
;
var tables = [];
var table1 = new Table('table 1', []);
var table2 = new Table('table 2', []);
var table3 = new Table('table 3', []);
var table4 = new Table('table 4', []);
var table5 = new Table('table 5', []);
var table6 = new Table('table 6', []);
tables.push(table1, table2, table3, table4, table5, table6);
renderregisterControlers(document.querySelector("#register"));
function renderregisterControlers(rootElement) {
    try {
        var html = "<form onsubmit=\"handleRegisterOrder(event)\">\n               <input type=\"string\" name=\"phoneNum\" placeholder=\"phone number\" required>\n          <select name=\"Table\" id=\"Table\" required> \n          " + tables.map(function (table) {
            return "<option value=\"string\">" + table.tableNum + "</option>";
        }) + ";\n          </select>\n             <button type=\"submit\">send order</button>\n     </form>\n     <form onclick=\"handleBack(event)\">\n        <input type=\"button\" id=\"back\" value=\"Back\">\n     </form>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
;
function renderMain(dishes, rootElement) {
    try {
        var html = "<div class=\"main\">\n      " + dishes.map(function (dishe) {
            return "<div class=\"dish\">\n            <img src=\"" + dishe.image + "\" alt=\"" + dishe.name + "\">\n            <div class=\"dish-text\">  \n              <h3>" + dishe.name + "</h3>\n              <p>" + dishe.description + "</p>\n              <p>" + dishe.price + "</p>\n           </div>\n           <button onclick=\"handleAddToOrder('" + dishe.id + "')\">add to order</button>\n       </div>";
        }) + ";\n          </div> \n       </div>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
;
function handleAddToOrder(event) {
    try {
        event.preventDefault();
        var dish = event.target.elements.dish.value;
        orders.push(dish);
        console.log(dish);
    }
    catch (error) {
        console.error(error);
    }
}
;
function handleRegisterOrder(event) {
    try {
        event.preventDefault();
        var phoneNum = event.target.elements.phoneNum.value;
        var table = event.target.elements.Table.value;
        var order = new Order(table, phoneNum);
        orders.push(order);
        renderMain(dishes, document.querySelector("#main"));
    }
    catch (error) {
        console.error(error);
    }
}
;
function handleBack(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        location.href = "index.html";
    }
    catch (error) {
        console.error(error);
    }
}
;
