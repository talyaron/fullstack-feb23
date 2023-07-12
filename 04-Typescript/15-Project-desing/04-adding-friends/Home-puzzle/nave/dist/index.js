// Create an app which store vegtebels in a fridge.
// create model for vegtabel, 
// add vegtabel and amount, and an image
// add a button to remove one item from a vegtabel (eg: you had 5 tomatos, and when you press the button "I ATE ONE", you will be left with 4 tomatos )
// add a button to add vegtabel
// all the data must be saved to localstorage
// add edit mode, to change quantity vegetables, and name of vegtable
// add remove button, which will remove tomatos or other tomato
// Use the MVC model
//model 
var Vegetable = /** @class */ (function () {
    function Vegetable(name, img, amount) {
        this.name = name;
        this.img = img;
        this.amount = amount;
        this.itemId = "id-" + new Date().getTime() + "-" + Math.random();
    }
    return Vegetable;
}());
var vegetables = []; // [Vegtable{itemId:"...", name:"apple", img:"", amount:5}]
//controlerToForm
function handleAddVegetables(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var image = ev.target.elements.image.value;
        var amount = ev.target.elements.amount.value;
        var vegtabel = new Vegetable(name, image, amount);
        vegetables.push(vegtabel);
        renderVegetables(vegetables);
    }
    catch (error) {
        console.log(error);
    }
}
//view
function renderVegetables(vegetables) {
    try {
        var html = '';
        if (vegetables.length == 0) {
            html = 'No vegetables here. To add new vegetable feel the form';
        }
        else {
            html = vegetables.map(function (veg) { return renderCard(veg); }).join(" ");
        }
        var root = document.querySelector("#root");
        if (root)
            root.innerHTML = html;
    }
    catch (error) {
        console.log(error);
    }
}
function renderCard(vegetable) {
    try {
        return "\n            <div>\n                <p>" + vegetable.name + "</p>\n            </div>\n        ";
    }
    catch (error) {
        console.log(error);
    }
}
/*
    REGULAR
    function nameOFFunction(x,y) {

    }
    
    ANONIMIT
    () => {

    }

    ARROW

    const fun2 = () =>{

    }
*/
