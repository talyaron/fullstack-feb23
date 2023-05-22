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
