//1

function hello (jander:string | null):string{
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
    if (num1 > num2) return num1
    else return num2
}

const num1:number = Number(prompt("please enter the first number"));
const num2:number = Number(prompt("please enter the srcond number"));

document.write(`the bigger number is ${max(num1,num2)} `);

//3
