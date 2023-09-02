"use strict";
exports.__esModule = true;
exports.updatePicture = exports.deletePicture = exports.addPicture = exports.getPictures = void 0;
var userModels_1 = require("../users/userModels");
var picturesModels_1 = require("./picturesModels");
exports.getPictures = function (req, res) {
    try {
        res.send({ usersPictures: picturesModels_1.usersPictures });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.addPicture = function (req, res) {
    try {
        var picture = req.body;
        var emailUser_1 = picture.emailUser;
        var currentPicture = new picturesModels_1.Picture(picture.title, picture.imgUrl, picture.location, picture.tags, picture.area);
        picturesModels_1.pictures.push(currentPicture);
        var currentUser = userModels_1.users.find(function (user) { return user.email === emailUser_1; });
        picturesModels_1.usersPictures.push(new picturesModels_1.UserPicture(currentUser, currentPicture));
        res.send({ usersPictures: picturesModels_1.usersPictures });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.deletePicture = function (req, res) {
    try {
        var id_1 = req.body.id;
        var indexAtUsersPictures = picturesModels_1.usersPictures.findIndex(function (element) { return element.picture.id === id_1; });
        var indexAtPictures = picturesModels_1.pictures.findIndex(function (picture) { return picture.id === id_1; });
        if (indexAtUsersPictures === -1 || indexAtPictures === -1) {
            throw new Error("picture not found");
        }
        picturesModels_1.usersPictures.splice(indexAtUsersPictures, 1);
        picturesModels_1.pictures.splice(indexAtPictures, 1);
        res.send({ usersPictures: picturesModels_1.usersPictures });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.updatePicture = function (req, res) {
    try {
        var _a = req.body, title = _a.title, tags = _a.tags, id_2 = _a.id;
        if (!title || !tags || !id_2)
            throw new Error("Please complete all details");
        var pictureUser = picturesModels_1.usersPictures.find(function (element) { return element.picture.id === id_2; });
        if (!pictureUser)
            throw new Error("Picture not found");
        pictureUser.picture.title = title;
        pictureUser.picture.tags = tags;
        res.send({ usersPictures: picturesModels_1.usersPictures });
    }
    catch (error) {
        console.error(error.massage);
    }
};
