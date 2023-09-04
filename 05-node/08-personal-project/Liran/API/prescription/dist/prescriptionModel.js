"use strict";
exports.__esModule = true;
exports.PrescriptionModel = exports.PrescriptionSchema = void 0;
var mongoose_1 = require("mongoose");
exports.PrescriptionSchema = new mongoose_1.Schema({
    date: Date,
    patient: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "patients"
    },
    medicine: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "medicines"
    },
    physician: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "physicians"
    }
});
exports.PrescriptionModel = mongoose_1.model("prescriptions", exports.PrescriptionSchema);
