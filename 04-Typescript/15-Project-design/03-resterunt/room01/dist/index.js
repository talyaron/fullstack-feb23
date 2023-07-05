var Tables = /** @class */ (function () {
    function Tables(tableNumber, amuntOfGuests) {
        this.tableNumber = tableNumber;
        this.amuntOfGuests = amuntOfGuests;
    }
    return Tables;
}());
var Order = /** @class */ (function () {
    function Order(orderNumber, dishesArray, sum) {
        this.orderNumber = orderNumber;
        this.dishesArray = dishesArray;
    }
    Order.prototype.sum = function (dishesArray, dishes) {
        try {
            var sum_1 = 0;
            dishesArray.forEach(function (dish) {
                sum_1 += dishes.dishPrice;
            });
            return sum_1;
        }
        catch (error) {
            console.error(error);
            return;
        }
    };
    return Order;
}());
var Dishes = /** @class */ (function () {
    function Dishes(dishName, dishPrice, dishDescription, dishImage) {
        this.dishName = dishName;
        this.dishPrice = dishPrice;
        this.dishDescription = dishDescription;
        this.dishImage = dishImage;
    }
    return Dishes;
}());
