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


const num1 = Number(prompt("הכנס מספר להשוואה"))
const num2 = Number(prompt("הכנס מספר נוסף להשוואה"))

function max(a: number, b: number): number {
    if (a > b) {
        return a
    }
    else {
        return b
    }
}

document.write(`The big number is ` + (max(num1, num2)).toString() +`<br/>`)



let nums = []
const lng = Number(prompt("כמה מספרים יש במערך?"))

for (let z = 0; z < lng; z++) {
    let n = Number(prompt("הכנס מספר"))
    nums.push(n)
}

function order(arr: number[]) {
    let orderNums = []
    for (let j = 0; j < arr.length; j++) {
        let x = 0
        for (let i = 0; i < arr.length; i++) {
            if (x < arr[i]) {
                x = arr[i]
            }
        }
        arr[arr.indexOf(x)] = 0
        orderNums.unshift(x)


    }
    return orderNums
}
let result = (order(nums))
document.write(`Here your array sort by order: ` + (result.toString()))



