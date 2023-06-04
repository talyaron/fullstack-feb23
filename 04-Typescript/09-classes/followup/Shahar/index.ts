class Person {
    name:string;
    yearOfBirth:number;
     gender:string;
     city:string;
     hobby:string;

    constructor(
        name : string,
        yearOfBirth : number,
        gender : string,
        city : string,
        hobby : string
    ){
        this.name = name
        this.yearOfBirth = yearOfBirth
        this.gender = gender
        this.city = city
        this.hobby = hobby

    }
  ageOfPerson() {
    return new Date().getFullYear() - this.yearOfBirth;
  }
}


const Shahar = new Person( 'Shahar', 1996 , 'male' , 'Jerusalem' , 'Gaming' )
const Shay = new Person( 'Shay', 2001 , 'female' , 'Jerusalem' , 'Shopping' )
console.log(Shahar,Shay)
console.log('The age is of Shahar' ,  Shahar.ageOfPerson())
console.log('The age is of Shay' ,  Shay.ageOfPerson())

