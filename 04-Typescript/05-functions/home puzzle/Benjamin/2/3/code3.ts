// debugger;
console.log("hey")
let x = prompt("please insert the length of your array");
let arrlength: number = 0
if (x != null) {
    arrlength = parseFloat(x);
}
let userarray: number[] = [];
for (let i = arrlength; i > 0; i--) {
    let y = prompt("please insert a number");
    let newnum
    if (y != null) {
        newnum = parseInt(y)
    }
    userarray.push(newnum)
}


function sorter(anarray): Array {
    let arrayb: number[] = [];
    let c: number = anarray[0];

    for (let m = arrlength; m > 0; m--) {
        for (let i = 0; i < arrlength - 1; i++) {

            if (c < anarray[i + 1]) {

            }
            else {
                c = anarray[i + 1]

            }
        }
        let u = anarray.indexOf(c)
        arrayb.push(c);
        anarray.splice(u, 1)
        c = anarray[0];
        arrlength--
    }
    return (arrayb);
}

let sortedarray = sorter(userarray);
console.log(sortedarray)