class person {
    name: string;
    yearOfBirth: number;
    gender: string;
    city: string;
    hobby: string;

    constructor(
        name: string,
        yearOfBirth: number,
        gender: string,
        city: string,
        hobby: string,
    ){
        this.name= name;
        this.yearOfBirth= yearOfBirth;
        this.gender= gender;
        this.city= city;
        this.hobby= hobby;

    }
    ageofperson(){
        return (2023- this.yearOfBirth);
    }
}
const hadar = new person("hadar", 2001, "female", "Shoham", "painting");
console.log(hadar.ageofperson());