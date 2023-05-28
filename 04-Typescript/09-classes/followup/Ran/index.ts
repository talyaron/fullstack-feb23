// // create a class about you (call it Person):
// properties: name,yearOfBirth, gender, city, hobby
// method: ageOfPerson

class Ran {
    name: string;
    yearofBirth: number;
    gender:string;
    city:string;
    hobby: string;

    constructor ( name: string, yearofBirth: number, gender:string, city:string, hobby: string) {
        this.name= name
        this.yearofBirth=yearofBirth
        this.gender = gender
        this.city = city
        this.hobby = hobby
    } 

    ageofPerson () {
        return new Date ().getFullYear() - this.yearofBirth
    }
}

const PropertiesofRan = new Ran ('Ran yamin', 2000, 'male', 'kiryat malachi','sports')
const ageOfPerson = PropertiesofRan.ageofPerson()
console.log(ageOfPerson)