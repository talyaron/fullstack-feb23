"use strict";
exports.__esModule = true;
var express_1 = require("express");
var physicianCont_1 = require("./physicianCont");
var physicianMiddleware_1 = require("./physicianMiddleware");
var router = express_1["default"].Router();
router
    .get('/get-physicians', physicianCont_1.getPhysicians)
    .get('/get-physicians-login', physicianCont_1.getPhysiciansLogin)
    .get('/get-user', physicianMiddleware_1.isAdmin, physicianCont_1.getUser)
    .post('/add-physician', physicianMiddleware_1.isAdmin, physicianCont_1.addPhysician)["delete"]('/delete-physician', physicianMiddleware_1.isAdmin, physicianCont_1.deletePhysician)
    .patch('/update-physician', physicianMiddleware_1.isAdmin, physicianCont_1.updatePhysician);
exports["default"] = router;
