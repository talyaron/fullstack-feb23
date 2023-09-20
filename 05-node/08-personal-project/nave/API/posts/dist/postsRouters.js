"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postsCont_1 = require("./postsCont");
var router = express_1["default"].Router();
router.get('/get-posts', postsCont_1.getPosts)
    .post("/add-post", postsCont_1.addPost)["delete"]('/delete-post', postsCont_1.deletePost)
    .patch('/update-post', postsCont_1.updatePost)
    .get("/get-users-post", postsCont_1.getUserPosts);
exports["default"] = router;
