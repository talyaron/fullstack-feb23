// const userName2 = prompt("say again your name 2")
var userName = prompt("what is your name?");
var theBigName = "David";
var greeting = sayHello(userName);
console.log(greeting);
//pure function
function sayHello(userName) {
    try {
        return "Hi " + userName;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
console.log(sayHello("Miriam"));
// const x = 12;
// function multi(a){
//     const x = 10;
//     return a*x;
// }
// console.log(x)
// console.log( multi(2))
