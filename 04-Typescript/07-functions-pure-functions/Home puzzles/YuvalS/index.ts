const m = Number(prompt("give me first number"));
function reverseTheNumber (m: number){
    try {
        if(isNaN(m)) throw new Error("input is NaN");
        const j = m.toString()
        return j.split("").reverse().join("");
}

     catch (error) {
        console.error(error);
    return undefined;
    }
}
console.log(reverseTheNumber(m))
