
//main ts

function RenderHomePage(){
    try {
        const container = document.getElementById("tablesContainer");
        if(!container)throw new Error("can not find tableContainer html elment")
        MainTables.forEach((table) => { // each table is a btn
              const button = document.createElement("button");
              button.classList.add("table-button"); // Add the "table-button" class to the button
              button.innerText = table.tableName;
              button.addEventListener("click", () => {
                
                GoTablePage(table.idTable);
               
              });
              container.appendChild(button);
            });
    } catch (error) {
        console.error(error);
        
    }
   
}

function getTablesForMainPage(): Table [] {
  try {
      const tables: Table []  = [];
      const tablesString = localStorage.getItem('tables');
      if (!tablesString){ // if there is not table on json , create one
          for (let index = 0; index < 5; index++) {
              tables.push(new Table(index+1,"Table "+(index+1).toString(),4))
       ;}
       const tablesJson = JSON.stringify(tables); // save to local 
          localStorage.setItem('tables', tablesJson);
      } else{
          //get tables from localstorage
          const tablesArray = JSON.parse(tablesString);
          tablesArray.forEach((table) => {
                  tables.push(new Table(table.idTable, table.tableName, table.capacity));
              });}
   return tables;          
   } catch (error) {
      console.error(error);
      return [];
  }
}
function getOrdersForMainPage(): Order[] {
  try {
    
    const ordersString = localStorage.getItem('Orders');
    if (!ordersString) {
      return [];
    } else {
      const ordersArray = JSON.parse(ordersString);
      const orders = ordersArray.map(order => new Order(order.table, order.dishes, order.status));
      return orders;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

function GoTablePage( idTable:number ){

    const tableIDJson = JSON.stringify(idTable);
    localStorage.setItem('tableID', tableIDJson);
    window.location.href = './Table.html';
}

function colorByTableOrderStatus() {
  try {
    const tableButtons = document.querySelectorAll(".table-button");
if(MainOrders){
  debugger
    // Iterate through each table button
    tableButtons.forEach((button) => {
      const tableId = parseInt(button.innerText.split(" ")[1]); // Extract the table ID from the button text

      // Find the corresponding order for the table
      const order = MainOrders.find((order) => order.table?.idTable === tableId && order.status==true);

      if (order) {
        // Table has an order, set button color to red
        button.style.backgroundColor = "red";
      } else {
        // Table is available, set button color to green
        button.style.backgroundColor = "green";
      }
    });
}else  button.style.backgroundColor = "red";

  } catch (error) {
    console.error(error);
  }
}


const MainOrders : Order[] = getOrdersForMainPage(); 
const MainTables : Table[] = getTablesForMainPage(); 
 
RenderHomePage();
colorByTableOrderStatus();





