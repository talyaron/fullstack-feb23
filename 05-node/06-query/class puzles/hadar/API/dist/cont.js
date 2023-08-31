"use strict";
//Taking the model from the model file
exports.__esModule = true;
exports.updateImg = exports.deleteImg = exports.addImg = exports.getImgs = void 0;
var model_1 = require("./model");
var model_2 = require("./model");
exports.getImgs = function (req, res) {
    try {
        res.send({ imgs: model_2.imgs });
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.addImg = function (req, res) {
    try {
        var img = req.body;
        model_2.imgs.push(new model_1.Img(img.url, img.id));
        res.send({ imgs: model_2.imgs });
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.deleteImg = function (req, res) {
    try {
        var id_1 = req.body.id;
        model_2.imgs = model_2.imgs.filter(function (img) { return img.id !== id_1; });
        res.send({ imgs: model_2.imgs });
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.updateImg = function (req, res) {
    try {
        var _a = req.body, url = _a.url, id_2 = _a.id;
        console.log(req.body);
        if (!url || !id_2)
            throw new Error("Please complete all fields");
        var img = model_2.imgs.find(function (img) { return img.id === id_2; });
        if (!img)
            throw new Error("img not found");
        img.url = url;
        res.send({ imgs: model_2.imgs });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
