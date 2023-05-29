class Moment {
  date: Date;
  now: number; //save the miliSeconed from the creation

  constructor() {
    this.date = new Date();
    this.now = Date.now();
  }

  getSimpleDate() {
    const day = this.date.getDate();
    const month = this.date.getMonth() + 1;
    const year = this.date.getFullYear();
    const hours = this.date.getHours();
    const minute = this.date.getMinutes();
    const seconds = this.date.getSeconds();

    return `(${day}/${month}/${year}) , ${hours}:${minute}:${seconds}`;
  }

  getPassedDate() {
    const timeOut: number = Math.floor((Date.now() - this.now) / 1000);
    return timeOut;
  }
}

//ביצוע
const moment1 = new Moment();
console.log(moment1);
console.log(moment1.getSimpleDate());

setTimeout(() => {
  console.log(moment1.getPassedDate());
}, 2000);
