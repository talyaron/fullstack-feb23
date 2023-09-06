// import { images } from "../API/images/imagesModel";
// import { Image,images } from "../API/images/imagesModel";




interface Image {
  id: string;
  name: string;
  imgUrl: string;

}
const images: Image[] = []


async function handleAddImage(ev: any) {
  try {
    ev.preventDefault(); // stop form from submitting
    const image = {
      // get data from form
      name: ev.target.name.value,
      imgUrl: ev.target.imgUrl.value,
    };
    console.log(image)

    const response = await fetch("/API/images/add-image", {
      // send data to server
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(image),
    });
    handleGetImages();

    const { error } = await response.json(); // get data from server

    if (error) {
      throw new Error(error);
    }

  } catch (error) {
    console.error(error);
  }
}

async function handleGetImages() {
  // const imagesDiv = ;
  // console.log('test');

  try {

    const response = await fetch('/API/images/get-images');
    // Convert response to JSON data
    const { images: fetchedImages } = await response.json();

    // Update the local 'images' array with the fetched images
    images.length = 0; // Clear the existing array
    images.push(...fetchedImages); // Add the fetched images to the array
    renderImages(images, document.querySelector("#images"));
    // return images;

  } catch (error) {
    console.error(error);
  }
}



function renderImages(images: Image[], div: HTMLDivElement) {
  div.innerHTML = "";
  images.forEach(image => {
    const html = `
    <div class="image" id="${image.id}">
      <img class="image__image" src="${image.imgUrl}" alt="${image.name}">
      <p class="image__name">${image.name}</p>
      <button class="image__btn" onclick="handleEdit(${image.id})">EDIT</button>
    `
    div.innerHTML += html
    return images;
  });




}
function handleEdit(id) {
  console.log("ID to find:", id);
  const editImage = images.find(image => {
    console.log("Image ID:", image.id);
    return image.id == id;
  });
  console.log(images);
  if (!editImage) {
    console.log("Image not found for id:", id);
    return;
  }

  const popup = document.querySelector(".popup");
  const html = `
    <form onsubmit="handleSaveImage(event)" id=${editImage.id}>
      <input type="text" name="name" placeholder="${editImage.name}" value="${editImage.name}">
      <input type="url" name="imgUrl" placeholder="${editImage.imgUrl}" value="${editImage.imgUrl}">
      <input type="submit" value="Save">
    </form>
  `;
  popup.innerHTML = html;
  popup.style.display= 'block';
}

async function handleSaveImage(event) {
  try {
    event.preventDefault(); // Prevent the default form submission
    const id = event.target.id;

    const newImgName = event.target.name.value;
    const newImgUrl = event.target.imgUrl.value;
    console.log(id)
    
    
    const response = await fetch('/API/images/update-image', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, newImgName})
    });

    const result = await response.json();
    console.log(result);
    // const {images} = result;
    
  } catch (error) {
    console.error(error);
    

}
}