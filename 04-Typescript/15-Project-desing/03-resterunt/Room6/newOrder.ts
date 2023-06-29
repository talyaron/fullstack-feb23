//input: phone number
//צג מחיר
//button: send order

//menu - class
class Dishe {
    constructor(public name: string, public price: number, public image: URL, public description: string) {
    }
}
const dishes: Dishe[] = [];


//order - class
class Order {
    id: string;
    totalPayment: number = 0;
    constructor(public tableOrder: Dishe[], public phoneNum: string) {
        this.id = Math.random().toString(36).substr(2, 9);
    }
    //חישוב מחיר ההזמנה
    calculatePayment() {
        try {
            if (this.tableOrder === null) throw new Error();
            this.tableOrder.forEach(dishe => {
                this.totalPayment += dishe.price;
            })

        } catch (error) {
            console.error(error)
        }
    }
}
const orders: Order[] = [];


//select teble - class
class Table {
    id: string;
    occupide: boolean = false;
    constructor(public order: Order) {
        this.id = Math.random().toString(36).substr(2, 9);
    }

    setOccupide() {
        this.occupide = !this.occupide;
    }
}
const tables: Table[] = [];

renderregisterControlers(document.querySelector("#register"));

function renderregisterControlers(rootElement: HTMLElement | null) {
    try {
        const html =
         `<form onsubmit="handleRegisterOrder(event)">
            <input type="string" name="phoneNum" placeholder="phone number" required>
          <select name="Table" id="Table" required>
             <option value="string">Table 1</option>
             <option value="string">Table 2</option>
             <option value="string">Table 3</option>
             <option value="string">Table 4</option>
             <option value="string">Table 5</option>
             <option value="string">Table 6</option>
          </select>
         </form>`;

        if (!rootElement) throw new Error("no root element");

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function handleRegisterOrder(event: any) {
    try {
        event.preventDefault();
        const phoneNum = event.target.elements.phoneNum.value;
        const Table = event.target.elements.Table.value;

        const order = new Order([], phoneNum);
        const tableOrder = new Table(order);
        tables.push(tableOrder);
        orders.push(order);
        // renderTableOrder(document.querySelector("#tableOrder"));
    } catch (error) {
        console.error(error);
    }
}
