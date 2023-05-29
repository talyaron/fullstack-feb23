//  Moment Class
// 4. Create a class for dates.
// it gets Date format (new Date()). 
// the instnce(object) gets a date.
// one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" 
// for exempe: gets a date (new Date ()) returns "12/1/2023 17:56:12". 
// And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())

// const myDate = new Moment(new Date()).
// myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
// use "setTimeout()" to postpone the time...
// myDate.getPasedDate() -> 2 seconds past from that date

class Moment {
    date: Date;

    constructor(
        date: Date,
    ){
        this.date = new Date();
    }

    getSimpleDate(){
        return `${this.date.getDate()}/${this.date.getMonth()+1}/${this.date.getFullYear()}, 
        ${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`
    }

    getPasedDate(){ 
        return `${setTimeout(this.date.getSeconds(), 5000)-this.date.getSeconds()} seconds past from that date`
    }
}

const myDate = new Moment(new Date());

console.log(myDate.getSimpleDate());
