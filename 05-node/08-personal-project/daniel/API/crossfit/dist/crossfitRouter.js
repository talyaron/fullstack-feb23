"use strict";
exports.__esModule = true;
var express_1 = require("express");
var crossfitCont_1 = require("./crossfitCont");
var router = express_1["default"].Router();
router.get('/get-item', crossfitCont_1.getItem)
    .post('/add-item', crossfitCont_1.addItem)["delete"]('/delete-item', crossfitCont_1.deleteItem)
    .patch('/update-item-price', crossfitCont_1.updateItem)
    .get('/get-user-items', crossfitCont_1.getUserItems);
exports["default"] = router;
