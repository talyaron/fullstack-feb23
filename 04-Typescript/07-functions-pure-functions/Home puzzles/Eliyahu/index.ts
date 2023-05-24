let a = Number(prompt('הכנס מספר שלם'))



console.log(reverse(a))

function chack (sign:string):number | undefined{
    try {
        if (sign==='') throw new Error('the input is not a number')
        if (sign===null) throw new Error('the input is not a number')

        
    } catch (error) {
        console.error(error)
        return
    }
}

function reverse(num: number): number | undefined {
    try {
        if (isNaN(num)) throw new Error('the input is not a number')
        let result = 0
        const numst = num.toString()
        for (let i = 0; i < numst.length; i++) {
            let unit = Number(numst[i])
            unit = unit * Math.pow(10, i)
            result = result + unit
            // console.log(unit)

        }
        console.log(result)

    } catch (error) {
        console.error(error)
        return
    }
}




