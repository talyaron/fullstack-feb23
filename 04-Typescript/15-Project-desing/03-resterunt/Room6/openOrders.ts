class Dish {
    constructor(public name: string, public price: number, public img: string, public description: string) { }
    setPrice(price: number) {
        this.price = price;
    }
}

const discountList:string[]=["05408","657678"];

const w1 = new Dish("Pasta", 22, "feerwe", "g");
const w2 = new Dish("Pizza", 34, "feerwe", "g");
const w3 = new Dish("Steak", 52, "feerwe", "g");
const w4 = new Dish("Rice", 62, "feerwe", "g");
const w5 = new Dish("Bagel", 53, "feerwe", "g");
const w6 = new Dish("Salad", 39, "feerwe", "g");

const dishes: Dish[] = [w1, w2, w3, w4, w5, w6];

let tableNum = 1;
class Order {
    id: number;
    totalPayment: number = 0;
    orderStatus: string = "In process";
    discount: boolean = false;
    constructor(public tableOrder: Dish[], public phoneNum: string) {
        this.id = Math.floor(Math.random() * 10000);
        this.calculatePayment();
    }

    calculatePayment() {
        try {
            
            console.log(this)
            if (this.tableOrder === null) throw new Error();
            this.totalPayment = 0;
            this.tableOrder.forEach(dish => {
                this.totalPayment += dish.price;
            })
            if(discountList.find(pNum => pNum == this.phoneNum)){
                this.totalPayment*=0.95;
                this.discount = true;
            }

        } catch (error) {
            console.error(error)
        }
    }

    setServe(status: string) {
        try {
            if (!status) throw new Error("Wrong status");
            if (status == "In process")
                this.orderStatus = status;
            else
                this.orderStatus = "Served"
        } catch (error) {
            console.error(error)
        }
    }
}


const orders: Order[] = [
    new Order([w1, w2, w3], "05408"),
    new Order([w5,w3,w3, w2, w3], "54325432"),
    new Order([w6, w4, w3], "4532"),
    new Order([w2, w3], "657678"),
    new Order([w1, w6, w5], "25"),
    new Order([w3,w1, w6, w5], "25"),
    new Order([w1, w6, w2 , w5], "25"),
];

 class Table {
    id: number;
    occupide: boolean = false;
    constructor(public order: Order | null) {
        this.id = tableNum++;
        if (order)
            this.setOccupide();
    }

    setOccupide() {
        this.occupide = !this.occupide;
    }
}
const tablesList: Table[] = [];
const numOfTables = 15;
for(let i =0; i < numOfTables ; i++)
{
    tablesList.push(new Table(null));
}



for(let i =0; i < orders.length ; i++)
{
    const num = Math.floor(Math.random()*numOfTables+1);
    if(tablesList.find(table => table.id == num && !table.occupide))
        tablesList[num-1].occupide = true;
        tablesList[num-1].order = orders[i];
    


}

// //get tablesList from localstorage
// const tablesString = localStorage.getItem('tablesList');
// console.log(tablesString);
// const tableList:Table[] = [];


// if (tablesString) {
//     //convert string to array;
//     const tablesArray = JSON.parse(tablesString);
//     console.log(tablesArray);
//     tablesArray.forEach(t => tableList.push(new Table(t.order)));
//     debugger;
//     renderTables(document.querySelector("#tablesMap"));
// }

let activeTableId: number | undefined;

