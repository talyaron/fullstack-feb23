//1

function hello (jander:string | null):string{
    if (jander=='mail'){
        return ("Hello sir")}

    else{
     if (jander=='female'){
        return ("Hello miss")}

        else
        return ("hello")
    }
}

const jander:string | null = prompt("what is your jander?");

document.write(hello(jander));


