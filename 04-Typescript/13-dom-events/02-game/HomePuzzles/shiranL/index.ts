
// create clown
class clown {
   
    constructor(public title: string, public imgUrl: string, public id:string) {}
    renderclown(clowns: HTMLElement | null) {
    
        try {
            if (!clowns) throw new Error("missing root element")
            const html: string = `<div  onclick="move(this.id)" class='card' id="${this.id}" ><img src="${this.imgUrl}"></div>`;
            clowns.innerHTML += html;
        } catch (error) {
            console.error(error)
        }
    }
}
function move(clicked_id :string)
{ debugger;
    const moveclown: HTMLElement | null = document.querySelector(`#${clicked_id}`);
    document.addEventListener('keyup', (event: KeyboardEvent) => {
        //if arrow up go up. if arrow down go down...
        console.log(event);
   
        
    });
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
document.onkeydown = detectKey;
