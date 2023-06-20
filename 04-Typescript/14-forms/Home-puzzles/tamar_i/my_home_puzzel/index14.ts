//1) Create a form with the following inputs:

//Image URL: This input allows the user to enter the URL of an image.
//Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
//When the user submits the form, display the image on the screen with the specified width.

//data (model)
class imageDataFromUser {
    constructor(public imgUrl: string, public imgWidthSize: number, public multiple: number) { }
}

//keep all images 
const imgArray: imageDataFromUser[] = new Array();

//GUI - get from user
//controler - handel the data and add ut to the model (to the array)

function handelSubmitImg(event: any) {
    try {
        event.preventDefault();  //prevent default satting from work - mast!
       
        // console.log(event.target)
        console.dir(event);  //to see what we got in the consol

        const imgURL: string = event.target.elements.imgUrl.value;  //pey attention to the event.target.element.[name from html].value
        const imgWidthSize: number = event.target.elements.imgWidthSize.value;
        const multiple: number = event.target.elements.multiple.value;
        const imgData = new imageDataFromUser(imgURL, imgWidthSize, multiple);

        console.log(imgData); //to see that i got the data right

        // get the data and store it in the array
        imgArray.push(imgData);

        // call a function to rander the data to the html (DOM)
        const root: HTMLElement | null = document.querySelector('#root');
        
        for( let i=0; i<multiple; i++){
        renderImage(imgArray, root);}

        event.target.reset()

    } catch (error) {
        console.error(error);
    }
}

//controler - handel the data and render it to the DOM (write the function that we call in line 36)
function renderImage(imgArray: imageDataFromUser[], element: HTMLElement | null) {
    try {
        if (!element) throw new Error("element is not defined");  //check if we got an element from the html
        const backToHtml = imgArray.map((imgData) => renderpic(imgData)).join(" "); //imgData.map go all over the array, renderpic get inside every cell and render it
        
        element.innerHTML = backToHtml //send it back to the html
     
        // const lastIndex = imgArray.length - 1
        // element?.innerHTML = `<img src="${imgArray[lastIndex].imgUrl}" style="width: ${imgArray[lastIndex].imgWidthSize}px"/>`
    } catch (error) {
        console.error(error);
    }
}

function renderpic(imgData: imageDataFromUser) {
    try {
        const backToHtml =
            `<img class= "image" src="${imgData.imgUrl}"  style="width: ${imgData.imgWidthSize}px">`

            // <form onSubmit="chengeSize(event)">
            //     <input type="number" name="urlSize" placeholder="Enter image Size" value="${imgData.imgWidthSize}"/>
            //     <button type="submit">Chenge Size</button>
            // </form>`

        return backToHtml;

    } catch (error) {
        console.error(error);
    }
}

//an example to add a "change img size" option in the form and how to do it in ts +line 66-69

        // function chengeSize(ev) {
        //     ev.preventDefault()

        //     //find the image
        //     //update the value
        // }

//2) Create a form with the following inputs:

//Image URL: This input allows the user to enter the URL of an image.
//Number of Images: This input allows the user to enter a number.
//When the user submits the form, render multiple instances of the image on the screen, multiplied by the number provided by the user.
//Use the "Puzzle Users" class


function multiImg(imgData: imageDataFromUser) {
    return imgData.multiple
}