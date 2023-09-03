interface Image {
  description: string;
  imageUrl: string;
  id?: string;
}
async function checkUser() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    console.log(email);

    if (!email) {
      window.location.href = "/register.html";
    }
    const response = await fetch("/API/users/check-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    console.log(response);

    const result = await response.json();
    console.log(result);

    // if (result.message === "user exist") {
    //   window.location.href = "/index.html";
    // }
    // } else {
    //   alert("user does not exist, please register");
    //   window.location.href = "/register.html";
    // }
    console.log(result.message);

    if (result.message === "user does not exist") {
      alert("user does not exist, please register");
      window.location.href = "/register.html";
    }
  } catch (error) {
    console.error(error);
  }
}
async function getImages() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    const response = await fetch("/API/images/get-image", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify({ email: email }),
    });
    const result = await response.json();
    const root = document.querySelector("#images");
    const imagesByUser = result.filter((user) => user.email === email);
    const html = imagesByUser
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
async function checkIfAdmin() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    const response = await fetch("/API/users/check-admin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email }),
    });
    const result = await response.json();
    console.log(result);
    debugger;

    if (result.message === "user is admin") {
      const root = document.querySelector(".admin-list");
      root.innerHTML = result.html;
    }
  } catch (error) {
    console.error(error);
  }
}
window.onload = () => {
  checkUser();
  getImages();
  checkIfAdmin();
};

async function handleAddImage(ev: any) {
  try {
    ev.preventDefault();
    console.dir(ev);
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    const image = {
      description: ev.target.imageDescription.value,
      imageUrl: ev.target.imageUrl.value,
      email: email,
    };
    const response = await fetch("/API/images/add-image", {
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
    const response = await fetch("/API/images/delete-image", {
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
