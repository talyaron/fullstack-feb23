
class clown {
    constructor(public title: string, public imgUrl: string | null, public id: string) {}
    renderclown(clowns: HTMLElement | null) {
      try {
        if (!clowns) throw new Error("missing root element");
        const html: string = `<div class='card' id="${this.id}"><img class="img" src="${this.imgUrl}"></div>`;
        clowns.innerHTML += html;
      } catch (error) {
        console.error(error);
      }
    }
  }
  // New array of clowns
  const clowns: clown[] = [];
  
  // Get root of clowns class
  const clownsHTML = document.querySelector('#clowns') as HTMLElement;
  
  
  // Push and render
  let newclown = new clown("shiran", "./p1.png", "A1");
  newclown.renderclown(clownsHTML);
  clowns.push(newclown);
  
  newclown = new clown("ohad", "./p2.png", "A2");
  newclown.renderclown(clownsHTML);
  clowns.push(newclown);
  
  newclown = new clown("Yarden", "./p3.png", "A3");
  newclown.renderclown(clownsHTML);
  clowns.push(newclown);
  
  //public define the selected clown
  let currentPositionX = 0;
  let currentPositionY = 0;
  let selectedClownElement: HTMLElement | null = null; // Store the selected clown element
  let indexID=4;
  
  // listen to click and get id
  clownsHTML.addEventListener('click', function handleClick(event) {
    if (event.target.className === 'img') {
      // Reset border for all clowns
      clowns.forEach((clown) => {
        const clownElement = document.getElementById(clown.id);
        if (clownElement) {
          clownElement.style.border = 'none';
        }
      });
  
      const clickedClownElement = event.target.parentElement; // Get the parent element (card div)
      clickedClownElement.style.border = '5px solid red'; // Apply border to the clicked clown
  
      selectedClownElement = clickedClownElement; // Store the selected clown element for movement
      currentPositionX = 0;
      currentPositionY = 0;
    }
  });
  
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    debugger;
    if (selectedClownElement) {
      switch (event.key) {
        case 'ArrowUp':
          currentPositionY -= 10;
          break;
        case 'ArrowDown':
          currentPositionY += 10;
          break;
        case 'ArrowLeft':
          currentPositionX -= 10;
          break;
        case 'ArrowRight':
          currentPositionX += 10;
          break;
      }
  
      // Apply new position to the selected clown
      
      selectedClownElement.style.left = currentPositionX + 'px';
      selectedClownElement.style.top = currentPositionY + 'px';
    }
  });
  // get new details for new clown
  function getclownDetails():clown|false{
    try
   {
    const title = prompt("What is the name of the clown?");
    const imgUrl = prompt("add image url")
    if (!title || !imgUrl) throw new Error("Missing details")

    const newClown = new clown(title, imgUrl,`A${indexID}`);
    indexID++;
    return newClown;
    } 
    catch (error) 
    {
      console.log(error);
      return false;
        
    }
}
// add new clown
function addClown(){
 const clown = getclownDetails();
if (clown) {
    clown?.renderclown(clownsHTML);
    clowns.push(clown)
}
}

