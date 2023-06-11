// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM
const imgInput: HTMLInputElement = document.querySelector("#userInput") as HTMLInputElement;
const imgContainer: HTMLImageElement = document.querySelector("#boxImg") as HTMLImageElement;

if(imgInput.value === "") {
    imgInput.placeholder = "הכנס URL כאן";
}

function printImg(): void {
  imgContainer.src = imgInput.value;
}

imgInput.addEventListener("input", printImg);
