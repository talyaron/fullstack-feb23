
const num = (prompt("enter number")) || '';
const tempNumArr = num.split('');
let reversed = '';




function numreversed: string | undefined {
    try {

        for (let i = tempNumArr.length - 1; i >= 0; i--) {
            reversed += tempNumArr[i];
        }
        return reversed;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(numreversed());