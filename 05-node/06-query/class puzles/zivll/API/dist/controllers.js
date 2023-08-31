"use strict";
exports.__esModule = true;
exports.deleteImage = exports.updateImage = exports.getImage = exports.addImage = void 0;
var model_1 = require("./model");
exports.addImage = function (req, res) {
    try {
        var _a = req.body, description = _a.description, imageUrl = _a.imageUrl;
        console.log({ description: description, imageUrl: imageUrl });
        if (!description || !imageUrl)
            throw new Error("some of the details are missing");
        var image = new model_1.Image(description, imageUrl);
        model_1.images.push(image);
        var html = model_1.images
            .map(function (image) {
            return "<div class=\"image>\"<img src=\"" + image.url + "\" ><p>" + image.description + "</p></div>";
        })
            .join(" ");
        res.send(
        // { massege: `image added successfully` },
        // { image: image },
        { html: html });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};
exports.getImage = function (req, res) {
    try {
        // const { imageDescription, imageUrl } = req.body;
        // console.log();
        console.log(model_1.images);
        res.send(model_1.images);
    }
    catch (error) {
        console.error(error);
    }
};
exports.updateImage = function (req, res) {
    try {
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteImage = function (req, res) {
    try {
    }
    catch (error) {
        console.error(error);
    }
};
