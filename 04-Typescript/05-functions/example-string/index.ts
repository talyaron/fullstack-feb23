const userName = prompt("What is your name?");

//single responsibilty principle
function sayHello(theName:string|null):string{
    return `Hello ${theName}`;
}


const greeting = sayHello(userName)
document.write(greeting);

