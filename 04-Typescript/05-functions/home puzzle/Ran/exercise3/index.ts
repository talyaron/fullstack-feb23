let Numbers:number[]= [17,10,45,21,48,65,78,23];
let big = 0;
debugger;
function BigggertoSmallest (arr_Num:number[]) {
   
   for(let j=0;j<arr_Num.length;j++) 
   {
        for (let i=0;i<arr_Num.length;i++) 
        {
             if (arr_Num[i] > arr_Num[i++]) 
              {
                 big=arr_Num[i];
                 arr_Num[i]=arr_Num[i++];
                 arr_Num[i++]=big;  

              }
        }
    }          
    
}   

 BigggertoSmallest (Numbers)
console.log(Numbers)
