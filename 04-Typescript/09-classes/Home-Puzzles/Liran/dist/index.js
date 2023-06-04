var MyDate = /** @class */ (function () {
    function MyDate(date) {
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.second = date.getSeconds();
        this.minutes = date.getMinutes();
        this.hours = date.getHours();
        this.timePast = 0;
    }
    MyDate.prototype.getSimpleDate = function () {
        return (this.day + "/" + this.month + "/" + this.year + ", " + this.hours + ":" +
            ((this.minutes > 9 || this.minutes < (-9)) ? Math.abs(this.minutes) : "0" + Math.abs(this.minutes))
            + ":" + ((this.second > 9 || this.second < (-9)) ? Math.abs(this.second) : "0" + Math.abs(this.second)));
    };
    MyDate.prototype.getPassedDate = function () {
        //debugger
        var current = new Date();
        console.log("getPassed() on at: " + current);
        if (current.getSeconds() < this.second) {
            return (60 - this.second + current.getSeconds()) + " second passed since MyDay created";
        }
        return (current.getSeconds() - this.second) + " second passed since MyDay created";
    };
    return MyDate;
}());
var newDate = new MyDate(new Date());
console.log(newDate.getSimpleDate());
setTimeout(function () {
    console.log(newDate.getPassedDate());
}, 5000);
