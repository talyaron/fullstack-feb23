class Dish {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  tableNumber: number;
  items: Dish[];

  constructor(tableNumber: number) {
    this.tableNumber = tableNumber;
    this.items = [];
  }

  addItem(item: Dish) {
    this.items.push(item);
  }

  removeItem(item: Dish) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getSum(): number {
    let sum = 0;
    for (const item of this.items) {
      sum += item.price;
    }
    return sum;
  }
}

class Table {
  tableNumber: number;
  capacity: number;
  order: Order | null;

  constructor(tableNumber: number, capacity: number) {
    this.tableNumber = tableNumber;
    this.capacity = capacity;
    this.order = null;
  }

  isAvailable(): boolean {
    return !this.order || this.order.items.length === 0;
  }

  isFull(): boolean {
    return this.order && this.order.items.length === this.capacity;
  }

  createOrder(): void {
    if (this.isAvailable()) {
      this.order = new Order(this.tableNumber);
    }
  }

  addItemToOrder(item: Dish): void {
    if (this.order && !this.isFull()) {
      this.order.addItem(item);
    }
  }

  removeItemFromOrder(item: Dish): void {
    if (this.order) {
      this.order.removeItem(item);
    }
  }

  getOrderSummary(): string {
    if (this.order) {
      let summary = `Table ${this.tableNumber} - Order Summary:\n`;
      for (const item of this.order.items) {
        summary += `${item.name} - $${item.price}\n`;
      }
      summary += `Total: $${this.order.getSum()}`;
      return summary;
    }
    return `Table ${this.tableNumber} - No order yet.`;
  }
}


const table1 = new Table(1, 4);
const table2 = new Table(2, 2);
const table3 = new Table(3, 6);
const table4 = new Table(4, 3);
const table5 = new Table(5, 5);
const table6 = new Table(6, 4);

//objects
const burger = new Dish("Burger", 10);
const salad = new Dish("Salad", 5);
const drink = new Dish("Drink", 3);

//ADD
table1.createOrder();
table1.addItemToOrder(burger);
table1.addItemToOrder(salad);

// Handle button click event to add selected items to the order summary and calculate the sum
const addButton = document.querySelector('#add-button') as HTMLButtonElement;
addButton.addEventListener('click', calculateOrderSum);

function calculateOrderSum() {
  const menuItems = document.querySelectorAll('#menu input[type="checkbox"]:checked');
  const orderSummary = document.querySelector('#');
  const sumElement = document.querySelector('#sum');

  if (menuItems.length > 0) {
    let sum = 0;
    orderSummary.innerHTML = '<ul>';
    menuItems.forEach(item => {
      const price = parseFloat(item.getAttribute('data-price'));
      if (!isNaN(price)) {
        sum += price;
        orderSummary.innerHTML += `<li>${item.value}</li>`;
      }
    });
    orderSummary.innerHTML += '</ul>';

    sumElement.textContent = `$${sum.toFixed(2)}`;
  }
}
