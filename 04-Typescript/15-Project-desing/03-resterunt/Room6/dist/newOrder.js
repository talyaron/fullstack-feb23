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
function handleRegisterOrder(event) {
    try {
        event.preventDefault();
        var phoneNum = event.target.elements.phoneNum.value;
        var Table_1 = event.target.elements.Table.value;
        var order = new Order(dishes, phoneNum);
        var table = new Table_1(order);
        tables.push(table);
        orders.push(order);
        renderMain(document.querySelector("#main"));
    }
    catch (error) {
        console.error(error);
    }
}
