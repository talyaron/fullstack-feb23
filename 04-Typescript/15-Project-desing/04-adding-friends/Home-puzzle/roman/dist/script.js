//Model
var Vegetable = /** @class */ (function () {
    function Vegetable(name, amount, image, id) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.isEdit = false;
        if (id) {
            this.id = id;
        }
        else if (vegetables) {
            this.id = vegetables.length + 1;
        }
    }
    Vegetable.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Vegetable;
}());
//view
var form = document.querySelector(".form");
var wrapper = document.querySelector(".renderVegs");
var table = document.createElement("table");
var vegetables = getVegetablesFromStorage();
function renderForm(div) {
    var html = " <form onsubmit=\"handleAddVegetable(event)\">\n            \n    <h2>\n    Add Vegetables\n\n    </h2>\n    <input type=\"text\" name=\"name\"  placeholder=\"Enter Name\">\n    <input type=\"text\" name=\"image\"  placeholder=\"Enter image url\">\n    <input type=\"number\" name=\"amount\"  placeholder=\"Enter amount of vegetables\">\n    <input type=\"submit\" value=\"add\">\n</form>";
    div.innerHTML = html;
}
renderForm(form);
function renderVegetables(div) {
    var html = "<table class=\"vegetables\"><tr><th>Image</th><th>Name</th><th>Amount</th><th>Buttons</th></tr>";
    html += vegetables.map(function (vegetable) { return renderVegetableList(vegetable); }).join("");
    html += "</table>";
    div.innerHTML = html;
}
renderVegetables(wrapper);
function renderVegetableList(vegetable) {
    try {
        if (vegetable.isEdit) {
            return " <tr>\n                  <td><img class=\"vegetableImage\" src=\"" + vegetable.image + "\" alt=\"" + vegetable.name + "\" /></td>\n                  <td><input type=\"text\" name=\"editName\" value=\"" + vegetable.name + "\"></td>\n                  <td>\n                  <input type=\"number\" name=\"editAmount\"  placeholder=\"\" value=\"" + vegetable.amount + "\"></td>\n                  <td>\n                  <button onclick=saveEdit(\"" + vegetable.id + "\")>Save</button>\n                  <button onclick=\"handleDeleteVegetable('" + vegetable.id + "')\">Delete</button>\n                  </td>\n                  </tr>   \n                  ";
        }
        else {
            return "        <tr>\n        <td><img class=\"vegetableImage\" src=\"" + vegetable.image + "\" alt=\"" + vegetable.name + "\" /></td>\n        <td>" + vegetable.name + "</td>\n        <td>" + vegetable.amount + "</td>\n        <td><button onclick=handleEdit(\"" + vegetable.id + "\")>Edit</button></td>\n        </tr>   \n  ";
        }
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleAddVegetable(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var image = event.target.image.value;
    var amount = event.target.amount.value.toString();
    var newVegetable = new Vegetable(name, amount, image);
    vegetables.push(newVegetable);
    renderVegetables(wrapper);
    localStorage.setItem("vegetable", JSON.stringify(vegetables));
}
function getVegetablesFromStorage() {
    try {
        //get vegetables from locastorage (string)
        var vegetablesString = localStorage.getItem("vegetable");
        if (!vegetablesString)
            return [];
        //convert string to array of objects
        var vegetableArray = JSON.parse(vegetablesString);
        //convert array of objects to array of vegetables
        var vegetables_1 = vegetableArray.map(function (vegetable) {
            return new Vegetable(vegetable.name, vegetable.amount, vegetable.image, vegetable.id);
        });
        return vegetables_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
;
function handleEdit(id) {
    try {
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id == id; });
        //   const vegetable = vegetables.find((vegetable) => vegetable.id === id);
        if (!vegetable)
            throw new Error("couldnt find vegetable");
        vegetable.setEdit(true);
        renderVegetables(wrapper);
    }
    catch (error) {
        console.error(error);
    }
}
function saveEdit(id) {
    try {
        console.log(vegetables);
        var editName = document.querySelector('[name="editName"]');
        var editAmount = document.querySelector('[name="editAmount"]');
        var name = editName.value;
        var amount = editAmount.value;
        var vegetable = vegetables.find(function (vegetable) { return vegetable.id == id; });
        if (!vegetable)
            throw new Error("couldnt find vegetable");
        vegetable.name = name;
        vegetable.amount = amount;
        vegetable.setEdit(false);
        console.log(vegetable);
        localStorage.setItem("vegetable", JSON.stringify(vegetables));
        renderVegetables(wrapper);
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteVegetable(id) {
    try {
        var index = vegetables.findIndex(function (vegetable) { return vegetable.id == id; });
        if (index === -1)
            throw new Error("Could not find id");
        vegetables.splice(index, 1);
        localStorage.setItem("vegetable", JSON.stringify(vegetables));
        renderVegetables(wrapper);
    }
    catch (error) {
        console.error(error);
    }
}
function renderDefaults() {
    var item1 = new Vegetable("Carrot", 2, "https://images.freeimages.com/fic/images/icons/1187/pickin_time/256/carrot.png");
    vegetables.push(item1);
    var item2 = new Vegetable("Banana", 8, "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/banana.png");
    vegetables.push(item2);
    var item3 = new Vegetable("Cherry", 5, "https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cherry-png-image_2392970.jpg");
    vegetables.push(item3);
    var item4 = new Vegetable("Apple", 15, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVq1bY_y5cAH4ktS-XWcKmR5oTH8uy-9TdA&usqp=CAU");
    vegetables.push(item4);
    localStorage.setItem("vegetable", JSON.stringify(vegetables));
    renderVegetables(wrapper);
}
