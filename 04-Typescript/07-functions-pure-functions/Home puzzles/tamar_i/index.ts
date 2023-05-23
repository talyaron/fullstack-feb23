function reverse (num:number,digitlength:number):number|undefined{
    console.log(num)
      let newnum:number = 0;

    try {
         
        if (isNaN(num) || isNaN(digitlength)) throw new Error("num expected to be a number")

        for( let i=0 ; i<(digitlength-1) ; i++){
            newnum = newnum*10 + (num%10)
            num = (num - (num%10))/10
        }
        newnum = newnum*10 + num
        return newnum
    } catch (error) {
        console.error(error)
        return
    }
}

const x:number = Number(prompt("please enter a number"))
const digitlength:number = Number(prompt("plese enter how many digit have in the number you entered"))
console.log(reverse(x, digitlength))