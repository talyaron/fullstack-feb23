var Nfactor = Number(prompt("Enter first positive number"))
// debugger;

/* input from User */
while((Number.isNaN(Nfactor)) || (Nfactor == null) || (Nfactor <= 0))
{
    if(Nfactor == 0)
    {
        Nfactor = Number(prompt("Don't leave empty, please enter positive number"))
    }
    else if(Nfactor < 0){
        Nfactor = Number(prompt("Please use only positive numbers"))
    }
    else{
        Nfactor = Number(prompt("Please enter positive numbe, use only digits"))
    }

}
var Jfactor = Number(prompt("Enter second positive number"))
while((Number.isNaN(Jfactor)) || (Jfactor == null) || (Jfactor <= 0))
{
    if(Jfactor == 0)
    {
        Jfactor = Number(prompt("Don't leave empty, please enter positive number"))
    }
    else if(Jfactor < 0){
        Jfactor = Number(prompt("Please use only positive numbers"))
    }
    else{
        Jfactor = Number(prompt("Please enter positive numbe, use only digits"))
    }

}


var loopSum:number = 0;
var totalSum:number = 0;
for(let i = 1; i <= Jfactor; i++){  // Loops to calculate (1+2+3..+N) * J
    loopSum = 0;
    for(let l = 1; l <= Nfactor; l++){ // single inside loop calculation
        loopSum+=l;
    }
    totalSum+=loopSum;
}

console.log(`N = ${Nfactor}  J = ${Jfactor}`)
let resString:string = "";
resString += "the result of 1+2...+N: ";
for(let l = 1; l <= Nfactor; l++){   // Loops to build single loop string printed to console
    if(l==Nfactor){
        resString += l.toString() + " ";
    }
    else{
        resString += l.toString() + " + ";
    }
}
resString += "= " + loopSum;
console.log(resString)

resString = "the result of 1+2...+N, J times: ";
for(let i = 1; i <= Jfactor; i++){          // Loops to build full result string printed to console
    for(let l = 1; l <= Nfactor; l++){
        if((l==Nfactor) && (i == Jfactor)){
            resString += l.toString() + " ";
        }
        else{
            resString += l.toString() + " + ";
        }
    }
}

resString += "= " + totalSum;
console.log(resString)
confirm("See result in Console")