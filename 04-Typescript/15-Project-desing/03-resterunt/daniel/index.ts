// MVC: Mdel (data, class), View (DOM), Controlers

// 2) Design View

// 3) build control-view (DOM + controls), for all pages ( split the jobs between the team-members)

// 4) pass data bewtween pages

// 5) make it work

// 6) make beutifull SCSS with BEM




// 1) Design the data entities (class Modle). Tables, Order, Dishes, including the methods
// Objective: Create a web application for a restaurant that allows customers to view the menu, place orders, and manage tables.
  
  // The number of tables in the restaurant
  class Table {
      id: string;
      
      constructor(public numberOfTable:number,public placeAvailable: boolean){
        this.id = `table${numberOfTable}`;
        this.placeAvailable = numberOfTable ===1;
      }
  }

const tableSelection = document.querySelector("#table-selection") as HTMLDivElement;

 function tableAvailable(){
  const html = `
  <h1>Search for a table</h1>
  <table>
      <tr>
          <td><button id="table1" onclick="tableStatus('table1')"> Table 1 </button></td>
          <td><button id="table2" onclick="tableStatus('table2')"> Table 2 </button></td>
      </tr>
      <tr>
          <td><button id="table3" onclick="tableStatus('table3')"> Table 3 </button></td>
          <td><button id="table4" onclick="tableStatus('table4')"> Table 4 </button></td>
      </tr>
      <tr>
          <td><button id="table5" onclick="tableStatus('table5')"> Table 5 </button></td>
          <td><button id="table6" onclick="tableStatus('table6')"> Table 6 </button></td>
      </tr>
  </table>`

  try {
    if(tableSelection) {
      tableSelection.innerHTML = html;
    }
  } catch (error) {
    console.error(error)
  }
}
tableAvailable()


function tableStatus(tableId :string){
  const tables:Table[] = [
    new Table(1, true),
    new Table(2, false),
    new Table(3, false),
    new Table(4, false),
    new Table(5, false),
    new Table(6, false),
  ];

  tables.forEach(table => {
    const button = document.querySelector(`#${table.id}`) as HTMLButtonElement;
    button.style.backgroundColor = "";
    if (table.id === tableId){
      table.placeAvailable = true;
    } else {
      table.placeAvailable = false;
    }
  });
}

const tableButtons = document.querySelectorAll('button[id^="table"]') as NodeListOf<HTMLButtonElement>;
tableButtons.forEach(button => {
  button.addEventListener('click', handleTableButtonClick);
});

function handleTableButtonClick(){
  const tableId = this.id;
  const table = document.querySelector(`${tableId}`) as HTMLButtonElement;
  const tables: Table[] = [
    new Table(1, true),
    new Table(2, false),
    new Table(3, false),
    new Table(4, false),
    new Table(5, false),
    new Table(6, false),
];



function orderDishes(){
      const orderPage = document.querySelector("#order-page") as HTMLDivElement;
      const addDish = document.createElement('button') as HTMLButtonElement;
      const dishInput = document.createElement('input') as HTMLInputElement;
      addDish.textContent = 'Search dish'
      orderPage.append(dishInput, addDish)
      
      dishes.forEach(dish =>{
        const html = `
        <div class="dish-container">
        <div class="image">
        <img src="${dish.img}" alt="${dish.dishName}">
        </div>
        <div class="details">
        <h3>Name: ${dish.dishName}</h3>
        <p>Price: ${dish.price}</p>
        <button id="add-dish">Add dish</button>
        <label for="search-dish"></label>
        </div>
        </div>`;
        try {
          if(orderPage){
            orderPage.innerHTML += html;
          }
        } catch (error) {
          console.error(error)
        }
      });
      
      
      const greenButtons = document.querySelectorAll('#add-dish') as NodeListOf<HTMLButtonElement>;
      greenButtons.forEach(button => {
        button.addEventListener('click', showOrderPage);
      });
      
      function showOrderPage(){
        greenButtons.forEach(button =>{
          button.style.display = 'none';          
        });
        orderPage.style.display = 'block';
        
      }
    }
    
    orderDishes()
    

    tables.forEach(table => {
      const button = document.querySelector(`#${table.id}`) as HTMLButtonElement;
  
        button.style.backgroundColor = 'red';
        table.placeAvailable = false;
      });
    
        table.style.backgroundColor = 'green';
        table.placeAvailable = true;
  
    if (table.classList.contains('occupied')){
    }else {
      if (tableId === 'table1'){
        const buttonContainer = document.querySelector('#table-selection') as HTMLDivElement;
        buttonContainer.style.display = 'none';
        orderDishes()
      }
    }
  }
  
  
  
  // Variety of dishes in the restaurant
  class Dish {
    constructor(public dishName:string, public price:number, public img:string){
        
    }
    // method to calculate the price of dishes selected
    // calculation (){
      //   const numberOfDishesPrice = this.numberOfDishes * this.price;
      //   return numberOfDishesPrice
      // }
    }
      
      const pizza = new Dish("Pizza", 55, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0LW_4IT3CS_35CmmUBRa4hxpK86df6YrMg&usqp=CAU");
      const braciole = new Dish("Braciole", 60, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEYYBbD33ig9Pbcel7iOhKc_wUt6k2wiFrg&usqp=CAU");
      const pasta = new Dish("Pasta", 67, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74Xb-2neu8oeARCsV6gswpmipcxy8KF8KBg&usqp=CAU");
      const lasagna = new Dish("Lasagna", 70, "https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/the-vegetarian-butcher/lasagna/1245x600_Lasagna.jpg");
      
      const dishes:Dish[] = [pizza, braciole, pasta, lasagna];
  
    //  The number of people in a table
    class Orders {
      constructor(public dish:Dishes, public totalprice:number, public tables:Table){
        totalprice = this.dish.calculation()
      }
      
      
    }

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

 