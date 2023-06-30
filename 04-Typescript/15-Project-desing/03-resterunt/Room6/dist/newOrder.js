//input: phone number
//צג מחיר
//button: send order
//menu - class
var Dishe = /** @class */ (function () {
    function Dishe(name, price, image, description) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
    return Dishe;
}());
var dishes = [];
// Create sushi dishes and add them to the menu
var sushi1 = new Dishe('California Roll', 12.99, './dist/image/sushi.webp', 'Fresh crab, avocado, and cucumber rolled in rice and seaweed.');
dishes.push(sushi1);
var sushi2 = new Dishe('Spicy Tuna Roll', 10.99, './dist/image/sushi.webp', 'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.');
dishes.push(sushi2);
var sushi3 = new Dishe('Salmon Nigiri', 6.99, './dist/image/sushi.webp', 'Fresh salmon slices served on a bed of rice.');
dishes.push(sushi3);
var sushi4 = new Dishe('California Roll', 12.99, './dist/image/sushi.webp', 'Fresh crab, avocado, and cucumber rolled in rice and seaweed.');
dishes.push(sushi4);
var sushi5 = new Dishe('Spicy Tuna Roll', 10.99, './dist/image/sushi.webp', 'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.');
dishes.push(sushi5);
var sushi6 = new Dishe('Salmon Nigiri', 6.99, './dist/image/sushi.webp', 'Fresh salmon slices served on a bed of rice.');
dishes.push(sushi6);
var sushi7 = new Dishe('California Roll', 12.99, './dist/image/sushi.webp', 'Fresh crab, avocado, and cucumber rolled in rice and seaweed.');
dishes.push(sushi7);
var sushi8 = new Dishe('Spicy Tuna Roll', 10.99, './dist/image/sushi.webp', 'Tuna, spicy mayo, and cucumber rolled in rice and seaweed.');
dishes.push(sushi8);
var sushi9 = new Dishe('Salmon Nigiri', 6.99, './dist/image/sushi.webp', 'Fresh salmon slices served on a bed of rice.');
dishes.push(sushi9);
console.log(dishes);
//order - class
var Order = /** @class */ (function () {
    function Order(tableOrder, phoneNum) {
        this.tableOrder = tableOrder;
        this.phoneNum = phoneNum;
        this.totalPayment = 0;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    //חישוב מחיר ההזמנה
    Order.prototype.calculatePayment = function () {
        var _this = this;
        try {
            if (this.tableOrder === null)
                throw new Error();
            this.tableOrder.forEach(function (dishe) {
                _this.totalPayment += dishe.price;
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    return Order;
}());
var orders = [];
//select teble - class
var Table = /** @class */ (function () {
    function Table(order) {
        this.order = order;
        this.occupide = false;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    Table.prototype.setOccupide = function () {
        this.occupide = !this.occupide;
    };
    return Table;
}());
var tables = [];
renderregisterControlers(document.querySelector("#register"));
function renderregisterControlers(rootElement) {
    try {
        var html = "<form onsubmit=\"handleRegisterOrder(event)\">\n            <input type=\"string\" name=\"phoneNum\" placeholder=\"phone number\" required>\n          <select name=\"Table\" id=\"Table\" required>\n             <option value=\"string\">Table 1</option>\n             <option value=\"string\">Table 2</option>\n             <option value=\"string\">Table 3</option>\n             <option value=\"string\">Table 4</option>\n             <option value=\"string\">Table 5</option>\n             <option value=\"string\">Table 6</option>\n          </select>\n          <button type=\"submit\">send order</button>\n         </form>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderMain(dishes, rootElement) {
    try {
        var html = "<div class=\"main\">\n         <form onsubmit=\"hendelOrder(event)\">\n          <div class=\"dish\">\n           " + dishes.map(function (dishe) {
            return "<div class=\"dish\">\n                      <img src=\"" + dishe.image + "\" alt=\"" + dishe.name + "\">\n                    <div class=\"dish-text\">  \n                      <h3>" + dishe.name + "</h3>\n                      <p>" + dishe.description + "</p>\n                      <p>" + dishe.price + "</p>\n                    </div>\n                   </div>";
        }) + ";\n          </div> \n             <button type=\"submit\">send order</button>\n         </form>\n       </div>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
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
function hendelOrder(event) {
    try {
        event.preventDefault();
        var image = event.target.elements.image.value;
        var name = event.target.elements.name.value;
        var description = event.target.elements.description.value;
        var price = event.target.elements.price.valueAsNumber;
        var dishe = new Dishe(name, price, image, description);
        dishes.push(dishe);
        renderMain(dishes, document.querySelector("#main"));
    }
    catch (error) {
        console.error(error);
    }
}
