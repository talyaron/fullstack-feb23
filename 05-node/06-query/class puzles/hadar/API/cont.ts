//Taking the model from the model file

import {Img} from "./model";

import {imgs} from "./model";

export const getImgs = (req,res) =>{
    try {
        res.send({imgs})
    } catch (error) {
        console.error(error.message);
    }
}

export const addImg = (req, res) =>{
    try {
        const img: Img = req.body;
        imgs.push(new Img(img.url, img.id))
        res.send({imgs})

    } catch (error) {
        console.error(error.message);
    }
}

export const deleteImg = (req, res) =>{
    try {
        const {id} = req.body;
        imgs= imgs.filter((img) =>img.id !== id);
        res.send({imgs})
    } catch (error) {
        console.error(error.message);
    }
}

export const updateImg= (req, res) =>{
    try {
        const {url, id} = req.body;
        console.log(req.body);
        if (!url || !id) throw new Error("Please complete all fields");
        const img = imgs.find((img) => img.id === id);

        if (!img) throw new Error("img not found");
        img.url = url;
        res.send({ imgs });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
    

}