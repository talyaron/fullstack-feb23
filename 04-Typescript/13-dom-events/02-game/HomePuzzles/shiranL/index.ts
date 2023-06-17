
// create clown
class clown {
   
    constructor(public title: string, public imgUrl: string, public id:string) {}
    renderclown(clowns: HTMLElement | null) {
    
        try {
            if (!clowns) throw new Error("missing root element")
            const html: string = `<div  onclick="getClickedID(this.id as id)" class='card' id="${this.id}" ><img src="${this.imgUrl}"></div>`;
            clowns.innerHTML += html;
        } catch (error) {
            console.error(error)
        }
    }
    
}
let clickedID =function getClickedID(id:string):string|null{
    debugger;
    return id;
}
//get root of clowns class
const clownsHTML= document.querySelector('.clowns') as HTMLElement;
// new array of clowns
const clowns: clown[] =[]; 
//push and render
let newclown =new clown("shiran","./p1.png","A1"); newclown.renderclown(clownsHTML); clowns.push(newclown);
newclown =new clown("ohad","./p2.png","A2"); newclown.renderclown(clownsHTML); clowns.push(newclown);
newclown =new clown("Yarden","./p3.png","A3"); newclown.renderclown(clownsHTML); clowns.push(newclown); 
newclown =new clown("Yarden","./p3.png","A4"); newclown.renderclown(clownsHTML); clowns.push(newclown);

// document.addEventListener('keyup', (event: KeyboardEvent) => {
//     //if arrow up go up. if arrow down go down...
  
//     console.log(event);
//     if(clickedID!=null)
//     {
//         const selectedclownsHTML= document.querySelector(`#${clickedID}`) as HTMLElement;

//     }
//     // switch (event.key) {
        
//     //     case 'ArrowUp':

//     //         box.style.top = `${box.offsetTop - 10}px`;
//     //         break;
//     //     case 'ArrowDown':
//     //         box.style.top = `${box.offsetTop + 10}px`;
//     //         break;
//     //     case 'ArrowLeft':
//     //         box.style.left = `${box.offsetLeft - 10}px`;
//     //         break;
//     //     case 'ArrowRight':

//     //         box.style.left = `${box.offsetLeft + 10}px`;
//     //         break;
//     //     case " ":
//     //         const urlMonster = 'url("./dist/packman-monster.png")'
//     //         const urlPackman = 'url("./dist/packman.png")'

//     //         if (box.style.backgroundImage === urlMonster) {
//     //             box.style.backgroundImage = urlPackman;
//     //         } else {
//     //             box.style.backgroundImage = urlMonster;
//     //         }

//     //         break;



//     // }
// });