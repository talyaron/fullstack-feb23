import { Image } from "../API/Images/imagesModel";

function addImg(event) {
  try {
    event.preventDefault();
    const imgSrc = event.target.imgSrc.value;
    const imgTitle = event.target.title.value;
    if(!imgSrc||!imgTitle) throw new Error("img or title not found")
    const newImg = new Image(imgSrc, imgTitle);
    addImageToUser(newImg);
    renderImg(newImg);
  } catch (error) {}
}

async function addImageToUser(newImg) {
  try {
    const userName = getUserFromQuery();
    if (!userName) throw new Error("User not found");
    const postInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, newImg }),
    };

    const response = await fetch("/API/img/add-img-to-user", postInit);
    const {image} = await response.json()
  } catch (error) {
    console.error(error);
  }
}

function renderImg(newImg) {
  const html = `
    <div class="imgBlock">
    <img src="${newImg.imgSrc}">
    <h4>${newImg.imgTitle}</h4>
</div>`;
  document.querySelector(".gallery").innerHTML += html;
}

function getUserFromQuery() {
  try {
    const urlStr = new URLSearchParams(window.location.search);
    return urlStr.get("email");
  } catch (error) {}
}
