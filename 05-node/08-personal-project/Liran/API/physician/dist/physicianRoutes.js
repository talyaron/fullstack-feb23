"use strict";
exports.__esModule = true;
var express_1 = require("express");
var physicianCont_1 = require("./physicianCont");
var router = express_1["default"].Router();
router
    .get('/get-physicians', physicianCont_1.getPhysicians)
    .get('/get-physicians-login', physicianCont_1.getPhysiciansLogin)
    .post('/add-physician', physicianCont_1.addPhysician)["delete"]('/delete-physician', physicianCont_1.deletePhysician)
    .patch('/update-physician', physicianCont_1.updatePhysician);
exports["default"] = router;
