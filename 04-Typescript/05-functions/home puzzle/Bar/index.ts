const gennder = prompt("are you a male or female?");


function ensWer(theGennder: string | null): string {
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

const greeting = ensWer(gennder)
document.write(`hello ${greeting}`)