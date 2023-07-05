// Create an app which store vegtebels in a fridge.
// add a button to remove one item from a Vegetable (eg: you had 5 tomatos, and when you press the button "I ATE ONE", you will be left with 4 tomatos )
// add a button to add Vegetable
// all the data must be saved to localstorage
// add edit mode, to change quantity vegetables, and name of vegetable
// add remove button, which will remove tomatos or other tomato
// Use the MVC model
// create model for Vegetable,
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
            this.id = "id-" + Math.round(Math.random() * 1000000);
        }
    }
    Vegetable.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Vegetable;
}());
var rootvegetables = document.querySelector("#vegetables-cards");
var vegetables = getVegetablesFromStorage();
renderVeagtable(vegetables, rootvegetables);
function getVegetablesFromStorage() {
    try {
        var vegtebelsString = localStorage.getItem("vegetables");
        if (!vegtebelsString)
            return [];
        //convert string to array of objects
        var vegetablesArray = JSON.parse(vegtebelsString);
        console.dir(vegetablesArray);
        //convert array of objects to array of friends
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
// add Vegetable and amount, and an image
function handleAddingVaegtable(ev) {
    ev.preventDefault();
    vegetables.forEach(function (vegetable) {
        if (ev.target.elements.name.value === vegetable.name) {
            alert("this vegetable is already exist. please try to Edit");
            throw new Error("this vegetable is already exist. please try to Edit");
        }
    });
    var name = ev.target.elements.name.value;
    var amount = ev.target.elements.amount.value;
    var url = ev.target.elements.url.value;
    vegetables.push(new Vegetable(name, url, amount));
    ev.target.reset();
    renderVeagtable(vegetables, rootvegetables);
    // save data to localstorage
    localStorage.setItem("vegetables", JSON.stringify(vegetables));
}
function renderVeagtable(allvegetables, htmlRoot) {
    try {
        var html_1 = "<div class=\"cards-wrapper\">";
        allvegetables.forEach(function (vegetable) {
            if (vegetable.isEdit === false) {
                html_1 += "<div class=\"card\">\n      <img src=\"" + vegetable.image + "\" alt=\"\">\n      <p>vegetable name: " + vegetable.name + "</p>\n      <p>vegetable amount: " + vegetable.amount + "</p><button onclick=\"ateOne('" + vegetable.id + "')\">I ate one</button><button onclick=\"addOne('" + vegetable.id + "')\">I bought one</button><button onclick=\"editvegetable('" + vegetable.id + "')\">EDIT</button><button onclick=\"removevegetable('" + vegetable.id + "')\">REMOVE</button></div>";
            }
            else {
                html_1 += "<div class=\"card\"><img src=\"" + vegetable.image + "\" alt=\"\">\n      <p>current name: " + vegetable.name + "</p>\n      <p>current amount: " + vegetable.amount + "</p><form onsubmit=\"saveChanges(event)\" id=\"" + vegetable.id + "\">\n      <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"new name\" /><input type=\"number\" name=\"amount\" id=\"amount\" placeholder=\"new amount\"/><input type=\"submit\" value=\"SET\" />\n      </form><button onclick=\"removevegetable('" + vegetable.id + "')\">REMOVE</button></div>";
            }
        });
        html_1 += "</div>";
        if (!htmlRoot)
            throw new Error("no html element");
        htmlRoot.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
        return;
    }
}
// add edit mode, to change quantity vegetables, and name of vegetable
function editvegetable(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("coulnt find vegetable");
        vegetable.setEdit(true);
        renderVeagtable(vegetables, rootvegetables);
        console.log(vegetableId);
    }
    catch (error) {
        console.error(error);
    }
}
// add remove button, which will remove tomatos or other tomato
function removevegetable(vegetableId) {
    try {
        var index = vegetables.findIndex(function (vegetable) { return vegetable.id === vegetableId; });
        vegetables.splice(index, 1);
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderVeagtable(vegetables, rootvegetables);
    }
    catch (error) {
        console.error(error);
    }
    console.log(vegetableId);
}
function saveChanges(ev) {
    ev.preventDefault();
    try {
        debugger;
        var name = ev.target.name.value;
        var amount = ev.target.amount.value;
        var id_1 = ev.target.id;
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === id_1; });
        if (!vegetable)
            throw new Error("couldnt find vegetable");
        vegetables.forEach(function (vegetable) {
            if (ev.target.name.value === vegetable.name) {
                alert("this vegetable is already exist. please try to Edit");
                throw new Error("this vegetable is already exist. please try to Edit");
            }
        });
        vegetable.name = name;
        vegetable.amount = amount;
        vegetable.setEdit(false);
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderVeagtable(vegetables, rootvegetables);
    }
    catch (error) {
        console.error(error);
    }
}
function ateOne(vegetableId) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
        if (!vegetable)
            throw new Error("couldnt find vegetable");
        vegetable.amount = Number(vegetable.amount) - 1;
        localStorage.setItem("vegetables", JSON.stringify(vegetables));
        renderVeagtable(vegetables, rootvegetables);
    }
    catch (error) {
        console.error(error);
    }
}
function addOne(vegetableId) {
    try {
        try {
            var vegetable = vegetables.find(function (vegetable) { return vegetable.id === vegetableId; });
            if (!vegetable)
                throw new Error("couldnt find vegetable");
            vegetable.amount = Number(vegetable.amount) + 1;
            localStorage.setItem("vegetables", JSON.stringify(vegetables));
            renderVeagtable(vegetables, rootvegetables);
        }
        catch (error) {
            console.error(error);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function userSearch() {
    var search = document.querySelector("#search");
    var userSearch = search.value;
    var regexp = new RegExp("^" + userSearch);
    var vegetablesFromSearch = [];
    var result = vegetables.filter(function (vegetable) { return regexp.test(vegetable.name); });
    if (result.length === 0) {
        renderVeagtable(vegetablesFromSearch, rootvegetables);
        throw new Error("there is no match");
    }
    result.forEach(function (vegetable) {
        switch (regexp.test(vegetable.name)) {
            case regexp.test(vegetable.name) !== null:
                vegetablesFromSearch.push(vegetable);
                renderVeagtable(vegetablesFromSearch, rootvegetables);
                break;
            case regexp.test(vegetable.name) === null:
                throw new Error("there is no match") && alert("there is no match");
        }
    });
}
