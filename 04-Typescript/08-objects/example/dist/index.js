var userName = "Moshe";
var password = "1234";
var profileImage = "....";
var userName2 = "Miriam";
var password2 = "123456";
var profileImage2 = "....";
//object
var moshe = {
    //key:value,
    userName: "Moshe",
    password: "1234",
    profileImage: "...",
    age: 3500
};
console.log(moshe.userName, moshe.password);
console.log(moshe);
var miriam = {
    userName: "Miriam",
    password: "123456",
    profileImage: "..."
};
console.log(miriam.userName);
console.log(miriam["userName"]);
function sayHello(person) {
    try {
        return "Hello " + person.userName;
    }
    catch (error) {
        console.error(error);
        return "I dont know how should I say hello to";
    }
}
console.log(sayHello(miriam));
//write a fucntion which gets username and password, and return Person object.
var userName3 = prompt("enter user name");
var password3 = prompt("Enter password");
debugger;
function createUser(userName, password) {
    try {
        if (!userName)
            throw new Error("Username is missing");
        if (!password)
            throw new Error("password is missing");
        // const user:Person = {userName:userName, password:password}
        var user = { userName: userName, password: password };
        return user;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(createUser(userName3, password3));
