var Nfactor = Number(prompt("Enter first positive number"));
// debugger;
while ((Number.isNaN(Nfactor)) || (Nfactor == null) || (Nfactor <= 0)) {
    if (Nfactor == 0) {
        Nfactor = Number(prompt("Don't leave empty, please enter positive number"));
    }
    else if (Nfactor < 0) {
        Nfactor = Number(prompt("Please use only positive numbers"));
    }
    else {
        Nfactor = Number(prompt("Please enter positive numbe, use only digits"));
    }
}
var Jfactor = Number(prompt("Enter second positive number"));
while ((Number.isNaN(Jfactor)) || (Jfactor == null) || (Jfactor <= 0)) {
    if (Jfactor == 0) {
        Jfactor = Number(prompt("Don't leave empty, please enter positive number"));
    }
    else if (Jfactor < 0) {
        Jfactor = Number(prompt("Please use only positive numbers"));
    }
    else {
        Jfactor = Number(prompt("Please enter positive numbe, use only digits"));
    }
}
var loopSum = 0;
var totalSum = 0;
for (var i = 1; i <= Jfactor; i++) {
    loopSum = 0;
    for (var l = 1; l <= Nfactor; l++) {
        loopSum += l;
    }
    totalSum += loopSum;
}
console.log("N = " + Nfactor + "  J = " + Jfactor);
var resString = "";
resString += "the result of 1+2...+N: ";
for (var l = 1; l <= Nfactor; l++) {
    if (l == Nfactor) {
        resString += l.toString() + " ";
    }
    else {
        resString += l.toString() + " + ";
    }
}
resString += "= " + loopSum;
console.log(resString);
resString = "the result of 1+2...+N, J times: ";
for (var i = 1; i <= Jfactor; i++) {
    for (var l = 1; l <= Nfactor; l++) {
        if ((l == Nfactor) && (i == Jfactor)) {
            resString += l.toString() + " ";
        }
        else {
            resString += l.toString() + " + ";
        }
    }
}
resString += "= " + totalSum;
console.log(resString);
