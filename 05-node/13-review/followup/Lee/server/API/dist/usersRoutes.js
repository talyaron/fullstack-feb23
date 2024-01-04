"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
router.get("", getAllUsers);
//   .post("", () => {})
//   .put("/:id", () => {})
//   .patch("/:id", () => {})
//   .delete("/:id", () => {});
exports["default"] = router;
