// create a class about you (call it Person):
// properties: name,yearOfBirth, gender, city, hobby
// method: ageOfPerson
class person {
    name: string ;
    yearOfBirth: number; 
    gender: string ;
    city: string ; 
    hobby:  string ; 
    constructor( 
        name: string ,
        yearOfBirth: number, 
        gender: string ,
        city: string , 
        hobby:  string ,)
        {
        
            this.name = name ;
            this.yearOfBirth = yearOfBirth ;
            this.gender = gender ;
            this.city = city ;
            this.hobby = hobby ;
        }

        ageOfPerson() {
            return new Date().getFullYear() - this.yearOfBirth;
          }
    }

    const nave =  new person("lior",1998, "male","tel aviv", " games"  )
    console.log(nave);
    console.log(nave.ageOfPerson());
    
    
