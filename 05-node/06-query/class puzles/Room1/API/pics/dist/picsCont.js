"use strict";
exports.__esModule = true;
exports.updateImage = exports.deleteImage = exports.getImages = exports.addImage = void 0;
var picsModel_1 = require("./picsModel");
exports.addImage = function (req, res) {
    try {
        var _a = req.body, title = _a.title, url = _a.url;
        //add to users array
        picsModel_1.images.push(new picsModel_1.Img(title, url));
        res.send(picsModel_1.images);
    }
    catch (error) {
        console.error(error);
    }
};
//get users
exports.getImages = function (req, res) {
    try {
        res.send(picsModel_1.images);
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteImage = function (req, res) {
    try {
        var id_1 = req.body.id;
        var imageIndx = picsModel_1.images.findIndex(function (image) { return image.id === id_1; });
        if (imageIndx !== -1) {
            picsModel_1.images.splice(imageIndx, 1);
        }
        else {
            throw new Error("image not found");
        }
        res.send(picsModel_1.images);
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
exports.updateImage = function (req, res) {
    try {
        var _a = req.body, id_2 = _a.id, title = _a.title, url = _a.url;
        var img = picsModel_1.images.find(function (image) { return image.id === id_2; });
        if (img) {
            img.title = title !== undefined ? title : img.title;
            img.url = url !== undefined ? url : img.url;
        }
        else {
            throw new Error("image not found");
        }
        res.send(picsModel_1.images);
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
