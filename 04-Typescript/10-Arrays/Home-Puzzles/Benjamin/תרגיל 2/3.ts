
let usernum = 25468964

function benji(numer: number) {
    let newArr = numer.toString().split('').map(Number);
    let finalArr: string[] = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] % 2 == 0 && newArr[i+1] % 2 == 0) {
            finalArr.splice(i, 0, `${newArr[i]}-`)
        }
        else {
            finalArr.splice(i, 0, `${newArr[i]}`)
        }
    }
    return finalArr.join('')
}

console.log(benji(usernum))
