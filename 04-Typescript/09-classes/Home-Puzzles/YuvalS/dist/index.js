var Date1 = /** @class */ (function () {
    // day:number;
    // month:number;
    // year:number;
    // hour:number;
    // minute:number;
    // second:number;
    function Date1(date) {
        // this.day = date.getDate();
        // this.month = date.getMonth() + 1;
        // this.year = date.getFullYear();
        // this.hour = date.getHours();
        // this.minute = date.getMinutes();
        // this.second = date.getSeconds();
        this.date = date;
    }
    Date1.prototype.getNowDate = function () {
        return this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear() + ", " + this.date.getHours() + "/" + this.date.getMinutes() + "/" + this.date.getSeconds();
    };
    return Date1;
}());
var nowDate = new Date1(new Date);
console.log(nowDate.getNowDate());
