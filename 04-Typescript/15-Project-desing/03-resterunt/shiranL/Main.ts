
//main ts

function RenderHomePage(){
    try {
        const container = document.getElementById("tablesContainer");
        if(!container)throw new Error("can not find tableContainer html elment")
            tables.forEach((table) => { // each table is a btn
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

function getDataTablesFromJason(tables: Table[] | undefined){
    try {
        
        const tablesString = localStorage.getItem('tables');
        if (!tablesString){ // if there is not table on json , create one
            for (let index = 0; index < 5; index++) {
                tables.push(new Table(index+1,"Table "+(index+1).toString(),4))
         ;}
         const tablesJson = JSON.stringify(tables);
            localStorage.setItem('tables', tablesJson);
            console.log(tables);
        } else{
            //get tables from localstorage
                //convert string to array;
                const tablesArray = JSON.parse(tablesString);
                console.log(tablesArray);
                tablesArray.forEach((table) => {
                    tables.push(new Table(table.idTable, table.tableName, table.capacity));
                });}
               
} catch (error) {
        console.error(error);
        return undefined;
    }

}

function getDataOrdersFromJson(orders: Order[] | undefined) {
    try {
        
      const ordersString = localStorage.getItem('orders');
      if (!ordersString) {
        // No orders in JSON
      } else {
        const ordersArray = JSON.parse(ordersString);
        ordersArray.forEach((orderData: any) => {
          // Create a new instance of the Order class using the parsed data
          const order = new Order(
            orderData.table, 
            orderData.dishes, 
            orderData.status
          );
          
          // Push the order to the orders array
          orders.push(order);
          
          // Render the order in HTML
          renderOrder(order);
        });
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  
const tables : Table[]|undefined=[];
const orders : Order[]|undefined=[];
getDataTablesFromJason(tables); 

getDataOrdersFromJson(orders);

console.log(tables);
console.log(orders);
RenderHomePage();


