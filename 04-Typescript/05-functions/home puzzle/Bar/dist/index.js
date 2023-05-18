var gennder = prompt("are you a male or female?");
function ensWer(theGennder) {
    if ("male") {
        return "sir";
    }
    if ("female") {
        return "Miss";
    }
    else {
        return "you";
    }
}
var greeting = ensWer(gennder);
document.write("hello " + greeting);
// const gennDer = prompt("are you a male or female?");
// let theGennder = Gennder
// function sayHello(theGennder:string|null):string{
//     return `Hello ${theGennder}`;
// } 
// const greeting = sayHello(gennDer)
// document.write(greeting);
