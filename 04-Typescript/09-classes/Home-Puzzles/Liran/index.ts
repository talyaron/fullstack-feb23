class MyDate {
    day: number
    month: number
    year: number
    second: number
    minutes: number
    hours: number
    timePast: number

    constructor(date: Date) {
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.second = date.getSeconds();
        this.minutes = date.getMinutes();
        this.hours = date.getHours();
        this.timePast = 0;
    }

    getSimpleDate() {
        // return (`${this.day}/${this.month}/${this.year}, ${this.hours}:${this.minutes}:${this.second}`)
        return (this.day + "/" + this.month + "/" + this.year + ", " + this.hours + ":" + ((this.minutes > 9 || this.minutes < (-9)) ? Math.abs(this.minutes) : "0" + Math.abs(this.minutes))
            + ":" + ((this.second > 9 || this.second < (-9)) ? Math.abs(this.second) : "0" + Math.abs(this.second)))
    }
    getPassedDate() {
        debugger
        const current = new Date()
        console.log(`getPassed() on at: ${current}`)
        if (current.getSeconds() < this.second) {
            return (60-this.second + current.getSeconds()) + " second passed since MyDay created"
        }
        return (current.getSeconds() - this.second) + " second passed since MyDay created"

    }
}

const newDate = new MyDate(new Date())
console.log(newDate.getSimpleDate())

setTimeout(() => {
    console.log(newDate.getPassedDate());
}, 1000);
