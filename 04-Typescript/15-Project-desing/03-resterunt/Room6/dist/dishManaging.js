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
var tea = new Dish("Tea", 8, "https://worldteadirectory.com/wp-content/uploads/2017/06/Image_1-1.jpg", "A cup of tea with flavors: mint, lemon-Louisa, passion fruit, almond");
var coffee = new Dish("Coffee", 10, "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg", "Instant Coffee");
var pasta = new Dish("Pasta", 45, "https://twoplaidaprons.com/wp-content/uploads/2022/09/gochujang-pasta-thumbnail.jpg", "Pasta with garlic and butter");
var pizza = new Dish("Pizza", 55, "https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg", "Toppings: onion, tomatoes, black olives, pineapple, mushrooms");
var soup = new Dish("Soup", 36, "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/430005-1-eng-GB_carrotsoup_00010_rt_.jpg", "Orange soup or vegetable soup");
var salad = new Dish("Sweet potato salad", 32, "https://www.tavshilim.co.il/wp-content/uploads/2015/05/IMG_8873.jpg", "Selected vegetables with baked sweet potato cubes");
dishes.push(coffee, pasta, pizza, tea, soup, salad);
var dishesJson = JSON.stringify(dishes);
localStorage.setItem('dishes', dishesJson);
var dishesString = localStorage.getItem('dishes');
if (dishesString) {
    var dishesArray = JSON.parse(dishesString);
    var dishes_1 = dishesArray.map(function (dish) { return new Dish(dish.name, dish.price, dish.img, dish.description); });
    console.log(dishes_1);
    renderDishes(document.querySelector("#dishes"));
}
function renderMain(rootElement) {
    try {
        var html = "<h1>Dish Managing</h1>\n        <form>\n        <input type=\"button\" value=\"add dish\" onclick=\"handleRenderAddDish()\">\n        <input type=\"button\" value=\"set price\" onclick=\"handleRenderSetPrice()\">\n        <input type=\"button\" value=\"delete dish\" onclick=\"handleRenderDeleteDish()\">\n    </form>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderDishes(rootElement) {
    try {
        var html_1 = "";
        dishes.forEach(function (dish) {
            html_1 += "\n<div class=\"dish\" style=\"background-image: url(" + dish.img + ");\">\n        <h2>" + dish.name + "</h2>\n        <h3>" + dish.description + "</h3>\n        <p>" + dish.price + " NIS</p>\n    </div>";
        });
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function renderAddDish(rootElement, view) {
    try {
        var html = "";
        if (view) {
            html = "   <form onsubmit=\"handleAddDish(event)\">\n    <label for=\"name\">The name of the new dish:</label>\n    <input type=\"text\" name=\"name\" required>\n    <label for=\"description\">Write a description for the new dish:</label>\n    <input type=\"text\" name=\"description\" required>\n    <label for=\"price\">Enter the price of the new dish:</label>\n    <input type=\"number\" name=\"price\" required>\n    <label for=\"img\">Insert a link to a picture of the new dish:</label>\n    <input type=\"text\" name=\"img\" required>\n    <input type=\"submit\" value=\"Add\">\n</form>";
        }
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderSetPrice(rootElement, view) {
    try {
        var html = "";
        if (view) {
            html = "<form onsubmit=\"handleSetPrice(event)\">\n        <select name=\"dishes\">\n        " + dishes.map(function (dish) { return "<option  value=\"" + dish.name + "\">" + dish.name + " " + dish.price + " NIS</option>"; }) + "\n        </select>\n        <label for=\"newPrice\">Enter the new price of dish:</label>\n        <input type=\"number\" name=\"newPrice\" required>\n        <input type=\"submit\" value=\"change the price\">\n        </form>";
        }
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderDeleteDish(rootElement, view) {
    try {
        var html = "";
        if (view) {
            html = "<form onsubmit=\"handleDeleteDish(event)\">\n            <select name=\"dishes\">\n            " + dishes.map(function (dish) { return "<option>" + dish.name + "</option>"; }) + "\n            </select>\n            <input type=\"submit\" value=\"delete\">\n            </form>";
        }
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleRenderAddDish() {
    try {
        renderAddDish(document.querySelector("#addDish"), true);
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddDish(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var description = ev.target.description.value;
        var price = ev.target.price.value;
        var img = ev.target.img.value;
        var newDish = new Dish(name, price, img, description);
        dishes.push(newDish);
        var dishesJson_1 = JSON.stringify(dishes);
        localStorage.setItem('dishes', dishesJson_1);
        renderDishes(document.querySelector("#dishes"));
        renderAddDish(document.querySelector("#addDish"), false);
    }
    catch (error) {
        console.error(error);
    }
}
function handleRenderSetPrice() {
    try {
        renderSetPrice(document.querySelector("#addDish"), true);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetPrice(ev) {
    try {
        ev.preventDefault();
        var thisDish_1 = ev.target.dishes.value;
        var dishToChange = dishes.find(function (dish) { return dish.name === thisDish_1; });
        if (dishToChange) {
            dishToChange.setPrice(ev.target.newPrice.valueAsNumber);
        }
        var dishesJson_2 = JSON.stringify(dishes);
        localStorage.setItem('dishes', dishesJson_2);
        renderDishes(document.querySelector("#dishes"));
        renderSetPrice(document.querySelector("#addDish"), false);
    }
    catch (error) {
        console.error(error);
    }
}
function handleRenderDeleteDish() {
    try {
        renderDeleteDish(document.querySelector("#addDish"), true);
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteDish(ev) {
    try {
        ev.preventDefault();
        var name_1 = ev.target.dishes.value;
        var indexOfDish = dishes.findIndex(function (dish) { return dish.name === name_1; });
        dishes.splice(indexOfDish, 1);
        var dishesJson_3 = JSON.stringify(dishes);
        localStorage.setItem('dishes', dishesJson_3);
        // renderDishes(document.querySelector("#dishes"))
        renderDeleteDish(document.querySelector("#addDish"), false);
    }
    catch (error) {
        console.error(error);
    }
}
renderMain(document.querySelector("#main"));
renderDishes(document.querySelector("#dishes"));
