// Create an app which store vegtebels in a fridge.
// create model for vegtabel, 
// add vegtabel and amount, and an image
// all the data must be saved to localstorage
// add edit mode, to change quantity vegetables, and name of vegtable
// add remove button, which will remove tomatos or other tomato
// Use the MVC model, and create a view which will show all the vegetables in the fridge
var Vegetable = /** @class */ (function () {
    function Vegetable(name, amount, image) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.id = new Date().getTime() + "-" + Math.random();
    }
    return Vegetable;
}());
;
var tomato = new Vegetable('tomato', 5, 'https://st1.foodsd.co.il/Images/Products/large/hagiSJ2GI3.jpg');
var cucumber = new Vegetable('cucumber', 2, 'https://cdn.speedsize.com/8a627104-1ce3-4d49-b4db-3ebf243dbc0a/https://freshuk.co.il/wp-content/uploads/2021/04/unnamed-file.h.jpg');
var onion = new Vegetable('onion', 3, 'https://www.ayelethasade.co.il/wp-content/uploads/2021/07/2601-scaled-1.jpg');
var lettuce = new Vegetable('lettuce', 7, 'https://cdn.cashcow.co.il/images/f4869ffc-f59e-4a5f-8f3e-18484a39802e_500.jpg');
var storedVegetables = localStorage.getItem('vegetables');
var vegetables = storedVegetables ? JSON.parse(storedVegetables) : [tomato, cucumber, onion, lettuce];
console.log(vegetables[1].name);
// create a view which will show all the vegetables in the fridge
var refrigerator = document.querySelector('#refrigerator');
function showVegetables(vegetable, rootElement) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        var html = vegetable.map(function (vegetable) {
            return "<div class=\"vegetable\">\n                    <img src=\"" + vegetable.image + "\">\n                   <div class=\"vegetable-ditels\">\n                      <h3>" + vegetable.name + "</h3>\n                      <p>" + vegetable.amount + "</p>\n                      <button onclick=\"handleRemoveVegetable('" + vegetable.id + "')\" class=\"remove\">Remove</button>\n                      <button onclick=\"handleAddVegetable('" + vegetable.id + "')\" class=\"add\">Add</button>\n                   </div>\n                </div>";
        }).join('');
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
showVegetables(vegetables, refrigerator);
// add a button to remove one item from a vegtabel
// (eg: you had 5 tomatos, and when you prfess the button "I ATE ONE", you will be left with 4 tomatos)
// and add a button to add one vegtabel
function handleRemoveVegetable(vegetableID) {
    try {
        var vegtable = vegetables.find(function (vegetable) { return vegetable.id === vegetableID; });
        if (!vegtable)
            throw new Error('Could not find vegetable');
        var amount = vegtable.amount;
        // if (amount === 0) throw new Error('There is no more vegetables');
        if (amount === 0) {
        }
        vegtable.amount = amount - 1;
        localStorage.setItem('vegetables', JSON.stringify(vegetables));
        showVegetables(vegetables, refrigerator);
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddVegetable(vegetableID) {
    try {
        var vegtable = vegetables.find(function (vegetable) { return vegetable.id === vegetableID; });
        if (!vegtable)
            throw new Error('Could not find vegetable');
        var amount = vegtable.amount;
        vegtable.amount = amount + 1;
        localStorage.setItem('vegetables', JSON.stringify(vegetables));
        showVegetables(vegetables, refrigerator);
    }
    catch (error) {
        console.error(error);
    }
}
function handlNewVegetable(ev) {
    try {
        ev.preventDefault();
        // const form = ev.target;
        var name = ev.target.elements.name.value;
        var image = ev.target.elements.image.value;
        var amount = ev.target.elements.amount.valueAsNumber;
        var newVegetable = new Vegetable(name, image, amount);
        vegetables.push(newVegetable);
        localStorage.setItem('vegetables', JSON.stringify(vegetables));
    }
    catch (error) {
        console.error(error);
    }
}
