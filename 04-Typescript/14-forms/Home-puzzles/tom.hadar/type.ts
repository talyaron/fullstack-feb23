// complete on your own the class puzzle

// 1) Create a form with the following inputs:
// `
// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.


// 2) Create a form with the following inputs:

// Image URL: This input allows the user to enter the URL of an image.
// Number of Images: This input allows the user to enter a number.
// When the user submits the form, render multiple instances of the image on the screen, multiplied by the number provided by the user.
// Use the "Puzzle Users" class:

// 3) Access the "Puzzle class" class, which likely represents a collection of user data or user profiles.
// Edit each card: Update the information contained in each card, such as modifying user details or deleting a card from the collection.
// These instructions outline three different tasks: creating a form to render an image with a specified width, creating a form to render multiple images, and using the "Puzzle Users" class to edit user cards. Each task has specific requirements and actions to be performed.

// level 1


// class Img {
//   constructor(public imgUrl, public width) {}
// }

// const imgs = [];

// function UrlWidth(event) {
//   try {
//     event.preventDefault();
//     const imgUrl = event.target.elements.imgUrl.value;
//     const width = event.target.elements.width.value;
//     const data = new Img(imgUrl, width);
//     imgs.push(data);
//     console.log(imgs);
//     event.target.reset();
//     const root = document.querySelector("#root");
//     hadar(imgs, root);
//   } catch (error) {
//     console.error(error);
//   }
// }
// function hadar(imgArray, root) {
//   try {
//     const html = imgArray
//       .map((img) => {
//         return `<div>
//             <img src="${img.imgUrl}" style="width: ${img.width}px;">
//             </div>`;
//       })
//       .join("");
//     root.innerHTML = html;
//   } catch (error) {
//     console.error(error);
//   }
// }


// level 2

class img {
  constructor(public imgUrl, public width, public picname,public picnumber, public color) {}
}

const imgArray = [];

function UrlWidth(event) {
  try {
    event.preventDefault();
    const imgUrl = event.target.elements.imgUrl.value;
    const width = event.target.elements.width.value;
    const picname = event.target.elements.picname.value;
    const picnumber = event.target.elements.picnumber.value;
    const color = event.target.elements.color.value;
    const data = new img(imgUrl, width, picname, picnumber,color);
    imgArray.push(data);
    event.target.reset();
    const root = document.querySelector("#root");

    render(imgArray, root);
  } catch (error) {
    console.error(error);
  }
}
function render(img, root) {
  try {
    let sum=""
    for(let i = 1;i<=img[0].picnumber;i++){
        const html = img.map((img) => {
            return `<div style="background-color:${img.color}"> 
    <img src="${img.imgUrl}"style = "width:${img.width}px;"
    <p>${img.picname}<p>
    
    </div>`;
    
          }).join("");
          sum+=html
    }
    root.innerHTML = sum;

  } catch (error) {
    console.error(error);
  }
}

// level 3
