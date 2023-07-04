
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
        return `<div class="orderCard">
        <p>${order.OpenTime} ${order.table?.tableName}</p>
        <p>check ${order.total}</p>
    </div>
`
    } catch (error) {
        
    }
   
  }
 function ShowByDate(event :any){
   
    event.preventDefault();
    const dateToSearch : Date = event.target.DateToSearch.valueAsDate // get date from target

    if(OrdersForTotalByDate && dateToSearch)
    {
        try { debugger
            const ordersByDate = OrdersForTotalByDate.filter(order => {
                const orderDate = order.OpenTime;
                return (
                  orderDate.getFullYear() === dateToSearch.getFullYear() &&
                  orderDate.getMonth() === dateToSearch.getMonth() &&
                  orderDate.getDate() === dateToSearch.getDate()
                );
              });
        const TotalByDate:number = calcTotalByDate(ordersByDate);
        const rootOrdes= document.querySelector("#rootOrdes")
        if(!rootOrdes) throw new Error("cant find rootOrdes");
        const html=ordersByDate.map(order => renderOrderCard(order)).join(' ')
        rootOrdes.innerHTML=html;
       

    } catch (error) {
        console.error(error);
        
    }
       
        
    }
 }

const OrdersForTotalByDate : Order[] = getOrdersForTotalByDate();
