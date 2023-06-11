
// image links
// https://www.w3schools.com/html/pic_trulli.jpg
// https://www.w3schools.com/html/img_girl.jpg
// https://www.w3schools.com/html/img_chania.jpg



const input:any=document.querySelector(".input")
const pictures:any=document.querySelector(".pictures")
let arrayOfPic:pictureArray[]=[]
let count=1



class pictureArray{

    picUrl:string;
    picNum:number;
    constructor(picUrl:string ,picNum:number){this.picUrl=picUrl, this.picNum=picNum};
   
    addToDOM(){
        return  pictures.innerHTML+=`<div class="picture">
        <img src="${this.picUrl}" class="pictureadded" alt=""> 
        <p>picture number:${this.picNum}</p>
        </div>`
    }
}


function addToArray(){
    arrayOfPic.push( new pictureArray(input.value,count))
    count++
    if(arrayOfPic.length==3){
        arrayOfPic.map(Event => {
            
            Event.addToDOM()
            }
        );
    }
}

