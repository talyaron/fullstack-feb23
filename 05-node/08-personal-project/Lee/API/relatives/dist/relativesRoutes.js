"use strict";
exports.__esModule = true;
var express_1 = require("express");
var relativesCont_1 = require("./relativesCont");
var router = express_1["default"].Router();
// Define your API routes here
router.get('/get-family-members', relativesCont_1.getFamilyMembers);
router.post('/add-relative', relativesCont_1.addRelative); // Use POST for adding relatives
router["delete"]('/delete-relative', relativesCont_1.deleteRelative);
router.patch('/update-relation', relativesCont_1.updateRelation);
router.get('/get-users-relatives', relativesCont_1.getUserRelatives);
exports["default"] = router;
