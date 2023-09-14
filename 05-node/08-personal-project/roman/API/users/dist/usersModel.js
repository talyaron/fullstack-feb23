"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose = require('mongoose');
//class user
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
//mongoose user scheme
var userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    photos: [{ type: String }]
});
module.exports = mongoose.model('User', userSchema);
