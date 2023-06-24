class celebs{
    name:string;
    genre: string;
    accountTikTok: string;
    accountInstagram: string;
    numberoffollowers: number;

    constructor(name:string, genre:string, accountTikTok:string, accountInstagram:string, numberoffollowers:number, ){
        this.name= name;
        this.genre= genre;
        this.accountTikTok=accountTikTok ;
        this.accountInstagram= accountInstagram;
        this.numberoffollowers= numberoffollowers;
    }

    get(){
        return this.numberoffollowers;
    }

    set(num:number){
        this.numberoffollowers= num;
        return num;
    }
}

const tom= new celebs("tom","singer","tomsobia","tomsobia2",1000000)
const hadar= new celebs("hadar","singer","hadaritzhaki","hadaritzhaki2",100)
// console.log(tom.numberoffollowers)
// console.log(tom.accountTikTok)

function themostfollowers(num1:number, num2:number):string| undefined{
    if(num1>num2){
        return tom.name
    }
    else{
        return hadar.name
    }
}

console.log(themostfollowers(tom.numberoffollowers,hadar.numberoffollowers))