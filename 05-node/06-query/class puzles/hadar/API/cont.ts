//Taking the model from the model file

import {Img} from "./model";

let imgs: Img[] = [];

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
    const {url, id} = req.body;
    
}