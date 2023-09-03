"use strict";
exports.__esModule = true;
var express_1 = require("express");
var picturesConts_1 = require("./picturesConts");
var router = express_1["default"].Router();
router
    .get('/get-pictures', picturesConts_1.getPictures)
    .post('/add-picture', picturesConts_1.addPicture)["delete"]('/delete-picture', picturesConts_1.deletePicture)
    .patch('/update-picture', picturesConts_1.updatePicture);
exports["default"] = router;
