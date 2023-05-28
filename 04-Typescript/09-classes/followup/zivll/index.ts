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

const ziv = new Person(`Ziv`, 1991, `Male`, `Petach-Tikva`, `Computers`);
console.log(ziv);
console.log(`your age is: ${ziv.ageOfPerson()}`);
