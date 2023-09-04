"use strict";
exports.__esModule = true;
exports.MedicineModel = exports.MedicineSchema = void 0;
var mongoose_1 = require("mongoose");
exports.MedicineSchema = new mongoose_1.Schema({
    name: String,
    dosePerDay: Number,
    maxDuration: Number
});
//users collection in the DB
exports.MedicineModel = mongoose_1.model("medicines", exports.MedicineSchema);
