"use strict";
exports.__esModule = true;
exports.updatePicture = exports.deletePicture = exports.addPicture = exports.getTags = exports.getPictures = void 0;
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
exports.getTags = function (req, res) {
    try {
        res.send({ tags: picturesModels_1.tags });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.addPicture = function (req, res) {
    try {
        var picture = req.body;
        var emailUser_1 = picture.emailUser;
        var newTag = picture.newTag;
        if (newTag) {
            picture.tags.push(newTag);
            picturesModels_1.tags.push(newTag);
        }
        var currentPicture = new picturesModels_1.Picture(picture.title, picture.imgUrl, picture.location, picture.tags, picture.area);
        var currentUser = userModels_1.users.find(function (user) { return user.email === emailUser_1; });
        picturesModels_1.usersPictures.push(new picturesModels_1.UserPicture(currentUser, currentPicture));
        res.send({ usersPictures: picturesModels_1.usersPictures, tags: picturesModels_1.tags });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.deletePicture = function (req, res) {
    try {
        var id_1 = req.body.id;
        var indexAtUsersPictures = picturesModels_1.usersPictures.findIndex(function (element) { return element.picture.id === id_1; });
        if (indexAtUsersPictures === -1) {
            throw new Error("picture not found");
        }
        picturesModels_1.usersPictures.splice(indexAtUsersPictures, 1);
        res.send({ usersPictures: picturesModels_1.usersPictures });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.updatePicture = function (req, res) {
    try {
        var _a = req.body, title = _a.title, imgUrl = _a.imgUrl, location = _a.location, id_2 = _a.id;
        if (!title || !imgUrl || !location || !id_2)
            throw new Error("Please complete all details");
        var pictureUser = picturesModels_1.usersPictures.find(function (element) { return element.picture.id === id_2; });
        if (!pictureUser)
            throw new Error("Picture not found");
        pictureUser.picture.title = title;
        pictureUser.picture.imgUrl = imgUrl;
        pictureUser.picture.location = location;
        res.send({ usersPictures: picturesModels_1.usersPictures });
    }
    catch (error) {
        console.error(error.massage);
    }
};
