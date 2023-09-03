"use strict";
exports.__esModule = true;
exports.getUserImages = exports.addImg = exports.getImages = void 0;
var userModel_1 = require("../users/userModel");
var imgesModel_1 = require("./imgesModel");
function getImages(req, res) {
    try {
        res.send({ images: imgesModel_1.images });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getImages = getImages;
function addImg(req, res) {
    try {
        var _a = req.body, title = _a.title, imgUrl = _a.imgUrl, email_1 = _a.email;
        console.log({ title: title, imgUrl: imgUrl, email: email_1 });
        if (!title || !imgUrl)
            throw new Error("Please complete all fields");
        if (!email_1)
            throw new Error("no email");
        var newImg = new imgesModel_1.Image({ imgUrl: imgUrl, title: title });
        imgesModel_1.images.push(newImg);
        //find user
        var user = userModel_1.users.find(function (user) { return user.email === email_1; });
        if (!user)
            throw new Error("user not found");
        imgesModel_1.UserImages.push(new imgesModel_1.UserImage(user, newImg));
        var _userImages = imgesModel_1.UserImages.filter(function (UserImage) { return UserImage.user.email === email_1; });
        var _images = _userImages.map(function (UserImage) { return UserImage.img; }); //returns only tasks of user
        res.send({ images: _images });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.addImg = addImg;
function getUserImages(req, res) {
    try {
        //get email from query
        var email_2 = req.query.email;
        if (!email_2) {
            throw new Error("email is required");
        }
        //get user tasks
        var _userImages = imgesModel_1.UserImages.filter(function (UserImage) { return UserImage.user.email === email_2; });
        var _images = _userImages.map(function (UserImages) { return UserImages.img; }); //returns only tasks of user
        res.send({ images: _images });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.getUserImages = getUserImages;
