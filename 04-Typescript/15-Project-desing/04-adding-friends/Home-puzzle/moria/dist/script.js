var Vegetable = /** @class */ (function () {
    function Vegetable(name, image, amount, id) {
        this.name = name;
        this.image = image;
        this.amount = amount;
        this.isEdit = false;
        this.id = "id-" + (new Date().getTime() - Math.random());
    }
    Vegetable.prototype.deleteOne = function () {
        this.amount--;
    };
    Vegetable.prototype.addOne = function () {
        this.amount++;
    };
    Vegetable.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Vegetable;
}());
var vegetables = getVegetablesFromStorage();
var rootVegetables = document.querySelector("#rootVegetables");
renderAllVegetables(vegetables, rootVegetables);
function getVegetablesFromStorage() {
    try {
        var vegetablesString = localStorage.getItem("Vegetables");
        if (!vegetablesString)
            return [];
        var vegetablesArray = JSON.parse(vegetablesString);
        var vegetables_1 = vegetablesArray.map(function (vegetable) {
            return new Vegetable(vegetable.name, vegetable.image, vegetable.amount, vegetable.id);
        });
        return vegetables_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
;
function handleAdd(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var image = ev.target.elements.image.value;
        var amount = ev.target.elements.amount.valueAsNumber;
        var newVegetable = new Vegetable(name, image, amount);
        vegetables.push(newVegetable);
        renderAllVegetables(vegetables, rootVegetables);
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
            throw new Error("No element");
        var html = vegetables.map(function (vegetable) { return renderVegetablesCard(vegetable); }).join(' ');
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderVegetablesCard(vegetable) {
    try {
        if (vegetable.isEdit) {
            return "<div class=\"card\">\n                    <img src=\"" + vegetable.image + "\">\n                    <form onsubmit=\"handleSetEditVegetable(event)\" id=\"" + vegetable.id + "\">\n                        <input type=\"text\" name=\"name\" value=\"" + vegetable.name + "\">\n                        <br>\n                        <button onclick=\"handleDeleteVegetable('" + vegetable.id + "')\">Delete</button>\n                        <input type=\"submit\" value=\"SET\">\n                    </form>\n                </div>\n                ";
        }
        else {
            return "<div class=\"card\">\n        <img src=\"" + vegetable.image + "\">\n        <p>" + vegetable.name + "</p>\n        <p>" + vegetable.amount + "</p>\n        <button onclick=\"handleAddOneVegetable('" + vegetable.id + "')\">+</button>\n        <button onclick=\"handleDeleteOneVegetable('" + vegetable.id + "')\">-</button>\n        <br>\n        <button onclick=\"handleDeleteVegetable('" + vegetable.id + "')\">Delete</button>\n        <button onclick=\"handleEdit('" + vegetable.id + "')\">Edit</button>\n    </div>\n";
        }
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function handleDeleteVegetable(vegetableId) {
    try {
        var index = vegetables.findIndex(function (vegetable) { return vegetable.id === vegetableId; });
        if (index === -1)
            throw new Error("Could not find vegetables");
        vegetables.splice(index, 1);
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, rootVegetables);
    }
    catch (error) {
        console.error(error);
    }
}
function handleEdit(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("couldnt find vegetable");
        vegetable.setEdit(true);
        renderAllVegetables(vegetables, rootVegetables);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetEditVegetable(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var vegetableId_1 = ev.target.id;
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId_1; });
        if (!vegetable)
            throw new Error("couldnt find vegetables");
        vegetable.name = name;
        vegetable.setEdit(false);
        console.log(vegetables);
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, rootVegetables);
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddOneVegetable(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("can't find vegetable");
        vegetable.addOne();
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, rootVegetables);
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteOneVegetable(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("can't find vegetable");
        if (vegetable.amount !== 0) {
            vegetable.deleteOne();
        }
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, rootVegetables);
    }
    catch (error) {
        console.error(error);
    }
}
