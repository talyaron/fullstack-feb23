const a = Number( prompt("הכנס מספר ראשון"))
const b = Number( prompt("הכנס מספר שני"))


function add(x: number, y: number): number | undefined {
    try {
        if (isNaN(x) || isNaN(y)) throw new Error('input is not a number')
        if (typeof x !== 'number') throw new Error('input is not a number')
            return x + y
    } catch (error) {
        console.error(error)
        return
    }
}

console.log(add(a, b))