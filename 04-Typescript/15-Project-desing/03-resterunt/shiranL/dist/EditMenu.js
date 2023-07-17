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
function loadMenucategoriesForEdit() {
    try {
        debugger;
        var categoriesString = localStorage.getItem('categories');
        if (!categoriesString) {
            var categories = [];
            categories.push(new DishesCategories("Drinks"));
            categories.push(new DishesCategories("Pizza"));
            categories.push(new DishesCategories("Meat"));
            categories.push(new DishesCategories("BurGer"));
            categories.push(new DishesCategories("Toppings"));
            //save to local storage
            var categoriesJson = JSON.stringify(categories);
            localStorage.setItem('categories', categoriesJson);
            return categories;
        }
        else {
            var categoriesArray = JSON.parse(categoriesString);
            var categories = categoriesArray.map(function (category) { return new DishesCategories(category.categoyName, category.idCategory); });
            return categories;
        }
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function renderMenuCategories() {
    try {
        var container_1 = document.querySelector("#menuCategoryContainer");
        if (!container_1)
            throw new Error("can not find Menu html elment");
        if (!EditPgeCategories)
            throw new Error("can not find Categories");
        renderSearch();
        EditPgeCategories.forEach(function (category) {
            var button = document.createElement("button");
            button.classList.add("category-button"); // Add the "table-button" class to the button
            button.innerText = category.categoyName;
            button.addEventListener("click", function () {
                RenderMenuByCategory(category.idCategory);
            });
            container_1.appendChild(button);
        });
        var ALLcategoriesBtn = document.createElement("button");
        ALLcategoriesBtn.classList.add("category-button"); // Add the "table-button" class to the button
        ALLcategoriesBtn.innerText = "ALL";
        ALLcategoriesBtn.addEventListener("click", function () {
            RenderMenuByCategory(-10);
        });
        container_1.appendChild(ALLcategoriesBtn);
    }
    catch (error) {
        console.error(error);
    }
}
function renderDishes(filteredMenu, container) {
    try {
        filteredMenu.forEach(function (dish) {
            // Create a div element for each dish
            var dishDiv = document.createElement("div");
            dishDiv.classList.add("dish");
            // Create and append the dish name
            var nameElement = document.createElement("h3");
            nameElement.innerText = dish.name;
            dishDiv.appendChild(nameElement);
            // Create and append the dish image
            var imgElement = document.createElement("img");
            imgElement.src = dish.img;
            dishDiv.appendChild(imgElement);
            // Create and append the dish price
            var priceElement = document.createElement("p");
            priceElement.innerText = "Price: $" + dish.price.toFixed(2);
            dishDiv.appendChild(priceElement);
            // Create and append the dish description
            var descriptionElement = document.createElement("p");
            descriptionElement.innerText = dish.description;
            dishDiv.appendChild(descriptionElement);
            container === null || container === void 0 ? void 0 : container.appendChild(dishDiv);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function RenderMenuByCategory(id) {
    try {
        var container = document.querySelector("#menuDishesContainer");
        if (!container)
            throw new Error("Cannot find Menu html element");
        if (!MenuForEditMenuPage)
            throw new Error("Cannot find Menu");
        container.innerHTML = ""; // Clear the container before rendering the menu
        var filteredMenu = id === -10 ? MenuForEditMenuPage : MenuForEditMenuPage.filter(function (dish) { return dish.category.idCategory === id; });
        if (filteredMenu)
            renderDishes(filteredMenu, container);
    }
    catch (error) {
        console.error(error);
    }
}
function renderSearch() {
    try {
        var searchContainer = document.querySelector("#searchDish");
        if (!searchContainer)
            throw new Error("Cannot find search container");
        var searchInput_1 = document.createElement("input");
        searchInput_1.classList.add("inputSearch");
        searchInput_1.type = "text";
        searchInput_1.placeholder = "Search by name";
        searchInput_1.addEventListener("input", function () {
            var searchTerm = searchInput_1.value.toLowerCase();
            RenderMenuBySearch(searchTerm);
        });
        searchContainer.innerHTML = "";
        searchContainer.appendChild(searchInput_1);
    }
    catch (error) {
        console.error(error);
    }
}
function RenderMenuBySearch(searchTerm) {
    try {
        var container = document.querySelector("#menuDishesContainer");
        if (!container)
            throw new Error("Cannot find Menu html element");
        if (!MenuForEditMenuPage)
            throw new Error("Cannot find Menu");
        container.innerHTML = ""; // Clear the container before rendering the menu
        var filteredMenu = MenuForEditMenuPage.filter(function (dish) { return dish.name.toLowerCase().includes(searchTerm); });
        if (filteredMenu)
            renderDishes(filteredMenu, container);
    }
    catch (error) {
        console.error(error);
    }
}
function GoBakc() {
    var menuJson = JSON.stringify(MenuForEditMenuPage); // save to local 
    localStorage.setItem('menuDises', menuJson);
    window.location.href = './Main.html';
}
var MenuForEditMenuPage = getMenuForEditMenuPage();
var EditPgeCategories = loadMenucategoriesForEdit();
renderMenuCategories();
