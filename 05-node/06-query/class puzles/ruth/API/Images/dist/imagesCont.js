"use strict";
exports.__esModule = true;
exports.getImgsByEmail = exports.addImgToUser = void 0;
var console_1 = require("console");
var usersModel_1 = require("../Users/usersModel");
var imagesModel_1 = require("./imagesModel");
exports.addImgToUser = function (req, res) {
    try {
        var _a = req.body, userName_1 = _a.userName, newImg = _a.newImg;
        console_1.log(usersModel_1.users);
        var user = usersModel_1.users.find(function (user) { return user.email === userName_1; });
        var newUserImg = new imagesModel_1.UserImg(user, newImg);
        imagesModel_1.userImgs.push(newUserImg);
        console_1.log(imagesModel_1.userImgs);
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
        var thisUserImgs = imagesModel_1.userImgs.filter(function (img) {
            img.user.email === email_1;
        });
        if (!thisUserImgs)
            throw new Error("not fount imgs to this user");
        res.send({ thisUserImgs: thisUserImgs });
        console_1.log("user:" + email_1 + " images send to client");
    }
    catch (error) {
        console.error(error.message);
    }
};
