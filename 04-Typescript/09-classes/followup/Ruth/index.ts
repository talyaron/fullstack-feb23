class Person {
  name: string;
  yearOfBirth: number;
  gender: string;
  city: string;
  hobbies: string;

  constructor(
    _name: string,
    _yearOfBirth: number,
    _gender: string,
    _city: string,
    _hobbies: string,
  ) {
    this.name = _name;
    this.yearOfBirth = _yearOfBirth;
    this.gender = _gender;
    this.city = _city;
    this.hobbies = _hobbies;
  }

  getAge() {
    return new Date().getFullYear() - this.yearOfBirth;
  }
}

const ruth = new Person(
  "Ruth BenTov",
  2001,
  "female",
  "jerusalem",
  "hike, bike, play guitar",
);

console.log(ruth);
console.log(`${ruth.name} is ${ruth.getAge()} years old`);
