"use strict";
exports.__esModule = true;
var express_1 = require("express");
var medicineCont_1 = require("./medicineCont");
var router = express_1["default"].Router();
router
    .get('/get-medicines', medicineCont_1.getMedicines)
    .post('/add-medicine', medicineCont_1.addMedicine)["delete"]("/delete-medicine", medicineCont_1.deleteMedicine)
    .patch('/update-medicine', medicineCont_1.updateMedicine);
exports["default"] = router;
