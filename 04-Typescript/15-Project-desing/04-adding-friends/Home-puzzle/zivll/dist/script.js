// Create an app which store vegtebels in a fridge.
// add a button to remove one item from a vegtabel (eg: you had 5 tomatos, and when you press the button "I ATE ONE", you will be left with 4 tomatos )
// add a button to add vegtabel
// all the data must be saved to localstorage
// add edit mode, to change quantity vegetables, and name of vegtable
// add remove button, which will remove tomatos or other tomato
// Use the MVC model
// create model for vegtabel,
var Vegtabel = /** @class */ (function () {
    function Vegtabel(name, image, amount, id) {
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
    Vegtabel.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Vegtabel;
}());
var vegtablesCards = document.querySelector("#vegtables-cards");
var vegtablesArray = [];
console.log(vegtablesArray);
// add vegtabel and amount, and an image
function handleAddingVaegtable(ev) {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var amount = ev.target.elements.amount.value;
    var url = ev.target.elements.url.value;
    vegtablesArray.push(new Vegtabel(name, url, amount));
    console.dir(ev);
    ev.target.reset();
    console.dir(vegtablesArray);
    renderVeagtable(vegtablesArray, vegtablesCards);
}
function renderVeagtable(allVegtables, htmlRoot) {
    try {
        var html_1 = "<div class=\"cards-wrapper\">";
        allVegtables.forEach(function (vegtable) {
            html_1 += "<div class=\"card\">\n      <img src=\"" + vegtable.image + "\" alt=\"\">\n      <p>vegtable name: " + vegtable.name + "</p>\n      <p>vegtable amount: " + vegtable.amount + "</p><button onclick=\"editVegtable(event)\">EDIT</button><button onclick=\"removeVegtable(event)\">REMOVE</button></div>";
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
// all the data must be saved to localstorage
// add edit mode, to change quantity vegetables, and name of vegtable
function editVegtable(ev) {
    console.dir(ev);
}
// add remove button, which will remove tomatos or other tomato
function removeVegtable(ev) {
    console.dir(ev);
}
