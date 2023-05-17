

let text1 = "Hello world";
let result1 = text1.replace(" ","");

console.log(removeSpace('hello world'));
document.write(result1)
console.log(removeSpace(text1));

function removeSpace(text){
    let result = text.replace(" ","");
    return result;

}
