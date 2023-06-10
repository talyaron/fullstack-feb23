// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM

const page = document.body
const p = document.createElement('p')

function getImage() {
    try {
        const imageOne :string | null = prompt('Enter the first image url');
        const imageTwo :string | null = prompt('Enter the second image url');
        const imageThree :string | null = prompt('Enter the third image url');
        const imageFour :string | null = prompt('Enter the fourth image url');
        const imageFive :string | null = prompt('Enter the fifth image url');

        const imageContainer :HTMLDivElement | null= document.querySelector('#image-container');
        if (imageContainer){
            if (imageOne) {
                const imgOne = document.createElement('img');
                imgOne.src = imageOne;
                imageContainer.appendChild(imgOne);
            }
    
            if (imageTwo) {
                const imgTwo = document.createElement('img');
                imgTwo.src = imageTwo;
                imageContainer.appendChild(imgTwo);
            }
    
            if (imageThree) {
                const imgThree = document.createElement('img');
                imgThree.src = imageThree;
                imageContainer.appendChild(imgThree);
            }
    
            if (imageFour) {
                const imgFour = document.createElement('img');
                imgFour.src = imageFour;
                imageContainer.appendChild(imgFour);
            }
            if (imageFive) {
                const imgFive = document.createElement('img');
                imgFive.src = imageFive;
                imageContainer.appendChild(imgFive);
            }
        }

    }
    catch (error) {
        console.error(error)
    }
}

getImage();

