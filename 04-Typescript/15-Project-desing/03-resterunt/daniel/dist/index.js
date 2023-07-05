// MVC: Mdel (data, class), View (DOM), Controlers
// 2) Design View
// 3) build control-view (DOM + controls), for all pages ( split the jobs between the team-members)
// 4) pass data bewtween pages
// 5) make it work
// 6) make beutifull SCSS with BEM
// 1) Design the data entities (class Modle). Tables, Order, Dishes, including the methods
// Objective: Create a web application for a restaurant that allows customers to view the menu, place orders, and manage tables.
// The number of tables in the restaurant
var Table = /** @class */ (function () {
    function Table(numberOfTable, placeAvailable) {
        this.numberOfTable = numberOfTable;
        this.placeAvailable = placeAvailable;
        this.id = "table" + numberOfTable;
        this.placeAvailable = numberOfTable === 1;
    }
    return Table;
}());
var tableSelection = document.querySelector("#table-selection");
function tableAvailable() {
    var html = "\n  <h1>Search for a table</h1>\n  <table>\n      <tr>\n          <td><button id=\"table1\" onclick=\"tableStatus('table1')\"> Table 1 </button></td>\n          <td><button id=\"table2\" onclick=\"tableStatus('table2')\"> Table 2 </button></td>\n      </tr>\n      <tr>\n          <td><button id=\"table3\" onclick=\"tableStatus('table3')\"> Table 3 </button></td>\n          <td><button id=\"table4\" onclick=\"tableStatus('table4')\"> Table 4 </button></td>\n      </tr>\n      <tr>\n          <td><button id=\"table5\" onclick=\"tableStatus('table5')\"> Table 5 </button></td>\n          <td><button id=\"table6\" onclick=\"tableStatus('table6')\"> Table 6 </button></td>\n      </tr>\n  </table>";
    try {
        if (tableSelection) {
            tableSelection.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
tableAvailable();
function tableStatus(tableId) {
    var tables = [
        new Table(1, true),
        new Table(2, false),
        new Table(3, false),
        new Table(4, false),
        new Table(5, false),
        new Table(6, false),
    ];
    tables.forEach(function (table) {
        var button = document.querySelector("#" + table.id);
        button.style.backgroundColor = "";
        if (table.id === tableId) {
            table.placeAvailable = true;
        }
        else {
            table.placeAvailable = false;
        }
    });
}
var tableButtons = document.querySelectorAll('button[id^="table"]');
tableButtons.forEach(function (button) {
    button.addEventListener('click', handleTableButtonClick);
});
function handleTableButtonClick() {
    var tableId = this.id;
    var table = document.querySelector("" + tableId);
    var tables = [
        new Table(1, true),
        new Table(2, false),
        new Table(3, false),
        new Table(4, false),
        new Table(5, false),
        new Table(6, false),
    ];
    function orderDishes() {
        var orderPage = document.querySelector("#order-page");
        var addDish = document.createElement('button');
        var dishInput = document.createElement('input');
        addDish.textContent = 'Search dish';
        orderPage.append(dishInput, addDish);
        dishes.forEach(function (dish) {
            var html = "\n        <div class=\"dish-container\">\n        <div class=\"image\">\n        <img src=\"" + dish.img + "\" alt=\"" + dish.dishName + "\">\n        </div>\n        <div class=\"details\">\n        <h3>Name: " + dish.dishName + "</h3>\n        <p>Price: " + dish.price + "</p>\n        <button id=\"add-dish\">Add dish</button>\n        <label for=\"search-dish\"></label>\n        </div>\n        </div>";
            try {
                if (orderPage) {
                    orderPage.innerHTML += html;
                }
            }
            catch (error) {
                console.error(error);
            }
        });
        var greenButtons = document.querySelectorAll('#add-dish');
        greenButtons.forEach(function (button) {
            button.addEventListener('click', showOrderPage);
        });
        function showOrderPage() {
            greenButtons.forEach(function (button) {
                button.style.display = 'none';
            });
            orderPage.style.display = 'block';
        }
    }
    orderDishes();
    tables.forEach(function (table) {
        var button = document.querySelector("#" + table.id);
        button.style.backgroundColor = 'red';
        table.placeAvailable = false;
    });
    table.style.backgroundColor = 'green';
    table.placeAvailable = true;
    if (table.classList.contains('occupied')) {
    }
    else {
        if (tableId === 'table1') {
            var buttonContainer = document.querySelector('#table-selection');
            buttonContainer.style.display = 'none';
            orderDishes();
        }
    }
}
// Variety of dishes in the restaurant
var Dish = /** @class */ (function () {
    function Dish(dishName, price, img) {
        this.dishName = dishName;
        this.price = price;
        this.img = img;
    }
    return Dish;
}());
var pizza = new Dish("Pizza", 55, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0LW_4IT3CS_35CmmUBRa4hxpK86df6YrMg&usqp=CAU");
var braciole = new Dish("Braciole", 60, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEYYBbD33ig9Pbcel7iOhKc_wUt6k2wiFrg&usqp=CAU");
var pasta = new Dish("Pasta", 67, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74Xb-2neu8oeARCsV6gswpmipcxy8KF8KBg&usqp=CAU");
var lasagna = new Dish("Lasagna", 70, "https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/the-vegetarian-butcher/lasagna/1245x600_Lasagna.jpg");
var dishes = [pizza, braciole, pasta, lasagna];
//  The number of people in a table
var Orders = /** @class */ (function () {
    function Orders(dish, totalprice, tables) {
        this.dish = dish;
        this.totalprice = totalprice;
        this.tables = tables;
        totalprice = this.dish.calculation();
    }
    return Orders;
}());
// const dishes:Dishes[]=[];
// // Variety of dishes in the restaurant
// class Dishes {
//   constructor(public dishName:string, public numberOfDishes:number , public price:number){
//   }
//   // method to calculate the price of dishes selected
//   calculation (){
//     const numberOfDishesPrice = this.numberOfDishes * this.price;
//     return numberOfDishesPrice
//   }
// }
