// routes/blogRoutes.ts
import express from "express";
import { addBlog, getAllBlogs, getUserBlogs, deleteBlog } from "./blogCont";

const router = express.Router();

router
    .post("/add-blog", addBlog)
    .get("/get-all-blogs", getAllBlogs)
    .get("/get-my-blogs", getUserBlogs)
    .delete("/delete-blog", deleteBlog);

export default router;
