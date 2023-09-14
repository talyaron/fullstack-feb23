"use strict";
exports.__esModule = true;
var express_1 = require("express");
var PersonalCont_1 = require("./PersonalCont");
var router = express_1["default"].Router();
router
    .post('/get-appointment', PersonalCont_1.getAppointment)
    .get('/get-user-appointments', PersonalCont_1.getUserAppointments)
    .get('/get-user-name', PersonalCont_1.getUserName);
exports["default"] = router;
