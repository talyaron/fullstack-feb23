const type = prompt("what is your gender?")

function Hello(sug: string | null): string {
    let gender = ""
    if (sug === "male") {
        gender = "Sir"
    } else {
        if (sug === "female") {
            gender = "Miss"
        }
    }
    return `Hello ${gender} <br/>`
}

document.write(Hello(type))