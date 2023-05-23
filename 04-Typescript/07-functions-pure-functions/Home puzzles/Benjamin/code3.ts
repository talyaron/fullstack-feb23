const x:string|null= prompt("please insert your number")
let numlength:any
let mnumber: any
if (x !== null){
   numlength= x.length
   mnumber= parseFloat(x);
}



function reverse(revnum:number){
    try{
        // debugger;
        if(revnum === null) throw new Error("input is null")
        if(isNaN(revnum)) throw new Error("input is NaN")
   let reversenum:string=''
   let newarray:number[]=[]
   for (let i=0; i<numlength; i++){
    let c=((revnum%(Math.pow(10, (i+1)))-(revnum%(Math.pow(10, i))))/(Math.pow(10, i)))
    newarray.push(c)
    reversenum= reversenum+c

   }

return reversenum
}
catch(error){
console.error(error)
return undefined
}
}

console.log(reverse(mnumber));