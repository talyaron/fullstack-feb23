"use strict";
exports.__esModule = true;
exports.updateTitle = exports.deleteImg = exports.getImgsByEmail = exports.addImgToUser = void 0;
var console_1 = require("console");
var usersModel_1 = require("../Users/usersModel");
var imagesModel_1 = require("./imagesModel");
exports.addImgToUser = function (req, res) {
    try {
        var _a = req.body, userName_1 = _a.userName, newImg = _a.newImg;
        var user = usersModel_1.users.find(function (user) { return user.email === userName_1; });
        var newUserImg = new imagesModel_1.UserImg(user, newImg);
        imagesModel_1.userImgs.push(newUserImg);
        console_1.log(imagesModel_1.userImgs.map(function (img) { return img.image.title; }));
        res.send(newUserImg);
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.getImgsByEmail = function (req, res) {
    try {
        var email_1 = req.query.email;
        if (!email_1)
            throw new Error("email is not received");
        console_1.log(email_1);
        if (email_1 === "manager@manager.com") {
            console_1.log("!---- manager is in  the app ----!");
            var thisUserImgs_1 = imagesModel_1.userImgs;
            res.send({ thisUserImgs: thisUserImgs_1 });
            return;
        }
        var thisUserImgs = imagesModel_1.userImgs.filter(function (img) {
            return img.user.email === email_1;
        });
        if (!thisUserImgs || thisUserImgs.length == 0)
            throw new Error("not found imgs to this user");
        res.send({ thisUserImgs: thisUserImgs });
        console_1.log("user:" + email_1 + " images send to client");
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.deleteImg = function (req, res) {
    try {
        var id_1 = req.body.id;
        if (!id_1)
            throw new Error("id not provided");
        var userImg = imagesModel_1.userImgs.find(function (userImg) { return userImg.image.id == id_1; });
        if (!userImg)
            throw new Error("image not found");
        imagesModel_1.userImgs.filter(function (_userImg) { return _userImg.image.id != id_1; });
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.updateTitle = function (req, res) {
    try {
        var _a = req.body, imgId_1 = _a.imgId, newTitle = _a.newTitle;
        if (!imgId_1 || !newTitle)
            throw new Error("id or title not provided");
        var userImg = imagesModel_1.userImgs.find(function (_userImg) { return _userImg.image.id == imgId_1; });
        if (!userImg)
            throw new Error("image not found");
        userImg.image.title = newTitle;
        res.send({ ok: true, title: newTitle });
    }
    catch (error) {
        console.error(error.message);
    }
};
