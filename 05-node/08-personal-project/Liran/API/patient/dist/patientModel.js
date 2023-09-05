"use strict";
exports.__esModule = true;
exports.PatientModel = exports.PatientSchema = void 0;
var mongoose_1 = require("mongoose");
exports.PatientSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    phoneNum: String,
    weight: Number,
    height: Number,
    smoking: Boolean,
    address: String,
    physicianId: String
});
//users collection in the DB
exports.PatientModel = mongoose_1.model("patients", exports.PatientSchema);
