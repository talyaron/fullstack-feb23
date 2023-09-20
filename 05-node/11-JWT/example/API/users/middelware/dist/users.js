"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
var userCont_1 = require("../userCont");
var jwt = require('jwt-simple');
function isAdmin(req, res, next) {
    try {
        //take from cookie and decode cookie and check for admin role
        var token = req.cookies.user;
        if (!token)
            throw new Error("no token");
        var cookie = jwt.decode(token, userCont_1.secret);
        //decoded cookie
        var role = cookie.role;
        req.role = role;
        if (role !== "admin")
            throw new Error("no admin");
        next();
    }
    catch (error) {
        res.status(401).send({ error: error.message });
    }
}
exports.isAdmin = isAdmin;
