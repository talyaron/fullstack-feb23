import { Image, images } from "./model";
export const addImage = (req: any, res: any) => {
  try {
    const { description, imageUrl } = req.body;
    console.log({ description, imageUrl });

    if (!description || !imageUrl)
      throw new Error(`some of the details are missing`);
    const image = new Image(description, imageUrl);
    images.push(image);
    res.send({ massege: `image added successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
export const getImage = (req: any, res: any) => {
  try {
    const { imageDescription, imageUrl } = req.body;
    console.log();
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
  } catch (error) {
    console.error(error);
  }
};
