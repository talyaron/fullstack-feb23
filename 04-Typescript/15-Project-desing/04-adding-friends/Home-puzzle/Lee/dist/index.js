//Creating a vegetables inventory management program - How many vegetables of each kind do I have?
//vegetables class
//quantity of every kind of vegetable
var Vegetable = /** @class */ (function () {
    function Vegetable(kind, image, quantity, id) {
        this.kind = kind;
        this.image = image;
        this.quantity = quantity;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "id-" + new Date().getTime() + "-" + Math.random();
        }
    }
    return Vegetable;
}());
var vegetables = getVegetablesFromStorage();
renderAllVegetables(vegetables, document.querySelector("#rootVegetables"));
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
        var html = vegetables.map(function (vegetable) {
            return "<p>" + vegetable.kind + "</p>";
        }).join(' ');
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
