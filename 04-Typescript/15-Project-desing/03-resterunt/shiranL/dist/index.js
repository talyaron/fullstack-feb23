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
// load categiries
var categories = [];
categories.push(new DishesCategories("Drinks"));
categories.push(new DishesCategories("Pizza"));
categories.push(new DishesCategories("Meat"));
//save to local storage
var categoriesJson = JSON.stringify(categories);
localStorage.setItem('categories', categoriesJson);
console.log(categoriesJson);
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
// load dishes 
var dises = [];
dises.push(new Dishe(categories[0], "CoCa cola", "https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=ais", 7.99, "the taste of life"));
dises.push(new Dishe(categories[1], "Napolitana", "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=sph", 17.99, "Good pizza comes with good friends"));
dises.push(new Dishe(categories[2], "steak", "https://img.freepik.com/free-photo/grilled-sirloin-steak-cooked-rare-plate-generated-by-ai_24640-81771.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph", 47.99, "Vampires are here"));
// save to local storege
var disesJson = JSON.stringify(dises);
localStorage.setItem('dises', disesJson);
var Order = /** @class */ (function () {
    function Order(table, dishes, status) {
        this.table = table;
        this.dishes = dishes;
        this.status = status;
        this.idOrder = Number(Math.random());
    }
    Order.prototype.addDishe = function () {
        //add dishe to open order
    };
    return Order;
}());
// View
function GoTablePage(idTable) {
    var tableIDJson = JSON.stringify(idTable);
    localStorage.setItem('tableID', tableIDJson);
    window.location.href = './Table.html';
}
