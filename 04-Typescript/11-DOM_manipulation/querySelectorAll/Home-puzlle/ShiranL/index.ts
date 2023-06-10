function GetRandomNumber(max:number){
    return Math.floor( Math.random()*max)
}
class ImageToShow{
    link:string|null;
    constructor(link:string){
      this.link = link;
    }
    getLink(){
      return this.link;
    }
  }

  class ImageSToShow {
    image :ImageToShow[]
    constructor(){
      this.image = [];
    }
    newLink(link : ImageToShow){
        this.image.push(link)
      }
    setBackroundImgNox(){
      
        for (let i = 0; i<5; i++)
        { 
            debugger;
            const promptLink: string | null= prompt("enter image link");
            if(promptLink)
            {
                const image=new ImageToShow(promptLink);
                imageSToShow.newLink(image);
            }
        }
        const boxes:NodeListOf<HTMLDivElement> = document.querySelectorAll(".box") 
        let i=0
        boxes.forEach((box)=>{
            box.style.backgroundImage = `url('${this.image[i].link}')`;
            i++
        })
       
    }
  } 


const imageSToShow = new ImageSToShow();
imageSToShow.setBackroundImgNox();