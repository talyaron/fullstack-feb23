function getMenuForEditMenuPage() {
    try {
        var disesString = localStorage.getItem('menuDises');
        if (!disesString) {
            console.log("There are no orders");
            return [];
        }
        else {
            var dishesArray = JSON.parse(disesString);
            var dises = dishesArray.map(function (dishe) { return new Dishe(dishe.category, dishe.name, dishe.img, dishe.price, dishe.description); });
            return dises;
        }
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function renderMenu() {
    var menuHtml = document.querySelector("#menuContainer");
    if (!menuHtml) {
        throw new Error("Cant Find MenuContainer");
    }
    ;
    var html = "<form id=\"MenueForm\" class=\"MenuForm\" onsubmit=\"handleAddDishesToOrder(event)\"\">\n    " + MenuForEditMenuPage.map(function (dish) { return "\n        <div class=\"disheCard\">\n            <div class=\"dishDetails\">\n                <p class=\"dishName\">" + dish.name + "</p>\n                <p class=\"dishPrice\">Price: " + dish.price + "</p>\n                <img class=\"dishImage\" src=\"" + dish.img + "\" alt=\"\">\n            </div>\n            <div class=\"dishActions\">\n                <button class=\"dishActionButton edit\" onclick=\"handleEditDish('" + dish.idDishe + "')\">Edit</button>\n                <button class=\"dishActionButton delete\" onclick=\"handleDeleteDish('" + dish.idDishe + "')\">Delete</button>\n            </div>\n        </div>\n    "; }).join("") + "\n<input type=\"submit\" value=\"Add Dishes\">\n  </form>";
    menuHtml.innerHTML = html;
}
debugger;
var MenuForEditMenuPage = getMenuForEditMenuPage();
renderMenu();
