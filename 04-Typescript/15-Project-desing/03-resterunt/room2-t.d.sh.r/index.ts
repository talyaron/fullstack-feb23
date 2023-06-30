//entities:
//Tables, Order, Dishes

//no need for unic ids!!

//the table class will contain the order class
//the table class will have the option to add or delet an order
//the table class will have the option to open or closed the table (t-open, f-closed) 
class Table {
    constructor(public tableNumber: number, public catched: boolean, order?: Order) { }

    openTable() {
        //the function return that the table is catched (=true)
        try {
            if (!this.tableNumber) throw new Error("no table catched");
            this.catched = true;  // the table is now open

            // render 3 btns -> add, del, close

        } catch (error) {
            console.error(error)
        }

    }


    //to add dish to an order, we need the specific order and the dish to add
    addDish(order: Dish[], dish: Dish) {
        //add dish to order array

        try {
            if (!order) throw new Error("no order")
            if (!dish) throw new Error("not a dish")

            order.push(dish)

        } catch (error) {
            console.error(error)
        }
    }

    deletDish(order: Dish[], dish: Dish) {
        //delet dish from order array
        try {
            if (!order) throw new Error('cant find order');
            if (!dish) throw new Error('cant find dish');
            order = order.filter(e => e !== dish);
        } catch (error) {
            console.error(error)
        }

    }
    closeTable() {
        //close the table and the order and return the calcolat of all dises price in the order (sum of the order)
        this.catched = false;
    }

}
const tables: Table[] = [

    new Table(1, false),
    new Table(2, false),
    new Table(3, false),
    new Table(4, false)


]
//the order class will contain the dish class
class Order {
    constructor(public dishes: Dish[]) {
    }
}

const ordersArray: Order[] = []; //contain all the dishes in a spesific order

//the Dish class will contain the info of the dish
class Dish {
    constructor(public dishName: string, public img: string, public price: number, public description: string) {
    }
}

//creat some dished
const pastaRed = new Dish("pastaRed", "https://foodhub.scene7.com/is/image/woolworthsltdprod/Easy-chicken-and-bacon-pasta:Desktop-1300x658", 26, "red pasta with bazil")
const pastaMilk = new Dish("pastaMilk", "https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-RECIPE-CARD2.jpg", 26, "pasta with milk")
const pizzaOnion = new Dish("pizzaOnion", "https://pizzatoday.com/wp-content/uploads/2020/05/OnionPizza-1.jpg", 35, "pizza with onions")
const pizzaOliv = new Dish("pizzaOliv", "https://images.squarespace-cdn.com/content/v1/55370317e4b047f1053ee431/1546891998774-XFFPMCUA4MAQ5251Y5TA/ke17ZwdGBToddI8pDm48kEKeeVwguwXFnn1ZDuv86ikUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2sPGQHE4gTOo1QfbaGNmWRT3ltfHJNtU0FQBDPzwxb0xkOpdljO7Z-5qh0zg85Jnj/Loaded+Olive+Pizza?format=original", 30, "pizza with olives")

const dishes: Dish[] = [pastaRed, pastaMilk, pizzaOliv, pizzaOnion]; //contain the information about all dishes

//------view------------------------
//renderTable --> at open screen
function renderTable(divName){
    let html =""
    html += tables.map(table => {
       return  `<div class="table" id="table${table.tableNumber}">${table.tableNumber}</div>`
    }).join('')
    divName.innerHTML = html;
    

}
const tablesDiv = document.querySelector(".tables")
renderTable(tablesDiv);

//renderMenu --> after chosing a table and click add-btn
//render the menu to screen and call the addDish to add a dish to the order
renderMenu(){

}

//renderDelet --> after chosing a table and click del-btn
