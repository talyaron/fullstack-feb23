var Moment = /** @class */ (function () {
    function Moment() {
        this.date = new Date();
        this.now = Date.now();
    }
    Moment.prototype.getSimpleDate = function () {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var hours = this.date.getHours();
        var minute = this.date.getMinutes();
        var seconds = this.date.getSeconds();
        return "(" + day + "/" + month + "/" + year + ") , " + hours + ":" + minute + ":" + seconds;
    };
    Moment.prototype.getPassedDate = function () {
        var timeOut = Math.floor((Date.now() - this.now) / 1000);
        return timeOut;
    };
    return Moment;
}());
//ביצוע
// const moment1 = new Moment();
// console.log(moment1);
// console.log(moment1.getSimpleDate());
// setTimeout(() => {
//   console.log(moment1.getPassedDate());
// }, 2000);
