
 const myGender = prompt ("Your gender");

 function greet (gender:string | null): string {
    let you = ""
    if (gender === "male") {
    you = "Hello Mr." 
    } 
    if (gender === "female") {
     you = "Hello Mrs." 
    }
    return `${you} <br/>`
    }

    document.write(greet(myGender))








