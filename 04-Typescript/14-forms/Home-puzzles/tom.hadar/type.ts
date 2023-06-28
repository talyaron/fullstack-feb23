// class
const root=document.querySelector("#root") as HTMLDivElement
class Uzer{
    constructor(public imgUrl:string,public width:number){}
}

const Imgarr:Uzer[]=new Array();
function UrlWidth(event:any){
try {
    event.preventDefault();
    const imgUrl=event.target.imgUrl.value
    const width =event.target.width.value
    const data = new Uzer (imgUrl,width);
    console.log(data)
    Imgarr.push(data)
    console.log(Imgarr)
    event.target.reset()
} catch (error) {
    console.log(error);
}
}

    