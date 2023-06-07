// 2) get five image URLs from the user and print five images on the DOM.
const imgInput: HTMLInputElement = document.querySelector("#userInput") as HTMLInputElement;
const imgContainer: HTMLImageElement = document.querySelector("#portrait") as HTMLImageElement;

if(imgInput.value === "") {
    imgInput.placeholder = "Enter a URL";
}

function printImg(): void {
  imgContainer.src = imgInput.value;
}

imgInput.addEventListener("input", printImg);