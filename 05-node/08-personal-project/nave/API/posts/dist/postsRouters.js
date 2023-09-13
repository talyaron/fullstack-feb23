"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postsCont_1 = require("./postsCont");
var router = express_1["default"].Router();
router.get('/get-posts', postsCont_1.getPosts)
    .post("/add-post", postsCont_1.addPost)
    .get("/get-users-post", postsCont_1.getUserPosts);
exports["default"] = router;
