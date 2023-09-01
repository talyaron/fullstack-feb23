"use strict";
exports.__esModule = true;
exports.addImgToUser = void 0;
var usersModel_1 = require("../Users/usersModel");
var imagesModel_1 = require("./imagesModel");
exports.addImgToUser = function (req, res) {
    try {
        var _a = req.body, userName_1 = _a.userName, newImg = _a.newImg;
        var user = usersModel_1.users.find(function (user) { return user.email === userName_1; });
        var newUserImg = new imagesModel_1.UserImg(user, newImg);
        imagesModel_1.userImgs.push(newUserImg);
        res.send(newUserImg);
    }
    catch (error) {
        console.error(error.message);
    }
};
