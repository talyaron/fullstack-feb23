


let arrayOfNum=[5,2,4,1,9,3]




sort(arrayOfNum)



function sort(array){
    let sorted = false;

    while (!sorted) {
        sorted = true;
    
        for(let i=0;i<array.length;i++){
            console.log(arrayOfNum) 
            
            if(array[i]>array[i+1]){
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
            }
        
            
        }
    }    
  
    
    console.log(arrayOfNum,"finle")
    
}