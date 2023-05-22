const x = prompt (" Write your gender:");

 function gender (gender:string | null): string {
    let i = ""
    if (gender === "male") {
    i = "Hello sir:)" 
    } 
    if (gender === "female") {
     i = "Hello Miss:)" 
    }
    return `${i}`
    }

    let result= (gender(x));
    document.write(result);


