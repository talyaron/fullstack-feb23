// Create an app which store vegtebels in a fridge.
// create model for vegtabel, 
// add vegtabel and amount, and an image
var Vegtabel = /** @class */ (function () {
    function Vegtabel(name, amount, image) {
        this.name = name;
        this.amount = amount;
        this.image = image;
    }
    return Vegtabel;
}());
;
var tomato = new Vegtabel('tomato', 5, 'https://st1.foodsd.co.il/Images/Products/large/hagiSJ2GI3.jpg');
var cucumber = new Vegtabel('cucumber', 2, 'https://cdn.speedsize.com/8a627104-1ce3-4d49-b4db-3ebf243dbc0a/https://freshuk.co.il/wp-content/uploads/2021/04/unnamed-file.h.jpg');
var onion = new Vegtabel('onion', 3, 'https://www.ayelethasade.co.il/wp-content/uploads/2021/07/2601-scaled-1.jpg');
var lettuce = new Vegtabel('lettuce', 7, 'https://cdn.cashcow.co.il/images/f4869ffc-f59e-4a5f-8f3e-18484a39802e_500.jpg');
var vegtabels = [tomato, cucumber, onion, lettuce];
console.log(vegtabels[1].name);
// create a view which will show all the vegtabels in the fridge
var refrigerator = document.querySelector('#refrigerator');
function showVegtabels(vegetable, rootElement) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        var html = vegetable.map(function (vegetable) {
            return "<div class=\"vegetable\">\n            <img src=\"" + vegetable.image + "\">\n            <h3>" + vegetable.name + "</h3>\n            <p>" + vegetable.amount + "</p>\n            <button class=\"remove\">Remove</button>\n            <button class=\"add\">Add</button>\n            </div>";
        }).join('');
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
showVegtabels(vegtabels, refrigerator);
// add a button to remove one item from a vegtabel
// (eg: you had 5 tomatos, and when you prfess the button "I ATE ONE", you will be left with 4 tomatos)
// and add a button to add one vegtabel
// all the data must be saved to localstorage
// add edit mode, to change quantity vegetables, and name of vegtable
// add remove button, which will remove tomatos or other tomato
// Use the MVC model
