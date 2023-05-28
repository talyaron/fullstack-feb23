class Person{
    name:string
    ageOfBirth:number
    gender:string
    city:string
    hobby:string

    constructor(
        name:string,
        ageOfBirth:number,
        gender:string,
        city:string,
        hobby:string
    )
    {
        this.name = name;
        this.ageOfBirth = ageOfBirth
        this.gender = gender
        this.city = city;
        this.hobby = hobby
    }

    ageOfPerson(){
        return new Date().getFullYear()-this.ageOfBirth;
    }
}


const liran = new Person("Liran",1989,"Male","Yoqne'am","football");
console.log(liran)
console.log(liran.ageOfPerson())