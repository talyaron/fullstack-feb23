"use strict";
exports.__esModule = true;
// routes/blogRoutes.ts
var express_1 = require("express");
var blogCont_1 = require("./blogCont");
var blogMiddleware_1 = require("./blogMiddleware");
var router = express_1["default"].Router();
router
    .post("/add-blog", blogCont_1.addBlog)
    .get("/get-all-blogs", blogMiddleware_1.getUserBlog, blogCont_1.getAllBlogs)
    .get("/get-my-blogs", blogMiddleware_1.getUserBlog, blogCont_1.getUserBlogs)["delete"]("/delete-blog", blogCont_1.deleteBlog);
exports["default"] = router;
