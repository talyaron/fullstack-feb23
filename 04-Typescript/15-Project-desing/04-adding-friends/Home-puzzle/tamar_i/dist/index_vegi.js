//modle - vegtable class
var Vegetable = /** @class */ (function () {
    function Vegetable(name, quantity, id) {
        this.name = name;
        this.quantity = quantity;
        this.isEdit = false; //the defult is that we are not in edit mode
        //if we get an id that mean we are edit the data, if not its a new data and we create a new id
        if (id) {
            this.id = id;
        }
        else {
            this.id = "id-" + new Date().getTime() + "-" + Math.random();
        }
    }
    //to set edin mode on or off acording to btn click
    Vegetable.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Vegetable;
}());
//put all the data in array of vegetables
var vegetables = getVegetableFronStorage(); //we dont want to zero every reloud of the page, we want to see the storage data
function getVegetableFronStorage() {
    try {
        //get vegtebles from localstorage as string
        var vegtableString = localStorage.getItem("vegtables");
        //test if we have somethig to get
        if (!vegtableString)
            return []; //if we dont have an array to ger we return an empty aררשט
        //convert the string to array of object
        var vegtablesArray = JSON.parse(vegtableString);
        //convert the array of object to array of class vegetable
        var vegtables = vegtablesArray.map(function (vegtable) {
            return new Vegetable(vegtable.name, vegtable.quantity, vegtable.id); //inside the inside function
        });
        return vegtables; //return the array of the class
    }
    catch (error) { //if there an error return empry array
        console.error(error);
        return [];
    }
}
//view
//add a new vegetable
function handleAddVegetable(ev) {
}
//show all the vegtable card on screen
//render list of vegetables
renderAllVegetables(vegetables, document.querySelector("#vegetableRoot"));
//model -> controler -> view
function renderAllVegetables(vegetables, htmlElement) {
    try {
        //test if we catch the html element
        if (!htmlElement)
            throw new Error("No html element");
        //if we did, we want to render all vegetables to the screen
        var html = vegetables.map(function (vegetable) { return renderVegetableCard(vegetable); }).join('');
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
//render every vegetable card
renderVegetableCard(vegetable, Vegetable);
{
    try {
        //if we want to edit the card
        if (vegetable.isEdit)
            ;
    }
    catch (error) {
        console.error(error);
    }
}
