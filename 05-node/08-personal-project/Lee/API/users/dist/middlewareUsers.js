"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
var userCont_1 = require("../users/userCont");
var userModel_1 = require("../users/userModel");
var jwt = require('jwt-simple');
function isAdmin(req, res, next) {
    try {
        var token = req.cookies.user;
        if (!token)
            throw new Error("no token");
        var cookie = jwt.decode(token, userCont_1.secret);
        var uid = cookie.uid;
        userModel_1.UserModel.findById(uid, function (err, user) {
            if (err || !user || !user.isAdmin) {
                throw new Error("User is not an admin");
            }
            req.user = user;
            next();
        });
    }
    catch (error) {
        res.status(401).send({ error: error.message });
    }
}
exports.isAdmin = isAdmin;
