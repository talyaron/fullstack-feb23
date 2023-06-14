// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM


const imageContainer = document.createElement('div') as HTMLDivElement;
    imageContainer.className = 'container';
    
    document.body.append(imageContainer)



const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();
});
// First Field
const nameOfUser = document.querySelector('#name') as HTMLInputElement;
const span = document.querySelector('span') as HTMLLabelElement ;
const submitBtn = document.querySelector('#submitBtn') as HTMLButtonElement;

submitBtn.addEventListener('click', () => {
    const nameUser = nameOfUser.value;
    const additionalText = '!'
    
    span.textContent = nameUser + additionalText;
    secondField.classList.toggle('secondField')
})

// Second Field
const addBtnSecondField = document.querySelector('#addBtnSecondField') as HTMLButtonElement;
const inputSecondField = document.querySelector('#inputSecondField') as HTMLInputElement;
const secondField = document.querySelector('.field.secondField') as HTMLDivElement;

addBtnSecondField.addEventListener('click', () => {
    const url = inputSecondField.value;
    const img = document.createElement('img');
    img.src = url
    
    imageContainer.append(img);
    thirdField.classList.toggle('thirdField')
});

// third Field
const addBtnThirdField = document.querySelector('#addBtnThirdField') as HTMLButtonElement;
const thirdField = document.querySelector('.field.thirdField') as HTMLDivElement;
const inputThirdField = document.querySelector('#inputThirdField') as HTMLInputElement;

addBtnThirdField.addEventListener('click', ()=> {
    const url = inputThirdField.value;
    const img = document.createElement('img');
    img.src = url
    
    imageContainer.append(img);
    fourthField.classList.toggle('fourthField')
    
})

// fourth Field
const fourthField = document.querySelector('.field.fourthField') as HTMLDivElement;
const inputFourthField = document.querySelector('#inputFourthField') as HTMLInputElement;
const addBtnFourthField = document.querySelector('#addBtnFourthField') as HTMLButtonElement;

addBtnFourthField.addEventListener('click', ()=> {
    const url = inputFourthField.value;
    const img = document.createElement('img');
    img.src = url
    
    imageContainer.append(img);
    fifthField.classList.toggle('fifthField')
})

// fifth Field
const fifthField = document.querySelector('.field.fifthField') as HTMLDivElement;
const inputFifthField =document.querySelector('#inputFifthField') as HTMLInputElement;
const addBtnFifthField = document.querySelector('#addBtnFifthField') as HTMLButtonElement;

addBtnFifthField.addEventListener('click', ()=> {
    const url = inputFifthField.value;
    const img = document.createElement('img');
    img.src = url
    
    imageContainer.append(img);
    sixthField.classList.toggle('sixthField')
})

// sixth Field
const sixthField = document.querySelector('.field.sixthField') as HTMLDivElement;
const inputSixthField = document.querySelector('#inputSixthField') as HTMLInputElement;
const addBtnSixthField = document.querySelector('#addBtnSixthField') as HTMLButtonElement;

addBtnSixthField.addEventListener('click', ()=> {
    const url = inputSixthField.value;
    const img = document.createElement('img');
    img.src = url
    
    imageContainer.append(img);
})

























// const page = document.querySelector('.page') as HTMLDivElement;
// console.log(page.children);
// const p = document.createElement('p')
// page.append(p)
// if (page) {
    
    //     page.append(p)
    //     p.innerText = 'images';
    // }
    // page.append(p)
    // p.innerHTML = "<strong>images</strong>";
    // const imageContainer = document.createElement('imageContainer')
    // page?.append(imageContainer)


// function getImage() {
    //     try {
        //         const imageOne :string | null = prompt('Enter the first image url');
        //         const imageTwo :string | null = prompt('Enter the second image url');
        //         const imageThree :string | null = prompt('Enter the third image url');
        //         const imageFour :string | null = prompt('Enter the fourth image url');
//         const imageFive :string | null = prompt('Enter the fifth image url');

//         const imageContainer :HTMLDivElement | null= document.querySelector('#image-container');

//         if (imageContainer){
//             if (imageOne) {
//                 const imgOne = document.createElement('img');
//                 imgOne.src = imageOne;
//                 imageContainer.append(imgOne);
//             }
    
//             if (imageTwo) {
//                 const imgTwo = document.createElement('img');
//                 imgTwo.src = imageTwo;
//                 imageContainer.append(imgTwo);
//             }
    
//             if (imageThree) {
//                 const imgThree = document.createElement('img');
//                 imgThree.src = imageThree;
//                 imageContainer.append(imgThree);
//             }
    
//             if (imageFour) {
//                 const imgFour = document.createElement('img');
//                 imgFour.src = imageFour;
//                 imageContainer.append(imgFour);
//             }
//             if (imageFive) {
//                 const imgFive = document.createElement('img');
//                 imgFive.src = imageFive;
//                 imageContainer.append(imgFive);
//             }
//         }

//     }
//     catch (error) {
//         console.error(error)
//     }
// }

// getImage();


