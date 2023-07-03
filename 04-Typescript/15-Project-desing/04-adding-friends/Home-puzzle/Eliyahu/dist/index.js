var Vegetable = /** @class */ (function () {
    function Vegetable(name, image, amount) {
        this.name = name;
        this.image = image;
        this.amount = amount;
        this.id = "id-" + (new Date().getTime() - Math.random());
    }
    Vegetable.prototype.ateOne = function () {
        this.amount--;
    };
    Vegetable.prototype.buyOne = function () {
        this.amount++;
    };
    return Vegetable;
}());
var vegetables = getVegetablesFromStorage();
function getVegetablesFromStorage() {
    try {
        var vegetablesString = localStorage.getItem("vegetables");
        if (!vegetablesString)
            return [];
        var vegetablesArray = JSON.parse(vegetablesString);
        var vegetables_1 = vegetablesArray.map(function (vegetable) {
            return new Vegetable(vegetable.name, vegetable.image, vegetable.amount);
        });
        return vegetables_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function renderAddVegetable(rootElement) {
    try {
        var html = "<form onsubmit=\"handleAddVegetable(event)\">\n        <input type=\"text\" name=\"name\" placeholder=\"Name\" required>\n        <input type=\"url\" name=\"image\" placeholder=\"Image url\">\n        <input type=\"number\" name=\"amount\" placeholder=\"Insert amount\" required>\n        <input type=\"submit\" value=\"ADD\">\n            </form>";
        if (!rootElement)
            throw new Error("can't find rootElement");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderVegetableCard(vegetable) {
    try {
        if (vegetable.image === '') {
            vegetable.image = "https://t3.ftcdn.net/jpg/03/11/87/52/360_F_311875255_d57wDCwlZxdtOEwsnmXLHkV1r29i1R2U.jpg";
        }
        return "<div class=\"card\">\n        <img src=\"" + vegetable.image + "\">\n        <h3>" + vegetable.name + "</h3>\n        <p>" + vegetable.amount + " unit </p>\n        <button onclick=\"handleRemoveVegetableUnit('" + vegetable.id + "')\">I ATE ONE</button>\n        <button onclick=\"handleAddVegetableUnit('" + vegetable.id + "')\">I BUY ONE</button>\n        <button onclick=\"handleEditVegetable('" + vegetable.id + "')\">Edit</button>\n        <button onclick=\"handleDeleteVegetable('" + vegetable.id + "')\">Remove</button>\n    </div>\n";
    }
    catch (error) {
        console.error(error);
    }
}
function renderAllVegetables(vegetables, rootElement) {
    try {
        if (!rootElement)
            throw new Error("can't find rootElement");
        var html = "<div class=\"cards\">\n        " + vegetables.map(function (vegetable) { return renderVegetableCard(vegetable); }).join(' ') + " </div>";
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddVegetable(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var image = ev.target.image.value;
        var amount = ev.target.amount.valueAsNumber;
        var newVegetable = new Vegetable(name, image, amount);
        vegetables.push(newVegetable);
        console.log(vegetables);
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function handleRemoveVegetableUnit(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("can't find vegetable");
        if (vegetable.amount !== 0) {
            vegetable.ateOne();
        }
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddVegetableUnit(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("can't find vegetable");
        vegetable.buyOne();
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
    }
    catch (error) {
        console.error(error);
    }
}
renderAddVegetable(document.querySelector("#main"));
renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
