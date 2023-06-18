// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM
var imageContainer = document.createElement('div');
imageContainer.className = 'container';
document.body.append(imageContainer);
var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
});
// First Field
var nameOfUser = document.querySelector('#name');
var span = document.querySelector('span');
var submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', function () {
    var nameUser = nameOfUser.value;
    var additionalText = '!';
    span.textContent = nameUser + additionalText;
    secondField.classList.toggle('secondField');
});
// Second Field
var addBtnSecondField = document.querySelector('#addBtnSecondField');
var inputSecondField = document.querySelector('#inputSecondField');
var secondField = document.querySelector('.field.secondField');
addBtnSecondField.addEventListener('click', function () {
    var url = inputSecondField.value;
    var img = document.createElement('img');
    img.src = url;
    imageContainer.append(img);
    thirdField.classList.toggle('thirdField');
});
// third Field
var addBtnThirdField = document.querySelector('#addBtnThirdField');
var thirdField = document.querySelector('.field.thirdField');
var inputThirdField = document.querySelector('#inputThirdField');
addBtnThirdField.addEventListener('click', function () {
    var url = inputThirdField.value;
    var img = document.createElement('img');
    img.src = url;
    imageContainer.append(img);
    fourthField.classList.toggle('fourthField');
});
// fourth Field
var fourthField = document.querySelector('.field.fourthField');
var inputFourthField = document.querySelector('#inputFourthField');
var addBtnFourthField = document.querySelector('#addBtnFourthField');
addBtnFourthField.addEventListener('click', function () {
    var url = inputFourthField.value;
    var img = document.createElement('img');
    img.src = url;
    imageContainer.append(img);
    fifthField.classList.toggle('fifthField');
});
// fifth Field
var fifthField = document.querySelector('.field.fifthField');
var inputFifthField = document.querySelector('#inputFifthField');
var addBtnFifthField = document.querySelector('#addBtnFifthField');
addBtnFifthField.addEventListener('click', function () {
    var url = inputFifthField.value;
    var img = document.createElement('img');
    img.src = url;
    imageContainer.append(img);
    sixthField.classList.toggle('sixthField');
});
// sixth Field
var sixthField = document.querySelector('.field.sixthField');
var inputSixthField = document.querySelector('#inputSixthField');
var addBtnSixthField = document.querySelector('#addBtnSixthField');
addBtnSixthField.addEventListener('click', function () {
    var url = inputSixthField.value;
    var img = document.createElement('img');
    img.src = url;
    imageContainer.append(img);
});
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