function renderOpen(rootElement: HTMLElement | null) {
    try {
        const html = `<h2><p>Open Orders</P>${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}</h2>
        <form onclick="handleBack(event)">
        <input type="button" id="back" value="Back">
        </form>`;
        if (!rootElement) throw new Error("no root element");
        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}


function renderTables(rootElement: HTMLElement | null) {
    try {

        let html = `<form onclick="handleOpenTableOrder(event)">`
        console.log(tablesList)
        tablesList.forEach(singleTable => {
            if (singleTable.occupide) {
                html += `<input type="button" id="table${singleTable.id}" class="red" value="${singleTable.id}">`
            }
            else {
                html += `<input type="button" id="table${singleTable.id}" class="green" value="${singleTable.id}">`
            }
        })
        // <input type="button" id="back" value="Back">
        // </form>`;
        if (!rootElement) throw new Error("no root element");

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}


function handleBack(ev: any) {
    try {
        ev.preventDefault();
        console.dir(ev);

        location.href = "index.html"
    } catch (error) {
        console.error(error);
    }

}

function handleOpenTableOrder(ev: any) {
    try {
        ev.preventDefault();
        console.dir(ev);
        console.dir(tablesList)
        const tableID = ev.target.value;
        activeTableId = Number(tableID);
        renderBill(document.querySelector("#bill"), tablesList.find(elem => elem.id.toString() == tableID))

    } catch (error) {
        console.error(error);
    }
}



function handleBillEvent(ev: any) {
    try {
        ev.preventDefault();
        console.dir(ev);
        
        const action = ev.target.id;
        const table = tablesList.find(t => t.id == activeTableId)
        if (action === "orederServed") {
            if (!table || !table.order) throw new Error("NO open Bill");
            table.order.setServe("Served");
            renderBill(document.querySelector("#bill"), table);
        }
        else if (action === "close") {
            if (!table || !table.order) throw new Error("NO open Bill");
            const res = closeBill(table?.order?.totalPayment, Number(prompt("Enter Amount")))
            if (res) {
                table.setOccupide();
                table.order = null;
                alert("Bill is closed, Table is free")
                renderBill(document.querySelector("#bill"), undefined)
            }
        }
        else {
            const addDish = prompt("Enter Dish name:");
            const dishToAdd = dishes.find(dish => dish.name == addDish);
            if (dishToAdd) {
                table?.order?.tableOrder.push(dishToAdd);
                alert("Dish added to table order");
                table?.order?.calculatePayment();
                table?.order?.setServe("In process");
                renderBill(document.querySelector("#bill"), table)
            }
            else{
                alert("No such dish");
            }
        }
        saveToLocalStorage(tablesList);
        renderTables(document.querySelector("#tablesMap"));
    } catch (error) {
        console.error(error);
    }

}

function renderBill(rootElement: HTMLElement | null, table: Table | undefined) {
    try {
        if (!rootElement) throw new Error("No element");
        let html = '';
        if (table !== undefined && table) {
            const tableId = table.id;
            html = `<h3>Table ${tableId} Order</h3>
            <table style="width:100%">
            <tr>
            <th>Dish name</th>
            <th>Price</th>
            </tr>`;

            if (!table.order) throw new Error("No dishes");
            table.order.tableOrder.forEach(dish => {
                html += `<tr>
            <td>${dish.name}</td>
            <td>${dish.price}</td>
            </tr>`;
            })

            if(table.order.discount){
                html += `<tr>
                <td>Membership Discount</td>
                <td>5%</td>
                </tr>`;
            }
            console.log(table.order)
            
            html += `</table>
            <h4>Total: ${table.order.totalPayment}$</h4>
            <h4>Order Status: ${table.order.orderStatus}</h4>
            <form onclick="handleBillEvent(event)">
            <div class="buttons">
            <input type="button" id="close" value="Pay Bill">
            <input type="button" id="orederServed" value="Order Served">
            <input type="button" id="updateOrder" value="Update Order">
            </div>
            </form>`;

        }
        rootElement.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

function closeBill(total: number, payment: number): boolean | undefined {
    try {
        if (total == undefined || payment == undefined) throw new Error("Missing amount");
        if (total - payment > 0) alert(`Missing ${total - payment}$ `)
        else {
            alert(`Change is ${payment - total}$`);
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

function saveToLocalStorage(tablesList: Table[]){
    
    const tablesListJson = JSON.stringify(tablesList);

        localStorage.setItem('tablesList', tablesListJson);
}

renderOpen(document.querySelector("#mainOpen"));
renderTables(document.querySelector("#tablesMap"));