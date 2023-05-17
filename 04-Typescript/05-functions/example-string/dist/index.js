var userName = prompt("What is your name?");
//single responsibilty principle
function sayHello(theName) {
    return "Hello " + theName;
}
var greeting = sayHello(userName);
document.write(greeting);
