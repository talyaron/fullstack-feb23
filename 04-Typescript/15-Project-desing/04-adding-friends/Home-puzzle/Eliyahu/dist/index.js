var Vegetable = /** @class */ (function () {
    function Vegetable(name, image, amount) {
        this.name = name;
        this.image = image;
        this.amount = amount;
        this.id = "id-" + (new Date().getTime() - Math.random());
    }
    return Vegetable;
}());
var vegetables = [];
function renderAddVegetable(rootElement) {
    try {
        var html = "<form onsubmit=\"handleAddVegetable(event)\">\n        <input type=\"text\" name=\"name\" placeholder=\"Name\">\n        <input type=\"url\" name=\"image\" placeholder=\"Image url\">\n        <input type=\"number\" name=\"amount\" placeholder=\"Insert amount\">\n        <input type=\"submit\" value=\"ADD\">\n            </form>";
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
        var html = "<div class=\"cd\">\n        " + vegetables.map(function (vegetable) { return renderVegetableCard(vegetable); }).join(' ') + " </div>";
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
        ev.target.reset();
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
    }
    catch (error) {
        console.error(error);
    }
}
renderAddVegetable(document.querySelector("#main"));
renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
