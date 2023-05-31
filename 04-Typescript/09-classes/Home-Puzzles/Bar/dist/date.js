var MyDate = /** @class */ (function () {
    function MyDate(year, month, day) {
        try {
            this.date = new Date(year + "/" + month + "/" + day);
            // this.date = new Date();
        }
        catch (error) {
            console.error(error);
        }
    }
    MyDate.prototype.getDate = function () {
        return this.date;
    };
    return MyDate;
}());
var date1 = new MyDate(2002, 10, 13);
console.log(date1.getDate());
