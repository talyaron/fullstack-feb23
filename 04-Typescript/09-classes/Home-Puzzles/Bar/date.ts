class MyDate{
    date:Date;

    constructor(year:number, month:number, day:number){
        try {
            this.date = new Date(`${year}/${month}/${day}`);
            // this.date = new Date();
        } catch (error) {
            console.error(error)
        }
    }

    getDate(){
        return this.date;
    }
}

const date1 = new MyDate(2002,10,13);
console.log(date1.getDate());
