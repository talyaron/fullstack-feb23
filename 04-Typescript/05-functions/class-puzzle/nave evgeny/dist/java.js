var hello = prompt("write your name");
function removeSpace(answer) {
    return answer.replace(/\s/g, "");
}
var result = removeSpace(hello);
console.log(result);
