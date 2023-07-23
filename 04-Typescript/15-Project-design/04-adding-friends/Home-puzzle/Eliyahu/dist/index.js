var Vegetable = /** @class */ (function () {
    function Vegetable(name, image, amount, id) {
        this.name = name;
        this.image = image;
        this.amount = amount;
        this.isEdit = false;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "id-" + (new Date().getTime() - Math.random());
        }
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
        var html = "\n        <h1> Welcome to your vegetables drawer </h1>\n        <form onsubmit=\"handleAddVegetable(event)\">\n        <input type=\"text\" name=\"name\" placeholder=\"Name\" required>\n        <input type=\"url\" name=\"image\" placeholder=\"Image url\">\n        <input type=\"number\" name=\"amount\" placeholder=\"Insert amount\" required>\n        <input type=\"submit\" value=\"ADD\">\n            </form>\n            <label for=\"q\">You can search for vegetables here:</label>\n            <input type=\"search\" name=\"q\" id=\"q\" oninput=\"vegetableSearch()\" placeholder=\"Search\">";
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
        if (vegetable.isEdit === false) {
            if (vegetable.image === '') {
                vegetable.image = "https://t3.ftcdn.net/jpg/03/11/87/52/360_F_311875255_d57wDCwlZxdtOEwsnmXLHkV1r29i1R2U.jpg";
            }
            var amount = "";
            if (vegetable.amount != 0) {
                amount = "<p> " + vegetable.amount + " unit  </p>";
            }
            else {
                amount = "<p class=\"att\"> You are left without a " + vegetable.name + " &#128561; </br>\nHurry up and buy some </p>";
            }
            return "<div class=\"card\" style=\"background-color:" + randomColor() + ";\">\n        <img src=\"" + vegetable.image + "\">\n        <h3>" + (vegetable.name.charAt(0).toUpperCase() + vegetable.name.slice(1)) + "</h3>\n        " + amount + "\n        <button onclick=\"handleRemoveVegetableUnit('" + vegetable.id + "')\">I ATE ONE</button>\n        <button onclick=\"handleAddVegetableUnit('" + vegetable.id + "')\">I BOUGHT ONE</button>\n        <button onclick=\"handleEditVegetable('" + vegetable.id + "')\">Edit</button>\n        <button onclick=\"handleDeleteVegetable('" + vegetable.id + "')\">Remove</button>\n    </div>";
        }
        else {
            return "<div class=\"card\" style=\"background-color:" + randomColor() + ";\">\n<img src=\"" + vegetable.image + "\">\n<form onsubmit=\"handleSetEditVegetable(event)\" id=\"" + vegetable.id + "\">\n<input type=\"text\" name=\"name\" placeholder=\"" + vegetable.name + "\">\n<input type=\"number\" name=\"amount\" placeholder=\"" + vegetable.amount + " unit\">\n<input type=\"submit\" value=\"SET\">\n</form>\n</div>";
        }
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
        if (duplicateChecker(name) === 0) {
            ev.target.reset();
            return;
        }
        var image = ev.target.image.value;
        var amount = ev.target.amount.valueAsNumber;
        var newVegetable = new Vegetable(name, image, amount);
        vegetables.push(newVegetable);
        vegetables.sort(sortVegByName);
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function sortVegByName(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
function duplicateChecker(name) {
    var check = vegetables.find(function (vegetable) { return vegetable.name === name; });
    if (check) {
        alert("This vegetable is already exists");
        return 0;
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
function handleDeleteVegetable(vegetableId) {
    try {
        var index = vegetables.findIndex(function (vegetable) { return vegetable.id === vegetableId; });
        if (index === -1)
            throw new Error("can't find vegetable");
        vegetables.splice(index, 1);
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleEditVegetable(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("can't find vegetable");
        vegetable.isEdit = true;
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetEditVegetable(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var amount = ev.target.amount.valueAsNumber;
        var vegetableId_1 = ev.target.id;
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId_1; });
        if (!vegetable)
            throw new Error("can't find vegetable");
        if (name !== '') {
            vegetable.name = name;
        }
        if (!Number.isNaN(amount)) {
            vegetable.amount = amount;
        }
        if (amount < 0) {
            alert("Please enter a non-negative number");
            ev.target.reset();
            return;
        }
        vegetable.isEdit = false;
        vegetables.sort(sortVegByName);
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));
    }
    catch (error) {
        console.error(error);
    }
}
function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function vegetableSearch() {
    var txtSearch = document.querySelector("#q").value;
    var regexp = new RegExp("^" + txtSearch, "i");
    var vegetablesFromSearch = [];
    vegetables.forEach(function (vegetable) {
        if (regexp.test(vegetable.name)) {
            vegetablesFromSearch.push(vegetable);
        }
        renderAllVegetables(vegetablesFromSearch, document.querySelector("#rootVegetable"));
    });
}
renderAddVegetable(document.querySelector("#main"));
renderAllVegetables(vegetables, document.querySelector("#rootVegetable"));