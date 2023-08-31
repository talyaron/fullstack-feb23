interface Image {
  description: string;
  imageUrl: string;
  id?: string;
}
async function getImages() {
  try {
    const response = await fetch("/API//get-image", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await response.json();
    const root = document.querySelector("#images");
    const html = result
      .map(
        (image) =>
          `<div class="image"><p>${image.description}</p><img src="${image.url}" ><button class="delete" id="${image.id}" onclick="deleteImage(event)">Delete Image</button></div>`
      )
      .join(" ");
    root.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

window.onload = () => {
  getImages();
};

async function handleAddImage(ev: any) {
  try {
    ev.preventDefault();
    console.dir(ev);
    const image = {
      description: ev.target.imageDescription.value,
      imageUrl: ev.target.imageUrl.value,
    };
    const response = await fetch("/API/add-image", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(image),
    });
    const result = await response.json();
    console.log(result);
    // const root = document.querySelector("#images");

    getImages();
  } catch (error) {
    console.error(error);
  }
}
async function deleteImage(ev: any) {
  try {
    const { id } = ev.target.id;
    const response = await fetch("/API/delete-image", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    });
    const result = await response.json();
    getImages();
    alert(`${result.message}`);
  } catch (error) {
    console.error(error);
  }
}
