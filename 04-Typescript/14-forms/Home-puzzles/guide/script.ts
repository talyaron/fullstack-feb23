// 1) Create a form with the following inputs:

// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.

const inputImg = document.querySelector(".pic");
const sizeImg = document.querySelector(".picSize");

class User{
    constructor(public userPics: string,public imgSize: number){
    }
}

const userArray: User[] = new Array();

function handleImg (event:any){
    // event.preventDefault()
    
    const input = event.target.inputImg.value;
    const size = event.target.sizeImg.value;
    console.dir(input, size)
    const newImg = new User(inputImg)
    const newSize = new User(sizeImg)
    console.log(newImg, newSize)
}
handleImg()

const x: string | null = prompt("Enter a number!!!?");

if (x !== null) {
  const y: number = parseInt(x);

  function tom(a: number) {
    return a * (-1);
  }

  console.log(tom(y));
} else {
  console.log("Prompt canceled or no input provided.");
}

