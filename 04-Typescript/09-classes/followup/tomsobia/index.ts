class person {
    name:string
    age: string;
    yearOfBirth: number;
    gender: string;
    city: string;
    hobby: string;

    constructor(
        name:string,
        age: string,
        yearOfBirth: number,
        gender: string,
        city: string,
        hobby: string,
    
    ){
        this.name=name
        this.age=age
        this.yearOfBirth=yearOfBirth
        this.gender=gender
        this.city=city
        this.hobby=hobby
    }
    ageOfperson(){
        return new Date().getFullYear()- this.yearOfBirth
    }
}
const tom = new person ("tom","28",1994,"male","jerusalem","ps5");
console.log(tom.ageOfperson());

