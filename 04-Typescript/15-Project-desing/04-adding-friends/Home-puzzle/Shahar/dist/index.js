var Vegetable = /** @class */ (function () {
    // isEdit:boolean = false;
    function Vegetable(name, amount, image) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.id = "id-" + new Date().getTime() + "-" + Math.random();
    }
    return Vegetable;
}());
var vegetables = [];
// renderVegetableCard(vegetables, document.querySelector("#rootVegetables"))
function HandleAddVegetable(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var amount = ev.target.amount.value;
        var image = ev.target.image.value;
        var newVegetable = new Vegetable(name, amount, image);
        vegetables.push(newVegetable);
        renderVegetableCards(vegetables);
    }
    catch (error) {
        console.error(error);
    }
}
renderVegetableCards(vegetables);
function renderVegetableCard(vegetable) {
    try {
        return "<div class=\"card\">\n          <img src=\"" + vegetable.image + "\">\n          <p>" + vegetable.name + "</p>\n          <p>" + vegetable.amount + "</p>\n          <button onclick=\"handleDeleteVegetable('" + vegetable.id + "')\">Delete</button>\n          <button onclick=\"handleEditVegetable('" + vegetable.id + "')\">i ate one</button>\n      </div>";
    }
    catch (error) {
        console.error(error);
    }
}
function renderVegetableCards(vegetables) {
    try {
        var cardsHTML = vegetables.map(function (vegetable) { return renderVegetableCard(vegetable); }).join('');
        document.querySelector("#rootVegetable").innerHTML = cardsHTML;
    }
    catch (error) {
        console.error(error);
    }
}
// function renderVegetableCard(vegetable:Vegetable){
//     try {
//         return `<div class="card">
//         <img src="${vegetable.image}">
//         <p>${vegetable.name}</p>
//         <p>${vegetable.amount}</p>
//         <button onclick="handleDeleteFriend('${vegetable.id}')">Delete</button>
//         <button onclick="handleEdit('${vegetable.id}')">Edit</button>
//     </div>
// `;
//     } catch (error) {
//         console.error(error)
//     }
// }
