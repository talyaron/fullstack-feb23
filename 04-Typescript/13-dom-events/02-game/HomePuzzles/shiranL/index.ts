
// create clown
class clown {
   
    constructor(public title: string, public imgUrl: string, id:number) {}
    renderclown(clowns: HTMLElement | null) {
    
        try {
            if (!clowns) throw new Error("missing root element")
            const html: string = `<div class='card' id="${this.id}" onClick="reply_click(this.id)" ><img src="${this.imgUrl}"></div>`;
            clowns.innerHTML += html;
        } catch (error) {
            console.error(error)
        }
    }
}
function reply_click(clicked_id)
{
    debugger;
    console.log(clicked_id);
    return(clicked_id);
    
    
}
//get root of clowns class
const clownsHTML= document.querySelector('.clowns') as HTMLElement;
// new array of clowns
const clowns: clown[] =[]; 
//push and render
let newclown =new clown("shiran","./p1.png",1); newclown.renderclown(clownsHTML); clowns.push(newclown);
newclown =new clown("ohad","./p2.png",2); newclown.renderclown(clownsHTML); clowns.push(newclown);
newclown =new clown("Yarden","./p3.png",3); newclown.renderclown(clownsHTML); clowns.push(newclown); 
newclown =new clown("Yarden","./p3.png",4); newclown.renderclown(clownsHTML); clowns.push(newclown);
//console.log(clowns);


// get id from flick and move the element 

// document.addEventListener('click', (event: Event) => {
//     //if arrow up go up. if arrow down go down...
    
//     console.log(event);
   
// });


