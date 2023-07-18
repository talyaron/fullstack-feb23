//Creating a vegetables inventory management program - How many vegetables of each kind do I have?
//vegetables class
//quantity of every kind of vegetable
var Vegetable = /** @class */ (function () {
    function Vegetable(kind, image, quantity, id) {
        this.kind = kind;
        this.image = image;
        this.quantity = quantity;
        this.isEdit = false;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "id-" + new Date().getTime() + "-" + Math.random();
        }
    }
    Vegetable.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Vegetable;
}());
var vegetables = getVegetablesFromStorage();
if (vegetables.length > 0) {
    renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
}
function getVegetablesFromStorage() {
    try {
        var vegetableString = localStorage.getItem("vegetables");
        if (!vegetableString)
            return [];
        var vegetablesArray = JSON.parse(vegetableString);
        var vegetables_1 = vegetablesArray.map(function (vegetable) {
            return new Vegetable(vegetable.kind, vegetable.image, vegetable.quantity, vegetable.id);
        });
        return vegetables_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
;
function handleQuantity(ev) {
    try {
        ev.preventDefault();
        var kind = ev.target.elements.kind.value;
        var image = ev.target.elements.image.value;
        var quantity = ev.target.elements.quantity.value;
        var newVegetable = new Vegetable(kind, image, quantity);
        vegetables.push(newVegetable);
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function renderAllVegetables(vegetables, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error("no element");
        var html = vegetables.map(function (vegetable) { return renderVegCard(vegetable); }).join(' ');
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderVegCard(vegetable) {
    try {
        debugger;
        if (vegetable.isEdit) {
            return "<form  class=\"card\" onsubmit=\"handleSet(event)\" id=\"" + vegetable.id + "\">\n        <img src=\"" + vegetable.image + "\">\n        <input type=\"text\" name=\"kind\" value=\"" + vegetable.kind + "\">\n        <input type=\"text\" name=\"quantity\" value=\"" + vegetable.quantity + "\">\n        \n        <button onclick=\"handleDeleteVeg('" + vegetable.id + "')\">Delete</button>\n        <input type=\"submit\" value=\"SET\">\n    </form>";
        }
        else {
            return "<form  class=\"card\" id=\"" + vegetable.id + "\">\n            <img src=\"" + vegetable.image + "\">\n            <p>" + vegetable.kind + "</p>\n            <p>" + vegetable.quantity + "</p>\n        \n        <button onclick=\"handleDeleteVeg('" + vegetable.id + "')\">Delete</button>\n        <button onclick=\"handleEdit('" + vegetable.id + "')\">Edit</button>\n       \n    </form>";
        }
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function handleSet(ev) {
    try {
        debugger;
        ev.preventDefault();
        var quantity = ev.target.quantity.value;
        var kind = ev.target.kind.value;
        var vegId_1 = ev.target.id;
        var vegi = vegetables.find(function (vegi) { return vegi.id === vegId_1; });
        if (!vegi)
            throw new Error("couldnt find friend");
        vegi.kind = kind;
        vegi.quantity = quantity;
        vegi.setEdit(false);
        console.log(vegi);
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteVeg(vegId) {
    try {
        var index = vegetables.findIndex(function (vegetable) { return vegetable.id === vegId; });
        if (index === -1)
            throw new Error("Could not find vegetable");
        vegetables.splice(index, 1);
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleEdit(vegetableId) {
    try {
        debugger;
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("Could not find vegetable");
        vegetable.setEdit(true);
        renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
    }
    catch (error) {
        console.error(error);
    }
}
