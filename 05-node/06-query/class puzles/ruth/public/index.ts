class Img {
  constructor(public url: string, public title: string) {}
}
class User {
  email: string;
  password: string;
  constructor({ email, password }: { email: string; password: string }) {
    this.email = email;
    this.password = password;
  }
}

function addImg(event) {
  try {
    event.preventDefault();
    const imgSrc = event.target.imgSrc.value;
    const imgTitle = event.target.title.value;
    if (!imgSrc || !imgTitle) throw new Error("img or title not found");
    const newImg = new Img(imgSrc, imgTitle);
    renderImg(newImg);
    addImageToUser(newImg);
  } catch (error) {
    console.error(error);
  }
}

async function addImageToUser(newImg: Img) {
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
    const { image } = await response.json();
  } catch (error) {
    console.error(error);
  }
}

function renderImg(newImg: Img) {
  console.log(newImg.title);

  const html = `
    <div class="imgBlock">
    <img src="${newImg.url}">
    <h4>${newImg.title}</h4>
</div>`;
  document.querySelector(".gallery").innerHTML += html;
}

function getUserFromQuery() {
  try {
    const urlStr = new URLSearchParams(window.location.search);
    return urlStr.get("email");
  } catch (error) {
    console.error(error.message);
  }
}

async function getImgsByEmail() {
  try {
    const email = getUserFromQuery();
    const response = await fetch(`API/img/get-imgs-by-user?email=${email}`);
    const { thisUserImgs } = await response.json();
    document.querySelector(".gallery").innerHTML += "";
    thisUserImgs.forEach((userImg) => renderImg(userImg.image));
  } catch (error) {
    console.error(error);
  }
}
