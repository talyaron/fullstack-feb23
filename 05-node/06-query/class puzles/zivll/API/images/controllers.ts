import { Image, images } from "./model";
export const addImage = (req: any, res: any) => {
  try {
    const { description, imageUrl, email } = req.body;
    console.log({ description, imageUrl });

    if (!description || !imageUrl)
      throw new Error(`some of the details are missing`);
    const image = new Image(description, imageUrl, email);
    images.push(image);
    const html = images
      .map(
        (image) =>
          `<div class="image>"<img src="${image.url}" ><p>${image.description}</p></div>`
      )
      .join(" ");
    res.send(
      // { massege: `image added successfully` },
      // { image: image },
      { html: html }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
export const getImage = (req: any, res: any) => {
  try {
    // const { imageDescription, imageUrl } = req.body;
    // console.log();
    console.log(images);

    res.send(images);
  } catch (error) {
    console.error(error);
  }
};
export const updateImage = (req: any, res: any) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
export const deleteImage = (req: any, res: any) => {
  try {
    const { id } = req.body;
    const index = images.findIndex((Image) => {
      Image.id === id;
    });
    images.splice(index, 1);
    res.status(200).send({ message: "Image deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
