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
        return "<div id=\"orderCard\">\n        <p>Date: " + order.OpenTime.toLocaleDateString() + "</p>\n        <p>Table Name: " + ((_a = order.table) === null || _a === void 0 ? void 0 : _a.tableName) + "</p>\n        <p>check Out : " + order.total + "</p>\n    </div>\n";
    }
    catch (error) {
    }
}
function ShowByDate(event) {
    try {
        event.preventDefault();
        var dateToSearch_1 = event.target.DateToSearch.valueAsDate; // get date from target
        if (OrdersForTotalByDate && dateToSearch_1) {
            var ordersByDate = OrdersForTotalByDate.filter(function (order) {
                var orderDate = order.OpenTime;
                order.calcTotal();
                return (orderDate.getFullYear() === dateToSearch_1.getFullYear() &&
                    orderDate.getMonth() === dateToSearch_1.getMonth() &&
                    orderDate.getDate() === dateToSearch_1.getDate());
            });
            if (ordersByDate.length === 0) {
                // if no orderes for this date
                var rootOrdes = document.querySelector("#rootOrdes");
                if (!rootOrdes)
                    throw new Error("cant find rootOrdes");
                rootOrdes.innerHTML = "";
                var rootToal = document.querySelector("#rootToal");
                if (!rootToal)
                    throw new Error("cant find rootOrdes");
                rootToal.innerHTML = "<div class=\"TotalByDate\">\n          <p> No Orders For This Date </p> </div>";
            }
            else {
                // render the orders with /Total for thos day
                var TotalByDate = calcTotalByDate(ordersByDate);
                //orders div
                var rootOrdes = document.querySelector("#rootOrdes");
                if (!rootOrdes)
                    throw new Error("cant find rootOrdes");
                var ordersByDatehtml = ordersByDate.map(function (order) { return renderOrderCard(order); }).join(' ');
                rootOrdes.innerHTML = ordersByDatehtml;
                //Total div
                var rootToal = document.querySelector("#rootToal");
                if (!rootToal)
                    throw new Error("cant find rootOrdes");
                if (TotalByDate != 0) {
                    rootToal.innerHTML = "<div class=\"TotalByDate\">\n        <p>Total Daily Profit: " + TotalByDate + " </p> </div>";
                }
                else {
                    rootToal.innerHTML = "";
                    rootOrdes.innerHTML = "";
                }
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function backHome() {
    window.location.href = './Main.html';
}
var OrdersForTotalByDate = getOrdersForTotalByDate();
