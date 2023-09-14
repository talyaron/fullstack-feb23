"use strict";
exports.__esModule = true;
var express_1 = require("express");
var physicianCont_1 = require("./physicianCont");
var PhysicianMiddlware_1 = require("./PhysicianMiddlware");
var router = express_1["default"].Router();
router
    .get('/get-physicians', physicianCont_1.getPhysicians)
    .get('/get-physicians-login', physicianCont_1.getPhysiciansLogin)
    .get('/get-user', physicianCont_1.getUser)
    .post('/add-physician', PhysicianMiddlware_1.isAdmin, physicianCont_1.addPhysician) //route only valdi for admin users
["delete"]('/delete-physician', PhysicianMiddlware_1.isAdmin, physicianCont_1.deletePhysician) //route only valdi for admin users
    .patch('/update-physician', PhysicianMiddlware_1.isAdmin, physicianCont_1.updatePhysician); //route only valdi for admin users
exports["default"] = router;
