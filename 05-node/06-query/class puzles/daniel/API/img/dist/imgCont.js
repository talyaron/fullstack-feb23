"use strict";
exports.__esModule = true;
exports.updateImg = exports.deleteImg = exports.addImg = exports.getImg = void 0;
var imgModel_1 = require("./imgModel");
var images = [];
// Get
function getImg(req, res) {
    try {
        res.send({ images: images });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getImg = getImg;
// ADD
function addImg(req, res) {
    try {
        // const { imgUrl} = req.body;
        var imgUrl = req.body;
        // console.log({imgUrl});
        if (!imgUrl)
            throw new Error("Please complete all fields");
        var newImg = new imgModel_1.Img(imgUrl);
        images.push(newImg);
        res.send({ images: images });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.addImg = addImg;
function deleteImg(req, res) {
    try {
        var id_1 = req.body.id;
        console.log(id_1);
        images = images.filter(function (img) { return img.id !== id_1; });
        res.send({ images: images });
    }
    catch (error) {
        console.error(error);
        res.status({ error: error });
    }
}
exports.deleteImg = deleteImg;
function updateImg(req, res) {
    try {
        var _a = req.body, id_2 = _a.id, imgUrl = _a.imgUrl;
        console.log(req.body);
        if (!id_2 || !imgUrl)
            throw new Error("Please complete all fields");
        var img = images.find(function (img) { return img.id === id_2; });
        if (!img)
            throw new Error("Image not found");
        img.imgUrl = imgUrl;
        res.send({ images: images });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
}
exports.updateImg = updateImg;
