import { images } from "../API/model";
interface Image {
  description: string;
  imageUrl: string;
  id?: string;
}

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
    const root = document.querySelector("#images");
    const html = images
      .map((image) => `<img src="${image.url}" ><p>${image.description}</p>`)
      .join(" ");
    root.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
