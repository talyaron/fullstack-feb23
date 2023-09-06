"use strict";
exports.__esModule = true;
var express_1 = require("express");
var familyTreeCont_1 = require("./familyTreeCont");
var router = express_1["default"].Router();
router.get('/get-familyTree', familyTreeCont_1.getFamilyTrees)["delete"]("/delete-familyTree", familyTreeCont_1.deleteFamilyTree)
    .patch('/update-familyTree', familyTreeCont_1.updateFamilyTree)
    .post("/add-familyTree", familyTreeCont_1.addFamilyTree)
    .get("/get-users-familyTrees", familyTreeCont_1.getUserFamilyTrees);
exports["default"] = router;
