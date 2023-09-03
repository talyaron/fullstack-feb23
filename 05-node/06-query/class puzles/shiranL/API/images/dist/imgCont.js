"use strict";
exports.__esModule = true;
exports.addImg = void 0;
var userModel_1 = require("../user/userModel");
var imgModel_1 = require("./imgModel");
function addImg(req, res) {
    try {
        var _a = req.body, imgtitel = _a.imgtitel, imgUrl = _a.imgUrl;
        if (!imgtitel || !imgUrl)
            throw new Error("missing some details");
        var imgToAdd = new imgModel_1.Image_(imgtitel, imgUrl);
        //find user that isLogIn = true
        var logInUser_ = userModel_1.users.find(function (user) { return user.isLogIn; });
        if (!logInUser_)
            throw new Error("no user is log in");
        var userImg = new imgModel_1.UserImages(logInUser_, imgToAdd);
        imgModel_1.userImgs.push(userImg);
        res.send({ ok: true, userImgs: imgModel_1.userImgs });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
        res.send({ ok: false });
    }
}
exports.addImg = addImg;
