
// get orders data from json or return empty array
function getOrdersForTotalByDate(): Order[] {
    try {
      
      const ordersString = localStorage.getItem('Orders');
      if (!ordersString) {
        return [];
      } else {
        debugger
        const ordersArray = JSON.parse(ordersString);
        const orders = ordersArray.map(order => new Order(order.table, order.dishes, order.status,new Date (order.OpenTime)));
        return orders;
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  function calcTotalByDate(ordersByDate :Order[]){

    let sum = 0;
  if (ordersByDate) {
    ordersByDate.forEach(order => {
      sum += order.total;
    });
  }
  return sum;

  }
  function renderOrderCard(order: Order){
    try {
       
        if(!order) throw new Error("cant find rootOrdes");
        order.calcTotal();
        return `<div id="orderCard">
        <p>Date: ${order.OpenTime.toLocaleDateString()}</p>
        <p>Table Name: ${order.table?.tableName}</p>
        <p>check Out : ${order.total}</p>
    </div>
`
    } catch (error) {
        
    }
   
  }
 function ShowByDate(event :any){
  try { 
    event.preventDefault();
    const dateToSearch : Date = event.target.DateToSearch.valueAsDate // get date from target

    if(OrdersForTotalByDate && dateToSearch)
    {
            const ordersByDate = OrdersForTotalByDate.filter(order => {
                const orderDate = order.OpenTime;
                order.calcTotal();
                return (
                 
                  orderDate.getFullYear() === dateToSearch.getFullYear() &&
                  orderDate.getMonth() === dateToSearch.getMonth() &&
                  orderDate.getDate() === dateToSearch.getDate()
                );
              });
        if(ordersByDate.length === 0){
          // if no orderes for this date

          const rootOrdes= document.querySelector("#rootOrdes")
          if(!rootOrdes) throw new Error("cant find rootOrdes");
          rootOrdes.innerHTML=``;

          const rootToal= document.querySelector("#rootToal")
          if(!rootToal) throw new Error("cant find rootOrdes");

         rootToal.innerHTML=`<div class="TotalByDate">
          <p> No Orders For This Date </p> </div>`;
        }
        else{
           // render the orders with /Total for thos day
        const TotalByDate:number = calcTotalByDate(ordersByDate);
        //orders div
        const rootOrdes= document.querySelector("#rootOrdes")
        if(!rootOrdes) throw new Error("cant find rootOrdes");

        const ordersByDatehtml=ordersByDate.map(order => renderOrderCard(order)).join(' ')
        rootOrdes.innerHTML=ordersByDatehtml;
        //Total div
        const rootToal= document.querySelector("#rootToal")
        if(!rootToal) throw new Error("cant find rootOrdes");
        if(TotalByDate !=0 ){
       
        rootToal.innerHTML=`<div class="TotalByDate">
        <p>Total Daily Profit: ${TotalByDate} </p> </div>`;
        }
        else{
          rootToal.innerHTML=``;
          rootOrdes.innerHTML=``;
        } 
       
      }}
    } catch (error) {
        console.error(error);
        
    }}
 
function backHome(){
  window.location.href = './Main.html';
}
const OrdersForTotalByDate : Order[] = getOrdersForTotalByDate();
