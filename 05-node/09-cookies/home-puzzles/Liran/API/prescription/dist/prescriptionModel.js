"use strict";
exports.__esModule = true;
exports.PrescriptionModel = exports.PrescriptionSchema = void 0;
var mongoose_1 = require("mongoose");
var patientModel_1 = require("../patient/patientModel");
var physicianModel_1 = require("../physician/physicianModel");
var medicineModel_1 = require("../medicine/medicineModel");
exports.PrescriptionSchema = new mongoose_1.Schema({
    date: Date,
    patient: patientModel_1.PatientSchema,
    medicine: medicineModel_1.MedicineSchema,
    physician: physicianModel_1.PhysicianSchema
});
exports.PrescriptionModel = mongoose_1.model("prescriptions", exports.PrescriptionSchema);
