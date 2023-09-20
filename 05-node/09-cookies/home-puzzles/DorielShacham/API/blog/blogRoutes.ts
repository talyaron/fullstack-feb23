// routes/blogRoutes.ts
import express from "express";
import { addBlog, getAllBlogs, getUserBlogs, deleteBlog } from "./blogCont";
import { getUserBlog } from "./blogMiddleware";

const router = express.Router();

router
    .post("/add-blog", addBlog)
    .get("/get-all-blogs",getUserBlog, getAllBlogs)
    .get("/get-my-blogs",getUserBlog, getUserBlogs)
    .delete("/delete-blog", deleteBlog);

export default router;
