"use strict";
exports.__esModule = true;
exports.PhysicianModel = exports.PhysicianSchema = void 0;
var mongoose_1 = require("mongoose");
exports.PhysicianSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    phoneNum: Number,
    email: String,
    licenseNumber: Number,
    password: String,
    isAdmin: {
        type: Boolean,
        "default": false
    }
});
exports.PhysicianModel = mongoose_1.model("physicians", exports.PhysicianSchema);
