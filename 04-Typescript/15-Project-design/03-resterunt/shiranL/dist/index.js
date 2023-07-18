//index ts- Model - entities:
//Tables, Order, Dishes  
var Table = /** @class */ (function () {
    function Table(tableName, capacity, idTable) {
        this.tableName = tableName;
        this.capacity = capacity;
        if (idTable)
            this.idTable = idTable;
        else
            this.idTable = Number(Math.random());
    }
    return Table;
}());
var DishesCategories = /** @class */ (function () {
    function DishesCategories(categoyName, idCategory) {
        this.categoyName = categoyName;
        if (idCategory)
            this.idCategory = idCategory;
        else
            this.idCategory = Number(Math.random());
    }
    return DishesCategories;
}());
var Dishe = /** @class */ (function () {
    function Dishe(category, name, img, price, description) {
        this.category = category;
        this.name = name;
        this.img = img;
        this.price = price;
        this.description = description;
        this.idDishe = Number(Math.random());
    }
    return Dishe;
}());
var Order = /** @class */ (function () {
    function Order(table, dishes, status, OpenTimeLocal) {
        this.table = table;
        this.dishes = dishes;
        this.status = status;
        this.OpenTimeLocal = OpenTimeLocal;
        this.idOrder = Number(Math.random());
        this.total = 0;
        this.CloseTime = null;
        if (OpenTimeLocal)
            this.OpenTime = OpenTimeLocal;
        else
            this.OpenTime = new Date();
    }
    Order.prototype.calcTotal = function () {
        this.total = 0; // Reset the total to zero before calculating
        if (this.dishes) {
            for (var _i = 0, _a = this.dishes; _i < _a.length; _i++) {
                var dish = _a[_i];
                this.total += dish.price; // Add the price of each dish to the total
            }
        }
    };
    return Order;
}());
// View
function loadMenucategories() {
    try {
        var categoriesString = localStorage.getItem('categories');
        if (!categoriesString) {
            var categories_1 = [];
            categories_1.push(new DishesCategories("Drinks"));
            categories_1.push(new DishesCategories("Pizza"));
            categories_1.push(new DishesCategories("Meat"));
            categories_1.push(new DishesCategories("BurGer"));
            categories_1.push(new DishesCategories("Toppings"));
            //save to local storage
            var categoriesJson = JSON.stringify(categories_1);
            localStorage.setItem('categories', categoriesJson);
            return categories_1;
        }
        else {
            var categoriesArray = JSON.parse(categoriesString);
            var categories_2 = categoriesArray.map(function (category) { return new DishesCategories(category.categoyName, category.idCategory); });
            return categories_2;
        }
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function loadMenuDises() {
    try {
        var menuDisesString = localStorage.getItem('menuDises');
        if (!menuDisesString) {
            var menuDises = [];
            menuDises.push(new Dishe(categories[0], "CoCa cola", "https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=ais", 7, "the taste of life"));
            menuDises.push(new Dishe(categories[0], "Sprite", "https://img.freepik.com/free-photo/front-view-glass-soda-getting-poured-dark-drink-photo-champagne-xmas-water_140725-93018.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=ais", 7, "When you're really thirsty"));
            menuDises.push(new Dishe(categories[0], "water", "https://img.freepik.com/free-vector/isolated-water-glass_1368-2673.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=ais", 4, "Health is here"));
            menuDises.push(new Dishe(categories[1], "Napolitana", "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=sph", 17, "Good pizza comes with good friends"));
            menuDises.push(new Dishe(categories[1], "Pepperoni", "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=ais", 17, "And may God help"));
            menuDises.push(new Dishe(categories[2], "steak", "https://img.freepik.com/free-photo/grilled-sirloin-steak-cooked-rare-plate-generated-by-ai_24640-81771.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph", 69, "Vampires are here"));
            menuDises.push(new Dishe(categories[2], "Lamb chops", "https://img.freepik.com/free-photo/grilled-lamb-chop-steak_74190-2790.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=ais", 47, "Go with the herd"));
            menuDises.push(new Dishe(categories[3], "Home BurGer", "https://img.freepik.com/premium-photo/classic-cheeseburger-with-beef-cheese-bacon-tomato-onion-lettuce-isolated-white-background_183587-963.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph", 39, "We love hamburger"));
            menuDises.push(new Dishe(categories[3], "CheeseBurGer", "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph", 41, "We love hamburger"));
            menuDises.push(new Dishe(categories[4], "Fries", "https://img.freepik.com/free-photo/fresh-potatoes-fri-with-souce_144627-5503.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph", 14, "You also need to gain weight"));
            menuDises.push(new Dishe(categories[4], "Rice", "https://img.freepik.com/premium-photo/white-background-with-risotto-rice_872147-2590.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=sph", 12, "You also need to gain weight"));
            // save to local storege
            var MenudisesJson = JSON.stringify(menuDises);
            localStorage.setItem('menuDises', MenudisesJson);
            return menuDises;
        }
        else {
            var menuDisesArray = JSON.parse(menuDisesString);
            var menuDises = menuDisesArray.map(function (dishe) { return new Dishe(dishe.category, dishe.name, dishe.img, dishe.price, dishe.description); });
            return menuDises;
        }
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
// load categiries
var categories = loadMenucategories();
var MenuDished = loadMenuDises();
