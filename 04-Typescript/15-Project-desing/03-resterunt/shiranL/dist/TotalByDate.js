// get orders data from json or return empty array
function getOrdersForTotalByDate() {
    try {
        var ordersString = localStorage.getItem('Orders');
        if (!ordersString) {
            return [];
        }
        else {
            debugger;
            var ordersArray = JSON.parse(ordersString);
            var orders = ordersArray.map(function (order) { return new Order(order.table, order.dishes, order.status, new Date(order.OpenTime)); });
            return orders;
        }
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function calcTotalByDate(ordersByDate) {
    var sum = 0;
    if (ordersByDate) {
        ordersByDate.forEach(function (order) {
            sum += order.total;
        });
    }
    return sum;
}
function renderOrderCard(order) {
    var _a;
    try {
        if (!order)
            throw new Error("cant find rootOrdes");
        order.calcTotal();
        return "<div class=\"orderCard\">\n        <p>" + order.OpenTime + " " + ((_a = order.table) === null || _a === void 0 ? void 0 : _a.tableName) + "</p>\n        <p>check " + order.total + "</p>\n    </div>\n";
    }
    catch (error) {
    }
}
function ShowByDate(event) {
    event.preventDefault();
    var dateToSearch = event.target.DateToSearch.valueAsDate; // get date from target
    if (OrdersForTotalByDate && dateToSearch) {
        try {
            debugger;
            var ordersByDate = OrdersForTotalByDate.filter(function (order) {
                var orderDate = order.OpenTime;
                return (orderDate.getFullYear() === dateToSearch.getFullYear() &&
                    orderDate.getMonth() === dateToSearch.getMonth() &&
                    orderDate.getDate() === dateToSearch.getDate());
            });
            var TotalByDate = calcTotalByDate(ordersByDate);
            var rootOrdes = document.querySelector("#rootOrdes");
            if (!rootOrdes)
                throw new Error("cant find rootOrdes");
            var html = ordersByDate.map(function (order) { return renderOrderCard(order); }).join(' ');
            rootOrdes.innerHTML = html;
        }
        catch (error) {
            console.error(error);
        }
    }
}
var OrdersForTotalByDate = getOrdersForTotalByDate();
