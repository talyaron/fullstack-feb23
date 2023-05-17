

function deleteSpace(str:string):string{
    let newStr="";
    for(let i=0; i<str.length;i++){
        if(str[i] != " "){
            newStr+=str[i];
        }
    }
    return  newStr;
}

document.write(deleteSpace("Hellow world nkgf grei rk fd"))