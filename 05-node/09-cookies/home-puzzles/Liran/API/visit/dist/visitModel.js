"use strict";
exports.__esModule = true;
exports.VisitModel = exports.VisitSchema = void 0;
var mongoose_1 = require("mongoose");
var patientModel_1 = require("../patient/patientModel");
var physicianModel_1 = require("../physician/physicianModel");
exports.VisitSchema = new mongoose_1.Schema({
    date: Date,
    summary: String,
    patient: patientModel_1.PatientSchema,
    physician: physicianModel_1.PhysicianSchema
});
exports.VisitModel = mongoose_1.model("visits", exports.VisitSchema);
