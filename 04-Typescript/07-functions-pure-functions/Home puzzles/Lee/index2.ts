const yourHeight:number = Number(prompt("What is your height"))
const yourGender:string | null = (prompt("What is your gender"))



function averageHeight(height:number, gender: string | null) {

    const femaleAvarage = 165
    const maleAvarage = 175

    try {
        if (gender === "male" && height > 175) {
            return document.write(`your height is ${height-maleAvarage} above avarage`)
        }
        else if (gender === "male" && height < 175) {
            return document.write(`your height is ${maleAvarage-height} below avarage`)
        }

        else if (gender === "female" && height > 165) {
            return document.write(`your height is ${height-femaleAvarage} above avarage`)
        }
        else if (gender === "female" && height < 165) {
            return document.write(`your height is ${femaleAvarage-height} below avarage`)
        }
        else {
            return document.write(`Enter a valid number`)
        }
    } catch (error) {
        console.error(error)
        return undefined;
    }
}
console.log (averageHeight(yourHeight, yourGender))