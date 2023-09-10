import BlogModel from "./ blogModel";
import mongoose, { isValidObjectId } from 'mongoose';

// Add a blog
export async function addBlog(req:any, res:any) {
    try {
        const { title, description, userEmail } = req.body;

        if (!title || !description || !userEmail) {
            return res.status(400).json({ msg: "Missing required fields" });
        }

        const blog = new BlogModel({ title, description, userEmail });
        const blogDB = await blog.save();
        res.send({ ok: true, blogDB });

    } catch (err) {
        res.status(400).json(err);
    }
}

// Get all blogs
export async function getAllBlogs(req:any, res:any) {
    try {
        const blogs = await BlogModel.find();

        if (!blogs || blogs.length === 0) {
            return res.status(404).json({ message: "No blogs found." });
        }

        res.status(200).json({ ok: true, blogList: blogs });
    } catch (error:any) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

// Get user-specific blogs
export async function getUserBlogs(req:any, res:any) {
    try {
        const userEmail = req.query.userEmail;

        const blogs = await BlogModel.find({ userEmail });

        if (!blogs || blogs.length === 0) {
            return res.status(404).json({ message: "No blogs found for this user." });
        }

        res.status(200).json({ ok: true, blogList: blogs });
    } catch (error:any) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

// Delete a blog
export async function deleteBlog(req:any, res:any) {
    try {
        const { blogId } = req.body;

        if (!isValidObjectId(blogId)) {
            return res.status(400).json({ message: "Invalid blog ID" });
        }

        const deletedBlog = await BlogModel.findByIdAndRemove(blogId);

        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ ok: true, message: "Blog Deleted" });
    } catch (error:any) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
