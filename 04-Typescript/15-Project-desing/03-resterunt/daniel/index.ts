// MVC: Mdel (data, class), View (DOM), Controlers

// 2) Design View

// 3) build control-view (DOM + controls), for all pages ( split the jobs between the team-members)

// 4) pass data bewtween pages

// 5) make it work

// 6) make beutifull SCSS with BEM




// 1) Design the data entities (class Modle). Tables, Order, Dishes, including the methods
// Objective: Create a web application for a restaurant that allows customers to view the menu, place orders, and manage tables.
  
  // The number of tables in the restaurant
  class Tables {
      id : string;
  
      constructor(public numberOfTable:number , public placeAvailable: boolean){
      }
  }
  const dishes:Dishes[]=[];
  // Variety of dishes in the restaurant
  class Dishes {
    constructor(public dishName:string, public numberOfDishes:number , public price:number){
  
    }
    // method to calculate the price of dishes selected
    calculation (){
      const numberOfDishesPrice = this.numberOfDishes * this.price;
      return numberOfDishesPrice
    }
  }
//  The number of people in a table
  class Orders {
    constructor(public dish:Dishes, public totalprice:number, public tables:Tables){
      totalprice = this.dish.calculation()
    }

    
  }

  function tableStatus(tableId :any){
    const table = document.querySelector(tableId) as HTMLTableElement;
    const isOcuupied = table.classList.toggle('occupied');
    if (isOcuupied){
      table.style.backgroundColor = 'red';
    } else{
      table.style.backgroundColor = 'green';
    }

  }