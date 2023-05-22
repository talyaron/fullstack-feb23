const hello:string|null = prompt("write your name")


function removeSpace (answer:string|null){
    return answer.replace(/\s/g, "");

}
 let result=removeSpace(hello) 
console.log(result);

