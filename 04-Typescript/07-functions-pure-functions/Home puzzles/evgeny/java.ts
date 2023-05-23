
const userGender =String (prompt("enter your gender, male/female/ other."))
const userHeight = Number (prompt('enter your height.'))


avarageHeight(userGender,userHeight)

function avarageHeight(gender:string,height:number){

    try {
        if((gender!=="male") && (gender!=="female") && (gender!=="other"))throw new Error('wrong gender entry');
        if(isNaN(height)) throw new Error('the entry is not a number');
        const femaleAvarage= 166
        const maleAvarage=177

        if(gender=="male"){
            if(height>177){
                return document.write(`your height is ${height-maleAvarage} above avarage`)
            }else if(height=maleAvarage){
                document.write("you are exactly at the avarage height ")
            }
            else document.write( `your height is ${maleAvarage-height} below avarage`)

        }

        if(gender=="female"){
            if(height>166){
                return document.write( `your height is ${height-femaleAvarage} above avarage`)
            }else if(height=femaleAvarage){
                document.write("you are exactly at the avarage height ")
            }
            else document.write( `your height is ${femaleAvarage-height} below avarage`)

        }

        if(gender=="other"){
            console.log("other does not exist")
        }

        
    } catch (error) {
        console.error(error)
    }


}