// create a class about you (call it Person):
// properties: name,yearOfBirth, gender, city, hobby
// method: ageOfPerson

class person {
    name:string;
    yearOfBirth:number;
    gender:string;
    cityOfLiving:string;
    hobby:string;
    
    constructor(name:string,yearOfBirth:number,gender:string,cityOfLiving:string,hobby:string){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
        this.cityOfLiving = cityOfLiving;
        this.hobby = hobby
    }

    ageOfPerson() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

const alex = new person("Alex",1981,"male","Rishon","TypeScript");

console.log(alex.ageOfPerson)