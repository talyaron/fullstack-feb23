// MVC: Mdel (data, class), View (DOM), Controlers

// Objective: Create a web application for a restaurant that allows customers to view the menu, place orders, and manage tables.

// 1) Design the data entities (class Modle). Tables, Order, Dishes, including the methods

const id = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};


class Tables {
    id : string;

    constructor(public numberTable :number , public order:Orders){

      this.id = id();
    }
}

class Dishes {
  constructor(public dishName:string , public notes:string){

  }
}
class Orders {
  constructor(public table:Tables , public dish:Dishes){

  }
}