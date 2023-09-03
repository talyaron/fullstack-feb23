class Img {
  id: string;
  constructor(public url: string, public title: string) {
    this.id = Date.now().toString();
  }
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
    <div class="imgBlock" id="${newImg.id}">
    <img src="${newImg.url}">
    <h4>${newImg.title}</h4>
    <div class="updateAndDelete">
    <button onclick="handleEdit(${newImg.id})" class="editBtn"><span class="material-symbols-outlined"> edit </span></button>
    <button onclick="handleDelete(${newImg.id})" class="deleteBtn"><span class="material-symbols-outlined"> delete </span></button>
    </div>
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

async function handleDelete(id: string) {
  try {
    console.log("delete: " + id);
    const deleteInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    };

    const response = await fetch("/API/img/delete-img", deleteInit);
    const { ok } = await response.json();
    if (!ok) throw new Error("Error deleting");
    document.getElementById(`${id}`).remove();
  } catch (error) {
    console.error(error);
  }
}

function handleEdit(id: string) {
  try {
    console.log("edit: " + id);
    const imgDiv = document.getElementById(`${id}`) as HTMLDivElement;
    const h4element = imgDiv.querySelector("h4");
    const title = imgDiv.querySelector("h4").innerText;
    console.log(title);
    h4element.innerHTML = `<form onsubmit="editImg(event, ${id})">
 <input class ="updateTitle" name="updateTitle" value="${title}">
 </form>`;
  } catch (error) {
    console.error(error);
  }
}

async function editImg(event, imgId: string) {
  try {
    event.preventDefault();
    const newTitle = event.target.updateTitle.value;
    console.log(newTitle);

    const patchInit = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imgId, newTitle }),
    };

    const response = await fetch("API/img/update-title", patchInit);
    const { ok, title } = await response.json();
    if (!ok || !title) {
      throw new Error("something wrong in update-title");
    }

    const imgDiv = document.getElementById(`${imgId}`) as HTMLDivElement;
    const formElement = imgDiv.querySelector("h4");
    formElement.innerHTML = `${title}`;
    console.log("editImg");
  } catch (error) {
    console.error(error);
  }
}
