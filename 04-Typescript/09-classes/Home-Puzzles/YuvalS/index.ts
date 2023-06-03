class Date1{
    date:Date;
    // day:number;
    // month:number;
    // year:number;
    // hour:number;
    // minute:number;
    // second:number;

    constructor(
    date:Date,
    // day:number,
    // month:number,
    // year:number,
    // hour:number,
    // minute:number,
    // second:number
       
      ) {
        // this.day = date.getDate();
        // this.month = date.getMonth() + 1;
        // this.year = date.getFullYear();
        // this.hour = date.getHours();
        // this.minute = date.getMinutes();
        // this.second = date.getSeconds();
        this.date = date;
}

getNowDate(){
    return `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}, ${this.date.getHours()}/${this.date.getMinutes()}/${this.date.getSeconds()}`
}
}

const nowDate = new Date1(new Date);
console.log(nowDate.getNowDate())
