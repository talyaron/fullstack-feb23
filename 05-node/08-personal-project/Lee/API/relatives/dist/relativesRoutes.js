"use strict";
exports.__esModule = true;
var express_1 = require("express");
var relativesCont_1 = require("./relativesCont");
var router = express_1["default"].Router();
router.get('/get-family-members', relativesCont_1.getFamilyMembers)["delete"]("/delete-relative", relativesCont_1.deleteRelative)
    .patch('/update-relation', relativesCont_1.updateRelation)
    .post("/add-relative", relativesCont_1.addRelative)
    .get("/get-users-relatives", relativesCont_1.getUserRelatives);
exports["default"] = router;
