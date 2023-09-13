"use strict";
exports.__esModule = true;
var express_1 = require("express");
var patientCont_1 = require("./patientCont");
var router = express_1["default"].Router();
router
    .get('/get-patients', patientCont_1.getPatients)
    .post('/add-patient', patientCont_1.addPatient)["delete"]('/delete-patient', patientCont_1.deletePatient)
    .patch('/update-patient', patientCont_1.updatePatient);
exports["default"] = router;
