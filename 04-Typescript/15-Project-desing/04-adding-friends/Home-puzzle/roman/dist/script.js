//Model
var Vegetable = /** @class */ (function () {
    function Vegetable(name, amount, image, id) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        if (id) {
            this.id = id;
        }
        else
            id = vegetables ? vegetables.length + 1 : 1;
    }
    return Vegetable;
}());
//view
var wrapper = document.querySelector(".renderVegs");
var table = document.createElement("table");
var vegetables = getVegetablesFromStorage();
var tempVeg = [
    {
        name: "carrot",
        amount: 2,
        image: "https://images.freeimages.com/fic/images/icons/1187/pickin_time/256/carrot.png",
        id: "1"
    }, {
        name: "banana",
        amount: 3,
        image: "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/banana.png",
        id: "2"
    }, {
        name: "cherry",
        amount: 4,
        image: "data:image/jpeg;base64,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",
        id: "3"
    }
];
localStorage.setItem("vegetables", JSON.stringify(tempVeg));
function renderVegetables(div) {
    var html = "<table class=\"vegetables\"><tr><th>Image</th><th>Name</th><th>Amount</th><th>Buttons</th></tr>";
    html += vegetables.map(function (vegetable) {
        return "\n        \n        <tr>\n        <td><img class=\"vegetableImage\" src=\"" + vegetable.image + "\" alt=\"" + vegetable.name + "\" /></td>\n        <td>" + vegetable.name + "</td>\n        <td>" + vegetable.amount + "</td>\n        <td><button onclick=>Edit</button></td>\n        </tr>        \n        \n        \n    ";
    }).join(" ");
    html += "</table>";
    div.innerHTML = html;
}
renderVegetables(wrapper);
function handleAddVegetable(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var image = event.target.image.value;
    var amount = event.target.amount.value;
    var newVegetable = new Vegetable(name, amount, image);
    vegetables.push(newVegetable);
    renderVegetables(wrapper);
    localStorage.setItem("vegetables", JSON.stringify(vegetables));
}
function getVegetablesFromStorage() {
    try {
        //get vegetables from locastorage (string)
        var vegetablesString = localStorage.getItem("vegetables");
        console.log(vegetablesString);
        if (!vegetablesString)
            return [];
        //convert string to array of objects
        var vegetableArray = JSON.parse(vegetablesString);
        //convert array of objects to array of friends
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
