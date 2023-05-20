//1

function hello (jander:string | null):string{
    console.log(jander);

    if (jander=='mail'){
        return ("Hello sir, ")}

    else{
     if (jander=='female'){
        return ("Hello miss, ")}

        else
        return ("hello, ")
    }
}

const jander:string | null = prompt("what is your jander?");

document.write(hello(jander));

//2

function max (num1:number, num2:number):number {
    console.log(`max-numbers: ${num1}, ${num2}`);

    if (num1 > num2) return num1
    else return num2
}

const num1:number = Number(prompt("please enter the first number"));
const num2:number = Number(prompt("please enter the srcond number"));

document.write(`the bigger number is ${max(num1,num2)}. `);

//3

function min (num1:number, num2:number):number {
    console.log(`min-numbers: ${num1}, ${num2}`);

    if (num1 < num2) return num1
    else return num2
}

function sortArraymintomax (arr:number[],lenght:number):number[]{
    console.log(`lenght=${lenght}`);
    let big:number = 0;
  
    for (let i=0 ; i<(lenght-1) ; i++){
        big = max(arr[i],arr[i+1]);
        arr[i] = min(arr[i], arr[i+1]);
        arr[i+1] = big;

        console.log(`i=${i}, arr[${i}]=${arr[i]}, big=${big}`);
    }
    return arr;
}

let lenght:number = Number(prompt("enter the length of your array"));

function getArray (lenght:number):number[]{
    let arr:number[] = [0]
      
    for (let i=0; i<lenght; i++){
        arr[i] = Number(prompt("enter a number")); 
    }
    console.log(arr);
    return arr;
}

let arr:number[] = getArray(lenght);

document.write(`the sort array is ${sortArraymintomax(arr,lenght)}`);