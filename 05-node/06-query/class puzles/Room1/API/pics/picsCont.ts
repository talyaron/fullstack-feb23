import { images, Img } from "./picsModel";

export const addImage = (req: any, res: any) => {
    try {
        const {title,url} = req.body;
        //add to users array
        images.push(new Img(title, url));
        res.send(images);
    } catch (error) {
        console.error(error);
    }
}

//get users
export const getImages = (req, res) => {
    try {
        res.send( images );
    } catch (error) {
        console.error(error);
    }
}

export const deleteImage = (req, res) => {
    try {
        const { id } = req.body;
        const imageIndx = images.findIndex((image) => image.id === id);
        if (imageIndx !== -1) {
            images.splice(imageIndx, 1);
        }
        else {
            throw new Error("image not found");
        }
        res.send(images );
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updateImage = (req, res) => { 
    try {
        const { id, title, url } = req.body;
        const img = images.find((image) => image.id === id);
        if (img) {
            img.title = title !== undefined ? title : img.title  ;
            img.url = url !== undefined ? url : img.url;
        }
        else {
            throw new Error("image not found");
        }
        res.send(images);
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}
