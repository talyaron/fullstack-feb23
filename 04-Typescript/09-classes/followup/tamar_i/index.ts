class Person {
    name: string;
    yearOfBirth:number;
    gender:string;
    city:string;
    hobby:string;

    constructor(
        name: string,
        yearOfBirth:number,
        gender:string,
        city:string,
        hobby:string,
    ){
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.gender = gender;
      this.city = city;
      this.hobby = hobby;  
    }

    ageOfPerson(){
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

const tamar = new Person("tamar", 1985, "femal", "hadera", "reading");
console.log(tamar.ageOfPerson());



