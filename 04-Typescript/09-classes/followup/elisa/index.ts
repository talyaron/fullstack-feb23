class Person {
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
    hobby: string
  ) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.gender = gender;
    this.city = city;
    this.hobby = hobby;
  }

  ageOfPerson() {
    return new Date().getFullYear() - this.yearOfBirth;
  }
}

const elisa = new Person('ELISA', 1968, 'Female', 'Ashdod', 'Traveling');
console.log(elisa);
console.log(elisa.ageOfPerson());
