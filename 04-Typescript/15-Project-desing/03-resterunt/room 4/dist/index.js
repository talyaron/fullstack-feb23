// const table1 = document.querySelector(`#table1`) as HTMLElement;
var tables = document.querySelectorAll(".table");
var root = document.querySelector("#root");
var checkbox = document.querySelector("#checkbox");
var Dishe = /** @class */ (function () {
    function Dishe(name, price, image, description, without1, without2, without3) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.without1 = without1;
        this.without2 = without2;
        this.without3 = without3;
    }
    return Dishe;
}());
var dishes = [];
var Meal1 = new Dishe('burger', 12.99, 'data:image/jpeg;base64,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', 'Hamburger bun, avocado, lettuce, tomato and pickle.', ' without lettuce', ' without tomato', ' without pickle');
dishes.push(Meal1);
var Meal2 = new Dishe('pizza', 19.99, 'data:image/jpeg;base64,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', 'Tomato sauce, cheese, olives.', '  without Tomato sauce', '  without cheese', '  without olives');
dishes.push(Meal2);
var _loop_1 = function (element) {
    element.addEventListener("click", ChooseADish);
    function ChooseADish() {
        element.style.background = "red";
        renderMenu(dishes, root);
    }
    element.addEventListener("dblclick", double);
    function double() {
        element.style.background = "green";
    }
};
for (var _i = 0, tables_1 = tables; _i < tables_1.length; _i++) {
    var element = tables_1[_i];
    _loop_1(element);
}
function renderMenu(dishes, root) {
    try {
        var html = "<div class=\"main\">\n        <div class=\"dish\">\n        " + dishes.map(function (dishe) {
            return "<div class=\"dish\">\n                    <button onClick=\"Remove()\"><img id=\"img\" src=\"" + dishe.image + "\" width=\"150px\" alt=\"" + dishe.name + "\" \n                    <div class=\"dish-text\"></button> \n                    <h3>" + dishe.name + "</h3>\n                    <p>" + dishe.description + "</p>\n                    <p>" + dishe.price + "$</p>\n                    </div>\n                </div>";
        }) + ";\n        </div> \n    </div>";
        if (!root)
            throw new Error("no root element");
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
// Create sushi dishes and add them to the menu
// const image = document.querySelector(`#img`) as HTMLElement;
// image.addEventListener("click", Remove);
function Remove() {
    try {
        var html = "<form onsubmit=\"RemoveOrder(event)\">\n            <ul>\n            <li> <input type=\"checkbox\" >\n                without lettuce\n                </label></li>\n            <li><input type=\"checkbox\" >\n                without tomato\n                </label></li>\n            <li> <input type=\"checkbox\" >\n                without pickle\n                </label></li>\n            <li> <input type=\"checkbox\" >\n                No sauces </label></li>\n                <button id=\"add\">Add</button>\n        </ul>\n        </form>";
        if (!checkbox)
            throw new Error("no root element");
        checkbox.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
;
function RemoveOrder(event) {
    event.target.reset();
}
