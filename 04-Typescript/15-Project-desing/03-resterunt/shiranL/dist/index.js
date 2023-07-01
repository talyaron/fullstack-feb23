//index ts- Model - entities:
//Tables, Order, Dishes  
var Table = /** @class */ (function () {
    function Table(idTable, tableName, capacity) {
        this.idTable = idTable;
        this.tableName = tableName;
        this.capacity = capacity;
    }
    return Table;
}());
var DishesCategories = /** @class */ (function () {
    function DishesCategories(categoyName) {
        this.categoyName = categoyName;
        this.idDishe = Number(Math.random());
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
    function Order(table, dishes, status) {
        this.table = table;
        this.dishes = dishes;
        this.status = status;
        this.idOrder = Number(Math.random());
        this.total = 0;
        this.OpenTime = new Date();
        this.CloseTime = null;
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
            //save to local storage
            var categoriesJson = JSON.stringify(categories_1);
            localStorage.setItem('categories', categoriesJson);
            return categories_1;
        }
        else {
            var categoriesArray = JSON.parse(categoriesString);
            var categories_2 = categoriesArray.map(function (category) { return new DishesCategories(category.categoyName); });
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
            menuDises.push(new Dishe(categories[0], "CoCa cola", "https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=ais", 7.99, "the taste of life"));
            menuDises.push(new Dishe(categories[1], "Napolitana", "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=sph", 17.99, "Good pizza comes with good friends"));
            menuDises.push(new Dishe(categories[2], "steak", "https://img.freepik.com/free-photo/grilled-sirloin-steak-cooked-rare-plate-generated-by-ai_24640-81771.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph", 47.99, "Vampires are here"));
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
