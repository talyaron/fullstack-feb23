// const userName = "Moshe";
// const password = "1234";
// const profileImage = "....";

// const userName2 = "Miriam";
// const password2 = "123456";
// const profileImage2 = "....";

interface Person {
  userName: string;
  password: string;
  profileImage?: string;
  age?: number;
}

// //object
// const moshe = {
//   //key:value,
//   userName: "Moshe",
//   password: "1234",
//   profileImage: "...",
//   age: 3500,
// };

// console.log(moshe.userName, moshe.password);
// console.log(moshe);

const miriam: Person = {
  userName: "Miriam",
  password: "123456",
  profileImage: "...",
};

console.log(miriam.userName);
console.log(miriam["userName"]);

function sayHello(person: Person) {
  try {
    return `Hello ${person.userName}`;
  } catch (error) {
    console.error(error);
    return "I dont know how should I say hello to";
  }
}

console.log(sayHello(miriam));

//write a fucntion which gets username and password, and return Person object.

const userName3 = prompt("enter user name");
const password3 = prompt("Enter password");
debugger;
function createUser(userName: string|null, password: string|null): Person | undefined {
  try {

    if(!userName) throw new Error("Username is missing");
    if(!password) throw new Error("password is missing");

    // const user:Person = {userName:userName, password:password}
    const user: Person = { userName, password };
    return user;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}


console.log(createUser(userName3,password3));