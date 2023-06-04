
class Person{

    name:string;
    yearOfBirth:number;
    gender:string;
    city:string;
    hooby:string;

    constructor(
        name:string,
        yearOfBirth:number,
        gender:string,
        city:string,
        hooby:string,
    ){
        this.name=name
        this.yearOfBirth=yearOfBirth
        this.gender=gender
        this.city=city
        this.hooby=hooby
    }
    ageOfPerson(){
        return new Date().getFullYear() - this.yearOfBirth;
    }


}

const evgeny= new Person("evgeny",1994,"male","holon","meh");

console.log(evgeny.ageOfPerson())